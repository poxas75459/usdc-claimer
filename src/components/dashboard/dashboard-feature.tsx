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
    "4VsHVvc2pqmvtiMGMPeDkCNfrbRQteS4EfhKCedZrRhg9iJ9dvYEH1R91jAmevXAMYBxmmV8Tx5DtT6hSS4CXvoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qC6pFcqceN5PpgDXwopLTi4aohtEHGAQpzBA7AAzEa3tDMduxoRuq2DPfieqHXz4WcnYKthncuJLDAg3ZCN9sQM",
  "key1": "uEgGN2HJux7ZAn67Cjm4zM7Gu9sQm9HbYhh7HJRDEye77FqYTUsZsQESsoZUjpbQ7eA43i3GAiuuvEbykSMxP63",
  "key2": "2SgZSnXD28mhNeoXPwwEfFxqmUs5cKP5EzoFpcZzYULUinAn3pjTcnr5x2hS45r2tdFFhrzBKgEaPVLyUwDbmn7q",
  "key3": "42xC93GXAYJDw8pjQcEbrY1ueL9BXNkv9bBmhE3daSfCt5CQrdhSj7BPZ2ciXQqrR8UGtyNcKgLa4NTFMLHhPRys",
  "key4": "gQgXJzpZM2yDL17NFM3JL2e2ipmFsmCYD2h2CocjUS3DQxqV2Fi1WP9Rs7piiw5KPFRVHXH9E87ZB9EmKDbiy9c",
  "key5": "5TADejEExtHMAoz58FLLUuow2gz4PkJf7oFiUhdzr9mWfyNPtUgkWQQF8NqS68xwkEmwnGrbFZkBEDWMcES5mkMw",
  "key6": "4Zk7y4GFLbRwrhsqJR6LnvMtHfYkwP8EDGAxWW4BGufqC2BiyLsgcFNyjxtqgxa48ekRwox5J1QBGwAaNpX75CSD",
  "key7": "4qMjCwfYw3q7FhMYnHZzVFzghsa2XCC7Yet5WMFuaqck8AdEbRjKadLz2hgFNSDqDvRc3faULcq5YVoGzwhQH6wE",
  "key8": "4gFCzVgsJVMmYHEt9UqboY7N3FhSoiv1kwRTBmrpRAqL1gp3vvafPy9SmnJAgMkKznmwtdyg9aMYbPizvCprtyQB",
  "key9": "7tKXGX5SYhcaFx1MWwmKS8rkLxck76abPJwRgyB1En9shh1jRA3h2yvGtx15qYfCAiJ3Q2CF4H7dpo1hxkdu6nk",
  "key10": "3JEQzrRPMK2zRgTV7zJUwUPN9NnVwcvaBzFQ2FAAudx8CSvjqiYjQ5CnEFX7jkc46S6rfGgMU9HoTou8hmJJHp1T",
  "key11": "6iTiXGyEddvxEcGUMezm3kgEpdvW13yRxSfzvyQkgdDT6eZpSNpPueJ98m7YgSKYCZ9bwipCttFRaszHHCEhfUm",
  "key12": "RB1MUbSRwycbWVqyFyZuihmxSSWWzy72KBeTKUAVubsXgKfq78BGqN4JWi6CLbMDswtUsiAuYbsgLWESZrtpLjd",
  "key13": "QcA8NMDdMgNfHNwUjAckmxUJ5qQReDBYctpF4ZrWxfKcU4o9jnavyspiTZ8Mf9qNWGWv77fRa7QH1Nzxbbo8Wc6",
  "key14": "Fi1fi6ffsFc16MsqTgTbgHL6bbCYuMMERD91VbLQNuXknxQRiiZdjS1wuekzTFMaCB8xQfqiUddJnaWgQSgvb5P",
  "key15": "5YJAsizCp4cuPAP4PwKnzneF3XgeJHPZKPy7cFovGHsoEcBtDoiwDsE6fJf5skRg5L6Zc616W4EWE9yK7KpV6x78",
  "key16": "3ujYxV9DivZxXsoynEVuRMsMPiEtg9NAKgr5W3U9u9axaYtb1NNimwkLm4Jk88AAaAe95Kzy6RaUzV57xHGANoiP",
  "key17": "8h9aySe2KL6R8EVxx79xPmm4f7srEPLWwLT7QqCbn6wrzvR8TFeQNkmcvC8cWoN6QTkqFmcxdxd5bVPmxDoDCgX",
  "key18": "26Xmo9v4uHwrEPEe5Fgn3cfusCM7Y1U8V7NsxsnALPWXPinqUXjz6ASA9x32xwPzinydje7mJJy8XhXGr9X9sEhV",
  "key19": "45qHUsmJj2s9X8hFfgtNQHjVV9QUBSDM6ZWks9ZGmGF4DVTPydYKZbL7CXAMfTcLBXTAYy5fQ5cQzZtgdhPyMaiN",
  "key20": "3DcSCH3RBgJXMFXjEXuux26uxWktGmtmRPWgPGKB8bnTZziLXDKstwJSJoezZAtjCj73TBGnaMnK5WDoyL7MFQyr",
  "key21": "5W6MEGNqCtq8yti9JRVHqViDHgvditimEk6YjMVQ5tAuHkhU5K7LcVHP6PcaCLPMNWX4SJkWUoracbvQk7iYL1ZL",
  "key22": "2hM6xeHjWb3xwshMrpcnLmJ87LAf26xa3PNSYGtC4SAYsZs9rGYejWvfsTy8DSnjJz3pQpQ5J1LqcDDY9EDU49PM",
  "key23": "46YJxxRQ9ZvPaQqPqomhri4pMGUjJiquahgYJcq14f8DJ61A5jksHFQaMARugamEGNmyUmrnsWK8ME5FMbQNLXu1",
  "key24": "6wtee6T8f2tjiyp5Dmor4vUuMESWQCJYi9gSRRHkSwQYZsu3apiyt79qEnrd9itMd3hKZjNEBFnX3oXC2y2e9YW",
  "key25": "efWtcuPujDrxkKgcTBXnjthVPGeQgfv76dC8ty34cSEQ6YH6Jsgawj2EudsAxJav9iAdDDJMy5VqSfiie8zASie",
  "key26": "5xoLL8V7pzgKvsbFNkdaCmKFhUktBD2NC7qAm36PTpQ8CwrU1EUNxZA7vsBnnFiX4XUWrGNs3ReZ5N7eci2i9dyd",
  "key27": "5YvWAjtxS4kvGCggvbRG4Su52BzbkFqt9DyBoEEJ7Cj8ujQC2UWCsb2uVpEmbANPWUh3oW3DePj4mcSzmQpXBjL8"
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
