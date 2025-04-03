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
    "4hjW1AjDz8GQo6bBqqjF1NJuS7R4C5qRDkT5BuhdEZYwcjsmUEjqjEFiyGFmigHngYFrkye9TdPKikXxzjrrCajV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46WvDwqZxcPks6nezHPNEFujiYc51DHttAWfqBnyiJ2GvHVu8ZeXH8YkrKH522pK479qU97pUWzZ6pjfXZebsUwo",
  "key1": "3SXSjbUMpCpyYbovfJBdakSzDsYjBkDVGptzjS47u7Agqov5yzfbrzpGawTbLg5xDE5TxZx3SH6vjyQYmvfC1R9F",
  "key2": "3uDS1GYfk3hfAtLUp54WMhRNDSeQ3XLoQA5gHpYDCmS4uYgz5z4tovxbh2GzaFqeSEMNpCKNNeeCPcZ2bZ8kX4dD",
  "key3": "516nmncaSwr3PjToXjY2yXFakr5p7F8FpPUMS3a6RsNE7LbKmpHWmx1u8yRTBJaagLkjtAWNASeN5pqWDu3PDjQ8",
  "key4": "1nT6BYWmnfUGnBzQeFFyWdJ1bk71bX9Z6QpZiiEEVWHsT4ZyayVPF73hX9vc47xLo8EtZ9GSaDrRXkqDHBwo5MV",
  "key5": "46RXXh9UpSsXp2XX7zFGana8wRgumoP3oa6wA1A1EKh6ux56KsKW8ksuuVNTK5BBGH36PmLvwqvDuT5ZasmjzjLH",
  "key6": "psrpWUkpWtRaprZKeDfCyeXgas9S3HoJYeT8L9SBx3mEvEvr5RZYmDvQ6kHjZohD8M6PiFRLzT7YTu5mrQUBnCR",
  "key7": "4VeZRjQ3CwoFKBP852iZnzpUEL3on8Nx1XxnShN2xSiZpQpY8BLhALu7c29eVCMKZVcqg9NVCNVkzymEBQqo1kSR",
  "key8": "5htxvSuL3u8FbuiVGLbBofXf9BKcg8FWGVwjmzYsiv4BquEqUA7AKkxPYkLh3JswLt1Gkdm8sw1rn6MbZA7jvo1P",
  "key9": "ca4ZQddYkADJkWQEHjEE6UgGogwMiWJMuuZfZo7W9wWzkzG4hXAT8oiQ97gRRDAaoKML5XW2gUtyUJUmDZksYgq",
  "key10": "5YsQWcAGy2xxsmdcxsH5m95W7s9ZeXdVe3651WjjBUAMFzbi5H3MgVY8jsHFoQTRQUuKkFXBn8GdCSz9UVLgCbCs",
  "key11": "5BzeqJiWe1YiqbdbcVnJNMC2b7jZfQ8QQS6RkxHVRcDXJUiS1JMLvfmYUqDbHrSVfeDx2TDXKmmf8zsUVAnwmvL4",
  "key12": "4sLpkixKfyeKxtgC8Py4ykG1zuZzQpgK6tDjAUPvCZsYrugbNxT2dt73Q4xWWWeWjXHhWe2RUrL6MmzdDKw2NeKG",
  "key13": "3C8K7bFtaZHD4b7Bf4QxBTuv7cmMXZ6dYNBWFFaDcs9GpEXbX54PEU5kJL5kpCgqxRh8v4BwyfLiFNccYnpRuRCf",
  "key14": "25xCe88A5LrVXmorih2G8GBRtKiJFgG9SzAFDnB2bsF9VjbLLjQ33KHqTNAnDgi42crfHxuJuv3Coho7pY4U82PT",
  "key15": "63WZ7M1cTBT85DLD6bivDMhNanNPSZCZABB7y6tXK8oCbKc23CUt2jriyxzfuBg7TYHiFaLjmQFJxMexpn61f2Nq",
  "key16": "nXSwhFKYhS5NuC4A8Zqzm4CvSems4Nrz7sbqvKR1udgRvvn4rVsgEyiobHCqgKtcYnmmrve1chpqvyAQAxn422w",
  "key17": "2DvCfNHk7JcPFciad6gnGo9ZTYciXNRVC85ZNoeRiTFgnqLqRLShSknmWRCfNXj7Ne44NVUPjG8MpXxycztwJoEj",
  "key18": "2G8QEJSf6BjBbZ5pRFEDg3mGk82KHZh2Gdj8VyehigkpYeFAFbz4eGo9s7YH8dNTLS1NhoL5Mg9WRpU1JeqTxWos",
  "key19": "M5dU8RCzST6GAxTsm13wALABifqkXDtzCxTqXRD56A9DWw7Gw6r3hCyEbkGHSdFBUY3ziTRAtoVkYsVRP9N4B2e",
  "key20": "3F9fXKDb1gKeot8KFvEJdJT9X6HLsfXx3Vc6q9WakykiqqkAc419BKkJsnHXLKaHeLCWgcEVBCYVR832TxFFMDPX",
  "key21": "5JQooWDLMPq5bBPyNGBR2ig7UfcYP25YkwUCRPh8ek27ZkNgi1BPtUCa3TLrSdzvR2Kf4egR8XDnuGGykn31mPs7",
  "key22": "5ePv4TnfHfY5ER8YCGdyExPh3MBKPURgHZ31RpCWZLtZJYLErdtrrtto5Cz1Wt3vuHEp8Z8x9kAiq9nvptyzwJwA",
  "key23": "5YYkbnofdYMUM6AYECwMojPi2WkxrdrcRrsAnnJRkv738SUpwm9jdxnDaahPxN1imJdnwuaQW6HMVzC8b8eKmDwc",
  "key24": "5nyzrcH9ydxR9snomw1RMzV8cUwpP8JFFdJDBpMoz9HJSojFQS2HF4Yx3GCi7kywWpbfXJkw1vn5RBXFVhh5QTcS",
  "key25": "5smQjkPVc95WxvvV2hjDrPG3mvjFbNrRqCktSmiuKdV7bz4ogbFyHYZHMrDiQMVNHL7D1Wp9crHaXiLazBU7Et1p",
  "key26": "2JdFj5S2v6muV2bHYMA2qLzLYoAqQq7MDkFV56joLT8p7hLmweihK1HWFtViUPn6zEtZ5eTRm11Ta4MXxhYE35wS",
  "key27": "4y6pMYZLQbt8rPPSLSFoqoAw6NxuKs3K2rTiWFLmG91cFBnEdZe9UrN5RoF6jca6jfFzuFMtghg4DCfDDVnAKNuK",
  "key28": "3EUEf9dzNqZHs3k1seA8rzzCD8T4537YeW6u5iGgcMv9FqULNsz7xZcqFPnU7BcerWPfuhGUNSzjAnxzhZphczVq",
  "key29": "5VYetwAz9kXXLHZSW1NEgY2iZENdMy2gkrNrYSPqmRzWR2zAeP9AJS1XVAuBCxf32ySCzm1s6Pv518wfUSH9Wz5Z",
  "key30": "28cSgH4dqfh2xH3YUzH3aDn1XQxim9oWqpFnS597HMaXnpxvzpSGc5XqBvdGACfSXgEoUYF5o4QB9wWU4vDc5wQH",
  "key31": "26nQ6JDRPuAFJ6ZmrpKGt4W6o8yZeUYetAeDBT6d8ZYGntKr9x5ysDjY39ewUkfxea86jLPh3fqtRzzxdttt74zf",
  "key32": "3G6z64z5aTCg9BPo7hz7aahDvuytST3sgGjEEUPFoscZno23HwCLz74ZrUNKpq52XYUQmCeJZdHqWUeq99vzdWdT",
  "key33": "2iQw84ULcodGVrSiPffz3a7D8sTJP7kgw8MFqt2e5uFaUxVzeFyg6BBTa8QUkVFKiJXm57XTS8acmk3smApeP9c1",
  "key34": "ahcq2AyHkjbv8MTJWZ7Q2Rj5CfQArmjrgGKbSgP2VMGwD5ZWNyRsuLqzmEhQhMxfYwt3iCX9roHPpj5BTT95tpL",
  "key35": "BrcpwPXFNBq49HgeVrPyikUUxA7sYbXeNmRdCPzGwo8hUzkyxDVFDSwi58Mh5DMj2QVQa5cL18X1b2fzcVFhkCD",
  "key36": "3skF7HJDXygTnFuNMk2jXT7oAJBAqc71LUspbBCYUSTDJPLvCdGPFmE2sizLoiw1HBMDTtnfhbAGrbQTKF8NhU95",
  "key37": "4RkmtJUrFmeBvX2zcQzj21iAehKipXsfJeCjDqGPDZjgiWFGAQacQ8yg3PXiWzmr3AnsBhTyT9UBjfcZgF4vD1bC",
  "key38": "39VCvsd1cMbLNp22PMtGASmdox1YJJXwn9zHd5MyrbzQ6mNqEMMViJv8nCHzwk2mtrPf3peG1BDRe4DY7LNfYVs5",
  "key39": "5VexSdNRLinzRYps8v42FNe8X4FGo2ZpgMAGhikNPMDFP3MZtU91hY7fMAipiHfDqWeRDKX7LedH7WNmQQ2oWWiX",
  "key40": "5puF2S9ZchRQBuL6p2HSq31k4n6qDv1jqcJnLuPjxamaWyJyFHiRSBMEGJZgxQqbHo3QkanT14VuMXf3ndMbU6Ur",
  "key41": "54UFqd9gQfyGGGv3mveFrRBS4fMkVbGqdWBk78N8wqrLfL1BwyyGHTgacryBZkNcsceSoCjsWbm3iBdwtwgGZTv",
  "key42": "61PUpaq7drD38UStZXVfWU1haKCSmamawSFE3h7TP1pfPcfcngSqv8Y6x1ycayqZw2oSUoCyPsL3jVn9QJDrjMtD"
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
