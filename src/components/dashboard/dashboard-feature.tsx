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
    "2i6Sa3hkEqL9K5vhukGfZNEpvgAk9B4vjAT45RACSk8gF1et1rRs38y3GaNvnxChvSp3FBgizBviauajZAjtLfSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4db5HSNeCG55sSasHeKdy2N7qKeSfMjYKL3E6e1CvUByiSTJKEYMfPwt5dGE1TzUA7eVLT67habEqGQDvnccwWiu",
  "key1": "22S6LAjuADR6dsgM7TQg7sP7AntyUPK2nmJtAMjcL6Wg7ybXUet89zspUFNsKme7xEvcJufFSZq3h2cXUxXQzQmY",
  "key2": "2iMnuR9oTg6XTXeD2Ee7MvTTJu1Bj2TcrzvmnHz76He2e7DsJhQTgAY7bfXX8TLgwtwNvQPW4eqoEm9631shVLdz",
  "key3": "2wSCxrzU8Ye8B54vZGxbAafVRaYpfD2poYoUbtyS9Hw5eQkppzDYzSE859rg5f3MdRAtr5jMzpY5Yy2Hw7nMH6CH",
  "key4": "8HBH6i4AdhqMDc5ZDquybCer3wUhxevYDaEfNCrLLoiVNY6k1Mh32mdnXqn3fVN9rBam9u8ydUTdZSnKCwjFYsF",
  "key5": "3mPezh5XiR2BV8XyySp6jPz6i23QdojAWW4TfowMDD9LkMKrB4gPSrHPphGcPdFfWQ4HzR8WHGcG5Uo9rfjo1nFv",
  "key6": "Nj4rpTHhW2xRWHfS5Zg3oK5kqsWd5uy89FuLDMsdeviArjbJQWbr2M5k9HLGznViu5HojSeHZHDpp6XFzDKU6L9",
  "key7": "5fEWhBDPtKcH32QuH3JBuTvTQD1zpPScQfvnefaSXfsysnBDf9wsvjC7cgzDotGGu3771hzywNX1b7EBp4NedrwJ",
  "key8": "5ujeGjTVugJwGjvX6ZqySNUwDSbwVGJD1cg55oWoxrNQ9KfB9CQSdyqxNC4ztzFanJQwzwzRMVeZP5fB2t58ZBVt",
  "key9": "49RX4aJHoHR5qKYGKvziuVob6oV99MnQvSJ3c2yuMSay7BNwFm4y9jFYfvoY74CpfTncHr26ttV2qeGuVMb3oBaz",
  "key10": "3MZs4MibDHPAFFEQ8gnFvG7NAFjJh6BRieFXAw4ycTZ8aM4GMbTXWUcxfwJBq6kr6r2p46u5YziLyVCpXEGcmJp3",
  "key11": "48oNHFWuPzTFtCLeHkMDPfijvkMTGxdUvixqPdKy2mv9UBhQoEjzKGowUYf8VrLptQNz3yecn9KUuQrjDsjUgZuZ",
  "key12": "3AJJwGVyowzwQmnNFhANaLyVwH7ajsnSjwJdSz9ZC1CeXdiGLyiR4Pq4o1KfpMDzWg3ZX1tt3SmvMZkcrvyjEwVy",
  "key13": "eEvsTfNheyPEitXYXrFXjgKKRQVvFikTfQhsEpFWYTtE16p8R76pTfhxkSWEfAXAdUhCCpoV82R1LZu53krqJ6q",
  "key14": "4MmcbD46ozvfjdLy4nTcuTav2VLPoigaC1uCMxvNM5SrGStVSjySmMrRa3q1xbpZtAS6RaeX7WPTtNs6otJYKnCw",
  "key15": "4PytCpiRUWQZDWtV3WJXjyx7qK8N7APFeG8HKdK6HLribRz6nUkhVmvwovCMSxn1H2eyohEGoAime7pLH838LVUy",
  "key16": "nWHWkcB9vv1RMncCD2WCvkLWuD4KbssjMhiHbXrYvi4iiiXwUPTe58LvmDjtRt12R3UhpWfHbL34jGvjHs6dJNN",
  "key17": "4wpoVnww4kEVf5rpkc1xYMHThuathYmSR59MpziXUXVR4pVujohw9SCAKYH9tLmZGvqGtTUYcfzfsv4yw99f3QNT",
  "key18": "3mp39pSpejvj84d2hdp1coBgzKHpGS5HhywdXpVny7HwP2DJAWkcn6U9E43v5SQWCVxuvWcqVTmWN1yUHJkWhHFt",
  "key19": "hmtYxMzeyVusRc9PZYuoCaJCFA8DdQEiV4272hTZwWxsk4od75yHjKiCknR9tUL9Djo9DKNcGNXDFHJPwbKahAH",
  "key20": "5hF8d76pYVHV9zwaVhozdbpJxcjocj26asfFeE97SFCGe2g7Y9LvgbFLoSZGTxGyLK96ULkz4pCURRyD9Tz4NW94",
  "key21": "5NjKXAf1SynRDukjhUo7Z1xrfGazb9HLD5Qhv4UftAcNjnpERuumW1PoSfVPxj9XLAvfHqJxQtEpmcTfPVTBLAVY",
  "key22": "2eX1LcZhCfEYCD2dC4KTcRPnXPDvTNAfezxP9s6NGCDBRR5oJuu3N75WgDVhuj9XzUWYjvc6h9nFRrLqMo42eGTp",
  "key23": "5JNWoAHE6edZPZDMQQsebdGMXdnBHj47J47YykzTMdmQtnVhha9dDkvVdXy83awqhpcFoyFNiKXLsuxezZHcduXo",
  "key24": "TUiiDT6Hh2Z9FJoPVavseb6M7PxPa7sgHEg2BXYezR4JWKp17bRCWtLaRCtYbBFNzRJ3QUdwRrXbRwf9kUJhTWf",
  "key25": "Cgva92pexqkapeHvHjxoJsLUvu2zPHyzbcy4gcudL6VTct2HDVrcKzQEYSxHqx2ho7xyFNcgFjTJTgGNYGhsxgn",
  "key26": "3KEfgogS9dgP9HN2FgtAZde3VEjuwWzwNf7Ed6PLCW3ZtwzMYobyy3NYWJ6qVgGXLtRDQJQ7jz4pyXxsc4pNXEiM"
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
