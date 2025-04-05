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
    "5axDUZNWvuUGRtBnBRVGrCKqCB4gM6fppVu9Q7HeeUStryC6Sx5jMcYv9jaZbHtyweHCsuE3hKKj64TuYpSFdBuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RopUYiityXNYTrP9tQXM2c5uw6T7P8h7rMfkUNeSyYsf8Rdzf32Q42CHhpif8AN36v3GsZ4KrsMxxbLGAw7Zi8y",
  "key1": "45G7NbvjJNqLsThLtqpyZPmRCrvkvHqkMg1abfysW6uT5tZFTf3cfibrNEjjGeFUQbvcS4aLxzowcQwYQ6uzLucv",
  "key2": "4tN8DBtETF1PrAkkSjWrpCqbkDfBZE3AjE9Qm6P4jEG5nJTBasAZ5y31XDjU6cQzU9fTiRGnQU7jwgKL2ea5iQ3w",
  "key3": "3dczBxT16wSotvxrgDRGyfajXJJJ6vjqxZT5pYBxSryEJo1SHid93DaYi6xvYCokwprH7zNEVZBG93mRENqaKXpW",
  "key4": "4G1aaGrTsMCe5p6fnAtbTPHJVJermiZwR4Rur4LYjysGSyMBxXpmKvPxXSWNWi7LperunKMkt9mPZR1ezY87pJoK",
  "key5": "3HRvm59ZjRjvBtzN1WDj8JYx3Eeh3pSijBRRqR89MA9pBtCVgGKupbPBbwMkuc4PVAu6wj9CfkPjLSuGEPwainTN",
  "key6": "5xFoYmQX27w9A76XrRsvycc6k8V98CsGbg3LyKSRkWr5c5ToFtuY8ZjXR1j44yA7wfWhxWaGcrvjon5ka6pW6waU",
  "key7": "2Mp24wTe6wjtQXYGF8EHecZEEe3MUfNxUV8xDeYJytt8eanABcQYu7xj8Pv9qjcuogcAR4FKvz8fPjtTRxhgt2um",
  "key8": "5kfiWwcUKfqzHJ1huayGd3YeBoeXUHCNACSEjSBsGXvsgeQTFRb4KPHppxtYw1srYxtYxGbMggBhYEsEo4sJsReb",
  "key9": "564FmTzLqPSDQQ89ookTS2g2FwSVTvgcz4yMUSz8hRMqA6Vf8SMmz8DkgrFpBhqKeLAV4jXTYoRnGbw93kYE7yy2",
  "key10": "3zj9apth8TCiFTf9uHuiLP6viZNY2XziY4zVcArZvRkTUteYKn8X5aqbCbeDQg1m36nXgfKLNU8jiJqkDfRbQtec",
  "key11": "PVuVE8ot5o1BPoq5goZWT9y5MVbaF8V3SvqUL79UYGnfQJHRpc3D8EmXyz141XX79aoVEc55n93ih4RJ3EBQVSW",
  "key12": "432S96ahg8yqCiMt5r1j2uBckSHtThJhKt1MByXyqkA8FnwgHRmGVCBWSWqTpLrkKyLtH7hEqwkFrLUUjj1t36UU",
  "key13": "2psBJrzqqK9PADw2DJbVzr2fo6daP2YS44z9oyh92dSV6KkSWe3aKFTpqyMsrr76Xpz2PHTFDonrXtkTAzEqDEN4",
  "key14": "4Ub2QScvjF51f2jxiL6Kkjkm4JHmyQU87dihBw7KFFfAKUnudBJosrzWHDBqeCndAqLbFoYJEmUNr28hjdyxk8DL",
  "key15": "4rUEmFWmUe6SxmpNESuErV9sUvFTw8KF2ottoxWa6RV1kmfM68kaK6RomxZ9i7jVr7sLMSANsxzExZc9ZjUHo7Hm",
  "key16": "2Yw3SDhpv9qY8oU3cHzH2AaGfQ6V64b1XtKyW3fWkP8N2XuQj5FNoyHFo4W6b2qooB3ghjtd5D8fTmsK1ekigEa9",
  "key17": "5ertL7sCsBHegGkKGQhmu3sBwzXUf2qbfPLmUfuxyFYKTpX2wzuBJSg6ugDcMJspQcK3bkkoo5TSooNwyfuWVFj5",
  "key18": "5tMZPDVCCamRtxSUaHFjmkQDoKWVGL3z9BbmcpMNVZxVTiMjJBuo8Crcqm7Wt7nVeawm4a3rPYsssH2Nr17JeEEx",
  "key19": "3FiCEU59G9bH5qbKBLzRR5W13kXpdciDbgnw4zYJUjSLLHi8k4ahBKzurZQMV6JKDgyqQufwhkVwZyNfQuJTLb7L",
  "key20": "4PrqJzfZfigXEDZhjVTk6QmhQYmxqCPRKuhNbqFJEyQuVS5gWJ6JiTUqsAMNE3c66siqUZKrdjPwEGn4z1rcqQ1h",
  "key21": "H3Nw2uhi8G7eBxFQrnSUg1oPkUSK1GrTpcZDE9wQQ99XmfjTa5ufiLwyZJrTe6sD6PDAooxRQBaUDdFRTnPCAEP",
  "key22": "2LDM8v4GRSXF2VJbPwzcGUYqAPiBgKY4KGED4LEHE2s8kdRDocukL3CGTLtbPHucXzGLH1HVGZkM4RVoqU4vUeSo",
  "key23": "5BTtvkwPbdQsau7jYAStmHoJcDGDvEUB4SKCR8RZYtX8EwSapNfQZFJtzRizEYc9MGe4bizmBYuHQMQWsyCwYSvb",
  "key24": "2aRRAT6osS6aVcT89JXPg11JFRcXqTcyBsgnfV5G86LFs1tHWe6aVXAnt3YUFyRaknJNMArWz6Di3CahvG9ommrs",
  "key25": "66A89Kj4mL4enGMiGLutJYchvwfahYHMyd4YSqFvfoHuinq7pvdrU1gmQHD6aZJaYjQCfMzj1tkGeqFsNCPwjyWE",
  "key26": "3mTDFXJWyvxEtTMcsHEA7W3XnXieYXhTSzUeQJWBzaAXrZUPboGp1JqwUm2hvetvpKvedAZ5eZkn6ep9GQ53E9Dc",
  "key27": "4zHZJZi4iPNymhECrSXZaZi7WWLsSKdSBCrxnzTFXSvebhcxky659Q8iEqW4XAYdwG8xvPtiH1A79bEH1Czg1ZQ",
  "key28": "4jxsJKsPnLqvf7QZCXZossKxJugKM8pm4MrtVG6NpwJ25ebGSHS5puaR1cDa7q113dVkafTZsyRiX6xLHdwfEfYe",
  "key29": "3MRj5RT5GThYHUz1Lyen5aPJ8pMPFaP3vcuHMwja7efgD6CXgJUwWrH8oga13xnDmHgMYBMxU9oqwP28BrKvarm3",
  "key30": "jTDrXR8HFU3XXCLVBHbCh6p97uWCqU6mJXLTxai6zfaXstLSKWCvQoshs5y98MveBYkDfGFccqeh5T4Ty8DWroP",
  "key31": "4YYXPnRTRR3FparTQkbNgBbhhk25Hpej23Pn44CDUNyRW2bWAHsfLUnBcas8ZvwhzP3Eg6AKLFbrhpYdqUC4XdPb",
  "key32": "5G6cqxyp9KqrFmRGPqSdMKzZcFg6uzS46YnVpXSnWjW88UNnFbgVd7trYtRu1S4u7HrCDpFwc37FHarse1YbSMJS",
  "key33": "2U8VyZ7taKpitTVB45Gt8NpaTRrXmJCgPBco6BnqpgWLuxqGygE826zn37ofD7zfsZcaDCfAqTvLZNsL4cwUJzS1",
  "key34": "3qHUNNBVaKx9xYKXenyKP7hU1urCDwGKS8ZdqdJPAhMeuwk36Rdpb2hkPEoufYrpqqiCccad4XhqmrByHFhmHvh2",
  "key35": "4geuhSqzEmPoawSddiKnmPqCmcohZuLwKwf9rWyHrwSgvoC5ppLiCNtxsSw5pxERhsYA8d25oNLcZpeToNxK8bgB",
  "key36": "2tMPiUqMoGX9ZAB3458bFHRYC3EbCHiuTHC2r8N7PsF8eWc8vqAgkkuavbv8PQ3oTyJHi39dz9pvGNhkGLS83MCA",
  "key37": "BPou6VQNdq4pPTSyazvt7QmFPabGoJWySPFT3qvpTdyd95e2mngS6GXY8n2ooJCrFFRcsKjbZgFR8oGiTBNtwF5",
  "key38": "5Eo5ma3UXESXkD8v3MS9f9TbXsJsunRsrDsM34B8CqLzMvPtkYucvhde16RPrvjGKgsoNhEYuepGRtkBjHu2yBXb",
  "key39": "2eaA4nbM54GBBVNjXYyjePKBKrpw7y5YwxdiL8FWHyAQAz62PAv6oLRtqsxzP5qeqgTq8554pNK55iEqQ5RvVpvT"
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
