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
    "4S2FtpxmBKJPAX19ZHtmEb8SgVgUEgNhJFXQg9g9eW3QSWE9Hre6qtXyUeyzV61BtszHb1vu5YNPrLwCqFGKhmYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aiRAPPSE7wMYRcLzjhzHRFB2raDusAQbDnbwYGarSnWKYKyvtq95XSZtfHynzovay3Ee8dtLMhpS3Vpg8u9CctJ",
  "key1": "3pRL22BDK1rRP3wYi4aZXFASeNoF7zkRTruSTYahYiS1gKbcyPaSn8eMtUTKn1ecvgtwMe2Vno3Eq3esRKX9jiKj",
  "key2": "49q1Xe1dBAm6V9FdzqVzozsj9BjeoRy7LxJbr7LLzjuSHCDv9XfRQ64Gvejrt4bhpgPud8KDvKMauqsc7iMUmgQr",
  "key3": "5fEjgvH5UDYukzXYBPiZffqWCPt7Y94CXE3XdcGA7x5ufRhmTjNSVNbaunkNpAUKNNHQQQ4cxEecDKgB3vaYvHFX",
  "key4": "2zWjZkWxJ54ctx2BVnkBU7g96CW5B6LeqdtHazEmshavqJFYdBpsSn99xauf2yj6ukoEj3UMJZ2WFSd3ovHQS4Tr",
  "key5": "39x6TnspCaHRfTrmFyj6sshkztDRryaTf2yCuJmDeubd8toffuHDTKH1n3sqdpDB8qYGfZysucDVdXyXmWP4okR2",
  "key6": "3rz6PVHckppUeNtFxjEV5JzUFxp2mWoXctt9QkQh5nmuygfQSEGMDi5jnox5PhgccEZxwFdisBoARxCvGtDqRX8",
  "key7": "4t9E7fWYQiZ72nA7Kk1EJpH2pSisiiXWN5XFxE3GXLZkLJifMU8uW6fo6kkXFn5nsZNj5c3fHfpJ8miV5SoHDrHB",
  "key8": "erJAdXLcZbwH6kHc5FYGt32zHpavmn7is1chq5BSTMe5y7f7NS3MuHZKU5d14ZEn48cF5wpWz21n9WfRofBmoHL",
  "key9": "4QkdYCayS1fvGAupWPvaPeinKcBrTtB55auX3gFqdqpMx5qUZaQ8AeUDmBTe2K7rpDjoTCV1wWG6puAraM1wP83h",
  "key10": "4EC6y7aMxPWCBV8rdTvbfqZhFz77GgGzqfgk3mxeVNV2dRmZDC6C6SgZC7fwNW4YFN9w7Bmok226zYtsWdK3nakJ",
  "key11": "5VQqgrpC7FAg1ikfjrxorJANpTT3DKbswMmrmpEp1LQfAfmBQZq4nUHEmRhM89Pjni414zhaaTK6Hu6eYRmGPKVx",
  "key12": "3PQBqQFbzXJMQJb1zbUvid4xtQVKDJ7MDMsv6oXeVxsmuM5vUBYKdDU9pUzGFF8UpwghLDE69kVZrp37BhxMerDx",
  "key13": "2mymdPMC2ssv42wknF5VbX9BU95YHuwq2Nq9777C1vhw5cvVJJRfdMEYg1tomdRSAVGQRuqmj6TZKwd1TMaVMB5Y",
  "key14": "4piYTBGq5TrGKuHRdTSAfdq29cDuKkH6JcWvKBqQxgxfTRaX84h2LL9YgXrXqiXGziLU2tck2jqp4uXHLJrcajwh",
  "key15": "4c6GHKVdqvwT9SQeuHxzqXNEe3fubUmSW9PA8mhuQj8McvZXa2ksUNtUGTefBznEZUXxHgGQMAAqGq42VHyYte8h",
  "key16": "5PbrpoSC3oNaavuHpg9Jy3vyBZU6i3H5mQ1qkd1QcUWYcJrXb1Kc7P8wBnXYDCUUkCukkoJGcVTEYKF2yZqLU7C1",
  "key17": "3dyZAVJ73wjvm95JQJWnHoXxRhxZhtxLc6FX1jLNGFLeV4b4zUKuCn9T7UTkL8HJw1e4DBPWseCamLZ7oHtMfjCz",
  "key18": "4GAySMFMVuPG1B5B72kL2Tq1vdro1bER2Nn3d5zQ9W5iHBLxMdKqBbggdmCpNnqfCZXruDW7TDdfVGRJ1tTi9DPC",
  "key19": "ZDphDP8yiTEQdAcasPTwRt2uuuWtfSvx9uKxZXKapmx2Am6rpBVcsezKzqvX7yj4QjsJVz5QkAKfWhMe5vMySYh",
  "key20": "25pFpgvH8JwUbWZnF9WeDT97FtJJqwTCNDr4gDNRwHCYXdNGjyL5cZ4iEoUyGpytE44tXJGN9SwEzaYdG5X3nvFz",
  "key21": "2CgaJWCNnGAAyL9VsbJpSBdwEBBBvFAay9rHt6cLA6iBtywn7rFfhDrXeCV6bhh2r2HJ5hysZwUpeniQxEDhSGKG",
  "key22": "4rn1HyhHDSDA1jgcnAESogZbK8UyDXSurBZgPKrBp8dQFPrMcA27XuKmkfetxJvwoCRWpC3HSh2MyYhpcCGpmwB8",
  "key23": "iSEvdF7uXE2zauFJ88F7JtxsueGrfSo8iS35ecyxw9Dv14R48THPvNM6sLkQYVD5cX5QVZkw5Z2Lx1EVxpMgZ8M",
  "key24": "4pneA3oXDxGspQpu5aLEMGmBSFQhmJjAJLKib5MowLXrjnJf5VadYospKvm3zvGzGFt4xnZVgkYbKZdAz4jaCJo9",
  "key25": "vAYaXyiC4w3qL5norNX2aNfSwnp98LNX5BkRruFgvwcGWLHsMtXcNdxgfXTHi6Xv9ApkhNftU6jP9XGnc1LE4mp",
  "key26": "2DRw7zCeNDnYeL7SymgA1vDvF9H9w4m4NzSXJfq4tQSzKyyJkskH7QkytMTYzksexoiT2d8BATcH5uVWgxGd69cN",
  "key27": "7VxhtX2fgCnz3agNHKF1QJPstmHJxmTQ75UoTZYnmZrPKHDiC9CnPMxtV5eV2xyRP5VuLH2csjBz3QsG86G5Shh",
  "key28": "5ZbCoSkqtTM4CFbG4odQ2iAn2UqMdPEXPxVQsDfBAo8BWru791tVhZmmFQ7qPUavP6sYNGiL9Me5kQcYeRXceWo8",
  "key29": "Y3vGdSr5d9dAYr1k2y1tJtgRUgYs6Ch43UUBYncXd6RmcRp8Y3QqwEFZ6wDPjcmoDY6efCNniCpoK51Dtp9oXMg",
  "key30": "48x8NUthHmRwca4G3WMKNgunvm1RARzF2ysXMXYdypEbbDoGpwZoQMNWhxj5n9FYfSUKqX82ZPGauqCa79n7ujr3",
  "key31": "2mCFNRWpzFFmGivHE6DfqquLMjX2hJcU9QJDqZT72yFfb8NB28ZUr4D4dsXgzpfaTyaTQLN2Nf9TSMoL8b6SrEZs",
  "key32": "33ZSNhbxq4k3VatcwcHJwMEnK6xscHTaJPgmde5tFJJjqGzZR1EYYEwRoQDMLpgYEENTuHPTArSvSkCtosgD5qkc",
  "key33": "65p2ReZX7uC5f8S63upmJh5Wv3a2HhnzVEgff8Cr3MrqSAFDtRGUrhmcxkgEvkS3ajNLcJKYUQJt7J29wkvpda4F",
  "key34": "rsQDpv16CAGWdChEpn9Ct9RNsW1NDSPbCTphC42ESFBhSEyQhqy927pMza9ZXQZoCSGGHXnpDNSocbWqbAhAonJ",
  "key35": "64vueRq5pX9CMrqbZY7mHniQ1QhTmYYvSWiYcYJM2PBUgtu4TUPsu5z5DhfnbmzrR9Wi1vU57zRmaK9Nys38dUpa",
  "key36": "4HsMpGjfBcBT1hZCX1H6dkzBYKycUNZUZxFuewccHRdLydYfnQZfqGqeBakgZJNHijxvePFc9txBPBsAPu2uSUGt",
  "key37": "2ntCNXnkajrM9p3PzXmqmF6rof3LdgTiZhKBKEaNzVvHaxiH1SmYibrZYM5NNxD9W3dRaaq2fYEvuRscPk9A936m",
  "key38": "2JiGgQa5rvu8GkE9JBCxeVdTChoLBStBwWVtJj8URTTjgeYzBCAtYFTLXmiuACqju4pQ7fDentfB58znovuGZtLp"
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
