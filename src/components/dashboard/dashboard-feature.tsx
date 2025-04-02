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
    "5H9ij2Nvm5uv3qt4dn8QDKFKDfZ3j4a5Rthf2JNAhBjrJbutjRMhRGCqzRVjS3dBh5yh5Zmkd6B3Ba59YLiHuEKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iqbiUv6HD7HGSTsGqfMiF9ekw9kQNsEeGjjJevdC594NCvHfPYS23M8oNEHdjCmyfFn3Eh6zNhsoD6nDDLccmzw",
  "key1": "5HDbfPKxQdNTn6NXuLSvbG2r2XsbZwgU2LZCyXofhGW8PpMjW1dF3qtVYVqi4QBTjZh6SBCnM5EG8EYwK7QrQmrM",
  "key2": "9DNZSfbbPE7d5o3mscBe7ePMHzBDXuWFGn6ovtngSVfNB2122gShLatqaE5bJD9yH4xHt6z9EoASW6SFtRZAy7e",
  "key3": "5vmhxUGTWQaLZ4ZHELVQPh87K71xYxfnxpZQrrZCNatG7PgA8QFKtZx6Lm8hoBQSC9yowdiHp7r8FxpV3h1oaQxx",
  "key4": "4A4KmidwWyWB8Wo2YFfYCnHFofssJHiwc562XpGRjSYavj9j34GK9BNwNXZ78gfngLZJUCUdexF4jh2SGJttsi1i",
  "key5": "xPTd9gTZc3pwsXNZm7JQpVaFnx5NamLbnHkFDz3r5CDF9eu99j4kQTcvRRhSC2hwQqghLg1YoYHcczg67cFjxVi",
  "key6": "U2bGsQrJ1HfdRY1kgYBsN5NodeWN4ptCvmQWw8ETgseYaHgbCqDbsoHreGJqs5bm8JDJv3SfZrWn4RKzd7LxQwz",
  "key7": "3wfooe9LmHjfEZRgRrnyej1NQ3mA8Mkaid4o5sLoiKLNiCEdZS7agS5CtWZZhV2W5fGmDgeuA2ap5nsWw9nCiF4p",
  "key8": "4RXg3nfstav54sLXSqt9SZxCYjAUKu9HTVp7BbTffbmZ5jbJtxQscxSPCFh6JEe2QvRbt5q71JySV5B8Nezt35u6",
  "key9": "52vUhSqVdLyxNzeC45TyAJ5iMLioXQPg4aksuki14H9PfYEnf4mznhwUtt72FxuSgRqx9aTCBDhieHwjb7wy3kAk",
  "key10": "3GWdgUi4Gz5vz7xc7iyb1aKViU744u2UMwk74pXRLL5iuuZjw7gTHNdHjsdMBQ4dokrjhNMW3LmALm8iC9qR6WFb",
  "key11": "5FbqnvtsJBnKggd2gphhyHpU7WLhM7pfvu2R3aoruTrp4JJSTxGJFTvTLHjo1AxDDgXz5v8YeqhT9UPeqQ3VymkZ",
  "key12": "52JTXdJndzQW9yu2w6GppgoRWTCrz7BjEZ2jyRW2RRZ5y6Ef6pXLi2K7t8Uv4jc25opMHcsbHaZ31YjYqZeR3iJ7",
  "key13": "2Cw5Ub67d3gHjv8u2CQmYTg4ajwXhW6NHnYHNwrK3ZD67Wmczi7V9zQBPoWB9JPN2GUPmehwWDEWpwVnRykKHaze",
  "key14": "22kHVCDmfLPG5R9KU9Kup4bMWsw7dm8ct1YjDrnDZ1ptpUWEoQ2F5U6to7mnQjLRwH2HpZrpySxXE7FKq4gswBq5",
  "key15": "2MGqctm8rAtPwne9Q4earXLYRZr91DkYDuU4QCpkiG1knrnnZ9wt3Psdw2KSoVxGrk4MsqAqYVQQGsHf6kj31BtJ",
  "key16": "2N5kgJf6zhEfTKRfoLg8kezk3NMbhPiUyH9v8MrKYUNeLZ6nNegiaab9hnZc36Ey74NaRHGPZUnVKTkLtn5Bm3yQ",
  "key17": "5YWC46pwc8RagqnzJiq6F42NmD7bQTiBJ37ddmrrCGXc74ohMf5pw3w3SZRDgAuFHY9WAzyG2cQaezWd2HzCeZvb",
  "key18": "5XjYadfzTpvDcDmwDWsQtV9CFGFJiVLD6MmAD7idxg8AcUkmCSkLpboAzaMg5Azc3mrDQCiA2aPSY6CdFRmb7sYR",
  "key19": "3dZ5iyS9B8RLiE25qULNhCEL3fb3nhEnZrRYSXhp375dZznAViExsiVKP2r1yW8v7mLEBz2D2629AoksSsUHpjJj",
  "key20": "8xYjmwwCbxFxEyVKdJV7xCPuirELAMXPJTvYq2bCEia9xx2t2GG9jSP6RJrpAmj7LUxsBiuvoU4qENj4ureSySF",
  "key21": "2PxULEmYjo1EufZPoZrGb5tWBhcmDvSaG3fDuGF4AtX3x15s6qSwnHUCjruhMDSscC6EBHiopniZxdSdWS8Wq68W",
  "key22": "kjrBbK83juL2BpikS2NVYVU98qyPELuR117UhVYAqiLi6ywKzgPhvdqqgxLpQvWEThVw6xkTXmQCGgR14iKDR6f",
  "key23": "4QCLKBU6J9zt16L25hZyuW6fG2M5HXXu9p6dMxBrM3xPxY4tcm2L7D8EwoQWN8ieppHRkZgmo4e1rDPDbT2ne7io",
  "key24": "HtZRGMdufnuagissSG8SEoi1K8Cx1C55aKSSKU6ipYoUjVvT3P1ksbfWu97qrzXUr7yMvPzxLyBCoKee7ckyqs7",
  "key25": "4d2a4jDDyAsGFtrGXEgMvHBmxKtk8ofxtzghpjV7xt8NeDb8y1VSsdFrzZcV3rmCBWHmUp9ohzmSxi97xYuGTmo1",
  "key26": "UsFUsBHiatirL95JxFxodoJhdQmZp9V6EgoGNgs98tmUADVxYN7xxeQJQSW2u8SvNviF4PRq53diTg1QmMeZJUj",
  "key27": "t1jKtcvuPrJG8QhyTAz7FXDaxYo5ZjFuBr5kVZp2WnR4veDRUjH71awDKVxnNSE9g2ZPDuJZK8W2WVPRMB4fk9p",
  "key28": "L8bH7dE1Z7XGi3fCwfFMhWfpzeCNWvMC7G5AnbKyz48WwQcpZfjy8EjPmSwVCP8BG3UuwtwPgsvSXDE5rPtScPT"
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
