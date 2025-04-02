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
    "2a3CKae8c5KVxDnJrrn6hZrKYsc9onPwv8wvgZHJu9GAWnbieL6vkHgLV3nmwc2qsNrZWhr35jfowHDm1gtpzDyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXNixo9RmWF5KXi2w7nEcHLcZMUzPdk9p9e45tXZ6YjYFJjX8ykV1nVQT9GJUiviN1PsfHf2zi8auJQ1cL5PnV1",
  "key1": "5mb7ArXHkMWGdwNUMSHMh1ozBMij3hRKA9URkhY4rjyeTfYWzsyTymkANo259S4wMWvHcHfEePaVjRpFjP7WrLKD",
  "key2": "3c9z1LLqgxU8Berv4C1GP3PM36gtp8znWZZ15wmiUvZADLg9NB6eMD3eb9VtiubzCkqsoMfSAWSpLevDeegakpkQ",
  "key3": "3zp6K5fqT59R2USZSaLD1fcN6nD8cu7HcBqxYRZ6smKoFpuaF3pw7QsYyJtVQXZx2U4Zq4yQ6wnSgWXHUSidgLDz",
  "key4": "2jaxJaCmYx2gjZg4AEB16vXqkUADGuF6cWbeu7EeoSN1n2VBSCPXpXEBjGJ9mT2BbkCtpRN927zv7apmh5tfED6y",
  "key5": "2qcCSPVBd2VQabVeZcA7o1PNEi6uMLhnT7wSEf8VciCdtcTd8mESiXyaM3zxrZea5sVYyCTUKVrdu1mYZgPmGuay",
  "key6": "gszHVw9BmBC1bhQejYyrMzZCNDCz98NYGEhH1JSRixBJS6a3GKvgXS4Y9WDcUPxwd1anAJbxHWCLgacQCKX3TFa",
  "key7": "2SzUwQxzNgWNmwEjRww33sWdWPREWT3zeVpb6doyLwTRTogS5SEF4bjiSk46hNFDsigr3yN5FUwGYcmSQUi7NyfB",
  "key8": "2gmMkNJ8a96ykeoyRXYXfQ7vmadjDhBS5FSaJdfudp3mfY9Jv5GbJYGzNk4pzP3NQVp49ZBDcEx442s7J1MZXLGj",
  "key9": "2JoMpZUZWDt3MKueydGtQLzxZBj9ugnYB3xoVBYkapZpzUG2bBEE5JhjKBifjRTPEFpFmrud33YbzNZjcv1PE1DM",
  "key10": "34zBrfRxSDkCBW7zmdkhE7nQmsTzmYsYnutNhFoEAVo44bkTRvMvhqDH5QBYA68Jp4sZTgM3qUoQ6Q8YcoJe196h",
  "key11": "2ksxVE7NYUB5TmPSi6grJ5uvYm1KBG1SAvyLgXjE3qTy76Fg4LVMSwqxAeA2rxXf2tPKVr2S5VVTFii3Qj3qKL9P",
  "key12": "4F4JKYPXN52g2FHi3bvmbnojCqpJhTQMCe1iZoBaXpAKDvxFF1rUwdNFnzUCddHF5o9HH9TyRhQpXe5uU8D8y9ce",
  "key13": "5vp1tCCmSkiVLxFWHPD2zy3V1A7xT3rmgUasHaKTZXxRpne29cEct7yJwT9ysQyrqDgZEERDF6hDwrDGGd7VR5US",
  "key14": "5NsU3BtzyCPkDL6LqGYFdh5mfYdsasybf2Vr8yAczzg2ipgtZpBPMEtD2QfL1LLhFFd6mAmENKTzMdEoWVpxHHbE",
  "key15": "b5YZjjgrNCxKzLFu8d5KqUe1WKBVRJewhWMrqKYQvu7WzBG8nrdnQYyf55UTtXqwKPsdgAbJMwf6K4V8KxFqWD7",
  "key16": "n8dRfwYpfFWSoGKGRNfpuDit2yNhvkJFQDYFyvtXV3PFhKSLWxfEqVezvtVLUweXrWYmy9fTXXgRjuJYhV9Etco",
  "key17": "2YpyKMGR2Umbx5gRTfXZqpDxFkZQRhNz8sJkPzc5aRM7Xcv69oSXP9dqXWciw2AyjzgcdUokLFAghhQ9UCzqraY6",
  "key18": "5mY5h3Yasjfsr4eGV8AUdGMLw4wsKMXmsnxhCv5R1eRbzdhzb3ijpjZ2KE2PZAae5QRjCjLc4fURLqqRcedLXr4x",
  "key19": "3EjywforSwEd8JANWqmWJYDnz7t3keuh5LKHUmcgEi1KTDAWNJ6EHLtgTYT6cta1y9HyyTaKXpRzt6urWSrj6Tc3",
  "key20": "2UGktXz9xCxRgT3F3CGrtzG73nXGGKkQQLUJShsF6boCHzQ4UKgasGVAVTCNT2DTbmszj9h2Jkkuf2vy8bepWGYV",
  "key21": "5LJR5uutH46YrRpVc9GCMsGAQrjhfd3aCr1UBRNfYNz8NH4Lq25YMsgaReJNJavVSwHchFt2nhCa1KYKZLTFKJTr",
  "key22": "4EDSxp2vpahg9sLQh8qSnGGLeuB3VGTgic8JQcFUNrPwcuGN2RZTeZVsx6DVAG8oiiDWQAua8QwDQopXuBiaCaeg",
  "key23": "3FShcq7AQS4XHjYT9MqM2oc8GgShbw8QqvExGgU7o9m33dttf6QkZNbsRRGnZe12TxNBMtmJvUxKMhmYfi69N2Wt",
  "key24": "2wuhGRE2iEcLEDrEV54frubjwFMTaZ53Ftq5tEBXKJ4Vwtj8jVSEdb2MCb5SVp7LiRNfAxV4Jgs8sy9zxxfxoAhB",
  "key25": "kznooFTg4eFU8wUGCNLsKD67s39P9u2wrz4jaK65sA1cvsj7QaGPZiSEyFXaD4jeKbup7ySrrhPLvihxXFNLuKg",
  "key26": "2ctgKW5R71NZfxFVkvuUZYrE4M4yjs77PausJBusyhY99p1yWs55XN7GLfHUeNXaNiRmHnsjLvUu2nCDJgKTnkah",
  "key27": "14jw5NvdE541g8zreHwf9nFobyEjbtUFQzNynYTx3F7zk5od55aYzWUzNYZX7fkVvtoKDwKdv8Xon63HU1wBbLZ",
  "key28": "2LLB3jrEfpPkovtxJJLN3c5mbS2G4BzyCCFuqiLovC6WApzfxQxDGWyZ2q7Fr2KvsqaqetAFXwUfSGDCvJhGVLKM",
  "key29": "61iq95eYFha37EgMZa1J25Cknmgx1aZepFVBsMKRuFoUZsVt8XbwYLUrnH2CfyKSDMuDbccZbvzJNVqMqejjzSCy",
  "key30": "3KK9hsRpcvdq9cdB51YguZF7C8xTfhjRvoejJyLcHV31tH11r6Uj7qd65w8PMMSbLJLf6zPud5o7ATjGaxSYY25A",
  "key31": "3Xosj2sg8Hrqirdb3vLhyXkA1JQNXXq3K9k4PssfnuGm7aYPyAdfxSHtb3W4mScWD41JHSzvVAuv2JsoAvusKCm7",
  "key32": "44LTSg8f3YPeMGhC8L65qLzRrmLv9JZDTBsYVr1X34zS4nXvxQTZzhKEgAtumTuwycnxfz7gocdnPKLQ5qL8oizJ",
  "key33": "2VoGZ2LEJeZBtjL8bwencZsWmxPpxJ4CEoxS63uSha61tm1BGi2oTrjT2WBJQFM5vwuQTukKYnpjgL5V6Rfh4M1f",
  "key34": "4A2WGUw69mHi9QMdCdNXhEfkqEQJ1pcAD2GCLPcERKboG1aCayKcGtNtYvyBYtTXJupVrUkPkKGVCYFby6R2iHdw"
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
