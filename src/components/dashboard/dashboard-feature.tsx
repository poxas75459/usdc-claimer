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
    "55Jrd3RU6zvYXBho6Dmx6bEJv4ejAQcV2c8vKpbGAZeQEaftG3wuXdbu5LjqHamQ8QKdjTHUukSmRM9yTFd2NbXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4worsZt8gsDUeaDLF1JZi7sFGTDjtfY4CbJp8FfZH8nNWuUhmxJ3gQckYnUUhbkZDNBNJ1q8SYtUFY22wSES266b",
  "key1": "5XFPDXD25HcZAiYRWazxSxpsJXwthhuzRb4vRcDbjTNo6U39wZpZVxdEyocKf3Npyk3PG24snYL97u2EmMZPGs1f",
  "key2": "3A3u8VSm8Z74oT5XcjBRgFV6UNBijXA4Bn63qEZpHVD7TkazHnjW8Ks3actS4NKKFHWi8drFwxdpcEjn4r4nceBB",
  "key3": "4r4WNRJDD4sCcCLXsCb49Sxocu4H3DKiVqSmV4i1UdQwmhDYKXf5dpW9KCRAaRXXhMX1TQhuxQSnthQjD2cc9AAq",
  "key4": "jBiq52VgVEtmAE5ZmM9CuvMp1cWnh3xbAustqKDQkAD8tr2PLeDXGEkmFLmtGMLvBjhdbr4Z3eorYTYd2D1i5QM",
  "key5": "aZwAkCK2fCk6Ja5xGvNkctyHnDX5yXfesqZAnwNsmNSD5mUYPEbhRzmt7uTX4SooYFYxu3bkFxG91MKmC42Njvq",
  "key6": "2qcpy1ZxLtNihLUumgHthQPpxoCn9EfeKGhVbgFYtPeBrz9izMwWaLkj5JanZUZwXjyXbWjyZTEYeRe2HKW3ndJ1",
  "key7": "3XWYKkkuJLdnjaR7VK7oCSLjFFrL6fLV61GDWd6CPL6dRFCq1WfR4vBAtuCDRJNdenkVPGfS1pMpYN2pG8euafpB",
  "key8": "33NbTUE9qjgxJdUch8WRyaRWMopmnPT45zeRVpTwVuTctx1RUGFUqxvBd6CHhPrskHmdrLhZekWE8zgAc4qakgD4",
  "key9": "3doMY6UhcntDrGs8oddNtxUGk84oTsaGrBiJSTd4UKtrjg1Rq62d8V3EG15SskwEGYg6YCun991RBRGTFe6ZZQm4",
  "key10": "3e4Pw2vJxXDjRgqUmfSW5qvS1WEaNxu2efaEfzgKpmY1EW4mzhzxWK4nAwwTCTZjfpqhRimLmo7dejNRX5Vtqo9n",
  "key11": "ymwWJYJvQyA6xQsvYSuzLhnLzcXcTF6PyNTu3R27RrdU4gW8p4LoFqdYw2bN5Y5VGc5EhmWhQ6txwRFSfGdJtL6",
  "key12": "5RccjQ1jMgnfRqEtBTTAc5aDVP26HBxWLE6eoECWdJf1kdnKY4FsV26fDdafTVD38wFs54xnxhGjviQ2a886o8uK",
  "key13": "5v5GPW7VJETwibdM2dGw9eFK52LPgcR8dBUEs3TLjyFvYuCqdjnqzo1mJ8rZAzQxg6ncNYYEiPTWwyHgbwGe3Fz3",
  "key14": "4cts3t8buULHx7fccEjMREL6XCV7MxjoxaacAhT3ZKvRFQo4JjLe5xhz47oW5HbZ7sdScsaUC9qS2xbqA3JAxwkL",
  "key15": "4Tc7MKURQ84DzDpRx7gaDr4Xrh9hrD8uF9qFGiYa3Lik4F9gTNjerVgidfcUaYQ5WxKhf5giB7JUHSK6kLnwcU4b",
  "key16": "4SXQN8M2uHjQVpgymsGoZpvr9wp52wo3fQ3DvHbiutN7UPy2E5speraEwqU9NdLH6XrZjjkrAHkFitfkWLvrN5Qe",
  "key17": "3oEqDnWuQk5kC3zoESGyBm86txVvZgTLnw658nwNFSRbTKef6Wykd4txjEoRnxSbYm44pc69EiFT7EKEZQhqqcoj",
  "key18": "4b8zD964JdLVgjoiU2BQZAvT14vZgTo5v8CDnm5NF6nzzjUEMKYgXH723vRbhEAQrUmjAg9RqWdhYjkps7bNiBJD",
  "key19": "4J56z83nAzgPyQVDXkrwmzFvPrGvekTHRhZHkyr2eTvyydZU1K6Ki1RzK3nVaNqnMCyPZscGSek486aeN1W3BrER",
  "key20": "3Tp6YSYXuX5xiHmU1BbZP8D2UQ4qZeu4HHEXzrgaHb6tkWhEPSUFt5sXvmVuhBzeMbR9dATYLDoRsYrqcjbEenbT",
  "key21": "23SNWbXGHE8pGD5ctgxGJXPHzUyhQdvmwWxedQbSuDipJ6pY2u3boGFcYM5b5akvR8EcdagfakFxYbaRB7YCdKmU",
  "key22": "5CfTDqW5viVP6EaDQ4ncyiMiaH5R9Pn6e5GezVkELHER4s1eR6rt2Ni2h9oy146R4Zydv5ZUSkBJPhkYZT2FBWyK",
  "key23": "5MP8jeSy5Q4nYDQ4yf8SSdHjxUkPt8Vfmq4R7TK2Qm7CH7VAU7XT52h3gB2tq8t9ZsogG1NT2fQ3GbZby58mtEsM",
  "key24": "21XRDx4CWChE2p8fcNQpiFHwt5MWPbk6vYvJ4AUzRbatouFrHcUnvwRX9UMq4pUR8L6deo4tqfATjWVcZEzpzQ5A",
  "key25": "4EEY6jPE9o6zdBmYqSsnD6Qitna8RGb4xr2TCh8WZybpcYxLMxnFzg8aRE9i7L6q3pMvYKCaP6s8ebAhZrcAK6x9",
  "key26": "5TUEcGqChcdq9eeceLwJUHRF6CfVvohTCD4oNKSHyiph6G8TYPyBYc9wiYuPFC7wdu1Y2GHTv4bCh2znSWSfQY5u",
  "key27": "5sJaM82P5YR6zXjokYCJmum1U5WKfeYjuHMszpiz4CJWdbnQPs7Z1ErHXRojmzajuiq4uaBvkUJ9CRFNfeEG5KYg",
  "key28": "3UzDrQHDk5pRcEkuRkhsTRrc4RVQC8WkqECkQh6keFZggCyopUAqhpM43RZqavbsfENmXso9LfBhWQDwjW721oKn",
  "key29": "671aKM1WFpraadgyXqPYBS9KnkpiGiYYgpWAiuUeUAbeV114naoPm7Gaijyy4KhwbNj9C6rfMGLHGV239HzzHL7T",
  "key30": "5ZyYtUDZa3kqGWH8Br6XG2VMU2YRoKT6fzR6nqnHXRSrGnAvyKrYxKhDgwSqxnkKEXTtxf8Jvvxe51eLn6p8KD58",
  "key31": "3nvXZUFbEwm7zEXZA3UXD8T1PSDsXVgX9BN7aUvPmGSoc1PGpY8YrMLVJ7Z2DgTwc3mGdat2eRg1xtSbczF5bVZ7"
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
