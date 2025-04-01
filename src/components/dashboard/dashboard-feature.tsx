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
    "4myVV772PfKfwBNnhA2iZiFkakusRHNy4ykd7yKheYdF1y7r441JQkbxLQYPMxQkgjvwWDWgXnvRx2ZkbSQRKKWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Gv7sCVokfNZ9hoRf3UNRjGTiHVkMGniSaV8MaVReaa76NNvrTcxcY2DN28m5GCvpVEFghRP1dxR5XmZJYkKGYW",
  "key1": "fyK5HLqmXvCbXiq6tATkoBD2P8x2RUkecQF8QSkEMAkT8fQsFGQczwqUkobCPc65NnfZq6UZji26hSGAPXpTkBF",
  "key2": "244aos2m26GpmP5k5fCpVpLXAX7nzDUhrFNxreDY7gcae8jA5RkfUi77qLkGLz6EqyxqFqmLQAvgVK3xRpGrZa7o",
  "key3": "2LBPC8CwYKjyAEhvwsd2vFnLHmJb14JYhQBmrBQKeT4kDWb91Xvyugv9VyL9C6kBxfMMjTYS36gGMYnHykY2rahm",
  "key4": "4Ws4mktSUx6VTZX38cPsNEyTkCwMfyvvtfvsAYCQaf1Xni63cXH7HBmMv9ztNgpgvQkZ9Tu1m7JkPVYfRKseALPd",
  "key5": "5cseC7zdGBzbgDrHXN7LgEPZQdxgnNuNeHWw4bTFkDycioCGV7LnhKrJ74h3LYnvjkjikiWt7e7BYoFTpJDXf9dC",
  "key6": "Jm4xgCV3dNs3gSWS9EwFKEEAKi2vhG8YmUid4sNtjdjgdw6j493ajpKvYswvDecD4UmJxiPx2SP2YpmNEvYJkFF",
  "key7": "328T4tmxXiXw1wPvxh2ezU9U52XNa1LC8UM24zMSkyvuq5eo746Fs1MLp2pw4XU1daUQqNeqrmQasguAvQMz4pdU",
  "key8": "2ZXcivnnjUmJPreHpSbSgr2TtW8KpZkPRxvRjdBZx2QMLf5U3yDXxhWBiiYkBNq2a2tjrL6moWELa5k6iaBGp9Xw",
  "key9": "5HVwa7Rdj3L33LVgs4NRmcMP3W7PVFxD3Xn2n4ARnQTTevDfk5P21CGe1hTdSfoHfxLhBb6NqicwKExjwZoqfXYQ",
  "key10": "3ZAv6WHS45yj6n2ZWXi9yx9ymBpWN3sfVMRnu45FEh8BrNWwtT55HCgd7S6VJvst7USjK4GYA6mz2DweW2gjnj5C",
  "key11": "2BdaDAAnx2vQjqmvjZH7UrR4og7SimeFx4rizgdyf55zSngEWVbKna8VSaXcpU75rgsFbnnyYtAaNQS834AXAq6t",
  "key12": "5us5LtGSEe4fSgorz8Td6Pqc2KRVug89oqXDtVq2Q5aumBFicUh1HACTjDmxSLLp36CN54BKYeiV7UjkLc8dcA1X",
  "key13": "xHqKFNftam9j2Ae6RrjUh5XET2TZppv9DaqUqZ7AgM4eN5xQi83MfngKPkghPR3QmN8qrAD1ioihTqAbDsiZf62",
  "key14": "4SsfERt8Yy8n488wxCVYF9djkSJ2NHigSUWGmXHxpHmYKmWLSf5NknBxhrF5XLVh27Yp8HhFbnLtEpHyzBf5NjVn",
  "key15": "28ZNX7wmma8j7rWGC9LtG46vFk5icckXXagqF2nVRgzuzW7kAswCCGFdCKzAZ7LmyaWV4MwPrXg8FXrWiTu3J4Vk",
  "key16": "4vUbd1oh47B4vwH8icBC3GQ9KzmhuShgyd5pH6rhP88n8JHL1bfMxXind4uY6XJ4kpk29QJLUxaDWokJWCubFur8",
  "key17": "4BNtNLWhPNgrTDP3Hv935KYEQATg3iWt6Cdz4hY5MdXgNTtL8LaHQKV8o1e1P5afDHcjyLbQeJFJartawnitrwhn",
  "key18": "4U3LGNCrA481JDymG7tdwnXkSA6jeqfGowbGiih5g8F6RYWEyCNDAyqd4yFz1uSSTpNmjQLtnvNMhjX5dCcW97jr",
  "key19": "3a86pmrx5SpKYYzrhLRXgtNV32oaFht7C4j9qZci1ZVkWnT8wEAntxZaSrie2t2vAwujtYFpJGVG9fKE94rUVAbk",
  "key20": "J7PPmBoK23af4QKUCzvdRxe6o9dGs4Mnr1y1RtFbay4oAMyHMdiqcvX6p8sqJw6MWbudvGnQDmKwZrnLAVQMCjP",
  "key21": "3rs3EBj3MBRh1j1Hr4GCqHfa3X9zVxvQ8SxtgVCQLUGcZUbALUS3VjwtUjUQffsSG53V4cF9bFShtvjJ9b49qVUc",
  "key22": "y1y9XgmKyCSwNbTieqqcWYoUo85yZrFtCxcKLC7PvgT8iLZPL9qBuMPziSDpgUzV5MbTUR2wHzw2myf7m5Lg1JP",
  "key23": "JdQ4Kuo8ZxEJfdvV6LdxJya3zfNt5WgeMq7zLyeaSeP8ocg3qfwrGo3j5umZVxKQwVKYobBnRGJ6TjSCzqptLaJ",
  "key24": "4NhDueB9E9pLTDgZkaNuApBozejUC8vbLVX92URdFa7o2HwkzvxnXquR1TViUTkxoWo7ots4ECpb7n2FgNKWB8Qr",
  "key25": "7mmuqHV4BMdR5wL7kTi3g8HdS4gWnw5B1YXMpZ219X3p7YdeXKjnfo4f8XGeS8opfaazuGJq1ATZcAEWTbJXJSU",
  "key26": "4WUZVtWQZo6Nr3wTZNt8fo6Rg9sbvtaL6fMYvThN2Dk3o4qWL8AKxKHSnUU5XSacpciGSvcXLNU3MCu8oo1UeuQx",
  "key27": "2NgBA3wKrkuWujm94CRZrBChPEB6gxuQkJmnhd8uu61KMTRtSkfgYb5CR13idy18bQmhygURaj2hftUTKihokv88",
  "key28": "ePkSU3eLttDyBdenZU7oa4Yc63oyVt8CdybFmwUug8JM3EoR36dNNMLjWH5FM946EYgqEMWezPRoTVhZV3g24ZB",
  "key29": "o6WHKW4PVireEuhffMCQvnKkLAy5bytUVUPP4HhGX7HH8ZuPUhAQ8wQihYxCK62eEE2kRzuEqQapzx5Fo3tAxhG",
  "key30": "5brZjS8EJKeF5nygaiaP42pApVemgZhkzMrRyhzCFTMHY9yD1VwKG4ug1y6Qh72Q7kuSMEjbQRLY9CYhF9TXEuNX",
  "key31": "3sDnyfVRxLPTWhJjoBXTGotHDfnHfeaoZrFtSyg5E828wx74LECj9QmdgDvu7rMD3A5JbntxxzTq5jULe2Q6fqFS",
  "key32": "oR6VifUC6uqdiTAYgNKWUedKr7hi1SAQeh1ux2MzMFKvQzV53CbF2MiYaoNhhsFYgErdtMR3XfKFQUwGTAABmv3",
  "key33": "2hQWD7guUN4AAfVgtVYE7tg18vXsY6UxRmskNpTnhCHLQX2XUNWBorkXGYZQygxMrKdEvhKo9Xzp5BHwtShVamLj",
  "key34": "5hHcvG7vcTmCaRZZeoxEVAxs31muPnm6CdEZGQtMP6BRfzitKJxcH17RkgM3Kra91mF1DXtxmAyBK4AoyQhBbaqH",
  "key35": "2P3pW1PJ8CwZnwn9WWMmTef6R3Hjf7TsjUdVArhRmAuAqD28BMw8pJimCJfs9Sx9P4e3uDr13gzF6VG5MYVRpAVH",
  "key36": "219GKfoaW9sJNzbYpkZkGgtw1SZbMHEpXNuoRsNScYKc2pG1e9eLKErtwoPbkZDRt3KF2b4grrKL4sPghEe5byew"
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
