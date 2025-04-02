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
    "4QJbjSi1p4PpT4DeyCMaEjHn8VmUBUdt6T3UG5tp7Co4Yp3ZfZtefZVzme8bmYDrUCfHMGKjzuqxRxZZfbqmG42U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wctDFQZ9yDas3mfuGCbBDJCTvqa5KXvrXwnehubpB3ibs8dw1CNuMSXKwxingGEgf2rEsXoWGHsEDtTN5kMQPqR",
  "key1": "5paLuaP6fXXQjkXXbUPzpKNG3zBj3XpZ6SHMCj64ysuxjGqn3G953YN44bCaQK1HjytCDwBpcV1p4qo1vSMdTfNK",
  "key2": "ZcTqkEghYCJsPQUvr3mMsAMk6zQGAnMZp63Zk23A2Zy1WcJKLzgFaVpoU46xcfp1p6yqwq1dtqaJD4Kgy6MeFUa",
  "key3": "5Zj3VAkUkmBZnGRtEn7NBNxumsRdoC9CNLGA9pxwyR4nrMoiLooBRGBNFxnidTXcUKEkTR13nHgSADEW6fP1aErE",
  "key4": "3EfNvXnKRU3mknjoMNCrNCapcwgUgVDUd9hFi6JfpxQQjvxHfxWaGB5Rzdz4KrZS5dXFYbgkA7hHnV1p3SJLnbBD",
  "key5": "5covAQZfGsHiUTLV7geiZUTtUpaFjQsT9jDsXpVfKm5XB7wMG2QzEiSvAtEnXJF7yK8EUznvysXEyBmdyQF6gHvF",
  "key6": "2uo8WqVZ3usUetyRQXd5hK9HBARCAFwtgqiQvGf3QkM7naaHHHRsPaD1zSu9rJnZ8t9bJNBhj9iQyawcQwe7D4Ru",
  "key7": "5De92a2pKoR6JWewS6QB4Co4mEA32xbb7BwsQhoGmYhZRPWZzMkZ1kUi5ZMNXawLqv9DK1WNkRgLLr5dvf9ExzyH",
  "key8": "5eWNiev6xFMcDUMSBavrrRLEwKakgbqJrN4XPGHB7UiL8Wux2x7G3WNMueKjVVWETkjBf3Ps6F8eGTT7XdU9b8jZ",
  "key9": "2yyKCdwkhcTsAC6WxZcbsEeSZfNht7fnkZwwEjkdxRLZv2yTEj2FntNnceqUxEzCKCADwUDNfBYsjPC2JsbRx4Et",
  "key10": "2WuaZY7S4GqEFrHbHFFzvTUCPRM6e2wfrfiKaoSyg6aPj9P67UhqXRLuCn2vcAFDGbPtGHfgBXztHpVFaEaMKQtX",
  "key11": "277T5WQwNcqLEtiYPYVonAhHfzqCvq6E4Sx8JtAiKsFueHN4WT8cRJUrdcCfaEAE9HLGCBCUNfPvN7zoqGHc8F6R",
  "key12": "5YTeFr4jRfdWG82qXDzuRsQcoRRGbchdcx8WaCs8ZnsG65oiHH97XhAHoWYRCGkV32XoX4m9Z8HBrTKp9U2n4ELQ",
  "key13": "3LQrUbdqwd1TsPKn4c2udiyVSCL64ar7SHu4mLiR9Zyr7yFRKmWSwHekQ3FAdi6Fr8S3gK4iPcbbnUwg82YNksAZ",
  "key14": "4iyUjSuH9fc3NJbiVpVc5EJ83TqoqpmsSb9PDcD1dLzuhiBMLWD6PEdZkxm98MnQihHxWARtRoxvXYWzNkxno5jb",
  "key15": "5sSy49ov3FYpPaz3jUtW3fmwWwXaoNMFi5qyE7vbQMsQUk4p8M3JibQkywQmEwhMS7d69Gq5vP45a3z43EDSKYYG",
  "key16": "5MTJBERzxDEpdqcjiym6Bc3BTGS7ZsTYQwu65WRQEueo2ZFu7mQF2dpDAqmXJ9akJgdXf5hPBZr4B3HwAhaqRB8b",
  "key17": "45c6e3yKuBGu1DQrW8sCjXLZAHmJviH6GbGVa5sZhYifhHWU2gfiL46B1bdC96rv45yGQxq4f8j9z7Y85CQ9pUVq",
  "key18": "566zEDzFXVYAXB68EDNPtJPqqSSS8v8VpcY493EqP1QAh9bqPs12NLbiBbxHxH6xXAhigvCzh8ncXDbXCifjW9aX",
  "key19": "2nwNUojarznEeSmbKMaEGekaDncRPHDDstnHeGaD1155ea13H37cqDg3tFcs2HyaZ5Q1H72127vGGuXLJSMKY73g",
  "key20": "3mx6QK2MrufaZLVz13xZQdjv8zEAxWKBGrutMujLR9esPDsCygZSt9EGkKpR3rWw78w2h2pZe6jJJFxPDT9rhwx2",
  "key21": "5PZpL1Dx8zma39y2z4zxMnFMrFzhNsuQfppCfVVgq1npn69zHH9NEHK4m9XFrqQoybuisDtfS74Lwt9GhEzgfAEh",
  "key22": "5gFUWBrmzKZ1iyrhLVvHLqMWDvy3RQs4wUgs64vJ3bduUN5YM7mSn7aAqb1F5STAPb8FXzVKT3UAHk7Ev4VzvJaW",
  "key23": "4EB5kS1k6Mn8uHZ3FrDbpyuhmxGRU7YAYg6TwW1RPQh1WZjsZCdD23JMjb4DstRaZAkvYjyKcpxSaBvCW2vHMwd6",
  "key24": "35WKgzYLfjHEz3xEfRZYvV7zxwj1D79sjygc4mECDUGpeWSA2m9wWzAFsiEXoQjm7Q2hf3TYhSH3MhENWFaMtDBw",
  "key25": "3TgPvedFbztT8ML8CwXQjroQzerBNjtpdSiCu7nB3C6X6E4UNmzh6abvjVJyD7v2BPBe6eLCmPud5dq9xo9L8v2x",
  "key26": "3uAwQuWvuE7a3SamncmN1e2C3QsLxzvLF8AHFwGaaa7uX789iPRRK8diTNqeHJr87C4WYevGN21sBPpdjk7cGMY8",
  "key27": "T9wLWNETS6eYzdfxVEznursqqXmuG8HcwierFrDxGPJij9PoQSERLzBKpQZ5fufRAerTAKuQt2RCquoskSM3DpE",
  "key28": "4n6vBD1EsVGZjSRYUUbbKGqHutk44mFzQ3Bu5qkmAXcYXLtiJBSikfY66fYjCttavrTXXTfnuryZLSy1HJcQS29P",
  "key29": "3EuipmSjhFJxkZbRQ1rBzL2uWdxs6KfN3PXweeE3yrdgHEWNZ1krx17JtDHAcXmeooYsBQsLDef31v2qX129e6Kr",
  "key30": "2efg48VHHbQwiPhFt6V1AuNxmjHHQGTLcLXqrdu83gVfKNe6MbNy8otFbR4RDPnqm8Lhnt2suQabiQBm7NzwZMgM",
  "key31": "4wgEd8qk9Xk8C5mBzfgtwYJiiuRDTVXvb9QK6xfubewgQU7e9JPdkbFL6QshapBy8PnaBXsQ36H1k5UzjaRjJ9i3",
  "key32": "2rwACGKoNmdHUAzW9DJykqdVhVkhTYpmL9n7mANVDjK4Rk7T7nAJuTtxJKhaAGfF2rx8wHPXNUUvB3JHbq9okhrt",
  "key33": "4EUcZu5LTcDYRyJyXvEJnaP18WQZQ6GHZ5x2wM3HN3jqvXNySTzoioVct6Du4mMKhDBD3YZkPnh8DcJ821kfXAaf",
  "key34": "3yLF3YFgaHYqdb8NU2ADbnLVARTtQLsfdnScWKuwGqMVKn6FGFcYZ4ezp5SRhsoLLheqVhUvqLWpAb6rDW8eDZwE",
  "key35": "2VXAvRt2uyNSN3dHXXYAe5iiitCjJmpT1Shz8Y8oppydeg9RNbWsVbakJemPmr5jieB74nXnyuZxUf31FtLeS8fF",
  "key36": "2PcLgK9dYXq5sowbL1FkBwyHXMjej1RhxDdmCdda9KxnZ2JpMdSFxjjyUnSBeFoTNFb44UFPPuxbVXr9cp6BVWML",
  "key37": "2QwHcJoEstjmgA5QfskBCKJVpDBiQ33WjLJe9GhtFsYVjMZpkWJVRb63p7UUd2hV1R5FAWakTWnFcDemMb8UR3dp",
  "key38": "bXGUEe9yQjRYi6CcvzN4RuoU79EpM8Du2oYSqhRNXVXEtyfnJQFB4tqTHs4WTxVHMdhXiQZogDKpDeiwsc8Upgm",
  "key39": "5ctQPCddqRoddX7pwvb4hAkDoAWMvCJSHccv2WGdcXAdyCasDSZ4sBazdZxcDbYQVx4o9wreoWu8CGv5wJEPU3aL",
  "key40": "4qFjAjg8EbhiBTh4VseQXVX3DgKEoh4FYzXWWi5EY4H4v5rpFBQXKcvPcFkPKLK3gdgtZhTMT8LiyG6VdjzF2WcG",
  "key41": "2YfiMfZ75mtPEyp1qpabT7JJzhvH5rut6AsCJcKzYk9ERvhRo8LSnSrGsd2BzDcsfmuTiGUfLYyr12uX87s6tHBX",
  "key42": "2BedmSS7JUQWyGMUpz2hgqcKbE5RC3kEAUFjLUqVbPTvARKTMgZZhforCJJVGvooWP7tQFpK9QGTLct1Uq6vshgN",
  "key43": "XdcR64fXAyHcB6WewEgWD1RKKECiuMRhHoaX2cdSEwgSryVh2NVrR671kaBr4qfaV7e4d5ZoJuQxeg6QQXWps3r",
  "key44": "3j5jKt1SwhwbdVuPyXV7ERnhvU1qWDj1uwC9t2v8yvijRfexEq5wkM2hDoxnEamFxKifj2DLZ477juBCxHfaF9o2",
  "key45": "4Xzkfs99FWU93v6wsQqLpmg7y5B1GXE1in7S66eWHwVeXAg42qoYhbcGrXiYK443Go5tvAb4C3bJcPpbpmR2W7RF",
  "key46": "3iQdp4RkHkY33RAxyanTcM9frvGEZUh8Sc25ZDLiJdWwALhwxVTk8Xe1cmX85URqNVkbdihMfqahbZddHb581eYV",
  "key47": "3dro1NLtk5RV4nyFbMjAZvsocD1Pm6W5R5hLaUuZPD4g1v66J1KyNmTrzU1F7d7b74abKHKBqAWL9MAtsDAdTTBJ"
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
