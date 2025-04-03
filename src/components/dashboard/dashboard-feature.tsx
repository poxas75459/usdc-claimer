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
    "22Mzj1zJaaG3rd71YszaP89KmqTgKRC5Wp7ofzC3tLQhLwxMf931kBEVbeWCJzHjvt7H8MRzUf35md2PwUEuxrsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9p8ECSRRc88p9TxGgBuCKJRkcMUJNzZjVkD1joTKF7Euf5WCFy86x3cuPn1oTP4qWUwHMiQUaGEdSKUbSUmgAF",
  "key1": "3o4FKKq4epw6HfVRswjY5disgEsAimEipBJgmwHkKL6Gf9TQrHBDouHrnxw1r4xzA8dQ1GUyqBwWTYmF6icC57G1",
  "key2": "2KFnthZSQQW3YQ8UAN3GAzN7LxYA6F5CgVi4T8C3nkzbN3u5588QcUVgtDEMfhAvYrAjJvB5nXPeqPZBjxmyn1qk",
  "key3": "h6xHC4V1ENDmgYNVsXLDUDzWJbfBXfuCWYiDmyfWwkeLxiHpzqtpw6i2VsA2TAU2ATBevTk7Y2pUiH7vg4A95Jx",
  "key4": "2hf2V6Cx223sSkZE1iyVyDXW1p2XP4fxUp2GB1kGksUg8vxj7pLkZNXMRBg1a5DL8EciSCfavD6p28tLmaqkFSgY",
  "key5": "3HTRv9hC9WgtQjupQXeCCsPqPcB9LoaM9mGbJaiYEFno3f9cBsUtc1CBfj6cTVMWSaDYEtNyJxH24DnNE8YUKcV1",
  "key6": "HJfUmyUmfkoStvUpziVHrhNT1sbm337omC9RWbNikCvBQ4QH8jpHKEZKmNXNm21KZpAyuzDNLWbcRPXfUFXpYA2",
  "key7": "5tP1ckqCGYDsHtnqBsA2LpmGuDyNyqdzSKTZVTrGpNcDnyYwDeqyG9DiwjDNUAMNG35J26xNstJ5KLtD45HxQNVD",
  "key8": "3scrj2mUP9w5WZmR6L5ggNfiMK1MAkPjmiDyfgHJ5qGQ5RqVUXkh5KqXqvr7LrvQYy16FcMt2NyGRrfSeRfhbz9M",
  "key9": "s9Sphs6Cx3SNiyoLXxos1M5iPDKv1sX4jVwq4SeuV46MAk7b2bkPAebUb1xFq5PzEQ8uQ8PZBxVMmLAL5JMHQ5v",
  "key10": "46fSqJ9H121dEqAuP3GfwRFfy2B9s4CHGQ17myXfUjgk5UrEzde2Z25cDycNoft5vUNNiVyHLWCT5HZCsnzBCcKd",
  "key11": "5gTALvpP8QpgbrWgyJxQZnqh67dhBQPgL2iLUBXZACziZRCVoeTAn3wN2qgZkv36b27v1mzff561VCjed9suo69e",
  "key12": "2WEN7B54oetaNfJWXzzFCNuaXN4mEmKXgmA6UJHyw2unRobpBJFMaYYE8HVoDPK29farifszKsyL6fXstkux6Xzj",
  "key13": "4dsm5LpTEY6oru3E6gHtwK5tQ6kHFuu7ys7qURnN1ti3iurtx8NYv5v8FKcsE9rgEigEt7vjfyJMMCBysg3QTS84",
  "key14": "5mmcSdZ1bFABb9GiwMi6VGbaqFx54jaHBf7faD5UbpC32aDZXFRiNBMAcV6sqLX9s4bPRe26w92tmfWeEtZABWQz",
  "key15": "3eMQ5peeg6prp4tXA62WQFX2TFzCoTYoX6aTKNXFzkKzJuYAw9mHY1Bfk4WXKMbWXaS5fzifs9An8PpwXfPUjEm6",
  "key16": "4P5MkVPHKiSg1rWg7RdmtW1RgZVQq6P5m2MT9itxBqbcrf71Vdp5vdLsS2r55qYe91LcJ4jyMaHMWD3R4p9GUjXf",
  "key17": "2xf31KHZz2FuyYQa5G7CUkCs1jyjviC5CqWeXLjKWsugZgcQJ9EHYHMeB5APtQLPcq2x6iWmqDx6rQcEgbu9ET2f",
  "key18": "35XjN6RDinGNpESUvc1A4gJsZjGo96mz4LM1c83R4MeoKKQLhTuyFBtDs2gxmDdzDp3k6Ank3yj6gpvCcdHje7m9",
  "key19": "4LzkRxJpdBZkbjiVs23MqjN5SMSPdLdgWZGTsoHxd4fCuQct6Jm26dm1UjEaB1nf3BkQ3J5trGsJ1YZkvAvJEcyX",
  "key20": "ViFfWMVQNcxZqTik3zRmo45PULFdDr1XVnScXwDcFmyhsJj4DfvYBxRnrB13BBfoP3SyvDQDfp8LmDgkn4qsNgz",
  "key21": "2CanGsExgUbGsVd1icPjW8eSfdv45cfGLQZtsLr8yQxLsb7FBcwP36hFBZrdJxJnL1dtxeuXwDkLgoEePPBty9QW",
  "key22": "Q8RGkky3ceKXoPSeZoJkkV48BsxFFQz6tQvtRxNzUGzJkzyGYnePUfK2EYFhEDBUyhTGZvrvEewsfN2jHwnhQTS",
  "key23": "V3sxxYbdYAZ4sFfMu5hDTnCLcGGqbsqiLxPVMtNpcNyjuA2c1mZxffnugu6YmLq3ddv18phFjLiUEPkD4GDLbr9",
  "key24": "XGaHf32qyPc4bxBURMCrHx7aT2uJpdyiFqVCz8JMEpLK14PCQpFM1mwoNNWVAdnid4jvExCGkZZUPeiQmMVjEYp",
  "key25": "41JotpkX5imhaRwCcLtPJb18tnBL4E9cjsGYgwvufiE3kon9sMXFeeN9iESiHDQfrB3UshfryVVMCvrahcLEUmiK",
  "key26": "28XE944jy3wZMkt3s9d5zwE9jrp9pC51S8idWDuyLhcUacRmh4hSPV2VpJtFXGh4qovGkrJZVXLK43J2yAvNkxMn",
  "key27": "66rsEnB3Eyegpn3Uqgi5bL1Zn9CqAHe3FUznLhteMe7T986wzfER361uCtNaLxd5yRpaqdcRnWSZWi2sc1GcMpBM",
  "key28": "5fcpWcshSvgu8sf3gQX8AAH7PjL8H3cq2pbNUmN1YaPbN1HLMVSsgN4X3EmqbE9dTRhMbhnNiHpuK4ooqEb2cKP5",
  "key29": "2VQ2mZpBQqx5FZxFtdNUdvXZEwD6DhtAXbXaVDTGytyvwdzJ7bcbQJ9gfrjBpCdhezTXQQGiTrAdR7iN9NZdWh9D",
  "key30": "676crPV4xmYNRgS6FLNCCYJEiPcV4gkRgQwm5rmJTFgpdNSLrnGnwk5pfjg3SRz9PmhMNoW9MEZbjDPE7KXMUXSn",
  "key31": "489n1umhpBkyKX615QHLaJCFGGTobQp4R3GXoHthef1YES1Z8CLejUARgS7pLea2GgEXiBBAwXVGNDno9WYS34BT",
  "key32": "56CYewmKNgLvtudBV2qX4K63iuNKazf16qYAsgL7GVsbTprhRLJkKoU1teQjqrSo3qmohY1wikgM59AiHWVX69DX",
  "key33": "4Pj1wDaqgGvvaMdxQJGTVPsY8rtrDrM4rUbNThQupZxJAnWt9UXapXmTA5gdW32dQ4YQuFEjdXFJ2KPLi12mir7M",
  "key34": "63M4y7m63B75jZRfFSKD1vSYs3VvuKYyU82N5pRKXUdizipeWV9Rb1BKAtjF9cxgbckLPf3naKhRFLbsWnCnVx3C",
  "key35": "5nzMyKrh38F15CCbaq33Dd1UTFhLXQ1Yu4PWhL37WQZm4D6CeZMkLfzbW1hjAVRkCjW9mSH6Apicn3X3Tzsvdxi6",
  "key36": "5fBBVkFQiPoAjE2g4nApck9UAeuGj1hLFpp1aKTM8kGDGxLe3tNALR2G3wBnfshirnBryeLewLCWGjz3kUkThYnV",
  "key37": "5am78cThiUNLi1SyqfWSbWvEExdELq4a9VwZoGpacRYyv72dr8oW4XUysrZAoyXa1ad6WQMZ4tWmJSvJjBjYCjXZ",
  "key38": "5JwD8AzzmYHrKqTsNvp4hBzptbD7SJyjEBzE6JKA9cQghuhqcXFvpgsc2HXpPf27mPTGFu7b6G14stBSRGovCihH",
  "key39": "4sEbYtggmHAeuGdzrJXLoCRKcR5kqu3Wwm13xhKV99qtm5JpnEUvywfjTRxBPy5nBk3T8RGEdANkEzdMKxhQpPzc",
  "key40": "2zwUkuZiroghZYUg7xtgBQXSHqF9pAfUoKVfpVbJcBUPtMjcipmxR73hiSTmzauEeyVvZ2gPHuBbZpUXpqkyZksw",
  "key41": "2adjbXsJ5BYsqy3ZmescMjUYfruoFxPPLcN2kfxayTLkw48PbsVKPZtVNEwsfwLRuLoqncbpGceCirBy3r9F1z7K",
  "key42": "59PDHYCUMz8wuEiVvcnXsTLmZBFoa3v1TtQpuBG1g5SRkBxhqHU5vGxYAptZQaUsMEp6cJv92XhBvKDAWiKjZjni",
  "key43": "2VQdHaBoVansvUAMEGjK347d9CeFQ8cnUUZJBaoj85DYwGNmYoK16MHdkB96wojt9mj36mXj4tLa7w4Brfng4RTE",
  "key44": "23wxjJqDzjHEKoAt4nR67ekbhRbSyZNi6Dmpxgi2TKUrN5UR941LhGrFUQzpb19W5yb4rhNVR2b55AemiHQbTt4P"
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
