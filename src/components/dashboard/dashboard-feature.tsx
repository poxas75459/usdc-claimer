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
    "2fRmEkWBj9EF2qkjRZFqPLYtRx4Wc9cF13PNz5UeuiYnXZQYRUgqA1ejyhQsmmbSYMf7FHSUYMy7KMd8BVe7q6mX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQSyUo5KracdnLfhSdqCvW1v1Gf4SnftAhGBWk2PSWgyh1TwfLNmzFYMVgCXRo8KPfFYdwYtvt294VpK17bSXVd",
  "key1": "vhDWUynG63QFJZSJ6Dwuf2N2SoRuhenMrdLv7CbLuWhcAKvH9VQzsZw4CFKVDV6yXVSuJP7xVDXWWpR16CW5spU",
  "key2": "3TEkGgBhRkAUX3LzN4eAVFAH6bdqPYm9QcPYVovnTVueFSQaMuhUepiAzMX1Afih188MS4jpYoiFn65s5UHtX8Wc",
  "key3": "qf5cqkaPhvxhuU8aYeRY95qkHXVKdKFGreVTN8WSoaezv6wUkPiD62hZJjqvXRK7hhGtMQdenmrhdi8LT3Jv9av",
  "key4": "5xrbv6ancrjUtwhwT2Mgdh7r7oA2qrAywNfDBGCXEUbEnhQVYQ6WGTy5NcGmMqPF4YCXzzeRCgSvpqV6xKTcfxmG",
  "key5": "e4eGhAJP4qcP2rUiomLaJiiKT2RpfRKRC4qUPooQzAwSF4URKDZZSp1CaJf2zow4AC6ud1s6pxCPRQfHYF4TR4T",
  "key6": "3dRbEbxbj5m6oHHtWnapMYBjkxHfqTXUu8xmiCUtZmmm5vSvE2Krz1oH6bStQ1hHLqqpaQj4zSDhH3sP1uYhgazt",
  "key7": "4TmbnK4CzAroCWNQJHvekTefvDGqzD2JLofXNKvevFU61SJbo2XUBh8X8ii9VY9Cx9e3eKnmyU8YrFwuUZHDGAvJ",
  "key8": "5SQXRiKsmiKXcQfwK4rhX49gMG9rXcLxNcsg3Yx9grJCQuHfk4f2hR6F9cqjkJCsauAxznh6ycmNNDUKyEkwBm1B",
  "key9": "5D772kqL3JEgKncrg7PTAeqeu6FjHqkxSpMUZ9oEG7VD8GF57nAoRzvpNLCRhFYxzCy4STg2q61bCFJHEXdYucHY",
  "key10": "Htakj82L9TK9snJoTcfaU3ZkWDdiYUZknBP7B1bkGqd1cPBoeELoUbWrLAi43uc7YKCoLgt5Bmf6BxUUk4GHmrU",
  "key11": "4azmy6UkZYnrBNonoxET5iStzt9nV8t5XaXuWoPvGJqRRAqunhQh3EhTjXb3ZpQ64myRCiGrw7iMFdhowoA1E93C",
  "key12": "2KtoPfgU92zzYgn6eset3v6WZCPzrjzFzNFDg2t6f1sAYq1vjqRdvNCvUy8NV9sEuUKuBt1hDwMPJYbba56cQPeB",
  "key13": "2AQhPyvommXPLLw1jJcQaM4uaADkfdHxmhLCb79JFwcLHNJ2npNxV3Gi7aGSNV1JdbkuKaoFTTMRJVkFuwueL2rj",
  "key14": "5hAxUyESHC8ew9vfmJbAof7yLhSqQr6wBsDTDioQLH8Akwis85nYpp1X9xcwLSCzycdHFcDmm3dDHThrwhfhPcc",
  "key15": "4j7QWbCHEyQro5WxUt4zBFHkUTaVUBRUrC5ga5Ay8fQACRPYkpSLho4NNurnhcEnsR9FMS3PTAk6ARVmNWSGKMRp",
  "key16": "GHL6f5ARbNeG9jSzBJdPnk56QRK9ywY6T8ntZ7bRFg5xYBjYJYoNQ3ScSZvk4HVx2MkWZP1xjJbdMLgB2hK9kkH",
  "key17": "5F5MjgCwsZ3339Dos6kXfFGHumhZFB1pSNPmZtmerWX3xST62DKaSGtbMD2KF2LDb28guMPKp3pQHcD7Bp1pYk6j",
  "key18": "5vQ5KWgSrvdCa1Vz9H7oYgTDeQZWKdAyPdReBYfKSqQy4JKgqadY3BbmbGPHWDxZoxoNFURytobfzgU3mKAq8ij1",
  "key19": "5iDmRyHkE5CD1MtTzMMUH79QCE9hiE2DgB5ptqzQdVP6WfMXknDD2Vjrh358wtH9fMgdx8stiJGVPzXM9h5HAEp5",
  "key20": "4H2JJWh68NzowicPcXS6XpiPfwEniRWUZqiJ4qQzNeNtHSfPvdzmXefyjGuS7RbmUjt9RMhQQPc73eihknJ7zbpS",
  "key21": "4X5wuPLSWEr8FwBbqzMSAvjT5N8TFLPyo8x3qUZoW21YohkhhDunZ1uWKVZLpsianCbT7Rtup9G1Rb6tUBFxSgH3",
  "key22": "4o8akPBWpNQw8tTfVf6juKudjch7ur56ugTkDx6rvN5vVMygi391EUgSZk7HvRmtr1ZkybmHAGULBqB92a7VY51x",
  "key23": "4k7nVhEigVtEsxQgHJgULwub3oFvTFAoGMXarbsTq8bkqjTHwBebBzQymC56JFUfbw41zyqjystraV6yFkj67sGH",
  "key24": "5JsjRG5nxz6BzARgSB6GEeL2AMWb93xpRksTTt4yURTDjB9rTpesxVct4WxbQU9mZbRnzcFPZuQDUPp7kSKsjeKu",
  "key25": "W7Pw6f1nB4veXdXZZagnosGLyaKsaDv9w8u1WEThcvQkLB2qykDK9rz7RUjcsVryRyY9dEG292XJBkn2ft1Nj4n",
  "key26": "t5zGE8D42GHuaR3ckoU4kccBstbQueUK3agEPLaKJSJPAPz6k2cgrNRZBzB1GjUdXrKsKCgnBccsvEUrbtLATkw"
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
