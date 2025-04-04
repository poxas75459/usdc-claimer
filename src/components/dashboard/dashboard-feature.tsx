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
    "5VqgpJy42XxMfefxeEkjDLbMd3RuagMnXemg4GdE53RBogT3KShhVPonHYwnuNgygbMBR3RndRJnvh1rrN2vkUMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orQmzgfPAkPeKtfFjez69kVLKvmUPebWBJHoZWCsNHz2qHFv6ifsh5XsmKEJZq2SShe3iyjShehJyRdcPT2H4NT",
  "key1": "5wsoSRHPuTP9YVbQMq39U1XzziwJXeBBFVHEww92hAnAdQTbesp5BewT5afaDwbTdZyqBppGZXwG1xDSSj1bKUkb",
  "key2": "2HJayHB5oN5pFs3JdUxFeYzB7oXa9cq8uf7gbJVgyTr1d3zSLpqgnCBXWkoF8jYZYiv2mZXq8DVNLv1LDKEouNwP",
  "key3": "4Rji39w8iA41exF9tdLobtMCKfTjnXTCHsGmxW4YEDJU9EXpVUiTLUo8vSTGKyF42CfK5NvE11HCC5aXLHQX7uTu",
  "key4": "6426QaXzwUqNcytUZmFYkXmygqM7zNyhDeYpj4ApByQVnouoeukP3QHbwyrErHfZkiHKEXWkQ4CANcS5eGGiJzee",
  "key5": "2htWqZd6Q4YLWJKXcsuTjgwYcsSfTG2XJqkod3tQZoXgTgR7wonFdQ5ynuEfkaudzRTYoa292wS4wcJEhuGJb2Qx",
  "key6": "aYFXRpTdwi6Aik7EX1EfCxCCdF3UMr3CEkYjLufAaojnYAZy2owfUHxjorYLYU3M4fUUpGUzYLnHYgGvcHJcQPo",
  "key7": "4xNc1sjiNu6EUUefrLWAFgftCyQ3rEWoyM1vDw5F3HAUVQ9wN6qZH6wxyBcXRrMXaKGi4ATWyUv5sanqCoWDCwEK",
  "key8": "M4cQnpFukUdVYu7q2e5YqBeDexZUxPTbWjwGrSNwkXi8RafiJMhZvhFo8EfUBNmfn3fC2Zu2nTR5q9CFAMbQ9z9",
  "key9": "5SckrR1T6TuWf76avS5WCi2fqzKwirb2fwbRhmbeCp6ka1NDNBL6TzwXyXNofsm5Hs67uXCejMk6QpNVnPncHzgU",
  "key10": "45DPt6jxpQprNE6CfH7ewAZLitqxvJiGsAuBJBzmZfuyDMqCj27YxetPFjo1TRxWZttzBC9cLuqY31o55iWqo9n",
  "key11": "CCHCerMy8skrTATPbTVN77eo33kpcTeZt43HhxptffJ3ZHCDGB5BRRBmjVR9JYqbkm1b4tACwsGnbpgsQv2amRo",
  "key12": "wCagWVHQdkFo4B9V5dna4KpPbjstztFUMijP9MYX5TmYyR6wnsKT142QXgvzUy6WsjHHMahLsqVgfmwHoYfB3nW",
  "key13": "3TEy3LLEQhVsZi1u9YTebkrsFD8egThWYCELHBMyj8K35WK8pkHJGjSYNrSfRm5iDxT2YviVcLsHdnU4s1d8MKFA",
  "key14": "5YC6EYrnViVPttmJAeuHPUM8UqWrnEpH2hzgukdS3uii2MaRBGNaxTCVvjtbrzvPZF9adK6kpfGfccmQbuAHxtjm",
  "key15": "2iTini8J1tAHVYRdVa3ttcJ2GyccRBxX5CoSEAypMmyHrPcsdRK3wCzGoxN7CBKDFVNtgvn2zdoAFREPRN6vWRUg",
  "key16": "3GAiABVzKZCXU5FW5KfiC2XBvR5Q4mtCRW9UGeiQTW3A8HgNaZFef8BGa1d75YWMqr53z2ftm6mGM7e5N5X4SiVo",
  "key17": "2kSitZgZ8Ap4WE5HgFkvxFVva1Z2ZxVCjzgbRDnCQyhkh4RmydssxGU1BRZC4pEyPJGsJQu6C8gKqXKve2BGRhFV",
  "key18": "2xiN9h2xfZtfauSjm6zECfAvCfdkytZFeZB7o2Qh9hmKi1fB2fidw1vivUuyGBf7Qi7v4mvYgwUstDivpYq7skko",
  "key19": "3ybm4UCRY8k7ya3hvyeS9pfSwpmteFjfquNtpMMQkDVnZ5r9QaR6XbB9h429ne2kjBYjdrxuEKN1dRR1zUERBX4u",
  "key20": "vNx2i8jk5rHqDiguqUkhY8du41JjY3mjWoRSgxtAz62bMBoGkMs5mvyZuZVMU5bK8iQXCGePmjM25nvEdNkkpFZ",
  "key21": "2Hjx8MZrVd2HXEomfE6N6y2QPdSzRzYQ2LbegoF67TJ2nDd22YG6bB5PYEZEXiB18wSd2G4udiHvXr1pxnvSh1By",
  "key22": "5RdaBgvQSZwzHtu737d5LyUjNkRPsXAN6B9qubXu9AZybGv3BbCbgPsR7gQpFM4ZaX9vRo3SrnYgG4ymj8y4o4ZM",
  "key23": "4oCDLbn3JNUf3cRfEnFL2x2AeCNsUVFFBKB3URMaHFqaXjZJF16Q8Q473KGqCihW5ExsGf1tZ9c1BjFJx4q8MFUb",
  "key24": "55LVRqWsdJmgb96Kz8RJZYvqn8q118KgrVLdMdT6wiAm2cFQWGws5xeSNah32maQJRiNTRAUipyAbf9io2x1Api2",
  "key25": "3oyNtC9r7BaafyamTJBUsqpqsXZmmPbNPv1K9BZt3GaQuQ1BVmskndMQB8rnghSLsuUWw1aCxjC9RPvpmo9o6nBU",
  "key26": "3onQz4QTDVnPYkwdWBEM45BmPjGQYcq2MVDwc21LzpmWtLyhyS2c2QFsvQx9hbePuwLtR946ha8smW669gn71XTD",
  "key27": "5ugkEH4ZhG9nZpiUiiWQY8qMgkyx2k1G6v7qt6NshcwHaxPoLy8eigMhwwjbHq7uWLPMpf9mfMwtCVq45sjE9HxT",
  "key28": "AjmVcJpu6aJPnvnKLAKipq8YxPTanrdxf3YdQKTT9qe462nVu5KZFS7pjijbNajWaKsPx8xax6RUa42Fdoheyo7",
  "key29": "5BxFNSK9pcpx14qXiNd6tKMwuH3nYReV8u4j9UoEKyU2jk7YeJQYwYdb5YpeRYKQSJwJvvv9RBgWV8qBNnJbAPA1",
  "key30": "4PakmV5dJCXz14pnxKSHNHuJV8JBrxsahMYLVgtHPk9fB8oGTecyDwNtzCzngpv6aGQj3EERXNNhoogUHhneJoUg",
  "key31": "3iGFZRsZ3r8DYedqLy7AdXxvgQa1rRxzpvBtAuq3MKBsVJRhDPj3JoJaG4XVdY1rqoKbhLL8QYT4NzJaujLCK6ev",
  "key32": "2e7vW2xB1Kge51umvmgaVcVDsKMcGa469c8i1LZTMPFS8Zj4dvBpcFCdixnnhwFxcchyeDFMtaDnk3VNHGjXAnZJ",
  "key33": "5xTwkJfLvNtRZLXeAWTu7jrFsHZrzkxJ56GmxACXb8imLXMczo4SYrsfAcP45EQbdVwtyZhbVNknLvz1ptjwmkE2",
  "key34": "4BJFAuoz7sdcSuLgEbBfqmvhVZb7K3drLEA8zCamdpECVGGpGaxKGLbsCnVQDYLzSyezYGj8nit9Lk5vQusSgPTG",
  "key35": "vRReZvEXfwS7E6byDGwxAqQtEHWrQmDPCygXEj2nusLfnEfApXoqKr8vaQtUpkDSDUAZoShgYpog51VsYxX9Zor",
  "key36": "5BxTbERgAkr1kPfmKqksmX4soxvKbBqEeKBd6Z48Fhx23w8L8ZaYS6P8oZd7NzFDGKhB7aRoGJmKUPreMrhLjKjz",
  "key37": "5T4Wcicetmp7XMNBPNfULqmCYLA6bMUP3aZRN8pFaTzH3pGRV2yKigGhCE3xxiiAfPPDdoxJf6PAtkHauauXKUuN",
  "key38": "2jjy2GTqPq8d2UGpbsfXJMmUcMRUDocyiFioud5RYGRTM39aFhzS5xPi4BeAPTnHSywwx2yBiLEY6JmybLAXhTDd",
  "key39": "4zgGnA7DJtmKUfrtmnDPZ19fUPnUuPpHPoYDHTXoqkdE3uaZKQN5SMeLUKoQCfKQ39eLkNSrsEShtsa9R5n8gs4P",
  "key40": "3rryFduwJaEtZfjJJh7tpRkMRrwMMyHTa81JC59jdJQZ7ieYjCFc9ExjHiLCvvXeXacHTFuAYFuCT8ghMe5hew2q",
  "key41": "3XvXAYB26QuNgrfgAGfZSKx1QJ1U4or2zpRCtAQL4a93rMVnPx5As6PsRiL2f7DhmAR5yy2eGWL9bYZoxoCxLFAf",
  "key42": "2N8x6FsaE66fqKX75bR9SipYCf1y5q6ZnnT9VAea5igjZCXAxA7ociXxqM9zK7Z2TmC7KBJgjBsDWzRJopa88NqG",
  "key43": "A6Ksz3wV5L6U6qEtUVncxU4tnjUvkTBXgsvUVwkJwpbCnUwvxznwG6Nu1ym7PfuzyTztLdA7fev4KUj5vCYBWVR",
  "key44": "49hh6JQezraCBpe8JrevqCNdsKnqWENsarT1CwzAMBKgJqLudeDqSD3A4WKQoqJ69CeKbZDhYohKZmXv61bDVYHn",
  "key45": "LTrHpQyMS28HEjwmbm3v7QnzimtmB2xqDWDSzCXRRcjVhn4XTu2z4mQmG5EXYeSNrVayzQ25tgtAX3HgiypGFsm",
  "key46": "4QjAFnMEHyeVz8uUQitKvDWiGHhu3mAk6ACdQp86sP9QV6wu8iTWVYnmqeu9rbDTy52ybXqTmtTRGp28Di1aYmG5",
  "key47": "5zKjmHn1V3C5YKKKMJkE5VUtUgqX5GahZsYRpct5vQgN6W5DXCVHLyjq4mqi896n9JxrNhULuLtrVq6nNu7GqSjq",
  "key48": "wmfPZXFr3Vgj7XXLeFaYJ7EFYaZoFJEifYpjnAgQwnTkudRpDz8v3MxudynXpCVLqTVSnGXHQJEZraeMLzkeY6n",
  "key49": "g9HKg5LxhpgiD5S8q8x9Axx9m9A5vWH1yPS5qxtyfoEWGPkxdvU2N6JTw7sskkdCdRbC5evrsRbzYBL5X66kccA"
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
