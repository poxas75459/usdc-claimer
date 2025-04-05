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
    "3CaBhbqjXpKkDhhHseHfi9TARHcswjwY3wtt6PBQo6ExZKTCxvqDpDajUui2zsxqrdRNvd4LtmKKkp3udE8k7QiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SrDWGeAAaU89WfeF93hnNAxNnnLJjAuaDXdvpwKvQUusUuFhfeATEXDStdxT4fP9E5Me1ZQR1W1TkT9dZR2Yew",
  "key1": "5NA1pBa9GHLEjpBtP5D8twrHEwqMm8bTwLRVBSs32fQq84SE6nztxzDVo7LVntWyk8JeQ4CQkPfEg7LxpBJgpAqN",
  "key2": "2tFwdGo38nYy9fHKaiqGVpUYbsBF8Fh3Lohoo3vwUEXhSRHswuboCpQwNQiUVACMYhUmupUnSY2miCzmukHTm3D7",
  "key3": "KH7pq6pWwCz1zhGn1zrtV2CdPM2azjhVgSDgzznxZ9awykv1QP8HTT3Vv7izgXbQgau2v6su1xyUFWNZHZUMqmC",
  "key4": "2Edp8aC1qk4xV2aw57vCPtTGJHy9QSXJ51Do2u6qYAwiXrgZ6kriHmmf3aGQpXWvYf71Uz6eTHzvEzP132FhXxY1",
  "key5": "5hCnsAG8J13GTSpz115iWTHRBfYrQY7QZQ8y2F6SQGpP5gsYMJZoS4BofCY62xWmoNyhiYDQnJpxNvT7SEg3M3us",
  "key6": "HCgTywZ2t3dntZjYdAzv8ehcYfGteEjNiLPT7dAgk4jubEXraXrKbGqyHbRL6UknpLybRh9MVqVEYsNinm5sRh9",
  "key7": "2x1aPZHAZHmQ7B3x4n5MBtsUEthPJXkRz9ppHikdmx1j8WnTW7LByv79DK18EKnoW2aWz1HKCSJYpexXcnWPdrtW",
  "key8": "2EHa25mTLumuQ95sc9N5WkCNLV4mR9cdpLtDBeZPjZUMRzK5QhY1pj8t9EkgPrqyBtuiUCKZN5f2b8k3NW4oL3ep",
  "key9": "4JhMd5z2UMrXTUDkTjAfSu2qr2WzkkNTfJtEhLC8XRvWvNwJ9YmJw9gjM3b5AS1CyCzTXBT6Mi61Z9rA9YDPEr7V",
  "key10": "5ENkymSVgJwSQK6RxBrQKMmNkuKYXp42RV7fNBfcUUGyKcYFgfh87pJKGFQUuhQyevtfuHc7RL4pEWwoPV6YTgT4",
  "key11": "2gvyjHom6ueSd3TjnP2X2ep7xBTZphTV5iHFvwmNcpFpkKR41ZVUDURRLW2UwreYtVjdPs7PJpaLq8f4ZZr68HZZ",
  "key12": "4NjsPq8jKsw5hiJ6EWFC5uJyAjQR848fuZ86JJkvzYLqK4YHXv8aA6tCghU5eSKo2iUgk6kDFhXYxL4PAHTuTsKH",
  "key13": "2fvAv6GG9bsiezRWohAYzjSEh47KNZPpQCZkMHSrt8PC5cEht8aBCQuUXLuAZpGc8DCcJyVrFy8e3eCjseGR6YaX",
  "key14": "5njUn14QVXSJsqZgv7xgnj9s9bAf3XRaTh1RtjQdzBhZhquuERPRX9BSduU6GCGnNj7fS7oNCsdYRK5c9kPqSRCP",
  "key15": "kRTYiqhFcVDnd5C977ut1w2VN1DBbYmUtnT24yC3XJiwBLaKmEjXxMVVJXySQ5biWQvdNTFSVVCgCUcaKFqfkEV",
  "key16": "67Z3SDGzB4NLsqonhSQ3pBBqHZzhCvAvwWT8YzBgt252mCKd6n6TUmpb934jR6n6FtKdKD8WNdsv1Nhgh8Lvdcuu",
  "key17": "48soXuxg5ZjB6EW8VSpsu6y7kNnfXkduUc1XF5dTMdFYftaLpwHN1MMqnBDqFYN11whc3YVxqaMsregN7j5BSr6S",
  "key18": "2pWpYVjNPKcPMFh19L6NxZEj42jpPVCiCEDNUguUeJ8WZjpnsajFbqfajEGwneRhShtRZoZigJWVTXPtgtE2hfVd",
  "key19": "4iRM8JaZ4wxbeuwnyB4cbm3K1CFvzGCaqNc85cTtyZ8arW1dDC3xFh5qdgp76yaMTy6A23iNnDgjSTagdPPj8TX8",
  "key20": "RbH9zaT2JSYJidADHNhCkJgXNWGzSQVbxthgRN6M1p9FKoANVF4tdD3XAXbqjhpkiBSichEza4r9JtdqA35iGxx",
  "key21": "aeT39yQNZutJ2ppjkMHCmvSfaNnGwcfLKts7QH3wTtr5hfhC2jp8CJPDNWmZsHoe8ejTYzrvza2prDP4ZjFasEn",
  "key22": "57x6BAg9rvGxMaBCJXnhhe4vNp72kQG3PofyhR6Xr6YaJhSdQDNPzEKJrFr1Wm1t2agPcwaApizXayxux9theXos",
  "key23": "66F5dPGGBhJwAkdUDsfYxW3rvZJqs9Gg6K1EXqMmQ82Z91S27vqH6tCn3pw38WJ96eNHTL6ZgSPJ4RnhsHBHHEBp",
  "key24": "pVnMZTUHULXHhaoPN428C1jtMCM1YyjtJUa3SeYuMhTReKHHcuRpT1miWVQp4viZ9gzFuX7QhkM7wgB4mris7ZX",
  "key25": "2EmAvveyLFXPysh5MJmCrNCxNb1xuLJK1ceGX198kqUGypnMfCCxJDMgR86xrefkvPGnZDKWfAwNsxMRabSSW6ni",
  "key26": "59R7Bm4oLgafLafSiCNPkrs7ZJwnZgwhJCP5GP3r98VgAbPAR2i4FeG4k23CaYUCEwV82HLMmq7eMXMh85MkU4Cx",
  "key27": "4hDUGZ636v5bqf3yBEbqZM1UeC6ua5ajpJmtFfccYks4bSJs2RRM3t2o6Y1nk3d1VV7JeMGN6hsGqUEPZAc6ZuqL",
  "key28": "24gavsjVa6aZcvAQ5XGtsfLvEzyuzsNWKXpR1pXkaqgrRxAZAuCnwRx5JuSihxbFsCaeKHpYRuZkttdFFLoH3FJV",
  "key29": "rKbEet1eypWucTWEADUKRnE7ixp8oCriUppxCLK4DhpCQgoTZQco7UCKkJMKKnyGMJzhufNHGr3Wq5XfeTjTKW9",
  "key30": "28DgL71DQVVPYwi9tm5HBU2SeoZAq74UoGK34hY8h2etYTumrFxH65Fx8FrxepeqQ6E78tzoxsReHJU51CBGgCVW",
  "key31": "5rkfkzinmk18agv6Z19kgKd9EapvXbb16toCpP57ybaSNsYLagcqUhQbZ4GRm89DtFkiuNa8YXTcUwGDAANLZodF",
  "key32": "a4734XedjihgZopFMb3DcgzYd8qYZJTvZi1E5ABACCLKxFUNruGXgPXFkU4g7RmcZdSHjCUvwf1kiUPjZBBRRz8",
  "key33": "4HK7UwYWyMYDPr8N198cvhXFr1Kxz6Gr7UMyxMrhYWvDujUBher6iAZAvbt1aDBcxRzGpSK4L9ijE1AaQs9o6FR9",
  "key34": "4X4v1DAu2ZaZXHDXi5YDJRwdanEQdvKrbxPVU9rL1gyKpx4D5YeRfnPZVNMbGAQPSLSThNGfBH7Ca3sYKdh1MAVS",
  "key35": "22Kia9c6F5XvCgpsfm7oeDXahXnqBjRDoxqsKTyPXeYUhhBeCNsYtHuUxxCMkbuzZTFMenK1xENYj4teB6whBw9u",
  "key36": "3UA5QatYTA1Ay9y3sowVPqcxaqTVrW89GFDTDEshkmnUdXZx4ytGJrkAxjUt6j2ja4Wdgv8XvKK8te2VrNdj6Fny"
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
