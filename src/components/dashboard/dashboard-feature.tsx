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
    "4pJkJUDAPkyDrLyHyH9gj93JFEfZE7BKnoBaZhbGknmPFB5vFgruEk1zNWFHq4LLkCVQ25iXYYfi7gNDXnhBb7bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "486CcUr229hewDfH3z2s3d9w6wHnArosXMFjf2gLD9aHffyvfgkY64oXSkB1cdsUy5Zkz3ZCedagiX7oGoPv1xiV",
  "key1": "4m5rVDqbbbu1ZcuCUrt3Xg6muTiuEXPDLWZ2JBU2Un6sNfLELtWPqt8aMcTgTCwGzqqxx25KpbvxwjYZyymRYJZS",
  "key2": "t2aCQDQMqZEqxVHprd1q2J41BNR5pYn8yA2x75bFKGK81X5ywBhDfT3humeWkFaDsHRfKDUqsPT8hNLVzrLceyH",
  "key3": "21uHtMUroiUMhR55GDEEBRsB7Km1bPVsjiN4tBQ1jUssow85wLmpnn4TEuGF461qEVEWDuHzveCWYSAJCFyeKUWq",
  "key4": "CeGGgqZmCz63RtkytYxp4NFs77ci1gTAjrU9o8AU39y5JiQgBuGxmLA87WVPsknGQct9ZEtHJwkm8auDog7gMVF",
  "key5": "4jBYMZAq67EdosefZt2XHWmeCasbo8At6Jwcx1jtB2zbUtuGFR4bCdtNt7FQ1vcj8xSfVHRKA7auTV4jJ7msvnXm",
  "key6": "3e2cMA5HT3A86frSH8q6zv9sezUXx1LvYCkQkEmtC3SmEY78Z4sdUyxNC2fqQVuteFsNiXAGtYDUqBenQ1dW1Spf",
  "key7": "61c3tGovywhTyYK126ShDCiZWLgwHFADoPHp9XUuZZazfeYCAEZFgrhxUb6V6ChFKAiLzxSr46hHCKj8oa7TJiGJ",
  "key8": "3aGPNFvJkypYunxGraBe2NZzPLC8wdS6HfLryhmNozqYrB3CGZHvEg8pd7yyUQeXppD52WoYrVJmJuu76Adz8Bgf",
  "key9": "52V8pKpZsozPPq8fmo27ptCqXv9vPxcPQ5Uy5TS99fm9HBAztZad2hezmQFcEBNpK3YZS28TVXoyt8jhweZc8RSZ",
  "key10": "9FZJeDR7dobizsZiafZXK2pCFd768taghuCxQHCJ2ojcuYyTn3ddc9xRgHj5GhTcWL1iFhQVC6MPLGdjYa9K9p5",
  "key11": "3gJhyVd9VGTwLhbyohXP7YBTpNittFTmuumNxuTX43jpb1ZYA3dzCBvVjAoi7nNmYHiLFMsuTMKy4GTbDxtaS6jw",
  "key12": "2SRV16bgYipBAVVSufH7VSBT8FEk8VunpJdeEtFHbop8dEi2mEuBfsfRWu9CFYrj5ihun2Jack2QtUszVp7UZfQx",
  "key13": "2JKeD3hTctTSLMSgxg8dbDMXcUrkjbHxixcibsuaR4HkdnP7Nqoxe7xzdg18kjNoxTBnumrVpCgJqSLucaTE52xd",
  "key14": "5dJr3GGs1ev5xLvqzicBo3Ktn7vPrGaMiXVGkfc8cuWACkpKKAgEM6VNirEmqD3g62FvCtGSyorWu89JKWmLBi2d",
  "key15": "rm3uiWTLtWtx4HLxEHQQvitfH7zzDn9VeSrmxAgpqfzgMZayY1DrguQCNzYj1s5vZZxNSnwGYkShEeKeh4WZRQR",
  "key16": "5jECx6Lh8enu786PxAgSG3JtPkVAjVjcU7CS3VdAqJejY5BZdrCjBAJx8DCkjkdyKkVc3RYm18HftTqfhv5kfRVM",
  "key17": "4kjJG29SKwDaBtXJKAf8WF5b41NCiz3kbQxBQTi6tLz2gb38sWYvnEhf9ggYrshUC4BYNCzZygK53Nw7mpRXZfW",
  "key18": "yoAhyTbkpE7rVQjzsSBDCrb2o59MHXiNQh9WMkA22kjdLfUYSDNKCiAHmNuGY8Uf1PXBQwpJBMjTKLu2z5UY1Gw",
  "key19": "3GGTT7JWZ3MrxygUv1vJAuzj3jqxXqQ98uvRiudMTUhEgUQtiTGsWrd4KCK9Huq6ZeEhP5b1vXxiQ4Qu97zgXsJs",
  "key20": "5bQFL6pRSAGcgKofXxh8etJDMFhKjJ7maCqfjcFbsdeVqpmjUg8p57wrtUFDcmWv6dsRHo3fHCPt6PqS4EW1K2LE",
  "key21": "381tPvxyVbHWfJu5biSr9KcLDr4PzPjcxun1br9BasfQrBG3mX4v97Ce6wHKsFxx2gzaAq4E8pECHzPohLwSFBea",
  "key22": "4Apj5qq9cKEgd4RnfSbn25gjiYkjLHBYYhbohcs55bm26D7Vb6yC6UuZi4QaRPfnPA4XpFPERPAd8XdDq2HNPQXP",
  "key23": "3Dw42fyDuq2b2mCibJatH8ZJ3VqyPbkojPuchbiQ1JhJ3miTXjY9vaieTLxfacZc68TBCJXzW5XzKZSzRJexo8hZ",
  "key24": "3FLbTZV9cZumJNy4WkAUY9qFJZ28nEUYHwFX6GPp6yKxptyC3D4qtZoKY2zWSHfjaUR6bFnfk1b3KeRCAgJEh8VD",
  "key25": "TStr5kvqdtgiww47yGJ3VXReEXctofETTs3A6rjAVWjRUeojEDTEE1gCxhjcKtTnzsnCC7FAKB2Hexje219xgmz",
  "key26": "Y55tYtM6ppQfDsGP5svvEksRDxJcxF5VCZPnFGeHnFL6dkMcsWQGfBRuH5BukRJYFJ4LkmQuBh43bZNMeCVqe5s",
  "key27": "5gFFijFvQwu4q7sEu1fob2C3nj4mVhP1n3LVeM7PcCPy2gs2MPprqgJoaRkvMy1LBkVruCbdUPhxp5kmNs1RZ5Ds",
  "key28": "nEnSvQjSmPhG1F9M3hS1p14nkVnH6esTtNMeD1aFHJTpwPbDXnegER94Ea3JmTECjh9LrqoKGuP2e5N8R7RopmT",
  "key29": "8A7EmmCpLR7ntANaHjE7bkTxAJG3koKRVRTF96o494PgiQ5JtgwW6m9nZS8EgudeszkYhNrHpaNTQ9o29URFS46",
  "key30": "YZ11u1fDL6zH79n26Aczg6GNrL7UWCoFLazZFKuZXmg8Ey1yFuRezajLSSRbANheMWMutFNZCHVqSbsgsn9wHPd",
  "key31": "5sHYcQahtkLd13gj5qzXkauNHJUyDp59TeSmykf9FmasawP6kQWF9VNAHTMHSRzZA8tqZgmBqPKgWqiHiRcG4hgp",
  "key32": "4WPWfNzURrGgVc1or8a7nRsSVPVxPbewNLGnWKEdQCowHSuMbRkbaTtJw88M45GcqStxq7QcgKRVsCkbH6mXEtNU",
  "key33": "2H24xBhY6P9ruHknQqxkT1ZtySrT2n7b7K2FnUqEbs1noBFdYFUmE616ju1E3vX9YyHBFVVTaB2tKbB1MMdq3spZ",
  "key34": "MYmji33VTuVt9vgQDFZtkA88bVkcwGU4h43pNWPaAziG8zSTCV7KQ3UFq7f6a8sNZmfGsDtSQd36XjFgH9jR8Qx",
  "key35": "55HxHfpPJjTg4JJqhjXLZ6K1bf3QPbSJpX3e8yoTAVKzMZaakVk7RJqXn6KvTerSMy2JMUmBGqr4dJ8GnenaUf7H",
  "key36": "49z39VqnD9SmpXWrTxeuMBZLgELqh5kouNz3uLkTHVd37qZsYnBDFhYhu5DHmoS5h7dAJ7RQG5Hd66AbmUQzbsHM",
  "key37": "o35Wjrt4wbfMyEh4caJEDotSpq9rZUqv5c5W2kz6a4LpZwU444hJX9fpwER532Rsi1H3cduh6mFciPLyZE2wHCo",
  "key38": "4NP3HFJUqhn8rZoL44TuMCiuCueDizhHUJLSgYh8d937fjJWW2xdhSVPA9cc7Z5MHkn2nNNuZx7y455jwSheHSGi",
  "key39": "RZwUCzkmwjiA9QCkRWwn8KE4UNgCu15g447a6vWmcEEjBMKwNXwMon5x1feE7zWvDGc3gyfHZ3EWikFwQbem94v",
  "key40": "4STHj9BKwmi2Ew4GTx2CyTbzK7zdTMyUQVXxkGJJYjbL4BTJzMjtzpB7spUTL7ZmVUJtnM4coDQHdjhWgFB91EvV",
  "key41": "2iNGGrmGXMeCPys1EZbeCHd9cCjCoMw6M2BCuENj6DuEDJNo7APdx8Jz68QrxJvHwTKoahEqhWT2UcqaC21SQCGU",
  "key42": "5pw75YGHDFWZyoy1rdponvY17VVbQUfnrR4V3h78sTmwW2YrX9xR7ah8kR5MPmUNLGWPJCu9s3AG3AaudpzWj4Le",
  "key43": "5P7bHFUTC5cM7g8P1AKuTDfG3Uo93r3NQUQ9RFyeihxuA9r9L2KBzZPiXvB4YYWYahHeEfWG8zZ9fAtUM5myNDVz",
  "key44": "3nDmdoqQTjLYME3tquJwoTp3dDiimQ7bWt6g1U6Rb4EqaKVxBcjY7fq4BCarZimoPZVZV2V9w2dQiG8J2iH5nHpZ",
  "key45": "4cVxu9koF6idncscqR1d2s2tLv8PLq9LwLrFCDSCxDKVutma2fVEzMQnz7WPpfokcV8VfTxx2rnWXqKaBFQQiThF",
  "key46": "2cf8tKsakGSo4iT3VUZuiX8vt1wQfLuCwVnAKTTCkXNXnWxozX7Q3CaJzmFXkQ7tDmyvUwvBonGipnN9UidqTsh",
  "key47": "2UukYN91fuxupajAaP5b8FV7NSXkJmudhzK9gvT5ru3d66vniqnBCTF9GwhZHwpK21xaemzZMUYiY3YTuEW5s3r8",
  "key48": "4uqXarHQ3PSf7nYZZEFSSsLNF8iBLpqxahP9GBwisyhBoALz5tNUuonnxW5SWf29h3sS1FWTdrbUXQGeyvcVmghh"
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
