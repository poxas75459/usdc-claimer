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
    "4R2to5txQ693n4ahTrcz8YqMD2rYbV1gVgm3vfZtZze9QAzdQ4eqD8DC2UVGWhh9Fa8K4w54JyTUAGW9komF127x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s19y6PkNKTNr2rH6RQJ6RauNxDpfDqpEQUeWAmnwKgfNj3HHm8DGHoH18gez1Gm8woDZcMSxaYLgVGM1LupmkZK",
  "key1": "4QKZpMopu4dCmiRDJyw41KkmqMNKjXEqE4Z2sPQexzGg517qe8RirB2n9yMfxhdwQWky8CWTzZSDVts4u3Snxvex",
  "key2": "4NTzgtRVrq7tmMrKfzSyGMUVVwba1DRCBGy5RqPPmsdcUZ953Lr3uTa9CY6TRxi8Jmw7byyugggakp69kqm8aUUp",
  "key3": "3E8PDrWP3vx9J7AUA2sECdnGH2tZBaL1MgDS1fMcUJp1KrBnndZzchXkMXD3ZP1X2PzhRe6k1jhjEzckff8QLd4q",
  "key4": "5yAPTp1Tp1qJQdj11vvJYgvSUgnPMtmdFzVFXBp6PJWGVWJx5LesTRdfJwjQXdRQSg6dQdsuMLm2kke5uhBmkVhr",
  "key5": "4QVjaJVWqksM9PJtwvuKdZcRz5rnVUJMoCyyacCsBywEnspMWVEqe45di1g6pXqzbcBe697su3hVHRkQ6NhuPyUc",
  "key6": "2SPxvyEuBieBRZXzSdBFcbdgC6hBCyZm172pupjJfnXPBUyLULbQanqSzcWPoUNz3poaaVJXUm312DbKATwLUza9",
  "key7": "kRwmGs2CkUdVNz2oCvmE5ZF2WcSh3zquWwFXU5KAd6WyJHiLUvV6CNByJq9MTc623CX9CKHPFj78oweMYbUVxkV",
  "key8": "3wQbTAaDoPvr6i5S5x8NkrhxhKczu97m8JshVagoS35hpeeRFRp2jdKeFZAqTs1sMU7XcwXTy6nwGDvHWPkHQQEa",
  "key9": "3XHXnn672Jsw7SLu2MkmyWseo7t8Q2tk8Q4gZHQdui8uyDghGMrBx53QTNEXFixmuEcdKFqPGRjsePjvdNdGJqtM",
  "key10": "3bz188CAF3eMumVCK5QvnFFPF7KV6bSemoLdUA5FJaUYxioq7pVzSrgJ64GVP3fs4SvoAMYf1CFHM16V2HSxrq6a",
  "key11": "VfXNhAuzjcPBJTQZRtVoHVTA14Jotx6YRWnJzfXnwtZumE5WgnAEq3jgFs9SQB1oiNMqbC3PkScKLsaKdAZ5j76",
  "key12": "mv45ANGzu8jFHJqmF6CCgVeiw6YoBGw1NH9mLKGMPZV5FC7mYzfspsS6rs2ijbadeETp3EsswC78oyKphAxtgdB",
  "key13": "2q3PQHC1zbiSBbyJKmGxWHPaKK3ETGfGyQkhPBuZoTNeFHCuPZHeZWYPii5213prNkwMNwmbZdrY4FXNG5xDMjjJ",
  "key14": "H1PZqMLuxk6x7gb9j7feXepJJ5L7C9k4micFnWV4GgvMSuF54gyGpPy4yne7zTeqUNhmKumRMd3y94qj75mUugg",
  "key15": "tPbmQAbUWwbs266png3BTUEhfawdnctaTAqHx9uvhkPKjSGhrUCdcERZn55AUqNqGQAWqbaHPHqXGzKsEy4UAEd",
  "key16": "yrkgR8Z8He5yEUM14RTF6zqUWHfNfJvBbZwX9sUusoowQNZsTPJZ91fG5EoNrtFCjCY37R24BaNMshaPpJ3jxak",
  "key17": "3J6bEpZpnMnTjnmqgerF2ozRCgwxbt63cL4y2D3g2Drj2ADQ8rujru5R55zSfpz1XcKyAaxraZsUTNuDuFJRNJ3S",
  "key18": "63zudzeu4izDFpMLnNoy3mSSyogDcMssd4iaYHWHuxNG94BzbsH8pxZ9QEJjnDFvx2fmhQssXyViZoZSYeTTFX5f",
  "key19": "4eLpHDxbaZtTDeq7TWzeth9fjVA6Mhc3t4CvgDfRNasnAEiDDnGneiZmBW6AebCiNqoCStyE7Ek5eWPJXSt4Tkpn",
  "key20": "oYk1wfDvgzFs5UHLZ5MLgUw2zT4NTDZFxvNWdDJHvXN7ZFuj5ysJYtruwLHGsTLf7jYKrUr8TNTj5s9hKNae6b3",
  "key21": "5eneEF148zfJYfdvXZjn6wCgEYTt2CYrbvocmmx2FjLZvas4nc2ksXZWjiX7QSh2c8cjf52jnkNipTpnegCKqYtA",
  "key22": "3wu8YAJ24s8s8HcpLr99dmvPYthojKHJ5qe8LwHTykC4GhNBu6zKewpa1C5WbjnUvNareLjuQvRh3av6Bdifv9CW",
  "key23": "HfFT7nRbrQ79bCjkb6UGv1rEg1FH9qJ3XzjUWaC5FbvrccAmvj1xgpYtuj658ZidDExh9CGKtWkgZpQbDSSNWSE",
  "key24": "5BLTZ8QjqbYLymGBdaqyf8wervkQ3zBMMVg7CjzrRGRyKsfxEEbUN3U4ZmDapDLWSRMEaVonYQyVqXCHveW5q4Hy",
  "key25": "519rokmFcLihQTZXVguNzgF5FUZbGkeQNQ4HCEQJixf6iSWKN9LmWphhZYVoP71RMgfsLhY56JbMa78pYrYWsxcd",
  "key26": "A9g4aLf2voLdZU8TmSH9NvvZGkdDcGtijmNiwHeS2WzWoarB7ybBM6gvxfQc7XUQYUoenTsFGhepzwUFopXvhFm",
  "key27": "61Np3FvKyvafWZG7tFPtSRrPFoHysM1HRnVUnBfYXbqwTAkniaWEMmAbeY6627n2miNQPbvN3QcWiviPuRREZYTV",
  "key28": "53oEdsAgHVNzZtsAN2McW8KYHrifj6e7XeKYJCuqmudaZciSNmDv5FRZUsAVmZkU5as3q3Pqn5zax1M5bv7yzKxX",
  "key29": "5HTssvTLmnAXMmLFB38jkmQjPehDzqbWy4omd5m3nHsYhksyqh9ffvKa8nzbJ9ox6RfTySyRWNr1wP51Rx3qgwVa",
  "key30": "4GwyQYBLg8hdR8DksWbPHspwPDqfdTVqQntrGdRpoYbsDmiFyMw4w1VSv4R3JTuBAtzTfKboMSjUrjiGGsFHZB7v",
  "key31": "2uz8gcT1E7z2Mii1JZeeRbR4ktGqAREQMDLj8AiPYNVw4kk1UHvwVc2XztCZsE2byJg4gRCt5WQvFLLNyRyUJ3s5",
  "key32": "uZhZtArbg1QSYBpddBagab2UnQHrCjCYh3gJxR33hLeGY2J32so4V4CL2yfr5gF5wqmpDFTxiw5nZMDFLw6uUJ2",
  "key33": "4tgLowTrrqhZraf8rdMsoDdtvQQbyWSajwAKVU7uwRckRYsuWzoZnmWux9vQN79PopmwkjfGg5uGcUCGN9g6YTNm",
  "key34": "4gW1QaQFBWP8wT7Rg5PdbPxduMVM5YiK98Ykm6G2VXdAXSke6DYeaC4ogC3Pgvr1ZRcbQPRx4nBqa85bLy7V375s",
  "key35": "3Pw6AjHekFbUmGzWyh5QLQwsWGGEZ6J7fcUE3GtGzWGHVwDN7TFWpaifa3jujya8a2KSDzBAm696HbELhqMsni1K",
  "key36": "6727EqA3a3ujAsHcYfeGwnSjUdshtENdm4QbSsMAt5eq1coqpZBMhNeXwtcZACXv6gJUcQziHgFeJQ1aoaFTLe1g",
  "key37": "2gGtaPp7LGuk5fjELzQFpj8yQtqR3VgfjWDgr16nQ4qRxqrbe6wbqRQZG8R2yPwsjFTZnsCP2WLBoPe9DbKiiPfF",
  "key38": "jz7JB5ueY8XK9Z8R23sTBgZsKRs6p3LeiNrQq462T1kuTh2kZ2Co6TrRg3y57tjn8PefUiwh5Z1tD6xgBULXmTE",
  "key39": "25ptESZmTTciCUFkEeFzYxSxRkcsGMmiq7i3ANnZV7cm3DieXJwHKeMoqPZv6X3kJt74QJADGW6xgWvWSdgg6Mpz",
  "key40": "4tut5sZsyfuecRdznAHSg3aMGwPnmPc4vNJpKNYibUuRqz5UaFdv3UhcxSVw2ifeo9sRYn5joMikSP31EMynYMTF",
  "key41": "2PpLuTmrwnRnJLKAmztpMowWyubRkh439wcSsW4cS8isPSNbc8nWmTFx24Swg3x6qA6ZzebapuDimX95siB7ugec",
  "key42": "5NgC6RkMhBhfZdtC1Kz3ym7GLLgAMqWHMy653jsRB3SWV4bQNB8unbK3N4LaTZCvVP7v177uxg8TcxT18K2hAuMA",
  "key43": "4FVYUYAZHKfGmF7k86YY42pmrPGbPR8FwDta6p5F4DCNY4DYyabhn9cZkBNutqUp6cHVdVipvwNZfVZVVPCAheoJ",
  "key44": "39VYXmuST2uAsmTCMBMAo1m5iZreejiKcNycGxA1hq5Ci42qGKZdZ41bFhBhJasEm7mNYFbuefgDn5Ace6amU34",
  "key45": "2XfVbXxGbBZC2ZYYZk6ufkeK8Zsmz4iH7UJSULCm8srvRbLVe5KAiAWL7P4v4rAt2Dv3NW3YczM9Y23nEJHKPwG4",
  "key46": "31Mbvfxu9nEtdNQv7ts4qNACqBeBwTbRnkL32nUs59fEGomp1WX7sofUvvEow9gzxrtL58ZEzN2FX4KtRqxcwoUF",
  "key47": "yT9E5zMSJQvnRuoZMWCe4SWYAXqLNmwSzH5QpmZo7oLSgF1EiDU7AHU5nHsRGXbFvCLTdiZ2TUPHfGtVoG3qqZr",
  "key48": "3bCXtpJ3sUShwGaNN9xhFA6YWn8d2WVaaGMYBdU7NwSxoGTRC89NisnL7jSauPu5E1KxgtmAkXr8YbofC4rq64as",
  "key49": "hRGH3LBYXTEuekLLmgUm8nXBSjL2ZPCTWkfPgGYJKtPv1CDins522AvBZ3i6RsyMfxn2QyWfQVyQcFypVh4Qc3i"
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
