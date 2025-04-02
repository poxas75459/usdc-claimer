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
    "24Dp3XuKu6KjmRALhSfvQRtDHwsQ21MaAtFWzAa4Y6NyFyAsrKPRbSAkdr3axF5yaA6z9WokTJ6qdK88fjWKoaYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d4zJj34UwA7wDfvfnS8cpHtXTxz8AQ9Q6agvtoLpSkTbmraHt6UJePFu7c8zVXdHpoV97wGwdsagmo6ntESLXwD",
  "key1": "4cnieX44cmrP3TTPbZd5dKqpT6Zvbm2o9KRaQKQuxXnQmtmCHGwMmkZsnvWsE7puw84pWpgDRmN23iSfqee2nUW",
  "key2": "59reQ6n75C6xnwhTmdGpijFuqwaPwyQqjyEj4GEQD9YsWHB2bZi6J7x2fMHAd8K15mqGszPCpqUv4JPf82sY3AvC",
  "key3": "8VxYWczcLGvwFCRsQkXjKfuDb8JTJukxCJQUXyqU8cBzzDLhd4vv3dysxfhaRXwoFpYcpwRvmwB9853JUd9g2sB",
  "key4": "4Xhjn51bm1hhJHqvYoTR2d16Ytj5sXPC2WDRrTYUYBEbg5VG57LzdXJQ9UuswvvCDgRULcjhCoFAE34JpC1uobRx",
  "key5": "3n3Mx1QsbKEBUY6wYQ6S9MdPVv6gKSA6qQpQuDGZMZXftTczGDZKdskphX1ywpp9F9dEmgC6qMdGEmdHxK4k74bi",
  "key6": "5j9AMQ7vQmMZv6mLtkpkJFxYCvNSwi8UQiFdv2T8zofTp4saCgiL8rKTdQSvKDs6HJ3dGvc2VML4vgvi8irRN2fv",
  "key7": "38vUJxEX9ctW6gJJLC5Tar52Pb4VoWXivH1bbtyK642rx5FzaNmFGCjsRgps4cXp1iUEaue8VHcSpAnPN8qi8SMp",
  "key8": "55FMdwW8udVNs7M3kp1GeX5c3TJp7XSZ1AYckzV662yCtKftrmaRvRYGhcKF7UV8xWQjRcnVnYtuCkrqdCHRGYYu",
  "key9": "5TT2PjghhQp5mXRnrYu6497F9P4nkvNNcR8GF99BNdvAWoBNG7piabtkmGAY4k3TB1KNgQUNUNxX6ER4ponggBA6",
  "key10": "4XZJh6AP1LRSkK7wGMX3wib8AxzkofPwyTEARvGb5ngrU1pr6gCc6G24pWgf3Rjbh2PLS9UdVCAaW9d2f4qZRBuT",
  "key11": "2paJBB3md9SAfvL72Qon6wpM2iqvYG9oQpHwyxuxZZHjx8hjuDEUeCKPH97NbiLA6yKFK9TrxWgGkjLh5VQT11j9",
  "key12": "4dAoZVkb81eZ5GEHq2SsUax9LbhaFxMLgsxLnbWhXEhF1H6wL9AMCrrYB59e3j6mdHA6CkxXDKw35pb99iK88Z2J",
  "key13": "TZKGC79H8d4RAKfF8b2xWkZ8PZBHNukDFytayugAmKzLdaFpMqusRawBAi49VTzy3a2doMtCiK6D5dfyaEcK35A",
  "key14": "3PqUhMkDpn1DjvHbdzCHQPQVP2ZUWLcQ1Lzk1AMqyYrnQNYs92qrc9M2UP92QViPhVa6uURzxE1Mr5uHuZ7m4dAx",
  "key15": "FxFYvBYhXTwBkC6u8YzkvMxYEseeziMNPdRq4YzhZD7aoutJQAtWgVFmtG7JibtZsygyGiYUz8gCkwAdxv7ftu1",
  "key16": "428g82m3qNeBtVu4hAs72yoBKB4uydQPDK7tc5yBdJbfRwT5Tooe2gt8dKDKj5DjeNPTe6SqgGRFNUs4GgooGSh9",
  "key17": "cM1UWUsUTiSwUY53znRSNp2Tebpq8EqHY9fSdNwnmQJvppTRqBDJ46paRuU1MuW5dXzpVvKmCz9qBMtrSy2AA7q",
  "key18": "4x8HLtQ2tSJtfX1HzWkYW1CgdisYbbiEiJtrpSp5w8xdtcjQqEYznsrgtA83ZuXzRHsMjt2Udgs4WxdpUm7qBwrT",
  "key19": "3iU7jo12ncYakYLYpUtYwynWyXLhedf9tGSs7YLhy81eZa6MEooycWBBEKz8qgtguWUM4FR84kAd1VAw9Qg99yih",
  "key20": "3Kd9w9qFcyeH9UFtAgw6Vbr2mxpWB4T9Sg6zBtVWL1Mr6wxUoRtEwc4bLkSefMvgJ87kxjrPGDJUP1cxb8LmBVU2",
  "key21": "2htRY85z6YaWE9ubFXEqMz95oab6Gc2ytLMV6GwUqAuKnD8vbz8uDfj95GDrAJJmt52CngEb9hk1QRchF5eDaRxm",
  "key22": "3Dg8MFwQxKLWjnXk3Zz1vZZXZSP9ChBSVSHFe5SMtWb2HuNvdgaUvJj4nikX2tEeb4qrYdV8HLwbgHk78yXBjeHs",
  "key23": "5vvGfF8NNNtuW8ebPAW5YAAGKdoic58DiTmkvpFVEV4GejrLwQkiD8Kj9gbXffh4MqCo33i8TCM2NL5qABUNBGcn",
  "key24": "5gMz9LqwpyHTCv1bUBSStyWWM7gmFpkzn89xAMKHS43ctCVx1B2oSaCFu9JbqycvadxETDJYgrfCHphbaVGzNTNv",
  "key25": "5c1CdNtbJLvM2A5nJLkiP36AJAFHZ6o4GeerxZRNR3g6GVirr8ezHwDpqGgiZdQ6hs6GNQfN4s9mpQQjDrg64hdU",
  "key26": "SKzCVAWuVkZLKDrmEwE5oT9Lw2moDqgy4gtQ4FWY6BWey4fuayBBfK51MaCumvDbweKM1UTb2uSruS7YRwe21Em",
  "key27": "61Mzdzmiz8rBbhRpoD8yqchk2WaNNHX5vTDwu4KMjJbLK7brRmnMwNz2VhtRV98ESV72iDPTznPM6PrDJLykPCDK",
  "key28": "2RPaDzSPVEVPUzmNuc7o5qsw8Eiw1ntzMhWhQ4pFvwvjVecxfdjnDgSRmnwMqPfyksPK7aF9ug7e69LpHxJ8WjDH",
  "key29": "2JV4ECNYmjbF8C8A2P5uJyy2mpDC8mDNy9H9jZh3NC7L6QHVeyn9uFRbMSAum5ucqZARBdmgR3zkgLKjCkoGZEYU",
  "key30": "4E7G8tNSt8yEq2RMdCawXge7cBPVasS8CsctAXDq6vPrrWJw87WV6GfoKXa9ah2eS8Hex1LGqzogo4NSrNpmjT2D",
  "key31": "2Pyo2XXGqJwDwnYczSzNn3KdikH5Y4YJTWLd3nfqECfv9qgGrV9RDpHshxWFRvM3zhuAKQJE5AQFkmp3smUffUqX",
  "key32": "6DLJjwSvfsMkn7cjtUtwEobyuBVppfe1ctoGCuMBFAkC9FSBBcLoe1cqckycEckfhhohKCnS4tmMBj7LWCkVfsr",
  "key33": "Hx9E362AUxYfYDd31paqfXxe7pcCTEmErQy2sL9rMPyqTiZCdGzdMewMpTFxFuLD4oLQfu2im7YLDgLxiN6MrmB",
  "key34": "UK3y4D3WhUmRq9kcCYmKTGUc6WuJz8CAxMHZ38dcb2hAdfZzzYB4ZT6gXjN61WfRB2qCZCKT2eDspQCkjbkZJ98",
  "key35": "2uKNxbzqj3pH6UCzJXKX8eCqt2fMa3eQJ9tQ1SeHavZVtq1b6ABcJFYVWcAVeA6Qwo25UyBU8nLkszZAjf4oNsSE",
  "key36": "4pyxnCYH6cmecSp4srgVfbP8zQqqoR6PixPom6ZsRMaZtbomRt7pV6a8BEG8E5YVYiypQqQKJA3ysjyCX12ijrhh"
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
