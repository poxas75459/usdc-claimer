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
    "55mD8uJ1geWCEHtoaYUjk2RKFpAgPM8DSX26BGf78RgGjnAFAwRMPYCwKppN5UCg91D4qtFkYfHAHNT2Bma6Z1nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XvT1BYPGkbeksW5LU5FQfzmiAXeARhRjeDm6otfLJgrta6QKVu4qSCg6XuixjE7JQcBSurg8GoiLA9SbCreCgtN",
  "key1": "3dgNBZ9NvLhspdj6bd9pXbS5y18MRivzpCsrPFdWrWMvTFgL5ncjjiTWZjHSaZjycx4GaPRSdTPL79XZbwuGe9V8",
  "key2": "66SdFrTb34QBwUi56kYwVxs6MtUjFedk2ZTjCPsS1PjZCZzZXRpS4nZro3H23DYLLWT2uyxmeeQDP5MPUStr954w",
  "key3": "3HKrToYtKrsLT5RmjxbtPQqHrwVmUTs3LhkaNFdYmPSfd6sFjDKKCevvxrMt3KA8RdRvnzHXqVVzHPCDGTL8n24r",
  "key4": "3QfBacruW9RyHJwcdk3oEVYs3AQYKFeZRzyVxKmhcu6bfKBrZXDmZYpJnVUZCY3HFdcNAsaZt4oU8LJTbUUbugvm",
  "key5": "3kwkURCXBhYDkdG2atDrvxS6VVX7uigiwbS5TjP2AKwjt9mCH9F5mokFoDRQrnAKYNkgbuqzhG8QFHnn3yb7YHPi",
  "key6": "2qVVf2spBFPYjasE47dZ9ExmsGMnCq61vBTLGTuawMKB11fXAbtUHxmp64zmj5rvTJ79NYBLyj9Wv77CeerZR6KX",
  "key7": "42VbzdWPjS9aTncystMAVEYu7A6Pn4UHvjkBmjip9FDQFqrUXteHv8LYxZBYuAiCeD69FTX9Aq6qupjPQTG1yig3",
  "key8": "2CKC3LQH2niD8jYPGYN28LestvcWBZGxhaGNfx1tV1hE9Pq7cSiM6uwpYuVvZ8SDhGTSTxnFmEjEoUDuoHGuU3RL",
  "key9": "2tWeNBr5PA5A5pw8b8gRymoUJwBWDWADfcwfg2MrsidBKfaCqrhH5vPVKesM4M1tU4CnXEEU14mZqg9pLgCiWZno",
  "key10": "3iyGQEFRRxLwrCsuVGV1YC7iUY3Vk33rBtBqb1rx1uELUmp7Nkjcu4QbV593xir7bkjoCntcu7Jd6GczzHEjXWse",
  "key11": "2GGXnCSMZzcP4CNagr81BdgwGhdkhYWvhHYd5qV5GCx3SReHp1eLNSs9zzjwhKcMEuatVGBdxBG46Byk2y5P2mEQ",
  "key12": "3st7FjNWxjmPDtoitEp57E61q4nSpxfrPagPHojr2y5Ajj1ko8xz8eFMYXcZ7xEHGepACTTEnZeLqZjNEsv63pXG",
  "key13": "5ZMUoh9ZpUarcnEV9czER8XcjdteLQ9fiJjG1CuDEaM35YdzwDzwdkgHxumVpf2df9swn1jnGmKqnDRAUFfwFrhc",
  "key14": "4VBhPfFaWyLTPyGuX5yqA2dNPSJHoSMeCsPGDGS2LLAo4ZUhN871chouiMtReu1SrgNVuDSmph9vBAY2n3EkHYbc",
  "key15": "SNYzmvbvMfzr3YcKcoY5Qkq4oVXeWHyzvvrGGuw5pgLVpzWhvyMTRyxt5gZqTFcLG6NS4WLvRuXEbxsq8LQ5Nwd",
  "key16": "3kYdKg1ZucgtyG9623EbsPJsmxu6S2vbrodiqL2rsfQUJBg3MAXchnWtUbCA5g892Eqs7r3YKfCWVDMCT247h3o3",
  "key17": "3Vf1ydSDbfUkGCjLMrt8c4rkGxMb7B9eDG4hLGZvzjWPjJXJ3YsoxYZwq7ubZzV1mRCwqe5c4vt65vTkCW3TXD1X",
  "key18": "5B3wCgyrqhkokuh36ZVHiGQvyDbG2KwtezCYFCxnsw76xr4d4v2kgn21dUFfuARSs3gkwEGvW1zk8WVsL5QXYbBL",
  "key19": "BBenqgsX8EFEJS1LEmP3eAqbQxnSP6j967ECXzDFSxZm1pFmZMge4dDNKUREr6XsVhrzye4PEKouLuvAf5gijRY",
  "key20": "2X1mEHN8RDecESpdENZXLUZ7sCuDiiXBQBcZA9y9HuBwnFE7S56RYMvByXfYKYVVnQrbzmnEWBTbbqc4RjzfZRfL",
  "key21": "4GkRNCiJhPs75SeyopGo91yw1cDauWnqgjkWwDrXKiQ8yLByiHdASw9xHxGofgtYrbrnKwRmaVHx9LbaZnsnSExo",
  "key22": "26VMxEd7q1pJMmmEtgUEJfhwBZW5rCE3C3TYjf6Rnb5kZJWkhJ6kdG5aL4ptXaWcSZZR5XJDMHgHWMfJ3jYxZCmB",
  "key23": "2om6A4ozRxc7qHcinvkCfWf7sdLaH2JU31cY1pdG8dHziNS22jxDuUVfBzrDQYnjqDnTUHdvKqEKCCcJdB3QrfyR",
  "key24": "2YuV1C7MUyQYSXJJPkDHqNGJH45yDnw1hAmdpb3ZNBf4pumE4FR4KBAuZfjodhVrepKqXB8gYthVuWnMo8xJGrzs",
  "key25": "3its6sa5FfSPGWExuHC75AYW7ZaDp7aQwcGyKrSrzbaFQUYDg88LmxKxZv6u9LuHMp5qUhsUr2zCcY2zNPQkHf6E",
  "key26": "222FumovE9oFdxUUMD2dDBtJ8wES1KakaGfER6ZByqV3utBBnEAZT9yrxEZNmDarASyJXqg4fnpvyMFRsGQTVYzX",
  "key27": "2ZqrKmZB2yy8crtUw4ymBpCAeaBXReStWFm1pRrBKaNVY3jqihPjG8Qcp6i6B6WTV95p7zZU5uCHbaA1FV5vm5dZ",
  "key28": "2QumcTcp6jdBJr1PujG5trzcbYDURHmz2YXVH51BdB5ZShuzNv8nVuTbhciqbph8RhuQHtjQ4nRvTPhcddEMm2xE",
  "key29": "5gL6aKGi39QoenKci269eD5eoerp8sib5owQMGtiSZkiLPbcJnM2qQVUqQBbEFb8aTEgpnjtrTJJwaCVJPb4u5m",
  "key30": "5JcazZo21Q1asPU67m5TZU14rPe17oMtYZS8FPNGMcLz7XrevB5dLF5zJ75b7PEtPEZ1mLHGcJRaJFqEa47N1H5y",
  "key31": "3ukDqH7hNf9X4jiWbVCvjS9JA9yBYeuN5oJ4gfua7JripXGBUGy3yFpCXZYiNcJrL46vJ2LLZfriFugYXg5htrbo",
  "key32": "2HqfGYyLyeGoYoQX61nCWp42gHav6MHjwgDmfBdwtDCumL34eh83Fes65MPgLS79Q4rTJhUpYAzVms6ucEq664F7",
  "key33": "4VbeRYwsoSYX2G2EiRZ3juxLanHPiNzfzjzDVzgixuCGxdAcFFAUS9MS4SY4mRpSpfr8ZqxP9WZ9xvMzhQ9kYTtL",
  "key34": "5WFXa6LbJUHLHwiKLpf9mhrZw2ardSssoY8j2Lj6vWLJZcSCxrdhd1SrKVXrKFap8kcJ8D48TaCLnB1B8sYGDsNv",
  "key35": "4r4fjUEmnzJrY4indoYeq8TuPtPKQWcGsDC3kbaibHceQ3Wg7Agrz2BhtwZz59asPj8M6x3Wfn4vSpu2zRhG2835",
  "key36": "2TLBwz1tDwbQtKfrx8pJeVtUGu36pkU4jRsHhNPpZ7mKLoch8z96iguEuGcp3DWJm84SKiEnaBcsuPyiBvGY25t9",
  "key37": "3nLdU4maS1b4Ty4Ls1a6oMVGqrsaYo4JFseinSHanDkdaQ4DT7BCQv4W9f2ZDdK461J8gXXeTroJStRvqywjFCdN",
  "key38": "4CfK9wVJcUmXL3JXnAUb94pS8uqeJd3aYUrrL9J2o7M4YUPJAYGG46TSz9vxJkSPhyFKjsYmYQ3EDYnjczyCFyMv",
  "key39": "5FsQ85rZqxnWHHZG3GSgSwx7zr62LbQyMHysPBWJq1CT1cHvNZwfoNty7eFZKRkvo74cV2Lxum7bDZjBFNiUiyfy",
  "key40": "5V54k7CuKkdERDWYJaCbnG73bhXREnGU7oQxQpgwVk3X5KRjSSwKH3EABncyV66br2VRKxWrKdygcghpzuPyhPJR",
  "key41": "4vbbjbWodxx8LannWYiJ1JXNdWVhnhKceVbUZEQRP1khgkaEENA6C9TXok383aJv1mhJyEibJ4kx2BwHQtSqFeDd",
  "key42": "5QrEFJec8nFQcLJZfBpttFTrEcB7jVNJHSEVe7aPCbdoEiAcbRQekpzxwT3fBcwFrQe2uNW9gWfiEYJ5gd5wAr7R",
  "key43": "3Xy2W9rYvgrMZ4ygyqPWMGbPYm95C2ggXitjwFrKyaGsXJDwrPnZHKUEx3hVF2eRdCS7XADgheuYx9gSNR1mGMH5",
  "key44": "43sDZNuH918HuHuPkLcAvE32FBtfW4ykTsRtuoR7uRuHSdzDnwea5aAfaJ2h4W1pCWvGiTXLxn55fUiirdRQ9FzQ"
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
