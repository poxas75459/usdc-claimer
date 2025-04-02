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
    "2yweXoY517awGC8g1tdRh1a2QwCmcdUcHiwEE67mmDJUGByLsgPzXTFxgmpsypYHB65vWTzidJQByDP6qzDhCkDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573sVRSTGCj54Z9y4JT8N4dfjYQr4omEhugouc2Tc7hnYyaTDzyMcSxa5YSerGqNSQDj8iLyUMpAbrB9RB1GxDqn",
  "key1": "cvnzgKVVURYFTjogPgnovCtstsk8Pq1kE66BaoVHEebpwYCBEGLGRCGUznSKvAJFhGjMhe6NUhRBsxcANnQK6dD",
  "key2": "3n8XQ72DGE2hS6WEVSfMGZ6pndurZiAkZ3xyivwXbDGPYjbzfyaVsd3nKhFAipbM4zcKPJ8cfK3mkzULbi71oW95",
  "key3": "FVrZXzpGAjWcJFqAV7EvCkS5eWQ1jCRn4DHPSgKrHxPgVnWaAfU7nBhrC3dWCgZ9YDQjrrPB2qqDAaRinoZLBPT",
  "key4": "42buchUXbNBdwhBDBwq3iZcKNRiQXmmbhTLWN7meXNSof32uFKsy2VQ2HtyWzoQyPUy9WAtxqXso7mQgFNJq42a1",
  "key5": "3afERbNMkuDDhRuxUairoHZXhudJjVhrB8kJZaeAMovGYrFLdAoh5VHfaizw9f7wW7D3RN8y6sVBSaDuVzjj3c1z",
  "key6": "5MxVXV9vkX7UKtznHkpbJ9WyxxLTKMUfrDqoTuvhtwKwAvr99Ydz2rsC37EGHPLDtRb7bETTGgDW2sDt9Rc3qBCA",
  "key7": "2YmsNdiJ5NFWvSYTjL7vUYdnRwHTVFgcVzVdgo6adw71wwdYuZ4RsCnjJqYHxytKqeEKYCEHpk7DWXM78osiso3c",
  "key8": "2TqRDjzBRexPAEnGdF8vdg4Jr8yvvXfwngRHuwu2UGyv1CTrVDfVpY4jaK9hnBXtQbU5KXB4DDUK87EnZgH7pCbn",
  "key9": "5zYsdmDKvXbwUuWPr2ErHmcUXKyUhoXsxATeEdi87HwZYRJiyw2MZwLCf6vDyJzywAa3HJv24Der5phCDf7aNdhQ",
  "key10": "23yeCUU2AikYGWoidJYY1Ag58gPsf59D7hK3fzHrLzrEX4myK85gEXddjPomESJhcfijf2QKk2Mqbupu6hcUZi9X",
  "key11": "2ysb3iRSUZXfrq2hXakhMXFhk5MagaaCAKVzZTy1QV4syGyjZxcaD267BUC3SJ6X6fvWqmdE5PuX5SkZg9SW5svJ",
  "key12": "3yuFf1G3ZZBqeDfzhopAyEusz2rcRcNgNhrZAsfPCPmPLpTddZDZnGYLGw9a9gghvbBccki1TCKYFzUAqTwcU4ny",
  "key13": "mkLRL2sKrCEtGDcWiV1fCFL1hwiU7cTgPeWeW1xddJ2vxyzdZ8HeCeDTixXS3uzzKEsh6zrF4jmynG47qEqpXWe",
  "key14": "4cmZGuncjiDth7bGKkhUjy7UXDh8DA9B1DmHJK7DCWQsPu3s5fkKd1kSCx9ZsatYUE8RnGKMCJt2Rky5G84ehL41",
  "key15": "3L5c13o8yybfe8rckgTWjoMfBcXzrk9FVw7gfvjgXbPAXpfxrgPGmcjTgFKj7qDNK4GeQU2e656NaxmesETP8gn2",
  "key16": "31suvma2MYXCxpRbKBoAjYz2ujkTX2qMtbM8NphqxMu2KjnccTi8uc2h3wGhWGy7s2jLCaFMGFt4wyZD1i8Vph7b",
  "key17": "44tpSRiUoF9oNAfBYT43yb1Fb15xB4wx5rKbENAZLuQidmCgLoUpNGo5a6ah1NhHP7YCFSFWyuvc4TFHWDaFbNkF",
  "key18": "2J9rnHHAVjnty2GjfM3BXWmAzhTuA7FmwizX9CY5Bv747iUCFZSjT1j4Ec1S9zH6Rze1PgcJZpk99XmrrA9XdKsb",
  "key19": "7RFjzbrZEn125mDh5NzbvgFMcbU566JsXTQchkaPGXUXiwuT6rm4JUVqJ9U4Cz1n8QJ6efqerYSLbUGTFFHHiZR",
  "key20": "31QvFtWBznT3ZAvH7X36HRhwPpK4QWiny9wXNZ7dNZu4VgQK1mnVvLzRtHPfhgYC7CqaUqFa8bLPmTyDBkbwW7hT",
  "key21": "5vRf2Pm4MULU1A3X66hwigaBSSEyrhzhhMbBYmCJQd7bwt8aUfH8DcW9sqGp3RqgbPrY71dqToyC3Hq2pZb9112P",
  "key22": "rgpg6cjyX3NCdRQvGiZcQLutLNp4fYZGqawuxKfkkaP8fU2kp698E28ctU51x3gtxANAeEkjqHd1md8bLNTvV7x",
  "key23": "3SvrjwHRBQ7NqSBxf1nEuoTYoZ9FScj1cks5J911ZZSvzCoft81GhdAyAuoGbBUZYZsUR1CLQaM6m3zc3WWLEXfu",
  "key24": "44TS7uLEjbPKmSt3jajbYLFZeWy9r5qcBZXjLt1F7WUj1nrGhrZgG9yyrsiDRY6Qr1mmjH9j26zgFuy6iKLAoao5",
  "key25": "3hHavYMP94t6RZaB7KHWo64i43bb9CTRqjMTrGA5Q498unA8SKJqbKnxbNeDJLKd6RiGTLw89XYirawv7pC6vfpW",
  "key26": "2bR3uT1NksPdX89TpuqGcLUpM5ToXnmMMs1rjhdnfDgTa4WxVqRPFPfqviCu94723M8rXpZc2QqVyWUQXCkong2N",
  "key27": "2VdMXVjFCBFf6pjTXVYuKBHzH54dwPGgTWd9eMWUBxYkXNrbW8tBenFh4HZXAyj8f6ERbkGUo6DZht1EJvsnJzSe",
  "key28": "3AtbcgiYKa1vzdhKY1tU7CJ3Mtx6biN7J56BZQBqbFb3NheU3b6FaeaDU7KU9NQGTW6UVBtNiM9GYoHjLTX3HHc3",
  "key29": "2k9DnubpvrPxpWj1CGm5UvHoHsLpw4jUxjWck29XoQCBibHEcgA2bPFaYkDwtLfcrrx5PuyiiCAkJgGXD1hmb1mg",
  "key30": "3DLWTVWiY8gWUkq8GnGZYZi7yzpbsCreumWhpLuVEF3MLbjiz6XfnWL1FTADyxaEKAcYAkHBN4VGgC6ZkE6SMCTQ",
  "key31": "46PPREY8RHZzWAJv9KySZUk8SFfwDjXf9KBaxoACktdCWWYZAv39uz95g7ScBx9YdKRp9frUSJoo6WYRHMkCk7zi",
  "key32": "5NgNYgeubddXte47w8Y1HqmURH1Vm4q523zCaSeVuMEFyMY8PM5hVHuBQU7CJehrz7gKPh8AdoxibHukjT16tbvV",
  "key33": "4f3FC6P2NzMFUpFcJTAfGwbFyZUWWvNFsgHtFvqBotfwvPF7AZXtAQvPnNb5QJBnxYXzBpPBh5P8Wf1ygioHG7q4",
  "key34": "5WqBjfddJrjBPQ4SF65NrEaw2EexP3UW18j81Y7gpiGJGcGC8bLkocgT4F6o6ZzqdSnf9upAr7hbs8T2iozZtusK",
  "key35": "M7xZuaPJnS8gb6YxaY94usXSJpNeGiBVxkE7WPCM6vZ5ELC8ASjTq4Bg3emxMvLW1wnGPXGgtYMjM7dnKj6xpnu",
  "key36": "4DkNjGXYDFkAQZjLVV1HZnkAc7Y9SZC7mtZHFivCbqSPJBnWgEsjSCYZcHaNJaiWTRHmSmVmdBBqLkVteXzfqfV4",
  "key37": "4VDAj7sAj7HE2cp8jnpgVCfFYMwJa6LQNLo9MqaR4uvGTa2UFnrVMN1FxWmtGzr3eSdgDWyPQHXMguoetWG7Jkmf",
  "key38": "2UfSuYPDfD9RenZkxJ3rA82PAFLXXTc2Lykh2LVtdBrN328fYDVciuw9uutNZeeR9HuNzp2i7dthHzToxYtHQZ4T",
  "key39": "tkjK7weNe2AknwkhgaDgGwQifjBGw3yasjrmGLLY2dDxY5ig5e9BgqJBtXdfqT8CcHk9gbAC8ix1kdUAZuheWoN",
  "key40": "MkZquptxF2xcunNjsD7WWVLuEy2BVaWvPh5gX7hbVGRn8MFwiGD2vN3GQrBYbfKVvdb48VK52YQpfpcz5p4hYN3",
  "key41": "8ippuZhBXyFJxjYpd5DkzLsjUP7XndnhN2KpaA7xZHT81ztR7PDhy83guzwQqLj7Fy4YikSPHpmpNZScfTK1Bxq",
  "key42": "62btRAVZauYXjq1FxeSS21j2e1FvwUGwV8WytysHiGcabpXeztX1KnDg1kbJxrSAaNXVCexyzNGXk5reYoFsXTeg",
  "key43": "2JAvraFbMtxUM6M9NqMpdDKyRSsanfq1yWRjXZLj1eQccRh4sYMY7es8Nm81nDGFZcoRpU5eiy5MfZF1gntLq6Zk",
  "key44": "65cJhDsTpPbuvTKoP6iQeb6czMPEsDMbjbkNPe1UMCdQXEAo9UzCCEBjtVHe96M2GBtoTrQsXJtbtvY18KV1B3Ug",
  "key45": "41bP3CmBH4ApjEFhvDTmPKJRNgxktTXx2oWiNAnHgp3SpFYmvLN6YTFWFR8uLL8GdH4qUkH8bUciKoVu7nj5MFmy",
  "key46": "5h7G5QHUMgZJES3C9mPX3GpemDyH1SivntomMGi3FMFA2Qn1CDM4gCbz8P2jXCfDvmFzz4a1CKs7LfFPcbT75bfT",
  "key47": "26cdU2LLiGLcjewojxhbP2FhdRBNbYyViQdLr59jqyn2qmth68X8x8ihFRBT1ZpCYXFwXuL4mU6p3XNPby5AzgpH"
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
