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
    "4G7afJ41G3vYEqr9t3XbtaiCrsFiixS8E5f5j3Z2HrkWFZiMgH9EVfRsgy2XrdPu5iLEQjjKWWaMFe8GDKwuZh2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YcKtdbUcZPuTvGNfizMSnhsFmK6QXh9cbfQYMV58AQt1oqG8o6g6MKDUEeSTMN81mL6My8KTqn77MKYhoYKp2N",
  "key1": "wFMYVK5BxjbX2Ag8Fp3kMAFqMEbynoctsnGRRwP1PeGcF8Md5hGqeb937WNzMzRuSeXRqGoqHkHXCqibrTjt8HV",
  "key2": "5ucQMct8AovqPRJF2m2TvzJMBi7izpDCmjZScLGZZpbTEAinurh8zQJijLtPSTvtBX7jdsyY8D1TKrP97oGcJGB8",
  "key3": "5NFmK9m4kXtQe4968DdYMrC8kMDE2An11Q9ELkuPufNz8jYzNSqTBcBHnrnX4VTaHDwbVtxRPHTkxLL7uWG21eht",
  "key4": "4emAdsenE7G1FYUJJKwFqtyZyq4YFpfXwKYEN64o5Q4icps5SLsMzJhwU3iv7gavwk9WiphdagoHNAQTjcGgmq7g",
  "key5": "gUqaK2GJuDrDBHiP3qnGSBvhxkXAXWCSbUV3BspZR3zppv1DrfvSqkyfMgyJGEaPo3i1fryeLidPVtnEYSJ1UEd",
  "key6": "5s1Wo3JKFL8nMrY6USqsFsZkrv81wcQ7j1R1w9qkT9b3Z2mQBzC9rvo2Kfx3hKTcsCvNpXkoxTVZt8ZAprcEQzwx",
  "key7": "5o5bcgHPnDmYaA9w2T6sC9i8AMNSfQHPNWe75Bzjh9yaxjTExVjoYMNe4tSDoZ9nuNzXS8oBrRmAG23K8ziZPCsG",
  "key8": "3HmiH7JswQDFsXEhhjQjtMMzvSAQnj4LuFXGGatGssgcrBJz9NFunNERSQcxYxAxkKt3T8kvfb9RYgfmbVHFMgz9",
  "key9": "twHizTkrRK2BBLiAosDFVNFQpQJKPRsKYMRQ4w1miRqf8A5pP97m5T3BiuQLN3w9ssyFwqKEtshN2MGCv3iazZS",
  "key10": "yVnobFje4WM2y9rHBtyZVym5FWaPXewWwj7382HHxf9mx5F9rCK6PtPwy5NJA9S6fgyseGttLen8qSvoZL2Qztp",
  "key11": "38Rt1q56i4azkqgXezTznAD2TmY8nrwa3m3KJZBk7V28MsBrUxwZM7yxi9RgkHA5pfvCx7VTTkBWzLjNAQRhvJSj",
  "key12": "NdWBmkYLzRSvfZu1ssfj64LxdpCurFteSeJ9YWrNg9AVnNi2kYroMSYHyyJbp8dUnvmHxrHHoF6H13WyERAhj6i",
  "key13": "4fkhU5MSPLpDtu2qhzFbW7heoXCf1ZzSrAL6LmASy6R6qg766L2rsyGpJniR5bFCbvYJxUMsC3sj3BNXAuPMbmXq",
  "key14": "2qL3CvAZ8UUctsMU5mryaz7unhTwUGBozfCoS7cNEBkRfaZRRRH5zfCbqNC9Jm3jruLNpdb6nNhR21bjmQvWU2qu",
  "key15": "36E33XiU1QhrdWynVEcVmtQMnQ4EunCKqhquxz7JWMhV1Ufy6ReBV9A8HPjEwDvEW8Mg55KFWXtCy3kjXcSysEH8",
  "key16": "5oqnCTsJXANjmgm5CDqQ7ECVfWs8LP2fMZc2dkjdPwUvRWemCogzPhrbF5LzQJG5BMfofzDvKK4ZSWpAvYUZYfH8",
  "key17": "5J9Lm5BPXQCPJNrpZKpPimxK4Y1DZUAPpJbBuQze9ZrwyNDUUEdRfQN5QLcDbeqcNy74EwrRAAPAhgLJBgwGLZ1b",
  "key18": "3gcuU6J2ezQoTC8ip9T1XKDRahxnKrWYgAA2vJRvBfLmn5Tcagaz43SKKurV8d5GVTc2WeUdS7dnLhiZuzDmnNzW",
  "key19": "4mVSfjBohdKjKyuLHvQbsxwbDxE5z5g16PktxjM2rjpZgKtvPGZWi9ViWNsBj3qgoHCdHpq8YXXTErCo5XgxkMKj",
  "key20": "dVypY7g3VxUqL14EBkt8rEithWRqa59WYsvw176Uj84HPdzW3H2mcppUuSY3yJ7RmmvTU2GsVxM6LuMe8uSZHpB",
  "key21": "v6YwAZtyfDkuy2fRKUB6SDRnqWSjZabJowL3539zACRT2w1P8uhFfwcGXVzsurTSXT7Cr2LFwcib1qFmD3XQMhY",
  "key22": "64xEjVejsqB5YjJe96mEuFN8F1yQHAA1bWLL4YwC1vGnLBYx1TeBwxPysFZ4MJGfUyuA2qnySuDwtv2SPdFnozE3",
  "key23": "3dYbE2X2eJkwdGV8aMGSduY131qWoxYKBX4ZP9Eu14AqgBA3JB6KM9TbPZKDVn4eTd2qgSRHqBE5pHYbHcGKyri2",
  "key24": "595Gzfzf9cy5GViYkBmGxmnJgN5YqJWZqiJVDwbxzMsYdaMKoHdYn9dC97KvYh7Finc4YEhv2qJUbMDQXZy5A8XU",
  "key25": "HAAPcN8BfSqWsWYhoZ21kwwYa4ZxB82NuX2wDTPPgZgm2GTkwTXUdYLPE3PhNP16BB59ve7vtqNDJvXRq1ikG26",
  "key26": "5niNXFfYgqri262axTuxojWBoWBBDxB1nuzF8wM1ZmeS766bNrDCCJjnfiufCWrgpRCU8pfXa3J9AcsKP6ctTyZC",
  "key27": "4RWNu6oHj3VmaQyVnDM93R7d1eRU2qZTYbMTypkcZU4wnrwLAdQXoWXm97RKxYtV7FYthHEpUdf4oHuHi4qv8FUG",
  "key28": "376JSJ1JMYPivYYXNYwZcgEEmRy7wQWMRRw19CdKgnSfYHLCqCjbKwFXx3rB5sKZyMDe6vdbSMnYUzXmeQkgVk2H",
  "key29": "5dMhNkau9dV6PFvM43D8GV1RaWCVeoHTpKEPVsthdg7dtwrc6fgEF5P8aKV2j1dCRXDMrv8eG6VeJb7FMgjHYn1S",
  "key30": "YS7YruwwV2fsNXg9UwtCEbsxu3MjAzKHQugPWVr1Z4191by41Autur1jYrjquo4N7RcRY11yQVp2d4KPoyjmweJ",
  "key31": "wet8oFwTrefyoQB8snwJgef4CswJ3HFjGqQLwgBgf92bsouv2duCSDwob5WBER7MjygyGSetZsccHXDfB36gScx",
  "key32": "T3UY7Mm1zCuhuUKZnhRwnYvGynnpzwKb4QUhd1hrWo61FWdoghTmop7ZBgKhvqqmjDaLafr14naUiddGS2L3Xfy"
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
