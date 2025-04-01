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
    "3RQ3LvnKtebL46StLfEGSUmhUYDSTRqA96ntw33N82XsrLKJe8uCw4tDmRGSYEwVkNYzABQVeaWRHqbq5LQNQv1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KLBeCEbHGtzMqF7vgK7aTxbRTRjVVAQrkddFzhUxpCSqfQojdLy2BF2VvPvhZFZHa3s7bh4rFPL9bvJ3SgsxaBZ",
  "key1": "4xjzb5fR2zjcwQARqcjAKzgKk3s3ZX8pyeTzmCPYPh6ejXdGqpFGg49G4BHqJza9PNdZ22mHKUADKL6crpfAtWV1",
  "key2": "4UhVHoBe5m32yR6gfvKQTeRdWPhyUgt5ZWVCpbtoojMsZghiBfsUuE1YGE8UDd9QYa4Vt4kUqp4Kyto11jbY24Wh",
  "key3": "gb786DxGWvesATqPaRHfiGcN1KnMXP1BQjDvqBUuJGR4LV2TmgWyfQMdpk9GfUSUFKksrvxsVEZVc7AkhapRhfN",
  "key4": "56vVsd3ZSCd6tBtyhXhPu912xjv2xabKzSr8hzyK6zifEejuuYx13jontcxu6ZakL6UiLgKRGswszK7c5ZyctELp",
  "key5": "32ELPyquRGELXWg5Chzn5dUvi3LED1kMSLDNe6wrfWoxk8uvbG93XFodRBgnQES4dq5zTn5zucYWmkPUHimjtntY",
  "key6": "2fn7E5PCr1ykT6WYnf6VLbmxR5CNhruDtJTVoC4Km1c8A1Xc8zQtzxRKANSByRKwq69gpzpf9iZtSSzH7Wr3BQJD",
  "key7": "5W23viyVV1uBRYxtPyegwU2yKNK4bbgMkJy8MmBk3F3n6nWMnP9CcvZ8iPkRtoNzLoqqyBvyP8EqnB4wADf74uaP",
  "key8": "3poSSx9fFn4vpMRtYGcPaHPEN2Tf141621rLMn4UgrB8rBSbrtVj8MAzHuXQzrLdnYweCNPuvygMW5BpjFkEyMLN",
  "key9": "2yZiHu5PDu1gh5B7qx9EBvsj625dChDCje8tZM1rFVZXXSABETh6KLgW8ACboBx9g3dDDz4hoQCMw8ZMpYkrWeAV",
  "key10": "FfpeTov52QX93TxZy58SZ6gpeWaMDdL8crhZ9S7nakEXptKxh11c5kmxHr882LCSaZYsZRs76GW6rdwzsFR6WuV",
  "key11": "EPiN1oNQEKmWSGunKNNrhcCPj7ueUADK6xPwfPM4gHjy1WjFyDD6eHFooyrqqX3DU7vQz2da31LxQ6vjrJVXpuv",
  "key12": "HwoNLTDRiwW1zXYQEPWVqb5cuuapiCCPCWXmwme5sVA9jTCBeB7mmFTjM825on7KiwpcJvH6WV6noMsoiLTogdR",
  "key13": "4M5jpLM38zTZGx2VmwxAtkZU6c27ssDiusvzW7nN24dSt3D16Wdmi5oEZXWt2qvTuayZWSao251wVQAP8e7SgDH2",
  "key14": "4YkFy3o2EJ76hvdrWE5ET6ZML7RfqnAxXX7tzgTFYzXAerCeYo2cAgLNNQjL58PbhrvmSBh4L36Y4aCLP3LqyvsM",
  "key15": "2tmksYVENFVHVNQcmUp55iwrm9cboZfEABUYyGDhgbdJKv36tDEhbqtkhqmp8d7RxEPnYsiWHG7rsktkimstMHD4",
  "key16": "62pyq58CmDJX8U5LuDVZfh45gGrWyhgGNaggJgzYheLnd5Ht3UMhmGniTgopKga5RXm3V7cYMBVpXNfDJ76RH6Na",
  "key17": "2ZTB3GajEAAefqDuYWnFmvRGixD1AGo87Q8nzXB8J6j5iqqBSkfPdx18kSebxj7LvJxvLn2PHgLMMbE4maPEY26f",
  "key18": "4nU4RDni8vr98vknKnQKUXxJnGKycQ7DuCVcRxwY1TweRzeLF1mR66pMFPsqNa1G4S31N6QQjKdZTSi9dJjpfrDh",
  "key19": "CvtLpsQ5kcj6q6iiowXd1DJ4szPeeFaUme35np1z7Phsn91d4TFZHiL1uSA62rWxSvGpP7JnwJYSCRL9tvVJQ2H",
  "key20": "4NgGNy6YqRLMxxnvrNutckU9GwSHY1gD7Xjim4iaQSdgmPjRQi1FCtgUtpeCbqD4oB1ZZu6t322zEBwzumTWxxkY",
  "key21": "4EPmYmfTpqRMaatd1WgCF7anQaBkY3KiJwKegpS8gx7f4Tnh1RnwYaYVN69sr1V9p8Q7f3HFgMZjxgTu129RrzYd",
  "key22": "5PZ1rt7fbsxyYMqUCLTuANZrW8pHrCW615kBiK3PvE3ggkZEuP5q7D1ot8KWNg5Dc8X15XnLQVqoMNV18faZ18CP",
  "key23": "66u7PsRs1NP4gT7Bw1xKGsuVcV53TU1LBfxcvtZHPu3EQ739kn8nseNaYDmzeiLUqCmL2FtFgi2NBV8VG51gtocP",
  "key24": "3gbL7nb1b9NJBrKQSqXbimCQw7YH5dideNh2w4J91xSBawrTmRpFjGNeRmiGs3azJLf9D1tVazZsV1Qj7vhKuGPM",
  "key25": "5r3uNsUTbMuzuPg1S2pyxnA24kPyE2hLhm3EusiibduN1xbi9v7pzBPPSFgSWsaFED4nPSWefqG1vT8ddndFt5nC",
  "key26": "9wNkumkjW6bkRDtYRPcJHEQ8vMziXLFrgC2ojuPx29riWLCdw3Q1YJ3bgeXTbxwy6p29wh9auSw8Mw7xC9c9m19",
  "key27": "5wRjdJifh5JhVPSQxvxbwGtmDx3WFhJdXtY6VnHDW8dgHX5QMc7wCUaBgAx9XN8oQGfKQnVr8s7TbdJchf9dpFHu",
  "key28": "3SPDMcw1cvjL9qfDh6j8YVWGvz3mhjM5T9xw3SZX32NeoF9xPeLERZa6kMtXKdjVA8LcWDjTXQg3fnnCbMPc5XPB",
  "key29": "4wiaTEgKSWaUnfVFpm3nkA3VsTMRYz9hK5jZTga8QWzfeyV4oN8KWHDwcNbGYCKpy6UqDTsZWSJUv9F5vxfvgWqj",
  "key30": "3rq1Q2hmyC5VQHDwVmGxdeJcY49ZxsAkmZ1z6kN3Gbe65qTRG2z3K34CCcz7dGYb83sYFsPyiPYFHpd4HQipcr6p",
  "key31": "3AJb9mtpVSXK3gJu7kbtifLMCQT3rrQSLMHsyUHvBxXyEvEHTbUPLFcqMNcKpgYM2sKhNUw2Pof7Z1mRhkDVqQjD",
  "key32": "fWrMckJ2XC86JnQ6ynnY9tRL1YC2hXUdF4WESda3GYnZXh2MwtXUb7ubvDuetVYoo1tEJVcbgakyjrnku85Wyzn",
  "key33": "2UvbSqPkTYz3K7ucBUSZUE49beD3R3s3zK7G1g6YQ4dSwKfmW3M75yRYNfck5nuzFZRvazVNL8w2ukQ2tzxsomwD",
  "key34": "vb2z9Bi47rVh4buDKPXM3nQ3wopZTEMHuCdXvzUMdNHFhC2yREfxxA5wG1Jx5sLvhv4kTp9BJN7KXQhCEncA7rW",
  "key35": "a7b1QDBQoAZbwyP9m9Q3JtTnQkt6cMtScxn8VcPmj8zEWAcXA9VZaQad4kvyEebPnSn3VfEVVQAgBGhXfLY6zDF",
  "key36": "5P2WnwMF4hWSB6Pn11zUkjojASshKL8V1QJHWDBrFmFBmi4qnBxRoFAhyZNKn4JbjqBnxWAZ7o3qqh8VdrYep4Xp",
  "key37": "3K1uqtzHg6rmDpfsLChR9LetkDNqhenBwBYJr1U5gWgQzL87vcBrw2jrk1HPoKR8eAKK41Gs8KtLMA47R6JjCnfM",
  "key38": "3tao6XJYNPVcw69tfnhBB65rXM1WALczmJviu6Z1WMa2GHNsDWNY1ea8k44cDHYEk6DcANWLWrKxQwCgV18wQTS7",
  "key39": "oXEqU89JKzboEzPXnXAbpGU1gDVxw99HUfB8c2cwrzaC77SqHpraiVPaqahyye7tqxN4STZWmkwbtm77tKnv6Mp",
  "key40": "66Wvo9m2Nogg5AbvooxPDEPWK7qgSD7Y587fbHi7WHkFSDCF5EHR4AwPos9j7Kss5SqmntQyheYBAZ9F4t9iWb4q",
  "key41": "5RNfnEn2MCbKcYZ3CCBUh2WSRFFnaSweeE1gCgG4kfpZdEUoqS1JWHQxHSiqfV9ob6xHaX47XMAuoiKCmTtaLFEu",
  "key42": "BGejCVSBVu9y332XfBPxK86TEvAJWpHsRCFwo44ZDgB6CSLca6rfnueZYCmzavuFKyvFHc2ifFu4PtWtDXf1w9d",
  "key43": "51ENbKtWFkXEyiESDWaFydRadArGvJSrk33dsY3Z3rkGVGUsDKgfgVEaWrqgTfg6RRFpqK8CptJudR9kGUTPsz4X",
  "key44": "2TcPvQ7o2pwsDWAzo6koP5yDejn9Fq85CAKeNdfVQN83xpbrVJMnygh9L6mcvkUt6yaC7wUHKtA9LvhCaFh74Lhx",
  "key45": "53PyypMeVk5SH3kAJfFdTKeejbwbddpRCLMiijjHcguKMFSvJQt7hc1fXYQq4ZuAFbgxuV3DeoeVtGKqN2RbWoxF",
  "key46": "4vERZjckztikwRjbhJ72rCr64nLsNeqqmborKDNFt5JkPSekqrk5UrKHs3mucEuxuy83a72A2AFKknCsUt8U4nZk",
  "key47": "5g37rgr92SM9hxmthk8Jr6K4okQryfvjk27cfhKqbZEjxi8BuYcJaSc2jP51UpahdcHTyMhgJFhDNBq2ekKvTWBd",
  "key48": "2YA9n7cHJ1nKT6PBQULhjxudqL1dYLL4qMLoGjM1n8amQvUqfDX94H6wnJHkuamB6TqgEZvaV8wNyigyDWX5KNkQ",
  "key49": "3yJNKA1ENLGTwz4NWAELKYMXHQnv5h4zJqGSYWLcKU8CLNpe3WNkCUej7q5jqA93v9BRDUbqC1B7YnoRZZZvR6JZ"
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
