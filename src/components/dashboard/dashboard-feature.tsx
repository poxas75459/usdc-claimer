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
    "4PEmzR5yYxkWUpGNs3c8mV2yq5tTHcowVeUJ3mZNr9CNpqHeHrWKKUwSkTJ9Rw6okZbG78yFggH7u3Bogie15C5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NA7S8KJyqD8FVfDQmjaeHThGA53SVsGzpzm1vbVPRyRcyMcnPZRDVbZ9o7meQ12pxb1q7KPxcBWfNA9qQ5Z6CGT",
  "key1": "3GuW2rn5FuFS6uLZdHu8TfxcyWyqoQftFnDUjjfMXRbu42GXjzqDzM4a7Tp8rNuKur9yv29TomJPuQgfEN2fU94P",
  "key2": "3Ypy2y6qdSSebZfpULGTUxLo9uZHhCUXc7guqe2VqamDcDggPSNdmX32BJ6AiVgyWBcQQEm7SxojzEc45PvAsepz",
  "key3": "y2oQNB38o4moo3kV4AuWLiFcVL1eeFaDnWca69xtuNWdPgKYGQiaX8yntyVJhRnRn6HjCdA4iiyhi3TKiEcBMQN",
  "key4": "1nPkVWzjpzo935c5QasKJfSuJuH17ezU78WaAeDvFxpGkimv7jeGwAqeYrL5bTP1bfw71SNLTkoKsmQRQequPyG",
  "key5": "63iZkZX6P8fta1dM2s1Udh6GrftJJYWTyAdN8YnTxYKbmRUTvk91Tyd2cPV8LL4k4AwuQXdKJuJzRaYir7Jcze3f",
  "key6": "28aSqSa89oQRj4ofLwL2gADDdQnshEFssskn45XqJATBS4rMtmKsp5EFqneGC8muFFyjpR8FPkzo9KeFbCxfvqeM",
  "key7": "3NbVLh1s7c3bWDCULDLVRSyK3N3NK51RwT7qLdx12vGH4kjZwN5ZXy4MXP5wZBi1UYasmSHWWPhQXYvJvGik2KFL",
  "key8": "462HYLxJ3JRxEVGeRrnqYnZzfbm9oC5SK8zH9TdhPdgpxg6vRWXHwPdhF9QFfw9rvSsHPNKqqaTPhej9B6qtkvQf",
  "key9": "1mjW7xSxJSG7YyMunJduEiPftzLKCmWBP7SWfJc1TTFAfMhXbPXuBGHY8H4nWRbdB7qrQ3GRuGgDqB26iWvQueN",
  "key10": "2Tkt9LUmZf7mJgNiCQ8hPU43ZaM4u79vpyMgzSvPaHctTJbpbkt9P7uRaDDqbEmDkcmtQzXs8frcq2FCodADP5za",
  "key11": "3u762g2LrNKS3rBUZYVLNcuWkbazDwSGtHpYqC3CWEhMgVok9MTPekvwd1DGiXWoh3jkN9ZuuG96upH93p9bvG5t",
  "key12": "2ZV2ZUsoezy2qFTLs7wMD1UhE6F44z6yQN8xDwc74vsBTjSDv1Hcg4vXMYzARkVuwButgQsxe7iQfcKjp5AZWJL2",
  "key13": "2GGKcPRkasHHs7w8tt3gAVU4vUahvYsHhLTFno1Xa7ppg7HjLdyAu6MW4zb4gTEUgGpsUXJToDxrANJ6ikzRDRjB",
  "key14": "2EUWRYqxrRmF4AhgxY3ERjFFnC7CFQU3Ln4LNcCDmXnMZMM1Bf2atBKDkZn86vPQrTAwN5pMhuXKTgGPqv9kkfyY",
  "key15": "356MEGTZdVKsQDPJa18zSLrEvsM5S5PHhkyErcFuv1WtjtPiQpH84bD5GhuhNFbErH6oV14cbETHymwGNBoJbFkV",
  "key16": "49yLW5xWuWdhKMX2PmTGNDNqn6aUNtLaDuCVRaXWQkHMDZDMGFUUsE1FSLdky9wKqQq4SAhzXSFq5ASDG4rE1LKN",
  "key17": "4BUVDUH8q8MJ3tBTmzUABpft3WBdtfmEhY8s1ZXUbxHjgrfPfgNwgUVLj3n4PsSHL5nDaHSBkNyuXdaKKM4RzWuC",
  "key18": "2SFhvQEcbuGrFhCMKYuaM9a9GqpboeVkD3k2oMtmHbcT6T4ECWzwmZHM5fyjEM6QraDQJtYH3nn3t8m9xFWmCfan",
  "key19": "5FLc5Qjgpro7xWCB2wavkwjxef37yz28GJiBBvTXVUVJfLkmnGjnZFwcxL7e61JjTzneyWGQarMWVs2RNri21TwV",
  "key20": "4ctaQkqKQQB9d7frwwXaZEiXhUk3xojB53hewFiQS7WumV9GKRwUSKUDq363JC6YadTW7MRGqDZxS9rHdsztniBV",
  "key21": "64Hzzr53DbPok8rx9XYTKi1keBQMZankpP4vQAy3HUFH1didAjpPam723Tud6kFq85NGQt85GDRhbbiipnESnTG4",
  "key22": "614k2SwL1pyo7crq6sNrjugfeqqwrAWHQPYDdbRyTxsBYaNmiC2sV3S4TLbWyxgvJriywxNHAuBYRYqfHFRQTLjD",
  "key23": "4vdzFNxF1LzSipZWWtymnUSkUh7kbbzqcTYbYFtnvaVASxVNH9pGrybVEnRKLvu8bf9PsMYrkzcXSUkbNHa6odER",
  "key24": "3bg55kwQuqbAwZyiYVCMorEG4PKoRPrbV7sSTsHkLRdyoqgrx5iatA68tPkBJtGZLKj2jN5yBhjLt4DD278HRcCB",
  "key25": "2snDDHxDvtBcynPMrxN4jTxq3rrh33CZFu2bGvT6pJ6tiCrSnkk6V6o5KuB7upHnMG35jd4DXpQNgQFL8U36u8Pr",
  "key26": "3bjvHiT6L67BxfDK6HVD1F6ZNJULDCsTHvApEcsmLz9BwzCjXVuKrQn5bXzvu5egJth8movz2Bx7T9j4a2JbW6U",
  "key27": "5Uef3PEnnvSrc1Rbk1vBTiN81Pfyep995Q4Wu3f5EBG4AXY6uSWJgtYtbXyhzvRRmFQQj1FHP22UVdyBFJrunGhE",
  "key28": "3hGx6DfPEs2qd95nL1mPgMALoBWuozPJRPBcgqMBoCR3MVmwuCfCJv4u8e69nDEq443qdaL9icuh67QnNNsvHop",
  "key29": "4AJakabjzsDZDUxY31ioTXWxVw19jPR48ECKK591zF2yUp2ZpNgGktxHtH78QPcRk7qmZbaVNPKzAANwnSCw9wTw",
  "key30": "3TDKk5FATqUaPgsJz14RTAXkDVY5pxMZVQRXcAGH9azzeDMtqQMdGpr9ZfuhNtt622EV4x1NvQCK1BDvPFXr9tHw",
  "key31": "3n3PQXiLSJpx3pL8UFvfXeNNH8iJN2gYFseMGZSGGxoPbgXbw8GoBpmmarD4K5AJMRaRKMdC4hmMg8xciBVW3UGo",
  "key32": "2MadZvb7Dxy8uFWN219CV5Hn381G8npqZdzrNZdiWqR71Jvpidpw4Skpa4YbRtBmwFXvsSDQkx7zucvnxg5SLoLY",
  "key33": "46X52yBcrffHxYPL9SMAmPZuLL2Hq4Zvu6EQepVvuP7ezo6GhmzdUu2jrUjx7bDPeczov2Kr1atmYoytHf8SJ3tp",
  "key34": "4MGZAQifZDxnxaQfGtk4N4awtLzeCpAhETVLY9eq14L1oKPXgEFx3Zn3ZrmnadMfbuW1y8pnz5SarP97eepRQq5u",
  "key35": "29BgmQxh772rzQcmRewH6USv79ZsJSmmX5hYb5m1P7FbbcTatA8mFBSkfzYaf7hSeiaGGztZ7tMWzoHrcE8QPdfh",
  "key36": "NYTVqnyBWiB88hdy1SRHskMvtoCfUNaNim1V28PWFfCaGLuVLNguA5YM7NMNvqzEMoqJ1ChNRfX1eDCiPWgtqfY",
  "key37": "AeZ2ejp9yL5bdubdBZUwbhWpmc2Az92stTtCcyjWRiS35raeiF8UeUJNDexGG8dcg3wuffR2uEMoSpqRw1Fca5m",
  "key38": "595QgJrbpieDoYeo2ri8e6nDxYJdC93vZLjiu8bwK3nJtNYbHMqecKykvhFraEm7bMzsLK3JM82hWojXG21hXxWL",
  "key39": "5FTSHyKB3svJ2AsmzFPcdBzF2ok2JY2q6BuzoGwrDEXf6izKy44Anne7ENeuiKaU8har3oGa8q49NL8v1iE6iCvA",
  "key40": "JMjUHcHucyW4BLKge2cRhMUZ9GcNPBwyxSkVEFAXESc6YPtZ2JATNjwTomW2yrSGkHP6uxY5MEvyyPavZcXCmZ1",
  "key41": "5495XM6YqYvWS4K5dtUgLy8dbLNF2JHHJLk1amsziSH6gcxGknppjvFP4jxyEUmDtytuD7EfTvXMqzDVbzsHLP9i",
  "key42": "4F3Qk14V37RJceZzequKo1MV627Ky5cGsfz8SdQQzAEStxEBDp5AhuDiiFFvSaJPdkBy5JtfYK2ERwMSvC389pYy"
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
