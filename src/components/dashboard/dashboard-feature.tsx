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
    "5ExVYjysDsYdKVdjjFJa3h6FJ3jSVQd4bWEnSxnJoqEQgtqjVB3iu75w21xPMex22rgEgy6MFgjfwxuqYWmvzEDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnArPhs78WgyRWMJ1yjYXRwKuZyPeE4ryqCB15tTKBxxdNArXKwc72NjguMjtEh1mkeYnoWa4zL5RaXsk8nXqec",
  "key1": "42ik3MzZtQYZZ17wYES9Nm9eBDkBK7x59HN67h8Q9cjRHogNcWxBJR2dHGjEsLD1qGWbvP57JmmcmAxvw6zKzAfU",
  "key2": "5HohSWXef6Kj43MwqMJcBDiXPpbbgpmjbppUdXHLnKZBPEF4dUEPk2Xjne4h3TuxZVWruStWaZ8YyAdqcJLqMEkc",
  "key3": "yEWbnMwrKYBSLMLMZKHBNdKN919kjgEGDNWZSpqhLmUkdEMtCxspmCHa6nZsoa9ny9CwvX7R8v6vWuaFgrGDNm2",
  "key4": "4caXKnTyYe6aGEP446ingJj1pDJEeSv2hsi6ijA31FNXS12keJryq2AGTpKsoLT3x6qr76tHeqTxPHm5MqvGErcc",
  "key5": "5YUpV9cY6DMJHhhWthdfeQuke1s1UiNCHTCn8dEgbV2h8kkpnPvZMFT6J5ks1dWVvWzAoozNV3KCvjMgkfwriqbN",
  "key6": "gBXsq46m5A1F4GQYQgdi87ryYFV7jMu4BSjLJNTx8wjEAGXGmzqLakY1dhfYP3M2BmaQq7Vo4NaKjjuGiJZVEe4",
  "key7": "5ThJU3RDGzVJ42K41AACkwQJGqk2PBvfammjcVxeqVYE9cZVhhXedxVSng6zQdA4hX6pTB75LKBjTmTzsoQMhm5j",
  "key8": "2L1W641n4rGHA9TZFZTJtusuhYTGTFj2xU1xwyWqvw2sfi8GtmWvKNjAAoASj6Rrz5xEwcoiBWtowA8YDz4QxNug",
  "key9": "21FXrpbVDfeeuKKvwiW9S5sHrsysMZkwkxoWqXdjwmXuxLZbvA2s61cT3j3fepkVSDQ1DmVKPK8J1GWQwbbvuFni",
  "key10": "2HQTgYys6yNMHoXXLcSoZuFFSx5w2fKqkttm9mmRJTiGjfYufVMeJcrTirTKw3xrm5pkQDK7QMyc8eDAHQ4d7qoD",
  "key11": "3A2WnTCpoj8Ur7f9BoLr1nF9RuwnMpYXNtpYDH1NLExRAZYJW16xNyb5A75NqaqG4S3gPXmz3wCGaPRQRGjmnoi1",
  "key12": "K9536BziXsUCLfVFVLK1iENT56ueK9sEdrDpzGZShiWXuCQctpCdwDSB54vTa77JmdfVv4hLLbhRmaLiGZTtWJH",
  "key13": "4hK4Z24LKGJNstnZshKq8gbca8Q4KPpiiQxD8vZNpFdWiqc1ubrrwCVmyZwowr8MQdgKuztbaMwzJPWCo8PbCg58",
  "key14": "47hT1PJ6PEx98X69xW3JARw258ZA1DEG1tYQbPR2VZ2SVViJHK9RKs5jmce7RYiwdzFRvNj7f33mNZNcFerKhTaQ",
  "key15": "4AdYbBeTg1mwwYuNq7EmRX2pXSgSqAXMV2WwEeBX44RkM2k1fJG7Zb8cUmTUELtwsSJPqTB1BJcwGTugYz9C4TK5",
  "key16": "2vZyWw3pVcdCyNbHauPKjMAmsQqojTyPkyDoFZgLroAfwoudP4xFLB7LyhogtTXEPnmMiUc5EcrguYee9isdkZps",
  "key17": "4mG1c4GKY9bBqG2eM9ErGWsqcnZ4a1jCtQgQjQV1ZrzYmtte1GcQcmzmVPHVxH4QZakPQgLgbVyMAKUFyqyjHwBR",
  "key18": "2YbzCp1rn386Nh3c5ZfEWHtEabagVBQwjxkA8XL8CQXsCYp7CLWusW6WNCNY5MRDTbQu6fZMc9RvycxJ8kQHTNGj",
  "key19": "5a2UG4173jsmwgmGGp6mdXbKLHgntkx5gc2qBuaAMggk252r1hUo7nR6Q7T3m5RqJgmrXREeht7SE6em4TBqAoQ4",
  "key20": "3btz43vhQpHUBtUn4rqbyC8SxSYPS3PWKTULSXj62dDUtkGSzy5EkR3Czj8vurXCLReLE9aBuMGrp9y4BNUekmhW",
  "key21": "52T13yBoW1YHz9TAWxVE48NKUUPkhYjVvunh3Z2wGkHdvRhKTVUsrYXXY6ipWw2azBjCMJyT8NhMt77bjgVcayMy",
  "key22": "26SPb9tUcFCiYLP5pbNA7yvRds5GQeNgZPczuHDnimE63JkXcRXRbYdDfnbx2GgVabHPpBSC1FUizaH8XUv9zoDq",
  "key23": "5z5wMCA2cruZ2UUaE1yMDXgTRZZyRCqQMody5vcVTgMsBoXeJ9q1La2F4KSLbJh8gLcq3k45MQjEuAQwVHn53afS",
  "key24": "5EVH4fbM7Z5KdsbK9rgeeAsc8QTn8g8sbX91kThTqBmaJ4hArk1KiG8CpiJqJU8Av7BUKf3fFswFTU446JmQa11W",
  "key25": "5XGcZe9u3NoeoMpAqgYgngeMm6t7nwM228mhnYshL563G4Dnckbug1ArEoiHUX8DUnPpL2okEaK3ffvHUWCbKzFR",
  "key26": "sr9Ka9tsBv2ocdUQXHHrTRGtPJ1bQ4aC8ya1K6ZVJYKnKxkC2hCwubibHSBR88jrCxsD1jAT73qoCqmjDbixaYG",
  "key27": "3TpjsCSyHFpCbwVuwABjR8iJ1Ut2oTxw74x8ruhKTehmtpr15Y4FfLQv8gpx3i37F1jhsedS5wGJAkn1zEMsJLvC",
  "key28": "62LZW6k458ksCMQr1cxxhtBXAbScdPisaZLJCdcHM5QkSoncpPYygLerHKtBtjA32k76PA1J5BPGmhQ9SZxyDLRa",
  "key29": "RUvTRz5Q23RcUUsQuiXzbHgAYnU5Zc8EuoUPru28FfzcgLVcQ5kHS7w4an9TxLA4TyjRoJnGAFjg5GA4EreSReH",
  "key30": "5omgjpGuQj6nS6YQgwkXYUVABakLjrHT8WvS2w77YhR4D2YRbahFsPvkULNy53VFaCaBgCxJWPR3HBYbQJn8gUs1",
  "key31": "2Q4BcKpCmgqKDcE3c5pRXrmNnk8n9CNmCK3j76qgyNQA1bE64XqBsqguC6k1PoxjAVYqJM5TSkdETWL7Xcw2hzCZ",
  "key32": "2Tvj6YFTmtGuYhx73q9dj8aJMjjuas6m7mTSJwTp71DrBL8qfFAjRpJFauBtJDJUhcHSKo45BNu6ursCMqEscjjw"
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
