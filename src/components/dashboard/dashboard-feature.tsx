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
    "5rpvoCEMAxgstCkD7D2HBGrqn1GU1oPE1cFbQYKf1ZkpcYLzTWrohXa9MfbQCSztnoom9opsNZ3JiW6e3cX1bTgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VSRjmk7dsCjfP2jwkZmBwToea5RZTYZbJE7rG4ACmXUVsL4CmnRogrxCdUStNGgamsrqkzXqG1CQRAFa655EtpD",
  "key1": "t1e2PtUdB8KvLFrJfmZV9Gp8PojiTgXHf5VqBr99kKaEm1E3pSz4pRCFMASdr8V8rZqvJtpGB6LREX99MyaKw7G",
  "key2": "SHHV8nYDKzPptCy8BzhoWBQpFwWc4t4s3m3k2xPwp8QiGSix5Prn82vwDpCo1r6y35uq9KcTsZyFoeZ6N2Xa1VP",
  "key3": "WccYsNuJ6tB7XUNZwZLXKeF2uUk5Jy2YeJ2H3FufaDkFHKXH7w4yQGysDfFgBcj1NsvjPTm9N7wS8tiFhpdYxCf",
  "key4": "3XvX3V29LF7iALsmUnARtj4BY8j9bhkVC786mSRUxYCmbtcPQZkWyq44eMDDS8igSkSbk9XpNxo3XDBUmxtLzKyG",
  "key5": "2ENMg4XngRhr3BzhXYntoFJwnghqN8gCwTPWcCiGBA6wPcWRkZrSSN8ctPDFGu7KXsSUjidGWtTn17cLptnJFUcp",
  "key6": "5u4cUHztngSp4Yg2BMW5KSKKhaeQjvbbAHjysbrAcqJNiyFHn89w5bfG8C7wHgCKAbmhneRdbtUc8d4sQtJDKd9S",
  "key7": "VDHrDh9pJjAWncDGsQ5EjNpVX1eTKbSN5b3NJ5Vsvxaw6L1Jwv8TaHmz6zVcKEf21WJLrHF7Upt3Ms3p3zL2FrY",
  "key8": "a61CBGJATctfBbDtgFL3S7Bxbd4CfC7LxuMN4UMQRraa8i7ajtUL3dmDb1LWXBRLkmPeedcYPHhj8gnB1ZQrrq5",
  "key9": "5dBS2uRaRfqkJ8DrZUfzjWNhr6XW3GvVQWh4gcJUpQrtMaFcjbrUayhUVqULHpH6SruyhVuwyTzrurLwMFnFzBWe",
  "key10": "or4vcEc2Z9C46Y3QqMApgm2zgH6bRyRxKyjv99wihPxQPyk2v2AAJg2LkgyG4kpFP4FhS54car1KCUhA4TdcuNr",
  "key11": "3j42v3NJK1GLiot6W7A6cDtHiSLhjJYrfWFrcsxa7UxKKR31KWJPgrbmPw96LA6YxpicPHVw1gZgmDDZcUbLccdG",
  "key12": "1FNJpmixc3etBZNJnVmDnk46EyA9TkRFArqoTSoqyY5hyNDYrNPb2yCckvWisvwNnW6VEfRKQ6Bsv39dCjD7E6T",
  "key13": "4W97NefJDJ88u8ZJbCCHUeAERc81FDnce5TKXPxCTYe935b6G8brPxJg1Q654i6f4Ls2AKnESY77oRhFLvUxGUUi",
  "key14": "3ke4bQBGkN92tG4tTFk6a8hcLejVsDDCPTEPzCL213JfDtHqMwpqTF5vZ2FAk5cyCgJk9hLFSmhrhXshfnep5oy9",
  "key15": "3ywW29XAr2fszjmjU2AuwwJ1FHkNp5orkxqDpAzZ7EDuNYSQBX3cX7pjgukBdbK1rTmxWoM61aQgkvrHTtbkqKP4",
  "key16": "5eB2Kdv3BjmoMG7jebyBXRjQw2aSRcd2qGNwfZJQXqcRpPS5S2NWXeisDB7ceQtW1qz8JzjWEko9a7q571BMdxxq",
  "key17": "515eStxvwEguzG2YbDRtBPkRKmJE9BhZQid7V5V5UfVU6Q2UmFYvS5CTfrvL8E5NXMH17MATZKyi5ccDMPdoy7Tq",
  "key18": "4vWW6gtPrac9YtQhzsnjc4bUVC1zAs79jZ6zTtnfjkAoQSHK8f8PysABRgq3ATzMreygX8TGBWsh6YcimM7sxx2p",
  "key19": "42J4VxkVZ2e8xXtQZ3wehaxowaVRWNY6VFq9THXtKwy2rQzfYc9uBx4S1tHfDKfvKbEAHDukGp2mncbJ5r68xYm1",
  "key20": "2kk6NmaMgCoxB5S9nFT8dRLvicdMAWY3qsPMRD5QtKNNYM7uoyMRySRYEhvKfgvScq2FvU74KsHLSdrWK7PpAysG",
  "key21": "2aUQBKG1zQenvyp56AABKqa6x132xDhou8nZyme1macu9iEpE4qE5DLvf1pF5XZ32TLtabuZHQUrLEzx54ZE97K4",
  "key22": "5dsnVwDGUHvfJj72UmjVgpUNW3zkSMmgA4sHSp1EKm24ydZX9W1yucLFJo6U6byqJ5n1ttosfFzHZUJVm2THQQyz",
  "key23": "2bLng4EXdoYpvbzDfBQ1VWNEdCZi8aAaXv3CXcupaJ5m6HVXFmaKQ2fFeqpG8zS6g74DmgPqDk84JrwJGzhVTdZK",
  "key24": "3R519qKBhDYu4gGZirXrktDu8hNwnctw6qdgoetNde8jUq8GDVsfHMRLS7u9mKt1rsARDGKzqPCELuLnKtM7r9vL",
  "key25": "2AjVefnhzpBgEVVhRBamqUwutgyG7ypSvGLtZb3BsYW3QSRTd78bojvZmnJCUWpiiLVQHbDu1USCfxWJZjQp3PcD",
  "key26": "Pro1QaoLfJYU7QCny1hmoRBKENecMJntaq1xeTG7NUucgdWgYv567i1pSmVdBoEnLRimVtFnAkvu62u91MMZ3YJ",
  "key27": "3FscVn3KsTvTNEK2BGaBUdJ8FPHgqZW5uJzYAVK2Q3t2u9BtbUQYzBhrYC5Ro9FJA8ZiUjb5wjKqnqmEdvecF8g2"
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
