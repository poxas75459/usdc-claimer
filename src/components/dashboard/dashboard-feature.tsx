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
    "4hPC1LnVzPHAJkqwMcrwEYku2QqNiqpi1T38yRSdpE4rup2Fiqj6MBCA7qFwXXETv7JL3uLepqr7ZiELVDssuv4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ebXxxzUBRFiu8DFHtgw7qRQSsUqWJAxfm2P8yNdcK1zmWy6xnG8ZuHqpS3xS9hE4G9a2MCxqzFUR7pAhGEdc9T",
  "key1": "5pQ78BZKBwPDLKH85rRBC33wc6kTXcMr5DjhXU4fvbuLPhGDL9NafAfVeXzWS9Znvy4hQAiYHQc1dV9wURNNQX7d",
  "key2": "inHLeb1hfwdaaxFEFrempnhfwitbXgqk55rEx4imgr7R46xkC1NkTEpWECRbxnWU5t7UnzTZifAwUanFWqpxrqG",
  "key3": "2iGgFJurHhgh2g2KYchC2rwazeS1zviUj5hJ8SWMxFpwxXJPCPYyLgsBX8L9Hn7atJ8ZRjUVv1wQcsK7bddVmyDM",
  "key4": "23PzdLahs9CzFvv4uynqJ3v5RPof1UmwpV92DonaDHr47FutH6nqSWsCzwmrAKTfNoqaUSonrzEMtK6Qq6N9EF9i",
  "key5": "Cm5zUcxUbNHmcBfgCn2vNwFMjY9fyibnKUfevRNiEKDWZccimnLa18FsN5U4HZj9BCzGDHobv8J3xtyFeYKBSA8",
  "key6": "3wiMnPhPGJWWdHQxNrp2EG6fCJe3GZqp4k5nXcYeXHf832ckGqSHbDPeMGqw5Qa7DZhEKYKUgYBqCSCQFwCtCRzx",
  "key7": "3WPGzfdWxbt6CTHQsZ8npHvGTNmGALFsna8hgmCiJThzcF2GdzJXHjiUnS5F3Euz2ER1NtFn7taTKW889PC11ev7",
  "key8": "3FfgfXoAtz5V6eXEF5ZgXFDd2RYkVhLFSdh72rqJCKwTsYgvBWTuKDcGvPhU6GuVT9AZXrLG4tcxKL5m2rdeRToY",
  "key9": "vNX2DMhiRrjyh7diLEjBLgpw5BqEEmdoQN2ttKo5urk8ySPXMjVSvmrmEe37bFt7bE4oyQNKyba83C66urWwoAp",
  "key10": "5Qt71eUjS9dderxhypEGrxyDZREG5EqmCLMdyTX7jwvqWsXdAKnXqoHmLRcDjCMGL52iWpoB9KQ2CEVHUzSxy4kV",
  "key11": "2WBjfe5CiQSxFtQNKFNiZVd2fxYthhutSb1fpQmbneMU1P3ysrBQYxSQN4R2s3QJebXbDnAZ9NWMe1rsSuLAHr7p",
  "key12": "5jWQn9A5P2aV3Et4ZAFmh2zp3RkaVdt3UAbuUxHBYr77ZyTBwGhgLDQoidp2cPFdSdcZYjGymUCrmXvwMNSWJFo7",
  "key13": "3nSMaoSmwXi2qKVE9cv8YGRokMrciDYgAMhzQAzzbVs22z3tKW3GwzPZ7jt36e91xt3439pu8ZQUnLUVjiJH51gT",
  "key14": "3nM89Dpgujz9jZXLLZ4wGxKD7e44tWAsdzp9Yk6fFFTUuyt1MzKB6K8Ss9axNfyGUbSbhucnZYLwNjbSog4BBFPM",
  "key15": "9PJWsMWyXA4y4ZbHRgu1Eh1VpbYFyALSttwHMKUh45g1g5peh1q6Msfs3B2F5idcsdmbBsz1bRTGxBFVW1gumWV",
  "key16": "i4js5GBWXqZSWpuh19hswHUwwhVAqCRnL2coMjsvzrAwPPVfLjZeYX4VNy8bko6Cc6rsYcrXjozwdgkirJGr2W5",
  "key17": "teXLo8TwfW2ZKpzPyHxjaZPJGccm5KGFJMMoe8p4TACUTb4DBFDZFP4aQVhLJsV7y9ri1uR1o7NSY4VxEoBb8xG",
  "key18": "3y6kTccTYJRsayJhPVvL8bbjoVb9nUEa8DjeVKzGeTy2qX3P7mZqgyaPnG8EEoLTNvb3rdj5SnMSUEpPH9qjXLpW",
  "key19": "5z1iaiCqDVUSJwb4bg5KZH537Q25zBzypR9qYTwsi8dSCAmyFbAGE3yz6JQesLkALpC5cHsY2wMNxbrtuj2b5UQY",
  "key20": "3XbFNRrWePKKnxYGSW5An1FbVVPse8kQ721S1UtbhXRiQ68wC9rhjCGYuBDtCBJGyAtNEdxdLt6S8NqGeJR8TXvX",
  "key21": "3Se2SBBJaTKzXR6pXEuqfVb8gme2MbxHpb8Z46xRCwmL4SeaereQ1Y13MJ9KMRy6EvqixJvkUX65eHBkojsb6BPc",
  "key22": "vXNEZy1MWqLJM8rB9oVka1hEJSzYkngBb8tMzPJgydtYNoDXXeqj92rZNwjM6ndiZuuzn2ekmtKTiWReKpDcAyQ",
  "key23": "4adsLmf681duCQtPdAs3i9D6K6inUxGadiGUJobAqeJAHp2zAf7tgYkcV25Pwp58uJJFEjLRrCepobhfFvQbw3rp",
  "key24": "4FMQGpqhrqSGciDzEu6g43q8HTxnv1KXCjt8epjc64q5VRNtqPgWtN3jrm5GXpqb2Fsd6sfLPSg1AJhUqbs2tDj2"
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
