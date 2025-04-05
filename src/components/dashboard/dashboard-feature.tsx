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
    "3hPazctsYf81bbzRNSFLTMkbRZfzgVqb4BHTWqmA6aZD1UiM8LKQwgMZBjvXpHUWUdDBN8QEMXekYEnYsafN8Sin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8g5wZWwdwhrriQYZDMGRckn2S9yLWYCNHAJcLiL5c3DMgBCRUozGGCCyV63pBrf2nAsBzwpSuE9a1rd7veqQ9W",
  "key1": "3gsp6SncievQ4TsByjuRGEbzb5XVbucGDFEh5MzurSwPDmuCXhr3kJLQonvgMCMUrvd5MhgJDBd1thNXvNzS42XJ",
  "key2": "jNthLuTPAwef5tvsxnNmDJCw3fUWzmdSHkC9VuHzARJQrcHTCE24cZAyjrxZCy4StmiXGm4ecGS3ohWdid5hEYR",
  "key3": "yLfBWbauwQUMBw5fsrokGERB8ESfaq5zQwpJ6ZNhiRsUZWYQSozbfcLLhaaDbS2K4PwFDMA4jAapZiSBF2CGrUm",
  "key4": "43EwoXR4eJGnw7wpFgXNJz556yaEBjfnEAHtDv25ZwvS5F3m5hY1nttKxXf2NnPmHAorNNz4Js3uZTar5J3vwH2m",
  "key5": "JAVS6YLXiA86UV96DyxRAo7UVdsio16LqJQ4chBQqGg5cPYKjd25Nj15H1KDUrtK24XgVNWCGtRj7N2FbG6jTLi",
  "key6": "5i9SLVWieoCjqB5bTz4UiNyz2ww6t4HP2iecEudcuEVNTYNKZjTfJLNjqSMMBjSUuTPaF25h26icw3714jE1pjQo",
  "key7": "7q1ibDBn1ofQDKDHRNXJ3Bt3dQaBv5fizVND6ByLho9neoVxFrC4n3gRQttxz3RLuUy3KLbiwfSqdLfU33WvDJQ",
  "key8": "5RQwkMfEY8L4N22zTagwNsKL2wt7DRQHdkET3YJHBs1M7AJgtYCvSBrsnkG5Ymh8xmyY7gZa1d8AcZrgrZM51Cer",
  "key9": "3RcUVj874KBtQWQAm1dm5RtLtPfnhZuMV9AL5zqT59FXNBxEtif4Tu8cpeRbjDamqYgzwszHcqrpKx6xw9G5b798",
  "key10": "2pFVJxssVCF1FsmDR2d1ivL4zBmUDDpeHH8xdVpDRb2LHaHVey33q3c2n3sdqgmEGaaRH29Aooe9TSrHWUKQcwry",
  "key11": "5ect7hoMjxRrrzqfdHU1ARfrvM4Sj5ykXTzzjeXhqKNNHJGp6gLdViZ813YMAai6S2Epy5GNpPsGgXL7WPD7qfab",
  "key12": "5jwPAnMryMp6rYpkzBaxY9uXtku2ZwtCPP6ky4SLZXniGsEvecDEomDgEpfitYPW8V1iMtBHw7GFTtyJ8aaeEjas",
  "key13": "rPcxz3E4pVM9MXpqMjGFzA4FJmvEafgLsFWk7AQv2qaKAoDzoX988D2unaVXUVrSKH4aaQEn4wg8ctFamxCP5EG",
  "key14": "2xjjSG7x1Vtfng5JpbtkV4pKpnfdVn69mXV8Cdq1ZGmircaV1MnSpfhfhUtoZXwrtTQ8xTqSMbFon8NSVgEvxuH2",
  "key15": "4AbJskzfVaMU7km1XB8ZEGeyDseydmTcybYbGNsJgHatXfdD4zdxscFXizyyGL2xB14DudWtLNrAw6xxyneCCQhd",
  "key16": "557uWiY7kfPwKu3kCytL9zrTfMcgUVFsCGtuBNXdaet7iKEk6w5MfSwWRzMicU27MzQ6CGq34TksfhsE2pjAcKiV",
  "key17": "BKZQT7W9LF2dgiviWTLUoA1LZ1yfnyUp8wrAgEJ9EB9NtTbNNGAGNqeZ2EBDTyrvV8JMq3495nPrNZiCp25UyZ9",
  "key18": "2XMkhqhdcprLkWpBrkFfy4HaguQmDn1CXjgyjKzGM8i3ocdie3mPiUuMs3AEPrRc1NVXCnfqxdKAc8vieVWAN3wv",
  "key19": "2W7i7EMfRvLmXrgGVGt4mEbsnDcFSbHrqjJASJvk8dTrnpdnGN9cSte5JufGzsUyEBbNFfuFphaR2SvE9fmVwjoV",
  "key20": "45fTxitD3ymTbbdWSaNvNGChE9UgTxLzdzq2Uwvv4PcFU9iJaEJBqBXFhx4V7btESPGQQeJfUhx4btqCmZT1iq9U",
  "key21": "3rZjAC1dznXTL74wy8FUmyzB3QmRkjVUFYS5k6CKxTm1o56RtCdkAHSfEo5iuvnztVoZed1B62myLNQHMri5u7Q6",
  "key22": "5dv3WZu7gUeGPLpAUAvmBGtPjoFABWrpZ4veMQak1AhCtopuvgUpt96E7oz6XNBe3z42MGEU33rQfSrfP54ZANdJ",
  "key23": "xx3Di3FAiYb6P6U9aLmNUEqejV1nkg3xgvDGBkGT5nWiD3DbmmAbJ2d4XD1tVuKVhniqjNv1B4QCXzmkajEuFbS",
  "key24": "2VpnDWEz9ub6mt5Pv6szS6k4biFXj1QMTCE4UFr3FTLuLoxR13Ms2nBc17osQA6XzGxnfLaJaWkArdXUEusBKe9a",
  "key25": "3f2jbC9eAZUKMciHoBTSaBZBHq8ju5VL1D4oLqaSGmHMkmv6kkzGWDgQPdNneHuwqY7MPkhCVs9yFoti4YvG8339",
  "key26": "5JL8EHU9SRJe8DhFtGGceZPyhb1gKmERwAJ8hWdoQ3KnpEboC2TnN86E22npxMSLKbin58EuFkDHE2J5UX2HaBoz",
  "key27": "3rx9HQuhaj3F4pTpGJRN7P5GKRxXmqrLLZKvjccJbmt4GDieYVfHi8DoJKqyUUcJE7EfGMetDMzfE56ffoJcYAgk",
  "key28": "4JbHSw3VetP15FAsLMBPMd6vJiPEo3p9g24bncgmLMbT8YjUB4AwQk1CenKfDQYNF3PbGczo55PFJUb9TYXbNCod"
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
