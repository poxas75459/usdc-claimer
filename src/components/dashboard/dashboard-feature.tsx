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
    "2MyaRbsNp5cUwz8gawMD24sTa7nwuamfFVt7QKqYG45yNdeVe8jZhPdwDt97Aw558iLYTA1wSmZTosTP5CG49mVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibisKrC1ei9RzTLxieenoLbK3PuKJFJadCLoXpHjyfDeWbYgUnfNavk52fnitvU6hdRkjLbUnnF8a845mxyTFog",
  "key1": "5bRntRTN826S2UxHcUh38FSTAGXC5LVhTCiLccGsUwQFG1YiKe2mSd4xtZQ9aG4D8uetpEz3ngahyG8gNuyJ8gYc",
  "key2": "2sQjBYYAJjpPKU1AFJtseagvJi59bBcGLXEv8VcUucTWVi2FakSZXH4ZgdphQujH4jADyeK7ts3N35bjwZjW64gq",
  "key3": "3s3Dt9TAq7turarB54DMZkMYKdVWUTy91H6pSjv7zffR9LroQt5hiLYrk1UqLyFbMTRau1w8Ddd3S7HBz4xogjnG",
  "key4": "5ebsyPUBFUrWZuFsE7u9EP32t5YWqj9fC491xPXQ6B41myztsBsanoL9TjkvcWtyfxtDjzGjPGUTP66FTUdF9Kuj",
  "key5": "TbJvv2UpTfErxnq5CLphZrWenKaZTfDhexFAqTXWNKhXQwbLh3gw79xzxd29emyrgzwHPC4YJs1MmHqTnJaeXde",
  "key6": "2sDJP58MJh72arsSwrH4nY2FT9cBXvzNEqraxyCs4cnAyufBETTRn3439Xq9WRDy46AwkJmE2yb3PpWhuchwJb3G",
  "key7": "215KPYSPkCYjRbJ1kk4H8eZg9ouUQbc5QL18mMUq7acuzbDptwPdHAJBTGFBvSt2kAWUExvP8myzCrX4wda6Q74o",
  "key8": "Tx7Eag2wErVd2vBQWubHDqVFFkSscGbG7xh9KJAi885BN56PvKCc3E8VdUpBFreu3xkRhtphpAGjyitLMHFaT4H",
  "key9": "Jckf3YV1bEpBvTnFncrGELd6vYeWx4digv2PtmZtJEkkfunsXkoihbRU1m2TNNzQoR9iD3qfiLGVboyHwHCQh19",
  "key10": "4xoDeRQPEHuE88gCcwTvfGEj44fWxdN4a1drfxGGDJpqCoBRRuZu6Yn1wv8aMYonEZUgKghXaRWtHkn9V7ecwRh3",
  "key11": "S8FivejfyvzF2GFynvX8cT3gSo3iW9i5gyThMiBwH7kcKz1qQ2CFWidZgtUidt4xgzJPkWpPM551phHECxEsTAF",
  "key12": "2kKJMvnpBGSRD4VPjNb8yjVrnNVqASJSimNUWNCa7NkzP2Q7JHJvYpvf8EcEvQ3Gtpm9bU4L4JMEmnq3sVnBSJTZ",
  "key13": "SzjoioPgi6sSKBPGFh5qKWAh3WMyzcdyoB6AfMYqMvikne8eR2aMBnYABWc4qiK7PnNANHjywdhQ4JuKDZS8CEJ",
  "key14": "795awq956J1RAMXBZRoAdcRWQqvUhgSdorLbdxiq7F4TLjyYDJWggAPbgwyiVSqw5zBEW5UQnBUm4hnsF4gt2Zr",
  "key15": "7aNWFiEB6KGYNLVoQT2ciBSa64bsJLQWJJq34z63aKnNDd4tg7Hj46UaBo3KsSnNvHXskJCQVYKqVHQPhfxaEDL",
  "key16": "XSrjCYWSKLibUB2ZX6rw4xaa2Djy4ngSTGBSjyBmN71F9CBUro6b4RmuKxr2E2eFPogyvLyANL6b7rMnkpgPXhP",
  "key17": "5R2TepowiGRukMkuoLm38omR2mzhpUvsXwVK79aPiCEXNPtEKGrqnj19uVmd9P7R3c6z5g83HfnpKetcDDbopfZL",
  "key18": "4UJtXdd8mMVeFZtkU9G6nPZ62pzwtUGPbGj7UMD9oGgAsDfc124qMWZDtfC262kChNi7b6tRLVnohy2fnaBPHBdm",
  "key19": "4xJfereiSyCU9SksprPCW99b4VLM8Rhbfu8qRC7Rmmq1kzHrGMr4VPEdXWg3Qt1pbmr4DLwiMDA4ceWXsCEHSX8A",
  "key20": "5QmAex7dm5AE6xV9ob6PGefdioFp9dLk5KTVcWc33KknWcd4z4dySiXX3gitw8z5NosmSazxYie3vkfo4C1pUrCV",
  "key21": "5ARycScUxgMvU1EpGr3U28xtu6wWPgKiLgAdMjs4VB6QojBhr7c9zkoz6vbjgzhS27ePVv8v7o3CnRfK4mGi63pJ",
  "key22": "2e7w3GdoHh6zbGtRNBNGfUEY87YonYvbW2MoXU4NhgNHYkpPTh6N9C7qBE13dca5mVKZof5U1TRVXbwMC6xCnvCz",
  "key23": "2hVC4QzuhEndgMoJT6VTzurDpmhr8kLovTqDrAcGyp5Y7HAbcznbMVGSzpmccJxSc78yMRLPqSms77x7pBUSFpxV",
  "key24": "4MQ2dkCpKVu2zbvghDJtkJuBVdXRZgtdeRRhL5RGwPTE8fajiUEQn8Db21tafCpqMhNka33mMEKqnQrMGuWrLEEE",
  "key25": "9U6AxXDoqqssW7dME5cKYWwUShfxGTQszxBvq6SmBDdXs1KfksxcgGPxDV3ZeUq4qse3H7fHuKCzQrrHPEnPdw3",
  "key26": "CFyNSFV4UwhKHxopyYXziDMkXuc9AWv1WdnQFMKkeHbf4vZDtGJGwuKiHbS2c6jDdEWLH42neLXXKaJp5qhnCW2",
  "key27": "5kQZDH4yPLDmjzmKxaaRUfYpAYDRrNw6zmakK9HJhcQP3MP1SMh6NZ6XDnMvetYKqXe5VUdCQX3oy5e8mQG7iRS",
  "key28": "5D6gvzoaL2NwHtJsyEv2N3EMjzZrCa9ER4kD2Kdmk6kjsyH67kA1zob4AN448Ed1iWA5d2S6xphApPL3U3CnxYR8"
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
