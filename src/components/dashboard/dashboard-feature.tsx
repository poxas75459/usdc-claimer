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
    "5MdxzEb17dQegExLQqoPcQRVbpzMMxgH43d9RpeMoH5SMsRWzZbDFRhaf9DovGSweepbvKoAq1F5sbgQA8R3Yrqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GiXNTARWtg8pZKUpeHqbMVqhncK4Gtyyp9Wq96g2pMtav9VjDkK1CcJH7q84W6XmWuLurCbj8YozqHrMa1uVjZy",
  "key1": "26EKkGXPkABgRGzC1rTtWCterx1p2fBfSJw3BJMTDEJRGSt6sYWiRBco8ZkdQrGBSeJwnQHFmAjpDN7KpZ3nMpTH",
  "key2": "Yd2RhTFx8nDrcqYVwhhfLXHWonjysxLFJKtLiNxFvAyVTmBHYLhtdCy5rkYbJGGxeVHn4xWh941SZZH22XvSdJt",
  "key3": "5Z65mejHHhaBBTceSqcRnYrugho5bfn9w7RXiURffUTqrjGEuTraNzbyEicEeTmDi9j3F59ZcZm1Hny56ben3hv7",
  "key4": "5vyYm7LnyfHcmL7btKxXAEbGyekyPy9Fx8HacBJPjTywWt8yZUwNU8FQvRbvhpNrenJpsUWodnPKjfM5n2Z2og3X",
  "key5": "61tpfQe8NsVUMomoutFcMYdMivgXovgMqCGmqPsAtiAcPUa1yUVGTedmysPRwbSKxqPKpKvgGNGBqD5zJM15oiXB",
  "key6": "3Jf1ev92qTRAGAYkCt7FFdNGiUYKPvTWaoRtSWJhCNNRV4vPHWNbuvN5rRtPCrG4ipUVzP7STWXWoQRPBKNoULMu",
  "key7": "5rjFap76nFo1yrcnEbBy1JGssQp3uNRDGgResNV8KcdEfHUdV8mXNrpsG5sTH3rG1KLiWEkLgTSErMo6wJe4vri7",
  "key8": "5VkbSnZ1CeuCWFBjY8tcR4nTz8hH5XR7jVfG548cZ7VNrq8gnvZpr1KXyniia8kHV5y6ULb6fbEUq2SuV7Tq2w5A",
  "key9": "3iEXfPAaUYXM3G1188rNZYobxrF4WJnRdVz2fLr6iWiKsPwxg7YYYBc6QobSbXyFgHNk2daW5QwtaKwKqe796zwf",
  "key10": "36LjcnRQ4ABivzWmWu96QtsGHDShMLrF1rZezbks1W2eK1UDGLH6QiUhPQLtZnBSnub27T9XdBCVvyNfY3F6EzWJ",
  "key11": "2vwDCRJD5MLy75dWgMi57cTbSGTefErVEx2UjdHen8YFFKSXdGJiDpjikkh9J9QfVR3QeDF1aWaJscSgteYgXB96",
  "key12": "3qJkVJUmiJYhjvx5v1hhPXqctjQe5Aj6V1nJbUCXUaJaXPYpPWwZZAvV5ykoJuzqp3szD5hB3MdomVWHNqhmGf3z",
  "key13": "3h7vFdUHCu6FhHrQEEEnVKYtim18e6rLV4oZawZP64s3ebPUDwRYbAhrj3YEbVLDJuyke3G74TLeQQdhDU75dxbg",
  "key14": "4wHeotdUTjB7CPdG23Dx6DMiwonvgx4DCxdan7up6fpe9gbSZofB3bLKzZXRakxd3Gzf7j8N9J8rWpxfhNPhvFEQ",
  "key15": "2ue6ku5pmtphhA4gCtprMEa9aewSLZtRhEfekxzNmvdbpXAPRjrkMpCD35kNUMwC5hXJUspWejAZBm1iJQsrecGc",
  "key16": "2zjRFmELg4EDk32oQYZDWR5K1MXyAJJg1Zo1ZrtNwr7XrMThgCxBGZs2y1U7q49NJaW9Uac5wsepRLvqxpKjY9qM",
  "key17": "64aDDvjbqRvQBN9upQ83HsiNQR1gqwHZMHprY5PbRRYPwqfJPRrhchv1ZQyd7JqSHMrbnmFmLqJd4fHHpEhBYqQY",
  "key18": "2U69uRbn9gZSM2zLTgkWX3nNdDkWp9i3KtmCcJPGbEe1gN2CVEQHvy9ZL2P7yQhJqQmYTyxDAt8eS94C3JrUZ6Sj",
  "key19": "3M19uT1BqHou4QkDUvRXbZRUd2MW7oNrYjVrNXevWeqmUdXz4NgHNMNDDo6VuCjiMyQfdEAF3jv7HWFJ13yuQdwW",
  "key20": "3YzBrwv6wmYdM7hhaoaTpatNXv1uFQHBkPCCmUKD3oiLiGF9UH1AQzpJDHowzKMuozHiMuUt9Y3mzcsrWmA9sAnQ",
  "key21": "5Qo4hqcy7gR2mjxLKVXPcHijfD9nvLWzWa9v3AKcSqpuvS4B3HUQ5ZBS72rESFDmuD3xdFRDmTgRVX6PtJ8DNhnT",
  "key22": "4QXT3WNrEDjvD29yL2sb27sBAdsd974yuGg8LiNKC7RdBZYssRcjCr5f8nff8JqTutUDnupdqWMSeaZTPVhgyeyS",
  "key23": "5pYE3VSPNCEdUeiRuLQFqvuKJaPh86jVqaP8edmde568kci6HC2ZXFfTDLNdE2N923Zrs5ANehsgefPZbexsFKQz",
  "key24": "5V3CuDx7oU4kHn5fYcunyvtupMsx9Jb75XriqaB2VrJGVsPgr7xSJ27VYvVdNTCisoHwjHPNbsA8K9G6WxHnTVf8"
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
