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
    "tMpm5mWsRpUnUunGfjaQ6UKD8oozK1jDYewXKvDUQhUTzSrVXscn8tVbvzgfyKBhpZZrLERMin4D8LJLCKFnn9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dup1YHb6McFEhUD5Gn7ReSEccjfAZWzNWF5dsYsKRR9x6XuA1WjqfK9GQ6hDqjx15RD2729VdK82s6xRJAwiW1x",
  "key1": "4W51q6bQrHRZDpZcUWQJHsaK9vgFi7T9b65Y2pk73i2hrTMdPdKvf5j2oauMBEFmBgHqYTYY8JiFNj3ByaBjvrkY",
  "key2": "58TBb7KMwu3wBVCURxhkWefvuqUqDUkxdsPPpQqk88srDZjNN31bSAQjE9xw4MuVUMH1dcP2JVZdwXqPvMgJxkys",
  "key3": "3qsjaiH1TFSvxDGooYaB7SvDrVZwDp3zJkbqNnn36Q6CbxPfVDHemCrigeeuWV4f68CHQaVLDofKhtnpWQExeZWz",
  "key4": "51GEhoh7jvwJz99jfrNnqdHtaqqu1ctwqJcHn323gdtuaf3oXwkCs2ikdSo4yDfWx6gnXG3uPDSxzJm9HBDRyDvC",
  "key5": "3NKNvqT1oq3bx4FposZc85z6S6BBMAxdnzWtYvtGJSumzprsTm6uWVBwFpZv15dcjaC6dMJtGZNBKCKnKxZ2N1K7",
  "key6": "32apSgPRRknY42ZpbjUsJQbXQPVHabnHqTU5M625ThRj2fyUAqvu1QgTExfATUsvSwQrQ69J3kidcDJ1UJFVNYEE",
  "key7": "3CmV3V94p4797gikGfb4MX3hkw2m8pHMANVhojKvUaWbabXfJi46tomirwso6QFuZPfB2GnAqu6ZuCRpGCaDXQvc",
  "key8": "5ikeMgbKMtVnFEUxjTpf1o7r7g62VyDZEC8DWEUTXzm2FC2HifRpy7Ev2vtGrRHh8ekhs3VZ2MpZ229UovsyyvAD",
  "key9": "5uTeJofPDWRa7SBGFv1xzeJHvmt6tSpAakmRLSNn7xhoproNHC6EkMX4dr2VMFNiCny6yhK1h58MnC2qz4DdjPF",
  "key10": "67DjUyynXf5PNMtMDyvvSq8vgmaWdR69RzVqseK3q8fYzYm1eD7krMRYCqcgeu8X37gBtXWUJSDvE2qvU23Swot3",
  "key11": "3rsxUxVFfW6JBQQyBSuXfcY5TvFQytYw3s7Gsxkn2hkC46R8R9iS6V7XECcffUPmo31Ygsa451UA5ytziQanmW3f",
  "key12": "4w3nBWhkeqmTvA827dMNhQC4am3v85kJidT6isUdrB6pHwAEToGTTfSGnxPjzeVdttpn7cf3AErWRFZ5dYYUWG45",
  "key13": "2tudTxXLDQNAe2iV5JnyE43nbk1mmbbXkwoypaK3nSEJ8XKWbTRzChtPRpa5UAV8dXvSduuoxKFCsmV5ZQjXG88B",
  "key14": "5hteuVzGBp7RsmbaCEpff4UnBjZh3NuWgp2GW7mGiYznByc8VdtG3Gh1zgU2xGz5pYSobbjrhwsAhe5XyagG5yxn",
  "key15": "LNowPxhCwEkCoBxjhsV5CEWKhPYqoP9xZ3EbxKZArCYJ5TqwW5tb2Ck8zBBQjRzoNHMZLdfmZ93cSt7mBb8xfyy",
  "key16": "M9CQTG5D2CbifseuyyBs7n5HoXatAkBBc6fGiHxiySxAzqfRwE9zjYKtRYL2H9uWMmro9crFp39VUkwBPP2W2Sy",
  "key17": "5E9YYmbAPwPqdighJ7WiSY8QZ8x7JCoDAmn3jE9ZgcmyJyvFP49sxcnRuDjwLHo2S61cECVaeViBEDcAgn6wZ8CD",
  "key18": "4u7K2JAhCHjYCrnyop776AU9a5WXj9UKaUqYCbYvN8iEJdfm7G47Ng7UVAPDhqRK7voULPCLXpvohmX1pG8Ugztp",
  "key19": "3436o4NKoMxaqkT7AtEo5zERZaVijG5VaR4SMigw1ZBKuiCZShLhH5cqngac4s8pHJqEih2Wm9TL6gmZwRA8QsN3",
  "key20": "59fNoAvBRFg2vPVRWvRbeVcLdXoGDWjkg7tDg1ncr433Rv9g1iVAviyuXHX1E13hjSBFch3FZbkm8F17jJV32cdL",
  "key21": "2E9okd5ES3vnCF1aKqJSGKGmLWJMeMUGoizp6HDqe4cGyySEP8gn6Ss8uKnHY2fG7d9qox5MNgVukiuA7oisdS9G",
  "key22": "7K2EfPtTg6XE9qmibFVUe3BTJxJmLo1MU8jkK759YMuraJqNhFtZbZ7pxyhxTfTVT8BYxa3qPw4FrwfQVikcVUm",
  "key23": "2FpZc88XMWeX9KbQd478EpUcu4H7i1m76p7e6C6TAsKwZCPpG1tvNfQKKgTP49jgdxNPS7rXKh7tfiXxDSBAnatE",
  "key24": "5Nw4Mu27SioqdsduoWv2u3DfSH8TmvhaLaXpeLAftSd5RGpM6rPTiHNW3y3nfDm1b5nL8Z5EY3Fauxa7QFKMGBKn",
  "key25": "5oEFKjm1D6ykADdtazVNDjaR9uvvtMJSuw7D56Eju93kcJTrrJCpZHMGrKG8o4foB31cC2VuTeKoQJ3ya1MME5Eu",
  "key26": "Vx29AC8s7GuDqMFkdV3789E55rTrZfAfCF9Azxy4zKMFoR8YZe16qqBErXM7UoeoA6w6ThX5fJN2vBBJiN9N86E",
  "key27": "3zBMPtVGzaVWZBLwAyPegzPxeUnixJEE487cSf8YGHoiTQpDYShdDcxC61QorBPgaNzioxioy5nGkDUWMhGCNHv9",
  "key28": "26tHBvAeY8wXnqVUahDi1NGeifk1UdS7cfm6Vn8Usbd4VnnZPHKcFDD1SBqcKQbo9dFdSWEbLwdxdjQjPEZ6jKLi",
  "key29": "424ZYf49a3M8mZR7fUqiket9NqYbe4URtXyqHmzVRHVtfG1HCBvEHUz9iHRMbgTpvtB9kXJ2JyTSNmMmEnumV4Ly",
  "key30": "2NTtUtfms5Dkh9SESxbEjxjkkXH959r1u7rrAAwgGpeb6LMo1GJ9XqxusyaajTbrTkhirdAsXHkyiTP2nX66EtTK",
  "key31": "45BWug1K7EabhNih5g8sXkzSJ8Wnm2z4U1dFPgeN642R2eVtKCcnTptZYLV8GqM3Gd7Kkp9Yyb9wd6fckU6BK4oM",
  "key32": "3EmBCU23QxD2cYJ6MjZMxHAjVRqVa6sDVj2BxiubjG6bqcWrRTAptAgX3kHYoum2i474PuDn5Nirtfif7BmJEoi3",
  "key33": "4QeYLF1se37gM9SE4AEVaBg4gx6Mwo6JzsdaHrWnAUmiwyweLH2bgMv7EGkhufGzVhkiBRL37VbVbpRgfEefSimH",
  "key34": "3MAzip8qasT3KBUXZjSFudi3RprdvAx86y5whru5ZG1oofnvjjhsP8GEqM4Cqu3RaA9FiRvt158Q9VR5QDddDTaD",
  "key35": "3Ltb78HBmJmg6ZKRZFeUXB4ZuUKfuXPDD7NFF43x6yXfb7KBWmrYFTrQjV7exArHYYa3vmb3ciB9DWHcV8G71Hr6",
  "key36": "NnR2z1EYN2XAUiyqxa3bodi2SQ7bu1cGGFUZD9n43MLMeHnPFACsNGKXoELbWFB3G4qm6XfBRmWaaXarzqn58fb",
  "key37": "2WXfeFoYZiFpovKNF16TJ9D9kN9iRTRdzskdRCuehWeoviVWo3yCq9YydoVnd4rDUuQs7F8VgeYQHNEfbTdDFqnU",
  "key38": "4RgKk8hzz6VZWBX9Zpgohdsap8sdhwpedy8iCuu4RBTExFVtpYTDSMyDSGfnFthg6qhqLxmry9F2Z69RctPwW49G",
  "key39": "5WL5QtMpJJfFRaH6fkZhxqGH5W5KGzt533YYKJ1bFaBM2uwkPBrTwfQXxN7VsnYpJ2qxPrQmi4oDivVS7Lzx9TY1",
  "key40": "2gxEqFK5meYtmtZsCiwJH6ovaxYhgtstn59ArD3ZczDNFunLm4h63BYXa21gkfQ8hkHhZ4LnioFA5MS4mHt28Rzg",
  "key41": "4Z4yygtyrJy2YU5nG6sNDTyWoHb5xDetrTsLbJVW5kg47KjLdPUd55KG6pbUyF4oDSnqV6u2QrHZvc8wVNFZ6ecf",
  "key42": "4awcbAbJuj4FBAKkS2ZNfw3awigWb7U5Vfg3QCyFoqxdteFCHEKzoFgfnKV65WAagHsm72q6xJLgPr4v97h73ALt",
  "key43": "59FhHeSyKVfLjwHjmmYgdBkSZdGyUobmPFB865mZNfJpKn5AVHg5wti2E5VmsyiiENBc6BjDHDvcPBk32bZrx5j9",
  "key44": "scxzmqz5HrqtXDRAK8GSwdLaC5f5Qb4KcHmXGaoazrC8myk1tn5YeNyRGJEbb9LLtsi9soR62pQ2MAb7SoAxF7Q",
  "key45": "5U8QmUViRJ5qSdzwqrGMg7zt6xE9kH5kMpUkGFWQAzfZh8BJfGSEUmDLqohz1ch3pJBygbB6jgggtya2vu717Vie",
  "key46": "2axa6rZ7wT5wVCgXqgpMY8vopBRZLmYuA225qWMVDMh6ER3bhSuH7AjPWvWt93ehWv36gXppBpGG3GVe6X3Ex4y1",
  "key47": "3oiYgq5qdoMRti4x1WVm8a7D1BHBUeoY8LD3UMhnUJUBZvsSu52fWunT6LArcvFgdXEaSjhefRNvQBd34rMhei6m",
  "key48": "5rNgBz4wNqaaG14UfyfFsU8kPgCZYLj9TvccKtVRZyyncNF4XkHAQkxh9JC6vEj7ZK4pYPneLZLTdHFe12gPju8N",
  "key49": "JEMbCFfQFKmnvFDQYGSo5WzPk8UtEmt6SnderzSFuavREANhBFD8TvrjktEFPzUuBbS9sEyVULdahW2XK3k9MJ4"
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
