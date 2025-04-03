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
    "5HRC9ZM4p4Ax43yuaXKfDaVaTP7cf4SXhXYNbWsrSwhdFDVC8zhax8BKMSNYNJmzrCxuukuQNvkGSSDni3ZGxo8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZYKSBcNnemWtmMx1peEZSG6SdesW5gufXfPu4gmk8EBGHRjnHPpwunbq5Bk7QXxxJUjQ5TiUwA7exHsk64cPGu",
  "key1": "27miHtxAiE22jnErya4j3r6uxWdtLoKHvfFWM1YTPtw9b3MhEXCXzbnMWna2XggtW5pWascKUc2ZgCZtiapcsLqK",
  "key2": "1m1d1yb9GkDEWaVotY2tMLQvyUuaBVL6nfcQhrrvvDcpmGFHmj2K88zk3nKm4gNpRFoPWg8B45F2M6W7rsdQPS4",
  "key3": "4inK3RmtpiihjjMtY6zvmsc76euT3Hh4hDCaHB3ee5VdSsHqxZxCDa5FvshpRej1ZXkYknXSdsUvm4iZ9A7iE9gV",
  "key4": "2EmANgiPTgwMiQnzNSb6LqHqQCPhnoAdY5qHkCxwaUrfTgDQDYZSaHcsrfdRVqR8qpMJLYQ2AxDe8Z5SgXU9RbMy",
  "key5": "3BA457gRfZk51hgd6wm2gKMKqK7jxqKLkwrANSYFtvdqBg4ySfhKFpx2PnoN4eUz8qmeVBLdr6TFt6RkE2o5jsQt",
  "key6": "5UCLNWpZbNYgteJX5anmdEzpohwSgCjdMBGEYAqHgtACebB64KdXTR3XgTT9USzKTEWafMMASXa8nGb5yA6D7Ymn",
  "key7": "5rHKPFSXgvfjxMEhLorGU7KK7aFND7uX58Lixaix1VG8dLFRpcpEGUxQaGMxKG1zTH23YuF2SJiAcyLfZi42EUvE",
  "key8": "2CUM1nFo65C3qA1ifMTFvXjapFPC8YALjAfMNrrRy5wW7uqPJs8WRN9DyQHErSskgvV6WTDaV1SqfhHuYghMGhbe",
  "key9": "5vp6cQoQDd1Es1hrEzZpWb84FtZvMjTCv9CqfpRsw7qJT9H7paWqpQUQwK5TDhNWjuUor1dZCMMWPvUZ1EjbCT57",
  "key10": "5UqCAMB1LwvyBBzJcSkfUkkFbdTnVsjCKgjbVGazMRJ1V13pF6C9J9mekh2t6oqR81niYKh1VUtx3LGMK4AEBXWq",
  "key11": "4uhytySdvBRv2dXvSCXZxu2dU3HKbzpCJ8jnU3AEvM8xZegQL62ny8UKpAGit792S2oJAHnmFzXtwgtvUbKgC4EK",
  "key12": "4YJYqvk9orLv7mLwuNpBmkoVYFJbp31Li8bS12NPN7f7qAWTPqBSbhGZxhBTbvdMfUFqiq3MiXgshgcGPFNkkjv7",
  "key13": "3rMLH3Fcuy7QWc1Uqu5gHpAKNDYB6FYVq8RG1JoXxBPPsVnrTGpzCK1CAmisJ5uKFHz4oATsQkU4vgvdjmr1KfU5",
  "key14": "4ecH16rTEt2bT5rRp6FVf7zcsry2Kw5bt9V9behPTxML9tUJnfLPAEePdz7LtL6rhCMqVVdDRNirVHS3dAs1Uewb",
  "key15": "5URsfqRSDd9SgUzwNL5tXuYJM7x1cB12KqY1pUXi7bTnhU9v6hV4Tgjau9Ut12WFP9cs1aS3iPibDKBqd1si314B",
  "key16": "64G6RcR58Z2Mdb4W3Y1GTmVkoWqN9SJzQbYJNrTQXTPwHywnRib7h1dZpwPB4w8SQBAXeE1wdxGbMaDxKjudizrC",
  "key17": "4ypr5Kwjh2VujywKQg1GRjegGrDDFq6Sz98xrZjg5VrpQw6pWeu7aFVFKB9B1Faiy3DgwQXujNYWQgVqSULhNNdr",
  "key18": "5PdvGRokHw9h5JFQUHCaG66zZCobzTYZ8KkG2VxmGASv3fiavUKiWUUpgqzf9ng2zXBpSRYZNaow4rguWRQX1f55",
  "key19": "3CvEwgo6CpjAPmKHoEeiWfS9WdCpW5nrKTVBxdN4nMqSDxCZUjkyxKiFnLnmG3FCh1nxgmzS2nUeVdjd2fiyD4c2",
  "key20": "2UewpqFGkderyUEnA298KhVKoThWC3SkX85GaJtrukmZFSD5k8kzQB1zR8d5rg6JKUt65BvnFLoq42X6ibchmPzj",
  "key21": "41hMRVFQLTsMnWsJskWxKRjH6RE1pQWa49ZM9VWxuvecfGmRLufqKrxanCwcAkivgQCiYxG5pgdzHAGuH4vGZNMn",
  "key22": "BUXd1k4p5EZqd1rMWCrst2YUrzT6yuHbrRo9U4MyNnbvB7p9RQonFZuDXYQWXqzYSUbDJ15No2h4SBj2RbHjHAt",
  "key23": "dMmtyRifG3t6RsYY8SV8KgKogT3AVLGnuu7gJUZp8YXyDnL6aXeQ4oWgBBUHDktjTs4HPCmMMkqyLXykkZ37A4N",
  "key24": "2zSdk2wojVsXx37hD1CHpWYKCrCiBgHMD9Lw3p1wcGyZGT9nDHumiEr334Sx8G157gYD3evg53oLsfoMyBGoeWEQ",
  "key25": "yD6Ab9fcyF21Krnm1w8o22DDbdiqGLmsUV4k9iaWguyCQTeJJPXiNUfK3r6vdmDSwhorVcjs38PSBRafs3Gzd8G",
  "key26": "45ZrFPptqpTfCm9LXPQAHEFytULHb83C3dkQYKtJetLRS538fzG5o2JMt6JcZaJPXdFXZLbSsjPsYvH3tjN5NPUb",
  "key27": "4TLrEC6Db1HvLRdUa2o291Y1FJTcsznxsv7XVS1Q3TGRYuCAeaXxKHysz2jKZ3gx5Bk6a3pjUhPGJC4tTdPqmFpe",
  "key28": "265RQ3Lqk9YVjCD7fovGAzdnptQZ7UFmdfJ3GTERkgv9QeTWZ5XacqEMBoYbRb8tNSDvZFHjs5wdt6pppsEiYDYP",
  "key29": "4LP5gVManYSTzFUMM3Jpr5QVJuM8gNEaYUfJVJGoiwacx6BbphgpyMmikWdvgM4rjnYjHpxUpcz2wgDHDuafTpkz",
  "key30": "5HXBmqRfhPfdmVX3wz3K9hg37wnKoR5fgsr34ZwiNvTwomB5iLeyYE19KTohF6XWzyrMvFCSyhwbcK6CKtSedFMZ",
  "key31": "5VV3ki7WVMwxYpNVFJuR5TYPGyXbjaaHgGspLvDcniaYMrLuHfyoHofZ3hXBnBWU6HjLo7zpxpsyS8EcyK8hTFUb",
  "key32": "27wXtMijqzJnwDgYLQQET4jw1qWLQ9UmZ54D4t2ztfmKfdvCtydBD48Scoqe3ACjpD1H9HPWRzcKjAmjaJCiBr9b",
  "key33": "2kgmcPBiHdgkFMQoSGakoXakbVQE3bGR1Pvk2QoDnHjV6hsviuHFf5n6dgVVtn8YCe71ishzMDqSe5S18Gwz4imh",
  "key34": "4AZ3ZJQ5JVHvo7KBUak24AxLUdBNVSXSgcxXSQG23bxkYFqYRz73rorTrBVZaXGyu89FL6v2yQJvXXQ7UJUN7xaS",
  "key35": "42QPuPwiGqzVwnbaJ1qPUBFwkHWWH5Ku92rgzUcPcKbTj5R4ayrbeEpu8W7FFAavebEfZ25NdKQsSdw74JomsAdB",
  "key36": "5UjRLH7ZbdYBqovDZPiMwEKp7fT5Gy3uZUR2o6NKSm1yU8rwvfmmwmhDxkGRBmf8FhEHsMXh79YmvmvB1R6CWgcD",
  "key37": "52UkMTa6JAqXCebWdGtsnJPv9xxBy1zwdPurgtc27cZLjjJEV5o4Zzg5akJ2sQChYmWoMpDeGi6W1iGgZYG4UVFi",
  "key38": "2yjhGv4Xbc3gFgs8kpL2ew5tg6sHXwwBWcV4QWVEp6ZEEmdZZx8kD8nQJrXekXDEtmbQgvqxUaQ9q3YKTk2L8FMi",
  "key39": "FnUrMU1WxSuRscHo3v4QdvZ3iEKPhMmzuQu3Spg3tLctEHwg4FzD4cQBGJjpRzNkHiJQLAakAacexVs53EdF22p",
  "key40": "52RTKhps4deH1A8hD6ALEjzGDqSf1pnzdEiLMY2byDwo78W9w8nbo4e2h4Kk4BCk3V3Mpx3xTUmx3qoRa9NquMHe",
  "key41": "5TFq3EPAajUumoYavSBYvQjHdAQzE2usdds11N4dmNHtfpe5S4YsCryCnTwGUUeqeBrPriUs5LVKct9kJqeZmyid",
  "key42": "4rXjX4F2kBt3bQHAz5S2niEiz4MPuSaUN5WktLSqPVZdMLJnJNmmpHLuLBotVMBQ7cEeAGCfeZYdPQpEaNMWSMJd",
  "key43": "3zEXBSr7pVtSuQ6iiX3DRjwDPumJwjE1Pt9NZDUfK389rZ54YudEAteeD2nHvz3wAvjeLtKdwpojypuCWLYxy78L",
  "key44": "23KcXMvdeSnosUjZqju5tVQBdViSX2mqCXjg7enM7qvD59TAVyjcAqvregg6w3QUWDhFP23YeSii3jjRW4Ej8brz",
  "key45": "TH3TYfitpx2pbsiUcZs5vpy78PiPNyhkh8UqGJ954D98cg3oh4cGWpXyM12DPvJGF7JCHFYaAMaTfPz6hi8yuhB",
  "key46": "5qdY3HQAp7fgYVqVUshHeCrq7sDmm93fFwH36BpVZYTTrb8NfMDwQ7W6P72uNQFhSATXBtcdkAXqHowwyA2z1xDg",
  "key47": "659Gmu1jUEE2qikqvxRm8j7iVikh2YTaCzCstg9wTvqQEKvMEV4aQEvu3dYYCVWi6RXaLLQtBiF81rLMPaedwuWo"
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
