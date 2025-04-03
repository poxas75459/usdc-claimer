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
    "48tEsL7jTi93oR1ktpEohFWgWqCK7cq1CFapsFz2dmSH4j4kbiEkHSofoMcSgiHtJ1Bix9BbJwqDsthEPYTEGp9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPXiQjHxV9rfxVW9i63SRjcCEpzN9W3nSZGCbqysrvnDZnRgxm5uhw511P9wemhMj2B87jDjShk4QYJnCQgCQZG",
  "key1": "DGe216cGsn6gjMbGpvT1t1RmSu1gusjx1ZC1rC58meiHPN7nxk2vkZGkiheaPHr9McY5gmudsp9TKyGCvMmWosB",
  "key2": "2KcxDKJwwHLwjrfLLLvTuAdRU3PrN4EXTahGQyrW1QYdjy7ZzhhfNfdp2Vv4fbcM4gtKz8DArwc4UEK2m1Ca7uPd",
  "key3": "4zwUXoSF7q1y7iZMpUSRnM1RRTdnrDmJBrUkAMRy6iNuPiMFihgmUYMWSnMf8s8cZJVt45anAMc1d5bf6aScyH9P",
  "key4": "RjkgYfP89LW1JNZfQqw4kz8WZ5B88vxWk7anVmF5KDqCNNNKXpYqvu1Abtmutmx64oUrFKxsfjij7Tf67zaUCe4",
  "key5": "5US9Dt5jrmP2uvQim44iBQicd1GbHZ9pbzj3kozBg6RTwPbC4JdpYNJ7bHeY7ikAfSYkCz1LdQMNbz7fj6mAFhJc",
  "key6": "54jXMczin9bVkEoMfGupPwxNHtD8qJefqKPQuXH3U1Z3jy3156mQNKYdY821bP3rutkHChUdQhZaMH7DtesPmQkW",
  "key7": "3z8T4wCnYXZTqcqmxeMNhWDowdkWzJ4nph3ZZSN33WpdcDvFzvGHziP8Gh8BPyJCthxFjGrTFfkeAc7H2i7cQhAn",
  "key8": "2dmkYbzCbMAP13gxsrFj4AeWMxiRzR9nr85EQx1WLAV1HA6TCuq2JyErqND8XVw48Wjn1ZQEpSvMFhqUGCutpY45",
  "key9": "2Wa8HtFzcYpk4n5vg2FehuQvJcB1Yzsg8H1sMDtbpRycGn49QgZWDtiKe1zNBPcHjCEpCjEdWGU8xffQLKVyyutu",
  "key10": "5PxbqVkZW5D6TrzBuKDsPd36e6ipbJ6ySNpnnEXRLyfa6Cpi6mbXVpS8M1DqLem1CTPtZAebfXGv4o5ysKHuRR9c",
  "key11": "5juG5z5kN6ChuziFQz92rpZd8Y3UJRM93yy28gk1E48MsMjLWk14wUxfbYXcG39As9qeN1FQcsMmGZa2ZiEukk68",
  "key12": "65wvDAde9tTE4d2N8DuFNBgC7z3CCMZeh2yxY4H7Zmt5UnQ6edYFV5mSHmVknXUb8RJHAuyPNBYqWazvVDRXiJ2g",
  "key13": "4z9AzfmJfNJuR9symKqdQdWBLyGDhVtk7G2om7cVcSwdseeQHeAtVMJ4ndPuPEBvXeLNwXdJRCbAinARzSZ85jaT",
  "key14": "5idp1P4pgWkrsRW4kY4eRK6FhPDB12MTyQRnYCvWmMMjfyNExQPMHcQ1qcidHSMgCUBu4zqmBJ7NUdX2Go1GQe5v",
  "key15": "T7hN2VJRnZAWfaM9S3Laf7UrA8Uz9DTJAyv8vSE9ywawSesrmv9uchHvGK7pmUZGFrh2csBQ22YPyU5wBhExGpX",
  "key16": "3ZNXzcmXxCU9dDnmzu1BsGikJJH6bw6syXuf6MqqPa2Rk37zU7bbX5X2PqpSiMLUQTyXiVXuhK9tmmEAJFbb7c2c",
  "key17": "aEeoJKbVn4bFyAhNyUr35R94tfdQHMF3Ug9fU3qTkQhPL7egBgy8FWTc8wtiVDTW8viWd49SemnofMZjwQYfbxq",
  "key18": "2uZqcJyTK7SyiDW4XED7FnsRRMTow7bJGAJPxnyLWg4gVCTf2z1MgoaZXySZxxs9vbkwYxFbjx31bSeukUDJxfMK",
  "key19": "3TqNEPKGsAMBmYhkPXafNTX6qGzte8Yp36GL79usgza5QAGcur7BBomsdpGBS8ZKHxetQKdhrtY21xhkt1GmCJmc",
  "key20": "5kiTcv6dhBdzyrGN3RPMARe3a5Nif2eeoTPu68BmiQCiCt1Bdqs1RQQYqy22j4PgAM86LhXGSaPPbyQwWxdiGKsy",
  "key21": "vNv8wdQJ4iFZxgd8RNwbKbc14JLJdVSGBn2aaqYnk6aEA9HU65S3CdXXHGSzYdJxHwqFsTg1CU18GZ61pSkZa2i",
  "key22": "3b91RoMz2CZQSAMS1oJAmr1xcn5WozDfdSLcr44rs1nauYuzdYfWvdDg1euBjoWfaB4QvaL4AmeLL1eAANcdMAUT",
  "key23": "PQjEaivvEcb6EAaWTcsXgAHBWPPpM9zFUg3T3thzL2CxLFP3P8SxspC1bTs438g5U643v4sBu1YoZ1YMFzH6sFt",
  "key24": "5ehPB1FxWNnUAS8UW6ukHuJkY8KZF83wZQfFCyXxPD7ozq1Rw6Yawoz7C6CxMzmegct9cBrjVPyL5SvnyTM8MyoD",
  "key25": "4wGVyMcuxDwAriLv2KnTxmJSqzZMtoXxggHEzD7pTedbcsrPfHN32PreHMTVoJmE9UV4sQvwTU3rzzWy2SV1XHtY",
  "key26": "4NjDkbDRREuByiccH3es4wWgGVybUPNreSxWKTPY8vr1nEa56VLEoaNuUnQtRcLW9X9U22YBrehVEyDepYtsTzss",
  "key27": "WMSatxq3wV2FLJQ9HMcSikgZuC1rHb94ZBFg7SzRrdiqXMM4MCWasD4tUzKMeweaKcBwCNQgj5uSmbQFag2F8Ra",
  "key28": "4Yyj5m92KNudwPCeCJ9fCLEEMC6muGPWo2J7MZifniXHrq5qeWgAStnAxAYxDVn58PYYjDB7b8jc7KDEtNindC6A",
  "key29": "3rkXaV22r5EC3mEd8MDTMSw7qQk2tpUETjkrGCEkrUwRaD72DvAdgi4tNGfZXZb1CnNuK9dU34ByV5VkF7aDFEme",
  "key30": "P5uiaJf9kivAqPthM36qwQfURFuy92rVtD6nLJk8GEf6fFnStxhEP6siTCQbjmmErVQKYsvHyaNSy4g6ToRQ486",
  "key31": "5cDCEZYGSmyxdSunka9Mm86JakhRyfb8c9i5cKzfz5jUQambnXeKqbB3AxNL77KLWc8ck4P9VdjAbd7ZuH8tsrEg",
  "key32": "35v9JKmyJ7t6wtirmMf1VGL6hKBYceAU6NT1465Qsiq7wC8T3gko2asVU4osnDJdrKK1oGhTmxqSqKPFGFfbqsFs",
  "key33": "3FokNSFKygSZNKLGkiLqPR7YwLXehPsHFv9C1B776SyK56FnJCDtq2pTgDedrEJbXZ7oAdJ7uT5JnsC85i3wo8n7",
  "key34": "4nWpTyNcRcodbuSUHoSxZfkQsPTsm3om6aTsRa9b8x5xKt7nrqoEZN78DTKG8j4cy623uBmpn4Tnkxj48Jic8gDa",
  "key35": "hX8rxbUWPGDqqrNcYrdY8BdieQDBdHzm9a4Ax5tYmxGAFW8mRiTNHAX2sdUu2PdnT69dkzMjwgXf95FuYkJvPFy",
  "key36": "3ST97kCENsFZZTW6FNegcEm2vBKgpEr9j55BeiXsJkeHe3o4JphsLhFcwKMaC1HogjJpvfcDAtDE1pJqyrW2GHLn",
  "key37": "5LzsNNcc6eGredu9GFKq5fyDgPVNqUuNn7D82agwiZMsymAxLvUFzmicpt4hQhBt8fUvTPWiFUBHJS5pKhe32ZLy",
  "key38": "5EP2SjfwdTs73Q4CPJKbWks38gaVvrNQVLpcBFrYaPmcpsL5yzTGipgnRL4titZZmuBQT8XmjDfj8Mgf4eU8e1NJ",
  "key39": "3FRVQuXJzVL9nb5fvXneY38LBcRfnowbDb4GaZayRdsi7pov4BqPGRPWjhSDNHQFjC4fWNWKRyfNy1924nqEXe8C",
  "key40": "23mBeEG9bKWGC2wwKNkDrdsrxxStZzTycSKkE3zWuLYc6QX43anjRtxXF3Uezup5AEysEg5QfnwVcAaQjkPxsRat",
  "key41": "3N7nfrjcE51Md1yvkdbt3QvFPaFp3xKpMiGxXif6DKRccwkAM9yapUVfjrCS82nQcktxS52npEyVxgCwzV792cE7",
  "key42": "24gMwmn3Cko4uqQiF2RtB1Z4fRtVfLyZiyeegrgAwLd1EspQ5fAWRM4xLoNjsA1b9tV6Bb7GTBqH6JggtieMXrC9",
  "key43": "539J5DThwtMzh8DuvdCuYSdi9FFXYzhsURvH78EFNYHnm4mbF5hyhigA9kx82aG4peFqE38iSrzmfWEghBBbx2Zh",
  "key44": "guFA5gPZYYVZodDeHJPdBHxJChd7pDDHmNDqdGMYYRqW163H5JjrabFkTDAVBrsNbyCCHYb1y1zjrDLdxNFN69q",
  "key45": "3VBRWG2dfUtTswgLnPjMVaqMyyuQYiRHaFaHbYszBs29FnfgmjSmeSp6SLKJ1SbbHNVbj2tDAfuaNnRegsj8jAZu",
  "key46": "5bfZ7af8aU6yWT5CVc65gvyMDCYYSCyHtEfggnqqS5swoL3GdRyvokPcw2b88euPZSCMvyjfFdeeHoL5vjr7v4Ts",
  "key47": "3RmY2835rCsqw3PP6RXtepMbEYtj7G2K9TXAFsjcte5bLc9osfsvhnDbT4uyUo9PMmvz6WpktXnxH5Fg81wHBmNa",
  "key48": "41RXGafKmhn9Gp1FNYqpWH9VQ8CmY7L2tLWfqdf9F2hPPttjAYwC9BATH2P3a48gzsf3GVne4BaxE1iijSkcGT5S",
  "key49": "5BwMcFRx7FimAer1EJB516GQkNAgKpRYmg3hNob1gb6JdPdYLvpjKrm3j1fagAVT9DHLc1suJot5YddG2fAKH9py"
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
