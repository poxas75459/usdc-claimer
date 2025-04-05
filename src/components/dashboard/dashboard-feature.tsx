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
    "2QbYqgFsf8zdPeKfVqqeamZhVkvujeS9cQfyFn6Bb3uz8YHpL4cLCXtx9KCaMviCXWgmftE1MR1fpk8CdhnXTbmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yg9ySTP3VgVc3FV7WrQd8iK1HwvB8dwFeToH3zmEhdGt7bBiSSwPC6A7SuTCAufmu4q81tTCBCRLzGwdjiBy6yH",
  "key1": "2CQywqSBs4AKZmcaRAJaXy71BNwtquuB2Pv8XRehEBHfZa2kPdrsAqYPkFu6qzvt11kvYUet4exJ4GJo2Qi3cF9D",
  "key2": "4GrVuHKQ1F8UJWbb9dmFabvN5P7ZJNwrShE88cfTcjoTXvMTXZ9tLRVrYfhht9YwrczNHviMLdPsaesrXmwkpDCE",
  "key3": "5u5KNuydSDeN5KjQXCvzxpz1zehiHkAeLjEpixWKDqFEF3LTQd3FKMVFoHMxdeFJ59cJnY6mf1jaAjWiGxdSEFRE",
  "key4": "3wLpyJouJ88VjRYorbq2nJKwsdBLfEwQd6ZYCcFyLZUobG2JJ8Z9D1ETc1AqabcsGvHhTvK9iDS3acsYAUduN52G",
  "key5": "ZgsB37vFDVb5EXfmZC3QC2NCxAk9Dm17CZgDxZGZHsFUPKiBRg6vcSKSdfdtsTS7vYxVoJUiv5YBbZ7n26HxeZF",
  "key6": "4guACe2tqwRaKrdzhXZXTK97CX25ANZzexHTu1mPtomsPstjUFiho4EVubt9vAzPK1AviaSVycFoSpSipCiry2FT",
  "key7": "mcZAvuK6UCAKPYYLbe3jZkXVQNygLN5qWbuHfsNSbW7jZUVYeeg2cDs24bZYLb3pXgp5f1CFbYPW94b58XEp4TD",
  "key8": "5sSSAwP7zPTCKPVGu5UqwWG2nWt7eijFYD8HH5AEiuoZMc3XMJZavYjiWjXnAfQE5ZGvd6gG1KZtrPBSkY5jzVoV",
  "key9": "5yL16bCc6LrDoRUFa4oYgDb62Dr6TufVBvoa4J7QouMx1hZSHeuhxX2afxUiiTjJ3nnQhsFJAt7XzNpCfpzuyA38",
  "key10": "4DtdhWCVF4xpU1fjdsMAnutXTqyuRD2qWscsDhGytvJ9VWynjZjPmtEqKhas5pucHPLNwnBAtV5H6gCYvFVtZhcH",
  "key11": "5iBebW9FRwADSB9dYY8fWsYnWpy2JvsXuHwWFr5afZehtLLJDaqPQ4JANWS2LzqoXLMCgDrpcuivUL6VCLQ1F4sK",
  "key12": "5SGw9H4JEixnSFf6SyePRWpzek71ZtY5SL8aoin9zqSGdKwvTG956wy6ojyhdf6yTBM2LkPwdLVSmrmqFk2J6Fft",
  "key13": "pqNseZjtBnGFWvaFbtP8iV8HqM4Jb1nCP4Cy33aCrQcxhvxcp9MqXn2XNDQQvBCDm1D5q1ruN4GReosGgn65iSm",
  "key14": "593Ug79Rwzp95tEQSUM3E83UQLXNjgTs74ZDBH7nSZ4sfc7HRcYxnFNAh62ydBengzvEujUrH6KD16fwSyaqi1qe",
  "key15": "eG7ib3oM7QCWiU6ygFni2u3fVUtHhKCGfjDmeLvJkxFfV7mEaL3vgFgMKbsiCn9JRu9gfaGWQtK1h7gW2z55Qhd",
  "key16": "5Tkyya7m8iPxqyZNvCxx1kmGkpdLrj3b68mor3FqsCwbfnR1Bnbsbtv37qQZqX8ojmLs7PYafDnnF6nJuXapq3vk",
  "key17": "5BABLAbNQQXu7jUnAy9avzJDPeE8iUma6RXcSRRNEKM4qUVW2uocJeyHyeRXNV4amUusys2AG1Q6sdQtp8Ha7Qnt",
  "key18": "5E7U1oFZMnX1uAaZCZhaJLKZvaHjEk968szChKUXJKPCYNnu3qmYxtKaHJHm7N6GxvtqTSGE5ndotNKyMypyDCh9",
  "key19": "3KGVHP3i1jfz6X5vmzDtfsTYFsmSFokMDENcbhST9odVgxAhcP52ycaCXRLToSw84HGiCkkPvt1zLHpXdbe88sj3",
  "key20": "2wRDRnxtTHpVvtM7sUPUL5gpJyiHnQQjQRiHuCmBrx3ghz2A1MT9TiwZjPFFSJDFaQKiDGDSjssLffnLsU5cqzdq",
  "key21": "2vJmcmuZvQ6gCw6cQNHoKVy4ms4Xzu539DR5xCWE5whBnCGQqZ2eXpqmDTiQu1PyPp6GJobZ86sG8RCZSdcYRaRB",
  "key22": "2oBHCNziXGjdcTWSyZxUHp5TMjUZXcZ4fAkmq62XDEYN2SEXjL5myXXuRDC1QEk4tByJ6srxaWnaLs315SuaFsqe",
  "key23": "2Za3UeENGz9s51wUqLAzbgXvVLRQkU8wYhbkWtFMeyvEp96CpLQniGrVKXwFgoVCSQBVqHLn6z3LwjvJWMqsn7do",
  "key24": "4wSknXevPAssMwHBLZ7RpiGXVUmaSnP3tP8bdysdKRtVZE8EbLFus4dUGrAsKgLjjXSPJC8EZYPykq4qX5qTUY4v",
  "key25": "3regxJ6PrBWrixpaxYHsaCasQTmX6ZrP3dUEZDbMM9V1dLA3HF9Uq95se28dC7tHAU3S7yK1jW4PdQfKDyG9FyyB",
  "key26": "3Rww7N6tRKJFfiPTiGGPD63yTreRT32fTmbbTVzVwU9wX7FnF3yXDFGvYLbwPEiet5HwpTPQorpckMzHsUoiuF6z",
  "key27": "z95K8eXbJccjVfywtpi8ooE9aueLBd3CYkbhSCUmnkWiEjZJBYRfbocSWX26T8VSMeWdg3YhavBNDUWUpGhiGaG",
  "key28": "dJDTGkm8ZcFDWdhWByHbMSLw41m1YaoxKt2i2KF194Yc2DJLeDVc8KJ8pj4PG8B7iagJJFhNrMtToAHXK7jn3tM",
  "key29": "2aLWnj4DJrVDpV2WpmHnTbNyAAv9ffpDXkgF7Fy7z57sMs3apRKr8s6TmGSYoKyBT8vZZkPRtDtFcsfSLEaA28Jo",
  "key30": "Qx9nKwX5YsYj1rLCMTG9aT3GLSmvCJP4coihmrym35aQxcXDnp1cM92pm6fFSmGXfvYqubDEPNsbtBdWEuT1yTg",
  "key31": "jQMiPvCwLbBXh49s8mcJBCHQkiaY5bg8Bxt5f1MMQiRRL9SUqeBXkA9T6TzPMKYAqrd1rQ3ruWLCYj4P6uANGj4",
  "key32": "pbJFWs6h1y8wv18o55NbDNqaXsx1STHZW23gCfAPLsZ6KsXnEuXkGYxDYJZT69KfyUmm3yGSQQSrXAMRvPbmGTx",
  "key33": "3MJG63rm8YUCX3TjeQn5Tk9atz4i9iyfioa5He2HXUuwtKGVGni3s8AWE6PFdZG7uDLD51p5ZPdMhQSDetMuuXCT",
  "key34": "2REpJeQCTxAxSCgPgHMyfsfEjskiA69fNvLgzwx7cFvXjh3gneSPMZjgFW93VDWrqQsWKP5ipfxnZcahmMs3r94E",
  "key35": "34ft8dm9NBVwTpwogDgmouybeqroSWYpGFKhz3kvHvzDHmh7FWikLyjF8V53QvuzrMzCuPLNm55NM5k5eeQhV9QB",
  "key36": "3dV2Tm1qFC4Nq9ury7SM6gTGFTRmk8jpFU2Hm5vDivbh5nKRHEKx9ouUVJwSdzb9LSt3JjqV9r9eoWEdzA2u2vxG",
  "key37": "qn4xewdEaMwk7JRkBJocJskVYoHXhMtYDa8fyNWnVvVLKT9K74sSsWNyASUHk9Svdmra54kHVZVN6xqTMGmnkps"
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
