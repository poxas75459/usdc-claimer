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
    "3HyDFCBA5n9tEntbCanNPMpyJGpRApT9GgCcLwi7JkYHJfykfGcjP6hj9VDQxVTjybqCTqCCKQ8rvnK6gGY5CeyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MnfgsAU7pQvqBBXRAAkrNwwUfMNkoJ7cYLLHa1FeEh5dMaeNGEA3oXFfPqhK8BcaemDqZJc66j5bCmCsec3Qq7J",
  "key1": "3i6Djmv9qkKFAbqj8uhvmGZAaT2QNufaCzxScwZAEHmM6rE959oec4JLtUwALvuYoeRqjtgjyPqwofwNZ8aQQXEj",
  "key2": "xZw4ZLEzWu6GQ8qLE2mv5yVjDZyDc1PztgBjfBEn2rVvBhRvJiiodShmrvBMBKNdLCvoGWKS21dQkcjgTqnQu68",
  "key3": "yo9xqVjQX2fwsgWgKBrPe2XCnnFtVWCvVA72vh1M4NAbjgKD72LeAecitZCN33riBezRP3PHiUCJ8meW1VQfvVo",
  "key4": "21zLwRb5v13M3AQehNJbaj1GsZd8Q1XuxsmJYkNGjuLqNAq3KWiyyRVP741GWmkcYMWAUmCgmfPmjhYqe7VcNRZ6",
  "key5": "e6rPcfRXaxfZpJMgU97TquPCuGDRzWw4a8kBUQb8wCj7WQZYxttnC1WHfdojibvZPonrtjFwpU9xKJSNU7wSsKY",
  "key6": "4wnn1ey64jFneASfsjbNV1bAcqY91r6u1fdBXJ2VTqzFgTxJ8EPJ8LLWyksL2rjZjiXv191CJAFJPnyXuWxV7VpH",
  "key7": "4TSiJK5vftjSZzPmFKJbPvEz62rgQEq77PN6nZpXWFKMP8BSNyT3cBfeEmPBaWTPjeBhjg6DyPWRBjdq8nzE9FGG",
  "key8": "5zBwdVyLkR9c2QN1MiKikpT8vDM6LHoqSg3zdU2w1YNW9zQumZWAibAqZX4QpSkboufwR6g4BiLqHPveB9Ci3az3",
  "key9": "56CCErgH7Km14gLeBrh6vzB7dXZz2Gm35cZgFdD5XyxxYHYWn6rpbf8pqJJEJ52r33z2prD1NNjGax89UpfXaRw1",
  "key10": "oFRAKehC9vwfpdvCGjsE8ifvCecjiM5axPC6BNwFdeMHbvA1tG7oXNmFc4SFJfgFy3gkQ6ewkq5UzQDFr9cJ6ec",
  "key11": "4UmGV4uQTL8iBY1DVHGFoeQHvrFV6c5iicSJo1YHHQCZPwzARZEgmkk9W3DKNRscbqEUmAvkG1gKYFXb4DP4oJre",
  "key12": "5zpFQZvfPNgaBuzgZJeqy8vRUvpswiorKKDqej8UozE6gMnhTisD8qBtKmYDxHGS1wbAHnqMtuoJQpqP3wgQjU2Y",
  "key13": "42i4rJ9ZJsy2a3DzKatSnixp9dTbaRSdiX4GWCbQ1WJKaNfjvZn7mL9hpEkDAGTy7yYRTqv5JoYe3hVJagNo8GeT",
  "key14": "5F1KvznVPw1SonM9iFYXGQMWHpLmBFGRQdghPXRdPNemsaZn1GiDWofCDQwWgfWMyRS73NCMPeJfPyhsppV97FVm",
  "key15": "wVFFuitjwqWqQ8wjYRwBu46r6XohURgyfErwqCBFCzHcnfuvRmV8UEemjMMKtgC7pjS8AMzWn4gXkpsu6pSB7mr",
  "key16": "4hhK3SD1xo3gon5162Mdb2uFvvKesKLHL3XLa7dfMParjVc5kWrm1VPcdwFhZE3wDsgNHZ1iuHnL4oPads7he97o",
  "key17": "317FSoLJsEtdXkbEKPN582ytQQJPCMzxLA2iijNeS4VVFyGV5A4SVhoRX8EVRULaW2rz3LBgsbRewbMJNeobGF8a",
  "key18": "3eM2TUDqXQyR9vHm7iW3QAp4PjVKy8SJxCLckA8JdSCBcxwSUAG9arQG3sPmJD369Ct7LfhCkw9fEToCKDDSMu2s",
  "key19": "ZQTLQEuwZSyMphs3cmLP2QZvkvJWeDZn81v7d9TgskAaMAs5zsjZJ7w57b7fAiJM9QkttTGcZ69Dg9jyCBgL9h2",
  "key20": "2igUgJEHyipznjYAZHpyojWkrfdqw9yYp2tZpHrkyd4MVdKZXJu9DUrwt8ptEXj55nCppMfGcyXWswKbCwK9AQr6",
  "key21": "54QmTqVqXD8TQAJCj7tomt4spDWMJ4YP2hERhTfWw8MHeYaxt8jQV2zV6grEwD1utBb35hoztVZnM1FKxLTiySoK",
  "key22": "3JCvweCEPFi9ujm8BykokSkW7JFtuW6AU3ZsFv9CcrFpj3Sj9KjdckWKrfX8UVnioB3oLEmhZ3ityaCF45xtuwDR",
  "key23": "26Mho76vxSrWMAx8F6AqRk2RWKiw2qwkdBUmx6A1fwKCGrxS2BKWghPTyARCLVAcf8QRkD7veVYA6W5MHEoLLLyE",
  "key24": "37JxQDZX2R9gEFg87xeYkSKwsJRtgVKFEuGWap4wbAvuPufNT3F6afnQxVjf4taEkDtNmreDmAnGpSwf3FkzVbFk",
  "key25": "3F1KjCnQrnSbh9pggLFeaU4NC4Z8sqFF2TUtibcARor2hBaDnZqGndUyvdAYpmJCwvqMzEqLLP2wyA7ycvHgzi8h",
  "key26": "4HKG2BcZ6FKPH7f5fdGdRLhhPU6mA4MqwRSCTskbaDvpwXAZ63FH1PxFVD14BmKQTgM4HkKf7YzCcMgJVfjJATYJ",
  "key27": "eSbH7jBWDLCHqQsvdgGxbrXNYiGX8BJ5bHUVB8HsRBsoYG9zs3TcLnwAd7Hnvptbpva5QPavV2NguLhcLrSHQ3N",
  "key28": "4gfUG7m21n13SpCkeJt9jbMHa9iW3HJzJymbkYFfc9425ZsVBhdRndw1SWKLMntVBDgxyq3FLEc4hrR5Yuh4QHUW",
  "key29": "2CZGocGm3EhLYvg8b8Ny4bQwT5g6xUU2r5S7797FVHbBD6PTGfcqjSy6epuv8fW6cvmaSbmKwDWMDAgdtMvUpFzh",
  "key30": "tFRyicQ6RrztX6xgHs455EAVTtTb3iUZwL7j59P7zAxQcyA5ahuuB42x3MbZzkDoe8ozCbKxqyZpnycQJx9eMLk",
  "key31": "4gGDLyRSAJ3ZTJinKniuwmHsryxQQgDFNoJYeo9aavnjm9XfbRAVq3SbEZwe3EqVDUHhxQ4VJGc8k4xAB1tY1CF9",
  "key32": "NHWicqQ3WGpsf7J65KjZUdYM5gcZg1B5HYomfNWTDtusMnJi6HtAKvBjPKHz9Hjf6n8cUUqK1anfgp3UZaXBiUH",
  "key33": "3PBU234q1y94H8mZR5z2KTZRsN89vWUjeLzJTSdksqPHkzFJCgT8Qj3JdpNZUZtx1qgGhtVWksfeXv68q5WNnYMo",
  "key34": "2m53TmWEZV9K7QjJVEdAjhXPbFbXCRr3zmMuHsrfNYoc1drdc6RUzo3Qi7kqLLNi5zFMo3p4QqNRX8fk4DYKw8qS",
  "key35": "2TvL2tQVWwh4yL2m72qdyRbwNrYEUaofmP5a25iovj91oisD9ECdmAoaE6hgdgvuZFCF7eFicjwc9MuwQQBjrjZ9",
  "key36": "3cspKaoK9sKJX8G1HyvnS4eTo8TuUXq24VsaTxyzKa3mpftBDDMk4QBWMqd8h4fWUt3Rbg6Suq4UJFLBB1epTKb7",
  "key37": "7hf6sCcoh48XjAuw937TwHm4RCEDS785ADTFv3WHfXgptPRdjn6WLmixcG8Nc9mwaeHpjaoxrMhwntotTSFY6HB",
  "key38": "37nGjLMduLtCk889svsTQc2MdrHhyAeb2kLFSsm36HVD3zYyZmeoVoR7xqG2PsQ3prwdtSd44PDtX5Nbr6B5RrTN",
  "key39": "5UDLXW94g9ScZrt5Qjd7v7XK9ZMQs7GYTSw2SsW69rNdN3jbZS8LgeXWBMTNVzRxPUVpsJRVQk9hxcvLfAeLHwmV",
  "key40": "5ba8oiu2YDXzYtucTkxrWJ1fzrbyygkLWUyvkTXGm2mmqEhfSPg9eyCsPhpZ1BFgsZrMtPXpYuM2od8rVBpt4HqU",
  "key41": "59YanoHAYFfbEeNhCJq4bzPqFkuhvqYSpTf9jku4UoMYTd18SjNnkdDhbh6oANQSD47wJJ3rnQbth7KFaqugBJWr",
  "key42": "5mGiu7NjXLWDZQsdWKvnkVqd9etb1f6o8jEGzgLDgaboLHnNTBkfiToVamjyJEnGfkyCYm2rKfua4Tg9hCiQUA4q",
  "key43": "271yz1v4B9J7AsMGqC16JQzokUqbQSHNioefTxxzCXfecxHk1e4gyMbekD7wLypChiUFZMVpb3uPiFZUyWFUGSEi",
  "key44": "4A3dkoAgaCP8RkAmgv6dgSYpTCVsVjuMAfv6iPsqhyC6rpjURxDUZ12GNvfGfRxYC16GRZ5fsQkXNxkJ2MmHTNxn",
  "key45": "2aPBFeaeS9mNfzUxFwP3seZSEPnEVNJEpDxomen62GWkKbig4h7mGSz3X4bPQUZ5Yf6w2BNGzMEMvQ9vt1T9smbF",
  "key46": "Q6UhobcPD8gwW7wP14W7TjgK8Abtxy4EcnYEGuMQpYhX6PX6JQjT1R15MBkKTq1Cpept3s8evANvA7TpJCideAb",
  "key47": "4nf1ezGRzdoUnypyopi9XYrUJTLWo9tjSoxdZqLoajtWtonW4fbLcwjtNUVETeMqGCQAT49DU6Wae4HRQ7knSGVT"
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
