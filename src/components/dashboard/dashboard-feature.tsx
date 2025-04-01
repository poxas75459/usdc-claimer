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
    "397ThJvM8mzmBtkY7XR11R2D2QT8A5CwYPK9jE4v7xm7ikM3thaUA1gVRaKzDLJ8Rt6qY1VcoM8Qbygnv1BPwqVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61B7VEe8pmj58jQouUXsA22gNouj8GtCTDFKwLiTtFdDdyTneKjyRANAZwJUujdawFkWN7XKBGeGMoAvF7kmXcYA",
  "key1": "3NhDgBWzrF8Xikk7D4v5mXvZzetnaL9wp4ykLNqeHigPDBkYgEs9zQKmaHZxbyWksWoFd1EPNSEr8ZUrV3CURTYR",
  "key2": "4knhjoUXteMmNzDf6djzgWzc5BgTTMCjquXtBLfiykTKjbJU6SYnZ38XYwtHi1FUqrfDbFwhfGnJheSYQViM8WUv",
  "key3": "4nUfmFL1mNVgJUcQ3HSiLS2CFTeDxf2L8Equ6gaXYgG7eTVqeBe3nA19hjHRpJteW2HLnmsaj4j2gGxbJHZ1hYLW",
  "key4": "u4EFVayKJGsDDTMUCzBAqy8BSMq3WzxrK5ByryK5fh5EJvM3zQXVqQKeEfv3Vbv2VGhGVKrRapQEmqtkqS91bpT",
  "key5": "2zcQabK7YTa4Tc8HkS89EFbCTu8Nrc7qSH1uHRoKzQ5YGa77EXzfZT17eXQs7DYZ1tQxJ15hHqP7EJogazpA7HSL",
  "key6": "446Z81uasqSnFzdAwMoRdMZ2VdBGPW9Xn8hNFvs3nQgYw96F7idHv3G6kwW9NoxFXwRHBJFjWLyJoNuqNoanZDT2",
  "key7": "VRuAtoqv7UAdDcTyekUuoACrmPdRSSgHUZChd3miYnzJpDeYT86xSiMfBQBc93mkC4xMLDnTwwcETdRVwrjZBRG",
  "key8": "3XSMnYKVrjA9xYZ3sTxy8nBx1XUtdAVqoiXLcjERs3px7q3YkGtveW4bX2j6ZjmwHdjxLhvuCirZpAgp9uWZoTbQ",
  "key9": "39s8G68RLe72XZHWsmLpnvcffyWscRNvA5bjscDYSZaNFEU3EV4XcjkpAkBWkyGgHcb7fRGUVF7cR3MQ9rVuFrq6",
  "key10": "3x3hC1Jv2Pax3d1JX9zybUkDAQABbyHFH14fNodKPWQzLFeLiwZgLz2XHnRcVWaPcQRxG2GAgwuZUpeCu8xEi1Qc",
  "key11": "NJCBzfNj7ze326Ekr2K2bPBLjoQgCXnhehGNHoqcrA7SAmxHKUvFHwXJtQbmRc6NixTrX4jNa2yAQPJHuVL7cag",
  "key12": "axtu7Q4Nprn3SZpBdET4UUtU7fyBzXjVd5HoVw6jBPocigsMQxcZpnbhzvHeRm8oXEad1PNxYfK6gf5DGDv1e1z",
  "key13": "4Zcn5qCVigdYiVoUYhM3PJo6RA3PUyVc9QNiCNRJFX1FJFmuoLcXgxZu2Xtf3wxb3kvoVvMyohXWpfm9sPj3U8Vw",
  "key14": "3bSaHhai6gfuFjqnDKGKXc5qzYMTqGATpcSg8X5iK3eURSpf3MKKKEqssgm8DtAhzHMap1gwfZN9fyEVYV8XxfBx",
  "key15": "2WRWTKJB1pNVDf5FrBdPFCu3BMxcfiCTetQuHErzfbjkva2f6zq72g5y4hbFX88nRbLAL9Wsg3sNbLMYCbiFZ73",
  "key16": "5b2jEtL6xHHuhqerxdPKAqPz7PyX4VrtYHJErxDarQ7cDFi46dqJe3DwnbV2MvdnoSpqTcY5dzYZfhcVKuwxkTH4",
  "key17": "2qvMeLM4VoFPV6vBMM8mRnmHynDYZ3m5PCMCBLrV5YoEm1stCwKUt9GNDA41haJBeCMNg8ZKQu4xtHKWK96C4NtP",
  "key18": "X1PZCKQXkwuz2ch5qnUhXNiGn12MNXPbJTHcmFF5yLqZd4BNHadHjwzjnQQ3DAkqqKHGnfJZcEAW4DV5xuuq2Du",
  "key19": "3zC9aCTvFy7zvH9isHp9nK84ozhgBPAZ9sHjxMf3eeogNjUcwowgdtXRYLMn6pYJDy9jQsyjnQ7FJZaKhsWLLjpf",
  "key20": "3bsAkqPT7VscDuT2ixzG9NcaFpYDdk8jFo6PVDgLZAUk8Q1BgFFfRwF4wCVtpkuSKvgAahhzhnrWbpLk29xvDhhV",
  "key21": "45FBMfBxsJmQYpr64P9VkGu19tkb6niVcVjYEZors8VQDo5oPACtLhNtYTe45NPVsmJESAm7GjER75V1PjSaSPKj",
  "key22": "4wdoUeqQDNytUmyxwfeSpzv5poCxZoxQrfJUrnprxS5NHXtTd2kqT8kk3Rb67676NABo3hUoKa8XL6GWqWc6d8BW",
  "key23": "62uP6g7LRbXNrjh34uYUYfm8DhRBTKH8295Adm2aNWBcqhH43zLj3vuVZtpqANsTmfMh6Kh6Zgj6ChZ2tonx8M7y",
  "key24": "LKgf4vbZQz8LiEcpj5EGSe9VQddTnHA1DVL4hjHTvCRLewWKxZccRRmEr5YzdBs73sXw2ynBgfQXPbmrNZt6EU5",
  "key25": "5sruWdwhbNANZVaKKQNRyVpmdoLyiUceADPT9LUnhQZkXpvYNt2woGmLcGxDbpfNtu6JzHJgL6mSGhHb9MvmTNA1",
  "key26": "3drvWk8doCFuDMymwXFhJwYRp8zU6vC6Bs4WEMJKevmjZ6Li2fPx1xwRT3ctVNMNkjbUrmzkoR2V8EPEMwHRffEU",
  "key27": "2svkWZSTg8MAcSHH2qo1VMBttSB1bd56ApExnmAomRQbjjkKJDsfEHZLVRGauJLbfcDJqDXzUEC1McSteB4ZWXcM",
  "key28": "4Ec2BgGETYL8Crw3mXPSUR7qSWCBhgcrGhKL6DZehbNB5khgvSkxJUHyVhviKgVbYjmqDXrWthXyaojyD6MCgsv2",
  "key29": "5wi93SAimNUU2U7GA9tkM3A9Q71s6or6DfnjyKDm6HHFm5e5CAt4A1FuJ7xv4VSNCKo6BnDxBUWPvkhPmB5xJQmU",
  "key30": "35WEefmrXaTnA2pViNE4eintFwdZui6nRiVdZVYtq9xK9RoHAyDXZ6yAaVKTo1knnxQPpjQBcLEWVHBfjzn3St9N",
  "key31": "5jdKF2aA2i7bighc2yqqsFGq4APmKU6QRJGXvqMmBGHJWuYMYQ7FvaiJCLMi7XQtLFM93LniRPS4DKTpNtTPjT32"
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
