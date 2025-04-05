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
    "5rfndpowXYzcAaycoaNQtsFXFsVuu88muwtB11gr4Vnskm6hFPAk8LyGngP7KmQQgRJAiTZNqZ9X8uqhts4eLtJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjgCfKo3KetrGdLuXfZHcbNcsYqfZSXriaFzow2QHv7wJ62R4WGegbTaHn7ppf4F7N5Fqfu3uvmDNGegUDUkSGU",
  "key1": "5k5YY1SnpGRaypePwaxKu5FDNLetA9uVFZHFjDeBNV7SsMWHaRGL4Hd4bZehF6FMwgJnx7JPzyypsAtwDHYAXbZ4",
  "key2": "2SpzXLgdQd1e86SZDChroGux25o3VTrj6pu7spjCyKrt7gwW8GtSZ8Z7kLCSWPejDQ65fCvNj2vKk7GUrQdhSivq",
  "key3": "36iZQufLBksr7px6tR9yNvJracKMVo1a9q4KoDS1wqGhw7qmsCXeSnuQAiRZbs5ScMVEHqwTbYJEzMHqzNQFJTV7",
  "key4": "SP4NogquPWn3DrB94Lid6nXjQzTpvzhZNAxR7T64ifj81WYTeb2tMEQitMfoh4EgfnLWiQee6bA2qkRYN8HT4Db",
  "key5": "3KQuWQhefKBYMjhmQ1zihYrCQyMvzMK1vmtm3DPjW6rLUjnme5xrDufifDVtFkn7uTvpSdDDcbHVejWxQyfmXG3m",
  "key6": "5D8MnsvNKEJB5mzpnGRs5kSzuMB3WWujPRj6dz62FoYzKwYNg7HKbPBbyYvphonMP1doXWVjyEVQEeoE6qW3p2VJ",
  "key7": "pbfoUXFpnvpDVvHGhXKhUZSzLevYkDh9WAHfyUSSyqNxstZiY1JthZ3dQ4fpFZaHounnzvhy1BcqD62hv15AwaH",
  "key8": "39YceBZHTA3XZKzGXNksZiwdPVWXdJBkH2LvYzdieFLcEYTRF4ZQTrKunz6JXrcH2TNpafBCrHiHb1VBtojM4x5c",
  "key9": "n4oaUms8HqhmAhyaytNrxPCfLZwLYzkS1WjqX8SY8WW988jddi6u6KwB4earZf8fnGBLT85hHvCLWGnNdGaAt2L",
  "key10": "4zotuZCkZ1sxnWqLn9zQgQHxCbKo5srzN342u5ba4MyK1yNNm48iTQ8wiwCajuSkviM3jhARp34TQq9o4rPKcTfn",
  "key11": "24EhSrYHkHii1V2VC1U4iDKCygpAGEhnAp8DgwbtBvJA8f3SWXuuaYZ5HyN3UQi1dwABv4KHkRBUt7BbSmHbrqQq",
  "key12": "4GYfUubMr7s5nEtXq3F8knGL718kjFnwe1b2UeaPLfJQn1qQxWHnhdFvHWxSvXZsKKo3Mcs9ftv9J4JKAzNbKT2W",
  "key13": "aPrSfvNVpJgerbV2Gx333Thfxzo4k3GuUZHP2rw4aMxtRsEKDZg1R4858KqKVPRauThr5ULC8fh8znqj67ycw8C",
  "key14": "2ETVwfMrqsiXEb3MLzs9jU2K8a3BkpKGbpND712Nbq1vfKXhrwSEiLR2pign6dPqAzbGazEPyHwumsncmzDJUbyF",
  "key15": "3pYpoyUeQnBEM2RXtJv189ZQgWf8vocnCWTPNWsxRKkjefgiyALnug5EPWVYoyckJymKXkepzq9P7cTRs3zMEvry",
  "key16": "xmG4miaUXZcL5NBt2fWuQb4y5pCyDufTgwLjLeELfgrbqozBvThTdxwQ8mcMjxH3KwPAGdA6LBZnW8GQm2Ck9Bp",
  "key17": "5PxMNJQGBbq1WcGzsVq6cLTPsA6P7JHtKbw8E9pcSb5VTzW9PQpTEtj2VEZGSRNxtReu7KS6Emc7QbjmZPsowBXo",
  "key18": "29NcLj8kH8evzMNzPZL32JFDXrrbkP4kMduBWv4X6N5276rXLRG8dAcccNYnpvZrskXYCWgM1WEFiAuJP1XSiJao",
  "key19": "WkUx68R4rwYREdsvY13Qsmmdapx5MoS9fgtx4z1jp92KVkokJKREdznLfLGwPJRJVZN2pDQe9GHk2fVfXVfu1uE",
  "key20": "82FNKmRosMwtH53iLzMKT1tU9RrMC5hCTUVYU9qaG3d284EusKqfWGctABQnzUQM8y5xo8TQ4XQruYBL8AXecFH",
  "key21": "2ZSbjVeskGKfebbZQY6WN3EeEAEdxeZXXkjHtqGeevKHDm8WPKu5R6KGmjtbokhUab117hmBx1eeYpHwaBCpgV64",
  "key22": "4SkPaiwNv1jQggVh7dmEmGqf8NW6WLYQxEcntMndXRuqk6vM1KuTcuAfHdPzmtzAwfbTHsssiWxuDrZ5UQgVErXw",
  "key23": "3y3YFDRPNG5RDEDjryMYVp4yzr835gG7g9qjEYV47f4Fur86puwoYyx2wY94jC5qQVfRp2od3gVGC1iWMCzcGKmv",
  "key24": "2VTxYt9o2JuAsYEDp4uVpgnjL2sMt1chmbcy6D5JiUY96T5JJdtfHTMPqparVvkfv9jzPWsVBpMoGSav8NNHiD5m",
  "key25": "53Lrak1q2aYHtYo9oBrUPuuQRoJTMoxFsU9Kkqfowrsz1KNZXU94LfmZhQJnP1fBH5VvgJK3uPZtKMXzd1ZPzJzk",
  "key26": "cBmET8AQf88cSQdAbbn1wnA85SRRstenb3NHDC2Lgo7z8i8FKsMACZevpY1QHX9y6TTah4VxdtMzwymaePHVcZD",
  "key27": "2yx8Dnu37MtFrB2ubHTPJ1wJRYNEEY7hf3Hh1eKqrRh5DJM1tx5qdJD3Rqekv341w2ptHiap9PofjqcGZjBUd4nU",
  "key28": "3QKECUL2fnhGUHVxgzrCNbQyaFQJrp1ZW93miQjKs5oze6DUroKKo64L9DinLEwqLGP9bUZkhJyEnNMNgJxGqWCR",
  "key29": "5UhLPtkHNLvTTGD96jgLuSZnBgZ1y2WMXcBiZtkzjUGwbC4ErNpyGWSwk4P1VY1kpHAiy7yjTv3wjzHWEyFFzw9w",
  "key30": "21PTFrosrkDk7i2JroKirMnJxQDMhXBYMUM5x1F6PyoNEL2geCGxinuv7u9QixQDt9fMGxNLfCLp8dS6r7tzS2UV",
  "key31": "iGQTkyc4M5khtg1H5WDUvwktXindRRjEavd14jvQ8BRjyDXkcpQ2xjvXhD8noTXo1jhYwXVmX8S1qA6iYnDea6d",
  "key32": "5cXsHUKGuDc7JveA1ydMGihu9HSkuoBVQEYRMda69egmsyQ59DxCb18WZLehjq9RyGQReUm68W8V9j6n6WrWCRdC",
  "key33": "5Rr1VcEuXKfSPf3faAQ8sMcHRvhZaAhVJJpU8T9TaEgaHYo26vwLWJbNt3XtxpFf9XzpSRvgS4hsor2MovtMiLeU",
  "key34": "32aZUHjwD4ZGpn9c5ryXWsAji8XB2SSRJKYo4yfe2MmZ7ymsA56ea8ams95EDv5NqpJRMCMChr4LuBTuGpLUAhKM",
  "key35": "4CYVyqyxRDBhyoitwzpmfGPL1ymYDLsZTJTK1pVqMJKjKf8XSPKSkXLTw3vAtxGKra7uEypcM2zVuw3hfsLjtRLS",
  "key36": "5t7wcpWZWUgFmiBd9KDGUEdUELQVjaBNvydUXdgBHe939RbZCcktH7nECbLEnMfdZjb48CtaqmokSLseu36Jfob8",
  "key37": "3bLxc5FGqJ66AibemKSDrAuzyqBpqCqb6w9YDDyFKPT3JrbZgnPjQ8gL5UzoBxbcnYcnMA9ikejeFVN1u7afwqxX",
  "key38": "4DXWX4vuLcwgHm6dgoj9tLBp5Pf6pLnvkLyhknrSG4kCAhe8SNvELgEJNzvnRZaUt41N43cJCavHWyTpFCjBzb9P",
  "key39": "5WMpgVJuRCketN5x7p6cYmTjdSFB1PgWBoukqyUtSxEk8VsU6ZBqDYFwXasTSYQoq2EVX8VSdCFjSDoEXLAtkqgx",
  "key40": "2yRyZRBUnLMe6QMNYDeKCtebkt57FXtQDKSqohucqH1z9SdgzhRJYa3hzGsELUNF5txWXk8jJHwvfQP2scjmGuhJ",
  "key41": "3JVnMtT5gH64BxLd5kFfp6LvZz66BnzAc5aicQUJayT9QSEq3R9oerMst1B1t4h6bcUQCVeiyrhgggFqUqpPqFbE",
  "key42": "27cQCt9wc5Tn7Lr116HMCD4FeHJGxUs79hWFyy8aVkX9RAJaDq3sM8wjwjwADGn7eMLQtA5S8ujhwczzqBDcrSQs",
  "key43": "2ZL3KmPCqNTYwhUu3e6bfgoe9PQLvAucPthDAZ1BECx1sUsK8kvQJqEyifohyqNF51M9jnyJauwHufuDdM6CqRx2",
  "key44": "4EXpzVAjxAY5XiUawMQrFtsVdWqajnHiVxAYpQVGuiurVXP5epE4voZ3kpiq8w5CMvXic5gHKkd9g7ezA9gX3YHs"
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
