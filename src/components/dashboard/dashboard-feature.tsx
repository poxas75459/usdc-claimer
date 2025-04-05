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
    "2q4z7UAKZTfRoaUaghsrWHtdcjsJyMeXyH9EGYs2EEwMg32eVh6fBrc2WL49nSJwGseTcy5PZRsCDGVhtxiodVwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqURZb9TcMqPLzwGu5LsqmPwXt6TAg6bywbHgL1yFSW2eEWhR3RppqfX2T5DYTat6yoS8FfVRNK5Gvu77nESL1R",
  "key1": "4trgzEhArWnTwqAoZAu2Mwu45YwB8iQ6UK6tpCdUsFSDt1fZQtdJxV51hYzQjemAWYGzUQZ3pgqMiP2Rz9RRpvKh",
  "key2": "2UmCUczBmoqv1tEQDe1A6KsvH2da3czJ9ZuouNMHPB9psyf1dq73sW619eBBzTnW23azdXzer2mKBM9HG48rEUQr",
  "key3": "r2bRqLAEsyntw1MwKrLKS7uFtuWNr2QRsaborMZaD18TzXxLBzau6WvKCyEAFnmPwYhqZN4V8UFhhvdNpe6Z4oL",
  "key4": "Nsc7QqCHHSVKXcdeH74iypFSnaGRoCJ77twswZvcpcnrYKk2a6KfH97GUdG4DtsXxNiQty6Jp1J61d4ZEns3n3Y",
  "key5": "55ornGTHKSvrzvd4SYN69tk72jNWbuhQppmGBbqUgmVXUPmdtFYwDbeuHWBfwsojud4rQSYerYZMcBa5Vp7obFjQ",
  "key6": "31aUtszs3aYDf4mPckaWeeAPqws34rUJyPQireEjsDKnh8QyttY1ivKFXwUwtae8DnkB3YzYTe9wKpfjLARAotzJ",
  "key7": "2RzRqehkwpZ53LEn53X6o4g2rS3Mr9UxNsd61KWAvG1Rbc1FbcuNd9bWt64ju7sXMYWyEGFiWRDWZqxnQt8X9opZ",
  "key8": "3pNUMV4ro6uWxY5fq9HDyvDXTaktStGrmkFjy93Yo4Cgzo9THsnVZks9ecBmXtegNKpxLHdy9CUSeDyfzPcHdrJw",
  "key9": "4UPFnxky4rXCDRn9Z2fiMwSTTvBvkcWGeCQaqS1nG7RjRms4o1fn4jVPwnASAMDBevBpEVMr9GuGFMxuQwLkhfe5",
  "key10": "4nS7Kq9GQeCuUTx41SFbXK46UoLz6MRF522kWkKXXRadqQyGua8BY8bPRoshTjbqGpwe9m3hhSE7ipn7Zx2RZdsF",
  "key11": "2pSnX56stuzqA4Y9ybDNLrFi2aYZ5KegNDknR3zUkPawkN2RsS3ZjyRZ4pffquWuDMGVGdjCqZTWgsivQon6K6cD",
  "key12": "356wHAkqJ5iASLNV6dVwBK3vuSgqj2uND1AcDu2xgmuAHsHVnXnbiNzeH9LQhWFNPPjBQbRVTHa9rXkmZYNkhT2d",
  "key13": "5mbzasyLgq28i7VWxuwgDhhFPdHyGUiTsRctLxCuw5eM1EBXD1xAbtWjx9BtvFbMky1knDSYPyRjVpfaecEZwuT3",
  "key14": "3jyGRnzeNJ3GQEPhKCW7DPQV7hG7UBuzmM37YJ9HV2cyArjDmbw5H86zLTT9jTDjjaht3pU793YLnZGvnDGLqdh6",
  "key15": "5d598Rh6bLcA5KQUtvUQug3c1BpmLw3Z1sPSkzu7dBDeTeiY16tGepPkjExzNXV1gXVZuqfo7512JiZNzeSo5vKm",
  "key16": "3dkscLBYqbDQumL58ZDf4YK2BfMVBVcZrE9RsZx934neUm4UdV8YKJARf71wayzP87wEb2oTHU2NgZdMotErrQrx",
  "key17": "5oe7Pi66wykcbMmLx9sPxJKcB1aS6zKYkt32bdCvfGA3RjLWsX5NXixm4yKLwhQT2qNbPD84itKPUayMycGdVA2B",
  "key18": "54azhiwLj8pgBFvwg9VYuvZqowM5aLzTtK9muX9vE4UiuNzAGHUdUhaf4h9dVNhHWsDd3hKXCUMgmGcomarEjmF5",
  "key19": "2DgvWrW5VMTVrYsmgscYS5w2KgrdxYuYK2zXsJxjXo1UuXbQKkzWKq1Jyt4Qf3UXEB1hNEjuTPgZ3ncywaBDfhoc",
  "key20": "4g8FywbyFiSwGDPuh8Yt9oeJwDj32ork2dz45AdiLGE5DGqEv8iRf2JdFe1nc8ZPzipeBntbi8c8S61LQMVYCrVC",
  "key21": "2XR8aPiQmvwcBpPzozBFxsfx38EwQmfS5fKGyG57CsyQaygcHKAAvwgEr2yLFhx4zDEi84Fo9LwejiDL5A1Y97as",
  "key22": "3JjrwzikGuruFswrzqEBe4pjWSDfFy52WbrC24KtBF5unt5khS2Rbr76h23vVLHtgcgtb1gPSZZdDyrTu1msGZL4",
  "key23": "2bRbRF1ZnubUhAcfd8bsMTyPZURhsffMhfhQF6MQJ938kZiWEaKVcSfhCG9ZPhCwJqi7b1Ds1n9yLMeE9Feq2tBt",
  "key24": "3qkWUheE2VSSgGvPVnfUceb39gAX7MSNq3JP2xjALURVjW4xU4ax6wbtHBTMSDGxaTyzbYHsHrN3DTDZnhhzfLVh",
  "key25": "33aEQSoAL3oDhhcVqnq53boeG2oBrTvgVKoBXE3W3FQjUwGBzEQ2CvZZGANfW13KMoW69CdPSRqVd6ckyZZfpoWD",
  "key26": "5Kz5Eu84orszLznxnhGBxdWZsexe4SgMA29dYFYq4cLnnoQ3BkbmBKesK6yYQL1LLcotPE7cGtiawAXmnetgZgXV",
  "key27": "qUuYZGVM4Mr9nR4ZhPMHWF427vJ4yXZX2cmE2DBSF7gTX4QFwhNJJkFYWcVMtPaspA61F1oHJap5KNCNfxTXpwv",
  "key28": "44Rchnv1JKE85ZnF5VfWJZEZAFff4LFoacpSj1RhHuN1o8omUUS7ZtERtSuoGC2ETXJpgqBCzLgDkZis8V2fNyuj",
  "key29": "3q8Wj2mRoA46fGxmWzxvfpaTqWc23EjT1pmxcptnd2BDCLKgh9iS2AKfbb2dT8AEzV8DB333zfW4AF9seuiWBeyL",
  "key30": "5ApwEH1KP6B9fGazxpk2vBDjXpMDSRFoQYbMKnoLPeaNKa7Vkt59aL9QkiJ1Fjr2oAayBBj3Nw4VtUFcSqnGqq8b",
  "key31": "53qcDvQcv7pTJAixbQGoLMFbJyi5Zc7qiDvmPu2arZGyekVw9rnUsZ5Pa2NhE7PJq3SB6xRGqpYRLDmZfEvaUoET",
  "key32": "ekUpiq7zet3bRmzBQK6XKwmK6hsoE2mYvP93YnRaNJW66NnmVud9qwntX4jCCn7v3qpYCNU7rccTQF91apPtfaz",
  "key33": "2xVsZQdrZxqCSrjwdcjCKtVsqFjB7n3mnvUBBfYEdpxtKQCvmWwYHjtADPS8aRaPVnT9H7uxKsbWVAU4q1NHMWZ9",
  "key34": "38s7BVKgytRfFzeY61uV1VRN72Zbadxyy5eVJMYKuqy7Eq5yt9ZbY6mDqCATWeGY1RCZT6zCkfcbUjGYmfYUg5ci"
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
