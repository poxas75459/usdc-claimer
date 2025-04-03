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
    "5fSHskVK2bD641zR1k5bZmqwmxSorwz59kzYp18AwLTCiJ6JcRyG3kzPu9nMGeCo3M2bwEKCzHYwhje5i7ZnBWDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VoCimdEgTRDRvc9yYbUyuGDCXeqima4eeypAN7rFCqLw6G5eeCK2Gcgtv9MDG3TYvhGT125pBdmEMsocwbPDPpY",
  "key1": "4vChNpRGpx54Y9KNyhsCYQPmrHhPSpC13PRYCBrRcjYpjZfTCFGQky6ELUaMdrhHhBPMHJrFwoTajvGFtwguzE9G",
  "key2": "41EbXS1oZ7eKUYvF9PypJHyXRWCt1voF9KvTX2HGbJUHx6wsQo99a7e6cH9FptCAHBHRmSEZsibyGu9D1FZghhG5",
  "key3": "3JAguW8u7LWXxBWub2CseQE1N4ZrVm27PBisKAjRB42BNo8mYXRAgoiGbDzW7e7iKViL2tkVSp4zYhGzgBG32ZYf",
  "key4": "4qCKJrYXydutfxXxuSC3TvBmW8woz67mqMcjeZdHVoNs7ZprPmhppKSqMTZqsiViYhBsyY6NX1ayhMLuk1wKRnSi",
  "key5": "3aX1r2TRLsxuAwBLVDpUoGQQJohvcG6S3eC9PQpS2GLJHtrbXeaig3FmMp7y1wUcoxGfRpahuHnGoH7XC7cpwPFe",
  "key6": "37n7amQv5BbmDn63catQWcycR1XJaJmzo7PnvzMaJvqxnkndSitzj85pTVbxzBaVyv9ycyDubjMm78aCD4qfK2rh",
  "key7": "5p1Rc81taCMpo94JrVw4AbMZo1yKgoJ7hepp6ZHTwXtcAQVEbDKSuNRMvY4KdsqqcfDqAakcJBVhxNeXXic5hVaT",
  "key8": "2jcj29JKpontvGX3JNm8fm7X8m2nhi3QkvJQWRpwFpzCrzzwym4mY5QFVUkGJeuuNZnWVcGrHHrSKGm3y7SP3bLd",
  "key9": "dccwiBFENySyEURRN33f6Q87KZymxrsJoh9ekamY7p4QSinK2dUTHQ4DfADbSF8acK8PYTsrQopcPaaAQEfRoRG",
  "key10": "4atoiRujA1Z1yhewn4fUqCzAc1bodZ2QBY4kPH7APhnTcH2JBT1pzMKyJntZJDcCQu2w8NEzAPnUbxvEFPg3Cozv",
  "key11": "ix9DcdzYeXfUZQbbZ93BgU9DLkHhyGnwK5wyeapFgnftCP6E6ZtVk4RTyL4Vi7weHju2KpF6xtuAFAZpozNCEgL",
  "key12": "21rymQxdQ47kPF18vcmdXUJ8qdYvNpysNvkqf1QmUGZwb835888ywmC2pczp9eKGsqi1ijuosMVpwsbj7Fq9puqH",
  "key13": "3tNmM2zcppn5btgcN9hzfkhDPSm4fLaj3ZNycDqRmPPg2g76NUN5y3tQsdmvnTwGvU7XWb4yQDSwLWNPxhp9d5NM",
  "key14": "3AzqGQNMRzoRbbEqAeGJGz4RJgNgk3YuPr7XmuE8wxWQDkTGP7G5qn18DVodtyXZgbY7Wq65sRXrQdTSLrQg9DYQ",
  "key15": "A4UCzfSSoYNCunNAH5DVZGadBSfmujSrovyuzqePZsrFcXJrvXkgrN47GBoeC2bj8U3KRnhfvs6N3RYG6gVZksd",
  "key16": "mZYwU2Ffi7W8sjzRNNUSbacF3h9FrS5PAPMJLBCAURFpXjETXj2cDhdW7kc8Vr2hJgxGtPzyrTSc7R1ymnPE35w",
  "key17": "4HsQw51UCTZp8Kh85Q2YyWM1uNzTxPa9xsngzCTxTzUwZ7uWMhv2eKeFd97dezYcgpSYNjdRzG2ctBxgqzS7UhBF",
  "key18": "2SHrDEoCf4vLFnmRKfLurvHiK9F7PBUifZNrPN9MgFExYcZeJ4Ln88YZjEyrvgmmbNmYyjLsPoDp8jmTEZr1rQF7",
  "key19": "4KBNKYf8pcsoF3cReNdmm1cNVm9ew2Wk1NGEemRVPf7mkXtcLR7j8b1DkFmUsz9nx167DuJ82Tcx3BNLBw4u9ffD",
  "key20": "2FuwhAmDCQeRgtBo6ZrSGcdEwPJQvosyFzmzH6eKrp6JJPoXyjsHyKkScRB5hyh6ja1gQCj2Eu9LSVkqS5x6DhsL",
  "key21": "3VzfoR6hiBQfoc4iMAazPVa1CWs73dC27Mwf6QaPS5X3KDqtmrVD3BK4LDeVgG3C6kcDBvaeA2WqCGo7VoCWv1Pn",
  "key22": "Dhxo3FmFzXLGi1mkcTk28LbLzeMZZ44Z7XFEUzikqSZNAcHNdNnY9git6kkZ9EzCb9fEdtD5SKqarMeWVZ4oHs9",
  "key23": "5imTkWW4izWtMN743iHZHRvqp42fgMvRaDeKE7BqArKn5j8uE5G5jgACt3JCKjs4TsYvzQiRJEdEtuq4kQLxdQV2",
  "key24": "5cisHYjKXuZEV3WBQiaM7kBU32syq1wJYX32joxTmmM5eFav1oUzfrRDeBbJS8ZsGGbbkx7DeKaxJd6sNW7SUoLV",
  "key25": "57NBG6RmjBogktqa5skbga2PivjLJVKAwCGfg49YX2g7fvmJmDfwDtx7i6AAYpeMDCmaGToyG3TUYfHZ25qerNkg",
  "key26": "3GAKcZMnzkn3Y1KhXy2TKEPopNPHw9gXpdZ5S2SBbA8CgSFr5nSFwnDKQUoPd4R3BE9xSDR9LQfWV12GTHvgvpEy",
  "key27": "2CDJLsKsTAgVViMxryAv9F1SDGKJUX1wncc8LWZtHikiBNDmL3agKZdMx5Yy4tRoD4BX6aGmtGsnfpCXNNnHJFMW",
  "key28": "4d8zHypSQ1FUFqG1ysqpeEUvPbSSA8ixars63d2f5vUANcqmPxdDcXGahJDaUtKvxaxpa4ei8xmRkwivAnt9hSWV",
  "key29": "3EbX6XnBKwRgE6k2x1P5JuByZUVkGEV2F91jFv9Lke4Gb1joJKtp2nbUsg6Wv6GaroJ2i9DwQWWmrQVc4BsPWYhd",
  "key30": "2HCY41mYSh2vk6k4hdPgheACxkpcEaNrxLa21tiF41oaFVoqZPTRMkj6nRfcKcKSeQKGQGWC3ZzV3FWdVaLiDrJi",
  "key31": "qCvAvbuqyp7o1ud7nDXQSycj4AmxSZ3o2Mu8MVc1cNBjXVgzXQbGjaAHVmauwohuVxpp71s53wWrJjpvXsThd2v",
  "key32": "2ppvBTncvzz8EqfUAgHETat9ECnfCzNk2nNr95jDmjwZ6uv9UTseCdJ2Tpn85PfLkm9w6sfRZct9ch2czJUnqKzi",
  "key33": "43gi6ExoJVrfHpq1S5X82JjNRNxf14tyJG7wwbpHSJgYYmGevpzN8uGwoK4dipQnRuzSG72EnEgspYchcsspdkcL",
  "key34": "3x82oFzTbuzBNbNhxzboR9njYvw2VfFnN6buwaagUnyGdntQRJ924GfNcNws1iQxssAWnYwXDFUjgT7R3g9g7ZRw",
  "key35": "3sMJpbtvd7VgfnvcrZLXvc93986QwzMMhgTBQuak1c5ZHuhv6dApBG3Z9sFdUu3WfFN7RaTL4XXwL25hbAtkE6Rw",
  "key36": "2PppCDa1hYRsS9ehXwS4rAkYepvpTwme1d4LehfZwMUAfTaASpgKSoNdhfmf5eaapwrazhKcBQNcr3BghwZ3iMeL",
  "key37": "4x4sXuCKYwKz6KzFvmm8vbzpdNbUPwb2StGeJUbEGPo8zEW3gQaqbkTYjj654RgkpcVdmSy25HeZo7vJzsAA2RZe",
  "key38": "4HwMSZiozLWjubZB2NcpE1hFacqLMU8fXEPM5ZjdzpxdeYCRuSRtyLjEDKCdprR9NK4N7LhtyfAXqLmyDVVS72ZB"
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
