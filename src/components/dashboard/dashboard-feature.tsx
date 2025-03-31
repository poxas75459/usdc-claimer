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
    "5kKHVq8Vv4s3E8PkfAEqjktxcuRfBDhaq9U2tySJeybNshZy6WtXjDTN83SmN3Ya4HnzFFxDJuYoRH3cY2gqiBFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqoBWDTJRDq4TeEYmxaWnPPxtErEMtxxLVDJDnofVZT7ueTg7dAnZPwGRxUUryjojJ8RYHdqhXq1cA7U24vJX3t",
  "key1": "vrcrBMFQVBRpi7oShhBUPQzeXSH8B69VBPDcaRDtLwchjbujypYqos1twKYV21zWZqhXckGbCTRwdvBjSU9rDcF",
  "key2": "55mba8xa31wzdsTx29aq85YVx1CCSB3aSHP261o56tTo25saYFUspyb2N9sjCkJKdbBcG8Z3pEYjqmVZmxNm9HrN",
  "key3": "38oJfxd9CuYXhaPKs9NiXmtXNeF5ernHPXdYkQYEdbsSMfFKqPb9CBGYdpVsDYuP2htwTcLs3LXH4JXsc3HVrYpu",
  "key4": "2CBFZrout8DBhhbbfp9WEN2T9t2nWPRuA9E4t4EtDftfcm8GPyAttsRTPaEGPWcpNkjmy2wqLX72Zajc265b3Eh8",
  "key5": "5xVzrDqqhcT1QVJsr2GwRtdXsLUuPRsvfEAShM5TYs44A3HzdvFw3Qaxg47Do1LJV8ZKfptJajzzLXNd42Jvjjvc",
  "key6": "5vdE3vr9LZWbooQMAY25hoafurwLREmQXSErkX4fCLJa8M53C6cUrQSdAfeRPM2t46dT39gRWVJkgn8Rsw2hxvqB",
  "key7": "4pjDNkqfvTsEZUzjdQagLvSQ2NUAYUkWL7u7Q3mtyceFdfDHRkuQDpa1PMbRWAnTDTBqoqsJjJbhpVMi23eqerFL",
  "key8": "3Q1ouAeWEqoHNPKeQ47gPVCKXmf8qrUvjYwcJRgFtSmbXMkzbfH83VJSCqaji9x58UudmH1fpuT4Q7L9rGRi6VwH",
  "key9": "3AqDihJfKYPYG2azaqNQSVXoBLM3D7wtfEjpkSjHTUdJH134iUwfLx9WY2St13tGHgoFGQPjKkueCbqbqG7uKr3p",
  "key10": "2twQ5ZVNWdLG34M1etvtjNdYSK8dC8w2F1hXLZ3Cpu8iV1dXVUZiDoiAkVFo1UDvdmFpgpCZYiBzN4M4GqE2EDKG",
  "key11": "SRyZehQWohDr6PgF65GAi2Q15VKP7W2TukHsHHxKAkwWa7VAFViD9fbu7WGkMk8Trder4jB9iRxbSsXfgunNGyZ",
  "key12": "49dBtp71PCwzSANPTFzjs3SqkCtB4tpJXX8Mi4B1asBPuL28xaGzLWS6fZSiZCNUTSLSUP9oSPghS4HNjrHb8Qxv",
  "key13": "65xhYbahyt1W7FAnvotsLPqeikQRAXVPNBkf7fD6BbXqYDfiToovH4wzyMrqsruwNuBJLiPzqfYgdgtWNVAL4gmH",
  "key14": "2ZobVmkQA42d5au9ycQhVYTtNEJRe6GtjtHy65hpLWRVC34Z6fTn3MBMBzxjtzpy3THkPN4FRD59tQeSpobmRFB4",
  "key15": "3HrCVGTRZLNuciYmsrpEs2HS7R9iMiHUVn21t2p2C6ZqKBHTnLn6w8WqyamEAv4C6c7e6fEfyRbtx7pJmzoS32DC",
  "key16": "UQcQ1jBfGU3DdbYAnWn2cTjv7eLkjv1brfYgqbwnU4unMRgnxujWJvBewjJUX7Yu3GLXZLdhQdzcwWhTNu9rSKN",
  "key17": "WsmFpYGLdQsDgyrTBDgNrqugdUZJSEf4NRDoFTJwfceDWPUp5kAm7rA7EK7skUHNW4Bp4kxHaraVVAECs7Rvcdy",
  "key18": "5Wsaov3cNED8eUDiKSn15XSZYs54juuc6umnGdZd2RqoCHCTjrxVQEh5pZX7eGWnA1vPBdPiGHg32N92SqpDHxdA",
  "key19": "2mhqScJRFYEbPFv56m6RFEnaKSjqssU7KkrBVBSmcB3R18Z2HserYg7G2oz6E82hFLLj9HgdEW7o7ydVVkPqDMmf",
  "key20": "3mCxBcj876ZCn8XHYAoeo8PbirAHoWQNPk1frumNUFNzYLhAgoZENzvkYwQGbscAVrHthc7GGsJqL3ReXpk5JxJG",
  "key21": "3uUdMQSuCGDtw4TqnBzfscdF1XaguHoJw3iccTaG36TXcVoPrZQ858fMopm1aMjcs8eRcpX3v2YDaS8P8F4SbX2E",
  "key22": "46RSmiJJeQndagjFLWXtsBh2krK8xauFe1S6U9MecJsSmp77kAGjSKK91XZKiSHGxBChnTQHd4TuK17u1JWWbJhU",
  "key23": "qqRSK7Lro9WFZeyvbufY759DDys5iTLkYPHReNwCFnnC1Y8g8GPJRCFVr685w16yf2bcjr8pxoKLT74P8VUECkK",
  "key24": "3uztKPLwBuhRH37HTicqf7ErpHu9vADRLEWeQjK6zRECAQXncRuAy9e2xD1w7RjotRdXxvy7P1EhM3q4axCxTzyw",
  "key25": "3HQwuE2JzKHe6dWjZaRuCKYZzqJmin6BCJPxYwMaPGGHXWUh9HP2SsvvjM2b2eUXHnBYPccaGit29aJXT7xdwrR8",
  "key26": "34LsggRa12LYMGiU2FBVsMT3oUjhLkTAJTvUFmB9hSLgTY8vwvJAKsbu2V7JCfeuF26n46arYZCpGW1TSgzTfLQy",
  "key27": "a3ExEhqq6Uhq6SFFTxzJg3JvLytVs2irWn2rxWtrhQ3aNGGqbsviuVSCTGC6awQ9Xa9xCcmBwxH5EPVqMaUyETo",
  "key28": "3QpZ2gHbWkTN9i8Jhb99q7MrAg4kU8RzZq1wwN58tYu5d2h8ivadiy35YXm27M4MwHgPpTF199m4DfKDFPgjwU6a",
  "key29": "3TgzydqSjnqvkJrogYoDPSpicqfMjL5amoLcb3MRzhHXtPuuWJfJjcbeb2nzBGtkAcRxFbgbQv89SdzJURrnnpuG",
  "key30": "sLpe2uLef36tphmfcwRwHSmmG59QSUYp3QGNSbXXr1coWze8RX3dXi8g7XeNmfugjGzJnDh8oej55BGJ2XfyZ7A",
  "key31": "2xoD5XZabZ1bUaABvGwUGcF3abyAM6vsYi1ens2xyejXFvEYqgRcEiaZxPtb7qCBBaiYDX615GFLPRsbd1m7VX51",
  "key32": "3o6aRQsd9k1CLYAoKRHH38Bykz1M9wLvqXAL9tJv6ByVqqjqaMTU5oP5HxMHxecVbD7eSJcX3uHc9eUWQSJywUW8",
  "key33": "2J6d5E9vmjUhHPixb2YZbgG1i8M6JoBizXrQYFdxyXCgmJoQXfoPGrP6eVdoiHRWCds2FXYZGFRMKxjteS8qwebh",
  "key34": "5aa4MTTpmq2hhjFrg9jsyEoUGb6mvrMcyRaJcAPjH1S5rc5qM5Z3ayohxYzXbi1S3KtoDNMzN5s1yZ54quVsmm3U",
  "key35": "2oE2w3cw2BdMuZ8p1CCx7RGkgBGUcJ8YFi2Z7YXYLrKjV3nuiiS4wdYw12BroDewH5zH4F5xLHjkLwVYzCQQ6WS6",
  "key36": "2gmaFZ1DXEdRnz9DBHJJdxGyMpnEYm6aCzMPoXgR5MZtncy2HPvSfJ1QgJdbsSr6hS7sRqM2Pwkh61Tf1hcDWUgR",
  "key37": "5ojxzJT9oBh4Dye7KB5iU72wp24dKQkLQGxspbC6ZatjDuhCjA1ZMfucTVf4FabZfbYetu86R4Sz8i7wf84dmprp"
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
