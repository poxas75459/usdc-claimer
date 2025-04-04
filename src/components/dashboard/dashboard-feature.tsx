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
    "5GUoUhKuxAx8aUR88vBcoKqytn2mYtzsbQgvcxekBsPPKmp4zgx3Yz6WPV94wQqXPwGqBaHNbc3QUy5DmVbLmpKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hn8doGS2v8xQ9TbZ4xVJVZJvY7JxvzS2utmmpHzEdmoGTFWmKcLdXLwpAYW1MXDNfFFb3JvvLKiFjvsQKveVeS",
  "key1": "4QEAj5DfULeWiiZD1rM8g5w8HniMYdkeXLwa9vGhtmg84QCvJJQhJjBayTiPfanMPQzvrHgray2F8KncHCsxmiXy",
  "key2": "5S32CNVYF6iDpKqtUsqn8nzefrpxjsV67zCpjpvGky49HUmz1yNVj7bVV9dkmbMz9GtenkoDJzW2M8QL5gGZhDVs",
  "key3": "6j5qVcqj4hZ8EHZiraQbzYRG88LHyyts25wuxqgLcyBETcNj5FwhWS9TienAqxVkxh4Yv5Epf9E1BfXaNdXgueP",
  "key4": "5fLq2cQvmhEssWZ1etwKMNTV4e8DghShZHrfqedosowomZd1sJJKte4k6E2kKJuPQj3aVSkgrLyifm6XuCTTdskb",
  "key5": "G9wUyMgS16HhEshbKg7R7TzzCfqgJafJyMkGYGzAmWbeJoQa3hvKE9JyLi2Whcva5nFKiN9gGAZG2cQ7mzq2L3H",
  "key6": "4MoDjwsLnwUDPyTmX5gjyxDd139jotirZFfbqFQuYLS1owAmgPWcLA8xN1tDxQhawae1gNJfS8ropCCcSfdmoefB",
  "key7": "4RsLs27GB1diADKVVbscTyoU83NxdKEtDKLHUpR2m8c9J7HiTjCLXVfT12LmeVMC2KSMyAU7cm3rQxFwrwt2YVhn",
  "key8": "3qijFxKw6q3NZmm4j2pYEUv8XC7vdTTxZ1Jizeez9L781zfCvQRxo3P6b8b8Zj4LYBeKTJJ2PNaENbEmboAGXuEr",
  "key9": "4UzF1ZLZPHVLLrYXpF4RLQRen2aJDcV9RQUcuA6dJx3seRqDKDm3ChvF5T4Y5F7sACBwbsKrr7uPADa5pPj2sEW8",
  "key10": "2SuBeubfuGfQwUiZypWT3i7eTprjFsrMv2FwMpGVcvnKf3YJ8gQfApUxqUDPFsn8Q1q9YXt1Z51Y7eCmX35qGnBb",
  "key11": "46jNRzgb6FGgBDGjiKw7ZGkjhQ2Ej9ux5AncKwyFchRNKT3MRDVfVDFnMYdL7ikTgWRV5hBfrKpKttAd5wxXEdEm",
  "key12": "4kPpAzYvReDqZCRPoCnwqkRNU86PemrVgmJbYZUm6hNJpYADAk6KchHLjNBoJgQpATwNMBMkSjE1jCowbRSi4seB",
  "key13": "4UN1u2A7J8UABHQENMt9iXs6FrCqnCazYWVznLcPKVPdzADKsu2j147QUNyCLbezUR4byaLybnXSXMur9KctVRAS",
  "key14": "2LJsTjcdGkZ7CDgvA3ek7GsRrmSMzaCFs9HegDk4qoqsjiTMfucL7Q2nxWYfUU8EsmWGNGpr79WRdDuNP7RBBC65",
  "key15": "4Q4Q68YA9nLvyZqjerCP2HzAn6uB43Abihmh3MXay216KDoPdA3EHyVrJRsxz1xDK7DDXHzEwEYFWAJmpgysnnHt",
  "key16": "66XLRSwzynF4bWw3owHz3dCDbUWDLGRiPPdj6nNQ1ddXELksdS15MRm49U933kiJcAtaLw9w3a6Ts6V9VHmDoEUj",
  "key17": "4NKoeecNSxruaMizLf8NQ5Z5GSAMmwL6GVxqifR1p8LZzCYR4N2B8obRX8xYxY88R4xfhANmZnU73mxY83npT5FB",
  "key18": "2zZTP9Vj9DotYNJPDnVjks2DRixH6oNkZGRJSEb7yRwyQNSUTpDbiRMZfGRZNWmRzJQy1LauQDN18rXD2KRqXQh6",
  "key19": "A9HbrnTDLDe8Pp4JYL4TespLsdTvr27SvHRtyKMd3a8hH6CyM8hEmsteQfsGGTRiZKpBpF7yNgi9tKVewnANbSm",
  "key20": "5NYxdDwNWfAZWpPPeAnJaZkSoaP58THZEkbVhpKGtSSr7XDUZVJ8oWFo9Jq2diQsPfCtrZneXx7WuUXgKnkVW9fR",
  "key21": "3koaAhpAJZAc43W2jHVoGcZn3TvZ1fdYXrnWHuXeiHve1ngbwK5zVGAWA8NtNSNaQasYeHSfpTSdWNhhywd3okeB",
  "key22": "xaeV2HTX3rYb3emjWEVbk8cAL2fvDoDZTqcg8EX7yaMLeurYy5U6n7DN7FwNL2Urs4ge5eWdfNBkn1AKUpUkP6C",
  "key23": "3iqsnM3Lfb2tpdQAXwvVW7MEmM1abi4uu4VzzPu8nXtWUeZ1hPHtQvjMkgYj6XhpwiC3omeMj9RiMvNaEwnXcfMQ",
  "key24": "EKF6A2cNPtd6csi1ku4sHREiNhqg5bAs9FtDuR8CdsNm65hvcpZ4Jw7SQEYL188B8kXuvuXUSvVr1rARxhhPit3",
  "key25": "5qJaidqpP6HxeDnY669g3hSYaR3VvTb4aEEGVnGJjCFcadU6Su9sU1goiZS53WcM82uBgX82A6KwWHokQdBRtBe3",
  "key26": "5jYpLEGgsSoNFhdEnLfKnMH17vyvW2ghUTRYfkiKZEmKHnE8DpwAzuuBgZhFvbF8KzCYtwtNBkiQ2Cnyck2FNHVR",
  "key27": "3NFz8fjZAxGFvA8uC5aq1t7B4GeXVCeraa6dmPZ3hahGju3tbHiPaQprWcBzt5S3RwiD362yq7vxQZvFEbJs4ofV",
  "key28": "2x1mAKKhug6qMdUh5VXsgHbNopqjVXiMQQDDk7qktGouivTs47mtACfBrgtswf77hTqqdB2r1fmpc7BdAT82hkvm",
  "key29": "54GihDW4vU8LHPC18FpPcAPzxD68peFLPXpvD82zGva9DnCrYjLeCktHEzhGNLk7KCiQijroaLqTeJjJS9nFRqDi",
  "key30": "2epPnSCHsSXtFnsA5E7iQJtUhyTSYek4rQQRaJxTYjYjuZq3FYY89nFdsy3CySeJuanDNJS3s9ggzihv3MNT7v2N",
  "key31": "XtBs12duo6529nAcrCRTQxQct5Kfjue1DNkQJeCopgoD8g8tpafWK5XPbwvQ2B7Xy9WTKFD7wFYje1dLmUH6e7L",
  "key32": "3qmjSSM4WedPvaoij8T9pcFoYkUWhnSY9nV49EmZkRR35cd4zYWvQx4pjXeQotWMqWJhzV9EgvA5GsNw9gZXjUQb",
  "key33": "5uK4LbGG75P5KbJa9anSVuW8P6wZok8PUvy4Xe6WQzqQCPytZBdq1LFG9EpeTb1joC1CSy6FUZbGcpChvHsASJgL",
  "key34": "yXy2WXsc2u73NV5pCZ5UqpL54MoYLqLB3R5vAzabvgRfXk3KDu8KiuTfksaQgajnnXfYZcCqCJzxwg7CowRWptZ"
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
