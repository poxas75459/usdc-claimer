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
    "5xe4jKZ4LD13mWZAeafxwtw4QxxxvHLCuYa3fZvz2D7LZWi24cGcpjivyqRJGBtwkYCvUGF7fwnRfGQGcwybYWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJutYYzVvSAHq1bPGmZ7mg9bhupBQRwmWo1W9u6MYaRLicEiEunXJVceeig2k1XEM4SDJyCG38X3VMJHSYxuPiC",
  "key1": "4cgWGHFsiseQMpEcjgpAJrpGNGefRfw72JRUVhjKp4vEPSFwheGcAU6JsXKHyGNxKP9pff21mFGGNxEjyTPhyCpS",
  "key2": "2W24Q8eiqxwSTjCtvuwMfshruoVVNRgdjvTA4PemSAawmDzhN26Eh9nDbjrg49wyaq4ZjDdJeHdt7SmddaJUypxB",
  "key3": "4ALYWtHD54hZjjn2RSVLkMabXU192PgC9zT2titfsxdubYE7dgzti9q5nxAohwnvKTkbZhUSNqFpumPzaNw1mGeN",
  "key4": "2ZUXdabV9e8nScbFNACFZEE1JyUBzwH3NKf3fLGZxqF6ZirHgrkQST8DwbVH7ar8VgMRyxKKTETftQHhk56FSTxz",
  "key5": "4MFvTLDZhz3X4D2PDcgQMVqME6g1jGUbBRggaBYuiRvZ9J7yup86oQJpPafqwD3hAdxds2hYACYamCGsgEnopoM2",
  "key6": "2uqRK1tFWmPUZeWuP6syqf5cmBJLoTduuY85PQ4iNFywG6PL2kMXjPZ9Bh9BSGUBYwBAVsXJSP23mYfprq5FfKQc",
  "key7": "3cLbbAHBtRjDnbBQKEyt2hMqBcECM4zEhTCJksHNpZ4rYzBf4WBDrXiijWwvnWQKZJhB1vQuQu8KWiEjxiEEgBjd",
  "key8": "5vG83eBWTmLce18dFYe4y7RNFFYZMgGJUeHJUWKcqj4UxzvSb5amnjSydnTxYJC3M9wxyJFgFXgaVpQgjSomBdic",
  "key9": "3oKtPugyZaGvZ4tWc11EbA5F7M9cJ3vrq2MB1SFs7TA2qZp3Z67oq7tPSqLz82V9s2F8jnJncTtqsnkBSdMRHw7v",
  "key10": "2s15CCEcmA69Yt4iCfSL8GpPNkQ5dQNKZLB6vfSYzg8JpKb15ipF1CGJ8e6ytuL3TfNkNp4kyzNTu6amumrXpCWw",
  "key11": "7YFtJHBrM4PyvEqYaZ3WPDeqPbFwvttBwptz6LPQN8GDHkz9bC3yoGdaUdgtMrVzQb9L69XjAUrPwifAN7xbykY",
  "key12": "4K36waUyz3gQVdGnK5iS5X2g2ZHa3zaCddRz3hFLd6SAjJXfuapoWwaEw69Ek1fWro7ih1YNgLxQgadZTMcRChYg",
  "key13": "RnvTJNNg9aCthA5vt5pMVqGePC7hyp63CR1bXB7JUYtJuSRB7euS3Ugm3TRgDdGmdPhNWAADHWD8QH5MQNA3fPM",
  "key14": "TefjEZZUTsrB8a97YFddHY7X2Yd9gxoSrL1VQm4WRtNutGVz7eE9uUjgpmAZDFtLDCUH43xqETBj4Ab4QCsEi7f",
  "key15": "zPKzHfcPP2He5FPLpu64gD1FdnzK9QwWGRiu3xxW5LNd48BkFPMyKudCmmKgqYhzVvqnai2ALEH3Hrs2NVToRvt",
  "key16": "hAcXWqJnBKcPLTzAYVMjtpfvrWZreaZK9nagKXDxCjyugNuyNFmMH311KSfa3TyGy7PPsVFCbmMiFZsaE1my1k9",
  "key17": "NzGA7C37bNsiadmW1erHebNb5qW9T6EomHyBN2DuZ9iCLFhKreU8rJbUbamiihmz3TEmmKVebTxaZEn8mCME92J",
  "key18": "2WbRczNWi6FJagm2qJDxyvbZfXigDtTa5GaMs2JhakUTTzPeRF7cjHgZwUGMy6nMgu2gcRWdYino4WxHZkQfHJ5b",
  "key19": "3B4gp6Qod8iSsdstEcM1DDdvGwK3JPs5miCMhqwpUfQjbyJd1jJmD5wXarTMzY3yg95i12EnGLBvNsRE1FxLsVHu",
  "key20": "BeMJaWDRzrkNsiNnKjPTvMVkWfNoXA6SKKDu2GUyfbVMWxkwAWDA2gCbm4s9yYLQT52RKmxoy6eiZvonW49Cvop",
  "key21": "21Tuopwc8eH9uN61cvWAibbc1kb2aCwm2wSzRaak2RBiJ6XNyZ9kzRckHaHwseNujfrE6z3rYT7D26tKGKe7ariN",
  "key22": "5ZEvSBgPzh9SzTXndtUPkA2eRxpEwx1msXGoQ44jPY2XqygyNDMWJjEx6fpsPgc7c1SJmiBjhFA8d6kPQrGmoryF",
  "key23": "3e8KeKB52UxvpqtJcjEn4pzNm147Bkk6Mx3Gy4itC1udAG5yoFFr7njfJyvhXaQ9L3oQBJMFD7rUnDxnSKwXBfeh",
  "key24": "5wYBEjNKX5dsgEvmzsmJHCoNozkuNGYN5fta7EB6mZNeCsozGqZxBksdbHUcz5JdKnXGXcwgveYJiX65L4Zq3VRJ",
  "key25": "2Cb4bKcKZQSxjuNYSFnfZmJC68PsxAAi29c6k2svVwwouh3VReW4Q82i2kdX93dHWa5NNNbUXH82FtpfbguNW3Ld",
  "key26": "5d4w7pL6rZMdtTUYSNGWwKBhdog5YPxeUHkjwDqXUYovTNXRcQ3yK9bMB3o68mnJ3T4FdGtuWc7koZREDhMVyJSR",
  "key27": "4ayENxf6nrvtjCvicwn6yzhbGWBXzjK5dbACfxdhxKb1Ntz7ry7yShfaVduF9vP28Crr6viu3VY1MvbBL2iGZJ8u",
  "key28": "cAPeNGCZzu2Xj5NANZ5aXvRStQzzPGDswUjbnjTpysK3EYz89MaStq8Rd9Uc4e1YxcmuxJEgKZVnUArVnbrftBD"
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
