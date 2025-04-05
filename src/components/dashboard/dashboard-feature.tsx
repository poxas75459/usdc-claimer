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
    "4NDnUyvVP33sKVGQkkuJi5yY4EEhWHsccyAEi6Rz6GDMefpfbHKdyTSnzkwepwAbkURbQdFwzi1iq7cTomMFiM6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8yoEtNu4g9PePiNaiFNfwAg3NajvLzb5e6Vhzv3hJ7pCPyxL55vUqg4KiyPSdoPxGqbmmkGXJifSLuhnqLkiDS",
  "key1": "33Qk16eArVJXDCekN6Hw2g6KYtG766PaoWmVaBmmHLMc1gXrbU57mgsUuvUzJvtCRVVwAURKb8NswZGxZ9gyjJmG",
  "key2": "5wrBdMPyV8FVGz9WxknABdvAR8EU9z17TWb41s7jn1Jva8Fp3xk3rmt3HZqqKUAUjxEx5CMkHnyeTf4nichFrLoz",
  "key3": "2Q9Bg1v6pETVembBDFWiEgYrg58J7LENLBED7MehUi5KDD8AXBpWTgenDsARgRCHgqEjB21AVSryhKR9S8YZJpf5",
  "key4": "3epS24Q5ZiAPozpLsSM5KfFo2X9N3D3XzVwhziSshcxXYuisSbSuEXaQqT4FKPzF2jxtidTGi8gqyzsAGR6ASpB4",
  "key5": "4jFABYRbwvQrB96U7LBKYz6CGkQgtcuxY4eDv5wZX6i9F1pY5oEwrbbXzRg4mRe4hiMJN5yeNGWUWd9ysrQYwzyi",
  "key6": "67h1vsSJ4MWHetViP8gwgPqfGVhPyKNstq2g81ahrVRKMz6Am5z9AWLhSk3Aq9K32WnnRFXqsYvFxC4o4y1pQNAd",
  "key7": "Si49ZC3NApwJpWGd6coerTbqqTDyDjg2PJm5podCEEu12ANzKifcNeQ53fdUvqxKGksvXgs1fcErU6rokmygipT",
  "key8": "4Mh4D6NJ3D45nwmhXDBpEQz7EfrtRtwMjG5UHFgrdL4gwCdTKfBQLmrJDtgB8h9jLMYHXsDY1touTB6A4o97TZT5",
  "key9": "4EC6VFMfHZeaywzuAM63JLj8T86U7Cfpj2ht5tuJx8VMEGrEVY9F6WTmF5C1BSAygow1XuQj6rvmqU9dL8HqayWp",
  "key10": "573fby1hYQrdqPcjaGFWfPEDcsyHnEzqiggLnaftgpXQkzb2t2bbJZWpTB1LjGsaEALhQeK378NJFQpDF6CskgnY",
  "key11": "3ZgLjjgyZxHwPzKzioA3iVD1DpcPM7tUz375aafkyDQ8wpYaUBoQSjrQ6dTYEfV5yoX1YZcUeA12wLaqSrXwgb1S",
  "key12": "4dzPx6ehGuJHUrWx4X57RHKS6N6WPxxPbKMVPNbwaLcy1a1nVMkA1nUGUqck1pFyz6HqEFgRjCS6gGf98aiP82da",
  "key13": "53SMo7RchfKkLaySc9vgLcupu2qB2foesZXa9bUXU4a2i6XEtd2NtJiFiGECEdRDg14Wm2HTjxhG2K29utbHRiHh",
  "key14": "2Z7v892ML25EoNUqVYpYv3TeNDofSGrdaBwsgjWT3q3gqjDhfXTTXbA5R1gfzZJzf1vgdwTi3irP3k8mr4vKVM6B",
  "key15": "2XQvPHkUcCPPvAFaGs3pYmK4i1PoS8tX2bnpVSuxuW2Z27JivMcxfhbuPpyM891e8gt3ZUU7wKJxELQAzFn2Ae2W",
  "key16": "5aUyTHd9Q6ze4yeBBiDA8N6PKW73qXDArmeMZBZsi5rZQxBEVYUkAzmF4X5XuSALTdoTo5jCdhkPSrZWochGg42E",
  "key17": "3FjxgRM7YFAQKdU6yoo1RqjH2bkXDTDPUWMUE5p3PQY3YbKhy5HdAibYKj2pZjtaU9wGrXLZQoLkEYgD9w8uGMSj",
  "key18": "2SFb7DYhsVhBak2o6tLL32rzBipS6NuYfKRLKUjm1EDvELQh4KEYbNs9qEiS3CMWohADL8RxCstw7wdj31xsgfis",
  "key19": "2wVw1hCKENr9jeEXJjNkPQt3yBxf6zW1vKQRhXd5fL6EDAzwdGP86y9AS7cdw6mBXA8BeZvuW93CC3rxm5cDaWvP",
  "key20": "2xcpUBhSQiCvE9yjdzbcTGWaeepZ23SugosiiU9hZAviZFPfooXErAcdxrpgTgpSqknxq3xRHC2PWoHG33ziTKJ3",
  "key21": "5hRJGAbiFNZppZcxezeyzjb2QayL7zCxXUYhbM6KWVy5VFcAVNrHShc7VSRQZxnnovbW3xKP5XzpxhCtEw3zd8qw",
  "key22": "4HwbG68kFDV9Bqu7im3snqo7nJw3LiWstu5Zcsss2bTiZpoL9i35mcdTNEs4voiWj7fDVvJ9WxPt1iWmKR2KATBu",
  "key23": "3Kci5YLXxvBvjFRotZU2x8kKkEdPv9ydLPBnNuGq4qoLN31XG8PSDMYwu4iQPpFpF51U5uqZELCNYJrkDCrH7RK4",
  "key24": "3X7VoLK1J5CvkqDCPGMQT4MhLF2PsiBqkB95ye7q7xRofTi66wsDWgFia6PUMeWhpeGys3M79756JiMbYpXVR4wo",
  "key25": "2iJvv5dFni8RdvmSHZU81V9J23VxCUs4ggRFH73SpAYzh8Dtz9eRcDVPGzwvHaG9oCHDfaxZpJZ2oYKiRtrmTBQv",
  "key26": "Xm8bpAeG1Hk6BfStQXVx79tvydxRw6hdNXGY7YreQeVtfpwM7nhAq8MQT1QSvtusvn7gW72BJ4W5wGT9ZLWC5rN",
  "key27": "3cMFmEPv6YQ4Dbd4Q7fbAd4r77UDaTEQcja6vLpuyDteqHh6inWQ29DGAp6t8tMEnMq66rkDeayJXKgACBrfHDjh"
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
