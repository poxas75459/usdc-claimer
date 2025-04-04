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
    "5a2odceamReqGXhWKpRAYhg4Ld6utDsEnG8G6dF5QXyUR5m8qyftCyAzyQ9P6ryZ5taqxqanmNjQfsPj3tshZB8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8FHN2HvtTYneS56ZqvtU4VtUfp8ZuWpLFUfT5hLeF4LZPw4pEbGA5rhr2GiZS6orHhbftNGYzuCDwtarjxk9az",
  "key1": "321HjaP8E972A7csoSkYPvyfHhKtkAZ1KZueD23QebzuRhB667wszPJ9PTKPB5sBcPz5NvjABqjBQgcpNWkbT1PP",
  "key2": "3nXqEDQQLTMBHcmjePcBS9dwSkbdR2TjoMQPVJaaVSbxbBLo2Cbc1t3Garoq62GJ1XASy7gyySpRYggcTz6CznWp",
  "key3": "4tEfxcb3y9eS9ua8epCT91JD4ghR2k13cikJgUW6Eg2j9vJJf3DTLa5MFAbpngJU5AFQ8bcaTSDL52WeXfqDwmcd",
  "key4": "zzTdsZQJDZEV9cPXGDYwjqvCaCBoejooQEHkcYEBfLW6zh2shT79zoCaMowfXhuN723fbZz8W6D2VWte3LuAnZw",
  "key5": "2WioVH5seraw9jAKzLFSe5Vbv9UjYdD5JdodxPpEvSfZStppUaYC9N3K72m4nat4n7KFRGM7DJnEPuQBKKeejMCg",
  "key6": "4DdkAM2nY5TP2BHgGYy6zpZzUEv9Cs6xTr3DRX3jdk9Ef9kQW6sAwTf68DeVqYPjXs35GYsV7gFQoewwgnfjBFCH",
  "key7": "4py4diUrz8BbddwyEQhbpX8SNqUjWSikDPf74rMy3GdP4gVkU4zLN7BM2Vc6zL7DnidNVseP2LcCJ76nTYyfK4CY",
  "key8": "2J31SBpQzDKRERMteVoa4EQTC6eyYmCMgLF6xSjiBmPKDrxm7E7hc7FxR5VyxVLdcVC51VpX8g7jc7QGoACo1AQp",
  "key9": "4JKCgJi3vXcCunFkC1V1ewcz4gkws1x4g6tDC2QpZ3JrmEBFjeAvC9Nx174zHkRqQ5hoBuykDShYoYN5YJU59Cyo",
  "key10": "imMgs36ubHixQrsDXqMLY7btDeo6R5VWsMHCNjpaguvaojS8gPM9NKSFXiTtFyjQC5xZz78ckjQPMVN2nQM9bvj",
  "key11": "2iyAv3CJ92ety7ZzQ3b66wFxK9unW87nmh3aWXmXA2dZMFcS1ErYTUWk4yWz6jS6HnXJ1YaxvKbocMcuxwK2kMBg",
  "key12": "Jv68VmmFyznM9fiyVzrA5pbWm9Y18AZG4McdY1R27jtVuZgnxgLrACeKRpxsfTQnc2D7vbJH6mMChZDKWLxyKk3",
  "key13": "3xcxfRsa1B3AZ8uQW69FLQJRktC4WKHP6qNy7cySxubyuKF51ixBikDoJanxXdQ7vkZGMVqamzYQrudV6sJewLXV",
  "key14": "35QbBdFqPifB84DCg7VH8hqqxxCgV3451QCRYuMsQjsdF34gJfit4xgNb6sWhc14NfKduGYhZAmZY5R3WJjXCaP2",
  "key15": "4E1wDFUkC613giF3ssehrPRt6MKCRf9RHXQkAjS8EQte512DPgyS8ML7tS8jZMiowcjJDrSMiJ3r8fWmqWvRALNJ",
  "key16": "4fiCxLQrB8mNp9VXxtMxeUKaFuUXFpBVwnSwkAjJK4AzVhZqsccwNvWnr7t1BAcwRcZDHPaohgHoJBsiUqYmXbWp",
  "key17": "Y2MEWu5dFhEw14h1VF6pi4371NnLK2HK9mcPkQcvYYk5yZuoeEx79kWMhZ11pvqcKpy3F7eog8wJTJwBQpNj17y",
  "key18": "2nRatBWje9UrJtxvm9aU2dHrUcXxYfihQZ4yVdAK1cSF5wCJYfRaRd7tkqXv47QpaM1Mcibc2PpdFM92uQxdwUyq",
  "key19": "3cb3nJtVifoA4JEK5QoVsM16JhDCgUHAKf3NBqnqbLPdm3UzhHimnyao5KJwz2jC5pkVzmmiQG2jrCQR7CT3ioVX",
  "key20": "5ahNgvnVBe5LHSGGWQ9ocy9CtLQx5YwganrVzi2NLtswqec8g8gH2pKsYYPCn6m4pmJQEERXaFKr9uu5cX9DbiwY",
  "key21": "343e8NFPJ93HRuUxe9hVnn72MBZc1LdtbESvu2jTR51vWHicCkq1LMN3Um1NtyDpUkzikXH1rg4mcu1vTRoDKfwj",
  "key22": "4UKYqoqYNBCvEhAiwitK4csVg1cttyPwStGNczdcQgbDzfof6gVFak9Lh1bMHZgucYvjYfLnNuN3ztm5PVZmXEoM",
  "key23": "31HbymrB3zN33HhmdM5jckUdFx1sy3poWhbMPes76yB9ZzWyNgjs5C8YH9hxHGC25w5p8jSkZQKGnGMpmSfP6K9H",
  "key24": "57BWnzoDQwxPibhRSHTdFdSUii52jhXdGyLQxAtTHdVvgTJqoN4u5hzGGbSjEhKLRE8D8RDoL8cDp2Wm8SSmiowX",
  "key25": "47vayMjtk3z6oFGm7vEGbKsgAv3DVtA81FUqMeD2JrY6pCJh6sS7JAkCAcrRN8MaBd2seZ6XnbUVF2gaeEtoqrKC"
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
