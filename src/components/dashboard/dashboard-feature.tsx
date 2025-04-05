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
    "N67KhYjJ2EnXBVPLEFD6Mo8igoVeYST3S3s13ijXq2MuVwvtjjxaSVm7NtQmKPHrHKrWwtiB49iEds4A8HMkAry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jz9P4ogrCoX7N6FfJtfNg92cosYFV4RopK5P65BnBXzy1aVg3t1kUNuJGbvJ4Aik9cppRuTEGAhHJ7bQ3ztpjkH",
  "key1": "4ARaSUAvRL9jwePG42SM1ZpjkJXnwDSbPBYFzM5uyvrBUEgsY3BhsEU4NsRP9D3Cp7tLbBpBWcwKRs4vXEciLBko",
  "key2": "4CDn9ZdWS347n8vnE4ckftB3MBSXECxj9sDk2h8EvNk7N6W7fEBZt2ySNXWfSGV3m6HrJMoKs9DTEWHs2Zu5xB7M",
  "key3": "5hHfauatz9Euu5zEvoXYVZna3QEjjU2oap55jus6Bh65oGBg5Bp9A9ppSMs9hqq9P77rUveuuxRALD5GDw96niY3",
  "key4": "2kcQ8sB9DzSM9xAy7hM2Xm2eih5mMHAFR8kfkAsox19346m2smK2dwA9biPrbVQXLGzQ5zGwTado3oawNiPrQQVc",
  "key5": "pD5vUiWeGyxXGJLyq1ZtnkJ1RVvCFQeNbaiBkwYKzPcFdgGa8hjiH4fEp1CwRKJCcKnXrxiLJ9TqmYNu6jw9cUu",
  "key6": "57FJbszL5xHSKhP5NxdQHmK7u1Pbm6AZre4nVJ9G7KnoChEF2h5xuzJAeFnK7eZSCk67TgCH5VRvr5kzENMX3NoT",
  "key7": "4SsuekZeeZmtF4UU3aTiUaefmA25QDTuuP2mNyTdzB4dL24EasbEv3WhYBDPJUh3Gobd8gVsjCGBmfNJj1qNhQY8",
  "key8": "3P1hpW23YkvPzcvQJbeBk2xLKxNiiN53wTTMZJqbUFXdBCtRTpCmAtd2UfB3AGfwVnTUh2pZt4qrEQQL8cQZy8Bx",
  "key9": "532vj3w6cUWoKNfw6PD7FBJk19cNSku4bwxyBTB8uuQQp2hqvw7sQyPVcbvUGuuGDBsAVUkHMq8MGRSgi5nC3WjU",
  "key10": "5Py3bdaKbynvHFG3ygDfUEFpREetYt8oa7mnW47jx1tXUz93fqRghYyoTfvprupvgnQrmDQsy9fUjFEFmuvxy1B3",
  "key11": "8fPZFT2qR46fhDUfjUKFpVCSNHKnzQPXKM8JzNCPb59BBoJSETgc82uZGA2o4peYp4prpDMDVzuhYGh4J22pHRS",
  "key12": "55zf4HnAABptrE4VoR9aHimgzVK9sDhnbKcXyBWXA2ZEYoDVStSwnCGxpKSjMaBxiJFvfPkay6F7bL7HJbmmMgFo",
  "key13": "26nVf1JKKqgbDoSoVpMEKEGUj2h59dbtHD2qSnEdncz8viRQoAmq12AERPCULKLcY2yYjNQQSnJUhj1f7MukHd12",
  "key14": "4bC4hTRw9TFKykMFd8tsJV45wtdD2MYEeCJsMaoJQPbcAb3C4Cj8daJYLJfEoMAe5PF5yXuM7CiCPkhwWiLg4dk",
  "key15": "3MfXYjiNVmxraUM39shejVHCf1j1Jd8NRtqCv73HFnBaSh3FrEXojFtzHpAufvQzMyd6vpG6KiHeaDKMd1PmxdCU",
  "key16": "5xoPct39LUEMHspMWXLEVEtdKFLLsRv8pXVKKjSzwuCiBQSv6co44TxHUM7zuDCTz7JPv44vQ7n9pcYzM8HGDRR5",
  "key17": "4WepwP5JTzNeL6p41rKbbC9LiMx6vYDvPZ4JivJjW6pSFiGnGRiRmhHzDzhPni5Pp5fSeayyPwaxsCgxDup7sAov",
  "key18": "4KdEJX9nVeTzY2gsksAUJ487sVs6RE81x7mCHCFFxfSZ9SZRhgFEguK8dRuRqiXKXhgDjvtioRV9kGrTrYwV8BaP",
  "key19": "3hYutVYvJLsUuXcjwXwzU2VvdADRT2TKxEdpu6tC2UxWYnSgwaavUANHjqqdRbHCeeRL1AvtjPDgP4DBm3sUwDkB",
  "key20": "34NWwoAZqYMuFG62LsjJfNLA94A7VSXCGTVPyrn1mCiX7SpnTva3SHNaephPGBdZx7k5foYss4YzvGRBT3GTf4QU",
  "key21": "2h5EjMryXzAqcYCFTQhuPBnmPr1SPTLXA6Z2xVr4UStAutjgC3vPNXLe3V3atsajZpq5ExxkWaHmWwpMrUySxLKb",
  "key22": "2iFfPTJoCf1huCEg672pNgJBX2ekamSpBrZrebzRsaBHqMmevDzhC8N9Tw1a7UmSqNUjQA6V4x3WZ4ZHKhnZsCPT",
  "key23": "3WJPumuXT7whyAGZCgLabVj4xX6JRdzdPkzMgzJHGW4KkyHgEPQyRuvCtXvQ2ZQUA8GbCKsHd3P92eDJscjEfRcW",
  "key24": "5Ba1V5o9JpMxkmwNvZFjGgqsbbvjmijDYsxNm1JH3NvWVxU6VGfa724RZ8PhbWUdMsLRxBum7GAqyeJB6aGxfP7a",
  "key25": "6GPqhT2aKQMvPhxJv2AutjgHWoEh6voTsiLY9nRVeJPtrqn57NE1kY7teRwPz6WhG5tB5jWhyfi2qgZSmxwKsQi",
  "key26": "3zVnri1NYweDLBLqD4KqrhozqpQrTZyGepoLKFVp7zAfFaZjrHSG8kqvgwaG8eg9p93CoDivdqH2WrWqFN5fU58c",
  "key27": "FA7DVirpSPis9YmrNC4SKWZ4UvRZCyo6oXtp4YUSbuVMT6ccxRcJJR92twpKp8rdJ9bFh1KurdsKFt8oHmeJEfA"
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
