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
    "3fbQMTDj3CqZJZ1BnpjxCxHfbCtoAhxSf6ov4ZLk4Nw9s3pPTZuUV7mUo8mMsp6woXfTR7o5uCvhsDp1HedqU5Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSogZm6YAYcAsDV5MBf5C1BKo5YFSkY55aW1F98Kh2BmACo7XUyNrh59RwnCaVYrYP6Fq3rB8pUruGLTMYTLmK7",
  "key1": "2ugEjAo6hmF3SJcP6vkb8w7oTf2oEWKGGiWfLeBL9CftHiWwrYJT9aR5AgmC5MG3Y59j9rC9odWPtGuqdCrevBDf",
  "key2": "3LKDvxL9xZgK7S362PePvRbTBA8VBa4SQmw4Gd8ymzJ6iz1BKJ5Ye6HGgQQDe7TytySq4mRJ26F3re1PXX3FWQpG",
  "key3": "2Qf3iAr8FTH3ND2Nw8EpAPVaoeSUd1gNQ9cegMkQVz9aq8i2N5RPoqhDSeaC6VwZJZUWeP1CPYn67KuEx9N9epV4",
  "key4": "3uYWfzMdD5UyxpmzvDrZfTRfYRhM5UXZW2gAnx12b2GAaErR6p7ZyXavJTcrToEv9ytjbm7xBTufniX5CqnVHuWr",
  "key5": "5Q5AhC9tDcYYSpQar5AMtArC9CWmzDPV88nizcexoWizZd6ydaY5ufxEnoj7Ahz5igpEGDfdCf3xxLeuDBDvxSAN",
  "key6": "3q5rgG4Y6GAaS2HBMe3uy3ysgSsWDhT3VZzjZ3JHU8hhVmay1YmwxVgSmBqJhrqPJrpUWUcZxFT17SFGaTkoX2H8",
  "key7": "3dc5eqFsPkMea78MqD2B6apFoc9vv6mdwKzveWhrqANvtAqUCyEXQbfdQnp7MrTNRPD6oJXaiX2wzUTAu2N1zCqD",
  "key8": "56uAK7CFCu4yEadikzhbQPSyF33rCBfykSDf9FvT4mvhPkVjapYBV6Ngw1wrCA5naJzfqCu9J6DSHh44UsoNFebF",
  "key9": "5Ltn18W8yNSZN5vRkqS7zmgEhDUJhujRjBo5QWhtDkkBLkUGMZrKB5v41yZUCujSuno1Tdma1sa71UTTLXdVeKqW",
  "key10": "1HpWPouNpe41kjdTwCYh2FdbUZtbcT5qgjNPjN9Wwk9wPWDW47b4zX3gVCda5S86g8tXVG4FhcscMnHnBsPPWao",
  "key11": "5XPCXZY4NhCxTHxKuNT9R3uJaDJEe463pqNmdLqVVYEosxrNLMqY9cBddAVm96hqcQLNR9cbH1eHh4X1uUA1gQ5v",
  "key12": "dAQi7L8Vs4LoPSGthNANhykYWVjYWTp8AoqYyBqT6H5GqFBT1zQH43VvGBi6isEXeRiYsV2NvVn9xGBD3FS9pWh",
  "key13": "5kZakDgCgF5FaT1faahRh2H5zWYeVKuAA791XuctQYnjspt2bJUveMtNQdigeubcvFmCwfs1XeD4AegETWfUGbqk",
  "key14": "2UmqEPZGS3Pb6iN4pPpCH97D78EPnsAhTQSxJ8fd9zBX94cYcY2Jo31pJKBPK68qvsASS3jTmwAmYQz6BJVLBFpy",
  "key15": "TokJSaeP1WyhXCuNTmJ2wZV68Bwnny3HFKsoEVb26JNZaW767mmqxdjpHeezd8KwGhZeT5XwcUk2Aq4J5UGqmnw",
  "key16": "3SVbMq3uR5gEBLkjqKMi3axZz9sFuApfEwxbCCoDRzMdovxstS7A1ENiGeVpagYxxuNNF68LkAsWhGiret6BLGyR",
  "key17": "4F5R28G8Y1T5n1Bh8gRKSaxi3ujz2v2LXd5exwL4WL61B2ynQdxXYPCwYni5X1NhT26nsHLy1tbCgKBJkCvef7AW",
  "key18": "fkg1X9wrdWSRJugQVsr8iykFMFYGJp1Sqng3kmB76Qeh4zNJttG9H9FWzC96VTaC6tR32GfiLbfXciumfrGU9xe",
  "key19": "534W3V8kWJNc9QcTdmAXX54C9dsY8spbkgCaXz92BFDqSGYTWUrq9nZ11TDAsU3wUFjks5e2WjwhsRLZA8GRkHQY",
  "key20": "2JYRDyAmSTr3ayErDRizXF6kCAtGuVQyaAPYYgoRBDgK3FuJPG97XTukB9cbJE4ytRXfWz7WmaMNkbtVQhgWbBPP",
  "key21": "2jp6zhvyFRfUpE1KqMLQrPYjz92NxkKEV3zZW5hnhKvHQcG6pd6eVgJf46xZrQke3ucGMZZx21gM4DjcYzWPvn4r",
  "key22": "473eLYZHyotVonL9UsVzJH9oZD73fNty1wuhb9RfzqhcgGqp3tuowQ931rCtiAAExnpqaWe4i6iQxqx99XbDmrNA",
  "key23": "dupSyG9v2XYavcJUmM2WSmdZKytcU7vmC42V8dxVYia74eTDCwWTECHR1w1SRSSpyytjQomtAs7teQcvkUqoGFg",
  "key24": "8XWJMnc75n9gkJ5E21YksqPwGmzStFbeeWi3QjZQioGuRk6m7RMv9oqNn8QnEupBw7x4yQGqS9wxiiYupBWRXSL",
  "key25": "4YkJNuw7YEo8rvJ8y31N2PXkY111aXPkgZEQ3tbmXqWMfcKratbnKws4Cq3pEkY4Yapi94XLTMFvZC1bYVfdFqj1",
  "key26": "5rboJ4Gqo26vtB4ezYQc2rH3H85vgrE5jAvpGCeogkEtqreoVYh99CPDFrrgDGXYKqWgy5jXRnSNZ5wXnNgwrtin",
  "key27": "3HQxr7FvJvvMZYVdEsadiwa6bmjz3ZABPjuZsLZoc91j3X7vm8zEY5xizXNgpV1TedbFC3gQoeMazVLBjTstDM91"
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
