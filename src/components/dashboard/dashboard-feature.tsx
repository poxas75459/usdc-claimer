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
    "4P8R749HX9zxL7YtGp9tAYCPfM4n4QU3CmDQTbqbouLwrJ5NTSeKRcwjwzQMdGTVrDhGDodfopuWc9sxkMUuzpzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGEfyDGx4wU3BGc9xZwgsNwaKVUqxywKjtdGGiCcXyykenwRzLPPCKCStMX6HKLdaF8oaYwpg6HmspfsRTH5FrY",
  "key1": "jfXk4s8KZawzPPuLHuxtymg4wgshSCrcDR19RQwhTkXVRijuq9M6WK3k6uPu8UpoWyFqUDxs7i38ynZLbw7ca5r",
  "key2": "3FXnxN59oBuTNuczVsL9vZ3vr4x936xpum1YT2f2CMkEMSPvdPnRMcmk5bJdKmAtdAdrj9PjuVWDyMUuXDdPY1TW",
  "key3": "4UytNMPyVri1hjeBfCswMxoqupEdjkMQpiMexFMM6bBmDbS3hKtK6LUb5Ctjy8GQygL8efkwGskQx473TA8nH4CC",
  "key4": "3v6zg1MmMGaWusMBj8YYZV7E1LcTw79aichTj7nafgZYptf787ShrzrDC4J1GFCEXbk5SWy7XL4aXu9bGgsMYzQP",
  "key5": "24JuxkmWoBRQyNd62GPbHz4qsr5wdJo1wFRHwyYpkZ8HochAMwwiEXEBVi2uPRMWav7SMqq6HSUjSUpinhVswcPK",
  "key6": "2e6tvQQVWpoD9d46HFZPe6wt5qoDiBczdAF3S6em66nGYwboqje5vuVsZttSReRmgxaamBGwvUXbVdv7iLZP8Lmq",
  "key7": "3euLczQoB3pmPHebzDyAzkDsvUCg1HHkv3xKW1v59c4B5qp6WnR1V7JfC4FWtdrGtSGnAyqHWtXXq9bCd1tLymkS",
  "key8": "66y6YywCjtgi37qqz35Nkmspkh1SVyZNrZ6dhs34saZHkjWy5GXSbLHDPfhiQHykko8hw9HxmGCdwqFSuRtUrDrS",
  "key9": "pfNjKJxh3fNVuHiiz3MLUyVz3FW7FngYfyoftiqVamSdyqP7cTPBRnJkTdbipUiATtD7Kz3jo6ybimv8ikeoaa2",
  "key10": "4GCYUFn3xwE4pJ4noUKTvAkmuk62ZChhFP4jHG16FK6dPqWKG6vqvi61JYSAZegavXLDoWMXpU6F6xRHYZvA5i2a",
  "key11": "TLwzhztP4rhJsKYgekGs2sEweWHtzDZdyLVifN5J87axnuUtm5zJBR7EQ8sToSgyphBLQS63jJEkdwVt7ZxN8qw",
  "key12": "3kAHoBuz2ZNfZwUFbCwvee4xa9U3cVKsrRYQLpbeHvV5Z1ytUwVsNB4JNbwBabGuLMp5ZMgsKM9ZU154rfrScNLA",
  "key13": "3Vh336PMv3pZHWqb8C9amdTmSq8iDoa7kXmw75p5kjVqvq6LSiMEUz6XixJ8LCcUt2gKXVDXm433adETmGXbV2Lj",
  "key14": "3RtuDFmUcSpytHCZLqmxVoYXYfuaokYvjC7CuF39w8vnkmm6UtxRU3DCpfseTGe5aa788E3m45YpYZuXRDcHt2P6",
  "key15": "4xrpNCJ2xS1QuiYfvX8dEfxfmxTa6YfCo5Lm1u497zgBPSb2XyHXbGxDqhwh7RnFWD5cbnvnDV8bvWd3n5GmBbFJ",
  "key16": "Xj5qfYuh14kZoibxRNPiWpSxvTYR8FJwgufgs7pB57dsSbhktCwkujAWwv59QHN9EU6G6LGShcLNeaLsNRjL2f5",
  "key17": "AEDKjn2DTjRcbbgQLCZgWnQa2A757nidWSJNhTseCxB2dYGxW3Gg6L3UkMrEzK5nBD61MTaa4NtWsRa5MA1vTvH",
  "key18": "5UgNKkW2byVnxnKSEyKD9SgWUQWZQQdVwyLAhFkezmYt2fVxktjjVxj3Y35K2PLymYsFgFcaw262J8ic6zpmyYqQ",
  "key19": "54JJqTjEWUFxszQw8mH5XN3pVQNm4aMU8tvxokLemkyLD6aBPWrrrLF6Ym9SWe9wajdaSYtXVN58wCbL1E2mPS8o",
  "key20": "48a8cCoq9YXxDJdsxr1cgKrPp85MHYwQ9PRpj3tV4B9HEJGzZt7quNxmrqGx1n25rBM4tMbWUqwDFghzeR4Wwwg4",
  "key21": "2SqWuHxWEMTUHRW7jnCKXPtfuatoSnpUEZWU8NAGUnsYG1xxp9VD2RjQDw2Ks3zM5AJpjq2Vsxw8Zr1zsQPAz2Zo",
  "key22": "2eWFSYL4NW3qbjUDnBV6p7QAZUqCkeHVZMnbTbgCqaUyhnUxSGbkysAVP3nRrgZEKUpFUrjgydNdf5dLJjcBFgU6",
  "key23": "5eMoVyP78K1ChBrV1jwm1Y7nuirM1nE7ZKHxbKgMdscqqDozZXvZJVw2sEfadKTHu6PQXEaeLfjubofrrfjRfUT7",
  "key24": "67XCwfbTkYa3AfTMrdH7GE6saJrbfBkyrF89shBFEDs2iC5r1bqZmR1ieTBthS2tK5wjM3KR4ZnFu596GfsUwAUp",
  "key25": "ghwEUsU4ehwWSmxwTJt8kbBwjmxefAWJrohuZw1Tcwti8BKFrgyVzs3xRvwRZH2G5BUVRraFMLrQVaxCgLBQcvz",
  "key26": "4JLCiD5NxAaMuVocwJdPQDysXzLXfWSqpvXQCAepT9pXKcHQUjPBhoj37kcivReftJfdxaDkFgsZH4YcXT9qMHPm",
  "key27": "2C9RuhqSvX1XEVPffzdULvSrUkD5rsNM62TSuWYGXAipeRnr5GQhkqLnFDmwisbZX7sR23ShitvsG9mqFhsMtHXv",
  "key28": "26MJsQNoroGejJqmumyDD8bSyjrjTMfHTjipL6H13ctDUJuw3fRzibUG3yNbHML1NGBUPqPa3V3nh4C5fJc3117R",
  "key29": "5qKrAn7eCt79Apm4RZtTXgRGdBngMrwwvtiuNjNgQQHHCEe23npQTKAYT88fvobQDXLGEjQfbZAhTPdABG8sbEEZ",
  "key30": "bko64FXsqnXwNY7bjkaoBvC2TdXZ1Gd1pQ3uTMbNm8rHRvCEniMS2QyZEAVLWjrw9pNW7yEb9sjb8AMtLYdUhcC",
  "key31": "5s4RfzcKx9xVb9Ybv43Ae5AuKoqD1oyvGNejJ6u5mbmRqQnYcM5D1oKzPwzcBZ2z8TuPgoo8W4LhemXXv67Bk51c",
  "key32": "2215q6rHdi6pY3UkJxg8Ya2gXDVDEqeYSmmsWyTDeehuRApc8f8W6aMbAmvVKEFYpncLSBJ3DzNTBarXjE8VVeaY",
  "key33": "3qvmbkAdVGFgCZZm2LeCqbRpnXfs3nP8NZqszNaKsrmQYmzD2Mtz44ohjBrHofSY8FqofzkJQNZweMPkeUwkeBHH",
  "key34": "2DSvfgACDCABbo96bwv4wY8gxA23qQXjEFmrriJsHjW6YKJanzW94EDj5Ab21XjCFFNUjSvm3J3Gktx9ce3nptbc",
  "key35": "3F2M51enSZ7PJkmmhUeq7bUpv4vEysJbBAvj9mmHvDyUDNZkkHAqmHycJuFk83oEL3m6JoxNBXcPpfALufDaNtfn",
  "key36": "eg8VGChzZPHf4NG3QSM1Xe1zguNBufiYjrsbTjGyM6FygFYyhFP1M1bAKTZBGrnwnfpwsgEAU1gA75jE5NiYNLF",
  "key37": "34dpqRCqcvzjivkQKdjmwc5ap4nsJX5SqHsGARgoLBn6Jpdzw99TrU8mEJ19YaLW74pMTjEJXmzwmbny1FNGymHp",
  "key38": "5yAkmrUGCG4ASVwqkjuFvpPyeqmKpNYSEfUGyUWQucab5DJEHzuoncs5t35JZcMMtWjWukVnvABd5GmLKsrLEmwb",
  "key39": "2LU8PYxgF7tjLxfLgo2hKHFUcW2D8yzUmFq4wGKH9nwBwz6B2S9a78QhD7Zhkp3oBL73K66EV4vr1a8JPuVvKv3g",
  "key40": "3VopYxohADrrGL9GN6gfDcTCwhVgJH9mgWUSoEvK8dqwAYkRSPHznd7AUeX49q5H3Hou4wnA67kE7RgpJrCiNmK2",
  "key41": "4KKDYX7bBfaMmUR38CyYxa342tBcd4YcgouqBZQniqXbUsdx7xNVAqGVav47MHA9XStoTvpPqEDGanLqmocF4SWc",
  "key42": "3N1uvvnrLVVNJeLnsXQWrakMkDvLSCAjxHa6NCQvgbuz8MMKCTj1V2nNNq9A2ueqddZ5CiFaZW2H1SP5Rftns7ts"
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
