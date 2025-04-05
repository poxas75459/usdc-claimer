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
    "5R1xT7rQhrZmXzyyLPzD7u2odxgJiB45Ri8QBeiSy8qbmZHgFWi45xZaSFnFwnsHRfzwkMi6uFmEk9ttzUwFSZbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JSgmVc4k5HJV6ehtVQ8aTA241bCgvxRyQfgUMytd7sQEcgNn3HCLnE5CrLozQQyjbZAEDHGFbd5wcukURiKMJcW",
  "key1": "2VWsz8ncYZSQYiLrq8rLshjZf6hqDPUqUTFYqPP3x4NkSToFvxqr8wpThyAi7LQmbzSS5bh73RpUMBwBjKpiN84r",
  "key2": "H3uwaGLnU5Y7FS2kwBYUN5KsrXWpYMoXZvAHsxqKDfpy2uLS8jVa5vdHGh3dRyrTNFSufDXRqDEvU8i1Fb3eF3i",
  "key3": "4GGkDodfXVs2hfMVZrCKh6bJwTb1mvutTuMuZnSfkHYs3jxNc3P4dJd2RYLzAxbsnrvR4LJs4qHRQYSPqpoLavsm",
  "key4": "5qqoaiKw8kTDXo3c3eJe7PcXi2G3xAURCjYZz4ULSniqUDjHWr8B5ZDgu6TVUGHdoiPQf9KFVz8coe5yABqDBtH4",
  "key5": "56wsemEUvWBayj95aZx2R6cfDhnSQJA7HaUQyBiQGVZtDMeqzR39T7nxKqKi8uk9xmiZaR2pK4taXHUbgNcWDubj",
  "key6": "BBK7qsF1kJ5XSWMWCqqZfQGrudJmjF7PKTbrev4mrcx2b1vqkhZSDUvyPaXTJSDryTUaFZxkkKHhkpDMyAT6ngZ",
  "key7": "413vzT48knJLTNJbsVNYsJKVjj77CgB9Gt5PU6B9DFXd9tNDHaNmvAxq88pAeA5PL3CzygVozQercQWQW91H6Sr9",
  "key8": "5s2Pyv2dykZ6hzo8SnXSKiQrjqz3zvxw4knA77NWn7deDZDYy7rUFjQucHSxmPowpUKmLgzbBJZnhZ2F6Fr6MNz7",
  "key9": "28DX9jptmXQbbrYAuapXKL7n1CiRLGjuUQf2E61PVtLWc5nNV72PigtCCr48nc8myUPKPCXRLjVK56ZMvwuq3bZc",
  "key10": "3mLr92qkCjSm5hL6CNysh1RBwc2NbhdvAqBW34sKm2UTGAZmnYUJPkn7eJweMfHDynCy6H88yTUUH1oZtDXJf1Pi",
  "key11": "4WVhpRTtcoC1dhKpV11ohM1wyzpVKQxJgcakapJs2F7Hksk37NuMq62Lr9ZE77SNJnUshqCrD3sKRWwP9coKAxxW",
  "key12": "3exBFKHSevdCtiEbyK6TLgfMGpytq3EzjcEgYH7cpGhnwo85HzM4SQEXvDXxbDgKMbiS81HzuTaxSwfirFyEu7dT",
  "key13": "3Lc2346NtPZAr2Hx5nUe1VYgw3yrYsKSbYjoi5Mop6fdHyipcnj2DCRjdQM7BSb2dbqyfeoQQGMWfoqcsCsmdxVF",
  "key14": "ShEfCHAxJ8ZSn7Z4CZEGWFqhtdbp8xe6TEAXueK2ptPgfup9zpy73F8FPZXZ92Q5x9UWyjDE44KVu6AFxjvYj6F",
  "key15": "2YjwS5vm4LVsZ9dGCf5dTBtMTH8ZCtMoeTYhV6ryW18JwfpXSiThbt89XJrNWL8rWyokEwxLCZ2qMFPb26S4yBij",
  "key16": "rhe8kVbn4eN95vGv6eJHe6Ju8B6CsMFRk57bY3m7UhTRsFseWy82MzA1a7FojpYXCZkcybXeja2QcKseukHojxG",
  "key17": "2uqzHAbxvrYX2Q9S2ryVsrtg3fLDFBb5AbchU3TZv3AyqxoP7DHQyB1VkBVzghRpUe9ztnBfB8SJgQcmb7Xe9bT9",
  "key18": "5S3bZMADcPV5FTsho6BgdSnRouhjbGkHXzfc88ej7T5np7UpookEgTsM4uhBxzNTvAFF1vgfqrzBy56CvWBB6iM8",
  "key19": "2pbnEcZbqhio2BUtrhhcPf1LUtMEowmdkdZXVAkDtQnkkWd1Leuy477R2zxeiPEn1bJk4szTuNhsGG5KsQCWTomU",
  "key20": "62twrc9ds41sa3YXLazCJo2VmxHL6M8gB4g8Eqcg2Uo2r94rNu3zpYcbxRn1seVyZmKWLUznCA2pQ2NFZef4TMa4",
  "key21": "4CnFHXP9kG4tsnA7FXky1vxnyNeRePwD7Cs9hXmChyxJ8SX6ah32zAvoBxGjuvucz4nVonDYS5zui93hm2mHEM6U",
  "key22": "gUWwkvtpp7vEKqA7qsubUfQM4NgNMyaUqr3WMH3WUCoZtj6iXkgJXGTToGtDhGK5yfuF8KKVNnsx3MDCnZmpX16",
  "key23": "4meFjebwPYHV3VfogKNFnt8kQs2DMWr4Co7HzE4vUosQHQghPcM8taYGBMfJbLZua822Lwx2HdnGh1roMB16LMr",
  "key24": "21f8DHvpRr1C4iNdo3DsXYFe8dHRei434iFcZFMhh254xVTpHGzPEznf5hDEEQnEn5WV35U24bVb2E1vS9bcAwCQ",
  "key25": "1YxB9j3UFMBRzu3NcCgLeMCaXEfxxi7dPgjchi6NpRUSVop9GVPuF1V1wdbmFJFX1dWhp8KHo69jXrwnq7a7b4h"
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
