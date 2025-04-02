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
    "3CkTbdKNbib1FovWgk1eXv1dCrQHvxHmw2DRBwKZBZt8WnezfaBDRaiUAwjbkvNBBQCHtpiqrTMLVVjRYbGm6rQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUWLrnMmVMZAZ5yf8V943nEKzbdHCccs1HNkKBYNFTKA7ore5KMTEZcS6AGvYQgoo2bSkR9sdBQm5m2dpVN5BRr",
  "key1": "2eXBchwALYuqgKegLZDEaP8rdE6R5tGQbihW4D2S77Ke5PtKVuFaAk52PwuCxsx9Dv295MAYdMXzcfWcooUooz7M",
  "key2": "4XsrJbDC7Mdiqf1xgiAmjZxm1NEtNLxUhZVqrxazM89uBYtVM38Xg4X5WAAwMk3KU3Lc8SxGGGR4nGiPrbnAp6nu",
  "key3": "67EzYqCtQRyvD7iuTeey34MDc9MFYY1jDYn8euDrGUV8HMK14s6iF5YY44etKqf6JMyHJE4bGcuxhsaUaQh55zmM",
  "key4": "5kMRKBVDydkkLhMMq7a7wXUgoCC8fRfGuBB4B6mChtZSaA4khBMKUYHJ1gNt5Jmi9ZCKdzCn1pKJdiUqz1hKghet",
  "key5": "38s5AvrbjrfwAzZmfZXj74qvJzDkTrhc8gf1zD1eqeKY8cyAdUKksbmraMuCdwqjpWH6Qf5wHZKT53ynPRAu12eG",
  "key6": "eKdvbVgK2gbuvz9SuqyBpYN2ZKh1uZBzu8MgPY4B7NaYGZaNHpDem46jUhReGW7kckuAxzEpbVLGSqrsAGW7zCS",
  "key7": "2uBYqwko1Sv4z5eg8xM5Wdo2RFW4sKtXKFEKZKL5Zqk1yVQmzGKg23hvZzEHPovpwd2uXUBNUrjXuMuYrGALZ8Mi",
  "key8": "24kKvpPKydegnAZr4JaYqp4icqY86s5zCWC4AGX8LcqBsWr44kTbTy63f2qCGqPfDB9UjJMw9GiuyVWGXi8gUPqw",
  "key9": "3TbjoRXF3faRYtV69XoaTCAg8aLGqzMuR6h9oUuZxCpSQGBgEJF51HiceRc7ngBKzEmMpFfnYzmQvY9eoZ521Cjo",
  "key10": "5776qTdvjh7SzMuztPhgWHBhFhetCjo9o5MLmmn9wGw6qEhsbDAn6jSSa9ed7EZkDdhLXZWkrSifrtVAiTgtpe2y",
  "key11": "3Sfn7toWJYuSnPNbYMRFPLazp4gmihscLEhmhsVnvUc3cT6Tcv57HNcWnCfoW24ETwzWyo8N9ggbi8Jw7S1T2ssc",
  "key12": "3XugwwGeiHnzk3n3UPCS5jDvbonYiv8BcdXshho4RSJMyLfS3mrjoJLS33kCbuX9b5n2DkobdKCmx5seayawwHLi",
  "key13": "23dmQeCjNxM8VYbs5WGYUDvLvZKv5ukEfJa84MuWy5eYPyi6jWSbrsXsgdtaQPYyC5cLrKWHpJahzGHecji2H4cw",
  "key14": "dpfkDdDvgieiquHBZCm712XAqKYrqLmhMupN5tEvPtST1QLYWLs2tLb9scdg63PgASV8utZy8mCxc1C2Ke6uGHJ",
  "key15": "5XkjQttQZ6BdoEwJ4AXUb9un2DKYRkUJkV2Upiz6Wzo5RqzMzcLgtXb5gXpLx1HuzctMtmwwav9XEd1zisphkDDY",
  "key16": "525insUKCHXxbUVu54inhJqh8zFzcwVNpcuMkAo7jBmZRpN62zHDWa4Q26C2iiDz5QYxWGUJp2ApwYBkdhMZdNbF",
  "key17": "2ifR7LQwa6awWAYFNpwaKJawLqksQgWkpSm1SET3hwXWXftfKJXYyhSa3njosigjGLJJafMH6NVntsW5VjHTLxMd",
  "key18": "5H9cWiiF3R7joTpUifCbZETJqNcFhtZohqipKYuToeF6mPB3gHQk5AtNdrTvVSD999v6AE7iAVhg5yFmjR1u2vEm",
  "key19": "387zFaD2dsH5SGkSZF9KFJFxth2jC7gswBrWCCmSeD3ZcnnKT4wzew5r5w5tMKF9y5DNFsnYMnnkqnqLpJhNVzdp",
  "key20": "647CRv4yUkz4d9a91s2jo4cz9D9FGk2NcPbkjq79eCfQHmMqTQp9n1WyFgGgi8KSJ9WSteaR1LuudUpR6BizEfzJ",
  "key21": "5KE1DqeucwDHXSAKyQgJsPd6F2P4H86rSMNZvc13RfsG84Xbm2gK7dnJtYMKGjQ79hPZDKnWrsfGGitT5aUUVpYV",
  "key22": "2ogDZqCCh97PLwdxeKMhPw9uoKFYp7HsAh4T2HHFcLFiasXomm8LYJ5uBQQyUqQAk2Py1iCQhjkYPbmgme3c1jQB",
  "key23": "63j6cTsLj56UFzD1DBWSsBqp5v6eaGLcNqfShaCheNp1DbFKb9isZDbBAipT6MDiZCBghkaMGDgTsTFTPh2nDSbz",
  "key24": "2xEXq6z1id3wKk9Qm6QyHmzD4C35VqGuMMmgy834juWfaDodjxSdBN2NdSD3pW4xcwihyMNAaMTAVYVLPh9UagZ9",
  "key25": "rLQNb24V8nvPiMjZT6dCg9uR6FJRZccA12J8Qim6oYDvqhjrSaiLdP9SRxpfzbsYw71BhnPW4Bg49mXu5NM2SjQ",
  "key26": "cBPVP9j1AnhpFhtUYvX6rxJpEw3KnEAHEYFDixTYTgHLrYjWiR3nmRZE2dqZSEYtgCksa1BMqnds7R619uAhHCj",
  "key27": "5xTP8DMZAYSnXNJWUFiJB2VYpo7rkowz4LgqE2aNuXc8wKbrnGsRw17VFnQ2Ug7GP9yvF2AWSuoFeqoC7qfCrVZu",
  "key28": "5nGfvhm6K79YfLFPnortz6E3EswZAt32MaL2BKBsv7JgZZ28RYNrZnneVoVezrsvBs7UQ4HZoeMuqc7UdPBS2ezU",
  "key29": "5YWGV4bykTBhbE6NNx49gVa1A76PmJtjCvkW8MefUuoEkCqwa92ghpfct3nmagyV5opA9hdrNBuk42c7n6CBaDeH",
  "key30": "3Mu7Pt5nXnQEK1JyFGhQWg8ftcdXJSRJx7gqmJ3AY5HC1ByEbz3ybRvXaC3mHDrW5Jr4NNa3Z8cXpo6nzQvCYM3q",
  "key31": "L2SvkKBYxnSkmsN9H7wi4m5BwnVukA1iHoGbR7bgyAopWrVW9RqULGomeog5xTmMkhwDfpcsX47vZZnDK49N2F5",
  "key32": "2e6UBR2ygLL8HYY64jt7hnHAwLQm5BUH4Ec777vHUHeRLnDyYnn3rtXZRqiPfdassSynzrMiYM3FXhWK8CueUrCz",
  "key33": "2FkqZWnN24BvjbjjxYnuNNuAoLeqKdfPfYcGFywuJTbBTKtcMnj1TAt6ZMXdY48ca6AwKaWP8Wu8Em9WhNirSC7S",
  "key34": "4NimhQhut7hrKTBh53f712itWuidh37nfiK2mP3oQrtTND5pjiEESFXxm5wjjz5Pob6uS9t7XUWafnqug9Vje8dX",
  "key35": "2ibSDWqfJ1qn94cAVE4fzqgXBx8hcGBdugoyTkytbZHrnVXisFW9rs1riZQaZBVL8wNt7LxYgWUAsbjebQq4Ardp",
  "key36": "5ir7Zv2F2poAYYbLPVwggGNh7f2X8BrZXoX573zRb1TmNXjZYz6AxYyJUV6vJQD3bq8L73ECSNg2ZQPWMQ3Z7gQc",
  "key37": "5cqF3XSHqDLjKT5a5aRovbzpoukrx4NAHnwL7xZujgPkyVrbSh5MyXkY2Wnj8GGfsJAz8NevkHDAhYNxi1jxFGfL",
  "key38": "63zjvQa6vj8urCBkzfdtNUHFaWgtGnWCYmxUn2CNaLFSXvdA843o5rqGAMFAZjYQg9tdbaWsC8zcoUoywC2kXSTC",
  "key39": "DLF91UeCtA6KCSQ5xQrjuSaBZvpe9Z66EXuiX1W8Uw9hBTqwdqV7qePiJeJFsyBxm7Hi37KNT5z5fTECj3m2rtm",
  "key40": "XKPMhHieSdUbEtVg1x5nKnSLaetvGrTALsq8CmyNg43kyNf1QsGetpR9npaPoG9JTwDqbXDXGMXKtao9gamkUBC",
  "key41": "3XD18gioQYp8QgJeYHWy6sGabSacfhxRLduRdAP9hHh29BgKTmG61kS83hbftBoHZbBktog7r2tKniP5zspsCnWp",
  "key42": "4SH63KRF9XqaktVWpDQtvAroQjjF4V5F1rv6QFGAy6kazDUA5susGrDE7pmeuXV4idvjGwwJnQU9L4kQFrxB6mXa",
  "key43": "5Zk4r5E8s4KQV4r1Q5DxH6EVRwQrxVQgDupiM2bk55zgd8XXnD5MSoLYhS2TChg97fFuvBtsZrc3E6eeiXhzrzEp",
  "key44": "2i9brfRpfdqhCW8SbUKmmKc6a1VrmarM2QKvpS8M6WcmZQtLDF6MV1NJkVKDedBB5dNP2iSHwpmtC5tjEAEQRbBe",
  "key45": "VLeBS14JJdgEjtNfU6ExKkRtBczsWsTz9FpCutjmsrqFSySEWtt7fTGCBjeM8k7Y5fSV8A8X9Fw5urH7ZocUh2U",
  "key46": "5JKYLoXjTcsSrY7sQEc311x3HgRt7wpMfzwScKehSX1SHgfNneacC4o3pGKfSw89UQWaP6JCq2ed8WgHEXJxe4HQ",
  "key47": "5DDSV1K9FaEi4B5DUFqFnbeJrM5edREsMvYxwZSBymxQ3HBFUGjgXfVLNmjPCUR5EVyQXobrCU27HgMPAA3gWAC3"
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
