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
    "3qF7k4GxYMbxNNhQaZvfN8aAVvFx6B1ARqRJ41bmWhB7CJwBnbu2fu3aY6Xit4UiAMSzyfhgcwCNdtg3SPWehHq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxFLZwJ1ToPsWh1CRUmcZ8Hh8unPZMY5XQLrnLe4Lhr683baYD1jiAK8z7koaZZHGmTYnmVAHP4YQw4gkHTKcpX",
  "key1": "4J8JH8yBtFFtqLvExkSrwVhoShpLcB8XfvV3voqqJs3vboozR14DDWs6LyR5PEhXwLDydTc8wqr5yiheEvLsAS5L",
  "key2": "3W57Q9fBFcRroPpiu2psXvosQK7Ayumz4wVHghEuTiAd6vcrbBrRbpQe9uQcxzCC4yFFUnLisMFnBsw7mqsfkQ6E",
  "key3": "5YaD3EaQamrJJ9hrLKuT37vEdPbpBSQo8Hez8bHrwhSzrQfZcWAetNPks9VfG6VnREzi6DwJLMXvYaSSVq9c6wds",
  "key4": "3JkRgehZx6SYVDXqP61AjJrgZdyooaony9KwNUKrY9QnFuVZaphZakDcqmBBcw1M9L7KycYUqk7paw7NThMij2WK",
  "key5": "TF48FDDdmnZUDLQ7T33uvuk94c4gdJdhAVTDzCVyfPCUmhTYH3nzLLsMYg2HFCw2bky8HgzPrVnyjaxta25yQrq",
  "key6": "4dbmWYJzEpk928RKNkxum19FXvfx5xC4uS34gcVVvzi4wTBiqVwZE4TsPDC8SqJVDZ21ucaLLQMPuaN2rLJB81pV",
  "key7": "5mbPaa4G1TUm6vs59SfhhuFCQeLR83GFrkL2r8NBzCustXBwySULJ2mnHdqq49pXQ8eFkdxEuiZeXbbUHkvEzBvJ",
  "key8": "2RfKXeqm2abbxjG5Uj1n9mVWWv3WwpAE8tGUzQGou2RD6Nhpq3oHXuqx1ixBRDMn5cv1MtjFV5CygSvtZNKChAYM",
  "key9": "5egJFMam14CGgGLxSksxntKUZ8t4SLrvsDWFVVNc3MLgMX8C7bBF3AnHBmd2JPrF68zEqhCUG5PYJwu5NFTvbVUe",
  "key10": "stiUeLxEfSeW8Cms8RZrzDpQqVPT4puFKZMYYnhUbrYgJ2Hec2x9SG32qEDUA8DRtuJYutuSvcBNQ2r2jhDCvXg",
  "key11": "2dYPLVKmpKMARAimiDvTnXj8uzDh3cxX2hAx6TgiXTKfFZb1KRmpss4e2atEVcGt1vyuUJCmLRg81fDf9PV3feQ8",
  "key12": "bQycUJz1XrAJNquWsXmEJh99LqQGHp6DqK27aMiQRNQjczjfpJ7eqfP9CXTzyG3D5T751Aejus86XndUPp87R5M",
  "key13": "331BB7jSuhL8poVxLrtfVQFVzFtK2pNV61PCAfKaTwYZ1Fo96UZqYiLbyCm2pHtksuEkvfyafGdANYeQptcvsDhW",
  "key14": "oihcbGU2xmjNxUeRKSDcWGt5ZT5jNRjVwKZUc6kQFvtjtgyFwZ5CMaHMjnv7gxgCbJmyhUP5uJWxdsReejAJamG",
  "key15": "4PD17hpApdBxoXRkS9hDhf7ukZ2W81PrzXQ84ZcANmJFhsm5wyn27Zpn6gVTToY9Fvs35mRTZ3tFqQkJns5do97",
  "key16": "4n47UDYwqKqEKiA5bhAJf3k6DhEAxtUSRbD1FgtUTa1zbSuVACE17ydseDU94Quz6guSbKFcggFBBhzttSapUkmW",
  "key17": "4tRzTy8QqaT98CgKxBRkEhTb4QqHU2zLx7q3agE3YcDnWXY6LSkPDCBFkgJTB4PxD7q7E9caCXxQm87zWvKGVG3o",
  "key18": "47vJQKBBtwEntiVQjYw7WxXfoAiGccGnGxStXrJZhcwHRpuD3WuGPbzhQ2s6mN77EhRQJsDWkancvS7EJjisRUzA",
  "key19": "2XY4jLrmd6okcnLddPQFg9j5DsJn9QXQrhRpHjXJqghWeMd598D3o9NthzjkJZYL5fQkWMJ9LeXjgVJJN6Vh9r5T",
  "key20": "3F27UKsgpbVU6DbFeFRxQ9z7Sbm6FWdcYR5DYhnKc7zNaNwRjE2goiPmPiyt6PYpMQ4WjcePQtBMJp53gRsNgLCz",
  "key21": "3L6V24YXFxMmhykLnYmGuiFSwT26nvu2nS1gfTh8XufMjn25ZTDhStBPHWiNvJ4e7tdNPqmmdddYwbfv7txQhbjc",
  "key22": "36eEBeDewrsGeVf1EYg2Y8x7ZD3u6YWa5skDqYDTzb9CbHxtjU1mtuai71KxE4xjvv7fZhyp4e6LyUnbn3VvqqNw",
  "key23": "2ZRSef7iCvUyQYR2zHj9HctwUBVvmH2VRtrd9qcygvCWbTwCrpMKigERtBEaTxkg21FreWVm1C3vxDUWnLpjLsvK",
  "key24": "2CtVdfqEDpAv5L6F4B4F6KEieCMBhka18HFypcrnsmoaPLD1omtsU1ohgR2GhdzcaLM9cbBF1VTzehmEKPwbCjZ9",
  "key25": "2vrBs69qH4LRvuGudcErAfesQAarbGSeNEFWeWwRWskavefzHgRuFKWXM2FNpGfY3RnCDk9nefgaSkAU9MCaP24N",
  "key26": "2YaNdWxL368wHYVCvLVFS857xjcnFfGNR9uL5XpoTnPDfVNZaXYD3on7WcXETooaZ7R1gg8m8FraE8swtSBoMPB4",
  "key27": "3S8kDvWNDAKL8uGFj2Gckrco4djfm77YDyCqy9V1WzzLhZjBrZMTjmy7m8hQ8vScPDGRwXbmZBJ8wkEp2Js6zNKy",
  "key28": "2ed4d6iRp9ftAuMc3gmT4fmJqxvrfaS3CUbwshcZx9xKUUso4R3BfFou2ccBMqnyJnP3koX42Pgg6bL5iCoYFyRX",
  "key29": "4JZkQMqG416zJUiUWZFd2paXhDXupq9km1SwdQUrHGSSaeVKhHNJrPEePiPPv31VFEHUB1yY5HQbbF6WZurPXtRj",
  "key30": "4gyZKpS4PpvkxgGeXsFWVNJkEWyc9s6pEmwTgYw5KLvTKi4f6sdsed1pcT8CTNqcSdMkxMS5iY3pxEFx7kk1RUeb",
  "key31": "3RNBAnxGJvGUG9w4kVb51o99c8BViRPjTSbCn6UKVo5QWos8exgsqqz98HGezfbNWNtwZCZQYnmv7t196hcxkCdC",
  "key32": "5WRSnuGUhbq131g2TabpGaUeAPoR8JApGa63fW982Mwtz5S2v5KM7DXXTYKu243tLMj4AJKA95rVsjsGBp5XJn6H",
  "key33": "24i6Mua41prsAHz6sadE6ZpqWnL6RHiCT22m2EjZBgu65NftjXTc15kNVskvesVBZB74Q1HTHma2NWQhzYcmkaEq",
  "key34": "4Scr3rF8KkswDyP3RGEFXd2xrPJbPtGBVTs2YMrWaAARK2qyEYXaEFRVBxgk5mdrQonxCT8nXM4XdzT1UReSQeUg",
  "key35": "sWSJMx4JdpdY6mmeddVeW8RZunxCCrSPeogj1V4HgxCZ6orMWJtnyzy7ro5C2rzHU5wkmbH4NLUke1JGQd8NwAT",
  "key36": "29dGqPsUQgtfiQFvh1T9EGH1SzL9b7Mut5K6k44Q8WYi5fbCzyX5GVBcjvYGwJmqnZ7L25nXuc2CMJXbQ7qX996w",
  "key37": "XcjGw4xt1FpyZrTKrELW15pBRwNzz6y1Bwi1zgKZZ72rp1rwcLbLmWJVBUMzmZPJnCh2GbvduBvrfMKg4HJEF6p",
  "key38": "3obiuknQuWtU6cB6dz2QShTbr2XWydLuU4VkGjhWgWTfNMhUgZwKgdAMgK2JrX75se2sY7qLWRVyepsbcHtW7pPw",
  "key39": "4zvfqRnVQfptjq2qFEaGdqC57chhzmZvNGguh7gYwNes75H5TFRff4ZGWMw9y2uu6qHtA98fjEU5U621ntabhjqG"
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
