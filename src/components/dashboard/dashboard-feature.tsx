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
    "4CZ3fgjpHdv69Pv4zxuxHY9mYsWKgxGPzKB9CUGmVoTm7Jon5ZeV26YkhJKg6RTy84NE1tAHDnCWL7M8PcreDb4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bv35qHrrjuRmpGWtiqEpe39qa64bnWerpgUYqX9gPBQXoEHSZhH927Lg39hMcHWYAx1a3z9oqMtzkwbfU1YdrWq",
  "key1": "4RAv6tN6Xqz4mJnfinQSTvnqVJFcZFoxkCxWXXeTjFKA6KayqEP1uHxk5A8YgJxnsLHBnVosZdmpA4wovCHQg77u",
  "key2": "4GQQSUavpVEUELtoMugyPton3ZLQDbarnPq53iZGG9V1K7ueMTbkpZnYmEPAeLFm74oAgzhsZGkZBfTdqKkhs1y6",
  "key3": "2UFoP8K52hjwFVSFMjqcARET4sfuABBdaSRQbsUB6QritQv4KzWgaM6KzJBaxVdKGPoKTcN2ZKATTPhg5zSegcRW",
  "key4": "5BCUBv2iuXFUPAuhWTX3svp7cqFPuinTkD8S34c7w4KCwAcoEebdQ6ZnKiWQr94eoGAMKz6ceF9Jm6BKiUbEp2qc",
  "key5": "625Nv9sLhqErh4Yiz6QfTrUxwrUVFHvUTwetZ1ugj8QAawSG2n6JWn5uzv125i2hfKxU2raZBsNJjPerHP6f4yE3",
  "key6": "4fMZZ3NaB9FaGk6tm8NEojgVrBCy54GdKMwuuZtWHQaDPkyvoNjqCj8NAqb22HRu8N2ogaiFuC8bFL1tQ4Uzb3cJ",
  "key7": "63LGGXHh3fPXGe2Gj2pqTnY4urDcLMcVFQtf8vAFBTuX5Tdmi59csVDZuGUAgxDfZyuqCu9inWY45rhccWuV6fku",
  "key8": "2o2ZH6ZNfvYwSkvgoJPUvNzLkDviaMZuTKTv8chPGZysoGR4YzzA7xuWjUPyMHBPdx4vbN2jhaT4ZibM5MrW3Yt8",
  "key9": "4n8ywn1oKVhbPHFdRGmGshkf8PjaB3AXwkGa9cyeUQ1aENrHfvFvqqPKMsm9s2czMHCGPffYkkwwpp8PJS8CBhnf",
  "key10": "iY8WdtsBSH1JSFJVWHqpfg2z8Jk2YYXnCtb1sojVEqHLvJRTokJt7ZL11uZBSXhkKA7HXfeoodHT3RJJS9qqBiy",
  "key11": "pPgQEWUixs9dJzwdqo4TH7n5gtx8VzvGYFvwt1EF4R3cQJebTRZGq7hQnfLp8vsvJRktFm9XrPbdiNR5UUR7Cnr",
  "key12": "UmHxmxa7T4eDgegMeVmsuJWjC87AvEuQ5Qqcy7mju4inr2DbPtmKq5iLDMd6c3eVrEY8qJh9W3j9foxZ651CTWJ",
  "key13": "2XjiB1zrU6o7uuXTmnua1qZaCK6k9rR2BZcAP1QdqDeYPiDRHZZpcrc5xyZk4FYmLScd9vkSCEu1YMBpQuyziHTu",
  "key14": "5YGh5W1A5LYmLUjoLx1iB84fsqCv6FaktYTNeqFkYFgEmPFV55soGZoiYc882CuYwmyNRp8KoNZBdjRPJ9HTVqZy",
  "key15": "3YoJK7rZXtkLKLXKqb7ucfQPGA6GtktBvNSV6sfohn1CvQW6PFcacM2i3cDy5459FSkwnL9YqudTjKJ8aoJ1xUoq",
  "key16": "zNQt177A1NXxDgvfcaZb1W8YBb8iPNmvpKp84WJp6GTmBGBJ2n1sPx1C4ibD9P6C1ET8a81PJzqxu4hiUzcpF8C",
  "key17": "2c9XJ9MjsAJGBWgf8BGZViGNqmxK9Ga9xNqbvUNwtjZzDtx3tkZkcmCajZ6Pisc7DLEJNBnVUgxno4QvjCViXYkC",
  "key18": "31FAHXrEwQn1Crtcmxhkhv7g1vTzUkdiLsYsN1rzf3GwqXhEbdphRQiyEM583CgbBaahHoq7ynnMmeWa7RuyoWr1",
  "key19": "37y6Bzy6PqVjZGkkPgzGSddUMMJBuFm7VXhaXL589gb1SvACzY31WsxuT33GBzPAj4t2yptqaXz7KLK42njVoAmh",
  "key20": "4EYbB8YV5GThihsRHnQ7za8rEc5YhYZjk96xECyMJX2okUvCyV7ZqRTPavqLaiD2XVXCFqTVf3dVsyLMAk2Aea7L",
  "key21": "bLR5KJj4cSY6Z4bQGFo15J3nnuXKkgPY8972GhiE2QN6eBNjnxda1RtxqQ2Wy59onagAXT819pQdQMfBBQ89Aeb",
  "key22": "53a3iojkCL4oxkB1DQmNDJWkcmnWcv9U6u5g3k2NGi7phwGi14Ttutmnn7AKJkq5HDb5BXViFm9cagwdgJJvK9Dm",
  "key23": "xLQcZUeEyhczwj2uVDBUKdU8xwZmUEuxLKTDVkTjBqsqbnv5BuB878X2Yiq76FAN8ZibXvvcLsGBRygcBtDHVQ2",
  "key24": "TXg4G5ii7ucPNJ91LGN6TGP23ubnjsS45EgsqP9NHwEgiZbuc1exMQ2WkrRpAavJGeZdMXH12YwMkUMWwFDMX3r",
  "key25": "5EGcyqHKe6PjJ9w1km8dG5MBYeL8WnajZZ5d9iCWQXKJeQ7UfGMhcwFuN2yDXwXJpPdgEE6oweu7eVnCShuW8wbN",
  "key26": "3qYpTyw3hq67nt62uDPnNG75vEduizHHCUSiYxd2a33kcD5Gu1LHnXC57g2BZuor4H5rfs2vakxE2AikAajVQCGS",
  "key27": "oaEQB62ZLjrb6VwgJVXbPAV25LxjAHN5A62ymwWH34YJn87hfnqSVhj47mwSACaHJStPSNtLBtfV3yJ7bGA3it6",
  "key28": "21Sx536ezL4oGvZG1ohgAnkNBcvNuCi1KSdaMb8DXkdQirt98hNkLk96Lv2fa2WWR43SSM65nAk7WW1S5s6YLJQR",
  "key29": "2ciztXxhg4TMBXqVbwkmthoTNp8X3w71cv11Zhp8RWBWU5jrcmJWCEiCgzZ1Gw3fDeFDvf5Z5fzrjzYjUFycFpJ2",
  "key30": "DtPnojbRF1N2sEKE3YsmQKQjH87TzVr789PaUKE5TmkMuxvs7tKXHwAxuUrjdMPTYL73gh4zKSZQnUPkMgqtrZe",
  "key31": "F8PPnTAGhRCfUmXZvugFBn8BziKH5sZEJu8zDJAYxXxzf76NjXarAoCT6kDa6Vy2mHgGyMmfZ4SpNjqgo92CK8x",
  "key32": "32iGfdVJEa5YfYJBB2mQSSc7fWdYHiwKSFYGMRzwvo4jXVcQAxsTmsYy21sP5uDQ4VMGmDDAZvF36xxzo1F9TVcw",
  "key33": "YPSLh7eoYLKkx7ocPuxCB2NF1T1eUCnphRqMY97qVsAmDL7bTNkZHd8RjEdUmCbgjJhgXAXxZ92h1AHYWKQqAMy",
  "key34": "3L9tcXGsUHVZaHD5etZFPQPbTHoDMgaLRwEE6GkxFiPa2AAZBdRo1uo6rjnttgPqhvKw3JqqGUQutrJjfWm8MAGk",
  "key35": "V4J2JqakU9ZVruGnAvYQvMxhzJiiC5W32s8RS8Qcqfczz3x4J3tgerF9Y6nx8Svic9sMukMMxrAv3tG4EMVbowv",
  "key36": "RtwuwUHMfXMk7ys1KgdiJgADTdKfVCrr7hAqFqxdhaxyt6nG1PSDFJBrY3mScoNpbCRXKHZ3GshmXP6yrArFS1U"
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
