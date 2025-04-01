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
    "4BkSkmUNFzWbm8fq7wMpccbowTRePwYNCX1SAL2pAbFV4YvRx6hG51sstDXSisCiokaaFoZ4V8f9kYnMFHbEjdxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oN6uWWPgzgsCoEe1NE4W3ovyC3MDhqgP5haB3gwU8NXy1ZHZwG1is4XvYXwqgumUN8DWYo9mz8uHQb3y1bLZPxC",
  "key1": "4e8SgEmYz4NQvQvdUKLKQwqBmQERqrNCtd2rrK3J9YWEVuZbXe2vuUL2vVRMZgCG3zzNsqbeeD7XCfnMwZeb9ifd",
  "key2": "5p2dKyYjqEYX6oyUNCrEg5q7BjrHtBscjRvYfZE2utwjxBSYdR72kak1DYRUKoeyBuBbNc8jgdXinR8VGzdZsh99",
  "key3": "2EfToKEtaxZ6p22Pxpp5mv85mzwxp5K2p7exUy2BADT9jJWNc8V8RAAfGGTwvfHQEa4bim566HUPYHuFRTp7U8Ds",
  "key4": "5AyM7M5M6GYy4AB6wtstAK8Le2aP9XfzRsxgvjsWaFWcotf8ACoPkVqsk3p1b92c7LC4G8mkySiENBnj248kWXtC",
  "key5": "3bW6xj774kGLcZo8QQTiiB2ZtFYUXf2iEMEGnuzB2jSmFvJ6qJ3UwHPdU1GPM5AqG7DDgAdjwD6BQQsaT785Rcz",
  "key6": "5xyFnodrV9to3BvHQyx9stzesGRmEkqHzJKrhg5ecQnHtVJshv7EH9Ug5nDYUtPbXuK6N8fwatidwkNY48jd4RHk",
  "key7": "dAh7KJpxaRUiiP4PHTcWhkNTMbpCLGR828xYsU1Gzq3ZZQj5rkSsn7ayNzhE3XChSZLHJVfEK7oPQFcmJLSRjfw",
  "key8": "BLovVpRcttz1zKfeK1BodpPBhC8JQjsweNQKrhSXhUxuBCzrjvNYCpKsehaUWxAkgU94rRkHUng7H4z9dER6BDB",
  "key9": "361rkAheWLR5NysjwjWNRBbyeBzb7W19SfoQ2PP5PxQrPjBdRJN9o4tevnU5FzkDpXyCi94KcCQt9dRFg649BpA2",
  "key10": "5yvw86P5ufaQ8Np7fmGrNiL9N7B9UvZe4jSr4eYWmWCcZvuCMysLWeuD39EoPYFRAJwyB9MLyRPBCJ2qY5DHdMH9",
  "key11": "34QukX5rxcSC17d9NwRFFRNyjXbLWdMT28ijE4i6WE4uAM7x469xfhr3nHTXkFwk6ZwSC8qgJA5N19ZohRioFGBR",
  "key12": "66B6zQfFSqbUxAED9gD6ZsRYXWNHoBiA28NFvdZHyaZX9h7zSk44YGRBwJNvtaEGdCUC8eoSzWZCvVnKtTcWhMot",
  "key13": "4enD7DFJugpysZfJMwMXwW2S6nM8HPQgGh7WYeGVjwLhG4zVkWpGJkw3rRGSDrraMcG5BPU8SYd8digrsYN8UWmg",
  "key14": "3TKwkhPkEazoewYJiTMsdDVQR6PLJGampELd5bTY8TKxdcMyA1CxbT2PV4MZCW4yrgBfm6f8bPHCJ9qmtAYtmSPx",
  "key15": "TYUcspJWTsMRycnjLtgiQPMjLuLTRDgUsLuf69SYAry8AtYDhmv9n3d36wfWZQY1XgsTPxYG3spNcX7dPFV9oQM",
  "key16": "42uCRkea3ToGgKETeVzVsQCzcsrm6xooT1mCBeexCyU922VQLHGanZYv4VkH7WbKpGnaMkJDyGAR21cQLAysEfEx",
  "key17": "kLWsAxyvuNsVjiowYJiXmBnNp6uaAbKHAaGHZ91Ew9vdj1FC5oHyCgqw14hsKDe4thvWC7ba4VwGpAAGAmspa1h",
  "key18": "2mAN8R1jgfbw825pufSBtrN92oNRHEVAHxXrSJH48up3ZLKrxuNQPFMwjT1Bf4t9DJaw2cXg4KQeSixoADWib1j",
  "key19": "4SePWSsegMK8dhjYcP2jEwuy2dfkc91Vb2KNt1i9jtVLdFXp9k8YvGH1tFLQ5WHKWkH7AWQNMpMRSREgTdP3Vc3y",
  "key20": "3PPTkyF7cwQb5qbkwHjxazzCXFLEjUvrb42KuWxGnTyvRuaYE1fj2TjtrN233b44hvxkC4z9qpJ8MvZcC9LmYhk9",
  "key21": "5eJrxhWc55Z3kTkweyHRCYjTNUv9GpKgfBjTLdTDzUhoa2LnZ7e8LLNxnAJdAnE3u5jpzJ7KbehXXEVkHAPXdaPC",
  "key22": "VLg4LwtKASsYJ6AbKYBQtPCCoAj8LocBtWYKBDDDToDJU2bk1MNqSRVz9n4hkH2wV7TSFNsSKbZa5TEipv5DQ1c",
  "key23": "2GDVcWcCFSSVjcKkszjinEXdLQ38JrLbF1QKmFECWoyroLXvN276EebkACVmR6Bvm1FhmeDJYgCtAPNkfuGDrjXH",
  "key24": "4q4VBEQiupQidofLqTMWdt65sDGa3phUkxfNDeqNpcnB5KX9Lwg2Mbokte85G5qvcSuLtDwpvBixq8K45HpS1Jeh",
  "key25": "2CnPTmiKWYxzVFgadgMa7zf38Aau3cARFqTgggeVXqhBzXUWzps57P5wFt3tfxzcs85YsTSkcf5Y73Mi8aYACVWx",
  "key26": "XdvBRGkDv2BWZnnZqPXPV46qtSF7WKRpuK7MdWKA2CwfQCCdRUo3xtL2cyqKnA78RdL8cuU3UDTYXTa8KAyuBZw",
  "key27": "4frBdLSthbmAVvYjidb2mUjUAxCtkMbS1JGmKaZDQ6HGQijwBbtkcyA9ZEKsJzghHbs8gU55uSH7mAWCH6jwWacR",
  "key28": "TjU7f1EksK32Tb1AvHdmZsQ3b5giJJrso1xdVrFhLjfa3nuy8bQhxSfb129LxGYuKv1jX6wcCxRDsMAmp1fW1wk",
  "key29": "4nGizvMjVs3inyGNshaYU8oaqPEYaWCGeE8wexnmiXs5tbwoYYx6eqpm67VM1nHzfuCYoSJi54kTNtJyjtLpTh8H",
  "key30": "57Uzv758kNEHDh43rufmPVWYPEae6suWbpi6NuRGqvJDkgc4hxA9GDt6mPMUPF5qGFkm6Y1GnDSRHaj9BUwLaVcc",
  "key31": "5KhPnwZWWtG8tYHwTcNmwbwrwR9RqQqpm3q3Nqbtu5Loz4GLPHvjkPsGQnEXqje4FTgUuM3tiHKrneFR9AuDswJ7",
  "key32": "47pvbKsC48Ge7LsEFhxVdLBok6D5zTc68FK1xLTQ3LQTSfUDz6r4nbvrqcGxXVYvVLKGtSJNeXKZDazKdUoMGv9g",
  "key33": "2fKPpxxLH328Hp6fR3hk1Jy8iZY4Hz8yDe7XgjUd8hcePcbEZeggmyWmATLguHTByEWvs8Gz612TdX9z5PYvjekk",
  "key34": "4Jb6k3XnaUht5XcqwtApGFL4dbLSu2jeCXsQXxoUMFTogr2LeG8P1rHRMnXWiCXcHKFrKqKyAc3LxnU1B9FTEGbe",
  "key35": "3z8gy52PXBgBdacpKkKQATyF92N9mUm9DEEr3kyEz9vc9sRoTGK6b4YBohZr7u8kuwevGziQXqAJw76q5KPue4bE",
  "key36": "4yTPou8MxbWFki9pDeyu4iTyN5nzQ5BcGFp4mPjPikRiGy7ecUhtRVUB6GuMKsjywaXNcK3QVk6ASP8nC1sHRF6D",
  "key37": "2EQZsM4166s3M8gQqqTkRX8QCTaGd2oCcrAdx2BFM2ALgJwDcbXeGG1qKjZh7nHeLWddR5cesSvVndjrKJSrMRkU",
  "key38": "56yM5JhH9sbBv7YURxAnK2s6ez4HQoFCCTaB7AfyX4kFYuFL9g2M7NpLDmzsYUEuRRnx8joYedKMHDVaRE5zZPEH"
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
