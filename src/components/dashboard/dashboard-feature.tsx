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
    "3c8Vt3dky5xW3KEoHHhZyvTCTAUtd5CK9sYye2VLe5LsQTBuUbjhbii8QzyPeL9UHAg16ne9VB4pdffgJN6hEH6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cbfix1DAjj2oyiL2KtKbCAy7ugcRFSewNMZvs6EbJJciCN1vF93NtAo72LuwJpoU6WBBRRsYJmkTRJ6dLsjSzKu",
  "key1": "4kLxaWeZ9HqK6egjykUi2EKZKu6YXMpBAtxubSLV4jbSZBFgEpPRZVWeAPdWkn1gsTAGdeRH3rNcgnDxtvu2tK9B",
  "key2": "3xm4WZAhcnxNkMSqFdnDLkVy9GZ8hTR5igto6x9biTdUSVJMCRGSydGuYFUs8ECj1KFBJprmzkYPq3ephvxS2yGS",
  "key3": "4ESsjQQgXJkrMGHhpzYEkhhRtbpBVGMLUfgdpuyknzk2oNTELdRfLtBfBwEE27VH3qzFPuj75XFYANThzcgt1K1y",
  "key4": "AEHf2cZmCpmREQWCGfw2wzouZJifGkb8tZesU9YuFGTUooawYoqGxEcV3JgaqPbNtwMeDMbGT2ftynVXYY8q5ob",
  "key5": "33NQjYnfufdzTwgFt7Y63ajRB13Ma7X3rfrQNKkWxMLYgMBbEPzuZdKRKocoGYvK4FxcbQWgN73Vm66WMqqcPYjj",
  "key6": "39ffUpHAbhxeuBC76gQW1n8dXDs2n7N2UuATbsTazsaALjnUUwsy6Wru1WgDixjqbHhaYjRDNDy3VPSkmcnJ8kbm",
  "key7": "2JXnJrjriuBcULNSQbHohYhUjBt1otiF8sJSYP6PAhbDqq9ysLC3fPY3sbCMY6ED7SEgrEyr5mNb7gqn4FRYdy53",
  "key8": "ojid3KvWtVZUJhatBESzYwHCj6PheZo2CSJh6hKPJvHXaQdgEeyj2qxk3VW8QQ7XHYpJDqMKcbyfr2zKavzVrF4",
  "key9": "frPiZK1FqDE4dmYT8TFBUGz2vPb9jDMW5of9bnHooNKbBPvDCZfv5PGogL3sz5rSv3svhUc7xCotgmgk5bXko3w",
  "key10": "5tqxYzGJEsdVyCc9zYwbWx91CKn9uN35zyzc2uoGby17MqFQ7RLEtbvc9Mm1aNm1dADy5MKuPU7oLf6GPidhNbgQ",
  "key11": "c7AVsidJxvBCwJizNKgLokCCSTz6RHDEqfMMNoXp2FymkerFG8MjcC2MkLXRtFAyct8FVDVhr9VL8qU4rb5TLSr",
  "key12": "4Z59Kj9Ro3LsUS8roMoFs5mWwBizGswd5vDcL7mhbygrk9kbrcsLApejALbwUViuyQHXhLgB78n9BDzG3jaFFaHF",
  "key13": "32ptSALqcMruiUwpeawJsHHWbf8JpccWxGGPrPvDmdaWY7A9Egaoq544nqUDqY1j723WNHaJrsALkS4o11eyeqnZ",
  "key14": "5LfZLd46qmfjy2AdWf2RbCQwnNRwnppPZYBL4UED2jzf2YtWbafQHAeGUqzJEXpeS88jytq6w3Mq6Ye5wNJLVQ3M",
  "key15": "41nukTz8GuCGWcnGQF95ekeeDnzVN9kvkKdsx74MmbfmSPRSzfBhCACnn8sBtZ2becv9R4anWGSDWRRAAYwZ1jJW",
  "key16": "z5rebFw5yUD6nurMBYt34W1wfHfVhQJwZ5bpiJwR9QgkH6BPaeNbcBhKgQcVk7vwxTsM8A8yTTnY52tty7pyCxj",
  "key17": "3Tnyj1mHSCaZ7erzDcL1t2u1F6xFDfWkKAFZZjhNKhNEzU6YajDMHug4beLVujFe8DDJPkZ97211byMYxhJPA74n",
  "key18": "R65oSz4RnXJmeAuy9zqa7LoMLthRUU8Xrr3PRjfotHMjGsakitBd2u1jg7wa9aJu2JAiD9m7AJAjJrgbuyQJihd",
  "key19": "4gSA59QgFPGWfUpBMFkZWRUhy2GtNvJubJY5cRtHZh1xhyiYh4zDupdctEELXNQVCACA1XaSkPDUqoPRrAmmvEPm",
  "key20": "52yzrv3Xxfya31ynrSdcP41EoQVDZZfipbvjNms1SEioaUieX3QLpKy4CK8fie1P3687XQZpDZsAxYfLaaUv4VQ8",
  "key21": "4R1R3ydUsKaJhiqdTPv5ABSyZvhvEvjy4Sx6CfHTrmhNi8rYiru69SMPg5wjt8z2intgtxZoFBCZASo3bnNHEMWf",
  "key22": "49Xu2UGpLvUeTFGCM9hzbMTuGzBtedhdxxXfkLXcWpcYp2Yi77cWi4ZNa5YmiHVmnaPCgYvt2B9y9uaD9gg4Yf3P",
  "key23": "3eFMVGhLeiGY5key1Q32e7vtf3D3oJLCNPXgPohS7aTXes8tHgDiLSfdRTQhryvM3Reb6a2yR8q6qgsqzp4aeuJh",
  "key24": "4VR7386VUsPkNjjhKtPJRfwGWd8AsAr56Le1qY2eEMB5DQe9sQEzDkEPCnXzc1J4nbgwehHfLAfaNyw1QKTeMaZV",
  "key25": "qAgnxaZKicbzncbfUy8nLqVvdMpYqvxzwPwYrPoSaABN7U3s4W8Erbu2wPc52iLdxSiNztVe53hwE3MRoe2M9gp",
  "key26": "4u41yU746MTRZzdV2UHtDqwssfWtbzNwvWkGJjrFSEc47nLcXjhVovqyC512ctnJYHcAJZPefdYcy6zKgYKnwDsj",
  "key27": "2kShJ4TyAq5dyNEA6z4Wtmr3VhmrP4W64NqpqC5evePtCKw6oeG19qcy39hM1Sza4Ki7EWHTJeKsnH8C6AJMPZbA",
  "key28": "3hybXpv1gMJP8Q9BGrwNzNd1bas2etYDUcmihvKLNMX1To8xZ2wt7uz6XykxQpujSAA6hPS1T4uPXrnBFNEjEWpL",
  "key29": "7qFZfZPMYteM42RQA2shWfvwUU9AkYc4C2caxPan2CaeEiKVSPC1YV8qBdr55DtrJfrCARSh5yEBzBT2HkZhQBF",
  "key30": "2bLXBeDYb1xxu4PJ1AEJC7m28cjgUqvQEhRJiHziGUc7TZ5zXazj5TzRfCiQXyPemJY4aRsdwnRjGGdzdbFZLyvK"
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
