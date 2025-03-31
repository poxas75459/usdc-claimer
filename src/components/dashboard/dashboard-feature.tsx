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
    "4AugDbSVF5wq1Dj8JAKxVnNg7v55ddvheM1PYPk1xYzCNJ9RTq1udwx9Ej2r1DkMPL3HL1ziXu4GGxECraMYveDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t3H5Csv9roSn66qebrx8KxPkzb4rpH8bnwkTqx3xwqzgKjP9f84AD47c9v6wkTHkPD1Qz3q8Xmu3eMuZ9xNgnT3",
  "key1": "5WFURT4xMsWjb6NJNEDrT1Bip8MAQXvnMx3XY82BiyTMiH5rjGGE9fZzmZEYopjaV2zHhhbjU1yuRVGmW3Xf3QhJ",
  "key2": "4oPvFPxLZGj2tG1swefSHaSuGQifixvkfRVLgpmP4Zos6y9XCmNa1Nx2QepwKxR7bA1LGbHDhyBWoANEeaUi9FDw",
  "key3": "5bRX183L8k2P8J2ZjAxvtCBpxCoMbFy1Nz8Ps5jrHL6FDNWvnG7syn64HpoS6gRZqVPyENFrSQnM32ofLB8Rh6fL",
  "key4": "4gXo8wSeGQPDN6DVoafUV52jdGKvM3LUDzKgJ8SJc9kCmRhtyL3VAyBdtRTERr15kHumRiqfykNbHHawxBU4hRp5",
  "key5": "24oXAmkXB1wgFwiunwtZ6adk4uwCjzgyE5y25Aa8s86aWy6Dyp7qcggntaUUiXKA4Hhn7q786VSTojJEmx3AiNC5",
  "key6": "2qbEkSiRNoks9LpGGrMbgBeahHLd7BzYg6cQzfA6BAmU1SGAddMxnEoy9tDV7Fnkvjn5Zdo4kNZNND3EZ6X1Ajui",
  "key7": "5UM8fo6w2Wk4TpqRATkphHVnwu9TRXqrHgeWguqptswLmHk5e4TXTuuTuA49FSR2Xa7pTDzMpwuFHUmqh9xKNQMq",
  "key8": "2G78wx6F4VutmN9LEqgFVDji2YHVMxmrMaPdzTGwBkFCeJDtJniCKeB7AqrmBFCn8MQU5nz2PtcB79te7azVzBLq",
  "key9": "2S6mYvQLB3NXp6KCGeJSBjMn4pesGfS52tppsWkcuKz5dGkt6B6LVEwN7hePJXLefaYHzKfuznSH4KNjYwHRKLLU",
  "key10": "5JPXVWZC18yfkANjjhL5wL64i1YUA3BCsa1fj1VCSRSmE52MGsAZHPsLPUHkay1jH4hJdajz3qc9ojLNhQk9cXwS",
  "key11": "28winu4UJUPULir2XrFcdYakqBKZfC7v8R2gCkRSVNzFZwvLdsAavVsVjXDij6zqrM6UTfm96J3D4ePkU8kv7Hn5",
  "key12": "KX8vrQn9cgQrKaxSnpB242VS99h8Ez5bRBnUiiN1e44XK3s8vrmjinfdqCxkpY2GfTr2Y24j7Rh4ULeM6gcKvp8",
  "key13": "5osRJoPKRjvJHZuKsd1PGa7CMsyuUWgRzT7AzKMFodNqEhDjeJ7ywy2zGVBxPa2EYj2Z3zoTqBCtQLDPU8cjC68B",
  "key14": "4H9QXhWJj1Bi56fdWc9bXEPQsPdZQG2RjEK76e6hD5zr7MJJZa2QphaTDfAFc2bAamztA9HX74KwWUzSXX3EMBtZ",
  "key15": "3Bsz7qstrEdY3qJuvgTPFBQcYF3wxjdrGKAZaPWooXu3xNPTHceoMmfRHRG3YKMrwhKXgS3hg4u9HW1gCjnDwNQA",
  "key16": "MDoE77Gqq3L1XJqCDeiER5KTJB9biNMCh8bh6XNb3V5t22FKE6tgyxaUHiUhyJGFqLdiizvaz3vuDQQNyeGE3jT",
  "key17": "2g9wbRhWAfMnDanjV2xyH3pf3BYXi7qkFrpiMGvCXKEgrJE3Vcfnk3brmouNDjE7eSVh2yMmKjYqjgDYqs9XizCj",
  "key18": "3nwE5MFfomoNJveDGFYHn9itkeUYiS7UscbhaXFRG2gCPmkJ7CqpqE24JsebfkVajTx5P7GsXmFjoCVP5dEXzx7s",
  "key19": "59UU3BJZvHmEQgsk1LoKT5CByB61xbjp81fyyC3XUcVccYQqYCFa6gpyrgcweGj7CDdae9EQMmbHw56y6LUHZMNt",
  "key20": "Sa2AqhcDGqdyo8SHauaiEast3NSd5fETCAHahJw9pgSBt27ts3Zy8srRdK9Ld9VsgmiBD9bUgCZyscGUjXuFZTJ",
  "key21": "2bD7aX6t89udJSuwYTrGu4mtiqqUkLzw2wLaUBHcS3Sg17rajGFSQXvSv8QBZcu6pwmf4jTM9jXBRX4jhXNvkdyA",
  "key22": "5362F6knmWqB9KfMXnV9UQBwRoBAtTBvz6tHdkQ5FAQaJiJrZKueS4XmYXfNcnehrdipgTs7UmPUr4Gk6UyNHxBW",
  "key23": "5XWiXcQ79gHTLJX68mrFrRWkXE5utcg8MubsNj67n7CbXQVvfkxFqvdvwB3xmc8X5UxwwSYLvYkwBrPVF5HxwmYK",
  "key24": "4wB223DmA1CNqmm44gb7NHbUqPe6VS33pgB2w5eeWJ4oaN6VSXp9PqvmMFti4KRZQVJw57TUnjjyVbgL7WBJcf7k",
  "key25": "5pogQasHNZsfnhdt5jvRbARvbWSYFdKfpHqBJAnYQZWNBW7HuEYyPzNsTvTbv6A5pLropPMrVgDaBSZA2sbxMjrg",
  "key26": "5MCQsR2iRwi5vVsmptsCo4MDQk6YCae7sXcj9MHGmuwugcMqYVgpCpcwiQ1wQP3RM7TAufzikhbW5AsGkeiF26Wz",
  "key27": "3shHYedvSeVAHdL2JARDnYm6KpKNwcLbYmdzJYGpp29yhXf9dF5EDLWTLHVkpNyDmMLQ2GhLpJS7WwbNiEFRys9c",
  "key28": "3d7byhSTA664Yzbdvavz1btPGMQDxjYawxZNSSmEZdD4HutVzZEdcrWSibUETp2CvvRPWT2z3magomBtj8GLNTe1",
  "key29": "3RFNdbXiLnhZGeQJdGSvCiqtJDUqmCnAhS4TLZ8Ax9SzNDQpTTBBSyqSBvzRxM27ig5sxyeuWGGftfDMMPwuZtRp",
  "key30": "2GtmMgiWUhSjYDVokYyd3c5USyUzqFQGYNj14gr6HVXgygJ6hML9MzVsmVSY94tondn9pHQLaP7EGW9U8gPdppbF",
  "key31": "vnRC4q76w72bMfSUDkzR7C5pY2VxibQxpVaoj2bCmjZndUQWrnKcbaVCcAV7msCDLrCQ3k23fgEGDYnVGidWSdh",
  "key32": "4decB3rSbQhESjCYA9kwsn1urzwzY29mWe6bdFNyQMmfTBjjUgoLc7dFr8htwVRtAvNeWcYF7CBok8d8r6QNqBZp",
  "key33": "4x4KhB19FYZq7qDUDNivhdo42wBoLwcSKgTsBXFrxq9LsSvoNyTVaXwfyHDP9wc4Cp41rXSkGp5uxGmtKhJNuscK",
  "key34": "4aAaLuBsjvD2bjsC7U78CT9Mimau2KPC1KXCLCFkfuW2ZZwBrNMtWPk229XtqmMaL4Xq6bb88ajYLxsANQgtzKcJ",
  "key35": "585dUizZjn8kEcexeZJhFPidjUsX6t7F1YxEGF4HzWDBnUVFVhVn1daniaqxVZcZd1e9RK5AQES6zcvfbLEKDENL",
  "key36": "5eoVPPnxJzs3NN5RA9iLzmyLUsq97HCQt6Mqu6fTJtvN8PP8mBy4v4ruKuqpXs6jbNqVCMRaYjgWSJ3dPLvWu5aS",
  "key37": "2MsERuVR2DMABRVm5EEL4Jdv56mfBuxvkjNZD5Gm1iVbp4T6wyNuTiX7pKyVgNfKSuLDmwLASvrecBBqfX3Mdnbd",
  "key38": "4hjvbtDfmzMaaAkQVNTswPMvrrohRL548L4x5jenMssxeyLp1Cc7yBZzZa23hRG5kQkDB5EmnvYPNxWWUMj583fQ",
  "key39": "4HcuAVnSi3RpomNo4UNzQUxoP5G3ZUF95KGy9B6CDKwSS77ybJTLysRMiG39ApJFv9bqLJHhKw721bKeAbPqdt84",
  "key40": "3crbBmLStfRGhixbAztc6qfYkv2RnCJAngiMR1FVBwXBnpWRovXRkC9jWTFc2k7WPrGfdWBHJ3WLqjzvUedFz8NX",
  "key41": "5QDuPYceeyDQSMmTvpGkMYi8M9mg3D5zW94oUnDpiZjorbNTDVXow746b1reT2wQ5pAUtAF7rNWeNGtVy1Ca7awY",
  "key42": "5hqMEPgiN7MmNttDpqCh4L4sGNntHsE8gvxuzHJsK2XFgp5ZydDo59gK27yJFinKe8PeN8Ay3GDRnBj2Ln2opbQ9",
  "key43": "5w1UNoGSyutegXGQB4GfDRP1zhUHL17VDraK6sQZQ4nRpKrEUiy2zL4LVq2313BGKqob9zfU5Wv8c5CJ3LPKjxFR",
  "key44": "BbeB2pKSSTTWoBVbnMHVNpYZbSRGkRiS3Dm3F8VKUxmujUsW4od3bJxcH8G9abo4LUpYrJR2oAVRioDvRYyHToF",
  "key45": "2udTA5uX9w6Bx7y82RB39aLL1JbWzro3jbDFtHUjbwMmmH19JynRSorBGkvqhNbi7HVkKQBdsuXxTnzsWYZMuPto",
  "key46": "46vnJMXR7cyRpxTpsYJcJnux8pyRvDXy5AoWeWKwocEfbuPebhZ9dE5i1HRqqE4Uv4DCLxoH4ficKpEzkFX9JKzn",
  "key47": "4dixXqTJUD1pCpsEaXeycVeTqagEzsJgvDV8BKQTfQPgYa84218HAD38sz6BMor1aZhNrLTMfUAesPKCgyDiG9Xo",
  "key48": "2hp8rqiMVgG7yQ1Yhzd14XpnJiBeBZN7T3ibZWMAFvLGHemzeGg8cADWzyFPTFr7ScjjLQmWx9qGGVrNnutiRAt1"
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
