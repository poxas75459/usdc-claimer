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
    "2QEnLZUWJx8yX68PT3T5jDR4xwaWyxWEdU8FtKmP4XvTabzVJDKYKzhwtJDG7Lqby9nF8EdQ2b9zc3dvbTkMGWM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7iiazKrVAE62stKESphaEg8CaqVnE91RjbGAcgfjCWaDuDjHVJY3BJaxy9pJ9qNMADkFWUFcAH3nPC6PmtD9xk",
  "key1": "574uQ4pVu3cdMCetNT5jKc8GC9VNbJfVwjP5QMpkYoi8PDqWsQ2wT966cz6Ds6EP8yYNC46mJC5kqs9RjPf8rdnU",
  "key2": "rKdZGcvFqfr3zFDZrMbLZt4ZiHoPc1hEW9zXajUw3CU3pUdpHkRN8u7HymhuKEaH3mMrTcraXzq5vZgHGiPoHPA",
  "key3": "d1GDMjwpS3s5dqRex7VoVjEADUrxXYLUgGC8Qv32wwLcsJJr2yD6UBmHCVtN36gBeWAfHfqVnYqChKL6CkEo5E8",
  "key4": "2ctkQ7YHdBpd5wLfwLgAcD9cmj1SBQpKNTdsuqCrLAK3LBbwJVRHRegqFnHdM2QfurY2NQnjtotfWw7CNGyBiram",
  "key5": "4wf52PH3pnhRgo5YAvw9H2wpWRDXhMr1HGvi2A664cLjMfpDmwU1T9XEt3yZ6ooDzqUrmtjwxRCpuSdzm9qkn52U",
  "key6": "2MAjZcz8iZwusXnVYB2Ssp74x3rwwuh5Rc1GX2TFhsHHtU1n98wyAEaWP5yUMrpxRaZYcC9Bdqr968647xMHy1BG",
  "key7": "2XGmRu1JEcUukE46KPW2ksTE18yRJNomz98KXWWzJ5yFAXm9R3dLkQvCw8FvoPyASt4MSnDemnAecRKRgMFE4VXa",
  "key8": "3vauoohczCS2jE4iZcV6eycXnoJG33DVD1HwVKQNgE5DnPyXWZvTnfYYcTNmo5pGke6E4WrNNEo7Ngu1hcLPgBP2",
  "key9": "Aivbs4Eg9gNext9EwCtF5m2WGA3yqCmAb4rieEpyXYZKSwvUsZXpnp7jgPdLYHCcwrgEpR5AAv6kBGH5qH9EjCW",
  "key10": "2dZhAyt61TfXurxiGFfsQdJdCz8ikadnS5NiWCCZj8WA7jcRJuvNAYKTcMZUhYLPbf1arHii8HHJMeCFseZpNt3X",
  "key11": "hoJoPVAeMFSqp5KR29eU1PJ5HPz3XnqYpQHqgEVij6MwmCEfN5d8P3gxXoWVWpqcrSQafkrEqDr6x69VpaUBDcK",
  "key12": "2DsSMT1wcySPgYNUg3V8fmZEUZPrqpzshaigDWWas5mN5PfMvQfC96xD3TPqfERr1RDExaAy4y5XPpVRGT9S5Pkk",
  "key13": "TGxqJHAsgPLJBPWUhDezhYyv4Yh9ag1UUL5MVuMMTpGPJACgwrget6shmWLoprLiQHCwcRHXQeMb5dUw6rPgVef",
  "key14": "2somXjoUscCrM3Wa8xkP6H9y3tf7T4s5TnGc1Kj5a21HAcLt3kJca6JVPMu6kPTGN6xhkzQYqf4n6UtFQcLFedAe",
  "key15": "3D6iBjpNHJvdpFG4RvJWCHd1sArYG8agwiMtJFeV87m3G1soPRFScxxqZeddEexkhR3te3hCYuFHaRpBMGyTqvtG",
  "key16": "4ze7vGFE6DifZDXZZ5D3km7NFyT6LtuDidZt65BaJbrRpqeSrLNCwhM6oPrsyrQnvWERKbZLuNYyZWErbpbaZVBF",
  "key17": "37dNZhDtqtqbmj2t2nRgAGfWBVBVFvaUqqj2bPZ6QD3WQTb1S1b3LrH4kNsYSuCqUn2dTf77BWchMQyWFMDe5NZC",
  "key18": "2zG7CtotxgLGjEgF875CrbNH9kJXB4BH9XAbrR2Ax8oHrgzxxPbSbvLA3VbvXnd9jfqhb9NYxdifHyn6wbaCgzqK",
  "key19": "5r4H2GCNA3Mfa5Bds5DLTbJfdr6ZdfdGc4JJzpRShyqRJBQm3Hprvz1MvzrJQvumvMWSB4mE1TyQbLLovkt57Dc",
  "key20": "LXxc6cZg76CJk49wguqW6Vgr3iEFhf78X6erjZHSiCM8xd8teDLvJDgiqgKPbmvScSbjSkPDe3AhEBdrSpgvTFC",
  "key21": "5pwYayYMQapPyinbVAavcqvbD3GisUz753z4UtezwwyrqPB14LdzoeMNNMXhLoFzKFU2qDYiJTNXuCJ4dUcU7wDt",
  "key22": "3MeofoZW3MWzVCmsactP7jjFM7WEGiC6jxUo45TTPuvo49WELvE7nfUhSyra7ps8p7KbAgTbcd6zE1NPugcivGeg",
  "key23": "67NHsFGtYEURLZ2yPTUzjUGkSoyasrYEXMEWikakbMWTpF3VGXVrp9WcVepJ8NBNo8aYPUjpkUyMTxA5w1MZdMhR",
  "key24": "2Rvbg7xWye46onrBReaQD8SJx9yzAqgurWoSvQ6ErDTWyKddYoLNKQLsckY7g7GpYDCu1Cn2yscz73ruQWUo6rJo",
  "key25": "5TkXty2fbWJSVFtae2JmAfpLYm6icna3hDHauQ5NovRn8zwjGiWSVBH3zCukF4kFtQocWBpkKR4c9sPqcNox7XK",
  "key26": "3aUrmsw6UecuuaGkdDBc6jbrdHkR8YwHUs6uquiDWMF2rVd5jfyZaDwfqHzUA2HZMyfFF6fSM2RkkCjN8F37o2qW",
  "key27": "3Mvxs8Hn7ShVTDtDAbpYe6FEJ9irfTPMSNMcfyKZPafJpTYDkcE3mGg6EGKqr49Xc58Ks6AiXuZYTmSEbszkjysD",
  "key28": "4bbQeh3x3khSJeTK6SVcXYaTFbVPmNFdBCGdimfLyj5A1znSetPjtPAMVCpsd1U6MArYhWtEEifHtEENGYjBNwbL",
  "key29": "3TVf7yQEbtu8WkFnYEbu1zAn7HC4GzVH8k9AsmUwFf8wTUWeC6oUdE73tiFRizoQUNr6uHzCgbAP2azDCTZRX8n",
  "key30": "5c5keML1TLtWNTA5b6CKmpyk4RZAgu4wD4Vy2Yd7nsuLedL3frgHPn3WBWFkJju1yJ3KRAYnMekGxhvq7K6BoMgL",
  "key31": "51vb5yRx8Unb2fdQ5VMTkYK6ZsqMYZxD87NsVxvJEUm5gkiEoDDUSWwtXaFJy7mp15vewfYcdoVXd65RoMxKZQ2L",
  "key32": "62QQVECjN5svn3NZYFU4FoPpMvTYwdTciAkDYKa3HgLUmZ8MN32nN2nGeFcd9uR2d9MtZsRbCK86Qktk3ephaQXB",
  "key33": "2fhMsGkfBn8xNcUQozNfLV5pf3oX2kvMwYQTg3DcTLfFTnRR9DmitNQFUDYLHDQZKPGp3TX3xBRudK6QBAeqJuz2",
  "key34": "56gBx22DtJDS8tTVgtkstwJJQiDkUG4oH393D39jPccHTnJx5EtLJWVqz3QQZson1xN3eVG8a9rGeNy9eSk6Hgu3"
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
