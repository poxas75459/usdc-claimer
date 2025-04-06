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
    "2N5yF2dfy7EG5j2eS36vJr6bT7iDA4qxPvXpnBirmZgH3ZRbnh2TCsEp1H1kHgTFspRNASD3bYnHCfMGjZUtP1BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEsVXkPmdDMaV1Zd6dXEzDgFZXbby5sYQjN4aJQj59VBWQB4B5J7Vjtnbkoc2eLonJuwyJYii9GdGeiDgtBgRwM",
  "key1": "3hJaxjXEGB2iciVwQasZgjADJYt7QiCMQjLTEpJyZZXjBqbC4v24FDjY15fRE265acwj3m4wYPxqjnJBxo3oupii",
  "key2": "4RZVa4hGBct9oXNBXk1jpTy7SjcWgRQNj9KiAGJ836veUui6cWHcxLa5YKbStwCR4wjQpF7rgpxqQYNfj1sH9QVa",
  "key3": "5TKT7f8FjsEmFJmRkomhnUE8o451HGvjDjaJ9qNrUmwHPmvdLmcRDZyn7Lkd57BCdVWikNfK5kSsN4tsnosp9qpa",
  "key4": "u9ZfVqH5CGhgMeqMZTAa56mP2LLAqCamHzW81EZBE2XiYvb4d1FGUgE3qx1LXKMWaUQNkRF6azRPiV7mrp6jg16",
  "key5": "ZCYH7srgnd16yM7QK3BgZDYiMzF5L4Gcfua3WHZMLhCjqxz5fEAqQLNykhbnEz7nkzQ2pKncWnzimJnHbxwZVYk",
  "key6": "3X9bgubxgTPXXMwNWDKRYupQtny1thqjgWTZm85sQDinHozoUus64P4WHg2ZsotPUMQEest8Gy8gn5mkTRZnJF3U",
  "key7": "QhhsTfKHdMfre9mjoXi1bqgVQQaJ77hwQyC85BUoY6TmabsRF2ZtSimngAsNDPEe4NuxnHzUQNHXZfitrWopeWM",
  "key8": "2PU3ZYbku6CuGztAEbaLTquWs4gQpKpFLbtvnemmW63amSPvPgXk6ePMF9zbrz9B6aT6RLR1p2g74QwS7FRTDogg",
  "key9": "3tQ5vzeyVMJFe3QC2818EARpfancLc4ALugiDhqHhVVL2YyKK1Q73vaxfAHfqfYFco17CKnodNBYqR5Ht2sCMqns",
  "key10": "4GZAwLrcYqMZeRcGE73umofa95yzx3ikRDzHqdkSF8QfXG1WpeFcZHbg9DFYGDzF44mVgZCut7S7RpCgQg9jWbj8",
  "key11": "3qbtwCmLfhhvgfDh8hdMQroc4BJjWyPAEf7CM1Ftm7TLkxkL3FEscLd9vFyeJ7rjvxuXM7xU5SR7iMNKJPiF7iAf",
  "key12": "2erNc455ZWFWvubTAfHzDAJSGXkJz7DnuZuhFDGhY5M3p6iJaPU9ArV6aJZsxejeyE7Xw9JwDiXMexMoGb4QRsMr",
  "key13": "3LcbMEyHXWiaFe733Ah1dhbFAw9BqBGDMd5bi1gQom2XkdKdvKK1x6R4z2rJUPMtbMjrtEH9aSVw2PahkTi3B1jG",
  "key14": "5a3mQZiSicHctHxvR96aHCCdUUHxzWo3YpKGbJ355jBXdb8rG4N7uQ99XUZypK31SSi3hWq9CrgACXwwXdtwTDBt",
  "key15": "4cxu11W1J6YBkNxPaskL65k7qbVcPf1fNKcM36zf2VYPqC8HynhYLFGat7dp4whqan3tSURV221GtC5gSNQVa1wv",
  "key16": "5JXiT3FAL3mbcMsP3i3VaxH98GnmwnqYo4BQhMoF958o2wpGuC9h7NhYpucaoGn1ztchioqsaq9tcEZCtaL2YaXU",
  "key17": "2H51ErhpcwFmNhF7gUY2rWEyJdKJ7UKRmybL7mrL8CUmt4aqkYFYKjZQ4TeJ5MaMzCmoSQnPv929y2c6Cio9RdVa",
  "key18": "Wi8vcdde5GD6DJajeNhwHoZri1eAag8gArcKrdBcrHH3EkMWnWQUCMmz4MPsTHz4ykzdHC5pbhtsiRJN9xzMQJq",
  "key19": "4iVpvUWcQ9Bpuk9YvEtbVzuFv5g2gvAkyPKCPotb8v3a3NYUam8F1w77WxNJRuyfroRcPrwKVS9Tpiyo1dXi8aq7",
  "key20": "3YR7XekAp2EBxPgEokcdfc3bEzCAc8Mjwk2QpjbSCurdRFW2XorzDB7wcLQTMsSEgWohnpMwuXzLwhhe7b1qUVMK",
  "key21": "BjZdwh81WkUEzAbT74AdXwdDTWguZduhCsDjhz85dUpXqosD429qa6uo5RJJn79RJrtTJJ79AWnQ7K3EoUQTTpS",
  "key22": "5vVLkMwYpYSZx9kFYRT2V7pfkdssfhMifCRcMuCWyEfF11pZBbVLSACGhQwGE2RKtQm7fipV7GZnN7Gqr7GAdijN",
  "key23": "3sNCzMHj67Neoqs6LD8sruE6g6Hr9rtFwTf3LaM69TL9qE7Crws3ZqgVFwVDYD32xVE67wjMzT8n3GyNit5Q241",
  "key24": "123cySS6VU2bP6SEa8hnWmCvbMLSBokmag6otrsuxFAAcjiuiaHMiaSvARSiWGoGweR71Ds4Gq4Nwugw1mYpmKgf",
  "key25": "3RUv556YpbsyorFaX1voi9opfxDKFC7VVZaAJpXQF5y7x2Gh5Pukf9dBrLEkpNXWnDYHScKdLJRW8vaiyadCzwGJ",
  "key26": "NPrErZsAdMBhXHAVMepzV2d2tQxEz5BcCTubgmR5CGoDXn9wJky98QfPENoiRvuwAqC9sSEEVGYM2nTQjdrYA7q",
  "key27": "4usjsmKySURS5Sy4pGNAetmrQBbjtwJYWX2mR66PZXZxSHEahX6a3fyRrNzqCNRUVaXCQtrR1wg1uGRvPEmovYGp",
  "key28": "5UBKuo6H9hEbJSzZkvqc2XhQ5XpdGysNJhTC48dV7rqAqJncSP7VQPrmdPpegXDGvAwmzz17jX83CiuytnuhTJsx",
  "key29": "3tGx6VJTor9Ht51NYG2T1ZkwcHVz8P82wKjEHs9ejdbeYmCw8QbW6N54mofaXgArmZ2E847JGXGHa2Ak51xbrFmZ",
  "key30": "2FwACxytMbsPxcemRkvT9MdccyPaS5hvJidBUq9LWRoVP3AKLi6NSMb5VCNFYKxNxd5dberK9QGrvx7PPputrKP8",
  "key31": "3EMhbMNekcEmF233TaRD9TejQ4YUNqZMcnBaiqQ1eE83VMwyiiKhJcTKRXGzVCbbxXDKYnuWa1GiUUc7uFP5cyPv",
  "key32": "2VqbaKsMoHGMDshLCRuytQpMBfsgGc9MfRFpxWRWu5Nxms8qoAzuNqdZwYpUp2kqwrPKhf6YFXe3UvPeU9YQGQWP",
  "key33": "5hwqME8JVzGWqntm3iHktmzSMyi1SHQngNYSwbCU4DDAFSMJHGoVCMseVNbenZDKwtHGYJfeZBdxHPCURedHxqU5",
  "key34": "3NeoU1JvAvDDEUvfWmwNLEVP7cqgEkKj3TzTVGRE18X7BUcnqC2Wk5iGP38n6SZMqrs71kNVnxSFvABKAVm83YcG",
  "key35": "3JwQkzyRmqNNDHBgxdSJGmefZtWkH7nc7VeST4sHE7SCZyD7BcXvuCnSLzGMbeMrMUFyRfPB3QBZCpEzjWEfCpvz",
  "key36": "2mRfvmpNtsFaKriqn3TtZhnmzBGqecunkk7YjHkxhEUL1K6HHWqqbnKPgkNSGnxn7jTsPoNp2FNunMPhUtRWEC36",
  "key37": "5ZTceZYNYNZHgJd5toYMDggCBuMxXwYkW12VbqrWYqihb2MW2EgrRFuxAxxdPhHhLv2m2Ek39XKLV8QisaYw8Jh5",
  "key38": "2d6J89i39LUw8x2D4ctNk3sChNTshoRAy6xb6qWvEMiW4rHpAHP9vHsXUMEbC3aoi4qHsLaAD2qtMZ7CwzXuWoj6",
  "key39": "31E4hzMVJbQxeT8CwZAqjyZGnFwFDgAdzBuMQ6cRLdJ7tWHT8JWcyEbZKLi2R7e2vCr34529T9CFduCgYRUNHdzJ",
  "key40": "4dPuYcEuVWU5iu3hPGT3v4UC5SCwm6h3HqcuRrrLofLGJB6wA2iZrPrZ9TrhH3QxN24cK87UCeA1jfhrGQeebzaG",
  "key41": "5DDvbNbqf19ZMU1ubJfVZ1CduzVeAyWqazLpNR5juyfvtzgKpbrWCqKccfSsBbK3dyKihqtCVQxC9s93DiqEubPQ",
  "key42": "3Tkv1T5AvdXC9ryfxfTt1siVXparbeybARMPTBcfSbvZD8cUGRCz3k3raFnq8B11RViywEjyNC4SWKezPLDy4nHN",
  "key43": "4giGuGxPLsxd2qJ3LZxt4JXmZs8iM7oW7fPwfonxowP6rfcyL5mXwGLwZQBBfxbQKBuKnGw8ZAVxyqgLyUWngt5Y",
  "key44": "64P2325wZ26AdCeduuyx1xuPEWsVsiSU6bbhUpbvGv3VFbEasTVdKPwQXHLgDrirXKvwRQg7dgF3p57GGedNyVPY",
  "key45": "4PsNK9ZtnViSmSB8PGscXBuYJrQqv2D9FW5SS8vRdfNct6pW5zTpKpT4wPtMSzXShgVFKxNwnBDRT1bwNYxYUhhG",
  "key46": "4eEwXbCodYSkJPm99LPmk8pxGgiNMcBLGJYwhQ61VDcBNuGCXbZ1EURF7i84EQxR3LMD3VGuYjBRUWJseM4BijHw",
  "key47": "2ZNCwbp43j4Vz3yEvUvNB2t43Fw88bzCJAt62AfTWtC3NkZQkkLDHQg7FMHgAETf51EkU4XR8UneYCuesaAxaCtH"
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
