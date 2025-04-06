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
    "2oUK2sCw51CCLuHcfjr5GBuBz9DCGPtkKNmbnJUwx1wCgNjwPtgq2t5pfqwzgbyR9kXZQ77wLKY8tpv77pRUZWae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eh4SX9AtECyLnK5ePpbBncboyqNypmT6Pdji2nfcMSFJjjZDUuf9tYJWdD1NiuPmShGDxJnimFVtwbm1SP6MUHM",
  "key1": "ZKQDHJS11B97ACDdDK2fa8m3hL4Uk3iRApjZ9jmQiF4H3nZnYXeejTrAK3FCQPcvQeEuE2zMEYTiidBKgNNB6FS",
  "key2": "5Xq5yjXXM1zHeoiADvH5ceBeonbwQDQj4ntG3oYwsTjqTAbTtAQMDjfR7tgZJRpkHNTcMx369QW3sK9sAykjnSdb",
  "key3": "3v26bMHrkcXnpMNe13eZvFtsUm7orjR55uGmAx9xYFhciWbAwkqHZWHqjwvjAdA8tV4jVYX21CzXJe8EWs1ddWoS",
  "key4": "2LkBhbPKheDQX4MqkzRNPpsW3MZvQUa6abWJkSb5YJjcvDd3pg8uhvLXcrYJgJSNCj6E5jYzE1qJq4AQqQD4Mm36",
  "key5": "4yEaNQz1r7SGrfDdasTG7rvFhwEWiwktVJTwcLU9aUe3J4uNLuWFsm2Epop4gKnB8XVXDUBF7nAhzJnGHQMRcMQy",
  "key6": "2CLG1jHn6WGM9j2j8XWpwTLkkgRwzGz2UP7m4283AW97RufWET8S7m7AUreZbgpUJe5aUwubwwLUE7j51EL1cUQB",
  "key7": "2XX5tuBZuBWbkkxV1pYehf4T7NAtLw5pRXrSRWyEHiz8jKDHVJvfMgg15jwLujVGWEPEoYKHSkJTMhzNxJeshBP3",
  "key8": "aGnvH5cnDGKBommzb3mnXXmTQXBNwit8EKEcA81oyCbJR3nbVEYkqQPPzkj2wHwy73fo7WswskczSVCeM6hvg3R",
  "key9": "3RP8zs5nC14wkrn4RMBMQdFGhhr8jZYJnmjQ3APhNMDGhriqufPfnnAinvddQCz4tJFgJaiVe8GHgSo5deg1zkf5",
  "key10": "yWb7nRkhCt3Pf5AGRzrQGudNwrNXeBAkQiHiFuAjCyFDMmHfWuZy5HGieDYf3Taw58oq5N5LF2UikuNWpkpjHvM",
  "key11": "3ypR1pLxbbPXCW4LnursMD8ogFWFMy7JoBzreteG9QwR8WfCo5nnYB6QvXT9Wb2igAEgyc3rAiCUQddLuj46nqLY",
  "key12": "2KP1RmkbfMa3VKrcrW9i6xmy9cPnif8ZEqPHi11up9UfnxFRNhae4VPr5b5xo7E7KC6SgU7J7P8wPaeSoVqZQzsL",
  "key13": "2h4RAf6jRD8dNEiNxbi8BFjxpKvwMSNwi3EBbrtiqq5f3qogE6bK6Qkk5H5yTh7QyzPrv1y8SYGbSQmC1aeuaS9J",
  "key14": "pQQYpFb5YgNWDAiJiH5N5fvNhVBCuuPQ4TjPu5LNCQ9bBmRSSnWZDD5dDm3uAoi4t9zm8sH3y7n97djaHrUvnMw",
  "key15": "2AZ5VmWyqBFb8UfN9w1RAAfCudtUYVo8BeZDZ89iFTnd3UWu5TJ4dWLPmfYLbXVegTNwpMXhmykvQMwPCNkrH83P",
  "key16": "2iCjUHBENgVa1R1Ufbmks142ySwJoRkKMk2dpigivj51FmDp9XuCg9siSMoDmujMy5xdW5dQHKcLGDrMijZ8vWim",
  "key17": "861qJhnNn7iKKYpwdDoJzQxDigc7EVqs3bcqtNeWxw8XhCxvwkLGW39nABEsc7aU1UejEDqtZ9mPd8Rq4Fy6jPB",
  "key18": "yUaLeBh66YvGQsSHMV2f8mUrjSmEeMT3kSw2VHBQqu9xzVnQnw2XDC5Xi5moX2nrsfgxY61NJLDYFqJ8Pfqdfcq",
  "key19": "3aKFxmx5bbhWnSHRM3XaE8rAmxeMBUNFp8R3cjvv4UkLcX94MvAeMZfryPhDsGQ2tGxyEYG6Lb2C7ya39n27fj4Z",
  "key20": "2BtF46znZ8p9kHjnoMBoJqHwkR1EK2SoqFyprzbHhpmaK9xyk9v3avaZwZrmCPF4xdNphNeWyLUAVfTrQJHAXhq4",
  "key21": "JjJ17J6uCZxGsRSe3hESeQVAHLPdkP6G8ZiDNsZ5uwEs1djHidgB9jjZcw3GBthCVKijgTcF7DVexfMSX5yASwy",
  "key22": "4r2kSraHgCXVKY943U8yWPkUcNqN47RRJCMFXQC2VkV5dur9febjXEkifptq1hSJgc8jY96CU1EFQA1LERJJGSdr",
  "key23": "4cvhmqKPf1jADhuhGAyqg39DMegfYjistFVUDVBF3rZ3bLSaWhd6FXj2xfhwTrx8XZB1yeS7Yzp5F8MAbVDMHKiS",
  "key24": "22tpSHKZPFEVnxW7mG96suLMLtFAiPDXrbJ6XLm5s47cXjzR9mGmZUPXzuXjZy8AjdAsBKmGgqY5NosSoZuocUjZ",
  "key25": "29gUrdpaqehM6FRK5sd8T7XEyRiJFpV5RcNyF8jtdq7BQ8fgdUajRtk21W2p1wpSckEyr5eNZBaXL7vtMX5EZvCU",
  "key26": "3DGNH7QMWShvvN1UfPATQFDvNppkBnx7xx4ZYr4ZMTuvqUYALdpyoLLKEjn28MZuc6iQZgq9fzfrFmXWmn7hKthv"
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
