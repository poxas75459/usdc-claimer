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
    "3cYPSxJowZVVavsiM15QdcFon26rHY9jvHLK6ZiSh6BbbAisNf5oNAs7MwWTKH9wyZ2BX4uGfsPNHZJAyUNjNbPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuXWzEBhc6BbrNQZsqg7EjFh7uW8JKfL7t6pEfu89sV6prpYYy57ZQfMzF5TAWNg2d2xvgmGpKs55N3hUGqs7Zp",
  "key1": "2xZybagHVuaYPL2BVDifeSyqqRAVir6ESv6BQpfp5Dp1DQRwKts8iWGWh7abJ8aux3ap9Vg8H8PXyNgCDfUoLraV",
  "key2": "5zSQSJiiPEZvexnbWhQzdBrEE1dvHXES6wTTXBwAsRvVnwP49XeYizjCuwwCHzVWFkT4CHLZdLJ5QBnZoXzLKHD3",
  "key3": "3pGYwNbaKcJf8rZkNFjVga6YQCyKup8RfNSzpm9tshXVDv6BrHsRdyrU4kQ3n7f8buBQbaWMxYhvZaTyxSeeT6AH",
  "key4": "294PKp2rinf75pkHs1xz7DYs1odakVJWK4sp54x4e2er7bvhn5HJy3usc9FYUUhHoGwgWyiEY5x3iQRpuyKJqKjY",
  "key5": "2MGiw4V8uTjLU9MHHJ7mmCYpvsRntt7T8VbnHQogqMBjnXekpKXptJU8dNpswQkhDLmMRpjvojDcep7KAhN7zq2L",
  "key6": "5dM9iznyNQsbgg2wrujbEWdLbXvTzAGqHh2b5DBacp9xEjaAc7P3Th1c9sJxq6k23bbh1oPFmkLhttmNPdZ5bK6p",
  "key7": "woWa8yoXzr2npkaDvM6Vi6wgbS4Zn5JKag6tX6TsQ5xqvJx7k7UPybt6s3MnTTD2zCjbpxy9MifazF6NgG9dKpU",
  "key8": "26NS3xMeZ6xy5sTrxf1ZQxGrc3XXph344pofZTPbWRYJMdYiwz7JYoWJNJ4F7V4HrsSpuKGavHZjFsXFFW2BbtZ8",
  "key9": "4uja4vMtnbjGQAbUXRvMY7Ec7SyeNyqWLr7YcvdPdM4mqAiMzoRjZWY6QoguWyFNBTbD7p3ZzqKSbdqdgRXjskmB",
  "key10": "4ukwz6BHQuiGiQDy1K8kabkxhvzDTLXy3FDgzcYg6uzMEXc46iMhpFVWuBorLnRGpPS3mXJGM7sdVEpx747HRTqc",
  "key11": "5gJgT9KtvU4K8hMEAhDsmkqs1Q2XVV66jr6f2aqypx7q37x4C5rU5Bpf2m5ZN6pGGULd5sPmjYoqKookRRz35wTW",
  "key12": "5n1HtnNvkDfP6vASmGtwtd6G7t5jNqtr9eXW4uJ6gvc1BGPKKy9JfrRiyk81GjbT6E8acKEZ2Y1fbs8cVCh8hdb7",
  "key13": "3bJEyb6Ff6gn7DxFhqAkXxn31dZWHbhSkLvkRdvtWmRPnP2zaEpCnZKAxipBa5EPbQuCf1QVXagQxResQjmuJ1u",
  "key14": "4Jaf2KeDgfnuZ1z9tiDrXZS16MpmQsjSPiTUti3jBcNUjQcCGLrm1qvt98qg7dsbf3mY826nfDnPpwVjyDEh4eZm",
  "key15": "3frn7tvPV4t35pMBD25dgUxLLmyJyL7mzsLkoFfciL6jjdWrZmm5scZtErMkqcq678zk9tRgGFWrTwhu9MDQUd1L",
  "key16": "dJNEMXZ3fvD1XXGBAAUM3SXsUVF3ExkbrSu59RhdTop6cNUSCodh1w17Cha93z1F3Tvx2N8erRRbm9giYh3iV8P",
  "key17": "2ZU4sm1UgAcimJHnX35TjQ8ZZ9pKp2gnanrc9Y2Qh717DMbaygzF5WranprJXDfbvZYSAqevYCdYQWgVeW17HgrV",
  "key18": "4DB8gpxV3AL9rS3SJQhNRDfTmGBMxBapaca5NpaXSZi88T39PTxMJp9JVsJ438ZgkwBw34dB5pcjpNDnwT7wB5vR",
  "key19": "4nzWL4p5FVSw5h5uYz8gZtvN8RuWzC3Nb24SRMXQhUTG4ow8CJJ5QEzEvpKbhFmekmwx1ryUWqHm1BUL1yqC1Ybi",
  "key20": "2yAhEr9WfYRD6ewYxs7pfdetzkFALtZfGvsH8dnokKWwWZ4wTT7qYeKf5FBCyehfooJSfiQJxwymLLEXLLbQ3riv",
  "key21": "3Zg4SbHrTQyJFsmvsJfyiCbDQL1cSJdoXSXPcEtDr99HBDs3uYATDX3fCQQbWQsfXwi9qZHmUKJGBKefoptuX753",
  "key22": "fW2fex1SjaoxcCg6V1iRGFdT5eFNCSZcmATUQHyeyM3JrK5F5tHgwjXWPBRVrh5yu6DJzL2eTTeszFd6itfMhyX",
  "key23": "34HAfvc5oXS3nMezcWRYMteTxa83FAFSX2toXam6nP75Z4uQpSvPi4141CJB6SKp2mj97wiD9sgYPRiWrFqdGL2b",
  "key24": "4yvD3PWNAzPSnAfqzRfCKp4f75edrfYCwVd4bJ667nzCwv6D7UQCwdUdfNwgVqNHACN41Ghiu49J6dbbHqy2f7tb",
  "key25": "4aHAbjsNKuqHGagHTH44bQWieEPXZCZgfAKWwLTcXAZT68LEXgvLi9jnEcThEKtq3zkDbDYqKRWCQSCsp8XxjKos",
  "key26": "2TuFbHqSvrVqYGQqPvu2g8uPTdEBSU3V7Z15BRGm2KPH3Aj6v8cWs8EKfxzjmn9QqyXCv6iS4mQYdSfjpMNiYRRP",
  "key27": "FkePDABvbNwQAcvTdkVuMkHeY9pT4G9bintBZq4XPtFM4S8TzaiAxad3ZVoyHnUqbZqXHp5jPuAWrMSB5ScShfG",
  "key28": "5grYPseRXmdBbtSRaPuKWWPHSmZtZRuUN8K8CEWdx4CTE5bYw7cZWTdmY5j29pVWFJwRpCVsBCCs9rear9eqjspL",
  "key29": "67jXKCuZjDH2YBWWEEJBkxuCNZtbAWBTze6zwBABbCDyoU2ZpTwRdwrgcjttS1ocFBhUZhR2jzZRbMN8yd4w96kq",
  "key30": "2tciZEr7JrNMpsxzxPLFy5o5AZmftKWhRsTFoxvakZAfCDetnjECSdMDvwKqqFvsHxBzojcw3DQ5aA3yj65bEtFL",
  "key31": "2c8vshikPw4nv8HEV4PbdbfWEmGnKvwWVBw3WVZrxd7dnySYBpUNpHDwwun2bSVPr4WtcYN38KD3Y5MBh3H4X67q",
  "key32": "2Ers6NYiJAReiboAHpuWwbe2u4dv5mQ7q5bk4gXX2wa4ZcQiQC3U4GctZeMS3vUNykqpEBTE7yEB7GJ3AFBqmjTc",
  "key33": "3fYWnMqgLRmMxo58zuYFKFzKMR6w4C3KPRNksVn1JST4PR147zWhrrSGmbJTrBMZNMYQ65kEbe5Lm3Zpk8UtkUbj",
  "key34": "36MfSNAqEE4DGbCJxpwA5JDhDpEuvRKYoWhLY2a7F7B7Wo58PxwpijgA8mDryjMWUKPMHENkqdhQppkTms6yCqUN",
  "key35": "5FueUXQnDGxbLAMCoGGR6SYFtJWvoAuKYgQ5rf572CdytEb1jzLsb2EVBZe89kTPQKHcMY5DFyvcLGDyFbSMFerx",
  "key36": "2camPVSeZ9VzssFXdKuYrKwiHq5Cati8UBwCUWecM44ZRGuJZgfRTSEqodjcWWDecxMgH2MJswcN8VSenJppUqEt",
  "key37": "5wgDVur8tZWH7XpEGx2xgys5Ye4CYbjkw1f6h1UJZ7uRuf9pj5fxGa8ruwRTPi7RKtyArWWee76HbBXzPidsKMiW",
  "key38": "3TGVm3YRwasGbRw7BD83Wz9pcZ15epeDhcxcwMqFao8sMsRpAGzeugkW4pnvgxVCnq3AnJHDJ3DzNwhqmYdkQY8X",
  "key39": "5Auj9jPTX1RmXgrD1i8h7m7FVdyQu8ZyEbzuQbiBTFzbGGzVnenwh9bQBkLdyS19JWQC6eSTttWtDeKuZgXBsc9Y",
  "key40": "2ATkZrxMvR7Lq35vM2YitLkmLN7mi38fjZVDjALCutapWPwMqGUrMxFEsi3fGQdrLLqDGy6FrWxx31UBoEgqCNKX",
  "key41": "SYGNHGboC7Z8Q2NQai4pHXe8w8C6PaF2Ei7M6SrVJQPF2kEZAMwZDTM6V1ogY9Tm4HR79VQraKbE3gUGft6ERB2",
  "key42": "5v1jvuA4DrTV8k67BawcC7nztVJT5Mo1b4hpjzytQWH6KtSoRZtr2U5nxUhB17NH82cNN2C8aYazkDAXggpDY1Hb",
  "key43": "vbw56AM8vK54VHZJkZoGBcLfmLAepcxaToFftXFmkpALkHn3gTxcMPKuZgCWPcZruKqFKM5D6b6iwt5iaGVqb7m"
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
