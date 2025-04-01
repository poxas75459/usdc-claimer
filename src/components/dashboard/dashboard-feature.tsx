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
    "2FXoCLoEs3Lm1f59erY7vF3jLr2oswvQYroVQ5tRsgpNff7uKwGggcpWezPVwCyAD5qkkoood9p4HfdpgLvLA1ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "euWq1RCV9MyNwzaqpMMJzx1mSeFNheFTNvKfarYpDW7N5DTXrUumMb6pw6p1Hz5LJBUKpubFv1qZNjzG5MWSWJL",
  "key1": "4JfQTn2ucknHMULKFuPbg6vmyiQ5Pyt3md1V67P3f7XJDjHPJw5HngRfsmF1k9Q5CoWBEuRNKLJBfXUcd23weGFn",
  "key2": "4uTHGEVJCah2PiV78wqbSZNYn8h9bRWuLfU8mPAp96Y9VVG6sjm4fFW3CuaYKSrXxD3NeGSgtobSLNjkKW5vJQAj",
  "key3": "2gxv28fq1Ai3uRSKCXdnDoT9Wuz1jub9ugXq2YyGNsVzfKBKgEYhJJdFMU5mMnBf89ywuA6fCYT58UWrZaJ2eP8P",
  "key4": "JTd7mnQBGgaRvD3TvyAAynjFEXzHB5fdrAJ94VVvmPqpK8Fu6cUui9HxZ7ynyK2kfKycS1LwvpAghtjTPh9TToC",
  "key5": "3sDpxV9wSLbp6av7AwyusuWRiYmjiZREB7LWdFAc5Hg91ru7X1PpRH2hRQMp8pZVsyb1sd2G6dmdNP9po8j9MSsx",
  "key6": "4mPwrBL7KybfV886D2ew1dY2Cjgds4reE1MDS873Sdov3GmiqBhRuWQqS5o8Fe4ZU7SXC7S2pGSXM1gp5MxKoVfz",
  "key7": "3zckP6pHSLY2TgzYFs1YP6d7vG2mx5GcEAfTmrtGUoGNDQNNcaGtAkUm3yfwfoiuZDpkJjha8WMGfsFmFFheHkgt",
  "key8": "5La3E97Nnfdz2EvKpHNjfVtwMUEnNSDVWsEsgRNHqfCdjcxBa61jDdA6F3PEy4XB1rvFxs9tr6KmUTyzth7pLEso",
  "key9": "5foSzPUavAyyg9R2C5ynGr9wieeF87fh8PdKBr2H7pDREfdfYVWT5apogNxKD7tx67CL5scLZm97od1m4uXyQJ97",
  "key10": "3ZnykNq7HGZ6BoTWhZqbVT8tkt4S7kTKynvfQUWWywYL5Y3AHDcvTZsr1sTM6Sec2QSukSNCoNBfU2iuxWMLDZG2",
  "key11": "4jsvHa6wky7a21bq4hUhAfzv6AS1srFdeT74nNSJ8EiLvPTivTmHwTfcPvjrwnUhe5t9zwJVa6mzjpeCfyPB464M",
  "key12": "3yuLfjDPcv2NAbApCyKCKovR1aVcdymJvcAKRo3baZb5g2YwheKcPtUMp6JeTVhwfTcWDHmB6rjh8RmcfGYFi6zd",
  "key13": "3p3frhwnzfrDZigpFPSAua2gMg2XiT7itMJsdhKkGE87zq7kTkXVdyNXczGSgxmdt61RgL81AnP56CLjTQWCAwte",
  "key14": "3jheJxpkRC34pgHEYKYoeEWUWmze5SnoTBGw7Tos7AhLrzyda7pGYbAD6mdKL4ZAxjcAA7mvNYnzhSg5tLT4y2Em",
  "key15": "5mCFu8Qsm3981aGMMCAqD4ytBgkxbByYBPgHKT7s1167HiiBsJS5fARhStnMw5ySFU418X4X4mdUtXH9hufT8ZLb",
  "key16": "46rS7u1Ty8rgWYLKLLcjtqYsgSYADs46SMCMmMSdppfgRK6Uxp9XunPTbCpVgAtMBXqbrLcAcEBVfgAibPuMy4Db",
  "key17": "rPtU4MBh1ExgBccYTbocnB3U8Sz4ZGsp4GoQU4GJwf7MsRJh2w6qBMHgiCqXactZCKjxam61URZWnNiqEZhfgMV",
  "key18": "34f2Cxa5USWp9TBykgEFr8JeF77PvzXMzfnukDioSyve3FEwouB4Hh4hgJQWDAvhJLcE4b7yHvfBFifj7Z7wE8NX",
  "key19": "61mAVnXUzhgYd83tABbLWKcfe6XKgZBqJBV1uAFmLRqxerjHe7wCuSGfART6fyBKzUa3LZT3vMFzmFhfnrES4tic",
  "key20": "5BXm9QFiKcDCRTptrHGBux6KMVk2HcDTSV9bfSQfGE8hmAnh4B233pr2yxoVz6feZHcVcpLBGMZ1QZH87FdPVih",
  "key21": "gCL366wExmzyWCdx4inPsQnD2qLiEYTu1KKkcdQBmfMuC45HW4Re8QyuRs8qSkBfMYB7PkTZSk1dbaArKNN9xdy",
  "key22": "37QKp4aQxrS7cavyvj82VSLxB1z7P62SLjMPiFhab46tsP4tENPjjv7BS8KELh4wz5HYuqBxS1pCtW4kD8MRvfjA",
  "key23": "3nmNkHSg6jNwerwCF67zfjChT4k6p4FSo7VKdGJHBLRaYqEmbTrJpHN4Zz9M6PMoM1cEfkMhAZbB7G61BQ6rCfSh",
  "key24": "67BqMPF6VEpzMxTE2GUKXFqdTsW321CjJSYRUP51izMrFRw1QJj2AUHudcLC3KP3dNHs4zgMoCkD6oAMhcmVWHp7",
  "key25": "uTiwu2BHSk1CR8MrMKUofGsAGv6HpDtDRG3KL1xWriRhtLZdQM81t11wgVpTYxdtwShZmWJZNDZ8t8t3GUi7ztF",
  "key26": "4xkTLBo8LmvGhPMx4FoxVebJrERjSK2R9Lz2iPQsB2DVT7R3L3HDkeY3p77HkyzjZkc7Vh7bpyDCuE1NXicu2HjZ",
  "key27": "3Q17i5rZrW5kdR6jQfiUBaJT2N62z6J9sJDAFZuhsZtNipbjUJtJzT8LAt1THKyqQoqYneNiKEModhcu1SGaKtCd",
  "key28": "65cLWxrBBfqbqSn4EPuJo7QAJrFqn7gKUaRXNLGBgxyw6cCrAEfFUbGDJuYd3ZJYJpdfMmR529H9ivk5DVXpXTm8",
  "key29": "4dhqg2h66X9hzgzy4uBqqj5jdTUXEHRcVBhUDrETPpWh3Tbq3WYrRR9mCrQbDeaaC7aV4DVWfHdEZgup2QkrotZM",
  "key30": "36ngKwMQKnYsUoHXwYuMWeyV9pQB6EZfLXTxHZTaVvgc4cPqeTBEGyZMtqV5HZXQNdX1dUpwEhEmmPZXojyfnPtF",
  "key31": "5LTgVktahz9ZMisEvWVefsozUkFvUvC77s9JfRCj5aNrhHr7KDocLf2MbKfQSHzXTYbzvjT3qbpxBpFwCvEoMNJe"
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
