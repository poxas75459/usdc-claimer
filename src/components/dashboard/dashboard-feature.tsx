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
    "6mCNvWQa6yVhRnodRZ5dhBj7gH8bFnkZfJiHWdMrFDuMxiV2RM1yKHLwaQmPQedMVLCdSaoz1tWeQueKKhfHhTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ML3vKxHCQeKMFeseXy2oVo8bj61DWZSvJyUBNiKykRXzgHVtVZaqCWi3skD3RWrRpotgDpKPtCZ5WPrkxSV6Tzn",
  "key1": "3NAbnVUqToRn6ifL3anNQJpqDBvbAq33trhM6huoZneXqwFwFL6iCq34gcUut1TCsSMvZRC7wnE5GrQwHgETEz5g",
  "key2": "3iXkcvnDdfJn8Hiwxd7FakdpgqipDGX2mM6niTyFbmayTu8uaA2gyRfYh5ue3H5hccRrvN4PWQ6kt4QAFY4WVBPC",
  "key3": "4RQP8nnrGqaVUPtCmnjoYUBrVBGGoxQhuQ8RS9Z4u9eZDdwdLDsfvJMyyvamVqj4zoQ6Y25XVLT6UKA7M3CqQpR",
  "key4": "p4UFBxPbVDSB6xaQjasmfgSxH88jus4RrvHaATuVVgcWrQak5JWXW4BNBGpKkeXkBat44EzHLuWHdhr1zVgTwdV",
  "key5": "GtvC5m5PzfYDJX6ssaRnZWYHSuEHpdEEF4njQ17vyRwPhU6doy8xhn9zwGHZEkbi3Q3tsgvP4s7XCa5THX4ynwv",
  "key6": "4HaznrZeJf8NyqEDeXBQ7GxFeQHnmiQejR1tmQQSiNpGAkvxSekxuHH5YTorYre21utLg9TcxQTVZ4DUUyPBfzCz",
  "key7": "5oarL5NcG3HejjX6YzTpWSJ4Tf8RXMoHUxrrNKPZcrb3qJrNyLgnWyKwMooMQdW5FDtemQh5sNrnj1FceoFoEKwF",
  "key8": "2iKm5xjDZQXoVPcR4t4kXWnovx5q7DBtYCczwVrfhJysJkCtgDmktRAH2RAM3Tn6hcUuEY5ua55G4eMHbsJpC8bA",
  "key9": "246J6YorvPxTfRcZqewfWSZaHXbgTiBHS6S3dYkt9i6eMsZ4RpYF9sJdnQjSJDLer36AYnWDB1SEAqVTPjojhpLx",
  "key10": "2fvASQ61BGLU2ZgrwbNNDFabhx1mXHbJi7V7dz263vciq5cLnX8s4aPLxVFCM9QgVUbWBZHdXLWQBjXfvbT4QLjx",
  "key11": "MQkJXeQ2w4zUDv9h94qgndMpKFwFTcstE67H4B6sLXdEFXFwLCwxYdDzKyFUxZazjTHo2JCwW352P8At3r222ak",
  "key12": "2rzCqdfLTEo6zeuBjru656Mgwzkgj1KbqYiAGVG8UKnvTcs9xkwqNguKRtDnck2FA9PN2w3P4to3hvd4cSa1aQyj",
  "key13": "gZgbF4xaUeYdvgpYj7F7XiTeg3GHLgfMQtAu7zp8MFEx8y7BFBoNNKrP384NrKSrg5DmyxQVWLznGee9JAn3Qx7",
  "key14": "5MmNsGyxgE3VPCAEcd3XmPgRx68ANJERzGYV5iDuTEPLtZThsfQQnoWrjdCJ7RNh4vbr4e5oPUBkgn6VZBtBrufz",
  "key15": "5eG6hVnKFhH4M3frKPsMkRM5NpXi32yxWxyc26ecxD6uwSp7ByKCvY69XfZu9qpxgFmiD8YuJrxttmuS7omR3VVY",
  "key16": "5ZS7H3xLWXSvLLqtAcJfHuWwRy1za6kqDbEPSx1ZyTxQMqjy13gXKnf5gbY3nZ2KVUDQV7n9ZF1hNDjvrt6jDfUM",
  "key17": "4KdkssZnD2V3AkyrQAdrmRBfTxNq6pH6R7wfU7XLkKaA6dLrBVdtpFn7D5Jdr6KsEwvZrcCVWYJ7mRF5Bx3xbybF",
  "key18": "3LejGUphxRtSTLLZwyBb7ATAfw4CDc4aN4dVrMXTfaKHrcXhkjDv95nnUpiqgmeUhrRTEMZetMdSi2f9QEyYXiwb",
  "key19": "43qMBgzi5V2Y5uGpZKJNskNH9BEthFSRSNxioUWP8iy3H61NFN5ASiCe2rgHYGhB4nmjXJ7ZgYE9xQWQ34uJPsoJ",
  "key20": "26CVtSFEyf9yH3Byp37XPKHxyFb3cNbaokPdCWWMDXivsCNszfQk9MfcG2TPjG7QNF1J5uDzeR7uiD98DdxoRpK2",
  "key21": "pEL3xKg9W1SS4cLc7AV76db67B3mhCMSXFm4b1sUffemWutKdDDkVeWs2ehnZreTcYtgUDtPyESanp6kMbxXYQ6",
  "key22": "4t5ma32aBUQttKK7hq27L96HDPvx33zWj5tRzPCPrxUi1WVNqVz3eDKeXWSVhdj9GkU12NenpJoHT2HpwJbFQcBS",
  "key23": "2bqdzsf9wnrS1afs7pyEGRKn65QeALmTTYqweQxFJXGdtphGzWbV7dcRuVX2sTYcFfitJLwsRHkcW85gD1rnnQ54",
  "key24": "3XgpdeVxLr4tXEDpkoXNM3f9cB2x6eMxtRbFaNa3eE6Qws2TbMxt3uy4HUHC1VqPQf7Bv7pZJy6p8dUeJvAKPruc",
  "key25": "3Gi6vm2tTUADE2yWAsw9M5bV7Vp9JaY8n28j3M99mbqp6dvPYYHwU27hXyAdvxFYQnsWWqAkx7wSjCt4Eem8mdrd",
  "key26": "2ryAwidXnWfdJjM82PjsYkpHkc1HYBhPqu1eaFozsRou3FjpXpUFDLV19yA5Y1yBSm3c271Pki7ib48kC4NonNRh",
  "key27": "2HA2Er3Fh4EQsTvQUy737bsumbp1WUGUXmW1h7TuMPDeaxuemiekxj3NSFJpEk8F8s1YES4NnWvE76LucjMwtwgc",
  "key28": "U7wTgpPxz5QeNGNTzJo1WVqURUUA1kC6fqAA32XXjjoUxWtvLK1JBDXqti3yW8uFHMXGKGzrE6KRZvmjqRHzJyY",
  "key29": "4iKyqvKy4y1NNQYruzL2MnpC4XZoHfGo66q93sQzNAYFmBBHd4Twyqq9VCp3n8CjNTGkzQPFwdS27QA1K4f7o55i",
  "key30": "4QM5PaC99qWUqmNpSUHkq2STAQyjp4n9j96PynZkkAg9E5YuRh5EgxuqYF5BEcdhbxSjSJwVTCYjXSczcCGTnhAB",
  "key31": "tVMcUTJEoLF2tC17PxoVvJab6mvGzWxbKfyJpz5hJi1DGBngovkcHvPSsQFE8MhWqEJgbrBe6zNagd4WgXjUuvW",
  "key32": "2qoLb4C2aqmLr5qiHNm4v9SVUFs4m2vVMtdMmizrUVw88GaDLj2UxhweSTLvETsBBd6NgFjpcbToEY9Pw56a2mH7",
  "key33": "3cv6cKLy2bCcWDpJckSYbwrvMtVbnqSfP9NdHksi8xAL6tjdGETNgZDML6bAGdpXkWX5kXdw24vXJ9GgR9d7j7AZ",
  "key34": "2ZCpiedktdr1iAfZyey3gqxCE17KYQ97a7xxvJzfMr4VfY1iPc16749gLHErrjYrUhq9UPFdmdL2kyvv4YjytrWq",
  "key35": "jHacWqeGVxZNLCh3LF9g9BaighMvXYKKdFwbFtHqCF74it1cj12Z3K2ksSXtTU15oMra3nfvEwzEo15Q6N91hFv",
  "key36": "5TXhxKYRZCg2MjuNrGfmDMjJiaTUF7qeixgVuGei6BpkYwwnHZ6vNg4vS9qynYRrJ2UGKXtaeYJGKbyq6gcdt6nF",
  "key37": "2qtJijbDa1obGXZQkMJ9k3sXgDuWAUKEHvCrXpQRQweqb7pfn3oN5sKbGmkxapQH6jYvmm9CnsGTERWpyRo9nAWR",
  "key38": "4GDjS2oH28msCP6Fgrw6QExxY8AhiFWnG5eFTyunyh1RKuUg6M7iBZd9gXZTkJQDBYGj6zphbNCE1E6sAdhUUVRM",
  "key39": "5ZHU3HsVAbWpHq23qTdrKJaqQjaGRD3qS2EQbJr5Db8SEMH7hvXSeRmNiRvueQ9ekPqvGXyCryEgQzkNVtJsHFi4",
  "key40": "4S4AAdcnBvAnN8CjT55PxRRXKgby6na5hVrSe2m2tJXq1e7kfx8SuoDCvNsikigsjcnFVubza1c1BvY3pq7yKY83",
  "key41": "4HDmQvgXeAhN2vn5TM6EXsGWzkca2nt7tpUTQQbikwVwhNURo6hm5YgtVG8eDvm8EDpkuk35prfZd3P7mtEg7VoN",
  "key42": "6PEN55gZU6s9whXBZhd6ioc2ssuJ5r1AvQGFoZ2t1seUdN24yhsCgn4z5XGUQ71tuWtorCxg7R4GCfUoKYXD8dR",
  "key43": "63AExMQYx5kVgJRavtKpS3JBS35XKpj6LKoytW5Ls1EjhEXZNYpEE8aZqyW9QoToetp2DQqY8uRcYN5acWjWDkKV",
  "key44": "3TQWsjDTZchY9d2rERM798tFXbePFw5H26GeTfVh7eoD41BenXLLekBM5zrpS4EgcpC4DaFEDHtGE23jwVoQzQCH",
  "key45": "4aD7GraXSDZtmU32W6WKZ4vGbJhMg78cqoHX7BnEqSX5QjB24udVJNVTLAthwTN62vWM4wrhsEuyuHyH4UHf5paF",
  "key46": "33A1izabQvBoN961tkk6mnwcBtJ19f39Xx1EQDhzynmPNgYz8ECBMfWTXDFSN3bBvBKcee9o9YCEhDqPkbTEApjH",
  "key47": "3orAPDmkRYaDVZWp4iRXrpJnEnqbaaNsTPD5KroYDkWQL3ywyhK23LqwBUwVzFQFk8FoUE3uC1JpxR8w3ByDwXyb",
  "key48": "y7j9ZJqEe5ZqwJyw9dt62ErKGPYNyS1f6Crsh3wSdys4SGu8JgsH9t8K1kn89czAvtoqjgpduQw52YejUeL11oX"
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
