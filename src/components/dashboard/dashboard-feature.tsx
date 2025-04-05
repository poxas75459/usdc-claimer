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
    "4eLcfeMziLjV1gqFpYgxzK3raDBHGYiM1CeV6RupHV4yRgSe7vDF4ep9h7pB7rcYqgF1vYNcbrjbvgSniPq7nB37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMpsc1NBNLcGiremJiXkMsMsGyaGcnRiBtbadeNk4nRrSiCLnapzCxRnTKUFsxkYfmdG2uHNohJqgH4CusWwLHS",
  "key1": "4cKwDtLyUEMLqt1X1rfBQr1PM2gtEgWCLc7pxmDvMuNgn1JisQgmMgb3suygMWYEXogJfzNf55cDJK1YNsRqmyJG",
  "key2": "eKc2Mve5QAJ21EnrND4V6BfMPsSLKoukWtmCqN8vjbZexNcp2u72QPNHCENWoHFAquZHWouV2yjWxiFvJx9ykaT",
  "key3": "5RwukfbM3fhYFzv23fHqNSxkL1nGQN7gr9KmbNceRrh8ZkFJCSGE2LF7EiSBj8tyF8kvS4PTh5bvsi5uVTmJeu3Q",
  "key4": "3s1aaNkAQhPn1A4hGvxBVU1NEvLTQoxqmZNrkH5zZezeW5W8kgBm5GAv7tBbwD1rALyFuAzrxkEPiwJwcaYM4bCD",
  "key5": "2xYr5UK8k69vJ52puCVCEUesTNh37KYG9uUK8DHCNvZ2yKvqCmWEecmPwBoEWoDVRxezj2zxgH1NmpFTfcAzXCaM",
  "key6": "2uc8uoGE92NSLG8FKHq5KCsfvgBkJ5krG2EkMugRsRJnp4ybxfH1rfB9HEEvC5He7hNek9dG4zFBSSzUuUfrLidU",
  "key7": "36LbYmGFqPVMsJcbCcWDMpeUBsmBY7pmbsFTzxHa2b9Z4uCsy57nhq5JHaDtjSAgoHqi3wctUNCdgDsuNfcnAfum",
  "key8": "38i4EmXnbsg2RvJUw5GWQc4pa16gy2ZRgmqWz5xQGKScLgCpJVQVDrGtSZmdJZmVFeuzuusJZyYBdqk9AiuY45wE",
  "key9": "2CdZJKQ1L7keRbbpkD3jonRBftVf2xtV71SkuL1P3P8sGaZgEM8stpD98hJxCVfPWr1Zuft7At3NRztC1pkjkV1Q",
  "key10": "45TpSqBxy3pMgWHUfNoYEC3oasAxKcD3duzV2GsyqEEve3GL1VevqMg32i3DRMDc383ngxMULyCebyQe7EbA7tdp",
  "key11": "4MZCXX8dfvN4qnNVSrKGwfsk9noE36e8bDBAh6B79BBoonR7hzquNGMNpVoBHxHZRdx9272tDZLTXjbCymBSnj2c",
  "key12": "5bL6a8rEiVRAgRmG2kihXnMWBtY1gsY62PjCFcrV61mKW5uYrMMCq7fidubM8CLfWiztGaz9oBr6zmjmfwqKqhD6",
  "key13": "G9gTcQjeTSPLXeVc3zXnJYb7ptYy79wJTsvAqotQUUP5uMxHvnpPY6hY2XBby2KvKS9T9cWJQRLQwkEfnDXo9Lj",
  "key14": "kK3LTQUihZSzMsxApGJyBnvV3T3sV5htqorfAUWkR8idr9u96p1sfaHiTLsx4mcCXmdAwbDuGH3JcLYKnXboMJM",
  "key15": "5rYZ9JLmexBnxCs5LonyiY7pPfVAfQeKk66XjCeTv89pyNN6BHwRN4Taa8htWmkVP7Cm9oDEGw2xmVyJPCqSgpjZ",
  "key16": "2kHjUzCSSprtfV7BVrJkk9k2TrDZvEPhdaS1R64axzgoTJ8jtsQhFmCUGLnDQETrHDwzmPJaDfPBrLkisjSTJFu5",
  "key17": "ZjkRY9soW9VsRang6DJTqnFJjo7JfifXvABGFidqS1evL8zkkDU1EXrDkAWV5tHjYFcs1Kvffkwq5vLs6mSALKK",
  "key18": "5UA7nKQ4FMWZ9eps9Ep8Hk5cPRHMAaTs2SEyrGorqgi5bZnkyyTcRQsG1563TsDKUVk9ZpfdR4FuZtCyoEZUgbEu",
  "key19": "3iojVVaZZHLRjcd3Ee6A5peyynE3YyNChj9BA8CnzD3JzmpekTTGjHn6Du8dvmjkuXrYAropW1ANAsC5gbG2AYiw",
  "key20": "5MJTtADTga3R53cA2S54b4iaC2gbPK8phDiHx1kyqS6CZUZ8P5EkgDZWJZTv5oBBgx7Dc1VEb7xGdHjQVcaPzynm",
  "key21": "5jrdFProiZrN6W7KiJm4QQhdiGbLxigUaFBysSZEHxGxkm53aEAuZYh33MoCCRKHNPZgHVmKBUfTu2hbyCo1xdaj",
  "key22": "5QbUMMoVMU5fyo1iKrrz9CokpJYQrje1rtjpRVsvp2KJ6X4e8FBD58onTcfhn5G7nbYAdKGYaPKr9DooG1PhSzxE",
  "key23": "Ms6Yujg1gFZa3Gi3BaEb51jSCyY3okfBSwZaPKpTV2GgHPJYT9y6rKUN2ytqFjjzh9JHoibxctFjNemhjkQEXvG",
  "key24": "NZ5MwiXUKpgmYSRT6wVJ7k1dLbaABaYE2YdU3zvjr5nG1ek3TuqUMyrS8qMLfBYC3Wj27turaCHdKCQ5jg3ib7q",
  "key25": "2wJdhcekqjUcawxCQVcmEG5dCkNmDFWBhLY1ZhT5oipZRkx2ARiKT8mwXnjqyJrNPrW2UbodxznZLVrsDsvU9EbX",
  "key26": "t1zzWubk1tV9ZsS9cMkcwU3XqNPyTR1oLasVZtvt2GksmarNzGWMKVCyTBnybRHPqv6PMafPjd1jbR4vtaPVWSK",
  "key27": "3hBLjJvH1XnEqobRGcQCZgY45rjyJ48wRRBEWZGrAxMDa52wuVzbEXdAVUYmSDma3nPJv9euk92pJmChdSwxYMgc",
  "key28": "2yjZ5jhE1NJvEUhPzxV6BnbZ8XFu65tCQkMieHZPFe8DYA7vZYkDccGxJnDLXvJjQGqNwkAbCChJDrBNjhQTKudN",
  "key29": "gpAsrMqYa8UzQ1KrNfCWVsSSYgyizn3q9dE3TE9BqgitPE4FdBEPZiwefr1e4PphwAg1sRMKv4q2X9TaXC1SCmX",
  "key30": "67i7SBhzoFqTA3GY9o1ggozygLDC1Jv87sQGevi8grPTRBzjHADsph68yKVadxHnFQVxMGhfg39DBEhSnVaUnRAU"
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
