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
    "2aHdVzSAXaogBnEJyRxZP1dv9AqWSvdh7guaYSxsNYYKy4hAchhf3yMjH7Cbi22MiJrJKDvF7nJ9E2bRKaBgKU6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhS78EFFA4o6w6695VqPNQSmJoKezirvZ9ZBSrBiczKrGmfmWt6ntYonugY4TXWso7JEL5PgZP7n77EB8xFtzJ9",
  "key1": "4Wx2p1GakLMjcSBGnqHVD73eoXDryGKNKf4mYXqDZH1igqgKSEkRJt9qaG3CFU3FpzeiVdhw4dkzr1KuRLQHJrFR",
  "key2": "3ELvCLtmePYNU6adgYpTMb2nW3MY27jB5RiZiQCBxenRzGLFnQHfjXAzRYE7XfyEAMvEDFL58ZLrxU6v7RqhQti7",
  "key3": "2bwsEComTTX6fzzxVrSgsN1C5FH8RzFBgQVEHZj7egymMUjDUo1jTDnaf6ZxJpMJbvNxhptAw9QFCAQLzqDXFzYA",
  "key4": "5Enudn8Q2YdhjcfmMxW28CWzpdke7xetRSz6fA91779drQHfynANnmqDB3J7HfiAdRLeqRzoxVRjbKYoNDdKtqxw",
  "key5": "8yk9E6qCyn1r4AWB87fpTVZuApHwrcc2zN84XQu8JQP95qjfjM5sieEk8haZkrFnTMREkR3Q2HgCkQdQZUQwMuG",
  "key6": "2w7wvxvpcyZs9FHFW6TH5N1hV7CNhaF6hhSYjtLz7W2WAt22VWxory7tNwBqzfD3TMRhKqdUGAV9By4dGAYx5jkb",
  "key7": "4QBTUzykawVp6K792bVBvgTSnvr7tGBCAvYj455p3YdqT7BJUKh3zyXebSPRyFjpJciExAi2oZLHS45baKgnZKN1",
  "key8": "3yqYft7wN9AUh8Nk28Pb3DZh23HceJvQ2cw4taFyY7ZY61UmMjuyxCHUEWvxUs39ihKxZqi5Y4Gt2speuYzLz6NR",
  "key9": "4cZf9qpUzBJ5GRmidns6bmYUTpfrcL8wZDgFM9SdTxxHESGsVS3JNtKSMWaXMRD6vHYDHPJCT6BbkodutJJgwQvx",
  "key10": "3Tav6YbJmBr37eZF1yj43kLmiyuJZvytVNMnz7dfhniyGSXrmQf2ATxFGxvZZD125Lf3yxhKkGSGVMv4NUnttpYe",
  "key11": "GPQUZxXUbtSs8A7rn6nQHZXpP7L6SQP8nCY52rGCYzLoed2vENKZzF3pWYkK6nsoLk1vL8EEDAnMdsx2zi2KprM",
  "key12": "5C4RS5cCvQmCopJonaGWbXP5oXuWhUdZpeXYrB24T6mncetduVAC6aA8FxTwhsomfeF56A5xgv8LsxTm6QxAj3FX",
  "key13": "63P4x1Zk3tCru75TGyBit1qcBvcgVycbVmvEWnZp2seyZB9ZpumHJ93i5BfbDfsP9bnv8EzDS6MGYwNhjtH8bRqf",
  "key14": "4Wq1mhkTVpXAVsmhpm49PXwDneY6fhShqT2YuCKtfEepYTKYfZb7qxZECAUDeinxyX6cTK46scAyMRAQq3N1i8wm",
  "key15": "2Vx6FXx23QeKoELEyYvxziYbpB9VeysBp7qZD2ArANRomTqVCDnCQu61VehVRekAwCYHf7HdwdKftzpVENWgDBo8",
  "key16": "4cTAgVPWkCvxUyZzTMhBWhp5fDwPpc345bw6vJ15VMUTkq987ws2V2MBX4QHTQM65gmzYHTXVrWp3Nz3eomANzjD",
  "key17": "42RbFMGwCwTbDYKWgzbUWNzkphP7pDnVbSqfYb4DUUd5mjVtp1a8vwaC6oRvmszvVCgfTbrnyK5a7GEH5wc7H9Ba",
  "key18": "4ppj9YndrnafQK2eYKm1JryyAiV2oRbzv7DFhFzNCaSq2EVNQyCmRNjStrQAGPHijK8nEt14k3SvidCbYo2i46Wa",
  "key19": "b8qPLuCP92QXAK6Qv7Ck3zzKJGvV9MEeQ5Knc9apLBf9f9etVrurDT4NBsm51nuAJZyH1NnZ9XLa4j7QG5JiPD9",
  "key20": "3KkZcmVMutxzK1UiChkFJfnb43Fjtjx6Qy8t3Ecbx5VP8GPkxswN5fCGHWuQmSEt9D75eWDSL5GcKTnxmkzrs1vL",
  "key21": "3HpSnqGUqie4y3GJAhsXQYHuDRdfZnowvKBVwf7V7S1QkJjdoSaV31Ep25ttXnpvpkzt1kHJckkseqgRgKwCKQnM",
  "key22": "cZCKSjznZiYjYBNXj2HXMiZiLpW8a3HPV4WVqZHccmQASiQESv9RNH4Gj2AfKSUDNssJihC5N9JGcrWcD4tkHPv",
  "key23": "3YWJ3wAZsYfJ6nqx7b5KdF8yfNZuhFpoxifKK2z9rXSjnPFpdscqADZZmiT4tWEzw7psRaLKPFpJMBiivxW5JxZt",
  "key24": "RKiQDng7jw1BDFRHgmVCvYEBBG9ZH3sbgbCTGjjTLXZPh5dom7ECJPQk6uzD4vobeGkMEYuwE1jnuQfEqKhAmc3",
  "key25": "2SXNyiFSGQDCkUHX4t3pJUCdBRtSs8X7HhD4nQUJTTchP1yHHy44GEbg99cXoEaZTGBw3kkoadayAPt6dVJhFapV",
  "key26": "56kJEu12awjLrvM9wUdDestJoVhMuMyCXy7NKyFgms3CbiX1bmvFYZGMB9CmqXY41fm2oWfrLTm8S1eav4zUbYHj",
  "key27": "3vxaLn6XJagmKuvDoQ3zLG677R1JLSY9HefxFjsYcuDq4euejPr1ZKkEUKF24NuMq4sby5qEjt8V5KwUkG8bnfdD",
  "key28": "4cmYp9YkJg2Jm8eyJtwwkkCYNuS2ZxjcCkjihcLC1qsmb5UPkbGrvksywpZ9memmhzHCS5ZRmCnyV4ECUnS4LLtM",
  "key29": "5YFC2ER7JzcndcjtyeF6DSGW2Au3JHeFL8yfmD56RxFDzHLbD3XaDPi75acU59oVpRAo2YmCyBge1ZMLf6X9CApC",
  "key30": "2zUTMcjdRp49YpDWN1yWMANrT37Lb4d9T4BJwbpsapFVLgpsokC1xfZGCsouNGLWxeFPqXVP5G1HTTaPuoQpzoTi",
  "key31": "3G6NSt74tS8AZSKp3CvagAJ5a6srBhjmfXdzRofEuL4hfaqN5LUHun8jK1dsV8N6Z8bR3XAH3epjiSty58mk9u7X",
  "key32": "3bp6GFpTg7TPLT5Q2Ne9fRHPY7bgDp4tGMNAGyBaNHb4TKxCJsmfbmSnqB98Q53KLBh4nqKX5UkbKT1jEqcRDQhG",
  "key33": "5AKmN24aPjHVhH8FwH9pb8DbxQqEGtDm4t8Hk3dPcTLWFTcjkXPdDzjatL2vTRQVZQsX5cvZmYDfMtUgSXrjodb8",
  "key34": "5WYqdwG47KfNVcFUrir763GJRkC3eYuoyHCaQr4gmAJQXgXJaJQRsXTznbfeCJis5xx7WwcvNx1fGvVQP65LToom",
  "key35": "5XvoZtVychjyjdq1iCZZ1Y5QUcHabZZPEm55CJhiQsNcVafT5dB8Ar27pzYNWuGTpt1L2N8KQ8Tcpe4dknttGGeb",
  "key36": "QnE5J6t5dju9PbVBvkoCs68qhXAtMqb3P6AJ2uJvmSt55E63wZguRMiExtWnmkYkwwFTgPgtzaDAobnrGsHvYG2"
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
