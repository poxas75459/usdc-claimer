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
    "vCgkoDmxTYZTN9cXMHDW9PQLW1vdGXh9aTGtChBZEs1yg1f8SDcMzCMjStnyAPBf195Gw7SsFKjufCCYRrxWoV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvN2znuei9GRHyxZZ4gE2MoYJoDPVEkN9n1pHMnqhWXziX43sdGYJ2jmnhMHP4usJXaGkunTHMc8Fja3b13agsJ",
  "key1": "4US2cGYqg1wbzWFYebwodAvRJbKpGJk3hwiN2bZAKxYvmvE9NP1ALkqPKGCLX1HuxwMHMox4roTpWfEW2XKU6i1g",
  "key2": "3XyunhYf8rTCCt4snKPicrHb2dNonJqjG4pATzmgXtxrrpNYU5oEK6xoJBEGkckg7sgVxZKekLdGLzYLGW3maEoE",
  "key3": "4cErQ9SfbLafyPf9EEDfL7XfdBz22bbQ1MPW23NhmV1AwFu9VsvYNmyHFMZWH6AwgaRY2uaZafqgSMvjLghdAtne",
  "key4": "4nR3cMdE2JjzkCpwjMieg6k9nd93L6RKjcZbnUAed2FQbyiaHKoHe3WNqEvBrVGtqbU1wUBguxwSZcC8UdYQ3bZE",
  "key5": "kMeEiuMfwGRa8xSNXyzRYdyJRgstsZJzWXvLqi2mqSGYZXjf1VyV5ewFYQUWCbhxdRbFVgCjw5Q9UxMzkiD3z3Y",
  "key6": "4dFw1rqTYB5nR1URQUF3JtTuXr7csPBLdSEQsyYHs3ycCuvyNm8fzw1X2xiogNvVzdZeXXTKYxR2WWpwyhvCaZBs",
  "key7": "4nemDX9KiR65k316tvYFcUuR9bZZaGuKmJQrEQXvm18ihprg3sQLo4EhiXuCf23wEqgrbkkgSz2JSUgKaojhhDUL",
  "key8": "5XqXX6J9q3stkofigLbDriFbT7VyUH5f6wByojPMdWXbXGpveyM1Mg8q6Y1FyHDVy2n1bT7HmFa1RknwnZFcZqgw",
  "key9": "2B8fx3ZQt39NbKELmAsTYKPAW2Bbep3F3shzeRHAbuxPgfjV6C1Tm1tHCTfzmKdDRDZDufZDdr8qf69UBshXmNfh",
  "key10": "5NPBG9RxbmkSUmmeAPMyEr7usjFVNN5tStVCMfP4gQZHzLgEHXBNeuEQnhRcsEkv23MkvJk4gqLceJ8Ss2hmEG1d",
  "key11": "2KrjXPxAVHrL2puzZ7Bf94fvvDaXY5UtsHfEjgadtqHJ9GBKWrQyuRSwKjLJMpQviqfy7JgurDtkncPLx9S9swuz",
  "key12": "3LkW95aMtZVzaBFSxPu9BKJLB3tNyieamuXAtzpZYugFHEUW8mttBmRpn5t3sLms4E6v3NGDxUCfZwZAFGLjJNoU",
  "key13": "5EwfZSzzPtbwky6aKhvYDZAKoSWXKKJmPjRFMq6jaZVnXzMnxiPg1WLTjbjLq2WpdhciKRBx67P1EtkLi86Apjdt",
  "key14": "2TpqqXtgmJdx7KA4XxX6tiVtJEkztraDZEfzZTeTXtqBnyZvaQ3mwj8nkDBYxkA5j1FMaWmgYhFBW78cPXQMy6cu",
  "key15": "4wvqfNsvxmDXCkjyKBrChiKzVDVsnB18kW4TBxrXYxoNy4W9bzwGuHn7NRP1Dqft3e9M6D7mQrfc3A6wbJvdSJd2",
  "key16": "AR3GEwRXCvbU4dtMCmbd3iHGBAoKGHZ2yqgTkCkGZSLdP4ubCQ7nUCuvHAL7dHCt2ncjDigGNz2rPsHHz9goQAu",
  "key17": "VuYxLV9cqHoefwGPgggpQnXFJA4FET4cQ69Y9GzhFxePfydZtKYjjLBB6TQg3HEPvVf42tJXY43Vc2vuLrTf73n",
  "key18": "2xbUQoX1s2gU5tNVJyPzxb9xnR5cZTcHqDBjUkMiimX2eAwMLYMGqqtKhgVKn11ZiL8jtAiDZLWqoVm5dGiUWb8v",
  "key19": "5YTEVfR67FsGhxnhr56zkuhkDdJ2SmQdFYXW3vtkyksqMpiFTxvtjkU6mvhXWTM1bbWAW31R5qKyifwiwCK1NRr9",
  "key20": "o4r59kxDLMg6rye69o2zYraMFwwwJBvnFWNXkE4zpqrnKhT8PMBVGgewH3SPguDPhm6cNVY2P5KVj94hA7NCNQv",
  "key21": "5nnj1auec9aYGbkPRFaSugwEkDjw5gp8ckXrrCjsMXDDwqixNCbF3twWTmRYwbUVT8cSnuG3QxxVsLtcJsmQwD8K",
  "key22": "5iWQczhzDXFaifW3CsJN5wpVhA4HYBmKBPJznJf49KY5cBtGU4dXtr3TGos3NWVAAm6HAqaeVwMecwE5H1znu5j9",
  "key23": "5CaH6mTRUPmQy7CC5dzdkEqLNzCCrUPAufkED7mDTEgK6w4HcYhvUUv8Jc7anQjhCSxsRwtNztNSoaKeJkUEzp8A",
  "key24": "WrqduyJYXb2hJP1oFDy1fVW1SxC6z99HA2M78VJqSdjjKsBnFi2pjcLfMPnmvStubFf2EXRo3B7fUawobxxJn2x",
  "key25": "2LBF5CHARMGr4ochH9Xox42r7imwQdHWBqhVqKFk25a7F2Us5rhhhh3BDNqnbYwTfqYWsNaJQKaaeY94odwmRnrW",
  "key26": "52jjwCN7dHnDGtac5885jRSkDxHLcPh6en3kfBQxHPfe21CSDFxH11Y6TbKXWFPtMPYj5PLqWKJGz89mfnNnYwp7",
  "key27": "5Vt5TCQeUWSuC3yrJHvUsopAstGD1cC193dAnUqENiuhWaBaecPKp3ntTAMiEzhMN98JWPwQSzZ3H2Z7bkVFoxm1",
  "key28": "AUKLdYiok7aKAfJzfSdNnxrgc8gNXvo3iDbnKVqWa5Mu1qjSK6nWkzknaNpK6odXqTumxpTu7ZoyzUYSnwKi57R",
  "key29": "3UDF8U9ZLN7bADMYaCpfC8VPmDfF8vrcuMJcX9Nou7EWM46QEi2n3rKKLwVz5sZo7DhPmtssEuy8fVXvyaCHRtFw",
  "key30": "4n23zz4qMhYNX9A7vEME3ngcHH49o2HQcteL7kDkBCmcX68HKKiRQHLazGG1rfsVKBtChwehKmwLSkrFdsXEdLbt",
  "key31": "3nEZYXr7StAd1v8P7JXU6f5BzViy2jJwTQRtuQm2Mg9HQAfHUgi1FfkCkQ4j1vvWTnpo7jELGqyhnANfvWXiQarn",
  "key32": "36XqkDCS851rtcsyq8B7M31de4J5aok8M4uy84p1oFSAFSDKx4z6WFQWQfQPZZJ1y33pmYmBBrP6PD5ULVSebhyR",
  "key33": "3iKsrm9jdZfyGBT9zzvJq9TWagYFVKgGAa29Xg1VnHXot5kvEzLq7FC5m2kWMwYKB9fUiVZXiRQUZ7ACgzUNpkUk",
  "key34": "3fGyumDGqGZ15iKEJ37nMoF5xkKqNDrgiGN3PK8kTx3Q7KJCjatGfQwPsVfTywBReHV3Awd7uxgkgXWcTsQ6myub",
  "key35": "3ZyARg1a9guXtyKw5Y2nxm1k4dpQ4nBNdxm3pT5SBp3xAfNWmgvtkhMtwF7g9Z2NBZn6mAYVwtviaDfZUGhPLbPs",
  "key36": "5TserdFwx8KPkw3vq54kDqpnooGJXYPyuj9h8f8xTQ4J7knZobYHBvDGNHLs4iufbKSdEyCi2G5re3cywakxhK2n",
  "key37": "3NJrKKrYinLaVGNfir1LGq6FMUebHNZzfQjYJgbcQzvWkVPFfoSd1FfgbGjMYujawX6ZJXXF6Wu5HRtaSPEUKeWW"
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
