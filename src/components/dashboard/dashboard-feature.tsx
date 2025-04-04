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
    "3c8eJedJbFmuQ4iocEgUikkRAC1caPcVJRBRxCQeEfsbJ5GwHtYzba1WT3MgTkXQdBeEEbU6ovagyfmKzDwuNdQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dJ27hqQ89RYY8F42MX65CXvHy6yUQ8i1kNmiGrV1n6LbzEkHc6ZbeLuG3n5D59BrwPMeEFGTNjAmvr58xmHtQEB",
  "key1": "5qNjtm3VHVMhF7Q5V8u6Kzx2yRy2rqeDrrisYrEdPwbGbr97WLryVro2a6fyQ1RB8xh9qtMiriPuRWLyepTmjcHo",
  "key2": "3BFXghzf1YC4YoDgPV25Vt53uBwNQk6AwmwaQyohptNmLEhwdZBydCPDgascPM26a3sQBPjgpGoHcjVCyd4kjJDM",
  "key3": "3R5yvNyAKGhMYxsN2DRYHBhDZhvVXTjBTWHuF5zgvL9W5jJ5JsiupXn1JdgNBeU4UijQixfa497XFKchttxaHCBv",
  "key4": "5pRdV58wACT9zGXvVfPZRXp2mwTUyGbvYdjfKC7T3iBSL2WHMXWsf3uvRN2hDYdEUgTgxHPUKwpsf4NSJV6FcUia",
  "key5": "2ix4SpT48GeWFqaaTSWnJ4KGqVKcwohJ3DWWR1dzcensivWtkbhgJmKVwSyWg51Y14D2NEi7neuVMGzzeAVgRhfQ",
  "key6": "H5vyVkS5tRjBYRgGL4RFDW34Jk1JZY4yA2Xxgq39grRJzQThwUDF6NqwoQXX6gTJ2LyBciVFBFJhrjJxYdFJRGh",
  "key7": "5d83usyZR5c4ejsakRUc6RJDXhRNeCQ7rqR5EQH4DkpmGjiTTQsHs33QBWq1USWGgFQZG8X6HPHPhosLL8SKiie4",
  "key8": "45eoYvh9h3mvti4sk6w54aitJBaSPB48B5tu73hEUubdckTrHJm7ZBpbTJnv1orvv3qvXc8SYwV7Wk5ruzTjeNbW",
  "key9": "5zEHBToRfXb8qXPZsYJKcoih8u1Jwg6qXADxdtqSKRq1biGKNdJymwosCz5jYmPLAeZ5LWcSr15WMVRXpQFVASXR",
  "key10": "3QE8A64DzkAMhsNBCb4CNWcYiYQWB6vYUSWmbooUxkbA5K8uxNtqumSzDTNxX1fpNV2mqkqJUMmqvHPkMnLj6fzg",
  "key11": "2tT6pUuTnby8nA94V2EyX6CCQe7KUYndaU2gNtmbwcLsKMCgppRo3dbduRvwnSMftnH94L2zjvtxwF3YtNsg7peR",
  "key12": "3qJfZmj9pVik6T39Zvj6AfkYTFUcPMCUrWSPQp8BgswYM2b9C594fwyxbTyAVCAVme9kHm3JLBxzs4CmW5ggAr68",
  "key13": "3fWgXGou9SYdRNDgtC432QQMUHaLGtvb8DKvyfm1FuViyCrEatBtMMZ7JCZeM2mWs9ksJSJ4FuVufpshE7kozuAB",
  "key14": "4tegULsPjuZjChgjbZkk981bNYXE1yDbJoxKSCiWd4zUHzAehiGuTqhPfBTYj3MPE9sis57CpRRsgQBhWoaJTPcq",
  "key15": "3PXh5xiHNoCs1sEDnX681L113pET4xfC9eLr7xyQ3zysYAWrtk5iPfmUZ4ySLzxH8A6RKAmyJqq4aorsjrdxGV8H",
  "key16": "4ZyQJbY5vSMtYAxQdLVW3fKJ5CNdFm67GovCsMJjjBxNoV6UxtbNtatRLEp7f8H7Ss4wMG6zJMumkfL3HYpeoeXa",
  "key17": "3omUQoj2XWDNm13RDZJzJuBPqPQEEULw8o5jmbqqBpsqKJHDSq7AbNSSPMCLi7geGe8pZdvX492yMRx5oic52bXb",
  "key18": "38EK4JDqSLbfskxbZnyoAS6NjTp861CZ2emRhgkfJYHzBqdvywGTgfXeD9PsxyuXaCvBa6z51AwsbptMRZDAdpPg",
  "key19": "3agZmMTGWFEHvusqrZgrmLiNDYYp7HSH26MLZQLts7boKKarLWqUwTFjJENkRN8N3y6o8SwzdbrC7JRGPpwssk8h",
  "key20": "3MjaXtyP4K1MtSzAbFUV5TTMrG1H6gn3icuW54axH2RMgYFbFuUvrk5HHFgJoJEFAJsY7Hf4R5EiEnkGWtrwEiK1",
  "key21": "qLPX5kp1HhMeRzutxko2FN7kGVkqyf69ubsHfoJ1Byhw5YqMX8PLapxqqSif15Y3L73unHTPLGJJrM8aEizUAEW",
  "key22": "z2UHajvuMKU1c3NJiPpcVa5P81aEKyiV9ELtPcLyciPf795TgdC1usaHGGB6FPwc9DC19CsVsvjYQFBVf9gmYzM",
  "key23": "35CJdPVMG8kwCZjowKYPQSu6M8T5cNU1Yi1oXibtQYWCiszVj6ePXyr7UJ2sRzemqc5jjnbiJvhNu5TjNxjnShLy",
  "key24": "5FRsEzxxvnm1Rm1Np7v51YiAq98awgAZknCAcTz9XVAe1QzSJBG99fVJaRtrxy5bjD1tX2UankP3sgv1P4c1UdDt",
  "key25": "ab3DogDWHyJGnwd6V4s9pQQJyEa5U8humeVEMfi7XYG3bttz6hwNmUddD1aVvLzazTPwBvjhU1ccxi4bpSL6FGa",
  "key26": "2zvJyTwwBsTCCjRot5hRTHnyuA3jnpNdoXxXLUKiJ6QJEL1uwvpqZoYa3CXHFSD5DXXAkJMH4rV2xvTnYPZsXBjs",
  "key27": "5aFWBFgbthJz4kekZLsvqy6u88SxS29AA8wjmWQpb6abjEE7NNYTu8Ats6VK1qoGZv9GMWAgVEAkanaULxH2kZ6e",
  "key28": "nMW9BzFZLqG5EksMbBdyWzvfm4JCjVq1BmtbBmoL9jDMFqf68hcci5W8obwrL2cbveeHLwVoApevfdb3Jw5Cvcv",
  "key29": "3jgtP5d7vdkpENKsed41QcwbMd9MYqVHfL2P4ddk69oWVmEKL18tHhX1afYY4r97Rr7j81JD5kuM8GmV6iokJ99s",
  "key30": "5rpjMSnC1NR6M4CrK18MtzvCRPcGKiUxMbsC2XAbi1WNhdfpTjH3AvQmV3BB8u7DFKm9B1fNiYG977VbRH9oSJyA",
  "key31": "QoFZLzv3TNvEkuyKojq7TN2nbAF5gGXXEwm2oiL4Z5qQna68ZP3kjf37BnbTXKj3GeD65uA1hFY8jJmB5NLLLyU",
  "key32": "5YACoEqt3Pdnfn2Na1fwKW35mi7eEW1G3xQswVrefqaPdkQb2Wd2cAcUbC29d7JRmf59JRaEgD8eiCgd4A3cFjbe",
  "key33": "3zA6DRf2hz2n8ZCLjvt5riBFYjM529r7RsJf29tNbYuNroVe6EMfnfP3qkCDvv9KacFwTSdyEzzxvy3HrnwXFC9e",
  "key34": "2FuFgzbsKLhb673iZVd8xMApvSUFsMBSUVi7aShqvgy5sagdZN1WGgkuQswFh1H7nb72sQSDFoRUhDNuxdpvqw9B",
  "key35": "Y4GLUTvD7QQtwoWjJzP9NWR21Avt9BKKDEbWZ1C4tUfGPAFHc7CLAcu5DbrJYsWcwT4YJn7yZ5WnFJvo1HcGSd7",
  "key36": "Q91qjLHeMGFVuVBJk7BxdtULy2AuLZbMZC3QwvZu4iZXta1894rUVi2KCAta3qid3yE6EezQzpebgoBHuys9Lxm",
  "key37": "KBHr3a9UmDtUYa14tbaQSK6j5rRpDcXCCvpDQizEiCBasaQxc44wfdZMGXNtNTP9LqG9ZtQE1Tsy519oaSqSDGk",
  "key38": "4pvKPLFutCVnqsX1MQtfiRV3RU6iKiuzfXXQ2RXYLzSFUGhRXQi5HhWUepohjX2h6QcwGoVY4Fj4ZaHTUJGHa6xs",
  "key39": "51MVNXGgQWMncWj6fyTEtwjMarziMbBDAVi5chuJeYs8TMT7J82Z1GpzHxa9KXr64SRupviaA969AftMg7WvCDri",
  "key40": "2tpyNJQ3jbJqhaqZqsFKyVk7G3unpHGjhHU2uD6ZYUQtqSXGti1oydgdVMJz6RHvkFG4kzoQ3eiFWoZNyBVfwKZs"
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
