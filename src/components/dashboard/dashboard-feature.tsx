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
    "xzWWR1BdAKqJdtYJoa8kFfdLktmVGTPQGAyG1eJ6U8S1t66V6J3aAfo3aquKRYxWauy5B8sqYh5qQTQeMJdBJu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNA6Kn4YLmFhnNo757P4dUkEc6ZJ2kgeo69PssuXUp17whycDSGDPXfvgSGpFyh8WK1JKnrqURVu5ZWtMMhHHvZ",
  "key1": "2CgGPtnZo4MJ8oAiSQ9an6eTmUwWQwo9MT9A5sAqFMbVWr4qnceqDoQxE8myJeZRRu4XSMdSKWsTcD2M17sw5AWs",
  "key2": "3RWRY7FAnzjCrJFShaPf1Wb5tdGSZtKrRLESsGwuuYMKWjRPHs2Qq15KB38s5taCVp5NDDRTvA5vZuCkrK3EuU7B",
  "key3": "9VsGn4JEdS6qDPhAdYdFXA5H1XtxxQaXMiz6Juexu6SDQq1sMFFtQHJAPdqxnUBwNMqhsksWM1yisvrNTb8iQod",
  "key4": "2o7K2RdPMaxQFsv9sv3kWugxywsaUodVuAPtuzhZAF9sk9MKrAT9JG6UHaSc6FRg1u4SfoVXUz9jBD4dkAw7MoB4",
  "key5": "4K1ZwrkPscXUpXphcTcMYDwvj1Cxdczr6mfC6edSh1we73ju5fQgjcARMfRDteaJLAptgpWH9VNcU8s8FdpWXYbR",
  "key6": "5Vs5F8KLNTx9ochVrTTu9zCS2ahD4jdNXSUXmtPC6mcn4Eirn2yq9gncGKTtdqK6ubbdhTFyRXyYpfpPaP27BWXj",
  "key7": "3panH3AircqcLJ4ngn18FDqENsY3mVABrSrzUUfBdqQ32pjFvX78MiDLCDZfWbZ7GPvVcEvPNfyAjxeX9SqqrWdr",
  "key8": "U3UytRDhPmd9hTSMFLnC6wJyucEsWFBR7v5LkR4Tiq6Lx2t3Bz7cW2594twzEtE1jyKSrkuacRaTmxnAJRPkNyR",
  "key9": "3SLSZ3wC8coLwouBkTs4eo7xs2S4Y2BoSmc8pmTfwKbKbKvECPbm39pkGEX96kX6SiZJKecDU9xwzrdxnsj371Qx",
  "key10": "3zyPBzPYpv8zvnvuw8UdjMh62FeGai4svWQtbFtsJXfCW5tsXKvQt1s6iH4k2JMAusG4LDhBU2YvRaZEusx1cJBv",
  "key11": "37GqfBU9Pqjpj9wZm4GVyQuoB2Af8yejnDh8VpNy2f4KXgAtc6tmWL3SkJbnXwcCz1z4DsDs1zTAq4qeV1JHdRPi",
  "key12": "4DbbykcDnPacuR6S8rueR7sjyiQtMgFMNB4zJKWVtFc4bHN1YKhXpHKZYvFCpqKCwtkVfFFG17ZYhsY73maTqBAd",
  "key13": "2gRRSsDCASzqBpaTti2kMCkCn4ZcVsGziA24DXVyBEvFKDwuh9DZ2oxvXo415pktndgsiUVqdgCWtBFBJTgbDaS3",
  "key14": "3xPubBj6ET7HqhoDjJT7weuwfiVmfNGA2DbFGBUZALD4SYEErfKNp1jkPgZUU1pT2EDxamkvVARtquSCiNUkspAZ",
  "key15": "VCe5KdK977wevzsNsh6N4N5dKf3p5JuB7ak7VhbNDaZdQGs6poCJwiGCYEwxANNK3vHVgvahhVityvrA1YxAW7J",
  "key16": "7WNMitmZKwDMxq3DwoZHojGq9fqCAJkDZfunL4wRoHjT4E4XPxFPtP5BaZgdjUAFr8Mv5CudPeCazyBCABMSUST",
  "key17": "5CsDMwLLZ9Lnz4aef2DA22otQGVLAc9Do1EbQAHwfweD7bY3VMHyN3Q4rWSi3eJzrrmvJVtsNrrjNJcUUem3nKf4",
  "key18": "5QqsGiJK2Y8SwtvDF5XSDoh3Y3EgaaTPAPsfGA8U1XDM86picDEDriN4AaNahSxmDcttijPzGKDiXT7ZNQTS66KE",
  "key19": "4PtP3D8btpNkjCg2LX1pRSezkJhdis4h7DVZwgQDQxh2wvgupAsjsAqhMVB9VM55G5JWNVorD2YvQhwyWjqTdyx4",
  "key20": "6qGGDWWbY8Ag2Aqjv4vAzey4KaGDZ2BQNWeN7aHmuJ14VJAtUUtGsBaEMhvsgnm4YQsQtKCUzMM2R8WWunpUpLL",
  "key21": "4UXh3LQ9UKxLvmVqPdSqTkriuX3q9Krk8enS7Fsw59DcYa9Q9ZkzBpPBGtBJHkFTC9Rqoj5R8d5cjmVAtMvXXr1o",
  "key22": "3H42AV5F8KdntyotFziFqcpUsH4H6KU1k1m65W2DaxuSCu9ZeBLmERFGEFa5TQbnf24rZoD1CDGSfqdjPoqNTqSW",
  "key23": "4GAzoNsxuCyTQzjKo5BLXBJYFAJDngrYDuWHscFKZwJmmyAJye9WgJYiwoFePedFJKGoN3BgGmAUdHiWcoJmckKH",
  "key24": "4yzv2hbPgf4B3LCFbF8sWac1Se8eYZuafAd8htt4ifC6uHtNh71mZb3xeJRz4uXBc6FAcDhATAej9sS39SmMD5YJ",
  "key25": "2i2GF8stAj3UGXXseLgszoqcdXnRjPJs7YrQadQmQwGDjSMS8JeaARPoxmKST77H5WeoJqH6KgsL3Qq6XEmGg3R1",
  "key26": "5qaJCtWzeaw7N7XQRBcsKHuPzRCpUd6VMk9v6G6RZeybXxpuVp8jthA223aV318A7XKeHFnXzibWCxkFnDDRazUd",
  "key27": "2ExjnK7h2CYkGST7936LybGgM68sb6t7brJyEjvY7qr6QoMdsJ4Dw37ddefgqzCRudNJUg8bDBfnhyohvExVZhpe",
  "key28": "2gVeKTEMgYButmrjvhtSB2rnKJxam7kREyej3AAgJNjBBxBeKammfXuNmSShtYMxN9rz4n3EUaQUFfvMr98S1Aca"
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
