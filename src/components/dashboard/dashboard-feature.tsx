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
    "MWCyct4viGYfpy3azoKFtgHEANvmHs1qs6rHP7a5XhLjfNrLN7Us9Yss1gD1SCqJfmefzLi6cDSQUegKNQXcu3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwEKZ5mEJqBUDKkQhDkC93f92tBDzLwFDzejsmFHZdPsGYhGfvGovKundrrf2Tq9tfF3TYQwpV9BYhCXsuj6WAY",
  "key1": "zziUXzfYQJYWTRrPNgpENpWnefuS9hAQufANooCP9hHWSuEPd5m9mSftEnDXc3AAzjQDqzdZxR3nZJwEpZ6dEkd",
  "key2": "29sU2UWt7MrvErBzTbYX5DHNgYH6TwZHJ6ZfYsHzApcKsaUJ8tS5hqYhvSJEz3ZuyJDQwUXXACFmMSFyJJPPDF9W",
  "key3": "5syW1WHPqNQRckvDnBPQLcJHD4BDNiUXwmQGd8KJYAmKUeUmTGGFqEwBHm4sD4LkV5ZhJUuwngp8FxbRAWDKRtiJ",
  "key4": "3kZCUneBzST6eNbGbhFHP4ZjHUDk1fhJRKYb9pXDDthjMymxBNS6mEdXqhUbBxJ4WPSdJVdYpu6XgougFx29B3Rj",
  "key5": "1ZvMmFZdahvbJ59e99ZpXYbTK3TnwxRwjfGdoDY1ZW16YWW6rnk6itQCWD2V8oD44to5VAAxomg6nHQjH3aDg4G",
  "key6": "6ydk5sBMF4aq7qQWNMxX78n8M8kJnThyPtDVkjogD2Lvf1gp1JUSPCGxUgpoBpFfNbZ4TMhit16dnvzTFCrzka4",
  "key7": "4v6q7uxs9N3BhC6KsdE1yq2uKqyZwuX8zKQUhfwNaK8FXMfcERF1teqMGgFMkEXdHHQArVDyQ5fkiFCxNxVS9oET",
  "key8": "2wE2eKvDGKLtuqZMwSbrARBZ9rnzzHZc97yeDnQBFvzEDFZzmVUjbwyp7Xyi6egSZgAPVUvxWfVEr8bRT1SkWab7",
  "key9": "TKQxLbLw1HbnTqQJBsfqnEUdHyvKmG3Qc4MdXUe7V5iajvkWCs3ie3Upaza3FNvhMLYtmSK3ejB2LETubC4XG2K",
  "key10": "2vckN25GG41H1kExzheqzupKJ1zr4D8dcQZeW3tUaaTSSCuyNe6nk62ujaFEiNspjhJbnyxBqgVLUJGUMVhqsgba",
  "key11": "5cCoY9ue5SEHQf3d3X64NMmkrNpS6acUPauNRLDELMvCdaqswmv7FTcw6yrUVeSjckQAswYmw5bCSJiViYQnLHP9",
  "key12": "3Ey1AaBZRzVRWxaeBBNW6EeRqhLbkHNyeqAoLzinmzUZtXrFG6g1K6WpK1ZaHCx9zvGJuD9tzBHPcuQufhpcT5Z9",
  "key13": "MjA2MCY6jFHBbpskCx3Mm228FTvJvF2uBN8fgd8BzmxMQTcneMrZ7zUNz8dG2kPocUsd1kKG9pD7FdeRr6xqgu4",
  "key14": "M4qVvxfPe7EbLg1i5nzsETcNpihAfyeu4LcqYFCJhcg19YSvETgN5xF67GAeZfJz83J16oJpkr8B23hSQEAQx6P",
  "key15": "5nBf4gXRyGG49JHUN5LZhNbwCie4SwjYAptEUjAgboi2a5sY5hcwqbmabBpC8XEJ4CMbiYQXNiSkS7WohEAjWPPB",
  "key16": "5qhviVPLwZUcZudCmuCBBogP2S6swhB41ouDXbHUYFdG93n4VpVm3n91wZqMNaSnTmPfBf9MUKqjEukQ165aeHc4",
  "key17": "4MZD3RhYkunpD7rfLS55MgwnTPJ5MLWYKwt6799ZPtneXw3CdyWjJ4GyvyoFTsJASAjLsanao8ZcNj5dAAriJkrT",
  "key18": "5KfrBzrkYMmJW4YSzyeTy33nLQqHZYrkA1avzawknSb9b5z5RfdKvbneNE1MZKDzU8sCZ8SgTidBhvHPi3BHHkwP",
  "key19": "2i4BY1Cnqe95Xg3Re364iJrGiryyyTmuFqHN8MqrdHY7Snj2b2rBviGUtrC1xzoYhSCvZBfu1u13EfkGCMxP7sLT",
  "key20": "rSWtWcAmGpV2zj5TbVHxJXaDh7paEnVkRFhxL68NgCfLZkqT94qQ88UF1RSQ6Z8DLxdJki78HgxHfvnDmUX3z7H",
  "key21": "46XYKn6Bar7VwAK6VQEUnhFTTEPN7xEXM97EhxHdhnwzn2GGN6jWWpDkaTK1EGjegJtBqp5Zfpj4JLGguHh3Fraa",
  "key22": "NH2fU9ouJvXiUCpohLboPb3FV3SxZmjbBdemptmsmE2vgbLREsox8K7BzWqgSEgQwStEofiDp1tJffKfoPYiwrJ",
  "key23": "8BC4ExNU2M2ZciGEFcsBBLQeGFwgeezaNbexMEpy8v4Zsp7fAtuTwTebceMJNhBE3X1ezARmxajPqPNZxR5JsrB",
  "key24": "3Yu6K19W1gjTC9LxsNdFjceU4zggKTV8bSerBGVJK7yu9eSYW8UHzmuJymjvp2PDKKg8iZTxVKTp35REiWdV1qc5",
  "key25": "3sVHc3uxgPTZnRraCFNWNL3NKoc6fKMGiPeyNNC3sxVH8fkk6Cs7CnYQL4Ls3kohCQyBEujJKcPaTXLVVL7HASqe",
  "key26": "293Zpmuj1VLRQj6h5sbF3cPduzW1aaeabUfLVmYP1cmpW9usRrGopxYtsQPDwmKb1phwXjG6SxQgauFpzaAwbkQS",
  "key27": "59o5rXYdePdDa6mEVLaQ7e2x5WfRiLm2s1swbrqAsMoJDj3LC3Vujki5VCDy5K3xUc3RqJ5mYnGdCPaVYmV8dMgb",
  "key28": "3ZNPGfvcsiU1SNmaEfR9ixKnQqYeKa3FyrLv3aZMf5xivDSJJx2QvpwZCvYRrShKZnfGH1EytjmZCEC3L3ExTfNZ",
  "key29": "4sMbtEmZ3ssQ7AjBS4namKBrqhTpuC4ETzZRzWF39amnpNWgCHwdXdyPzukCRYUePaC9ZwNVM5bDFVAz6zVNv71",
  "key30": "3k9inM36rXSTfhmB5iL9Hyx1H2qX2Ssv9W7dgmSbr6Bq5pSH1oAiebTH99BqTJq6LBkE4vUdQb7ENFYyieGBP9AQ",
  "key31": "CaKCT8PcVhpxArsUcyGqamDSc1BE3GTuWY7ouTnDYimkKxQTMBvHGHiAfnAbVNyrxtkaZzUWnMq3KvNhBBDsDnz",
  "key32": "4f6E4dFuAuKfXNyF16GeL8Mqn4mXQr39hAexxzwvxtCVh2Y7fWti2LYkz7tczs61oBP7KiBs3vL9UfP3UX6DoMWR",
  "key33": "34tt36RKKi7UanoamqR1N5qQa6dmAy3X2P2BRAexiAmci7mxASnv9Yjbd9NvmqNzajpqRt4ZoLtLEQbVcoiQmKnK",
  "key34": "2beAbrR3V4VxJn8RQJW4z8SB2a2XrnjXDzh4A3u4hW3KZu8gTFLiJn1kJ656VxLrL2ZPgvw41McQVQU7shHNQSaj",
  "key35": "2ZqM6uzDWgZezMMYu4zSHREh2jqNmNoFgvZTxm2JYM19YEDgxEb78EtY2N1vU4yTVTFshZRgpaxWXrShmCRpQVUu",
  "key36": "5uwxy2asfs7TfSaQeormqeRxDkXmWpy7icto596v1gdJHhJWBtujTgXQyKmARfaJN61DADtXkWAhCJfDSkWyhF2G",
  "key37": "Ufze8YmnoKd3rKKR8PB2LbggV9s7Qc7tRETnvGUhuwDA6fbxYUQ3yfDCyT7NSoL2qMezUEj5vGuSYepQfka63vw",
  "key38": "F3XMubg3LjKEVNQnJS8UG4iShRuRu8RTWz7MXSqvELPZKdbDMx6gRU9vBShaEmxKHpMRBxTecpmMVvpKXawPsib",
  "key39": "4nkXr1HJnvn1jJnSGvJqLF4sBQuDwx79C148jB65Yed5fnhbNjcSztEeRP5oWEVFDiQmqBzH4dvWkyWSYTPtww7B",
  "key40": "4BEJAEHMKWLSMDU29Ld2UdmAxi2qDFPaosrxkYRpXwRkSgZ2r7NZhMikqLkvj6GNFkPMisVkFtEvMwKeFjDdn6zj",
  "key41": "4y6z8CqNmzvwQmvH38FFPNPsFGDAQ8ivw7fMw8amxACwWuA3FKBhsq8Cimod62Rxvriad6bnSsYPdkDE5M9GdQK7",
  "key42": "5TfbJmXyu9ghq9Vxdz9LumftBAZMCDAXqJepCiNerm6mVeaLMq1wNRiXhnzNJyetZExZFivqFGJxRmVdqAfaWGbn",
  "key43": "4PHTzPAQ157MHthSeWjT6WpddaySkKiQhCLLs4ddn1uhaWMr7EALTnKz9cZLd13SoyjBMEVAxXvt1of5wPy1opNS",
  "key44": "62XHPpyqGczouyf7sW9EXK8wtYMsg9xqYkynduD1qtndXz3gzS4A3tEMb56PX7pJw2MaHnipTwkmsfVh2vpvok2g",
  "key45": "ptbXg6Svi2uvtHZFfTpgbmZPnMBYwSF4G1woG4eNaVBvo5KDxBD89rha4Hwc8rJvFjLizpCMAUe8knYhunf7bWC",
  "key46": "5gB8tWDxzCvnmoQWXGuEf3MYRHMgbwpaCYrgWyEkkbygZVD2wgDFiJ2YsYoxfVsDzTGpTbvs8nh7cDEgE6wMxzTy",
  "key47": "4vis8EWDgsJmSuyGLZDamyrW8zYVU32GMw2kqz7UygN3pznLvtMQGHtW5B9VfMHpYrcnDKhcKX4uGUFGE8NJYFUx",
  "key48": "61g14nBJa1oiBn7kftaSVM1XhzfcQt2AgC4fG6WGo2aTyBNeV8qCwMK4LkJCCUwotSHBE2Trih8xnSkwAyNPw89Z"
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
