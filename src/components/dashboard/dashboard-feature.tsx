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
    "5bgB5NwYih5S7CHtmNHLYWLMfxbkZeGdUfeodHQBhYFduCYCiWiqS65YJPYTEwst9merCBEfyBdurnoieWHMmx8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EskWSFFyKg81CRWKDpTYs2Lmq1mVf2HsJBTZE5mqjxaZyJqdWLhf3Ra2adGs5gALps9aVBS4JqtjNdU5iMiwirp",
  "key1": "meqx6VdMxmbRDqFXqZbct4bAUA2KeyZeQfidWyPHZ1f2TfWArKzfGkyV2gQdfgg9Meezz3LT4tkDToMaNTwGBbb",
  "key2": "2FaqTpKyGVdk5npwbBcoQmKAFVgZhLZStrSYEkGyi48q9eLxJD1UkhDrGbjT5arRDWxh3hhN2SgKpEyEJw6VG4z7",
  "key3": "4ZFtSo6m5wN5B12MH7agqyBLVeCVnzmnaDwjErXZv1jNWvsbudisaBeaapbwjcMEBgcYY6N1tmv7VaHPHUGV6iK",
  "key4": "2uu69qNyV9nxykhi4bidWtajgRnEUwok38XjjVgTFxk7ADzN9qjwHJjKtp4CiLdT7dscnHPnc1EfJ2joADfudFkV",
  "key5": "41KbknM7yJTobU2k45TsWJzgT7kvq4TtQXMzpnFB9YCAC1Teu6q3SMzfZwGEQvKYjTqWxfBPF4Jxe6CVqyzQvayi",
  "key6": "5Ei8ZfxppdTZaYWr3RCGJKzL1Dw6deGL9RaEkop5KRZ8DhqVddB14pGKcVaUzEmi3kNKjZx5FNxwSLpXir2WWUTw",
  "key7": "5JhGAzABns9h8TpRDqmXEHxzgF6cRTPLLdfxzRT4aBSgj64YMAAYVoGA9SoKEsUdbV2Ukb2pw7rT2f8bAXCyTyYo",
  "key8": "4kKgENYv2KjtvZZFyYivWFPAmTejiUm9ZRrakTm6cR7T3u7jBf2XxVDWzwPHkcshUQb6xTyZWvAZarnNtRYjDAXK",
  "key9": "5RS37HL4zqsWRdgSU32VTaEg4cmFMufZgr9S7NYuBzQARnsyigzy4Pjv73jXdAGMGEdiX2Epomqu5jk5yftqioWv",
  "key10": "23T2fVgknBBoMfUP8i5pA87FcteBTiUCuu7DrR57jhcDXTuzVWiru4SZEBR1EcEiZmX9AfEwyp6XosxH1JVw11gM",
  "key11": "3dR8rjSkHDH7zBYGAo7uiw8vKtqASNDJeNbuaUrZi1gbBphnYq8mTitH4NYNXcAGNKALirXLJbmjbA6NKnmZbEHC",
  "key12": "4TgEejS43Cp16Q6gGEcJgdm8Vdb9dzVXcjtVE39EVjLVsi75nd6smWTXPsE9sWS9qtG24hRW2m5geU38GyPT1BAC",
  "key13": "41VscAJp38vsFvWkAhXtnFWJTrLHAtCuqgG7csdsSDLktJQbXj2kgCFVWn8kC79g1nKy15R9jAoGcERFUbLNYEpS",
  "key14": "3xqXes2p5WoVJAu2ApaGr63hn5RAqwexK2PGa71juaisixMwoAb63E28w5azV88yEGTbpuf6Krm2L2u7t2P6UWTX",
  "key15": "XYDWUgoQKj7xEMn5RmgLaGtWyu4qXnRVJW9kpcS3mmsPqk4jJDE15nMpPry5PBsu8YXWH3vqXT72tb2FqgauA8Z",
  "key16": "gLB9FqL9umxdQ6aeMonsCMrkZdvsu9xYEbkm6kStsYCnfUwZ5Dxcnc1UwZ5B9LXW1EMqtE2APFA41sZR2v4XMEd",
  "key17": "5GejCBBYgBGTq2QbKzdFWCUx1q2dLvdU1i9geY3u2myHLBgitrFRdPAiTYKLhdaVLVkzUmeZSpog5jjYChbtfnAY",
  "key18": "2fQXQWsDdYHNTGFAvN7UgcQBXCRzeAP9ZqkX7i6RDvfqktDg1ZcVrn3R365SFituTZZyMpjytQfrCB4pCeNdhAni",
  "key19": "5oykJuYMDuEugkWQF2BRtQMTFHUTar182SiUeeLSbcJz9dh6ASEgZBXWeD18NaG5qUeCVYUdk9CR9b4Pi8spPU5Q",
  "key20": "C3RjER9Dnrg7JLPYmnmqYKU8oghgZA4JsFPZRsPtQmpz5oGXc2FLfrZTVEU7fgdpsVnCr4F1APftyvddm26BFwm",
  "key21": "4KmWHoonbUEqcE6BRRbkHBkfAYjadLmaGL2tUjf8S3R3fyifznSV9eHC6xA1WbArQMLr8uQuJZ5yUUHWg3PHFD2z",
  "key22": "4zenqp6yaGfuyhFAkjorJ1GQdagzGyDdqhwBBFvJK35RZQAbF83xxHvBDhsAs7z2w8ztgQngngnykoazvMRhtYKx",
  "key23": "CHuGJ63KPMFhvZHjbbFdZrwvY4y2KFUByd9oq9BvPjN8iDHymSCSYRkGMGp72iX4PPCAfrSpx6bcwuTjKZBkgvs",
  "key24": "5Ba83Y3o7coVNSAgRVVjrnosTsGxaiWBQ8pxBUVpuLY8wnNLf49ouXb3mAEoydmVTDQfjqRBwguTFJStj4t2YuYr",
  "key25": "5QFSjg6pPU1zymYjRe3UQL5N9iFi4BybBvoPS64XFec4BJDQmskpUteWLbCDAjhBFLpsdeUgBrDNFseB8bfSdmY5",
  "key26": "2KDe4GAVDtrm74pAZHNEiejrpf5665pqJmA2QrK5tcjE8xCPtPq1u7q9bhFeDnputCUNd68dQ1A4V9t2zT4pyrYA",
  "key27": "23kqjifRZW2Bs94ufZH6L9QiJSV7vBF3UA7odPxv1evKEDxVUFE5TnKnEubJAYvxRFivNW4j5TXqHR3NcRv3Eiy3",
  "key28": "2bqEk6z8B7amYAaQJivyanXzrW7TH4iQeXQZTSPyozZ1bzUzmx3kMZXDiqaRwqqmwSSvXjx2fagv4xBQqgwfBpr6",
  "key29": "4nL7LXECEsXpxVBdKcKnDhHshfVCzxF79B7z5FQBGoJYmGV9T96Q2M1K2FsK3FqgWsDPmjrf7gKRtUtqPAzAEx9L",
  "key30": "61NBE2kAxXeXsTgBfQbBWxMcLrRKLskXAp61d2dLyKQCcZXWYfQDyoQGmqLieUgzPpmSCq3gny8XbwLYZKemqQMF",
  "key31": "2NS4AB5XJhPHcnLGLzDfPWt9rnNFQZFeGpuAhfmVthSq55bfqwvW3x19UmGQHoP4pZMY8tRVZY74wRfc9kpE9aWW",
  "key32": "3EH2KXVoiCwo8r21g63HrhoRHp3JusFtmYf6yXr7BZFVPhrhcZ7U6A8jBCTTLSJSPHDhAy3ftFNM5mqZxcVPL8sR"
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
