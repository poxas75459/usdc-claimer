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
    "2zKJdmywp7MVJzrKJmMPeSuCPCKksoHNiu3QLZaFq9vnz7CA5GBJSZho9PSpiwU6VbT3Sacbthtze6npm76ZJ2Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saDBSCprKRvSrmo6xckgRnMzGxqHTEjpJLHWCQqGYuAn2ysgA4Qy3gUu2gXtNhJwpRhmrZe5WJbXtJSsWfN6Fyb",
  "key1": "2Phu17KfHuvBiwBvTxEDULDtot76MxgHeGHCmuuqNm4tbNt6xwcnrGMdrfTaLsY671suQvWBSf5YEkrxaFz9eDq8",
  "key2": "iUHi28afakHLd9ihHdRtjBDzrWYPRyykn3WJkMehyRtd8AvS269ZfdwQmHaqvjQvRREXgTBUiV4T6GB1s9mDFcq",
  "key3": "SRxkQAZXP5uHqtzcx8ZM4DnH1sS5Hyo2cqDJFyU8aeyjuujvGM3VcJWzubgZKzLGQBAbpT3sBH1y1LTQdv15qwU",
  "key4": "2YYQPEGG99kE8XiToDP8xBA94f8NGntoEtpbAsrM3dkJeTYPy5zfyb6yjdgnvVGEZUjQZjzGyyEZeM4s3D5hYPM2",
  "key5": "122UK7mc67Gp5dBSt3UCmThmm52NthUKit3uzcMHzctSg84zqMSGwBYgJYBsE6QhAHmxhGbdLqQ4M5pE3n5CdtZ4",
  "key6": "5dP5W9XLKbCnbqu6p1Qh3g96ou5a9hdDW3ApbCRf5s13najT3onVcv4APQmJhLgpwbZeQqRuX7Wh1hn7keAgDGQQ",
  "key7": "52gmdR6qwPFPNzWTe4nq6AN3f6pdARxNCb7RadqrLnPvGPH7K2Bh9yRaJcjUXFC4w8T2XbixbCKfQiR9MdtC1ept",
  "key8": "4zYuA79KN655yQsX9F4JGQPQoCUY4smCJqiuSGvUEzVa49QBdg4b3xvZNQg8w3ANXCq4dRcfg5R4u8VbFC8qHNc9",
  "key9": "4Z2BVEHTw6jQmkXin1RTA867w26sSX7rcWDGpECckPrVuH6S8VPWXurTb5uM6mozdX3dJWLhY6WFow7FfayQihu",
  "key10": "2y8sYj4MMNiTyEwSXpKdCJMCpezt7uMJoMXeC8Vo3SHwFFpf1fe8GhWx4w5k7THGpm4ZF4M8WDSnknEaLYv6uyRp",
  "key11": "4xtnDwg6PQ4u4h1miXTLreYaDsrzEzZzTYsBX2JwZEUz1ZasbhGn37pwbYTBXkbSC69Lw8TgErhqs2oCuDEV8jwo",
  "key12": "5f4ggcA4ScdXowwVANMM7gtaDDLjXEzSiRKxJQEjdmisfKAWAmYz2nPwkKc76Nr4NP3RxwB3nPtG6YLohcpJddEU",
  "key13": "5k7u5nRCDMcsUTA7uGRtiM3LhwgATj4GNmTdS5Q9cG4mNh81gpz1BC7XwHrd9D64tPrXDhR63iBnNf3LKMbUMyFS",
  "key14": "5Cfs6jXYRWFPMWqwU8JQ4dxEUW9jeT1PA28THKBrEFk3JzRR9fUzDAQfr8sCEBhmJZzP3xeFvtXUoDaF6fqQXb9a",
  "key15": "zX2YT1aNR4T2rNGQo9N6p3gc1wKrYRBWEc6bfVXGUdcmYmDa1SA7p1QxZzF97nfto5TpxjEK5mStfrNfKnzrdWs",
  "key16": "3BaL9Q84k27aunLoJWgMu1YN6bDZYgPwqKV6WLXyWdPZFeqjzWj5gV9YSrWm6rjEHkvDtR17WasDxj83hLtJVVuP",
  "key17": "VsRtv4v3gBhRzE2vrSz2q1dULhydaESCGRBbPcWzJ5Ly7SxVcHXHizmmDmMiFgzQsEaAhTEJMrNrMQxzFgawo9p",
  "key18": "kfPYUyK5YpzboKnWfZV6d2Jvsu1h4jKAAX9Dtz7geVxucfUUGRhEg6ydYHgb2dVvu9KTDUU8UyWFrbodJRaguhk",
  "key19": "26DQGtEwipwMmmaJSpGBgf2o2GeE1Pde5RGwVN9FSXHvT9zLJTEyBGpt4acE91971nVhADvTB7in4JcwcBZug56P",
  "key20": "yvJZwbMKRnbAeHMbUyLpYH7mq8HJAXpMmGbugS4AhFSEzDeExBtyYtAWoQKFhAJdXpAWuyEReJnn2tN1d9R5HkT",
  "key21": "3RLda6ynzFhXVs2UTnqmFngpTXvYcuy4AVh7HsbkCTZCWLGHsunkXyemxLBpTN26x1ySZUzr7g7F6QkR1AvyxUGk",
  "key22": "382JSuLijsST2hnHQX5hDTpmKYHr3foLZmAGYxxxndTjXU593QEU2XwEU65gFEfqnghs4D5oBFm4ky4Xdkv6UhPE",
  "key23": "4KLT2dyYv8fyGDmgJjbFSXS27D1NrJDe2x8SwQq2sGT2uG2gaGdmJFLYBMcqY21VGz6suuJ3zuaQre1ntwP3rvbw",
  "key24": "3sDSKz9TuAfmkGESo6twBryCA1kBjZQ2DkdHEiiPcC35BBmZSCEarRMovwAkfaPSwkwmsBXYEmjUJN6GPs8h9duf",
  "key25": "5ZFXXs47NmcMYwW9GTjuN1BQwBa3ZuyG6trd2TN7LiYNdMcmQWuM188DzxnaKdpu2vAww3eQaxfJzZtikvTAFRx7",
  "key26": "5oL5Trg94FWADogQdJjSy2bR28NhwZeG19pdwufQrMJv5TM6mjUpHLxgAKFgPhSVrVPTurHxEx91aLGPhVke4VYd",
  "key27": "5CSSyxH5E7aT4fNyPA93HhW7f242BtMGo5qdHoFaLBQnU2G8dACEzsXvgzRwDkjVae7UP3dpjPEyYrLNDSVDYwoH",
  "key28": "2rmQAWSWT98wPGcva7zJCcPftfr8XEvojKsc9aWNrv82M1fddUR7guzaFoH8H6aYNadES8qRudiANNUcbNgNv4Wy",
  "key29": "2GrdDGwm7mDVh5pYQ4eCYQByCLbwcmpqheBMiEwD7RX3yfvoahqyMEFd9Lf9ihLj1cU17c1QVx8fFYdqzWP6kJBt",
  "key30": "5cN79Ds5hPondbvV4hvdvRGFtGj2vzozwTjCRGw6agCxYVAzqDmsRwQU85t4Fu41fGYocTp6vzPgC3r1Yq8344mF",
  "key31": "2ikQapegYKFaDeR9RqUUF4QqqTLfzz1CwbTKecCH4KrMm2iUCVUbUo5LykqbYsNksxiXNSPLKKB49HfWttoPHLz7",
  "key32": "4H2v9eBhicpyq8GH5LtSJow3QRndMbbuYi1222WoDmTHyZu8pYMCniyZWc4Lm86p1honJyV7GUKcg532VNSLGQAs",
  "key33": "3TdtxDR3NhUPPscwAYNwptDSk1E35gJTnfKnmejDMnev28AMnLNUD8to2seLD9QVdirDMNc1MZRheqMu7rYeYSHx",
  "key34": "39v2ZQoC2Qa7APzBn17wbsFSzeQZL2aam51qVYc9KTJuXMFY1Bxzhvr4stkdp8Eiv1eai1UpZbuwVoJZPEnosCPm",
  "key35": "5bTTs1e3qv5sa31nnae93owgDMwwGkkDe9e2qmn1uV2adMusra31BVx32wkVxZSiiiPq2YUpEY7Hn2Vz8FY37qrW",
  "key36": "2gBm1ZoSkJ3KCyrsr7uC1RCTFU1y4sXYCLsqCoKD5kMLsbBbF3NiwbGokhTWgBwwioTyD83dAEK18gAsj1p4QhfY",
  "key37": "5PtcwtB9R2JA782BmJMck1uBx54KkmZWXpKFuJFHgjyCj2c6PdSdSMdQNuM1teMbFxPC3X2VfDrarMdqkh3fGzS",
  "key38": "hLwBDBAbfr55UcrktHG9Hb4485T7DbEnrmWetA3VGvMw82zGoZjbgY5M66KBmiLwQJQoC1Sb8P2QzW8qu7wtfXU",
  "key39": "2eDPyAPjaf1auXQrdqt1jyiZTFtrpvdzzL4bp6KtyJT47UE1dwq8dzu1Z12HXd4pE9t4vzGMqNFPfJwQ7psCfQya",
  "key40": "5XJimw7eUJ3X2WR1xxunUkEiNKeT3XRHg24n7ZkyWsBbWChoGwaGcrVjWYJSEs7PHfCV5XQhLFPsis824MZYn3Q6",
  "key41": "2KGMoEsMaskotLbd7go5YAXzx7mraEU9bJD4UBvG6krmCCLhzoz5iYcQeUdctsQBCeDxRhM9v2JPzK3r6DMevc7g",
  "key42": "3gVDUMjwimVUBUdirLfCfS9ZtFQi1TKL58FDSXJn9Tti7vz6o6oMchQqVJfrRFRVJibXSfXkYbmzspT9dPvm2odd"
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
