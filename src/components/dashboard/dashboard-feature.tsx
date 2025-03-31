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
    "rEcfF6nrDHzYdy7AHdKZxApyF6rm4UZDJBPSPoc5U52i6qfYkopdqmGbf36k6EsGGYoDFy5cmyYYWUtPPuEPZ2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMvUgZ222e7jNqwVuzt738ZdsFRpsRf67Fuiq3i9mKyN6zw2zy9gZQRNhqAXAX72veAsse8MPVp6mBmGCRd8T7H",
  "key1": "2x25irHQsp3Mu8PxcWbqCjvpqMw9GFQfCYujGvYUJwAzCoEYKQCGCmCZX6NiaEax6tnmZ3ajKiJEWziN69C5xwxJ",
  "key2": "2PE2ckW6vt15WscHfdTG61bsQJRaijh7RF4rb5BtYbY7EUc2YvDwqivavf7tkjhzGezvWXekKgan8LNXNvvXdigR",
  "key3": "3FUyzU4yD6qcDwtGWVr8W8GWNqhx44egPxyEpmJJu9NMp25xtCNxjk565KVPMTJpjiKWwkAyLDFgaAP2QFaoaJvY",
  "key4": "5SnoZngaaPRYXmhdMQ9K5oaLWFJzDFZFaDK46xNFtj9Rg2JMTJMjx7s5r4GTTgVwGt5bKqU6m262SHJBjdQbBFRh",
  "key5": "2WHc3SReoHLUyGXbT465uhKjLL1f3GfHViAi8Q3po6ULA3cg1icU9aqzrZikMCjAhPBf1LVEit1ArgqBSwTCLNXf",
  "key6": "4adNceDo2Hc3onZfiePj6xX6nRepfwi57ETSqQrM1BdrCRrKYr2x7cpTc6AhPPPiRonvjN2ww57B3GzqHBZuq7DM",
  "key7": "NT4wziiH8LC286NUn42aP6zGyfYHZ8x5tjwzepgRNzMgHkoYFa5n2B1xgg87QjtGJfswYxXVCC4Kd2oiqt3g4n9",
  "key8": "UxwKGp5c3UkfvZJ2QKiPcRmYcfNhPpXCw6nQY8LwX7BtqgnqZihmrJtjEcamPo8PzQGRHLB2c9bgZnmPoRpnDxU",
  "key9": "3NYsqZRxmsarZAhzPXBTXdaYZNSYenYow8rxfbStnzDUDkUjd4RDfkwnLzvZiAy8cyjYuffYRasSgN9QqRBN2ByF",
  "key10": "287HQLXevSR5J8hNpGFc3xD4dQELtxUbt4Z15FSfhgKXgqAJQgVGK6FwqUHA9e4KJrEpKVwAspfZpgrRwyNSHyCv",
  "key11": "3fGEVYj7AieSeYiRQL9nuirLo9nn5Tc1PqLmjAgZYAaNWzLmF5mYmEV2qg4x1SonAzgkP6gQW1zn32H6HQmjeqr1",
  "key12": "3FbudBwudtv2kpHUSGtxKWqLQ5hnY4h78ZvH8VVqqxKrbmCqV5iUNkBX26BuLXBN5iizKE6m7c6gC7KduMbU3zLw",
  "key13": "5yup8raKeuFEsuJ2dwMiNDLEWdVzsTCMjufrierqvXCCaJoHESbe9aSBrEHBzhomYyf5TsDc7mteU2k1hmEwLs4w",
  "key14": "5dHWcJpgsVVJjusG54qGJ6xsg3JsjPUFm1nGrZ6fqLGTt1YyyYxBE258FXz3ELmeJYBtG9RjHYxbXcKDqj8GQj8V",
  "key15": "vrHVZcVVz9DCZZ29jG9j2ub2D8dTTbZbfrRdtjT7k7ykk7Ta4uyLSFDYJWhaJXgbxkAZBMHQPRYEra4rSaQvfAp",
  "key16": "2KnBpBJYnX9H9YVnUrRABmTC63e8ueHWxCQvHjNMUZ7Fi1GmVvhAAwGnX2FeD5uj1ztNEXREXzdDS5nadadjFbb9",
  "key17": "2YD2PE35kAuGDSExeu398mrjpp6MoGmeqiBfdEQuFkQgMfB7MTfXGfVXc1UTvtBUkt3kS2SCrtmNy2KiJDKaAAKc",
  "key18": "JVGJEg3Un4Tmp944rYswSgoYJhQm862SDAJ6WxGnpkCkwbt4M3VixcgKiFx8z1Xh2KQy961urGztziuYCNp63UX",
  "key19": "4euJVviWbGL5e9Dd83ruArvWrFhgRaCqTw3wa7JpuY8DTCQ8rrhTpyabh2NaC2WiYw7DNDGT1QX9ynuLA2UTmWnN",
  "key20": "3hkDUzDLj2Rz14zSuZtB5jma8fnandfWSr6PA3C5eSgMJaT7Tsrfg5Y1fkt8p8Brj8i5iCHbtWWNotAbyNPVgb5L",
  "key21": "3AQMiYqJRmwXduQhpZJWfotWFd4Lh1e7gP9KUUkP4xxzzFRDeKrNGaS565WmxxqkZ13CPXqfJZGhHPvgPnSujk1b",
  "key22": "FHTn6U26qS4cPJo9vm1VhaADzjdqZwBNgT6zCN3Q8vXVkZAsfjHMJiYTyuAWwmqQrMcfs6XfiKMyrtAe5CmpnFe",
  "key23": "2xdvUSrCunBknykghrTD6GjzRWEfaiNPtpz2WQy14n269TxTknCZHffCWd7KkWSDxXGuDvmAXGyiHsBNSNMMG43a",
  "key24": "5Dwwetaq8Ftzm5bTyCrZGTCfuqgwAPZBhLENn7Y9wRqNQDD5ZpgqMJeUHoUJVrz6e9gy1P3aFtNWiJmpBbFfp7Er",
  "key25": "4fQ8jf48KpmuFRaFYTG9UBfu5Uc2tnKAC7qpfGPdc7znhxqc7UBDNEY3y7PnxD8L14r1YtHSgpYyMyDRfCeq8CzF",
  "key26": "3yXnp1kiMezYoCoWQthwsq9N7yW5HYufMs8z7SaDcgzU98U9PS8BixM82W7H46TLy9PNZXVjtgAgH5nHkZkiTp38",
  "key27": "4ed3EfyyavxspXu4rvjqUmqFKM2PhhcdNGL62LcE3mLRoi5yp7G53c6c3EMct8m9ZT88mFckFH4zLrc5xXfo7GBU",
  "key28": "64PYh3MtiCCyaBgqWaVWysM2badhBcpWXAVapeTf92VDYks8R7tfp4htKUttTtHMY7GpVfnxxTR5XP297rUY1dgA",
  "key29": "4xFcoRYFuHxVD8EVEp13PkVyqN4jWK4amc4ij6Mj8BuaMEYekCeEESkvifPSNzkihMedJYpAkTWYehr6c5oW3rJ7",
  "key30": "EddkaQazvqqpTfEhZm8JLizHeefkgBSvF8XmtzAocZBigGyHeTj17juMFGGjVJmtvzApWwTBk3AUsfJg9ZG9V1x",
  "key31": "3WThKWDfffyVDbLTGzT2CrFFbzpcXjq45hokdwYFGNvm2gmADufc9NR6KKJ1oHgqMTaRB25ou4EDsj7FZaRb6XYp",
  "key32": "5MNvxy7YtDhUqNAkWpNnti5YwyxjN17iFNeTAfYoHS4BpazkK9aguZZgHkbsjcXVHTc81J33Q6o9qG1mprpLYvue",
  "key33": "pixS9G7c9HACGGYYJ2Tkk8ejcQT13jAA6vkC3B7y27cXdPdCSh3NYvyeUdckKVDMDb7o2S1LmakbWgGaZy1pkBt",
  "key34": "3ZhpLRX7iv65tq5uzkHsUj4tWsiTn2kpZtv7oKVQvP4VCXd4W9fYfKajjH9mjFt8YZygokM45K7kjvrc6dTDPKMC",
  "key35": "2rzepApzkZbJw53fg68bW7mei5vYa57nPMpBwp1GeK9fYiKYMdcFHyqnfMjkBqKSwRmPHPo9dSYDQSd8AUAW1axh",
  "key36": "XHA2zQDxbSMpmBnXGXEJEZ348F2zdteeAEtQ2Dg3w5AShsRJiDqTFWvyxCKBnTXh2wNWoXusXmx6ogNuqDc9Tib",
  "key37": "fjTFBDCNoDzRd234wh8vJqCw6Qi7FYzFQuefx9H6GnwZSSzBxpX6gw1DcSafDvocLveuUM3wpFhBMnGDHEK8oKU",
  "key38": "tP66wo1yKXANNbmyFr87MF3YJxQQf6AdTdRsnASA2VP2EquFo41P3e4XXqqceoqesZXBe9dGBcScATdauTAbGZc",
  "key39": "vFo5XE5n2dASn6VzsbJCGGh7oLx5jc2ZL9KyHv7ANHDFiQhh2vqeVTUdKRTTYupAzL38e2eQcu5Ww9yZMH3YDPw",
  "key40": "2in6atVuCJK5y7aRN7xBCfdimh88Myw8UDAWVnSZ4NxLRZ19NtfTsFvbUFBfcStU1z87GJhL4U5p79yDc9r3eVn",
  "key41": "5goK65GWRtfv47PR9arqNv6RsvzpWHxEXKR7YrWc1PG2wTxTUtm438wJcFocC5u34hdP8uwL8BRSFdysohEo2s7F",
  "key42": "EiovL6dH43AGYz6piuPP5PzQyQf88nHtbEo5ecCci1sWsE3BGYWTfPrXFphuorWUAyYkoZAVnxykFWHSsP4v1Sy",
  "key43": "4DPzjwFda7jz5bkeEkQGF8W18YZY2Mv9KuVzLEPGVMjRsgXJ2rBZrnmXrxpyF9JEU7o91WT65U1nqyqzqKN7vMxF",
  "key44": "4KBtdx6kXt5WA4XQXASjSExUtWBWQRGSvfRz7Rn9cgjMoUZwZBEeY4tsEbqnzwru9gncjXNpenrb5KYPC3GcVTr3",
  "key45": "4gCoL4ULHWJ1gH6rwHsf5Mh1etu8UqHwswZoovNdUgKjHTUGdfkypwaXARbFeRguTZrZnRzdyANumNJ1PAaocq2R",
  "key46": "5e7ow1biyXNSiNUnxVcKaLXDtGMjHs1P8GxqB3mJQKDLs6DenzrhthYvPBtzcxwvrCkSoehWe9K4peKnnruu7Tx4",
  "key47": "4z222SZ6bBv5zgfLjEMjrqow3X5cpJBtcojRKQBeUvsDtmmvNbxF9WpAvY7RSxpxb6imy7dj32is8iF8N1QHX69K",
  "key48": "4tdKhPtKoUtxrUtCsAtSXQfeXU8ZnPEdvcDxQ3u34b49kFig2K5en9stKmtn2MrMGyuEwNR71sEJxvgPsjVgKqG1",
  "key49": "49FN1Su1gyFdYhWvM2WuYDvuqVf6eG7K7bkoK2Gz3S4gG946YgRZPjvfWQoA7cR8JTCSn7UNu3CMKttFZgXuCWNE"
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
