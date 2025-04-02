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
    "4xNVFDxhwkX5YRwMAoFnZ37jdGHSSJHNJpHygYkH48LtMtggoqewnFj2w7qAZGppu66GJqZDaF5KemvG4HcHHUXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnsDbjbCtEwqAP3VcxeBSooRM9ezFXy61xrqVaZzpxUPKZUECDh7EvjS3vDNoRugqdh7ofEZSp9u3AjhPYJ2z7J",
  "key1": "RdaeMEz4R6BWEDYUjCB2o6wbwPj9oLHW2tTDTNpLWkkqnpzMVfdzsjiteWV8D5bLxVJc5ppZwQUmsrCxmcrD9co",
  "key2": "5qoTZny7GSXm7zRozkADs7bMqkSzEm1qHJjpsQQGLAHy4CKaCopxoU5Q1rfFXVFo2M57jLZ41EkF3ZhCnVCFr97G",
  "key3": "5Zi7SgYLQdPjH69vNioFJQgeRaoF7sRGHnaAe35qpPGYxWtrceLVjTnbZWuFHU77o2mQeiovLDt7uA5VWhfWZfsm",
  "key4": "MfmcQqgJ6TD5riquxyKLq66mp1jtp6egJAd6LooAesjPeTz7G2zkPeFdK56gN7b6X6rTkNsHhyzD4UHm6kj1Cdf",
  "key5": "5U9Qtw6SqNDXq91ycRcncK9Q2CZ4kMNQ4L2shenFT37zZMHmyhcsLzkHZ72JWJjR2k1ArbJFSZDNDzfDDpGVauGV",
  "key6": "651cyXjDyPbofzpHHud6RqmU6qf4cHMWdfEJjZu8d53naaem6fMhLQsMbN58gouCQF8vpm1ggUrxJb1ng1i9xVoq",
  "key7": "4fmijVjLyzmb2PnF3aAFam4aJsdJeUg4fd4LzzLD7MaxG1iyNq5FQEESLYvWSi3Y4uBz1rr1Z8FkBntHQNi4gKiV",
  "key8": "3JySfi5QRrTqXsSXLebZrDyQenH1XDBL3fEz1B9TJj26bChBt52Rqgj6uKTYLroNxiLVDn9ZG4d4AKAVzZtrU6t2",
  "key9": "4T2TBHbUoeS9J91XURnHNJg7PE9wvfJuXDKGzKbeBfVKTdT2gkyYJYjNSi6u2YCfhAdxzSGnCnQjBAJd57oMfRr4",
  "key10": "21t52CGU4JWGgppaPvP7DGVmu6Me7B1No6oKTj7U4wzkRXgvD7zBDqnGa8CzQvy9Y9WkT8eVMkwSR9e6XRiQwjHg",
  "key11": "46NdtMnaAd5b2rUP851WpuqZ3Ww8jVGNZHioPAZ5XAYJv3zwyEajUTbKYayAaNNAw6wVTSga34aTK4f6HRYTSmxA",
  "key12": "4jTGMxZYzgBYLoRSmhdu5exLbinCW6o5cV1TQySza7EdNA1LVuhbQEpcCYRbCzwNRiWZFDWNXX6r5c2hyjMa5GXt",
  "key13": "3wt798A9GE6pwTfnTydN5ifvhoi17RUKijMsFJDqyGenNTz1t8YXHDUCcgzrYniqQU8dCstxd2y8AY6g9QQ7egiY",
  "key14": "5LU7H6V9d4yXaYySmAhAzDGMmJAMSTcMMjE6Na8UFLvChmcwZf4ppQWbuink911DzzefUjFTr44eWzeNLrNZCtGT",
  "key15": "suVRamVP2DcrPjrowPRDPK6g2FVDRHb64cEri8wfp5m58cDDEsnttu2yMuGavsAgKZpuJTFserJ4kKQSksdnC8y",
  "key16": "58RsDx1PfiXpfbwu3MieiPZ8tJvcLkZfk27REzkcwLTxbQPGxcZEa6o4o77uyxANHaYHZGxixd1xATinrphcn2eq",
  "key17": "2Xn8KBqQUyQUGE9ivB9oDxKMrZ3JSrnppwr1SxiPLgbAL2Y9iWuMyoHDMR7yZFydatB75bXUkPjLUDmMZBkdTmBR",
  "key18": "2BLQi63SPAK2wovGV5RWSD8tR9W1riPq2rGbT9A65L4wzsCAXZkYWgHVZwSPNsZjzKgVJQw5di98eBTkwLFEEhRh",
  "key19": "4oDp9oAYHWXyMiMMPitDm1i4aFxdy7QvuUsYCD6jdwMgDTbwfgzMzVQgQ7fQvw4QcASPGLayZBEptV7vtg6iVxtM",
  "key20": "59ebqg1vR2QhbUn75MHgES6tHrTLEfqQHojRPXxjoRP7h1nbhU4UJ2vvpzK7iQDftdjcxdFgiJ2sLimspfyJpXnG",
  "key21": "gwEedf3JAXjjngKKwJNxCphCvw3ZyYknMy1dH9wtkC1cW2h3gCuTgVBQk3u71LeTgNY51CQhThQN14nVYvGen9y",
  "key22": "61vjY8Hi93jDpxDcQv3D3n4tp7aR5rLUVKuHVZxqMor4zgUdZpWCaiLpxhnE4spCGveNk59KhiBFSUWTNbsuQJVi",
  "key23": "n8n7nV6uG6w2XL3DQ8T6BsBKSEwvRGAm4EJSoMwWcgbhk3BB8bhjG3BPEAaYhh2AVZH5qx2owyGYLB9zRdCMxEt",
  "key24": "2BDeHH8L66cm9Zhg9DeN7BK6XBWDN7A4bAE2YZiCwRGkVu9MwGfKPJ8swJcsudpxc49W1zcBZBU1Y8XkRV5YEn55",
  "key25": "2YWXAbcqKT9p7izxz2wirAsTCKCNyowvTdS5vWfKDhN6CeUuNYdArCNC2ySos3YAUpaQXppddHYa5cNCS3DW23gc",
  "key26": "ejM38cQhmmrx6JHr3GpYvWYiJfjr6mbuR7Qui7xqWVjP2HQxctTeX88nRoBcJtbL8LX3qLCWD8exKjuKU5aXZUH",
  "key27": "4J2BjLbzhiqcw6P8gCqZqjeugd7jD6QjJVtwqdsb58UjS9eWVRXSiv2v7BB82qFSVP7AdpJARGtfpQhXk9BfVRVG"
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
