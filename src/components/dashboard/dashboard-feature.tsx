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
    "2ziXuqepDLhMrbNa6V33s4EprcX3ygemuUZAvU1cMtD9RA4AULpfC6qzB8TyTwW8YC2YBuwc1ZXWqrZTPpjHr1MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sc3SVgHpUuqdUJVUzSdwHcxfUPKrbrara4mXRVjn2VtvXjHxgTHunRYRbMwkwZpEmom2jtQHUnffkKEDLv6vTNf",
  "key1": "2dQ6yGBahRcLCkE3iQa2eLy7tBwU6iDmvYF1a8LdHNCFaqk4kabYBtur4MJ6nhdMoW8YPcxmYJQTQDSn1uae9HSc",
  "key2": "3TgLAvHinGnJ1tKvtJBB3zoYKKKHKCPJDqjYpL5pEc3TzS3NFWaZQHWDd4qEzkKuPoM8fXKrMvyETUUFuyctzfsi",
  "key3": "4SWMGxR6higPgK1v8dXQTMuzd4vbnR1Q1M2yLAdRUDfB4pbKTHYY8g39cYZQ3cS9FR28QGfN7qokFjxSLyGMxJQF",
  "key4": "4Rf6GAWrBZCJYuWXJdEP4PE1GnvKXsc7mwdWZJzPDEzF69ZWy3jeUWuEW6QdxfWQ5BScqjG1cAuT1Lya2TQGrWtc",
  "key5": "Bbz2e6T8WG1L3nwaKrjnKAuKiYTUHiZEGbYjz69cDiAe62u2jdG41T9YEcLxAkw18Z5HjKeU3ogzbviMSJbiZ53",
  "key6": "58F91ntKo3BdCzirgHMf74a2WgqezKumspKZJrQChufRDqHwzeX2NiqGmr13fPejdtMDdDH8uvQ6X9JXxhhCcCad",
  "key7": "3FdpyL1RRVukcD8ZHgxsep3YVCzMvP9ziB6nVZmgxs7wmqQCFtJmmpN6wFxSq1BXKJpiaDkC16AU2vGaNiQ8QMVa",
  "key8": "2reiu34xdjkvJozuzWnpsW83QgYrHQs3u8mQ2W6qCVvQCEVLQNj93oQcK62o23kCDqwJppp7rpvedrx3HN3y2VQ2",
  "key9": "46QPYbNxS2xJtr3C2ixtezn1xC3TPdf6Vj75KBrhFWRWHLC97x6aatgdpZjRZRpUb1oA5svZJbzQ5udtyTarHSRW",
  "key10": "2PmLLm3cmg8KypvZmt8dHj8qxNxks7r5SE2iLfVMk48QPop8CzbqSTpcyCjf4dw9ph5MgC5eL9JhwE1oEVicKQes",
  "key11": "4gg8xKwEP3uvFJUVDYHqxncUG8qf4snzuV7oMXeKPUkQgHqTfkvcyCWeRqKTiHPBcUCW3CAKkrhwS8c2jvs43Qit",
  "key12": "4U9ofkHX2uUv8cuRudvhL5SzFqsgc8Np7sUkDiA5jWiMXEZdqmJosUv9SKdEHmahN6T98bR346YDNTqNJTK42EnL",
  "key13": "5K1kAM7SQUZ4meZjpGSb2JEBKDbUDuFXExro3STaEH7e1BUdC4nhXqc5ojrx2nBActEBwxvuQEZQrSPSRveKHy4w",
  "key14": "vZx4sazXvXLjd4GJybEmNtrkE8ecAyv4GEPbBVM5AVwgRGCWc4yXP9AKaG4iEUfGep3wbsgfNEnVwRkSxpw5CuX",
  "key15": "4XPYGH2JqS3ktZEGo5GuPwcXUNvu1pUmA5d1siCvzrjd7SuRauwejekRMGj37uwEFJwgyZca38wFVkW8M1Jp9kf9",
  "key16": "2hRLgoj26abwpiyawnPUVj8JCri238VSCfC5HE6SQxiU9MqmPEdie6fxag3eextC1Emh3tvUEfsVzEhd2xL9tyNh",
  "key17": "5HDWrTNfApLreYyz5BZ36X6nN98zW3RnzBVkj8b4xVNpZV2sKSHdjWsaZrHKVFe62eFrTgxLWAsbPYMReUWUgLYN",
  "key18": "3DKFqK9k8xtSUSs4bL1Shg31zf1epYqA5d6WN4CYYNEWGKgeneYVGuQuMvcGdLkFCtwr7kZPQJLT6gYSGg6BKryL",
  "key19": "3TiSxYjX4Qa9K66nbhtRMtJgPqJtXeTbSfNA6RCQ1JiUk6Pcz6KdMLaXuoHRo3egMD2ick2Xz3cxEStjLhvqkSSW",
  "key20": "4sHsgR9jfTs2M2YDAir1vdn4cQZyTcdureHYRHzWJUcNFpKVWJdkVE5c6Jqyqxmk7NP7taJvPJ76Mo4fn4Xxispw",
  "key21": "5FiFCuxrcJwK6ev9AUePcD4DJgT4ksABnQpMEdJzAk9FbHRWXRZQ8y97ApkQH4V7tdGPsoxSvCcb7V7gW1MS8Wvi",
  "key22": "3pAgMKiZkaWXUkViBjazk2q2PqGW4Fjg3oxEqJCRijBM56bNoRDDiFRqN9DgPP4VyzrzjuZDzqWYt2axrvMALvRd",
  "key23": "5ovirVA96tDrn2Tf99GkGSoEwzoJnK1kpMc6VFLJukMkweazyfW8X7Njrhf1a67vWGKGnyZTEUxjCHXRa8DZkmdE",
  "key24": "25y71E83kN5BokqPcM3a6rf8FRuaHXN661cKs7hqnAcDFhqTk7ud3ihiS2t72W8Avu8Nqwnx23RuN3k8JXJn4opy",
  "key25": "t7CH5DxjM8TDYB8ULMoEkkhbC1ptnCJoZ1zxC38awfEd8uu6u8oSmLrgyvzM6rTtvuGsTwbp8PV8CtwkTkDmmky",
  "key26": "LZXHtti85AUTJ5JAniaE8mercTkScFoWsZ7sLNzUEDtXGTZkBQX1yb37XHRzwQMGmCnd971ZtVQDx8Tku7dVqeN",
  "key27": "23oHm23nYV5zyDAk3VV2aCrN13nw6dtRFHp9rE6Ld3SQM78p8FGjkAuxV5RKHpqoLtuB4A4eeDLQFBD5WoRHkWR2",
  "key28": "3gcS5ozJZALJYTFwWmruk7z7KLLJMFXWx8rYhuHiuB6bYrJYWyqkfV1eA4ToNkZJ1tFfpsCdTDXR8jtY1S9T49wc",
  "key29": "4zKxuoTaMpLVkXfGo5qKT5YrWagitMMym3piXiW4dmzRm84QtJfcg3HHqPDb1f9A82k31PK2EBgEAf2WYAeuWjQn",
  "key30": "2NVzig6odBb9CWxyXRWfirXKSRYnSVXVXF6W9nndJvZeh57pmVxCNoTfdF2vC46vjVEtxiFEc9HdWAVYbrK6fgci",
  "key31": "2z2sBk64jPxjsAFwUpxu2A1KegG9jvdLABPDwSmy1xQMiLGHKhobLg8fcoJpR3e8xfG7Fz8tv6bSKsZx9nyj17Ck",
  "key32": "33Vu1mVdHngCJAoZwaVaR2x3aKn45hAYsrqHmiVwLYTxCArAockLhzDkhE8EtaUW2VUhVkcxTrDbqpHYPbkF1hV8",
  "key33": "2zJ4Vh9kHcKRF4sE8i8iYGqBvkrp8rnBjYxpVGLCiWHN6gzEQVbwAYVmsj2yXxdnFiKfcyN9EzKtZYGxxP7fFPpr",
  "key34": "KFkm5YrrF84eFp5RgtHaDKMQ8qRq56x5WQVjHaEdHuxUK2JynHqZommDbmceZkHTSE6iZ244aZfmFEWk8x6VYAc",
  "key35": "LjhzT49eRjYAmL8aZK74o5AxyomVXEzzB6JYUUTR8PVaYUruXo9k2GQV7HkE1o3UUstPsNJButagAu7oGTWfM9G",
  "key36": "4CUBvgUErt3ABV3atLH2xLq2bqQ4i3ho8a1zjSSrVDXXP6iQvM3zs5wCC1836W5Zr8Y3BBmR6zraMi1bSSD4Tgo",
  "key37": "53Pq1qEQnqAcv36CEn5tu8mcdtKT99oNwB2dXZgeHuMmXxYxNCF6ddq3pQfFvSn3q6fof67Fn2jW58kqLJ7MxAch",
  "key38": "572kfx4jcwt15ka4auXdPpKbHWeyk5oUmcmVYNgBsKRSLpG9gnhynn3KSckX7oGpDuCmHaumdgMrWLHJ6AhDSawi"
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
