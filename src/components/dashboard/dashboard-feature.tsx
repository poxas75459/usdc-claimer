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
    "5t3nTEMSXYhZTgdttQsmuHzysmWXurZKN9wRHHPLAFrCQDvHr1rqpVRqAZEd9kFuK2wYG29ai5uLhBUTVApE3qsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8y7e9d48f6eMSwk3sPvdqEw33RUrNHFbyLhmhivo5UF3Gq9C5Xy3JAmSUENUAE4KbK9Z9bqKXbv5r7uAfJLLW5",
  "key1": "4xoGc8FkLxaVETrT9XkihUKoBJNUg2xNJ5sdAMc4S5816zozp6gpNrEciKtzX6k4y1gvuPdfCxuZAbnemhM8dDMn",
  "key2": "3YoyxqaB4Rj9MvRm5wYKEVqLYN43drjeLwihS2rd17oKEUYotyKZi1GGnNQotuTiJW5uVvNfPd8ZWHMG3fZohhQM",
  "key3": "66QPFbxSojpNRyjBHXSV3JvExWTepgMyusWmCXER213u7AC2buhCSajW91Cu2yq1pFpAViCecQTYdjKVADL2HyEL",
  "key4": "2onJQq4nzF3DEax9NeeGQJ2AY9k3LN5Mjyw32D21hNAvpUQKs8XLyRYeaVEjE4U9Jn38JFMZQZcEvGTY8e7jchoQ",
  "key5": "5YzU4kcfMAairsBqFAztBmubcR3MLypJboHppu5EN79TkZghTTyn2NNEAF7KhSaiZArBjRdoqMg67x872v7MRZe5",
  "key6": "51V79pBt2dZE7TCCHWKCVeWukPYDsPcpEeTfp5APuvmM2q9D5YpAYAtuJZwmidWPFF7W4r2uqjJmMrq22zzqDYj2",
  "key7": "31SWSZCRNEh1nFb9d5my1PSaXWDT89vqvRUMkMxbC8wPCg2YdJ9DNp9Z5YNbq835i5btYx511BVYybs85fDNCXZS",
  "key8": "5stg6QfEFpvKs44fHTmnZ9RMhSi6Nce8Cg966pqie8utPXwbrjwTaD6cRHn3swzgXMsbHk2MLWYvS5uKWdWKb3wL",
  "key9": "ASbzcLPf5UDM3MQS7U1ksn33bpQXd7Cy3rgMmv5QryPTRWBGARj5Cu8XedLXDcikP9RL6hzio1uAJBp5rZzgwnG",
  "key10": "2vqCbo2JAM4YozXGUVoxLp1No6uxRrs2zdMx6QDAHPJJxEjntqdynzyQzMR9x3kmEbd7aBu9yg1uyiM9e92JEjcQ",
  "key11": "4URPg3da7FHiWCzKRTEPBGhHZ8SXuu3NiSPb5SJjBPxS8BKaoLvsoNckZEny7RMKpMUkcAyxfa53b7ktzkXpievS",
  "key12": "5Hk97nFhYZ4GGZB2upVbGoyoFiuC1typ28j9DmZrj6F4HqTEXvP1R4vq9mzJoquXJusLUVkFhNJaY1cfw2G3MtRU",
  "key13": "EVeRrPzyatCbss1j7S9Rv27kxeBNQ5riBjejgbdWUuRCHm23czhLySqNNWYvQvzWpkTZCkL5PeSuYZa97ZP8iBj",
  "key14": "5s7xGqT13V3qX1jHEhyeWYb8K6PVhX954H54a4gmJALxWAqmJciUKGVjiEty5VZscZV9HcrzFy6tvFmU46Mx1tpK",
  "key15": "3EY4B23APR5TC7GtNpkAkNoghdXynk3KZANbJym6FpHAcr7nCZbHDYnTyd54BoLuxuCt8CQPpy4DtZWCTJUfwKjT",
  "key16": "MbDTtG2djYuJF2YW89UzPPifgcFjtSc3UWe9mkeJD9s8o27WwEhLeQF9xPp1frkZrq1RpsgdFRkULYMCNgMKiLk",
  "key17": "3t4kBSbj3j9UvvE7YB2kS34mLm1rp3wAYt5naxzpHNLn1YB45kKz2KCAhYqvfk1AN7G116YhLkruP4R5RpZypM8b",
  "key18": "3fJr9FfU7Eyxqngr5AkjYHw5fNVRu3VenVpHsGKd1ZecBKdUgad1c7pzxwuvGbW8ztG7ZymT4qoAtEfcra8trkK1",
  "key19": "5bZkQPz16q5i7cwq7sRi5bGs8wXpfpwosSQPkZ1V3MVzbChj656pMw4MMV7iRhrdCTr1kjSg8Gt7A8uvce1HD7Zk",
  "key20": "619pr5sH8Pnox6ixaUBEi75sSbPBQduZqBvp8gSRxsXLFYXx7ts5Ks2LYgTYadW6csj4Q1RVCWmJzrmhzdBLc5Ky",
  "key21": "xMoE4NkYZbRW5jiQGXBMRh6BaDRVqjWMcvmWsTE6SiqchzfV98ownYAP8MyVA5aciHBSurTZzsnD4WmLpV14yMP",
  "key22": "2H1MS7JHJvi61j1aoXe6qFnbPhVL8J6tk9Xw1v1fBjdSwXeS8i38QNx2nrHTcV36D6PWMgwwUeg6AwURTHkywBAb",
  "key23": "3rLebSPX3iU6wwBjgvEXZtQru7BTQwzQXqs49Whq3NbZrrGLft8XYkC5pUKJgqVLhQNWYqqkuMjLnHys54gUL1VT",
  "key24": "2FuwP7qRSdzQbKBYZd5gYAcMt1ELuQDH5JTKUUWevbTZ3yLJp2vFb6CtE6k7jdJmpPQpcn5rjMus9F1yk65UbnKz",
  "key25": "5wLJUCczSKeQB5ZatNkC9rj9PnBPCLAvxFLv7ozypRuePPySt4DyyCvosE2BCYKQTHW6ZiNV8LNEN43tiiQgRAFB",
  "key26": "3ndUxhSpadfk7JAPgeLRdjyFUerZXQJYe7vWPLRHBpWxAsraNx2fu2EaW7MbRvZhxXZxTXp3iVs61w7a4KW8Lx2M",
  "key27": "3pdtamYH1wnqDVn1LwYYTsgAbaXaxPLP2Jtv1UNvymbGhAt9nxq69huNEmHUfWtdGqrsW4F1F7Fz66k98HHpFBpV"
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
