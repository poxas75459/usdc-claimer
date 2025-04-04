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
    "5WLLqy3LdEnM16Wxfjgt5Xtr9zYGaLBmBdmP4rqcLYMNtrgBcVBZCA1Yrj15JSpxTgnkEda6vR7VQ5zv6wDSzXvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41twHQDcsiNcPccbdjtJSHN89qGTPSaw4gMzi6oJPwbYmKKHf3vT7tuLRSobiyCDJce4a4va8eSt8UDbjZavJAYN",
  "key1": "3KUoSQYSBfxB8DPykapQWjpME7QMWdUFB3142UE7om2nRqVKNKoWoWSTeTxGYfAz1ZJ3kmiK4vLmcA6uDf8GgvQr",
  "key2": "3h4S6voJT9B1jxNHuyz4sjxZWDGePfkNsnDP8Vki994thc9LSNm9etjxABz4KpD9gTS6Um3kC4skVodNtV6DmmVm",
  "key3": "25KiSj2e45cwcmMAawYvwNGV1RxhkNd54aNjbTWESD8s7F4PvUm1YFVVPwNESgRovoADeXinh2FXKPUJTXxaf6Yn",
  "key4": "3capm63H4aXnEAYg8KvrWM7wb48N82sPLXBHFrVJHxkJtLLjHgmZRWRwUUHf7KGVwKhAw5dY3hTa4FkVsKAkkFJr",
  "key5": "3gFNsm9rtWR8HAMVsZV73iw7o3w95h8Bf5w89hXyUGTcwbPAWHzWXY4DpyP4v59Tb2EingkBwkiUFt9HHcVofGJY",
  "key6": "4xwiMEtuLdW4HUDZPbScXtJciZW8z6dGiVn75AmN2Hfs3YpPT3ug5hTwFyw9mMzuaa6gNwX9NCGjERcvyjYEysGo",
  "key7": "3z8V3cJUhscLSDWcUAzKM7X42QUHLLVWEj3cqLezmKax8p2LVi8HLydbBw51dMgw1fUcMrG5F6uuK3GyTPpmuCqK",
  "key8": "2bUbFWk7o3EW2QVyy9iLpjhbqLGjxtHK2RUgotA27h1Rtf3WJfhHrzar4UHZ2zncgH4md7R7bdKEg2FBf4CyPFVw",
  "key9": "2BoFqCkFmyJXo1JxUptF76wTLLJg9nvcAA13Z3DbH63WpFNSiAZbLayweJdj7tUaHqnPHuVFCNXp7fAoLDrwMfjw",
  "key10": "3aJ2hrKmK61tW57bV4ARAADGeFRBreoJvMKvLnbruxmb4rkHfYujttQSQdTYCDj2kYANPRB9aVx4mRxjwKpRjJrk",
  "key11": "5Swjh9FJYGQCVBtEraS3ocB1PrjAocdg6XTxDm7hqkHJgaqtBT24yYr7C9b5XY33hexBTc259aHnTNEXcJmvVUVT",
  "key12": "2WxsEwMrqhRzw7iwKfDLMNaGzWQykDEqXti4q7LoqbUUiKdhZSyUKK84yAiDUf5bKHJ6act35DkLJD9ef8vdyQik",
  "key13": "MVFicvp5RF5r3YzSGVnfQEApS6UeN5hYriFu7rFgifVg6GPEgLyH213nNYfH7yDr2v4EahkhmDwjwhe2f38pHmH",
  "key14": "4sAvdZJpsdXCZsJhGFU8KJx4B3thtDeHHmsW3BuPRFEyYGvjZAPwGHzyst9wNRdE4zMhxNepJpmmyaurebdYZPRp",
  "key15": "5tyBg2LXum2gbC2vv1MExRx7xbn8XUyT6rXYz8xieGJ2xrptSirEd3QeAgN9VzX5mzffxAW44NGdebD9JMAYLbkm",
  "key16": "5UppSgqqayumBmiVngMPevaxcCEL1utDQdehENrrgpodHwzCyqBmVDtiQdUaVKGc1ME48Upqu74BPmgwABs2XDqN",
  "key17": "63VRbdzyco25V4YPqfM2swZRLULi9f1Bf7Hf1MN2kCPqPiRe7MByqQSjgrjuq85zvcXTUBYGtjWMHiNFe1nBcNFj",
  "key18": "TNYsDT3LAXv6TXwwEsu2w3oWUTYEsMXP5sh2RcAyUp6XrLXLtEwUwJ83br9Hnrb29M8iwxbzd1YkZjPQqvmj8Wo",
  "key19": "YgebPAXTLVG2sP1KwRDQRddv1TaRrhcn8PA2YUnHRvMkeomms3j9pH2bDxEYhvBKo7m44QKLeKFcaN4XSjwDAj3",
  "key20": "erhUEtuPt89WKa4uw5GPmkRzgWQSYs9xxFSrGcZEaqiewSHXtHeuRNzvwkVRbS2qWXEcppT4VqZ9F7vTzC256Ur",
  "key21": "5NUxm3Y2hbLmyGxhnHgoxrDV32Wmyxwt3rNdqGAqEp8NEXYQ6ZiQi9tQyKaMtFGc6dk9eiwhTahmTMz2d5nJhV3w",
  "key22": "3NuUq1K6KzDLwUBL67Lzq6Xff4VzTdJ3jDx4GFHsQfXKAedZMJRKYsVuXNrAGaPnPQMkBSNGsrreEr5uNQwr7xeh",
  "key23": "4CN1RMSwMzKLneELpYegpXzc1k7SGbjxwSPVGNH7wirTAhY2GPAroUFFHRqXQcxkewD5hw4UGUMhKkrsEQ7ZUiWP",
  "key24": "3bPxHo3wLc3rgyKU1RLLBcq9ZKDBm7EB1eKdmPcsQNzEyXD9ihqSbPAmtoZnrvs5iCcLNkUqjbT1Ki8v3ti52pYf",
  "key25": "5s1nKgYUFNht8AuJA6QQ3EBpDtoNw6WqczxLm1CDL2NzcMYU1CsfbcqTttTsbHM6SKuRxea7VeXyth2nWbsvwQfJ",
  "key26": "4XpQsxmspWZxAbtnm1K3FpU6LyUfaRQ76hPDvY4EKiP9Laz2xW2ADGrrtMcQbeRZJz26QjbkdGtdPMS4NYLETHCj",
  "key27": "2v7LtcoCWyZFyxG6QuxKvegYYZA2hiPtKSBsbaBdvuPv7mGMU868YgqbAXEAneYp27sSuwMp21aMUZp7RetbsMS8",
  "key28": "3LnkBYD1jWPxQyssQnp5QbcnboLN24ehDorDhm7zqxQvgLLhooxtSYbAwQUmhfd8AN65BEeqoECQoxYuaqrp2NET"
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
