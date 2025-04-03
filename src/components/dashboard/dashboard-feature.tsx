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
    "4pZ2ZsRBxmdU8KGrXa8j1QowcprMKWDbwm2x694218a7yr3eXjGHoSg8ukHm2sPV3nXr98D9Exk3cK5dXTkMTq6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hPGbxrZ4jHwWiMkePE9zPxxJovc4ZyqfBUL9iTxTFjpb7gxX388hn7hqLY4fzBXN1PxE3khMVh4Xbx2qjUmZ99P",
  "key1": "aRCWCrway8DTmNGzsAnS2A1mzp9fnz3TFSxmnr7gidGxx5rodF4VCTeKZweZQJwuErMaGqfCbGjSr1iNMdxVo67",
  "key2": "5nS4geNRx68dAq4LKyovxdtMqJzZQLj3SXRpYPVwhNt6mQveS9FnHSLVYXRQzZ5wrYrjJUCaxYXNRQApNciX8cLN",
  "key3": "2hcMYyW7GL4hse2Mr8yTvH2WVr1LCT6EjgLpKKZSP9W2EakEmBtzSUXozkDLdC9zpxZUpTxjLqWpmDcMTKdWhwvf",
  "key4": "2PLXgmWXxecF5PqumqaTqbgr7nn4QD2fyTqvUHN8enchnzS8rEWWQcN8r6dFTAykGDt13GmZsEm5phP4QLSk5QfC",
  "key5": "3NxfqB2wERAo88Zy9tVR3f4o7SqRRt49qcWzuA6pKjZVWBAgjJev7UoRiRKqJKgsT7TRzuxPjeiAREUtLzKzMkrT",
  "key6": "28jCRx1TRjwRUfQkk3fqbXv9u69F7jhYwnbUghZrMWwt4xs7F8rV5VyRP4Ym8U5f47xgVngw5JjQBbbk48FSit3Z",
  "key7": "HSzf1U23dvpu4rmaQUpTR6ncxVdFPKm8aar5rFTHvw4jPo4q86LKqENdPjNoC7BS85LZw4tJ93PV8jRMBTFXMAK",
  "key8": "4Y2fPPBj53p8gGu6cb6A6iXiRexjPFbqzNQqZXthzHVmYnCJCtxk1NsZhbu7Coj1LjB7BceAuL7UXLA8nSrKcAQh",
  "key9": "5juvpbBqgf9em6iiNnJAboDYktzjoau6X7WZbP2DThRu5ycXidqFpBKSNuA2Q3jacuQRXkqBgsXWXRQLYZPkhnBa",
  "key10": "4fmJrDDqvrevjUW1sA2rBhCtpTEH3gF8LwWQC7mjxs2ak4iTTTFjVcc94U4Yxhj6yEbpBeNy5od2NgW5YbrABhkn",
  "key11": "NpQovRcxH5wW5Cd7dkqnoE42HgB93JJQEFutZgy8UkhinWEFhr78fp37jYS9RB2qfJf7wEQKFu1BnCYXTqJ82ZU",
  "key12": "5DBrbMrPymvYNyiCUeuF6AmFKXK4yjmA7S3jjWiVogxmnPPWZnkRuCjZ5jWEoYY3DrR78UDTDKn9PgWEFi2nXwfa",
  "key13": "47m2TNT1SCQxcqUBoSiJHT1ky78NzDRHSFMx9UG2jwcCARNdfhj8NeTUGZvu5XVGre49ZpCYqQiej33NwS93YqGY",
  "key14": "5oV9g69BfD5aEkNDR5UVZSTUj41u2qc37BS8Wmstho2QEFYi5CJXE5vUGRUBBCM62qjrX4HYMASqaEYdG64urtD6",
  "key15": "4LagYc8BD1pAb6j2pr9WguA1iaxyRazwMps1MucMQZKt4odk61fdRw2NxefoEces1TgRfpxJr61TD9p68qwB1uH1",
  "key16": "2n5SCYXU7vrgRBkBFtBXiwDqSsvjSNxGnp57jncB6azJYHTACHTZwkBtTwVpWFxgKQus64UmTMrixawVEonxJaNE",
  "key17": "5nwkhFKskDonq1t39JebX21kv4P6isDFCof4gv24gCanTDcUiBimLtVGHFf85zHBJzuXjuAxKLkqBnS7fA4BWM1z",
  "key18": "3Ka2DKMudTgoSZ1DWTCTFzB1FpQWm3oan3pxAdg43fHzsAuBtbcpgL9jXkXDxX3AJkhr6AbbLPP3jmCDemYsNdV",
  "key19": "5SEbpPwu1bxTjRPEY2ZjsdPMas8AnPhtSfWvMcDAAtDBoXgfzMhdsYU8bgsdVMB14DJ2ABJp6YsQEvn2UgBzgdSe",
  "key20": "55FN4pU5qL7SsyKK9p5MfjGRf9TyTGcxZCsjSri3jZb6uUUzbVL2W8AoR5rLNByY8p6zgfJJjirxv9WvP6vmmv8p",
  "key21": "5AqYYLM6nRzbeWS6DHk5MkRDugMsFUx4guDYF96nJdwqXZ2CVrfhYWP2CJDXDRrwapaofLj24wmuVMHnWhDB4v8F",
  "key22": "3Ayap9K2FfsZacskYWLmNcTC8srmvpBQvushS3UMJLWcnioeB8AscRAyBsecL1BtyKLr2zoU4ZUQohtM6KSnGMS1",
  "key23": "2kfbrRbuHMxBbw86RuKrqSyYNwhx4ppsCQdpWXX6AwHXZNAMsHUd9C1s1JhGcoX3vPkCHeSDdN5nizVmpM4v6xni",
  "key24": "2HLa18DECrQkeqCP3oz4WHKow5WHDpwdDXpKYPCVRGsDRxD67w6U2gADgasTqLcV7NzxUJy89uK51nHFZpt1JHHm",
  "key25": "63qnj5SJwXatUFunt8LXNJTr58ZuoSMGgYAyMTeF9tWSnJ2Y9KqsSmT6heGimyR1mN2kkKhbhBcQVVeRe5k4fCGz",
  "key26": "5JpaRZfdHvz9eL1xRENKdWLaXwaxBZXPNQLutHoWTVfDxR5pRLjiUXBXWJ2YPMnjw76s6FnBZ5KX8qeZLE8Swj5t",
  "key27": "49yc1J6FVnn3uthqfMqkR2qNSmrfsE6cEUq9LJRUZ7qZkHinCWjPwrCFoVRMZrriZPYMXBXsfui6654zBa6SoQgh",
  "key28": "4kwyjruxsg8AsEw7NNEmZnNe9TkgLzhTmCQ2zxoyrSZr5PywNy6ZuUdVvDcRtrrR8UMEGK4Mj9DpN667oqooescz",
  "key29": "3djnksdRYThETKqRCREF9YuzdQQKLZUyz6EcHivk62z2o2FW4vVPsq4qw1jCJ7gWYLoQAm5QMDkZ7x9eXpNcYBEB",
  "key30": "3sQsgST5mGPYsLzPFWnzG47tYYqNd8KwGDz8Z9oaXVxTnVsDsbKXpjsgA6Nw9aMMvPrnsVbPDYhTRZxpVxy4xEQq",
  "key31": "32rTRMHdmefJ9QQdE4Zk7MCdNxDVDpygEgrnkJBeiGs3icABmdMudCNut75npgdiUGAKo7N9syaHxos3ZxxZJkXG",
  "key32": "5DA9ZX48RN4hrXJkegn4W6rqjVuU9h1KGeEZEkavJjV4TMK3RsZAhy9wzw6QAq7fwzj6JEWXAptnhUmJ5BAuTz3M",
  "key33": "5snRW7sUJPyYu8xSzggoUyyxzTpiTjgaVN51dwHNH4VmneVPHXfnQKXU1LzyN33duFmAExQ8xqrNf7tc3J45wTXe",
  "key34": "4ZACHLj5VJQGZDw4cvabDyJm3JHoyaEDnHVm5wFmGk9BDxMVMiZNnyatZB73JY2kroPXyKQ2bw49yQZrpamXRcgs",
  "key35": "3ewfnvDswpq5DvtAAqMZCGFYeMUGaNArsY8PXDN3bHfbDQySPi8ytYoQdwb3BLf8iEv4z6jfWEprYS2XjhkLWWud",
  "key36": "4Nq6k6wdN5jfBi61DFuBNWua8deJEtKGQRDezXKxGyDQdesPDmCg1RcykuGLrrqy9u3DpjhkKGAD41fBEAo8oJxC",
  "key37": "3DGwPSdyXcXtrG1QDea8Kua88ZrHer7GH8iLVCXSv44qe8AZZ3wkxCynaqRd79j5vr4tEFnNqKe69pdAYP6ahKwU",
  "key38": "3AUme2HT3GB8bRRY4dzmt527npRrVebuKdwGmANA9UvkHeJbjbw9ZsakTtFLXN7RfyNqV5no7xQKLNPnCAmTWPwX",
  "key39": "2uYNaEqx9bFnFeuyWe5vratxdn2CETwG5wfdm9MGWeGeTZNL9QpvcvLX3kiHRHRvu4RvyFetfKTBPQ2QEPRB4UPw"
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
