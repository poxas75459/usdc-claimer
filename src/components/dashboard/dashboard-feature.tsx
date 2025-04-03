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
    "3XPdxtyVUV2yMVsFSU8GoWjU25rm1yMTVC998mZSh1fi1rudcRvtgqDNNnG7BbpUcRrHkPqj18AYkbuj8tgpTWjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxdBoqepftKxFh28L34EZERLETZnVeEDT9gMLKFyRwh7rG9kpDgusCq4psR9pp4u7FSwEUycWiUoWaHndS4ggVd",
  "key1": "3P6vuNNRd17Ep28qvpsXSSjZjz5qw4tBBLDqsV6NLa7fJPVw2XcvUzQDLs3UygdRBhnGoYPPXKedjV3tV2kA3Z7V",
  "key2": "4pp2qzmXyzJ8VGPb13S9TJvMkMc9a7UPKAvccJSrRxGAPAyT565wZ4YxgyKjc4YubAaCNBJCcMEVch3BFoE2DSxr",
  "key3": "4iXWuorWh73USxiwRiPUgbuz9sfUqYQn6Z6dymUF5xgyXnVPUQPrkB8yz4YJy41f41H4iSRLYJFzZyZxunwB1qvM",
  "key4": "42RmPeoBtX7gqMfMUCjfmKnr2VTgCwT7Zz7KpF8A8SHQJfvYQ7YAwN2kr1aErGUt4BZrS6p3ZefbXrwrXmzYaYjy",
  "key5": "LnweMxGf4KriJcYkbiJFG2wgNQqGSeEXVxYjj32YcWGGdVJhm4Z8ZZetQHCwkTpmRAKVBA4653Y9deirMk9Ka1y",
  "key6": "2YDq4zQxWmaPtma5kBLMeTExYuxWKtjhtrrMheaK1f8jy36ZmgJG6n9AS3W2knNNQq17SBwdeQG3sAktYv32jMxS",
  "key7": "cGpExsa4Hjw4LxLaRnrjAtzm4tbdE7XSpn9yEN1sk6XUDQeJM2arScXP3kQmDmumXijfpnsM13Akj6TpzFj8g8E",
  "key8": "2th7S1Pot47BAhzNFd8i5kn1W4upLfb1gxcWgZWJqKSqrXAMiRtASqzkvyyofJCj7MK3wGYxLJLSrHb83bUfr5nA",
  "key9": "2QqVSy7c7U9qD5eeheBNvpyXn7rE5U4cxSLmezTrDF8SAvfw9BynpqC2kQB9HoQmzbqqKhT55LFrb2vrG1vptAeg",
  "key10": "eCM573aCXPwoKxRTu1PKLA5jLJohuNmAeBU5o5FnZ5oSeYG2cD1x644JBh5VABbSTB37BqqXhBht67Aqevt8mSr",
  "key11": "41knTh6r6xJrvXLLDHj255nBLEffeVM1ymaXDE9M2p8t79DadDebfsc9UfJYTwd3zWaeavjv8QwDyce2MBgQHgYe",
  "key12": "3KQiSQX6LE2dR3ArqTwJUMufkkQXqGDhEZc73D4ojK8BuQGaHnA5c2R1eKaRTn2JhCYrSWioixmn8e6niiBLhfiC",
  "key13": "47z4vmYecf9QDtmMDDpJPoZi6Mi7Hz5KFghZERpm7qVFFhCrgDRT8W1ZGWYL9B7AF8C9T5knVswoKwPbgtSc17MG",
  "key14": "5CWSZVSDvF6s5ExJ9N3NpSLWpyEUkEKXC8zUXUMqtCyYctuxSXhmWWoYQowT6Pfn2dPQT8ZWzYqf4D1VfsAMKpgL",
  "key15": "5ZQ1u45vsVmBZSDs8LBCVhtUtE871RLzek4PFhdksWmGfBU9PGGzjuGGbPZqXqadZwEaSH7pyVb7SqBgt3BDjgsd",
  "key16": "3GQo6e8Mw6MQaxwPdL3McmwCQ5MMJidF9sFjD8VimBExWJRG1jMhe6qoarFSDRoUaMgbEvLifhV7g1hepC1up31d",
  "key17": "4AYhXhetV1bYQLTSvq2sVVrdrKb3kveM9Cb13cZzSfTE5dr13f95APUz9F9ec4ZvwqmkLmae1DgQcW2HseubvHUF",
  "key18": "3XNGoNDSJVUWLqCdiaQK3AdcKYWEjGfqcgQdq6bBnc5s4hu1KmwSPw1ySLoJMFq8q9CXQKr3UYupQRkyZY76QSVc",
  "key19": "63hsr75nEcNxX7sFdDyzFPhMfJMTkNarqSUsXk87jtum7WSEWk2Ws47xWbazWmGjuJFyWYEzMNf23HovsiP59HPT",
  "key20": "5tNG5Yf3oREa3xUDZ7kR6iFuhBTpiuok8Pg99GULBbCLuS44Wpc1DkKnErm3uapF5GSA5BA9aZoG8QWMYHW6XkMd",
  "key21": "6VZtezGPVBMcz5HhJ6BZW7TkidygY4NoWVA8VfT6tmYfavWokyCB75VNR2jqyYUu9ANP45gEKtH7LYW5yz5ddP4",
  "key22": "2mmuxr7BNYiNBeSvxaV7WFDCwVaQX852G9PwUy898WnQBvPbVxgn3ujBTpiKcN8oeSu1t2hadRqkFZuLSjk5qREc",
  "key23": "3pLfw5rPYSUBgVmRMcQWf9Prz7XBqGB2F4WwtgZzmjPKWzbgH1KDosLCYS58nfWUJNijZaNKCW2HtE931QBM2xMY",
  "key24": "4xhpcw9zMSL7Wd74pfDZ2jBBS3uG22Vm3Uf2cn4fWGtoNAvT8os97RdDsUEW9t62YgoKdjsS9LJ6eDdPpMjr8apg",
  "key25": "3w9YLXEtgCKLUjM5zbrJJeoejdftcdb6HoXwjZ5CcdPAxwoD83u5v5CNdMA9HADZGirGnfq179USZWEQD7EM13J",
  "key26": "2ZpHLLUzyXy1thEyK2Rse3XgFQZgy4PTMgpr9GWYM51zWCAS2fUuwA1Dw7U8MJwQ8DXSBdtZfCbsptewhJDyDWg5",
  "key27": "47zprC7B625X5h2e6KNYDHp3oZhYTD8pZS4FmzyX15GcA8fwvvSFcnu1eNXSd9YAKKx4hmjcVdR1GoepPEUtKxuJ",
  "key28": "9aMeQwtAwBiu875NiWy15REDjNWrhNzqGP3oE6bp3TDiAx2WM332x5fTar3RYLTLy4pg7kemLEztWyN8gd6js3x",
  "key29": "4aT7X2umetynz2EisGjhC7WawPrAtgJXYmheFhtpq5VwceQjBbvtgzUAmis7gGHbfjkgCtzxbPSzKyWtvgKXg7CY",
  "key30": "4QE1mkP8vtTUBAR1dd6UnF8tygcKWcF9BCG1yPmgHqaLfCtpGb7Ej7ZqMhtBD4DqxQzFC3WgEd1DExjqnZprbjs4",
  "key31": "VC8FY2MSganRdHVBFhzJr4dtmmXKQW3LpEg1VuvzY8KnEcRMNKmGbATtUt4RPYYoh2JxBdRhei7nBmbCvytshYe",
  "key32": "3kuoCi9N9FcrgUEUTCZhnyyUnhCt7uWiNSid1fvwwbwUsRr2JDy93wQvxByPcT6VnyKYNwQ8V276MByboU9s3sk"
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
