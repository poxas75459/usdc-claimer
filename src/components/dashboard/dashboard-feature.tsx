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
    "wjkxkBeaGdFsDQaPnYDrrepXNoYWdnZY4kiyD5MrarBEkJ6Zpv1FQdqedxi8Uae195nSbjMwRsykd9D17Vjgj3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQVEF8LPK7YKUTei6s4PxTVkwXt9goMYXXMf8hh8i8dds5JHfpA3ktVTpq9NX7CXoSMNbbtYCEULQWNhY5deo3m",
  "key1": "27taqCrZqutP14noikRpFRLRMWdiFr1H8dXLPWM6xUD5AkhW4zwj3yC5rQYZ13VTkrU4hP2qK5GGkLLgUmKF14g4",
  "key2": "pZ4hURZAXpqA8H44JypNmwsMcYem1qTioUP67Qmg3gv9gVEhqF6pKxGwod1qnNgCp6DKRvokBzLgo5xq4uaDpAW",
  "key3": "4y6yoTacJN8iFaa3Djqohh8dVmETbYM9rFr56nEn4NqL1fvKMNXDo5BEsswe1J3NM5oNWji7UnqtnVmbz2Y7zkSk",
  "key4": "5SZkzKZat2BpnpPdoD9LTUzGeZRkUZnLMnhjyS2LLpM8aKdCybDT9ckoso7zA1BFrThx4DkND4CJcYsmxB7cGvzf",
  "key5": "FKJAKUXWAb3EdP9kAfSEg3dbFxW86sLsXwh97GVTQ91CPTr23V2ivUS8hhdTjZ24pTZNQ8jjPhN4EE1EXw2PeNR",
  "key6": "sZ4YrUfwgQesFvE6D1Zo7ZPBooc2PaGNhgSkdttvNZqgSU9VT8tNZhoSunHMFaU4BJWpmKTUWYd1r6oA92ALiM1",
  "key7": "zw5hgzdJ69Nh2QjQnWpGmRcZxt2YXGZQaqaEZAupMveftjFBXrJ7fScd6NK9CZjyThhsyxDgNQ6jHP8A2VqXfdr",
  "key8": "T4ZKs3hUcATrCqD2j6ArSvyVuh6NN8mGW1u9LLnQZYW9tBRJzKocheZP7uoEp2rCYYdShyZcmhpsWdqrGmeYr7T",
  "key9": "3U6WRwsKzk5YAQP2QuRP5gwutBUzrZhjj82mCiFG9h4CxpP2YN37jP8H2r7feUY4UYoq4Qjq4CNbmR6yXBeZqn5p",
  "key10": "25fP3ewzFnEFVmAb9KkpSdG6FRBgWUa3nVx6hPuzwz3JPydAuDLqyLSrqvhhW9RH3eFGRThCg7mfne1VF5cWkwX5",
  "key11": "4GY2kgGJceN7fSo9FhTcgw1aAGi6cG5JaFAVVqfr5TMoQggSG9BAdf8sEc1FQj9qaH61Zn8kvKAkSS17BisYJUBF",
  "key12": "3EHycwRKWxrAN1CZxh6V6ij7odsDcF1Cm86ywR4ybKKr4qpYytbZWSuJoikeowUjj78Gp4fTVHE6HcoJ2HdR3cx4",
  "key13": "52EaVoCSsJovryEKSZfy6P2EKYimTZwQpqyuTphsVem3vuyrDWWiVF8MXkbAVUL7N99ekrjjvnyQfXCFSUAR8SLQ",
  "key14": "3Uq8cshGEkoeu6Vxryk7zDXwS7if6gsbc8dL49DB99KGC6PfD574ES1Bkt372ZnExFMFb64LLznRWjF7ydy4VFcA",
  "key15": "5LfSSxhFNUWet1F5dYiFFcRKoMnAs2pXGTwqJfCUvrZAsQfDaTf1FjboYicM1pggLBeaymuqFPRMRdpojWNHKmPb",
  "key16": "41hMZK6bFUfnYPfBZAQ6b65ouj9qHmzFTPBse42714VSWHD1R7Qm7GChZCVwqpUcd3osQMz2NazhN7fJ7P1NkY9y",
  "key17": "3ddWvgKZ9tQ4zDr7cL6du5dD5ASYA5hhCpDKZ7AiLkrtrav9iyP53MEuHvuptZ6kqtB92VhnmFKYC3boXk8hAkbD",
  "key18": "2MyQPPBSSMg9cZq6aCgkcPQkGWFww4ujQg65uwgFWCGgM9JynHjJ7Y2N31AnmV8Gac1cF4Z2tSZYbkfL28T5aren",
  "key19": "5wP6Vt2Q8ZrbBsYShe63CzRQCC6kAtnYUNf8DGbT1EvREMFmiyTmteMATKtdv4qb62nyztzRbh1pLhPMJ5nF9Ysx",
  "key20": "5tSkZPpA5PE96JQFURgTMbfNQgs759CzkSNVT5unextuc3s9DrYNgib59B5rkCmU8tdv4dJCkQAUBBhPVouEe9oM",
  "key21": "3pUdMDF6o7cGDh5cWMmq6SWtBR9N6vfXNQvpLMEg8TzAV5FJpKfVuFdMqbQbLxteQCU5rg8zzNkU8bYPUBQvTxXJ",
  "key22": "2CUufHWnh9LQjgbnxW5wtpQQJntnmCXAnttnAKQ3vddCsZkNjbmp7Y2kYhzLdszn16UdiwJWayY6bNKrjvwumSQt",
  "key23": "49ij5nEMD8E9wkfYTEQzSuQH7w5o3YdX7p3QxsTyJLSP4jWyS8dNAhdJvXF992FDLTW2qsoJEK6T5pP42jFtoX7x",
  "key24": "3Bi6Grcy5KkChBRAeGGrryebMpmLyjWbb5qrn1qw3VJCD2A7nYGiXtuNyskcbSCNrfaHXHvauCgpKsAeE2dYwCFz",
  "key25": "2BNL9Sr6rCH2WCqsBjTfWCNDuEPigSzDJHABPAsyqs2dxAA8ZxpFsefFKdaG2HktjyPys9kYgeYpd4QcZp8k8iix",
  "key26": "5qafJNHaNxkqZjsdTG32hSXASYhxNeoTmRprSfu8r1e31nzuDhGgRzLFSz6mC41HbtS9nhazYM4BRq6QoW5NLaY3",
  "key27": "2hQQPyvaRBPjG7WhuE2ZsbtPpymkqoUDUBdSoRewsCymx8mnig5vQCiUp6nvnwvm1hHJ4s6qhTmy6Sc5NUyLSA24",
  "key28": "2YWHMFvi8rUpRDpf1iFLd8BLEhFSBa5punzV6fGUFXi6ufKxYGn5eGB5X2iLssijymmx6QXyBk2GHnuzUTHcniMR",
  "key29": "55wKscDyd4r75mwUDYM5rEMg93ZEog2sSMCM6MG1GuYLCaC4M5E3LzHKCPnfMy7nqEFBnrBE6iop77LCKM2C9sbh",
  "key30": "3rSkEF3aStk75uScztKHZdKAVXTxfS25QH5fUB5bjVnczET3ouU8wzzrFV3pHmfvMag2f3u5Ym8UfDD9WCxp72G6",
  "key31": "65hEQXtmaHbLoubraxqMPJTQVFud44aWyLnGT8RnaV7SCru5nTcSdWXYb4wcmxCPi6YHDhvovJhP2F86maSRQLka",
  "key32": "3ikufSg43aQjmqNJN5s4mc7xvErcMvVb8ZCAEzA6TqttuVh4GmG3uF1WyySRJESvBezbQ2GatqYGm58wDvBH7Z7L",
  "key33": "5ZXMEdfYXG9ZH95jPG32FU8VP2huFzKBANrPqNrqngzrMPeBH7o3AhtNVDUudYhk1ZuSezQUCZ2EyzPFnhQo7D38",
  "key34": "4qrEjbVhkHze5YvC4VWNNJTehU1phF1PzpuN9CoRzQvn7kBaDFaBuqmCqnVQqCZimGaCzpXKhEp6RuNYBdZxeGXB",
  "key35": "4rrvpbaxsQZCqTuPKBzeDxvBuUk8HNr5WAj6pEQZdwjSfXka1yjTZ4CXuoP3oXv6mvudFBfBipZAyDxTMS6T4MdW",
  "key36": "2drfQPkqk4N71s7jn1RRUzNHPjvkQ6kv1Z1TUy65Gie68NU4FvJdTWkFnfScGjF6UJhXBqrUhRRhRGsBCa8o6PcJ",
  "key37": "Lo3neAaHud5A3phMei4CmGG6hRSRFDRE59txW4jPVbT8Uom2NGQxvHXBdeYAikK5y9G7soHM5Xt5oTswQxcQfYs",
  "key38": "5LPKoYJjdbLhiyyW6NJNZc4LceiMvbkAQ5d7EEFfkfktJ3EgtQT325b1KyWLdh6m7rYyzUnt8wNgZ6dkkXuEX4xW",
  "key39": "2QopaYfPpdDXjrfw936bzupKwXvkzPHDzLxy75xXEiQyLftFx7KPEkurAETpnNnFnbRXCcMSoQsovZ6bm1dmabaW",
  "key40": "3ANbjFAr4xd7WwRLXn1SN4UUy5DpeRn9MKd8MNWU6ubKRs8oScTzu7MJaqasM7ehsDwV3pLzLJm5Czz5ghVAuUix",
  "key41": "4G1cHdsHzYVNEEVhm6ioA1tG891367gkmfCGu7SNiFpFFuRLsuw9PfQV7fRywe9weno3qRQHjBhGVXhQ6zL6V16L",
  "key42": "NDJRedHt3E87FUNZoeLRUidzKAC5Zi1xR8yuGJVtQB2DYt3djG2k4fnZcrXYTdwBWZvG9EK9Ch352A2SqyHNbwN",
  "key43": "51wQwAu527diKzygRkCDhy1xfNftXsPGto5EZrNcjr5Hnhg8SjHFw9hh9bfXe4X8s29EdpGnmiS4Qb29kNJTy72X"
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
