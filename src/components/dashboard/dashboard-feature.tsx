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
    "5g6XCj8d7FygnEHy53jSpqLoptkTSefKTb9PVSW1xLVUw2epiGvAGHLedNoW7yt4R5EfgVsTSTd78XVTQw79c6Gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHXj8sGavGE4ckC5riMHhmfWfimevth4EAPhZiQ9jDfpPG5tA1daXsByRtTY338tTBLGCeQbhLkaqL4aLfudhQT",
  "key1": "FU1Wrx3gzZG241m2GG3k4eh2dAaraRQoyoM5MGLA9fa4G7Gxd3WcZoD79WPTvtP8GFGrYqDtKTCifXKjdpXhAeX",
  "key2": "3qnUbY3XscPtcwzkjCzXczEsZ3pv1jFde2z6hSwx8GzmXJW8RuomD5arcWSNyzJjUYBv4bZx2vs4ZfB1nZCsR6jQ",
  "key3": "eW2VKxXHSoEqtzr8bbUorin69RfshRFmrhLqimNC78E1RAGVUy3cznFfh5Hc123rp87UZvkWzL5XWhrXgvSW1aj",
  "key4": "2sA8PEUbHM3qgXM5sN3gxf3QAe4uxpKVwdxLWxKM6DxrRH6pkmXRw29YwMHBhZ2wWXUiZoihEE6y8g62cx3gbdjT",
  "key5": "57LvCvF3UDvm1q8PY2EGDgiFdqnPgeC1xRTPZKb3tLQhMc6ZLJzfAgh6arXczGfYfAA9zZFfqQvUQsGzr9K1PHvQ",
  "key6": "58d92AWMUPAGa7R3xtXs2v2KguwFkLNCCVJCim5mTZG2uZEYop6874rJ5mf88vzz92Z8ek7gHbd9twbxeTuH9HWj",
  "key7": "3NhVkMJBMmoW6mSyRbUF1MYW7wR9G6cM35iVPsB6QSiucTMb7UhJyp3KP4XYzPfB3EtV1Cr1PVbcSs34AwyZtBKW",
  "key8": "51RD5cHXnLNQ2BGyvP1M6RLt19PwWf36rNZBVBnL3vor2NBh9hnsGGAhzjY9aRSNYZxE5sC5yN4bnaeRTv9k95cr",
  "key9": "2uT6UX39SgXHWfR3sUeJUfYK1Hvbq6U1VSLFrTZZbJVZHHUoR9hWTDNmZegoh3rKYQK5fP8V9GSq79pvvcK9ThKS",
  "key10": "32DksiuyQ3pbR9TLCcp42Ubyg8FjRi8o3GfDhVLfoWhThLi59RvCZpq8YaF5Vikbmj2TT6PN22cZgLQ5gXju11H9",
  "key11": "rDSyXxV8BJpPF1dBZ3CkjcgJXVHoaxUorH5SsAVvWGxfgHV7ZP2MNkQ47hpyaEcNU4U8t9C5fi9Qa4peFjPn9Np",
  "key12": "5VTyoZkXoQCxrNSDL57BPfiGUVpXXwMdHmy9oucpdznxHUmFgUZC2743uUUFi7twDzkQFPJrBQpBYrt5cN8SunXG",
  "key13": "5xbwMM6aBRUyFFDCxJeBjzztYQKNkv9MArw2o5HnvPiFBYawjpG3g7NuXJWkMzhoKsDeEUVWxTPTVMUkawtV4H4M",
  "key14": "2Pu7wWFYq5jLwtk1ijQgyBVbDQLizxSS4kuHRLa29LE661gkv25fteoXi9mQyiPpNwHwPmy48YYwPvXrBjXCVMh7",
  "key15": "6osWuhn9BMuXqZAjhPtmDmvqK38qFnzWVFCfsKkEJJEBKMyWpAmy6zJzKUzqxsQh5xchwJePUsj5pS7gy8B1vZu",
  "key16": "2Up23QuqaxYNSVubZyGfcVd5sU3SvVTXsPPaAP6Ct9FWPJWM5fxhJMPERGyjEcUntk7SWbvKBb2k7dGY4o4RMdv4",
  "key17": "k5PZc2NYUvfehwbqWpgPzf7cbdTbzjBvrAEAZBsq3vBKNPPmxdh3YCkAQhN5JxQbcTRB7CQgkPgtj2Fc6p8J8qm",
  "key18": "2qeApgBeXj7wKNbRLTvXAemnUodcLC43Wc1GSmtqFWpscFqZdtwP5TQw2dyFxL9hkSjjFKwgLsEfMe769HEYWfmE",
  "key19": "tk5kLssU1i2zkraJMrAXY4ZkUGGmsfCNtQ1FLRbFA9g8BwzwBY1Xa7nWBqfFwhcXMghJPHA18rbqr7SZBfbCMxo",
  "key20": "4rCuuz5F3MCfF27ji6WytsjZZdwopCTCzfemJr3E3PuyXmSpGQWYpGNgibwPKXhEFCYBRrNVUg1Gb2tn5ZZ4Erzn",
  "key21": "5GEMDXvnRPcKGMpc6Naw2Z4Niq5xsffWNKAe3BNG12pxku2a951xUqY4osZcp6e54SAibWAeo4XcZwRwTnuoycJz",
  "key22": "22hvRRbtLiMP3i1QqzqYSkqKuNyfw2XHngdLbw9n1AqokYxy4zqskw54pbxLMFoCERhivMKQDBQM4YoLtQryyjVn",
  "key23": "36f8AJR323XCj6NHuaKccMwrpcn7nL5HZb64g6fXMqBPjX4U8KSvEQbR6FgiJKroLQYxjQbG19VsgjV7nuoNFfgy",
  "key24": "5KHUF4tdjEgyD2zKQsmNLFEHKQwPCUBwxTJvNg5amneTMsWykDVKDvNbMqPjWn7cqFo5XA9bzRGLUeEfe7oTLZim",
  "key25": "5CeaegPjxvQvT3UjVw1VLFsC4ByMHBTX5Xf1AJJg4wKuXWxcrAN7SLaLJcHmspAU91BqTR3fh5Y16Y3pNiG97oCi",
  "key26": "4iH55s7e3JQLSMapi2EEDRG671ZTeovyyhEPm9qQd8zvKQuTYj79KA3kmpPAGVq3AJ1BULzfeSrGabaF5xeJa6i6",
  "key27": "2NH8svX63K3zJEP21tN1Y79W158PvCYQqgAADkXxAePLcbVyQN4bKF7FgMxidRmh4bCB1uhibG9ipgacPt4yvGvy",
  "key28": "4t3YvjAK7jkRBf2gxfqkLsnYbh5zJuMecDC8ZK9oC524HW7sRLcyMCJ8KLPYXvwkibyrpXA1Tjz2uTa1ByoqDdN8",
  "key29": "2c6NPDJXcTr8ZJP2R8Wrqp1oD8TGBEyekvdSuCPdEHXsJaxi5EeKkuLa9UjK6F8HuChDYJJXuYYUYcqkeGZ5VuCm",
  "key30": "5taSK3WmNLo6WFyNRwXG9xMpb47VFSGJ3vyyWVPdgi73w6k6M47t7Lzsuyh7n2gQ2caYbr2oQNtsn5TdvAY7P5Hh",
  "key31": "rsHe3Wq7jX7uKuvgRkPemQiNauoxGzsEJL1GsZQv9hsLxYvqv8Bmu1pr9Qa7FADvMJMxFURBaUYvBimFm3jwZCm",
  "key32": "jXHQNCw5bk46hv5DqRdEVAnPzsm8RGuN3x6hNV752R3EPeRBvrfUZVyi4jF83Gyz57NGrWjyghtzLPWUaHycLTv",
  "key33": "46cUf7rNVKUzNYnqoDy5p4q9H1wRMwQvaQnr8UvQYTZcMVC8q8ZjuCnjr2Rrx695hPR3wQx6pMWBgfaH9Eb8WVMJ",
  "key34": "35SVYNycqLFoqvUQgowdfvFLHFDzsLzuSd9Z2L9HwjD6cnp7sXjYWGxpoou2a6pVenaq422cLShuhiBj9bvdAUFm",
  "key35": "4EyBkPqK7iQZBkxi53G3SzAzvTnq4gWyGtnsEQAKuXmEnrqbL4VaLgaiaU5zXBKn2KcFYVyo1Rh2NHsffuZVfDgi"
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
