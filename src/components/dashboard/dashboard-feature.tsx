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
    "TZvKEVtWF3QRfVyUmCPEv12APBDbhwuVJNucXPHLaSZS7Vm5hVv3i5WUAK7QK5en1weJoaqPRPNaRUWCV58hXPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NxAzntNo3uB9DAGmFfU1ZmdNkB7B6Ef4EkmKAEHzj2MqC44RC1zqjLDWqPEo1b47eZGvZUscHCZjZMxK17sZthP",
  "key1": "5ynNtEBitZtFBQSuemAcMs5zxSxm9AzBnXagwAT8bEK1oEfVxBpHky8WwcAehdkg47wKHkSnmSD9Ch9RhrrURyKC",
  "key2": "4NWXTJ3YuGDz2sPQZfpS1X8PubXA1qrawRxAuHWCSRBwvRZqytXLa9afLhDepJYehJ3dxeUH2XfkQ71o586JpLbe",
  "key3": "4YBqePBnvYc3Fjodj7dnEB3tefJbqZNzEs5gr1YTKSiX8s4RjjrtA94gaoN2FiDFWs7kncQ7tcTZGmcyn1kU3He3",
  "key4": "x6UaxzbAmZbYnXg56xbdJChBg4Z3GCtqYFzMYwWacScWQN4G6x7TqhcsApRHextLwJve1SqKiWZ9MeL1AWL9Tro",
  "key5": "2v2VqLFLsTjQX15iC7Pcri3KpdLE4gL4dzbsuewMeipTxZTejKwokYXw3LTvqjACma6Ztx41VLG6mnrv5K2imrZS",
  "key6": "3U7SGQpo3wsdAWcKiHiSwrCdZSQ1rWFhwYruM8W9Jsfdet6R9ZF2Z8BUqaMqoW1QfQdx69T3bdfCorKkF7ERid5N",
  "key7": "4KiufGXW6ZzdPDZmtMoi1NJrHt9S3wuHRNxsACuJS12M5YGRaf9R1p5MVxJC7eLzWfsgsCzEJ96yhYH9P1EieW2x",
  "key8": "5Bisrj3zch5FSZQaokVvwMXrfuK78h4iRaYHHmRsTG5LFLAwTYo54TaGbMGRajYqnMLiAsKrjKmg3kqYYx1hqXDV",
  "key9": "55mtVpBumYjwQqAwzZBi2EaLzsyGKmGXiP3p33azprFkAvUKnry32aMrHkd5Teyu2c95mNh8SgVAhEsKNJc6fzVt",
  "key10": "2hmuG8FtwFcyDmFuw3vEkkmZBsWYPKdrVqCrNgyGDcXjpH4iYUbzeKD1LhtPdbwqhVTfZa4BYy3DE8wsxdQdA8Pj",
  "key11": "3ZxEuQJQvSZVznEFFAs5znMJ1FkEp81zw8HNToWHmCKQEbmHwC5rfWoPRQS7Y6fG32Jb8G4qCsdRnyApSyJe7cAx",
  "key12": "2uZEkAwxCJgABmsJQzB4rqvm9dS1ms7114apE4GS1nAXNhYJy2QRJbjaMussNpZyj11DNycDc3cxG6g7ox2CyWj",
  "key13": "2msbbUJoxQLyfC6GGE4e9Yo2kwMEstrN1CET1ekwmFosqeqViuMSBxPE6xE7gm2J3LG4AfzQG2p5t5kCmchSNDru",
  "key14": "46FPVWaxxF7x3wwt19riSM69yZtnm1FDuuHtAa2qs6c5i2ehgvd4hsruUxB4mer5mb5xNy8jgYTFV4XcYWD2VZ4R",
  "key15": "NywaNdYrw9jcx1XqAZRf61XmrdcTJb2gYEwDmT1E2Df3Mk6vgjTEgtdWKijy4puCPU1AMe6nwA7BSZeXAEggxha",
  "key16": "2no6i5dipnUrPVzBAYhXpacifNJBfYAQusjDtz2EauMpHX4tz8FtotggyFdnrD7SPfWLXqEMSZbH8WJVPdG2er8Q",
  "key17": "2CifbRZLuzBJ4TB5LZcBuE1uLxtuxjKCa415C6yArRBYtzzx4kn6ECohzaaVrWZmNKwcMFHVQWDddxEJz2qa5bQ",
  "key18": "2zHKFHndo9dokqQa9UG1b4VciCVsRSMaWucMBLA8gmZ1MKJSe4UJErH96b8WgPEd2U4cXpDXNeG2H9igGKtiXR6i",
  "key19": "332UwXL8GFSb7pbuDQGcywEZVbWaQtnpciBPnxyaBwhvAfiYz5GyTaWW1Ukz66o1q3UuNTe8UUBwXdLLJxpXhWgf",
  "key20": "4aViMVk8buFickwUVdr2JypHCFimf8WGfTs7G2Hwx3mGPphcL5HzmwrmQtuob8ZAgEfb3x1THqnJPox7sGqKm9jD",
  "key21": "3LLVmiZBpv5JLxy3dvBywzNHf3ruUhzoshg4gkEfK6pfNwWMw6DG8kFXM8gDf1DGbrTmRgX9xZW1emGeN5cTFrcR",
  "key22": "tBp6gw5qudAVuVVxyfZpwd5oknFXF2vpXEpt86TEJkGmwhGxLXck2vGNxKt5w3TV2MYjkazTFCh1BepQtWGYnMS",
  "key23": "28Xwfnu7BShkKFYmRnkQWpNJnRCwPEvuy7aVauQfbazyPBEGad3qH7X2hFo57xKe2XSfeVLN9F8gyhz9H5iDf8M5",
  "key24": "2hSoJWR4i8swkt9Xi3Lykb3pobgXCjcHrPnapSMw7oDLENa6Wo1RMsT2FwGxFbB4dW2dKC7N8M63E9rbBGQgvz41",
  "key25": "2gmaKGamvcYEZrxn1g2usA3VTbSkZHXpMxAJ3bASTkvJHcsUSZwPhWqzr7zWSHk91mC9qfcCjs8U7ofvw81QWV4f",
  "key26": "2tz4xypwd9iobKCjZjXQ1PP2kaufFsqdtV52KVKW6Y9peu7bvMLnBDj5agAsDLdqAxRM6EDiLgikpLpxUkCyJJpw",
  "key27": "3WR4qg8Ezjq2Yyjf3X3w3WRTN99eTyowCC38ConhziVjixRYMrEkGgG3pYKthbUUAgh3ApZyqwvyCJmnTzjrWfrm",
  "key28": "CXmCvThdw2yfSkkgp6Ao8JpEyJDkWT9KptnBLeNVVAFgi54fr5biktxNge4MiHp7xw17hgjtRo2QL3KDZVBjJk1",
  "key29": "4CbHzfw8yDd86YAHE2biuGQzWtGDHLqYk1yVbPEheWG5P16AQxqcMAVovL8HVLMGhxDzAeobFPBSW9P6doi3h5rY",
  "key30": "31V4VdQm1QJXmvwY1Lcunxj7RQa1Q5Zhsj8L1UuNkNdZiCmiMNtujLiQJVoAS8Ymfxq2aQiTFiVUeyDmxaB5krz4",
  "key31": "31SyEBkLjkngYbVpKrLfCFgJSLZ8rkBZ9eLNkBBNhbzeJuGgCcNviXj3PrYFRF3wpcGDF6G2HW867gN1ySNjanyD",
  "key32": "4bTFGqdvER7ncDrbvu3MJUSjJu2QUZoSdqrC5drmM1dfKeTCbsSP5VViSY9DbGvNpeRHJKAr11ZVWvnrzPkM4Aww",
  "key33": "44v5jQUtca8foEz151yWRYUNZ6N5uQtAohK5uAv5o5tCz4EzTWUBWe4MDMjerAgGQPjtqMRTwXXWUTfbm4deVAAp",
  "key34": "b7Jqb9m87zuv2PgdUWSp2MEp6nekWGWAUvwDNMvMUbSNwnJCqgokBAKayt5sZ1z2tqVWLo52nkhos4YdD34xJZS",
  "key35": "5jwdGZ7Hez5yFm8R4ErAUkWd7BXH8sV9Trxxjsk8Gqq85ZT6m8qQnTxVVWY3T5e1EByDoNW67G7tekKStAijQ3ds",
  "key36": "5UuGn3ugGzc4TtoPSxuT3TriZmLkNaLhnj6B2k98PHJVSXRWfL2pMi4DLrZfZicaGjDLcezmNubsb3C5qume68oH",
  "key37": "5nCbzqqyWEfwyvRr7kNffEmzMtjXUfo7CQUQWwiQauAf7DuyMQEi9sgTBM4d2d5D4yeifDae3zqmxWg6eXPLKnHW",
  "key38": "HKx88itoyh4KtHRZVBM3YM2KfYhVCyF4Vn8E2Bd5ogmCjquztvnhTWK9pk4VyfRcX2niY8V6irMfTBRP4oHHCtn",
  "key39": "BFDDBBrgSJXrVzxVPHMDepUmXwy3ct5NT4gFDgDdJS3R4PHbp3dXkS2Un1BJLybX8NCepd2KJmBJno54Axgtjvy",
  "key40": "3hjMsyfHYY6pfYicCX7kpS4kQyYyXLQAkuE862sNfBTBVEMTGcYNzWSYpSzg2Q6PJD3UVf2jXG6x8W9upLxNGgrH",
  "key41": "4wrWK2eaAetQ6R3PLm1PVdem3yCFJy2EDfL6cmiThKWQJFAJdCVdH7dCfKjs4M6sLgfM6TxxDtVw79nF1mWKhQVK"
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
