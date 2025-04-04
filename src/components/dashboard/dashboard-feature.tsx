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
    "4V9jh1qxdktVwoaNXuYCF3D6B38sH87iey3hAk1woigYYDFEkEWVT3gzGE3AENk7T42bbnRbPN2UVPgZWFSXHJUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M9X3frwURA6kkBZuPMsoBKj8yTP4G9kriQj5tCQcay2TNnJ3hxMH4zojaGmPVqjzNoRCP64qRQ6R2mYNA9XRz3E",
  "key1": "2b5RrtrwGdxfaRsskgR9VdUWQDL5tWv2Eq27ECZVeKWPjHnbvYYKPBSrxJxGKJ4UbRnJGntxk33dEi4G3HvRH7Bd",
  "key2": "3HpLBZsYGN4jA9o3gEQ2eBicB5PEJkoxd75ayyekqjVMGMXZ4yPbbnZpCHF8D9gJLZ1cmkFBHaEG7W4NqrFtCXdp",
  "key3": "2WsvvQBDdnu3NcXz5BxhdAtwqWud6GrRW5sCi8Xo1Wg5iyi8pNPMCpwfUvVHSGPZ8eF6cJVnGWNDdMqGKFXE94rB",
  "key4": "5hsZYHEoPgZgLHnMjQFrPGjbiamjBm1Lvo7JeQAG2z3bSYV7XXRspW64ezJCGryhRq3hVBz1hAvXivFd2sTezNMB",
  "key5": "61rgprDCrJ6n41BprmWkJRmXKeiAeTtTR3AkgvvbHV2ANJCztxigzjHyHWKWJZ74CYttexygMtxdxFSvNiPohAUf",
  "key6": "k2sx1wK9RngviSfyGn3iu3ZXnvu1oHHxFm6HNB6Vh2T3eH1bZC2mMwiA5fbBdQjjiMYzXRxTpVCqpdQCSYqB2EE",
  "key7": "2JPTcu3uT5wCv3MYEF4gwyzQJ5hqqdz67dhUavfcbsH9Ejc1G8WWbJprx6NctBUG1ZdPzZvwgF7xR2m4Zd381kJ7",
  "key8": "4y6r8FnhM3k3HafNW9kCL3UQnj9sdsuNcLhgGFhNrMZdGCqq8hv6DG6vXNFXpbj3NMk4g4qNBtqNx2sQXscT1UCr",
  "key9": "3cam6Cp5VjkNYVEsztFV8LifUZEy87iVeYQunrhb1GGdJRSTDLQxJ8VqYrWmbc5UQJZ6yz9LkzFMGhMcuGYiWk5a",
  "key10": "4kJ6KkDW3W1XRjKF8asDPjEnFdTh7GGQsGo2nMB8qxNnJ8A1q8T3g5X1cvrWS2NjodHKVAWN1zc9s5aDLEw4ij5L",
  "key11": "tjFVyzxKvGbgm5G9SjjbNifpALd9RZH48waVQhwputyJ56gofrePwBc3t1RziXuqNw8PJq76t9kgXh1e3kodYnM",
  "key12": "3LoFtMvwfHKDawJ9HoogF3ZfpSb68scg5RymuLZWf4YA3hGVaEpj36rxefwee92g6pPCj9FD6ZfW3wGmo9NpN2i3",
  "key13": "3AZ4hTApMVdRyA3Hdzo5dqrzBpuiDt686e7RmMBqwsemXxHa92BrUYD8BWcAwC9DrkBm27LwoakLkuyGQog1ncRk",
  "key14": "3bAuqsqKrXPrJCwrdypXoJzdccgr8v1J4AYqvfRZzpbWPVrS2n2Po2Q7Ec33sdTjDq5kczFoy3WuWaKzrAGsai5p",
  "key15": "3ScpktkXeZhm9QGDJdJTJQnq8bDHTGp5vjBcfnTSRrFBB7XAU3nmCPub4UVCE8tX46bk2q5KPk4EE3bUMsWoJLWo",
  "key16": "2Wwx6aPJcaFpFmWUjry5xZrPsjnkpEk4gAvDptRSryM51avMQjrqida5vWeWGcb653oJ38ctsd29x9UNdyE4zBhv",
  "key17": "KaRvGywAvu3mYGHULNQkj541Rd4MvSmqitzqm3AjCeYZjTX5XU2VVqyEMDb3YPv9yZxBC5fjDdP5cEf8dAVsah1",
  "key18": "3t4LLoeaJ7ovXRbnWP3NNSY4AusseMQriCRQbPsUvefng9XECvP1tJ5DTpkrA6JQX8CUMGWktevzLKg763moognn",
  "key19": "2nwiLp4WQQqazs3ADgYLALJxBGgGJjk68DmwZRTXhdcVHqo7wSGkzz8AqMKUeyjn8wWmjyTFpBCvuZGbv9kTZocx",
  "key20": "5Pb5o74mjoe7tBE2ocE7w7MtFy5tMiMZDCfoNHnnkGB8fT1ej35amztxFbhWKYDRtoDBpEooQZPoRwbkJT8kLxHT",
  "key21": "56UUzpmRsZfLJVj5ZYxqt6haZZQnBaFf7uyjA1EdHpsNeAcWUJ5iewJuBDApr3h5NNBUexnCGULwfmQkArEpHFXj",
  "key22": "5byDCjcxuwqRqH8GYL5n7yNzUJCavrbj1Dm9Qku7L7b1Lqom5AWGnmKvqDvSbQG2comxSJC4guJQKaijbeTAtA4x",
  "key23": "3D9aeTaXqnkGned7JiF6aHbcUqE4wiAvaR6DAX5Nbsau4P88BPuCP96PbfBfimSgjwqhZ3TFJd6Pz2vZ81zKqSTT",
  "key24": "58jbFXbyRcHNVRro539651ZesGYCahWAeQn3Ad8b9EUtemCRQWDm64P5iRFzHBaHfxkmTT3as7HQuRQgWcwrxAoF",
  "key25": "5C4hELY2sXMBvhpPJ4NiyqPgs1H9pnXTScRC9CJx2hkj8rCr9nrNXfas6F6TFX7MoTzYYV8R7RPrKsB7HcUSVjyb",
  "key26": "iZjCWHACd5RhFw86bYxJfEGf8RQ9gWduysY8KhYdqoYnujckeXwSdwUPYwQ4Gn4Npo4KXSnV9X7ySGZqJmJ3DKW",
  "key27": "yT5599z2h4B1gs1n2KDUpCbuVPcs2wJNsAssGKwpP5ijdBoy1BRSzQQgAEqYPstZa75TNxz6zndp5Mh5Y2N2unQ",
  "key28": "2sbk8zrmSDFZLnrLkEZifpgs2oXoATEjDukp4WSRqFVYrnt5KmPe7yALM43QPt9DWr2aFjX5WP16cXsVxs3qxejW",
  "key29": "4x7rjYrfw5Yso9MoB5pN676yFaRLzTpXNChSZfoWxBQNGh4DD6C6HNLx5dWWSPThE6gK39f8S2KLYaX7NwA11Rh",
  "key30": "5fDWWzdFtyxVoitmZoTpCScs4fuDBRgZficQQGm8n9LPhz4KpeoUB6BynkVnfCRdwNUbR1tCqgFveVLQF3nB7pGz",
  "key31": "4cBbmB8i4FHmtuU5PXnE6yH3ixuTfxd79yHGaU2rAdXrE5t9ktgcXRGaLWJwjRPft9WpBYMaZvJzpT4eTkudV4Ys",
  "key32": "55wCH7WyTg5hxVCnAzAxkrML8xkZTmnFuEVxcvPWeDX5HFgmSMW8fNWKKUDQchHF7tRuo4ZEy11WW8tHDX8gXUi3",
  "key33": "3pqRsgdj7FVCKPLe4XfzZ1BQa52yN6DTVu62pBBQjVedHXCqbqim14UKx2vhsL9v5mJaC98d9RCJChi2aN87mSwb",
  "key34": "45cBRF2yqwnL6KwAmrqaDaY3CyYzbxty2AZJASGXS5yAcFMj8LwBbk2KFaqMN325gTKZTHMb2zRgS2ugospHmnot",
  "key35": "dUULNF1jTBaGUuWSPxUpHTBKavSJu6aBmDVou14Kjubox8TAMiYxdsvGSnPF7EBwP9Zya8pbgktrCZwr3ZrW2jH"
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
