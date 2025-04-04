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
    "2VCaUN23eqbJCouFcGWgoiaar2FPCA5UYXSpUnpB1pvxGy78ZokXMQzCTjxQSmYdnvphabpUctNWdqFwzbxENAeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMrUbijcLmjKiF6zEti8qyBAqTJxfJ5PHe5CbtZ428vz4ifbGR1xF9e3GLLvR6anHfwraLiX6rQHmhqoF61MyKV",
  "key1": "5XtggeJe7C1dKedzsyc4iPNhV2NqvVBtpWCv2sCAUTkpge9sYowHioqnYm3m3jyuWWPGF6pDZs7syyVZrMi3vUXL",
  "key2": "z6jckkGXDTG8tJQKeZyAN6MatD8JBT6nrncLXmWmTkHGk8fqChtrrvz6doCCh15pu8w8dqwoua3nL2oE5GtoD59",
  "key3": "2sFCg6CvijEzVnB9rAddD1ACrCGaRPR8vxvL9hwgQVqFrACVPJoGZnTKzmDXTEFHFUgVfwYvWL2oGbb82nKXeXTn",
  "key4": "3YTJr6hBmNjLm3uwpwprdvC8rM2gZv2M6fLQRc9AZ17YWoMRAZhg9ZjyfWrDrnjdEHwcLYKXPNt3w85sFHrPCM7C",
  "key5": "2C46PFzstS9ogdwvZFiaYntebE8imbwqHGCKVd9i1dYD5VBkDcN392zJr8GUadvLEjyjLEHCq8FLWMK7Mwc22cw7",
  "key6": "28JmEp1rRcdPmpc8tBev74JrbSRmDinPJLB2JGWbKShAzW3wwG3TU9MuM6zrnW69Zn8mX3oMNfECGVzeCPgkXTy1",
  "key7": "4CwFaJAnnBtqApnb35KRXg5AJakEEYVPUnhZm5xZ9DVrVXNHapPgBj2XaJYECsUWJPFSknnUiEhhHPAeGxjzUKq",
  "key8": "2Q1SYREeuedJGq6kmXbFtryQa43Gc5huKESVA843cKdhguNZeVkmy6XNhsLRGC3PoX2Dawh9mNQ5LXSjxPpNwEGQ",
  "key9": "2arVmDTbC6PHy6QzYnguK1yC9RpDZUvDWmPuFDjproBUdLynLcTSZVfN3bcYVLYkecFsMWncWCMstUv358J3ZKrY",
  "key10": "3ADwfmcC5wnz4KuTRxaiURk9ebziU7TBYRmYkoa6A8hay6PYLX1Qi9kZngit1ByRf6PgiJSaKEqGgwYdkUa18qyz",
  "key11": "2Uw83x66o9YusZeCJvW8E9fef2EuHRKckisgApnSMLnCMdmaisBBv1wJ9GsmhUWjGszi4cPn1YJEXyRizx2Kha74",
  "key12": "GPEZN4Qh5BonH9wdMsgxeRxZv8DhZkyMrrY8eYh1bumb8qFz1wphgc3HNRsSWPK9VwBxpX4M8je2gNwEMwJXRx3",
  "key13": "2qsNkH8AAhBGNrpsLbPBFks7cMU3zzBhBG2N4bYRERf4z3rZ2Q7xaj3mxzkv5qHez3RaQe9AvPCyhDw6AdwTRMSf",
  "key14": "55VihRCC4pZUqg5LjBxHhsRYZQieweaZghNxnHNcXj1Y3eY8WCtPiTrpaJJhq3vsrm41dx3txri5dS5Qpn31UndB",
  "key15": "yLmRCMfvWq5mQkPAcQavkcJKA6SFpXygy3MSmTggMVsTamVZAdMk98ksywKtwEGfpjsbFv6HMjtAhqCD6QGvYu3",
  "key16": "2NAhFn2TfpUNLEVo16QXe9BjM6uDqfwYyAiFfj4edXkywP8aMoE7hYxUSPHZkwWahcP2uLfyAUM8BZvjuswdvpcF",
  "key17": "5X8Ds5aDco3Unw3osnSzPYnC5mSSamcdUwUXP952MAtfqWcbud8Sn5MDNBXdcp8BtxrESykcZ7MkEiTZroAKNuj4",
  "key18": "259Mi48eMH4YBt7T74icKVP7UMNN8SLerABQV691v67DoXz5Gyw2jjrKuvbiGn74DiLXJqdysXq7YZUdwjs5xydC",
  "key19": "3Rbq857NTfmVeCx5SeaCKwmcu1nUYHoqRaLpbJzHYYbGNsYqeYAwrPZaaR7NaEoMa9Xr8Sqbyv3MnedWKoF2FuWi",
  "key20": "2UDu5SPF4ddAaKWMWDvLyF877acvtpMjPNy1bap9b3u1rWCFWy5aRutqvb9n29vd5JszNqUmPzRLUaLPp97gKTxn",
  "key21": "49qWjT1F3WqhemjQW6UQhfURscGTQrRYFkomjA1EXvvV9tgZmRTxVKBciYAReHYxk3YtZJbH9Ceaqsz8QNu677rm",
  "key22": "2bqhjjq2RmUfkbzcxuBEmvhMZUbVRAsFojhBraE1UNunupygoeEaVxyg84FQ3kA6isoH8sYN6tjojJmDqLBXJAtP",
  "key23": "26LT9ehuAYoiaPdparx8AzTkEJbK7r8fSF9Ksk4T4bwHwb2nABK1qkjq9JyikXTkqMGdc1F3bzST26wQQjFmtquH",
  "key24": "3L2wXrGhzMBZJi5kpEMYHUY6tH8gK1i8FobJgYMuDvfUYXmKqugoyK15hCvdtybhXVFAKZSzKE3KaSUrXDLicbLP",
  "key25": "3uzHrFaUjkq4jis3SmawKs2drFQnH7Q2oP4H6z79kvxZG8m7A9QWXVVUDLTkRApnF71S2A6et7pe1EqWfzBh5kZV",
  "key26": "3AsxdEvQZj2YjVAyGU2uLSw5iiy9NSVthVUu86abLKgU4Xrsm1vAVwoMTYWduviRGp5N7uASAgzK74gFHjLEebG1",
  "key27": "3yZyqh3yEjCYfRfbhZM8mbiWFUCJFdD2rD6RrSPAM4xSi9Hea1Nk2QVmro8eGwW2rQTacuCCj8vZRs11DPr7ddQt",
  "key28": "2qW1T5FghmuDPEVgbhbuCxwrFhJVsmw4d38bMeCB3CWoGHsdBtxjQa1ojuKURkkiwAGiwNeZM6p7U81VwpBbWrxz",
  "key29": "2JsFeQhGZWZKeWef7KmqT8qJMRzuU7hYZk6k9BE9ZJhonWBYTjesF5kQbNo36hWKHG89rZCuNPDxd6xyxgsnkeHL",
  "key30": "3dX6eWDb8F7xgrxo2jLK4riEjR8MLQHGv1Efi2YscuBP1JuYRLpaKc7gqXjupnpLwFaZ9QNY27pfTzvpwWiD3XUz",
  "key31": "3Xz9YkTCr1xn4DXXS2FYqz7StGYj8CKBe7h7pPoLauV9HDn2xzbVnQRPFe5u6FN8EE9NMyboir43xzuLWR8zD5AT",
  "key32": "4X5VP7pTXYEfD9mXBjcfiToK5kP7GWP94MTzEzs616K8Jso98AVbcC8XN8Pr8QwwP147HGJb1PLuzM53gGiGaAMG",
  "key33": "2vCdPgHQdT6YfrLs5SSr442mTZ3JHbsQ3JYb1izCa3LCuB4DUJWsXNfQVfr3gRBPWaiJVK9y5mqgeFi4s9BV523u"
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
