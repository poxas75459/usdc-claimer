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
    "53sScTcKezfLrS5oVTJhhZCRcsroTWDusaDXFEeUJkajtyqy5491ZvuEA2VHTp8t5Fc2rmtU5fjyXxHTFDuGwQAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ydfKNhzztBbGmFX1PKYBCEWFpQvcWEgCCDxrShDvirWhDfZRXc5gBpLiMFsgJoMzEgHzro6n1yYfEESq85MZZGY",
  "key1": "2y24uN25qMx9ETiVpiyAjLcvcvBi895XXHnuWDJqRqpfwhUkfPU6WE7Zn69qZhnz2z4P99whtWGrmsN2esvts6My",
  "key2": "5eqSA25NGavyRJopM8aqmEqCLsKVbDSK5SdpBDcytpWF1KmLbHXhNAFu9wm93Tj9q4cAp4KLy9Wz6FvxmW334GFx",
  "key3": "5BR68uPiM7dJAMmeC7pEk3GjQkqprhEdgiHQie7A2mrRVT1Kg5YgMBKPvipDENTwM8HyFsW7WkUoFnCCEEqrUa9w",
  "key4": "5dF9jgSDD7Kcvwmy9yv8NJsfdGcksPCWXQjxxNxVjxtK6Y3sES96chJkrWg3PayswnZMWPNtJU2ehegpiQpifson",
  "key5": "58VNcznMNgL1wYh98RH8s1SmHXFrJB7fFUnRJwjNujjaxFj4nL9cL4FZpr9jX5NssscEQcw3RjMxicLn6TCUv1Vg",
  "key6": "2fpA2uamuQRVRC9m7iiUdFLYztRG1dzXXpB3wNWMz49YzW9RoHdraH1JipaBsQxVAPGjxJXWscyxRfhbQP3qFKXp",
  "key7": "56G2ArRMmh2iDgCMAePhbJc2vFSn9oBQZrwtis3XJ9fAtYS4TmnLfQyRtb8d6MYY5Pm7itjiS6JS7RAnkLvLX86J",
  "key8": "jbQxLSUGzy9hdnsMDBxgDqy9J1c6vdQ4of1wS79XTjZB4UF5xATRqAjz5LxTUech7Z3HQGJs1BWTwKZHG3ewZjh",
  "key9": "2hyfyP24HpdGkMyaNUUAL4qa3NiFdFWPAq1CQ67VZXMJ8XbG4GjKoBVCeprfdFmux7HjgURc5RC5KKC3yBcsjxJd",
  "key10": "2J4Th4687LMAEGwkHM2beNfu2Arkgd7i2HLH2x7CDKwJFW7U1SfrLkfR4JguMiuE7AfVPvzdoG32qqVFXMPkcLr1",
  "key11": "4jHXzY2HS6Tda6dFdue4q71zP4Y78NK2ZbsPicpJBXvkZgaa1EhwNrX1N98M8xhDZeqMbQAD7qYKLR7f1mQE8XGc",
  "key12": "2YCBT7CbtnJB7DT3vJnBpBps1MbEHapDWsNkAoWPBkBTUbZo5ouMZxvUMw8w5omMc9ByFiwWSne59sugitNPg9hi",
  "key13": "yQdx2uTrL8Y3KsTK9pAh9okanHzUARbphTpknHYZ6p9BLVC4YVzJQLZoz1rs5FJafsa9AdpVwxc9dSUzqzLJhav",
  "key14": "5ZYJ4xmogQ4gAbDaMCqY6rWQFpqyGEakYScNEgDRCumTXmHwS9wwPsunBcg445QyBoiApNQz34dG8MCqEH8Twfkg",
  "key15": "43BukqHKTiEviRxgLjfRWeajRbeVz9LCJL8GhkxgM5yVU1wL6n5XdpG4N49SKLDuJJ8N2aXWfFzxcb5GHuRJcnGh",
  "key16": "3SNVz9oCFtr7RTsR8K5BhBLFhX9mxw6azQoqgpMuYyczUPBJkJuuS7vrLtzqdqoLzKmL9JWH6NvK5h4WFvVMvEX1",
  "key17": "HC2e1Z95B5HpfY6B2SEV6c85szrYysFxXa4FDvXgk6o1QqKYxXws7nJg4p2P2WRzfprUxdDd18CkGTa7TVZgRQe",
  "key18": "s1m2dJcsWJuLwzkcH3M8bSNAUCWeSPHwkUBszXoV3jtQZLjyPFLQztnQ7WskhWz8WRqXzWed3TQhMJMfR6Swp5C",
  "key19": "z3jhRNXSERUZ8cVcYg5kuEivXRHjVSHPbYh9fkfZy9G6Wbdhs43hKivfCWWfKMCM2wtZhJ4WX4h6T2ySxiAbSaW",
  "key20": "4rWq1WsdABfXbMRkbDfa3RAZ2wq9SPmB3W7d1TdGMorxBTSWrHXCoBMehZq9CPAtFioKa1HEJvVXkk1shEexgMRr",
  "key21": "54KffEB2Az1nw3Vj7uLKiTjHxMgk7YiTPytGzgVnR6gHWZ5pU6cPRG1K1ZDHtMknMhRdxfgboG4p34jdcr9hVS7e",
  "key22": "3X5Hq22Sh1jLdXNRefyCZFuQ8fh5fwd7DXWC5oNcMK69CRUYvXdaS65yx8wdKYTzfdXdAQ5AxQ9s7PJ6DoJWy4wg",
  "key23": "44uRXbmkYAgy7x3aK8GGMoyAzL69SrMZbNopnXq3dZAnQ6a9DRdhrNJjznqLkyfV6e6yNdtPkRZvAmjEv96z2vjk",
  "key24": "3rhJPNRG1KT4gWnYNCtYHZsyx6ppfXohJ2iLd5h4q4WJq5jBah3cSr2AyWceaJuKVAV3MuVneAbTTSLEHj2oysbB",
  "key25": "cPTVsoiJx5hKDTiPFuSbc1Aqc8EyXEUjP2xEzinXApjbBG7boXpxFzWnyrxgyjNgrtFfo11JwWBuXKBDad9CdFV",
  "key26": "2exDSXFLTe9DFAgGdwfQFS77UR2G1LjYAxfbbVJxoy8h3xwJV4PhbwXUD9wwYKZ8Fv7esWjNE7nxaQikQg6JcHmF",
  "key27": "2dfCWxaKfCfvCcfxfpmNK67QdfgAKguLmC4tauo6b8FfQrNsi3nZkSE3ksMDfCgwRb3oYggP2YqMjkkrPuAtPZmn",
  "key28": "LzHCVSXikqGULGhbr3sr9ZoLTW3eStx3TRnimJk8WSYvyKmxVNAe7kJpmiyhKBwzRX8cP3y3BqD3Rb91M5V8Nrh",
  "key29": "3co4Ah8Cu8qJhUdCNKp8RPrH9EZooPJr9N4yMfCwipSqgzPCRVX7sua6LMJSSdFeA7sBj6yTaqEkBDaiaKvnPLQk",
  "key30": "m57Vwm6ckyvHiw5NKqkYdp89o7mRK6kHPnjsPpacXyw8RbCvV7YU6bu7Zzc63GrTcMfNuFrEVY72DSgT87VjSDb",
  "key31": "3T8sBnRY3CehXjM4Ugcf8L48UaK5SNe6WtHZfXmJfvvWZrGik5Wb8qDPVi1WvS3izAMfTqQsuL5kCjZ9YtQUgrEE",
  "key32": "4Hgi4e7CX94FhKYPiAL2XKQDAw7WhqqCLZj873emdjdZAZ8mBNWMqo3MVwV5J7XUMQLiz2CZaNvSaJVheZkTUFQA",
  "key33": "6wdeXf4Gr5VUyHdN86Q48RJrGAPzAjuPvYw4cDvg2k1yHTgMfWW4BjMF1HJ14Qkfvwe6hLppKQ5HYVFXtZnBGtK",
  "key34": "5TvYaEh4smXfR9otBK5zy81VerdoRrJ5vRvfMH2qRpqeC9fzoMQj7VdVLvXFAbJjFPi75frHJ7eFPTS2RVgXhaZM",
  "key35": "51HHsoLCGQbx8y12EMyrvVEfPR1zhixqBBVQ1SA7vcvuw6jEyznNn8pweWyBe1smRWGf8YKo3gf7M9QvQUbacs4X",
  "key36": "26ce56Y6AC1xDN1F71u9iWJ5cEFtYPUYeBvBmEHiRGBwvMx52k9YRDNZ5ha8uGQC3TiQU6rbF37QLxSQqf1Jvpkt",
  "key37": "65Txv8KfVXVSakwW4mq9MDBGNMvDpP4PsdqdznJcSkkaBb6FZTXggsFJdbUq3WKhj6R22gSd3x5z28CZSEf3o1dB"
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
