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
    "239266Lf3kPkFyD8a7rWmiSMKSD2hjAmJ1y1t4cxaY5iqm9P2syaFF2KQwmTgNojCETDA6VXEJ5E2hXQAzf5SrH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246A6nnp3sbJMMvrioCWTy5kPNi4DhRXjMv3c9BeW9Jp3A3hNkvqedW6A9PURPLS6qYdKBjQ47AixrMNxNd7K5z5",
  "key1": "4jZMFQfFiVYGX2X4GcBo75h4mXJJTpqtAp5yiuffdJoQP7SFA95NsWaTPyzuJ9rbsD3SAgqggrTtQx6sxmZ33Pot",
  "key2": "5NgwsKhsL4ufHzu54svaB6ovAudqc8E51qo4MJx4p6ehbSNp7qt3ZRVuTFZN5ACnz3YzFqZoVuuETL4hRKicfgey",
  "key3": "4sBMosZzyzVG2bBV9UeHVBq4VbPFz5mZYg4Z32KzPuJQ1g9zui4CCv7GPPNtYdk4TzPpDqoQUd79VH8jUyhHp9xb",
  "key4": "2RCt2FuApfX2TAZDqznY5KX1u8j1fgjgQPmTvLNNcuxcrG7Gxf9jR7dphbmSw84fAWHAAvWAv38zU9tTLjjNG1pT",
  "key5": "4xCa5Ycn7KL3tCtYfiXRY2htnLx2Y14cpqxhn73yHitbBMBy2X7Me2jVXR9Xj1jJdVKcrrkdu62xYWZFBNHipRbJ",
  "key6": "5rfzBG2NYx5LGLFeGYMwoGeMvEpefPrtsVPs7VJ9w1CqQrUTu1H32MUDnRj3f2SrZvvyw86b4qHbYxKt3F5SwW9u",
  "key7": "38b2mtrWR4HYqHYAVyQaH8jUj8NhUNpq8uDftoYPR4mgt6cgEGXDWGEE7hNmB5YhtXTWGUXfsmjMaMGTeH5SKNwp",
  "key8": "3YZspEtbKinZJPaNtwz4t4VhoqyQK5fBTC5HxKCQzg6ZxPpQUMxdnNJhNJrecURFfpCeyCEqyJoH14gLbU4qnGuX",
  "key9": "46KZap9MLKgWRwwXdXy6yKnAKQZk1nv6WUuRmVigNtEVwW81a7vXrU3kVMEZj22dxcaqFMYvAY16EtxnRggqLK29",
  "key10": "8mHWpyMvjA6vLsgRZ16JtYHTy1Fbtzd7vSifQinzDqCisqZDhU7cnSYdKmS1QT4G9KsWAx3BZX3nzJa9oNvyymD",
  "key11": "4vegCSbVzRZ2Tq6RGEaQ7Y3C4uV8fYQGMSGhMKE9aZDKkcZnMVFQucCbRWbHjkQQnoZYg3jn7YmnNH8gm3pepMJK",
  "key12": "4Z9vQrHB9eQu2PvQydFA6TAWn2ffHntawDCsFAR4nhNxkb79e4zshNKE2y4bzdDi6Tp7DHAtKkDo5u57PX8M8AE7",
  "key13": "2v67kenYonMoSCQpNumYLcEHSQNFaDwHq31kHvcetThHbCjZMPPwva1nwffcbf5jequnetKpVkgxRVp28Ao4KJbL",
  "key14": "14z9tbtpDHmm5LFGBhp9dCZ1LLNWpjjJpLooPdu328ax3vJgfdomc8UNBMVHnsh9Uc1rxth3FE95DXemqUttwwB",
  "key15": "4HAM6spm52fxsFUGXhGTx7xtmnuErpp53aWNhU1PEWTkyEqeLa4k6QddSRsbK8keDrLo6dg5j1VfLN9bNf2tY5fq",
  "key16": "4QVasFVop9UqKtEXgG5VfVbr1FStzcVvm7Z18TpHGgpihBfWZtEcaCbH3AXzg7w7U8h2KrsgGjgSQCawyVztaif5",
  "key17": "53T3hVXhZkuJDKKznxSAdBpkP74LA9C3XGicqwJqrGojYgQFcMcNrhopM3ygDzptBToTFp7ocHGwLYKnimz7R4ah",
  "key18": "4RqdwWW1SBc1yDJr4jUaEmmmH8JVqweR5UhE2sPtVpVQyZ6H1RUZSqtSN3t1aqEdvAVNPa3GNy4ieoU5ChPk8brX",
  "key19": "555PGKdxTLVvs9wNadqPivTsZx8oim5Xfs6YsLutb9dgPEk1YNjyz6qVkBRHgFnHCBGCov5g8GzMGrYe7KnT5YMs",
  "key20": "3AVujwAKHaXmhuAGjhW5Ef2P2L54MvRkTZqJapcEX4zAvEySfT4XZck4AoRPH6f8PRyjuBGuyZJhzo9YzKDUkDa9",
  "key21": "Pu3JttfR4CreUxDhT1M98cvvSSqBh46kcxoMZwfdnKt36F7u4tVnqPMEVbQQfHkD3KrTZRCMHJHoPYhMwYVCNEC",
  "key22": "4W4uVF75cgEnnyoJ92ryDXWWMe5mC2y7EKXafsVs9a7bHrarh1fxT4CKR7Jp6rxPRKPsx9pYP6D99BW3hfbqYiHw",
  "key23": "4dvyMExwhS8G6cyriskDEEgcFLm1ycR3WKdv2Jar1MBVADFcKJp9eFCVYiLecizMaEYGJ7Dj2VkrxDBZruB6xjUj",
  "key24": "2wXvD3AbZnFWnNhDkcR3wh59NCpK7NcBnoXvknUgN94DDLTqS1MgzD7HZJvjguNtZ9huJmQj8veQSK6T76p1UDzE",
  "key25": "2Nh1QgVL11J1p8FZ93SWnqUUcijcWo4A6guD1N1xS3VaeF6QFopitJF9emnh5ng77GnWkA9tCi6i1jLdEVWtf28j",
  "key26": "4bLFUetyLJTjwb3WRXAVEzww6No2isE7CZ8og9XgDUybv2sDJqsuKXRfT7VR5A1L3vChJMCtTdhgks5RwN1dsLT6"
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
