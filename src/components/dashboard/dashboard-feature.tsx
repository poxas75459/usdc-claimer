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
    "28E7EiL3AgnkaPtGGmCeWLJtSUC3YrfmkfuUy68axC52mwhUCB2ovf49qbwYR7Nn4XUQPtSagjD7YAuHg2dDQjod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXqUPe1nRSxXg54qdKuoQTeWGkPxLAL1eTuiaKAmc42PSMe4UAcRyTKQnvkHdQDJaJnjJjwJAxiMNZBgf5JtAvS",
  "key1": "5R6Tv9UwSbKBPZHEBqmnkH29PDqQEiUbFBef3gN8Z9jseCLuwBvyQUs3sqUaD8z4yjziZ6HFsFHgAtz2FhwXv6Uk",
  "key2": "3cqJ78tJ7wMqTHvTFh6cyB3C63JNeTtUwFas6LGxSN8e1ThGRrH1HyPu4ur74xcDqvsfNeWpo2AgvMCd4hW6kGZd",
  "key3": "65U3SCLJpzrN6EUZWMEXakFDZWQfRY5b2ktTTLd1itzCNdjJtQk1HKDBYAr7JckrbyeJ3cAuchWPWArmfGyTN77c",
  "key4": "5kmoeCUXJRxtmgjpY7sX7tjCmzEg4fm7LgNXxu5xY3eFLv9Ck8S78oXMbG6rFoRpHuJCBgSazBwmKRjs5oRSYhaa",
  "key5": "2rkPMVk3m9xscoHQNmELRu56HiCZJbJGKaZQtFyou354fHrmKjezYPMvMNf5sxAMwKWDF6sQAAH5cyuH1UvXGq3",
  "key6": "2jafpwzAmPCb1iEgEgMTZ7Hkc3VBXiBvMVmXz3UR7DxbH3VZDKMM7dwR7J1oGUDnY8AsehzqY2EKxnrKAV7ewKVv",
  "key7": "5Nwh67VnV5FR8TC1zco2AD4Cv6g4xZ48Z8FUQPrAaHoHuFi6MtzGm1tHekNeYbBE6QSx3m2cYreXPvrD99p1pLQ7",
  "key8": "2eFMcum6T21iPYbBfHXvC9fMAXXMmHCchMNC9gFSVS1mGuUVoS6LDbSjC8bbTEHdEHYXNmmNLkDcouAkgMwxAx4E",
  "key9": "54rFsyDAz71Cp1wWqyDF8MKo44Y5VTQ8exePNTpiRib4wTsPmameQPSjmUQhc6HUuRLrCSPBa1zisurUrQj9VL9L",
  "key10": "4ksfezVXFZi65YNN3DviKYUvSMzg4mKcK14AizvFKZcfGSgZnS9LtAA8ThY5koWXGLQf5omPc1mjDStJUGsi2Xt6",
  "key11": "3CyKpznkJb7d3EmW91mVf2JKF4ahXw9AxkAGPMAGB3HFrqW2n16goscadSkSKPKrWVVMxq3kGp138SBkyRtzPnty",
  "key12": "2XWc8W3fPHMUinTRZPHzrc1MM9R7CXeNzShJQnKtNbUgF9oks5vcqcNARXk1BKpAYmxBLA3gmgb41CsehsPpWo9P",
  "key13": "38m95wzVQSe7kXuVhr6qmeSnDegonLZmDdV9Z4ecZQdqwy9t5AqwhqTwQhX1n6yCtBnMUFJe3Zrz9LPJPj8LcW5e",
  "key14": "U1b61wgAqosbKxmLqVM8wrygHQGxtpQkEsLDQbpZA6vCtA5w4ZoagMo9zrfodqUSbyMsEz96vCK7XnKHTutJ91d",
  "key15": "4Q8VmjDyPSrvcDmT3ib8xpZoKKh3PtWWyYqw1SVZ1YSUFasnCJqHXHQtrJ2VTgbGjp1vBpXWzCeX8F3gwn8eYrR1",
  "key16": "rskXhc7FpEHdVCFBEAvWEwaMDRr16pAnDcFeYCZb4vX8Rae3D7vQ3sjgj83xM3wgG8nLGzQjZpS7yzKKgtKfNhj",
  "key17": "43NWrb3Jy4rDRcoUo9hJi7FqXLuDweBiZx5mrdpyxrWeSRyHLYKX9dAk4jtGUdAyr2JynUScsLYPPnsd7B2RuWWD",
  "key18": "64GEechfXDBUu7c6a4etid9GuSPxuFn5xy3Ztb194tpZsgui9pwtXhR1NPCFrWfDfmMS4yb4wMvSq7ekUiUtz92N",
  "key19": "2AAEiLJVPs6hW5Gv2FymaxWDAwDxVS8eBwxfBpd7TTVBJKmofggGZAA4R2EQsvEy38VJusPf6C2Nn1pM4Wbab2NA",
  "key20": "2eM95AhSGTMpRhzESvJ6Eh3dTGAwh62xkCjgeZXvtftzr67D6CXeH2Pi4a4FkgL2U3d2zMhfL1WKwFJ8bFbsa7NP",
  "key21": "U1sRdRxokFx8AVi4dLS7tmvM3yn8Uq2unxE5W9i3DvJkZY7tandU6zAofx7wmceeP5LPXCHMHsJjaRbdzxdjjSq",
  "key22": "tANwV5XDkHJ3LBbij71UmWRgpzn4Rn6kjjHFkM4CeycJeoRFfJDcjPhpxUc89Fu1KHqMcy5cxfCqSALcE8Ja1sn",
  "key23": "2WCKB6CT2qwxXZQ8FaokHWbs8wNM3PSvotYkxnZUezyJu8vVbsW8zQAiC7yHQGC8zfjYGsDzNQfudDAdL4MHwc7H",
  "key24": "53e8SGQUKBbkSMZ2fDrvYs8zNjhKBRSFM5nRNcHLbjxogbq3wqpVoymXcPFGueuy1mKuCgsTkdeoDk6LkBdcXyXf",
  "key25": "3s6zKxS2CJNgg6g3TEpa9coPshcaRsBbthgsr42D1j7DnqZP8YsF2ctSDkuWs8bPmhrV8yLiYQ6VaxJAbi8q8YRa",
  "key26": "UJDyFbt3VnCbZ1SEmYdZC4NvDs7aucTA44AzsD2tGJhsNxGjqMPXLwyZw5etninx9vnpfobThSht3dKGyQt7uNf",
  "key27": "4L4uMFAWt9Y9Udgct7R1QHJWwP39h8KjfUqRqG9dmEq8Ry9ZhuPmNxXxcHrbG6y9d5uW3neFSZtd5yTHw7VWQwSm",
  "key28": "4J8E1TTAXWKXwNY245iCiQHg8SSroAX1rnp8Rjf6DYdHXrCKzrZbzagBQrCyQBommj7JAo8941frbiujUkcscq2Z",
  "key29": "4KVbwBcEVY94VPSrvpbuwcAXN2Zc3JxkFXZeesTU86X4KPxQaD3Pt1FJ2N3cszH8WFqv3NVSRMJKR9t2Czm9xMC3",
  "key30": "xvUHU4NNvwLUVevnDVAfqDisEtkN251ePtLLntrVc7y3mXuraoFgQRRWGYWbL5tVHG1RWfYMWiTMZ3849ZYzpMV",
  "key31": "3LDCQoJR2dJ8TNZjfQnYDnxhdA2rGXjufzEXM4cnjsUfM7wg2qNY3zDK8GnML1onPHTzrJfXUkvrugMEndCuQ7Cj",
  "key32": "4d8YCvwWWiSX5RGxeVr9xmqD9YeDFnDwEUqBbWy1jMJdMFXkS3ifgMQFcrCMhcEAQgSthwLduvn8SN9dAM1j4mT5",
  "key33": "66mCoNwYMahW5RRfSJdKBSWFEGy8UVYxYLseAeK6acCiaF5Gb1RDn5pfu8VCn2J6JHWUrzpXDrmuRTfYSUCUwLAg",
  "key34": "65Cz44qEodupkNEP3ccwtgXxzzUF7ufbfgwZgnzYVpUzE3yJwVzWNvd9J3iLoL3qqCg1kDHTCam97R1Vdr2Xi7Bf",
  "key35": "pb4snxmrDKdMr64sNfzXu3HKFsqAV2T2jiVxeeuRr98G13h6pHymUpvMRMpF1S8YVUhayguPWa9CCDVYSh3boeE",
  "key36": "4C57Ca59NYEaymP6xp2vQZdd2VobiEPfoPBoJNnFpXkKsKPEExXGmhg2ig5rRMw9UoJbBsqCo6e1mAPSVwG66tDm",
  "key37": "4oLpxWDZewdo9WFJkSyBWTeij7GM45dKrw266d3RUjfssBXN4Qcohs2f7TtHEoXjpe3Yy1hRjzEnWe466Ef5JT2G",
  "key38": "4Nxc3irrD9tatae47Yx9ZcweojbegHPBevC18jyTdc1KA2SLF29uZXDJeF3asmUEnXVm19ASapZRFxGKmPaBR7aZ"
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
