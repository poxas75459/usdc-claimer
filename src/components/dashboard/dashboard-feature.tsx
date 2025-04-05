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
    "23TPmu6MfYZopA8Tv4TJfVtuZ2kMNdqFS2hKyT4iu8w4gHQsLjL3um87FTvmtnbgpYRsppmeEbqfKfMmJE9kMYNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xts63Dwho4qACQxEJtM4wz38KHR5FTfEkWBCWTsmZFUtwyNyKvTHK1aKWjQuz3nrv195yN7mQc7PrWsgqEjCkmi",
  "key1": "3WukgLT4w3b8Jws2kN43yNswXX7PRZfkDUdcgL13HDNdTGeuNVwVGC8SjTxUYxKL2zB5JoFNjb78XCvF7DvRfRdR",
  "key2": "644ZxKAB4km1vVbc2ETPNBwcXjoeGappWaZWebHj78GkF9xgJeAgAnt5Tb7iKww3Ndr6fYT6tEAp4zVD84YZT3os",
  "key3": "4jJpqDEUubNv9hLDYWnS7vLqUKfcXiRTEhum4JMndnCNzCaWp1Dckr9WhT1hu3zRua8b83Tx9uMk88QqUNPZvzsx",
  "key4": "5tDEVR3qWk4xntR3jW5zvGfFTKoCtRfjj3K7vPyERXfisun16JUm99bYmhN6cG12xHbZaBH9CvbphTxyw8dubukr",
  "key5": "5RSA53ZL7h5u6JfQ17yWAM1eq6hrZKboavTBj8c5SiKwh5LokstzkgBFLUnhnFgaCFjB5hk56VmHLY1FttMKpTqN",
  "key6": "2rb7KakU8EaV9AjXN5Ya3ii43EyauhZ2dUv3h8tm1jYanajGdRC4pvNpUzKoCoh5wHBHM119DHYVc9P2b6E7JGq8",
  "key7": "5hjttGh9d3xfJdYJxmnnfcH95crcPtWg1T6G7hSWSuXw1LGS6UmXmKfJMPC1iKgXL9LkeiFcoiMqGaCznsdtyCkR",
  "key8": "5aPaC7dgj8m7PryJbYcL98LKkgdXESV8dgNSwpwma86VgEVfQ1JKvm5e4QzMycysc6dvQkbFLeToNKQmW9jsF7mR",
  "key9": "2haY2MRvuov55LYd354Xdg9vnoUso4YDCmiHmpq9aAZpYWDyQrZpXkAVjvLdoK7NL2TEaiJqGNrNFKi5FYhLzg31",
  "key10": "5BbVALboZKqYzhjhJiwqSrZ23u6HiTTZPAwj2ockepPK9qFShzncyq2nSM7ndFCqR2R84KJvEdDPMM9XkiZudNsd",
  "key11": "3eqCe1WpinXAXF2mTDFL5jk88iFuR1QQfaYYbZ34DhNoQApv3zAP4Nf5F5tkAZPvStQAtT7ZAs2hEQtkCLdySoNZ",
  "key12": "4cGJZe99NYhW7VuckdidaTg5q2ugU2jnSj1vt8LXyuWDo7qDBUSzQcABFiBRY4u4t7cnNA6W6UQAHoPs1XST3vqJ",
  "key13": "2kDstE6cYyGhrEmd1yjsF3pBfxq3wQeBCBkRXUfAM3KdeJyZniBzvi6ZDycTH9CEMgojEd7H4vR2pmeY5VNhPAEz",
  "key14": "2x1TgVVp2toKL3izfgXQD88i8SWDeqJr8EstmTagLQpiMpKdK5Bd5HaPmvMSFtAesxDCkuCJpxMboUZWHPK3fhip",
  "key15": "3sffXVqWsXWtNzgqetEwYLmcjKJhzgTWjPBvevnAyjY2ib1eAMh8Lvxz7rRDP4XMsucyhspTgkvXDE5PTeAZ8QqM",
  "key16": "28c2khQzmzr83MHLWDiGNcipjxPxykv1xpUCQis1Yp3ajAvRU2NbaCLnv2TjW2aQf19n8X2ymnhCh73iJJvPX47j",
  "key17": "5FHusHtufEuH4ZKH714CBFM8xgBo8V56ew9CMfn2z87b4drX8dmjwhDbnwxbdakWSHyL17AAmXb24qhg8hekVLyo",
  "key18": "3poK7SgGWegXXUX7ofzDoVKZWiL5FLXHaCpPBB2wHcEhyAEwotnp4LW1msAHqCjQLSuhbhvHs8ZrBmPVawzHzrHH",
  "key19": "5cVA3quzbCzWFpfhrXrGi1sWVbawwHNLuPzPE6aynUrpUKAVNtJGcZRdmrPvrq6MruYLAEN5G3rig9fsXKnotp9U",
  "key20": "466b9XJC5yFMfqoeox7wpM84y1Lejrtc4vydpBJ4qCc5svGKb58idupJ5Y1PTGC2NUJTd7UL9N45v4opfady6B73",
  "key21": "5NSR5JYNiGLpyV4F1oqoVmThH6X2x5KnkKnDadGTfYxa31HC9ejKNkCttN557ApekShGTuEWC42duNWPB1hB9ZaB",
  "key22": "BggeVzP8VVo8YpXXRv2upNYUM3uccrF1N9yVgKxg3goNbfUZ1na8hDgtojDc4tygvZv1HjDz5KPqi7N36TbxFaU",
  "key23": "FjSdoeL7gy67z5M8t2BLU19VEoGr94bcwLvd4g3HqnFEhbvYMyjAbueL4C4naSkxMDKymipSpbvwJ2DHkQRAJen",
  "key24": "2cPX5kG4q7Dpv5nhGhRJcJQXj4NyEJP6gwqHUkHmjcTBxyoA6AoUZzDZiXj5Yq9SMRcHCLDU2RWrj72RBv8Rb4sX",
  "key25": "BFbAMYYN7kK9U1jAQngE5BXLr6BMattx9mBoxDx78oKCpBKsseySBaXmmj2jHtqKKsB4H8BUKyHVoTYupPzB37S",
  "key26": "9iCacMfTx3SuKHh8HA6FWdm72tuu8FXcR5xgr8hnLBr6EDuGwgG7e14DDEJnrd5j8zAq7i6sBu5cz29FL6YUxPG",
  "key27": "2mUp6EKqmJGdjUXVjnFTuGX9RaAwNs36tVDpdLSfCzWiMDJKn5Uo14kXXUsLehqMaWrFnYZkUfnNHsDBXCD47Azo",
  "key28": "5zHXzymRZDpx69kXh7DJr24WaJvotTmFxQcJnE5mgZuGfUSRPDZxmJBFsiniyv5P6ofYHVs9FubnemiTvWEFWgRm",
  "key29": "58ddD75qgiKby49Cgjbny3e9Xo1PuzjMjZSFLEdKeGZRKQpQMAxhz1QQZqhncCoWwD4zUjUZYhyx8xWuHVKwbCBp",
  "key30": "28eLusfN4VepR12genfFeR7se1JFCt1LMPLawqnaTVZgpXuG4tKJW27rxE6LKZPHgUkPNE3UNgjUEb6g8X3s6F5V",
  "key31": "5cjW6kpV8wU2yxH4sA69YnsVqeazo4W1HUU1oZHGdsQdmHDzS6iYvmChD3aGsGeiurgQAFz1vWHFiuR5Mu3FbirF",
  "key32": "4753y8RfiFZozDF1hpwDKJK8TrvLNH8DtnJMAmnAovk3p2oKTs1kWY6PoHbwKhcmpD7NrTgjdTPi3up6K19YX2Kb",
  "key33": "2ouAmYzjU8RkN1sAgEWGGpc2N4RvP3mScBqmaCCRhjeAHffDcxLpecrScZPVj1uHUYVkn382ifVneu9hNZCq3Zer",
  "key34": "4HbBE3zRTrqtC45dQzMcqXzXnZr2JD7d6ryc1TbKESmQZBhYawnJ2uqdsJqwbvjUMWLvuENjnTwLqL3Wra5TRkN1",
  "key35": "4d8T4PBCMgRjJmBb8Pe6UnTVATV4vFrVxEE197UuXq1xTGg3RzzUz9D1iVjpV3ziYLk88MD6YeUwvux7MgF6ZRKe",
  "key36": "2zn8YkiP91P5YFcrrDiwoaeThWbRqLp4p2a8MaRHu9TSDpeSyeGkdPkKfgiLGMSfkGeK9X5F82kCVfVG9fkgAP5u",
  "key37": "KGX7oM8hPSMgMgv748Pbnf3AxfsE4Q8W7LCPq38pbGXtBwr3wMn1U1aZYTsLUDfFJTcdqM7WX7Hv6QFydy36tLM",
  "key38": "2pUE4rBhb2Yf1tiSA3LANyPKJkrR6GgPKoi7otMfewvfQm18KPcQiLabxj25KK2Pnm8gJMFYzuxEygFXd5bfvZXi",
  "key39": "4daXxZPnXKcRS8iR2poDghgUSx578KHxiJZsS5B2LyDN5PiNKz1aQqSxUEhad65xrorSe769RX73WCai3DUEMmNN",
  "key40": "3joo9QW1mnW4vR7paMWJjnXcZeXjTDnNW7QNjHxJ6shhPiYk6Fb8x7kXdXeTbogwonNf65AxejrMBS1ta1mJJQSu",
  "key41": "548zsYhkgVZi3E2Niayt2Xpez5vccYsAkk6g1qcUJu9eLvsfGU6iWKsAaFr6EaRna7SevmK41TkHy8uraNfetieB",
  "key42": "3mKm8PfNNLqEa82x8oSxTw1oLqx1CDxScVr6w3junWiLmkywKNkFuniszufaq4Hmu2QyG5BqyVxziTGCEJn4x4q4",
  "key43": "5t4qZfLhcZ6XnBjxuHwtx7yJiTLKHgdtYfFSnor3mWtXqmDUapM55rqbdPxEHkrWkzswVLvNUzzhchvkfszR7HE3",
  "key44": "3Qr5Jskpj1ayF8FuLHijtU45eXDRUJoFTqpCXPiH8saAGnRYCkKcJAn2FyRYjccwZNnzB7kvJJUQzqegFe89F2fH",
  "key45": "uK41i9JKnT3jUwx8VW5ndYQ2VC9DbEAuz4qkMteyJhtpaLhBMaedCQEijTNbnHWdv8UaLL7oXuN3sLXhc7LMexw",
  "key46": "4GgQUfNQQP7z9QMuNztyitk4AYX5z5cURVDAS7cFWZJpxg7wxFDz9MBQWnHx12kjgF8asqcYbQ5SqAFQp4Ph457G"
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
