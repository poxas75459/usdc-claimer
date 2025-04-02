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
    "5ZLgxTvghrcNkZy3VFQNjPLdjdFWuv9Qpqnc9YqEAzaqBpVT8YcUQQQ1gwX9SjDgq6jbourucWACsJk7tAEYKhrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cehxgfmk2zu3gvi3C7nhjNVMTX1263i4MD9A9bX3DpuRXXDkvEycEoi11Hd523NdVxxBTjvnKi6HF26X5nU3yBE",
  "key1": "GUmEj23LmjukVLuyyaSeTPSxsRbWcTp96MppwtbxbNfy3Qb7Hxzmcc8nz5pqQ2AwgJbapySG7kxZTdLjKwfUj9t",
  "key2": "fWywSPMsUkjwUiP2d3GD3ML3WQ5vJamacE6mVquxMobUYQjc4LKcEM5BPYpn3phEauRNBqN8bjttoWwjH7TQ4gi",
  "key3": "oNzeScjWQSoZv3h2xmLYEryGNVqrgekjR1CdRr6rAPKjHD8Mh1LVk4KSqeBycwnqkwFNaL3LcxYpLnjn3XFnUZj",
  "key4": "37UQPQJBNpZJ4Vw1nBQ4g5rTFpD4cteh2oToC2bDiKaLe9K4qZEngvmffvDkXPvQec24Ci6VQqXf4fFQsVTUoQhz",
  "key5": "4ha8pUqfw4CBr6SA6A4XWdjLSTX9aKNj1bztaUaPsdjQzrUVMXVdmQgg46An56tTBS4DkJL6Sa15my9ebetaTK4d",
  "key6": "3EYuHsjJaVxtr2Xs3XK9iJgbJxirQgPB642ghg7wCtjr5d2LjLRYXEiJjVrKCFa8f73F3QZ3TUVPqRg76WFUww4a",
  "key7": "2JsuCP3oWsedKSfRrR7jkkNT8mHnKDBMAnAwND4jVdqmMkxiHhUACFZsCTWL6gdy1ffrZisafHTpLCVgjzhu4xTg",
  "key8": "5pLnE1Zxb93Sxp8J5fUGa7ZxDCspE1qHb6YXtRNV6Q7PjAFjFAZ9h6AeQbd9pPbCcr6NLN1scrRWw7L2Rmd61SER",
  "key9": "2oDozgUBQsfRrgNzDUV3fSo7b6XQ9yz4Qcy6C6mrM7icLNm1yWZxtc2igfBzWkPRJrwmvB8jNFZozCvRqvZzUaaS",
  "key10": "5HH2PLP9adx2kjBYdGNmFvJ6iRa8ZJNMam3eoq2ftADDh6aZzNbMLv9kYvyJwZRNDUA4i4vX78GQ6cRkfTKXdi6p",
  "key11": "2nnKMusPR1hbtqdGDLqxZRZnRQUuTYcmUF5HiCBR7n5ScH7p5HVQxKiTiZzUeHGKMvo6gvpJwx5R1ahT7i8stRNT",
  "key12": "XBtB3hE2dXmm1uTq8zH4MEPHyDsqZG9FkWL5WLDxCBuLESQZtmTMjonfZceM6z9JY1ugjs43r1VK1Fx4uZPafkD",
  "key13": "3MZmUem6LRi4Eg4QELmRKkxYRLr5FMprY2RWNgQEYsg6Uj2f1WpEv2Xso1CNDUm6Avh2fntqbx1LrJUjyrYTALSC",
  "key14": "2UprPhcKNH9GNbTHJ4gXVf4uoHmJTKSc86bENcsWgQLQAYDKTELnQiPnC9aJZLtrtWqmMhtDTrGTCuc4UYv3Qpug",
  "key15": "3iaGRFueECVVsFdqYeBcKpkPreh7cdmpELpoZFABYAQe3wD6VedPP7fgYU3zQMLQChRZ42rVjwzTCurMm5quBec1",
  "key16": "4dXxiM4b6S33X1ZYCUdPQ42fi6EKiAPwK1SMhra2g31ptqDdvRg12QYZGWcwzgGPDNh6xUahpF9qPvuUMm5L5Myc",
  "key17": "34ejjfJfaKGb9Vb92MSAuBt4ERuYMxuS74fJw27JyEsHK8XqgsnF6Da6CdrEAKg4YgNtyU2huELhWPJwQ8wwK7nj",
  "key18": "5NiG4i6R9Z2i9oFNFpsRJ73YaZSycwwVzEMtfe5sSs8GdviasEfnbaB3kktTt1E4eFTmotjER4J9K44RQC9UnYXj",
  "key19": "4JwHHAAZSYt2WSeVrMMTscmFZoFbGi2TpHEcRWV3XvKuSmoYJCpioUDNvjoLgQjnjumxhWiRnfiF4WRyYg4UE6i6",
  "key20": "3JhPUGpbBhgtb6c3iZnvWBUZnHGjtRMK7yi1E8LEApxJEP6pnpRMZz4kDctcoUokbiL7hUyY658HVkGVEoTK9R9z",
  "key21": "5USjwYaunSVM4tpMif1X1QV5JSdJvGwzdTdcV9e9q4q1X6vpLtyCjToSp8zgng2B1Ng7urLDv7y2z5ZLayBPdP9P",
  "key22": "3afxmZtHXXuuLPHrtSCUfcucjw4Dtmv77pMjyZM6KQp9AoMnDwjEaBYSk7Gab8D72VvbZTgFZi9rcA7UoDoTmPik",
  "key23": "2ERjecMufeJUomJFY7JDP2xjYFk1RpcSJ4oCbwECB48xokrVBz7UPr3HTuKmtCZRJnfpapsrZ8xqS4JhE9ZZj6WR",
  "key24": "4DS9AMHdx4uNHjU1SmVx4cvj3KNjt5ZurnJq6CqBdP8DmPDso18PTWGd4RGdhbaoSAjZpMAdhNvhVEhzbd9scEWd",
  "key25": "3Rk7wciR2MfAvXe57royGXEGEkn7b3HaRBoP7B4okLA6Q5vgBe7VUhn67x7uuWcUHLEvGEGGAp4ehFHYdaHkV7V6",
  "key26": "unhnrBgH9XHJqQpYXMEuBBKce7RWoniBZtmdnMSEiQ1BHax4azgQMzKr6ox37xxk2zDtQrgEUJDvHGPNETNFGUD",
  "key27": "5sCg6BLhX5onL8Dk3sJSU2eXWQxxGkJzWKPyhqC8dK7ADyyAz85mSLBFdEJiKPSg45AtKLSarBmyJSHEnBmVMfwi",
  "key28": "48cisYtzwrGTyAnj2Xo9bVXyB2RN8VdSWJLgyCvJ9gGaymEBCZ7JFVLJY9GH36m1FfcCCzjj9v1rxGFdQnxawLPT",
  "key29": "4RrLHK11ys4is31YiQ1daYm3EH7MzPQ27TZXETr4mD9DghTbwrmWeRdSaMsspQh7DCXsknWFkW2JuvNyRYUuTDKc",
  "key30": "wUoeYZp9wU9svuyad3dw6Cdrfi74j5kkUrzn6sskffPcbnKx4ix3tD7qJG7dx92wTsMxtgp5uq15uPPiakPEXvq",
  "key31": "3JCPnRf7UpmKqjDq4AGXTddzueX77DHUsGjqpjvMMZLPwmxavL3DZcuFtRMTUJHKzobHS1dgd3PDiHXxBAduoGcK",
  "key32": "3uzambFKRS79v9x5fnhS6pJqfZ4VMtZPeMPeMYMjmTRyGBa78L5g6UCojKea4wL1Ds8VfTVV2U3uSHS7gju3GQgA",
  "key33": "3SFLnKZAmWMwxR17EvdZi1KPyQ5cC1vaiLHnzJ5CgG1w8LhuUegp2PWGcvq1eNgUxuik7oJzMdDYmDHW9dAT4Jti",
  "key34": "3BEYswEuhsUkFbfPie4fLcr9Hg5p7KWWUaEyRzJjYufBG9aYFgRLqAJ2gguBVnsPqds8imnLyYDSpKSPhxG7r8yT",
  "key35": "5yXZ7erWBXjdD116gd5CFmHDk5YYyztqDXQPLNvJnkhFkRdBWmASME7ZhmQS7SqvsFGXDb2RVfh9xz2fSHjXehsW",
  "key36": "4TsXuYMdWCpDrG2umoT8nCMPoUcaynA3NTUkDS4Zdi3j7yTpwrhKQfhm7ttCwDz7fCaUnS4muArj1hkzWgRpdCJY",
  "key37": "35A2gwLxKrp8eTrkYk4xx6LwQRwwPboXoFLDppPvYnwezQ4njaoi1YGT1JAB2QNigbR5A6uaBkWKCqya9eTjKFUt",
  "key38": "35hkqnsxRQ9jx2muevWdcXcyefn5x2cescffK55iwChTgsG3wcAKWcgoTp8nAQGiZhSQohTfgxAvYoiPrVGAXhab"
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
