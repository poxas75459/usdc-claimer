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
    "4mwNLsjePf1ckBSFRJ74qfTHvH5CVrWjyC1PJ53WZAMCobaBLTMvMW8ddcwz8eyxabCNzA2iJrZWhAVhXMZjN3As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j35oMNKr2rLUfYuN4P2KRkYKR4SvTCrvRsLsMpeLx8RcHZFXDEs3jU6Z49fWoakCMgE9mVdVJunAE4MLqta2UPu",
  "key1": "5uYf421aQeUwhxVrSZcGTzLXoDLWKyGeHEbtPiasxpwSBS8b5DZSF7L8dn8txvLi3RBrJKFn3a5SU4akvrucNNao",
  "key2": "5GWpp5Kb1jPYW547uL95MDStf7pPNcofRo3bv967bkUK4VE1E3SxB2V5CXiWsQHvPBc4oVmHC1AxRYoTmtkUc6DZ",
  "key3": "3k3gvSWcAMKfEQXakHpkR4tQF648GXZmRwtYKBBy5LLxgPgzCzLpLysaokC7L4r3sgWjkUzPy1rLAgVxvTR5ELL9",
  "key4": "51qFhMyqDVKD5HAiTY3DJ59h4SKbGi5pi5PHGgnNV1LBNgoNdVpnmBZACr3tDPaauBub4BAyNoaJJTWTY3oL9wY1",
  "key5": "4YTrjSqhaA3VYX4YgBfZADrqGQmCR8oAGCSUv8oDmfseM3xXmEbZrKHxRCrk96vhKK4H96LuWpC8bnDuxJ6tmNsn",
  "key6": "5gAkVdpiDgw5VHJgvEdE5RK361MBWTD6kAd6MsU3evAWNg8XZd4GoBMq26sysVrX1jwALvA5GuDdTLzYV4KVL5sC",
  "key7": "wGY6Dy5ocCnG7pdw1asqTtYVhyXGp1t7fqvkAuGCfDMgbPLExUDKBt8PDbV62J6sm77LSdTKfHWdzrd2FyKVvTW",
  "key8": "yp3NAwmaSqUur3zTY7B6G3sfE9MsyHEpjHoCMVA88CTzMjHVyrKaHPwHDCQJ3zWqkiGNeGdqbutqp6ULGk8L8fA",
  "key9": "9jdaREvHCgVEAsaC7KMHMtd5YBDGetASvrtsHAuxkRoWbTGFkmrS1eVrGwJ9Qw8bcag8CSgWma53QbDsruxf8Pj",
  "key10": "Sj2v9qbR6mLq56XDWuDQEWqmpu15uM7ogpC7rmioD255uE2eYv6SMeUprHmraLsD9czgauUfytjUdQvU2svYiuo",
  "key11": "5Kod5j8JjpBkqwkJMhE66XoWsyYiwGCbxWk6NBqBqte2kaogKdzkdu9gCuHGDNJKyrH35g5eEnDdwLu9euy8Dt32",
  "key12": "5pdrMUHAKoNDZzmeeUndQx7trxFo2DHqaiuVL289TN8ouyRsvnGqjYu3ATYgmU3BnYqppChqvBy7QzmqvMza2gds",
  "key13": "2kiVUcA4JMLFSZckwLcCpTN224ru3sS5BTc1j2BqVrfVSb6nXMV9azqTSPPTPcTY7oThKgAhpps8pQM78RpmKtUm",
  "key14": "653ogCK6S8SEfyP4CoTmy3Gr4D8dVQUk4DjWaX9LJkXvaE3det5ktYCMe3FcCuyXBxDC4z7ArgmxQf1tQ6rBYTG",
  "key15": "3ryUrkYWUnivFPuZpHva5HrpUYhtBb5TyUA5TTYNacJgmUAhXGwnZGKxi7e8kmeDYxwBy2Pa9sBY2Zop6NjgRs6V",
  "key16": "3BrpihHL6VdLZF9MHQf6KxMtUBgeTUoGGqCrtpp1ZbmB9AJzcXh9NiqPP1smQ5RjonwEzoRpVA4comyuTChwCVdW",
  "key17": "2uv2HEvExjHka5tG7NoEvd4s246rQf7sfbojJdrypvTdpb7q24UDyW5cuYKX3yci3QgrHKqzGaikpYtCx7DCx3ZZ",
  "key18": "5wD3kgCTLuGZ9CvL4ks7hA4aZBQoL1zbKaXx9kLQgvfkV74u3bdSFpFiJrbprDM2vw2xUaYZiCQfc4WiVMoYc5F1",
  "key19": "5WjRmQYJAi4ZbK7qiXpRyfA5Zmk4S75BmXKQLWL6GaZXLoNWRoUrzax78gawEDrvNWFMHeCFA3vB8gH8AJB56kFx",
  "key20": "3rbzzWZfG2xDpEbzH5ZnK9mHGtZwSnMBsqfgwJC4zTjdVyTYnW5jC3yCPHtvQ5gvE55jPmfPWYnuJa68VWyhWKxj",
  "key21": "36pDGEdHEhpKdbXAepC6frG2MvdnYKVqeXPtoYYB56rcSEN3TSGK6fCH332RVTLgjib4jDD5tp7W9ZPzPmhvuaAy",
  "key22": "4MnX5ZAmuTRnpe47g3Da65mKJWwPbTqiWw4y5p3dCx5tPgr8nfCCBtp3BDuydBegedug4bhgo4f26PRW1E1N7ozD",
  "key23": "Em7BPtSMFbmWqPM6WbFvkufUbzsf8xuRSZpZedHXAYT8dnPbhAZMVYM9wT2FWjaDfwW3bqkdMG34AtY1i9u4B7N",
  "key24": "4MML6Q7kngQ6NZxZUUxZGJ1RubLFT74u7uqijPQA66X3tpzT51kLbsSDhPxP7vFVe68VqtDArYfknHtU4j5DuBQw",
  "key25": "3hCafHPDeHtYZxD3cXVumy1RjNEVYUr9JBQdb5zJtjCTYyxj1nvPkmhsFRbUTDSDbaPBHArVHjhhyBuAoFJznhvY",
  "key26": "4hvA7teYaEQWvPZsfdLUcbC4JNij6mr6AG2MVAoiU3jwjVSLntBndGp9n9WrHgN6YTmu4rc2X8M7MW4wTNVuA5nw",
  "key27": "5LHL34KANixTgZz9oZ3Q7h4Bz3MhWnwmmzCcUAHae7QQeviP54K2iNU57qXRUvb2hXb5Qjohk4jjs2LNuYZafQKS",
  "key28": "2jHWj2RhuDM9wZQZViqYhtdBJ4ozdLP9LAASXic2EzC1cjq7xmJJmVmKv6ntetwSjeNaXhEFHu4AyYnSJsSUk1Gx",
  "key29": "2gd2BjQgJrWUiZggkJcxnZKXp1VqzzJZoP6XHzXvMCCYcXiKu6YXkLxeAsjw47V8VFEJPQYfZhDSX7tKumLW5HjW",
  "key30": "3yY2cWKHDUkJmyj7eGcsQ4jhuCnZJ38AJz1YZGzhfzn1wXVHHaK3waTX4XKRCXVw6hNWXNQeuuSnWAix1sZ2Qrsa",
  "key31": "26Dyx2ystarwWqLYuhjyx2vfUSH1oLgbSKS22A4cW2WPwLYJk7pj4KdWJaqaCQNJzVyPRU5iHDmtYRdFdD5g6fAC",
  "key32": "2ZtxuQuXhnPXrjHPqg21TyJAyTGJhNH1AZzfTZBSvyRrpFCpPnYDHEtzHet7Z9a5pyt1Jzhps6pffCPn7iANRsGd",
  "key33": "51FH9BdTjqUs7wPgU6v8a18Q4vUL1eMwNNBJkt3rMEsm6rpQAtN6AcPxncpdQTLSZAdg13Xrme6oX8FxWkSwfQg3",
  "key34": "5ncazYzhQnT3fm34BqYS9gNDfba5nBe7aTEVzW8j8ARRwHoJ76zFKwvpsEYDUWBYavYm33gh721evHfdMWS1NB7w",
  "key35": "43Zqp8GFDv3PJVQCjdETz7WMPWFzqCmgPK4VwZ5b8kFBhqrAEDCjAGLyZxMEMiGjGL59kB9eFFGADYNwgRAgwJH5",
  "key36": "5KswmQtXev5MKrw8DSFXonPAmHhsnhd1ZsCCByXYLSWYwT8adx48mHtj11v9BiTx5MiZdKgL4wehvhn73PeqVJzY",
  "key37": "6THAoUS9Qnf1GFJw8cUH4ZBbvxaBLLo9fYxJpA6pcpGnsQFzpRU31PUNkehJw9Z1CEPHSuKcPs6P3WrgymbMDZ4",
  "key38": "2YYxXzhU4NZ25AiHuM7eFhmaCzzbdn2u4KnxJxTDbC7gKLCxASMXZK8JBR73Q4oBQUh3pTEbaGhxySecFJhMbwr9",
  "key39": "3wwbPmsyf8dyuZwS1J2Dd6yJRC1ju191gEujiRLQCM2QmExLQ9x7jwSMPbhf6wDhNeZgm8JUPWvCBqbcmJ7e1xzP",
  "key40": "2toF92eXN5pGYr4DKjVMpLZqohB2Jf6kGQUvrv5UYBMfq9KNy4AzF1koxNH18G7wFqusuNmmhKvUw6m13cAPz3zL",
  "key41": "4gCb7b5SDZDuaZ8TveMEgn34BisPAvgMf7rqeSMFa3HDH42Agbyp7nAGzHhLbKM4zFKjFiN7ttHfdB34N3SrA9e6",
  "key42": "5d5qjHUNVfEmuhtCcZ9JsfqSRraWVoscWxNkBqoVwonVvSqnDPY1Qg9kntD4QJ5eLCrwCayS2gvUeVWZsQEAKrYP",
  "key43": "2zksXnPVukBNijoosjGGWfRzLjfVJaSnoRgGn394CqAkCH6xKxvpipT3qwzWNcACnvGU4DEceW84Bvihztz7za8i",
  "key44": "5Ccsfokg1zSZgGkrfwwMHKMyJm1tEXX5dUUKznwSncGh78K54hLmhCXN3uMhubg293BvGweQrXuqbEowpvUDFDbM",
  "key45": "63UbD1cNjbCSucjYoEni1tBb9we6XsQKkK93gPDHKKNCuvBbA8S1jB7UYZoQ3skTz2QjqQXRGWbuVb7bLc5Ehir8",
  "key46": "2gYkDgZsu7Zr9rM8myN8znNZyuhiUVi41Gsp5hQhbgXa45fdymbQvVaisE7QcMBJbGgZCwU59Pw8cQRmKTe2KyoF",
  "key47": "5WZPx1MEJdF2hECeYHRKaAYCczvzVL9ThysRCTcUFXWjQw6jx69apwMvTmxQyMVwJ6QHEc4356mzFYtMr6VJ5JA",
  "key48": "534m33KL8dsZWodKYo122VzwsfbCifjLQvkV5UrbDScq3tYWKtB1QHiycJ77AUvd6nqmMSz5NmD69FqUUZWa2LPH",
  "key49": "5RadxbPiPKVLjyAH9rDYSoZnz3rfpWBPVLec9FSE652mtpiyE2Sea5T4ep3KQDFtN9883dKLrQ2GEJWRMJsNjodj"
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
