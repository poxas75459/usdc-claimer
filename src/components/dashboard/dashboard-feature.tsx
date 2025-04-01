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
    "4BvV1HLhGxbPguEvb7g5bRN7hUppA6uxWE6KfBP1yrpBYWovya4wi4bbGPX6nWMZNuTjJ4qhEQnLoKbEmmvL5yXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sh89aReGggPJNdSGyZqKpxw9j8VHisNMwhf5XZyc3eikW6S9sBDF3Qwa1Woomuh2dw6B12TLhJ3knB2r3Rz4Zpp",
  "key1": "AahgPP8uKJyzdcKfa3kv1hHvikLKESe7xz5DTBJn3SxT5rE1ZuR7hxaJT1AMn9oC1JNXDt2ofzSiMsEZtyty4cC",
  "key2": "4STWUkHuzkieTCnWH6ZGQc5MMEwEkPUfSH3TTo11MpgpWiJvf3u8VkA2WiJJn4iK9BQsj8aBapNPoDAorZtobYGf",
  "key3": "3ZeYUzJZ5kX5GmMp1BcGna34sZAN3bCgsN5jHKypqHGYE3c1Y8DtMkhTnwA38tU8VuFqMDspjqZRYPsABAL4Wx6P",
  "key4": "2zDAFjd4zftyAHrCmZPVYeBxf5KoNX9J1vHSDEHt951xX77VfeL9sXk9Cn2BrXkaBmLSC7YZKovfkc1DsDzyesEr",
  "key5": "5FaCfkGzF5YNytj7xbXxAv3X6NazTdRvLNUS1LdhYWu9cv1AjwVGC1ZWorHKS4JtCBXYr8krKf6iFiLTNMGtXC5K",
  "key6": "3oH7Jks7D7BHQXXE7jxPtUcjyF6yn5kJDTWUbgbCH6xPBjHKBUS4Trwy9aEdC2jakyoMd97kFWqHo1Yd7nxvPZRH",
  "key7": "5QEFz8md7mkaTAN5yhwkoi2DbQ2kdEAwMKweo5kEq1hCTZ74oECirsdYMetT6k85tJQJcf28nwSE9Hcs9i9hmRjV",
  "key8": "SUwTAHg5Hux36bxCV8kYYa2S5EAkmpQw6UMbjPTSgX2pzfZgYsCVwEQcBKH8WkHdnzvLWNY4DuW7jaAtzkn6S4T",
  "key9": "2koTMjTgkqUFfHDFS6rbp9VWA4h8BNRZ8objk9Sz88jKisJF1eVWTx3U2tCsyMZvb8D6gjFsYDCStuqJZ7XB45fY",
  "key10": "2A3EpWuMuNpKtVqbhpY9TFKz4vCXGHftSKBjPkhBnsAku8rmxytxTXMbcJdbk5oebZzJWd4W3KWya9cg4Af2WbHi",
  "key11": "2bmKhvdZadebj5gPPKFHJa8MTfVGLBzdsF9uu3FqBrHBrF48EWxbUzKBLKut8fwdCDkkceUh98aPmhF9kBMfqXfG",
  "key12": "2ZXrBR9ugFQCpYtKdND28KcToECD7JgQN1TBtgVnTyXurctAke1EEPsGjDAULfJXgnrapUsJa69Bmk6QANj9TiYW",
  "key13": "28Mp1WQZZ8Qb6ZxDUdBTtvy8rKkqBE6d7z7i6hZgmdtGFUBn1cJK9dCbkpjtTNpAkzGmwGDwuo28AaKGMgeXcwxB",
  "key14": "3SyaWhoPP7dUgmrtUMqF6HUMN2ZVJyndznkU5sN9HuFNWroy98hFkENJD3keSkrEgqSoVHdvS4MsYpJYcgY186i1",
  "key15": "2voNQPaehhPYbQiK2UNNyYaeaJa1p7e1LWAEAMrS7PYLrhz74zZiy1j4AVWtNPuG55UFpCPHxHtmLNFazKUN9boJ",
  "key16": "2QedeQjLDtYAVcpbw7mHoeQMn7csTUJPVDazfoiBQewZGq5pMR28MBezvwxq3usNWpfdgNahv9pXD3yBqF5wGBek",
  "key17": "2qHaa5Ai6V3rjquGDMcEmiWmreSvXkmjCCkUHcC6hXaG2sWPhcLy6TyQ39sxrZLrxnfgF2nhCmgKaM7TnA8cUddP",
  "key18": "5SH4r4cGdsAm157fFm6UKZCCg2y36oZiYmNpTEcrVe9n9597Pf436RD3GViGmnLsi7SR99WMv6gS7HL72HeMH31q",
  "key19": "5LTe6LLAYQqzfWDUy72YdHPjmAkS87ZhejqqRdAv6hcQ2ZvJbBo8n4LNLL9BQfu62t2vPGAkSQ2eFB4SvjYAabwZ",
  "key20": "QTxrjPCoB1bihQNLqcs3MoRaXbNmAUp6NR9Sy3oHxxJvS4vDCmtmckSQnoD2h18Ubt7GkTUzC6GaMwQNUmEdn8z",
  "key21": "5FURWoEBb8peD8kqxmoBBPhbWPHbBZugqnKrH5Z71XZqhhEm9VuZiscyffjrZquRVPGTmn84iEzTqxNkShMx8dQx",
  "key22": "4JrHb1uLsgcsuedF9Aw6A9os8878Cih4kQmmwBXAg5w5BiGrvX4pvkCg1DksiNDeL3SUBUQKqXab7nMJmYsj7ZQH",
  "key23": "cSnWmGyF4f6LjbDHa2TDBAztR375CAYdGt6FaE5P5N26vKLaxwE9A33vz43vmdoPi2jjMBG6HKje1KwKkSNAait",
  "key24": "58QZsZCeuKbYJaVYXHzD9TKJfCsrLCrTg4y2Csn8u3964WMLHDvZNp5v7Bt8yiXJcBEZxVtkhLzyUUYSfDCFCsXV",
  "key25": "qhfSuQWoRir4iJgaTi2X62txWQ5nQ3JRoojqpgFCqhFWnAysqmkXJeEE196oxRpu4dDARkSdQb9ZhaFB2z27PKr",
  "key26": "2JT8pq8UFkkrXvuojsHrM6ixRq8dRZvtNk7UAVG9GT1p41w7o3NjjH59yDFV2gLVeJh223so1qbUAscCSrQUhkqd",
  "key27": "27Kbcv4eYMpWPDNaBHcCBpc2gfrd9JfHyznoya6DJk4sHRKu1aHZrvN7GzX4D9yhTrn9qCKhDxch4feWKhB1GN6H",
  "key28": "4mg5jnefkCtfLfJmqvi4FnPjh2Jb7KsWPhBTR4vfp7ojr6q6KKbU8EbuUAztUU78SEoEJwTDe26SkqVWBus67de5",
  "key29": "2JvmxNcyzQpVsgC4zUg7GostvsaMpHuByd6yFSZ5tzCoZA6fmrJMmLYHTPwMe6bzJoSTJnKKhCoW3tGV9th4dJsf"
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
