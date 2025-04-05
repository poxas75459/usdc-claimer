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
    "2AAHYYcUZFiP3yvrXSjrkvFQtgQconKEnTYp4ybz6Zx9s2AioFq7aPv1fiReauYmPHapMUJd9KtNCjYdS3yq38dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PaxgmdXpbkZz4CqDdrK26Ec8EqNyjXKij8fEHYdWWHYaipPLwpGQymZukAviEaAbkU8NYbxABTKikQPBWGkvdsa",
  "key1": "sTcaQj9J5Jzs538Pxz4NZoX9kHDMHQHbcGhheFza7EiQr7sHerxQPh7yxN3SFfFoBXriEdVR9mbtEVvF14AZLmZ",
  "key2": "2G8E3DxgE3c8B3jbvCBKrUt6QHerYRBZUcUHfXkGdggHzXrsJCUA3A2x1sQQEiJMo3GyqZEU1JHdBMUpTmf1spZt",
  "key3": "3eeLNfikFmMpDT97RbJYW5Mm4nocGquLfeMXM534TRRka4CicYmJfLG1axhEkpLLRvrBixEiGESQGB2g1VsSTNxP",
  "key4": "3FxhD34H1Qm5t4cBaCCPmge4T9WYrbFCD7kEdzg9t91iFgZom1u1zhsPC1jDBZbXKSYAZRWXHwQkeDPdvokYdrHt",
  "key5": "3CLsAqU3YVKuL1TuxxwfEbLvaFSFEfG9DQNS1VqtqwG2iWNfDnvpQpxsr2quv93qzhoaxHfxtB19a3TgCYhKrXpJ",
  "key6": "43umCRE4cGNzab63z7P5ckGfLFmN724GVek4C7Qd274R2KPFqWtCnNECYyoWiELisdou4no1iJpY4VxkkAWJGzZU",
  "key7": "TVwFihiD3KfkivUV18w7ngZQHC4z9Rt49atG2mRwudq82y8V2SFHD91n4TTivHC9HGZpzYWdcDk8P4KKTw5upCa",
  "key8": "2FjDLCpXDyb2ECedTXtQuot4Ae7XooDdKVeoPbUzKWwkHwD1yTsLzRGAXVHsjZPyNiea94osKhSzMiF26xFsjwd1",
  "key9": "pv7Uw4nkeWwGZLWN9MRMjuhip3ZbyzzjM5h4dEc18gQt5kxeVL9JVn5XCuyXJ14BRd5CRr3NqgE89jLotL6etGs",
  "key10": "2HG1SHEABP5caLcPADLP7j1pazh7JLVMm4HKSd63XKCXseR4kXwUn3EsA73Fb4Raux7H72izPiupoXjwKGEEoL8E",
  "key11": "3VS91MR3GnLMafooSwqz5Ax4cgMZdSRYnZPTevqVMxPUVcX2doEdMiv1DwxkhyaPNyBAfueJTZJYPBcgsTi5ecxQ",
  "key12": "5p9STrCnMdaFbJDsaFzFVtMCntzgJCgR5DWn5ZVpu1ziz4DN8RBG4vD93sgJxWr5berkBRjmVZBdpCQuyBdDZvpz",
  "key13": "4Wks5JzuSGDeMoZQiiHczyaUrBV7hsapJj2skPe9KnVJVd3cUtei9iAkL647WLEm7y3gdgBZ7vX1jtFKasQvkPxu",
  "key14": "2ewbqaa2eoEXLbyYmN84TG2ea3mTdWE1w9rXGroWa4GXkzXToMUDv6VD9R5q9MrcQ4uL3Jb8cdYabM3KUWREE9mx",
  "key15": "3fMM3gkvQgerS2xZpJM1BGhfUbfim8zHvwjE4tD2xbhMZNyEuMAu1ybjeXZFyq7sszkwH8n7VmQzrmCkuoqtxLZ8",
  "key16": "581CNv2rJaqGbwVvLvt3u5ofEfeBXBnrJArjNPzje8mgXbsXu4VUuXnNt7sjzTzFBMwxhjDXrE9mnwCQ6K7vj1Q1",
  "key17": "2EJJGNcMwY1BxkJBLYMbHiHWLLqGCTtgP8mBnBwwLEho7gPJMGu56fVRb1N6ATx9RBtRYYNJzZfrChK7mPDLQaMD",
  "key18": "2ds16eWB8WWqeqisAJpDyzwRtxcShgMiKVsib4XjmQxo4CsrYLnsvp3pMZ8MmfGarMqSGLKYw5Rx5prafoQyXCtG",
  "key19": "4X1JTwRuKeEh1bhcwSrYDWh1AiQMTr8u9P9nTbT2Sxv2uyKHrk75HM4sL3mUq3Ju8uFBzkQiGugZZBUv3H3jXjgD",
  "key20": "24oBXzBKaPMdbiEmkn2Qw2zUtE6jihNBQ8mGVazA2cENaxZ6oTtQvG64DpSrDPTNKMSaoQTY2NqmrtZa3eeWGjqj",
  "key21": "3v6kHDNdMCCox8P8udZiWB4D1XdPJmGoKX5VJUwDqRnvYy8n8Unko5DJ2qo7oPhWXZoEiWWnJdae58HKb9u9LX28",
  "key22": "4ZREnGw7f4EHWD4T2F6S3v8Q8ATqE77dTx4QJzhYw5jMUPZzNJMsQBeF1UJprK3ntVFfp7PNf7DpaosrkNLrK9b3",
  "key23": "26Drx7Mp56sDhkAF2oqoEKdaypcAxKxkBUSje6UyJcE8VydnFnbjDsZykjtmd4T9HeQ58qQutu9uYSGDhHipZMTc",
  "key24": "4JUg3kh5Vrra3UY6DctD61L9kf2WbXZTSyBwBQGueWJtgrES4UHAtErV8xdwMMcDiyFFb66zeqmuMG8KrS7PHKLy",
  "key25": "43pmYz6ckyMGWUXYBEotEYXgKh8BqhaSk84UHbJsEExTfnM2tpe7AzNXcsD2J7dMQQxLABbvKindYhshfrzqhqMX",
  "key26": "zi9vanR2gi3Z1Fng3sQMYhJy2n9yHnLhxHmRu266fzvSdkAF57RtMoWJ8XbhjuUN24R7bkByXvfiozwnmjWsmKw",
  "key27": "45QZqPFJ5uVPHXJxW4XofxS1G4BVzHWAGhw1sg8PPMHphQmgELBL1M22t1nwaH7Q23sUHYXWvWQ6qSWWekHRcaF3",
  "key28": "fp9mhXF6VS5QWdm9nNQPKpbqDmWpy4rbQuj14r4VCuVywj6RiJjEjhRRq16oSZAt1AeqWA1yfRp4idVVdxvbQ5C",
  "key29": "39D4tDfDXZrxkyRaK2yYXU4QbgwZKqZLx293gTP4DGUK86Z44ZDHeKdjtTjJhN5iLqAQkimz8qZuyVuDCeTPWuVG",
  "key30": "ofkDBpc4gpWCWCbqsoip7FdTMAkGSML8kJgkTtbKp6563v2SwoiiBGCLc27WJR9qZPpQrowgPYY7TuuDZ1uvdcZ",
  "key31": "5CgNTF1rGEfzD2znWCyKpC9hJpgAieD4yyjSqmQaKopFZthDx52DkubxKHzLvrnpSLMhdgjx4SY9E5GruoojdrdZ",
  "key32": "5BZL7MzfQMUiph1U5WrUM6LvRG2daKoedKZg3WQdHXpCvV1Kmb5DWDjeTFcnTHuJubksJnxYyPP9dfVAMv8GScN9",
  "key33": "4nYNUvPiKmFHihVhCDFHAZjr9W82vH5WofR2n2M4g5G1S8qgkjE6oq8hiFVdSDYR3FzE3m2maR7w6NuLTSD3zntH",
  "key34": "4c2P3xadx7yZ4noiWkUJobXwKNbFUPXRZHhwMLnRDG6rH5T17mkdtn23DReJnhLfLpWvGe6XXU77vBXEFTke3ZXG",
  "key35": "51trSo5MZ43MK18fP3rNzx85NUzpwTdd7EH8F2QFn1WLLcJZicUEAR5JTk9FvTF5fsEwJBhmTrKTyT5XimnnysMv",
  "key36": "2C22Q9YovENBpJaNVDhAFE84qHvDccudXfp4FmnnsADpYndv9QRJzawqVtciwwzskxwTAK6MxSUwGxLk6yjLqACX",
  "key37": "mnnGzg9ddadeTovHNVhHtfSz7jsCC15MgUfCdiT6Soxro8jWjUWJH5hkvWA9CUdStvEahfxFNKKhruGXqGn1GsS",
  "key38": "3dREHGVkyJAP2jF6BJkpLySjnX4pRQAnVaT3b6NzinR2mgJVHZ1d2HdmQkdak2PurRmBvJeT7UAykN1AkpVcFL75",
  "key39": "3naCzthpdiJNX62uoBgQcQLgSHkzcwr14cYeRRzUaM4ZRcX6xHBK8ss6KDTmMcmoGvBYfprBi6fr2uWg4kM7xWK3",
  "key40": "4fkSHCPtLQFeqKVwCmXmn6DXN2tPBxNK4i4ZdRcmKh2WAC4NeYJDpNrW36aEgdT5VpatNn2Rd7YVdyttcPapwZe7",
  "key41": "3yjjQu3KdjK9B6XEYpme3BroKqq1NcxcCR8fDevBbicP6Vx1AmnRCw6SxhzTSx23uorP2nxybnAW7AAjXG7u8zgK",
  "key42": "2LZGaqg4aAt89RquSW1HHCPhphav8TUJKeYTg8VmKdo7MnEQD6Diw5qALhYeyYSJfxKw5ZyQHGdSAx3hH3SEVumY",
  "key43": "H6HLHUdPhLKdWz4gozpnt6ee3QEBmi8kFnFRADofJcjiUbt9XeSNJMZfNAFE9FSYigYo4fbpzqzoXVBpk9dQQHY",
  "key44": "64e8pXwbd9Hg2XG3QmP4G1UkVd5gUnSjANejPGkGdJVVUYP6CeoiiA97ZazJ4d63jy3QwGHUV9nAkNDyPwRxrp6D",
  "key45": "3fYL19BudryZymAPri4aENwXmdRXLsq1ZgZVeAQYPD2G871RSUCMT5NAsZwfFyDhipr1ZnaXccUTd6856hZ4p9yG"
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
