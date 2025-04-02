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
    "4Up3cNUqgonx8BXvoqNReFxnA4M9aHcQNVabvKgNQhei1xiJJDm6RD6fhEZcHkuCNVpktbWL3r6zTWswWWsWjacD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AHy71aMGbvjWGkawAMQyU9j8ERrJ29L3AGRMFCZzvzYPMDDW2hNF7n5zLZZ6pXfaBhNfgn9bEmvqTWBi9waptc",
  "key1": "PYYgoJSp5eHsejNLLNp6bLkDHmDLoLqnFJbfW3xieC6Jc4WPczeYcTZWYgu3WTHwVbF82an5PNGznJZrrBZADTd",
  "key2": "vXdKEn1F89aZaThC1GB8L7qrAv1TBs4bj1fR1D17uov2KqKTCGp9NMGYcCsXnJNngBxpLpkcaPiRZf1TqrK9qUw",
  "key3": "25AN9JFUsX66hxEHbMUSyqHGmFaDz1dSVrz92EKVPCRLEgJ6qzCCviwGB7xCYKo9Ngk38BTyCeKt9dsmp3d7kLJF",
  "key4": "udERoEcSYE48xLV4am9qZaXnJ8DzebuEm8jtuKjpLNL3mA3htehXZnivWEztTQJVzfGDNPmJMa8Fa5wPD15FXsg",
  "key5": "4oAZmmuxcDFG5qfEVF7QnPB2bsSNWQo6o8KVdt7LbxsfF4phqNcX5fgw77aYFkZfqGCw49ULcsx6pM7P9baD6L8m",
  "key6": "2em1pGF35JnA6mGJbMaHFuHQZU34RGqUX7aXMpLZU8qcaiykcYAd1nStqTQXssfeThKVAUyLQU9b1YoJqdtbb8Db",
  "key7": "5nhe4SE3pzTKW3EUVbs1vGoeHhxRJG5MqXiPF3pJsQBbaRSHynd6WsXbsQePpKhhvJB6kZMwtuCuc3wkS7mw16Vj",
  "key8": "2KLu2HGDzHzGc4eYsuC1j2vvDAkp7hrmmw53J7Lu9pVsZKjh4HXMso2oJaf4f3AWXKhoNAdAihstzVY8WgBFN7Vy",
  "key9": "5npsFT6sfUYhRMPS1KDwsc5YenLv3f14viYAddXDpncobKvEX1AaYtFwvwfEmVdtCdeJPP6Cfs68DjXcLKX1zTQq",
  "key10": "4ZJGdg2BkFCmqysL87BRHpWCUVRPiVQkdNhfCBuoWU4CK1FC8Wx1XfsbAJxdf7FRxkUQKDwUYvoN3j8r4hoD5CmV",
  "key11": "4UrWTUawPN7ymwFELqc6GMvS9iP6MxT8qvfhrenTAPexrMKF3ms8BxisCJQabuzw324prN4nc4ADYs5Nc3zRWp1E",
  "key12": "4iFq53nCfkdaWap8VERyt4gPBrMVQTEvCcTe4RFkKUXxwbsxEYLhFy8faKg62NfARHRgSHevvJAYPPMxt4K9Bvxb",
  "key13": "4bQQqFrvLyziUzY3j8YZYknELceLMWERfx343wzUHktkXZ9QWMqsNCPdyECmpchFuLDuUm69AGdxUsBxQ5ijbwXv",
  "key14": "2ht2CN34NuYcSzaNSuXyGPjNJBSoJfE77T5td4inbeeXr4xRMfGXkT2Lp9CZBgWTUmVHrwjBwCan3SykWkLVUnBT",
  "key15": "5CbSHUQLgkAz2P93fnf6jnBc1Hm6Nc8tdntto4m5412JcuRNf7w8cNhkLJzbGpRF2t8mNu4m9beyLS79Qh4m8Ged",
  "key16": "3okDhmHgJ6V8Drr4fgrJq81EtA743xS9Py4VvweTL3fDsdRJkYXZPHZbVXRHYnP46gxsTxCLBgAUfMHNiCtibGyi",
  "key17": "WJMSwaZuJr4Q6CCeBkLxijsCNF64wtpmQqEs9PyNnGakb4Z7vG3AorcKgZSVyMwEV4ns7WeqNLYmAKRqQASWSoL",
  "key18": "4iBGRHASv3nPonXnVrkqwzPjpZzvuqnb2MPiEjy7o7z8stPbX7jzKbghVgHExZbAxDvYwRTVZgwRuL5uA7xFuFK9",
  "key19": "3eFwpUKrAC69Zdo9YKLBdqQy52gUjMLPb9gbEbtgi4YzH7GWeRPhTjgCVrFNkvRQZms5Pu9Hfz6y3NvNGPYCgfwp",
  "key20": "4FP4Tzgh3eSRJ45JfPcn5J4k19JBUXp7WT3Fr4oP395ejJjXzQuctmUENvswZbQ7ip5qdEfGs9iniDYsxsRxgdPD",
  "key21": "PQeXo58Nr9UMpJ6Qaf6Hu8gQFBzH61VLubGRGFVcTdf2HzmPijhcnYDDapYPUwFgd4Sz1qUG2fJcoWDFiqt5FSF",
  "key22": "2fRriE1gxSNq2cKn1SsSunruEEfAmWrf2fDpUo3gstiAdZXvKmmUnBCr3r9dW3D1Xqhr7t7pQp5Yfh2voSFjgdLi",
  "key23": "591adSFwqXgWeKt7utun65jXM1tRPdiYseNDBSLpyEw4HeASABYtQXdmhwey7kpZ7vCNCBmpyQbQhEQTFdKcnJob",
  "key24": "4mTeE6jXcVCuu84yqVYwAywRnBx3UVBrmygCgYcy19cDeN5Wh5FNnrz5mxjsfjRy8XDmQeqHEDhtfE8YSSk5AnaC",
  "key25": "49YQc4BspbKbqGJqQJVGK85KFRzcikmudEdJ14rQ2KBUrfdY1SGpJ31wskXwT5hehbcYAxRD2VuR2P55LBEV3Zi7",
  "key26": "22tR6jgjD4qyyiVStssCFXvnLrY2N2SHjmMy44j9Vyg1uCjsiUq3Fr8cdyWJw71kTMTGQPHqPRbmwgr5kQWf5fy6",
  "key27": "5JgN49DYNG3mVxDVF6euBuAnQUKPhTuRerpFnnaD13rC5vG3HCMcUf2cLUbDat8VjnhWdYWYdR4DKpVUoUx3U1vb",
  "key28": "57QSDaCyMdT5KFLcLCF6jedQdgUuYL9FcsWB8MsajWPTTycgq4PFa4wT7EWp19q8K5nTJRFnuLKnNA8wztrFK6uC",
  "key29": "5YLRy3Ni45LnA4LnsUsBbEkP91STAGYDmnBz24MugXnZpqzdjrnuAMkvZrCNkWyQi65kxoPJrdZKN4wxHZ8nbeNg",
  "key30": "MNjjUXnk7kFytieeJN5W22GjVeoV8EssU4dz9crj5AEzYto8Noa9r3ma4DhPayFjB9hSApomoCcKSf1xgLcoSCX",
  "key31": "2DUceQs7SCSddjuupjgYSESeaZKm2wb34WsBHQNSVLE9pw5Jd8Lz1jcbf12RYiUCQDxfmu7NDqeNd3QphLq4hMf5",
  "key32": "3kyhkdrg36XMtLa74nsNwZJg9XKTD45TTTtX7b7DcEi3TA3KEdQNwkupfGMCP7HfCDEwhmjvi5JorXBBz3oS29yL",
  "key33": "GUrsyPF3sfdUHxVfXtD1E4hkjgjiHmwzBt2B8U8L75ZMzyoNeAjS1RSJxB3UnsdkEiRS8u18JbcZU65Mp5gwmFL",
  "key34": "3qpnmResU4j58wvY6L9nfYwBAcamMcGKm86KSg9TGHhXBEyPELZ9BCF4YhwDueKaCi9MwuvFfiyAekTd7WYeHmsk",
  "key35": "2RBxBuKoEZAAjpVHJ9g2HmWBBhip2pzuJX3d5aZYWPFu2NTk63rFxQiN1yJncd8PngCZ45JxNDyXwmdDZPPYEzUy",
  "key36": "2k3F1atBSkzfcMrEG1gnmhXp2T3r4eqYndAqmt1EbtbWRaq3B1anyf3zXQYtViwJnudXL3aCM5qvRkzrua5TMnNC",
  "key37": "3XMVaArwWf44A7BUuhSyiZCxX1ZPoBvUfvKmXgsRAhm5SUxZRq4cXtNExwUoYTgTLrw41S7oRcZHkX7b5b7eQcBR",
  "key38": "4GcgjBWjZcVAduynvYD9cRLn674dgKgvQn8RV9SnqrjW15dTS77D41V9K8E7j7aYmKR52YAG4F96jHPDQStk58ri",
  "key39": "5FiXaxbF1Suq48sNzsFWgQTuG9VpissdnmrCdDj9z6WweMctvRyLxDmY4UgXhzuyev7FrbTXLL7aA4TmU1wUb9NU",
  "key40": "5ke9FCsvGrPNi9ZDiDG3eTars5ucTHZcEFdsfzRaJycQHP39w525SLYAdmYrCCQq5SfxoytnTtptg8Sqra5FuutE",
  "key41": "vkJBntKpJaM6n2fTXbDpxcWeYehWuLSZfcpBoMyND1FEcPQ5zY9gjc3HXazp8tdHH69EGuTr4gTGtaz3w3YSL9t",
  "key42": "3svQGtQtspJpxWFyUUCBgi74PDkTeSqaUzJkRTC4Lixp1C9QvLycrHfVMJSRopgaQGgHUbBW4MkunjFrrQYNdsrh",
  "key43": "2rfGu2meYPJhQiK222AZYkyLMEBJYicVhsbHzTUG6N9kaWWLbT9RDtHUB8vaPMMmo2ThyeygLMuAsaQnx1Ga33DF",
  "key44": "3As5DwEAiFRQLnVNESEd9h4yvcjgGUD7o4xR6PDQw3CDJ1ZNEk3JnpzZUbHx7yitD26dxBKF7rKQ6Vu5v6L9G28F",
  "key45": "5bs9HTesThwadFqULQEY5RNZCzJ1igbv5avz2Y9oJP9H95wmfETqupjRqyXYYSqCQwwioN9E6S9vATZ1fj8CQf5L",
  "key46": "47YmjmxcMpk1UPj3TDJTh8CbmVqWh31SnGRrkRtc3eT4MdyFVrEJ7JDivzqsTzP1Fggnsebt3HVKqjxcjQiXe5Nv"
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
