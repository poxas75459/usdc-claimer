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
    "4b4JJc7VmHUxZG8DAZSZjYawBQJAFTgFoCc6FZk1ZQtKrbN4yMf2tEka5eLMKjVREbWAJDV9RNPusuyRrtYBnN4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4KCH1AJ1cufjtTZdi7xrsp1bJgtZfdfpDeRDKRsBR1eft5w3TTra2EGHpq1ByrRgsrTPCuLF2DKsRKBVRJo68p",
  "key1": "4tnzPmHCW96hDTcm8LVxy6Zat85nsruzZ55E2iWpww8QqDBZeQov4cwH3iiL42DntbpWNRokrZq4bitgqBY3A8jh",
  "key2": "2ZcQonKrX4LNnCBoEUJkqbQ2u6cp67VXN9Nwf94h3Xm8r9CgUTnNmPqSjHtYbCtAuAkEwihhBBMJjwKYsio2xGHD",
  "key3": "WKduuq6Xse85tRoTpboEyMnzqEU12Fanec6biQBFffiUm8MZvACyxHXLewgqp5Jri3XJr1sh3uxUnykXXPzytro",
  "key4": "4pfyJAS94CojX6LHDHqrBp8xicfjmgcwDW38qBFjDJVfECSwSJZQLKqV6J7YSa9BdSe7KHdmTZzN9Vg2BYjaooUn",
  "key5": "2P7BHkQHuP5oNKgCvF97trBqGc6B5eTux1w7xRTkj1od9g6EZESZfn5YM5oD8e6wK61puobQUttqrV93rdiNiUdL",
  "key6": "2S8ySm5AFPWMvZmR9wMy44mbGwfy34UANocyFooBfiaSwDUhoYjyEGTRvDcA9hYPBkAUBuQ93a3Fqjfn6vFoLZe6",
  "key7": "2wrBrLLaQhKjFM85UzJyH9acrj9wbY2nJXobCweECh7pCHfmiMPeLWzEojkjPn78U1hSzZHumJoj6ykGFhrBQAR7",
  "key8": "4Gd2WkMdKMJgULPptvDJBMbjbWbAmqHzX4j7sxQCNpJ5mMfJoPEEpCrJ8DBZ9M4UcG1pCfXgMH72maCefKWr6noS",
  "key9": "4kvc4EYyTKvpwMLmtvevfuCJwmGZtRPACXBew2D4XhSRCZ4KSFN9sX5QDFJPm4naNoYktAdzXjVdFx9uZvgT9Psc",
  "key10": "4VrBeneXxQZEiVHV1DCD6gqXNN9Yk4DrYt2e948uYYwzZZgM11ia7AVNKNVHosJxwcRWvw93Nk9BQz9qsuWjcyEJ",
  "key11": "4mamvQc9fVLteqZbbViTxw8dzYW6TbRiViXfUKKexeGkUdApKWVsYBRQ6wo28BJCY8CaDcE7LtQKL6ZT4yyVPo35",
  "key12": "5mpD4BLnD3U3PRmy9JnWiUGFRrbdTVeY8woTyDjuVmnfuTZerQREW6QzyXmmr8kf82kqqr5imjsXvYjnCxNWCmPj",
  "key13": "3asVBP2vWMrHh19AyjS9qYqiutf5pQfZg2Zzafk4sHojrhAKywdVHCxJZYMtB35aF8cKs9uuPwMjCzA8z3inbjkj",
  "key14": "6jnipy9ZAScsxjbBbFkSW8oNPJzDkeGr4GJaK6cLuUSKLNqQStCZ6thhVmJJBpgk1MdM8S1ge7tUCf63c5vcNKq",
  "key15": "5Znycdc8LWGk5NGHdFDaNnFRFEFcG69dWjtD6bwUAYQjxAPCv2iQPmRM5He4N8uwEfRo3B3vUzM7iF1y8h33kb53",
  "key16": "riRcBBKKcvDpYU3mNAtf3MzJmfHbvEL4gXnTWpUaqrFxZ4kJvVGocQurd4uJUMinjVG1ZUbaW2BDgR8KmZbwVnN",
  "key17": "5SLPJWK4mM7vMBipssb59E1wbwuLD87VcKtKseZ9sss5Lt7e2tUasExafvbqV9uZ3RfPmYFzJvDGB1Pgst9YakPB",
  "key18": "2eegD1Tk1DvJGbs1GioVoYnRQWiprsk1Fc5Ceccy52c5SW2rtqD4QQZnZFA1kUnk5p89kyY5CgUnQhcWQodptm3a",
  "key19": "4RE9PmVCDchiHoXxDTrdRJXwgnuaJLYtEsHcWERrnq69aLUUrwTm8Cx3L4J71K85eaAGbnhGrM6xUAZRjxZJZpuJ",
  "key20": "3EXjRF4ycR539EZJxbhjkkmvRwVmoSFQtaWNTaPAGyHC4sXNPvSqRtV3id2RfnhauBQj2pYtTt6Z8L9RPjYDMVz7",
  "key21": "5TCXeJTpV6o3AtUnYK2mwHTckKP2TBLYxuFjpY9YGgYoco9QTAu9SMCqW1rfAaPR1ZDPcyYkXdDubYYQokpdoR4e",
  "key22": "m223d3mBkzVEmK115JjmME9o7KHkouQ8yozGF583bAnS4iHRCwg7Yt8EL8GvxxzeknEBMyACAN4coLDkN4q6kPn",
  "key23": "4QqGjVZEpnBRzyay7dcZL2sb5PmaXrLFY3Hp3Du7sTG1oUDDjH3hU5RRu4QgqcHwJMurEoBLVDNJxrbVQG8XFKbG",
  "key24": "4icBuGjPZdMpQzjhRgSQjF3usZVvLEZotQpQ6z7D4oFw7ybKbA4aR7wRF46bWQKrxsLrb6PSCoANc4brNxn5XeG",
  "key25": "5mkDWse7LH82wNF1wxKHtvuwF25H7A2H2T4ZrCZCxQkdj989kxCqG2ZWGvSVphrvWCnFpti8mXFUenJMDVm4TgK2",
  "key26": "524U4PaWBCXoh81e4WUiTwnuF5jhm9HJqrJUBpcCtdkCzwHAs77P6V6F4mfHP2hTMPMUAgWtwQtUfNmf1W5wFnrY",
  "key27": "5utyyCuAgWsskNGDgphTABcfYhogNjg6NuHZeK5kykBgoramTDk737kx1Hosv9PzV6UJwssdCJQyeUTgW5jixHQb",
  "key28": "2y86FDv2kCxNMNNeUMptfGf1udxjQxr1Xd7gbfMwKAa52DtS8yYkDbQH5j6LoSoEzeCCHQDMzwsZpuBLsS1wzTR6",
  "key29": "3YLf8Bx7gd8XMiMMvpEWTRjcCrZCNKLM2xVTgBHZjdade5neDKjgpE5rAzVFPDb9k2FLRLJ6tJAGQ8AJrkqKSMbE",
  "key30": "5jjF8Vc7h42yr9NNhU2EHxvFTPXdBSF4Kmw3pw3zpqUzLQ1VWw9FKX74PvfbZXAdKVgWzf7htgzhjPFkJyxHXnVj",
  "key31": "4qTCxHx7URWJvRyzz1fbS7bww9ssTskv16NWmYfkFNh9NVDeAj692oVjA5u7o9BSXzaUKgrVncLZXATCnvxhkgjU",
  "key32": "26xezftZfQqBLE3Cp4JVCq6z6kyKHVRxna561jMGDU2xGR7pbCKLHapCLcgZB553xHUcg8mJHF4LecAQWGEe9viJ"
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
