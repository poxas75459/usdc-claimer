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
    "29cEeSWkL4oh6yxuiNtahaMD73P9DtGMRZPJHAP5m31Qcaom4DNjgSZf9Tqk72q7ZrgR2d4pimY1mfwQtpWRd3jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254JVnPqmYw3Wub8y1mZk2ayV5gQtD2HZCSwhi9sPiXXomyHJauFiaEFqLtrqtkMFYerARYm4MwUZXrJyQ76pQQm",
  "key1": "2QyD8jzHZN75B3JCb3164HjEHoYuw6rPsjFUHQ8yEwBMjipNDmmAGtXG5omHFET4SHkp2znhjoYGEKTCt2sNoYo",
  "key2": "4F9Qat8Zd7hXgCofURJkKC2v2aQJhsvbCPTpwtf7zspKquPZL2VLji27vysF6PsuWQ3Ehq6zeksZs67NjBpD888Z",
  "key3": "2UobzD7RYtWLF5Vht9ehEQmFLaK2qeCX13pFZ2zsQHFTzh84yH6jBzpjsETQhxLhvEvVqsr2A9CWWh4w8DQMcV1i",
  "key4": "HptJPvunESPwxdHCZZZs6pKAt3ZkkAPwoU9MV3EuV17gmaUHf4Umhh5VpHNBaCBE6CsgdZNkKmAmQMocafaaZqE",
  "key5": "4yQevRLtirBRYzcrTPk5tD2YyZAaLFER87jSHAdG6L5TXM5PYCGV9obzcrzQkuKeahrnVpJsZz6kwmERvmu6S1eF",
  "key6": "57Vo2p6AXy3Ke9YsARAUwgu54y22R3xbSSsib8aEjK2bA9SUgnppd3cXebVyPjA5HXmEFueoP4vzxBsC4Cz1j49",
  "key7": "DvsJmpKCq7nmVvyaM4D4eCd6onqihv7hbgJZ6UkLgEyu2G84byPcmECBZmFxuouXxxjp9RLqZwgDyjDRn95hJb3",
  "key8": "2VJnMVxWbk7EufFzGNofZmZAZziEPbPsbsFnSRVrV5JsKwWzpqSp9vgofeYUjSSp3fnn3kgszrFcPsBWKjHtdwuG",
  "key9": "4RmZXhoDNFmUkm6RGuPufPsmPAmSEhXTYsKt618c5YT9iULE2B6A4Vr5VGTwkDspkvAhYvFk1jhTzoquxrwhqCHL",
  "key10": "4tohaP22YB1YYuXBkJ6spbztJw3fPhz58LD33cPeziWukHqhjLqxG1K3vT3FmsAbF2vkeouCPS2g9LURMjzqVQgC",
  "key11": "2C5JePTokrYs9HrwBEydeQwX7i588rw3dpD3j8S4L1YdyUvEG3su33VWSMCxx1HmJkmrfdWxtbtqHL1pKYcMU71",
  "key12": "3BFvLKPuwwYetVHszWznbGNNyaemRwFhpdyCvHn3p9z6oMzA3wrDwcwXQrqfmoYzbaddxUZnanbJMTPxijURBpfM",
  "key13": "5FozVxD2Dmhs9n1pPxJu3oYhw8W5xu2yQixFsXXYPmeYf4MeP5AsEMEpfwCXuyefVk3R1s4GAspVt8FYLNWYCRd",
  "key14": "594Rz1oeUu6YeHnM2gdvMcLU3d4tihm9CtjpyEqckHGpPVFfiZRaPqTUYeBGcrweykvG1RTkMEgJWzdw7bpGWy5P",
  "key15": "59ByWh8U1Hssb7jetgHaAkaKrhYVhUyWpH4npjoPDx3kvKkKYHTnptfSrd7kUn3eMUtG9bxGdJza3afGS1Mmoc9Z",
  "key16": "QwF65vCwshKyjAsPckqjViDoZwa2oJt3WxYRhetM2oQ4np3HbwtT74WLvgun4CUV5n2tqfKLPMYF4NU13mUbH1P",
  "key17": "2bqethbbLAosjv2irHoMKcA8XBLo3HHy5fwg4rCLmkqpHxah8ACxEM2NSGtaGyZLWX53fkxMsqQyVyrxbBSai9LH",
  "key18": "5ACEnUNtysFAFbDg6yXM3fyxJVkBow3K9Wrvx9Bbr4mXLbYwqBC4A5a1FE2rtZAjREP9pBVHrNyCmDbc5LpBbNLh",
  "key19": "4rKTmzN5StsQfhA1TcT3oyh8NfSiUBUucjJY9vAHhCgFrA4kKShch2YqRVs3woCrh1mDvLcNURSTeAQ6a7iLdWPn",
  "key20": "2z82cBbop3qsKqyZjqfs6fcQszYGDtYCMyt1BaDEvu5nnsLPaejXXUor92RJVCHXD7K3xdLW4UqHk25go7Z5M7yT",
  "key21": "4A9ju7Ny7EAJRjswwzkjMWr2Au46DJySBxoHn2BWBYauVSpacRmVx7wDK7LMbT2JJbg7sCbfLghTvAmG3djfYB4U",
  "key22": "eUtLjVCaxLzmDcyZ656uY61ATQXUcuza1PKrBhj9YVuTQ23Xyj1xV3rz7eDtu9p4BpZ2CMfkyehQJvqgdHMsvoy",
  "key23": "3oshGkgsXuYFYahV6g3D4GqLhUPJA51L8Zku78YkyXxsZiDykNakK4av2tojvmkbD5UG4Nx1DXoDooHYwESAALrz",
  "key24": "3agtC5PcoP9a7yMSQFcdPqzFbd6qMCX5dwUVYdYBa5tTcguibp4fnLMK8KXQW83hnSMk3c4Uzop6SFd5LqfG3r4o",
  "key25": "TBG67w4vQ4Y2caM7kRoWwWsGCJuBWK66ErVk28SWKGKwsPhzXg4EbQRyPT7GtJxHNj9YsG5HgDNn98C3ZS83kMW",
  "key26": "2ey2gvFcUgAvjNdwNPgRtxzSQvh83NsXZF2MmvKXskvd7Z5TwyVGKdvnaGzt7umymveXSUBGZgndNrkinhYFLvCL",
  "key27": "3QAZTFgL6rK9R5Hs8dvt74x5xArkvuvzpHddaN4HFGYR34zJrNR7p85ZRmBt1YB7WCsm7JryhSGkk6FoyV4bB4At",
  "key28": "61q5HzrE2QkzKny3VD9Z2oqfaYesDesS9rQnBroE3o4ALd8VECZ1dQRXaiH82Cmn4vopQypR1FMSet7gASRb6ztg",
  "key29": "3hVckt4VsG6qGG4GLfnzJJiJNChYfRs1sABBtKaHa16haU2qXSZ93ixQSneLm2LP2tzjN8g9srzidJNtQ96f75gK",
  "key30": "2QgK24jEE2riQpzdoVcifn5MqRSxkq3NERA51iopFoed3tyk5YEAhpGAXPLXHXSDj4b8J7KFBhGFNPFxYi7Es2kq",
  "key31": "5n7kiFFsgYD8mR1ADrkos4HNDomXnZ4aDZqhuCzjp5SApJsE6iv68KwjTtHQkcSoPZ4gW9pUPaFdFS61TooT284B",
  "key32": "62cUiFVXQ6LqkMtVwMMhqYz9ACTwbhCSSJJA7cn11As9XxiJwKGf2utkHLr3jLYws8RQDgNgA3oXf4cD5aikMfrd",
  "key33": "6v17S74aUErLRFdLmqjvxumQhtnDGPUtXe7REp6JwgWvn2R3xPTau9BYBJKKWb8ncDN2Fo6cR773TNT2XaJ3cRB",
  "key34": "k2TBLd8QPGQkSDnWw13Nj7XH3HxYph6qJgSDApoVWWeoxiRHEHQnf99CJbQU9sFPS9zUzyYZ2ez4fo7ZpLAex8c",
  "key35": "kXjXh2uRJvtEaDyDnmapvjzpiGRZmUjYEkZG1e9BZDoVUeqUYpV8v9zZ2Rz2XSEouJ4bQXvEwKg7A6M4mkds6sQ",
  "key36": "66Pit3WPxYKjMdRQECPVxEDykt4PaWY9RMMjPm9r6TmWHyyiwLs4UgYzkqbVdEU2fNP4UEMhYzZR2DwUoCEsHKWS",
  "key37": "51emCV2rhdCDfyPDmj28AAkdJuhk6M35Lz9rEk7RXkoCCkCmyebWDXPdkK8TCgx1P3Gw9q9VSMobhviNdTz69oaj",
  "key38": "xiYg8ui2wLTwQmdQ6HFhqFq4KyQXv1imYqGSWAavYNstYQhSsCqrXXSdbnVmcdwuGKaGz9UZyrCa7S1zNzrAgU9",
  "key39": "2KnzLYFcrSYcopnSuaR1kpqefaX9pEwGmC2dyz5P2TSKo7GyQtvaUy8nwxSr5WbY8sRfFQPJ3oCycMaDG7kETBks",
  "key40": "2N8Aisoxw7TgQrAKyrg62YpDRaWafBLgNiKwEnouSZ2nYuoEdFDRPAZLNHEDvoiV1cwCZL8gPJoLdCyGFjG3fk84",
  "key41": "w397cePBoVrmqtAzX9UgnfzeM7tWfybRGPXj5Dt9hH6T7RkhengY8RMhCSjcd6V4Bsz5a4NfGkkkkmV6X9yoiWb",
  "key42": "4uEon9M7oMTaCH1cuY23J7XWrh1Br4W19FL5X6KCD9rnfwnGi6y5CrXtZJ5MyCxND8dZXZ7rr1Ve1ekzZZoz2k4Y",
  "key43": "4EvTbJHJRPuQDe3bA4GcnrZav3EpE6W7NzqcnuWV1sayDMjXjEHFBAgf4hxeB2h8iFp5AYxQFkCPYZKV8XJjPGJK",
  "key44": "5ReBQJj7d4ttZF8AKxDLQe3SyAJUn577DhcduaCUk98UyUoFbjN2YNsdGXqqQFzes66emLVdoam49n93vCJWJUgQ",
  "key45": "2eaPiVLFz7F9JwcvyGsJ53rBtvF9Ytg1AR1tAzCAciMUSRKZo6GjLE4AeFzZsK6HEKAHckpHV5bFtHSJiSt84ft5",
  "key46": "3mst6qvP4nDXE9ktnhvmrtog2N6sGsEJwXJwFPPyuzbWH5mjrq5JBBkeNGqjRsBi8umNnztsqnbY7Z8GXcQtbwiP",
  "key47": "4pzrvHLLgFT5nVpmBhARgXX332AAb2otomtc9BQpgh94HmSuPN33RLpF6krSxUwu8zKTqbg2K98mLQy9QUen95C",
  "key48": "4tXFoUBHAm4G6UzLmqC6EnL2vgpdMf49aioHx4hnfHVoJmXFVHeocfkDh6vp74T8c9JVj7KkHaDkrkFxC8CUqWZ6",
  "key49": "3Jnu9pf5GTzesCoWJ9LeiUs9HyMAYBGthce1Zwb88YyHyjRCdQarHgAxqFxdgbGhbQzpQY2g7xcQDBhV7BzhmvGB"
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
