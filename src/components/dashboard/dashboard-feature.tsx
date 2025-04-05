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
    "4P5qQjrTCLaat5Xr72Hze4WgrguAaZegCSRZ9Zfxno6DRaNAdMLpadvYVYiXLobXVy4xjp37JisLaYsQe7Re2UcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZov9NhaR5gHDQ3JmG1F3xjTnD1yXq2MHUN35jq5SuPVAP9v6PWH7mbPk4eE91kbu4LCFZSPjhRkE79dC3qYZAA",
  "key1": "4ymxRTteJcVYaMi4R6Q7v3ktvFSd3cmJs8ip33x7pEXcBdvL8fvkqjPKoYyvySH92XpX87XpDXnKeeXs6nLtVkdY",
  "key2": "65rnLG3HtpYAVaYX6b7bEC8TjJLpXuFd9Avaap7taYKDog22sGX6N45BfCTLxbBQCpUVRcKNW9cVeoiUJ9wkZyw4",
  "key3": "3GA2fcsoAr7xKTFJE4g8wUifshPgC6YQ1XMMLBqQt7nkGE7gEJrh7BdyqJFsXvicyKY4Bz3AQskyP4krJe8qVKeS",
  "key4": "3wNQKizAWwtQ6c8MBy1AvseEsKtrvYv6iwvSHsXVq15j5TdiGbH1V7kCtti2Zg4K33qPeAVT3wHRA7crJvXTXs8q",
  "key5": "5QdGtKr8SYqcZfRD4o2d2gaih9QfPAe19o7sgSuqAKoB4PQaf8ULSBpEwrPTQ7cnPdPqL57Q4SAnt957BLV6x8xw",
  "key6": "241LPQKcjh3YGtyj7vcY1bSbA65KgDJagP4fqKEDgnH6hnvMJquPccKzeRKV2Jy5FGJ9PqG5Z7zRd3E8HRGrVtxL",
  "key7": "tjYr55cWr8o71Ap2QnQHSeQ6xdz4vjbMYj5U7tvhv8u5nVfwRSTNW5qhmTuPdtziSg3c9fQrTw2wA7SNXPoQ14E",
  "key8": "476s5Eyimpq8XUqBbCHghXQD4ji7jn3W3x3v6CMugYuqTZbogcPQwVcEnDAYBCJjtP6Uer86CKM5Xr4bNTZpknpR",
  "key9": "3H84R9FfTAukMBhAR2ZfdHxgA7c3F1tse3eTh5GpeBemSSuCyi45jZbypUjWXEnZiWFLazxmMwmcNKREdzt8jUqE",
  "key10": "4UvjpPonu2MtG1GMzDHPjo1SME5dAvwz8bs6ZAX8qsmnvR5ocwq4aKtfSQMgGNuPMGotAhgceAVpKZTs2TPFFXwB",
  "key11": "5CYEfBktC5jX26t6Ppnd9AcTnd1if5TKp8bPAe5Zcky8QRjccAiWDAoTqkeKzQo3A7H886BJJR99eWXe1sA2DXVs",
  "key12": "4PEwAJvZuqPMLApqHpvcvrCJx1hsg6Xovdiw3jJKUWEr8mBurhRsbXKnd2NmA6bdEQbnoWZbARWfBi6B3noCyPix",
  "key13": "4WH7WRyagu4u6F7NJdzgQdcXyc2gNzNc7KAVikgSvMLfohzKMf2UqKVGn7rYcHcVpEoY6ZGxX9D6KTZFGs2GJNUr",
  "key14": "31z5Vc78zY6HEhs4J8FunBe9sCqa5DKoWqccBCyu7XCU5ZmBUBpeXkuZiWktzTTKk9arCtK39F1Pc7sSGebhF8M1",
  "key15": "3KH3GF23J1m6Zf8YZeacUeZC7E2DG4svfVr9L4DsJQvtMBkooZZ5BqYsZYDef5ygX8gnvYJ4EB3pfhpUiyqgpewr",
  "key16": "2CQDXicoWibmamaFk8VxAFgTuAtzjfrv1Nbwp4yueo3P1PpQb1vCrmiEPzcrpqFRgwHbLu1i41jE8iE1NtFWd6Ya",
  "key17": "32Wqgarqi8eWtUAoESY6DFi9BfU5JPFjFWXCHAoaTcesFMRNKxNnDimTcVdSwGbknK8Njx9ACbQmhVMmDQi8E1TL",
  "key18": "4ttSrEfSFqmqmeobHBbZmRThbpeZccyjGd1yHcXgN7ZHmndoLsWBdg8aKhHxzp6diyn7poQVb4DJVR1EJTx1oa2x",
  "key19": "yhUy1p73VjA4zPJZ6zVTiKR4vTHo1AtNzm1dWQny59a2niRKH4d2X3rzH38CJVhBYWeCSQeHyfQZweZaHwA2f2x",
  "key20": "4LNzWrp5dWyxoEuB6swRjWMZPSi3wXmAohVZncaPSpPTLAFPWWwp7y8pimA1eTNiTS3ZBCiBTiL1LWcgRHRjfqYx",
  "key21": "4aW3YS6mKv1HDQoWxBC8xgrRyhX8UDZ42njVtcpHhmBQAvaxabfhNiBpHXynamRDcZTJY6Bmqv8VsiVKiSjwr12V",
  "key22": "3ETAgFZUd9LSWYTiQP1RGzWtt89fEdMfHvmCcHXpJ8zcF3eXJLJB9MfkM73pxuiG8wEEewDxJAvrPywKz1Dtc8gR",
  "key23": "FDKZWTUNe5Hv6XFdJrqr6ASDjxq5RRsZ7PAys4KdPQws9FpwwKnsMePbpfXJoshjwyfxmZL8CXT4Rz29eLAxAQm",
  "key24": "2Dy9TAZJqbKnYi3zFfc1tMRSxN8er57QojysYbofzuk3DxR4EvEcKDREBE8e6waL5JPqNJ72qNXK5oFpyt4znXQu",
  "key25": "YUo21CeX4oE3hvb8Pbdt1mz3PgtkejoawsNTbchXzBb4jV8WnujeLwem1VbuC9RmgpAcLZvJmHSfRwgxjig7r5b"
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
