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
    "4x9oyLXfcR4yRPwLYFpfmqm5y6QmJZyyZ7NEnRNHggmZsbXe6wuoBegLYPsyqvJvbCbaKkSwDjuoXFs7aHaYMoqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "231NNLaMy9oYEvD5EY6MapyWcjcKB5KNxzfXxW7a6wdxCrcGiBmWCnuPW97FFdAiZdw2KfkyfuQRYRRwACC8XCzu",
  "key1": "Yxp2BuxFtAAUgi9ETwxE5bsGTdVmc6LuwD2niNWQDfdKPKAnbXSSxTCcwZh6gN925T2AigTkyvfAm5cwdi8f3HT",
  "key2": "5Mqf8JnVyrQyEn7KN7bFiust8Jp4Hq5dYTmEXV4KCa4BqzrwpaekaUhptRUdW5fpctTc2gMXFwE2ywkb7ErNvy5A",
  "key3": "2FhpqhXZKoUyH4R1AfpkmYEnNKD2sAZQoAhw2Fp1hEUJN3gt5GbDSwy749qyUdCJ4g7r9Lat5knw3MYbR8qiEjwX",
  "key4": "4gQNZUWAgHHwn7VkTjyKauhkXAeD3TBscorKCZ2gBsJW9Kq83dD1PENr1JtKRroHwt21tCzy6b1aRn3PvDYVo29r",
  "key5": "2D9pQoFZEaAvvAPKy8VL4454DbSxzRigkVbqGRsauDYRqt6RpXoQnn33LCGVA1ggWa9zr2oE2TVXpgcbcLZneNrW",
  "key6": "X3rJe398UtKp5PUcH6pxYerpgcHvxdvUA6CYow6GnnAPvkY3PKuG26kPTMECvPWcgLAXW7hK2PZsu6BuJAhNcJA",
  "key7": "3Q9gDfHZpcZnMoe1uC2TvAkTyxhUp9k1hCrxJLK9NooZ5uFdAwENogds5gE6U5hnPhgSoM85AUAxgFZZfM5v9bLJ",
  "key8": "3QCQJ71UhYwJ6oJsZ4ehQKKKypSCUbbwzsjQM2iUUriU7jJXN9qXZ6uAPweTkL8Mv8NjHTXtBETUJmzawB4rZTeu",
  "key9": "4xGah7dq5S5cVXEGSwkcXiBNDqSDdZgV6ghSkpCzAquGP9nnSSFQAJdN2BLLSx7WCwJr9iB8URf1FUCLqN1kocPg",
  "key10": "2fskLbrZVNNnFSnhWFj6BdPFC7Q9drLcaK84e6AGZ6mpyLzSdbd7NxbVk2D3b1dBAPMweDQNa81Vf6qb3Wj5UMas",
  "key11": "3YhafAgadbXfpwvahrFHgCH1pYsvvnJgFg5ochqYvJ4b24LvJABrJLE6bvThzT6jEwWFvM6ihZs5QK8aD3BJ1vqD",
  "key12": "2WeCseSiMHTFC28fYFh929gkdrFRBB2RfNXBXJTes2Fv4dMhqGAPSAoS6yV9Rii4wGy3wxYwgTeThBXovbfqui3E",
  "key13": "3Bbd3CRVA6h8pojGy65wTga3obZzhqUdyuLsFY9ddZg9yRHANDtQ71pFaeE3wRmtP7ZzkttoCiYHVgDPsUkTwvLa",
  "key14": "Ti1te59YVUeErDXeuJpMEmTGQQpKn5teyHQd51ErZ7mMSCsjZ6WRmLyp5nYdisPwz2L2DHp114gLyEtWofTXZMn",
  "key15": "2o1gysd1YNFqqbhiA5bxXKYQuTE7gYhLYwiMoWpFtTh3Phzh5LCjw7PoMVKe4q7gRVdMuiisv2adiczxHv36x5nt",
  "key16": "4XNuMTu4TnySKS3QWk1Nv46Jue3djbKkMM3rNr89yqyx8J56uhgjrmXaVXQdmSZJvz6t7LpoBWryZRpi93hJKhG7",
  "key17": "5cRNj8pzD5xg57AeRjguxSzRCqBrUhqdbf7DzYrzEkKFB4Nift7dQQoTf3Bah5EJtoETUo4u4yJ84hbbE27Vjqaf",
  "key18": "2BUou9hs6cPJHbQaC35bPdDCSW59HEif4yHvSnmQ6r8ky3AU6pVrDGyG6iR1GezU47TLEYuPADesSxD2Wjhr5Zu8",
  "key19": "vuhGdG7BJjiu4qUFEJC3a7VpvmsGfHBR3tEHN9k7vnDDnFMK2j2rSFVADQWrY3RLg1cTj5Sqt4cwUGTg9pCRiTy",
  "key20": "yRSu4CnSX4mxHigS7eBFTVbfJwxPDVcKSXmUjoAdirrNQq2X3rrMWKGudmHcfZDBCGoFnE6yHeonkzteYs28K6f",
  "key21": "2p5eY2w5FJ5r7EkXXBUTJVmVPzSqj4537tWXo7qPv8Moux1CKtu5waMuizo9xLwtur1z2PkBzzafY3J5Qzy9PXkr",
  "key22": "2HyAcAfeMaNRt8eJuxoNvgank67s4iYeTFbS5t8xDmpuiKsFWEiGGASnp8GdSDEmkhmAgEFxvcYjK3n3z5Z8ehsT",
  "key23": "VapRJ6yfJuxfqc62FzxDgpezraTUrpgo3Afkp3WuVb5TazjQwro725qtARF48vXvu2bmJaK4ou5hdL1BWjHfUBE",
  "key24": "33mSG4JsUjYmxYnom6XFrBMLdyYwvdjNAFZ1q3zQoUmRatXPHn4xjtVcU6uH1TVtQ7tdcNd39HV1Ve3uyL3hAtab",
  "key25": "5M8kZKMbLjt77Ep2LX2S5WQFvzxy1QuLLP4EYxxZVUDazNXbkTuYmGmwcp5oKFQiF7ARD2MYWf5y4wa8tTotr3jX",
  "key26": "5pPDZdfTUHMBr5hhTeGh2NS4itEbBRXnaAsWyei2aKXa9av16ZrkmWEeD5fmfVDz29zYsEkKCvr6TdV3fDHkxE36",
  "key27": "FB9mfcxCXAYjB148QqWT4K2QMMwt8dBHBYW8e6Nbyp2DbEwhp5apV7PwgwUWnYGjzNadvAjZ5FiaiEPumtseiMw",
  "key28": "WXbDFfzMaDQEpQo31paV23txUSde4L7U2vuBiQQnGJWG9qcsSJ4vibjAaexeYHA8r2V8RbrXCezTSSyYWUQ77PD",
  "key29": "5gAjttTUkp1KhKTd6i3o7ppgT4kU54XNhRYhS649bTBn8uJNK7v5WdwUsaNZF1tX23wrmqJP9L66ZiHMLu7HK9zV",
  "key30": "3dbvZXsEKMiJtyZfUdRLfatYhEvXQtyacRudhhNkaV1PJd997GTmVEwhxYnoUZp9xNVPgCWPF33q8sE9i8xw8DW4",
  "key31": "2iTSrSYaTp2UBrNTVcyjfdW3s5Pw95jbwU7xhjp5U7uiX1AbCazaQVFgkkzKuj2AnQ2UnwmGZRKnTh3n117gDmP2",
  "key32": "4LwwaqRWpoEFSZKj4RKtqfHJxHdoyrrA1USVzpAw5QLmJKBay1H34NQRNWePMp2QSUXcictTrbsVUJZD63waqoRN",
  "key33": "2trmThkYnu34ZUngdr3XVomUVb9VLgivJMqCUHs8T5aXFfwnh5MPcvDh2ft6psM4kWbzHQSgSp8wTPTcKSsVkicz",
  "key34": "YNyrTQZkp8xWYuwiTgwWR9XdotZGexjsH8ipd2asZrGBoixFbCngEM1bwz2RGbF3gGDyNciWCyWT5LNMcEvYmdY",
  "key35": "GNuzYPa5Zh3PKSLGCHrCoevk6eZkKUpBozkgkYearsFosoVmnKc1qehPMpynHcygvykLVgXSFRwyiJCpN19ByTv",
  "key36": "5DdrL1yjyQi9ZqLxUaPRjLnHMCtJprKuYBzhwYNKdnMuAcaLvSXePdrLw2uYgRKsDhFhwrLdHxpwM8NfZyW72yr1",
  "key37": "3cCVarPqQHgc1UTcsHbC2tXYurHMAW3JQRQJYGQ2NaaNaB4zJTBk8jw7b9vftzsBdcAgacDQKBeVdBxaCrMQRAsn",
  "key38": "2XxDABnwc8bUBSrnaREspWY85gUt5LvuNSYJvb6oh7E8z6mBBDZvKU29jgD9kn5gi1C9uPFBiEwmuLPCKWGtVRdy",
  "key39": "2KpdtrU3fvheecuy5ruxGCKDNfSdh2htF3ZEDsDMoSmndA8BUVmDogFDocAvt9e2511d7AVH52T1ZyvauNSjyumi",
  "key40": "5L2K7M2qhDCntNP9wijoSNN4YHVuGaRcP1qj7ARuyknLxPcdjbeoYCTNfz7gXaJJeL6HyFSk573G4oPtxGB8iyEp",
  "key41": "4QNL2HtMKeHCuZudABn1rDssaYUd1sGLUXdhoq3BvuvTwJVV9Gj2F5ig9DrtoeQhyYDkfTHwd5URAh7XvnYpPupZ"
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
