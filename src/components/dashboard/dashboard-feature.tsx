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
    "4PugCRVkePVUM9voW6LyasHqT6V1qZLC6GsysfPHVXuKmBPNfqyNDREPiFjE3eYA5xotK45YWhB4QFWuYhiYLPbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jULDDinkU1ESTzUY2RrEVuvGuCLE8KsR74627UCsJvixkfrsbAXMpTNKC4z4DfQoQrJGABovjjcCDGbfYUwQMz9",
  "key1": "5RcJv4pPqMU1hSmRFBYLQ8qaJVxvtxYpMuw3CBBeGq4aZ7ZHPPuYZppegzpyupGkUw8557DpfHPh9vj7fNBFrdEp",
  "key2": "62jci8kE1VDoRUN4Nsc1ikY9g37N6Dkm1keQgmTbjDNNg44vHz6u2J7a9TrBRVujrBhA2qbkFJhYvtfqSA4E2zso",
  "key3": "v68h1erGdmVapzK6VQc8ASRd6RU9WgvVHEw2x3ycY2rQLJnojX6gmyjJf5gKDFGQQUVxteNJ7vYr3Ha514nagn2",
  "key4": "3ULicGQ8HjKoNHMTkEvSfRbeCKzT5cw9WLdR7karoZUqVYFQPRah6HSofv5YjZ9rBKAuCKB523fMDCDv5B6ZCudk",
  "key5": "2CuG6hZwP4kcf8BXNtJquEdyhJKfTzD1imomje3TBh8bL19TSsjHnZMQxvZ7gAaoje1KXF25J7B8m19792ieLyfu",
  "key6": "5Mxq1x4gHqGJPXLhe4fAY8QRVpA8Tvn2KwKSdmWHGhHe4o4u9Ca1XsujhLVkvDcEn1Sm79XPWYkDsYS7VSxBvRJZ",
  "key7": "38g1jdoxGodqKjEuHJ4bXeMySZQesYJHWsFcUP3DAfmWnXmDdEKGSkjCXCY7SWxXPBgYaBFZ2thxaD1aLBNsHpJF",
  "key8": "3YMUEw82Km8TqDRbUA4hLLbZwAH8UDU4CeHE12qbB3ffvPAq4FUwEtfwVZ4Cxk2UaqKMpcM3FkUiuhpyHafBsLif",
  "key9": "4zChwUYQCdKE6MQXLLpibFfB52RQxvocpi6nNDLCztX2VMwqWemLFrG8CCVwGCyBDBWthgwAujjNKeyfDd5CeT1w",
  "key10": "4jQigicFjj9WjbBpHigG3fUK6L8W3trZi57Wv2C4qoA1FnLbppiJ6sGSJNsQpQYA3bTusfmGMFdpe1orY3pDjH7R",
  "key11": "5vFukKQyyyYM38buToHage7xWH4Txaen1X7Ay9iPCbt6fkLfN4FjsGz2NCEDsuBoantdt18H3ANiuaYGsBqf24iF",
  "key12": "3gCszJbJw5YiTq6ud3byc81W2stqpTojbcVrsqkAxweTTAoorhs2AmvPyB7M4WVH1iVyuyyredkmp6qvJWaYxREv",
  "key13": "2VFpssVqUFPxdh6z15qXtnNRyZzDpHw5ZQdxE5KshHHV9mh9nQNQRTo9p22vXmyaAQZxcGjJsvEwQougLhoHU6oM",
  "key14": "S6GY8PAJThwQxkX3xjWnHeRGUr3ro6ojfhoqVR5cEUUr1icnu39nEDAcsX6m4NFigNuztn1rigwKeJskWUetS6h",
  "key15": "5dMdfiyPTSKRHsMiYUiRrAbuQrphUGadiTT8M1MgKQFvGsRgaGq8R97CAH4rBXjyKYWCih4FBDcQZTyyyKWWAvtY",
  "key16": "31b6EZQCKr5sGgfeCefJwh6VXbQg6atSLheCxqEFPqvTjDKMFWEJbL66QvoTba7A7pzjegNMhaHER469izCnuFa6",
  "key17": "2T5q5paLVRCg3XsfjEHxrBMSmqs8udjGmZ37oF1vNDx711R6v1j3zUCedr9wuc2dKScCtKqAGXpKB5uAFdNAJ6Mg",
  "key18": "CnjaP1GcXtjvRsJmL4niMzbQi8uT59a53T1sgu8SJy9sATciHH8wpHyN2JjAwktPXkdum9bzVRJr93CaKJBYrgB",
  "key19": "shc8tXv8vPu5a1cd5k8EHYJPVD26ypURr6G5Mev87Y3rAsB5MJ2hrWDn9tXzzoXHBeGHNHuGqZtU8porHqpPFhC",
  "key20": "4vyEVDKGjqsQjCxYfNsdwV3pqmq3toh16KZbssbtsxDSozgvq1LeH8jRmjMdUMoiqhRb9t6C77QxPmnnwDbnD9C9",
  "key21": "2YGS2hPVrNjDfot4DWVg1aPpwxDntbmy7aMkToNYjweEhmuQmwjCMhFSisSaN5CrpCTL1Qyvmnw8sMjbHHQUfNXi",
  "key22": "5RqhUiZCQwbwdxQqeQ38dLgcSvbHN23E8MT2b5k4MsSJTQkDsCiCsiiiKmC8GAkY8ARxJNruht8Brdw9j7gMZX2t",
  "key23": "2qwUB2yJkkMZ7WYrGqFQtxcF8H1tj87F6CuQFWzePsZ8Cb2L1zA5876cY5q9JvAAQzQw4NZwQ5RxiZHFBz8cGdbn",
  "key24": "3syQ1b2szgDEnYpmoXkFHm4rbkjZA49azMbi2HDkGLqKKoCFXUUYejKa4HCuG5q6kQxcrpWFeoULn3unfAfh638V",
  "key25": "Z2Pg663X2UXJudzDzmM727Fr9WEqUYJU3Aj8oEdMBiSHCXvPMBs1outtWuwyUL2bDGSMwA63onbUn1HJVVpQRBp",
  "key26": "3qVdaVymN5v67kdZtF4mb3eUmNS6uFwAjYnQhXGnj9kpez2ErSSMxD2opPQa1cGjaQD4qrpwcAbKEh4jXKKecFpd",
  "key27": "65dRnUpbEmhL2x47cx35DxEczTRKgGcZt8PceVSovzfg3ELEaXJM5pUiBvBp43yPTKny6qj6oeK4A6Eh8JP4vKag",
  "key28": "3Sm7ZGEugPzyL8vqiN6pDdxwjiLUDJcSc4EHfoR6LjcsMbBWWeETbRhZ6rP69tjKhfeuA9a5WJkF3M35F2BuzsSx",
  "key29": "32eot3Kgnymh1AfJfpJ7uuz4G9CT4kFY1z2X7ZVCe7kEt81s9vhbmvbYhQLXbhEv6AZmDrW2tCnXeSMVb5bB7oZG",
  "key30": "4BWV4eC9e4TmXedGQG74PdKU7zPJQBR7CdiLqce7ZypD2kZbuCLKS1ikUdUYMkGaBDocmdSmoCXAdsN4zTW9Eidn",
  "key31": "3TKLcsqXscoCGGufKQyhxFb6h7oJRwiphxeZyDdN4cNepnAGo6WEKctQdV4k9oVDhPZUfY7Rf5qX3phFxio7fAFU",
  "key32": "3PD2S1u54jTZuSL89XtCDJ5bNgkuwsQwyA6zDmPirYoZVHe33LQgXVGXuAyDpfPGRBffNL5k5XXP8UMs22hhCZff"
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
