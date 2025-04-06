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
    "vgnxyRpScaqeMJyzcFYCAJCagg18KchgZvehgsBvXqjrbHARfLrDBEX6bhRhQ1XY9xb3P5fxicArFferzEGimec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JEtpWBnsfqBZaJcSaRqGH1xo7GgKCg6Dbf2cMieaGiV1SsDWeXbXbGdHpabbEECbQtCrESNtoEHWiW4E76heHE3",
  "key1": "5wkW1HNMDzY3YbBmBLxCQu9xkgZP1Gu9LfqX1Fp2P2CtSnEd1oRTUdBAwMP9DwtDqutYK1eWZ99TxAKu6wdcAV7P",
  "key2": "3YRe3BjJUwtdGjW3QgE9NoQVTsTKjBy4jgU2kfrCwZiPYuJTmT3Ly1nZXzBTxskf5FXPLVsLa6L7ut9ZzPUbmMsd",
  "key3": "4H4bAcD9hX3HpsnfuYje77LyvHwYKAuGybL3QzRaqR5L7GdQTfZhQszyBX6FbpjGxqFSC4inRwDUTWZtyWGJJtUA",
  "key4": "53kXsVHgqVZjAbzrQ2ktS3BTRRibHReTTcmXPpV4xWb98jM1iNQ1AWVx3B7VFMujjBwetnZNVbHU67FdnLFTfCnA",
  "key5": "5CWxgSV9RGipTPcLKonqZM7mrz93SM2JuvFvcnRMvbXTq8vf9Y2mHxbZiZ1wyAVngQfgcBjjgDtV56KhrVht29fr",
  "key6": "3kQiDSCvCmWqwD8Qe2gFsEwyGuw5ReGcGoc83SKXxCs8YVsmuJXQQWWhcF6qRpSDsucezJRUaFpCHh4zvCjuyg6D",
  "key7": "3QDdaPdrRbzPaDWsL1vYyABGH4t8zswVPUAwjRuC6UZa1LpYBMqK6Ca2Zyhm5SUUVauuweuES5kee755iEPQsryL",
  "key8": "5q383NJbsPJ28bGTSSF5LT1M1cZHxdgnDJsP63mbv2b17AWfvBMRh5Uzh3UYMUirPaCkwMik9B2Xt2EuwzvWiksn",
  "key9": "4L7Z9SUoU9xwCxg6GA3VZf9usaqHGyEutZJ1gVAJPbgoLY8YGwQkVeiHLPRH35DD5nLj8hXJTvNsmiNX7gDKKjWk",
  "key10": "27Thtn8FTSRcuLh1ndBdyBHnB334M3HMiALxeR7Lz55hPXexD4bdiN8pYdSiFLbsVcKV6iyZ1UQtqCtvATAxi8V9",
  "key11": "5o4kkJHNsvRdyiU7kTwg9wnefrippc3b9f2cJv2f7XFyqnw3LhC73ajcidv9caaVwk15o5FJxFE4PUsHquG56SA",
  "key12": "4q5MWviQU41iojfCwdkueNK2bzqeH2bgeoDiezq9Vfjd8gjCMLBeZMJpqnaeG7Kqe5wmQkWkn2cvJvBXYPscU2tt",
  "key13": "2mpkzAAEfnPmHVis4FcCGgqCqFZKTFd5tFSBndFCSkEAdJ7MwCrG1PNFjcKVRqsF7Wvti8dXF12Ve2LatKJYmoNf",
  "key14": "Ezp9PwGrkPpuRo7TUqwaZgkDk8LLjghQGPKVsiTasSwPUhRUzJgKdNRdNRCSzZmyKSY3z42TABCTFdbNPcF15Y6",
  "key15": "3XrKeMJ1zbErEe3cKUVatjsbjVD3rM3zxZMLxM33f9vLvGBC5QvEUeeTzRiSK9FKMyNWgX7WiB7MuCv87bYUGvMu",
  "key16": "43ohLuCbeskG3TmRwiqd2NFc2vVdxbfrEBjoMvYX5qwmBDU4AkjLZxpCE3EMUSPjZYaTC7JtwHJu4MhC1qYynZCM",
  "key17": "524kN5pL3rqNudv4sW66SX1Ti9XdarDKJ5yvinXLeKg7ygHwE4i6zHMhUkzy2VGQqNK7vERxSCBtz6ChTkefDpaH",
  "key18": "28p6gGCDRSRYcJTyb5GLRpaAe3MrEz4tQ2NSYQnwP3TtE6cAUschxTt5cCREqkWDRhAmeQEThUVo6ZgbYiCRdBLi",
  "key19": "5JMMg1T57puLN8xS79MZMaQg8voWtfSDBDqRpXNgUmPZe4dntyRFuinqWyCtcmadczprsatJbjGCztGjWWfBHLLx",
  "key20": "3zczwKazv2XG5yprThADcG1yzRupVmnNsiQn8VdP4JyuQv3kRPBKnRmNZF6E7jqZHVKECPvUQXndravBnqSNu8m1",
  "key21": "23Mx1CA33u3FmfwRrvqV1mpmKY4pPCPrXMQ22PEG1zM45WfAx6cNTs3QCZ92jdTb3aTg424t97J9wy7iLw28KfyG",
  "key22": "21v8gdUuDfEED5KZRniP5qkzuZbqB2V1QquCrqyWF36v32fcryhawdaCQtYXoRiywsUCGs9SyzHrbXk8UbUi4k9F",
  "key23": "29B2nr5rB8jDBQZz2fRx8Vr6Bjc87vMJQhH7LTcpUJmgaeKyW71a9M2KiujFYAV8wy3zNZyNZHamQ6QQEgczGvxC",
  "key24": "5JnSL7en5Gz1TYuyvuQxNH2ghKvJ1spZfNTJsV4HcEHAdb7ELn2j1JbXjJqMn1iBjsi3vysRyWnTRcwdayK1tRvD",
  "key25": "2dkB7R8x1xt2wi4Qhp3pnedvNsjbayueBiYuGXoqTbcL5ZBw1jQSDWwP9e3ypaBqrDQUvqQG3d4bd8KRH9NgWUA",
  "key26": "5gMoDfddYzpS26kUQ1ZLWH8BBLQkA1NKyzxrPUrTqdGGS4EvvugJuX6HnG2KC5EVyVf5ubAnWFVdPVTUSLgnzJLw",
  "key27": "4fSdHhGkVrmaAmVyi7ApYACGT7MxVDRGcHFgm87womDUq6aQgSkMFSh5QCBjmT48MWbxZFc5gLdktm3hdK9oqAzB",
  "key28": "vhwHKLhhhtBeYuGgEvHM6khZykXNQgbKJvymc314Gnu79wG7VZRP8jHMjBArD4Ahm7kBMY48mf2YDVHfpVPhVaH",
  "key29": "2y37mGsmgaaroqTHK9912AVYzgeuWWGCnSepn6A7fvk89ryADHhFzPNRxFBWrCL9suPRAkwLyoD1hnUnuXzKgwqd",
  "key30": "47XtGafckNALdLazN2G8cXkWLZZnRpeF3td8SFgJAevWcPv1FCrvJdX3itjyd6ksU3Ck5Q4qqpNfyMTvyFE3vku1",
  "key31": "4srePsZcwQew9ZyjkHm6m68b6oVa41XosTedxA3R6oLxth57gLCruakARz7TnhEBcbwM6YnCd8BCXgyCq84Yu64F",
  "key32": "2iFgPRLh6A3nuufgDpynyiDUbhaBPQbNFqmAQvMCwSeNLEpbZitvY8evoeGrts2vF2hZaewNYYbK7Jt3GGYQHV2a",
  "key33": "4Gn9VLqiHWMQqor1XxrTZe7QH2VjtNyH1nhRZW3j5mfMauwoF8asBBK3gX8aDCpYqoMwuprwdfuRh4ZejBhNYFgX",
  "key34": "3J6nbH7dhNePFWJ1RbYkSW3LkzFY74YVMaJfcskHejrxNTCo4Mibw7E2SPwJGwbZ559PXfk693r6cz7zEWG3thzh",
  "key35": "o4sjci4xgLf2L21xe1CKm9VpdZGGVLMu4NJSA5r7NyUZiBMTCRvfrECB7BR65PTCiDXgdSe9bJqFBBfaWa5GpxY",
  "key36": "2fS1pLASwrR28a4KPRdiRErjtJ9CDCdft4EaTLaZNFx5ws8nRvmg5ZpWG4o8jp1ECk2Vur6DZQcKdNhrNnsdmL7d",
  "key37": "AcNhYkK5kHaMeXbLXnchUAKYZTyvDgo6kEsXjJoxBCuKvyiZf1pVhKvFASw6NTcUxhzZaZxBNtzqkmfV1EFRGrp",
  "key38": "5MvVSUZ4vAyXPCQmVHU8Dyu579LbJQwHpxKAMaCvvfpZZ5uAgLKtA6JgDnnpMCWY16ACNXL46JpD8Y4qxscoeYoc",
  "key39": "4GhYiXfbgceg4xhTb4McsNzJ7tvcJKk1qpD6BVbgTEhVUtoa2iDg5gooQXxCMjNzKXeNbXyk2y2ha29FrgwsVctb",
  "key40": "2ExHs4154bJCTfB4DfWj5LFXJcbdaqDT4ppicAEjY7RJZzFNQcNg7p7DFGGVsWVNmLjRyMxG5GikHQSD3L55KBJU"
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
