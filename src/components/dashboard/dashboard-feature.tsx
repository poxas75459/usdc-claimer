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
    "3qFdb4ayXKQnU39PPmZub7RiNrkiw2mkarjtVHr7ziq7WPzCg2Yp7T4hyEzvraNzpip6NnU66kHjytQdjfmFZvzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bZgRnGHKgeE7HnHvD4MS4SRQHjK7A8m5Gb3xFL1p9zJadXvfnQaLjhXDzX7xD33KBDPwHpagabKm1pKwENZKgi",
  "key1": "5KiLDyY6qwcWKE51PCoPAqegN93DXmXvhoGLrWpYmqSdkctiLArAfPsPTnhn2HaXjyfzSypHV8Dvnw5vFDP97DR4",
  "key2": "2QwFzV1zB7NgdqjAa6ypv8EcuW7G8eHtdM6FxepGLw9Q6su6RShFLiyfrrHMFfPyZeNfZTVtKG2Wh1FjPyHuqNzm",
  "key3": "5MaYtoTj5kjy5NUrMZjjzRycCG3FCVUkGD12ohLGAqRPDfLRHBGyvPDREH3oQQ5jrPLLPaRMQ72t5W1d6MeZxwAE",
  "key4": "5PDwZ5LnTVpk6yW13gCzoKobfdbKd8vcYfxAPn8Jdyi5xhvgDSeF26GNYiBkwm6UiogeWYHyNQAz2oUPYk1KGyK6",
  "key5": "42Ay8gLojyGbN67Go6EQAAaVUoGig1Wq3GR4vJuEptHf5hEdVvJUwQuMEB4vi769pNfrid4R1rLXpxGozzMCkn1z",
  "key6": "16PJoj2Jjp7LRfmARp4TgxgspTAU4L52Q33WTHnP2ZbzHh8drN4mUzxDDjT7dhEvhq1fFBP7PCVee7Mcz57DPBT",
  "key7": "5XFjVtiNn6Gf951RQMfyCFHnLwZ361tv2gTBWteKXHzkxjUTQ4f16drd3UVCgi8RJ76tZnYzRrnp9d52Tfi5bMZo",
  "key8": "3JfDCGFZSqU6CzNhqoLMGeoWGgq1sy5XcCMuey8VzCvLfhzxtTLCLUDnUY7JjQZPQaDWwRvZZkis38U87EhoVZpy",
  "key9": "3Q61sTuTeBeiw91FBTP4vPR2um7T6skySm98k5ezX6yVhCo3ffBtNhDPy8MfFbPxRTWBgTm8TTkMKUnRPpESXXW9",
  "key10": "4UqfjxztWEAZyqfq37TNyF2SDYjuHktrzqf8yAyEncSbbbGj9efkZ9FbRE2xGvGjEoyoVU6LRpVeR5b2ZEN7AupN",
  "key11": "5nTMMmSc4wy4db9z2GaJCKUPWx4o9GzFR2XBZKHEaJuGhzVmhYc4M897RDhzf2cpZ7gh7qTasS6ZUbqtoee45hzK",
  "key12": "3YNdL5iYcHYQBWbfVV6tCdsaiBQhxTuP7N7Tg9u7bVrmhwvYv6HzuugK8k8RpAk4G2LustjBrgNMhjEGsQsfW6xv",
  "key13": "3XA8eUmXMM97NvPNXMVxG1nrS3mmauGYvyZYU6Qp1smszGPjFkCS3Ne7Z39Em4rEJ4sWuB4wz53MDdwD5ozZcz8H",
  "key14": "5N5dAY7qF3m3Rs6Kbi4WBqR58GjtdgSBfTrkwQjPdpJBvq7gLGgLgwZHbNKY5Y28Lm1yRH3AhaZh3WxrpMWEJYB9",
  "key15": "49x6HTzLn8Tj7T3dg4KSHkgiGw9kAX1wJ6oRfhrxiuHTZLfXvkYWFz55m2Sr3PmDcuxmcDp3b7EgnhSKy7598m3d",
  "key16": "MYA6jPp9dJwLuasbdWWqbdVLEK4NjjNwkgX5eZC4LQqAt6nhMMtcxngLq2CjyVY95qQsQzRqz4KMNbM2LycnNiQ",
  "key17": "3YfDfRGW4mR4qGJUDNzYaCeoYU3urk6UUFR7QUCXanwYfjhE5xX9oHaThQn9ra7GrrjvMMmuf34Y6uhZHXDMGpHK",
  "key18": "5rUcBARrQG16yWU92NS71NHP7vEbnDPnHHeahNjDfD6yZs61oqMeif1sSwvhrAzw9LmpKEJr1o2DbPXKpvq3Va5P",
  "key19": "rWiVqpWZTUg8JGKsXzhxmmCYB5a321jx2dvHquywCeYqGLyxgQFFfxi9ucxWK3LDJ3GPS58LU8nviLVXgywyrmh",
  "key20": "41kJg7grVrvrdbRNY172LjQgrgHpSzyZUVXHGXTtnm9tVSgng9nDMNPFRvAowXSx25MfBqktCKKuMy7HooePrgBe",
  "key21": "3dUyuC1RZHMJC72AsTsXxVoWK8Lhaj8Siaa34DGFHSrGKUcisf6jcScgptyLvh4YjGQKwARphZMtRCtxWc6rZYzQ",
  "key22": "3CQ3mjVqhbRnVCWd18C5zhcUr11PuUt9HLARKXHTKA5WfZsrFjQQV4Q7Za9RU1HLQhdsJ6S5EwcLnYGJJKsfiJ41",
  "key23": "2ZiScrB4yvMHvg9DZ2HgVi1hksnUJf7G9u1tiz9r5y9tVBSLavvyJSvhBqTa9hvL5vmcN7PzUnfFHkY74Xs1Vaz2",
  "key24": "cHA1kib5iXtDqSyUMEBZzZsVrAoMq1XbiTeVAiR1SQyh1tCEDjYTAwq9LMz52pY59kT7VYpqySfW3CTWmnkptkF",
  "key25": "5crXDoo3oonpDNP8kMdgSsodAEDdcWrirF5PRxCzTzaFNh2drphSZYmjh4iNuoB7wf8gRY79pSinPofvpHRcQiES",
  "key26": "4si7M6ARrpBD42bkq9k3aJYgnfQx1w991ph98oecWtESLrRPnyiFdKFHXKjgoRivvCovNfByrYUwWtwyRLF9qqhE",
  "key27": "63oJapayKoKsgVKKRC5Xwo5KFkn3EMShoW1QTiBNHE6wP7ibhomvRZQpTjhWqLywWVViQgyy7Fhnyw8HJi7b8DHc",
  "key28": "KJDoGRHzTGvsif5WDrE5jsLvA3sDNJi5BNXKnB8fKSye4pDGUCcBTVXEiRnK7S52kDcmvERFWUbaoSpyKTwqc2s",
  "key29": "3LK2DZnEveiYRojVCrmNVx934DgYETUBHnSYpiUNYHvAPX7GJ8CpgURGJuK3c2VeEhuRQn9iYf9Qir4m7bAkobBv",
  "key30": "5b5C5nmszLaea7WNqNm5BnKdfBAMF9CqKAU66RWKFaGM8hMsNWXh5QvwRzyrxWttJSEdFWGMJwWvWySxdE5Fy559",
  "key31": "2Zwz5bVQYbMFynHQrqqYV2dbKc1BnU3Kof33rNEQQtY9SfGMZBA4MXSVabVMFuwzkbkr9DVp1xtDKFXWVjpTJeGv",
  "key32": "4dX28ePX4VBGzZ7G1MdYCDYSxevYRRsGVjLNd1mgFeXLDNVtcKcjEdvTeyRzDCrXMeF7kBPipYYHN9RUnUTKZ4pb",
  "key33": "5u56iyziy2k29n87Sd7tkDzbsSauimWWMYGKRhQNLnE9cxvda7jwU51fPKSUqi9kCZuheiqtpYY2px1eWnm72UgR",
  "key34": "5J1PLUm9X4YSjrvnxe6xi6urK2mqqxhTjD8KnajbSH7wQftRWS6MPd5e4ax2RgdExzDbhAkiZJDFj11XZNTMD7oE",
  "key35": "MtjjJ7e6xEm2DKm1Z4aMHH9aHeHCRnkvu3ENtfANE1H5HjcGvFfjJBCm49kfNAChp5UBbArNvNKsNwHLPJukPhP",
  "key36": "3NxYqKvsxzV8TByUZGrdAGDtBzZw5fsH1jik9jnUhU9phMzmPhXNNjBEpYP49mkFpsSiKfcDkHcgx9sBTQNnizhW",
  "key37": "ciDEnRqybmFkBLNxcamfzJB7uN6jMbmnAKtEnFPTnJMc3k6VRw1MTC1X6GH8zEFVvbATAMJyGjy1bJxf2Yogupc",
  "key38": "3ki4mB4NMmtK3LqjrRVo7J4usTBMfT1aaYsXiWd5WzkJGNBKYikKVQzbZABpNPz5uAX9oxYJ1PweVuSBbAo5w6EG",
  "key39": "4wLt8sDERhS3MzLGFv4PZ7zThMQx3k2z9FRt7TYWNj6Z3GU565ikEibwyun7HNf5MgWN6hdy2LJg6hz41SFo9Dps",
  "key40": "5C3VkErXmwYGVyQnUZK74gYkY6bYBSKNfsvajVuc3iU2zg1sy4uyTu91Uu1FtXw2LsUobZx8uq7FDcGRGenjF1bf",
  "key41": "5yNsLcV4CGGUxQ8NAofUHvB6HFjH8mYr9GsDcXtwsfJM8uETBMTCFQzsdNo8XYqP5H9fzXKjEWGnjaFfvZ6shLCD",
  "key42": "4jyqbPUiuwQoMYSXj95oUq67S1BhQjd86pKoBgru4saHCmuWEVdgW2L3sfDPMLwtuXdrxw1zFNXVySave8XC8bE5",
  "key43": "4at2iNcHbANuYt5N77JF1RfeRLHKxjFzEw8QSxDiSBFsctgyMTaVgvf1R4Uxoe6kVfsTY1D7Qp6LYRZPQT6PcVjq",
  "key44": "5AWd11UmDkcMbuAn6Gbx1ieo4Gw72xjP9VzsumFnfHP6g85EqNnNzpjPvP2hg6r8RaRJMcbFfAW44oncNxaLajnj"
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
