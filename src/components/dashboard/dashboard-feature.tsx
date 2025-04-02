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
    "31w9reHFAPXYVtnJca2r6Cw2Rpqp8XrLqSg9VdVXPUnLXLBDJGrzcUwYT1kiiHzmvLAD4Qh2JL49ii5dsXrqncTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vxhipGLecupYB8sRqroTRgozj3wMTZpw2FM7ut4Mk3o7ade3yG92UWHi4TZq4xzmUmp78FNaDPKLg2anGmix1v5",
  "key1": "242cpAx7VZ7q2EULDZzx9niMHTkfYKThEWux85pekjPiqMUiuZ1MrNMwuqyZBmMZXq9BCYJy93To7HfbwzQJMyV2",
  "key2": "2rHBBheePVjYcKR6ccGZxTq7YWJy11wkJqsYhht94cX31pCVZZqLGUrxqr3yx468PMyTHhmpNi9a8nCQnEWJKSS2",
  "key3": "gmkG9sC8rWzTXiQQiWxyGgXGs77Fm2WN8NNnpuaLRAaAeqFBT6e5CZ2zJyTiunQwamBUxHATkf1xu6onFsD7BW2",
  "key4": "c4uBGc6rsuKSDrQuAZXiooywEeWie3oJcfexDT4Vv8FjqeKX7qvegYA7hAmrH53HW9nwtSx535r7CPbPsNjGu9s",
  "key5": "461DokizVawBkdHjmBcP8rgVy5WR24j471FUzPHKkSY9a96fFfVzKSWhxHfn2AzJdL9UAhDL83ivTq9XsVC5YMXd",
  "key6": "4UFZWt6Lyu3rrt8Nm6jUf6bMDFA724G7PHa8ZBD4ZfwstaiQyiDzt9McjFR7wkeJTG8ohDpTPhNoyzQSUDciYgbU",
  "key7": "3qeN4TgsiYu1yFLUx9oAGy2SGygK9UqmShnhDqB6uZiWuxd7P77ec9Xsza9qPtUc1Fn99RWuVRqiPXWAPCP9Wz4x",
  "key8": "B8jM2V1WyNajCZTrzdvqZKvgfGfJTx5fm6exoHeCbmF7i4mDRjcbSDGSxm6GiNkYLCWAbBuBgEUdeU8q9j8Dawz",
  "key9": "2wLEwBg8jzPV5hZR32ibj6zJRrnEaosGcj5sYEN5yHfKHeMnhhMeur914eKGmcsQ3NMyHBQg3GHNHhT1xk5o12TM",
  "key10": "QzdjHYXZoEh38NDdqa4KNJc53eNB7NhzuQ1ECGB4xvzJBsJQcZ2AEPfoAWXMACkNMrgvXoHFHKUGDJYTJCVSaaW",
  "key11": "5nfRkKrb6vVtbXoKenYUQmbN5rtmv4v1iyJoJvVqGSKFX3cUiQ9DtjUv1a7s7Bn5t35mk3XPsXpSAbZtdyihEuys",
  "key12": "5WmsFmHkEqDKiJNUHuaBWrFUMQXH9iGGi12XHSkDEgaxFVjPj6M6TFNBJW6MApV2MAqATAyZwtXzSSXJ4WJo6KiY",
  "key13": "4MqKc4PvVoW8WzFdNEDLB7mvjEwDNHQWgA8er2qgponcSLYpb6SYQSdb5CWuAiF6oipBWEYjdjakWbqpWwq4cWXq",
  "key14": "4DsACGKjB1f6mbPaTn6vbiKkUN5gNPh4XgA6nHKSLu5qZwTQVBiCbE4yiPSbHGEkh7Sme7TbZYbbSwdYWnynaFSi",
  "key15": "5KShdg9gtywwbuYq4UNfpjU9KgPGbJWBcd8sRQSPmfd4fo6i59RvebxbkoreHUGvJGD8qWHDmARsHFsriTaSozRM",
  "key16": "2ov5cRUp4daWj8vEgB2VRNGe6dhxpQmRdyUDt1PCMqzckcTuQQyU481pwxdWCBm7ToH6VhFHbXVKu3CrYYTU4DD1",
  "key17": "kL7Tgba4QRAf5RLUZJS1XF7PeH7JJPT6AiPWJ755b97DWxY6Lic385P5Raow1zypoh6Rm9RU15Y5TMpmfenmWEC",
  "key18": "5gpB82DbNWB6kYez2vxmKm9j4MZazqFJmpN9FURzmi89zwN8yV6no1K5D45FskgVL61csxuJGSjeN6B5JBk57Z1",
  "key19": "FiXMPbXoEcacQdMYpvitVA4vK1MjQrbYVqRGZxsugEaVCskMyHkTvY8zhucntWMNdmZmSHfGxrnYEe3Q14H1pRT",
  "key20": "2czJxjDvHR1Cg42gf7KyPtNnszNDjXsUmNraG2vK1mKtzpUxing58QJHQitrngS7Ho7EGjGPU8ngLzPKpoFr8ASY",
  "key21": "5iWYDbymcarxNkjcJgeufCu7LG9ZPjV9aU7za7KJFTcZGR8GjdQkDQQLGMXqKtXXavmvVfJTsLPzMkwb4UsWvspv",
  "key22": "52RimA43izxHafT2MyJZ6KWLpEFbMEzUTACrjw7sX71XD9HK9oLn4dZijUB8ocwqY1F258XHDSKbfdfVcwV2VXmW",
  "key23": "8pbLd2siPAtwPUtsPWNTh9evF4x3a7VHMkCMi5fLjPH5pcitRsa3qbn8dt7bZty8jTuArsnXrBKhAKSfxLyZgzK",
  "key24": "2utcovFqjaT7oShJnHXmN38QBNaPEYwhWy3bLzHo8VEwdbFZBEQxgiNe8vc2bRAEzBLYLZ7w3DuPj7V9vRnRkcbE",
  "key25": "2kMgVrxSFpWCJhJx2oEds8Pn7xKJ3nxgsWhyFHeY9HNuJxXbbrgJ2DDtUyWQMxPRNwAzou1JL6JbEUBfNDGhmwWm",
  "key26": "5C4cES1VP3vG7LjyRAprKs5cwhXiC877BgcmJL3QLBUDB1yMpijB1EYnGh5Ku68zhdFrWsknhp76PfpgtVsqPjnd",
  "key27": "4SPvEnUjWbG8EHZGJ9rCbYJr9cXzhjE1Beq8XXPDWByMUJ13pipdUaoi8CyfjpUmCeNCWEdjQuJnMkdL3kaENAFj",
  "key28": "24GE778XoxMHsyVQbyGSPBMG1XwSNs4mnuxJAHutuHuHkNnNnuiJ8XwMmwyY5iajDAJx6mrBTAKX8L54uZ4uevQM",
  "key29": "LzYBD6ZCNW4dCnXtDgC7oxSEYQ11QeX6fBZ67xjWDEpK65rnzhSHWxrzXqbQUNrzVibtdwnsdybo29NfJwWMfMC",
  "key30": "vEqXFxTdTLmMHSsr5s83kYharDGGhfHVaz1WsWanNiFGk16yVUTPaURGbG6AjzUXHrqEKN7Zh9MEkibFcm4KPhQ",
  "key31": "5yhNCir4qiE32USUxs45e25HFThQfRy11eVaBnCnUH9spUMDaE23GcEUFFVsGZhWKcGtdFqEzoK2Uw7RdhgTj4w9",
  "key32": "2xFWbKQePNbf6AcXyGUiiYHwu4cdErZPi3sZEgRbPkgNcA5gGXKFPNcNcBCYadBYfWiDQkHLkuGPLPobFKo2P4vG",
  "key33": "2TjEVtiKxtavGfJpLi3qV4CK1RUPUQyUaWLVz1EY5FwgLwGNJEKZ8PwGC1G6Mo6ucLG4xWec2ayx5287hnSjd4Ni",
  "key34": "4aP6cbGfqo79n5h7Fxnv2SQzzqXZKj1C7ttCfFXqBmzQUX7TAfjyCw2sU9fLKdsYh3hARzRiKsz8u9qraaaQz8X8",
  "key35": "3F2hS1zUyrF2QEvxrkhw8tBR1wXRjM7UeEPjfFiYzx52vJfU1k2eweGhhxaFaZGz2S2aja9FRMxeT7RpLWgotTwS",
  "key36": "gUhK71nSgUoBcvKq9ramRDcCXcngAwkMGnZWvu9E4EcULWEeTHxopLhUBZHNvzuTZsFGRuT2jKozBBazZLimZkN",
  "key37": "5z9fHXeLagh9oo5zK655xjtcNMTDbobHCrJeZwvZJMzzNMQ6dt34kVHcPj695euzev6zdfHTnzpm1j7QB9rbwp8h",
  "key38": "4HwoKH9sLRdWxQzdRJmndYbw3ouLGyT2iJvsmJYoZwXoNUBPJH43bjZGNKhrdxJ81fbfoSS7C6pEZLqdbw2tXNZR",
  "key39": "4yQf5FZ7s59R4TSPZ52sghXuzPV1iB8EUD3rVmTrijTJRpRWpjGZvCEgkx3EoP16Adpd5htoAz6b5dRzrM8jemQT",
  "key40": "2cZSWvN3DnbqoDAfJQEzZPHXpmXcbipzPZeV1vaNRiViN2N4Zf568AySrnoiAt76NkQ74A1Fwb9tW4cFKHJWKB3J",
  "key41": "3KCStY3kzSwto1vwtQNBKJ2cPJqS1ig3ndivedCtpNowyjdP9kwNxPUxn6zors5zzEqH6LwQ7Yo6BCFWHuHmY6bK",
  "key42": "2EweJ8isQNArjsKq61jK59HrfYiSbBkSV2vthGAgZ5VqhtyguT8eDryeavsnFefdeFQPpbiMXYVgdVHF27Jx1u9N",
  "key43": "5sGQFzMbBNEkEungVEjab1n1CWThjGqihjfLpVAuiJn1BLhttW9eTn2sC54fGyoEeRkzV2q18EsHvXCjZAznuCsM"
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
