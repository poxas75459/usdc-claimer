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
    "4XR9Kz5tt4KMjGghJ8NK4QMzbmxZXbtdu6HQwvANnCT3aw81ATqGUSrsPMNP7EGQBZZ3CcwKdioMJrVdFmJgFYVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SgVjUxPPDxjsWxPAcXs6TBVEU8YYKYjVaCTruKrUNwfWZb3atUyRUsaAy4CAzRFfSpaf8pvCf1NF3MN5R6CT1mw",
  "key1": "2wWnWhTjweMLd8Qh6zLKjLi3qcmRQ55NkdFTmbXJRGXmeZRNyn3D7abWRnwkutnPrqUHAjpgi5nPcYczxasy7HPa",
  "key2": "X81RehJW3WCEhMdVTgVvbNNmHyF7AjMu7hTZQTgeFMSvbPGqWa5Yyhz31e1HZeePBorgiqK3cwKdUvbhRSQhnF3",
  "key3": "Qf7X95SgTrtjzUHuAZ5aKptHGHsqTdWwuL5s2xdTGPeEPbosXB9vykHeCf6HfmhvJxoFf1s5Mb2RFVFJyD3dKTq",
  "key4": "3zaFRUE5nw8StV3FFSrqVggcqaxDN6seF8cHANB7oiDoS669s4Qm1BwE9MLRjjCAwTdfNwMk5d5dBNAkjtprJ1ju",
  "key5": "4weywRT4XurMNPaBETKFRsGnht8FRzFhJByUExFDjmUSwC2dytobKtLMZGjD1gDzeHSnQoH9kYCv3Rbs11aH9V9p",
  "key6": "3MWCSvb3V6nKmRkc13yi6RZhFUrXpFTmrAGTqu3fTv2tmbmbKppQozB6DYLxLYY6GSXrPntkZU9asYM1Ez7weKoF",
  "key7": "39BxNkAszkJZcRd6nrTV86NG1BKYbTmuZGsJ8iM3iNUYCJaB15mxT4U5JYSXBs3HTQTt6iN557eytmd4m4A5B4UU",
  "key8": "3hy9jSrWw4o6ChGDsrDCS1Dfpf1YM1WEH4HtHQ5iL2o4xseYhxaRgCqsURdr5QD4sWgXhmoZgC1AtzBY74H7jsY8",
  "key9": "fQLgEDXKgRK194WPgXFvJ9nGHwbcyjCn2jA9dD4KY8RNVaHWhYUiQFgoVXQNRviJKExvRRh3WRRebWZQRG3yxB9",
  "key10": "5eda5Kh1LviJJo6DHtSm5fFfkygQYWZAdyvf7boPXugGqKrT1aad4mX6v28c5ALeCFHHT9QyWeVXeGRUEymKxzgX",
  "key11": "4TnbHjTG2t8nUGHv5dewTYELvXSWHTtLbtvmYmdgXYf3LzqfPAtgwKdsL2ryJiF86SdQFxreoz4x1MWP7W1ySfW",
  "key12": "n6SbCxSxPeoYzuhbqSXeLhqZu6DCvbAaFWeW2GNGYzGsJkv7Y1ozngtAgEZraoiJ7ZhyroU1s6iqiHQq1i7ukev",
  "key13": "SgM2gRmQyC6XpoLRusUmziNQCzM99JKzkpGV17cUExXwb3oV1bDxNasdVUoSGtQRqEHy7BiNFeA39AewautF8Kz",
  "key14": "43bUqHQoFgbq2DV8z1SCpap8zJhmRLiyHD1NYeDogy5KC9A4KCUQGgkQHSbzWhWhLdMv1Z9ngiLSythbKXsoKEJs",
  "key15": "67DdVcbCDGRmh9vPVdpuB28TTht9jJsFPomNke32Vy7VTqCZNW54jEuMXvqBJLJozuuJHjMLjk9hZopjYYp5j6ym",
  "key16": "358DUBDRPZhFikFVLtdT9Y94W6sXxdmukD3B2wqoSv6TaJU1KZLM9yWMeuKEGWhYNE6cgRj78BWTEWFqJHSzpKaq",
  "key17": "375b7YHXEMyvQ6aNtAugszm5N3QvQfe6rQpkS9cbNLnu4cqHq4pZjqH7asgLSMfRu4rwPo7RofJwFqWup7vAQmE4",
  "key18": "WrqXESmvH4h37dFBVPLiQKAHAaHhf15oa41FE6ucTuMoCdwHmvYUW8EpYUgAjqBmxmX4nZqxSKkhdfodK9ydmby",
  "key19": "FZDS6kxohzaEWw8sWJuzaWHr5WZsrnvj7LUhKi7eFSySeH59k3fy17jxenKYLe9yhAoefv6FMWhUN3aYHwiWquz",
  "key20": "3wVoB1e8gtmTPzAhVtPTkVqFo7iyTJrnnzH8bN3kJzV6DUSDWgMeAqcGYSgeQsYPiW1FtXVg6o2AeB4sDkncYi3r",
  "key21": "5CToBpGmAERtUBKfcmwaWAMyeASnJYiGrqD4UGLqyyiABP4ntiMRSzt872sbogCm6hP3pusLoJNLVCTD5JfVduxx",
  "key22": "5bKHbexfCKskSNDMWeadv1YJY2mf72PLvszFtWM3pkqMYHdaEh45kbHYdpVqB6ScFNjQf976x2nTws2hpA9UoPMm",
  "key23": "5rs2o7EDbZz4m9c5btoDxbWgUJHCSMH8kAoGQY5BgD6WGidrjv2q8Yy48KgkKZtfAgx7HvDhFFhm81xYEe2goTSW",
  "key24": "3AjrzJM62RCYyr1pRnu5igvizHEhihRGcZkdGg3rRs64chPWez3WxbaGfSbGnYz4xpS3SyWan6uhNt7coWMgNEBb",
  "key25": "3i6gx2NaFnxLZpEBzd6T1Kwt1sHsc5kfSLpowB2UBNHnn4A13J1jgS9hc6RkfwcQ78X8WZ6qBryhp9TEaT2e3W5z",
  "key26": "uxWRbYmhZhqhx9MnVx4kuaAeSEeEwBtX3wQfVz5JAJvCVc1k74uqcMzPzvVr2h6o6UqiLhiaoJboR3CQWkca6Vr",
  "key27": "5qXhMP6pbLkTzXwF6eb2TwDthPTM4oWvtrseMSH2v8jwoAVMgAB33sze4SMDWWjvsvJiHXKqkTrdnptWVQ1G7XBU",
  "key28": "n3kbhy78MsLBoCVJa9UX7RncD8W5jve4NRcjS8jpisQywodBuR7Py3bVyBtNr7RibnjUXHELikWp9XAoViTrCq5",
  "key29": "67G797EPDa1EpJfxEYETi188ASVx3pZmpPvte6ivUsWPPgKdiBsxbMcS6fPSZnA1otmn7sQMbJ2FxcbGEoK6tD86",
  "key30": "VfyaNJ2ADSxxFA4UcKDLuPpocVDyuAAJw1oK8q5stBnqgKaU6633gkAp4QgUALftx4RXgDbw6uQzx6xaRv9dxVF"
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
