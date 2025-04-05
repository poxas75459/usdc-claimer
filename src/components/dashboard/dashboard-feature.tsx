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
    "529HNRF5wHaxbFRsqkENodzASyFns35eGRwbKNgGWFRaEoUiLzUeawcDnidwxMYYwffiDjWUiCVc8Fu9voJLxvZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UbtktsCjG5zHx6JR9XXxsgHJJApky5kAWvwwqMNFT9WazyGj6YY4EmpgHhXEMqaEt1K8zd6zC4xTtNf8jPyNVHe",
  "key1": "5JqnRgkehkj5wnJypsoEwfwrL9vk8eNWe7Dvq8ohkkWR6cVyfv3t6f5CHobHhbmkjTtbbwFQYoG5YTddZ2e6K8N3",
  "key2": "JqH6n12Fr95YKhrJWFdXv2BroRPPLZNkmZSBeEm5zDsQQNcwLeoEUMpLpZ7SFs5tYXs4kZADjoHpBYKZvGNcAYj",
  "key3": "2trLSAkdDYczWSZCZr4mtR45rZfvWk417K3xXoL9Vdc6Fp7NcvQHXbqaHjjrUY83nUdyWWW1ocpETebMWek1sMSY",
  "key4": "3gBSGJbxapZyFJu3hXhcPGgJupX8kT6S3vctis2qz3iSAaXfMvYBq4zoH7PBPGz8pNxViVeH1S7Np854Ph9mqFgX",
  "key5": "5JLF6NU8afCxRPERgybzXuwV9333UMmH1nrytUYm9GYiiJsTUmo4xEWaxHUjuYP66puPoxhMC6g6ZbHswNhRpqUc",
  "key6": "5q8QAqmfKuUngGs3q7DqSam86hzQDVjyo76pbtYEZSXavG3ndjUGn5nE5GS29jLdvbUs4jQGdGex6J7eRWcgEpyv",
  "key7": "5X1Wxhq7yYgGMFfudAA3wLvqw3omXAEaG5i74oRpGdh91iZUVDYtZxPbFmuFow75ivFbqinoP8KeGsuuwpvNYA4j",
  "key8": "5wMCbWLohBcbonQQyNW9ScvpJGwaBzBL22ZxzVPj7yzLkGNucJpPY7sLKj8qfaciHLxZkJoGQbgdPjewJppnFgqT",
  "key9": "4FQTA2T1Gfd6RTJvvinCwrrQ2C2263yBCf1VJEnM55JjmHPk4EWUzjR9wEbGXFXXJDkqeDtEhLw1TiKdy1hJqA9B",
  "key10": "3giFjMc1wRUcKDQ9YKMZXi8msnqXMC51biGVyDSnfUQtUmp3Wuc8WP1ZyKkqrQPYMtvwRTk61V5Zbja5UVkY31TS",
  "key11": "2Ee7dxF88Rd6UnFzZc2VeQje4GG6AfgZQduUTfGH18qocratUBXBTV6mRiVhJ4RciQrVwnJ8S9Ss5VJUL9orkMim",
  "key12": "3HNTMm7W9awj4AEY2BwMrDA2t4YpHztASLhibx2ZD44Jw269Uj1nWVpiSFsrxtFfCv7KkX75PNuyeJtgDDa17dVA",
  "key13": "py7cD9VG6oas5VecbJE7eNRU3RkodnfpYpMStmtDh7jD9q68a98Ca2JKa459KZDinswCbpBqACbpKzgy6tsGrGb",
  "key14": "5sRQfcYgt9qmwUXvnStMpEsxs5giGvGWJDFbwoSmyVaMZAgVJmVFx7v6RwKmZeF2nwo8gURoukNNAJZDb9rzWsQq",
  "key15": "61u9v6q2Gue2VFThBLirPJSkR61XeBdhLQTeb99yM5cMfydTXSbydqTWvY7c9cVh4Pz9YGaDVPfiabXP1e5ggbRz",
  "key16": "3THPdwwamPE1DtANRVJJ66qGtaADZWNJx7wGUiqUKFCT4PGLbNFokJnhNVpHmXQmSScbZzcQwcMVShSEvHfnnJQu",
  "key17": "ic86fdvBDXDNXMrkmteL5ne2Fnfu4JksXqMAn6tB1Cc7MjuNTJuZ9RSZbCBiXhYpwgN68Yj8JxpdF1Y52VLPGxz",
  "key18": "3ZMZ8CuJ36Ry2fNqeTRGRTtfe1WSQdEjNDk6aVGGmJihqhnJr1YKgtXamsfPdeWjZWmc5Rw9wUkgeSVMD8GSCTaW",
  "key19": "zARHmgH6cgDxE55SfoMYK5KTPyVx8e5cDEgbpt4rUdGDZod3cARxUhns1xZZe3CBi5oASGXxFpTBYE49qop66aN",
  "key20": "3tpjYA1Ha1v1puxdquWA5fiUPP6wJ4ooRoeQHaq1yZUZckC4vCysGhBTLm8UzsY7KmwTEFTAPGfS4EgmEPfVRcUp",
  "key21": "cnx5JBQhnA8rytpbBeQ5YQ6BxZGKniHwgpYDG9ZXjXfh23r9HtWF4wQvTK3xrxM1hmpvw8w7S8PfVDBeEAgd7V5",
  "key22": "4X1pme2kgGiMLmmsrKoGMDteCag23e7LXydYaHCMhK2frdexfRjnyPuoBnr74ooELqpvqEchwFYwgYaFSVkUMwtm",
  "key23": "4kKZj78iE2fiLai9625SQEVs5VNY7BcHYaXTAGKU8YXYLe82FTrQozLsrLzVR5HHbMnSBJuDbFmmnvLZoPJ1SHpP",
  "key24": "3FYwZW3wqY39CENPrZP2BYBxtERNkuhzHJewKZRCtMgcMxnbmfqqHSzEgJ2TaiuGPTZmec6xu222KVN86aHTtnx9",
  "key25": "2KpVayKpqNXHCME7wXFz1APRWW1ZebdBY9zXco5nc9zhNWXJQPZ8z44guddDUmFk2539LR7rrFARpBkFgMf9zZ2y",
  "key26": "aVT559Zzp5v8VJPMgqET69fHaW8V6dRt77QmPWphJ8QeWwKSwzwDFrgmkK7E7SMhtoiAPaxHGCzEipkNWiWsjhK",
  "key27": "2247rasLrPa9bh1BeXZbyCJwNExZpoEw2URzd5CYH4zaVc7idsdGPoxcGsJNrtnoHSwqity9kFRKH9NdKDpVdj2H",
  "key28": "5BjhvW1zkFrVeRQuhxkeN9uay6TKFq2SLT4uX6ZasZr2K3Ax6Cr4QHt21pwwyCFUYaPYoxmPTXVK5dTPmdZzV7Ni",
  "key29": "3gRaoDEHuBSzHM71cCyGU35pKBCZnMJSB1W6eRPXy3gWPx6tF6xKy7TVYkqMKeFRpbpGvSQyzPZEtNeKRMe9F54c",
  "key30": "62qxJ1z9Jr3HKGapGRJbvKYvTKYMbDiMo2pcRZbg2uKWYXPVzALkiSgRi8Lm581Dmuxd8VZ4RXrdNxgnVCDCG2R2",
  "key31": "3pnbWakQmHHxCRKotFMxXfTASLJ9LbaQ34LoQVfKTHonzBjSHQRm26jcGdcQwjcEks9wpoFTxEAPUysuRyfG55f9",
  "key32": "3pCPbeU18LhdWPGt88fkfxmY83DVazDSbCnwQHs1ATP3hMXZFN45UUkUKDgdMSakDyFta56eAEoHJkHMdtfMpSbc",
  "key33": "2eR13X7q6bnV8qbUowSU1nZM4Fxo98pD4vfrcYVEDyU4J17tXS4rTCTRi6XmhgCAbhK2CFK3q1L7Nu7uWdLrzQg6",
  "key34": "LuKWeshQTcemLveUJzxKTSYMtFQfohw1RApMXXsJtYP8xA1ydqp6HUMs4Z6kaodhEsFLmQJYmMeMQVM9x46qz1k",
  "key35": "39spJ3kEzsY3P9PaC8iYTKLjazFLW8LR4ddv2zExLRWU3KSgBctVu1tzgGFaCoR1Po5cMtceAihNoeVpcxkfD5By",
  "key36": "5pEMXctgcJQwEZyWQx9WxgbkPThJjtneR9yWahpc5ZsC4AbUKUh7b7pg7Gucwd6Vx8VZYWyzkSQCQmizbWma5HAU",
  "key37": "3is462tJrUSep7k6rTMrnLRCeSTRAAQsaRka9sZL7JnB4VsC9UwLP6tATEWDL3wm7DXfq8kCK9wbfR4DBXGut4z",
  "key38": "2K2LELBJU2Ds5AcCqVfSHSKhJ1hC1gYRA4LkB86HAHmJna78HMimPVKGQoqkCuRSxzdTWD24widrUqMVHD51hf9f",
  "key39": "whF7252hxZXTQ8Pvad2YPrtkCyJz8YJoWFGiJeFRbSAY6g6cyK2CHwC7geiyCK6Ffn57UwomyxG11sCM7MNaRmC",
  "key40": "q32uddiwYCGJcPnwrVCw8HWysivNUKVgWi5qcAFQyirNeMLBdocMjmeLivJtuufZhdVKN6yuNjeJjKtRwS3htCB",
  "key41": "13cBZ6pV4bufVUPz7neHd8Zp1SrQkjsZeBX1uxNQM8LFo8g2QBWvs21E2DsTem3zx1PadBzRPAniF3KYzCgXiRg",
  "key42": "5Eb5ytZhWUXL8WuJExQv2VNkQZ1rQeGCbpD5ixSJpxYCMaYgY9PVTuHtBtsmpnTYHRzSm5BUAhjfnMU1a5sMaTxM",
  "key43": "aztRhz9cLLtUgLj3yttJZCfumsP35tPzUidqKk8F52xw6kjcnc7Npzxz7SK9Qu5q5MbMcfBFfsVVRS779ZfPogp",
  "key44": "dbpDDCSxctV6R7W8c591cwsGzxfe6KhoWegiLBnnnb18aU3EGT6vcSYsmPd1dgJdXMVu1Nhc3MS3S4FRbYbDjxB",
  "key45": "3h3RCqXasD1BpMERdKG4zdHD74vfoL9E5gq2aCVuFcankBhHiKieJbsHRb9qgBoYwJEEwtYVG8YDgT3cmwpAgc2Y",
  "key46": "2aU8tmoEb2r51t7vF6WxTTGGSra5nzF2NeCpN5ACXAjHxvUC6QeeYkqewyzq1FqUHNARRVbSCruCemNziDBvWDLf"
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
