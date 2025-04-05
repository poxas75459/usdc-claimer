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
    "43ogubXLpdrLQzbsC2HQ54LqZSvxKdandaz7HqEKMunwvh45X7n9WpTEdMsdanCnufSyiGTKXyqz5N7bfmBGhrW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUz4vZ6PUtWaaLJVBFtL75VqmFgXfEypkYLBrETf6Tqa1j5FpasCV2hFrtEjdHTJyJiUonj82coWyMrE1Y6DqvT",
  "key1": "5FxwPsbzB1ma7QUabVi567ZhPKKcVWQwQ8bvLxrKtot9bwbSKcstvJxJDbiCrjX59r3LuM7xC2WAi7mQmbkJGFLi",
  "key2": "5vfkyAPcnuz8t7X6EPfB9N8BkTib38MrJLNXWRVrY35dQ9o1L24bhqgE1dzMYfhN2pgdziLproKZniJkXGySyRZk",
  "key3": "5JArJFKzy4pPGaD33adXfPgoJMhWXaDdeENC95L2CFVjPs28wGzVSj9ZXVgkSWLzVMN5rvQ732ra9sqhwufSwv1E",
  "key4": "297DUKDPCBcSU3JMLYzuaoNFxpV9sEA5M72QZ5k868xBzzPj5DwHXC69vf9KTdATdYKQwPCZ3BMR8x5xbjcqTFcx",
  "key5": "5aZQFw1rqq8YXCMbzuwzkV53o1WVCQDS6nKcM6EtbeVsVzr7oD1NHZghrZGXDhSz1htHRaxFKmwXcgdaRkNkeWBL",
  "key6": "KnZYV2KMBMnnEHGFpTg8X1NUyw3jbTpbXJVwLEayjKJP8iEzzyG2R7HAHnYW4MC29aY4jeiGQ1KCYvk9Ho3W8w8",
  "key7": "5jxLYWDpeHVb8Dq53Gs1GEJYGUb76bJ2tP4F3wV1op3r4fuQkDdi1i9mubsej9aujpQjBpmvAzUwnYyDr7mzRBq4",
  "key8": "QEV6iJ5bUPZw7NrnKcRaZLTZyppnHztACGsAFciv4kRZNfMT5ksa6bJiGz8euFphCPwzgBZ7tZ3vgn7471gMpHf",
  "key9": "3wYJwnvqjvHLDxyUv1ktZQxTw1EWu6VZtQEXWg93mzR6vvCwH1rYeZmF4sQxpBW2RZMTw35XkMV4NRnz7B84u74v",
  "key10": "5q8D2nUiVarNd26KqsW11Fdd99dr7WogrJpsMVANyYPx15apY1a6qihMt9qXh35frQCMr8exBNPvDmT9Xg3XEzGG",
  "key11": "za7ciKxNRtRMSYBtTJWRsy3jqx6c8sx67ocCaBeJsXDdzunKnAqh78Rk955Ks8PnWCp3fkuxX7ygqaeyG1Vc61C",
  "key12": "3MaHV5GAQ2rw77xd1M5FF3v8P4YvHmERWz5HQgdBfFqq4g2xYQa3peidLNZ4LBMYkZ3XRedQAnfXcM6tZEnjEANk",
  "key13": "2WJ7hD4KUGUk1zjem332YLAV1XVTWyEkxVenhV4o36eZLcjxwtPpAzvbtvzqWYufRKYNLQc55wVWudKMUtTYvkJu",
  "key14": "2RqZpn1XbLvtTf6ftjoVQmR2xze1rjYV2Tw2tXcAXeQGawB7WQJKR1cw7cEM93sYUiVgVhTWRZEVJgW2kktmz6Qc",
  "key15": "4HmpfQ2Jd41RJMbbYxZDd7X13diBLN6bEisg2iSo6C2yVrHWehPK5icL5U5akbZzabsFxe7NvWoo9gdVsS1NYJfd",
  "key16": "5KMc8ybwShQiVtoL53QKpgdfFshxa3YjPvg4vhB9mC5MQ2f7oBeaK3aapRKu7qm5sAvVeeGToWUz73LWKCRVzKGB",
  "key17": "4vX9iTSLpdE37RmPMAdDkBo52DyN6c4XUgJDygSqteDoKthMpYtpeknT9tJZg2mtJEfpzHMUSEPwkhhFD1CfRiPj",
  "key18": "47fm9pDbfQuYougS4jFy1sXxtUHDXptwAP78n4nW7qYSibGrQoTL259LjwvyY6ne8qHHEAdnejkf3kTcd1pJsxTD",
  "key19": "5rmMpk8ppSj9Mk8Dm27Z1HoRDHpAzGMrVt1TjfuhC124GrNTH8u7XWptvxCESnQk5HqrACcep3Yn9BtxB3RKaTqy",
  "key20": "4W1SsGxZkGYg12pNutFY95T5wfkFJ6fv29FJCEHMkiVifuF29eVkj1AKkBWuCSxx2CNZEysjiaSoqDS5wbnDBjh1",
  "key21": "4xZnqijPDy8AXHiYXFecLy5KPhJZfdHjLmDQHXxfSU1LuJrHh5JPEFRDXit5SYELhhdTgWTMksQyKwnPPbB5j2BM",
  "key22": "2iT2UpfEjhpGUCKKT6K7kPDqMpdw7MURyJ84jgi8hv6nEeY2KnDqu3bbPV3aQT6ryto3LniptYR9XZc8u6feARcf",
  "key23": "3jp2xA63BuEqb6mVUaEFPuLRqogHdT5Hw2enKwYGSt6yZWAdSb3MTtGWptEGnui2s8AY8xFev18izLXSAiV9cyZi",
  "key24": "ppXPCh5eae4UStMeMvPzr9JkdTxLxWUyMA379J5syRmtB4qW3nV7K63aPxRsmnXH3DduiHhCTruovsP7Uqug91d",
  "key25": "3pmmg7VtvoboDC4yUWfkYYmTurxs1cWq7b2p8KQf9GdkWv2HnqUxvihAjmm1eqUk5JwfWTbNQDsSM2GVUq8zxmXt",
  "key26": "2BA7nLd2i7WNSf1Zak1xdUgZXXo87rEvBAgLnh1fpbhvuNSNPLkY269aE6QoqsjRa2QadCFoTScXodXAj1XR1YRv",
  "key27": "5AxXKZQqGWHLNuSXfe9ttBrAs9pWK9bwSCU1t9tnENedvnL63pYchZeBFRfCsFcH11UkPgLCWeTGAcskKdeLsBbJ",
  "key28": "2CRd5f5Jw8HL79vykpmPtSUtnLDMUCGAqUAQrvCQhDK6jufX8wzDEgfMUTTrwXe7fpjQ4rbpuk2MctMLpfpUvRi5",
  "key29": "4NAuuWyM9hEhKqGHJ2TYkG77KehNWqeQkg7QrtSe2sH6B8V83Qs4fG5A3xjQ2sjGJ5zvKFGn2gRN5Cb4ARpPX9nG",
  "key30": "5GnRVf8fFthEMwbrD4AGP2Fv7cFWJnD4tjoWTEjAykUAQb8QLiyad17KeGuRUFS1tbuKZMZcUg6U53GEs6vnHuBr",
  "key31": "G1MGxQY6Wkaxj6ZZco7U8EEHtMRmZ3CW5HHooLcgDuMSzs1GywHnzMcDK4xd9dTeJ7pfQiiKkE2c3H9zMsnmmqn",
  "key32": "495MXc9ZZ6TFHZ31dMuvTcNbgN5rAm4CXKAiwZS3CXci5A2HEym3ihnLN1EWw1QzR1ti6xfVoNkmGNxZcKrKkhG7",
  "key33": "4nh1kCndcZkCLZsFZ4UVwfJ5hb5zyPrsine9g3BApLpyDfjQJAMe1oAthQtbi1MxXapDZmCQnc3VxvkUXFUjr88D",
  "key34": "3oBBMkgPDPdxg9nAsACYsAksN4QNDtr2PX2WByHqbc4UX2wggKXikCDinX4zU2zRNkSBVsCyMTkbgiTPtqCNYSf",
  "key35": "PukcH4CLJ3Up3Fjh75dgCvPn1qDxLfod4AD79xQYZzYGy5SLagMPmRjsegcmDhxJFcN2wevn9PaJAHLBtRhm7ck",
  "key36": "5YtJuqcd7B5Mt8KPeGi5fsFSq9itn2NXVyxtzXPVAQgw8VLnReozFb4c2osL9b38XPqbwxLjSHWvbDyNswg2e8bN",
  "key37": "x3zUMpUcNm8xfnVoboWYSQd9yG9ndCorCGKwh9iiFMZoqfYKyThnAjV5zHCgH28sui1RThHsPDCgekns9MMtixr",
  "key38": "5XJzxGzJVxYXTZwFR1zmWgXxhXPXzP2qtcuz65FUhECDE9vwUSzuVhu6RBXhM6NCEFQYL91TQBnPSsU11D2xGkAZ",
  "key39": "46sPDHv9Phevd1jhHt3VJrVGbxXgmHRvUE7sygz6AJBreTa249zy9bDi1omwktMuxptUMX3CUVXHedrrYxAURHxD",
  "key40": "Z37AtbMD7T7yYv8avvFpTLDftcEUAebwFa3Y3mNaa9A8DcqYKdn9jX8jhSFkd3u5gbqbTfSs2vyyP4e4q71VCYe",
  "key41": "JaHEM4VyJmZjqV4LiJJ8aAj1QGCHio9JmJjDTMocxpQuhJ2nkUKqTSbv3DoEcm8wXTVTyyprJjHUaa5ENTh12A5"
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
