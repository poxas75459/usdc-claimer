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
    "5wKsVu3pujZ3jLeeGtKpmPwKQVeyJFYJYxGXFeqVb8UtVjjZ7XDwiGWgvLNSes26SYpygbRpW2RhNwpD7YZmmJhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5fL9YLyQF3imgJBcimFWJnoms5DDB6JmzakbYiJRKh85vLUECGtvqXuRMnV91HwmSXWFn4PfaM4o9BfoVLeCzi",
  "key1": "4whRwnbARtQ3MJUJkwqA595QpgENNHMfMn2P11sih5G4dCpXK2F7bXHPJzYVxrP4RcPUZ6kS8BqhceUEDccgHYA3",
  "key2": "5GruH1WRocEE5Nnuo8CqDZcV5ea7H1pQWZZHwxjDzEeaXuHbTa3aMPYW4mh5L9fzmdxDjVUN4rsd7h9rRfBuLLFs",
  "key3": "dQPGmuPATCKwj1RXuFDg5tsWBRZwEpjBtZ66uJChCpGzPmLz4Tu8aRQYnC77Lfo4XufxUHTEBYDh5W3jJ2zC8tk",
  "key4": "3EmQg9cnvkRhgd2BjdVD38ZzAPQZkjGpRGisHiVZMh2VhzhayfupkMX1MwAu5zt8jfCyNrVZrt7ig2h2pFTdeyqY",
  "key5": "5BzXPm9PEK3dJf7pZqDoncufDNfmNq8oxUSCyxNSjYgqSLLGUAth16SY3Zhphv7ihoPnGb8TetvMPept7BwN3kab",
  "key6": "41MMzMtQyyBvY2DBAjMQp27mqUE58VajXSyToyi6C7fgcgw96LBTjfDCwCjNGb8K3J4MhFzAcKkVtsxqH6NqvUKv",
  "key7": "K4uFVqm7qYrPD8dTDR5p781MFmENQsa9TWPmM45fq4fEPYi6aqopk49sJfoQBKtrXEXt8uVFUH89QF6eSYg9ohA",
  "key8": "2Ce8zcpCpDNH5qXYidRESGGadxHBPrgyFVTC2bWbaHwU458JGPj1Abztfzz3LkcKgPwPgxraAbjdxSxb1tEL6aop",
  "key9": "2GiZ66VCe65LmUaCkEepn9omfxJvSJHaewWnt9CZDN5HMadUq696PtKfEEACK2Cc74qExtJ7n2qGger55N7NmqqM",
  "key10": "5mKuuvTokkCNSp4cjdzwte2hXFS5JZHaMurHaUaU5ZsHtgayjGPwr51c5MveuzqiGyxqQVM8NzueyMua9deCtxiY",
  "key11": "5i6JwyVmHYdgyFVNAgGi3m8eeKz9AZuP9VtMmVaWTFjk7iSiN7QJ5yzRYtK92yFGPoxij3MJXpTG54Jcvs71Tvnv",
  "key12": "PqkobFLG5ahTdHDR5Djrrwv4Hc9fN6e67xj3htZ2GkDWneGeQkKtat7V6XR5taqDx5yBHAEHZv4AoQ92EgaNfrk",
  "key13": "62HKptx6by2MfUf9GKVtNG5RNhM18tWJWamC3SYZXMaAZd8AR6PK1QanxeZxgz9X1Dn1dxM4tu9F1bZijU2LouY8",
  "key14": "4KMEWPbbrMHsULoX4Yqy8ujDD7H6sS1h6imhs4pER7UNWsucuR3ZmK76WFR1iTDpZCkYaA2pVQUi7ei7VyJQqBG",
  "key15": "3QzQc8viLpM9k2V2M6UffXpSZXEEGHQns3gSQiJ3K4Sn8wHsmKDi1CmmBkkDhnju2LBBEA4d2wa5hyFRnzTMxKK9",
  "key16": "3vE3egreJj1iR7um4zP9nTHeJeUhZ3A9pjfQNeMhVDuLLCfreuHfW2RbXiGc1rWjKn6v8zTspa1xEjesLStNtMzL",
  "key17": "5okzRmzXxagPbLFVq1L9xFSYAMVWjyqgKbyTH8sNFiX4XQ5ZryHmknzURbrrupqjRj5nCxPS2ZJuxZduhjZ3eBmF",
  "key18": "LRqg81HTZcFzTuXCKNs76rf92PQUtxP4iTJ12mPV1FcAm5odAqrHvZfbFddk27b1KYZGFQixaQx2STwFhwr57bY",
  "key19": "4PffSXBVsyLjS8SGwy6tFYUP9x3ewdvkz5LnmdBGXhWCDJrwmBVB5bQbKb4aup7H82MhXAjjcBVE8sovmhF4mhMF",
  "key20": "DdJ6an8voM6QkRP1FjarCt3qVf7HyzAapMFMAP1K1C7J8mJsuaURV4S7URgtzmTXUXkSeZLvsGK1qpCEUH7WW1b",
  "key21": "3TT7EWi3dE3EKpqmsWz9eFQMrNr8PPkGPZ5tED33atqcHejSVFAVpiqPSrVmYR4tBNX7AuVMa3p1GEofcuzzkANZ",
  "key22": "5eUjNPaf8T2eJcF4B26q2nF6bFjPTDYTpJHp7zYV6JU7Bzt9dVPyCwTiejqdF4qymNbKDNXeRQeQXxpLstXgK6V1",
  "key23": "2StrYhB6ThVerSdjiPBvE8T2jHXFJmim9w38zTrnkD1FFjRztQVu5V9HZXPjziKJa5QD6J7rTxrk4ju6gy97SbKY",
  "key24": "mrF7aQrRWH9tKAEvrMfrtRP5V7By7yKves9nVDYBcYNASaRArmgpuLVQ6AUGKinexdm5VHbvpHb2Xrk8ouGgKvq",
  "key25": "5uak8j4baVkYfgFor2X5Zy4qbPiQZ3Nvd6kJ2UgcApEQ3SHdLhWSE9ZLZFmNWHTsNBbQnFBuJJhoFJgXt4mz4yKb",
  "key26": "5L2jUSqgUHqLzbrKyNvsqQxKXQ78VCCqLE56rGZhPkpJWkmrw2Gyx5GtzGrQxkYEcMSxYJKQ9KLnwgkxpoMaSd9r",
  "key27": "5XVwarB1BjoUaqWk7JUAmDwnXtbcSnbUphoiz6gxyp1ZzF5y4S11f37mqGMFEASvwzPHuTDj74o4JY5xfHcWTAea",
  "key28": "4JBDsN3zgvLmagjD4ytUPvji4DF4gWpJGu4MzKMm5qgDbZKGPeGBSF2dVSzAUNhqDFnEnS5EomzDCDXUjo37sSaT",
  "key29": "5uNoms5r5vaRLMGo9fJPdsdP9bQPaT4uzdjWTtREtW9LfrcJQBpxwXo5rpwaK8HFCmsymneUcYz4tf7sCRQt8nev",
  "key30": "5YoF8tKVPXTGNF2sFQ4dD1C3Ph9w9fZE9MoeA5PL6wV56iVqjw2kXJ1e2tFfMj2qk4pCcAzawUgKapPC4b1xGFRx",
  "key31": "4iSLqaazRGmC9REJtdb1iQ9ZKBJaU3PXFguFmWPFcnsnFqgXth9iHzuYYRSkFydqMMwD1AYzgjE1VjPAc7fXBear",
  "key32": "2T39KfDAfqrqrdQSyRPUdG16W6n5Jtt8oWRN9jPyRFTxYs1FRoKQ3JFD1Ajj7rVqhds4YxcZkaZbdTrbW77F5jfL",
  "key33": "4ZsHPBF7FPkCpQ9BbjqjAVrnZhcekdLPVPtpGxuFjF97baHpXdEnqA5uTV3FroLnEZqZxfsyobUFECAJ73HUmH87",
  "key34": "5JfDiVB5txLrVfmBx6N5q9jx8kuS32JdFVp1WmtHAnF7GdArJVcJAAr7FTESQyLKya6oUSZa8x4eQkszHQBbYdxk"
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
