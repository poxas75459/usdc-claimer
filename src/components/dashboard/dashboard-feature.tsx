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
    "54eHyYhnLFAgQTBYBjkmSJxkcRECif7VDejDSus9s2DAa9dFxgfre2vjLVsdiPeiyCoHoiN4b7GBRtN8qvsvrwij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ib5bmpe8zjB6XX3VTP2bBScs4vLGuwwZ9X6UkMnc7qCyyVnDEUy16aKhGUrDY2s1XBiivnJFmPZshuZyk8prhFX",
  "key1": "2EgbRubTytNeLkPTXboxYsU8qbUPqPU4PCEdU2WE1okCXdLsEDPVJziBhppmuLh2McP4Udgs6zsdW2HBHRyS5vTW",
  "key2": "4mZ99g2gAZnyidBPUCsegj1Aft4hWcmZ1TcwhKiWacUC47jtYeEZY2e7Dn4WgSn2st3x1farrfaXPX1BxafztanN",
  "key3": "2JdwEef8XWZw61Lxy1U2TuEameq5BwF2Y88SpXtcYDQng4F7eDRikQNmYfqs7R5vxFrGtTP6F8Q8bGwPh1w6dGB2",
  "key4": "FXjdsFcPgHe45KhRwiiEnXJWQQ98z79bszQzGFnkXHjgM7ZBEaywNXnyZ9ZAaPm7onwMcpk7GsPAUX6Pdca2jTC",
  "key5": "3pQZ4wpQLp1H9uEu1srYxF4MgUAgH6hjXwbc2xkGHemVKZbGRR1uddrEuM3sHkatSPVeaRoUo6n1rfgLwG1ptH2p",
  "key6": "3eaaTNHL1FdWpf8gcTaHNzyvvXDXS8eYr2VjHo8SUEuDWW3RGFbHrL4qQFUeoNAR1pFrsAwVFpVtVdWy1LqvWnZ1",
  "key7": "4BESCNqwjr8ciqExHfmNUKneVgrrfi9tKzbdaC5JPRc9t3v2EQXND8JkmgDmnbMNWKJXtr1PaAHrK7t7kZnhBFP6",
  "key8": "UqjKshc8bHrkne3LFrtN8VRd7agsCw6SmQ2iN5ey4hZ6ZisFWExDwpb1AwKQ9k6oSku98VtxYzqqVmAQEX3bdLa",
  "key9": "4CVigfJFpcUVAbHNZTcj7Qq51ff1Z8yP8NcZSggDZQEfLTDSpf7iYszkyqrZ7krBPrY8jhAm7qoYsjEPsQJQtSWw",
  "key10": "ji2SWGjyc8NAdurWcVZjK2QE3CSEu1owuaQCScDuPt4g94HQkyGDYz4dwis7541QbuXfVQkkhjGYdMvp8hwkPbU",
  "key11": "2L1bgjD1WagzH9fzQsvYvSbvMa9BmQjkH9PZsKdNEQZKhhUcjW52iYzAkdwdDnGTS2j6wmnkavGmg3H5F66uGQPN",
  "key12": "4xrXLKzhdP7xrMVwofyqRVYkrJZQNG4uMqmpve71J7KCws9j3VNDPF1UWVdja8joTLN1J2uEyJB4ppmNEUmqTUQ",
  "key13": "3C6K2VsqpzaNDGtvnER7RUFdNWAKVu2cAWy5CXpfTjasJCcxpWYT31NmXn64iLRdXdbstEF4UZP1aKASk3wo1kUx",
  "key14": "ZdwAAYHLr8BFNYU2awQKMeJKyUwwFmRg2gqoYvCcAnRyQrbhu4iA2xgMcrzGygq8PDynimACacCiYNAGnb6Fwam",
  "key15": "Arm6DNtWfv5X37TGx7uRGyfiHRiYJc5dWf1DqpjuEWeUH4EpfyFv7Lienz4yiDy2TsmVE8wLAnsU7Q9Hw4hsR1T",
  "key16": "4GcGZa9U7YztuuUh6tk2BMU6QLPMqs66rDf8tmXd6oWoEaaaABEGDvGy1eusnWESdFfWJeLbx4cKYXdzfTqKAwf7",
  "key17": "2Ggv5FoBVuFJKykxKGYtRdYEGfHvtovZqRMStM4q6Hx3wrUr6ZAY2tpdxYzQYuEi4qJqVWmTKopk6yxyupUKYmw3",
  "key18": "26BSWSvzwSckeaLfTeuycNxtf68nwSAYWV7oRATu5TXgurDQ1ALffzhpCxtt3H8JTHtUpKG2JtpdfRDGAbjV1Ts3",
  "key19": "2ghTJywYHospB7hZs4cAgwLAQ9n2gMFLjLzfxmVvgrDLyJ22jRCCEFNHuJNLECkftKS3LyRzYFs1G1v5J3kDfCyj",
  "key20": "66Ka8tzGN2iN6BjqoPp98Cb9K757zQ5kWmyFXn7w3SdHicvrZq2sWCubpSJ3acYCk4zj6kx6wz6XgRz93VV2UD4q",
  "key21": "3s8LH3noRT4nQ2tpZgo2GQVokwQmctRfQ9fS8mPanuBCDkKwW3rUv7214KtDrYrxbXpGRgbvBDechNNXHvRWeD1k",
  "key22": "Xdy1aoK8mCmbWgTbfk47uk9j5zi5i1YWWc4kKNt2oN2312LFTykBVHJ6V9sFaNFRv44kSwQqXj4QgntGmAiuUsE",
  "key23": "31fmDaMSwbFzUxT5MX7L3uiZZe4bYWeT1SXbPbkzbDLT4v84HnodzDaPkYNtowy3kM4x9cJkb8JoDvQeugZi3a1f",
  "key24": "3HBJvid7jqAF3b3fFoqX6vrmSg3vdhC21z8z6DiWuLahfS7SaA9N6z3Mjht9FdwiXU4MR5zwefSz9vphVqyskNDH",
  "key25": "RTG73YFFhdbuzdA2XLCFoB8bufHjvmwSYdCwtoJAKjDam1UuHbSAWm7UrPatZuoQyyz9rYL87bxEQT8wSAK2w47",
  "key26": "oxqqGmskm5WaiYxW1WensfvG3DNV43dLuNQoLMxdDW1YiQhP6fkSN2YGEF3EUzWvZJRvQiydpg9SCBNTviLEBh3",
  "key27": "4jkEoP913qRwDywn5UikKRnGXdQuE7PbLSjkDRtTrhez6dZNjzx5Abki58LWrzSSmXzJTpJyA3qcp3tXzJDVQbdQ",
  "key28": "4iJb8JDUt1kF4iRSn9SVdjUdyYMhrH4NPLHo5qjC8jvZwP6qdC81Vqgf2pyVcf9o9irxa5ns8jfEWka4Vo7wytjH",
  "key29": "3o45GPLe6BnKhQumAM8jGCABHcDvEuDgv3C7uJs7rVDaR5q2X1RsS443e9dR6RG1wx6Uho5ipye4x4jQM6MeiWB9",
  "key30": "3NUAvscY7SwBA1pSPSfzg77MfbvFXsWdwNS4GkBpYT5TCvj7vYuxoJMnYDUP3pBEWh2rrwtqKp6A5UihE4JzsJGS"
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
