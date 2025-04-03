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
    "4ei6sA7tSWjo8LJkQPwed4MjS72pm3HeA4dM8rpxDRdttny4x4ciKSMgrejUC6pCCYQ3WufPEeFxzfaqQHqT7dtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXqdHEtcSg4aupMXQ5XVGYbKC39LR6f5jiJ9MeEiF5thFBbQs71LtTzBL8o2rdq1yDKwDFCLTepzo9Fq2avXBNq",
  "key1": "3mSEB9gRFayUuxyfcj1AMgjJC4qJTDwQZfAoGnnqpS5d1pkXCmxh5eCoxTZbk78tLbqyrkiyhVdsamH6axqP7jEy",
  "key2": "dSSCgxCSgmSgjJksgLtZJmTWAkgAAwsksYDyyKSupYxYmctHrCFtsEdQQqKGkQMWYr2X42UmoyH7zZsCW9q3Qma",
  "key3": "3LqyY1b9E3v4tGDwZhJhfAwhM6ronhX85tH4z2doTXCU6ypwKrbh9f6xYRTGpcza5eEd7G4iQW1oHPweYxCRJZr3",
  "key4": "uGKMVsnKsMMmUh5LWgfJoSMEopTWwZwveCCnmWEyuKapr5WNHR7eKaWGAf4F3RepVbHbQKU6PmT8VjX6zNu4Jo3",
  "key5": "5ytfKZKaGb87T7oKyt6wbev4WRzoYRtwM4AuqPZHMZC33fBrQ3hcPCBfUqi1vYPqeKTUrZ43jvfntD2CcfdcwHyW",
  "key6": "3tBcqJ4m4YPXQPztse6bYhvL6LntGmt3h41jsPh4HpuxBiBHpQiET7urGnD1BobrGgcUiHp1xnZV4PgxinpsXNw3",
  "key7": "4vzYRbJXNzxDJ2GChqz2e7LMhaw6G8AVopnWpMJ521m2cEdtLy5E8YGG2XCoz599bYVNnb6STkbmv2PUiJ4Uytod",
  "key8": "Wf2UoLwFnf2YwZW3ZkLuypvvL4wzYsh5VLaMBiHf5nLxmz9qUwHU5FMDQyQAwdsdf9V7ahfrwhBhXLk1r9LkfFQ",
  "key9": "61kSrYDU9cqTfLKsZu41mxPh4VXh8KbQgVQgy5aAS9vw5JnTWApRbfrRm6iXRTo3yoYJCKwB8UWB4H4bzXrNsvLS",
  "key10": "5CqguWM2hJujd74HYemJ3fqTDZfBpQSPCFvhXBsiEV4nMqJYVsxkmGf2AYteWUcLTvigPPgoPPCQrAZwJPSyNpEd",
  "key11": "sD3KKb1otY3vCqZvamUzJ2775dwjm2ntMWj635eP4Mro7bzq1mR4YNkM3E3k3FYGxXz8FcYPiWpq1bhxCHMqdJL",
  "key12": "4XXWoiPntnggqALRCcPDgN9NL5WPQi9Xos3NHrEsQBV6J1WjhLiz1hxKSB2hYNPTrWfYjezqcfw5uieVFKdusU1m",
  "key13": "4UwZNJdg1nRrPoRQPpCLjM92hCYb49YTsinaRSfcgNn72N4fQpNPTQA9jFprYq8JZYY2o76PcemduALqRsch8t6n",
  "key14": "3oS7Dm5nvn1R6R5Zb2hdqDaeHnyeH2qcDoxkLbMbkF5w7y7RMgXt3RFTSohPvCMt8kVjWUDbJARypEKvCmEfKJ6s",
  "key15": "5oekTbS9f3hgzMkoXnUVLNMC6epSVdqChYiWMNKJPhemFfYGEqLGhsB2PPgzsjMbeEvKv3PQUqSywFaTFKAC1uvA",
  "key16": "oUwKVz845P4zErwKbAdcVdwwwrJrXsEjrEu3Gw6EmiY6MH9Dpj5ms2SpGG9tRXzQK3ymW1nYz6epJkLtq3bJLcF",
  "key17": "5NVtiSb2EGCHzYv2KYzr112yvh46XyCbHAEU6fBpQ2gsPmYXzQJe2qfBZGnZQajUJ5YnoCLwGvZAV5pExeVdjcqp",
  "key18": "2hnRtdhqKUwpysmHQ9a5kNXGBbrsKF5syLwBh11XsTwx6kYiug7AZQC2oahmscLRmEdTac4RFnTd1Qv4jEo3Eb8k",
  "key19": "36Yi2dMuR8EjkoqjvQKCEcfeTZgSBihuEN38SdaksxJpirXo5CtnsDAwSKV7bQM6nH4nQf1mgPcW25js5JFe98LG",
  "key20": "2dm8JEeBx5zH2hR7x8GWUgB9msZH7L1FyDvpXEpxXxkvwFqP2biYnCbBQj1Bj4orqUvKfR493KVYh9cxsfwxuDPi",
  "key21": "3bAJy7DokofFeENhqusLPNE3Nv2S8zMfkskL5EzQWn6RFwVnHiy7DWPqgH2onTL9JxqEpxnZWEtuYcprNCj4KwJL",
  "key22": "rR3VCBc3WxCUdrbuAeUzYNJnYPgZfiCGnNTARRRvbgtc9fr7xyKYJ2M9yt15YqPpJyKzKumxrMLH9oEqHcRtQEs",
  "key23": "2AxPUxX4qj3A3zkExBU2gk2AoaMXeqiDGnpg1EtpqA6TvTa44AJw8wjEHkUtc65YkPyX15TMGxEXQThDC4LiPwnn",
  "key24": "61GMDnY27QLSNdwnCjzQAn2iekY5ZoC2KMcQTJvjgDu5jbnqJ9wiPSzekCZYHxEmW952NULP6D5tAizSSKefn3XH",
  "key25": "4CZByRCoTtWcgBf53rjsDMJRYwsg7eZ7DTodXQiimfoG8tzBeLp9Vh7ZQhNidNVRJj1RR5msaFqPVEBUq1vcBNhW",
  "key26": "uc6kA16CnwgLRDpvej5qPXFNarS7t55ECVywqEZ5fvNbTRq2AJk968PswGAFogP8XpRX3bSy1jttn7o5kmMGDXm",
  "key27": "5HDF45CyyMpoYpJiNX26EjgTpbdtv7fv6ZYZVNasifVJqMMgkLYES4RF9stU2pCKZ6PLnNQ8vsnH4GgttpSkMExh",
  "key28": "4jfvdGHq7pJZfBVxPEipXEWfkmDwfJTtVCTwhdFTt15K1qiagRh6PURuBVkMGwa4YUaA4CBPfk5FhoEXNJkpGN9C",
  "key29": "29MQRBiwAPCyg65yRHQNG6bxSecpf82TZbmSK7HGUoxjb4gJ9JCcVL7je41pnEGq7CmtUhY77HJ8rGNor8go6vy5",
  "key30": "2CatiANoyopQgUU6ywGKqHAe77YokUmmidQjLqcwDmjvCD5U34YmKiDC5XUjByJfrjpzfPWeFBme6H729Yg9y9kw",
  "key31": "DHxSqVQWw8uxpjLirwbfLytGaNCTQnmQVkoDvXNeoPcBy8d4nd5PE2zswcxLJ6vXMfmmzzDrnqHWkvZJNUKRxDq",
  "key32": "2QZ2oZabs99yebD7hDob5xLYQ56YrMGcufLMaBz6KxzjEiUXZsHPGeeMR9w5RD1VQemeRq2orRTuvN71vK63cKRF",
  "key33": "6TeZs3iR4mFbEodyUDqZ6xugrBchQ5u9CgXSxJhUCuH2iDGUQg5whzJBh9LTiVgDR7bvE5VeEK1gzxYqmz63MH5",
  "key34": "3RXj64iWrbqSWXabNj57bq1Xvu7fvyhYFh87NkVJuMQcP41tNkGeuLmTt7AAbqMazf7FkPuWUDn5hp3ckLaBbfcu",
  "key35": "szQ2xtVVtEG9HgSqgP8JsJTQTR3zM7aNrcX4JzTn9rvfhVaeqQN95KTp2B6W7oL4WR69L77hG7MVuexMeZwZmu8",
  "key36": "3tuqCQzMJchg4qjJ8DygGCq6kfNqTmfGnaR5GKmefWYRxsJsbbdU5Cugu8DYBnUXn7D1gwFw1XB5jCmnM1LVmuNu",
  "key37": "3vzWap2RPaoftvxkrfNeKQ917azLnh3poZuCq8X2jzosYTq1QsyDjzmpJUwJGwfiJhsoAS6TbLkEJrpDTizZSZWC",
  "key38": "2tXFevuCPCra8TyjytHqEVkLVqhYMaDxZxSyxuAuoGbwoBMmYsz1Ej5oKHyQ4qArhXr6VcTjrq5X24i7vdNugsfn",
  "key39": "VZyWg59e8HUxESePbtUbLQhcpSZyuHSzPUHkkNcSCcuBytCaoBUvdqPyaVwVayywiUPYRqiT1PP7WZDa4SDM873",
  "key40": "2GE35JA7UZwjiiDMcuRv4Z6t482apt66fjB284n6m93g2NvT7YCkGQHBArog1pQCgAhWQijUHd6q4GBMdn8HLtY7",
  "key41": "5HsbbfXsJxP84gijoCfM75wa7ZJstbmTdMFSqzw4xU4uRPh74DsmjpnNw7KfMHeneamFuVokPJWEX5JG9QxBW2U4",
  "key42": "3rerTteVwkZVCEKso4WtH3zWoktBNdmbxnpCF7jhVbLmWvjxXeiUvARaPMfZbawweisBqypDUbDHs9odM7nuo2ri"
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
