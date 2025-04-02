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
    "2TiXRN9qD44w2Z84KRqq7iHJPseEFUqLxYuws6ADZRsM2TpQMiAjcggQnRYRvkty4rc7cwyhnY6DLbFNra9iWvJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCdLHs2qNTcWXufyieuFN3vxHPG59svj8RXEJBGJvYrTUn7GDs3vmCHHYSmSZoHbPNHFFQhzxkhzkmEBLiZwoC9",
  "key1": "4wtQfRGvjHLXndmExGsq3iWWtHuiUiVxug5WdD4DnPHX7JPAeYw9FSRy2jZxaccZvpTCRg2XptwmqLXnSzDG4kG2",
  "key2": "38zSPJXBJDX71kEocTdJsagN71ePeLezkhudHcVxXJLterkNu7SKQroEBnQGT45PazvQPAAbrtUfSu3ojLwqpP4x",
  "key3": "x6FR5bzWj7gaTWKKFicnwRh47w4YJPfB3KJrtoyRXhLxFKfJ42TwFBJyoAzBupLCkCxNKB1jnLV3C6fRTXDBEZr",
  "key4": "DBq1pJkQ2EC5xkaa9idomg1q8twf7uhr6wme2X7M2zhCtyfswh6pqyd8WbWYpd22cNM4N8tdijcK5vAGrzn974f",
  "key5": "4jZqizJjAowcvv6Fv1c9XP6GdN9EZfXKz1YyGjyJHYbaxFh6YchfivSbaygo7C82Hh8cnK3iQaV3thDVbAT6Zbjv",
  "key6": "3512CK3aB88hHQ5xuc8QnsnaVqR15kd5RYeLzGUQcc85UR6kdXEow6GePkxjeVvW9JQNHeQxgqYMbBBTamy97MSf",
  "key7": "2MT1Tgq1ognQ29vqr85qJWQchqNbHQby94M897JeZeiFW6rYytfZXMkv5rm1uHPY6T21ZChvEpKRbJYpxiaFz9Un",
  "key8": "3jj6iqXdMPvq6QgPdrr7Sbn3FzVgU4kiaXeXjSpmZvSMvzg4zi2ef6dSxTLcp7wUskyBoixc97iBY8zp1xSbah2Y",
  "key9": "2jUknZc2Z1qvXBkZmXSKPHK9bHmcAFULoJFFffgPAHvcvt9tNnairpMrua6V3zmf2cLyonJ5LrN6M8ABQZTDr3Dm",
  "key10": "2nC8arU7vTWzqSQRfrfJs6i1gUZwWgSUAwtMWyzPWwFG3w66HwHFNvMERb119jvgNQWBdsqhqsw8bSMW3yYDPPM3",
  "key11": "2KQTVF9EaMRJ3Uap9PgUqk9vU85DQNA6LRGkKdZU4JtvYNDthEs9msRNNyiy87vtoyPrqzxP8tmKhsJqEBhfidyM",
  "key12": "2QhEiHW4sALatcS291EGBABgSaqgfb7ZeZBX46acyDwdJs9TwuPKiSN5L3Fx2H5zyv7sLx2JHHv7mGqR6Dhnf9cp",
  "key13": "3S5RLr2jKkqiyauX9hHQ1tdvFBEV97XKc2CMDJC4CwoEXMfqL88T6RieY4pXXqaVRJC3yhpPE2uZzbZ1z6pX7FxN",
  "key14": "2r2P4E8274Vr82D4o94Az63tRmeXvEHjJJDSywaLFS5oqs82XfgtcqqM2swDCpBQzJ7HGhDDHXqnbcWufMpGihVx",
  "key15": "5fV45EEkBmsc2gErAEroJ2JPbuewo9jXU9snJDPnHRi7CsWsY1DHpBRrLgMmrMtoz5qdSB8uxKCnS5Dg6k4wamXf",
  "key16": "2omFaZz1miGw8qfvSZgr7eecSaBB3gTz7cetZMHJHWLzeKSXTxDnrV2ioKwJAATPLaNP6syNnxbc9eAE4MHborBP",
  "key17": "28t8SeasCBzV243Ei91ew9s1RHMzfxqM3E6dcEAv7ySFMeqeyEz94vqYrFdPwZAXPHM3roixsv7GUpreTgvneK52",
  "key18": "2erDD8QiCRy8S1xz6veZetYTNJxYEtiabPzYqgyYqEYh13Mec4LLhDQn1UKUiT8x9m3vGGVZV4pQuayU8b5xY87u",
  "key19": "51LqJamubugGRj6U34kQuA2eiPahQQ6VuXfnSR6tRgRbUFv4h3Mx1duoxeA6p5ngpQJbpGr7PWvAPcCCyjrHWjRZ",
  "key20": "38Lgd8wQMbf21QUXnAKMPN2CNZdAhux8uDw9Z3DXZFpeXZCa2RwkgqsDU9ajRuTzpjj3AbzhTEhiL9Q3sZAwmcYq",
  "key21": "4UQyUjJPALJoUh9RpHP11Vmwmf54r4ywTX8Kx3GmRdm4JvWEcWvtVPwgSTXJzFzZK9nK8DNB9KvU5FJttuR3hyNM",
  "key22": "QpHF7mCz1SXmF6i46XeN1QUZw8To2tQpeCQiqxSaQNS69Ng2J9nMsdtfLZLXUSpPXGZBJf9igYzzEX5AzA46bzP",
  "key23": "C73gdKsmeuzsonSmkg6d26af2vfjqGhwXnsyEgNggJDvVzwDmLGgGkVsE9VUY4DwjRsBjDvsh5WS6657qPuYimt",
  "key24": "3ATPUaLFs36gd2sqfK2BkfctY6xG9om4GjP31MLYGA8NMPxABC7bDHpvx3yy9qMskSinGjT7QGq6KUrKFEGb9Rat",
  "key25": "XbfmzJGP34TGb6WpKte29SoLVU9wC1uYpuwvTDD5aKbsdCH7df4m3s52hoH9HKprJNKE4rNNTWemuj3d2WMLHMr",
  "key26": "2x7Fbn879yniQo6Y5YFYPcKWmeTHc2D6bnfKneRkYS7J3i855YswCB32x3FBf2dZp1JU27WKDuT8SW7JgoMUje2f",
  "key27": "5aY6C2LTE4T8fGzxKH6khGiWsVc1YmYk6adkjeC2HyYnNq8Q5tMPRmumDGfDjRwpUbhdjShhbo2vii5dhWRdDari",
  "key28": "4dTZQvq1GxwiaYw17MeXoZz3k2Uz7mHuKzj7WQ91hJyshvyrQMK9tXCjSGwS39r4CR2qC8Rqr2YvniCMnBxnCH7u",
  "key29": "G6wyfhakn7NSCF9V6v2etosChhxt8gzsktvwj5geqSFEmXUN3jXtzdryz8mnhzTdqizTJn2AyxMwfySrxoqjC5k",
  "key30": "VXwfcGKWJwHwgCQEkErax11Ptp6bqfjgaScXvVUUkRqB6aqDVD4NozdVLEt8w4X5bx4ZJnbnheUP3UtcxkHCSEf",
  "key31": "4dVRrmdHVVBPdJ2dyLPxWd2pHNb98v1iWLZSSZpJeb2DfWJmycmPdAag3HdjRcxX4Hhf7dkZVF2Bb68yHQJD6NTK",
  "key32": "5zXFeqkwCqqy8pTq1jaFDeEYp4nsXmncM9y4ySfvxo9yisRM1Um3uSL1No5UcTGrSvu8TyqCa3eQeZkSh9kqMtVK",
  "key33": "4LKsL6ScJicDNFFndLXxZDTyBJLQ2Tecm395vXvMBhEgZjp6BbFeSsns9SZjiGA9sS2fRwmQxjAN3K7ZKi9efd6i"
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
