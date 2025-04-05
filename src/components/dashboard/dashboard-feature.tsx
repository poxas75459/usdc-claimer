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
    "2bcnPbu8xfhtttEzYvNTEXTvrtoNh9wqpHpjxEALrcA1rSmXpqyqsjjhHLvGSKLFtY6ym5NCyPX7jJuGaV5yqz9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqRTiDUzJXgyZsETyDJGkDN3YwfcgMdLwGseHrJujiv8KQcQiBHwNmYdSAniNcEco5vfGnYz2nSDQtfN1isg8oU",
  "key1": "39YoML2w6vpkUh9YrkqSe45rm4s6BK2BUMhGtXmNhmBmGmWtGGwmghZMdNjhBroREBssLGC7HcB4bR1C2YNsLRnh",
  "key2": "5xZ7GnmQXa5ZrxpMfaqpz7C7s43qT7DQkWmJbWfr4KkmRCsHznUftL1LMGLeyMAjiLd6uwfeNJc6W2xsdK5XY5AM",
  "key3": "2TK8Un73AEFHPf2dpSLUx6uyVLjgUT3m4Fpi1PrL9zjtk9ZSfvTme5h87nfDMVae2zdDbzuTrk7r3rjwUUNc1Ga",
  "key4": "21ptwQJtVp64dKA6Nzj1FDJLVXHwZLBrfU9DtRF9C5aLR3ZgNZbQo6eVxrssxXycYTTmvVikyEufnBHShKeUvJgs",
  "key5": "ctvDgAnUMDpgFa22K1o6AZfMQn3YMMYevTsAKsyHChTYoQdrE2qgHHvcZrDGsgVtqEiVcwtZ1Qr8kosVau2fsSa",
  "key6": "83c254bRE2FwJxasjmfAG2Dd2HUSiLuMmSQZRC22S1A7YLtFwocsABfTzYmqECFDrwcjLKK3FwGz1NpuHYsAodQ",
  "key7": "3KZpUhqpmSLbB2eCf2yHD6vp3LeNGQ4c2xrRHKm6jWjGdLV65pHiYCvJjdwxExTdLp27HcM5FdsEfYnNQ6ZX65nC",
  "key8": "2YGeKq9pTNuYXhFjrxEX73SQDhRk5aMF88nWot8Q539MjPM1Vx6sMzFZuzrU6HjDyg6oPFriFvz9ETM6EW2WHu7t",
  "key9": "2ZDbWER3WSdqnursSUfQ6N759884Zq7YrFC7EUYd2gLJyjz5vMmitFTH3dWPd4K5RJmWHcAWmrXqphsC4kQUoPL",
  "key10": "3BE26yyeAjnRFyRf1NGgUF19d8Wf2KwofPDcHekUCXuFnkwUDjmjo1FHgbfxdj1e6Y2pyh2Eu24Xjp3utP4rJCCR",
  "key11": "3DiQK3uGziVLVhTyMHct9aveSz5685Y56eMSoHF3ip1LRADmFafuZhFTYHfVmhN5K1XTJ1tKDMZi2KPLgxskjAjJ",
  "key12": "3WU5rspWx1pNgFFZifhfL2aicFFt6ULfnWqbQEQQFXFzap4tBJ6ghTFo1pDhNEhGkVvXDyGynZyD7wyj2DmCzAtx",
  "key13": "4k7CsyZe2QsiXvZ9AG5C5oKupQMsByeCShKTcR78kaZdnDzRBjr5tMwecszeZiWFRaiUvMVcY1aXum1x5VaWSUvt",
  "key14": "3oUye6f24TyhW5tJ9L4Mn5drfYDvN2eQg7cWTmpVwUMwNqKTecioGu9H5G8wqmQ4vv9mfFYgYyqFmHDCyEionU7k",
  "key15": "2SoftVJaGBJ4ABnHBWZnBZDNx7iHGMFa4AAcEythnnZaJpk8wyKR4D4VKNgitjULHEHt9aB3gAA7QJHX4n6xVDCm",
  "key16": "SSa96YAUo34rHRKoB8uvb7kk8DcPbwAz7jBC5uBJYTxGe1BtnrGrrLW58FCDb3As9V8abkeKjd54YMJuWAras2G",
  "key17": "5K2US1L5Tm269gU1YRtFrjjvHq3y9xbgTkHhJWnRgC2SiK8nchzaSw8t93oG1Dx9jrhyKdMm4AdVRSZpGYDWkKpQ",
  "key18": "5Y8kpKTgHyqUf86xPTGGuSkze5tMmdiRXWFDgBpSWAytSFrkvProbgMFKKDFQ6nfiamQvvZ8NVxsHsGKjZq7kJSQ",
  "key19": "vDWpHSwZQ91RGHf7C5NwXsbWJZK8zewE8Dq3hVWavwTkNqgik2RYmgTbb4wSdkmSy5rMVFSzwd3q4Kftck1sYdE",
  "key20": "3Xje2uc3jTSNSTLC8d1WYcnejeL4Dr3TRgQsgyRHZpjNfwYMnzYTcaiGiNRZuNEkRQK6FAsrWUuTjJQtzfb5jXGf",
  "key21": "rFHgdTV6fHCVUC5E5sNQqj5B5DL82Mxpe1npzEUp3J2F6j4gKCcTrvuFqKkmCcx6VvL5tpvWFHyUxTRkXtBwiUm",
  "key22": "3RGhAcm5Xp6AxnxePUZD65K1H1joWKgTzsQ8ihwF4wiwvcKdZyjpN8jWgwRnaUD6KNQ7RAxXL577Gk5aMAyKcJQG",
  "key23": "4Xcp9F2QDCgTai9Cmiq55V7mfrr3Kb5VAfWrvgTWaisopK9iCZiKSXrh82exEKuFBNJPePHBx8qLm2WunLhoFzB5",
  "key24": "4fQiPT4ERnDcPVTr9Er2CQpDn1P7keMSMxZyj8oaiNtY7M4FKAvWLhr2twhRSpvk6kDfmLVmtNqCnPci6HmnpPpX",
  "key25": "Kx71w7txaz1p13YAA4gjqsigxK8V4XyYE6ZqTUitttbQx9V1P9BV8E1zgrh8NFu6rM5UV2UFqQ9EfdBq3f3VpnT",
  "key26": "3iSuxJxjWA6GdzH68RqxEd2vUtt4YVn77iWcKU19iuDHPW9U4AgAQZjA5Yn8HWTzvwGKv2dURMXqhEwnGMZtjWnQ",
  "key27": "2sYM91BJY5J5SC1c3zpXLtmmHdGVHDwbv6zd3zR66WG2xX5k6BAst5R2hHj8e7DTDDjCTJoptkX7aHeUDtkAGZrS",
  "key28": "2V1CgRxDeNjLnDyyeRC5xgs7k5nxsAvMjnVs3X7GdK6xh9ADGXozTTea9n7enYqMrNcwarXCKbKjio3SAvcfY9BB",
  "key29": "3jeSZt1fKTh1WnSndZNeKdGMrCtG3wz6xFk27pLtuLzE85Zm8VRWx3ZjJeAnn3gY499eckCap3R8CUaBXHj1y5hk",
  "key30": "25MtMauMwbazdSpaMbqpW6Vrrx7KUzmcqV4xi46HydQtskCH5mQga873zxhG9dqKypJDky6cGotzKixXvi8uV4EB",
  "key31": "2fSsopKzhvUdW1mgehLaThQEP2jn8bKEWPKGB3RJJrT39P7sKoGCzDZAtS5zZnUt7kLekypAfLAXqiwJ28UZtVsd",
  "key32": "41PACfWvUo24ZbesA5CWaAxiWm57weok15Ltq9f4UGevaS7N8RXAbT8rzwpB7y6BgdH4PjprF3apJCeYCTieBYa1",
  "key33": "mkNhhH6cRwfHbSFRhtfzKzWP383xVQE1GjZrurJ9hfLYmU4ByTZuBd4Ddah11QaHnh26BGztAaTfVusy9PrvECM",
  "key34": "abFgn4bJmDtwovQDpdDRyTZuiheNwuTxCY4kD2jQVt6w1eAT4rWsYEBJNrwahAPAeLBL1bN2JpbVozLyduaWrBJ",
  "key35": "4TRu2VX13bZzLE1E6WFQr4YpVzQhdPkGGGjWA8tRq2b8JNaYtuETcLTmxP6DLxXEAkYCjECFxokWFuFFinsw6Rci",
  "key36": "2tBShqTcYfTixb82kRjXBoCViK97QQxp89v2totaaJyvwSCXc6XxvKytxcQH7gyhPUrtSZM8avZ1Qs7YzRbxXSMs",
  "key37": "52XZPgVqgqFGfnSFXkx8FyTR7VwwpDSm7RSFJ7Unujb6Tfx7JoFNRwCRsauVqt5Gf6QAwcrqhcoLTQppA6hvZReS",
  "key38": "3LP52dDGvgTT5ThW22WiHygzFDdENqkrYyiPnBPRZ3jfZGcRrptKQRNZfAvRGy6j3ztC5VyQAXrvAFbwPkTPmkG3",
  "key39": "fbJov6Q5AaWWD67oEcjx25cBRNe2wDMsKHD9Sj5Yyrdjs9LzczMghfHTTeC3w3DKWXxjeEpsUeYuHJvQLtdcTwa",
  "key40": "4zrSebpzWJwr9YH2xBpBgyUW9r1rnUcsaYbZMJPkT14wnYbus2AjyGkgswQ14Awj7R7RLiWv5dPMcaTpnVRBHVML",
  "key41": "3LzoLQNRsRBFgKe4CCGUn6mmSqGsQHed47LEDrBXmgBWMKP59U7VxZRRYj5T4GTr27CPGHBHHAxy9WeSyfdTpojS",
  "key42": "4PbsS5YdDVhbnTCwrU8NmT2BsahS4RTbhtVcahQqnczLvDt8cCoSBCpgSBWR8AERD3eTvd2DgNxHnojPKPnbvDSu",
  "key43": "9R4NuH2vadNjgjD5qsG11XMgNHoQDwZiYvqsGB4yHtCKwy9j2X9m8utyK9bT4TkyPc3bBw6svUULpdGbNLRdAk7",
  "key44": "irG7cefVGMhdXPkkWqxuZeMiDAAg4sLRuEK1PwPnkr16C8xHJ86pcHBe9BZVm7qfevT7VwYdSazYf1yPsTVr5kX",
  "key45": "42dtbA5oLUhLTzUSnZFPZQDvdePtr3py1XyARmBbX4dQLt66tnPGk2kz7Vse74tUx8MyaBfvJCvJjde6PVJChSFT",
  "key46": "Ew9VeMdVNfhpx9nxNpWM6x1QjHRNQqQAUU59mGHB7G5S9myoRQy9PhhEy7QwFeBL5qrywuun4QbCf77njAXSHC7",
  "key47": "2uguatz59aHjcsWwNDBrGSxpVJPDQXet5JAu1UoQFELE5B5vessqchUiwm3FRf3jnDYD6gwf1UWjSrZT6gn8dotU",
  "key48": "XPgTkZSF42ZdKA8iBWbyTCjW6obxH2FzPYm3MouEB6CfwFa7h5SUvq6yFoGFEBGVG2e6Bqfs5i8FJinzHfSsjCH"
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
