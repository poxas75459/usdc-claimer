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
    "4UJ4ToxNpuK7bKE71KhTVvWYTYhLZ5y3tWFT79wggS6GcRnWmjYdRAeH8i7i5FZRKhBEdxUpVNA8FPQaeop6j6Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGfFxuMAaJdRDbNwZM2gWDZbs5mDFXwPvXM19gG1QkaDeefkmB5xx1kBjLQN4bNNaDrpZLfEFbVYRzMwHP7v28h",
  "key1": "5jYQubv1ctxc4YdKFM3DS7FQ3FDEKdZEyNKRrvw7yFfKm6Tksjz1oGEuRwam5SXEsxkJnWBy6z1avxwVC4J5gEZX",
  "key2": "5VciULtGhjuQHUKEQjEm4vxo8c63UFUoWkoeAoR5BdqPRLvQ4rSj8Wm2mbTq8mV7kbwyoD19oeb3a4Eas8M47Dit",
  "key3": "3uEMyALFUJEqTwM62R4T7rjm9XRYUkZ1aqGTAWgPeFJG2Aohs1pppp1nU2GtgqF8PPVWewF6k4ZE2oGtqanYUqHe",
  "key4": "38pbAthTCrhzvA8565xdFwss5sC8rgJLsEKRSsrtYuYeVmhmNadWMCmLj8aaHRy5o1ccPp8zoeaW7fRysgTFT3sa",
  "key5": "3YpLoQw9CUm4VQJbVog9KKfTZAJiWLxZTYTYwtT5p6p1X45aAg9gkekVtN1wNjziXSvrhfBKW7kencRu7iZ9h1hP",
  "key6": "G3S2jJAhKt1SAzSk4yCWC9qJ43ind1buQgzr33113UWWfP666PnMQpVv7ik9Uyy4Gqn7HCJ7x1M6ZA1pV6PR4ir",
  "key7": "2CZgYS74vvzw5u3GhsactemgbeYDuRvXxd66JpEMiNQCQ1kY2EoFhkrKk5pTZ7uoq2jvBKeggtz5ri59e6S6u67b",
  "key8": "4MFy3cfwffPMV82NUUrYYjqRDFuLdGxx3JpyUU1b29S5W9QoAVFUTXfGWoAszLkkzPKYSm2DkfkKhN6C5fdaLaSt",
  "key9": "5zWCKnZDFnaX5fy1sHYwU2aWgZxnQyWJPtSVrcMRwuZq27EbuuHxWzJ11DgynhQnn4p4xFLePyD3m1KbMj5p3Bdc",
  "key10": "4pThUkx4CPJUQmHaMPU92neCSsU4Qe5fyjaGEts5XAo3UBWdy9nAeXLQbPet3UsiJUp2F8nDwLsJv793j7tKHC7z",
  "key11": "2Qernn7gnJjjQ4jHRRV3VsT5kVtzjatfCPr3Jh2oj4vRWGGk1c8aNCLuG89VX7BHocjmffjaxWRWkncx9YK7aKp",
  "key12": "5pU4sLojZK2RUBo5iAg8iHBL4Dd3pknfJVGz631Q1ATWTNiQ43u7LFhoyG43eYwHMBFXBXBLGvA2sm2K61SPX2dz",
  "key13": "2ksLBKmPpjiJmLWZDyZ3WcF8LcsLTcmxuuwzkMNjHK66MMqJKH9ZmX9PTtC4ExkQunnDPL8AFAaCBeYRqxFbzVx9",
  "key14": "4pGJTpJZ7L3pXqcKvQtjUZ3eDAh34K6DcnUGiBwA9XuqT4Ct3qzDH4VfsHzdyHi8zuPWVPBwnRdznax48dhfBm9k",
  "key15": "2dbxZxCXRJ19F6hrKDWn7tcu5EnsdFSDPArb85K4kU4xxcqwXDwyvdckEbUZCknmTm3rYQ39HQEGXX9VCaJo9sAi",
  "key16": "5oYZmBjez5NLfEUgcsqvYpSvJPAXN5DeCJLUChUXuDKStmpcdE7HfntKFE2N575PUfzSTNAUSPVEhHE38RfdmWma",
  "key17": "FyuRiVrBQ5jJg6ZEeXP5pb3Qrb3ssYhBR63pvgrmuP8FkBZxmxqr2qGFfoGj51DVKpqEVXVMcQjVoiKuSm7awiV",
  "key18": "5mAECroRSAwv4qBrrrakSEfeRYo1qcFr4ijhaizm8wQzohEgJop2zfGbpUVMdfzVnR7KaTzGTvPhPsaz9RwGikaa",
  "key19": "ovNh3PHxMfcnf6L7Yhrx8ZsiGKskr6sPdBjxG8JWyEDgd7in1ehUMed4GToMhDMveVM347Wvs2YnWaPqbwpcSmv",
  "key20": "2CwewesErW18ncNyDF24o89chj9NcFVUepAzPjQNUh4qHQ62L5WGNyKPA5FDMraMQ5kWRg7LQfgykL2jLtRg5fWf",
  "key21": "52x26zg42fT8tL6cSUsKteTtnHbYLJbncfD4GxLS1oxiSmEPfH2fi2hLkdHwsQA4WbKdjwYXkTs5w9kepGXVUq7V",
  "key22": "3tcfvt31WkXnTeLbprjA1ntEyKmbFRzfSLmh4bv91d4gdy3DnvP5K9KeWEC69AYzfnV7q7gb2ZLtG8aRKxxESyUt",
  "key23": "5nS6VBt3cgTv4sFe7BUymDVVntkPAkmd5sE2Wjcf8HojFGH8a3oPQa9fxwUArSn5ygcoCqFrvTkCyBWiwzc3AiGq",
  "key24": "5zdSatNbM4Xkn63JcowEt759sqBzgE3Toh3YXsUi3rCMd5zB11B28EtUsVf2sPr8ktSsnQKyRuQJyfVzK9us7osD",
  "key25": "5zju74Ye5GhrPDyvhS3GE6i5xbg9WAUp7p5gXb3mFyFdBoMRnoDhdomnQCLqjQgyy3YfTU8T9btguTRAbLVoousF",
  "key26": "3yh41jZB99RSdFE5d5FJkoBP2RQS59s98T2XiY43cWjuLWD51EmMc7zx1eqSmKYBR198zKc5sNxT8Nf2Xt6mbPwh",
  "key27": "5CXyqyapVdTrzNQCurZBTgrfBB8sa1yrucVBtbPESSJex4uuBy3Y5FyKJYfUvg3V9vHqk826MCS6YCHjKx1RMwfe",
  "key28": "3qmyr7RkdqW8XqdSm7bZL44iMJjqWGU3rUSdtWRgbeHKTzSPrJE2oELiQn4GVwFbqcxMgT2WBfuYY6wXbUjnpv4Q",
  "key29": "3TS7jy5hqPgYKURe5oMiLJD1UQSfhAWf9J65D5Nfxn78qV6K4M1uDLANFGbkFUGzXMtsfCbnzP8NYfooQtksggvX",
  "key30": "2cZJDpSWRrM9Ha8cqHxzH1sr9QCmtf3uTYt5QFmwpFYiisF3L69dFGiawSkGuLGCpd9i3gehSb8Yzg6epkUEpAdH",
  "key31": "9SGz7nDAKNX1XJhCwRW1mBQiYrH786i92CHBMKtHq2kMGhVM3fKdkrY7s6P213SN3CaBsarE9je3ybWG1gXKkuS",
  "key32": "5CraP7m5aL8TfJTADodr7HiTJTy1CnwRShDyRwgJa31gkcMxNRJAZ6LWcmBrirUncfCR5xF2N5DgRwcN9m2e6f15",
  "key33": "2c1vy1sH5xiaPBeeZNLGNtd6477waTqFs1LkpYPPSJHGstKMyu4fjzpxLmZ34to9gCD23GpirXwtb3cQmrHjg7pi",
  "key34": "4KjNMNEDnpNxhbcYAocSQ2pNNAa8ZmCM3pbs2CZfmBAETHNfrpGy3hVv92XYLSZqqfA86jZuLfX91WMM26RPSuR6",
  "key35": "3dX5FmbwSZQ8Xc3QA4jfRqtqKkYB3YRdxWunBQSars2X94veuhRCR4EiEgeRFWzFKGZPTsMyp7CpMjxpiKbKeKG4",
  "key36": "5UiQYNXY4nzAEF4itCcd5sioMnpnZ1jT9eAUpVQwCTR14iX5shn4nGEm2kDHVrWMG5WidLKzedsSiXYxyG7hfL5N",
  "key37": "bTmF89MWMM8EAkrZgUc5SatisBDdUKVWcFmFYD1ybB9KC3px7UsSpFedmvVChHvHzQ5VZE2zRBE85ARkEV3YDKw",
  "key38": "ak8F46Q4HXtAFKyp9MVsDcyTdXwEA3uxigXxegskVh2MMe3gaYjsc5tkhpoeq2UnUgXXsyiSkgd5gq8UfTKmTYn",
  "key39": "srjGzeKfqwK1ThEVBi5CuQWZEnW1CUUCVTnAVdZChzdjFxk2oc6smVFVHEC1GW3EBsuF2DxDrChzwzhcfkKqF5L"
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
