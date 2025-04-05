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
    "5wsEamjSTh1EcWa1KXuGmpsCdTkE27P97gJ3zrzMi2aLVWXusWWDNKdaDEsAptJvxYu5veHEKxfz3QyWAzLWLATU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G3E8vbjrpbM9F3BZUmYVPSvbiGq5tSoKy3pkgSboz66PuKkYmnw9EnuDavNXJxvSK4oQf6zjp9zfrJPEJxdQYzv",
  "key1": "4y1D5VxuPCVwjAkbm1aVdgyuf8EtC24MTmrB76iKZod2FSVBuZmhmNFZMW8xEnt436DipkaUnUuDZqypcgt5Gh7r",
  "key2": "3MsbJ5oz3fq6sZGFTmQrUxkEEsuB9nUxkeqVEjjc1hqRGJYQLFPLvtBx5ef2BcYHtLDKeaRQggBGBsfs4fcRhWGc",
  "key3": "4ixjBJT5XTjk7Ukv2jd8gn1t6HXbJAeLX8QRWMdF6aJkKFvPwnrUKvPf4b84DWB6cYPrkZKFKCSVqsyjEZ2U7yKD",
  "key4": "4kVmmpg7iTinXUsN3a1eZhmQDAKWXQEfqpdt4sTrpsYpcjyLb2kRR8i9kmVrVFmpFpr3vQnwABHd1xAAuzY8s1iL",
  "key5": "5mYXdKAKKb8QebvNZqZn1bEf32PbVhNiERKZum1dfJzxw1cGKqax13rMgben1xBDM1SqDVGCMRMKvkXvJcaon1fE",
  "key6": "3v8n31Sc9VAVbeupvRtTFUoy55AsgTM2G9z6LotJPfxZPstYnuf6S1cBMyYN9jjnd484RW32QUvH7M3UMCL2UxfQ",
  "key7": "2D6dXFWKE4d12jNY9AoMMK7C6dv478ijgPJisExos8LbqbSVr6pxn6rtr5pATAEizooq6wrVPrfUSfNVxFFVpNET",
  "key8": "4UNLJk2DoboNEviBsmPetDhbnBjSQ8K8zjN3bCJp1CVenJkK1ptSRG3Z5gUmkecWyrtz7o6iVVJdhk3UUKobWfN9",
  "key9": "3xcXsJ9fFHY93tGkgeayXB2pnAPbQm3WAKSLMpKRG67Di81eGjsgB6LC6HvPPiYN3LkXu9Wycb5etb5iaz9YJSaT",
  "key10": "4gXd99KKsaLpTa8CD2XmgX1Rk7dUhy6Pxp635ofum8jfjgBwwiYQZEHUwyoqNJTBuYKrqkmt6kxfy24Ev7kQhuqb",
  "key11": "56DST14rezJKyEQhavpuT2Q8Xsem4jBNS8qEa36gPjCsZJ2Yc6w9j3Zew7ZN86MdZmB3vFbCfQYUBj1WSBAQuTHa",
  "key12": "3ibGrRAom4FqrYpUf9DQiRXKwXEUNeGRC28YkHFYXnP3RTdE6gRqjXGr5szQq1biVk2q5zJUcdNLDoMkVgro8g3T",
  "key13": "6j9ZQAnoZs7Ccon45L2rXTPByiSFxU8W89xF7neorpe62M4BR76jYRodUr6c57D8wEPhumv4JzTFRFxmZnxMsJx",
  "key14": "3SvqMj5zkePYiUePsSHaAtcB6zk4Yj1T67i1zBAyusZrCsW9nisYJbxpwDiqt3HXizmMndhmJ9nYqRR7KkEtjBNd",
  "key15": "5jU4iABdT9KBVW2DbY2p39LLPomErY2uFEDMMQkvEUNBHsEsAo38BvxmsRXmGM29rrqoRkannXPK5uj6ctE7fQFd",
  "key16": "2fPFRktvZE9TG3VnNusJvGYJAhPPNxzFMn89XoxaU6fCLCyKNixEY35doci3VVoZHyvqyicWTxF5kDADDptSataQ",
  "key17": "17iHxXQoM4WujiPF6CTtwZbyag4LyJhMTZ8FRhDHDf4Yr3DCaxV9FniTiaugC5HKJaGwpz5WafoJALZEgpL6cgx",
  "key18": "4riD9mhAyQ5P8nxwQf4p7cSf3Ps6GUHEL7gFAvjRJxKK8TeWLAnnC1HjuYJiEVrV3yCWfnrXN1Wd1zxgAwLi7DL8",
  "key19": "57FDNGkCSgxPUAaAKXQS2KMXA5AVkXyfXncS1VVx5xXcnGEXUGjwaoGBCWQCurLQjRkhX27wpFEH1vf3C7ygaGU",
  "key20": "j8hGthRdTXF5htZfXLWKUXFFCFqLi19Q8kWZYUHH6Svvc3GWBwAzn8fvQGsjtzNvb1UYwgxUBwCPrX2hDPU38SC",
  "key21": "5MTooDYkYD85kmK1M1JwkmGiNuXggZUr5kwXrftKFkkGG3zFS6fceJpkEKECw2V1K7xmjHSfYZ33iMXTs6W6s4qT",
  "key22": "4NhcbF7fAbg4c5B7V5Qf3Qvdb4hLDXnXxQsTokPeuArAWXo7WER82NV3aFj2TKdRZXEh9YvUuK9PHA9FcSPBB1bK",
  "key23": "5JMVLY3bZ1amHSPbrCCjZ4UncCzVWcg1GV5myuptSbZPQuqMZE7dY6YyFetHb7c1tSPq8zD3uCur6uqhxCVYe8qh",
  "key24": "66E8wyquZkJ7cT1NmmuJiCuEm43RV4mdDVmMDALkxpPwRZ4e2h3pMbj9Akwp3U3289byaZwcmMgpKGFjiwNSPtcu",
  "key25": "43PhM788L7pb3NhWkXTi6fWJogJxxgVJoMBKuCZWh2i9cNBGeD1fwxkFrYMKjBjuRAhY8r9eyt9feQ8x57nrVXar",
  "key26": "2BcinxNS7xgxrBtmSe3di4eX9iD6GYxa1gjxza78xTQi3QAqe2sQc31omLez7iyT6PgCQmhFh4zXU1uunFv2BMjh",
  "key27": "5TubNs5nHCzZNDsxXcKYgt4S2ZCZnTECWFUKb4bk2vDH1usYZmWMmDLHbPL8YQLxF1ibQ8hRVufswC6fZiBtiQow",
  "key28": "3EE976snNvfjqWahVLp4fQGpeUN2bi3fcJyhy28SxRPGaiRb5tDitsFFTowLdBCU2PDvvaWdhVBWBkEYQdHx3U6h",
  "key29": "39iGfSrvgxDxTVJPoaBVF4S5Tz6y56eac87iXNAih1iSkJid7SP7c3XcjBz4wMNPT7GeGUwULTPGi59cn43zTSSB",
  "key30": "3JfmcRaik7xrAcnT945CccPGmhU4ZWKLf8XaosmbhdmVKT2tcXVR4uVBcEYn277mVXpTaH5H8fzCm3vesrEuHWBd",
  "key31": "2MJQiPWcjHRa39oaP8ceN9UzL6iAXMtTCaJSuQefrBLfv2C96NQxtpdxAaz8kkbJPckAzGHt3yM1ryexRatdb8gi",
  "key32": "5nhwkx4iwF8yr12xxUqejxLxf1x6s8XveFWNavdbzWDib44wY68yoMwCRHDU2vAqBB3UDXhB8EjRHAgVJaHR9Xnc",
  "key33": "5FySXzkLyrUTW35QP6VEdEUfAaZfuPGgYGe3XaHxkVjE1DyfnhRFdDAZL6d51oxWEzmFChtmuTHbKmuJAxXzGaD4",
  "key34": "NA7SrzsbHG1i8XMk6i95PEcq82J3tUogVfWL2pAjFscLraHsTff8CitQTjkxRL7a1nbSWPbK7xyK85DQsEgqSNF",
  "key35": "Q4tqseMn6tgKmaBrV5g5mJVwNir9Fc813vLjx2PAwvWJdRCGac9J1iG8aPXcpj454kiS65KVEzfL7qSh8wzg9hP",
  "key36": "QXmQsZtxXP9PnCYRfqoVYactz7Bv2mTJHbw3G8Y7C2Th9EgFShATEifg5R7rdA1WXSQNv8pTh1qXwSRH57SkVFk",
  "key37": "3jdop4jH6khuvjNJE8dTcq8SWRzmyntGukVyMJ8D3H5VDR5PiQEnkBwrDQeykzyJkZY6evd5CSeYejKRQnJndoSu",
  "key38": "fdCL8ZBvYQWcGnqzZq3AggT4HpazWZ2uGmPepupLjqW7UrU4P5WXMQKpa8h2GUNitkMvydPDEhcnuh7BhMvGabA",
  "key39": "93FF855JJfNYArvkcLo8np6Nux79AhAVpy4CTa75kdNv1DaiMhYEXR17SXsiB4ym71obM4opLX5axKuMRU3EdK5",
  "key40": "5jkuMGGscDM7wiCUUHdTU7dWtC95zP7Yw8JZjDiRDYWz5S3WSkFrQqqRU29dyPGYvmhKmyrniYXx4WpkTFYn1WCH",
  "key41": "664J3zGjVheRSGo9TRmMfsGCroAvKaucMKtwESBpAzYnevsUNg2Lcs2AnpQFZxHywU3oA2TQNxpAcHdtstZLaiQZ",
  "key42": "595gGHDqHCVtC33PGcLvXneFt2aRR5td5kQWXrj87czNVii9nJywgy6DiZowb495zCkt6wprXTAqGNfeY2SKUwzk",
  "key43": "E4cueoAcLFVmv7vUojtZyzD5Z9dDN1ZwfhUjRgxpxaUzboLqy5qCzefpw3Fe9QkPwPn6MdK7Q65boAdsTZ564VJ",
  "key44": "5ejooZAszK8WmAWYvNz84WeaRkodgZ2RvnMh7qjkCum6JUW4k3fjp9gNqn47zXc5zFyGiHg4yynRR4iP8M1fBudM",
  "key45": "tThGPze2ad52kVmAPdP5Ceu5XxE8PrmdbQhyh799WqXVA111gVu1GYHpBCHv7KT9LnXxc9d1yFLZgDAr6D1K3sE",
  "key46": "39UwSyLWUucRLmjcdJSpXGQ1kNK2DQbAKXwM1coUEmtn9jbQ8TW8ne9wfTftCfjeDEKqm6v5s7oKX9FPg4ddzRhQ",
  "key47": "5AksrkMuqxZB1XSEs1FkonxjEtGBmPiJLGaemvuncmFrDWmBUttCNrGtc7HfAEuD2MUQhjnMkSGWCYWDdTnB5W94",
  "key48": "3K6dwupCyqbHvDN81dfme1T2FWshW1PnKVcQ6u9JHRCtTP6S2Vdts811H6EkCvhmf7vPQ52a3iW8rhWaoh8xryXT",
  "key49": "5ZCRxMPgFoUQ7yivsRqTEP8Lw6RuFeQJUvWz3LbDqVAWJ66DiyxmRS5Mp9SVoZe4xEYWpFtxUbxUqqA1v8yYHNcE"
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
