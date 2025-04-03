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
    "28rmYfGzpi2C5NjUVibVudcTbjD5SXnnjzeJwNzR26jk4uvSje4BsQg49465krerX6KtCm7gbDZiQJptoWiPgpNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2ycHfohWzQiqwf5RVqivt3rjRDgwr2pou8jN3EDDe6WEyvnrbmFENkVfPUDTdLqcrTdfmHSbW3PohhBna2G1h6",
  "key1": "5dFqYA85npn5EK58wmPAMcUvZXShXdnw2mksNoKeRcxaeFKmQvkgqqeBpa9X6mzRyEUgtgACo7THhx1GXizLUaj",
  "key2": "4hx9da5DL6SJKyZXmoLu2VM8XCArunAL8mvm3AMgMMnW1osWaZFLFmTEdoPMtpKeqmESAqzUmPCveizaLPu4U24d",
  "key3": "5xvLmacx3YZQaNuJswnbs4Tp8c8Z7kxzWrkovZKE9eaoESPCtzshgBLPCoCk5grfbdjyRmo9KVNnJDX7KEHRoeJg",
  "key4": "2KPh83psocGjQuCJhoz98EipBtHq1ee3UKXwYepfz8UqZkZh56D7Ujyx18E4zbFdZigbRRz7LJPofVf5UdKUnZzK",
  "key5": "32unYFE7h4qDDihV2zLPb9hkcCc68BodMZSLo2cJY4Z7igY3AKwzYyytfC54SgP5f9ABJVP15rQg9jyeopyyZvhi",
  "key6": "2it3WNHuEdaXqo35S6AiSUNadhbLEYMRA12dvSwxqCEQx9G8QuAjanXKEJQBVusFxL7p4BYZXLG6XN6CbmcN3Bdc",
  "key7": "5YEiEnGh9D2CKR6zYQSVcUweS2MucFM1AH7CQ6vcV4FjM9AHfvHRzJuZLT1qBepN29aXx3WVwrSqKa1sGW9oedrq",
  "key8": "4aajjDAPNyjybXLuH8GwJe8A5tNoZwAdFxKH6wDpETMU3V9ar7HPpFMSyhtTM4pR73APn9Ae6XszxPMoax864oU2",
  "key9": "3hbdBRVgWWLQQ5DTmMyqFdfkAHzvjJh64CQxF7RVwYAxThNdTniXKqn39CGtmxV5HBeJqzxVDvWEMKcFYrMBTALj",
  "key10": "HomtXwvCNTF3Ve97EPib9PShwSWmY2JwaHptPBpzEKXAQuBK8ZwcowbdacJctC7RjG9vMGN7UfeAxeHergp38Qp",
  "key11": "TPGqqfbDxNUvoSCiiRkMn8E1BuhuLsEapMfoGZQjMbSGM4Foqn6GZTHgS7iqrw5NnZvY2vqN6u1gUJf11a5WT8L",
  "key12": "4csh3cXX8S6MABuGsqpFH2VUPJ76e6i98VVk5M5WrWSqexJ4kcKQvKG2doKbYcFrczPvGkyUSjkFy2iqoFdi6T8h",
  "key13": "22rGiSvAHCHUshZH8pwma99pkAHqTsgaqMtLtpqpbXrQmumTgyRPSE6bunmdxreSJJ978shk3j96AVJWBexebRWP",
  "key14": "39QNLGUjUpdccXvCoSUcwZYxuELstSGxuRjkcjUVTWbYtPwGFsVWPaWSMiMXPiKc53QCa9nkmFUXP9te3bmdr9PJ",
  "key15": "39ByJLrZQxMuRrCAkBWvAybkHjAnH1KihEb2ZGhx7ChtP4KKoBdmMz5xUSsCFE69mMPxuZa14AeZz7PTVQtorHzZ",
  "key16": "3FuoB29TxsAHC3QHyVyyssM6R5sgn1Q5YPEr8LiVvf3gqTJoysio6oePFnHnS33e8WFYsP2EUh3pPMvPxEGVcQHi",
  "key17": "4k1UsujzXDBzErKYjHY8XsVYcvXi72yiYXX8Gkr65V7UXq1WTb5T5QF3LRHWGxRnxpxiW4gLPEApA6san2wF1W4U",
  "key18": "UbKPKH9FznxymcjgM24WcybRaEp5Q7Bm9dZrwqRcGxhbDeJqmS2USxBfXPs2KVLmkwukhjJG6uWn3UKsby82z2k",
  "key19": "51X2KtdFhnETC3ccxrT7ojW9YZ4494gMuF3XyoSrXuE3ZSqxwxS7WgoM6ovknooJxtDjYPsMad4vdbbQx9WZdiZx",
  "key20": "4UVPmU1o2WL4w3G364QkJF87GJeoBNfTrfN8NpPVcJNCNgocbQpyp5qBwh1RA83jMnJSdpSe5xcx7RjRvUctuCUw",
  "key21": "fPDdezREBdkAyt24ExV3CbNH2qBGwtcP3ZNm1rTUNgfdPT4KiUvBDhDwCyPvcsaCGfD75zyE2q9MB3DVTMKZXUu",
  "key22": "ZkkR2imVg4Dv7UhcnrbJGfqz6m8zCzUsAefDoU7gJyrVPZUDjGTTzYwNDTgen6hmxPVn4tQ5q3MQGwcXgVLcEKE",
  "key23": "3YVphhV3oyN6KiJXrSxNS9oss1H7qBgeC7FJZ3N6mDuMCYrXkihgeKuQxbRy8DX8MEnz26jC9uXsGy54YBrE9UM8",
  "key24": "4NLX1TEdZuMRMkLncu3UyGnWLomuhjSxMAn23BqWsevUBG9aM7wgUiwG5krLriAVRQR3boLRwyGqG5jCqUoFGFk1",
  "key25": "4S5zHs9KZ1uTS3T2tUWTCoLdgRzd1Ch23LJdfRWMLnXcs8WksJtKHmqFEBpsLgSkqedc1r6GFZZ4SvqFg83ZMFxC",
  "key26": "5vDFUqGPMYmBTc2FywG3JtazqTt5SwgwM7vtcXXM9vGmwXxrNJVLQdjfzH97rrymHyVZh5KkNZw3749iug1ytQ4n",
  "key27": "4yJiHdFzQfcfXzMez44vggZ3v4QXw3aHfmKPSUxMtoagTjwGauaWqfbfJ2nAEiKMHh8BvKS2SsSn2PN5VFZSm56X",
  "key28": "548CjJ27EyA4i3z3GNBnjSoG57mqfGgBeLsnV2PisiXcsKNEiovjHMZCb7rNJ7FzyW7xr7bUR2WuAJFhN3bzCyNV",
  "key29": "5HGvwHubywicVyB438gkQMHjqSCiVtF6kt2KN4SU3J4MHHMwbZRFe1oR5wMWt32onvXX9EJstWiqNgTPKnL9pRgW",
  "key30": "4iFpKdHHYdQnVSzSkvniXKpa7p8d7YarTzMV7sghad8x6SPUMkUsy9Ndo9W2qUvi8ZG7uxtRdwVoedJnEMg7kudJ"
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
