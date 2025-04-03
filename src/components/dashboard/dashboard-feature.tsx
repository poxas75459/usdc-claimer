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
    "59BMKBmREc2FaREyrPkUeA9HvRHYSeMk3K3qzMR8cMb3EnGFesvZxEtkrUcPd4X8P9cAWVuekP92TD5NfgZdnzPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbuEZEwcqVV9gLa28ALpYiNqWxMTVyivgkCkqnHxQoGpamRme4XwuXbfg7GfTQS3toFLBNrh42cV3GvCd7E4m7J",
  "key1": "zshLc46jFyKJz7hN99wJRh5ZkeT3mr6xYniYtdHq8jrXbPzHpWxXZ5MfDESJcGvujgRKr9sQbVc6Cb6vMgWyKoU",
  "key2": "2ss3vs2SovznMfVuTfw8qZK2MCVmsfne4rgsJhyY93i4hq9oFcAK1fu7CfF4fhzQ3TBWS9LrymYUjMbnbHjAvzzQ",
  "key3": "3A2FnYRaHJHdveHKQBpmHFLLmts6Sqg4eDvWJKw1ribGn1Q5Z5zZ5xEGmjbbLdXwHErzSD1pQmCrd6MP4L58ifQV",
  "key4": "cR5DQBm3WawzT8HoRVmQPgGDm1GjVys9DA2kHh2tbYVSLCcqKFUMoQwXxthPn2BqvaXvUPZopWaNR6b457Gvvec",
  "key5": "5C4XMCWqhcYfqJ9V8XUJwg6srhtrwytn4KCzpYH6Ghp2ecDBPpdh9EaAKjYP2bakmJKY7ozA4AJaa2NJBHcjn3Ft",
  "key6": "2pgtHxXRvFH8hXtsPqUWsb3FYcK2x4chAahuKTx7fcahJzfB9afQwb7kaRcrkZvLx5sD5o8vhNPTyL37yAhiYZDG",
  "key7": "351E52JaMU97GLRspmSteCkd7o4zZu6cTmuAosSW3dSKPSuTNPVaXXzjBYZFP8WZBY9fnPjJGczccwAKVs59G9h",
  "key8": "3B7mbkqoyQ8fBucuNsh3cfoJAjPCxwkcDwWE38gbi849L1tfjjoPSHk6h4TJcUgKrt9Lqpg4DHhZVS4DfF1AoGuY",
  "key9": "2gHoeyF8gqHoQQrX4EXotVHU7QHytX1xZfvPBTCENZeyfVfF55yV82UGQ9eUspGwVQRR2kGpvwT3rTycJzMfrbRy",
  "key10": "21zYVEcYiMycG6gD2ejKoFevg27d7LgpQ3DY77PvsoQ2Dipuvkv2BZoEvbE7Kw9RiMF9etxCNFUmyQ7B8eKKjUkb",
  "key11": "Dt13L4LhYsg1Pe8H6aNzbBrAHymYZnvuZ1pLjCUiix47ZVETH6hhJsH5354AFoL6ta1pqs2qAtV9qXcRLZ2Hf6E",
  "key12": "24EUSGcaGpG5s59oaA11JdpZ7Nw8EqBWfWmyPqWj1duLiWhV4C772B6ip8oTZZXEeqohJBZkad5eUFtxiwrVikr9",
  "key13": "4pAbDyamFz6XhEzYJo12ECU1WGnMTfsSt519tbJ61WkXykiaT5jj5irXMpksd4DKEdmpAR6CGry4XnfDdHRZzNJZ",
  "key14": "WvqRHHQHNPjE6qgkjZWUahvgTc27opwEotpeXXLpy3jSJ1cqMTN4bGR6RHVgnLT3qAnFtJsAUaAeGXkU8kXCjQP",
  "key15": "2UQGfRX2XcKkBFGFY8sVZsypXy7Jj94D49YwMmP193W5buALnN26jUz2W5oGAWJWfHNDXSbnGdsMCa65JwQJi5UT",
  "key16": "3zZWJCkTLrrT36HJfiW8phov7NPpSuH1aRZR49ZtEp4yY3qHhfvs7q3GfChj7k9TanQtnQP5zLM2WrGHcgKhcNv9",
  "key17": "3nCiGKJbppcj2GMVmwADNaUYR3gxLyprxfCRm49sDuyLU2Jd62jReRxci6a5MtxWYBJWdQbjqkM2mBi3HnsLbUGP",
  "key18": "42mrPXSABdF33qqqvbVvvtJZAbdfjCSay6eS9xoFQ5S5eBEVAVeN9tPEnQYrnhWwRyxt91wQCiYRzhVrTcPiToZ7",
  "key19": "2pgH3ene5ubkU5cfFRpEx1uvydndBki3x6Y7K5fvUz9AwpdCbdHrgFyE6bcMMF5UErdcgmfevVbRsRfXFvJUiN8s",
  "key20": "4SHangnoQweSCyc4ms9YenWPQVqZoudtb28yUoBvrWXniAeagbMBUa2s4nHZu8Fe9MAQywyNmbhukwNwZ2VvbthC",
  "key21": "uYPomjxy83wfqBt1zRZaxBQHn8dB4dCjQkhpL9UrLsrfkJjxXZtGTBxnr1z37E1ehN6HZozooxj5Hexr5wf79JV",
  "key22": "6e7X88kgfHxP16PjY9U5D4qdEqv3MBjw9wFdNGY5uUAhG5H9a8gZ9zm8mNGZi51xgEuig3pUYcJaHPWzFyXTtRQ",
  "key23": "4zNGbmuUPpiNuw1HkSqF1SDzfc7CoqXtgsbPKVcgEbtLorKKEzBkn7kNGaxNGpzBrUHMPXyFWU7bXvnAoN6r5sPK",
  "key24": "3byNgoGUmK8hrML1hLMkmsN2RXPDPNwACtG6uiy27613aAfnt6wS7k1rqVktCSRSU7a5sEdmDrQynZmbvic5Cqd7",
  "key25": "7MrCA6jtjM6mdoXuCezcXHz1jbaPbJK4XvzBnyFnTRWtEeJdcGAuqhDHrDjKkqxK2RdQqM5Qz5718UQVffkpnsR",
  "key26": "5YBv4jfgiksCrbsERZHLi8URLL3YLEsyzR3Q22HiNukPhmdfhKXpJPaBW8P4cYueUaJw2sXVVG5MgWG9sxNuzsQz",
  "key27": "64PHdfzKy4BH1ZVktqfMvQ8rzCdssfDYBnXh5MNMomdDxsTnRPYepy2MLkJZQ9zyKPCGub41yP92MPc1nCZERonK",
  "key28": "4vT1FEhvWKhqPosiYQfKviNgJyzTwmDESGoRbbPMFu3bR8okj2315NwYcuSatmWHKfN8948sFGAAspNmYztVgAEz",
  "key29": "tPgYcFDQSbpJFLXA37zfAKLHoynRWwb9WsfbwVihWvT79dmWonSwMZ21okM8bUWpqkAVybSrEsNnJXDj8G7PNYj",
  "key30": "4JBZo9foPyVTGbaCfeWhr2Qd9QGuAeEoLtESvkxieoKzALM5q3bJ3PBL7RaGJWdWnVhsfM8sZrgxqAbHEp6DPnHa",
  "key31": "2NuJNMiByqFf3ymrG2SQtMveewt1qMVK8KSpWSvRhXu8z1jBY5bixH5cJvsxryDMLXmp8ohEghiemmijhtEHe3WJ",
  "key32": "3eJciJKvp2sRUEYREDGe7fLb8ixV4bGd9ZYBrYZnTxRWRYL8KHn3SawgmeUAevVGhVRLFGYfTc4UiYcpzi11nnVG",
  "key33": "4MLUFFroYRqDNSrdcmJcKyqD3ayhyxTDD88S6hhCnW6LhNFu54MQy4r5doCoKr6bvZd4nxjJ8iGgERNHzd9MnXza",
  "key34": "M7diPPxgideRevLqXf1E2zNkDMHYmkCiV2bk5Mf2UBCd1HRxicujec561FU5bVUWj5qHgbdXjdSCHWeoHbiDkVr",
  "key35": "4zBAeAh7nua7f3p3WSd945rjHGPQiLVaBcoL2ZAQci2RvnZhrTeP6pLNjMVqtobiwLJYwp4mPyrfxUwvMhs1NQXu",
  "key36": "aymsM2cCJR2dEiuhhXURx3doPjdXLxwwjb89vdispe5dePSaE9T6F5NB22RuDgXaUsBpHm5czwyJiVDJRr8wn8P",
  "key37": "2DuNvJkwEbuE1KWESa233VJUx9GhpV3nNmXqed8faygcnsAYAadTrTkaztWj4vFiUxXg8vkxZ91TLa4HQNCQjeu5",
  "key38": "5xGTgb92PikPVDqVGWJjEzfkrr1gtCjhiZjDVjENijca7EaEaJubTP5DDBhVdToXJ9Py8SmmzSNh3Q2cnKbzpNz7",
  "key39": "2v6qRE14DjhtMfDWB8QUQVYu217ivmtQamwbGV4xMjxVbW6apojeZGvy77UbvT6xcewz8LRTRKWuiFvUGepW8q3d",
  "key40": "5XRZPqgkRP9ynZHjoULsG9Xvob88NqP493dq9mxfZdh7i1ABHuUAkj6ZWvq31opH6ESfTjqLrs7jkctqog4FN5Lw",
  "key41": "b2igNZsHPDPbEKD4JNCiq7A6ekqucDX6VCNajuqatK3KRP5WgYk2taNMSo7ZGq4MvAn3LomF1wStcz8Av8HGhG1"
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
