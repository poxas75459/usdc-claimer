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
    "3nANPYatTmMsjuimgYToMQ3z4Dw7s8sYkcg3jr7SyvmUz2RnD83tqbsyqYaT3qjtMpqXTAPTUomujmiQhMysRAJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wc4FQ58vna6a8STHf2hTSpc2dT7T6GhLJ6DvbcPFbzAeEzTPuDwHGGxGRvbAg5KsqVZWkLKWVeyWiiENjcC1hKv",
  "key1": "3TkMRp4VpgHLuoKK8NQuWWh1XjUvmrUigBJDG8L1vB36gX3237xbpN1yCqgjhmSfN2cnEnyFwv1b53uzTUQtuVFw",
  "key2": "owgYsVvNJEeJAQopYRJ29JSkK59ogc94yB9EsHT9MfQsGDtdiBFkQJNK45S2GgH5T91MxXLFrjmhiv4W1JLvtVL",
  "key3": "dBMARHZXYcbPnpe5avxDPYi8KGhMX8ajZGHkmvMDt8vxtJgRKBRvv5MXALosfFYwoU4q693d38b9ncmV923P6aN",
  "key4": "5xiFpvtW4uHoszMo66DjVqC4dzcjtSBbSR6ib6iXDG4hiAsbcwLbEHda9eD1TEqTVo78jXEescvCS2RNzKRwCAwq",
  "key5": "3wKCqYgDXTjxog9j3tF4p8YrjndUXzH27BmKbyreLe8BeMg2sRQZh3SzB7UKMLQVr78QsTNVTZoVfpvqiGcHiFt6",
  "key6": "4QPHp58AeiLKPpTPr7zvn5eCSpfj1tXRJX3hcxx6mswT4o4wPom8cWfYJLbC88TJhWo3bT7tPdSSBKPHAdFvofjf",
  "key7": "5GduJgpPf9CiueVfKSBqh2ueRnTXRSDnN31FiwHkAfmk6JpHEi5D77TByJ82AWvotSZ83i3fF3hmYxmgW7nKZBNe",
  "key8": "3cBBpKaDMnHktiv8cehgE1ksbYu6qypfbAMFWgbkhZcaCHM36HZz6cVdDfHNvFdfY6WLTfELkA5xCCFJCMu2sNfL",
  "key9": "31jjX16Bnbeh22Ef8Rf4scVmyhWoydDejpWXvrq6kz7TdD5z8QWjV9JCv5NMsNyMncH8DypnTNr3PiGQkYnakXQ7",
  "key10": "3hqFFGpBs1L7YodbwYmVTyNTCNVVMeXWG13kqjxd35EhpNjhE3brF8HNR3Bd38d1vJMQWheKHFvqDvLhryq9Hb9G",
  "key11": "5s4hsferhJBEeLPTFcyqBejtgCGVY1wijPquzdzkftppLrFXKir2bARuGMZMbHd8qwVW5RdF37XDRP4j4pKRBvKb",
  "key12": "5j6yiK2G4mniashtZSU64PG17p5tBTNUvBZ2NsTGqYPPZ1o4qxuofhwMRBNB7QyHuYct38RcYWrLEG1usQdySbZm",
  "key13": "3d828jw9m3VTuUoEpitcPZhrfMY56fUkMwx95MyP6ZU6ykKNDCMGnwaiWiyPGdVRPEPEAE3ZseU1tyT5qMCq38So",
  "key14": "5kgUXPNQSqvzYkqtdPPTjNLokwmxRap1fXF6DGLjyqtBkR95WJi2xf5We23R9SCmvoU9pdRqiawCYWN9oWcH3az",
  "key15": "59jPhgPJnkJfgz3y4hwe3XuFFSM3RZatykqeGEbYCtXc3sgMqFUZrA55xcNs5GgnqL5DcPuLicXENFVY1BbGWU7a",
  "key16": "3BbjKpD9nd4qQARasp2HACNvrZX3HrRekSnXY4dwsGviLjyaETy1sR5jf2DiGtrgAZhorC9YS6JEDPwSXw6Zxw5K",
  "key17": "2rMY6m5A9zbjYi9sVYqxH3yMEs6eHmFtiHxfXDKL2cPseJwEKvtvpAp1mKbRMsXMNWqACukvotWBbKKuVqdzoo7m",
  "key18": "5vW5YVNtqc8kNx86xb1jsmxzqTDGY4PboLn9QBG449F68gDR8SfvPqqyCmeD8gUGdEUx8KTArS7CBBSuRXYF4Va6",
  "key19": "5zpW9wrAhZCdmJnEMi1PVgnbGezKm5BWaporWYMJKRCiDye1R2KmZqeZitcZo9FtzznSpjHDkPy2VVut5bBDUZnx",
  "key20": "5GK4PswoUAjSHA6pbpS1VbYFybUy4w2jAP8MWV5H5et5PruxfmbdiUnjV47KnC1EzTiEEGf4LKy8BA2JHT7xX8V9",
  "key21": "4ksRgHy3spyBA4UM4SBdRreAQMiY5cKDRa6mRCEnLjuD7KHYv7NCp6PE2oJcNV9okT7hBCnbAs3ZCDdK5BpDdkrW",
  "key22": "2qbPjvVibuP3pj2NQXnh3KY6EEwEVwfURz32Y68UTnnvdVsePHgVQS1JjTv6HYCNWeohJv9617ykixo82n7gwcne",
  "key23": "C3romqk5KhBziyFSPWkSnydSCPFLKjNcDdfpPS3HHFZp7rzaAC3qfGUA4zpqV7BnW8UA1Xypxa4dCqv2f2zfnWW",
  "key24": "5X8hxgfyhzsiSzSWWu1QG2ramTs8zgzT7xEJoqsRJkhWv3C8GVgidYUX91eXB3px1gHkfqzkBM3Qhp164nDdcFqz",
  "key25": "2ZbQETCAKewkJCZqw1FJmTWi6LBTHfVgCwc6xNMJPxwT9kHcAJsHqxghEEY1sDMJfoJHjXgyhdPZb75BNghkiL4r",
  "key26": "2pdv7hoHJy2ZUmyicyePvyHYBi9xFcZLgKHFWbY22b9ssCHKsffhipoaH6KpQARRGoqC1VrmEd5HEyREVQfsKxpJ",
  "key27": "493C3greRmuV16dYjrKWD5p1WqBUun6UPxzDRW3c35UnBCQy16LCjM7KVAqLtmQmzaiEqMMDzzhxMj4mmsM4Hxo9",
  "key28": "ou2kCibbMcuqczU4SJ55ZGptVqRsJmmZfecgZAqcmKSn6NbQvQYPiduMSsmpszzX7T3VB4NwGAkD1SoGSk22TBr",
  "key29": "3zZJ4gAN5xgrMbxdQbZ59kKpBcJrvfhYAn33sGmiTB4rfBKkt5EU1bZuBRcVmXaRHyEtZGMLnuKMV1mNWDv1WBo3",
  "key30": "4i2oqKr8iTVmvpX49Cx7zecpaVsuFHgSLzLoA28c9EB3PgAwZKy5P52jjDDFfv8WY2cEFPJ4rD85gtmPGGtLq7eA",
  "key31": "5RkFmPL6peqe4JUqc5i2svy57apg1UN7MXaFGxfPsPV57Lz6hawxngWsB9ZEWahZq3U73A933tgtcCxSrFTavEXT",
  "key32": "4pRBUvQAHQL5odbpgeK39KLhbs4sYwEZSvU9v5dcthyBDi9NQJcCNFeTrn1oLpWxmXpEHCSXjwLF3UT9TXxwL4fa",
  "key33": "5Yivq1fTD2GDMFg9akyG49a2efjUzwea9PoW8CeRcuCcZwT291Y2ErE2RYfnHp4wCmUATe67uWW8LyPqcLK8azTG",
  "key34": "22eiMgLEmupHW3D7bb418fQ13jjVAn51aZdpqYepfi1L5UKM1D4J5PJVK9Bdqst1tsyEREFBC8T6DEkEc2VCL5R2",
  "key35": "5K6YVWCXhyot2SPnSvc68WU6suJngzWjsgK8u2EQt9sZq5rDA9aaxmchoRt55MkPNuCDXQcwWLW5FKVY8zpAinp7",
  "key36": "64wo7qEbog17PUQaxW2FcqArwcPq3Tg9nkuHDWrVWUGoepGW9Tq5ki6Lz94ucA19gvKrbPeNeK9uArvij9Q9MggX",
  "key37": "5T5xAppjJc6Jqay5uvGXyQzYGMvzm7WpLVEtmRyvTQsp3XiRJgx72Jy4WX2JHnsAuvLo83m2rm2JQHXr7L1LSC6v",
  "key38": "3LNpj7igU5cMDxB8NiTdHPTxumzr4etMcFGfTJtAHY6ZdrUsNGtqR5YYXsL5N8sn4wDuhzWdGJwGPqsMNyVmW32C",
  "key39": "4Z8qiNvzCnNmCbe65H4iYbGBAW8W6ee6nkWZsY43LeSwxf5tGm8oDr2qzUPKCKC67uoj7T7CX3yXdDueVYH765ne",
  "key40": "4fXNN1JKfUmZbFEXvehy5pFdASo2UCyjQ6e2we2HPYhSU58CrERS4jwvyddsJG3EjNaEvzLUNzvtS7ZMWC6nVxKa",
  "key41": "5PpKsqo3fKu1sMJjjYCpmBjzSM3yuSnUrQVmKAa4hJXY28rNfTf2qD5psSsf18PEt6gvEKvigSJiwPQ99mS45TfY",
  "key42": "3MYAtsJagqCKHDx5Z4YiKFzHRHmRd9STA1k2RzfixLzEa5rdYw1Mf3waHDuxc2yKmKowcyZKjKeRpAWDWGNMr4RW",
  "key43": "4Ad9bmQoVFiCBLpa3eoRr9YibrYjpRZMo62A288D3KiNCuBVFNxTvyhTkZBL1zC1zE5NqDbEL1VmNHgtV4cy8Q8F",
  "key44": "5DGNWH4tcKQpKPVTT31KN4enyWaacdyZTTR5Vj41Prvg3krZ6kHykqbgJ65HGvLyRjk2Wmfjxvj8wGtH84p7ndYd",
  "key45": "5MT1oN7oh6wgVEYQNJh7sdyj6cZX4ULAwXa8YgamU9LX31rCWzcSwABSonUN149yjo1q8gb4hcfdTiR53ra6NwmX",
  "key46": "5WuJ9MevJTnX1vrRkGqSNgBySgtByL68m3mxFMxN6aVpCQ8zec6D6WotgbFo9nwyvbeRNwkHZsaE1e76Y1ePUcNa",
  "key47": "ECX2C2p6zhHV7K8rStX1fYRkkxNtEwCJBSruexsyN42Xtc9P8Mv82QHRoj3oeNnGpdMbhK7Pwopu12DFa9DPbVU"
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
