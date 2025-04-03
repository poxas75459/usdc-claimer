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
    "63ATgfA5nGLF5MPzjxtHECyYNHaqbELfpjpa8fuche93yS3VeTw3FEnvKoSDLz59DJV54swvoR36VJMKzVEMGy9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YnsUx31CAGCqQ2pqaX8UhRsvmwzioeevjUG5SWg8GkYKG58cTUnL52Y31RCeBcqy2cXPcLKay4QzzqX7qxyvRZS",
  "key1": "397XRMVCRHVDGytN6NHdUpS391VDXALmyA8nXeiujADeCNAWY5HkRnAfnrYgcdTMwqPH5BU2SrwtqyDJAP3o79Nu",
  "key2": "26mQuQYXt3zRKa6zD6sC9ykkQnpwCjTU8b57mPgiC8pY3fn6K44kKRvX5dn7bvguERaJQCpZYq4j2WHtRNrSyJTX",
  "key3": "3MT8HnRb1rGhk6axM4sbQVRGuaTpVB9p94JVCy3GaCP1bNXEbzVLpoxx5DkkG73eBgU7emwqDUGc7Sd3nTaHCDMs",
  "key4": "cJ8dTXdewMoRteqS14fYomBZmkZpRWaYcvPvrzs84ci2btAZRHApV4LaMb3Y39R2iBG1Zr1VupnJbrzqRnSjGue",
  "key5": "2C2EkK4ooGhGBgjZthuKoDMs1e8r8ZqTtgBkdcxRo2sHbQBQruVNQyVudm3gnR47BLbNnzvewxAZfXmF8s4tDMRM",
  "key6": "5SkjP34ffLosmCAuyqWtuEohhCZvhQ6A9iYa4xqCTuDK8wNPxqVhyRECmDvKztSiW3joQscj5ntUiPqgCowHvydX",
  "key7": "2ZVUCWmKkudSDoym2SZbt54ziGFmwnFZZj5wQ3cRczpDTh8UzQAxtTH4Cs4BGgv3d9BiGSdXWoWVjpQiZA1DsQWc",
  "key8": "3UrTtJ2dpkeUYvZiLJvHHqRFzNEeq9GDjvuyfixmB2GojUcnqVdBv3oP3vkLnkLb5Qs9Dr9A8P65erqXhskFidjs",
  "key9": "2ZLTH6Sdy2qjWHjfpB16zuU6N8Xi9pWsPovLtn4e17ESvSMAuUhfAaQ7tWUmxeyZ39jwLRQiUTHWhNxRTLRfGnzb",
  "key10": "4GBZUHvdqFFFdG93ZmAERrFsXPbRnvHVGeYYz1D2cX3rAVAbsoHpj8FaL2yHzpiPLpbM34o1haaNYe2hPc6W3mkV",
  "key11": "35BGw6sgMG8wbFtTgCA9iFGs1yBmEGZ9w8NGLuqMeyHd2afCdZsY6pw9q3eCWA1eJKw9CP8SLrF14T98qnsdDEDJ",
  "key12": "4Z7YmaHTBDZwFxe2W491QMDXEcpenDkgXMWqvRQg6Zz3Mit79dbvxG4FzobiePTi2NdvSnyafbXwdFg3t9eheF3B",
  "key13": "5shQBSK9BztoUXXWFMqRF6sAUR7Z6uxP6KxM5DzjYaFi1EeyZUq5gRs3zMDLNwHyeCvgqwywJ29D6ifmnr48Eq88",
  "key14": "KsdueGvpBCS1EZswCWQdM8mzEuGq9rQVZPN9n3q5coCrdVmVEZ3WQLp7XiUuipQjVre7nCudTbtGJTNiLuhKKtt",
  "key15": "4qTymWXCmLYWxn15yoyahgpchwVYd5YSd7YKkazTU2itdeGcnHYJM3589gWMnAfS3vApBtwUbG7ZW7hJaknJX7HL",
  "key16": "5uTPwJUmXm2DaFaRqGEfVsAoEoVgofraHEJ4UgUKzY7XCeTYYSvgANS2EYaNUzKRutRsGu3ALhNRCaMTTxe4c3aa",
  "key17": "4amMtyWZxMZSGddVme1KLf2r32J3s1Y2CWTvCcHA3opS8x7QodYoNJzSidbQxML7p9Bh57K7x6BPPcFrp9ZL5e3Y",
  "key18": "5YCkjtqmTC66omzqhg9vrF6PrNGdvbhSZxVRu3qeQrZmkGQ835GHMJ3ktW2K1DaEJPudaFf9gyF6PJyYyurQU5D5",
  "key19": "5wgHXRrRfbaNiYDJ9tBV5y6FWQCtEZ8Y9v1eL3xcwsaXayuZkGcHsTdAA1ATWGQvMZrjtzVqNv1QwfoPP7iXC5uG",
  "key20": "5uaEyNJikhxEBzuJuBDBr5X1NPnjUqaMsQWya2gMK97aaXECJkV6H1NbdU7EHvAoyukVRTAMhs7GrqozrRxSphQM",
  "key21": "2iD6hbTs4hr1YhzX66UoB6cbqZsGWysKrLrSaNVz3b2nEpJiSEwzvUtiuN27GrYyKHgXQCRt2cDzayjBBrPJGFVj",
  "key22": "5sk7pU7yrccqjSe4jgpSEdQTyMJRCkeomfMsDydzBtR4cCu7QQRfsfaWmKeLsuyNvqVSkmyZoE58hbWkYd6UztVw",
  "key23": "671mMoGV7JJrhKKQLwTh8Hn1AsGDqTJ11aUbUpRhJuo5NkkBfoZKhh3EPrg7rafLn6yGiNKDwg2dZAeQPW7q33tL",
  "key24": "55VcXnUSD44hbbufV18391Azj9bTnMjHKgu8DQEdHYHz7fnsd7UWZ818wDwLn8EBnWypqqowCJwHVcqv3okWHoVV",
  "key25": "2vuzgVQyeE9vFtpLbJSEA3dj3Aw7CuPJwciw1JAiTC16NdDJf482DCuGE26nZxRPBfRSpzZ93wimAxMFHMjagRWA",
  "key26": "2vPp6CSDN7maN8Fg5SvcZ4Recku7fivPjFPajAag4PQbGDhZkLq8LsJ9skrbaYbisti93C65MeQMVcjezfHCe6t2",
  "key27": "3DPGypovWqX5y6tGCS4QJXjTE2XAiUU8qLjNdUYPGphAZfwRGqDBuprrfYpqruxzuMtcV3KwNVGD4hkW1Bn2SNEv",
  "key28": "2v6nhLi8NBY5sAukm8bfYA8WW3eCBWP82mMNM95H79x82Ldjt7hwQKbZaDMfEnKs8ThHqpR7fPdKn9yfJiLHFZnP",
  "key29": "2MGWLH74pfMED8W2gmoiGiVfyM9gsTCtLPwNwJAfkc5wd8SfzeMUJtP6hKH4y9KqHYHRrZPzR9Bz7urfREWJDFn8",
  "key30": "34VWKkYwkyjktS5vXRZcmqpkfgRBJK8kAnVgnZE2PYZeqwxiGDuNSVyxVsoNtqVZNbkGXEsZbzeVKw2vLBQmonXw",
  "key31": "3CEzvE6pd7bo6xjTRkBLs3KzdSUT1BVaKzh8WChs2jfswUKbt4AjUC2pSTYKUfYE12ibcnZbMKMXmQVFyEmyvCck",
  "key32": "3wAdVU5DYfySr3EHoVua5rwa7Dpcxixw4apdwnZ4HfVK7tzuZby6e3JMkHoeUVFniunUBTQk9j2AS1AN45s2gfks",
  "key33": "czX7WgD8cJqn5i9tuDiP52Crh3K4WighEntKJ8caaquLswo1eWZAyvAeGtkNvPa9UP7PvZAyWHjNM1c98jqY193",
  "key34": "65pBugCmkXK5Pqc2uxvTxFVLoioEbnRoQR21aUmNTazntEanmozkDTwkq1tszSx9YanrxHg5fxefns8yTZuXKSqF",
  "key35": "5s93zg6v6Sg48Vh2zQZ7fkD7Tpwk1X7fWLp6pFq94iQ4xoJ7jFM4ZB4k73cP9E6JzNUX9A2fMnaoqDJkvPh6p5qX",
  "key36": "X1my9xePK8Hba6f8gt5wdHcxs3UP8k9jthW694TmbWVUeNp5e665D8BixQ15LWbgWV5v3FxePVaNtQEGkjCwc4x",
  "key37": "38RuswZQyb8cJL35nugvN8vQc8RfiojRTcQaTra3swLm973BJjeihfZdxuyKKPSLw3jfy4RPkW3oPsDuJsu6RbPR",
  "key38": "46fPcoQ7kdYGbtyimss3bwCt2sd6kmpkvTXEGjWAGF4trVxWpx6eMk8bGkpwdJ26pxZzekEW99zbJHZq3kyupdhe",
  "key39": "2kuB9jXL5vd2B8LykchHAPrpCmwioJx23AV4Wppgbz5gapUPoNhJ8GKRjhjZKhhSs2Yc85UnHmf8UEinK8iBhP9g",
  "key40": "2gwApghHSXSfhzbsCgeTuanicqvjo9uav6ksu7Q9WfNvnhNs5NBR7AuoHNoVKodrfjYHxf6twXHLyEN8Fvhg68Qh",
  "key41": "43H7UiRRSD2FzM79fiVrM2Pmtdq7WTHBL8sjoatmF1K5dDFBu8St1fPb2moHjbaoaRQcCmUJh42vaxfArKpnhVAp",
  "key42": "4r7MqwjR2nP2oQRVn6CHTRvyDQABzqrc8DBRNZTA7CTKYmvEejuuZT6EoNaYu3EZgiYBhgSzLUNE5VEqWERi8iHi",
  "key43": "4RoxUntFe7jW1GHVQuVa33F5qXkfr4QmiVYq2eFYxomJxXPFS9NWRHcHifUWCrVuh4Fy8PneBqZnsZrM1QXqxSV1"
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
