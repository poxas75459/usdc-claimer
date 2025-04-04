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
    "5E2qkDvjhPvJ2wmtZTkqyEJZtiiri1aYa3TdPDTU1BSjsgGfUoyiggFaGA13uh7Bxz7eohTxqLt235xDLbHpGneC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fc2SratGRbh7qrK7eyqip4mvn3gQpHAoUMVoMvNsCDEAdjTdXhnwnFyHFJPhoZeTdDd7Nw1L2rBHVJyApNkNkoZ",
  "key1": "4FjkXPrjFaK8k4634pTdpTBMy6Em649uue3PhLX2mUt4Bv7Wbs97KWwMMRfXXYd4uzpeV17WfV6VFnQbGTVRnwbt",
  "key2": "UYsScfskT67rE6fZtbpbRQVSwrga1DquRQUsFYBhGYzjQUL8JwTGck9cH4sWYWsNEo3GE4zjoz2jRUfkxw6fMxT",
  "key3": "53C1TNqnrXCtgj3UbQsWqsmHDg6hPsoCQFU5TCTY6DuqMxTfEkCifxoGCMHjsnPKb95L5m3KSKZayJ3dBMAr3npu",
  "key4": "5qsCT6xNoiXDhFPuB97yhCtzcBYkZp3U2YhjSAkoPKpZZZ4zEPU56GTEmh79vemCdYcJf7Boo2ZNAfQcdQMRYiit",
  "key5": "5hr7qCjvid9D963Y8VvWQfW5DEW8zLYjCcCG2JeJ8uMbL5bKk7KiXZJBbNxsC3y7MYyytKmyMk8kfZnVwXRcFSow",
  "key6": "47KY9pyTRWizGUsvVZz7WyjCea35uGnYmNqaeRJZTaYeyufweCow6rfdncocL4yeK3hzkBikERRoifV8yAzPh8ia",
  "key7": "4QDYubVwEftMgJ8QDLFftV1AprTsCQDKFtf39foE3L4hzAD18Dawxww39XRYeJJVHcCpYpi5QqPcEL4pzKoe6kLD",
  "key8": "UeJkkiHdNuoAQ2RJnhNwKvyMxwsyp8BWuhv46ZkiXWcYi4vDU8B3hCbGmCsCshbqF3EsKcfkVAfwMU1BRBqkDiW",
  "key9": "4G6mMasKuLu3MNsJvyr3HD3jU6yrypjKRmEiKBA8e46WQsdRdiHGRAr6rRubE7KnuAcdapb4WU2VqSCtxA51ZysL",
  "key10": "56XXvfJ5yK4gi9DoVc2abc98XoDbjSm2tLtL6XPktmmiUTz772v6MJUHMo7kjcXeC11CK2CZHF455YwGgW1tk1gx",
  "key11": "3uCghsotjtKYhi212d4PwcCADdTUkprYS76e5hvgkdnYeTmzoQyRa6mwtEdnEFcjUPA4YZK1AC4VE4NUFPXL3hXE",
  "key12": "4aTgGcj6FJmWTPioUcq54ru1JtFcqDRyF9aujRSjGvw7m7sSc49MWaQBKHfidXMhtuK84xe5UWNwssPsG5BnmQGf",
  "key13": "2d4t9Abzirxh9eUaHyPaKtB1aEift55Hh5BfTxDAABRJb4cYhHr63aPzJQEGTEMQ1k9Z34ph66dhFTgrF956282F",
  "key14": "4mvpfxjfkaPu2gGLsDbrx9hyHEfe8Aay5zi3erEdECoCcTxhgYjY5vq2afAoc3merMBcXgYj8DVTnufvtmAcKV8s",
  "key15": "pPghed5K9S1UtpgKrniQqDi4hLB6Whw2aUa6VH7fhRJK8wNHRCQc6L3MrKFuoormQpg7RiA6yfYULEdSzyNm3nQ",
  "key16": "3WVJiYieAWA7dRfdcaFHazVq6CDYGt9UTXsfn4wHx6CFfwTT5BcdGotSSvxyvvT1NLqL5gbEkmM13nPwaNiMUkGB",
  "key17": "3PCiotcf8aNfF2m5MZcCcBx3sfTKb46Wgi4Lnpv2YGcFyA6MWKmv5f1NUCu5aYzsJBKTdjjmYLT2ihCZnwyjrpKj",
  "key18": "2FnPhb9fFQcDiLjok95bzUsvBvsmDc8ibfZ2tvXmsXkHLPKujRgiNXDrdDJ6PSt3rcT7Q7hYmUhSi4ax5CsWn7b9",
  "key19": "3pASjpKraGqgKmz5kAnHKBKEPrfQdNgnv91VKKHs4fuXmBLnzZSGexhUcA9qPpNkxMCCChFcgxy8ft9wjf4bBM9Z",
  "key20": "2hGpn9RngQzCvrky5CFvZEnLzPxSdXS9FjXH8qj4mB1sGdfCGgnnpdhoshA6bpbdqrzB23mPAwNayP1V74AsM8CB",
  "key21": "5a24oFzhAHfxs6GfXXGdPovGCAdovArX15wWto2EV1YTpqTs3RfN6j1ntKu2dmfUvCLesuPsh8bwk9EEappR7Qvr",
  "key22": "4RS9j17xt7uK9aBaG1T8fTgAaVjjkE1q3L4yGCjeefyh2tsLgjwyiXepCH6b6ceCgZYBC7aXj6XCwe8iXW1gtVq",
  "key23": "5XN2XBXVHwCBuho4hAAJvd1se8cEayGfu1nP69rmuU8Gm1SCJtP2AwCCyH3HKxAUhAAxFm5tamuzu5cthcs7K9Wj",
  "key24": "2kYa7rrQ2GdtC46ZJnoaKQYsJXFZf6tYHsob8bTDaLwESJ82nExeJuDfAqZACqtPVFjtSzth9MaJU1eNujqzmKqY",
  "key25": "fLyiu3CJPK7uWAWXZmKvfAZiN82xnL3teT5238FQYwWihaMpeSRmgaHNmN5pn53b1e1e3CZpZVXuAbPgCaiPubv",
  "key26": "5VMqpypC5Fdo8NGNU8NJUJxEfg6SQebh1XW52t1QieQTadwd1sQ75qKf4FTMK9BMT6i9xH1Q98qVv2ppu3KYf1tH",
  "key27": "5LC47NB38RYv3tpNTLS51Ti5Gok32f5gk9EWMNfU6GJN1kjj8GrAaBjkvyzMT7UJBFxTsPW4RUZYkzUUiLcZ6QyY",
  "key28": "2XJXvGkeoBQ6HRbsjAiyj8A1rwrFmzjarBqYuYmroUatk7W5Znrf9fVMRU4pSf2htefnGtUeNPEEMUkT77bLTjji"
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
