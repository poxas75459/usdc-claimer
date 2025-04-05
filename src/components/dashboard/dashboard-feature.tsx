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
    "411oEAGhFbNHxCy2DixJB6pkhFKxQ9yr1XpmMiCSWCJeFhkvz4zfBVPB5Agj24bN4yFTNR2ndytJWqmGhSy2sANR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRJkNhfsotaiLPn5K39PqLWvJWrwkvWJTRCWPUCnWxUim8u1qF3P2LwdifQ2zmrizDyEbCDiBDCbqnBDNLYZZy2",
  "key1": "3CeioCxp6i2X7VEJ1hUPCtPQ3hsaevkV5odoKK282peVe7Npd6pcWtPbG8EMWUjxx5Ny7hft38R2Sm3rvvpwn2UR",
  "key2": "48KkLpRxfsPJ4RhHCCYqLSq8TE8gvvMMk2vNrEwMRChS8geQ3JygJNWa1RaYL9PR5T1TDbRif3BzYdNBHz1B6qZ8",
  "key3": "2dFav3XVN9aQ2cVQPLParGk6Vzf276SwW1RuWkWnhDpQuBAasmPHu3uPdAsEAaDNHz9DkAQ1WiEpg3tMD4s5xws7",
  "key4": "4zQVFJhEe9SrdXirqrqbhQ1HJ8yvPwAkgjaQcQczcNLr8RQaMJrj1ZTeu8vizow3daMKGNaPxPKsCDamx3MNPF8Z",
  "key5": "5yXDKj4iJuCrnSay4exdoEGZkP9YzYxy9DxhqS1mn45f9swtJu81Nb5MN4xt5C6V7eomVbJ3qxhnzUTCyWYXngHK",
  "key6": "4GH4CQA98iRuYY4nUQBqtAX4B4BjtzXx4mrst2t2MNgWUcc27VyUgWDnq5pC2kDJJrQVmKp29HpjLFFCtLXQCSxV",
  "key7": "3roF9gSmDW7ytzaoRX5Uwdu17YoUGWTFPwJrauADc7wQwNswrXtmfzb1F4d9v1smSZbLP8k6spqKgprYAuCxmQ4s",
  "key8": "3FGhK9e254K8gQqdpssCY2XWbcsneTzvd9G5St3htJ6aStEETZhy5UpnUNh8LpjCAwuM6PeVFuc2yhMKUmCf6pH6",
  "key9": "646bjUQn45BbeYRMKJN2C5d7nvvU61Jfz6mVdVe6Z7nc8ajEZJPKKZPEyuRRh9E5GEFHdyoXJMwc9YVWx5JK4LpR",
  "key10": "4eQBorNDuDgJe8PqcDUV69mFVXzneWw3PstLRYNpPnN7vGczZxi8CQFE7BXVn1ci78tTcyq7gwjvRqYALx1TZG2V",
  "key11": "5zJMKQRLYb7WpdeTpsWy5wU7ZVCjf3qk4fSik11VGpkJmNSHy2J329s4YmNjoyKzr8dhPrtm2aKAEThPpmuWf26E",
  "key12": "4kKfJ56mCKgFTsXWVneNqeoJphX1TPuK51yR4iiJ6nTCWzJZG15bL184CDzcYBihjxruXfy4o8NBzB8gUTAUz43m",
  "key13": "3uFQb5TwGni1YNbLAoC7txrdQKLbstse69ZpfsJQ4dPnq67MjSq4nq8xJDHiFuo6WCxUH4Ei3YUjQAFSUiqnB2ni",
  "key14": "3Ct9j1DK26jZpD3p6Jsnmnain7ZfckVyaJWHx2giotC9bfuHfLuTsezhvfs8WvG2eNGuQ6saVUBDjs1nv3MoDik3",
  "key15": "2HRc2EvNKe2x6fnTnacU3utKNje586jqwcoiZkdKL3FfNDdf9R65cRyrpHChq1PY2VikkpEpJfpVinb9vk7zw4cy",
  "key16": "259xoYEpRCDdSGPWB1eHUWceXN7QeJMdYsJfAFKFcCnWJo6ZHrbTEkn17H8BnxyLpPM39KEjDi9mAKjUMz6xEM8m",
  "key17": "5ozkM3SDM7Umwj7zdid2UKijCtWyC9iD2wf7JzXEkxFUPvgVrGCeRmG8WYNuuxo9bagPFKYYMmRijgizNrXJkNAq",
  "key18": "4yioJuDytmtPW4NkzWDH7Gv4c1eKJhZcQzNK36voMoWbeUyTgHiMo1UozRHCSd9GJczeW2pgcB82J4fjY68cHEi2",
  "key19": "cnJS225dctkK5NQGqo2NBXQfLL43oL7pT35969jHJbzacfD1w5mp7mvb7vVRwWzg9zrRGin1wieU5JW6kLLhtVw",
  "key20": "4kWg28hmmT5uRQbqdeWNb59iFJxbbNohVJP7RJYSGyqfTLWa1QKow2p99iAyUPXVe2JoT3VEMchUWQU1jVaAspHf",
  "key21": "3g8X4UgKBnM9B53bzr9L8bV8TwgRojMSYgE3tLeDY442XpQxEWByxfPMLctsTZ8Z9CoE6X3gimfnCZNF61DHjxUL",
  "key22": "45yXE3bC9dPmse6HXrD6z5qwY3otPhztiihjJdhBbNb8rE1BqDEwLUD8reKs5xGoasEG1BW9Qsk9i1DY71FKK34",
  "key23": "2AWcbZFNTEm9MP7MCPtua4yC2QNwU9F9EZgy7DV44mhenEqYtx4aiYcRwABEDyWuqXXw2xwmqHqdG1q2w8CoCWCv",
  "key24": "2BrkPQWySMwYpCZsckxkdSfuKUPPE63AXwz7ma98VZQ3pMuAkjJMcZVbA4YHUJU7tXLBuvbmdjyjUtKXje4AacR5",
  "key25": "3iXmKbNGjmgJDt2yH3jYqv2CimBQRK4c6oxnvQCvUFKaobCdxJ9JLYiL5dFApPgbzSQAmeujKSMnsY3cJqwCT76d",
  "key26": "3xeWjEpXiKRFqJYfx2wmw95eXW5vN13ubYf3T8XrxzDDefJo8sNUg8A6Y93Nv4K1hvJDjx9zqyScas1r8fGht8fA",
  "key27": "2xnFizCNPDqsVgjzFMfvsx75zin84GZwKeTNu9B8F1ysudzY4Z4hsBwf96s6hYQ7uvV9Y6znoJaUrBF39JjLttjc",
  "key28": "a14nTXhPA33JA9c4facPaNfXRKtyUWFNcvcPJABj8rWeJR44TWTrKxxiSHpxb8AeTpg9pmfJsBs4ZzNGvHjEY4V",
  "key29": "52rsFt9pXfiKmgZADsFQAJvAKbef7XcN7M1yfzyG4o5ENp1V2yWsCdvVooaCYPr8REYEqKrsGuXqUHzZxzWiyLKy",
  "key30": "Z62YtxTHUed6ZVcctmKEZESuGhn6AbLR7hG65XeHtCzNn6NPNtXJmEHBw5Xduwobc1fFeK2DkXVDod5j4bM6tFm",
  "key31": "3G65K5LSUEJRNHKAKeQV3NkfryPzyjE5GykhTMdtBrBgdNNTFfa3b38M53xheJ45TcAoMjAvJD7E9JQtLLMpeyBN",
  "key32": "skixzWv54CLSHAW2m5NNVh5hn3pQjsrYv9NpgGSeXBBx7FFeHvd6ExWF99tUHjx5vn4vqnnBkeNJYJ8HEFrvMTn",
  "key33": "4FC3LVT8VNNjbnXU4K6ZsyqE1NUwtnACCDkNm57z8T5eurneFUf3KsNPb4XG3EpQQnivV9LdTsiJgoCoVepfCm6K",
  "key34": "4rXHJUVBPHpKVPrdqnsJSvu5RQo7DkabitgQCQkQgBw3Ld7PDi5k7uUbAiToW93aE8vHgAkom3aQuKsXSvd2kTSz",
  "key35": "4zGsegzRD2UzNLGnDjor1vNSZLVc8HsLXP1EAsuLoXUqp9teu6Kd6PsyhYGZ4MpJ4QNQVJtvXF6hEvgRi4Lwu2u7",
  "key36": "mLkKDhde5zgNj4DsgBn76ZQuArZxfk21UhHxkLSWdms2czAkCWKKDV2DWKSBqvqQtnYRVBSz8ooXaWKwpSdFCWe",
  "key37": "wd9E9ZKvJ7mYPRSV3ZZvajedt7EnXha4PEwhrNRxqXC52WSUvBP7cBd2RWCtYVHjEvo92riMH3NbyoYFP8ZZK8S",
  "key38": "4EpapFostcT5rbPUWWST6b9tauTYmwKQ8m2PVWuGf781LjyqJcLT9B6KYPpQbPDbZRudJxC5Uv1Q7VGdmJo4X7yP",
  "key39": "3iL7DQsPhMpKw3Dgh8vPWZhhH4KVttWkm5kYAXDM33idZfpnFrE4EAdc7gkHYbbUQgoqPrSTMWSiaJgBmicCeoEr",
  "key40": "gLRaTcWY7jUKmnEa9TJeeoFYsdcvCn6C5RZn2wyLhXv6MSb1bLp9pBVEZV7pfY6Dkv8n2Qvt4vm2W6De8NgMS6Y",
  "key41": "YVCoxL2BScVCbXAqbdbuSz2jVh6bTi8Giz6BK2qF4NDutjjWB3ZXe9qPBnXrJQPaaEpTVAv7UY2EmxjWSBknsy2",
  "key42": "3yspCFWBmF3HWZUQMANipzwxtptH83vMpxmcfFgKyPUxMmabYnu9WsXPtrKb5w7mDBy3ZLRFZzjRnZHjPSaNEhEA",
  "key43": "2rBP4aeYiSpFPdktSFM6vkrR29NRfqMYsH6DtcZgdVgqePm2FYFS1i5nSWtedvuBriwfooyWYAuqJq1xWd9EBgj4",
  "key44": "3HSL65nVuhwxqbUgkJ5MuVnWPPeF1BAzdHyQQ1XocSp8g5wfPVdWJ8k2eNmMyZTdy91C32erKCT2iXCXNdnH3EpY",
  "key45": "2dAbwx1RbPj7FzEgLB1m33F44ZfekHmy7jaN3NGbvtHszSa4HdzLQpgBJdkvhVLFif5Y9bhfKLZLRR482HGYtB5P",
  "key46": "32fcgtY3Rot5euLe71tzfRSpZaLD18Cm6G6x5sdmnpjU75UNRPc83U8RfHShCoxcRfBRTsJJ9YMBcVoQWMoJPYBj",
  "key47": "3mjXK9vrKk5Vh9gNUVmjej6VN2obMhyxwdALWWQFrtaCJAGrvNAMMxqyWutEuY6bPYNQWdwbxfzvvZRieKUbN8r7",
  "key48": "4go55SBwXRZkh9yrmBDy3GDQkA9rDGEAzFK13ejazsDCrupDhDmrn3eFnPvHw4rGRRhuYSAm7iDGfquoP2uMCkB9"
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
