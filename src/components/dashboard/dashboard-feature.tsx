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
    "tUzGi5xQvarj3BLmTHChNqTZLHQv4wG9KkSeyiajoZwTcT1BZ8tANNcSw8LNk1rXX515m86aBf96bSD7uKNnBEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ssw8vKWszfj6riFvQuZ9vMwFNEtRcaYCLm3DH8hSsz8KDWefzZew5FY4CHnCcaywNoGhBEcwywHYg48cnKzYMDK",
  "key1": "2tA2atAYtCbmqUvq1L5ZjgsfGFuqpJj6bBmEKTEPLRd7wCAoL3MX1VWMakeMeuSqNV5CMzKW5ZcaU658Upi9oKmb",
  "key2": "WH72iTLsg3CpCksFh5zvgFQoo7qVAUs6viR77zLethGF9kQnR2e5GZQYG5V2VfQNGUGLMLR65DqW5GbZieiiLiH",
  "key3": "3GMHLM6dhgKXEMbDXNmeuVs8eM8joBnuUyfDUsWif7JggAE7EuvAkvzkCvtoiNm7ZA3b1W3rzbA59Aixv5NYhfBe",
  "key4": "2kdjbErYWZoeaofzVKzTAurqoZQcAqRRzfzMpihgHsBorVgPyVzgNvJQHNrDTRM7FpHJWeCQF35Do3LkCDz38SN4",
  "key5": "3GUtyitxMM4EzqciWv1KsYCsyrZVT4Ex7wXuTLs7vFvvGu4VLbx5xNjvZrDenrs6Nfm3gyTAwHn7d9xFBBqzSsTg",
  "key6": "3eRoqL9wKT931MAtm7fgXPTAahUqAekzFdGyNXNbjS6y9i4KVRrbVAEmEoiXKptMKWRgXK32q6dCc4r6LSQgN5Cm",
  "key7": "UYxGMNePz1dGgFgfryWbACyAgn16N2QMiVVdM7jCWyX72JQ1zGcfYQyvMdFUfb6SawEXmcBGz1DMYDknUtF9ZKB",
  "key8": "5q7ZjtPixT4uqitJnqgzk8pTXj2U9ZQdoN8qtqSX7tCUzace6QwXcxxUt9D7VxXgPgzmQUWESN5B1DQNM1mkKQmr",
  "key9": "A4hvyDSFA9Gwd7XiU37sTRKZiQjgtMi999ijdq8krEAPfgoqqZXu4FPXZhn72vhJdHmeY7ejbQdXS4CfDWDYMwc",
  "key10": "qjnRBcaRNrCpFG86TUWTb64FzJsAq2oLXYArvUYFdAriMpktTo5Ywdjm6jiaU1p5d3s9JNbYAdhYZTxmgxh9fJf",
  "key11": "3pyHoCuzn5hLDvBjGsPqkWgbFrJyaVjpA8NmkP7W93aShFGFsfta9apecnXAfq2D1WfQzsxkEx7vD3FjNrtpvbNq",
  "key12": "nJRjkMV9VMwSyv4rW4U6AA3qFcHmjPVh3SgjLBy5hPCqmNX6YvuJek73FdhW6P1vAJEn7KRFNUKzNjAezvNtxMx",
  "key13": "5uncxUtctik9ocaoxpTAvti1yKJM9GimncBfz6RDa4JoQFgmZjrrocosTkrLsULzezzAqXdqRdPQBPEhP6Vsgq4R",
  "key14": "5yFmq9evN3yuo2ZF5ihENBTQsH61uePBzf6u8PEz1XWbKLAfgWjjoP9ZXCrETv1Qu8tnR36JbqBbEgenAhXRr7ya",
  "key15": "2nrWmB3B7z8Vw4iFhUyTfWFcNHKuBsPg8GzrBoLcHPEhNMehAhAaqm8EV8JyqXptReZUT8tL3PNUJ61HB6SPdU6G",
  "key16": "2FXLnkwoyfbABYuNpMgSBGRHEQd83TN7JMSxsZeudUoT1XDLzSUnrqeuWv2XEZkCXjBcLpekfCrESyy3namG8JfW",
  "key17": "vhLrgKJZTfgtqUttojKautKo1xx8TA8MoqKWbYUEkYcfjvXFCvr1NSsrkEhEfeAEcjXtvmRxeZBW7gh9x4RVW1i",
  "key18": "2YXTtHWCpXDE5xsRrw3oErkeKsjg6ZpKtgrCeLmcJSq4Gh4aDLWYVLEJghyRdRDcZ8MHPbYv9BThAhW3gbUmy9Ea",
  "key19": "4UZ13j9LFVebr1vG1yuRvD4rF5BznrehRsuZ8V18Lrf37WpJLVsVvfoWbU1D4NAh9r59ax7supXHbaeGL4NFcjTN",
  "key20": "3wxds8ojTCrvbU8fH4H1Lg4G6HuCkiurSajuaqWZtShqDxJEEGnQV5ohhBGidFBTa6fGw4hX4sgYXAsKSGyVVW6y",
  "key21": "4CU1xy1oJEbWsV4bofZ3JERbWK5h43c57itiS7NamBd78PgrvAuwbA9bdrGGB6eQkDDZLjxfTcxVe862Q7qqEKTA",
  "key22": "4Z8AeKcc59tdnWUPYF5vXja8zvzjm1o2icA9ZGjSWemEfqSWesfdMzosHZZZYo4m1AVR1FmhSuc56YdnTvw9cHJQ",
  "key23": "55CfVFdjAQyEUX1Pncyx4QULJ8HvnvaLv6wvQN51SJ4W6exDMuZ18m2ixUc6zDdu9xcXb7kstQRcTAonYM1RZ2NH",
  "key24": "XGeo1rhKxZzGDg5wvMdhpaudNQDENdR5MmHB51sGnNubfVsP6HGDoVD43es6FFpaMCg3xcHUcrbu7pGA5HcS2Lc",
  "key25": "3Fg72NKmwQxdKarQSLGBkV6LbqkCVijivQyvoyebERCnt7JTthrc9JJKom5MCTj1bky1zQDHZddZ7sL2VwY1zttA",
  "key26": "41nbCbTuNtP3pZNZxAgE6utnScZkh3ju54qc71PQPTVQmJ2U5X9KBEfz9GaxkgSqnrkDVBSHRPFp8zH5HfAQCe1x",
  "key27": "4Gs1DFrs9tagmTksuiaNE9iLbGqH84sxwX5SNtJ8w5Ezgtr4HAtxs2u1dkhHMuaJy3o26qixzPVx174WKGoLJp8w",
  "key28": "3tLbVKXvybWtFwbWE5x8i685im1gjzvJndapn7v2LBG3Hxc94muMR3r9GTqMAejwMDdcNU5nmuw1FJr8tcsYmuga",
  "key29": "74A4rJkgNwgoi5txji6pxFNoQyNhrqXowZxxfc1ZkBnoCfWD4AU5af1ihceJKGUFPa8UHaPboXk1bLTxozdMKrN",
  "key30": "4FQND48mW2fpmbL3HKyKKswWoHXFEH9aHKtqfoD2i4iVn1JxkQgQHdZrS92ghK2DpVHfDBqGsBLzaQkR9wn6fms1",
  "key31": "5vv6e28wHYSa3sbUwwcb3Y2StJSsgND9toitp93vj6c44JabX2n7mvodp4fk8yEEHyFxXiAXVepRfJ9p18D4ARZi",
  "key32": "2avKXGpyY2rygn5SupBMsZ2fRCdY816aAHnct64T5UNuVJbCGEWUxBhrmPpsasKCj1Ua2tzVuq48UftqAK2GSBUN",
  "key33": "4pVypdXFZXFedXLZKRtMr35pG1wfthQZMrSeSzLSqAyUPH1DBEq4MUX5KJ7Sj5dS6A5dVjcMWtkYmU726GJx6oyR",
  "key34": "5WuS9MuAHypgPuRfQMup8JGyRco6V2VYm8rGKEGhjSzXwEKozMPPngZdcFqypRLbV1nDgFEyABEhW8XiLcdxNyiJ",
  "key35": "26QtMsxJznpjKQahZ8dEbNvmBmNBWPEsAmFNQBCBbbqvKXKbEgg9RWxGDpBzHKTXmGUMsE56xPQWoPF6XB86gXHj",
  "key36": "63LFnrHHkg15kVVo9iZq4kPB6FrEbfSUsUP2ZkSbFVPqE3caABxuBWTpMWWvtLYpVarNRRrJ3qyPwKL3scqwnSHN",
  "key37": "2R4s9H9GzgWTH1MBJrLfuiagNWo4WHzU1zAnHkHkDR4LohuKzMExyoTTxyi1oMVtmFCFdCQBgm6YNKR7bMmFNuv5",
  "key38": "2fhJMKUzCLWyKSbre6otCW5tpVywNEgJvc2ZrcfkKZhCMifQUS6ckj4ii3y7Bp2bLS3GbxX7VRBu38ekdEmwQAuy",
  "key39": "5KHu5brq3fssJS6671oqMKaPZ9knSCu8esg8MPqZS4w3SFBCN6z7i7HQG8QHdobY1G6T5jEzoLhmBUnwmx3514EA",
  "key40": "VD1AuaMwje3hPsDGsgKbUsf1t1Q6V1FVUU2Et5qhBmevbsAD1WgdRSj2Bqh1qH2uvfqvyWtTxdkAP2fV7gW1de8",
  "key41": "5qG9pNbP7ogrfhR6XaMypbqDTHuiKfsrvjAQCX7M3b8iaiz4G5DCn98Ha9pP3ySCC2MUEr4zXNzBPyir6gtzK8ZT",
  "key42": "5BApu9bAPGY7tDn35jtp7eQG9troQh8zQkKcZVNhWTeEiHK43c6dXoWfoGuHosjfCRSVoqGzXXfKKVaFYdseeWu7",
  "key43": "3XiTbK5zqtjZ4uC1EzyeKcJYBeLnz3bkKETRFJUktemYt1rPfTDNsqXWehR83US2qi6GM8GAQ5P4Bc3jqwxiUHu4",
  "key44": "4EncpgyaNZNnitH1i8qKDMPNpQHmnS61d1cYrX1bkpqFmdWnsiF8Jfge68ridhh6uDJeDBx3svjda2Q9gVfWvjnd",
  "key45": "2bk2ZmaT2P4rLHQttykiH65d2SfromruUeR8UfrU2Wb73yu3yjAPNXEfDKx8coXV5RCTULP1vP4V5ezBgAiDQtMd",
  "key46": "q8mJ4Q2xePhGWMNNjfiZyiiesEChjhGDdAS6bXXY1AELPs51sHivK4ABnx92v9gK66ghfGmsiLpDp3c5Xuk5PkN",
  "key47": "64YnrjSQKmHzYJFzoYKWKEVRVrEyeuJKNvjPX6AnF8dgWBHeyRdN5WZiD7eraqm22rHJw6DJkBhDx1tBUdmYnJR2",
  "key48": "5tvVaW2V36n5b7H5ZhT33xLCqgDRtyyL3Y8cYyPothvnyziErXcebqj9d5ugDYhAkJcUNdFtr31xCPH3zv2vKspJ"
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
