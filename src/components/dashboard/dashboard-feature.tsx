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
    "2s2mvXpEnUqMpjRH3EaEneU2dug8JRD8YXDpTADJvFJwfuVHZ6eWbBn37HtpRQJkMvjLHMa8otdUeokqsMgaH2va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBu5uccNWJfBZ8Aw5kDqpqRg4SG2JdPUahmLxNoVc7NMhVY9XN9AZ3sQJn7bhfcDSDq5hJCgaHbEVFJAPeJepLZ",
  "key1": "33sPTEzY89TZ9PbNYkQJ2pvXzabvGKZxQ2bqss76aG39LZNF4bg2VjM2vpywTKB5ixHcVMoivnaLWGGe4BRdbkZL",
  "key2": "44Djr22fxQP11BcmzUfNx2amSeHGHAmuM5rZ5vHDxYGNvSLQ7C44YgFyYjsYh1fnBXfCQT1K9eoUz1f9Z2uNN6WC",
  "key3": "56mc98g8nwxuAh7vAGWiyNdLPAfvex37pQRHQ45jYNWZNrwhJMpthy5D7jBkgGoT1oPUPFsCLNiQAaXQb79ALHM8",
  "key4": "2Pwb2zANyBMC8CSguiGNJmfsDhiot7YJY2jYKUyBpKmFp7twXUfcZV8bktP9igwxg2pAo44xL8XxVLPewwMfqfh2",
  "key5": "48F8fxpqbkMQLAvHwmeANhKARedRKdke54xByf4Hooc1BfWEKihccTtss3cXDesKZNHfKfcFEt8FhRbFEVEiMspg",
  "key6": "bMqR2n44kkenhauXq21ThgCtyEoHJsQGSffQPfUbnHahKAyb5Sq3VqLc7w4VxoiG22auGZpSKo8WhGukxBDLo4L",
  "key7": "ZHri2k6fBSK8oxXS4FCuj4z3T8aYT9gwn4RCwZpi2ztM3iEYBavJvDLeNggmuJqWuhfQt88FJJpx7hsZd7EabKR",
  "key8": "4EnufzkiWhsy2drJX4Wn5pbuSqLgFEk4qQvW2fvZ3WoTksnRUgtypvNmzbTXNnxbyFvwiVkeSE6KdwnCG1ijbSnN",
  "key9": "2Ey1pzvzYKXL8p2FJPACsPDoj2peteTTmi7meZCZY3n4T98qZBvESDrPQBEYXduvNfaPsLVVGd48PJqkKK4n8SvQ",
  "key10": "3qjFAPgokqTB7tozHG3eKHtmQz3R9BYMTm67PP44iceBevuyXdnZLYuVsgFEmaMsXJDNbrUqUbKy7BPpTDBUHrUz",
  "key11": "4VDGnozG6WaqQcTpp2G2t8Biem2WuwQSfG5NFCsoLVguWG7wmxaavSiAzxcU8oY5b9NmUuT1DK22uUPhX3nT21mf",
  "key12": "4Ht8jpkX59Mqc9Xek3tEQZPcNa44hVL8tMjmrX24E5aZu5b5Yemqu5GSK9YtKWa1gFdwVMRjHn5324UrKamPfDue",
  "key13": "48M4Q1oViYmSZFfipQJPAnnEYf9GQDoML44FYZzpLArWuSLtFHyi5vUgbX9QSNgVt4Xxq1QCHuP1NmeMwsFjrR4x",
  "key14": "3BxvU2iGrNERhKZ8GpRKTRtZ2d6RU3zx2kRCNU3Pm81hVkRzE2NHFq95mjiYAMCKdnui3baAdm7UdV3Y6ZRs9u33",
  "key15": "EzNuMuR1bZ9vUY98hi4i7qTBywUkZ8TrP3ToHwc3yFzzEiFZa6aBArqPCFyTm6uZ2zoJgSCevrcuKehSGDm7E2V",
  "key16": "22J2vb8x2yprUTsWUnn2Pyn3LeLZoP2PLZtg45zCCYYdTXrgnhSrrf1nkcL4Ueo7FbgtxUzWUxTkix5au3ksY5Qk",
  "key17": "4WsCA1Z7p55fZo9QgSTqhB9EJRr6LnWa5aBTJos4GfxpjWDarkmMzxmYaTMHzyr6d7dpGcG8KVCHAU7TAxr7uXeJ",
  "key18": "5iyNjsuCdPgr5qDmgebZ4YcWjvNfe3byhCTmym6PW9Rg98VD5Xc1ZPMqo76ZaoTsrFJPzf8y3ukYtqd9HzrApnQS",
  "key19": "4sGGmGnRbK22EvjuDsapP9znpi8awr4Q5oHiNSLDHHEBNiwbXh1XxiPPgrfhanYakPVs48t5FJb6HZGEgG4M5ntu",
  "key20": "3apddn4QJ9JGq8M9t26UPXPnhXG358V6AVgi7PwUeTfomQ99SgoxA2xD884CTiVWkNG9kK6YHGu3nMSC9HNbhKy5",
  "key21": "2JpaqM7Qgz9a1G7bV7EK9ETuPjBwm3GReYwyWqKWsRYgpU2v3oVSkQqks7cZhZ4tBHkjVs5UfDLLGwju7aRqWzw",
  "key22": "4znDUeJApaTLJjaug7YyMLi9fo8G3ktVhvPSbAaPrnzu4HNRW8T14QbtFC7y4PZhsuztV6gt1rkFgQ9MJRuw2Lwp",
  "key23": "5yV5QNkT7y3HHYmpskjpQ4AxFpC7PsEsvCBwZ3V59CpE6AjMrMTYpPrBCzX3RQnqVXcQAYRK4eZ47fUiUEdyqMSD",
  "key24": "2khudn18gNgPmYYnDS21ViaWAjxZqMiQYUNywW1BdkaybXxkjDjUjZFscphKBqEmSsCUAzoTAZPnPU35RWX8TUV3",
  "key25": "4oR6Tc4icEBmrYxMvj8xcNWy67p38fKLvQ2XTDmSKLQiV7uWkHQuBEFaHfM7SSN1unimATsE759qQhyPcUzSMEV6"
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
