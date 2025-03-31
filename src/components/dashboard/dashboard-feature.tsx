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
    "4Sjq8FTrkU4ighHtTqurmLVCFNydTGezMkjhrmM96M7NXmdmDt7ejLrWLw7jMcT97PD9Jdr6QzsLHRGpX9bLq2tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1aXb53yCRH8J1iQB8CcYWUSu8ota3MP9menbjoGAkTpSfDimSwAT44RQKcGnh5fKQLJHSR8tiqYqkFPbs9zrrgG",
  "key1": "8zUeaB9aQQqXtbZBS24X1pLgUKrjR2jahbu1XFvWArFfwgNe3aKt5mDRHrYqAKbaoJsF3UZqPVUpmTMpyMTwvY5",
  "key2": "3nJjnbG36qJerNtDL5ARXr8u9StbGEibiQArinKqRABkEJZHPD7oUNyzoSnb9akuwem8sCsEoUUaiGugtkYpnukh",
  "key3": "SZmZLUbf8aWv9rnd4xoPttGgGjvs4YPuMqCiGoTuy9SbWMxzDfCMhpKbD9UZ38SsgrMXq7b4SCPVnFbpoHVXHdb",
  "key4": "5qPVYxss3wfULKCuTQ1kpQZsMu3sKVmXZKMeR2QvE7f6edsHho49SmZNyhCfvM8RevkTvwWpZBAFiFB6v9sTs2m9",
  "key5": "TZYbaNg2z6yWN2WbP79qkCNbZAz3rXMAmFdbd2TVHPS9CQksnvBPwQZtrUiH1QBdNr7HpwaWVuGcbv4bCokoCyV",
  "key6": "4xTiQrNE3QWhqJQECaCVYNUHmUra4LZGHDW9nYKHR4hZ1SQ3wh7DSUqJUpUARtDdDhxaGEFq5Lu7epWuYt3pQNTR",
  "key7": "4eeXhzNbuwxJp9wdeRJoFm4cBPLexUWK5NWcrc769GbduTW9ZaMjHAYXVMprd3PxLxc97zTiSE45Z9t2XAuWjmWS",
  "key8": "2kiKPbRtfEgrE2nnPhDEXSsxg9tKRFz1xDUBq3ohSyAG5PMH2yp1PSiM8oXxq9iMvXfCeEsuk7yEpWhTQss6xxwg",
  "key9": "3iDcr3NEheTQHzkeNLtPRPacq6tvVY379QQva4scepTEH9vdcrLav2JzEqin4Mh5UUfg6nkwSU8Kvdc5a6Yr28k6",
  "key10": "4FHf2gYdxSd4eWaWUQjXa2as1cZB8y1p8KbCVsD7FHZTerRChzB4Red8XdhMswBZFGLZk39pQpa9grW54727H4GR",
  "key11": "4EJJhSbnrdZeFo8C2JAACq6oP3v4aZEA6joERTLqRikRHSFAPdV6jReQZahoUwiGQqsTKYPcJkK6bLe5UAE3Lv9K",
  "key12": "3khykZu7HyTfWM87Rc8vCKvuDMfJ9xpxiurQZNCEeVTQHmpULTYMhSyYk9Zr3PoWid2VPwgSAjgr8ci7MmFSfYgn",
  "key13": "z3UXYHLD88aA4vyCYct6vRbTS8htuLFaX2CMp7TXtHo1JoKVkqqAQ34TivQMpMcdfKY7h6Jn91iizAbnEwiHmYq",
  "key14": "F1Rs3VizFQJevF6gckAJL7MhASfE2dDtGhKS5cxhTE5eJ3qBpoRpobkPfiDc9AAhimJ8ACpsb9HvSQGLD4yRS93",
  "key15": "52J26SrzRoaLLKz62hjEevsuAUVFmbk2JnKejXcY3gvgQwNTcubnjPqdJCMbPKF43khSZnH918EUbbB5qEysok9v",
  "key16": "2ahEhnu4c9Lbw6GK5Pdu1jndd5f4sLEFc1uNpCwXWYWknGMxSzERXhrFkcDPcU9SPVeCG8k6qQS5Z2BwUMEKZh4d",
  "key17": "3Sfh98Xz1B253QKSPhjA9pSf57FQ3dYgCvWZ5qYX6tnNx1hpSkvzyKBSLihnwqLSc3wjVQaTTHgsdyrgGv6yNzgp",
  "key18": "3bxoAAky7F1w1JePMh41BKtJqBXezgTJ9GmrUafT9J7tfJBVearACQQf8Hh3CWPBknSbgAcURkcYfsBQGFiXFftD",
  "key19": "2DwrJQ1Mrmo29g4fVr242rRkstaRo6LTB9aowxYd1NMozB75UvuwykT9oNM34rn5xNFcdC5rJZZSvKGYYUEs8nnY",
  "key20": "5GbjxYoZ6xT6gBXqFJpLgzXDTDXf6bVnisa1p8NfdhsBpYnugctKY4tkkLRjJvtJoQNohWVaS3oQQbLyKcDQfuAK",
  "key21": "nknT4xG2gv2mMzTnV9TrAdoqTSxJgHi6b6iWq6UKFcCyFRhNFbbRETY7yyXqFm2o3LWgRxLMCiUqrZXjufVocAr",
  "key22": "4XrYUkyeRXD6wtVUA8zqBUK6WrNJFZ6seiMn98Ur5AuF8GDmX8XVsP8825g9kv6LeqcCnHfr3Mq5mbJPHmTBUZ2z",
  "key23": "3SKmahT9MohsXSL9HVwLdn4VAJQaB2BvzuNkTGoo6PkwDxn1yCer1TZ2kPuXPHKV6k2YH6Jh34ceEKCAEAweW7bD",
  "key24": "yDahChfP8bmA83PsG71b2MzWoWBwFX3LEkD8vArKkWERz9YfH5chEqqrs3rnvobJugsyzU5GSQG4X7Y72Y5USdg",
  "key25": "5b19nXuCvndgK95NZw6K6SynTnqSc6KZsJbBvT3DSWveSPnqSjYWAAZdYSVpUXh19kndmZP2NZekPMMwyf7zvZaf",
  "key26": "4xJZMHSGZvx4akBzYbQkNJoE4wVfNWZFpo9fy8PjDfd3NxCNquiU2TUBjfNHnFGiQ3Q26egthTH4uCMrBXsqdqEc",
  "key27": "3SWXmxNDpqv2ea7pDYPgeSgeR55JwuZccHDyNPXzkJ34C9vpm4o45ACQBjc4wTEAAfYESYKPnjju7ZFmVuD3jmtV",
  "key28": "5fJQ1PiMHgf9sFBrF24EWwQ2fCnMdMrRTQKPixbCu3XHKyxyVkFBAUa6FU1NyZYoPNTLm5sam11Mqx3CQcWEfg24",
  "key29": "MRVf2u3MxLa2pLdz3qWdNy8i19di6ZwW1aJDQsZVxVwaSgYjLkGqGnFbR4RWrTHcq3wAb2dt1cvu1UfRQ7E2Q36",
  "key30": "5v5z9RAedAzfo1mqxprxqksKou6nQiom1bv5MkJ6JKdXSxLMqDZLURCabuJWYw5WeT6SXHnXq9KBgritE3qBCAmV",
  "key31": "57EyeqXtws3L7YfZFkW7AwQAsh44AD7EmDWAqtq7iuyrgPmpLBfKjEPjQQwkBJkgxHJ84H8QB7bnaYjTaa23wiAk",
  "key32": "27Y96EcLGqSTTftUV8gJtC8jf4pwM6ikJfh7m7qD4imkmuE8n9LtXGBh6TmTnBwN6YyRFSoNcbQUgwMTyZdMd88a",
  "key33": "2Q6Axh2psw3v81sGQ6YC61CQpiRE3h73gHXKhHtguvntjd3Vf8u9XNU49LqpymZ7rG3TouYP66BrmCTaAwmwz97M",
  "key34": "565JyXbuHatyiELvEJ48ee58KdwSrcN1YRMgt1RV4moQfN75T14sfF2U2aHgE5rJxPrqNh2MpWr2CFhHgBoPwwKX",
  "key35": "5icTuvRCoKqUivQEcUZr7fjhuu1Yo1dhviADYunAaQPUPmTrrbRxwxPPnmqjww6Zhcksh426c7PYEKkroWX91Bcm",
  "key36": "sJHYdrwqo96hAsWp3WwR5P5JueK53pm2pnBykC5FY3LPE3vpzcp96isnmpRVEXGdajtDWkuML7SXSXM3e8G2s4z",
  "key37": "2N3q59oQAWm3qMyGZnutQ6DUUQWdp7yecscHomXQFKKcxcBQpYtDwUwhEfg7eZbiCZLWT36ek4Se7Uy3eh3HRG3U",
  "key38": "KDpFmhSxJqEUoRt3ochteGPHDBTMmK68EWzhoHRVi24UKJQrr3LZGrtFGAWzyYg1E1irD58SjtXxaGFcyUzHwZB",
  "key39": "49z4PnQNgBgxvDCMm79f5ySPHPaJQKJWZYDdc1g4bfRAduAUaZJNo3uqAubqGv7VMQFZem6VK9RNoJz9DahudXMN",
  "key40": "59FGTt3oN19gEuo1sAGjhaywe7WHgG195QUvi3KxbPDmhT8iTjiGsr8yco4Zp6fM8cYY5i1QvMZzEYZ5WfbiJpYy"
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
