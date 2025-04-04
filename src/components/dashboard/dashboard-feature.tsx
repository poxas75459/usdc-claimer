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
    "5XkZnQAXw7euJeXtMxbNFox5xZfkovBh61x8pSQz3QAdTjZaANBKap7h7MbnnBRPHT1AF5Uv8JmYdG7Ek5QgNAHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tpgkYanUrpt6Zh5X9e44gVA1ixa126ZWPG73yiUeFmetcsXpbSdLV8mvXEApe6NSwxwDVWgAuj7aSY6YVEeNzJk",
  "key1": "548rYNv5i8to1ZkxVwgUdF4FJsJ9YhPrB9jFBC8jSdireyNQXGLhQkqsh387pMWvroydoqzyNmpuwrzSrr5f9BES",
  "key2": "2rvU4qHAPSVRx7V7EuXSzP7KzdCqQA75uzvcA7ZxN57u4UxRBsp2pVnVvyqNRQUK51gpMcBmRibDwM2AaXRuy8Z4",
  "key3": "4xePTpPuYvJN5FWnk9Qn5KfKKbz6LvMdfjeymPCqyY2CPpPZAPAVAnYTU4SNmBoQKerm6cHqXYAtRvYbr6ZSCTFH",
  "key4": "61ht4q4WHXxL7KYUUzaVqQQuk4Bvby4GSQjeD7FWc8cBnqQxCquy9A3keMChmuACkPiire16s4d1XiQZdN5NbRTn",
  "key5": "4qB6wn8vpvubhvpRoyB9fMzRvYTYjmHbcyZjerSpVkL4ZgRa2UAK22G6sFfMk8193WwFiPWFstwvoCu67AyhWhwQ",
  "key6": "cFFaFNDDqunFz3h5TaKzCyQBMR35XhpVavjPbsco4r5ACQb8mTKvJ6swbEidSBuH6QvRbfnnygTrsc1tsQK2nDL",
  "key7": "4fxChtVho65vuvR5EXKbxRBqpdLSWahkVZcqqu8gvARtzchGaN3geW8jZYwJNNnyiXAHp51mxtcgHUEXkqMrgsfq",
  "key8": "4RKRpUMC5p6mVEcNJcsZR9RAs2i8Yyhe6Fe4RS3QKfVVsJz5pgQpggL1fvbUQq8nEwgXXeNsvfYhySVvKerCroCh",
  "key9": "b4e9puFuyJYsYvCtRJ1sPwExFzyesJ1BwpeGtf4yumP4W5cdWAQp3LL8mpbtZd6J2SkMM2JP7VhpFnrhCRfp2Zz",
  "key10": "4m2HCWJZFVGivHhSS41ACchTS4UmB66qVXLFY4tLCYJLBtXW2DV5tYBNXjXZGhvYrwQ9hAfEVc5nLtMbBr8vnSjP",
  "key11": "5J8AGPsi7dvXFyDZncFLQdbhTZFWn1KCQ3AgX1AG6thZ4jnNv4qj5DSwJjtnnnj2wYaheWdV2kUNyCyFrdCyrxem",
  "key12": "4QKd9eJn8Xj6qEET9P7EsT3m6X4jVVyoFmgtMpXHe8648Lr14c3ZyWEq2nkwyK6sKkhzmoyGMfm5ECofR2TS4XQ",
  "key13": "3T7NQHCb1zh2FdpAuvxCL4ZtKLXJMsg22DXm4WsQvB6kS7gyH9r1aoUpLZGk8v3qfPL3QtKPbkKhEBokLmoXLXBX",
  "key14": "wgwZK2z92KYzvos2qxSpkqv9a7CzqqA8eqMBZtvZmTh9hwUy4WD9ZV2XPXw7bUneYEjuTydSLT1FaMQM96Qbcot",
  "key15": "S5dcNJdKypsckSoVXcVCMdAT4pDz4hWDDa6QuujSasEcDWquYnTHBRozG8PWN7dYPpnZSkxkyx3JiqzpNPjc96o",
  "key16": "24E5fH3kvEcuUj8rwhtoiMCyTENVso5F5HFQj5MigKYNxnVB2pi5J7MByKowYEtddpaFYLSrREzbfUn2tpHdDdkx",
  "key17": "59Hx6Hakh2VpGPJDWEBFw8RdDLRgQxZG4hwsmwCj5uGxdeFLiqmPoM9XEAtxGCjPEngXq2z2RDtu41UUQsYXFoWm",
  "key18": "xqE5MPF7SQmrFrvJdrQneqm72zBGxpqh2B1eoQUY1oW9GJusHy4w57gro4jkhxegUhb51qazfzK86bwrUGYveSX",
  "key19": "5R3XCyzErGfLYfFkMh5VmyZryFNS8oc7jM5tC16Cj7EZnSUCa1vpXKDRjdo8kQb5fDGu8N1FB3AgeKzxZiJNZggv",
  "key20": "3oVdH2DPe5J39Z3QmGB15uFgVT9dE8BwLqAKQY29PTBYyZDMPBan4dNp6Jv1XQ9S1RYc7ioYtgWwh6Zv9Rd7Qhm1",
  "key21": "3WuNdzuxTfsoLDAuS3zjzYonSWP1yBMbro1tHAyYiEpoJXnD9sdiVDeZedx3azEWw3c2jCTrdYXZrB96g24h3Asu",
  "key22": "24TG3H1N5VLLboxbEoS6tDjtVwGFMWrnfLN4HBMCCDbEcBsmA6gzUaNnGwgaLngT2PXnhSa1SndqZcKJWkniVm63",
  "key23": "3EgtWJ6puDhKKZiQBkLPgWKkgXkaXA8FwsamGYqsdQofvSkTgwy1du2faUWzXgDvSkfQXBv5TWRFY7UiwbmPwtBJ",
  "key24": "NRdT8NcLTHWW4oXh1ceiom5K2LXHNYeCFWZnQmWkfUzqMGFy4c1ZpsByFXPfjGAMu2ygVRwDtB9comRgrjwpqU9",
  "key25": "sNrCYYYkSn7sbFwNUEBkD7M43FggayJrPeJPMyBbkcsQsqVG1PESvRAj1rNdhcrQLW3s75WBayetSsNQxoUmg53",
  "key26": "43VGiJP2fpGyEQDPSTG4FRKGhUodYt1DF1wLXeSJXMG6DsCaffE3BieFoeywQhoSkGvmWf1gFkUnLsR3qHGg4VzE",
  "key27": "4woogQJrGoWBeBm7nh3BfJ6oNQHKXxDsM7DfwE1gn2mxthKcM6ezAJ4csnarB77xgAGNkR2MEtgYC9uQFKuC2bHK",
  "key28": "5SoixBGaofFctvUthmMDt1WskmYDykUieTjnFzFRDGT4qbxBX4HBUxuHNuhxoBCc4kLzsFKTXsJEs8FM1eVUyuWH",
  "key29": "4RPZXpS6ofo1mLQ3ino9BT9xFZhyCq6oEdhRRFzvGyTKbRrwQG7pf7osQEJ3H11rgPY2u2Uhk1nqZbPqtsMzgxZF",
  "key30": "3cbEgDyoSDDCyzXVdFPJSsSJqajaWMrGHthWFyKnRRv1tdTG8XC6W2WZhhd1TD3m15hHTmcXTBdrCNo75VRKtmDs",
  "key31": "3C6a6f1LvB2JfjqD9svuwebkBKkc3JarbnnoheLVJLz7215ckP19HnPc6epqygJ8pbeQoatggvFaW9n8D5oqnsm8",
  "key32": "3FkKmpnvb1Xd6itUvrbMEQyyu6VVgAxMcQk8h6aVjBdSnQF6YUtkosbBQAMAjFQQWTUucNRD3nQ2WUZNRg2pyiWC",
  "key33": "5BSZjhG5Lto1a2VrPr5f2orXQMcXEvC2YUEnNhpLSJ1zQCWGiVty2BAZr7fXZzmCnsyxKJX4bWwcbjp4KZ31D5x8"
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
