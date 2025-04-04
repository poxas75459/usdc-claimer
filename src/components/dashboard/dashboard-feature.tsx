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
    "4LZq9DdbdAx1eEQSXnL9LzDqMMfXLAqnWWpiEECrM47Szyb4kyi44Z2DRrVWhKAzqpFAnTUXhyfpfMJbMfQjatWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLC4PtBsZZQPMuEkMcVqUCG6mbLLB2wy4d77Pbxt1bEGsG3UBe8JohYfAdV72xt5atsXWRVhpVYRgRGG9TkNJEZ",
  "key1": "jfGN9om1p9Hz54xqHWF9q5KXhAvnYb6ywjkEZKX9X4F2eS3PkTKNtG3cdMQAj7xDRQseAb8a9kVLjWq3HbPQiJF",
  "key2": "Ym3j8av99FgPzBxTtK4MEJCGHDDnfYu76NZy2EkfNPkocwmW6P26E7LG3h7oV4pgQJUFoxiUJMMPSsX9ngVab4r",
  "key3": "4QvQrvXfK3XfHt9yub1x4RoUH8pKPwduNpp2YLEA4F3N4FkMUhuvGFeCv7459XUd2jrAXovtf8Etnbtne9eunB49",
  "key4": "2NU8MyfkXDotz3P2FjXjkK6qrCZ14mmaYYx7t2pnwWhyapGRxvgW3q19KHz9SRZ2axY4Bh62bbPpwnnBKWW3Ca62",
  "key5": "31muksp6Ce1meLQsjbosF8LWMVoP1DttHRDJqPtCDqQmWNmXayvdnYCCLeuJpDS8nHYcuJTouAb5LXXsaJqGGa68",
  "key6": "43oS7yaD2LvrgcySnUBbqsZctrXmvcCUogorWJMF8gicXjXDZJUSNFxMGxfihrkGU9kfm261v46qC2iX6YYMzGE8",
  "key7": "3rofdjG1YpUUdEVYZDrrPXFtFjzN3sdVEPigd8QvdKFRw29pE2CVHgZ97wUywJtk692nPazsLVCggip5DB4jdaeW",
  "key8": "5LmCJwPiKgMNGEGjuRigZtiKcCRJcPe7ruesgXRFTbfWXNGFHQhYkxc4f8brGPiNeAGkW2oixGFqoDjWaYaYyq2R",
  "key9": "w67pfUnN5jzcccbSiYAWWSEXfevsQR9v8BNug7vFChvYkEUSfhj9dTqyWnoSvZDsitUp2HhCxUqeBu53qDGP5xt",
  "key10": "78y7jKS3rAHYxKTsRfTj1es7VNh6kGQd9Ptv3QepzZ2tTs58ttLaKvPueMZjGoAy39DtNhFkvMXbniJeW5nmBnk",
  "key11": "erehnQ4EMvFoS8kmdmAiHhBhmNVfam6HBHkeZA6gK9ZSzEMHbCNEG3skzTHy8WqCiiTsqSzAK5g4YChbdtZ4BQi",
  "key12": "5FY3AjWBSJanuJcZ5ky2AYLtDvPYRx1BdZN2Y1YFzG8h1uD65QvRjUVFz7NwoQZ9z49jqx9gHBfjYpACRkF6wRwi",
  "key13": "4SXqYAtZGPxpSpBoRZh9RAdqBAwNCA9HJCTjpngY1Pzzuk7nJo2B6JkL6aRU3Gx887KBY2VSrihaU68dLi3uomQr",
  "key14": "32QUMnK8xeSmpnGp6sk3NjxuzeSHUpfLNHmKVxdfA2dvH5d93QbANMM5bimkdmhEykHYUkqP6ashXKtpPgE5psCo",
  "key15": "uPMfNQ1Zu9dvEHD9FciCcJgqgu8s3DtbEAc386uqEYge8LKt1E1FsGifze8KCqyiXz2hwh7WKc1QBqeCBq8Jt5r",
  "key16": "58hHhG3k23nNwaDFv4JqGYAn2WZuZ4pSJzhNbXbD3MUJQrrTuiLnT8j3cikpZp8DVLrgfVQyREkoj6cc6wV2yLYm",
  "key17": "5EZDFVDHLz4PeGX5VU5pdfMMf9xr5KLoBpiiXTzFYZokMmNfh3gFss5TnV1BiKtZZ7GRvf4kENvRVU8UCQfeYwUg",
  "key18": "4mckYixJKrhH7YhUBW7bqd1QKkysZHY3psUHfvL67FoEyWJ5CAc8UsFeZbDzoj44WjAjKuXXUMnn96N8d9BRoqjW",
  "key19": "3QN37J4kDmRDThakhpvWhSyyFRDxdggisWaUAmWTD5naWNAJSdKEVRyvDHe5GVepTdCoXxF7z3Zp3sY5JYpqAr2x",
  "key20": "51ar8BW574EdiQkJk1bEef3WUMQsuNBG5eM5jMwybJzecfL934uKUZmfNtT8e31aTmav4zSdJ4scaurR1SDAuCbR",
  "key21": "4ULnE7ucG4xkJcTrMURkKS7nzeSeyV5Ee8CQR2gr6nEzemFvKeCnErv3VSpGco1nSr3uVgHwNt2H3chHh43eZmcU",
  "key22": "4ppbqUh1pabzF4rt8CMyH2xmkxG9ziRmLPamt3kVxB3eWQNgaRbF6VmmG5CovKwE1KG1P38jePEFLPv9HkX2e9K1",
  "key23": "3Ls7rjusgarQKx886vHeo6idC6vxRtxsWM66AjPFzj3oigouNK7UqC69yQohy3FkPh4tQayS8crq3gsybs2H9YmD",
  "key24": "5Q5a13baGw8MveXwKMe6PcAzGLHtv9A2hiqqy6GNCdxGXK9xbVW5sBfraEMJswEkpjUVLWsgJbQwqAdmAAG9EZD1"
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
