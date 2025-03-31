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
    "3d71y17c5dtFAdt8zbqrmDW8nqYzPYXnD3Q4ZVpKUUXUJsTurSM97sWCenEJjnaZnHD8jcyG6vDqMk7snZ7jQTUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdh3fPYXNGDxPGPaXhtjERoLjP3T3eZeHv9DBbdFPReyy7qXnrkK2BHDUmZkdUrm25dKRGTRoGkpDwZt1fPrQW7",
  "key1": "mpHSFesc93pDX1t2br4KqfruBCEAcmNQqQV63fuwRTMRrBAa3oNqXPX9tx9DxDUmfJm7eP6D6SzShaVPKHt7E5Y",
  "key2": "KMrFNEYmWjBgNtnHakF47gaVabV6QEioRLYdyRDbZCzc6QygNdJiz6hxfKUAywKacNtzwYfsqFF7qU6wekA9qQT",
  "key3": "2MsoYK6MXZme2aUUGCGpiF6chsxSWK1HBudzbA8oHu2Y83inJ4y5SWXbGYShLZy7YimbtqLXJJZFs8PnMXKafihZ",
  "key4": "3W8tgar5taDQ6DfKpT3gWnUbAfegmRfCssW8Vd49Vn2Gy8jYt26CciJyB6bkoRkYEiXYBcT3bQmoX3cqrMWQ1Wjq",
  "key5": "63hYoKgxJEhGyuDpxQNHyJQgBz4ffTKPitw37bRNym7NCYN1uNHVjVHfaAVdNe9fAHDhdUWTSoJDjiqB8QykcUXC",
  "key6": "4EArNX3bHVqrerYd3C3SaKBeZzXiJtubqYKRmHig8qJAYSp4wGpYAMgRjNFn2oF6YycPnSUAoMkPxeyYsJoiM44g",
  "key7": "3Jcs5QMJ31tSA8xcdeU3rMtiPJH9Fw61czizBGjjWHqcgpyCNnx93YTtLi8VnX38rAjVncXo4zdFmJBLCsFwzwbu",
  "key8": "3nWyv5ggDqZJxjCZC4JpUmrqYffGDZvhm6NUUysdtYvs1R99VzvKoiL6xYHuRXicWP5Nz1ZXM8Y9xEsEt2L1wGD4",
  "key9": "EppAVsSDDqGUp9mJ1ohZVjfhyzVUkQXgBhRraeeNwSUtsQMsYLEz84SAsDcHpdUbrtAJDPcqxiMY8T2yBJDeHuH",
  "key10": "4BjUV4WomFatkJN8dNC7BdB4gAp7DkKAXHpNveDGH3kdydp2E7C2k5tLFCfyo4pwXPtgpUALF9NR1jUUXkoKqcZ8",
  "key11": "hkjJ72uBP9ZQvbNtJYskCiKa711JGMeibJNyotx7zPRdwjcmbHTKfzRiNrvPmSw1gnHkaqHMLwKW26GtxEategQ",
  "key12": "3D4d5nxvx25YeVK8DgzUUm2QnirrCVRHJAaAfPmtUo2R7bseJ2MbGERYdNJ7GrVnvik5y538y2PBnCw8xgYLtDfB",
  "key13": "67Q7HTWQmdUUWDxE59ZNFyS1mVq8PTLMmK6T7wCG9r1PcyqwwaLEuHVdTj53uL4KBc3SExJBAw3eS3QJ2BRZSKf1",
  "key14": "aQybjrpagZfN8karS4bSMrJWRnQr3CVvpwYTahPXnZg4xQsUjz1tKfQkNM544qmARJQg1o6XYdtsrxTAEwP2L1v",
  "key15": "49iA9Qa5vdmJJFnyDLzWcgjyGUftF838kqr7AqE6h1PVp3vHTmHdRQxZ5WVugg4f283Wf8TJFwXG5kq4VPECa8Cb",
  "key16": "282jK8c4EomYg9mq9sPKEosG49ychC94FtxNMZAwHve5eJ47XduQ5JQEJe5eVntRVJfVriu2FTiukSiVFqiE2hPu",
  "key17": "E8i1BChu1cbyDfPprXpAgAcpBWs9MpYCiQvgg4VRcxiWk9jnyBF5FKRtbdoeBYryY5jUaS8QMDvbj83ME24yuoz",
  "key18": "5vu1haR6VF33hfmaBFmLQvEV3K6tbxPQ7dw5qv2mSHptYAgaZ5MBtcSP7Xkym23QQ4JZTzY9R2FU4sYjpyFMeRrC",
  "key19": "2BUSu2nD4beUL4KGFjWpwfqYvFEQ89X5bcuhEuJovty3A99QcSuiLjsirotMJ1zWHDYLSnVsVd3XhM13R6yXKY7m",
  "key20": "2ori2LLRK6vCeG7ZwNiPKc4pBcTWZL3ggi1X7CtANzCdoWYXRhLuuuiR6huiNJ8DCoh3mrBxY56Wx41c3fHcGLWN",
  "key21": "2LbLRJSNB4AbNPmopXLLtAYbu8KkMciJftVf3j8NaLHidsf9cC5T2JfoHrq9FkEidGvHC1cRR3tdbjvPMiVw4sDG",
  "key22": "5FBXDGtUXmy1jqD2HpGgnmRwHsqfFyznntesoUS2AEJPEBZ1AKa7NDURphcpiZdeQWB2CwP7qkiJzLYVXMuUtrA9",
  "key23": "2DRG6bQ5B67fMyxNagDYSnutCSnui5xNbXmLVn48myuc6iZgaqPbzg4V7jPfN2s7E546Q417yZ1BimSWKyAgUWYs",
  "key24": "4hPdsArMEjtrGaNhsMH696Cqe3KPmR5bfmysJyMT3YpgnSdaewHkXcm18q3eUoFFyWYwB9ziJojTLEAdKb2iaChK",
  "key25": "8UJD6TfrxTDBXR7ZF4CiJmUe2KCCa51gZyEB1YPZ7oohUXETAREyq8SUXFSWjm6m3xhWxvXsu1GVtr2fxnwvkgM",
  "key26": "2tzgXcp7G3ZWTTdaDABTyYNXHvGBX81LTtFP4t3pxh5tRv2Th4eT7mty9uftFsbWe5UouoAi7h1r1kBCmecwXtsp",
  "key27": "4XgXN1HSUjAN5DsZUjvjxMsfz72ny89nA3hw14PAALpqrQSinFmqikMxpBgDv6QNfVpbPV1LyHwmLiQqazDva6Mg"
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
