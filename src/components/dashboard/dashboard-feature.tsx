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
    "2HLQbbE8FuYYSe3Cp7JT3WdMz4QEhKw3ZMuyMqkKttSKDWDqs2aLNyT5vY8D6b2QBRPNtbWZPwuMhkvMbPcQCsAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULBTnY8BA4EmHDDHRDKExM7dLQqX3khmhFhd8NMXk6vgBXRXgjU3rUrMqhTUDNCkjznFQvFS31EysRtxyfJiDB6",
  "key1": "5DbJwAzhHxv1q9DE5uyiZN8Cn5uBKg5J3hALr97DsZf1aNdr1EDmpLZFqwD4XiL2guHJtXqTwuY5qFFv1ozSRrkX",
  "key2": "4A5XEFSdLLuPi8LtMZbmeUWYYLM2AHE6oLZeRw6iAs5KbrbP91h2b4GfJRdeTMwMKMA5znVR1412wFz9mLDNHT6F",
  "key3": "Cq2BDr5pneTMVKZRNPAN4ZzcizfLSZ8QjegGtgFbso1mkaEzsxyBdrsZuBUJxiS5C3Q8q4K483EzVTGvbdWELTC",
  "key4": "23MH1CRdAUJXNRwEZT8aErK8pZnVwFjsNm7RFWy9XBB3BLHkNUSkAUyCt2qrP5tCRBrGiupQTGD7iRQREDSj3cqP",
  "key5": "5CKWUuaVWTqqdswmCmD4zcb2t5siHxQjvdnxDeqpa67p7wEN78oVa5BMemqoFhXKXqjRtVtkoYPwoFMsmbrYBKmr",
  "key6": "2pBWpaBvB6NbBnYnsQ16jtd7KR5N2sjuYKUhzFnQkhscF4JX4F3e8vjvCMmR8CkcM7GNSjYM8gbdtKHyEiCbYbFx",
  "key7": "5F7zCrEqySk3JojgqYCAiySHCMH1WTsxGKzYkLc77vECmxZDhu17zGLDFWzZfeBj5zeW8d3eQRJYgLzTJd2UuC8C",
  "key8": "85ZqvmEBe4y4ng81uP598K1ksv6m1XtBpcQLfUvByi4FZaTNDAZJ6hZvsLvG7eAZxF3ywDui7CUWme9CCDpJYoH",
  "key9": "4hxtzJD1TM4QvVS1ET1nbgGNtYviRqxRAgrexZAwLvN5RgCk5KZoX9s8PARmknzQtwsUEczMiKbCDwzugMEtiJEW",
  "key10": "Syz9tKZe8UaeBXe6ceiQfGM3skzPgd8m4w1xAGW35rp42t5fTtZTqXVmGFPrTMaEnwc2ZCkqkfH2nxb7c6HCW7i",
  "key11": "2s8RsapB67B6eK1d31PRfdjmGcrMrMttjUrzJrUAZbrn5wDWhgt91HSrrU9zAVu4dj9TN8pXdhkqPPmtqTAK5T9x",
  "key12": "iV7bu7ztmWSFXTPxXtfHnRQwaFjhFpUAJN8n5H6HquMH57eM3e59nWUFCMFgDtV4YG4rpjQe42YkyobQk3YfCxe",
  "key13": "4uM3QDoLBJKbQmJi1bYi69ymS7CgLKXQhkvKnFTJFrCBtPKtoWciUA3ynsCm7MgEAbUB1F4ybwj2bwXiBrAD8yAN",
  "key14": "245fTVHk2XteDhFmHM1xQwmjvEYisyfXTcSP9BJrhpTqniDBiMgx7GPJDXWybMN5sCUHLA4BHCqugp9wBRABp3iK",
  "key15": "2qhNAGF8XkvvsnGEcU1SjBVtZQhKavtEZmrWLYShBav4hJ4t4yShjEQ2gGbfgpfeTAZseTBKQvPyVpu5Y6Awf25T",
  "key16": "3ooB5HidESoY1W9tqhycZD9vEXUY91nVm1mpa7rQgGS5NQTqRovzDu7hmXWcVHqu9RMrwH6ByoAmRwyHDqvRVFPD",
  "key17": "2VvztukCb56bMNVL6UyPXgFfL8LDisRSs5mQ6JFJ1FpkDz7k56ENigeD8u62rAKeaUm58vJPTJ6xoHfDhQMockQR",
  "key18": "35tfueDNng8Yvo5WP1eyEzpEzwqWbNMXNUUYaDbgmuJyF7rbKKVh3SQpLA1hvRKkxUR3mSqTDwnFV1ks7QzzqCZb",
  "key19": "2am9PF9AdLmVHzLAHQtvYJojqfYrWS6h1vYVevJ5vxM8wKVsTErYD1NtzPxEwGpt3WQWSAa8CeSJMPEnZsHewZJd",
  "key20": "4cegEKSgzMMxb8NDVyqrg2gV248aMGenXjUPQxPkC7rnruhCHibbQPjwLRAUAMNoTQbvJFhAotCVtKsorUhjFALx",
  "key21": "32SqZCakvtrFksaknnqYSnr8BYqUjE6VfTkJ64AWKyzHvTbSkY2h9pmW4XRQmTCG1cgBi6bJYmzftZe3gugRSpiv",
  "key22": "3iVwRyZtaQg4XMDmoHWKyCdTYxVdLLViAfDBCvPqbspvvSpSXSgd62c23pTmYxYSRRmH45npZkz6vVYaAbaUZ1U2",
  "key23": "4wBq2fioXegJH2Jsarcbkkjy1PUDEFn6p8nGg8PD5VHWByPJ771Mwy3Ys1RtK6LWyaWJP9U75LvvapQWvUL3Ngxd",
  "key24": "23mEQ4wkpf8R3Up2UYpkXmXsanvQZXaykmMpT1Fha7MQQP9rFhmBv7BSWeqdQF7AnUtxJrSDDbiPiJ8JLPS9f6UE",
  "key25": "2sEm4Ummzsty8ERNWiBZ5wa3ThC3ZzM57HshqvYUxmRYmPsftFWU7cfPXcHe4dQFnRkfENprkDseKPVsKN36ZkoH",
  "key26": "2RWu44RnrSevMe7td6x2DkyLqLkibNxd2ARYrVgSnbp3meivSC6DsmURRYU1KRaSLuCG53dZZ9jeVJbRXmH3Hy9t",
  "key27": "33oZhpqr5fuxLisWSfnKrmYUppdR4kMbRTtANPbmUjEnqrFxz9waiPRCQbkb8zC9so1hZc5TJ9jQr1ATq5SeA2To",
  "key28": "pmHviXUiBZfCjLP4cnsvH51VmXw8GnEJhTZoXiVnogxPhPycPELZ1V4PuikTF4E4wt6XNbzFtX5bXDGqPRLgPqk",
  "key29": "38tDg4FhMB7v8UFNyRrxQjophcBLhMDRxzWmkmatL19LxfMsc26Qx8NPUVy7GJhj43GdePwkBpo4fZwTMnsU8ecu",
  "key30": "56rcsde68epBPUTfqmTF6M3CGNedav7ATpL5NKFw7NcFQk6LGAe4Yr66P4Q3KS9imZ237mvg83wpu2C5cbGB7pnC",
  "key31": "35oubc7AWLr87UmiyKSqWRQbxjyEnjkGE9RAnmiNgpnqmehomGGpeXyBgVJHG2Z88bdApdgK7ciXZaovHonXrXJP",
  "key32": "5r7NdXrE66etS8jA4gLCwh87yWMN4Hp8n8Eijvajz7HTDpfhKENSD1nGAnAVdXe4MAYzvpKTNt2Y6ysK5UQSFyV5"
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
