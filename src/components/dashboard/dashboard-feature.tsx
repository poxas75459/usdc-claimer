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
    "599pM84H7ZZxKwyuZqbFW27rVF1Je46nUZirWirNVCgxMPW5sMaikyofRpHNhatoZZLiM91vqYwBULEgxt4orQCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzhqS9pG5AsgCmpdV1XSReBpgV8sXFDBB9BHvxHdgJM6M8xUMkNhpneZWDtHs7DMngv2BZ7EBKqw4hJwhA1oVHx",
  "key1": "16iNxN19GQuVRBEJEXP28iCmSiqsuERsuaKYZoSMZxrdZmLJzUG3eCfTwUDBPAZazaX3nDt8sCDbzd1EWZgxNVD",
  "key2": "2daa4pwouzQSznRhUs7SHFfVVjvFETjLMK5hbgDMijQc632U9Y39haUjtncZPGkak7YFydDTXBdyTKVDz1Y8rdno",
  "key3": "3yaHfeJX8pQD1kfuczAHqjRNiYTwtgLA6YT6bf25mtQhGK11MQ7bC7gim1YSRfQxUyf4HGKgYHJB5kxAQSdf9QyR",
  "key4": "4rmVMLLoXKZ5JDpAw4Po6ZDp7medMiYtbc176fT1NYohVq5jjVbQcbjAQNwGNDkRGnVxDz3qa4hJpxkYmdXHLrvv",
  "key5": "2NvAcUC1oxLyVUpoaFmA6WYNx7FBEoKXgB8Vuza6pgWFnEoKzbubNCeZ8rhcP6rbeb3E26WqSjLoMprcv8UShVDS",
  "key6": "61HQVu1RtJ4AoKrsT7HznqQAwUNbAX9cAxRDRkdEsHLbsTTamkHRV23uK7tbEWJRV5MZ13r63LFV4CavSJYPbQbN",
  "key7": "5YfdYFpzUnjaq9hBFBYvjJRauyS75LbF5eEreNmUupwAnWinXULPcNaAvvhTio7mN7f5Uc8JxrcpVFJzRYYVh7eF",
  "key8": "64mLAaaTSJgfcUe1Kt48KWLakgszkRPtu7aPu3Y8M4tGexdWkC84Gfn5eqBZYw4Yk6UsC3JKNJGiVwy7yeXqmYvm",
  "key9": "3xZpQphkrKbhvJhxefT8R7UYFWeL9nDKVDs5FtZEAgAUGgLQDcmzyWtXkpJ3fehb1JVeo3YboWGPLrjhMT7poSey",
  "key10": "5L3u75sDwykDNbv2Punx921fNu9r6E172SUHDX9PWztBXhepnMjn6ETgsSuoCUuuaDdq63pF2kw9ZJ4qFqZ9oNwP",
  "key11": "sB7PMqTBFbPBhxa3q8q2y55Z8gZbHLS8Xz9xGMNAHGzvuAPkRiWDuGsuDT7DL9JKyfrBC8VYy2gvqCju8C2prwg",
  "key12": "3Ldvq5uoxXhB5DBVRkoZEbv6b4xqwQCpbG6M1x4yw1MKu42czEMwQEeyBYemKZBKLnmjF37MUUwpmX4tHt33zDGx",
  "key13": "5eaXJcoiuSV6qzps3hZ1cgcSLUztj14LeZKRGq4ZVf95XSyqWs7esWuxeRjx4WYKukc528H4bTqRnwMhDHTLKoAZ",
  "key14": "3ktCffVN3FpnSDJR3x7rG3dSFBZG29bNHzAwykf5Bf9myuZZ5345erpqTj79WXcqzsm4FxsYpxeJB6B48Rxm4RSF",
  "key15": "C8tUUh4VmE9yRG3EsofdVAzp2vGk19zarWFuN53wtmWRDkQSVeoMo5JA44WsUmdAWDawKWy4YRg6kZoTb4o83UR",
  "key16": "WesZ8CWh1bzaeXnvRLWEkwPh28pEGR5PYyBzzxB6x8RpAmVkNiwWQpCSPMGCGs8xWvR5iLKDBcr5M7wAZ8DUvmR",
  "key17": "3kLJuSes9g5u3oLF7CbtRu3eEuG1S2z77qsnUJBBzD3CBtSkHeGJNnAdRGUhyiF7oza4XypkD3JqmzSjWwwfGH2K",
  "key18": "LeUV9DBXxtQzdeNgxPckywDUAffct4nCrxp6tP3AaK4KJCu5kzYVRv8r3PNZxzgpUNnwtQsgxgE1ByE9XrGnWSB",
  "key19": "9R6M5YgzpqXc1jrpwUn6DScabeAG9QCncUdkhD1WNLLan3kj9rLdK8DfmwL2xSHeTkp3kdvHimYnyEUC5Wbaupt",
  "key20": "5QU7zQQfQQFEpG1BgVfxt9wF5JwXTv83SuGPMvdXeL8qjYe6FEjyJybNpTaurSs7NTuBvaSTkyxUxqcnyX5q93Vr",
  "key21": "31SN7M8NQwnuvq4CpxCPPVpfkdmwHv9L6Kk98tmX7kLFodAWkqFgSvcaFSCiu5QBjyesanhGG8Aqyy1i8t7Cyrsk",
  "key22": "tVxoRX2ddxq87K7PCBY8frMJcMwVGs4szE4hRPQx1BrsHNbeSU8LoS4fvhmbMAX8GGKEaoR24S2JTebMnEystYU",
  "key23": "2L6XqVFfN6F2423mAW1CyZnvWtRgrisviuiQyaMpb6rjySdsYRZ47g9qRepPioj5DnYgmLRdeJBiC4H51iYHGnuJ",
  "key24": "4T54RVhpxmV7ucrD3FNaXucDChecy1wKQpcm9AQ3wFc12nbpxTbdXm2KXsaA26xhQ9ruSG36guneESaQUXPMC5EL",
  "key25": "ajFdJzFGQkLSmvLPa1FvaCP8QNcbDxQzGy2me3jnFUmyPuuher2eL7Usms63HHVqh4vEYvbDD3mxTDLQPac14Vp",
  "key26": "3qWHrkcNWbDN7DwbBsHNVQ6jKaPSg6PPQwxrPvJFS2S98zQ7srZ912rQrYjMnVJozqpjTuFxknoiRaTCLWJTF9H4",
  "key27": "Lm44FKPJYhtzK5XKYzAp5php86fjswnrWNW7z7XTjxy4ZWDim8C1CqroouPstS2LWccE6usxTczLn3ZDDbXxwSw",
  "key28": "2hEdXpTChp2HMR3o37U2mapZFs8zfNrFarFyBeAKpGi3hXM5htLxkkDjKhaJiRtMxFJQKhKi2o1V4gCHZYyyHXhu",
  "key29": "4SeYC19ypQFJzRAGZ7kGsuPk8c3ZyDEH7oqkAUpJBfDdYP4YCCLjL9aNQ5RtXWuxpK76HkuB7URrPHsHdgvRHbzB",
  "key30": "2KyZhL1jZhGnHL3y3NjnkJqrm2cfXooCWiFYXLwVpVpM5YHzMDpMJX99cy6jKLebwHUg6D8y6oUXmWcY6xWtbnpq",
  "key31": "5ejcy15pD2aZbZ4jpHakZzQfXfCDKtcuhMRDaFfH8PMQmEs9hhVGipFhgN8ovgfHdpV8XtqJcCqtyWDLb42P1MCf",
  "key32": "xuGv2JwDpCP8g7yr2m4Arv24SM6NhjK8UbtBT9vpWcj8CNJaX3BkgdMJNXrf8EBovuohRgzdFAiEnZXL368XNgi"
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
