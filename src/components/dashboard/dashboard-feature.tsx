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
    "4BiJDY2exw3mtJAYjLvgmAWJQtazpX6aMvQFegq6dW3tc2u96C38HRnLQ4EfHAfVkSznpy5ac4sd6A2WRDcCUcaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fjptAtPMGWoa5JXh2dtP5SUEC3i1RxSJYVY31RfmGZTqbL9j3WGbgWw5AJPkqx5m5ySXzbm6ds1Sfjr1eghUqVK",
  "key1": "49cQ6WWya9DNKx2P2NxAxsLZho7cetSx1aqTiwoL9ndFEPnNfYoMp6GZKrxT7KzvM3F3JNuddNRirLi1BcGLq2HH",
  "key2": "6KsU12SjS9rqpfxraWvuXA4f1TL9Y1Pjn5kRUCJcgXRic2UyZ7Fbc8GwP2CAeZEGmdTX4VnwZumPcAh7uVzyC5T",
  "key3": "5z1r2EMaEq2Moa8N8KTdJvizS4p6aoKLXwXZC1gdu8JSCU7Gp4zhxikdKMkXr6n1Mbq9ux9gtiQPQZTcmSK4fbxL",
  "key4": "yQeWC4FmQ7gwhg8XfttnrKcw9X6BqLsx4mj6Gz3crg8TVUsbWYj95imcqJ36KooYgLVs1LmS3PmdHNRwnuyjNSi",
  "key5": "Np28caHT3Ye1zCHmMKpZhTYrLcpzBdZw5J2T5kTacpy64wDgNKFyeYfUtWfTKD2eh67uFvLWTXybELsub8VdQ7p",
  "key6": "4jCTbNPE7depyKTCYx5jjRPpQTNWD9NmKzwG7DLjpdN7a8XNXCpaVQUxdUHgAfnbiEMsiPukTMoU83pWRtpJyFYE",
  "key7": "3y8mRQVAH2gJdAvWgAdvu3JReZx6VZvZhghrRzVjzp5U7eWC927N4imLrCmsQR9jW4yypACozhzVTx2k4kUGJEZS",
  "key8": "4uaG4Y1MVS7BqGxQX21H7pxsfMe4JVdfHFFXGWGwgGFSeAfsP1dPjENxALw1YJ1nkMYowAV5ExqW61djD3gqaHF4",
  "key9": "2ubKAbSdRVNimeJP8pwXfxUUF1WQqSd2ZaXQkCMVdwXY3meZAXD2k8WJzuQWsfsKx62aHBrXDCs5D7kF4m4Jw2Bi",
  "key10": "4BmcG3xYx4jbr65KzVA4vXAeR9CXBkYHa2wKgGoBFePNmuxN1oAMsyT88ihYG8Dam2iJKAb98xgxLH48q7mrCY4p",
  "key11": "4ThMdCYxfUpUr53WW26CsSThugNzLnBo9HsxBV85Nn1pbjXpucu2MTtafVb9sdtgngv3L8Jxww3uSpNhmEBiioZt",
  "key12": "3LB4cfiB9WuBKsqBLLqe8gfiHTvMfyfgWaTWytJDXohFsUhEdoihGHNYSnK6a3qBGEB3cPg93BQMYwck1YSqcWt9",
  "key13": "49ShLeNC4eJpUXzQEatnG2xfbuSEt5Am9onm66av5rQN7muBNRAWJjkcvEhdKHsgQvQC66j6G4kdkYQNPKEiio4W",
  "key14": "25n7UufymErUXANeGSvNUSFmoWtT7X2rFH6tqRDPSchULNQczeySbk7vkPAJCEwCzEkqfYA6saAzereQdYUFkkoH",
  "key15": "2RckNxniGSk5vrmaKUEg9ka8bSVyLcyPEkizWz3jCxq2Gz6sHgMPrUrzB814ZLqsQ49orm2eCwzoskAEobru61qc",
  "key16": "529zgoDsrq2yYVbjZJLpumGZPAaLifr86inEzSYgwqDaxKR2oAwoWosfpoQY2foQFEV35i9DaT5R1bnsS7fzTVdr",
  "key17": "3NX8ngSKH5PANmfaVLZZvMgL3yQGfquRaNzH9xxy64Z3834PnCoHeMdgkHKEC1Fjv4yAzCi25YosTfhmvFjP8XJ",
  "key18": "31JppEwsdB43H7dwbbCXtK4iN3sQ6bh8tkFkw5jn9HdWK5Czh3Z13RvsBoTWuUSriskJZwPx61X3Zsz9SXb7sk3L",
  "key19": "43jyo6D2h9RrmrojMbPJEKHyz1UZqe2sW8nmQLssj9BBFR1q56JrTAeEebBLWui9Ld2yengbUew1SUCey56dYRtP",
  "key20": "4TZ78ye8WHnvpngS4NrbbhjigUY3wyLB2tRTYCyRCMAt4VPQshrv5n3vzKoB5aL2c6xXUgi8mnpBpsH8K2A6Kbkx",
  "key21": "PcRjAQto1X2usJcapFyEwJ9NogF7Y6jB5toWMK3CEQdWBzqMgZv5Md3V1fDStomttYzmEXkRztNkHN3YxW3jPG1",
  "key22": "4vhMrEQjcyEnKjzmobYThZ2JVPBxkaMGc7UJ9G2H7enpGGGoAnVj8KD4sajamts5G1SunmRaojoR8Jrqc4y4F3NU",
  "key23": "8AnizrXuwJubXSC2N6Do1hZ8J8raDcNuSAbX9Ksm7X2KJrSRAvgm8GXpYvqn1FtGEHDeYyfxz46dnJBRzvTMftp",
  "key24": "3REgVvV3LDWwjCakJrVjBXYqaQr77SRkwxpE6zmg4GzaHrGxfpfYF1aQ1rxzP9msNkrKRu21Epp9tZHmBVWwGZ86",
  "key25": "5vWELybtWecjigcESKas5bBxpzaFnvuFojfbzbZd8QNHKdHjtAGfvLAmoPgaX4pEVQUPrmaVstemSAZbqmz75q5j",
  "key26": "bCbdcFfbVFR7dtFUTWPfbMdbAphUxjVL2sjZdXFXBYtjaWSePS6URWXNnAP4vj1JAAG4KiEqfRaVC3pD13RBgtM",
  "key27": "4RV31QC2fkqEqVk8qzdsM63SmFKASRBFU1pJ3MpadofPRH18obpivoNhMrJfZgaoKHN9MzbRXwBpAUaqNkaF8eDD",
  "key28": "KJQiSDAX9cVQ6wRmHPGkVrH3tSQebd7LYMhrfnMW41fg7Met9encdmLjVSuB8vGLj6P3ahLwr9JHEtLSRKwHHct",
  "key29": "4VyZjZyd1ExQRN2FAYKjzvWZsbogUgigxsRSzqdTvRaCxaxGTzfTrfFLtaQvzmDhWmz1yWDHRwk9XT3RHNj6vT4v",
  "key30": "jU3QTcvJq94XZigRGTWygKK7xnasqJXYNReVUogarBbyHxsGhahrEzwPYDoyHGESvHxxd3VgazB5XgP6gVLxdMu",
  "key31": "ocSmxpmMAAQZcjMK2SyEAcJMNkkhuu8KtPieXTH8UrSLbzcznLRLzH3UpvEus5JtC8LkCmJPHd3JYcp5K9PqfFx",
  "key32": "4H8J8zhTU7Nqgou8v68vg9AMNUGD5ndCmz6k45nhTraB6obbccL2rijzNPmQhAW21RxvSJYsRjhycKwALVqj7yHi",
  "key33": "5wGvSXxtt44gJKQJQJRm3kBBUYnQmkjW2y3Lgdb5X93u6TUUZNqBkrDhoAyRz1LfEokkcMoTZJiQRvhHj1sZKm8L",
  "key34": "2LD8tYzzrs8nffU7tKMRr7nz1ogt27ZwwAYPxxYnAuzeLNdisSevuZaarW5ai324RfwqwAaUXk15gj2QyyCPYxCZ",
  "key35": "85T7AP8cNyapRHnSbHvhrvvdK94vrb8g2uDtD8fk9M7NHnbjnq3dNM1KQcPzi8nf2j4K5YvogJsuQMz64wWnsEq",
  "key36": "2XemfDwQGV7p5NJk9ENvHEBm1paUhnZVDminF8M5Fh9b6FZBhzRKZfewnBv2tBeeooC25Rj2JobhECauGZN27gdS",
  "key37": "3vFYATLTyK4fPW9985A3tbiD9PNqT2xdCtZGn8YGNN9tKFsTjBKRLKZ4zcDJdmHbzyQU5uDGnLL4xxNQjyGRitaw",
  "key38": "5sKM5PKTJCXr1hcFUCq4MHJRyXWGuCE2d9kk6tptUGNvKGnh8Uyn85buzkZQxGRsQfswh5wmESiTkzNifCL5KiV2",
  "key39": "2nipNHd1aPGkpM5gNH6iDxTdhE1p5sTNearv5qtxfCKEP4FuHDdP2p12a2Q4fzws3misYTmNUuGASDG9fP3Un6cP",
  "key40": "5Gc62UH6Cx9UARhATSp88jQGLLTHvo17tsrC6SPwhUtX3Ncy6qZiu6yrV2Jpfja7MdS4yCYZmbB5LisYXYLMFV4A"
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
