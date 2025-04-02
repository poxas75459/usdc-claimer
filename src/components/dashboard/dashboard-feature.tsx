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
    "3mQrKtpyFiA9Mr7df8tapS25oBjv8CWymQkz5r3cTgMfnbsvke4ywisPh4j3Rk8yt3JQBk4AziWYoVe8pREmHneq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45CPgsfcaXuUL5tgEqe2414mdwCVECwTDSXaEN8pP4ruLT4YLht6ReFxruAXi2SPyjB9ccSrKUoJAz6SBr6SYPkJ",
  "key1": "552cw4r1mAK4dJyUBYi6jy4cT4gcMBVbYthTEnCRpJQZYG4Q1VjPYrLytykU4MQFjeoZ9Sakot2YTH6PAskSS2q7",
  "key2": "4SnApk9J69gR3SLKpu1hBz9wJxfjaTes4jmg4LXaUY3ZCjm67GyMdbtzBd613q3uYD8WF9snvhVBE9ZXoumNWCuc",
  "key3": "2WSEyPD3S8fAQbr7RrSN5G6aRxcb71k1krKhxV5GQe3HX2TApATgE44xj93ta96N2V1ZwBh3DrUETLtXYJBEmCLK",
  "key4": "4rvNKGVDiPzXm4fQuMiPyd79MkHPDzhRDumKvGyoZ4Bu152SuhCEHhUdBmRFuPrw4y8FD4dBGoTjx4MZNMfT9zC9",
  "key5": "5xp4kEnS2DH73Mt8LF8NZj62Gq7fcCmCdst663FKfTkAZKeQ5vFfMKQTm1khWf8bL1Uog6ddUnJawsam9E9tFArM",
  "key6": "4UMmboFc9PpjGBamjkLFUahsdUjqbPpFzcwEbDd6cy37tSAVWnrtwh25pXyEUPCjG4kc2H7bi8YQmfRGmg2wMb6X",
  "key7": "3oyCVLvtsKVYx4M6XZMZjGwN4HaH6ZtnACpQCC9PSA1AzB1ABNRCGqvnu9w7ixoEsMUhVAvZj3PMdMSenckyoJmL",
  "key8": "2qfZpA6Q7Zqha6B1gJ3Hh6AfCXrnoJFDYH56eFvWkRsicY9eG6q5Mt9shWjmUgo7syDvdNmKaJQ3HV59kkRx6p7J",
  "key9": "3YDTSmQ9Q77bLBc711UCXyFEN5Di6PNd4X1c8nbsh1kt1pEVF8PKACc4PsxzS4BiWLkuUMbeK9HMg7Njaqv1oCvf",
  "key10": "4t3ad6izRLyoMKp9dvEPpmb3Fa5AaTBcHFdUqScexf6iWw74tmKKp2HUHrqyjL3LYNmj8R3JLFf1XyJNpfYmrfgx",
  "key11": "3SX8xFzc1AiksFAQFK1i7wZUouvY4PmZWtmknjq3ghKm1j9R257eWVshhLfULDuwts4Vv2QqhCXsFCQnKwQnp32o",
  "key12": "3x6A7k5jbt2ZrNDYtQDwcQdVvXxnNcD8XCrJhKSXAq7JcWFBWhz4TqFuakbauXEZEpQbbvwHL67fEN5ecXMPWfc2",
  "key13": "2rjquPrAPqXC5ZTN2F6LZhcwXxAuSKNSYHozj9cvzbp51w2AnpyG3jgQBooyXLHgrLVdMWBRbRgDj1w17kv7HX95",
  "key14": "46UmTHRRkuWYqon9rDZPfDddTQ9bj8TbYwWtstz7tucA7oRzBxyrfvjCxjpP3EBeE3XgWGAyFx7a1ucxFsmCVRnR",
  "key15": "4ZtPoAkzQkgu9W5XLE5YnHB8kXYKgofMVsAVGxaNDjcEFGN8968YVYQw5R4F67kXA9ejj1wzxFqqRg2Mw7QdYDAN",
  "key16": "2Tv8xM1xF68UtPsvxPBddcMvu7KCkcWkhk8RdusxbXtoVdwxQRJxNUAcbJCmAghYe1BCZ2XFs74NVUbc3NTmaRQE",
  "key17": "4BLqPmDDMmX2ddxgkW9Au682sCbhX28Nzhus9FDYCnW6jb48jUTEYtjKQ3wygVap2GgBxDCzBC6jvMTf7Ms4DmU3",
  "key18": "26QQwBTULRhU9dpfAvscni6MM8JT1o2wyX27sZu4DTmXMT44u41qPAEX8Xu4B8UGLNUzrCcDvFYAPY4PZsmzJgZo",
  "key19": "JoAgXi7kYoVSGAPPtiBN7dWBNg6qtSkAhih59oyPCM1yfZjs6bBMmMryNMAraiv5NtL4xjp3FP2HsEEFmFRhc4J",
  "key20": "2MSnfkfMoKHLSKxvDfwfAiKjRdPSL12VhGEmZ7foepyf2BvtnZjReKiv3ARVh6CJFn1Fr3e5wjTuadk2duGQzaF7",
  "key21": "C5sGtHqvZzGJo7EG1vfBh3fmkJ9jAWu3dwie5Z3puEb1EojFBKvz8gpdLrHam6JLsNffhq9qgaR1gTuEVdgjd1b",
  "key22": "4FznKQjpuRuYPmH3uZpbTfEA3KL4gdenxEbLTuS1XDfU7LqNoatzkQTNXdCKJkQkMwS9qKsbPQMDtqkQHXPv1wtA",
  "key23": "4R1UTs3DQ8GhwqoNvCa4SkiGUA6rt4Jc5txH2XHbchJrwpdJoPGuGEhxcajku6Ja6YWWL8oy1rkRxbaNJvoAUTwW",
  "key24": "2LYhXnbm17iAcMmrSg2P3PF9r3qStKqLeRcX3pwrTbbatXiU7Z3NMyJ9FJ7Sswu3Pg3AHxuBwGfkN3JsR9rHbR8Y",
  "key25": "5XnvEES6Z6bUbtdFLpPhiW1wfpXYpdepAWgS1ukyrFAByVAYFnDHLzsW2agUby38b5qQgCEmxooGR1kxyaAmmEKU",
  "key26": "4FVNubuckt26PjGrvn9e8xbhMsj7ep39ehCfvKnjcpejtJmKmU6EvApHspUzfWRSJ7aTPqYhrYnLMhbAcQL6ud2V",
  "key27": "3aJhyuHnr5Rk3YVFWzyeNFoqyoSsbPSEdpuBn75XdkHTprtgVc8pUBVcsEgV8dG9uqKK5ihPEyN4LS2jgPZGpSis",
  "key28": "9itASuRnhbQrxz1UwXAo4rAdhC6wGpcfij8Pxqy4RVbfcwDZC9hMvuJsvVPBwJGpAtwdiwkUpxFHgsvLMzQxkJg",
  "key29": "4juM5Gqgncio7NK68NYekU62KCW57j4koYec1qaichzWwwyF2MsdA1sco6gJwtgCiFGwDRw7no2G4aQfoX22YDfY",
  "key30": "fL3zVFXjSYUfjxNqVTaGMiNMgptcA4h75oKyjQyZo7MGjCfdgHXMxD19vBBrGUSV3R6dYA6y8rjamtRvwkeW8rX",
  "key31": "2vLrJ1AP6rDw76yTgqhkkxJ86s9AuZh8g89h1DZFN3HejZ6kQYxMC4BDfferFayp1Y2iugjbBLfw48CY5pF8dsan",
  "key32": "bTigUTXmop5MFv5WSa7EXEXAykF1iVuzTG96EWU3HtuPyEKtry63TZu3WecayNevKFgNrAWsxjTruCQPY7emE5d",
  "key33": "8nHtqYFvxev9KUsa4CaLw2Wve1TQ9toJbGhijaKLyMJLLXgns6GKBnWWsXWDMQmtecCYjftpuoWM43UEq1N3p1z",
  "key34": "3MoGU8VoFhxXjL7C4DMuLqHqz9MizBSUKV8fTBFReH8cHKXRMW8AVTQECZSUpCCNocRACJexd6L6zHAUKts6ZjpP",
  "key35": "5Z3VSUDbPHuyp1rANnDBshw2U9dndaiSstju1nHVAMjMHPeE2LFf3xUQ5BNw1VX2mjV8RPYFYAjGnjaXapajTe3m",
  "key36": "4kZezS9ZtuHv5Tx3De4g8mGiJuQ4e4Ve8U8LvRidT7vy5nJ4oQkjafcNxfgk2YGmVVNgDgZrJxQsHrLpneLPYxzE"
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
