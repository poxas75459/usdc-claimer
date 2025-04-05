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
    "3R52eeoPdgx96HgcSZ4mGgsyYQEG99ks5GRP1wsmBfqySdfYEcb98yut1Fos1ZM6SW1fJSz1rucgWjvHCF3L6kAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KqpP8SxatfPxW9kWyqivzJNea6aaX5yoydE4rotqaZZ4o52q9SuJ8MwPXxnfwjof1eE3fYgJ3feZQn4m5GXucfv",
  "key1": "2UPFz3kWvvZnyQ7t1UUm8QdJhwZTJR67Sf6av1dyjtEXVXeuSEbVUinw2Aa9X5oSWzekWStFUFSk5362hCai9bo9",
  "key2": "42rfijEfK7PYTSDJziz7RxTB3kfwaJQri9oWiQgVHhc65E1vuVq4cey9H4ZWVodZ4Fj7iBTmcTFwmnwrMjgYrLNJ",
  "key3": "5vc2cjBm4LmVtN2MJYboZhbcpgJq5K9M5ggX8Fx7Yg9GBkt9QHBSRgNiJDfonpX2JJpo3xZnpVB6ncM5CoFE2A2v",
  "key4": "CvzMrLRBPgchQHABbM8nP1NnQkaQSYCLELtUqzjNWJNak3S61DaNKNfiDijTPNAvhUms6J3mMtpnSJNNa4xGAQv",
  "key5": "3qh3gSHVf9wx8LUz5K5LnAFj6gogtCGhV8STMDCWrTfxXz1Pm7T4hgsTgUNmSuDuWnKqLYF7HoyMphq5N3zZ9hb4",
  "key6": "5S5TRy6fYXUvC32wCuaNTwNQjVVDh28kqpGKSThQoaNjrot2XgKaYWGzQyD6AeZLZrSnNHzxZ5DLhdX47x2RGL8T",
  "key7": "3mBj5FxuFbeUFUHVQg3XBCqgAULXB1UVfETKLuskkG5TiLrN7NRfFAk5UHdbFJmGJvbAXykeqPp88iN1poKbbPB3",
  "key8": "4GVZNBcV8Ut27V3xVKSucAS7bVNVMDqdMNjqPX8LVSnGJa2ek7eSXvVg77FWew3x9FxMLvC7iDR8rrFa8n7hUh67",
  "key9": "RnUQRhB8NFrCGLHgKP8N545HUmogMNpuYA4fHtTWHnGjUyrhyKh8H8mWegUVwLMHCNiQGMYF6DpbrQoB2RgVRQu",
  "key10": "22NTQYoezHiz7s75U15tvZseMmSxsHocHaqTkwftEXQrrjQ4kXcKJPLAgxErQcUjWpPG6YvfokBJXa18FpXUozYb",
  "key11": "3EMJqfNsMC892NUnxdSV3AZctKAit9it71qZSuXX8ptVbM56i1DYW27XcA4T5N8B2SNxy4aLTjEitNukWqEdyQz9",
  "key12": "KAL4HEAFrbsh5Mn4m71dqW28CbP9Xm2ZNa1cTgmRURmpCmVjLd62NGeYjPCAopriUHEpYXNCw1oKb1dksHahJ5e",
  "key13": "3aiMgatt2xjUw9hG59ZgztN3ViwwneSWAWcDiNQgXW4f7YmYDj18buPDaGafrrzdCnsHBAR8HsnXdPFduUNo2HEZ",
  "key14": "7pG1sUKKmxTrykuUibVCkUMacdRScogDSnwLqrsPFG6H7BKcvmJQubp27AEtiWUoKnBRkbhJeGb5Zh94Mp2Kq6w",
  "key15": "5eim5bLpV19GdVLHnAfwPKjUWxh9bLhedL18drXT6V8NMENKZUZRC4zkhhhQ4TmN7XeYu354a4mp4LeYMdsjAU5L",
  "key16": "3za9Ltn4wG2rRWskQKpNAasSGWp4qK43P6BqznD5Dwgt3vXmvJu6eTChZpccHBiGsZ9HRVX37n9s5o4mYb5RHo37",
  "key17": "vF6KSszCDRRGCrjWPh7S9VLxcKr3YZDGFms4WqaSwgeHaBRKzowk7yXscP5wr43jNz7LCdQNWCzs3rVPwsdbVSq",
  "key18": "HWg5d5WkKHv2X4CWLUp4AxGA83hBMZd6YTVq21HRW3NYzqSHaNw5iQt4zCHnqiMy9gvaMByonZRWaZ8EnwWvgjo",
  "key19": "aSPDX1RGkU6WprLpi6UUsCbUUAkVtxm7jf3SVrEHAPu3MvbkFfDwFiskDf1bi4GuXKQnZHHE6Yqdb99KxFYc3T5",
  "key20": "a2nPvVz3MkzXzLcJpo3wVCmGnf91rXEJJJB81WFtFC3YAYv55fw4B1CK3QtY13fppiuU7ZaRLau3dq6Jvc4wZM8",
  "key21": "JuLGP9PHim6QnM36dVPhgy3tPRg9noynVYg6dsESB6TeTtPdnirnNiA3WGzPKuaZeZa7NjMvSWdc5dtGZjQUDCf",
  "key22": "KcUCvEywhe2Fq3jshkq5yCkgMbja49XH7bJ7nGMXJxBrc8ub4CvjCsnp1JbYCYBqDBtw6uZTnka1XGW1auemQnR",
  "key23": "3Ei2GXrsXWcUkuWnvYf1sZ8qTwYkyUgMTivjdPmtYVz5KWdbaViCeqNjYtuLh2BAcuANGBTw58jT4SmswEJdue6a",
  "key24": "4fYrbKzUDgEhAmitf23rRhvKsurxrXweqVFwnTKhZ3m5TzivW3d4TgJYnZi5R4zry5JVJH4eF6kAf7s7nkmeKm5c"
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
