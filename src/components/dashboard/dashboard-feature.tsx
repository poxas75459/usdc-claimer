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
    "2D88uz9qBRYeqhe6HAANEN3TbqLkvryfaLoBWwYsMaf46u64rDU8FVoSXspPCp6gbwCNtcViaY5NxjmmzF3nc6bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GFrF1J1zQTSYZaqpuHrxivzaqL4Q2GAyL8BZnS4kBva14stbeacj9b9vYoe1UFfXsEorYJ9C9nSNEcoa2HDNrh",
  "key1": "4BBV29kVJvKrQYg1mbs8mo6Lf9GgipP2ALVTdzR5JGvQ5ZouZ4t3NBbTe7wBtvuZbGPS38B1VSmkXcSJGoh9dp2Q",
  "key2": "3hviUyTpLyMYCWeJF7TpFUBqosRjLgabJwo7UBwFzVnVgUGy6gmQtASw7A7Jt9aoc3S3cxKj7sYk4p9GcXrsSoiu",
  "key3": "9uyVddQPQBwxgFhFecLNbnaDe8Q9UjPNWzuxodsaKBeazm5mazXRSrRJn9Vfe2dBwjiCC1atgDRwi9u8wC7YhR6",
  "key4": "2NowqfSDgb4cEXu8RGwRuK1GyvmFREpSYJDytCv6ricHWRaRyo1uQ73R8cJLnrRJSoaT3aY4uk7oYE7mTjpvxeFk",
  "key5": "2mxGTTUB4HrQKoUetBpepo1orqp5e2gZnW1gJWYghrkwHiJS5V1mp1izq9nYyHSP8tTgTFGvKpmvJ13MQNByDQZF",
  "key6": "48YRbHMyoPyFJ6PD1VBuHWXy7M268AemdocjG6uBKxTZ2x1yZLye3T99roLePFQmVV3hJ7FbwDe5pKwKdvxccy5h",
  "key7": "4kXFpd1EDov3k47YGBrEzeXn2snPu6p51C4YLumdjEA26ebjgbPfYVGgxdLkeGPU4aakKAZn295iuN7RFVNE3BhC",
  "key8": "5dGVodq3CTnPy8fd5JUNsrqj3ApinQ9QQRaAubj1uJ7NGW8NXd9LYtVidHL3JeWwxnZJBwTgb7rqH11ESPf3dpmB",
  "key9": "Rwr3hawpxWv152NVTQaYmtov9KKBTWCfkjBbSrDmBw3y1tG8SboyXPhtxmkYDriFFknrUJdzVwqwx7SJLMEzzFo",
  "key10": "5sYpWV9z3YLSVGYzD9xUpxD3aQxJPgSXH8LHdnuJhuHhwKdA5QV1x4u1sSNsGpbAJNLMigUd71UjcMtQPX1EMNpW",
  "key11": "2pWVLT1TjjvfcrU81TRCrjoCVX9Ndz8AwsB7XT7CKGCdbpsh7mSQXfZGJ74vytRPFP7azvndhBSRq13DYnL4omBi",
  "key12": "3Y3WRAkwF7GpEJQYVbr9JJitiF5vfBAgq76CePqS3tYcT4THbbv4EyDcGA3a2hdQNWeNK2VqDEFkCSpiud7hKrF1",
  "key13": "5VcQqWcDnh26aG34mzYP536gtu39HUoye8ZceTtja35xsk7GEekLnnyR47mCBWyrxAQ7XLZehuGfE8gT5VfetYiM",
  "key14": "2SEAWsxqd1YzLX9oBT8A8mYZCJCZQnHZoxSwP4gHvKc39zGywyNDHcBvxQ5sbTYWakp4XTihJe86MCfAHhpmB9zb",
  "key15": "3vfmxM5webqGrUaTEGWgTU1NrErH738S459ZZAdojx6uo5hNU7JjvZ5YuSpsaVucA5BPNpSsMhFQEx5fUVnHgCc8",
  "key16": "2J2DvJDv2TLe3UsxeaFAZMmTrknszJEq3Jhuk3M9iotUuaYnUG6SGEkQbPv9pAFbgeJgQkJb5NPJ2hzVeT8aKEJ7",
  "key17": "2VnCVmQtDiVYzzQKE5V76mgcqtLUHLHcwojbVhfw8QVHXLR6KeCadMmVAcH3Vesese94sBCjkLBkdvQMbM2XKmUG",
  "key18": "41ar459d9u1ttWt9ATjtFQruRC5ot2mamkGhERDu7i9M5Mg3UYfzdojaNHei6UxnzEJBgDiUaLzMTyaqW7TpQ4g6",
  "key19": "3Lsf3XSVcQAb7bvD8GpZi2Xr5BkZtqteQfcPWDP7Q6RErnu52UiG22RDyrXXHHAhWNZpeNatLt3sdHWXo8ZbUgkb",
  "key20": "4NeH9uDJTh8P8W9rp2jBBKPAcjkJ43rkaUkF7PAywqqoFRWEKkURFqGrLHNJVRNqXHwo5Rz4HtyrpX9UpFR8anXe",
  "key21": "MkH1wGX4BT7iZ9BBiCa9L1L7iPf7DiEbfpRASudDM8yYiMfQh7vDTVdQEMKn8jvGzMk2kpzcR88tHcT7vY6zM1f",
  "key22": "gvvrDeExuhqSDEuob2rWhjo5yPP9nZm5iYNNwqpZiZJFYmyn3DAokJyD6WkCjkppEpJ9HuvDMD3urUwWnWhScgc",
  "key23": "64r63BhSwDcLwNkSikTpRaPkkNeCthXrQCWNA3CY5PsFJSgza5btZTaL6gSAxa4Bm98tTjfPiLqHndZ6tKxBysF7",
  "key24": "3qKK96tFxnEKYErRjewPiVpHHhZvuHTjaNmMhwxqD4tdouy2Lg5BMKPciJ1ZfdPuZKTGAY21QBUBfDuVew3ddeYp",
  "key25": "5T885ddfxhW6RwLE7551Qx6VQYx5yEi3ABb1FLbsYCxSvMgNg5DHetMYuA3G9AppCRba5E8CkigqAKXdJvG7wWft",
  "key26": "5Dj66JccHysjpVwQUk5LG6Sn5HSWPUiZmxXNQW7XQf5sAUDXZ86v5Srfw15zxptaXJgsx74vTukewZjAcsMXT31Y"
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
