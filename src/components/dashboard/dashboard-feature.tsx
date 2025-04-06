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
    "3VkCfzigTnqtG28gLbRsmrvK7iVjqmqeunVBwDaPg2ac3tP1Z4qk4TDKWJT3eHXgVRp9rvUsWtAJ642z5kcXHyBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buuYFbuZy24BtydowRXh7EWkYPhu54sUuXNhNs8F2e936ccPVcxkRby7KSsYcZsarPHxuXZjhkhMgC3hUoJ7kuD",
  "key1": "52R4Q9K9z5EkK33xwHsLS4FCYMHSsnTtUSAQv4UinWeQ9XxQdaaZ6oim72oMBrx4n8FAHRonDw4jPwjTU5GxzGxF",
  "key2": "5Np6wEmguX1ihSAn1Mc4xXiF8EpuLcKYiVYzD5sPD2Se1jSDnuzT3PQuhGokU8qfksbiXNheRYruTKi9jNynwcVX",
  "key3": "4MmWtA4cU3HcnHjwERja1XV29H3fzd9aFygfHNMJcYv1Q5PcyZnhtNwYQUmoq9k49S4s5DgGKkoBYGXxXuotGJan",
  "key4": "KCPMSw6N22jG38TbxJN9KbXjgQqtYzqu28eWDh1Ecr8SLY3XeyaMpEz99QpMEL4dHH9H3PrzwyuqiUhQ7fbantR",
  "key5": "2Ht6SPgkUgk3ktjnXxuuSVHS9eGubiVDbzMExRW6vnAD9hQf2ywq6eygJmF5Nw4Kn6zLAWMSCV4Kf5xVbmB717gS",
  "key6": "DPXYLqdQkL11jjqdPZQCADB2ZBBkPFBmoAMdKkS97nc12A9RXnCcTkAEDyWd1PiHY9ZACC1Kj2gmcb1QibDn1mE",
  "key7": "45vmbdSepfTfjvy7PmEWusstQAr5UXCVMxiHYhP6NnuTJV62sUcHd58iJaku8tkZky8yzUs7JFT4t6U6C6DxXFXg",
  "key8": "ydrRxuGPfHThc57wLMUwauidJrjr7tPBkQvWC7bgKtqQGP4i7yAwrpAezob36WX4iz7yHXdFbJYUpfBkuWmjYdc",
  "key9": "3sppGWXg7aUTQZsBTHuH3xRxXUGjaipe7YVssSWERhUyoSJ9NrrTSvVGonVihGWb24SXrpcsxYrQ8e3BB57Ea2uT",
  "key10": "3dxHaF3MuHVCZezMxkxZyfruNvc8pU34WwmKreLsUYM5o6U6eeaAKox5hRHzvHTtC7ectzEdaNqd76UX4fJosCms",
  "key11": "2uSimPscVGcpraY8Ehhj2GQ52Upuc96UNRCX6Y8LSrFwXic4xx3qTVSZt5zvTmVZVC7SRB4nTsGAEprizoJWo5Dw",
  "key12": "2AjKMBjEzJorRwbLwdJmnm2XdZ9JD4dd4wmcSkCkzchTfi8uZmWr4sFDnTMGKb1PkaeortNAinktRbsmgcveWnsy",
  "key13": "2JgFVcsbVoQcYw4P9gxSbzvKHYU4xaw12MPA8fssR64qXTvM23nG5TrKoQpdJEeJ8sQScSmNKxNFMsnJ4yoMzNq7",
  "key14": "42UBxUjAoLmcgWC1VexE1iCSBXs2wEmu9viEjwpuMD4F9xPQojBkgiDsxeqFzFRLL8GBGKe1Yvizf41zLiskgGSL",
  "key15": "4MshbjbagoiuAcbtPorw4DCtHDYRxGWjUBjoUXxRkEgLdd7Wd5XrQAhGafZ2ux3NXXJiMkM4ymu4vJWfy1i12tXN",
  "key16": "5wcS5qUuUCxquSuTK85yvd1SAsTAHjnxvNKMXyLeFAd2hEmGVL6pvCEPKz3D4QXjqmKPCqNqKKqWmkYHqXvjUHrV",
  "key17": "5Q5SgiGVYEfRm2XzkZFu2cqEPoKXqcy9aCBUKEe1p43D3DpKPJ59RUMz2qLEfDooUCBBYxKPwWGqghC5Gqm2rWtH",
  "key18": "2KNn9JXhvpHSzbTnL4FxGvsA9kwjXTbihjP6F1mE6YhQgS3o47U9dh5aKCD3ZTGGjJnaj8sLV2g2LpFZXk88ZvSy",
  "key19": "2M6uvftoCP3CrbQm8ugdLQmjM2q9sVsNniQ9FjrAbBpiMaCB9QKLQT78syoN8b7VkURQuUZN7eRtVZFJ6TXHL9o6",
  "key20": "23NdN66PteLg8q9t4WxhD9Q5VLCqv1a5JfeEeuPZV5PJxiUFyBYTocyUimUoqKVWqLsynjpiehUkFXYuTurBSBeH",
  "key21": "3JwvQrHdssiheL7Rawi6zmAgb4Qe2qVHeECQfL9cbmzBtVCTCzCQmZMHXXkwrhFzJhFhwP7ahkwKi3sh1JFADeXy",
  "key22": "5zdbedHBN9vp37BLEL11mqX3DtwcX2E2UEchSwSJipySQbCf4hGxBNwirZRfG2HcRpKkPfrzW7ZjKargLHeBNcGB",
  "key23": "PCCNBB5UxZfEnh1rz7pz1enywxJGaMy1RXTgFnSfqWNPYEEG4TRuB8NFhtKNYGfAoU8pniPkgssU3UGpEnMAaj3",
  "key24": "WJ6osFiAWQX1rVSKTdMdh6g9SVuUY2FviLfdsJDzo87CvkZ8yKrmq7XsSEBhcwb4e6Sf1kxtxgBVdhmCGju7cbR",
  "key25": "D6FKXmKVAJs3pwd6pTTWoo4p9pXvP6PVMnaUBg3UBdB4W6fr4qq1MLSmmV6zZ9R7FGWruyyLxU2aT23HGJDWSwz",
  "key26": "37hudcdhWnCJGBiEKZ2XpEAPYLTPkpochrVfuEeb7WLUnxXL4E7yP6GhexUGt71PmshmdyPYNyxYLPzMtvYtpNNE",
  "key27": "3FoFy4dFxVS3uEM39pad9fgddipUpyR7p6hCHRfXA47a3b175tNMKGhDYXo5BC62GHhm9f1fj2LgeazeFaZaGgAa",
  "key28": "4Vq9mH4czocza4Ks2CjULZn7smZu11VqdQGMmnXzJA6zTttKA98DCN1y2uoNfayesmNeHxa6VSnazvXkuB16ctwM",
  "key29": "JcMjh8ub2sohBH71dxBR8fgD8fnpw8G1M3CoL8iHeV6djy9QfmvPFkffjSkx1pRBYQnaMcbJU16Z141R8JtWYPS",
  "key30": "4F2PZ8RV9afpr3QQuHwz2BH215dapNQgF7sUFguJsWJ1L26v563WSoY1BpSCk1Sz6V4rBepFyNXKzKV8RLFmCzQC",
  "key31": "5MTx36msys9N5VKRfccw3NaXpy1TnVrhQz7Wo4Q5D4GzDJwxjfvYt72cNUdeNHFQvTmAcUfrH2E2Rb4tPfrd3hAv"
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
