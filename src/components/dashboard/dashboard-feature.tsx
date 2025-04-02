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
    "4ujDUyisZeD4ennQ8gtWZrqFateoJt9PezN93zu595brsk1gmCAGEtp9wXBKoF3ovaBFttFb9bQDu3WTudqNwgyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ttRKD9mT4fx1TvCzak9B6WX9bcjYTzHFyDbQbmTuQGUdzgBkD13cscWDxbM7bp824K3ErKjz9VXmhkYvpCwnrZ",
  "key1": "4XMwuwzHtN8nxEpdMP6RH1V78Ji9j2RVukDYpYWj6XAxPsLpvyn1hcT6XhJnimR1xGojfTiCTvB6r8EXpBeTdixL",
  "key2": "5Hh1cpwaJoKxwCE1aMMRKmgMUFYLWiyE1BQp1iKPd27Vzoczz13BWXB5N6k3RRj8xwApugc1vy6iCtsHJ5V1gXtx",
  "key3": "29jXSkhr3dgT8rX9WwEgB4WzuBm8kXddoCLahwxprVVNJvjAQ2ahwzD3RRhadL6gwX5HqsD6Ax3NbyqKyQ5mUQe8",
  "key4": "3PDva2Dxk6GPuQaHoRVZXYjZALCjCf5yWeaNvNUJTMACZAm6tfUbEm1fPbQmhi2pq1FKzmeEdRqDBEQVGhA7nvXw",
  "key5": "4CN8T1v1FPAzpAaCAYcs9uRviBuYP56abGxSYrs4qJjGFSXiDQxGbiggNCUKfMBmpZdGkxKs8ggVksRUqGbn2QXX",
  "key6": "weAvJEBJJeTxyo5k1CFvQjag6bjZyHGkpUsqnxR54mtZVVtmA12fcVvq6nwnu5TjHybrJ6HmxvuV2cf3aLvJ1h2",
  "key7": "QSr2n3BvqeoAnprXLzbGWrpGPXergUVNpoTjEzYaqjy52tf2dgDBreD5J2X2srnnHoBzKgP36GaPWwGyANj6Tsb",
  "key8": "38Kbk9ktLmaP7Vyu8FiqRYisY77ufuERo2JVdkxQrYsiuZK3psQTARpeGK52V2CGUu1wHBfciL6ChyTL5zMDNRVz",
  "key9": "2QHNmEarDpPpcXvBHqFGH3e3VrTCnpoYuS2TERAtCfegEHB24wMiS7WGctoFcnNr9usvSBMiPDeLGzUbAYhBUZNU",
  "key10": "34159429FE1jUs59fJQ7boRnrCLc9QTeMXEZXcfaEUVA2dh5dTbVWHGLLtbiZcgm9zJuRWLJA8KoMpSwywQ7dqfT",
  "key11": "5QtPXWvpGAzegscd7okmbnqqAHN7ddZf6Z17Ph4hTez1z8c5FDZhE97JepdB5SHBGZbMr8Zrxk4Dd5RXNk7G763w",
  "key12": "66S52eF2AqxL17MtxAyZ1XWeYQVzndHwQSpBc4GgNqNZie3CrvPE5QpB2frEEgKfpfFnJ5RYJsJBQsdkJ6DGSVUh",
  "key13": "43vkURCRJ74tSibSheStwsf3GJCUb8aS2dJ5YFPx2cPT8FQzbEQFZxFH16uMXzswvbjdJSv5TijexehUAnLyT23U",
  "key14": "61BjLHoQiWSBQrh3ZPRTotxm7R2yB6qvgnUaWa2CX8zj2r5jQgiXTFsY5wKjfhCghCtHx7JDRJqnewjg2kiY24iM",
  "key15": "4dFm4uvPycriDvNFhAxyS9HYChzDKfrQL7m71aAJs7FaD7fQhmSQHzgBjGjSaZ1arVpEe2pPGFqVyRP3LY3rvbce",
  "key16": "2FW5okCppr8UAtekk2Z59sBZi4aCujpPXzPUWEC4HrqC3RGqfGNWtVBGofZb9ogd9EuMyakoT19GBhbhYvx5WRvU",
  "key17": "2uqJrYybewCwgiJi3zcVUadcZszjnYejnqBiyYu2dbz6Xrr3XHdrEiKVUDiuN3oSGmgsyiGqCU31pXd9iwCd6bsD",
  "key18": "3Cbb3tSY9R4v5nqyqns18apzPWMZxR1zz239Jiyd6rj8LETzPgrneWD76qE5oqfV9EvnBxLR6kRM6gjagdFxCjiQ",
  "key19": "24yo996qTUhYkCoFN8SfBt6dNwWsphfkZE6Pz4oyajpB34BNLLKPxx4daEk1BCgDxkE5XSydNWFVYfPatG1UYXua",
  "key20": "McQR2d5VknmktLn9ihYWsU1cDkLVa4yFKsN6116qPq7EodKNNuP25zZS72joUXKif2ZyiA2v6KVnoK2CWVMWc98",
  "key21": "28ifEoMsrHotdxxirxV6LXtXTibL5UbkTNvjteRnZKURnpb87wkVGYiRUv8sX2Rb4DWtkCMW7EcrNqHcCp5npV8j",
  "key22": "B8Xwd4r4ML6oefv9Y1sLC9YqG9AZHWWCHbxECGn9raX6AFHMrAfgGK8FCQ2SXnyR8rVbzrhExgDLXJeQK6jysr9",
  "key23": "4UyMiRZnnz35xmU4ZbPYN5JTY8YsPvdTdczxSmtjo3wnNK9QxDrBnPpZB4ibESnsYWtu2XfEZJXkGyNkwS1YS8pv",
  "key24": "34RE3D8nU31wEMAGFWxPiMSykmnpg44RmespZTrRWKzkqDNApnUF1Fzq6Fre8nXEmDomLkvRqcMmAuEyqd2osuug",
  "key25": "2845ri4gMtAmkGoJCjWiGacbWDSyq1joS7yd4ocntpJw5vVY9KyhyG9SnwyhxD4a8irVN9VLyWfifwtdeqNx4LQN",
  "key26": "4SEiusXNtAnneBLkpHxVovRoLHZdDShMwbMmPB8euk7f6T6SsuJZ5CWxgSipFxoSrGLzCfEomk6pB7tZ788Wd6J",
  "key27": "W9NpWLQoy5KvwPf1qCJCVt5kC8PASeF2nRkuJxBTS4mm9AMWpem9H9mq6PVHECcz4YcMQwVqQd2ueNVLPB4yvRD",
  "key28": "2iEqyjeSboaYnRV4Hrt4zXxscWNyQsSCvhUZ4rDroZgkBKGF1ppsAo7Yqw3bMU1uLrAz24gPtmibpcUyc3ZUfACF",
  "key29": "3PxPYj9bNRfFxTdzZCd7q6jVKKjaHxXXzHYQWp1Q1vUZahPNsLDr3ym3mHBsWeERBBRPMCcMGQSKxnJDJSLRq5kE",
  "key30": "3CLcsoEdZU8hvCtYRPipHhtPX4D9HaxgLXpaYcsqLYqex9ehS9ATXLrj7QsW3jmX6v4zCNYC5799npdjJb9MFdgS"
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
