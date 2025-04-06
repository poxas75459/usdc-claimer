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
    "3iUqNdRmFg9VHDx5QF6Ldbbeq1EgovsSHTdREhrFaFo724KP8ZT8r4KvBvXXK6hWidRc9LBQxosWTXjiAjh9saLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tY6Z4gLKLWXVrwRsPfxRc8PfkUoux2KftWMvZdPgUDieEXr3L9zfazQNk9isCRexiMtFVcq23NY4vk5gmWXt1yU",
  "key1": "53Xn7bvLzjApeJi7CdS6pv2pzFQYhhTyD2JWoz3bvuspsY2RABp8rfXzyzHDS1s9qyYiBJanFyTjh4JSrb8mnwGT",
  "key2": "Ue3TMbLuacVexwTFD9QFECmsTekTjMk5wps1JFrDejErtZkXdV3c84WpzJxnbC9FvNgnYjYxJ2gwEotVbAxsvJH",
  "key3": "5kiW4nC5247DV7RTVjVSoK8atLy627irYn8DTWAid8cXLkthspqMum9BKtGei1tnoEGK8Hj85wjNQAN6JeACN28G",
  "key4": "3NKa2vfEvvxsSNhYc2zqs97LdWnb2o5yTbjjzeCKfy99YzV8hHeVB5mKkGbBFMCk9Ud5wACfx6V3o6T35gV2wvQn",
  "key5": "4JMVX3sd5KGxkCFjDGnU5vTCM7ppbgWfCvbcrJdhbn9fqhdh3vxBGVZidS2LCHapKgkcAE8Zc1pUq3gbw1H9tWCq",
  "key6": "4Pw6Hb5RRcsosdB73Qng4VWMmnNXpRoBmBCdZmBmedwguJEJQti43q8nJWEZLqacV31q77Dnnzckc1SGPLSYUaj4",
  "key7": "3PAbc13Ae6UZ2mANBvdYuaqjy76Nmba1njteuZyXDZQTYQEEGArKbYm3kiwc8JJntNp6mUfkzonUAf2EKK9YF876",
  "key8": "5Qv4dSVKrdUt1sm7DJtMmmStLGNBAhSquwq3gaupwQzL7ZrkS2iTQkh8QFCKUZfzBUsk1EnUQNm4Yk4goGhaTpRN",
  "key9": "VokuR4gHdWzar7VHyqbx9QzNttd22XCuB1HeM6pa74LrthNBUgpUMqrqUnsUmrh1eisMNCA6feH5G4NEmgJ2j6K",
  "key10": "yakMfBfYy6UsNM9jzRDtiBz4UYQBbmvWTKh4eYFhmzTH8GSgMkaSzfk89Jr7fWYuuwKEqhA5seaFeCfCugvnZoH",
  "key11": "ju1MzThM8cH1g84bBScYS89kni5Av4fW4Ls2FiQgx3tG6DVxXetkqwtBFbDYHkC9AeTojEjHKhGkoHEEV5QXk96",
  "key12": "5KLCDEzB9mxaAtqs2oagNF4hq1bHgZs8Tw37QT2AXibkF7ymxzRrgiANNYX2uHoQ2KYpoYvJWyfSWgsVHqgj5oV3",
  "key13": "28uPZBjagkKu52ttECezGsXzgHVNUzZiWEJWDEdXhJGxSg9boHw61nhkGJ3JYBzfU2fLtyeGtto3gPYS5epdW3pH",
  "key14": "53EgrED4mi2ELuxWS1rym1zhsD3A6fG1uxMDTTRhTC5Jb8G2JV5KnKSbsq7PpJcrh1v8hATWimKDyGjQuqocMuhw",
  "key15": "BHkV5PMgqr4LWxLReTnyw2qa66EHLModEr19C2T4KS1m5TSXsfGcvKDbBxP1Q5vxs3XM4bT6hyPMtiKi2suQtKw",
  "key16": "2LNVtW1vVkLY8gGPPYzDDkiMcxGhCY8pE4HkE3AnAxUoZC2U88kbcZNQxTEm5XpuXRoNJ11pAJWxx5Mfa31DcKMd",
  "key17": "3eLcBhiWuXALhh2kYKLjKrFjYKaBsjK3QcTbeLjJA5HWmzBkhhmsn154RMmafQyhnn8HkoyxsS3NYpR791z2w9XX",
  "key18": "2YoY7X2mdKFoSMxxcvnZRwByozVXV8VHeXiWYw2cLYn4H7HpppXovcdiACfLqBoLqFnyrtdkhCDMBcaU3dqn9beG",
  "key19": "4f8GHK6Cs5eMKjW7akrTNcxiheGYP4rfaNX3WEV6psKgmFSnZvUV4KyVfqj8wh6Ds1uwcaYg9Pq3sRWZoviVjkEt",
  "key20": "5gXyX2k4hxpP286eLKd2iwEU5iMtg5br3o4hBQeWXQBwvRNokCSYQtt3M3tCefiDMPjKL5S1XmQJSXvYs1Q4UeuH",
  "key21": "zWQRNqWCPmqNmn9hh7CucjZiwu9ua32XncUKSRJbJuU7DDAVHkigWF7r7q8v16uXMtTW81XyNtanbfUKVKFwkPt",
  "key22": "2Zdbuq7tBtWhEHYiR6QSdj62NwLitpuz36XAt55Xq8zZxM5Tmr7tjDVedEros7tTU7ky2HUYPGNoYVEV5n2aE53u",
  "key23": "2o5fWdpk4buKPS3gwBfpQ5veyRyWyayxb8Hbv6RbFBxDnnt1BNsop3N1e4Z1FCCCswLaMAvuQH39uuofowbsZwtL",
  "key24": "2kPuDrZ6V7fYvwhDAnjPAUsSsSYJDr9rCpe2kRDYhmNaAHaYEk61ebDYwpS3baicXTUbYNFTUb3jVizADJLTdV64",
  "key25": "2EtwJ6m6r66WZggR13Pv1S7Fhuq9iRVJrmpKBj9FoonvRceE19z42ZuYvA6UtvD74zssR7mTGSjnZKNLjFsayWRs",
  "key26": "5Xw79cVf87YUCf654nQfDtZ1V7tJak8gweDvkHQZebqSbPKgELBJLr6XH7BNsDHt7Qx7z41bJQQ7XMz6hicBY2ti",
  "key27": "5cZgCK2BUTBz5KbbMFwna65hNexprYx2UD6rcNTALDiLbiG9jfFxnYqgkeJEeT7KKR9hFNj42vzdbFNdDBcYd9qL",
  "key28": "57q8J7PodarqNk7qeWjEeqRQhVYB96A2WsuenNb5CAdE8xPWCAG4BtuFxorf78fi7P5YehqJ4BZb9EMXsxBws6QF",
  "key29": "3bdUC1BCn4k1FgS8eKKueEuCZk4z4G3JsJtuKEWa4JoUftfkM81MsroA5gufV4iyVw74EtFg5dg6wsZkYzeibK14",
  "key30": "3y1wwmY1fkSWgNEk8cZZEXSMiVSRwyN2bH44raT8GkfePEe7TBR4bGw9YYfPqaHrWFMEP7wPLBtVehGH7cC5a662",
  "key31": "3nGmFncwRkNJS8xUCsC1zTfk1ALR7QcmCvdSTz5ZCvYwP2u7rLgmYVrECkfiXUTrJG2ko8rqruDpJ3vhVzQSAm6j",
  "key32": "5KVZs3iNBDrpfQqm4y6vd7ffKTzz7GnFvvH2Yxn4NeS6SEf2KFsf75ufEkC6dyUeU7tNnJ5kXLyvYvsK4vJVEmo1",
  "key33": "4ZXdGcL7kGmXtWKhcBvydBdpEugMvgcsrC8XA9PK6mEo6HGy4Fk7h4iRGyzJReYTsdh7ZUPAfXJvA1uf8BvzwNsy",
  "key34": "24m99RZEJxCdMXpwD6JqSFuixufJ6JTDFMzgkhoRS11EXVZvueerPgQVBK2DEwrQ9e336oDqFoYDZympMSQBxthW",
  "key35": "64wqLSLPaPi5p24aKKK1PYz4XUeVCLD4Zib4YZoc9eJe4VPTpsdW8h2DnAbD7VNRL8s8BH7oj2c6ZdPbzEaQ3z35",
  "key36": "57Ydzg8QNumjYqfg84JDK6oCKPaLWVSqhaRWfiQ2FWR9R97aUogpYN2BHazsku9XEuSHNmDsudCJX25onegoSSte",
  "key37": "5WGnQDmH85BrgTL5hvmSMNFmuPNTQTxDeGbMyJHt84VhrUpC7t2SVpt6gTJyL2UgGStYyxbQnDqDZj1BssgEfdYQ",
  "key38": "Je6BmmAA61mSKdVUu7zxww1dHLkJWjcCxMtJBwB22esojVcL6YKCWrzt586vRztfExiXWZhV9W9zT3T75Jxrbms",
  "key39": "4VR8qky7PcDZ3U7z2JT52jCge3kawTEZA7GYEAnxDzf8rVzjHvT8z7Hz68xUbAWWW4VBdPtJ7ccF1cZvfLC1imwD",
  "key40": "eqAiQJedcLqFjVrbbcnrxe8omxSDNAH7c1fjjYy7zr2RYLCyAaef63Soo51a1nUjPpvadT4qdHi6XPBLufoJQJH",
  "key41": "5Fg6cxxjMrcoBg9yi7eoXTBzkZJ2nRTAXmYDPbFN9TtvHZWnYw6AGortSWt46doyNwLm9GuHWHa1dYyf5fVNJxWb",
  "key42": "4TY4sPqc2oTY1ABBxfHf2Zde9h1GsDPFSQ32K3cYmFrNEqxqu1TanqjXgk7w8itBT5JXR6KJ9iE4wdNQKN1swiYC"
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
