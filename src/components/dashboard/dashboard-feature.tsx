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
    "4bvd72nxevFm14WQiUbBK3Xr1WNFcwwttbWVc6QoycjvT9jzjD3jg6UCzayZMkHivvDbDC4SXVhgjPjPsXdYodEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6KjBTbrNrTHauBJXp9edbzDWr1UMXXSCpLkBXs5GcdC763grXP8moWsUgnr6qbhBFdLfvFcYcbWpx4Xcvs9xpv",
  "key1": "47Yb6YGEeJEa8KCrUPbyCoQMeKRbj1eQCvKC8MkumQiSpM5e2Y7eM68VxDVy3xCFy5GHcncYYDWK36LajUcLsUaM",
  "key2": "678XTLtR5Sw67wUGouoeM85mRxENzMgced9xfLWKFRz9pXocbrkk69ZVFY6MZScb89X1rUdiLA5yygUzZyasUwng",
  "key3": "2KXh3nothr7sEJvkVBTP3PoGd8nskFCer1xD4U62wjoeojV7wbm7fRrhKy5DJq8AW1KEMyuS6tHzFjRbHfV4Lm77",
  "key4": "3arzxvfgdwk2FtHAGB1PBT7UUn5CmgymArWiQWhSkzvAWtFWyKARAQXYxXnVJqVt6QcDZgXYUn9bXtRLTiGo4wNM",
  "key5": "4FSWQmpVge3qwdmqJWVwNnazYLexPkCbBB7oFgKmBjfzLqu7xEx9iNCRaYSZeJErg6BesAm89E7njSHxnsQrkK2p",
  "key6": "4PBNXe2DJ5ocvUk1WgdkkGDW49qBQwnU5CZusmVXNRrE2GAYhhVQZ4VdnWZe1naVDGXyKssdX6HiGyXhGg1AjaqW",
  "key7": "3jT23fic1mEcbVWQocBx4Y6G9bcLJamrm5N3ohTkCPDEo4Fc77Uj7Besdv8dkEWP8oFGkQac6YJbGMSkJXyMK7V",
  "key8": "3yYL2v5jajQeTbqey8V6qVExUDdw2ijSTbWwKu3V8L7UBLKiyBKC9spUNHEPG1gtWxxeHQZHJKFLXTuVdgzELVVB",
  "key9": "4XLLvzXf7e5kARR5DgZt3VdEpDpNdw7CVRPyPyqTuwEeL1fDqBefRx8N8HekS9HbZ3GRbqAuJtS2M8VepQsYVN45",
  "key10": "2YFGkk48hGgqNhjHNsMgTj85XsNdQCDnsRE943VNSra87gm4VNRxnRovybP7kHaLAdFE1wmpT6Qb6ouAq9RGQRjX",
  "key11": "4rGLXnAXER3ptLbErGe7y4u1CR55tnGfgWub54iBCWC1GmMCUnQv9YEKeUwEoepDuw6a7YV3xXogRe67f5ZxfN3K",
  "key12": "3Vu6JmYP4CsJ1T9jexyZoE66HB7KKjpF1Dg4knofoPcMi4oif5ygjbi71DYbag9A3VyHooWYkNqUC6ycsxDeheRg",
  "key13": "5Fp2dDsbNYqdHe9KVwwje2NpUSFViw5RETcv8gZyymwd5fvTdC7RQEEidQYsqAwcNNCFjVwv36bJtvreLTVDRyqo",
  "key14": "35fEktq5jaq7dErc2CbLHm2uMgc38ZU5bpipw9dxa3fwgBtm3qRYFCUf1v1BKD6r7QfoDbSVkGj8NN6kYxTrCFdP",
  "key15": "4n9ACzX6rcME3eULMiHuNqRYrqNum6VFSd1gAKoVUKRJrnti86uiVyowv32bi6S9tVVkDWhGAj39PaMPFzsaMzy7",
  "key16": "31o7iea4w7bKki65CyNTohvvpaLZuhaeAJnbmtsYkcBWxt2o8oxduoKD443HSBWfCEJCsVbyGPwU8XnimLyfHzM4",
  "key17": "5tNgyDvJE1QMTkUgbuRVaaQHu3to9CddVfMU6SN9TDB9bmDnrBJ1tnNaiydRGrhQs4bbeCbSdHL5i1CVBfRyoT6D",
  "key18": "3zQm7oQhb9KqVQY7PL51AZvJrZXQsooq2WiCFNtsR5kE2ReGRm1VgxvBp7xt1oKVUVdQVV9xbXbxXT5xLcBAJPGk",
  "key19": "5aVBYgZvz5ihfpDD4foAdUEDAGuUYs9U75xoT1jV9US4b6soJjj7Twa5Fah32AwoDbwJ4DXbRs91HVARekMpHrRs",
  "key20": "4Khza9mxV6Tqxw4dEUqmr2amurnjQt4EgSTrXhEvA1Zv9z1yDttWR9fZfF2iAgABPuAkgFMps5xnjLZUtCop7Nor",
  "key21": "2Jzx5niVzezm8Q29XqCEmHGxQySG272EF6uHNFVFo7vYhu6PXH9vw3vX9v7mHKedSvCFADUZYAF3NGiX5GEYeXj",
  "key22": "WaE4SkhzivPD75snZfY7y7NKYagoi4YBf6RsuxG2cEPUocKMnKoV18Ujqtcu7Sd3tLZitFXoToYxoYoYwFvo4SE",
  "key23": "4wH8WBK7PVJfH2KLc9JsBUydSxcvmuR1Ew4fMvNzu73WNqpRravwDwPyi3Njm1XMd9i2okLRx1RVwcDiNnCWqk7J",
  "key24": "337HFPZyHvPNd4XBWMibAip73DfqTejjdtK5T2L8jfHBPUFLZmwJz6gJJX7i4674tm5XtfkfakdHNP5uZMMD6TRe",
  "key25": "P71aAk5y6ZsQt4rgfUXofKZ3jD8hnBGggNzx8ghJXVEKApwST3v54cEtASxjc1oaUF1D82Je74RSrEHMj3QfGgn",
  "key26": "2zrh28u26SbDrDMEsgGmPhXGX8nuJfGjxr4YP4FNTeNLVsWbMfYoLaHiKFDcs8KyxZQ5BzgMHnynKCYFGqjtKx7U",
  "key27": "4WQHeAUZqvLsTeTtWfGeh8iiQan7oyKo8ckQV1k1trjC33hNLQYLYKZh1edPLNX1woVAAQHzcht9p4HyVFzue6dt",
  "key28": "3JwXfMNpNqivfJaBgMGKwwmumekgTYdQRnYzi23hsR4nHqca7JGLoVdW5p3cPF2pGJEmbfsxuD8QmwsqxLHbWpba",
  "key29": "25T4kczeXaMfXWdh26r5UhdjsXKPPKXC13TrnLhYzJdQeRYeUNWre9asCry26wuYAAZ2c6pHRbZPoGiGm6xFYaPe",
  "key30": "5So4nLDVU58Nkg2ACFUT1m9mezrqDM6Xa1mrenjD2T5nbDNwsU8whCYocntUynHpB3v3q1x4Jk4aj686xWRUbMCw",
  "key31": "4g51LovgMfTxn7GDEaPz9JnQjXo6LdUisgFKrumAZ4HDJrfK2gjK7uCq9aW6jYWVkH5b4mXmUKqpUzXpPkUz15uB",
  "key32": "2L62RE2vkj5n2nTYxE8xtCaU2VBqpHy8yvpfW7VgLN7xbGkWdnoePN9qDDgeq8BVTaopNpfZqa494VX4ofbxXdch",
  "key33": "4W7cywGETzccT2ucCVVfjqsfXETbeQPivnSgT3A6PLrNjuaMyicxb538sBUyxEXXxR6dXnEGbbrkaCuU3QVscivP",
  "key34": "3yarEY8k9sFLiMYSTsAmfGuHqmRgbZEHtiCcLr2wmHyFP6ji1wFo739523NrZSBPsQrgoZ6HyK4FyVqrFXcs58hx",
  "key35": "66UQwwfvsAKZMdKdUpcDFfGGPuCkiVF3VfUArVpFnq9qHnwAYRFaZEtJ2pxefFJvBrp8mt6hSZRDsqaZ9N9bhojT",
  "key36": "5weM94f57TMED9A4enRZjy7Lm6GRXFeSZBiz2tqJq9quyihZmtNTKaNuzZnb1Vdg12TP1mj1vQFUUvUhyVsf8dFk",
  "key37": "2YZ8svz5rtEtJRH6qsY48rDcBmfXKJTL1HGpFcMnWdcHjm8FXfaZS45R4gackni8wZLdt4N6cUE4ycf22fX4NpNq",
  "key38": "3dra37iEQxy3dpCjz6u17WhqXYnUbEZZqz23ib3RqX2j3PCd3jhvn4KBSCxsKga1FyGcHP6gunxhivN27rnNMxAA",
  "key39": "4KJTcegkLa4cvaRXPXgTvoLUWqSKj7w45RmEKBzJwePnoRJ4MdzCarb4LoE4yzSXg2nUomB984T4YjS1G6svHU1G",
  "key40": "uVrAWvATV7wGA8UMFfqhJT9N3V4tBiJ3FieJThvhTC4AmY3gEQjieNi3E3mK1LytcwGJC2FKCViJioCuBWZwRZY",
  "key41": "5oi6PnKioLNbjdm5aoozBFkf6ebxZwPSTBUkz6xWQN5tZWySNX3dgwUwAMwco88wUNbZuWwfPoNPx8vMsCLmPTrN",
  "key42": "39ZvzaCyaLG28PLTihwZmoqK2AZLbqEzLNYCkNXiyvhG2n4JbAHcAgarwpXY1wNzrC4mEFJ63ZYpB8fcgTYiuHF9",
  "key43": "2HfQnXkDT6R6JQS3qrd7NQVcaDWGziEnHvHjE9EPQftabhMV7zn3Rj7cYkNCQwzwmtZaYwBscwq4cHHnjy8XDzty",
  "key44": "4vs69nM3PrD3NB6Lz2BoNPe7sVG2QCvtZTR53yS3jxn8KSxM7Fz963qKuwCoRWhvXxBktneFWCcn6rMBvcGYUkKH",
  "key45": "4fNAXLdB52N9avT5HayEq7eWUt4EjkXh48LVogBM3sd97UbewprBKFjfSsj63zyfaLXKjNKZNVqjqAdppH9vGoiU",
  "key46": "6uW8Q2oqiywSU91AbQaHZQyv2sHV91vUa42Ra8Zp6pLz3D5Hgu6XoydXmviFc1K97rNRQWFUVwLewQeBbkpwtZS",
  "key47": "4986BaqCiyF8YNX8D5fBFeEGX7usVfpbcxT9zLQNAVB4eb9Nxy5bkRixB2MCUnJGw2tbwY7YjUJVNbiw2sxzH6d9",
  "key48": "27ULjn5UQWcRyvhLLUGY69v2yFUqT5g1WX2Kv325Kjtg9qT1BrMpUMSgssPwFeoj2cbEgpL6vktjnpbEjKvLkFWH",
  "key49": "51kMHDopKQEU2N6yPor1oZm1L5SzHumFg9kknvyW2srum61E8BY2LXQhWM35PDivkYELBhcJgDwWm5Et1qquZiyU"
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
