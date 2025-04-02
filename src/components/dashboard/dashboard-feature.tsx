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
    "3Hv4TYwMYbEERkWvdukdDtZkHvdFo4ccam1aqAipq11HSSbG6SQM3mK6UszxBFrjf58B73xn3eTMEFeETaE6GuvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7fwjuFoqMca8J2MHxgD5DXCuNM1ov6yKkEoZb79UDt3Mj8PVtzMhy8ESNEVCdTQtckLzkTdQwVwPs9txc8Nf67",
  "key1": "5BHVKnZCjKupPhUKCxkqg8LW26jNdrrC3gFxRG175J1Vm84A5WUwcM4YczCooJLwr5PUnFnqoPHVCANmLbBEgBDS",
  "key2": "2pdzy2wVfL6h5m5UjUhDNfc8HsmVnsyUQE1Rjgm5f4bq4S7bJF9DXuaAhCirHcoLJSX74f7dkhVtn8FiNjZ9obNF",
  "key3": "1WczgCS9tWJo3ckDZSMebHBELydYA9QqjQMt2K16f98taHfBkcX5jsUY6tioUKw3R5U7TjUstv5EbZeDbVkckqi",
  "key4": "3hbiuUA1v6Ci5PRPuumRMHRSbtqRggxZRuR8efZKyui7ePs1L9K855NFNC18a5x3Ai7k5nxPSp8cVWjPTUy9tM9P",
  "key5": "4RSy3X9j3DJVUu5NcEjeZoQzCoXGMZ3kDZW2MdCWUj3McN8VwMHa2oNiVH6zNYGGa4EApU72cfp8fZrLAzovdLvd",
  "key6": "2KDVfTRcLpzrTvKqgVehgmggcT638HwJhC6KuoGigQBrNoH3WxQwKovNcCPgSnbqSBL4qEF4ZWJQzDKDpQL5NLbk",
  "key7": "5BFvLe5jNW2QGmsnUdxP6gvuqHsencoEx4D8cKzUsYQZ6FcXDX4QfscM6JA8WBY56vkCQvVRQNB6LTxzXQrQW7fi",
  "key8": "3TZuzzLW8F7oWeoeJjCV2UA9YM7VzTSiVrXxnuKKwM7inUqBtB7KHdFAXmkmDdvKj9Qx8HwCJ2EBBZDxiEuSCStc",
  "key9": "4x3sSnRXRiy3ddYzZksxtqtMVCFEzsfTXRcbVktJX8bAyTPaDmGydUqYCkPCqFLQE4d1ndbXyUXvU7d32oWjS4dV",
  "key10": "3ZraWcmZbjNt61wfxueniYjqw65j6SS1i5MgRpm3ajDQKZLDM2e2JUQcQpfx3ZWZoAmNkQAGZ6Lit1bEk2woLydi",
  "key11": "3WZjigJpEfdQYPP4P44k16J852PfBrU5uYPKJCgQuqNoYWKWknss7phLvXkJWUHJfqsEjscuobuStCEBUYFvKbxC",
  "key12": "4qtcLR8rGxkWcHUcuntxUPqZKPY7sbkbzPiUcU82wCpq8XQ5ATyx8e4RwxGN3CDnJCza6miSdNjME2En1Jd7ycef",
  "key13": "3S3U9gdxYwTMZz5HZr8PRc96MeB25rKoohQiMW4TmTEziMHsQx5mTB62NABdvKEFTydkaZd61rtegEyTGQ8B2sz5",
  "key14": "3f7kdBawvWC4usDDdyLMLrhm9TdwG4RT6SjnrmvWeK7mESTaDd1tXfzSVuKfC3onQLA1ptaLirh2xD8wXeDkkB4c",
  "key15": "5ZJ3eMPJR854aTXFkyrodS4R23iQqhFd7tUntE9mk9makfTt7GM23hQrFLFFAWCiYTnttxmD92gqkg1ABtTjZ4iX",
  "key16": "5gYbSR5VuwYu7tYQFvji7czFqxLDCAB2TqJEBZKMFXZbwt58pL4rKFHGkgrACVgWCf3Jrho5W3euRjNKmYGsD6fP",
  "key17": "2nfCoo67YjECMLqyY4Pc5LCaJknZBQT1xRmLsNnwTTX4GSs2x9PxxiuZ3ahkSEhfXiefyjuWA5ztnuty4CYPunoA",
  "key18": "4ouNErhh5YXdvojhtcZnR8vZpzVk8KwXABFdGN9yYbAiBwjMUv6H71gZQpnP5HDgZHUAZJgmoPgP8bX9S8nqorHF",
  "key19": "2SqUyjRs4BkcZULYGtaY2KeeVFZn7R7sLxQCjiNm4WAHiioSocrJRjEWmTDTeFD8U5iowMmNUJ3zBGakDDfjd99o",
  "key20": "5Gn3PbnSG3fPTYzroJaJpSGqba1u92UbgD7TNGhY64VfSjsnNxG7DawQ8FwxUCCMV4hLKTkzXf7i1Ku7jW3xypqK",
  "key21": "Fnoq5auZjMTEQzUyvAfwPXHY7GAVdUZfdro9fbp2qk6m916XDwjaDecywRPZyk87hRRFQdsAspMKQQBWbmJZonM",
  "key22": "YeuyUpj88aBqhdFLk1mrDCsk5Bio1NUbCTgtqvUFvkuGVJDMEwHUNRyLbKKR6V2RWKkCT5WE28XteWes4TTErBj",
  "key23": "za8LQ3ZBdHV61diKk1cP97oSssQGW54DKJrn9sQ2VxerKngmPPT3k94h16kpruDgTQ8QYUZtYzG9qgeWQgCiPfL",
  "key24": "3FCTh2w2YWSr813pLNtCx3g8Gf3uGHYcwi7mKBkqubsMMTCaayLCUmuduf8PbV3V37kNYar9m1HL2JV8CNELKJS7",
  "key25": "5yn3oWgwwxyLhrw9aQ9EzNZrwQ3F7hiup2SsNigBeLQUb8G6o68hh18tXonbp7FtarvRd8a9dn5y498R7G3G6YCD",
  "key26": "62t6Jqr1J6R8SG1YyKbqn2pvuXoEme5f4Sj1oxUgepYzFdmGkevKp4ayLFP2opNoYS3mNAzVj27pczrvL9bqopUq",
  "key27": "4cpnRsuXfMqpyeVqydUzvGDHueLBW2xU6sJ64K24bWJU36M7kLbYkWu4Bxj3tyhbCZ9xDmEWgw4nbN5ZTBN2Saiy",
  "key28": "5aTiFYzhpGZCfP7i8Swq99NAFXn33Uf2WZjjnZPAt2XVwYHqK1Rhw2KzZeGFdudSjrsprKsUk6q2m6pm5NWe779p",
  "key29": "2oSHCMxhmbj5zechMGX2TsM7N2Rh3piFtL7Xnu3XHpWx1CpqnYR5mxmkqcgXgDfQwhR5vx65PRYu3szW85bDYf8g",
  "key30": "46upSC8MvGhrdBbDsctbWNVWMB2JaLU7zoFG7jcKjBGxtGLBiFFPRknwabcXisfWU48A6A4KVGadDnjaHCgLi2fy",
  "key31": "3RdRHaa2oAcUmkhvzj7DWqN4ha7fwz3TN2jDPjByshpnL1cM61FhiRn2dsauuMxCKZrwr2JwegfUXTMNRrwjTbLZ",
  "key32": "3EGFGeZQBfCKzRao8qoTGYv8yRBuxmbQR7bTNyCY8qeEwBXvsKkR3bRAbiow9Z6Pb8GeR9uTefmnrkpCt8zJ3JeX",
  "key33": "CFovTfbavC2XmRNEcGR7daQXQChQj15QZoNJ1sCSptLoSxFuUvz9sXoS5YQwm8JDStLZHD23zDG6L6BnVaU6NjA",
  "key34": "5Fi5jL4odzKYe4tZMektR7vkn1SMqdRC7fPivguewBkZYWbYLo4eRtNynedHBxxWdt8x5pXTkV8oXtfcwAez1jRW",
  "key35": "2fNVwgBRogedZ4Ct6FxVNYWmPdkEeYJXwZMGva1KRatraJdyg2BxHRuRS2xX7nr6RUiKgGd5gAbnfgPshxq9rdfB",
  "key36": "2JGviJmHWu4bqzMiA2AoDbuRdqNP8YnVdzSymQH9BATQ3Q359RVa1JhRR27jWpBHd1J8xssFXLqYSPvR8xtZjWZy",
  "key37": "33nFt8q1bPhphScXCPLYnAW737F5dac2LnUXJUac6XamWKiy9NLtB9qtxzNYaZjvKkgsCWfwzUNrLfQw3BiFpKKx",
  "key38": "2e6F68zJUKq3apn59LCDuWPJEwwQKSEBySFUUfiPssQDRHzYVKeZQfWxSkGdvBywYpJPTgBFQLsxQhhBXLwZPift",
  "key39": "4HQAEAcA7wcgcUtTyTMvtVyszRnm7djfG4rFzUJqe76uoa1d3jwo4XQHfQavi8W6bDb9NmvqncsZ3psEH2RAELhL",
  "key40": "4ieELK9RTZ31apdD1RwhSY9LpaAErbKCmgbQC8FYKf2kw7kQoU7KFWn4RHRwvSLo2yySt3sSe7sMKtCpxjM1G9Fy",
  "key41": "xcxJU1QDNcUQg5vUjdXCqMT65taGkvgfxYBWVvkeu5mt5iEgEuQGfgC47WPkRrrFNQvCE3pyhGPbWweQY6AHd12",
  "key42": "5aGRmjTtYbtoiLbAimJbB65EexMiP48MtBuKT4PLph3NRNYHq2maArz8eMDaxpPFvoxXqgKUUjUtLC87RnZDA5MJ",
  "key43": "4P5sqG4S2TJw9jy59WcCG2QVsMCpHPw614Hwf6MX4Lio1GLwdbb7RaogNnoS2gDxX5KqH7BJt9cwtKKtdxTLDNyF"
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
