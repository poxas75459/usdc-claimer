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
    "4a2qmMRLfejNRMefJXLnEBkcNNborrKrjvz7MxgbMsML5sKNz7cy6858R94Wf9vahfhqTypX79uiEtFZ1isLgchG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wKF5BTWQiywv6Vf6GYnvbPj4aFtLuYov8ngoFfteUFHDZ92hxkWoSP2XEwefnLCDKsnaZ5BTJopS1rLhLUNEKGY",
  "key1": "5AWTQceG8NUvEboCLGKesTRzM63FuMqQ8ExGF73NhCJkCBSDSpBER3qPenqcPEhbzRP3xt4FReUP6hrVYJ9Ttsh9",
  "key2": "4rPmJGUxw9iNerJodatuVthrFhTmFazAvbUQcRFdQH7hCUsi7ucVNbSioyr9RNjVvB1CXi3Pi5K1n4RRLcbAS1EM",
  "key3": "62FY16BKtStX33p8EggYu3WYh3wZqbfagJXba4J8NZKyAsUQECprkfHw86g7mSVMj7HFb5Nwb4m24nVNBiQEPfKZ",
  "key4": "2zUuN5U8vMkvf2dy7ZUJYg6VyxjQkBwc8SgmQEQQKg3HzonicRCusybjQ1jBuJ8i6QDU2aKcyGrrurSupFy98UDw",
  "key5": "2zaLgU5HyXxZ8rVFe2ouxxwT91y2JcpsGy8p3hL8yp3UFEY61f71fLgci5ob7dqk4C2zvFtkhss2SyBE2AzVTuqL",
  "key6": "4LgqW93QdcPbeviQZ3sPrZrrYjKkfnPb9qxKaKR7YAtn3pdEdf3x9dk4ADCiA1xDit5PKFcGaQYYRRk8YoGoqbXt",
  "key7": "4X4nPghKWcFqHmX6LxvUywzhNfap4HnWdNeW97hBZgRuUhzqJ4T6yEYKHmdFXyaMVHnCAXFTirdnePMCogtqwvUE",
  "key8": "TRGttSf6akNWcX4G1FTCRcVQBtY2hrQfLKjrnfT9eeKYKrCsCiRu7E6Xzc1JLSVpBzprrWt4FdNKYYHyFctNkwu",
  "key9": "3pLB3Z5izsm96BDGM3WyJEgsxgDr84dJuUHwYkANT84evRz4uaATSas5dkDWeWn5WTLzbHnutMBJ9dfrWXnMxhJA",
  "key10": "437v3wNoV31pWVYwYkws5v6vuehpQBeoCsaUPnDw2K2w2MjjNs35NtLAmppk6LvzLGWRWhSGGzqii5UkQZFJFc6s",
  "key11": "3jHwM12tj6iZnTmLgdzQE2dG6HJG2yKyuKmgSae44d6StJpntcRxFfhE6amf1d48wMWQCpAAAeGBW2XMe8GVvctx",
  "key12": "39uDd9VCjycf9jCFdyKkJViZav6KYUqdXMnbdNesQRuybUtCLVzecHdsW7Hn8Y8E8wTXRYRzKKZMCUEc7X4t8Zf3",
  "key13": "5HsVwCjXHYxLBhzygq4piToEqVrPtkndGkzF2FEUpEh6eefzD5pBBUQsgPgs2VLWaRUPw7C2iW9fhUZw3LyM6AUP",
  "key14": "3UoFmzoFmLw7XmodhMTVnrAuHeZPBZ229Sm9q4aJ3iG9yKTH3HVhyVQEFf4opV3xTr2LEFqvTKyvHhmMCrSKnobn",
  "key15": "4CnzxbNoEHo4H8wWpMxubsW46gU1mfDBt2wqKDRH2KhiYCSHYnYKRcn4MzJgwHcv3qZ1GRichroxHMkmi9WH2PZN",
  "key16": "2J1fVkhDP5MtAqL261dVfYH7gXCQKbkisq8hqzX7erbQNxAydBNVZdkLigtdsSvtwUyFm1x3wJB82zziKBjVFeFS",
  "key17": "87pc2poL4qWk5coVMgyJXH8qmfEqbgnTeFG9LVMLcGYoF5mvwLgnaHrdkCDxNfT5R1VoMJyf1zYh4XvYNVgvHwv",
  "key18": "3vQCJfsBkGYGpPT3j1MyE6PkNKDc4qhhxGD6a1mPe73rXi1FbZ1P72ezFypeEL37wWMv3nYGF5cmD9bN3JRZx9q4",
  "key19": "9jfmoVBGjETMrvVk3tnxtdrywxzpQbsS3DMECPkGDrsoqSzAEmSu1am6tPH5gGNW4BB7k763uffVLZgcXMr8EG3",
  "key20": "45DTUC12FqiW1L8YLeCBC7Arh4oe5cNeg2kWgeGnwxG9iAKmwoqm9QpL2sZXgKvHnKjUFmFNEhzkZbJkQbZcM9Se",
  "key21": "3aNconNwnAVjHiCPTkq86qEFH2kJMEdYXLtCaxTnTosjaoa34iMN4MGovAp3gpXzPBYS8qFLzvRQgMTdWKhivzmQ",
  "key22": "5BnP2A8a7fC7SMb6fr8Q86thPyKft4mdh5aTSdNFSKC9U2KFndZFdPC5vdo4qtJh1PkVTjrVmJN5EN6VwkL9nv9E",
  "key23": "37K66ktDDaahTZdsShK2VDiAUkjHMDgwr5cMXKMz7mAkKr3rwFCF2o5sSRWRiYpACgAjNZC1RrR1rrHvwzUrjfAk",
  "key24": "55Ujnc3pfiKXDZ7hmPizU8jRpqqExc81YPGvLpgFzWeNfoYNhRm7bMovxoqTrDgmv5QXkGqnrm6zF5fH7SrXvit4",
  "key25": "3VW1yz8XQVoCb3JTKoJZDzGcS3PNsa58z6feEM9Zzfu29EvedfsAQE4VohHYpf3Cpf7cd29TuQctQGbUvJAH4Lqn",
  "key26": "53pEpcjdooonkYp4AKgCUZ8YhwgmEYLMc17ZUnGa51vqbkVDUATqX8Pp1y7ZCYMJ9wyrh7bfvSkWu33aR4vauNZY",
  "key27": "SzkwhywCbrkCthwzLoAnvk5VNQL7K9zVtG9X27UXw8BNQAXjY4vjMrq7YzK7pTr5oA1RHEZ8TG8dtgoYJENjN63",
  "key28": "66kFdhJr9TCuLTLno9Vfo4UiPDFshy7gUmHX8buD2B1YnotALZk574RqDtNcjNyjzAt6vdM8mVJmfPDC1ksG1TDu",
  "key29": "5KJNB9qfL7ANB6qw9zdzySxs5fkFtzpTgGUjorVTNsM9oXu1wLTpAwWto2AhNMvdYWp7zeofRsUgTicCbR1iyYeN",
  "key30": "2fLcqVb9si7P1Myzgb2GU6rZUTxxp9HcGfiqNupT9GsKiw26sHVLcyJW33Be3Sc724gdE1LKhrNie2gJ6QjQzoQ7",
  "key31": "31mYtXhaCQcKcQSJKg5QMc9guZABuHw5U6izSqkwAtJE3wiWd85hk7eBpEVuZs5zizqpY8UBK2QkQ8R5U6E2k8eJ",
  "key32": "3mz7YCVo7f5UjFdHSSr1DPEpGYmkAL6tFm8aYVd7kAvmc9Jpj6ZXppg3vtvcsXdNspqVhbtrj8woUuLcZVkSVb7n",
  "key33": "oZVs875czJYa1MFcFMkXgRFesDJipAUBFPJi3T7eV5Tzvkk6Z4aph6p9VyVi6Y2RtSn6zb9bJnki2oCY5xQpstt",
  "key34": "4ZxuTzNqAjPZajHucqiPg93vk1ub2qQBwqH2UHt3gBCJCHwnUJW6YSHhg5swogysE3nnhgPGU6FF8Ar6wG8r7B8K",
  "key35": "5oU2AFGUbBKUGgzckxk1uiPU3U8emdjCevFZ2ibHR81FADerXnZeoceLVHD3KoMzhDyFD9brsFStdxbHtEe82QNS"
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
