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
    "5FrsjEgNaPHKC817F1SNjQ2revDT3VV8fftjK5HRHkzzRYApNYBn4FoBhojvm4o89qyGqzAoyWMTEQSstG9SkLC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDN4VaJTpqxJ9CgjhDURrbj54U1XbJeWJVUS9YH4EzzN7numfPJrKPiAWi1CZyBW3jYr2tUBwaGwRzKeYDSdmdD",
  "key1": "43CnCvYu4UwYSmkHHufT4mPvif1vMFYQeuJ9GV3LDmnp7NT2NT7gGHZMiJF8iqwBpe1JD4KzTvvD7ZDjPT19oEHV",
  "key2": "3pCegcqynvrgtihe8QBruxtoZakp5XbtngvUErMHttSVySoykPBFDeiVfuHtEBaVCMXAq6y28Wi2z7RCA6jEoBRB",
  "key3": "4V1AW6KBpzQsTip6REhChk3BEgnHJzk1NUa1saHnLkhiZLvkc12sKoN46pSu2evqNJZprZVMbFtnWP91pgDy6S2H",
  "key4": "8eFA843qFUgsweDpLayGNGgjaHzUgXjuyWjaBmhxHv5LxJ6hSopaJv6F6RLJwUAY99BrWvBhQEd77bo3G8JBsuN",
  "key5": "3q4SDQZ5sLE8jVGUHKS9rAL7Fw4Y282eHr4QqnDsQaaVHCAzPjN8UDZa5d8ThJ8x2hNpmQTWjJQFXcNbTBj8kgoi",
  "key6": "3bN6C7ukX6E7sHzqiP2srjvRW9HnzRFMf574fgsUWJhoVd5XnLHUEkQCUK2fZ3fDtnVYonoNYioHktnSuKtFaC5n",
  "key7": "5UJ9sZBYPHBM5H6NkB4PEnJ77dsbiFgqN81wyM1DNHzV1Fo5Wora4qm6qx9UjzRWYNKK3867achvUzQr71YzJAH1",
  "key8": "3fnxmttJESq9fNUQhp7ZqphLmWoH2ZVZEmuGM4ubgAzZc7ECjwHHVP1HtmYMUBRZodHt2bUw2Ev3EoGYzsr6xy9V",
  "key9": "VS641j1F1emmob7rtF3k97kGU5y2wtA2rJc6RjyrAMNTjQ59QDRtzuHNmAuPpfmjaaiwtBcDrpAL8Xc9T1SitXD",
  "key10": "33fSMZegZJhaepkZqzegWw2p4wxjwXBhxyGVANdDYmgo9S345zhzAKFkRe4Arrvj1ibgwatUCp54UsEqEziDnDkT",
  "key11": "5U2vARjEujGFWuksu6XzpmGZVU77XLt2P7xMK5VcizmNBrw9SaPJzSsydH4ky7GnCce49PVmvyaJXkyquR7v8ZYb",
  "key12": "qnc3z25ajT9xrqG7dzB98rR4sJ4aqDM2sijU3Xr4g1ZAhyHs4nzskTqmWQ9nuWyNbSDrnzLaxRih6DDFkC8scmp",
  "key13": "29yjnegoJA7gMkGNjHEpi7JYH8GiH1qvSfm14PvhQmB119Yra4njkxKFHJoX5xUKqoXFNA5feRz713okDQqD7NbR",
  "key14": "2KxcT9DhiMSvw2viR78LW8gLCWNYdyX3R8EinCxa6aEzUa6FTiDVRX6hXSKCGoJhxGTBZN5MfPG95PF9xr4fYjHy",
  "key15": "2VJd5kVhYT68bVEE7k6RNUBusp4bczVLfagio3ih8s6gxHGEg1MsKoqYGH7Zm31zGJZiMB8j8Wx9YAJYM3qXRJf1",
  "key16": "4D3Q2fZmFhYYReW7qdzYTngp9UyV6X2254kfdvLcaCj7wC1oAee5kvbcuTGrydf9c6K2Wn6QvU8UbTUxwfzpjH1x",
  "key17": "3XF1ucVWVXTvb6u8YiuejABLqF4TXuZR5CAboxFxTkb8jfWo8fkwAxDD8zaDuXmYUcyC8kXDyPBatXNBSDwfgafj",
  "key18": "32pX39vmLAc8hWJcPx6AbQY883dRGrq9qbAgbTBRrE9NFNi3piaYozNCRFdVWzo8pZKcAWvbuvcTKbJgpyuBqLUH",
  "key19": "34Rn8VQNJe9oQjZT3HFcc2RaS7BgbP8SwP166vyDHm9p4UU851suJfUqUBN38MSzSxMwDrcmWx6fDom7VFd1bbAF",
  "key20": "5ULayVarAadC7aDdEQHgi2UG38WV1pp6RJCsokASqZLRuNqgmuBRPVwSyzCpTgoRjSz9FZep2oJiqeFSwrJT6fJu",
  "key21": "5HFozQkv8Y8sEaDeXjcWtMWMYEtzbrG7wB1tk4b59uCvgy5NzxjzaASzYfPPRq76xWKUfperCDCJeky4e3ax1Sbw",
  "key22": "3f8sNSHBFdgp35nfBvN2mJaP2gEQVVn4b6XZsgUAF1QWzv5fe1vHvN83T7oqQK8YH9B4D22rNyLGejwXgUTrxytq",
  "key23": "VFHWNCxwsiay7aEzokBnGnj4Z4Qjd13VqnrvyYRJP2qbCS1z5ZMqTPPxQAL4oCeg33B1fSrmJXUM418ceunJ46o",
  "key24": "UXEpeBUMkGhR7KTCVhZmK9KbYQz5jC4f2SYBUhAJB5TV9YdqC8rJCZSfbByTFAmRmrpaN1K4koZrEqDY5eoTTmt",
  "key25": "fqYaqYcpG7SXerNVAGgwyC4VJVBLGvXEwFgUhoEPA9JZ5UWYE4HjqWuY9s8hFYZxcJXHqboa5XEWn1oBcVJFWDD",
  "key26": "5rgAeZvcBFt6CxmVFToBXEP3L9MsKUQer8nioRwjmPSecmQtkYnyqTGqouKcpnjpKrf5HUD8B8LsuvXaJYxFixo2",
  "key27": "UVGKS34unr6vvSwY1mtgaLYXvT5UjAdU4ohu13xHx3i929DvpUsGjjpaWiqFFFxZEwXNQv93eqRS1NCU5Wdm8ac",
  "key28": "5keMYzKcLtNLHFzdxEU3QURh8n5GimYMdwPunxk9VuBdW6knpisEzrKqME8ALcNaSkoi2iXSwYQuPhbaFFQn3Z2o",
  "key29": "5Sa219KSbgaYPtzaPRfTygt4nTzLxXzQSV45k1mQR5Zm7msGJy3GBsHygwkKnZTp6XVgTiFqzk2NCVBnMn5y9gum",
  "key30": "2DNYi3wskkrAMSG9FLhcekvXsbyAaDGg2jSU5yb6wTtUU5Z6tCDKj3k3yn5kZRKSX72jNvuY42aUz2Hg6k14WWUN",
  "key31": "4w9GYLvoQHm1arHJt2WmPeRL3DY9qRyZtdEqSh1zfqQYKwwqKPrcGEBkiJM8NToWZccNJ4nyV2XBr4tNmD1QUX3Z",
  "key32": "26BtmuYx4H3eHK1C4CTrhaoxVyeE3cLzZBnfjRcdeDqQvvSjthqD328PJJb6m6YDEZt37bTUmzXPLLEHNFSz7nMu",
  "key33": "YX7TXn4MmoXPp5gDtjVKsiWx9nrwtNZaUpqnrTMCcQSz7ShVJunLzyv3qNvP3BAfPWNrvALtawU9G5SA3CbxD76",
  "key34": "5WYuQPqEaBFPUZbrA2H5UEyJR8Ak2ohkCjD6CbrnBoqV8ZmAtb8vP6dhunChtCErUShNHMFwVqvEYSKZ3RgTDFjB",
  "key35": "48fs4LxWKv1MNCcdRp7nb21XHaAMxujjMUpdBogM4Z6TYApn3iABM7URy5N1SNTnP8M3hUiT2DP4vwMzWJwUn2EZ",
  "key36": "3bK6At1oPYTGR9HXhVRNyukX7PeR9kS7YLTP9dD7unVySy6dUQPjgG91eJrmkPAAHRSZ1Xf2m6ry6gSNeXVfwM95",
  "key37": "22PAaF1DiVHAnnxFcz2pq87YVXvVDEaJwFMU6efxxYZ6Q6KLypKVtN2bjAQ75GeutZvYW7yPPWbvckBPn7rxaVTW",
  "key38": "25ZzaJbvcLZMuvgcnAcaHhCDFrMFnrzutDNtKnNQj6vDU7b5Cv7neeUQGNzCkDhGTvAW9wDDpB5MvjJmPvHj5sVn",
  "key39": "5gfhfqWdmYfKVTXPsbTTmMoxsR7QW5YUvhUGhSwy9bAR13BLpbxfpG3PKHb7fd3QLdzVZtXdFKJ4sPMnVzuadceL",
  "key40": "4vs88Hs95EdhxnGFdAFz83w3GVuM4hUnW6FCkUhd6KMmW1EP1psiJj4xW7jUs357CjhsFL3dYRWsEzYMxYKnM7Ck",
  "key41": "5WYAMZynbDZLQHxKsTntSu42UpPn29js549ne7o2fhXifxAbruVD5BWiT8hLEZabSRMKwvfuBUmjieZZaA9N58EX",
  "key42": "ki4HnNEZsQwfuduJZhXKzVM45bYB5P48qB6WiMRAiTEF1mFGR4uBnwiGd68c7BCdsJRffffFKsNoTGe7iHVLibp",
  "key43": "4uj7ZC9CKrQw6YJru3UsbeRMCqmUtbCjP43tkRQif9V2RkfdxkfiMsES1QTVb12UFHaAwbwYCq9YwPCB2NyZmJuv",
  "key44": "4c5eYXqugYecjo6nwm6yqQtEpZVqkLujazGfTRs1VN728Mym8veSbpNM44GM9HQB9zWj3L1Wj9ekPqbzzCX5GR66",
  "key45": "1gq4LagL5iYMnDSqMUwePMKYdMSAHBSqa2F2hiHRz5Tc4TmG5a2D76Ef2HAV4qhqYzwZwwAuqmXYrudE6uRLCdA"
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
