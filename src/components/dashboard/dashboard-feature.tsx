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
    "4GZn18fpJjoZjARL1vQCzm8LkdL9hdvmGuzoeAN2k7eEsa2AhKVr3GGnBYAJxhY1CwAA2A768NbK1LT8UiyU6fVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77dwcTSgMXngtMXoN5a4YUFbYyGdaB7dhggZ5Hqp5wDGuPpNSumKwru48sWPSt5KDWAApy9Ea3rAwEJCuTdoXvH",
  "key1": "2tphafW2Yks8b4Sogxg1ZpYHri2Kp36eBiVBLhZ6yVdH8cshi1gDsdj7t81CwdNDi4pQbpqadA2o59Qf9kpYPDtK",
  "key2": "3W2ELUWgRNGnjWNat93eKLMFAKSH4m7EBgh6yMBJ87TX9Mh2pgeHaHJFTKCn9PyNmFZbV8jUXp5FDPycXYphUJ9t",
  "key3": "2Bjwh3pXZtHtcbiktEzNTCWHgc2R62M6H3XW9oGEYBARQvtYjK3GSDWHRLYQ9aAFKcUyDoG8MkTkqcF9QXU7nXYp",
  "key4": "4HWa76cFNWabAdLZ7nw4Rrk8tAygUJwc9eguteEMXHKngEMyJzRRyNidfv7JMcbZvcXLtcayFqHHGY7UR6xFeuBS",
  "key5": "hMHjb4JGhNgJ5jKAMgAbkHvi3TtyNEh5rUCC8eUtLYNJLsRybTCmzZVjjDpzsbyhWm2EMN8BUqgckwb5FTVsRnU",
  "key6": "2DCdy8YHgYjcXHA2McnESKTwtRtWMZ6yXJhA3iw7KdtHzKTUVSLaFjCNE8gdbW52J5TqngRXcXGUwMC7Fd5AqzFr",
  "key7": "Ticv9PnRVjW7qsgeyvAmvWpGRNZ4dL3CCTZFRVcnFj9UmhfCF2Unh7GYT1pb8RPrMk64baFfCUczvHtJetGhhHn",
  "key8": "2YdHigetJKsgRbaWFxzoFC2DG8HJoY7pzB9hzW4aUW6XUg5ZLqDRrNubU32ZaK9cFxi5yegiaGNUj59Vk1r4T1Fq",
  "key9": "5kQD3ERoDtPmcXnUYrWhLd4kZapHFm8NBMkAvRChZR9oiXLJzeShT5NVaYcGdrsBiy9kfiQonLXjzr6t9Vvc5nin",
  "key10": "2V7Nu9J6LrAcUU5VtA3P1Nzxh2gKTBcLDU9dk8UAot7BSvqbXfsjczWEJpRHZ1NTBKqaacmCeQvKY77t7Dy8NEor",
  "key11": "Md4uaiZQmVX6eb5NKEWoVAAXFPExmiNnrv2e65qEsT4mBJZXMtz9Uf6u4KLd2yhKsPtQg5BQkhkTqDPMLSYSuhG",
  "key12": "39cjb4Qc8fBVJ8pubV6D4spDRfmjxbifRZVDPPjh613nCbdvq48uTbvS4xWcXdJrTnA1CHjhFJyS8T1RWkoxUTcG",
  "key13": "5AkZYwW5oiFjwETrtsSiix3fV6hXCQC5EdfFRAfHw7vWnAMpUF2Q3VZLmVg4EkmEkT53A6mvtnV44hN5BdCWqbEB",
  "key14": "3GvyANXnhuaUxDBcb2L8mYP2ZBoN2VMnUCFTtTCi5ugrgMciHcEguHpftt8ncZhTFFtJZhhmK8BHh7a5zDAPaaeU",
  "key15": "nJLA4U2FyJC5EZ1HoEeZKiwTpKQAiLKgamhkR125wDu2cvRUxrDNFbJXSsHDjJcFX1gdK67fMm9nS2P7Ja1GJqx",
  "key16": "2wPiSKZeeJdqZBAzhyqpbcAbqo28GknMwpjKcJbxJ6zFgZHhEbA8xZrGm7ZBAYXF2cpeyn91MbUKhzgyRQ6NGjmt",
  "key17": "2PV2qvC4fo3SNjg57NyVVmfitGjxKdq6p5fqkV9yB3pKdTmQE7cUPCTpSNu5LRoti4eHggmtahRZCPhgr2ZPq9uY",
  "key18": "uoEzUjoqgnmHfrB3trwwkeJJyCVHzwXuUYvuLHCNM3BAV6WtDBjukXSWh5zTA4tNCBp7DDMn9gnxa71AftYErpU",
  "key19": "xGhcoAzxACCVPxxtkMmTrs7aX7D8idedjPVXrpd31fShAUy1fcrxVae1VbE2K9HxhzUhY3YibyTQhskmTLVBWPp",
  "key20": "4jhqFg45Vnm8BmBnNzP7uXBEKxdSusHthQJ4T5QY62YFkBbAcGYZqf3mNBPa8BWTW9J6KQRGMMqKVC3nNxxyGwU6",
  "key21": "T4MgpPRsjD982MzTsBk3xQXefS3dUs3pq6j1cZEuB6shT2sQJEivB7jgxWDPhDjTiftHcAPSpTFmSFB6yho4uHX",
  "key22": "EV5b8szVFay5icwZaLXLg4jxFNfjRQ4aarfv5wEWcfAG7PkD46JEQg4tBs4Dsr3ijcFToiXJiyRTCBSbeykSJbg",
  "key23": "3q7a1FBhLvLFVv6TZQJz4KSYC3RjYH1rHKwxeANcam4Gt48v6cSLuoxcsLkQBxqYryvHbATtrY6F9BPQekSMunea",
  "key24": "4QviP2ik4HTMVq9YD1eHABh1xRJ2szcCHHSGSspiKTd3hMrYbLPQKqJdb1Hc46zh2FeaR3ERHL1JvGmT8eC2mUEy",
  "key25": "3NJ2mjb1JQoUmoWX7UBtNttdaDs8eYCxSNvU9rhRCHU6Kmzn9jAoA1cqozGdhc3XASDVVtkPqAohghaW55ScX19t",
  "key26": "uidiYPBJ3b1DLm39bJJ3ovzz5ncSGX5zSyWEbjNAjoW5cP5sZYCZXWPKXSqCLAwp2f2dVbBd4wJ6H4VrHJHCUVP",
  "key27": "4K94DYMiDGH9FmU1REajbioZ9cJL6BmZPWVkaERHykmsbGPvALDP4WjtrLmcCQLNZjkVVVW3Lp36qbYrLZ6BF1YM",
  "key28": "4xmo6RyfwbXfcgcKZhyhVAKUH7aBhoRvRDYwFu2DYpr2JaEcTJ9QHJzQuTv5WYvVhgizbLrQJyWEn7ZzK83o85AZ",
  "key29": "EYSRAems8i4QaHUbS1pbCuVGriEgHsavj7ekvdR3k4t3bFuUswa5pk5gHAS1cKhJy7AHSL6FcVS2veRveCxJt8V",
  "key30": "2byc2PPA4ecj8GqPPEwFaHwzsBNm8BKR9qWJCSXFW1rW3VniAzFHVNDg68p6EEfDnEWJdPLvJEJyKnCrsaekDX4C",
  "key31": "664Y5ayLer4B7JRv4AnLYyJWwSxi4UGe9qgCU8piPUpuaid3aPbD4gnMpyudNqKwG6VRqimqyS31RVoa9zHh32U3",
  "key32": "YeUDviAwn721RUKRgvmbBYpJeBYGEW3jq2Hguh2N5n41DzHqkfF2128JM1VhdYZktYcSJTWpE6Td4C58t9ZMXVa",
  "key33": "3nW7fWmZLHnPWgZStwabN2ScH3S6LJggFcimPYpF6QmmuGuVUVo1JkBSVKmybYUfrYn39qXwda8vkRthxuqYcy7u",
  "key34": "2GzTKXLEi7iY8BuJdS442aPV7SDrSAkHEuFhpCtsFwGM3yEF6eUL2UBVkDVqCWdeLH3n5kSPkzTtGLxk9T6kdqMR",
  "key35": "5sA9dWcD8DKQCcvTzeY2wx7HNqBCrmqEHxqfGD6bgdEu3HvbB9Y8jweEVqoxKr1yWcpc2oRhsCroDNcmivQadsg3",
  "key36": "5uqry2jM58JsFPjBSv94XXnr4HB1DDJZjZtPodDwMSN6Ydwbx88dCEkoW6GnLEStS4mH5SfKK3Tnrt4Br6UfUEXg",
  "key37": "exL21G1Y7Db6E1v7sP954gFFWdLGfftL4ckJca1znQGT7GqhRm5qFrDedGNJb2HU8A7qJyGbv1Rb27wfUjzr2AW",
  "key38": "2x7aKx1z3eEdoyJd47jdKU6ZTjPsVe47shXxtRYeh57fZxydjMQHiSZcxL7Vc4eZYhaCc1AdRwsMeYpw39UALT8M",
  "key39": "4W3bhYftZAjY7gqef5o2X24FRfWQYQR7V5XfTDXCsaWNZyYKUZuePAsJ7Uw2NJTKoHFBG83QwXYJSMCsK1wcfQir",
  "key40": "2RQUdNukXsLZDjXXHPQBqkhuPmqW68WMiLX6AaEaUdA3xpUfciZafwCfrgmoTqa7GaJfMqHutTeDM4J2XV5f6pPb"
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
