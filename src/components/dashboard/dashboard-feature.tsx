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
    "36Fm8bJ1FyD2rqKRvaQKyYcRb8poMUsECHgdCa8rLCSLLrsFYQYeQXXtD1xm9ejwRCburCRECbbQzEHP7gnRV6Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mhvy6q5kaHHL9XRsZc8CrZRLWSwPDxhDkSPFzm6LRfqANx3iP2vnSXduKmKdKJpWEk5Hnqk7dw365spZHwT3PCp",
  "key1": "53HMDDkKjy4JecKBv3G6nAobDAms6UyWK5GQb6BedNM4n5wb7Gpf9GmjEZLaEegPEyDg5K7XCfcvSFZuHoxzpcdf",
  "key2": "5BQQSGtHKiGvcxfD8pCiJuVNnnqoZgTYPaqiDPWwEv4nyjAPwk7btDVJFSMBB8cZGigkMnha3zuY3X9BqWZe8Lip",
  "key3": "UWUiRaFmuLpXPpxv1uPp8HTT2Cbt4vCkzEpkcm5MLrvDC7fEiiJndu7UB6vs6n4W4NrLMtJqFboEK77dfYfXL6J",
  "key4": "2orDrdvZky8x3n34qggysMoTWqjzGoVm2ruPbbdNyLSABzQcVCdY3nsKvBH5XcnoSbVRgYUTyawgSf6J9oJMNZAy",
  "key5": "5NXXrK67wPJhAS7VD9RtR3xZK2ACvqMuyxW6GWtr9wVszha9TNaN79TX7Qkqqy8Y2LsGwYAXGCVuhTjqvGSGySUu",
  "key6": "57U97sHi7HePpZPSTuGx3E2uxr64cPf4ATwTHcLBkPnRpho8fJsdDdmDxnDtFLsRDEDSZy5LipPCSNrtXAJTytXR",
  "key7": "4ESpprV6gHRXJoz6XPvDFg5bjrELqT9gPbBjH4hguSHZ4o16xPbQEDxB9NKGZwNu6yTaKGZv4CTQSmkD1iDbdWXX",
  "key8": "48X1ZiL3dvdJAoFMzkHuFu8z4HdvAEjevJF3Zp8g9G6qu9bEygu6iwZNWTGDxf6yh6d1KwW13xmSgJhwFePEa3LZ",
  "key9": "Y72R7UsZGeihJHh4aKEt9JMHJ2u7kHhqr9TzDBtkZSxwmxESxsSsjWfTSDRDvxxNL49LRCiSSvsRnyL3ZNFKb3Q",
  "key10": "JSRcC5kyqTUsVn59RYpSqEKPiQZRioMn1n7FY6Uuh5DxtiBgj7yVNvMKvcEMmt7qWq2V4d3PPvkcNAv4De2nq6z",
  "key11": "2mj7FReUXNZTVqjkvDQfcy4ieEkb93rhz2cTuNNDZ3XMdr4JwKhbbPYAaH6scikeAqdCWguRhd4ZNjsYEHDG3SaN",
  "key12": "3ApWWJKzV2izq6JCmjmJZ1KHTH6G94xLLVUBStwGN5SSHFgwQrfiuEEMCKmR4VgeMQmRcaKYtkaC9eLcEv3Hcnow",
  "key13": "4ZuMYjCpkfFpT28Z3yjTheP3GK8a4tAK4mq57cSYHy8UGbdFsoXJWuzZMFDoZCDs5XcdHQUAnWoYQ5mfHQVch4Vs",
  "key14": "35waexmQwVR8pVSmd2QCGgTwefMtoCrsNMsChySeGUcmfLb47d4wfqJmGsxjc7Zyc4cLS11SGtzyfYc4Y5EuBe2R",
  "key15": "34oGxDTh6jFMEW5zLz2frQVLKZefKTcQJjC7bfthyKUYi5vQbN1URJERcHUv2tfMB73Y8621GXsM4y1Nh99ozMds",
  "key16": "2X6iU6pxRL8G23NQ6xBLUqsbPfJnysTC2XKXv26jbE9ksy1jHXY8P2Z2ex6ZDcZnjZ4UUyJKm54b6wizkXYWzzqg",
  "key17": "5hZTBDpPm6nZTyfq4X6RFknn85KrkCr8Lk2B1UeGJVstQw9ANqxn3HUf4FRC5y1mLBS3xdDP4oQDqBv7VR1wu5q8",
  "key18": "24sZ75Fdw3NvKA3mEz5VoTbjG2HEYXXXzSbUCaZGwTuJZ6sRd9j2CuPSr6WYTQmR7Gwm3ZzQErhhi95Kmavs8qwD",
  "key19": "3jYdg2YDLSLewQVFcxEts5LyUUL1aEsembSCHh17oHoUbSohjj1EznnEdaxUFB2D6xcMMQWS9Y9enQGdVPkkDCb6",
  "key20": "jauxgQh2pcwrrhwpeuF6KLYM2gY3uRTQJUdHzib1SnrP7AudFngJUNddYJTFYZa961CQgMuEqAq5oasr8G4kSYo",
  "key21": "3g1drGrvBPyLns1fAusatvZnxMXEfPpci8w4yGk6KkJCAsnQV82tSR6yVpBJ4SLQWwPZn2sevZze94dPr3Xwv6af",
  "key22": "2HabtVECDKMVz6SP6FDbwtXow6Hi7LP3F4QhKzgsjSNQFKbjHghfi11HXCYGfwbzJbF59yQYV6FohSxjNSULVFvz",
  "key23": "4amngzzZ8VbsDqWLZtC2qu4CbBNSBq1Xfw27dY4cdVRgwmzALxUQMEqDExsZbgvCtSQDH83yiYLLs99BVYcLmToo",
  "key24": "2XeEH4BA5zvDrWNAoHt8WsW1bovp38RyVC5MpN6pt18cSZcyAhsCZTs8VYHZfn4pdW6ZGG4son7MatcdncdDzxf7",
  "key25": "5MVfHELHrQ4zMtidpLkC6peXBKLHoMPZ87S2sqgzDJqBtAiv9omNCV2dppA81nhQg89JcBDd7YkUAZhM6WZLWrDw",
  "key26": "4cyiXygUbwgmybXKNFDCnpNN8f1Qf2BUTP4pL4GdCPcdGK4rVAhyk4oKyZoXiSEVMXZoXPKwjpAzCJFD1mJN4N1R",
  "key27": "XksxrffpU5dFBnic9ns3vJao9LSfMbGvBe812rGXmg4njakB86VePgMvHhJ4zqifEKQqg4diZhszEmoPtx9duPg",
  "key28": "MD5NL5TkZ79VshdaQquz2zgUrQdCSQNQaqqzdLWgxRiixHYgCsQ6aunBf2RZqgFo1TA8CRuNZeGHHtxhzS6JWz5",
  "key29": "4F3Nbprp2LvykXahm8zsn32goAPPbzoJjqMbiduhviXTJPDffH1AjZkhcUkmL9rD1cRX2MWqvC4iGGwuPM3RCMrN",
  "key30": "2g83DfFbGtK2QVB57yFDgwDsAniXuhkjmcwg4iwPhwEPXT9fmuXLy8whVufEkYhUsNA5AWLZf1zb3Cm2fjUzprS2",
  "key31": "2eVkFHkSL2h3iaCpDA6JeaZnB5kR1ugyqFbgBiyNYhqfVRZPj2paN4b2QmAbwjSmqMhpewERj6vMee4UqjM5yVEz",
  "key32": "2PrdnSmWAC3xePH692maPp5F1D7JwKHvK3eBkBph3fdqzBVbN6Ucepz6dzpt2uoQSKbL2qhPHKg9kCcQQWR4aQmn",
  "key33": "5tysFURw9kUxdXWxMKjePAdY2ehTy5bxoYsoY76dc2xp9uNgSZT9kECwo2qDJyEZNFwpz8qf5m5gE3UUf5eT1D2c",
  "key34": "4Q5rVfrc8pCKrntgKV4YdNXmuM7FGnHA22MXAq8BCPRNYsbiWMH3pgM7semewBP6BZiD1HKbQq1fHMCiU3cHVE4H",
  "key35": "47S7MxtbAjrdq6h6Liwgu76dmudftwXbmYn7F9LHXBqjXjrc2LPrutz3YRAsSTgtKxHhXwCSwfm6kXrjH8LucBbP",
  "key36": "4WVYSbQ7ZSKHMiVV7HBfpNLGA6Ex2PFdeAFG4YbDA2uZujdgUQaf4WGLPbLBpyjpVTNwjdXLSCX3G7FmtvxMbujR",
  "key37": "2UiqMMn5AHJGyq5wW2aTatX56NLXX9BbDcqbz7xfXr6bnMig4Z7PkQzN7ZvaXKceskqxt2zruvA49oZPiRjBELJg",
  "key38": "5PfUmXkgPpdscR4PaKr4NokXmMfy3JYnWzApMXeVsogQMjB6oHvSTepehEuCejgt74J4m43sNc7cSQJg9KSNZKry",
  "key39": "3Z7Uj3GEZPGBAHbAdyVaqjWsHTCDSuzpa4dBCwyGzpdkBsekHK8jtByuo63LDKv1p3VxTmFeoeF5ja12atKPj8oK",
  "key40": "2KA1van4gwmZZTvpChox5yUbQz5TYxUs3KrMuRpRtGpd47RKNhiXNaGa1LgtnTyG62EoejpgsjRiQFwFuS6jZSY6",
  "key41": "56emQMYuzei2x2fcvpheJefSbdbNwuJWq4y3Pjc5dJVy1iuxhmNrao4aKww1aXtmy7K3T3TQ5qAKrLf2aAmRzBrH",
  "key42": "2vz4xuhFC2JpfEAvMu9pNF18qKP7pHqARkg6btRcxChKRLxq5EZcdan8gwPHyL1MyqjT4gaB3XBugosYUCNGVpsA",
  "key43": "4YU71Bd3T3Ez9m8AuxogWts4CFuUyGomQiMpXVNSYpGohUsHsh7sGPvh4aCRywMzPZKAQLzVsrQ8ddKYY4QanZmA",
  "key44": "4cFUbE6TvGARPsoXQUxmBHbyc5oJnmcXQwuez1RjaoqmVzgXsPwN82hQ6ivghmTpS1nbqMTFnM1wTKY2adWaCoxv",
  "key45": "3J7bTsdiKBrvtud3FBhz1ncEcQFGp3J5tHojRAzfp9oTbG1cdaEHZxRAg7CzfVP8DQ5JhsBRMGuZ5w94Eg5jDD9u",
  "key46": "2ahXEP4cKj7XB6Ljp4jykQG3GJbWud2DXeEzznjYr6srqgxft5peeXqz3H7sFmDMf5zBYEaQbQH7eXyW8ffi8wSa",
  "key47": "VDkp38ugv8Kg6K7AmMimJTYGNkK3TkuXwv9HnuHFSzVaRs8VBBywJne7qcotoTB43yB9cWM2ttgVCi6x4wqZZFu",
  "key48": "5kNszrby4eScUKgzzJ7rhZErVwmQXRo1K7rzH9pfz5DFrfNTtV4uGv8nQjzUjgEWjqc6VNvhAtuUzK2rKTGqVudc"
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
