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
    "4hdB3AGieaCFBTELkSEuc99CxmFUCUPN7nfXgRyNQNY6D2LDEDi1ssM41V31Jg7zhfptVZDt7HwiRxbWrbEEFNhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAQpE8FMDgNjDW1hR5tXzKUfKfmTAthDeS5twC2TqsxrghwDui2cG37U4QorEdT8d7FRehmQEf2EH5E3h1NYAhY",
  "key1": "2cgHpJ3qLRi8GjifYPcx23KF1zGeR9dXTa94bMR5vw8GNjoA8wxN25vxSfFX4VDexNJTc2NQCyeCNVdMM24Gsi3e",
  "key2": "2MGnvu6YKNhMLSwT5jwJqqtv7gdLPTYpKdw469RermfbytDkNLu86ro4zdkoKSzY46kMvSBqed3dtyrVZ5i1grGf",
  "key3": "5Jh8QPBHvhA9CggpAfubVdfFAifdyugRu2B2ci8Nnpjo2DkYkSRTuzZnQ6z7TpkMoyp5kahRXZqVBpBkyny8DY3F",
  "key4": "d5yCbo1EMM8U4B2nsPJJvRz1yEXsMUNNRmyxhdh2N6BKdAo58y4gA2RUVtd7qTvr6LqwozwVamFBHKwzMJaSqcr",
  "key5": "PRtkuRoXjdy1XLzvFTjfAgp2q3gFuioKE3TiHUz2aexaFj3Ff5iFrzFy4J1RuTB4XPNVqUwQM7eoUqEPpeAB9se",
  "key6": "2asGBj1Lc93PapgmBzY9LYkEjK2vhGPG8MZwhANgsEZogobZRkMMFd6AQC36MzaMeVG4nmVc9QPCj87LYdCwZEdy",
  "key7": "4ZL3QFHX2oQaVRdzRqa5jVnF61HSnfZYq3tCqEFtK1RpP7CPakKKqrdPHBbX1ggGgZeFsPuXmCmXexDyYcyhYD9i",
  "key8": "3DkbQpeuEho6h2UQFcuppfo5DMt3ELtkbQ6Wi4dg9DCEGXwa35yuua8LPQCiWJaJVYjbC7EMtYRVLJDy7rEbw3E5",
  "key9": "2u82j1Qk7N4pKjozpK1NzW66xbSD2SsoEYDqgg97wMt77s8aN4AR8Tmk7iGk4y9ymaxT2DWRfQUjSPgcawutvEpq",
  "key10": "DPdFDtsnt66yVKC656ggVnwesSqrKdGKWCJnsaG4Nx9a8SxywPxKpRfzz1wP6DcG5gdDjKL1zRbZN7AbxJTad4b",
  "key11": "bU65KjGjLFd6JkJzczVcUj55Wo8fV6j9JKsppJHCxcWv1hoTKAGKxfe1wGhVKNAktSGUQ1Z3jBWdP8JBUJR6Abj",
  "key12": "2Pdbnm3grJf3TcG4KV3QxuF6Xrx83yYtRkpztsFoeBz8iakMsX7Zo5QxGt3X7dcFqEMt28gT9HRPprBfvNwCCqiQ",
  "key13": "5inDai6JmYwczZaEArdjW56v2KHUix2Y2A6AvqQSC4TvWvgehCc8Lnh1s4JNSo2H1bybnHq5oYUhSS4U9Jn1AWue",
  "key14": "2TViD5KviVP9CBxK6bMyN2GwNffM8Z3GNywCS7htwASCYZtH5JFqAPqubyaXvr35wK1UmjyVmnjoKbDsppLwJsTf",
  "key15": "KMUQehicMptmBEpsCpVJ1g6ESvDfLoS8aQ51Rgk3F24QGSCiWG1hhcLnUUh3Xw2e2KL4wa5RhRQt5VSM3fnoxwJ",
  "key16": "3JNeCQyno3XbN9beQcbxfUugUBr8NVeS6NTHxvmW1Xzrko6EF1XiyNieMx9S3DhDZoQap62diCNcWryFooMm7WV8",
  "key17": "4E9FJunZCGTggX3NWzYfmMjSxFCaibSXXtyrSceig3UVuTpAszGvKh7FfJMn9S1Pj1UdwkjE4cwkqjYsyxCxdqwi",
  "key18": "8GKxyCQRBEZyXpCKvxxUp527AFVPq7RAYn7fgrwLRMbpLMdmPegnpJScJcpDPh8XCqePJ9qkZ5weEkXgmKp37Kq",
  "key19": "3bPyXhANZxr4JGC2GR4M247LY1sK5HRAgAVx2jR4UV8hUNz2b2Y3WYJqGJL3JvRAo7pyuaDU98YzkvrbZTE74rxJ",
  "key20": "5Us4vkZsrG1EVRzQBt83VL4TWGB5u5Nki8oJm26M5QfkNxqvM27abXmkmbDNJH791dg4k5DDVkvaYGqhAEc6fe37",
  "key21": "47MZ2oTPruQWXXk8bhCBSvfBeiaNfScZ3VbggLikv8QNUfdhVeyrS7aJTosYS5vQWxjcvpdHfE3qr36MdXrBRaGV",
  "key22": "4aeDdK4owH9eg6oZH4AxDZ8EYLZynLMVG8BSQV2G1oe3RSohgbouJhEaS5SBcHVzp4gF7C8y9Zj8UeN59t9L7MYB",
  "key23": "33TGJhmCcQ6BvCrRLYVJuZ7P3zqXDfWyHnWXcPRPAnyUq8G8PyPSyyeDRzm5kk7F2UQfWyMQ2Vht7DCzMJrck3ym",
  "key24": "2nuhytRxjMcvWxtYdognAWyajFYr81wGMcQSWnBV85T4fJALEKGx5J757vmshvvZTbA2RkoV4MgfRTeWvMFssaWS",
  "key25": "4pbPpeWToL2dDi3BoCJRcr5LrSdqkAdGtcmzvuJpNAU3EtbzCg2vwh8J5WLewSpjj2t95Yw7fZrierTw5PhJznjD",
  "key26": "2fcdCsZ3DxgBTmpFRN36ta3a166ge7P5FMMnGCDWhWXSDHvhpJ5zxjLfKPpCvaogJZcRvL2QaiQUDo4wZXwmBk9D",
  "key27": "2kZ9zttMuUpRcVVVVdgUZm7SUdPm6LVFTxkQnfGpvHwtyCyRtJDDPTE2srPjFH1xuQtGisBd447kGEbwJgcwhTHz",
  "key28": "Ju3q6qaT7bMYCGjvT2wfXLa6DJTfDDeej6NR5m2Pd8mUTevDDLS6EsmvEjbZ4QfEAsZcKzTfZeLrsYSmdVMwPgf",
  "key29": "3H1oEbLv6Cocgrwf2pzQZF1nfuzomVdzr74LweGjkKFUwnxjy5XiLfDDuHZQvLJ3qG4Se4JYTVLxE5DkWcd1y4fC",
  "key30": "5yBugxu1JQmbiRVRbYYNHBvx9XAJPqU4NGJUJMNW5Yjy7UYUmp8o7UrtxZeDNFAj7D81dcdNz4fVKM7SoRHFnNEG"
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
