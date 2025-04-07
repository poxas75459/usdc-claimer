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
    "2WZqVmtLThHBkRDHDVhVcBYFwuG7TZdvZuk8fL2nV2yiv54cYEPPcfM5qWGxX1MgVx1mVLKqBVf1gwbDr5iMvzvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GVykPQRABuscXVXpeZbhkXwaBHhn8cBwdPUCw5qv6fPaQM8JmzQyh4musyzL5Hmq5jZdBekNbYbn7u5nXERYCSQ",
  "key1": "3BfxJGtgUbLDBwmytf4dVcB2FsZxfYzzXhN2u2vHoPo7Pa8SrWkpUxZ5iHQdCwcNE3QgmDDLgBqun3F2MfW1oSkQ",
  "key2": "5P8YL66fQxfantfvaH8nYPL44xwbz5oD6hY4tTfifmkiKpacKVsKeEDs2xHrhyiDJ8mS7oQTsihrkEuUKBZG5ifC",
  "key3": "5c7HzGNEJUUwJ3wDLvpW1qaJjuMey9ohMpAUkxroZS5GVqyd4TytLgDFzY7zPxchA1BkcH4SpKUFqGPiRJwMsmVC",
  "key4": "3pihpusgL6fYhModCweFanoAcC4qfbXMCKwLYXtvQLXscwTmCLZgCqi1dP49hERUorTHgkgY85gCRP1nrqnxD4dH",
  "key5": "aoYNDmNrfwpxvhN83uyHKopgLm1AYEitShNu5xPaprhv5ReWrXAqYjs6vjnxwtFuZEgv6SzjEcQnVb7iQRx4g4w",
  "key6": "4Hxufy9kwRaHMpSaHnqkNTe3HwsRkfTVu5mrTN8CdnuBG445S1VdV5muXJ6mJSgwLx1FHh54jtssWDEG9iv3rCQs",
  "key7": "29m3dYc85LQhXXFD2Kr9R9j7jWr2Baou7AuusPy2ALdE2EEE5YjNysazwTvEDqAKj6NcQ3T8tTg3GS1NmMXBbavP",
  "key8": "Jp4APSgmqZkzEVZPcDSwGpXcPzHRCp5b2EVu2WmUsbK5B5bE8jAUK9s6u5fPM8LNojYaz15R8kaoFdDSCoN1LtN",
  "key9": "8NGPNfoEJNerw4ADp1ot8JHvo3EH9twBdUoNmAeCrxyt3q5PfWWE2G2kFnVuMs9QwumX5FF8Pbw6xPVZnWvGhfm",
  "key10": "5ij4hzo3M3RxhPnu6WmtZ74ddsoHbNhUGi6SScSDg7uTFwJjbnrbLdyNCRpoDmXjqeZeaLuKEwS1Jjh71k7oCMzg",
  "key11": "eamBPGkSYvdXHFay42rBj4PLkjAczGXaDCDtJ7r7PyfwNvNXpoWKApgs4XG73oqJvcig9hHNnsPRHgQmYNGDPbF",
  "key12": "4VmyDXKzU3JoGBJpfRhn8TaKjEvZuQdS7BqnwxJ6CT7CEC1daXBpaFwv68Ej6ueFbQfYTSh1Yu3sS9S6kDF6Z5F2",
  "key13": "4qqectBNvQabpUXncgAn3ncRTq2kBmQcNiSbtuj68thaScRHHdVY5E8EbKg8Wjj5vuVajXoZ5be79BYyRpTQZy8r",
  "key14": "4ZFrBvT7HBP5WCXQeBKx65xxhLSGnA6D7xUd9UFFx13WF59tfCwbod4YVzHH8SG6dfSw8Ph7VwvVRc5Yyk8AYC9H",
  "key15": "MwmR5ba8seZDEjAuamrFqV69rDZW9F28XH4Ko3DEz6KyR1RtaL25LYhSWA7YCsiPgrB9BGvfT7nTMrbcsd5DYRx",
  "key16": "guJsdvd6kt1N6VqXwvkYCnTyV17H7zx9TfxxRHzURwPsssr5dbC1Fzgj5d3vqwYxUUe9eXun4n8k4nSPnV7Qz57",
  "key17": "mMLB2C2N1M4YvFY3UfcrkSz2sqAyhsVxu8xSgQEh1HFquWUtjn98Ch8MdZu7vcbw8qG3wgNkbtEjGHjnVmDxH4H",
  "key18": "ah6f2Vqkbp5NwXpGxPVwjrLJgLd8inoMFkHVuTj8PCkXs2P9kU8bk55J7u3BjzTaUvieHbdm3xjXFJWRVhgGorH",
  "key19": "iHQqd3DcK2DTU92PAn27ovbjwReoQ9YhnsZFPn99jV8N82N7EvdcawN9SL1Pa7jS45tk1RRdZdXrUWagrJMf4WD",
  "key20": "2ccvqbrhQejCNiToZFrQd8T2eVLppNZeiJHch4oee9VdF9NkxLiB6zYPbMqnVrEG9zHHFiug3tWNfg9LcuE5wjdH",
  "key21": "2srPN4gd2R9jbeMWbeE5j3NrGjy66rN7b15W4MTui27zeBqREJtZ3N24eDkQpY8MCa2zPzSa2XESzp16wVz4Uwqz",
  "key22": "2q62RjrFTfNzz5nkgzHQxu6MVGDn2XmaAemELQo5k13AtCyWKzhBe7anFGEPiq3NqokQi11QEAmMLyUx2eEbD3cb",
  "key23": "2UYud4twzj4hFJD8S3rgafHRjvQndYLJziekHHj7WkE4CqTbPmhQeeGzJMuSLnFDP88TP4GiA4DaqtRgo87CijwC",
  "key24": "4ZptpUwW2MhzHccghLB7grYeLzDxJP8w5GJ3uJhWiDMxVzq7rvhmSocTkGiS4wKpLSiWDAmZggYxbgLXCgPXopCc",
  "key25": "4na5ULXDbtgBSSYUdznhH5uUGszB1afnnN7zhinJXgSvdLSjsfjHVCPJKN1NX1ydVtWUGGRwoLCyXkE5gqp9dwLj",
  "key26": "3Hxe1JtK2pBjPNDTFxspvCJcb2BK2ZF5THqeEpxULKht5WtRgX9Eoa1jAGc5qCrXK3unArcawHBobtYa9WxwFWLk",
  "key27": "5yx4VsymCMPL6VXyJU8zUNj1Phz2UMdgLA138MdE2xTHFAmXTpCEp5XDyPMfdwPEnC1LzXW6VWbzFwRc83UX4NUv",
  "key28": "29YGvTV4Rdo2nV38HTRVCrnB9ErM5RJk7nTpdvWjC1XuYeBx4guCsDDPyDba9sohFbqZspXPqkjGYxxJGL8kFB17",
  "key29": "4LvR5e8nSwuQzVdwaQo4vqZQFXoQTpAcy8SM1NMj73vofKHKb4U4mgGJg2SoNDqXyqzAJCYaYypUppGF91Lwmdrc",
  "key30": "2A27RDvxeM1qiRHvcGMJjj5DcPhUes7hPCJECGEq57vdBRq9ESgAdSmWN5maSk8pztxFuj6SCySAHgiLK1t1m81k",
  "key31": "4337p7Ajy49bFyvB1M2oUPrcXDsopFXKW53rkGB6biaQsix2YUYhTEujPWjzUsrPBrfSPDRveJ6MneLiNwSXKrhV",
  "key32": "5LYo1Y6ewd1nDnifF8wb7pwdLQYskrYumTwivs2V5hWUZAFyjCodqfzqhptHmZfAFJUDLkLNVdgAnYQ4SySDqLQ3",
  "key33": "2LYEmhjBJYkSD3UG8CraGCA1RtUcLmaiV6EnAz3NExyhmdchXhyzua1wNwoEC8RMuc3aG5sMFqryUFHVCJ8eSMMe",
  "key34": "3NFLEvU26w4NwtYRkrMjCdxxSqoXEe1L3E8iovAkySDzgvhnwooSZLBkTUR9Y28WhsAtz1h5eoksuMdwJVQLeVyc",
  "key35": "4TM3iSZos5yAfV5REZbRWi7cNrEoXmvSYtgyyXKwiw6ECzYnsJ6vs2xYQ5UHuGw9MuCWMVtHEU8V4RH5WQnr5d75",
  "key36": "VzJXUvGZgN4Nw2t11m1Qf5J7XKB5az45pDckVJriNfYPF49SdXdZCfZYjguAS1vumjArCrhsQuErwzWegwTmNEa",
  "key37": "3mpczstrjtKouvh9SnsSAV7bW4BnPNZnstDk4sap8bFVWNGRcZS2BKXeUhchv9bqQ2Y9rHQCbrug9t44J4Ufr8gc",
  "key38": "HfoL7fEWYtNSkMsiMir7ZaLZ3Mx2KZcjLLGpWvsBd3rjZEMuSkBb52222nUqgcmLCgxrknCVGjoeeipJasPoo69",
  "key39": "5pgm3jyhu8iduoV91YsMGuBNDyBb6tC2Mj2sgW5Xst19VaqzqUJbBD8LUHieTrmiyooqqVS45A9sPaZRHamPNhFM",
  "key40": "51pkaQFDeP2PERm56PUzR54D2Khn8brqtL8m2FkLHdFL9hh3siq1nsqazVPbavzgBRt2HVRnmk6WPv9oXRjEKnbK",
  "key41": "4Dphej9E2e3NRyxWjAFAfgRKkatXDxaiLamZncoSSDz43UjqWhRPiTtSUfKCCBvJHAvbD7xBfbQ1FEcAua5breED",
  "key42": "2FUYXABV9UjtVEYWBLHKP7UCYcKn9Thy75B3DcEdtsFkx3XWSpVmN9ARCoEdttHQ2At4chapgwMmjp54Dhg2Y9Vu",
  "key43": "2XGDQdYQvVYKhcuqAmtjET6hvXDrBnkBQB63MocBjuPinkCCSohWggnwrv8PQuggtQ3zoxH4RrvWzmkP9cZdmRs3",
  "key44": "4o4R1J3SkEUnitbU6muyM4J9Q2B3SA897Cn9JSjxpHdQVfw1ia749G2h6kApTZjyKQSZaysGik7QuXWyf2pxBbpb",
  "key45": "2cyfbUjv9x4BRseF1SNfABk6NchyZTV7DhrxGZRtZyXFPFXhEEPvRzvGURmwSBrah3j4zZVJqqKVW7b2piNTvrnJ"
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
