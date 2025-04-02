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
    "44h2U5Y348TzqLiKLAAkqQ1Ke7yb4usp14ttaEdZnqWntcNYaubxhsHDF1UdMoJscrEw2XW9Yv6wd6AkQ6PqPFvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuXTKKRmCUSPPbVC5ihFUz7Z6DG6iRiroRMbPaqQTNDNbfztTzRWix9irwwBNFwU7cGeMqXq6Cc9swC8Fxt8jVw",
  "key1": "5LCdpNyE6NfEYwCEsvhE2JgPp2PxyEAUNiNMjVYiQjmGsyhUWp7aur2Yyd9HjeE6ZeNrZc1Z6DEb5nEE5o52ZbPP",
  "key2": "3tVWVGz59zSWeim94kVBFZNfNEcsdw4xGqzMa6uAy6skK8czUP5FTaBWL43Wd11NykhfAzTwxrWzNCBeaf6skVJe",
  "key3": "EwDacyRVZhva34r57rcS7qhvArQgfqAzM4xhJy4BWs4iDHHCKXpPGoRBLAkJMps3URzUCmezrynW8r6mDQRXc9A",
  "key4": "2B4Jnfzk2bjwkP97kfbb9PFDsKpe2fFtz6HgUTeZeEeCwvwFg4xeTjVigwoYX3LS99qsJnVCCMuziLEkd9rmnoUW",
  "key5": "3sFsuNHAVeSueTc8ykjmeLgXBCX9CGRajyX1ZcsHAQ2PcQBjMmRiHnJJnL2VMjPQXZPmfutLTtLbvtKJpcesVXK",
  "key6": "3iA79KNVitYRBv3qeiRrx1y57ee5hvftTEWJTNTLXVU816CLAsBq4qwGznHB7yRfoyr4PEVdxy5FEtJ8rnabyMyZ",
  "key7": "5mzgPSKZD9c1dVmVD1BhUBJJZXF4NskNGtsVhhJL2QUkMvEZ7tn85ZNGNFzbqiLPcLXmipxee5Epb7WjBc53RSWT",
  "key8": "5NUrNxaqPw1SrF4gdNJEJp7kKtCxnfNyERd9tCTmvhkdNEQyUfMEMp9HUJMwFniQgw6BTpp3rJjangaSMyDBxRnM",
  "key9": "2mSEDK4nxaK9L9kM55hkSMQ2Dbt3s9UP6kDuyasc6i8UtBR3kqDBnVMGhypoH4nUK3ZiBVnzCVXCG9RmbxnBtUPc",
  "key10": "2ibPLtLmkWfD34aDPm9cHCaPuz8hxbpW1YcQnE3TnEFrXdm1S3ZvgPNGSP32Wr61YBVFXqQJLa74xAwwUGFVKjaD",
  "key11": "3DgtxfURXYeVxVBBzNececNxZzS4Cc3mFpduDhit1qMwJnhEk2wzj6Ye6NkDxYt15vAstfQFjeT4PRkPrREPEzQu",
  "key12": "3JG2Ps4ccCgrMCbgySGQgRJPsu2kBErykyoZJdiqcmWa9znAuGpSNihoCkEGhLg7r1He4tQ6YaT7BD6V4SC2VN4Z",
  "key13": "aexK2cc7uHc4AAsDXTUN6UGeifK4ASdEPGBuApnKdvjGHsJv52uv6DfiNFwXmK5N66KpgYNCXG44b6H7SpybGcQ",
  "key14": "4NJbJNN1Ch91pYTxbC8tGkLnbM2YADoHsbhJD2sK6TwJKPfBwWhZD7SZ551BDQTi6MtFjLjoidJhEUtxW94DENgN",
  "key15": "4hHtXMbcAikDdTMjkmG5sLDWe57Qa2qrLxoVaAJXsE6TtrgmmCPub86PNvwihaPRKZHg2ETC85CJZDCiwn2hKKJw",
  "key16": "BrYgwR2A1bDUrjZiqbNd8bYaPdSmNxDgYQcMXiuNXBaQbRDLYQPBP4QjHK4tbFR4Rr4UiZ9s9HdhdBUJ5wC9H56",
  "key17": "4Pois8KVzx42EA8jKbBRnHpL9bcyCnDet7Q3kD8wB4JzKrNVcZAqa9LbqxCJtRrX6SLogfJKuuqzZpuynkDHRHJ2",
  "key18": "2GpfJP3f8sSdjdB6Zmq3fcNQRgCoDafcq6enCdP59TkePgX9mxMR6xMovfeHRFu5Ke2ZxVwLH8GNveq6GBcqbzQM",
  "key19": "4fPVJ8CHirrjCfqW2sWddyBYuM2CdT7TLAMWj7BMpCAiPwhQP22q6oGw4jwBns4wkmavY92YLjMhTJPz1qFoys8p",
  "key20": "5iE5ybkMWvQRdJxhUWDrjrzVUvsQGLQQEGHsQQRT59SoRs84PJX1sP4vsQAFsBcrcz6XFUSfMj1tyHRo4huM3N14",
  "key21": "3cs7i7xGxaX4aoN35K5uDGiwxsCJQ53zMUbTn5H5YrFqFmCL7aEUPJy9xJaADo6sujb1aYVqhfVTuSzDHpWUfpWS",
  "key22": "2UUo5ACyVxVZREHAgapBuGYiTXsXVJycYVfQNqbLjCwbd5cGbYBHD3SfM76eAn2SPHPVKtYXNcfSLjfSe3Dp5B1P",
  "key23": "hGBgynhUPNvg8XrDdUsHTyDgh4TeWSfb3FpiKzDLGHyxNH7EokaX7P3o3s4FA8NxVYNH2CVvgAwf2w2SvGyNRpA",
  "key24": "4Kcd2PKhbVw4R2fx7poZLbhybX9PmKUJLqrwKfrL2cRau3LZnze3CdvGup9KdDDbtJEhJTE7CXCq73dh1N9NjjQC",
  "key25": "3RkCgWqkaPCz7ygfci5sEq37TGQGBhzAMEr4s2ysB4jFdxWwNUgno3KgZnXyDM1vT31eabgLYPfhKRwpHpwi8Rst",
  "key26": "4QKT28NRbAp5ZSFbEBkL37gAPER2G4NVwGAxHV2JQzJcLHuCYVZ7R8tjdouY42oyuMKiM7tSYEYi9Lg1VRCGej6D",
  "key27": "1FSpXxyC7JZDFva2eLyvC3pb2PebDV2Kpz9g23ddpSKsxPiPWcBPcawGxuwZQGvpT4BgQHskKU9Wk5eRedTvozx",
  "key28": "2UT1NLqiKf9ssZchoVN3sbikaaGKFHfHsSU1MMgtaxX7odngCxtQbdZbhBJxZX8NMwdmbFDMgMcaG2HRUvqTgvxQ",
  "key29": "3S1hbBoHrifWtKYiogR2SapPEfiFdJbLFNNTgbydkKMbZb5hcJeCTPeV5URT4cdnBeUGBdANgmBNkkiMgrbf9zN7",
  "key30": "3TTpEBAtFnb5WmWYdnamun7fNJHRkswzZA4DzCXFKPeWgsicczzqBss1duNYTSYXKBgqP4A7G9oAKotqrHVr7qWY",
  "key31": "59P2FTGaUhZeytejoCaFr8szGyXobWMkNK5gUEXpfVzoe9nQ8biTR5L5Scsvhc9UTN22VnJbBCDcS7maybTwcaMR",
  "key32": "2b5XqHSkVgwy7YGQ1oP4YCvm3d8UKh61bvW1zbZy5Bu8jbuqTuSVJBKWN19vtJdHpoFPAN8z7b9BvocgW3TGoyH2",
  "key33": "4vtbNgieqGJG5dY2P9ewr1jXXeZDdomJG3GsrgGvUmtJ1gstDBiSZ7A9pdenz2jLwUzs73iYDyH7ZGAxQZrtMbYP",
  "key34": "49jBurUurCXeQ8e7qJs11HybFPjZ56MHPpoxGBxah2wCMAvNTsnb6ECkxV618KShf8QTRaTnVXJ1SXedXJ83nK3k",
  "key35": "3a6CqZgcFkPAn7KU1GiPK6XhEF4YyZzxzKu6xk1hAmFbGz3mjEzUBNRzHzRmgoFerTrQxEebhDCVzxGJasD9kh4P"
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
