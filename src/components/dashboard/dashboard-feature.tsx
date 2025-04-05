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
    "3Lffnvotv8HGMmRV2iKDJQeUVEA9duknFt1tnXrQ14rn2BANw7BvQCf9XWyavGb9Gpz9swWPnW7yPGBa6V7Exujd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tcyV5u4KRQd4doRHTqqtavMtpjF72rHP9mD1U4HqCnApy2uTL8Ltz6PKqBogf9pAGMoPLQY7RkS5tiR8gnBPVmX",
  "key1": "57QCFVRdFXUHq6aBmmLLF8jC3zWJkyW3uEm3ovhKXkZ8zGsAzkibVMPQ9sJuUbg1fAUi9smcEzhRhRb8zKq9o3dn",
  "key2": "2tpV36GJ8SLPV78nAMZfuzzxeVUZ8VaLs1tSJ67AA6bUaL68XUHbyYb3zMNGFhY6t3TeS9GGCTJ7UuUVguxTrwCv",
  "key3": "3fsfJHWTqpUrZT49sJ15KcEcSUqmsVQ5xkxPMqhyRzyCKag2f9zFnSc2KHcoS34DJ9wSm9THiVzQhvyQ5nd88Hez",
  "key4": "5gQcMm1u7aPK1mo2TaqC7jdUXNVtS8AaMmGrXsfv8UBR4YZ9kx5tYNuiccfFW5JoNU4c77kJgWhYJtRzwG1aQSp4",
  "key5": "4hjGTz6U9WQo3npRtkyxoEGxbgbBkLWcFDzgSDA2vXVSUa9YBcNLE4kQ4QvQa8FZC2nRuDkpBrbLDA11BinrFeFj",
  "key6": "4GAYPaq9GCLAzD6XSGZFKoQQyFEmSssk4kBNmYT73TiBTiZdgrjgkw9R6c33mSTQyyrNutCNJMiuh1YsU84jF9sK",
  "key7": "4izAivvtvYeFUuz9dQnxc9if1wJogBAKMZRr1mq81D58jAJkzupPYEWQmQSbLnS5LMzioio5LweHpEYYpU15Zcav",
  "key8": "4GRXBSzTnyykC3akRrzrXkDvu6njUNWgs34SiGscfFxHwqASGKw1Xiws7hXre1mrbFaP1TdrbFvV9USCA2LD7KPz",
  "key9": "2U8pRt5ag9bAzA83PTgPCvvCXa2CoKmFLxRcnTumseRTRghMAWMNgdQHaHpC3mKs3RXXJQWmSU9LdV27v2GXXHkD",
  "key10": "5uH6sFCYETFujxjib6EjNs27owYnGPf3uwfSNL73bG82zWxbVWLcTPPh6bVB6cjivtniuUggMyFnZEG5pTddCbR8",
  "key11": "5qdznuQgTNSBzpjQYfuHfk7D3CFV59qkwi8J3yX2jPsscGsNqjRVqi744RZYsichrygbXCxKaH4VFBAWcK6R8Rm8",
  "key12": "xzJn6akYqvJUJpyN6zoUoMNBLu4FLE3GL8rfj64hR6e7o32tYGSdgdkwA3PUVJagiQhWivxWBCbCSMWHPebX9fR",
  "key13": "3EwMMJDwmcMfGSjyW1fc8qYCve86tFyHLqmidmCPcot73dektTj9GznKRpu7erfhXDi4AERLLgWiFsLZLmND4s9w",
  "key14": "2bvVCXqubtJAtguMU1M8EJkBp3KAJjBruoW28KmPjY84uNsbjkALkYfSMenugeT7CXZkwLvBEGdjPbpgXbSDXGdB",
  "key15": "1cYyWBP8aNZ21o73QxPfeouky3CXmY4p5ZY6TDbo8mQEKaiQpLuwHC7W2ysYTNY4VcNRzAMCUjhfDsJiL1M8sKp",
  "key16": "5wdBbw43QrZyK2H5nV5uQBQns6MMoSz79nyQKmGU5BmAfBs4jsYaSiCvQpyKFcqMgjJ92SMPu7gM7iYLXD8rbpnP",
  "key17": "3iL5pYbC7kqGWN9UTF7dRs8L89FPwYqDGTRmwYo3gWgB6LvZABoRupXmJwCP7Y9VfjXvA9g1ZNHtPniYexDrtAqM",
  "key18": "4ccXyimU3B8qc5WzPhStQ5hFLsZES1bzabXLjCreY4K2eb82X5vAJnP7wbe5iT59keTX4MDHS8x2aiFoAg6yiVG1",
  "key19": "2EaFJqAncUnJ46b4eJEHEiK1obqB57TMnKniP6zttb3Nt8K7PWg89h7XmMn3ysHnkeJ3fthhtZnqsyfrAKKriFVJ",
  "key20": "5RYDEm1Y6wnycB1pLMXR7xPKkk7RGz6zBgcMCZW9n5NzxDixBxEEgZnS5NhEsZwQn3or1xwpGrtobqsGnoMmCsSC",
  "key21": "3gAEzGr5A48EwAVxTy8MzmbHdd46V3LQ6JqTGhte6vQm1iEB2JdJyA1xjgLtt2gMcwsmz8C4NfVhSPj6NNpEEvbW",
  "key22": "2cE5uby2b3ctz6Tb8erUGRQNyCSNqjyiUPRUEuRBV3TzGCT8xFpb2tp9KQ17iPeSbU9YWEq7j4EYRBBsBpHuzZWE",
  "key23": "2YUyXT8ByBh7TRsUkwzcR6c85tbLAxL39s7ejPnStyiibtqB5Uyw76GoCLov6hS4e1tDojsiTDswof9Tgiibuthk",
  "key24": "nedPsJSTpH3hkBHfv3DhGBLN2pTYBDGb1nGWSrHaniNVD6VFC242jaKJsoJ3PAiSSzuLb7ukyFW1zdut5DZwDPy",
  "key25": "2exnN57GTG26HdCpPAE6aLK6fRAtvtBGnn82mbWtmxDsYdq4TGE5Yhm7eCwwwL6pKz1tSkVqQRm2XWeVLo4BAxC6",
  "key26": "51q6vFgquaM1CifAgLDAYeM3ZBWBAA93EmD7Msia6rc6H8ZLtGMmX1jwX34ZtmZwMqCFEhTi2ZRBq55o7W5r8XBt",
  "key27": "4UD6MjTyD7UkVKHXAxMwEqWSPFS2TcvstnTkG7tVsu53VQR1G1J4eKBdkpp9rJgTDFGREox9w24iEUGUE5KH8sUA",
  "key28": "5z59y1Q7v85RZ2xmsCp7b2MjgxnCaRWdUZmA2gAMzwnaPtnbGrfCyXucZ9yaQ8aN3gqbw6hk55io39yP91EHo3i6",
  "key29": "3xHmb97vvc6rXQ9D1q6dmGzRGrWoJaq6k5J9Tdf8ip1E28UKfBqrB9Fby5JWxwniZQqLCd2snkHxGgrMq6aJZeAM",
  "key30": "4nCHXAfkimsa7xbQRPeGQKeHVsnKnG3UDDE9hrqRW4MZV2LM3vPhu8S71FXZXwdoH6VnFPGhqrgRY9VbuBHnyQ1Q",
  "key31": "2YPffKj4EUFGfxDk2SBJUAoDcd48UariQzGgVFYQssHaRVpPYpJa3iznuRA6nWdr1ysHC2FB1RPutrPBw5of4Yg4",
  "key32": "24bJHbfZ3cv58ipVaKnarD7hCS9jesWPaouuMPfsttVYpw8DPWSgXNMt4uqcVHD6avcvkTds8jt4Wzu8ANNKX9FS",
  "key33": "3UwwkvLgiokRhc7X9iNhXwToRdFuPsaL5sVBeVA4h4wsyT6FtND6hWcqmpJg9RaidN6W43Bzsg72N9APn8QoagTy",
  "key34": "3Q1HtAwjJ2LeGUDeAvAe8hMi9Xxn58dJkYtdJjMyy8do3x9uRHLNXf74QKK5Xf9YreJxVZxeiKog6LHVzTjpqvRP",
  "key35": "22kP6P3mJhSecRXuDYEnXhksLUHVYWhWkXpit52PFhDshWEG5oBskUjaFPkwpQJSf7QmetG15JDirqnpfFYK88G3",
  "key36": "2tuV6XWQg7Wuz2fEXvhvTs3dwmvdzQQJXdpd3wZeZsBa2AvQjX9dNqhMeCbdaTDefdx9tGgGsHEQUnL6iu43AXNV",
  "key37": "2d4aHKJkqauxx1VpiJKMNXvMxuoz61GS5mvvV83JkyfNhMLaNVML2ZvCeffwS6vV1qqVG2zegDEdYDtf7ZCWnQhT"
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
