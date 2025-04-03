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
    "5d6NfZETUqbvNHKZxPFNg2Yh3fzE4movsqZiQDvy3wL1UUaP62t8zGd8u36QNCEzzHqtBu6TouAgxuaMqr6WnBkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbjuiNf6u3SykaStz9R2MJSgjprxEmLuquAsJ1LaLzyPMkQfy66nCFMU81QykXcDZNVvhX2jGqRa7Ju4redZYMw",
  "key1": "2kiydTGGZu6fGa3Xh4f9S8Eh1Yz2M8xofDK59eL429L9r5obeEfKSLVdZh7iXswzo7UBADtZSS8DXtg9rgWcSnQw",
  "key2": "4Y28S4UQk7u94jV6b2kgrzaR6cv2u5jiGasan4gTGayD4Jtw6aQxBTk5Nq96bhv2sMCZmfEkvJS4hpaWUsiRfB3a",
  "key3": "4GPwYVZ9dgnN8dqnjd8Yw6Zbnb1Rp6WiWiZ2gw4xCRRysjEccw4T8HCJ3vRE617EXKZ1Fi7uEMuZDhc5yVJiBdZt",
  "key4": "4hmz9pSoSfuPwqdDqbyjFHtmReWk9k4QYT91Y2A81AphQe8s7Y1gU3ua3raKKKBgs3a4TFmXTpTZXeVXdvpJWYKj",
  "key5": "ohJ2mKrnn4MjnYfgngBTSYPE28kXFwKcrhNXTWQtYpaAhfHktWCGj4uHdtUpLL7rHsujRrmi2EppQZQdgacTUD4",
  "key6": "Qot46JwPDd33Z4dK2KAvqFkcM6ZP7FUtbgwJKc4Cew4gAfn8YbzLUyRqSrH7DgdyAJ2WTCMZFDCifY6toxZChHJ",
  "key7": "3RcVxrBNtRNR6mXAAgxBdJ3h81a7UK1FZzv55qJ9oh7UoffVPM55dioQTkkx99cWXiFLBi4rJGtpE22i4TMM2ffm",
  "key8": "MZFiJSxFjxKb5UBSKJzxueDtnv2QKpakZydSXYMujfPLq8tMHLLyhZqz24UJa3MKWkco7qxPBS7tZd9b8wdEVLD",
  "key9": "58pj9fUZWeoFmpNhCxh9gDiUauYxrrC1T4zm8p35TG4gtCtCHRAfWBsGSRgkcvd5XA6YoGbBjJ36F7FBFb9PTKhq",
  "key10": "29YZohLZcGQVDvYEA4d6ZNBacoefuYLbiXMAtrweLExkaa16qeGSTCxVMmdz8vYeYSDqjVegEscQLu4wxSaTGbHx",
  "key11": "3ouCvN4mLrTrGGijQAvsDoFvizbzN1U2r1JYBE1s1UVGYx3SkK2ZH9BAbF6LEe349AsrNUSsXpUTv3qGxRCk1wDJ",
  "key12": "2D8a4ZztdG4TXkpbwQNjPEJz5LbetFhpiL5G3x7r1q98KozMMHWMoDkYwFRz1oboyF6gcYSjiBFxhisQPNzB9eYj",
  "key13": "3UmLcxzsJT2Dg4qRHGSjpfxXvkjHGCVbePuc5kauGxpPGmiZ23s7suvxwGfKniKNxvuRURpXsdFzEUZJsQPvj8A7",
  "key14": "3v8ojq1cmrjWmq15TBKS1wH61J4rD4UCwQZuXJkw8h3NaeL89VQtdW48ji9WAFU5xpFLnyJZXGuo5oVzumGR2dqa",
  "key15": "4FArj2StigsLRrWxq8rj3pqexLFwaHxSy1qtfEDZWw35siS6szM3EDWLQEPcC6RCghgroKgFn5sPVW7bBJTwaaQX",
  "key16": "4emejxXze1UD5cxKoGSaaSkbxyZqkimbLnP87m8ZAZPtry2ViFrsLnTG1WikCBVbVDdypuXiFjQ3k5S9vpTf2siM",
  "key17": "3p538tuG2gSHt7RAhkrSz4T23TK1z2dju3UTwCvnzd2Rg2we1bvvVf2YFzP8NnBaBeBmtWQUksvENmdESzHSNMNj",
  "key18": "2VrLisdy2eoYEqkbs1gD1C4kxW8Cdko1263sPrEaYWgnWZ4ja3tQQZQ49RFbQx1X2sUKQKjv1SAhWXrvTqNUaR9W",
  "key19": "4JS8ux2i6DxJvF81ds8fBi3PUXCH6pi9gmPMF3Y78fowJQjAcnjypyyDjq1GfpuGopX5Hcs7GAgEfXGnEq7AN1YD",
  "key20": "9NoFmE37UEYusmUXoy5a6AUoqvdLLrKF1K2mDLP46J12EfmWviL7Jcu9GZuuQurAr2bxrJFNuui6Lin4VhpNWjN",
  "key21": "9VpPy3cFWFXZvPSJYL6mkRknCkmZQ6Z5Tx43NNUnKoFQZyjfiL4aCFkC6u66xdManiJ5WtEoiAVAy44gXyXLb3M",
  "key22": "2wrWXj5iSvatGVoeUkSg7dvdHQTqEca3PSWW2hbcqwPAHq9DtHXPBkEPuHm5uso9EP2zKqxorJ8hoJdy6XmWyxCq",
  "key23": "3nnq9HnWESanA9iERBR3Hzu6hDGuLwdPqBRpi4JyUdV8oQwRMzCVwPBPHPoohbfxaS4YUwJBste4YgFfRr4kVeUJ",
  "key24": "5Aw9qbfdcENc7j6CFZPd8nNBZtMoRFjbTjNuwqtj7fybGkdwH9PKGLnJ7B268cenp3uXL2DzyK3AXKNkrSxGUKig",
  "key25": "4vrbrmDNkKei3U5gF7Nf3WgwpqAK4LpzQx2hhfX1P2wBp1R9DkpqzTTCNDDPSVJ5AKEqPFFevvKYH9SEuKRfnKCW",
  "key26": "2jcRgU5iaSfWPVgrEWGWE5oan9LKq3iSG8ft8Wbr7g475Ne3nPiwk7JgPLkRypq7QgpvmmM8SKyRLFsREQU12k7J",
  "key27": "48vpPErcUeHz4kUVANjjup9ojMURyjjPTu6QMsXXDHrukYN91nxXqPhaavio2vmsqFXkZsha76zZxFdWG9ujcpz8",
  "key28": "3PfUV5s8rinpurWx6TyQ2HuBpoPC9reyTBm1tJjHbVyrjW2GqRD6oZ1oLnZtBJS3w4YyvtT9rR6zHgfRoUGBRvp4",
  "key29": "2xTT6XWovuBzsuNGHyYsCgCeMTf9oi67z2Q4vwEC2ViaH4KuznwFD4bkSNCJpTwYnzwttzrok8PZjUEmoyiXJJSt",
  "key30": "2Zs2TaXt877eLHzp152CJ32mVaSLM2FWP45nzvrTSCjJMXbSepMoLpXmiNFKm2BsGHNfPQdQMLSem5GdeGudKeQv",
  "key31": "2FD7nKhPkA88DNA896hEBVq9cgEwsb7NBehjySh2bSKWb3Tr1yrYH2NxehiRfcYbwzu3kFziTE4kJM3PAacysdEU",
  "key32": "3sLDTHNYg6xFPcUFrG3cfMNVdtc4P2Dnjt4DpU1iRzSJKnpnfyZLz5nTVB6XFm9m2VZ69qHB3PYwxM43S6ggzRfp"
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
