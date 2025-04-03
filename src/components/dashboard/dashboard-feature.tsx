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
    "57xXTSLagzCXRsJpUaHWQ9nNg8VB1KtwvT9GRicTnLMcDs7DSzycygftRMFXkzNJgSPvA5nzyxS5ELiwSbmHiSoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BA2yaBuBgeAFzuFjDgJwKG7WzSYoaYvRF9Sc2z3VBPnuHzfhf1p5LQYPN8n24cNikeJCwpcZg3EcaYMGL6GACFm",
  "key1": "pnKu5eiNW8rKS1S7SG3mjHdWayk5xdybiSqnG6nTKSYN7SdPkfiMq18MiCzPc5DttXvbqPnTb1aJ9yF54nNpcSJ",
  "key2": "PzdXXDHR2JvSXQEY6waZ6hsxXUbtT2TyCMzRK7yeQx89YmvmTjZLvHuEVWuX1YE88Fi9VAbrGAFCV1Q5BuS6DsA",
  "key3": "4BfSZey7izFXCKqgDyauZMwuH1VzdPq26s4MF5A1wJSBnfwMoGipRDLCYB3B56uqjrr3DnvdoaAnHGp6V7vy2k2N",
  "key4": "3SiW9gb7GHFGieNfbwNp6qsmaYycQWHhUunKM4Uw1tHwte3dVEGidZrwsZo9jrP93drt7kWg9B9bucPiw39e6PhD",
  "key5": "4ugufqkJ8JQHfn3guBxoCB9P4hEonH5t7Tcgy23nq7rCPvDZYFr5v8c5z45REDyXoU1ckT6Xw17sgK6ZJqeaw5mS",
  "key6": "3anWRC3SLVsqSbjrkrSsSQutV5Nma3US7MWJyeE9n4UxmcDsXz8pGY81PiwFVVQXH7rZH3FsHk8GmiiomkdwdxFz",
  "key7": "HNPE44Z37DGTPWzvKRBgzQTYu2DgUUUNMmgwpsotJu3ZPGMjMfzMTLhQU4ConMwqb2iJ4NQZ1XrpQ6J9AESmevU",
  "key8": "2PWNtULAjHwLpKSGfuampHSTCoeNtogaXmYYA7idS8B3dv5w72y3KD8xTfJP6Z4S7St4mn9hzepspgDGzJnWwsrb",
  "key9": "67897DpFLzzP6R1rgeUgyKPHRCJCqm7fRJNyNUpBXm26FANsqF6bG1HrufWGeYVBLUmXfPF5MKNrBnDghbqeoAz2",
  "key10": "63AK8gJGJ5vDcyFciyBoDPth21DvvXjzyoYRGhjx9skR6zvmYGXu9mb5QAqKWG2QzhQrLk9Nrcm4pB43mdX1vjsE",
  "key11": "2M5HjxoxutontKj2AWaC4bqHvcKygehbLYrtBuSooguiGqVPyKABDGw1abbAA8QBxicZHwpVVEzWficAUdxcY7WM",
  "key12": "4k7UYDM7yQd6nyJx8AQrAirAHXCXutB9VznFRSRidCotT7rWJqLwHivNL1maP13Y1dsb28EZz3VeXaBAz5x7TTcq",
  "key13": "2oSXQ2T9fjo523XMAaCAMZTpgWmuh5evFL49R1825UAcKJ3qWjpbZLxKNmAtj3ywt6DnDrTbgsnnkJwdxcxPSvZx",
  "key14": "364eSPcny6Fs6PLHsw4PcEuQV7C1SVnPr5dJzYKhxSwtxqFJUQGSPNgeSynTdZSh59zKUSr7pipyinMFgi46iYcY",
  "key15": "4F9iuMM9J4mhBcpSF6rntRUK19E2HqPUxzJzJ1RrwQrtoXGeDWA5XdvqhurSAczpUVY1GJMAMdS4ddkiw5j4zxFr",
  "key16": "ee7FzkYPRaAktsjAkcCJWBCfsAAmuT4q78firh5XJCT4u7qJEDMRSvKgM7yQK5DHYfFV64VbdWUet1gZhLaGYwX",
  "key17": "2ZotHkC17uS8Lnx3c6MWXJ28aHnFtnx5AWLaALMFdrfsxjGY6Dk4raSmzvdiXbU7XXsWgyAL2Qu9Jt6eAej6inzd",
  "key18": "q5KYRaJoqnzxUgXBm25Ph3TV37KwoJdX6R4DBhv467DtiSiSK1UAqyKHwq3Yw3JVn6A4axbL9DFYfBMcJdCw8jj",
  "key19": "3e6s6tCppv2QtMUFtQctPTB5iWkFFiwPPc2bEP3qZxxH8pr6Rmr1bpKCELLMMpm3o595SRatfJBQUfJXMX1gZvPa",
  "key20": "r2ghDtb9QgWfUKU1GZL9hmSrEXWrkQNUUcmju4X9BCAi64mmTEppFghBAxnZ9MjbyGDRgUNs5QMmPaumdbkTEL3",
  "key21": "4CX3995Zgfe7ch96KtjcsDxUmaenuWuyeZN8oAZ2y7bmTGSnojN8VapPnnq7j6wvBSwcuBQq7b7H3YfCZ2LQ1Q1R",
  "key22": "4tpRpowHkAP1qan1L6SM5eCuKMNSqAxKDujdrdVQXHCJR9pNtAz3rrqpc7ohnnoJVzEieme2fyr95NYBYpxZqTtU",
  "key23": "w4XMoJG6EtvsS6YE122kDCrTbAU3fKVbEMyjfHk22nZM8KVrB3KsKtLZHg5vZDX4buULbpTtvnb9g2ugNPELqRy",
  "key24": "2RQBKFaHtiK2ShMDP6Ei4rv4mFf1WmpkzNSBipxHXHTLhtXsHiXnk8ob1bCNbZnZotbPQiBNmpvHstHQhxSJgHkj",
  "key25": "4kLbCdJ6KbwYrfxEJ7TMuMHKxtDpaoWrvHPUaPPQDzdkEWhgbi3z3P3Q8xXP8EvEasJPgxaukJoEEbBrNMHeYjNm",
  "key26": "4nDeLXBMa2ZaEQShjTEJd297hLa2jX1TzdLWSbgCZnP7bbCvQRP7ZeT74Wiqnf5WV2QvLZSPLebDyBPjTaJUvznn",
  "key27": "3xLkBZ1jaTzdAjkAQsT8ayybWeR1yHTkVHGzycn4Fey3qzPFFcC56e85gPywA78pjcDGrKSbHKN2pgScy9H1qKFj",
  "key28": "2eWSHT34tpQxnvdW1ypY8UT2XpnRffspP4RZXvf645mcYQvMJMMEVxdM9pyqjvtymahPhWYyCczKYQSrt5SeBaVC",
  "key29": "4b7vHRH7VSzSX7LjAffkDzcfKNNo1r8Hq553cyUExxWTcqpu8Z36sG7USzbvMvw2Y2CXiHRYRi1W3v8mYuDwE7db",
  "key30": "teNqkfnScbsvUTeF5Vjis5icbCb2d2YpGDdG1SiHzahiNYNHGZPDuYk6e7RwHVph9CsueNfApa3zj16LJbDhsko",
  "key31": "5PgxJ67MjPbNjNiWcuDu9hnstQ1dxgaxPJ4SQcPWqj3vb3dgxbfpBN71Wdaqgki1sHHMpRXEqT7EdqFKn4JPhnRa",
  "key32": "5z6KKL7xguqE7LJq6SK5VJGKkTnAH9mpAGCm6ePqV5dC6B4kjpZ3h5zSipS2RqgMnt9yA1Q88WgimfdUJAuxrmco",
  "key33": "3qeMhBHAwLTLzWW5bg6y5XpmzeYhDGWEMfj46nWCtbTPnQJkBKdDAktQQpnttpxF7VbFZqeixLnkrWtLZeyicUzk",
  "key34": "2aSFj58Huqs8bGU3D7Ge4VYZyGht9ai363SLaJ3VLV2jJ6kWTYufpdEx1DGojdkRc2Jgq25bxxvZXXBB1hctWoQb",
  "key35": "3Ko2u7BWoNUVbvpCowUj4RomkLR4vAt1NjFwUuXjpktf4SsC2Np6Zs12JYwWQYyebXNJ7wQn7n9ddZSA7GmoPdog",
  "key36": "5mmfB8mGFcNtcE8VkNEdR22xFiMADan9bjjBzuhXPF3ZEJTxhQhXAJKdb7kjitHDVyFgSCg4RxZLAyajc2zRnHgF",
  "key37": "48rjjY9YX77kskEPg2kahEL1HeDwpE9CBAq1RCd1282LzgfNvmjjXF2hSqvwSyu7jB6qVUeyso7j8yKuu51SHykL",
  "key38": "5Frys9KhsiQ82V1Lnvc8LjSPL91GP2M2MUhDJVpFgeR7XUr2izDwFzzeEQ168YDceML1d23z4F5XByq33Hkc6RnL",
  "key39": "5PfcV8cmP4ShzEDo6TR3xHBAbBYr95VQwop6f8Mew5XvWN77hDPzkgmqpyys9KxLgksGpRA3Fnjtib4vRx7Xhug3"
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
