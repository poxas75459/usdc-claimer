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
    "35u4tV3oNkCSMNuy53oSFWj6wjN8eLG8CMFUiJXsr22o1H7KVgzMnJsiEiZby6QHq3SVEHVU6HE6KTaoq1jTbUbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zeyWj58hfcJNLnfhXdeE8ZYEVG5UN6ve1y4f2hUty2t4UpTUSAQKRi7uwphefcpyS3jpyYTwQn7Auu2QJPp5iUd",
  "key1": "42nFdBwveyxXBzq2YsiQ1DWGoJGUsaQdLu9rtqMijPqCAmMRNxBLK84TXVaJYanCakno9VvBsTfKFFCbU33u8QAx",
  "key2": "275t5TtWA6nSXBsfxDhG7wqxwAaaQd9dctFe7wedUdhwAbQUnfbBi7MyNm59djq4YbX9tvk2sqWPCSSFTyt98RBz",
  "key3": "3ChjhyRae2N9npAkjj46Brhz8sgagyVxHRKXCpD7kev8Qt8pgWy9xpfYc83fDBPoPZMawo3eiS9KefQapmY6CSaS",
  "key4": "5dwWvdPoy1P8jFQRrroLFAyn2UFAZjWJ1xy32Ly19Bzywepomr3awTYEunmDkKZUvEPzDYqAd9DEcoQ8kqrQGCdR",
  "key5": "4JdpXyqiRFWGAqsmZJHQtF4TJbc11f4n6VEcm787AH4Pqm2h2VTQrqHMd32Vxh825SgqqPFFQ84RqE4gf6CceYi6",
  "key6": "SJoSTQ1V7G3syz9UGBoY3yLQhcnCF6KGowS1FsNWWtMCoLUi15kVwFLPkjpY1Zu5XuhVwgt85ncn8wnq84K2j4T",
  "key7": "5DM1QJeMkCsMDCzLHmNfWvVvaL2JwfxXs9zuotdqtTyatZxPeeVUqPoXJi8c7GBEvZGP84QWGS7PdjSbKLaWovGT",
  "key8": "4FkGphQhzCms2RAwXn3UkLMpcrcxQqKTnYn49DgYsHYGo5qNnJS8XDs7s3NP7ZcnUhALbtorQRHovSpjZEqsvTgz",
  "key9": "q3QM5dDBNyP7W9zm56ZfM2yEg525QiXUfWHiX1Do3TEGSp7fyHJ3PkoYD7sbUNBJaCQik62Zzjposgx39iav5BM",
  "key10": "3BGB5mpEsxK4xm4BTP8zB3TMV3Ra2H1qmFqL8HUuVwmakxGt1BzdTQZVqwyQj65YSvTGnBuw85jJ5ME8xx2xsBkW",
  "key11": "63qRkTnnM5w1RJz47LknM77XuEo4oAHRH2RW6TngVt53hCxeGWY1Kst9AAragtK3uJKdh6yRL8EY6rzx6hLp7TrP",
  "key12": "2UpzgajmKfJdocfYjfzAVxYKUe5CVyVYD2dG5x9Pssn8dN3MvYx8R3sm25cX8r23ctpZ23jpNBfFjjNb7zbX4xZM",
  "key13": "gkaqkEyPB6fcB3cBrQ7QGUZjSeVsSCq8Ab7sgFgN2xETrT4t1rmabxApKFESDDjPUKhvVzukd4659NHLjTYvukW",
  "key14": "4aYfYD2apaP2sbnoQRXoKkQHftG4P3U1MLGujavRNdCwa9eivMgzkhcue688o8wkQ3X4AuhPgqvr56NGaKNLHYd3",
  "key15": "4RW6KUqMPrApr4ULNAP9EfetBdu9QEff2QCW52iu2LQLiDxVyd5uRj6vtPphJaf2kxBR5WGqPYn5qjGh5fYwJwJJ",
  "key16": "bNntHhFhWgpMw6hVMHjh3KdruNtszPMnhgJZYgPfBZwBVyphvP2LDSnAUkVnJGbSByV69os5tpv8DR9Yhw8n3pq",
  "key17": "5bqGLQ1JVPtb2KL8rQiJ1RYZphiEBcdGKHGszgUAPTkCX37x2UguMQDzZ6uPbu7PtbWYGGUpnovrr5ABfKTxBnhW",
  "key18": "4feCzkRMnTt7MWjfxuY6EABkSGodqTaT8WAYEjWhAKaMmWxn8vDgKPXL6Yo5wgp2SdCFyV4AZTZAfw8g2ZdYTfj2",
  "key19": "28fb8g5rT9pwFouRqXGr3xTY71q49TVM8KdTs4ZeJXRZtSvCGkb56rp4vJC1tPd2UjCSXQ5RJsgUXswSyiAevDP9",
  "key20": "4QPrKmBvMVcZAfGxZTFNE2o7xx2H2WWXkGSX3fQmDBQrVCA2eCRAitUeumb92RNJxRfGXpN3mLX48f4D1VJRsy7R",
  "key21": "2nhmXgsULN2aWcZvAeCLYUnEdZ5YRbWE4auPiWkrVMnFrkt9Jde7h8L7ttC9DLrSPNGq3ei8XJuXeVkH6fvrVTQN",
  "key22": "4hpL213jcHR1FJfziJn1WfozWz1GRhcQY12SBk2TJjsNATMbNVV4zzwZYqgVauzbvqPzMkZNbMxm5ADL1dJmwwtd",
  "key23": "3Wx3tw9rDcEVEFs1MG5wpfQ83acZ9xczJ3ujZJrWpZnNx8Aa53Zj2QTFTrV4Kfa5bubVWHp6CYReZXbKjK6LjenW",
  "key24": "2PS37SFFmGQzKxA7atjaaaPL4dQEDKNvShEJcGZxbKJZ2efjn12nQuj8vinx3wRWLs6zZAHfwAQqM7bQCyQDF7Au",
  "key25": "4D2FKmcH7ZduD85ZzMzBmHPp7m2dihQ4QbErLVFivvw9AHCchJNEGuesti9ehPr7TUA9UWFEnVv42cs1kFCQ5zRR",
  "key26": "4Mch7WuhQSqCqAPhTfycrSoTGzf8wPAj8iFWsufuxAHxecWsVcrJSZYfbuiUU9g72i3yDa42pMS7Qcg7qktHiiMu",
  "key27": "vycohLiCH8rZW61seBBeNTmn5smhUsoE6CEAx5EY4jaRgWhQkJaU4zWShMa1MWAZA5hamuk5Wjp2SH7ze4TJbzV",
  "key28": "5Y1jDDs7XRvHn9Hei7QFCUNhqzZaUADNAy4saXscyCg95xfRz9mWgHP6uYMVWtcojHxucWD1dDTq59GFuhbdjHS2",
  "key29": "67jHhpTbvttm14qxAN5x9FWC1cchnXtaQRkViBtGXQbgkVut5oJToNAMETZnX4dcEGCaUJrY9bmquN8a5Lptjah3",
  "key30": "2MQyBozbRovj7bW9i1SWUP42dRS2Z5MDLyhCo5QfP1CcAKTHWSPb1ZVWVUaGTAnvkQTw5xVUmjBBxfVx8KhyiMFg",
  "key31": "WbgBT9dZyPfuiaj7wjjmPyLi9PpNYLqLhSsinGD5m93qy78MZLhevkcQqeZLBHpKTjgMFCQSNdCfcb2qDrZdqfn",
  "key32": "3vwY4VTbKdj1xXMHse4A5SzzyJmbZ5gNaTvZxfyVdLn8BqNMyTyNuWX1CvdSSAcZUP25UF2HzbsqaLTXwKSNe9ny",
  "key33": "5aK1cWpRgF4WcaCumQUvT8htAR2MpwvBsabWyhjyD89hbgY7fPhNzfeSoAyt37V3S8cP1FjiNKZ24AH9saomb5v1",
  "key34": "26hkwGisUud7tUEus732ZThPnGgY4tTEZd9or3GVhfbAoMkPyTaPV5y3eGSKuV8kV4rUoiiAAXXHMLz1FJduggeD",
  "key35": "4F1HTuyH6eTcwhri6efcDxYe6Byzq1Qj65dg9UDmaudFkbZt7ZnWckkV3TpMSAXvWSwNF4rsZhJ4msop4xPg9Wdy",
  "key36": "2UJB5rYNXnnkAmxZUVfc4m3JQKbiNCxMLwT52BoD9YhCNUjzAMJuknRZPVjvvnRVTE8LhUoMCQmSv8QfTYVkqFjF",
  "key37": "58XZf7pGQoavqpNRft8Nr2HQy8aobTxfBSmfDBbMpuGgau4j8ooS5NR1tr5tGHBVDG4EeMUUwzBCybefaA86dPzB",
  "key38": "3GvcUeZYvAXWssviTG9c2Lq9TrfdoptaR4CADEU2oNCN17vySN855ikHuHWFDfjLs5vzKnazicWNnQjLbCmdmFDK",
  "key39": "3VBjCtmxriEz6KQoiaeDQcK2M8yNDiCTd3212UmEBmAfVops3LW8zyR43fey9YskWjx6oKFj8SVb7e1VobbLVRKN"
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
