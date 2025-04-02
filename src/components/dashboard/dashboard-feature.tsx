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
    "3deser1MDf8jG1V6bhyc383P5Wnz6WuTaHvRNMHTV1zPQTPvZGeB6PyGH6KGijjretKsfudVkmdXdRKA6Nb2vuso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQi85PYBpsX3j5a2nqrhwcM9qKc6mp6Yapfro51r6iTUPDykDRswqN8XwAd2Ger3yTYimey7h9pWhAuQ6jZL35y",
  "key1": "5USsCTpxFhV9cD6KAPif36Tn8tsBRZzVnUQ3DRav1CLyQ59MghxJsNnUbp9TbaKFkKCiDDCfQcCdya5Eqxp5zn2B",
  "key2": "4Httu7CF83icoSiko1ft16gYYS5aQkdneSz4KTwEGM2r6LtiuyZnY7ZeQmsCRXsevd2TddYhoaCmgwwdeHsrdxbG",
  "key3": "4GZxkonLZiPDkdf5TRVnufp7qYcpkCKWtTJPsGSTVVrBpCPc9gcmF6Cy1dDgoaKMe5ri2BEJ3fJGF4uhH949oz4G",
  "key4": "3gjn5yzprKn7QREYQoMMNhCYRCYGuQGa5e5JFyiF3PZH5bqTjC2KTdfBMZCkFHHusW56RiaMc6VSjkycU9P3ehen",
  "key5": "4j3Br4tHWLfEycVKMDmcuHzhhd2mWznPwkagfnvmhUZTF4FGJF7kuqCt6QbdUEfLs5CcFwweN7rDatufU41zPf7A",
  "key6": "Kno37r9kkgePqyuYmbuQjY8PSwzgihppViJca1YRNgwCsoC3PbFbcbMSnYjmQRfhhC6ovwJjeACbFV5yLkjWAzS",
  "key7": "3MUXHBZYSpHCwLbQy2YHsoGEsQTUr4BCRc8R4hAePh33W4V96q3jgXPi6keeruky9vPWsiPd1uQQbggya9cH3AmP",
  "key8": "3FbSkg1xDD5NYCjRyKDAeyfNnmvP5zJdSRWUnSQ9WNr7G6QtkePWTphWbMpxmq3tPvjiXwiq57cH1Gow4FZRnM7n",
  "key9": "4fKubuGn3dRMeS6fQ8xcTtTctdAv3s8Bw7nse3ToPzdyr8rM8iytV6bVLJS43LR56yU11J4b71cEwjjYy2qS5Rok",
  "key10": "5xyKBccUYvWg9ATE9WKDb8stWRSiDtA7g2wS9wMiMFJY2G3ZoPfabzg8eUKkvnHPkqpUdyMxLRq8S6mVe6anQ7V",
  "key11": "3sZwFgzjXh8r9qEn8s2FGHPSoeFnDizoDkkJmYrwzC7X8gM8oiwzvqkPLD6xcqf7WkLcCS8hxTt4SZGManY5uNzR",
  "key12": "2suSvnW5E8oFVSU7RoTKJXHocHPNyy1cQ1WZvFfM4iZJa51oy8jtWXq7SqNtczYso3zoiXTWP3dEeGvWtJznKEjf",
  "key13": "25V5gJd9kG5iy32SufQfq9npSvRfSTXDyraVgkDSfX5jvdeKtwYmkmx29ix9AWSxEBRxLgk2s9tb1Wn2fnBLyATi",
  "key14": "47QnC5BUVrHPyGoxymJ2SdQTwpM6w9afgzCYNwSBC3gpZL5eGQdrMSA9hq2fkwiriNWwKycryHQTo5hgtcqmw6DS",
  "key15": "4zez4WxDx78Y1QQqZcLWZLhRMG84NHsofQmaXzCvwapcevguurEhWrw4iZD5URkyjwAzpNBWBWNHnVLbg6VjxYrF",
  "key16": "bF6PSoLFF4beBtV24tce9U6tRNyCAb82WJP2PMTsXNZLK6SoNFzzKWhtNmorto2n43sEvZ8GryLornksQ6pmnJy",
  "key17": "5XUPQe7mQBRJEQreQD5QYm4wxLYX45SFBtoa1DPW26YdbFJUNRCEZPYZgTvJkE5sGTwkonpx6diFeBudDjZnwgUe",
  "key18": "5MRLP745oyifJb8yK8putFUJ2FsqRTnRFaiyUVnQM8p2HEBF2fD78BeFThgAkUNQycF1yCkHAymtGxqFZ67jvCcj",
  "key19": "67jhLhdpgjjUPsA7GjShC5ScXk55kupQK6XZa9bF95b3XG4GqZXdLbWd1xaew2ob5GhvL4bRHa9PZidksH7DjntX",
  "key20": "5NVn6jtHzwNNaxWTkCBkR4EngkbX2Y3ae32UxmwrPtB5uQ5ToZgmpc8HzDgScj1LcpfnaLqTstggtEWZiWRU5zCt",
  "key21": "2CV76LN7HY958JWYHm5uk9qY8T9AwPoBuwdMkbLk1pPS3u5EnmNdxtg9CiSqq2Bh9atyUCEEpuVdZULLRPwCZSTq",
  "key22": "39VgjrVE6XGTvRyoDtgvSxZMeJNyLqx8JkoY4xP8hHVQ7rHRVDrTPw8pRENsUPHVD2jKRCZTBuytdNjd3KzqLwiG",
  "key23": "dhwDa471EzTeAHJqvEtZoisykjxLZvVqfGbezVwkPLMRqdRY3RsJ4pPENoXCfjnRq4RqSJnVs4SLKTBoR8hkE5k",
  "key24": "E1fyNvyWTTGeLbGx4SxYiep9uEuqwu1LMHY3y4wjAZCGnyqm61fUp7kvgrgxZewmTRgVY2TLcGUUM1vhyhaiq4o",
  "key25": "2BpLhuEAVGF82okTXjxxcM3ZJrd2rP5wsMSYn2AA5nrHVZbXqBcVt5MShoi3cPq8ogtwPPS3VxpLL2qEGyFa5bCY",
  "key26": "4aiJB6xd1tqSCTVMUVbtBAF6KreLWngUC44Pz4fSEjqNRTYJU5o9dEHNmCMArY5eQrhdycjZxL72nCHrQFqNMSGN",
  "key27": "3mPhqFvCmb276jPRatrX1JAAAQhi44PMERNUoNwcGz7dSxoW1a7idqtPPcKymBztUBxhWWcRoeqrQdmzGRnfqBLp",
  "key28": "4KBoYkC2YaWs3s6PRaCQhnFDsBocWxXHpvXBmRQViiSrnLBPpjwEdTGLpzFxDjbSDsRwcaEaDTxArvfo5zFBdu1y",
  "key29": "5TNUwPXfyVf9Dz9xEBEZxwpQLTa4X4x5wmjZHjSYTySoAMWgGYmNz3doezwSKadQBUHVhhDcSMR8dWcuBuji1M65",
  "key30": "3K4sSf9ogWT3aMPcDKsiUeuX4yptNjZitc89v1G38wD2Qe5HVrwRrTdUujy6Da39jRcgiHNruLioq6mTMYU2s3k9"
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
