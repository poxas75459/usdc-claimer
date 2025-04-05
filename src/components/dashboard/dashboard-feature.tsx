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
    "3yQ4jpyuKst4Ym5HuaFqUtFuibTEZ7RvjskJZhs9sT46NNPgeUsJVrG4xK2akLvnn86vT8KnHMuigqgWScXMrkjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bHQh7yAtLTMpCEnQpNTMFc62uJppsvMfiprMycxa1L9T8bWN7xqmdzqczMTmVd9TVGcujUZRXvhaBv1VDGvnFsz",
  "key1": "2Rj42NUwASiZuEyGg2xNwjuNZyvPdyGBkQrAPM2qvrPp2awmeP5Mh7VBSs932USC9WCiruaqWCuCCmLYhrcYVPx7",
  "key2": "39fTDYynK7JbjXGjEiciygjR9HsmhCBywTXqHPnCuQc5snE6981ueqxKME1L5LWbHWDtu3gkkJfp1C1ztCrRz9zQ",
  "key3": "4yB7LfCEBi2rikSYQ5xPN5EuRmW4RwdeYgWjCTrZNuDiYy8VWb1rhvWcC3zRUbbUoP4mbBgLMLsLkxSfEP4jcxyy",
  "key4": "3zxbmKT4tgsL7Z7MJnMVGQ5dgVp5m3UsKfs8p5AAcEARC9uxuzxXccBKSFJWbpi1YHXNxEWSgRnEJLKjdh23VWea",
  "key5": "7K8Ma6xQS5FgpduP2RvYebRNBiUkJGa7QXqV24fvxtUUEpThhSFxTNcSMdZkikukLn3bUxm9YAEWU9sWUEfZr3p",
  "key6": "ArERS4E3AhsL5PEyCwKdbJK8Y1j1nRYgHDpMBvxMBLK8QyY125DQrwn9pFUQmWMKw82GEZjyV9pn9mSrZTTYgRN",
  "key7": "423guuzgFZpbT8y4s9CHFjZoWLj3AEVzdsMqYtaKY4ZqiD57eSmHs6Vh6rnTHCD9oeW1ULUHxPaQC5VHHXMgXsQ",
  "key8": "5YBynZEUvJzaYehmT7NTMNmGqRxuAaNKsmjPDjK7jrnX4VsLDwEeGRdcMhVBPyKWQXHDq7Fez6vfwT9kEvEijDh5",
  "key9": "2zPPbEPZqqaRAkvhYFzzL7kK2S4TfaikahTrJ8meoPGvaQoqTTCF5hn8WCo8r7JywtNMrjiW3c3GyTXNmAmNJiJb",
  "key10": "4Gke2ZoEJVJP7UkxATWUD6XzofVPFhgjugPJjj6pkqKToctWynSJezDSKiKAquDW7jjBvm8oBSueC6Qif3MyHfn6",
  "key11": "61sDN1Yoo9C94vJXNUgsBZLSJsw448kc7ep3oRmmsGR1fbx34hDD81CXxgnKMGreVRXk57xWu6JUfuqVthNGGoEy",
  "key12": "bW5jf7eGRU8PVP3wWNxDnQuNiQTpUAx47GkfECMZEMPZxyafWWJZAXXUJdx5JyWThqDd47AyCwhVAmW71JaywBf",
  "key13": "pH8EhnedRWDjrRkUxydKs7gsz9X6gvUHKBJDENTrYRr9Nn8jWxj5AZ5y2MDFwyvtVEcvhdJah6jW7qZGWx8bVGY",
  "key14": "fQiEJQxyLQgycJ4WZCdR4iTEYEAzEUwTsJaBfbvXJNXFXAxrRUGCJyipsMG7TeY7um1ZJaeKFxMP1Hw7i3B1iom",
  "key15": "2kVg8N99SnaZJRheeZp61cjZ82DZ6oQMxbVYEU35ewRLBjVwxFK2en2CFcyxKuWbcnWLkf2SXPyALALKkCTAHSVZ",
  "key16": "2EMyZVxXPNkgEUF3PAjhXSSuxnY4cmRekVZfUMqVbVntbt81runmtyPhET13tSVURn2jyjinf7HJYgNVwcUkB7Wd",
  "key17": "56NpM7gS8apLxvUSmT7i8j886d4ibJiNPcnZzoGLZCbS3XNQWrHn31ZVaeUXjvwqgABjmdxNQD7Xc8EfgFUw61vm",
  "key18": "5TFFXssfWfBSVMNog4Mh4KFjwAnkZZwQt4WAHDZ6fvF6xmXERj9AUBPCAD67MaKNNhEzB3WmZca3Wd2Z9eZUD9m4",
  "key19": "3V9Kz89S4pwMsxgeVSkKXnsZWfF56uL43K3SMttdLF3Vrsinj78GK8cmGfeT4cnAp5nrxPwgzh7Km8PggM6qDU2K",
  "key20": "61iaRFzT6TgozXGusT7voJnFDRHnvqY7WF9WvZ3UsdVJS9d91jta5ZmWWqAhv7d1515hTJdFSfeiFCoHaJJxKixM",
  "key21": "2azBnmcaQr3Tj8D6idgGATXM79T8bCeqYTe1dkgM6rYaNJ5dqGjFsNr1d87UMFf8Tuzk8CwMjaM6Gnwcq2RZB1ye",
  "key22": "5EnB11bwAWvCHapqCBLCBvLJc5eALoDRHK9bKZYPm5u7x3Wc2frRRY2TPywMSXT3WfNKfJcyijzu4AEr1ukswyaU",
  "key23": "3Zqe76ug4D5GgvDpn9hKdYM32Tmdidusi22iizivdz1kmBwuMbXbAJjMQ3F418rugtgU1pv3wRVSovXBPLqAfwvA",
  "key24": "ZB4ApuhMZvdzyaN7bjNCxPsqZ6hcLDuT3CQsS1DzHduMYykgv3ZAYft8npZeFTq2MJRCLwCimyJaV1vQFT3UALi",
  "key25": "3TubCRhhnPNyV5Vvacxuoq8xqadQth3G5Hju2deMo2aCz32EvKWUx5pzHGMk7ziNWSt7YwFgiDnbpqBgAUqSPSxV",
  "key26": "3d3CK1GC7bdfS1tM8v6h11J51YEoxKbBDc7QsavMmubyecirQ8tkAiFLKZt2TH8Ycth1JviffpPzVXSi6K4KXwUz",
  "key27": "jqErhKQat1vwJdjDygzu9ehQb9ZhTVt2tKuTThBJsvMUnXUXn1zAbpfsHGjmFLdEAWZ9C7fsmEq1Xtix3xhtCPW"
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
