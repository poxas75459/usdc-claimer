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
    "32CoS4gWV2F5s8SECzwLAFmoBAVbNkHJLodXtBRdJtU3xRDFVMvqsRXBb7ZmLpxwy7vq198eJggxbWTQtjSETifS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDuepV7sZPEYQc7qEDs2qbrKqcyPTayaVq2kEesPmBZj1QZo1NWCCLRLqe7pMHv9o6rfs83F46FSvKWpSBUzfaK",
  "key1": "3pX9LDiXYkPeiduAdf9EwHcaWEhRFM3smfmnvkRKKo9Xj91CcbGkzCEFAdTgxFU3p1eugi7q8zmwSURpxBmW4gg3",
  "key2": "kqVUL7AMBfHDo4wjdPS4QThauYgaBbBU2xb2Ls6dYVwiSEcxoxaM9yJq7R784o8YhWDcCjit4NqJ8bdo5WFKfAb",
  "key3": "5JaZoujb8PiDsaqV5VpPNtnsqnFYexgxsxnQzZoumn2F9hJupwBkVUpe25kUHaC6xMRyWKYYQo7Awxdwf1pFaX9B",
  "key4": "4o7KjVCV24ordutsXP4kUcyhfAYumdWR24PS9VhXuUNPvVqtJB9CcHdY91AJ64o7MnypnHuEY4hEgDgodYxuTAo5",
  "key5": "iyjUmfE7U5P7WKr2tczPHorZFXbDTogLurCU781wK32zjnhVRtwvV5GiKA55uVUkZZBzAuxErfsms2TANWfXByA",
  "key6": "jxoiXxd8MDw82T2kgLJY6t9C8tUUnbAXYkjysNLdXvuXV89kPEs5EFgXPCyqwBMbTkEW5pT7zM8K7ergKAy9RGY",
  "key7": "4dJJGib9cZS225UMz62yRoXxhYrFTLUb4GbkxY2zRmYnh2z4B1XYT4UD6k51kq1zKjdZdFciaPwJ6kpF6miNPprc",
  "key8": "WWBRCdrw11Sh82SqbyLx7gZfXfasWA8vDG2b5DNjjWonenaJ5XtiTXKNDimczu8kGwrqEtCDLqJoDoKP9TBsD3y",
  "key9": "3Nw9VoehFbYY3XeadaNwRcAF45znqNA4XQpprac4n4FCchZkEQf9ukjjm9uAiGax4KfKXrWQFKCrfRtWdN7cUXJn",
  "key10": "4vDz8r4KNWGBFJqQUF6MtRKGeHY25wqC31R1SGGpBDnJdu1CVib2SKVBLsCHmnZ4bgeSBGKZjbxWaNVhdnxYb5kC",
  "key11": "2xjBKhZRD7Hxoq1NrqD2H4UwRGP2N1BPoRJCYJe3PWX9voodvnU4DhTuzFCP8U2ekxdVxsNz3WvzUVdqLcbZN265",
  "key12": "61aRc7njibU4p9bQorFv4JbCaZecnzGZGuyBR13M8oMJcTkKciojUDfVvMxUJ4hVzjk68SCdt4k6jWHA41b1BJmD",
  "key13": "4JcpfiaXhd43ydRnPqFjSDekghf5bBwjSMupxQLb5tH9U2xefu37uCtudAXzGDMPa86CXo2JAPRDeoTx5FTPe9SM",
  "key14": "2NWr1UwxwUuHAo4RhVCTWmXvzhqXwCrfJPJpLxMZJ7mqjMZ86P3SjPqHC6AQHQXumEBaSYnvCL6WZrxnpZtDQg3C",
  "key15": "3ZASf2JNbmerqz1Gk74Lga29ksN3C9g9pUVZcUttegAX5Mbuoif94KYsQQ5XYAy36zJZ5quJLWXSJftu2VBVoV6Q",
  "key16": "3a5yRTVDAQkPQz55M2cGDjvpCJZkA4QZpWvHx2kgD7Xzy2z91dcdday9YthHgk2R4uDkWgQ36S8gcZjftxyrWeP7",
  "key17": "5Fh625P9t4qkgYhv5tVJzU3m8mzfdssFNbBddyQk6RjjjM86KFPzEc1mhhKejGwjFTToG8z4KLEztWcrUjbubFUY",
  "key18": "547UF4W2MDcYHvQVWSuzBUmuJ6RvPCbU3uZ6ftVAnjBzCda8FckiNwec6MYEkPCJY1N59qQC6zsqXBLdr6U7xXoR",
  "key19": "g6z33Re2AXK89BxKX5TsR3XR6T2PaQMtJyoYCBW5GRGHWG7TLm7fPaZhrEQkUqeGVgMvPc36U6Yb8T5rvewwTqb",
  "key20": "3xR1WVPyPjGG7KghD3avFrcyZvx2wfiK9gcDidqySQtofxCwQG7WzrFAYZY8BqwMLX4eQUmzui33eYxC1Lv5vKp8",
  "key21": "2b5Jy1vLtPZAWSab3n7y7jzYVoDuk1vNKV19rsor7HqVRSP34eZQxvuEHVxGgS2gnbKJ9mXtKni15Djjb4hiwJMK",
  "key22": "5DwVbTCf9kangzXabgzaWDfhXyuZ4WEtTw6vTGf4WFzDNvjC7TVum3rjSe5xBNWDxWsva6FXUYTCg463dmjZ5kkz",
  "key23": "2hN2rPPjWct9vaRSH7Cs8JGRRRZ4Jnh1276f4aaasAC8sUqE6MPk7uqmHoJfHkahP9osnZ7mxskEDySVDN8KdcjF",
  "key24": "3j3Wguo7zmhDnvX5YubtkWCuFeBJy6aJk4epDk6meCfov9Lf3p3ggH3X8Tc8fmwFdevXEM5Pj9KQTJXiXL5yNa1C",
  "key25": "3eSGivXcUmnbj57Pq426zXxKnsaz6pod8qtyUgX9AfzeSiLn2PKhqfsTCHQtG9xBrZ1wDZc4vrLEmpppHR2BMLsK",
  "key26": "3BMtHm7TzgGWiAZkrgfe4bdKptJQZeCsSbNkjeLhfGySuZnP5YLfzrHyRrb4Wn9MZVWWP2RA1zTpPMEu5W4T8VD2",
  "key27": "3Ma7WEiXCKK9da774j1t5m7V4qFHJzbFuEhbhx9C5W9iBoK2GpcXrJdD4zTa41FDU5KxgR8J7RQFdFmndTqqAbQz",
  "key28": "5Hv3NGVrkBNRegRRWE2VN2S3GKUBxuxYGfhPZnp5u95sVTZjvPjyackUVfc5zsRWLK48kZgCfWKHZtgmmmb4MLW4",
  "key29": "2Wc4GwUNdNjosqXCMSZwAnx7pkHW93Dfgy3g52sovLR6nvgUVvN5u4ppC5whcPFVLmdQ7jbiR9FNmHTHL6Xqo1GE",
  "key30": "WPrm6ZpcACUh6S1zGjZ5XAdXt3VnctAFb9D2wLbg2c6vaje4NnyyzgtYE8gWJXR5pXNZAdpGvSdA9UCFTaJHUUe",
  "key31": "3m6PrgoHpySDVYJofGXTzYo3btPwP97gZHjTk4y9ofLnoFuqa1HbgimzJA4Cnh7p3MmETwFawH4mcsvEw7KBsXia",
  "key32": "2FwHTbDULcC9yxnc5mMegX1NdTNgZU44bSRjFchcRemrXP8bmJWLNFa2PkFhy4oHYfEQb9wEqbGEmWpaDNf5vWgJ",
  "key33": "4FHSxJokR42aUHisqaRX8CWnERYXYYzvwxKSBY1KQp4Q6DgJHeAnFMRFyNLS81JSRBDRYSYSKEXn7VgHgAsGyvPW",
  "key34": "39f5kyueCLMKAL9UU4vEzun8ju3RNnhpXDMqL3oDPK5GMEYQrzv8pMdECkLfusp4JzAsYzSXNS8BZXf4NcuGhfid",
  "key35": "MiY4e1EGhRWaPsyH8bCC4pfbDHK9ih8aWqTS9wBgDERjEbgrc2m9JJQrwXMRYqb4KSKMUuoFFNkDoTg9TiHAN68",
  "key36": "4ezKrBMvy9L3dR31NbU9mauwCdEw54JdUbjMHYfejSz8d3v41ErRwLBMUmtBtDWGKTQWCAV9syEPWqWTs1HarNff",
  "key37": "4AZNL1pHrer9ekbJwPXSMyqTzAwW2bJFPhyHQSipQhvyArrbjWV6Mdu4dsU9MthzretnQRWeeLf11Fz8gKuspTx",
  "key38": "3d6SRziD4Ctu7KAdCzAH92SNsigwAZ82hdAvWaYNLaNpGYzRqQ9BBos48dZJKLYHdj2erHmZ18ZjEq3YqEJbknFG",
  "key39": "28fygPP1XoxVPLfLrmYieqtmpSgp1rakBjKSeymAY99QJWXb9k3reb6p6YYgSi76LN4pf4KXk4Vgc38KuytedbXv",
  "key40": "4ETmNh4BqkLL4Y8Sh2HUaww62okwgN9mLL4SHBjWfLepEbQpnfWn6tVdfdbixcrMX1ZRfSVrhZWe9YhXYURAm9wu",
  "key41": "2pwDt8JaGCbfM5zRRtZBdth8fSwKpoeTMiNcPb8CJXE9BGwhjhcnKpxN42Bry5s8ZYUaxYz66fZPqVwaiTGA3VqC",
  "key42": "3PjhQNSvz2DcvFg8jV8AuPtLR793L7GiNbDsyvJ3A7HyxiJCkQipeLkNyTJgnA28M4hqrsugvFELgJ7ioJeTuCRW",
  "key43": "41A5WMRgJqk4DUdtKdNTSiSoqydWbt5Q16MPbXK558Pv9KfYDinFPFtFm8oL3XP8DCTvSeWrv1wDCdDMSFQqNSXM",
  "key44": "52wUdfbCrwYRJcFZMX9GxUFqP2cXDJQuFuzv54nrhFxYoPtzBwu5vScNeLeUGwcnaRJ2SV7de1WrMH77u3Yz7BVv",
  "key45": "2SaNwF7nuS8ev2pyGbmbEZg7zFoH5umoyx5JrLmX7i3kJLCKDVUvoxLALzXQgrkWPztUyTzgY1XozY7kDmQK3ZaN",
  "key46": "pTxXJ5VbDJXfNwvTYjf5UBRi2AeX7tqrPB7q2m8thcN1kTFd8KBtykaUe4FUhL8Dtav9jhBHW2UGfyEJDUrr96Q",
  "key47": "4b8A64hHdkAs18PWfmEWLs6dgGokrfKpxADa7NwE8KqY4GdNyxyXy4HoqCM1xojK7S7MF9fhD9RVDP4dsJeiF38Y",
  "key48": "2fD2jYaD5sgAobjLrtutu73aAeNLZkr79JYPeFKjAf85EPC2UYS6zkHQNBfbCYGXfoevTnNrQKoZN95FWTX7peDQ"
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
