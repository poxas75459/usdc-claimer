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
    "5dX1BCuQcgPK94u26ne7rdshDAnbLav8i31E4M6RN8WZBvKeQvQisbk5SXAminDs5KZmJ5Ggvj2bXhucN45hkQvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aa3Cc4ZWYF9PmPpPx5ngbuAQJo9B6hoWwsKTxbb4qCW2oHJJLtX3evyBEdHDUmEaNCnisabgzc6oy2nhqH4Cn8f",
  "key1": "5b9tHAnZ9eWKzviZEx1crbGt2dvnMUkwSmBLYfNE23fkqBJ1i4Jynikkk2rCfQXUBeTR36WhToLjWxAcnb4mwpGT",
  "key2": "3yadHH92f23E5i3oQb3ymd7xA16aXEpLGZmBPtgpyzYHipfqXmSzVXZvAFs1uyxV5oYPndZCdiM6cqhyoKVkgbns",
  "key3": "4QBDGTtHitHsFgBKHjwWc8uHBwwNeiDve9Uo8BPgRLRahJSe8W4aqfXpT8fCdVanTivyWybU3P1gRb4RMyXDbJ6L",
  "key4": "BAmeGvTSD7oEUPmgHriwcQKm2GtNYt7XFQhFYst1wZPNxNYDYx8FHHxiYWm11KPXHyaAHpHc8zLbNHP5srJ2TjU",
  "key5": "4R3PEEzq9ejdgNEyT7a2KZmAuv5n8yebUEDUT7DGwroKgFzy1Ek42mrt4XzXfTrpxeLZmEchjK3uy3iZKqzeeTgy",
  "key6": "5vyC5sk7NembvjgtY4BakaCcqDbeY9yE7xrFTGrs933ea2Q3EzceYrSojHzU3GhGuk8YjSFNy7obLpzuxtNGY2qL",
  "key7": "46gcRbMDhjAApQAuFaQRhoK7x1vhqJazVV6e8fnnzbVgw23ocjgPcrNZBiSQV8kMogG8K4oFqZSffqxtrjpTg2hn",
  "key8": "3BxQsXqaE4HhFGmVtWKWMMgNqCGTkiqbEAAFT5S8KAtayawBqorQ7cJ7jUMCb9kVsehDgCvxZnLQrdpbkwkJdfqm",
  "key9": "3ZDYEjeDSdWA2amag2RKKrjiWeVjJTY4DN2sc12Vu4u8TN6RjAXrEEUHycsXPXsgRcJ8S6c4WQ6xi5zShbN7gHy4",
  "key10": "39o5RsxQywSDWbBGiUksG8uQo9vQ1yQvgokNaV5HGHsNpuGwz8nBTqeWSkrWDtFu6NbKcFdEPzdx9Az82WY6wgit",
  "key11": "2HR4J9VvwbT6kboFjQc6c3s62i2HeNEj9Kkiiph6bCYQj7tEpcHfaKQjrDyWaB6GYDvmr5Sd8TvPDHLHGfG8jVQY",
  "key12": "5o3ZZ4PWc91pCDkVC1xSDhWxnLFXUigWsmEkwL9nQmcadd8P9DWpQU9jFs3nFSmkAHvQQFb9fCJBbb48B7YqKo4A",
  "key13": "51E2feQZTDQM2hzQJDpVU4ku9STtNmALYUsGNH9k9xX4jrqY1jtdx8pm7MtoADm9i5pGnncCW5ihbmCCwpqvc2oJ",
  "key14": "5n2t2RXx3RxfbKdDqYf9D48FVSah9xRQxq4pr7FS9TumczhQMSBG1SpScAcF5HyNVN3ZhE3Fw35bbumLmJtcHLkP",
  "key15": "2Q8Ydeeetf69ESUPZcWQQNnHDmTfXDS2E3TJj1G7ed8VrWWDSuQQGmCsvVcW7WFS5pn52hza7c4tL5b6P6cB8bDw",
  "key16": "5MvgtY3ugzVy9Jiyscu1DyyKs4jGeyyTMZR93bu1c2RwurdVXbxHNcKjTPNqTU76RaQHknPgUYWW7ydLyre2MZsY",
  "key17": "4vK43qtWZ84hHHAXawywWMDk1ZdZi8dwT7mQAvXxLww4z7RDdFmjUaZ4Xb2v5vSRqzfgbNFX86eVJbgJritqn2jp",
  "key18": "5Be4EXAe1DkmbMHd7Q3xddWi2PsJSh1YLWGxnmWtNZK2yg6sw6PXNdYdBzpsFo465gmnaeoGsU2nTp1iHTj7WZjq",
  "key19": "2j1zcuxUBd5BavM9HHucwYRzkke4vi4vVGxLBAdsiPuBRjT2NHcR6CZam3KJcaHEiU4kLFCP7JqxCC1AdZLqngZE",
  "key20": "2cemYS2i6toH5WEKFuiWLgZw4ukYtsXWKUR8erzDJxU4SVuqALLaayPbHJ7fJn3bm37ETehqPaaC42pQPkkbddp",
  "key21": "51GcaPXqEJEZv4n5c7tzNmUa8XUNy6LZcwk5iX8nzhzKLVYbifESLJkqWcTYYtQ1XUmRfVT6xTbpS8Skh5D36DWa",
  "key22": "3hUfiSHLtaruPdbijW8dGCxBnGSbJnMMSTMajHisyYgB4tSthP4gju4UZewgeQ6nGR8hDVPKasBgSzicrrrHzSFQ",
  "key23": "3nC9ERyxXzzSFsfj3CeRhcF57tm3HrhvkdDAiPMjTxhLunb4Zf628w3rGfMVBiJS6DCU5YrAe1PrHijiVtQ91EFc",
  "key24": "39GWHw2DgsdpuYmFiaMapJkXE6tmFVZpuaLLSKczFZ9sw4a15xUyJ8rL8tFhHEzyfPVDHbYZmustMJqar9HFk9kB",
  "key25": "ZxXbXjGokz8HYs34tg5FeB9M6B6xTpnrNRUrVvkt1eEkoR8Vx3gCLe8aDmJfgJNSMLcw1EsoBFGEiwH32cjZKEY",
  "key26": "3d2n47aVSpG5vtU9EZXFBwEp2pQV87EdbNBAqtEsVUgJq9yDUFCQcchNJcTaXY8JKdhfb4RKL93XsChpktpUTRrB",
  "key27": "55wkGoDJEFjxvbxkh3oGMUS1SaGWXvPgJwAneBRg2dSyfhSRd6ACuSqb7GD51qvh3bpxzScJzxgwrTcFWPFC8pr9",
  "key28": "22gjFdon6YQZ1WY9ShtkLwhNKKz52ssttAPgpaLYMnfcrwg7R3msuHNwdY6n8RQSgWnhvD8BtpVUrfZ2jjjg4JGA",
  "key29": "4tUaFMwCUVkXLSbPVvvcnhiZoRv6ZAoH3YH1BpVSUpibryt8J2LnyCHs8zWPQKx7RjbKzZuvunDjpB32q3Z8goNv",
  "key30": "56UbQnb83xcnp8D3Y2fDMoU1i2Yqi8Gsu8qxaK15xCik3Xg7YBu9z3aGQZkQ4YrEbBW7JHNmjqY3sFB3FLv5o5cK",
  "key31": "5PXFM9LcdgPLPoD2kCgZ392GS57HFTRSkU4ETomqs7YFFTbsKtgY7t7ru39ZrQq9R69AA44ifzMDpMe5iNFdf6nN",
  "key32": "3EyERvrLkBKrFFFwznseHqZoKVnn7LhyknNGn3mriH3jvwt373RCzRterXPEv2Lv3jHg1NVi8CLnrV75GDAuB5SC",
  "key33": "25Wm6viXWd3RcNxzepFP52huBBxY9tYXjcjjfFNa6WRk5Qi7mgvg5tfBpy72Fa83jZf5QviDN9RvnKisDmdYfVQJ",
  "key34": "X9doTkvih3mVBi7XdqhoDFuZuQuVGvyccbHou8E4yTHhP31cKz9pX4zpeinDJhRMVACNcanG1cL9Gy2KhyVgsWa",
  "key35": "554kvnnLXgdRe1MmuZ66Y9seJSShNQQT2bZWUx78GA6vp2wsVix4w4x59zo76s5Nbn1CfWzprVLWDxyKeCi7W5vq",
  "key36": "b5Zhmz5kQ3seL13soJgeuxmirUQd6gx3GWZvqfHzZVEr8E59wy9FPuKNqL8CXZ1P1hpzcNvxGNgbzuAqzJ8D8oe",
  "key37": "5Fya9VGRyv41NNPX2aDLWnsgBPLmkQBTLhWYWtSPL9RrBijLjw4QzHhYiykqhkfNkt8o4PFiT15scmA1c7kdyuQR",
  "key38": "3Zngta3AzQuQyjDqPh6wNwUpwRFVkvmPUi5ZajXxeUcxV4VMMfVogrcmN35aSAUv1NE8Rij8ud3czK9ow9DpLYCr",
  "key39": "5uM79cdxPsVzY561dXswSMFxj6SmVo3ficDzCeWQiMsJbo6isXLJ8TcrpqVvk4MqVAzntk6TseSaEwi69CwBzZ3e",
  "key40": "5FEoNSPwM7WzGV87KF5C53VG1A1vbohR3qrKTwiaqSCG28MHPV9tknt1fvUav5V5TGKDpg3HVTSC9auZg8jGALNC"
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
