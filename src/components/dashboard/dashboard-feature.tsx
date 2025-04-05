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
    "5Qjc9TJfhfx6NeYz2TtFA5Vj4621jAzn7Pi9tDJTTjM7oa7hpHhZYfsFf9t3vCReZ9rGxBJ5H3oQxjkbwPf58Ffn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JScGnk8HMp8JCGddGcmpY4N2XJHUUGo7FAR2LrQRyxgZWkJroa59QTbWyjafeC9fVznoDhgNt9CwiSt8vpeCDiU",
  "key1": "3cxMvx4iH3jN4tCcyj8zsqeboPJRpLxJiYAsL7xnn4NDPez2AwzzcnL5wa8GYXX6euRm4DaENww1XjDvi2PfDpjN",
  "key2": "5yNx4iANEDVMQ4DfHZMy1MBJ9DmSsw8ojW8xuPhRidN4r8Qn6kgTXNxSV7PTEVf5MZmupa8nWhH1TXZvzaT2cX9H",
  "key3": "4SDaKMBftfRsiiZeLAg8jkXxokeFC9KgsauEZw6rgPdteSHk5DwrdGMLbSBDkB1rMjkUZD23nSs7mLuC7vqbxpZP",
  "key4": "sDT6jcXQdGW5aU4YyuwGdfabSy1BB6ePqSjxxCoxxBCR7ZPJH5zxBFDYoY6KPEtRJ6c5LPDnPZtYuAvCKgehkkp",
  "key5": "5o3etiJ82uB2jjEDEZqDnndVD1JrJR9qmbJ8PCijHRzFJ19CyqnZDJb9qAiG1xvb6z7dgvbNoY8WSfCCthPPaXvX",
  "key6": "25RM2SN6SyfcuGvNyB2LbJ5WKjQiUTnaGe4HnheB3F7PW8YvriSvoaXkRp3SUvUBsPZeGqmuZmtqq6F1UwW4xxdF",
  "key7": "4Y4XVyaEsv259JXGZ9vknChYTdyb15o9rqWgKUrivzoG3eFf4ZoEdr8rvm4GPedKHxmddRZ7Qny5TZPuZbDqvpwy",
  "key8": "5K5WcKtuVCDMbSshJncR35XSxoP1CqwNYCrGJA6Vtqb9cykgSnpSy6YzAzmaoVwxAuU7sPjncrb4Cuu4u6EqR7yK",
  "key9": "4EmyWTTaqT8e1D66cks47PMDmDWGjndt435uhvDVErv3D8yrh4YcRTF5Vu1yntsP4xn8jeqGfmP5ejYjtQSksLuE",
  "key10": "3BesbMuo3pEnecKgwqEg1mZncPE6nG63XVuVNiMZ6h1FmkaUztUZKs7X83Qma5hz2ZWzFpAGzBeEdPwQVbZLWj58",
  "key11": "3nUp2DYzbXk7C3tYpJoPbvUHRFJnGKgV1HqV3kY4bcehRfsHdfKYzzUD6mN8GTync6SaTVy8hiNZyo3ruTa2N9Uj",
  "key12": "53CLDy3yfPhGj5M1MMnAKkLWR7PqG3zqnJWEtSQtzZqiRGd5JpuxK8uYwnJPp8iy4VeWR8LNDtosDpTDwoDE3qGW",
  "key13": "5zrjYMcFgjDrSQbNgwt2ggioBq9EXotqSYvBmHwVdxhmqNpMhKY7KNj1NYs5GXbr25BqHqdNuxRnso8pHRL3PJjQ",
  "key14": "511QgQAdmUHnW9dAb7jZdGzuBPC99F4zKLYxkbuSCbzTmjH4A3yaTW3AWyTbJAqS91f79xrTFvPz9JUJ3YWwZRZW",
  "key15": "4syZY6D6hgXELHfkgvJs4SUTY2nz27fWP1cLVoFx7tmGqCdycfxfzNthzdgJ493bMSouReDxpf5JDLhnAWcwKpLD",
  "key16": "4DTQSDQfZCvjVzsGvSf9GvZtvM7Ggpuk8n7RAy6FxcyNKEYUuVHqWeSS6E2Rphywt4F9T34KkdD1QeEkLunvcLKp",
  "key17": "PP15o8ZHiaoiAGyMwZ2KX8wXf98hP1sUpcY7AeFbHEDnrmNxLMNGK318TWgANnLssV3JpUpT7HdSorBCnjkcucc",
  "key18": "36Z3G4797gAki3yEEmQAkoxDbUu2wtp8qo4dWXTj9UjC4f7tSsAE3Stjym5ipDLbpm9bf6WLDss5ugrjyzey1b2n",
  "key19": "5J2N5ERG7bF8FguVrgsfnMkwx68VUom6Y7F3M6m7QQztxZ6yAtpawY5fVcjYni1EU36Ca5ePBUTHXTxkRTvAPZW5",
  "key20": "4mMs2zyVrhta3qQvTTN15HPMNQZDgUAhBcRRbazcC1d8WQe7SdNLvDfxo5EbRaYq3pSxeGGo3EgecPzSNME5NWp3",
  "key21": "3eBq8dChg4SUcuQnSpZk2VawCD9Hp2z3XSemBz3pwwVssakYpGemfeCuUoYv2Z1tszxpsENN2YMm6FzhLL35qruD",
  "key22": "4PcDgZLV8srsCbSE2qzrzSBHXzw97Kv6DSuxHS1APzfkQCu7SGVxXz3KJFd9CHjD3Xr2sNVD2ME3MAgM1HCGMMX7",
  "key23": "66XLijGYTgY2Q5GBRFYdJmPxts3N5xrvRgFmRs25kdtfwxchue8RHcQkDq4NmsA7Z3PjYy9H3M1BRtrxdhEHTVN2",
  "key24": "uZNe2cjUvXQaoE9ZQu4eyxH3sha9gygrqz7vKdZfRw88sSNfTXG3n9EgqRv7Sx3PtqfNbTBvuRqLGfpKrgRkkNf",
  "key25": "2uLXgVdmhqr9uxKzp8NamWJ7aHWe6Wjj7bYz5t6yLmx9duKwupytWWn5PuGw5xfzeDCZ1xUzmNDmLq5c2VNLeL58",
  "key26": "3db2VhujAS59Z15XkAwqTS1yQSdJEwjj3n9k9SBEeMZsZrSvPV83x19vF3YPZXiiZdV8CPDrAQoXPYiQvh7j2myF",
  "key27": "2KwPqJDJgeavWkGKSFhX9GvEDEhR13h2799mLLgMsXEVGxqDikAUowHWbWJACRJtdm94V1D8UasmesN1HoBb1J4a",
  "key28": "2H9uZ9UbDvDu9JqbvjTctVUEFUt4WtGPTNo8FR4rzfzwXBEstgAq9hBmi79XmwGejycCRPdbCGzBsnbvbtdz2U9d",
  "key29": "bGJasmQ9cFDu9WVt34DMSnZVCanQJ1gYwG2Xcq6mEEyu2XVsMeBUeNwxZmiTw7mYgDyyDFGCGZSMYsRxnJpCrjf",
  "key30": "rHx8bHZPrfEgvnFQTjDHnvERzKErYEF5gxZx4NUzkgZe5386UxzYToCwzwkfKK6KJimzFzcyydF4yLH2iwCChoZ",
  "key31": "YyXEttG1LBAMnjRRPVLgfuCtEJgMXxxT81FXzdURQd5Cfb5zyQGj1LkefWHRg5C6FppP8cE2DpkJvZyjCddQ7bL",
  "key32": "2TEtNazC2WPUgYacrdUrxaB3doFpd5GgQuxtLsYPWSrEBP3ejUDwokWtm2gkQmNuMUWo6q4526bZqh8Hhn9tSsHe",
  "key33": "39B763fxKAG4Dc3PtPsao7G3Jstn7Pb4jkMZwAqAccpFjggpvfJ5Fqv8mkHZZHKzNhWu4WDAQpgq5MiWnFZDZWuM",
  "key34": "25Fsw711zodGQzb5AER7gwjQ68DgSGZiu6kgSWTjsWVpRxjiVxTpp3b6ZbRy5npkZzNDWEurULV1bMiMkmC2PXbB",
  "key35": "2wtm1v6eC99jDk4aNXCHCkvPrmLUXrwSzWCTwB5nALKMNVhSFmHzptgb62VDagqdYhUvyQrLnfxyyZm75F65BGS4",
  "key36": "5f9tJuYSxDgtTKZXucJfGV9B49JfXchjUQC89enATKfoF7Qph5efJ7MGZQc6291GjjiRrSHjhB2UCtPA6fWQtRCQ",
  "key37": "4MMMhQfQbiHxrwJNZp9phZbhR3WiH4FAEnEu6KycDbi6C5MkPwDSmiqcJd9dCqBSK6FEK1TQKiE37JvjkQNXW1wJ",
  "key38": "5ySL85xxTa2CHUVPRCw6oTnFKPLbHZ1swQy1sq5vtTiqJADkGkjvEsVTUENDvJP2qaprNf33UamYyJb3FkKgcwSg",
  "key39": "4bpoRG1xZW231cY8yME4TqLexETBuysvy4fgvrxPVGyoyZ4PJfeKqUGuyiU5ehwFtrLSt9PmfJXqw4KqHEJ8Fizt",
  "key40": "2rsqzJbTBrYy2uxBhHL4KYu9d6fQMdeR4aHhhtpbKftkeFhjaYPTCmBcxXSGQc7v3fqVRRZ9PYBunQFQjZSyjvWE",
  "key41": "CSyTC11jzhFvLsczjPNGzfSsHBkXZA45bvYk93QLw8pJxwmLQS2FSTX7Q1ydyTyMqWPcwLGVE3T6kFfU8qfH4BP",
  "key42": "5z2o7c6XJvfx87hja7Fh2ULtn1QPMLD9U6UfgQenzqGBaKn4GnDRRWsici9BcvDGmpH3EYV17tL8i8tvNiwQpadA",
  "key43": "2n7U8ezq3vHnvyzvCMzPkV9reVcPuzJNu2zbfwLdxGba61H6nduqrGnioPTYGKQ1rf85tpzTzmdUQXyM8sKihgzF",
  "key44": "3y8vrh8ePAfs6xbwnQ5rveSZhqoCvjhNtktdwvRMpey4SHB1SAppMCSnjEbG9fQiu8eJn1stCVdegmMU43DXq8yf",
  "key45": "5C8iJxeGwX4CUWtDPbhmhCW1GF6gkZNnbqTDiCnviDeEkF11SZkWGSYT4y887yAfbibYGuVXxy4uWg4tAsfRkvjK",
  "key46": "47vg4z7Fak1jD4vqvEamQo1q3Y64hYdzi43NCeMjccHmeGeKVVPaPipKYt7AGGxi9KPe9uQfbM2TAJSwRLvr9jur"
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
