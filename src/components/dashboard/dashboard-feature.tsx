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
    "5LZQKxaHrAQ4tC4AfYeL6hJ7zni3izk9dQpZ6SsCCVTnu3Zd9UPUqhXR22egGo373vb3zUAsnjvhFRJSzNNTcpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJZAtFDHsBJEbwuV8NgdV4FNdG7AYGCGfUT98nMJ2DHfBRGLV2zGUk2UpacQbZWabDKAQuhXPViCM3R3Ah9Wzn4",
  "key1": "3MBgqJSHy1M84FJSXeXT2JFKGseiaV2uFpBvCVAPrg71DtjUFrLFcJFoeAY33k17mbd6Nmp58TRYiYSiJrEYJNqH",
  "key2": "4emGYAFmCsFgdq3QLjbSVqQR2X2Kajtye9ghXwUTx4ZA5gyEtdDftkKDh8G6eThmxTC9ae15xdbDHNRBbB8he4ne",
  "key3": "4xUSv3VntCa5qDzaVqxwV2Tmv2jTF677QaKhQYbx9djkFpuvw3uTqkWToaZEg6UevufN9XEuBovPhH7o9pbsyskB",
  "key4": "2s5yPxdwNck3c7pdqiL4K8aN1XYU4LQfpnw4waZBmDSz5zRBgafQ9aNT9NUBTw11547S9qmBKRtdxQT1Ra6iZtDe",
  "key5": "2AquesZMc5FaQVyB2Wbzi7tsMCNRyS9c7EXprLbptJZH9Fweg3jnSabmTeU8J186e8ZAJN7vWGAqJRtEEUpZgTte",
  "key6": "h8nNVKaw8aE94pDvEuMnsfgxdzdPZD8syL6j7g8ofWqW8y8kwjJF1qEuzoCKbAcfGS1LrMGxj9vBd8jFBdD4AHS",
  "key7": "4KX9e2JfDDpnAnDdwwxU2DDwfCBtc6SXdVXhT5gV7uog69F5aFAdtBS6ny9cu7ryqyYPywGTFYGgpxnVSQVGdfqo",
  "key8": "2xUDXYu4h3tJj4sTUWF9eNT7Jt5dy2LLCo1hWZrWTSgMk3hdh64LNjHepcECpYfbFmvgLrqwcZctGPFYxiTVv5FT",
  "key9": "27KNpaeSGGXFgnNSSjurC5MxLLKXRyrcNDdaLojtK3Vna1RXC41nhPJR159m3BL4H8Zpxh66UCk9Q8YdSiEXVtm9",
  "key10": "jfzWbrmSmV2w5B59KA3w8KBoTbsJ4ftnYBHnTesDFAm4etvVXqQGEmrMfRTNWJZqc9LmUQe64NqbHETFyPyau5M",
  "key11": "3UVPWSDL3QYHF2d2HdkVm2qRuJ73UdLYjM1VEdVm4rBSbkgYuxicThkNUf5XaeYzx2WCHChoLQZDn2SPvV52x3Zv",
  "key12": "2ehZJTzRWn2KAXGtwwfXTCjLz2nkuzaURVewmas6DhduxMjabhS5Qb76KefgnHhnainFAVeSXRVtx3Ru76WcyHXZ",
  "key13": "4FawhhgzCDf5vPoEgkNqaVgBe9SCVLTGPigxTfnWH1gHsMbmpmX7EPnWBYjSwkcakdF4PPBWcoqyXAXTEJBkbWn",
  "key14": "ZB8iobTUwMimsHeVk2FxVVN2SKjMNAZ1r6hkx3owRBa6DUN7Yd4bEwTpzsh7wmqWv3UBsofpiWpsLwfhr1U6yXh",
  "key15": "2vnFWJCacpXhBJNQ1X5kGgcU6q5BHp8uuKP8PBMu2Jq4CBEGydSc4tcYunn96U9smVYacDfpBntwjYYi1c9BZMhn",
  "key16": "5Mh47LXEH7Jdgf1Kcg1hYRRicXfXy4UyiP87UsGBDn6g8iZb7VBMpjBwDWN8JVaPfZYp2sxhUtVLcPXVD5Z5RmjF",
  "key17": "4psR9ThyycPBdr53C7L8VLoVtFrZVomPSroEG6tZeWU9CYfkKivN5AXH8Yx5sQEJjvV5Xq7nCf66DSTh6fo2RjRD",
  "key18": "3SHymcgYdAQUBsZErDo7A67By2FnUbXHsvHWd1WnGTEQDC2JakUhvYU8yq69MQS5Ywip1DPvWGR5Gx95Lz5mtZtm",
  "key19": "5KUnUigECSmRXWuTeEy7xEjKVz2wPWG1R7ZWoUUif8dqFQFjY1xn3JaxWBf7SMexgGTgP4xp4NekGL1xeFHmNMLt",
  "key20": "3PpvXDUdaAevHZCou5qPAn8co7S8U2FY9QakuifUjzo7mktVn8dKW4jua179FfWPxUx2x8hXdp7iF7h6nrC2j3Q5",
  "key21": "4y46JNB6oMGN3sCRCfia9v7QEmYqpxbBpN5wgKDPpvL2aEwwnLHURUYUTHjL9ECQcXZ9jBQCqcm2TDGs6cJQyeqt",
  "key22": "46c42CDg9kBESTH5HvvXQPxoNGP1hKN4hLe5HEJB3j9gxefLYBFM7zgJYZ4n8phZydPzzPfx6t7Pr3DHCbbRHjST",
  "key23": "3mg5fnw8oMhiBpzpKvNv1XRcPZ5grhqPYBuFj68eeqGCga2d2NoJ8vNv5zYJHdNssRBTDeEmXzpKPqRiSGFjQc8M",
  "key24": "3fyEScAy2rN6CijHpKbeJE1cKskC5ptDg9JmNPqrJ1WLspmRe1qPuYxn7HWdkA6ekaz6Ghy7B4rHkzhVFHtS6bhB",
  "key25": "2izjKssnMnREX3vrTJ89xoBYnfRLJCzkrnjFbTMMcVR2ouW6cucMMo5VbRNiNSwdvVzNAfASbin5btcQJxEbME14",
  "key26": "3y1sjBeQJtgLjYnc7zTHSYqJtWbUTEECnjQFJrFqD83JnTMnyK7QXXmoQakiQpMDXuTdcueMYRBzDEg9F7yHBh5T",
  "key27": "9V9N5wNt4jWJXCd7SSe1ctvi57wavJYGseuQGrLHoikMvDrMFzkqagXzwNp17uM8DhQpPmvzNpR29wU4BoGTwtz",
  "key28": "5VV9Kbeq2Qm3LLBa71C42Suvf94ytPr5tWYUzq2RDKZALRQTthbtacUDE4HFwtubn3Dwf2zXRgn5RSoBMEKGcgkx",
  "key29": "3QNncMbAGg4k2Hg2mPWWwNRef1kwACucduTvZfH77RcXtNR7SVJcsH4mkP9Y7wyG82XWZsthfgNdjuwT2ZkJuENQ",
  "key30": "2nmBMLPGbvUBi4BDLMhQizH9ZJrLbvUthuQuEtjLyqA71jbpJjFUD1M4fQ7EtGWABr98jdJKazeJ3NUoCU3ubPNa",
  "key31": "3bEBofeXx6vTAWEjUPuHr46opjryZgU6FeUGzLfD41uvCoxD42cdMGK2cnyursDgNghYGbtHqazPd5srTY81oDJQ",
  "key32": "3Dok9vbYPyjSew2UR2hg3PnEVq8EjzwuMLGfNb46aStrkZuTFNePzod7BA5c3NDzkG3KS225yWSDUqpQRVNb8GY6",
  "key33": "3Md85drvrVA3pgYtfED1CxpcEfukQ3SU6fLgxszp1UU2jWmcpw73nGxdU8pjZN4qnJ7fAZu5jsSwpw94QCh74o1N",
  "key34": "w7gNrNXgvJ19EinAAAPFyK3RfeyRfSnuqh73xoDCPvekgG6WPA8NQ8ycBLLPpY3ZqDPTgUF9zs7xViQ4QgwKqQt",
  "key35": "5jFJmV12DqeD1hsSVHrh2rwgY4zghmuV4XKG3mz26gsVwsm8EB91eCki21UizonGVM9HtfNxafKLnKcRAtaqscz9",
  "key36": "2es5UvFitQS6JHgz5VPJ4miFeFWzNRBFeQgw7TNPDiuEwJYRUibhkXpSsWXko7K95c1aX1C9CoatgV1Vs2HaM4Z6",
  "key37": "2tt3KkRHHSohtVqzj3Aue6fa7GxKuvHzhcJyhUPgNLEtTQJEd669VTBPpGshwkaEh2zopbq9UpQHPAqqAD6StEJW",
  "key38": "24cdx5ZTMF9wePSx8rcDig7YSqZZfW34gSfVSuo39Lmks4ugcCAtAcaoGSKPQw91FhFX4ZpNMUmHBDBeKKzmVAGH",
  "key39": "4RHtxVMmfcJL63U7oDCj69BGaYh9Y7Bzy8k2HpQiLz5u3YBpkoMLLGx9HGGGijRcmzwVttjRMPmvqEZ9sUwZd3TT",
  "key40": "5QK34QU3ikfttm9kDwFiw6msNT8mF27XRUiccgx7hPq41NQBHv3AbeFQr8uxNbAtikkte9qfBgyBpmL1m1thettA",
  "key41": "5bBNLvmzaHh1n7yUCFcrKD5cRpqBV2jLWRk5Gana7mJBgbbRNKv2LV14r8nB23JYygXbaL5RmsEWmR6MZq22KiG2",
  "key42": "5drD5nU4zjScWAJ7LUGR156WhAMxQwbSNyrPW5VzKv7BUm55A7mavAehTQ32M1XhYbWwuYgYT6RWniQTSwNHFt2A",
  "key43": "4fts8hUCSUw6Qu8ppNmiCt4zZHvoziYkaHbPVVJ7ToxPxJshfT4V9ofbFyexgGL74TfqjmvVgCbSBH66CVHcV8t8",
  "key44": "32Hf5Wohp4Q26cVfBBSKq88JjADGXpjSJPBiZfgN5HwC49kDcBLEjAcj3FULF6CSPa4kKf9VgYrHE5oukCQa8thd",
  "key45": "5b9udERcjM1uKRRv2AqxqxpMGCaAzyx6Juhu8EbPAfUr1MktCnLKe2WmeBunkowdcLhbW5sor9LCxbcZacFs35Z6",
  "key46": "3nmKdGbThzFaxAB7BDSRCrPmw6ZouPUanX4XzGofHvGW2i9FM4Qj3qu7TSVqZK7Togw6HE6ghUgo6S2aJi58AFyY",
  "key47": "Eeq9pHM7a1Jzmrop8MXAV6XfNNnpPCygLWCv6MBZCyM8ziCWPNCjarN4B8xTF2xaGZBL5xGeEt6CDzk58xfkKdw",
  "key48": "5EcLpzpQ3p7hCtwGvkrZrVb3eSiCM39rfucUGNWDQPzyLrahpu571XX8z9VWCgZFiX6U3oYNU9K7Dwgu9GHTm1ZM",
  "key49": "5wYfEXuZs1xWcx9YWZ8bAeKwYtQ4PSjhEDQBdpGZT7sA83sfu5Z93ErVYChrPJcgx2urig2EKMKUMMY4GbLce9ux"
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
