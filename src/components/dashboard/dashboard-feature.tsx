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
    "3FPcFwme1LEgGDdwxZbhUHGnDJxjMV9E85jcEPRsDvUQAjGjpv7wMWo1kyvEGRg6A3jC5U8aoZL3Z2rCBnQF919z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "392UqvmpA945KirWZsUotJhwGqfZXcD2FbDzpUktSeMSNVt9k28hMV2tXYNRYkfNKN6XxGFR5LAJ4do5vxLpnN5H",
  "key1": "2GtXNokL1zoBQiojuixXQ1i6ahVcK334C4v1APaohsRX5kZsxko8RDPAN7odR8SuYZ4y2AqPzXaaq6Td56G636wP",
  "key2": "2LhRyQRzcwGdEp4MVF4kV9FKq87woLcLKPShDLMp6kkRaBkbufZ5opc83UDtf2HaNgtPfzw3kv87DYG3Hc3KmzB7",
  "key3": "5vfJYxGLRTT9UdJEsQH3BLzkHndeATdHhQUYwSigu84BtnNNs3XGRRcSGBXJuYYgwhGu2JJAutopRh1DMSJY4x2s",
  "key4": "RB7wdVYQUxYBjHMWtmdBq7cS7nmBnLBw2obEfh71HnuxZeTupUU42u7eGLP9x54aF2en1xgKjuvBNNSqW1QESGv",
  "key5": "4ryRKcRpySNfdR3p7GRbZfASYw8VGMWaywDCekib88ofABRjVtXvnUzopYned9tzMwwH4pUX8DGYjPQVGpYPvCq7",
  "key6": "2GbGCyNRwefg9iqokLYMgdxyu7WdGj8mDGVoqz7FHBv1fKGoJHdJhNitk84ihjXBbwGBZpm1U2DA15jWTXVAybRX",
  "key7": "2NGpRr79DA9mhbVCFemARooRFxQGWdprpFFMzy7Zsye988g9zWeEY8gXBHxN3XVFsUWx8pWCrAUGj7a59BZGfYcx",
  "key8": "2bd3n155A3zBELUUdBMpQr48ueZ74TamBPHTQjv9UrNskFn9scRC28RUcqrgqUeyMELZ8SdKkE4bXVnru2niWesN",
  "key9": "4uYudK74J827wbs19KUx3hohxDugRFVsiHjjdotTxKbbk8WdvDBdUob6QYRjbxATeD86X3cGZ8tnem7Zdiqwkqmc",
  "key10": "2nRZ4KJLJDiKTXSQqKBGZr8nSSgVJU1XsT8CkAjHcphwCpU1GScUHqEQmD3PYcvUucqwDyEJSpDCwP3CjafvDr7z",
  "key11": "41XTFJBf4PSRfi1xPrhQHSsBibXPMDsyHoysjg4RghexCnWmg2oC2t6cNKqRcvycoyPsQhAP2ZbYQvQKCFhuCNB7",
  "key12": "3YoLW3943eP8NJoZf9PLo1aDyetpWpmeayHuKTuc3JTfp3qBD1N9PaJn6YmySaKvfARZj8ZFzhDC54Z72NyjMGcx",
  "key13": "4BTjH2Z4Ejtcx4XndrhUQLV8iZj7VXxwtnZzWkGBGNqYndYnnoszMMoPAKiFh4pZxPfqwvwsvk1mLfHABEDSaU1v",
  "key14": "3khrFYXGhXeRXEUc2mSVwjESD5qwCbHVwntEYiGC3zUka1mjWRWJhDzbAbhFVywhxsv9LGs78BC2YckpDEQyUuzz",
  "key15": "U26QAvMmDJJnMQdGK33QikGB8gmFaAdfX2nk3CYfCGsEskbXNqUSTNMNxj5qSCurMfqaixnv24MyHDi3DPYTb44",
  "key16": "66G7jWx82tsiNzTxX8TuU4bRzU1YwD6ATb354EWmgu7HKsue3Rg6oWi9gpkDtHpw8RiNCzf6dqMo3vC2bJTYQ54j",
  "key17": "cDtkPMxu6zBb2QkXYFiM65fAQv7wJ8cSYFug5GUever5GbdCxMr3kREtf49H6cB21AUZniRpuQjJFTH3rBSZLUS",
  "key18": "Jg4J2AA83NFTiUhn4QgV28gxZzJVor4SybHbiSKmCYHmLrk4g9BDs8kwYo8eaYbGwdzKvQ5puFnzEg2crAWaGV1",
  "key19": "3nBhjCy2paqp2fy9uKuYCKraKn6mc2sPmkUaUt54wkf23UEhSP9ozMNbAot9WpSQig7Rjo3E3MtKkYid5uXQvjNS",
  "key20": "G5d6JzC12jvtaCVQksrEB5rWyxGoig4oVyVp1eFVQmyWmRi73Vk1e4FmpqECkkgMkojsZZLeaarPuAXkQoGzzjo",
  "key21": "4EcX9gLTJQ4s5fQNNW1yTk5k9PzQovVzpEAGaafDQchrSHm3bxqmKKpjk43mrxZ2D4AJ9PNRMaHVX8zYXNbDQiAk",
  "key22": "wdsEQYBLCeoo65aiUdYSbU6CiS2V4RJ4JJU7RD5n6DzrMiw87kjHBr7i2GCM2rQN5YFWpk6oSiVvyoMbfiLxeon",
  "key23": "3WQ8aue4zn9bnqxiC3jb4fJTBkVADqKUuGvYSQ1gGRVtL5kDqa2xrxRDuLG128zo1X6iNaBNoiBcS6Pts76wASP2",
  "key24": "4mXFxpBFdNujKv1QP4sLwiZ3sfYy1S9y2tNQDhNJJ5sofziPfTyp48jxgwg1KRwuuwZXBwdpvLUuXv5rs55L8Dfz",
  "key25": "5DifjpSNcXZBCQw1hcr4bPmcnnCum3jMgkeduPUfbrRgzDPRkyV2ABZewSHUfLrC1fz6NbBSxRX9ZvgBs81sCWn6",
  "key26": "39B75N7wu3tFc7mn4espwoXkkfg23VZ1U3thUrXo6TKyjpJ3y2E37ewbSxsp7U9koZrG56G51zybUuGwe7JW41X4",
  "key27": "59iM79gRzuJaS52RRj13hvynx4rkSYsKZiZ4Lckn5EqNzyV8rGGx3bMJxpWMH25azr1FrgT8jGow6P4yZtyQ3Bug",
  "key28": "4D1Hj2FPmGLNQRWAJ2iC2FkadpTrU1Dn1WC1wiutrQEZ5kpKhKs3MWVy5W4HxJ99EYBAoMABDhHhB845CafqQrdp",
  "key29": "51hM8nTvprrDZiYQU2dq29aKDpxC2VhBXE286pxVrnvmqAbtgpdwrHebcmecnEtVBZtqtKF9b4yEwaWVZbK2m4St",
  "key30": "BVgzbQEvuPMv5djmtEaAAkjjQHGgGuv5SmbQinvEKi6XX6aczVqBXbmPcWmegs76pehvH99Xy8VCHw4APncKqJc",
  "key31": "AMHEixmXTb45ksX37mN5NwnfAd8hoBrVj9JfLJYn2cureAcrSBdyVS3heRAfUb8KmP9FAeMLN2jucRbKky33dth",
  "key32": "4p2XgR37KC5CddtGKgP2qbAedQhm7SuXwDyZab9jCPwfTPU1osb8tqqM9BqcsTL38aRSZ1YN6WEGMP4Gri1c7K4r",
  "key33": "4FrmGkj9StnUf81fQz95Gg6eGaxFSx7CdPBRWAqvXYwT8xXVzmYAocMrkf8GAEz3fLs1PjoxgQqEXtxSAk8ubvQP",
  "key34": "54ig8P2is15FyBaszznqfn1Pi16HCNpqhKm7jMU3r7Nc3kPonDFQdCbpdtQVMtY5T2FLoCNVjsCqg14ofG2iFJ2y",
  "key35": "59UDDayhQSwTiyL1vVfRBUgjT2Qx2WjWvn8dcjnPaXw1aiCP3SELAkSjemQKJzSuz51hJGsoFJFfWeS8vwJ7Ytab"
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
