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
    "22HYwzrgcBeUWqpGujUx5CJAtoxnTH3FSqwuU7XGdiBNrctPWH8RHRvLcTWXUdj5Fm6KSA6FtHV875vD2htyNCpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfNJGndDxUGEZpoCpjGvhJwTuZDr2ugjyMT4AzohbUhPcqWx6QqtNcSJ8Qu11evNWshhDGJ2vJHLgoXmSG4x9BB",
  "key1": "KuWDDboVH3QfcTFE6DUtQbn9Ho6C8qoW6oiesk54CEzH1AHhqfvgTrSMBujG4DgYXuZD5rxSYhzda2GK6uLbxhj",
  "key2": "4BQ3HWRxqigsP7UUrKvnxWducxxvuQAhfredrjcW7e7R4DVbLjkdrQoDZHusmfQppVdr29XtX6hEUkYC5Y1QbpmU",
  "key3": "4i3a766i8itaevxtYQeWgX3rnSByPnba9bYT9mN1VXfM7PrEmnQPxgbTRMeSoTVvKegxqzarZYy3dvCAhm5zK9Tk",
  "key4": "3piZvVS3DWR544KRRP3ncu3PfNak7HNgvdYAytESyDK4etf1NfF6oSRUvkw1W6uASrqGuc4RTzJPGRV9wQ6d5uTv",
  "key5": "5uRYrrG61dJNZTBuZ3pCoUccD7HnzShP7uJdfq4JMXscr26QtnhaKzPUv1RCmxnWL4h4TV5qp6GStzyPuhDk5ita",
  "key6": "31jGbMmJYXnv1QadMqTJqvKMUqKs7KvmgXLcytB1LKRF6h1kd5bWLx6KpT5Y5ZXk8WEh6JhKyYfyQgncDzgoEQWr",
  "key7": "2uFHcURfeViyYS34pQkPtLo76GF5Y9cK7BryqLNAQx3jwX5wvmQiAm1SsWEiHRGNgvVfnzRyj9hogQX1XczKJMy6",
  "key8": "5MQ673QDTK9d7MtjL1DA5YiFy8hNGn3mCqcuw9e72x6HhmHjfbjZtuVAUh9iVsDLenD9yqGoUVfikNovJnTUWsmP",
  "key9": "38tQtT9PEDMbnkL2L4EJf95PeGikjLEja9weTfNn5hh2c6dUtSRXiiaxTFodAch95aAPYkNVsSndet3F48GNpcTP",
  "key10": "2LUmU5DntjLJcPvRDKpakzL4yXBnHQsbutemQAhe6q5CweA8rHbpcBCp5jRkNtHbs87B8KKmfy7RENJjKg9GLj1d",
  "key11": "4v8o9L9x9UgzddM1d4Cuxneqjhmj8t7aHg8WWfLfEV1vrDYcozUtS86yQM8EYAtwWodiEZFU9MWcBKLTGjpVjaUd",
  "key12": "3WfSYKo786G8J4MPVzg2E6DWHqrxKvfynGMtY7CyKBASZtrgVPAdc2WZVFZhuHD9gUc48LsJZtQKNEAfANpzdSWG",
  "key13": "2ggBETwD44QV2zoSEp9ofhPq1iL5YZdChwDxVBMREULzm7zr2uJg259WFLu1Jz14djSjfThX3Jv1oR3XHJJKPduz",
  "key14": "4SrXuQ5hspRCsePxSCDQzrv4Bk8uUtkVorKaprGDdrrZtGCQp3npcG5TgWjVtk83GWUgma9Fk8UrpJC4JYGE7Eq8",
  "key15": "m4baPfzuCFmnbucjHMY8n5j2cAMmuscfkPmMQAxA4DFp7aAkzghxF5X5RGerpLBM2zm6p7rL4L9kmHaUWaUu3io",
  "key16": "4Znipro9ST9xQRHJFZYp4PDtbapby62MmFjsNBY15rYWtdp5HY9UYpsvwXEiJi8sQz9ZNeMy1YeSTyK27uWxYRuc",
  "key17": "2KBvESjJikaNwzBc6YkZs5BxM9BoTteC9Xd27Uuq8SncC5fyjTghwv2EytunLTu1RC4asjqabV1qGGq4jR79k48a",
  "key18": "36gKipSY9QUuyzk57sZvNhKskBhUZaLntxD6kSB4VW2nXUuPVA8UVAzr2q4x8sMdwYdQDTsngPhmbHReotitYzLb",
  "key19": "naKHrtLT21ka66oDABn2otTH9w9PzQNeNnqZ1ANKBc6fsh1fs9BtHu92iPJgfMFsDoC1C8uRSPo8qzptkUkTu7s",
  "key20": "47AUaghbT6WYhEokMxBG1B7famYE9mencepUrJPBciq5otgaPJZvsRKkCrQa8KQShqG6hduo67B2hioQiSQc8o5L",
  "key21": "3WKqmp5RWEnFvmZDPpwLTTMshGLDLZYJPci1zr3SvqNkjA79Ai55RPmXaZwwLG9B244tNQPBqDrTZja7EmytZNAo",
  "key22": "3zT62wRw4kJMXkbZBnwherCJxAADRUxAnyxPXgHRmG3G52DBisoDfzH9LjG5GRnBvSKnJG7DHGVJMRKYD5kWjshN",
  "key23": "5Dty7gewirHaGBxA7C9Xp1AAnkVM4YeccXnViLrwc911Fif1P46D38ctCRkeXUHgwR2Up9UKzypRY96EYpp4Piz",
  "key24": "3wXSrPcC6CqKxeMFnuTxpPjSNuGEm7kiGnDfmWET5d1eifLUc1Jev56eQa6oAuSQxwt6eKgyQz7W3vLN7a62kYNg",
  "key25": "ggSZFCCxw56xvwHE4gtivs6acbhpckehY3SRad2p5F1upepCwJzCiw7bG6mLfmr1wGu6iJX1XDrsS9ayXER69ks",
  "key26": "3SQLDyTFSEmfsBjpGgTFjQuYBitprem17zSyhTTdErWHkVby4N2U6HoLzExJQEeqezW9Pv6DVpk8TSyE8kuoCRqF",
  "key27": "5f53m4V1y44Vt3aT2zshxiWw3HoRpNfqgWj93yPdXhZshuCWsnGZB8EMBdS57Aq4utTLAf9QEUNo5z8EvY2xBY4X",
  "key28": "UjfB4Msmqpe7MdZorNgWxKy18M5jSfXKVavLjAWE4rhMAFiJXfBiEFxJuEfpRgFUCa9ogwataAZUeh1qpR6JCtv",
  "key29": "3vbr4xrxH2HtP2kpGbYdeUKFhzESKzgz31pMRz5cHsX5geAnPsfTQXgBaPajvQKfiJwqZENNAxkCcLkyuRxjkWYA",
  "key30": "3pXVe1Wba5H8iVKN3tHDL6YCBJhtUxaznNSCdkRJZLkXQTU7ynFcsNo1A5MTXApLpNr2s2oNLZGS6JZ78SqQxBFn",
  "key31": "3AycZHpnr4gFSrrbNym5HQc5wGa7hV95zy6rrgD6pDZunJST28sAKhfbzy1CrYHSJZiMQ62xSbPW3dcGrS74mr6S",
  "key32": "Y2a5g7JP7HcW1esuYR59yfnsMh2x2Uf3K1dcdvDJs14KoBpwqdzpJyiH297kqqysimbpEqyWRDeptUKPF6VEvyb"
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
