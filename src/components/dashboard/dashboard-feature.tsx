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
    "5KUzekrv5LUWAzdXQWZXShQuccr8KmEZQnRCYEKDC4poHoae5htfzieueQMLSe8SouXGCdKT7Vqx34bnLgxq1RVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWz5CePufXKcqn5AxZpnzgUQpAJ1p6DDuZFXKaHcg6iJpPUu8BGVZp4i3DfQpEZmtWYvzxwRVgTJPH1P23aAib4",
  "key1": "4Tp8oGanATQHRLn39czhgizcLjF5EwoVWTdSMTMY4AfgEYpcCrjcEPFFK8CmiJc8QDFa9ECuMw1eKB1jM28FvAGB",
  "key2": "gm6y5uezZWWKqS6cAiJQD2hQN6pRqceji4dhHWsVht6YmqUa29pyJmWJR9zD4uJ4WCUeVWNL8sNbvz3bjin158D",
  "key3": "5XEGicGYc2aTSCMgP1FVWPzWsXGFSCVY1oWMnhhBozUjHAMvRJD3m9vxnSeZGoyBpvcpmtWGjwthSTyMT628x7LB",
  "key4": "3aGo3bEPekF1iLAaXLPCkDL5bfZaeFP9Kg3zynh1xpwTeZvdjYvWFUwDtVp9JejGzdyxgXDNA5mf8zU1Qp4QGZa7",
  "key5": "2Uq2sZPDj8GQw3A9AZtyQ1YYioKv1FL9B326vr5Dti6WYut563deKKBknqwRFyVukV2iJiPxkV3Nw6vHxvUY36Gu",
  "key6": "5dKD92wkuxBKUhCn99pwnVsnQvd2Keyxq6qm9YMDoH5ToTrUWWDZ4Y4bj5eyV2Fm1riRtdm9DPvbZRY9yDzriyxH",
  "key7": "2QnpqM1SyL8uoehXDq7yYP76oMuUsNjTY9jUnupokNvqiUmedtuzTAds51CjgK2vwHuSZF8u4rnHrqafhbdU8XkZ",
  "key8": "5VkTLSjnEpqmXDRY2xN9SeukVssum19uBPjGCbAKk8XcVb5D182G8U5nJiMv3qAAZP328YbuRAAY5BpVwedxPaT1",
  "key9": "QoQa2hVWmDL2pAxnkjGtqD2MbVxyyj69Qg2pNuYdj3LXLw6BzNFC1tESLpqmK6gMpUqhxhUC9skLkqfnropgdvf",
  "key10": "5c2eJSQ33dVerWh4YGfm7QVbaTXTpcojG7xeDU6RYv4HLPkXcZxJYsvWPcNaK8W8GJXoUJU7bc44A4HFS7sFqqcn",
  "key11": "32jZpU8vLm57CyiPaVgreRq7npEYomNwJ8z4sWCdoZsHQfVuXQoiqjXcs7BEJwce4Z9waAFBTBwvMkfxPP6AKRuD",
  "key12": "3f89y7H9xYLgVqMx7V6oNGmKhJ1QuzTdKRbXouoe4bZEYQqtkAsJQ3s4DKotmefRce6qTA5AtsmWfcMHwi8ZDoFc",
  "key13": "3r3XnrSG5vhi4YQKrgVq1E5XQmxepjSZfgZnjbY2ReKQq7eYGwnFT8Xd7o2mamRxa3j3LkNwjU4oG3Xvb42dq3No",
  "key14": "3SqnVMBA54StCwTKjp1jHESEJFi3JzwCXkAeBGnWQrvxKwdBYPwGJpeR8fLM58yRBwJSRRsGJqSeW6gf6khxXoaX",
  "key15": "3gmYn6HsaDgiE9X7tD83AaDPyG5UgksH12gjbbpTJ6gWw9TG8eMN5NSzCLVRAyFNSn7cZHkjNqvYbCfH3MXWPi26",
  "key16": "5DUFPZNvA1YmdsPG1Lh1Wgvs7QfKAuSpFsV5QCtsjuJkWJ7qdXF5CoMsB2tTHq8VuLSbc731e5xJYwyHDEw8iiYm",
  "key17": "3CvH2qoYuShEEx4SBV4XMB7HkUZ9ZQTjU8yei9NNDNPRLz8NrK8J1R4S4kfLauvyvrx2Jmp6bBWC9rQ48ydVDJd8",
  "key18": "4invQG9hyWCWbbPZQQLsFhRp8aBEPKoKQeLvMbaSoLGHVZHD9T2vjhNB3NCgB1z8HksJGFL78U9GRvGTm6Qt9dsu",
  "key19": "5xswwk5nUXGtmt1Wg9dY2cPxWkBu99KGjg1bJJHeE7VP1zxmC6Friq8oKKPFMo29ivMBWRLUpw3NsPedAf6vdzye",
  "key20": "5tdjnN38qrGJbYVwF3L1ztj1yK3B8UeVndswZXmQbcQg35ufU9EPbr46eXtd8MKngTKe7v2FneD1vpzeX3LSLe94",
  "key21": "31sqckwD358kxpRXVJphAf559TqANic6Nd4zPUJh31fp1X8WuFLBmtBqqhV1dSWqmyjAh3Wr9v9o2eLJ5TwXWtux",
  "key22": "3rrGpiJgMkGShSVS8zwbGyZUdcdNwNsvXERhiHt74p2NMZj9zsre8tqkVBwV1YRxc5pgchiUnWMo8TJL15JHAk2f",
  "key23": "3sqJ3De9sbgZhbv8ZyGxgz3MJfry33gDSywHNaEs3FE9SE5EVBsAhvGwFYm5212HtzDtfhN8qGbF39Bm5qaiLWbH",
  "key24": "4M8eMcovLk8JsugvxfAssKvCa7zGHYCZk1embEAHbmxa4BXaM34ASzxjLK8DJih3ftrE6H5xcqQG1FPTPWjXqfhy",
  "key25": "3iS9yTLxova7EFaMweziQwQmHD58WwFEa57mkn8XPTi5ig5NXfE15gtKspugUZGDXG9P9R3BZveVzBQwasZXUSUF",
  "key26": "62MaoSoEWorXk5V2j3RPDRQqbF3W86nEXRPEtD2Q3SCdeoETYCjdvfc3NTXmX1g6x7cqMo6c2WoLEpbUEmmN3929"
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
