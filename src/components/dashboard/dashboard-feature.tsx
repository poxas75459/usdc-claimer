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
    "5LEcaaR2WrcGzgUgveKdhVuZhEd4FRaBL79AfjSGBgZvJtq3VCLaseyi8DRG7WmCULtG2kvnbtbaybEDJSg39ZyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVqDD7kyNNDhSt3pQwzc4WTbshSbdLRmdh9ru9BQXQAJ1Jy1ib4PRqRzUejze9RXLWTmQB4DAS4n6EFkgvemu5L",
  "key1": "nW6ZtgPvbWe1qADv6T6i5RQWCKnQa3yWa8fnL1YnFewbJEAHnyFT9HA5eqnvTRS7zHkMiaAU1ygFTJamk5csnCH",
  "key2": "3A2rLb13rc9jjs7UVtAWJuKPiLNxXEsmoXhcLjs9PRjwcFgRQMUB4C7v7kmXWA8TiFftH4BrRGRqTNBZ2GBFa8Sp",
  "key3": "2FH3pRg7QwWVEM1LWZRNLNXpqCPADDZ6wheb31sfCMPDnZk7DaMB3971Pvn3fHgAuLYDB1ReDsG471M4uG2Uhpfy",
  "key4": "5vykeQbuLsG3M3gJGLPBezsZ12CMAqLJ5P3Gumcncbb5dyheLYLnr8Jiargn3mvxoHeefedc5gSvGfE7ja65skkv",
  "key5": "5Jdyc73mTJcRjepVtviYmhKAV84g4sfTPGsUmkyyyQdMPNMzvbBtLihnSpLUR2kPFRSx2VXCqgPk3XHQFrEaPGTt",
  "key6": "3TgfWscJfTABU45RcbUtyPCepFNzcnqcnTG4fonmgSWFX1hEVgfi6DP3affrts56XuBga5nbEFrVR2BxdHHGxKrf",
  "key7": "48BK7XtSQJBs4uUAsC8VCQBu5kTikFXoymTkE47Ekm1JcSBLxXAYjn1UqmMLnVpxEyYGBMyuEDvX4QNhvs5e6nXv",
  "key8": "5Xcu91LmpSgSfVsCr2WDwRhXEQnG9JssFbqSsLeCbPZmNusomp3qiqm7eNh5H8nUmVe8UgFcrbGvDbfs7fGWsN41",
  "key9": "5XUVkbx5LCePb6zbD6nBqPUkqBDDr7q3sMPGmZcabycezLteV4GUFvzVymiH37NA1pdQptoMduJ2bNb8e36WUMmM",
  "key10": "3gEbDeKLZKLA1CM2ywchq7hhrcr1ebywCbWHRbqVKmZRWzJjByyMgjX5DZ3XVjEqfKvkadZoUiBe3AEtbk28CAdz",
  "key11": "5h6vcvQqgE3ujeycpcTTicUFwCKUK4k4snkm544YwngD5bWyU57dSj9CjKLnCYV5mA8FAj8rS5wtj64WdggtHx44",
  "key12": "5NjVWY6kaHu7qYAXGCN2HtQ3qgQFadx3Qtk2DD7WBAvDGdcySmAouubuTCQX54CVbuuTLKmmrrpXFPm7dL7suBPo",
  "key13": "UhfLYcfAojaWzhPmeSWCRQFEE6NRQCz9rZLrTrBhi1cCrSysC1zLX3qzL5GwonwUkZebiELBZhRPBMqE7jqdn2f",
  "key14": "3SSirZyx54LzD1iWWUwimVyj2akD7dn2Pz3MUbHCyuF8o3572i3RtvMzhTDDo6k73PvPLLxexr1meEMTxHui2LJG",
  "key15": "HKCC8ioa3RfytX2S3W5UMugHchF83iLk7fCPxyppBeb1QQwj7QD46mBVn3WB5xo5uKiEgbYPHeZ9ymxVRc1roSj",
  "key16": "5LbVuvdqhLpku2hwru1g3giMTaiJR3TxzUBpPpFJkesFrWRd5gPff6jaSJcYhs29mf2Z5NdVy5ZXRFqxWJqD6Muo",
  "key17": "2Rnh61eQrCRyL1nELcf6XyxF3wi4VyFQ86yMabUsDgHUyf7jUQhpyKht9ZPCMiWPguopBgfYbL5jQ7JHYiLfuBsa",
  "key18": "5XXXc6dqoQeCRNANHihKjsikRt9a57pgcaijAMDTaAbLKKMKcUUJjS23K54v6h3kBWQh1dwKRdCHWpRAar2qARSL",
  "key19": "2Jt3gvkag5htC2wonHpLdqBoba9jG6TwFhCDRyHqajgNzhUSbfHeDu2M9fKto4CU8XqdTyVj61H99qtXZDkMYeTP",
  "key20": "4gHB7EhVTWYqAKWoFQTiD3mJnvy6FmRsyC882ntffg2fYuevVzcLVPshmJG3eDyS2nZmWWXTCUs1wAVv64Y2x3Tp",
  "key21": "4ATVbaUUKrZZHY18QCQFhaWa84EYeVSb4mZEtdVmNfu2T4afMQPbKDXjHxUHSsudDVRuRmqpcciVzsXmKwqCjqTP",
  "key22": "4fMmic9hzkAHznKNv4RAc8enA3tPwBUofqAPuW1YaWzyeSEn1CpFYxu9syzYohQVkPn5cHivgvoTcb8q13QX2PnH",
  "key23": "4wymXiJEqYE64Bugn9LP6sD7v84fPjrknAVNLyaroT2rF7ompWsmw2QnxyxuyJ6ZwsHskXx5Lkhe7ywLpoVDKkZC",
  "key24": "2A5ZBqMRUzuEivp5ihKGTPTos3fJtdqCTqhv74VYzkdytqn4369oHbSPnNMEWbJjNEaPibpEEddZGjpit9LuW4Yq",
  "key25": "3MbNgwVxSwr61fkSXAWevhYJzWg3JeRAXA7YhkCFQ8jfk9euQS2mEk6Jx62K6Ri2vxiaounwXHZZazjtKN7c4bTJ",
  "key26": "Yw2ctz97bx6ykBLjztMcakQpVrEX9bCadkAPZvPDzwAnhkBy1LrCB59ptRdKJSEC92HZxNiicWhC7fdqWUFnVBX",
  "key27": "3VEA4VhmQKyTS3LiijsvAhdpCTqneb873KgwekveALP5fHTvXyeSW2WPhjipoEuHaPaNzmzfFYkYoqEf93xdjXeL",
  "key28": "2qYPcdAzgsXFQumecYUJsFpkNZkJzucjRBfmaA5WW98MU5gkGwvUQztdJZbMM8Pt6gLkhDGftmmk8STqkPadSBMb",
  "key29": "4fejC6byqoGAURwK33JrQEynaKXyETKKn2U5a9odozdfhS4s6pCxCPw5byZwsTk2vLvWDakBfsuBdMJ3VYt2R6nX",
  "key30": "4hMtv2qUzMbQF5yxtyWUWSk8pGvMJs7hBGgWWWvzC9RVbHVA36wHG1PcUanNNVqPbbtToVRw5bXdZ16it3bLrz25",
  "key31": "4zQAeCnLqkFMxSWZM8Lws6Y8RAdiDFJRgKKYP9QAtF8j5RSmbiU3RaAQgQG12zjLNQd7Q7MyPT2o8YjvPTeVQkmP",
  "key32": "4gmKNbGB6VjzzV9gamW6yPF7awdr47c1zzTYAngh6cpzq5pJVFZZQfnwDmzLWskDDiBCTUhQCeNvL9eAf5cKUKaQ",
  "key33": "vd37YGiThj5g9nVq8ovXckrukHCr7JT6g2FhkBoWvxUB2eDX9FfuCyqHfsFgsufVskTCLdbAJhEAeLQ7BL9Kpvr",
  "key34": "2iiuE9GUWgGBqYPQpWCt82aKUth2Hbxz5pefTz8e49gR8T3jpYi9YUR3e7BqXA5hhcSfLdACWW5Bo1sFBWrdJ3QL",
  "key35": "5V7SkrXnQwE3GtzQvNrgUEGwoX14ZdM7jdtgpwwDD6UesPaxnBbXAwdMW9L2emqWqhCCMvjG9VkHfeq7vYqUzKET",
  "key36": "2FjZj7Fu5o3JNHJHmQA5ou9Biin9gTmmHBdw2K6tnngHnCrteBmMwdxdzWDbB8bbKxcrBHANRb8dXpTjE7yewisG",
  "key37": "3qw3JeqewXxHEKbPHNeSwaeDmp8iwg4p4kKN3a3UqhBfKpcbsRTLWESTmdY3suB68R67efm692uRjXMUU2AocY7S",
  "key38": "2gdiazjFchT9LZ6kLytoXzYuYg6fBfvgtBFanXp2QjEHCPb1TTHuzT37nsUqHyLGV38LP8Q99fcPmo3MuTDLz3Np",
  "key39": "4BSQ1e16H35v55CoFHhS9uRGoJsexY8iuwUqNHwXjKYQwQizv1eYkb7cKoDcSjMG9xS7Ufw6G8EeZaaRedtif7nr",
  "key40": "2YPYAGYt5MZpRaK1kcfN2921Y5cdduEXRwX3M6maj6pau5uzHCcCjzT79F5tAqnpaafSrn1wdPMytQiDwC2N7wi6",
  "key41": "2VPZ6FpmSxZS6xV9HVoNa2hqwga8SgbEaUhWitWnAn9u9rZKFzb3SvPWLaCWPQPhUAV9t39848gmWKEN4mxvjnt7",
  "key42": "4Hgpw7FZn8JFacho82RJGgCue1GbaRKf81hzXQukJy4RRGjCHZ99Jrkq8amARn46Z4cYppe989CYXQCGeuS15a6P",
  "key43": "32fjvNnR8gP4zm7bTMBFBmRHVPJ8hASoZVbsqC6PQ8zkCj5KDyC7gMzjj2crNDhaSSwLWiw32VsQuoFzfLhTqjrM",
  "key44": "3DcoRrsTwdMW4u9gxdckebdykCJc5fUTdLBrd587D1nCyFfkR1orQCF5MMV6bX1W97UJVAsUfsp1Kne1Adjo4DvQ",
  "key45": "5AMqvYgD6hKatetEGhh9k3inSbbePkvvs7PRuwCocKK67rtdmyKRndntafoFxCH5UkBFT2sxqDXCpNMfcAY6UQEU",
  "key46": "5bxPPcqsaqSeMXf4NDsnVb5w4YMrHVtahpt93zrgvJvfoy3FHrDHXxR9cYQ8JTq36B5VKLEbwv7GsJpnt3jLZc4J",
  "key47": "2GHeV9C4f9egSbmGDcq3ZPGibbtCgMEhk9b6cKiqVntrVGF7b64nBnLaMgx7BXEP5DsQkeMa7iQAXHoVTT2CVJUv"
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
