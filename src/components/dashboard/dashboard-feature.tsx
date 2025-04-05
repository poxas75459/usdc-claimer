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
    "4LdoVrQW9AfsdYHtqWQDdch3bA7XktyahtSG8SjK8YRZWshwsb9RUmrrZHhqCQmgLmivbp1mVurRCrKWmxNJcqhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fk2bS5mygbcP3mKiaGCmnX2DYzFm9VGZeCa5XnAbRrfMMNWnU5mvEXLP6NExGpBhUVmtrLiL3qQTRci7Wb7WBUx",
  "key1": "2njjnmPyGC3FKc6MadQ3qEiDByu3N4Z6dzQoxHkjCCudXALwjTzWnkfAd5ERddjR63KbDiHP2aLXtJ8A9554bkA",
  "key2": "46pgT28jUddrnre7hrxKWKt1ip786zuhbinnnJDWduiCEjHWhxetKFdpUXKN8GjGE1JxpiKXVBqZDLWfYAv85jFc",
  "key3": "5Bycqm69Ru4zcSTrR52x7E8qGhDM7PJDV8qCPraKCUnNoC719ZKsqpaZzAGgX5PUSmg5iaie1MBRi8WVwMkTJNbF",
  "key4": "4wMfSDjGJbGh7XJ3GAQrBgsyBGAo8PMipYYPcDaoxMaypY3CZkW2dzYyjB5tjL6WUmqw5NjTv6UqsJyRtyPo7gka",
  "key5": "5eBV5DYC7tRwrnS7qmE5gYEqvpc1tRPNforbDBXwaaG365ooWQDeKuciY8orXmxbTFKu3C3DKLwaTi1qMK2TxN1M",
  "key6": "3wkfA2DMpsw1uQtoP6R272iaLg1X1zxnKHDV42Fe94Z2BAq8cAyULXbNbeu6B7XXLMVHRV3UK9r5Et6qA3ST91p4",
  "key7": "2p8UtvRt9uNcnkGLNE8KW82YGhURV9BV5tbbXeoSdyYDEJj4aHqjZ8Hxqae9mhLNad5CJ5KN3HR2EPQAgLuNB9k9",
  "key8": "2wkEuinh7SSzL2VuqZ5ZaEBrezQHTaLYPgBZAuks1QZEXnvcB6vcULCQNn6VmoeAaabCZLCCvMkJkRvnBWYQ9pka",
  "key9": "5sZC8mjRuT39oUFPGudiB2pS3TfzkoWidmrV8fVuZL2B4id1JwcpoPyayaJAcL2iCY6Y3WhWKaRYGxYMHkmEanJ2",
  "key10": "3S4kufmnejNZ6pgVzGnHDD6D19GRWwNvc4b4wuiWdphQAV4tqL2EPzg2ysG5dK18WTRzaNhstjfKwaKwZYhezhfE",
  "key11": "5639cQiiHEWyy3RhtkuNviyeFdosb8gJ9F5TJMbtxRieWyk1YVkqSXDJSWwuZNwsBAHo3ZiMrvKA54QjqFqZHQGK",
  "key12": "4KsowwjCRZn6hWJZmJYTR4zEZjCRMSWbYQS6YBhtZhrytNfFsuVWvMY4nttbCr9LU9cnfH1UC3pqP2vLauZeSKf9",
  "key13": "2v3WKmTmrcxVKaMfrUqBsw9McVGjgok1GnsYAawGQf1xmgPBV3h6TFYaG7pV43V37h6vari1FoP9EnWzjTiXrtCq",
  "key14": "2s1Pdnmnuybhxzvkv5NmvnzyopY7xjDmTVJRGgPx5FmCd8odnd5EqvpVVK2A67LZDcWCsNdEb9zXHhGg5vtnauyA",
  "key15": "5VyRZFpS8jWf33NnXHigbkdgH4UKNhryijx5U76Y9oDw4H7MMsg8VAzaHtUZ6WTDAah9iVpkbPKyQxcMHfatMa3r",
  "key16": "mGV4Ke2U9pT2cE9zEXkG2bVsbBa5pYZgrmCbGtuXTSvG2nN57nZb3dVWxYZKuUF2tK6u9BheobCAGndja17fdrK",
  "key17": "5N3qpqALbP2fWSrkCUngE6cvL2aHWvxQbC8JrcmhZYwy5fgaNXcXVnqCthZ265swtvQsU1iUAMzouCsvdHvxM95r",
  "key18": "559VaUShK9Li4BHCYZNRWc3rZE2JpWcQotPjGHxUKH5bkUbhvn9MbLyEPX3gEwbir5F9o48HYA4oZiJNdKRtXvMK",
  "key19": "4xJ9ipE2Q7h7nDpqptFbNQbhQfD6Yd6Qs4KLJ97vyUEf1qaiQPV42V3Pb7hwkowej7N2McKKZLH3LY8yWyaFzWSo",
  "key20": "67RoF8XVp8ZGyFVRzJGhpiQ78PVzXvu3Bp7LjY5g3LQm4EMERxB2sqcfiQzHLKLtuvbkecR6cv2xQ1hdenbFDFEs",
  "key21": "2HcFznxHdiahcQ32DsYritr1gEkXM8ouMTi2NnBfVe6a7izZyHDQhTaw2RswZPPGYgsiBFxPCCnXPBZysXeScsSy",
  "key22": "4bgKQ4koBdfqP5angNeM2K4P1uLzfRpJmNCA6Fbkeispkx3RfbocmccUbGZ7nLrtSpGaQ2TmVSt3B64exSgB4hVw",
  "key23": "4rAquLxusgYYrhZBQoYYohSzr47dksqbJvmSFXaM4hdBRy7aC1J1g8ANYP86G5pktJATcNfXtKpzSnDbPtb1272c",
  "key24": "2KqvKxrzBL6pqkewA4yi7GyFdigRKQYazNQotDFQDkRMNdSVymrPotpXeFo4FYQ56Mq73KvNY4GqGEL3xpn6gvPR",
  "key25": "4pvNvKAAJAiiN9VKHRFGaX63jPenkn9qpy8kaRF6zQdzWzTvBZq7CAM8NJrCzz6TSzRzV82autG43K31XD3nt8Hr",
  "key26": "5zQcHoo8TJBpfbPg8H3MwgZ1jvFfH3JNFsktmD223Ytwh1JVB98a7N8eseW8UNGkeuWPv3CEGQ6wmp5w5U5nAAuZ",
  "key27": "3VxYPPbX2BzwYzk6qLSVbsn7He4dUo7k34rAgjjx7Nq2CWdPTHyCeaYTarJtLht8vNWwdaZ412KayVveVsYgRS9v"
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
