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
    "2Qg43yjSoQvWkdaMWPG3RUJCy5R59FfkGxfkdz8MDQMe7JQScxzQqCxFJvc9Nu6p5hsXKrT6XQTkjk83wJLWz5gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32R6M3HSgGj4shR3WyXWuRtDsDgivcLD9qB5k8fkXoF9GGLoVn7KXaMcgMtDtMXP2P5BBvwUsYVtq6j7wRgt6Bb9",
  "key1": "5briWqdEAgFssYDWEmF46hv8TPkakWwwN2HjHeZD3fef65etgqU13RsqBNJg3rzAPZzWPwUGkpH5yVMkC6oDaAGD",
  "key2": "4MiyZJBzznB4JJM5bSWPmotcyRFPvZZrDVBs9uoYhDr9h6mdXrDdwyqgwKAzZ4y75zy7MCV7TuDk6qEA94UPtSnM",
  "key3": "5q71gY9CWTdgPm13SwVExKwYZQx4j8GjKtPMLEavAPntNXo3UT2sqsQg6VKvf62cMAwXpeXS5x7h74CvjxxSDv3a",
  "key4": "25iF1eAcup3wPUaUQGPFLkXrg4PLJan6KV6SwFAHkpsyiskwrJJJK4zpnssJ1w1mqSR2VLqoaWQhG8UvsEyi8HY7",
  "key5": "3j1uz1rKydcomrCR5wp5kpFi2FQF68xa4wmZoCW1EjDDF3arvWBvJ6z5a4reh98dkXwFckABsJMribrv6m8U5KvG",
  "key6": "2PFTgCoRv4b48B54PeNUnRNnv8DnGRHLdHJAA1PsyaCa4sVVgTcnggYxSAHdQUnNPhiSDez1etoMTAJZtNmQNU8k",
  "key7": "5sWCUZjR4QyxpLwVij4KygdjidQhR9D96HEwmUSJt4yYn3ATfaH4TiDBF2E5qDiw2AC3xNe5CT5mAbY1Cb5S9GBU",
  "key8": "4DPTsbvzzg4nFMd6AxN9U1unAYmYMkWGFZmj5iYjygtZ7TsYrdhWp1AJAUv8AmLjkiNo7RQo2BZjk214cAPMriCh",
  "key9": "zC52BkeLM5hi7g5aWKoT9MQ6PkpH75dahKYiPJtSwveDNe3zCDMgBDnLJhaW8o9sfdS7Ci3UgC87nsKGn6pnTEA",
  "key10": "5aBzWCoG4FC78WWKoLyDqaErHzqsFhzzWsqqDD6f49vztgNuyawWVc8zq2NHcC8YbkwNigKCPnzM5HAABxxcMpcW",
  "key11": "5bpiRAgWkrJQmShiJ2DHVCeW6tbmBZUKcxDfWAda9fGWB6hmmUri3aNLZWseCAeKsA3K1tpxanmpfc7ebgJ2B3md",
  "key12": "5Q6RrLL6Uoef9pmMCf2G4nxRfUzWgAhvgJZBtB3wA9rBfS4HVPmfYkfrk73jzRLQAkMgxzpuLJLKsi4DQ4KLENsH",
  "key13": "3wVroQY6omzcjxTUMdZmWkmkDaAi4CuZ8FBC5A5AiEx1qkJp18Pc5Qv7R1kRV8eqhKcM6t48VitF4epi7RDJaygy",
  "key14": "2KHxzc6AL9xkTZuKBwDy9KegzpK9EPwjZFfsFr8zaAtpWRt3tGEo2cBqF8F2FuSvS1Cw2kCe8oYfCWEPhMNtafHw",
  "key15": "2us5XCD35r2USzEBpYmUNg5ZfjVEsobivsgRnXUNQX1q1f6G69SK82iwqBGgyS4AAn2xdydVsk6EnUXiw8aPXK5A",
  "key16": "JQn2E26DiY5D8rHAbNZA2xTNNsnrmQMnPVLy5herrsFSFZGn4iTAtZk98w1rjd8xbZNMwwjxcQuFYNBQwMiGH6V",
  "key17": "aiy5QfJUFUZ9GHWooYhRFnnzzabTbbLqAzunP8fp2btidhXZyyc9VKQ8f87wRA27CzkKteYKC8wDpxJfRL6cbHq",
  "key18": "46yVDivwHPLHUkNx3gqGR9iK4dAb1ybomCp3Ab2rK9fi1opjvcwxcgaWWUPsof9xEh147PaSXiFHvkyoVPh32z7E",
  "key19": "BvL1CQP74gMzHKCPXH9yKkrJZjprohJAHMbo2QyUnGZRv5CUPif29CHAbskKrJPSDVfNH1KY3fjdNSftaBrSiJY",
  "key20": "4yZ8nDVN8VWPwTBkTnfbzyCJuJ6FMwoEYPsmEVt9CqvWEPyYe65gwGVBoJCfpfLP9ozjx87P1QoQPytCcw9Wgvfh",
  "key21": "61XV1MHAkX1SsRA1fXEPQc6w2ztjb1J6xzdW3MfrG1YbnujTv3j5kLDeLzD1dVadbAEghKBX85GjsctEhuPc9EZc",
  "key22": "3hR9nBNn419kLkQmCMsdgBRZEwqDvWqpCcSrF6YwiyGkvMJkgtM3bYUXG69Zbei9aDciqgSoeHd2Bm9RvgSczBmX",
  "key23": "29wpvFb3XLdY5jzxPJUn7nyx2Xr4Z7xDpbrfuo6s1dgBSQ5MtVuxP1TaGDejZjPmwZsRagc4PFFBAassLrPHJMQz",
  "key24": "2jrxCVu2PAp4GMz5dPAcw7meY41XmjeGmqt62jY2ibqPZkCsUPNaoSKaqfmYosC6qdLfxkj7zmaNJEiRr2AXPSC7",
  "key25": "PawADVFHjiJJYmUuG7Zy7PxXvpawiviGhqwcBQdZXzvbLmrFZiLyoC5t3qn4yiH9A3ynEFQw88E741NfSrTJaYK"
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
