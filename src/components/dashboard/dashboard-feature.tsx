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
    "58qENtXcrd5Q3atw8UvtHG6m9swiGTvpJgcPuDW3krzjXcKuhJBJCjFB1fEZwkqDH6AsocKE1HUTLwHZFmhPeeR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kd7QHCmL6unr6CShZuveW6s1o31HWgbGgp7cmRNsxjE2ZCnGf4CXRdBXBxtSrc8qQZtERVv9nf6TekciGZb3m1n",
  "key1": "42B8GXDsiSu36DNZbbxDKYbQpDT8Yx8iFqJzsauSkxVyGLNDidTtxyjhxsvfGf9EemwxsqPnkyV7N8C4B1Wv9B9W",
  "key2": "5NZS2zTvbenXihS9s2222EWAZqYugv2aoJ8EAfunocNJkS61KP8pivyPfRbUpkT9u158qbrkEcMbSskXXhx16n71",
  "key3": "5Z7KEtDJaHxmg7PjJbN4t4jDqoGKdtvymhfkJNEaCVtpM59EjfTquMQMrN8LaGqWZuqwJA6mi4wAZyRSphZBEzmT",
  "key4": "3myEkeMR2sfKUfunMZ6JVSCA3hsR5bdU9BFNNrt5khtaMztGPVFrwuEMiba1TotvHwRy5Um5p1nhszURK6nsTXUq",
  "key5": "qxawK32nRb8kAMu5Di29ZvkJeXCyz7XQkaBDqGrVbtodGJCVzFDTityou9NjW6aR6NmRMZQqueP5gVJesFtSp9F",
  "key6": "E5WwbEQLLs8mD9CLwWBpUWrnkRUKG79TwRCTHSotWiVQbJrgivc58p12bgcXxt6CLRDfL2XyQoKEEFi9GBNZRx5",
  "key7": "5s4W3MAwKu2WV1LKYk4h1b9aW1ztWZrB9YF4mwrwPa2zRT1dcfevJ5UrkJPTK4NY4ZUKP6rf9zfWV39yqnbS7k1y",
  "key8": "3VpyVzbPckasz6kx3ooEUHb2VCbaCUDugRbRnPvckj2Zdenik9CxRxzhAvBedRakCWrVSRo5bgaTm1RqaGnuUgof",
  "key9": "4CgGr9EuScfBYRVEKJgHXvTy7KNmNtDQRRGqbLEBdCxGWXHq34fWepLYJgDM5DFFi5xWGA6TjUbJhHYQSZ6L2KXw",
  "key10": "FzjSJgmPozP1E6fEAatVeqiFuZVJWPJVGxRKqQnvgSLL3Y8EZdg4YnV5ahJFjr9mGpZvFx8A8tyERDZTZgaGcPD",
  "key11": "35xHz6YGX8SfWUGPEiLAPpz7FvhhLCrbduZSxpECT8D4Mbp5vrSZ7ATnwkxySPZhn4dhydUYnw45ucwGY6QXKMZy",
  "key12": "Gjj6X28pyhfCZiEpnXZXmSZPfeKR1Y2iP29MX8xhtRFTvPCHuFLubW7AzvMRzWyyknW8HrRqfvZZ4H9fCCT6eQ5",
  "key13": "5joeAULAP1UiwJnVQmbtphwRm2vgc4cqWdvKtsbM2QfXAuF644vERABgmjP9n4NELQBWGyg3gUrP7HwMK8MJ5bzs",
  "key14": "WdYFeVZjrZWbGWoWm8CXu3GWfm5NFrmFaEmEgaFgyAQZYD12nMn7Exia5bEBsBZk1cmgW1fWafLRaghQE46xA5e",
  "key15": "5sU3v264vwPC8V3fYdVgWpkisjSWgtidJtSox3XDYb1vs6Bvp6Ti9Xe9R1EakE2sShFvUowpeBsES6ia71b7q8za",
  "key16": "5S1yxanzPZPLVKxwfJTfNQ6TuYwKu9XRdJFafK2irV2vuKCWsQMhfruoiCugewNJHcv8BqhBQ1k3pqHjydYQBwgA",
  "key17": "2TvBorA1KdJCfASUewLr8Mq1gcPjBMWse2FpbuiT7m7LYdP9JQPKkahsPzm6Pw7et6hkz4xzv1vYjYVMzxUCf9y3",
  "key18": "aoTnDStcXX6zWVSfv3czRJdxniUfmQFh7YbnEDpkbNYTjSsBEtgCn6UWzAaFR1x9ZxcmeS1W8X9sCfFBhRt1w8e",
  "key19": "5sZStrPamdZJes3whRKquoqmdDuEPxkH1xacDirD6DJuuGGv452sPcVNBJb8cTC2xJrvhAypCRiWrXqp369RsfqA",
  "key20": "5rT8TdtYroeGPgk8QCEKDh1FQBCxwpAZSXNrptYY28xwkBFYxZ3BKxt8jRcjMD18RtM4hUTscevMS496AJ2pRQDn",
  "key21": "2kqsfdEuqW6jyxAbdxML7qTo2tH7cgfCHs4SSn5VnqxYRt6grECjyGdWrTrLieFJtHLZHKEkra6CN38MWz5x8vHP",
  "key22": "5w91qgSaTVEi4K4KCVmXyrkFqHyPnwUL2AazTEsqQXTbDwfUMUoThQrAx5BTrkVCDXsCpQD3cQ7zPfqnZtQtuzD8",
  "key23": "213py5SqFi1ny36QpCqDwmJDahhEtHvuyQXR8GB3ZakqTv3F5jXaUqjnRk1sxaUic1eCttNUfpQzvEqWLr2SyBzm",
  "key24": "2p2tcLHx4WTUhYUzr3QGdoSLUUW5nWgbKtDaEmutYzkjQUPT96jwNWXoae1mPrBP5VV6QMs4HyrRLSVYTrx8WJFK",
  "key25": "5FqMknNK7SFvf87Ura55RiBDKUTB9tUJymzono2UFSmqE8wGkivo9pmzC7e31Yu5akRxvMNqHgxvhivWCwhNLM3g",
  "key26": "2VZUWi2hZcjXHSBEmVHK7JzgFDDstVdRvH6qkzAMS15tXeBp81ixLbnGhfsaYB7VWomJZ9HehKDFhX9JJFRymt9w",
  "key27": "3pyaemMPeqjpcD7GG3gXUEQy44agvDqWJHtTL2rvfg8e6mB4PhaaoZH2YV6kEntaF6is7ydsXS5eVkDAdjwUtqsP",
  "key28": "2c8THxBdTMByzR99VowBFFZpCvL67R9aVoxF1bGyJyoELTsnwjDL9CRnTGHwZSpKyzZiGiDmKBQapQPcjAiut3CZ",
  "key29": "2J6Qub8Dkriako77oWxD3pKrcFkgtXH4VLqugnSCFpYfZswoRs7UJLraoiBUyacybRLJUz13Nh85pXLGkYJ9xy4j",
  "key30": "63yDGugqatnrHSf13pQNULkTHjhRZ4fyUbkCjxAyQwU1wqBQfxcrkz12QzBQ9euT9MrkUEMhH1DsMei8t84FDBkd",
  "key31": "48B7tfCLaCzxBn4X8bvUh6sfPoxoz4HQnxZHqoijHXT4ALfZ6pfMbUCpxmTKFPrDfZyxWY8N5ASX9ZFhGLohuifE",
  "key32": "3XZgVHF3gMfEE3n5pSTMY4ARPqGfLrLKz8MfBKY9ApyCUgioAmuJ3QijAXaguyKdCZWeB53athA2yGDqjXDNLc6L",
  "key33": "4UULXBEeEndJCeAVBkMe3J8E5AdNtWdUz8U9ztEfW9tjSDD3tTzJycE43Fa8qxpYHZbh9GPHHZ1sxF8VNH8KViNQ",
  "key34": "4LMsVuszL8oeAxdtHnCKQL3QhBBj9425DuB8fmg335yjMgYrqEdmvFHk8TB6g7rbowzVSgYaKXS2GaHhT3MxBKJc",
  "key35": "42fBLWYZJcAnAt2xkujkk6RoiRUJD4etJowj8iVxd7xp2mR1cNccXbr75dBe83CdjpQZaj2PugbkthN6TJmUzaYj",
  "key36": "kM3mWWGBG2Up2Yn6ULABR1iAXxr6Xka2XYFgokDqBx7JfEGA85zyxiVGEcXcQjHPkT5irTVTvwJTR1hb8TSEHmj",
  "key37": "Wni5Wee5FgNk4Cevw15v4ABDFuyGy1WvJceh7Rm31bo8WkchV6hZDV1nNSycgYQeE3YnvivWLbDtbZSaLZw4yn8",
  "key38": "3GMGceQRv3q6fR7tPTgU9UPSRGcuX2q8ZB5fEwhc5UKZQk3vdNemKjWSp7BrKrkvTfsBaGU2qdQVb3Gios19kxJE",
  "key39": "5YHX5sQxYb1zdAhC7WuEMEPdB19TfBdHbySG1zeDqCP76EKZ7xdM3ZvmXJ2W6sWekHn9nAJiPoyBNtPcXkDa5iva",
  "key40": "3ymP6qMKKCjBvWEoBBJZsHbiRthm5W8SENmsKeGrK5ELmpNzDY7VC5f6ZrRPeu7QNzPa6BrtDi3mgWBo2Pb7yqVw",
  "key41": "33boHrVvQFwvyGNatnrWyLLdtGXtWRiyABnyTYGqkjGxvJnnFyUADh9GSS2DwKWCKyDJaaeTP1UadAtPsydJXvpz",
  "key42": "nNbMoKCZFY2ayezvf5Y27M8Tej7GqLsP7xEH8X22pkd7dkXMVHrcqEn5Epv3oy4TzPovfTV27GFMjPi9Rhu9E9t",
  "key43": "2XBtF1A94LtvxmQYuCbNFFvW4RY8ct1u3BB4bfWYy7dMQjKASX7W4fx3vM3J1hKHnVuJS8LgV9E6kBQPbcVqvUrs",
  "key44": "3NjA5LA3yeoRBgK6BRhwdwRcV5HBfvgRB5K4p1js8k1fCChmKj7Bk5uX4CPidjSPQYYQQJacA8o1iW1bBCddsenb",
  "key45": "4Q8cxStQYZEUB6HQkwZTGdZejuSrqmyhnhEYMsmud958h6kzPHXsVTLgAwhErUzJCtcrMMZ79huHSesVuiZiGg6c"
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
