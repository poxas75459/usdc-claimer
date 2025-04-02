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
    "hUatuEcVPuu71CkVLrtNNMHYd6cjF2fozzaiYg4XVUrMCbN3v63b7YYgbzwrnGB94WAjJzZxCGH9LMo25Lz2HEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptAtJkTsorUEPrerFcAB5um3b3m4gzY1qkvBPk4VXKLrkVdZGpoJjiJjTZUdjA8a5bVp8CGWsNVZZBmY1W5Eh8c",
  "key1": "4FnwdKfdrrMrfRwUGmSPNvQwbxMHZf1ZRGFJfA27DKSrvar4mWAqvq3yfMcMZR4VsDTxTMajNSbMuHXKbUwdVxT9",
  "key2": "5oEEbngFnRuYHeMwD3H9uiNjnDqPRqC5jQHX8XZ3jjuwKtrSUP4DS78teGSXVWrMAuohdf4BE7bUsXeKqHZeizaQ",
  "key3": "58R3gRzgHqKX8yvMMWs8kT8xNRJnn9De7VLHPo85SC8NqxaNe6ufJPtfHnoB3EVMNYRRWavMJSqpGxHmwwbr7Pra",
  "key4": "5Fn4zi5jLagFMPb29rZWYfkdfB4AmwRLRPYUXuN7EPe3SAwm58fBdDWH8V5eafyMJaAYKTmniniG8Whcd7Wqccru",
  "key5": "2UhQUNNLptTYZkCoweBHpGeAUXNH8146w4JoGTXGMmVbhCb4pgbMfCDCcnNSktJCMrdcrv43DJtNWnspf3bQc4d6",
  "key6": "2nDx7nDVqN7A6BKTTBDd3p59FQYPcATs1ybmsxGCgV5pGeKTwUek8ZVu6cHCSaLa3eF6ZoT2mAug5PwCCqhtMxZ2",
  "key7": "48WNAejmRyBf7SRGdtDbrHUYPnw9JNcyz6w6XVGo4JoS36yVQjDjqSxDvVdTZZPMa9LAnWXywPE3C9x7pUGa2NWg",
  "key8": "4Yscsu4cf7Hougner1Hfga5JFxFbwg5XPxSFPRFiEr8e3xtE5Ey2fvrdCdtJopPp64wKspawsjYZ6UucuiDVT3F1",
  "key9": "fb9fLkHr6af3gRWZzfYQFJ7ta22XKprirjjCaBr7mwKGPYciXoja1nSzskimPJJ2zJrzZvkG7kAGgQtpnEBuCkG",
  "key10": "3Dp4dRaqmQKSEFTLKhSa3hzYbF13XLgRQwQEnkSKj2E9a7qpdgdiANn7cnyvge5ShdcwYaibbNzgAyVy2gvJLCQU",
  "key11": "jkryee9JBwuyjvvEzYUWBmDDYYLELgnCXsuEGQ6Gv3Zikz5bKVvXiQqUaav85J74qECi2r7rMT9dRD4NgdDZGqy",
  "key12": "5rLBoYjLwUfvtqURqsmkjU9D1AH1zEmQtuaJzkRykHYPtR9X6ZHsrJx8VMewGu3ffvTb8VBHTcajX4iEcLA52Vnj",
  "key13": "35AXKP5cxX3LyJaaj8SJc6gT3CxHmWSkZgTe6CGfUygrxdi79czh81kSdrw3b8ypVwTz3XLmw3FkosE9GEwUezaS",
  "key14": "4cWWLmPAZp8o3vEZaG33bMC8Z6BVwsLkCrwDZSEU12a1o7QrfkwY1GAF5o9dxn8JGUHDGEWDNZd4PT96e6g1Ej3z",
  "key15": "WB7DNMEY9NS8evUBnmgEBona9Y8aqH53tGLiGHmzwFhA5xzCo7PP4d8ZEZjXbjoF78shjmr1HEUp9iD3mzyWBrw",
  "key16": "2UBxotiB9JnsZ4uQremc2e9F9qovv9q94WZjR9RMx3cs2zoqGuZXia9WWHgfy7iMUhKAMbn9YXUAtCXA7sB82EQg",
  "key17": "32TY7LhpQ9fsDM2ZLPsR4vyr4SdDGrKkumPLbCMkS5Bg3Pfke3Nxcq8gBYwYhJuv283aNnzquNDANEAJ94kkcBmT",
  "key18": "5cgStj4SZT5c9A8C6sp5zeKStNy88FM3sQLiXqoRvZ8Vyw1asKy75xPw2u1PpBeEaZv3m2ec8GiwQRan2BJCuxWa",
  "key19": "2fbMdRZPohv3GRGhV46XtHMDM5hPvy2TJMcfXCfHYRwHY77BkGq9w7h55GsVLBNVnXuN1TwiadLq2R1p3coWcphH",
  "key20": "63gjizxK6oBNFvFd6aNp2SRTuzVDz5qeyo9SmNBkyAsMMu9gjzYhAndPijJinbwJZsC1HHk7zh5FnkreEKEXqrGG",
  "key21": "2P2315A2ZxTo6VAHZx4E6RavCA1aBGEpvAroVgn5ynVfLc57R5dZQH7xsMsE9ciEvxESGkWMcdtUbMMnrn8vfyj3",
  "key22": "4wRmYjVvtKQwPazjHrN2MDhvvkXz8st4p4rC2S2ezAj4RA4HaTVpSuvw7yVHR3aZ5D4ticfW3KqYG9ufGJ9eWkTa",
  "key23": "4L5so1EH5uEkTX12RdEHM1gaKbWPH6ytrnzoN2Yw4MqrSJNnwu4tQCDbeA3RDKKnzEiSMnAv5367KQasUK2r2Xnf",
  "key24": "4U7SAewso95BbJzFq5KDH3CgnWpeF8m6EhVxvCGHRe224J298oDetymA55hnGgkRtpneHFyNpd6FxJnu5XqpqiAx",
  "key25": "5dExSFWNj49aqqbB2QL2Zs7LV814DHqbpXeRRUgHwMsyxFCjJPw4VvYyxLuLkmQQJEwiXKAcoNM8NZwySCsHTD2n",
  "key26": "d1hdPg3rPtnrfjQftT27h6yB8SK9Cnv5tZ1i4smAPj9NARW5BaWJLaRd561CiTgpK7S1rqVJKUG92UwfMJp4fEj",
  "key27": "4agwXr483Y7dZhDhQkdnSW3fcTtnkeRrpaGS34JcZSBMQVrDbS66hHzTo9sTLo3NsiDFKsKQ4ZrQzaY2ANpktJyE"
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
