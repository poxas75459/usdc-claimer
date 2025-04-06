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
    "2tBHArbNkaMACCq5n6kXyCYrvFAaJMpwK8Ss7Lv5w5vSFs33s2SE2uahrgF2LFMCBBS8Kxw8q5S8axkv3smf7ErV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZgWbXrunf7GXBRkEjMksB8kR9Bs7Wf81h9pSmLVDcze29RRq1KzpgZFckPHpHAdoQ9oicgzjX5EfMsa5w7Lh35",
  "key1": "DW7dUMHhVQVyNCWSn39Ay2jeLeBCcS16omma8xqdea73ZYDice4SUTyG9GMHPDvaqTLTn7FAzZtL4JMHSWStGuo",
  "key2": "2H2ZizF2UKeuAhXCaipvERhQKKpDjqcegriPshr2iz4xKfeaTds6DQYfp3TywZAbdE4Grbsm7N781uKhMWjm6MFg",
  "key3": "59z2LbBDJ5cBr8vcECi3d64sDLz6aGvgwu7GQevbPEXxjVx2rjn3DQ5nqLHJo5m3mUY1azaHL58UpZHpCC22egMt",
  "key4": "36T3uiuGpmm99bSv7CZ3LyBD2mpsd5w4YtJhc8fzDo8X6Y1Vyemx8jccTTXKMpKkAW8UVyAubaQt2Hq9fnPH2Qro",
  "key5": "F8xrzczrrKqTZ5qc81i5nSKPpNApMQZVo3KLF844yrBX3SrUwpqEA9SRjZuRAKB4MzfDg7Lix18ofNEhqqQdtNK",
  "key6": "kn2o8vBLwA6cp6ZNJip6UUWA3XpTv4uASFFh3kfz4nXr64LFLZYHMDcxU8uMDcEzuzfQMn4VmQvXAtdxozUDWVf",
  "key7": "2KRo1EFb7i7b1pBU7ayAhz2MSZudFMaFuxNusafegfqjmY5uVskj1ZPCEbD3h7VFbyLn81tNBTAeBbWR2s37THkp",
  "key8": "653VE2eSbvp2ogprQgtiAjeqjHGUTtzJXaaDFK2N58N2eoWm6niugg2JC8uFELi12vzQBycW9GvTBDtyeEs572U5",
  "key9": "4ZzRjLH4rko7PrhP6Ad431HYeJyYKN6ZpVLSeL45XCGEManKFwdexq1oUK43VCTEUnsCU6VYk2szuKEhS8GMvSNb",
  "key10": "5GbEzUr6fSEZsXDvrFm5Yw4Xho84NtXqJG7W15QWKrJjHXbpTv7s3rw4K5B22puTx6KhYgZCkhyTrzK1trizFpog",
  "key11": "5sgEEapTFKBUpLzThZkVpTrEmyNPedvmd352in5smYwJ5PamgjWUnU7K5UVGDf67rBACpmNWvL4g7bURTTcc7UW2",
  "key12": "7QUCYtZZwz1BsednpkmQjHxQTgVCKS8SprPDt9HzJTXgakwJXaDVRCja3V2ieGGcVs1PqEYRPmM9P9vj1eLsGFh",
  "key13": "5LiQpEsDYdDtWViuQLmFxfHKvEgaPb7QALGgVTH7tGzNUN4inZLthMkDRzL5zs8u1HWgL3hoaFMoVynJ16pjniFF",
  "key14": "5CdQbax8rYqCTBZX1LEadGA78jdw8eai88YZiEmydhFFEJWJDwEKtSppPe9mZ8X8G5umBdgzbcmY2sFDWpqAuyd7",
  "key15": "ZGaXSPagvyAexiLjGzVifTy4RxZKUTtfYgb5taS7fAHrnThWF788uQZtuBHZ5J5bMvKENnbby8MKoUjGs7G4dVT",
  "key16": "4Cc5Hoi2avf9kroht8YNGqSNCdCPQR1EX5vVuSBRFEvmL5m2ZWAoVsrTU8Ldy6A9dBBvXG3GzxqoZXGMHtRnqEbx",
  "key17": "E7bYco4uNzQ6dGCcpF7fQd2bG1bZPUNzBGQPju4AC2c8jzKPnf2pQBeheBwHcc5WfKsDdaT2aSWrBG7XsX796kM",
  "key18": "Du8x3TURmLfv7pXnx7psNnqC8KPduAgFtJUrJhj7W7YsZfstK7xfx8tZY1EbGv2nqKSk8Yb3NTKg9mbaqJdPB7h",
  "key19": "BYhwX9tknbhDhZxgPd98gyyXL4k4PxTe7ARk2dTZAr77Gu1emF2YkwcFztwuYyMXYMkDCweT3XhJayDjK23dFuk",
  "key20": "mHzbpYBNboYPcCRL3o6SeNR75cMo8VaYwYxyL8bvgLh3oEvb9NLHMadyTG4Vb1UMw4GnK4uXpdYX32Q2GSQ57Fb",
  "key21": "2v8FZfdQYzZeBvf21a9bx6zFYDokLjUEYgJvC25hk6cEBWfhLxugQVsynaWzLLGiBm3G5ref1SAqrUt8TzZEaXbX",
  "key22": "4A6AJiKigXkaunbuVtvet6nmHu9Y1r2WsqBHMNEJ88f32JsjgWz7WUDJzzYWJCN8ud1h3Dnci2PQAZQxtCbzo6aX",
  "key23": "ZsY87FinBXuGfTYibqgMHWe35mNuw59ZUJHyygRpze9VHnfKHkgwvXFAwxrGuikPRBdRvGVCu7c6NwrJw7pmvB8",
  "key24": "5efTSJuqHGXCJ8UswxVzmQzkgfEAy73WfHYnSmbftbG1onRZMNFafMV1w9X5wmAH5f2JiuTdvC1JCd7ysXwcG33C",
  "key25": "3FRGNzooazV58ewdnWfxiSodEEAQzc3UqThuGaHgsHk88vwZEF6w2awXcpwcYs6soJY1YKFYhEHzRMK32UVQs2P6",
  "key26": "5irYNWsgQw6xywxavojx7jazM1wnYxAyeuMtiEhN3Lhc8aQvgGspoPZ1t7A7JLMD5EV4bnXUu9yFkL5HufCBm4LG",
  "key27": "2VrRgYpik7Syjhn2PX7URyUS5V419teMgAbxsh4Vv17k61Dgh3caqWxcPPJqGYqHE9cyncLRvLLLb3Yx4ZB8sBo3",
  "key28": "3gLS2f1CNfejgo9YJM1g7ivKeULxPCd2sb7PxzZXoQJfAo1dsbw8Kqsdjmq8DNMvk7JQit7fnNbd38XsHcJCmdUg",
  "key29": "2aVMm8vTPHSDt9yguN2ZUM37R7Vs4cRBuRqJgChscQqigxozYjoG7cco7C79m3pvjjzj687rpKu4bGqRuSEufrih",
  "key30": "23b1VSC9nRgj3NopgezLgptLE1efZvQ6TtSg1iZiW8pLwaUfppfpTWYRPA45Cwu32p5K8jYqj7VwP66ayF5Z2tdz",
  "key31": "qkdx6Ljo2JiKGRcTXcobzh1mbKUYn2zBmXoH5nP13fkyCNz8VqofhmFJco5C16jxDw2FvzYpkMJ9VtXXvMtfdEk",
  "key32": "3LuXo3Ev7gHy92yghg5jirhFdxmmkghiMVvMMGPmhXEEhdD8aw7y7Z6g7qDyV3bsPCkd2Xf3gyT51vsREmsbf1qe",
  "key33": "2Amajocfnyx1YpG4yUagGwXCVzP55p4ABxKcWeBdB4q8RmBsFrGMDwZgQ4RTUJAoF5T24KyQDaHR2vT88HGqciz",
  "key34": "22VpjaXTBqUTKhsR6Y5ytiFHpHeem1ATzEC9pQvY8T8nPUMN9Em2516wWD9XJxDc4iLP5uUF7wyhkrYiZpyRLo25",
  "key35": "4qMT7ope1Acmnxnq4BqRLZXpz4XJVrzJc1en8XE1YBmS2efQ9t9MvLxeAA8WxREFEb7cpFgjWxgboXGmwkGi1zpU",
  "key36": "NNgZPtA279RpEBCWW5UKLKKhWJKTi4RELbPcGT3oZkaaisKWvrErSM3raAM9ahPQoSBK8gvHvoWYZYyZd8ohEMy",
  "key37": "4jwGgTEogkkvczAPVRZyLpy2bPWcB3i44ysQAbueH1upevUNgJA2bnGcfYB1NZwpEu9XTq2HsdErFYZQVnvQSZ1j",
  "key38": "5Qv69UKeU94K2tKSx1WDnMKAT5LJFXoGNzpVsRz3N9uqukYLvGjzgVJqLwswcfy9BTfw1uPbB2PUkyto3U6YEwFZ",
  "key39": "51prs5zqMezkDPVxeEyRLKaDPQsvQBDwkHrrQkZ52bgVsHSNoDgZXQqmMQeSdKjTKufdq6eFdrzog23pJgm4LizH"
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
