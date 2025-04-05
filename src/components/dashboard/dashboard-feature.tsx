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
    "3M9qhJ8dFuxLfa8D5ZC4AgNuqLkE4jYqUyrYNvwairLuXmK4KjHLDvbCawGEtTkA5MeASYGDFHpA7vFBxJQRUMeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7GUxnirasXNb6p8MsFx2rXGzreEYBTWbWi9NEZJkVTi643fKNem7riZpVvccNW91yJ8XHLtSjEvC5CMrF6AHc2",
  "key1": "5N9vDtWoX9vrrinWWkcjiYWGJEue4mXUKkoCoXPPLwPToME1PdesDNTMp8xgnyLuoaRCEZKWPi5UGoGVdETjYnme",
  "key2": "4Dh1EmYJe15HJQfZNJ6pNoc2BFkRjRXpzBML7DyB4Fv3FVDxQ7sG9M1DpuHqcdfSjbjPM4Q2pmvz3NKUGoAA7WbT",
  "key3": "52nkSgXo5kJoX4ghbFFT1dteudcYfK5XxTaoY3ymayZJU6xhY3G67KQpmYAGiyarxP2mwX88k5HLHR2XJ2E63Ka1",
  "key4": "5wFP1bpjio3ygb9BmL2AnVgFt9Tpg1QvaB4iL61kGs7TfpFB1JfndpmmnwoxstYkirRsZTVMy81RKeScrsdhFcxD",
  "key5": "3mvFB8fzo25k6FFJE3GqCVd8osMSEiJpaVGhU69img4EpzWGJhv9FmXjAPgftxoPcSuzjtQqvQ9egspXgwNDuzrD",
  "key6": "2StkMgJE9jv4WeRTmAHtjMw9jK3aqcqDC1UkkHMxTKbG2ajm1t8wNnyi4v8WJ1Nn2ppZEh9au3hqAWRbQbi7PfD7",
  "key7": "2yaDrw6CT5mJZjkBp91BNGbdBU6SDzaNkqDDuoiN5Nugd7comXBqfMBUvUXkSUZTMBYfhqpRVYtVQ3rfWHNbuGag",
  "key8": "5bp3BmkYegyqBdbfeYbm6DjnccLqppAFbuWfd4rD1ozehKUQHc8gYoELmck8ovfSX87hi1LHtrdyJdNWZHCFrLjU",
  "key9": "3P5jAzXhAHoYo4GjXmzSpmEWHsjpmap9zQjH546nJofmS5UESuYqRJg9NQ54fm7uh1FVD7cauRfyH2MYuDETu769",
  "key10": "pfVxBJygesu7U7u3guWr72ovNcCxELSxijzP7y3ndynAeiJfCicKgnJ6cqj2sZtBjct7vtsteV8ZxKyUD9ojKzj",
  "key11": "2ej9qEgjPBf5qxEP24YvHDHMkau82wW5sg8jEcYVannQnjY5A9mZvomG92vzhb76nQCGep3Q95uHTLsa3cPqLo67",
  "key12": "3Y4Wxf5XPEspzrjxpaGEMWpBcrfqfMBcsMM871uL557E5x5hoZNpz6WsYJyiZp38hGR2LAZKVEWYravRjcvqc6Fu",
  "key13": "66SCgKVf5Ys7dmujaigq2M5VKD2eRcwueEuYsxyQxHPKgQNhHu2vupu1dxNmbCtuXyHTgT9CQS5zvgcDd5V6hY6K",
  "key14": "4z2iMmiBErL6itXEtQPUiiR7UPaEQ1rkXMx8Eo1sFW35YUgwzDW1zs8mS4wGtGSsCFJgLiwDqWyAXpgtVsvoNw71",
  "key15": "5FeX2h8CT1nGwtbm94srQAtfLncYnPPxgn38tuWbp86Jjzydy55L8XqjLrjZJvtGyVLehxFFLLAo5wdYasvneWux",
  "key16": "3HqU7TVPG6mbShKiKc6Yd8sqF1kzqu1KxzUE9ksfMLjksK328pwmGSSJfA8Qzmc2is9G7zupLbVNMYViotxYgYJu",
  "key17": "2oVEZQzvoQzcbcukmBbkkPDtV8cacxWjXmZmn6dFsCDJwMEYP9DcipmpDhCvQeze5ynz2aQsDQ85SznCcPgjgskB",
  "key18": "3QsEyvwdaCCTezuHXon9NU4RjzCDiVK1rPq8eE5Gn8wRbkz4FsweCg2geGqJF2jEgUAscQowwQovYVpFiQcZYDg8",
  "key19": "HwEj3mpTix9WyA1ykeB1GKXbhhufRsNg9NLGNcqXDNKkU1AWrNf6mayNrNSYy39f5hC79zSX2LRdLQj8162bPSs",
  "key20": "5DFopkwEHNTLgVE5VYHUDyrQtqZiiMCHAWaeokviHNThQx5GopLHYsfhaGTvCyWZcmBZbGaJPNzukczxZn87SLAn",
  "key21": "3RGjSb8XVaAJEdp6YjSrHQFCEsuu2YQyEiGqWVjYEP3raezFmfXvmfDAtYWUk9csv1qgLaLZ2FD8x8P8go4vKWp3",
  "key22": "24m3ioqdJFZdUeH56vHXYgBvuAJMSyxHctuGNX2cYd58DR4yuo1WuBvWgQEpF6znDMRkAGEhhiDiSUiwV1r6WjkR",
  "key23": "UKoMdeao5fzWu6qmwxkXNPkGzsJruyDTteDLaRUXNV4fWjRAjBLmdZtvGoYz76TuVwDEqUBUngZRmjsw3CCTefo",
  "key24": "X7rRtXYMDGSEhNMjP5kgvFTYpzRYMRyGmGvmps2E5ZpAWxymtP4KMEtTeE8rCpNG3v5WGHFvnkwNPHbKy7dTWi8",
  "key25": "2GBb9HNvg6R97tM1ZSWjGiCwhTPBHXdgA1ZGoprMhCD7qxDEg3BiMSdATfq24yYutZ7xZJ1p4Df3EfBuCTDmtYDM",
  "key26": "2T7GRFrhxuByUCUt9RZr8qbaqhC7ueKxDr6bdXZPZ5vWjNasrgSmFqPD44EL4wvG5rTK9BxtVasrnJWiHRwJcAFu",
  "key27": "3A9gT7JcdTLWzskUazLaKcSgLRd8hZqcx1xsR4wGxEizi8FbACVHoRuyRkztVipBg7iFTU7Rf9DzgHATjYvNVs8F",
  "key28": "4LaYhF5y2ir6Bp22D1LjQSd8prjzLpwfWFH7EYM6N8e7x48PtLhw4txbSSgbbcJnSa23K53JiGhFCVhjWqTkbJNJ",
  "key29": "4DrmqyxzyVaZuDhXRYNxSeowtVaEbr1SDPL8pc9dsW6JHdwRMwSB7upQikGZhAwuKLaREAbuZs8R5j2QGvui9Jk4"
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
