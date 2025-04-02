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
    "2DQ1XrwTgAHoNAjhsoiX8FVefwQ6jvLWFmvSM62urAe7tQDF2QYsdmqjgVma1jdR9UhSGVpQvtExvYBsEvKUwAUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTzvKBL6VZxBAoZXdzxvKaaSUQa8L6hBASWuwAWT7PcHZBVgxCw1DXjbpZwCDDBw5ZoBYj1v3F2Ww2PRbheaujY",
  "key1": "2dvQ1yboFnN9UtM2WqXtP64uprhwDM87TB4QxyjYqWpwNFS8XYJ4keGJJEgLzfeVEKAS2aaFEQWQeid1LrgCLenG",
  "key2": "3SY3kVzSc6YoPFPCxGmU8yPQxGcou4397XzEfJBnSF1VRxDAHcahBcfqo6ZA3aHVdPGDp6UkwN4ZQE85wNasXsS2",
  "key3": "5V1eKRw8q8ryBYcckGYKwFmQH7VXcB5uusFjaHvL7JmzZwoCxRmXARGn48GJH4kFt5eKuydaTmcJJfieFRhmFPgc",
  "key4": "3f6t6KE3TR5jKPwMoifZyxz7QKNFDnXy294f3WxDPnBaH354jwnjeyuos3hxnn9RhbsegGfofjyFqT911LdBXwj4",
  "key5": "4Q4uLkyK5KWcy1seeHCnfasfU2SgHXrRnimLXShiGF2RMv3QjwKQDw3MZff1Py3UT24yPzjHypPPgHY5e7YB9STU",
  "key6": "3nbZMCSSpSKdPoBXamUtA5xnRB8C7yAufLa5gDV8MX9HLhJA6djEtgVyrqLGu1Rg7y1H8wbaQXRrYtmoVyRdQP6g",
  "key7": "5v1kEPCbfET9VoZqB2tNDmS2fDdDLqF3NXakoQAxjCzknGVMmeHDA5TJbAg2mF3Cbuzrq5iJEH92xYjnB6v1Udam",
  "key8": "37hDwUgk23wD8VtWQPANJLbL86qC6j25bVLD2LWByG1JaXNcSowv4fP24GNBYAzBmvhcte5LnfBY8TeZyqSuDxrG",
  "key9": "5HJ4MRwZocA3MJjQVsUZYXxszNn1uHfqm1i4YwSyvzf7wanPdnjGthw1JjruqjwqchwGM8SdgGvKe2C5ztDnTWQ6",
  "key10": "5e9mNzQVyXtw8of354jSHLzzV3fWvjGNaowrxKVJx4uf6Angq92taR6EFj9cPrtGsq21udFwdiVFsHsBxeBKJ1f2",
  "key11": "51yrpTCLbx9ho8iJFtcWVnUehX1m3orQ1nJnVV6Kh43WopqM7wzxfnVUMBeVwtMDjLxL7V1E9Q4JJhNrrHJymfVq",
  "key12": "5uvkiALqMYDnMWLyciXS5fUyggQ28sChAZVfroi6L7qgJqrDokoZx728Q8jRzE8DDCzfevXuby8xrv4YHZpyVuaV",
  "key13": "3qZXGPVNCsFT76BMoqe31gTcK6LPjoHh5P6ujJ6Sywyw6fhgaJZMaVtbFBDHetD8C4Edv1zPjQ2dfNuNa544i7N4",
  "key14": "52TJiiPB3H6TagbF4ZKWxUMo5oh4nBxLEgLREKyBCm3ZBbxCrKfnncseSoMMwEUn2BR8LViWdDrbUKtKz4naQSZx",
  "key15": "2P7oG6BphkiZd85AvcJiNzjrH83SggmHmuwKrd54SR1nq7R7AzWAif25wdXw6e2QVkUbobBFQgcBuDMFdxwFq7Fa",
  "key16": "3ZkmVkk6MwG2QRau9XZpcgYhidkUbH3LC5TmL7EEMJtN324o9CrQLKVbnP83E9sZr5obAbrpPuqUcKvEXqfiWj72",
  "key17": "499Y8NgTVmkTTWk5aecBBgs2YT1tAjaDL8cGiFYKwuEtnbkXEuoCLQmCRJnzvPQ6rteUxfE1hhsfyzS4Aw7VGJYL",
  "key18": "54CJWRKCr7eFFzb77j9KFjANv8orYxo4gH4KYwByLN8hDXwHS5Xky53PBajtRqsm2Q3dAii6GYx6pp5rLYhtAjR6",
  "key19": "kPZPgitfQ3UfY4BLgvL3dtt3ymbRtHovnmnjBvaQ4j8t7qXLmh4eMiTmXB5XWiwZSGfi7j34B7VhvshxCzm63tF",
  "key20": "2hqfeu1oKQQGe3vYACpnkuhHWNRSS3zJuDGbZ3ZhnMoaeFUVPejQAYYji7UxW4kAWEtmQgJ5pyZCBgedHR7zEr5M",
  "key21": "B9vrD3awG9XPr27kppfRAPSAfqAqrtU43u3LKbScKagvWphvxRD5VGPVM4Ni9rAddZVcdcVgtMvVSzTkRQJgWLQ",
  "key22": "4aENyJHuCAh6kwhHQG7LQC8wjPRbRHzdEko9Hp2CsCreKCMEgoBKeZcyckaFMpHtiHihFz6GAEBBKALNqvF3Sczu",
  "key23": "3vHD6e3xUFaQif39vVw2WrjkGuAgWxv8Fn2Vv29WKXwK6BZRzQNabG77e5TehPzVy5EGyegzQMj7TNwb7HQDSAyZ",
  "key24": "3u8WvzGXLHtLHqiFAZnh4B3cgaFVbdPmZn3mzPhEBFJF3K1czkMGdgimPAbmyYiy9TbaL3L6CUTphqM9WQ1eYrNd",
  "key25": "EckMfzw5m5fFAp1XfS9JEmvTv5EHuRN4btCCEfJqwb5Ja9Ay6axfrjZzwg7vz1nrKpLay6P6mNo9E6xsZYG9P4N",
  "key26": "3YR33mQv6yqqio2A5PyTPJaGHyrByWgjeSGK3tPfgruQxEiA7DTZQmSM2ve2dSGa9W4nA7BwUxG8BFDuMXhnivcm",
  "key27": "3vjy3vCg35AuQTv2LWZkN3UL9dWmW5u6wz4zCgXvXaNQJ2PYRKir75xP9NJJiw4wYQyZdNmre2MydYpu1xuGQKyK",
  "key28": "4ZHFe3gd1JM886iGqNSGke5nSaKE3UHnrdYJdQstXBupdMoysP9LvyYFHLvEn4yxyLhkJ1NndigWqkfFRdoWkMYz",
  "key29": "5VaUXByXkF8oNE7VKLhDyPHaZBL9sg81mPmsyz2RytZMeUEbruXQom2Usyp4pkZAuzqe6GshTzV6w9JMfv6RLLyd",
  "key30": "3y1Vg6R3hCujGDKSHWrYMkTYqAMnJFeDDVb5sSXJJtdfb6Kg1mLtCHKTiYef4iU2tf1hwf6GUhVSLd3zSbJoJmvd",
  "key31": "5RskY9JFNNTCaWRzLgfTtaid6V7FZQ9etCnLdd4gFY6DmuPuRDysoNMc8UYbM77eyuqQ4SJnJRnnGx2y8bafTtNF",
  "key32": "3UidKHg3mv4CHXHG4WvvoCTayyH87dCK9jwGSCc16X2uoPWRYBhXEheGGB1sj1vqLonnsbjfNdpZmJAGDtKFmPUJ",
  "key33": "5eN3XmVsrx45b8kWJ7FhN47LjVitYMiwF3K6Mz4VChg5s9fg4bkEVXwv7E8kZgqGFdjpLLMZPxfE9Vt4HfVkZayv",
  "key34": "63TonyShqpKYR8woM6Xnbw8nmvB817pZoTQZfspJU5oymdWCSBW6y5cdgTGwZVktXw3RwyU7XzbyB29dydj6aMWk",
  "key35": "2ewtEMsn4ZmaXpdbnnzRBn6dpiuz3EGwjM8Xa33MfJk1XEu2wpwVFNrJ7CgCh3dZSVUz4bqaza4qkEtCPkm9JH2x",
  "key36": "24sfQcQBPEryduGy4zfhZJatzvyNhkne2toYqw6QP27YRZDFzZyus8D1PG7N2SsLbe9FazCRrLWJu4qpfWLyqvou",
  "key37": "52aVfTjyMu2CQtutuH9c3YrcMeM4jMxfbfPpT8PzW9z4u3nWgT7VuxapwV7VChvv33918XDfeg9LaHA5t5XKbuW2",
  "key38": "55K8axRGoVPgP4d66dpYAaUFMS5rdtmnVG2LQ2WXkPEqdxc1eYvVKyYQkwMb5ibTyResefbMMvUNvDwNtqHfTaRE",
  "key39": "4JDTf6TnkKNRw8Dez1uKvnaSgRRo3FFAYLk3adWnN3vitYkN131TFXeAtz5T5LNdwfUbCoSyJrAwKejiKbgGFvAu",
  "key40": "5GiaL2aCh42zmdUhnP2H4Tw52MjMgASQMqRoXbNdY2GQuHNHuWyFTjruv3Uup4B7ynLFDy3jt4mYbS3QwZfVij16",
  "key41": "A1Q9w2TdKCqDSLikKodZW8ws3DweVNyfh5UKdWAkoS8LmLhLFBFd8d9HFBDJKSDtXtbrzcrae8VBxVpPHgMUssm",
  "key42": "5po5o4qAbULvZcQWo8MQUF219ztSt8i6yHABgtr84KS7VeYXpEUJpjFFANrzNpn38yKL3sXWG6TCqJ2KCjMZCAfR",
  "key43": "3HX7CXhYVSBrkcC88LGw2Et9vKJ3xGbDbPzUnT2Q2FWdrySc1gxyJXvDGUunE1LQZDJGijk6z8Hazr8FH3j7FXw1"
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
