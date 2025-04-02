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
    "3n3r9zB6vYyxov2EM1HMdLCF22PKpW7cXLb1NLP5NCmna125ViuKH51hEVNKUhbcgp77jVCMmKdRetthdQdoK2JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsEUi3vnjv9UMpN1Th5n24Qje4BER33XcycjYeQbeHcGPoSSywpPTCCYLoaPzSGCn9YVYQ95xcCeKuY2m2FnLNc",
  "key1": "4RCs6ZbfdixJrsSpKf8LbprcFdCU1R1kfUh9UZ7cTQxb6ucV9f3JnhJyFUZ4ZRnNqc45r3BrnhymbBLudjvrrJRS",
  "key2": "dVriWRcnN4H1YLKgFeZsV86p75vCHuqKdKoGGUJqCKYEutu4hMKNtZSxGnwrz1iuXeabQRiMZDTowA4pVLV4P9u",
  "key3": "5bD2uua2wSXr3gJCpfEj7h3S84j9qXoeTs3ie9WzrwBZUh1NCZ2U7DA4gi4jBDnpMZoyTG378N6FADHdTtDxDGPq",
  "key4": "2LrYvXXJw6SLrwM2hXjUEMxpahwxBa2YmxVJ5KiGkmKYPY5NqEbKkQUVE4sxMPphMWFynqdYsExYHbHmadezhqBb",
  "key5": "5dgMHnHYnTStitruCT57iXwBxY5Vs1Vsiiw5qUkxcFnGRoWuhZkXv29Yat6jN3bpChFymtdDn75Mvhh4QKus9df7",
  "key6": "4GamA51qcBUWeMbfYv1TaWEgYwUHwiG6PqMy8n3wzTo6SfAjBBfCnJZ3FojE3ncTPn5PyTkSn7aRpWKi9EhPGSV7",
  "key7": "22eTmavQtpVzSKBG5PSMvfgAPDzFn1PadxdDQGw4RXftARRw5Q7iiUNboPj5a4iz77BBqFhgecBRDg5n6Ry58sD1",
  "key8": "4ubXjCdqt7ybDyLgSxuDJ2M4nWdSgmp4mVLWA1zUkjStGUEQryxPk5QGQbwxMigso12geyJhZdBb5jNYXWUQHtEC",
  "key9": "4Kch2wZ9bhRq3CvvEi2Pvukidjm5D4t7tyPMJL2jReNGDMWbf62K9rvcDeZW4Sy6ik1PEDqby8ChuUUtiXQANva8",
  "key10": "3ES7nN1Zi89yDWUbqK6MojyLsvukKQTRwGGq1f3SjFwtiUifeA4giFmE1RdNAvVjtnpodYmFPBnXP1vYXjjsea1w",
  "key11": "gTs8wFN4XDycBg2AT563siHGru3DhvZFCPu21TBAGFxXSy3s1BnB3Bn2TW6V2KGWqHZNpFrDUWDT77n8ZaPWVKS",
  "key12": "2W8tzioU9jmQAusNKwv2u2qVJND5JZ4czeT1ZizK64rQnBrSJwCdxGmbDJ9VCZAwhT9Goa1PVUtwzqgF6ZTjpxFQ",
  "key13": "5oeaQWf1YiBTejw1VRQiAzGmXjL6XPjTWu8CNEoRkGvBPb9Pprc783LqHDj5rFvAb67QWUincKj7FZo4PueeeYPa",
  "key14": "2qQQYeWhZfsAekasffemQ6RUBKJBtwLQr58E5oMtXKn8ZR5YGFCNGYWRU1m9kAQVFji3tXQfTAwN8TdKo6YfX59T",
  "key15": "4uXaKfRf9ScdiizkBqtEhDZ5WjrqyYHE9aTCXReop1vNwa2kc58K85ZzATbVxqveiQL42JkXqw7UrXENmntD9JgS",
  "key16": "2qKDZmuXc1ffBPBpDqf9pJNQ4u7NXF4y91Gn1HiNaUbfG1BPHnbFjdyGhtbfLCUoBGBapsuAmi2khY6VCRTHZvCi",
  "key17": "4oQBWQmGJWgxNcYfLN4rKqJ6YeMYbf5fL9JNe7GAhAF9m2AdVutrZGyTFpYx8xozpa3r3ecWP3v7p13isY3w3MDu",
  "key18": "3RB5FdV9rDYPRLv5g9RxwpkimN9pfMUa1f5Rwf9aStPcgpX4v9LHZPnEo398jQxyoHtzSCZPkce8QtgK5483w1Xo",
  "key19": "5q2omt1oFMz8bUnppBi5kxddGjWG87njScq8V8tcNgR6KECjizyb2RfTAbfwTUC1YrGz3gmfs4MUsbGMZosGAPFM",
  "key20": "2xFNZBZiXULKbjDMYXDGL49Lsg8Tz2VQziVSkRf1M9W6xSpGtGJuvPfrHHsepNYqPGLXnfwNghrwH7pcCjMLNDB6",
  "key21": "51LW9B2FtUatRtQLAwsvKyupXreWNeNEgYE3UfKVQawtAbjAcAGYidpNHpMHdb2cnCKWh1uNKVwkj4Hc7WD4oHnK",
  "key22": "24UPjPfk1cH3q5noShvfmLanAYM6LLzj9qGRzeE2nJF2rBmpEgTwBz95YN6qyaqcZpFefwbWdc1wRfiZyJwArZvE",
  "key23": "5BzFhysrN2pjxyf7EJJyT9G94iW9mZFaRxPoUKDX3ZE9kaafLPFvdEunqmVrETyii2kQiXZzHnGdHShoxmww66Sf",
  "key24": "xoboDi1f85Q6cfaHms9g8YMhTRgpMyJSVFPLbqChGa4RQNuWG6MFkbYHmodyWsp4KBDE6BfVNJn37iT99C3rbES",
  "key25": "2mCUXtHjf4SLe16tTcx7wWzbbJrBhJxH2omoW1RCAqt5DWCEcUFG59yqVHiiS4pJsSnkWGZugCTYRgFMAE41zMqp",
  "key26": "3deHXTbYhhjfw8MQjyT77W2u7GFMFcRQa8tcHiJnAPC2FToC1yFA3eJQUX72DSgGy9kn27VUPqtneUtw4zTZCV14",
  "key27": "3y1HSCi3mCBmSQzaEar4cpwjTGPddUhjNynZ5HUV3juZbgVCypFqtFaUYVmMDRWB1KmwB33sX7EoasAYbSZyCGn9",
  "key28": "5gmQx4oV3Bj4CniZzii9dFKZGXoaCeSa8JSAuXpLPQcBYyaUVwoYA9gY6YmzdHRMpQzZomQqycnweNcpHid5eXYW",
  "key29": "4NKPXNh6wfNdpBmE2GWsTk6fve6TtrAPtt715FYKn4nLxrpqDZjmvarZNodQquRUNRX2P5mS7E1zCgA1Ca1zJnto",
  "key30": "5Z7PjWfVKRF49MzokSj9UZxbqguRHZfbYoYCvXHwmkAqTmDRQ7465Xpys3CiLhcBcJDaCayERLiHyoC8zPHJLURf"
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
