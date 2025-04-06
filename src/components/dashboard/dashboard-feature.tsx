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
    "cWPLghjUfuBn1nsDergWoLmmPBuj1ePkAjhcanyxYVkf1CibwHAywiSbU3tkR3sxKwnPvopBUvc4JbwWe9eBvga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mfW3LT5C4MaTnuJoJtjmLrNUJiQikjciA2MnhbssCMPFygNwyEjboDXTS6Yt8aBvLJ3tX8zeqoUZJp5ssraSQF",
  "key1": "XHPd8vD1eUBTZDMC2ySTdbickcQMSAAuajRpsG7JNbsVvfS5ohbpxZq5MbmbHroZaraMZLb7YvmLuP2nD6vXGir",
  "key2": "3KaS6giDEVYkcV4crHGrszywDb9LWePSpyhAvsfCQX9wd4aByxW42RNna2aTdiTmCn8QCeqbv2nriQZfDNLaoYah",
  "key3": "3qEf2ZSYqXVMZHyaBnAdsMDAiHViXDhS43Rywrq8zoeo42dkwXgJiwRbNPyNmSSSWJcqrQJuuQYmCTjeoU2HCpBG",
  "key4": "d7kzYAPbhtHv3qitYK7t7RPPAbQKeeB1HorE7qNsw2Gt4xKmS9tA2jkSNm8TfQLUNF4aH9AUYEb7kFCoBKymH5v",
  "key5": "3cpk9jEYruwabUkxvVbxruFmQRBA6BPuJPXkMTMXftk6XFvRXvt53DwU6irW8rQFbRkw4gDo2CgadjAMQ4XsBdxN",
  "key6": "38hpLpyqBog7B8WBg6FsszfNTvqeLY3u6Q1FSQC41YXsJD12EXtgHaCTZZgyhqcAkeSoKnVYgqvoXXG9LqggjbGV",
  "key7": "45TJZwgHiVAvucjet8XBBU4F2FX5CaAQRK7AiXM3sPiHyfHPnEA3Q3Rh7fhUbSUKaCVZR65ZD16n7KCxcN1jzhMG",
  "key8": "4B1mNZLwWek1PZ4w4sVXnrDc3LKdebE7khuudta8FF6bczzkm6Zfg1zt5rfpiagPRtjWkMBQHjrXRy8jFWn9NX9d",
  "key9": "Ae7BL7vzertwuCkMWiJhzgMH8T4JVYAJUakp7khnt79YFXgzUx2rzWzm9Ns3fojYMf6svC41FQCXJL9sE1xmWAu",
  "key10": "B8aXga3vYRDZ8yqE1zYxpcHbgjTwomkciP77TCJmeu8PpddS1kY9vBAucnKfVC3B73wE77r49LjRtPHj1SJf8wf",
  "key11": "2KV21HkpfTwgo8NTVQxkmsP64nw7WeBMSGh3Ky9xcVdmRF2tbiiTVscpeyaBUQKw4LFr8Sbrtdnqr1yoGSLrUFXX",
  "key12": "4YTvjdwdYC3D39t3UZBmMDSvgtTDWhTpKy8MhijJm2nijkwtk1C3sJ9sNuLSWXz6zLpsDtUFAabtB5vW4eF99Zgi",
  "key13": "VsfR95h1drH51QpKLSj7m8seXpgdxeq5rQkjzZtbGropBrbcJJjVoAn1JorDyyc39Sa34m9TNeJZ7ZUKsusfWag",
  "key14": "51u54TNtKJDjaebcCb9KdTrQEnHZvtzqzxrNXNN29pv7GnvhJcaqUZjbKEAdYzct5qdpEbujrSM6DxqiLp5mka7k",
  "key15": "4TjkFnZLB2B2TV9D7TQEiMoe1aqUJped8V4mnXAbcQJwWD3L2cqyUqFL9ApCmFJpTgS5GHhLzwkTAwpDAfGZHGFk",
  "key16": "3yA9voSuk3Gpaz1vroEtF6KxcFZH82SVquBS6hDJuKbwUxHkpjwRu4F3Lyub5utCydbHHhfbvRfBD4X34ZyN35uP",
  "key17": "3tnqMQrqgVb2KwmviKFfC1GLpyg7FQ42JCFnttWdb9vKMZdLcg198nrmu6dc57UajN9KzVbRNyEJzRn6kKXrTTaT",
  "key18": "2aRgziHkRRZe1YDW2hRsRqS6qQ97s4DjEB6s9faErwK8FUXFztruhLa7PhtDmryjb2t34LjPr9J3okHVRpjyZNVm",
  "key19": "4q2TNMKCzxZkRDNR5pvBDaTcqGSu65kjRUiiGv3DU9ZkT7zzD396FcxQ7kjtqnzegk7gxRJaJh6MLoFT2fgZZiAW",
  "key20": "49kXAcjCDWA7mhona9yiMHG5R4D1KhFRapJEq1n5ZTuAb7ga2ZmEJRMS3NGSfrVVB1Ue5nTM8ZfvVGwSQhdyn8zy",
  "key21": "4xKRpus9midJgSDX8xrWtKwSz6ySQT3921vnbHbczMFR5wkQBqPdsjKP1LmPbfhYMRC2Di38yQpBFgQ3sB1zGXw7",
  "key22": "4sQ3FjyUp56du3YNapKyHoLqt2vceDbaX3NRmQaU1yYwZHykkXJRHjknEDekhDuHtPnju2qi6UQP3h9Vuznu5Sx7",
  "key23": "4WUmCGDXjNXALoSZUcqeRirDwvtFg433HxM44DvfX3vF1vcMx8j54mPWYSFGoECLNeaLYmMSoKUBqEvs6WqbV2eK",
  "key24": "2QArfvryPsjVt254vg3r6SThkeaPDppwaCJtuoP9iQvGEDoKoKtn4qWW5hNcvSp6tLahCNyUzpjFcaVJfWXLbVfU",
  "key25": "5D8gpsMPft3jWaTckQaUKFqYiaUVvqgfHo5bex2G5y8LnLJESjsp6A9BganfWGaNNgan34pCgCN4raoH7UatU7xi",
  "key26": "nYQjZys6KMKBEjEPHMAe4LFPSPoHbPrQwhJdMeJMKRkHD7nncqno8bu2N73TSrixgNuU8nmtnKc93yBvSNaZMbJ",
  "key27": "7K238HobYJ2sVVTQrwSQg9USxdsg4j8HSMxaRBqN5UW5ZMGnjaVKfga7ibdziR9wQTStizAQvBHZ4x9MUwX3p6t",
  "key28": "4GFHYGRZ6qhvhzMZZbnmF8nWw6GbuLziP4xENXTzcVcVFwa81apKN5i65Xr9J79zSVrvFEU1kfr3FhUjZ9wBsfSa",
  "key29": "5Zkk151ifZrRrA2hy9zNYyETJY9g9yrahwo74oHiBHnWMtmxZxd8aQShx2TnDEp4u7kpt8iWtxYYExDgpS4SykmK",
  "key30": "7m32waHkKzZFs7sjgVmG5kAMUa7zfjYeUW8dkjyvRVN2JYmGCsCEx5tNG4cagJdgxya3HTkfQ7aG3giVZyKLhCG",
  "key31": "4u6jS5xHPVkF2zuW5QfDaNQvsEeMgw8TDXgsj12LP2vJRYXTWdxQy2Kf7WqU3BYFTApPsznWdyngX2UoiaQxUxpu",
  "key32": "2szrpbL2hdMNn1pMhi5oLY9nHN6q35sZdYCn9GpTYJBdfsWG7y4n8G3ikGxSdosCoyb2TfHPMZ8X6HNiFvqzsRco",
  "key33": "43scHqV91pBpVfPK8e6wh4MtyZr97mHGwoh7aAxyynW7cDMKHvoxPqbcJU8r5JXgBpprKRQ2UZxCoPPYHwEsEVm",
  "key34": "3mc9DYYHLfid9h4VaJz7bqP3LJfCau7MmjSUbaKYDBYqYMLR9miGLeMhiK1zaC7QZYzGBiHNeiFdsG1fZoQDoaEJ",
  "key35": "5xrGC9FtixvGMVHBVAQjYQNavrAXePb5xtFe7PweVCEadDhj4nNkL1CJ82RfmG3Ykky8gqL6zF7kxT1gLbNztrsk",
  "key36": "32CJcnjfBFTJ2jjotcfm9dtxFrKCfquLRuLpZBen7FZ4PAQxkzfk7rQcU1D7YRDSfwXSSrvTYFuuY4sCLb2XoDEN",
  "key37": "2LXCnYqnMdrUWNjTnRPgcfg1jx9oJ5xMK7aAcrkHrZuUvGvt2dY4w94vDK6rC95jGHsMyD9WbgcvFxmxnZhQBM5d",
  "key38": "5pZRkeEegy5u2hL3RQqLjSzNFYhbQPXK2EywmRq3eMbuZhJRUe2z5rYLZ426z22CSFsHqZPPPHRUstJF7f5edVMB",
  "key39": "3dGjPMCGpw9yj4DpERk5QQ1B9eRMgAfC3SqdnPTSPwmKZGWPMvJARFdiDTgjWyyJYBS44ropLj5Z7YmB3cwGLz7S",
  "key40": "5PvX8kzKvt4NrR2Rjo41mq83goXpFzu7jdubLWRQtz5X7yPXbBngWav621E8YTwJYvSm4wx62bobQHi1k99SHRuP",
  "key41": "UPTJGiL7h8mwMsH4ZVLN1px43psXT6iaGM2WFiU1d7kcu5M4sSyEUn9Yn6TEJBEsYgYYicQmAuYzheGkAiaJqvP",
  "key42": "62NtcfXC9fDz6StkYVNzub6hPtt424wQ4RUJEvtUEaTqRfftupKiAxX3mjiiFjY7Xsdtvvp5Vy8aV9UMXsWTxH4R",
  "key43": "3WCpcqpWBMAWaGWznc2z4AmwEYq8xfZ4wfeY79CqFK393G6c1AJvMraVuCea79aWhGB92bq92YsV8Rq6hXBCwYpW",
  "key44": "2fvvkRiuuSw5d74Rf2B13mNnC4b1PDKZnvcacR9LgXWLGmigu24KWPQcKhciVF1XeocCRVPR3eBwYm5r2wxbRTUY",
  "key45": "5ABgn8UFsRguYdJtjMAxb47Lm9mkEYtMGVEC2HmvL4dMwmVXt6xVoVbSrKBzVJUGHC9tNha27AneosJV5horU6j6",
  "key46": "37nb7k8PQBEtpphnATBPTP67t2eJoie91gVGWpFQbVmDAHurJg7uNDR2npZNmR7fK16ARRVicnYEJ9Yc7B7hqDQA",
  "key47": "4qZo9QeSUyggcP2kyW3jEXGGaYecYyaEefqqHKxPoXfBzi122ttJFLNqTAstyErAN1M7iNzvN1Cv2Bs9MRvdR7JT"
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
