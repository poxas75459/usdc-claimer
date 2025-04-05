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
    "2dRU6P9Y4RkSwroESndYGaMHtkKKgPsi1azzVazUFDmmc5aEYZ6o3Dx4xU8skTw1XJ3nvZr82MoBdoCDNUFE729J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518waFWw2kcowB9q3TT5ttTemoFgAYQ5jEknh5PmPPb3hd4rW2rdfbdzxMG9Hh5R6r3nZC5v59a14MedPBDRbG4Q",
  "key1": "3wp4z7Dm8xM1mVpiPdYDMFapcFiLyZtAv8Y9gNWmUH15PDMzzP8uPV6RBbkBgVHfeaNV7UQzqqUBJZNDuPf26ivE",
  "key2": "2s5iyks2Jw1fFENZEdtDPZrPQhnn1J2iYksnPxukZMW8Ta9fD8rbXLHx7HwDyJZdht21jfGH5b97h1ue5GFfTkzt",
  "key3": "5GmKhjKkkd9RYcXm83NBnqzG648EZF2A5fvx21SvqvUnCd2pNNxYzH8wzT7WcH1XbVy69oeLbs4gbqxGWNYwqopb",
  "key4": "5eMhz5hwDdz6RYTwjennLHYn3XPzF7FSq3cmDAK55F4KL67eeqnE8EQu2M4FT7JakLJrLzNBEWSsqmH6zfjiTp2M",
  "key5": "4hQUEjW61k8yjKT2HSSF1A7QB8JJLhr8TNNZuX7mfor8yKq7qatU9EwUrMhCizwf16xCcchpJXZbf8iD1sjScS7c",
  "key6": "4T598qzj1YUALs55RVHZULfH1E31STkmZBWUFAZyWvvzKAja4FKDRhCHvK4VK3WKwDJMRdMBFCtsGhqfCYRTNRD5",
  "key7": "5p81Jyus2cMUJNwBaQPVFXg5QW2uaKHvHucLGmU69pWUrWs5iVp8cTXuiLzGXe4ThGzuqfoKU7eCGNsCDRzmpKY7",
  "key8": "2NLN4beLqrb2PyyPU7DQUEz6oBF3D1zRBKtCKHV3NXKPpMv5Ry4YqEBo7S8qYjmWtjMJJ72HhRpdXsF1TwMoLtVX",
  "key9": "KqZ1tWfL9u1bWMzgvvtr96iAMnaMACVszSSsXGXwhrmZgW4G9x2TLjn8zE7pdQes7Vkc7rKL5MsMf4eixZdaBRm",
  "key10": "4ToGzZi4x57iVV29962pkspVRTAnxrYjLV81j6DtXzHECpKV9fNfb29dPHRVSZBpX7m4BEwnJgTb1v8f4jC66Qie",
  "key11": "4ipoyGUXpptPfrP9qiGqruB6EuH8bRxaQ6wscruFm6SuT9teRJ2As5RUnnZewHCSAioa2Gc3DSJytKoWSdCRTU6Z",
  "key12": "4CCqSYGEwSju8rBhaTLsLFgzJm3NabPGfNyyznwUvpXPnYkPHyBSvsXnGXBawtPJraTpjyUyx6cvtxbTbh6bjDHT",
  "key13": "3Ww93ShEQbKWgxeQh38PbWyDMF3jv57AT4GUVyJ7Ugsj1cHec1ZLoCKrGHJdM6ayhzazZAqRMaCqtu8k7X96z11R",
  "key14": "2sdWcdUkoNVXiRWrKfcYwbZbsYXoXtGFYUCirUAApv67YfjzuX39fkwMnTGeoRDYcdMXKUoK396pTmfciKonmBij",
  "key15": "4pdzTbF6ofj37YhSNzywDppJ21USXEQCjoSLLzkUgBbnP2zwjLsWSjQtBGeocDjWsQG1iLUE6BkbpzDYqJtSSweX",
  "key16": "HH3Z1Wrw4TTr6PcmyWvkm5igHj9uuRVZXh3hGfBKNHqV4TV6zTaoPn8wBBFBwPQjKcWjaN1aHfdTYowouqbEM7R",
  "key17": "3DjFdx2F16hBWEDVac2uxD1sGhbrEYFBS8T4iQR3583qUkhzdqiJ9S1km85RjwYJkhnZP1AUwBVJ7gkWRkTTp7LB",
  "key18": "5fWKQAQYtd8FvrzhAy67uakFB2KKytkMb9mygzBc9EGywKoPuazVM7gRCAkvkzq9jH76j6T6gsjE9ph9ZgfJ8QTr",
  "key19": "52i5R3NFqBowG8qHnjBzkzUzBK1315FHdmUPb48edA7mBr88z6cyjeiLGu1oBv6EkV615RA3m9yj27S4zfbFMrMK",
  "key20": "3ceReVPuEaq5dgtX4XVpsaurQ4eLq6SNnvcPU9mATLgR8j1cSJKTdBh1rRU9c4QCLTscDKkGAouQL6egchtBThfV",
  "key21": "2DYsEutfMj2dHW5xNrGvCErcnS7N4auFJZcZqpqMVgrmXrVkr371DLiUTYcnxUcsgdcbf3corVCfRHYtm9LAq8E6",
  "key22": "5gMbWe2MsubrBTLbeTE4QMMhnYayuXdf2a92mEdi9bWwVK3mwFUu6aGxQHypLBGLisyUEAXXNWbSpu242BVtQnZ4",
  "key23": "3UsRWJDDvWWPqih5JGnTE3DW2DZ8dtvNZmPni2crUUMcku8UMUHkVFwxVVAMpQ1ARjTPv2gyyFPfSGrrBd77JrNP",
  "key24": "5ssdrP27pxxHSHUBZ5Ts1G4UQsZ2s72G68FrypzZdhfhtxQG51B3WgHDdn4HQsxJjCgGZL4E8YQG91hdv3fKap2K",
  "key25": "idaB4QTK9Go7iiiS9ENj7npqZRxGRG7Y7zzLC5Ry6LzBSjvnnK1DaJShK8jrbKghQgSeRKjuxbUqSWSMyhXUus2",
  "key26": "31Uh5LSjjTUCHxC3iX5Bg7FuAPEV4MkpGQuhG8VzZNo5trX6QCqWK6VwCfZ1ra74rnamiEt1RByhxDNvrQT872ry",
  "key27": "2iLKY9ppQUbe5N1s6Z4TLLfQjML3TUhZaaKSd3yETQaKm77LyV5coTT3cEEgU7xYk5ADJssKJq87cjSpkxFbS4f5",
  "key28": "4E4Ugh4KVV4vTTFyofxyqnPSHv8FGYJwp1J82YEKu4eqZg2WkqGAx4BzrgLZVVkHhGhK2G6MGveo93Ux8UDMaAVk",
  "key29": "3qrJUPw3EQgD9z8NFUm4ozL2moknguGPMBrkHCebiNt7QbYrV49zeK9emrPipUGf58dFDNKMHDadAoJ586YTB1V5",
  "key30": "2T7UW8PqU17ymDoAML8Hvegp34KbCvej3WHjrKguHGWEXixE9p811AA4yz2XqSzn7PVJ7HMGzDQuUUALT8FKdRLZ",
  "key31": "LMqXvABc4vMHpnERc7cNLnbQ1aYnzRnYyuirWhQbF25uz9zNoorjcFhbDe7DRHfQbNLUVRjAYwJcmsz2cPPngXM",
  "key32": "3Qbgm6f7kP98ic47D5Knu5VhTckJb5g8DorM22fJ7FGubNKbqJPC2SHNN4ThhjfF9mBLym7FWD4QhBoJZeAsx4Sd",
  "key33": "2cevyrJHmt3hGJB8NFD9hDwJAGETg9iQkcAf2ivmLNajrrfS17Uaz4ZreMhGiF7yped4KGBQLmDTZuAVD92rWQDF",
  "key34": "3tUkud6YzEt6LWrFNTBXjFkmnpPSa5vF4zs1YBY9wrQKks819Rtr3F4QtdgKXs9b86gJ5SnpoZ63HdpheoC5DZCB",
  "key35": "2k41WpHxvLWPXaKrBmuoX8Jxwv3DmfFFUWqa5yzpW6LMmaNxJiGugW3zpmWK7WAdcAj7nLUPgXpwjVgitXY5h67Z",
  "key36": "33fvzxPDMtDnZNGZrY8XndbVLM7QoQT7NjGtvyubZXZgXnBgy92bM45Tqqc6hzawtM54PRM2bZTUZ99WVB2THfza",
  "key37": "5dGKtYPwQYYf8VtCB1XdePCv9sDQ2Rs4HXx6xZEBnyeAA4SeYyhm5SzD6gguxh2g1dkgcmy6kH3spNp8THZMNnkt",
  "key38": "5KxDC2EVVx6ymrgj3mGxaDYbYcoTeN4t39bBNHfJsxbpBkDn7u6rWCQH9nLw2vVriBuVXMjfrHHQbTDWus6ccSGg",
  "key39": "4KdR3B8wH7W8a5gp2L4dYYx6b9FkUJbCx6bebxW82VEAxq6bBhvBw6gqQALaCNBtnKgubDEoFnyeYD3SK6L7rzT6",
  "key40": "3cZagDqHX9HnNPz3RcgbaF1hpqDm2fEmZPkSnbP497D4jkATfmWES2DsHg9eGx8ZL6GVGtjMZKZD4nfSKbxJXbp7",
  "key41": "5mC8R69ZkFxqDKeEzntjDsCMRQZi4rHM91Xs6MV2ACGFqB7LSD81pTA64jfs4wxddjbJsFLeuxw2nkyNJFjg6AfE",
  "key42": "3fpMHumuC4LP3kUC6dS3M6jAhBhMuDJSeXdoaerFvHS41HYE3M5wXyvpwLD7qAYh9UhuMrGkKD5xJFA4qhxTUF4",
  "key43": "5NY9QVuzeYaidNhZe3UWgTY8KtcsQUMTko466tfs7DBkRwkiZXGFQL7LKi5Uct5HLpuyWQbpX2NpwPyVXDko8SXn"
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
