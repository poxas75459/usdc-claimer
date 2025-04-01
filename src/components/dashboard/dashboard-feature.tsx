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
    "41inej7SVELk85SfuGEJqXtUAUXXmErwzT38xWzCK5zcgwMNkkSeF3JNVV5q954QjkXPr9UhJT7jkWvj7vGihbDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NbJinVMZwwEedvJhsGg3gt6mZEcb5VoVXmzujr4rivsSotpGFHDFiddzme5s6cQpUCGyAMSgcczqqkXxQ1qBqhm",
  "key1": "3d19KS8rbMSd33oKQWLGYetvhA8WLTgQVkkUwsHUxyp1HFvQPCFJNPawUBFEzLHCwLutdaPDbgx8D7dNsh3DqRU5",
  "key2": "27ABrkG6NneddZyXWJKdC7JhRKB1LoBbSbcb2QoDiJn1dVMC3u21S8nYTYYa8hE65TrQgHXNoiZz5NNsMFaDNRKf",
  "key3": "4NksdsqUvKAfZ4s32ACqMaxvK2FLjr44FX9NXgzLcXXAHqkL1bCBD8nmHm8ZjY9C8nosnsC9UBkXZB3BdZB4DoeJ",
  "key4": "33Ta8ftSbCcpdqM6wFtRqqQ9Sg3Va1UGqGWJgu2woNuxTHBY1BfuYYBKtpA2mbiLaznd9ANmugnJ8oao3C8ZQ5ie",
  "key5": "5aLyoCLLpqQoY11HLJyftvsPipzx62AsDXotAkUYdHwkNSTkrUCctUTQbguTNRHPNdh3HnQsnacaYnoX8xVmGPo2",
  "key6": "5bHQ7dRUJ37pVzKRwAwPNQEhnzvdt9wGnbNicf2jvC3afa74kyArf1j6HJaSKnHkc7xdpyJehKK7cqgP5FLEtv1E",
  "key7": "29czyTE9jnWENKjeogVYEuzEkH3LgCR15nrBMpr9vie2pCD57EwCtST1PGKSSRgVX3fXur9ehUjeJPHkW1BqRPXa",
  "key8": "4UNUfXLKfMRa7oe8c62X4GeztcA3ktRnazJ4nxor9d8vsQx4xTSVdN9cGZfCWWmXSK4jDgBJiLHvDU8ASS2uzSrc",
  "key9": "vFxdAN5tiLKLdmxx2mUjwcHip8dwxB4jyJuSpeCoRG3iGDGek4k8xrmkhUQDpuWgCqjeSWqQFJXSFFognCCtXdw",
  "key10": "5A4s2mwFFLW6ewxPXcgwU58XPUep4k3T5tGjkCUbYmo8fQECXfis2d7Dhu5dzR95iyEk6xfGXmEYNXL9c8U7tNMf",
  "key11": "5W674PQkyAehUiPfrSduT1TRBG5eLnGqmQHUBbTnMePnHN8Eojr6RAF2S5b7NuKcaqye8T9GTzJVbZx74Y1T9nz2",
  "key12": "4zYnsqXRLEKjdCLVNBJtv8sUqRrhx5qZcRysfCRAHWeEjbxPKC1UL9iVrYE4PEkStvfRMeBfeSXvP7PKMWUKQrDJ",
  "key13": "4Rj7sG2xjDcAYnNtXeijeRJkFPQ4HKk4xJHFHqSL6mRYxxNdvMceZRqh1Z7THon9673atXcXTiy6UMMPG7Pngwz3",
  "key14": "5CMYQucHePxXyiTS5tmQZ2FPt59TCgDHGtwArMj3yVu1U6Nke66t4Z7DugCX9L9vNzYk7joPRDShqUqHjTCwYsoR",
  "key15": "57oFNiKWerZoEDTFuAcYrpqGecYWL7LtJXS2VP43q3HJHu4993GMjPEbksUG3JBq8eREszcvL8x7Efq3YvKYwLAC",
  "key16": "5sQVSpkdt43G4eckdgJzTawrGpNtPsEBrAQvNNLznVgn17w7BzCgW4k4oRx6NSrAYWQxU2EbfseLRebJEgkq7d85",
  "key17": "hSrX4FLLASDBpqqXBhHewka6RWSJ6FTfbNT62t4cGZ2C3jyqP9foXmX5AqoTrNeY9mMG2UrEax4Jyuyp3Dp3PS4",
  "key18": "LrkMZJbpSYvcLKLquwuQ6Mg8cLchoRPGo5FAoKBEgsdgQ38YvmS7jNWHu7HCPn4R61zCSnZGUe1e6oLJDJ882eQ",
  "key19": "2vnakq6opt7R5rbWLPwwWXvvWUfcWCgBiUzXbbsXuztWSTdJgqGhriiMWNTYKQqAo2vQgfDVYagMooST4pjvXrBT",
  "key20": "32j5S6VRAULpEDUEzb16zSWdGEEWaexc7o3Eev7gFNsBFuH1i2ZAitMAEM1Q4ifJ4Q1FrngujhSAP36Rj4sMHF5i",
  "key21": "2GgjVnGoH7BFSJvirdRm75E6MhXgjE5bhG8PkBBh4QRHMnjAheJHNeL9j1PTgY7y3YDmc1hkuBybyqEdyVSnQYY7",
  "key22": "2zHjLULkqRfY1MPtgsuFMDEKazu91pSrHvRXDjCQQRJdZ3zNBH5BN7xdnT3zy899FRLXnDVoavfVTHQ9CSAoyQN4",
  "key23": "B6ESaVbmQ19aAbWmRFNyy2PxHxGwCSe7Cz6NraWAAax9SAEiRWKVsF8f4RaKYPpCAgok3MPKpWpSZFXWAZ8k9FW",
  "key24": "3J4ZKxdaPjuxr6SSAvSEubqJaSLzcyoesJ2zA3EiYcpUHUs8bhwhQBF93oNhMuCzc2KVe4japMSHvEfhWycVPNf4",
  "key25": "3NXhFqHgY8QFmN5s29drsja6HmRTA3QmpaFfHpAQhMehe4zB9iRLTqs54W2fT8s5WMko7XXNfHM75sMaqV5E5VL6",
  "key26": "cqHvRr3kMNiBuEEaTjZNqvyAqgs6LeGFCGUnfb2AMjR8ZtohSmPX81j6mHmZ5M8GgupTErrJBRfHx2TkUgxRrNP",
  "key27": "2uRdQDBF4hD23nhLX1KqfkWDqpiJG53tZqifjqjApHERdrSpuHdfmt6gXrMy9tWwSskuWJikHgQQ19iHtTcc1bWw",
  "key28": "3x1dMVp5hRuKer6N8TT34TsxspytdY8t4a2Xbbt76EK39chvX39RJSCheDovsd9eR1Bu9eHmn3QffdMKusp6bYPg",
  "key29": "27YnA6nzQvbRcNfdF9qzG1n7kubQmd2zX9ssdi1aY9NqG3FUjSf9eAPpBYaLMEbxNjccTTURFiPXSgNdWygxWfwB",
  "key30": "2sFKXL1JHLbWiB9JrPfH1oywghjaxcc2FpdFRUbNLmuRz1gLEBRzheo9ReFmqAGGEKZPveqVDNDrS7WnFD4VNDhF",
  "key31": "5RsofVxPwFiKYp5a4VRdiSV6jN2vAaCWAbajjj9FFbxz43o5EUE256okcQyiRXp7wHvNRvc4gitXcABD7waJ742E",
  "key32": "3KHmQAS9xGdptu2sEYBiDc5d5q4jA6wNnfr2NhEmkuiD1LzURaQHNB4twvgW9i4ix89SVQbos61V3EKS3np9UxQG",
  "key33": "3eDo3vTpjSk9qDBQGWzjUwR67n9oi8n71wN2Z1vnHxQPx7hDCjYgu1GbnRbpDxFbsqWbABZBvJUy3jHuqAvQekd1",
  "key34": "67mpehLs859RfHvUJyAn7qMgWJfgdBNpkirbYUFgAUhCfbaFVJCJkWF6KkTRHvGGjpfASu299XtxAE1bet8z5Nmz",
  "key35": "XahFXqaTB7iVG6HWmNah54bqEk8WzAh4FdvfNbL8YqERdZGUBgULUA8mmwzMFRUVNLtcviG7R5MjMcho6yXvkFY"
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
