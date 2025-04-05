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
    "3ePLLiumPUxzoKBiVpftUY8xfrkyTr4jpthuzx3K9cFgHQsqNv6gy6PQT1WrjA77u3aCpjxRv88qE3GjxQVwgZbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvztwSa9V38mhdwo4KgdFyFdzMKRUHS6zjq6hnKW6oPosPhUKRD15v119f9eg9TGyK6fv9VkipLsvkAAaRssn5w",
  "key1": "4bp6U68keznJN6XeSksmQdqctBYboEHxL9K5JEL3LqpJR5GMhgoKUNYGKMZzQzBVgvJYQRqS5TXRwAZezMECoJUT",
  "key2": "5T63wnDd9QyeW22cSprbsUn2LopeihFFcopEy4T5P5Cp3A9YC9d6fr7jzVsxtHvvibiCJLndPFzzZaKVWuX7ZEFW",
  "key3": "xDNBFFwbjZXSrKgoS3ra8UnCwvkCcaq227VriYcQh3JCWdqbL1wtgMtYa1XBURDRXgHjCuNx6pymQ7QJmy4KbAy",
  "key4": "5yqrDZziK8ZgGtcy6CZpzkL4zB9AscC1uEpKqSxmzXcUmMWedtBWdMDY23TZuUBZ5eeArZ9AS88L8eNPPJf5gGGX",
  "key5": "4zmSM4J1CSrWdgi1zTRzC4gEG8oHPRtZn87vJmyA7VuaEWHGC86wP5cVqkqDN8y1cnhCpPjzPSUKT86XmKQswhfV",
  "key6": "2h1Zb8Pu2gRD74fbi1W4TR2v9C53wELwzfxpgHxn8dG2qRUbrUsU4Fhh3NzGxY3SbFRdvTN9wfKCquo4qrQoqVKp",
  "key7": "sbUHkz9S8dBe9bhpH1LA7deBVKn1z7aSe9yVg4GvCkrQM8JKPPCVF2vGLfXi3wZrExPuRad5iqLdSKBzSDDfp42",
  "key8": "3wcJxMtEPdaFtMbZEokYYc4eT5bivdpeGgTxF4o412wB26cV8SgXBx1PBtnxS1xbp8pZUpULSAoFeGesd5t2hZpw",
  "key9": "4MJ9fJqm3TVrhKcEunRfUWDPnA8EiqzonsdErqJdtQa2r1nPubZhAumc4gqSrXiFnEddFFMeu8iFQsEfPq7NXEvQ",
  "key10": "2NZeycCta5Dad4uFV3mrTmKcbrYAvBeEttQdU7wgCWYWkrzjeUEwKE7G41Kwdfmny5tfj9NawTramxFjLqvU2Scs",
  "key11": "4wmhCro8YZpnpKuUR8crn7tpnZ7s38Gzwz3chQfzLtFmHJHAKsb44cdQTMsptp9eqo3s3S8dypued22Hoa3FmtSf",
  "key12": "3suoayj1c7BkqkaWzjaVZMJK1tCsHLx8hCXNnAPUgVGyZq1YpQQsrLyLDJVYQdQMYwCfrnzznCoY2iAv96M1erCX",
  "key13": "5yjv8hTp8K6HqDc2NCjkK36Tzwa5eia6PsWaVAbikKJ3vT4hwfTLSGVgDJBsVk5NX87DpR1hPEVU3Wr6pWnrrSrB",
  "key14": "3EM2tNpREKytRPb9gvMjY6Fe5iATpyqRDxBkcF8L2rwPw8JjmFLMXP44EfwprG4kDJZNny8dDbZA2bppRT5GWdVZ",
  "key15": "LMvkoieEJdUjx1XdrGHXhP6oKopR2njgunVSh7uA67QcRPWZTwepkTJTsj83n1igY56WNoRxY2W1H4XtgHWCqGX",
  "key16": "36ndPjnarh6sAbP29KPxArVsgtcX17zu9UkPphMGRg9VV4Gswd2hCYMRaNtVaGyEHwiaFuznoxZzAdXXo5hAsKi2",
  "key17": "j11qRgCdWXz6WCDf8QBrDZGo7ccvgWkL3NwCWyhZaWhRJtaHH58tvPbq3Z8U4yEG1ofXws3BDQ8iLHmjtcDzxAe",
  "key18": "3jFw2cGM6cySMedsumeXgN8RbkpHxu92eV39BKHuPjocpxREtCcoBBgdKv6fxLXkuunigbQvqB3qHdRrgVqCK6rf",
  "key19": "3TR7Q23V41fgctdoAz4FHRJqr45vqGGBMfxvYFihmqiNMr1wdiZ4oPCZhXqJzomdt6etLKjTT3YahpNCbYsyH4GL",
  "key20": "Sier6PcZa46ZZQJGJb1aCDyhfGgtHeG31V75oeC5WZJYZVoFyq4vTfSViLj1h8tWVxeFpwuD4YVCkYDghBjhXh6",
  "key21": "2FKvFwsgTWAe61Z6xGhjLzSPED7ZY7UC8N1a6nWLKxFjwi3P2sYCF22GYmTpEq8g8v8hGzPhn24WHBn3A5jJfpPT",
  "key22": "qg4m5kqB52wRyPnfJgFCrcv83FFbT88Kie4mCWnaBXkRsA9N9Tsk3VoSiqh1XU8BquVXPcJqZRmPgHSh4eufS2B",
  "key23": "2woRM26qA3K5RHscpKQG7UXT4A1vZK99vqZkoH9PvUWfxWQXw9UNzdrDvhtfTy9ApYtSisroBYpZptpu8rBSorjx",
  "key24": "yJ9jU5tqzdRHLErbDuAWyBL7HrdVoQyjTjYxV8x3e9H9zFoE533kcxYxKcrbYu5rL82qFNwKzRnQnV2XK67NJVK",
  "key25": "dqMrezYQZKxqiKEd4DRP5Tta6Smknf8DmcJm6pB7ie3whSxt41wBZVBweG185s6AD14BGGjWh4hEfEo9U3NmygL",
  "key26": "ffUtDeJMRd9Rv6eFmFNohJKF8uYKtA6XrTZ7XnN1eDU3faWbC2Fu35qw4o31ePFbEJiiY6BW7kTD4CjLKXj4gpA",
  "key27": "33fJdkaGfyPVi3UhsrNsGyTycq9Zz3kh5yKfXKVSXtv9MTJJsjybd8MbVfAgL6poWMdTCNtrxNqwNxfmfonHNzay",
  "key28": "51Fi8cq438Ntcym2AbUxxcGr2vcVM886Q39gysg7on2cSQkJ4gqtY693MHMgEyYFeiUCuZhHLcYZTNibmU6qf7ie",
  "key29": "MCQDqTYp2C4Knpq6K9811Ly3TCyjRQ69EJB6Q52YnfFSCuoVHa4MaVN9kFN2P3F4JXG2ZJMeyV8hqdVy1ZfvDvJ",
  "key30": "56pwFkDqvmHuixCRuzUumfhLCAwUQnZYYVEX1VAGobpU4TpUR4FuoYsHhwxvC5DBaZSZ3LUmRR5CgqoCsYLHpkPR",
  "key31": "y5NEeg6cspNPysYhwt8EKKYLyRSwbi6Sf6K2tDF1E6TLvuX7aqbT3BuX5Z9KKZPRbncAHySFir8yAomJNSsBsJ7",
  "key32": "3iTGQmML1iZNkaNLwq5nsKwzTqyVADaGkciCfvgg4VVjfy6Q3j74ckZboSArQ8GCARNqr7yde6wsofsVJYuMQnBy",
  "key33": "4xLJ6spKuTwyT44YgQWXQdfyknDaoy9Dr1fRgVwNsx82jw6jcR2rgKgpEbSUyCdqdjf9Wacedgr6h31b6EsYKJY7",
  "key34": "3yUuzLB9UiXG6fKW4cW6JgN9rnPAocDqRVHJCorpo149SGikPzACJqbwFpb6r9E7xehWZ9MV3wPFaeTJLzA7mv8X",
  "key35": "2HaiL3yFteoK4qmgJVFP2TPAfGR93u9aaRPSzSAibdi9NyTtqPWAxH7DovULUNsFAt2n6oMnkQTkFFWZdwN3ZRXi",
  "key36": "5p5tevB3cDn51Y7xLCJ7cQTFvXTXet5cnWsZDQEHtAVLj5wSfUFHDgVoMQ9F9um5pW5iqAaKNik9RjJE4Fe5AWds",
  "key37": "2fk7HityopD8hUjoLsPmMaGeDLpbVVd1QFJ216FawSFrHBVC7gSnMDJBTb82gEUKmDrhMd15HwA3Q2v2R1ZDvV5R",
  "key38": "5NcmfxbwA29eAKm5uxcvQQt6NLz88pgRtUKdwyYLS1WF8SKafeMzN72g1QVxxXRVReUst5Kuo24YbLCqHL9W2f29",
  "key39": "3YtBhsE5WGg9e1UbsyLN1fajUsNNP7ybJgXycTw4j9Yb5ARVvs6RVkE5BB5XgwhLZpTKGByuzdydnmCy1GbbEEU6",
  "key40": "3XUFe7sG3v3X6vkeC5zA6dLDgejjzjmN9Dvz5x5BPkj62QUGv9yzK3ZuFhy5owkxH2RHHLXNiF9NBhoKkWDVAA5j",
  "key41": "5ezDXPSXeve4eoc94DjUMHkYF2DDMBqgHJHr3TsJ4wp5oXSzn5PPx5dqKWViEcKDjC2Hur8NCX2SND8EV6XZdcpm",
  "key42": "3H5mW8mAFodCTdvMuJwpJfpMVgsLsoytX8jdwypZgVcFQd6qhhxgznXUgJmNUtBVFXBdwgVXCKU5j7J5JyxnD2ep",
  "key43": "37SyTKxCQSvVicRPsiH5EYbXDcxAB7cCRM5jasDgfc8UhUHgycKohCpN4ftWS9MiSpoSiTfxZKEx6RceEXDPsZxu",
  "key44": "4ftxdmRusrMhdKtqUVXRjmSdHJzK9H4PQAih35q9snNZAPC57Qd7QvWL8tqhNWVCkbQZm7SGszuEhMNyaZEaYR15",
  "key45": "53K6X3jN9ZeCbx9P3yaT3PrmFQ2skYJBKiaei7wFofScPnAuTJtNP2Rq74eanDeSxKGoP5ARXw1vk7T1cLLipv4P",
  "key46": "65C4P9TCTcf8vTw2wCKsMLqRVeFeTs3BagNg3qDDpE4GmUBAT7f1oVsfbvSEGmBim8UJ7b39XWL6iubwzzEiXkd5",
  "key47": "24hMH6u1ihuByAEooL4prybXD23q5tnZ6iYmsdCVqhBrEJ12pyZdYWjBzEgzJUgJVuebWDE4Kp8QXx2w4vre9AJL",
  "key48": "3XdEy4CFNBhnAhNkYoP1CtH9SqyWZJHaa2UJMQ7jyzST865LT1aJitPYxwN73QWi1R4m9SJeGTL93TAyNtJvPoU9",
  "key49": "41EhTzrYF6t8mECWtfn1Cp4KmBbQ5qXASmg1KgGJYxQFTYB94xn2Dp9J6JAm9Rkspic9AbpcrepjSvB2gsXmy1cj"
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
