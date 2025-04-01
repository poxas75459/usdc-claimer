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
    "5UM2DWXC37ZQyrzV11KshD7AxquXEaZaHgteCt4zAqCfvnr7hua4gTYZJo4hCMy5jmJZfMrCXcoHddADni29smmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXQ5oJCZJybuTkKHes5QVNWHzvXiNQpv9c7G1HKdYhncGL4u3NwnotDfnsHU3WByDtzLq6WaHVFQugJHdVw1QUW",
  "key1": "hBhsnyDmeTMGBjLYqKn3hYAqMfihACpETbvM4GP6XSwU8zNbUVFcE6dK2h3tWnupff8KDrEo7KP545hbBnm2vxE",
  "key2": "XDoiDpQEz9yDtZ3jXBtAcEgP9mwUfCMtuJRWrUCbcqJrDwBdzLSrKJeXH2ALtQwvJ9kXMvafCmyotV6RHptEYkW",
  "key3": "4gzLDm6aJfLMercTzfTu5TRTdrFBpYQGDrrijL5pqNELLtT8efa4zaHWTMmv9ubyc6Z3J9fBMxngZbJ9VwxyfhG",
  "key4": "4VdBG9ZBN9vRpcGuN3ZoBKgZhFPAFtGtTVVzeJWy26NSnbQrSukbjxk5kZZpW3VmvvG4RhxpE7u9iNdgy5oZ5ppL",
  "key5": "BnBNHK14yxBNLYLmDpXs6cz9D2FFxo3ERXhgBDV8cwRxgnb83kfLe5Sgm6egypYw5n4Y7os9pALjSuHXFjNuJaB",
  "key6": "2rD4uzXccFaw8cqtcwe1mJxWiNY63KPT1UDRWfr69eFCurLstSxp4bKocdP65JZQCEXhmRxmfeGAH3TTXVZmD7vy",
  "key7": "3agHmuJwsWQ1QJNgpJmQSX1tcBZenG5ucwbN5LebvPA33ZEr117A1iPDUdRbEfdx5AaMeA4QEW2BzeJMZ7G2N3iB",
  "key8": "3W5x2Z3rXz8s8rYuDbXt8iFw4XBkCrH6Ree7SpXH1WqRjDSTCpuuNMR97FWuxu666gC9cn3REciQfaHJJhYzMdwU",
  "key9": "2tuWABPdzsLTzrXujkEafDds46ypkyW86y79URLdaPK5PGPEtpxybPUyW84BCXwJEFgg5hKvKRsUEzmd4ZLo1mSv",
  "key10": "2AGFmCU5EQv6w1N5k3rXctD4TNffVJbVnk1Es8Ff3vy27eUvVAuSKt17hHhQftLBY48Jb6z4eHCq3zkyvfZJPVAL",
  "key11": "4QSvRJCDwAs4AJAJYaRUrgQmCub85mXEMw8PHm3mVCDbkj4U47wYSx9rwMZcQyj5RUnbLcBG7j6EVuo8bRXQ6Ygd",
  "key12": "4uGdG3Ka5EpQQNjgTLoAHSetHBwP79DbiDn3qpNg3gYPwmE9M282H2J1sF6hBkw1tDrGxQTwuEu1d9PfzhiMUTQz",
  "key13": "3XVzA62QMCMmUdUwLSXm7wrEUj5r7zPeqwSSJkgBQjm96h1P5C7JPXdutV5LobjD6U8B3hECWaQciwehMp1F8i76",
  "key14": "5QrKhFV9m5R1Divx5kbobHCxKEABeZzU1Fq348derCxuezmrJTXsrECPJ8akbkkEZ4XZHakwBiegwt46WZjFjms2",
  "key15": "5YMAbs2pEjXJivGVqF5AsU46gCY23DC86TEE4QoxzWw64gFyPFBY5HJXrSVeB2FjeCtpMEBBNHw1DpQQUtd1WqME",
  "key16": "Kdpa4R29kfTp6QKodQr85gQJRRcoFP551p8rtxNQu6VtLJS45Kf9v4qo6rvRNGLW3bkYRPZkFjQpTkT8c9PH6M4",
  "key17": "2PPgvyS9XKPEPgyPzZ3ESTYSZC1F9mfzpmCyiiA16e8r7scP3BuyzS38eTP2HnYCwgL4ea8V55yXTnXH5WknqTRn",
  "key18": "2rBRZ5JQdn3LVbHZWCrHv8rdoi6ARNkT5mCiRiU3zuea1g1Bbt2ZroKK84id7mSZTkreykPmnxwUN9KrnVgfEmst",
  "key19": "2ZHS4vLCaLjLVx4dZw1RjSHd7fFNTXYXyyuo9gW9Riwiqigya6XLoqptR3hEoywtQkwX5YffpWpKkW4cgspuQ76m",
  "key20": "2zXxR4iPNoMR386YRPEZE7JucZNjRKjHtEfNhs45hk2hFmrT9J1XqNMoPofYvGxrqpTU4TFmLzvW3gVwEu3zX9o3",
  "key21": "3TvpRVUbZodrHBH2wV8C4AfgPp3qqUwRQLAuG4MBHDjTMJrZJn2xRwrGAs6UXw2jvxeb44EN9GbNe1k4RS2vYmBQ",
  "key22": "2TY2QXYwWd83uHLE6BwY8KKbsXfH5HNZu7VxaTrRwhWbybKJErRUUq5E6MQD1LEfQESXA7TB1p3zbLUwZJtcqFzB",
  "key23": "QKuJFRwZa1dnfxNmazYtDH7r2YjPomh8GTaPJgUqDtN3hXuWLf25pFaqpFGTeGo7exoiYunoRU6tn56j8cjDKAV",
  "key24": "3iNAsR8DkGWb1smDjfbYkjLiXdQyqYWCnLSp68xenLAPyyk8iSRd365rjN27yaVDPSQ2yZCBxmvv9Na3qL47yGza",
  "key25": "3CKQDuEMUpie9sqKNaJ7RCdKHYjRKkYEsbrDg5DuqQkzEALgV9BCDR5yRMqmLS3uitf2uBAQap32Rj78Rk2hDc9c",
  "key26": "54Wtek7Vs81eNPW3ahCGfSsaRk6rht7wHYSpm27TBeAZMpVqi9fzcRpeL5MWyKgsw76uuTQQ1yKffnUa2vsbMofC",
  "key27": "61fppLGoyV6xv9ms4VDTfhD1smBpiUfk1xAFDfhZSsYcKz1Gspy9myms2mfHQbWwUGYuGNxeat6HsD8ksrPiEHXJ",
  "key28": "55Sd2RfjVtQ3uEaHDFtJGxxhy8uAYnvGubsHhR7srAVrk4FjAEn15gcguxq8BndhsL6eiQDmjTBnm1JNgEeA1Bsv",
  "key29": "XCmMC1f341EfS5TpYEJHEKtLCdpyJU6TEbg9mKPbHSbW9uGYKWiJy43AtEBuqtb935udNuCoeKqeAwQc9av9ajr",
  "key30": "ZZT3k7K5m2w8JF3gsXLK82gtLpjNkHdPMdhxuz2TnkHXjJE68e4HK4sdQUa4FkDfDYfYbS3VMsDcdxWu6WYzrSE",
  "key31": "3nmSGZYCj2cTXsL4f4e11PoGqKnopNiPixnciUc6wNWJ2rRtPCMhrimNyRsfzx5hFVC9T5kdHmEUMGnjiSWMt6ub",
  "key32": "51gUk5fLuwihQR3z3SLgbhkKr4oakuF9LuBvJaM2w2HYzcbBT3WLPPkk6HpbjjP4Xh65AXBorfN1VpK6X61kSm7e",
  "key33": "2omuEGTS4oPoaDuATMkNLJ899tRLWS4xsUt3Abvtb4sv5YDXp15f9w3gh7HZXmBy6Si3tQxzM6VejjcKDdQcNcbg",
  "key34": "SfW4waUrcHHJEwzH9sYLkZozc86VfquzSCappJJZJ6ptYaBHxJf4rx57ri4sSWX1ayEj2XRXr93sNw8KZ2N1ude",
  "key35": "4PVjHcss3rwJauZfG3zQkiShVuQZfGiTUm9JKgQksuTdaeTvHvsPFKgjKtzxHB7DX2LM7jbVzfV28t9dK7vEGcPS",
  "key36": "5SmqM2eZpRWzNZqKnvb74iwVwtqMp1VK2Wai5awVpUzHduG9GZrJTMmEFK14FSBxC6xgqNfouGnnZx4bp1pa5ifU",
  "key37": "4miXi8htNHFeeVaXVirvob4euEZRtZ9piFF8tmGxeoWdYjWqHk5wq1RHoEjUrV86MT75fouTgBVWDUAovvTGznF5",
  "key38": "3xEpH71avQ8UXboTLD1FuJ5cVycKH1MCX2TW1fgLPRfk1uSXRfYB54gyvaAipx7cdJH9RzMwZjqKoVHECqUz8SiF",
  "key39": "i1Buf2qN92PQi93DZeaJ27iVAwmdSMync4LxBkyaKWFSjqoABdXDnZB7EFa4S7Qf9EVGX5zLX3roGobNatBoxnB",
  "key40": "2M3qzLRRatDcp775ZhSARPsykTXor9G6Y88nvMTR2wF8nM5RUVDRi45mMSvBWarmV8vMFGqwMj9qcDkFBNV6LGZC"
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
