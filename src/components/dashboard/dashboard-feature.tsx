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
    "2sHN2M28cv8jXS4TzpE55UZNckwCdyc95fa3Ufu1o4ahUfhAgocKTrUj6mAw9zuyVCGEtUkkoifu6hqDDEbX7TRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cq6nZVny79yT97w6LUqd4WjGDkvGWYFi9qu4PFvvzUBQTvQJ3KBxh8ZPyKwJJHHwDbZWAMDNPsDEud1cbtTXh2Z",
  "key1": "2MehFQnJJLQsZZ4fwZ2ABVyC2Ez8cTBdPXSmraFn6F3XNFkXCLui5ZSAbqip9p6ZucMC4qBPAwn6NMXqjgy6k7pp",
  "key2": "47fafJGQFaYN88b84goitcKq5dVYWfqvupDCqte7MBhamKgwqAukp93o46EsthXxzD1poijNGrQb4NuHhJU3Yd73",
  "key3": "43APjWdw52gSyKktxpimTvtQRnfHSHsXP2gmFyVtSrfowsKxVf2oTaEcweJF9zpN1HAtAwwgNod4gcy7YigupwhM",
  "key4": "DFswbEc68ZmmXQkFNsh5pmMGRT7oSmGzJ47eV5BxRD3DL8pdbLeJYj1oV1ZAgUpfUebqS3LnTWu6snrAeuRLsAG",
  "key5": "272p1Q5EkpYpfYeMXJVtuCtzA8S95qqLGaLULSRxTNwLmNS3c5V3xQ6J8U1Sgw1erbruKZ88o76JykkCMTMHCYAh",
  "key6": "3sVpfYsFe9A9tGe1abVUsHwgzuPsH5diZBBuxwDTeyoxmBBqeSsn5ckhCjdb6Uoy83EfEBD2a1rimwuWHJ9ETx5e",
  "key7": "LtFPTpsEQM2amySSX1oYpGBM3ZFNaP4HYTY5X6NWAV7PM7PUy9pKwSRXUE35kM8hspk91DQBMWJVn5ABsF6yVk6",
  "key8": "R2ovAXhC4dZWcF9Wm29mr2jkK6VVLSD3HRqQoMpwNjQtEy5FQm1yhoaeDFcX59y1289T5LGEhkxvk2aDsVBGU5F",
  "key9": "5irffX3KubsGWZHv3KAH6K4o82RyPT25Ew8f5ySpnDtX5y3Zmb5KBfUPFRPYzqAdxHoYv1kZcLMLK4QSK21rHjKp",
  "key10": "5YKifAXPXyGe3rVLhNAcEB6CUWgZMPS2u2iDDJbm3mRAff953qUzHGDDTzmWc2LjskB1NXvEXTcHERzkH39RW425",
  "key11": "5rieEyAEbZK9FebzuHZDRHFtjitzTCXAHyDZrWFsUjz4ifn1X9MfavSzDbNoVfq1t3LJkZtwF9hmpRqfVRq3Dnmr",
  "key12": "CL8nZ1FzncVmRzxjsNjegJxzcsVZ1pFJTfXSieCm9p4eCXbBZwDPs2S8DjcRvqKwfhGiKdBq5zmKi6yCXaJNqE8",
  "key13": "2qQAEtghbCuzzzSKeU4RTxuwXyLLkGHHZZHSeAP99R4DDhAhJqoEnGMfa2btiXNF5gXnmNucJZ7JfA5PUdSBa7yW",
  "key14": "4qqEk2SrCAfw5sWKyCL48R3caykGQSZzke51ToedwNqMJBVXAf2vrN9113ntpfBKbfgSwsf1rgFc36LMavD2d5UQ",
  "key15": "46yhiacgSnoLsNoDtJcc8U3uEFFgi4bnYctAYfBE2zeGuFtxFsZkG9LfJSe73PMhmRMqFNs6o1W6mfLbeEjSQPNP",
  "key16": "3GjcM1MjrFeSgvFfSMTBibd81tzekQvMFJo16AfFtzEURcAscP75hD5MbMuDkjmsicxVGwuPw6wjMSh2Xhg4a6XQ",
  "key17": "4tRVQkvqjoc8G1hSHy4PRTx46UmCiuGTJjcWFs6W9KurwdjY7KEiy7fNT3BQ96YKjmBJN3PGiawEedbYhNtLykUa",
  "key18": "3Q6z29wV9AVii2inDSBxVNwGSL1GBfjmtkdKuPnjXk5bhkkR4KRLDzk8Kad2QSZ3nUhdJBBfvm93RZJb9BbuGsk4",
  "key19": "5YHjbYAqUL6WSHpRrJZcMrtWLxH9ER4NL5f41s1NqjFk7gkN8tXw3rEvYw5ziwSd7Gff84F2Uk9qW899Jc5akRyt",
  "key20": "4eG6uWBGrzNwkYaPHiEXBX3yEPGRfY9b8DtePCA9VxWxRNgPMashY4CZsyViGNSrMPnDkY9avvQNkR3qyYLqvBue",
  "key21": "4VW6e8DeF87tTQXYmGNEjvyMkXhXjgHbuCy287Ur8hNMtc1y5bH3SFSx4rVHt3D2SR7CWkqh5oR3zcgbz1nYBFPo",
  "key22": "5dqrUShkKhsMHpsukWjnXJFsSPwP2ie2PLFxVNHHepFPswsNcgeRYzNYW8M8FvmoZKvqqVkM6GwfHh6js6XGYMqA",
  "key23": "31uEoXatT6uzVEeYuyAh2p78hcjhgiV8tWLznKqZ7cU47eAb7fuK1WWTaVanYDPHA4K3Zocg7XaHyPBbttzDAV7P",
  "key24": "2Tq1AHrGE4Ww8M2RQu8pMfJLqzB9dTAT8qgeGfp7xLTkMkdRVVeYws57Eqyhi29RakZ4yMJ34ULJLWCxHo6YvdP1",
  "key25": "4fhHsd2sZnGStD2xkU6SZaaM4occ6CMUAeJQmCNpXcsJyZFmpUp8SqyLLxKFiKSWykDD8ArMPEfLRXbn6qRvw1Qp",
  "key26": "5M1DD33eiv5uGdARYCedLJ6XNTrY1QxcHn7s33jrdUnoqdDKhbQRxkGABTnmBEnnuUU7nNsZfcMcpc2LP6mNEQK8",
  "key27": "WdC3DXzwbHqRb9VHykzZnrcCnjTsHDXW3ovrexTGQMENxkV9T6vTH6TUnahMseTJP5vYpjvxoiJq3pUAVAZAJXC",
  "key28": "5ViHi7tYKHNNm4V78vrjpA21rsMnBeFTcNX4HFe9JEmLfYnLQQm6whqUqP7QcqW23Va12iabNwBoojG59d1NFhrV",
  "key29": "3jZmrSLzY7PAsqW2mCzUeHCTzY8joAPqdcBooqJiRUrerp6eDNwWeAkG9BGMuHPCBTHfKv7kSnnAGULoMkpsvoU4",
  "key30": "2q1b8xK3rpe7NFKPhGx87x5SCEEcEBV6VAqgUN8nd6UwxRVcwxXYdm3Abk1mKQ5J38QcL262vo6VsZEkwkND4WDp",
  "key31": "2jW6pNAXqKHxzT5JatKYukUsqxHm8LwWzfodQYL5iMoc1R4RKmKXqugnzCYG9KeJQL4WCt3yqLEwS6uVGdYr6Kmb",
  "key32": "5HM1PdRHrXDvq7ZqfiSL5nB4y3sgfNdtomywiutLftcqB6Vq7y2Bx6XchFwAb3XGAcun9eAy1dVekSfg8ZT8gt7G",
  "key33": "RZP3ZrcfMw849Kx4u6kvxP8bHPPFMf6pgzqiUdvqkD5eSs41jTLX6U38tWdnybHVe2vNNCoRAZwR4V7QKAonqqg",
  "key34": "dWxXEcici6kq6pj2ZBGfkzwZUkYL3foANE3EoNbgKZR2TMK4p3Yb6a4BYyuJdTU9QDXnavS88oboL78Q22dVnYb",
  "key35": "5XLjpBWG4fuabo2ykat45LLkZ2kTUGkcECzKxU1H5afZ9KezviKUmhtFWvUPokqXUfG3rmtW25HsTPhTRHHvJj8F",
  "key36": "mtkyDyjMg2anhxDLEqwPfTuP9tdegcrSFvdwpBnZJL63BcWxC3F72igdtQMS2VU5E54bjXT6B7ktESNpAD8rB8m",
  "key37": "4PpKAqu3eG7hZaPB4RgU4vUWUF2nNDVuGGDDvh9ahQWTykHin3wvjdE5GC9GeeHZT8AthRRhLp1PPT6GLernAoMR",
  "key38": "2TPu2gtHvpy2GL9u4wHZVmwEYh4FETKynKwGhwHP7p3rhuKkTKhdqSUjMUPMxbsLfe6eMNcpRCrWhw8vHKm5xxH5",
  "key39": "5onSaSTaiWe4ea7DzMXusVh31z9xT8fnsExEJUBxnEjCR8iMQJf2wExZfyrHZx5mt6czkP8NuWHB6URXsuP3nyYV",
  "key40": "2Jbz9MJw7Mhe4G6yPno2ZwdHEh1Wh2AqxeSXBgRr6Yi9Acp8yC34dMF1ssfzt21ohRjifTtcK373xk7oKbrD1z6M",
  "key41": "5sD3UNuw1u6iE7LgWpsY1nfCsjNL528s6o5jaR3kDUsfcZYrNVYfG8FJHYQAU2cWBe2iQAfUwsJpzb9Gf8QpJ8v5",
  "key42": "5MCwtrBhqES9r5qcnrwphJwKkFMVHozk4Ltc4qvjp8cHHeeedE8ns7qLjPLti4y5C3DmQnLRsMXi1cuNaBKhnSzH"
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
