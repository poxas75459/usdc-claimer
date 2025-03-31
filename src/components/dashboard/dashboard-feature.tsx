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
    "3n6W58qL3vHAUVMAp3rk7Zn6yt6LMNo37Li59LMnaVhpfz6zm4vnDryqLk9TN9ULtss6N4kM6f4gWWyLEAAEBe45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDDj9C3P4c52SxUapRnbo632wZa7UhBMngpHjubLfCxTqsUEUvXWdmfs1RpoSLSi3VWn2ugePcShZr3qEH6AUTB",
  "key1": "4fGjGNtRfRVzLrkE8LVB4X28g8yju5gqiouzUrh7HBvYGjMWLMQVmhSiXhAhneAPnnfaJTSoa1xoEXuSqSkyXEka",
  "key2": "Aq2FkACjBHUPeBzqRr1vmVydDy6xMerSoFFz8xbvMizPyC4wt28YktcJTw1A8aB5BHbuSn1mJf5dJnHAUP9w4NK",
  "key3": "4V4SG2G9Xx4KyxaFSehuGC13ch3jeUV6gqMyyn9utf3mBGdX8qFc1TfoSdBSQZWhG92pqi6PrBff4cgr354NSPEo",
  "key4": "jQbmiyzjupHJCm3Eizfjisn7dXrdpGGPkeqWQeMo5VxTC1FUPnZ5tdHmpxByjDhhv8QbY69Md1KrRa1czeaonte",
  "key5": "1JaCG2YAfpsYExCQ7QGssDPd61XBhxmLq1jah6AcWTuAbHaLJWs9Gw2GTHSwkFweZ6nkpMHTP5ofEi5XrHKAQH5",
  "key6": "4R55hP4mNfsJbDpGathfG6P57crud8RMEEdrhZdgdMkSgWgArdqPq3aRk6bGUT2Eycy4JEuXWKvsCE7ZpeMTxiGf",
  "key7": "3iT7utXAy9yvnLpBhxKK54NL9zm6ZyTefBgwdq8abgufxUp31m9K3jkdwyU6vpszhh86ZWvYMYueeguEcC1QVNgh",
  "key8": "nLkw93TrCa6Y7H4iVwd2XSWDbqioJv7XT3673H2F4vNG6PupWdQkuwbenevHVaNmAfpdDHHuAARfErrqMfBi2vM",
  "key9": "5yeCnJ5bCexqd2Tk7B5ASxJQv9vyJvhCDZvQFx15y4in8fb31a31CGTgSQaMWRyKDmitdR4tgvvo46i4WdNYTg9F",
  "key10": "3QCV8kH4V92ptUNgxrdG6FYG9MBqZkVjq4Q4ZSPebq28yQCfDA1zwAMNWaqvmPCRx4KtxMuksjTV26DUvFGAmJT9",
  "key11": "2QQLjFfG422G9j9pcz7dzJwWrzQhoJBEnyMNa29AtCHiCJk15WsuwoFMbGBhxetpkpb3Lk1BXmnpdSQduj6eMVAB",
  "key12": "2MccZvN4WGo9ufC9sKfRqFFpcSv9dhXmWpQeG37aqfJSNN4GLGbk1iEMqMfDpP5UFgATT1LZ61jSDmPU4RYfiaSt",
  "key13": "sa2kcXpFGSZjSDXwso5dRaX3UbLxcFcbJzNxfBcNtSFdo9p94NXzmNh3Zcdg4xRh1mhbodc7zpR3xbQNV28mMLp",
  "key14": "DFJE2GJYYHyDWiLzfXmeaFSq5X598h4tCdckHoNN7NV4ftbyf3yG8tccv5AhE5drYhpuunrUtqvwE1EHamkBC3f",
  "key15": "3hh4ksCMsQyb5TZTY6kVeLBfQkZfC8N3dUKZjm3qhufSS2qzS5ykJBPsbojFqdYxEhWuHgDzNCLYttmAeNMsRKwR",
  "key16": "3HuptvieQthRnGdpWA4kb7WTAvWGgL94pXSeK12YjD3iYAeokJ7uPupNceFgWgz8GCdR38BjhHaY1nCXMhR2arvh",
  "key17": "smfNtA3DupSHfcyFwPohLjawAwU82Wevf24vvnsadCB3LqNUfk8YJaRcN5J32kK7phvdBQrvsAMvRUAr9DLXogj",
  "key18": "5cXjYiCTWS5w4rUuAcCo4FiapyUiKkED6VQ1CuJ1YsmWrMVgWJRxbkpKSfpS4qc1kuwSzxfqfRrTBbQo5NtJChRN",
  "key19": "3xPvZY1D6RYx4yt12eS9rZMK8XBUaAvWxPGcM5SPHvcm6iDZXsFDKEsEFuni2RaHTsptHxmMnub6ciyXy4VHaQyi",
  "key20": "3qv5j1otaeJw1h6jUuwqaFbvnEnYMu7Buk9XakvfUa7Y8qBGHycSXuTBhHNpasGJ9B1qynxCBWNZSpr3J2M6ZKep",
  "key21": "3kbLYcgEuwjW43dYVTCocsmGDfj2oXB4P3x86kqLsnRctJuw4iYoJ1GmeVirwMHak3T18aeQY2a3qKDMLxaN45RL",
  "key22": "Bam9q1Z7mcWRqY2QzSYS7o5xdV5P5jFiVxjAvndQZrdxFnofiRUNCetmumA7H5EEVsCzCotysYMtWwiEYLoNpm7",
  "key23": "myvTk9chHcD9vqG6LK2N88uwrXecfEhJdZQFNYrvSHS1FNMvxtQvkiUfVby4r7UT3JrbrqYMa9DzvGYpy7V4BZi",
  "key24": "5VVZaYhEVnTzV3Ag3tbMFoofCsfpHg6eMjoh8N5SmJKWK6q197dJcfuCpGgsTueBMMcct3638Sqtx8NKfTvtHa1Y",
  "key25": "51Cx5WeR63xXkfVE4Meej99LtPgfPDt6sDuwaTRQaHWL6yRED2ukpH4kVqJJ16pPnRHkHVGfnWkHgDH28dQrkuVf",
  "key26": "5zWXVPybVxx6xsAPgHxYv3wDderFFEo6mY8g4NjET997XgHV6CtZranRSvQbLLn8vgcgKhiWRdfwQ1isd7TLwiGT",
  "key27": "5BunY5gZinXSdgq1cBvxcdUpQjU52qS98VNixgRJ9q3EkukFZNp9kfPCLyxfWBbt25LGN83rgJqZ1QVLPnNCt26c",
  "key28": "2c9mrZuK8uawCYnBAxL1t4VkSfaWg2mAFoJp2YRKozp2EpNTzP41PMHqERwyVjmawphL1jofQZ1jZq1KhWYkqQqv",
  "key29": "5e8t3AG6zwnE1hGEnVNwMzP2ZcEmF6Y1bZhThV3J2nh6Sv4xj1WKrDnfRsdmarmBfY6jcpbDKoWvQyB3ZJ9NYGW6",
  "key30": "DHJ54HHidKyx82j2TnRCqTD7WEMrBcLspc5pTgMzdbjcubTxix8W7WE5egXNQv7GTugyw4VcuWCrpqWJyDcYZhT",
  "key31": "2CkpZ9KuczqNyf6kXmppy3wKj5gjqSc5L63p6NtNpF45NTJS8ounbk6JYX76H6iALHE4JcmFjWi96CA13oPppzST",
  "key32": "5waC5hXbVF7K2bwVM1G5wEbguq6oFU7pZ6HeRpa4TuMVijvDeWhuA9zVBdQMktHMJ7diRHGFiR8m8B6f6n6CmwVS",
  "key33": "3jMsC4aKd1wURyckiGukM5EHA8n5qBH4ZHjD1TSV2cmsp4TPkKjcx2TrVPfxuvUgTHeF1W6et6RwbDT7nttzeVHw",
  "key34": "nsqNNWjHnmt153d5WrqcrmT9jU1A1Xuwh8F1aidnCVTDsgGBUbaK1S6EqTS6hswcCt4GJom3W3aMK3gQtR9Crdh",
  "key35": "65Kzm9nVCgFFunxmqXsKyfe9NCVgDtYiwPLQYBxz9QssDLubWpswLzmg8FVjtXu8eRrTFwDnSPLbuUv7SfN5rmuc",
  "key36": "UEeX2E1uAkhg3Z9Mkfw3TSebgmqMh9eZS9oXiKDfHQmoHKCFhC8Co7DxBAbzbAiEakZmQhrvuj7eDWHZshbE44X",
  "key37": "4fkVagriKb9fNkGAQ2heDFTjNvPXkv9hTWocRN3jrZDUUGZgFpt27NNDpKLfhMb3XSx4AzvE9SsRVZP4mXqboSUk",
  "key38": "4YQKcoS49X2w7ziUAJwEQNbXWjJptcXzjeGVFofhZvWS2D2TBeuXAn4EAgMqv49ryXAv6BCHAEDw1bJ3zMT9jtDg",
  "key39": "4RHB4hmYhuWhtK52srPeRZoVXxLLTsf8V3Wcrf1tSjz7mA86jRcqPR9GDousUexzidSexZ2W1RUQnWvLGGrDQTqq",
  "key40": "2N6W5m9dCYQ8JH1KxN6hQk8hy1YrVLstT4XTuCYe9p5seW2sSHbQX5kQq9S9rfHUJCmfAvW7kvkfyxj3phj9GJDJ",
  "key41": "2pstdgBL55saoGMaaa5h7tDyJVsiBXXzSitY8YKKVzxyM3dNn8XJ49xWaQA4MYAhjBoJW8efbjQs7oWATF3M3yo3",
  "key42": "5cJi5ckcQqFc6XstX6Ymir3v4nkaXStR4yuYAtLeey5gBG9AoXUgAteVEgaHRLWimD74kTmzh4qxpc4Nkutp1brV",
  "key43": "29S61DnmLFzx3bBc2pDXXG31H8f6F3eVBtJZigtvLR6KrPbnnynPEASQkXamn2REDTphEgkPL2QUGxEpLYD5awdf"
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
