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
    "gkw3aoawJeDp2TxzDNucNhp3dDjGMhfv68w9Wq4yEV6ndNfRr5mn9XSRvpxxwNvX3wcJCxK1LSvzoq1Hw9F1Wwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53U5fqxFJzihNPMGndUgumBpZGCqQ1owqtz5bWtm7Mv3Hd5AkmbRFqLWK2hw4J5ih7P5v2Nq7ZZr5o4uV3q6r5nC",
  "key1": "41TDmCiiNjDFkD5gtGc9jS6kKBoNoRYPcWLLscd29FhhzeVxbB4YZKkS71HEGnWjA6dnp1SGt1x6TRGKk2B8mjJB",
  "key2": "65iqQNK4LLvAU3MbRYBsYHX5eR1hu3WzczyVpwUfot4QqxVBqspsNWPKE4Jx65ToQ8TB4qd1tkTiiesQpVsKYL5d",
  "key3": "2m2dpK12EymqQX9cp9YLvhRNdyeHawJW4jYbp9mLfx2C6v756rem3fJvpqiYzLCNHNX9LzEuKqLt3rtR1dQp3qTr",
  "key4": "59oskrk1Ta3PHELpmoJeAAQ444da87n4k9xYf4DrNQYUFKuXgMdyWbadg64vvuGAEePYkEHnNUWQQ4E2nwp4y1AJ",
  "key5": "4t86JC3eEkes434S5Sa6KXsGVgFwapq3rUbTTHjesqZ4wcFDmZHDfbov4LunuW3cqZ7SeMj2QjtbRRQxU3NeLFXu",
  "key6": "5RuE25LthVKBpmv6HMVj8eFx3mzJL679tHgzz7ESZnZK8ao1thTXS8JfoA2uXf8ni2XNStf12TgX7MMhUDj2Umni",
  "key7": "5mSVajcM3LAsYP9M9AJcbVHB6he18BBDXqms81BWC5c3MVS8FA9URM4TWpiPr7e4bJRGb9D9djdmtpkdcEUjCEDS",
  "key8": "75MZjbD785P3hidDYuAJT2A289Z8r95g2kJTdNv9jwnLw98cx1bA2CSsWrAaSYL3CQLDPia8Gy7e28H9g6NDUyM",
  "key9": "34ivSmxd9mcKWuxUPHWYBJUgkVWi2VySgmhgo1GU5fHmHapHWL2uD4ART6ct3MCTuhbtXz3ALBqQc4DyTErTVMqh",
  "key10": "3fzN7awHwUE56JcBiCw5VFuwBt4BHj1EWqdrnchxArBMBhnwjeP2taJ5Vg4TyAAWK8Qu31WSqQcDM1a8rnpULUv4",
  "key11": "5Z2mdHLJ1426X7EGU5vzVw3i9FbQC7DzXHsjJYF8umpsUpEse9oDKdNQG2vQiqdgdU1ZgB1MfdW2UVzGBUL983jg",
  "key12": "GJBvu9A5Et9V165QRgJT6bUNGYLbFgKGyAX1QBcN9psHChvX66BhSJEW3hvGXiioJnvGxY66k62v4twZD3f34m3",
  "key13": "38f6NnkmAiwNutwrHBVDGNxhdCDrLQVpNip3Br4uy5EGCL8VUSVH6USS5ou7v2UYkndBb1i6jALrCRPxmyf9i62h",
  "key14": "Zun5dSiv2RSSFFFzaZ7s6RV73k3TUk65FMd6qBEM74bkEqVUeFiGd4cDxW6DfxCCnRUxHcBYucErDwwybxYXRqp",
  "key15": "4KzTzQoagP7Jvg3J8Qp5MUaHF1zeUxnvJvg64YfXKEz7ffQB9w6dCE22BLGTHDjTPM6uYxTJNiRBTqrsjLSdGJXc",
  "key16": "4Zbu37Rox2zR788cm5qksBPe6UBqbJvNooHdB8eb8zou6GahjYoYSXq6md7jt1bjato841TYSX7L72UTGnXPFEjx",
  "key17": "2474om5meyP1mLLUuqxJPAvDabKQjhLRoezKbygtNPSYTSzPUQHdAgC185SAdDERNjsUU2dC8JKiSREoZVkSey9N",
  "key18": "5WWoL6sqFPSP5qsZVssdXj1uWFpnCbrekSHiybeA7KYBYtFcBtgceHukCqFNsjEyahuKCPJkaRhHerHZKsCSK715",
  "key19": "5TSKQDznG3WW9fzbw81pam6t3xMzvLCp5FRLxL22zKUtf66STrABbLdGNLkxoMZNR7Uq6h4KHGAk8kx84DyGaVaS",
  "key20": "VRnGLYqEKhWKAEbnutHt2VpKhFsencYk7kjTf6zHVc8fjDMJbfLwQ1tKRiSU5NotowPZQxm7yq3FLA52HEAmqte",
  "key21": "5XF6rpFJNAQmJvg7vvwq1H1fzsDn6pqKfcwwwMrQYQvdb2WakSksLenj7zyNvwwMhV1jnrzjxXjRZ95pm48M9Z2A",
  "key22": "52VTqPwfK5oAW76PeK6yD48W6Vqqk7S26Q52DhhDGQ9aMAUgtGfjV3AxQtjcuTrgD4cfBaPcvZuFNQkAVieJasbW",
  "key23": "DYCPxdzSETGwkXvD3SheMjj2Jkg356APzwZxfmi73jHHUiVGThQNNq3rFMo3wkiG1EL7vaeMPUTRDZ6zwLVL5K3",
  "key24": "2DLLRKMLXcntEKPWSEBZTdAFKPhaNtPxVeVAjEZ623RuvvhD1WHCZXbwuAm7rqfa29BXNDgdfAW7b7e44ojYKi5K"
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
