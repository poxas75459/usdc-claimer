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
    "4tibFimTXBULAcXqu6FTBTAtn1XDHn5LeBS3hRfBjTqoqjnAfFCBmmkLGzBUR5txaKzdLFQkWEbDz5XAAJJFAqNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWWRj3Ge2guUAHwjwuNyndWgNT19LHkWVFKGXTUyJGW2wDohS4P57sAkARcijLKUGGGAJV9JXp3sQ7dVN6eoX8A",
  "key1": "56QMyWoSVUTnimSJB1Afhxfa9nQFQdoiAEgXuM8J8q7ftbdzQE3ox8VAKgFQLD4E3u95GcxkWkvxDJu2qTQnfo6M",
  "key2": "eiafmggBi2mfJpR3CR3YDfdNt1Dwg8BBNK8p5ytqDwPqvP3qkB63avwokAnxRArYXLhUz33vcRcJbSmSNam1qWD",
  "key3": "2UsxRNgQnukCmWc5eA5Xe4gd8tPpGPZwLJRhxBMPXYkguBW87h1HBL1STUBM9wsqmrYnSYJ2NWMTcBwNKpR7tut6",
  "key4": "4kVtB9V6i11AtnN1ZsVcsxka9Hrr3HUXcLtsmCgZD5ps49JdseaTonqyfu35XifaZJug6Zj3WBHNmxMf8yRXSJ4F",
  "key5": "Avb64Ep7eGqBLAyARVVU3WUGN9aSpXyiFA43RJZUuUGp4i2d2VwEY4Ex1qtgzDHti7zmT76YcCkgNvMd6Fc8eRh",
  "key6": "5UEECDLjedMJXNYQ6JT2mtmnorGv8ebejn5D7SX8uDsTNvhEmAXNzfVL7pcP3gjTV65wEDrjA6FjmgZboEZ3bYDD",
  "key7": "5v29C2wimP7XZ2fqS9wGZTRe7CPtwvaccd8Ub1vi6VVs5w9cWLTL1xA8kK9UsDntYyauiH9b1XH1TnYp9RcG7jzC",
  "key8": "2xQTSp5hoPC544R7SnU5JY6v2pSDB5HXzZP8sKQPS3UySGh6wSVzUAoMs1Z6aBpSPVLncd8A9Hgib4Kej5o2A6dV",
  "key9": "qb9TgPMg8QBESDRicVqPMdGzciqPByPwEYhyerwJJ1cjsemstW6VfkZhdamLqoXUGxyN1pNyXPjhsFzRHM3UxP6",
  "key10": "49sW9yh6tqg352udvt4pzYgywPAw7Jegr8PQL9RWGyR8qKQMA62avTnJ6vshC4HF9zCdEM9EapcSUSf7kzWiDeUW",
  "key11": "YeBJo2kpiCNqAubR35DN6wRXzo6qn61Rq5VFUdbUfQDcgKEy8PMLQtJZVQzU1u2qXB6u59pMopNxYbMMsWmJJpo",
  "key12": "22dEizNomyD55y6V3npZ7VXC21TLyLmTGvMcFutcUkMNF5bDTifp6WZWebpt2wWKu9rqf3w293yngfeodjiALbyQ",
  "key13": "3UVA44JwsZAhpftu9Yui4U8WNKmTfr61YXSZXfLiveGqwgAFq8TZxZYRFgF9KRdjk358jz4TGQ2dQPDJKmgTmnq2",
  "key14": "dVUBvGpwwajS4yReeTTVZPhYMRvk2wtRZnpQPEhMpJ53B1tXaMkYY1jZKyBUaLdfK1jHoywh2YJ78LQp4Bj26jr",
  "key15": "4LjUhGFT4fYEdeZeDZ7rfMy1oEUyBvMRPJBNpFJkyY4SPnswsTwZa5ggGCPZwi8unjqSEFKzctAphyT5gNX7oZ7T",
  "key16": "4YUZHCNRWPjMky5JLNTLnu4GLeH1BsiPXEzeYWqTL1CY1HJD4JDuVVRh3ScW5zWCUqji7pEGYGXtvxdbRhvX28Kh",
  "key17": "5PeBt6wGtiscbWHNpE6ExGhqetojqpxu4TqTu38ctYKHUefyWBpNK5bx1kkwG4HMLQtVUo9NVejYVyK6ghmp9vuH",
  "key18": "v63UX9YXJi7VnFbf5yzHTd2h7nmUtz3Fw4y5Xt75sWZAXAge8eVokVBLXUNeazycWAZ4BWDsxUdt4t7QEd6UE7a",
  "key19": "5r386dEL7xF7mpFXy7SUy2Rbpeuut6P85AB6qAgpPRcRjTHnFG8mRymKBnEpRh4nGcPqSea4aKLTtM1YdR1WQ9K9",
  "key20": "2j8jvjufHpsSfvDyVNWAkC5eqF5KCbW7q8XtoLTg2smXP6kWfeMg2rudtRRdB5CwBiMZmqMrv61AzH2CFWatFvSY",
  "key21": "461eChyGQHM7mjLwqj39xuttNKWc1YaL9HF7sgQsev4Kmu2kztM7hN77Qwc8Hj4KXCVjTqhaTGzT4sha4WfH9ayE",
  "key22": "3qcUSXxraEtNSsCbP69Nz9NuunLLfhf4WoWQJxnKwZcu5kNrFgt5WnAtBzqx6Gb6GsndmGQEBPTuaxGoXUd9Z6XS",
  "key23": "27DBWSWmRpGw2kGaHTKs6xdaUDp6BAkfi8ch1SwG8jPaTGRpxpwyyQeMisJLuzPQ2QxoNZJgm7ddi5Kn1ZCcqtGT",
  "key24": "q1hhfjcPbeDjFmxbgXSUAJjjD7iSKAeeM2QMsQvrHLx1jCBR6YY8SkxT2wsL9aAd4viCSCX5t3LiE3caei646yr",
  "key25": "5XSKiERHvemve2gFvWMafGEfj5gMApWGniqU6dJWPcWsbH6cioeM9bR5VyvKmURbqyd9aq8jyWvPdEW8M4Hm91YN",
  "key26": "2yKsTGk2m8V19wM7Gv9izB9tykwiduvfKHJCuDgNJzpNU5ByF5eoXSSGPy9rdRyHse3pZ21DMvxhYCpCpqhwTEZS",
  "key27": "2BzfqECm55ywy5NoJLnsx8eKQwmXFAjXqtSwMHVzr64okhgYY9ep4sxSPj7v8PaP5i9dFj7UDQfZAbDrAGFjgEH9",
  "key28": "As9aAmugz1thNepcQDXqpX5U3vSBPQShvbm9ogqfm1mrSwj2R7XkdBxMMgtr8eyhPN15LDmxnfxZjBKcz6Gi6wF",
  "key29": "3SJStYiQ3XLHZqJA4T39aQRWrKDWHXBhBwRJty3Q1QnCZMbi7cxDq3BWbDHBzABC2MHcenFdFXZmspKp9LJnLguN",
  "key30": "33eJsc3QTd1nfyJhBW3yBjCXiDPGE4rtfoeGsng7SWRGZhq88UUD3r1TUN8CCmJjYHstjP7uS78FieE8JM8FnimP",
  "key31": "3ZBJYTe53kebVktjyjZcoX2jmX7eHrAodAzXXYvjWY8cNHtAwxa21QhdU4BSvvpemnuw1e4dwxXHaG35U6BXDSTq",
  "key32": "2Rt1bqT8FZChVMx4DotU3FWPpQBC5dB2j7hp3Autz4xbqmikmQKnAMJDfhpoTF277jdJskZUsd9SRKwBKAuB2yQQ",
  "key33": "fcd1uayoTZiDtJfpW2kE3Wt3FpnuhCKjzxanPSQUhYn8H88mM1dx31ZSHoJSbpn9RGb4vyT9iSUxuxXAxBWDF6w",
  "key34": "5mAMayFZGT5u95SYWcCpUYjb69wKQ6s3MKawuAbrBBxiHLapnq7wDQ7HkLLA3BWD7CpRzyNNgE2qgk6p345xMVXd",
  "key35": "39tJayA8S14MZaGpjxcBejoU3Lhd65Le5Nq1SR78FuC8fWCrmoNNJtG7zFdjsKhQJQcs5FpUugRKKMLc8GJhwsmW",
  "key36": "3HX6tHHkqDTSkcr4b34ArcFJwzypTppMYv5JJyfdwjJCxC1yymcjPyT1Ea2pS8ck71C1huDuXy1FkSUEQrbMxrjD",
  "key37": "63xYTPQCfgvFe8zAvXs198dk4qagsFL9cpcF1VVYpkcTDP3o3auKG5broDaF5bd4xSR1K89zizjEwqXbUTpMPbmL",
  "key38": "5FDLbHK9xEUcpkpAzmu79aGFwMHy3uqyvprvtP7t2PHJfEpkbE8obchAuiMeuf7z4hbmm1fxezwARRqpna8AqDbu",
  "key39": "h1rit9bR2PHpvdbndiA7Fmxuc1NXfyo1txRCgJ4gDHHRpDU79UbVZzWn9i3daDMJLMZJfVM8TL7B9iJ783ZoHbK",
  "key40": "R32pA41WvExBos4TuYYxnxctke8V2NzaUm1Wxh9PbT2JKTHRTvpivdLNVQ3oJZbo45sLFEtM3P7oc7YuTYgWrQ4"
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
