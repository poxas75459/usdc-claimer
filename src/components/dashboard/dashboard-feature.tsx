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
    "2HcthRnmQW3enbooTgYVuvSXZJT2P772B6bjwib1J4bVa1ZpdVTtq9fe7dTwJM4x1v8h8TeCQGX4h3Z3vAGm3RuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7f5uHi8jTZLpYRqgGsNJvVwZYS5fHFbcmDEzThrbyjU2DJhoW45R5wxvb4Qeco3MFXf6Wb89yuve2vQTPTVbM1",
  "key1": "2MBhMzB9GvMxLt45h6w8WtM4Lej8aGDRAEQducchSpAt126zN2SpmUZDUX5aRk2QKTGTf4HkwARdSDJP3YoVUweZ",
  "key2": "45N5J8WaVGWQZyYEZRM8bxBkyYk46DTjjQrTNonPfPoTMgALY14w7LHeWEjbCtKyWyA1uDNoJ63f1LJ2MgQ1FLom",
  "key3": "25RmCQ7CruAh6ZXWp95oJdkNKJTQgFM1cWXgnHFGLDmcGYqErZmLKY3uwUL8Bn9KqkSYEnB2fsE2rxc34vouAsjs",
  "key4": "NKJkhaVSoKq5nL5ACKmeP4XuVqwxnUoeupRdK9JbNKnDrGumviFyx3aw3brxkFXaZ4VEhfGVQxCZNb3pzSTFW2Q",
  "key5": "24BuW9WqepG551DJnncWb3tP6PhMiVC8SZUwGXHKJw6WJww2r2mR9A4sTs7bz6onMpnuZzugMAMswjhEpaTrqzXa",
  "key6": "4AR9ym2mom38pz1rsXLTazvmQfqucNWKEZo5ZhcFx8TrpS8SiausVyUmgr9dLJn8qxAjc5QRvrcE7v5k1nhXRmFD",
  "key7": "4cVQSWgFNPX5TG1mgpKrErjzp4Uxx926T4MkZ2BwtxZ5iCcd28t8yf7xgWWHrKvnAidCHrSfbFo4aPwuvGAUgRd6",
  "key8": "5Vx864kof9NcxZPmMfYfgUQRac5hYF1qPcFyZXfgiRPNFbmTge2fTieLbHwDy1bP2SJd1Jnj9ehhqPoqVNhoWL8u",
  "key9": "2KdcmGs3wU1paPpLSvHWzDZvFs9reobBpdWe2PBhjhaYpXXnLaUHk2JCPSHQaC7pgGZ6MfUqKGRJa6BN2rCUDGXf",
  "key10": "5YTWaeUPYnreyEqvJffZo5hwDHxgqMuTkmuSMdrPkU8kZVC77vPFA5FqkvZtdVUr9wYobcRLsKUUSmjL4nu94zwR",
  "key11": "4URm1nPEekYCPPfH3SRZRvFgFK4TF2e2xVKE8pwzbPpdfUXdNQ1ey6oSjMBZMZY6gKDpgGiCyKP52SSR3iqmwEKT",
  "key12": "4av43mHzK9AFd9q5KAepQYnDsVCP15zVzpiMoRnWE86znz11MESBpapyohFecmCrFBZq7YBFwojKisihmed2ggLz",
  "key13": "3fhzVotb459BoLJ9TMLz1JTxPSSYqzSCSCFet2Mk2HHZP5idc14Fwrz5K2oRcD361L2CTvXzHfevjNTvmhLFER6h",
  "key14": "T1HEVDmHKegZcnqmNgMv32Qwfzejih8LNJxyoKbfLw1Q34KWSH1RVZ5Teox6wLt47ord5YosctdEREze7gGHH1S",
  "key15": "4JYp63igJkrQFNJwQKzoVg1PBTwmLpU7ZoPEJdV7YweGrrnWAc8MFvEcUtxyVUyHMEkiJRxdJYTusBTbe1RdCJGB",
  "key16": "2V4S9ceZXHxLWdZ29GbjYdKH1AXKuVy2ghAUra4SbnPF4mdtDQ7fBAdhydQVQCDUjxUpQyYG6BM8tQZHPuTXBtDb",
  "key17": "5sr5HAFDEj3P7q3WP8FooF5Gab1JsLaPXbTxbsWNxPBuXnWLkaStMBwKie1VcYp1G2H5SeonWSVTYmMptnof2ZPF",
  "key18": "4hWiAqLbPZ2L3SUEqxrbtEsXyk7c8zxFaFSAT4XPWoq7sr3NpEPQJs1jvW4xf3AeYa9ve18PEN8WGMTDqFXEKkc1",
  "key19": "5PSRoZCFELEytTAUoLRRu3XNFxsyxLnQJenWCQVUPNrxddmLkEwqrTz1u2ZLYHL3gbDDCs5qrUDeRuJdfR9AkByn",
  "key20": "35kq5HUXb16hEjSZj8Qa6M7zEfeNk9cHg7s8Sip4AL13yrufRG74b7aTd5igM1gyJb6KW6sNpNHBtTpVGED5DDWh",
  "key21": "65ckYSPBa7Gw8bPxNGc3HdvaDkfbuimiH1vRHicDTcAo9DsBU494M7ifxQet9YMmoXm2by9fHVKmVxhUr9M7xRkC",
  "key22": "4CYwDzU1MNeW3Fgf5AGDJQsEaksS7WFXB3GdpgydK2rssZoAwFS8Phz2BiZuKno9D5ETa2rV2ZTcYRX4hxg8aQWN",
  "key23": "2qGHHpSzd4BLLGFRWzY26G8daB6VNH8P1PytBMUebmyU8h3iaFYAnGzgcbxm6rspXVFUb3qtHDq2GHbYBrJWCerf",
  "key24": "5nvfghCmLSi9cfmQ3XfH4cScnLyUtggMfMZhVM8PuMVgCwQkBoyWtPkGk9k5LHbtEz1ZezCyQNfTFHa6jucxr31h",
  "key25": "5andTD9uZq3LJucxTBFDmCnR4PTrTC7GCqB5FzQL376aVvk3FDkxjGT7fZR7wujn6wihSUgpvm1EzcLyCob2eRbh",
  "key26": "4rx3ryoyAnVUU6spxedwiiW2Un2HGybc5jrkGNgGBowYZjo5bv7gp9a1qqpMHavP1w6JJsYMjxs5fsnCYGWeq795",
  "key27": "2yA28SPraVRijM9hzYGPKsCLKX6JXuUKvxCB68Z5eDxbSE8pgfy2CUkmq9yAw6evjsRTpwVExe7Yw3brUpERG8cs",
  "key28": "2mP4Scq6C5XAXdVHrpsiz4pG8VVFqjcQxm4eFraxpB2ySyEtrsGMnCfZ7HqjzFEzaUn8YW7LdyTvTfQT6PRnMib1",
  "key29": "4H5qHtEfRLkGv74V6iXwU1cvw3DqUaK5gGWsVyfuX2DKU3dvSNG4SrvRZXsHV9A3KqzErpjD4gtzPP1nhuumZQ7P",
  "key30": "2AVvgMs5X42wpNZJFpyRfFp8VbxDomPkwDX6FA7ZKMzvJ7FQu9Zr1B3e6pjSJbcWk3Yu9SjoNCncQk6Rcoc8eS2V",
  "key31": "3MSEHo8evWgWknFLH9ZfZBVDomSMBaHc9JJGXdn3t2taZMJckZngx7arnHjCTp5rv2tjtJNJFJoKk5EeySQ27ZKc"
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
