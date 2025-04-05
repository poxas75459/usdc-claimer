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
    "2wHt5N5TtUqnoYHRxZ6iDtNfi3Ysk8Shgcg9GLW2om9i7JUYAjJzQd6GHnze3VcpCevLd85YcpGoYWYrrwBwHwpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MR1pLsU3WARm6pxaVmXrqd73SWz3KSoWbuD148eWv9S9Zrf1zX61TKQAQXbKCu3fR7V81cXJrd86aHfZdbWFCdx",
  "key1": "4mKEvN8fsaCtmjEWebXZxU4PrmFtQWAZVEkStZJQesgB4y5TzEVQfHjX1Qm2CJyXAcD3Ex1pPvFFLMxGmfmSMakk",
  "key2": "2gMdpYRGLRdk5s1B5RBMLVTtvMWmtmLQcR8UFRgZwyiY56ken6ySnvLpPPssxsmtNkpmja4UJVoY9TdGzUj8MtrZ",
  "key3": "4R3vsTrqxxLkQyg3RqfRtNPBwN3RSLEhez6Kd6xLVd4fr65wk3CLiYF57dE7RMnijePLVoqRrPo3TCoqf1LHCVV",
  "key4": "ntob4SW4gG6WjTfRxvQs35vpxbWmafgFTKRMehPudLd9JqtBMLZqQpFg6ENoeg8894X4jPvzV66jB82MKjj8JBP",
  "key5": "2LB8RGuNgUnh2X1iDk4wydNRBxi7ZHPZtAQteTRU7Bzyq25pbpTpySkjxxSgBQqGdaDHisLf63WpYaKyZLpfCfk8",
  "key6": "2Af8m9Vgdd4ra7dLDmrre2ejVZbgM7BghEURR6e6xR6i5nrTW6AAnANqfUBCdije2EgVUQMHQhxmKgL74tBpK7bY",
  "key7": "5ApnikSwGSEbw4X4ovt5AZ7vj5trPM6F2yGYWqWBHhnSswsQz1Z3DcGdhnmfXHFr2kWY6x8nFJr7ZeQdcokMJ3J",
  "key8": "3b9xU9yq5CqveJJLcK4XFdgDHD1ZfQDmfYf5CHh6cEfW3x3ES7bLxDWhiVmy3X4pBLAQn6y8H256dNyfdGHCxfxN",
  "key9": "3jm8PFpiTBCHwsM7vznTV21R7LaxXM2UoyLZS5naDM8TFG5TtoSAABzLN3VkVz6GhuyfEigw2PtmD5nmNgjJ3sGG",
  "key10": "2V7tcdupSUVbHiPJmgZBabZTDZ9VBQ7StHosz62knWCxjkFt3aa5XimLL2yMFKV1MYbsdo7u7BXhpGGkjh1t2xML",
  "key11": "3EQUdpwr4WetQU7yh4mUQWBBn4FEnNBPTp6qUXzphZD1VeonEc2vrkoKkt944WxX3Dgz24w6dFUqj5TxThmL4shi",
  "key12": "MuG6RMpGQCGVWpgZVkcNWd7NUh7QQcpaaMGniJJpbz4oUUD2DcvifxPofviqxS3phMkYTMEnqWTqLhYnXFXQ1Ci",
  "key13": "3CdLc7C9bhbXPdSHiTNzy6u7uac36cvibqFwpR5B7QbWBXy3hFRZTag4TEPN2JC1t9YtzE7KSgm3QGtHX4ATabKn",
  "key14": "3ZgYCc6CDcyFX2w9nJb1p4xCRCPtCWpdRafrbAdVjyrqDsKmkHV8qFdE3d7rukd2mLp3ZCTHyQaSdGnBKqR2AcNn",
  "key15": "2e6WSGDxog31MsktWixwAsTiWPm3XVpkqN2KjnZYjTMoTjvDPqjU3cHAApknU44fVGzd9Uy7W6hbr6aHSALatqZn",
  "key16": "4aGvZPnghM5f6wHQBidSno4jDciG9Wgc3Ssy6tihvYxkgMtdZSx57GvTr9A3uH8USbm88mQUZGKyn8qUQTxwzdcT",
  "key17": "3VKr8FYgixSkWhCsTEtvYn31hAEeFpfkDy4shVUfB1xwZcssczjf1tLNotHYa1e6gpJxLYMVB1aeiuUtAggAhrMt",
  "key18": "29gbwdhsVadSEqkxo41rckuWX1ZASvDfracU9aQPaKnQqe5x3kjgcqs9KqYWjp3Dx1v3oNWbyGa1ziXHYCbFgKds",
  "key19": "2rrqE88ijorsoszQdp3u1g3bZyFNR1SohU4frevi7jWBawFvHkjwmJ8E6KBmDhg4vfvFrMoYszT8CV8WJegYTLdG",
  "key20": "4YY89xWHZJNLuDJQzq1N9QcDmP9DMG6HqoTMGR6fRf6ffiv7QnycsgoXKufjY6Lhpwz2UjeHAwnCPEzGdWDdvf7n",
  "key21": "Qzy3r4i6E5WhpZQNoXxDJYQxHf7u2fsVM7fqm1xQnrc3HvcNr3V3qtUcZAyospPhs4qAqkfSCPpZnzAKvVE7PKY",
  "key22": "5AdVKk7SygjnxeNDcs753uPPDxNi3tQyFsCQx52r1Cq79hmQ8D1wm3Qm8vQhB4PQATzFVVCKH6ktwfmyyGLybnBN",
  "key23": "3GHgPH452SVRamChfnRXNszUvimKYQSP1xAabZHePAVoQEWdSZtVQ4RnBk5d6wv7xvGncRT1WqpFF8FFZTHXZ2wp",
  "key24": "2SbG9MPqFcV8HN9mQeqXpaRBGsA6LDDQtZrHuoGhEtdQMWdJPZRqwcWh5FFKprhy2v61yECnRCoYiYbeKV9Lww51",
  "key25": "3kP57iEBe3WjbAENPGfYVHWzUe2gNiDd3jiDZ2mw3VsZxseP7tHJapeu9J3LVUf8oytuS3PFWq4DnRVAjKGNKc5S",
  "key26": "4zuwR5c6xi5Kqv8skoZS9TWWTSCPWacfFUwpheWip8e7FcCqtVx7TWMDHXugcXjgt5DNLYiihfYrYKmm3DQ4R6vo",
  "key27": "37aELW7bhw4x7zs8N7kLkG4RpLFyZUuN6rSYgCE7DDETGbAaq2SgwFnAJ2yKg6kH9dQyixjdEGaNDinZihp2UDaN",
  "key28": "3Rg9NDVDmPB8y47baGnUet9U2t1YjB6CPmFQZNmxz2LijS59Mw7W4gYte5TE3TGAf6HagxNCZn2vxLxyHvTh8ZdV",
  "key29": "5Jbsh5xp3V5YGDAnXSRU2sgKQ555kHr5waJV8gniV3ufYYhLtuKkwRFdowQCsLrr1kyPapSExhKpe5ZXbnuKob9i",
  "key30": "2Bg7XoGyx6YcAauUrZfEG1pkUevpfcotKuTw5sdWnaZoeWnou4VoLJAu7UhUi6hPHyfVz2fj2jNkWTTUry7eBqYb"
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
