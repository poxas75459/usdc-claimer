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
    "3tU234ybXyQDKJZ66bfvvL38S6Mu5zrnE4p5x3TAfnDMr58D47VbSkRquJZCD4KZ5fpStGkfw7t8b4w2yXgmYNat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsj4EXt8V2oB5P9LSUYdyiYGfz8ivLvGPoaPLdZqMAaTvmRZNUngN5NVK2gNei4d7gUBPMxhVLybm2bxFyPbsXQ",
  "key1": "j7osuJkGzuVhSAFfBuHjwt2HZG4h21gatZqYZpoJFZkyT9dqM2byhPMiPwea2A5NWQjQA544JcE7XfYH3hvf7xt",
  "key2": "59znDgWTTLfzCzKN111kQmpJoCBKC2TRgjxGPrsT9CWHqSEbD8mG3KdyDBDF3Vvvsgd2s9c1qwtDntiBn12er4SV",
  "key3": "2SBkwZLJoDEwRAp34Dydk6DVv6fQ4WZaFDtgAx1bG9PFaxynX1tWLGF8DjcUxKasPgEEBPTCPHABBZCAXCpjMMu5",
  "key4": "2xUQV6P4n5YbJ4MSGmaZsseru8CxkocXU4gebD4aARvt9uaVr8hdL2A29jb5eGE8N69d5581GmimAVS4Z2mtuaYe",
  "key5": "3PC22UGSUJ9X9fB9rEsyiwMiLDw3bdHR3wod8fYYWh9PuupH8KMeSzhcLYhHMMGJKgAzB4oC27gc1cbvWurvkQ8F",
  "key6": "4Sv4qb4tS6237Bz7d6QoGtfAh6ei36xbBXqxHXZDqejVYVt4JZUsLitLbuyh1TEyEV9eQQjDsNYkA7Cjye1mKp1G",
  "key7": "4JDwUJ1PbiG61qJYVS2Fe6WmTEXTTTuTkkgeX1rLXJSddNfJ1n9BrpwHxUbmkXiTgcwo2xPotGgUo7TU58jdFm7e",
  "key8": "3NjBE4G1VsyadqCPPdLpMtLiwfEERaat3wquAJpJcWSmwV2FJWBAwcG2DWM1gan4uMcYwvuZCwFCdcNJ4LUjFapT",
  "key9": "Lw91NKzbWqdrKxcPijgFi2KLpYGzxoJo3jJRFk4QrBBBPCEG5zQwVbcMqfUN9y8cZyxYrVHqDPfUqNa93nNiWqp",
  "key10": "3aoTwZDLn3psn88Fw1se9BY3WW2EiUkBCX32LPtomkFFKwysnPZeC4ivVagPYh4fzZ4PKMVKcktaFGShbFNsA4cb",
  "key11": "LDf5uHHjdVW2tSRhFxVbkoYUj7UR1ghXk9MctcFY5aYztCd8XVDbuKjs3hN5Fsp9UAFRw7Lb7nNSzgyatVPdvqb",
  "key12": "5ZL6SbNBQGQpgt4zhCfeKt3WUN7aZUFyPba49watQfGsD7Cs4othCDrsgxufXxJ5PnkR8jbpwaAfF6k64rjeLPfC",
  "key13": "2mMyQeHxuC2E2SfUyVHodNx3cWbsc1cCxhgzyutPrnzpqxW1RGMUAze3WXf1yWa6qpWfumXMSwUxjcbjzisdp4e9",
  "key14": "gLM164obcrB1mbCVG92vXgeyx6UZFn7ueiz85FwqYGZHtS3xAxky2qiUY3Y6vLGQDBJ5YUFd3FuQePfXLKNUFwY",
  "key15": "3ckJN1Mv8aripjBb763tX49puiaMq6gKMwbLffC2peqhvzqGCi376oE3rFqwTourdHTk41Vbm5q7PWv2PrSQAuBh",
  "key16": "46cgqfUfqutjTyX7JzBfMAyjYfQC1wKcJjEMQxQ4cqNthaLe1HMuYWw4S8TZyywaBh8LryrBphtWPNbr4x5J6awd",
  "key17": "3wBD39mtDHNVb3GBx9nWY7wTYahFxfwhXTo4JaoSbsJprirtwwk5gMgrheGCc6oVUe6JHcRDqvREMdW1UCszPwYM",
  "key18": "2At3dQQKroADmZqZ1g9NS4XFchcA1JA65QGRk7qUrmhXmX7uaTWK8CWWhxC3YrZF5ZzgYrTQeKYJPHQSzJfkJQSw",
  "key19": "35QYYdAVttSDP1upkM2cumvYHhf9M1kAGESNPECY8G3tNQNqUUYdDovMe4A2Pb2AgNMpRdsiFVr7QyzVQBn7jTdm",
  "key20": "5DQ9SBafC82ssbdLmkZsbdg6LEnsx3UHek9VfJRzHAvvNgrRpVgtACqjQgyM46DH5XkRXvd79EEYHtHL7xR1Vnv5",
  "key21": "2YzUXMav5uNL5XtnbZLmkhebpWbsGaUv3PZFnvAKUk1ufp1sWq6jFDUgyt6PZFb37NdpNyaRYkKYTafDn8afJUfr",
  "key22": "2opVst32PEgDpnBVK6XxeoQ3cot3ARqK6KZVjWCvkMecVakE6VUQeNA2Aug664SpwnRpheX3mpM9HQk4MiD2ZCgC",
  "key23": "2KnS6LuAoCzdBYrWT8v8B2DXayvG9XhugYbnsBYjJEwRy6imWBc94H6t6AJKtZjmd7ruRMgEYaodxbuXPMZapvSg",
  "key24": "Mobd9waEPsfu1YBRP2mXdkA12epFvjLo8Ghe8aVmRVFVTDDZEDGKm1gxujw42CHhfshJ3k15Edxc6tH1agBfMPc",
  "key25": "5MDWVT8MyBy4hxrudnQ4o7QApNQzRuaGd5iyPraktx553ZbY71brxdotSyv6uXovPheou7zzTLYN349FcbQaiaaF",
  "key26": "32bVqUhnMPYhxZhfRyLcNWnc7TKpgjhA7KgLsToDkcdSzWMMNgp9ZHicwGzXvUhqhHyyiMRrWWobCSmvpY4nNS81",
  "key27": "441hX81vdYqQZNrb8EA6Hr1cQtd9edL5Z9Q4wkesBpVm5uAFX4R1z2ciEjjcpM9dVAMQd9egMtiwAtoc9asEGYrz",
  "key28": "5717NbAKhr9QhALLsEANj2n9ZZvQHwweZh8rxTBvGyFiDsiditJ7EdWtpeRmJ2WgeGUXeQREqm3WjvptDmGJAdXn",
  "key29": "2zeamkFPbPtvrV9D7M9YbNfvLzSu3V46uRG4L8TF7VKYktXHdBR4avwZBTRMqrtVqhoF56EAKuf8jnmPuiMB6jMc",
  "key30": "4GughHfmVf4b5Um7RqgUUugpewEuxGB84Y8NGhpP64jaMN5v1BdooUNpnyU9PspuBLnV87K4fwLkeFcLbT3LecEr",
  "key31": "sMvX3yWijqJjfNCpVEQkf7X465sJh2hRYUcdjS6wwTZyVvckyRbzvgcF51cZpPXVhSGuXti7KF6m9XENPbcKiP9",
  "key32": "3UJatPR3mri9jW7HyA3xtojhrjt72kf6EEJANBE1u5K8EvWv9xZpEurGZQgMZTby8oay1eW4XAVBXjH4fBKzeDy1",
  "key33": "4mptgGy4XaGM6j9UzUYS77bpB7QK9iRQVpwvVSMBZKE5jgbTLkBXYnpNayevHLa4YioiHraGDyT1e56PFAnJdv2a",
  "key34": "hLhnnRa5pAyZNwta2zpYC5XFSP2EWaE3yUL8cxX6yBR9d4n558DLafYSbq3VrKd9dyXn6cXQ76EJoPGLiiavumY",
  "key35": "4nUmk2n1hXEHhK7Pn7JcbitkYT6YDuNtuDWSUHFJEPiSq9s4MGEqwdYJRVb29N3gm6UuZNVdtJm9RabM53mrpT31",
  "key36": "5aHfnDLouKRStdWWtndyFsHXCF4cEiUmjnbpKxEr4PRtfCzyk4nXrge341tTwuq9jC1ion8D13sSFzXXq382dW1Q",
  "key37": "2EQev9XhsM5jLtQUoqPU7Sjg5jJDEv2XrFJr68HvfX3jXGLP3g2rp5AeXWSykLyuMW4QfhgBTqm4C12KvfeH9rEk",
  "key38": "2H2hdoVmqDx7qtpSHYrkimBkVUXrUkUJP5zZbMcFwXf715MgYFb24WRBc1gubcnPtinUjkESg7bLCMs9ykuiLs8e",
  "key39": "4dpRgm2TYExDK2ohfBQUxff3m2HyVidfrBAHo27ToRx23Qx1meVnci65jwNW8AJKCtXLoM739v4GJemn4GKJVHS4",
  "key40": "2h4aXenfQtVWJcVoTktJV1ASt6FMNdCAV87325yDVV4Km4Txno3UdCAiBhvSa5gbYyLh5rqwFRPuSQMqvfGthnQE"
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
