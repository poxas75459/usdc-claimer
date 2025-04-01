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
    "3NVU96mfCcfmU3b9xwzq2ayzV7Ji7TUsWLcEkPypr8SAT9CdJTQTiTeC9o2qHQQxGGbo1DXixqjbKMFyDDVRDAE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qPdZYE7R1A15GjMGPRkGsFujLiKYDpd3EnpZZ2hK7qrUtQ1dWPbhtrNd3Kzq1rABgzYGmTU5TKkbCGh65UfNTQZ",
  "key1": "4hkQDijwNDWFe32Swyy2qtMrHcyD4bPRBgoJVPX6vnj26kmZPdBX1rPVwYmP8X5CqcTCPTvFJaAFZitNxJneMofd",
  "key2": "5Pa8hewzFezKaVU8ywfvSjrspVJ3FAcy5vUdJZWfpduoN48vT3SuadNeHkWRt9HBrqUFNgcrzaVWcK646bPRDA4y",
  "key3": "CqjUfQoDXMgu7UpF3PE7WLwnH4CxEWUd5KvkgAMucq3dsFSSdoaxrYWx7eBtifDxyiT1go7VUbRQxBo2bY8BQbu",
  "key4": "2Dm3ZAMHTfpZkYk1v7AgoKhBdaDpWCPZk1vNMK3eQwc8H74wL4fTKPxbfvYQWyuDLA4PJ6Zh5BZCdg9NvkDJb3oz",
  "key5": "31oz2foWy8yBAUZvSKQbhdAM1UcViV7YDoM9s8teuF1oHKQcB3Zk1juFs2GPF3hko8B2V9AbkSWvNCXrb15ci9gK",
  "key6": "4XAe2Hm3hfkVzBVpFjTchR1Vq91HF7eUcaXs3Y7SdS8DaDBBVua1nK7zF7mKRgpsFEeyqLXsaECT8pn1zBEhbgZt",
  "key7": "23th7ZmuTioiu1PFjT2UM2KTWfmubBRETD5VzxknFT3pN543KBwkW7fs5xx6ZruQBwSqHE7SUpG8iuqrKLFHGkDK",
  "key8": "4jJenNk3NzuB9VARuLkxB98vTpVMF41P6vZXFb3gWCVea893n9BsoqKxXtQjKZvV2i8doAY52UG623HUu18HocNy",
  "key9": "3HLZf9i9AZa1HerFTkezdBnLopmRxbo9KvbuJy14nmbdhU8tFRD1y2B8NEC3PWYfM3R54j9TaxEBF3BMNYChwA1Q",
  "key10": "4AMsUMuHfr1DksXJxMHZhutzd7pY3xEMH1Rk27kdaKyV3vmhJRionQFqEodcSpF2YqCXLyq8RnKvjKpLGWw4cg7U",
  "key11": "4FUpmTPvVGWrbQFBaAv9mJ6s1zb4PE7yBJ1LJzucUgu3zAW2YHTnUGWtfaKcTpFeUgssMQK8ZLRfq98KJRouFZEU",
  "key12": "37VWfKmxC31mAEQLYRqPEMoZXtCqoBnuKYWXgqvV9zeSxZWvs93dau4SEhcjoriAV5i1jcyM3tzcSu6Jc8tCXupT",
  "key13": "4TpNzJQV7J5Rk3GKprvgk2ekARedAUCHnJJ2Xu9xt71z1x7eawmry68tgEBkZEn818kqEiesQwLG7Mm8MWt2shNc",
  "key14": "3Wo11iEGbHuhhcf1yJfrSyk6YHHLJLRycG9QuYDR2vaNS4CcrbZnEaBsWcnGzg2qxVQha3kgiKNbwqk75sgGTeZS",
  "key15": "3i5DYRjtfyZKrbTxFjMhndooN5BQ9j8TdMGUeJYaetcmYYYGtbJpECdF9bxa9G9mSK9SD2RUkBvfKfXqS1Au8PaC",
  "key16": "4R2BkNLMNTJLSpUhTNVrbeGQuQhNpvbDFHTDn9fYi9RoRsu7oNTijgzwVAkf9vFWmYVZc3t9urP6Rr3AykcYo4oE",
  "key17": "4V2Rb7zb3TsBYUP6zYiDgjeDYCtMN4bXEk4qR6iCd2YFkx4w5U3TeyaPL3H7d33aY5Xf47g9okBprv4WusLfWiAq",
  "key18": "2nKcnPQWaMphcbjMyXKmcnT6HD3TG7dAjLrhbmbcHBTesowLMP1GQLVJhiwiCbv4aH8Ha5ZAeDrXFTDaGkefjdEp",
  "key19": "2tk8oibx8jgeWjVNm9V8SwoALmatWmvZxH1nBpQtv1axEvMz1zuWiWhHdF8oSdW8BNmvJm5jLr4iZ9wqXbnpwBgn",
  "key20": "4iJJXvLopsJ4PMd4SqRArkggy42kSSzoxfmbFMdEnv8CNnSDcYa9iuXAgnLEJUKL5tnD9htLyehXZuKNpcEfgZpJ",
  "key21": "2pjSxUSZiu1stXA6TrDSP3PDFnjeWVi2ffVFE1A4ccz96qMhhAkuUU5Y7xCL93Dz39GTDSMwGL7Z7Qau3ehhYiMz",
  "key22": "3Cyt7A8tYYwaV2r1qnRjEbLioSUiC8Nn6r3wvxjhmYTbzfUsjEKjgwf3hArDQismY9GTjPL1ma3hzg1ySvGB2HcK",
  "key23": "5EjiFRhWciGAZrri5X9xZT2XNpxoUznJAGek1QVKgEhTRQM6Gw8XEeM6mwKbvYXg1SzdvU2WgKHnVBWvGfpyq7hc",
  "key24": "5ZgQ3toHdcg3QUaEqvxfkChH1KUp7hACAPPBn7cU6upPn437jDB1PYiqY4oWXMrt8a8RbcM68RVxzvZ2JNYxzryE",
  "key25": "4mWvyNhX3mer52jeSa3VAeKYumnULw4QM5sPc4rnVuWG2jG4gyp8r7yamCAcPsXavneZXaBdZrCB5wKKsoYPnxWV",
  "key26": "2kuY9gnEfA7eVR7MS3P2sJEn416zKxnTDZfgpm5kT77Pzygdmw4puMqEoeMGqQDicEDuuLKoqpsakRuzWjoewSn2",
  "key27": "1byeRisqHdeZW7YwavpYURhkJP5T62PFQcPbeDktyxx9aQw4oeNPSbkSaq9qQKC2SuXQPCtRXFheeM4tAzYPUTn",
  "key28": "43RMcyTbtAZumxBtAo55zfT8B2DC67FydtopU6HAiBmhmfR1zs1FRmQfdk232Hnj34uYCqcgU8CpwmmLM8wR21ww",
  "key29": "4rWrvpauiuLMDpqGRVNkQSmgRceDDXw8CpPhyH5PS2PWfU2zh25iEhjTSK5ztf5vyjLf7bsSh9N5SYeaLZCHwR8e",
  "key30": "2D6BzXbU5JfrgiT6BVknNkQbaewmdK2XHaT2N9a7R4N6CHVy2yooPwHaeVvVqP5fGVxyCa5wwVKw29rLstbeZ3f",
  "key31": "42c1eYjaMPgKHqhqhaRnFKEeZAzJsVU4HuxXrutJNkKFEQf8mnFvWmBq4zR9d52GLqgdUVDRaFEkuQoeGU3RuokX",
  "key32": "2b1VVvTjr9GCzYrXC5GjeHoUbdYMdQcF2Yv9fd9gkjGAmvawL3dQi7DqHkPrLHrzxX33gVFVoEACCLKioNDNbs6Q",
  "key33": "4T4EGxZc6Qe7quexA8TAzqMapwEcCmFsHnhbSCX7eAYPWtDrcRffkFPpH8nn1Y9KqMS6xVaoAMY3fiveYpEuMRgD",
  "key34": "SF5a2fPjicozjQmKqp7xxDD4yntrbq61c6DzHFdHsZ543uPW8YGmjv854TP92rdvAmPTdJYJC88Q3Ewz1HqHAr3",
  "key35": "3GUGtpoijeJnjU8C6K3aCduCAAdxGWhUaEouDMb17FY3yD616tJZfV5vnKkEN3pP2SwPnmCpiMuhnfKRpUo8Tm2Y"
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
