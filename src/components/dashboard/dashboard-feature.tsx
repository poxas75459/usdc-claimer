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
    "3gAQJns8UCVhePT4T3DwAqirE3EbcnzKw6vnt6ht7WTUzD6GtQBAWpcqedCKwMK3XbzsaC3DcA8fJrPiXiBjoGRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRReZNMmz4kUxf3uFguzG2rwFP1Ai8wpfT8v2RbkCmp1TRgjZ9PHpfEgkN8cWFVtucSNeCGhocg2ApksnBTnyf7",
  "key1": "74QRFnRGEXTbJ9QSHv9fCvornPWdpfWLpW3Pke1Bf23RUCdNBWhzCRAQoRo4Ft13ojML4DNnF5Ge57Cu6DYjHJ2",
  "key2": "oiGhGf3VdggZhCovNQMhZs1J4CY8VffbRNcS38rrRCWcCUbNMgxfEeoHjJbgtuofpzqgJ4H8iRmSVr1uUJMKGPz",
  "key3": "3w4HYhw8fTB6DvCTfA9Ngpmcffy5Fx9CjnCrzWnNCeioQEhgRUAVa3CSZkjAT7TP5Q1hNCo4ev8aW524n2FSCqUD",
  "key4": "4AUV8fuhfM9uNhodhEEfRaHCkXxWmuhtEsRPYpjn4SJVZ2pcgTtC2aYoegT2jYAEQtHnU2hvi3Vww5eci4hpLatW",
  "key5": "2nWA3ZZWBnriKbHAtgpFqPqJp614xt1xQQ62oa8nur1uvqbMZUHRhRS96Z8yb28g71SbL5WnCRThMMDtdujMPYzz",
  "key6": "J3CCdd44mmsgmmfUGBcgJjktQL3AKXA9rLPYYmyVTcxw1JqVa9dux1YVWmkQzHKaABrhCpBWwJ88vRKWvYgHaX8",
  "key7": "2wwLATWgj6r3qTVYUhdHiCXrPtZAH8SXnp3Az2NZPSfACVTRyZhRh5uGcghtg7jpo1hDeTnQd67GTLS2uwdaPr37",
  "key8": "3TgLAsbmy3sHUnCLYiVEDwCii2nyyE2xaEBcPBRRft21WHaYv7hRPAFLc3Lkiteh8ZF7qUEUSTSbqwKW3TW8Fh8w",
  "key9": "2N5j6Br35grUsYFNU6sSYR7r1YayqYW1yr5F55po8DfY3BtFcs9Ctqi8hQxmSnokfemuvykN2T2f9V1zbB33vDb7",
  "key10": "5Lb5GYUPUEyT8RRhqsuRJ7iasxJniCrpjLzf8KzgAGmr2DG4jnY5nF83vbywkABrQcfjfDrf8yRJZfJ4HS1Wad3q",
  "key11": "5TdJiVJyxcbEMmHbzERWiY4u7FxekZGAdxLszLnPbfCELMpPWSf2uMqrBKKCKEZK58DvQT5qSmTwQeKv1bXWNmgT",
  "key12": "1JFVbq8D9MDr5RoejfNwgT5H491Dr4vGUymhEgsbbmwfGtC9dq8j8JJLVxvyJBTdAPbm8iQSUNip2oN3mMDHp5Q",
  "key13": "46giMuvu8noitYx1T63CHHYDSvT18u81Mpwme1wUTdYggEFN4yb7LRAbmBVCmBqvULzas8pjJgrgrLZeNuWzYeiP",
  "key14": "4ZVYhBSJ4ypQ45gTCcskJJJpojqspZvQM8dyedaYFwuctk1wZZLzmSX1EqSMaeskgmac4hDsRFhtxr3tKHyCYbBh",
  "key15": "4wwftfJ6Fytwfs8UYBmubXtB5HpPzcwkwPf1XHHdAipdpeANWboXhpELbSp7v6V7VhnL9EciwPoX53Ju17KPA3fe",
  "key16": "3BPnm1YkXrtUxCD9Ratwc44NjeyTRaPrCkw4ZCGPuoST69akisTGgZyPdWzJzVuSFKHtmxwajJd6UeRpFY2mG1vj",
  "key17": "fWwT6Q5xyo3g8owotKuMPLL2YoRhC39zwjvNZXPBTG3zsdy8bNVAh6L1MnnJcSw34fGsRA19JAamwYiLJh1b2GN",
  "key18": "3mEWJrYjbS2htizxwodN3WjDP3PouVXsoJNwS2aw1HhmiSwMw1e7P8MdZMS2XRyHewejtxLjcMsdVyi9KoxqWzUe",
  "key19": "254cqNLu691rMysiGmMU9sZMqZLEP2nLeAG6ne4HgmsvcqdhzHikLToT31wZXQCdotCBuRWh13cvd4g6oEKcekF3",
  "key20": "3EhJfaRWxMeQhLsXTo2ZM2RGmEQaJG8oMHSU5nBrq8y96jvqid4TeHM3hdqkp75j4KgFqUVqiGvj7k3KcYVyDRJv",
  "key21": "4NsYjyRtQk1A8YH3PYXpoYDrnuRCnzpraTh85WhXTt11xWHgRAfxTerbMJ3H4W95CR114K8A2e6Ajey8Wec5XKRe",
  "key22": "5vTMxqYbqLMtx6fy4ySBNzPQnZbp1xdbFg3e3s6GjQx21XswymB9jQGDU9Q4RFT1Bw93M89hZSJAKmXQw7ZBpKY6",
  "key23": "4B1hFwCkjzqcjPspJA3W8oV9wF9Bdhvy2u3NAYRGkU4LvTFTiqMhhURCAg7YjdVpcjFhWzDvMxaE6jLzRZD3Ypra",
  "key24": "3BNzfsESCejzqf6yRZawpWM8wANxpLR7ep7QwM5ZSgcDr8uL649TUTBr2dz4Frvnhx99d4dc1SZkUWHMpt2DHvtp",
  "key25": "4JNep8QCsV14j5k24TM7Qmfso2ZtvFbMNMjsPiYwZrFAyekR5HNYJqKfShGrYXVbN1cwPbY6TF83MVYYXLbx2zpU",
  "key26": "39dFWge393kzrSPAMhDAK8kVSrnZ7cY52CyXpemAGqGBRwNS73AMfG5cipUShHFyq6sAPDjsZ7kVRTCT83LDrbwd",
  "key27": "2rZwUunduUuHKkghR1RxwZWHXehGycSoHd1tVXBUs4d5yF1Ts9vocjsEpiFE4jZnysvgwSNrRqh43L1kw42KKNRy",
  "key28": "23aj8Ha9KknhCTU55x3qkBUmPq9RaB6qKBBqLG4sRqzR6vNyQgCpzkze8atPm6iBDKhJTo2Akp7CQuE6gEnjbuj3",
  "key29": "3Ft4xak9brWR4HxDDu4gibHgLdrSTvLG7ERTbVuoCGAvsG7UP6yjzS7FjckjXJ458aKUuCqmpjdzs9ANgvcFPWfp",
  "key30": "5u1Bhezygpd8HW23tj1KB8sVxZsQVMgB5FExPTQzXcnC1RmYgi5K7F1vNdTwTFWShYopKVebZJQLuqzcBqBQxRWs",
  "key31": "5QX73bBu5W4MFgiccnfh3XvtSnskcjdfhGQcB61a1cDLEQrXTrBWzmnWeffhv6rvEZNi361Gr6zTECA1jcvsTy7v",
  "key32": "3HyYuFfJGYgBiwPvgVSfutWnQLGJHKMpQWxZrEcHvKr47nkEFunMUmVwMHjdVzmqcir8WTJBQmLqP5gPg9DLevbz",
  "key33": "4AGDCGphR7K38iGyyeKtqRMYxFMPxYrwXwfAvgpZv518VsWTS24GA9zBvNtJhB8XpwQS9e8eMWe3MLDbytXJid4p",
  "key34": "3S4z338ovNsfuKQ9WLPLrKxF5X2Vzx46xqbtEgTJhAcVdj9nxAM2kgoNXERG92nG5LtnF9LrR8X4P7f4yTQeNwVS",
  "key35": "2oVQLX5DaRoRYfX7mNvRX8TDbXBYTgSHRUvt1CjtPf4Av6ayvVgTT5RK35Em6EGzmibhBGRoCu5n7kZzsyzxxYpq",
  "key36": "5U4wJ31Xkco7Rfv6ns86EZ7Ao4Y9TtbPNWdxHckP1A2DeG5RZX4gJUPSuYSs9SRJQTwCYfdwShXNmz31oyE51vSP",
  "key37": "6xF11B1xWcDysNVBq57QCijx5DAecULzuouhKpuDXmvv114KDiYTMKWLfbPSLmQWXJBovyfyVu2FYaMYiUbnqaE",
  "key38": "57sn5NJkVk6AJMTe8J9XjfT1GkFddtE7Vrg1zvZwzC1DttBxJLcX92qTRxk6YxQsDkgZhqVnugaCymxwjr2HFeKK",
  "key39": "58eov9rPF2edV7EvWjytqmstbw9tu9zVsQivuSYGDS2mbBdkBFmynjVnUTJhXjHaDZYstVgfWvRQeHVUxw7P1q9d",
  "key40": "25oPkkN3U19HmTP3TXCL49UWBGZxr1z2NeJhpa8TbrwERQiYiGL2cCBkvf6ZJDAYjsTvMw1yKiz3VmgzTCrHVPeM",
  "key41": "5XXPyr87fz5BXocwYA8QXT5FZrdGNaCtz3d9GBsYA9ETfe2DbZMboBAzmGVD6eBqovGQBUr6UHfeejevwH7d2SUk",
  "key42": "3PBWSXKBNsbLAFi3Z1ztmPUfRdxkKkRUR3e8LAqXmDpD36Yr66NhzRLfeP1XaD299QukfXNBKMYuUTYqLzvmV4mz",
  "key43": "4kMT81XndECpYrCcpR2Hm6fuZXnbW3QV9vao2nXnTEN4T5bZrgRBd23CNsQMaudgpUaa6dqZoiiKou5uhSAgawrB",
  "key44": "d9v9rrfnM6KkoGensNqqFwpfXjbnLwtyZedV3eEYN3Rp9nBV3Th6g95c8TgR9EEaxVAzTWo1Y2uqve41w4j9RXP",
  "key45": "2ErnLUHVsZxKGL1WXJCX8hyxKXKQEd55FfcUkh4BK95Wrvn2HwQW3hLqboq2XH1sYbPxpkefVv6skxXkMq3i9tGU"
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
