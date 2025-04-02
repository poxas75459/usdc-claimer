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
    "2ZttPC8HLbhbA3ajcx1zsAf57oobACsz9XHMgwUVjYrB32uHZwkd8rJFE1CiC4Mvo5K2TmP1yW2jeFxWywDZiGx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYu7qCTiKyq8yAGDSW1NkC3ytNpqib53pmUdFU7z9gzLBpq2B4odxWwiRmwPNLR3kTcxoGYnpk2hP3BzvPaARFc",
  "key1": "4Qh14NqX38MniXHvyw3VCpdRoTN3FsDLTRxA6ARqxj7HZRUTaDgpQa6xCfbdYLfXqeKzrEHm556BEhrfQSbbj346",
  "key2": "3HG9WN4Zgz8s1aViqs7W7zR5Xckwp3koHoTTHbiz1pk184f6h6gY9vBrnyGuYouiG1doJWf7qwquiZ8i4EcX3oB5",
  "key3": "XXw5gDEWQCvvtM4d9zY3qLH7YGHQ7hXXjY6an64dMB1Ezmhf8Uu7zni5BzugxQJ9V25iDr5aNAhgMj5iLEqBiLk",
  "key4": "DPg47JsCKZkm2DorQNLR3MtZaiMGVqVvYvMvoZyaJFqhtU5eSa2Te1Xiu28NU3iL9uCBh6A9jWDWyk9bMDgW7E2",
  "key5": "YqiLfvffYMENSpjfDmZo6bUnLSAbL9ntMHR4YbX7o4nkLVJAwbWstHk11BUgeLKEBuz5axiSkXNY6VgzR3UQcMr",
  "key6": "5Z7Z49BPjh95HuHuAyYgiSBtjcKWixv3EL1ThGT4Bktgo62Mh5ZpCiRUuiyrdX6dBqhNtrixLPq3yaZEZ6UEdXQX",
  "key7": "BvyMV4zsLmaYgEjdiNBh7SSerg4p6LwGErpBPQpgaq3djmMZQj7P8F7dsubYbpBNs8oApBQM9qGNJGq9ffoHhw4",
  "key8": "3XJ4DaSp3yJnJBeJCp5Qi9F4yLJqbFAnN9XmjFHhBXd4CYxXtx4Ejy9Hkh4RhBRwJUeAFXm1sQEkTuLxhSWqfZk6",
  "key9": "4W2DjjhGsc6NQ7nbyK9dis4x9aPnT83hMsA9RCgxFMoVXa21KamqT67LyYAaDtu9ks2RajQWw8nrGYHZERFbM4VP",
  "key10": "3emu759WJfxbaK3U1zc6w7i1aRwJtx2wczih8oLowW1CtStYfMp9MQ2NdFVdTMVK1xfKx1WTDXtiHDEJso2kbKfk",
  "key11": "4FyY7FrdG8gzxQANh8medSdFXbUUrBsohcdHi9cQcJH1craNnjZv8FxSdPsgpPVvCM5ApLst68Ek3Re9sfZJMpJQ",
  "key12": "2ZxwT1TyxSdN21ZEqBBqAcffvqJUdTJ4vHAZf8rD4xiPJ44mDG7jb2VvPQLFn7T2FQKTqNaMEpLUQLDAnS68YPZg",
  "key13": "5quPxRWhhjqVTq35akYMcuZuJtvYhWaTVz3cunsTmC3KWqiGuK52BS34v4JL5cExMKyrSPYLARAfNBZ94FUrxWPf",
  "key14": "311k6BbGhJmFYSYvNr5Z1Pen86vT7bmxJE9BZiRQoy4gzc9Mf9HwS93WA5kqJw5Wq59gmZkGqm4ZCGmFbmEvQwGU",
  "key15": "PcqS2Th1BnFwLzg4JhgeGBt8EZS51xao1Wj4Rr18tm9Z5HmLacr4fr1xwqxjDT9FfdFWvX6F3wyxQPaWU9niNfP",
  "key16": "ABfQM3mJbPWmiXuPsPZwCx1fSVWB3SJMFMgGs4KUDpgQE7fqA131rnsUPSxR1xLZEUCnop26wHuRqSFYZvqReXP",
  "key17": "4v7bibHwFH9hCk7Ep6V44jGNKYWpv2rEgkbax9btNM9E5CwMGF1JVeGHaTFpsyWQWzEfo5W7Y2nGaHU7M1hcWuxJ",
  "key18": "598wTfSR2YcLxCUvZzoTqR7EgSoXiKRaSTg7YnumdobD2mBMw9HiVNx9AazaArSS8cMVju8TykMidMXsD6MNi8KL",
  "key19": "2uByar9GyrmNFzVqNhcJZnsu27EBo23FxFbgL754FC6U7Bm2nij4VPFbMR3t4FCpWaLeGqGd7hngZgK53aXdNL3S",
  "key20": "5MVEBmG6nm25Rhn2rwjwsvQgnX8JGgZv115WMXRqfzkVdGXCRqabDECyNJM1kiQ629G8ZAUSiD6mVyia8XFH4qvS",
  "key21": "4arDvTSJarqYtuQoJpHKw32RfYUAHfsP53nQsFEf5THhpEDxxUKJ4NNWRb4tygRjjSF3U2iyArpkJmBegXnFpVxh",
  "key22": "4G1UYN7JZd61SYxabMFKf9Yq9W1VHyjY7tdaKNf33x9jpo7huMgXcYTUFARsfRHZas7948kMtdh54akLfa2xNPVg",
  "key23": "3i1wVKiWohApwF85Jk5irEXaKmXEkTELpZAk2pWV466RijJk9aZSAf6xm536M1MtaiuDezkwv7QQj9G2BkpKq345",
  "key24": "3EFg7PiyvYHifdaqdEhA1F2Q1vtLpxPcWxqk7W2v2cyfU9dQ1R9TpN2En3QQrPmFYcib3gYNpCT7vQBy91Cw2aCx",
  "key25": "2DYwWm87WYDH5pEeBzWz7RwHuUhtwrdbht3BA4kvXLGze46Zq2Tidickq5a8mVJ5xeuBBuGsoPbvVCHHPy9TE2Mg",
  "key26": "3XfqoT6rok4XCqBmTsyAVn3C9peTtEwANTWq21w1GpeywbFy8E9RmQ1XQaynuCVJdVNR35LXeS8DgGKdSJxob2J1",
  "key27": "5RLCGRjmGErfJYGfrjVosXFm4tdMrtaMZfuYdYkJ2vvKaHxhNqjfwxRANo16i3aPrmmSAg5BpLF1C8u4JNLgMUZN",
  "key28": "2WG7V8urq4W9wsw9hx3WsmrgkymBdHEKNakmNRhqhiZMkxMXnYsYRvKrASbcXwTjREG5yRG2N1SQkWL8M4W7NW3A",
  "key29": "4RePv2P8YC8wEiZDNJUNEMfYzqKWAkpsew6FLsbcwsWdvM2gdhLrsdHb8b5ih2eK45ZTUfunAKz6db5rq3P9YoBM",
  "key30": "e6qZc9qGYdkeVTtxhVKzGhiR7DhG4WXD4RKAfyL9dchb8okxFvGJQ6fKCYw3Wqd9HMjZCgK7jaNJ23v7Qu4BJTm",
  "key31": "opVokeQxJASuUYE6uNGNSuEEAhQ3oJfkGYLB9qJp1dGYttYrfmqaMaRahjKr1txmXLKbT1dpY4BSGfCP4htMzyo",
  "key32": "3foArZ1xcsvQdNG1TqgWRLsihpRQTyfPnyp1F7zUB35QJ6zP5FKLHRCZn6pBebhP7nRFGcYVh5zPwFheBXkf7NNc",
  "key33": "JQe8A1Jd61nfQzRVefUGvcP9d22YksrhqGyeYheh3vmRgTWT68wz9G7STTaomLTNPcs3iuSsdfPyGT2wrXfc9nS",
  "key34": "4wJh78RrrkbY2sv7WqAohtRxCBaxabQnrs8Vbw1s6Czkz6QpYesVP7CDQDJ1VvSMtapN2vkM5m4Cu7y7r8FN6Ez3",
  "key35": "3Aki16Pu769ixJ7zbJ46WKpP5X9mBf4pcwHF87ZoJefGLJ6yVmAvpKarB7DSTv5PAdDvCoeic5stgg37323BxXw2",
  "key36": "3wNM3nkcPCr1QVT1uDM77fDkeXRCUJbzB5n1JVyPwSZZPiaJ89NqnBG3UaWuvUoPYNjGoJRT5M5raQy3PsHnz3bh",
  "key37": "2bynyUnn9qsERPy39Q7jLRcC4tubQekFgGVgq2vdzPMQpFory1tgw47MgVbAKF5Z2vNAbuk8mZtnoSRhEa9zk5Ss",
  "key38": "577frE7CELgXLfhpXGFQFM6MJeXmvWtEMVm2kx6jhRMQTmP6kzxPaSGYHuVp5xmkmYzRiVVEge9ddd3Vmf8HYGFZ"
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
