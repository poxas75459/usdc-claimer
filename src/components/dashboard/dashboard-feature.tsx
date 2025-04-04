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
    "AN1roJucdvrnDk8AGmxLLRdEcXTQDQan6etRixKbmCgPxEfTYvaYSetzZPt9CMKVVPabmvbkZXGNUfwieAN56DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29WQfGLfmGpEUM12FR35R68nBJkCxh6Pt6GYxdJCe58n3Cnu6qhBuiFSBbvFEfJsQdZshFF2yYAh68A1xdjmAtdE",
  "key1": "5C4yx1ttLdWA8BdDQU2uAPXaqxnrhsa7f7f1a1tnhj5uDFxFzhZ67xgwSxxwPYRVxeqSqEowauMYyktjHPjdtoP5",
  "key2": "2qqHEJBb1PotNs65TJdj8fEs2vWLRVUAbJhHkrckHKrvjzSvWeqfPReEygKmDpLi9PbZ36Hr8pGEwwaohhF6zVnc",
  "key3": "3eNsPsf5HMzE9zCevxUvtBqz8fYZFVEm2E2dhaVtvC8XVk5Pgjgqj4Ud5J46HHXBNspUE3KziQPJ6yWUpwH5vKnE",
  "key4": "4h4EGsAD3Gci4LpDDW7gjbjeZy6Ev3ZnxbdKgGgSxPK4u2N61rR1CEckR2dxD3VGSwPfD5azZT1JY9w31J2rSkVk",
  "key5": "4AXzLyQbyomMopvi7w1LnSe3mGTVJCvd8e2pTQTJ2aQE5qpKWXVhi4XdZWZxLyvdZxM1R1ZRi71MM5X7TpR3ATEd",
  "key6": "398AXEYtwS64GGwDX8N9Ls4AXvB3rWigqExP2McpzsmDViW7Z5EJAuvoMCWJ4eDr6ESpcV3vspb1BvKQwyw8poqM",
  "key7": "3equ8awtPpWdRi2v7jA3vNUG9v8Y1BwTy1gS9sNm9q7MQMu6UujXwJsZkvWn3NeXtzeCqG7xNxuNQqLK7MR2M9cB",
  "key8": "4P5boKnDyAKt9G6mmmTAjWBtCZS4jLby1gqon12fiBhccYVWDT1sa6tbbGapDapLRDbJTDapQgBFsXFMYwJJkBZh",
  "key9": "2n4d4JEAGimGahSQPnbAsKFDRvBsT9647mSuL7fuZ2wZmTvsFR8pBbrQvtogKXqRdePGRNZWMb9u47RK4mLtmZgQ",
  "key10": "2hRoAiBiT7WZ7J3em6B5BYuSzrR5r5Y1zy3eJSqMPUwtz33kmFM7VY4WdttX8xaQaDZTWvo3PYm76U2EbPh9Xojn",
  "key11": "5xnD4VffDrewuqvZVHPHs2yEX41AsTnxrrWYhwYGFxpbHsdWNzYCk514duFNEPYwQVqmxePuG4eH8inXHGAsdUmV",
  "key12": "2tPw365obqAHcTVQsnm6nLE934CixZxuy1n7vYTJ7Dd3UurW71sDB3mFTvWWWXoN7BQB7jE1vSRCp2jQ8S1aX4bw",
  "key13": "5dMVzTsUcAbBVUnGVsNWAugY2wKY8LmA4NTzjPT15a12B6AEJ1pyKAqiRJ4wPKhLdifLb9m7AA7aCUo2KdoKfeo2",
  "key14": "5uhQwjbL4gV91ERKMAmRdkgz7Hbb8ApgNwuRBLxPuB6uzTZ8chauqTzFb2kgpFiFHzPZzFqoTVjFrkxZbdA3BsCp",
  "key15": "3tR3ytv6ALxia1eUZ8pp9NPoqNjSGto3LMD2j2GeqPH3ByBZu79xR2BgLYQ8DYuLsJHfVEMKhLTsETCqC6cP8p7Z",
  "key16": "3q54krSdBrAtiyEgD2DCKQjMvzaJRCGB6Q8tqtSX4ZuCwMw2DJFwHZbWbgkxBooKfWuP4ughdFokEQaKuMWYEmJW",
  "key17": "43eAAt9zpYK3wKJ7Pf78ET6p6YwvXPEJGjmc3VXEHNZZyuhTdF74tYFBngnKYwDWCVAq4RJykH2tgvgJ3Z6Mpwbh",
  "key18": "MYe9CDacVs2SH6nguLM9MjmTPdFoztWRkeKLaW3KVRSk64czDp64aA68tEdgBpFkNaDFfnBhxydq86JYRBJcQuX",
  "key19": "2BuTtnNhybkaSSdNNtjm7y4GJ4LbBL7bV51tfeduM9dtqXz242JbjbeMPAQ3S5vkcyUuBatkZ1oTihziUkHjFj87",
  "key20": "5NVr8dTqXcEGqK9ryBW7QTCBFaHkZuosaFEMyenRe1kwJ2ngGyfonvbKFbRg5ZUQfbm1PgAUMaZc98oDUCZnbDsv",
  "key21": "3xTUGUoHQ12egwDYsjAPJZZyGvosUDV2DL1egLi8fc9VT1VQvDJXyLt2ek4tXkxAPL9pSnFJxzTPTUX7rA69wP4E",
  "key22": "4UZvqCWsPFRiFUFvj14BA28oY6rwkjVusz5ob4sWcPVe29VnDMjdfDwSkYS5qxvsrVUhygVgsqrJTedSXi3DM4wp",
  "key23": "EmtebSiPsNXMwhAtyjiuYTkPub1crJN8jbQuyZNCsMQ3Uj1CPKUqLbEivzF9XSQRvbFmXTGTn3Rz6yPKpk7CdRq",
  "key24": "5Nfh7uG2HCCidGc8D1jYGGXeciYNQjX21PaLfQPNj8V5gndgPePrS7QzcyWEuzB8p8J1w3oR6t8v92Xr5PkghGNq"
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
