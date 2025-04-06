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
    "5eJ7pE3A3eoR1bvCYSpxYgqgYdb7o2D16ggTzdi5nwhG7C9KmafpzjpVTaKxYWvJ849hpouHzWJULXgDCxzbYu3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRnS1y2UC4Y1XPZyhT6GN1JLSh85kzuoKwGFLXfG5bG2HiSS3QECRNm8amifs1hZUjyG9ymz9Q8sHf7AH8nQVce",
  "key1": "37Hpw7C4b1Ni7nKKGPwsaAQAgPiYvHKVkJVSLuSKVgUFEETgFSm2c5YoxMQzfF9xBug2k79f7DVzSPpogoV5pwHX",
  "key2": "mkv946nRxpryqUnhnjJYD8c9QkpyEvAZLutSRq1p1VK3qkyYuxXVPC6mcUyqHLf1nMX3EBsvNXYmeuCR6QuGcCa",
  "key3": "84YebWvByQ3eY8qAPDXEpUXYUBnasHBpqP3C8RXM2Hr313yeqSPWubZMqQkPErLd3aHhRCtLdAaxLmMCAfPBLwn",
  "key4": "3zbg7q8vBfghTSDzGfzSvPJE7v8LsVMePpSedMyjB9RCLiRqEa9wiecEZnfLTTg35Fdf6qwp5fNLNGkYPG8cF5fB",
  "key5": "2yyQT7ExAeocv5S9epXGrnRWBrC9kEScFbVVftQTN7P5ebkV8LZ3jyd3mEdyGUqKkYnR2UrPLY28TDtYwtpe5eoS",
  "key6": "eeFC6jqnio1yecgNLsk2WYkdsg355ovTPbPgxW64GNAYXkoDM2m7ouwDpzMABvuaaUGxxzg5r6JaPvPnCLNoq78",
  "key7": "3bo75ixn1w7czHYZgwr2BQps6yBmjAgvJQw9WLpkhcVChDGrD7hPiQQfswUrdTQpz6xAP7C3wuCqN2K4Hy3wgwn3",
  "key8": "4ZnM9aXPbCKCQBdHhhARW9sMJJs1dbA6b6uWfuVmaXQa92xACFJQnB9CzASpfP7B1fsxbh9XULzDGQxzVKxdwRnz",
  "key9": "63ovRBThTE8VJNoZvwUAX1NEted1dJoeZNQWj1zr6D8iTFion6et9dPV6oQKvTX2zSCnubnZjQaHbJwV2zvuYoSd",
  "key10": "248M8GFCVgbUTyg2be8yMHWFVcCFiUGEFqrBbw9H79jxJBa67NEVawr7epJqFRVok3oim5NCDpY37fDzJeekYTrF",
  "key11": "HgD9YcjCwv9bhm2aUquDQKaLANipHiXDYTcKLK8p9nVHxsuqi2bFpJ335u5UwGTBRFEQcc8e91LUD82Ptvgos32",
  "key12": "5xEsUvd541eXZUFHJ9XSuT2AvvSS7mVuZwWgR8W1HDFr71gHA4bNnZZ26z56rniVixGxRcNob24nZGKehgixoyFV",
  "key13": "4LC1EwpJJLy7xnp5WsZHN5PiJ4bEzFuuPhGZbzQBoFH5FgcQ6HtUZRMa52gUA1H55hADumQ1JtUxw2fsexVrp9uF",
  "key14": "ScyggE8w2FXQsD11oAv4RRdkZJyPGirLVHMErUiFPf5VHXXxATyC6SwQKAQzBnhvgBecafrSphGL8nWRAjYninQ",
  "key15": "2MEC9nkjESHf3BiQrxazDGrGZS2hCfieSQsr8vk3RhoUKeoUhXUpwqENMhFYDhxwdUsbAzAXd7uVKyuHjZKiSbiX",
  "key16": "3Gdu5c8uzUL96c4NNYCAQRfU3krkDKEebEc8CdthRshXcEFMKKYg9XUjvThLMFxWvvAX2dXv3a2Cps2Gdg3Lozvi",
  "key17": "2HSTyjcc9ZThyNsymQnh8VgD1Gxs7gQ6QGf1UuVDYnQ5eRYhcrzQXE766Eb15a8rohiWrBf8j8Se2oingVnHJjzE",
  "key18": "3kWnttzaDifwZqsGmpvVVTDu1AWnSbcEyS7syBHRYUF1xjxCiQeGNZeGj8PCArvRXLPMQCXMVHhnRymaUmWpiUcu",
  "key19": "465AWwNAkuEj35kN9zkqUk917M2ryneUkSin2mdDZurKbt6hJthVMLUe653zi33uuSaySpm8jrToXCooobBj77mS",
  "key20": "5LfWWKxmYSVdpvgrsSY7D8mSggkocQJScJo3REq4v5ZqYN2UDjWhnMP43DKXkvKkTNeo9fohK5cNkDnZLomVEDRL",
  "key21": "2YkwwZQ1MU1GwNU44GZLN59bf619hUkCewac5pzDDpiLL1PDtkQm6n8WeSoEHaW9Xgiad9GFfqz4ynMotfZcDoyE",
  "key22": "417Vogrc7P8idcBa51dByFZ39sHZpQCPycDmSHeWdy3ZgUftuuviwupmAXd3Sb5whvPgwrqeGozveCjNFAbUJ8pZ",
  "key23": "3cUNwKZpnpG1NhHdt55im567XopmRebyesT82RS1cBXrNEdYSXMqwgpRoHbdYgik13qLhSSSUs36uJAWrrn1iB7G",
  "key24": "4ZR1JEpTVSvPeNHbpC5fEfMAxmzyfTQoHUHFzNnhhBmYq8iHrV1gwkuYsGJNgz5EgKsanpvCG2975XSwQD9VwyFy",
  "key25": "ZdhC1DWMQekPjHuiHgfTWQJzQ5cTsLqLD2oNyDqcE54DxVLAR8ehaZsCvN5D51ueQo5e4AovX9ZrYRMg7Xmt3HG",
  "key26": "2sg1ivjsq7tMyqihGRDK3VqTqjdScpq1GscyqNn2dwbahwGmLQxpXebdSNEucf2CKMsATcLbqy8E4p9oDHUHQXLJ",
  "key27": "4NQ8kDW8eeXirp71X8nefp8pXW7XWmDVFWYw3jUqXF6i2w2ie56GhLy4UcjkRAbTBGL7LTpFi2jfTZrKuzRFzVuy",
  "key28": "2rhpZ9Di7FRQ136wQZM1cTqexzupNw947wEAZ5fHcN1ZFVnEfm4gHYVTwNQj2GYg6CUeJJnfnysHUvWpFs8Axj6h",
  "key29": "4gSTnN8ApnSBPJyYxaNkcRR6Z3pXt8nuijN5CQ9CJnBSoVgcBokaJeLSgwZxdxUJSzdZ1c5G7ZpCcakeomCA8w88",
  "key30": "5SCbWNVRjR6atPYjjjTFd9nW9D6GW6GnvHKLZs7fB7gh7DbYzjKiGqYtyYEWiv3KcgY5v1PwLjWmJHSHQXGZSeCA",
  "key31": "4dJC7ACQb56UjtLC8ZMBEQyxZwb7KKXB6e7cKQmkmsdadbY5b82XGBL75AExtUrnp7ja3L4oKFAmSUX3AAhLAXdx"
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
