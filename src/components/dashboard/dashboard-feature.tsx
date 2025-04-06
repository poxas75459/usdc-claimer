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
    "2M3De8FLaMKm2JoiKHChtLEGNTB8KARuW8RhP4cymugn8sjYHxv2LucZFfRmjSGa3KGRR9JJDa9MpB3m6o2aU9by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxqcLzdMTA4ZYH3hEb3hQ5ZQ3E8SHiJFNnyVBf2abjwt8Q3jqV3kmgpn51oxUkrqjjqYnH14EtZ2rhxCeHxAK35",
  "key1": "4kyB7RL15JdC15mHkxBLGP3XHbE7U12ZXd6frwFRkqnRyM153qYEjm8c8wHjEGiWTa3M6Zz57EGv2g1zKvSf666",
  "key2": "4j8fN39o5qN6hNoACvJJvTk5fBkDDowJUiYNgrL4i99hHYaWe9HmDufx44kjjUMv1ujJAbSk6RNMYYTpdDr8wpcM",
  "key3": "3hXZKhX5Mw2TntXnPU8m2xQExyhM9d7Ggy2WhDsi9CGRJax6MFHXhNSQLGqoc1G3oJ4i2s89xstFTLeuBGPKYDpY",
  "key4": "4mJdtsVGkymrqpL3HqeCnQUKnK2mVZmWYYsBMTSBRwVP5q3KAHFTKNmqu2K4p6LUsXxVYrhm44KCKtpk8UcfMjb6",
  "key5": "5Wm2mMMPWgdh4oitbJAUkY9AjLm4yTF6tdEyx4D6F8Z15nsZHC1pb9KKz96oHSzyg1WDoxispgKZ5GS4NmQiPk1v",
  "key6": "61188Ne1inC1DiNULfFdx6GAXkNUhU4dZXcVL2i8rErgz8JD6F7aQWnANQHXPAfGayKLe4nrXSwGeG7nqwpVy8gj",
  "key7": "rukTHAa5wNys9GsUjZbxLZQSigY22Cp1zKHWPG81srwiBSMR9AaSr5to5XXdJUrRKZXNdzz4sUo2EX89PX2bJHG",
  "key8": "5d7Y2k5xtRdB8T9d9XDRhoEgqXkEB4LtAoEuqiaxRRDG5v8ukz675T8wurikEkXUGBpBXB5YYCTZ83cZsstSyGRy",
  "key9": "3h6XKKaWWQTPpHaSMu6hNj8rarpnbSDGuBquZRAzkiTW8CD1xynQx4A16dYD1fnMnwbGwa9vMYppRTc6hduBDTNN",
  "key10": "2QqwzECC1dsUS24UeKTdnbKz2hmD5Pcne74j5KTuGuy3vUc4iFYod5V2g92v1cyoJayc9AWiPkpDhXuQm5byj2F3",
  "key11": "o72ybPBqvByfTZFkLYjTs9uZLRE3J36njjhB4biqpDnfWD4WxmixXyDVzwrVB7uKwt7UY5MCwcLzmDz8EEXEFdj",
  "key12": "5pMtUpDu2wbDFrkSbjMrqQHfNtjvqg64qYRAq8mLLjQHovQy6NxCgtX1NXe6ZL1F6CVUDARucnSrMmAZefqeTCaj",
  "key13": "4abeDmYnGm87sqpqqV9WMVM9bRqpevxu4S7ZSoJu6BxABkjzvxikmjoXq8g1wpwRQpBFHroP4ZtL44ZHnZjHpzS6",
  "key14": "4RTa6KJaAZ8aNEYt5fKGciKNd2MJ8R87ySzaM62bpk2pZ7tpnZJ1qaNASwTPrtTm55gqHH2gVrjdvCcco7nyQYHR",
  "key15": "3Gz4c8yD2kMcNijQMpSeF5YWAysxd4MKqMSQj8TFt4SboJxeJMwYaKQoBejMEFVwiU6cvTGXW7nMwW4CnEvUFBje",
  "key16": "9ja5dzSpgUF2WdWRZ3BRk7hanNCwyDoQQYFUGyajfHGqz18mb71EFwnGfr4a1yepybqc9HdsFdbij78cg2jUTJx",
  "key17": "2yuavgC7DECmhNG4wFsUBpuifnV7ivG3LxbEpnMYxFgGuWGvrhr7oofuTm2aCE4bU2bryhikkQmjF7QMexiu2iXi",
  "key18": "4F6P4odoRGfxSHX7ECGw1ZExmuXoW3Nt34tFt1QkaXEy2a1xa5JnYV6yoSvUSqTvHZxFwobWN9thxFfwhuqEfwJu",
  "key19": "2YFRKnFzqL6CiLRXEP6xuqfSEB9YogfySmX7TM4j9u8vMnujtkcDGu1JgSxY3FVY9JkfoW7XCqJB3nYXKTmV11SL",
  "key20": "46t4wqsAXZZWStAc7nWnUDgVoz1fraNpdVnQVs3xs5knQhQdWu9xbCVBiEzCbFiYnuzBjbBbtVybG4d928SCjDmg",
  "key21": "52rGEFoLGYUaqWQUa4B7D1sskTTKqo31vwmpH2ZBqDL39Tc3dnGz1b2HdsmPsbcZ2wBturzkWnVYAqEFde2vXigL",
  "key22": "YJmSsuAtHCsMBM4k6Ty3JsSu39RXjb7k7hZHf53LjJsUwNCKw3yBnWdqnFj2WqLx7sGXMsxyW9sc8FKk66gHnpd",
  "key23": "5XdJF2GfREUjbAbWUs3bFaYcUGBDC9jr7SuGz5Z7UghmhT7pJueoAP1V6YgfPh9kiNvPxbuWhUNd9bqCfnd651sR",
  "key24": "4B5foZq33buxtD9JT4EF5hmQL76LLKQkQkJ8tzCqiDpVaXyWkfW9fPjQga6HMxko8MbWwVJ16ttJfuy1trgi7wBn",
  "key25": "4EE5gHAKicBhNrKZcx3oMoswr1YmRoSdkpwLPfrt64ZLfb6RmXpXiVeBuiaCEwJeZJ6RwTSPrnH8YJ7gb3GbJTLh",
  "key26": "2P3bEgYtMrC6uT5aa7e5z4zi8JhqQfrv1Ksh6ctU3TNMduZz79gNFexaVsVwtvUsbXkfqNw57xdFEEuZ73e95mAu",
  "key27": "5AtbTBNytap5uVfpEeCerBivWnugjeXskbThJNVM4SKer51CEFGPUfAbRXKWPyN1gXjLoZ1mfP9Q8yDJ8AseJpwL",
  "key28": "3gxjtoX7U5x5gkUDPce1Hm7EaarSfEaFkphQ74HjPpgfJu6QhNUPq9rLuRPKpiCN69TYTJdiqw1MHBa9mVGPhGqj",
  "key29": "52zpLCwwL4i42pVVux6vpU9Fk6s1hSE9PKpjK1Zm34TUVBFk8WCLp3mw9zznBhzYEu7BW2G8BRMXyuEB5YxXue1P",
  "key30": "2njMHr9kzpLAuFJcVGAfiWZhTGLdk99HamYrzwyJfsTj4AUYeDGDZ8VZYxNHxc8KR9nuCkmTGBLASf7x8i1jGpog",
  "key31": "2tZsZognFjTBdYkhsYjGWRRtJXZzqxb33QsQYNauFKnSgSXJMEGXGoZtkhoErUTxorVA9zk59ED5wcreWKHL5yko",
  "key32": "4ZDvaCWzcBvFMn6nwZgrGDqsXA8SYfRxhpUvHB8cD4AmcDNaDS5MwpmEqvF8ySWtWc4LKmYiGy95PnaJfJF3edaY",
  "key33": "2SdnhFepCfCKf5pq1CiSBwjsSjpXcwwZkWSzYPz4KMoVyewz2usnNxh5SiocpvUkWbSqJijjTeN9xuQD6soLQZ9N",
  "key34": "5cNLrSRqkZhidAwNLD6jR5iyymBhXzqAFhFZf3A77SVtyWAZuMcjdxkA5sKmXVuXVLEDZoCkvuck6Rm2hoC8qXDb",
  "key35": "5ixeUC7wAkmc5VCPax5FtgMsg3moqLtHGYxSPUm9U14NKMyu2xtMDJKVBT8gYPcomLrmNPTDxqQ6hKM9TFf3j9XP",
  "key36": "3dLCzNtTYB5ug7sRkSisBwjriB8wv1yF3hBDbXz6q1CX8PhEhUPEup41CQcZJhi7dsP78pofg8WifYkahkQvEmUb",
  "key37": "4eB2TRtWeTjV7aewQ6L1bBGcaG9jg5LBXRzNfZP4WauZj5cmwk8ZFFmcv8J7RuSUagmjf2YT3ewea21XNQ7JrvUa",
  "key38": "3XnMkooWYBUzQ7iKt7SyNugnHw81N3rKA3vSNAb7sV8PnWs4Xo3WGy5mfteCEHGmB4pTXkW3LMYpoNh9wYpHiaH3",
  "key39": "2HnUqAip5cV5xNxF9AUzpi1LdkFGZL8pBtRYzZDGYbpf4iqEuJcNbiM8b71Qc2UwCjBSQFQGAKZX7hM3G9VX7m6K"
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
