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
    "2kiKLF4276xqRR68YChEKgSmHygy7zww2worTf2R4fGACDh1tL2aWnSDgUrkfXnRRPWxgFbjRMUgZXJ5DSbjcp2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372FMkiEkd1vHw2jb15hVXMXBcaGotGnUHGEci5dEXATBZziZV2F4DsfZbSSicbER3DNaC2urZaNTCcwApqW94W3",
  "key1": "3v26cucLZzpdYuzGzvV9LYgZKYG33bTk7oYfw3fozBEtRnZ6CF4k9SoNbfduSLEG5EG9Y68xjzWTbsW439jbtV1F",
  "key2": "UE7AcXuvd1HBrjLnuDNQsT777ry3Uko3nYg2PfzvqdNA6j5WuyrB9QrRP33RDTJpxpB8ASemGUGxwVPZtzEYqMg",
  "key3": "668UoUJP4y4aZSRSAoE6bXqfzer17bgTbGZdq7XhQcXgCH96T6RtxE36fwfeGwWnzT9vcSfLNcSQSr1nLijJ3kHQ",
  "key4": "5zzCe9rxpQRbu3Z2vty7aB6JL9gE8UvVEgm3vD3G1Mx6dcK49NNP9Z8GDarCtMh4hCvskwK94UZiaCLRax6ayD82",
  "key5": "5SEi51VCUk96HR24vpxGc5nyTJBLCBLL8mnBNFQ1ZKwACAfuNwY6D2m57R9jLcXybxn6JaHajAKaukfXGk9w5cbd",
  "key6": "5MucAyYDvjk2iVDa8jkWzBwzAMwHihxJ2Rizb8CytLfuehropwqYbbox9xEhdtccoufzzvgPYzSkuJiwnAjdAc7A",
  "key7": "3nyQM4jEncDF4zNoiQjzKhviDe889gABrzphvqrRhSzESsVLJvPW5NZWmQv179kb8d2UwhY1f8frfYeA8Y5qjBoh",
  "key8": "2c93wAFL1f3L4SBNB7ada5r8o1hLh3cWcFehHTv4y9ahqjC8dynifTnVKZBkvZL8wkD8kq8rVJ686EGoUjXt4AwR",
  "key9": "uJHUEz3dA9VKGyMyeAiBoXu3VZ7Uk71yTdAgrvGPX9c7uQ5WDcM446oeesKksZBmZjqbCPoehCpiQSehSM88ZES",
  "key10": "2gGUJ3Jja3zPsbGcCqwrRn5thfkJjCJXnZyQqPMsxXeZUpn747PSzK2XZnGLBGdLbmE9SADKA88DBHac6PXtcEY6",
  "key11": "2rM2YqJH3qndXLng7muVnNLP4HX4N4cnZFsNqJZzyAXvWqnyyDANBV24U9pa9BoXnpyXLx7mjsLH26Bj8chC1nFE",
  "key12": "4Gv9yLWY5wqM42h5a1dFP38thUCX8Y8NveUuuf9yTH1YinU5SiyuW6ifJef9VUY4pg9y6ca1TTUfq7Qc5ahDdT24",
  "key13": "3azADZgHpUWcMzHeM7ZL6iyvAm2X3NmDt9jcCJWLUS5QTLGXGVk6SuW4FxYg6hkTchsKCqDaR8vnsjvk5477tYf1",
  "key14": "2fRouwkkvoVwG8ShDYT5411WM3fJmPZ43En7ocD7H8jzzMaXqMUPDd8MRfQLXTC2zpreu9j2UmRzCZzSSZqktaja",
  "key15": "14Engm9kdfgVfptATbB1AgUFR6yU3GhoaRKy1GNcivx3rPuVkSGETAswJGNq8CiR8uhfoHsfReik5UvPiRGHak7",
  "key16": "3feBL6eAg6trXLUUsgjpgNcQLAru2LE8SNp4zJZi7u6EQKKmT7sarNgWTKSQWhXAVkaV7KZ3pHqR4dXQWy9mHvXo",
  "key17": "4vFkNN9qSbmChrALkHRetoovGp1zJRWZBA7HUSbF5avQGoP5W2u9DK3aLvqSsL1gLrrjEvz1EPkLAcxUeWdCMLfZ",
  "key18": "27P35RtCkdteGzbvdJrmuMhcL7toSvixNGup7zeehTBLb6t96vo3tTo5yuX2zQBF1ybenx3pTN625pEjT1WkUTWa",
  "key19": "4KGM1daB24aBoLofynTxEKV5y9evEi2AsFDkaG6KbeGj22Lk9qbF49MYRUgURX8BtbTHEXDt2s6LrFd8ZSd5FeRj",
  "key20": "4vf4ahjtr5LzzSjEgnJYqmjeeLA8MW59P4Gc9Vrj5jmvPZksnP8B5DRocT4cG62pUe5ywXGB12UtfUBxzCxHDeYt",
  "key21": "9eyYDt85u2DvEcaPbeheDcJi19KzfuUZrd1H8huyXhnuDUamruyLpD3NJbeRi48wxPDuJXzAX2mGG5kCvqizd6h",
  "key22": "4ZKpa1cihFZFtaNquL9E6YBZkCeupumRuN6Tb8ao4AwDPrqjc7oMKW28oRau5jAW5mEEt4vPmjaRs5J3cUpDyneL",
  "key23": "AoyH9nwL6EjQY2eyBtF2v8xUgShKqeUWmkq5hkufbmEy4wAPUSN3GiLE4DWfUn1RWv9p4skHfCyNYNGZmbQFD96",
  "key24": "P8K7cXMP4kQvnfCMUnWRDURdLB5HS6GHLwaSbDFwWSKgvca2vN5QCXrFrdwzjQXLwQEvG5fzB2tUaxrc6ZR4yqB",
  "key25": "ZLhJfWntvKLQVZKPhDXnVRfcvgdDqhkX6YYFSjghiN2dYsBST14jsQ8kkCb9iJcPBE4LtpiN7DvJ1WiXpmJRFjh",
  "key26": "5WN7iv7y6n4jkV4eNvj9ob1qRmeJPTyrNAWPUttpy9k7meWpfbQvVxkuUkTQFRzRoPofDDS7hSrJ9KKe4BX2RVgT",
  "key27": "27zrjdW29SG8fwsC2cdEx3SgGgLXgGpE78iBi6iwJruKfnyP4XrXh4vocu1jxUEhmQ3ryMsKzpQS1UQW5MhkZfxA",
  "key28": "4HHDt7qHNmwqyfUsSMxgTiYB4DjtCGF7Wpg2Kj4UtPbSyGM4SFECRhDdUfjQtkcpeSWr7F9D3mc66hegxPLuqQjG",
  "key29": "2r8ZjH56o2ePWpzhckpZjnJmyyMDfhz5kqtmcZL41anu8qHMyrYxPg4QguJFh2XDvxrESUT246sGDCukk61jGE6Z",
  "key30": "stkzwRgwWzfro4WSAYKcVYVYjMur81mo3W9JeRdJwrG8msr1r39xHrUFZdhjAjxKM9GyoHZJ9fktDmJpDMAGGPf",
  "key31": "5EnWLG5v6s4WMWvTJkX5Y8PxJWd8dYZHyCfeQ3JUBc2BuGmzp5THJFFsTqC44egYhx2nSfWi5r6pm6ci3kxtjc3m",
  "key32": "4dNdwvSgkj6DCukZ1YTDTb3VujUrW6fWDzTuiPmRo8dCT8xR78dH1VvvVHoH8daxDUQoYqT6EpAjaTwKtpPEDtCw",
  "key33": "3g1K9ubEexefzXFJcUhKFsXJACEhfGkdGCVYca2tUUTfm51fDMAdCN5eLtb2bERAyvV7duGRr68peLza5S9C3VEq",
  "key34": "2YMNqESSouqeKSudcnK56nfv2eh4Vp14sVrGNDttbdXhftbfN6zrH5VN7G18EqrSKEZ5QezDJZ3dgEnay6GpQVn6",
  "key35": "i8sk5GivxCsRcbBzmePB4F92kPBFnmdyBRLAwxbciN56hbwmytxd1ct7asxuJ7zHk7QfbkMvqfdD6Y1T9Qkri48",
  "key36": "4KFtjdqjpmkZddzHW8f2h8XiuPydcuF6toMgWTVoRwyc2H5ecosRz9KSELXb9P3szAwjW3nUh9aZtL5aYFcTPXGB",
  "key37": "57YKnV2rWZFghDVZRDcCZUPD5Z1wThE64Myz4QcS7TT4L27YEVEcEvNP4Z485DU2LauLGJEk9uAwHjn8niYBRDKs",
  "key38": "oRrhCrnNp3FSJYtdVxjB9yuLvbvLwGActb99wKY9AeJvxA3NbmUQwBNBv73nuTfL6amdBpXo8vmdZ14VZvqL3Ut",
  "key39": "41Lionj7H8qbZUDfVtGSW5kjsHSoCjLjs4urEWz9jHkqrLfxyYEUrVJJKmdVHdoQ9gqMCmDC7njyMhA2VeME1hVZ",
  "key40": "2z7EDEoN2DbV8sQi5NaVRdoDkGSJon5RCE8M2URNjZgjt6TFirPyRDMur3ueNgxRhgZhAKRRh3HkJLBfQ1jtPx59",
  "key41": "yYnqahdwwtBuT3vMfNopM6nKZhMstfUTFYgU9YKNKKMM3qXRZpFDnmU3u44y9dAiwEMLb3FhnvoBgqaopkGuKkR",
  "key42": "28xdqQdECD6B6uoGyKD2HSGarKcr8CAMU81CWcRmU8FbGW9TCDUb5gz698Ak4Dy7M8Yu7Xvw3nEjwLFgJA5JArr3"
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
