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
    "65FrvGA6n7eFTaNcWRc8kGaYDYx1iiZgmtftHwq6VmVHDqG3GuCFibAiSqJPY6eHaChZZ6wZga6UqqNbeD7rVbiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5Am7bR5nrWb6AaJ81NaUj8HhdKoneD49Mt9i6cYxH3Nt7ngjRz5wpzg9oy7SdxGRV5oMZR4Vgi5U845xVZEgAw",
  "key1": "3rJUyP6xCoF2S6N5L1oGt2yY3qRAi6bpMR5a6iftWYK4GsGHJz5WUx35shVHFMsHwLHKhbrswEwqidchf7Q3gSoU",
  "key2": "2HDW48Q14GcWvxkaVfKebftMMvWZhrmkC3xhkxck4fEg5gQvy255PNPiw1KXJSEg3FkpnD8FrJ35gVMU9vWhKrEs",
  "key3": "5RShNvHPSa5xccXmm7N3Yrm6B6xByeZkLn364B5L3tVr1a8U19xQsqXGnj5gKm4xrBfrWF5m5MtzKuQMQAET16oo",
  "key4": "3aQA9kMacnfq8NxKDy2saGxiYJXNbqsuxz5BwaNoiG86KMHKkGPSD5kvCXS2VueugGAeHgXJ6J92a651VmDf2io5",
  "key5": "QpRwQdx6qB7ywctBScCMqpnDjKN6FgDEoq1EMU8fe2MNvqFpeanbFKBvgwxcuZZ1854Z8DzEsJcQGRbmynES1fP",
  "key6": "ncK2LFZhSMdAdiLnmsicscNaY4gyhEBcUajvTwi39Jkn8M7BA5pTYeeHdBuDgm5npHfboxFSz4idjde5ALs1u5F",
  "key7": "dVBW4evTsbo8xCUtpK4V7bPVjSpbXNnkiMY3x2x8F4dsiM8Tgk1G7K8A8LmiUZYAMiHJ8D6AoPXWx1DdPWZs3Ar",
  "key8": "4vkLvAyh3oCB3EfZCTxn1theKPejgL6HJU2rY8PqZR6xwwqXoqxifcXV39q6RMA1x2BbdMGFrikrz75hTevmyhq3",
  "key9": "4KQfKCUWaSK6JsnRDmuNsrgHgTHEoKEnDfiyiweyo7mdkq5GxMbi6xwXZnNdi8yDrQcsMv2ETWgwv3H8Y1psck3w",
  "key10": "sQmieEuGTybUCrdRnaFnV9LkXJ4jHmi2xDzuG9PyEahJYYJbpYsKUiopeWeqjjxwBAiKNhrDsbepS1gmDq9cNVu",
  "key11": "46hyhRwzLF1vmkuuyyBUhJ1kwuQRDGcnCVJ5K7Nkp1K4y6t4CDBhQkVLVSKuhXAD6CD5EsfmTSXFFcJTKBVhfztD",
  "key12": "3JDhEtmMNEjHUTi5hLQ1WBwRnhZwGoQrSQRmC438UkE9YzR3NJtwXo72RithA7gZxwSYv8GTFCqXAWoTiaZKLXV5",
  "key13": "5U8obk5h5wmVjog6eEgtNYX9JT2YHpKHDpaGythUYjDmJfddVjxkM7zaL7JjiSFKYme8kFYr1ab83pxEMgrB8Awf",
  "key14": "5komUSjzUuYEaYCykbXCqm1jh1PkLDzKDgCycfNayF8mgTDaQ14iw53KZJVsCSEyFzofH7jgRcvRn9vjwoCdhDtK",
  "key15": "4AwWN9PZubLtJ67navPf8JS3Yc7gNomYMXwxUNtwY4jqBr9HjR1BDcpLupEUbrxjXzBD4Mjbb28BTTX42T6RSfJ1",
  "key16": "4Fo8m9pBC2qVRKUEnaaecz8GEJjCoXD19Fa7wdQtweFLJRQ4ki2G3eoPsPs67Wuqb1iG7sY3WD7mJ1FMxNyDvaLk",
  "key17": "39Lv4Lzqx6FxJpap6ofeHUyupPLmE9gh6XQ3GFCywRCxoVvZAeyTvAksb4MiN4ZidXg4687e568Cp9sNKqMyivkw",
  "key18": "2Apa3bKepTzXUS1i9pvvxBsFyk4ZbkzGsejCMNJAbP7EwrqgoWMqpfTLKsvy9pfQwyERArxKRkFmfJuBZw5XX2g4",
  "key19": "XodzuMPgXo4ZNN5WBooAMWjxsZVd8u2Xkt1LxYrUp55YdgzveCJtfgmYVXvPN3sQvzLTQfbMtR9AxyXeZovMiMd",
  "key20": "49odj6T8F1BBqAYBSvru1WWnBSp9cppYVbNZdkCDLAMWYRidhFdUMku8ocQwCJJqLBKypAhmpUdN4YxJ5pLVX2qE",
  "key21": "5dZTXRNQ48QxRAVxupyqBFCjdZop29XcHeVDK7RvCj6ycRre6tJHnuNmSJHfnDHotbZMm4pBuKpGThrDh47xFEdd",
  "key22": "f6xfJqioyVDRfeh4fBX5PeL1c8LqqcVnCBwjn4aENJC4ZBxLEUyTUxLBmiRzK2gnwgPBtyj9gvQaJcbL7FnCtTV",
  "key23": "NMC6NeiMdpzEuDTt6RiYCB3vuknfYNjDm7x3hPFSGaJvPKuG9b21ppztYkjDvPhkwSMfwkdhH6KPqXMay8jcg8q",
  "key24": "2J3g5sYz5CScgE2Deppb6UgwV3ijNMCbuyDNSc3qqto9WDxPUephPRsyrPePSVQk11W4hmRtTwpcyhRY4pgdYKnz",
  "key25": "38pHa86F27B1d4LWBpwczkki5KgJ4VqXB7PMQWcF1sJG7NBQuAKAhbLeosFepf7icDvbiSnJreNJU8ssXubro7BA",
  "key26": "3dZnJ8442tSHKemaQPsft42XzMc2dZCbixwn5SbyNbhsDBg9xf6Mgd5D8Rmh7EMc51Wdm7cABuCen73zBr4CkJs",
  "key27": "5p4Nn8mvnqkYVtwXDJQCX5kXg2xJ3zKFRic5688Qbc15t2Q7z7bFiKSDT4gLRpi22bXHFanvbHeUiXhjPfKEQU51",
  "key28": "qoh7r8cZ5xrim1jViYp3618dMBkQspbzSmTZ267xKBvShitd1YUNaU2sgHn9V3PvM11zj7JEmAiMxhZgsQ372j4",
  "key29": "4dqdiGa2NkQkvvTij4aihSSFYFs5wiCJQ8kqm5YRgeFvcJyyFhyCeRtdwGWxBP8eUhAv43B3ruobeTMDHaGdnX95",
  "key30": "BCwHdr68wo98JbzNPEw2JxkYWgd6QAYCDUBg69BYxp4bXV9gCjozmHiXFUMNn15SQM3qy4oDJ3hFU4AnUQoubwK",
  "key31": "3GLEerYrLRW3sAjYimpYJ7nPkkS69emghBNSzEtbDwAd7oV4STXRhKXTYey9nQ4VJ1BoskkFwBej5Kds1JjLKdwh",
  "key32": "5vUfMXnYRYH7SemnhFwtJbe1SwjhgFZaER2QDWrRJ6yD5aEQ6dnbH572Ep1JEdkwUHLM7ZXNWjWspoZMez2RLRWT",
  "key33": "2jyRHmfUcz9VCxAhydBKVGyQBA4kWramXUre1v5ip7ife5d448eJKUc3cTacBVeBuA9tufkf2aruBzKjzXsGpnQH",
  "key34": "66ovoZwWr3ArXYkPgmzA4L17tWQymUkZKcTwGpof8QNCywPcPccaNW1QohMVdPFEfjJTqVVbHzkztPsrNuL8qppf"
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
