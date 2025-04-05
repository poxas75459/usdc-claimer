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
    "2LtRrkCxHSqoLoKTvcjmZCR3YWRuVMudMfL3YjNxABEDzwH1zfgiZz3paxcsm6h7k9Mt5mArni3ooMUJK1wSc9pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwcwyuvLKQRiTVaX4V7Fbsc5JkrnNoAZZi2M2XyBKfc8f8gPbQaEKMUudr43Cw1G1AsqttSsZeUTsANSLXZtyfw",
  "key1": "3cP6wDdAZMFHoqHuuPaa6JafyQesk4BAbFHkVU4kvQ7MMYJL16NusdGD1ajxDS73JxDAFg3u5t1qydCxENU1HZwn",
  "key2": "ya2vBKZCs6DjjYm2M9u9EnPAGoqpAGfghtfC1PfWrG2koo7P1rQqX86KGifnjhPwEmWPJYSTZSP4bxtp7J6gSS1",
  "key3": "2xKfoAV76NeWQ2N82QFQRGKEGgtMHqmYF7k9B54z4KuZFq5b4Xux5KekQQWQeVLYLLsP8EwJ6wu4Dm1ejwq2GG64",
  "key4": "9k5sVkw3H4T9qH5je5WDmxws8Lbb9N5JvnW2sZNB7GLbjSdcnfVpFRMH7gWaKW9g9gWmQGPrXS3SergutHe1KNV",
  "key5": "28NrEGWkGn7BHD4S1weaEknVzsf7MoSq2Bu5AN8t8LdMsLE7s8R6whbwYuCLz3MbRiYjhDqHZ15uyTdjGuL918sG",
  "key6": "2JSDh4xsn7FBzedLcP5Yk3MSt7MHZsxkKVQcv5Fokp8xM7nozGV4aRhUgAjo6UwDKqwJfAjqrgavbZRsPzYsfY6m",
  "key7": "3CMjtDaWkoVugjYaGJL8yiyRw26frZLEnoQMxbEAQVuTPEhE8f7TFsua1zAcoAWUdavb9G29CW5nMNRbTSi6n4CH",
  "key8": "5tuBW3ntxgWw6BjNrzwQ8Tp3ycV448Z4HnHmJHEoLp4LQRXvtKcrYwSFmyNfrjK8aMpCHXzyDZv7Hf6ygBex4KAr",
  "key9": "2sGTWyrJNct6raUZXAgPb5okqjwoAPE9c4GZejra5ZNLckPjpYs2QuY8PBVPWbUJBJwt3sxdeGBNipKbAgWu2VVJ",
  "key10": "5Wb3jR37w4dhuJ6uzmY9sZwruL6WurKEaCz1ap69qHrgFsQvQjdX6MzPM5hRRx9tyu2SNHgXzrLNBJvDVPEWt9AF",
  "key11": "2JLRChUnNtWxGCeDSn6FCVMTAGozZEH4f6WMzzRD3emE9MtfJncRtC2LuhAZVs187bsjtmxCfZLHVkpVQmFaYeZh",
  "key12": "5LpKKmUrqirVMEeeyU5kQ6aV6dNP726gUvwfhCRUZP5MZMqWeWXpLG5yKFMMoRxT5EhpAj2BWHZWtQoMT4NvLiGi",
  "key13": "3F1zjnWhELdsRvjziKJoyYNQZGdyR3aUG4ANsxh8osHjjwJoFpoNmQjwxVVWZJPNUFRhtkTCSRxJczRGLk4qEBBb",
  "key14": "57WiN7hCJX3FoqXXwehXzHtJ8egBwqwrvrXs8wnQjhfWbt3Mx4pU4SV8oAkTSxMyeVoY7v5sMc2aZbzZsFicRZAo",
  "key15": "Vr5feEi9gMeviksU6o5ufRUtz1xJDyK2Qtph2TP9uzyPqW64z8HxAm6378eiW1PFyaXoRXXksVFQwxbX6DL6BRY",
  "key16": "3AJ3a5CTiCjp1cRafFC63GKJewZajRnnCELBKL4gdJA7fotdU2dBWkbXbbL2QGVpSvaMwnUGJCWk8e2UA3bm3xvw",
  "key17": "3TW6NPvNnP8KY6JkiW5DarqHayJHEaghGJ7u5EegnvPMxbHnZxoVWReKEYTfGkMgvwQXL4zGxSpv7pT9rknNcdj2",
  "key18": "3UtwgL5d6pgV2K888MtJqfebNgko3BWu49MsRRM285pUzf7MqwqjNrhrkYwJ1z2nQaX9bowXVdAAb2FJVKW7f4vw",
  "key19": "45R4sdCLoeYoYLUAKAjp6dNENwT8MX3aFsXjpGHkTt2xSkwtb5VPrkT36ryA2F2P5guGuiFVxipXH6nydPKbMeuS",
  "key20": "4gs3PAvYygEFounna5pNoeg1ZvDPyH4n2unf4SorHZPtA3UzPkasTCDZjNBzudbckzCS9zHmUPEx4Us3zdiPUjjS",
  "key21": "oCAQAbYihJimjhD24ybjRhUYUZKw2hfEZ48XbYP5ubj3ZXksKR9F9FFMMz9RQ18nRa3beMEVU5Zaa6L14xkBEK5",
  "key22": "RcYTem7UEW3UZkvEhoMgqPaPuXW9SFvv7DWZWwHKQCwsuSJRw4XHm9Dat1SEvpnvpMW1SSDiNxG581VRwpidE5p",
  "key23": "4GbJ6ARKTbASDNmXez9BhJp9Hv2suavoV9jwLE88GmaXN6hhBwZ7bvB1ZAE6njSeqQFNQ2nUs8EeDzpkaGjNT4UC",
  "key24": "2GqToajVdFpHc1jAcw62wbfy4mgcied8JvnfQFPnpL9M6RViCETJbTKKftGhVvo99BAfJ5SZGekTJHdEVVQ7pRRK",
  "key25": "5wsL96S8iNDXzFVKeC6Q7jxLGobGcmrP8sXJuenrmRWrrxfZjAqabxTvPaL2tBLCsQMNinAQFiQdNwJ9pbmPm9DX",
  "key26": "2LEkuRzJEnWaHAQuEpew9vTYNSqEvV3rMkL4YnfJmBjcNsPPdE9FbNu17Nynfi8rQe958hDFXyna9z9LbhP6XSxu",
  "key27": "WttA4eRDqtkLME7LHL9aTiMBMRmzGTMfg2U19XtegwMNVKZhH3VEyxd8EoXL65DCAA7sCqoCJtFwrCLUM1LvpU9",
  "key28": "5kEvhcMRPa9cfHKhV17JQ8Aj3y3SiXBmevyzBZonHikfQsdptaUhMzZzTxzEkHvzqsWa1XLtaXtvH9vW8SkXFKVJ",
  "key29": "22Xs7z6ykHx1AaZGiBFXaDYNREdudduzjCiYFb78spPYUTfd4mr3fHUhjMzgcUr4UnfRmmnxgBDWeH7223RepPNy",
  "key30": "2cfMtv3iuiNdv84eQXKJUmPgXfQCcH3i7TKkDQqNEV7NApfnvFD5EwNAP3C3XsfMo9AEiR44JdSZ3ZMwRgPT2gDc",
  "key31": "4wNLaMvxAJYGV5NiVS3pSfRGiKxGoQEpZx6LwcReDMLum56uyPWQtxm6s9xWaXaVy2mQzt1ZMpEYgFm3ianwKhPb",
  "key32": "2yxtbobWUjPBFk4NbDGWXtFsofXr2vaxqnDyVdmuMxHUbpwfuFmHGyHMLGjRb4Ea8qJS9AgeN4CCzuKVp6DfauQd",
  "key33": "38RwVJAYeVSXVYhzsFBpePDafFk6SKrdUeuvpjrubqH7FLsbDW9vDzwgqm3PhwCvBUzqiS9Fk2xCMzdfXZfcWHA8",
  "key34": "5mNkLFDRgofofXjuB2A2etpJ3Ng4riLPtXjshP6Ev51BRWRMJNkABTyYtgYoqMkYt6KByzVDqQ32cBEoCaTDjKAz",
  "key35": "4niWNk3gvrFeS4Zw1haBhepRajYFqH9atcA4vne4r7XrD2hCo938Gg8Je46E7oecRKMawiofWZ1LzGu45sB3abox",
  "key36": "Ac3KKFmyBjMCCFarCCUSTTHUoMBrkEFtbyAuWNwGqHnXXZ52jUEjdqeKfyZkdbdj7K2ocoZPtsHhBbCYbVxx3h3",
  "key37": "DSezVizCTLbgwQTYwgggBqNWofkuzWMo6NJKw73nYdLPaNpm6VHDhkF6LiTjP2J2f4F36dwUadW7BvsfYhLRyGp",
  "key38": "3qAac1DwLx26xSLDD3HioEYB9hVNCiYjNLoovNbaGSuCeNq6rTwMiLRkDQ8r9ArRWHVrgB1mmk59cq3tmp1eJbYC",
  "key39": "3eiZUjdeLNMxD7HyMFEkAchcKcoMP6XFr7NdjsU5RiJqgBHQgsrUcph3qPizB85zgfwu7wAtNNMPKVSbVuWBdLmW",
  "key40": "53dgGiyJEdz14RzwUJfR8w8NrMj72iYpnVTymyJQB8Qm87o8s9DxxGy4BZchvaGidHKmffY6oiXnduoUrEub7EUb"
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
