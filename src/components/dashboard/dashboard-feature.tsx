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
    "3Ud9YjvQErcojaRAHwPzSknm32ZXXmvkZxECkjCCNfWxYXvTpvjmhjLctLXxhiR47HWPG3go7Kbjs2EiXgTsvhTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3ft3HxsYNMpV9f3YdFVRtfMfttEuZE1ybQx2nWaTKcuU1jRkPXzA8toixutXdXFDwahSaCHGrGV21zR4hckKiP",
  "key1": "3k1DBr6x2wa1iDsK1eXxTVTz6woaGj13AF53JNwDBSkRenr8w6sZfP8uWka9Vm7PZMmPjyq2VS1ciArcF3cVfKs6",
  "key2": "5XHaCgZRAgbFU1oScTJkkMLhdmTkbu7KMxqk2aPuqqUqbMCe8LhLKfVC1zFGuiuu66pWaminzkvGmAYV4ep5DDdD",
  "key3": "3Lyp1Vwu8UKWFAjBPGTW7xh2UdMYiU38ZJorK9niQ8hqsyQnzKziMMq6yVnkMFF87nwU94YKDibzJriZRTzXb47v",
  "key4": "3eWwqJQi7ARScUTPxNDvDuU42p87FNFkRB7hvKEozssYmuE89rMFKfAfv5L3M5BeUMpB3AdCeLuDzrz2yzJhWqmE",
  "key5": "XT4QYNGh8X1QD4vjMaR6CSGSXkVUYRGGjNMFp2ouiqUbkg9tVPYRrZpazuXBoxRktzqyA5jdrEbwixzAV1pWMk4",
  "key6": "2po71aqoCziUCfaHqEXrN15zArh5DgATH5ZrZFwsh1Z3pMtQmrU1hePFeKU6iUVYioePj4qhzDL1fe1acYZWCryu",
  "key7": "5r71DSPX4fdvg6SiEDkGXfm6mMbr8k9H5qHjmoNTLBgiSR5X9KtsEG4CZz64NGu3idKLyGLuCFi5mEVz7Xzc6YW6",
  "key8": "2UCeg4U3cKH7ahiViFwTgoRzSXGfMxk7YArcRaNeVp236jxcwzovpuhbLEZfc9WWC4rFyQbuzQpXuhHA3UGJDHv7",
  "key9": "2tNRUZQDX5myLi658Ybv4oGZTPxgVdKdefrJNZuyVVUb2jMRrF5tdNFmtqDXDV5fYAzqJyApnVKZMRGzsSk5mdVD",
  "key10": "4T9Kz4oowd58S39tdpksfYCS8asYnF1Qi5EAihPfwRj4maey8JockkfNKHsEfYT8StpiBzJDsJBk8U6JDagyx5xn",
  "key11": "2mkMuCjJGFFwt2u7zXGfbgzjaNUx8yG3eAEmoGKphBLKV6TkkWthzGL4mBWJNP91qndeCLyoGAk1A8GhX4CoVFxj",
  "key12": "2EmhqJTGo965AF9RPmrRcApPXNXQZsnr2YNh65ecGvcy9UQwzfwtkeXtFcyANRL8nBbAtD1mshcnFoF4Bq539iWU",
  "key13": "ibwKRicoULKnoDHbC1eBz79gqdQ1z7ngUMGaiQ6fUGnEH2UNr5SV8xRph2FNNc9coRiUXhKHudxQAVtMRNJ73sH",
  "key14": "23NCR7JXc9WVk1r6Br2G1XdhrvxhduXSVdceZZ9REmgUxRv6RfnxA7CKJNb2kNY9YDD1zX8sJgvU1CqPURBytLTc",
  "key15": "4W4NuBTHJAzaFDmF93cFyobfuvxQRr97fu4V6ZsiVrcmt24wCjHCkqxzZre9YHM1BndQWa9FXt2ND4WSBD6LKR2e",
  "key16": "2EGgJCZiJpBWrmKgg75P7ksUJpQtv8kW4kuMkvYLaZVtKeqQAhSNj4ys5L5CnCF6y92RozXpJDsoofx8SnpU5DyM",
  "key17": "4EZJxXqL9MbFbiSdHoNcBSPTfA7rqL8DVrWY4WyUmikJ41kYY4MaChKj4QLVA4HE9E56Tmsk1by7CqRTugC3FNyD",
  "key18": "3Bsdds1f8zUhq8etbwu4LQZ8cJNheKwSJeWu5QoopnuFmQ9re8ApqzW8XT1ZoG3sf6jauK1SQwEfkEzbvyfNNX87",
  "key19": "2fj1dJdLiPiCYrDorcwos16nrsiJkjbFZv8XWXR3enLrJvtwWFRKrubgUKNqDTH474KeozkoX4pqDA96rxZZSdof",
  "key20": "GtgHNWsGQNEKavMJGcQ9KDqyS77TEfJ2taiahmKCYNa4sjAuj5CuP7VSVDLRqJgoXMVhz6iK5TjkGkoicLZ1at4",
  "key21": "23aQdapmVmVUat8aeLpKka1jqYaY2VGjB1dCLQgMVWtJBDy4oNhKuRDpZWpCHAqhoboyvGhWqPA1dVDvkgmftbsd",
  "key22": "4xPSrzFjVnFHHvUqBFbR1Vb3JxRrrjDRhUxHdpBbZ66wGX9kKxdQ31sKfTAzp1eyfhzi72jenuVhj35pCnHPsPTg",
  "key23": "5TYkypL9xhDCKjMkPfUEwF3CY2PR1F2QMwfVAzMzaMUDTFH69jiRwKQszMQPciQqRzoL64awRutYsSaNZUkJYC3w",
  "key24": "2zMCRHKZrYmGc59QBCQCaqduEtpW6PUVZk9HsN6D98MbXRs4iNXKfy4reEoUybMYUKQb6CDpbLid121zz1pobHAV",
  "key25": "fUXN44ZfPcRRznc8XoUoo98LJiCp6HRin3qMR3sZDxbpf5ZL9ASai7A7iR6anQLLnS48TXtWv2GLvahfmgh7zDD",
  "key26": "4mJdnkxweGJ5ypRrWaUkwMTKeZEpvSXzEJ2iiWiBiyhNaCxWvqQmJnFFiTYPv6DqvVHkprqUpb4PeLwTw4uE7Pco",
  "key27": "46CYEvHdws1Dkdpz5fVW6a6qzjnFAHBaLfQpwo4yXNEp4ZQb6kYfLh7CGeP2D9jhKnhRUjoF1RHPEV85sfCK3GAz",
  "key28": "43BmKfVQJ6q5c68ZP2CyBaNtvkn9vWcJ3h2a6TXfAc4ASbdbY7JYc6E7kKec7QCS38xmDxctGRu9j13qcryBezVk"
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
