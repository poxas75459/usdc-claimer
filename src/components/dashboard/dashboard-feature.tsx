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
    "4t3XxD5JJryxqZ7SPcmUCyckQCC7FNq4tLA4crA1dNPqGJg36f7CFjwJ6aaHU8DZuN7LjrMkPW2YbCCmYZZU3YSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abiGYR6mrPCkN7ydeMTTYjRNUFe3VYDj3eBYmbyXPLH8QkiCM9eJe2GVKAbUMpr39CWic6VeiEpUzn81YxsKo7H",
  "key1": "2zm1y1zS7WjWEB2WTT46YN99Lxmsns7jM2v2SAJPk38oFnzKgqG8Y4Guc5oWaPXg1MBL8A9ARCSaxXeG9XRB9q13",
  "key2": "62Sc7M5zXppk5kH3jSUktkAw5CLUiT1os6HgjQgbxJwXTNAfB2a1CBiHPFZtjREQa8HxqTUxQwQGH5dMtuhphqzv",
  "key3": "EcaW17D4E3b7Qgv8S8M9FZXrAvt44AYEXsRa8Hb8wXVysRHhxnHngjhL8houYnnieHosydEKjGxhVwr3yeSfJyh",
  "key4": "5TZKVnHCK2aTEsmb1MFLyMD2KAbE35mwsJszMi7VHVKKjCcC7GLgHEqTHpuYQQ3JbF5yrPM1BP1Poqoj1RFQoqzh",
  "key5": "KGffTHwUeTFtyVCBYVC2gjW5wupbFtqFoWNAXky86oaXDGGRwN9gJbjqRK5TutE7AznveMFLFWG2bNYBcEVk2Tj",
  "key6": "vPW4h1Zo17ZXyUya8kzZYqzY6ob8QM5XSFSt8esc2NUrHe3U29rT5vpsUUk6rSW711f7jo3Y5cY2tDxpAX55ypz",
  "key7": "3dT6h4M56SuadfXerSFzMCUtMKiYz9gBBEk4jq5AauGd4b7dLUszirRk2nHHWtJBheAKRTHgHVWNQBwUGEirVJq4",
  "key8": "5yQsDuEzp7MeNwmUXhfLDvBQtqDATbVp6aKHVCpm1U9ZLtDJUAEXSWr6oLAXjsEPVXj63ftpeygUnHvbER6SJZJU",
  "key9": "5U1UgALnYL3bu98bRt1JuMLjgELyJuzwz8MFieSQtyDB2Gx5kaiLE1ydezLfRQe6n7EdbVP6YhwiJvD9cN3BxkvW",
  "key10": "3bNALZeh9SP2hfUhW4BQ9mRckXJ6qQa6SmE353ZWHUFqox4w4iEYx1LdZJdJRYjhEgCTi2Efu5sJwnb3Pb55THzC",
  "key11": "xWEsBH8p263b26wditc4HWtAE7Ay6A68ftqiRUUCmJNRrt4AXhtPKjR147spzG4hTquU6VtXu9xmVB2znwN6jYY",
  "key12": "ktUTd3oaQuoUTJRrx2A5irxop7E4vHMdrZbeZuLHJTsiYdjErubK9N9aeZ1CUHEJ37niXLkgVcv9geQji7HpSgN",
  "key13": "2yQV8YCfUCrwa3zWK54w34i4hhCscChfn1jcuXh1eSLHUNU19ioYkLoEXk6CPQQXRS6QFmRF7tvou5mUGeKrEyhk",
  "key14": "2GJQQh2cafMPYmNnovxfELVkKULBgimuJQKyhvg6DVLzrkPTthgUxBKFoE8ykcRyVgGzGixdkY5nyDF6b7oNH4bi",
  "key15": "62bxTzrUbh6wFfobyEEBNE28mtLwwSUXiQkxxLyiCok1qGjRKNs1SkBsDLHgf7YEPyv3GtJ6gS3uP1hkMcMzHhVr",
  "key16": "3tajDFV8Tf5MJqU1bAwTT66gWaYTyhneyy3TgSmahqxVqZFDJcNN29GdDmp5Gn88vxrxNyviQC4MKo7HMNviLycp",
  "key17": "2XFRjojgEXVfTSFM4nFzzyYtoU4MKCciky8HyTwEp8bD3mKVrNtDrdcFCB8FxXNzAnwa6kQo7VF3KddenLcNwf7B",
  "key18": "4awd5eKuvhgQRCrf1HWtJgkpPYcykC1QfPPeGXEgyEdCyVVZBkDBfxqjb1HCkxgo577hC6owz5NzN2F25zm1UxWN",
  "key19": "iYAxeqXf3HYcFXeMtGAEjJzenMHhztTatFofHhhmuxn1XCs61B5xTtpMo32hEfnnfFWCUKXj1PQKwphA3ag935X",
  "key20": "2xDz7LG1Rn64mfqjcHDhUs9Zc8qbp39T8akEKMqyCmhe3uowMixzgwCmaBiKPjcgzxACLvTtUmf8jxAp8sgw3aJr",
  "key21": "2hNXjfEqJ3jcUDNiT7eGLx576ABdPE6nEMg9R8VkrsjivViezZJkKQbJMUJdmXPeKA9TkXaDHtEKwozej2xVMvcq",
  "key22": "tv9nLkiPBoxjBAsq6ar8rB5Q36ZEbe7iAK7jMiW82V369R1c1HieRjCFY4Y22ybFDFpr3j48jdheBySEh8hBprb",
  "key23": "3hXuoB7FF68BUsnAUoAgMJnJgfxYUYpK1uHm7yHdjf4AsvfZXx6XMWgdA7RGf68GnyNzK1e8P17J3q2hteMTNXVR",
  "key24": "FC9jJiYPaWp1HUxtG1w14yUS9gqkMKdivHesaxtfuPoKABzXDw9pRVvjoFndQqmxRBhWdLSpJpVjkzKJrc6yEjx",
  "key25": "a9kqhJTGP6LbjKqByjy8HiVHioYynVv7VXk94GhKchybWzdhDqf1nMwLvSX2CWpeJBKA8NhDkqLFSAc5sJWyf5U",
  "key26": "eHCAEkLchQcVpwn11jtFVi8EMqusAeGbsTVDjiiZdDD5Gsy2AdXHQfhPChvywrSuYDtFuSUdmj2AGWQvofFYRQo"
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
