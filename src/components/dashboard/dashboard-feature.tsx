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
    "4QN5Yzs5TXtR3PFCiVkcV2HS5MfC6GmQQY8cm3nVvH4zxRE53FTjDjRaiz7wsN7t48tTd3cJvKqXg1HrhYkxsjvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUaJhJ8wri5Sxika8VZ1VXTuAfqo3sYDV3CjHu1C4rUYM9dKpQJ6SseCKzV8bQUZ3fDQtpfrhv6MvDtfUhp4Phv",
  "key1": "4LnzeNyadNFbgP1AsGEygjas7x43phQiyRBDqZZqhaho4Vmb3orJqTyp9hCJdF7Vnt8SrBrsjWLwuVuScpMGwNcF",
  "key2": "2RUYHZt9JHbxRhEsY7FRTCidWfwNfaMMEvhP1QK8wJBxZmUTugVXNtMXktsAMzue9aMUS3BSXwQkor6vC6HTjfTu",
  "key3": "46VPc3F5yr3aGrBJy5gUh2br3Znw5j5E7XhkHZujkHfJcTBewq66a2ZAD3jCnjV7ykBPPb4NaDVaeDn2cPiTxp9T",
  "key4": "5VbPxmhaZy7rNabsbvY8A1DQ1FysbZThGA2Wvpsc2suxYJrDgi1HcUQEdBbSEqtFbarMrCUuhpXz9fsebkA4Gc3d",
  "key5": "32SqEsvTtuq4MzDuzJHSnZ4D5pLDp1oTgmMusWryZyBNpq5HB5AwcHinGYZ2v4Kg39wEZU84Apzb5wrgJa6fpyyp",
  "key6": "3ZXkaCzQmtfzEqh4xGp4ce8bYnp7UTCe1r8ZQRwGdjnLrFGwGbD58P1nKRok8SBKUqDFb8QDuf2sst6fn7wv7coH",
  "key7": "4PHELiq4R65V55yoby9VQZXRLDN4ijnhKm7pX7ufH641tXCgMTBiC7epuhqVvF3eCR8FPK9rNLSJfHFkG65rJHBy",
  "key8": "2XMuwsVEXfe5gtUH2a47jR8iPS4xy1x8CK8f25RfTht4HfPftztL8yXEoxS9NmSoHJDsbxY5iEMSBXLxx469Xqz1",
  "key9": "ENtp3HRB1pgcBn9uXbzVZDkLqR9gBdfXnZt1BHR5JYTex4wursTxFwZni3petasP5Zm84463NKPevtt6XqjojWd",
  "key10": "4YJwcexFu9Htuk6PWAjrFa3bvQGXEBzMXyZfozxphaxVTQjsHn47HPicZzHX7XBBHmTSK6AJLsFrXmZnNrtoYinb",
  "key11": "2EtTcwdKiQ2YCERkNT9QWi5wsfavQDj4XFhH6wm3ojVB1AGcMuS7gjmuUAezSPptURZ3NV7Ud7YxAzBm9ciurhjq",
  "key12": "3KgZJbZFnSW7ADkrqRU52EZ2KMkeT6Djb5QChaXesAAs5yZFWF6SZKwMHWE9hjymNhZWXGjZFPBvesrKhuuVsJUi",
  "key13": "47hV2S7tLwSkL5XDxM5dsogoD8pxZTUfpZA6Jaop9zWFGYoh57rCwkgNx61PtH7XLPx5UxWAYnhYABjAKqjufhHR",
  "key14": "4D9296yVGv86fQ7rLQix3XYveseGvuW2w79WcTh2SnCt2XNNsQS1bvjPfBj1kj9zyAfb5mtHEgDT1FAVzmm6Ksq3",
  "key15": "5bkb18CzZdZRtZ1eT7BuvG1czB5ZsKNZwrDpaFsNwCn5SnzYjKMqMuVZzEwKbAE49TTtEtAn2gVk4nJQzP9eVZjo",
  "key16": "4KxToCJ9suAa7X3JQHWwZ5DaGxPdrdiL7otaFDurLbJNVA988g9zjPvfMKE3UCJ4REB7evGbiK74kcJbCSHSSL7e",
  "key17": "3XPTXwQgAexpGF6ZBZeUdS1ZizWaDqRtFTCYmTmEPXQxLsAHoAJRykgz6VppkD4yWmpFxfS5wzWeHJhm6TuovtqX",
  "key18": "X9qZr9czWpcvSgRYe5no3Ba8oJw8Bu5uw1LfZ69WaJfBYjCdyT2tU4vhDFnzTuJQJ73qN66Gdu2RGBz56GfaKCs",
  "key19": "52D5cDjXXynaMEj7aJAHkgKtJR7je3L4w8Lp5z9q64dy222yimPrK7sG2rpnSyEcLC1BiHbveeeTnS72RAkWp1vn",
  "key20": "3bQooGNm29skwf3CiS3PzmFvd3Qgu3KhhYqiqAHrGgDfst9S5BuPBT5Z8t7EKRUfNWx5JcKsRDUcsXby7eekhV6g",
  "key21": "NciNEGyQzXTUQhJuXqKvmUTmav43gPh9GUypv3rxbXYvZNhRfZx9ZjtyXzqpmhdcb7WmZmpsvXmCCCV8w8nhysZ",
  "key22": "3SLibKYqqTaahDWXVZcoM4ePajajTKk7zTX8g2MF4YqrwiSXZnAesE6LZPmMBeibMkviZE7QqwLuLW5AmXgRY11K",
  "key23": "4fQsCMr1WumEv29c7JiqY68g4QecrU7aqJRR4jcFx2qHKvZABDhBn8biMSAzRAsbKmsJE88yPCZnH1ajgn43tkhV",
  "key24": "3SsYSpPYBNCHTzLqaGwLKQN8qCnhhP8qZAfetam9dRtxci9wHXdkfUnWFUZTiZJg6WccdwYpKW4wSwxgNWf7mgA3",
  "key25": "Wr8ZQj4BS548XN2pmeRvAXzncThrXirAZxjwDGoiKdf899kGRwU1pfRotdQ3Y2r2eMLxTkitwKLuhdUyrU3Nw8e",
  "key26": "3aab3NqBGxuehg9HvdBtMjVwj4vty7zFXPdcXWorNeHX2iWwWnWLHZa33Psiac3cRE5cezbu43geMQa7vcULNNjs",
  "key27": "33wmo2Si3AFByJTCaioqWvXtzVojVYVzjPZUUnKqpnbCtVoFkFFEmpYoY5BnEuHxyYBmv2p1UafkSnK6Y6sCF68B",
  "key28": "2QSTLydU4c5aYi8bCvWSeB6N9TCHpJNmz7a6MEpzfdQc5YU18pPQiWGYDYZyUdX8RT4JTQs8XA5jA42sydQCr4xH",
  "key29": "3BTd5QaAq251Hox7rw8wj9M9d8gNJbE6co7gX9S4DNHF9Upxyxajz2CepYkH9Gt3JuC3hWpMxDsLZPaqPkpu97eb",
  "key30": "jk461qkA2rGZapXX7gtQAuKMCWvLaivZRpQwgS3U2AL9Tjw4zPYRVuf2tFmyDXKCqsfqJz5eqT8NWLhcMhPBFxc",
  "key31": "365U5M7RGt7iR1rnvQasepuxji4a34MBYy9oXvUDtAcsYusSuS1Z6zxdBh3HnaumG1kKeeWpastU2APDevH7YHKA",
  "key32": "3i5SKtvdabPFBMzs4Cguebp7NA6HeRq49RHgYKwmjVLt7v6cNCcMoQLWBfgx6vkXThoAhfdGJTfHuojtdUkaxBo",
  "key33": "3ZinuGuih5TFyVqgk13GrBfYmLhxnN1sS6rBHZXdZSYY1TnEkKkbk8hYfnZAVMpK1YcA67Xv9K8fuaY3QsMN3NMk",
  "key34": "fZyz12T1GbUk36L8myCu62oAEN2eSYigokZJYu9m7RxFdu7a7CpJhd9fMunz15hkMdEc8K94LXQo3LmAfrTZLPD",
  "key35": "2gzSFvMzRSrVTomn3MHN4LG5zvfPjVEaZiyjFWNXyMhauh5zoAnTNF9NmyPyhQHnCxM284Y2A7M3NdyzqjChcDG4",
  "key36": "Rz1TE36uyKBobXmAyeGshtxRUzwoaneF8LvAhkQeM1LeWPr2dAi9vuK8KYYAs2qMaaYdA7Yv2ifwvq2kshr4Mfy",
  "key37": "3K8QgDSC5koNoS7iU7Y5CZqfwuJTiABwsxeAGaqUeFrzo2YnM7uPEHH3LX98e8fwTSRvpHWXSxFXaVk7b4U2P16S",
  "key38": "52DLQnMQzTwB2nLdBGBb46WKqSatSBKZKVD8gRMGjodZLgEM8ttvK3Z78utPKpfHWiFcCrpyMqQAD2CbFXssHV23",
  "key39": "3G8LT5mV7gD8fZTZVLXRWy9ssAyoQmfjdRRurcZRZmwPDCtTJ3T7CCtuSvSDP9sN8vdE8WqhNnCFFQc9qqHmiexc",
  "key40": "3r2ituMoiw1NSw1xwLDsfJhVMUeRP3dHG5m9ns1UqSByQWWD2m2ui4DJDt9EfEDz2U8r2KqYmWcXxr22MSC6bnCM",
  "key41": "3oPSJmQTnm2c54xhRYPxazGjjqoP3UUA81hYPKdLzwy99RKbfAvVdbywZxDTUhZ9TS1YgZk8C5ScPPvkWHacMkja"
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
