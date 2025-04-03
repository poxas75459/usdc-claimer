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
    "NR3w3WrECKqdpqEbDBvdUxk1japjPsbnHsvREF33sABbxazDmVEEwvgnyxgAL6TFH8qsHi6W4yeJ8PbuwENHNRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "88XG7PGYsyu8AwG7K36XnHsBJqUTkSDnBvnq1G8webRtNXrjoqbPfViKfXeyUmfrWFjWfsWJSMsNLenWewbQP3e",
  "key1": "2bkRBKPTFPFYka3DCSZDFqDkhpB4j3YGPU246wcZBNFK3tysZebw9c3fzA1vyCj73sdsC9HkTePA74X8VJuGYaiX",
  "key2": "4bEYE4E4wMVE5XTBZxGKTnk5KagxMRB3G4nhTvZiXiot4ZuXcN5YigYFmbiVi9KgFHLHQyZbs6BySi8oDwnFCDeU",
  "key3": "n5ep1M1dmdDcXutWnrUCGoGuA9VETEyzfKdFkRDkM2BvNpnwcrs5cFN7SHYiWgT7DKiKj8r6dBtmBLh7BmX6HN6",
  "key4": "5i4dUwjHNkRh9vipQRKEV96AeWYfc56yeMZYSQ6EgVNkaRezhboYw56XcztQzM4gRy3kr3ajPVbktjiX7vCPsXnj",
  "key5": "4ChAQ6ykdEc3g8jms2rYbmXxUd1ucfsBPzZbhqX7j5uXwaYYeufBQd2myEDEPrVDeEGSfmSppDQ8FtKQQBbSKG5c",
  "key6": "qejUzFqfwk7Eb7yZNaJGXPosPRvEctisZ3N68DhyKo6ysLfx1AciVgqRrUxeLrQdTd1PT6wnSp7gLtRQ1gN9puV",
  "key7": "3ufqWUbHirYf6dW6PbzYkaNLzeA4Z4feGcDj3V5oahdZY2gd3SUWBFeZDXC8E6aVGd4wGr7EeqXtkasqeyLS9CNv",
  "key8": "257vnsQ8HeedhFyJqAhH3hgy7MSzN5XesEmNBgBuxpC11ZXK7yCVXtEXMfs6EoekqRkbC9T8mbCj1F591AWvSgZG",
  "key9": "4NTjy96PBnAuWhP9BrKFz2tYXzL97dPC9QmCiDmvpEXHmR8sTabuUSFbqKFRS1LjWmUHuCZPcGqLgEHpZtsJK7yq",
  "key10": "33oVcEDVDAjdigwk3D6wf8Z28THTHUzdTUJYbvjnUsmyzi7zodekAKwnMtf5VaG3SbiZEwBKNAr7VYGug7m8T4W9",
  "key11": "kRWiTXJMmBg4rxWBVmtrc3TvfWcbEn85pCj54B7vURW4VfbvQYsYiRR32noziuznSptFZ3nf5KFG2wfjH8391zu",
  "key12": "2PyxKbGGUEvvnQnXim532AiQ7VYQxNJfEwfZnr2fjmtbmmAyZVTizfmxus1zy2dpUu1JFpYMeXEhxbXHz766Eagz",
  "key13": "5G9k3zd9hEpz7wzJppQqe2izZ6bnJjA2cAQdKvV5qgAA4ho11dY7UcR8TYtywib47tkd4jrJLyQta1Pfn9LCoeGV",
  "key14": "5npKf6Qf14EAaXfhrjGqwjW7mpeaD1YxqQFJTPWQi5KmvjdKFNVTyZPtDyTnt9VEVS7Jz9Sxp5ZcvYpLuQ4JTXAr",
  "key15": "4BBRuYanz5gg8JRoKpco2ALJk9ZR3UaJK9C7C7NXNeABgLZQEZkdqdsLeEeXxykzp4Jjijp59fwxmfnZhJNBKp4A",
  "key16": "3atjupqbDfALyspxzmpF82p71d56xv3U6QCVmDT24bv7KUHJMKvA6k2DX1RVhPtkdvbpUiBn4CG3sVBF8yDpqhwU",
  "key17": "2btEkJ2M7SaQoa7x3svV1Rwsfne8KBCdMuU1n9ztdwo2dGeHUP2NaKUWCvomGqxb5C2JWH28HzW84gyocRwg6oWn",
  "key18": "5LadEY6KfmFNPNwyvKXYq82bZzX4oyAa6jHuayGuboSJFy2WcE1Xe3D7YkqdP2BpjkEuVs4tX37x57NN11jb3hPi",
  "key19": "24DFe3C5nr1QMsRLKWdRcWqmvC5TYoaC55ZNtANtBLp3bMxVGhJiYrHYHjXWddsxr3pfPJck98Y8k3gDDWsnV2vd",
  "key20": "5CsbHx3wBvDy9XVNKqtZn1PLBNY7VwYpxP2bXAAKkVUUiei14LPgXNEgjmwiNKAZLQsQSGr4aVGnQmqNApaSn7X6",
  "key21": "oit1XjjqQSEGPon9pVbctLfrb4aJWVAFyNqSA1p8Sa9qDTwo6h71NcPZdyv3kbSHJtVTCdAJ3rFVbktavBcXYGm",
  "key22": "2AafEfYeFrCFuBYZ3YQd2oxHfe11EyKqtQjv5BTWytT4UMMZr6uLdUGVn1HwLiVWmQyouhjETrNiqF9q6kbHXt9u",
  "key23": "29qUXMmQVLd9sBMfWmWSZVEnLbhE4D7ExgzyWsYBsJc1fRh5XwFDKQgKdTEobgL3updMSuTa76utvyZJ4wZ1RMJC",
  "key24": "59zVwRBwFrqcX6RF3K88Lpvdg7hsG3EvPKQp2qtCA6i3xbxhHezbZXbYvAcGxs3xLY21Jt5kA78zyr99Lv7bRp3N",
  "key25": "GgM2xuX2d2HP64J3Q8bvGpYLveQyA4xuvHf1nyrPyebUoFe1g91aGziKvvbNpJZknM6jPEzGe7A9pj4Qxs8sDNX",
  "key26": "4cmdhH631i7igdx4zL5cDKmDjja5QsVKcN7j5JpLSYwua1dASsUa8TSewhBattSGp7LZq5j8hXTH8by5kjJGRuLj",
  "key27": "MjxHU36YMGneNQbfv1GPRyDZsteuyKsYjKeHEyEwC5zC8P1JQjMy7qaqMdEb3QMAPKeZd29enYuSxkVQaDees45",
  "key28": "zGC9mBxaNqv6u7HKE6YK4EWkFHPpdBkmEoJVjPsMhC6yH8LAxueqoRVGCoSC8h93zHQwhV5oAwxXLDEhJqVWNxc",
  "key29": "26QTYSVyrCqKPv6WAX5NKrPr3M4Nf52FeGNVs9JQrgVKMLPsDNvGWcCCkmWtdN6jXgsJ37tXJHzxhgS1bgJyaq66",
  "key30": "5Qf2HtmXb3ttPjdiEKw9osnWHMdWVEEpczCxVvF9vKGs61fW35pkZXedZxbx9UihMWFKPcsNA6yxcVZokDitJRAG",
  "key31": "398K8U6oRyVBcf4AejJAoxYysrTh1AeUBW179DgLVbqKaAoCVTkR9tXJQ3gYoJCdRh8qK5UCeJJ4pAAMLyN42Nwr",
  "key32": "5wTCLtWEw672zEXTCKEPeuwEeFvJFxmAinKoea8o1Evhrizo2hgu4G3C8mfrvjiZUqm3YKF5mHbzt4cr1QeEJe8A",
  "key33": "3PVKGebKLm2mxM7JqM3J64wWSVZKULso4YaVohJ4VG6NPzndFLEtJd6eNJLBUst62QLycKQ5dHWh39h6pQUv97eK",
  "key34": "2JD1RZdoygnywMHH67qSUSZoswSdes9VZSNzPK6HSMUoyUhgWiH64K45mHzgdbKFsfxZWLsbXqHLUzHyt3fag3zw",
  "key35": "VAkDyEy6WTQZBoiBGE89GmBR7yweLmGua7yhEYiLJSbYSuS9VChuTjwgzfm6HdcRmqZVFi9izJB8M4ALZetKr4x",
  "key36": "3BTYwYTVpawpT4RhP1mHUzqg9Mvqpu9E5YoThVq96ENhbVN2WY9dTmjrWdrZyRHn4dc2ubWeLFnUTnyMwgmdwe3C",
  "key37": "5Pyfsf1AYi1HpQnxmov3R4rxyF4xfeQpiemVFdhNxcxP6Y2UcfGAabsCq5n5UB3z3ru2DuxBJiPWeMcw1XBrZbwf",
  "key38": "5QZaMsMLz2WfwY2ftKPqeHmp9csrCT6iFz6nG2hnW5vTcP7XVJiN8ZNineCB3B35gAkaC4nfsAZEqxwgye9EjG86",
  "key39": "55sqDBovzGNHJ7YmKGAGSBSTLkGdaRxCA7oC88xxeFTiekL7aP6YZiWSrJt6QA1LXEa1A4BrG72Ujc2h5xYtgxF8"
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
