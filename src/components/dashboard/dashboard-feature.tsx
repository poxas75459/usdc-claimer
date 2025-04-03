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
    "V9ewFKWPzmmFHqQPmZXFjs733dUPaeSkJy6U4Y4Vs5KPdggmtTxaAeE1RRLErqyCj3Jd8tWw5oLzsaKPWYsc89Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uesu8YzwS3PNbwqjidmjhJmpfZ7xL4zKAxatRfcNmJMJzjNsxFe2Lxdv7bQhn6zhxHxgshthFBNzsZYRnVQA1tp",
  "key1": "QmWRVDNnTibfY84XB82Vip16qUkcu9U59j4r57yyK6AA2hY4XR6BDpyZLTVkxpZwEcTdArfiiC6UVj5TmhogeJz",
  "key2": "5b3x1ssA8r5JMdpRDT9xL8iq7JzT4aTDCV7iSqJx3ce1nXVVn4vXU6iD6TB6UA7Gy6pa6PZPHTvGuCNRb1iqKpJj",
  "key3": "567Mo3q7YiF7E5L9ju7Ysp3pAJxVhPqGdcb34PNZp7Ko4hYydXJwRJ8LzcT2Je8C6Rkzv5357E2xuLDbYUQpEtfB",
  "key4": "4NjBSvuxYjj8CAXqFuqoaHscRJ54TaPbMZLCYcgstMj459rMMv54vwQpZ2fTGNVMPLSj2mM5ApvJkewKwAGFdUPk",
  "key5": "2ZrqR7LdQ4Q2xMxZvbAdU24hjJK9dGeRPHacm4H1wPyBGKM53LZYuMhbRcBLEK2Mp2AJrVJ4fBSqag5U1iQDGV23",
  "key6": "3N7ycFbApfhoMuoK252o7a7Kq5AXnSQ4jfoyGkEUR4nQon2AHhB7USEMry4q1YFyZnznxSU9Bz8xAyEYqD7eqLvs",
  "key7": "Zz783UdVKwZa5xgxafmxetmY5GsMi87BrYNpC1bHarjfbr2918muttt9fKwDRee9zWYcj7zKhrpganyM7qy8U6n",
  "key8": "5yDAsztPfKx8WtxVKFtu96kAKAsmhuWhFEXebCWa5uvTgedLUkgNDMJcJimBiFEYqApUKFk9VmJpvikYChFHUEN4",
  "key9": "58XQoMckmBKS3wEXc31irqoPwS3BxqQRGLRSbR4z35bjuADKCwWKD37L5aDd5g7kTEK8Jd2dgQygRoy4VsS4fojs",
  "key10": "skqqywsSSrkaccWemgbmFEbBqa11NxYPX8iwehBMx36ufkjTCeTFtnA8GB7A4a8vQvwvXY93tuLdbuzcG1HWiyj",
  "key11": "3PUgo9mFHijbUcEg64ymNT1RoVxEjFZakWnKxruW75GCx7PxTfDtPvZ5FKKGa18oGosi1iqRCxEiMMNqPNpD2kQz",
  "key12": "2MRheBi6kfRjaG29iKDzjoHd6bYj7FHcEsNZCNpJtR9vgkmhErui4vucTdqjSsfzqBExn8mabDc7nch2ddkeQmt1",
  "key13": "2CqFyyDca1noX8JwCuzL52P4gFGow8XaeyEFzWDgs7ghBKBF7nhjbufeAMpTHGBmE3oY8vkAk9cvyec1EyXsTnny",
  "key14": "3BvDg3FTsadYiP1UK5P4jij7eSKWE5hCkjT3d7aqPEN85UbcEEw6vGwQbgeZ9YciarVC6Huy33cLkXsdVpjLVtbA",
  "key15": "MoLgJXPGfKJuUYrEfeoNeA352yKmxQkEJGf949HQB7dU1WFtXkjMJ7zZ3VFAz53h7woXgqFaCR4ixFphoe5N5Tk",
  "key16": "3gkKvzYucx8Qt4egLs2YPGk66wKfxtiroZ3huDz9qHGBj2s7xWi4p3J5p1rqopstcC9pM4BDyD8JR3cBjn7KijDm",
  "key17": "TtamjwT4Ba29dVoQAqvfCwpkUy6X7SNZx7GhAfQEieh5ZB95j26vUZaceEtrSaL55vHU4bMoHNkntTtMt1kP4FF",
  "key18": "2GLAHpQTdhDMRYHSwXaaRULskYQ79693TymZRQqQN7FxqM5RibgpSi7yN78k85Ck87grpodozSWAB7mLwBNhXsk",
  "key19": "4oFV7UBxzVbDCR7h4nYjQT47DRtC7DKhDw86gCGyUSTP7u2Bo3Q4wM7AvhesD7Bd6KydozT6vmq5phNHZk9TUotK",
  "key20": "4E6XsMJEp4yBDB1njH8jS9UQtziwBUcg9LkmoBHe1EjDWm2rUW4XjKnZH5bHdLUz73boV2FhwPHv3CDLD5q1XYq6",
  "key21": "4oG9PogrWVZpZ8vYUx3ccUgZqB8vvfTrFkoQexHsDvmPgtoZHDg1F8yDWenDaWu2HG3rsHnuuhrteciWQmPTnVc7",
  "key22": "3THP1GF9ieMyikFzAePMbcRQ6fL9Uz9SK3RQpWsUcsEs32QHd7i7MaFw7NnC4kGAfcrP94stDDYWjxANnAHBw2yV",
  "key23": "4Xn8NKarSWmPAyrDyyxqRG4my3x5GNhp6tYfgJXYrTKyGxrSftuaxmtssobSgjNRSXo6auGMnQYUHtPVpptmsxR8",
  "key24": "59ACNGZ2HpbAimjhytgUGpyZ2Rf4XboGo4GSm8iHgsfTn8T82djYkhkVm4bDcMxyvwYmSR5FKsREMpoKKZmiNweV",
  "key25": "9okMoRUyNqhpJHGapsZMDLRNm57BNVqgDTLWf8VmurQdpw8PuTG7aaBgEvMgKjVqqDCrKwrECMF8gnf7zVZvRLS",
  "key26": "41JdZypfGZv23ndBqLh9ibJv68KaDUwEvtADQxfkwdzrDT7nYtVcHnQR8h5w14Q6P7iiXNd1HuZV9o6sRzToVGuG",
  "key27": "5r5daSLnmprCAHbL7F1aypCP2Rom6La1YYGF6mfzSgyqnf1JxGm3SnMA99jw6DAT8enHiqgYvnBmvAGjHNwxYzKg",
  "key28": "39xfkXEphsYCu1J2xhyZqEbaWT1D1NauP2k9cz9T6LiZQpT7yA3PD3v9Qvnt24UzWD7vvUPZRYdfpDRcP6MMJLib",
  "key29": "3PhSb6LfXFt7zNf43CsQbq8aadDaZV4ME8uirBH7JtyJQoZJR1Pq4S1SiRPAkj5JaNtfDfzYrVvRaXe4NymA1Nkh",
  "key30": "44zmY2wrC7J2Lj9s2hr46R1zHJEA5X7rj15rEwrEsrFR2oT66cJi14kgMuswrkTt4FeoJpSQUzsLDGpBzhF3wkcJ",
  "key31": "4rcptx1d7V8LpBwKLjeXjmHGZwrq8KGqeseCwMf3RY8o1fYyVDDPEgCMjwJPXFZGYCsvkVS4aGBTaATRD8aGuJZo",
  "key32": "4mXkfRUtQvvggaiHMes61QEYTvv35n22HsgCqvXanCXyxiuozz5sdmWdoVUL6wEjr6DvThLrRHdzDzP9G2j8aGE8",
  "key33": "2ppEjeSM5qRcDME37hfqfXPTmh422eyNa8fvmmDc19NpYezQmf6DHaCnUk6zGpsvHxmMydVnvsipiXNcfqKg2hbH",
  "key34": "4EF6SAD2HL3DHJWETvcxdZkmkZTghYgTsZJjAfXzwiA7fz3bzTSYBGn7FT6cEmcQY9oWfC3vjj5L8UG1FbjEpkzC",
  "key35": "5umC1F9CrW9QwzVNXVw8Xg3uC8gUexd5wgzPzM61UbL5jNhPeVho28sF7yQxng7WMqY1MTmpLBoNMCGHBGrKAPDe",
  "key36": "2VT4rn7AUMaXx5DS1LpjJd9Lp3vCWbeEHpCZmq9TkGPP9xRjJYauYjrZfASXneHE8nvf1nbXhLJ1qiCZjaxp793R",
  "key37": "3WzpzCcbUsboEDPinupLFMn6p3qHRt8uRSN9bqoU6pWnwJMtKwmQ4wB2NEoVJHftqtDANURoCB3S1CMXk4ZESusR",
  "key38": "EBrkRqAX9Pf4UmVZVoNPwXxKvnokekRM2Hx8focC6gLxciNxh41x4GjefwgzGM9uZEwf9yeofKBQR1Xag5LTkn3",
  "key39": "3F6x9NS1FQpovvrStZgz7jeBG3HewynHiaohC4Qkfh7MFyHjXRJEZ5rjvczzt2vaFFzh6h5SHH5svWN38WqpC76C",
  "key40": "DE1mN6z8L6rVteWwAXxGgqr8cfAEEMPd2ZgdvPyw4jL6aqoYwhfWEZHEFvD5AscbopBwxfhRjWcGaaAyb2bA7AT",
  "key41": "3rwwsRa4sZa13b14L7dxN9UyoBQjD4JEhRhpsV26yjQGFt5WbR1PUEG6PKMykYduvsDG5FqVsBhJPsfLEQKKLnXW",
  "key42": "2NAzbPY1Zw7pZii2x1iJx15QZaDanNUtm7GTGqPZyXyLxkvthWEBP24oAAGHaeyGCVMbPSxq7nGWUL91ichBRiUg",
  "key43": "2v6NBi788Ju7kpYGJ7uouQNfujka1JL5YeRGDfRPxABfajJCkqtVDfWwEc3uFd119cPQQTYd58Jbk3GBusMcVyXM",
  "key44": "2EDuXvhVdwDPr8CqXm9bzQQ8FqUZsZTDvFp6KwyGsuYPVt6tQ4VafvBTCy3jQMAAtTS1VZpY7sAY1UfF989J6GL1",
  "key45": "5qYNMwgvrSNPGECEcL7KfT3gw3pWXGoMv3YRUKzE2PaAHoU1bLFCeMuwjue6werWUpdJUnApnyC4ruCK8a8G8aPZ",
  "key46": "inaafUwTHmoHgzuUuuuJ3bKxt1gYsSq5TYtC4zPnCWrVemu7UBC82e7XPPgMjTaNfamnY86K6NKNDnK3qYE8kyU"
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
