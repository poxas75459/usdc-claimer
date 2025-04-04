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
    "5dyM189oa1tFHzUG9CyKRfix8tkhTzAkV1N1QK7GaqmwrYZKz4N7swUGPhvHLyUjTS46VHScSzUVyXxhW6q9d3cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcT4X4SMQUyoSzbvnaCqhvKE6vjoY8Yp6JRgTkMpTp12198TeY2CFXiNWVhZ4S16gn7Qqw7zNVzxeXQ8mcPvAzN",
  "key1": "2uccshx8BWT8H5ez2V6hmymDJd96fLZyUJNcA3zaYKMB1P9BDqvgUGzAjSCckjf7MABe5tgkhXb6Gmyn9pb12m7U",
  "key2": "mwyC9txLCRtgfC7BdVUxQAgLGk3FH2ASaThCzDRHFnkQdtUQpuNUMLYEkHP7HbcjfKfokKDHuRUzgJ9YuS3XtbZ",
  "key3": "2ta2viaEEMdmSzzGbg5gKcTuXT1X8ZpyZqLgEx4LpcHSikMin3Xqa9x2dy2FWsgBpxvdURbtiy7Vm3tt9MRrK6uc",
  "key4": "Nxw79mr73WzSqrFdVuYMK5EozsVeDLMYzmmaEUP78PN52oohCgBRJyNtmWdF1sLxiWbPYVHfyL2A2wc5ZwwfcPT",
  "key5": "5QSCjRW1UtDmU8BKCTsNHKzJ4uPG9VyDGfppy3gXM6Mxzh3MgB2W4BdjBe3B7EsC9NGrTBVEmwoWVsY5WmAG22uH",
  "key6": "22tvnEq7WnGjpPuR2XbcgTLjq8ACDT6EXKWYYwX1FCwCPGK2uLoLH6EByHdgh1regfQEmM6s8YcJzKC9JBoCLj1X",
  "key7": "54iNqw3SsrCoWxQ5KUnFGNGzPFgU5AJgDBg99gNjnXx4Kezimzk4snhfYCj2KJ4bWnsQNsFtHMn1HK8t22zenQzw",
  "key8": "2tgSQyUETKWdXe9EPUd5TD8XBuZoSsirQD3Ntx9cKnqR2ofHn9EnA3gQfGGqLiQkFBoJvPEhJhxprXaB8kdR9Zcx",
  "key9": "3b8DSUKGHsRvsESdZVPv2T7h8uFdriVkiHnMqiePkdcZoc1pZZAEmAP3bxR56jPRYU83E1KCBgugkZ8cy1T3gjRR",
  "key10": "41FodFQn7vfChaQdtfWqVJ12gtVJrKerazvi6GtmBEwYnPwUnGNACpeYfkbGuqaWSx6c8qPqhL3D5GoE31rKbYCz",
  "key11": "4UN3Zs7DnXcwz72czTuHPvWZ1GL6dvkpPeJmeAhdGfYfi2bktw1oU64oxNvxzmHawJvpu8L4WZYNxWBXqbveHb4N",
  "key12": "25DMrBndrapu2XMi2dbCrFs4oCf1JxGcF5xXNR66hZy3xAvJuZ7w6XLfigS8UE7iAUiB2h2FtiSrAnncG9AP7Qoa",
  "key13": "5ReF6FyK62UwdBkDxL9hXGK9Ac7WeDWQw7TuK7V7i2vRgVeJVDWvH8fMqXP5ATGNvAqtP986D6cmZmvuaQqCNSro",
  "key14": "5Pwn8UfTZ1ubNsm4xp2yjEVaPViGeSAS5bLceXuzcRS2EbsGrLD8ZQxtUPEbHrnfmpZFUxGytxgB2S29ves54RuM",
  "key15": "y17dHahtpdYyDvXB9ybjWArFjYKovnxEm4K7pE1NTFo126KwSoByPCafCQT1ekm1xp5qJ78gczncca5HLvavAzy",
  "key16": "5mApQfeqdavG49W4v2rE8MyREKEd8HeBFTXLjDHagyUKV5BynaQFkQFzGK4t5m3eSuzucxYt1Y2R1Rf7GMy6QxBB",
  "key17": "4Zpk48PPAjLyzBBmYBiP1vwyZaMwKuhwWhq8PjPoMnJMEagJEnZHk2poDBvxD59FocG4hNpkCbiQQ4BKpGPdqDVc",
  "key18": "61WTSS3hMvugeXNHwZDJn4LoEk81vGnPvFZbC39g2N9SnQovp99ipYQZ5HV2BvkaTUB6hw2oLDLbuwF33hahzGGg",
  "key19": "3mFmsk3F7ndV97qNi7WBrndfxhcc868aDFZj3aVzWuFsETrM5VwVRDoqTcyT1nMWPzuK8bmdpWpgYUbbXKbmLXDX",
  "key20": "3vgfzupbFEDWVDy7NCTam84XCj9VPXEzgShpvcUq57F6FpbqJRRqbnJwTvVgz3kCqXBXYfYn9z9xh8AS5aGbDFdg",
  "key21": "54G6ztkfj6RDuDEigyCV3VoxPUCkyDweCq8GYpTxGqGw47ca3Y5taQAewUFMonShrohLCFDdt1G53E5Pin2Kqrcq",
  "key22": "uH6VZW2ea1p5c9cQ6RhbiGqYyUqBjZtqEd5RTxmu25in2hrukZvUfDnvSuhWE5ViswmAP6V43szpxSRcZq8wCFW",
  "key23": "3yUdDgQnEpark8YryanZLsx3Xd4ZWThmq3P1zXoxBFkgFrbFmrYGhdnnrTakZTvcUL7NGjmuA7hmPEMovrkf2Xnm",
  "key24": "5jncWABWjabiv8g6YTMYetqcLjLFJ69HCwRYvzLnFnsqRNtoJHTQnnekHYPM8VzzDUY8r87Ty1sMqF6PNXRncH3W",
  "key25": "4e93RxQGWcw5rfkEdTgoeaJCMMTYDiNDh9GEHn6S1oZ5yqsjNrhzKWX8n54myV8azh8ZL5Cg21m2ccacMUf3yJaN",
  "key26": "2iaxP3mMqnJDUt51NMmyNZurWdQDLAdx7HCqzqyQ4htY5F4qtjXX8bCQsku8Yjo3t5K57KusbM6TQy5X9PhCGrJb",
  "key27": "58ozutYiNbLivnrb7V5dLeNu5gsnHRB5whWkpVrENosx7oN6ybFqmJimag9ZUJV4BJoSfJ8NGHTPyFMN7Cp1XkGH",
  "key28": "5n7YTRWiYogqYne9q2vF1drNeZFTMKX1eYHuqhBY2n9KDzfBvtxxuTcZLuowqvkCX8PLq2LDii4ocPdQy8b1qVKk",
  "key29": "2dSWKYznjYmoL6uTM33dRJZeWGx4iLtD1ob8XWA6cPHGDuhkYtLnFkjQgBYXQnyHLimRSHcbFYY5bx8uBVk73Ttu",
  "key30": "2zieHs1ktkRLe2kCpT5C5uus2rcNenQJZxuxTg6cGxXse6u4TzeW8ScAJHecPiJtiBrkERVNZ2qwKL1jJKr78Ndu",
  "key31": "2crbdxvLSS9yyrZXko5J8dYtzFbArXbhPYRnA3kEeDc1jV5KwgRLdkFdFX5apMoyKPPUUuCqUKjWuhG7PJ97jUrL",
  "key32": "63UHiTGiAXBFk4eJiwX7EfavazcCvxeNXKgBcwXQCYRgJWwNaKVfguBBefqo1FP8JthBxXYzc82QgpuPPcnwXYgW"
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
