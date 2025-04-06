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
    "55HFkxrwiRtA7Rm9XJiAR2T9EW8HvtCJh2KiDnejbeojWQQNLvKAfHSP3yrSap1V5JNEvmiEUBxnos79ccTCRmsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BktM25rq6fJjQqG5FQVpZmQyCpsQu3Yjhr3rW1Y9ZBzBfwyWg8damQouznvsRA58nzUi6fkFiir8STCuTGf5RFy",
  "key1": "2oCrq9NCaib5gCCGXg4Q76RAGhVXyBf54NeW6KiEXv3QX34qDUkPba1PP4XXXMHzw3zDLVQc5YoJj6hNS543uTpb",
  "key2": "5ehpmpmvTmUrptWSjvowqpmkRFQuNJvrPq3mdWYA381CpdL3vTDPPCcHMK1tuvs7UZvMg8y3RonsneGZ2yV1ZAEo",
  "key3": "5WKts1oYqRrXaQ4Zi3xwW9QCQ1LBVrNUH2mnwysKnBQ56VoQ1Kpw9osmni48P3bKHjtiGsAqBpZqFMiUC1cCEmkp",
  "key4": "1i6wZPedm3Sqot5bZqRnm3XcP59qJC3uKiN5kxpqSgTv7mFxdwZAQexiX7qu4BsQsgyCZw2bygdzDxvGKMm9u2S",
  "key5": "4KzcMAYJ5uzbiT3qML8kQt8vThHfhMUXixZ1yPRsKm5d3vAwJurxsa2ShHFoXFpPAi6RT7PjmVQJsh31AFyNt4Fg",
  "key6": "3Ybpz5FW7NmA5cx9G8swCvkUzYdNoP9wasAGPSZ7E8MBBRhCipyAeJ9PqKZhJMtfSWPbMUaR8edSLABxw8dZVRgz",
  "key7": "5w6MzcMhgfkXYe4J3FRJdZwtnSAT1ULibu4rLL4temUj1RkzECARfL59capxXxTdbXVVvz3RZkTACPKVoiGGkEEK",
  "key8": "2UrCC3f1oZ4pw9DNENpn1cSvMHqJJo1bmiTxDNVT4zs8CJ8VuceRwCUPLC3aSTkwbLqezofM1WS4eDzBPPaFA1Fb",
  "key9": "2CphJdqxiT1sFsy5yShFmptC7RmEXnhA7Qqav4afPC4CxSfDvH1kR5LcuY8u4xZKser456iHXpAyQXKCHXgiF9CQ",
  "key10": "2LTihoZkqC5ReikCHtsa2sUWPCnm3Ybx7uP3i2bXP8u71TDBRHZjF1SAjctsna2P8aiszkJRzxo9H4BphjPQB5xf",
  "key11": "5awQ6o1JPvwcXYEv5WK17kfjqLuQCueAqbRXvMfnpuhruV236sWjFyQTyyuguTPiSTTEzGWkiyUkXCostEr6E4ry",
  "key12": "38qruH23Bjrs7twhzdc5bq9LU2QgtMVA4suttuqxhovRrFRSA9bAzMagFBQYwcpRPsAkKPQXBZzZNsTiK6kWyTYT",
  "key13": "2T1wQWpBRxcTH8v1X4Zvh351qbX1Rp3SCn8KvwJma1JdELKUL181KGF47k6HuE4639pRfgMnUxUhCSrEVozLsmQB",
  "key14": "tfqvWv5GH3Q9yFzK7FUMTGNYzXduAqWAp7DSsggEuo3Dg1AkQMWt1gVpVK3X8Sy3eaxCkPwizGX8ELdQKikQnRj",
  "key15": "5tBonX7XzsdajiVCjXEYmzqqAqnRFT3rzr7ypeDE4nX8epKhFZPVCdhcEBaz8TYvaKFwzweuEup4kq7ABY246fW8",
  "key16": "ez52rTVF8aj3b4s4HScassX3tTqotgGUiXS7sMN6GhePSkKBM8dcvRpERt3hHRuibtR4eC3162PoDew1HZ2KvuV",
  "key17": "4Rjv1bcySuSLvCbUyxFet4X9pcgK9ZASZidFT9cjCQzWDx4AJhkTYqAeFd5wsWQWQE658L5W8ZzYADJCKsSxMExp",
  "key18": "47CVqmki2cFDFsKkKh12v3uomBnPM9hh3NSDvW3XQcWGxbBchKTHLWzXNeDmMEnyjWFe9pxvMmw2Q76JsmL1rLxg",
  "key19": "33F7U8v8mQExdCyrHarsMz4xCdCwShFtYFgRXX6bW5RmpVSjkiQvnpDpjaG9UFzxZ5dZiFKHuF3kwizg6hdEkCz1",
  "key20": "5zhejH4QXepEXW2PGL2zELsHDHFDSAPaSYGfHeMEv6K5FEAYEpcmvzGqc4PZcZPSKyL252NGbr97KqfAWVd9Touu",
  "key21": "3ZhXVytb1mgFf3vGFns4QzmZpDAxBzadDpY8nUKjEUj7FGZ3uEgKbTDATzMa2kmh8QL6k2b2qBKqVe6XTmpxGwag",
  "key22": "5rrYe7HwBxcMHXemYWaEtjxk8By6MFjr4iXM1snKmihz7wpGuLUq6VLXmd6YQtiX3enquXgVynU47sJTotD58Q7g",
  "key23": "2CZBUH9UdGW1gkCGVJ1Bjtkou1gGoG8pSDmxQseNn8Jvi59FceChAKtHspNnobNsdCLrSSoX3HTcXnJRUjSavuvi",
  "key24": "3smD7bYi33MD5ciHiQcbDHRK3CgmsCwYykQYHNnGAoFf2aWVKcSekMzvdaXUnSQjnQ2KpphmPDh4ufd1Ct9L9XES",
  "key25": "4MALQGhuAartVgx4V9WGXFccWkNv5WJ4f9LD6QRrhVqSn5xH1qQCXxzZJqTeqJ2ZWeegap9GhPmj3N8Yg1TxJJZA",
  "key26": "wTbu7ppMaNNnNukKvhJE8Xss6aouCm8tsgX8hzUe8gssBxSQotKtUtEB7mvBduif5REiM3u78sJiRcCeXmYwZiL",
  "key27": "4f9ZsHRDkpTLMo3tY2W1BJdAvjpPQAR1pAFV9523g81LgkpW8AgUiRqnNVdTz3Fqv9SMMNqSM3XMefFr9WDbL9L4",
  "key28": "J7ve6HQKjuHHxvmyu7aJSAYh7NyPVJaxcFCVPdayY6u7Zpk5d1qDPyjoxKGNB34K3iunrJznEbgerXtZrqZHqHE",
  "key29": "du15Xk7qViNBkCHmYNBTVSZb4FWLoFTiZqWzWpwk4nr4YQaVAoZ4BwsGaRNQSz4jidZzDZ18VVePXUmH4534hD9",
  "key30": "3fAH7vu5iyNjKRYMzbQ7zicPb4wfAVA9ipMsK7b5DmCcZxXiXgtPF88H8coe9PKoTd2HKLooBpbB2cYnxRR6uBGu",
  "key31": "LcqfR1HA296prt4TetcZb5Hj4iPsjJfuefpNZupeLyAdkc428VvLzFSgRdSS71azGix8xE93uHhX63g7Pd5euoW",
  "key32": "5xMD77FJVXsfoxQybd14vthj7hodUoKWWcmazKkHxkuDNdXyZ4pGHnySifG7Y7tq3EwvfWyetHkHQAs8eSBANLB8",
  "key33": "4XVD4xdWcwjCGazCxWp5qSbUaQy8xY2TLUQmQN41Vw1ed8VZGqZ4xfXKeXipX2gYak55y6CZpGpp361ZBQPh6gci",
  "key34": "6292Js2pkUHB5dvGi1aPvhmia9NfcPApbSzaSdBgW1JQD3tDuWqnbPqAoaj3U1bHJa1cseV29Hr6QVrhhRQH7fB6",
  "key35": "2qENQ51r2M6Upddj5KZxraeqP2vKcbzHXDAcVHSDAG5jXS8M8QJ8xfSawGtTrWhPfV59ZeYRXVPn32w1sDyE6U9x",
  "key36": "5w8kvyk6cDR3h9KwRyJkg5JVzppGxJtLqFbiuSfTaeRsVCKnh2LvrHVd2sg3UZk9LgBLuM1APRmrLzLAQecbTu1N",
  "key37": "2E2xJ6Z13Py6MYgQaUDB25HwkbzgRubXZCyfhgNw4V5K9tdWy9DCmy7GCVJux4CTxgFYXHrCCjcvkLmQMv9RY7je",
  "key38": "62YGBtu7n4uQcdf2oJiyyWFkGN7mbVKUgkXuBKdJVxPLk16YPDrE8jAw2uRyVh8A5M4rtrhMzvvSX7q3rNgaouB6",
  "key39": "2rwUq5bDT194ZPf6ooXnpbSWVXgoqrM3mUPvv9PDB92popg6mECQWVndjqx8qnHYiz333kc4Ma6Tn3EoX1vUV5Js",
  "key40": "5fpM5iNPFM6o7n4EkNKDnij9WYkb3wsZdpATLR86s6ExoL3ickkETVoC7MvrUrvokWkuRzPRRiJxoW4QQat9dqVY",
  "key41": "4pVasZJWS6pucre7dAbpyVMbQKiJG8b7nT1mv6oTPWV1mBxosVXbhT3TTf5a1SCywCHMY28WHbyhWtsQQsWUtW7p",
  "key42": "5UuMvNbeyvCgpf8izuaDH2ioQqv8Bz8f7Vu1rYqZaWa9pg2diW4EE66e6PYnVaernhyGXgi93EVJfYRYQ7PVh7Mt",
  "key43": "2sM5pXA529zhpWsN3z7XRzvzf5q45FdkWhV7WbARKvwALKQvFzwnDK2nnE4mijEt4Raex2PB2aMHQ6DazsFuSb7z"
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
