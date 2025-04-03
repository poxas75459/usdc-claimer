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
    "5Yhi4zikwjkyjhMCxv5f5U1AL2BAN6v9TVfUYUrZoFVADpijtDhz1Xt1mP9sjjE3ZRq4DKSwAv1uFL6AtzrC98Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTomx327r16e6vecrC6n9ANRjGuU1F6yuWtzTGdtZdda36HHPwUEqiiWqS4RTdS3fGLN6EhryvHaBRqjjNtxk9R",
  "key1": "5cvbp87mCRV35PLYKAJ9UB9f7imb3UiqzAiQNWbxLffo9ptt9HnFrFqyYByU7zdKz1BzxqZ6o5ymMryTXqfbdQ7d",
  "key2": "5Gbj3BqdEJ7PQrtWiFu48nBvVzXqYGdTa7a63GuXtmkoV1s3iEB8zedppMUh24LRgY3yZrMtnaKufiPA5XhaMrL2",
  "key3": "4wxKcHtJHk7LnZhbdEBNrnfTeU9prSLNUKqVLQKvzyex9Ka8H3ktBzdRUSuMzhkQwFd6F4V3C8AwPvULJfpz2Jef",
  "key4": "iKurt35QrSqGNJtAne2ep4akaov3bJ3vS5v4YhDMNfm4U4mcqXqA88EQHntgeAn9hPt5awUPiYv81wx2vKnwhBy",
  "key5": "5FcgUfAYLj3T5jATtT9JFYXKgddhGQdJEQqenxecHmiotoLVd7Nhuw9RJ2FrncivqL7mhH9VbQEjUKZXgHv8TVZp",
  "key6": "4zHunZGHYJud6tLtGAKXh6ZiQ1MYzaMtmZhPCtBqiy6PX6Dvnovh31mvKSk1JqeisDKyLw2MAjA4vieyrRX83s82",
  "key7": "52Zano7eHMEcU73tTgJBoTP23ukmhSFkAStfA15mjXfPPfWU9QCoCjRJQ4iaCJiRdFAgnfpRYyzxjuPAw5aZACvd",
  "key8": "4oJJXqAMs59CbDDhYRvF6XRfv6pcEB3S292ZNybjY8jdGbDog3Jmo5XDTkHsghp6Z8qRakHLBzUSGaXo3JYAruno",
  "key9": "3gyH9iazdu4r52toSwojSX1hNwoVfCtsmYeCL55btMad39Qvk2X378KyjU7oBLni7GHXHbiYnPvKvKR39nZVf9LR",
  "key10": "4ZVxrRhCFhvoEE5SUTAtru1NmzYRTnbS7y6aGbCknKsvGqkb3Ui5ZtiaLKAwwsQR2Gy69iUXfEeJuQMKWeTF22t",
  "key11": "4NPaJrpaSAo8ehdUeaZZeoZWYEPeGXpBkJoNngGWrAXZfKafPawYif7kSiEori8qhe9K4JQmzkiXKmG3GyChVgVU",
  "key12": "5ZPmiwT7D6jS7bxXNNdDm9trR9aXWcQR64JLhebKKTb6qR5P5U5ufnm5VXUfBAXHsBZbFkWbuQv89HPCoWqHzWF7",
  "key13": "5KefPUWJEKPRF3rwEH2QDcwfgfGEqC2qFp15Z165LKSMBPg61ayAXhjcUmkXWwSNEjaqRMCLXSkP16sBoVQcnk8X",
  "key14": "3YYc2HevvRqPK9nnmkv1DTcjUHAiAijCMkAJNPoXi6GR6QjxZgSZTx9GVSR3xEaF5Mgb44ZXSPjNp3wm2jkfwqKR",
  "key15": "qtzkTRfhwN3a2e9qSEKagrDwC4wLc7x9g5VihMuN8MkbsHYnQJeezWGptximU5XnuGfBn3mq1vGUN5q1y9kRwX7",
  "key16": "4bujK8uQhAgmzmYg7uc3a74WHTbCQrzKMCk4DFTEbvUjcAyVibeFpv1511YNG7Z5TnbJwMPZzpajE8sLPXBvwSew",
  "key17": "3YKxwGZ7RigbtZZNuGDVjch3pMjv5TVpATpuDu28umfwsMGzgdPYLTCjVGHkLbpguGghABUqsNMC7Ck23vFV6urN",
  "key18": "3tEHhEMDXZcHhkBmU6xHCRhYv2ZfCtHeu4bDJ4YSGXSMsV9bCyKvQKAimuJ8AcSEAWektvEabTfP8GfEXnUSdfD3",
  "key19": "5itDtN9SBGmrmocLjKKdYwCECR3drPAke8FEh3ygjbp4v5r5KzhnYK4D7guEDwyYd6zNruAVxdgNhoVQYKrvdNqM",
  "key20": "2aRA1QaYvZEKafq4vxncj2BzhGdX8hKKdFNiMgx1ANTZ5jhmxf1aUDFZdbTp8oSxqcQc76aSpZXnzuHJvJ2JpZob",
  "key21": "33jpGFjvUVxrmfkmJJwuwVxoGkQKgu3qW8QXeVPpqL4WfiEovHJioge4dKysEEkx9M4ADQ2LqRAZ1FtYVM3TH8jU",
  "key22": "4CSM7ERk9MWb7vDfhpE5U161HWitA43Fcw85iADFxMdjTpYQHsZ1T3RXWVoZ1oakbyi6sZzXFdtXszBCvwZkfhkH",
  "key23": "uVDtYhsBE7kUYhoJaPWF7uGUooP9q2JqhBGrUuqHvtXfK7SZSE4a3AFThD1w99i3H2WaLDRDND9jAVsgd6U75By",
  "key24": "5wZSnN151bJA6Mk9kYK3zq4CHUdqDqG1kPwQ5GK3C231wRk8RYzJMt3puPqikATZX1SjyAffK4udDif1MgAge8ms",
  "key25": "3yM8WzGiXvdDDuFjgwWH2HyAaLer5tZgTiX1ZiPx8JajkiT1swF3trpZFZdeeMiPZeAfMVdeRWQkMjqiVUQ8YZeL",
  "key26": "4wvnMKHYkA1zy7LS8QVLnUMpr2p9bEPbUuduWL2KzBMSbJUSCdQBCEb8HKBLuB9tMSifF5TRey42Wco7WHPp1VHs",
  "key27": "2RNga5vo1RAHgwxisLMVCqR5e9irHhMfbmwm6zP1neFnwpU4yucwnoDLEXFoh6yfHQzNsyKbfJ1nEfhwbPtf9rAy",
  "key28": "5SrDfWWNRZZMheAHtpQwzRRAzuGsERRToUEtuVaJ1FFUEjaipCBdwtmXBctYK7WUmYkBbofTHVzCZkHqWRMfSo82",
  "key29": "2UUJtNmKL3UHfzxtgopE2wp3Gau7wuQBD8iNgLkC6gVdT713RsUdmkwXEpapgnFWU4MhRjSQygZ2WDFqivdR2NoE",
  "key30": "fJCv3vDDgQMFM2DSJS1JuanBGTaXN7XVdoCubpY5xKR5vy1mqRRuao7hR5arjX11nVUZKsBvA9kZEjaqnci71qB",
  "key31": "2J4aivhrGDxy7Z2tiF8wjY2zsUR8r8x6bAAq9FQayeXw36Ww41FnLnRCrxhVCvP9ysZH3UScedi77T9TkUtgRovg",
  "key32": "32zNcvdhfiNQ3nNdR12z3k4AAvLx5zXXDPW7fVUFfUXF642LBC79g7jqPZyYFK9tnZ3gzbNC4JoGFYdFBTo4hgiM",
  "key33": "5aKhv2Cs1UQKRvZPaXaHnwGucCWpRa48j9JLbAs1aicQ6e35wHKGpcEjVQcvQ2udYWjTnQfie1rjVCud7fbyxgzW"
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
