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
    "4WZL1NWRassvVYGSeGFP3XYizun71qfYin65BDb1zEbT4pAdTgTyu1sHDGdiJF719puW1h69Wbc4ddvzAUUnYDNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSPAiwa3UoLrtn3ULyFiYWiGm2DuyjmaAXk7a29BkfoU2AhJSnSDmAhWG2FVs8aZthcCWCHiyCkRWaRAEyAVdcH",
  "key1": "HpLgi2Kv2ZX3t9CcCRzVaKjeP2TuwgaqwTxRAF1J3Lf1UaRfa6BEMKCfQB95iT9KHH21j6maLX86pTkspWrFL7h",
  "key2": "5ZPk3bFfJuWXggHd1Cn1p4GTqwcEkv8noTUXuysDUDkh4r1FUWWGn9pWic9Yx9TH2yPKdwDK5SXryobFJ7EhdXaQ",
  "key3": "4zcpA4bvPcq8WFMMKDEhUohatTFn1Y1Jy9d3eaLMPvB9kYpfAUo7E8fyMmoM8FCg9jP1WReurHMmKSqgqN4D65nr",
  "key4": "4D2NhRZ3nMV6EQjqpA9EynCwemuvzBnhArRg2yz8XSuACETpY4Htpo5EiufHuL5BMd1NY9z7wJkUV3Dozt8W1nrh",
  "key5": "3coxtfNonFWxcFGg6CVHhhUC6FC4hTA5wEJcS8XXaYRQeEBp8sCgCF9xwZge5SMKL5ZNUtAfZYHGefXU9gL7ZDg6",
  "key6": "2XgBKf4JHYGz3ZCiMvdT6iSfeLKC3mUj55FXErVzmN7p2KsLuApZKrvPbEXLmmmAAdtDyG6DPDoQybbcYSMkXFsE",
  "key7": "3V4ex9G5VoZMHB3EuPUTvP3oXq1SxDAXny8ov72eABiZETu4bqKvqLQi8nEmt2q3rEAz3y1M7b2XVaT2ZAUNVoe6",
  "key8": "5VmTKoAeoTPGtQH2cepnWrqxByoZNvvbnYYHosW1hB8CNUkcp8yAbtwvFLp2xETXB8sdKhC1kEQa6UP9TiKF9FL1",
  "key9": "24R45yVrgdia9zN8zKsc4cScyibffGxixmW9FbPKhovSh8gdfKCPzZkzgaZmkqVATc3dM94Z3odXtzadrNvaARJR",
  "key10": "4UtiMvmNeeK9UZT5sLgYFdbrgQh26fu2Uqn6VKAwD1FB7HMT9BERHMVeFtcgZbUjMFLP9NxuovH3htRzQP6oNUCB",
  "key11": "4RVkdVsu6hZjtZ7336UnDyYCD9xMmB3cyFFgdo9eyQbn4S7SauvYdsAKFSgbz3LiANdb2qbVCZ2UXgRKK3TB4TDo",
  "key12": "3SqUVLziebXbRTX1XZyHnubg9HYLfp9utQbX16WGugE33SAPSZEPsK9SBokV3ui2PWJrqKSxreAAKdsZ4VXZcTnW",
  "key13": "3qH33keZyFn4vHS4xYUAi1iio42p7xB7VpsihZC8qLuFUuiskhWVCtC4nqc5cJAifAebg9dYPGXf5Gr496GKN8G1",
  "key14": "5qgGZbysv2sF2gQXD5HXXtkb1G5fN9muHhKdgb97EWMR82ZUog6rtSWGsh6zzZrBSAAgKdhYfVsSqEr2b9JeCr9R",
  "key15": "479yep7fQhgjYGZxCoXesojbvYWWyX6GqdAhMeqW94KEgCUieQk5Q8PzRPEia2qPAhysXGHYWV9mQnzBJ8YaWUjy",
  "key16": "5H8aPs52roRPGqFYjpVrDdc2PHr6t8yRCaYbmkzJf2KQNjD1xEerUgX873yjvhKBcUf1iF7UCZsKZ5a9oJrH4QuR",
  "key17": "3NiEB7YCCN1psynxXQ2TU2Pizbdto8MsoP2GdP21nEje8jUUiiUd1xuiBoXYfYdBcWFFSVAD5G2UX9bccyjiruyZ",
  "key18": "376UTieutysaXt765S84XR93VyHBKRES9J2Csm7hZAZYzvYvfGG8AS9Gg37XNvSLBzkzSb9BWsbhtqtxkP8s97Gq",
  "key19": "5jfSHWFLnQctcirsFhqyGXU3gugPTFy12RrKVZq7zFe4H6nBiGfsAW5o1mhsx9REczGMHGxAHknqwig1zWWnjA98",
  "key20": "TzDV5pbHmxfUFyauxjDPYNCKQpgMhwF6jVfcY3YcPWYtjbyBSAg6MGVPTCXFoXoWKbiFaUZqveZAJkVCK5dYcwH",
  "key21": "3QHf9FhfLS5ehBgNVDSWeTGRwurufnE35xQqc7tWeqgn9b8HL8MKKdkQ8jKNfBLMdYRYs4SqcBofxW8Xxes2a8DU",
  "key22": "2M4hBzXa67aKJcZLtcz9jJ627uqzW9YnZDfx2jKwVYYLXpqp84L5AdsprVxwnDvqwdGWS9Eps2TdjQo5jKgskhar",
  "key23": "4dqTzKyLyPixtokMpLziUruKhcFcCUxY7WKpu7xKsbnJTLfPvVyq5pxRSsEXP9W2HV8vg4CqM51P9S8kXGsL1egk",
  "key24": "4AKwFBtWZj57Ds5grWhZ1XcEpARYdf8JAhirM3BLLQ18WQSmiRweoqRPGj8htMTphnGmwUcAJ724ARwMrUipZY3X",
  "key25": "2RkjLrDqUFiiXyZTS8xuGr6nbkSEFTkmWwj1ccU6Qwo9ku5PS7nfqGaxRVUQVKTZ1mLvbuGwPPYGjTJusiYninft",
  "key26": "54qC43sAYzCLiCwPFEZZALKNURbFfXirmwU82xRzpdrv7o3MfQHBcR2981feGLYyaY5sTchZFCqKrtnZbURLkKp7",
  "key27": "5eVF1eWxARJ5Vf2TNAF1Pk2QTX1auTXDLU2EStJykEwhYWzmLSEMJEao5WGLyLoV7FRj5MJUhQK9mBCqSPfNahYx",
  "key28": "5DQixmMM5zoELwZQ7ab9q8phr84uv6dvoFMyd7eLHobEKvumcL232uy3DsvypPRGj13qhXQYtHSb3e9M2PWGtiUq",
  "key29": "2YPg2jFkgPu7JLqktDYoxLdCYhsn63e86zcSKsAuVjESPgV74rhsRdmG1gBujiUPTzF1oecgXbSjbPi2TtTG9kb",
  "key30": "3XACvuyXzKfhBfJN2hzt7NAHLmHFxdE5CBXgatYU6DPzDWZTVRsN2bE6KBTE4rU5s5KpWdBMRZriFUKkdMXCDuGu",
  "key31": "36qVzV6W4ipCJ6zXN6FR1Qm5jBCQb1dNG3fPzVip6xyuXixsZMKyDfq2k986LQ8jJN5C3hVf45yrBMi58bKB2nef",
  "key32": "23gQTtPVZpJAxBX3ZRXjpstW4tdswEKwALyaJyRDz4ZjYgtmh9Y86SKRPi8dqEfVbtyFF99VCVGwEUNUvRSTVYGm",
  "key33": "2Mdd6GDpPsXsfTN8fqWDjBy1V78cs6dd9poASUyLQ7woop5MHU2F6UwyHk9oVdKwyxAeragXiEdL2tL61Za7VrWr",
  "key34": "GxvX7KJqawVV4KxoZTS6Xe4yPrK8vSAsh6Zc9HdSj4aUqZf4JShMM1XWc8N3c7sRWokeagH8BatDz43q9CxaFch",
  "key35": "3JSPeHAweMyiLW58DhJpfALRD86jug1FChQbmKVivSri4GxJVno3yeQjacAQxX3jJgkEwq3PRKFMT2APCEsbVN18"
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
