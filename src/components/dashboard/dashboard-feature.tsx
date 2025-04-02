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
    "5KzNDq96m5daworpTmGVVtmaxxZGG2YmWy96Bnrs4Re5AAAEYW1KC3brwy2gyrZAX9pVWidNxavRitFNXVUZnYcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDY5JX8X4HEVS2MTqyLxPNEJZPSNJAHvHao15TxecfukbrXxoNnhfZaYRAn2cMVmPcVVYd8sKir7cMF6Ejf3hnE",
  "key1": "2RyWedyojujhwchSDVHNKRqw1tzJEcRnnkoZC1fweTxSxcs3Xw1pfgJEnGUqwkAZanLVDMmaCxBaDAY3p8z7zct3",
  "key2": "64o6XDnegG4iNGUwuS7gHdCb7kBisFtcXwN7aFbZQqUcci2U1KVM5xoYZCQL5qNsQhxFkrmmroeNo9EqYVfDG55B",
  "key3": "2LD2tsDF7gAa5F3SSN8uY23wY1szk3GynjmuwD6dysMN1Q6i1BK6hUeUwwTXicx7HgzM7YawKSEWJGXPWfCoYLZ9",
  "key4": "zCw4cZ7g1YtEVCEDN4qEJXmWAqcWXZXScAun5htxwjkp5YWiXArZ6KYe6Zf1WnKLao1K9JQnYxRHBfdawwcwSmf",
  "key5": "2LmdPE9oVaoQmhkPo41kRHB6tDNqm7cMMSWXdHe2Dm8h5v6FNKFRuEcppt96D6Fy8YkUYjaDrkdzsNNVSdadVmPZ",
  "key6": "HAjzodtcRPSmJs4ZN62vs8ned5uPWdnUeXjt35v4pBcx7gHkLrwTDg5A8ySHwSBBM3N8yZ5s4v6vWw9bRK1mPBR",
  "key7": "m5kYSyR9MoWwMTXM7P5zqBKQEf6dt4oyYhfsndaPthwHeJY4Sv2e6DHHZYWiccyJw36fyHRdCWb4YqsAkBoPqyZ",
  "key8": "2F2UQHKFv6MPaVeKWtNAW4op1daJv8suHqHmnp7vUW4djUpP7Tzpn4mfnGF3VP2LBAgJMGKrKwj6v2yKiRfZzdHD",
  "key9": "51csFd9YEpFT7HuUr4cJJtmiqfoReBjAbYx1V5HG94yNX8JVZUrGsVVWcgMEbNJyV52S8EyTUeVths5ohC3fFvhm",
  "key10": "5u3MSbNe5ciWkqUiMeh9yrwFG7T9gGToQPiioQUJWiaUz4EBjYGPHVZz4Tx9buK3bYkrRbneMKoJvYg9uXZvTd9Y",
  "key11": "4ZShC5EbZJvsW7eN3h1WEqt2xA5hJXysyShcEknFCxKR3Rh64VtSuZXqF3wEEBM6eMjLa8F9WHqGMpvpBzLtJADC",
  "key12": "5nACa6QbGpJu8Jxf2svxs61kWZK737bw7tWtiSmWFQv3bVwy2WdVCec3GmDBXTx4VskeHzhpiZ7yEE9R9RaPTYRy",
  "key13": "2azaeJAN7dwcuoXPc2jb1tyohzam8etQTfSThC1oie9cjXb6Cos5ZLN4qDuFXFJwp9hJMS7EJRAsRGrWcY84ejme",
  "key14": "3DX5sVUJnFF8K9QwsEtyzp6fnWhZYZERJ6oJbcTJKfRPkLjTWrxX2xNv6ACffZG2ADnkQuExemXBX9snLXmMfPcB",
  "key15": "3XLuM8RJvfTtiW8DqfL2kBLEran3JnBvyDaLi5LSeF3gkcxcjsKywnMRRbMxVGHuYispuWnAhKY9ZxpqRh2TLVR5",
  "key16": "4zRwmpWiMf6DHdYygrYu6Mk2jbGRdnij7xShKje7E82uWTMJLn8GznAfimg8oDGWKeiFMoUS8N3ZcXnjggjeGrqz",
  "key17": "5gdPR5QrnzvX6XJdd3xZCsEXKDjtycVMRGW9xWfSULF5SuXRtTCNcAU74KcnkWioiXDcadtK2v5A7sowSEgcMG78",
  "key18": "4hRXnzVELogNaiR3NK1SFAfXZgYzH143hw2DLNenSquTYB6asoijSh8o6YnbLxxSUnRMPWLdv5GWP5RpFiz6gQic",
  "key19": "ha6nD3Xxv9EhVjuPqjNs8wBMxHhsgwc2jUePF2pPZEYvp7SfQcsEMspoSWLNMp3nVLjCvWGTVuRGB2ELg6BpRZt",
  "key20": "3tXa52yTyqHXVGAfpTUg7xtw1jLgyAXGDZ4ECnS1JQLj1ifyx49A7YAmSeEesaomMdkwG6QjoDaFx2U1bUUg6QNd",
  "key21": "5AcE9TfRxjRFzbnQEZHHFsdycEj6ao4sqh8hRXBx1zxNPLEMGazM9CQSMHJkwm6Pp35CJpzxJo2dVteqvUBBrZKd",
  "key22": "UEQdeQHBvSV3Usv6R59gsvRpC5xKLGi4AfKDoQXynjDbXJ1aQznCYwia6ShwsVSxUcAQjw1uBAXgEDcGwNtRWtF",
  "key23": "5doFXXZPj9HienSHB6u8NsDsZxf7HddmwAqddBCcFhWvASoWMdCnQQ1kxA8HRokttFUCs1JT1yJXJQMEuFKojuQ6",
  "key24": "2L1YWY9wDXKjsfRi8M85Z9ifyaXbGj3x5frA2SpRryhQBpHTFbXEK6LreULAMuFUWJRBRZsdQQmF7XCQNzpRntrW",
  "key25": "321e472SAzQKZz3o55iEz6tq9Boyze1Ncz3883L3oEttz81FTd2hM4PPr9GARqmR11nQLcg6AzcbAYfJUexup8M3",
  "key26": "4AgVaxQ7S15K3PKJdbfMVnC7FbeCJVKhmo2xQhjqCuqbWQoCqKsSNf48T8DTbMt4iB1YEXoRusGQhcCGcFJjUgcL",
  "key27": "gPndBgyDP8pau4SynByuj5oR6CXz3VAczhe3jV8WhnbN8ygWTq6raVv8iskhFNDAoiQn1bQgBY5CP3XqU6tn3u6",
  "key28": "3VWn5XoQTXdScwJbXexjA1snGotM43s4Jvdssag7QRTctib2QaRNi3V7BdUwc4RDH6DVAWco2YXqCxxXZrXKEVnM",
  "key29": "2yzrDmqTe6hpkP94So5rsYafxovnJFTFVLFDTe7b2cFUh2TQxQecemXDoWWP4HpLcQqCAvHBymnNG2GfyE2ZEcq8",
  "key30": "KW1zpUAnP7xDkNrnQhwJC7WERxGji2byZTxB3CBHsezTM2Z4AePXL6BaRaZwe9rdMj7DNdtEBArJjE2YawQtN76",
  "key31": "3GCeLHdXPqwq7a6acvre1SGJ8atMDy4rxsd5AxyKvCNUqh9dEwW1ZxQBADEgdQ1sQUPoQvpha8woSQUJkdoZqd73",
  "key32": "CiQHH4hfWi9VwmsP17PNh8gfFTW1QPqeM56RqYr3HyxCHMuMDwWANd9jjn22H5t1jAejMv3H66NDMHFE23FN1mX",
  "key33": "4o7NjzD5cQDwwsYdyzbu6AtUGmTFrSRpY1UTibqgq5w7SS5YSf4iLuXCBtG6pTpXioG5312yNkdY5zcBoUj8RNEQ",
  "key34": "46vCFrP7qpxx6PKifCF3W5mgHSUVGxpv2TnvrmYqscF74fE6oabQFCXeuR28gwGRk4eg9GJmiAecqSfQEC2rAPdv",
  "key35": "4JGXmkjiSprEhamfjbT8qR2fAJiSpXLYpcHRfapK8MULnqgktkdvXEn2WLCQhhBYusumi4VJt1JWx6bkWDe4yz5k",
  "key36": "5p8MA1zVkHyrHKHM51971SiyApojidqYpipYDo78kW5vx8qntTwLvj8YjDr8A74jwxMDAtWtRKfoYnbnzNPV8opX",
  "key37": "TNZBprhnaVai1G17r8e5pUyF2zCT6GHRhqeZU7smDuLSWDpywriEjYtccXVFhBwgwbdNv1WjJ56AX3N9H1vBkce",
  "key38": "2PNtagWHJo31YZiHw5rsatCuiXsRM1vogRdMaqTosM7WUkAFpC2sjPKmGnbhouRY9oTTYQT3XpZbLuF2iyVGXEjx",
  "key39": "5V15ukX2sPrEK284A3Q7bauS2dqYQojUviVJKZsfywaKexycrsjKNV6ZQiCvTzzHY88b7KLoMDfQ7nGmr8eqAdSZ",
  "key40": "3zXjkrR8jwB2862ZXtHxsp8favkMQ3rv5fc3UPmW3rn1qZqDixWAEkdtPmcLE3U8RxiWx9jywCCpXx9R1k6j9VJY",
  "key41": "4NmWsB59HPnUnkp6vntZ5NAoNipvDkQVYsN4FPWDV1FXtK2UhY8QsH9W3KLy7iGyjpokX3na7naZchR1ZYAtgugy",
  "key42": "cZKwr3ZJMGa6ebc9TkSMjk7EXrpmr44BZdMULVbJ4Fx984s6sNFtLZZxYjw1Lqajx8UCtV1uXV7DF2mxAykJbuw",
  "key43": "2CjnYc477LFkv8hPLXfQDy7FvVyQJgggsmJw1jxNwo89SsHWAru5JUA9NkGZzzEnXpvHx6PF3Pr8m657i6iK5BXQ",
  "key44": "2Tc7FDUZ8q5RZBgFo3mbk1M7MuHe9qpMwWd7tqW7gwCzgUjy8ZMLR17UCQ5nKnCKCSonvA5yAyZ19rnmyKGZNZGr",
  "key45": "3W8BxSVjEfyfHSxAg8GGFC6eDtntzhb5twpieCiwifQJbgMGAecj5RZ62QKdQCv44w1vnfmetRqawJ4EJEBb1Mgs",
  "key46": "GfkRrVRCHux5p65YvckiQESoJbL7Ygw7GC978x7VVU7ec53zzaHhec6YD3irXUEeWLbqcC93nWEsG5s9w3bEj6D",
  "key47": "2JZw2KML2gCUGXqr15tKykTf6JF2Tpt64giX57Q7UWyxQf45Ty2JskeQrWPXNWhofjceditgwAKUSnfzrnw41bt4",
  "key48": "5X3fYEfwwsu1hUood7daYdzQ1YEusXUv46WYw3ruWKC1TuKeFHHZJ18ekbc95ZD8ANoLtCwyuwHtf9RYN9JAb4cR"
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
