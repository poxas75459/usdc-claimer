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
    "4FQi33cKwXhC53mA1xsKu9kaQ7GvbmZWGaAHuXxmX5iwUuK8R7T1BL35stxDC7AwdaXU74ci8ZgGpQUNMtNNXsgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zXeXHt4uSV4giFKVx1Bp2jBAmh8YvdDLNubyAoV3WU7heg2JbYpxWMHR9LHCCsUk5rkvgcZnzw9QHWUchUwQt7i",
  "key1": "5kgvufJfCxEAaaTnwT3Q7G1gB4KCC5Z9SEWVMBKsPgbMwU5aLkodPqNQinqT6NFgjKr5URz5u16tixQqVEKjSBye",
  "key2": "cmAzX7Wvna2Sy7RG2A2mchxkuAMjYHup9n2W6BKQzbz7pwiNMeAXJA2tiXXFcXpzX911PL2bVvGoArwsWiCir8V",
  "key3": "nLTfdMv9oWVSdvJ9AoCtJLzNkZQ59VLLcop1tgaMcZDFfQCMhEMEA7WHAJYdvB9pLED5Bupw95kNkkvQVhbanec",
  "key4": "2GyUGnegvodTUPL8SUhEWtEaPyqwF9psotEoFgh7Wen2iyZFYZW5Bi4b7SWDzpZNUvF1gXM6nPynB7ZRCVVXEgMo",
  "key5": "4K9pHyrV8HSFKWDuViWSGMkxVoqjL4bvaTomsbMRw5KkFgkFdWN6cETdn3oA6wZ172ys8yXVbXeVpD2j7BoPCQYr",
  "key6": "46c3V3tNrfo1mVnpCMhnFt3kC9CJjihURSmUUtC8KPYe9C3vgSvJ8wscX3ZEsP1pvRnP7t5FmAfDQugRFMmDbtCi",
  "key7": "2qoqyqU6SfbVxbLJ9fLRqGe5x9UfjbpF1Fz8HTwVwpQu3LyBjhjQkSzbivPqPKYoQ8gUcoFNC5u4HuCj27rgR9mn",
  "key8": "3NANMuytrjWZW9rn3xPo9XsNywnQ4bZ6EVZQUSDGZSrzxsmaPxYboczmgUVHjRyXeFNZMqk1WUWGyQTPuZoMynAt",
  "key9": "m7jkMBzWnA2NueGcRDyTNS9iCWr8axJRsgdhQWfjTVf5ffSD3pHqKetRxcr7NHGJiZBTNxqpzPo25YbDDBvCgE3",
  "key10": "3FwjcRwU7vSgYAwzqkfTq23siQDSjwPPFBxWfUaFpDEeETi1Lj2CrEzGgZYWqzgtkdSRRgnUzNBW8LkGvR1nQH3K",
  "key11": "332ZDd63kqQYc8EdYq5dfoBtecSBASSPr25iWHDyHKomwmvysn89FCqgDGkijywYK2XFicZS4tPrWG5XhZULHBUG",
  "key12": "4SFU3E2FpQWoTgrLFfCveRhd5xiGwyFYznHC9Rxc2CejsybcQGcc4NCLhaYRXksH3HFxXHwWKknL7J6K4xrp8Lyz",
  "key13": "4o32DKucoTCqk915m6fc2dwsP7SFf7Lgpp7yPreMTwJhE674Ywkm8RCECkSv7TBAv5ahxjFfd6RNbq14vkCVPhRd",
  "key14": "3TXvmo952ejv9xePUCn5W7Tjchffb1avXhfwpnxzXJC5BVK6UzkWY8F4P3DbRqpWoUWt1r16pG5GK2737S8GaYGc",
  "key15": "59zEAj5g5bgNHrvJqHS4xGGjbU8M6mc4jJ5HahSjWdocC5f3VaEgyVYyzK2SvGWLXyJ66wH8zRyDe5UHuVf1xVMh",
  "key16": "2a9N7oQBLH9wDViTBSve7fW5v5Wgrnrbpxh4AGCb3zrUTkVEx5XiWG3J9wAUea6wCGdoeKhKdmv3qcj1czvtd6Jb",
  "key17": "U6EctYWFUjo97jXT1sZjch4uFWfNcRjHbL4mGCpR9PY8Dgagj8JmSSMn83AQwM3KivKG5AZbBvb4Bpy4XpWL61J",
  "key18": "3bZC6vFdqBgcCa7ah72X4zuENW45mAPggJ8NGBzUEWPVUeXuYL8Lkj9FQtiMx5cBWnJ2S97FAdmDAhQVZEoRRR2S",
  "key19": "5cRcX5bJotvWNPhBwYuJPZ2NhH2c6tjkdb3PkapB7hxa8kzSLjACJLHx42nPS5m75zThh98bSRH5M4VMAr66rzEB",
  "key20": "2U2CPv3kg3XPvCmC49PCTxhtgrEUqykrm2T5wowacqoh1cLiUo6CBYjhGMELUKWxnuWSS76WvtKrgWKY9tkemN5m",
  "key21": "5bzDtZtKViCQCbHcTQfnb3trNLH7FPyKp184pxrd6wh7uZLDdJazvuSTcmJor5ctw32BQqeyNuvDPrD5KV4fwcj8",
  "key22": "5xkgCKJymBoLAAmc3ck3uyHUkWjnhvuSw9XxrRRQ4fizg2FTE3zkeA1xEAbs1sypCczyMcWE9RAZGxLmv4gTKCbw",
  "key23": "E7vPrPRKX5DkzkycKPDGao9XViHvaPDmDGQbGTRhsq3b8CRo1cTszQC4dwejhGNQsLsqbYmQyDbda8fxZfpN8T4",
  "key24": "3DP6JA4QUECCkJTMb7XbfB4jdJXrKYJbxMFwH4o9ZbVryQH41G88tFpx8dEAGK26Q7oazEeShoHyUzexan2XB2mf",
  "key25": "4PWADmRkm7aQkHf3csHSttwuekgFZ63mDm8nzJvuuvcXCkmNBr73fXdFsbeDbBg9RWFt44SirVJEpp4mU1wT91dv",
  "key26": "53QPiJRcVZMCYKbogQtSGKU9koUgW2bEPdVyrKFXRYjBTna5tjL1UEg2HkDjrvaXiXuERzRfwvELTqB1ntiVPLDp",
  "key27": "3htqD4BwxmuMAqUHjcy2inPPJZa4F9XQkfrWWXC2vZApGorkkPAKHd87gPj5dmwpi7PxMJhqr2ncxaRiEwtCJcUs",
  "key28": "3j5q1ULL7LcKcg7PeEiNDoYBABUoexMa5VG8pZSpR4DqFPLcN2A73YKdaSGvKbaVeRjhcpLyDCJAGeWHuZ51r8aD",
  "key29": "5Vud7C7CDKh37yxchhahPLGUPFZPSXeVSuC3JV4iEXkVUMpvYApbXe6zHVgyrmiP1bX1x4gdk8B6JJBqswMCwmbe",
  "key30": "2cj6JV9WM8rC6VB6pYhmK9rmATd9ruWTiV6admRSXSpDi5xECApDdB75sRaTU42MXvqsnHYvhGUfYykCrCzyYfb5",
  "key31": "3ZEzF8DHmRSBj7kbUeGFrc8XyYqbis7LDL1Gm2yLsoR39KEhbKsdDGYRe58uRr7dkzrbUZmBXMZQ51XT2hKap6gP",
  "key32": "2vEBDy8X34yrF7tLXoLo1j5Mph5iGouh5HkwHgo2n3pWcaLTn5wZvUg6h5NCUCoUP5bQ7xKddDZTLfj6Y3h1tDda",
  "key33": "2WeBaScuiG6NAssHFccQzHJJFUBDeA5LApSp3smcQW3TAipJ9cmotGpPH7JCdgeqU8bD7u6ChC2tTv4UnkqymP7g",
  "key34": "5UCDYtZUP2MzctRHrGKx6XkrcSdzKey3o1dCq9R1aPbQS2LPwqfkCVLPutQkXsz1ccYoWjdxPAyUBg8D8QF1UWbJ",
  "key35": "45nZhh45Kv7Ti8p2fCJNY1YWzcFkvPPeSpY3ccDjqMb4jzNoNSfeuaaj9KhmXXWmKGLDiWoGq9chL4iRDdNhdtxF",
  "key36": "26noTuJNYMdqoBuMR9ZEr1oLwt7zM2eP5AYAj2eEiiwrukhfbi6Mfd6WNc9DFgfuYqGASBKx9HQ4cqnfmwsnANR9",
  "key37": "29rfeRFffxXPJC75U9mesHx6Dabf3GwC1Hb13q5EyUAPwwDqFYgWcR9FMzwP4VG7u6FkWrCDiMCumkXUdTNYNpY2",
  "key38": "3Fcm5Tzrb7ymV8uNWx2C9Twk4GkUQmr1soQg2CheC4QyiisKBTSowmTavdQLVqp19fgPwdzpJRq8ZeZgiQsTrXKA",
  "key39": "3rKR5iCnLSeknQ21cY8uf8J42cTCBHRLAVjwuQwjnPzgzibMb1PkpT5EQ6yq3DtojWYLMYL3h5cPNZhGEfT7BmvV",
  "key40": "5ZcaD2xycRc44f6VA7E4ugrBbWT2sB8gd6YCk6kyesq2f9NwpGxgahWoqkXs1zZ7hm5pStRKX2Mo6GNvUCRHnv6t",
  "key41": "4efXPGqCZTrUYd2SQVY7FZ7fqFTCpx81ZqWNFx8G3MaUzwt1Db5txm2nAvfWSEDobNqGgQyk8VgUu3SgtAQZAeQY",
  "key42": "4JhBNLJdHTHGcqeeaB93RyU3a1tRQhnuaB5hq8q7HZFJZjVdxLLF6c4f7XRnPERCitX9DJEubjRGxoo6cnRwntqc",
  "key43": "FAeNjr7xxMxVhjmwTyAvHF4KG6Bj7kQ4VA9P8gMiYvcRpEy5azgtj6dXEh6To6gd3ALn5hY5jDVoJMvxzo1AKCw",
  "key44": "3WbMtmtsinTLGgaXTP2a9hPQ2PVQLzUmChZyEt12j7c4MmkNgEaz7cm8qW3Te3upXyRemMgNbWXrukMgLqTheGUd"
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
