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
    "24rBizVNgGJU8m1b1aQnmstW55UKekorU8RJfKEpdrjCcwd84BgE8wWY7tGdYHExkFUEfnanMyd4eDMhzbrcppyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2db2HsPHFTP417PS5S9j9S3m4yEQokxdMYqi3yafaMyG8TTYmV3L68RrDibmxPGBHUdJnLL5uMMhvasEiSfcSZkQ",
  "key1": "4CgtWoqV3UKKaT5Yd9HhZWUNuzRSWbCYTXzu3rFqbFZJYrAi6xBf2UrBTX4ueGhdm9NqaWy4AgKEjSBvZMz2TuVZ",
  "key2": "5zm95XL6C8UYRU3YXoTkZtj1Cke1xNgiE7TVKq2QkF2GJURBYE538GJ5TCQUJECfqQiF5mdXxthcSBuWmjZ72Bad",
  "key3": "3g6kxigqXN8fE2JUZkH86hBpaJi5rcdgog2hmEjgEg5w8NdaQK3sNi4vZW6FHUwPzxBunQmp7P3xjji6orjDxLi6",
  "key4": "44VNrKSfABWAiRPgbfZbn9krytHFcHPY1rMaZuURYbZiCKVRft3n14DA9CTReBpNWb2BQTzmY6budu848Z1QPhEW",
  "key5": "376TdWkKsBFdhqwycntrQyqa8XZZFuC5aTvuLZXkugi9FZjG8sRaa8HEsefExdSapmvit3pzn54HKwdYhTzwTtc6",
  "key6": "3gnTvzgAfdr9qgPYLNmL1Yfy5kDjaHJh1SQngZop5boQZodhE9nhRDQEKC8QBTWeE1KirDyBU5KnyZhiefJUnQqT",
  "key7": "65Gt8vsX6EKFkmeoN1L6Bh2vJ99hCB9iA1QPWKtGamVVkiMeZ2GBosBy4NboZ6TiSN33SAibXDJB4Xds3BSugo5u",
  "key8": "367Du4HsEiHxwAsRpoCeJiGLmTFYf5b7xdoGtcHhLzmhiWemcz4pijkR5Y6wdgLiQJiFeQf3CFBJKBDx5ACZavtq",
  "key9": "3TF51duCAPjk1Em4Me93cz6KFQFsybqgHbNZcdaV99LE5HrjWpDs4AQJoYSpe2pXcQ7QqQh9gK2889Y6FqGdDEMg",
  "key10": "25JZi1EuLKdX2SPcVTNf1pNFXygxAVoHEZA9yzR5v1MQ3UxXdHgDNRBqkjKBTAAs7wSmQMcxh8Vj9TbaNSow8Etq",
  "key11": "JAGf6sQRBEG2zHbEcML8GzHHzTJYCiEGbkK9fTFo1JKAmQfQxEhbYUSNbFCZpZ62wKJ1UQ4gQukJtMGf7HSUZzs",
  "key12": "2uBTeRae36TRBLvPFnLQa5R6xjgMqoVjpq8HPQ6eRjdsLpqEuzNL5fHiyLSSriKEe1QXg6db92uQnMJntb8Egjta",
  "key13": "4uTAiyZEUYQydBEmdmUbYqmoRQkQzbAycp5JXBY5pTS3KD5KMpGuyK8na4ZVB1ZaRknFTcZyWS61ZGenmBtzThdk",
  "key14": "2VTHxSk3xu59j4rH8my7C6yaQLVViiureSo8Ha3DTMFdBVFm6jY5RY1bQZmGGTxL5cR96NVG1DbeX4UgDuCQC9oZ",
  "key15": "2ZUiiQ8X9HBVnZffb5pGjmwBfCCXUndt4qmHYuV2ZMbADinYQph8BKemWYSdQaUgJeJ4paeCWmcvFgMVPQxLzw5y",
  "key16": "GEFPmEFPyaTvEEjinUtkbZxzq38ip6CwSLpjqFepQFbekB5tS5NsZFnyGAmQMFH3atT4h96ieDoYTkkuc3pjr67",
  "key17": "3QRBLSB8AFh7ctaVoU1kwXEK9Qgr69B1TaxT4na6ML67huSK1tfP2dRhJw8Z5AufAzQgZ45bDkdFwmZuxhGVigyn",
  "key18": "4mgnkzzZyyKetKtAx9q6NU8zun3cKEhCY7ACLQBkKhcqg6ZfnEkJANEQzbanbTnAKBMQdXm2GjvXTt77MHXd1Meb",
  "key19": "sxHSAuEB8k3NvijvjuosffuLzTEb86F375ph5y1UJvqddNZqSknVcUtxEbKDWPWTFFPbEkKwapSmivYrsbmGfxE",
  "key20": "3aVwUj25PKVuVW7QBbxeb7TddgxKmGwmvz7BSJ4jrKRwd9FgLmt5qXXgn8P3XTVQ4aYA73Vu5aqxnDvk7zezV4BJ",
  "key21": "4HLiM7RjdebrbDLLKusBy2abHVHwnZd42qZCwtisoH94BCGqWBBR7tMAs73zzv4bV88ACeN8gHMRrt6Fq96pT96e",
  "key22": "2PNxco6A1MFvXpkSLbzGFx6aU6r3NSqpYFvb2YKPD6vz6E6niTDZwuib4GUZkXvEhZhkzeU5JkfKFAPz6cKD747w",
  "key23": "5sxtnkXhLLzRSqENGxEh2MGD9jshA6S8tFR3YxuCu1zKMoyT3z2hz5BEHgn5M1xHfbnwST5QmxEfooe1wmQLUBHm",
  "key24": "67GCX61KWjd5FqVwTN1K63WSV8dHHSZwr5XyBC7AVYHVotSMaSVi5XqqHNB943bYmDaRDRqABvGhB7nKQJJWsVpX",
  "key25": "5fNRVgc5RpS4pdt5kkoVHe9kqE8KecZpWrDnK9MQiXsCGytHtkojFLSTSUYY4qwcLMj3SreXWzWmBVXvftMja424",
  "key26": "4fLTcWHoaFjR1m4Wp8LT6J9a2bdUg36Ui6hwnBdjRhhQ4kF7Qyet8YvDUFiQ1AGZSzhJA8Gx7G21XgwzKk6VC1z4",
  "key27": "3rZXSMymJC5NJrTu39ADwQ6ocCTVvx1QM2Drcxos9RDbHNSGzwf7BZnRdZNLzuCAjc1BXDsC4AA1eSXRAHKkincT",
  "key28": "QMKuMHV1JdA2cJQuPcBYCsPyoY51ykdjmLQi5JKwbvsfHusG3uTEvUurjJeRpxmcUP6ceoA5fKPqHwchm9u4h1o",
  "key29": "3RLYLb5AFSLSsJfx4vT5eTvbEkSCjzSsJ6zavUYYM3ZT8jRrwMLPH4VDudf2GUdnp27buFqnGQ9XHhy81uUsErGQ",
  "key30": "4ZqjG3cDU4i49Uih8ewhBPkYGpxYcSUgotRbA2WN4inS28LeXaebgjAheBuSVNUE2G1R4JsrCtgx1pADzjQBSxfm",
  "key31": "61rgrz2WMcA8ymdXEpBdeTcAu1FF5K9HZBA9C6E5pYu6jHkhyPiLLaEJjuLffvbo4bchbHL5RF9mBMdBNo6Wphbm",
  "key32": "2NhyCffoXbuXqXjDA8V1ynSxN8p6Aiph8r4UQhE3DPq7yvXmVa9tzLs6zkt33n7W9dEqQtQ1kCpVeGwr56XQohrP",
  "key33": "43QXDFJL3hBmtEqhQ1x6pChroFbFMC2HiAQSqqd9YGJjxnbefnfG8WMjECasn6AmeRGJTagDW9TYRwLTsYKBzZDo",
  "key34": "33akaigdTf3Z4z7B5CN317HWR4bXTCUwbeexpQoyF9gpuFRh529XdSm4cFLcWf7u5kMXUZAEBkZdJyd7HcHtQFK7",
  "key35": "5jGTzR8YNchzMjUikMSLKFokEKifpMNsRszvgNoDqxDnXWRh3BYutdKcxaR4pLV812QuAKc5WMCx83GhafZYS1cx",
  "key36": "3rUszVwDNBBcJnEtTStRhiHNDv83UDgviAsmYCVcz6riDgHjWFadEGrWpHzu7JtK6o3EQxKwcvGt1KDu5TGBVuGy",
  "key37": "5eWvuEkj9gC9NRSprd2ihA83kwmiQZ5NzJpJDc53t72rMLHtbXiZ3HTGemGTsMzHw8edPDHKCrHcecXcfPonxSEr",
  "key38": "3mvPUbL4YrWteMcm7ZmZLYckLe9Wc2gCZwsnuRcbacMR6K44zhLYiedksoEJidpKiJJQ4bi8akpM9DhARnJt7A4v",
  "key39": "4MDsmbqSQZwUERXwsHiiSGFNjBdf3NpA2VobLNvrkwe7fphYYQnidYQdbHKCPGAo9RZGcbd4J8JNLx4jC4ugt2FJ",
  "key40": "67YzQbpUi9FVn8ZdioWiKes7Vje2DdkBw8pwNPeL42YeKmZbZDjjk3YGaGS59jetLYxYt6uGE2xejo6fjuk1pBZ3",
  "key41": "51GAEYiqbdDi5Gy7QwF7G766EseimUYFzN9kaSFB6tWYYp5fSh9Jv9zfr6qsa6evt6Jv69wjYsULkTouK4qS7UUu",
  "key42": "34ahbU5CiJv1gcdkD83AAZSRt6n7fkoMpx2i5Bxjxjxxsi92hgaNZaP9KsRDezqZToviZyBSAPmEPBNiR2huVm4H"
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
