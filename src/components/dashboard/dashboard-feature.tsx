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
    "2gjziZ2rAuAonPqrf84xYRtcBecZrzzBGzDtXbgvzNtV4bv1QSpYinQgwMDFpeJ3k3zYtKQJBBLY1119RiMTPoB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWPAVrSZPH9rgsGXZTcMuhTfne64Z4eHHmPyFn3XpgJfZB9Si8g5xEh477KQmRa2o56Khah7Q7ZwhbC3CbHASBG",
  "key1": "5286oRd5AzTxPKvZ3aAc3rymquqs5AxDPZFsebr2HYFT3S8ZMvKrJfrKnmz4m7SPwM9v73uJP6znQHWuHJpyVSxk",
  "key2": "4iahGfm2huvUwMFXJNHTbk1bvyQtrbxp4xgSCKQJ9w8JRJNKeTsSYBdTyAs6oTzPm4bjUNXVi6WfWNLywuccZZKw",
  "key3": "3wa18Dy9QRZ1ZbrvGt91wzp4njS85ZTS42sXe2Ay2Ycp6HjAKdQJHaLcXRzmADFHgb33MEmNzVBvUymuMJE5xLb1",
  "key4": "5Sgc1AojbhWKZJPQqBuUtejMVGZFTKnVFFNfYErNmX1WVxaCpSdWDYdNERwVtW13P1niPmxoT2LMXSGfFyVj4C7b",
  "key5": "3NH2napw2vZnkSwPzPKgBWDm2q3FbUaCrVNa832wr9rTLZ9bi7EfeEoJS4bYBBMXwHDn8P42fqXrPkHZT49htSh4",
  "key6": "3Gu3esxqJkh8fnF3n4zRkGf6esJFzSMwyDa84GdunuuoWQ8y8BL28pgMsTigFXVYbysc9xNWjHU3NLsLJrLT7JaF",
  "key7": "3etYKk6jW9FBX7dUL6uezou4NKaU68LNURkSkKdSNBHSZSYn55iNYtP3XZyvfWcCJCPH13ohCcS2YHzsxvYA1U7a",
  "key8": "37dNBk8NsnQESSHPMLpDzjB5hU44sSnKxctHPCwhFGHMZKVRicXg9dB6ZMScwcZb2AtpZvsMYjgBmikPet5LbTPW",
  "key9": "tH523yQaJmt7ZfGaJD8swwTYoqw9mwjKeQJXNHuBjaaKnKD4XJ6oKTcDKNhYeogphQLhZxf6QNTLmM5mL2ez3nP",
  "key10": "3aWCE7giYpZLHZMXDMdDSbvb6gGaE6ySkbyL4TwsVEekq6Qqy8j4tU1KdgdHZWUDpcMJe6UMumLv53jGPRbzEWsC",
  "key11": "3HLesc9s2esta9HxskzQ199F9ZM6NNxuvtCLvoppDEfrCSiCKDCPZ9eAj1D4KK2UBnQjwD8oJks6dZwBeKxW53Sc",
  "key12": "5ZGxCgS7DKEFR4XY3jSFzXzjvmSvjnL69B8vZhzfynJXzdiwjZi47QJ4NQnKwrZyDYXxfr5yMgYTgfjYhBL21Nc9",
  "key13": "2i2Z2a1j9yvC8o74Y8sPSiFfhYBmgCNUmt3W1CHniJYvEtnvvfnT3kz1MXYXsn17od8y5jdBt4iSREew4eFYi1xT",
  "key14": "4q1BhXgqLeZMH1daDrqvXtenHtJTNVpzQqUe43ZH5dV77EGqvR54FtXcYjMNMUcdHgUk1Mm8hhWzAnbER5gpXYdy",
  "key15": "54Z1VK5YPSZsVYZNt3wZ367MEj94rYMbsp23GXD79E6TswE8UHXVWvDU9vhChQajwPwGSTrCGxfAZ85Rv8WZkCTW",
  "key16": "tYRHjX8Daaby3ckxXf77LSCisd5j2Sa17c7dB39V3BxMtu7jJq22GPRd5arL8M3YdL25z72GFYGVDqXEXT9vCUj",
  "key17": "2e4TF9ff5JNaWk3TLAbv1iZxHWpNdoTKpeZocvMntuxdTeVxqQG8DexM6yLfQ7QsLzoYnxmTPFw6mHMCpXenmr6E",
  "key18": "3PVByrwqXVeXedpJZGe4SCM6QF5jqwb3RZtG69W586oDaQZwGXYDC2QGjn5skxw2BchXGUUjycsxJJYFxZ2WyF6X",
  "key19": "4vuS7wpuX9A64dTABbebUbQMQ7V3N4TC9A4BQf7st31w4zEjMRw7maZUbHGUfcw6Q46ESgRvnDUCN5RrpTwBuaeF",
  "key20": "knCNLCzuDgmWPDmBGcnrF1SZTwf6UxjAZKBaygYGWg8zzaHpmiXMxPumTozbMcHD7pommugEU4uXCoZgy35rc1x",
  "key21": "oLhtK47z7AmGRBjR5uRLRNr9ap1NDgvpopkzi7jmfUaSXFjyy93ztGxuu4FmVj4giByv8pH2omT1ymQdBu11syb",
  "key22": "42Maa26WWAvtNsFVfH1udWTbah7tvNLCXw88w9nU4EhSotVDepoPQACPoHgiNT6E4i2ifaLMzyPjnfGR8Pf5yzqs",
  "key23": "62yhGLYGJmjcokznXvpWotLZiDktPhmKRpY4FX5aCiJVsyWWT3FVX5rtsS5cov6u1EcESim2cm5Agu1vYLYWvcF",
  "key24": "2SqicRnmuGwCkHqmuMPQdvMBP6vDJtUMd811qV2amtZf9AEADCKoumDUdb9Kqks6gR1YLDUxa9QaWym3dXJvXmqZ",
  "key25": "5NLvjr11KPrLaQSgS3VpkKKQ1JNA5EKZFFYbbuQaZ1Sz75kkiyCpAPZQr3K74HXeToRgroQXZUorxuj4F33xxbNn",
  "key26": "2KpKqEwdswt49ap7An7zHaPGMTbdxafhuiGqFGhphjRNjQ1GVFTGKY7wDMpadafccBPsq7k8jh2QqiBsiks5Q3uX",
  "key27": "3httNFAjMpdY1dooBSzJuiFzCS9bhcn61Li3p8kamMAJegvBGsLK93KXkN7V1ePX3dk9QZ9AnX97LJstfAryNMVD",
  "key28": "4BEqURNkKAG9yxX47Sj3F11Gp8C2emi83pFGwMB74qGJ85rZdGoiXFBe1wqUx9UL5yXpWr6ZFgRtVKzFgMa2s9T5",
  "key29": "nd5UHzTbTNQCKj5oCkUjHq5iAnUfj6jGbdhDES3tdXyCmfTn6Se4vrDJksfDb2RET8uvASZE4bYP82iki2UuyYh",
  "key30": "NQWUmsLq3TWEeEhVLUG93cLC3RCz8hm3zSwF36gdsUaUaYnxRPu7FXVTx1dAYYid46md4tTqrTH7Bf6KqbWjM2x",
  "key31": "5DCJcGt47kXi3CFRgQUp9qG81rpP2gpFDvJ2RAjqGNVeZWy69Xab8oYVeN8oE37oDWUwxxNoMirDPkxA2NnRoUnp",
  "key32": "26iZQ5qs8YFbkCUgFEnPJjriGy3fwZzzQ9Tfw7NnEkY5XgR7ux5onmoFnddbEGLGZZczDRCBmXrwwtkmg9PmdGYS",
  "key33": "2TvbU3SK1uBSsfp67xYU5y1RZS15osAxJqfmKoTTLnMZit2ZDdPrXhEcvG8Vc3evj9yj2211EXQdUswFpdU1zJzP",
  "key34": "sQAdCLPpbgEthQZJzpd1wmbziMoth4y3wf7fG9kjetRzvGDwUY4DgNYccPbyZz8CyLfgFcncrhs1eYayq4cvpPu",
  "key35": "4yvJpvqFt75hYzP7rehkxLSy51v23qSn2Gg9MShY7pzTx2vJSxu7HQGCbGhjkiaqFv9g41qac3wgwFy7z79Vhzk2",
  "key36": "4H96e8pMhRCxs1tg1badHGcGNFV796PJ3BdPbgGV8j5PWtbZ43kpPfGfm98Vosvh7F1evAsa3yV47fmVkbykEFAg",
  "key37": "5RbcZMBFakYhxewQMNfVrVNnDMVSkzSsKFYL3mfm7zMxiEMEt4Jav1XNaPKusMvodNvKqvsYubnYvK7WAmUDp76Q",
  "key38": "3L14ZiGoNSG7ynZ9ZfhaTqLDVfokaVYsoBLQLi2CYvsPNBgS32YXT19WrzuVwnji7e7AW2kd1AAB3j2TQBPwsXax",
  "key39": "9qNxUs1uU27obuPxxctP2oKKttp1z86xdJGaj9NKAQPpQy7B5LMDfc16KpxhbMvHiCRoGBteLtHLZJ2mCNbLe3w",
  "key40": "3WKopS8dtQj7LZiSy5bsAvocfR8T9Tmy7sAJo7ksRe5URxCS1uk11FvJPS68J2SRjQLgrtrKqzDDmoMgS3UAEvxJ",
  "key41": "48HsgeNDBAmVyVpjHEfYsyPtr53ThDKekvFmfZhNvJnZaG3G925c4KfwCVYtnuDyfSz2cj4bCURg63mR3fTrn1hQ",
  "key42": "4PqsqKZczTmo5i3CKA3axNP7fs6wva8mX4PLPWbrHoKkjrXgcwasELgW6KwxrJTBut2iS9TSfF4TzMpGFt2UA916"
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
