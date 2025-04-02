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
    "5eJk2J7uTNoCyrn9uaiBSNaqH9fib5RaomcmtHnhh61fwPX9LnKWPmV9Z6kFXSogDoy8dmRiHLo3dYxeq1SRfkCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sosL2UkF9rTB7fiwtSvNmkRiS3AWv99KvEBKL75TcChCskiSXYZsdo9L81HeW8T5FAf8wzKcR1KWSHcvVxGNtFR",
  "key1": "35DqgSqGyndT7ULuDQzHZugYkdfTkF9Yy12BdZK3edMqj65PaAzbc49BNnZLvWaLCWSMMYcdnaHzzoEm3SQrPEhD",
  "key2": "5VA3HAreeWAAQgZX6mNu4rmaCWSkEj43rFeM4UgBMSM6tnQAq7EAucPEj2L12541DRQrZQmC9P65aXYdApHmMPZe",
  "key3": "61LVE8CWw2cQQRWopxRLukG83FteJBJjHJhoxFm5KL9wQ2yYWvewUkzHE1DiZuiF3kT9w3VW5ikcS1GviNcv9CY5",
  "key4": "2VrXPw6NKB2bwAcMRVm2c3LCzU9cQrd2kCMsqWhot543VvoL2ySvDQxQoymJTx59L84cLhc6K7XMCJfdVMumysEJ",
  "key5": "URhhK3rMdP1VfS9Yevc6XEcxU9JuwofSnrN8d27FTFkULeN3mTpK1T3pE3jFU1wQB5U927fDqyoqis5zXdjpik5",
  "key6": "5ZL6XCh9LnSWExbmu9uXKA99Qty5WSv3vqEvGwJK1icEMZUx8PXV5dYxQDTCtW6CcMQn8gmpcpBhRskd6pYsZ9gG",
  "key7": "44LRGxeCWhtqMStuhDdR48HHoXwd2Q3qXSihTnx2nRVk7NeTvNejmrZ3wSoD818Y8dFFD1G6a7gJRpF9LY6DVcK6",
  "key8": "42fJujBk85KXFiKXJfoDYH2z1NxagYe1rqDVCDhyLWL9Nn3LPM2hMWjm27qL2Nuti5PQP5uBN8tDebcYm7erLHQY",
  "key9": "mtRtDcontoYp6Q9tDQMq79c2Xf82bFya7ED9fu59u3ZKie8LLob9gMfhUHLdJxuCcFU5yi9cf9NMhZZSqvQnG1z",
  "key10": "4xpok1Z66UbdHyxnewiRCazwmU1XnuM2Mw9YsN6v7hGXLwWsVwq6GxmiRYjnShEkjb771SGPXAcfZNeyXheqCYZw",
  "key11": "5A3rJhKE8PDAr9puFsToH9bgr5Y5DQ335vSFVtuGiFoghfhaHdiSxhwPwGJy9TFGNHVSkth3DKu39Tt7cCinY76K",
  "key12": "2hw99MSGw6Yn23vuae8VyGr3vcfq3wu3Sd6cBJC47RFJhV8ju83GP1ByV6DeyeiXm7Y1UDtBxdh98eigNQfRouDy",
  "key13": "4YAW2PuS3ACv7ykSA6AidYyrD99zs2XjBeetd72ZSJ7Bpehwmv3RPeSNA6sfGYT2wpPA8vPbD5exm6wvJtiEY2KN",
  "key14": "3qHvXrSqME2a4x8B3JAMvAZG3PZR5iYuSmyEXd3A6KdDzWXkFqvCMAmZ1UEiAbuEzQMHsMppVE2fizYuqn7jvpKf",
  "key15": "5dHVPRYWDBW5p7GLK9fZHX7zsZvhFip2p5PyDf4TxVrWeduRrKzCZjgjr2yMScA64bA6fXeaBgRsQaPFhqPNkfDM",
  "key16": "67NiWyCEFTHRCE1HpQzhKW1GCAcDxuATDzEugmdKR4uSkQfmfxD3jgSBsHXUMwdF6xARVtSXrJsmx9JWDYXPd5Rm",
  "key17": "4LgFBDrRZRWf54BNk6fsrWq1shshkNNVNhgQFz6hu7m3tGTbGq9T9w2Wbm7H44qnxA15vV9MJ6HCsAr2krYCkt1q",
  "key18": "4rihJKthcALMYC6hHWsLqB7RbNtjc3h52E4FooCdWDdKoVu9tuGSci4a8rdSwnnzTtoEAYFHmLAK5TmNAf8sKkER",
  "key19": "BaQPwwQAKEu8HSVoskH6Kbp6KgpuhWkkGeQV7uT65oeSWPQhjXAdDnFZTdBfNQj1mH1AT2idjNsWhiPMRdLSFp9",
  "key20": "383vGA3kjeRiNCiiP6sTHR1QUrSXdaCX6LjNHqHPA9zDKupiC8GHLC996T2vp7t637bkU5uxtWgZBVv3i9drUFBu",
  "key21": "2RGpJTRLA4X5MCUvoVKfjUsbtffg3rQyK6JswqTE7FMThSFnVDHpX2yoC3dTFZzyDHd2r8hssJReddzQs4uJgWRi",
  "key22": "4Em4VuE7rTVyrnxAtT9TbCo85Wkzr3orZWhSenYbQoo3s8tqypawsiX9nUkV17vmiTDYJQAfsqJpr3Ys6daXV4MK",
  "key23": "54aGJLhWiFRTdWUktmHxdAKA1jXjjRAs2M8i8ka9qacSsZcQ66DSfC9TBfSTTWy2PKHGaE5L3WD3td9NatoxMqYk",
  "key24": "2x5phhdCwtBVRHdr1GXTevcBE49vV43grgaKFdLbpY69evwUL52vVWjWSznGcNT2YtRgUhkU1XrfjcZHuWZhTDQg",
  "key25": "4YfMH2Bm8LTWb9mAhCByeU8qMUVFAwNePnasZeGU9WcweDp2CZuews1F1egmtaHfUwfr6Eh1v9UapUn1QTNJDyjz",
  "key26": "4uaGMUPigTCUubdK63vdzCbnkbZmgR6J1RzK4y9FTheYZt6xPBoHRTCYJ3zkHr8bqKNut5NyTtsWenf9WVovtoKv",
  "key27": "57dabBboq4qRVZd6zMEnESxGvu17QsxiLgAC3LetdndMYcBEh9LDdq3rZUXGYNX2RSfj5SwfH2DQXFTrc9vfp7aW"
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
