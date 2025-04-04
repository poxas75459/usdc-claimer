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
    "4sKXk1eTVbmd2BM8P9V2Csfttc2qLQdNcAwXfU6o7j6ucpxxensLRgmmsGq2fKi5xuMLyEZEyML4shqwMv6KTKW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ma5CGTDgY4PrbeVQqWjE114n9szZG5xuxWQb4EbzXq147BeK6YVZz3Do6Nnyda8TBp8nR8RCimGrP7t5fRC26nA",
  "key1": "5YMzk5x45s5tJRpfL2TqpDAm4PM7aHQJyqcQ5X5BEN3LrpewdrQyUJ6ECfHJN7fnXktPpEkRAiVkSS8GmXUkuqtZ",
  "key2": "3dydKD7G57gkbhqZf5MrSMxCPu5NQR2HXMyhV6RfAaat6NC2wb9WVUMybqXN3JxijAk8jYhPRtwjqPfweLEKVczp",
  "key3": "3rTEQNMU2j6ZM6iqvhSXE8Scv1aUMNfXJX3NWkVJnbMTsj6WejciJTER6fyZnDCbKwhzLby4CSa4uBat4AVEkbjK",
  "key4": "5GtJo61549Lgp6bhGZGEsggmXEzFZaTzCRHhRCW6X8wP8Pge3zo1St9UPnp9ZMXupv7bkLc9WXHMJMU6trxorWDZ",
  "key5": "5qb4QPNRg3bDpyaGcGKE8uuSiXtq14ajoTDzBHftcCYsE9crdhdPm11NtLZpy1s5MeNDqixNYAonSUVXxa8DsnNq",
  "key6": "4yHhm7QrSPt56XW2kjBhwoDjLDTQRN5H5FDDszWpAmajBfw85D5jFEmhGrzi6tP1g7JjZjZVrsy97TgV4Uox6v3t",
  "key7": "2GyDL75f47EoR2Byvt7cZpMkDhgSK2d1GwRocyCQpgYQogFQ8isua6TjbC7TRTkfPRDSCZcMhtgQikaQLVn3crt7",
  "key8": "2P7H3fp8eztdsmLvQ2u6RUQdHyxTpJn8YwZuh7Pno3eX47NcUUDwbTLyMsfTX371k9xNf6iwcFEXPTgYpAs6jtNp",
  "key9": "4D91vEDMxEp7zKwgZTDWvLPBBhiGTRVsJJUna4gvPBFZpTrGjYqWRd9oBERaGN8atCmsjNoRXc9GbmaBeEsjt3RL",
  "key10": "GxTXcsE9sF8woRA1tikg6YVcUjgAci5XLzdEtWs28R1vpHYLY82pGY149AzmqAAoNsjJp4chdw3aph9bQhGYDqT",
  "key11": "28ZakzdUPyBcVEYUF9TmKfVUQnEhuLGRroXVyyiG89EcYjM6d26HRv69axP7NNStLHfgxqaKnHVx19MDVAg2xqsz",
  "key12": "2NbHf52eCCugR9owMk1c8QyPEk7hXzD7bxKK15JxFRLAqpyhZpjTKE4kQbVAE8jJSBTpnpRvQNLHYkPZNTffVJ8K",
  "key13": "2et8LteVABVSPmajLiTFwtWvzgNPMqSfhMgP2pcuZwyWxsvWCJt14wf7CSxeFbDTjojcTmgNbbdRC5sHRPF7NG3a",
  "key14": "4kTxJ85tnkv85YBytW9c5sk3PDvENvGpSu5bpgNZTcaJsDBDec7XX2zYyfzdM1Dxes23rWfyt6mb6MtcEt8mMFvU",
  "key15": "BHBvqqPcMCaDuxMwQbsgruPmbyFD6MqEtawRXbXXHop8bJUBn9AGzJ3fP1LJZWWLwnmbSivsmN38hj8crtsgULD",
  "key16": "4TA2n4LACCN3WQe9pSGQQhqFxviwWkgHPiMHsBuc5CWFxNU1QMotqjwKLVemsUwSrWmHgu2PFYVYwi943iUkZYe",
  "key17": "45VWhbxuBdSAngwDFWDdBGpPsfFnadYUyE6fBp9bZRk3zNhAwqv3fwhZevLc9LrZAaQ3TpNfoKiu6EUV9rQiZmcf",
  "key18": "5rRxPVwskRbBcg1dovya4Zr16xXTTkSmk2DLcnkkrbCN1HWDab6dDtzmtDUwgppqch6tYC8kWRcCDa7ygPFbJsBp",
  "key19": "44LFV2WEGWv9SMSRDF6sHCBxtYsCnW8E2Mvrzx4Pn8XAPhueMDnbiaHiYg3geBUY73umjaUpJQd9x9ZwTpeL6fLF",
  "key20": "5ZSf4mG9Tq1XJ1K9GzfC6FjGtPrHS4L8sKYCXqvK4jagkZq7TQ2W7jxKmE4MbdFe8Rv9n6wXfd2EQY9rtnBctU3D",
  "key21": "3Ttcka3gfnhGe21CGma9nyKu6eQvjEXFRj57qYmvp2PkPW5jG5nG1icjLUyLArz6MfUwkGqnnWJRMCFREhii5TFQ",
  "key22": "f8sPt8tZuH1U4cW14MTUpnvcBGAysEazVdDADb7vgEL6AmKDHY79DHvUFzmch5bmNdfC6m9qBe8rJMQQP5aPdvw",
  "key23": "2ZvSAd4rvWP6ZL15dWxxUuzzXB3EeLTxHVQfWF4C7AJJyXbvDJsn2HYNenZ7W4sY8xmZb1sbnNSRqdskE6zaXf8Y",
  "key24": "2SHHr4XR1cozZUPFyqBShKLtSA27AspSyfRZhotXgRC7k4VH8dBEBfBVpacJ5q1Z1kBobG8LKM7s3Wi6uTaboGTU",
  "key25": "5wuCQJ8QwVmfGvP6DeuUwoBqkySYMLkKn7Jxic1D21mSuEoJDFw94QEBNtxcS8T2HiUfubQVhheAcLX6LhkwsXMr",
  "key26": "2eW4vzS3Pepjw8Zc7WYYn65VEqWPwMReTntM3o3HuUe9Ho7cuMpdhTRo8SyakKddjaqFNBbaAu4WiQWtz37qa68K",
  "key27": "31a8xEs3ouNidKc7wUM3g1ztsngbfqDSmF9yHsG2Yf8fy6AiyWa1wwJ41ZMMbwPq656j7dSMBGj6EisaaaQ6A3dU",
  "key28": "5VCuh3RgwY4Ke4PrCmtyGMspDVNF6aPqwtG5pBP8QfJ7oGApMAsLnefFEnB1JFJpQ8UvHaDP7xGBtniJrxkAFweE",
  "key29": "5LHE2z6yQBFSgyNdQ4EZ9Z1rxQYY1r9GfNySFBdPVc9ai3HFSJeYp3Y1UpcXBYi5MkP74XEY82QDvQFbjXWCHJys",
  "key30": "3TLXCUtN38vGQ4E5CzJgzKVLALNY9t6AqR7dxmSwWt8UDNE6CFJ5A7d7NgEs2DAhhCj37FujvTpMUwY4PNEL7xYF",
  "key31": "63d5fatce55YSAf1MbY98eE8ReGR4NkQ4b3RXnPaHUnNdqUUyHWGRxKyX6jQE876XtHWtdP2Gxsz1vEMYjhj8Y5A",
  "key32": "5waKWJMkpnXFWoYr9zz25rVEBPCFZtVM5yNfU5cwvSnKBZUjtJJfqgtstxUTzucxW5gLVZ4arF9f9f1rRiBw144W",
  "key33": "3Q7taQH5QJzh1tyFvJTwSJBdT9XWvUevJJq5R49sTBbpfpigxrB6VXPehj2N2fCWoSygQgQV6CwYPac5fB1Hg4Gs",
  "key34": "33DxQLUBxtcBMqpQhNvfLXVZLyAuDwz3rJdXWtt54MwTEmEw8PEwrMyoDzLcYCjiPc8J7uR12WvN9yg6y1LNPcU2",
  "key35": "3vFdw5bToN8rGqGV5YuRFCWaWSnGPPJLwCe42GC6oZK6Z9RLWfu3RBE3caxYPG7VWtvw1Nwd3hF29WLW5qBoE69x",
  "key36": "3nun2KN8djhfSbpx9ndFS5kZZrsrHxWGhHU8oEWRb6nhbypcJy4svkV2B5ifpY7N8oBvrumyHEpH6gMLdYyYgbH7",
  "key37": "AGYD2CawrNmR6r12XhBRqQ4S4NzkVnfje8yEQcXQSDKJ9WUaoY3XE9qwttCAm1cDn3oR3atCFCyEysEA8LBrJX3"
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
