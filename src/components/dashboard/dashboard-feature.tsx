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
    "4DDcdfe1n7pogiTxBn6LPtVp3HvfiqTB2NNyQ2fQ5PQocSMH5bUZCLWHz45mDtfAgDMtLKTX3gwPgMviz1fWzJiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4gdW1GmV9VXpVNFRwBRfWaQEdzwfsYASJdhzHHBmsUzWf3mCbq6ibF17RvRXGFrTyqzeTLZqRBVqK62TwQjaoy",
  "key1": "66cyhYngyeV5zV7MhQXPnchSTf9ZJfVJD5JdNFga7w2YsHBHuKLZhrpB5xRjtapuS5DGbVZjFz4XeLYABTX1rLUV",
  "key2": "5voX6mnSgCcuoKTFrSGkNNb2JMaYtcuuqcMaT33RjyHvC3PFivUvTLmevfTMBQQao7J134aFyJZG79buhw8rcySm",
  "key3": "65jDUfunHTwvNkV3chdwd21Wz2h3dtJ9nR15afUqyxJ7PkRSbY5cHktaGzdzmwLGPYycFVULhngJ6gSNLjBaF3zY",
  "key4": "4wUbC4MgpG8WKY9CMQJZV4yyNnWSqkJxdrn6TNxJhu2Xdp5ccjFdFdpyCecWr7tohkQf6xvWuLJEmTaHM78owq3N",
  "key5": "5jwvVyEohJDbYedAxqTFcUPEa5TWS8AoedVEB6LmR7wFe7YF3moRYRFr2WUAvrSugBYj4LugfHWPLHhf1PgUn6Wu",
  "key6": "31DYaUfAyXoq8hHxQC6XRbCkFuJ3F75XsFLwhB2EQGqrTifyRt4CB9cAdrukZFrXM6EjAwrS84N1A4U3EvkQpLQt",
  "key7": "4Tkx5YSENRKADrEuujRVAMfK9CAgneaC2HyZ8d3f2aTRbB83mFqXDwTG88hEUcKfFZxSXmjVs3rWVEabVMaPEdMm",
  "key8": "3pRrHz297USTGEYwfPWokW8Gh43q29yY3iS4m8qE9L8LLsXHeH2FoJELA88ULjA8yxKS2W8kg6AM8QRB5etHAEsT",
  "key9": "43sDyfgLZKTyiL3ruC7eWcFrZxBguXWSpMVsPt7eZCyVYjqs9xeX6EkoranRMzD4xLHUXAoQcVGHVf2PMEczt8dg",
  "key10": "3DfnETNYLKrM1NzVdXy6SVW8ciEXZXXq25Uapwdy9jP4uhZsLXgbcZh6NVDtkG98tnEQZ3sD7jy54sqwYMwBUQkv",
  "key11": "3LAJPCfqc2ZY4CjQaoUKjavqJqPUccuZxsNikFGMmZQk8ejpMiAmBsdNgA2dZGcgfDDEsDbXtkUkd6WWBKGpfUwP",
  "key12": "4YAFfqccYMC9CUjo8khmdC9pSWEnbZYdgyo4kcSJkQvxZJKSvkTeca3QuzykYDiG1dGmKZpku6jrousfxjKqeEWc",
  "key13": "NHFPqDQoUwSTc3ihmnFkrjATCXKqjaZ65UGCPUDjH25iFZqG7q5KarNio6c3eo8N5MFtomvrd7p5XD8UQjYKb2M",
  "key14": "2BXPPc9x4Q12XHA5DiLogNttAjRmZuL1DiQqczWdMdxc3KJv73Csa9KNKNUcBRL8CQZiLybMBMqZCXcaMLWCbudk",
  "key15": "dJaimDekPL14aR4mDVTVkW1TpDvHEYcXcdmfrtUBoEccvASnkpjK9VsuJBsV7QdhSJ8rpktMttAAMvHFFFwwv3f",
  "key16": "cjjWC61RJ95Nosj5zL4MNjZiJnrsoHL5e8DE5pA6Yyc1tNQYVXqLfpB8SBLx7Ut5k5h2en3sKKv1JNQCXiw1HyG",
  "key17": "6Zcr3jdg4cFxeYfWJwvD5hpXz6az8FQ2Et2U2U2v1nvPZ8oEtfyFvg2hkPu8KLrRJtCnGRJeztXpY9P5tGrG4e5",
  "key18": "4aNthskfDEaoCgBNenNhfpdM4vtQteYLJ6x5c6WgG1YC6J3uA2HAohpcHm23ydfi4LproAMK8iqM3U3fdw3bpzT9",
  "key19": "jJMpW4r5seTkyS2pD1MfSqWVz1LcebPWdjodYknwi9Xiwa8d7CFJGiP6TwaT5tTSbCfGfpjG1nGLLHM5QNUK9QW",
  "key20": "67YyBaNvwBRnvLgSm7qsvug9GyAYtEqjSuAiiYwDsJuF7utvkQRJUH4TS9jigguhDxe7JXZVuHCAmPGA5kCJmXLB",
  "key21": "2oAb2t14ZY2kBr5V4avtU3LE12F1mM982q9pZ5ZkvGBEpZnuxGgVcoLUqd5omeNW13H8TZLJhJhPEYhU3e2W4ASN",
  "key22": "3pydTM95Z78XifKSP3mv1Ld8iGZfg3AXrUxbaWqrQ1exAP5sw7ye3mvognQ6m9KPzuuErEvXoNdk5i5zKHoGxGpQ",
  "key23": "3M2zqZZR653pM32Fa32uPp6RV4DMxuSSBZBsGuo1WemXK97WdihVf59831DiogWCx3fVQGdssdgUReR4aWdvavUh",
  "key24": "3112CsgtKEuTzB7S7Q76Aa6MAqrM15FoWokBTpuRWoisfsVtQg29VEXxVE7ZrP9gW6wB4zJjpm49S6ziBUDjxkED",
  "key25": "9tmj97g7ed7Sq92twGcSLPg5egJLHyS87T5qXEn3jiFev4EuPZsXjAWuL8yky2ZwoMCUi1n8RG9wJUHosBmmTvQ",
  "key26": "48ow6TFpxUj5khJLcPpsBV54bG4z347xEjs1YEVwLouC5bGgC5Us7XaNoHHpX6vNFzVPkEnH7QL72mY4gfWS7PqQ",
  "key27": "4RuuwX9oQLYF2MzXsv63AGEvpVjM4ASghNyLw84HPNLcbgD6Zpm8M2XJUtwNFqc3sFYhAqwYe2Hrwxa7CMVA5saS",
  "key28": "3yzyUDwMAzvmzTCvdPcutXXq4Ss9pRdvJAV2Q8oCWiAAfHwzSjypCgGxtJoSNrexzkxcQgQmxpgyanF8hCJnmwSW",
  "key29": "Gfur3CzBGYDfSUD4dbHLGfxmrB4rg2JZeZP31xNqnRu6FRFswpGnSeFYJWphju1HgZmy6Cod1KNajXbdvFW3QaH",
  "key30": "2RNEjFVez3AC9YhZjkKyXCE8N9EPq2xgAivpSoiqNhdLgVuQmWATkkQ7M3bEdphF74Jba799VvcB1vLmgfMwQ5uT",
  "key31": "4DSGVNGUBQytqwrbwuMTUbEVfruBA3YAy7jpVcGxXZBRjcq9uKXLzFVYe3q8A1ouK3weLpCFgNKr5NmNYUFNTwef",
  "key32": "4VyBQkNWp6osQE6sqisRsyfzRmXXm2fDH9oiLDgrmceTj5Ari6j37sbFNmCcc7MSkH9YunVhXa2bqtYqFAbdN5xw",
  "key33": "4FK4tAmeMReSn2sq6smUakkF7NrqNvpCDDsMfzNkhfQWdZu62k2YSj4vMFFvsFowPQyaE3WfFLyB2SEgkoNCbh7G",
  "key34": "C1F4e2r7wPSR6mFK8v8z1NCdzVyd5fXY1N1RrbzBnUzs2Cq7aHeDU3WnxpeHbAFZdErS7F7PtHapwFmkQ4uBYgA",
  "key35": "5GYXPCvXUtty9rdnrqi6VnnVj4whBs7kX17MqAkhnTrHkuZkCNdNVzLFDVmq6kGdFHZnEtFDjA4M6ANkZCMeUein",
  "key36": "9a3zHXcK3GFfmZ6mcYtYWi4Pz9KhKwqqvQsRYgFABqALv7VSm92fWEjk6wGmHTthGthvJ83MhCFf8bNiwWf7uQo",
  "key37": "4uGkC12FMS7H2FZf6Bwnw3RB6nSoa2j4LUZ1CLHiEby9CxkGwtNJas1Uj88JxZvt92Kk14BeaeKzdXUCnwspGjwq",
  "key38": "3WzGJEEPKe9L7Vj3LV4frJLGoMUZYTQ1LDmUw8GUCzkfbExPFxF9xk3mcyic6yzCbcDVoWp93PyS3KG7NCZbTgna",
  "key39": "xUmwdBBS2znFQgLnMnkKY8PNUxiDmt1ajxoKFLku5r3SeC3umXQwhXNLaegKdQbJadAuVMisUT6KcPk2oKp5APu",
  "key40": "26b44kNZRhy19QVrJRjFSGC8NHFLo35iy6rVcBBoK9ehEjkhHBMh46gVrtMYWge5wbPbesEyfCqT9mdRRsQ1Ntb2",
  "key41": "38kj476vvNytbVtHyMa3nqoJXNsedJDZT1swEwqvYybY3tZN7BRnan4Hi1eJYVZpYRkPoP56sBikE1ZapSQivQP3",
  "key42": "TzqNCQvkq2Cwg89r5yXJTv9H9kEnZxWe417jNaSqDbD7ifM2gASjN6nKPqAE9Kge2Mo2rLoK4mnA3ZpJnsjipAX"
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
