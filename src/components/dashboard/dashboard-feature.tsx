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
    "Db2qpUyGe2ZMWpeuTZVp4vuLvPqu874zbkvz6fuSSLMTRbD2C6iJ8kSuVaqEFdkwSndCpz1D9oYE1tFX5fZxJPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8Ke6R6RoEudE3aEQCtQqXVVk1TWkDtZUWcsyiHeNn22ZTUXZKJF3HfkVk4xx3P5MHa9qq25xcC6qhS7jDGbe5U",
  "key1": "42Ust4geWcfTZXDzzXaLUvrSYYkkemdtjTdBcEAHtVQVfwgXca6YEKTEPobmmkcDvP4wB74gREa3gaQUP6m7hCUF",
  "key2": "28ey5Ztp6NHnogfwx9V85utnouRdXEjrBUzyLvLmXm5ue32kwvM7KNTJCJKqPNDo2mPQwYfnemhnodHegh6W9Ys9",
  "key3": "2ViCA6BpiwQRH1AQL6ZjXcLcKFdngqHXpsJfTgsTryAVJZUyq9veoDUSCvEaC1rJ15yqkpkKC427u9bjFNxMsAVQ",
  "key4": "LveeGaYGztswnfeJL35Sj9muuhM8X3tfBcsu83891zzxsNuqgoBpB8518oRKkcevxqH5WmkEWYq7DDbeqqSRN5J",
  "key5": "3tTRgbyEuNECF7MUckbgJXrAfM2UpVPm1y1uLG7QEFs9Mm1VgXNK8EaBn95Zb5a5UcRzPJzcfin91MR1TLgcdeko",
  "key6": "2RU9ARevsAZMkTx9Xs8HD3pxkdTDL9JygSRLfPzJBXGZDbUNf1UGsyg9PwhJr7mwFCUxPNY49Au9fURJbGRtmnEK",
  "key7": "4uJ83JxiBwQotif18LWsQCW1QQURmTpKxLvRKZ2te8QDFUgTJSqMoVS4T5Fhp4Fc6bboCY6naGmyk6LBY8btkUzZ",
  "key8": "59677x9nBWoKVaqQji6drVJ8xFiwANGduJgYuoL2w4f4H2A3M7PQXfVwFMcQvKGsLXp6BjPr6TtSiFHeXya3pvRD",
  "key9": "wmm3wcp4M4KL3mSSCxGrJ8CjPKCcnZ9GsbxBtLigAcahLZeJdBQhAcwjoMUZx36eiVpiZXsZmimi9dzzzWcnniT",
  "key10": "46UpuiTHj5frV1HRQfwjwp7TJBq8TpmLiT2pX1TF9t1fpkQ2dMaSWdqDfy1KohGFKK9UaXGQh3Q1B1opBxUoN6Mi",
  "key11": "2xAJyY5rQg93SUQoEBRbzSnhB7WupfGW9KmQXB2MSxBm1TDzuTTU2Lm7rBoR6F7owNbRohgzjZ4a2RWrL8HrMFZa",
  "key12": "4EcDmHGzP9AGFhkfhKuPra1dPheWkX3EadMRWUxJoXqDQ7s2CYoP9eSeoeEQoWy33MrAym4MisBWnWty4PP7jicW",
  "key13": "Fy71fvVNnp91ySYcdsigxDpsbhBkkdvgqb4X1bRXLJwRLQoNhyWNXFR5TVWMStTGHfFKc6soEo3xyBqoKLDtJsH",
  "key14": "5qeU6jzZi3jnQCXnYfEY3nzuJ2gFhCFveTn8wYmcMHLSUaHi2omfq5bQNgD2MMbHsuSLtxiC8SdQDg1ddGfeFpG7",
  "key15": "LmZLxiepgJMP3bPriQWKC9kSopiMqDED456Rar5jVAscx6m8MsR2FF9t76wHmmfC4KcnwrJaHJvwMTdFKuR95HE",
  "key16": "2L9Wvh62QUSiqgcsXiSq7b1VAtDr7hyQ2SpTbhSXnWbbRFRSJWAxWUMeTjtoQNobvPVSA6B2svhCny8zPgNKBJ5P",
  "key17": "2NESoFRGGmHk6yr1ZqV6Du7Bn4oankNS7EodTyEGxFaUCssk6cs7BrzYboCGuhkqRyxNF32H3PYTMmLGqXQdTduo",
  "key18": "3A6SNbEmJAmAAmKGacv6RHVYabTba8edkGALMqTa1E1o7FY6SUVGjmfkcZARAcSKQJAtQTkFrAHxuk6eRu5qhifG",
  "key19": "3eGKe36UfWqaYEs5QaXEAMmPkQC3kYx8JgS95ew4UqVN8SLAzJwNNEQMk2ok1Wzionieq7YW97P3SnKKCuQouTYX",
  "key20": "2cX3imPyY2LuyXz8tLAmoBahuBw4y7K2K7k2z1XbqUJarcZE7QLMRGvFt4xVgQ5JmNpNvGmpSj3N7KwNGh9ksRfd",
  "key21": "3PEee4SFguYT4QeFyr6mMXAJfi4acotpEvcvE9uNK4kFL4HhENe1vtPQcX5173R65eiXu3sTrJZfe577eTE4cdSY",
  "key22": "3xCs1vcHuRiUFVqnRRzk3wauYh2kjx2T97ACvppdmrheSG2dXyGS118VNgg9GMmLvisFtnUD6u8vKJWLcpEYFhuK",
  "key23": "35DQTvLa9wm9b4BqdiaYsNdsmysQAXiYJwuz9QqB6JhWY64X7pSnBFhr85TxCrn6dUWrUt6bnt9oSVr4phXADMEY",
  "key24": "4nZpRHBZyGVoT7Xr4sCgPtTnnpfYjJc9DgASyTK1PQT6YGRZDWxwLsHatHN28eE1zRwUhyxoub3eHPKQbaGFbMyU",
  "key25": "3vA1QoJqGNzwzQFLEqbpSzHWghLxwPkz9fLRJU5iE5DHZkZW6eswszKr8AQXVk7gFPihaLYgwmc1NsZXB5GdgcAm",
  "key26": "3mXocERFcEADjAL3TtJZkoAaAW8MZX2qDd2xpoScCTB79qyhrdxBFVunpcT45qN422ZxeD8ygw5VAEX6R3Wgf2tX",
  "key27": "2PYrDyskYhaRCo6QcCrzokWtAHowng9GDxfKgrjNkf2GumYyb8NHRi3KaLTffRJbPcmvzGefmchVbBB2mmMgB6ZH",
  "key28": "PTyqpVWUhNhuUSD35CbjiUzE9d8J4vDtpYS9BLhWRwdnKBBUbZwsLw1ofRTY4CUtdbRUsKJJRZmHAVji2mCZ1Ru",
  "key29": "55Z6KXJRjisQzsoB6xKxyeqdavrjN7JddKTjD9CYDdBHmTaJQ5Gxam8R3USSgfELp9LzJxQuj4KkBbMmNjQyGTLk",
  "key30": "mrcP467YWaMkGELwLBPE3AypMXNeDtwL9Ppf6A7gowrwhDMm8DwQmL6wHvB1CpED73rv4Wbv8fLGhn8auP1sXLv",
  "key31": "3zuKEEzG5TyBVL94TVM21JLX2xSG3UuoA18AvEzH2mQhGXRN5iH573CFSE4MjQ4V8evHma1Wh6VaWKUZt27ZFyRL",
  "key32": "oh9k7Miryob6E54d7YroNULXcWXChmHUoWXqoUPumbTZ2HJaA5tAtkDEQLBMjYLq8WjnWHtS7kb1EmPFYf9SSzk",
  "key33": "4vRUNx2buYZkeJbpGzwUtwbADn33wPBfPmRERErSZyCCjabjiC2HSU87KMccDRLwnvVqa5DBm74i4k1DMA8kG6dD",
  "key34": "3ZTpJGu1fhELc7MxLSsuA4GqQbLWQWUJKEd8tEuW2GYoJVs4UMH5AXfGz4Zabj7R9HCexqvvuvWLKUqWRHPfVECJ",
  "key35": "5LwYYq8REjkz85xaj2MjwNzhKcJF5SWNAazMkrpy1X8WYa6qLgsjoAsqcF8CRCMrrPpWr8XXfEpLZx8gLckaBo7a",
  "key36": "5T8Rm1pSVgX2UdPA4EXKF9ucVQgaZ1PY53464R8MrDh1eH9dhmpFcSxYRF2x9HRDUnyW2ebHSNxpv7QMEpRMYrgX",
  "key37": "28GRJdXFfUJWj5y6MTL5SqCfBgn9YX7cxgJRnT29k8ZGTZdexEEJHXscnF6xe4dFdQk1Fh72U69DvM8HqVfimmyT",
  "key38": "39YjTvXezFtLMjLbFrJmWgTAFzKY99Xp8i1CSaidGc6Z5bBpnPK12aAawW7dZrxorLvh1BzPSruzg52cZDwFeRU",
  "key39": "4XmVk9dVoTSkDuW2XMqwT4A1pP6qgZRdcWtGTi9uSwiacTiDLkbZatP8KCQcz8DBp9zEsCQH9RUpBrwJbkFyVsN7",
  "key40": "4zko6HXJybAm1pNUodR4rt1ezmfXWhRbVyPwJEbpfnmkH22pTfdn69GkqNGGRcTY7ZmF4W3nbqqpxvvqVk13GbdW",
  "key41": "5zsWfNvmTfHBuMALzdPF3U6SzU5NpapycDJHMKKTAxGWLxkqkhozy9raAdvQiumw992xrhyGgTjd9r4pYZPm6Lk6",
  "key42": "29chjtwq3Q7fDSAPxX7FisZspQR71mDaCfFLoUv6F2QjVo3qzSbxYa9VNzSB64zyhj3AWdvr4WoXda71c1cY3t9y",
  "key43": "3veDqrBRSStLMcozfHWWmgmspJcSBYPUYGeX3praZHMw8iaTKxSx23QZcZpkJi4v1KvnpJTXTxXmrS3NELCg5Bsb",
  "key44": "bjAa9JmDZRxGwNUZi9tHcvvkzJjrt8pCcGFv6RSfhwvDgvDiwikxWHcJFk2atoZxT3U83LZfCUVD7X1ZjnNVtwY",
  "key45": "49Dticg2KuSkBjuKThb3QgAxordWxTwNUKBCPXZgvt2SxW3Upqv52dR6SSefADWcpCk7BHE8fVtikTEYQZxoLt7L",
  "key46": "28xM2Lrus96JMaft1n9rBaXaQZvNNYeLiNjvsHfMuSTVWqpKqP4wj81zhGLn9efCVbwmjYVYKz2EZ1TsNQEUMar7"
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
