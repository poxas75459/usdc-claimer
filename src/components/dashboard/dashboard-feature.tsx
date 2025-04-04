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
    "5m3XHbxynYW41QGCsWWjjG6PXQfeUbimUqut8stnzBhP6huSnDUXH3ZNjcwC75q4goUhae6LgvouZUskAzdf9nWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543QQc3h8jtxAsmvQWxTEKzMaTsrLbgKMqqfzWCRAwjJ6Nf1BZ9n2vKPQx7qDCiz8hFS2Ltv9P5EQtYY6ZtkAbRh",
  "key1": "3PpYAR2PzK9UbeeSLQFnb834i1svBriQwknjDceZe6NvW5BLpMv3bkmw1NfAyoY2A1YUBJ8xsU5wY6M2SZ8UVT6m",
  "key2": "4wL7LVuWwUJ8Yw6kUdkbcpysE5XRp9MjWr5YmbQHYP3Z7p7isbLSsC9q2QGpY5wZMLYTsa9x5QfBWa7w5rK9d5r",
  "key3": "2H6KPMYX3jy6GjCGBgPq6yqnnav1CRGRahEC7uQr7QFVF6tW838g3GtZgwkNXwVEzqp3Paij9imusXoknKHrzbJe",
  "key4": "3yxyC3LHxfVGK5odbjtwXBnSTeNV1nGzgtiG8JGNDuT1XFprrPQMxJmPWrGQyugmyMoiRM6Jra5XcbDBUKnSx9St",
  "key5": "ukj2Ajxc6csbMVLLNGE3L5aK6hX8to75AixN4pQVFxrohjESijxyzAnMet14fTz4e8tU3rVVrCiUqvvfHWF9fxH",
  "key6": "4GQZpRzWDqfMuGPWqb8suAavPnWbUrUQr6fpUzWSWRb8j3H7KomsyJ85wCt6dQrT8aY4gtaLKphjADmq5KUURkMd",
  "key7": "5pi5LQrY47QK2KiQ4YGQhLdoCD8XUrBnF9KUAP8xm3ggPtqUkpjH6nsv3gB1NpdrYmydWVekpZGzzPevbZnfykpU",
  "key8": "5K6eXDyJaLs5S7HNdU3rfjKpc1Eva4skzWagotF51STtyvTYyLX9Hx2gPZgAUCw83jYzSjH75FJUE8itZ6mXJo4g",
  "key9": "Rr7GKfpk2m5HdPdBqDqFcHL3sxZuwGFowHEN7S4wBQgVuVr6xrX5awsDw6PZpDR74h3ME8ijGznNCftCFmzNWps",
  "key10": "3kfoQccVwpzeDbz1yP5KJMda7pGArbn7bLVC9VNmi3tLKEjVJT46MGaqcpWqa7VnipoYXfYQjfg6XptNyyEUthja",
  "key11": "ydRFGa4DF2xRAmasfmz3VuEScZSx2gPCtij8BVdJ8b3mELk94BU9CA5JgJEGtqyxtqcWgp8zTQVYEpPRAqkGF3k",
  "key12": "3ctUCEtY4KFmRp6oW3d9qPsPEhGVxN1xY9u8rG7cQaVsk4ReFYrXJgPqu86hBhnohVTZc7JNY1REXuyXJHCfrjFS",
  "key13": "4wXMH2Lv6SF18EqVxQoGW579nSbwPDcBkHSv3P44L7ZewzuAQusRey6ckoyF8zf4PMp6f2pvrwj4d7GEy8G8PrPw",
  "key14": "PrbdLebBMPi2rQTBiZVHGgY8jMoD92Ug7yewQjS4KhGxZVinyHVGNkKn7w8jAp9FWhKq1zgxJUvzwrimMrTdf4M",
  "key15": "32FQJsBDtUv25MYdHqPPyASru3ZzEXCxrCGcGP7QDg4aHpmvgAnk4feb1jkLD4HJ6zNqZX54Trg7mSirkwrszDrt",
  "key16": "fV3oKUgRpuSJ1fvQZDpBSgmkftqaUbhphTJa2E7RSRthoYD5xqNPKhGaqcxH7J8V5mhU4eBKAmuqHEi2ccu5U3K",
  "key17": "4Mu6HffsVuHV7NZJohv8HZbJ9gwsyBmw9v1PbrVjzEyJa7om4EJDCQxqLjKCkg4jT6CNGZ9MWfGNABuwybEazvmW",
  "key18": "yxQ5GGE9f8DcmWqbQozSUfn7czLLozMJjyxGpSpkqkrCeMWe84EooGo92p1AkR1Cg8xCwcKrCYc63QjETB37VEb",
  "key19": "57HdP8D6LoXNy2CiJmc5mkhquwLtxxEGFAd1ri6Y3wjuRxqFFqp7Ngwx4iWkYARynSi288J683i6ApyTP2Hjehez",
  "key20": "4BiXhqfJXNY1zoWueZkq7La356nYUnG4Sm4bv51CDg3JoiZw3s7tq1YRBjzxGUd5gKLsTJJMjrQF8CVggXgScdDt",
  "key21": "4oAEe7v4yXVY3FcQJ8eepmEKYXvTVKuadMH4aDUF6HapsPcJxZ5wtm8SqW2yXsTi7Mx6enG1VEb17Md6H5VApPBy",
  "key22": "2V21LjnHCwdbcj2jKpnAh86UvjxdjcvNEnEeJqT12TxctwkroxGbyit9zFuCJ1XcX8y2PKx7GktSQhdbqkLzpNvB",
  "key23": "27LF6uRBSNXwmxoDXFGWTLQxBPgwUZku5FouM6hbyAGfkMZYj93711uGUydfzzYynmXuiKGothegksiya29XhSpn",
  "key24": "47ULWhyJjtgEnqzkbVa3TB4S2CMy237mJohfyz7YDCoEm9u6rPzzyP78RrXmg3oFsPDPQirKuzbU78vJkiFvyBeF",
  "key25": "2GSPgSjbD3DrKxKaMJ1JYPqtYmjMuXcoASRsCWkajXbSrAU3stzDHLxEHUeCaJN8RqhPkNK29KKJ7uZDLEbKUaWH",
  "key26": "5hVyJEU1aauV8qAjS9KY8WhCnhnykbaP22wFZYuKqkQxNVN5JYUgen5rsRwTBzWLaGu3oEkf2eH3LnyQLBRG7Jce",
  "key27": "ffBPxRss9iazGL7eET9QAXxxAgrpb4hVWJ1UJyH3YRxdjTjHdy3D1orxXrNLLcUoM1Q53w6VLXafDo1VBQ7C7gK",
  "key28": "3NaatRCf7bNgjW9eBxxFhpzsUkLRsV7BGLvQhkeB5jMEZqCRPw7NXkNdoZSJrgYmzq6EgGJvLTaUUGpM2Fe3DVcQ",
  "key29": "4dFwmUvN7NipSKm1YZqTYd2Ju5ViqNXZwFBbpwuLdrS3bwYLpSG3Szwot2YZm57nYQp2rmwHybtM7HaUviDsjHb9",
  "key30": "4TkqbayfWsRxNg6h4Bj9xuyNsTqfnFDia7MoALJQy2RtXGwQHtGbckDkDtmX1XfC73tFEZn6qhfTuxBcdbYen5YK",
  "key31": "6hquFbHdynAWouAyXpDBAeo1XxMgyvJwaU6DPE2YMktNCFD5Z2MaPjaxd13RQcPMyEpRSQh7o98WwpUguLMfwPP",
  "key32": "3RTmUiV1QAhQf9VHjuZPL46HKtLQfPPFjdknVhQuoDmshNPQCXy5uzEFvvfHAmuU7A5H373fY2sv4NJoHdaSvD8u",
  "key33": "53u9CWTCKYstfYwhotAiRrEpb8hcUVtrin7MUVGmLnGaGUaNKn7quTJCmh6YTkViA5aQhVzs5Y5Z4bUMsE2PzdGV",
  "key34": "TkL23THJKP5Auiw43UJYxzpFxgc3re68qYDWkhrbRAB3au5ncEurFC9mzZ5UWJ4qf6UDTc1rHtfGknswDANMQ3k",
  "key35": "3GmtBCuqGHdWZetq383RKoUtJLVPGJUd11vqq2DtBehSkp9U3TPSBD7tpdcpQ2vvZmPNhqUaSY2YknLJvc9H5UEJ",
  "key36": "5PEPjHTGH73tc1gesnVbt2cUuarCS6KFHgA6M5YefLFKw71imdBT5uKBEpd7swBEozMhYYQKYhMLMpnDt4gPYD5P"
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
