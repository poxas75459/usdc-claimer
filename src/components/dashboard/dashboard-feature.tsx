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
    "MCrRwkgPGuFHmzqGn4uJC2Mvp2HJQ1V2TPwqKUL9a5G8aSUurxBsbHxf3XECV8mnL47mF9jEAnyPD5LPDs2dbMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxboX4vWWVop9N7xhDArjA9K4YCjENcTcZQnsT2TycjSGZk8hTdhdX4W6EaVXPzrzjSWen2Vev7v86nCA6xE8po",
  "key1": "42xSavJkgHAMQZ2PDHCNeDHjK4HT3SoirR8aKfSY17qjwLLWw8T17tmhB6cT8z6MdU9gZk8gwAfQUqvQowVKSc36",
  "key2": "fLoh3ARS3QGeXpN7XSiw5vnhsvBV6wv8mAg7kVVi2QgZiBimCSXQLKChCWkSSyeveJa6jt2gAWNzDsmpv8cD9LZ",
  "key3": "3UdyYUn3BksdauzRgNk6BhVA6cB7uBbewZBxetn9hQ2hXzPhViD57abKnUUcRDqRFJDb8zMBAfZv6QFFio3PQdCU",
  "key4": "4AV4EZzqvDPLzEYVs6WJXw7MZ7NfE4hTN3QYjkV57AB6MUhV8DTDWd8X2vNUu22GDzYFajXAMKAq8NaZcYhmEJSN",
  "key5": "26nqmnPnUNKr51vfFze8hCU5GJkxF9rqcXydBwqCsEf9i1f5pd2PQX4zEAvYk8nRViL8EYcQDSW5JTvAXvWihCiT",
  "key6": "29MnjqDbGUsukQdbmbReC9LFnbrmchMjigtJTYMrZvaMnZsSrkxQ7d7wvUskd1eKnRHqo73eNwrcr9mU7wMLRRTQ",
  "key7": "sLDpum6Dc3reiaXvUnPEZqTuEKDCSWY9bTbnfCkiT5RCyUHVyiQfnhUnCq21RLvc9dFfmtoo9HPKfZaPFsZeBZm",
  "key8": "2PX3ucgSs2juHWY76usTG3F3BM4yzPo35MvSxngyxNpmHHmZcUPjnHucTqfG1keSgAWmk5mpBNAbYai4LKnoG4f7",
  "key9": "n85tzSx9bcAUa5Tdm9D5X11vteS3cPa6sT8iUhiXTZyVn6mnQgGy9gtdwTyg6AJJXdJzHYj2R9ced5oJL3sdYo2",
  "key10": "2MzprKvcWrEFXRTYkNC3MSMCJiWBMtgb3U7WRzKLRXNpSA3DYAhQ9f6gDRgWRbXJrqiGM3iKaLKhJV8WxG16D9Bj",
  "key11": "jE7KWCVGTZknj6x3fK7ZsA97gd98BjRAmhetKfwqUXbZEeVPETBjof2TCJ7hKqJXtZcTa6byXHdi5riKwRFBM9B",
  "key12": "2q7Hzf4VWVvL9AJe1yiVwcVmGpBShckxXeDHSZwdbw9AmwgTRNFZmD8PQH7YfWViMHHhfBVfpaLtcgXPEsk5ZACA",
  "key13": "4cePCPyv24h2rdVsAkgycQgNHDM9waHSa19Ay1CB5GzZxGwWZbDLWe4QSXr3XAP2gsyKP1mweDhXRG1SsndBdCYh",
  "key14": "66FMysyhs7wXGkfALFkmY41Ld5cUdRSyiY9AvUvkfEwPDm5Wm25GqKhqkPMD1TiGQiavzEBLdBEbSKL3b7Jq3oR9",
  "key15": "4VHiGW2DuyA3JYVvt8965bF4cpMG5UX6Nkbgqfm2HNTsHsoY3p7mWtQwcHkHabgTWeFHatdsY5XbpJzuqEesD8t6",
  "key16": "4Gb3XBZpo9HgJz4SejqDuNNVTezhzSyhw7bKgughdUP87BPqetovTT3Gn88ZLhdJ91RkoUgiPtF37smpPefwwid5",
  "key17": "4xjgMiGoFcLC8TXoX6cTHb5rpYREej7dExXpAs9PjYComf3UZXMT8zjPiSoSuksjWCvjL5KgUse7EHAFnzfKvL7q",
  "key18": "37LevaG5dKJCdk8DKBnoWoB5CJMeSWrxZcb7wyCo29ZUyyqwJUDrrWM1ef8yqP5m1AN3xyirmhCTwWhQncBkviUN",
  "key19": "5a42x58oLiFvQMyQTfdhUy2wNJTnCTh59B4W3NDD2a5xzRe29pHcR9F6Pk8HxLUdLTXUJ77Qxj37hLi76twiPLLT",
  "key20": "491MjKxVWTYRVrotW6cWHfSzLZnRmNtMF4hV4xp1gKCLRKYKKUszb6SKuujvjZPffc1wvxnaL1uj9PECs5zPhPLX",
  "key21": "3H3wNegH4vjghVUu1Hx1J5DPJnhYtXJejX9MmYR6ti1CEhdx2yTNCXUwA1FGauEqPrBMPSHtJSThAJE463g6M9xe",
  "key22": "2iGjNzYJqdqNiwLinqLsXMGyifiLhh8BTJrYBTgW1xWsqrzGukL2QjdcjreHR4LuSa6fcozHT938YcZPfrfZNqjZ",
  "key23": "51KYygRVqgraT8pRtaNYZHV3pJn85UkuSwVfXUK4BfCFsPDEZX2Ti4qXu3jT6TVY9hYKms71yV4to4zp7sEnRT1b",
  "key24": "4ZWcnHBiUffwhZBr78xuBXTK9HQvr1Snypv1zUyDKjHNTfdfMMn8HW19SMQJAupC8h6wrBKwR7izjYQn4d93Kr9z",
  "key25": "5ZqNYMd3BnSuVaJtyLHNQDXFaayp2GiMd2JcXsJWTEwcmQ3wn1DtTFzX9wrNZFVxsyq24rUu9trTkaxytQk3snsL",
  "key26": "61LLQTae4peuDCRsqcRGDKZvbyDetNGzTRrFGHcuGt46swaYcoetngpSyc5B5vzZjtEUPF9hLY5ot2TnoBSwRkSY",
  "key27": "4heujXxw9pPKuahy5YLfCSvP61tuMF4v69LzmnopuqBRs2QWwsZcZ6Mscx38Qy2z1spY6TxX73DpesQ1BdAgSxVz",
  "key28": "5JXv6AnRa1B7EwdXETBXG8eNTGfM9FLMGaiFZSffsrascEiAmtg3GLQcYueQChizsBmfxM6heLFDeJek1JvEsX5K",
  "key29": "r48wRXiAci82mXJ2zK7ubr2kCpssM64DiuVjyGDLumTxsPWFPCBPgSy3FjsNQ5LUGrcanz59vXQxseCd2PHp8P3",
  "key30": "4AVXWSPrxYchHWZJY3vBdWisA3HhaXEMDgGZCwrQJCjMxXBXjymf1TRtYKa5JuiguRAzFn7VSJ3QYzfKhMUkgpYa",
  "key31": "4WujbWVwY6TZDyL7ZyyMVeVDR821GBaRScBiMcUk1NpuBNFzVvtUKmnm4tuyXg1ZuyqgLi3SbYHdqTQfAjcFHEwT",
  "key32": "4yLCwU2oN5w6DSvdcFqRjCsRmS34qQeJuC1t7Jybeux3HwmtY6yDdUEMLjXD6BfjASvPoByjPz85SAwGbMPJwMbo",
  "key33": "Co9UkijEgm35EjavbYpRa18sWZVf2SuNLwEUeMbNNJF8j6Y8WNmtabaGMUBvFdw7BLYfkwt6Buu9Lu7fVLVRTVP",
  "key34": "2dqq4XwTkFqPAEDgwuYm82Tv2QTyDuvZQiKn9MwLFFTbt7RWSroLwGv7U1L4FS9UQa8QDunEwggEvvAN5QpBjkST",
  "key35": "3qN32b43jB2njPDaC4vz2Uns8FQN5BV4FpAsnUic1y2QdkHVdh9V6gFRxhPbgSB92euiTsHKTmLgELNwWt5p3fRg",
  "key36": "3gwTtPbK3ePgJDFLoPrEkRcbbrJWMti7141Qouk84tXeAH9PBr9nYQN6gpMTSSRFekisWYSzEF1ny5jXEPgby1mp",
  "key37": "61qw5ApFMtYW5Uscqdxgt52GWJGTiZqb6jtQaZFXwWettXKS8E46anj71STCSgVxr2vF5goqTVjpLH4FWhPLz6Hb",
  "key38": "3KBJdgEaUoCWkhSPsaj11dexSfgHurHQWXxYrpFL3BD6eHLU1mvcJFaiAMeXj2PxgvA8kEnxJMxtwfyCGFdq19tx",
  "key39": "RtiUZdADc4LuS7KR5EizUJoxhYtNvJLbeeveD5sJNGk6fp2b6WEfTUXLPyEhed9Btb84bzhz4ahTUBfzdjdw1Ks",
  "key40": "4aT1ZmES6PbMGnXKovXSBhnC1ZG5kWgvReVQKxhnYnoh4wuNrJPefiEnLCHEJKphrksc7Yfxr2jCLMvPZZVou6o4",
  "key41": "4nABeW6ENZv5Uq5mtrN9uCSVwuBa7JHszUsLuVq16kefNesjjFVcmJydHH22YVmZDj71wJ31Znx9YVkhkJgvzneJ",
  "key42": "266RXpoU9p6VP5BnABBDa62kKWUsu5nJvZV5u4JC8AMt7H6mmiog9TTpkDkqj5TYfnoPWVNTPmsst55aK9TinskR",
  "key43": "2tv47PA3mVkfZVrKZu8oQDy6gtF8HdoCoxz6JpFAADnUsntmsPC3zbLzwxe1XpyakQ2FzfSJjNdxhmYkrwiB54UF",
  "key44": "4SHShk4pcZ9F6XZ1QcJ3vKkGMsr4RxKwoMhPQ32WU28X8aYwMtf4sojR8URohdxetF4m39imMX5o79Ki1oFNX3HW",
  "key45": "3hZw9VHcjRJ4Sk6Ba6qZTbHXioKnPfM8HXWuKf1FWGTFjVEDreydKVC75b3CUJAEVsAeFyPpxynAAvfiuAgLTv1k",
  "key46": "5Nqx3oSbrbWRDKmXxB6wuyrxuhDyfcB8Y6Vy6Jvx4wDN3MW84Fn4eZaEhtjwGFzbvhvSykgy4n5jVT7oq4htxiH9",
  "key47": "2Zb3miytAEwYUQ7ecospGHiDSUFZCxXVqL5oK2BRxLaqjLNa2BPBufJbFsxFX3BYqXP6kdpXBdVQshnYfwkZfkSf",
  "key48": "2jkx1NuYqq7sAoizxXjgquvYxo8rsGVnE8C211pBkmBMeEHz717sjJKREpsruHK2bE7AjrJTS72zVuor67rdiF3U",
  "key49": "4aBiuYp8PEZeW5kDs7gQPHwf3Dpig56Tx6uEPYkBuE22SbMFtwvrmKFcFY1pxowoLeQRdePTWCW1YyZnttchyaZj"
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
