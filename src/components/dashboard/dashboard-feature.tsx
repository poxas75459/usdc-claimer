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
    "4yjinieK88EzVSLvxgwnHoctVmMEC9wWUF2oRaH2gKBtFkPVZFCDrp3DgQLkfXNyyy7c7yZfDCBbgdQiJGVGhHEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MhMCDt2QfgHePFrqgqQ1gjcv2fbKRBmtLmU6khBfThghpPFtVy4F2PEGZzWGTL4uo1nrkjR5ZMpyEphi8HmYmxd",
  "key1": "5VmV77HuvbSxoYfchUTxWoTNyByzRJBFi6t4vDCUSADHQ99zmJUEthz4BRQynyuRvPgT3GfLUnKuF7jQPabBLbdh",
  "key2": "2bkSCx3JDc51Q1jGrF7KvsEzd3MixPsyHLGVQBQK3bso4juoDC6D12e1Jg2YoobcFtY83FJag81LTSum5jcDwrFp",
  "key3": "9YqLDcCuQ7E7Em9SQJBwQpbXoVJRwo8Pji2xxHyH26nKXr6e2BLQEy1bMbGdFFjn7aha5EaALrgnmJThtrdRR2A",
  "key4": "4ig7K1d4U5iRjP3gwBDu7mQ4bFh126chDnvTxkYURb97aYgHjeqYyTGmD26YaokAUVSbvbdEBeUueVKZdtN4FJaD",
  "key5": "41XVLVHiBPmKsBdxhE8H8JF4Uqh2Zqp7Y4dHkPo3tpNC3BHTNjqLqbPDefJ1HWJjsqEqwyZ8DFwBvhdu7HDC6xH3",
  "key6": "2aj2uH5TSPSbxx5Rsyi1xA7Mcut8D6o4EABJmmHoUSRtquN4h2sxWXeyWU3RAXBZV2dshsL6vHQEGHvHmFvJhxxd",
  "key7": "3f2F4pjDddGAm3LM1qo7GiZQNboReY8yfCoVVzn3thCAKdfj3tg4gSV5eRFgoR2zC8nVnmaPpp2mAgiDy7kXKwzq",
  "key8": "5nWfLocpVi1p4zR4oYp6EVJstZ2HkvK1xPNGaufskTxa5N6AZZv8c7uubgmx3GU2nxBy8SkJrT9KjdeYEpjHhtRf",
  "key9": "3e7bJy6CmsTfsSGGj6JbgoMc2ziuPFc5yu7E4bdgKwy3rdMSmfttt1rgTYe6bAvKHo7vLdBTnCLU8LiWC46XJ5w7",
  "key10": "5JzUeJzWAqLGkx4L5aD7izWBJWnkstT2uoBMHE3JKsYj7a1fnby8waonS5TB1Yhg4YuUY3XYnQhxUbhiZDNqD3t9",
  "key11": "2d4TXbbiXqvGcgbkioWyCNfYzuA89T3wC5HTbBDiQJgyHEJXrrHecimeB5nDgxBtWeyRW17GS6ceD5A5Kor9GLBh",
  "key12": "5GsdWCD755mp2tUd539zC1rjxLQ8mKCWGGWwz6W9jYssnqEs2pkM9DB7yDKrekppjE8Pi5Ep28vqLKMBdq1KZZyB",
  "key13": "n5mw6r6UDjMnCoZQ3TXHRWhhJMkAgQA4u3o45pSdTjDD6HsFs7HMpuUE6meFUeTWghnCoUTR56X1Q63f1dJzhFx",
  "key14": "ShRaFbfpBZy946PLWx491bEo2iQr9a1GAUZnPfA3Xo3ZGERqkrudUaMNgi1eo9Nak2SN7YZ1VnXpDYx6BNbCose",
  "key15": "4u1uBCNetS4hpvV6sFt51MJgZTRXoQBMLjdPMmszebTY9gbuyVbk8tFkxRLU9MHup3T6FycYP1YXxrBumnmUKKFr",
  "key16": "4dHG6nRnQc9caus2MFAsqg2dUuvbUwYCG7EzpjzBr1yEKqgUJassGZDvVSQx95SaXhsM8w72YZGwcPfafy7VjKsw",
  "key17": "5m9tZPx5ysoiKXPAozDxrUbu79khkrDyS4wki3YoYk48ySYCL1kGUkevgAqkkuJAkHmtsfaMUondrvV47xuk2oub",
  "key18": "3j8wWaC1yaYDdkPFcN62ZrT7rJTyAK3o2gLJ1DFesgL3Yz4H4avaLcMkrS4MwgWDwfuBYqNZbuVUKfyqfQbQ64ep",
  "key19": "3vJRMvmHaRmgrghh9DJx6nEEfdsnwv4TAgKbL1zxkJni2pocZLpN2WJ3SBGsbcop8Du1bRrhrAaUECuUYyyyWXte",
  "key20": "5zMSD3GM3YsCcMyPGjYz7JjhG8tWqgUWpZbWXMjH11gX8HfGh5FW5BfoS7grmjqUC63PAPD1Mv1Brn9kTEaQoRGN",
  "key21": "3VjySXCv3yZxG42hpPPRqDo5gVWQoVJKrfN5yhznAdQLerVgK3M7uCip4gcRSLj11eK5FnhCZEDUWSds6XwoHLFv",
  "key22": "44ePTj8jk2TuVYRGeU2AujggU3ocewpaHFY8TmvkYv6WGgCNAFLX65NmJtJpnXHXph4aXb5NVuNfL5bjb1ZRexCv",
  "key23": "4A6vmuVttg1839uMouDyu8YnFGmyYB94DgFciKa6Q7fzfNddjCCBmzeNC7uc3UH9AzBEq1SvET8PwDcitTJVETLC",
  "key24": "4UJSA16E9XytfRL3iSwYyf5ThXNbE6PBhisUDCaBQ7U8764NGXAmza9Ny1LJjfezFJ9qSkGNLGXLCY3y3SNNVDfh",
  "key25": "jKLFf6sYZaHCRnFEX5f3y2QrFp4xRhifasoQTuJ5pBiPYJHkdDtaDc1vTg6vgEfsrtEQ6wE4BEyhXP4XEBDoRLa",
  "key26": "3dLro6sh1GxDWd9BwSuLDQ4JBwjr9bbuiR29uMKdZ3dqRf1jdJupMCJ44jxAqq13UYzXa3CRMgQRWVicFe3X27Lp",
  "key27": "5ELQX2fDFhDca5CFnWVd8SiY1HH1RNkUsPDT4QCZh4C9kreYmktY6LD7yzwCwB7aYzPZNMJ5rHBx1jDQhQpjhGey",
  "key28": "638PJQjGDAUtyVC6Mv51AqxecqbNwUo9gCUca37WxW9nNYSF9mEFx2nGtwUe1NumVFVxLCeiRSXccurrYEL4LV5u",
  "key29": "3vedXNBQTR48Vx3C8Cuj2ekijAku6aaqfiTQmKXj95uwXFX7Lj61a11GHuwjUAPuxuGU4cUuxCgryrSLA2kvxTjM",
  "key30": "2PY2LiF1gwqn6aNP7SN5dtHZLqLuAipWwXD4WiYv6tTPRjGbJAeqLFyA6NS1udUhkGFKoertMs3987eenXB6zA46",
  "key31": "2axjUqVjYBaW6kYrFiycCy8du4KXRVDFjE8pXCCYSrN4tSx72TqaUZP9VJVo1DxHmmMJP3K21KTjzXsf4Yi1G8DC",
  "key32": "3R5qddKTzDZ4Yqx8ffLadR9W1mVQcCmhM4viHDnuGkFLjNrVSQEbgqrA56DbYZ25LGtLUg4jkKFHQBeUzj3KSwJ8",
  "key33": "4RCeKUTbTXyBvz5fXGWZ5BcFtCTAHuoresS74snUhHCaVQxnyLhm2v35QsjLQ1koYTscDiYiLEewVrYvxNjPgqxZ",
  "key34": "2zQ84hssVsy4Rd9PPYBLGnfqFK75291h6e2YQFyvdq4U4uLVbSBSG1cWxvfZq1c8nzdEEPCxRULTzA5EwMT3P3i8",
  "key35": "5w6CjWMSLKTG2nGuGXfbDz8ad1mu5dUjTJTgWMhcVZDLbt1jBQ9RWNnbcQquaf7qh674XgeyHG8NZ9A1Mg6CDazb",
  "key36": "4NkDZz5ZojbCaMWbNxRERdoqREoQXmVpxs8qgNwzAFWwuWauCLk6EAAQhUpUZQabhYPAR7oGQKXpNi7gpTibjn98",
  "key37": "2PGHXioLYbbf5fCc6TDp2rZk4TaQmz9pMRksru4kxDzPL3pVtv5NrGpx9YTHFWhBpZ1yxFWMezu4z36wh6DkR1jH",
  "key38": "5FeAB2oE4Sz5nYKiRFDQjMVJMSCpWcKDcSzM3ekZFEqwnmeJGVyBnPNDiSBPR4TcdEgD7LuHLiD9HdFBJc8MJars",
  "key39": "3zFi1VWVkRFEK3aP3GSSQGa9i9iWVAqfFq6ELUHb1w5hStYYbREQmjsv6oB1nhhybA1VSrmBXC8Jx35V39gdJj9X",
  "key40": "2yd7izKhFe3JswCq222CJPhhHTYA1bj42USP2qUghHkeEas8t4dNhpwU7kUtxRP6zjruU9EvRQeeqVvKbzLShYcF",
  "key41": "64c9em3exEM1SFaXz5fdk9S8P96dcgz2eqpkw6avBxhZaS48t5Sm3dTE76KRXaZmM2JyUjSSyNhYZXDELQjPfheD",
  "key42": "3mG7o3Eo5yRUEgoc26eKdchujkvuXRtF4EkR1q2hwRA9MuLEhsQPQow6osCj9CvCwQjtN6rUSQRmD6mARtGPFDbN",
  "key43": "5tzmSZ8tvgLnq8fh6JLqzQ1pKVRbUhaWgLyRqGex5ACua7vJEnigJTeG2MCDvT2itrMkpgQB6frKpeWaXvTKyAUe",
  "key44": "4hC1itxDbfJBz7ENFdUQcRxE4WsY3dSf2fgwJoepp9q9fLeiUuf3R3voiA2xpYvLppDNVqnT3dQabGGoz7hBJZMV",
  "key45": "5H3qfYmpGuY84EunrEyEbTQU2gRd1qudqYy1MTQypyJFJT17pCfVjJoRUwiib8NbaffwvYNKgMcJHSxD8wJRJH1s",
  "key46": "2YhXfveo7QU1wW4iCetMZ9vkrEMVu96atm42dtSAjvHDNDoBgcMCQMAqCY873YKwxhoHNz5CsvxNfwcy9cYFGhjn",
  "key47": "2H7JXKFsjepYP37XF8RT5oMSAhH8Ud7XtVUJys154QppD6cq422qWbWFmcuuKT73vXiK1X5hWGsDADtZrZwFzKup",
  "key48": "2CKDTAg4dJVs9tR68PuL1v8J2V7THwbVRf5Qe7QSJ6CpESxsCeibAiJGu1TfhawuEV5waTxurkU9hDC2sAwx16QK"
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
