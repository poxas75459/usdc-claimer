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
    "FBNKKkjC2w5pfK5sFBcRh1WwzrMN77sgUjSojfmXpFt9KBq4ZymRcwr5sFexDgUPGPZx4Pvz68ubM5awFxDjxNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mkz7uJDCyruXrKdQ7DtEBZYg7pnDLojR1xZi6Pfch89aL63Cxzq4KFpzFsiKDoT4ytGVrL9s8L4QW9VXvaYNbX3",
  "key1": "fgHbYKKyECtC5xccxRKNkRa6MsANAarJc1pNmQAGJvr2RpxSbmqnzh1xdhVAagzHV5qGWEQhpH3jf143cyC3aF8",
  "key2": "3iNVTzPtLmZ45Xr5s9yM5UzKU6hTa5A55UcXQKteL7eiLmJxbunJsZcC6tmeK41CbEGwVkSUiEDD31GekJ2x8Q8G",
  "key3": "2vvcCHgGXXn1cxRDz5Xkb79QxEtn19b1JzAUAo5QrLs8ZsHiDfbYf6WC8mucYA5ReEXoDNSqkUfCWiqu8L9w5j7F",
  "key4": "5P3EcAg8MUfzaHMFkRUp1ipCb8DGdaoFAD86yCf8aofu5uwT56HS9yQaptUhjxhc1YB4V6SWgCnMYckttEv4gss5",
  "key5": "5X1hkDtj6KbqY9J5W7V5iak2wBcn1SzPceK5aupsex7H2UZLYZMNTyff7GevvyY8y9T3ubpiW5zwvpSwTHdAxvfV",
  "key6": "664QCDfqYAnLDLai6qkmFLtwDo31b9g3bQ8RYusjzXpihhvDQkrSXPr8NTzq2fbvTkwpZZe3e8u7WKJUaYzdK9XK",
  "key7": "7pyLyXCzF1bUNDQ5TcCA2NT4CTk5eAs322KCt2wkQ3xVucUX8m6XWBKEBf679F4jdZv8iAKNKxYkyihzgVUeR3T",
  "key8": "4MdHAwf4stBDbBUJPLfQqxycLJjjEvisKMsqk6dv8recrhAC13FjANHJ1MXTcUV4pbLBNpiFUQhJUzuQNBSuBEFy",
  "key9": "4er31JeQ9p53dMeTzbuYMC9CsNgnpM48ea4CmQBbeNTqiMNjeTgYXrCKZkZLnAN4voYCufccBGtvoBEW2i1D4Gju",
  "key10": "4c1UPPjVK8F56vRPSbZT4Un3ntGTDg9v94oNHMD3e2tDFoJ3DKRJRab2mHaJvGiqSyYekf9JRMUjKCWUy4WykWD5",
  "key11": "5TDo1TUaySisEWPuPs6XuoAKnkxqn91SCcKcPD9Jw6GejipuPymWuKJtQwwyEuRNa1jXhhcccCzhLsi36t2ZrFu7",
  "key12": "4y6DEeCZQqA7e4ndTH4RaS6DTLy1tePyRgkMXubTy2kwzh7Lmz7c39uHzkrat48LXFgDn3qLCAbgjw2Xry28Ve4A",
  "key13": "3eNbqkqDUZ2mstCvbtTDxu3MGS5i8hfgkTPP5s1YrwCktmZG5wp1hqU5mfGptyjCBkUuXTkNe5fADjA5hdcdVBFD",
  "key14": "3c8vRHbAvsggSRJ5S5fbv4Y1buEoDcTHPPLffr9N6Nocv2zz7LouoLaq7qAe5s2pUBQc3saF5SeL2ZiLVUKpZMzT",
  "key15": "sbEttK4CiyKRRLMsXa7QERapBo4tet8ptjW3bP5TaJap2AG6aMi59ZQzoWEH3FoqoP7o3QLJpyZCtkv91qNwRsk",
  "key16": "672HPdnmKMDmSzWjNs1SLj7aLSzgwEstdfxQMRGo9VkjtcchBaSoHzHKoHbyqAB7znJtR1WumzoLuY97TkZeCCub",
  "key17": "4b9XsFyvitHpmvPpit7A5Xr5E3KmxqLqTwXnqmDRf2PVjtk8BoFo5NYy8kEWLFuvpV9gcSHHSovE48Vfp78Mda4R",
  "key18": "3xLRHV28MJKFWWTeuUVTdXGTP9aazNUFWWhgwyVpHSxHVPHp2SCUw7n4CgohsPNNfvKuwQmKjAQep4jjuhKxzsoM",
  "key19": "5NXrzg5Cu1J1k4M6Emc5jRG1gt3VVquTqJaSHu2YJ8ZHkbvtkzcH314tqiGUzdqeYvYvHZBPKCcF73MbLzPZXa8f",
  "key20": "2yhnKuSNrwjrVhVUZizqsXNC24wvPs4jqhVAqFihwF8nuWBz6maMPAkrZ93c4ppxfChJNj5JmcDTTBogRTx5QHV8",
  "key21": "3T1smJHhvxSgAu6xvuFQFuKyZSgjieEu1BSC6aL5KDc1NSvCwGxNWKwcqizp4nw7KgH8WpfUWB1XRDFGNyA7gB94",
  "key22": "3g4Rtbs5w6zHFpWqeWitNN2aPucwzrnEzQPsevK3pFMGjFmrHiQtZN5QqSrPxhua9GVuyQ9eCKBwGbb2VYU4NE8h",
  "key23": "8ChACvDZzQgZvrXDSt21oDwatTrfWUPMpcgFo3h7twYnUoWran5Jj2gcw5FSy7po14NZr4fzEi9wge7iV3g5Fv4",
  "key24": "4nipkwNiVNxPyp43U5fCP47Z1onmghVxTv4kXyYraWiUPc3i95bUNxvQEe2M8RnktqgqSh4sbRZVtXWup1x33ytX",
  "key25": "2GoKqoX7sffYVEdmUrgVY1WxHLjWdZ62y4x4got7GKcSjxcdcoCzjLt6Vv7kVGvX7hh8hgUQu3Zi9RvBw7fPsAKz",
  "key26": "2jGyo9c9UAmoYniCg1rFibpVMZCKM33TL86zvrfKKJf4ijK7rr1YaqEso4X3Hw46beHXLVaByjFdD8AfmkdDJFcs",
  "key27": "36BfK1ixgcH8zy8UaNFn8enqFp1YJ2HG9WwSCEaaiRnmjh7EPpyXxwNmw5ntxuPKvzMZg5TZwqpkNd86y65kbMkY",
  "key28": "64ezFxc9XFGyKCUP9KA7uE23eviNeuCWCzw1H27B2JCXvJxc3e1XJqfyPv45Ky4oBsuPTH1Pvn9dtRJvyyTBRAto",
  "key29": "5BUwqChLKoKwFhXyGJcbyhEzCTCVZqfDDArmn16RieQRBvwrboWYXcm6NYs3z9fx6ET2FLq4ULES8XocLsQLtDNw",
  "key30": "3AmR4FXKdwcAiNZExLbmmj1SGhHBhaFtcUGL5SRFxAsV4qjGNnxihdh1k8wEvAaTUMYYfzyWkrYQxiGVpSnt95gz",
  "key31": "2MRNSCH9gykQJLmFbznkbZbxsd8mVbsHJmZv2RzXZDsipatHEkberXZsymp9HHVU2Ts3inpRbkJFoHr5kMMTvrjD",
  "key32": "5MhghRmpaHJsp3eEehwZKV9ch2jpGtgQzketJA8MTRgzgurVbDRZ2N9kGqjL5pUUF1Akw76SCe3h376Z7eimbqdF",
  "key33": "4qQbck9NHywPiL8pFrcAr1G5QpbxztCFvFyB81vxUjmWBSuh4jSyxNQkrZ5AeTGU4D1ZV27w6dkomNMh8v8xffr8",
  "key34": "asMfodECAPW5xjyzsFAjfcBUWEYsTWZ3rduvhjQWaaYxreFs2DQPn1rDwyZUqzumHxkq1rUf2mnymwk8DYdm5MC",
  "key35": "4SaJGYHLSHPRvjfaVrKVmyeCfXWeZJfoYt5gw39nZaYytuyg13AebiFRnRvxitUtVSqq6pMaqBU8CfioDg9jEEZA",
  "key36": "4FZ2EGgUNhsdBjqkAvY3VN2MS1PBHnYVPW8Yf8t44Ycuf8Vc2LUhLUjmUygNAQYRAaSh69gKuvNJSomigboVx2cV",
  "key37": "5a4U1CFBrptTazzermRbyDWXYkXpTbkyPpR2TgcKgMHok7GZpuQe1Ldqk8DvvNjbQjy6Eyv3mEuavzvNfrHjTBDc",
  "key38": "4tEKG5odRAfh17H6vBcYGkfBp6hx9QRTX4jWb4u5TfJ27LSni8RbvtvBJDTFw5LQ8rHE9sE1TmwnAp5ECiMGsqCv",
  "key39": "2N1U6GHdNVbBMirDnN5zUUQFmrshJoWTCuRCNyuKJAzSiMzsjG1cTv3n1yQ22pMfxEMUFv5VYixtRHYa7tk433LL",
  "key40": "5AzidFm9VVZYt1ESHsXkqdBEusuuqXmDPXfVPFxp4fMBcUZXqDvjFDbLoP5DPPBpN3Q6D7a9iFkNd7kfWKVBpw1c",
  "key41": "RrYP5tJw3jkx64SCk5BZy3UNu77Cqehazac3PL1vjd9jTozmdR36A6thDQ5KLr6gYAVgMcx1C7UD7DAd6vYhEFd",
  "key42": "5bz4eC4jR6oEJa5VJhCiLhi8A6uhQfpKb9FjQPHQfQtLSw1ynVbZMoCjpMSvCY4yKxLQ1t6U4sqw93BWRsXVWGHd",
  "key43": "3KkhwvepPrEfUEDKWvH3EqH4Wo6A914pQdzcNaRGJrPvhrYVENUdu9uVHpxRYiiCh99rEyJynhC9szKPDqyayFBk",
  "key44": "4UF1aTthXFezCzjknf4s5vrDTix7wbkquNfsJ2Xw4Tk64kAoZkx8kzzHb6QEYAx8JuHKta2SAEqKsEshzrYp2Pxw",
  "key45": "4UUEwjbt5BVyMVZYjDvKPpHFz5oBCaHR4ZDCz42N4xkCddoj5oeG2ycFrt3KN16ezxbK7o9txVLFAuSx57TstnSk"
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
