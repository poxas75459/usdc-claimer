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
    "2uRrXM9b7fvXponpPjAhqbLkYqrrGriLhQe4STKnyuH7u1HiGqUKjcExSCGrcEJoL4epkoB9xBP2Dph3Qtqdhm6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2S1Urbf7y5YtbW7vGSX9ttN68rVURFdsJtkt3fFodNs44mB2SvVy5gM96yTtQ8tbVSM2gmgGAsUNNQjJQDzi4D",
  "key1": "5j2qcNQZCBiREj9QZuMpWGm6zPfKBw23vduAVnrBugofqvrk6d1grgBaPTbv7nufCUuoau6eAxAop4bt1ZtxDKZQ",
  "key2": "5g8oL39Pi3J61kCQZipoffgopXUvBcaD9PY7oq6jcmb5427No3iZtdTjwy9ANjo6r7VpdP8z1bnV2hMmpJnknwXT",
  "key3": "4e8f8XUPE8N6AEtYc7udnqbaK5rD77pRDqx9CVkHe8WYzQz5qMUvH9uEBCZkewmdVpYp8HEJCpv5wn4nGxrmhzPu",
  "key4": "35RBbRMGz9amvz3SeWt5Qr7K6emotvpVpFkvmXjQ755VQgZNU24ZW3xMZp8jMdqasnwQhagYMLLbsqEjmJEp1a1j",
  "key5": "xQwtdatdt2ixbL7PWHAmezp32ccbQ4GgUE7MubUsEjswQt9W5nFvC9pSmbCCHchBxTmRscE8sZKrt6gqBzrKvj5",
  "key6": "c6EMJYTUPyZ7TaZBufT3NuKcQYm5KWJjioX81XzH7S68p4oUM9Vg9JjrZwRR4veZtNC5b8EjbEwdVvNDkwxvy93",
  "key7": "39RcAtttN8otDZ3k2dTbnZGcz5egciYXb98PVFAmyFQGQiY3kpkFQyrVbjhwwJEQqF33HwFyJgSL7Zin8W5LbBqF",
  "key8": "338wKpPqywcUQ8QP4iKkPuqneTRoWnw1MFEnZZCfMTPwQyhqutq6YxhbnVoHd27of8YxhejckSnVu2ogYMHFmkga",
  "key9": "5JMXjEjJRrqDbs716o3ye5T2oc2Z43XyBarw36MLjobVZh383krnRfFeGeD6sDGgdmGyGYuC2nHGku3WmzzxryGm",
  "key10": "2KzfEiDRTN4GTFKa6QwVbn2oma8WQZKxEo6JzC26fLM1sW57Pwu6rwMwWmSBSx7JjT9nfgepqYfBEXMHyWYFjo4y",
  "key11": "4Df7wGV8ghUzmRrrWn6s5mPRW3RT8q8R7GLi6TvLsDdY8w6j8vKojAVPsWCWNoSFf8bGpi1gSTmgcWT3tH4duxLL",
  "key12": "7nhkTGJXSBJK2BUqtKjRRSmCTequ5TXXEiXHZyek41YSLbDTQnAnM9WP2MW53f6BEBdUsXQmZioRJRK5dHBrdvQ",
  "key13": "4wox4Dm7ZWBCYgcbmduNT2i7tNoZBktoBw56ADv1UiaZQ91Qc6b3eFkPufbwjDcpYijJdwAxuRJXUpCdSB2DtfgG",
  "key14": "sa3Zxh8uwtbWjmq2LGRcufmaV68dq3yhZ7ThUXVnFN2cZZvQapEz7VCpZ8Vy2pQM3RieDhdKgJB8wZghzBtYveP",
  "key15": "4wWvcR9yh5PDzMdyTyCaTVSD4MMbfXW5uGv7xscYxt6SWohHH6DqqUyxhshEaf4jqvkSBxxT6LLuT3Qb9825dRXj",
  "key16": "3UBRijM4AVjZP4cBjqnxxkDiJS7ZqL9aAyM7pKvLy1JYc3UNmheRVHbWRswKtJCVRo1iTgrcVJtApZQeYvavC8hj",
  "key17": "3SBsUVWhT8ZAgDRjg2PmVyWnAVRwXEQeL7oHokgoAQbmJmb81AGDdnPaKsJ89XmWK1wJ4wMNi7LpkAVNPEpxWkj2",
  "key18": "2ct2Y9DhmU67EM19pP3ubWcUAAkqBGTKqmZsK8gLd3vR5qFm5cSnWQWBp5efJahGstwW3Wrdw3qbzRW4QfRAoYZb",
  "key19": "5SEkVcdLz2TNkw5ZXbQ5X1ug7XUDpcDQ3arXgsPoxdCxqQ7gutn8muYrrsWm6fHTjmnH1u2BpU1QMg4Y6Xv4is97",
  "key20": "53FsW5HdyWeYcXf8kQ4YCQYWu7s2Bd5szTsiPNd2p24YHvn7EjzYSib4Lb4hAcM445cgPqcYT19gegdUcvgFiKmX",
  "key21": "5TGdTKNgCJoEoWnVpvCYcMdpoVfS9cUi5eMGThdZPi164QyKp1myny9yvAU3oG4MAvGCyRtgc39cpZBt1tNgqpHj",
  "key22": "4mSVa5moquvxL9mmqKP3u7GJGdj5Mm21x63Dp22Hj5p2UdqtQ6yfNKcSBc9D27vJCmrarS42xttXQDQrf5nQyiCq",
  "key23": "3jpYG8gAgVQSQ9p5BWAMAqJ4iX9mHswFeRA27iYivCTjEjjcaZ5xxaYqzrsuFSZrBkncQMY288HJDZHcVa4ndvaX",
  "key24": "3zKfe8kTz2e2VJ77p8E8ZhTiSXcuVz1awHXGGovh1Vr6PpeMy9uh8mbBHxTbvvG6UzL2G4vrTypNFyXH4eJMjug3",
  "key25": "KvcVpoNUbcCKQ35jKeao3fMarjkYLPnijx1v5v5txnJeh1Q6Lph2wRVidbUgjKnturaDxAcsP8Uks9xTDUeAKkz",
  "key26": "5qbGjiBhasVP4urwwH8WF9WY2Y96HD1rJqcdFMDgcezpnvjiGVhC9gNKS28zSUBXowMArvaNggFMHPaqCCYNyziu",
  "key27": "4i9peiB2NTTqUMH8P3YKcwksg3Lx28stPgjzggPh4iDy9FcMZEZMY8fsjuWELS9r7FPFuK9M2teyitUqhP8A17ur",
  "key28": "427TEK1JTZ3APgyFyvLd7sKocfWtBcWoMYLDjCKtZRHzdEMpjqV5ZBq9XoKLQDbheno1gQnd68FUuQnZStgT315D",
  "key29": "4p4X2pVKxQvPC5sJBQ5Zq4o6g7osFwiGc7ZqRxjNvWn1GkvTageFpS58T4zSNL5Q2dQZrSapXqHgqsK2rooRq1zh",
  "key30": "2H97ag25FapJUXmSqs5HEFRXpq5XsnFdWSDs18qZfp5swHvcZAKQusKFRGgukU5EJy4Ex7mZ9ZJfXFxGDKZGJSoJ",
  "key31": "3xgy7KXxb8WkcqVr98LuMe6KWpA6rUhtQtGreHGbFup7h4gBehqBDNo2E4v6BKYY7UvBLxJ8vHr4ixSUujzggqZn",
  "key32": "U34VWsSZLJGga8KtLDaLMtwgiN65txD5MqKJ4dxoAVQAACeJTLFJXMRMYXL1Eutt4bb68k3ZV7Yj2VpSVa76m7i",
  "key33": "5byTGMezsS3WZ77aXaZA3jLaRVzHMzgfgAkd9wr6GAhrK4v4gEFPuvHCEKdxxdy2nh3FfBhaM4oMecbPL8eSeh7s"
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
