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
    "5B2XxvSGfdR2KmfXPxKxmpTKiCqWjJLwJinuQEBMVqZRyhRXsTpVSzScZ1mxCyXS2hrJSVt6979SsTNW2zVaDS6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiKZ89DaQpk9Pq5VqbdoKNQHdUiDPURDs7amHi2UjS6gGZjayJUqLBeb7EGZPT2dqXeQR3RoUUcyrPofM3kpfbQ",
  "key1": "5oomp3HvKcv4aqhLodJdjeLHwJrZGzGJj5id2AAWjSXf495qzz9uvAvDjHjoLVsv5wBhScYP6kuA92WvWbPK62i4",
  "key2": "27n7GwG7S8EEoZzXoFHN7ELW8gtF53fd7uXWsMhkMerHSvXsvRoqztHo5VuiMXK1ypT9cAhvC3dTK7MCv4QyE689",
  "key3": "3zzVCCMw9HbDTZMbgwnrBDQUUjeHGMEkBe9Rbg7sNiatdmqYMgBXiPpH2gMPsKYiT23B6TULjDRFytMMKQF9Z2ti",
  "key4": "3n4rwxUuXVY3ZKbdDXmJPc4RjqnzX9CGgFQDGKoHNbk2QHGkwPMCpbE8FHnQzFrtjVPrF9ZLLCAXEVioD2AgNGGT",
  "key5": "2mZ4a3fWVYEsE4KzuRiyzMqzKY3a7Azqa1z5YBbyX9iUD5253zVafpQu22gL6FRHnzCUj7kF7Hr6C93jwW6xvfso",
  "key6": "4oBEWkS2L29mdHsDxH8L4buSxyF2QDH4Numkm3JrubfzC6qp6dsg61C16xivQehDMBkwGNzcFfJn8sakURfstD2j",
  "key7": "2D6dARgtXwKjmB642bCwTnuLX1pkPomkmjTSTRf8WDaFE76mjEStYojyN5ayRL48RQgNKw3ac44hFXo4ZRMZQRqG",
  "key8": "Z2LUNGRWs5GfNDxmhRVhQQSzcm1gX7PdFpqPggqEncwg2e9rDdb1oexHGBahxHn9PpckbCijG5UmD2NR5qbzBER",
  "key9": "25ZM6mBWhgB9sMY4aDfFA37nCYg7pEEavxBAufrip4wWH1Q321mpBwxxTmBJifnJvK7ssd2EJd5oYqJMpsKsXv1D",
  "key10": "2qdFe8gKmPJXX3c36cKQTxMDUxxGtoKEgTbwA5ysyqcL2miSA5vsFDmHLL6abXHwQMFjET3zGPpKM4Bjsth1Gvjz",
  "key11": "212QQLGDNbdRrdtTer3Vy65EmPtWFgArhrqhC7gk8DMeT7srhaM8PrebF1Rb1RjinPoW3b3irezDJKEXjuazSs9s",
  "key12": "KvFP3m4xis4dbzuSWMBcCLwdSgTb7SCCK7YKF2Ri5Pfo4Ka7usiBmidyysCXa5zW9j5vMoXYoKKvvxc3fn4jT4N",
  "key13": "2fBb5rRpWTaELWQjLcV4EWFtdww3bhJVgyagEKr1ZjQSYBysX5btjm7bdLQpSg6CK2Xr6AjJuQbJb5TRmDy2HcVd",
  "key14": "34Njbh1PwxctCtjh7XLXc3uiUPS7TZb3rfHvwCTQj1PMicbx7vLedx7io8SQM2EWHNuU3joZYAmAYeihRoVf4Bpq",
  "key15": "3BGbnZxg6ry9CMpLkQdUS5o29yCQQFRpeQj2S4qPwrKmkMqxrDyXSPtQLaLJwAPbUvt1VmtLuzqL633n2US67M6u",
  "key16": "2CxhXdwV9rrmnSCRRkHDzobeJPj8EQDaNeMUzReh5C1Jk2JC97dFGHxFAgJWuyUFj2jVFzqPQ4ELjM1p7AVw9y6c",
  "key17": "P5pLBMoamKgCiWFWTGYKLduqEia5NfxhEpChMVYmbhykxspeAejHKiyvtUmAzWGmJEUBUFEdcKjyj8nkAkNEjtw",
  "key18": "5QYEtGkp7h78kSfeNVe5EHutTPYb9LsS9Rgihj7KYwY9Y38jkxcGxd3X9rSU33RPj8U54jPkx2Z8ZYDYzeKrgL4S",
  "key19": "35DA4ntDwVtRDmipBpfRcv8jbwoLW6eiyTAsvNtJGJ9jFCnTuJzg2ojozqWBmYPrnnTxuU5qktmHUVWTz1YtDT7S",
  "key20": "3sZx7is5Prv5W15sfjL14Aigw7V5vB9aPW7zXFfFg1Y9f5HUCknESea2UbgkcAUc93CxG8WUPyjZXrUaj9qL7Dbv",
  "key21": "4TneTez851oj4doWND87MEAW6r5xVWeUHG3TnLLUuhmhuWXA9oCkqA1zkm3heMfckFC5GoEWf5sWC5jyxYrUSJRX",
  "key22": "5XCi5bmtJHEuphfS4a4cduH9jfdK7tMqqsf4f31dJGfgqvVNg8rT26zU35TXc9RUpkzijWQCWvmPcvNQGPJnitGP",
  "key23": "4WzwdYgjJqa7dynassDTnQA9DMXw2RLJcwoSJmMWsSuqTSsFrf3aBtxmAbettFn6jtbF73zo6XfRp59SdgjpqSQj",
  "key24": "34PPh1b2rdyYsWaw7MXpXmNf5R72L6WUemBvVgNyvNsG5jA3HE3NJM2RaVSp9kxm84nymeFYPQ9HRVQ7JKCLtiZ2",
  "key25": "eCPVb5tygzDfn9oqoymqu39noqR23SCHrrx1XjBXsrbSnwiPL28z2HnCELCAJ119nawXt4BqHFb2GHmeM7RFqMN",
  "key26": "3qD2Jpoqmz4sGSLc94m2hnDXDpEqTzsqqa5T7ezgQ7i7DoFsrwaBHnqxCYZVibek26tP7rA14iQ3H3XxAsCQQdzB",
  "key27": "4aoWCmjRnvsGARuQtfJujqruxfLHoLWbstyR87BWE6h2VU8ddDENKssQNutfrsZJmhhfqzHPRpLK5AuqRyKktJjP",
  "key28": "25eamkFyZXUiQZeNwc9d9cvzPqy29MBCxDvuM49WUsBz7z4i7zLPBVm1XkN2iptS5WUxYv3guYByaSL9S41xSXkJ",
  "key29": "3C88SL1GwmgBzULDc7Yt5Fc2bdUgs9FfJtTTE1x7ZY1wfVJkX2xJ1R8JskUXrFXqcnyVUdokxQf2i44UQKKwVCig"
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
