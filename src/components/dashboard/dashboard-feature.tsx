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
    "2aoifeYNkoct8D2djozDWuBhAzKieDtUvqANTGVdeMXZsRSF2dsX35SSQPefaSVS1DbHpmkKBzVQmNxZCk5KiWCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cx9zE1Dni68JD8ZxJ5U9WY2Mm4n5fY82U1BoL1Eg2pEjSqsf1thzcWjgyvqVVFDSsgvdffjW7PxMYJ4usQ4zNya",
  "key1": "36SFxWad92AQcGc7pJJMZRys2cWQDFpnPAsMfHkg3cyJk53siXgzouqMrJfYwgVV6c56bTHrGUQZMEcKAtet13gM",
  "key2": "3dbaBePTLAiYjSQAJmMd6U4m14d43ZYwtSJW1bCvXxAujttTaQp5rr95jgtdptAxt8pwAPzt7aqgrjXjjZ522Pco",
  "key3": "2CzpanPdyvVY2QGefVpUz9Uhbgm43ytZFs6aVKYmv7qbzpAauqoX48sfXvXkcfwXNYZMRxwZ8GZwXcQJgYGGv3n2",
  "key4": "5QMbo3uFFhSwNJQkVmtr2J4d87tVeNn9gc8QHh1tsSN3WbmupA4m2rwcWUTxx2grpLsnCs8iBVdqzhrmqdxshbzE",
  "key5": "4rRbL8zWksKaVQYxZFwaDSzpsuaeWZ6M2G7a9PygvgF9K36pWffa4cMXWWTW89j18qkjeGs75UPJPn43dBSmbSwZ",
  "key6": "66FHmfARP82qpeBRZdNJQJSWtuUFQLKs9trwjfEz8MdEAhRCzdWd8feBTGDZafP16Z7jzKkaV8JaKAoPoNQ8t8nP",
  "key7": "5zJjw8ijoc67UyCETJ8NLnYbE3YStm6L6zMgJsoHyzVf67GdNa1QUmjFFKysLi9pmkEfkgZBf1ZzxygNDTguY7pR",
  "key8": "5Ay2sENEZ3RGrHhFzSz2RAnuH6TQrYWrtcsgGhw5hZsRdP9wsRXFJvAroFdGZdUGm2JmxcjRW4S8G5pKggwmwCkq",
  "key9": "2BJFVGXCEkE34H5kCv8dBFjr4mW34Qa4Z4fumCHDReJb71g7SQpg7BSSVnJDegMMzfNYWSsSjN59Mcqm2rr59jXm",
  "key10": "2oDY61w9SD82K9s4tBYHS4NxrpBuLUDxmwktJ2S147urjxDjZURzbYuhNTFh3CXvrPqyFD9pAb8UGKfFopmtR6Ji",
  "key11": "5AUXaYWzcnZaqiv7Sv89rZ67C5ZzymYAtWNLDRYLDTuB6VAAyR69sNsZEupNb16DE2YSww8zgQ7JSh3pyuhjf9nb",
  "key12": "FPjwFYv3aWRzFKDiHDsyV3J7z4gLE9YcyXHRgQE1E5NVqGx87hAi488yPEUrvu3zpVCskPrB2yCbxbC4jiyRGYz",
  "key13": "5FmSp1kCLXQN5yiZBekTtbY4htSNrb9oWcsmc6Wh1snF6JXpaSiqveqXH77iFcrixdgPDrXriZ4CGQfzrv8akX5b",
  "key14": "5NMrZF2xayrZxrSRTkQqadUMRHx6XzBmggQ7Lq4rGueFhDssMoTnaDzrPSMTXFuxfmAJqJhQzsUg8PekeCuF2Gqz",
  "key15": "2UkE5pdUK5eSk6RiBThdpojVxivBe629ztG5pmRnW71sgDAX9ohaMG7iWmitWb2hQKwomrKcp7uNtJAnuV37hZpH",
  "key16": "3oqP8jiGM3pV2KHhFVAkHd7FBp9nk1AoH7RsoHvGTX1k8A623LAor63k16X7p5KupRDnBJkgcDVpqhmDT5GRHHo9",
  "key17": "23ncAd41FSgFDy2psDTSgdeT7DQTRDuyne2MDvsGXAC3qW31xYiaAUSiLKYJMQDPc5EENSpZQ8DsdMVr2Km3A4H9",
  "key18": "5nRQS51ML31jgf45pB3JUGeZ9L6D8aSyUyQGd6mkJ12Vn8Z7FzygDMw73ruJrxYqf77RieJfhjdVJaW2uegLzYHt",
  "key19": "26oHVstfxjkBwt3rCt7Yo66nrwuZmGyoM3H6LXN9v82GsDRXeJx9VM6WWDbvwvicneDZqepXmxjNfvZRsfZBKQVE",
  "key20": "3e57MUVBv1G1ejxvkw19SSFmexvNKh9dJHhKPy4gBXEYVVAAmUqaDWmSFxN57vhDdCf8mTy37b76DhqpLNrtdhqT",
  "key21": "sq9LsrzfK17F2SbsG9GKud5caTAPct5rPiHrMVUgdUHPpw2Xsh3nxKyFeDWeNEGdHtQgW9NCudQztRBVKPNhrBQ",
  "key22": "4F4mg259dbMVnPzuWYAa1ppqwPHecFJSfiVbLvqQXzgTtXW6JZxrX7F7q3Y7zsFWrk78hVpth6aP1VUw6yijUtsD",
  "key23": "4Za7puC5Y3jaLZeGyym1ZpdNGggSjmsSdVMQBaviXPnqfRkgNzc9BTEEtCamYSnRrspL2hER45PFs9wS4oDj9wQy",
  "key24": "5v58gwiBnRnt2BGxsb9NAfbdCvNg8N3DcmKUg4361e11YnCzC3mkSxXvR5MbdeP6pK8LVMRw4279xZS8NzryMkbW",
  "key25": "54NsUyx3mQYxAtnSjK6BVZEEKbsEkovFWcdwy4VpYabyuK8sH4MWQH4biJJgVbzWQsw39asg5bSw8XM8ApEqBH8D",
  "key26": "2KDCsgXLMmDn2NrRH7DcAFf1S73bTfmDr8cCamrdJScZbxQgCkakCEm7AvXu4ficALwsaojRjXCf5HHCixnsRUBX",
  "key27": "24PQ9ukrQXc2fGkYeiLt53Gp2GvPcCMUGSuTuswrAvqiRvrrrZEhPqWR2PthLZiESp94AYVeyBTnZwSRczwrgj6i",
  "key28": "4t2LymLqZ6P672ToKWsTehVRSgY544znpE7tBDumUhm98Ur3fugdzQ5GZPfs2TDEsaL1scjEDivRtEGHkGXxor21",
  "key29": "XUXud7n2av2kfHTF5XwBnkfR1JDKWGXpDYEb7TjtZFGC2Xjdb8ovDAd3M81q5sLdwCRLF3foH17LSy2x8xKpPuV",
  "key30": "5hu4VfeBb37CFx6AmwZH63SN62E62ZWQ7quKSwjHhvYQxMfqYAjiWKNQyaj6iXfhph6SLuPu5djg7ebJUXYQqVFQ",
  "key31": "5tvaCKyQqNWNmkCioQoVrCnwTeQVk3ex3sn7UjQf2F32TPzL8Sw2oMGWag17NBg1McLv9T8EkHsTosW654dtvbu3",
  "key32": "2nttjrybuSLM2C483aWtA6DA1oHx5bjjSZJ7zN1VHwh7ZYuiqBv2xokgTqUM7QL3uFaGXa4kFqhM2yK4XzrVp1Rg",
  "key33": "65ashwymmxsqaeqds3MSrMhTrMf7AgCinJw1RE1zeieb5SMevf7YpuRQ2mpiRPgLTsL4yuo67XGjLtSfDwTz2RJq",
  "key34": "4csfstFuFyJrFfMWK5KT1z9t2MWiuoPGKFDuqwtzyurfdTeAgEabXwBz7jtP56n8FNEnjQRoDRg8JJYayk1xbeNY",
  "key35": "23v937421bP2wTzk1y8Bz89xpmRcuvp9mXNdAcNvPvfBJFPKx3sq8j1doCEnFjED4eCd7DGKQweyD4niwLRtSXve",
  "key36": "332cTddgUpA1kjhEBTMzjqYu14QWZxBUsVTF3v3vTEyq1bngXBdBpErNaCcfXKMFHdDXafRXsXRdAbnAQKiReym1",
  "key37": "4dMxDkH6ctdFEUhyx3RieJXvpcbDQcs6L6x4E99FzNopb5o2BjYY2Wmr4EuXJa8f42DTMJLLXZrJT4whzTjeLK8V",
  "key38": "4aJWDDHMv7Sb58ZrE1sXmgAysmr1X5Lca3mzcu5wjW85mNLjLSLVFqgd5kwh14KETzti1H4xGWCjDufM3vr5i2Jm",
  "key39": "DNyyDXnYGBdC2rT8doceis9wjdEg3VVWRSMCmBuGNJ4WH7EezBVm8a7DrdekLaFXoZni9RsoBXaTdj2CUAdVTbJ"
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
