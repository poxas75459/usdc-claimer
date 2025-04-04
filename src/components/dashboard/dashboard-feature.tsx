/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "337thRvTVSnaxPPjrXmocqwzZASUTAGfEML7z76nSe6PLCvrZfDmYpFYfvHv2jyBkp7mNiGJYrd6ufPF3qr6X7b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfPaAFaMvRWorrLorVwi1J6PvmhFbGdzLLUfWF6vCPki97FjoLzjv5iUEneVK8c3WvKjYRQLHjB3jGo2oeKvCM6",
  "key1": "32hzeTtrgeaGhyBPsUVnVcSCoyuxVrwqPSnkfYAtFYMSHEAvXcN5ZSSjqVkfALhiNMrt28irVVUY1vjLiGN5mnmB",
  "key2": "C3xdS4SkWci6CREUZpnmP8GkYvReuQbiZN8WzZerCfEtWxxG6Zspn49q8QU1khsQiL6nYRcGoHkGgShTyAjiE3G",
  "key3": "3Sv2qQx7Fah9rR5h7KWzMLWMiZWKZsjHA3v1nUvVcMHxaZLLrxRMxcTPdFeXH4kqwbsgNdZKyL9GXjRjFxm27jwC",
  "key4": "5Z3MZhoFQTsRTuurVcjw2Zo4ue4KsY7AAsCyvSDN5R4jo4PnevfEkRhmSJsFdKLKZRmXYWFjnKr67dLoiTcaKZZ4",
  "key5": "3aRJYbC52SRpaMUr64XS5CmWP7pXK8sQGNaprN78mkNgUCxKhXqz58j7KnavSgPp3byGwA6RACcK9puu2jMnbtQZ",
  "key6": "69eqNcpPedW4LhzpHfdn5ucYEHBupzeYM37ybPMVQYoNv2PrFTz63YWQmyzawEXwpiwCDT1P6foyuhUidCx45ra",
  "key7": "2c7KD88ap2vaR9ktWj2GAsLQmEqcSThroBbhzzqvBZnKo5ysUJbPC22httnNDVyM1Pnr6TiM9EQxSFQTDnEx6Wrk",
  "key8": "3zxeDJHwhFCgmbUfpjiJk1gMvthbei1CfCUxh8NjQ6rtCKcyHKxCvehxYq64oXyzSngBC7bXA5inSP6EPdSAN73",
  "key9": "6vmGGTCM1h4GrgZpE9urZNzjPB5p3DHtP9Wb8ivUN3vL3un2ipZQpaFsoEUWHYt3y1Q7C8cNNJqeLvV9jAodibe",
  "key10": "35jXZrdV6mdLXbqWWaPD6pW6iDWboNccQDjmiVfQUvfAqPTKLE3MLMaU4hYQHtMf3ogFLs2siBuvtbgxSjybqWwN",
  "key11": "5RwbhVpFLw8Fxy8yCNpRm2NX6GhGMVUgjARRjbDpwCCuGY3Jfab74mtABfCMBo84GCJQyhp3WwfR1HMRQyTYmGV7",
  "key12": "3B7YA9Gx7YeZKbn6Bf5bJewGUyKgafgiMDDdXhsMKNAaFRCDeYKYL7hirEe9hdpgiJjXXAuaJeRjsDXxKPhtup1g",
  "key13": "or1tgDwAZmAKwDAAmVNCEmagnCkbsorZpBPmUjGjQwaLzbbkRFYm5uvhSTYsYFo2R5wgH16BgSUFa8jJoAP9uRc",
  "key14": "yRkace6ycgjbfB7tbuxU5cVnqrJFdP4ijpxEtqtwUYghmRLWo8QL3H2phWSCaTkHVCZdBiNaY9CkEGJNhRz1omS",
  "key15": "2Lw1NYtwP93NGfVawMdcGTYnkGenbHXmChGULKuB8A8tQkt6LXpH1JM2HhexeAXdMHosAwPTUpX9VZ4AycjXLc1E",
  "key16": "5jEkhLbWx8VV6eaxvRhP7BjSggdB13UNwaopsL9ik5jHNcbJtVLc4UDoTAZTpzvFeKvY1oDY5hTFhYZ4rJgZaVYQ",
  "key17": "Akqgsfjak92sYuu6pWr4vpiAosGsmkk7v578hjzuDs4WKGiza8FH19ug1o1p6fw8LDDo68ynZxJGB4xhkk9TM9P",
  "key18": "4ZiN7poKVuQ8jw62CKiBDD7dzpJWn1dB13sAFn7f1Us7kSdFSbqNY5YFSE6uDTXS4mjV3FUtpxvUzct4HjagC9Cw",
  "key19": "2DrkVxd4EgCBezguZrK8JUo33jVGGvkNY6JJ4uyVGA5qW25ss9HRJnUiyLJP3XGFbrXm2oYVGqM4XDRN8gno32H9",
  "key20": "5VVw9ZAYRftC8Se384aMBT1nJTy9wnzJvgL2X8At6zKDrp7yGtN4Mp38V9ruequMcthS9GPaQhofKXUAnQpyEJfA",
  "key21": "3ayPk4G7VrSxzLWSr6bysW62vsgkQWoBE7uacf49gvyAPYkHz5Zy8736Pi7BEs2yPyeQpzQGoBTywdCjapUgPXa6",
  "key22": "33ZnW5ezt2mcp3eBSyTDYpGKUtig4pZ8YiR13bdunM2CCT24p3bBXpth4BVcY6hU2LbXWZijaRaQjqQT7nU1inFx",
  "key23": "5BUG4JbuxtD7XowhorCaWXuMFNjajzVV5UJPM5hsLSDEh1o6DSbovcV83NXWYjXgtuiSTSCr8gWqsPd3wfJ9dBzg",
  "key24": "3Byk1W7F4xk6Ci1pSP2y5xDbopXJ9GVrFNYkNVLfUzC8CBYtbPDjJ7aBGxRNUX5NUZkikQGZ2kw8Ddebqbt9m4rh",
  "key25": "3Wp7TP7yhqTxDQ1BJoeDwev8KEuzK1eskgHdCjsHKdtDkAHd92y5b7sGcWXaQQ7edri6zkfUka9FiSrQjUdSEs93",
  "key26": "2sjva7XPEH1aKmRVNkBWVWxmQ5w3cAcJXDKkNZ1fptBg8QAow6tuKDqo4TMjWj883xzanfjo8c6o7HprnXKgUvDV",
  "key27": "3FVWqoJ9Rg69GG7DGwWBcGmPEdxht9cMyUFETdGbvZ1TbU7Du3gk86AatYabGZLWEPJJhpqA1u3jQUPpy9hC7i8Z",
  "key28": "2aPZvcURHJeveF6nai1w1XR9LDca6BCyYBvUxvmtviK5bQnXrZtgXcRY7Nn8pZrghxnXBmaQp8ebn15ya7TGwqXf"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
