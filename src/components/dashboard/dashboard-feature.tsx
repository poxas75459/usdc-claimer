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
    "2jSdfpXhcwqhKg1BRmGXwxKE1JZXCJVnmbzUWmiuPHy13UzTFop41JHdzUUwqHsW753DbL9oo83LmwLUoBLvpD35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63jPGR4oDS8ju24rQqJfzo2WkBefSd3J6sYp1WnVYATQwPuAMrVkDf4AdXuYC1qKBFL417ZT7bvkZxsHxWsyeB4a",
  "key1": "3W64YUJv9CQjyLMKHU9g6oMXQ3qp59kpkfK7hK1czsvvnVpnFFGJg5LxUBDg3FbkRuF8KxqEBEeT6SaGqycYwruN",
  "key2": "35eCuvpn2Siy8U7VVVhGYhy3ixkgp9tTBaGG5VqJEobAdtGQyHxgV2DrJ3rw2NZvB13uJvSoJoS4xCBv8ApVrKAb",
  "key3": "2s73g7ZU88u1QMSaUSJP6yPCJZCoayJtUkKpgsp29oDHPbNz9GJSjCgQSiR1jRp2d3kS2xjp9q5wuKo3ddg7SJ4Z",
  "key4": "25HdQ38uo4ZVJn6ZEx6qrr2bX7CW8cUV6tyKxR9HNJJxVvPkrUZJC42fZpQMK48NwKjZSoLdcw2Tigc87HPpFCTG",
  "key5": "9emRBUFE4sCmS5cVFfkyGSWeGvPsbWX3PF8A6C2wPkLmiUCRzYigBdBPpc5G4acbrjG2kGYFDABzo65ANNRmWxh",
  "key6": "5f1AhrxR3H2mCJVLdEy3Hb53j1xGEERiVqsUjEqcs8PM2mQdeCtreZpfJEZ8M8JFHynnzPJrKB82nSdt4bP9qF1m",
  "key7": "38tZzEY5VUH2CUGgQGEHE1tdUW8ySgWe2a5PZq1sFcUtnXDxb14iuHU2Lqd686qM7Gu7HxeArZ7pa33Q5nNLXcmh",
  "key8": "5hsxQDey3QaMPvummb6gWHGcqrk1gNhDjX5sZ9dw3GG3SPpmjU5t8KBdyLUqH7KpendfVhC7MmDrqiUoexmwNgkx",
  "key9": "5rQ3kjeb2SKY7n9DszPgn6kp9Kbxkv6CfkAk8JBdZkBEu9V4zQsuoGkPEWC2bwQdK2wWHGX6BFoLufFXH2Liuj5N",
  "key10": "4VY15TDkshkkb9jebWojkuz4mMYWrmmJdYoiHdzzy5mVYw3zK8fgfE3WJcGEw17x3HCNTThnmjYqhzzbFMzXXwGH",
  "key11": "51N3LL6KvEdFMM69tLbC3a4t8KZ6EFAXfvo1HQCP5W71bbkhDZzfeMwSrbJRioX8vziaHpQsMrsvUjCioThFz99q",
  "key12": "3MHsC7qAnMEkXeCP8i5cJCAJvJrMGR3n8uP7XVspATSssvP5NBAr8dUDvTy3AXRfVhwnWVki6Aav6sQUHrBaX2Uf",
  "key13": "5zSZU7sxE9ppWpPBj4PhSauWUfHCSHGgjpX71oJH8DyC95HxF5xFSQAM7qy3kQmCjwcgfRStuod9X5eKrPSRVK8s",
  "key14": "3P68CZhnmapzxN5qzUxoe2rtU2a3TtWrBcbYmihjMwAsWBy8UrC1xfxdsXG3b6gDdNDMQZyDxUD6irnBJxNRoZ2t",
  "key15": "5UKydLZHn71LbKbM67VQmKccZXbzjnjQBaG7WzKK8w6pfMAKtcvTkbYn28doKssYTUkmP4XPYW3wMDVPRZviEiRw",
  "key16": "shfpWf1VBP5mDvR7GzwGcRgQKfuhnLWR4xhdouDzWHYFTHjm3fPxRZBBkBiqosf4WFYZ1XfHCLnMQdKVijrUSrt",
  "key17": "5AroMDrEwthEZ1dPB38Rih3zfnZmBPn3XTUaYUqJMhRLnMvnc9nb5DDjG8N6fDXGmWbUVUaQ5xra3aHqNV1BBTdw",
  "key18": "f5YFtEroR1Lsq516x9ejwkWEF5QcUHRt2eJy1edfhPPFPwQs71VrgMaN97p9B3LManUwQcEqBDt9uu9xBroECLR",
  "key19": "432aQUBegFikHT6VYjHP6cTUxxAyb2xPTbQUr7J9B6iUqHMPtrkkxLAJPpe4s5t7mf9zNJqPJPeQFkKeBXbuSWvq",
  "key20": "3C2voPet6aW8wR5YF1YGt2dZEu9v7nDEMbm12vSJbEP4SZ4h8Jo7NGrWSVWACngCd4DNrLJ4X42npxjcwo7wLMEs",
  "key21": "4xEkUrzUKQp7hHDgZMi6VPFU15BSRMhhxa5BTFTC29G35NFphceZjXvQAGetVqUbRcTzPur9oPyYL6wkLZUvrRee",
  "key22": "4tCdWP22JcswWpdYbLA3wncsnKXZTjJQ7DRe44ko9eUyiNt5cHo3u9oyZPJqshxh3zGWgSuVAidk9BVEdZLAz12D",
  "key23": "24pYUzgkQh1zQgdh7YmGx66nLKyQ59dsVpQWPrYwfrkZH5MgcgtZNYvm96UAWRBwWwMvbicDaXrTws5aVLxBBzRc",
  "key24": "4PqSt9mji9pEDkUxGfoZDMzE9mrgPtjWzV6JYWGmYg6SbbQ1y5Y85zcEX8RXCh6tYgCSLuWUsXKvBrZEkD2Q9Xk7",
  "key25": "2JVsRFrioRgNUNjHZwAB9E12Uw8aX18Govhb7xzvVRk6sm37RgHeDkrnHucjasetvY4LWX7fZtuYppikFFYfFxNQ",
  "key26": "1vdy2eeyp99jqPBTKo3XwecANvZdCe4ZPX2EcUCmr2yeX3JSFvhEjTrU19whKdZvaEKrLEUSxbUsSTdENEowfE5",
  "key27": "2k7w64fUbE2VGFxje7toYwi6rzHEU8MUFqhR8cJQ7siFpsRj4VwK3KrBer15oNTjY6y2KCXBGbFUMQN5oMvMe1mD",
  "key28": "XTFELyRY5DzAmbvwAFnRys6goyBUBx4XMxVdjzvNx3MMHyBswanfrCYEgxqebySSsXMZpvKysiqFzZaEH8d6CM1",
  "key29": "VPB7bUwVri1e2oGVojrqahnwaEmQ2zJnmXH6ztrWAcs5WqC93tftC4xMC2Vouks5rYN4wYe7K2PLcVqCrjQmQWZ",
  "key30": "5khm6icj18L3iJf7zTa8K2zVWwz97THzSECyp9xftB1ZozycPVCqUpKdrKeoJkHA6pQ4bqARsRcBJCT6GXCpTqdW",
  "key31": "54FtzCbiNt8aqsZ5M4RSo1ARL6h8Ptg7JU3798n6rbBR7ZLwHCjJCxMxhdbcSWjGx4RkxkoPJUvCNajx66C5nXq4",
  "key32": "4NrrbdAb3AGRxdHJ4J31nD7Qsa42w7btxM7omBSB2CKbW7qbiTmfKBxzMhrM4T8J6wQ5vkYs8KebxNkQfooErASY",
  "key33": "ALWfRoVh5TinbW4UZePmRTMvtWAxZQB3984jxJif4VDcFdBNpvys6DJUg19WMjkHcEdAUQLoXsf8JxGZMcNEk6h",
  "key34": "3S2z5e39Hp31bXi2jzhQJjDkk7DGwuzpNv7oQ9nMHxakSnmXjVRS4r7y1afiNUQNLMFpyCVN9ndDZaRjC5Q1Udca",
  "key35": "2M39Vuffvg8bfMbiG8vUgyjr1kk8BZSxdLPKe1q5Tsu4qDknrPah9aTLCzd3rALko28QFXaGAPnt6t6FYKQ7yoYL"
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
