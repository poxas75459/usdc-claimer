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
    "3sbnaDKo5G3R5NRiRpnVUpr8tohs5ufkZVL6MrfBGFV3Fqpe4mm5Yiz7ZsjdGLDTdgFGxSafQnxvJJT3ZYuCQkGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3kw2bazah2vAoMsaQHsTMo5ct7ZgCzZDRop11B7UVczGG6b5mmdLmZDxG9286kNFRQMwBM71HWr9EpcQ3jd6vh",
  "key1": "3JUuxB2RaVKQQvJCuuEae1k59X1xpTMyKLRi22NJspkvCpJ79RKvvLsncovmvbZZFpBquDWURTDsvRUVWeeRaYUL",
  "key2": "ZBNqxcMYtnCTEs4ixRVEKenzxuLuBP3zVt6efLoNKzNVPr9P64hdpZo3Pu4uiJsVXpxTqQs4LiGRAyYJZzytwSW",
  "key3": "41eVJGk5Wqcx7ZdyPGRjN4UmqACXnqe2Lw8JPVeVKAnZ8bE3Z8PVPdNN1hZchgn7DGuMDpvqWBFKyPfithgn9W52",
  "key4": "yjHWX8zKcNyn5VAURQrsJKTcS4YhDVWfhop5SZDzs74zz2LiL7imrNtTnf8ctB1TkMfcrXuzbxbLq3XSE5vXhfJ",
  "key5": "cqfXFbbePvcJjZL7ZBzSDgcdHwyoerbaS1RpSrsAbq46c7dEbUacCa3WXQTXDxbruebBCnrNEMhFknLMv2qHjRk",
  "key6": "2Z8MJH7T55BpNV7PyQQgi6j9xmZPuT7xMLK8VNMnN9AdLrbpxLbFiurZS4zh8be8jG74YvBnaSfW1LvGQBt7HsKs",
  "key7": "3whvmeTtxsN3Rnna37ZDUZu8mvzoaaq5oX3cgLdNxv1H3GjpXRT4vomZfUsjhHCk797h1cFbJZMjCsFepSxSUDt4",
  "key8": "2ccehjLXtUmYMDaUqBEBAFbcsakG4WcukjDFnjkkJN13EzW59eZvHCHEXjJMYgtNG8M4TpWxuQZg9uJwKPrqfeVZ",
  "key9": "2JCWmYqeNYmTLB2eb1RdW2uzJ47oGpVVE9tMKzRKjqSPfVHppMVwnQFgncUxfDpJKyaLsbWq3kTF1dJZgzjmzVKH",
  "key10": "4M7qufaW7ggiYrTAwUr3uNPzZJpazNit9u55Z332MadE2w69agMU297iSJS7aGGDKbirhF6BtJKBaWUEeyfVkHQS",
  "key11": "5wUTjQSUerKoC5yZfPgusDVHTZy6SHJBypMLzTVcqGfCmnxi4aAbYc12UsAXQ8wfPdbvEUbJSKi4uyTnnN886Fgu",
  "key12": "313mSwf6HVYzxsLWFoC1eLXJGmTL4DSELNFa4omr8Nhh8Z3gG1xwwVPjWTF4yaGgNp2JrABVDrHWcJHLCesKZNtG",
  "key13": "67Nnm9NH88V6PG8syg2E4b4jJxDWaEnZgFPKFQDoerTkz7TzETLYd896SNXeBf3ZWBqswk2kjqi6xis2umTnGFcr",
  "key14": "22rmSyLPVUixNo2bt7rKGLP7Hszz6fP8Wen9nGLnRBK7RnVX7ToSfgcoY3s5ZbXKWZWsUYhiKRrFqxE6e3g8ZxxD",
  "key15": "jsqi2GLRjNbMX1aJRUu5a7cKsLP7BAgmU7yz1WS3AfTKFxBWATUCatk92BdpfGQymVHHa9K6RxgAADF6E8CiRTd",
  "key16": "2cyyv9udCQpA4hrZefUCnuQB7cgXWRHPVp7pQ9nnFNcpg7SEgsQLb2LFgCgaQtki5vrt8vYzgeWYrQsJA3qZj3pX",
  "key17": "2nAs6VYMxH49Ae1W2gqN1WmqgpPzNTmga8WY6irpcZ3f1fuopTYH9FjBiVN8j3dfURR2N9cARFabHvtJK9iW2Jhh",
  "key18": "52a4FdwdJR31oBXrFrxjvhTogS9qGooF5yoZbdbC5vhwnMF7kK3rCZJpK9foNLN31m1X8uZYjxyeXruTM5bouA4C",
  "key19": "65jMKs8zvrySyoT8pdF4smC2o9YYHhiVcwdu5cHdy7QwMNPGXrozfbXXBFtQrSg9hT5kxjkc6irL7kNe8PUjhPcm",
  "key20": "5Sivq1cFaLDaoPQwwR1NJBazRBz4iogPSVr4ZrkxRHcDkHVNGwVQxtBjS2Ndhf5WAWTARxyh3zu4hsEeaSjWVJnd",
  "key21": "5ADCtxrJSQHLsBnfbTHw96JK8qiLd1Hy9Z5f7yBT6XvZ6JEYdDTdLrcLeGNYHaULWda2eXYaoWKzScVdVbq2P6ie",
  "key22": "C5vBoESmGhhbbnuRHdDbPSmCryteuZXc3RDrsMxDjCi87oMeDDfFPg2RGUMbKsGBS3DX9UZFc9SxQ4Dg3YPv5wU",
  "key23": "23JqXs9YGVHijrrRoxjPnwfRCmVFBB9JdgL7h2pqry8dymTDWhPwDmr8RMBFcxupqeN6WNmH9bxZxkA6hpkxFANi",
  "key24": "ACqiUKUUNicbVNmfeg9JvsD6q8ZeFkgifB1TtpmjZWQ98DdJksDErsce7qjJ2usMZ9QR7odSc5yfNEaLYqPijo8",
  "key25": "5uRG7Kqey6Z49jo5kz1oNtfxB5aCU1dKpBJJu63VrSXsAyp1uAQwjykzJeG7HJGWRGoZN6SceWAt8nW9g742zx4E",
  "key26": "85ZLi2j6EKkjYn9JKYcfmJoMYY1Ntsnj3pKgFjvp1iss4fsF9z1ozKCTTW8VaH5Uf8CEJVuhGhHb5UG3xr5R9bN",
  "key27": "2AgZXA8nRfZnhcXY36vVXuZjd5badZbHryGBfCmFKcqQpszaSmzjdBddRk7RJaQ2LXHLWB7fZ7neA3oLQ6S3sxJW",
  "key28": "5Tf2EBuFpY8HQAsCXzMuAKWATrx5y69UkYFcPLL5QfTrVKxxFHnu2cGEcXWjg9SUQWFLrYE6mUX9gCgMsE7fxUEs",
  "key29": "4YEmcv58Rj7wKgP2JcBKEZi6mcBZZc8mUnZF2Xs82qcAjwo2nD7H7dKHMtKqD3iB3x259gYcfV1KdxCvzqRVykWL",
  "key30": "4Dx429vqxT8meeyu6h8rKYkH1tM2jwYcmaTrwLGuuLLYQuUL9Z7tnmejnfJxurVd9NtGHERtNBHYL3MSJ6tY8fRz",
  "key31": "33yU1CMWA1Vw8mgJgr5rtiayC6Aky9uKniK2PR6aAUYMM2M7uaEXwtnpb6HFK7ha97Ehq8FHqNeh1MkLyiMXK7JV",
  "key32": "63uamfPjR1RgqnhvyhJDW6wT8VHJK8Na6hzB6LngM4cjDMQ3TyFz7bYZvJp9SVXmvhYEWh6tDLEYuNukbDq71gbh"
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
