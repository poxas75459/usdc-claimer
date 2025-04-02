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
    "5MSRE2t7V2YkoyXMTBArZybRxbqJedEq185M7ThqZcWzizLL6me6yMFXYADgyMtQtDpXgA7a4kaGCttqRQHPveSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KxJEqcML5ApCbLFofmAaxtS4cvYkx4ArATob6RiWVKymG7cETVgxf1PnpJiqcepjzPeD5hzoWjDbSfsLCRza8gh",
  "key1": "2k58YzVF5csFCbc4pWSFgw3VR24JneYH6jqC2unPuo286vmsJ9sPfQM427AWhGShCQbzaAY1bCCfCc6zkBWikAe4",
  "key2": "48623iMJoG8XFzW3xMoL7rdZjLPJjajEJxSYhAcEYuSgW4bgMVgXuZc1hLCzMmhkCER51UhkRMjtRdj1gehznGMr",
  "key3": "4ysfKMwjrv1y1Jc5nZNNnyaqD9kiQjE7dxZMfEcBWgWfA7Nvmcows4eQH18cNaSdt8wN8Z8p5McuoK4b82BD7uAm",
  "key4": "2NRG7cPAA5ez3fb8kr33ZCRg6wYPZX5xv8SjZdHehciMXDuLU2SaVYL4QvMyMbuPWkRFQGztm4gzQBLZyrkTkbP1",
  "key5": "gdCSfYKWjagvBV48aQquSoZHhnBpPMSbhmMJWD7pJ4k4HBo9fTWaiPcwZyH8LnPcPR3ivBLexK88i8E61yqzWD7",
  "key6": "7kheKjkPcWW9itNKuEm2uquff7u7ncjqbVfdGJehNKSD3gju5qXJywi6vrq4zu1oibKtgzVgkw8i5xLfyYKa2Fd",
  "key7": "4FNCD13JTBTbzRDZddWH5VcjAykMKBzXxqVjenVbmEiDXSw2V8TP5GeUbaz1nZ6s7k44Q5eLHp3BjoiqdWY5UyEt",
  "key8": "3vKoMKefGUcGKjRj3oCK1RQv7tCKAeMCiSmS3H3uS5WMtsenm8eAqyfQLz5Z8J6eo23R1Df7Ff8BsK3jwj6GkUP8",
  "key9": "52phSto1qtUL6p7JteZtHxoPzd73qi1oQe3CywCmQZQmNk6thA2cKVK6ti4GPinqk8LZzUeaExHnCdZDjBiWRV3Q",
  "key10": "4LZYjzKja2e7TWZT5xTSRyB7rNKbQgkX9r1WFbeRejKzrA373LVEDzC2jX6KMRPosy2qJur1xFcQFVxihdf68h8d",
  "key11": "3uHr1TyoCFuznPok1ev9QJRcmUmhk4LPZ6GVHTKSk8bmjGPZKRKCJ15tqri2Vdmbk84tCP6JWZKzQiZqYN3yy15m",
  "key12": "3f1eua5aSLz7ZrHWCswBfkFkx6KXVN2YofYVwiJZdpfV8RJBoFva6YDQ8hqyLpHf9CbrSUG5X5bTzA2uKQHV8JJV",
  "key13": "3nV2LgYgT5fLxawujza6g67fGyUU2W8dwWAKtzgc9GNSfmo3EDfuWH2x5vkYuGTfNzTjdS8j4UKtdjcqskMc3jhW",
  "key14": "4NXGoy4xcQdE7uYcrtbBDYP9csFxtSFQsRCwkdbd6hSAd65y8DpPhNMzYChVwnxBW3JHbK7CB96yFngNTZk2R25",
  "key15": "23TKycWiwptoKxUnoxF33ZBs4E1KW5CCENXNFZyU396vUJU3FR849iRLUSsMPiF7yFDfCo79Z3Uvzt2RPAT6Uabc",
  "key16": "48WRzFfxoBXMj3gC2gY2ZPpmi1NDF7Msp8aTU52RRtFKGCQDrcLEzDxHiqT5PPVRy2QUJPzfqTeF6m7cKmCQ7Vdq",
  "key17": "3qs3kYVBuXefSv5i8QgKat8GTfYkS8PCr2sousaNV5FjUkDuYMAyVmoPpG6CzSFVfsEpFipMGNwGKh2X51EY4mU1",
  "key18": "22NYCSCrmL23kN8NUDxiq9MrkrURS6E78UJL2KAgNPnjrNbCsYYfHR5hUdAgJ3C6braQ7tBjuK3xvMnpZHpqFZFx",
  "key19": "3T4gFgh7BzaVtjRYwD3Sy4iUGmpPxGrU4YWcN4dBoRZhJkmVZ3f94ToE2SmdMyWhjZe58h3V8MJt14LLhxGiKUS4",
  "key20": "2b9LzovTERKibhJnNtTbPYRwAraxEVQNvfQSF7NaQyBETDTdX5GvJhkBPRUdS6q595Ncy6fc1VmWtXcHKaj74xtY",
  "key21": "2diXgTzooVXq383U9jBGMDpVZNRKXxcEAjQYnMg1rNUNwZeknjDPxpFvpFFR9kXJgzWjpKFBVeWQBQLrDztDLGpH",
  "key22": "4hS3hNLJFBuGK2BbKdtMRzm7dzevUXQMq4PLqfufsA6ynuRRgwLhk5w9wW5QVjifNKvG5XoGFDuyBnLtXsJ6229X",
  "key23": "dNyBziF85GfHkGLTMxXQeWRHWCQqwc1vdR1TL5opPZb9pKkWeHi4bpLejjdeNiiEt1AcjSFwgbyTTCwMzFycX1H",
  "key24": "2ikFBa4P3Ad1DUjeUwT9hpHdiWJMuSMcgSvz8TwseDHb7tSmibSsJXX9XoSnk3vMHauMUyyXyKZsFhaXvDcXi7G9",
  "key25": "GTTUEq6jZXhJE3VEsc7BjHayKGSB1s9uFBAK4KGnoxX2cogTgvZipbfLPHiWnqrnVEMJTKNsA4ZW9fYxq3DhEpL",
  "key26": "2T1GT3orzaVqp65iJS911Z9jjBRSsJaaJxDDr1K9uuxT4KATHts2pU5gbYCHAr1yqC17ipTgABZA213x8fDQMavM",
  "key27": "3G7QQ99sowRgJjRmqjjac3yydCqhv6WuGJXYUDC9YfVTdyHxeaUFKyUxQT7rvcrBNTy2U1korwLJVbfaC6eAJRTX",
  "key28": "5LvBtToEWfYCbyDFFtCFzSsEE6SwbJDxMAh7CjDYvcm3C5a9aqmozQZuFUVUhnmQm9E6edXUCoBeP5R4KRzjDky5",
  "key29": "3DQpjzBtAiNH83QVBkS4uuiF1GXWYV9r3LD85uDqHuhjMmDJqkmU42ZHFJBdA23pyLXXqLpoEaBRmTgRgiS4uNpx",
  "key30": "2XxRYoB7xu2aHEZL5ULU6wRo51sbBUN2j2R9MjWjKgDYX2zMpPBwrr8BYLL8n76LTKdeiRZNgt3vRfJ6pxu4HZTK",
  "key31": "c9xnNMXpB41VMXdv9y7vSLgt2cCssZHoM7m9B1fLbrvfmvw7cGWP7h8GsgyxaYigs6Q7SSQJ8gncjfraP13Fo9H",
  "key32": "3CT9a56prRNc9FUSnUfsrQnBRHMs86E9j8U8GXret3EJv8SMRfZLt4U5CaSs7mr3t5npEJxdeTxcYbDYSjfmyUA5",
  "key33": "2orVgxKKyUPXCt1fckYshV2GxWr6yYhGyC3TvfyGKiKQRhzJHT6cneuibueqmNdVnuj5fSRMnNWFfB3KBdJ5TDBR",
  "key34": "5d9WLJDx7gsZXae5TLxDimB6QWPywGLrxfRsVHn52FkpsT5Rj76ZPb9SC9RE6bqEvavFe4Gg6yovwjbtfA5vHKuo",
  "key35": "bch5c9yzbei9uQSiXr4FpR3E928ApL5BkViq2efWFBSSKKijvyeyPk4RB3dceP3DNqQQPqx6Cuud2q29fcyVpyU",
  "key36": "sVbcQzP149fkcAtaFPHF3qS2zgTd7S4t7PTfhYL8LongPAzrapLepAQWAEe8ccLx3UWwnztZK4sArgTMCJMjjSd",
  "key37": "5r2pZgfWqoW5nPCKz4n6NEGeRPF74QiBKGszuEbJ58tV5oEBmH1aK8hpDPqooH2DRsEACU4cSQCNMisNYU7e2cH2",
  "key38": "3Cqnn32ZZe8dW2tjyNfGGer4x5jPDUqzzZRsDRfDrArtHHDcEmExcMux7F8vCxfxyG6LzJqbgXPkTLZVh1gerKTB",
  "key39": "2TTmyNJmGooy7Qj7jdL8WnCsNrPvbJoL227at72wuRh1qJ45eigTnoaz4M9rBy735M5TR4NYP6JNK9bGWiA6QeD3",
  "key40": "3E76qSR7DUwqwRUmG4syqwfhUQXYnTxF6V18m71n3b8Wt9ZDWvBoFsjWQzeqsyEUxjAxhw9GaDBKsF5quGBcksKi",
  "key41": "5sY9ucpBtcZmcCkb3TgaeiuyxCivRXBnhDQUPh41CqdVyw4ZxVD199qmkkK22CJ2i76NbUbYLoiiiomfMdBGKC8u",
  "key42": "2u585AgW4P4EZZLQXK5XeEysz158Nf94tqVNJnU42L8zwyrp24vzhKWbdHwrV5F1LJ2vvb1cuTwe48BxSWeAhDiD",
  "key43": "2eRWnpaUZuH9N4XQEz7UrfoGQF3uVzcVPSzPn4rgBihW3vcUQq68nCVn4xjNuoqCmEEyMiWcyA7iK4edYNpufTg7"
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
