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
    "3UuxftwMQfMh1s6mi4dqTNyDE5S2AXwMCxcDh5Y32RKktMj2MGXYtdYerk4KgrVqWtb65QMau9psNNrxGENP2T8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHaYEx441AtEViUNbETsmUCPVG8m1SEjg1eWbU2UqbxkogRGQQQP4qywGKBgXx5ezZ7VHrF8GsH4v6mM68YVrp",
  "key1": "579XV3gAEAphaECwv5wCz3FJHJ2g2NoatxK23zZP2WKWJQdZABGzK7SaM41QBs8eHY6DN4AFFoFkx2Uwv2xyDzzJ",
  "key2": "47jPrHpZ9J7D5gfmfA8eagFuhsNbhbPVhGqfFN877WGvDMmQPtD3CZJgDcY65mkCgAqa9j9fjnEg9CY4yoJ4A3fa",
  "key3": "511PWWVi2PMA6L1kNhcbpGi4rKQ4rZw41WrRjg8qeyG8nUvuvCwipHrqZz6wdUdC7DjrFSzTCos2jqhaDjYY61pi",
  "key4": "2BYQTipdHE6Qyc4xLqBD6jjwcYqeJiQ1kWhqhn4hp8aT4kgrkuji9BLoj4GmharYR8pTJokjkoGWzGsfBBuXKNXM",
  "key5": "23fQqF6KjGaNASJqjwNQieCyaCge63MjjD3jaDvzAtwDcXqAF1Wf2RzZxmk93VrVrYF7bRvRQaNxQL7EThR4tAtD",
  "key6": "41iC5d11oFjJ2ZhEEQaUH1QEqBDjDfvVDtt66prDgfUcUBFC1pqLYkWwDyWzoL2zxqXX1tct25aPRZ4dCt8HL5NF",
  "key7": "26nbd9QjTPB92zDPtNnwJivXgpSdEMvcMAWq2d6VDcfeD4nQUZ8Zrq3g3ZxGqCV9vjUcUDvDsnxyvo3hPXwECPnU",
  "key8": "2uptUaxjJVPe9QZc1F6MJga2M8iSFF4EY5Dm83FTeHJRMKMuyjGawdLkJTooymTV5bc6pVwQBAoNuTMnjLcneUjJ",
  "key9": "5iUdYwiQkq4QVSJ3smbR5QLLDrbo4PaTa1ACXbff8S7X2wywHfk3cAgLeEFKUzqEDr8wbN8gypeP5EUpiPBkuFK4",
  "key10": "h4rwbgwpoHuKfsCP3ctCcK6fWH1F1WXgCMjtxS6WmPEyCbxe2zYvBorMZz2iMFWdN28GXP4qu17A8EGpewtTKLg",
  "key11": "gpHj48BewenTH4QbhX59GNMTSXQecVV9FjhvqEszCnTAq4PTHafmkrimfQAXVzUuZtMhGQyKocqKySEQcJeWgZD",
  "key12": "4rernSjWzaqXGQpHAZqeJ3j5oV1bhaPU5bD1jWioryiSqedWiPRaZHVSiDY881Q5SjQAkReoYCqLAjG7ZKzfBnkm",
  "key13": "3Ehg5Bbk2qkgpnN8Jt28M3NGPUnXfXF3cbrJUv8oKxhAZDBt45cZY3T2khdruPD1p1vc3P9DKnMFTgSPigwCM6Bi",
  "key14": "oFT919DuNrHX364RpkqsWiMaf2uwAXayTpaBTr9emumud7FdwV9EkyUVoPsEc6dBEjYSPXCK6qbwYmFfwA1r5rL",
  "key15": "42AVKt794JdSCFQW5LPtwYqDoqRRsTm8sezS1nCHLD25j26VWWr5Ji5YtzTWpWcnqn9aNsQgFRNAQnQKTCzwviBg",
  "key16": "3MMgAMajTFmGm4HV57sRMCJEupNjxCtTjgkHHZ96MGvQM4ZFqGNTJx8J4SjTbJhBauTb3gin4bPivXvhPBe2bm1u",
  "key17": "3L5wfHaws9gjm2YCdn5iwEnpsFrjND6Egxp1ouE5GKAcNfHAFaNc6wWeqs9sga8kZy22YbSHbttWXHCRQ77XWG5e",
  "key18": "335bimqwcnn3h7VpUCgvU899X7mkwP4bK7jwWB7X58h3NL8nJ6tUPToumcgjxgzbMZF9iaDBg9iFfMouUsuXQDDY",
  "key19": "dEBU4w3ySLQyecpPqV1Lp4C8iB6uUdSRPLWNvi8iCHz4oQ6BQhuux9z6FbwjRycUzR3du5646MmsPJaiv7ExMqp",
  "key20": "5uBTtqePAMPm9XufSQZ6z53tvFVWYKhAhbCDAp8zCnVkFMkstRnLL1YNXs713ZEFyW5PJbVKYYE8XxGg58vdx2j5",
  "key21": "2tsRxwTBVVzUdHWqAkped1Lrv9RZM6zieTnisAjaprU3ej5RV7ZxpKLs9XrDVyMevWjYEfx8wiFzerL3U2gQVzcN",
  "key22": "2wS7SCp3ePJEj2GeNgLtrRHLmJoChNG1DePAvy2RaiHoedjPvSAcTusfKn2VmgFPJULN6Q1wJBqxn7AbPjxbhnYe",
  "key23": "3m8jUe5u8KJ4HG5weozD3DNqemo2XM19NhjLEQMp25syP2b9vpc3W5RMwFcZv8mfiCBrpvjbhJ84rQCLsjV7kG75",
  "key24": "5MbwM3mbXQfLB5zaZYD15u5uW8emukktRG8SaqP1EqyYoBzRvr2QXzBsgEJXk5fCyiH1HQ9vjyiGdbwboSpHVWTR",
  "key25": "4aFAdZyxUrdZSGvh9NqfH4zzh71N5KsjTdQSZBE7gjR2sJsYao8Q7Gqg1MHp2Nmjkq5Xnr8okCTqLGC7jRyLNTdN",
  "key26": "57etaK5PNm4jqScDtGUnhcoHZ9iqm1z2M36x8VAVF7EhWoLgf75nez6zAgip3qsEZFry6a2eLeY57yFVCEY5awpL",
  "key27": "q7FKsRFsDJKTQuxmEshtKNBJwGFyNxdZy28tbJRShQKsbqJtpudFwa5dnuYaMbq787SdcuJAMmtHC1YpkFmCmyQ",
  "key28": "2C6bD5jWF1w5B13zH2TDuBNExgKVdhsiz9vWhtQ3n6AXEKzGuZ9oVenWHkE1AsDryfZDCedtfptgpQNrg2hWxsLv",
  "key29": "2eYPCindw7Ya6LNfN8mGVKjGrAuaqufpg4SYbMUnnwEbbX9BsE8aHZPHBUw8zxdugdNonStPSHSfELjooki3q8fw",
  "key30": "4ozwzrKDAbkJ34ygrpAB9z1YDCSgfJQ9PvfSjtwQ5J3vdZySEbA7xhcsz37mNBSsd2hpbwi2TMYVAaWQw89qAUU3",
  "key31": "4Y7DCQHpwTMWTUwLHe76qEraSvMgy77DvEscC9se6gcewZ2gsoc2eC22vFKvb3MRHhRjwtqxZgrKvHd7XktuHMyt",
  "key32": "EAryMNAMiF59UTAH2pdVF1PatmGpzt4efmBQtBvEmLxDxbPBd5AgiA8gZfQCw2qd27pDQtpcqx4cHiT5T3gd8TP",
  "key33": "3NziUBAmvaxX76vQB4cN74HDRh1BESpQM48XwC8hRE85Y4opbEsZyLs1MojuARSqnZQrvrsfq34Z4T6engL3yNjN",
  "key34": "41nUr6LVjGcQmpJ8LZUzRrEvGWjMXai256arp4kNn3jL1JCtTsEbKuhT78z3GXpBVie7456YdLfQG8KxV97HUmTB",
  "key35": "22DaRV3jhofqiEBFDft1RVJW6F4PDcLq5VhX3DszyVEiTBzjTS71upCUD7kVu87Fro7aswdRrBSULx9YvX4dNEfH",
  "key36": "36czABQyEdfZm3jAzcED16Z1DMp2zGShSh3LcG6PswkouJQQ2Yc9AtpKBUULdkmHVNx2TJX6zkFm6NDbkXgedqAa",
  "key37": "kEKKjqNTJ3iFz7NMoboMSzhsKNYunFtTFeDezWf9GTRxegPgjrdthGTgowYyr83ug1mSWDGKR7pC126FsHbLYoU",
  "key38": "5NHTdRpGWNjd1ctHrx1511VZDgfWJbxuVtvksbYbfR58xvK2Yo2qLomJ4ieQ9CK5qvSbbTedP3eRcqMGaRZ192a5",
  "key39": "4dmtsou8Aqozq6h1Nqukt4mqCTa9pGfXxC2RcnwRevbnex9xoLrxEnWr6NZhuWbxWLmRMeDjg3oK5irbc5NtbFbX"
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
