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
    "5TLXk4LNJKjLAFuPEVzMhFGnEfoyaZ7XV1ephxH16wy38aL5He1LLcK5Mmcezdr1sxDHkACFjJ2dLiVAr4KDZ3Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5E65FVDGLGY7qKdbQBaqPyQqp9ZC379wDrS7dhRhNJSe3kyBSYSGCyi4MuBLQc73YQr6nATMiwRW5C79tedxZT",
  "key1": "3RGxJQpwzAMAWK1b3YD7rr21WuZ7p6Cig4aKgZz8TuvFavLLfvf4oCBbYEue64r8v6gy3fj1tNNzZvW92qt64zp7",
  "key2": "2Eab4DvxvGBJQH9MbwD4dxtdYVgCUTyaR8M2SRVd31quSjjHHpYL1WMMtwW4g5MeebASCknxMRaKgQrbofedtG15",
  "key3": "2DyVhbwZuFnuTAdyuLymzP376m34i9MWdEnDojuceUe8aET6tjHfxJr1vcmvzTpmDr4Ps6QhRo7PzhUh5NEmRd3g",
  "key4": "21qCVHTkLabNQQkRgAKNVfyfiDJfmvjaf6yRhuLUFzwAx2GXe64b56YRMAo51UsmPL7PrCDRFhPTeRd2gMXYYwBz",
  "key5": "4QfRW8ykKSxaToM393oRS7MiY8nFQ22y9W3a3Pqahabj8uR13tZzzJAK6aWZFgZqVVvnPKR1ccDpAanwVRqmvEB5",
  "key6": "5Ud8hgxSk5o9aBw9XUBAPhZVb7aMBHJT8NnFm4GEJLYzFsfWWfUeiMYtSKb2YvxaBv8sz2anLrWGVMizzrZefdyp",
  "key7": "3gY7Ymd5eN5bxBbgGmtYqNadeCZmLjwS3V1XCcgzwsmabaZ6ti4HrmKhGZxEZ6sxFXvyjbqCK414WMGao6P2MjG6",
  "key8": "224eYZdwg8NgfSTMC5pKukk7YFvYJZKe1DJDrvHSkK8rUHHLzQT1tcUk1wZFoY66jc7hLLEX2yfLumFhZmGc9V3p",
  "key9": "2eN4Q5SrPKYF7cJ3AxUucnW5g4VTxWnTJMnG4RJRaqAP1LaxHUXLcVYPnSVmMCsJ44KbBmSHpVJKUFuedeNVYHqf",
  "key10": "38iqcR45Asu25FePBbpsT6jXsctJHFWm2KpEhyqGZejmCzSE6wHdbEPNEXf2eHefvZcXbQoW9jWwMurwVU42HiiY",
  "key11": "5Rc9K7T7EbLGHoqT7f8KidFf3YuXyHZP127n1eWXcrVoUg7gH6kBW3fX8gRTToVJEJbpWcb4BYzPdvneT9ugptMA",
  "key12": "4LJTGhmM8AUPD9Q4NG5eK9ahW9sQcETnM3cPbBmQ3QqvVAZFpvJnhkDWR73zYXQ4KskmVivJiPzU4uBqeuquvRKV",
  "key13": "26wWK5eLEPPu7YRdSL2VUbV2ZLje8zrQ1LREDnprWC7NFuZWpyVHqcZx1N3xrrxobt5S51LQqQ55qnzCTGk3SzNw",
  "key14": "2Cw5K3Xd6k86woUvkv9zDix9LUpKZg46LvsCrunitNK3ap5jnTQmMARDtcocw7oDfXdxyFcxitgFLqZrtLpFtQT9",
  "key15": "31EpzTityTZZFpM7ppALb9eaEjPNRXy2vptMx7vBzZpf9mt2wLk5Buou4SQhmTF7GeQ2PJg2hPLpC5iTV8YFw9tX",
  "key16": "3AQ4X5cid3Rn2oTgG1mBzh1FbRZFoje8HXddzjNQh6Vd2XFPKjm7WSAu4Suw7fRh8vDMqCdx2FDn48i5A4nXwtUD",
  "key17": "NHHSw6ACp2BzZKfTMqZ9nimsDYENSVExAd7f1ZsCZbxvLEYY8ttV5xrgoKX6LaKmLkF6hiDPfuNrFHSyFzTvYa1",
  "key18": "4CwuErxqbBHpP5wG4BUtGJfPPSLZXwCHZEX65LDDwGPxwBEqvz3ooEjVUDwP6juESFj8b6gYaagspo2T7p2fMdQM",
  "key19": "5ywsWb9V6dNdNDP8AHzTxAW2xk9B9szLBjrrCRcg9wtsUE1YswA7YBJsAkmZ5pgMQw8fT39X6RHRK2iUEt9q86gX",
  "key20": "5BDjPigfCTg4LWfZHWHeFdYnTMDyzRvCuiUHw13P3jwLXskLpobsUyy4n3wPPQ7rA74kZ22RLEMF39CGGh8iXRqv",
  "key21": "Uuwd99K218aZfYQDEtxZRaM6KFbGs8gYT8oFrTuJkjn3haLtNhzS2GT7TmgUt4xMegPPp8mtPFdDm1opou1uYpt",
  "key22": "5pwE6uMDbRm6SkxxzG8f6ZaVsiJF8K11GRu1KpdVxqmJRwRcJVozdbG5dQcGG27L1qsYLLwjm7BkDPyFBBkFHmrQ",
  "key23": "526q5tdaMRdfF5BoMzs77YLtpeNFwjoYru51rTkFFp6DZikciQnwdvPeJuZojjRiAhWzkkJtBCYJnwy6jhtDaxHo",
  "key24": "gGSFZafDEN6Uisd9rJJkYNFKTgwF1vyVBGYnr6w7jsk1TkRM9QLBmx7V6rodhu8aURWVL4XshEDaS2BKtdSoHG6",
  "key25": "2EPXuyKPD8Eb2VcUTvSjHj53fYwdZeyrMu6Z9sWeXJdaYpd4PoTE8xJCC8XdQneRF9PfFNpuLo5KN95TPmbd99eG",
  "key26": "2JeLN9hDVFhUdFZoMNCAvWP6TUeLCGYKBfpxX7h7o5r7UtEfaVADrYhg1ei2yWgVoXRJjkXvJk5FjFNWVUWP3hLX",
  "key27": "3uBC4auxLUxfpS6CXyuqamEDpzichNwDrpwiaqRABhquhhCRkoge1u3co4NUM6n7N83F9i4LBXbSwVnchHJNKB7e",
  "key28": "2HRYosFxCjwgyAT5B9KgM9LNFWfQCnW1S4duGqveWFpgb6iRngaLSmaDvFQu55rebkaMLpR45g86HgDVtKWErmTH",
  "key29": "42HVHpk2AKhPQrdmCjah4ZdsLVaC91eJuBXpG1pvNPaEjLjCiFBM1Yd2j7PhawpwdTGaQzunNwJSzB4CQjxQNazX",
  "key30": "WypFV8ogBsGJ1bRTRAabs5GmyAZj3TK61Xaxv77yEmKrVBUX1B2CRNrUoLbs9i8Ygg25vex8bbmrwYHfX7f61nj",
  "key31": "4UEVkid2xoEP5mSaQEdpKwd3c9MkR6aNAqDToqqP4PcLguXSAnBRtqsq3xeUeLtTXg4EmmTgGaFJj6N9go4QbW8U",
  "key32": "4PmREuhZHiCW171AbaGZy3v2A2UnHWwHCTH5EsHBzpE1BbWdrceqEpSENBiESJEuY6ApScX3Vj5jvCuLzXiHr4xH",
  "key33": "39bcDytXFUpoNn8SacgujMMQ42qCpRga2PUxAjEHax8dvjkTBxh6wrhR2M4dMqgab8x2dZ94yBvT9PAmyM5KqrE3"
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
