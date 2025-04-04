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
    "3vPzLT75ax1YDcMd8VcwQKBuG1wceqdT2sMeT3W63mvGoShSXeTmjzTcW1hHrQLJdgxcuXM35ZovVsj9jmpc3eVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyUvJ2K6r83ybN2bz92x7AWa9eTL7UsCFpM9eRp3c1zhK1RjGrQtfpXM4dtvjYEw1C58qRjkrNbqzgs3ZpuN7Z9",
  "key1": "3UANMzFyG2G8QAiHDC6siQQVMd3RtSMQSCxLqE6NjyeaUdTsqxHw8mApFNk23SpzoUp3xiHoyqPMepCAMy8ecAD2",
  "key2": "2XLm7ZawMPMPzZnACCmyfX8gCcipbcL8RfcWGaVebE6xDvxyVs2SRPKFgijXUD3Gs92To6muoWqj48Cd4Toq4Wz3",
  "key3": "srj7w5ET13HDjkvsmDDSpio9u2xvZq6VMUK28Lhy4j3ohQk7ec2rWBzoc7bRLR2k557zxvcaxFQGpBpZwByuQys",
  "key4": "2MjJaUgXGTsCLXoRe6qtjUBbLnP9QKHjLxbyikpMfs6kVKweP7TjYYXeXa9cbzTURj1BHVMvjZGw4G2tt1uMzYrm",
  "key5": "3yYbGCeV7g7pDBLD2anBSUtfMruQ7sRsLxWaovss9ytoRSUdXcug5rL4xcaPKAaE5gkP6KhXoTypaEEpwFD9pwEU",
  "key6": "2LaGXzSLtXaEgBrbVNMFz1vLpqFxx4Gw4ENqH9gygWxwqgwUfgFdBZ41fBdYhWukDQgBkxX5SQXcV1s9Uw4pFoa9",
  "key7": "4eNhDtwPGjjAfgjbRfRf2MueXzcMntwJNvPe1kLhLbXucQfYCPqkhn5iHnDeZarbMCMrQizFbsjfBkRfpRbz4eRy",
  "key8": "2hhiitdfy1RSa1kRmmpxqRnxbay1a8CQs2oGTdGj3SqX2iQYzsPddarRcKHnN52pDvfwWEeFznDhM1iZNaeYMnbb",
  "key9": "S7zRvLmQED1w4zeY5FPweHvUMKcCrGYAkRodRgwgQdmeqE2bhm9maexEZToVAC1rU7UYSVNkdYSVXZz5QsM2CKP",
  "key10": "3h3JUUsqC4vymoA3jZsSvxNs5RXKyJPhXUFCU4Axg1UD8LSM8UZ49oamNY3gh3Wb2r8Rojrn4K5syufe5wRhVAXo",
  "key11": "5x8UVHiJr2t6qHwMyY9awCRjc22Ta5XzQJbrV1pB6jBoziirf1tj9hmRugouEZrKYX8JJbDg5U9vkwTRsLECktC7",
  "key12": "5AWxKzhi6LWcsnenvfmHxRz5NCTx7kiVrEa956SsNaJZcqFgUq9Hj67B3Ti1EpdZw5wTiPDEbMnvdSZkeGWjibpo",
  "key13": "PGGSxd9kRJfCLGdCZCgbnLhMWwFSWHGU9QsaxskvpEvg2jd7uHCbhKoKyWcRwig64C2VMU6tbCJyqyFKCb7oC7z",
  "key14": "56PQ496E5E64j1TJQx5wdxtuVro2LyT3LzEEhtxsR31ZPRuU1wpY3JBLw5z1Yzt2LuXjX3nWxamhNGDbRGxQfJnp",
  "key15": "GA4zRgx8BkojfM7DU4kRKpFyLyBxAa74oGmtmGU5YXwSVxF2AUjHVBt7nwgD6wQMZinP6UvJTrreAqkDwWKnCLU",
  "key16": "65tAxiNgz6m3qrAEC8y25Lafof5JLDaEnM5mAAT2LxU2AGQnx2h6o3UHGk8HtuQCqu6iQrpRZYfXVPuGgCSMRBtK",
  "key17": "7JG7sb9tRsd6SmgjJ5zMXrtnVwdzUwXazdLMJ5W5PKNJbJPX3JJ7rXnaz38F4NvZZ3Qm1ozDHmPToYdjdS5YDkP",
  "key18": "49FDc8t1ei12Ry9aNMrgj9DxqD2rZ1NETMeKu2KrbYWB58U3zM1hvAiAycuM1WFU5Kx8DV9zMsiaTCniUvAEhwxk",
  "key19": "WFtkqFYCKYv2JcPNzES5NhhF3MCSVhwBwUDBnPxrcD8h6Pbi4nEDwyaUwwJK4JSaKnPhhUjEmb84DR26kRiusFk",
  "key20": "4offeAq1phgGfrq1i6SEu28ze8zHbPnc7epPvER7vPXVbbzcicwfnSYV5iTPkfBRcwGtYDXV7NSYhUqBaxqHo5Gh",
  "key21": "3pdar8LY63aS7HfD1e7WkpG74UaXk77t7G4x9UBiTCSFdspMuydoKXrFdin71GEmaYdxyuR9FvZDrf7PzURt4QUh",
  "key22": "2AEtp1F17yGx3gVGnWiEuZMEazPXnsCRiDfrZJoKR3o9eu7tfUazsHcJoqTx3TpfTmzemBPzyyvGu5UrF1MoX3MM",
  "key23": "384EEWcVyiPqbNWoyUyF1eJbKYenaJS3N51PYottok6EPwm7z6S7GrBJ7vdkMPeWz8tJgB1qvB7DS4VkcgJvYdJL",
  "key24": "5TXtgeWwpkgTKEYxVqkQPNocUfcNwrX2N99VF2iJDMr5ohuxGRjTmRFiC8HeG1Fb57gAeTwGRKrykXsPtS6ZE3yB",
  "key25": "3ScnyzShDqrUKfhcKxUEGm3CNLfVPkQAWHxGnptWST758bQ3FqbdDWV4TqUGgCobpKqu3v8XyjnuER3myPxaTpCe",
  "key26": "N3hCqjh8Gx6TFd5NkbTtRy94rVx5xsgoWs4czVY3GddBoJLwzdaXauAgxdxDjUagL2WudQX1WMdYTqt3JWFiN8u",
  "key27": "YLRvge85rwZ8ag12Q1mNUsVLLmKd1rGj2DBdBbEvG1FdXP8n172s71axKYKKh3zE3Eiwmytm8E6SMp5Vwrn6zmT",
  "key28": "2ZUk9LYb13LsmXdt2NyNh8pvJPGPzY2S9ieBXigkYoerVc5ApcWpmRJpaJQNgmXZft1Z32fg8TmgKt6shbehZkS6",
  "key29": "K32SS14YfutJiYH2SKczjZ8JBag6HAj1UdEWmWEYEUYZDM7ofT2y8AZf5dJVsLLdAuTZoDxQYWqhM3EeQgpfx4Y",
  "key30": "5YeWN43e4SReRD6SnLPEKbr6wRbswjoU2KXrjVbMK3vr1ak6Aeimkuj69Qbq4hvZtRDHQvn2MsANp9CjcyxJnr5Y",
  "key31": "2UqTNwL9br84gSMk37aHQYbmmrUEWgxQ2rMYzxDBByFEXcuzuFCaeCi2CbRcipfsF9m2WbxEXi7tkSJTxMxKiYQj",
  "key32": "VmnYgEh64xpoi2QkfHAYzuypKythTDb8Z5jpySaR6d4YvVJWniiCqhjUXtZrn827XzamT5tx89DZdNWBwezajt7",
  "key33": "2ZxJhxnwR3dqFvjPbzts6UDfgdgkjrhgy3tSz1oMZVvSVA8UZwNebxsTKcGAenMqKeKTDGF1QPBaVAV2EmDyPQwk",
  "key34": "5Bbu72qZuZM8Y7A7AThDF8r3FHz63wrGeYwP921m9yeSMt8MnJzG6nbxfVq1uC8MP9kJqbqjbRukpFb7dxLkaQio",
  "key35": "5Gt8uL7jy42fQBkCvm279jCXwwUQPhg8V4bTRhsr9su1Qv6d3uLNUPvdjnZHtgsK5PiDL5gbkkrxWSFDnSmoSg6S",
  "key36": "5hyGrWvpNWH1ksNgCsRW5fdEsx5s31TJu7TxkBqdytyUNk55vrBfhPVkcrpE4TpFnhko8EgzmvLHZ8xRbvLgiqPq"
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
