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
    "5tVNe3hXESFhX93sWWEL4jBSueEaiBN37zfatEV9aDukH67Efz1apGqoFizrKHTJqCivAiaDD8kWV7guauvM1dMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNdfFbYmZEQhXcQcdPh8D7dWaC8LoVDKtPGik7PjP9KoZHb49Lvp7gJMK4AcgjR6gjseSo2jtNXkMgZtN7qTvu1",
  "key1": "5n78QYUi13hpCBoMfaNzANjdzxpAwnUgt68oNh5X6ShzzjqTfp2kCFatPiGCh7cyYPMFvFXLp9RBhYXzAjbt8LYm",
  "key2": "5S2jsUNMt3GVEpzznoTbLzemK5zR5yvm1NC7XZDEt7RGmFTyPpg6oRohmFgid26fFekgYzw9jeYLxNwKVKCYSQJL",
  "key3": "nM7Thqpj3ndKuJLjVbzDZYL4RrAzrguTRXZsCKtsHTkAmPiqJuo1BnRAXTEtNF1awzcJ5D4HwxUh495dE2G26eg",
  "key4": "98H3eSiR2Sima26azyee14B1Aysdj5KwVBh6keVNEMHGpSM8V9NvX4VJ54mTZMXkRXPJWbEHHxTB3uFMBWkLa7L",
  "key5": "64XruYia4BVGQdVjxbrQbsYENg3xuFcMcKRDnxdcKUXszyNr7EirvoELQnojxLJQWZZLi3m1t2yYRp51wV1faeTS",
  "key6": "4CQBSEsREy8Avq41E8ELP8niZHbCpamPhkGufsEd6xGBzSZmc551XQXcRHaj4jif4AxB7etc8VHD9nLGdiK85J8c",
  "key7": "5DktoWDau4RZ6t7mM5KXaqLLwpWz8HwGM2XmS9XDiV7QybHgKkiKL19F3NzMtLE4uso9tYf1XfFAnA9th12935Un",
  "key8": "4xAagPhhhmtcnteR1ZCehySiGxN8kFoVEWCa1uub9YYM2A283SJz6Zz4cp7kbPNo3dSnCtKCDc9owS5ynxE8LQR",
  "key9": "djknmK3JsXCAJr5w5tyd3eYpE7c4WFNojEBavwdXG5GTkFwofFUzWwQ8i48h3qv2irkGUCLLdN84D7eqXcKvY5m",
  "key10": "3hthavbtjMV6abhNkWZuTooKYYBZNCqjk3WMzNbspsxxwtJjNe6bdV1fyuVrsjBcdYedTu3Pvk4Nn3ci8jcPkztA",
  "key11": "5TvT1GR89MooRHTVZ5f5MKnLx9fgvk2Jk6ArhsqTRxWkmE72C9iFR9LE89ykQz56kEH73FCMCuapui5Q67Q17RTj",
  "key12": "ohZye6Jiu7GopaHHL8ydjsdZNTVN9gaK1SbYEbbcicuYUt1wmCLjGMLvPY9C1fB8yNryzDeBurA2w4Pu7wzqTu7",
  "key13": "3R4Wzrke3U4kpTU5RXfvYHXvsfEhcjF19HzA37CCXNEm1eS8DBrJckzYrrwN9w4CGygcLcwS9aSRoHs7mHhAh3jA",
  "key14": "2fCy5jCfRcEbMZvs5TaJ7yaGs2pRkjBhCVkFw39qdLKWmDEmsBjhch873zUHXrHVZcnzbKUFnzTEfz6Lde2VQbDo",
  "key15": "5awWQRFrcH5nDdkmKZ4VdVntxKVuN8cbwav7G8LFiUMqCAmmemfYY24s9ks4zaRYQH9255jzpiuYTA6A8aPKfzPH",
  "key16": "ePux6ntt3i4n36oE8fgFw2SKKTizrXie59NYUKoHA3y8wnxRyh7kF3DopMDZH2esu74JvTjJgq6J5J7Q1yZqRkk",
  "key17": "3XeRsn5BrokgKFKn59Xb5Ey1TZJoSnn6TJP86t8GMLA8EH1zaCVkKyH2bhqQ8ersfcvqANysLwWT5NzR4qV4a9LG",
  "key18": "5XNizmgS8NFmfErAVeG7NPJfWvemm1pobh3K7stdXtMaSSGqFBAeBbxf4wwMtPquDvB2FfzZoR4oZHgjyiC6WzTJ",
  "key19": "5Wh93rBRFa1ffiovqJx4E3E6nyfQpzX32Z6CVbnvE8sELvXqqZtTqxnXtrnwAmBEFjC14uCbud8bRQ9XcCWEFxzq",
  "key20": "2sHg5GJtcrNZ3BEqVqw6DewCRdpUVofzxV3KaBA1xTTWT8GASdgxQqjXE9vdmGJL3jktM92DHhV3JbJwpaSo9VVH",
  "key21": "41cXVVTPktdZMKyM4kxteooYPi1qn4movHWutoP537HrCMod6eHoe7LZb8y8SY8qzfScTSGg8Br2Fv3iSfXPS8yX",
  "key22": "4hffhT8jEtNg2qWq2K3itPV1i93RZ1AbHna9UXzbzL1BVfNbLDMJ1gDT8iS5aZBPY2W6YuovRpKRstHQgrWG2aR1",
  "key23": "3ysuz29pHxKWmg3ZkTNhGoNSjBiPRZAu3PubdqFJmHYkereUP51V3X1zbMD2wT9Di3XtsKr5AEMhB8BihskAY3FN",
  "key24": "4GiBSd2qmxoE8YYjem4BWmAWQ77DAJnpHxafgMay4DSEoY9PwftBeAJQf7PXHJxEvGYsBLPAqyZ2jP1Uk7vMkV3M",
  "key25": "5n16BbeoZ3htP4nset3AHFB2vpN2kZHaeqcyVvD4E9wK5cAPMvFQJd2LNCvNcvZ21ae5dwz1t7p4QQDWtzJaNjNi",
  "key26": "ErhT81gHCGPWCRdZ8ZwKQcKZY7vdGbFxkSZiiUU5FWN9bKFBHDLYJ1SCdshPmSsZEVAZQCxK6zKqw9gnyTuYYwQ",
  "key27": "4g485jZbmGX6NpXKAe8Cz4gmSUUNvmoyYRCD5RSx6MnMoFMKZLXGLqJbJDyuuyZgCmX84PLb6V5Qyk7WX7S2yfkQ",
  "key28": "EZsi2n2GQuS24sTDVEAVUYLVJKxvdUv5bhoJCvnHXCCM2YM9Sf58uHsMYVJFcdyMiFLZFet57DMt6ZMQGvLgWzz",
  "key29": "2S9fEMVRY6RiwDUdfTEhbfUgYHsK8PaZGLvnbX43jRoMKMatLC5Kp4ms2Fh8s9GqGx5TQd7aePm4pYfwE7zY9z5V"
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
