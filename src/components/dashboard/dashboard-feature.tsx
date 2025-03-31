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
    "2hg9y9x3nZi7ZRdAGuUPbMd8xSKGW7RVzSvvaXA3zseMQkToYwnJC3H6vPFJw1DBLgVAHfC5qVB6KajioycqCJbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oKA1HgRzfnkRJ3LwkFbFuhXhWbQ2hpsNbP3quitNRgFMkMaKGNQ6BnyAMGSE4eaZYdrXLH7yKAEYNqSzXN2aUdm",
  "key1": "4SJHAeZnwtJYkCV2bkTT2HsyyocvJRX9LKXy3rivwDnHx7PRnJzsu5AyD9DKERbrGdGEeYCU37o5g52D1urweZ14",
  "key2": "4MKamkVpd5EQhwNpvQu6shzY8fiDiUmf8kf4EBipcTJSdAorLX3PwMXWAedgwrjm4vseccyZeBQNjuaVSuxeQJPr",
  "key3": "FCyXigQsTw1Va2mBQJdw5yBGjjZxbUvkSVp95kyLn5djZajwM41DSwEFSSAVtf4zaDaXriNfeqR3cjgvshU9VA2",
  "key4": "3Gf4Wgmt5DPrt1p9DrcQ5uoMgBy1PrW6BkGhDCQk9T5MZ2K9VBgKj3rhyt5gqxv7ZcehvTdCu7mKdUki37zfQjGR",
  "key5": "3CtuLKrmQ5YRbAp6b6FNGSsAZ4zMqurUxmTteZoQcQrSkf1cJsDfK5fh9eTihpukVC1fWfPmrq11cdTkKCtF4Zex",
  "key6": "3UmDTu3KtfpcSnHV5YohrBfyiKnosXceQG47cF8STgfXQS4dhDwHNEE1T48HEmnEjPLT9jcPhPQWJe1LZSi7UzPw",
  "key7": "r9WVnTK82F52qwuQJ9zgXxidm9iyscM6Mcv8aY6i51DFRfLAgLoTQMsZys5nDCYNKL6Mp7Av9dDswvkd1kAHr7A",
  "key8": "5GmhtGVr91GL8VenA8AqAVP2hcTsBGn9hs8teU2Z8pgteTnZtwbM2Q1seB62QKwCP17iQYERRxwLmsHtGUrSiVPt",
  "key9": "5kNWzcTzLs54nzSP6318Ku63SzFVkfuBTPknCEsWWUe2Tbc3YBWSsDZNFcG66S9C7bfgM5aYQ3KdaZYUHTBM3RD2",
  "key10": "32G3eqE2EMrwRJf9h7mSVok8qbJRSnk87YA466T3RLppGK8HXPDiLxDq5QczKPPEuDJz3LforEM2MxpkMW95ySjA",
  "key11": "4fUyJb5HZvJgSJ2sytVbUz7vfxSvdUwyKoSXS5Q873JHLvC7XU3WZL2cyhyUWhoPr3H9TgDamyGqDNFN1PeP4pfr",
  "key12": "3hT92PaXqLMsYyKPjGfusG8dFFXEmG2vcxkD7zQULZkKU2tWFtaAAg4FnfFZGGMr4cCHLHepcyg1kJYJRmqotccs",
  "key13": "4t9WFgK3tka4qhKB3Ct2SZR51r5WqQYiCwTEWu1R5DFseKpiY6mnJgJeMkMu6kEKYn9ADojpCyysi7QvJpyoHP2C",
  "key14": "iqRcBXeF7DCeq4gVqsMN1nZ9fGR1p8tzxg1opLtVbNi6m9Kn3cX6kVbZX1WawNqEqF3L5YmbCD15hZwRa1Jkiqk",
  "key15": "5THKA2XxtuBKSBGWn63nvaC7VLs5VMK3DueBk5U964X2gd86pDR6vymFjbcadijKRjPqvGiSpxtnrKfQTbNjksSK",
  "key16": "8SemVCSAnqFLbQi81yiR2isN7K6KXeTwvmWGiUeVJkuibTEwaSAw6fVFL98jw36y8pRWmVZGK97H2TYGm6qbNzV",
  "key17": "4M45WtTELY83F584fYXrf7cUQUyr1x6TPG5wqBPNDRqEF5JwiXdgBphqGPwwcVjCamCGFAcHrHcoMtDVGYmBdmPd",
  "key18": "2KUo2UXHvSBdRXjJNzDnBbfLpBuhxV5XWQyPSWMsz8sj7R9jhp3s8F2tbj11PU25tdkJguqWMsF5sTsgYmkHYWUG",
  "key19": "48hY2k15SsvYaybTZgLMN15eQ9ZBYMiMXz2xTwLjf6v5UjQmPij2gGWQtpBPKFMQZtxdc6nY1CgTGYtMWtSr6z1p",
  "key20": "Pqn4FWnKcviQCQjf687zWaL5LW5thCfgFyvNbXnSThpiSyuPik853nY1dLaKN1haZwenKtcVRxrJ1yWNSBojTmw",
  "key21": "5WWGPbh9psZLchg339kGpUzSzmsQWAf6KKUva1phj2mZXox2m9wJ14g9X87nXiysdaAz8juyn2sHmY7gDtt9C7h",
  "key22": "3mRoUxaW15CK5Lc6Nrv9HTQAp1x86Mr7ymVM6fwhqcW5UwMHBJvpCeiBDzfbT5KMgYFTCqzrPa99pwgyvDqgQwTk",
  "key23": "4Dr1GDEf1jYyYUfMv8Ywz5dLJLho3e19eVosuZGdjXBGKXLpXF5xZKSs5G1YLu7hV3m6ewWdxMMjmR91WwtZcNEw",
  "key24": "2QxkYwdduLDmmpuEXaz15nigiE4zJ4rG3879BvRiRe2PnRiafMPt6qAmDqJVnXQo4VkLJobrmAJfncQoCTKYXBtn",
  "key25": "5tWZNku2myzCDTPgdYy1R6HjryG3wwKRzH5TmP5KTwbQZDPqk4TuborKdCj48d6f4WFvG63zwoLzsD4sUEVHUEf5",
  "key26": "26oTpWb6X2A521HpG3MzuwCmCRX9wHZkwsXpdKnMdoatfBSsSH4Vh8sd2EhecEqqcrfpFzHAM1PvUzckEswR5U7C",
  "key27": "4TX2xWfPBrTZzK2gnswVjWjKLtLdjzsBom5Ge996FkidMHsvDJDgaxsvxpi5tBRFruArPhgAc9AGAzkbHmyoCKxq",
  "key28": "3U7sjz9XJ3M3S1aeYR1nKjwuTT1q56aEsuZi3jhzjoXwPZhkx9ieLK8qwkeM59kMqLo2QC13Vc2GXkQdDeyCvRGg",
  "key29": "w5CJtQo5BfEZp8BYe9mVKiLgYPbPbwUGb4LQYFHn8dx9zQC64i1Gwtos8VMJpbzAFfRougWLvAu8URZhKQD89vy"
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
