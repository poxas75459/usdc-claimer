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
    "5ixvrezvKWdkfTrXAguHjVqduNccYsehSXhiZDgAWuTwMmjqvaXWBXbn3a7g261zjKgCqexBUAmgAPvQk7KDuvPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3u3ggEeaDH32V4YAynCuTBpqPboo75z3bs52nJYgXWjsmZVy25uHNB7fPeDgQpz8hg83ocdyMh16NUp512ecFX",
  "key1": "2TQ1hLo5eFUvex1coA6KcKV8rs86tv8skhFTt3VYBnLCMs3S1YAQiMbK2zE5rSWLhsETAw5kCuhkzREHtAer9Beu",
  "key2": "4YLfDqLdm7z5EMb3haNWRboAGhDHBpkNYHAKWchiUxwAgvQ3Wzy8iTayhndTGzHoYepLiva3XcZMLQ5S1XpPL185",
  "key3": "5speaaiDFUrmtDz5Dfs9oTre6aJj7wVuStPaB6sudJDdXFPNxjYwMHnKLAvhF3R2tq21h4PFcyw8KBHtTMXrThcg",
  "key4": "2LwURpwLsLhomQ2ApQb7vGJmk5XDXwcLB3DFoiD4ceMdfS69UMnEgihSYkaHn4FaDPTRDPsNGyMGp8JrtioNTGuz",
  "key5": "3tai7RemHZ19aseXZsPKRkEgn4nDCwhGnnciEj8jksnU3xVkAkTgkW2fB478t334ecArauFcPgzexF9K2G53oJjT",
  "key6": "27YNAUz2zePm69CcyBjrML7MJCZ4MSTYxT6FdzjezbdXridQWHFDYT3VWos1hd1j3qBxdTkNGvDf6i3szEuF6ERK",
  "key7": "3rgW7tjvwGCQ6kje1dD3b2tNFd1hg2EEjumQnYujcF7JpXFoDFJBLpL8C8GQVk72eh59rYyqTyy7hGVXcNn1z1wU",
  "key8": "4zNTnfQfxGgrEGRZzy3UzFyYPzw78d8qmgwy4bzeVMbwZYGQp1q2UtSHqxqdPwN68wCaiBdHNqdELqSipGsgwxCo",
  "key9": "4ByBrCx8irtdGtzQ5JbbQq1s4rn9j2aaFymNcwHwgTrjZFQcFCW7bisbUBAecvcpQCRSewmBK4StntnzEyc7vw3k",
  "key10": "S38YWHC6dvBHvk2LzXLJudDf928sAwVnh7ekWSchhQFZojAdY5SqqbQCSxahqAFubVpvJyJLWE2Zwd7S8ypbjto",
  "key11": "26NrWHRq7BAtB4R1jcU165kMZYRXPS2kT3oACaevgKJnzsRcTCjge6SfobFNtRFeHkV5p4oN9XP97tUBaet9n1MH",
  "key12": "4j7W6DgHtcrJNEQfsTasB8za9DQttYogSxMoXC6DWDuhmKWuD2WdqRghyESBJ7StkHUg3BPj4ype9MtNnuBSggGe",
  "key13": "4ov1E5dw2954qJGmiyCFPBqzMEJVyCCb7BaE5ys8CFUCd7zQyJJpzsPmKrc6XSuiCHSor9584GjMSzDZzosea7Cr",
  "key14": "3Lb5wGVGwavx9Nzr5eqr3g1jeFXXcbT5WMZHc9RQR6cv1NE9APNoasDDbPp8mQpSTQ9GJLz8c1Z4wuN37mj7sMyG",
  "key15": "DMkC9FuYTJyfxN5G3Z2pCybAtXWFdo8NoLSCnsG3csDwqM8rgNTWCSrGFNJZr8QqYrDmg5GnBasMZ82he1foKbF",
  "key16": "24m1sS5rbz7Df9GCpvSWEVxuA7zoXVYA43bS3qYVVpZxMrRFva9HZLBFRoFZ9NBSAFSkxGbyLYZ92qUVU2zBVehf",
  "key17": "yx5FJMb6uBTndXJp1JZ83pmv3kcqxaiktFFhzkgwpBhFJVXyzME4FM7sYcZRU74cdNFfm66dFj5m8Zrj4bo753V",
  "key18": "2Xi9mPNPB8UtpG2VDQ9tm4dkDyadJysdno6j1kaubfQeHMLJsM5XsesKGLB52oL2iKoDZYrcr5XJm64zsENoWrne",
  "key19": "2wbNBVKVjnjnEXdMiW9bPteS6Fassxr8gnKEUJrL1uHgpRVs9zW2oDt333oeRsZXJ4ZEGBZhBxdRitEmNkgaVD5U",
  "key20": "54iRqqnJiqhyXSJG7ZkRFZbaw1KBqdM1cfq9KX88WhQ6VgfbgeEsowGqphE9uHeD3zonwne8WJpXVdRvcvHaqiPp",
  "key21": "eC6Z2pY8m145PN8zLJDUZSvF5oeLkWFaQVad7etaxp5XVg2fwe5kUV1YAQqrw6XTfGYQBuhfDh7FVi6SSo9pNrS",
  "key22": "5JnBwmDHputU3kWMG179FkeB9c9wKtfTEHguSkKfFmKtWNyVrPaewDg8kNg27VdDmxQmzNgsNMxZaFtojekA2Zg3",
  "key23": "27zo7kGriTnwLWg1fWjAidudwkaykMJRf8g8R7oTzouwZcwydKrnSJhHj3qdNYYKcm1y5nYqbKv2Z5R8kfiUV1jG",
  "key24": "5W6CzzC3RommNE1SYGTqYb7XhsGupohPDfjEo92d5zKCaNPVczYucTXX3sE9DyNGbUYPoTp1sHSqZDyCWUdRV21d",
  "key25": "4Cy7Ba2CpSKff5Fjq2EJa5swsbTTbWg59mjDLE7iiQbnFYUtCQ7pRdkhUrHwdG6ahNkr2DypW3XnJeKGM2LKYk3E",
  "key26": "4H64GPUuehG36uCGJUXb2HtZBdW7rZc4759xiCy8SXo66V3AZaedMawKU8voP7fdGXfH6oSfxAjA8M6uaPgvH7MJ",
  "key27": "2EKZne2AYLQcH6XkH4XFcewUJ6D62NTa4xVnWwiBXQm1z1TAv9NacAh9tT95ECmgoDrWFoiiuAHCXCXkN48S6heD",
  "key28": "5JTRRE9RHAPr1VPTVAPNX5p9oGWY9kY9RKULEsMTbeYvFEWje7LD1uAuJ5WoH7sqooV6f9Kdbwqe1ZNtpbrvxzkS",
  "key29": "5tsXMTP8NGo2HuNJG4hSTx4byqFGgK1NT4qrWufwM7D9hSYqaAwUuF5y8uc9Ux9QNsgppJSNDrAoXQfpNpN7n5Ad"
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
