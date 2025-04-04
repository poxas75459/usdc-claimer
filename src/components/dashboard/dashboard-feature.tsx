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
    "5CFH2ob2JwmkKQvBConY2fKTYt3ABMSKcBVXaR9gLN7NYh2GYSBVLA7utKyZHba2ywffJ4pDve8qmVeN9VZWL5Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M7zKhnQ8XeSQUHz3roQpC9hCQvzBQgnrEK4APfecBsYeu9ki69BzbChrW9aU5NkWxaLEFVW6JTzA2G3m3cERuZY",
  "key1": "3HmZaF5Nj1Ep2gqS7nh3HN3cYUkPErC1HYMiUDp5YC1qXZi5yLnkfTyEmpiFjqHasyDhwNWfPAZ4GhfeZ1C65c4X",
  "key2": "CD4juKNyhmtM7GhkN5o8udSEFVoHp4FhFSJBo7i9LMg5fyXu3RMRRTcLQvDmgWqYwUFoZPkrbRXRv67e46Le2Qr",
  "key3": "3n9sRatmNEhKmQkkRZgrQVgu7fKpDN8FpsrvfbnXmUZrwnjYrAZFL2v9tmRN5x2kR9zFr3mjivAKqq538reA4pxh",
  "key4": "2kaish5tc4YrwLLA29MFiDaeW2pANWcqRY3k6EMTtL37zGbgrwLxHURxQN6SYsxScHMoJk4d8FE7pM6Qhbub1sJP",
  "key5": "R7c8pwVhhELJPQjShr365qCAzE1SBkK1VicPPw8ncHbg6DSQ39YpmHKkzZyn8Aot1r6UEf9AGDxKgCqLpGn4imd",
  "key6": "2xLXScroKVBxiJXwJjwP9ZR4NNPLLjLRAzkV3zv31mbLupAY4xY3WwHD6iAj8cdTGHe2ZqnS5eS7yzJiYVDTz3iZ",
  "key7": "2bGB6A7v9FPRPSFHxbx6oYASQtHeVLHez5j9iniEmBcgH1pZFAKRes2krfT1GDSPyn7LwPYQsdRjBtyUj5dNHTZ5",
  "key8": "3dxB2ByWu6HdHJsnosETyxvAZMGcHd29LRQBKx2oTv3NB5gx6UFEBGYDowHy8fkXmDunAGQAmxCs8uEK8AJsXk6o",
  "key9": "389VbyjKvpx4zSnzPeCghhNrugTBysLW5QVWHwi5DBevsdrmQomre2fjM1TLhMAdsqKYUCmYMPKykRo1t88TU8v2",
  "key10": "5Je3rZ47AjJbELnYVHgTdadbWPRg53PPsTGUFrfJvkS6CQNGNEZj3YcKAwKCSe7AD5c3KVPBrVPqsgqXryyTEmMX",
  "key11": "41YgNxGUo9vvpGWeNs8Ujjr5A65xfmyw971Q7QGfXVTjqJkJJ86VC65JeMfNXc5nwK5k9hAAE7eo3foQUtHd4fKT",
  "key12": "2nVR3atBZdy5n6PCX93W2tGjEt8CrXDoUkZuBWAvK7vhgHqUWxENqkuWqu1mHyUxSqoe4bvkQCwPpajsquNh525v",
  "key13": "2nZpxfqhb8SbfhQEQUVmyH48EM7sVYbWGNogQhWt7kkw1QuxhQQNi7UiUAhyFgK1eVHZysQ67aSX9QXMcYyatiaq",
  "key14": "4HZq1FudZkKqttGDL2fABYdti8sUb3z3U1HQabT7DkvGNNguH6g45a2T8B12gnoHYXpiXxQ6hgitw9tRQdTWQJwr",
  "key15": "56Y592Fzpc1HEU8Y2m9cmafz3GhYHNFqo5kH6vZTmBWar2ntYCGuEWLbbQs8byxwsaLrMzabV6DxuYikoTCndU3j",
  "key16": "4owWU6gzswXxZMuMuHk7rNfwVZQ5WJMTgpHkX3e3qYyRFcNnArQX5Phcec5xV4MUfixAKi3cVSzm3rtPVjYCV1K9",
  "key17": "3Q8Dsme462BmkQKmG2CBFsLirnHQqNPtvtYFeyMyceChwGt5YS13aQEV9T7nvJD5kSZZ3bgoj5PLpRYZsgfyKqdv",
  "key18": "5eSUv7QEU7X96Nmh9sSXCEr5KcvEoQAyKBvbQPmKWVDjBS8KPbzHjCrSuimrXJi3B37hj59jEVqmQnHwQo9mNnpM",
  "key19": "61jtUNmRtsXZjqopKJBDmuwiC1t2WGDUZ9HLdUYnB5AdxE6dAt4BYrshajyjtJQ2dUApCGCY9Hf4RJSz1mGRDmyD",
  "key20": "3gWD2STyEB5NjEQ4J4hqYT8b8S7R2qgpckkX3wZHgqZ3JwkCUdRshaFHTidKvgPBroL3uG1txSjoWtTkAsVqMUTR",
  "key21": "rFW4RdTwDQy2cbsdxzr55KkuAaAEsfDZJcsS8A23iHPFG7TDf2Ws9k8ELjwrTuPmHkxRDHGkd6f4KwSsPvUEuVx",
  "key22": "4ndUHETmZs8wtNck6QxyJSaEUkN9hMFff6cx19szSFM1ZWuHEHvUNXwWuZG7CZNWCA7Rj1Cru3JtzC3Ln28jKRJj",
  "key23": "eD9Skg26p8vz5D6G5967LreP9DSncrfBRhsRAnwrjAYv7UznkDZCCTkTBXcue9hTtHwNBBZsECV2GP58mFxNNg3",
  "key24": "47Njb7GJLz271FpC45JbLHKZZuXoE3po4pfLge7jpgDqKq9sBKJVrGeM2k4oQwMkA5WW9u8hoikbFc7jUdhDLco6",
  "key25": "52nVvbnXKam8EmgtK7U9ndQKu3Zz9LCdHuVqEY2noQpQ4iqC6MTgHD4orAb2r6HL9xVX7U8kn7cnUfPmFPYSMc1B",
  "key26": "5ZVFobLpsegMNNcnaHf5DxY4NP8jCTNbmqYgNeRBYmfEFSG2pgT9tFDzcufinc5hkwwnXoMuRMGTFHGo4E6oTDSd",
  "key27": "3xJgaNZma9Yyu1zRwiErTKy53SJFwwzN2QxdDDHRiTbfKUsg8c2xb8EntrwUizzsb72pC6mS63FSwbm2WHmsiaaP",
  "key28": "4a9HrQNZnNeVSkkXNw8y4UuWL5zxdib7srsDEGQfVShvrghdEgHH26HbCXe1YHW1zc6AVHAgWkcwLbUoU13Rk4ww",
  "key29": "46CUj4U7dYf8JCbvCFJEMGQxvokmjzDwV6r6wFb6QgwbXQh7L6VJanZTfRa7Upo4KhatZdKTkazESfT1nzPSFPDS",
  "key30": "HEw9p1fPmpzXC3SxHmhKTN7REZbNhCGLLYpVKAB9grk7ic2eq3nnpGkkfpCq2nmtBNadaWW3HMBYRKF3xt4REiw",
  "key31": "48MDN82vkDZzeDrG3XiVPBzG9LZTiXwzGvJg6s1v2SciT19kLXsbb1TKQFn4qN2frvFHc2Kn1YKA86tnYrhEGvct",
  "key32": "4PWWsoQfCWfG27mqKVS2jhi7UiBawtuU99nb6MjyKUTFGe3qZm8nKpnWFYHnMYrRnMy8TVTYquEw8mmrThyNNB6G",
  "key33": "45RtFP67CH9mZtGguJWHBjCEEchTFmodCLCsUMfMuAqfbkhuYE8GCwsYfsUxZKoXoHV1g48rbvkHBA47HGYzAbxh",
  "key34": "2GmMR4DR4fjkGc4qEbRwYnYCC39afeHqbT6DbZBCQDNfPAiqyZTYPRhEkmbhnuwwmtJ7KdwpH7PwYPbiZGbAaan4",
  "key35": "3gbLgTUQK85DKbJyn6tjKkpgvmsQ9DLWfqYdHKzkurRTERNynH4GB4cLoSsnou9SH3yP6ZG53ho3E4ZZcdwmwCgk",
  "key36": "5BkAMXkm2hxY7tA4xoum7JXnUrZQV1rYV8xmvK2paxF6byXBaBrQ5A1Y7hhmT71SH7D7Fa172actZQyNz65xV7sC",
  "key37": "3GsnyukTcaA6TmMXaajwSrmhw8BGrx8oqCNpsyuLFGpJMW1RAMpvYKtaTMUY6iNiVnmBoGyBfAukPGnudXMSLUXC",
  "key38": "fGNN6YmzrL3USeNjRYRHRN7ADLfEasxUKwdNTqSJpB86v8x3uWfwKG6xLL5PSFN1oukoJiDVnovGRxj4rBe5b4U"
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
