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
    "3J3LdxvnmzJ6a2uXiESiW6mR1csiYCfZdN7aXP6MKDnFhe3UYFNv3oG5oSQVdUQdvw8Fvs3k7DBGtco7GPFyhaU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFzBCTiUHusMfeBaUYKaTRuQhUvBBgPPQMVGZbwhnpMPvY8uURRkefsGV273Ts9JvkkoWKaD8EuBWAavxxuP2qy",
  "key1": "37i8p4VVVQYvf1dzEQudsrfA583MRxW3ARa5pEWsJRevqKmnPUjJLKpMPSGQJ5WNKTaxM6jF1KLhnoGSF5zzfeLH",
  "key2": "5zn3Gmr4BZqQYbZJDwiCDiiMsLGBDRrUV1GYdvtxtFs8f7jqMhiSXwL1XH4FoMqGHDRmf4g2T2VwUtZWS3VzmUpH",
  "key3": "44SwVx3jEAzWNJ3t26VURSPHT9MubNiA5jAWcbvRTocrWjBvMRn5JyiSSwTHYRLH3k8KuLqYYTKHhJNSqQVoLu36",
  "key4": "3HD5W1YsFwC5a51nUrgzGvppMKUqE1hXEkiK8EtNWLUVit56aN6PUXYyPuo5JVWp3nKb35CsXw9FXfY8sm8gnWZu",
  "key5": "fDgc3RD4iuV9MYhMDMd1t9AHGXoHZ6jwBeg5vWFi6A8G3ewoFt83PtCY7DwPdvUKz1oLzGn1F6qfruR7xJSbMVN",
  "key6": "587oztFxP5Ymn3h8VDcvdgTn372TGyEujcJy7hS42Lmf27NTxrTmWYGF8AWBLxyNrKErdRBMtL8cNksvd6SpdivB",
  "key7": "4M4VagaJiAKcQA7dfDLrBKsPCrAetshgs5b26xtqyLXs9iKyVrevcWjvRPLfJZsJaxH8pjrRzERLGHiCG5fi8Dv4",
  "key8": "4JRdAecniDD7vr36yykhjHeTyRBjuW8TJGJugAVfsqjq8W3yaCSjVY4eDK4nGPgRLEQDkGCCHsHNkgSg1p5r5Mqg",
  "key9": "33L18LmXy4iUM8fmv5h6aKtdbDooqkew188eDtL4tpix9uHy6w2MYz2vXApNH4ikyZo21TA266WcAQmfD2ELcAWY",
  "key10": "tTCgGZEWAsUEgnffAEwS2eZLo9LwzcRWJRLeQiVewdm94cUWnmmpveqBFWu8KEQGxWCHH7SW9QLHKUw72Q9BXqw",
  "key11": "5DbGiKa6FnTAuPDDvYCcBAuY4PmntqEyZCqJ9azgzqpvSMnbsSQ9qmcf3JmNxnyCyXcpfV4ZnmEbHpgZQsZXEjko",
  "key12": "QrnmbGDY4vVJcpBCvkGnLnwoKNj169tQ1dUhPTdDaeinTUgzMg7xgyt54ko7yMd6jGEahzMZ6K5bha4jRPSGAvf",
  "key13": "4Tcmi9YEzJ1TFmgDwN97aY9BdRfN3p7fP2sL7yPq4U5PiPCmiJFYA8hYZwmhMDR3mJUyraZvCsNdETQw7514ZAPF",
  "key14": "4Jzd4i8N1gi2wF3zuHTyygKeKCZoeAUdDP5uVDnYvvnsKbJ2aYNvGJ3dmwFMbCDrSHv7ERuLy9fLyGGW4Y3qHopF",
  "key15": "4K9fesLixehY8p8ZaTunfGoMctjEfsMtnHwt9iHE8Pvc99sTGNvFbYwBtJGKa9ugY6TtXUWAxRHv35gb2pBKP9vG",
  "key16": "4Uu9CWa6K2wNcQY3r6ZL3oc1GB4KCvQk5ofJokxzcisjFdjqVaQHiaDWa5nbmE5K4poG9HzDH5MHMem5miYoovgk",
  "key17": "2rTz1jcGFuU4Z31SxuZadFswPm6ipEcXYdHxz5eQA55oSQWiTjXLaid9p49eH8aQgnJehq99mXrFXNgmTZGakFT8",
  "key18": "2cfBSrLTzbHFXMNSgB9JpHz3JaSfjNttmREymFqbtZ4C22RNrEwWDk1XEsHStTbZPo47WLbTUoaTmgpK117Jat7G",
  "key19": "5UWZcs48sRhJ7KKUTSgi1FWQMfL7bbHQEDwdrg1Zp7T8iHSAtzigg2AdBKJ75mwnb7vQGzY99mngAoaLugtnUoWv",
  "key20": "3xVQA8oKAuZSugyVgj9Nrreq4WWhX4wgG9CeZESgB1G7jeU7eEpGFvtGnBaY1YuG6VV6pVGN6rZskuhnzzUhsYi6",
  "key21": "5Vftn6gLJSh64n4V2KKgaMtWWjBZJ3UJq8QsMizwgEJjoiFamLzWSmghXkWzruj4Uq4ia1tD9Hu2kgRXpMh993qu",
  "key22": "4bV8PuYaoKCyymMA9Q71YSL3xrEzXyvV16NBD3ZLuoYWgs9GbMbQF3FTBuVqCeG8mUG5V6nwxoDjqhaBazVxxDKD",
  "key23": "5XciyK2dD7NAKxRKoz3k4Jk86abmuYxMCjz9PZhubh9cHatx8C3gE4DfZv6oGbfTSJpsQaxqkMtfizQhtUUNuhrz",
  "key24": "2fXB1uPUPNDAdPdUM6CVG55XUo4wAYjyhZiVNnp1kFrZUnt56RsXWE5kWVhouMh8QyfBzdqwFaiKUVzTHrs9W4v6",
  "key25": "3tGb8GWAMgDDFPBFFWeWmXDmbtGtN3hKay3DtFXJAUg26PJD91K5ugpKhHyqy5AQ7362SwHVX6omCHU8e7RjBUJZ",
  "key26": "4q75WjBGPi6ZQbGk9jMm1rtHoXJMjuiGwd6CkmPLDYNbnaoV2uTH8HnQ1zxcUjqRhzhf3rkhw7gzhwwJ2ZW7GNWo",
  "key27": "qJ4xab2hwLkKioV1it5nXnwo3kPonWUpFza9E2A3nUtUZnG85eB6T1SYCXYvywwrv1SeYnatL2yYXaMEWMqGL7S",
  "key28": "3VNkZVxfVkVihehHrs4PwwgSYWwVzFH9oY28dtR5dBAToChiCsNpvWGKABamz9CQnNkPfsqq4WvdNB1pABVFE6x4",
  "key29": "23H8aNyHPbvc8dCBvNW46P1M244pUdtTVRAeNoshSaX4EdDqrpDwBhwjUqUT32cnbDkJ1vG1g1wPeBRXK1pvkRef",
  "key30": "39fXN45usf6s1wFPi4JNRnDqzWKVRiZ9XNjg13axhgQmK33BYMqC7A8LQiPSFy9ABpzx39pVMzzatrNG7tWE8orb",
  "key31": "TDj1LS2F88ujw78mCwe5CKU1Fo25Mf6Us9yeYzB77zDcodoheRe1LDmeFWK6WhqQgtDSeujdbxN3oLQaBxwwtpA",
  "key32": "5GdSk8iLX7WZLsXiZKhHRD77wGgjVHnqvLiN4CapvtZg4qQdzyAPm8NgegieMQ95BhKdgNs3B4vxAMn3yK1wGCiN",
  "key33": "4WhzRgtxctmRs9AQwdCxwB2ofJEhBuhCgLuKMqU1bcE8YzVkBeshrUgTdP4mHszwebMSe4zUpUhn5WoAicF7TnYB",
  "key34": "44vbntdWcegi5GoTZ9D1tHA3LeRWZH8TbJEfjvGhy9SdPaW4YRhRphPPjA7cqge3hnk2dGVCX44Pd85sorFJ6kgc",
  "key35": "4kXP1pBsRBpFCcqfhEhot2F1HHyLPxMJ9RHcttra65y8FxrMudE6tCdf3ruNUmLBa72fXXmRfUBegzWgcYrFWikJ",
  "key36": "5E41NSdTks25Q7NywaTQZg6HhJMA516NhUUXZendaYHvxph4rYNtzkLRVMH1bpPgj7tdq3QJY7sweoWCpha5hUbX",
  "key37": "DbfgqwUS5S6tfULNSQLGKGx4tstpH82oUWSifr4RUubTRyRvDgGD5WBcQo84i1Y8qLbFXRtDHN41H1vznbdhr7y",
  "key38": "52DCJ2Hm4wAFGPQwkAxZ5xKGqo8DbhxG46miti5CPDACBjHpBeYv95wxNZMaT3R83wmmHq5uXFvR9YqUhUxqvBKd"
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
