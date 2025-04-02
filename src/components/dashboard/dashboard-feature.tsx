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
    "56FnvtEdVvC1pifToDfPHPyaxCjtJNCKw6MZD6S1m9aM8qBkkHAJHthp7XEZGM7E29LHBVghE9VCiDUBCHouWCgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAZcVYZTiUDbuVcoQXiHLmDhum1kDb7WacXBCuPre3B6fYWxwAvCDA5dcWijVDaXmLREBd36CtuxEr7eTNmzsq7",
  "key1": "2WHjx5ZzvcZv8wk6Pep8U3vKgeJyqRb9Vdkg4Pypt7xx8kn2zxv76NjUojY9kNZCUDbrmyLCphjgmLmaK25Sqq36",
  "key2": "5AqKcBN8ra8cN4waxEJ9XJ3RWUX3zPsaRJX38nbXLPa4m8rB9DB8NZfMT7cnG64WSMHX2GuwPjwdFYZRPyoHCUgg",
  "key3": "2NSMKAd2VZpJ35nfojrVFC73yuyXbSvQk1xc4y7ALo3mg5khAmLUPBhH3rfDhZwrufNrb5Ds8H1WW7TgyzhctdAK",
  "key4": "PwKb3oMGBtohg6iLVPAVmiH5BjonE6SdhyUw89xqFKscsHZEXZBFydqZThadK3FYQGLyDgZc8MtYV4CMZtwJ6sv",
  "key5": "5Sj4Ugb3EYscU8kfSE42cqqdD33v1cSBm8f114LjS99d5ybVxyYMM36qVpo4XKfqTDDu2M5zABTV6ij1e1u4mAt4",
  "key6": "3yYctJBbcCU5Uw4skjJXWazi16Yt95uETiMq5mcCg2WUHmq8z3T1kJr4MAHTJJLz6qGzEH4ASEXDkTbS14gV55Ja",
  "key7": "5mHH6gPU6VPvqw2EavfYLiiybwFLu5C9BJMwjqCpJGRetNykkiRbvzWMwFvz883AFygPS8xix8JHDVanFvSFMkBB",
  "key8": "oa9V32XSpJ5BovtfqDw8YArFGXYY9bGDYgzXfcY1MaqFXXLGp7yXCqKckHofFbiRW9kLJJjuvyHBWsQdTSFoZnP",
  "key9": "34mdHCBE3EMEDvyqLJzhYnvfsVnZtUHzmTgkj2D4jsPDTLX9NWk4VXZUx67efjWDLw59YwiWhGXHcs1apmsGPNtg",
  "key10": "5KSwACGXMsdU7MYu5FEG4Xx4aVPbSoHY4Qq7vLC2pqtztpgZYnVF1JNtcjVGPrijKK9X5r3TuvkB2iPujhH3prnd",
  "key11": "Q2wDgZ7VjtcrtmRu48mJefkMm4uJhQSR1FP4yrN7FXADU9ryTpwTJfwkJcU2TJfA21vyiLGCTijpfWS3fmyHANc",
  "key12": "hwPwHkRHyjsAA2WyEHxPBaL37L39SZdbDf2nP6h1pcG7NHphtgMgzviR3oCVGSUBy7Ff7LiiJ9dx9N4TmQJquh1",
  "key13": "3ShgtqPEbgJQN3wRHy3sANEPZ5PDny1YTyLHy1hQiitbPJ6SgSvWoVoRdCggfkMYxdh1D4ZYLC1Nz8ZvVx8NdJq1",
  "key14": "5dX74cApt3mLN9Smcd6kFYCfffc7kHeP5bkqKosGNqMXnZz7AH5dbTVQxyeu5mi4TU8NBgUDnx5Vt7i52JRbGWNe",
  "key15": "LkbLiXvx5NvQZMtBFauqRwGcRG2RFPdqBhfgQYNipnGzac9re55d3WAY9VUNm7e8osDYjBkCHu8EzdivxC39XMQ",
  "key16": "3ZPa5LtseHzuYahZJnJB4eBHhgZee6GwsRzdW5qNjugnfBTdKUfHc293Q6ZaQE4LQnWBKozZMPj9RepMxbzRk4bs",
  "key17": "66WM3fGE5fgku8xav3Uox94jYQUCd5q61486mbsWhsgDSJaypzXYMtk1bRQi2idgQ8bbuPGi8LrByUjwGMj7nvZb",
  "key18": "2kcRgoUTU3Hbkh9qJJ92LQsmHvdUtfpGrgc2S6s6B3rE2cZXNrKbdopgck7K46DD9hEpEW9nv3crcyiwy7aZsMig",
  "key19": "2qs5rZDKRRt8rB8bTDMwFSKFwV4iDrXjE3FNv22F4ELZi1hPqtynQfrDZbRmWHRrTUToB2bGu9XHcnMvCgrrhtny",
  "key20": "4g1ksVgvv9HuypVe9uKj3SXzK7dgX6M2rvPrtUSxQNWmvCyoWdviZznz9CfHVYbWQWLHq1JFKTpVhNySERUYm8NP",
  "key21": "nqXkhoJSvsM51AErzajN8ZDDYeJ7ci2hD5rtxU6hcxdQ7An4bvPRyZYFKTTN3NeSo1fv8yf1xYCq4bAr2GHiYzw",
  "key22": "5ASQkSD95ZWBB7DTENAkAz2qgUs1HkeH5jA3zKnB4RM7rhvasVC1MeJdmShjfamfUmh25FsSuvnjFppKmURR4eTL",
  "key23": "3Zinma9CPH7oNGZcLh7jG6pKgqGcULAcCS4CeYcEjeLkeU12YZiDSSRN6vfmsQktfEKeS44eyCM19dKFktwXGkR4",
  "key24": "3umBxUgEPbDri5tRue9KAm5smtGtZ2Y5GSSr1bEwPNFHN8sfU6qq9zPg97Trrg4JSiBhEFTKcptXtsQXZKfGDaBe",
  "key25": "565V2fR6WfAh5JscvNvJLXWu2CX3YFTHgTAcPNcUNHLvfsswb3xyqVTkCDjFn8Bt9dD9Fg5Ez3rayfiCtKtxF1mY",
  "key26": "SC6kWmWhCU8saMbJc2DvkyNtwV2WhmZnuyeLi7T1aSNzQGBNBtYTifKd1Cys6bzTT2zUgpxqhfG55nn9MFy3qLt",
  "key27": "2BjihF9pSt87AhkHQsrhiEw44dB2waAnEqBLNEJyxSFszeD8hwvuXWfyawd5Pp5pRXrUhU72XMtLwmrZUmh4Lwn5",
  "key28": "x2LMzTtnWeaYbaiFRaKf2Q3sBVRSvjq7ybTnrCoV9b21pPCyLCqsEDEmhs7nnbvQ9U9m6cmv9ngYwmNBTdoeF7k",
  "key29": "2oFNYmUURUiE17HKh6CxPcCnmm4YXnxoarALvu3rmKpCAgGVFADqYmBWSEYP5GjAAbiCzRWMX6bKHdCcr2kiQbUJ",
  "key30": "2NygB4WvZdB7nGRdkzJDi73hXeDXXKU6f18YaVn1VNTE2HQgn8brVvEP25SjSt7YAoUtM3fL6qrgadZwtvBtfEKM",
  "key31": "5jSEDinoRqrLzZh52VDhTNLemmdLz2Lm9GH29Jj2rBaQE1SxQou8j3GjL5G1rC5m6nFeAUaKn2cxKGJ9y2pM2cvD",
  "key32": "5AnwhthvYMgG2pvpcE6HYHw7Mn1N5SWmy1AuKdnJTQ5GJ1L3da2Xnm1hTCBVFBMAekZ4SbigRtkGexhxnu8ELVjp",
  "key33": "3wNHhtpW8bnpdWCtzPm8ZQBCTdCvdjfpbkcwUuvB6SZLiMLBX86utoHWCf5tcN4NL7oTDZ3TwCK8cQdmMcjFcqss"
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
