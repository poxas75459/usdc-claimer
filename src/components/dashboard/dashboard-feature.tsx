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
    "3hiz6oygrijzm4sLSCg8NoAFq6atd1DGA91Z9sxnu5gzVxi5CV2T1yUZB2vgiiBKKKXtFVoD19QhuEcPgdruepmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yjeVfnz61Qps2LzbPQJhS1Gk4CNvRoDuvdqm9oScL5rqwdfij9A7XYZB78b2iet6qAtVJp89UrDHXFVjxC6MCY",
  "key1": "5iEF6QhyyxsgyzrKyv9w5iARtYeEUka95RrU2JnMRKw5E6Ng2f2PFVgwjjPSHEK3eetPMRai2RAj7dZZPgq8bDss",
  "key2": "3JGpB2h5VqjhaY6Ccxsy8iSCSao2wGTSr2qzHqHBoH8CHbQo1TkSvJmc8JdPCrGm43g6Ma23ZLUd2Nfqz9RKrjAx",
  "key3": "2tBcMLFaU4BZ1H2yjPEvgxLCdXiyYhd4v4RYkrYNYriN51pQ3ZbAmD4gpMJfZfcU97eMnX49eb6src762L4Mz7EE",
  "key4": "5rDJq8veJmPvrJakhw9WJLZLHqz546Hn9HWdxHKZTHHffbuD8XC4C2sHb4gm1FVsJFbBF9Dn3sghvCVJ3x39X1wY",
  "key5": "5TZbsQ5tDRqr487fhjw6eXuNiHB6Nfwjis5kezi1bt6zXNu4KiBTuP2jqyTErxsTPKXCsvge27rnmbWb6SAuWwpY",
  "key6": "4DpumuwTxSA82a7UEx2B4igXjADkNxQJfqKfXtGXryHSQR5wjFoAo2a3oiUj8DUhVbZ6sKfkBpoPZ3Zg3eU76LHt",
  "key7": "3dhWgrsEq2DMYK4hhcz3gtzMaM8vXn7EPZjWCGrg6aX87fNWvMgwfu5sishk27G1GXdiuyvRsxdiSJ3YiPxDYyxg",
  "key8": "4KvD7wQ6BjqTQaTtvSKmhVV45YBwQhmHLPtg2SL4CqUeFusFtoSXW9NLewQFYXhgtidfjqFfT13BG2BQQX5ZtfP3",
  "key9": "2iHb8wxpuKKvB56ayz1FN5EkQKWDE8goh5qFVmhGci7aHv7tRKfBZYKi37XbqZXRkht6A83eZCiJ6tvyTBDrVzia",
  "key10": "rYe4qeAzWHBgRFvVUFCUhj2jnfeGFqmVKByTGEUM7DK7LubtYGwStrfJ7SFHyYTak8G3U9jjVg93i8gcLe6jxHg",
  "key11": "472nU67yMytWqyJ7WgYNa17wUi2PuNoWYyzB5bbSfE8MD2C9VBp3gXaJ9jwVy2TYRTo2P1hZo1E8kMVvVouad8of",
  "key12": "5tHV2CycrUY189qjXHRqGgNaesdTFqpYDN6s8WdLToz2yGwfKGxkYdsLwadigyMEzWMxyRWSKHV5m7obPx4P9FK8",
  "key13": "UkwdK48E1vQfk3rrHBUaTHUf8jgSUoXxwL1etR9fAgbkUMjKt2k869RbGS7kYYH1N3mmtLeERodkfXCnkgvf1P6",
  "key14": "5vNjcAmP1Mjg7KxQQyudcpiBJoJZXZj934J3BMhKQMMvUB3n5LCZee4QizdKxjWJc2CMxnsTMgpQKcP85u2mG4zk",
  "key15": "3TuhRtKCDgD1b7pyqY9vn7aPpbHAnMsgVervACVjJEhCSXeqb3RCp2yMpT6iaao2j3fSPKgYQQMvScBKdsLY4j79",
  "key16": "548BYZTxURExP9jMxs2eeZ1FRt2MxBxtdffajU9rD1MhmpbpNeqymytPLUepZzerTVHPR1qCDTUGYYd19329h8J9",
  "key17": "3zmNxic9LxUxFfdBsg5PXhK2XoDU5X3chQKypiZQvoH3oH6Q2shzRFDG2b4Y6uiadcZoG9GRq6BoYvzRCuAmDpvy",
  "key18": "2VxjniTAyk7PAwQuVvobggXj6mg3KE56JXNpM2sTUBoHT5TGGQmgKAMsSxEogFdQ6ZyAW2EA2xnxNSaadSvupwEg",
  "key19": "2PYeJaWDqN5V3vQxLx9mWbJtYdGeLmAoZFfrKa5jjmVsfTqdebGZEgk1NdzDjk18Xp6zVrnFGD7ZbhiQafaP3Lqn",
  "key20": "48QRx5V2JckJvuD88AtdXHJd28ZbAJHYFgFWdspB816WiMQWeZrdfonCqhJKHkJhdhh6FCesqnwvH2VF5ZpeWdr",
  "key21": "3J1KYepwpqpHPbNLsTTHGYvgdwuuSPKcjDEgQxvQtLU5FrYk77tFY7dGicGr1NWpaHvAEemBpA28ZV8owF5GH1Rk",
  "key22": "64JdA4p5GVqu7ZZyC8BVHJgsqKpG3i8aqQg7bhbp26YkmAR1gVTrYn1tA1Ts7PGTf9Mg5acD1KfUBB9EDA7oEnan",
  "key23": "4zX1CL9us86akEr6oumnbkMc95ARry8aMDcJkB9kXy9rsY74gTMdUtabQQMgnAtmxDnpEihwpfFxjoaNmJCfmG5t",
  "key24": "4xT17VVRSdKvJSuNSvnvtz2m9DXKKHJTXcH9F2azGVaiDzaq7FnbvofJsQe4oZdc1QbsTCZC5m6hxhkowTeEYUpG",
  "key25": "2Xavf5bPKFdJKFy4hvEFygb2HsJZzuqynwhoJ9rrgYVZerdNHhKnWcGeWerKdJJKp6GMyaTesBAXHDRG8a47EMY5",
  "key26": "5fWgDbTRPnXWEoexL6k8XgfgQi7MEE7vyuyzqcBsrkSH4vvWs1w9RP83ugpCCQ824TzuWb9cpmgvtfVzcXx6RSw6",
  "key27": "3n3my1k5zSLKUHwiqVUWpX39WjTMMd93DmktdVyyxJUnRgx5QcJB2ESak4mq4WBMJUVPD9kNzx2KXR8dhYsZjVHZ",
  "key28": "2pty5im4Z61p5KiKx18VwxRgjYrLv1ZKBoh37Jy7b5HzfPjnTzGdpekTiwn4cwmVUQGERbNxGUrjDm1QwjdWT2Zy",
  "key29": "3eJukK62cSQYkisyfKro7cfGSd7eZLQjBfXr1EsukSvVzW6riA5L7mRhXxPrwWNYgcwmh3S2wTFpDmViuDr8LcqH",
  "key30": "3KCs5kvRY95k9qVFNhRYDDum5Kyy67GVQUdubVVajxRzL1bJRHzigJ8VpV2ZAeTXPGXGmZiF792BFzCNxKaXTbfc",
  "key31": "3VkuT7RAJicXbXwaVYbuZTSQE1WUYXco83Sx1XX9rRxAcucGwULV5uVwf1fKQ4JXFH7N46896Z4QFb9NUhsAWaKF",
  "key32": "UckYTsK2Eow7U7B1Q9aMUuakuo9csfLEnSL9mAVW7yPpserAmLgUmnVoyezNHyYKixTmc1qsG7rZ3zBknf21hd5",
  "key33": "628gbULsP5qzc1Z2k7PSZtPXzo3wGntmhTbB39E6CriogavXR6jgLb4ZqUgHXWh7DUSnW3TVmzhRfYN6f6CAwbmY",
  "key34": "3Th64mi5C5VPX1SGvz3DXRzqLoQMYhkfrMropqDiUBPxjw8NkKvrA2epkFLsfW2K1K1ZH6PCAXjDZLBLW5PPcnzz",
  "key35": "5rGvvXE7GhMnGACHcYrnBCkoVB75r3cmp48Z9ozg1T17SqrfBWL7fEDQo3SWJRwx8wykTA2pHv29uMo37BcYHbnb",
  "key36": "2piEBrmMinev6mbqAhcxGtPnBYP2tdX2wJTK7tX3CttBJ9rmrvJW2NQRpATE4dnzpPimXgG16r7ba9yhTBorAFf7",
  "key37": "3Bi17TaZPAbTz6LVyWBKw1zXD4sP2v9vsToetMhcU2SKAN4BGD4jwMjttymcFFii954JeMgiwc5sFyQcXtM3TAvd",
  "key38": "3AoCuZKKCA8Rv5v1padkS4Uu8G2VHtttCNsV5ESShnJbZSCKqFygVTwCoZuNdZZP8Jxae5fmQVx1ChzhEn3aTJMQ",
  "key39": "2TgWfQs6WgGvJEAqeVJnx4BwVoGKucFsJ6dX66Gk1MUE6kUQd2wBHJDG8KtWoFx1ZeVGRKahxc5fuk9ztTV87MzX",
  "key40": "4mxj1S2w7cVnngMc9SPG1n8YATcubF4Fh3vrTxzVuSVrUgb9auiAH1fxNJTwfbc6qrbkJL6UHyb1uNhmLPX8EzoX",
  "key41": "UHbeRHx3XdRgVo5qDV1WhF4BzsT7aqTNFg4Q7zMJmGvKPnoZGjTrFtpjp2vv3Jc79X7jwyHzjzg1rXU5RnoRBxB",
  "key42": "4SLwCKUmXmmTfVrvYvVagDiaRxov8hx4jrSX15CKY86wtcQgLFJcRXUQ9ME8wETmWUSYgKQo7pPx8WAKr8TQBgkw",
  "key43": "2WVDmyhiRU4ZLLC9CnSAgcBCBzwHo5h1G8qkc1kpSaPeL3eFcPnLSXigayCg9fN1b8zcQWa7iKkmCqzzP4j9xuLv",
  "key44": "s7Aog85rFgfLpvExDuSAYjruSMLLN29ed8Hv28UcrMfducGgb1zRD6jcn8zcoxjgn15HWQAdhRTtDLdTGGjeMLP"
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
