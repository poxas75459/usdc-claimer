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
    "4KjphuKLi6aB6DFLTwfc5YBaitnrUue5XhPFEphgMoUxaQ6DnebMrtjJd3i4SyuEE4tpvEZyMMykcAvZESArNf8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFSdWHapSstmkGAhKq78ALHX91EhYgFDAPJLHbjnHXEZtkkFJMW9yoRP99KwRHLLNa85QZwNyz9g3MTHnRLr89N",
  "key1": "3rUkgxnTm2udvMXV9NDJ8YpvAa4gS6LrTbR1w1hYu1Hyt8CVQbvtYcSirS3MsCFqynk7a9uUB65pLc68M4JVfjNx",
  "key2": "2Qv1jKmCKXU2ekd6QgtH8wVyiTE2NBbYwX4rWZwMMnqL1ewdHWHwyKy92J5vCa2EEUPvdzUG9gGApNcyEnchdaX2",
  "key3": "26vio8kTwA7PxuTbqZ9QTLbcVBBpi6iEVigPJoZ33RGXbaw9SNktnAzGZD2zXrgji99KnEkFYnWgbM7Dnm6p7SfY",
  "key4": "fvP6gHPJwqwtKMyL7wsXAbewnrGnZNisPNsuiU1r91vmDgwhbSASEhYjLuCkEpahqifXRfv3XsULVoZfz3vdhps",
  "key5": "HoS5vowH3A9ieh6cLi5SWEEu8guD44Q8VvQ7Cws7mg6aoDRPPV1W2qtb4UrTwaN6V5Hp5bXCTCWwk5hVNu42FPM",
  "key6": "sZCgs4f9o1t6HUNSZ7R16A8yJWZ9bfpd9ZdJnGkD927qEBGdyq7huWDqX6NihC8jxn1QtKDZbWUnyfkurUkv8MS",
  "key7": "w7u2Jd7t8MLC1ownf41nAsKZ4oHyEzh8C7VRzZKx6XDTi7NRardY6Zwd4R6ezVuYBZJSvfFPME9RLHMMZQaABeC",
  "key8": "3cYJSFxZTu5nhsyqv6Sw16ZDuknGPEXXJ4KFkiCeCSmy8Xv2FFuwCDHARp4YCjAMtfADWDhbu3YGwaZDiUhkiWPU",
  "key9": "vkSZKEntoEsbLNsmFiUHhTEeXqaveDUchsHQVWN3PePe7rswiJz79DCpxoacqcK6DJYkzq3yMNgLjfdPwEBYPnS",
  "key10": "57mepwLvZMzrFdt1KJJHivRYW7Eb68iHNhiuf9Dnf4BmpwQ2aNikRuK18YZdudkuw54m9HZqRqaAdP3dhpYeHiYR",
  "key11": "3kdcuQN4FX8cQcVSXaqdHfLifs4LU7JeERDqb5phvRi3B6KGm6uyymbHGbFUJ1JFmDjR216tm1KvHaWtqg4PvkdC",
  "key12": "2AnQtY4fev5FvEMjbYhuA9wCiPBnUfmYWfB2YCZTi3jUjPkb1JNEjPCRD4R4tQZhGyh4UvutdjGxwvL5TXereBhB",
  "key13": "mpaGnL6iK2ZLt4v4Eq5wmHt7VAxCferQf7eoqjmofdDE2WQbxv4TyJ6hr4VP7JKNGMgdiRLbiLhWZu1n1aUiRHu",
  "key14": "2sTTxbi9PT8zgLBasMUEhxbmqZyfFqcWwHcB9YGmSTUGt3NrRrf7jTvR1xBhf66SVByTXuCp5UscR7NXrFcZYavq",
  "key15": "24MMubifpBpqD1V46VWyTz99HiKzDVpVjMNAJGrVmou3iRMxuKZoYtFFBKbtGMJKnj71t4TBtLJpzVNVwjKGjm28",
  "key16": "2N7AY8U5icrRQerkdXMnMbULGcvqRVB4zNx3bBUPcuAjSscyQj1AZR2y4QGsE9NwVyy1c4PxUfG4oPKTVFgwgCXE",
  "key17": "3MKs7t6KwLm7vWKPwPMPVd3NQXKV2VREToeM4xUDHWWW9dkuXkHg1w4pkGzfTqT6rmVK8TadbdUXtgtLd3b7HRZw",
  "key18": "2zbVQ9zTyQjdoayyQiEjTCCDzQ4uovwxTFmZJ92Ev3jk4FKGgeAw9QfSxg1Nsa5UychaSozZySyPbQZ7Nc2PHAjj",
  "key19": "49qsgp15aC82V3Ase8JAx1zbrfq8ZEZb6EpYusQWf39DAH7xvXrCrEZhViG2cdQhshiYUv389y7n5GjNafnXNUCb",
  "key20": "XnE5td6Mxb7CXZy1i73au4zB87cttnbxAbHah4XPX9j5m9HmNhcL8GSDAuxuJCVdqevsEFSBmTcG5CPkyvVy2hG",
  "key21": "QpYRzAm9mhUgSvZgNkdL4NxdBH72RyJ6TXUGpnWqpM6c9ZHpXczyC7bPHjnt89aSuUiKRxjjBRQmtcYxXbUSpiN",
  "key22": "57dwdRigqyv8giYhXaUr5eMCdzGTNRzWPV1g4xxaANVigEUN4s4qdUvAQqxmYLbfVvU1ZDdx9tA14CsazAt28RS1",
  "key23": "LMtsztt8BWLV8fn3ip9cka6BmhRRfrnGUq9LYf3AMqA4TpjFh3efoHivGPQk5giG7HEG86sh4KsVzvwdwasghgH",
  "key24": "3EWBBjjJFEW89DuYjkkL4L4TaVbTPEK2cVKrWKxMJbvPBJ9yE9sz1FvWjXUGd2F7zd5JSGpVcqCfDqMLqUysPH7R",
  "key25": "4vznTFZUZi9PzwMtzg19wZvYv2erLRGC7DvUMfiDaSFjaGr2im4o9EdgLbaCMVz7cF4ZcNLrPabppzs2vRkHBiLm",
  "key26": "43cGL4jmXq5WLSnoseX2cZSBiWu9p7YLquxthaWnWRKn1PhVWTBKdrZeYkUZ7xXDsvpm6nMbz149VghLNnB9v1Vk",
  "key27": "4x2K6Egv3TLVcWM6HyyoLYzDTFDDgnCP33YS5WYJPaLDmc6LJFsFdSi9A79mVFSVenQ8vPrpQFe9QZPhZoNXp4QU",
  "key28": "3PA6bnfYiTAxWQZfPS595xYG7FxhmgtnnfUgNQzsWmKs84A6ryUqLydcApt7zicYYHTKUoy48TSuUC9BxYG84wkG",
  "key29": "2ToGjqxbX9MKdxEepckatbJW3CjG2WxLErCrUZPF1D3VW2WezDpQ5eWm91Bt79DXQXykMyNkFFPprDQV33wnpP5v",
  "key30": "4ra2Yb5tGjYxfae3KVUnXKpCkUENcM11cvzDYw7hWCyeFUsvnySesuFhc1CzQLTVveqbX9km5hdNwEpGVWfUj1tN",
  "key31": "5cwi7owiecUZTs3rZikAtHNLRVGdB1A7jUhwRipsuAoaSCce1THopBNpT52r6dxdNNpqbXLQBQZ2uBovb1hEvj8g",
  "key32": "2NHJmWFsnZLHcR7on5Mqske3g5ccsTvPSaGBiuAUJQFM5Rmp3rJuC54HFwC9saq1mNcnaRpct9PzQQYm38fiazzE",
  "key33": "5cgus8LmickxsCfba8W9FaDjGLM4rHvbC8mMob8F36d1PHKTc8Q5ZLeevJ6ya2bgXXVxACE1P23cssZTNw2K5NT3",
  "key34": "2oD3BQVKhQ3tRdWhFApDTaBdVQHJ1avqxbWhBBQvwEhzuRsCUQ1NwexEXdfdVcwqxY8ZeGU2M7PgqubzTWbw3iUN",
  "key35": "2syf1Ea8rKSE6aq97HwpbCNe3kdEYMyF9biq5nV9xrkZnaXXjgGf4v97zLiqBuuhyzr8VnivUsiu95CRUZGsUXjo",
  "key36": "M7dnoucETk45p8YLPnNvuMRHZcL9Umb3tpfokMvNK3VDQzBVaTf8aaiFdCExuooV4Sw58o2KKpw6JHgAkXA9t9t",
  "key37": "5hKSmwBdd1Msir4Xfm3BvUjyZ2BJNSHxfJMb8QDfa63CoxBW28MyH6qZvHsBXTmD8pFxkDSsjJUKoDqyoDa6sNRe",
  "key38": "mVjcPcz1zrk6nVSCnwQo7y6LJx2LYqHy7Bcv4sUKuwLc8Qm7LF1QSHKwXNWicAXqBxnWxuth3mnxZshanjJH3TQ",
  "key39": "9PpsjE9ygrGG86EPFa6cVgr6kyjZFj8djheupNaTgVhRvgKFvSgHwLCLs4CyHgSpNihUQeXwbzyNjdcUZELCSyv",
  "key40": "5HZ7zSJ33uD8uiehXMx8NAUS769zSRcxG3BNvDJbkCADk6F9h7mxuq5zVePPMwuFftYdTD53mXmvj1LR3YTksqTz",
  "key41": "2y5waHWLdAaGob6s9xUN19A741nLVHNqv38HnYs8nCqPyBbGFhvPVgn47gdSukCNFuqLqnN68xAbLEKaYn199Fs1",
  "key42": "GB7nAcoEUutQp46q7gVWNDrrosaE1QvRD9t1QViCkkGorSMATSEa8aJghCeu2Dws8MVhBvENdtXmf2vuysrCLNz",
  "key43": "RcQWeFtsNTdKqN7jmPo9xqthRdWw9tbRx24FV1eaUTW59JjoiSPED5usSphwYPJR3h7KHdhEM6S26HrGbwkrBWK",
  "key44": "2m84MinqFYCs199R9D8bEq9f2Rf3kCHU62j1xJhQcyVJwLgKTMaCd6ZM89oyNSAjSgdX8PeEZcakqjMHdAEYpWc8",
  "key45": "xY8gmFZgEisWhvBGmQwiVtAHY7cErgdMt7bPZMwcwgKMUGcdnmgxTHP1BFAjXhrwnfkmVrQ35LnN467eaeyfEqX",
  "key46": "3JSpyrvn7xin4bKNa2Rf1XaTBXvCmE5s82Gn5a6611D8AKctorBU8TiYn2tQVgn1uGJbdGvLF4LeZQssM9tSPmmv",
  "key47": "4mxZuvYJj5S16jvnmWFSmSZ4E4VZPSScQbzywCdvtYZyu26uhtVTrAk5bXAZsWg4Yj1EF7iqVh5xrwgeVWcaNjsc",
  "key48": "4Esctsh3FkeVbFuwcPTo1QJ68GiZKfW6WLR5x8BpcgwZviJQwhYUkPcrRkLWoF8NnKRgyzi9r8K3LJgiP28kFaPy",
  "key49": "28t9EiSG6asb2C8wsJKQwcJJCjAHgmav81W7NfyEjGXmKViU5bh1UsxzPtcuecLdFU4Dkeg1nvJeEkPE94tNQJY6"
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
