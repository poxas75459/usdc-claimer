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
    "5tsN1TG3kzXrke3zX4ybBiE1WbRW3hdfH5STDwqj26aef14o2eBA5QU3EdMh5vzAMWu8455HcY2uqoyZS9sBUyZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDMjs7TzYsxXbfnagUW6kLGiBmvQAF3qQZrRDtN4XaRiCrekiJQ7dvpNpwLSU5TvwrDFbqWd9HuoAVmuRCWEe7n",
  "key1": "2Y6fEoYw75v1uD3KH72uMF6SChKWSdgSJ9MXtKT2ZugLn9Pz4wU8NBsyHuD2F2kSQqrSAxt2kR9Xh7ubmrZjyv2M",
  "key2": "iJY7QxPPiKshBaR3F1YuzWdLKwfCR4zA46n1eauQ8fpSJewQFRtvWiFwN6KRQXaXW5rLtC3o2gHJ7Lke3VvtxAP",
  "key3": "3VAd5tSMfDs81to7hX9Z6mefPo497FvGc3jvwCJVkp787iStncPyQR6kPSmV4ohY7ESwXDmBNbmqABNHhRJ5rbqK",
  "key4": "26cDTBFkF32vjLa296s4wT5oWuZmGXBtcagQiHYnB2BpmnY2bV6VQipXnEYNWxoKXfjPfYKTEYRQXqt7AT3h76YC",
  "key5": "2FwLGe5zR2uEMn5qS3hCBzQsmuEtspxn377UDZJ29Jrm74C7fnZk6mNDnMdmwAFuGu1W7VGs9gS5J6tnHMT2Le7B",
  "key6": "XQbNcaviXBGu6szR1R1CxHo7tRRahDFxevv3GmEHcnVxSPTFz1tzFHvwS4cAU7p36TXnp6H3E9vRsJzriocygES",
  "key7": "sCCoc9XCFuiP2AitX4QT7LPYqtca1rTQa4uFE43LqvMwFw1EvrYiVywv6MWdJSqnorMpVc9VeREDdfBPRJJJSRC",
  "key8": "2J4B8vp5SkZDpH4WWk3tFQjZNwzfJjUMqoTWafW6nP5vkQ6ifyhHYKZWjP3TksKDvPiDERzTQxfrZXEBaZeC6juK",
  "key9": "4eXU41nu9mntFUebLYfPMAEGh3wrofBTTVUCP9oVhjZrbKVzBneQpMXjuRpYTryNaGLstyaApnPMRXDnHsJVZHyk",
  "key10": "2ZSHDBW8aRyUT91xLQJqWVTY8t4fZvoZHtM6V4oi1tCwFGN9TbtVNRf6MdoxgHii6fyp7bojfbS7uvRchGDVwjKv",
  "key11": "4Z5HVo1aVxPy4V7m3xkXL8D4xECTEvUZNHDkuUUYC2BDBTiFhCZVB5LPpu85nofVS2c4wxjWkny2tCCU5nAaAvBJ",
  "key12": "4KFYVr5amRuU3TVDYdyi7GsaSQd82MhJrsehATnunavMoPhEh6oaxs6Uo4T65KjuB9MYqiWnN9cQk7niyuV6pzro",
  "key13": "2aXDDUk5vk7DUWKLxe4X24TR2fuSHeCm6vqa7nZDuNagKvPd3e3pZSkHTSQnEDHQ8Gdcr7epAH2Lf6NijLYPZRCe",
  "key14": "2vc4kFGd1qY6B5DMaoEyVbDAYH4La4i1oub1C1hXu6k32KeTaRWoxp8c77W551sig1cQUBJhjzfpZhcCF2Ks85q7",
  "key15": "3rp52PtTU7eHGf7TzDAZFkBu3Mq9CsHMwjoetpDutAWAy6rujs6q7SHz5WzJgXa8yocZEppkUYiiVtSX7cpnEQ8f",
  "key16": "nU4VDEwKGh9fvteBQQMk5LfQ5bjYapBCtVggXDsts6XPm4UqzfABuWcQGHZ99qbMkns5vnGpiBBwbDUL8x5LU8B",
  "key17": "qBEALarhbUj69iKCmuRTkShjnSntbe9wqxEQLCBZQF8dawxKpfB7uSFcASywXHnRv2cpNCzqnvtgGJia3SE9d9u",
  "key18": "4yidmQ4RSXTnEKLNfzhjYJoWEbeW9tMjRLpSFjALSfDLZZzUjsQk6vQdMhNurycqV4byoEjZa85UU6XsJqLk9ozS",
  "key19": "5RN7ajozUSDnFxPAvkwERByMcqHXWHJvCyLWkGZGvzsfdE3oDrjpr1uhBJCQS5DiNdRuqSy5aKVam6zGfmLwJGMf",
  "key20": "7YAVAeQsf8M4BRBRVfYd4cB6eBvcuegPYsmxNJEYa3q2FxB3poYg8nw3d3R3SK6H6UiLSxj8dJw4GczFACM3p3P",
  "key21": "2N4heifhiEm63mcv4JzUirRD2HRPVP7GJsFBXVtHEKwMQw88fAExonMedseBv95qjJzQ6KabUsfRVc8a1MXTn2mQ",
  "key22": "5fEVzpRQgrdD4QrxNu59j4GPAWKqnUdnjjC3o8adfmSwRjoErjexwSfL4xVXV9WgAUdNiikMAYGPEeWnZPrrVLDG",
  "key23": "5YZkmEAXcKTqMDENyc2NM1AxsrCZPmzQqeoCKWMMHqG2JDvQgc9ebCa43N7ZAGF4FpWnLpS26WtJsftiYJvResAt",
  "key24": "48BFUVaJEFyQcqXuM77psBiaUGnF9VbrfTfGyz5TWCPfXrwamKX8MYzRoPF8f4UZM6zPUUeL1VjzB24BqS7UabfW",
  "key25": "3Un3s7VR7ErbqG5s7x5ew1YY1SHF15qmKTPE8UwUBxqM8QKdjrs3TLQCnNcEyBhHJHtkbZKWBSxFKQjw45XWDGge",
  "key26": "4UYojqoB1upnuTAHenMysKo4L3dVPGHrLPnVvMYSbSVVuxoM22Frm1kuxrppUrdaeJ4XgamYH6qmWNYvAmU846Zc",
  "key27": "3jLZwPzcBxd3cEc6T5UtPSvxWXjyVZDbnB6BjTCQiTGyF5eYVsonKHghP4gPQfPwo91XY5MtYC3zfjw1xLW56TXA",
  "key28": "5DPrUY6TFmNyTLDh5NCqzTG5HYEBeFi6xgvEaHsd4xMzifZeVi32ZR4aB5fczeVR4PfRm5EFQjH8StLg6akk6VGa",
  "key29": "4Emb96aYVG98DdJ3GJaTnqarYcW2t6gqTXmRDxkvfQiRwFPgXyzUDZR87MjMEgjCAisXrZTsNgRd7DkSBj54BG1X",
  "key30": "WMvia1LCDctvHnGR78RMHXdAM8a6fbeigamq1DFL1ZpcUwCgUBDoA1w2iTPXHSuEJsnKUyshLhfCJRuxxRbi4fK",
  "key31": "DmXGKZFCvuM9HudWzi1nNZiwRdyPLfAV5XMQmVEpnW1Rz4BoMNZRxMf3tnb7bjzdzaokjDWTT2XFb4TicCzmB7e",
  "key32": "3noTpBiuKbZFpge5sT4wf8h4jBYNQTvq8RXZCGQc43V1ns4QYYdPVLffsxfpEGbwj1za6isFAB7zzRhoYi4MFxUX",
  "key33": "5t9JQReyjc27HA5aGu1jky8qRq67mh8TzFYHTVxm51YGdLE6NUfs8CbruKVH6seEbkY5CUEB63ErQ9SaVcY1x17v",
  "key34": "3F7uG6s9FPhGrwAU9hvjtJQS3qw11nCFihUT85YExwyWkwgPB8Xcc6iUhr5eD8zBqqMcML5t4RZ73EMexZdgNqqN",
  "key35": "2W6kSaZ4VgjpYuhpB69AwF7aKAyTaLCGcMwHtDfh7Joc7MxH3bPE2jbomVxmj9w4UWeY3SWqaJJHLNQddVkdL6ZF",
  "key36": "659jW2ZJF6KCAGduAmPoz3tx9593VZ4jVA5DBrExidFp877KqQavvGiGi2d3ADuKcHpTVcV5rQukH1VVVdWngy84",
  "key37": "cMDyVaPBJB1mPSxY1XbTCv2LRp7eZvieGN7u5zExXdtUb9Ghqo4DYGUfr3vtGKonHtHZqyzJVkfJU6F89bEe1P5",
  "key38": "oDuEnKMYMrb5Qd42EazL1SyPVJuSSKkQpVBvbJ2bmEZ8c5fJd6HNwbE48KaKGkZnAs7BFxhaP4d68cxtTq8EBbD",
  "key39": "3cVW7tGpYBMtcKEqnrZa2rRU3zHJeEgayCi5amsbxyaYLzAic1JxzLcBswGfQ5Au7RNYL4ztfQRULpEg6HFV1PWa",
  "key40": "ugjHHvsCvwi75ZkmJGRXDqMfqVaiP7imJ8EmTow3PfjgLP5CvhDtw4RnezKLphTakhf47jXeoaQV6d3trFSvwMf",
  "key41": "3mzmfcKaarkmqSosaNXSKBpZqTsTymyWaAqX53MrRSXjzx3ex21cwcybjaZZbRqSUYDp7KpbfkUxz9UMNEkXMXNF",
  "key42": "39xTsqX6sewBoR61eCeuYmDwGs2iGZ6khLkeRA4rehjZmX2sLyhvgGtcEWAUu4rz9j8mndRZm3VRhfs3tyJz2uq8",
  "key43": "5Bh3xtWBJGkk8ZsHtezQZzhW3U5zu6YVLPrxmCMsHNWXBUDkRcirFdNuoJKwoeiSQNLRe4183cz2uPjiPawED2wc"
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
