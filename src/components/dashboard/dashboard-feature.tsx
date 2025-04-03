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
    "62FHVXjBiy9Po3vedMGpCnMaUiSiNAPwcwDwHA64yLurYDdkXqAFwRqZcJ76eM5DfRNgBATafH6cBZq8VhUTwWMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGWKbdLgQiaZh1gcfbhoajWCLNXvWgnAAHuTqiVi3xsWYUF4x5MVAQe3NRk8kgKmKHykQ5yWmhtbFPsaFzuuFX9",
  "key1": "3MwDxzUSpeynSGg3CCNXAzb6AkwdhhDWUqYbN24LL8SKbTweV6A3rEGGtkJVCc8rzjgLgADWeWUeXEuE6t5a5Mrf",
  "key2": "xDRfzM4oGo8i4KtJccYSvtGpCt1tnRkw1SRA544NHtmZF6TeBHk8LgPMCFXThcmujjhnE9VrPx38DKbgwXsvCTi",
  "key3": "658vbY11GxR48fAdxgd3BYK6msZN74tzd2FAZNEviy8pxfZUjDNA5gDRaLwYc8dPouhSy33A2w8PiZ9JCqYoe6Qp",
  "key4": "4MaNUXinyDu57BwMEvb5QGu8EcmapYznL6jGmivSme2KWDKSKzK5RT9rFYtDrH12EDbmEMs4hPfdKFPumY6xe7d5",
  "key5": "4F5rehds7hDRuto5nmx468pomYq6Rr6G4cMWQeis3iA7pUqULLAAKtCeBEiTvWwyZZYTGNVwwAbNVyBwn69RJ9ME",
  "key6": "3cwEEEJXmHs27YSniydZuJzaJLQVMFWSSGwkBbU9LJa7SP3F4AXqhauEqKVxZhMCM9SiJYqBcRGUbkhd7JQLyCoi",
  "key7": "42FioMbo4zjb72Jr8jsc53TDYaYr85jnratvvvJVdMU1qE4Ty1mHnjrc4ZxrsmR8FdumUBdTY74ZWmYvRnPpad1",
  "key8": "2QsbuJaBNVJH8THH9ThFWPko6Q9gfVScrEMP3oQYiJuRUsmQjqYFhVm1dcYViAczeksW3bukH8UGSuiw2RTvXLBq",
  "key9": "3zioEZ899jmm2GYPyecaXKWfnHvbkqN2ogePPQKssfyctwAp5NKmALhp1SjBCcQ68aNmyjb2rbhjCKiPinBWMoom",
  "key10": "5yA25BctA5GYHaJjPnamx3mPoqiBpa4u6cpyMHxJeKrEgGvmjJuYSeGYHpjkSCnKcVuSfj5sGcp5ogsUJnYXHACv",
  "key11": "4qoSRLnBhTvTHbczG872TQdvtgnmxem6BTAKPf8f7TDaWopq59MFnvJBaKWLSnYfjJWyrf3aFqLh23K1k77hCyzH",
  "key12": "5jNueBVU545c4KGcTdLX8Ckbg918miwWYULsPDUGoGafyhcTNbPTwqkzvkdiEVdkvX1TqjFXNNuuYdobnysWYiUT",
  "key13": "3jkMgDfcmVPHQRwKgNpgEs2n6X6PjdUsLhEoh13Ahn5qY8g2AYoZpYjGf6vsTokd1XdEJemKUeMdvnJMLsq8FQrA",
  "key14": "4PbbvGXtYZ1BXM6B7PhhuLHN6f91rQWwPhLNTH5TjgX7WKuYUoUYq6J6kXJtfBKDZXQHWaH2KFf9JRaqdYJdEpn",
  "key15": "2exdtasNgkXomRt4YgVQe665997aEMMHmwQCJDKSn8LLMHUfWBQoP3nWEjFXdqYwEpfYcG6YJXMMBpkG4WoNryhk",
  "key16": "3LC4oqDFXQZAxn568BYSW1hA8uJRvzkx5P5fihEqpgEPTWrvP9bASaVGhGuA6aei4u3oyVzDr8RpgBreMf9b4Tgz",
  "key17": "1ud6gEoGxehmWRf2MnBsR96c3W6PoLBPFHsPwVHAvDtnT7HMvHwZYfyEKtTMo2YaPUuEw1v3kaT229SX4EEMsMr",
  "key18": "57cUjC7YQ5cieXNnoydx7USsgCbsoSmQ1i9wKSeBXdgc4M3EbQnwFbyokxyhbkBah9VGjf2UsLG87UyZspYpggF1",
  "key19": "NScR6jR9uLBboTj91jyM886oC1J331YKtZnRxsdykNVePKt1kZkCJLkouzGzXqProzpnw2ZxGpxcLevCK3334uN",
  "key20": "4x9DRGpx5q4RDZHbyLSXzmhhcPo47esxGKJJHeKrq8wiEJfkNgFe4MPUbJ6ckpKHgMcgebBD6VseEzsZ3iwvPPwx",
  "key21": "5fVk2HcjrbgWpPRukRqixak2xp1auA8D3WyGG4dAXCsRmpQweP7E8goFjuKShJyyiBFUw8SnxSkUAYhh8oFrmHY9",
  "key22": "5A6iZsmCLADZKWV7pqg18FGhf3LtHwccNoEETfFgueZRUQM5qSgfoSMRkVyZGStCD2jnzzvFzavG5HFrXdbDnLw4",
  "key23": "54ANXVo3CZzfhqkBsHSkpYxnsEhEUK5TfLUvKZsd21D1g4gXPjqFfMUG1GhG6eSenLhTXfPzZgvvsrAuERTY343L",
  "key24": "4J3EzxK86uTxC4wiqcULrhZpFqPNGNagEfLixFNmswRnEeMLusR36y2dbEpjcqgCfuCXCHZ8wJTkQb6adTSd6GmJ",
  "key25": "5ig3mg2331R7kqs5HSRXcn69Jt9WLH6DnFQWCHTNUPoie9sdW2mgENocY5oNa29BJR5QF8drmm6JCunNQH5Bimax",
  "key26": "5f4zaosUDvEdpgFVLV99w4wtW77WqNJ2npPHTMTswMGfzStcbFt4pcqdCKoLPrztXvW2iWDfvcHTaHoabqg3GVV5",
  "key27": "28aCfWRirzw6Eodng9pX1dYvfCBY3EtfYFthH65ST7kvxt2zjgDy8xKn8jFBWiHrbzcELVNFmcnMhahinW377dBj",
  "key28": "61hZcnitM7ccJEpVqMmhvKTHEjhHNFBQLXoR9Vt1yfc2Jh56HJZ8f49SVm61A3ENHrKfyCgy9opkhZdWNXvqtL6G",
  "key29": "3m2XKW75B2UN71RDUhrU4eFnhC3yGPbXUBv6WnqTczdJnDvnEmhqU5UtrsLQjf2Qmhoshc6ey63apkZZgNzjHpNv",
  "key30": "3NBD8GpfeyiFA8YGuLFvexYNbXq9YDz5vWyVQK51huKXgfz1ydmmFxZW47AKCoa5gvDUu7iGu97XgCQ5oiuKEV78",
  "key31": "4YSNUupzYuPYErr211LeQiNojSoMZADjBNyZuow9nAVkLdEHR5RbmcsuDKNB9CV4T8g6fEftNqWw6S1jK75zRWx7",
  "key32": "3ybtGMNy8R7EpApyodAQLSR3pWES9E8qN2Hn3mkoc6F8YPrGAcnFa276xdkC1oYWnsKqkPvfKMrL4Gwp1TVeuzhV",
  "key33": "4E9o8woPnNpqumnk9qZ3xQM2X6F8nvW8rk7eNHYUkSPWpybgHa5FcwJwZ5eepvzmFPhxuZvuZDdrnLcr11bU9juj",
  "key34": "2osGKbKJ6LioDSUzVfiwJ7BUCik81CpBYkz6LFC6qWyP7qSGF9dj4qR8T844AUDAtjyVZHpKeKCvKmJb1uK8Xkns",
  "key35": "NMkbwAukhwaUZC23b6LcwVWQ8E4s99wpsjTypmiMQ3qgMa4wD4maZtzvnHzLZ2dEdRxkbToeokcRr5pKe5546LX",
  "key36": "5igMoVAt28Lmx3pdwzDMuovDQFh4LYn2DB2cKVjNHoNgBLMK4UqmAXf63ccx2iCgfibbN3PAg2Am652fYc7uo2Dz",
  "key37": "5jecMyiWS4qpcBEEqZP4gwShmUKwDnNK1P8whVQDa6ULss1P7CdkdonM6jeM52fCpx5KyTDK6mgH5jDHkbpSR5jG",
  "key38": "3T4szomJkctuJyEHvpwE3GC173kdiy7sYaNovjcCTv5QgGPBb32Y1QmPsQcNhefNTuS5oASALpU2wj294VpwqrAK",
  "key39": "51snhjdEEvv8E8rSDfJtj435WJ7qH7yn4aWw6GTamXVbuaWNwop11mbnjtu9pBusA8ba8vta64aLKEv9Vj3HMF9D",
  "key40": "ECCNZtnarvmc5sNVa2NXB4KPTdA4STEQ2pyjqLZWEu75cYG4gggV67ZWNeF1Q7hprqn5DvP42qnfoFGyJj3Cwey",
  "key41": "4r71MZprMmqMnMjxZ6PzMUsHts8JyepKDLCCjCYwND8X3Ny1xYREtKiwHVWWS4rW8tWHK65UHqNfdE47d4hQQCoj",
  "key42": "3Lcb7nGRxZdBkzQdGzU4ty7ee1Bz73beAp3jYpX1wHs9QrLRnVago5Ydh7dCvGrdXpuVaPfUiZnLyrC9LwTtdwVu",
  "key43": "vvD1aht1GDrojn96yZ4Y4paUjW9QCvgQAQRTdt1Dmmd2FeicCPA3CL4eUopc4xvSXtG2Va4Wu8cDdu6jpS6cUUd",
  "key44": "RRL2MDJNvYu8dZ2mcXcNFSXYiy737KE1QvyQdNDbXvkwTpJGTJGbH7iuXkXpRoEoaYbcMFXkhSMCSwsnSW6kafo",
  "key45": "3QxcQgPrCLcPFiGAns1x4Hb8truRp1pCn1YrymjBqv4GJEfNQ5JsUB4NdugBx4GezvwbQ2AcVk87tmaTHHgXDUav",
  "key46": "2k9er4fMWbx4AHmxbUfCdkDsNj5gKGo2uoeewq934AdXecS3Lkxq4JQLePBFju8Abbfh3FPQMz8ojoRpTAkcq25L",
  "key47": "5P8qa96XuxiSJZgMjZLEXxLe76pjCApkDHsNAc3R5iMKDpwZwqVigvTSmHj14j5VWEKNRYZkvPfkHGj42zAUMjUs",
  "key48": "5EBqdbToDjKtnygPqtnXdpdYY1T1XfL8Luwhu12h7WoV6qqkLq4WS1fKSpBaARXr1UyM1LeGMr6jL29HxpyAEpY6"
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
