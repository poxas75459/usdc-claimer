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
    "2BVcuytmyUJk4u2g1QoDePK58YARoVpnDaBZygCrofVQtRVgvEEcpoMYWAYkHJqyuWTYAJwzF9UdTTGKUH8qtSaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GV7mUFta8oxMzgUDCkB4UYmxqqvNYgiTWLcM51tqbJrmpSYGw9ZM6xoiJW7KDdTVc2a8gf2eGwJSe14wvcMx8KH",
  "key1": "ZPbGXrG5i8pksBRBadngdqhwVBdWsALGrjxPzS69RV6oiR8f471hyavKZE8KQ9v5LY1Aj9ZuUgZzSgMoBf1PTyE",
  "key2": "21qmcYYo2YrBhdLjNBHZ3D1USGgrfT9A9Q8wTTwUeQepzm49Py6LxwPmVxvtqogZu54DyJJvCELjJNgDYu1bRiuh",
  "key3": "4d5hrmEAa7krppD9LBrGzULB67JHA4EyLf4JyRatrup3dAeW21rEVfXgKQWi2b8iNvzS1QykxDjGqzok2Ea8xC7o",
  "key4": "3LtCLcnA2UmQYJjFssA56w9jrbY2ttDLXadV755g11ykVGNRsThNpo5QKdqf5GSPbSSUYoPgnEk3eLGE1qc4v8ZH",
  "key5": "563iemv3bgn3NouhTYwHZrQWY9PngWLnBv48n4v4F9SNbmq37zj3NYNwACzZwARPg6VGJ8DyRgJk6KryhwrGss2S",
  "key6": "2nb8UZtxBn2zGVdoYihtspxd9Z9Yezfdo5MjWjjx76U4kjDPBzksp9Tx8WU8BwMzX9v1zZ22YCwm9T91W2xmHS9c",
  "key7": "4tRMB4bbpXp5evbhEnswWL1Cpp86bin8TZP7SqPLAaK7TJUAhkF8wdbUhST5qaDZMaEuwcAvqvpHaghJvPW3KXUS",
  "key8": "3oV1rnuPWEfkMzYrWXoupXuMFsqsvVtryq8gsLN4xxys2ZUntWHxmK7nBNr42Rz63vqmwZ4GoLiQM4LdkfBWLeKR",
  "key9": "3NCTXcxgjgv61L2sen5gS3LpWFk58JNrL3SZ8BXAjaiXwGEBnHj2ahqgz6vsvQgi6LoCF1RVcubKuCjETLsaVSTn",
  "key10": "LKpp6csFi15qhgA6iZp597pb8ceRYhMFFcg5xEe9GNe6G8SSwxagB7DbVdhFajc34eTBuCGLAnWzcYx9wHtpFit",
  "key11": "yizZNvECsnZoiu193QxUuNKY85dTVkfVwG111niGzU4TVq8aUT3NW9r3gjvZGiwmfZbBAdJFrSxbs7MLPvjjgMj",
  "key12": "2cwhdXcCJHxGvykzkmUNkvHqcYctTFuwXAjxNFztnzss3HYr7554vgcCxVW8Gb9WE7DT5bt7zPZbTarEsyCzxspH",
  "key13": "3oKJVoM13XiwQ4r6J4FAE4MT991La6VFKBKUvCzA2aPfw5YcadPH7V9pLDmSV5HsurvSzRmwFpPcCujJ6jJ2EHMf",
  "key14": "NMrjqqeFV4e1DozYTSiusdAbT79fXrXuZGzBW1XfAv5Za35aPfHMcQBgP4URVrkQFDMGvtR6TXyAU7EGkDW7wyJ",
  "key15": "4K9KwVtoUm2pWbAm285vXMBCAKNnpH1iKWvnbVwz5ifsjv6378oso5jLbyjFQE5MJhdXPTBqWjAYojrtn11TQBKG",
  "key16": "p9qpJnM8R6uDucPdbdw9aceN35asbiAchRsfhBQsPSg7KUpCEfMVFQTvsMwZHGwn18ZTQCuufPoRLoquREpBmni",
  "key17": "cMeB49WjvZDM9FKaZKL8EKN113Z2AosBr81NdQ1zqRVcMQsS3mHbttKSDxXKk2rj2i7yju86nN6Xfxxkgzp1PjV",
  "key18": "3J1ZoE8L86pCnyVFgDkrXLygU2Fb2Ew6QGNvfiGJsMbueGPFw2SCKbgXU89MTFdUudqJTgBKftuDAXXr41zZRZfB",
  "key19": "26LTtkPGMGoJDeJ4KHQwcFdFmEp1oNpL2tZ6Qjqk4Fa8q7rSebq4JDaKDnJW6wh64Smg6VJynytDKYNoZw29qmrV",
  "key20": "d8qxtsP2LMgX4g84aWSR7JQy6qcgmR7zUfec4G5CHFvchjbbqN5wM8hZAMynBT6d3wAfeaGZdBdkZT7SRA5yd6c",
  "key21": "247G1uCaYqwW21kAFyU6LPJwaT8HnCq1vs3XubGFPCerWYX2za2AMQF2A5iKadrihkyp91SKavRjvtwGDfFSUhUW",
  "key22": "2Gb5UPDMDf4NadMtjNmDq5bnU5M2Xz5vgJrQSxqvBvtvGBNBLYshZuo1v6LfDA5mgKXTRcUAXSHdK4UGFvds8ERV",
  "key23": "xdLBqi3yP7XGXhUahWPwbrnGgdQey3k5GQ392o8VtuUdBiXipTFZupmYopLnvnQJhoFEGY2zo2ZN3SbRb4ttgC1",
  "key24": "8YdMHH5nhg2SD2sRvAuRpyuZkXhSFCo2XZQLz6z8YG5RWm8GNmoYuuiY785EzN9hHvd4JUTkevBQnfyjzsjiA2R",
  "key25": "3y3ivX9ogtjMZxA5kcciLBTVtn8eDz7ZkqxsyU6cVB1qV19MhtcR3YQcaBUhR6Jvuq679QvCyXE4DXBfMbU4F9WL"
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
