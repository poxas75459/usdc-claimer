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
    "4mGQ1oSMYmyPg6AazdiM1DHYsQYHdxhvBSkStPBpG1kZ7EM64U8cu2cXSbFrz7oAhirPjwzq2uyZcfqYra5wYMpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNW3yGzk1HgkqUjPiXWfv6FwFP9m31MsMvgUPutQgFGcgthoNthPE5uZDVBvS2hfYLo3cAiMXAMkP2xUfCEg8rs",
  "key1": "3BpWkJHLDP3ynSy2mHqzxdnm1VaNi2Ja86nvhFYMjLmXJFytxXWm1eQC54mkDiRj7y2v5QLjXws9nMWTzKztXXD",
  "key2": "CPx3JjyPEwmaELYNN82q63XqxnH5ESEFeRsxeUqriT9HYJArvU77RB9iRcpLn4Zwoq2kjdsSLyENYpDCGFvJFZP",
  "key3": "5J4XrMUwWWnEJGVdPXbvhaPfcamAZ64jEHC4rhfgbQTkhCjtCW3wLvwS6YLpcqLfgqsoa9eTKj6HWL463ZTKiWMd",
  "key4": "2WraLP98iuoy9y72GJnbCdwFt77MpweTrjUATrH493qStGDeV3vtQu8B7gPu2MqMToSGJE2BX9NrTKrgtuK1saP",
  "key5": "4mYqVqx9UB4XkhZYX8tVXtR4MeRu5A7RkRXEXFJq6twYxgWTbMSmuTgyuMkKtMo9WxrYfqrVNaZeFQk1m49dxqGs",
  "key6": "5NiQrsnV7De1yRm9aJbGVvrUmyhQzJYJ8GMbLQgKn1z3CBXYJdrGcijNJ2jwBUWQ8o8ABLaz9o32sR2KaWynKobb",
  "key7": "5qdRHx5fvQvxkuNSdxfXnGt7ctqPKpesrH7DRysTJPBug4pfw6sDmbqN7qhTvwTDjh1CX1KQXZPxtBKHnwKrY3VL",
  "key8": "3u8CNitAGCFy5Zu8AC9yHnpMo1d1GZvcnqVEjDdfSH51U2rRAPB9VYrNDa9TX2Udb1kxfUtNy7KUuHtThcgA6Xc9",
  "key9": "59rYLgicKXFffbzdjDMd6D8Nm4pd5ccR9KUpn8EMz48fNAvqGBvY9k6c6khQtwCZ2L8w5aHYZdntmkDGU48Kvgs4",
  "key10": "bvHPtUX8zkbwM3knMrQxTE5AiAzmrBaugHPJbvb6EEbxj2mb857prZ4uaxRMbgCmXxp56jgF9UVujbnWLAiXxVb",
  "key11": "3FWmYRXFhpPP1wo6cLnX3vA8CNHB4gUWrgyszgyhJKVAfr1S8DLmsfpD3EbW64y3SrDG9kkLfYqmuxPH6tAUkKpv",
  "key12": "4hXnxswwCbXo1psQ4yAyUawZHd3vJ8zNT8manEcedWPxk5QgWCH3Nr5TWBCH5kYpe677GrgLAW5BicTYVGmN57L5",
  "key13": "4eYnrbFAr8KqZGde3T4yM3AE48iSn9qdJAfb66mwGYaSSVTap7G61fFe51QF7PUka6dj41M5ybsMLQzGRAiUpLTe",
  "key14": "5TsATxuhma3mgQK1H7PADAqeM7sGnHeKzoqwyxSB6ajqSzrZ1jLPg4d5K2SBPQEkgW1qParJNDSCyUcBcupDsYo4",
  "key15": "4S93jS7LaJNckhnm5CL8AKxnWWMfTX9L8WkckWKpc3hGgJmx2G4m5FaXeP5nQxPcWd4Vdkf1jLmLBsJdENAGQGfu",
  "key16": "4oGNxVc7K9aQwC7bbya2w7zpakpV1Mp4KFSk7Bc288bnkup6UmB75cME2vM6tR9d7nwmcZp6zBKVUNVhAnzePPPv",
  "key17": "2LmC2BJQjUwtxJwNi8Aau666V5oSpuS4cPcrqixmZpQY2Lit83izkSqgYJiSyZbMC7a8u4RwNq24LnkgSJgZpPND",
  "key18": "5J5EbMeT93aZJ4sdxcWZ6Jiy6CuLVcQbpZp7Lqu3o6FBVzgJ9uHQ4s4e2DsSaWL4vsBwTQA8YgLhjkYPGnyMgEku",
  "key19": "3DQxCzJadgCM7U1UhmyqiE5kvbrv715fCTH2kf858rGsxaYewG5XyRm5Mo2XaeZPVvRBkEL2nL3pdEHCDoDSER3Z",
  "key20": "3jRTB9XZuHFPf2MJyNDjpHTgEjzHcnawRsJiN8fwH6Qt9ccGv1SRfyerExAhKW3CgB3992CFKPTQvuvkBXeP8xKq",
  "key21": "4A3s1BC2YhVzfG92Gpbr5xtFnbdJNq771osnuEkCJY7WUUFAkTUP4jy5VQ63sFMwtKoMHiW7UABY7riNn5hRHYLg",
  "key22": "45Q4iw9bQTd2cXEpZh4DYeqLRHpfB1uVmK2C6vBFPLTjXSTj6GF9Wa5t2xGK4qfanD4ZiH7cGiLCAPLBzZW6Y7p9",
  "key23": "4UQwakk7ZrTjY4eSvcbGMtYK7ZXDTVef6xypUs8ycuVJHzHzGcQ7b6XHWUEWgtQP1wwh3QDwWURRF4ZhZnH53Y3F",
  "key24": "3x7HSoniC8NQJD8hjkXqaEEPZHdZMDVQqT9y8PNZrqLyCpjthSjpbo1H3d9WshBrq2kGsV5Wp95vtzF8Mh8yv69Y",
  "key25": "5re29zkWqjPJ6m3k5zdc4XY2gNGsVGgtu9vsExPtE69y7nX5dK62yyDPpnwz2SPQ35yaEqNywfgSKuxHz8QozVyG",
  "key26": "4pZauq8St27Rbkkdb18FP2svfasGoiMLvcSMK3rGXuMBd4peiuhwkYmeZMxg3acrEX3G8vYauKdLkLeGzHWrYTo7",
  "key27": "4hA1o465jaXQnAHiioNw9qq5evP9k84cGpMSr1gAfsFg82FmfhwBP7Nrc7gM3Aq8a6fCZ6e4obUd6iD3kXhz2M71",
  "key28": "5oB6PexU8b1vSs1d8piy6eyMWrBvtjP69394Wh4WmVFHkYU9GhbpAeGHrpNc9EHbtA7ZqSdpTTfKP9286KURYKbW",
  "key29": "cJCrnBvZvbzqFAKW4BZ1cP6wY4uEBxGyVeK8gmZs1mDbEW18QmnvRCRpQDboYTaBFiMtnotAcCn131rD4fEa6yv",
  "key30": "44vHzdL79xbXf1KR4EqYV2MxkARiMWQprJ7UrAkZHpJsExLrQvdHbh7LhMrbzSD2hKQmPw3Tt8WVYFp5YoyMuz6X",
  "key31": "4bRgS2phnEoEtvDsLJYv5yD5BmCYx4Auso6Pjhbs4YFWY6i8PVVGKYcuctrM9kcatnWqsWjf6Nve7h18MGTzr2QN",
  "key32": "tZrTu4AUSUUk2SePqqUirVGqi3vkYey62Efk4GxjSu9A8jzXzTNgkWWuhd5KEqfmEhJcvKnHBcN9QcQqm31cocL",
  "key33": "3fYzL2JJnMsJPZ2xGEYWyDip7vmu53fvJ4MXceHGh1zzgYaHYRzPj3eqYK2nfwtCk85qzZhNqdgq4x4nQwgVsp1r"
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
