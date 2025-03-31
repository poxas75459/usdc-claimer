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
    "2hMghgsEU3Kpbdk4kQePWfSbUwyPT3X3F2aCU32GvycHZ45wdDHjoZfsV535ZsVV6rTKP9K7JkLA3z46ZUYmHgGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmZfXBGbJYiCaUrXzDw4imgmfjCafk1avqhwgdPYimrwP2iPkQ9GjzRxJm6eWTT8dyqpstMVS2KTJGCnjQPGWYh",
  "key1": "4ymnffmtZuy1oY7hVxgfHGUVtogxDvFHv8irxAh4Dp4aTaWZHnfgV4sWiT2xGgV2MwBwYqVBNCp4yzRS584yAPJi",
  "key2": "4eWqmMSy2HeCxHbq67TwGmDC1yz79y5rFfFVc5ttZTMXCsu2WnWWMWMBzMfs2J3nEXnCN71H5f97JnBqUwBVFgjV",
  "key3": "41Ugrjhbpzz8xBLGWBErtPPMtzcx3fKVQXWEkiruvf3g9BR7UVdHrh7b3GpthBBembYSnq6pDFhMZqTkiRNFUx5V",
  "key4": "4hLGSCRJCSrXV654SaG6moTkGT2drg4PnmbSceAgBXeuNbmmvC5bhtQJDcZbg43N5He3Y7YUMyNevLmipwaWvv3",
  "key5": "5mt1r21msVHJEcEsBCrS7QYsVQUQ1WQTBTjXC3kkZNDSmXW1yWn2YC7qHYDyfPoFnptDuHQuCDw9EYd4V7KitNdz",
  "key6": "5eSHg82R99dLrXNWTksYB3Q7UknRuaRF1YTixxNngKJhpM5Q68Xnzt65M5UPYxhbcz2YKNYtov55p1bqvpDHjBPv",
  "key7": "47FbngMsmg8EXZeTBX6frRBro5yiTrQt397mKJiWX8s7v7vYwnqBsbj91Rc9HmQqYRCfe1dnHY3fnBAo352ezuSS",
  "key8": "38aeHKk1ZKbsJ1z4i9aXt1Np3W8ZdfChWPtDFbpngfJ9MdVMSdx48zqdewJcKJtXdRUkBqCJ9dRqxPSpnQDsovBN",
  "key9": "3Qa9ScuMaQWkYdLihy5ut7o39AW1jUkcaWhMza4GdqA2cQXh6szAXsH5iYZZrCP1tAcxiMXiCNiLjHxn3Hhqkfh2",
  "key10": "4YnBXBmM5Bd6zP4uBoBr9PUUuSGu8qFvJBfBByiF5Xvka1eZbc4xKHNceShF2T6MQMeyBV5wZBenKmeLRc8LkmAf",
  "key11": "5YQn2jpJCMeFJHCLw5cKWL3AsrLbMGB9mhvwAb3P8jSX9iGmUxPbe61FckVj5hyCynoFq8UzkxhVWa3QkY1rpnTn",
  "key12": "2VT2HhqtwFCupTUpbKt5HzwzX1iZzxVwx8vjpxefK1fuShi1oAwW7DWjSNi2ahMQTmHcyLvYCRVRurPiLDwXwquW",
  "key13": "5zFd7HFNyLmjMZU5dkovrkjqRH9CN66RxqmMc1x9uRnKohdVPKtyYxyoTYFKBKLpmtJtMXd8ddP6ck26pi5D1fTm",
  "key14": "56qj4AGcu9RYGczQVa2KUgZGgK88SrCAq954Zk6biYb4Xau45a2HbnLX4oFBy6THPs7Cao8nidLchs31EpyE2knJ",
  "key15": "2KvbSMn9cR7vaksTNWRHLb5Nzif86mkdLqyyuKSaTE94Q138Z6PiydtaqwB973w5UBL9rhaoEKj5KueLsE32uoCC",
  "key16": "5esV3SSqvuDhEUB9muHUFdjSoCeEzCL1ECiU5JMUeUdUoCQ8FgCPyMSHiY1p5c6mSX9dpBYKfbf7cuQK8wTW53jr",
  "key17": "679Q2utCtiPRexabmuDnm4PjVnrphXXY618TU3SyRFvXYxsXQ7Q7ydNXw1s6PLCgNDzWQ6snLPb4UBdmCsbpspcX",
  "key18": "C99aAYDKhdmvfJ96hQHeZksJ5d4VntNv2X34Y9KngvJ32VB5NynN9RC2ELvSi1pK2GKArVedUKAM5Nbn2ue3h7S",
  "key19": "5N7mS4eo7fbKE9sHxpxZEmZQx2JBhxCvK8RwbyePfeNa9sJzWGxExevibGPmgJ2Cuzmf8QWo37JbXhsscFHPdS5H",
  "key20": "5W85MVJBS6ax7EbhJcQDA8QMe3NyEEWYG2kqNRs6Zpq7VDTMa2oocAtakQftZ4qFrajsr4YM3KpUdZNmcBrTtpBo",
  "key21": "5iELrzSPmRHqCMeHWCPn9tuWZd9cMdRNhsRhfSN9DVMVAqVDR9bLNYjLbfhVVGfdsiFcw4siFp5Yv52rKL6zzM8i",
  "key22": "2qLfyZrhfY2cL3PFBLvogJjZy8tj1BvxBqgFfHQ1p4vVav9Jbd7MiKncVRaUzzebPTESLRHFcXU8oMqUnHbbV6iD",
  "key23": "4KyswubRmRjLerA7XgazT27BQLCo2yKeWT8MpcgAfH8yoR6RPG3qqAb34DYWqHVKJZg2pJV8M2fHPzdARHmZ1GRR",
  "key24": "4JaamBg3T6HPQdoUBurnoPn48pjkdmQrpVnzT3TaK5X4TGnbwADdnHfBxQhoUpQ62VacBTnJFAjDvEZEHjeCKBtD",
  "key25": "5c18zgBqmdyuQiHEEwCo1C5DdzQeD7ZnPPoqF7R9xzjBPiUCGPisVnKhzs8FsteKEckqTuAee1sEK3iupptMgv1o",
  "key26": "3U5W3xBvYY2sxzK5rxXWtfGsqJBui98KTubJAiUukwrfAUSpfjJZHFg2mK8kRUQoiYPWwKJ7wyaURMwr1XQBJqxr",
  "key27": "3epuBNNYxjhy1Yfae37FTVYvXWZ1CECLjT4Gg3Njjpb8uFhGr5CzVmRcD7BFpAtij94T94MG7f94ssVF8VpKgJtb",
  "key28": "2T5qjfepxB3EfXjZ97XtaU7hHBjTRUza7XMioY8mFQwXJ6xmZKz46WTujN1g8N4H3df1CgmGLzvz8o6wonb4CNgH",
  "key29": "57897LpVdQ4xV9BrbMTsVgUkRuj8Xmi5PQ7JDw7yynp1g8wGY4qAq7HcfkRMggtZSgfNnwW8MVHZDRbbS68u3JjP",
  "key30": "3M4quYp3kX2SXxHBGMUBLM2H9MELQCtCf895Vv4iRCJuzT8DEijiCakULCLavcXpDDuNjUDaqiSYbozM8U6Vm1iS",
  "key31": "VfikXhU8ruS1Xw6VBXvjs68gUTFQ5nZem4NZLGidRyPZAqt3aGMCEiEn1pSY1ymactiWUq3Yowcb7KxpANBLaPe",
  "key32": "455aTKmHG2xdPcii6y3CrkKG8UNhDjtYoRTCPDMFeTkvqpaXBr7qhb5PBGxamDMJXce9z8B21QJiQVQDyxZKxBnA",
  "key33": "3RPmSDQS7N4qTrnG3iWBrzchm8qcRHQRYUG8yPsXrtUryQmtvfrM3zbaFsznXez5PPtL939PQeNHDXQPmwG5Fpix",
  "key34": "AodRYEd2owPXFQ6XSM4FdWB8HjcfMATgEHovf5WQqjcQXRNnmL4Kk3JgvSXorwxG97PbbEr6aK4jYcTARTfWDyi",
  "key35": "2NNbjqVz7ovxCdgRyTt7Cr9yzsxfo4R16cRLD7Mh3SMn1juaHYhfkNDPLuj6ksadBjoR7xoJ3dpWYYNkot2aV3rZ"
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
