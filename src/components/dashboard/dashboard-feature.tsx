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
    "5FWXbz6UVA6KsnFTGezc1ZAszbZJyyMUJbUkDainhhUbPeWag4H8JY9zDXjVFAmUdCLLL2H6pFYfmuCsYy3WhQWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32QaGrbhyZD4sAjGb9tQdC7ZQHbAgvhYLFriACZVsRK687SpybchtcBMdL1q2z8JREsW4fVwZ35yUKNpUgjB6VGW",
  "key1": "4We8DFuCgE8cjmC4MqVZVZ1pzHyxwSBHq5VX1TpPrTXvDbF17qt95wdiNRQ4XEds8STQeaeqykJeHtpihqCMNYEy",
  "key2": "66ktjZyKuiJskx8mWftu6gw7U4ETcbPGckzt5e38kSaMqEayhB1NJKR8sRVGFLZfbmPHGNBZsjhvydj4YhSUqjG9",
  "key3": "4afmZvqLf9JdE2jurMAW8VfFqutVyYLLiUc6FLHHnjMfMFS1iFYRFY785sKd3yRPx58fVVm6b6sGKPiCbpSJ8PUj",
  "key4": "QhTwBdh67MvvekP7dusf57Tf2xjvkBG9Pz15SJF6jgDyrA7W9UHghv6suQ5zaKN8UP6XAFJcjCf45qn3w8EbHhr",
  "key5": "z7R3gyGPEkuZDqLAyHvqjJ9Nq6CaSY27VT9oWUk9pkm8R81L3cWBACFux5tn86sz9p3yUKciZ7d2WCLgByAETBK",
  "key6": "2SgRSURmmeNzjXhwY3be2Cic1uNKQf2W66N56XV4WTrtnmtWxRZAzD4Hk3n41PcYqVtX1v2W6miFTN74f3MJAZ6d",
  "key7": "63QhD16Ux4rPvKV4iWRHo2sQKEaGhvfBDHHNm96LyNXR6Zhg5mxLnVJ8mP4oE7MiFjvBwXpbMfRq745p34pKvCr9",
  "key8": "5SnXmWxDMgGitYATXKAM11J5XvnfW18YjHXEGp9LPv4VhxjrJ6EPvyz21aYNGVsHbnKvQkougUuDUQcZAPyvPHdb",
  "key9": "84mXEYidTEBzxwC6Ri3yDfopWC9FviWtZDHKkrNMTW1CvDnhcn5ZCMMdau4Z97u8LGAhnnwQy85CH9PFnN2d4uF",
  "key10": "SRtvZLMA7oNCg4ijzaTugrtWQoh8yiyZCaF2i6kN3vYUqMQsK9jdzrChz7foLNfaKPzKCVWkjBki6w3WTvRX1cH",
  "key11": "5AcLJ7VsfDCnY8m1s6pLjcdBSRstKQNhx1boadufh7VcMuj7AVtpfKttTRCqQBqzjDgSMbdYBvDwr6WuA3n9VXAL",
  "key12": "441tV6YikoEiH2Pu4mK1qbMPw1gNm5qsHgfy6kzyE9f3X3vwru4o8J6WDcispFKDn3yBuBmyZVJ5x1X5aTzPrqR3",
  "key13": "iYbPR4Ny2g5XaCHhLnJqCehUsrrMnSJ4NM1nu9W3w3dMgskEHS9Kr3x3qZHGx5FRCnxgVdxowDVHb37aTujGeS4",
  "key14": "3qjvCMEFNqEB4PByWEpBbaigaysk2SyjPcrGBqXUQ2RLMEwzxNbzVNJz8y852TiVHGui64CCHGCgVZb7gA3n5YGD",
  "key15": "36UkMpGGLLFBzzBr5ntH2LsDP7X4ayNLQ9e7MZXwKkCWALpbehP8oB9DJiBn7FgMofXZKbWEMePEUvcPtzJmBTBJ",
  "key16": "3TeW1LqFGDFxFbSMBQtEJBJuJHSorqAtRc8roxohJVYGzNbfGV1PJZsmdfMVSBLsa2k5BgWjiL1EgUjfsUNB5Eau",
  "key17": "3jwhH33vYgoMP8YKTs5fFoK6yvN3DK2dhEyikh298ChCA1m9PWvj5s2u7XCdYi2VNMYiiCUEeTbyFcWfxjCHsiYj",
  "key18": "sSR7aq3VvWerFc4NSictnp2JxAA3nQV6us29t6LgSp3uWg57BXuEFoEe38QaATq2StrvhdpHE2vTgXroNTpbAjX",
  "key19": "3gf8ZK7uTiK92pLYfmRshSkgBQ4KjZ7vGwYbLXzoyjpn1csqTYy9vtsF7ADpz6rvu3vRJqBhdqrVnEp4JjTtrN9Q",
  "key20": "3bS4PpKCknjfPLGipdQN6tAKoempF7tb6MfBpKwobqpR3B7y5PREyRggKyNLnCpCr4zFkyi5YMpsyEWejPXoH7UC",
  "key21": "5t3KJRcZvGdwGW9oGXpbjVsSfqTvi81G446KZJFUHkn1GwDYbT7PQcunS4oWznEySx4Y1rqMjBqtGjHgzhF6dyeR",
  "key22": "59gQtWz1qGeNopQ96s5d2wX9J2uVFZ1cZE8KzcPAAAFnxvWuoq7PJKPYjHz5KsoRA8zfrYcGfTc6BJTx48CmHdMp",
  "key23": "4qDGAVF8NiRSWuz8ZHP7y9g8BiXRUiJ6Vpuxxmg2ajpXhUrXoacivurN35AnL9sLqfFzogXqWargFr2UDmD7VBj",
  "key24": "2yr9cVXtNUDaByrnx3kA9RH4TdYgvzNrHRYRfiova8YQNu5yfY7vNC9L6wJR5AZEihj5UejEF2APz96n2oWMh49A",
  "key25": "4tMRQLrS2RsNj4CVAf3KMeHT5V236Z24BYMzeHbwnCazAsjoYrqWX9jXoporjtqaTRjgpKwrM3d5xx9DegrSbNNj",
  "key26": "5fY8MCqM4Z6GVoGCHMD51e57ggFiuGEjKmLaekS9Nsc2JB1aMUobeNtNmTuVB53KfiuRsLn75WgRDRGMM9ytosRp"
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
