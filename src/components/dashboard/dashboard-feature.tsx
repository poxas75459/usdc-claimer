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
    "4FoJt3mVbniQFCh3kNojk547xSQtxx9YZRBGwMiJ69Voaj7hqzNExPSj2DNvYFpXCbmjzvBJYzoQeD1LV5EkkfEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgKJMSnGYM8Gzt6R8qBb71hz9QM8LaxaSYzZPCV3hGjj5rQEDdpCf2JSE4HeSBc4r8rhkz4ywQRyiXcq95dhyiE",
  "key1": "58MpdH3F3ETfZ9o5Q1vqZ1qBYbcGsX2zgkcdfAy2s9189YqAaAqeXDnbudWzD2kApVc3x3yhJsoPUTzzGuQob3fV",
  "key2": "4P8zifSm3zD6pYqswMuvnbtirEmzTNe8wGmQcFAt24bmgtkvioVuHEKQpsFGYNZ3dWZ427kgoQGms8n7KxBWR3eD",
  "key3": "5QF6G8pogc1NCgUQVgYqBYXCdrP492NM2VdLNjSJtMxAnnsHp1xvb8ALqkMrkRhrVfUxkjPj7DhiM2jWCwQ7NYNo",
  "key4": "4KEnZdANtJRnhXtZnD8va3QLQB7fGNtBZKsz4HAxUD25CC2mjdoS5sh3PqKBpoTq3Y4Wt3ZSRReSufBFi1UkMaCZ",
  "key5": "zYwDo8m4HaRhgSDvmM4QMNKeca85jYM9GKrqVVLRFKMttvwwzVURPukLUWCtxe3vDREfKuaKig1X5eQ1Z1jNG8F",
  "key6": "4Lf1iq7cEVgLVPE5Crqcxzy7xZqMzfkhjrTE4G1SVgCAyH4wbi4AvmcHUqfyATdxTnc3ko7gJA1y4CD1WLXNRgdZ",
  "key7": "3F4bcjPGPjULCs3ysTEaHUojYoG4eqcx48wM146ksVy2f7cUFkNaaJaTqqtH5nrnPrBRU62QfCwW4ULjgJKbG2mN",
  "key8": "4Qd5miwBDgGsKPYbMsaYjAFGVhSLrCfBZGew2yPSHp9mM9XMSznDS82CDTP7eRrAnAMZxmMgENC3bTG6niSYBmAC",
  "key9": "4QTQDDUz1BLEoCjzgLj8J89uoPhthF4ckHZeYgE4XMSCQqt4h9A2TJo6A2E4yX3K2DhD72PExMnLV8ursdz76sst",
  "key10": "5MbeZLrNe4YLa9bgi8efSqz9AxEHp5iDnxNbSkXTk6z3nxunXfDiBTDsQK5WDHWXXKMiPbn8fTEwN9xbBEHpokrf",
  "key11": "3JCGsJ7UJVjkaZZ8RpTsdU5XEexoAaHE29eMeRB4s6c1R7dFwJxiNDUfJDYhkrdgVchougtC4zps5qQ7MXnYTLDS",
  "key12": "589TncqZxu1H5siFwQhdH3jjzYamJQhgW8Dan2dxbvdbpqpti4VP7hdqjkm4pQ6Fqjdx1VjWdrKAXETZH2eXYgAe",
  "key13": "3XhDkvtjTWHrX6ywo9Hrv2mbHNUGkiJ8gtWuNba5n3KfuzgBQqEJSv6t2DVWPckA3tvEnw76Y4z1D4p4qicT5Lbp",
  "key14": "4YXTdHszL5ZntJwtJndmLNSfJVHcdK3D3DQanaUjHyNShkpaKKSw9cfn79zPc2Gadv6sioy8jaoyRw9Z7AjWpEmA",
  "key15": "47sEiW2577e74VcvZUMG13hjnvRR8iSvo81PqgohrxmRRZbHoXaiTU4tfc4fA5RpVA5KiwrMNC5p76PvE9Y8wxgH",
  "key16": "3o9qqTGp8vs9C7bcxJ2HWLocZFPWhi1USExAkfLUWeozL5eNYd2N9fWcqPLR9dDcweWTUwMuKBiK827CmrV7A6P5",
  "key17": "2JaqUyPEuYn7MZCoKw37awLaeF6iLH1Kn1YzHDqxAT4tM45AEgeU1bKzBhWh1N3oy9Hxj8Y3m1PFdmpzUgoM7nUv",
  "key18": "3qpXTsuUrcPodDsNNH6ALSV7fwLAep9gC48vLkUcETp5VoizGwtKs1mQZFv5oATAjhfwwURYTJKLdTHsiRh1qFmh",
  "key19": "GjL44fLDaPczu3uDWRTdVh7TrEUNbz6aNwYssHZPdGqB2auismTZQka8MmsBAmw4iDrJ5r1fXfamGjFaXtriQGw",
  "key20": "4wuXuG6MwY98wvViCAak39zgQpJLgHNdzXDpUGhvzwqmr45ipdsW2wKjD2XLhix2mWEB1UwemLzu8gvoLic2ciyD",
  "key21": "47oamdCDKxS3kCMdRgBSVmqZi3MSY44R371sAxFjbWTV7u5Dc6sRvBoJMnNNFQd9hAiyBrsD1LnWgx7MFDsLqykT",
  "key22": "55HSKaohygpoxKrjQD2duTNsBi4Nss8Lw1KkQyXQQdeZyAjEH3iik5jM5XuQCL5p5mQBqk9vFocsrLh9pDZofmmv",
  "key23": "S7wxf1tmVsDfMJHofbiJSoahu9S9o8mZs3Zw4Yu9Kh8sVK3bBSQ2XdRWGjZif9erttiUo5NaABdit3EEd8kDygQ",
  "key24": "419kFdHgbK5SJVxuY7Xz9duRRgds9cRUg89xNUdoorQ4XTMip3kywpB85G35MqHGxEwjF7zUbgDGdAdQoBGzE5JA",
  "key25": "5kDfpSazrKL2EHCvNRc82ReG5oLx4qtJVwtEEGD5BJ7QTqucsJK1KNeK6nWUU49WRgWEPm3tqjmR1rYZVocAtrRQ",
  "key26": "2n4j3HuF6WzQy9wmZxLGzRbK8G7PvtZUcTx3XRbcTUEjnmgZUdSW5x1huXdi2VPjh1BbA8fPo6vcs1uFhtnn465h",
  "key27": "aG1PuzaPnnTd1w5WXQPfwG19MFH4TF8r8u3dc86BDNqoNGwKSCYZsnCGMEhZW7bQWAhefRVPjzknUMQTDWtCGYd",
  "key28": "2WniSweezjqEaqUXo3DrfYaC5p6cNtDWcUPVUG7Fiv5zLeLyJpkwhZiutZWSS3VwSDinkwCsKuzP5qaLQGeBctbr",
  "key29": "4C1xLPSzBjQuzXkurpyLSBUYnN7PNYBkooJouWAEzbJx6Wa2VzHYAdHBfrS4Diud1TuEReHNDtGGCPFJmxastVpd",
  "key30": "41ogu4DpYEC3oZzyciWWAt9xwf23sLi94MQHdbpwEectfVHpy2QtiWB6mgQB5wVTsdCYGkY9jsyC8x2BzfQViNis",
  "key31": "3zMwmRjvD6fR5TDC5VTb1yPshxYzBJ7EnKREo1fVdPCeHCkjf3yfF8ka9JDoRckvswZv7YoXccPgTPRLDt2BCETQ",
  "key32": "fb677mLNvX7sUJGxFRtpeDGWomGLvMhRgqf9nkHmoT86d5VNbUWMaoVfPiem3vKye7GcZ1Es8YFy1N9EwLi3Evx",
  "key33": "5H5DHaWzKCXKB4tw97zPPKDQVbgBG2b4fZk9gi7Jn9wtuSFdmwLJTbombTLwnBm3DiknVpprS5x34JSZxdkxEHVg"
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
