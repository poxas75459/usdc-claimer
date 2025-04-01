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
    "65YpGEbQHZsy9XZGHHLFoYisVr38TJsDeJcZRjv9qhBVbgsLckm3ssAF6L34S8gGZXFvgG5Cckgvxgadf6NtQ52H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Ln9DQWuE4nM2U83b4E9ccbWHTSkaTT29wBk1dNB1Wr1PZBrkxkQ2J6XKrGZrjpH5PXXsz8RUJJWc1XnJ7cUtgM",
  "key1": "2n2UAYMvKDe33qYkDBfFs6sWorJ2LNQXNEhA6zk8RPBxfSr35dPXLDartnMUEUrwCwnZfyyQydVnWH6nLAZv7DQL",
  "key2": "5dZRW8awuGuXnyLprPoffWVUvyMqL1Wb6PXV1tFfPGKMiiYbvcvH3y8CR1T3yNV41ZWUzRmfETL4u3YZParTjm2L",
  "key3": "22knqPXB7CT5A1iXQ1XHEshqvzWiY12CNntnv3vpPP2DS9q4sSLg9Swo638WySAqXM5tUDTvs6Yb2TaLJq335qrL",
  "key4": "nP9fkX3kVWApcQqo9LZzMMWnfdFmBU5B1pXd4tCsBnKnhxcYLHGReBxRtS1QewNTskYY5KnCDtuM75j19fXX8aH",
  "key5": "5uMaJiWhMHt92W32haNRB7wV2MMXmdFMUa91n9sdBX9GpbDwB6JqtjbfbiXHiL5xvvP8KMSbRMhXvR4NZPAZq446",
  "key6": "3u5pT7fG8CDqteVvfTJPdWxtb9bsRC3WkkAGxw4QxsBrGMknvG96xbG1wfAddTf2jkZiiowpgcfZVevnbosDvFca",
  "key7": "jCKq7cr5EanoSUGCyHx36pZVtzmJrMaPPcubvH9evbnJn5C4P64n2yYEu1ghz1UkLdT1c6R3QCSZau96nYCi2hd",
  "key8": "Je6M4if4Wr7d7ZH7pG2XRpkTNaEdirWHLC83fXGwKgLbrgx3P2Q4LJHJd2DUiMr4GfCcjqGtrhLtxAVTGSqnBxR",
  "key9": "51Ad5E3mA5PC2ks7rFrHpPHdDr87mzgT5QnSGRrobx9gYjvnyxmx4X3jZyjPWonzsxsjiKPd5nJQnATscMHUwSmh",
  "key10": "2nKwo6Rccz9uL7298MJpYPXp552tb5kxAwG84CRHCupy4qnnncRVEFp6vRPysVNsnFs3ftoW7zDMM2m8sVH5UVff",
  "key11": "2uTkUMRuGeSwjj1RgExfHz6FpPy3EJ9a5zGeTUiXXSp4dHz7AysA1m43ffU6gCJRKwy5b3QipCusbaHiiCAyb6wB",
  "key12": "6pQSyzD7e2mEm45AQ1QtcT81g2RSrVnp376BkPakwJasYgF7ca4ep2fbEC2Vc7WMMCXhT83CrEU133jrNQk1C7r",
  "key13": "37Php7Y2U5AN6taVTkA2AUGFT9Nwppcr4zc1qwvUchw5d7mubjhabFMdDpVqeejGsuu83WiqXnxFrQC8MTMTUj2u",
  "key14": "3WGzpNeK8qGhA6yuoY5U3RfG6bLdEpMCmBXGfxyZsSYEmqZLxWhgj9RDQue5rriigD4My157yhKExQVZGQb46R86",
  "key15": "5yNLqsVtPj6NgKhrhnYkztVFt9JutSq8QUNUb7CUYWApbEJZjChZvgYR9cKGy9vkN4on2fJ7mTA7RMQTj8hZ4PTf",
  "key16": "4UJZSZGhqdfHKqyUwzbof8gHwZkDwdXqhaSbDk7xw2BLmeto3FNPWmq2bpdjSXZP7RPHMEeSVZEiWtvqAtukaCQM",
  "key17": "5R6ZVMMoWpUTDJ8YrFcNChiL24V5dqxoxa4CqjVMwm7jprTkXftVfdc31tdHYw6213xhyoGncajyW852jTksHHRt",
  "key18": "GxUxjhwoGuvxvcwGW6wATNPAD4Ysf2avikrAGB3GzD8YgCtHtA2uAAEQaBMPYwzKGy3B6xmpC2PXgR8ypDakP1k",
  "key19": "3SVSETS2qwds2ZLYXeNw1ZHpQU77LN9EeeNJKJ6e3MJE4rikB1Tv6uiy3nQegRAykfvD5d7YjmQivY2nCGTX9UWt",
  "key20": "5qUtVW13WPa3Cd5pMZw1rVsp1PGBw4ZvftAD2ec2YcFimd1DJe4a9cQkG85nVyrH1KUpePvfjtr4s7ZA1Hk9RGbd",
  "key21": "VLKXaVR6e8CTb9ch9w1H13KHrVX13PYLZ9JCaJcsExGtzXnUJM4z9TtiPGwPwr3R6kFWkvj7Mbt2zX8nwiWXu8t",
  "key22": "3QpqQm5NyhPx8jyskw9cJUWWtUeWjk1ULMZZFjmQYhwP7JpGXvnniWmHhAdnfuf4Bo6YkcnW3xnSHtQaugDdxCH1",
  "key23": "cNNfJ9UKsWia8Q8JGzw78bx7TngcQJPRmAjFRzuFmBPScuPUi7QEavVgPxRaRtNaryHUCoENAPPHbNuktQUTLgW",
  "key24": "eCR3EgmPFvqDdMdYy224RuRZXAzt68wKWRaeQypyQzKucYa3tHrrTawcUWCPuwmt1v6JE5AXEgcUk9rTtxwEaXe",
  "key25": "5Di5vB5ZJg9goRQsvPWGrT3rWKWRbWbv45JodT2QDrpg7oWgwkYK3KRfyy48dYfP9YeNkqu2yKYTEAwnz4qaEL9s",
  "key26": "5Aied7kskNVDvvreVtsQgmL7GNowSrD9Qm3QDGZ2W2TJJJ7aBMxE1EDwMHcgyPsw6bDLtMgRKtW2mgn67T6u6rTG"
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
