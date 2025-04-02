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
    "5pTvT27SyqbofhEdJTDeNTkEXPuikFwfUn1AUSysmZPsiueW4RmsucyriygtVeSLwkPg4xqJR4Q63UPbFZoausWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNfyMCqu2s8nfeNngLcbNoiRhztXHNb9ixYY1kdQBjfEL9zQy8wjBY7N92so5QuDENehQJ4nkeFVzEP1J6jnrk1",
  "key1": "5QFuvi3P4v6J85UvdM1beckxNNACk4xSBfuexxJGSGcDbQFirLaQjMx9j5219h8qxQMDaisLwQy3oKFLfQsz4jqx",
  "key2": "3zJ21izJH8k5p62H8RCx6oVk8uDpg43EbFWhjCtVoto3myYtQfXDQobWugq4Kd5HVH12eqdiy9A1LSesAPTcGiiX",
  "key3": "2Y7SFdCi6oCDYL5a4zpBqV2vGTxx4EQryjLy2vZ47PJJ6iRi72YpGNMCE9n5vHC7M9MA5UvvRcAXt61gFAuxMrGp",
  "key4": "28S6xGqhqcgwpBukpxBcGbqL8RXbGo4ENKngcGhj4vvQ7pvXjLUVDZaRsvuBf3hPQM5DPrCnLReDgtswaSfoSb2S",
  "key5": "3vx9CpnDfmb6dTNZBBC4sxDFULqpijMKqABQVAgRqEa3QateHDKnyBsuj1vaMXvjHKTEyiUqxr6XpwWwDXBxG66r",
  "key6": "2Jh2YgAXJczd87MQanPZLHVX7hCXVrNNFBQEbKqPWx15SPJc41a1m1yCLkBQzQDkLFuf7WcpwurG8QKvN64JFHc8",
  "key7": "2cz5jmkujMbtPSYmHZn18wBvwB1DuqsK5Big3J2Uj5cv2EPeETWpP8rbsyUs2XVhqnmTEHFfM4mPxYKWUvga8ekQ",
  "key8": "28Zq6r9nzsBNBuSfYBHUkJAcRjo6mtSopC3t3svqSGTNqPUXrPP1hWo9n3ctCEKbcwvfFAasRkYKfqDdXASN1BeA",
  "key9": "T7TyY39Pj41736TigCXy7JEQ8Ygcn2RyERyn42196Cq55qga8HBZF9b91vWiH7oK7gdKgsQUJMnHA9jLCVNJbjd",
  "key10": "4xn3W6TXSKH6xxbtCDSLk3DkJsiWwtYcfrkk32si9i5imuzHNymPURETugH3xkhPQVafVcFqyRKkBDspr4JdJovW",
  "key11": "4g3DHEJbYRtrW38oPjCCx3jJxsEgrHYgCrUxRRbZqQnK8z1VSX38jjRZx3qoSxq4imGa3pceCAbm29dMaktytCDe",
  "key12": "fMSmPMyrx6EtEJH9heCjVznyczR39KD6SQbzxADSuCQP3DM564UMEvviPbXcLrND8W2sy3RHBESEaKDJmET6NqN",
  "key13": "3zLKGHdBc3XY5y7qo5HU2rpcbKhkiLWcCe1SiLuZwFN5p4ifxksH7XLHR5VsHCCDQYPMPavVTZHiJJEwGizJhonE",
  "key14": "hc2sXqxkKw1y7EgqvZdJozFtv2wfaqoexiXo8n9tgYm6L5FPpweCoyw4ZMMeVMkjVkEAqsc5Y3e3PC8QDCB7XD3",
  "key15": "5gyWocLHNTdEW8a26rC81J7BFjBaB2J4Gw9hjLkhwRv7jeywpEJNdLGBqqCRsdgFQ5AE789U5BHCGWp2Z1TL1pE",
  "key16": "5rtPXmUzYkuhZfWj8QqqrX7KA8fiojznJH7CEV8Ldo8wUzkjDCnURpjP5xbLyywnJxHbLQzVQJPcmzacfWYwuAWg",
  "key17": "ZWsgtLGcR42fy2auf2LpFXuyiUtxAAhRpBmP9Q5wjR2KxEiPNytA7BNX2fBvqvXFbVy4gKAs4v8BiA3BCZ3p4yq",
  "key18": "3t7dmGimNu2okFqT9bbYBGbSUogMFC4gP7DkezV73NzCG7Yurqb2DyoXBaoW4yU1RZHnNH8VXC8Jhz7W77dYxg5d",
  "key19": "2hhGgJnFSRiAWm96g6iE5Qb6p4utUrnF7Cco6hznG71EvgjqaBKv7HfLJQbd6hYWAQaGjAkHjqsEAiE22fhUYYob",
  "key20": "NE1zpLLni9rxxq4X1MiVK9ThGmUZ8fbKEDidyWfLgLsNwo4mAJLMqqrM2Kxh95TA3u1p5bXsGY4jfcDsG6GkBSV",
  "key21": "5F7NmLP7AGrUiuzex4ZSFuBACRQK2Y6pN9xqeyFeLAaWJPkYJNYu9A2MbvA5wAQJ4N6M5a9ZbKfqxVd6VHjzSjTd",
  "key22": "qBgytMxgAWFzFrTghnCRromSwQLcKZiHhxjptUfvEyS9U2361kr83Z4LkfzybFpWBzhXuZvvp5MXTDvJ7HJ3Q9M",
  "key23": "321yfgsFBjo2xzVvtojJF55UZ7rB48eeVXH9VKY8jq4HiA7R5EKa1ai6rXGpFNs2cXYDtLTKisgms6LJPdpLUdec",
  "key24": "K9Mk2saUCrxLP5rrfQLCXuEX4f9bjQuJVTMS6XXgDrybM47zjcrpNzPbCxZgP1uiJqhwU8zJGWGiq6aoEveXARY",
  "key25": "59AdX4hVdghNGUeKqTiBfw7jwdcj1MSj78pwecCUoUWCwvM9cgzNmSPcYc1fEBUbm4wFfjiZq7a9P1dWkvvWHdoa",
  "key26": "5v5ivTBKvV6m6eLDBZ4nHajpQEQUPBzQ3agBRyU9dnR8TjTKeKwxgiZwuvCSG4UnTQwxztQ684zq9ZVsYMc2ZbaV",
  "key27": "54JjqJ3zXDkhxYhAMa7CmP4KFxpag9DE51fLwpWn3DgcRMBsaTUzvZkmrnHQJDnep6TqXvB9gCgG2WQHuMJmxCUV",
  "key28": "Hk83EUDr7vWbWp7Aj1CQ7RmeXeMenYW4RZbLe2NEpaQDyxtGNEPi14c1oMsbVLnA6FZcgY2nenvweqAnnTsP7aE",
  "key29": "EDmTMXRmmzVS3WzwcjA5jzJFEXkS8RJpNf31J6joiqSXjLjV2j3gRhqe8UWPoofw5yRKJeiDDeMBjy17ZXy6ggY",
  "key30": "42UfrdRRx5EBhfEhWKLQZSJwMdgtRSk95qJ5vNvkYmp4mfLHFkpdiGLJptUM2aHTSnCud3EMmMoJPoxr3aSB8oHp",
  "key31": "2C8qJDrfR1jW6VbcZCb4nk7vcCarGz3LsVfYyrPUwNBZXLgmVJGSCy4rNegHR6mWmnBACcVGsi87rthC6GSUEmZX",
  "key32": "3A3nXRRvjoPHBtJforxepVfG2b1PpA1T82cPDJwVU7iiWZafNvWTiGzHCty2EdJYELM1wZCpDaqbDdbAtcDLUR7T",
  "key33": "2mERGsDjYJzStE4orE8jE21gLY5Wj5cUyUBah6NoP7wJJAb5RsSTLxRBX9ThLe9niQzyUApkoPT2V1VZU76mRJnP"
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
