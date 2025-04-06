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
    "4Q13VUJ5gNH9zDeKCbZh6N8EaVaVedAAnVtkHqeKMESxVcxKfm8ddKRHgkjwc7rwAYeYVXPwf3a8pBhcP2M2femQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599W9XwrU3U5tSXBqJNqbsBJWiQKDh82AjWqLmqDKYJXHh6bD8NYS7oGD6pr2noW8jfuDKKJRcq6EeF4AoBAguRC",
  "key1": "3HRX7XrcEzzMdhSJ9D4j4H2V92SiVdKxyKEv1cuvdbDm3xAF97M6MBZxm5fweYDW5wvQ6rxmNYgPa5TGqFDTnwgs",
  "key2": "48CzuNnsrotrD11cnzEu5vThpVNTosg7fbEPkUJ5R9v8Wxfgf2mNCKqDzMhZR2NyN3DZwu4pAdVjNzvEnqkEtuHm",
  "key3": "5JnYjJcCQ8b8kqvLtwJ4iu8TAkRAu81iC5qTJe42EkWVAmwiDzMiQQTXZUm342f4sX41VzCdDh2DWcFuNHMhyxK8",
  "key4": "mX3pJ9stXK18HpkkfEq7B3t7BkK1nqrE8xjexbJAayX69HiP9myyVjhLbRvPXz4JNGd8Jnzhok7xf4N23reQSgQ",
  "key5": "3U8LxKDjGxcE8Fsktaz7QDnV2HNBoZzu9Fs893tqWLsEL4tyRRGUMtjdzgZS7ynrEkx7RDQJAdAQXs6Y46YNHXSk",
  "key6": "2cWFMY6KHC7QWrk3rZ3z8HancfVinoyYmCx3UvHAyRQMkSM29mztLcV5VgT5t6rtgFho1UEdGd6scRoxiMYJff38",
  "key7": "cLSbHthUNghkUgMbBqTPVntzfXrv45JbwLzADTGzBrPyXED2nSsNmpFCWHCieZGESKx7n9dRxe6ZdVBbnJ2GYEf",
  "key8": "4dLSLmiojPcgGsGZkgBpDXPrRNBtgCYhgtpi2HM5oh2hjdSdZrQfGwTFBVWdMzuPzyFVaQLBETW3nKShkWns7JCq",
  "key9": "3QyufeZjLz2SFnuezdmGLdAY9Y2YupAUM9yR6bnECq5Cp3RGQNUzRiLMMJ7XNf8zoGT9h3xjjqjPjRC3bwCEDRMk",
  "key10": "5SRWKS4xrfokXPazVBp6gnyDCveMMEzuEVmUS4f4r4qSbfypiZH2eySawxSbamtywgmVdBdXKLcdUTTSPQHtRkKj",
  "key11": "67aj1Zh5QRTrZsdtoMvbGQzR77MN45fR33dyYWnXus2BS3NX6KEasSmERffRxYpdRdtTFPYH9eka362BkXWfUHp8",
  "key12": "2d91dC98JcvJeDA19ALPuvpoV4Prh4xPgfD1u6cwBYB1Q4MGXnUxcctfcpMHN1m2yQM6EECzouYfemT6KSRttXHm",
  "key13": "4zWL1AFRnuoghNYJ1TJ8Xdg9MA1j24woznSZ8UXocHuaAiWUQhdp8i7FMMd7Hr8TrAY5XXXkEyEg5QPjwgMTpKWQ",
  "key14": "5Pw4SuYukNeT7o9ZozSkPdnJehWc5E8p5JzpQoc4Gs9uLAwJ5m9kg9VyEaPEMKaWSpcRsyTQoLqNsibnhr1j4TWN",
  "key15": "nfUMNhFEPoPVeNvfcauBDN7Mnz4QQC4Gp5a3JKJmn9kXn75nBBajVj16qV4tPkG6WFwoMB5yXGQ5VZnHCc8mQAE",
  "key16": "3HNhtHZGJUNns6hJaZrASBvqQCfYoWK9JsZP1AYUb8NRrj55pyDCVjC2jTTicMMCQf6VwTWaggk8aDXR1wnxStEP",
  "key17": "2M7yjne8CGbSQG16XsaDF4L1WNen4Vkh8Z64Uch3PAgqSh4qxpbAvjkY429QEam8VpdQkcWacmi2tzxdS4G66RLD",
  "key18": "5gfHjNkjwzioPSkRDCJEZeZnB3z4pUbkr4bsRSSg4sVjbPrTbfT6VFGMCstsuW9bnR2zPYR1rrNH2R1rT3LCzKMH",
  "key19": "QrYqnvpW1vnLS1vxzS3pgqENyGm5n9J2t7S87eWihXQi3WJnJ2vM8t182yrmKwVFeT63e3PmdGseDNQ1L1p3BR4",
  "key20": "2fjAcwcPqPE4FxHouQXDGHpXL1mHZ4gat9X97XxKc8LZv4dfhaPLPzvZHNLjTRhbTZ3qGPo43oVy1yxJytWszXXh",
  "key21": "JYAW7jTkRNLQHWWizpLoGd45LGjnrFFWXRtdfYcScCUCNFznDXv5weJqyTcxEc83dYtfPUSZnd9YfLaKV6T9Ht9",
  "key22": "4ypbYcF2dsaXqaVubvfAtDtyW2Hg5CbTs6iE29fH6uN8YJrVfuFY7Nd4i7qCbAG1mhfTbURj3wnkLHHqLpPfuiBk",
  "key23": "4BwyUoqHKBTtzFnmEyKCFJ9ZMJvmKtMbdLFL75jDRbBHvf44CssMBnmGnfC3XtuDvxLBv7id5cJ5WRs9erMnrTa3",
  "key24": "5hPZvqXJjhYEGXSKWoyBmg1JCRhRScLzYoeFmiQm5e16kSCQ4fqpzbVcDRdTRLyabpvqJPrBhH1hiyZZiUkZMaqR",
  "key25": "3u92DmUFRAsGdxeYJUB3gUii6MVVffvaZj9aBV1zkpqiBTrLigTxqhWsGiusX1pyYWs23xMLyuEB8GyUUVPtUngV",
  "key26": "32sD2D9hGC8TgoBShu23s2y5XhqZyzTmk7BZLgUUpHBM7pBgbo9zSGtiuQvMSiBbUz6ZGMC2cui1jY6QmaczroMT",
  "key27": "3GJpfuAsBXk7faKhaMpq4tG47o85pShwRyVjCtD522BpWjeV5CvLS3X7Az5hRxcE2TCHV95ugsTFuFkWD8qjZvsq",
  "key28": "4Mjw2UACZmx7j7vMRsfgpnAAvaKLsyAw7DfUyfT5npRQQWEehchiWu9pp6yLZ7Uu8XjoaQgm6JNZwifoEQiNJ92s",
  "key29": "ZXryEorTNrb5ei1v1Tzqk778zX3GvwmRMPQ42vZPuQ5uSJiHUK3MSAd64KgNRXNfrVnHRyUm2bmwiEAq7uhRpEr",
  "key30": "3y6VBMCFUTngEbg9WwBEnEDpgwncDsX8LFHE6zfnV7cGgUV6VcNGrnchiDZVMZEjjK4CzU6qTgsL9vjomVyhQeaR",
  "key31": "b9BnMt7kQ6G4uNCRDEtCfF1WN9mhDh4avzXb3679dPKLznnaywNtJVA7uKcGTivhQo76NZr8Js9KGGarCm8yYzx",
  "key32": "4tjHvNZ1hFU6CMKFr9PuF9F2xiTEhnUnHXrA16T1BAT5nRggsUEaPvBP518g7CmfaBZbvNTxeQtfSEisiybihyji",
  "key33": "5FgrrZhDAu4gxEBp8vrza1DoMTonrVoYHPXWeBiaJ9RjVUFq9NqfVY9ftwCuLRkd6aAHdXE2LG9WTatqtUPBX3Z2",
  "key34": "21kzNK4DqPgPa8YFTUdgZkqnULYJSNAK4kkioWnXang925jYw77DcvNfe7rAxxNHDvY6SvCXvYh1onjFVpzV4vtY",
  "key35": "CTFR88uUs9g5sh5JbbDSFps3su6UuxnyrdHF8dJmQd5eQUeQuqV66T2VqDbfYUHnPiDDz3j99uGuq5CYyiKfkEw",
  "key36": "5An11r2pkvt7bzv6n65bVuWyBzVKyGinZxwsrUkVLK3LeDE2VTM1zB7gRtAqU6a8KYMnryozgJNjsBFRPpsnJ3Vt",
  "key37": "3WnfGG1uEtcEmiMph9NFNP9DVW4uv1ujSgjMhtATDD5KsLUo2ZbbkztnxNPHaqw6A1EDEESNCu6U8xNRYvRJdDy6",
  "key38": "anBGEKqCKZaffhe1sw96FzkBX1UuUuegfhpfVU66ZEZ7AaZQrLgF15Kpehb3E7mP6PcE6dLzzpmVaqjeGYnVxmv",
  "key39": "2jXrHYed87HAYWVN6WiRcx67gwjcHTzUYTmuHG5Tyg7zbd7FvZFw1mwX4yGdeLFpwkWot5C4DettK4FasPomKZn7",
  "key40": "4suVus4k2pnRHFNrWY6B7GfVhHzRw7gvoV4Dv5jYiGjen8jEU24Ysn39TBF2P6LmfhotnMX8gvWjdAYfQZESbdvy",
  "key41": "5DrbKDaiGDCMX9Lx9nqohx8goLK2TpVLvLhCEP5WTYRZqDKmBHFQXqbbf2F4sNqQFA7Gaorhg9N6Qy22SLnrYGU",
  "key42": "5kFt5b94yLU72zLG9MiWvLz4UpXkCDDhq5WUb39A8L1UXp19xwDrGnbuFmyQEzUM6EwA1XFtj7KfVb4LtnuAUurh"
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
