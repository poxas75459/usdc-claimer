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
    "5CDMH23uaLyv51CsWppDoBpXxP8qmjnUCBgAJdWvwMZqjXMtYfJDDq3dn21MdadankfphDmqsuNpS3AKf2vLqJiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvDqeFkYt5ZJEALZQU8imyAjNWnYtw7VTeJe1wV42KCzvqMA6VnGt3Xp9S1yGe9oLwhxXK22Gpqw8gPLQbuRa8V",
  "key1": "2zET21DZvf1YHHam1GZpYWyFSSpML8tQSRRcupDzhuiHFvVxVTYxjWyYthi8JBsNKE8UtWRUZyVZaL2W5vdtatoF",
  "key2": "2TwUkDPpS1TGBpnpcmxVrpjcvoeoBGWpx5Cu6djynwgS1C427R9BaDxGXFSxdrBmxbZvLBSed4PZ4LtYRdHEAcUd",
  "key3": "2D8g85VSxBLMrL76wCvBHtFxsPonwkzSqFBfVbnqEcdqaj4gzHiZeHbqbY5BRdvTAJGM8qpz4YjD91YCqpGsZ362",
  "key4": "5wcQupfE7Bbh2Nd1VQCWdkjLYvpz53TNg6Z3Lnoqcj5Hd4yCH9c9MfsaSv1p3a6b19mz7i2r5ng7BMH1qxY3N7Rc",
  "key5": "39393tvzN4zmDRAghA2QvbiAbV4bwBUUeAeJgytrGr7fgG7h1H3HbNxXFwAA4bEmDKGyWaeh9AUvUgQZiUagQJSQ",
  "key6": "21fqiTSaEtGrS3cdh4S6zfBFg5P2AHj6V8hNAPsNYPgLaHTy4Jz3vvf6YiN6yq1jBiG8PtysSqBA1PAU9pg98Krn",
  "key7": "RY3UEuzULUyVNxqomtFcutzU5yEVoNevCGPZmFTCt8RHKdY7q2Vf3AzVyDWntTKBJV28fQVcKWnZpKQCW6dWAEp",
  "key8": "8m5FRmJeSH9EHAMP61KjhXuYX72iY1TPLE3cJsWSDzwfhVpKH1R4swydkBeEkXoLgQCp3aYexTk3LHpGVqRW5D1",
  "key9": "2sTwYcXR5NtaVFpiHp3Zhi5onvkNK4rFo88oTbyBy3tyG38BFndKymRXzuJkRtpK6p2gj9DEEvx932RCcayVJuv",
  "key10": "5LT4dNdbUJrGmhDemKKwczYWAkgLBobva5uhFLYkEphnHv6VVb7RJZaWsb2sLk78Mo2reXK18CfCjf3eJoWV3fDo",
  "key11": "9tYyEtr7W9cqadr4ZDXwkHSSufP8fN11sMQL1HaXAVKi66jNa7r6oundjgBoyYT2HpgYtqTzAw6quu4RoPAJJ8N",
  "key12": "2fRaq7CYahsFMkFbCAL3vm3gvi222ncvEbu2w8qLVXuxEtiAFo6nh37RH1oyvpgDTQeNogT9SY4jVkGpjiuh8eCY",
  "key13": "39Hkg2BF5JFjf6Y3q92N9zwhAmTCbpeX4z2Zy2fmzUYv6R9QybmGAPjgvLxfoL67WcHdW1t3PGCTRe5eedHeaL2v",
  "key14": "3AVezJ5LaKjmELJozgxm6MkBmJjKCJ3TWgnrrSEL7kheGxwq7muGnc4yBC6h7xN2ukhtG46cA9TT32mzUdKfCnT1",
  "key15": "4xCNchFPHen18dV3ePivNLdTcbHQPFpkGD1rHQEALBkKV9hg9L7UxZ6qcCwaxM7KBgSHxqV6ggpNR4XLgVBK3SSV",
  "key16": "2rxH8bmdA3cMVb9aPFeKz3SHV3cCY2M7myNHPMx6fbR9tRgQjvnvVwNtyKXVZfeKekyBvCNVo1tvhC5dXyxvShiZ",
  "key17": "4fQpiKmCG127hqgHJECMcXPww2wWiCVLBScSpYWAtxBG1M3WidorKncsEvfiMZiBA8JLzccoDGpLDKuXS35xzRZt",
  "key18": "54DDF3yZix3ynKBo7eZwChxeUbQnLkk4WRukpPdt83P56BvFZaWp9P5eBySUuFpWRspWSfVAv23WQuppZwZtBKEW",
  "key19": "sdFciytqHcjzYKPmTwk39jTBi81Adq1TTA5pRN9soWuZkDFgXDwiJhUfMSXi8X7zWf9F994Wx4Nw5U8NyTFUDUq",
  "key20": "2HJhZJjnZWZsozedv8u7oaqScYgaHo3Edfs6F7P5ah4S7wBg61B2X7qq7Jv4GfFdRHFSwnuHsuY8QT2fv4AWKiVA",
  "key21": "5psWJ8FT9DTRM47hyye85nAqbiATDpFsMLLyCQUx4JevsVQwbXWnwnmZx9GwSUrYzpnoc9zurCkCQRAWCnhi85kd",
  "key22": "2egunUCpD7KGRnyz4XbgKNVgDV4Rqt7mYGvMFNnvzKnEYi2kgJ8bobuWMNTS3cgmBtiC6kRMjnGkokBZ1N39bP56",
  "key23": "JikBFoZBcVitg95u71eUnYnyXL9mrXCLqBfdgpkGeFN3QdRYEYC994j7SoYMfCg6yQw554geUMe4GeaAgrS5VKr",
  "key24": "5j5wUB4Bf1VknmX1rM6cTBrAb9VieGWxmae4BjCi3GNFqw31xQvEwEC8AW55VjqQJGcoJwrw6y6FjRcuGTa7D1zS",
  "key25": "4FXViGRyxVJyZ64qMRMfJJFAccHi3gpnNwLQ9Dp2L9bKrcyfxehLnY8VG9A6itUhCGexwU7Z5C5nPnd7gZ61tMdC",
  "key26": "5A9ks8eVWm8XuRM2mxLnA4NqDW1YE6rre1E1jn6q7ENyw9dgrzsi87wrtVDYWE59beQDNJwfnxdsEE9PZbMpdnmD",
  "key27": "4XGbiv7aGisTFqyGvCzkCrCWze37QKHRSRUWHPM6CXjkfzbwTECGQPJuZU8cNviQvhKgZFDgqtrqw4MDWBugLBLx",
  "key28": "2CA2j5Mtj6kaFCQDsh852X67NDsYBxaZ7LfnVXKMWJ5o9fqhoYrKFb3ywWx6jmHRK9EjD1V3JhrG3KxskfisSVKm",
  "key29": "5f9uvXSEu8bWMA51qbVqzVftLWMmsy5yukC33e6tMc2NU9uGHwqNuCvJiABFGkGxgkR4aYGzcPqMei95WwCwk7Af",
  "key30": "4CNV3aH3x9fUy4pbpZvHNDhvFgahBbzuXTX15BSnogYTsGWbeiMuBYE14od9b3Zv84RprnUQn3fW6GCHa4vZtGsa",
  "key31": "hy1W33jKSiFGDKJnuRWMKMiJXN6V2q1Kx1JpigoKHnphafhTwVb2eivHPoNNjb7SaDw6hETrHjr8Lc53hQAji76",
  "key32": "btDVY6i39Dn8NSEk9z8ua8m6hVSJn2HUPG77Q5WJc63Z3EzJ2BACZw5u6nV8R5C85Y2TM4JhCwEivasnAY4UXtC",
  "key33": "4AKyjYEavrDpaqroAaM1UkWqQS23bCWveVsJ5pKGwBg2NoaeT3PLuWf7YXJ5G2uAauGNdW6VXZ51SZ5QA6YCzmwL",
  "key34": "RTVpnknAQUZswK4tNV5zZcKbjz857E6kVmwaXU914VUiJe7wDhLojfUSJrpkCioTXXAsaq4yVmrJEvP6VAjdwZK",
  "key35": "gPiyjDviu7pwqkmixXrpj7h3ob7zeBWdEPRvirtC2k4VboGCtppcLSBKpvpvDdu9LRtABx6X9E7fFtfLmV1XAUn"
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
