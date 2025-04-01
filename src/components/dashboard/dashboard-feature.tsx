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
    "59xjY1Gxt4QEmWJoPb1B84DK3ySzzqg6gbfEJr5a4j4XHEuk1QJUic1XApN5oSTAVYCMvtbyR74Xo8KcLDkPvWyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkCAbQzZ1HKaqLsYrAeBFSB4YS7hek3bJYD51v98EZpfe65hzpKZNKorWRGcywRNLvvUGrpWSDPz3xS1uJDV1j",
  "key1": "5y9jPM6rBFvCD2m3gXd9vwSwtCPodeZT8rRDUa7zbfFRSL2A5R7q7ANZW4A6mZkRxBqm8ZZEkFC7yS4KCYiwzi8E",
  "key2": "5U67MLbfbJAnbPcoyabyyk4amGbmGYgb51Cbs3GLkxCFMs8zTsBSrTi83Qv6ifHVz6svZs73cGWcU56j1dP3FhY5",
  "key3": "4FE8BNigBTjghBAfJ72wLRzv5Ej7B4KXPkn4wA6Wj6ujqFdcQJpnTrY2HsokQdQbKA399Tb3sQi1dhLaezs8E5hL",
  "key4": "4Fj8ABxe7Xsg5P9FhE7jXYiwLRVNfvTCSc4PW5f4j1oYgMcEnTHDBhUVNt49hubS4wUnPUs9ixpbtXUj5c55bXDz",
  "key5": "4mvwMMYJSUHmiAp3tmfC4MMZsZViZR1nkszrzryUgGhhbUKMCE97bWs3SQpB84GBNiGwGunEY9LAUDc79xTDR2Pq",
  "key6": "5JWNPDjzve7tE31iyyrcbnSxcdDs2cboDnuDSQ7prnNGtT93Wf4gDhpe26b79wnXmkjZKHU4mvj3i6mKmJ4yFqCW",
  "key7": "CnCvkzzUs8yC66B3mfCSt38j4FxzuXCBafGeEVbUy4ssNoncJfyBjcYVmWm2qa5aDPDz5MQ7uUkMBe7rseoihpf",
  "key8": "2Z3k7WqqCE7UGR5542YBcJYHtCUmz8F5taizbp3ZfuQmiZWj5e2mLnc7BLoFWFDk317ryuFn7qNUbB5pXg5GHduP",
  "key9": "4hwV6kN26jwrEvrvZpXaH5xpv9Cjku29Y9jgHajLKRaDbMvD9qb3USWu7HmqrfArSYHq6Zc3vNLTjAoAhXSd2kdw",
  "key10": "3bnTV8RzKhi9idDuuSzUqwkgKQxyGRxPgYQowtprBg6gRwzuiNmMXD8RsNyGPZXTW4YCGLKdQBVzFA23sXbHzvYs",
  "key11": "3RdTrxGjDC4zBtAiAryaWzGMWNY3TAfLwBMUyHfW9RjyeDJJ6YjKLojtdJZLtfBDQkbWG7QK6ekCxLmDNhBn7it4",
  "key12": "66jSjb5PThvenxP4aGqLJ8peR8VYHx3wF9CwCAnXgfLcNYx5GwjCGciADBwfogecWkQcspEC4NpqUAs4ARAbfifF",
  "key13": "3QUUCpuBrADyF1qGBVewybna7fmocsAM9DQtvNdQ4JmErbV7cXV7TTJaQFARdFrvZ1STkXyccY2NqVft2VLXGjDe",
  "key14": "49Eo6ki6t72Tk5JeKLVB7SCqUPfsPL9v1mkgeGCfY6YtBaTYn9oVaAsjkn8ZguCSEjvSCdLqtVHJiRMPSNmC61Go",
  "key15": "5qxb3Gj91j7jfimxivbBS9teWLmnfHMTMLyWQyEtC1E8e2ahEqbrLmPqkw4MteZTVvokr3XmQ3hRzTzpUtRuvpXG",
  "key16": "2xZYnM1A4zSL8msT931TTYeWUYMoh8rUg4yAuxbaRSHZkXWjgPJs6AGm3k2WLKKp3HvrEfgYwu9wsLwvpnAZEsCL",
  "key17": "4QYz17DYozGgcD2C4ug2T6akX3GccKd9kRUxpKpYuN3ZccgKFmYMASe9pjVvGmT3YafMzHsBVbdiKN9Hz1g3n24u",
  "key18": "8BzKZXWoourfRDX1FCpqhAseH3fiEWqsxhyA9uFeRX1hTKPeih5DMTr2LJiLyA8j6cE5QV5Ly3WT5zFn4StSjss",
  "key19": "4A17QCyRQLY6jgUbPaX3JJUhihQNyM77MypgM3Ewxwt19hCZkTuxjLGx3rdNdXcPJq99vKHw7SDbzmsrqRdeHaJT",
  "key20": "nbkSN52TNzcvxtFvackBAPx4ZAnKpawEj5mHAaRbzPdYq2ukgUmQ7r434YcnC2LQKTAEmsagwsDVUapbwoV9adV",
  "key21": "3Lke4njakL1ZTD2BHUpMVQqdVNDjG4bGGCfxQAq9jBAhMRMk4xLvKiyqABANLVTbjYfP4P8vfqa9YJRDJR465iTh",
  "key22": "5rZG8uPAEWFaWWpLnK5pJZE1NmjFHr7v2U87e8ioB8L34uYW4PnHUVPHUzusEhB6gnkqDANKRqzThwNt3mN9TNXn",
  "key23": "JtKwXXaB1DkEF3aNcHpD5QpzuAsLBwQyF7PoWXEoxe5FpF8Y7JXt1oNhfu6f33qQ6kZMWgUrQfdCTTm8rVn8S68",
  "key24": "GKMVJ64w1dXHz6wGS1gLdprrhTiVhpieVRnH1F9AQrK2sRg9XtyNpnvMQ5wxSSiAVuJ5C3nAiLe5ExjafAC1PPH",
  "key25": "3YqSbe9Kt1KSi5XsXyLeJgdZmFnsS3hFAxT6VTnTFfuL7XUpwQT8KYnYnkqepwkkhCpRURczRScYKvseQmc5ZetA",
  "key26": "4zoF7MTyeSLLDzeeasDXxXvsV9zbU3bFrcp6wgfaNjv7gcuDcuH1iAseCCJct5TZPFY9CED1FbUrSxodcV9tn16e",
  "key27": "5BhFpAgYcPhKYzQVe4myRF7JVnTe7HvyvrguhxbDncTFZz4ZbDrjpdyTanBZhN5HDS6tiEF5A8YjtnvaTzrGTJCa",
  "key28": "5cwXUyW6qjTCP4vsGFHXu2i6oWMHnD66bgepw9SWXDMVSEbLaDUbQF4CDU1zYFGM8YgwrboqHEnkBRTPBpDFHnaS"
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
