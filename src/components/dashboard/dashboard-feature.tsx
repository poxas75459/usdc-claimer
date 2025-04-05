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
    "3bh5caL9nXRziQvAoMRhF21Lusek1wEdJP34JULRz2Bb4bPX96bF1yuh5BiRqhBL7JWkpRh4rouTM84bJH6bBE23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tYcefpYxtUJBS5nbA7XqBqwZThjN5GoR4wKxYPdJ6ttRnmvc9uSmt6sGCfTkuuB77PVrAjhNjuF22uVhjsBmwh",
  "key1": "2WTMrgZYavLdnt9zZQdKtMggcR3fpw8m6qDQ8bNYnTCehZtV9s5QMoBhs4iUSA5mRw71HoXVSzQGv4Wz22kTmmrK",
  "key2": "2qmkpcYxxTg5kfCM5efYX7UNgN7Jc1GUGfAgEnFtcgXPXCjmPgiCLnUDNm1KQgzCgyd6FW2VenkkqwUJo9f8rYXd",
  "key3": "59MGAJBjumXVbPZw1E4rV13SrxLcDh67XdLFAUULoFuC2Zyhs42kTwpVE25Jsx9r5h1bG5oL5ikRcrmJeei71XE7",
  "key4": "4eAMB4q9d68tmQLi4mHib5nF5ZAWewkrvviALLCkVRat8M2cySFKcWRuBa7d7LPQRqeT29PNP6bwTecqNQendipg",
  "key5": "4NCVbhmZr92mmTXDen5SC6ejs3NB7zS7bxCbPjq42ap3x3pNDkp5Yh4AQPXMkMMoD1QLK7BPqFuDhraoHNuXka2A",
  "key6": "4M5zyrf4hqQxjzwTtMFMJuodibtJBrZbYDtXTx791fS6nhFbfC5jCc72f33XNqPX46Dc5kaM8QVbu28a2853ex6Y",
  "key7": "4qbWd3nMY9RvQYbQZuyYBbmJfsy9EYrEq8FD2EZ92W2GW1peCxjPNjK9dukrhKaSJb95qYhJKuJvcoggCVkSovBS",
  "key8": "5Fm1wn85j2EpdAiLnzaTRw9P5zMZHtjNPhxjZKZUsoed2SbCNWvXUFjDqzxwxoakgzjVy5MQkcVk5nJbSh7WsBKL",
  "key9": "3z2E6DP5E52Gm3GmnVGxnmHyPvnNEmjSMLQLyRtDyafjRQb8htyWHZyRLswZbMrV9bd8U3AWmhGDxN7o6Rgmy5Ns",
  "key10": "EjBCQXDBWuizszxefiuVgiisM8n8MyKx9z1thVcuYkbqstQAJDtdz5CfmAK5tUznKeQdXuMSaqUrrnT6KW1d5Nf",
  "key11": "4Z4thc6pvLfuRZc9zqgjCwbVqBxqekwbtHVSjw1ETijuXvSWQuijaLcMKXkjjmePUFAuyg237vv61x9av9QjJ18Z",
  "key12": "MWLeTiTbXQefM7esnYvnEQKVh3iYKwi9E42Lc5XaPbM6M1tcHP81EK6MaxAn6QrvEGCQPLNHDMVHQPMZeSAaXEz",
  "key13": "396UPXBejfP4xVfUBzeCaqBGAKjSL9B4XGmDWa6NWv2iq13BSxoiY1LrBfMUDnbFrxCnjT7kNdbCQKbvMB5iADge",
  "key14": "3CzCNGpgLdHmzc8LDymQnksKvoHqSPdiCWbURRt6JYX5SMXaMDKaQBpoijjTZdF7SEiswHNeWqnBqdVxsRtUY1t4",
  "key15": "4QBZx8gtkXZJbUSwYBktXu78RqCPqjeiUV28QKQ5X21EbMwXgW2rR6HSxx4WSKqzkwruG5XQ7s368Sry2oetsF7C",
  "key16": "2nBtuKYtyufAQqJQuthkAJpxm5HdQWs8817Sw7KbzUp5SwSm3KUeZfbuKiA3hMAcQGKCSJ2JHfFyrmQVkd6qsrg5",
  "key17": "4afwsKjRaNCEdH1PHAsJCCtoz87zKfHSoNcgatJzpEiDtGhAbXMboMq8oqVMCXEPHtqRFg6kTbpUJ3LaqnGTRQTw",
  "key18": "3DS4TyLcSMjk8voRhCue1ABFG8RgSS2bXWBELwGZQiMNgr2KPeURetdHDp4GMi3saSWoznnifXJG6TeYMdqhnKtf",
  "key19": "4TAXGEXiJsvXkTB5mZQbn3f5ExA5QaYaVYtUQE2i4UwpUz6kTmkkRHFzMiNJiQBuo6iytJgoZLk7TmYzJb1c7hZa",
  "key20": "3EcBm7dhftaGoPnnPw5vmMb99pYQgTNeX4uZDHuZfGmKtfSLfEzm9otdDaCrBZPWeJxqBNbKrxAjFW6kNHhLYxnt",
  "key21": "4pTXDnWXhrKPZT22FtmwGnPDGWukLrt1sV6zDqkdK7s447LHpoXG43spgUnLHDrfNJ9VqQYHUUfZnp8cR1ixQC6S",
  "key22": "5bdFZTz5z2GReZAWXeiPBFkx69tx649EK3p2pcctHoa6SMvWy3sbYJf52ZpBVwMnT7FixbrEc23RCB4PaTcgTAa6",
  "key23": "35KhdzKn9gBhaHfBrdX4WHXMXxVoCAdfh44FRnY6iboqmo4fC2M7AXmTtX94n8hANRmwtDmVJYhpyRRpyMVut4Bp",
  "key24": "5nzmHxp11CPKdJmnuNhitU33yBPS4BfsGJwGmoGNwTUk1L2PVvWYm1L1aeTqNTfHRNisdBBzUgJFBXXp2H9LBL7s",
  "key25": "5ECWiThDJeTa4jZCh43qXtwcSzGn8YAHL7tVYhSzmabW1GxNZKjfFnPLwpMzZAty32LJdToPFzeN753jZ9zN15un",
  "key26": "2Lt1shAPaAMZT2U9Q9eAiJUL6i8UTmSzipYotNFuhnzKy1oFsha4TNch9yDc7ddd19Nedbu4rEswtdPFweFEyL2g",
  "key27": "5WUSzyKv1Z3yfeEA77bH9WueqadLwaLFrZMgpkWKZGY68CDW2BRMsLc1PdwSQKbrwH4k9ddtNM4nhr4ZrGGgAz46",
  "key28": "5xdLRBG4kFJ9pCDKf8bsvj7ueaPkKx71SjYczKYbzDwuh4bwb7Ej3FPG6wURYMg27QtVb3bSZS3WnUTbivyLbf93",
  "key29": "5eN9FpcVUfzmwA9i89tX5UUomJxs6MmnWd4eCPmhieq6wbpa65x21g8GnEGACcdoDUKB9QvoeTSy7Kdk6tqsQTrc",
  "key30": "3F85wFzp3YVZDH74nFZqMG3vY8upznjzK4kKrr6WVymzTdbyNShMfvy5byomXKEWFUfx8q81AbfWgqqyBQ5v1tm4",
  "key31": "24YvWBk4GmW7V2BXq7uPNxyYpyPNXUSVG1ErT3FpRCMznQwAYsUoR9Ma8DXzw7jcR1AQ5GGYoyaXW8RMNDzijnMr",
  "key32": "48PAaz3baceHQK83V6cY3y3ZkRNGHMMhTCG5rFCd1LYqkNYmU7RLWTiagqGStAK3BgtJyf2oLfj28NXAjP3dZk8N",
  "key33": "22CgoiCLbYAy5KtDoLm98zDKFnyWXfje8RU2VbMYni8Af4LminBLBhAja27BxKgQLr9aDCfezmDTKqPecbQGT783",
  "key34": "tZjBKQXr89kYWLQvw592Q8LNmoX7XG8xyBNqrBRrnEXbLyn4Cim3wHRFqMQCLtWxBMhRPTSBSzpAfBhCcZgebRZ",
  "key35": "5KqVe1c3ouz6WGxsHVUMZ7fH792tCWysUgKhfpcUS74xwjeztVawhtyZ7ynJZkctGoVQxVB79ouRf8HZocAV1SY5",
  "key36": "1WpawELST2ZdpWeqhZy6LNRv2JrvEA2JFVPshTeCFEjYt7JANv9jjX8WTpMaPTLGCHhi1NkALKmMKdH7hDWMf1f",
  "key37": "43EkFVFokG1uLyKi3SWU8mXpde3F7KkZR73QK1CAzKtNz52qmoa3BvJ8twHDMuNpyb7ddqxDzMkTj6D2rv1BK7yE",
  "key38": "vQ7T1XLWHcf84HDu7yP7Y5Gdpdvqa15qMNkBkSNPYxnFmLBKg6Ne9KxrsfirfL72TioEDiGpdDQk1XRk7ehmhZe",
  "key39": "77WjjXA1fU1gDbbU92dG5F1w4RWGPUvkTXLmgb3TZEBHZEAXpFvbVY1wyuRiDZke83V4PzrqHnrfUscoAnJqrgp",
  "key40": "3WuNu4EhdH9Y4o3tzVWqqFD4iH5a2KxYoSGFKgRXDoaqN8dyaWvSGsw6gU9epkvLoPUfp19XVXMwfyDg8HCGFY74",
  "key41": "5n2SKzmS6dCqaXJuh3veG6simSrqtVyYMpwQAXZmdmqAhH4L59iWrBnTx4mmnGgZqvvigdfQeoxQbYQ2L4zS3i9t",
  "key42": "2XZkitBPYYjmXFsJtcyVyhtEkT6h21QXTuz9WurApdWMD3svYHGMAT7omXVb53jvqRrTyjM39T2sydHrAE31pqMz",
  "key43": "RfLuU1QVDdV4hiJXwAnEAVe5iN9GkRy1NAzbXDTLHADBjBpjq2Zfk8bfsKpwHj52SkiZjvFsyGbQojM6ZmCfDm4",
  "key44": "3osRndjFPGUUqJQoHGeqhs5rJyW47hB2WspjAj4ZMX5vfUAAPatk5QAPCiq9fwkAJohCxq6fW3ZRCX9PpkVEW3U8",
  "key45": "3J4LayiSZf13VJb5NfibNTUUpCk6pkJkLypmVXLHvjJymK9Sumeeh9UriHf7GJ8EZ9uHat9iPtyWYcFsYWApD88v",
  "key46": "3RbM9T4iLcKMgWUacDhouCiNDwt8rtyJCSraR16dcG8jkVK93kJaNrPsyztxvNyUkD46BhaxV6UcsuQkUWqW1yg3",
  "key47": "PTeMiXH4Phz59G4jAVYmUZ1RXBNxcmQFPn3rkYydXamkJ3XcqkWoJUf2qECYtLV9nVHUk14YoFCtCm5mdTfDJM8"
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
