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
    "4pPXcf6WiWy9eD9YgnVt6o9Lyu74Q31hznFtAPMybB4DnDYySNnH1BfhoJfKheYqNmxKNQcEuxuP4N2NxgdBW3dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzox2cWKERo2Ye5mbUP2zYwMX1DZR4YMxpbyYQ9Av8GP2Pch8G8DHiS9zxaZDDAox8PVccfX5pVA6T9hLRGdAAz",
  "key1": "4bd8Tdx9vzRdhA4yUi3fPCQcyJz43iL4J6ph4BE11tLJ91keDkoRdRCo2nCpPwvghhtR4pbPkK2qtYsWcBFu2URt",
  "key2": "5Gr9j9gxVK2HatW5jnDkGKrFYua4DvVYrbNnKP5vbZmHTMAWB8jXpHnAk6MR3MzUY5rm5c6jE2gWQQWQjRCxp6ne",
  "key3": "3HB6NGniBnfFB3vi89sRcUiZwY1wUoiSoVWJSxwwNrxCKnDZCQuw1njz8VfaFo5j5APhgpA6ASSxyAj9UQRJBCaA",
  "key4": "2BMKsWBQjmwc14yAQALPdm72RGiwrzVJwhun3ed4fASQJmthLhYnZRxWwU3QJg8BEjbYZpQhJXg2vqcTXYKV4tTy",
  "key5": "3v7y8585dLmdMMvvLGR2bhfV1gR2xfonyL1NaX5i4xpy8xQ6LVFVkGoftRv39JrmSFaJ14ac4BhVPeX3atLYP5JZ",
  "key6": "v7uzU5ofbAuMxGkaARDMpfdV7Rmzk9DS9iyU2VXVK6m8K9mdB4MXwMo6X5zwnR2wKvYVv6qjTZigbbLaR6xjyks",
  "key7": "2hFJ6PeJvTHgZcusBZ7xS1KqNURTeb2p9hESkkXLxezjW9RJGMnxoCJB83BSnFTsafUNsy5Drv1jEZDZsdfQiUNj",
  "key8": "5NnqhGuG5qBWikwqkevuU7C9XWYwZxB6hTRQxovhvbMcgFyU1wYuQNzTGWdHxZwDMFB4MfGgu39GbRt8hvNmMEt1",
  "key9": "Nat48EtBhhLH9e66JC1PBvudfYZ4hrTS5NUQX1jjGkPqT8cuGBgohFGMDw1eYSiDr5LwL76fAgqqyJsuJqqZUL2",
  "key10": "356K4nC8whzZdq9q3u4QjM2EcA75o6yncWWh6Pg9XSXe5JmC4dHFUUpUy6otSvGU9Jmw7BdRoNM9sLCwjTwSGJQd",
  "key11": "3prc4ZTo4dLUeKJtcd6JzPCDdEq73gAH9AbknLMPHwu3Zu9BP1aTdCWLoBwcLjHQRHbuQNU1NajHSwBJscinQvhc",
  "key12": "3QdoxEmUAZv68nwhUfbEzASMuWEdUvv4v8tih9PEqm5y6zdpTKBFkx8mUqmHi1JD2R9h4CzxigCa7RFcL9EAkRtM",
  "key13": "2cf93jzEf6ynLPYzfm3y3cq7U2HCs5EoLJEvCPTGnVyoDmGYRN4JUcmTk5FS1XW2zcVY2VJrcBQ2Xz3FEwdiVRgX",
  "key14": "9vWxuRiHVHdaxMmEaaFLsvSpVfvn2cKWcgYnBTazA1FdC7MetmsR5pxAgsUjTVwiJrfW2C6wSr5g1QPj39EhxYE",
  "key15": "2Pwmt5YUaRFV9Wqu9VMWfALF3U6bLPgMxoteB4CbCyhenJkqNjRmtu8B2YXMXTjQMnSXMp3CEhHk8jCG1gdjhNNq",
  "key16": "2cQG6DFvU9NyhokU6fNuqpsPECGaQR7p9eN1BaYb9SYYPbZXwm1HguRLj89KoW2jtgt5fQpA6YSRLsdHHZBuU9wP",
  "key17": "4y18igA1sRATNUJQciFFvFZw7X9Ucj8BD1C18bN5N5PaCbfZh9nAN94vaMdWebsuxdRKFneMw7jcvAmFvRRNuXdW",
  "key18": "3xLMSp7uWyscCwgpK4fGsGeVJW3xV9tcXPGnZdMxGy4yRjetHxZM4ytZnJYw7ufpdtrD6V5yy1LX581Rqh15HV1U",
  "key19": "551CEm6uqzhENiUZ7CtEwsGMSRU9Z9rB48kvuWAHaENnqxcc2BM79hcfN2w37FkSuC7AYBM8KF8pFaoJnpTmNjCn",
  "key20": "5KWAb2N1WkryCiHszPDyKE8tRx4XAy69ntCcYa95gRgQhJv4BH4iysDctFK6xU1zvp3up2ZATHShcaNZRQgz9Nct",
  "key21": "23UY3tPjJojcpZkB9RzFAvy9k6X8V3FZWUtv1cskeq2JjEqDUTTZ8GxDPtxmU5qH4cwsPSrVAdooc8CugMV1uwSA",
  "key22": "5edcoS2DpUDkEvbdRoHhBEmC4yCGU8y2k8a1c43F8QqH3Fb7eiPeMa8z4fur5i2d6R1ZsqqcpARPvJzdZZfLHzZC",
  "key23": "2dLFeNo7Bd81SvLBuZwKJeTUeioYx6v1zri6i5Y9T2ocuqn9VCz67aySkPHv284hh4ZcRXmiBxaZms7cW3YSUG98",
  "key24": "2UFx6GuZ1vZJxUj99wf8eJTTyvRVnTSyLu4AvepeHn4GJsP7cx8c1nTkdoWW9YNR38hCBCLZ9Mw5FiQi1qfXvhj7",
  "key25": "4qAZqWmxsEqFpc66DPEMsQzVSy2DwCP8B6zRq2oZBBdv3nkTkYHWkEH5dQHqzGpKjdcfYXhQAvyRkJthNCaseBML"
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
