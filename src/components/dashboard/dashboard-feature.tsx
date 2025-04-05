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
    "2wigvR9NiUrCZp5ZNaFXdu8rUfBPNf3prvkczmCz74jUziRE4YwZTvQ4X1chiDJ4iVpZQtemgvB7neafb4fnZsqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twRiwu5hsvqMnrgjGo2ne2Yeky16sFCijTpMz6qfo4M9FXw65nntTHkNBJmznzycaH594fNEhDXQVkzHcemmyAL",
  "key1": "4yXufQUd5gRBEXZ3xuvhWGHuQJ8Ve8eAQbyN4HPDcuLQQnSnhCbKHyCtyJzyYtvYpUQufuMKa5EnYGm22URH3Bsu",
  "key2": "56yxBH1qYWNyme7aSUFzi4nRf52DXWxwVqxp9nvqmZyokemMJVFXVjHVZmJvXjgzWRh4AJzp3pDd3dkdxZ68wfAQ",
  "key3": "623hqT7d9nUAkiNkRW4GkC4vGHr7rYCV5PZA6mh3fwD3FCbaapP5Md62h9G4Ymvrn7qv6wp1uobMw5bZsBEy9wH5",
  "key4": "s6V138Y434CJFb8Xr11irVvn55bhjS5zzZxmS8vpmzZGHn63JsidQqj2Ya8BgBR9M471uezL2XWcyoqoJc2aA4J",
  "key5": "4dGmjoGvA5rkPM4dgrdVoXEutTktyDbGsgrxmf4VW5vMSNN8UXDcBXLeEwTDAzJzd2YPPSviNjaSqdLmTxqo3N1f",
  "key6": "4sxmK5vJXMJTfKPUvvs3qQA4iHd273tkGNbn81BRuT63jYvgVGibiNxYgU3yK72jHcnNNbgnL7CwDnDhy2Ytpm2F",
  "key7": "5x4hdy6SgHQY41oxacUka8HR5sa8T3YZRqxB8MxRHea221PyJnvXopEzsJGGAhRch2NwBMdAZVjVZnmfRhy18gn9",
  "key8": "245p89aQ6JKhQSBkNtiwBHAJ7meZbwxRcjCH39CNf7DY3LGPkaV6LEaH3BVV4upDwESBx3aRBFbTwsRSg4CUHZdv",
  "key9": "2oeehp33P93eyEonChBzyc5M5W6QXZJgmCick5BpqdpzsKucZ1bSJ8tq3CXjx4Rhkh7bs75zyfNAP9mxRgXAA5Ju",
  "key10": "pjtc4Z6KB2JjZvvV5ZBecz496bCZAwGmmYu8WWyaXkhitrgufThHCJofGNx7Ref2YHjjy4rCRSgbAP5b1TpURhu",
  "key11": "vfsQPPG64cDZdfCNE7wCkB4RJY1PRXtmLw6SCj223bz5ES2UvMKPcBgfhA22CYY5nd1ME8MkZ8DNBPotrx9Kp5K",
  "key12": "397iB9nQiSAG4D5B6VWamupy2jjjdXRZCyWFQoGyMV38XkVaswEq7K9KGE3rdtw87YKA3AtL5fSwjUZAqNJedZVf",
  "key13": "5tHYyhzUMtwLYchP4XswumUxApuS64BKF6pQQH71Lcep56yQA864eb8K5NQgpsuniu9uZd1PuvfhdUNG6gvmFUwB",
  "key14": "51RyVh56n1b7AWBZ3ts91W8sBDUNZg6iUr931rRCGJu8pvdYG5pUTiFHZBk42YwBhBGarjCoY4VqBkcjA6MR8jb4",
  "key15": "5kNwKq41pyXVc2UhEBA5t1BYCVDDD1ZsmYiUbf8d5aa4Fmb8DkdJyqs6AZaYurcbjAvY3iv4DpRqViSFujZ1nDoG",
  "key16": "5yKVkpjdB3JkPS8gqXVc9XCsWatx9dQb1bSQ5ZyUcPv7LvWtPjYDFbbF9iLYzNoTHvcayFGvQYeyqGUiVSMvu19b",
  "key17": "1i3i3Nz3EvgkiC7yr9qdPZEFcLaEMSzKpUtzNbubtTJstM864z4KaFFGyWj7cziYG32CDyK1Zwf2BCRvjCotuue",
  "key18": "G1wuzA6153NUrfTt9pNt4cLtggKwGR3NJeDVv2PyYMnoLo3WWvuXrL6tC4YTZxrGVYssKjqngQ2S6GY3SFQoZbC",
  "key19": "4arTJBrHU9rLoakjCLCqkNFWrq4x75jxC6mzzLRqkpw1VbgLEpRKnZ8oottcaP7PKWqKTxUyCAMnGGs7ZRqiNRko",
  "key20": "4fFrVQXQGXkGAmYH9usxZmP44ZJbeP6XAtjCtHQdSzaFex7LBcnFcA3PTcmEHnkjhyyKvg8Ac7Ezx6wnxkV1uUY5",
  "key21": "2dh8f5Lbsbd6hy4fVAZivFLcyNnJB2SnrDkYZmSg8PP4UaQ4ceCBLagjBX5ENjBMFoSnT8ZtzcuEeV89nApVrWx",
  "key22": "2xXKt9vRxRmLCiKL2NYB43SfGX83DuWDpUisEgcF5ZnekR3gvjP2E3v9bBgG1cddS3KeVGqpRTdSTHAjBpPDZUmx",
  "key23": "ChJuhYoADBdi3yEkG7CPvfPHuZEd2FHsJ87TVwRnKEUxrCBwjHoABGFMT8dcNDAV7Be3dqw9yvJMD834MEGLbrh",
  "key24": "3yfGUDYfrcUib8MW9mu6DrVoyiqeCcfqNKZwjMMjzG9hfjHMT3dACn6WxRF36Rvbhq3sMiqXbgbY1ziSgoytLKCD",
  "key25": "34JuUjKkEG1ixMKtykfBQHK2uyWPA81HambiiCrSNp9B3e2fh1Hvaa1JuPzdVhgU49mPBFAKZ94T83tqJmr4UJkg",
  "key26": "67Q24kATF2Jpi9ALBwU6a6CYJP3nGMTad3GBQWMFR4cezEz8XLbdBc8ZnEtCo49NUZZ9daFwjQLQuzCPYoqeScT9",
  "key27": "2nbd9PMiQsHghVE7rFSV3VzSKHjreocHZSnQd7nKyjcU5KCiWJe8wkxCDhyDzgDXuC1TLesvf5hMSnxcsekyC4xi",
  "key28": "57irseCwRSoP8bwzzqLJUXP6FU3KT6TmNdiYy9cYrGgK1Asm2JVN9oJiqQimC6kacjUNYysdWgGyGgJz7vs5fgGU",
  "key29": "3eRcJ5Wf7dW6ZU4btUDvw5xrqhhAKwHkv1AUwCv5XF1hhgya6zpDKSvY5Jf22v8juiwiVCZdUQwQKCrDiNJqZvY4",
  "key30": "45ob1gVFJQgg7L1YgvThWLyVYAhxZuUrQ6byzNyfgsAcZVNayhaVBVJ221ZVHoVYYQGtKpUYWrLbYbojKF7RJNYx",
  "key31": "4cMQBXquzUqBS5CENZA7RPncSb3jH8tKt7YxpFMTaskfqEgWr1MNsC29tQ8GWGrdDEmzg44k2S3RKmBsdLrP1pYV",
  "key32": "5bYLNfPGJFmwy9412gyhbwDB7yaL9sQiJLnZTj7LfJhyT8dpVhmbRPAy3P8hKzzujZf9ZgwpfxTwb1VRbL2GAeuv",
  "key33": "S6o4qukEMLtgDdtygfkaU17txP6KpfZhk3AYdcuNEDHFu4mEUHeCkRX4GKdFPfVU58keytmPpBTmG59PxWwNpGx",
  "key34": "4GrQuzQrDsdtzY6e84JQKzMQEKTtc6dcGopCWVUQbhtejmAiW4kS4Ng1BktRVMYML5yUHp4uDV5fJWegZ6RRT6xW",
  "key35": "433fV8zCpFKkCsXNbKJ3oC6fc7s4u35AVBkMJs3u7hTE3Bf5unEAWJFrgbg3v3xF7ZPooj25eoyKnapeESxuwK1g",
  "key36": "5sbJ1rSk9VERRp2kk9Qydb9xmC3wjoJRC6L1b7JkDVHfNCL7sDDh9gwaofH43tryPrjHt44LMUQDnHdLb3yNa4dA",
  "key37": "2yptRyzVRSnDaiBGqhbvdVGJCm2oUkQJZkATD7Qn5S7C9gLXv6a4xPat2HJbi6EHST1dzyPQrz4MfL2LEgVpExBN",
  "key38": "2fM2GBw7F2Pwf3UATGD2YJsRjryhotyqhNXRuZUXWqBjSBq4utmztnYPjpS76AMn2JiVUtB7eRUhP6AcYYzqKwtU",
  "key39": "3WpWvKHhSNDMxaJmy6t6VhPZohGqqov39g38iCyfQCzARTkiDDzuzzyk4enSQsPFBtkUJxsbU4ku1d9yk1fLHzF3",
  "key40": "2vL17ueyE6kXJ9ApKf73TMeoD2DUHso8oC1CjzFcA8kzuCnWRP4rLmGLMesFKjpgE7yxyufk2W2XtnsRtGoxQgkp",
  "key41": "2qrC3pQpKoTzgwSv4w4angG28uuLUFFc8P6uxa5z2vKWMDKbH13teTdycxpW3K1BvUPK4VmdFZ7HeeadSyCHbBGk",
  "key42": "TmVxDG95KUR2LJHeeuN6b12hGB8BLDSqxQDSd6xQrdY1KaRA3aFBciGN6DDhB4K9LMHgrjtGQ3Zus4f4cNsNEX1",
  "key43": "36Hipy87thW89dLwJ5XVGYQegBY6wrpP6YxBUKF9kFwoQXzzFgKonxvZp3ueETyYiAXsXSFPDcrbnmQeufySyV6W",
  "key44": "5iUcgAFSbN1xu85NGkpvDf7fzhjxZsCk7HVkppByVNfb3kYciDKraiqVHMnQLJ3LDKYt69XwVqx9f872xjCNRUmJ",
  "key45": "JkrLY5jdQHVq9VjSBo93vBzi2v83Z6qZZMcJVyG9QfwGYoJpZsiKSxbHVuFKvWizW26wkaGft3dswEe4m4jK2uY"
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
