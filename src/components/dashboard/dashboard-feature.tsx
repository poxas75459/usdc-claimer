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
    "4Kp5BZ5QcaEpRvShsKUDv59quVieLACjBqyfzzs2N3L4Vsu6GF8NMh5vSMkwvyXXw9c55zY49uMwRLmJMDARNXPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3knoQYGtexT8zvb4wNwMenNCyPhhnxhwvQeL95n6Ut6PSuCQPz2crA1kKUajYX1FpAWXA1K9YKQuiPHfBsL2euBa",
  "key1": "wM3VBfy158eYYLjutUcfS3gEbtAJum3sRmwdr8KKixAixZfYpFFHnouanR7reJYEUoB5ruJYi6WLDZtNriZ7cKK",
  "key2": "uQxiRTsF24oHjKs3rhbA41o3zUpQZBNAWNzU195556ytTSy8ZQK2CUPMYCypShAGbLLfZsnmUfCVeUuz5g3QTF7",
  "key3": "DVVq2j7Em7W4HX4VEjqgzDXTgnttsVr2xcdnNHEFy7ZUq8ZtnDFg9FtxTaqfonLuJxGQR5Cn3U67PGfBzQ426fh",
  "key4": "3LZQvTXLRrwaoL8qqQxHgPSQtnmhxbdxGWBrZ1iAwRMRc8ox1e3xejGojHsJQKXdqzD5eCnafmNX8txFdcKwty45",
  "key5": "5uv5X4S4UA3uzA7E8U57vJjNogeEhsu3aBYewMt8i3RFg2gLGkCPicudwdQRQM6H2Pk7yvy3nB2brfXXbQmWmaqE",
  "key6": "MG9S5xSRXo95TnHoJyfARgUmu5LPk1FkQhojh9ajqHxYCWU7UMZf1XriWv1ESgcRXNPrvFvdp6cSAA97CehdCtL",
  "key7": "eKoSEfrH9XTXbw3QnERw8Sx27ibdrbEy5YgP4orNCWwfC79XpRXUwh13jwtZ6zNfhc9uxrCd9UYyUztrUG2Diwp",
  "key8": "5Bz4FNwLXTXg9mfLjFVqi1NrxinuZBZ7SvZhyuevPG7AM5BH8eLtQw3s2mRpTQ9WHLryVYxvs5G6VJRkHZvYdzQA",
  "key9": "2p5MQfNkYVY4RJPvqTiFiLpTxQcQWhoHEqakD69vajHSnHihcnFF9ic7EMqPpS8zYH2o8HLwAQwU4i5ecr3bjuh8",
  "key10": "4wAAWiwfu3CjxTPhyTpKAfQ8me2jnSVsLifXZcqEeeTtDVK4b8XuQw1nJZ49G5hSz8mgAeSVQDas6J283C21xNvc",
  "key11": "BnXos48XWDotwhBvNU2KcFkbgm1mdciNGZpqJQePJ4oj7wZZEFedwTztNJp5fihU7jgCmjU72ANJbqU57PEYamE",
  "key12": "36PscerY2sYNFjo6KD5ypMYoVTbVPYFcw5oxGm5kTMEzL7RHgHQSW3jtBySGUCkfxvBEX4wAkLAQEntseapuZ8ou",
  "key13": "4fvVxFP2THkSB6ssYJB5ZTaLzXXE3GffoUvHghwNbP2DfLU13Wk2UnsRTjgrcH4WxPKq5ojUCgmbBsdmQV17BSeS",
  "key14": "57bC1p82SE8GxQsmxgPHPmiJtmTY4ko6pivaVcS625i1w8YcjCGkhjmouMZvzUc8N9boZLsrdXWHykMJ9K81wkfb",
  "key15": "5HWG67Nuy1kovWY6EchAkBTdahobVQVcSAii6bgzUTXvA5WAMQirH4FjQxFCfvx5VeMvGA4oZunAGQuRfTcC5RnV",
  "key16": "mnAPDsY2WDCTwbLaXprS5QHHeWRfHbHSYuUZ9UZTjPQED6Sb3xsKwZikzcEaS3JuZF7ZTPhQxs6LbB8Eot9qe9f",
  "key17": "2tijfG2gjNFFYWc5LKT2T1TsGShJn5Zyjn6PhVSypocSevf6CvW2gVZkKg8HW9fWX9fCQLaJK11aCFSoinyb2ePG",
  "key18": "5bYz735CkSvAa1iz17C3XSaKZ8yhFrxy6p4epWbRkswoqpatHum2sSZL8uRgbJdvBHPTzkXXMky7Xoq3EKHTjCJG",
  "key19": "4BbHVGxzfGCcbq62ZSJgnjuJhm5e7sQ2PSMfPBvLEm7UArAYsRTfsAshRxt7FZhjJnXiKDa9uWFbdesr6Uoqi3vx",
  "key20": "SPZ2cKXKNyDrr4YpKc34CcF613dEGKQRHqpkS4tttcUmqyYL3kQMcdDapnVGFCb7nW51iuCBoegKbEtoqu34Lnv",
  "key21": "3DqVBuEcafxPCR7WagcPwFvXgZq3v1edXdZLUZPP2DhE1S9VDCiNdQfcwszL4z8ras7Q7dieSzwKDd9EuhzaGYdD",
  "key22": "CeycwvRuV6u279LsqNmzn6ZaCVvz1eP6wFLZKSFa7tm6HKuZV4aEGtGySiBXm9K1Pvr7fQGsjjh1xdwXUQgznh7",
  "key23": "4zfy261SRFGPZQFV8sZyyXESJTxGcD3EsogvrAzE15bhHrVESvxfzRyaa1nZKPDEo5rJcyUQ3wuKhKSBGRumWeS2",
  "key24": "2EB12x9WBM21Qk6mVizbSDpc5Q3wjAjGfgR67Z6CkwZaysfWrFtCbhM8rscAsoPqYaGL8AinVi4gsYi2xuWV7j6T",
  "key25": "4oKUTkedJK2TN5u9EkcigHPPSh8xz1SPqASSYBeWdG8vyVDw7RCF2NTsgkeSFTWo9eR13FiQYepSsffJbmD3Jo6n",
  "key26": "4XhRxBpAZhHEN5CTtVerWrT1bHyy2KaiXdVEpoztxYrfBwYbLTK58dV9mBkUcsfE6jLPNXhDUPEKHByDhtQsCkUM",
  "key27": "2vuk7rixDyuTBNCry18Cv47czStWCnKZ3xm3KSGiQW89ShDv5k1PySpjiovPtg8ULJita4kHnXfMzPMaqSEUX4t",
  "key28": "4QdKwmUKeaED8nw19HHB6wMkuNbnRfNV514mSHNUNUQUoQJd6LwtGFLyfR9ZqTVTbhdQbCFdgmKNvDmUo87dRHX1",
  "key29": "3n2cFT7GoCzyUj9gqWPqKAh1ZarRi5ft8ouffEZuf9fp9aeu2F6cdz8mvPUfQQa85SoxTqakZ6kojg4uB4zCjp7L",
  "key30": "4ShSLhpNMtNmstL4SJRoAmTRmxRpr5krs2bE1Gg1BcdFWAQRpQ86WWpjhwx3QfKqnYPczxn6t3bNWYvfJCKjkqpz",
  "key31": "2i44U8GZvfhR4Ha8gED7fQqA4cdkd4ZLLHJt49gff4GspkisQZqwNNQAavhEQSkKvrEasrJPRhxgvYeWkp2NBPks",
  "key32": "5WNy73bbm9cx7UxznMR8b6qu6azPZh7SAq3xpqJ7z4Y694G5sSpQiyx5Dw1PSKwy8Qd9ycjFk5iak5QrNWixdcmR",
  "key33": "4FNMbKf2kcY4ag3i66uWQt3KsuZtEUWGHY9E6nfW9g1B2t6zczyHXzheuhp4Y8MffQj2nCYaUANMygDudUvdzegT",
  "key34": "4ve1DbZFfHXuzCQ4zmJZgg2rGuG7Tj64FWkgGi9wePP6W4JTBe1vhscjrgtsaWEyobHGZhQ7EoCQcvGLPjRug2mT",
  "key35": "3JET6H7eCi9WbnybJs5Aufyda8iwkTfZjtttWxe5Ajcs6kUzxf5oiGnk1ZEuwi9oz5hn6PqDGQC9qT7UXqNdAz1t"
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
