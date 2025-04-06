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
    "2vg6rxiFE4KQPGJuzvHJp3d5fpXdUcfFRFoLqBnNGR3THJXStKfWRr57GSkWDPFQwhonhirZRnoKEysVzYmQ6WE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dctfPBwdszpDcxKNJUgsAyeATKLcchA5hgGP3XrTjmmhuHzs6mYiAxjdgiQy4TpKrb5vE4w7d1488bU6HDawa92",
  "key1": "2GBMFFzccW6iXRGcRWr2CFnK6Am8zmjapVjN3pscjhrwuVdBgXubUrxkTTQQU2W5D6F3yYggTrXSZY2h8xKQZps8",
  "key2": "2QkiYjrdZo8fdCyFXn2bPuAUkWerZjHYy4oQ2G8EYQityr5vAJJJmc5WhGzBfs4xqE1pcChALrnWv96EKpKCGFWM",
  "key3": "5LeoMn4LsPBVMfgom2PBpKacUTMhw3XkDJDBCdt1ZXsCoxgkr3JYKhaneN9x6SnTYgAuQzMHgDFvMPHgSdeqFnGp",
  "key4": "wBZkQj3hjqKFFxYxbafvAQd9oPLysREfHyTRf5vuzDUegN4ArTqNdJg9wTWH8THrHYiGPqYZ3vrd4Zj4z6gVtu7",
  "key5": "47rpCwDQJqNBCgYz8EiddEXZtYhGwaN1KV5bX7x2GpSNy4sXQaPWipK7ULqi9BNAwrzD7NkLhA5Tx5jEJY1epvYN",
  "key6": "3ZMA1seSkN71Xw9Y1HVTgoEPTKMzbEdM857txsG6dHTSBHZLid3HJhNzgFS5rJtGg7rDAZhabXswNVwN2gZeZtbu",
  "key7": "4GJwidySLssehwg1c2W954Dj8rEoEtPLsxZoqaAH6xtUNvu953qm8ZjX9AdA36AGBEVdkzeSUoS78DFtR73aBcay",
  "key8": "2C6TW6N1Z356PHHZSKg21Xzp3ocSJuQhptgSaqV5SZBmKriGUjQgureFRuVXrruXQ6DuGMzGW47h5USsfb5BYnUT",
  "key9": "3y1wqKqU9ShdpQYD5viM3UE67zhpR1xmwHbWqvabk8kbamiNizkfrTGrGGYgcyQm4rpTP66gp6iE9TswvRGn6m6c",
  "key10": "3Nm5EFrGRRCjYqJ8FoTeVc38UFrhX2MQZ9vNmLv5c7m9TQpfNB22DsiiTBJWaJ51qCBbyh5TTtDPesYH1PxEwKGV",
  "key11": "2Q2pgopt3JqvRjncMTPp9hrk8Xir253qK5buxKXsY2k9duV3TK3rDiLwgpZb7KWxvHdo5ZmGXWQFWxDURyQM7VMt",
  "key12": "514JgABZR7pPvzbbASvdPfCUK98NgRfbtCyyfAv2ZrGr7QruUqGWpXUqLsMrhLMjhUbStQEKq9o3UHGs5dn22zj7",
  "key13": "2KFpJsGDM9xmxneMczEiyZaVJF2RLHppXftDm9zDPcTZhM6jtpMtHrQNHa4eETUHJyepZpznFcesh6rYopJQCC9B",
  "key14": "2S3JNpqRkskTh79uifSmFfpkQGgDp1YR42N8PEzwALhZ2sEZ5qdNB3cFUb7rDC2YiuWUTGXL6etioWcL1du4ht1o",
  "key15": "cZEX1SNRYA5GDU21j2e5xcx5buA9DNvumWM7r11ayyp4AnMzE4o5f47x6gNrVw9zJ38t2o6q9d9xrSYHXddT546",
  "key16": "n4C2NENpHXYSeDQ9feGhqRW4h1Q2LVZUoHjDEcMkcMNs5PNXeFqoWnbFG8LY7WUQDsM7LhE58BoiwXCcRvexsFN",
  "key17": "4AW6L8eDvpKQLwsDKjce1hHNEtpex3ez6MeAKA2mQakREUmscy4dAHgKUT5YTmoDGBUWV4bQb9a3aWovJEMrag76",
  "key18": "2yjByKYmPJtmTahvb779GBtAAonRWb6XmLnKmnX8SLfBUHaiFAMAG1vuS581HP4DNKxms7eSL3SnvZ2Kmj6xYPzv",
  "key19": "4NvRxYFB1PUcH3xasZQkuXLjCpkF6JH5GUMcRGVzSfvJNtFXghxd2ZZX4hVS2KncgzxmqiozAqMnb6cVDwKtp7em",
  "key20": "3VXmkNAkuNCpuUP5p4GUm6zqxhHsP95fKEwCpJ72VBCuwiBvXVk4rjPmYgeKDVCeQMRfHFGSLWpxYQ4eBTGUH3X4",
  "key21": "3d1tRRj2RnY7uQ8QzfqK5N6KPDcw3Gocy3JLYkJyP3hfNDkX8SSaQraXmbtqKs3x6UEdrkc8TPYgKxdiU27rtBfg",
  "key22": "4vEuhTBHDZLn2BEk2e4GMd5nxRVPjdueCQvQAZzeDXAPW7fA56NXVQB2MnYaj8ckLrKWeiY88epP68VqRadve8Pz",
  "key23": "2Qhnuq6Mui9BQCimfP74AW25RUqxLb2rZ9VTZTG4bgepZ5XRZcYDjr8qnrDa7QXmEgTyaxM8krcuoHfnnept5ka7",
  "key24": "5iMxzq8H59xM4BLTfM3JeNtwDP84KhMK8gH8EzQUUdmP7dx9rS28BJGeVYs5DQWpQSHrXJEEgHymktWggYa1KzA1",
  "key25": "M8g6oTJoMToAceUjutEUXUwUVg5LTLgXDPdMjCzXrjuFnPjCMczjy3MaLqnTe5KayfPJXA88eCjLUeB1DmPpDpQ",
  "key26": "5MbVL8oQwUHMc5RnUET6RYmQTtgEgAYEMnpkxrbWY6Z49nGFqTdCbrJbQDFShNicAg4AcrdnRvStryM2Tc3yGKBg",
  "key27": "2RzftL5iyDt8XrUmwTGzJC6HVoyHZo5hmgEsizaLuJRJPGii5FJZSxv88tGA7FoNW7k7hH1Y6gvHDXnkjE4WzAo",
  "key28": "5VZ7yGNTH4sSCs7btnsuQQynEmCbnpzX9h8AMWYS2B7RvQq1zdFa5huksTStt2NR9cgRXMJULQqK6VHCBrEPQR3D",
  "key29": "4dAvceV4rCTwMom77S68BJhv2DoYit2ZjaTtWiwgJNPpUEaotuV3zzx77r4BMt67oyP51dgMcgdpFGRwP52e42c6",
  "key30": "58MFxsXfRTakume7twNsgY89sLQvR83jHNeKCkNTsrfsYLrau7d2dqV2XKU1aexm7pkg5x5NGnZrpDgyhWJ4vsvH",
  "key31": "3wpAqE1QffsEeN1cU26oPsktRXKAWMLNrD5F7UpQXvTfRKJ5dfWVBJvS7qv8WFYN47Ks2WJZVTWa1aWm3MvSVWG3",
  "key32": "3NS9GWrrJtxHLGop7BXyaXPCjtnvNcf5gv8LUnfJjsAdXiJru8YnHDdXS8TBENivEjVbSjLrX9TuxqLkjsoLjjpK"
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
