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
    "5RbsmSq4yJzkwdkJ3SCxHHz1REvF3LTVJHAXT9QYWrXWz6VifSwKZS8xmPKJ7ndECadRykm7mg6pDXhqf2zQN4Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQkHvLRhXSwWdtvevWbFq7eKYY8RhBG7VZGMLMta6w92HEsryG5QnUrMZtev1tDrXpX59oAKRjRsK6F9nvjkuPA",
  "key1": "4dDBodQchtNrAehe5Yxe9jGS1KZPHRHGyTR5Az8kZ5RewJZGELYLrLFJniNsrqPM1vH6gCcPaZKtNjHkqRAzzCuU",
  "key2": "4h2FbMRCJdN7KMBb6XWmhGdxEwabM2q5NN9u7evAJiRFRvGWvscnSztKyuxKcecrqzQymDvLLik4Nnqy778VoAaH",
  "key3": "3YPeWN93jy3z6TXmvwJBQ5mGh7fRYiRzrQPPGVUtmMKmjr3oR5fk9VjF1fr2BejycfVVKU5s1PLnYGHM2PCYAm3Q",
  "key4": "U3dcRdkFoWHSrd33XHxbuJMzPWTHUm8tSYKGRXohP5GZZ4CkihHdtw5LcfVtXVLZpd1nPXgh7i9ybcnikHPjQ6W",
  "key5": "2eoERxcEvPFJPu4VhPcFPabvnEbPf2th5eUUDY8pyCoBvyq1KgbbkjWCJB29vRJV3L3avkaCyKzxwDdYWc2NG6Fg",
  "key6": "2xcX81wjsNthuKdKQHpzG81SzEUWc9WQ24UN7TjzrTRUg6edo4CBzJAyij24k5aTBTTsQehyEu4GNzVbhHDoTDmX",
  "key7": "3AcU25Ym9Kd9RCiTcz44ptYXLugbdJ8Kjzc5vyJEXSnHyufShiShDSLV5dLZcYfewbdt6nc3PQgnj77gmZ3trsz3",
  "key8": "3Yn6jmGXXhbg4rjFXgoZLMC6KAPSdSkqgpwDB8W7C1CvpgRcWHSLyWr4fS2mXRubj5HFXxhkgy8pQbN7yGfiC6he",
  "key9": "5ejp53We2ZNbH9q9d8ffXipmjMBfGEjcUFPiae4a5QZwivDMT7ezBScMsYJn7hzCBMxyokAwh8XZJqPdApJY8aAV",
  "key10": "eMGuAJckMuXqCMgjXptdcvXpLFPipoe96LJBic9o9GbPsnmsbyLiXX9szbyHRhn98ZEUv4fxvYGi5dEU7rEFeER",
  "key11": "B9WaTBmvScJrdQ4J8YyH3k8vtY686G2wUcaZA4mcniwFUuM8a1Du3tiUvSP4VHGF3MkENL2xSFnMspTAA9rSQ9H",
  "key12": "62m5ab3c5e1b7mKXQ17N8xF3GSk2i9rRkGgw69nnYWWQoJrnbL8gaWSpMGESTcUH2p2NnukBUTJmDwYy6bXnAcyb",
  "key13": "4SVrtU7pFPVeWpNE5XR1RKZMpa572qkJujf1iAc2ApohkLka9zdeVovqpiDf3AN9bURtknabzekWKhm2vn3JPpTj",
  "key14": "3joL9Y85CxBRfGTrKQJF9Kz5nDHHemom2y4UzToMFt9dGEVMqrqYYZXFVX87tY8381uMhrgF2o2nopSzXSdqhvmM",
  "key15": "QwtJQ3ggDakgBRGFWpwCLv1xzmdsmDa7DBBgDHykAtQAwz3E4HbYRve8GDMxRQHjYX8Ek4Smq6BK8mVSfvVGE3V",
  "key16": "62iN1fjtZxZZAG4wxxk7c1mE9yPLoNxGfYcb8jdRteMLjf8oE5BbkMXMRM44bMJ7d6otg4EBaQNnBMhG8mPuybWV",
  "key17": "bidRHpeSkXvnuaGPUEdxf5XvzSaGNuSafNSbyqg171YRJ2ZNoeDCJkMmmq64CxvxdjknA95P9ajWetMum43cGPc",
  "key18": "4xKPGk4xUicMtPgr9dvDAe3aAzTZQRQ7K8svPi4VxAMnkLytRkMAVsZGs4ZpjncWHK52W9HLCs4kvmav6J87GBnj",
  "key19": "53rMipZoA5SnncwoC4mLNjxrbBDtuMCKjhHLdNr11fAJgYsz33CqyGr9wkqALVdMNsQTYyWVBvhJqZdggcP4s1Z6",
  "key20": "4WZHjwTeBvMt5k2avf2iWeXqUwY3bEcQwKKKHLPZwQxAVRuBPKV5t9D5nRJiXxoZykcHfmuJgjf3fnSvRiTT83Az",
  "key21": "iGhHSutqnwozfDjLN9AMMKTQTgb8v2q18oFr2SDGGYQGxhCDggBHpomPHsPR8AKZ1v6JJkpBc33dukSq3L2dgkc",
  "key22": "3Fg8Gs4DkxSV5vc2SMJYJsrvxp78Zq6JRN9KwvoA3MV3mf3PQfNSiEB1VKyiSKULDWw7cwC9MHFspeBt9KBg5XDD",
  "key23": "3we51FqYGFVcjW47sEVpqFKmbEFcR3XmPso5bPgu9NLctZJVg1bS2X1YSPXihfYoWrmrJE18pMDdKY9MNdRQTEfB",
  "key24": "3oo1feWx1iutseenhWgQhddGbrUtfbriJmLTquBr1XSkpAnsKz8wKvD58QGA4vgJxU5MgzUa8boQXnBKmnve9bpi",
  "key25": "4b2Tmqb3fwq4k3ewAk1QnDL5ZNBDACNz5jZzX3prPkfKqnsBVAbyCoCwHJqXKFvqbJSYzCRA3msFLiohmNtgLxk2",
  "key26": "5ZTLNjppA3a8pW11eSmPqC18D5GQ1Qd3mSPmDTikqHEiS4VCz3GNnA73F3W4ZNFXB2j413v4XYoDqW1mAjMvB6KN",
  "key27": "2fKsotutp7haUrSXCi4vznGpNKpmRwQng3wiiBCejDLVKPNG3ureJjRrSzTcqy6f4KhHwFFyWWyxitpV1PL3xsfY",
  "key28": "5z8HPhvzw4drLdUnLEjgHUChmVdnaST9SoEXmNsWpGMp4eGx1ioJyQTxnAZgVZGgHbRC384bxJ5BXN5d4bUvcaH2",
  "key29": "2BkGSmedCu4ejCb1iHfNfP88n7aiLRghKutx3NQ9j2jqDziaohATWmVDCS38vDqgZJKDBHyGFnTZvbf8E8rtBtUT",
  "key30": "2H3o1Ju6XejsF8UDTpfYEj6WN6qLJe1tHop1CwhSDoW6qS3QkNuFdw9GBDfRBrtXBsEx5pEhaXSQxzgi2CYQpVno",
  "key31": "3Fj6mz14ca7gv23YhvfTE92K8uAcScrDUUsaQbcBn5Q9GhMKc2mKqXvhqSkWkmK1fHewF45B5DwqTQ6rPLntCrUG",
  "key32": "5dEfoF3H9ctHCy1TmaLiBrEMcSXyiNVp51V24mfJfrPCR4PthsQ8Dntmp2C2DfBZARKVUAHtqM7bTc81xwiH267B",
  "key33": "67reFscnacj5rvhgTkddsJsXVSdw7sxSNryPTyPJRzP4UaZevMdjcEriBd5gjhuKVjkg4WmERHTX4RUWR1gkXfP6",
  "key34": "522pyeSZ8mMFYiUyNH7STspStrfyPMpM3cVHGo2QALqmqeGiry3TFRehm4sz29vThgKihQaWcHKDfabATQyWziBj",
  "key35": "5pexioa2urRFJKyUksLhjPo4xLeETqsDisKExRUnMaMJCo7qfuSL18jrSghcAhbjVAhwzicYU3aNGSjzXTGEnktW",
  "key36": "3ADcAxEPnrMCceBd4zbcXkvw7YcMXhYRrUTjNobRbPRgpDDvd6qQBgL1jVhLsSijrFdru4BAMuxrZLc8spkeeFsj",
  "key37": "3WExKhYec3NmcZKvJKZrsLWY7ybNkcToghCJxMtKx1jS9YzXjAoZFLLcvxARhHoojE4oKhaNcJXxFvHUVVtF5a8V",
  "key38": "HvPn8D8DccQaLuC5PBXiJTaN2deWkDBmvHWNyt7dtjqupd2FXhJVWmwZk6VVCHEMDToXU5UoTKiFWWVaFwCn7sz"
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
