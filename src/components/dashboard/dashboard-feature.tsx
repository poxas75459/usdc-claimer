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
    "4N3oPKFsQLCNYToip7ge5P8C3ZUTgjwfrLED2aapEGxqNFojyRjgvfpXGWNvn3eCY9TsbbgJYt72rkYk76Kus7be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tbpw9weKGC1U7qUPnsA5aw5FDzGg5XtjiSYdJ6i3XyLhb3iyCw4ygfJYTEwKb2vgkf1nGBz4VAYfu8m5nEhMpyh",
  "key1": "5JCN5MywRr98F1VEMboFqLnjDEgb2GD24KZgeFQ8akzSD245gTVcnF2LvpLN35n2xRJTyv4bpwFKWHh5mmdpQmyP",
  "key2": "5KqqDLjrgTgHQinUFYmEmBGwtAxiWupqQjZEQHLLV7hJJdzL6xVV2sNPZXKH9D2q4DV1RY6weqy9aLpaTDvKrGqd",
  "key3": "qTo6xTFSwypq2vHnesBJwrRz2JNSNFvLxXTB13GnXqz9ootJHqqYqjrLjqFb21bvDf229w1tRs13fMy1qnbuvfw",
  "key4": "35EREV6Bj5tKa27xWZMhYCNVWLVSnSjn6Pv4sjPx7vRAkevk9kT6VX3PiwczGJi5DmaqKrPiiJ1xityhvpGBFLWA",
  "key5": "59wRvkJKUgSmmtSdcEgkmXLf4i2TQ9WuPvsdiLdaeyYmGWCUvgRSyQtWaFcR4hoSBpjqRDcaUy6yCxpkfBABManm",
  "key6": "5K9yAueVLvTK1JW51LDbnDFsvyubmqCxFHvSuNJaAUvXxtRmjsjD69Sc3hCsUGgVH5zGdf5vEiFtiUTYEu2AnXYp",
  "key7": "5biKdbCukYdoFf2FdE917DpYRJsAtYuiBrtoWhtUWFMtLD2ftkqw6oZnsj9jSekpWY1Qy41Snrp8CLAteXbE9Jke",
  "key8": "3C6dBL5HnACWoHj3TrhGPTiJU3K5n86EoyoLdzkiqdUo4FVL8UH3XwYydP3WgsQ89ZNwUQRN1d3QgidRF1MvTSxH",
  "key9": "5jMwVk1dFi62knbDYs6Kt7Nj6P77CB1NHvEE37kPPKJ8XSUUCt7XwuuZhXN5tC8YTU2NxMqgPFAvYFdPoPYup7mb",
  "key10": "4iN53nMwUtzhqiswEMw7WSPAZcTuwpf8wUFwLkVdSL7agSfCM1DrF76E4nJuJ4QEsRyryrsLBcxW9LhxSjMUZK5v",
  "key11": "5jjSfNKXJEic7Cf1zE9CRv3Ksbi4f9p82E5UWahXs1rzrFZdxQJp1ZaXatoE4k6jbBxg8JsRzwoYPSzhuwtfCgec",
  "key12": "GYyhQ3HQY2gvrqKcvhC3qRf2ysSmCs8xYwP8fqrGpaWdKGVebvJFAFj9Soe5djDHs8sS8DcHAW1UzWwmpjJsw1T",
  "key13": "CmTXD5YoRHeAmW7QA5xVtYXxvPprXmbDHfNA2V5LJaXqSif2w7tpcZdHqRCg6BTDf7HafLod2FWiEELSNrFFutf",
  "key14": "1Q4ypoYTutzLzYZDubB79VkKKC7kqGWbtxcmsUuXXabRnAi8nXqYSryKd9THwLjGjewz33msKjTHvojUBUG6gdL",
  "key15": "3sD93ZCsVykQArSX812wkKR7d7fSi8dNPkLCFbQLLRVaG5izLxRpyeS6koTnYSp2BeckUtAK1zHFb5xSvP6Rh5Dv",
  "key16": "aDVJ8wLTPFVh8sVdTQBNrUHpxknErj7aQuKDCaqLQMBpbs6ASytmEFjNoi2jsjdXTTytpfprkHkbSbsy4knmZ3i",
  "key17": "39npBhVmopd89i62ghsxe1zyMxRhdcS94PYC2KcyrBqtAzBLFcLwkkkUEUDjeEbjPR7hEroGRTmdW5Na6Uj2a8RJ",
  "key18": "vLkw488eg25BtKPaW5t7vy36BWW4D45ypKvSP7cL7zfpcFNYNJiZAKLMLVCd6nBmKHp7Rn7FrN3ALzK95y4AqNg",
  "key19": "3TZUy4SFdBor8xrtXsN12JJmqqJcoTE7ZcbaehGSvztGKvS9BciicD52jxYr3vMpDDTEr9X9evFxXeuPCgHPkNLj",
  "key20": "4BZ8s9BmQeEDbNJoDdbuqWcn1QxXCkHWQ389ShPTZ3Vpt6sF5yV1Fny6xprqRPqHX7MKENMiqf1agyPezzGDx8Ka",
  "key21": "4jARip82ZrgjzhqqPxvRMcQJScFTxawpBEbypt37CMFh3FqMw7gj4G7VtH6DwWJ8hqQafRkYd4SsqbELsFrmPaZS",
  "key22": "XbYeDQNiSESnfwTVaggYW6Xdzqic9RCD8yYVr2a1AwiBLYsp2vW3jD9JRVSMoNqbwoGUA9zqte5V1U8Q89QBfHh",
  "key23": "5j8FR3Nygg5UDnbbZJWCg1mvSVFRB4FNBRhZDgof1x3fFHKTC9AwQgmNZrGGVDfyYNxfskRSSwZdSwUtpcBvmtwo",
  "key24": "2Rt7KsFfoxsxK2R83saij7LPxnFHgVVDyYDkc6Ppj4iS6WYyQKDn7ptHKxs1JX51yAYDD34yocmxRksLD17DQUTB",
  "key25": "5WBb3B5x2YcVoMbFSF2J5aWnHxs8MRakedY8TP23dm8BWTXnLjK2Wzh96EqdzqHcz5ercmu3uAuNkhpywLtceWsW",
  "key26": "4SCTmtPte4Pe9kxmivoLF7NYUCrbFs6SG26jTiz2F2f4mAJqy4X579R6xAQUqg2FGPago2udHmJQ768wdwHmqpX1",
  "key27": "3Fbmk77PNTDDV3f9U9mT1CW1iNZFHutxa5zAXMBTvYCCwFVLhxmB7c5FV3HdSiPpky7Uo56WGEm34V8VG3Es4s9C",
  "key28": "5y5W6eKWgcVRDBsvxhQJrwEixy8VB47PMh1H8csKaYCEQJGr8dJ3mqtCtJH2h7VYWYHjhLy46MhNEcGZGsbd74ae",
  "key29": "4jo5z3suvwZfDvgo5GKyATJoA5rT7agzkujuSAVMEqwtVWKwPJCbir8YbRZ33J97ZKu1jMAhmMRjdhy8jQUQrwER",
  "key30": "5sDCqYtv29HLVPqgbJbXwnmMEdSRw5XFNjPJuPeJjDWHjtviHRdyJpNQpJVmV4oiCNCqcboHLzWnrdX8AvKQBeRC",
  "key31": "HJcBf2H96HXECXN4VA7Eu9d8j68pwDa2dbcVM6Z8bzYWNoVodT4APYzuRY721DSJuUcKepQXrCJjBaGj4EhMaun",
  "key32": "4NyQF76f16t5Z3fqCTwxShRPrFuKJjkwM6bgJ5orvciw4Zeft1yCMz7JzP6xeM1YJ2rr8jnpN3NdeZQHLbWE4baM",
  "key33": "3E2kQBPRJ3iXjGWiPuXUumAJ43i6dg1hsDbE5kGi53funz7QRXqBEziehoFodBNyJRQjYkaEMtMr9e5N89rYBAYC"
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
