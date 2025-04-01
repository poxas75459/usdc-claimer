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
    "5ZqHYzjybq4hT7vsB17QMpwK4mHZTfAmsbpyf7wqYqdRKZ4o3FxmwhArPknMmEr8GXw1TvPs27zfgHHjvAYHrQxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTykpWKbXZsmCMRdT9MujVLMp41EjFM2oda8uS1hnDH1UXEr1FFJvtq8sDxnXkTLjMsmJ1QrgBHpWM2eGtM77JL",
  "key1": "25fNv15fCyPfB3c29jNtobdPYWtCNUdfePFWgQhU3NPC5rQGSGMDTUCUCzDu8jEmgbrVAy4TN4gSza2nLCXnondH",
  "key2": "2NpDpFA6RA5Xe4eCuKVFoaUWfmwyCSfCkzBYWQwjb4PMJs8vgvUQApiPogtoksRvDUsahdGayC4ttLgyUt7HjSW2",
  "key3": "2MakUtKbsyxSCVVs8ftL8Q5Eu996yWoRd2H6g9oxvELcQEgf9gVUZmzSwp3x1SLqaFiPHtKfHDppjfPWSFVkozFk",
  "key4": "egFvrbPKy6qUabyHAtZKbWiamsdZUykhA4hMiBNn8YYwDJ1RU9xheVG9kA25pu4UTjxRTjnWTTzzhvXs9xcXrPG",
  "key5": "2yGta6uvNzeAshhFcCusBLKfV1rv2rRUBxYCDimVdu5Vbo11tdwbhqfRRWu6RMw8hr13FdRPeHZ9Q44TeCvJAJFT",
  "key6": "4coMf8WcSgj5Ghtfm3gbSANg3aXS3Vye4VJoE3jZRkCcgjXHo6VMMdPrK9gZXdoUi4f6KeKBffnqtSoVupNGF1aW",
  "key7": "5Doh6Wi6L84CXMg5mfDmzkct4wDReVYLdDijxU5kb3JzZtCLw1mAifePu8TBqU1tuhQYhTC1LDELYaq5TMjfdweY",
  "key8": "4JMwNBJ4ZZiXUwyxEJDX4wenBrcefNe1DNkftnP1zGZNdiicahH6QUMrjY1n7Yrv3fqf1KonTBKbMwAdw3U8Q4ph",
  "key9": "65XqpaopupkysmzpT2a4VmNoDT5msJKJ4zBgtRPYsWJnu3wKKP317oTpQ7mrfdNWYLwMmc5DbA9ZkPdoF4Fc8JxY",
  "key10": "3s81Hsb5b1vTzsWBjvh6Xm8Ezv1gNPAy6sWVYYCVUyr4pWJ6MXGBDBM6MXt6hGjoKE8jQqZavDmg74S9kf3zcTV2",
  "key11": "gVnQEWswXjqR1HYKNjjnXiaqmsuKvKoGP5bQyMvo9Emdsd6frdutSZQxf3HnqsNWvsicKVs9bYZDwiFA84UdgUr",
  "key12": "42AguNdzM3EB56rPufyhhViEhXSMF38eTdtLSFS6DjCj7Tvn9uUNK5QDvRadDUtyxVtz3nj1KfSfEZdjYUp7GaVU",
  "key13": "Cbcr9QTtkgeXHwyf8kbF9xdHWPwYojgtQ9iToSvh5R3KCFEEutUvTRBHdBva4GFPA7avv9mbxaE9pgbyePwcd3G",
  "key14": "5yam8jwg64ncSfNCZAG8xSSBvgo4BmihXJHB4ts2pHXQiaYjnSHdw2GFFSZGfvWm7QbYRax9YA997t39pPDpW4SG",
  "key15": "2h6ZUBo1U3eJ4CwkVWMYefuCTrehcaPNYdZiQXuLFQbqdj5FzBNJTGjbWRu35DbfK9yYPrPktBytG5L25cYQt1Fi",
  "key16": "4L1EAjiMy1FXoiZoVUjXcoHLyUMsebxrtmAA3qa2dMxiKxX3sMyfdfvD8MLNuFhFmXPNYwvxYZCDBUmoE2tWs9Nj",
  "key17": "2TG8tNKz9mng1bbWq8B1FS8PcMCJcjq29Q5WGYAxYvw8SoZUG1xp5eYqHZQ8EHQF4UmFcPRHLJ9QBqcpGit4Jfi2",
  "key18": "qChHBuwVLX3K4roocCMDkUYAzMMNE5ut914wVagW3ZtDuV9AX1MC2sBQBpvxbWfda2Wv5JvJe3T5TJKaKFugH6B",
  "key19": "rLjnZr8p7tk3DypyeHPByGj4q6gBZ1sn7PzKgFuQCzgbtFcorMKWwzyaVBuKeKPo5GWW8xHY5dF8sBqwnA8vAHs",
  "key20": "2pamcXiK2jo4uuNVWidacjYv58dzryFyxYBSUEPx5oR4A5BqvbNC8sv1EkYFMN4ikkZrQ2qA34WsCQEt4vv7Mw51",
  "key21": "5Qzkp5vmi4h9En9agpqso5abdQWSZKPqS5VDb99FB7wVc4cScBbR7pKNJMbTvsdJGosdG3B5AmKmoExyV6Uy63su",
  "key22": "RnUh6RsLXfPXsokPwqw3MvQH5LLDuTFE9pL4JCNGchDehY5EuLcprmBYb9N6v1oKiD2JceJYTfM6vCidatLBybf",
  "key23": "3fq8qZHHoKcEVCFkJaXiZDBXfT6zy9RZBTZpqzVfmh3PAEGtxJrXhEVntWMrJekttUdoCSqbQFtFcJkpL9LFKWMF",
  "key24": "4SreWDDYDuKTPJGbsnY7EN8z9Rg8fgtxoHpmA2uvQwrKcXzpLw6SebPrLTquRxiRQrqEN9wJS7VGmrWXtpWHMuFt",
  "key25": "2vBbKYkMGnWUvayjHRu5rcTr5uPcYL5GL1QCxGzMXF92LshP2FbQa6KhZU7vbb54mtPjxjuQbeFUpmm9WCVEWTk8",
  "key26": "4PcpNYT3GvqVdnwDEJNcjf8PcjJmhmX6xddoxmN3eyVmUVfq7m2HtJZZM8WXyJVgGpPooyrk9xpU2VqgiAU9Svfp",
  "key27": "5B2G2B6rTsRyC4p2Eiuy35BJHQBoXW3goa75TTfsK6ahQfFA9ejcSynZxVxpgyE3nvVUw3Uy6T162vVbe5p1pp34",
  "key28": "5wgpEAd59ZSpMTYGzfrA2QR1xaKJsBCgSB5qWEeq9mQY39cypS9koEHSz95ksWeA7i8enqBUVniJjWYXU5NGapRc",
  "key29": "ekFYpwa7CsLtGoZ4ubpoqPkpH8JphVtEvBU9pHvQbzvntvmjj76MW45QC2JiWj3WBgq2JBb5vwaXpvRZrQ7DVwx",
  "key30": "58SdpwkmqhyBemkx124Cj63aQGY8rwkKmVrxzQ343YaX9HmzVxn1fde2r3gmuurJXtBo9SoncGkG8YgqEppWRYg",
  "key31": "37tWntZzFfi3z42YeEFB6b11SDdDBmjhN3NcYkwwPG6nT4GEpXxdnNdqrdDz7tHzDjLdZBzTk4eobPcvSQ8k7Yq7"
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
