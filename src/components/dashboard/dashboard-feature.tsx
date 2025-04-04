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
    "4x3y1V7fUZGUTNULCfff2J9qSyLHe3nxzCTd76TzG2fyycG5ZbGXw8Cq6Sx9J3QTDGbeEJAdLBJT1tC9CpNHspSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyF68LZ7jhBxZx6ZfCw5bXDB2EKFsAkwiErHeBJK8oTuxtqhG5KSV8amj1Z2bvFUxuREYN8rrhjSk3gXkkcWFNg",
  "key1": "4nwP6EWvbhbBMx1npkQfoCHi7fUPz8jq79zipXZULDeNiRFkES2MqMf99GhfPAXFBvoo4rF4r8zY1ntx2D4CHiwj",
  "key2": "4Bb2sBiui55azmFxxYWHMq3ggAxh25sD6TJyNPRNXrZhuNtXcHJLJvTenosxjqJAzgcqjAkpH4z4zMY21rnkK9Hb",
  "key3": "5o3feQH25PXR841VbbNnnrjdCjFt7Mpumbngkgp7h64c6VTWHixY184upzx2a1C3kL7Eu4yGn62R4o3cyGvBw91y",
  "key4": "3MGXGb8DBj1Y5yuffuA9weTb3QAPVzNfRq9SW6wp7YF3JpiqxeZPAp4SjjhHQTnKEVUpydmYuPkpgJCn3qqjjjzw",
  "key5": "3ashFCbQu3kVHt9L3gSNZT32PTioNLXBCseFY9Ubo1m4NARELcKXS6G9Sha5MpRNQp3gMTMaiZvvqyhtRx9opLuZ",
  "key6": "49yKJmz45kMwBV66V56RpDh243WY4Mg785gYtdTkYmZr15DnQbozLC5rKCYwZ6P1ew6AQcfjkCSVAG4k3cGLcmHN",
  "key7": "2hCkdDwKhjgLvaMxuzYh8hUd9A8QkEwPYkEGAHPdw4RNyGKFWzFq25Bu2yxxdtKdCoFLez3bXXP7bvQuR68TvjP9",
  "key8": "3sg72qhvae2uBYrBvoGc8V1CVaSf4c3QjfEzpjiBxkat9gn9ijaCM7rxTHy5iDuoz2JfKC9eCjiERFFqVmGSnK7S",
  "key9": "3T991Be5a56unoM7JnUMwJUGRtra4VyiFqyXCJCPYdd6jJFjT86heHeCP9UGy5k9qvqczTk2GgFseoQFUA7SoGJA",
  "key10": "2v7mCn2jAVwjYvLNByt4T16UgyN1NotaiwpE3y8GyU2VQai7ugkJkivmZLm8LxZNMaRvPDxkKjLhYZUdBzoYDVJt",
  "key11": "4xfUVYbCHrERQFxRg6k3uvRNfSWYSrxW7e3K25Yd52CN3pdWUACG9WaEsTg95M6JgdChcJ6YDtwJ6iLDtD9QxiDB",
  "key12": "2Uu7cjGJPc5YSM26LkpLqw13YXPiTFRKboDPRENgYAH6vCDENZhtarE9Xehh2DSyRS3a43C75Q6z7295pvGFih4T",
  "key13": "3ZdGRWF9GEfeFMUiTPEjepE293K44AJhfEyTQDAUhfqjx4y74udvDzPvdfChSmLjugMsUkD7T3pDYKVvDNBSKif3",
  "key14": "5mGnD1XFaeYPQVy3nvLQpXX4qKJV8o53mAmFusJybQQxJGYqzEjKzQ85hEwaP2bwkKMZgnmGRCPcjVfvBBY269hU",
  "key15": "hW5YxGinZH4D1QHXKomezvJaF6nr2cE1BFcesduCV5imXTjTBE1vAF4SP3oEWvSzgv7MfZmfQWGofkbKbWi44f5",
  "key16": "5tKe5EmHuTujbfUkxvFvwRSWRyn4BqgTwLSqFfhALipRrsrEuaGN7CXGr29K5SFzKkFQdaW6cXUeMcsnhbHKXL2m",
  "key17": "3cCFAsuYAhP5uxBJXUzBg2UAKqqYFeR1gkZHTfXaKqpTtZHc18WrxS8Rry17Wj9XtqzovGjmKqYAy1CiSha7XpAr",
  "key18": "8nfY4ayKj9KNrHfjJbaq3MGGmJCtM18LpzVaWaKf4iSiHsEkpzrcLzAn8FZ9UYeCFTgtUwQja2BdNUSnSbn1x7W",
  "key19": "2XC3E3nnPrjnEaUuihoYte3vc74EuxPSQdEwo73Yeew8F7JaKfzV3tGtgzFgvuUXWkVZczNw1mw6oYH8EdHyQHtd",
  "key20": "4od37mXsRn9cZQYXHEm9Epe6pdggiaNfdci1xYWPF8u11bc1xqcLPNF7rPnwzb877Nz6FNe62A1tNF6C5KinEtuQ",
  "key21": "4H6q5ddncgQKWdYVyJfpaQZLmJmPCB54aosMAa4FYsw6DeehLDWuVJiaU6bPVxAatggTDp6t4bMCXc7HAfKyKVB7",
  "key22": "4CT5ukZLuj5Xa8SjobxdH7atpbzdn3S3pVPsp3Q2As2inx4m7sb1FLhLjA5SyhRpJ8DBoEGWZiuGsY5d7QMrTBHQ",
  "key23": "3EZccMHGaq3QnRBXZfxfxjC7PFssBNNc1gM6f7P43PdpQxmEVdjQt63i1K3MpjQLQVTtvHVTNoHB4Cw9H6CnnLr",
  "key24": "YoHxZFovCy6tgCrRjcobzd97h5Dm9MRR1aY4YMT28fkqfhM92QLepwvDjq8FMPq5tmkGJ3ddKBEBarqX2CSQ8Tj",
  "key25": "4oip4JeFK8ZM8y5XE1hsP6bs1EueqZVKqa5E3CoRzmD4RSyJb6wtz7dka2tmFTETmWUyQgn7UFCk4Wam4HPLfwXy",
  "key26": "4uvSQQvJjy5qRWZp5guPaHVoWSYSPBj2bamn4Hh58apVtNz2vwN2YRTqM1TkR1qFSDXDFSV4LD28NbVWoLrZqmb2",
  "key27": "2s1dZTDa4dboXocLreaTvwKMXqPi36uzPipSaLZK5ny48W59XNT7Cc543FBoUAVcDciefL8fA2jM1fUztUa2kcuE",
  "key28": "g4nk2UjduakjwAqp2Mn6oxtSactc7iNB9XE9iRWyzjfrzA2U2msdLkcdcbuvVdtPNbVPDzF4L1xKFX1k9jS6rDA",
  "key29": "2apeTWDQmso4pwpooaXdBuYdBaL5Ya8skyU9EK45Y5Jz7yRfZ2uLF86CcQHvUajJWFLtL386BmsG8VK7Qbbg1Wqf",
  "key30": "4dbvf7TMfi6bGYFrf1F3iShu5pJNpxrTKBqmCswxCrQUvpW92toBtpkHaKsMsihgTTPZ366U4DT7VCsagD44X844",
  "key31": "3HQF16fGonzvgN7uPnhj3Jwon8wSA9z22zwke5YNxYEcNyngxanBAGyp9CwF71UTATHv82RuGSVdNr39qP4YrfkU",
  "key32": "5kPrDiUk3Efr9BvSYbqHXPJvXUosTfoZcmf79h9Z5oyfDnK8TuHZfSkAYWb3PzzSSibKswciK6Ec76NVoWDRSuyE",
  "key33": "5SERGNj42n1BLjocftvxTxYYUYzWxAm2gPsznQ6vSGo8C474422WbjTCj3fGpk2M8PSXDptu4wZCwt6N2hxYdyCp",
  "key34": "EcBmv7ghPiyGaW9fen6adeeu3beakz6i3swH3iedomTCPEnficq7Dj9TWD58Rq6pJaTvE3woxmhm7UbYmgx7GAu",
  "key35": "5Rszt9Mnx4cJwJ8s8SmppFwy3ymq2nyh6Jfo7ZfbJUeT1M2ayMHckAKoABYag392PFQQMLMRGyUXmCBzyvDxvEmA",
  "key36": "2dBT2SVSnuzDqg5Gu8d1VPDsWxjogWAidNdUuBAceapcchfmghPc3zXrpGTgo7Lo9v1qdAcx6pZyuvMox4RuAvjQ",
  "key37": "51pNsNeoJmzcZyXp1GHh64f7NuGwGo7PW2GogvMJrtY2zhW9NRQupDdL16ZpQSyMiYuVembQG2U8wLymdvHQXDLS",
  "key38": "41755wtDRQNc5HyHxLqrUo4SVNnaf6e61GbUEhErjTLXmunVjeHRqqi2Fe7eojq8kuwQ4XMavRSt3JypGHAfjsKM",
  "key39": "5s3zGSbvUhD9pE8YThutkHDC6kDfxtxPCyivogsmbrKmZGo2BJyhrv11vaa38e886njcMSjoebUHRUbhGbQoFDcG"
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
