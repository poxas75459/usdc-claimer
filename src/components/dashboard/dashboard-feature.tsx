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
    "5ZhSPkQCfJUAQEtXc9UMqU4q2BwWEnFd8xtMCVJUQtmL1qkBvrCszHumZTF8rUbJFVnsyLGnHv8bDDZ8PGi47Fxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wNZnQ5kXFeC9DR1wkyA8ukN6CTHoQuKkxsm8LpYhkx8kX8x41yKx58W1biK7c6hbiGqnWCgcGAP8KXpNWSmAQR",
  "key1": "5wNegyi3sYrJWz2jzZTbag3xqvjtD96qMV9CNm8d5Xa2uyc9TXAuSRwMe6tuzmvGdpPYyNYJL4VeNwK2PLyVKPHm",
  "key2": "3Ur8jGUQTSRTeps9RrstTmj9KZaSySUBYckTEc8QqnjYAUVnE6dxDqx1DxXjaNdxj6SZLJAyQSYedSiLeHfLHhk2",
  "key3": "25GX7xWkcztFSGS9dPPpKiLWayU28swhiy5bRHhe5QHu1SRkxmLYvANKhzdngFvDUJC3sE8ogwgZwxazsyDpQX3x",
  "key4": "3VnNqKzny9ADedMxLQFDKmccaPF95EKhrHQfPUfS2YyGQVLr3Ty5YEt9mEnTv4DtPE91evj7eYNRpZ8RSyurV3zy",
  "key5": "r9JqRY58bSxvVgJfEQF4sGCateqnwsWUybD8dVnbCu2kgTfPbuGWbyuiz7cBbBNRLbrhvoF5pT26mx5DXRrTYXT",
  "key6": "4B8rYQQHJhoAKZhNT9S7Qi1RXnsM5TjKuMecWvhLs2CzuRJMYnxeHkq3vFcMaK7SLppYw35EsjmSj6NBrn64UMpG",
  "key7": "3iEieZuqF9QDfPJaVZc45K53oJa3jfkSWSAEuR4zc6BNY8jGchmN1zBS4Ur94iNoaxkMESoBK61ncB7xpddN3e2f",
  "key8": "mhKD95E9S3zutVnJxaVAuqSMCcUbpb25dPNexAn7Df7ZmHkJBLVLhPzXwrR7US5K3rY7NUhrBMz8mxeDBij88MG",
  "key9": "gGpod2yGqzkUHsrpvDVXKDzhW8msvPoTHXff5ccUSvL8kRUPhPCZdhCa74oQYjqT6yoaa4wET9KeDgcSCBhzJYH",
  "key10": "5qLMLNdjt9NLqbvhyMJCbkyL3y3dQHmhoo8x6tMsHjWzRrka4iiG75mheFMDDxdsTVVbEEcwbWTeKcxB7A6gCdv5",
  "key11": "4WUHJMSQViQi5qKsCin1U3pqd8reCt2kY9XR7Jo6JRWTJaF53rXTozWCWkDeKLx2tUf4FRjUQQMEjtBxPPLAziRH",
  "key12": "4HfcMyWDPemP7iHEtnLPuZBPF1eCCYE1TSLj91e9SdzCFwH71qev55PYZXwB8yJiHRgfc2ninRVVmTmVCeJWd3Vc",
  "key13": "LwRTdkonZ75t7asTyERuFHcQ9iiZhd1MUci9quWyxVveRc5A8mVmSyrMDfvcxCLnW9fZJs5GrSFWBGFYvqLCgit",
  "key14": "2S4Az42KV3zz8vB5UV23Ns2GmyC5ChBuek4ZjmjKxzWVZLLg3aLVVZGvQmgSGww4a7FJUrYjC3cLJGjpzS7QYWgd",
  "key15": "3YzsBkukfjwruJnFoT6AS1KGpKyViKAQkspbTs87B6gxm1UHMTCXwbVehfruJ6PQx6ognh5ckH1KfLVC6DrJdc56",
  "key16": "3SuoaGVfQCiZtC57SodeseNDsZyxQ9shZRykv2vQtwuqDZvvwfF9BjsbizVw2Sb53T9wSfEWvv9Vb499KPLytPWr",
  "key17": "3FsZ6XFuHurB3crCrB9CFXnBkamEPUkGCSugAt3pRUzQAUdPHk38eSS2mkK6ExViy36gJjj3pwbtrhtjNfJqLB5d",
  "key18": "3JXHGvvHgq2w7mmjwF88J4pA7ZcvhvARrFWdffR27VWcYqAS8NH3W9yqnpzn76KWKgpbu9diJdf3W4HFMoeRjUz7",
  "key19": "5po6fuauJR5Shc26udU7iS4R2VUc5oHJ83WVbRUVnuBABPUDkaSQja57jRTwoNE29wMN3FtoTrffNnxqdYBXyPAg",
  "key20": "4CGkvsRePbGyhwASqD3uWcZWKHRZZSUJhW852CNRuoTzVP4p2qPwNmtaiXJ7fKxqotvTcfw8kPCyNbAQ6YoMsdN2",
  "key21": "4Zd2PhJTbJFFBg7YxrhVBJgJBQmUAnbBXowguTKq1VqRBgufaaFXgAhJMh1eDLUL2bt9NGusAk6Vhi9nZtZEpHKZ",
  "key22": "4BtJqs38SYpGJyqFGFC9iHLavHsf3JeAyJ8fcbFj5bQLXLQtEzXak5DFHoH9FPNERs14YCawT6way9RKGHm6XFo9",
  "key23": "5EBQbtb5uEhFZ5Vzpexvogo4nApB91CYAEgpXZBfc3D5JmK8FvVtHSJ42FxeGdHajHFEKzHV5gAqUgsSFMq8db3r",
  "key24": "53X2cC2g6H5vuipYCui5HN1QipDNbroX7XigJkiUAbS8EQk7K4bVhz8VruhYdrQ3TpmQ4tqSiCbPNT4Si1FAv2Py",
  "key25": "4VUG1mgr7SqLNZMDLrgieDqJbELLnCBC3oHisEKpbUT3sFZQLKMhro7kyG2V9oqo1L3Xs7Qbcs5UdmvyKUTSqfFX",
  "key26": "3LYcg6o4r49YeQsTaHVduuS1KYzDzqRZVmj1ZXRLL9thHVBcCGB2cjqB3avEf6u7yz4rmuRg9UGxSRzd3Aemn9eL",
  "key27": "2BZsFdCxvJdaRBSkgonsQfdLWC4vYc3hoaVKJfVBHtdXHFHdhLqZnYjmmKvCqnS1tzGfeB9sifRVVVNQTKyXp4Jc",
  "key28": "4R7kYjRgKzDP1to8TBco7GT7Jodp4HLyxyRrV9UxxK65ao4iXHRUNFCQctDj1odECgiSyjVtonURcNDbrMePuMWo",
  "key29": "5h755WBgdvi7dkZySScousKLnJQKG5yzitQXAC27H6K3gr7PB9xnx5j7bGMecU4uRfoFXaArb9Jv9dMmEvXUc8Qv",
  "key30": "3yQGLtZZHyH7A753HA6UtYr16Hc8h6aJWJRXpRZskyBvA2F6AiveJUPLU5GuJzQ65LxniTEuKyAzHQwseUh6vKhK",
  "key31": "5DgUB2c9ZBLGK24Sa5YzGyqCAHdM9dJ5PbA99qfyDwCStUSRmJKGSQ1JMQEHHbjRHnKUEVSKJVwYvrUEcYe4YpXn",
  "key32": "3KPmHmEsFahsY4bfvpHTg1U9bEkBBuDghSYULV8cY42XDm5AWn4qrMM7kYs1GNHt31PBm1mhVz8F6NJfdXMRtjJv",
  "key33": "npD2wVQBcYQpWshLEMFpDoHnRmXF7EcFAYgmcFAFFdAfQRCtggSYzGbmGuPDo54246w1kxu5W4kcaJCnmTMkMaZ",
  "key34": "pM2QFFu4ZUNcxw6vtkJnXt4MFu8PzJSJ1dzduwCdGhiDYuXFswjBZBk6ViasC2xqiqqi91iCzREDoSywXNd94v9",
  "key35": "ffAzhf7K7rhfiK8v3toGdH2L1EffNquziyxEXdP9vyaEP1ePR7nipubszvS4w47ZrCkdsLkzQbuoERaxbYzvUhg"
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
