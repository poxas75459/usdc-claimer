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
    "2oxxxugQ5wNL4gMLSepYszDVdWUSmi8PmzjxeXw3DtG19oYp3Yv9fYa1AUTGn7qef15EU8nXDVtXoC7rj5PgeBWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HgayXtQL874AE7mFL5EWcuaW51ApTM3qK1vVJpPK7AZT7z4hKkwR4AYkMdmKWw7jB71VQtcPt7QmkHJ76oxcai",
  "key1": "4vogFsorfZUpwG4PpmBQFgPuokPCjVBjMVhXprjBkYfruptCiaDykGbVdW4LwFP8By2vRzvPyQoyjUzPJFLTTUrU",
  "key2": "559ak6Rq33oKnqUmpP5qNxq41aXv6svsHLr8R4VmMJ9Z3G1HrkHDig6FMkZj35tvjXvgrKPDyDH8b1NJG6fr2RL5",
  "key3": "4kgapRCwFCL1A8MyoEgzfVr7Wy5VVA4jGGpLcVGEABvJofMuBT6cUm8Zw3Ao5aKp2hcvvq3K2bxwKHbju4eYDm4h",
  "key4": "3V1TNej1mVApqGz9f3TD4NSKmiosFF781A513StaAjnDMdD98bD5eEZ3AKNaP88s5P5kfCaz9dxFhXfZ5V1KbC2M",
  "key5": "42sgH92NSS1M3ynQPsmbshwYZuKGwg29DiVNyPs5Q9P3Wifjo3RLxyKwdGk7qbG19F6Bsz5Zr2h9VpXJihLCKPKs",
  "key6": "5appKKr9Jt3nEPFNpbsWVy3qrvQ6zHUNk3AKgLywbgYtfheR8aLELriod258ayTCXsR6y5EkNhDXKhSmHS1Pz7eu",
  "key7": "3mDeBUewoW7rkrrz5rSm6sQ8ePVu2E7EmyNCP8CyH6DncxAwF84DhNPmAf7uT4v55TCvF7KMmfSrdruV92icDwP8",
  "key8": "4yKe9KXarC6W4U9pmPLnCRzWx8fRY6CwRKiyz7rU4i9T5gXC1BhFpykGiGovGyqJ3zwPNVCpntHB6PNuA8zKs2r9",
  "key9": "5vEcwc82bBXXRPj7fz2PvKDp4QBG91MRwWXzPbWCmSfQe34qBpTbtNJ1YMRMrdXf1KBGxGb3sruk43VqAfHBrp5y",
  "key10": "5c8JRGXSx2J77KHQpW6ReHmwtQNy3w1eKKFRgbj8bJmaMdnQeWk6RxBSfpPRMtbqTux6vHGkgfUjQJWGt9qWW4XU",
  "key11": "5ZMeLtgq23u5FBR6ETNbHxDZPLZM5STMBKwZXYsooGAdJtUZ3m8KvchtNxA4St5bTXACLdsKcrrnQvrYWAGGJJ2Z",
  "key12": "2vY8a7HGaQSJ5dEsZsVMPAnG8pBQ5qtJFgBPz1JzT6mr2Ykya2zKmqPqwQyADkBtkRW2JkiNfBTbzQabhVpCGj8u",
  "key13": "5Edq9VG2UuBC3n4PmPTmT7Z6woEefyCuwJaUWXAz1xgWzSvFRFNo22gXJDf7bcKApWbJeAmuSxcqTCkkvFY1NCbJ",
  "key14": "27LWSMmmg8gMdCUCD35jECGTr3jX52MPND6otQk68cBvyqhkaRREaxNNZ7DKLcFvZ4TZcUebbHStdUGQMMqhCT6v",
  "key15": "rbDuiPUgoELCh3F1smYge9CkKicXvSFsuzGebso7paGCnTnKkdhRNWVyYGeeRXnwHWmswkdYDqdcpjMGpCda9Hg",
  "key16": "2MYfZv62PfBikg3imWBPWywUcmrMoEQufTFbyeKq8TjZEMLHTVa9QYpp8bgLqu4MtzxXoJ2fdQx7arCY7f9P9LSa",
  "key17": "5pNiPwsGkYSNTJH7nf465BLB2uW9rsbx2hcXcGzVykXiMTrm9iKKrNhqWdNvAKB56Z52YxW2vKgu5gC29SQyiGTd",
  "key18": "4k6MGfrjCowEFxgF6PtpjC5Jp22JRDjtEEKLVya5V1i2jn9a7erBcNgH3u88rKdntVQjbwzXTq2apkMMt3X1aj9t",
  "key19": "G4eYNkM2otDsJFB6P3nJdzNpjk9GKktjeUDRnUtUvBGYyYHXrzkTVh2LJQxV4L8eZqbBdV3gZNsk9FEZ4K5Mr7L",
  "key20": "5U9CoR4BXEYyzeeZqWKZpjVnhvNUUDfJA5bMwBdWrunDpDBK2bRvouePpyqSCvVsTanttvoRceJHPBLA2zN6aYz6",
  "key21": "47HaEYhzcHCnmspypH244xUw5M4pynSLu7fFjNkMLa6HAdMwZmo2z3CbBefuMqrcyVK8Ypd81y8zdUJkSwxpR21K",
  "key22": "26KnVhpUL6UBeBFu79WzZJB67hqr4bU5xrVen5N8oEXkCqCREJagYhJmtayM897UiityHqrCoKNzbkArGs8Szo7q",
  "key23": "2qLGNM88oNtNwJ8pFUsJ5k9UF3LyQ8LHWPaSB5RVMY9Nye1acgQ8ri2XkmcDYMCXTQh1Bf1SLE8mH2BeU17whr2z",
  "key24": "3oJ5WoEWWRNUKmi8axquF5ATkNd575VJWk6zCHjUDU9kTjDR1dM2jsRYJb2Nk8uWrVLcqTLAQbggrAvUpAY4nmYx",
  "key25": "4nrSuAHw7LC6SPnVELnowTLBJx5fEZfGGNLVne3sdjNgnhGFySXEHnjae7zYkm7NbPgwcFc2CHLhqUTFH5keQev9",
  "key26": "qh9CgY5hs62v1QcXxsy9R4eoj8McCj2brexKctuDXCQPydqL1RAq7DeM4uVeQAEMWrfamzgCGx7qeUwzM7DqLR2",
  "key27": "3Z9pRT4NQjn1PmXPTZq2qTf76owyEwwbQH4HP3NPpf3dqW43sCvs7NNfdpXdcUHPQEbw4vhj2uYBb1ypcQHrt6eF",
  "key28": "ngX6J4XG8BHmPCQ5tU6sbCF9K4zwtqT5nSMa5jNjfiS4WbGNyKVBNAXsW8WCbw3NFLym27okZXsGUSGsFANXkuP",
  "key29": "bNdFJGDxzJgu299YRAtgQBnVCQcjqBKTQxwtbVWav7UyYQuahTm5ZVeGgzgdN39dcDvX4MmD6bnQK1QkXYj9bj3",
  "key30": "5WAcB52H8iGtzkroTRUnyr1Sp8CUyERcpMjGsqgfeP17z96vypbqkgLKjMFHKT5jojpe34DfjdDfPzYz7w3GJ68v",
  "key31": "3TQYRi2Exf1cxThMBvkEHUkwoXmgw8bc9xDkYMwEXaTqCPJ78tRUQU1LioBnoF1fhVZcgA43GKUV2iZTQuynqbrS",
  "key32": "XsKZu6hES9u6BHBiXPMnN92Mr1iFtHsWhsPhbZWbd7qiF3LL15tMmNPd8Mpc4uKSCQDUNgcaXb4zihFgXvKTEc7",
  "key33": "gEHFXVBYtaQRshc3B429CheAGj1EZyRwmcYAQJYNNBbZGytLPBbZC9Tj7kGuvS1AiSYtmcSwoEWVcCaNxHMR5kY",
  "key34": "4YiN6NZT75f2Pmgp4df1HgCTnAPJfGwXcHcqAsY9vwpqFxr2CWsdwSKbUqDtR6E7kCXNVW31LdiZ6sk1ByBNewP9",
  "key35": "3cpg4zDCSxhtxFeLQ2yVdhbnaCdiivFEWQZHChr4EQMJhHmVMeYGdNbtSELBbXe4iYf7yCpnPh2bZQbz4QAwoEew",
  "key36": "33wsBsGNjEtquHRPEFpz8pNKuBboRYKTg5LX3phHtmcScQhDoW6g8X9FcWADeHFnrpEDBfyEpiMj3NLzm4aHmzoD",
  "key37": "rnZeMVEMSa4jCKie3tnfvy8NS1i3LVgcQxPNV4Pmfs197M2dvPrd73TkiLhxgyXHxT1XskP9DmhRWH3Y4TtdSCw",
  "key38": "46S9vW5pSZia7AN9VhgrrpnaM5fxcHAYk2FQqbXG29mcePNJN55ujrkyeVjcHYTocGg1bAh995bXpz6RXtNaw7e7",
  "key39": "tCHiByAfc9QAg9fG2wjK6LvpsPPvmW18FgyW5j5nYU6xV889BHfs3xDXMHeMZccSfixoJsKoCDSmA5LBscsZP8s",
  "key40": "5VrQHgAoqMfeqE59s8SuMhknqifj1wbnzd9mskYrqqJcwneeVNdZfbM8JP8vN7eNoCPPv7BZVkihknHMw6bVJAB9",
  "key41": "5BoBXXcwPZ6pbDQMcfDTfQmNjV85ETwH8eGTiKHc6awAXdFnygzEkGPNEyPxu6u3ZNWAkBKTMU8uKERMa4h8BftB",
  "key42": "34D6wFv98DYhi45NxY247zA2iyK1jcx46DSniteUtwTHLGeDd2xYF94mBb7A4o5piPHfjaWMUAxxeaDyB2TXvnKB",
  "key43": "2VoYtRUos7utjjF6WwB7ooMthcD6rF8B9ZJ2Q1KMmzDc5iTKFHK2SWRiyHqXV55Sd78r3jBKckWHdpKQNBnJKV2L",
  "key44": "4HMkyZFqKRxve3c4KzvxzgPx5BwUgWmXtxgPN3eGpebeRNuB3D1xg1AvYYzkau1XSQL2aLeF3NBS977VUTqvcRbg",
  "key45": "hKeXWsGvcCemzzDsV3b81aABELF2hhXPpiqBXnLKGdtSoKEwEUg4XxYHGqXT5DVVJjN5Nb9EUCDkireMTx5yKXk",
  "key46": "2SGtUx87wRstTC6PJTxgwbh6teeSuaCNqDSnQK16AavPQmrnq7Je7ThCEs3FiqwogrHrvyLVnmtiR7h2keriXFZc"
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
