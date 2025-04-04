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
    "4umJxSff6XSdAXbDEW8yasPRsWwDB4mmVoTExWoB9FMJZ5kSX4tukczg49yjb8mUhgYhS4j1E2V5DbaWZgFgskmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34xDHxFKSjQVNsvUY5J8KbiwMnBPxoaAiGPTfawHCa72P6sr17aj7mKCPEX9X3mV6FkfZ2qcRNkLVuVob5bTyWA8",
  "key1": "21zXhjWusq112yuoRW1qNja97fRon8GmW4rJzwZrAAdtrLkqReW6P8r3fEhbU3b2fgWLFPfnfHyjmXScTuMYqgcY",
  "key2": "4zcm81qmZiwMccbSXRA9idqfH7QRBsZrau1iz9SJUhtpMbo3Yy8Ei9DCMkcmXgfjstQxXxhkMtS7NAVxehgHyBd5",
  "key3": "2H4PKNtm3xepUYYkNF8pBRjjiRVX7poY9mYFQUDNZzPxs9BXTJYWZmgk7FEQbPuS8H2kFMuKb7YsYYbABtpDCms2",
  "key4": "2NUhgoHpd9kcSJBxRMQ9rP3Z3rS68YP8GUDrLX6HFsuu2jnq5c5i2yJgPt6NQTYuUzdH6RLFX5xDwGFPwZFztCAm",
  "key5": "236CTyach1FRZnrHhcTBY4QPnbAsbTN5S8WwaJ9D9AiPfcFBMQtmM1aGr4VJezXr88n7YJBPgy3WKSjTQyJRE7Su",
  "key6": "2avKwgWoTTW137yBsR2p9kSvYVcPHTgQxskPCHojnSn1bNPoxyK2F8WVgDbRhTKTuWPdS6hmwjM9DTeTWxn6f7UL",
  "key7": "8K8tsH1E2k7Fx7Ui26d8TFC2pR3YFTrrL2gETYGE2miCk7SZDEJ3upe1uRo1KfNiUumtmsTSnKCEQwiqLM4QRJ1",
  "key8": "2KscrtfLv3bwCx7kTTEK2Q11tHsjQoRZQQVqvjDqeKT7KxqqnQLjoSS7tZjitqprTLotYyt4SLg49ZsSaxTvxfvq",
  "key9": "2ah75gb5Mwf36wPdNnnKjrvE9kXnHfeVJvr1F5Snm8dV2najR6rqRJNtJgF2JnToAtCfHPg4tZB1FBkiUkDB8gKy",
  "key10": "5713aeJxsxaB3vvuQoTaJFC12x7zrJYDjtrx4bhgPib5q4gDNq38YfZVDVr4oKiknk3X8u4DTefSqitxWZwH3Wcd",
  "key11": "ESonuh35B8v9QpwBAz6Da2RKAWaHtxbMjV361YPMs7XSUdMNHbLXEnd86JM3Miya9h8bVzaD8xagLQ3Y5UrESpS",
  "key12": "mRQ66kJyCJW1NWXVdeDvroALXd6sdq2odfeatR7kJAbhX2BeJUgzC6endjwRJx6txYM9MQxv2NYFtJQZae6JiiN",
  "key13": "2ivHbnHfswQrjvEU21QnKTjSqYkUeL5i6CwKej6NB1xyGYbXPsefN4PWR5thSbGbbWg6RpZvs4YJSV3aTvFDVwHT",
  "key14": "5EFx3BYdfVkfxGBra7Gv1v1MNGJkUE46aUyXtLNdP6Mae2Pn27vErq9fu9RKcodLjMrfNqjaF55iM7BfYtixLKyJ",
  "key15": "239CQuoDzGa9UL5VTsnPTMz8YNKVhhJqThhh9nkQKPipZfnKTZBt5eEztgRXJPM1HiB6zRiG5HmmRaFW55ucQ4n1",
  "key16": "21Z6cqn7m5L1PGJ1ny2ZoaeNAkB87qvxZUNb8F4dD2MaaLMJAK8xR1bdZSCR64Q4GUCf4tvcTn1x8CzDw5qDXsBE",
  "key17": "48XhrKeywQsfyR7KosVDuY6dtTM178YdXArybCnnmMk5Fknp8SQejyr6xJr3Hzyg6hWkYahNwYzwR4pzCTbhDE9T",
  "key18": "4eFdYbPs5FSp3EEwDJw1ZtX22xTVMYGvQWVZfqxv5hE6JL5nZLGULwn34XvQoyUbEjFwBaKzsiUES7B3sxPKS3VX",
  "key19": "3XBjZYxxz2PU6DZFrS53j6PQB5HbfNMqdj6Vwi2rhemWbKtZm8eq2AJvW54zmPBy7guru12QjMRLLFVoYrefPNyN",
  "key20": "613YX614ppCkoDsxji7E9Y9cNtLa5p11qkWPemfJcKuSJkeigJWKMemxQord1igG1RieoKwRQUjqDz8e4k36HrC7",
  "key21": "3cawwxA8F3QbTjTQxjui5XGnXTfLiRjtwti9peoCidpxcXiM6BhRFtjntinaQ9CXX5EAFDmJ2t5thJa74aj3n81M",
  "key22": "2gSBzt9tCTvNUcvGvr2UJwRuxjf6GHywS5oHZzpezrdokJ4TZUEncmzCiAjQMrqecfFmtgtGEx991GdKTVL3rgbX",
  "key23": "4bsZQ2wB2ANBjgwVCugoTU3RJcNopwWoYJHddxh9Wnrz6KYKz3BoXbZUPVVSYAjTaYdpRZvDuNqnGYHibReH8Ry5",
  "key24": "4mMudFEwU6YKVxXqcfDXVZmmtShbVR4veBD5XRZXavAKK65YnaRmrGKVJxhB9NEsHNzxudGPtTuHJjRnQfrqeTyo"
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
