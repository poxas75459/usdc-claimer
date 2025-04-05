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
    "2XFhMKMYUvr7RNiTZP4viV8aU96Cs268E8kTfTi3wwKWKsFHqfyp3pwJvWApw4E1yeALM4WA7S2przuCPfbazfqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ah7mv7Bmq9agFZpkwmxujWGusTwxtwjkvnqvw95w4taJL2YSQQA1QXXFGp93ic2r8kUELZhSEL3LZbGKUN4Vc4d",
  "key1": "2NUGHWqYVJWYqhFyNo1A2RgcHGVkAaP8dbHBAecdzxF86FXkcE4AZFx9GkoGeuCaFgUKN8ScasRrRP9LaAbsM2kZ",
  "key2": "5xqFvvA45L5yc4fQzGY2MSzve6dixJFxGtom6nEsxVqGps3ZdtrtNr1L1fLYh7eRjueWvJ81TeWGMBTfF6PiJbQU",
  "key3": "5w948cEJ1D9PE8hcKYg6rbZUAjrXD3bRdftKbqx1JnUweREXk6K8UGdjD3awQ6E1hJ62SNdJXrZtBhLBEDKwZ75W",
  "key4": "zpNWFziuzaYaYhNkRDMKcQycAAtCR1gMNRLpBkQ5hGAa8y7BN7NaDLRtX79t2WCNBiZ8swWP4kwGJSiJ2nAaUVe",
  "key5": "Wmo7gGjktggJCZFbRiPt2XbLzgRYWPYvwSFL8Q2dZ9ebmr8skGFDwP7q3pzDVwyRZ94vujSKQuS5pTHQQW887fS",
  "key6": "UeMHnke8ecSFEdPkzDHnCUDwkZadVqXdbJEKnfocYSz4zQH7SqsN5qSpFjYvuvGYDVLXuCEMzwqw3pPqauuMpFW",
  "key7": "22GvT5VVCTMebn98naWqsZkWNqdkc9LHJQKQCWVDd2Jb59m3hm9Nw26TnmPrSvFZvEGvosaiY6Zjf89qz5YM72cJ",
  "key8": "24B7ZgX7qzjbuBAXompcRNesfZZYsHsK7XD4Pt9a9NEmPkBVaKi8bRW6Yu74P51Yq3GcqDfmmpxtBxq8gCpasjUh",
  "key9": "4QR3cEmLG1x2LJV1gUvjN7amCGu5nAApFgeAXfkbmbn6uN56W1Exn4Gt9qWCkt9DtsNU8Egg8gCgDmczCpmDPKNf",
  "key10": "4X3Z3rv3EZEkxK8sqcqs3rq2VmPzN8L8Zt22JCJpWEwXX82tWP67KkAjNXyHVGgVAgfBjqLpoGatehjXe24JC9sf",
  "key11": "RRiFAsYKqXVM1oSY52KFfG3b5QMRFLpj85AmaQ2UGyGr5mZet3XNBLS5KpYTGiExQqiwAN7gngAu4jLUTkpGHxX",
  "key12": "VaV1Ap63Z2gdCqy5gh2Y1RvxmxVxrcCMtX6yPV2mX3ciZx3dvihsnTf771TJ284aigwdrGGQPdzddki7wjPo1Pa",
  "key13": "3sZfokFquYFyjtcgn84hMKiMtuyf1sp3kUQy8ugciUKnfuPbm8DTsWKF66xBbpqUZcvKDJty1JHAw3KncUMHv47x",
  "key14": "129eac6YxksyBa1oJ9Yw9K5nf5QXvHmUbp5Xg8tH97fcr9Ak9MHE2hn1q3SyCa23323CaEFCaufAMPuxCx3oYDRB",
  "key15": "4jCzaKD81ZnHZjKXNrwuF4jmNKo4geJbx6pzGruc7mKKvoLFD4zJJ4mLVPerPgyFs3tCtMtPEo1J8TKqFXjUskdM",
  "key16": "2DaPz3dxonUvrXsESpH787PsG8UGdep6HKvN2RtGhSF4aVibfHS3HZSD4p2TYv6ZC9GjadSs7LhcqvoGyn1TZsU9",
  "key17": "8oXGnH4CEt3nfquaBUe5FaFQMXsc5STmyypic4kXAvrC6VWUuSt9XCU5UrNngCfGkaR49DmmFB2A6iKxzHqHREv",
  "key18": "CchsCu5VVeEXYJ77knuezUQfvBebzDaWvQDoyujLeBzYErtD32QQftyMUHkVNLjD8djr2QnqhTGT5XMj8tDkfdt",
  "key19": "2FsnDpM5RV7J7gHzUx5usWzfdxvM6SSwh1EbNUQF8z8m3pN52gtoETHKjtrrcKh7DHtvw7sJFHhwiwa94ipE9PjT",
  "key20": "5A4AUXMxAmvVz3s2rqcLRFzaSzxjJffnbY6gr9rTbfXRSyVBBQVAfrrB3hfoD7RYgzKxVDxsHKhH6hnvd9t4XNxz",
  "key21": "5zumqQCbzFjxaQHQ7DQvvufSMEWoG6A7nkz4maB4TRh8J3dF9N4hMM2zjSoGEvETj8yUKG9pHsDaZRNcVQuA8hte",
  "key22": "5botdMWaajh4q4ayYF9bb7PwWaaCk94NnJ7VaiEKNWDzVRYU5kMtwhXViZ5QdCLEbg4TZPjCd1ckK8JLbv1eQ5BX",
  "key23": "4FCvFCP1h5WDa7utk3NWkTokZcBL7s41FDaA4oTrvRcGkaZbx9RYHLGZcbfRQrqUVLPaXAgzDDd4gE4XNygmmiNQ",
  "key24": "K5Qq81MVxzqec5xppNWC2gh2Bf8Jc4BSKzBFpxuFt8cHDyrdk2rXHuXqpbnSDCDWePfPhFh2LbXeKuT2qJDtoQN",
  "key25": "Qn9Ercn82ez4XT4HcHgABRZXtNj55nJrM2H8DPLoE5YVHcm8dWsc3jWNyf8qEZvyxF8gYYsWRc35Lt6B1RdfzVt",
  "key26": "Z8dpTbaHFaAju3NdZLJ65gxyEKrcFmgUinfq9HaPt38jCCMJnaxf2QYk1AUVrTAZjZzhZt13hMfiC9Q9d4dE1Zg",
  "key27": "3uArGqCUH4mFpbxF7ntBacxGCd76qQYUB1N6iDZ7wb1RFqsBtmi3Rhvq5M29T4zapTUznfosAkg4wiUuaZcfV14B",
  "key28": "xRfaBkb7vmq2yHgZVJMFxbMCP5Ka7RhxtzJv6hyzDY8Gjc7EyURcAPC1qSsGyD3j2r5z63Qhjc1nWNqaNqKrFof"
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
