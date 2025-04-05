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
    "3Ykgm3PP4ARgSWyamqTvjyaPn7Qj2StXmyPuv9DpjwbjgamFvxhiAoy7hjTRLhVz9ew8PtzAKCunj9AqtTwW8TvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D47h2KzpVLbz1KFCnjLZHf4MZ3Jc7caLC9JPG7N467jVT1KsKqp8BHcSNU1mNbCCGLqNciM3K6Q3m93k3p5TaP9",
  "key1": "5oirAVaf2mpAoTZ2bsZHXSwbJs2eDCgcUdm2W3Ermzdokt42FXQNwXZSdWKG7a25wbuYKLMe4XfsaXnnvuG76mJ2",
  "key2": "jevqhwGYUrhVTyWKCbuBrnZswe5qQLo6fK2xjiM3UMqduiSfoisVsYrsWYeGaRHzQuivpEskTUBbnDTiQadisPz",
  "key3": "3Ds2HVnzhskTpPzQ4kg2p4hK1sMeqe9Y36kyaJu2CrRE8ejf5rBw1X79G69Cms21srbiBkNJhXKVQNLJwRAEFQ7H",
  "key4": "5isnL5KJc634zQihPcP2pJfWhUJEiUKSqtzxh2p51nfiMNNDhohfYhSGSPRsxwEdSmDTMqsiNgfZSbpfQqZxKUaJ",
  "key5": "aDsGXffXKVV7Cc84A4pvWa3MHzLzGR7VSepmP3cXVi82e56RyFvBqwPKEjh61aHUNSwF5kAPTJzcQ27pfo24Be7",
  "key6": "3GJE2ufTKfzV9Fmg9ehBWLfhgX7zSiUqEHoHwMHsSY3QnJfKktE9iZSupBXcFE7wEQjMZEJNZddsjcMNfGAjCKHN",
  "key7": "4f3dPxCyuYJ26xLwtM9TDdKjWXBWEwST7uj7fDHUvasSqkugQA5tfrtMtn1BMGZxS4VEKisL7aE9A3pdjc3uE7hh",
  "key8": "2FzDFcMFsbUHHrNJyV9GPfZsx1pTrHWFnr3qGz1JWKPLdCgSk84HGb8i2xwcAudnqFEctKaHWf8Tuw2p81ewWao8",
  "key9": "2U2xgTBzqBpqmjwCKBGSW8kCfDdWGFUiv7HQumMwnHya1uYW1XZUeA6YNSqqH2jecjTdJpBddVRUHWXPdJfTAJnU",
  "key10": "3J4jXkYEgCWL69sDXuyh7ZWde8UzPGKqQDpLcpkMaHp4yXZH8hUqmWKrNzT73dvkCYzSwTJtkPzqvo38rVy2nqXu",
  "key11": "2cH3pnfbW55vJkvyvxUz6NPRrpHECsDtnpgKvFrqBoJKHKVRXtSSNUTqzw8wAiwv1YLdqvaKfc3egy8VqnH5oxRz",
  "key12": "Tids33EisSMRRXHADC8rQzPsSHri5fwy9MUFVqBJGLPjWY3NXvZAUWNmUsfTwPR9MZfqfULEU8iUBWTDwosRexo",
  "key13": "3YXEsHsCz1wMgiNb75QNU8J7NwMkgiDuQ6CruBaFq3Xc8fAAGhBsb1Ck2My2pzx4rruYtMe7Xz8v4n6qqN4RRbyY",
  "key14": "3nJrH9BGjrEVjEEcFsEBJXfWnyivkbyNkbZA79HxJdaLjB1NqwHAbYnjkkL7JuuA67R5pKjX9FEDjj9GBBprHk23",
  "key15": "62BgEizxauhxqtAA2YEnMAzpbuUu6VQ6deDk8FtCiL6YuiCSzMNbpWhvaHgzrcDfSP5cTFiboLQ8NxHsQBybPdfn",
  "key16": "2MDYSKPz4d9kF58feRFLPzFUcyvZT2BdaRyQsfDCBL11BDqfa2oZhApr6SGANsNe7DNEddmTPbLe4eYVdsEt9WJN",
  "key17": "2mJR8YN7EZMgZepFd1RiVV2MSYH1k5oJRHwGUsTyG85Rw3EixPhQirevz7mDgQtuEYNkhNEomy8Ln5F489SRnSWD",
  "key18": "47ZUunRV5rbjT4tMmSbnXvZkbupE4TGQeWmDesk2RXkcKHqicMDTWdhKW4NgcXEeRd879Q1VZzwXFHnwNZ2qbeR6",
  "key19": "VVo8WNV5XxyVFUcgBaqqhbPnmJFgkzWvXVmXoaYiCGcgnMAqa9UWCFdjZfNVnXo4Ve4uMz73QDWXx9CNC3Hw2sW",
  "key20": "2N3SscnLi6fsJkJ4uyPXAA2QUs4pgfy93jDhGafTjsNTveTDmUjfvMQAcUSxNHToaXdpdQSCYZLF6RAfWu5UJxWz",
  "key21": "215R5TDvuhF33WhvBkS6uE3JdFkZ8cqTZeke8YG3s5Ub56mGJP7YqQNbqjWJznLFNQWBgc4ykHn6pNLnyyie9fV7",
  "key22": "5qc9e7M6Td6ZjbLFtEDPQg6aAp6RbCAjDXj4EFxJpurq4aEhoMAmrNyJ78mJm31xAPX68kqecK3F6Phu69Q1qK1q",
  "key23": "4BtmrUo6xinN92j7gRPjbfFHgJR62YnaQkwyLkmecjjFiE7hYkCTpks8wD9Cv2vQALSdx5hy2G8ykXEa9UJTWpA1",
  "key24": "5q8FeqykGo8onr4GYvwxXj1kyaEcvKkznS7AXGKV58Ph2SQ38fZ2jqqBhH9PTBQqRFxNK3WRRi2PUxqF8QrejhmJ",
  "key25": "5rfbBeyPizcdUSPfowWUtMuGBKJCMWU1nDqEbFqvq5h1icqCKq74Mor9fm31qS2M59kbpgwG4FdreSmw6jzh37wm",
  "key26": "3vMRfyPJq7FYqAhdBUQpnCAXzNxVBek9xi16DBzD64CvbyqXKzubk7L85FBuDSDyX14M3ASNoGRFHAC9M4AqFsxi",
  "key27": "4Nkz1fSJaz49vvvnQ6YiicguMfkD9YeU9BvL4M6knULf5pmyuDqBzQLVpUrzrn7rGfB4ihkz82uMeX5CviREujXM",
  "key28": "26g1SNt2feKnSrfUJjzG6BMvP4rUb275YiSUdMBi8cx17jXSpiV4Wf9YQysthdZ1sGf58ynoQZ6mYCGU48uqhg4X",
  "key29": "JZpyEEsVfeM2B9b4tR8vfwgRBCDmWzsCUDdjqP6m6qENSyz3bNV5b51Frx7f8sQ2zsB1dMZ5b6K6miZq4Tqmutc",
  "key30": "5LRcvmzAAvN6HKqUE8HQzXqEYELDPF1jrGv7PjPNa3mPFQHk9SqBa3SuYXjf2SafseXVbNPSyH9StnVqA8JhwpHH",
  "key31": "3LWFqhyVyN61bHKCWZMVPwRmDEw9yMeVNK2eU88GPQVEYFLW26Rkfb4RPfAFNuD8rwFHbEiAWafknP7QhQDjS4vA",
  "key32": "2NuHa6ZiwsNf7rvJbkY2TfJpBWhQ6EDWZ6ZQGF52r9DvJ4F1rVqcsfjCG6w2sJK2L7juuZ2zhY7gjwZ97jDTSxRW",
  "key33": "daoxw3WaAvY3S3DrSGjBuydL1bXCHZEzu9DqmeuT9qQ2MiKQH1egS5rcnbNeWhKiNeUwXxJhMybvrtaGxmJj8Hq",
  "key34": "5E2GLoeHtjdMpMtBqdUUvTWDkRNQHjYhFkgmRqDcZgJpR3kYNfnUwp6fCmWyNrkiwWf16AEqc2dUXiVP7hCxx19b",
  "key35": "33o1ENsWXdxS3e9Fo19f4FUE9mdBSMSh5iUoDZKUWsUqJ44qCoJuGszfJDFtNgcrjTSHtPynXCLVQ3BGLGxBBJiu",
  "key36": "2K3vesFMS3Wfb9RS2Vm5wDk1dK7d3rNyvQgCyAVq8CuhRUQqhiuZ1AQfPuGe3efaZBdEVtXVJVsdw4M2723qjq9X",
  "key37": "4gETQEWt7uVQSPwL2FKvANp2H3RYDK2xFfvixHXBWwLSeQGrCN2a2nymhNRCTNL7C9h5qCCmajYp9jpPNyZWaNnp",
  "key38": "2vgNb5xHZSeiuSARh4AegobVUsh5ujCHjwkJhMZZn5hX5RSkVBfmJA76VQN5TS15h12APRpd7GSD3m3GZyvPpQ5o",
  "key39": "3vfHZAmo5vFJcJoHsHbPXg1c5WidYeFGxQ9YW5pu1Aufxe6FQTi3Q1LZvZPZnQGxF1eqZY6CpaxA1pUAo4PAhqAW",
  "key40": "3kDyccvWWAr83nNC8cBrZEqzzmWzgpVMLfdU22xTKAkEYDruS8kkga8oHcpEk5MEfQHp9NN9dRhSmbsSEYPTr1Nj",
  "key41": "2Ga1oHmpmcYDtPM8vyReuAo3JDQ986NHFG6uj77YmKyXTPNVu5YFbuTcfCLj8X4D5gGvTrqwZP3weayfg1enZkW1",
  "key42": "KRYrSVPifTwmPTtBxZJt7ypdqNPS4vwkiuJLEabzzzoziYCYfS4yyux6wM7UsDYM7TjG5SSNrUQ4q4wc1BGMCCN",
  "key43": "4BNfbA7QeeLLeN9JNvrwkzqUo7u9HbFwTRomePMWomLA1nYb1pNcAiwH7cqChiKwCyB1BDvYneEUsXtT5zcyDWgT",
  "key44": "EunL3fqa7BFi62e3ZjVQDxc27RqHGKxCcDs3kiMZwrLaqXzyKEv5ibmfW3txCwdnMzfiNd6odjmaDgPMUesdMLU",
  "key45": "32PCFmebvHQdwyDgyA8RvUuLXwxu5cwW4KMCkTGx9fNWvkcRoe4LYUgAiSL5hXiKTHSEVKGXbgANVtvEUjHVrRL7"
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
