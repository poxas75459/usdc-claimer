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
    "2rAV3Ugknp9BPi7TxUwXBd9ATD3P2Nhg7UobfBsUQ2f4EmGuAa3D3hstPGMTT5AARaf4ofwr6bHEbWspM7CpHnBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jMFTE2FFkQJkrrYfMjSyETtwtDW8exrmtBVwSN29dt8VSy72HQHaAWo58btMyjRFMKkDtJLLqbBraNXWXM2aZ9",
  "key1": "s8w9gxWst6NqwWjoMgs5axGzCb9BnKgu83yeYEXNey3CGyFFFQBq8axjPCjJUhbA8eJDemYF2rQ2oXBGzRJwfpb",
  "key2": "3MYDK39fXgD34C3QhSJSGBpYcecnvQdvPV9Pk8ddWyyRNTXac6ZcEUBxW1e9WwGNjhLunVLWL2BZ9ZF3hcmD8u7V",
  "key3": "57SAptYL2byz32uJhGEguppcUXQEXzpRiqVxVm4bSdBgxJButvZZPSFPMpFmJigGwsrgVtJHz3f5BtVT3vg7o9wS",
  "key4": "4zQNkRtbN8p4EbcURNd26SBcFvtfQ13J8KLkxWHsxMB4u1YcQHj1KH4fwkk56GhnQYf3mCKQgvw1kLwaCKCVVwmN",
  "key5": "2sqapHJr3rL5fGc5UyMQLsUquf5uEG8x8qWqho15Zf7o841qXqTJTMqaPvHH4tCYy9RDLeGJockshS6wA4coPv2E",
  "key6": "4orXMscXEgHzgGWDdPZbEtgTBJqDAxoxWRnm9a3BdvK6JwGneDzJW9sxp8HxiiwYK5eqBPVPvyZ1V3DMJQi8BTu",
  "key7": "5BY6onreBLvhiNiDHYoqcpft7ho3DWeEUfujrAyYAKm96HgvzdzNE3jvd4r743aRWsfZqBm1YPzKmgPRZK6FCwua",
  "key8": "2SHjxbiqQQnkj4w7YxFUYrhM1oMphqMGVnw8zpQPSjiSezpfd6eWMPy4LhqzKsBZQ3Jfm8fBQDnQHRmzZhzoSqns",
  "key9": "4HKnKPL5WUg7ZU1WXcPTv8HoSAxrVoq1Ha6Z8btag3MXutUv81NciTxMf4TvcVWgpYbug7VrmCJWJXRAuBMJn5q1",
  "key10": "5ANgyAYdSvhFyKXaFbHUExqc7k2zm8d9whpZWw1cS4vhLfvmfqy7RGyEwNZDpDQeZZfwSw2aa5qSfBhVikn1TwnZ",
  "key11": "c8GQz1SL8fqtVhJpk9VSodcykbCfgnDhv55eSwCNQxjAytvX6MYjQfahXbDMSokcjfViD7Lw2hxSEoMqBAc4Kpo",
  "key12": "F8TXrmnDvYubY7NYdtEuks6r9g88Mgs54WFaUYx5DrtXV5yuQVVyvJutnEjCBBYMwcXuTHmNA1NasHfLcEn9rcc",
  "key13": "4nLoecA73TqEfty69wHbmurUWmJi57onHMMy3exEUv1b7nYNB91MMm6dgZ1eqakVX4ZUS3ZijW4CoSXNwXgYyMa1",
  "key14": "2iMFTrsrB15yuj3oYTC7Y6XKKBMjBz3Ez1bHnG3dTcY94pjdjpWZWbys1xUPNRJxwUYHciewtQveqE8mevqZFdHx",
  "key15": "35rBdaPkZVCrNq6m9YpX1hHFXuzSfdqWMWspQBEa9zePBKSo5UKHCHNLVXtEcEF2djc5p8tDBqT639avLo4PtQxn",
  "key16": "bYF6tA1r6wUch3Typzazm9RsDNz13qAeVXxMaJwH7ux9Yx3dLcQexWRFinZeHaVqKH69wjH4e7enYg4VTJFCMmy",
  "key17": "3jFxdmYQu6cJ94rMJ5UrDbUtmN8MhKbAHm53Q9CzSYCowgVwnu9KjaqpNms268KDBNFUQYoBtawZRFMhkbR5Y4aU",
  "key18": "4mZ7L2fY2PK99x9Ccnf47vpGKwnAAUYF4WUo6AEERZzwSXD1e3cjbVBBZHLYVsbLGqWawQg11js1Ao4JeyfoJwTV",
  "key19": "4G2CEEfVoRbs7Y79ALryyoxnAHxBmRZ25MrNw65YysqBBLkpUJTZ1dfV6wovCh6xCYyX45HYqeue4eVe3onNqh8h",
  "key20": "4uGkufqSnP8CJtULNdeeAJYgHViG1rLssfzB1sAxPuJH9dCrCR4gfNbrYvU7TVn7rwmPBVaMfCvPTQDpUeg3oLjq",
  "key21": "2HkgqHzEWBzZ4ahaKn53USSYfsQxq4Pasf2kks9EQZXf8Hsm84W38Ti9JMcnWxVyXJBARAYUkp19Fq4pW3GRksVq",
  "key22": "2QWzR27pq5KYrB8goKMKDZ47FgfLZENGimEJjCWNnWChrESEJ8czv9xGnc5JGoiVzT87CxwLVNLQqgU7s66upcYN",
  "key23": "7e3sYpsCDGGQbaE9SNiEUaATmAbnW43qAMsMQiu6jv6LwuhmxjFfGWU6se7BfYwvrcpJoNUrECYN9smvLo544Fv",
  "key24": "3La1MTMpjAL4y3ATq95AWJNsHSeZGBe5HXKL9ukKDDui4gW5zFuQJjj75Qae5NGKbyUW5YK4BDkQqfwBD49avW1a",
  "key25": "3msZS2CNnoQYy7usn3t6S63BvC7aRgTjQPV77oNV7QUZcc9nEC53UhCLnmoTD66USfrxGmXzAdHUBPmpzdvUDuc3",
  "key26": "4w7LcEWE9a4RNGJ9AzDGHiNmz1tPZHYjMvV1NTXq9XPZdY6QRAt3uVREj5t1XXaRhVXt47oQutpocbNgh8yipSF2",
  "key27": "5C8QyMjHw99B9WLPLAhnUneABbmfHkUz9qFxFdtMr1NPj4G5wcAYgJZnFs87n2eyVBg3WZM8GavRzz8RFiZafSfh",
  "key28": "3JXrZhfNsyAEpDFoohpqeu27wtiypyv8X7vuUNwwhmiFCQbdCwHqFcBfFCSqtYjARRsyCj6p83KjsJu4nPg5BKFk",
  "key29": "5v4iFTapYJXh8UGSbqdcpKLhhJe3ngTK6jge9KwMUbta4PZ2S3PWG6CMr8SaDcv7USUdeMoV6zFgYmGPrHnL7e1c",
  "key30": "57TQP1Y4X5idqBckRmjeLbZ8ruLEKEdAvtwoqm28aN8a8WatZxxykUNyffsm4Az6WY1YKGKDXfjSV11mgJTaDq2G",
  "key31": "Er8kBUiKnu72DGPBg2695AMkUK2L56Sc3DoRwu1Pk8oVMiF31kQwwArPjF1wWY2sHs95StumgD4hGyMtUVVmg5p",
  "key32": "2Ms2m8yRN32eevRoyEaHMheYUS9v8K3BbKWoWzGXepYj6NcgR46NpAZu78FzsaaW7vAT6gthSFvkU5p8KJxS5TRx",
  "key33": "56d8A5RGRAwVe4o45o1QjyGSrf3QkWPmWoCWfCajt9YPGzZ46TGrhKrgc5NMEvNYFjz6FnX3aK6S6gGQ68gCYNFH",
  "key34": "3RtSj8ctNp8WTcV34TSWvKoj1v36kfBeUPibjHQWo1niA8uFHj1VLyn7piUvE8bk5LxiryLFB7PdbVdgEnCYjgyv",
  "key35": "3y8oS5UqkqLpHh8fWFtWrmykXNnJS4wimYbKJdx2xa5i2iUMzZhGuFjMj11UUYRScXWYhTVaS1MT7BLAvaGSYmzJ",
  "key36": "4VcQVgmRKKw7Ja1Y369Yy5jk3hqQf4FmdXpsq61mQV7aLp9iDzGPBMZubRKNuXFQy61SwWs6sZb8jyTaWo1iYHEH",
  "key37": "2dToWzfx4ZvRdAJAGa6pLditKvM6z4TwN4rYQBSjSC5wjpbBfWvzGpDWyyJjSmHZ6cUccLoLDxCeGthsYr8Wzh5u",
  "key38": "jMsNEbgt2eprBDX1awc51tuRYhUk2beMEUdV17Nnxa9ATB1D6GL5YH4vjmzPmuy4zGXGdAu9zrTzn2s9vuq1Stb",
  "key39": "2qjeWywfKJYKUiQBRuGEt6s16yrHWR1v91JUgZv4DZAsimqz5YHzcJd6RGUMM6UWuDaaNqQzA1bGF7AKE9UjKmPo",
  "key40": "2NeRWhJC6E1TDurjrUKvm5msiq13dvfcBotqYXQua1fkZXmXLpwfCdxaFkfJVY5eop2T29jxsZUSwXosKURZkL9Z",
  "key41": "3LqkNKJKoWctDJPTDDGXewhwzDcR32587WE8L2oyuq11YDQ8s8HG3HZFJCkYkBWQky9YeocqSaZSKUVutLiW55kk"
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
