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
    "Z86n3SGscwcaP3kG1EcXvPYBnBcnT8knmFAvi3t3eMqYYS8sFUeveQj5KsMFjrF4BXjRBJrnxqBYvHZHHDaUzaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ha4dJpMUsXviPCNAb1kdhG87KQabUF2MTmQokhzgh873dNxKL25KT2mfDrqq9atLjvf2WQd4F4uD3hokcBsV7an",
  "key1": "59fFvTYPJ5acY631hoYVCGvjfUNdaQpaYjcYfTMasDTJUJKyMiARsyZiXmJsvzWgHmhWgmhCtbvik5ktKSspQoSB",
  "key2": "38FnB8d8YVhmHZ4NzSqLiLDc52Ed4ibkiKJrFgVMutoEcKvMsX1u8xaemn1hMrVKNQZijsSxN5qLx2zPRyVcRgqa",
  "key3": "4yUu36krsi2ft1bsQ4227xt7y3iUUbpwosVEjndjmGv4hBMUZPnPrpcEdXQ2NEmyXf7nUCjqH3J3K9geJBs4jQY",
  "key4": "6KnUhDHFcoNNYb8dq64gyqsXHxSkG9Hoh9J6CwE1SnfNMm8eTpTudATTvPmYev4WYhEpNhevNmxtwAFa99Hxg9e",
  "key5": "4wZubXvrc3dG4Ph5Bo7NAUv12cN1scTC4F1FAv9jRgqtCqGTyavBiFyMSHRJMzdipjsKwKAAxsGCvp3xUHP42j5W",
  "key6": "5SFz5Fxfps7P7tFqaeo3k91HCgjVC1TQ6HPjAJZ2vyA6EKroxLJHmJPiR3efimRqjRjjwngQzk1arqHV8sY6MMPe",
  "key7": "2zAJt8XNY6jd8e1DtXuyof1obpJng7dH8uzWezeF3myU9qWs5C7teJW2fCHPJZbki6gLehERgkaiHscCcYRvTMF5",
  "key8": "2MXbyvHnvkuZ1Ws84QcB38S3JRkWTYPcp5z6Yj1ehcNVwKmTA6QtTs8ENiuToz7xn7QcDh18R2G1Jugp4E8iC4k3",
  "key9": "2FcL2AiCZsXEq37bCidfUb2VJqpHbSHkudTA17QoW5n6xtLUQ9DTYxEqVHHLaAMPHX9VW2Bt5G3SoHGtYhEyCncg",
  "key10": "4nGX65fRPsqSynYVaXRs4jMCAJME5XF4S1DBSQJCw3FGNpQn7JrZT6NkesVzxSAJWGumgN7pUNoK7Q1freteem3i",
  "key11": "4Ty9sWSPPbML3F9VN19pjc1TTi7SKK6oLSEmT7DaPwSr3FqMBsXivMHur5DDzHyRMkLVYqvQZaUvLgykxhUwxegN",
  "key12": "4NRa4DQBAwvkjqepZyRQvoWEK4BHzZgu7Y8iUMPuQ8avdy5jv9JUAg2yyC9YAhEnoz68NvQ3WQiyD8ta2oj7bUut",
  "key13": "2pAXozdY9M7hQzkyNBVFmHYR8yQYqLHNbafWi81LN5s9veMx2kKYu7rNx7yBiudzJNoBMC7sy3RnqfEMkoyCooHX",
  "key14": "3RAGTk5Xd7rX4CvmapbnmYmkzf2pCEM3xbEkQEayUMt2L54UAnQpisdFRAH6qMnaAfpSAoJfV4hS1tGeAGzqpua5",
  "key15": "2rxR5vYiRw8Tm94PDkRUiAC53J3TERbLr5DPRQwsxzTzHgpSfSsq951orkaxURECmhPm9ir3PiL4zX9K4ysf7wPj",
  "key16": "5XNr6YaRSFGaMQcWaUzPzGXexKguwSVf5GZjHBcQj4TX6a4fAq7ZMe82Q5ScbLiy7opEJVSdfsFBtRk3JjkMmm14",
  "key17": "62wwqSeUvQkVyC3ayQiucnNYUZqP3Q28keL4SU6XnWHBuYr7Ko1V7dQKzhTsmF1UVnY5ZiErp1RqXsdMFqfDn1B7",
  "key18": "2bmtNdWyf9t6ktpfAeQmjDBN4ksKCKyG19Lzs3nWBjvQ8CzZUFbTtQ5Ny3pvyBWJ6vEWrojkDywb9VkZhmcjd8ya",
  "key19": "45Bpv4tpuvKfti3aPwBpc9SgaffCHTkcnLdER55PevtRLgX2o6TXRxbR31uus5osH2oy3L4fUgkWiYXeznUqA3rF",
  "key20": "3F5tTASMenQP2NbMrsHHme9MWjU2LkuC1xNGMXqr8dB3YmVgPvRNEMw1pg16jgKcc7LwRhr7qQAXwSu9Kj8cTNas",
  "key21": "2aEbDPMqvfHvXMgt6tuUXyxNNmeKZuQhtZoV6CgsimFGztg8LGRxiL3bsBnh9N4Sgpm9m7B2eAECXkE8zFDzcP8i",
  "key22": "3mawqDYds6bfmzvDRtxwSBoqhCNywJjvZhq8LuZUvqF9qboDxBhAxVMGAXxszvdm2b5Z1w9NAVaqP59PmhLKb6Yf",
  "key23": "4pMnU2HLhtRNNFfCcXQvebXMotesf3RethwkdxBoakk9kcfThReCtGqaR3Why8a91mFvT2Uzn4nNbhzs9DrZzSmx",
  "key24": "5VfzEG5ra4tRPBRJWrsa4uGSgFMZHaStTT4Y1oBdfELy1tWXSxiLK69rYNB5vFYeHWvWcpLby897nFDnFJw2si7f",
  "key25": "4PGQE1d1ZWXKcuc7yVzpvFxL7pHT2BfPc9mZvc4vBbDo9RnQNkCftzDbnYJ9iPBRYrbKNjHfEQQJrCG3ps92yMpv",
  "key26": "4dat5igDMkxorpYqDxp31efaDumufdjQxop9T8b68NBsPK1xfNqgUhDi8uxR3uhdUtkS8rWcSuFj5m5g6GAqVDnK",
  "key27": "2hSADjigLvPFU2u22Hmv1ya1hDCKsjQvXFg1MW4cMCPKkRfxW5HdihqcPWMPnGifqRvzP6G7y4B2AVobkSQ6q7Jx",
  "key28": "2AQsvxZ2UcHNoswtELid4oiaXLD8K3vS7QAHQivcbe49sQZmYw4RBd1BEzAcTfaff6tzNJ635gaFNgcMsZC97Ek3",
  "key29": "2EqPtcv1VjnDj9xN8JFvsr8BCBKWfMb7RBUGqcjpcydF8x93a7YGBqUdjfAomoEoJKsXWdtAyCH1HVt5fVmJ4jQC",
  "key30": "2FyPUdcyMERixjjE73K7yaki5UFaWRogbq23RNoAHyXC85vtVLjxnJniA8KW6w27GV2LuVauic8eyiuRPCB3NGqV",
  "key31": "EWqDNbMj3rHE3V4qeYEMRezWtNANoKMx8idJRMMTw5etY8bQDSPXSLd5L6bTyuoFCwGxDc6amSjWheczJwbe7n9",
  "key32": "5fMeF4KDmUZ6RnQR8vsW6GViQctHtWUTb7RhbxwuRGSTpLDC9UVE5aDVH1xm4Apexk7wk9Pa7PPfi25dhdcwSpif",
  "key33": "3ovqGtiySoVLuzXfjJREamHJqzysE47qVb6q4X9rCaykdDfSVr6Zg4TT8yBAJWmX97aKVP2C2xi9ocuseXyGGUwZ",
  "key34": "2ERf48KKjMT1kuRjXJqwFGb5oYjHXnaVxS26mFNGg9aYuEkHbVa8irEMJgPz7mxmtpKecZsY6expjGgix5aVohRt",
  "key35": "3dNGWRGefY1Hg6WgQtteq75YXXdpyCJgbs1SNX7U69wVUJLHdeqWioNy464gQhiRY9MbCUK6Pogtu1UNHRmXrSZf",
  "key36": "5TygiZ3rR8C3mLvzXSnACzLB6uqqkm6vFCERv6n1B47uvjFcqRmoZkECR7qZezz4fJC8p63WKZ3Fk2jznW18D8gH",
  "key37": "5Pb8iVEwamvNtoJqVF5jqWDuSqmoVWxftiEQn5H33C78cqNxtD4Zfw7HDVdMUUqRKco7M3799a7MAn5u18ba1Bom",
  "key38": "m8tDQcPK4TJnXbu6AyxLH96pEJBhUsVCfkchJTwG6gAkQiZdmRSsZWSQxqXyiJvLz6Z6sU2sY5M8on3PYDMmm9m",
  "key39": "491FdMvTWUBjGmVf98dJvYy21r9MQVpAtBVZgKGwX8YURVhbi9xhD1YVdYdVWw2qY7dkHFGnwDtjeSKm4KJTAEbc",
  "key40": "2Sdr7CxCUoZ4hZHssK2YXmbBP73Q8ghKtD8qBjwEjBJ3MxNXDUkNwgksQB2LtEq2T5eTjEXe5NdkApJbYFQQRuP",
  "key41": "21vcU14W5iaqhr6pAzPLGoTCXrDNYg7fSUvgSXzEoPsaqRvsdmfFG34k66JqxoYg3ZSc4h8DK3CmhhsaU6aeNAz7",
  "key42": "4gDadpurteDV3FyGX9VzrtUzKDizovnhToKidxnyfN1npd8FRzxhx6uGtGUvyytsvDKgXQDTn7fMRrVzPegVyWJx",
  "key43": "57HoXNo9SmpB28z2jWVtsrpAimSLmSB24eJm2WjBQw2wTLwXWB9MFXgpoX9TUZrMRoVX3kjcNM1nD2u4waaDX3m",
  "key44": "4RE7CjSoUBJMpvwPk6E2gd9row4V7X3tzu5mEHmkLz8mdXwcnmN3jarq2NgZQBrM1nmoWpabnN1HUZ74PpHQCU85",
  "key45": "KauNyWVnC574UrAtqfcDcat1rRK3sCSJuiB7z7sRpjJHtjUrTE2HLphpMZpKEE6Rt3ZGTYV4a2RgwZXhk5fqvTb",
  "key46": "5LHHVXM2EiCeTKSKE4AB4hUnTrGZAA5cqVUjDS1Wp8s3ACVBsHYcUS26znHSi78Ywt6DcYFeRKo46YjRnWAHCnBh",
  "key47": "Y7Xo2vssXj7eWjfQFhCWQB8G8xJaXPVGktfSZxLJArNHaNiG46S8HUi42Srro4a2sfQeuoDbqfEjomUF2XiXwfP"
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
