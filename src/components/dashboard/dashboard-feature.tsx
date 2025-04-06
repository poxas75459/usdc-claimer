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
    "5PUgNF8mR5Q6jq6Z7wCUqqGBvrQresUTNtJa3X5K7mNitwsweHdn74YTgw3aKwEUjHfo8qEMmJ49sVFxtBFKscXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xknYS5mGve26qESpV4FbUgETGwpxK3tZCQ5VikKvVGUEoqYCc3s2NVu684f5y5viz99TTkhPJPQuimh9JFTk6Y2",
  "key1": "4yBDo8wH9WEx6wxZEH4Exa7bnXCHRd2PWCrAc8c4Acs6G4mY4B7fYis3qz1vWJAXkYrsEznPX4KaQ8Fvr29gh5Fv",
  "key2": "NdAA2DMRuw7fii3SRGrsZuHR1dKzWzx222K5mzS1E7NZLpgoRDfi852UWmZX1SdHGfGepaQTUCtDhKvMM1Bqfzz",
  "key3": "2UEWVWwbDgMJjj8uuDv9iLSBc8VBxAj7NX6F2tLbrvu3riaLRQQefVMytWnXLzhioFXuLNUsk3ZsVdyYda8CrVk5",
  "key4": "2F1yKCoKv41fpCS6UMms5qmeAhZyo3xaV8Wzc5ND8Lhf2w9sUjLZ1jngTvRHVKSi4XPpfNRGzcpZMrrXihHWNT27",
  "key5": "614aV2zhpfQQxidEtq582QiWVos4Y41CF33DoKutkEjp6cBY87MNYMhU92cV8D85Czfo2kXV5wH4hDar3NcfvboC",
  "key6": "24dZSbxE2p7NGM33gLgJvYuNSL3Dc4thFoKxPmhyamApny3VGDx9bfN7Zp7xKXxMypToperyc2ZCNPPtUi8zoHDn",
  "key7": "613fDAvDEmKQhJ45R4qnUN3DB4c2uA3ENPz5Ja5VpuLzHMw9FgyassbFeJyUH2CJ1Tff9GSpSEA9pq393mMke5fw",
  "key8": "57JrG7Ns1XkrPx8iGy6C3TyHD3vnD1brNFWfYRBVEfLCjhJcccBSZsxZBuYgvgXsSAFcjB4PEpkM5sWcAT3pHQHP",
  "key9": "r5e9Foi8hnv5EhX34HfMaEsoaC94gALdLoCa8bm2e2nZtSzGjDpvBvAorsiSvgaFzgPstGMaTSPk9ZiFW17JzEq",
  "key10": "5dsZywodBHNsYutbHRSXrCe9fp8fxPSQ5giHLxCUePNG7vg6Dqrxbm4kotVSnrmbT38NsZx37NayJRhzFJiiu8WE",
  "key11": "1WKQTh7JZJgHHpdsMoqZnYUYwVEw8fTpKYSXbBqVSf4AcR91qcQy4tc66DEKHM2cxsXWxi9aSTbXCJbincAjVzi",
  "key12": "643ujw874g6Sb3s3zVggbKLWBhwiGWaaBMdUTRr9kxkTg54Cs5B6ejc5FYkVZ59DpRyxZcLvMiQNRDusPwdA9KSb",
  "key13": "5dwUzFaVzB4aE99BYoB1FVoGuYqQt6SCpFQL7bqRxjAeU5RGiPGAeAyDFMkU5ywNDiELLtWxkiZ8gXq5Nkv1wcgE",
  "key14": "AXGTYepni9KonpzgNrRFMs1GANLVgxGoWosKsw5mCdayP6vLW3uo6Nmpgb24rUmHCh9PqCQyL9vLRZwnseGMNVY",
  "key15": "45ChRpcUm3Hdw89TQR62RwsM41NVRZ4GbhD9FN3k7zG87ParwCtsRuMbsN75ACPnV4pTk5G8wQ4p5zJ2PRrNvBf",
  "key16": "4YV9Ms4kSCEPUSErAruiR5qtSxwSXUubE2BFAEbXiNBKkS44EAs4jNxN6nUtmiQLJnZuUAEVVBSdCK76aEcBBn6f",
  "key17": "4ztJWkyTrXs5bacMEHDjoT56uFdFuoXgNc96VXoXoq51UDv8tP1jUEySDSGdaYjLXdfSb5YFbVsK4gZJyFap7rPG",
  "key18": "4K7hpJLQfzFx9ra6DKJNcCkLtjDsCJJxugXk1eUEi9uGm6nGLqpHr4KcZbkuRwd1aZ3MkTVkH1tgk17aC5ji1uRd",
  "key19": "cXHaiQfR7ntqW1f9Nd1vYzS28ozei8ZGqdLFzyJGJE8wTPwhUe8nKApMnX1aXSkCVhgwdZyGX1g1dyXJMrXCiGj",
  "key20": "64xqZPKcLcYS4mLPeU2nfUSxvkfYNoVcqLUknm88APeKkQsmS2idzgP6U1tgkHbhStQti2eLesjhSJZcguTvJAaU",
  "key21": "28vvsBTUBYU4QSPXmcyT3zBFFjwrsam6pe2puW248FPRtZKwEMknwQg7gWikHYeYzTgaRCkNxotB8nzmX5mqMHzr",
  "key22": "67iG1QKRXxhah5RrY8nkLwDoHxCv7WeQrrT9bMiLPPypvzFr7v9oZeWso1BLnMrbCrsGoze8UwcX2dgPwyPdwAq",
  "key23": "2MEE9cZPTGrS8CQmE8Y7LdU84agM257AwqW7WSJsj8kXNtEfQwWz9NbDzvow5Tfs1aceF7xebbgKq6aJAbSBX3gx",
  "key24": "39m5k9Eu28K1zvbUZzUdo5Tstnr9C7M9dTuZugmCqUEdzVkrDcpo1unVWFtTofrG6ysrt5zx9NQ45q6DCpQbkKSC"
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
