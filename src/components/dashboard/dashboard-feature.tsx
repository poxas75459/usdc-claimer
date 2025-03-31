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
    "3kNYnxbBo7MPvWZqucTpoKt339kcs6CG6WY69V9UbyBSwwQM683aiaRbbufKf3KuWrGdookwyk1CmWkgL4bu3sUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8xvQphhgTgwoYerRDZisD3YZaEudzL8SZUC9JcYULrXnXH66Hm2LkM2PAvu8vQELcV8DTSVULJ2L786LJFbTFD",
  "key1": "4uMKgWYsiFQW4DXPb2sHdBi4yNu21TKZdrYWuL9CoezBRr1uzK8Aw8T6Pk5LzSpBBtGmGCsajRxjZf17KuVmYuEV",
  "key2": "iDSJHaDdTAwGFQ47f8mTPnBqnaaSfQ1d4hBRkSunCa58abMt78ynN8kP6SqFcRanbtTL84HNDqqTnqQMV6GeYwM",
  "key3": "xJezNCGLc8MX7aDedhVwMd9p1BTwVcBzEPay2RJ6Dddhwd9ZaC5PFZtnFmVwLVVeEBqeYkWfvseKkKRLhS5LbMe",
  "key4": "5dSzGX1rqPUoKDX4WqUQ6FG6epD52V58XHC2qcdCJkYjK7zHtVq6F9J9DUE83Es5sr3v6GWJ9NtLa49n1wEQfrsL",
  "key5": "4QZdWkb64XhXR6WGQC2LxLRuw6cCfBAZKSWsHZ2N1beoqNnCCvgLwzwWUTWu247B7tfDWkpCEJN1AxHHpeb5uUVK",
  "key6": "26MHSGACBZe33D9yrjJ1ZA8nACsZsSNuEa3JUEmqLoDwENHRQe9S1ubWfdKcDE4oMXpcmoMp2CpwpoF9W6PBJuDS",
  "key7": "Ym8bAs8GXdMF3KeetZVbChXXeEGhVQmKNxYvf6suGHq7fk67pjUxnoHuEUeBdVBZKybiPjH5wTm8NYoyH8XEGAd",
  "key8": "4LpSGjjmEE4Z9ucQUkx6hNqBdsRyoXbfhhGTahRoShCaHaJUNHekk9yZ7U6uspFhuqkJRior8PDQjik1bZm9Gjso",
  "key9": "NfJVfeaT5kYXvr5E1gy9nGNfnT7YBrMiMHuw6WtXsoQ47cbndz74P4yCmenHWmfECG7JKShJ6LeC5n36BSW6iZ1",
  "key10": "5me7HWzYMwFqPfWYufq1M8Z9Q7EXPUGt8YQknr5SUpVV86HQqPfhznZXKGWkojj43gVhMbrB1BWTh6ZvfdgJdJRi",
  "key11": "2DiPtnMXNteiueW2gK5U9iJTRrExmFiGmvfytoinL63ZvBJBhP82iZiEHMZv2goFvEvXTcEa4rjJBkguBNQfLoJQ",
  "key12": "3rZHc88piRN4tjEUwNxeiHeqR9RboGMuj2UH2gdkjc9f89wpVW6qfqfKPzyrrK6ZEeqwGYuo2EYU4ZeN5siTsDiC",
  "key13": "HofaUWgtWPBqZS2AGbs2zQvH8HBdHs3JRb4KoRUsn8K6XiTvSXouv5G5DSBKkkWzKLwmZFvCyY8LrUWX3C9iuw4",
  "key14": "3vJ7KNp8uZ8Q4XQD5QVZjceX8LGfWxmVPzs7e3cdmBMd4qDxhfxTwe6egwXsfGt1FD7AgcQKef87F5qHohCoKRDE",
  "key15": "5RQ1iU3ccSAmU44Y3raVmXGXPPiFvtLAZ89hZ3d3gWgkK4w4EekxNg2hmzof1LQChC1MZMNmmJV2eJ9j8BzgAioa",
  "key16": "66rLBgiYCXRWX77ZREEqus1JsB3aZJoTZtznxvFtrpt7pj8C6X5KWK4gjSPMpYPDsPk8nPf7QDxsXk1T8AJcLLWU",
  "key17": "24SeoSRbCHt5oNPda8MdABZKoq7Z2T8dhkDu8ACVSaR7r59753kRS6iUD4CTy81kLFvLNspAEYiNXVQxcAe6Dzqn",
  "key18": "3sa3ad5ooPSqmgmDnRAaQCaXzYu27sdei9Aoy8f8dMJU7Q3uqdSPUcCBxoJgZNEFQhgbow9PAe9vS5DrUJLtDWxA",
  "key19": "5Td3RusDvJThXea4tg74sduvUf3NW7uxPTPCkXYt34Pyx4ncEZMgs1P7nFBtbtdcPA5vjGZUJLJLZN6TecajG71R",
  "key20": "5bhBqgZabNA4R19EtSErtcq8vahWqMP26PUjYBrXH57bX7YR5FEnwn4Grc9Sc7RVhXWoztDVnJVe91aDzSAELwBE",
  "key21": "3VEWBfhskXcV5ykCXt2TaWwnJhdkELurJaJrDy3vs9aJG1S9A7bf921eMfk7uGz4MDX1kKRpusQtw23qWZtb1Zb1",
  "key22": "2SzQJhqY3fz52VX9ekyAG4YTsZ9MTTaYbWUH5nKJRqnZJiR3bNMRcgYxDv7fwRsQGndTgDQr8u3vfEqsLLjvMteo",
  "key23": "3axvHvjH5rNwEvg9VTSAL237BQNAmhJhU4Y4E4innbzY547SUvJNed5h2pSDh4GM4dEpZTo6FBzeCdm9Ps4T4jjx",
  "key24": "4jvBmQCSjSsDfxZa1vY6PbiaJ9KbMRvcrikKutzoKjXg3Y5bFwYB5MQA94JtVbY6kNqGmVo8SK8REftmnp9VBoLR",
  "key25": "kewLRSEnYpv8eGPdKNrXxGSvhPPqCqAqFnvwi2gBh6ZmMmNVLtJzoF5QZCsaukrfv4nT57ZJjAYyNFJ3njxFeYz",
  "key26": "2ZU1zGFqrhKCdbnpZ65bms7RqigAdywrAhou9k9WWgeVCYFsxN7fDSvtL2UegGzzKwdenvQw33KeXhZViCHDZy3U"
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
