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
    "4vpVgordvh4qXTniq6wkMzr6xPfGP6NznJrm9aBg3cyxru1S1Z82sy4dj7DtrqknhC6qPwBNR5huwmWLPVsE4CXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xM5JAmFwBh6HT4iwL3txAqPUurvbnNFLeVMHUC616oLGkrs4nokWSzSF6e7LGdy3iAEatm9XSNUYYRzsuUWQPA6",
  "key1": "5ouJ4xPa733Es8rrT2aFNXqhoTM3xZjqma82X28VPXMRBuNasPcKK2s7Ry91uHjFMLdCVkyKKiaXUADvacnK2dTv",
  "key2": "5WS9GaN6SfUf8Vf6Ntdb9DMX8nGMZgATDQWXxBXNAQr1TNfjKgch5CKfTGVqnRgfSGmYwU8EERp6ctWS6YEFV99n",
  "key3": "4NZVe9D8QfTJy9ys7zAbPzZ5Q7hzWDECdFUL1marCTQHBTYqisyjjwhGwWxztRx2jUZD8EpCzg6kuRNxE7g6Vs9P",
  "key4": "4jJvghjSLs8oax3uZcDCL43fUGjv325U8B8QQzLUrtbdrLWVa2nyQaYnZBw22ee87sjvAhBe6WLVPNn2bGqbLCpT",
  "key5": "2bgMdh87w4A3gV3Qibakdg5xRAzVcJHtgeHKn1KrYo8PT8PgddKcDrujp3MpFM5pRx26UmMRGkz52uB4fAXCThLf",
  "key6": "2ruJXBSqoHCY4toMH6kisaoA5wSsoakum8zWcQTt45FLYjugUmyb6Azi1tcWUfuJBaRAV8mkV1nrN2kLCpaqfZFU",
  "key7": "5JhXKNua5iVPPujncEt7jSfjdqWYn9L6hjvdCEn6bEH6YwXoHvTgRdewgb7jDvm1sxD3n5W692nFN7HbpKVXqYLg",
  "key8": "3D6u5Qbx2gLTJkvnYPe9Gt8aqoaYJ7pxjBg5yxgAJcKtismhTacdFcJpF9Txma8XGJQFyydRBZUNnGjnqEEm3jUf",
  "key9": "3bhvxwn46JQ4gXTiGXFqjpGmJUH3eDnKUnondcrVGpov64ZQ8pTtZ46TaFnSPH4CqrMaUXr5Dk8G2oZVTpoJd3pe",
  "key10": "pDqanRPRyKwy96N7mXNKKYNd2PgcdSsBZYHTq8e8e5fmoLJquHVN2A3kYdShZHa5yJ52AzrrzPtZzTqdnt32ypQ",
  "key11": "5ZM85JX5rxuJnzxhDGFxTJyUfqrn9w7ERUAD4CRnyjYeFSjciWooTr5qdeUu4oTm9F75YCFawsDxXcpRWogpT8YT",
  "key12": "4pwQGT6na4qgh8bm4MNddiFvL5DgsmkRz6F6qJ2esct9iSPURk8Nnmv99bjd7eAaB5ittcsGeAPNh9hCfoXq21Zo",
  "key13": "3Gzh9GGJnB2i6y7tQKtQ2uW4Ztz86atoTTn8rMBrjA7equBAuvPaHJMHBqhFeTyhYEhP9uB234vFGCKkryf4xYNi",
  "key14": "4rjhZCqoDSkXQMXyN57M9uLfXEzHHF4C8fiVHjU8b1z2jCP22TzBXivuU8ZVpUYbTzK8gp7U1dsZYxxo8dQmVayS",
  "key15": "3Z2K9bfAEcHnTWKFAi8VnLmfwe4Y3PPFfg3Ht8yZF7eaZS5L3wJqyh4qsDdQ9J2ZZsjBUir5rNQdrDkgzgJj8K4t",
  "key16": "2eHEB1dqCQXa22eLftZdQ1wjHXUs7xtR3R2Z82tcj3b9yY6489tuHPQjpbPQP2UkTZ7KZYNWgoa3dXeKiQ9jtLPj",
  "key17": "35HE5hGPD3SxtpAi1oRuicQ332w35VDutouJjrBvTsk6rVBoPehcvjgkdYS5iNh58m2JC6cAqZMe3bC5oDFLeZ8R",
  "key18": "4WyYxiJE86hdgpPcD7MeQieE9G2knhBaUK5knVVN6B4UuGUeieHLGwZZYsL6XkL7YKvWLd6UQvDtKsCxS5UZp8RE",
  "key19": "3UzGLRXfsxaGjB6Z6ndhFrWKHo7ugsLb2ZGApNgeStiaFiZdXWsczwwXdnj2yFwz8LBSWeFM5cdjyGC4RbUEyiJA",
  "key20": "P8Rtya9xJ8YGUyRChE4EQM5Q54NNcLrhBEZtfwHVBw1ZnFMEo9G4PC761ZpYNkBSZM2tdQ93jLmEHxFwUEMNx6j",
  "key21": "1BGnyx6NmxmsDBYsKBhVWpV6c7wy8bu9saMa1FzkSbgPGFC5mNzF5LFZyZKXXNkga3vHUdcxqE7d76GZtEtGvQr",
  "key22": "5aukHSVkLFMVAqrmac38EqLyYgJ75K2gq7AXbnDJHrCs1zUtAPKauPEkdHyJyJeFdR7dFuPDCg1z7XoGy2VdueoE",
  "key23": "37wMTQhTqBMEXcT6nUqu262VMEwTyCTKzzjcLDri51esSP1s4Z1rCaVznrb4F7BvNtv8bcxVagRkbNQWmpU1aKP3",
  "key24": "4AZERZFxGgXS7ebDkJL8MeP81BgVZb1u9irgGq1XsfNEhbixZF3syWJidVdAuhwnEiNSn7iNJquRTRfCbgQ6keS9",
  "key25": "2i9k7W2xf3waLfKuoywn3oc5oaPHs92fPLVRfhH4jmdh4ZSeDaFWmjRZF5sJnyXYX8xcjHxvmTP9anq5jpPa4sL6"
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
