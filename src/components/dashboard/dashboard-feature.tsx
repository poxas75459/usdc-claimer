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
    "66jcgpV4dd7VZ3Z8oC812Yjhkjy2TuHahYe2K4tw7q9PGV36CqtgXELAmMtD7irJQ7miUZmbo5Hra4fcX88Q3kEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2dMVsjQf89d4GmWsmqQRBgVYepnzNYMxhq2jjCLMJBqkq675VnmgwrwHv1BwJJNBQ3kAP2tguj6RprUNygA2JY",
  "key1": "4qAQr7HpfHsdAdCqJPuBEEv9n1YErHGJTd11PnyqcR71cDpoXxZXim4unEwS6Bqs2R7y8FGczE1bqUg1x53XETf5",
  "key2": "3iqjmqq4E7oztixJAgrLn7mHzs6nUirn7xFRoXsEucT2ShUGAjMFef1uqbUAjBMFDWdWKRpmVNs4t9B7i35yB4oc",
  "key3": "4XMnY6koQJ7QoVJAhUKCss7tRg7KDxbkjpHMKBp82GCBzZeAFjSMMqNedHCCd9YNLcSm2qCtDzc1tyGa89D9EPQC",
  "key4": "5LqqKTc65sqYqnFiHzo5f8TUTwRgHdwrwv776V2CLW2xThN27hqe8gWLT68o6hsHjnrJrxAGUrtLVKh8Ww47VsD3",
  "key5": "ebzExU4faN5GUcxX1RvHphB1dPeFe9ULfPtxeU6fLMRTYrGFYkK7x7nzFzirq6tY36UYTB7NR6TG71F7qQ6qukm",
  "key6": "4gHMayGJv4AdDyBsnNkFhV6PKKGBMuvKzcYzgTzL7H23fWoPdFVnph8e7JigEBmpcngmtPZawGbdQMCktNutJQ5D",
  "key7": "33qdFAuJPMiLUiVGd1joohnYBNE5K9HehSZb21k9D9onukyTqmNe9kaUPT8rjJR9VgYzrG4qgpM2hehkvohodW6j",
  "key8": "4hg7JjFTXw3UgBecm3B9LeieobAPr4smC98QaZkN72JcYUecKCUBssjpMeG6NyxYpjUzEWK3p7LpkNxUmtHKcP1z",
  "key9": "2T99bbt7srQDb78SyyCoy2Rjb4XZghhJuNvWTtRCqohNQkGBGUYo9WnVktT7oBVf3xb1a6jaEW3sTDcTx9isKYX4",
  "key10": "2xtnGmKxDu93H7Bxb9M2UXFv3MJkomzKTZyUT61btMkbcfZGTck5swe1QQVkLEphmYTK5dWMdenVwjN8QeAsMzUi",
  "key11": "2TS42pqmcjWDeq979LCAKNeXq8jpdkZECPN8yWUNqkcdypizWgAXrFCP59bocTTr9TVkfAQFwmJzYN4F51LMQJe1",
  "key12": "CKNzyFkMG1mWzEVzTc95Ruj2EYbMxxt95EgQ6fiG5BaAKywKNH9ZstGQZtasWMuWdELUyMyHVRddaLNUwMBDToY",
  "key13": "mCUzZzwhCEwrjDQeE4NKU7p7QgVZgM98xFJMDkSgjPj6hW2u6EaoSDtK8vuf9n3WAW7vKSq6BYTksrqgsnCgHNY",
  "key14": "4kPL7XgHk7Y7wvzQK15FCz5S1BmpWfC6qk11YbRj9QGvBmnbSw7zmDVa9sEoZSh86ZZ9oPtufcXqQ5LD4nMEotjD",
  "key15": "5xMUjewbhhzhee64a8AVSWQYCEJ96s2HFXw2gEznyRFqR6sszoyjmdXJBpp1duevwQ7niYLAeAXr41vqNeXxXrw4",
  "key16": "5AmkxpBdB1ydAJ9Wn8VLTXDrt8rTsa8cYi52DuQ7V2Wp1Hhx9EGQnYfXRXTMJ3TYvapsa6NW4ce8NcNNBSfUrjgS",
  "key17": "N4EuvJ31gAxPAXR4CF2h8pM2ntzeg1LYUET3uc3ZgjnvzqyL1csMYuSyVxXGeVevjao7V95mpBWWNEdgpqttUWK",
  "key18": "2cbcXxE9y9kD9Gp2rt3kXjpieCEdi5SkRVWKdY2QnvzpocVuh8ZGPd75sZnioz6FiV4EtH8wZwXhzUvhiN8pAmgw",
  "key19": "5fbJBj6xdoShFAzEN26vcST7rKtNw1jhL8Bfq2Z8AbND8RT9Uf6SzL5tnga8eipBLTskkQ8kbLnxAn8BKyWyJ4wr",
  "key20": "5PYkFkiR2ep59RYZLQYeZHoozHW5LrjEqL9b48mpCxQ2eSJSFGShAPL4xnpp7TBUqxwVaHF3FTk1sUmXxX9MaPbP",
  "key21": "5LpQnFArcqx8jScJYPzL5xSPR4hpHk6Aj9KFZEjG85qVTyZhaX2xpCBD7KY3UPcnebKtGFuC2bTmATXTyUu6FERN",
  "key22": "M1KR11AuuMxTzUHbK1ZGkghc8Gn5RuhmFArU6FHiuK2osFXqGnjJfdY3cLFLa2ruaJW2QhUL967y3p78jUdump8",
  "key23": "58aHvcE2ogrzKSsQeJifEFnNP5fssWH4uBog2999nDvcycEFP6bZKeHGmbMooioxXutJWksX4cSAAjgyvkTr3oo8",
  "key24": "3qTUJB9eGvKzJARMhrDZvpd5EWdeuDXr5jCYkzoTZFA3LdsRCHEQz1s2uBJ2s4dxHUBTLCSW5XFitogswBUiVda4",
  "key25": "LkHT5ThRuNxirVnHzpVRzXdckdgRznE3JSvbuBpXfd315LTw83zDxWkgQysFgYnwBoBUAQFBbRJV9Qb6PeNvQwB",
  "key26": "2xotgA6aixhZrS2ZE8oEagBccfEoXWyms1xYk7tzkoYAzbASDQh85ETnctvJeF1arENYgb8DnfQ1ySZJknYgv8tA",
  "key27": "4HeQb95KuYJ2hvEpb6ncRPTXRdYuX6a136okKucdEozKyoWadsDyJQbXjbdJw6HEpk2xGxLXJsgJJtKEQr3guy4S",
  "key28": "Bhfg6AfCYD8ccS65y1b9GLMQNTBYjTqzsYtrSrS9WcQEZsSkVdr6FV3tmabuNpWyKTGKoEn1drguVf2gua5yhy3",
  "key29": "3y7rKXpg8M9YYsjL4yE5ymWUtYAEzwNd3wPx6ZDWbTz1K5rQ89kaPuqno1V5jX65PVKsS7hae9i9yiZ4xMKVA93N",
  "key30": "xWx6Q2wYkv77jtzNY89W5AsAYhZPYAfNqnhtuQme1JtBcXavtPsiBpF8JZ2FmcpS3xi6gWHNa2DPfHof9wBM7WW",
  "key31": "2TLauVW6pfccgr5koFCfxDdNJmc4MQ5P8ATM1YgLwhuHibGWw9xjDFGyYY1ShMiqfUm8bK93zuEAbfh7LsS9qfnJ",
  "key32": "F52EoUAyUwbC1rh23GzwLFHsS5Vu1KkzpQWCj6tYFKjLLWBzQxFVFtYTuEQyUz7KCepCHdYvXvvhJMo7VuXrqoN",
  "key33": "4bNTqxTnhqWyr1xRhmcLhLBqtaEqMoPBRV675orKqhSnb3pxwTbPpX14pRBfmyP2dMaCN7cShtx34VWUhSRjaFNc",
  "key34": "5tJoMm7hQ1ycFWQoxLW83hMAA5hfHmjaJ3Do46UC9wfXvR3LASEREheZnHRKdNFGT8DxULvzCuG6zt2Vdik6Z7G5",
  "key35": "tHD8VGNqCsDjHSGJZofg8HACj7kuZCgmWXzuiWvzC5fxKbuGCmNbdYc7FgWqDZaNL612EyHTS9NQ1PqB1fghfYA",
  "key36": "4sMg65FpJv6PtTdydJTRDFsfheD1uxzudbPSYnrV8ZAM2UsyPG4NNTMTaERMu467yWSxMSkoyLNLVaFxQUcWdysS",
  "key37": "35Q9MxxaKQ68eLKrFAaeGAjrQekyjHfxyV9NvtZdzA3TdBhzrrfmBgR31uF6NDmKBtRAD36aqC2haGt7h1KUuA16",
  "key38": "3TnwzGPSw6VHN4DyQ5gusN6AZj1sPUtviSJtX5FfA9aY2syVUDQRzcN4v8hUT2ERszVwDHAy3NLQdhcsVRqU8azm"
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
