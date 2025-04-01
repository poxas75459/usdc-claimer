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
    "2hwfAoFYnLQJ8B5cgNVzjyafgq9dEawHjeHamoKAn6ux7jQQyxk3ozApV2yfEzqjbFN1TtXDR92gfx2GouwZh2e9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zqrT4R4c1SsdG1cBcFBsbUBNZUudU3EJtTJeWoFQaeVxYMWbSx1c8XZ8NTpBtryZ5h3jFgjiev3GouG2enNJNow",
  "key1": "27JKkMociegogfM94KiMw1NYoKYgBqc4Kt9qq9ZFEv1cktYP7oHQXRzAhEvMfoAQ8Uza6jN7vYuqUN3hBZuEspLD",
  "key2": "3gbvQ3tWBNaPdRQ7ZeaRqyHp7eX4vhgEVNFiKY93r71cerbjWnaLJJoBW3Q1b6RW6E4DhAZ5rL3N8Zf8QtY68MVz",
  "key3": "3SQ6sbKuB99zs6vwkUVAgmp6WseT2sszM3dczFnJspReJMKRBXcF9zVNPE2gzipBWWzfA9erQdtiPSbDJHu6J2SU",
  "key4": "56SYpYW1bEsstwP9oC5Yi4j5AZ7x6Va767kQQjm4DrQqSvnP81xX2NxrH9Yik7ahaKqtKUkWFw1QW1Khg6AxcBTE",
  "key5": "uTKnSmyndnkC7JGNSz7nYT6ErqRbEc1Cu31KikX4wfkyxA2mR7YUtzenWi1VtTFm58JvakoVpbEjadKrmSe5xi8",
  "key6": "4ezWnrhkH3wkFnJWBZZfC3p8J4VtEe1C9sqvNvbi1BT8fK8APgVPA3Ey7WaztmmtpVf595JZsRvmXWFWkwiG5JoR",
  "key7": "2G8LhqZ5LVjHx2QxMRbPFC1Y9i8vYLw6iU2LQGU2izP3aQNQmFJmxCSCbddAraosrLRwvLBAdxo6rAfwsvR1iyoB",
  "key8": "2pzvD2piMiyu3em7EY7iaLgJxn8H6WojN44ZkvVLRY4vJcswe5NBSNxDDJgPKF7Yzf8TC721YupDPbY8rKGLojVg",
  "key9": "2sR3bmAhYtE6dTtgKf2jW73mDB2EdDZRxaV5wBkbrADamyb8ee7xssiNgCKHmhV71iWixECcccWm71H6Mdhwgsoe",
  "key10": "3XKGyZ7qFZhueCk2Kw5FHjDTs8AxHCodakxpJ24Pq3JpYi8SjKxxNta8SnhtEbPV8Q3o13rPVSZHJBqWK97crCcY",
  "key11": "5LMZCEBJhmGv81RS3eb6rf9yWyeCXH5t1CuZm5PnFVGqiCAEyzJrBZhNejzAqTJggtCa8WxF9eHumvQVSJTuPeoh",
  "key12": "4vZEkEhfMHRZoi51rjk3hkZKx78JeBFUhMPQhAnMWwxqT72e7hir2SiY2ZUDiTU5FrcMCRaPgCkxKw7UwicinUeU",
  "key13": "3ZyhxAiwpBfkKYPAr7DBVGSg1x4yZK56U2EEZYsEd5acnrTuqU2JLtsScmYThRPkzqaGGni97N9irp4mbJW6mbAX",
  "key14": "2kyFJvEjCKX9zUzfik8yp5xYKdVFugovGQr7fQwQkHHosxhggZHFohrDHBtdemgRhgk6mqhTSEPtHzDopoM59Z93",
  "key15": "oyUw4vDLbPcY2JRJJDNNBGDQAjLZteAp31D7SHTnfgE9Lp2j4bTJzbWANEpRJuVKpm2GkNEt9PkotnaMqiFrvTb",
  "key16": "2ecTE5kAaUb38tbC8MbPcRgEPYXUtEQoLcokfsmBziUuPW9WsMNgQQYfDnA96LVkzX69sBSHRBXBJav7QFJnjyDT",
  "key17": "5iQncBJLc7mfTBPsV1x9P2QcYLLtyRnEBvpv6fq9PKNvxfyJ6rjqeenoyJM6BqjCqsSEwnMrjCa3RomEipbE1J46",
  "key18": "436ayJNFTfNnfPvGFXmGwiw5VXCcUUPKYTyXdsDMU73KhezFciLjq28QztLyBfpA8DiszwykEcwkpstmgigjMvW6",
  "key19": "4U3FP1jyEzjnppwN6r4Ay1EehxgwbWsm9qkvvPP1nZiiiHFuARuUF5u3jjsdiNRyL4eLyWWypz93eAFMFVLWKz8g",
  "key20": "4XUTNMEb6FoQZqsbJTEjzMSjEgPpizTXkQe8vrCbAtQSmV8B8DchiKnJGuzEbanNqGsdXiJv18oJ4LQ4azh96nU3",
  "key21": "2pMJQJKmvb3Y5bHQXp3rmGHcoUxzp5CBWBsK2HU6dZf1Xj9Q13moqSyu43iTgz1B7yDji7EJGL9VFwnqh24Jy4M7",
  "key22": "4M3wEC8o26YkE2PneEi28Jmeh8o1jmMafzDUmx38dWmwC4qzhCodYgS8iWFKgjg9Q2Y3ukxeS7n9EQC7PPqeXqed",
  "key23": "64mFTiPJ4tnudp2srCbhvNk2AxCuMXJFUtYVywoDvDZy7rdGf72N6GYSaAbrQXnFWijW4qRsxXa1FaAb3kAdAEXr",
  "key24": "58Tu6qivNdKPAYe61WiZh3wpmGhJ237F2VGfNqmXM4KbERnjy2fNeMYWzsC7uFqYVBk6iYbWozSoJ7MB8HFHjiVt",
  "key25": "2Ug7HF7oCT1YXTACB4GE2qEhiFeUpeLMYK6w2NerKr4XoMuFjZ2hUCN8tqRL6cPfi87XNXDeZgNom7mTgVSKokF8",
  "key26": "342QYVignwREgkbf3tnVz7V3Zh3JxDKRkAYwWUmt2rxhCnzRxpJazrQf7gY9fwK4MTGT9SD9qRwntMKUgDRKnajx",
  "key27": "62rwxExoY4GTZm62bK2Gu8cA2MLnDoczHs9dEZAEtFseAASeSrCEMU2ejWpEcdzxRqCB6WZ8mpAzGSE36AS8Yqfn",
  "key28": "4KCEcKPncrSMYTw9tYKujSpdKYWWdyAPwcpvUsfFDpZ5kbMqKXzqwcrskk2boc5bGhtK3d76Pf73CYhSaLKK9JYV",
  "key29": "255tsftDBCjnwD8gcw1mmGmBX9ruKvp2kvUN98GAb4jb5vWUmwxWnPXgiGApUcA1My1rJggvqaofpmkG1HwTbaeR",
  "key30": "2a4HY6qWKkKE68eCWnFsJVvhVU71v2YU9VYgx98y9Hbet1yb1dDj5DA1qechhFpbWvXjTvDkrsabW5itYhUhgWnh",
  "key31": "57qbW4j9XaT4ce4wiRE1HcVbPtYmjGLgEbEVffkN8BSf24mWpKjaoQGQNNxbjm7gZJkcpnYx7JbF5mSXMutmmUCQ",
  "key32": "5PvKaC2wNBPupBfJy7Et8aEwYnSduBiwuFXmdvxvrSVx5CVsYiAuNbaYqX4mfXJK7jyeoW8XkkLiPs2CSPP8ttFX",
  "key33": "D9PiviqWjqPvoF4nYEDqacJptWUNWaZTKAH5vuvLGbQPekfdNqG1bKWZnUtU9XrhMeVNCvrvxykfkJPop3FhvEa",
  "key34": "5Pav52UX8ttcrD9s6gBTEf6RmcYmFFAhnHT1UbXLZTg7ar9RhMEbVHJyRFWeGNXzoUtGr2sKsbbFS5TmcCz16a2k",
  "key35": "w4FuJ4pBjTwJAQEnq14TA99qEdEF3nBTTXM2nemXmeNtSWHn5wpFPzvY6wPwL4BiDCCvzAChmYcfThsg2v4EXcC",
  "key36": "waAncFeijDJRTUyHKJF963fdZuQ9ZKex2Bzu6hGq6Yk8zYsAKTh7wb5kbHSucA9AeZQnVW7NPwWdh2Q4n3DtXRM",
  "key37": "5a1CRdUGfqiRkUXKxp3ZwtduVXCTmRjg2sUMAziz7JF5VxRciM56R2LikmqofzidCtsMSy8JNLA6utXyKyygopbo",
  "key38": "3AnUKWxyjopQ1nw8RP4KDAyxBSUeiz6f9aWrLuR9SsnyBj4chHLbr1jFh1u9kTwVKDAZgLXCfhxzPBEgtpNhCn6z",
  "key39": "5eWDM5UB2L3EKDNNoCwkTi72D767pCpNjV5oFwB4DW4KXdZnv5cQ9tJbXdwFPZSHkZ3rvwnZCmUjZkms83SnANRr",
  "key40": "4b8qtxPb9xnE2mbp2GADx1boqZKRXF51bb8AhbgNR6XttRF4H4Hh6YQEbjTXYJVi1fnUKVztDpaZ6gnJXZ1WKVF9",
  "key41": "Si5SRiyFw37B5b4t9W7goC4fo5cuArriGGbhrHMco4iwYN533gyZLzWNHAmvXEWPbibFaZFzaoX51qoE6dDuxr3",
  "key42": "3fHqxfvGS6SYCCwob7Z7VHRj9nsjsHXY4PFYkdoVN6LdETMHFSsSwHjWGD5iqqNhx2HT1HH95TGHSHDA9gX6kbub",
  "key43": "2ubD3ob15s9hgThCySirBKBEDBgCrS9cp7pBpQ1u3WoMfe6xBxbyshutfy7x7pgz3M7d6ZXG3wH7jSmKB7rhMjbz"
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
