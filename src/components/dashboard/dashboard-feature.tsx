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
    "3mMhvoYZqQBGG7miy5R4R2B1GnEG7PGZgQ4go29QmzuVq4xz6JYy42PzaaNhpvDGGUHC98n2KKz6uGAFRgY2e7rH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r9JpCBmLej72whyrkf2e9qFkEriVWDZEGFitaG9CimJzEkrAYj61nmiCw583t6SzN1HKBNwy3WzfmTeFk1bENLc",
  "key1": "5A5XJ8Gv2VRn2PCJ95SUDZXtZ9ZutdS6oAfpxyzgTawsroh9zUKHHr5FwmWkTAVcsrURkmxmvR1THeVJg68Rbhbf",
  "key2": "3TNemZNL7FdF8spdjGrxWVWYBATmWjGvbZaofKAQ72bB1UxKgED8yEjLDKDY3xdpA2PD5Gh66ZULVRtpraKDuUW4",
  "key3": "55WB4uN4DD3UqakwiBDHRerLEVCHhGRwpyj1tGrbfBnvbmDbM55q2tVT3Wm567Cj145j48sMoY8a4hfxdUxc3BuD",
  "key4": "4QKfU4QfCUCWuKjrX1VtszaBodJb3B1iHgTCQXLTA9DfDX8U1fzVUPHBbjqmoyRxrEaSsQHVSBotgycTL3eFtKRt",
  "key5": "4A7337gUkYy49WWFzpd9WWe34XnP4puTMMdmUAVEhCd8hnH5i3viAKzVz67wRp7QX1WwferMxvPo6t4cnkpQL5BS",
  "key6": "2jw4RLMbyL9xrVcWU2zNFkTgGEyvmMbuBkFSJroD2ihCHLx1LMpRTyYWRR2wdCfsUNxo8RV3cJxK3mPvtSuQX9NQ",
  "key7": "628aJzRRJtPjigQeLyooM7iKPJPuCKGXF8dCLuYuU579atajNmbZ3YiUkQYFWkvdFuqZqDw5TFoo6KBenegPYUqE",
  "key8": "3T861b8EM3GhFFPq7pkK3qCiF6AhvDyvJMSKdkYqWsLrTbC2KXLdN93et6Rq7BivBFAzhiG9mpTt98J2pFKVQFhs",
  "key9": "3jmYjsECZcDHBxuAYU8rj7CGwYvJQLyapuNGxKBUtCU1Mh9gfANUjEGnbvQzHvfXXSwZqzdEk2L4c88mFkM6kAqj",
  "key10": "wH742UbzwR2rs4wzt9sfy8pXosQj8yLTdH5y93N5FSFHnA1yKygWXpnCqomPce7yAz6cGyvDiDNivRtkMPPujLS",
  "key11": "4K32SuzorW2pz4FjHymnLvTpKe6TkHTumTgTMvvmnDP93qXxNakqEVAK4Mc8xpxMTBkf4nknd92m1vYT1vYfUtrJ",
  "key12": "5uztUht5FDH4vAEXzzAs2E1zXEXsEPTN7XmwKYNAhWZidoyCthDWL9oPDccXFsLR2rsWNR1njiMFYWXXKDCQ26wF",
  "key13": "5Hr8Vuaknt1FtH7GKQnMGG37fvxKALQUKKUoyoNNFSymjgFapeyqnvMrQoA2n11rhBSXRFSo6VRDmV1E6Fs3ovY3",
  "key14": "2cciXs5ViNiH1j4ctafc4UgK9r21YjpLeJaEVR3HxXtboHhhyYWH4KHpXjLmaLUigTqqGP9SFZKU4nnYkQYHMEJY",
  "key15": "duGAcuWVYgvJodgQNwbvpxfT86gv1AL4Pf7WNsuuEsZMkRQ4hX6shfyMHYhW1Ezq4VkTG2712tWwmZ5ykMnYwdF",
  "key16": "f5EN86CSAXNzcPAZtpbUwJvLskKgPe8jwd8Gmk5LibHAz2nSrGcmQnPvoxg7Ltk7v2i1X531q6QqC1M13rMXoNc",
  "key17": "29Wp9nAP9R1pxTUHXMzvga71pMdxJBdb6fw7KWZbsAVxUcbrngieNchBM42sc3vHcuQTbn1dFvD6PFxPkgH2gc22",
  "key18": "5gW52hCq9wgpNkbUB28U29SMZ4bXVqSegt7HmvgkqsszZqmJeAPrZs8rD2SByYZoRAjzZnUq2xVQyKfDn413Bz8p",
  "key19": "43or9tSgxxYTqXWbX7VULRP9MgRTnrGJtdmKZKRDYnC1o5iq2mYJztcjt9FpF8npWSLASWTbdqGmqXJexGgtdfnA",
  "key20": "2udaGWmt3Knk4uxKNyapsx6USR8vQnBXUkCdJrsxQ9Z9YJfd8i35ycKtiqDk1C5ACFJe383qZr2gbRTw4S6RRTT8",
  "key21": "5cu2kpeqPAFEzScw9LKBxhaiM8yMeJHkKnmJdtdvmHKNELTBYZCyeiznUrkkJr9aHvR9ypgpTszNdFJdZiFNph3b",
  "key22": "2SJbc2E1nkj4QzUUoXSo2Tf169BEMHzYQddrcnx9PhGjsFQuCn6WFZ1iXZCfBNHnBEeXKy4SkSzqzBRCEuMX8qFv",
  "key23": "ntCdgvhAV6GB68ja5PaiDth2ZdC2Xx2hTpZwogXYmTdRtWu6gkEcViW6LBDThjVFHNem6ehU6CEZH8Tdmdst1UJ",
  "key24": "3hZYJxFnmN4abNvp3BbwpBoVUKYxVKSsQGa8o6QumhVxmF8GYZ8Db5RY65kwqoC39cBB6M978RRUcJqsrTFE2CQj",
  "key25": "WsDCab4mh38vFou2WcpkH1zVwqcwpeJ3c2timFyNTfMqwVfuhKtiLLQtSvtsAcEx8DfG7irRhMoS9PvoWoFEQyv",
  "key26": "4Y3qeyntkMeFHDukU1idEtWzwcNBumMDyiKgYvD6wXmFJkLKqZeKYaLgUQKqXbZNTikht8EwoeW62zZBHpQbjV7s",
  "key27": "2zQcgQuXSfsPkZzx5SsDNWRWJN4CutSTXLporUbNdsSkKSyimPhK52MgvLLNnV38XdkZ6CRjdinFrq59PUZDfdYJ",
  "key28": "34XWs6aSEbD5xDfBAfp6pW1peAzNYKuT8QVhzxUUVKAk82QNSpkQ2zzVZMrAq8YqUqJdvXdcAUhyChLngisZBs9t",
  "key29": "4xS6TDvizhY54umN37q1ZQXMWabqVcZL4KyzjVrUMdYSDKBfxx4Nw1noSVs5rjKsS4ffNQoZA9AopjRWGy29t7Cy",
  "key30": "4E8MqL6f28n7MWRgVQ2iEJVDsxaGKEPR69QbPys2RWzhWBXRGG79j1VYCKtzg8yW13EokbcHiWP1exCeSrfYsx13",
  "key31": "3kcKrxHjcmRaQT5i2k3smyx6MLbr1HMnb2iwcrmu9LyVdXEM9fM8pdyaBFQcxAd8rJZ3sGY3PkF3m3hrGXYwm6VC",
  "key32": "2ZTLNMAyJLx2jdsZ8rKqY4BVBwpryYyDA5HqF3jmeDaZ2u2XowfNaVgg52ZDvPKFZTZCg2WrqazBWsEQAZPKpY42",
  "key33": "5ab3xhvR9XUWeM3Y5APzSZZXmYfy1M8rkg1bKdbRCcP9ZFw5jLomuLvnsZFpwgh1smgEPEW1hNJgLnNvrcXjNYQE",
  "key34": "52U9vKceRKBYXp62vLSpArqUpX13NH9KWAPjWy8NbpySnqHiMitCohLJPkPamQxEPFy4eKEempMSkMeYUA3yercu",
  "key35": "Dy99owXnuWHnADVK8boDHW7Mv1VDow489VJpRUREEcNTz8YX34JyvNLsppaPsRxtbvnHmdU5M1BjSssxBrh872C",
  "key36": "e4nQiLzf5d5qPCN6WzYniskupvEYvqyeDrJrQsH3vzM3xbsYpmujuTa2YQXo7pYH2qNazgbWDVeKh7jpmZYBV3c",
  "key37": "4xsusov6vLohKvBdHbZfKAhzG27W9vidqX9ADbkTJRQCT3d1Cd77uE81VyuVbDBYCbwdnJJi617sKsi96TGTVUXR",
  "key38": "2cotKn7zxp1z5L1fuWqZ9371uMyfvdQPBE3JHALNaX3tuecjyvmnWxSi4m4CPAAK2Gjsod5CASG13mkXACNEe92Q",
  "key39": "5coECYzym7f469aj6tPUYFEmcJFrkiuKAaATbdB2zazdFqSFZwsCWfo445XMEEkih5y7YbJKzRVCqm9WK7eomrvz",
  "key40": "44cARC74aPDo3euadH1gNF2Hkcpy4rik8t4SJ4BqE563Fegc5x5Y74EkCK8QCikL9LjPu1Zzc6NW5vqkUcbHb318",
  "key41": "4zXCLqKVCBcinJpDngMbuXQff6qYt7obssrkDPGGUTiZqvJUU2oJSSnWcSPXKuQwu3kUk6jSf6pPWu9aUMFZe9ER"
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
