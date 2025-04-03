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
    "2MkujvFbAAWYkDjPH8KiTyDmo6W64tYsDhgBRkmsCSjuozp2Tvo5ZJjMfzuw1GjAn9focbyVKxvHWJQjcCuPikNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7e9TrKWAtFoKNv9asXBjVLGG1KtcoWcCKfULTCx71u7QMhm8LQnoUF8LG4g5xNJVBZ76ta9zpSBkfB85Hz2jqe",
  "key1": "4zs6WQ5Di8PRs5q4xB9gdnJtnYp6kKqPHXrEm7PnqqbMDE6SCNE7wTK4sDzQqG82UDECrpyVRX2ZsGMRga4yrUm4",
  "key2": "4Pn3v4C3BoMcJqaAdR5KFYNsWDkQgu1cL1hzqzwK8kBYzvpJQJKkxKMgrX9f4VpMF1GuTRv9Rdg1rTwxThrEffEf",
  "key3": "2SN7HgrDv96uotbD9CXiEgqnsi1SUhVFgVCRLNSoSN1LmnWmF9sDHt7Nnjonwj91NrLtmYug3mhHxPnri3uTtNy3",
  "key4": "5LYHypfLrRYLkWEfDV3iFnrfA5iJDyKFqJbSnetZX9MS9HwEx1dLtbTe45hs1p7zYFfQJgJcGRL5FY1HCuWaSiYB",
  "key5": "bnAtPYRPSLvovWvc3GguAKu9pj1nLgsVub8rUkMCFhguggibbfSnTMhZHGHztPqJnkvfyvTWYaXfgEpkCQQGwPj",
  "key6": "4wj6qv5ajpbp7w1SQkU1AH5wpyko3wosdYojzAejuH9fM4MMY7tof18ttb2ZoyNsoNSPX3zD6tPHuWG94wEPpKVb",
  "key7": "2hiYLQQUdoYcmhsz6aERsMiVFnDb3TRi1ZB1VmNn73G2DonMXX8z4LipxyyEs1PCDnMELroJGKD1hSLxjwWzLsKB",
  "key8": "5afBnk8kNJtc7aE26Dv77VmFRNo6Bi5mrcQKrdEnfvC4fxiw7QHNxpgKmGnaYdsMdZurAtXLfJcQWRNE2A1kYsM",
  "key9": "6ZJY9aUMX5mtSp43ZHRpkMs4apmyjZeoaHnED46kf7Z9W4YprzpYv5DjVpEdG6cokJAFyfJiTAKMxJnHFFcq41c",
  "key10": "4pNCTDrpLRUQ1cL7b1SJCwrsbGgQam6KcgvJbpU9U6P4nuJ5Z2UxRdcufByzU2pKFXymQdoiPgqKQJTvGJyGeMTn",
  "key11": "3QwU4imuyWurMsjaFQfGw6zscz4qgoeGeEEQrxZN6GBMTraimpCC8p4JtP9n1Q7omRgR2JzkpV21yB15SDvaL9B6",
  "key12": "4UyvkNWkZ2kRH5xgZgvpUvoe3VsUbWACyG4MVPf5rxa9rSY5xNQ71GPuf6i5EijYAwJPF6WK6qRVMvn5aqp5NCa2",
  "key13": "ubB4hEZP7Bv6JXtCNCYkf47jK8RxfDRXJM3qpd9DQpfHWoDL6M9qRnAL9qPAyT4gVC5JwfvqJgxY5hjrUW7XaQ4",
  "key14": "4ic3fGRUdtQR96KbC6zgiVG1qY7E7eWPdQd49P6a82EVMdDNyfkTXTAoqs5TUCPxcb5q1Fe2WSMn968TrsEZVx3Q",
  "key15": "2veRaRxSgh3kRE7Dc2WDNYPxWKGnS6wN4tm1oDByFBuo2mmRgSmXwyVKZMZBJ4QckJvRGbnCc1bsavRKj5CXyXKj",
  "key16": "2cgpoHzpTuuFNuVoDS7CmBcUSJmeHwAcanqXRhKG438Mtp3y6iYeS23gKWgvem4gHFFy1VAe69N5Y4md9pRveT5w",
  "key17": "2Ws1kE7GPac5dTcjuUWmqw3Nc2UdciwLZ8h2VKysCygULAL3yZN4XS2JQY9nuM4W9qyxDbKbzDZZ4QuQ7Kqgm1Hj",
  "key18": "5tJWJNyCKE2feecTvyDERXNs1Br3BCDfpHVzqoj5VF6u33mBRnbWvv8XnFQ6gbw9cxp5Qp8jujLGmEun5W37xXXa",
  "key19": "5w7WBGR6SboGKaLrTanajD8X9Ua54MrwTndt1LLYExNy9CbxJUzGN6yHn7iAC7J6wndSTuZUkskohRJ14biiJ5pR",
  "key20": "51WanJ14ZAnLMQEGLeNPw89E3sVXZRYUT6bJ8ggsg5KRKBfo1shaBTwWfMuXyALYiqz93Crt4NX8FBeYtZ5ead5Q",
  "key21": "GArVUk6yaxEbexZd8doELSuzgbjryz8SCYvjs363wU2hv59Q8eidiSwn3n8SsMNevSCGkFGv4NA1vZ86MMkUTPK",
  "key22": "8qGr7aVQgt33u7WEbEJ7PHfsDqnSctpd8RhubN8ect624YCRbZn9NtoqYrEkjhwCbv6WtNrbpNbpxeqgdNs2drY",
  "key23": "Nt5C1VovNN75zdDyQDtzH6qmEVBVs2hPb6A5ysQgTGUzHYXNAYxCJQmYhHso12rs32TyJviqXrQqzB5gpi5Rdtq",
  "key24": "2trzm3fUAdaKWx4AG4mrssSgQ2YCLkteKX1bQtovktnMd4jUircAvUioqCqyxkjHk6y7Uycqce5o15VmLQgtyc88",
  "key25": "2SqqzqTSiNBHsNhfuJGXeBAT289J2kP5CHYcLrd5LM9XzfR4uDSLt2csnXBs7ZxXxXveZfMi64erYKbchhGCUb9D",
  "key26": "hqN2sJKNgunXPTLVVa3NEnNWuWe8gF3h7ZEk2ThNivPRsQrCDHMTB6kGHuUDxWqdpw35p1nWkK82EnSuiVWoQ3d",
  "key27": "4p6Q3GrLomhnXRNwdtep4a42p2gj7j3SAMUfcEnXpqfXR6DwT7yojVB9HhM37rgVpmNtPwQiTptQxQkcEvRRE8gW",
  "key28": "3zR1VhDG2TmJehQc4H6S3XZYPAQpdJbdU5L3QpzuGRWknvxVfLj2CQNSLJLWbHhbSDe7yjh8QVXyyke6FYeVMDZH",
  "key29": "kvQPwhXMnnwbw5TcPpRoz4YoFpVB7LkoDpYHujrsrHwH8KMbYqJ7RYzBe3vp7is1ss9MPyMnjRv9gSEqBFtffKE",
  "key30": "3Ft5aEJsJPGK54FLLC3jMKLbvHeDaBKVmN127GeBX433Ksey4D8EjLnFwjshAvBxmqbv14DcFTybWDFJMwUr75kd",
  "key31": "UbxCmxitQfNrmvQZ7d7ySYPMjr9tSH1Wye2yRUQ5DkWDaPaCYjpfpswTJHeMD8gePfsZoohphjyJRooXbGhEsdJ",
  "key32": "3CYRWjFn2M7JKeS3pe7quvQgF6a6KSV1uTjZJHwsKVciSdoA1XCnbS8o28WR28tzzFoaihFQ1Wx9g5DkHsNTv9Lt",
  "key33": "5gi4pDNmGGTMfrDmf9k6Qana5SsRSniCA338Uu5r2C37Wy3wt5H5JNMcnC4hzjH1ijDPveehq87C5LiXa9s73mdg",
  "key34": "4VHkj5gNha5oTqn8QYsE4LPLgtMJsAiMMVzbj4Cr6PLnGeGHchrY8LSUW9iJVioJswBZsgwby4KiUL5FWySpwvw2",
  "key35": "5TsC2qxPRxLDb54zrYhcXYyBefmL1jA8AD3KLAY4qMLEYoLGugEQEVDw8JZW7FT3XK8aBqdXtswmHCEqkdKqndTS"
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
