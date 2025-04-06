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
    "PHssyBcmMS3UrE8WJ7D8YaypmZjdBSxNw4UaTan4KtadWzCZ4wp5YvkcfXCooMuE2iFp8RYbTZvM6jCeTyUKGTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56t6uqQ4EibEK14kTMc16PZ5gxzpwmPDz2YwyTYaBeEEansQaAnkLiNLUku6p952ToTMJ2e42ttkEj41Cayw73Nf",
  "key1": "w4kYypsStZx4ZvkqM8pZhvKQhb2nXZqcMDSM25rqE5VAYT78pNNSYi7LwQpRXJu1Jjt9D3vTaVbyQsiDzaz7XuA",
  "key2": "2wnmioeXN36JAB7AfReVDDi69DFtc3zqYTSPTKGQixsMew4g1LbsuZMf6N6wBacLLyEabk6MG75mBDQvKiQhpc8v",
  "key3": "3XQfHmEPbJfvhi3Fy6grMoPxYLNLJD6RjtMUCHME8gB862c6vMkTvYyHyPLkvGMFgzeMCawBQ4NfWxE6GMJPTjcJ",
  "key4": "4RWiMtuAdc8imu7zcrPgN3FKwxNF4DDBKS8PNAS7ND26dw9zZ5TtueeF9yjFrrCuaU1zpSC9FqH3DAcjBhi3fHsX",
  "key5": "5QvJUnmsTUmbt2kyLShvLqF8hh6YvcCEwPd997nM3YLLhQrdGnHug1HmaFtbUtTeCgJ67ZsnTu5mzTB9JcLfoMYG",
  "key6": "53JYE2ZszL6Repium4CjzfxFKCqEjYkQFrnF6Qaaf1jy6G7fxTMe9JHRXK3h6pRGv5HiHBSBthywqGrCnPGg6Dtz",
  "key7": "5zECgr1CkXEde5CQocYWMHrNqKdi22UKXTGmZRdYvfCB9MkCq8WwiXieL7g76pJPURdeDiomBAL7ucNF9GF5JWaS",
  "key8": "4Mn7CwnYXrLCuqdE5TJKDsniXtg1XnQ9CaGBtDL4ZWXxawqTX5aXPCXNyLj5ad9mWTh5W9oex3i9rdTAZ5Dorq6E",
  "key9": "46wF57E44ahQ2AQpbDEzRuPQFmTzLW8RvuuDwH1oXKtvEooFXjwcQpgDqtDPUwebdfYYEVvwxMKAPRmGGGDPLwR3",
  "key10": "4d7vs7NnT3KsFWbYsQS4wYL4ZPajxyEffxhSSPiMfv5inm2angpkggKn3bK1SFYA5LWue2YQ8EexP4aZYmgqJnDa",
  "key11": "2rGsR7Q4ffNjU2mx4BtRZ2jsHQcm2hXvxzrXvoKD23BP9DVCw6CtJKmKzc71CzWWGdEUNWyDNYkP7xYgH2PRb1c",
  "key12": "49pvjEZQpYhi1KPXE6VDdFxYcr9FtXdiguST4vRGGdxRvMhi8bjsAR3GvpVF2MB1JYDWPQceAXXNNiTmmHKenqU4",
  "key13": "zkAkrWERKUuJNHN2bDTpBBHCj9xKg4N1oAs1z7BDE8GwyUeJTsid4FnQT5wEriqiAzTAZ9jkmnkAHKQdg7t2s7W",
  "key14": "5oRFgyLTjgVXxcXaWEACtaZJnKBZTZ9v3xE2mhBqZ6JDvNL3T5XKKpEet3inimokzqTXqwZLJaf7qkRgk731BPB8",
  "key15": "gbPP1RuTtGdrDebPm723HYuC6Pv8othF7ypssas1jmneF1HB5QCd9ZCv5YW18hJeGrratabtL5QPhPyNTLtSpjP",
  "key16": "3YwK86pDYyXkohHTcUt2BiqKfmTEdwQ49DTSwES7jjzashrCLBrDfRLzEQF5XRHsHzKCvDJes1nsR7gxwismdhMq",
  "key17": "5nMZYBMnmUfmE9wiqAXBsxxvH1mFCMSr85b7K9bQSn9D8pZTUjyGRdFhjeoPDoMDS3aVs6chBcKMb2gZYP9vmyvM",
  "key18": "3wXWEEbcJ3q2XgSFJmNqXxbZrWm6vETFcZc5yUsuJfhfwPSgBZ9NQKEu4zvhH3PB3oDzR2UNYDEkFJYLXFUuqJjo",
  "key19": "bcVuusoRHkeueVpotxW2EuhzZC7DPvKJ2VbpRzAT6ftJvN8ut7R6sTM9uDAiu75rEy5NjzfSjpJ9r57fx7MbW5u",
  "key20": "43sSjyeP5c9RNNeL2MpKj7M3jKzEGCDKSRoxn9yU8FSjJafs6gq7kCS7hc5n9MM8Vbp2CfpKQPjwvjeMrGeAFG4t",
  "key21": "2e1RCeP9bK7CZRLbh4PmTqWT88H9jh9fP43k9SmejG9Y7UXVXyj2TrmeecNjAUTgpahgF8xTwnEdb8U9oVs8QrnB",
  "key22": "5kufEQasBBoyrp2C55NCGtQTraYre7yYAeMzK4p3txApUBH1KS858gf8LyyySXQYdpoXcehAP9pSPi4LAFTCQYtY",
  "key23": "22H3bQuBpa4vUev6QJ7ZxcdbLAFGfpxoBc4FwrHkSrYytoTM1SLS8n3dj32GLZgofZYs6B4hVTRJ577uqAC8jpRL",
  "key24": "43PXmbDPpMTSgNRx6fqWpKoCeNvNqMSAgdReuTVaWCuPWtiAHT1toyfrUwHFgVwJWd2YRJKZDqEcGEtyf9gCLSs3",
  "key25": "3ytasFYcfzEZNaPiL7LKy2uKL4ApZxzBGKrwXxpzoKLEyn4TjfTsA6h9HxKAeRbDwYfyscjpKVCeFNPsdUXrKDix",
  "key26": "4H942cffcEiiq6WWFUMxaz1pPEhCYXkzUCjiEL7B2uViDthN5B3nzCFt6e6Dew9geNEU4ngdiVzyEHqB9jYrMtqg",
  "key27": "2FSHSFme3YUBxp5ek5YZ2L4imQrUbwqEB3fCGmLNnCXv87yGdU6MHArhigVhToAicPaZhzj6AD2jx2kf1CkQVa1V",
  "key28": "2pdbwHpRSWd89VqUyXATbBrzD4ZfhsXtNU7dYJvenWpvgaDCQxUDRPmmufm4xpkeaqvazWprwqpBXWqmJU3Pw7pj",
  "key29": "ggaiJ2qVJZ9wKADFSxfMB2eNMnG4kHamMHp4gBa9hsCruuuyZvp4rS527vZtfJALXGJuse4yUMf2T1urTpQbvNM",
  "key30": "3XSDRoYJzGQP97Td6Fq2v8hw4kotUpzpNxQG9uNepJZGAnmG3SQPo8FN6UaYSZgN6VKF8TBf7NVsBzm1jewXyxtL",
  "key31": "kNBmuhgnHCnw7Tbdi5FWEbHUneX5nRsDDn7hw1SD3iNBpiYDh4rVs3gfBN9K19HB6WPRRZGfoNpRrX3v2sfoGBq",
  "key32": "DkQuNv6J9Z8dEsn8C8GvbPvTbzowxxCFk3CrGb537GBnZrNxxbxe9YSXj69zNaWNKQm4hdLBVBCJYi8AsjAa1Uf",
  "key33": "4wZNBAUyWiZ6q9JsW682uxfaGHDZLb32y25XPq4yWyDsixDrAnDhTcSkw21VXNqnQvFBonh3DwEwbUDdTCbHiFhx",
  "key34": "jZymYBxD2bYfqVmjmBtYZew2bpRHZupdazjdMpTMQuc5ndWeFXY4equ3mJ1M4X7N5SZAW4yGVbc5De2SkSRLpLa"
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
