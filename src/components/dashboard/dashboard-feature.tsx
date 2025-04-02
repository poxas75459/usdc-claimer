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
    "2KKfHDCMwGLbcuKaW1eSjMt38YqCh8xkpUL6GRt4Dw9rMu1kq3cB1GCFCQc9pwkRvMMAZgnCnfX6yqjmXgBWQ9mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5BH38gHnuxjhUvpyfgnRwSuNpsXo1Mcms2wMcJKPZu4A5SmKQ45Qex499MU4rbH4LysXSLnbqf9VjnbXqCEA9k",
  "key1": "2eHfeYDe1cEVJ3SgUd8auAf7rjy8YzJyD6RyatAi7TCCPrfzVxVhqoUiWgx11Sq7ri4cFnvqRSAffvjnjU56cV7f",
  "key2": "5ib9BzW79bvAybLvCLBgyQNP59tiyiriC7x9FJVzESCWD4F1e6Qnhbf1sFGSxLm2eZGHDWZNUw7VoogpEC8YnVZe",
  "key3": "2qABg9jDnymv4ZxBkN4oAH1HFs3rCpF34WzxAjZPNRoKK4HB7n2tZFq1dQeVBr3vbRN3Gj72zjpoJcCkfgi5nzMZ",
  "key4": "4rzhubHZGMZxfRPDYrHABuWTjuiYBfBcbrHR8vrqWCaw53ScwfLnLKNLAtDW4epZRb2A6r2RBDbr7GftsjALLq5T",
  "key5": "59N9v1YowbfGbpJSyDxCT5g6P5btjqKgeha5PLGvsLtuLYpgDbt8RNezMrAkSFH88JJdNVnev4kkP6uwMqKahaXD",
  "key6": "3yKnLAmBPa8nUmk3aDrXrNSnK82RK7NhdbSv9N874GUYW2kaUJcww5JRSL1vVJhxiEGDXbSuGmaYYSrTd6oyam59",
  "key7": "3AeFfoRn7YYbYR5RSm8Kx5dekAroBEV7NmFm28dSar6GRJNuyFbWFZHEd2LNnwaPEnAdJRD8yhS3HpGYh5DCB4iL",
  "key8": "bwD9AdWwNQuNpSi4rC8fgBTZKVEbkUcHSqpNpYiuAGu4LHcA1k47phtxn68rxkpWPLjT9fsCQyekVchKwVcNVDx",
  "key9": "3uno69s3Ga7YePxahXpsXtWVFAz9enBKdZ4E7GDRJnC8VgCJ41DEVEMnCmvXRo4ZpsQG2Z6LFSLXCyQw9iG5s1gM",
  "key10": "2DxCW4dcL8UHborj3CXmxxB6ABPtjC96HbNcJbtUxJNvjjkkrfvd4ZQaSvTwePJSMgX4qnb8fCUaC1a1f9C2sBYv",
  "key11": "57HAy9vbcQctLjDWaAB9baS38T7YpjRJcPQcavKhejgH6sVpn9b4hdNQCuXQX9uDHVLrKANigsPddd88R2S96vKr",
  "key12": "45V1agREvLvupe59mRcgqB1skBjNKwvmda3KYYcP5BfxdBNiktzxuRxu2Y6bEaWgzmBPjDUmTEWDiLVWJd68Bx3x",
  "key13": "4Z9qLehzPsWpg42vNNV2ygPNBq3Fx1pwQKL4dQqiStKmC7zsbAsJRHeD7DT2c7tJGjY9TvAd1EURfDye76i61cof",
  "key14": "4NtpEk9KqhtCV1g8sYGUdjYxXspUtv8Fb29SVqY7EEs9CFvBX58pPTmynSK6TapG21vCJaBfSoyTsCd3ZELNfWZG",
  "key15": "vbA2e1zgY5kvQmYkbAEcfkLkJCgC2NH42zPP5emFZMzJ3WaiCLVHFUCHWzv2R25BGwHNoLk4ZHjeeRRqBVyfBCg",
  "key16": "zMQaFSeABrCBghRoqw1cEkEKQ8KKmQUPme5nbnchpL6FkB4dVBZa4SBfrKNPjALFvhj5RC7QrxjuJ24BzQiNnrR",
  "key17": "5b7zKVUfTwCbQ6Qp93F7UDmkbU1Txjs2Rgiu8SRot23D9FTuaFWttp7J7mEvP6WEVKbaYwLW81LrQWBZ5uMpC5Vt",
  "key18": "4wCcusz1jZmgDF83A3zvKSnqauwH5TNKKB18Y3WrZsowMf7mNYqVaSSeqwyhckt9sukxR2G5e7bnLkBN3XcCqxeo",
  "key19": "2DvUTgU5WbZoDyiuF5U1wkGHeQT2UTRARzRJTiJeqpeS6ivcASBND66Upz5mjhSqsPzFB7ScPcXR6jm8j7e5Kcs9",
  "key20": "5uzTJnyVCjTg2a5kW5XBsS9b2nEDgDHsVj773qNia3jagqRVpqFe9A4zZwdeKSUjxzZkWRMTS9D7xgDk1zTuxN2K",
  "key21": "3oEn55qUWzYoD2KhmEnVFHaDn9S7DTPozkBZXo1MMP3S8BX4ztbGKpxQ7sji96X85Gd5kYW6PqCm1rvvm6VMBzAt",
  "key22": "3hfLg8hG9XiDPJwufTDDajyyzcN1qhcgVuMEoitcDqukEvQ3b6bvYZrpLMMAqH5oBfQJRXZtr39WeGEignN5Srju",
  "key23": "4QjpbMTW13gdADvTJ8sHEHL73yfB9E3kYxmzqM5UeY5GT8TZGiHMw4GrPXDCe6ditU1gPi8WnkrDzMpz9FLreMVZ",
  "key24": "5xXTMbRzhKRD32Q4NLfrUBUpCAixjabVfEkaXsx43jMTCduWR4HSiF5C3tHM9w3gbF7ng1RshucXM8JaEjmVsEHP",
  "key25": "4AKRz6rgv84ZPYzx6eT9BAj4vx1V49b9DcaaEWGeYCKr2dCiTtKB7aq8MynWLJEG1A4kMqu5LjWFR4bX7x2RoWAM",
  "key26": "2XveSigBbVwdAqzY4d1BpmJAbvUmpDXqyZJ9tf4NYGvYDos9ZaoxzCFWT5C4283LomcTZgDn3XB83pdTtCFzitpE",
  "key27": "5RTSe7cNCSz6d595eL3FPBHMP5fpe7HtiU1xT3EPtMJMQ7xvCrPqvMsRLaHfD5zPeZNnPjTsEV2RuzNQTwehjH8V",
  "key28": "4QX5Kjs3J2nRPpCkiDWeTmtbSkcGTEcEwDvwCtXszTswGSawDXi6JrGfCZDb4wzD4zQ6tyVq3rf7XVa4LtuE7TS9"
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
