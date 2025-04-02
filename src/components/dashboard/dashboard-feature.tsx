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
    "3zcoxiHv8dmBhr9UPk62HLRuCJ6dGazX6xNu3pMbkWqAiPDpNYwYEoT1kyd64YGX42XHYcR1kbfjaA8tU4fUdTLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eswdZxnB5AXiF68baXkxGGhuvNpZAajQ4NidXJfkTH9ZNFhRAXSKB3QgLkyX7so3viyqJBMDpQkGTm2CkM5JEzB",
  "key1": "42xrBcShyhPxiA4YuegevWJJ5pWTVaogyaFM7jvtRR1VYH7JM1RgcHxg5F3aFWCZkLUryT9h5uSeCDWrMAYT7dex",
  "key2": "2aP1BGoXXZNqZNx4oHyNkeiToDMiTvMCczbEUgkdPqKHegQVaTEEsrCb6cU8nvpC7pXzNCQGEoJveaxK9EdKcJsk",
  "key3": "3yYACkTb37yWiScdNT8SVaRkVsfiqMM5oUbRLAy4rcdDivjPYvZMyUKEKkgCD7jEwvnTao2Y7XERxdD3shFo1wbt",
  "key4": "3mE8AZpw8vFqEcwQ4zrYMqg7L2xWmCEtqA9PFXtGqW3fdyPyeZF1Fe7XMiapEMs2gVC2yzarPgJPN1crHyG1bW8B",
  "key5": "62poRPHV2zv4zWKEHRRjzo3SZF2thK8hZ7bkfWX6N4CZV7oML6SbdUo3h9wSpnaq6xK9SKbNjbD1qWJf7vzb2uWH",
  "key6": "4ZpWc8g77qqygDs2HVY2PxAJXuQP4nfyeewEsNavgzTk7gLjrrmd5CdiAXK1pCQeFjodZRpTD8c9waH1Ps1CQBLL",
  "key7": "TCyyUqvWEfAsCCfo9MGQqv9J4zN6cBC8jZcgtafWByYNyrEgbk8thRMxqMyT8gXe8LrAZWrrr9EdRbejdrrWakt",
  "key8": "4KRR9ND7pDFt1qkM7CheBnfXEZ4mfeJjZVmwE2C8xHniSFMvHE2hH7pZvrTbaKAEzzviZQUGNPLWqs9h4s7KXrRa",
  "key9": "28KLa9sB7jwR73jDCXuYnA79hyubsxbUs5uQTWZ3sw2AHBfPmSpLXcjpT94R7h44fKcS1WGrVFmNH8as6ptFg9SR",
  "key10": "5oNh8HoivY4BHbDPhAq8GvCAiFi2QgdvhGxAgHqXEfzKB519nzBMSravB1dA4z6kVNbFrYGohSJo1LQNzaxKsQWb",
  "key11": "ZXC1Zm2h7xEvVNscM3x3qwUYGGGjYznVmAX53UPMiEszqQEqnt9cov2ivAZFPJyuwJKCdbmS1ZV9UQ5uhARknp4",
  "key12": "23rXXEkvCgwi9hpHcXwyafd1csiBex3W66qFKEJp3y2heeXhGUFfSVNydzXcptR4xC7AHuZfAENMzPJoshq9qHyj",
  "key13": "5VUF3i4x47LJcJLQPTYGMWzYi3Sfvs6aVChSnZ3FjVR1UB1i4WorBEAKE4hmvpic5gLRHrnzNdmGvMt3iCwv34WG",
  "key14": "3AaYkeNnTLRLuq2bNMphFDskp7U8Y7tPJdXgsWgjFTzC4usihfGftcJFyDumGrKsPxSas4qXxDws6zzFzRNxBrQM",
  "key15": "42mK1oVMxED4SV8vF71HkK3swkvP8zjqMVukCcQN8MNYnAuv7FKJc9CEwCrvtdSxRRBf79GD8e2HAzyohVzSLJ7Z",
  "key16": "hxgH8DYETC7JbpMskteH6tPzXxJna8CV9f8ctbVHLtKMpihni1avqJ9JpWLfdF4TW2RXN3AruXm6wj5UinPWYL8",
  "key17": "2bU6wUu6EYgwFnoyzD7BkYbdYAuZNzN5xBesLejRrC3ocArAbgyEFptQ7JqtQsGQq63avT423SrDNzJJ5zLkGYmm",
  "key18": "4zW9Xwvp2CyXJz8tZyj7etLGKUZfVTrNdWF9dwi6Y9CydGxsk6NgLYf7vYrowjHs4bz1rZ4tzTT7m1mv8soZF43D",
  "key19": "2hZLtkaj1WoAKe4njaYeGpYpgmGo1bUYdvUv7eJxuEHH2DWEstgkBJPA9qKRmA4c4rPTFPXX56PYB4QXTKWFBiwz",
  "key20": "4y2kVMwtdnENctS3pu9xLGvbUn4DQEy7eiKsao32aXdiaWhoZb7af38oNhYGaMqa5vfoYj9gBcxG6MTSGvHoGt4C",
  "key21": "4nGJkKKd51cvmHJgwKw6P5ysJANCmh1bzwMfduGohJN9cofTuFHMVuM1y9QywQF6phDMpyHPsAaSaEp1mZKfknaw",
  "key22": "3LKStuTe52UQaDwJwLto8VNmAgbLrKhT2ena1F7D1RHAwJva2nttFZR1adqysSEXMQgbkazzyweMW8Mo3ScociJN",
  "key23": "4jXg6pe2PcPvzbSANjdbs8EiGuS87pR35bAhq2XvJSqBqmGtuXhEmLCd7wdayYhFp9X65i9b1wpUweMpAbr9hexg",
  "key24": "4XPeqntZWEdnMLzG76yGWo6RCWSLYemp3mBBUn6aoBFGZL5mWtF8QpHEZUUMyyPwmReiKtRJj21eLcba7mcJV3ke",
  "key25": "213NiBs24UKw9zxLdw7F9j6hoXiE53L2RhaKVgnZYFgqpyNGehJXDaesKLcKVFFp1dkztwKwudT4YKzyr1mQvwAS"
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
