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
    "2tzfV4j12p6EHkhn82mWDTGR9nx53T6xe2y44DtF2bZj1Kh5U6q6MTXobErdEWx3nsP6Mb8TKUzcCSMJVHHfvWj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFeYc4TmL3451Eb5EtMYXNvsVWb7SsZTnH75Bp42TUCd4B9dD44p6aB6w28MU4moVdpB8u7SpdK68CXNRzxDDqW",
  "key1": "FUgkvjHYFVfkb28nNyxUHx7TiYGhCq6W42x8SioK5a1257xPD8bUMjgU4NGs2yrruRAnvrWRUz7FCwxZTCukhSU",
  "key2": "5FXEVJUTAHSHexP17NupJvEDWLudjoZ9Y5xkVzde6tSJZuM8PD2w1ALBL3UVbm5MKzyB5GAdedZYtX8B2Cspv2ER",
  "key3": "QqiAQPE2B2nLNeQXE6SDAYm6e5TWNjDiVFsKjK1oHBcgD3Sq9x38CG1T8XvEBUNCw1yAxkThCr57AYgjkbtkpxb",
  "key4": "vexwNqXNrDGKBttrSXVAoNtyWoi4gdP57RhyXKT5HZzB4GLnDHvGo32k6N7FEmHGc3UqhJfKBCFj7GVGBw5CsZJ",
  "key5": "22RTWmy4wkunLLdNwdfpt1EJKtHPepSZCRirKPyoHazhEHgzHHHKpK2EYQ1HkuBs3YtTtpEC2nGVPm6fgQM9dhbk",
  "key6": "2KNheeZwF5NaUQq3DrLwi98GAUag9r1qT5Yf63SptNdPJGZ66zns4R7JvgeccYoaYTS2DCjRk2ntotUb9ds4NkwM",
  "key7": "5DEioyPzTjCCqHkvdK5AsvVwjedHT1gox33Tr7Zkhn9hhqbWutzoHSJmgx9MSNPDR1S5LBTKhjVWc8tBSRGM6jXh",
  "key8": "128DCMMZjDW1MwAwAy5Cho3FbuGV8bMHeCS5RbeXa8PB836Bg356W7YDBYC1ZsG2wZpK4tT6mtjN7vRckixXQVb8",
  "key9": "5GCjwwiUhky4TXbUzFhEg5vr9HFqg8vFC2ZReMtAPB2iudnqFzfiKPYr8u8cPxtsBKGHGPy8o2CHLGMWmi8WrKW6",
  "key10": "4LrY9a7MZTXFK38EEDw5tqMA72wx2izmH2UAtMEC8J3ekzEJxt6pZT51BDe5kSGFbUdL4WmNvbGvsRfVTsR9ZorK",
  "key11": "5fM5132rpYvonLDzSHGDEMGKFPwq7kSqhCzUJz55zD1gqpFH746XjPyuPxbKBN3rU18fbwjXj8BVfWDpVfKLf7vR",
  "key12": "BNJ3NoUWB99tx7v5mtUKUjVKF5nQUqYCS2DhLiGNUbT1reTcrnf8KojMBRQ3V5eKnuMSUDcj5zMjJry4uc2HkTC",
  "key13": "4xLaSqtt4pLcPNPRj3t5hNjWY5ujboSfJ7ft4Q2XGbcNSky8Cygwbm8aAwhwGgocK9JQTYFNMGcNWs2DDJYY1xy3",
  "key14": "2BL46dNNhuX7cxUoyKsV2J28pyY6s5kjjRFYfEYGDhSsvPtP6sL8LgCUbPPA6udF2CEWm9D86bucztH7wLpXWZQH",
  "key15": "3deRfCDgKehRdWKArVc5eeApA4PyAGui588GvkR7XhYzHs1EVSq2E9b9ns9ubfJqJ34gtNABAd1bFSDyiA48VT2b",
  "key16": "9kepCCXREiGT7nfaGFN7W6Z5yAovZUukiVqcJrU7iy6V39Qdsu3C71DFeXe5gGVi2DaqZgUDPWMvKBy8Vhyrnbe",
  "key17": "5MvCMFs1kUkvFyaQo6Q2rqm3Bbq5TT5ovLoZpzFAJyurXvXwLBC8McVScyu24QqoDncismu2hBrEVQ2SZ3i1aYK9",
  "key18": "FTCpumCRyxNoH619hPWXzSp3ZyEXKeAVd76PCqwPfWsCbaJxHPDsuUt6MVuiyqMPoQw2pgSxvHrjDcGG15WCopL",
  "key19": "4a8GPi3H3SndaRqEn9VdUySsziL2VGuSJjo8UAqugxD8KuFRVecWzASbwN3WziriYCWkzuQ5vGqP1AExUaNDBV6i",
  "key20": "2fibCS7anK2eGrdYgGM5LeBmXnDpeXxEjeUdd4W3WbkQpW1wjLuBmmqq1BKtCs9veQZ7JiEziqJ6sF7FaZAF9ks8",
  "key21": "2chQeymxEZ6uWuU8Ug3XUbpAU1AXii1wRQcWCbbA3fwEotcYzKUHu8K6gJ1tLTAfaG36a5q4WKJpUWuLkc7UgDLU",
  "key22": "5oTYqJSf3hdJg78qR1csi6JeyeKvJ6yF3L3viG71h31tNZRHbp1s8mmREemrZtvo7sL9nBXyQnGzH2WNFFqFHD5g",
  "key23": "bm5eYR7k82HceftH4eafYDyoWNMm8HqK1BswcNyN2gf3Hq6BkRFRp17j8qQ2fSGxmwCZAig6PFvp2ukTrVxCmyg",
  "key24": "5jDgBxk4LvTuXpJy3QDu7xR1kQXoEZdXbkYRmzPa6YbPDkSRjMc7fRRvcU1JpUPLR5jgAztvRjTeGRVMQLnUCtS6",
  "key25": "29WaUuUFyaqkSxDskRHJNxmTmLdDPonsQ9A7qj73hbrW9r61gQfEwb9C2bK8fAiKHDZS9pWvwRMnmkUBoN2dwNHi",
  "key26": "5xKCGLwwTKyvR7prNwv2paHrdMtQwHVWQUcZYPwCYotpJCiJGLL178bycds9CfVTWBWqRNt46d5A4yjT2ZTBJpo9",
  "key27": "HLJq2oDTWjN8Qs12vwPjAJStNJGsfQWirvcuaa3xUdot7Qs4jKgtp3QLmMKxYfDgkQfqn84dZgnMeifASrQvSeg",
  "key28": "4rqfk3ipSBFShJKmwkYjCToGBQAxTpsmqcpk1kHAvx8nQcZSbtpwZjuerXXDUdzPc2REzvcpprqRRYYkaH6sdT9f",
  "key29": "5QxnGwRUTeuPXJC5Rx7HjA711EmbPGuF1zxWZX2qSikaiLtm4W7Cd6X4F5Q57HfQqkuNDd6f89mMkjmfjBvFTHrF",
  "key30": "44w9TQ5SwhqYpSbXxXwPGW6MUeGuA99wC6y6VZXzsfpukBZLVwCFAuUwrTBo2AtixryZLmmvJVDqEkVw6hGKKHgy",
  "key31": "274ypQ8DzTw38uBNtL3MJpFYT1JYGZ2gy4L5kUwfAHvKjJicycaBhswmdt3eMLSdr2xwioBJZ4FUiR25x2TrVeE5",
  "key32": "2yRW8QU9J3sDvtCxinRGZUHedCg2dnm5oEU6nHeyLwyb3Sns6GPgu1zZtpk4PDJuY23Fs3YgPR8d1v4bBz1MVij",
  "key33": "29yvHoeYP47pEncJb1cf8X1dmfGDRPV2zhR3TqeiDhL1gCmkGoY4BFZu1CNuCpKoqhaajUsiigkCbgPmNZUp8KLQ"
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
