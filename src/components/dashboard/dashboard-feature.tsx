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
    "45qghCKe6Us6cg4TziuVL9RMXjLqXbyyWoqsNdSPj2xWH3z21BJyQMznBgjXUf2CwVcVsPibHLJtQyx1Sg6YV2Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxfibdXS9yA6GtGygCJEdxBtbsE7jqY8U4ygbbqL8f1kHGDmfDSY9h3hiMUdsuJVFRbgijbET2ZzBqXPPuCJAww",
  "key1": "ALUP53Kg71KtX6f71zxxFXGaCqpcHrTbaJJQkYH7HMuXBmM4wtnaC1b8NxV8dkVXXizSGH94xJRvtemgJbX8hqj",
  "key2": "L8tLN6Ugfz4qm26ZehSjx437qECeyt9WNLTfoisuVTqd8TL3WwcefgcKbi3wRVUSvP5v6LcPdfEiN7qHVeJNpfo",
  "key3": "3bkzNpXfDDnrUx55JpEZsn7mSvPqGkBEnTJmD9T2AEs9XCnxxtu9x1nyGUZwr3prBbcBJyP3szCN5VeMqWzL51m4",
  "key4": "4GCmAsYd2pas8u686i9bJzbh76CSA3oZtEd3PKZDY5YmYSt79rJDSoLWMpX82gtyCPx5RaJaC6Xm8Xey3ynwQPGk",
  "key5": "5WfxpjQw2EzgZHxT9CEgxYkFoxFuxQNvXiR1c7BviMAs21nrCTwJeno5oBVXVb8xWhdHvofttqrfhmoPm2mCqNPV",
  "key6": "3qhRFciQs4w2xikTf6VWuHDQ9ApSyJNL58YxogAtKMYfJtoyEAJP5p9RoyCatPtYvV2MCNEeVFYGBhEBDbL1taVV",
  "key7": "2yFceznoq1XAHQQQqWLGJxAuRRpGFv4Hffkf5wPNkZEfYgUgPbLDx5LgXuvF6HFtU3VdLWPNTbJRhtzcgk7hi2q1",
  "key8": "5dNCSFk4cnbnpaxcVhzCnDDKSy8kjptYLCNM7t56quhZ44YVtR6fSPcqt3vqJc1noUr6wQUE7QMXoeyCTVJ1XW3H",
  "key9": "2wb83GeEZvYPhEn7Tem8Fmu9yZwhCj57CRLwFJ1yaB2Q6R7xKhQgw4vbwB9JUbvbJzWnpmgGFHhhXRixBzzhsfgR",
  "key10": "3nnupG3j1A8RLLRwX814tdmwLR4raxKnNguhiYmp6sESpMKjJcquJkSZn8pWcDqcFJw3DXkjej7X91BGZQfna1US",
  "key11": "5WQXYYdvWsi38JHrX52y7ooZd2HqBXjZQ2Ddrwo4AV4pagNfCC9AbaejLEEPxNREXk6AVzE57KoReRnYvesax5SE",
  "key12": "5uQhG4jF1zdbzRzHDgDZgCSQqCiz3dqpVUxmNm94vjttFZNdRhbJg7zYmS1hQ5cqqywE4Si3M1exmSWt7NwtN4aZ",
  "key13": "3sAXfNsJ8m5C3HaJtptovfn2NmpPyudbPhciWK86xJzCD3GGNrJnArSpqwzjHJxH3VsfbBVQFmVN222na2oXrdVq",
  "key14": "2NhAwXSQFuJ86QoQprYb86JkLKsM5qs8oRGDu8xgynGJ2BS3VGvJiWR8nKihaPjSm5j5MeYpw8ELTyanBuiHxd7q",
  "key15": "3QK9iZNpxxKnzswVDu9Gv8dhYzRX4M7xC6g2ShMEsWGi2XGf22Rmh4L638cjorGsQGJKDkWiRYBQfS3iBbXna9Dz",
  "key16": "4HYHHqF2eA3NcBhFcfrn8pLpnomfEUG18m2gBn9b1mfbBdBiETfkymQAGusFBT2kZMbfvvvag7rqL1qpWo2ch8sf",
  "key17": "4YrGkPrpnm5z9VE2VoZSPAnfdyaiQWAKK7ZL2yaR49v8HmLHNXyFhY2NZ4QKhsrL5t1P9nnfQc19kC6vpmFzKqt5",
  "key18": "3mm4sQiRdYAu5NfNH1ofhHwYGcYBmduC4Mfa6GaNietAwBeDUAZV2r6fXWsrkh9DSFFcN3jH2dvX5L8E4ToLe4He",
  "key19": "W2zGPALxK221AjjEgRqbhpSgaBDnnBtAKzrFNotyPUqe7zX5T35EMxwY969gZbopvfjRgFWrqNN7frZX9qozYf7",
  "key20": "2DuabdiFki3Ewt1yfMm1ee4PuzymfqfRdLg1RiTEADHz1dsXS7KuMthHAFjcQdhfsWivCBNPS58qi2xwam5fmTcv",
  "key21": "38xBYV8C9xjt2Z36Zw9zmGbEUcbQG74edDhxfK2Yam19AAUTBwE5u7fE7T3hF4tGWRsStYdQXhR9jy7aLGKaDXYT",
  "key22": "2Kr3Pz1tc9wQKuvPT4ugpXj7iRJDc6GcRwafTZGv9n9Wa81rUs5V8knhLBd8w4SSQUuPbB9uGwM2Ar3SzuBHFN44",
  "key23": "5nn9bSsCY4KbhFvGs19cqJgzjK3DkbCvZmv6ketcvvoA5ycuHrsbYr15jhqkJix88KMC3VisAspEkaCDrXGW1WVz",
  "key24": "2xrqGPoQv1MTfcu1gy9jzPC4bDrYQksCHsShkixuJxSB1nVs6dx3WZmSTBEZqjtdkpiy3VKvVTg7mJuB4i1qEYY3",
  "key25": "3qq1Cb3a3ERv9UGGu7PnZyeEL3H6YrQpf1UkUoDQsnnySsZBLrAvNTMo5HoqrhDVbPuoPDGw3sk64MZc6LNgc6kL",
  "key26": "JagdVHVXxB5Qog6Cq3zdxjDJJppM6RvvnbJsXQbcHr4MjxqwpmKi6Xs4UhJqmoJebaBWAVyy5peq1UJkkHm9MY4",
  "key27": "4kHDf3nT6Y31UdAz9MJwkb3fpccjR3mMFGkecGgKB5EvQsTG28iGq5wtUjYtawM5XxygaiqgpTTfme149euPbPy9",
  "key28": "4vvdkhPUhRJv8cJ9NZW7sPNR28M3LZxrq3usAQmQ5skpF5NhezovpP3YX7j4SrouGZKG7FaCkD5t1Fr2kL4oheC6",
  "key29": "3htUJkekFQwQidJFdsvxo6qxjFDAb2bjNTNRJaFWJyP9Be5Uow41KfFc8Sjji4QPfFhMSRturzq3cEBt44o9YbWF",
  "key30": "32TwtrVPaseYS6Pq4gTFhMjBYVX6naYgCC264igPDNiwghCTS3io6C6vXuhQfwT47J94JZp2YUH3Eh4R2UJ3Zrqt",
  "key31": "j4mHpRoRR3xDfmx2axvMZh975mXPLGBDw6qRerBTe7fGMki4jnE3FmFz2M7iG5VWRoszNNKN4DLqUzq6HoX2NtX",
  "key32": "29dsjjPSVRXUUFUb3j5TTc8YgF5U2sSDn5odb8LcpfMP9po2Zg3qMEAhDaU7Jhdc5L4S1wmBrPHjbxprVacYuJyE",
  "key33": "4aC6uBeeBgp19ytHHWj22tR6q7Mb43tU8XJA9yxo79cAQYSqkW2RQELQ7QtQAQX6cqACSPgx5YuTYikkPoPUJgpr",
  "key34": "4MUn3NbZceEMCzaEamrp5AhcH5iCnxNGBTsrEuJaeFjxyRLL2LFwsvvxJnMjwpYpohGMScxWaa5jt67LmeJbGHgK",
  "key35": "UkyZm54BKqdg967tL2PpX9fY9tqJsvHp5WHUeKA7Ss6YMMNqRKTMCAfCHDbGG3xwems8yomyvH7cKhUTHRQwAky",
  "key36": "zZMf719Vpo9gCHtRe77ihzMiJyHrp2hhEyrCtJfhGeG17RntKYV5hpFHvEF6p3bA9SLK2c14RJZiWiapvjWPax1",
  "key37": "2jLFZCw3gTpdsJQWEDxRdrRzK394crbGMi3LN2Py9c2fTh7wicYrLBL9KwfzcPhDuYPyRLhsimP7NXjBNA7mrnP4",
  "key38": "2wtetbxDWExhivQeneKWAiMVRuUNUXZqSATDhaPYgGWEXQhNufqX3DJywcYxz8kbpJxPuD1XuuAc9MgCddEYh3Wh",
  "key39": "4QPUuWU951K8x7aH7oSVEscvVFgT3Sa9UZ1L7qJ39GctAoR9Ybeeuq7kpurYbgiJXJobYjuXaeUHkBpnHwfQ3PPP",
  "key40": "5LEsxY6tnFeWwQLE3fqE29kFuVF2nWNPQEjA85aJ8fS8EcAGNo5b3YEPQc1H5WXMHPiXybtrDLJeSzKLXCQLZ2h1",
  "key41": "5wQT7bDhrpGXFE4ryYyGy6VB7LqJZTPcGt8FwHRF6Q79pcWF919TonkRoJpKDK6npCd6KWQJSuqdqoNziNH79Eeu",
  "key42": "zErRvwFR3tp4nws8ziQGFXh6B2mv2fGPp6v9sgSqBvjs8NWQap3Li8i4ZFqxuWGE3TJejsHkghkyS9LDrErwBET",
  "key43": "2zLv92fWj7rTGnFe83q1FC7x8KHtxBCx31w45X8r2cixNADkNYNiHVpCRB4JzrpasAaggZRRfMvfifxm8LgD6MVC",
  "key44": "5fTzvAV57v3ZmDbKQmDwB1bWMRTQC715Zs8PTDkwSdYg9sXyDmX7CADN9YRyJZZ1MdV5ofHguqxB6j4phs5ARuQn",
  "key45": "4eXi1aHdv4KpQ6ZeB7KLNkCLa7YqKcSSRLiVpBzdZLJnuth1aqCEtB3jLf53F6Uvejp4UNjcmCmjQ67iLFpGqiNr",
  "key46": "2UrRuNz9CgatNGxGNtQL6dBnxdMiG3KCCahFkqoVXFaRDzJAkKkc24cqhepXspvjZFcSpNHgxhM4VG4CAiPrRRwB",
  "key47": "4UjjxK9x3cLRzwUfzaar4PTxiBoJBTA8gMtk6RxQobaMVFKUQ5KdJpsuRzto8ZfbRPwAg6e7QgQzyiBN4yAykmZM",
  "key48": "3q3ELNPvFAqHcXvNQvRyHFaegBnFJcFmehzgGWtoCWcmahxBQ4SpR1onHFTKhvMvMpxwRdGtQRh6N25eyMDYZAJ8",
  "key49": "4RcsMJL6R8FZz5N8ZuYL4BxYeQtxeJpv1zJc3wM5k7Z5H7CZEyoFd65kTC2anayTWmT4Edo6SNPLV3QHyKFTjZDX"
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
