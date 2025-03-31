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
    "2bzDQgNctbLS7dU2mbexZAhSmeKSUiBZBwoyNvzhTy1dJKkZDN5NwZ8J4XKz6bD7TzJC9p1vZR4VRq37X2h29xLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xgb2cL7Fgp76AkbcyGQk72CxpPfovmSbShGSaV9E338eDmkyTMG3f2UX57VUuKKoU1P25o4543fxkyQRo7hgk79",
  "key1": "4EgenmtDzERvKWq4VxMrcfAB4SpwGRJXfvnR8SpRvpNMs6YEQf9M7fwpku2seLSoi14DTNxgeaSfh8Htof6JhViu",
  "key2": "5TdG8kZiJdufsrYWcvzwJWwe9AoQXDpWutVrQyEAGmxjeFdgsBrThQFGFoCc9hGmRV8B34ioRLWQBcx5nMbZ7DA5",
  "key3": "X5GQBjDhapHuVZMnrsfnnfjFbA52WSYwW7FwQoo9UWZjVMp6CFejhkacucmAzSvSaJYRLJ86QN2MsWBGBrgcgEa",
  "key4": "33f1bfKnW3JHFmnAzR8gm3NhJPxHSRNJPpW27LdhWhB15SNXa7Lh6oaxYZSFgcm6ZeTerzBjqvsfmYdhcbDgcLKu",
  "key5": "3TW9Qbm4ZiFswp2pqpYXxPx6GRqvjNF6ubN1GrmBbLqhVudpuXDBdJts4wsH9CHMrNPPcvmVCUjt5bH9wZ2AaS19",
  "key6": "52pFY79sasxeUvqHjC4b8R6DWMLUVunmQYPvqgBZqSfzNFDcBkVmGUBeWsVvE28L3VX5zDCLUfJ8tSQAsYLxJJDZ",
  "key7": "4PLg4rQNk9BAtz638RwprD6CPa3r56HDPBmJHMBVX2uLCAqiDTrAuEFMZmJrNzX74N244dWPZ9qaKBsC86TQozTP",
  "key8": "5brJ11j9M2AbT9CAfFQfVW2JyPN8e6bVU2bUtCLFGkwG5fxYmxTU2EQ9kUGuQ8S4PxNTdTi2AwHjrrEqvdhd2VR",
  "key9": "5hVXD1aMZ8SHhSTFcgbMvYDHNZGco4CMfewuWv3XjgMc2P1hr4rquNJk8DYUoarbH3PC64ArjhsGQpQqZtzMr8E1",
  "key10": "3TebFtXsB4y334pGEtV6xRoDKVdm3K6SVruBT4oLZeSDTQCKuKLcjd1pMCrvkvZ4R5xtH6otea1Qbh3FVD7kd8CZ",
  "key11": "5kKqeVcVGnLayF1DE5BaYofwtAxHe2XhP5wGpdk3ErUXPKYSEgxraL4Yp3HSsgd61RfjPwdqQ4ekDyvFLLYm1129",
  "key12": "3DFK4xx5bjAcV4gQK6ViHZHzDD5DrDfXms72W9GoAz1YF4PXDicWWQsTdTZZrVBU9i6eE8a2TsyZLbQ7RgrAroca",
  "key13": "tpAnVmfs11xaKcYeNgV5B1ESk4ouBFv9j3yZrQLZ2VZce27VqAoaejVufwcv7wD5FhA3NAjyFCcMGcTjg5XQg5h",
  "key14": "24pXxog9ew8WjR881syw6dLqopiJNvKS62KmYL6VfgdqRCYhKQZ393U93PnWLueVierYNU65pmQj1PuaijU7YRGr",
  "key15": "5cpMM9ZENGfxp6TBHkgLWULVdcd9wJHVkBnox1ffymEb3EuuCxe4BXLCL8PKSP1ednEgbsT4ZVhbin41UeFHE86w",
  "key16": "2v5oueNTxAsShJrZmZJExXZyJqajTkwDbTASxQzTNfePZFx7ML8jRz756H4SLDU4EC6R35RnHQQ2p4oEXdLFrdZc",
  "key17": "4XaRChxv3HAm1uHrZLrqkjaegDnNXXfg86Nu7bSYEZhUBVfpXjNDQXvCLpxvfsbyQmFok5Z2WdC624fMhwa2sqfk",
  "key18": "YNgtWFVMCYnuRzkbzFBqNZPaJRm9BbeZmoZWMwqzWLKWxSXxyythwDUoG2V38PHwcyz7XbQJjTy7o3TtXwNnW1G",
  "key19": "3s6KbT3pchaq9kJ55ByNoox4gjc6RVuvriyW4wVoD387oV7eoLk7UQvoU2jPsmqpYFNBpYETaTGmiGcMdDQdz7xh",
  "key20": "2PZDAHssmks4PC8r9WzwELV394LWbXsfqVeXQQStrHrx2GPQcpW4H6uWduCnzo153Rcm1zAdSoKDTzVavfG2TwBM",
  "key21": "2KqjEh1azUUF3UEq9vdmBBrHGWjtuQKwmSiFJqiNjzGe9Xsi4Ja74nM9uRLttmTtdXc5UAuTiHEFnHGYqWz9VrES",
  "key22": "2KSxUXZNBFPUfbGSiz2BPVnqwPyTcnbn8T2oqraUzU5erXjZZuQaxjwsJxneEQ9HY8zZivPqoeDUVgVUehyeieUe",
  "key23": "2HcubPkduCD7WX9pnEaXgBCwsyu4A1ZyHmp4RFA7JjpuF3TRnkRD2BomojQqsT5MnpWCDurqXbEhwv8DYPzKkPxz",
  "key24": "ix2179TNg2J9C8ATcCMiUWRyNe5UtAcEqExycCKk1TYUZUoH9EzNcqXnVKfWkD18uevhcjNpFSqWu9WNbUut5Yg",
  "key25": "4Rji2PaQ74PkEuXitsQS4fhfz2ratryTQAxJ4GqDW5GXt69VD8SgWx4Fp5J8aWi8VbFh5QPiKGDUMsSsdqXxCqEk",
  "key26": "tNTjwDiD5QdqyznDuzquKGpZcdWnZUtSoNe3NB69PJQH9Ps2yKpFkAdSYZrNrDfXcWQHP4gEQPo7A4gUTqecyiN",
  "key27": "2SvniRFPUawcNsfSJBYsF1A1ZBWuRSzFHkHrYnVHyp7Q1Hhv4V1giMAFa6QUB3kun1V1Ep33HLHNnoiipLdgbsGk",
  "key28": "htkGsbJGcv7t5SMjiXfFebQPCT4Qq53oCqmAgCsYWcTmGJAW5nK6DNdeEtsDVmDyjHPCVXmVHeasuSdkdZktRdt",
  "key29": "Pvk1tRqsVkZAMpMtJPo2fQjHL7oqgPbU3Lo8xDtCVNkGsvgw1LecXsgiqhDHVrxQyDoe4F6Sg6Ed9ndBY3KUPZY",
  "key30": "23crmC48FgfKTA2yARxBicboPb2bxqK5vCo2XzzVjHgHzAB6c4QDZMiARZfvRHN8nfNxxkYjxLoDcpSg9ekZV9Rx",
  "key31": "nbFFiQoMQEHLri2xYFrcg5MU5GFzPWE23nub3VeHx59x5D9pRqPkZgvCsqZQF45VZYWk7g25xPoDrRzXaNh5a4F",
  "key32": "5G8YPvk9i1bPiKEcEnStxVm69M3wkFF1MiamehD7PbhVUwsKMJqnddjE1NWAUpMdJAz8L2En6LApx8FY6nSS8Yus",
  "key33": "3eEEhtunzrWqMVJjVwMTafRGjgXYLyoVbFUmdy2x2mW2z1DCi2vDFxumoFi4ojPKdyoZrwEsYTGX7qJAMYL9VVmh",
  "key34": "67EWVL4VEQN7wVFeQykyoCtqQji19gHEku4UzyCLfTweZZTXMsHas4f87KmZJbFDmpPhFdxjVAwp6oLj3fS574oq",
  "key35": "uSLP3Fm57yC7kDcdmgUabjKMCEmuZr5yc4PPmfXsyvrwjVc8w3SECkZSd8qTyebPim3BxFKpym7nC6rEnLkAtei",
  "key36": "2r5vSHc4crdNBAS6cC2VEBTrtm1a8QuNG1KEgavGeK6KzPj3dKV7NoeZGxc34DLM5cn2XjpgwTgnK32obHXBcnyd",
  "key37": "5KoeirxX5G4pK1ECcZ4Ar4sCUyACBXvJF7VTy5qcJVg41CzvY3N2TkJYRHh2D1Y9EYCvRete6UakccAysJuemq25",
  "key38": "3y2reC5FJqWyvyuJ4ZAFVakJ4GEi2GZftLTVoVFXMM711fWifeTfASTmp1T5kuHhAy1EGb5T4amhfJAaURT2NwkB",
  "key39": "5iEzXKi7MTtoEKSFDbcPuXkH7uT4ovrfBaEknkvJneWvyanHTpF6jcL7Jnf3SZmST4M7zHXLAAupRojDrHXLg5Fq",
  "key40": "29un89qb3H1rHujPT1v7zM1tiyVoWHdLkkCR5RHtDoBDtzggFHCc9JqbLoCS9PqJhCw77naX9XBkFSTxZiFvKdKW",
  "key41": "3xDSqFtxndWjTzbo2aS3wjnaquD51AGbF5nUF9RBmdhHCDGVJtEEBeKQnx4n5sgLiKzweyfhr8UfNM6cmiEBKPzw",
  "key42": "37S3jQN5YaeQFLBLQuwdkbC2ZoEq6dySEmVPSNUvKcyr4kvsc8Wx6Aer4KFeRmjLsyb5k8SyicqmoJ3PtCbfGXCG"
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
