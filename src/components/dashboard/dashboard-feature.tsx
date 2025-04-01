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
    "FeBoT4i5ewwreSeXYwG3xXse36H7816nH6zY5mdAPMTKu5CNUGHR6Zyybo1xBiUx9wji1Yi8F5E8V5u3ajk37wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YV1gbpzpwBbS8SpheJqCXwpCK6tV3Uzqz592TqgRtqmsjMqKTkURjHRiRfPnBM2vW4UQMFody3mZNPiSCYU1ry5",
  "key1": "3m5pUWRFUU56nfZdHHdRU21bJjGyNT3q8xiEEEnV1ubwQqnCMgwY7DkoNDB2wqU2spyZhoUcu22uCNa4rF4oe4zu",
  "key2": "5RjoTKSyiyn5hNKZfaFe5nJsDp4573gcANcPgkNR4eLF1ypkFiS8aeb5NA27Qs8Efd7PiGejvyr9L54TmmCswmJc",
  "key3": "28i2tnyFgpMCfYSrHZQCAVv8vWZiX4ryfZJ6XhEJmDAn47Ay9HdZSXrjNeBEmpbsNpU3vE5T7nCqe8HJUASimahz",
  "key4": "2iaWAhAc3za9QVxbfHUZedkbWRgjd3bJgGLiVbu8u4orej37xvWnxGA2QNWPoY6aEaRP7eaNMTKj8uMceWCNcfwn",
  "key5": "516JHjVUpN2MRu9aunrvLPgYwBdNPdCTRMP1AQHcd5joYsx5DvS6xrbL5YpoFRRqqCo1wh4VfL2FrCGv8nMxd8hP",
  "key6": "ZgGXzsn3uvZ76Tbv9Na5vb3rUdHHd2nZxDzy3CynFCFQ6qNVy3aLE5BRW77eKCeBSR5X2MRay9nSQ64bzQ2BNLg",
  "key7": "2opjCRhuGC72fyY9PxpeVPVFZwjtMekSQgMmVXvDgqHMH4vFm7dg9JzLzNXdAmZFbsJ9Lozb3KoxLPJBc9vmD6LS",
  "key8": "3xStLUoqucKTjmCD11TpPjwi9pZp3ymAoeSrsFV1fx9S4udX1eKtHukPGJJzvAGWu9ZDjGEGkQYm8SQir7fNyN5S",
  "key9": "57Gvp6NkjNRMWeMm5h7e29VgerwGZcCXJz97xPeyceizBXZKwTu9qU9xQM2NbCxQnogVRrSaFeJ9RqwEmvq7p6SS",
  "key10": "2vJpe4tfhoHUiXeGurWidPKWHz3KWUjNQNvHYkWij66j2autU6CcWjzx9ebNDKFax19uycDsn5GWJp3by4XdbPDv",
  "key11": "3DvcUEtPTMtK2DxdSkR58pYspzF6aZXcPFHAcp9rs6i1KTfmiRJUDZLeR4MA2Gv7A6ayYBUtT6iFBwgASgwEskZc",
  "key12": "mBa9uXBkM9sjwc5PGX2ELEy1pBaQcQSTUbUbLrSBGhmnTNFSbQ6R9qtvY8YkKT3xVMZxjh2ccifxJL76JGH4W99",
  "key13": "2nqMnQCDfy8GNn2TFsh1yBenREf1eZXUJ2SBJbJwhPr3inHrYNdg22wADApmh37eaC1c44PLEnzUPjM6s9tGWVgo",
  "key14": "5R7ExSAGxCjnGvSmWVJQDPsR4QpbZYDQwgN8avQdaHc81e96MrVWC72dsF2oJfYKa93xYvMaXUa4jfd5qk7btjbw",
  "key15": "3cKhNykcYbCVkfh9DyDmkaeXTh1ffztvDHhp7kHGgKbKheeNdL9QhgS1wPPbhvxL3SQJcjUycRnvevgVJHphPp2j",
  "key16": "2GpQdRZBYMC9195wBx7QFLiPwHxG4eBgywAbxp5u1jAms3P55LQuEuWC59H9E759fp45VLoZuzbsn9zf3CsWDWR6",
  "key17": "3jWwc7rdeNTnjmLapEcynA2bpnwyWncX3PixA4CvQea4BkU8WNMrM8FS1ig58FwJnkpaNvdvdJJKvFqBA5wdDGi5",
  "key18": "3b6turY9AXHYSfL9u1HNWaNwcKCSTmeTQAiH4FENV54EzpaJoaQw4VeWUkE8xQCtXEwFHfs5DYkKjUckVXZ8ixmZ",
  "key19": "2NSe13tawVZDukhzgYMagdAow5HNaTJNRHgQcEK5uixQsdqSseKa6tLBaDFJd2eVaJq5AY1Hb97NqVUp1un9HSXb",
  "key20": "4APiGdfsQcDrQP57km24T4Y6zCWnrMiD7Tu1Gg2HoNDRkoegCJGdbQEb3LenzepN7AGVBA1gVwTbMUWwhYFSgLBj",
  "key21": "5Qq7SbRtD79YQfyTWf8HZoUrmgQcJsVm7qA2CSEm64qPUb2uSsTgj9GvRBAWf92CmDjYFmpPfC5GZZQYvVUGp2Um",
  "key22": "33AKXGa6uc97m2QkQTUJggeaEi7Sy5QTWqrfgjf1rQvz2KcVG6ftXqHBHyHWPaNjtNoREvSpRobBCWZ6Xqe6NVwy",
  "key23": "3vBrKi7vFSWNCKk5nuVLLnc2duF24H8GnEj5VZTy6ohfvsxBJFfMtqMvfLaNttyKHU5CTN9mHDCVoDoB8PmD7iSg",
  "key24": "BZeUuXCViXmcgsRN7NqJVHVxfPbASQXu4p3qo7hYeXBaQcEfud86MLXgqsHSH4BY6hM8GY3W8Ac8YLwf4WgzgNF"
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
