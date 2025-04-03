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
    "4Kfch3HmBY9kKf7woB8tc592xE2dLKpfknPijpLh6WF79AjB9fmBuiCE2z2sa7b3JrfhTeeAS2NzuEEUgzx9pG5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqEV63b5YK687GSbDwq9jGMVdAFMsDuX352bZaHadwWwAiU3uKewE4Fh3rk7f4gRAvdnzLYMYHj47QfkRM5Mrs6",
  "key1": "3Tn7LjP4Fj22KQ5ohkfsSesHjsAnPMyU1PtStoGdAyPfxV7XXpEmoBrSW4DbSpcs1pZy3zmyudt11PJP1aaMoaPr",
  "key2": "2HHRAWUVdsUoYTG8PZCV3oXYAVdMLGtXsTBxJb1ugCxLKTsfWafY4mUJngkpKoKWrmvXHKAhkio7Ps1UMzaMnsox",
  "key3": "5kgDhMkF4mTrWqFRsU3YAeZ9T8RqW8hcyUkbcQLCYaHvLM19LmeMop9VCPYHtniaNCb5Z2ngnTK7C3TP2jX3LgWc",
  "key4": "4y4RwAE5VnU1RY72SVpZpzJosFu6iLqPUjfSpRDhMuaC8Ti7uVa5UeQCMFLPvZzpX5MPLEd8tLqdKN2Q5DmZ8BUs",
  "key5": "4TXwwvNztnNEjpVhF4WFSto4Aod6VcnWuvEymqxpNiFmwVmbdWSL7x39mPJ7CXtzDTdT5sUUGPaQYgpPoq1xts2T",
  "key6": "3hZwfeAUviiAuRmBXKkdRRFexMe9BZvvHWkkmfUGJVn1GchcvgTaXhXghZep9a5LCwKrqm3WC5ogdJrrvKB6QbWv",
  "key7": "21csgLWGnEaahpPB6NSe9Et1peGtSeEGPLANKFJ93BHNxWRwUu92GUFexZ2jh7UjFzLVzjwnKHsnN2uKMh88t8y9",
  "key8": "1NT9U4eotFCArAVMtP8BJsrvqjHxaJ8xoRz3SiaWcX4ixqNEXCYEETodoZwhUsN5euUk9d23dJrd6LBU8hGueqh",
  "key9": "4ZC1K1A5J8Df3s1TWpdYRKgXbS2hXpqXqUGc2HmgtA8RYXo2W7PZVsYn54Utf2T3Xy32hS5CNawHAh4ujRKywyva",
  "key10": "4cX34JzWEZFcuLQwwwGXQCm1s6hJQfTj1WeKfehcMKfAcDUfaaZXPSsdF9UBPeHajJKAyrX3fjz7sqn6NWySJn2u",
  "key11": "3dUE95zbPqbJbKnykc9q3DqBtj1NM1wB7kUa4NLzSQiANRT1ieMRu4TDR18MWErPyBWKf1N9EtwDw5h7tD7M7LBf",
  "key12": "5XiyRuW1z8Sx3mawQHXQNxfatLtuEWuCJG2QiaV12kLSHNJaAQS73veTsErRTwoNfQ7Z6wXKzUJZu7Y4iqHXZ1Gh",
  "key13": "5CwdvePufo7P1qMq24dt9ntXZhBAiik7b21WqC5nPikMzs9E8zBGJn6oM5Bz5piEVd2pyE2tngL6qWPDwRpgeeCc",
  "key14": "2khRHR4zuN6BiuESo8enLdRmccuNKLuevAFqHnNtys3SfUYuP4gLSF5TA1uApy7hbUqTX3aLppj5kYQPyknGwo5b",
  "key15": "343oi1RkqnQJfxLW6qgwPUif9yg1F2HA11dtfULpmhVQfvBDkYLaFnt1oqZusNtHHvPS9EWCKnPGccG4BUgH6L4Q",
  "key16": "3HBh8XaaY2hT3yudGtRML3SsutXzEjsVCB6qgMx6V6eomesoMBgGDSdUZ8ne8tPMncnWSD5MfkhDmnJKpwBP7FuC",
  "key17": "3GSSqsDJrTe9icm5gM1rxs9hJ4JRJmtrD5URLkKmyRBTpVYwQC81rFGJ6UoWAFQiiq65EGd6xRps1kJ8ijdD4JFD",
  "key18": "Y8eq9NMF2YhhHLChQ1UE79ieEUne5S8TKTswte2PBr2AgZVMARrGWRoepbwdnydYWpm7tMo6SsorNmhhVLuMBUM",
  "key19": "5fnwpp47bypfeMR2Uj47xMVVN2SduUFZyZZev5FPEJqYH5ijwkAALDKfXiURpUWhBiNBEnN98F83dUAcjZYuKL8y",
  "key20": "4dxDgX5jU5VVykusmxbcAqSicwsC3qDk1y94WtabVviPfzrhUkjFmY1jTmmSJFirL4AvDpkWkbxHmh4Gznw1WfJ7",
  "key21": "AAStEHgdsj8moU3girDdQHJfdjgaUR7nZwEpYExnGgmy7pSTgT7D9TJWfUX1CFRnWadz97FPP5p2MGCRCfSkUGR",
  "key22": "4xfVHcCwKPhFtuqc4uHZ2tzR9tRLn5tjtN1CcieNR99gV32cbjeYSjppEw7V4L7XkYHsPbbHky5QA9iPXXgxqWGm",
  "key23": "3GZ4cAXYYTVpD1Qpoqi9iFGCNEoyMAyqXW4VcPYdmu2iu72DTZyTDKSsL7AHU6pv1LSJNCYdqESU62eKsPt8uvRq",
  "key24": "5qWwF14agdJodorSRUa8CX8a9wc1j76rV8QZqZi56bAHKqRNaSEmAWW8KiZPNuuZgeLrVoEKjEGeNAXsvTjgrzVn",
  "key25": "2NXgut8DK13tXdomDdK27VkRyHrRrzdDdvUS6Y8uzJdoaFULX3SyEdqwzc2oNFndQwp2Chfjexz1KmSjuiGHW5oY",
  "key26": "5xM5o9kU1mxiF4S1eUpeZAbTpLZ9PQxbrtemmE9Gd81SfSuuWJmp1sFuUu2VEhqS3pNEoRb1MVCRahYjgpUU2qPw",
  "key27": "5VnAxLdoUptsNXvmqq6MtiB3iXc7Enw5xGVXNw773HnZfakJyo9jVBxxUjNTHsvYUWqmsCHfszWSVBPRHeMd44fK",
  "key28": "4E41ULs9hzLvJaLN3rq69zq2szpf6cuDH8BXWQRrxubei4s6xKMzRimCNVRaaUjjiA6TJtmtxBjT8vYfj3xj6Beq",
  "key29": "4K2Tb3H5UrDArvWvtojZMjmQJk8yfBBBkxMdWxJAt1C2uVdfDrvwZCzjESZewS9MyUgjmCJiCGKxYuBPcjAmirF2",
  "key30": "5X6kgAd7m7hJRFUKhUrW1xbkDQU57TzcSbUCiygFmxJEaUaVNxTZh7ziTWQjPRHBdS5uAKHnwaJUCas2Fxdt644Q",
  "key31": "2Eso9mMB6EHG2xcZRrincXXq3MCLutmUNrA3hyMyuuBnH5PnmiZfY1iHDhB3yMorKwFfQsCQfxcdoPPm136Sw4zw",
  "key32": "3oCzt5jzMiippEAg24Z6BRnWUtpykx2DqN7oRDyEkRMSZGszUGGvjisU85VPT6FRwjijAAYumcDusyLGtBJwhGbR",
  "key33": "4ukDJgLJkadQrb73f77qCCmtfppSeQYTDnxTHfK3M2erq6kckfR1VcBSzyYao8a2EvWaSDpXLM6r5jujjCvF6wen",
  "key34": "2UdHdZkB6Lf1kgoVVSF6eutz5SgW1GEJkwndewiZSEeJ8WCwedTjHrPx5uPSawTW2bC7EDxKiYzqPkZ8uEYTXrYz",
  "key35": "4jE9xsxmFxCRVHsMrxYC8Jc4qKLc3zKCpYRJd5duUS2XEombhhKvFY82fHthCF7V1qE7HLUPKEuk89a7nvkxMQti",
  "key36": "3s3dQf2M1KqiE7mMxDP3AYewh769dtEDEa9y61pc2ec9evx1Je6WT3STyaiZDBsVbmHhFy9pmkcFu5niKx5NRFK4",
  "key37": "52LZfzFvegsqV3mrHRCjpEEZK6ThrejC38PCGYKMcroWTL66AzgALfnEwhJHoXKXu7QooSeBn5J9xbB7gNrKfpte",
  "key38": "4t11vchJ7byApnDBZyabnRCtHLaGb7RHgj1EJQGbngcLhauq1vCFh4qCAwsNxNGNoqiEewwpyZPDXycxFoRcw8a3",
  "key39": "5f4ubSt33jkbVEFpVqgsHWBr3YPMCHPhY48D5T8d5kaq2Tra3Seo84Ee1Uzi2Rw9bjSnmMgP4pXWHGbTBgC4HEuC",
  "key40": "4B3LXswDLQVQPxfh6tkHXXjBjw6kYqk7BwBQyqRX4bN6LFzHir49CTsJLTiHhQgoEGF5z1NKapxfKeQfnuu3brtQ"
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
