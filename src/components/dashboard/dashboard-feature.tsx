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
    "2YojUy54P7eKkhfQtpwnc1EW95ouYVRHkq997BeLBCyGvbs9QJHb2tHYDrSiXqur4X3UyhGdbHiBt87CuMzXms8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhx7TdjGSMfgqrQHNrPpJCvbp9pHikCBt7M5ssP6rn55y3D3HKxJeWSPaHz1YQDfvdhrnyUAeJD4uhZgWWDu3ba",
  "key1": "5vm65Ce8asmyatabXcEmFJuxjBXHM5tW38azYAKsb3i1aWPUcUKcRkgbyodYVgnFRgNNUXzGqfpKwHdp3JcL25oq",
  "key2": "FQ1GYUFdMQZmxw1HUWWaJsP4z5pCNt6otJJguv1MZAPuxGrCjnt8cHEgcDD8ZCKBpZs7HrtxGc4zvhfXgyAxE8w",
  "key3": "2xWELx7fgTsefyac4pcUzUH5hwr3t7XfPfWHC2NpiMKwkvFRppTxumFt9rpgJem1ct8ALLfH3uMdWfcJa8isTVa",
  "key4": "4Q7MCxBA7NrupTswdEQQDd4itFxSK6vvxHjgQuy7GhuiMJQ5oSBTYgTn2PPg641xsi9rZjYzFx6s6rWERqm9zy6p",
  "key5": "4c34GMtzXwkWnpg5VwxcZGbWccXiFXkX13rwf1fmP1y1woGd7xC7MdoEmsd3ECvR6XT4yu18rubQfEZgb3iJhj6E",
  "key6": "48esn8b9US7acWfgS3wi3X87QNSgMwf6dpHKxyabp3s2Hfv8J9nHLwQD8JLeQbyzEEaoTYYwgo76T1H1NBG9ojbb",
  "key7": "hFmrqRCoSqJFWFr2SKrjH4M8sojomDumJ7bNJdfHpWNPsbsReo7SUTxFBTjnqVdRKAhcwCXYp53i3G62MmURmzq",
  "key8": "6tvw7WE5uxBfYZoPiLPhnzZQ67KyJLuiyFzy4VFjZJSwyjPUKKaqpVymTiWYnFj3VNmq8KYmdTXtj3s5WsB4y7X",
  "key9": "5V3eiTbFB1ufLbkyougUWidgXn1P3vv1m5QkMgijnMygwkWFZiQ98Jq6NGBLNgE6QEpBVUUTYagNtknPYZEDdCuv",
  "key10": "3H7g45c56nshMQ5FuEKnHxGeHvivDLg7DoaaBbQzae9M65xvqwoNdosXh9vSPuaUhTmTJ9i36yrCZVnnmKJZ33Kz",
  "key11": "gjHUPkz1bUQhZzJdmpEmjnmvuHUuumjY7gnXbMCZr9NwcjGT35FBZvaQiHgzZe1p3QB2pGxoCZvXsdSN1WxgvhS",
  "key12": "4uR6szWtatNzabia5TEMWdmjaiLFqP94r8jz8VBS794uki23j8L8r7csWfFjguAuZHrejc8RMy71XRofgKjGKN7d",
  "key13": "AgL6hFJFxDNYFFyutvf8vXCaMqqH7pQp5oiRWjxhFBzRfHoMQiWd4HYo5FdmtJVrWcQi2k7Rcqa9U7n9PBNwdkD",
  "key14": "5SraQ8Uq8qZLKdV172dWvc4xQM1FWBr46aXuoDyx8ZrKJAyPMBCbh7npqEpvQBmJopGjvB13eKzGmLfN21HLzVGS",
  "key15": "2vE9idwLTbi1FYnZESLAiyHmexaJkFrYv14eG2VnLz4bH1LNyhEV7eMC2qjXCTgrG52Gj7qDraaMVGagwPEUrhRz",
  "key16": "5m6vQvVyaajQg7uhwnPsjtGz34Sfwx1LY62zHBSAyFpmYrvPu9pbj8c2XaLgSK6GkYqusvbXxWPog33yWZcaAvwY",
  "key17": "5j8SGNQYe2fNqzvGDYN9gKnma5NhA9VD5aQ4L1kiszn6Mmrr7WJci12hDxrE1ZZcHAoR2vBiMk991kszHE8GvK56",
  "key18": "2N94F3n8wmqJwX7Gjbc2QXzufaYvKuZaDnpyJ9ioR7QgqnTRUGcsnL2kWENi1gWcbQ5Z5uBmWSmjw9Accn1fXCwL",
  "key19": "2Pf4YKxP4EXxHJvBcEcQeq2rnKnC243wnaka1QLVYt8VjpRudDSY5R32YUY2SqYmtfi5o5foeYyFniyMdmCkVLAb",
  "key20": "5mooc6KUosbNRw6TmfYUkSU66YrUZPgVEaJ9fgK35cseXBCFHzLMmtjLvCopBcqwWm44ZgUGzz1W9YAUK1LFHj98",
  "key21": "5uXaQNXeA7j1u7UPdLTU4T4ByeUr6Sw9U6bsZm3xkxNhPejmNfV3rNpjnwMwZbV7kcKpT8VTEB61iUew3DC1JzGA",
  "key22": "2GLfWLfUNyqfN44owXjU8VK62eLoonQnvzvgPs5LET8gfkvNhB7ArCL8DcAzakhSj42MfpjT1Ki5RVmwRQmVvMDp",
  "key23": "nAJ9ck3suBE7XLW89gk5cDrZG2NBd3npwvCUcie6mXdYBe8f6A2tmVBchfG146rZNswp61kCumW9iydkcfaRLdu",
  "key24": "5vDjyU2Ye3T3rMwLJytTSKdxtCpT7sx5su1HxwJTaCET3bZWjTKLo2vmRaMz2zMjsDN3qSVPCKUcdLUxS34DWEyN",
  "key25": "2giBD3y1URF5hawabgZn4cJUuwSqZaESFzinVrLF3FxM9qrvbKZrM1worHKNmGHBRfMzsR8dFGAP2au31dNDu7et",
  "key26": "RFstdHBd5TD9GzHRHH7gcmjQS3u8koAmu5oMmqSZwyrvwkhSHcW4HvEfhxT6KJtJobysXPHFdhAe6wmycPXULqU",
  "key27": "v5dU4VSXzgGLy3FkYY9uzR9Reb2G8E89p2HaTk6GTokiEFTuhpMdjDNTPMdMrMDsQyM27JtF2J5v7J43hwTGsT4",
  "key28": "583AHMjCi7uYpsNmuoN8THWvdtio9nadgvvdFFhiiJYcHXErS4V93Z6chwW2vvP8q1f9LmXAaTpaxPUmZDcNpAUG",
  "key29": "4DLiYUFbjSHq7UiJnxiGQxFZRwFNmWSXV2NDrkkHWmdQepv4FmFaLg1ESkymZNuUUXhSmSZCFYH4oCN8XN96RXP8",
  "key30": "4aa4HK52PPf2L1TqM24vr8DYpwNsFkjqBnNVrFkatKyuwRyQGjAqtRPvV99SJpePSpp3mBUEzTEfv152wnwCnSjY",
  "key31": "1vRFDHEQ5GZSX2QtZs66FyG673fGDrHjN5K3CQ48LGtUocbnLhpX9oJtaTnjE1WWFVLeuLsau7gCquKD4cbVybZ",
  "key32": "4K9D2GjBazX8bns7GAT867kNbtEjZv3A17rvD5J5KXGEr4DKpy4tCXqwA1gpzkwyG966by35ZNG7SXgeT9Fwqz67",
  "key33": "3U6DD4XY2rSBGrnqdNNfKL9L4aSM1gPX2HhzfU2F9TLe8Gn8vgkhGAYkjNuxVNt5SWwgwqrH2Xx7knHjLhJhwywP",
  "key34": "2cEzJk3ggzAh7nm1f9dSbNDbSQ5v6u6AqG1uFAtcygqU5Hi6HimMQXs1QAivCVCBR6St2SNAyhz6hKyJkPgyLFNe",
  "key35": "uTq5woCxt35jVZ2XCDbD4gugSYxisw3WGkseeaJftb1Cd6EX5wQyehLfQWGbbrs2VhfjL4skSMnL6u1ztsAA3GD",
  "key36": "63qVMZw5brPrLL9zukYkQ8PhJnWMxgBgjZGWg8DpcXd1NmiRJQXNnm9XYzbYDnRDeLGc38FD85WL381KoLxPZjL5",
  "key37": "22Y9Z4NdsGhmPRwwx3852bX8dtvAWZFBko4a1YWGKMaK4jyhLn1o9J3zB66dCbifh7eqPoZf5WHEJj8JwHKpSM28",
  "key38": "4YjUUTM69bppSBhRYnoTggSwGgVnpj4V1irwakgDo8VzFEFKaE5YMa1M1d4Z4mMuT2eXmG8uF1Ji7sEfgfannzAJ",
  "key39": "61uUKS7xPD7umn4Juzy3d3b1bWpPLHVKbraHXiRRsDZp3MmxAxKJ4MqJYFNs7kYexFiaFetScpztxFxE6N95bmiA",
  "key40": "47ZhANKpmFjGkSp1upyuLka3PbvZvfLDBt3w4oY8HbdHm6aF283WfQAnRM1XXwMaX67ThnDHFHycU2WnAu5s9ctY",
  "key41": "ZZaDruzEYXuFSbYwVxZkhKiH3vEtmMKB2XbQj14ZdbFWhC7QoaNqdT3NRxGh7p9MJvUeK5B9nTBHfxuNjZadwds",
  "key42": "BWakw7ApMmLiUzjMC3eWysaz5gwzXhXCAjWvUcJzUcrSrYkV2wzpG6wuXDQSgj8v283ik5eNFmE1cdzH7KgKmDj",
  "key43": "4Gpj6snPxBT8ZVa6r94ADcgGgJTVCNbo5viszeMgnS6eHWTDwuWT2bvbLur1UmJYcDd53HLSCq4WCmgdvX6FmWDx",
  "key44": "5ABVdb2Yw13gsPm3zH3PXH82Xx9GJsSz49Gi6Lg8EP9dGEc5oU1czRq96NsMbvEeq1rL438JHNsb7iAqRJV6Uxvs",
  "key45": "3F9WiZym8acbUQk5yLjokkfDpR5burRzugbaavBtx7FqzNoaKqiTQgeUyWSV4PNWH9C1qDrHqxbtWU1pqtU7FBGN",
  "key46": "4SNg7U6cZRpp3uUcTjgu3xmP5hNZYz8YQAFb5TFpx25Ugh1pgJ95oAN6roNgLs34Jz2NcNQQNsZdYCC7utzFQ5mi",
  "key47": "QaLVFvJyEBZVP4t1QtsLBLgpg1PakncADWgmQt7SHCt7dXbzNDu31hrkGVqZvYqGQwq32EHWKmo2Lawe6TvpUPY"
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
