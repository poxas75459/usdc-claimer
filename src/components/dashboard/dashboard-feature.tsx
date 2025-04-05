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
    "wmHTE9faJGbHNHwgLGcFi2MPfrtvqACygh8o8u6Ev8231CzpjrFujHAz6ELq5F4swkE5VgAKva8Ydw8hEYK53JB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQms1uC692pxVGuf6Wk1DbkvpK3qwZnozVTqx8zwwTnBMteWoARtFxvqzRxzePXv3XMf4P7mHadjqBXCnr5vWeY",
  "key1": "tBM9nGqxZVJycsKzodczA2n8ZrKzBTG8hnkWzz28kpzNJFtBGs85u578K11uRwsGjAPnrU1kzZLkGQbDdX3FU3G",
  "key2": "4AjhbKkEZTzEDWsp4Fjo8UKAVeK7BAYgUqubTgHDhXfUftTSmiwgo2eQX7dWvs5jvNkEoNnABKX8Sa9PS5CSPnCi",
  "key3": "sZTsQHHyCScyfjRvMBWMAmzQ6CL91nvVQNkscwQQ98Wbz96JLpGSBMn72VFmRUMKD89sKwtpXaGGWN33EmxXBFb",
  "key4": "429rcEoKkhKnp73KyzNUC65sg2ZA3Lk78YjeADSr8Rtun5iWj3CruwbErZujbKN2fGUk4zQb2uvW7h9PNVfYx4yH",
  "key5": "2w4ZwWae2craroWBa5xzLzWRtFHKDDHkB4Kb5LT3EcG7n9p3rni7L7kXWJBysFxp3YUM1uKcJ13CYkFyq1eZT7iY",
  "key6": "3Yn6vJneSANRmrKkCYJt8dEjQs3XdVSALJvytFrMoF4TXPMLBrNi4AUQPvJy1CpZ539DWmJVXKCDyCLZRTgGS3ng",
  "key7": "4ucdf7yazmgAt98sK61rCzuJ37b2E6v7ETKopL1TA1biQjyF5UhUuJTK3SQtRQd78FmpXytvB9A87yvLhmfNcJ2t",
  "key8": "EdSfafzGYtFbMibiGZTBaoD1HpsXWZVx1s7kkVnGMXSew24Z2jFrpSKaa5K5XLjG8LdoX8a8LJxnj6fhPfPCTuF",
  "key9": "zLHJjYTjUsczUjCTJh4558mjC3CpvcRLvhykqFHgPhusyA61SZqd8nSwtwLuc9RPCTU3uZXH3TLtgZAgdAnzPzU",
  "key10": "59aGJnYf6S4FvywTtBYEJt55uRVV2N324MGKiu3UKc72P5nB3JBjAWKLtzeLm4FeJr55DtNCxi4VgbMGLNb9M2yY",
  "key11": "gdyFKsNBBabuhTQtYgpDDDnDGnnucNTsjzWMBih4UyYAGhjkxVY2BYABkQR8QwcW8HHGqSGQHEPtXVs5VSQvu4e",
  "key12": "3L5caxa5s9wQHBNSJugogFxMxDAwuUgtEVLkQBSw2MSGmvVNpUFq9ad3Fvhzx8LoktymuouYbQzQ1LRUTe72Xs56",
  "key13": "3bdiyaDGmfgLKhEVVDTH1CtJNXzfBC2uWpDwwZMWW2jipypa9pLjdrqm54D8R1jZzvbpPPbF7WnjQ9g53rjyZNhb",
  "key14": "2vGKr4XYPsWRXvVvgN1tMivjJLdUy1D8j3kF89zWCXjojJUK8vNAj2zr7dVL3uW65KakDUHsPZVynXnBzFvyNyxK",
  "key15": "2daFPcoG9rH1KJsvASPgixCESsvy97nFNL89vYkwzUnG5bHBpMbjRVHxV32GHHCR9iVkPYFKkJqVL5Aad4Wayvvi",
  "key16": "5p2UE4898eivNVPLFzQV9n12v1Pry3Z3FgxefQ7hsQmbEkZQZn2Tz9k1CYCwaJdTPjrQRSBGe9mYkMgwi2RsKLB4",
  "key17": "3s2HiAdmH5gAmoEJKwz1PTgCJjdR3G73jYvvuFHh6gh5DLC8HMfrhaDYEX4QmnEsmnRdcCYzKMDuyJWfTaULeDEh",
  "key18": "5WrCoRpnyxmjpFAABcugffF376e89RxEbMnwxDYXmbNHWNTHB7LajVFDR718hdzqc7kRJRYt9n29Js85ug8SWjPx",
  "key19": "2G4ae49DbpsUuTyccQwgcaMXTia9o1ofttu7EYBihnUzTDmzdqvweWhD9F62gZEZ4GeUezLFL3rFn7fgv3X7Nbr9",
  "key20": "2FG4axKMRpD6zPhgc7fuftq8DUGzFxFrD2qcxeEoLWaZhArmcKHTrb8aEU91LqvPcnox1bMK243bbkqWgX6nKMFh",
  "key21": "o87sYF8rqzEtF2DLV48NwaXKyyLQgTdrPbeHnbzgGF3n71stH1tCiMKwsyt4jvXmBroxPswtyuLEWm9DHbmwS8u",
  "key22": "23gzeyzyUDG3P6wRQCaBjemYf4N8dqvpVE7TcPwgY8acg7vGawzSHB8H23XWa1uBRCspJQt3fSq3qbb9oUt2t9Sc",
  "key23": "bXHfcqAW1u6rCoe1ZNMSc2LD4m7uG1Uixi2vUNukmkJi8nD981S6GHuB2z6zrhbok5qsGkpBc7FKp8xGatPbSWd",
  "key24": "qMa7FUVS6o48xLaG5ggaCqccUoDKwUNmFV4pWqMZBBTpJ65ei4qeQvn8yRRvzwbTyKrXDKG4ZKcuvYurxyCXNNF",
  "key25": "53yUMJUPSBMqGGDAMzrx2ZHxeXUsbvYDuVCHvbJpvmHhhXHxFgu5kx38FWFiVa8UY5NcU2rJ4JVtJhdPPoKuo6sJ",
  "key26": "EGX5csa4Zd32BmTD6BiCNRvaxpMXSt7CSyYgLggCn4zr1go88zzkAnt2pJ18GRxVx9XJEQPBgSfdaPZrGMbzUB4",
  "key27": "37nXtM8XE91tN2P1FQW51dRSHXzD3wkSyJTrgL4CTY8r4WYmu3BELbmTGScGXjP7kGsErToc3nQnSisE8sm2GaF7",
  "key28": "5qMd4NXa46eCANmxm2SdDjQttXnaDZRopEMdYkjN1Yng1WKMWWZ4cyrtSF3NzbmCVe9FoP4mpDf2MwHdDQMooSHG",
  "key29": "3UcAymW9WpjAys4Lem24fcMmTzZigqhBYYHTihJ3esA4Yi8u8cWFc8ndMyJhtmUsx388gMJTUykrSfV8Y19mPxYR",
  "key30": "4Fq5Heqm3EZWKPayrFei45xfcYGLQuSNd4nE2gRqvR144by5zKe1zZTwtrMJPVKPbrRJoDyS4ALTZS4QC4qS3RCv",
  "key31": "ahv5tdx86LL3wTY8tqtxwLj4AbAG7KtbWfiWHjELS9jzK2ENVsaS8hDU7qMPbZXrrZfujSUszYxRoiQccSaA7K7",
  "key32": "2k1ke9JfFHdpuyR2sJY4JqnKNjXgQU4zHeFPo5jSVibehn8JETHyt9DTKixf6Zamn3Hpw4tgfwUTQmeGdos4uwjE",
  "key33": "5a54L8J1ccmuhaDjgDJRoZQseriExH8AoLV9TczYMbZkwRbBLNZiPoj6MUbPfS2ENChYE9daNqFqVQj1mXyxXujM",
  "key34": "61LToG5FUTiHWeG5sL7GGVS9M3mscknFP1cyza2ucc37HRKVvdC2JesDaxaNsisDuLmVqgwrQhz2Uz4i9G3sM4my"
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
