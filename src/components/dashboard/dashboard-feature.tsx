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
    "4VCYqAZKPdWqCWFpiVU8wZR5Rpit2CLYQsodN4q1uM4vbHpQkee4cKFxPWcurUeLzVjoDLEQKV7PJxy9o6SaMQwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guHWMaPAwH4TxjBaKLi9m4RDwx2nNp7Vmgd5zUgiuuqoH6GL7YCCBoc6D4psSkHw44sMtrEYeWJqhSz7sND34AS",
  "key1": "4uS8LLDSBxQL4RJWVkzBh9nXZda6T4UEwiFbkSaT9AWDG5sPMDLPH8Pf2yzxmZz5Lq5fEZAmkaecXMnpGN7xVpMD",
  "key2": "62mvD85GRtJ6PKPg2zSaX9E9XVL7gm9au8FPbpW4hDnESv5vgY4j66McxMDTnG4cwzdtfkrfBw6QYVrhGwEwLmEQ",
  "key3": "349vGnmZAS5jj3YeVaqSoRtoi8aFbc2JFnSr6XMnEbHiubbTFUP5KXgT2nVZnUNmUbus9mCEJvmVJ1Nc1nfPebfW",
  "key4": "5HVjj63aAtY7zR8ZUFpjZRtkCpDe3AsRQMfcLgDaPMQQAL11eHBnKUuqvb5vDVgwsbjvinfaCBcHx5AjMQDbEZfr",
  "key5": "4DWRBL1oG4GANvWzXjr4B4BNWTeoAcJW1n3vrjwcYue9Q7qPxCEP13YvwQMamVHMyqr2B65TS62vFFisNdwppYWU",
  "key6": "546V28ijSKFEp8oBpbCHc7goZxNnrCMqXMx1SyCT2hZ78FYEp1rWTQ73z8DYHEWhSVKRanDfBFguLs2vzM8Ygr2g",
  "key7": "3tm8zq8zSScxuYDepdnUU2VXHpuM24vLsvG8ZoVCmpTcWMZAJ52CQRm8cAAXUDPmHwXhottE6gES6MpthYXoyUiW",
  "key8": "5ZR5ognKaBfUWRFfiQH43bwii2ZkzFiFoV5c19WoSLamyc7uZGDY9k9i1SZRzKKzcDKVU6Q4EX6s2PEd5sDsFBrn",
  "key9": "2uaX9YEzaXnjNHbZeKHzrcAKrsTtGXXC7ysPHaogkvtmx8zmh8YDcZ2n6wvxmBtENgoiMgSvmzCjo3JnBw9TURaz",
  "key10": "5CEGMgXeD19G4SyTUGbMU7NVL7mxLHijvyWF9nY8uJqAFtpo2NJp9VeLfNoZYTPBcvUW9o83uzo12egZNkQ49VrV",
  "key11": "LQzLbbNidbz7orSMMD7YxHb6djVmU54gxegQG7kBZoJDPAFXZ1haMiEk8zK9PsKLwE5pL6Gy56Qton2mzVssbRm",
  "key12": "5XvvpAmTJtbnkUcoF52b6SmDRXJy3UBYUCoQNRf4asepj8sayB4HR9BEqgWRHKvAHGj6ia1kcpytp1T1C8rqs8B4",
  "key13": "3FwhCTnrJWvqkzjwmrfTY1Rebn9M9voVEqwG9a214VbCwRKpFa6Yw96vboSRba85Bf1yZpp6GJgPDusf1SxzccXC",
  "key14": "3TeAHoDu7STxAia8X2w2XrgkZNGbSjQTaveXYoejq4Dp2s72W8s7R7199R2FKjS8q1p1tKtRpj7EV6aLwdpvpGEH",
  "key15": "3TWru3T9mEvdeSiHFEVLhbd2ZcRUkSzH5pHNtAS5HF2ePwsaBRT1p4FU8WHu3Nr4rfkKnh2ZEUgvNwhf6ACPRn9d",
  "key16": "a7NAyTFwKfWicsUs5vcx1CGH9hodZsru7HPxK3mtFZs34gjaFvQDwNZnDTtnaGbNZi96xkhYVH1vb1Z6iTtJZjJ",
  "key17": "5qiLg7dzPhEnVNSf7DKRCZ8v19Gk4obfEf1Jw1HczZpdCu8vPtZPotBNSvpvc63hLedfKEVjiuvQ2W7UhejbzgZM",
  "key18": "3CnBBqTLpY6rrZZdixFAx9c47Y7QVwLQ9J892F41J2b7fXp93nkiQhxocqmra6P1tC6WvAzbbRvmygnRXpLTwxnH",
  "key19": "54zkUcLc99YnTNQbP4s5m8x6FLm31ohCwWbxMndGGPAuMfB4wkAwyZ6saHdhFCnNHbdL1YtH4Z8mMRpM9x9JRCJp",
  "key20": "3EnTsz1tWthVa2spXFC8EaSf43jvpKVWQ8NiaKXRUSWTARoukbqJvQEJWxVtEmzTQVMQrNCfzcGVkHGjv6M9o2wA",
  "key21": "2oXGjxbzy7B1AxqnT3k43mc1VbXeZkP8nFaj3NUUp18crGVDyydQzZ6zvxCuPgCakp19QuLsjrZUr3T1Qcrnt2tw",
  "key22": "5BxgKVVvQX3aQwY3hFecS3jEVWfFcF5S5W7fYJfEk6jj9T9mnDajt1MDzpX7txHpeposuekbnb1ai8gAQW6XM9KX",
  "key23": "2kP4SjTX6maiJ59JmtjC2YtrQYkYfNzvizCYyQRb8s8kVXMMGuAqx1iDNrNgmuD8NQxWmCRcfeNYHFor8RZBsiju",
  "key24": "5QAnR7rUC5gGWukPSXoxnhMZ3dcd1zKCqrP4LjASbBhC9KnhaLjXPkmgGRuvrvLL3qhw5grmx2rNuo1AFfJYqtjh",
  "key25": "2p5n3HrhcMcqAt9P5m7jbbPDSVt2suTMCFb8jccH5YKLcHGDzWcfVC8trbz7CnGZ1mZTRGtHTRESw8XtR85dRJfS",
  "key26": "xj1EoZUiwf4ZLKWt8343rWnpWHdTNZqdbMCiMEwfB5giWvnjn72DNGYxaP98N6Vy9oqSERu9XspRt6jHaQxsWpp",
  "key27": "6678akF4q6jLsd9YeEnXJpTvtAAjadod91Pw4ZUoGDcUvbAFyFwUi3QM5PXTVJ5PxhwsZf6BZ7wP4YEjf9tfrY6g",
  "key28": "46Cu9ZksB7SaKaJe4KQQH8sTaQL4AJcW7WFU19551DDrXr4FyGpaDqSQ3gzhmSzcNBiUcryPiL4EpgKH451ck3uL",
  "key29": "3ZpGoWAFXrbNc2xCBWXMGDhwAfrjYsZZsU1fuecRoy8GCXwAnF341yf6kjxmYTF68nHuUf1GfbAxkRae9GRbbDEt",
  "key30": "3EMhsMf2ze3L2MJV8RA1oUyFNtxEHitiUMVMHkXMps4Yp2kJWBAmmJdqdEJqcvKi7KuFDZV6Nd15Zx6et4uNFntX",
  "key31": "2zbCyq98HJsn57haaTsbjZbvDq7bEmiuKtgks7GsUx9kehrxTku5rBbsf6QwsW2GgxQCKsgZzYXGaJS6ZYXnfJwm",
  "key32": "5DyMNDeZGBoLjWUzw8GURSf9KoACSkCJiWk19z4yR51PczgEnfFsawQbKhHowyVku9mqzR9acBXRbstuuDgBaJye",
  "key33": "vwwS8sFY8fu9Jqvc9PvdmBsXWXjjAmjah6478XyU6fXLoNPCve7V5qfEiGu5RhntDYxexfLPtACCxnZQLTGYTj7",
  "key34": "XpyGXx9BMGmdnxSTMWMw17Hv6xBuA38y6oCut5cmVGSjL7nsLtVDvYszAizNQcwCYvS31uWo9HLg2h6GVLSPdmC",
  "key35": "2vBNT42eS4ae8Lrxtreh6x2E9XwDTPxQ1KoQcbFaRKWb3Sxc46biwXnYArErfWEud9GhN8oPFBgyv1krQyhh5Ynz",
  "key36": "24D2NHQgekmvSHRWRkQ6AjYvMLmCfaUQRCSi5UNYE495E1FgSNd6k8HuUh9SF4aTayDnKAZ95B9v4p6F1GhnGTW8",
  "key37": "43MWL8cvcPox81FdNZMCVGNmpNYDUdbSEPJN8nLpmMpo56JJc8yKXVZtSTZE9TYrHpwa2Kc6dnSHz2WrMQJHjXAN",
  "key38": "4i9Ei48rJQCSZiefeYo7BVnSzagwJpiby5FnE5eo37t3bHqtskC5RdaDR3AW3uTQRbdm5QcL15Lnc7kK6ZETcTsR",
  "key39": "3TQNChrNPDAJRfiqFfMcYdwNqUxdgovM8v9mZ8vskKpMPbKy2pWXWWmUeb6vDVsuNjaqhx7VkLmyeWF9z5Cdriwt",
  "key40": "qaZtGju64TKxLajfaQnxZswNViLRbzKXySASAB3JxRhKHEoNyn1FVbgZMY1rsRWRTQUx5BfPBPm12BNio5ryDVd"
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
