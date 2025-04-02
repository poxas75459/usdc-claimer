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
    "4XM1yNLcJEprjWxoo6mDcST5NdEnDSiqxLHQpxpicj8E2KcZeifN5pqWzbQW2vBnumFXq5D3kx1YouuwdzDD2UEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yM2y43E8r4C3AtTkhNtg5qPtDiXNj3A2396rKq3mtKppEXxWxposJ3DJkx2pGwHYfvd4J5ERSd8qkQQuaFGPhDJ",
  "key1": "5ELsMY54nfKcKwP8cR5WQq5S4H1Dm1aW1NMijja4fYmWjwTaudQ7Gt9nxzmPKuT9rhcEiX5fAyTYUfDd1wTTwqBC",
  "key2": "5zcDKhEvYh4J7QnH1QJNrp95btiBJbunuBrmiSYfmdvuU8BCHsCvqPBtU8ZN92MJngQorQebYVvJYDAPdW9y5B3p",
  "key3": "Dfudc5vprhuDGdCyhnUk7qe28z6u33aYEHo6Q3dVyzK3k27djouR3QuWhBkXcq7oS2RLdyQ5hEFPi1AQcke2pPB",
  "key4": "2hKD2jskc3LAY9Wx1e4p8SEAtUPStnyM9skRbfoZShXXYtUKQwocWwX49AUio3CMMpUf6uEkdNKSQ2KEWwZNVqDP",
  "key5": "4d3KH84EYDAUWJngSQX3JyHUW8yLebbupap1eTKQnjBxYLeUMPKcE2Voe7WFZ3n4zUatdCvqptW8hr1GZSh2ieVE",
  "key6": "2uZfyugDXecSUUVmgWrbDFoc3Ku3pFwtUDaWPHuAnwy16akPCE8RiR9bpdQ4Ke3BuXmZGDzqWx35jU6PQbTLFhvR",
  "key7": "4RaPA4yxYtXHQDrqgwPXreszXy9RnXGSjd7PihiUP6TivWAiKQoRThQ5HrAJg4aB4rRMKKFC2LR4NABFTifNghJn",
  "key8": "2SSqDS9zNr8GXKT1cBmq7b7is8kGrSaZGGvDbbrV6TuwobsPn35vrnyGKTbWtxkQPo6f3XLMpCZqBvizg8A7oGMi",
  "key9": "5QhUdkPA3GxLwi8YQw5r6K1dxKBAdQar1C8zZDv8yUYpsd8Qgbs9RYZd8bMvam2ia2NAwwMWivMPXUcAtU74MCHn",
  "key10": "5tE4duJJtWhmmrM9jEZmGFuyki22PkFmHk9HRJnSku5PqK5WGuDNH5xLpJdkKix6it1mK2woZhXza3vydYxWodfF",
  "key11": "2sx9koNwm2V4uBvhinDnppZH46S4yChTQZpDGNHHRcEdKs5NgNF9mxaQvCSc3Yfang7zPgKG5ojpcMyDfGV5E9MB",
  "key12": "61VjugaZ77uwQhPN2i3Rb93QREaPoScGgerUgf1UruhQUbAUPKn7fGBCikc11C2P5GudCVq4zRACijRZ1qYKAhGp",
  "key13": "37tqLQMsGNAz6fat1pqKUVwNUypXNm8Ky1HjsXTkj9KepLdp3zURApWtKvHDhth3QJ3Cqhej2D21VuEq5dTi9vvP",
  "key14": "3t3qgvMFZJS9f5ttndkWA2rnNXZ3NND7WWeDhQC6zT5RWrSqVeLvpfFinpoDGqhpmhJDtrxbjR3g4wSaH82xE98z",
  "key15": "LRWXyYVBjnJYt5bUmFFweJpKPFNK7HjE8hSHwZya6i8YbgaV9VfYzKgYecLt1xAL5NpdLTmFVqFvSAV27y2spzy",
  "key16": "5po3wtq6KFKfHzp9yP2x1BzyD1B9zXEiAwZhGjhNBMGEXPMWKfLLpdbXQ1hFhcMcbt3RrtXs7aVeHDwTeb4CB3v5",
  "key17": "5EqcyeGLKTgsCfZRr9TZgyQgqJA8VUmKFJVnJqE6MRZ9Lgv2wh64KYGP75siMn83H8wFWSb62eKig8Wvz5RVJZ8i",
  "key18": "5HYCWWUzHVXYr3Lf3K8bJost3YmEYZLv4gHcZ2d6rS1TsuSkyYN1XbSuCJyKgxoBJL1WyynHiK2XM4RY8eMzHZuh",
  "key19": "3o41Cz89hvCizDpJkpBSEMCABXaiGtyXyAxgWTZQVcTAA6xQ5FvZvg8stzRsHhV5jJxAD5qcdcEUpWKdGeLYFzgd",
  "key20": "3KA1oE7E4xYhJ1DfCjApuGtQRgYagqi5ohJb5zLutE1a7Yijy8WhBGcimgYQYLsU2AZTwW6EgHGnEt6y9b9Mc7zZ",
  "key21": "5H12P6ELPq683fZ8tJZ3y3SfQxjEWA3nR3FgACjrix7wCFQsD5BR6dsQTT2VUNTxwfzV46xgYt51o6GegjHz22ZC",
  "key22": "5xRToVct8kiSGAeDsbvqPuLmh7p7PFMf2YVmUTEWLL6pDwGqoufz5wwDzuJATYKoRgvswD5ANK2GJjhij2fyv7TZ",
  "key23": "3ZR53D6uy9JXeQk8mcW5bCFCYVDS1sVBp3j7mYfJJjyurwLczV1Cq9qtQbQ6238ohUPbx7rVsstXQsdSNbzJE4Vj",
  "key24": "21jo24YADeYa8HtUMpQZRBu4nDsRpxmyzWGuhYUbT9D7w5qnnAVPckZ7dcWiZ7i9FAPPkfXmmRaJBfNALccKAdqK",
  "key25": "5wZR2v9GpVYMuBzffb2DZGrpMLs2LekTdjkNYBvjJxjp8cMDBCNveo2G8G1t4D7XjDm4mL6sfWsaNoSNh9yJAhzc",
  "key26": "4psriprg9o8KFZznhR7yo7v3QAV72pui2QnS6jnuRz8ZFckXX2ZzeCfkQ7hcQ7xNi99DD3bLVii1bGiqDaV8G7z7",
  "key27": "4MSxZw1os6V2MDfuUxiWW4oFAhrffxuK8JvQhPDxyGtVopnJF4N87GD6KFV3E9EKk7muHvXFLNhNREvbgLw885mi",
  "key28": "w8w7fX2ELBD31UJpib4tizVaVG73Nih8ACBJ9jbFWYjBfsWrU8FjTEzY3wnPQ2DjXb8AqKiSTcKb1dpb9QBvF2x",
  "key29": "4YPj7pHrvtVpqXo73md62784GUUrxJ4JupM4QhbBf9ErRae9toYAQu8rGQ3ggziHMBqX7SYbQGc5TeBrqJEqTMxa",
  "key30": "5NGX2zceJWGzdHeAi5iCodh3XeSRdoHk7eBVdDfKdDx9HtfYiQdr3Q3sJNvy5mUc1iyi43U2gCfP4VH6CzvWJXmc",
  "key31": "4VbUQmMwVYZkqC5yZsHKcA4cztkH5eQBq4gTtihFQMvGVHSY1scDEgtZXzJG588APfozjpZuxfz9owYEzJLbj5gM",
  "key32": "2PEjW4TvDNS5XyBxWUukDgfuaoqoCtQmDePuk9YZR9mpNUinjH2hnqnZyKtY6WXqShgt1ZpCG778Mvp4sxnNsAz3",
  "key33": "2MEjqnZCP4DXQuPMWzEHHypZTUmfUh3Nv1eXHmXrHAit8DDryoH2wq9hX8moEgNZkhoeDCnEeQvcgUhZ1izAkVJu",
  "key34": "uiMczYLiP9AJd59JYhqvjghWudY8Y32t4QHZf6sGbQ1fpNVdA4AcNu2FMZwiLDaYPyjBypSpx78YdSKviowaHc3",
  "key35": "2FLAxEnk7HfHd2Jc3fufTUaz5BBo8RwEua1NVeFvScsQF64dqJQRRHbBEbMBgsUKwMj76xWUxHgWFVqqFp8NqpCX",
  "key36": "4e6ArhqJ93nYWm4A2oQmRCr1oq1UqeCbZJzbYC3om5ozBp4zkXBswgZDsbuD8WHKMjKxPX8Q1F74qAxF3Aq9US8w",
  "key37": "aJzViS3uY44LCzbqTNyCMUxVCvfGC6mVkALoMVtKfhu5i2dyprARzgYc2n3vzxSUvZJjyzTD3iPXabswqLKevt2",
  "key38": "4qPNhKNTrLxAmoyP3NQkg7eB6WiALdb5YGJpnaU5pPeMTJ9KBJTQv2JJ4jLVzcmv3uwq3dvVdD925fFXf81JNeTm",
  "key39": "2e9CWRk7ETyfv6bPLJBx1wmGEVgjoE1NwMHZmd5teMyj6Pggxr81KBXHESkYNNqgF74Cpnuy9U3tttazuFPRrTyj",
  "key40": "5D91Xb1tDevSrFLJHEwxnxZRoiGvXqC4ZiQszsWxqm2PxT7gBKBWx689saPLVJY5SgYfXkEtLWdsawDyisbueVoU",
  "key41": "3tGznLLbgaLAQBcWkm4arAkTTwHXTvZjQV5BuEj9ao7hxyCZ4QS1wZr2cCVHq8pC1ydSV4uCRUNseKpzSVe6tzhV",
  "key42": "2LeEvjpmsJYRdag63gDKSrT5eHCfQVFnGPGeYDPupiRt5BJ9av3TYKBh2dCkGjqYe2834Hw95r8PH1CsHhPvF3jm",
  "key43": "4ui5aCw43m8xPd19fVvQjXrnuZx65ryBMWWsMvhoQqsYPyEGr4TyUWicP3UrQ7xRrCBzazdyqbczitkYR3rxhrCM",
  "key44": "2HzLk1zhwH5qqZvmAYSzgNBscJVCPdEVpUnU8iD7eA7AR9PMrXJAbHbjL8VLtY5xSneu2scQ1ZenLNkP6c8uLUd3",
  "key45": "64Huhy55GR1nJYKxfRbchzSovQ1VRoFSjBDGS1duArALhgHuYjbPtSRQqFf7byAJrYBBfY1b81JhAsowQ6FMLjkQ",
  "key46": "31qEarDZVtW8TLaqYYLnXXy1PR3v6iLxWY1usGZXvqCHdxomUULxkqcB2nkHk62PHb487qUJvsRkGtJHYRpDjizK",
  "key47": "4Y8HgUrjq2jyt5EseQKjcU9YuqueQB64t6z6vh8w1AQrTxaiMP5L5us6vbrY3kHKYVHZK6oT9g3UGv1c2aVajr1B",
  "key48": "4GnSijNp9pw9GovD7abAD8s61X39CDxx1e1MrB9hWo32voP9KhkyQEqo5mKgMqbANrQMBgbmKUEA3YyeYGiYgo3f"
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
