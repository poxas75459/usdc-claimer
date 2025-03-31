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
    "482GRxYRnPeuaJc24f48F8Ek5mo3gdWhfg5sNBWyiHkYJKvq42dU3KtEPDByFTwmVDw4VjPkgRoQ9nm9ta2ahYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVbgkdmdZksGnTMw1eKrUeVCJJWR67Z9TLgpSaSrUiEPzt34mWqs6LYV8Cg58xqhfG1YfP5vRT4fsbLYpuTZtaZ",
  "key1": "4d3SLQXDBACWPtSTFSmmvAQxdqQDbVdHu27dgkECnYg7RsMv1pwXYjehBMXuYsb9yBGNJ29GGERkoY73eorRvzBS",
  "key2": "24rygdVdz3HWdnYZ2dtdbuqVkJajTspwM3fSH5cGbkuExRukbFsAyDAYrUwKHU4HwJLVVx7RBWsCwrGxYpTr7hho",
  "key3": "35BzSeeVmEQRhqnDW2ZH9JGR9jJh6sk2uShHFeaKeKUwtL2KoEXTMGfsxLKQtd6nyavLhuMrc9ERuYjct2VoFWiM",
  "key4": "vqACqCg749WA9CZTPDb1Ju9t2EtKD6Qme1pBkNBksMMLVPS2TZha613fGyMHqdPeYcELyGJNh2jSubCWaJFho7F",
  "key5": "3QMZtt263ZcvKvzxFcWYWWCi4Lc9Z1nJgRky7Xrw1HmNF4BiiwtY1QYbTxnXuzszkBV32KgWrjfEMqSPazca37bu",
  "key6": "4zCNHjEZS5iSu6Lu8REaPQ3GJ3wUPnr8FVnGR7sG8LwWTjs6AS3K6fiEBUNE6KymwaCewcPEYxcwDbRPLPqDs3KM",
  "key7": "5vtFkf8BHHqLcXnEhwi9J4MCEMbi8BrFkC8tj7DLMau2BECsBFNX3h9Dqmpd8QYMcjiougMNK7KU1Zj8QEBnWGn2",
  "key8": "54TpXrbt8djFYSaXSKHZzTWajmHoSh4qk78H9bmoucKkQHfxBoCXWBKJbwEBjgsKYNPfBu73WEcVBibfoitZYPLU",
  "key9": "65QfgH4czb8t4AFy9gyWh5EaRPWUhuVj1kRXnxxehig6ASWCaaSBABayK327jBHyXJHWRkmC3yfUtgXVkPcC88Cp",
  "key10": "5usE7VEujS3s8KJSvgp8jjTAJnJJuJmRc29yWZmpmGgnZvRMTADASt8WPJwf2RCXSuGpsCu4d7mwTYspLwzRwRG8",
  "key11": "2jfsmGRMtz7emPfVPeaDZ8QpkdTvnasRfKC3bh1m1ebs2SdXeebAdWwgwTibmPWAx4QmsFwkA9udhK3xdE9PtxhA",
  "key12": "abBWw4v1ybxHuva6js6fYRMncx9WFsV4jEtMmiEWrCwyPbiZSaDpMnYyQUWuVoUTwbsboXin4WFLdwimrif86w7",
  "key13": "4AEet2JZfEiczvnSK9kaXD2ex7wbDTJwA4jJ3hezNxa4w7jjF8daUsL262u5Koy36zQ9G5kRxTFRb6B1oD8bhdnM",
  "key14": "4TYr5sC3Ma2aTp1Y7K9j7A3TYzC8AnonYBNwruZ22KTmHMThsBbLkVqSKysUeztdCBhMx2AW22JTsHnUPjMU2nv",
  "key15": "5FMRJWeJ367jnkmNz24pQL7P7DKNJMdq4L6Cjz5PeXUBFt3Br7xVGD7gm2Vpqy54eUYbyrPzEisD3xkmR5Jb6pob",
  "key16": "4cheP54LTNccMEqYnJxJ6BVR86Wk2a9dPcHQqRAL4tXmMuJ53teMW7aYA71drZ3XADGxYf79kYbEct6ZCotVKnYp",
  "key17": "AJkVehU5eNcgvozJZthdsnbGakqyzeCNK1sLVz3gnPwSyqCMDh272MnNHRtvjSLEUcb25TajZBTivkaQdXgQabu",
  "key18": "3CaurHarTnZ4DeKV4m3ywcVGzokz2Wm5df4anVxehshKhs2Y5cNtpLLvrWAX1Ht8CLELWxYovXz5quAtwxrJmwTj",
  "key19": "57ToyE2gSGUtBuT4tosruoFEoQWz5jES3rPZjdnfZEmfPBAedra629CDqLp6C853symdVGHF51Avm9tKd2jQJgmv",
  "key20": "YePonwQbwpnFv4CXhhEbSHymeba6RX6DnhBytfHCxLADmZt6PA3MsoAVydm4TaHcAZz8Mp7JrAJ9fFbyDonMuRk",
  "key21": "4goEw7F1yjb2ZpWj8fNHsbip9NC52uH17Pe5t4dd96p1EQfEk2dpyiCFz1kZsUUmYvbr3mNsU7QDXwKC71S5TQx8",
  "key22": "5nN1uQ6qmhQRd2jdLc2dwukdyjWM1z6pcoJeszFPxn8ngSUaRnb4YbQ2S5H5dBchj1MCh29T4v2HJNUhYuzn88ZU",
  "key23": "3TkVJbezUhic8xnA7sdPYcdhhqvssjoiFM6K1EiCNuVpLyaYYg7B6PTDMiggTrhzhyB7XhSLMQKwRnXEz2Wtzh6i",
  "key24": "2ty4KvMsLHqCbsmXsk1mUjyhrdCxEAAqduxRdpKG2AsbXrr1wv5dBG1YGqySbDzsPwRvFxjkwct3LuKXaavND4bZ",
  "key25": "4euw4poQZeRgrDuq2tmNXyUia5ycUybQBLnNacDmGrgREj6BDcgrHEGje2eq9pHYGLx4maw8VfzwVxb8XHg6obtg",
  "key26": "3EpWPgfP93wWoLf9ibRBMCeyeEESEZ14ZnqHhFXzEg54SHCZnd4gzvPb59g8PeMZHTT5s4iC4YFxY3D5Ji39zkuT",
  "key27": "5HBjekCHRPF6S3ctWLwff4f8yG2Hc9nS97RdjjAxRAXNKpSRBhBWonvfwAPYqru2pb5kj2tww7DXGNYJzCvPBXsY",
  "key28": "2t51DYyQFZV3nmi1AFsex71iVNuyzJW7Dz661q823TEEZXaambT9LtbtHRTuqgiaPbYa7ffUrSkwoktX6cTR1qH5",
  "key29": "uTLjF6D5SJx1rGjsnRFn1BKvXUkNTDu6gpA8Mmx9STx7oggQVbKd2XRe9RzGUfwAwSt6JYTz4m9VHQuzg2f6HN3",
  "key30": "3xVnvqKwg4LcRdNLdUEL7dHcHNVPaLqexUp4VPC2j9xyyNvcaUbTdsT8EiBuyXYxbTGhAihMM2HPe3162wxoEvjq",
  "key31": "4P3F4XCXKbP4AJkU7By4AbYMnpeZyfMmfMDie7z34o8BspodovCJyYRqkaZCbhkpHSJ2E9cBc7qBNWWhLGu7obDL",
  "key32": "22V7ANHU6e3QMvqaDj6hkCbaK9ubV1ACNUmF9Nu7Du1ZCw3UEN8vfsgE67BnKSDoQ9xRynXCadi25P1xvvRSSJ8s",
  "key33": "3sg4QPNK9esYw9ZoeEiKwBhDDGuJbtq3gF9uUFPeTeGSaA8TEJjteyEjqqWfEasfxxZjA1MW5soL2H9KjyjVqD7X",
  "key34": "5urckuq9bT77ePfkN7xHwpWCEKtgvRyMq8qEb4pbJxMZiWTtai76sc7xNCZW2NeFesCnhvQxhD6NskL35US8D538",
  "key35": "4Zm6wQYVrY3fXWwbACUCXxwUMzJQfYU6nxjkrSQfWb6EWujkWsvbjyfkGAgBEzMjWeJbujzLh75hKjabND2VfA3e",
  "key36": "5cX4Kjupf2GSiHKbUTdU2wkJVAsZnFwvxEA9EbC9iAGTR6ZRrwD3JuCAag14PTPrmK1CWT5RENjuEWWmyUmNxhCA",
  "key37": "3U1nCtJqB2obxq2ZXrVjzLizeFhZFqDVjho9rNcmuws5oq7zkum2WEM3Z5d57UeSkekErqc4YEUZeiH5NbLHNfRN",
  "key38": "2cYBjUHWejMxLe225AhyHqT1w64wzVN2PfWebSinavdJHii3vsPea8CXayr7Fbq2ZGBGzWnLjTgtZ6aCXooi7Udq",
  "key39": "62298YvhW8LrU5jxRxEMs97sv4F9HWq5SJzTixspum31yb1BrRE9ZNE2WKAyrygzuDJ4NYkLFmnnnZJezhkfofoi",
  "key40": "4RLCVcmXqSyZqwSaLWwMcKbMVRvyEUA4MDjV1kE6wYVq18P8npQDKhBVMxaTH99FmsqThQJ3UqFtyKwkNbtRMbbM"
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
