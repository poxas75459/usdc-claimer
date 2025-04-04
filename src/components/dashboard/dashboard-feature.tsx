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
    "Bt9dmcNMxNryTtazerURzFYU3Pojyq2nyQFaBsXDURGtkxtbWE3wgybV3vE5uQcrh8tNN4kkSJ1ndnVJva7KLmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ywki6ThjX48RVBoVGKTec3gAbD8oBiSbJHQYGdnb4Kv8vf16TXYLZjZLxG9gimviinUtKZamP25CxZYALyrht7",
  "key1": "39iKATBEYSwYCTiQViMfEiik89nEipktTsiTzEmZT5QACTJCxpqQFKyMvFZBCaJiYpbobz3T9Xvuva6SWKnPPem9",
  "key2": "2afNpv93wLuum8fppXjqyXXggMyn5Ed87WTo8dcn9P1nxfjnUsv7V3muGm7kBEBUqGGSnwVZ4eY4DvAgDtZAtY1q",
  "key3": "5oF8toPyvzvBv3bCH3nCoGq7G8XTCZQLc6cGGw8GXbXb9phNNukXmfLi5ph3k1SnPZq7mnYoCybepawknKSkDgs4",
  "key4": "518RFBVhzgFgrTTAcaPsAwcfyCW46hkY5Sdcor7NCduiKAnbmnoSKy79kyCUBVMTySJJ6zxDmtHsfBXyK5KNPiQw",
  "key5": "648iJwQdbb5fMymTBrLiRStzdZtA7F73EYGenWckLQez6fLZK2xTTV3feBVnZMYBvGfb9qvGBfXCWr6iTR6UFUnj",
  "key6": "2buBjsbRLwyqCvGceftvdwYTpBw5zxUubqfwNXWgEb9Y6hrGWdXHkWpsQWz3YdWnUdKYLNWDZ5PRjajp2rnxA7FR",
  "key7": "4AjgZWgCRxHwfZpsJxMG2y5FHfQG2KRRMttKMMY6rmWHt4MJkbf8PNicrkVwfDM9dzPVgNhkPCHtgtfkXSfAc888",
  "key8": "9ep7x74MRef5DYHGVPbZ1kzKSYPKUnbxeSkXwMg8N8bPfR8kNCJrmmGp3JYeQSfYMjaBUtSGejNHM6WUcHLp3a8",
  "key9": "2D9MKATVqKPb9zQnEaD25S2kuT8Yc2CkK1Emcoj1iRbnVeKjyxGCuREUTYxmwHgf2ywQN8s9KiVcevog6MPWTsvS",
  "key10": "3zhuN1iWxmS2W1GiRfooPvefyM9js4Z32kvb76fLcBPU4B6xkG5KJvxgt4cPLox4BgTvYG77yH4hpWhVMSN2akd7",
  "key11": "5cPF4upJdTEF9yHVUyphsBNNL4hbJ9abBRGQDSrQnzEatiyKrF25yiQKQ21Nv5B93MFEFewTpccP6GuD7EdYuk7E",
  "key12": "3cKhTYbWEQjbyrMxq38DuVqtHNTrSQMmJv7jKPAd887o8vFsnBg3H5hpoBTxDJ3oGaUv8Q8F8efFfvsyJueHdRHk",
  "key13": "LBt6m5qkzG58sQhGU8fx16y3Um42oRRMoTRVjtTA7yTJ9ZMuRobsjz9LndTW3dqCT4zPRCFABBnyBvuDyAqzx85",
  "key14": "Q6df29pNHuuE9z5Lgy5TGbGpXjyp7Jb9ryHgH9gbRZQGwWTV1YcuDQNp5FrLrifkJGYSEhpobGe3mGErwgGrVhb",
  "key15": "3uVJYjGQRPmnFUrsfnYP3ae9Csuyza91mdebEYVsfU8pQVEB7FoHbuWwsTfKyjxioJofFCeoyUE2CsTzg7Ksz9oB",
  "key16": "3rTxZgqJRUbhPgRB2Ph9vG1TzjLLca6zEkFTqxhAPBtScTYWsd9XwCPvQsArjLgkfUjZ2L3axS58xjHfK9W4fu3E",
  "key17": "4wMN7t3vyuFns5qAjFEDczDFa3PgMeTEM1i4qGYAcrcfMkYUst59DwQvjjvnvZHP1GqxWvX9Mj9woWa29w6RMi8e",
  "key18": "4thBCCjibTnnSXgSJFj4fcpQu41fbxoch4qqXv7GDauLJQPcbm7tbTkbr2kg2tvhQicDPwvEXTeXDCDkeRbB5ARD",
  "key19": "23aqvmYaX58iW8eyW2Xp72UdCJiSGqaZX5PshCf848xw1Hmf1qzAniEfc1V4Mi9di15UYgFGQiSuT3VC4p71psYm",
  "key20": "39XbqtZcUKr78u8SbYUiaV9deVxuqrw5bqUSgTFESroLMRpdJBfyNSwh3CMGF91ZcLfQg98w4Yec8mmWe7MMZ925",
  "key21": "4Hjgzs6Ys4yfn2RVou2eXR8gnNiPcRmTb1PQmLxTTN9gZfjU17wFgxJuSRyTk72rBJTbT6oceDebBC5RjgJ6dU4J",
  "key22": "4m1qNrYtrh7yt39CCPBLt95nYUuxsNRqTDdpcYfAL7yPK6tL2jXNkwdkX9PV7XA4zyTnA3rjhYcqPmNYJikwxzod",
  "key23": "ejDkfzH5u5MAdKVi6WDGmhoCDYEkbnU8FhtPgpmf8AM4jh1x5DWYynQ775zXs8iP5Swehm8kTWatHf7hScxtT49",
  "key24": "3iFc2PEW4TAWsvXK6tkhNysT2YvnUqxsG6czFFDs2tvE2TeRMSuomuH1Y2t6JP1nZARbbKhAqsxoS9Dj9dwwA1jf",
  "key25": "3pkHMYeeEeUBoUnsq65nynfaPG76PRuEUB7VYA862xYU73HdHjhq2QkZYv8QVTvYRKvbjUpwCpYnNQv7JaUY7Lzd",
  "key26": "5yACQBsdG3f88jf7dZcCFXCu1SDhSJ6mPLVN1AjEPLAM5ucAWmNGBZRc1rP4na7H8xAjqjSrQp5UDbiCAaszwa2R",
  "key27": "4mSmA749FXQ9Jm3B8576Goa8XuRHaW2cH4hZ1de4gDzkbwhEXBvEtPGV3DGK7LRwjo773Hhn61KK6EUBbP2yU1nc",
  "key28": "yMAsyLDFcBTvJ3cwyDWV7kRXMyJF3Yv1wUpKYpvwNqdnDp9G3HzVQ31yxC5hxqCUgi6pRSSNnojgqXkEa7cf1iF",
  "key29": "2B87FdDbVkE2uSeWDvwhe46UxEhXyuQUHCBQUmW8MMd3wQdNt2unB7yee9eCD31GuJfHUEZ4C7evpedtk3hyFo6i",
  "key30": "2WZos7SHrmEPF4gdQ99bMfiKsxgvtzvcPaxJzKax4LDm1WPgwpieCT1zMbKkKDQctaNKnKrajNmJPDnqnnbwpCPY",
  "key31": "GGYhiH7mz3yQjzfSz4jhnkoQhLuKuvA6zq7i1U1CVSg7hpGyD9cPkqm2sPCvqs3kdRyfG8oQ9DFEW5ns2StraVM",
  "key32": "2iBfaPjsuY6RPwrZgzqyGLVvkYrBHgj3rPP6jwgwtHekUGCVYqnbxThzqCM8xgEVofqA7sWi6bzSJZT2u5QnmNgP"
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
