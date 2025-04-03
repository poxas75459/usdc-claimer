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
    "jGT8sFF37qxmQk7XMtTRto9QEK6o9hnKJ1g4gLT8GQ5NHHmtFaGGJGgfFrB3zGQCTejjQshyzVaPvXKkfDtTJbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgEzB9GkH8Q5ZNBPcxq6p1e2vMxWmC1HitrP3f3R3psqKrUPb3pa45VgxVRpZ2qJjz4LeQGCCvNQ4xntj1yV74x",
  "key1": "2jncgQziaP11yEE8Sihx6MJ8txtCs3rx1CePcCxmtWwcnotBwaoN3xMSuGQJa7wAbfMnPeXgE8RHLvTKSVULYBWz",
  "key2": "2KHaHD4yCXLTC8epGE7s39GnbfVwD2jfEjnkRUuD6WWQFEbqWiTkwHvUmEYqvK1EkM4kSUNYqFd1NnnbzhXS7M4v",
  "key3": "9wbisyGjc2LDLW4Ye869aws58evwHszZ5S9PPTKV2GjfU7q99SfxSuwf4YTrQNYYaNZYfSFqqdeNvF1fKRpYfHW",
  "key4": "2oFbGZ47h9e82pKSYP8JB3zvYhqmjhc2oPaQ8zyuo8Jv3rrgdj1rAsUSdAX3w6u9xUqHTjFx6fQoKaFLRjRehuXQ",
  "key5": "3q8cmig4Zwh9mafffBrpuzuocyFdwv9r8W9F8kqqTq2HK6viHWvsKFGGKdtwADGdaRAMbqxyiZkJcb8Px8cRMrna",
  "key6": "3gDbEFMW7sdd8fz3uqn5W3epba2Ga8XrfKDH7oCCfsvxfjqodsbiZMpjN4q2uqaGofaG3Rtx7YrsPio42SrdaYgM",
  "key7": "iTBK67fBwqmGV9z1g8TTBnGFCCPPBvFw8iPPa3xorhyj7tu9qyfenL45hWJqxxUNw2PQbrnHAsNJJoo25sJkssJ",
  "key8": "5uRA2bGhvgttVCmj3Cdo4mANyE4qP2k6o8v2v5o3x3Yk4SgZMUnaMWzmpB3wgHc7G5UjY9UqrcpnHdE4CJbDgQVA",
  "key9": "212hzv7VTAwv7b5R2wyq7Vk4hRLiZQfWW67FHBRFFhf6La5UGDXbJCcoQY1bfpQBRZ2TuNWGw2TzJtbiTpY3YWQ1",
  "key10": "5tjYcx3Gw4dvAaQVRBy34misgTfKaQCKRVX71pkNznEQSaCFPvoURNEbqxxRayecUZ1mLjZpKZkgXMfap1pi97YN",
  "key11": "2FNzqZucwHq2ExspN4FQ3nTdUPakGxBojEUjnKyCk15knEdBtBfxA9rfeEZB6FaPFn3Yg6vAV36ZDvdNa8SBmTRq",
  "key12": "iq9NXS5demhkTQhDVjJu3jNCEAx1tBgRLHrhsidhdyQabbRCtcnxtvKBgXkZdFsgXhpVguaPeMtPY2P5J7txhHn",
  "key13": "m4wba7ZZVJp6hS3uidgvMkLnDhMTBKtRhqtwnV8ry1rfqtNtDHxULDY11j6sAJwEBfNQEZXQnp5Do5Ae4eXXmcp",
  "key14": "2SqVpa1nbySUhQCwTMPSvvTA7HCa5Zo8V8bq2yanziBW4vPLo23jR342fAuMnKhsLBBCQLZZPmWvfzrbj9uRDMpL",
  "key15": "3t4ygmuGVYhUVrJcGRTtWQrXge92Gf5npNfCgeD4zbPpNf5pvxwFzhqKRrUDrzuGtwMf4oDVbxHDDiwNeFjEFRJJ",
  "key16": "4oUMtfkrCf4xNuyuCQBPzBKHLn45rm4AjGqvz9u2y8ioeVn3kakTquRXmwptHVNtmWoc4FPWmw25SBUNznctruZa",
  "key17": "5PCET7Lj5dABRXtFDsZPJNe8C7ZdCCrrBCsVnwDc7nivpc4bASk87VUzb9LEFXZhfSnvtzRMHeuTAVm8ss6gH9K5",
  "key18": "5WgVDj696rZHUf9vQ6rUmFdo45uPKGmYNT1KPSjE7joMXR1x2oz8dq1sBRMNnrNPh2BRUcqzwQiFuymRNimCaqY1",
  "key19": "9x1RkmXKBHA5gBKNAoEtBsEXjsEnfi9ADuLSDJ9sexv9rHyrQ3QnE73dxBAJcXUiw5524PxLvE7evRzvsj7Pnx2",
  "key20": "3Wz5PPZad7qfpsVnj8DMMQeCzsMtY8Wk3DaM77EGJzppsM6p4aWSaMGJyU1amsVpCpGQKkdeWpT28C216iCeSAtL",
  "key21": "22n5djuLGpJkxisSkg9JyChHcTXoyiCVaznzG9x52zhKehdBdfyM1buKcY8U4doprdLnE19jNL8CstJQ5UvQRMdG",
  "key22": "2hScQ4sHuLwvFfDBjSRwjTkWSM2pAdX91i7dkxVCy2EoGMgfKvn8eo3vSwTfzywY1H7ppidWF1t5c9LgV7WHfqZn",
  "key23": "66FUoFwcbAqfAZ5tr5PTwCvdS7BBnyke1aPY3j2moLt2vrTmLvNLk7VcPHHWWhrMaWrxE19sHLYEquzYntcn7eys",
  "key24": "4kpCjsexSj8ifWU1vPbxGLXUqJbsAWDyQKFGM8miHSAHMJhguTvdFL9rt8cfVeuWhRVLCggvCahqhdH7ab67JqZ5",
  "key25": "WCGyVWotF2WhC55Wnw5FHrowLa62W7nAe2w3BQB3vWowTKVGG91ns6FZZbDJFcXH4iMucdu4EHjtiqiFcBTUW6v",
  "key26": "XmexESHb5ftbsd6JMZhwYJktRLbSABm7dK9UCrUSXDpYL6UhtsQt9BDWwRraMrF4Z4gaZ6r8SKMxyLdM3Q5r1tt",
  "key27": "5eztVUu7xhwN9JjaMPHAWasn7E6sPcCjK5vYfxAMRpyL49t3rZPZ5gdbVVzW41zixPGpiQ7SsqV1VXrrEHvZpVdL",
  "key28": "2C4xjaYS4dx8oLHcXzjDX3ZsNpe8YRbJ2ZBQgqDjDvHzWNVApi9hmHkZsurC46Ef2DzxzMiLqFHm5NMK4pqZWr2c",
  "key29": "37ja9NEkYtrykAeSZ5pYDuRZQidAfd85M7eSVuxYYAy6B4GFH2gJucg71WnQLbZHhmkF2PTxDRM9iPsHzwuYq9c2",
  "key30": "2P8JLBCi424SuzscFTio315BPChcFjDZWbAXTy8bDYfWh4bnF7QT3qn9iwVYBjYs3nJDcYmVgkQLdLwcQWqmQCXA",
  "key31": "4zYEyABQTL7AKooqQGHFNFm1RbPbSfdGvScLeqFrG3Jy71wLzst5CgG4w65Q3B4ryKTSMge82mUL3XYTS1bC9JfP",
  "key32": "2wovmEBKDJm1Mc35kHJ2Kd7nqLEKwRQvwJHgaB4nRR72ThJeRW19ypP2GK52M4tpZLLS6q76GfdihiNXxVaN8HvF",
  "key33": "67pgthj6pgjoCELwKY32dc5TNLVxRnXyHKhtrdoMdaPL27aoihihsx1Dua9iRrcuki7PNyuNZxdyneT1PpCS9szK",
  "key34": "34rukAg4SMVcZSMzMBv7RWuWbC62giawm6wJCfzNfyrH6DCm1cb6SQqrHYvaPSjBBLAmXY6XHSvPRhPQZ4MBqyhT",
  "key35": "2V7MYjNtd6gZ3zDbNr5fuf9dxoMyTaXoj8ReJu6pHC55iqgErezx79CsXjrSGhx36FK8NfnWpCNxANpXHjFSBTnN",
  "key36": "5j8ULhmm4dEFTXhuRoU6hsYkyAziPxcaTgfL43Y56oFK8WGUb2zvxTMjZ7hmqNBVpJ92r7M1Ek2M1UotcPtyRPz2"
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
