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
    "dZH662zBsAnJ22M6AuAUTioon3VCdgMfoo2KpRUs16ezsNhn7EURXxZXYvc52oG9QnVBXRra9gAXLfJAmkgtRsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwA4k44F4ZNQx87qPu5rsPcgeQEp3mRLK6Nfkx9X63hTTtDaFWGiwfMNXWHurWt7jrzukoSSdkvCRk3ydrozZZ5",
  "key1": "4usfTc8BB3skbfqoPtrH3fDEyup2UFLreqtR8nK9q8fE53ivrhprRb73tDLJJPPbbS8RZZUCok3DoMjdBUCwQjuo",
  "key2": "5Zc2Phf1faUTMKbZMEJF9f6ri8zuntPKaJTsLtbHJMJgrAHgQoHy2ep3bRBd3Msgq28JDJ2ijVsd6GFFauLdPhzk",
  "key3": "5Qbx2D1rw4tSUmiUuwUMpSBM87kR69K9ZBf4a23xAFo3qUUh4TgFMN99Roixi5b6KPdCBnTgwer8uS32gdoPfCDZ",
  "key4": "34zpvawQMCHHeTnnKbST1HiuigeNsc5w59fGzgtsopf6QJZeKpxDRQkXyrT4M6Qn1iz1iNzXjPYHRTJMibk5ed93",
  "key5": "4PPNiAudSkt7WoUwL1E4XdN64125VFEagEmhsFpsshrwusezgRUqLNrHP6UcdZwvaJYtL9zeXdouyp7jpYCjkRLT",
  "key6": "2r6tfVWoTTqai5QzCrU19cfEyWSJFnrpjZK2PqBGphv1T9Vp6FCyc9BUZihCQPqaBH1vNtrT89M9yVbpfYNzVCeT",
  "key7": "2oRSfKPTvCe4su5FLXRey4jaj9Dmt3hD8Ss59xmK74JPymz9D35JUuRLmki8rUgUqtwN3JePf88BpWp2Yk3v4oiC",
  "key8": "HRqPZ5u5d1XWJkfGnbmxzD3seyaNrS1hDK1Y82RsvYxwvYTZ4jSskRcAM5J2hNbomLVUK6EXBD42tJ9Q3ctoRbN",
  "key9": "3GQozR4b4odyLeVAcTW7m6bSNp1QewtfBz7B8MhpU5ipJk6nzRLj8mEaVZcY2uram2a5158copHWKo7T9GjJkTSP",
  "key10": "4zHqof76ZDmxS1ShD47pSYKaiUZas7dgJiL9BjLS3AJ9YhnS4osyMXvVJ8PamLjSzaWNn3QgsNtWWreJpq1CdRs5",
  "key11": "2qeoxqpyg45zW5Z1XSpT5mdC2pgckUrEE7G7MKLi4L2jdvdRWmWdcteXo9a1vxK8xSrSt2V5euZcUnjQwWtFww6P",
  "key12": "436mCvEt2gP1qSYULETETaFWceSgd8yUKADpHPU4ceLVWUTxhB9JsmpXarrxkYaxL4TZSqHBhJdCYsJ5t93q85Cs",
  "key13": "aXiU94F9R6uzgHnJptVpUxr9LzACTmqLpBjCccG1pzfbjyKbswBn3sUxFyb3oLra7Zf1weQhnLibnnoafXMfxPc",
  "key14": "2em773HQhRn7Ly6zRfh1TSfPocWvhT71Y6LbLQD91gDVr3d547wzpVzjj2y3tAyaCupydhNHCkUGhjVAeDtWFSR2",
  "key15": "3u1wFvvtnw7i2CktBDPCANo7Cnth3ve51ep8ydnbVULXCb3p4wGmGNvzhE9pwPinFHL1bMxbKKDN2r7fcQnvpHzn",
  "key16": "3fWfbRe6L7rXNbTyp5c6G4UsqRNsz1rdCi764kLUksXWCrAbopCxNYU43qio12TjuxrZsnVVUvppLQsgjqb4Kr46",
  "key17": "2z3DdpCLgFat6VRkuxScj1zbGXFXj2Yo8gNTqDpfMeB17pq2fjfnZJzJzrc6UMbniM6gFbksrJbCM17c8G6wLBdd",
  "key18": "5jQMsFH3kVz7WqLNGkz3LAFrLtRVmVgESuY3fMofPbove8FZzDF6GnNs2r5dAwKJ82durKqLU33DoFA2qLkWF1rG",
  "key19": "41iXoyYQ6mTqbR2wY6gEXEGjyme6XJmeY6brsoTgSSKkBJEAt54iMoN6ny2CX5wi1yAupiHgu5THybKC9pQrm7Ej",
  "key20": "5AZQV3Yp3bGdMmQbKfSF8fXSNvSmeE8H4YUHFrD1m7jCi2GN8c787sHTEjpe1u2UoLEm2ZZ7iFCGHhtNq1ojPQL4",
  "key21": "5KqXZPRsxiHQ4UsawB5YshKytmieZfgkKhwv7w2KEQgcMHLUeywjMP3nznrfGDURMFsKC1x1LhAQZhcLTeuLQ8ZP",
  "key22": "2rL7L239nFagKFktHpvpAr7QZVuKMEg2WKY6U76fruNtvjDaniPMczAkjd6bxnpGik7kXrgH7VmpMCUGhrzjRZHy",
  "key23": "5MuGzwZKk8muXoWHMaDjhpZjnCLAacVKjNcty57nEu9bPZ1ueF2gEb7EPTEBzfZ1WDogn3uBYEeSEww64PQQXwZM",
  "key24": "4FG7fJX5GwfQ1y4UusVhsM3g5mjPUWey5Wxpgm8kY37MByyJyPKdUfZLKVfoVaDR5Mc7rmhSTVAwBtj9HVSRaLnb",
  "key25": "5TXtBrpidT1KzJF7fhcNQzoGznUk6CcRPnbRwu2kKhdjrDF77a9FgcZ5HEVMBHA2NABYFga7PsjQGcAomAH9ivSA",
  "key26": "41CLPxo2s4LcjCBwQJfcKnYMvKSpgFhgrdrG1r4DHYq8dvUtvRksuTmanrNWazzWtbbVyLnMCnr7QKUBZePSSB3L",
  "key27": "3P5nGdXfUWXExHi8tZbPcgWteFgWR5ifBe2zLwzjXxDv5ccYunmYFrY1EA9BVUQ7rUppw3Xp5ivK6D114ccmnLBX",
  "key28": "2cBEDAc43gK28fpx9NKxjfBmSPdN67gBYteocP5Jpr5CPLXmPJi41zjt2yAGutTDMdHhsvt1H8iGgMtoqDzfByZB",
  "key29": "5wwHbgv8bMre6fdqdSoua2Cq5i6TZrxLVecabKLB4cQvP8wD5CP5j42aX4QXQBc92VeSKRuG54qgbukCr61PQCGi",
  "key30": "3MYEAUr4nqpcDFacLyxKk5wGR7k7CMiD4fStJphfAJS639ouB2DvpSkGyw2dFDyh3Rc6DcNZP6GBtnkERhxvm4Me",
  "key31": "3fgjvjNsnQVJfdG8WG5ukFmL7gMnoV9BCGRrVwo4mykrebzT5nFPKykPRsJ18XNSzinQ4ZKfMVdwPcnQ7YnyYWJN",
  "key32": "2XeZN46sqXNMNSzqETMm4z4HNR8HFGjPai22xtH95dExLPu6p3FahPqjojJx9hUNGL3pym6s4Bh8bLP4tQYReEDA",
  "key33": "4VVkg2n99djjKVu8X7bvqoVc5pMPghQoqJtuV1DPVXD1zD6A492X2jjGqn6QLSkNwXfzSc9t5TjQT72ysAnEMqXq",
  "key34": "4UdWnqdd3kBTSii7eshKecDBMG2Dt2hxxNEw7ZjGGaAvNBXGqYSfuAnGi3fyJo1SSK4LjLPJaN8gNgFhq4u2ieMA",
  "key35": "2nLtveHaeMNGTetHmDnMpP28Muag7a7KiDdrF3LaiLNhAzj6ptuAxYw8iNRGzqw5zGSWnzCstrfzu4qdQJcSCZfk",
  "key36": "3UrPyWyNZrNUmrM8NoYAxBTWpgVH9ULPuGPmQpSwjdnpGBoMYechHkf3YfZAaEYVMnKCDE38DmyKWuQAr999dVZ8",
  "key37": "KKTn7QcFkVdjU7ELauVhUDLY1J8Vfm8fEsN245xeb844G1vNn9LKBBwaE7YFjRnmVk5LDdtx8YwWTbg1fEDTXDK",
  "key38": "ZAH9wiiyq1JhNP8Q1dCbUwTaaacoHygANw4oS1sp9PEY8kvrNxUMLi8AG4ihkvAsMQr2w554AVtCUtWyWfXS1Pj",
  "key39": "7suqbDvccbiBWdF5rywfHB5VaAEHJWmGbdyLwmD5PnSLGio5fYh8SC2pK17oKezfxW6uDo6Vk3sBksrn64AWh32",
  "key40": "3ReErmmR41VSzvNinmrmjZLzU8KuJWUbuVjNbh8qCm45VR8wXhZAWmhk22wfbfnFVVXBESrufWZdvWTz7tXZcMdk"
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
