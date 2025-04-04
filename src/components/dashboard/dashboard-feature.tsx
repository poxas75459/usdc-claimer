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
    "2gt4iK3tdGCpWxAS3M9BcFFvajwfmXbq275aTZzcFn8tgPvpzB8TB1qYTafJJuJpvCRemKki9hHRJAW1JMZ3fUyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4winnffzC9hCU89F9uP7EWKy6DFFTnyfUqAPq77yDtj8QSMiqdW725GD4DieeB1UeqJRb8mZ3pM5wJCqQ2LZFA5h",
  "key1": "4ZLWra7yVQeh2iNgG2M1wYxtNKvFCGG9dHpRNyRQxrnpaVqCTUHPVx3qoKyAH2CXRy6PtRZmWU1xFpeWCQpbnHWc",
  "key2": "PMCjfeDwfdvuJg8EYFCWMVh1SVezrRm9s8icSQx7Np1vQTRTWNLpMVxXJzYiq39s559YP9FuSUX8CvXQYgsjdma",
  "key3": "2z8BggkfnkMNv479mfp2KtzcT8ji4HAbi7peDPV1e3erS4Xu1kiMFzdX9WQCBYrpimMCRiavgK4XHcijvLtjwQMY",
  "key4": "wKNGMvanP15wQDwzy9cHYroQKc78m7VAxmZZb22b2VaJ1ypCY2qB98S6srh8DQiaHT63fXhpV9ViMoMim3JG9Kv",
  "key5": "GmfuamkZLACKpPc4bdav2i8UmdHsfSfTbcCMA3NjQsA7PhBHjXeWVShxM9wmuRxJs2zztE48n3jPJyjsFMHz6Eb",
  "key6": "2eA2Rpdm5dN7WBUFfFReLtEtzr9d4zZZtrr8uj1fUURbYr5eh8D3ebWoemzs7nNagVjDwSpEHcUzac5WRCa83ZjZ",
  "key7": "32xKJzQKE6HM1Zx2fSL8jHun9Gooj9DYD4XCAKyBhQzcnsS2cpEeEADMFkyn7BAXNG9kXATKqpey9cX15iiDAZxg",
  "key8": "5JbhPYhCDDwXfHgBv15UxeewbUCQDueBE3RqsmVggDEFuheUCyKAmEAgRNnCUTqNfL53YzCTFtws1fsLA2uSaw6Z",
  "key9": "4n76iFBAs1ik1Wbir6Bf5iMGJJrxqXyddr14W1Khvby1CsHKTkLZEG4mXGSf6FMH45uFfc9YzoY9Soc75mWV1CwC",
  "key10": "2Gm9vFqcSWHeeBWCcsFs1LGxikUENoghRwTMhGU9Fe1KQjBoKMfLhXVdXAQNouposYLhspuUcirFvh4PQQn3d2q2",
  "key11": "4LzLEMPfS1c3hCwxTfiakyhenHydh9UAbvbksjRdXKUMn9VHiGJA6EAmxCB3MmmA2r891XkjdUcsaZTaaZU9M2RZ",
  "key12": "fa39JNdpaMoKXPUGENNxEgdtQxzHgpFQWCyTfeb6fJUvThGdpcGUnUQZoY4D6w7UazqmtrJTFf1BAxcYEQKzqa4",
  "key13": "X7DUFLa7ps6j9wtvqZzzFSeaWJ39RhAM68wyK2BPVM33RPVZSnJ3DU4sL2TkbMXYmDk7rAMeocbbN5cxmqvjQvB",
  "key14": "326q4xL1irf22UqKHhQVwMo3vCBmdies37QxNxrYszrDcTfEALuc5a5pKdfE9eUneFQM8MexDGwphy6wjrbrhovy",
  "key15": "brD2Z92m3iAzfq7DmY9ZNxktyLgUbt2WSuyVnehK3DjTD5tjZioXcUJGYYwUMTv9VDTgpYCUEk7iNbQQjaFsJCQ",
  "key16": "4yNL4w9Am9S7oTHNd4hs4WdPPce1QtJDr2bFxN6PGf6vCdAgs9upgd8gUZC1DGSoAg3sq4MHtV6K9rUXXzubk9HF",
  "key17": "35QMUUcnupBj7k5EQ3WChcSvPFy1XTQDZCqa49JKmB3js66uMNrprxzrn5JJ9epo8gk5eAWfPsgAJ2bJckKvSejs",
  "key18": "5de8iSxvtDrZs6U1ouKV2d5g65Qunf9zW3Z82J2xFAhprc1YQ7jibb5DB9VJAoGDNEjAyYRLXXMrQ8GMu83n1AvM",
  "key19": "nuWM5c3VmejwK8RdvBbcWYVeqXjNjymX8fubHiBQC2LpQMhgRtNPxwvNNQjiXJy22VqeymfSdKkazs6HP4Wo73k",
  "key20": "4X8KR8aHWbWjmbgGXCyCbLy5kRmkM2iVQwWRBVMrZWKUxJX1428PbzzrE8r2fbeJvx4JFoLppd2HG1HUnVdQnhkb",
  "key21": "3DCqLEg6NRUEvcaZFn3XJbP9igf4JSZLce9KSqQVpKCDswDwqMotizgwfGupJWTVuKs7dXWPRwsA4MHr3QFm1d1a",
  "key22": "5oVbhALzPGcYicydD6GQqVr81dV4vr8wUDzuW3EwMLw76FMdwMtX3iu4vsMs8TFkuua1s9xLmCHhtTjwUGtbj99a",
  "key23": "21NQ8oph46qodCP7oqpb7RBWgZe8o9owVbihy8noFepeD8FcRdAwGtTjeN7Jr47mvschyEmcVonio3shGnnZJ4pk",
  "key24": "2GBuT4Yt84HtVT45bHjdKj8FMZtYAo4NpH8L9WMmWztcf3uaqZoQ1Hmt5BKkeqrJNCLf4i8gnjHhRXXbk3TDNdHH",
  "key25": "27SwYMJJZZ6aJt41y8yu7NnWGTnbVw5dQKsSTHAERbHfdRP6XRmceF5w6ozWhqz61vr4B6pjByffBgSyjXo1MGtD",
  "key26": "2M2QnJUTwoHpETHgMeth9vAEExicRfSMw9fRdKMxpoBbXi5jgSSzz4capNuvvDWeocDcW55GJ74MooxJJzy66VB7",
  "key27": "4nfgD6EpedDQ274WhN8DjbBsaphLunotYkU7VGYtjzQwL47q2HHSNMfnushfFwPT734kYTPsxsMNKXqHnHSWB4z8",
  "key28": "d12foayztorK2RtrhwQ6iz998WuSadThHdU9qj3HDBW5Gg9ubTvZdEjW3vFBJ2jSvc2za5CgzzxvQEhq3H82CCd",
  "key29": "2zSPMeqTmZ3Pn3rohTwZcnLVXUT8pAos3d77cQudRRCtBf2dn59b4q8ViNybAUYKMD7UxrMykqCFWuYF453yhNgF",
  "key30": "3kDLMt7LwUAAdutDHBLtQfpn1asDenv5T2bn2n9MgSpZfGAhkM1tk3yLj9phNDHtN4kXFX47xGPsNC1gHr6zeSWo",
  "key31": "4HNecnTYZGuVMJMFFiNt53BTB2N6uB82UPARac5axLKJnk83Vt96hFV8ZKTDPyDwhTLE8VBzcwK7NyP2DH8NZZ3h",
  "key32": "5R62ddUH7cADkNwJ4XxSGKdEoWaJpkqdET2wgDRVKdMD6ZrpkJnSNWBv9sTaM1e5AaSScZFhq3SHQjdJCToYyyLq",
  "key33": "2eLsL2uKqyHpG6Pcwh2wCed8AqDCcdodKCWMKfobdWvm5M4EfGiU7y11c9HH3JYA5eHPuguGL4hVDZtG8U1SV3x1",
  "key34": "37V629cKFbiaMy7vWZJXUPGfQQeFjJQQBkGDpV5B8bEQN3t4kP28UZ8zehcFTw7twuUYBvSwUHiHLEXoAN5ygP9o",
  "key35": "41tqLcRZKcCk9NiLv4BCGmKUuj9GziKTRBHfeHEk3VjLuzNBBD6BQhduwFQfgywaTSJMNbx3zCnuAWYKaoRCPBfu"
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
