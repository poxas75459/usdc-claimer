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
    "z7PTWKGGn2vhAZs5898m3Kag1gDChTBhmbE5oyvaZgNgBi5SxT1ZKCqkfu4nFg9vC3YmvvRnWLGdQdQ1VRbUcRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fLi7Jzxf6uXtsD9cjCRzQckhzRbacFUVJHD4A7Q1mNkme5THpnWbD7QfNe1kDcRnmwx1Hj8sx8FpxEeGhPzcVbt",
  "key1": "7pWXPC3TeG4toKwZDGd9qiAHpAjnnDnjQ4po7NsmkJXy9aUZvG8gNFhUbjzkDRBM7FTWFSvqo7nufmQVutYxr2V",
  "key2": "3WMuBA5J2CN1Veq2eoGPkAdDWviKzXB1aJe8i4XqcRJKXAJRvmZgdtRwME1vPXsZbBZ13TgUScbViZD6nubdfYrb",
  "key3": "5eRgmUefiJpdrwrFa9uxgmYbDBG4pmX5ksaZucPoGAHFbuSGs6oTY3KGUyfwSuzG1g3CrpkNsMCjWebDtHodm1ek",
  "key4": "2RAyXjbifyzQW2hqTS1qDWnT2ZoFnAC4Ef6HGF19xyD8t1vcqewnBdx2XdXCgYaAktFjxKDgqZ9QGSi1eZaarrgy",
  "key5": "BdZNppmuSdE3gKgzCqiVYyRRN8MdvRxQv8g3g6HYTAGfwNeVjaB6Cm4rZmWyMPNnLgdKPGxkWGcEni9YNYWX4h8",
  "key6": "iqzY9DArAgLYtEADy7jnpd8EYfUDCFTVoSzVqGzSVCDN5a4oAEXW7oL6DnuEfm2eD2bp9CDU99bxzExG84ksKnz",
  "key7": "4Q66mSRmmDPfrKasMcHMb5XQPy6zGDCgCdzvJ2xtb4YV6apUz3jZ5NZNr1S9S9j4ecwEuGcjxmE85jSsd8U1q7RM",
  "key8": "36xdnJo3x4Jwg3VfZBwe2qoDHFmnKzb8XECiJwTZEfPD7C4EtRW75JjuYHVJoXJYR74cPMwQTmGDp6d7rZqbubQS",
  "key9": "3cKARpZmuLompc58hdzvLmKEhdgCcEqUvXXF2p7NzMSjvgKRinxV5RZWZd8AUEDuLCduX3jMZp4qyGA6D8GJoVQg",
  "key10": "2xBj1jd5wbCzCtsc2oAHu7roDD4LhnRKXrGRvDJiDSmez9HX8frDB6Ye6VsbBht9bAJiYBfZjFes4bQDkepnm5z1",
  "key11": "5XiRhZSohUXBPGn9dmDPdZfFi1QmptANhdgfPABBb3n9ADAKVb6ATV9tAtoXbzLrRtp9K3CtNR1boG6Vuy5S6Zse",
  "key12": "4s5goj9J35j9nPHhqAQwnx8TBP821ukavsQKkJR1HCZAKRhNGTPJcjyJL4ZyE92PJa58hgFkhm61M7mm2sgfWcrs",
  "key13": "3JvVgLRY51ocBNRwgitZgAvA6NZFpDXtW2y7ah71mVSHxoBja1oqsHGiLgNdpvUmyPgj8dhaun6NxwZc8CtcGeHR",
  "key14": "5pir8WwBVjN8LyoEjiCvbA3YdrynDnUSMg7XejnR4Mhx2cTsEWqEZrEU6v5E4758eiK2RpvQRnJ8dyeeVU8rdHxP",
  "key15": "gGsKLzEgwFkZGadbK3baJW2fLHQ2mBP3MzJvdE769XqL6rKuwpmic6jpnjmqvhMjPGWJjoDixdvkJ9DS5gdW8h5",
  "key16": "38CijXEnCcucCRhjMJdhaYMzGWC5t6FprHJtF3wopXngK7xspzmCkiix3pwndWngLUHJKC1VQWatEQPUmHrsq9cU",
  "key17": "2oYcUcm3FLfY5grQFFYHDhQk2BcMXtbjXY6PKVmhEckMgQ8bBkiHeVxK44mNfS1cGRbpTgpFW29cyHUALrank5r2",
  "key18": "CYtUeJDwfSVx3YR8xHanZJqkVzX32RvtYkHtK1qpZgDQtybxQC7wLA9G39GJzg72QCmzVuYBKfJMwHAm5SJfpqE",
  "key19": "3Ny5oJzvEH4mTYNffnvumgbgyc92XrFpAZdE7D5MdfMC977Zqs9S9tJeSK6Vfqoz7rxmiRT5ELRtXagnBzGA89qT",
  "key20": "2GodX9BzQuPJgi6PzgNgLcbzUt9NyB3adNzvnjc8ZdsfYtz9UMdoY8yZKTBQapZQQdbaYneZPEaaQ6RYUuPae85G",
  "key21": "2Q7ZHNLrHbA7XNbjyC7ho9BAZ47yuNeetu7CLeHZjD9j1oWZwWcd5ARxkW7XKJnH1vYHjJN6ZWzrYNLX9299ZkUH",
  "key22": "2YCN5pKJBjMZGjMwH2pFhPQDWdwP5RpsMG3ks2TuxSWhUxQHj8w4r8WtW19GFbSXuUuQQL9ruCdV8Vo4tyiof1sF",
  "key23": "2yq1iZ6KFBZyq7ZPVD9z81fJfPzH26g6Cv2nBKGYZxsZvSbcSTqRoRBE58ynNPgjECRaHVMoyegekYEBtdhrFNGr",
  "key24": "3hZdFqupbycYUb5ewTWughvpKuVjmdPdyKZg82m4ePLV8UNfJGR9kjcKSq8JAKzC98ynXYMPvYsrA1Z22XtXZtT3",
  "key25": "5ftUVpuCDt16WSKH2QTjteCuri9wC3zpJL2PoQxVp7baHBwfcJQDpeYbDpTEBQxt9dFFnV12WNgfsTNviuWHZvgU",
  "key26": "4PDa4TDkE7qfRDEihNdn9HbwRRdVyspH8XMtGvcqDmntKE9wCAgkJy8GXnVkszdgdp8z8dDnvEZwHK3FgqU1Uzzw",
  "key27": "4HVrhUXFhQ7S2ZNopquRkcuN1Hx9AWqe7QPMYhXbgXFKpC9SmFzW7F2crDKM1bZf2e3qzUXmidVuAm7pT5R8M49X",
  "key28": "5b3FycnKxfCNe9ZwdoHyNyFwQMKCsyPATUk3oj8aKsJwzgVoZBDodvt3qm1zaH421kK5KVjfr83KvoY7Cg7XZpRd",
  "key29": "z3DR6FEWfXwGFEcQvnC8x3uoqjpGReq3w5c9BcuTxRLpmnDXTvs437df6kfsvnXAiHeCqQqR4kyaHwVTZBx22mh",
  "key30": "2o36Sbvkd2cASRDFxmvThQMLkEsAfLUafwPB5cti3hXLK2oCp8KiHYKUmaiC1Zz34d33bT3eyUBkXBCeGkhp82Bn",
  "key31": "trAQ4xMKBkuj2PPCLAdgnSLkCLxpwsABPvizLwz1xuFhA5JQdJJ4S95QLjov4HfDVrVYDbyaozAZTpvkVVM9zyB",
  "key32": "2ujeFAtqm7SUVKMRiRYRv6CSEQ6NSME6mrCoGX3V1LdC4bMAhaA7T7V5Le4bsg1wT4DYqP6aCC5Mw4HX9epjzvao",
  "key33": "C6vXjfCekQbq2RYyakdq2ioV5h1MAScW7hxD8eRC8roc2ZLLoUTx8DvYKwfxU93FUp249QbCGWN8LatP7P94PnZ",
  "key34": "3QkEkCCETWUJyLwYXCMkSQTW4L6vgerHGqarTaCKoLNpuRzXFQ6aKyQGvAB4RcdFvAibvkYK45CUJHYcJwP7CEeX",
  "key35": "2MEs1hFrSdQKGVnX5usrtaEX1KT3wb8RT2uT4fwmZyWEUJdA2xG5NtubHmEPvRT2ehNBnqq5HZuN8PYhQ3xeuRhM",
  "key36": "2BU2WfUET4NcAi7qykUejsxVqs4a7ZAAn2DM9G39zdDxc3WFQ4zxkFyXZ57fBaBFzs1yHjNXDRo62hkfYSMAqVt8",
  "key37": "31qkqWoz57NqgaHMqc7cBCGHQgn45ZwdYZjJMTEdKKvjFWtYBYy4JRZ8GAnCTiFxTNjYDbLPqGs9d2RbuMzWafUv",
  "key38": "3SjEwBoR4nR57gW7LrqS8qRCcfXEorEWoJJDbqU26iFVr2HD2sm8Rk1Tmi5g6Lkf7APUJUPEn9s19sigpu6fcxmh"
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
