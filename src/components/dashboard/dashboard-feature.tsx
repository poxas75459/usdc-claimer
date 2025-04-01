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
    "2uz1gSBAMNzqWqwWCvqZvjgmcDSQjXq3GZvfF6SvkwC8VgLcyV93Jvcn3pZaXybp6FKuKPstgRV3DaJiM3xy2gyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMhHQCqdJEyPdaYmfGjcC5efXcgzTH6qPXiK9KJENayDGhGE99MBjFzwsVJ8AoCHRK1wu5Gk88B6eHj66yXCwAe",
  "key1": "62C11vdbWAaC9nMzdySCHc6BZdAaynLVUswBAqxx8yspBqKmQedLwgfKbubkxtSuAmdvcqH2NzbVCv5MBcDCQuiF",
  "key2": "yGy9bted7xw6izzm6dC95icoEW2JiBe6iPNdgUqbot4fzmhHubqphb49tEcEJEiGWq9ieE4N7rhCmAeVHjPb1e6",
  "key3": "4HTVKTxVeaSPnqcKwvdm6jLzPQmgfZPE256sTppBE5f592nVSzCnRkAUYFY53NmqGawq4E3wpHRDVXMjkpVJCyza",
  "key4": "1G6pGHMeKcokUrrWvovYJnfwHRh1UBdqXMpX31auXB1wDc32cZPA47JXjPgnvBgJdTCQKXjoEUzxVeUorzTzQM2",
  "key5": "3j9UuE4Q3313397ueSjMeaC5nTq26FBkyxRmkCqj9ZYM8YWo5tZHLGCqw9cwNp9Z7MPhLhDk7iYyRYtfLj98Pfkd",
  "key6": "5eeTpXnjKU5skFk9yNambp4n1JUe2bH9ypsZXdNi8yKwUyw4rDQB9phcBB3xBP6wn2CCF3KRz4DqncgnKXzjc89a",
  "key7": "4n2TJtmkDrwLkyD7JiuctNHpGxPRTzo4grk4814bMhei8uU8LzYXdjuCsiXcDGGn5mMvEkudfNvwXBzQ2tnXsPJ6",
  "key8": "4LwNxGA5srgcgK3asJpsfMkc1L9sZU5vhqwD6XtRrwHKSFdpKcjgvbARBcrJH1prWJksqH872Snf1pjPwE5iBKJe",
  "key9": "3MUfxtCZDRjFegCXfz8geZLtExda2EYenWCnKnzsVvj26v6HFQAQ2pWoHx22AKrRyMXAAR6CJVsZfkS7F2fmNkEv",
  "key10": "2GZmuV3GvhEN8s51MaULDLmY56XrVxYCxojfwSyNYAtCUobr7pHoEuidZYhyQaUxd6Kx3vYdZRz2BLtscJRTsHcv",
  "key11": "3Y1de11aDqyjbdqRB2iSEAQ7EUDaQQW5jhXKBndpCTnikAMChLxrAgdZmAQjniFwZT8xZmvrEVJ8AKjPEgHwRGF6",
  "key12": "5sECueTg6NtsQCmMMhSAZuygSTgGD11P876sygHtZSKd6cveWM3Gcd6NSyMR6PFV4TzSPjPgHE9PCE7AUMqJXTUA",
  "key13": "4DdF1wTbTamLUFYFftcLrTmcG1BgWok5yGuk5VzQebUK5xrJg9yfiQFPFdc6fB7pykpiu9BXzwj2UEECbcj8gUmb",
  "key14": "4dMsxjWHBsazp591hj7mzbGRxiUMYRJS7DF9FcYCquSK3TYJQ7Je9sC4hrLWUdfbXsw47UJBgecXykWnckjxiVUR",
  "key15": "2hS6EUdA7TYqHC8pfY294D3mAPTgSwoGpWKfFPxArd6q8L9xDSs5xwK1JGFYRKPSmiajgXPrbKjRdp5Fb4EZWKif",
  "key16": "3CeKnjDH9JUWaFf39q8AsxfnaratJ7XKCUif49dKouZojEBmE5boJYEJiRDv7hkaNiggyqk3UByEAsJ2Z2BXmS36",
  "key17": "524GvzmZKf9hsx29TaeEMSoZyH3CGppBBc8ctWqFgya3JbBDSe4MYEPAYMAhjpKTdmdsvgUJULrDfoCgNz88xWUm",
  "key18": "5QQNm7pzrketyu8cVcLXQF2KeYDk9jDDUsaoJcBs3KZNZ96tRdkLTQiKzjCsDPk7j1i3KXvWiyHsLYJ4djymXAoW",
  "key19": "RHfDMgvjAqj6Yxx3VmaNMMJuY3u5i2Ao2YySRC2i927a3bJkcTFRxxWfMfuJRcjr7uM1ZusnE2MbNHWSvmoh53C",
  "key20": "53ZiRjryQZ1fokw6G2r5zmkTv7jG76tSJZwo4bHyJMyFoTjUn5gNZH9ZB6Po23MLpJKXAuH9T1wjo1gZqiYd2Cqt",
  "key21": "4SqAXyCXLJTU95GUUtKLsvcUGNER15RWNpE4Zmr7iPYbaexipyhxhxRuLSvVQ42FVe2yi2YeJDix3NaHueEB7soG",
  "key22": "3A3uAmx6rVHUTd24NdAQCDayY7Nw4xgaKtcG7rr8Ar6dLcL5pbm49oViknBv7mC2w5x8EJnLF8tE97r8GC9uYdNU",
  "key23": "3C7q4A77qeLmZtzDKS4PQGLnapcbDNGSYeJo7pQchNpQuxwQtTz1b8kwLjeufvLvAiiZbrroCv3jp8sTcAqCSXpD",
  "key24": "4kbhF5D7cLS69LvejVsf4WbDF8jqvsfEt2ByVEA1Vao6tApgfSVS7nTuHw4io5JaHE6pMeP2rwGpF62Dtk9Vyxhi",
  "key25": "3qbfUoL6aAWttnzaamRgpRESkTvPqarXrVLfFMQWCLqQu4ANd7t6MgnNQyWyi1tu5khjCLZANHXbCbv5AkAQNT3x",
  "key26": "2fsmuY2xXDZYuVx7FA27ybdja7Hw6HWadSrXQ63cavW24pyKn34viFRtyA1Rjozmq4HyLHzCKf6UZyBgTSScdhSs",
  "key27": "MQx1LSdVUyb4WeUDRj3fGAeS67dfXNcKTLqDJpw8fWABrqu3eG5yW7hfZDzbEdYYz8LHhEqcCNx58iA52f7vdn7"
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
