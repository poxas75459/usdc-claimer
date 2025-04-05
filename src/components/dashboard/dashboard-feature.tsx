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
    "2yjQusSfX9MHpwNxM82noHNRDbUf3zbPAZ3M87DDKNVF877JGZTJE9GqmeSP3TcTYEfBa9sih3ih5tCfRMnHWmkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UytgGeDJh9J3smfR9RBz7UftZ1H8PpkgXZi7nz6apzGkH2SLsrdbkzyvrGQ7YoKhwqWz1hbtjJA2b72oXMxJcNM",
  "key1": "3FL9BSMNvb4zuf3azaWggnKXD5yyc2NttutH2a8dHDqNRaRFWFAfWQ5QNzGcDPape3WJRVYLpp32L87c1HmSgKx7",
  "key2": "5yUYF9DMYgvtXc7xRg1mQorgNsYPBsRzAxVfEQM7CTQDFChurtLZvrVpRDsXxPDGWxrifwtAD9aPazzqticyrGF4",
  "key3": "5bf2NzQjojYHrwCyuWYemCHyBSt2mDvXattrvwskfpsaSvFwA12owGjAUuTAyJ5dPvT88qSZ7mJQYhbztpBPiBRo",
  "key4": "3rQmhzxopaPPCQKU3Twmh8a4yWottE8fUAUN67uz7Z9efz45R6RRnUi4emWh6JyarTGwj4tVBw1cejo1JNtD5Wpp",
  "key5": "Gi2FJVNchCktwyqpshrrqdtqT1VrwoqtD6ZDz4cEpEEHzGqbp5R2viR3EqSyUEzG32P2eVpwPGFBzxLsXi3tBGQ",
  "key6": "4qkYpjcmRmYxvFYS4wrM61d9wwnkya5XSG2DgzM5pshP2QZ6KZwikLPxqrvZHiiZLayYbND3KRuUaHf3jgdQhHNQ",
  "key7": "3tA2GPW3yiGLydqGT6GTBG4ZtZXXa2ppFpwNGfgXzqtHV1kpfu5FWENzFUzm9p9mNQRCq63rb8Sn4VGteeRK1VnG",
  "key8": "2BzFV9SRuFRBfk4sQw5L52vHk2zJ3xvN7nmLiKQwSgnv5Fesk7xE8PDGGuPrhgA9nDcP7rznuDX4b45fczireXod",
  "key9": "4KoF6xfdZrEunPwr3yXN6YzvFSmuDtMsDKQC1Bca26wwuvpdxrW2dqw4r4cnYCSTrbtXNvcpKUKxRAv6Tqarcqfy",
  "key10": "4D9qTGer5ZUSHDeNHiBhCGxkjgU29y9ta4jTSmqJXhfjqKEqkzic2mALJ5NukQPWzXLCKuKq172GdEzbNA1LdMGy",
  "key11": "46St4DnktUbr4Ve2HL69S26q1ny6nCQ59x1DHu7yaLyVZxGDnBFCzrdyEPHP6cMVfeTPyV6iNmywxEmVYnU1WkXk",
  "key12": "4ifiueFDsXpQjiQUUzDbq6FBT4R8oUMPxQKo8qNza1czbvfX7iXBbhen2zXPhTxS4HJn7ZQ7ZfEefhSZWKKchf2w",
  "key13": "56335QHB5GHZEVDPy9P1TjUpvPU7LY17PGvxwaDeGURYzhRaC5L9VTJBEJSdTXkwEF4uKYyz9AboK7eZeTQ9sdFk",
  "key14": "4V9pgNAX9EfxY2HPzcYRZqwH6YyEP8eCXfrftYXR3crQHdrx3e9VsePTcaPQgYPSfo6kbHYHyiJQtn4uFa2364Vk",
  "key15": "2HMpEdmSEzSvhZxtvVvAsZhB7DuRS7wmCqR2ycgm6BqbMzy2ibXaTzM5WGTjySDJCQXY3da5LFYk1qWziYLJqEff",
  "key16": "5U1cCAtPT5YPdieSz17LcyL44mexh9ifNVRiFgZc9EyKBEPnzjfWk8umpwHepjddKFzZzCBQceMX39EdyiV2adAs",
  "key17": "3MprT6TqgyTKjxoviW9z4sMiHNYS1qhaPVmswuK3TVSBEXeGHCpXWmKyS7VTgYnuK4NzjMD12HE6ZNr3ubGwnFE4",
  "key18": "sY2GN76Z2QGuoTmeJsq7MWivYwFTNXoY9sYTsePQbymyyHXxX6AeX7RhbjtYcqKiJVDuZCNGhoCKropKdxUCwoC",
  "key19": "4CZq8zsvtT4verAkExaz2nj6UgxrLr5EYjowRRHxyDebew5gxqBEaP8g6WHPCohZCA9EUdsdXfRACXzndKjXKF69",
  "key20": "2dFZD8oyA4QckB1QiwUceZMGCcrg3cRAD1VYfCv3GXka2P4Lrw632txPBUE1Vkn53hohWZV2sSoVd7cU21tmiXZK",
  "key21": "4TcrH4mZ4ws11AsqNELVxusYkLq2HsZPEvLFvriydEFrjPkPGVWtnhynB3nKtLVQqYe6rMDG9NUFLiZ7y4LDe4rA",
  "key22": "3XYwC1g3Mia2sgDtADSkysnqBXzKbjvq298Y3qmVmL1UWpata3TnpQCKvzvqq78bbFnFQNLG3qnjhgEmsKv2AUJC",
  "key23": "3ANV36qjdXVrRAQ8jmChpcpdcDT2SZ3KFcmJqEzAsGKHXxowbLhUteog6ngNSWawGsWDDiMarYRkFPhHgRA1WWDE",
  "key24": "2x1u4BS6JbbzUE15SLKqFbuAp3ap6azKUhV3r6Cuv9r5yMqSV3Zz7F3c96oovNevgM4RX65GrMoDBnvtTCQvYJxd"
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
