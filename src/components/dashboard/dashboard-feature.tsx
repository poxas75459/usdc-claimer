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
    "62rh3ijXwMRdkPkXypYXa5rPJ7ptAR78nSHu6J73F3e9X58SVF2XbsKQpTFpkUNeRxw6Tjw9zX2CFP36ndHessvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZG1mkbZTpv1PyixcMPsSS7t16pGVpU4KTLF9W67CbrsDbDWW8aszH4KQAnj5ktXjXWn8vLL1B2yXpERbpfHXqp",
  "key1": "4xaihSArdghzFriYJpX2hKZxV6cXkZvYKqAzfRyVe18obAdzmT17h65ZRus7t3SurchJDio9TXh4LaUTF99pzB7X",
  "key2": "3x29GESNqsrzLW6omTBxvckJuQUfVmve5PCQgjvFX4C1FBiBF8ouMaQwDpAW6ryDpz3KjtTWRrCojmZqKSnVHVMs",
  "key3": "2Cw1adkaVoyT74nBqBHEZEM4Zwr4wnG7shQLHWA1tNHiCfYcbyrmTJURvh8Tbg33PHEzueYNkD2dt8oHYsVwjtHR",
  "key4": "54YDukYYzBojYFdFdye8tWX6q4d4cUcKmVCk8938jWZVK9ZdR96wRwzAu5LJBLwA71ZnXLvoxsSksVFv9suBWzKk",
  "key5": "5gHsmsYa7JZpTfDnb83mLPAtJieHqiyXwgCQvnwZB9sLbPAxC3NyQBh3a68hE438Q7DGndRuXXrZ9hheBmQodDJV",
  "key6": "ssRGHPtgvzDxUGEsdQMfVJUkESNtaq2xyuRuaxdYqNSW2TmfLCY1gtJrKQgbdVhZvZ4TRfRRMT4LgS1NgSY23n2",
  "key7": "2eyxVDc7kGctYddSkEiJTF7t4jRYCUU54iVsJtSYGJ5PimKV9PFLWsDQ2VPhH3y2CjmwQAcoLXGpBsEyM6F1Bc7y",
  "key8": "59cD2fTbgbEm5Dfyq3y5ZJXGL8kTRzKLcbC3YMDKmha6f3cieU6H5DV8yKQ6m4L26xA415v1sm7AnrN79sUB2S3q",
  "key9": "4AaaJDWpuyWGDiw7kvLMckuagJ7XXChSjHs14HHYjSSX7GT2MPKLUr7VdUn8LWqez4rx2eS9YdqeQzvt7D5KrPz5",
  "key10": "29PR7htnWtUSJrgReTE4AtWGS2KFqENQAgtdn7oWmLgyCJzdZYqAxUjGYzavHbru5SSAXcAHWKJb3iSkdBPp6oNL",
  "key11": "3NVsUVF7ekS7PjD9rFLK9MRBiXnSLknNGB1fieCn5mrsNwz3zHpAzZ9xc9GorqTDCLq5tBKBdTUunJnqZogqmceJ",
  "key12": "5x5L5gDGNTLKDtoyQwg4GcvnUYjWFXGGhEWZ5moNQsCPgfExgUd2z4LWCsdKSrtRhGUaM9Pj7qJ4HCKKzJRAsYoF",
  "key13": "7bf3GiwqpLQLPPvokipJVipo96FCnhxs8jY3k72QMCTpojBRhzPjG6fswF7qgWKFicCoRkFzQaXLzVPiVmHqH2m",
  "key14": "5E7WNggYZTb6h9aUniEhmBG4L3ejVzX1988p1JeqTRKDKrSGUmv7DvrG3G5PpKdZRTcNcR1xFf94A1qRXPRuHH4p",
  "key15": "4M3QQxcVXT82gnmGxSFLymYafvN4iQ5XCL2BtHZSBZBuXf1tjnYAK73WAK7Ff4wtzq7mTcuotPH6FKFuHNNnn6MP",
  "key16": "4ygp8ViL5GeoCdqynZ3wvdMeNA5V2JRX3yzQ5yMgeGjhmTVFvkRy4FtsJADcFWe2m5q7WtKYeikDuvQskquLvcx",
  "key17": "A8MpeEGsCjyXz2wUVCoVeUYq79kZHqTWjoB6Ve7oYJLzXdG9iX2cx6diksa64W6ZQmzVuGCLzMcNvTRYTeAUviQ",
  "key18": "2VrF7QkEAnC7qC2XQZ37t2Fc3GDXjhbg2gf8HcDZv7StBKhtS74URteuqMWQsLm6yDYYnwPH2mXX3gBPgDYKHKbV",
  "key19": "3a4Y5eLqvrb5h1diXHrykX8SvFKo4qKV5dbEDuAm4LR47k342Y8XJ7drGraiXPM5KzttnMY7Ci4x3PxT1vgx4A2k",
  "key20": "4eiYHeyYfYcwAnCHLDBu2KzxpXrxb9i5bbMQQCN9kqFqW37dTFPZBRzx8DtLSiXchhiqLxHa5aiXPmGYSYRnGKmv",
  "key21": "3gJJvkxnBbZTWFT9VWVF9aFgx36oZxkBVb63n2u28fkNeU6kriosXZ1JpsrZJJQBP4jyucKHse1T2BCXiXujexby",
  "key22": "3kxUzTefyRMYvpETY6Mh3z4aATc79FnwmeXETBtMA3p8amv9xJmbgpzA999bUhE3APyHPX4TzJNp86hVQegFPDR6",
  "key23": "3tLw1Py9yiqiDGNAUyCccbzKWh7oKqHR2pi5qYzEhwafcgPYqDNFnjM58WtQytEp3W3YzjJE8u9UE6rxP3W8wvrw",
  "key24": "2EQVuJKKSqdGeatgWREjbcYzXnS6WYq9LGt8zUzEiFAB4EqqqKnzf2Lk6jyLskPf1GtrZvbrSLvENTnsJvMEGJZS",
  "key25": "3Dn7V5GXUEYogpDSy24iVW5Dee5FCJqFF9WrLzHLeRTVwaEuZyMtYhUkigY5ufbXRKGZKYQYyQPLSk5G5ME8TSfX",
  "key26": "5D5kMNpGxAy3GB5gjCwgQTTbcFiNSAXsr5FcDpn65EquJN6uLkohfhGfpNR8AhDM1Rte2nWegYn34PedeEXuaobt",
  "key27": "67r4H7zwXLuPQ4Z7wP9ydSGuhNrf6grTTyohxbsJuHd6PPo5YQYPiXgcpTapL1FPrLKbrJc9nQp6Aps1q27rQvGu",
  "key28": "2rd91k4Te4PpjkNtaQCgkXGLbA4gXLszMTdFWQ7Fb7XrH7aZnpcvT9uUWDMrXpJN2McWzGXDcbt8gkTyS1onHFtB",
  "key29": "2cGgJ9q6jzuo5TzpJSj9xTTvGPpPpfU32mWfnNPpoh98mWdTaQQcMB3PByS3X1Cx1egnZL1514yCTyZpLV2dGWKb",
  "key30": "4kMVUYDvRky5SVWDQqN5yeqA5Gj5woWfdhDniLnFfRGofGSxXRVcFMBWereB5WeVM1kYjx8TW3n7qjFd773xfEYt",
  "key31": "4ap9ZyjRrTkaEpD1aEqVKyhDmg3oZfztFDbthD2P4MPFFMVhkRYS2ptiWu9VgyghjTM3kfwkWT2mYm6KfdsitGU5",
  "key32": "4EekGnuz8hsoKm3mFVkqd5Y6YgTrbqspaYknvQAofPbBAZdkhBUEYiwUtydD8RgPRuEA2HzF72hQQkPGGkDqsQXX",
  "key33": "32Tf8gJALDtynC9x52ivgqcZ8HqC31uJnH6bo4t4SfssaZiud8SPnmsWX5gjDiWZbXH3aLh7HzWBxGzkcMzDvZ1Z",
  "key34": "41hQQqJF5gg99Tc2yiLvf9M8wsDCJGtc6QfZmdU97j2JzsTEFqeemMc3tgQuiNBdwDKfRgBfmumZDCN8TFNiz6BD",
  "key35": "ZhZXbHnCmXmR5JkqLdpW5FhW32FW7Q3FTcBKBi8cA75hjs9pMPs9tEf4YvogQkbLB1EFgMRxHaRGc7rMTLZEwDQ",
  "key36": "5afQrYagUP7aw5Rnix1Ed9L4bi3K9iRZQiiczkyZXx9z35diewWAMcqX7fhaxGkmtktEiHbA84ZezzGhkog6F2ur",
  "key37": "4HEuCqoJML6GEtpefdA2rQmxcM2KZqxkx8aniprqVtYj3CSwYpuxxtRbf3Kz4vQwSpSp74yycEXNQET8hgXHZfW8",
  "key38": "4rEYUdaaX9KxdQYPt7qZ6FYDtLP1jQJnusnw1Nwe32MeUc14RLpr3wtCjsERpkAkNCARiXsJ7v7LoK8Cmyw2P9fP",
  "key39": "3Adurh7hsttpweTNHQm8X58bod4Ej5LBGMSSxBHP6oUkhsXbBJiJ27JZPvCn9UgTBUjDwAXzfqqftbf27YAEGnuZ",
  "key40": "64ACLLdmGoFfq5o1v8HYjFc6DGH5fKkSDJfbXcLTmoXes4LjtNumgS6kpRiKt4cXCBQSL7kSmcBkNfkFRgJWRFe5",
  "key41": "YtKJnHzeEuiHjrnfAUBee4bLGz8PNgrGLoaBgw5WaW4PTLPEkyWWz4yCGGMcNxF43CXQL3BPHw3HwfxCg9W9LRR"
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
