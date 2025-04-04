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
    "3nnoTs2SqtFqNns1HVxjanau1nqq1BK7yPvwAcGKiHWU8urnQqq7HmSZMag3PqLXjwnQee9zrQRKh2yYakkpjYJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzBtikhCLnc7CC2P52uSMXf3kWW61u2ofHTFrgXx1Ptr9FEZSMcXtiZzeQ1CsvU7J2YCxVtCiubiBHvQ6AWZfFL",
  "key1": "3iMos9hMRyEao5CMUPovggkB5MYxgRfR1aZbfgJYbBJqGHLypgqEhxnmBFP4UtAPnDxyjsnrUeRpKZfXNNVW65QP",
  "key2": "3t9FCP39o47SBqXJtkouX1cwohJ2Ze6PaRgixYkaMAU8jiAFhigqwdLQhw1tWHkao6iSUyMdK1R6WCpqFm9REahc",
  "key3": "5DpAEpJg5USQV8fYqTT5ArxqFng9AAseoSKqYjmL8b2gDuiNdL42ohmNXgceEFnz5yaengS7Y8rf4Z7j4sskuKfd",
  "key4": "541yXskh5tn4R9sbxVE279h8Bgok6jHTHyfUMkkzoSDEhDKkjwfb869E262T6S5QiK3s7Pf5bV1JZPkXi9oyohSa",
  "key5": "4TZbQcwWTFPf4aY32Fi3wGDHUc7X7BfJABX8wottwajW3RyBn6NCpUTP7arnkN2HYh5hpKNThqeMy7YFU7LJFkEg",
  "key6": "4GnBofyyN9CDh5C99camdT36z6g4bfDxBV7iunWQS1vNrSLYCpq7huZWjxfFvXgDVJ6igUXr2h7x3XecwtU752NW",
  "key7": "CQn7PAjNfuT3wshPsQFLZ3Vi9jJ2kKu1Ak9p1yikf8kX8FAry9z553Geu3mFJiXCj84HmRJXcRCKymxqp2kgNch",
  "key8": "4q2FZmvZxuUuFnLqcMsMPUrQGzZ5gUBs9pr9zXJMuab9SQD4xBwyjXXkrFaSejhC5aLa2FV2RQ9RVPKnFcLBaTeU",
  "key9": "46iX4tJhkFeXBdDFu3wUFRGVcXqpbCb6HiRtt1yW8ShUsazgsJxEGypaVbfu8DWH2yLQYPWhWazGaXpkSENnvHPs",
  "key10": "2r6RwhFK5av9J9hHLtYcHSWePR21kaFauzqR9Eju8WBMpzMPS7u2NX3Hh4bJi5b1U7vh3tw8S1hNtMRYZvd8yx3N",
  "key11": "2aARFUcvTPdUUQoCLntdKGFJ2KMSfBDCGVj2aEyJMNNBCun2sFqcf3Cdua9bJakzpB9NuCxc84WmmfM4EnzSSrEv",
  "key12": "3gpc6LLyAWxGsiQpeFJUz65kWnQwa8Zq5UvyBbmStWEPJuNausWAQ1navSU92jA35HD7TmzxokjswgcNJ13yXio3",
  "key13": "3TgtoFhG7KMCAYswxTxTeWDq14gW4Sw2mSKUGUh2B6Gu53faJAkfLnCAUwPrJ622drYrD1PvoHjhQq4qKMBtJN9z",
  "key14": "k2gEhMhHQ7nMx8ZZowYaxZKyFogAHHD2b8PcHjXiXiLYyV4v5e4ys1M5MDsR2cbSwQGMvjXV4E1zB74HBAHUBDY",
  "key15": "3mrvfMCXQ2qfNaPdFWxuvMy7GNiKnPQM4oNmmsQXxHwkpdT2kVdRW73Nnqr5gjaHqi8D4q3xyVmPAtf5rNxYmxBT",
  "key16": "2yHGT7pfAeTo7NqD5DtK9ySbYBsTvZKMu5wszXabEgFUarLnMvD4jjcUptZSnsoJhYARL8LsPCBNJzEX1yk3bTXv",
  "key17": "4yeXdj3AmhT6f5Yx4nff7SV6RYAv1Mw1T734XpgE7gA6zzPkkFEe9EXaa47a8m2uHCuU2JwiHYcmmJjibCpynXAC",
  "key18": "2PQyx7Mt7Fvg21sxhgDLnpwB8D9bkQArVJX8wE2btCyo5SvqFTwShBntyKX8YJX17mFk1r6xows64fXwY5Ejd9gk",
  "key19": "3T57o1DNbEvcUioqXvLfFEFvEofmoNCdoEFhiPzWyTbYrQew3kA4S6GcJ3gLc3tuBTEqAwETnZgPsd8svQGPWrD6",
  "key20": "4VobvNJYVJ9Dd7shznxDdnPZtTuaykJFm1LvGhh63ocoL97ghrwqsLa2QQnbctR8Yg274bW8aabURSSjK3Ece4vp",
  "key21": "3nVyLRX42aFMCjcnKLJJnxr54jeqPhceekfoKwaz4zMY7F7aWaR4jBNmZ3aQVfi2V4iap4ErYbjVAZKKACS5RQUY",
  "key22": "3awHKF23ZuXio7h92KGoL9yPTnbBjpQKUsBiQkafuMx8H2fzFiekFh3bMdddE9EGFys5t5ghVKdgkGHJExV7stwZ",
  "key23": "2qvr91hM85bzB8gMZVnT12FY4kkFPnhfyzkiHSQjcBALLyCqWjp17AQu51UyAfSXfir3NDwMZtuaU42FUWUDWWrP",
  "key24": "4jtiDc6WyBYt5dnW2V529xSTzXcqvomqzGxXY6RCsiPjGabq3J5rrkCD7o2U52yPTFmubHmh6Nx7ez8N3dBYf5TU",
  "key25": "58HRxinf4W1TkMQ8URanGm1tia3fdUhS41zj7iqMBjHGbPajL83RicRGaAPhrysTbmx7FRUKzqr4nbNqyhNabGW",
  "key26": "TUFHnP2KDbAifdxpSZNeCJ1B5wVn7kmE1UWhdq5hXDwDTk1qnBo3kn4D41e4By5F2aDNp3Y7yW8inqyqt9XGErG",
  "key27": "SDoU5oJsNFK7rKehCEdCa4EE4J9NprVoN46YunkwPVuLTsiwmCeuptNnAkVJcZbhkBkYesELDuEgtG7WieYQPhh",
  "key28": "3PzsU7bMGBuTKU5LNKjJHAMdj9QxHezqadaUDfEJubjUNqaAZStXa5kTUXErKZBzwF6P7vAk2AkWyQ9tAau2edFC",
  "key29": "3kSRzonUBWnGQw6xJNr8if6VCmwe6NHDd3Gafz2NeJ86L2j3LfnTm6UHmxpT8PFbEQJjrzF9ZqdwpHSMqVMatFTF",
  "key30": "2nFkqepyMJ3cAh6JjGgAKPJwVbNrzxZ5uyD7MBi7hKrFJA8jxVSCcjxX9SWwYPt7QGWjqkcTqVCo6zaCnqycGLCe",
  "key31": "4svnBJMaUAU4WbU9WgPzB9SgbneJRezY2dLA7uo2B8GZqo93Zf74YeWNe57AcN8uemRrze8dFAmYSmpv8R7ZPewc",
  "key32": "4wTGC8dNDWQVfuyiw45R8nJKkfmeP3j9wAoXcJSG6PRD6ntG8yjkXChf5UQie8Z8C65UzxYXd6w7ctBGRTdJEn1D",
  "key33": "3qdepN3S24XdtHsjgDFa39JoRaXYH7o2k2rxWMgrHakSm6Gbh5URHspFkbT7sDbMrhjDhEszu7PjLnGuiWbVxDyE",
  "key34": "bsGmgn9iodwQx39o8X5gqLeuKnmywYj1Gu8CmMBrrktxWMVmXxYgmi9ioDGytQLLMeNdGBusVB1fhQPh7vWz6kc",
  "key35": "2ffvXSHBGYUE88CPCYBad3bnVDVqMHA7eFRHP8hWGvoKo3pVm4Uo9RbvsAZh5kc3G5nVhufcuP2MdGhxVLJaXKYj",
  "key36": "2chkXbmtrJAgWwDbLghWDyaRmzk9T1ZF5pC1A5v1PifZ2nNboAyMvWfnTKketnqzrCNVniTfXoAJnCZfm8QVSsGT",
  "key37": "2mJ74ZdMxALhS9ZVfJjm7QbHJqyHPKXLtMtznBAk3Y2Rnx1YryWtP61zz9EwVbfq9HSi9K6PGFrUTJeqgR4nGRyt",
  "key38": "2CinR48a9kkFo9wGsyxSiNWYSj4NPGqg2Y57pDXFfrN5NqrvrDEDqPvsCKC4PNwDXw1noi3G1T7By8AgqriVNRhL",
  "key39": "34YFn1Qa2mTCkCtPso1PE1dvpx6G5eA5fS9RQFeQhFodgmHZQs4jHmNvRFQLSaVXqZLQUvANDTZRA2S7Z2kpkpTn",
  "key40": "3LvXD6VyrwZT6rkM6vrcCg9YqgaWSHTBNznTJrrZ7qMj88kZkDxgzhdu1YndPkx4us9hNvEXJ4g2vC8qHgxTQxpr",
  "key41": "2KbbCBD2SD3oWZGTH6P25Bf52jfS9oBgJCiJTZ2giEYSDRs2RbBeWzmGn3g2xkHJfnL9yDTuNFt42UZ7TRKrAcTK",
  "key42": "4jS6yCmDeRKB6XSHhPNpCfqPqd46e4JXfe35U6Q7tSjz9GAkeTX6Vppt7F4AMxSm1AexCopwrK2Gp6ijK9uvQhR5",
  "key43": "5DqpA1kamEWgvpHFxU97kcGAg8gnd7Rww1mtqDFUw5LtfEhq4qy5aXv2hpxZmP27hDDooJWHMhs87ShWM9RrWbjp",
  "key44": "4gXFnB3WGvrM1M8Z4EPvJczwB5kqZnWfLkHeRiLX7GBSsMX5VcHxNT43dCKMv4UMBwMVHPnq1eJx7h8GnwS9rhLn",
  "key45": "pWrfr5zTbajUiNuQuEUD439NjomFbr7yPVgiHP7scXgZ2cTHE5oHHrtQhS8Q7e1573L4Br8tJXpaeMYPjp58gGq",
  "key46": "4XYGcyJktbTNsksqsPNQU6JaxGtFkMv9DpXSgRBwiGgBkUAQr9C5Wbd2D6dVsV7UTsw5BVvHMs7Wsz67UC7tjBAR",
  "key47": "3PvtFfqmJUkv4SSQvg827epTeLwCk9zZ5H5y9azFCj9QVVXcPdsabAQAzLRam9Gt4YsxD4TxexvYYWJ7xggjtAd6"
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
