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
    "45CUQ2PURe1psmun9XvpMvKkoLNFYsK77Bb1yVs6JbKDMGtDGwY2eVApPoFHGgZ74ckrMh5Lw2HzKcxTifPvBKDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P8dFXBz2q1ZRA6LkqAMJYpYrPyMDREJw99ma9dJr17zP8p3R4Pikc6qPQ3KRgSuKFfihyyy2Ezp9n3sqPKx7xU",
  "key1": "5dwvDZe19UBPf9TTTn1PN863wgCm8sZTsoXCQ5BJ4MsViwssLFTjv8EGtRS6fDpaL9wbzMNHRFMnXDLaTetRRm9G",
  "key2": "2fFosqtXvTEnmokQ19d9RKmKfiajBiQZtFuW2BTYcLtwScax99zFZTsDcj9BrH4qhx8gzbzxrGD24yE99KNHx3PX",
  "key3": "38pD18Vk8ctaQYhhKA5wu5b4MFWRCgsUkimgMv9U34J3K1WG1MoNfS7AVuqhyMLvSj6gg4BrMsDHEdTBgqpCYqh9",
  "key4": "4WZGQWZXZfRsnNXabkKMAHpyRsX7dDZannzymATxNdFsHmNQnp8i5vAmCyVLUNXqsCht1tuzBjxeKBReszxgeoYZ",
  "key5": "uEdHUhn12PotWPSxS5eopXhvrvWTqkdnkpycWT931mbpqALP3UfrRKFeisqyJ2j8FjPFByvnBQBiaqgTRNdYDS2",
  "key6": "2g42yCLpiRnhnZjjsL6DKmptt3N3aA1Lpp89RTggdtrMgVbrHLiaZbYdSQXZCRMFYDXaH6QLbevnS8h7GZ6sLB1L",
  "key7": "3Vw7UBju3xyNnT8mvSH4mkGLJLujG5ZoPQtdqKAommjW7D3cbRUezRsk278ap4UGp2eBKKctjs7KooM766jmxQFY",
  "key8": "4YZQjM9pZNxcErQQYKe4RbXgYZUsxEyJ2d6xJKhR5oNwuV4mgnHdHgupp2xnULP84bkhr5czSzGD6ERWEQbTusAk",
  "key9": "BnMxyDt51uxV4hQJEVGvyPMsZmxBvJF56wRtkayP63XV2KUsje8Y4VQtPeBkXMZ6z4DpHZRSUMrAEix9mLyEHRo",
  "key10": "4f7XT7nLQaZViyvvyF5bsXPmkdPUtZQATwqGwg8cbwqFnChh1LqoFTPmn3QgdniLj5Zx6KKfD2WgBgUvHyQGWcH1",
  "key11": "2dTGDyqtztbiB6PTbN1w8f1eapNVkdsxgzMRHiubR4X584eTkB93qEy2vAMAxxgaWhcrhLF5H7X9mDW4fqgkJ6JK",
  "key12": "56oHZEJBmiscTECZ3RGrfW1WJ6c4DaeLDbv4BKsGRqVtn3gVY9jSSuNUn7k5WzE747qjwLyRnKy9Up6pz96cQu4n",
  "key13": "5yyRCeuZHGB4F8yq2cq14J9Gr74v3ZpLwwQ4FwkxtuV1ms24svWiBC2ZdcmBK7WKgWdgBza8v8dFnrjgfWSFdJN5",
  "key14": "4icWkwtrMizTFi2AGdkPKx8unh3peioXhMG8oEKqqpVh8MeGKgVAvgSy5RYsV515mp6xdffPS6HzDY1ZeLyrj615",
  "key15": "5ac2fPrYPmSdSLyrKra84PeNwHsaKhuxRuDd53SDof8JPhq7E93RntpFCg8g1c2MqhEdyY5hWMMqzSUuzmhhghv1",
  "key16": "5yAhk3wCKDgYSDVwRQSxgRLruUzwRuKZAGqKraQs2krxV36BavgHXpCztMuVB8hdFBLVrFG2Fi6ov1E3uMkAvUNx",
  "key17": "3tdsc35pCUPPty3iRj9tbqQYzbRgkMJinRQ6DCXH8RvL7ybJCckZ3mYiB2rjbSZi1Kp5tyxFRuDPq5bATFKSuyZC",
  "key18": "xJsPD6JXPqBrCrEfNe6tGcEPFbrTYZUqv2LPMJE1uehcV7h5HYxajLw7xiKfPfceoxeLSbW7S2fp16iukairMaM",
  "key19": "4EmS7aBg5gw5SRka6P6V77MeMLM1ppeyqL8qnWiZp7YJnmXhKbw7C9vHuKiNDw21sWBRioBYxd7aKDrcH3GdHVQV",
  "key20": "5yi1UF69xxvSy6AaSCqYeznUdbUeFWcx1raLL9qtLumqXUCpumqk4SrHQ7YH8PVYYHrUwFQdpP485b3TFEyJsEmX",
  "key21": "5dSjLxJDCzEQxG7qha1SyBgWCVs1CgMm7wj3nBicRzgGAnNG74KFUnAABJb9icbJ87JRdCwFrQbnnx3qR5EpVyAG",
  "key22": "2GcisXre6LBHVMDmfZ2V5yiAfGyh6JhSBo93PLvxNb8AKvNUEnumdcspzdDTMZ7bp1p2zfWdBJMPL7QEmjMXRmrR",
  "key23": "5cLtQ7ZPBiMVdvUuq28aHkrcza7G5dqTSGGtfguduArLdTcZ5RgcsX4UtxT1wKsmnCPtqVFpgGJasEoHcvQkSben",
  "key24": "5mt8tRrEhhDd3LyiL77nPFuYWVEuuLN2xXJoHuqNZnRBYeoe2EDN6uiHPNaJNn5ZmbquugMrjtj3LCHLJFRdhcSL",
  "key25": "39eJmALngsT27UdyMnEiWnvjr987cj1Phb2cAE8V8xAiQeQckb3nzvrMxKmghHFD3A6sb9TaRcpRC8v7bmrR5N5E",
  "key26": "2tjHPpfw1MsiVQHDuM1ZoS6ech9gt9euaMUxCGhbDEuS42W19KXUFtukbrMBvR89jhHY23atncgQCVpQPxv7jxiA",
  "key27": "4FsuPkg6WV2nPquRm9f5f2S6r3bFddWKQDc1Tbd1j33Pqw7iyBjXNVRGzNTgJzzTEBMAB9rJ2vEgdTmr8MbQDWhG",
  "key28": "5j4EjB6J12YUKxK2NM7u6st8bBj8Ur3Rir3Qh23U1fp46uv5ogYVAuH2fZwW96bWYGCmPwm5vQ1PqVWAjegp5ZCo"
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
