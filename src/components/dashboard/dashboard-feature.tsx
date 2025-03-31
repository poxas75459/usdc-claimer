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
    "wESLEG8GG5SRdv8FJah9NNCWbEvAZT1KWxAnhJbmC4DT4wT4nNvhpNbFyrumh6DqkVMhcShzPixdF2CeKyaYZRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wEpuZvWvmwMjLAGk28Zth3F8GLJEW49bk3r1EQxnndtsMduwa4q7Gum1G1uyr62aiHrFN8BseoWyGALLSrhSB7E",
  "key1": "3SWhc6mcR8QAsAfPNLqsdsue9VS2wmEuJAJZgdvVbmnUm4aekwAtt61kXKKc5MF1XvBReN9yJX2aSdib3w6YBwM7",
  "key2": "59pPnEgNczGxgA3t5FgRz51Suyfaxdn8nUUFhxpDw1yLxsoWsPy82Dm636RaZGoYf2Ka6uHhcMmEK1pninrBcF2n",
  "key3": "3hVPtNo8nqfDWqAj6dHZVD1Xs9hfF8fhcejwTwEmH4cGsgj9eDR9GVJwUSdRLzZpKqDWUVGrRiGJt2o1DWw9xmq3",
  "key4": "2cGkVTc6ZLseTBSu2UKpdRwzMZGMhZWFrbWJYZP2fhRii6pHwm91ZurmMxBuPCsq2JvxKq2dQDfeVdRk7JJR42Ys",
  "key5": "2Mg5KHi9kL9MzJzte25Ju6iz2wGGaUkZjqBPeoBx97RXeTekD6ykhtMrmR1iJY1JygiT915ciWL8nGWhWJxGsAe",
  "key6": "4jt1Xmwx2TaGUbmD1hM3UmrDaNb86G3k3AEFZcPE4M5E68sKLy4m7TEUvouPYm66iknbGLxNkW9sAx4t9MBXxTi2",
  "key7": "4ZMfD4dG734zzhqRaAVfQM9E5y2gsktQ7iXBscftLEkkPHByWb91qKN5Q4EPkoVH1nt1SjcqjcK9sJpLjLdPWzv6",
  "key8": "3ugGxd5qn1S1vbVmkeavbCnEuq8ijdCHSdaSfRV7DwMeD1YZY3Xw2w6HvbwAHBNRKZHpx6c2M8CKC9bDFAWebn2N",
  "key9": "5Rzgv2efZghri6xCTLzBb6eQxEUE5J5wPC1CRDbJ8b4SDx2Bv2K7XZfGFR86Z8joKhaRoAs4f4XuJ5kE14La35zD",
  "key10": "2TzJg9Qg21s2u5xaj5Zg4YjUMS9tvyA3TKV9ZccTGA3hBjUotcM8Bv2d41sRpNfXAvwMqkxLUby5wVMkDPFGeiyK",
  "key11": "2LabYgDHKZA2TL1GhbQzuUSBgZLKwzJtty3snzB9NEczpMiUfw9r6s55Zs9bbW2EEG8fhcAFvTcwMxM1xjEJu7cm",
  "key12": "34zMyWuRrxiLsHCSEqJszGrELHgTVsmMG25St2dN121Pfy2dAUwHhQ8Vzt9zAn6wqiBfUAJsDacYhis5FxZ1UGyH",
  "key13": "3AoMRAdFFv6pR18NyxV5nU2jre4vV2CzPfGmzgP6tVqjqjw9tNQHzqXcMdrvWeVGrHn9bsxcq3sAyJfi6kqfhksP",
  "key14": "2UfGoEK2pjSGin5CWdKx4d9euV3pikuSLWExCgT5AnCyNBv5UHq1J88JBHiH94KwYFoviKvSbGTDQwcap97m3ceu",
  "key15": "2UeKgyrDdXedXDDWrC4B1LJqC1N231sHvv5gSzxDdAY2driWY94Y3X8LNqXrUCRx8pCGgwTNPx4b9fCuB2eKjpNz",
  "key16": "tCCaSE2psLoSdvBRLEyMy7av1WF8Fu3Lvanjb5r9WejnBp9Mmt2ygDTFzxzHsaDuLuE67W9mCT8GU863d12bDsV",
  "key17": "29KcXFPoGKQnpZETABtRToeiaEPWaekKLooh9sYrEhvj6BFgrWSqj4mMoSkKW4GVHFAWsBDJqq8QyHgArS8fYpx5",
  "key18": "5h9bVTQRLGk4n8LhVCPoABLtWUkCV1fUnYRSr5yNBxcYybJwRe32k3cBenFy2mKp6vTSrzDyzZZWde4Rg2KCX1jo",
  "key19": "5BwWUJhQHJw48CUCvUA5TsS7diqvUG13q634P9KDBe1SKFqKnaW5djtVGLDh1Htt6VRL3r3z8FUh8Xpuzbk3PqKf",
  "key20": "2BLBtP5UDzeh7F4oLMhDGW7p7cxo9TGyzZophvPEwaZBgPKYiJYh7uEoWoavCFLBaT2m24uCQ5d1xNyTjvtjyurN",
  "key21": "QxkJWMB3AK8sHdpKJMzxpcvxuLVY7MQMX23BZ8kgS5BDRVVtmczeSutvbEdswZaweyvicucZZ9ZrG3TYxqhgooR",
  "key22": "3rrChqhHnLWPrKjKvxbtg1PjKmsY7M5GkAvm4A7BQjNZhvmUmTmVo5QXXJi8dMFpG2F7Lwr9HsWUA99vVymyrY6p",
  "key23": "5ivVYwLE6y4txfcUZK3sRhdsQJH5Np5DMkH978fbXKRibCunhKy7EvaN9t5CoTPy4BQKEKNPzgW5V4nKeR3Zi1Xr",
  "key24": "35xKvdjLYagmUofhUT8GSDJbkmWz9RoqWWh2EykcMuVtoWnseLX5SkYj8RRNRtEHLrz1T8vHuEkiD97D5R84zo7R",
  "key25": "5UHpNVKTMn6VqSwRMyAkxrGds74GwRQPDhhShumkhmSy1SuLzB5LipdTy2yXEW9hbpVvKeZ4vCT8L9PuFEL7SHTU",
  "key26": "PjYuxbD6GZg6eqb6yx4tzfqPCQiKB836fYXkKd2tvM8X15XpwhZLJHcQBxsZBbp9eVtPmGJReVHeibbZpQvwmMM",
  "key27": "56q4BqbmHtatPyzF2VmxagkahyfxNWac3YqV33oyAJksCb9x2UshCh3o2fvLSSago1j7HQ4X8iTgrhjLh34X29PT",
  "key28": "3YoYaC1KVjmQAF9opf8YovKjFJ3gMphC5JWCZe5DYPRRaktMVBecN42qajFi7a5PJWuqos1c9UuA7XWj4uEvBEKh",
  "key29": "5fEUwyUb5AUxHDkA9GMJRTqEXMS5WrzZfga7HraHBDttf1svdisRLf61fZZ7EzsoV2xHfFHap4BDyFawg6Bsyn8J",
  "key30": "3xWc9dkuhNoHvgRsfFa4SU8KvwqMpSr95oLSotGR3VbBi8cNN417aWfZYdrNnQiiFtug2b1Y4dULCkHk7d2WT4uB",
  "key31": "2CMyfT1WvFLCLJbAP58Ev4e6Ef4sdre2SLAyTiVQPgR7HzMNsJB4jC5Jkp9J5uMgF5c7LJ9VDDwqqNSwX7eNhFxL",
  "key32": "3uvSRPrY2zhfdjH1inVeVf7edgBDw7dSiybFzB2tN6YEvTSP4b1cRqg7EkqXdhvVTafyeLK5ydkv8PdTsB1dvWE7",
  "key33": "GP8BhThi6VZiu1dVoPGWs83DjxNuc88QNy5G4fXkkLAg7ckXvM8RAoN4Y7X7yZFYHyGmtQxGEiWjmoLNoJfs9yw",
  "key34": "25giXUagh13Zo7RFSJc2faVGS6GhFR6FuHZ6L6wch4ET9bJhTv4iYdpYQmNWCPuTN9McG1ELVAVr8JyprcgCQKNu",
  "key35": "jsuiesREfehYbCqaaPHeHoFn7W9Eid8SiAah9aTPsxUD1jQP4jDtCSRv5QfyHvu9NEMxFpHFFAJaPrtiR9CNDpK",
  "key36": "Fvp3tTvfhu4sFq5cXhWRJuQdxWh7H2UPssf5ffSfmv1T4H3HNwvCnoyQtj2TTLCmF5CbJJE9sUKQAwJv1xJ6Czi",
  "key37": "36nNT2Y2esCabW9LY1kz7rmzWVBVgN7yi6htc5hLUEAEDE8VUQai75KQ8V1VkKr2GYv61BYfBvC9LX1ub3WLuWGC",
  "key38": "59GdAVVUbbBzoLgcRxBLcMBUQ4u49sde7ayQbNFubsQPcjsJEvcEptcS5xoxfDKa6bLJZMc1tyotoqSAhbngrMyv"
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
