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
    "3QrdbDZyGmAPzuZ59kgzGVz44Lj5xAeMjZXy9t63RHmPbYeyAN8xcy2rejVxUHWYZ2RQ3GLimL59hnCT7ZKXX1Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2zUc5B1bgU4nUq7iZv9TUE9c3eRhZvCG6KSzj1Ew1hWkRF1GrS5v5ctdms3eCpvAcHcTt8FRNMnYNR8Z8gaTgT",
  "key1": "4wJvWg6XHhjN4AMSuSyCBHGugC217Y2YzqQwY12DnrqAAn7YoRFfTnyPptvtThL1sPWL6j8VhFQJ9ccCMofy3sZ",
  "key2": "4C2U6L7Nu77q3kakbB5ZQfmWPtxeyKM8iUr4m9pvaQ14Lee9mUP5Bxov7MNiedgr583ucVr2L3CTkxNLzw842oSN",
  "key3": "9AWoYJxrvAG8MP4bfVVjJq9q4qL6uWo8kqD38f2UzBiihBmifKtSGPxgEYv4xJrvxCM3HBwzj1TCDESrW88N4mf",
  "key4": "4FjQAstyrda9TCRWGvZq9AZtiRektqkVRZ2SiZ7RRVBq25knQEa9YRw9UEjjP1UB66SctEGJP8XjWK8wjBjruEQn",
  "key5": "4Uk8TtywQrA2KwwoijqPeH3vMEnEstvrv8qrp5UuDAtFPv3EdCm6miT62Dys6gsXA6DPXQWFVLTBgBNgThDp9RE3",
  "key6": "2mJjodYNm5ErHieowbKbRUGtcBBL4Gq3j2Cbyb5LnfqpQAic2WXCQcMY4Wo63pKwDgBtMt4m68EhpHdkpm4Xdmca",
  "key7": "3KymswxTs9bXSvCc5k6Qr39ULyW7AbRFxVK9fyhwD7cyuYb4Aaw71687chQCYbos7pVU4jTmaddYrHSBzsvgFdvq",
  "key8": "FzYSrkyQVZSKsxiaqN6c1Gxu4BYtdCgheZaqCqzV2qiZZLeLU5LNN115HF9Qzj4CsN6aCVG6P5rdw9GzvxS5NRJ",
  "key9": "61JRKhuuSrNJiwLkJXXupbcTBmh5dyNVBPmpQVr3pjmxk13F2cW5azDpeL7ez5mM7FhPDubWdQ7fcMi5X9paxACk",
  "key10": "3NUKRz84vtUuKiSXMQNaz1t9ZR9NCBStidAMf5933asz8QMdsWSBddP7B7qs1iEBXSH94EvprW9G6AefGEXcfcGz",
  "key11": "4jGUr5AZqbdcyv8Dx4eoGTYCbG5XQjHTwRqzJRydf1YQx5HvpFRRGg2SQ8g83B6FCk14B7XjbYzVqPaxPrQ7FGMV",
  "key12": "2XxMQAoySKTVfWkU2CVytcCsNb4a7m2KFpnfeUeyvRJ2Tm9jRmkQnrcEP5aoazjy6v5RXEhFQur2JaMyc386VmBz",
  "key13": "4atXCtM6g6MUZdu1uPDaEGGqT3BeBizjk5j2Q1EffZaVJaPmPBEktYgTENE1WgJw2SZGBmpmjPj7beQQETq4ErEq",
  "key14": "314v4BQfwaSaWE7KVMnva3sWtP31ciTHKxQTWePypMmXzpKTfPue7ZQtABDcoWfw8WK7iFhJmqga1DE243jVZTHd",
  "key15": "2MThiaSUgQVYMRUqNfLHq5N7f8bHNX4Mfkyuzke3WvMHYZiCi25CuJM2MckbhEmP25CAVwYNSDvZaTzZnzVEdLBF",
  "key16": "p7xV66YTPPbmfgzx88m1ugVZaeqckJ76mswwgZF9cnqcHHoRBMxxXhqc2C4HzH5X14rPSzdefTjjAoS12KAcZ1Y",
  "key17": "2Pg7PjR22afVo7aVydoiojJZ8M331aFQ8gGwsvrK1rzQP8v9KUW1doU29rEqgFuyVEyPd1QDXKbwUu2J7YEj7ac4",
  "key18": "5Kc4V5iWVp49m837jaNWX84BU9dYxqVJEWvja2U3Qd2Bt3sYWgDx1c5rkBTJguuBjNCwNFkCmog8XDY2WNNktswb",
  "key19": "3U9Aw73Yc5tKK3yYXyhiMj8pzyrjujyezNvocw8ENEGs9LAM9sGBj6f2PhoedwWpcP6XjYEJPZKbauEBsJSKKDAT",
  "key20": "5VqokAsGuqJpwLPjyj7jbSifSrBRcKXh2VRkHJuGR8F9cevUUGSp6R5h5k6dAGhN45U9raCLdqDHthQCFDdKY97P",
  "key21": "3R22DzSobkmxwVSY4Fjswsdya8ec1KLeXxSNmTE89zCgmeC3LcRfXyg1Qar1guyvWTdL7176KEZQbqK8B7USdrqi",
  "key22": "Qp1v7KU69sG2wwp2uxvXtHQ96K31SNbwGDTKnsrhcAJSuuttYyKmKsa8GrFm2kxVHi6SiQYiFWC3fgxUihuBkmK",
  "key23": "4vKNAcBsvugrTDsE4vWA7rH1sFimM426W4PeHRoR1YD8j1Uh6ZY1NQN91hQTBc8fzAfbBQcvHbM5jmXAfYxGSyAY",
  "key24": "7rJC7hRPfVu7EWECCQEV3M1jXMZQEqpt9vawnyfDQ2K4cnb9SDF8yhUz8y3A6ywrQhME1KDCM4WCugGAaL5E9RN",
  "key25": "3WZhCUUtdwFv7vxesoLmJUAvsr8XFsfB7Th7vcyufsBt2yKNpMKmJ7cUm1PDSnHasK43AP877qnDr5jPPb9rEFiG",
  "key26": "59npTG4WX4gj1v97o1MAksmiv1uZCFPb7z6mgwc9mURz3U96zY8Bz4cS4nxzv4aZZSReRj5Tv9kDDL8tPL6CuBNn",
  "key27": "5bW4zYzdC4DEg5fYNdGFhner4CytC54EG8uRnn8DVgbcE6VGpQeu69LbkCxs4PPtqEkRpRCg6raKs1xwgfd869Uc",
  "key28": "2Mf7UV2iyKouJzEY67mX9sAPc2fRbVncfH7JiEVSyn8CjgNriLE5C36Lf4znbXbbxshuyxkeSM9ycKvSTZFjR53B",
  "key29": "3modNsbeBxFTzrSzNA69URMe29bP1eyy4nZuavMXCTgRwCCXS84a1zsJao8MqSnYx8rfXi5F5LLGjmSAoBXJRtm2",
  "key30": "Tpyj8dDvA5sBsqPJ7gusZSG83BoHPE7rnUBMszEQRue9NyDdAJbsDQLFcfvqfwGxvtLob1MUmCa6qHxMkJkK3MA",
  "key31": "4Ru9KfEzW8SKikhvP4yizHJ27YcmsmFFeub7bD856RfgttqQAkrCkS6BZpJy6o89YxhPhfB8QkJTJjCQRNp9VSg5",
  "key32": "58JfeuvVfkcvCS5XA8gi8AgXVDFafjmDgjAmbGNDTgAQzyZoGfADrK5md2Mx9DwjP92jKtMe79perebHvMeP1dZA",
  "key33": "Segq3q5BTZbupYsxwbhK3cyfizUGTd9VtZrfEacpK6V6A1AkaAnGTj4JBckUrsmxsZCdJCeEBKVgfRCvs75tmhw",
  "key34": "2up9VS8F7TrTWqUtL97E5URHwjiQyEKcK7rMZfir7rdf12y2s9xYE7QaCJsxjTsdUyLf4uVJsdcYTwTe9ZfiQnoZ",
  "key35": "5dwQ8H8i4p7ihPccC7d9SfQHbRNQTrhpyWXY6miQ14tsDu4rttd9QkEhEpBGbYsNxCGEnpgh32zJb4CCAZp263kT",
  "key36": "boZy7NyqqfC1WPc7XRR4asjt9MP9qgokTTMdg3mieRNyvPAJfdSk9sPFnDJ67xBk9qq7mYhdAtqhPrxVqoChotJ",
  "key37": "ybbCCjnqD1HNdAHbyTb6EBKZMRL61XoQowF2C53XJ3WQoam3CpcQf8nrrEyZe7bymDfJ6A32UBE2D9ntxJWq2HL",
  "key38": "4CsGg75ATSUEFhWjBpQM8ZcZwzg8Cv9stx9oHC6LV241YE3YgS3TTetUC4DFYYpwdjQyYG9uu9at7GqE6wmKXJdd",
  "key39": "2eKSHB5ssocLfURSg845oR3hSjzMS5gsCfbo9Ly6AfUG34UTFs5hKDVFvFBjtBe3CjMkWMRDHiqjZbiw5tCDYkP5",
  "key40": "3DHG9vu28a2tqC2xcvkyvU6m6uxuxLMn513Cw1SpYAZnctu7Cgsht7mhU7ERSo3jaGNfzrRq6nJZMPjBp2qDu8ZL",
  "key41": "61jWZ8obYZMjnoqhrpGAbQ6o3driBL4ZzFq4WFbdNFnnf81xJ8GwfbtBvvJauBbSe4mw57btCEyFEvcZy1SWvJFU",
  "key42": "2ahdrsFJjv5sCfbmGentppG3fgJ7iHa9XuT7ipXSMP9eRt2s81LVCFAPjyJf1EWzGHCnFqcqWmMN468Pfi6kq8mZ",
  "key43": "2ZuhXZiRDiQRpLRBBvmpjJizGHDd4GDhEeiyzXMtD6JzyztrqqbPLACSFmWtpD19shunw8uXJiairFdXr6pk8Fj"
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
