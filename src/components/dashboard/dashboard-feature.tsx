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
    "5aTu4ozEcJUaXUGpwsAWRKyVTP3UbV4ngHGjUisDd5rLPuUF5apUyTS6yLLf83urDnaFfo2KUmvsgJv5rnjbBVAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mz2TeqSVRNFWxZFpFrP2YvqNfB6CqnWWKAE2Pepem7eAcq33RCtVVVQP7Toe73EWos7L3BkRVWXHXS22V8nCfK6",
  "key1": "4KAHiRcSJs8NYJ5UoH1BuvFJitFdw9wATNeRerGsHXjfoCLAf12xBnqQMgVGXHE6yh7WHcnCWDmB9DSMEuoa64zu",
  "key2": "4mbQbJZSthTR9r8jgKtGkwRqKxd4FhVYdPKfywycUYPBRcdjPFETQwM41wXz7UGreoVEZvzLrbLm2cyUz9k8qK86",
  "key3": "k6C5DgaBohzyrtiMJThSxGHY2dLxiRj9NXjBEWnAHtXNo6TBh4SBKEDNxAui4VEp3uTPEf8oR14SwUh3nb8x5C7",
  "key4": "Dm6qDDM1Kkc61v23umzZMTRHvkjLwZhXt5Af22LjH2svoPuAUToSytgrBUMQRTfKT2jPWccCjBPM3mDRvr3Km5Q",
  "key5": "34oUeePVjfvzoQc8DsYGVcnAwpRQqJ8fASQCpRLd8c9jqmQ6ZrjJvtKS5caD3aQGoDZ3JxLDkKc75DQFy9ggGM13",
  "key6": "5a6wmnubaz6d4w8anq44CNaFJCEbgKLxu2zFX3SGLx65k98weKAJNC42vLVgahgygipP5TUP7eKFJMEw35KkEe5Y",
  "key7": "4B7vtTzBc9nKBPBsKB3iyktfKP3QhK1FRrJqjsa81rw7VVQmjzHFmFXQxt7E3kYJ1S3TSQKixdRViMXDfBdnoABA",
  "key8": "AX8c5NR87KMMoxfKxgLGZFdQQEGnCWgeQZp2HXaWyEJQdsezGvxLT1YdywuqT9p5fJjoqtt5zAVa7BS7xe2CV65",
  "key9": "3BqL5TXcw5CoGLkvFNo7kcVK6TCXywLgovuHopjnkhcUnPYZ6GwbkizUdVsMFmGMnbtnEGPamX6T8jVMgv6JQapR",
  "key10": "62F1LPnVz7QCgVMij7X4AwT7JomTFZzttJn9ZvJGayB8uQv7rty3NbBHe7YNRQx5AtBnrmP926gDVzeypihf8qGt",
  "key11": "5Depj5ZibmuvWrj9fWFtBXA7SDimi6dxejdf8wURRTVzXWr3qFvpRD3RHbQUkFa9YJYcrkSnnVnq6pwXWFmuHXQY",
  "key12": "3m66dGoLKXXpTvLYrsqt7up47uGEByseDtt3L9UdhPKEWnHciRGXzz6wvdcRWuSgieLgYCPEuXVod4yEdbRnmQ97",
  "key13": "4s1tmZupdARLfDZXtzNXDofyiGB2YHoiow7YE2ssY7hZheoGUdAdK6pbFmhMQCytpxirXWLUBkbVUHvL1w4dvJgt",
  "key14": "33h7rRHo6YkeK1wphVwBFLVAzHueFQyUJzmDZDP5t2pZg2t76NCR6enps5tfn7UjEakxcjveewUt9sMFjaayJAkf",
  "key15": "3yeXZ2qeyoev8GUiqsWKWMUQ6m3fBfE3oY9urN3igddAYukWH8uajrUsndXo2zfwxo3rfZMGbrFHdm3WS1ZfirTs",
  "key16": "2UhnZSzyvJTDTvuzotKiieDR18cabP3vRnLyJmLDSF6DgtayR1Z248Zs5bYQovCHKcwPX4SyqHXG78j3tC1pVzaB",
  "key17": "5msum7yVfE2xrLibyZ37m2j27UjWM9C7dx5kDDBtEk166UNYqUkMWUY2G4cFG5uZnxFdEepsCZxE44XK55ZCmwhY",
  "key18": "3TTy3vQ89s5zF3zeYkhnfKteijx6dVwvXfoVQJqSvWTP67MYG2LrM6nMx9x1Egs76K5hL9vsxvLJhUkAfL3qWCV8",
  "key19": "3uao2gLVcUc7YepKhA94vbgmdW7HscSa87DQV9cDYSAy1qLxYMaEF5w1WyyxKqRuK7uyML5HBzXBZGfc74oUsdeS",
  "key20": "36rA3bcekxR1D2Y2eNy34VDTcXQQV9ZvpRF9n1sURYUbB8zxNdRA1QdZFbuMLCDkT3ggZW2Dnk2M7btSeLHdDmff",
  "key21": "32DPZiexHPQqT7rBmb5yau8TGWnu1mAHucmYqmntYx6Usua6gD5dM4fv4fkKX5tYiGHyRdNp1vMmQQJTKvDds6Rn",
  "key22": "2dHobAHYt6EE162BQa7smrPGGLWnzm94gKCgsMjQadZGPHyUCxNRYzJZZsgvPBATQaFMppag9Gc7EpxhvstFSeKT",
  "key23": "4RGqpmnytz9ao2T6QspaDEzmfP4bmXdBabE2SGb9FoFXPwJ9s1v72jH94pk2waFYb46F4cpi6gNEYZmPobcN5Fbv",
  "key24": "4M1pPYTnRyFK5nDfHtp4ZKxGjxygfsdAdGy4KegVa2A3o1wYYk7W8TuQjRhEwavWRhRe4Nmqz6P6hcCaMG7iGWed",
  "key25": "3XMNkgbpdQ1mLMkgxQXP5cYP8877pxbsVQiZHTWHhNG3EUwDsdV1xREiCkQd8E7tgPby6S8dEmbuswXysjXEnKFm",
  "key26": "3UKvuq9Augx8YrMs3txEtCKm1533suQy1dcpTK2aHEAHd7sq6hBrVrt8TBtwg28FsKJNTG22SyJmcAGtXUowdMbc",
  "key27": "5HVB1y4Gm1WYrF2TauDYTR771TwkBnc5piBp9gFEvaWksXif36WHq4oWmyCGy6QyfwdoMtoKRW8wHaW4oJMpDKC8",
  "key28": "2XdzheSXTJLqq5FShMZjZjNEHUSAXM22X3U7z8raoNHXnU2xLDi62pn42K6YeDKr71hwoSNN7btvP7ko1TuXg1GF",
  "key29": "5i7gtzsFtrDPtcxjRVPQmxZRaQMVudLjU6nqKZCGVLNGWZS15bok6fQzWeUrLeQmCGDd8u95o8X9GNBjRrr1RCT5",
  "key30": "39DxCwQbSXqko4UFMYbAHS1skaPosM7p5XardQjXNNY3mgK2gAQUXkRZY7WerUxARZCwUMKa31MpxnyAMXUTUHLo",
  "key31": "2mGVEEnhC15veVf4y9bFkrUE19esFwvwuGwM33oCFqv2MxpuhkjHgJXkMRx8KxBEVkmkpWEBNuwG8DQTi8BLE5iH",
  "key32": "4Fk4nHw4c1sE8UvsEd9rGLJT22Gi2UQUppeK1AWYL74H9V2HLS1yWn6NXwarBaDGytaaKsLH2jCJU8zJThSBwu6K",
  "key33": "2NHZ1PtrNLFVw3AsDEFe4qQprtzJho3RsFaYHU9torfBSBaRJBDzuwRCwECFb4RbsoFXVxi4V1ZfdTZBVZBjkxiS",
  "key34": "4z4LKBDeoiPcwh6CGiWA7mU2kZvssuAd4UpRsQ9L61Sgpnwhuga7zDqgVtT1bjskt5dqPUFisC6LofvuuuYD9h8J",
  "key35": "2hG1tyUDEpnXT7cEcdzHmeE8qC2QixHNTnmvN1LW9LZeZPRHjJxryddUKjycRcyRqRA4wvctxjeAeuncuypo71Fs",
  "key36": "3yTZymnxm2MHJMvaXWUSp3cmoCTJizVM8bSw6oe9jfWjPMQcKXbqBe8uRRwdAX4nsjBPKVMGGpZr6xUaaFwyQYtp",
  "key37": "2wigNgzbvdNo4jVLuUNv83Wcn5GTBF7JBstiwDTsZtD88UpPSvp3SEnpLMoXGiHRSBEPVrWTAgvKbwrkVnH4PxWD",
  "key38": "47TkBE3UaQ7oWJx4mnLCVKWBfbHbkNYw17uzEEhUsFn2wxdr6nRinkozpH9iKA4yXuAHagtebwgzWdtoaBrLkwRM",
  "key39": "3WBgEudX96DwF95RPfraRzS39EJchLj1akVTvuf53kYHCzijAJcFzDSUHcsxyiKqRHVQrgDgroJmTJztXhJQpaZT",
  "key40": "4Kj2SThPoAASndAkqRwLPJs3zZ4cAXUq4tPm2DSYKnvpG9g6BQZqPEvHSmHEtcnUjJAzZ136RZftYuBz4GHS5Vpa"
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
