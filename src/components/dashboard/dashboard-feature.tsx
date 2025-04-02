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
    "2VH2LMisupU2QBR1LKX43AnmAwXoMQLKASFrPqaurz8s7wpN5j5gDzxgG7rnBB4GA5VyrNc8PWQnyawLB9nAuQak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65y2GGocvNDUe9QWjT5G9VGby9NnFetehufc4z2qtvW9vxvVVUCmjktEn9uaadaDbdanf9gYMRhJnphYRargfZqQ",
  "key1": "4bSrtrJbd35jGKxD3xNdu9cV9jd5C6NBAtsAhotD952mPMi1eCwR8PiLeDn28M3L2LNaBTHmtDhVfw8qVemK4PZq",
  "key2": "63D92nzCrSSpxs6ZJT1ZsGiaeJaXMc5RtyzX8Y71arqrxeErh3e8MdzVmHXX8rPJKXAEWoj9ikmvMShJYXCxBWh",
  "key3": "2FqMYrVnQVHBYo93i2SJk7hRDPjryef3KTZLJxSsSCiN2ZWRF2WKbNBq2dxNzT79rvFTT26FtrkzuuvNDQ5AQ9jP",
  "key4": "24U8ThAPBka6UMiLeyU6TfdcacfmnNSB8ZznAbZEWDLiDB7tR6H2jsetVc8v9vocHjZxddnaCHXRNzcf4eUJWmb5",
  "key5": "82LTGMytKvKJyWujTY6JCSEVANEfo9uudBPMxT5PvdWEXqKnYEghf71njaTiMQv89cTyVFskfxpS4pd3zhhoiMe",
  "key6": "4Vaa4zBCEdzbhc3UCubkDATuLhLjVfXaaCV3VuCVh9mQZRqmYH5xPgFQ67GYmBpw6JYiW5Tc9ASZ8QzLdKpf5PX6",
  "key7": "2LraiB47jGoTGKNkqLCuSzFwQvAqZMjo2PxPmvqZ24j6VYvyKQpitnGSHAs6T21LJb2hF28zb8gw59ihEEBzqLEA",
  "key8": "28WvWSUcM546bYqHCY8Ljy2Exa1bo3jr2LcXgRgrjzCvAhhfJEeACdejzAQE7QtTea7nv1akJjSLrHxzsN6x7t4P",
  "key9": "5jsD96mPDJ2jqmnspftzmSZGKASA5kmocpL3y2LaY25etxQAQdGtkmfqb4oVtwH25mWCCsfYZUXcqd6rzgYCYU9m",
  "key10": "2sUbihp8wakXFRxBidRuKXPMxcgNK7X7nEZ4TDQvP9GTB8ujrZRm9kfN8vA3dz2oa4rUZmbroekKJeEHNhDihzN9",
  "key11": "66Cx7oK6X92hpvjwN6bCqivQePjRYzhN9NZ242bFZZEcfdya7epo4tth37c2yjXVMmagUr2BbVVjwNyWZEGS2NaC",
  "key12": "McB2Lg1qS2vR2hbF6drELPyxkmqnPEbytuycsnv5mtVpSo8HqS36wQJhZdYAUKxtGRdCXsyBTwC1GB3g3YfdypJ",
  "key13": "3zJS5ePr36jMxyVkD4LWAhXyeGSZRucyTxVGJt8LjVXzRpaDU6gZMykPTMK6ZnbQNrgTLm4tHTupBwJMZp4xrRF",
  "key14": "2gVEBTaZ2gyBUT6xP1oH2RgDmMqjKx5gZYLVpMHQPdq75RNXuPivDBQWAARZAxaLZCinrFpgswWTVC7yhEHYjkCL",
  "key15": "5RUXJqwf7vPsJGT2wrbVEnAphAMiT8bfGfNTiDYkfjDQCMrorSWXCsfy6N3knEKQd9zEjs2ZUp7Cwea3AQezXvT8",
  "key16": "3RHD85CFAQpvCFYvksqncAeHUrA5h4sYECkWACVS4XFWZmsd97LkPtp2by57oEvnjJ4axaA7oPRtYRwRZhJRwv8W",
  "key17": "2aJHXEYPUKxVRSGXHakgh8aPWqNVBrLim46TRs4pPu94xo7zaLSAUv9yuyShGCGJdVM12cLR7s3zTw3HGhVaeK9F",
  "key18": "3eLm6eYsjyHGH6zMYUUGpzAfoUd4TVGd1b5kYLyJxUdgfqR5s9nrEmvKq4F74qRcfB8W6mUR6v8GgGWGyyLpsWXh",
  "key19": "wNwXvnGAJJ2ktJcBDWS1RHpFALthQu661gTyYUB1x491XBA4Nr4iDeaofG7JjFJ72791qK3j8MmPtmx8CQyw5Ss",
  "key20": "5sUdKjV2zo3NaoCcR7KPSu5wJppk7LrPkHERMwGez3mHozdDQiHd4cNrjAj1PqxYcZY7QRreKV1TL1RV1AzPB27P",
  "key21": "45ifsMTYZYjudfwR7KgTC9tkj6R9WLkReVijvLj8cV4JTSVRyLa7Ya5WC1d5Zg9ooGoYP2DzG9tsZcuXGPAYTiSa",
  "key22": "2xstzs4Wvoe987nSTk3CGjV8MgMbnGuYeYxMaq62ziq6JCcuZ5YsMLxQNCwTxVyqB3daXfQXEA1kzSoF2EMqrUXU",
  "key23": "Pu45chHmUDLzr4jVCWLXnvusDD9HiXwVNTJNe8xPGg4RaTuBAUWGNyDgifg3Bxc4JGsDdihRPSchQVkmcVpThHG",
  "key24": "57USYKQqkPwFV42Q9HQB7gR6i2Aq6b5SR3BW3s8hZVTxJq8MmrxXh767rU4RFa8FakTaw8n7y4U3qKPnvgxVvT6",
  "key25": "3hBz5MJjhTdZpk3u4gSAhxGuXh39i1SXE3ADQGNKcoc5kT7zYBYhEcm5u6RLrfFZwnN9g6aE9bwp6wx6nWvh9VKd",
  "key26": "2CfdWqxf85EC9EkBs8U42gaQKKmsAxrtisdgTitUYRTLxXu8pCXGX33DD3QFhxzUo6sa2zQP4UpotfPq73Sm7tf7",
  "key27": "66QVNF3BVW9PoSM9pxABbQBNtr1P8tazvHz9xBSJKSTem3WGbdu9widTNEdLjAocgVKX2yaE11yYVvufeesSZG2r",
  "key28": "LgXjh3QD1Wjf2BwMgvqWV9Dmav6AmRGFNzc4GPNG6DJQQ5CSPJEE3ZGfA7gwobj4hRXzgMvWEWqf3AHqU5amSNs",
  "key29": "3zsZn7pcKWWmJAGh18Y3Qp2XJXY4ar83NknygQGNAzQwUHxtvUSEFU9M1vDAXHLx2Apa5769wyCFWNyQjfkMKS7g",
  "key30": "5wY4NMbpyXgJzsq2VbqwmKZTX56jqtHitTiBZ2NUeaNCvn8LdA1vu6xGt4hd9CNKUMdEkQYRMtMwZ2TzHvfGiGtm",
  "key31": "3i7zfa12MJaxiWGraTfWWiT6uzTxxfw5C5TBe1n5bCyzdH7dgD43ovAPmVeV5THEnytFPV5bQvR2zJug2q2J3RVh",
  "key32": "34gHxA6R8uvv83xb8pREZSSvFsbikESrFa7HjUyvrED43bPLFpUF9hwn7nWfb8xP1CvkQDxSmqNhJySGtVxhtiXz",
  "key33": "42JjoEmFDyvKdD5gEjafne9a8G5G3i7EvHyTD7NzRnLkeoGHyVAebfqokEjyvmUczU3PAseRAHpT8N71XGQW3vXx",
  "key34": "3G2ZKUi7xpTj4rBokmMdEJHd1vrpkKrkK3WnP4Uh2Xrj26ee9XoAEL3jH6bpv1gZnT3zY3obDcooV1iF7qC2vF5t",
  "key35": "4cR2bErZtpdfSSt68GuuT7s6HKtEt7gZFTEv2sR6zvn3dKvibBypTTksDEoLonTLk6F9rYUwHKo8h2Ff4GW6gm6w",
  "key36": "CT9boxS79T82EKZUePJikNrMALbRyyS1RSf9Kwi9Z3cZ9BaVRg697WPGb4D93UFgpavamEaTYQNtTvdbzfgnvBr",
  "key37": "5yv3QiCvQdQAUDwApD6DSbMBHAG9F2PSfjn9zYWhjtHJMxysgo6gtG5tPrhtVvK3YiVh7smVYMTyps1AKAUy6eDW",
  "key38": "2NtTRsxtjUXvGnv2otuUzStsXnZRGjeK6akRDJpFCRpbiyHKmLSipTWRbXZZMD51NurcDGvVvA9pcStojHfD4hoD",
  "key39": "3HwrBGUyFZxx9Dsvuz2KihTqCNj1hJm36EJWUGaSVab5LiznDcCYCjZS6jsWsbN3HRboLD7Lz5iZTbqAKnoJuVKE",
  "key40": "5gUdWnTJWdGuFYD5LmpPayokGrn6sj7rK121qjzz5nvJaDgWBBFDaK4uQASM94ZMNYvQrDzPRRTUkd9N7ANgF4Fm"
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
