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
    "24G8nmQzrLHLQ4BnFmhzGqzzZVTZ61ugX3eiRxmDoCiBjXQ44o3Deg9KnupxmDQE4AsdHhHAyxgj6F79WCcmfgZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToxxdHu9GiDS4JkEfBkWTTLrgciHPzTnBzA6pMMmAr56wt4iGr3X1CJ25LJdGu9QuGeubyRciawmjDVnrDt2Zum",
  "key1": "24zXyVTyFtBom9k2rh5m7FMHwxZLqN2tD3PyQWaHPaXhZ2bmytQYaCuRmjvhmff6WJqgJ2fCibzTv26QsxKQT4eN",
  "key2": "2ZZAqAcVnmqQjPbg7uAT6wiSh8AwQDrTAA26WXiwK1EDN4iPwaGRWbf3tfFzoMJsoreELQ1ZgC6HpUwhAVPm7VBA",
  "key3": "5YqcP1RuZesk4Y5ZoZyEeKvSaf7WzU6opfGqbgHfmAuUvHk1ggkefrp1ft6UQzzfXvpZ8de9MiyH8HYpje5NBhK6",
  "key4": "3pmgqQcxAeTQWEtDkuGeLCpArypAJPCPuM9F9yqpdFYsPk4saEwvzNbHqNcGVRGiTSXfZnysuLdVL8ASbVJvC1dP",
  "key5": "2gwqheGfDLYVJCp9bPhPcQ2b1YnWNVNNVCJ2dWQeq8ePPB9JffGM38gVEpLX9YYncx5SWhX8tqz74VyVkNs69Gff",
  "key6": "H8PNjDJEzNTEzgXP6FwAEqbrr5bJrh1FvFUNUPXaXg8cd357czob3N4LCN1cBwKEGvLGZDTauLWY6Jqb2oMkqpL",
  "key7": "2NoHF8zNd2ftoun4fLRs5TcprY1fUe3rHrLNpojDHhPfvxcVgdGn2bn2RfK4qSweXZc76kLY94ZMy5E9hz2T6srD",
  "key8": "3E6MnDAKoks7ESfgPMb4JRdbLeEzZR4A55adUwqSQKU5K2U2kgpFfYRiVVac7EmqyJatVQGStQMv6oNe31dWAeND",
  "key9": "4cg2TyMiaHpGCt13d7ogQcXpinckjc2x7m8rHS8zB6oNT8TkRnkELNNpaR143K3tapKjZB8rAVi4igZ7XGkYAkFm",
  "key10": "2GPnh5L6vS3VNAPTYF1ajHUjsnyogW5UeMTLVR8b8fPFN9NNR9Hube55BpFWkbpiv1vfYV7Vxm3a8aYszwoKfmDL",
  "key11": "dw4BXcK4CLBbPcDt5daQLowqMbKLKnKc3z41EzqEX3AhRyQxz8RpPaRMtusKn6qGokPDEGVUx4pGxK513JFMBb8",
  "key12": "5xLfXKz5YWhDK3xsUeidnwxWbfwjqF61ZfAAqTvAdbY73jDn1ZvdZL3hfbpwXzBDeyw15iMYP5ZEPwAVJUNdjqwM",
  "key13": "4Hd5SSZKv8GKwPQiYWS6ASAa5Bo19LLpd8SbEW8pNuXrKcbRpGtmNfZ8bcXBSWDm8F3PkjrC92SsYbMASs864pBS",
  "key14": "595HDAUGEyFk7KJ3AmpXdSuKPkT6YNCik1HZiC6Fh3GKVzB8F7sJpNbSfehr8RQXKafkVNe5BiVkiVhEXbZg7C89",
  "key15": "5EhBCicvP1gHTMurpUMqorfmVosDCwCToDrLmUnhYsLab6NhhGzAREEwiDPPQHoSPvBHVBkR5Pahjtp6Et47v8MB",
  "key16": "4pa6v5DymabQMcKCdVMeoCdPwueTEqaX5Gw59PEhP41UdDEd35H15T3jxr33kL6wDYLNbs3sqqZEF99qfwR5sJHD",
  "key17": "2uHQqvV2CEeQTsMNzHmnTWgfpi5we3NU8TjpS7KbV7gyzYhHDfGdGYerPhHw5ZH8LutRS4mpQ22iL3wy1odvmvAU",
  "key18": "287HNSWhuUDVnAegLJPmKFeZb3ssPh4LRpcpBZWepE6hr3p6RLstRtV7ybffknBCv1dxmJWBinRNE1PgXMcUkzfU",
  "key19": "4NH4xEF7hYiHRpyyyQoVXYWifbx5meuuUTvNipFyKfanVGU18cbPVnBMUV9nSk9Me82Qwu3UbRCrfyH8tLy518Bh",
  "key20": "3aDen9gQADcEav4vfrVpNaSwt38CtKp6FDsz7nYjJTTSd9ynmM2C747hSesXGLng2AbXMvH9oRFGFvjRFtKqMMjv",
  "key21": "3pzo6VsrynD6mYH4eeZBw8ho374dLEe8nzmfhUjqSsqJFbja12LsN6jXwKNoRj4q8oZUzEiJbXmH1fT5hTXnnrNT",
  "key22": "5d9d3Pzyb7LyDokFoXCmZ6e4mkWqg1CgdAGBydek13mZrj5VxD87vMUZKNEzrubQMhT7wp1Cqp9itDJEQi24qviu",
  "key23": "2c24AGXRLyCLhCkGSqLqogXNkFzMQkhJ12VmVhj2utUQtAWfuh2AKbsNuitBH2UeTX5WytuptKo428zzE3q3oVkd",
  "key24": "fRbWRF9Znr2eukqFznoXWFuatHoAM7yHSBirrFh6RsxZqCjQjME21ZpoXYmr3FEdBHBXgNWQQL1R44ZBEppE7AJ",
  "key25": "4KJnENP5HJMozCAvL3MmV6ymGMmnvuESNHNCn3iYTUoCFww12DayCbZ7fA5fkZEfNQQNG8xPmG7RdKKEJUCC4nbe",
  "key26": "2SMaWUv8DYPYAUWRHTqiRfm1jk7kP4VNsGG2xae7vXnx7mXVh81XSGTFrDCDJzqEskXdzu7VqE6UT5nFeyRZuUkH",
  "key27": "28YcnM24zTb7pZ37xFkea3Ax8HwZttKaSYEzW6qrRD53WhhqYvr8DAWSrBr5AfwtYe9QFdCmnLmA36nQFQqrDJJZ",
  "key28": "5DvQUpk8FL8YZXCbo5pPi94Kedq3Rueije2nzMtZEEZRwe7TJ3iy5RXYYNwZK2Y9yCgNUeeDwZnBWddmEkTTafDv",
  "key29": "59goeoFvdTLhQWhSGgRiqJsECBBtGk2WZW4z3ekUF3zp4gsLCMkx1551Eby1hqA5CJbBdzSMnT9THzcm9foZGzhW",
  "key30": "3ZcfDCqNbvrJ4bWvmteSgW9RDwAoNcHdFu38bMT2443nabQ7SWSbkoGs1ToxS7WzYhdhSGSTpyQ1aDCnuBpvKREx",
  "key31": "4hRLX94nJBJJidokW4HyRS7B8VgZZ9VEKhSML6L9A7uo3d1zdRwmmfR3XaLsEKj2F6dLjZUfYKJq61Ny6ZFwJpvX",
  "key32": "66Uh5jhS5CSQm5o1MLxDXK1TXDfRtEgEfaCKC2HqVkdrTt8o6EfPxZQdTS5go8hUS1HvDNh7bAJU5sSFmrsf6QtT",
  "key33": "36gxjbq5SugPqvPqa2VSyARWkb8rLeBZng2Nitw8ESYaEH9wJW5Hx6rJaDF3DcNLbSqaagkyEXuC28XvFaAwA1ip",
  "key34": "basRXWeuLKbXkHRYHYRRqaFrzGTwLAVwdL2KSjmZtYhMeJxYc5h3FEj8xfHeNTosJszdV9Bpzrz7BDn8DQEESjS",
  "key35": "5nht9VnHGm4ojQ8iXEZsRB7Q4aVjWhmVAkuc2uEBAB9iWFu6fYWVWR9i9TStJhFwkJriRhwrC5hjbpHiznp46Dqb",
  "key36": "Bu7EZc7JiCyoi6Tf9oJ16TFshcuDD9zbJx86huW4PEa48hpevgBQRiagj1V4XTBQhqaaNqHYJBfaqDTBC9igt15",
  "key37": "vyZYqrnwseYzk5XQP3kL4wiobzhuUgg1XqiHyW1YN9Mmb2W7wn7rhFnWdtjerFdSh1c89jhKikURWtU8FdJRpVm",
  "key38": "5CSoomLxF4DueWqSayWJZzuHciSgESt6zPLAsMxeWpmoB7RBx5pB5hDxJqrUCw7GmVmhWe9DDuVGABtCKwuArHho",
  "key39": "55F2FStRxLgRyEzANd23j8NZgr2pFriTTSxji6X6oMkm8Qns3MRUxUgWZFt9pEFSuzdgssFTwesjXK5m2R3aLbbZ"
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
