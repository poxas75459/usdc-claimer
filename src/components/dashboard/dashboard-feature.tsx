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
    "3cpDxwvzof3syQPCuGTiipuWJkorNwpyy9wDDWzprgkDh3rw6p61u6R2g4Jn1fCbTSjrYh9rw5xENJgBSPfpEzsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ai6QXBvHXds5FNSjxsv42yGno1PNcWLKvQRe2CGMHLVtMMcHMJHUoYfL2FRAdXMjxHVjNHZQA3dinNBBpf4fAMX",
  "key1": "3HGnLyUWDjv8pLhG5bTD3KwNZusdQGJ3YgUx1tuVVMeUgAJsZ9ucRgoZ9HJFjw5yVBa9qAQzr9MbrugCpdUeeT5L",
  "key2": "5KGUpEsuyTAmXz1p9HNweESgPVp382JYur23xBwetsFLgX6Y1TKhvDh2JdttGJyyJFo13cRSfxziN5QuRzbR273X",
  "key3": "3TaNXycH5gu56qbEwmkXadE1i166GvWH6q2DwJBTEsA9R3KvUtj76BZEw5TUJ8VR6fqioEwUgW5pDsxWNWCh26Ue",
  "key4": "63xKhB12wLP9vPrrRPsRJu5QwrD68t1YUCS7NGZiVVSYmtfEd2EV8EMPWKyepGVHVLQ6y26YLkKBRgbtg4fd1mLi",
  "key5": "4qAdWy1K2tqSoAD3sruBg58v3RSFnCKAgKYiLCiyJM8nRdYmbcDuB8DN1RokHcxStmMEAuq52Nybq8BaN7Gx6whj",
  "key6": "23Hrehxrx2vCg9od8Sbh5ZbWmS4SPBUsJLXqZriwU4owMftwntWu2gNEpxd1JhGmCEXHvakc7BDu286uad5i8dnK",
  "key7": "5zkCvcpsXapkNg8FMZ6wdWzXybwNRP3pju2KqdTfz4RvHFh7n67KDFJsXv7JfNw1SHSC42gaFs5AxhYvrF32GLfm",
  "key8": "4p2HuN9goXmZtV8YGRSNz1bQ67YYxR38zcRV4CZe6euUuPuYJCHVUHHj9J17iV5pByrTHrQBdYpktrjZikyKkid2",
  "key9": "3r5BWoGgxAGFhg2gG5keYt4PbuA4P829yp18LuD2qNYxcp6QSV3xRPQA7tGP7JjTR79ttvur6dJ4v2Z2HLj87c5K",
  "key10": "42ZGzcdmDqB58pqvp5Yn37L5AJmXr4zZWUZsvYbNXtekpYD1NgzsNYb846PkQxvSoHnmok8yAFDbyhTACv1hC5va",
  "key11": "2WQfU6L9PkczYeZC6yxUr7EZe5T1nt2F1r4UJQmokeF2q7BpzENHzofmajWLPxmMNTuprhW3Wg4HoCqvnua1YxPh",
  "key12": "4qT2b5wDZBdPZB34Tar9LFuzKs4NKSqbjpykUsbK8BBvau6Pz5USkCGsNaF83QNhwkLwX7s2E6U3a7SMk6uGVDcA",
  "key13": "AGSbpkMeVMYLtX49zgsJZFxt14nVe22ZL39mBDfGYyjwvcgxSnWbz3oBYodbcAEHyUnRGHD2m2FBrHs6cQYQLAA",
  "key14": "5bWWYgRti3enpvD7GyjayiFTU5Gz2uidEceKyHTrg2pbY8UQmEh56VDYWv3SUk5rzHpgp2dWEtV1GXSwbo29tb1f",
  "key15": "4XmioKUd6qTmYqLHVWWwrfhUE7PJoNRerqciELHJU36GNd9KEUEQKNfr5c68EU2kL34rcRE84SW8ioW17QZTqLtk",
  "key16": "4CB8mrERBXxSWfFmYcPmrRLu6jK7W3EDotnbUkCS4hLVns4ka3qbvWENtLUoQHEG6vp8WUQ6bZBCoofW6EU2SZmf",
  "key17": "2stU7i1FeRdro9qk9A3LDbMPPmJx5bocyvufLmonzkkzbRMQwgg4PX352Ngb5ysZrGNB9sQ6dN6ezqp6FfyVTF3m",
  "key18": "39FmtzBiwvXTc5Q7axT99LU3aS79gXF4DNewkxio7aqGUNJKi25zsyWEGvYA2UAuz55mowPkBYuXthufNnC9aS9L",
  "key19": "5TsGdnunzbkEuKDU5cTJdzuNUVbf26V38sPTcA75qwnUx3zCwskDpDGhDGdkkMw67D3ETLdJF5xHVYTxtqCVpoUo",
  "key20": "tKE24TqiN6NMt4ya5en4hiJsTAP4zir7CbQcQftu8HuXT4ALe5KZfZhMiW924vSw2QRLPaJX19RbvbT5kZ6Q5XY",
  "key21": "4DXZ1BQ5W16m81ne9Cy3sW9FthKdc3kd37YM5Hdr1fFYLT5i51SkZJsamYmXG8VZ2J5V7LRFPZGicd29iWjEoZ8e",
  "key22": "5TVXbNsSGiC1dh2o462t1guMqTa2fvBHfiqYii2ZaVcFoA6p5GxYEPqNBYKcvi89b9aNFk5ekSeCRk3rB7eWyKkt",
  "key23": "4FN9psW1kR1iYjvfMU3vTw4jz9D2f6pLqkCxeXX599hLgg7o99WmzPKbmmV8vGcen11E2EoBQ2hjRgQY3T9thFv2",
  "key24": "5Aoq63huVgm5B6XxZEuaijjpWj3FzQd7kzsn7qL3TjZsor5QxTYMZsciCvYrGUm9YoGqTkd5mm2rxNN1AACTPbCo",
  "key25": "3fLvGSx691g59Trrh6xSEukKjfFWcictSr5jKpoGVsmxeGsNd5xErNKZaWpzuyzvGLX9PqjVg6VbZPtgV7rnN8CC",
  "key26": "2dZWF9Xztpb91zCSJ1MqdA2YM5dCmDtzjNx8U2QRnD9kQH1oMfC2wZH5QpucDCPtLgXVdyGDVafpfNiieLG2a921",
  "key27": "xKo71FKVUJUk9HJs6E93XN7Q7nYHkxMn3QQSKdNc8nydfSSKYsp1UjPFTRAr7e1eSn6zYAF3KCqt9wsG2AtmkPU",
  "key28": "5K2TaxrkHaTRvGLYchC3WcJUGLBt5LuxYLvJoaAjKoJJgi2j8zxBkXTuGE5KfaXfzAnUzy7LNhGkr5ymqSYZa3GW",
  "key29": "5gNGXeiEmxqwwcW7dmEWn1uZAUfhujqNf5UeDv9tN8VdkprJ7K7y8YPUM74dxD6JTTJAruEGtZFqKer1FLxaEemV",
  "key30": "4T36UuoPf1otRhw4tdwQdhvGw7CWVjsmogCyrebPQRJNKwEqVJJuYaMciZjYpr2ErrPPv3oMZ19d11rvFt66PzKi",
  "key31": "4W51V9syVyQFv5cQfQ7J2oysZFRieV5bqruxobR7PJtvb4hAxhgn6j5mDnbFYS1VmUgZMHxrS6eQ3D2mAZU4uZb6",
  "key32": "8M5m4pfJACQuxiYg8qogh7P3HJT2m73nFetqHhTRdgsK1CkqeVcW8CCAj6mgiBRpgS6kBiX67ZZurgUaaPZVinC",
  "key33": "4KxmNMuq7fg1HroY5hvLGwezS6XXrpVhJa4oBJCiYfyPdQ9UpeRjTcy7kmHx4oTfZoeyKSYy92785boGgirtAK9C",
  "key34": "32Gr6vtUuLkJ5hJXn91kB96adznXrgtCNAfnWBsRfnGvosT883KbzZnSPGe83tih3XvzVe4m89Jazatj1yUsDnXG",
  "key35": "Xt4i8pswh2wBr4famN1P9sHtMZ7UUP79i5EFZB9FM2nysabkyMyW5Pbj7BCrT844cyothZfafT16W7Abu2Cpsu5",
  "key36": "5UDdnvS57qjrNQ8zmH6Qxz43rQFLn5RCuNtXyfjNHHiQDJQAEENYNvEUhb9fHn1JWm2s7eCpnR6hcnHikG2PCwhp",
  "key37": "3FR4zkvJ2Qcxt3f3oQ6pWqgiYF1TKSncRpB4RfEUtnUKiYjZjYEjDXLWFtsc1ztoKjxGsaCArgv3UVEvahViS2tp",
  "key38": "2YG7KpoHduHc2ug5QkkczV8fdf4ER1WwDk7ZEdzhXpqJn8q1WDnxEiYyV8sas14XV6MPwJmu4XBrtBqcBxjPUhz",
  "key39": "r8whpa6yKZKp243owVzj8cgZLQ2SNq9ARWGFFzocnbHK37uoxZcYbk9uU9DbWrf2dmQZcnYV8aZVX1J149j8dBG",
  "key40": "2a8cBHEu98ga98uVm9iG43hhsUuEhMt88azt9Xm8amwCxWHfDDL8niTCbYToLtKoFyyNsEBja4kCkvcaNCqPu5JZ",
  "key41": "41o1dqRqjvQW3KAhzfZkh7DoG9jW8QEAAwbxzkmYhktxz1eF81UNwrvutSCrpVGUGTRkuwEv1PzxUbxye1o6TSzJ",
  "key42": "2nKoRa2mgGBhSxgaGs22RrAnBi8pMuPaXqUbyBPX1fjfL9yeLAzaqnS9terkSmWNUJjxxEpKHP3BEffdGxajnKko",
  "key43": "2JBdC1ePZCiL7Jynxj2RcmgqSK43tHxE5Bdwq9xgkunvHYbtHfmN8BU7YTeRPy29g28kdAnH9F8ARQCCgVvKeK1y",
  "key44": "rJ9NwduWXaHbZPsbgzZrHS7m4jkJ7ezyF3Ya7C9uWkDi79Zkps5JojFKwESpdUojjsXMocAJeT4zg8nCgGoYapw",
  "key45": "128uv3SDGAk62KynMmNRX4fd5PZvRMKXLHHHKyUoLdKEsGLrjrySheFaiTVxxWVFST1CupoyUZycP4XKwdphvn85",
  "key46": "28rFArJSqExqqwFnc1xtKfwVT3cZtjtGSc7NF1im5Nr7DGfkWoX2axQLJiCvCmeFzKh5s9tq8hzH8fV4Nbto8jji"
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
