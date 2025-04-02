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
    "2BK4jGm8zeyTW8WukCcZf2sfVN2rpq6fMmgn2qRnXk7zh1LBiUUYv9MEhqMaawJG5SwWiQXTepQWemuXWXKyPNMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVnGr8KAF6qjBxfqSBJtH8zLUdDHyX61wCpoo2Jm6np5YAxPQC2GdAs2bof1CZ7NFcqUzEtkzy5bsMugkNjjY7x",
  "key1": "2ohH9ZRx9nUzEqEMHZZ2qX3k8ZhHuEJUn4VCCriS9jpXyRU7xf87mGZEcjTeZDexHS8ozkLNE7Km25eidJEoggRY",
  "key2": "47mQRaTyRSeTazHetbG1fNpR4pwKZqa7jeMG7EeMYJS9ENQFU8ieYcpXqah24q8bqDn9wBRfTjTEbfUqxeck8gDh",
  "key3": "3cpGFAmWkXgPXkfrf3mXiHdQwp3MFkr4JdBDtUwaYdLCsJa1n3TgmYrXTux4RfuHwqpTzdN98mdkifoufeFtaWSu",
  "key4": "52hkoHcAbYve84Nw82kYgfs1jPcHgy2AriaJ8AGNPPQfbf4uhCMgzdobJcG2m3hkJa6NyAp947kpRPPXgHHahA2x",
  "key5": "3RiHf4PVKcthWv6Pu3emXw6FDwvvzSJXSPrrjkeBAanBCeV6gMF4HK8UxvXq7AotcSXDm6LCcVthXo9t3vL1KUUf",
  "key6": "4maPcoNJ75EeXFLqBfyayLry3dSE1cTV5PD84sr6acQ9hPBJG4JfuzWJKKtZd6krAjVbBgdrKKjiQMwKfaqcbrKt",
  "key7": "Z5dckJY4wux4KP6F2MwuM7FwxRr1md2iB76r7Vto2vJ5Lub79xTgyjW6mnebNtXjAnvYPNgppjqpznPB6Eu1RM1",
  "key8": "5C4cJzghozbZ1KK9EE33YXMtqEo4sV7Ru1mbWfmPtR5BYoKXaKeSKXbeM7sCg22i3rjBJR2RHo7u3jBCE2mPsFpw",
  "key9": "3qgqQkUDas2BtS2VrGGMVYUH2bsNJdxq3kDXhZ6XhqBC9AwwcH1kWhsEANHV2B8gX5E9Yyh8tX675i1HPk1N6vtm",
  "key10": "idjJ4DxU4dYG3hLw1nMWp931j1bNUW6C4dZB2SQZvL88pi3pSwqjdXEXWyEyUQaqHYCwFXCcyRDk7t2b9xSPxgs",
  "key11": "4zU1rzHufwPU25j2rhHhLsxSDUa9qTH2ZDJtS5p5f1JQjQCDcJBSdQ5r4PctidkuiUp8MFiRSBozwDdXqqEqZePF",
  "key12": "4jLg98hoGqpe9f9gpxC6fcocjDiFRsFhfLw55Vm2ViuAXBD7cyGQxeeft3VAeaeWWRqwxzRDrJb6EEbCw1Mh43mu",
  "key13": "eyJu846djyyinrxiscohfXaxzReoTXaxaBmBPqpnGgRQvM3L2fYGBEyk5XfHiC1knjAv99FYvH7irA35tNe5i2w",
  "key14": "5uyK5xXmFU1W37Vgphy21VNdMSv2bUx1BeB9mxYei6o5Z64N13Um1mmzuWFvsV991JKRSPg8v49DbrnEqytwzXx5",
  "key15": "4aHPvBGWa6KhtpxYhD2rkq7sbKZDebeSNrpbFgWnGTHaaNBr6czuiEXQuGZGkw27Kt7SmYP2jEeN57ENnY19NJ4D",
  "key16": "3CQvQBPULBS4Mjr39iHmH947bzAKunos7mxFyMKvxz5Vi41wgRqpqLRDMPzvFrfrzQoKKnAW5Wz9ozBTg5uEsfQm",
  "key17": "2FUSGnw26yZZiwVcgTdgNbKDVz84ohwvhvUPm2P1drbwx5vPs7AnqUDqpDLiCvP1hHzc8HZJkPeA46i8aBd7chDh",
  "key18": "4thxA2sVXZUB1rbnHcheGTKbfnAc3TDrpFdA376cz5qgimizeYT8bW1cbP5nHgCZ4Wprd6fbxU4teq5BAbL7P8sC",
  "key19": "4bJS9GYFeFfy6MGQPTmR3n8BWxdYUPxMJnaV64VBsWDzX9Q5aZZivNEvZPm2FZtcBgK3sgn5QiW5eziE5G6pBfVZ",
  "key20": "5cfeSVv1ZeVzvAo43PYZ2ABLZaTudbFEGjEPeYA5MGooGxfCJvqb21X5iyDHp7TcLUGzHvPgCqMTwcZhfHURPRYH",
  "key21": "574TNEUxyaB3pJsLGjMobe2UM3bdMyLNhb6uHNPJoRbWwPG7NgXkfVqgqRJ1eSUwVqu4WZeKQQ1NDKfcPgEL8pJ5",
  "key22": "4e1tPirpzXJ5Rg2jTBu7rx5h6KXHeEHfYMvV3xvDXuAgw6sDJGaPpYf3FAmNofK7GuM1YQYZFYMxVJEWbEdds2Lq",
  "key23": "4HktP7soM9LrduQpsyvc6zDeYMHBRCL7ghTAd2pDZJCGYtyDVa8f9Z7MZt3GU1z3BouYG93A12TeAiyFQSaTSasZ",
  "key24": "3cDW7CK6WFsNpCxg1MrfWXQYk6oNh25ZtKRRgF4C18iiAvLuGP6p3VLG7SbKv6hRsD5NKjNVMCMdF2HwskmjQvW4"
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
