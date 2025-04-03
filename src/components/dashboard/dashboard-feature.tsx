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
    "3QSqMA5WdwxCaBijCj8NSP5dsLkYPq6x5H5TxTKt278QiXi8Z6UtBisLmi36WXU6rEqMUb5GDtK8B1yggdZkUgoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLRuMTpR8x69egUNVKpXfKafDMoT3W58JPCrF9MSbQiB3wFXoLRN8GPbdPaihkzFAkVeg29N8XAsFgagKm8uBG",
  "key1": "3GmaHf2ccmB3ZBspX1P28KkVx7RMRngpUUPHMguMAm8VwE2t4tpKirjezWbSXP6uo8kmu5rpykUMoYrY4Y77sMha",
  "key2": "5vXaM2TkHeUwwBj88mpkRnMrUh7XBkzs4LXoKwYn4ebgkSgghYgWvg5ScgFrSBZhBdYdNRetoWdjBbcYFy5Rv7su",
  "key3": "YKdPAJ5TijMCyAkr27s5LfybRKgpFHwhLncyXLqcYZVULDj3H3mgqwXiMU3kQsDpcsq6Zs9UaDd6eEKeW7cBkD5",
  "key4": "T1W1WWCJWXu2ScZupMCAGZzKqctnY59DqvsYEFYmcxh8agswaegNxXjaVtLLv8E3Z5ZKVb8Ga93mihmxpuNGYHw",
  "key5": "3MpWVmZa4Sv8euKAgY46BFtEwEHPCgFAyaDXSjeTKZMW13idWoQZj9adDUZGWx3TSw2NMJrafZNQk7Bpe1jZXrFG",
  "key6": "o46iJuZfksFJ4QZiDmuJWZG528eUELXqZXWU8mFbnzkj8WPZXXpp1gMLW4Zgw31VtYC4GBHZUcQSs4SNPQwczbG",
  "key7": "rmK8hBeoYhuFp2VC5R5QxCEvMnWX9YDsRSLXLNVuyQMsck9tbAkM8q1bCFJx7TZXCns1M5QFGo9cS6FJjhErgGF",
  "key8": "3v4Cj7BCyjQsuaMvTKPhgnUt19qNcaUrCchyGyUNdT1ggLH4AWJHEBAQZVpYhsAu6LCPdjbSitGCSVc74z3CkqhE",
  "key9": "4EpunnQu1M38AVFWeDYYKZ66Tz9XuVV2izy3HnBFV6dpP9FQHXBmWLni1EfYvpspN1kBgPeM5Fyc4YiGs54b7sfi",
  "key10": "4UqjAKTrAts3EMazDx9UsMnWXkvgiHeaecA1aLmgxZeszTnZcvZbwUqsNkDvUxMNrwoDJdEB2hnnfVGEfxRripN8",
  "key11": "4rMGiMxghY155awV8NfFdPdVBw5qY18hu4v5HJoJzeQSz6iZVgvAkBj3pgcr6Z8nM154xKWxRpKQ2h9ncbfj2Vr2",
  "key12": "2KQfuKnEeK2qPrCVZ4zuWUkJ6fuBqSGv2WeVmWqBPKoMz8kEMVrNKZAey41tGMk1aKa3UKQs5y7KxV6t9GsXgS7b",
  "key13": "2oSjtsjD59Xr6eAFLcgBuMLAVvqfwEoJ7NftJK6rF5VbeSNZSEtXGn789Y4bDSMSQLNqyvRDFv9LX6d7hLEmVM5F",
  "key14": "AeuNqoiEFcuSKVNbfauSCu1bcd5t1TDSJ4szga4vmL4XjSZ94aSUUAQrnrerFmArr77WrF8AdnduhAJvAam1KG1",
  "key15": "3qCYMpJbGJbrhQkgbLrhvMkWwr8GwMvchLZ48ezvVX2P8FrDn6pEyhbCjLqWkqTkShA1vQegPAnSSenVqrd4wBDP",
  "key16": "5Eu7Smcq6XNrRg1WRA2fviMSBgpCPFkhmAsNYyzhQnGXzHSuMSs3xzXnmA8R3kXUPiefCc9HdWkrpsqwhsLxQ4BU",
  "key17": "38Q6oi3BqsWvaeNFcWBB5ApDvHayQDqQWmFVhatQimuxhD7zw9mXapHahJS9wY8mCaeDRrVmwkN8V45v2a5x4WLD",
  "key18": "4ZwsG8rZQd3qVquFeMoKu9EjHW3EfPcvpH5SZUXJh6pfxPxf3mpAXzkP6dHaZ2EvF8Fs9Shvy9YtTvRvmTiaQSGb",
  "key19": "4SCsgJL1xNhEHJHUbpP8zaxdBzWMWtbkhQv43bUf94urtNfLWRvs2rX9vjFxgU1DK8gZD77uShMqQ26ibpkC8Ty4",
  "key20": "5aBGJygzDfFSdrMes8HcwYyME43oYnStzC4aqfvfQRqbRH4mmFc5AvKkE2jfqSsecgF8YwSmv6XFTPjECTztiD7P",
  "key21": "2HUMMdXowsea7sKqGjJCbPzbq7Fq6tQgQkNzAEkQqxjzADHUdSb4NvSB45zBm9XxWbU32mqq9qoJM2JohM6UDYjD",
  "key22": "3V4CkeeCoR9m9bQTUdugYARGTLthyp8Qdc3cHww3mMJtxmHdJsm6KijwxBwMvvaVw98U5Jf2ZV327xFHoH2Psh9F",
  "key23": "5twX9m95oD8NSk4Tn6baeyWwWPA8ixuU4mrHbxYb99UqtjyU7zg8AmM32FXXjEwjSWnDcnoD6C3oPht5LyMhwcz",
  "key24": "4J7HAbpJpLvyJUWCzphbAzpKgPoGkCGMzATK17MWu49kX7gsHHgBbz7gHuxCrWQQ75UqYB3aVfzAa51djCAtqKAK",
  "key25": "5pUjRZXKVP1LNaEFi6EXanYKQdwsDQUM3KYUiEfawQ5ZHnvXukfw69N5K4vqnY7kyRnmoT3kpfMng57y1BJ9UuWk",
  "key26": "2bRFR2jAnptXibZDxLComCf2sGK38zELExcbwCNa2io1f2VGM5dQ9AEmshacwYZpgmANW2qyq8wMXpNSyG35SuVt"
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
