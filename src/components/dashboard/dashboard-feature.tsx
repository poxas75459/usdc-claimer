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
    "2HLBgdD2KPfaHdD2PCt35oT8W9UkZhfQgxjpaw5nd2LbCLSJWP6SF6HxezXXv4kyJryArfLPMJNwkeimc8NY1d8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661NyfNVBhGrBQdUmGw4oA6Xe4ePW4ahDbzPV3uD2mFemDBKGuW6AAohybthc9hCRpTDdJafddus46ZFadqCDkjV",
  "key1": "2gTLnyqEtJvAeg4uUEQFB8eCTWVUfmgAZ3ha3gwUFDeMs8w4ddKJBcdRex3x8JK6G5YRMmGHCXyj7ZEXQ6kz8nMS",
  "key2": "4w9TA3FzRkxL9TjSn6aGjCULuidSQ6oRhmX46NUuLBsQNmbXTPu61Myx2gofxX6wxaCtpBsTJdc8mTKy9XxmKsJV",
  "key3": "2nUpLzbCa9F4gZSaPLzGHpPmB8MBGYLKxea1wjcy4Ee93JGpDq3BqU7sBy5XALP1YAMGCK2SMwU8Cmp3VuBy6ZME",
  "key4": "gGyThqUc1QVVXiD7kArpszTfSFJMxKtntqkjJG9WZJvSGYJzTYWqKGoDKz6iayQAHkfbzwLLvgaSKLMZYgr4yUo",
  "key5": "4BA5HaJTgC3EzA7Maudh3QTcGU1GENnMaTZtZkAd31mr9KCQPpsnBcWgR96zBTw5i88v7vxKLf3nc7QT36i7kRiG",
  "key6": "52kEJvbdAbEzXRe6u6F3nv8XZXyAb3T8ig285TzTzrpmm1UcLYLZQuozdSPCQej2YLZi2zXkqtZuGVkduDtJCu6A",
  "key7": "36aipEaMXEL5tzkj4ZtUWJqHDW5iVkW2hfT6icH7m51GjhMdMmaDo3aXPuZZT333HJ7Q2HRx3t91EfVsSVzogviz",
  "key8": "27piwE53MXShw9AUsEm8WWS5tjDkEZ1a3kBfroooxpEcw9ozUeasbJC7R1xGuLbwpZo8vqRTXStVo9cZa44iWtMX",
  "key9": "3SWaLsDGjmSAgZqYVvEHVhZExRSSq8YWADMJp3ztvrdvsd4t99EVbXZaG7RwwwMJJLGJSg3u4jPLBbNpgEfBjuU6",
  "key10": "kGbBgdmzQhXWDxSE65ExHuY7oAtmdsLaVs2LtJnMwGUnJfhXn6zRcRLdGrSYLfnEzAnqCwdtjT5orQubiAH1Rcn",
  "key11": "ps4v2Qk1B6PfkyuERYhVtZLu8WJ8gNaW4eo7AdaCFhdwFwpgrFHKMve45cfxYn8wpGBF4z1NpxjvUHgNXctDNPL",
  "key12": "2YY4KHCwdCfBiKnSeogqsm8dji5qz1NMXS8T8ySna6LkbTiB8doWHq6YMJnex8nNK1rZPfx3LE2GNX5Ei1CFFvrM",
  "key13": "4U7YYi1QscrFPKSYXST1HvUA3L88SuUZFAheW3SStDzdA57PE1yfTa4qS7NZSGdghCvviauo2aru16dmGhyLDzTQ",
  "key14": "4nYzFEifUxRhXGBTpeCYEZmemohFVcfZnuge3kPCq2QAv5TmJ4u4fA7w74A7B6hssi9LmBgyveyy2jPvkTcfNPvM",
  "key15": "5u64ZfEUMJg4mqGXA9g1byqUoJQauk77iq9EuetfcwhcdtkBhhyRCamv2oCDcsDtnsPGzKEnaM2QXimLZBFsCSF1",
  "key16": "4y3oWgyEZi43dBGK94hrLpHeMZgg3V9BPrHAmjdjTdigZV6Fr2qp1HemBotyZzCjd1e3TqJ8TgEKdhFKxyEPGALJ",
  "key17": "Z9cMcLZvfY8XpYfrRnJsqYt9gU7nD8UH2LYhjT8Z8R4EkGZwNeufiiAN4a6kKBgxXi37YEJy2LhWsHiX9ZZSBxv",
  "key18": "61gcAqG2G1Pat9ZFpd8hFbMtWg9R89FtymgT8ue6AW4FHdAcWDmx3sNWdvFNbN4eFkmVnB6VUQYYUtuMLXzqJgRr",
  "key19": "3XktPMwPodh41cjGbJgkS5fVdgQU34WbCbwrJ9uXxo9HfFekE7izeK4JhqkM3vKEVu7YzkG83xLa2s7XgvukRJPV",
  "key20": "uAMwzMarvNZqZ7C72j3Nw55VxttTBPFTZuZ6Dx8AnVKd5ZNhDdptPTxuhSC9o4iyTixsEjwdVPLYdZWfE3pbfYK",
  "key21": "33R2RfPQSJvvSAoNaKGLrrDfH7tCnSeweC4rYTkdyAsDEm9fL8BMgAodKoHvRqc1osYJBGMrG8QoPw2HVkoWmkxK",
  "key22": "3q8gXndZbZRg7tFpyBpDZ87mn5VvPQi5pBLqDR3jLDcyGHfhbXjZrPYxuDUxNtqxBWtgNghJmW4fVsEPP9bhRj9M",
  "key23": "35LbpVknECxRT3o18UVfk6ibTLBXf4VcXYYV3TtqBpfkJERKiZbeKzJnJuiaCEdRgYsnMGg5V62opLr2eGxAiAcF",
  "key24": "57X8XAXdNEpJyua8CaJrmuvAGebLLf8LovwpsugyAtrkHk2kagmqhweAsFsxXvPtm4YYHNu829DxSc84P16TbgFc",
  "key25": "3mZxupkYXhS3tLg3xdFjPSzoYBr2djPHiN2Hf1oqW9r4NtSnzgRfRunLqD4R2o6XonARyNq33tE4qYPpW93KqBpc",
  "key26": "2v3i88Trmeh11vs9J72LLqPrjMfVPfnbj7QYxaPNtnNbfjr8jJ4U5DdwrSdqJGzAfctNsE7Qh6az3YVkWH86avVF",
  "key27": "6V3GYzEd5tJabe4mxXy44KmKQ3w4P8bKXBut93AbGEP3Xs66qrmxKhTabL9cw4KFFmK7CAbBFT8kGTn6stcFx58",
  "key28": "5nVCNz9yKLgAf8YnTxsb3S33kCrM2pNh87F23UX5apsSEYwXQ9mu2A5NVtq3R3hbwmnicczgrbVuPgiBbZyk1Kam",
  "key29": "5XZ11Nen5eW4WiQW4RfCZv3G92Q8XFegjkcLNtib9w4PQuUu2hWfM9pAvjXTRZgETFZ4cB6Cq8p4G4KmPaQsKPhz",
  "key30": "2guGVGzKs7H4hJLvUyyahpRBZSgUGwCacRBhGHPfbPDCBbWC67Kcpg3prj6S1b8w3sLDUsFai8MkLTbFoJ5axGvK",
  "key31": "4Cz9bxdTZivkRmiY21P2iKZEBciCcUvhLfQY227MuXi6BxoxpKHFFAbLV1oSC4u7uEWpWgqMCnGarBPUEfK3k63"
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
