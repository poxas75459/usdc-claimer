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
    "2y9dQRFME1PJXyovriGBYruC44reazZjY1nPFXRanxQ1qD7R9Uw1gdbKzFTiA6ZaSN4ooXh2wkdaFYvmEpvFuh6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y89uCbL9L2t1Pn2SwtFMgq6yjfMVHNAN2iGN5J8gRFnb9t7vzsCqjuUuJmiCLAAUzmw6K7CsCfiAYvDDCf919Lg",
  "key1": "46Fe85KU2D5ysEoWoRr7Dk8UHVinJ8vrKCADVvxNZEto2FwCES82rQchxzpJnJfBKFo3fJ5AYtNCkwYpdf5LVys2",
  "key2": "WKafJ66F9jtYzoGTNnpmGdwKhg4UushUr2SU7ZveEZwRoVnWUaftktDCBooTY8n7mbefFu3TcTSousKVCKuWEkk",
  "key3": "3xgartCvNLYgktYPMuCWVHzgMoEMsaPkkvwJUEDCQvpsD9sSpA3sofE6eBsSM7y8ode812NSVsKRd8qfvBnCZ3xD",
  "key4": "5BNjDPYEtFe1WyACSGn9CuXK8hHYPMDXWX2AgCCg71mF7mQKeZpzSvJYrcee4U5KFZG84iiPPHyVF6SZnL3idB5L",
  "key5": "247smk57frdktcC9zQjKwWvChnxMxb5NJcYg1HPN2jh7dGkeNxoSN3Nuf2mSR1KZsSPmxdBA8qAuAx8QgVJjtH2f",
  "key6": "TLtiWF1mQHffR8vD9rjJr7jZThWsZgYX2kkRi2N8jRzXzkLcx8sJMZRPKbVPcxgGMCyGB5HQ8QiHG74D3MXswPR",
  "key7": "5ykDeJnMtkibHeQ74h8G7Scf4GXMQyv4sFcW1DL5ZutsKJmpWJyoyzctmuNrKThd7vZxuTjUC72oMBfY9BB8rRHK",
  "key8": "2dKyPTM9r24k2YSH2dRvG9YnGgAamfnkbEGFtigPaGQf8HxVTrpcgKxTGm3TMenFRqGt1uMp2kRi493YngPwWdwp",
  "key9": "5ws8SA7smV6PTJWFnXohKYefkXidB3fuDs8EkG7trTZZ3PGmXzeY2AkApLhpUJrxUr9gu8BME6s7Vd9dCojbXpiM",
  "key10": "4Dr1QXRSqZZ75uyxt4qSKnQnovnerbLAdxsYTsBgC9ugwTmzntwfjEbf8k1BLQuXUAviTxHTn1cCCc1gUsMfiAYB",
  "key11": "3ZijHWmPRNU9b1rUpQX99QwtxZtrPvXRZUzHC7KS5e64CJDi4Li6iQJZBQuAtgFiX3DQ8jsBB3Ev7a2tSv533xUK",
  "key12": "kTcjqzP9kMzkmWKqTGTbxdVDa5dgwWidPpCRMaK9yxgcqffar2dVSCPQ5Sk9H228PquMSksmLotW9LLm5ieVYNM",
  "key13": "23VkeFi937sByH48aVcTLuXCDUKV1xWkecpvJFoDomSCWM9VTcBsxwjYowqAZK5v5kEs4TYRjbY8UYeZTwEAcgPe",
  "key14": "4ogvY1DUEfBkHbmvYppFBJNWQkGpVBR5eTEf6ebyeUU92Ly8Qe6kX8MrnAj5btYMrFsKbP3bLovhp67X91hv6X3y",
  "key15": "3KFXsjtiEgK679PLsEenCopCNdMicLTNwuhWKQjK5NPbY7qwijVN54dtZ39f8tbPCS14kSz8RfTkY7XYr8jxwypK",
  "key16": "3ywCmAwSrCLpMbu92eEbcm67Ey7pzEP7pYprTpbCfpJjUMoGz9Q4X3fYoEtaA15FXpNAzBAZVuEUiXjz7xnTvFzD",
  "key17": "1BNZzdGwRCdPTrCu983Np9RojL48FJFRSTfUsd6WQdsgPSC4t7Mfq5JST69vaYgjqj5thgjF1vMuNQkUdWMgcSw",
  "key18": "2heKmpXDFgbeAvAEb53hZjbdRTFsV3AcdmfGyxr2oEsPmwZcFWoK5xd1id8xoyoUNoZNBWP8G3dewos9k6soVhF1",
  "key19": "5kHVx3RqhQk8a3FNWeyMuXx5BieRaf3533gxLxTrFEL8mJK7pHR4KZGCXrQFQpdPBzAvpSbVW3QjddchcoDa3Zq2",
  "key20": "42tVjs66XqZpeHTn395L49PvMm1exmXmE6XXuu79bTa1yQBuK8JP9zqwqhMPFXTenJghmDA1wCc68cz1gtVB4yrv",
  "key21": "2JJPkwuHxB5Y3J1ecKT76tanB3zaHvrNta4PJ6dSJx22kX1BLjdj7QLTS2TbGW7x5vkG1dXhP828P9LqVJioEMYx",
  "key22": "2EgaR6FSmwvbLhiB7PLf2poqcq4CnJZ3kV5UiJsQgDVebzRUXFcwuZXvnA96ysn45NsqgybgPJUFcTFsphE22D22",
  "key23": "3p1kEGPfoLo4cckSknKnAtzBVfyoswNoFbWjWuo5paMmPtFKbqCaHZXUKgWbr7Bqpo5FXik32qqfobAHZiKeBS3B",
  "key24": "3egsbX8ihwtuw25rbQGdRWKcAfWHbJwu17MsRaHU5WLcBUP1hvAUyxi6ibKXR3obxvbXrj4XnUNEoYB6yRFxjWap",
  "key25": "qDFoVnDQDHkwKrTyxKDtQZBhGrgSQGbvGhAnQoXtPEJwZP62wLNG3tKjEnRZxiKcsALa8GVRm5eWXkahCRBnMQt",
  "key26": "5xY2cXuNPA3PVJrnMCmZkqP8rYEgcVKGPKuELxYaRR7GWDggBKJZEX9ykMJpSaaLhrEUJwtMBd9MriamNcTofwo3",
  "key27": "284yBQE7hZzTHP8fDQ3D3xmgoJ4fbhJy4Ecd1QSm9ww71mYtrNaKrqk9TNxFYeiSEfdjFfVT765cCoRkuUXBmH8V",
  "key28": "4bZ2q3Aqn68eGQUdRFGLaAXYfwvf8fcphjH7xjWRLAm3C33mjJrmdC4qbyFvxRevvE5vGmuD7vqWK76zzSqdUaBU",
  "key29": "iq3yY5VbkFeMACeH3SQvm3Yk5jPdGAxxe4AvMd6MVAGUYH9DLcyJoVuLfvLHi1WKGyANbEta1wLtnTwTbvJ596M",
  "key30": "67a1CESnwbn8xUePdNa5PymZ8PG64LeCrz8mfGeDTZbC9q5CVCA52WS11UMHwJQ23pH56yhGrhV71FiK6nN3Z6sR",
  "key31": "2jQ3a1EncmW2hnHBJDMTBjrpAbyoza6uy4LTFFf6Z45gbdSubNN9itX46nAFBttKCBdu6NGYMpaZgodk8CXBYp53",
  "key32": "5NhnVgD4Gv5AWE4arKNknLLv4ygY7XpBo6iiBohS7XGdMaRwqRwWsCNU43Uc8pevTzbSma2Z2o3Pdi42Gk6kKuy3",
  "key33": "3eowp7rGwmP5oG19zA3ie9wWoKMWLLG4EiT5Jq5N9bcm3MC6jkzSiZt6DymBW8N4YUyNdsVbi1Azb91Znq34BEeR",
  "key34": "4PXgBxTmL7Ec6fpzQVWMBwTVqHAjjRdpWGJb2P4peLHUdNCTj1jrxxKSezAgUwBhh691q5LMRgRopCS82G48Aabg",
  "key35": "4UzEejdzJacpcowctAZSwZdmXmSLqnGBpsvLa1piRdWkzvb5EFyaQZmuzPXYYT84poboRALbknguoKzDZtMJ5C66",
  "key36": "64Hhb4vhVMzGM5AizutxTYBd2gPkynXdbkJfKvbW8VaDfmc4zPMaetGZ56UgDP4xkcnVwk5DJrxRw3G3TBxR6g7B",
  "key37": "5P46ZTCCxhAfJh5ocJUBNVCE59nSXNAwQaZHu1ZiXRdLuzbWCx8ADJain9unni4k5JkRNL1NHJ5zzsU7HBbaZnSx",
  "key38": "4GfZ7qVNbwLfmupEkywJYxjEshoi2XseqwvD3DRfZbLRYcjDZWusebcjddUuiCie9xoGgyF7SfVYQwHbuSqf25ah",
  "key39": "5zWY6TcJB4bNXrGQDsvBcsp7NLbosqJmd2Mwxwv5DgwzJMThwtk3XyoFPXhL3X32Zk8MwuU4nbLmgYVtYzas3t7L",
  "key40": "DPcQnC8TcPrpH95XTwoKHrDHWyZSJjJraUd9snEniGxrHNg7G24DKgQNrBCVEkrYUK3Vrh6gBpJ3butSiBVSBUd"
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
