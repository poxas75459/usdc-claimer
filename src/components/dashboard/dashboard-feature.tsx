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
    "3auHDka1mSQmBr3dY3XxD5uxfds3HANyvDhD7uDK44Ar65mrs9qATM8QmVzJcnvPJhD4kH3YtPCtAnrnSn76G4DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q68H6woPsR7X3bRosdakJJxTQX5Wyfk9SeMGMgvWTioDNspHCjT7UwW3kZbZMPQYkzA2o2MNQH2jtbnF5gmfdqU",
  "key1": "hf547cViMP4BtueFjSgDFm8gJuCqvJoNz87yRLzwruyGKmu41ived5i2uk1HtpPEXqDcZVGnoLbDeFqMP4E9u1h",
  "key2": "35jsrfpwyKFEknXjndZh7LkJxci7xiT22crzBhF4csnX5wGgmUoYFTzAKMbEx9D7LoYEXcWQSdaCZJGoTatdDp1P",
  "key3": "54EKPoiHyyX8eBkeQGk9fTSnPCTz2qK9PNWNm2KR8tPJtRz9Hq4dcAgYJTMHFNUqxCvQeepTr8t24UTbikoxC1vq",
  "key4": "539Wz8FiQ849iHe5Qz8Y1jPnXmLNAPBF5gor3twUsxXLrDjWyJ92QaHwd17uxaHYTVdcKRQdvWAbofcTCoVBQ78z",
  "key5": "5z3xxACGECd1KKyGQysdenkQbqPnniZgLvf49TwqRRPVQvNwzm1fb3X7qKsM2qgqrcbuTTk2hrvs2R9oeQGdWESe",
  "key6": "5Rwqtvicr9DMY4Byu1YffjXbZ4CtHAawofg3CyPA1XXhzmhVSRBD2CdZTju7SXpJr8F2hBhSUqTTo1G8xQSEZM9n",
  "key7": "2e8d3sH2f3zXYnprPr7vFR233BmLaK5UfYKCdV9CShR382LWJ3teZ5XZMiTCxGRU9zZorsLePVSa3NrQkanwzim6",
  "key8": "3qfLRqoxLQ8h9J3vRqPvror9Z9JT23prmDeSq9pR7MWemi7yf2urPtQbGkWt4tQWSgksoxfJkdemXivUDrRKrsPq",
  "key9": "tYNWeeWF1RwHucTCmjR97erTrWCXDKiZLCrN2NmjVgY1B3gPMuFgVQzaV1VuF8CzYeM53QekoYwcY5cqnZsL6MU",
  "key10": "4Fpkr7H9F9dBCkuvd7x5UjA5tzqf9uFuwooJebaF53HB53gxcmxFoLBDd612jFe452Y5sBkFA2C1D6RAmyiNHhfJ",
  "key11": "4AimwE5ygQs2hP6PDLHDrrExz24uWGevg9tfN5BEEyWUueMjQZxRBYAgDMH6fzKvfeeQvg92jAxScZL7aY9frRYh",
  "key12": "4VAW6JohBM3eJ4iX4E4GZCrKnduB1bbbZ1SE8Sh2sQ9jRQqnLnpyz9zN3pbNHdgzJXhfv3yiveTwVtqecprsr5A8",
  "key13": "5ph8pU8ZPDGhh4irBe3RDxcsAatgEgnYzyLkFgnpCPvnFJyo1WUkzhXHNo5aUfCwBHb7LncA3wFC92NHMhUda9tK",
  "key14": "5NPHNCb6KDL3THDJTYYKC5eXfhWYz2fSw7u2rtADpj5UrwYJaAXmUacdgDK1yLcLu9qpcNpEZ2bq2i7EtGYhEz7q",
  "key15": "3Lrk2rJwELZQ5NE2XdvNCX4BJf2e6DcmHnetcUpJPgLgeVnRTfarpikn9UgZK3HA9pTA8jVtbxY7Xa5b6HWWmxPa",
  "key16": "NjgpejPi237ygRMk9QmVcHZV4TkdjHh6bVigkFt3JWnnHtp2X9o5fpuFAEfY5HfBWRwTSfSaqMmgijPgjHxekz6",
  "key17": "5xkEHQP5sxcr7jUAkbpApaGUCHjhS6pRQToVmw3mixQBLwipg45vtHZQwrjYFuwFDFjRiy65ti3UbiGo5hAmBD3i",
  "key18": "5Brn4uTE5ZZQaBde9mtdfDEvy9NFsjz7uGUVD7SjsbJ4cL5HqybXNiBVhAt7Z4guQZpbTEJbECPrVxRHL4Qkqw6J",
  "key19": "dT8zWT2RqEe6vGnFcYi7qcmKv3neF3xriPMp9Pg3skFTV6aNdC5R39QoPH24Pjk99QsUMqM7vAYrvywwV29vryR",
  "key20": "3it7pWA4tmq2uV1ccicNpAsbAR2ezxNdnFWEXS2Vj95yMqzzXmzvWM7aDhnaXzmeWaPyWGaABZJXQGNNWb18m9Np",
  "key21": "47dWuj4vjeUJaCEQN8rEHY3w7Qbu648L7ZcKEWf3a252JgQfRDeshgDhciMDX9ip79PLZCT5336d2p7CzNX9G85k",
  "key22": "3cQb9niR7NXAsQBFRYEckMHnACBWTGpreVPPUVRYqTtDVobvTU2kQCySSUzpfuJGzy2b7WLi8EqCv9ngKNrMgJcD",
  "key23": "5RXy5x5FNvuFsxNf2vDE7RZhLPCb6YKASKPHR65fBRKSqFshHhSaczwJDsbQjGapWJ6x6vwddP7w92kVrn819wiS",
  "key24": "QZvwfP8WUq34EVsP1CGTWwYubHiAxJBgQhZA6TrYAviKbX2xfotgB1FQjv7NApZvDEpxUQgsaz8C8aVF1TN1iyp",
  "key25": "3XjttSRBLGWCD8ZC9ewkcicUq7yomj9U1KX8u6zfxVUbgLtfL7ugZcSAr1a6AcfVkd9UV6KZ1f2RZVdcCnRDSnz7",
  "key26": "CydNf1PoJz8b8iUeBLe1LC2iGwifvT57aeADE5FhHrVbBJJ6BeYRkswbqQHgPgBswrN5bAaaMUMTG8Gh837SyQR",
  "key27": "5iqr9vgpLSpFrVpSsLTH2NgLVs39uc3qb826XzLigH5pxPy242vATVCr85kSnB9nw8vtzg3ivHAfp8EFWXqRSq4U",
  "key28": "3syrPc5NTYt8g4Y7nEbWHiJrFc7NuY7LK8wKfSnNvU8BMCtW5GQvSfbxJxpRftusaDqjRPJAjQz4jeRDmM1hMERK",
  "key29": "2B4TASUmVueYMXCvz83UjUoJdB1E8od53ATKJm4MHwnxRxjBDwdHLxGXXbSXfMv8NUYY5VBt6f3bSJVx3JroSzmR",
  "key30": "4dVNkL3BdboUVERBu9RFrrFsVM6vcBwDZXymGV8RvbpPyJxSLr4AWfifQ1UQxoVhA2iL51qssATFAyNDqmMc7VaD",
  "key31": "j3E2No1ZzSE5yLKumWfPCRS27x79Byb6s8iTtZwpdPLkiTjKJANyKjrh1oGvP6HarokzW5shxq4WcRKwEwp9qWG",
  "key32": "5QvmMDDnygjmse3HNGzYm1zyYLCUjERFdFDqWMqWWpGkXV8hDM4s7ZQUNSQQZqZsKB9SfFQ7g3pFQ6RzFjH18tbN",
  "key33": "4UVbAq9qFKKGS265aUmo7GyAAqtDQiYfx4ArcfAXM88gY8cLxTB6BCFNxGbjfQqG81kC2P1TBr7A5GgxJHgqero2",
  "key34": "2SJ9aB6q3yv854q3ojqFMPdw7XYEbLx3opBsQezVujT1BekRwZ3LeqMqWP7oGMdTxuPaeZbosacFhqRpqyrVAdfg",
  "key35": "ryzBFwrFwwUVbbe542rYauRSRY7XDsp6uBP88Uo67dwMS1Un4ynvPf11KdnQPm35puQLGhiEbRSLAMEoQwFfdow",
  "key36": "2kQaLuRJWyaUYozARuznbUjN85dzjqvYewiVfTDbVGYdys9rHM5PWiGLvSVdssydXTF6RS4a6afqeqNcTmwxMZcN",
  "key37": "2BiiC3Dn22rEWFvzRiW5aHx8XwCT5JmVkGqVV192W5PtHPg8Jdf1FJgoG1uMnUyzYrxE9ngQWzQKqKNF2LTxabmR",
  "key38": "vfXha6pEyoeucg9g5ULCQ9QmPkukQLMJZ3ncR9vQTDPt17CUPBBdmu1ZUDaN2jdTQQTkuLX1o1XaySMQGW4FZ3H",
  "key39": "53nzr4drnveJcRz3mZdyVuTzkVFPGvpUHRnFiZhiVWXSooiKRynZucZKiA2QJ5rdRGn3tSh9x7CE6Ehd1KQg5a5o",
  "key40": "3pXHH8J2jwyFfeWbQzhBUCUnq3amjXxeMMqppHpe8rEfAmsnazXUW3mKVm5XuPcvjhnYUs8bUGCJKBBKj4wd6Xb3",
  "key41": "3YPBVy7ZFMp12LWRsFbb7DY4JeEVq4nLcrs311jYT3BeizebhZNaBkL5pErWUhkvSepHRUzPyg1Z9kRJSpcxkA9k",
  "key42": "3xHHm5bohqwtEZrotePVc8o4JWH1e5yFh6jyvAKaxZam2FhY9ei8NTCvo8EXpDp87Sw8PDWbRNWnomrFLqbRnMvw",
  "key43": "BPu83JCvWAXCrM9cuH2Li1YHrh7STRxeFmSdXBmr6vqugfzF8aV6nCYkRi1Xuh5jboPRq44TmhRAq18MHdso5Mp",
  "key44": "5FKnHirXQ7WDp8U7iXjAPsUcyoyqGnP42wp4Z57g3HdHXNkCPPe886Zw5gbK2uZ3f1iecfJMtqhmMtKarj1zM16b",
  "key45": "4MKnqtMfy2zKyUgEEsNnQ6nFwUhrnYdwqvQjh7R4qwrMwzHA4USBwgSsoymmYcrng8KXoxhkzRMo3pSp6yYL3JCz",
  "key46": "45U4VBqdgg1Ej1RwZcE7UyKNUnNy5jL3DFpD5ZG9AP3G5hug8bjF9uxKV3k8qrRySnFU2fr761pUqJ1SwzAkr9Z2",
  "key47": "2WSEvFfNhUzjjFC6XbV535SK5Cm942XTEcCb9vTH9FgobjWpG4hWsXdiL3CRKqhoX9NGBZbke17YvUTedZzm3KTi",
  "key48": "5dx6uAW1DQumQL4scJaByicKYWEGu8F4Kpra4BxCVp4WU6bxYvCYka1xxgevewHptuQb7SwCskmK5xi6Cq4txMyg",
  "key49": "3KtpEBvwiAkbTrHNyiJ8p2imZrmxQQFhLH3pCpVDPNPmh5FeabZXspY9HcCJA7QZijYCZ6HAYWNHXx6xSmPqwmuG"
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
