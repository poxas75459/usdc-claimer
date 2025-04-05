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
    "45idX966R1G3wV7Za36vDkB1qLX4KqUWLeGo97VRXhBcPuEYbZ2m7XVTL3Jjry5AmVXA4cqUczXCvCiDwyVS5FAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9swx7ash5qZoH3tHQc92Cg11VA4ywZ6fGsQ2dzyhL4HxdZU4Fu8fuiRcVztoDyoBuuackTjCoXE1ed5FEZZfDD",
  "key1": "2PcEMp36Gms4C1N2udBoLxg1NMbokbChoDkR9xfQCCAY3rpB7DwQ86iJVwqUi6HMerbbFdc9kQDKiUHrreVngK3o",
  "key2": "4v67wrqJfQzE1TCHtytZwSRVWoQ2ttqBmo25TvE6fv97CUghsiX8kHwD4jS64XroaQQVzmzHe7y2zHRdypYHz71P",
  "key3": "24c2fhSmfFNTFHPARvjibeo5o1Yew7bxArPHPfKFZE28akoVVCLi2aXYR2hJZrknr4PFgpNKWv5P6QD1G6jagn4h",
  "key4": "3G3rA9SDZ6XVLf7ncfd7jHJvBDTmSSVch7TffahAZ6sLyC2twFRhW6WSGU8Fx1dFcjgwdvU3Wc46wWt1hTVjGR4K",
  "key5": "3RBbmaVu3Z3ca3DJpTMdVkGn4MjUFZcCE8cGWZrokQDaBzsq6NkYcD16NCeCS3adwK2cm7WLxGr7gHE83xiCe6Sz",
  "key6": "5T9CUZ2yk5A4sofjAEBrwBQ3PWZvfR8JYerNrruNPfjD9x1ThKe7dht89W62PQ5WKNaeJGRACDq3C4iL23PTaeaU",
  "key7": "4Wdb599qBWgA1y1UGifBPvJWMioaE2EEWbvD5DMfwmZuHeZbnYsJ4DsbhWgQ5HRf112NRZeGMwWmJoWqMvfBUHyG",
  "key8": "51yHxCbECa6D4ZB1BmMq7QWoLKRhEtPpHwdQDjWPLo6mtkLfUjCqWatLYSHFSvbkaq3GwD37d583tkVAFFTDvA8b",
  "key9": "SX6mJAvA8MuxNbJDTurRWpCVqrqyXqYNZWUfLDEmYWWVD2eadkGNmJ3B876M1YtL5vJzBWggFwrB2iFkZ6GdMqZ",
  "key10": "3fNcbu3nswfgDYAw4QKJeHGTrBMVo6SkdhuzZ3TUFxACNo7mM1Ni5eDCpSjWMfHRZDzexfEr81jfNz857RNZvYb9",
  "key11": "4JvLTL8vBHk316XGxFRa5yk4BK9jNuAFdFL3ZxNbTR7gDYr4DKL3axFbuSHTZi8qBxwjhuqobcmeDoZEvvdkLfq",
  "key12": "4vZqZNBFTXdjSa3CSwRoYqowoGiCSLfjR9FHm9WkekFrmfjTzWbL5xB8wWXiBuGdTj6nnqNHHmfoQqXjZVWmNAMP",
  "key13": "3ZbchDL8KXhyDgTdoosZzju1MX1hUQzpsYXB8oBic8ZNcPBNY5uWGzi951sYPKtHeKMo2tvEgxxPRYcVeU28K9uL",
  "key14": "2XPpZGEsaLM2cMkJitvuQ5WVUJFXhmdv1SMD1kDqEcAbG8hn4Nn5ABvsdivhjtNtq1PHJgwMbs2pVRRqkSz3SH1A",
  "key15": "3Z8cv1rPbE6wjUh5SMnopzQcvLP8gvpSmW2zo7AYB2STQuUFx7reikK8YFcxQsPjcGDtrwvABgWFECuRq4pAhDfG",
  "key16": "5CB7qL3iDcaBucAio1haTMzupZ37Aem97HunWfSrjhyGjimzTmBVsvtjwNsDnkTuEoW4bLL6XVeuyp9ktixK4JKu",
  "key17": "3tSVAkC9Sbrav6GkHXrQ4fukWgp3m4NLP4MUbaekXgs4YZQ93DjBXtmZaJTBadXsyp9WGasqoJbrMvErviVfocHp",
  "key18": "2JiAWHvEW96eDMnt4jR86Cc6aHwxg6RcsfkoqdYDLfxRjGfUD8k2TcdUNzdyJJeqTuDAag7UZGS4kbkVErti3H2r",
  "key19": "Ne7jyVj83przGoDqiUaGQjAe6PykKZatHYCpBjy1Yn7sb7g1S2nyuRD1du9sL1j24QGBiecMq21tXdtpQKvYrh5",
  "key20": "2hcUrjnxqSXDdP8Tma6jF2yZB68hSVfByDB1ysCRTjALuUk1ook2pEGPtY9Dfkk6sJxBc3fhZWaDS2zWDZq882w3",
  "key21": "3FKvCZLjvxCeKFQaPKtXqtTQtSPfdJCuhtiAbtsK1kYW6DvbXdoP3jWW8pT4d6jV2idvsWcPeud6i6hc3wxXktgQ",
  "key22": "3sYK9zyAWm9zYojqJPjKaAJ5375JypkqWRoFzH5HBHYCL1DbapD7ho1NWQqnMJBHpWMSiWawwpLCh2XfQpXiay62",
  "key23": "3JMci9FMxtmtNWNxJ9AAVBFJYRgzYPnHMmivdeo7jeQcGFgERDVTQqPQm3VxNAVWFk4wVnVJsLbrUStumkZTphLK",
  "key24": "5jH74hj2Nyksi1Anqcmy1ZKid2HSE8Hp6yzbaUjwW8atoGfc9NKT8FFnFBHfpRfazDSUGLFEBxt971FJzComrbYU",
  "key25": "456nw87Arknwipwc4p2ugDVL4x4tYL55cx697E43ZGdxwae7E7YRuaXzs9UKMUkqdKLzP8aKVnkVuJg1GP4ETKRg",
  "key26": "2GngAXBK92K1PXQghWBm5817r9tZr4xnVuUq1hbjcGgffDGvg5CCyj7nQnFX7FASXWNkgqRsDK9Yfq1rSsjUpfAZ",
  "key27": "39tg489HmLKgKcxuQ6MHj7B7ZifUrTBdgeWG8veEBzitfX3pJb6M9zHL9ZjYU56RDubGNYT8VuCQ8iNmsnAy7Lga",
  "key28": "3DTyfvehXRAFKCPd4fL4WGurAmQbkobbqhUDgdCTQPhbj4zrYpHyrNvcaEQcoxAjnERZcdZyoqhwFHPeXZoMWsdR",
  "key29": "268ZUDF5xUxunRSCFqvNmpCJRQgb2gCjohJTsY2GSTHYrGUJ5LdSka6tK6kEQt9K9zG6a2H5y5e4Qj9AVaPm6E4y",
  "key30": "BJjQcXGYiKSUGPxUrZDwT1fHAM1T6nV1aRFLg5u8oBSSoCQAsRvYKXzPiGwWceuVyr9EvZ3kypsgVULoSt91WbU",
  "key31": "5jyTs2DXFPa3x3hgTQe71DYuXoUYRkMYDQb1BtKdSB2WnTBrpc4PmZtmG5ZcsmcnUzyc3QeJeCciiycz5FHwg8TX",
  "key32": "465CYFuxevyfZzh7V8rMAjrU2n32QkEsnJad5UTWRt6Cs44258MnbiMWf2D8g1ya6At8PzUYey11ECDRYy8WaKHE",
  "key33": "4EufvzWXDdJMn3mkxaNFNpYf9XfPPcDsBRrTn3VTJPv3CYQbSsqHxduDduaR7oi9M2T7ydwrmashwC6ZXxKPoqpx",
  "key34": "2svSxrosyx3PPdzkM1pQPLN9xePBBcqi9LcVdw9PREj6gXAkrx7KBX1GwuBdoFT2rGmQsUX1qfeJ33btABBjCpia",
  "key35": "3s3ssh238kP49V7TtvHd2bJyEdpq6hydBX7EJ1cepcZWAEHgFnNegipAzwSTiPtLKbrpCaMJCoE4qNbBPLWu2ox5",
  "key36": "5EULohYk66v1oANaqAXNMit7pt34ng7qWfutPBqAnFjuGdikii79oRQFWsf49YSSiry8GUSBk7gRjBc2QAXyuPt9"
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
