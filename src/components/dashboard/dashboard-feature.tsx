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
    "2LRYvLKAYx4ot3e5vfS71WxYYBAjJo7dwZg9pexYzAGFzw2KHoMDj7iy7LPrZYFZbDJ4SxhGNwdJJWu3XsNyk9ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzKfXbyTPDHzj1LAw9VC3XyZxeeYEsbyxcYWkS43hpau43d2aNWD3frK5qhVK6ZisMgau5koxzwnRPGCg1oFKv1",
  "key1": "mTeruvF8C37NFH1utnHPT4GAnMGDNUWW4nXL19gVe9ARUaY3rnLGyUKBeabca96gUZU8jiiZUVhVFaHVn6RPQCA",
  "key2": "2WKzYzpCgewTFxMpxuHwy11eaS64SZvuSwV7Xi5tF6YBfyBtxSqAeUUJopaFKvwUYiudPtzTWNwe6MEqrpGJEGRv",
  "key3": "42weh5nB3qDZhe1NVijx1rPv96XgKArfCcB3PjJLoxs8NDaXXwDWXN559Wbx2bpNDjWedBnH7TtnhtrioL3AU5VE",
  "key4": "2ou5RcX5vLHPTzbMGvi4a5RXyWiaMypjhokktUrLyVcVXUnTivVTo4TxZoCqrLnqXLhebZGPShbWjm3PHP2eWn5g",
  "key5": "GEZWivW3YeuXmniDC9FjPSFaT84tmKfgE7B1xSaSVDnxt4Mw9vJVHEp7on1vv1b38w546xj9x9oztgUzJAC1sDM",
  "key6": "3iUbcdeaw3dE8bR3atewZRPoG4xG8M6UAHGuNpew8VzC9xkSS9yXAQs5x1q4a5Gy3WtCZMKnjwjGd4En6YpqRn1Z",
  "key7": "2FgUMWHihf2aFWoF8bDvGc1CFBn5zCgveotK51QdM5uwshsaByj2zyqwQAZPoadffAE6rbkg5fgDuFUhLz5XpEUt",
  "key8": "vuRrcBmctSoaQLUkRPCa2K2sM92ewXWLsqVRaxsevx5kxVa67wm8JmYEwBo7MxXdMMzqyJjouRLNX9b3pHWyb2s",
  "key9": "uTRRVLCZKwpRSgZZadB6FTCJvd31SZoEjPzPkTb9MtqHemwtorcgb8Bfmzg2i99XaJdCUdHmZqBJiFgmXs5e54U",
  "key10": "5CzoT9gATcpvzUCembrL1VsRe4w5xmLNwXykFSChM63ZMo7wLRei1hGddHHKKCzVYKz7YnBFHDu4rNKGWkZdhEvi",
  "key11": "5evungYUkPD5A3ebfPUBHVX3rfd4qsQZ71CCNqVeJsC4s2vJPx1YzFtnSRroz6TpfsPW9rrCgiYGixsREBB9KSXi",
  "key12": "5WGSGxMmHQF8pvuKK6FVyjBRtyjX1HwwJY5pXX4BYEG6dG6kYDFuvmfQpwVT2eosDvcRnp284KpKvNKvaRVL89Fh",
  "key13": "3RYtE42JzGvqUqfzhrgikzypkyVVoTWe3pSmZhS4CjyNQNNW7iG3ce9oDcJUZf2TUW4AJ9PoA5iAvT4nq3aZMxw7",
  "key14": "SQf2rV1jeNYPG2Xbki4ZhwSmWbuXs4uzQ5S7Uy2kZd2jgTJaZNuMFDzn76eUymgfLkgPnHZY7RcQcCDpcRFyVNj",
  "key15": "2xTvxawPru1SBYNryraS9DMXyp7G1JyKiBS3ScCzY7qwY7uwnYVme8BeYy59Fg7r1AuQTm8kTwtdSDxj8o7VY675",
  "key16": "5AAGQRsX59ARH5q151fCiGcmwN6qnXRKejRAhE2tQ2T9zPy8qkdgGSqffyh4My8fDY4oF8eSKJ1k3kpwgXVdJQ2m",
  "key17": "3tomXM5JaNySKLBhqiaN6wmhfLTE3NZ97jrStqgzaRQy4MTH8Ydwq1Yz4kDLQoESy6ny6TACBbVgQ2APExES9Uja",
  "key18": "wS9E8mQCefY33CvwXSvTmrC52RJELF7U2rNfXnnZR9os2cz75KhY746KJVcMd2dqdGibH6fmmrq4NycE6M58aJw",
  "key19": "4XvYUSmgHf2nQsxZKoMrxGBPAq5UCjTPnWcD9E72cTMSSdpwNDFcYaWWXVE4SBciGP1WPTnTbjS4KEycWxbnYPq1",
  "key20": "kh2MzKProReweKvjwshGzgSEWZi4DZwc53ikzxHANrsmYkzBdAicFBwqvepA5DBZvgaa6m6PVDYrbaPTNHFkBJh",
  "key21": "2NeojqNXpvNNUJ9graNCyHQLqUzcjsrZgVtHCX4Jzh1dMSgCGTPxcvF1aSoooo6kQQ9ovjyp6oCMTHgU5k4YQqxc",
  "key22": "qwPAUdFAo88f1PXhXfWn8ADJ8pg3r2pkhxLk6yPADBiKCfxqvP1YfETncyo6KFqti3gLzooRPJFEcXxuqfFpX7M",
  "key23": "L2FDGPP5Efo5bzf5jH5s7rNNTbrJTFrFSHpvKe5PFVTm8Yd6H7GjpricavsaEEby8PuXsB4rVzBLjbwkVB5XrA4",
  "key24": "3HAYB63aNLMdJocRNUvV25mCrEmm7gEVTpiynsts5stRByJWru7RS2dvuhKBr78osRkqjjUE7VWbuWdYsDpRT8k3",
  "key25": "4VGknGpczhGuhE4kcWj6ngm9QQRtNuJDFbf9jVtkuoKcymuNZktANDF1KtHSnnKqKMh1MLom9vcGNbojYSga29Yb"
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
