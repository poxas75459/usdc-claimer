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
    "48ZBRkk17j4dASVeQtdWBTXcER57mexJztDRPM2eg9xcvnU5q45WKZUVhdgRapkCaN9dsSvAKXH1JSjzk39oXcMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPdt1vgRs7VAdVLtbf1hHQ7UDeyJKZkKmxn54QwpBcewVbPFYSxdkbNHtex893i4cTFtTsDCACFxjwTdHSBhrJU",
  "key1": "2N2M6wjavaYbyx7iwMRvzUxmoD9pjqLc3Wr313pEFWRm7WtwxhWyLLavPFKLLmpXE2iXrV3tsAGVqCSRcvS5UwvB",
  "key2": "4FHKv2e2wkLNc4Gm6PJHeFEDeJcjMFZTuDoGTHpaBUVBCasb4sn6oGGA9BC8A2Lm4QHLESz2behraMCk9Fi3nawU",
  "key3": "2746mCkYpXmTkKCVJCKi2nUt6XEg69WEtZwun53n7zvPxAN7a8EAmTAeHTrf1Ezx3BhfReykCxK9Dcg2okpwf8KT",
  "key4": "4MEPa4mYU5oTMUiqXRD5C3sVxi815kQAKFZ3Aqzuer1voLsttewAKSNmxpfx9Yhus7G7dingmLLYy6jgTBGLQCht",
  "key5": "4ehkaDvDdF5gJUoE3CxaUFz56HMuLAw8w3LJAdPM8G7bJXoJyY8Q94JNiEFi8BRWGhzHsvT7cg6u2Rtsb2CtNZ88",
  "key6": "MonPkaP4jtYBTJbveUAvmNiTrwuHqrgg8aUvdNKfPfYLbeUQoHvBfgYBMAQyb82ySprRb73Hawq7YZgFTp4xcdb",
  "key7": "3QVM5BsGSo2BCtJ3M1HZ234PZWb2x96igLMRDWGqfzEXdPu5yJ483U6kmpzZDVKVeXMz8CxW6uSVh1gzdcyBCmzp",
  "key8": "5CH1uHMvSPYSsdK8EtAAfYM4f2WtG5npx8RMhEicSq7T4FWvL9cjuMbpY4CdyJRfzU6pfQtCsfgqv3xEwy6fRirY",
  "key9": "HWv6N4bLSm92WeR42Mh5Ahf3UjnTymGpcyao6A8GEkTYCpviCHjUSX2T19c7zh4ZZue2N5sSNzr9bghejxa94ij",
  "key10": "2QntLK2PYbue6EdxnkgGZcVzVWdJFMoGCFjPfZPzHqUAsAYbT8ijLkBLKrxYjvPCZt2RLpxaQz2XjSv91aM7z9oy",
  "key11": "T9btEpECz62YUe6K3wuhzyVEaAQk5sKK7vb5jcAStE9kuv4eED8fUDDFRieSoRnqpeAXySdEzFZBHgcVKXZtAFU",
  "key12": "2S4WCLtfJKzUNPkRzUfZJDeiycyUSkwSvRuMhJLWtXJhFexy29ZqvBdkjeTUWeRpiLqNbsYenX1Ton91NCidZviU",
  "key13": "4whdTU4qktKT3TNwo1wVJqnXH1HWQNfiujHdRuCp1nXPvzWPN3cxH4Ln4CWT3mAAc6hgmN9z2ER6EgiiZbqbYLi6",
  "key14": "L7WtWo5dH1VjimkhjCGKNixaSM6pMKYz43BLMKiJcPZyHxwWyYE32XrMzLdZi8sx4iwQqMj8MtkJNaHNwdyvmxK",
  "key15": "37rGAQX9LaZ3vhJe2s6pKmCP5Pedq93st7qMUL48jeXFmHfTM1gFGLtR6WyviLaGrnmCHrfwAX4agGye9RprBiGb",
  "key16": "2tP7tPAGmyfLUVSy1VrifP7E4XpqG88EY95dyYFPrgEYbNPdKgDzWX8PyKzXV1zpB7CkUWcR3WxWQDsfUh9NQQCH",
  "key17": "5PFq3TSe3AmnJGyhGHURRQgPz6fw6KFpZuuigqWqy6GPkbmJF7Z6xuStnN1wSBcsA7BioJFfnzqm2Y2t3YaGgJEq",
  "key18": "2hLcPKq2SSe3k3f3RkFoBJYsq7WAUWV3mASsL24giAApMuPC6ZQb5fvWwp8AbcVd2vdwhgfrNQwv9JwSeX2DzuUC",
  "key19": "3RarxkeN9gmAejyNVxzeZGqRN4Uf2gdvuvRsbajiJ8M5bM2yayF6kQVBZpTi5iD1LMgMwq8VM6vQjcm61bNA2FGT",
  "key20": "xDiGSgmrofNfPnw6S6F312mqzSmsHBuantkC6h55qNfqMcGupXHQrSM4xVeZkzKezF65kpeGXTwTxcLsypq9Q8f",
  "key21": "5yA3eoVFYvJoWux1sGhh7JFWcM6faGsW9hf7xW1ZLMCAmPqtbM5JU2koU1kE1UvGf6i2otWBUkpwvx3VVYCzu5MG",
  "key22": "5J7TWvJKefpKR9ng3cJmu7EDzYydNsNWxYy7hZt2LjBb1XmHC41tzMTqNQYNHut682Eb4qpa9f9UZ9YFx6fbLbM4",
  "key23": "3VWxzyVwW9bfpVhQ1DDtQJvHC36qvicXxZ3QyQVQCooPwQDKkX3v8TMuSKMD8dZNQxts3izyCYDJA6JjB3344QZc",
  "key24": "652nLwGMTjau7P6i24ASKu6KuN1wqM32i6khDsbFctusdVGYF1TRmE8mSfzqnbbpS7dStX6bBQC5TxWgo1ph7p2e",
  "key25": "GNtuwBtd8WhwpstfGB9PFBnoxtZsgmCzDMGtTBQ3db8wdm6amSGWnQzeLRghgrRR5DTDP3DVmT6pzxJX4bSNe8M"
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
