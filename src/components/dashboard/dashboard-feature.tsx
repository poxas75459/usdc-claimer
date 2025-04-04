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
    "2CdTNABFobGdHP5WzeX5upWJG565gKhKfJS7UnUAiUUjYyGHdi7CvN9tFcYdn5Qdxp5xAHtJiKGDDmmkAu3PT932"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PtQ5BwnHQqBQHy5YvMzDWREccGFmViwgadbR2g2K5E18wDTjBU1TQga6YtR66WJqq5vJJL3S5kFdWhcqn32VoQM",
  "key1": "4QR69qQDiDCU8hcTktAchTDM3gMZCCQQy4BWi6zLxouBfjZubY7seVwENTPLvKdhEZXnH9mFLjy8VNdYd61nzVtg",
  "key2": "2B4xmWXqNY5DijosEYWfdYm4TVAz9Yh7gaQBRoWRD2z8V2b9a5KW79Nngegf8ZchLock1P2tDnpQ6nf13aNfVAkL",
  "key3": "B83Qd4YJ5xu9YH7WhVs46zfVsvwPKxZ1UJNtX2ZV3EYrk7H5myvFLFiyxuc7aerp6kY2LqCsFNaQtdfXgtSqqEp",
  "key4": "n1RfcM26ZNSgW7Z6qWqSZavAHkb3H4cNLEX2buA1cL9CSqqzTwEE3uaHkMfwhqG9cDUxU5Wgv9WxZo7XoKDPsJh",
  "key5": "4rTVyVvt8af3eLFiVdCRRft7J3xgcDuFMHoMpiLWPmNTknY1PtoQR3Yde7YPYSHTEi86BtnDXxmc2wdqmYNrT4qn",
  "key6": "2NhJ5rEM1n6bdXodZURNams78KZPEZyQhmWLXa8GehF9YCGPnwGi8qhAoNYeejZRiQcQqXYAKtgc5ymuvKG4xs4w",
  "key7": "3BUEX7pJB27rT1vmRDymjtCMzEkbKiEozcRrMrXRGnbcPBFhvHu5cPY7L5btzp8NNorFLfyNuZV7KJKfk5PevXKP",
  "key8": "3S7ucCGaKU6hKpG8p1er1e2jC4K9sq8GQaUYqDXDN5M2BRQKWS8ZUK4427s2EfeBXnjYVi6a63PWynMvK77cbPaT",
  "key9": "3Qa7TPFcxZZx5ddDPWHGuJ3hXz7qSdd2CHtPN57ENycQHnEJ6AaMs1RBNBkU8h3XxUekMFC4mLQ9nbhy3dYRCf6R",
  "key10": "5oydjiohBi3GSP9xswy3rtTbGep9KfdrjpJV6YrqbU5wMJjQ1mzjsWywFtBnLZdx83TEUEbwgQYwYWrpcph2JcgC",
  "key11": "4mqc7jCKuffeM61UJCZBWkaACASQdNt6hs5mpRGPio5LsW64Q5KcHpppw2YGrrjm9jXbaoCkrvbcsVDddf9Tgm3B",
  "key12": "34H97wnTVk4TvK8teQF4Uiu8ZdFMoQ5ui1fZcsWmnpKhfSXsTdzxEcJp58guksrdc6wpMCiTaeqa1sN7YhN5wTor",
  "key13": "4YKP1Y3QPQv3nrd9neJZ4KxUpZFt98VVJDbudBRvez7Bovs22pJk843RBxq46sPXue5Cvwz9uGrFLTV7afjC8uS7",
  "key14": "38DCVLMdaHdNqw9aqLPgnNWo2Q3Dbe6gisvjcXMKUCSKuTKc3mtThZcNzKSXGdAYYz3g8WrrpLozBoYEeWkFLbCG",
  "key15": "2RuUbgMYTtPhGhTeaWHCSiCFJ4BzVvtzwY5UdFd4vmxLWG38hvtwFnvSivSzoVxvaMSkzuwCrm5yJu1CSAwNmEkT",
  "key16": "61c2Rv5zt3JZW9bcJtMkBdrnddiPNYN78C6Jb99GwL54TXKzzcQtSVpTJBrLVK3kaaPnBsn5NUULwVck6ogiuEsY",
  "key17": "5wvuPHTKyVkbuyEAaoKEeJnaDfXAPRgAmY6Vveghof1aGxiMqFZvz42bQ7jGo6n6UUo3m2X5TrViAjzJcDE9HgxK",
  "key18": "59JCVX5uMx937sBr7KgL5gtWrVrm1VnPCT6aU4eeSn9aMwH976LbPRC6PrC48t3Fb2FWLhy4gnm1VvvpL4SJQymZ",
  "key19": "vuNkzQJHmxjsFVF1QpeMSY9yVCXcC4fUfonzo2wsULxDhEDv3hn9hMBAKxTZQCxbgrrKgWsthb98RLhgxxaZd13",
  "key20": "5im6M5v2qhpWcabwnZYojqnjtQG4ddcX35WPqgQkMpHZCURbKVi2nWSJD8vZoGPVNZJoJ69RhXqXQotrdk7XCEyp",
  "key21": "52wzQXmWVMtJj7xtvFbBrupTzcUEDPuKS8QE3oixiHi9ZVoDBKeR63GnfZcw7LE2ZEs432x3qDBi3WuyQEGNJmu9",
  "key22": "5t2DzcSbmqnzmo9ru7FKchvcnn4Q1cuR6aZrLUnexUuxBa83WVc4rz75RLUwsmpaSjXDWcf1MQ9JnRzhH93vwMiX",
  "key23": "3kkU1idyHAsnsmZW9KSXvia6d5etdGZwE6jojvVDzAPtvJpf3kkontAsMYxVWp7yi7RyAS9EjLhVJ5FUcrMF3WUz",
  "key24": "hNFoqHM2whP8VEhnbhWeNDmT4L1veS3afJrzaABCvhiRjQRf6ELJBVJcnq2SxQatCoXdDKZyuMhGRkb9JNWNAT6",
  "key25": "j4im9ZVbZqLmpHebW8GpEQexjR9F6BuGkUBmhLSVF3eF9QkWLQguAYVcJ4CZAWVQfTvhcgWz8VJ8mVRZCnW9ha3",
  "key26": "BkmEryuRmcUoToWTcxF273KXJfYzy54Zb8BbxsEcGMr7bpgMTZyQLpskG9JTMYDUsSJchZLYiAgFjYJi6E4Bfeg",
  "key27": "74F5ACvTFtfBF1aeyaTuacTvuSJj4YwRozQo4hcgZ4Gymg5KJK8kZpth4aeUcHhv2539yVm4636ghfxxNdHsDnT",
  "key28": "QPktVva7DcQRzwWEsNSF6WWXsRqgKRDXAzCVduTAJ22tKvemcnFaFVe4CWbThuzcRMVZYburjn5GX1FBzw8Hjed",
  "key29": "27Re4oGLgXTn3VTN2nL9oVDPqiP71uAVS1DzddAcYHDD6v9suygB2SurXgDPKaJEFcGy7rKypVDgSfwLWWNhXTUd",
  "key30": "436afBE8osYfbs7aCSBdnU276ip5H4vPSc8QcKyHxV2n4L4KZZT9CznsDyPR47Uacrj6DyHrfwPgvgibG97Z8wYq",
  "key31": "T7cL7Uqc8YH7CW8RJF2otdbA5mnd2okbmAkhJVjue3L6uWordtZn9JeM4JzKiRPcf1ayHcUGww9oz3Wq8XcntV8",
  "key32": "4ja2fLmrb1EFkUS2JFQNuwYipKsLPFRiR5tuW7kTeE5D4Mu6XQxFknKZSQGd9e5yspM4sTjmRbHJWGQBVCasZNFj",
  "key33": "4xgPiGve4vMJ6hMcs8fqfYmz2gj9ENUhXieiJkKHPXaSTwP3YGwQL282p6G2scA7tCaX8LsBQYfTGwBYVUzRina5",
  "key34": "KVe8XSX1NCmnp45TuV8mtCVn4n9dStR3D28jGYyaXK2ydXV17DReNYbGFGoqKk6FN9zYi5moBbUq1yv8SzxXCCs",
  "key35": "2kh71tZV361Sozp4rQRbtqmDHyCSAVpDiKtXGcuDwRgW5cCawVHFUkX8Hewty8BDQ65kseMddpbY92oLdXTejLSH",
  "key36": "znPZGniBdceRbM5PaU6T4GQhm49BjRoN762efFpPxzJNJB2nGJWxr2f9RMTzNVyP8fafnz1eEtcHib7XDoxPuiB",
  "key37": "2ZeHnHL7YwDsAkN7jm475igd4Y4KBvU1xwZcc5tx4H4XuuTAZ7vnJv6LHBd1ca8F3bekRCcuSPCoQvcZdQm8Wa9G",
  "key38": "5vxTzHkCsyF1ixJhTJ63FtbDYRmUpzfrBB9E31Y5nmw2s7qpvv4cv5pvwjJhmdXDDR8xeip1uM8tE95G5KpykDdc",
  "key39": "3cDgzBFbUu6W9pmhjrPtdXBG6fZomAWg5VtBTLvQkTHU6Z8fzeeMD1JViZxiJFwtMBHWPhmG1rUXV7iARZeQ96mF",
  "key40": "35dV8MmCYrysZsCWeuEcH1yvFap3kMmqJvmhHqJJcUcZp9iUiXhXdgy8DqMXnpyDwJHr1iTzyJgKS9ji9QKWtXkv",
  "key41": "kg1dbUtJfTNsrrj8Cef7KhrzoK89aFJj3gbHh5eY3oDcgTyo3VGQtxSQZLKFA85e5pku64pk6oHDcBo7wcYuh5v",
  "key42": "4x871bp9tJR2CafBucjyuXUjFqLU7kJjUNDkSSc9AMi6N3xaVCsLRzWx3tfJoaM4VBUj13dVnPokiBmAEvpj29LQ",
  "key43": "5vupzPSM5NqtbVNq4MoCdfzLiTKSMjVNpc5GEqnD5SxAj7j4HbJ5wJJLsEQGPGSjRntz33WFbMVLPbdVCkxi143o",
  "key44": "22cGtg3WmhaQ5ZBKgi5x8NamQZMYvQmPe1FJNUs9grpXJxzM9djRw9TeZxEUJAAwPXB56w9K7YETPJWsU1vUDMJ1",
  "key45": "VBQKSqBdWq8wtm1yvfQhyp84X73oMaQFWZbHPGkz5vBr9ZEH8e9gUaRopEoXsSHbs3Y388Pwn4vjAy9hJnTfqEG",
  "key46": "KHF2QB37rXo7nNFN9VHvL1zRYJYemeqnUbgguJ35RqsZEBHrNn12rKPokaK9tv8KwJb75NDhbxJSPzdDMawZEfp",
  "key47": "5EPSz7P4EZu2h1kRpLRQCGz3DKNWjZfF82nMF1zcrrbnufhYiLFk7aLh5uJdRsRyPFew4WJr3vY4adELH9mX4K2Z"
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
