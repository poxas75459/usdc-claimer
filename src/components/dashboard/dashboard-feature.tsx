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
    "3s1D7fVQqyxYPrriLD8vPykdcV3D7vXMHbxEqKwvj2zpTFAoaqwjG3efA9a8MfPHUyUyseAmqscNAbzjcto45zab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wmT3Svs6EgtDa7feDUSfcUaj4pGk4khgc8KYdaGm7MmZiUx6H8A5q95t51gFRRuYaj8n7hcqEJxuG5SznLag8P",
  "key1": "hrMfPsYEPaGmxkyxyRzAFnCpydS5nPm3r6J7eDeEzLq3YLuJTP8a17LCt5MJA5EiREQPT6pR2f5pQk6KNJjH8gQ",
  "key2": "55pM6H88NksG2SoQCXCzugoD4rYCyh8e4B39XMXP5GeqiQU8fXhYBETBbC7DPj5q77ZyRnjvPG4yEswLvfkU45DY",
  "key3": "61THQ1dF8X47MU7jVbE7imxY5HmcFMuNMp9vtWf88GWqwrpao5ptapTTtPZmjsRgxnCqSX6dMkJSewWmiQXgKfSW",
  "key4": "5LiN8pyhAb6if1udPJgp6CCWB1zEGqyZ7WYqndAEhcuzbzp3upwAEBNxFEazd1WcQTdPkG1fVTTd4kQ6zmQHqhjX",
  "key5": "2wxjU3VxqrEA8uKw8MstmHfAzjyvyq2zKeQcCHRQRwynRHjCzpvEh9BJ5aXdusiyUPgCnTVyzhmgAh3C7QcEN3Jy",
  "key6": "3on2ikorpj71SQp2SRZ3oGRuJ4nGzdkbB7jXoqcWEyUqat8UayoRfW9U1ibwu9AZPWyDd6myDcShK6wzDNe1qNm2",
  "key7": "2XUgg3PrLURncU9jEUuntAar38BVWHEtm5ee6fGANkZbkByxwb4VKDdaW1VF1Vmh4hr7i8XZGoGSPooqNuDZpWue",
  "key8": "43o6J3k6Ydho5GfkKpQB2PpcFM28JbJB7fYYZGC63Fq9UxgCuuLVqLfmrVEXwPFzFFUExNfCq1YupJaav7xhe8Xo",
  "key9": "5ccxEjzrwgi7ZP1zs2fj6qSrr4HaWgGzLcH8RZX46sVYy83N95XVAPoysq56YEbJymkqU5sV1nSBKe45FcYqzVni",
  "key10": "aX4CouhxZQTjWY75GgSCEXPm9jgQFbMYvsgPUSnSUtJMaC4us6TFRvs1JVxcPjfu27KPXEfYoisuRS1mNc64ujy",
  "key11": "2hTNQzZdeLhK3E44B2PkyCGrQpDYbDzgsbMsgkHDE4RYPyzhzrm2WLVUo543DRJRXaq9hMjfkJUdehLcRJ8wgunY",
  "key12": "2hY2mW93YLJNbjQupMWv7Khi6xi9o5zK7fP52ZTNNoZdTkBFgMyt3rxyFbZP9jqhKMw54o61YdWPegQGWybwEmny",
  "key13": "2YhS3i41edyBftT6gAVHgVinf8FZrsiefHyzqE6u9EUVwgDCTUjhG9ZTR8Kq3fDDqLdqz1Modr9SdUSrTbfdDkzB",
  "key14": "5TW9DWCnLkrUpFE22AeSaWTbFLd27UoY31ChyuoH7PXhkrVyTvjDkJ6MjAjtxYL5ossGLjz3QajZiwnD6yexndgR",
  "key15": "3K3awX4sjVaDTNmmuX5ePvu2y5XGvTM753hCtDD3JjGX5HDoBLoQhu9B9m2QDGtD3k5ASnrcNp1HtU41Yg3iyGq3",
  "key16": "2mYnBaxnctUdTLxacmyBciHCKdsfyWQkxGQSdMuer9cEx4jNfzC5n2GgcT7gptsUrPS3JdDAg82eahBR5SvTnR2z",
  "key17": "3Y7duHtqmbFvHucP1NDNJwuMzG4zHTgJqRgu3mWArgZYUeFAAvMoyPKVrdC7WeivJTttcrFjwtBaHDhPvejh9wmD",
  "key18": "suUwbj1X3CT3hxXWBjFU4Ten5XRvL1a9br19TjLWZXUV1147DLz9uX2wf9tvy6ZgR3dPtpkdEh3QRLgfJGNyNxw",
  "key19": "3impwMgrHD6m2vr9TUxeZXja3U8u8wn839NgdcTtbkF3hkcZDebEqKT7imWWsj59yPC123WVeLn7n4Vs2Z5DeamX",
  "key20": "5JtoHKYQtJ5pf5vTZ1jC41HbgdVKpsX8BnGftmsrFDwYiTR78aX7HqZbNwT5MoEqG39szY33U3oYdVvYX6rP4Lav",
  "key21": "3DxQs6pnZzP5qwSQXQajTDhcpRtx591txwX6t4R6S2qWdhRBDFV8r1U5Fw3Nw5cQqcDxPxyGJzt65GFZTbaBw7T1",
  "key22": "P7vuWLPRwYCTbhpvR47jP56rrFddyJqNchrSSWFa8qEAMnUGvZE5zGwMuphiDCLDtqdhvt6ye7ih12YP97Wm8Qj",
  "key23": "3uRxM8eXG8ctVRw7V2Hv1oxkhn6Qzofiw3sDRUnENtUdp5FhRKBVhUy5s4HtKYkydu94ER4rEMv8heXfXr3BGsw2",
  "key24": "Egr6K8H1W3kvXU8h2ZFGJZk6EDJqESNp8xDu8YfWRvQYob1CdWYhpoLM2nKMSMFurLyBddwbeaAsrkT49SD9u1C",
  "key25": "5cEg4JWvyicuhvT6qMP3jXJFCdbfPNiTm8xbJRQutc9sNPC3oSapSE6k9cSE9gfRtEVx5xvzYNuBBEzp9bL4kxsw",
  "key26": "2KmecurxWAWfiDXya8DGhRLBHwj1GTUCTTco3UjHKBLXQoxRS3aNPayTZufDMB6hHqi2FhHpwivXcPgXcSjork5N",
  "key27": "2nP7AgG5JeE76DLcLCZmTqFBJ6UQbzuGfT3SKtqDapLdnXtRc6cp2HkX2yNaxmNL2kfh5zpVtWUrjbwMBHMcPVsc",
  "key28": "N4LNsqb8evAoQy79YU1c1yP4fkgg2wdaCGesjATvSd6iyq7FmnHCXCnudoDfVSTMPrDVNEWEMPL5p47MhZERSCt",
  "key29": "3CN1FZW53mWiDf9UUhVY1ZCPdWexHEvwX7ALpPVo9Cj7YQPPiqKyz2yLeKJk7kSPaV8xdexRtocy8PVrNvSSABDc",
  "key30": "4iKhYcxZuBeGqKDQSMbnf2yVVd2vjTZYbmoZk7twLy7qxVZA571hdE3H2FtQSRuyE1SkNzwi2SeCwXXXHoSxey5V",
  "key31": "f17uUGxH9V5Lxrid7JEHzLdtpivQGarhQx353Ftj1VXT7vkDSxwgcqwd63V6yc9UBKLPjFVjLVcHPRWz2os24XP",
  "key32": "4HuUobpturRj6CLBih9dvHEZpRnemXzjP4J4iSpP1cG6tD269gV8wkU9kv4JHJciTpkmkttNKgxjdatFCnuaU8rR",
  "key33": "Ry783waZBzVGdPPPNQhxSUvkiUizEr4DXuzS7Xj3F1e6RHppGBrZCoBuGsUWVMNJm7AajD8w6HJpKPH6MiJxPeH",
  "key34": "45FdG1DkidBMxMVM6L7DT8fZ9bAQQUKqf5jfRZwuxKfsaMGfkJknTdQpBC1iCGpBubeLuK1SkoVX4f6iniJUCzGH",
  "key35": "5T2GRsPdtWZGJ4aKV3RMa3fQe3Nf84XwtmbGoVUjRTuDmzXhbveAiSN4gpA8Qx3cQu2aepNtqzHLz5xcaLMM6JMm",
  "key36": "3VZCjsuA8EQmXfQyRwnZyLvu87iX2JHGJqxVY6xm7XrCQVjKshaN9p9prTsYbXFhSm38VcdffMbgvTTHChJoAZqm",
  "key37": "5Z5A5GFz3gscQ5k4ULXuvxvrfNcGLvhMj1kVqfjwMY6Q8ewu8kFCk6pbwUZzSGuttqiywKPhNkxTBYTaCRY8tQ1p",
  "key38": "2KCHbLB9yP9rdeVztWWMhqcrFu9rDyrfhvLis5vQ6q9g7oyrw21JiJTYsWumiGDcsh2TTxVHs8wK626ua8EX9uM4",
  "key39": "31tVkx6i7xrJ4ytKszNonVM2SWR8wnnCDVKAjcmj7RWWDZMj4Mx5Y4J9giSUhb8HYsMPA8Le58kAGuHEzF7w13LA",
  "key40": "4NKQtVig2FnmCZWrtz93LQPqjwgDvn823vNCsRsqhEzVKGrhNyPoJ9kWQhtHGYe77sm9ug2jFWe4VghkEWuzRouq",
  "key41": "4FZieizUTwqxio4SKk9M8haz9PLXYwR7ZHd5rTPWdLQJrWzZCoudHxRTuUgtVsfKEz4UtGNjfNXzHTMYhqMx6pbp",
  "key42": "2Du16fYrykGNbJRnVhCPKqkc74Ee1C1kRqfZobbe1ku2KZmMNUwPjfpjSkAsskLKLvs3D5GvLeQEZvfavZnyJ9JV",
  "key43": "67oq6srYvvesHEYfrZPHyAemuwLxY7dnDASeN1NMBgmf9BjiSQnDuNWJ72qind7cv1EUBwV8bT1Eshu5goHhvYyX",
  "key44": "4zFykB25A1HMRKDJFQaWNGyLfZiydzWhE9aWyBCKGKLoYsgKUmgoSpeMWR49CJf2GbsfMDGc3KWUBepiS6kVzqe4",
  "key45": "5HLcko2fm2GxbEzdMN8aKcMnx6irM98KgWnW8f7kDWQUiFbWqg3683imtXBWMQfLNwhk2bo2WqeaDpsrT99Vu9Ro",
  "key46": "5JfRgwarRZAmRA8pnRbj4UYDVRL2uUjDE8JMD5DtHHP9RXVt6mE11EmgePPTiEWUcrVkbMkYGtYjt3UZ6H5RkzPM"
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
