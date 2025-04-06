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
    "oro8N316aGA4bNhCFHs4zAydbvCRm7gCQ1myQvNcd3VTbvQ9XTWzDK548fdtQBykgFbmBLgGU31ex5kieiCX8Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41z3DBVQsJmPFBPJn2gx4LJYmiMe3rrAH8qDn3s1x5qgCcvjQQcD2x8JcWffyDedXohFQptpnkXkSD3DE3LaLTKH",
  "key1": "3ptvMTzYmdutEhKn4YwAeBoUxsdJ9vd6UkQ9D4PQoBLv56xYSBpdwn9w21yHifnNsf6MHd36vNNGjuTzL6KXBsp4",
  "key2": "5ms1yfYEtbwymSKbZL4NeL9xDvZed8Z9pqxmv4DUoYxgwtP18YbuMLxvu5MH47PxhJAfbqmBdu5mNevLntZnzshk",
  "key3": "4ukhcmYyYkkJZjeKVYj3jcZe8RokpubckzfgNuZhMkJ7qdUHqNQaam8HNmuV1mbwZMRN9AmTs8Ze4FCwUxsVoUV2",
  "key4": "2KrRSsTBJ8j4iKcgT1TgJTrUKM2sQ398i177Rq2CWsy1dxJn8bqyt5V1FfXSjkvivHd921STMhYgicpqJTG73eWX",
  "key5": "3vuoMGpmSPP1LLxibVWLBeZm2VibBE33EnDmMrHsjfvLLL197UKYFUfmdpAvhFoqzx7Zty5tw5rVuLYGjVfx1HG8",
  "key6": "4AeCDB1Hz7Eh9aCikauSbWezeW6AQhjiAhaKQ6PaEagESLuDRuUb5DA8uabdaduWUo3yEo2MEzFfZ2WJAbvNqt9E",
  "key7": "5758LXcxDvzowRBTU2oEAajj9zLK4uzJwtYSvHNo9r9yusphXr9391G8rG9GpVb5JKchSg7hahZEJhNouJhjhFX7",
  "key8": "5vk8bsfom7GLLbM4PuPvUZ3Y4x3Y59WAxswSRyMgQtYHzWeAvmEji8MjmRiF8cnw8XXEi7gsd9ZLY57zF51morHc",
  "key9": "41vbkRCBjy3dY5wUDGQNPSzwttBW2W2wzRpoX9Vz6gWjcQvGratXZ3PZ4MC19hNeakoyhx7nExgJpQEuLMZ37YpE",
  "key10": "5FpTvH6tEykAR1qhESf12vLd1rxqcSSmy1NP78qBwhygM9YDEp6zmDaScc2RstjeePo579K8wu57taHxLtjF886K",
  "key11": "JhzVxNAfUEX6XLC8D96WusH2EiaLgsPx1YJQ7XZMiPdC9bg6zvewzgaSJDGzJHF9yD7XRfvySaYTDK9QyoSnwxz",
  "key12": "HTXv8qxRbS8S67cCVe2V6uEfUn74Hgmd1BhpYK9vLyGPU5h8UrUkbHaiNaCXJWXiHgJCVyY42APYVhP7gLZHiJN",
  "key13": "3MyjteRUjHVHtXAMiVkR1GvMATLmAzUqyRHAxubRagQLeE6af53U3miSFFoHvn4mKiTyNVxhUaY8TA25ZH4uYvcR",
  "key14": "4LGFRWWCLjxQwD2hvSH7J4yYL2StaZkyAUHtrBS1mJdGkG9ydWhHCYmEGpjsUEaVFbaXJ44QYvij3xiqVjTfyYV2",
  "key15": "4QHdLDCfGX4bFSisfTyfShXUqF9Uwqnb1qagafaaXfAyMAizLLQLyEw2hYNkrecf2NdpAiVykT3rpv9c3cu55WF6",
  "key16": "3ZkWa4M9FwZDwCMvgb9Wy91PmUkE2f248CXQ5fTNTjbh5x94Q89cKXmRytdwWs5GyGQ8vm2F93ExyLeX62uornxN",
  "key17": "3b4E4z2TtTQoHUN22FkDQLCPNi6g52zXbMsFkujpfwzXXrEHCNtHqV4SnaE3Ro8HvwfsrP1yEkow9NyjDEqPh8T6",
  "key18": "3Fge2j1peGEvdihWd5x4JTybnj78QLWYoATTVU6W7gG1mDsFQ3oKbiYhyVjg6EqchFvoERpZdxHtKJRTvGE36uWx",
  "key19": "3NSnXruP4QrHahBnxEKHgEYqng3ZEx2GEqB8HjGMXaV76PMFcrSQHrAq3ADrWFdhPK178URS2oiDXz61bePLpqbk",
  "key20": "2yZHZfHaNFnJV1RLdctCz3DaoaSHBRF3gYPeusR2hqGjeT3z84AjUkTBbrYm9Peu2X5nGfk86fmEhPv37HSuZdEg",
  "key21": "44e47jyNRnPSAmrBxp16npU17Lic1Zu1uYWnoJZD58mjWXHwy4d8ozdgmWJJdfjq6sCpp7s7PErd5fdgQrhyuUZs",
  "key22": "44YQyYVrXPPPh35pBFDUQLnwBgYxNSNaZyqn4Fw7s9FYqojWGrTWhRLyNfq1Rwx9UqDpxvDPWfM7nTZ2xYkMrCiy",
  "key23": "5kmuKtFHD5bod8nwjGrjzx4x6KwujP4WAi43ycYipaduRaNtDbJ2JDm5Y14QiZPpTeH4NPYvxgaHrNrofg7aDKpC",
  "key24": "67h5jdnjiXLgRSwpw8A6JjM3ZaXPXhS1SptqfZinK2iBtUdKyGkKQP7NJqtDpw67c7czaGBs6AnwjGYxmuXxLEQa",
  "key25": "2YiVmfh2zjkrSHvwxdaL1JNCnh62jAzN4CfB4xmDqBYqFXitLKsqiBgyS76GpbatDw1CvcpQ92nohPVYV9KSqBTy",
  "key26": "4vu82zcEUvNBc2UXrro8cCNZdAsdmnZb22osvdULKy2rwwJnhA7MQQTnSsm2HwKb1x1nqyq3n1xBMGmTVPWz3B9B",
  "key27": "2B9SeGyaP5zaF2aEi7tULMWjC8xu5BHLjhqBATK7cfDfUoDs3xnTRnLtdzC4P2EvELKAonaeZ1Xwu8eDywn8Hosa",
  "key28": "55MUQbWtqGWpj7R5jfq2h1JCfqE8Xdi3hYnbGx8yQwDKQU9NyzFRVoAvge3aTPynG76YpDZg1xr9zS4EWaQoLhdn",
  "key29": "FugN8Mu9czbXmsTUCcYjJ8FJCRwzRHZqyvEAqEFop5J1Wh8Q9VF5jNXvEXX113S3y1TFjNfpNwauCBhKwTYjtxr",
  "key30": "32FKWciuqT6o72pdKY9sGSkBcFydsv6Va71dAkmcvSevSUCxqtsyj7LSQYTsq888DBS7VyBCKAi3SwBQX3KBFB7p",
  "key31": "rPePKQCwkeisWEUcEGdnebSbxJGTKDzp9dUcybVC32uVkUMevjNnXQnD3bzGbH9dHYjuAYuhpvrokqy1wirvMc2",
  "key32": "4UqY7tADVjk7Co81ZCdiL6MYR6rMJeBVSJVent8knHGmS5qkpXQV1sTv6wEqq4wSnJVD7tMJG4965L3j1GfugYNA"
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
