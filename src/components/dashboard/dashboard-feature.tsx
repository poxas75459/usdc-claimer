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
    "kxrxf75zQovAiis4vjf6QzAgmNUhXqzUW6294kbT7D8U1LMy813cZT2TAt2vxWhSnYTLrySVSJGnhEuTMZLVqGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29RkSq3NWfoGmH3HDYgvpMPw4uVUDJMrChvzrsXHgafjgz6vfBaZmdSY3aeyk1gR3Y9G8bcLy9ziUnUMFvTLc5XY",
  "key1": "4j7jP1VMf8sm4W6qvuype5d3yFsnJhvDcH8JKM469o5ZCT838p45mwdUxMpxftJoNvvvqgFL1aiPFYm2gLanvGgQ",
  "key2": "67JdNDxozymTSxNipyxFXh5jSkVzD4dCctKbHttN4hXySuxCQkmBTFABidSyi8aHfy6zi4V737zzuhMcMUF3doP7",
  "key3": "5Wk2jsN5jC4mEvvtwoKPGewMuu2pgivdvBhAPf3qsNkCJpw6zWqLJzNLGfvw3yGGmnxTuKautmaLjyFnLY7unRcS",
  "key4": "4reAv2RwCH6XwyQ6pTQ1StbUuzTUSYjaMDzNxjRZJ2dByhmoKDtjDxTvoMuLiuwCQ2GmqNZGyTZVLKtPee9x2KPW",
  "key5": "4LWNnnqeZQftnpSCCvEEoQ3VBVMfTm8mxK97QaLiVoU7DoasY3KK2QnCLd738p5cuvp8K5PSrN6wfmt8RAZQ9uDk",
  "key6": "2QmSj214ZcZWAfb8UAxeJpKqPky7B7jPnmpxiCFxLK6n7MaWk8iUK4KxjGZiQoxAvEA9EATs6KFDR5zkCATQparQ",
  "key7": "5iDFWHwy3E61xFiEa2N3n2wBsJmVwvfJhSx5F4DBQQbDkYrNaQdja9Rdu1tP4xr9KQaRBQpySnoEGGLNBWdN9Ug8",
  "key8": "3Tk4qiuoYCsmoXJFoBJNu4c1eaEgxrYoNHtmErQzPFNkjPWcnXp19ojaB2eg56vB8eFqtQWjacN83SwFFvwpBUDw",
  "key9": "4Wm8AdxVP7UpqKwTf9LixQTqkJKhu24ad6h2nhp2Nvr5HAahTTEMSXFPDTmkunpB2hbJn9cjXTAKmttGSyexeCNc",
  "key10": "5ECojtNm9szKc1pzwDAstX8gVrfqXLecZTN8Naq2e9RNcsUo8QPnv8mk8R44rsbmmEJJbjqZk5v4BQdFURwuj6De",
  "key11": "2EuTqowm3Ptf1y51Fe2JiKWqU4a2msN8t7xNcHxCiBCqMmZ2gGrBe4f3uB2gNkXaftuQG2DnxdqJVvfQQDoFZy4g",
  "key12": "hpbBhj64xZRm8PSDpKTNTQdEgNqXeTx9jrzzTYQmwuYe5HQqugqjP4EotAnd3KSGJdmt8g24Y3DFqEPXSfT7dV6",
  "key13": "4V5NBEnARDfTYpAqVCeJSbkquii75mYzdTRw26quhVCiveUzeeCDEZ9yrRhCCU4vHY9GC4MUH5KEyHMwL4h1Uy65",
  "key14": "4RbKR3Nqri9PpmiEUpPUQNzgAMrtkWcpC4GPTvgpKRgMXhJth1irTscaJzkw2Rr6UJ9FZKAWaZc2nWXt49TQQZod",
  "key15": "2oENkixzqRxDRnY2ouNGcVkB9edkERcsLvyMpyjaFiYGqVE3CreycXYc634CVmKYtc7sVJKP4xgTSUpox698XLJm",
  "key16": "43zutHEwvnUymvsAqoz4tUH1836d3CwQ8JyvwA7jdCfeKhFyQCq875JPxTw76iy7iTYvPatLyEoqg9ax8dpzkwVA",
  "key17": "MHqgnJ6k3FPazpjHcRCur8QThYoVwozoHyUuYh9zihRrzuianKBqbuHSHVafGykQErEgN7pjDWHnTdP8giHe4R1",
  "key18": "4J1oWd5f1yHyybwsAh3Xmd5ZDUWTqRq3SS4Uie1mB4Pi47cAoNThT67ndYucRtJJQUUj5HBFswqFegEHTjLS1YKw",
  "key19": "4qxNYWgXY87eSSv4m7yT2UDzaUxEbgTvvL4GrwrkAXRhfptVjFZgoeocRNDBmwJtPP7SyH267oGnddNQvg1X6bBz",
  "key20": "2tAMprnp944oJsRT9QHKJnBieR2Aw77jDLMUirTMd2wHUQYRzbf1jG3YtwsndVZ1TMfXcBfsj5DA7bePrVHtM5ht",
  "key21": "4ZyMBDiohH12ixagd4VwBbwiYAHDHiVc9jYyYE2H1Y2ndptwfUx3zi5aHX2Y585suQ8bjJoGcZ7H836kJjywyxqt",
  "key22": "3isKnkCxERJAT3EvgXdqpeevHwyxjq8DK8ZVjRnL3LNUiUrRLPGqRCWaXwKu3irxCZAkqK6mgMXqFnq8LifZnNgY",
  "key23": "5fajdf6HfbR1J9QVRdEyPJDv5CPtSUnyuaq3zM5dZfsQ91tKhFTU6YPPuTQGA4LAwRpfie5hVPAfBe6PQ5yDDZjM",
  "key24": "5cNFZBLpNJAodRWioUM3F8ytBJd9Fpy39tMbQuxdEP8jBv8uYQb2ioy5bNF1dDyYKRyvfv4ZZNkCkaqfT4V7hdTC",
  "key25": "4ADrZ64FACc7PET6cPk9GQopEVrjgwuL8aeuChzfVFoWrgX2mbHjQ7AnnEHao1YybSr5Ko8ceHs3vbMaqVbbQtU5",
  "key26": "2KXQ9SVdoPUGLAmkwm4a35VgKjk4d1rrvpEaVzrRzNEG8FfAPuc9BRa4Kas1DPauSLsLtAupttLLs5LuFUt8zjiR",
  "key27": "3yhDMn55EjdsAmHsaZv26x296uriQkRagh7QC1dwXpNaKB7Mo3DuigDXdTjfrDkdZAeJb7Lazke4Jjgo5g3RJ4vb",
  "key28": "6SnXVknXA7NzjySd468PByxUtESJz3vqqAPsmk8BsZRWc3P7YSVVFs79vcR3gJ8cv132S6wtz9Z7a7vYv82tBMY",
  "key29": "5Mx8vz622MHHMuGzoRhGBW3TSRkUhXECmZWfdvoFTWGp6uNt3cP2rxXApkfL9mnkBgwpNngheM2yVtNrJnWSgQxs",
  "key30": "JU2odm4SHDzNesCBuFyraU3FshCUit6ctHGDWHL3eXAjSLCqB72nVoJ4thTm29HDTnCtHf1y4pkjdddYFE8ASzG",
  "key31": "63MHZkPmkJuHzFd7cpdZf3WzZNzHbnoAzV1ed8e2A9FCWSUB8BbiAVsr3xB6s2GXvTT2iXiEJM8Ly488hGDHrD5h",
  "key32": "HHArEGyNvEdnaTdE1nUDjtm7H7EUCRfnZyK1kpSbERQxYmLSEzFE8nTj3rj3RTbLx6j9zEMJkeuMLEMN1CPP7TG",
  "key33": "2oa8D63xBUtwwGj6BLZQfky6U8B2rPYkYADwCqdSoFmX8RMHovuU2ggKU9UHDHCjP7BveSuQwMtfRT6RtUSonJMZ",
  "key34": "2N7KyqwjMNRcHLnV3jW7dqPnq6mM7nyt8xqrCnt8EbWf2UGPhiLth99PRAVs5yG3ETgfQaunBo9qarKcdoTFbRgB",
  "key35": "5YjxAxS48XFa2E3kzGfavjgxcsuDwhpx3Rqi7dnkHwSKM29U53VR46QQ8h36h7neo49DueJbpcsVAeA46uDHBkkJ",
  "key36": "XkCEDK2jM7CetSox1VGp5VSHfF5hvQMStbG3vzHgNjeLstKDZAYkkCptw2MvdwEqhVmiBAVDtNSutPmeKVY3wuS"
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
