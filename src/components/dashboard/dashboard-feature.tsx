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
    "2gFACug3hzzTevrAiwZrMetwU7wm3GrRFfmoy5Lo1jq3JfKTnbQASSZVBKRgbUazzBaZLrR8aQbLfp7wE9JcqGNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56unp3snJVS66tLJdWqG3rdMYcVjHEEH8tP9fL8w5gXrZTxzesBLk3z3NNH2mtszxFo6zQAiR8yJncWF6Vp23CRW",
  "key1": "648gfy1UDditEvg44rEaecMVYsceSJeqeSS7uvYz4wuWsU15VG87cDshsVLtS9jUu7rvBB7ZeJboxKvhG2rsnxvg",
  "key2": "4Ak6WFzm4SwUXQHqGWzwTdY1YuWjs5G5kxiG19WJYNDc23tCuJgAp22ouJYokQ7TiWDr9ht94eCDn85wkuJFeQgY",
  "key3": "2tw5k2WqFnX8FaooVgF8MHseTza4moXdVnpfRFLcPb1xRNT11Lqhnrj3SNCrotkAjudYgLM1c53Ay181KGb1wDjA",
  "key4": "MPYzgKRPH41CL3LFPUrGYNFtNqwBg8jggoTSerpNBw7dx1tzPcp99mTneuJNN89wwArv7hf8fuvKq1tVaWGodbP",
  "key5": "38NpBQEXywwZU7D27RdfBrU2oefDHUgphY9bPKRGkVne9LwK6B9qSVcyB32bmgUsZQLi4WyFTLiD5QFC8osSegZ4",
  "key6": "VCZMtBajc2bCnR94i6PpYJGTb6Nm3kafx6heu5rH8m2DEgWTQtENiDgSrn6fJkqxkDr1dCvZkQh228PUPgHrnEQ",
  "key7": "5DoriGouSbqZzkhjsvAu8iVj7R13Jbvkfs9N27KKwEWMwo74hfWr8eP3ypGxVYiHrtGS8x5xJCuQ6MnJZw8BHezL",
  "key8": "2hn6LSxPu2jhdZwmNpZWQEi4mwErTA15AkLUeKondtePQV3uZv1RJVrXqWt3JYWu7nkqUbHRyMYmbG5Y4RACuykS",
  "key9": "2EZemFE3SPw9MaBmYMbJdfs9tcaqCrL9Bix5xxbvfNEzCr2mSgU5fNaJBpC8hV8bcfHqCFpbwLE239W8dTRsJYhp",
  "key10": "2qko91vww4G7DsBSAbi7ynqL2u32rygLHy2FH7xxzjrNTBi6fvcDSwpYK4VmuhjNTx65ukpxzoF3oqNtq3wAKhPJ",
  "key11": "3hV4ZmqmoDwp5kep1codG6rnB121UykBVkQ9XpEyEzvkQyeeaRGoGgXkDTruViCSBFcuaFxUfHuf1Z4tDaQ2kHh4",
  "key12": "5tzBDE3ZCa78cMEa59pw1W5jhn7rM59VMFbomJpv6UKCXoFJUbJ6b31PfvfV5o7Uhx5BYiroMzKHq7HuXkqNhK5R",
  "key13": "5hLtqPDvSoKPTzVaBvdfrmVpv2Nq6VbwXvYFiRxEFDwtqmQpqcFwa16XTATHhYjnw7tX7fq5Xismy6e4J4EoebLc",
  "key14": "3qE5AxAwDHZ7Tu3cvXaCPkv52TfACzVBrvuMQPTrbqAr4GcP4W5yR51ZQkUzUdbLDL6gFQZE4qUJ9Hm6DfLN3NE5",
  "key15": "4NgjWUa61e8oZyrjyyk58hG6iXDvLYS1kPEvFm8Z6QGDvF2nxj4kFpx8ds9d2Wcsg2FCEkEiRHWrkN917XjM7jNC",
  "key16": "XFbFTbH3Ya8j6bLEWwJhMVMicGf3FKzLb2vSrNxAqvAYdhVZdVQz6Ybcc4UukYxJHmTPMF5estQ2xKo1AvogEk2",
  "key17": "5iCCD1SwZcD9k4RnMs583soTJPUiohqpB285SuJMb12AxLjnoVrBGk5kqDYxxhbr82BUs1w39NZVvJkNZA7BXVEW",
  "key18": "3octfLCL9EJ6hEMa2GpPwdVZerbcbspRkya7wKDmNyMWXZVkdWGsL1vRTPtC9rfM6NXXkV5fsJ4H2JoH4nfjLgkH",
  "key19": "vGAz5SgpENUeayq6jFQxKkoxEhS5Yi2cHxzmkYeKmPuq4p4fdmAiMz6CpBakEB7Z1ZTWgL3vohhF2r75xgJhWUw",
  "key20": "2PUbTLKnFHDwnDvZRrashwDFx9oJQxKTVSuAv7YzaBqPd2YJ3o6TLpKhx9Ham9Pve1yxEfhaBCySu3nQPuazMEyq",
  "key21": "5vqQ27vBWJChaSrGZX5Ke1bSnToxUF8aG6awQ3nYL5nrwXq7THZaxVtaEcGeGHNXzZepcfb9QeFh4YrbWvfbQhPD",
  "key22": "fgj2nhJKYwXZheyXWU34UHDUvK9UUb2YP3jqtacVuPwK7kWkUuvNm7gztSZW8ofNEZSNKKuNzMYruYYneGYbRVD",
  "key23": "3114HhaPx8Nui2atAWs44FZmmeyJbq6kmgjdb7wFis1eXVboTw3756G7bRmgMLc6ASJp6Q3FqquAbybLu6srhMWe",
  "key24": "5vsnzakeUN4XcnMM2XY249oca3oaXdx9Ukyh6Pp1b69uvFUopLBZv6wUQDGjd1jMfvT6YYBKKDP9ehZeppY5iwL4",
  "key25": "ULZk5Bndb1ahg878RWTa26kpmHzjg5Mr98Fhv6HqUjYQS3fdSuhBTcTfxQJcySoobduX3rHfdFi35oP8SriF3Hb",
  "key26": "5LWhbchuJsQgzDf8bQwW57Gc86SGLFtbynSDgg2mVSHpd9ghWKUqBSFoGqBgJtqyn7yryfRY7aBUFjJRVRWWZ4MC",
  "key27": "4LGTHJn86mq4g3T8FpyCbXaF7Ypa9uQHZoGaFBKA4GtJhirnjpQSzYYymupCkgqrAi1uaxuUpEFv8JWMKQnTFHM2",
  "key28": "4RCzxJaWQ1m2pa66gMK5YVDchLCErqkjLKKW1Wt1vUxXCduj1sryYB9iyP5MxBAjukxSAi9meoHYqKxg4PftiRUF",
  "key29": "4nC25YMoKCZqBzMBVGBU72tmvFaC5n5N2QvLnkazABM8JBrgvaFtBLNSveH91VpjgfxoDJss9Ee3eQhSbMnVumz1",
  "key30": "4QET4yWtmErbZdjFT44oDYxQULwyBHDL5ZgANHDxra8XWCnm6yCSdQyAA2iamyHeEYMyJS6oeYtaQncG7nBj62C4",
  "key31": "rxqYsFS24DVBcBj4vfQjVd3cYXkSaa6cVkd7SQMVzM4ExuWiGzKpQtUPkPApHgVj9bJ9YftG7tXwQzLnaoeUx53",
  "key32": "eFWvxqXf1EcCSbtHYVr5nMMAJthp53piXW7k1GSK7PKRyUf2ysKWqK6ZAgSdFxfDuq3BkYH4LAEkLuQ5VAaAqxW",
  "key33": "4RWFm47uMuAcvsZc89jm85KpL8PEno8BgknsUY4By9YmP1okRTgXkcrbknehqBS1cEYxhDPxgLR9JknM7aQ4N7i6",
  "key34": "5yZqSFdf5srzWW95m9zjjwBVSWU4wXPj9pwxn5T7uaYdGfm9TTUgCB5WmRNMV854TnQjo1Y44P9uMGy3FbLpuB4n",
  "key35": "3uE7XXEMBj8cJwYKb5HmAXzhAwFVdd6xG5G8skWBniX7tZA93YqUqrqd6jyUbhStoWMUrEehwEKqHb5TK9xtNLQ7",
  "key36": "4FcR6aTDcSstYhUNpgq7vG9jVPmPEFsuG2zpWhKrCXWrkvVNcYZShEkuhSN1VBd6TTGA7Kzc1Uyj4PPX8XS6QQux"
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
