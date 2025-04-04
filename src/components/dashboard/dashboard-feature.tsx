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
    "4Yn3zZZptMoqPtt2oPsHCxb1j8hribTq73gFQ37D31X6BnWCo3icfH6mkK1uw5w3YPQ3uHMGsRUm87QzysbKFUVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PxhiDnXJzWqirNYg6Dei26Es5VZiwRDnPXZcm4KhysWW6hvLErS9iarE3tR3AvVF7iLAfr7Mc7MoHnHMjMBJdh",
  "key1": "3N977VxxZHczETUQe32gNib9naxACPEseTCW3mP5xpDBgQZQjYu7mW75x4hSmyrbXbwqrR4BuqRiFifc6vqeXXhP",
  "key2": "4GqqHuvBpev3YZMQmkBc5yP1nVifX5HXtpPeHFyKxiNqzQJHPHbwGoFfHqPTNDXurTQz9u3Ji8JAakURrgBNgQS7",
  "key3": "4vV9mk8PdKHhB3cAjwsk8jxWCtJEMSjwAxhYuyMdP7nqAYGu2bjVFQNNfFi4xCgFy4eb9sg2RmtdwcsCpnDRX11n",
  "key4": "296mgEsq2GVR4mXMtmGa1rxDJb4nBoX73cjnXu8zQFtU2FgeVfNgxKA67wUBgYCwZL3jM3dHzTUNnLU5Jhqk1NXe",
  "key5": "5evAa5mxabnSxcJCypRLzkP4e3BzYbjXbREczM8wLorvm5i92wUhu84F6KA2q6ftnwoYyiLE7LZ3awa5qZWmTmET",
  "key6": "5AFeAdgv2hQ4qqdga66YLe9qnn8hdJdZunF2F13jcZtx96EDMXBviR1r2KBKp9TaozbMGRWqFhqK76DgZhiLkjHk",
  "key7": "4xmV1orvPT2vihefVFDVhFjiLc7XDP4beFsEcoPqrpwVeZw8Yxib5Po9BxNx4GanZrP71kA5gMdvkTBUVxgg9oa2",
  "key8": "2BKve3sFt3rDTrKhiYjbL3LHbAU1uyrXLxbutqQtVfnfVhaVo5FQFzAqsY4jhDtst6kBL6WaxGYVFs8Rsjw4rrKe",
  "key9": "2RbvWg52dU9Ux6S2dZBwNNhj4r59Jfaw1vG1mhfwEX323swxSZCcgmZxQV2Ui1qhUycLavUyZsa8B9QGwvSn2Q2Z",
  "key10": "4tw6sh5U6Fmxs7Ky9poUEEYgQKD2EF5ojXmX2tnv5Yxr2N93TZCCSNynE5JGS11X9fDrgx14KzwT5B5BD1xFF79k",
  "key11": "2a3N1GHmPCssmnpPpWGdJMeMqHtExcU5uK12aywn64mW48JZzvn7rx5bj2dVT6NFMzCCKibwq9ZUwZJDUvETRF7Q",
  "key12": "uZT17jhMnPR3nyfp9zDgaA7AkBVmRbSW5UPZGXRCQ94S7pvNdbpH8vi8pZfbtGBrumPmyd3Kai1JUpaBCR7UkRu",
  "key13": "33n7SSXrnbZWqQFT2sSdBNoPo9sLGQg1xBnYuzjXWk5QLt2Z7r3WzV1XpqFWPNVSPaKc3WTYoyPyBbjJXJfZe7P",
  "key14": "5GqnCyM4u2se3iAoYK8seGTdxR9U7FhoHYsZBCrAHwCy8k9BfFLgujWKvSBWaRANrgUnT5EC5RWjQPeErPz4xKM4",
  "key15": "4GVYeNbiipuwnDkuLTG1MjzLisRrddSRKVEpr8daXiZxmtRLf7yaxrnPHUfvCgJ9LpzYi7mkXZJfxSpJfUP2i2rp",
  "key16": "3EyrWm54GrFtkezYec3VMd6tFqbGkW6czKZKNp6HrS3Aga7SKFtKkKffbih1u4yf4y74CW6DE9yHqZqyPqbHoPYE",
  "key17": "2G4YArZdLF2TzxXkTHNMHPW59ECAwNYnhWU6qgHhfXp9TCKBrZU8jQDN214XCxTnrtRYAFvZUA7u2zC3BBxBWiPB",
  "key18": "2f6yrBS6JWJQiRCGMXwpFd3tdcWfnPkGNMRaQ4VoFtZSSyWt8Vwcs4ACbr9qijfxe5YxJWvZNLvaQTqmPx49rxB2",
  "key19": "3h6uzkwtk3WdFqTVgqTwTNXvP1wrVufpan4zzkHBBxnTkeNCuxChAayhvPDJ27ULW3Tas2HuAYzPEofzWEhxKan4",
  "key20": "3SQgymvLPbDPqvtRdZVRMX1mztqZm42Swj8iwNKVydSjqv2Dsc5U3zLeJSWMYcuWwS4JY4W1G6eFf4MSf58zb6Mg",
  "key21": "4TH5J8CYcGRWiLM4UxCivFaeAqpDybdkMCKotpBiMSg7vqfUTrJMPoRMeSxKKyFfkeHR9vgqx8M48fskARfnS96p",
  "key22": "213KKuZRpSs9qf7bC9LVaNWrqN7VrNbqWf6JEkstLf5AxS4mfP7s7bbUZm1rmHsY8kwVy9sZHvZqUMmey6qYmrQZ",
  "key23": "3Nh5p6oBiBqzNGrpKRahJQBpZzwHRfzXCEYcBfph7XtM2TJkWxLZ5cXfWBbxieHMLqoiNwetKRbkLbRYehej8ct7",
  "key24": "5Ze2YhKRmbKW9HFTcgpNKZLFRsUWgRiNwqfxo3aquYZNRiEgGDjxuotnZNkS5onfPEXKJ2SjbhpERbzN7sojHNHL",
  "key25": "2Gv2DHAdHFVZfWUL7g9Ffu5Ga31NwvGoWEJFwruJJTmKWgZ7ng7vNrrWFqMq4id9qpeiwH8fMzarCwtEg4xbCbwv",
  "key26": "44ZCFQtcv34BqWAvkAP12TdhcVDNyke3TkuXVZn7mWczZTo9PnpNqkRks6a5tSr2wy6TcP9WDaA3SCe75fDrgVJq",
  "key27": "3ssWB3rjTCAaEmTddaMiCAt2ZkfE2DzDHdUM2EKsLJU1Ps3sCjvz6s61eDeTYouQSZy4WQ8dQFxBwx9BmSYvaoSE",
  "key28": "FWT34aHemQvYyNhjFcErkFggDmi2csVodbajdwfUKxjm25H18mzhsnAcMkTWU8miuwe79Bac12U6oTL9PKceb4t",
  "key29": "5tr9Vv9iPgw4MRVwPFyPniK8VG6izBzTGiLsry1H5eNMfz383nvNC7UnuEWejD4XqPTxaJzP23ReqvuZg85CdS1n",
  "key30": "2q67LhqoksQvQjm6YuMP24akAejoYXHGP3KA2eQFgwGq5yp26Yb4m5YwqsRNenHG8S1DosYMfhtZmY7GeZHzB3Zv",
  "key31": "3xJVawLamqHrM51iVzeZMpvbcMEgU6xudjtwVksFPivm7aJVphEJGHW8EXakyYXJeAePrXPUrsgA5eM1hgcb4A6x",
  "key32": "2XFjL6MxF5E7WXVLpHbPPoUZwFjHc2wkZqUpP9k4DNmvLwDbRspjA5tLLDRE3f6eLgEXJ27EoywjatXc45nmqQTV",
  "key33": "3HBtQWQkhbwJy9efdosTpvy8MVMqcM22qyXZbrpUep32zmL9gmtCP9NWGRrJE2BJtPLyP3Qw8YTW6H4iJvhgo35p",
  "key34": "2pobCfszZSyaAM8dxVZKeuFMndvqkzZVY8VdhnHzdAP5gcvMMq8FZRLDmrwNVhrW7Z8F88hD9XPr8djUpVB1qzJg",
  "key35": "3WuMSQwb6bHn2qoCxW49yb5zQKTaeEdZ7dsfSeybeLNQxCY7bkprk9KvYKVCBKYpp97KwYVLUAVaXa7ZHVcUS8dy",
  "key36": "528BFSpyBsz521h6CPNKmq4qSPcfNnW31WUYfTWm8keA5V8r6ALJDX39yqPt1XzAAnzXgXdEYsCJD26vUSwBaXCp",
  "key37": "57xquHizeaDGfYsGZ6uB31MViPTWPcMHUMRSFjL42s6mSVUFqhjSoA5aUJB9B12BEc7qLxkXUoQgL5MWSr23CtGb",
  "key38": "2Cwo7okNzUDcKeLUJLMKjGMSQHpQN9ejiKD4jLNYbNtr7NX5fWM6okVnVYH7KxTYdaZwhysmf8kU3anQDnGk4c78",
  "key39": "5oQk6t44sHHX3qf61grBQn8ddpp87GTLCTv5HzbThzgnktSFGMjbnqbdQjSGRE7rN2sqjDqkT6gQjB8fSNt9cX62",
  "key40": "2NtnmQcqcPjCxK9hru44vodSCCGA2yNn1UzeE6yeBbrBJEL8dPXT6mCnLPNiN8wKjsKkxgurYJtdcSzApYyseBUz"
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
