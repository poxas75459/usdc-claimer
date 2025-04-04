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
    "WtV24Kjxdx4FmAU7V4kc4GvciAKNziALkWva1VQkzuKDVGm6PqrgV9Z4SUYUZyJ9fUU6H3mmbx2PkUr4S1Wy6Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YafbRMJKtFb6zXRJx3BJhWfNkFwtrdEhvDhbW3w5jqVZn11MQDc7HtnvVXswFEw6ZS7b3JaBZWS9eW5aaJZChA",
  "key1": "48nGrAm8TK7cVCEAJQRMtmnUYp3Xu6KQby4tKpJfqJhhFyDmKfD3s1bJhwBxsQVYcnzY5SuFQVqpRfCxaU3Asc4c",
  "key2": "43ZLUf3YYFDfxUdoRSJsWaZLDhfApzq7x8DLE7nBMmYfA9f8NHzX3ebg6LxM5ZrzWzyXj62rNoeqJRb7rfZ6j6Ch",
  "key3": "hZ6MVZXBUdErymQLXYjnYorpmp3xER3LCsgWHMdPhFSN7qR4yW6PRrx7Cq8sZvwS9FQKTXfWv2f4ewpXQ2EQkmF",
  "key4": "663t1nZKpvTKbAZF171bcY6EwcQUvvirNMm8ccRxLP45DYXtiaDgjcyPscZVRxqetnDdEAkbvVZxiC1grQDzN9dD",
  "key5": "2YD9TyzVVjbxvVYVWSf5LcrvJFbm2kLQa4dhkZYo4JhBvxxghu7pPqm8oTnUpBVosXB8J9iFnhdC614q8tyi4VkP",
  "key6": "2bxQ9i9t9msUHRuvQY9Ykxst9eUMKeYKjqPwvSrZetvDuw7pPw9AZiGTXWFvihQERPb6andpFu8b2vxQYQPyWrTY",
  "key7": "21vKbGHyunkRxMY5kMBuaieqq9kFE1YgvPJj9hCzvL3n7Ai9hT8VgSgxBCQLidUum8FkeP9dF6Kdqri2aHkgcBCn",
  "key8": "3kKuikuX7eEJ7ft1m7AVBPJ6t45A5d6KJtJfXonrfJbarPEM33JSinoAyBufVqMSAag617hsz259uTu5cpgaAKXC",
  "key9": "4PJmXzUZPpUAdJsh9HZbe6JVufCmNg4G18CL88NKkf4MsxvZuyvt3rC37WtVMrWP8w8PwU5ZLWHhkC4XvDv7oaB9",
  "key10": "qb8RkZ5LJXD442RNWSbNHU693AYbWZcoi5xKLJ3CvWj94UYJQQAECPDxq7yTsxLjaF4vM9cbe8LdBUn2pXBh5f4",
  "key11": "4narGfHKsSafaV3u8FTTmaxd9iMTKqrwSuKJVhNxBJ2nBL97ZckKUR3u7SCu4b3ZXaVdzB9WqjeQYQouPoWCtV1e",
  "key12": "53ynT9CAyhMoZJ4KTRfwBHsifdCQ9YD5kVRPke1UyxTcbxwCvCokaAnMsKu9XYWt1ab4fhRz7JBFJXJADuVpd1Nz",
  "key13": "DDDybnTKDBCErrGxxJAaddrFJ3KFQ32QYVaCNwC9CK288V3jxmUcZmYkHNhAJ6TJWqneWVf8UuzXPCcTBt1oJnU",
  "key14": "4Nz2Cqr1xS7eSCVhXBrdBr3Q8BaGpmrQCZsT7CEYq6CgbZXDDBwwY7rdwY8TWEZtFCPbM6PsVvx56F3199nBfigJ",
  "key15": "2kg1Z3tHBACgaMTuVje7z3wm7atewKLdvBs12wstgQc7WYMaKG3KQoUvuiTqZa4ffvWnYMoNvzPeATsBEXRdKvD4",
  "key16": "vWzAmLyBAtdu3EPiV7mwerRRp1NekjA6Wuqa2xNRG4AwV1Fs19F4cRzwDU7y3CTnL8vpMrQWbzXDv3Qw4QYNaNC",
  "key17": "f3tC9GuQfDq9hBuN7q341YDRGKATPw3L3TvKaRh12Yxz5Ri9p1wEqts76kGcw2hV8rwZj5ciCYgnyzQhbuwVF92",
  "key18": "2AvyDMyfgjVpdfcumYBgNvY42B15A7hwLDBbfNtCgcf2WhzQj8z1ARnC6voWk4URSQsRvpRHiUBGruR9uSPPoPtX",
  "key19": "4R4j3DmkfQQ57AmKT4z8oCxnpqX1SJGPhJLds6vzBsp5NpWuH1C8Wihh4cwwKmLfTcNCQKcEpsoADrbXbGkrBiQo",
  "key20": "5n11JmkkFkmzTkk93ocBACMU7ZW1ytAP3BBXmuArSkNNxG3uXZ8cDR9EENrSpFVdVivc6gb5sbMPgFoVjvKAddpL",
  "key21": "38U2xhqfTbhAo96br6N6ZK59ouVmhkhuVBgTbcTJJBcv3FrBVBhqhodZNW2FqwFDCBm6EYST3vXhWHpdG5rGiJkt",
  "key22": "3nmMJsB9cMAtyWmqCKXSYZAucdv3NoEzzm4ZyE6paq5VkE6QeweQDVpBRzuGqdtzPaH6QY6P1FrVryXfC6EWYWX4",
  "key23": "TcQ2WdQiLTjysKajUnEsmbMetkM8szvSEgVizgGZ2FvqdyxoRfp9wGosBXHncegLeRX58qEK9YN1ZLpuJb6CCWJ",
  "key24": "3zuGcsfJkHgo3qiQJKbY3efvCEa5SVvfcnrrqggAkNKoALEEgst6edrQpxuA4B9SuxzwWnnPafJJcYnD5mZW2Mmx",
  "key25": "bssb2y52zDPUyDrDEEnXhxZtwBoWEJ4KHFNoXLXJiDgxz5DUNCYReRc611nt4cuazHb1UYv88SgQ1aTgaqxWqy2",
  "key26": "3prU9rCyDxkXZaDiQ81nwgX4YEbNxw6QTzs8m2KMYq3JeqyjFZej8MSEXgUiL79oy4zt8uwq4zmj5BtDU4ho7jJB",
  "key27": "61kdPwKZ3TnCd6RshYTYV35SbEy8hfSPF3kDbJeS2NY4Er4pHwtKp1biG9wVQktS35qAmjmLiFb5ZVqrXX6bHa6r",
  "key28": "3v4o7LSFSKUJvqFPD6f58cAyeUMFHj6KHQZ27Qu6VoiAihqwYUZEbtVqnTccqMdU4T3BPaPeXLXgNTu29Noej2sz",
  "key29": "zrb9GYE84Jryu4ETt2mybZZxhghnwuimVfaFUtcprY4K6VSAGu3tf63aQQGDSAUexhaJ2qzrnrs99azDBMXxw6Z",
  "key30": "2z5ojr4WwSpMqU7PQLRvQsH1gbjXBeP8ED389hkeBTnKURYZingcWcC6Zwft7kDvySenVm57zCHyretDqA8k7RT2",
  "key31": "4QBvidDXQRStqZeck5JY5xRUY5YHktg8kSfZT3umU8n5r6z4t4NMrxVSSpckU4XD4KK3LeP9xaiDdr9Ujym2QEEz",
  "key32": "S8fgGNX9cfTFzekvw56DjuHTzoXGWp123raQKSL6ho78hN2QA3JShkCEaLpp9Rv2Fg5b2Y333utpk2sq6SVmcHQ",
  "key33": "2jXj5JuJFYniPi1pP4aC5zaDNh6CRbPVjTeRBxZkR38c8xugpk92PVZjjFEhzuvwAPauJAgcDr5juQ7dBUcXAmST",
  "key34": "63XqrWHbLmvfZQwLaVwYUE8YD8opXqsysupdyuDfwi9FD72gX2sLoaEeYhhYniVPwpDG3tV3dYumoWJc1F44X5DN",
  "key35": "4Ft886G3n18wQkYNu8Cx93U7C9CYcCXqo2Gm1FW2AjKhvJMJb94Yh3NgrrtS46BLGUHkZgZDS74yhbs1ThLeUE2N",
  "key36": "N7XwgvE8oMoKvJ5zLNZLr1j2JEFQ4E7dqXxLg5kSQce9BcqgsUih5U4rPhdRruMckRu2Qz6wTb39GCSjbxiaX8u",
  "key37": "h78Zbm6WbH2M77JsxcJMjm1wMivdM2nMsi3RKbeUXMtQ5N4f4Y4gVwtZXxvzt72zwKW4odR4fTXQqd4JzCi2hGH"
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
