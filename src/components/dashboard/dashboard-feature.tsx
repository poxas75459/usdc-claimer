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
    "62hacw9fLbkbtLUiKzaWEJBKSLJoZb5GmMTw7Li55q4Srn56Ksanp54pzvf1zLw9XbHt5k3FN4iRiGF5h6hh1X7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXuqcYintK862j6FkiqtePctmxvaoD4zFkejzsz1vPmYBYoAKpWYhuS7GoA2QV7RMUdApVxijSk3NUQ1wgpB2ux",
  "key1": "2kvNncL4YJ8EpitgVdFEqN9DNLhpgbTFhuSKBXC7UrM3NHMPkeFYnSfDfsEFeXcgbqYS991Y2C1bfHAswtji8Z2M",
  "key2": "5N289QY6VGEL8XVh94fqsJL6WnU5G2uFy321hAtC29F2qZJ42mbJWqbxfyYokhrkpxWharRxUzP6P77NbAYpA4sG",
  "key3": "xSr29b7THoS3TZwbQjNrVh5TBze1zrZ8E9hs7M6e1zFisk6nNUnMzQcfFEXVtDTLpZ6brFaPE4D3QRYqRySLzzA",
  "key4": "4vwWMEn1jRm6zSi2xjdLUsTPmK1m9T4pKD1itBbxE3Fanz9azSrzjYVg2TF4D5CpJA4xS4e9mvVQGuzZdGn8XmAS",
  "key5": "5dUwmhU8t2214vMFJvqA4wTqFe2nm27xrFxadLBm646esYq4QMW1aLEh7MMabrgc9Q6cjjx66v7TC8AbHrXG97WL",
  "key6": "2fWA11HcjGLd5JW72WSyM27eqXUkRBFNj6A2Lx2vQNUkzXPmkgiDXLAGKRHUSbBzw4gDjtmpesdirzrzZ4mkEWXk",
  "key7": "4RTV1NirWfpVFGVqmBqwyk1qfdFvW2eHbKQdDXPr66wavEfXfuZJhL7gXidA4Weqj9xp4pKi7YFi95LVE7yLi9ka",
  "key8": "JvWRouNMKCjkgpC3njmEdY4PdyrqnVzSxG8RAuBeDPfbhQ29kTvBK74Lm1n4FrY2XfwVKhDHBLi6A5xH5jHSzWR",
  "key9": "5VFpVZCAbDUMekif7pnV67fbXXcmAuTr2ZicYbQHFyVK5hnBqTB2W1obdyoEAjJo4jxPGGXmooCt2axzWGRH8R7r",
  "key10": "N2DBXDVqkSk9i6Kpdp6WyvioEzRfF4A5sJzPYNXthd6s7zxAWfhBPdRUyAPN66utyRfY7Z5RuZAWcWCbVPUHJgq",
  "key11": "4ByNHq96qHfqcPHRfWQ9mWo1ekQiUfr4B4CqiWQTVgM8VMczjjW7j35AGyG2fUze3AkPt3caXj6GXuw24nunWF5M",
  "key12": "2qfp86gny9JQnhDQyWZjyGia3Acq6huNtoGgqN85dHTBF1i1Rj6DzuavZFUA1ny39k8FrRi8jvKFj7pmuhyGfVeB",
  "key13": "u9mzbjp3iKfwcjMEyWMfWwVNkeYaMnWbdSEnsXM969fzcobirD1wqyrrsWneouTWnAEk2yueQDfaLrj5dprUJaj",
  "key14": "3LbzhkJZ6oLZzV8Gi41TPF1KYvvnTP5SyuCpcCvQqaufrWZreWZvf56pa2yUDwABnXb2tdK7XRrUDFX5JshW9bbd",
  "key15": "3fs8GuGjququdyTcUutvfWzUQYp7qt4W1jWZRKYvzUs91YsgnWVAh7EPnti2EAp7GhoNBkQnWQGtePNBHMMu1zAX",
  "key16": "4U9rRZJ5XNwEc29pFSt8GeE9ZcK2kx5FRhREjuReXTq5RneUTKMJgRCKqt8i7W8t92QSmFjGFNd2R1x6ecuUmpT4",
  "key17": "5unoprs6t54YjbANEysEfuZ9u2fBxGK7PRTtJ1LDqQDkcygSQgfRREvW54ceW3vTtjfqdVjE5mMPwknmt1VvmhHX",
  "key18": "34QXyo3r5aekHEVwn9d2FuzgXScK6vU4MM4cuEn9TvcgK779p7APT53xT5g1Em31GCsHdXaYhuEkM1YUJ4xnPCk7",
  "key19": "42u6zUjk7DjScyu3cY6BcQxvc633G1pSGcA3B8veNRYdPYBveubMJjdcbFWP9cEnPoQVLet9HBY7kELchvGVtzji",
  "key20": "3SSGWfJQFRJJ6F4RoTRsRacXpBKt4MLCBUwLjxfPtduJ6xUWwTPTh1UB9ohQB37XwVduMqfQGBZ8gZFmEjVyRgGo",
  "key21": "5uCHtRVh2Njn4Y57wvLySxQeX6faeszMWcthyV5u2hg5y7LgsdCcHXnSVsknJKXs3QPFmCQXGKqpUeWhxL9Gcx54",
  "key22": "5125p4yBhDhS1nRd8c3cYuYySWHeJumL8HsfGPgKHtcJLUddkbUCiybJQs1TPD3TSUtzYbsjfXwNu81JTLgQdQcp",
  "key23": "ZGhCa71dqWamnkXycucuqyRcninqrc3kZJmYWGUqJYmTFB3KF1Xio9ozNkxFcYBjHvfsHUUmd7c6AcmrjmCG9ny",
  "key24": "23mTr3h5QKsuTPh3acwhtXHkFwDMJqZHoZRpFjYxBpGZyrG8zSHPAtx7GxYEib3xW6xHEF4jejH41ZWVf3QHMm1H",
  "key25": "MgF2bra57iwEgHu7D6ciRRJvWTkTmGHPtnBAdkmxihxUNUNmyyhmaCoFPQZiQAPUJHPiWHLtCKSxx8UfAtSMPSp",
  "key26": "3JPPm91XddJi5WLEfZU8uj8QSLKfrSwLx4i3h8txbt7hDQBycSZNLqC77wqPRmpKz9Ko5VA7KFK1NtKJsoQMPVB7",
  "key27": "2CwbJaofNd6RxUpjsJxAREFvFudyz8v1Q37YuQ1Pj3HeBNPbSfsbubbZ68Yn5Wp6qVuy4iMx3xyBSCd1sRBTYmmv",
  "key28": "4BXyrNZeAAcU1f1MV6gwdGjZ3QVKkAeU96TGPLhY1oGhxW58szw92Fjca4YuNXMLA3voh1AwveV5aE2LJaqLAteZ",
  "key29": "36DSmXHe8vj4tvNWRHEUJKzAAmKaT9SoYcfji8K3bWuh6n4URx5G78hFRDdGx8hVXzcbQyHsKC1UrgeTouf7Pq7i",
  "key30": "3pzcxzbuHXEwFgNGanh7nz8ykb332YmH6fCF72XHQ6W32ChE8edJXKPx5YVuM231zUjNu7nxbYY3jAyMB1o1cgRa",
  "key31": "5DraYRKrSAMiLdu5ZpCFAEiGiW5RoTQMw6yjAFJbPLQkS3QqYDtZikejfPaBmFedM9d8WdrfKuHNvLpeEfzKx21H",
  "key32": "5LM7aQdPCzP3eMmfsBmjRtMvCF4sruB1xFX97sivszxxamXqfR3JuKTcTqiieJ7KHjSTmUzinKfgA9dYmumHSNSZ",
  "key33": "59W9cKsacNR9ntTcTcwuoHkqewFghAyZJeaKkH8zrQwGJAf7KYCoLTfqYvbZ9sR8UNNSQN6Ui94Z3CQaKpdiAG9U",
  "key34": "5tMoDPx5jVR2msp8UvocpkPuirDa5gw5RT21zHq1fCaNqq7285ibSpzHgVLw5AqQRFM6JqHZbnRazC2idEYeNH5M"
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
