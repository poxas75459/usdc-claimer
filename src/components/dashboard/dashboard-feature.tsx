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
    "5SPGGKNJemfPbMnQWYXJtUu2pWQzJGoe38pw12vu8GquCQpvW7BeXAvEJy1cKqS72VqJj4qVNUfW3fyscDsVoKzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QAiVPAajb24aZsqFrUGYm3RBDiVyhkgy2U9eHZJ8QaKtLyNAG3cTmsQwqRsAoS7Fyzjp6F6kDM37GD51qsAjxqH",
  "key1": "2rRZtQGrJZyYta8F8geVqhz59opCT7R1DDtQdfn7d9tfTYBU9uHaum12B437fs2JzVczgL1T4XAHEC46WMvYLroK",
  "key2": "2orRhBNk43eStcavASZAB6p64rX6YSuMz7zZWvEybGPko9JY4GmLcjdrmtBWwkhFA1TtLu3W1WwEcFv1z71LLLuY",
  "key3": "423YX7K7q1TBg1HPKbgtXe7cedkR3Tf4DYRhcFVw7Hh1hxWhrGCT7gcDewoABvy2BrGk95NXCohYVhf7KiBz4QMF",
  "key4": "3GBCbFhM8QLhhokvGFPXzPBDFrBTvLZFft1WBns8K8ZsUzNAajBbpW7t3aqVd7SVJaWk5ZsyHw5LrLr5E7XZTcXj",
  "key5": "2ZBwcHF3wAvNPJvwDcizxoj5pJswMJRA4zmfFNbRx3A3NYCa5FUrcJftMFXu9J8rBGWA4qHMAoSkW7ouZGvLeady",
  "key6": "2KKDhKamGuk4MrcRrWcFHH9rK5v61R2M5QZSqfM6a3CfP7c5veH5obgDyqqfK8WJqnyfwG3jvAf3LMLx1QxRZiQ3",
  "key7": "348F1NpLAzNs74r9xW1e9FTgA6WzAvT7iUeYku1ZLBKpxHXYBuWpPmMgbgMMEoxL7RVZoYYvNUV5QNKCmLjTQjoJ",
  "key8": "4Bkv2ZZrw8yAWLPP9195a9rQzWt28gpwQjteGiAPH3iRVJf1WDZAK7kN2cyHb18f61436PNk7tpNWMyAhESFB6XZ",
  "key9": "3o7SCkakZtn1rp6E2NcYgV1tUVXtZHi1yH3wRMyXdW69homd7vswZF9NEn9SbVWakpA586iNprZJRyat46f2nWgc",
  "key10": "3oXBzuFcGyrYVESWZfwLs17vWWdmzygtN5mNGhtsn53EBKm3E6hwRfvqfZS6poPMGB27WwdSFcwdvS8mfWPWC2xe",
  "key11": "6bYM4S3UAKm8bAGndtm3tAWAtKXZnr8inym8PBtvpeNahnj4aiZjgDJShwwocMvkusEQwcy29KexX36xYVMxNrW",
  "key12": "2wbwf2XRGTXNvh3YziNS3so3Nt5siPAiA1C4ocbB7GFkaSceF5WuhnsTg4yTb4HPq77JtpLD4N9YnP7q6F4PVyHX",
  "key13": "47gYzfvopqto1mdLbRfUWG8iWTU6i12n51CDLEnnCCWuJPuPWnzu1EqE4BQeAyvzoWJnTJJCZmnh1YeV5MBz12we",
  "key14": "5pNXAqhXEvgUY9uEaey5UEkzaYeo1C6Y1CeM7w1DPK6QVgzKwJ73TNgbtAScBaD4HZJHYGK5xmD9rSSZP3hkBdZf",
  "key15": "57SVtEbY6NondbTU44Lf5dhdAFsvW9asdRBBmTsefPEF2AmggjhqhyiiJqtz4oHcMi8TAjUw99m8A9mvS6PEw9Cw",
  "key16": "4s1x5mKzJJwqBnWbLDgq2evvgZoDrFwDJ2Uhurx1R1SEv4A5AqVMBXAY25MFaqUUcTKpXCteTAjr2p2nD9VD8UyU",
  "key17": "44gNeufbApGW26B5qBYmtGc7TGEAzhcLADh3429nQopGWP1pdpFCw9i75yry3WRuTVuGFzZwEyouXJsJYf2LgRy1",
  "key18": "41XRdgbMPKqKZV32cFLrCQLfK4r7qwGwzgk82vfnwxELxRRquycxP5hb194qL28ok6fEq9zSroFSNeD5971oXxCr",
  "key19": "MTcgTGFt6bnacfxNDSUaSTTSUHiHBsD3kHGYeaAXhNHKWGxbKsX2fJxjf2EvC62V6NQPPa4GFdwSfjezem75VCk",
  "key20": "4EnsmjjdpfCyfVxoZPaG8P9xggxsfw69vKzHuZy6mCrr3hbHqftMkZcWWCiJyoK28Tens9HGmavQA1SUozVzqD9D",
  "key21": "4Lcjbzmxvwi3AgFHHwEDS5x6yqEzMcSsR6UsmswoVQHF1adUUfiHF7Heai1gsydmgPpMjimngQWrhbzwDvH8C1sh",
  "key22": "2pg4MoYW3NxdiwHAq7rAFS3QtoGx8hrJ3TtywQZCkUj82n5LJq4Vg1i8sUWyWZMMukq8xMXH6yns12LBhWJ4QtVX",
  "key23": "KuC43qdjozECNBJRGACid61c7W7uidDK6eJSY8QnPT4z3WXQoJwNB3wPkpMqJK6bZP8bmYRp6fVgwnvqWMbqXQT",
  "key24": "2FcmLBQhzP3d13dsne2DsJMan5XQzEuQJjAcZ1XHFE3R5oqtVqpGcNAN9b823UhzE3nz8LHkvoXEWWXqF3VaGn87",
  "key25": "RjFxv3xHcHxcK7HSPRzme9kRmnWmNhCtUotRaPRtWTEdZ8E8VJLV9CeFHaEiAEFnPm3oWJSKxM7PXwwnhabKXU2",
  "key26": "5UWKdnePhui1tFBbUL3dHhK9dqch34Yjkmi9JbuNWJPp2tNa5pWR8VwyxU4fgtiicHYA152WKpdoST5K5rHTPqSb",
  "key27": "4aGvJ6k4aceCQnspncaPWW2rXJ4aYFMuwo6kLdrFNGou14kysZyNAbyLYUKSBXEygAoDFXJ6PFSjksrjny5eyUUz",
  "key28": "5psd8ocysBMBij7AXUwM8vAzZFrgQA1J9VUGx3Se934P9WtFqARKLopMFP9VPMPPfBG2KszZ1JUuAv5PxnarrHn8",
  "key29": "4p7pme2oWnj25XUakg2Mh1FsmRX6yCCA721FQvns1om2joAopsSTGLJKWXFj9rG4vQeBekMLLokdM3bUoC1kYUFA",
  "key30": "5fKz51f4QPzoYwk1soEcpuwMxw9hAcbygUwydzheCewt5RHcQSHgdtkEAwjsiXrpXBpVuXyqMbe31rPphmUgDNAN",
  "key31": "evfJxJFhCoRRd5yS1uVxAaQBtYYXC3BrRqwkPLQY2L6aoctVLg1e9ddV6mk4X9XGwE7RPRiLPZb2Kn3VPQHgAjG",
  "key32": "6jJc3jyCGmsvDUs82BKPHaaMbYrCRLKnpFV2CRQ4aSwUkCgjmwaQPpvPt4rJZNjGXgaKzRKTPdbacfTXtwYoPKa",
  "key33": "2F8mPLxVZ5BKg9xRrbRmva1KV5rv5EeLku39oPtDZ4amFd3GPQCdggFscSr6oXQQdhENYuV3gKJ7XZjZCGrr2TTi",
  "key34": "4knpwbMM9sLmj1q5xYjn33UDMQLVSVY3z5JvyRKyyKrTbPyKmkrkcAcrPHaXDjhPg3oPaNKhFHPzYWKYwiUHduGk",
  "key35": "nYT2GcRNR85eRCZnceHVT6PaoHgeBsryM6nNRrdoZyVLSs49RTgVLUsicPybe1Rvrifup5APKHMPkaxv7aKRbdc",
  "key36": "5dd3NbnY4Nm5yT1N44shkgTsBAM6JSpSEH5iR5FvEgZ87ZFAM5BQdpx3rvGzPXow2M2sGUJXWvm28uFdaYFqL1EJ",
  "key37": "4NkoEzrPpkBqbu99FkND7EpFaw3erQ5iVjXQ8j6qN62HoRf7R3m2ZGeTsPpSmJVBsAvoHYGfbKcgtjh2BQBp9Hjb"
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
