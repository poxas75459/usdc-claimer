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
    "4o3JMudfhUHY5Aa6ZRsDK2uMbpzQBbhCnm2PUp3Y7jArsXcYR9fNC7tW1RRuF7TfP9fTCWSZjfkydTLEFwdDdjDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXd5YYa5FUNqPJ3RhoS9jhyEpAMFyw8JUhGUAYAuwiW5fe3MqrW3ncH8je4vBzGrFKCbXW8aDCKEkqfWMfE5tpN",
  "key1": "yCEDNMUTRhY24D6u9JPJUbTJFuNSemxRyZ1cqmk7amv3BpdxsAwj26dq11V7DrwrMmnub7ySSuh8VoyWUQ7dBZw",
  "key2": "4bovV3QacZhFAqGvwRg9Q4YkoKyeZip64HsgfTQrWdTKQHSCzECqQs7N2SgtdF6WvkR24nuFsgA4bXhVt1XXLqCb",
  "key3": "fW6EvWL5ndy3HHHGT6HDmq4LxNxrYvPHJbUMqt8DRk4qUKWevY4rCJtPjnzLx4Gis9sUF2Tp2Y45mEUeTZNGGGX",
  "key4": "3csRAy34ymniaL8pBoEP2M4uR4UeHuj81cQzHQ1NYYTGS4bwve9K3wYu8obcBoiyMZbm2gKj98PPNRwNB3X8sUnY",
  "key5": "a7tSsTBbuamZGBr1PTb3TF44msgWnYCyD34WSQckUtAUv3v23tp6ERyX7Q5Ju51BCjqAyurHpBNZKCAkHPdMy6D",
  "key6": "21fwsx9aruJw3wYrj2wnHDZYhttcqR19SmPdNbDEgXvfakLeWqfJtZbVSqv4tiQmAgkaVZrYzgeeRQFyYWVv4KgM",
  "key7": "5nQd9QvZM8DgEY725CcmxbpaodFCFi4NJGrog4aHmnnndL1WR2BJczfvXg2cuufb4kSKpWMat5oSj36hv6bdYSag",
  "key8": "2n4c5nonAhdEFtuhhhADHectympFNg1eFXScJ7qbYPFibqMn2Gtf3m9VjGHgLDNekGcsErC8xmLpBknZKYk9h59c",
  "key9": "2BhGQYcBb1TjkAfBnm4rCZ3H5D9HL1iM3xgeKqHL33oauy7T2e31ATNp8FSSAewizPefvT9PboRCaHgMCfP3n7Ee",
  "key10": "4UHAARchwG68FoYxEJ4FCRx9pwZWbn4czPqv9P2xLHahTXYRcv5tJzV3YaWBp54eTJDXSSqsW45wPy3Awbji6CBR",
  "key11": "axJeTkQQQKZ1WjqRZ2qSPdA9A7GeGvuKqy314bY3JVvSTLrY3KbNeN7xBcYeZPgAho7Q7bEmA6PAVKpxGVCYjad",
  "key12": "5TpYRdPcEvJn23twBNWvc7HE9iLQndBuCEfw62xocMBbDjinXu9fFg3uUrgGJMgThbBqQAhQAWea84yLq2o43sgB",
  "key13": "2BvbDywVLqvC7BfYjFHDTCn2cfvZ67RUBF3mjc6ExdMxzTmHVzT6VE2Db2NYWqkfUFoMFnf6HEn3TDpbhosFgU9M",
  "key14": "2mmviSo969cF3yfg3tmW4zNLpYZM9HdJdBE2TJfjzCrdxXfN8n26Yo9rKWojzMfcFLwMnDN5jB45oSXqqXCcFdHw",
  "key15": "5o1Jifczi6qGmKqaFjt2DBZeP989Qrx5udyjfrv5XudNiDMtSAnqssbJzXkNGJRBdBrRxtnbUonZ2dESpsTvSn9x",
  "key16": "9V2QXYeHLEpE6TRLsmMD6ofop5tvXdyfbabPnVj5LM4o85o5iCuezYqnGA76S2qkZXdZr6tQaekbK63XzjY2VZS",
  "key17": "4DGK2s3wEfwmBHLbA1LCkNS4yCSS1Uc6W7WghXiBcYyt5YA2y1DrqHrPGfQ6XH5Lfzynv5yX1Eer1twSFXHGnaq7",
  "key18": "4BLMJTn2Bpyytjy6C2zLnBRVAe2KmQS2eMKykrmgW9NJFHtU7ksGfcvr5EcofcfW78vN5mVUvo5rqJYaxhJRnX4J",
  "key19": "3eAdqZxpTDUhJStC6rRSiQHtH9kAeH99nmy1ZeF2DdvhDti6c1eKjt8kbnZkL16WyiaeNE2qxVxhagxLxdS2Meis",
  "key20": "5BBb7SLMx5uoZMPc5GAYsmcLQp1ejnGAMhczMP96poenWooZuvUCuVi6Bt8oyyuYGMfSm5Dfdsk4dYerJjNsCnxk",
  "key21": "66sMK9UHhyRq4DGHdXiZGHahdMvLShaAeXymdbMFJ1afzx3S9jDm59Rnt8RdpELKyP8sq1DBhat7pxnAs6H3KpPh",
  "key22": "7N3UTcbvFYqsQj67YfABK7sYUb7hix2npbUu7MRnkhAxYWPpvsYdhLN8QbqX6bbQnqyYebaDsDoU2qwA2xEkWJu",
  "key23": "5NsKKcZPw4A4XpPsp5ECQcdDu6H24GjcSrNGTxS9ELmEcd4DLSa7PnaPiHBBp9YYDP6hbWqtciQJHGG2MD3FG6Pw",
  "key24": "21pMPzUhRGtscunHDAeuuP9sLM141kHieznj7orU2je4QncEH2x8MpmrZ5puWtBKJ2EQAkkWfB9FATrSEAncSKx1",
  "key25": "2sLyNHDHF4TForukVYBYPd48dWbwiP6ZtaAAFaQ7pPjMPjYqiLuvFztTrtwNxdfC8h8y9fnESBxdVdcZ71rnRFZh",
  "key26": "3722jWTzyqBMEVp1qjXwQfkgDLWJJefmeMjn7geYVbVUEweQtjg9tYvqHH96paNQKPte6mErvWEZ9gvBRUoKUAZ1",
  "key27": "32Hxwg76DgkSeanhV2GbKyF5dyuyDg6RvWsLkTxVv5FxcCzWoxw2zmyi1mMk1CzJ6axYNSVQYE3t5wg6cZGG5BA7"
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
