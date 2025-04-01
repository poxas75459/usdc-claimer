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
    "5AMUW5yg9NwmBmwpBM8RX5jB4oYKKvUXe6ZtWVZjXP2P6uq4cLMTsym7RSsrDDeXbAMHsdxdS8Lhchh9NUwvBdrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iJ4bYww3TeuEMrne69TzmcsohfxTpQLpfzwgXuJXuYimiSkG5NDUv9WyA4yoMWhFPhCzvjJFgZkFU7ru4d4JFa",
  "key1": "5K8ctopcPVymJCFXfHU7xefKHzJqVpXLjVFCvjF8ZHipfpGbXKNoayYthWn1CFDJWeEntBNLvmyc641wj8Rzi5PP",
  "key2": "53meAM9gLeSYcTZFwrzuuDnPcyFdazo5rjL5uPJwLZVBYMNhFySbCpAzcqKr93N7yWiEWnvGm6Ur1iEbpwrwXssk",
  "key3": "4Nb9XztPEsqT3Cw6hMutoQvfUyrhB9gSkLJDC9PQke77ZZpaP9CjBFVFSJPANhH9hkC77ePfok2Db5acCRnsizF",
  "key4": "2t218UT3EhrkKUjNjQgyxJFC48iykSusbQJTyLLyfMkaw6aoEmUcL9bW5ne8JLsRyr4tP9YDYX7x5aJ4W3KUy9aA",
  "key5": "6yDJo1o9AnruhxF1QiwBVj8fKyZda2usptWxBQzcLCyLRiqPqvSSQoV9PL3P8TSXPQ7cmbVrBrJx8nuw3kJwrnk",
  "key6": "2sSX3BUcLXf3UESvW8UNn5qbiuBrTnpQVVetnBfR2i8U8ukazg2skf2QKf1BkfhSwDs3oCiDpxwrUT5AVY59SAYv",
  "key7": "j5YaRkKaF189LCgXSdUSktVNmR3m5c6ZdLxggfiuympjaX8ZvwKt96SJWHiNsNGNCPiscZtTNHLPWSNZCAhkJ6C",
  "key8": "vjeuHe273BQBSxywW6uLi171R3a9AAZBxrrXbGvz5PoS4b9BS5r3qZoGSsKMbLFcVMzRzDTwkXpXCekcLPXF8rP",
  "key9": "taBU3xdKyjKEAsZNn9rWhxrMy7od5CLhF3TPGWUMDxkawajVEi3QiRR1rgHkXPyxexA84R8yV7bn4UKZ7c4azKY",
  "key10": "nkNiJ377iKYweSbcgkKsSp32A8Z28PYMJq7SnRHNY3PfAj64GrcUCEz7xrsgJaYmBwtkUYmhD8XzxdncszHD8uw",
  "key11": "2rH5KG7Pb48TbASM7ByzuBun7wxSkPHzMLcjXrfD6XnWjJqHvgUkq8rg3LubM7vfcRXskK9nZ3ZSvKVr3V8h3iqy",
  "key12": "528kjvZ4fEzyx1rkJ9JPo4spFdVAd3caPiqH9gmhCzjWJf4FWgis1QtCj6X2sPmTWPncoCU8weUJd93PVKwsZ4bV",
  "key13": "6XQ4kLLFh3RqTYoMzTBtVcPowmCQZ7YW9hgTyEgkh5EwCoR8vPtwCadMjaHjGq5hZK3VSP9LwogiAc4eQQGueYo",
  "key14": "2TskebhRHACXAyUJjs9EFvTwser6GWR2MvwC3idRRPegdK7SrKauoGomXVKWSPTpGaoBX8VHf7soUWc53jqBN7zs",
  "key15": "21neY39TK9t13Z2vyo8bdiYbgAEbL3kK9gUKjxHb1sBtTDTGqK1idz1U8aqCgempQMsvK8QjngGtpUGJHi52Mfjo",
  "key16": "2iXwvtANHHBLHjYPTsQbG2id1qeGyAAjDaqnNd1kSSjZA4kVqY42C1rmGtQehRQtf7EZQurDZcPAvnXc2fMjpfug",
  "key17": "VryEn8mmYHeze3iFErBzA7XPYZctJ6RNWZpXFLqXkxnCGVw3tjB8tLnc1S25mcqdgDFBiSRQtepEzp3dbnAt2FY",
  "key18": "jgJZSus2muncGuu6g6S1WWpUdD7cQ7KU5qTpY4QzJx12xxi31s2Hqqf3mY7K9eoDq1U5zqixjkLYWk2ebcuUDhh",
  "key19": "2nHPGS9T6t8YaRrRg2eju5aRYV7qxso4R3bFN3PDHug4deKqBFd1MAVVzeeGWzGAv9ZixFkyZG7oRapVy6VCUaFa",
  "key20": "48WkZx4ACe9ujg2UY7WBnSFSnTujnosa8Jd5K2Kns7oJrPGgDC6nb7DewJbW3dYniSc8xRdyKEPdgxDBVi2YFRgF",
  "key21": "2FyuYum16pFYkRDiapgqaUVigd7cQxzG7hD2nW5xdSk15fmJrrc98LGTUcBWPVdn27C5wY1GNgbF8Ta2CVi965Uy",
  "key22": "5B4bAuW9MvFVbVS7smdKMw1iHfFP5buAV1RmkLnDNmtn1qUh74BsA9oukGRtChg8TLabsGXXrgDXV2KG9Jt6HWAB",
  "key23": "3kF8GJNya6UhzeidGkCEjps49ktJzCbNfFYBBWyMBAB9aM16925gkbqKu8eqNKECtqbdoNA871VLz3H12HVyV8pQ",
  "key24": "5sjyJuoC9XxR4hsRWDBdZhSDNjn3gSvMHS8SKvogMmhaspWisaoYYchzFtWp451cP4eN74dTod18VUsYGmuzo4SY",
  "key25": "2xRDKjSz3gndibXZoebbQ9CN1zohP5vkG7q2steHotFKMBpbkkpYhMi8xrwcGBvpR7FMnJu8ohEJMq9JDJhBLyWr",
  "key26": "3bHmaEnhgrun6iWrw8PFd9iveu1sTwYdZYNuj4et7FG6QkaMeLZdxvKgZc1Nonv8wGAVXphQp2kbxwfRwegveTdx",
  "key27": "4fTHzYXSijb1Vtbcup94V5QbY3onrsYnHigNJJPfwpqrgUAF9n5VCA1r1zYJB3brcJZbLwDGAuajDQMsWDfKYDSY",
  "key28": "5Z9fFLHevmqmbY5d66yWNTJ4GtmxNRkePxRPYSucZNtZtkVbJVmVsfeHHhUg4dmy8dPjw3b5sGfWSVhVxDYNhq4S",
  "key29": "3iVJVQZdiMKa4VrCqpJFX3f59GrwnZ6YcoWxM9rorX2LsAiY74aZeZWWtDNUZetSh4HLUYSdjhsvtEW6X984HPP7",
  "key30": "21Tzte9xhBjPwJUnodxLQSeo4reX7YEYWYbbAdLS8vZPMQJUYsMU3St4yYLMtMmyk7ny57qNE2tutePmY8qaic8P",
  "key31": "1aBSPrGeFttWsH7fXJkF33fZa9wAn44MuFFbryBbykkSpFGtUBFLGG2XVxfxgL786XMqqQskVJo5moDSBySWoUk",
  "key32": "3LomCMCUvy5JnyW7P2qzf1bwyaDA6dsfJZcu82ZrU9eXp22vzYua2wwmy1G6eZx1arvTkSc7CNyqAjQ3RmS9dSx7",
  "key33": "56paLbD2gBM2KFPJzBqQ4HUqLGUdrFSLsRxsQSu7sdCviz51WjaRXwzwgqg8FSoL9SXQgmLw2qPtjkq4ZEGmzRWf",
  "key34": "kqC2uKoZ56eaW64W3Zc2XXMoS168g6NowHJC8WWygw8pKj7YPp8zWib2ZZptEZbj1DSeJqAFBpz2obWMJhDsbPy",
  "key35": "5fHWDNyz9fzKV15UJFGVtG9Mma3EnRW8a25JobAD4G9FGxACDzjN8gnxV2JErfSAnHDSJ9uK2WiN2v7g4SJZFFsz",
  "key36": "44P9mKxq6pUx9LpJ319fcTX25HY9nspEdV81L3gVziDzW8PgQ5zVEJXpttvsjdxCGN3jbf2AHr6FjJmvqPXjpxM",
  "key37": "4BqFLNiMiSWmjuq9NVC61kuXiwfANNFS2qc4nk49PyTUh5NLsLzGRwnUGfH7nPedccM5651JtVtTkcZjNCcgQsoe",
  "key38": "4EHDRYpAbeYRxSc6axTVQqiW98XQtMiBk82AhaWmqCJM64WftHvKfP56NjyCg92cmwXfyNf6ZVSG9BoJnVKdS5VM",
  "key39": "5x7dCHWSaDQJ15gcZDnTdENDSsrGFr1bi5pvNuVMtrZfnG2HKKaQcP5qKkRMZ95oF7Ughdhb8LbTtitsyNAWGvmg",
  "key40": "2u5HvxJdPdWCosSSV4mD8Mm58NPeduK67rfWV8dEbq8jUbVirGZwWgYDSuq3fPHY7UXxocbo4Zpt7HgewbZCUQig",
  "key41": "22981UAGkM5XzHXEix635h2DS5rBDRXMvXxuysheVs1EtLfswUdfugbyn6Cw3rVrYPSTLUK9TDgq9i4QhGcBMKoL",
  "key42": "5v4eFHrEGK2f1uATsmkPMidKztCstAZd9RLWXJDZXjXSdhWyxdWhWVTHvhn7ghcZvWcoBPinhgucAPzvaKxHwAwC",
  "key43": "3vdRavFsjXqb3HtKMw22mGyGu3H2AcpMKCQNDt7R4cbcEgGWHQZgozjk5L3wA9Y5mhuDEvbbuWRnBhidvjckDNw5",
  "key44": "3LkixwKydC7M2XAjiB45DvAgyGE2ULD3tgHhPD1LZE9WmA84epZckw3SAazTWWQASAUzbhrjiV4hPiLi9sR7Fafw",
  "key45": "JN9G99QPXDSr9yZDvP2wCpz27Aos1fA95seZ7DkCDyCzB4DaAeJYv9pYYT8uMVyg5NugAJbGLxtAFRErDA7uvSd",
  "key46": "4nnHRBWzxF1eF6Bb4Gss3ZNNParVKmXn9VZBRiAxseNTGJPrqYgfukBakT9mqbFMgmXeb9fg9Eg4E7W2jVndzj85",
  "key47": "37aBTnRwH9nmZ6VgH7r5ZF7hhqdsv1TqzgjjZoehTa9zdGjZUtHuS61Bqs1mVowpY6xmvX5fgYLFhkFaM8L1CRCW",
  "key48": "42FJqf8f8pzoYKkNKGdPD5XMZYtWS47sVhJzjqum39p4CMvhYW1qWctL2xCoKgaayM8V8G1eCcftcGywMtjUj94N",
  "key49": "2DKc3jFAYHEWEnoKoSbffT5Ychf41TWenRneXk6JKTz1ozdY2NUfeHpY994vyvMXtjytcHmkAxzJadD2DZ983PBk"
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
