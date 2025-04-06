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
    "38waTxkroae1G2tQ8Um7VWWKRrdjiPA1bZuGno8oF5VtRRTTDgt2TtoFjhRKVaZQtTLwu84AsANKaUkHHSMK42ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7QGXdcTDMLx67FBHcRVVjoBZn6CLjaTjVw5QmvNAyBM6Nvfr4RJL3b4VvJyUjj5NXdxoEwtadTV3kjUuLU1JE3",
  "key1": "5cbWBBTU8DVLiaMNiCvTJUajttJHJVr9DeWG8gbrJMWRXcVcaQsxM8wfoazTBAyk7X2msj31QrV1wuZRVzp4ZVK3",
  "key2": "4ZjcG1B4AwUi5i1egajEzMntDgUNgUzKYfVwj9h6T7NXEni1gsisE4UsCHmc3ZcNvDW26MabKhR8raQ3eHbu7UYf",
  "key3": "2tmMRdacctTxSVnnvKo6XTC1cZHVmFg7k1NYmnJsNACvoPhYHAbxjwMwwxh55zMeuGNGHNy1UZWrgUdSWSvdHo9L",
  "key4": "63D9xqmmFbpP1YdXv7kW8YHnPKuWyGo5gxmhvUh74TdreLx9RaheAV211X7dSwM9RYSEtPGuLVF1kn6FwLd7nmJp",
  "key5": "26kyic6bDdx5B9U2dwtzFMrB4GGRp6m97k8B6NTR2gVgWetoFqeGr5UYkK1XAJGntE5ibXiUsCcTA9HakuEnGwvc",
  "key6": "49q4oxXXmTvWVg9ZPL5aMQJXt9Jkap1vjzJ8EoANVtgzkYSoUocu3jSvdDn9ufWS92tn389Gpr7sVT5aGqcb8Bfc",
  "key7": "4ZjfxHJMVn3kSs7eNKzgexyrrRbvpXDrWYQSL4reuQRHpsXM5veMKLvyqjMXKzNKUTzbHkH5ER1bQcGXkH2ymStg",
  "key8": "Z2ML8EQd7xJ3o5RmBvypNwxmztvJZ1FZkVk7qoKWdqq5RKytWgqj7wFqPw5DP1yfSSpEinc53TyrpVoeVw78mBf",
  "key9": "5cXfBqwesPyxEKVw1w2PTNXkhMz1FqU4MsXHKTU4mMwNMQzQrAQ6Dmo86N5kfWcv5mySTwftkoJwknJKtHNs2S8J",
  "key10": "62mfTEYp2WwMRf7R13qR2MdpQ6zwjNGCHL84LQHdHCLS3F3vUiFxDWQJRh4tqwxRYE1Tmh5d6H99MXc6KWHfeRsz",
  "key11": "2Fry7RUWqTt25bsz7vgYf4trMw2JszXDWrNv5htwbVabWeJ55ci7jeQALtg98vNt2Mu6hhFmuqjybqxtY6UEpy1R",
  "key12": "3DP4byjCWx8GYjdUANk5A7buHfcagUj2HTtFFAKqS6WKGCp2CmZuSxiZaFapHEeuUFdLZwquksPhBMeErGnwC5pZ",
  "key13": "JLrJRW9xR1fKys8XeyVDMhWgBzT8KaNdEr64ZPptXbPiy9NYj9yvUjctdnDBrHbBvEGB3uAJp71PzoTwtedrtEe",
  "key14": "2iHhbszqbkSVgrw3E51Rcddaxo2MRXyiVnmhNhjBTNM8cXvcyqcn8duQPv3rNx4KyZJLdUzr6RX4D8MfgcgsiPMN",
  "key15": "5Waq4m9PMn3yaXFd3mwYhWF17sYj1giB3MPaNkv3DGDFNwHFbwcNbFjrv2AcExszmg59z1wHbSbcsZuwcCrYCKgd",
  "key16": "5TTwKZKyadAswgBTWb5N8yU2YZu4XsRLqRKDfnitdrv2N1KHykHphF8gEYhKRQB5aJwXgPHKpyesaWa53H7ZpTFQ",
  "key17": "2vuPE19LELXcRZN2Y2vvXXohYEYFgovUSKaYqGfeTuVQZWwnBw5H5mwwS5G6YUpGAcyFere39HMRWUSmf29PCSFm",
  "key18": "5BWo3hS7PjuEYcGdS7jYsScJ7zK9LTzZcBEcP44UjCEh5FhQiHjh6HHEPwC45ceDKDqbAV9pQK5yWbdvFcnkWB4R",
  "key19": "5b71boM6jfDbrDmqhyiBqqP8wwyzb9WwJK2bruGiBS555mxL95YJm5HPm8Ki7KjZLYHbn71bSDQYkgACoXc3HnRx",
  "key20": "2w678wBJtfXYF9kEC8fiqY6DVe4r3eSrrQqy9NyyNq8uzBErrNy9kAcJTxHJmiE267MjXYWcUkAicnSeoAQ8n6Km",
  "key21": "32dbJVYT5Pk6vk7HiWorDuoC9CMWDZARn3sSABfV2MC3TqDMg7Absgv3BV3duNxptwsajqe8oc4JoM4J25BoAXtH",
  "key22": "bXahzCLYTZsS77Jxbm5GikRnMgT6AkctXPYeTqXz1yFT8iPncTd5V9unxkUqXTLymeaBw3KijvvgruzZ7vVHfjJ",
  "key23": "64uSAvPygoxs5e6t7D1dv4at7hLh74Tgu3vUhYQkJnuLQ8s6NfenFfVvbZ6W2ZSsJDDpzbTxQXmKFRNbfDdEe7uW",
  "key24": "2awU4fmEMyvbfzj3jX1zd5ED9jhq8B9izABFRSBa3w3YwyFhKSbmUDMEhy2nPu3jkWya3G1Y4Aa47caNtS9ciXrP",
  "key25": "AcoVubSm1h2M47sPhrsyn9MmXbreCTyX2ra1op6uRweSoMQ5yZtrHf2Du9565FzLUodbm7VmhozycWCTwDGTKZd",
  "key26": "3DbgGV2tbBDiZ2yx9NsP8YYvSttyeEKjHDZGyQBX3d6qg7QZZpP7DbDRkqqVJ3z3kziXgCMje69YRX9nmp7KqWr",
  "key27": "z4vgrM4wryM2qDDrDYKzmY7iQhMYtrK85po7qWYCDZRQTte9LD9tSUtZmrfgURvTJn4pyufoUc5HJaZtP9tofpe",
  "key28": "nJWbb8whZm2CL3zgdjEkmuDJpRYuyiKBN2Kxcvi5SP7KWcsvTr5jm9HuNePEpydX1jmccDfg7zJzstUqRzU4tGZ",
  "key29": "2VBMESx1XuoixvZsgVEWDHMuvKmo1mAitmSZzt8zeQvHAew4ef5Y959RjmoZzStahSRKZJwJ548NcMsmabbTYB29",
  "key30": "4X8CyaWS2XSC29mNo4F5JEpm1c9i9MsJ6VN7a59U7tApu1u8m6CNg7fi4DbC1jFhBoor1V4mGmw2Xw2hWhqEgScd",
  "key31": "22qjLGgRY1rGhSeimYEoeo5Sg2pKY76uFe4PumwEA5TRSBr5GmFe3cwjH7eNvNmDXpxVm4MLefzAms2CYLcoCTtW",
  "key32": "4WTnVnVbFtx3fhuqRCJQKjH2FwJ4jwocT118UshaTgUVAFMgewHoGNe2svpZSfTAFjdqVSAwo12rnxM7ToXgQYM8",
  "key33": "3aUPgLJrjtNcrbrm9TjH9KsRhieXWAZYidU6rc3WkEhcmjpuJs24NENuqp6Ej1dBNjkLAL9TYuGtSnFdMqy6DaXL",
  "key34": "4wzbyRYsqx7QZ8RF48zaGLadcTxCxVk4jG94evWrCa3uX6yaDQPzc8jeGwVf2duL5vvDJCSSVMCTUt28PAwQCpm6",
  "key35": "4d8USRYiPBATHithMLsi5WC35crVZDMdcNFA9JorAk89uEL48xwtSmP8PgkkkfX3wMcfEJ27hnkjyrHMoTNRgAaG",
  "key36": "3ayzvv6gYuMKryTF5ufJYME9Mv4nQ1xHHNbzD1o18GQQCmjkuQ8q4cjxdsgmLc6DxXuJ49rgLEAuorTpxZAdsumu",
  "key37": "4GQjW4feS2nTe3r1cFrTbrsznhkVEXWdh3sTTkU3CTauHnpcR7XeH7k3MUixNev8o7L7A9kCw8LtNJQsGXrV2zZq"
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
