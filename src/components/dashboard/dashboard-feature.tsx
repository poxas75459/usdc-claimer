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
    "2Z2XhnLPupFU4gkWW9idWbi7oJrgmrsPTGagPL8P6ApV96v4a83RkJirvKdPUVQZNCEU76tgv7AR7HeSgkPaZ1LC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3MRySEvuVX7VS7opeRAUmU8y2qtxuWrevvycbKiHE91Ba6cqQjwjEm3jj4VKc7rr4XiCTSg9x67hkfaz22x1ez",
  "key1": "2p2cDi3EirNdpq33vCQMJWV4tvgRML7MCHjxoZdUYabpLo61cS2qJwNcxLGcytcmoctt4RvuEM8CsPrCUCK3Ej19",
  "key2": "3vQpqSRNc6CEBy3dM1o3LLhfpm8iziZETYa5ssoC3pg85gZmvHnym3H8pbqpuuSV4tgAovzvpTdZiRydHAHe5k2b",
  "key3": "5wcFc6k53Ff9J31roL63QiUn4Ncwx3Ct1ej9ygyWDHtfuSyj8WkP9CUrFG5gHjzXsfCL9qGF29fwZ5M4w9kMt1eg",
  "key4": "Aim2S51MpU3rKr8mrmGm7aB7DYeJvGWtgTTC857LcZsCV1Y3GqTy5LNm3ZSFUpsTXr5PKXNHJKd67G7HfYemygf",
  "key5": "4F9k6Vw6RwSWGbUYfNdwF53U1kdoQykU45KuAedxrRrAd9wmjt9oMXEGegEkmwvboG4ERARzdAkrqHFYkURy3e8f",
  "key6": "5MLHKRRQGFQrCLya2VcCiiV2Ue1xv4Xe9eRovc5XCr8kqqkNXtPcH2pXBP4JZnMxkTdDRrcSSdgGuob3fj2Mqe4k",
  "key7": "GjhN8DKmDW5fghtGdtGk9mtEEyNCKqZ1G5KJoBZhoRVv3QVovwC4jWt78of4B7qAxwsAvxykhMHfSwTmatVzEBw",
  "key8": "LWfMjUFsPQjspHPEbSnTGPjP3v7R3qb3jeYzt9ANCqJFosUT3Xt2B9xA3Nsp6pn3ntBeoFxTxsbBRWfPHvBQJHi",
  "key9": "2Mdh7xW6Tvx1e5ZELjEBj2wJTUJcTZNqgQFJtb4Ye5WQwvcbjjG7r6waUjXTizjbEbAjhkbuovfL6pK1Xkv9nDw7",
  "key10": "3XPGG7S7MjosB4EaRnMUSFEP4tqZuii1qRjCyMkC2XPdv14om2YqyZH3TABk8C8fxHmthjoFZupuDiLuRzEaKR24",
  "key11": "355eqHd6CBWgTR2WJdmLMJuLktiTpy2pu5NLrJYzyufsuxmn4oUJGEth4PdB4PTd45wUR7D5AuVivfZPhpV82E7b",
  "key12": "3qPL6LV8wLenT8HEfFGE9GRzFEJCJTKMq1C35nvuvSH8bFj4tD988iD4rhdfDyvXTWAesjLWveuGmqyRtmVw5fxh",
  "key13": "56uxTV3UtH291ruJpDDig1r4HBWMiPGGJSqXtyCWQGmqP8ktV6AJJ5hH4ciwgZ51FJNaxv9f67ABRexXjkfuYGFm",
  "key14": "4TVSVQ6xbYbddmVnKLTj3huDKtEBxhsUSRwr2NcKppnr4DvYK42yLLpXQUMsAxZ58p8W9wxmSW8AwCKJEdHiaMav",
  "key15": "4JJzzqcoXFL6vzvMjUM9TxsWtPzGFYfeNn8cUztBV73ZhL8UwzYDes9w21N3EgjTfD5raupy67hGyLywixAorSpb",
  "key16": "4z8sx4sYmnkJnf6pEejQ6SyfUHqohdCUdQcycgKoMGNg9ZZiwXBBcoN6uFh7Ff2ccsUkAKNmHv9S1ZWkjsX9jf2F",
  "key17": "4cJRsVR4s1q8SDiXvQnbW1Ersyi9UzzpMiFz6MgRPViP1Tsa8PvE7R7m7JMD1MVEuBW8A6MZy3pRXkSUa2AYzFGH",
  "key18": "5FyHbnVhbsDG9AB3zwDHaHZYHhhjhhJhtKXYguZWmcGqjhH5x95MSkmkVJQUJKtBzCcZfB61otM2SyHqYmXuKGMt",
  "key19": "dYnVwsc7pTjVfLYdAmvnYo34Dpkxp6JqVXiiEAD6shZkj7i9gfAUnPXhhWuXkRguRFPGsAn6EoK774YgLSFTJSQ",
  "key20": "2bYt57A18tRAunQnESfZb4xQmkuUCRZ53Ri4ZSr7nYR7MuRKAWhMVSJpWiHmzxTzgZhvfAb2JdbafwBWf24s9uUb",
  "key21": "2B4S3ZMKdESqLBpbKKkS6XpuwpFqcz5FVa5pDL9TprRsq9jeCojnFz1gBis4k9bCf7yuJBdRejazuUEb1rgvLQJe",
  "key22": "3SfaLYagXHtWVUpYLC5monRbehn7QdQoC9Tk5L8TFfArySULABVQJJuWumJB3MEuLaBGXmn4Mdiut2ziSKVUAht",
  "key23": "2vzVi7kE7icDtGaVvyzjy8mc3y4ZjhgVBuoLEyYRTPQgjHMF37dV3fsy7ZHUh9AUyDP3vyBFGTmyRPcqPWzFzhBg",
  "key24": "CRPtxHkcuG2wnECHW9SWSUBujZBW4gL9k2tfLXg4YRokGsqBbJiAVQ2fqjFHgh7PniTjQbaimREYqZczLS6Wwi7",
  "key25": "ymU7HdRxUaBWQcsTaoiRWSp5Bqnn3xKfkEeJPAiXGZAbLARsbdMk4AGPaTUFb4wCFD5PB9JHLaWJFwkxmveqYiC",
  "key26": "4VXs1JZSTzJSUndCGe3y1VmushikWuMpFLm3DAsZjzcr6pdQUiFS2cwPRMx1dcCea6ptTc5toga4jFKPBjCjTuxX",
  "key27": "X3XzwkzBF7QjEYWBWuco4rqVGffw8DossRz9A5RpAjGkq67cnpc5o2NX8iKFYwXixBXb24D8ms65o7B6gTHQW8m",
  "key28": "58hyEGeiXU4SJwqGnWeM3iAovg8sfMC1EELxug7kp8PLJQdEViFuaSKvjXKViXxCSRNZG4J9EXTNvMBm8k6MrxLW",
  "key29": "bdfbT1pw45wwcWHxroi2YnDZ2WB1d7A9gesz32V7fv16zgL14hkzLFWiwjNtCkZrbDQkudrVoMK7sXeXCVFzwyL",
  "key30": "4hgt51VDivwZAgUzKWdcfGHXfX6qSKNTvLH4Y6f4J9SjgiGmwSztcmhFzPS5eGTPm4tsfay6YqXK74ZEAfr6M4bP",
  "key31": "5m7DJFzTCXP2bTAcH66CStr2nrspmEBfgm8LDzG1jcm3fDJffW8BnZ4EqnEVtm6Q6ssurfULHq6SLkpQNrMBZAe2",
  "key32": "31jWbkja8SCFgCUvyAHjoJxUWiKEgwT2GbJX7j8CCfoTKyWsrTp1ySj3DY8NcaPk69mwAxMGryer2ZCEmrqRWArG",
  "key33": "49gknXVH9CGv6AMUTNeKTuXvvC9fqJuMwVqExtfBtatAfBqJBUkqNMo1NkD4M3EbX7Lc54ma6qzj7dL7wpc7Y9Dv",
  "key34": "29dRMRAG5uxPbkj6PQ6FsdWEaCw8K2Ntub4wGCDCmMtGaXXYRcNDLkGhSocCnjDugTAV2GeGhP2PpPm36XmiSTtd",
  "key35": "j97GPGWDeiL2dHSFcwQhva3fCxU8pZ2RFMEf2MgpRbkcBon6WUrNmHM5UXawMFxrHxJQHJ4vVSfrN2EFZKdjyLy",
  "key36": "59nZprRGbHZYy1pti31EBcJ2MLVyWQWpPKvZhQgu8Qf6K2qNh5GJVwHwFbpcy3GyA6rjSVaEoKUiYT4wnSUJYkCC",
  "key37": "3pqdtCGAAsENiowrJedRoNJeqBjm1Lsi9qn2EdLsa6bZFPj6kRY77GHygkxNDjCrtz7MFtfCW91C8BU6p96pfKVB",
  "key38": "4griw7sKXZyRPBBb4rrv3g5hZ5ByCoULWqvXSLBZoSxKQDYBYLcconF8piQCyZry462y3cdmWGzUsH8h5NwcmR58"
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
