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
    "3wngE4Rnw4S34axccBMjqJ4UYUVb3zs3x1qx5fWxgcAZiLvSWh3Lv467Dy3Dwte77XikEERqXap4xsVxa6ECJ7fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gCrcDir45abQsvjT6kZvRLAzK9Ykki9sPVHJcYbGzbaGzWsDN95WVkzn1BFnQzC42npRbUkKA1rucfQqAa2Yzo",
  "key1": "4pAUyyndZXSiyJ3iFsYeyzyEtgV7da7WyUkQHDq1eRxv4QhJfjGukbgrcRWGmtfKkuh4GKEaUA5zSQ4QuPMMMugX",
  "key2": "2atzCCcPuLd6nHWPAK4LD1C7fyBXwFq5x95MmPxFc4SG7BWofoaSmykTNM9tMSZtDL5AEL12BXsVMj1VdwM57GSx",
  "key3": "36nTcTqFLjJyuGQMAms1B3FYp8SeXaFu6rffjnZzqg2Cukwafzy2xh9rkTrEq8ur7xJ1YCHtdCYtqVd1fEmkXwir",
  "key4": "27D772LZj7uyKF72tmwuxtcGNs6vGYW3pMtCJEtLTfDMyP9U2y2hANBtrFVY9SSpoYeN8TD9dJPLq4tUrGnrjQEs",
  "key5": "2A9i2aXcVR5c33oqNw3eZSqAAfhPh5w2yZA4k5yTWmn5ycS5MxNtBspxdo8S2wDy2PrHLr29XBYLsQLGmcYYFur9",
  "key6": "2XXQ5fnuD6mPPbwrJAa1Xg8avwgHrw4nffcknjuPSd1HW8vX6UpMw2eDdLYhAfQ7kGaQjw1zj22142LqBUt4pTDt",
  "key7": "5jUH9UWCApLsDwsaKvBndrat2B1Pyjky9HMzSXnAbWzooU3vzHvqb3X8kW5cWLmpqaeEL3eQvGyrhScHtmwpPSJu",
  "key8": "54n8iGQPx9hFk1i1gtL2Ub84JifcofSpuNyaX6Fm2YgZjQAATo525V1gDuuynpbZu9ffL2Jb8wZMWAARA2f6VmHe",
  "key9": "3mmTgbC6b2JfHboTNVz49kwSotyioJKh1tsSUBc1QwnEWv9EncDtP2xTcedPAGFrXgFiyjTtdLxRSTNuzksVcFoD",
  "key10": "3VK1LLzzXQf6Kr9epoD31P1yuitRefR5coKVLWBdtEkhMpy19gRW31wnxSF91sExwPR1Wf3UrjxYB5PgbRNK9TpG",
  "key11": "2Lu88oWrLvQwMBgwa2V4kwWGsQwBqqn6BKomiriVegghFV8u1ZbJCGydrCLBehce77SxF1wJqdbe5S9TEUv3U6s4",
  "key12": "3TpzRLXdRGm6xphnmBXtGwpKd5YBokBn79YpS6skNw7Yq8BjLe1pF8jAUVwtwBRuytZL9wXuV26xMX3hH6DK9t7q",
  "key13": "2oWkpamb9jXWSMSCcWaS7nixtPh5aKd9tkJRaA8j5Gu2rXz8Ug7JEuEtMB41QVDLGMfC38esN3hDHScneYsrL7kB",
  "key14": "5HuzCDMe4WkXbxPdRz16CgWuhfCovVzGtZg3xAiXWbvzcV77cSkhnEbE9UMU9y7auredaex3uAhrCsUwpd37QB32",
  "key15": "48fq7zx4LGmvM4S7nYp57t8vWvrULb42A7SneNGYR7axBCJzMX2yGG7MkaRhJ5ojKygaD4GgjuftDyfSADMMGKXT",
  "key16": "UJL4e3ZK35uVAsqBGT8zhu6qpdgYZFk2jSH4jAKWEhesfRyDKS6xJGorCbABxdmqgJsYNU2zPMRXo7oJDYSJr75",
  "key17": "2n6rvuy8x9Uz9fUUsFdDwWXiyUqnEkJXiobnc8vDP2o4dgQLx7fPhpSqdPjAU3mNbKxVeZkSB3PcrorUinMxz8XL",
  "key18": "pzN6YWnEJhL8FrcKJ1r7trUC71P7bNDVo6iYWRCzn8RvXwT778F5YfG9uE2BiDmsNBQkxjYYrRaakcaFFDco3KY",
  "key19": "3X4EkNvYX6pq8XgUwTf9Ln29iMieyZbbyEifFSuNWDZgyEq9eaBmJjy8BXeh4PUQYVq65gdBkNFcbV3ch4fZYtKg",
  "key20": "2Ad4y488zyZQwXGY5FSguLXKYNkSizszqGR8nyx7vEAhokqZH3MPL38kDfZj1kH7V3s8EhDb3CerQcEqKmBZT8Yr",
  "key21": "p1sQTHiKscCFrfEyt8efULwm5wHjZQ7ybKycEEHQdLzNvDhVLC2qeb8jTUdqdizymCNX9oCAMjdJdGoTcTY1mmb",
  "key22": "4kAc6G2RrhuXo5oK97WYX7rLogT6TeTkUarotECbToVZLrY7f6m9Qs3jn4b3rr4oUZQyNNMAGuLQdCs17NA7gtkC",
  "key23": "xTqa9ei1ziZa7Cn6u1cVkWvj6f1EDdFC5QLWzChdL4gr8uGRmzbLN9pSPHFwTAp21CWXwBK1KZEWsBgjXVpqDZQ",
  "key24": "2LtaV2PoKQY23x8wop9P4yVm5i4pE5xyJmzW37BjvA8RhjDp7n8jpjGgSMwWp9nGB2XpDkw6AKuhyje6fC5agCSX",
  "key25": "4TNoRr2XTeFZr2N11oEZtPJNBRD4qS2MaxppvN25q26RVZNTxLxMy97cQDtZjWTqZocfRBruHTLxDSULKYtezq5G",
  "key26": "5rfRSd2KtX86JxceU9zh9axTw8Z3wNwdLAPi1bCpzAi1qCUzicFQap6cfLESCNpnfmDjQHeCQ9vZSthxQjSD4yH4",
  "key27": "3T5FeEcLN816Dppqy9gpxU1qrek3PKwzWgfMZKoLxCM6kXbWo8KLXqAtzWGQcGhPxHQZBPfp3Nm58zrt1shoG1SC",
  "key28": "5qKuvi1ZzfDRUiCYwxrgxg3AbQDYEhY2Z9DyDgkQ5X8ZcG1cdWDuQrqXqtEGZpMCbh6ddMbHEqYmtfZ1JbC9mfTn",
  "key29": "2wRs4q8msiNE9142U5PdZ4BtvZLMgxFSe4u5Q2wEBzn1Y4XiKZLavAg1onFLsPmP9pBrnLb6iJCE8Hz3KUUtNTJe",
  "key30": "5Kmo8RKYgxbp8dkN4RFTEQUT1ntLuu77A7PBTgLcRiQLmCQVZofubTj8RswQBEYW2qwgHazAKS5TBubJzLAFCuz7",
  "key31": "BHn77NYjriuX6mu6CqMmnQEfqZ7JgJLB2oBx2UUzpiPabpP1Z4tL3LgU6DaAfpoFQ8ZNbVg53yVr5L2HiUAKWFg",
  "key32": "5UMgxGp43BuBoPvFEydRqFqx4uY6dRdF9nNhJMLr2QupTMEf3WEzdtUq4c7z1SQe1zDrwiichZstcZ7PMXD2WGXR",
  "key33": "BzX7SUUvJkFhAVK2FGjUYMWKGQKTbhKq4HXFeQ2nBvMBoZWkmJgV3x6AKNsRSmQdthe1UVjHYMyx3djxr8ToC5T",
  "key34": "5sSMP3rRHv65ceN7A6kHzksVggUxmwhHNs7fJBMJbt1xmfU3MegPeymbDXVLpkhXR9kbnE2GdkK9aELVT7ng5FJn",
  "key35": "2WqoCc4WEY9GGnedaX6VatPEicvLH8wvucoD3g7uZFpDRHEv1Zs9KjBjtVUVRD7KCkupq84ifGm4ojcT2zFwd5UE",
  "key36": "55S8Du2ihgBDVSTbLQ7VGMRfy9vYBeeVBf3yaqoyTVAW1jybtYWZyPPZenskibhCCs3AA3MHzcJmMwpwrgDz9728",
  "key37": "4BcC31e9MDZPRL9yqrdcHECFUvo1my78SfYLh7z5PCZP8gPtVmAGhv9R9JDmHxEcifZugYq5eUS5nBgRpQwh9WNX",
  "key38": "3MpXV6vfwRRCSrGBFjtSeGcrDDYBAUWBgByptZZr5tDhjzDiXTqNknCMb7motHz2V14Z4t63zNDcSRJiCdjgJiw2",
  "key39": "4ZggRrj2hk6GuN9nN54szcMXN3Pr39dqxrioYEH2j8hB9opZgJ1HVKiWMTYoE2296Cd7DDksxqVMrgeDNQiUPsSc",
  "key40": "3xK788YvekKbU6ifwHTd9Pc3oPHNEjMRCZZBj9Y3zz3i1UjvGaajPpSPs2NRyajieyHTkz3v8A1PRfZDUocz3MXD",
  "key41": "292EPPxhgHyFrJaxTTAARqT2z6xRubUy7aY7mKwAh4WCnpYGNSSs9NXwpSoKp61A5PpcVLK5i6j34SU1W5sM399S",
  "key42": "5VmAEP9dN43T9RK5QRsYyV9BEB6Aogw5ehLMWbNn8a22Dn8RbFAEqprnnW1hHc9oM7ehUXXBFtZ6jMiBVBRwq74P",
  "key43": "HVK1GdwQFw96CUPgjG5qvWaNv1a6CWzyixWqTo2oFRRitTpAyjy7JBcR25oy9EqJifab1sTYWhb3C3cYpfbbQ63"
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
