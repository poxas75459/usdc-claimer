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
    "5Pa5KKmecywT19egReJrFa5fAcxPZ6Zf7FijMwxJBZc3SySXsQ3nVsaT2AbWtdpCDJdhEmzrUDWH1vwoLXu5q5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caGHAt394yTMGqaTd8hwKJwh2Z5E1aCEVKe1GRH6B9bMX6dvW7fEbK8i6E77X7bMLfXtU5EvhBg3jr2JNzE7MrR",
  "key1": "Z4XQWfeuaBNTCUNrkg4Nk8jsnb1ZzTnv2JnTsgdwVbQRqEhkdVFcTqGvBoyZZeerswjw12yFNANvKimpdJU7Ar7",
  "key2": "2G8hUATMcPUNm1pTU9waKt6RrYxtdkCsLJ9xx7XcJhBzYaexq3SjamjVWQsNzqDHqCky8rxrpRV6RQFhpMzFg5on",
  "key3": "3EQgFfReH6ywMpZMf8Mc9ga7HwJ7wCzYXXJ7wx3gjqDQP7k2HsMa7YxsvZRuTR778UHRfUZPwp1Q9KoTKdSDDmnV",
  "key4": "5At4oy6zrJBBHJ5WAofBDn8zhvK4QKNpnKoatsEdmcqpTwPSye1Lv7gkPmf9mVd7GKAApzbXVvgWWdE7zSB5qscJ",
  "key5": "2aBbdCmnvHQHtpQ8GnNiV35KjWK2DTzD7uCcku98JVK5GpNR3s2QdsjjaWzBh4MxBDXdgcKQD4bprHPV29tGXb1o",
  "key6": "9V3qcAcjKL43XizjoghEXbF9yyYtV4DVJbWQVTuvE4rinXotN3UHG3iLo8VHrUM8oh2qrwCyBJgN7kEyxat9Xa4",
  "key7": "4mo8vDnWCvhiFCRosF1RyfZCESC9XEp1mS42k9aLgeg6RNJfMgZdPQgeUny3pFzZyzNdWXiSwnXBMAsmc3ZZGnAd",
  "key8": "2q6rM3eRQzkzYUCadE4bEg8nJ36TaL5wazGG9rzBDuMKk21SdRs1sKUDhf48V1rQ6YMLgprQiZj1dVZuCvjtkN3p",
  "key9": "34zmEfzCbGsaFVeh69HJXSjGYPqdbW3YL9WhNBCnqmY6zNCRfBZX7v6GtY98QWNRbwy5hweUJgWkwrA7Chg6MTRr",
  "key10": "eJsKe5sjRtPYHTzS5TNnN1NJYsC91ofQBhXZdCMSQmMpYwCGEPDL7qbpa6Pj6SDABfTBoeYLbLDJz2w21KnJRsR",
  "key11": "2RWgeEmZ65J8gPpBpdVptn7zeTZHmZvDnCBfpwahRDQZ2GdqogFxVz8qmkbav8GMD4egKkEnX7oYCSLKnNaGTCEg",
  "key12": "kgwyabHihyujzrC8VWxAtQAn5vd4YPbwgqaSReKAwzvJMBQt6andGvCxCBguvWHta34h2iPiXU3UGY5tQR3LpeR",
  "key13": "2nbFJjCZGwyNakb9nxn5gU5SpPnkHvEHt4vq41NV8bPLsKsCqBoDEXmzAj8gorB7sw8Am5ACtqvQD3wuZ5d2hGw2",
  "key14": "5LDeANd2qhbRLM2uDgLYXyN7nYrYM4Bfvr12BXze8TB5t6R2sKtRAWVXs26e2JzxhAoWbx9A6naLs7rhhqQaSEU3",
  "key15": "3p71a4bztRqkLhEHFrrmMg52gDT2bBUcckJe8VUeYTtBKwZscXuWnNkgfUKtug8Hk44jtrsxdHejWcT6nhPgFohH",
  "key16": "3noX4pTg2q9PCrn7k2LZUtmXtW56FVVDgHR6T5GjRo28SuRnBReZp86U1TnCcHGG4FWi2u5sTB6bzK7VAcc48tR9",
  "key17": "3zxwBXP6eobTZpqdeFeQjghXtyivTeSGYHPk7hhPanZkkqHTz2VkyKJKZr2yoohs4qKffMzn6y24374vE7v6dy3s",
  "key18": "3kXhk9JY1zMJUibEtAVuXW8Jm88QBjdzHmHDLpSFTJFQJgWqHzEddNqJNM7RZ8JjtfFPCDhx8SRwXWcXHdSBVZLV",
  "key19": "55XsX6SeB1XjhxRLg2cRgf4xcn3zCGti9hK94FvhjHfvqvkuBrSrXw6ex4t3jPMD7wumi2qhdXYKJiyC6o7WzYcp",
  "key20": "5J5w7H9KQ9MfWra7tPp6aHR63ZL76dYcamvPoQ8rhoPaMrqwEAn2KhMMoFqujbJrcVKUcToNJizXPaJNK5XnMoMk",
  "key21": "3MtrfyLioFtDtbrRz67qf5RsncY3SvZZfA76bp8DECuKm3PaqoePva5gUUpv6WvGnHCnHE8tSPKXGs6SCo8FfDKk",
  "key22": "2wrxFRQsZMhQWdWixD8DJVioNzSyawyHu45Djt72YkqmHFjs8KEyEoYhMq5pUkguqFzWcTwuS5wTWrHJ8qAW2Kr8",
  "key23": "2tnzbFDE23SwwjNhA2JbKMajvbsWLMUgEa4dcFgPsxmzfgwfQSwvE51o6LXJHXUm5NW8sxBEVvwzf5ryniS7ChLQ",
  "key24": "49yxeydzhYYwFHzSNcYxT79urYkZLPxdjKmbkwsqytkuooFTP75oaEcenJTRgYjA2yDN37Sxgjhzvp8Jd2sbMywg",
  "key25": "5o9S8PM7h7y3E3jP8fni9Lh3TfQgsz7yueWUhG699AjuzdSj1cbQZZdxpV3ydG3h69AbNDfVbsTnU9jGyhPye8t9",
  "key26": "4M7NVbK94Zqzqx6hzSNX24kV7qC5UPriz9Cf7cfkKVnthrRJ7skCEhKsSZxBczRFe9fRY1QB8dx6eqYG1jdftjCr",
  "key27": "5k9Xyo1p5QBnwD3XTzg81w5VqAFHeBF7jTxhxbYi8WNFGgqe3ZnyAp23tyCJDQvi9TV52hV1Jkq2DiT6ScdXMbmk",
  "key28": "449jB3fhtcskmbZci3UuPtx1hy7wf9ryQhydxJvkKYGkUJ7jMjd7H5JiEALmkzQhzyWbtJfF8sRYVwxgdrnTkurm",
  "key29": "g5svjoczfSsA6TVzxrb1BCK4BvU9mjZ7SDwstzjrHmKrsZFrMtbVwBbmRwsWgjtWtiP1Fn4eWYmTmKQVM8AT4Di",
  "key30": "3C6VeCRr7cv9pHdLziNqX3VJ4KfVqsDstyFwFvT3LJBNNezWLzMMTBR3KK4jprm1PKoXVbgEgEDf5rmu6Ff7XDWP",
  "key31": "4UeCCnHUBXrEMUVEo8YVURoYJ4UWoNb4BLTzMYw1Bbtwj2EVkCZxVfMdPYoS5ymuFJQSNP2jLTk48KxC5KL4nDih"
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
