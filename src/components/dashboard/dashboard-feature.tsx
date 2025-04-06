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
    "5HRboV73Ty5Mgx5sSQcsgFaEALcYpQw91xBUGU1Cp1Xn6xKhnRg73ZUXNi8vsZAY3JenX2mdxJKYMbRK5Bd5SGBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65PTMzndL9jgfKt8zM9p3EEzEJBxuPFYxuerJLTPN8TYVPHDuiykKFmEDp1FtDaNPTDkJgAuf7RiRaErTBb5HkHg",
  "key1": "4WwmvX87k59pdgcCUP4ZK3s82SfGA9437bJ1az7UFSEkzVKxQgej4KyX9VKEQ3PxYJhXujmZ6VRMihyeNcKsAvQ8",
  "key2": "agmucyTT72heXZbv1yVUoNuqpm4YuREfZtTz5fioHDZTArJigmdasBaQiMuqexbh7hUGpArKMnFrdBzMq3Ni8QW",
  "key3": "4f5ZH7E92QrYqRnrBPvq9LzSphru5BVRDBPp1vAzK7xjb2QCEVqJmb4EDAMeqPYxiu5DuUuP6VqdikF74C3EYAwn",
  "key4": "jknfXNL2zhFktok95am7DMoUXELV2ZADJMXSbc1Y1qUerqzw5ifdM1Xr5ZR2LikeUb2iyHZGZ9xmPhmXVMXwGLQ",
  "key5": "2K8aXWFSd1QsAaAk9bA5CXjWK4gtvwPWfdVj3oM2G7Y7ua8qtNTBMe2hSXn2y6mbJ5ehyT8pcuvrgDGrcHsPynug",
  "key6": "kdgVGaPHcJ2LbLZuoKoXCRne3TGJV7SKFDKKdPXF8gJfHkY8p21tifU1dbKJ3TtpSb19zGTsQAYEJ9vdhE9tX5X",
  "key7": "mP55aKRbyasJdehyjzdQcR84xkLkRZjAgG6UnvNPNRU8Xezu2Q4S3NhpV5PM4MFpyuo3fpd9NrDjRWgiUcZemfU",
  "key8": "3fHTJehB1r1WADAotwXWoiTmdhS5Ro1K83QoroT55F7tZY32MUj1VJe3UH4pEqK75UjT3dxPvKx2FENBwnoBkXt6",
  "key9": "2eyENC7AdUSLecpZwSgqzsBs7YU2X2TQfuvMMyUafGoFJ2vQrhmJdCPBVwBrDKVt6e8NYNWhM3FDffWAj9dVKuXY",
  "key10": "4CWjqtq6zFsuDiSNEzjeDURQdia8ir8R7aJCSdfniLG9WocWMsjb8a3nZQg2gd76hNZG2b6joAbjn6npV3Gp4hvX",
  "key11": "3YkNSSvKUGLhzcP5GWQMGCbX8e3mi4oVrAjgX6tG7ah4DHNqkdgDMhX1Bemq33kmPxG4CNza7K8p75FjM9fmf5Ur",
  "key12": "5rC1n87BRpoEhs7MuvL7y59GN3STGeZoRaNQVkjPHu317W1TU3eDsrdjCYTGE3EFhP8ibfFezksiF2QWD8ugvYzM",
  "key13": "65UQso7uKh24gK7XqXongg8erAEQaJbR4MK2PH4TQ6WavU25EWnY83oVCE2P4MP9cC5c8ZHAE7w15n8jHKcDYHEP",
  "key14": "cUYjiH2PUuaZTBnS7psjdMaAAzU8hwQkbRAMM5HvzT7db6aaPG3tdQ6165oQzWizrhgNrvSTm7Zx9hLzCrK86Ww",
  "key15": "3SHwqVGk2CKPo8n1sDSE7m9Xu3yjYh4FZnFck8VCFecnABx2zgffCMX1XYGzEHV98C1JEjV2dcGeQBM3kkgGr1X5",
  "key16": "63o8fvzrkH7k6FfzmCQZkrndMGkfiTb71pw8zGmKnitmx7941sjRSfbnSfsfyBhfJxVx5MSc8mUYehkabq37rDqK",
  "key17": "2a5kHmaX5Nbjan443buTNdJ6JS6odGy55easNwLmRq9Y6vwGbUm5ah1eF8s9FbZv6S3Ta6eC4Jr629sTBMXUkLBS",
  "key18": "5qogBAq4SpVVozP482dmhQWPHwLeAtqxouyMueqgigsJ8vfSWLx7cmqVcYyNHfoSJNXJsndbuDj4sH9Gia2iJg9t",
  "key19": "3JpoaiAMwHT2qJ4N612x8hD3SD8d2s7cwxjxHnqFwfqkGiK7pJmyvfmrcJG3gZk9bHJRmUTwUXM2RfYnm3kYfCtH",
  "key20": "5ugmM6Y1U4jxipLpzH9AwFBAtJuGR4P4gEKSHQJtdp4DVhLQ76P46rvvEqc9b7z7iRiiXJ9o4wbvRCNcsVCVMKRw",
  "key21": "2wp8AuMkxUkjCXrNMtEh9e7DLq95BUY3JRust7Am3YfwNaArR8iUgr7BxnDg15jyFG75zjB8eggwMnzwBndzUQtU",
  "key22": "3LbNY8UBQStY18zxR4gcK2acHFVK1sSvh7A62JfhFUTU22TYeaDs6uo8FVQBv9CZyRGeMCUQkppEZFcPX7MNBDZa",
  "key23": "eqVo4Ub2zuJV3ZKQZvL5AQXfzdiYx3arE6j5zitXFQ8mUjowweGFjs6srgcGYD95i7uYmzHqdrfAxjo2DDfFxN5",
  "key24": "5h3un9S9WTAfe7qcpKbybG1eMTMLXJE9akzhnCEdxdxUrReD6gTjh3A4xgTkGTvgj11v7CfnA3ZfKNR4uvgrFWQM",
  "key25": "32BaTfVD74AbNXAPwUnyLCfFfXkUt7XqYr2dXmMcyozqjCTV27Vv8WuHN53Zmy8DQY3VVkpsPE8QTwRM99h9b4DQ",
  "key26": "4jwwY3csrNwXtgUub21qrL8jR7Guk4Q62dTNqLhzUF6Nbffok5oso4n8exefGehbGNNQn4iuqxnJdoAjEBxFAePx",
  "key27": "4HNp4yzpQXJNmcsqh9ExDj6hqb38D9y6UbBTurrndA1X6y24Q4mexkQos6Ufm437WiU2GkpHBXA985ZG6oWhXJ57",
  "key28": "4m6WZPafDzhA1gfDBnFi4wXKWQoa4iGP5Czy876gQics4LfDwxeXa9172mzrh6bS2kmgmTxBGvpKdJ7y2aMJfb3U",
  "key29": "3Ter1kk44PjWysfzWbQyUTLVjddYBEbBp1HWPnPCWcwKeXXnTuRRwZ6nF2j3PXk2uDDpfRXvdzimfXSr1WrBzi2Z",
  "key30": "5MRpaL5N2hUZLoqHynUjrd18TGJQegcbcUYGL1CfNQNtERgXxGgvEEDMQ4ZFYEQrBQnEexU23uN2EBgfEi5JjX98",
  "key31": "32Y3pKMewnoSrj1g9av47GS18BSTz28vAGUo3mgbGbik7BZBz4Rzw27tWpRwKZikFhUELVfjcdSrsGx4Xebtbjkz",
  "key32": "5D8gK6BRNTyEWczUaE9B3Ro742ZWukarUnYQ8TQVbgGt5xsKUV2deLU51XkYpFG87Ln1W4r1TRk7LXsxV4YRt4af",
  "key33": "4QbPZao9eC1CZqYc78dPFTMgJ1kXQpAW8G4Ao5UiPKgsYAB3YCQ6sxezszmG8nQ47r7ZtwxMwgAGDYMGD9mHsrXr",
  "key34": "2q4gkzrx4zLtnwHxLyVKUvpU4tKTMVfBdW9AQtNNMxL2gWG1Q2MxzQuoSCQnipSqUk7GHbFp3xHjPWSGorh7R1DB",
  "key35": "2bPthiSDqkb5SgQ6MosZCnUQSFMQrhthNtpJyLEzE3Y3LQKVXecBDAVehsWrXrr7QkGx3D6vNsjFbJQpCkqAbakh",
  "key36": "5PdgysKxjv9SvcnAoZrg7C2cspzhfpyAHZAGGVHhbWtQJKSAYJDRbJm4V8qKHtbXYPzUb1xGy7XxvextHtdjTiZy",
  "key37": "2ALGBgwgiGsSDLNbdtE2vpq9KY4esDctq67vHuRaHuR6w27v9U4hmqBamQZEMAfZ8iUVPWJhSZ5s64GTuW4zSeiZ",
  "key38": "zTzbp8g8FjSB9F2jJ6BsTJFWPRUcQc3ELdycroozftD69qKihbJNWqLGjXnvVJYHQL2bg3yLmkyAyh9zEhRfMmz",
  "key39": "3KTiymVL6Kvm1hJuuAPV612d2kbtiyMJjyBDuZTh4HiHRUVRiFTKshGRLLvf3jyv2xpbaKP3FaYGo6VhqzgHjq1y",
  "key40": "2DRqAYjNYTvxjQzoRCjT7EYm8Nsynvn7iMPoFhSJFw6WQEEtwkqNzTDau6MdCmozBurqTaR3ccG5VsTC7s7HWrM3",
  "key41": "TzpxmT59XLLndQZUVjiwFxhh8ULt38WoBLFQjeJDyz1Rr2y5WKAuMufN4ZqHQQAPZ2VXUh3pfyRyjAW2LB9dFyv",
  "key42": "3yLPrZtJQ3AiNdH1eLhtTiXUWcXr2CbuD6SoksRRA5i3rZwWFNgH89RknDrJFJnNu3P5rfg26Kz9rULe3tRMeXzC",
  "key43": "64kTJSG5APgcPYbEoUiMxaLfxWSsmWVqjDMxdLzuqM5UBv42Ftbqaji8khNB9Wr43ppgLStzhvtv3AFAEFiY9v6D",
  "key44": "4QKADqejuZZThJoY4FH5hy2pbqbdKVHH44xuuUVj4NF7uCJ1ut7Ee31bwWrGWyTtrmajF4YbmgN6yeXcrunxnkow"
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
