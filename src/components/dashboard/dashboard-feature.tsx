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
    "4Zgf8tLoTeoXjgNyQdftYEg1qKUaTT1zXM3bmJz9t6rYNoJCfeJbexQqzQQZ6LFHsF9sZ2gcYJVptS2jDg66SanU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiSivkXoMibfXndvTux5C2S1UbF4axLDdjBUUo3HTALXjmrB1UQSv6srj39kvcauctR77CTF8WTC1SE1SHUckg3",
  "key1": "ADVCzg31pthhvMvujRBfLMwpR7ZdDg4vznLuTh7Nt3NNiUDwyXYyjdQ3uAu1ttQGH66WimUHxm6SaxBfxbD4LuN",
  "key2": "4Bht9HV8byE5tPF5BYh372ooifgtArT4buucTSmHiJygdt9AbsSRDhyMmDqtiwVW93g6HcF16FJsYTZS7U9sjvne",
  "key3": "43ys3xtmtsjbbxpqVSTDFvEtkXCrEiSvPQHbJqqUor4UNAovnaEM4xooniCmcGrdnQj6n7QF3USqsSgTaqE5jbLP",
  "key4": "4tNukSbPPgx1kN4U183cMS4BfxAbM9jfurqf1Cm6BKygCHgH4EV1kBVdcth5cDVkQBbSQ9UGDRJfHoRdFBo9pgBk",
  "key5": "2V9rm2mgQSQxHoeprffCQY6RkP8XRyanwFJ75ErjTLmwKY49uup6LTTADgCfLh8MPdVmUDnYG3QK36bMz6UYDdt9",
  "key6": "3rMhjZw6Z9NSyCgfvUZbA3L9LTyudocbhdRBLmuTG6RW14a6hgsGNso2PfrMQXjZSzoWr4jgNTgfiiwtoVaCAuHg",
  "key7": "3u2EN6jjaUm7pqZ1dj8doaimNBnR86EoBk99afNL48euwYjRPtzQRVok4abU2Ah38hMwGaNWemHPGBRK4hiuHTwW",
  "key8": "4h4wtomXiJjtaf4W8bNbKgLFWeW7t7d2NLUMeE7y7V1N6pxKNU4Kx3ecUjiCedr69co6pLhQWAxxJ7mbaxyUi2xD",
  "key9": "2UUv4S2FjuR4mr9KpQ4qXvCDHCn8D6ZQh5fNNrJx2kXWuYtJQGviUdaDTy7sBcrs2RDcZyH62mNr3PSpECDfvgok",
  "key10": "2u8fZqxWL5WjW1EpgdqhT4pgmpaUT9AFkvRBcmfeB5xHFXmcuVXWaFbkKQVUS2wQidRhY3geqpDdVDwZAfBmY86f",
  "key11": "4xDTvTTZj1guGkF7y44jfMjQAQot78pC3ceQyCZQ9cL7Cdh4TzmEPGReNkzR9VKjdzh2Sbi9ncTEjtojMLBFMcBy",
  "key12": "5PBh7iHB4NHAZyVqVVbJdrid7ENsPdGqsryq21YrKH8uXmM3mmW6nj1iUJNZMJ1FZJB2VbmxQRnLtd7Af9dsNvLk",
  "key13": "4JQrmq5N1gxN4ShgRih8ppGyFrSso4bS6fYSeXFedoMRka3WLnjU3xAKP53xNvn1sFhFYMiL5jqNqQZrwbFJq7dW",
  "key14": "2eWXz8in7ouSgVK67FQVJQEKnsRZUimiDQ9PF5nWWKMsjAYchAbs8etpP1CBrkXgs59CjfphfqgpPY5dJfetkrr9",
  "key15": "3FgbazPzY45Y1KysYjsHGxwWWF3FwzNWVGjaHCs6trAe4sna27bziixRtwFizhB1MLfo5aPAgiMWfTEky7MP6Thy",
  "key16": "2TFBHGeQtHWyNQ9zDEWYwnotNM5NucymEHXJf3LpT43uNav3B4DDT1TemWe7EHdwJRDvDYvx8s8MmbyH2RB6y9Zd",
  "key17": "3xGCR5jHew3YwEcAgctQGtsggAuRnj4Zv2NrtTuKMaYFLVcXMr6oC69Ttx6Z7RY3oeJQZhyq2kSRswJzxY76y8hS",
  "key18": "5dS8EyrkxpSqeaKXYr8SikXru1JBLhAsxyCGwkmKvvRnXq8zFk89orsrEN8FwS9CLpxoF7WVjLZZRv65EknDMfmc",
  "key19": "Ez7e2c2WRcrUfXK2wrRo1pJAErKPTF2bR83pLCP9zP4Jq19eK7uq12Bnu5kPvFEy9J9MubKoqH571TTBz8dKwkr",
  "key20": "65uxPTv3Y7i6G3vQsA12TzwjD2tbdbCa4eAoiC1FBcky5fT8GPktehJTa6k3AdoZoQbff6tvwXZ4d4QCaqgYsmFu",
  "key21": "5KZ9nE4SKzZcgmsUt9PYT4XkEmhEeq8tG4WLAkgRn1KNFAShK3c7KSAzuLaNfSMAfhzjfAPsM7whDBjwMukCb1K2",
  "key22": "5K6YCYsQ7ZonH3j7bSSWVSLKAoazpKhPdBUwpCkKCGTbqJwALTWFpcQg32uXNSXKELHkkZ8N2NFv2dqAzU1Kfvur",
  "key23": "21pH7h1jWLgtpgqD45Dgp15L6UcK1GHZNoem2NX4TBLBdSPSY3bBTTbHmTqQvVcdDQThCeRnABnQ9DiCWCtZXzaN",
  "key24": "33wapj8NiMWGsf42fTy6HG8VgaTXoQBeWA5y3zqyDQ6yVHyYhcymy4ZupWx2KQiv6f6bCWchAmS2DAEbe2iGSeM1",
  "key25": "2vjm1N6abShXgLTi9svqC2BXkwSHxAngpJgCDJ8MgJSko9Z1dQ3RRtwhb1bvkr1n6bthZxCHdH2civXBNgYmKxQq",
  "key26": "yiWZhFJzQRzSJYm62snCa7w39Wtf8PcWd3yANo6tY8FN1nbiqEcVUnLmP8ZircKKgSbrLsYPaweJp1kHpsMrv8g",
  "key27": "58axoHT6ryEvL4qdYSRsQzDFk9bopCNcPww5H8GCMVEeLwc9rNVvnfAE1ZzaPCudxbBc9PRmjWTMnT8rUFiqEBnQ",
  "key28": "4fUfnqgd29a979bTP3wrpWKvdsqhakdTvHGs42tVp1BWTGbFcV8P9CGYaXzz2cyxRX28v7MSptfD3uQyqS3J1j8C",
  "key29": "3TkC1AJf8i8jgHztooPUuCAhwWwYRRDwFqsBFJj6rSY2ZqsdfQtZKHKcqbb8yBBcjm8zNdNmScbREmD3jte2y7Pg",
  "key30": "4RxYs5oQGdPHzTpNVTgHRR426x4Zj6G71nzCVoLRDy1CCbH2uGQXMQpqjo64kqJC84U8npBfY1qBsFDoaPxyzzkU",
  "key31": "3jM2TX6tepwhBxzzCBGkWyi7LtsvtoLzJqJhgZWnnzAGR2RrhYg1HhbQNg54rb8oipUKqFPC1Q2ZWTEbnqXcXSN6",
  "key32": "2pLEargv5Hn7AkTTrR4A9U3MGMH55kpC5DKTwMFrzUZ7zsR7Mr3AxjfAib93YCBAmgeMmnAm8KqjfraSFd14m6ik",
  "key33": "5WYVTKrTUpQmWY6eL6FFm5adqd3ErVqHPqyM2QwtJAxzGf7BzjNtT8hAAquTjAd64bQjkL62Yw5Ayog8HGrBzAao",
  "key34": "5yg5fduxkLd8bBhsoESNsGQvZ9huRvAFc3sARnzaY6gFtckwhdzZAmdD9gyPAi7c9Pq5MaEEYHdHiEQfDjm6HsWU",
  "key35": "6w1iSprhsWHTEkLSC43WxMxEmX9gwedFXRQuVa6i73TPmzNiNeipbKqELdWWSHx8kePygEwBMKGp6dyZvCwUdLm",
  "key36": "5zgdhRXVtM3WoqNJJPaA9bWku2PaSZHkgn6ZF4yo2MvueLDnWLbyJkUU29K8LepxDCLP8RQYt7c6aD7CRbySokQ1",
  "key37": "AZbJKQWS11Uo3EfbkWHMnr7k4zsAGwuw2w8wxLHEP4cSNMsMj95P1jcYykBZSfMoT6GCEiyNgaFjPrgNfjqEg6R",
  "key38": "3EL4BBCgGw5zmhq2JwmWy9WUf4A3S8ipYUfrwtBNDgETTvF2PeWnoUfshtkfeNeE5rgGXzpKkazoDxWjZrfg1s75",
  "key39": "2J7F2DYnWZcWeCw62cW7RrvSXcE5CcKBrWtSyxqcX3eYHJ7ghBx91A2gLcWooEno4EQo6ufp1cNjReChVM4V11FS",
  "key40": "2oLB1XiWLWmeR63YZAP8tfNXdia96wSeoaztNjdrgigzQCfB6dNZzwv1cHWAfvTKFhtQhR3AMFPep4wZwhj1W6Ee",
  "key41": "3xfCt5YzxfEZ4R5RpzyUXLYLgPFgXpywSNCZzpgSYQiJejcgqHyzZ5H3PtFC3sFsznEE3nSuvkFs5UswzscEKzw5",
  "key42": "2dukjVVFKG7vSih6TyGN9EywgZNrCQXryxKkeGgeWqYAxGtWdkmPCNroJNgKhWkhrafecqpM64QHCrv5hTkRWLmN"
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
