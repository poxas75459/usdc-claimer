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
    "5JAiR1X3LdvMzvzrAkXHtjXYHqFsq54bDPbUqefr9a4uUJCB4gkvusEa8qBUhC11s2b3ebE2dgnM2nvue34GC8F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zsit9DAjFmdWK2A2zeGMRoXwd7vo6N34zdv34dnKQEoEhcDvm4QaPsbGBGE2DitFoeCDmCFRJBYppnJKk2arnkq",
  "key1": "3JzHBz5sLQW58yj9YqfP6emRwqYC8yfSkMx3YP4W3Sdi4TewjYmJ5hCj19BKjBN8S1ATFepxvznbidxnBBdofMnd",
  "key2": "46AC3TRXZVTuFF95DQQhCWddvwJoFwzT4VNX6dt9Nw9ZVkdh168TrRJm1a3PfpTTxy2cghFmzmoGrGWXxW8wwo7T",
  "key3": "4bniptzNPoxwq18o3CZLEvDo8hf5b3XtmRoQyQwuCbRZaMjc5et1A3qwbVbdytwv4zPh2rnt2aG8wg986eVo2bJa",
  "key4": "3YpCATw6sBrn6e6XmdvpZASqejzjCGyesaUJoyKV57SJ8tfuVxumUsYaW3CqUadVEwZKeP7LU2BkFXFw5RqNaGhW",
  "key5": "4mNrSQB2fXkAvAvcHAWQqHw7rkacYTraNPUd8eUkkUcrr38cACmkKQq9UsMVgWxMVDo5JEdLpej2Ez1W8HWC4wC",
  "key6": "4jjbRwW5xfhPf6V2jr4RAJnABRYQjmsKed1KNv6AmYJQnz1U11k4iw8s2n4qRepAh2oNygeoMuVZanxYRboqih2S",
  "key7": "58fDv5Z4QTcJNz5qvwKLZJ4xLt3KiAKiULCgyeoqNQDXKYVAkRdERDq42hmnz27nDmud6yKnNHACGvTAxw8XQw41",
  "key8": "3TouGvqLbdiEEE4SWrxwYKdBqcYt3aC4SApah9vMLWBF3BBu5RVjrz5FgPkcmhSviHvnKGuBbxszuV8KJA9kqC8q",
  "key9": "4y6vW3crXbLHkewpE6tKZfBFm3Djo12ggUPkXjBzZ64jhP6Dst2Rx1rCmi4YaH3sW6dnk9vYkPuzZD8nkXH84E3Q",
  "key10": "VeNGgCHCNJiGazxdtzAfsy8yzBicF7nuocDXrfpWLT5y8jHZ91vqgRbaPasSefbuhB2pvPzCdnJaPbgJtJhi5Z9",
  "key11": "v83FgYRi98AnkUy8HAYgUSCbwPFWruBcz8J8vBy97wmJFJb7gJ1knxCRLbf87wGEZACepSScrRtyE5E93qxo5dQ",
  "key12": "3FcdPrkYWBYtEZurnnTxi5cLGo2c3PucM9TR7LLPMGEHW91sTwMRi1GiSrGALMLw79fEuenigu6jdP1nCxXaav5X",
  "key13": "21wHJExw2CsMFc92sZNm1zPXZHASqBFxp51xGKYDsq39oY8PumwYp1pQo6r4EPqtdNRB4nFRDCfN6xV4d4WPJKvp",
  "key14": "qvfrNZ8A1WordZKqeffLpafL4A9hi4NKV1KQwJEF1AMUN32rQnvTmr1g33oN3AsnUaZfyyw4oDqf3YiXQEDs4pC",
  "key15": "2VY8az974HSGUWJqM2M4qZ1NvPfWfohLwaKcu7RiNkegqP5xZeYSv7QYxuc7P3V85koz7f9CRDEGkTz57JyNjcUD",
  "key16": "32KjRaSaBXeYKFPmMijYWjeUccn6W3XxDZrEntWNbmYSgbBHNSy6TUfis9EETD7LkhYXGaEdFkRVSLjMYrEsDP9c",
  "key17": "5Mb2wMu3r7bvVRQxi8HmAjj841vRjPRcJZKZoUvPtuSAGPLmZgJLq8JBCsZWFV4bYvtuLufNaC6iTgtpe4TRsXDF",
  "key18": "5kxyxCL59YV1FMyLELAnwN4quGfvDcQ6hrVh1JNsqMF8eVA4EEeWNUkdAaPKfjhS2ENrcy3Lei5nTkd6bxmYAygV",
  "key19": "57JtoUCKCsyv86wZcYjAhH68sdbnQUiztK7D7NZkKNXAtb7KDjc6HmCK7ANTBB6FvDmnAG53mgbQvksyhzoqzz8w",
  "key20": "3cCN8ZDsc9d7Jz2g6tikWKB1ywXQPCmzwt8dQkUGJHsSHKNgcPftTEikqs8JfPxc9iPSydjsm3z3RnHNKr3fxVni",
  "key21": "4Sr8ASJno8WUDcDnvUHTLxmD4s3ZMFG982tw51C2iQYbUaN2Riy6b5K4yqrKiAKfkwcb1SRCdpGL5S1nyyvZk4ZV",
  "key22": "rQPCBCrdokmKuRrGHVZdQyPixrvdWTtahEPShKsfTAmGm1CntPZedMDVyRrwBED46H57bWqvoo2EiDR3rHjJTWu",
  "key23": "3wmjLK8D6xN4Hdc3phq6AuoPoHZsJE4gnom8PxSir8SD3n5duwYFKqbe2foX78hdNvRw6vygAhUamsxHefvqVHAm",
  "key24": "gTnTShsQfQMCoXC8nJMN1Ey8Hqfz7SgeJWsz9RAxmxdrKgw7zpbTJQ7BY3ax4owTrjt6tPVfLPJ28qbZH3ZTABb",
  "key25": "58b6pBapF4NovE6Qv2NBqdhiRJLc8tD5LWiPQfbYGGYYoR8j1iH5FuyTDuYXvj5hso88iptERmaYivefQQWmcD7q",
  "key26": "5fqfwmkTdPFuqqfow5sN4gpeoFGAceWyJnyv1yDCPvS3RApexhVUcg5fVgkdZd1LXvEJEK9rHtiogoSoimLe3UpA",
  "key27": "mEzgP3EM4ogznP6GbTYU3zccKFMPZPUyBA8uyAiFBrCehrEtwVDANTUEr3qKZRjv8mdhzJbkPJADZAAwX5yz7TR",
  "key28": "5ggiUqBZggNJcTab2UtVZD3sBSkh4Rdpkog9dBp18Km6GYCwjMhUcAN4gEbGis9gL1wF7RBKPCDVqrJD29nTowiw",
  "key29": "3FbESBGpwbrfo5nqADwMZembdUhThvjSMnZbfsjFrAWaua3EUAKEo7iXpSbBpPZAFPBX8C3JHueG4owTJBZqmFXU",
  "key30": "QgWsrCcMpsbvX9fiRbN87h7UB4zsmeoi5nvBA6Zn1dXTJTfnUewbDYvC2TXWZbjnMPxXtkH4J3BDuGN2PyPBqYJ",
  "key31": "3734dut1wpXFNm4ixNHgLY5WR4KRRWVvyPPTdSS9Vcbivr1mxwuvuniCA2oL7FZb72rv1JUNDHFM8KaAUETRhyVJ",
  "key32": "2j4H75eKvu5uWiFnaa8PsUzuh7H7kCCb9YNTRTb8PMTsP16fYiqthewUFCxn1p4FTbh1KQRsTxoZURnM76vyNCqY",
  "key33": "3fyi5jnihCxiWvY7ihhcVVg9hDHkb4RxgfrFXT78y1Zt8HDJMuZYf2Di4i7KcGDkKsJzbXN4sQtzZQF6z76LxAsg",
  "key34": "5vkF3H7cdEiJsxxrhXQMy3hAhbvEQ7D2B5VbfLVCHNb68xmRVZQ6ktQegUuUFQbCvhGuonvhoo4p92PF3JqbFgwL",
  "key35": "5n6Y6G3ztFvURXbSShPdJWdN5UC2UW2VRaKKs9YPCnfiFuL2SCk4jW6rTGgdUitgbTXzpS5ZuaeRQetG1tiXwMf2",
  "key36": "5AgPfE9m1UpQBqeTqLaEbXUJ6CbdD4DKeJbyzmhxwPgCkYfCCmD6CK7jL3ASvHPmgLj1kvLsHdikosTYqyo33YUB",
  "key37": "3acdp1fBYjEvLqZbkH2pvmNEw7ejgKFZsc2M7qc4AwLnb55PGden4E63s7MfKRV1yLJte4ThjJeGf7NuEB211Zm9",
  "key38": "4HYS81i6PMqG7iRXBvPpnqGtV8LvY3UMNn45fZZKifUobu6X6cSvHM99b3Q2sxnntM2T9WPbvVD2Zs4GqavxYn9U",
  "key39": "55KzRG9Mny77nLe9LN2sCvqHBB7T41P3zc5iuinReQ3AzyjF8Mwe4wYD6BHZNi5hj5HVFTcMrKUHim4EWdgPaXnw",
  "key40": "2ckrHXFTgSttxrsE1SThwyGqhF3wBMDXrfJjx5a11BsBMuMwVF9V6fYrKs2Ln1JCfzY7iXBYugeukH8aoiAiKJvv"
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
