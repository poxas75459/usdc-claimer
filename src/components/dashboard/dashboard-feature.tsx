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
    "574NftYx1sA4Mqajxt4LeB5GfKemmABsqRSG7E1PefiaxSmiBZjTBrukqorojVPC8eH4U3XpBHGgGQUmiPzdZoby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfyzbuKW8wQBxTKbgfnvaYndkPsUxc268LTrYgwQH72XpwiNZ3JJJcmV1SE4oJrhe49RYAhah3sRQgQg4wqQxzK",
  "key1": "31oUUiBByzZAmMCiMPw3gBKvpaPwN6Lb15ooSdALWfXum67DwgaWF1HcMdQvSHgVKmfovnN996Rboi7Y6pKWxFSy",
  "key2": "4aQHBYPrwfLJbFYqNAtRoPWzAHkGA7B5nsP1k8FCQNizL8G8fcQJa5mmQLh2WiRNgBH5r9BJHpk6pNiuS4YEk1er",
  "key3": "2UicRCEK5QCZqEZZ7Qc4cdtsZu7Si3vbYTX44PFXfgt1j1HYeAikax8qNhMph6MDByDZzurpjca9H4sVr2JtQNbo",
  "key4": "64mxc1a98eYFM8m6dzd7i9PbywfPozt4TxJK7fJeTduqmrwdX5szNdpVYm5w92kfpLwvJuaTQB98hN6y4CTRNw5M",
  "key5": "5YHPeWrZtbfpLN49uBqtzZCtbs9Hmm6NHmpjsrxgmfDGUPbphPmRp4thQNwQfLHqx6HB8PyWB59wSk2CLE7Sugb1",
  "key6": "givBiJw4WxVfR12VcwQbz1AUfJA8t3G78wMagETTBFkE3kVshKaMngiTHgPo8qEehvBj7zKY2WKz5gu1nGTAXa7",
  "key7": "26M7ZU5mK6P9B5GXARCmWbxdE6At5PgEjBhSrE71mMM4hV9AcTw8huxyaQLmScwmiFiPnDvpHcvmYxXygyQZ7Vae",
  "key8": "pTwtTwwxY7j5uFcN9HfMRtXYeqME4tfZge4ZpXoru88dhe1n3VcjL9WV8E7LfQgdYsvgw73hLUvcMktMjgV7v1v",
  "key9": "4X8JDDqLm1TUVrPHwVpB7r7vUxYGm9suNYDg1oRnowXFaUfLGzTcMbvN8LfxGmBQBE7jovDCPHfJ1Mb8nNCvSLAS",
  "key10": "3rKYKXysiWYR8Y1Z5QrZjsNzYCTdQTMzLM3k4GshN4YHM9rut3fQwDWrY9o9xryz8KF81VoWEiVzgCDwasKEU2cC",
  "key11": "QZRp5vSpLJxdzcUMLKo9CYJEA5gb6ABibCeQLoqsrWmGxzg7aWvpFEcwUHTwyuteXfwcKb9Xb2G3ziATZM1A1Ea",
  "key12": "5YCoqtk5d54geX8Jp5SnxxJsuFib1qQg9bu5BVxody3enVvQsAbk7fGJsDNsXZYj5xWKLYt88iN6yPCNCqfPjMok",
  "key13": "122pmbEftoDEcpWrWU9sausRBM1uj6kZWXQDwNtd2S9WT6NpBCCNH8jmeu8tLH1MbngFZufR6iaf88yGuBa2jGi6",
  "key14": "4fKZrGxFezWUydjNhdNPXjX6eNusnW1VceE6N5q3moyUdZqJPnCdrVHuusPtkLYQr8cTAdQzPzdHXPedQVQfFdJ4",
  "key15": "2jZ6cSfrM5q64pT9j3VGcjCEBXEjBdZyHVEtKruAj9bE4UuF15Z4MqemV1dZFVr4BpwQEF42NbDCoLH8z6fajda1",
  "key16": "4VqweCiV4EsVxGXg8wrUsAo3okKE9shzCn6QAGCfwm4yndBJzg58MfALcAZu2UFXZsFXCUpeEp21hZwaDC9TP4HG",
  "key17": "jjNNByFeNsw8H6NBRVgKmihxfQGnkAkV8K7YVKCZwjPVs5RwNP5MREgwpTcmG3Ksfvcgk6i8Nh3x3EKkCLjNPit",
  "key18": "4DjrPQSg3m1RiSmamhyX5uBepoztZm9TUhpuzGEc2Qjc4g5HEL7i51bqksVPy8RcM9YUNHMjHchAkMJyWERPshzs",
  "key19": "3iRPvSAD5stssCWZmxSExS1VQpPGa4hgSSsvx8tvFRwwUy7AKrR2hJyXbZiH8yKKo1x7wxs9QpahpkZkZk6K1XDr",
  "key20": "zPe8hgcps7AZCgdZn5DKi5Z2adekLyZAM8T7rUm8HnmuhzCTpT6ykBCvnVCXPuSNzSamH8PRGPwgMgFVqboJcDz",
  "key21": "56bP5GRioCPZsjHw5X5YgCXUW9ELBNkp7FEDHde8iDJwevLuwe2SFpNP9uxfnAXLPHJ9vc3hp66QuFFvMSqLVa52",
  "key22": "2SZRjEbzNJYkyS77M5hN3u8ktm9sBAqoWbhWttC2XSmv4gAPMDks6DNxzH8haS8cwGxdaCkiuFCD7g2V12zMVkFT",
  "key23": "2wzXuj1Z4QZjx83gjsSrVcSKFQJgWjtn2QF83NcSMkVvonnBnFvxQme3j56d3ydyRtoLTGkhzSdwqtSE48eHk9fX",
  "key24": "286g8yx56xhn1iG568mzcC5cC4kRxEwiogaWEgdKW8bHwy3rp8HSjycfC6sZcR41pVdtTRWXxqkesJJwwcqxbVzs",
  "key25": "3GQDBh3Q9TfkThLxE7uG7RArRqEfet1vtdKSx96A7qzaTpf25V4VgSLJYsLCFKNvP3kEe4LwaTvhqv846CAHpZtW",
  "key26": "5s3ixGpyJGeWbsYRnLawGnxRmqmGjnsrsCsa8PV58PsiU6e8WCweU3w37YeVdf4DU1d78yeF5HGYNLXb5AgraKy5",
  "key27": "4enMHbvE9wYA3Sr8DUwsSF6MM5AbZd7BBn8dPxehqyH3MiPfLEp8QQ16FQKj7ZTuowiLxKhU9Bio6n4d9qtNFrxF",
  "key28": "QZRmERTN1j7SJ87igjqUkZJUw9Dg9dSsHTDmLmcTqQ7pventk2ququVz3RqZ19E2oWn1VWoDYcqdMYvGWdmdXJN",
  "key29": "g8kCHETzdmLerfVvTZSeb3CJgJ7oNSCxXzUm4JHULRi3PB74rdUqwf73VMpBkAM1Ay51XMu8116mrxbiJJX6yGe",
  "key30": "5i5eDGYe5krynwTYBgYKKPPVER4QvYWxFP1fwtMC9rnf45zujuh2TYmVVL56aKWpMuqWCLMscdVAs9EAXcpRCjr1",
  "key31": "2YYoaqr2KufvEUuKxt5UX81kQ7yRTLNZmPa8keNbneFJtXesw2fdh6TiJdmvqB8r42vtYVanT6jbhA7RVt4ZcSvR",
  "key32": "21KWfugK1vrdP4M4LZy3DkKyNFAM3CzvdcyrGujmnKW54voUuK7Tu6dAkaDsH3AXandjY1Ftf5nFKd4DVmtjzWiN",
  "key33": "3bM7SSvFR8c3akZghEaqzqHhUppoes7fe4PPFWzNjQ7Q5UbYJLfbNABuSxj2ahYm6szpcJrqL5KTqBM2CirLTSeM",
  "key34": "26PiuVrKR5KfJQM5NW2iw6Xzerdp7Pg3XfZLXKPncZs16XtPPyeuECquNaFfGx8hWR7gWefRjNgUsGrB7LgHwxgK",
  "key35": "5X1kyx2yf8KT5Mo1RbrAYW8d6sm1e4sTKtDE93sqHNEPgUvUCSz7oZfpsJNYqCQYBd3nx11i5v3ne2B4eCg3SJ4V",
  "key36": "332rsSykwEhi1vKabeaRdL4vwNWgULmjxgt2GNpfswj8hjGN2UV8Mxb8vdvjCJ91EtkExTRe5RekibnQD37htHky",
  "key37": "bSxjDwnr2WWjTnfFdTHrr7FdCp5KTz32Rr5Q3z4ngzSiqCHzYQUinShFpyqdfFdB8tHaXRF1gc2jfMFoG15gApc",
  "key38": "Re5za85QrET2x164NYVhRjcAWSHP1g4SYHWPcxN1QCZozdgtJ3tLdX4zuPwYh2iBxqVUFPygEKga8ixMqbXES8y",
  "key39": "4nEeAYysNiFFZTshcMMarMCGA7reEjqWu1ko2hrSWhynRuq1hae9UXRFUq4eVtSQFtAF9hTpF2mN4JX6wWxGUn5v",
  "key40": "5rDUrwqKBJFSAsakmRQiNSWZyJtZWyqRv2VppZebUpwvDx4NhmQjvPQVWpyXUt5SCshU8LJrx9DosgDVR3xVXmc8",
  "key41": "2uaogTXuR3htHjy4Erbb3fNe17NucSgmCAfPGo1rjySpf787cB1FiYPY9XRXXk8FnzaoGTycGbdaTkYpC8YDamT3",
  "key42": "5Vab48zWtMK1iNHo8D27i9Rj3QnkymDFFzZSc7eTJmgePZkow4UCiudvuR7ha4f4kQrY6ZcvNRi2jZED2rq9x8Ga",
  "key43": "4Tpo8sfHZ22pGdJtroQFrAKLMCsEcWu3CZU25e4UHsPbtrCEezZZEEFfhMykVWTnWwKSBQxEj97CCSS8dbtZQwKj",
  "key44": "21VzsTKtu6iF8mZk5qJd2djfwdvCnDtok46wjnbXR18FWZJrPoRNoBdByXtAwKMATFNnSCNFtFn2bAQKkP6ekeHo",
  "key45": "5u7QAj5Nepyi1pd8fszXZW3ST53oBgnneHR1FYvt5hoiXKyBTM8C5XWc9VHxyeH4TyFGbH1VvkPSCJB1doVJkQU7",
  "key46": "52d15dtux3XybA96ZgjGRkkdcPioRZXhsKGqsfyzviPPxgUbdSvH27y8P76hTbBRrubyYqAoTBdCaDDbx7BA13AU",
  "key47": "4N53he95gYksXzfSkowZZ4QCfXdxXQqUcYLQGgVWVaPEt3N37QFpH3YPbCogWNdd5uByxKhNwEihD882Nwj7mGYf"
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
