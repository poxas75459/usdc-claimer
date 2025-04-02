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
    "FxXWjQZkPRksHgBK4Mtya8PRuZrS5r6P3QJACCaKT1Hd86Vspk4nbmL2yakVJk12Abf4mDwaSRwQ1mTR8tePXwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgZpswekLtjeDBt9zsVLAyVWxEXumJUK5M8ijpboh1b1a8WtLRxnj7TTrjtmYQQmULc21oAi4HPSSE7pNKbtnuV",
  "key1": "2dNUCD3oBasom6w554scyQxAddapdo1xrxPUnDGAhoku56RRtDPyUe8m3J9sBVUjFnisPTZMDVADrojvSQ4GMgVY",
  "key2": "3VskyFR9JiXopmcgjp8nGeZccfm4rBBsF8QaPRnDP28h15rQtgN1LmFdZuyUe9H2XLz6DJehkDPfmSNkM9KVwvyT",
  "key3": "4Qt2L2NpgHqZ5amMwnfQxURrT134zM65fk3it4yN58rrigf6taHJt1hnJaM5VZkJkpHRyPbPn83aPf9qfxb5AhiK",
  "key4": "21yDa9b5LWB5EbwxYjUkn5SFqUV8JpMKNvZna66dG2WnrisuSmSfG3NRcWJBGLZjXRbhcfg1yQJg4eqqprunGdAY",
  "key5": "57G4Sh2PY7atSwGvz8j6tXLgGwyhqCcLTgGS6ioMyGdf5zWDx9zRX6akkNk47UQjaYdok4byBo1mUevBW7LWSRCs",
  "key6": "5GmGDU9iDh3rx3mtP1thiArmLgWAfuGWRAmn89peDBCXnys7vKqottYyJbU6jqeGr9XKz5Cm6D7i3WY3Vg9PDWxe",
  "key7": "LkXy1XfJRAXFATEzDBrMaxvwrLXtKAQbuZimvh2HZMsiGhGcpu7G7XWh3LQnUTSTRdLuKut2fHtTEjsrYBUftFF",
  "key8": "2ct9VNfutwkT4R14TJAeknoeFmUb1XMYp4L6hvrzzjifykLNYC246GoxTCfPKKepbFBxHqd53GJDLetxVmaSpTox",
  "key9": "4VK7QxzXibPJc8LPNU99eeEpXFPjkB2SH3qbmEbpjzD74kCUYyFecNzake6neVK1LJHP62amjY5qDGuvEgtnG7Ak",
  "key10": "48xboGDR5pK6UzhVJKophbNsDqjvr4KZUMJLEiVoPUAcvamm4pqW27GrkP6pkXe1YMzUyStk96uL7iXKjJm4bX6Y",
  "key11": "5cpiVPxBxAXXvZja58mJCFr8V5pwornZdVsTbte625ZTDWfUzeAPbxhtksBEja7QTf4mxk7QYED8c59dvhwYCkTc",
  "key12": "4mCGaPyoekMzzP5nN3RRxRZ3WLteZEWRkzJEPZMxszoAXJR3rUZEzTgR6W8q6PLyDTHKCQHggAtw7ycqYjKivbSG",
  "key13": "3oD9eDedMmyCfp26U8gUdzh5t6xJz7tAsA9AQfhqiNoYBwHBdY6PrzvaKPyiGqq5BMtCZuZajuFo9AQTCUJXDLoE",
  "key14": "2X7mT6nNzUV847acEmzbUijz7KLxRcMiQFARYkUxzMeBtUaoqy2n5xyw6rKk6gMPiQCQNf64HCVV47EgPGb87ffe",
  "key15": "46MNM4YuG28gCitaJ7F6DsvGeZskri4Mzz7PVH82cWTpW6uFWKgGoniQ8jYvcE2fFap8Vtb8BRFqGrUPhgYfoVMA",
  "key16": "5Btkcyk9V9KmbYHVnAiV67P5ofYXYAuVPYGVKUSb3KaZafKvTsLxWb7j1XDUWg6E5Nw3Gxq9BTCbu7CvyapXWb8r",
  "key17": "3oSGm95DHmNXHqCLrUS6s1q4pQnjJ9fns5UkW9NtaLsNFKG3XmziZPGWY48HD5y3TjGtT1DNev2eKSZqQugj5hbo",
  "key18": "2Q5jmBhN4LJreijqvpYMPVAvbz8Mx6XWeN5nhwGvmjSdodQ6bPwX9kdqN3pNopMeff9g1yz7rTo9RdX8aXkRjrhX",
  "key19": "4AcmUFVgH1oCEt4S7LJVJy9gj8k3NRbteH1Up8wwr1zSnwwArqvq3kC33AgXvDw3PqchHXKxitdwJWJocR9A7WKS",
  "key20": "2JNPSb5ufi9UFBUzbZSYgdBHfTzYeZxD18zbjSCYXb9AXMwzV2q4hmVuErby8s9LWewBogjaCPP4caCzxAZBqLR2",
  "key21": "2YXkH2xspJ7dBCcdgkVXrezKcnbQSeLzDQYiq4MxwpNcLjHyY48X87RwgTR9RoySChWVnTJsEsuMvkbF5w8TVqvq",
  "key22": "3SqH6nUhAaKGDQNAbBqNGB988HwsaPVEBfFi4xHTcQhzmsUZhChvTvLpjVUGcAr9S6gHvW2PpVnoeGAVxhgzQxHY",
  "key23": "58x7UpsuYQZR33P3hCyTTov46XC4PnnqpBKBEyyYCMZ9Q7HwFiCNp39NXm5k9Chg1fp4m1AhunXWBkdjUdJvbetU",
  "key24": "5XSSf1gWLnbHW3vJzio1qhRqNQwxhySQUv3vCSMtp6sD9rNcwU6SyeuyCqgfiuo3SzrEATTGNqGjESL3tSrPNhJR",
  "key25": "5qViUDdvUM7DRDMbQoT5E7buQ6Lontfroaz69VuA5VJzTLBnPj3aayNAAZ46d16FsBmQufvoDMNGCZYfxvaUevgU",
  "key26": "Zzr7g3tiYYQpSKVoWAWcFbsjRSdFdqA1JWyi3iB2BSCdqLDHuVhYaQ2Mios35vC6npG78evVD6XXVtKqSdSabEM",
  "key27": "3m2jko82MZvpZR1rmyVCSA5gvzZQk3uhkMxKq6df8s1uNFXxhyJ5vTSupwVmMdysPs1eoVCxbmJFEpWnhBtGH8Cb",
  "key28": "2wds28TJoUYsvRAkGsCBUjgfcU9HpFPLd9p5dF8awBrT4PHVicePxvU9gRQj8syUiCmYC2cW8cy25jdUFmDv9cKt",
  "key29": "2FieGGvdWWd1csLgTwTixs2j6yxFtUutX8qVc1wjhqkbSL4A4SWE8dkjUnRS1gYJLvF5US4pJ8VPqHq8X67zpdpA",
  "key30": "3ZUL6jvC1hf3tyZQiz7gdVmxtzhdR6BZj7ou9FpP1jEGTVtJUSrTxhrdv4zVqraK82BCmVxY3PYjoeGeWjpzcuz1",
  "key31": "31edbxehn4PwoJyZ2Jm41qVvUSdK6wZWfiPSHrarrSM6k22xfd5fbSk8NEnB28Fy9kGAEdGn1CVXZwy5VaUZQtyX",
  "key32": "4pCkX2ygkET2HWLhY2ppDXRaaRXcP8ohCZ63V1RiU4wSTFqE7bdLCcBUUhyqyCs8oMXaWXtU3v3y4ER7MpKWErrw",
  "key33": "5kBt46meCgEkLzJxu68Poc2KL1hB5RoJJgVaFbN98ojmVStQRrAkbxhFYNJ7MG3U7eiY8QfoohgYqXqZ1bcqUtVW",
  "key34": "4ujEeECuZQ2zLX9k3Yf6SYoce1x5tBae51rsygka7AsMZ84Uf1gd2rduvA6r2o3SRyj9ckq321SLrYg7hHy9B8EA",
  "key35": "42YR7v8soLYe7tKurR3gPiHw2kT2iSTij6VnrxjXLkpPynPLVJLHxbYTgLDdEs2QrpnWNnRxJYoeYkwM7ckpSDP3",
  "key36": "4XxfCNgfHiFh55ZSMRBTaTdMnVA5AyZNUtybNEJye9RLNE6idpxYF22iMrZRAij3Y1oiguucWGiJtBMvXQexY5WM",
  "key37": "2LJfHFD1JcRbMedyYoXyteiHe8QPNX2NFvC3wS9HkwcGoJDsxwFjsG74iiTy4ZLFvqgrUvXXX9NMJzz6yMwGqrD5",
  "key38": "4xtFuKJwq6daMLYgEQR3whK5d6jN2B9t7SEhNUQvTdoGwv3cxaa2sixGZ4KBo8mh9qAr65r5TzEgaHxFwBmFbtFu",
  "key39": "2RYsJq5e8JmRsTnxashHt6JHazvCQ8aN8toFsjW75wX1eesD6uCZWFgDhVVV1QVgQEH8HJdeYjxwv5uqRVrEMrMG",
  "key40": "5yNrosPbKsg789EEwLkpJVmYPVMByCgsNhUBp5hbgyPR9WNAquSJWNM92dxhMWcpfvLQEAXcvwZVfmCY3fPBnBkz",
  "key41": "4KtFRRkdzBNeobC2hsLyKcH5Xk8n7yYwQgtxWCj4b7PDNoiAyLTPjreYj1bnjyXXNfJ4iM15oCtdFMvEDvERnFWi",
  "key42": "4hKotrddURunuyLpm42gk9qa7P94PkEuzWi3zHTpZdiTMZvRx48GsuLyHnMmnXzSb1tWNpLCzHZtKE2L2D1ZYJFX",
  "key43": "5fDWZtyPdEKFojzMN89yuFd1TUFVRxYHZQApHf9SDdsCdcyLnNtoKctcHvVz1GknDu19jQj7gWh2Ud3u6fE9nKSB",
  "key44": "2q9aiSmd9oiCVm9LdadR9FSbTAUQXYVNfHuYEfTSQkWDhdq1mk7azkaDQhZv4966ZTQfv8rPrC3f5s2rF9N4PhqQ",
  "key45": "Gu94QMZm53aTUsSuuL54f4nhrGAr2Ercu83yFcYR4RVunS9SyUVpDx7a6MR6CNTtY1mu8qej8gBTWRduZR6Mi48"
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
