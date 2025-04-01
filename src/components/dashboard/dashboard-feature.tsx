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
    "21KfdrCfGuQUmJxRwnzKXA4tBCM9t1YqRX1oy3fsQiUdVEmX4MjcVRvSF8mcaQ8VduyUFHsEZfw9H8PcJwKPTAt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abLX1FMoyy97EeUqvsq3gSnGCXZvU61rNAUuNN9EJMjXos3FVWFNPDNH52DukJ4y87AGHmW1V7LC86VNhrG79a3",
  "key1": "4HR6AJT5paXLS2AEnnE11eF6AFyrqxhzvcH3N1nLbf6ZZyddmauLfddzQ4meyhnY1fCVRJhZa2D7fxFVJPmtfSA7",
  "key2": "5FjNYCuFQduUxaf3EtoZKszmckxC2mLWT3LbzfWZRoZqatZRnp6HDxmDAttPcqs8ts5v9aUCnv7ZGVJeyoCDWTcB",
  "key3": "5nhMPqYNtPfJVnyPkXWdrMfBgyxaYqC2Wze2JcQMbGFGn79CSHogXSNX61axsBS2bXrTsUfC4QMwy2rKuTAqVaNu",
  "key4": "KAERrpkWwC4Xjn66Uejef5Sr1AniJN4RLqyfmbrSJsZyFNKqG9vb3Hx5baTPBLEQnV885ZoydLiQqgb7ny6HkD9",
  "key5": "2vwqDV6P9zLSPmXKagKgwEtzKsTjfk5BCAt2DR2xWZiwNefAGmnwakoUbrc6wxUtRFQoJw9wrp8nWLwuBRVHLoG",
  "key6": "36LjC6RTbnHufNRc2Bah8nz5yaSRwULmVQSQtHBiPxXvJytJpVt1U9XtqND5eDT9bew8eiuLHNY9HPPjfUeNTspX",
  "key7": "PBYrVgVHMDLotHF4pP1sqMrjyHire1pBvyWtgWu2Gc7Nas2Jffy8BHeCa7U4tX5FSBAtF51s3cR9bsMpPf2fikw",
  "key8": "45VRquJiPrKqzSfrK1DFUsZhKfBUWFyCuu1uGVh63kD2pqpMHc2Yi57J4BnhmvCvAYKKMTJRPsVGfcE7KiAqDqWW",
  "key9": "4ZmFDBYeRjTrdYFRNpGLs3kbr193GVkNYwdssQVC1XPZh8odadiuJkTAuCjWXMYg8oxfjLE5hkJvr29NXaoqn1HR",
  "key10": "27C4FWDAJhtQLy5aqWK1HJkTtWKhJxwNHYuYVee9cskabJPnPuGt3UsYNAr8SEB5xbsWdjZx5CxYPWnaviDbsJSv",
  "key11": "HKDUsEhJ3L6gUWLYmBSH8FiafjarxtAEYGkMaXozLWCsVEfLPkQKdCRzNqqno8Bp3BtjizGFiovmh6jqErT2Hyv",
  "key12": "49CtzBGe5vDtGRhpFaFqpojWR7fMxLyYeG3QaYih33j7MAfXxq5k51v5pH1sHfXRu8QDCM9jRdhCEMqQLT93AbnS",
  "key13": "3LEgVELLaV4XU3UadWo2ABqPNPQoL43aqHT5qyKLntgsM7GpeqJwBQu3Q2QxMQs6uBjx4YZQg1PM9FpF9kXF7eQA",
  "key14": "2hHz1FZRngDoyYMG11CbiMoerPQgcp7dSBL8GdXd3SiVLTbNn5m1hzRCyAyQ2RwXUNvapmQyUguZGEDBc6c3QqP8",
  "key15": "uo3qWsAjYr6NGvLarsAo2zoTEzxmP5hdtL5T7jxWxNJzkJKUegbiWpq95WfYTmLknP2kXiiZ6n1pGigh5Z5ZPem",
  "key16": "27r9RFVQTEmkuy5C5arb9LJtFT54MUvdkiJkLNn7KX8xESD7b2Abz56SqvSph12Stkrqfhn16q5DrigMzfr61FgU",
  "key17": "26L1HAFpVwJUqwq8tHNpBz4qrJJbN1ybudxxLNHbsw1wBLpJ2ANgHesDCnfZmc3DEZ4bFqdvzWXcLTKu5xtsxrYe",
  "key18": "314UN6VkC1BzQG1D7gC4Pyk5WCNujBS5dNPDTK57hojMfqSTyJUAZxcFGMphm9sjjNNAFUWNpiRntabakGb35Tnf",
  "key19": "5pW8RwptJsomPe3fUbdNrE9JLAgvkTbrDLK5pWpseNHZzXwzhW1cBgr6aPfwaQ6PNo5KFsmMsSQ4qjehnDGwk9Yh",
  "key20": "3qrxuSBm8AtkpN5EGfPBSLNBp5qx2rx1TdUEqZoTN6Nqa8h4AaZi6a8MEZnqfWh87QYDh3GSBMHWhbVWRaSz9TLr",
  "key21": "3w5WpGzdpABuX8QKoLr3PXFjEU3S448NUDFoGZu7E5CoGM1ura3eB4wjsMqBv7noBwTmdfzwgF4UGudWqTYCSsfd",
  "key22": "2iKvYGDnnnocrWPYhf2vzG7GWtuuAWbnnLPwjJqMCbpQ6RkVH5PhZUyoDXGo4vAyZDj8ioZEXmrye7WQoJKfLjC2",
  "key23": "5MjJehPXmvCM6C5XfGztYJ4ncULXbXfT96qJ2qemsdGxWdyP4jaH7gZ228yfdEeJvnghecmJg1yNXMiNiGDCzwLH",
  "key24": "22mK5Tsgak2oGoV8M2Nv91HSgyaEVcV3cQXWam3ChVAoWL5GwJGvibpmbsTNZgZeYiEasAQgXB9GA2EZCCGfRYgA",
  "key25": "31pR8JdcEpD4XSgMb7iMdZfbt6v1RASbSRw5c1QFLQi2Y9zbiEBVsurZAU5ivw2kwAgB8j37rgm5VnE4nzCp18R",
  "key26": "63CWVrLoEX672LYVB8FqMkk9nLv28JuJJKskSmp4K3ci9frvi5Fx8zDnYRFNkoCSA3V1rYBwGet89uS4mfjycjy4",
  "key27": "3b9LaiJiJshKcYAtfM5f4rtCA794bWvhZTEYwMeL7hCxzK21kpZx3T9FNVX9YtyLg4KBeaodnNfHCB1areJYudaz",
  "key28": "5g4XNHmqwz42T2C5BVND8f1UaZMKFwtEi6zTS1p5bbEkv2m3QR5JErmch94qNzkVBrnbxMe5syMqcrh2K7fdQQ44",
  "key29": "62wYAuk86yVSWR6yun3Q9u8RPr5NNNgMQ8Rmgu2YPbYJhPeW8rgaookFRDMMBuCyUKmF7BAfPzre2vX7h5z1xUam",
  "key30": "5NEfwAdU8KdB7YKZ33zVt4AwXrgiFhC9xsp1raWDxXYbDoxhxTn1kZK7aggrX2JFFXVkQwd5xQShuS26HEouAwgT",
  "key31": "54Mkd1VPTmJ5a9rdjzkHEhaP7z7xTCzdLVUoBakdPYGZttz59M6ohGTQUv2pr8Qj1cgVaffQMAVF3YvEQpXHCmYG",
  "key32": "5M9a1H4F1wqh9CiBJ6S9xi5bmYNCKAV4MPMeEXTR2FZNGEu6AJUn45YzShtehX9HGCVLAhgfey48WZeRhFFMNuDt"
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
