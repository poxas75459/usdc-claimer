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
    "2TyXrr1EMJPb9bespBarvqAbDoTofAgf7q7g8ezp6tN654oijqAQMM82D5jPGS6wBLz58K43NAHCQWzVEhMSNPuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rpSowCaVKZAdVAMYdePiCv8Mx6wUA69qnh7KwMtGkpAUAAGCneXH2hLrhjUVz5jwSDSqbyPdWaGZ4wa23fLZP4",
  "key1": "3qvU5TNzbAqDZVxmaFtkX9gemSMTDfvSk7PPvK6fA3HpHvyrmyewLZLfpEjTzsGvHZBLAuq5ajUpwdVu3iqbSU8A",
  "key2": "2vt7dLt7p5BauP1F1uFPanNdeqiVbpth8iGb76sTYAF6gNHVoQQpgAPwrXq7enpp6MMJbqqJMobtG7dDetSr93Fa",
  "key3": "3Lbroaq92h9JW7PtuDWLF7re3jM9mug3rfzxAhFesZJqthbioVovhNiCK1BYfsyF4vdtK63RkTjwVAochDaaPLP3",
  "key4": "4GBRKoVVzBmocAGatFdQayGGoxoCxSnZgdszuAHyrwiNpJqZGHTkTURPcmY4pYDKpeTLdDnj71UGpJZBWVym8xvB",
  "key5": "2UwNg2K2JyjcSxk1w1a1wg843n8jE8q4iLSSjFESCVN3VsCFuVXAhWahfSgQogLUhKAfxr2B5hNPwGosZj4t5zbK",
  "key6": "5Uus5AuDBmdwA3UBbFAjvEydYeVJFCZLkaEdKgBbHM7vb3CegjmJcK2FjptMr9t2eazbd1VSH2vUWkbncbHNfQo7",
  "key7": "552Ab8DUcLwYpCsxuDFxvMBiEwwhbAZiCMPLjRMSf5WSbZ1qNyAjr1G6VbAfgfKYUj77mMA1prnrSxEcQMnLkRw7",
  "key8": "49jLdcLuXTskLgd12otHGzHesP1F6fvReEDMBP1dmVuiffBevnBn3nR1zoqFHuMrYYuvR4rTRjFyvQMXn1uzSzYp",
  "key9": "2MqmgQkscr5WoayojEbZHXcXwR68hNL4Vgo7MW1stjiDNZboJUEkCKVMCGSsdo39s4KV3RxUixe1SP3pvWaBtzaH",
  "key10": "4o2VhQUbmnyypHhKJ5c9fX84H6MRdaghFxu15HFRMJWD8E6Enh4wZvTcGs5Md6NUwnLMCDJRGptyJ5HCp2vhycwr",
  "key11": "4vDRZKqitTFa5KVKHRFxMaDxNwvd4sbqVYY392L5yQcMAuvhcEL1BvU3jYRYSzACi6rnHmcPX5k2ouDM1UUgoZZi",
  "key12": "L1JAUPTnLv9fPxAwfL5Hz7yquafeFjxVj8zYXZCF6zveuPngT8nchkErPxqC5R8i6iYoQYz9uW5wntoa8zdYENf",
  "key13": "FTUuRDtQo9x3vCmnQ8HssgPaAZES2BvKeUZUvUppQLxsm4oSM8ruPB9duKNt4zQgnw8G8cvbKoazHLANNAgkXMP",
  "key14": "4WXrP745329USRbKJYsnL8hHyXncrNcL9YaFBGLNJMS7vzPYL1epzcsSwvT4Ehzt4SfiN94Vwt8zGb4iRTUwUqbw",
  "key15": "62mAn6rbr4D6WqWXtGVHMMUk11ub7SFhKUoEFSaKsPWuo7dCrTqvvcrudPgxnkBmFQk7423S1SweXFJdH8j26urB",
  "key16": "3kj8BJV39TWC69U8Z2B6B4kqHDGYTZr6GwFq2ogoG61D83r2VHx6beZxLfbRyTqrMLRCUfpYyxbbiS4HPUN11rDn",
  "key17": "2kbfkqD6DAnDGgJFPA7bnsTpNLrucNswLTMCZFS2pSrmw88u2N6YGAj7yAxudDqfzbW8rn9ZsqHS17aQ8Mb9LNKc",
  "key18": "4v8ziFP1BTQitCBPT1pkk984nMm1qKZj5ZWv7AotNeY9cvy7Lmvc1EdhKcfoXfSjJiK46q5Sv14aHvzXpd6vqeUK",
  "key19": "51DB5ei5STy6HZEtGUjbsdb5tEcRh9cY7iZvoYQMswiBUR2TxVWM6Xskd5Fyg171bDz94GkhpZUJRgFC49RxgPCJ",
  "key20": "2F9usJgtBcak9jsTQGECGhkeKRXbYZF5qZfkdByYVPmDxuDPmPnxAPbG9vTEp2KzEXyDZUrNrL43HBphnvfiSfuq",
  "key21": "23WgX2Z7Wam6rNWCDm2nQ5R4fBCtjBjL6hexsWiwYc4ZxS35JhTbFAxnB841XRUbn58wkwoUenH2vNZERshoAcpA",
  "key22": "4iqXM1151Qittr4RDVWRJgbggbRQ4e6d9UYJhxeuvbM6vH7gySDpFYkwvH4yJQHjsG3SqJ4sBARb9ck97jPwNuDT",
  "key23": "5fy56crmeb412Fob4quKM1u8ZzHEzv2zfST2cxnei3ndh31SBKVnh89GouL5dyQDshMseikwM4wooZJd6x8yYZDw",
  "key24": "5fkg6BbfWrNenrUfCg8KGn1Gey1FpnLMjPWrX2tpzj7ctLf79pmnm4hVYEyM37tPiA1N9e8yuMsEmykPa3UmDeLk",
  "key25": "443PnJk7BPzGfatbfSxauJC3DLPnNWNH7D89btC5s5Umw2VSaRGFrCzUQux65KndmfQ9mripeLM7pFZaxtiPk3L7",
  "key26": "66pDRawGFkA4u15FCWzrXBHbLSvKiAyFHxe6ZpnJmAHdaFSu4XKpn6SpAo1AXHhq9WYYBRabsvP88bM9PEBk8eUT",
  "key27": "e53eg2wojXrNN3FwLdVSVHTrdDxWMvtcBBhXVoWujd36rDSvaQ2oVktRDJkJN43Uh7Nswffxb6V4mpseLUM1gkn",
  "key28": "2qbPjsTv2eLkFBxLgc7woMfYpdCBbFUYPCUtsGk1crtUMeFLX6ehq2tgD5eSApAsLHvY13QxtKxz6ksLepsA2mHW",
  "key29": "3imVzPTnKWbSqXsXEEHm3kgxNgw96jrH8m8ZvB1ghoaY1YAXAdRF8S6W3AMzxorevd3nPKrsAiF3ntHimN5t65nX",
  "key30": "3rKnQkkQoPXSqxy9Us5KFS2azBbxCyaxeAJSPLxSigmtwUmr4rNdGqNwXQY4yLk4iejFY5TSif5K1ZJR3X6K8Yj9",
  "key31": "3gLdPnmGRsC7WTiLML1JyhK86c9pbgyCHkSEXkCDkxxCZzT4u6gm9g4mR6F3gYay6UJMw3ehNbzocTEtYNwaw4d6",
  "key32": "4TYv661eaVjg9W4hM54A9XZZWJD8Dd9wbQ5YGYL6VEbEktw31EjnW7yt7cvQJMn7oiSCRPapu7yZcS4wFZAxzX7A",
  "key33": "3QiJHQbpZ9k3h4JG3ueGb1dwmyEazP4ZjTAEgeHpSFX2ah39WdcwGSZfRCVyW5D3uZxfdi38juvCZYZzrQarnQvn",
  "key34": "5TE61QLqF3na1goP72quEaiPUPaQLfz3ckfhysJGUhAZbH2LHsz5Meac9KXoMM6e5t7cs4KnU5md37uGoHY87kJ3",
  "key35": "5YxYtV6Ysoy2T7nxfNWUXRxAfsjinEvnjoUCsN2TyJEK4jYZe6Kyc3qryV6BQBujJhhw6cFkq617PNkEsG4V9Mrh",
  "key36": "5KXViCWsktLsv97Gs3pFmLEZUqx9hx4ayDK7f6U6rpXDBdrivWAz4xVq537tTeZdJiWP3RPbMhQz7steLfGsD57J",
  "key37": "3vFUxx8JRvzPY5PWB6Jqr3fhCwhLJciW7aumMZMdEg2ADi65myEoXgkG2NNCUJEaNZZvb7iuwyktrmjRGF3Dcr6B",
  "key38": "3skQLeHhjUSNPN7Ji45JeZFxZzNV2hftoQMyqjmXRPvhJ8kTkenEgp9jP2LD2KTizg9KbTzB4ezKoag3iTPAowY1",
  "key39": "2k6aUDQSHKjLnZPvskGQpzz94H5PRUSyRLXZ3drGiugr5M8SrSEr87guEx7NxThDCv7gJNncD5UsjwA785oBDPcA",
  "key40": "2v6LZjtcNJskwPAAWmHUWm9VQFi3PAXxfbFzNU7YVYVieqNSZJj8Z57FiieSd1cfxJY29v2mSCSbJNrq8caaftZA",
  "key41": "4m6WhSEBmQFDFHT5UYLwmeZcR2H2rEdQhLzR4w8Ks9eNn4P9sMmYzUJuDrutVe5VPy5usugcRw8qY7xpSmboMwwH",
  "key42": "67GrbacT8tnW5APWbkYPC3BM68boHggiX8NQ4tab4tGW7T4vSbeYqKyuJCPXRoiibUFpUQEd2SyHNnf6F1RDtMv2",
  "key43": "2n9Kqxr2daRUuLWYatkVfq5KAV1LazkD4dV7n8unSxFUavucmE8x7EPdCm6imUKD8XJD3KPxSMNvJvYjjHf9EXPs",
  "key44": "5MNB9phTrDgJmJfBWHoeg7b1gSswQtj7BUmbLqLAHap1shYHqj98TuT6hN3J1N72RyX2jhqvdXLzMN1JS1RpzQFS",
  "key45": "Qz78YoySBgPRKV8hc8r15bKPpUdncEbQwF43VpdFt9PZwNmE3dPJMNudVn5d82LVR5cWenzrCRqGKqxHKVKHVkY",
  "key46": "4euec1HwSd8ud1Xspne2C4W7BoVNKK9m6mwm6qV8msr9WNvEb7uyHBxFcJ7oVTakxyNq28xsDzk67gm3v8EantcC"
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
