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
    "5hXSUU1aqwJVmHZpshZ9LDodpV7UZM5xAJdGmhBFtMV7t1Zj54KSn3zMm3cXjeW8VfMq5hwjFvWbjJ4NATvd4Trm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uDSy8F73H4Wjc8NEBmD5R9Ur4cSe66kZ8gsqb5yqSpwEsDYAz5e7gSzkkdxYTQTUoB1KJtwVdXWkoqnniwjpBJH",
  "key1": "62CyCUdyeeAZSATCtsmLUKSn9rQ4s22PNwdYmTCaDcBsSQ7nQJN8jzRx2Kh2Ns7jRHbd5cLQJF5b3fuggSXPMiKD",
  "key2": "4driLMWYebcYYAL7vNLjwJ4NdaGj7M6rpiWr5iW9mErFBrkVttNHRqrFBdvqTbhMUCnNR7vDMi3WTVaUME4sojJR",
  "key3": "33s1H8ku1GNujLP4WCm84YZhdL3h22HAFeQetv8VEzTaxNfkSegyyQs71mE6EfU4LFbbFGGx4atsAtomWDwyavmX",
  "key4": "4TcrgEyuM22DmMQLFqJv89WFGLkRxjJ71YPAeHdM5KZGAFP87rzAVRwE7Fvfk6vueyb4tvgN5iogsrEspNe23iQP",
  "key5": "6JgnaDZxPYAbsW9ecf1izQeXMScaaU28qWns6RYrncC249oeH826Zs2KNL5G5djJSm5QEJR9ZuwiLbi1mSbsr4s",
  "key6": "o7x97NmbuXdgq3F87kZg4cGYKHpKCRSggs5CCEHEqgDjppcag47Q2Tm4BmWVhV1f7GVjsQG79JEepY7f1zeyKXx",
  "key7": "5ETcMhKkwLa6LTTfNQZPTim9cn2kXgeW5YYDznGSWoftP48DZ1AoTn1jinS8FHdYwkvKJM8S91kUuWZiY3GETkJa",
  "key8": "2DyYzBVpwtu83TD9Uys5HSXFUpoXTevZy7e1fJJrppdbSxaVtfERQwyNxmhU5Avx3EiBMqf8FubTTd4CMFAeioE",
  "key9": "3rMnRmQvEmyXKVCJ5voX1pRJHfo4VpzCEJEEKJ8PEsTpVchuCUdr5d6YqnUmGtVRPTrd1WEaPGB1pEHgWkqD3vvY",
  "key10": "4Rbk9NowZvTRtSRmfZjeitKzNajU9Ltps6wEGhmhfbhkar5K1N8KkVx16wJGbMjdQQmE9woNe3EGDRsPZnDLDZr5",
  "key11": "4kCgVFoFQi1CNXJkep7893G9soeYmnqED9XncCojDiGHE5kpyNpBZ7iYM4KaexVYfUpzGwpdnMQDzYbuMa5dViB2",
  "key12": "5Mk2TEfaGYG7RdAXJ8XdT7PV4LEKBA52rvsaYHGQNdwydHXqeHANfergYbfUbuigfNWa4Gvs6gS9N8yq1HLPkQA2",
  "key13": "485B8KRdJR22PUmDCUXd57pYPqhUfn7zZ8WehSRrVuY5pN5Cq1kmMqjyqEyN2RG6HvP6PBJdYu2ghGRu6VgAH7kv",
  "key14": "z7ZLLCpV4RgAJBKGVDKJRbH5yNLfax3FmzKuo3KdhLapYvwn9gZcxYtqTBt55W54VfgQaPEw9qdB6VoP2BxANu1",
  "key15": "BnzLgAvufR9Nrdv2jFJmvGJmDWmmxoZ8LbfF1k5kUKwf4FqYCGp8Ydn6HtRKPxSz9aHpBMcVfkTAhnR1GyhfN1b",
  "key16": "4TXxiMoLAnEYzecCuT1JNg229Dz9gx77ez4cLE4ML9XMRtRbYmfxhj9AAxC1hEmZ4zC41JhkfCnYmcNZdYKrVhyj",
  "key17": "2gbycUkR8kKh1CTxFW4FiqLDz9jBtDSLe8zQR3yUzetNF6aihPYznFK9FfYxFkyv1bys2qgGcxdBuBFLGhzWjsdF",
  "key18": "hBZ97quVuywumqEwudia2oD3U5631v7Tm1BBkg67YRtAD6d949jYfoojBgrPu7v91bT4jwmHXidbHhsWZZJAtKD",
  "key19": "3cdAGnMVrLFRvMVwFeLfJEK5oHUHoCV4xW6jsic6uze9kHBVRDekfVX8HWqzLAoJQAdzfNaeu82n7UUPx3UTUjmf",
  "key20": "4AwrJSt37in1ouNgfF3zjuENKCyCFisCcfo4qYMjFUQ6xk9662V1M5n41TrcvY1Td5DDm1xZQHGPwiNGCtxUEaMJ",
  "key21": "J96DzvswRKELxg1CaZJ8mTroynjDuZHiDDqnfQBMpweQ4Vevfd2FMq7sJRXGzgC797LDXQvQWYF63ruzK4CUYh6",
  "key22": "3kMZ518Snfw2ear6sbPp813WEjAqHB3doBTadMfwRrN6zq5LZuCjhRcS7tgarH12iCUvkyFRJxmnWVx6SPMekHFu",
  "key23": "4T4nLqhvnhwhUU9QPJsHUaUpvCHhoZmok4Ky4AdPVcZ8KdCof4bCYaFhwVCvi89UsCWjmAdcRX8q3qgohiXSJ9xW",
  "key24": "3ZpKRDngWgb3uo9dyNqbAgwuiPE2XMBsTW3LKYwi2cXSnm81j8xKMVyWtYZcDF3Qia9NnJtmM5k1AcrS8bPbbvCL",
  "key25": "31mWfqDTBDi2mBAzGEgWNU21CBL9BKk1enszprosvFCagMvwrbkf5uP8sykAs7XN7DdY6aqz2bBQkirkcTUcH1kD",
  "key26": "qq2ZN5z8vqjqJo2aVWnyjTJm4GBPk8XBGbJeBhaGw2PhsotpqQPXFL93CNuvBLQi9rPWveXig5ZwGoxjmuCrgVC",
  "key27": "491tThc7rwt132Yf6BzCCtVib2Z4hYdnXpRtDwsEpGWiu1o9B23Dx6pzKMJ2PWwmcGYZh1nyHmJQZX58Ct5wuYxf",
  "key28": "4YeHdL7jucVLgsqVq9wXes1MzvZeZphKUcc1o5eHm3MAYVLTBUjxYBegf2jmbM7nqc5VuFm5wndCLG9EuxVeX8xb",
  "key29": "5Z2ZYc11FQkBF3QM5Sadj9es3x61rExqiQHKPyjqRxFEtfvAsru8qfyUBV9A7avPVSrL748w4RkSFfSPcFXX8qes",
  "key30": "4PphP31DNEd3H1qHNR4tgNdiLDzRwsDs2wbUBB12tFN9UxchLvCrcNawyRpd2Mz2H8N9FH2vTxbHop4PsCKBYnhe",
  "key31": "5m9C6Nr5q7CkByRwgxCCojgxrbqMAmjcY6qt4epjAakKsSbmvhEdQqmBZcsjhnSuHH49w5KRCWWxyWBrnNC4WPH7",
  "key32": "4pcJ4tMJ8g4xg1e1RTiSyfPnjiSuqfiyAQxKuxq7iM4UpBKBp8xw6ShzaVYFE7GTWGF1dRZQWgnjchPFp1jeyaJW"
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
