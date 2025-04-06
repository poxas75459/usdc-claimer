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
    "2fR4SBETY5MWimPnKc5iSqwFKXZLcFYhjvML2xc84JxS17xj8PeoWebt2JYuJCKnkDUbWVu8wQtHRnfYFSYXH4Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZLJdLsMNZxRKaNv4vmkRpZG78HC1C7ZTXjdppQH7q5GVFpJ9Wx6YWBWYN1MPPDMKY56XHzfkET6Eju61JdhmLH",
  "key1": "5kbWcJ3fZgoUXAzhGWywHBT3aNiAArvggy3zU5YtwkT12i2crN6h1AKwyxwsMkWZpxCrni1X4gbhyf21LmAENP2W",
  "key2": "4GAiSKsxHgUqvFYubX5iKKeJfJVGTg5BHYbFgixTLCPnxvZraet3iCgWTj6b7Ldnex8Czf32Fww5dmutqfWe25NJ",
  "key3": "2d3Fm4zTEDQB2eKCqWBJALwGG5czWy3usHVjcAkt6YofjwigedTLRTRtN2JBRYDhStP4n3atL773apuvQSwRc76C",
  "key4": "4z8Gm6KQA5BjAunct6JvpombzzhkAKm3swFj66eSMahaMweAbdS8JP95NnnMZ64mDfERsE6gokPAXDyTs3j4yYY9",
  "key5": "4uUTbXCZta2SokaCpZsbvWwWNoS6osENMsATG2E93y1bmBWfmqbB64YPWP6EcZCDJ2gFePaKr1ckUF1fRvV5iAU3",
  "key6": "5V5NQJHmQ4zwfMkJn6uaYQKqGj9FM3QocJNd7774xYbUuUKoDrXWyJmqr6Brdr3AY9u5nPp4ZNA5hBWTJyJEN7KT",
  "key7": "46GSnLVod9V4d15gDoKnEGi491RyYMwCUHpWgxLECgiQH1342E5UQuGiACB95nyNFuU47EHBiL2LL8Q4VLqkeDQx",
  "key8": "2qdJxs6NY6Fw4vPuJdTDRHe3qef3DFNx7LoSpDvyDWaYbEM8pMmfBsaWP5t8EEPV5aUyBerUkRvVhQMcjxzJs8VJ",
  "key9": "GdTP8ZcZy74cnLTCwX9bod4KnjkB5aaAqcDKtQYL7Ya2bPrd22Z1p9Ar2ujNVJqhfho3LzXQhwrVHaREEocHHUo",
  "key10": "ssf48oGkAT87kFRgiEB4TVpu4T6aZJwHL53f1gWh3mKm4aLGTRMmLQ3VfaD5sFf9LrtMGoVmUkNMXLDzk7GYBG8",
  "key11": "2TM7TPpSMDHXa4sykrHjj6UDGuvRggzbogLS5bryc3RberSdSwAJEmmp98zeoB8yAcEvRWkfFHr2q6sthWu7WvKd",
  "key12": "5yCQY2qAWE5hUr56CuD43YAZ6BAJYUYqaaUUUEpZnPTFD6yVnMJNf7jrfYi24AJudQsVSL8vrbVVWKnvEWSz77Sy",
  "key13": "3p32szE8wEfWbKTRRXSetm3PbxAAJnjGA6Qzj6fn8eFuKHSULCR2mfVqNyAtK8Ej1E3jbs1QzptoNPevyF9UeuXb",
  "key14": "N3Mw23kZ4WYJPz7LUGZ42ZLwjXR2xaaBc35tjDYrcDsUXJx1etKznKY4kLroYhMjvyDiupQUt7zRkG1yW4z7J7y",
  "key15": "Kna5Y1PXhjRsMNCNxWeURFu4JFoouBF8DgApgoiduYabddeVUBotBA4fgr5kroMJbFTuiSGh8K8hnE1v9S4AwXy",
  "key16": "WqfBJNXG2xbSqtUjDWTALd48AYuQZSKfzy7e94gQmb1MCx5LJaTqjDUmErNTc8Ko7hiwBN9nVxQE28hXZYgDina",
  "key17": "oJK2Y59b9ytMkXA5mecgvS6L8A34Df1UipR73ko8z3VGdZKichw9eSrY11wuHm549CXyRn4MoK4ZmwNur6q45fy",
  "key18": "5bVq8zA4bJDHhGdrzaiKRrsiT6zxuSdhtrJZDCdpPUdKftB4jmn2Pym7cR64Ymb25SRbiyUJDZs34xH2FVrXSD1x",
  "key19": "4kwGjoCx2HezsqqFrrGaB5xMh4msJtRLvzH6nfPH4EqZfiy1B5rfYmkgPP5GxcwJw3WgRmpFfmX3GDHDwVJh4FYS",
  "key20": "yAXaHH6gwwyLCEcJQ1AaNzxfKiXnnHA4ck7JSq8y4kWnNG8HAcrqhjy7GqTJBXTzgbRQHqEP97MxPh7SpMjioEJ",
  "key21": "36B3JDurGg5g7pLAgjMWJC5vzkfRTp44Qnj9rbNMRZuLGcmefnmTqsioJ3Wc8U9fMtMBGdKWCDqEd62QbFWVfRDi",
  "key22": "4ov58RNTRT25pMnn7BcuRWf7xPVo6e7tqW4cFeXHNavBNV7p2HYeXwoMszryLefWunH7tBjGxEw3ehMHazUGsExk",
  "key23": "5MUpZwbYVttqSsqUm6D6QH5nqHm5gTkLioswXMWSL8Yh6ebWokKgEEEq5snSLX3NkoREFuoC3tFNX5JtjdWVQE5D",
  "key24": "5CPUQKEunR2cjBeSRKm86DKKuSgtuQwFAUJXXYHwsnu9ddfQtxLorh3zFrxuL2cvBWzGR8qzae47phUsYaGQWN8i",
  "key25": "5BS1nqUv4gsiZtLELTfVAorxpNSwLzrFnhh5Bzc4VifYQKeUvzUCNQti2AfzDgQdXNQvVt8vououFDzn9PjoFVkf",
  "key26": "58MnzeV7BBzHwmg6yz3vQPp5xHSRt7H5VgdchpzzrHdcejgWrkaVjHAbQeiHVSz13Xp9aRgKJjCTA9fG8KKJzw3S",
  "key27": "4hZESQr4AusoK9ueJHEnLtGD5UfCx8CkpRn6uCR5m6Xpr1PZ9udttzth1TurVTqFjdr3K35XnoFs2zaf6CdkQwEn"
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
