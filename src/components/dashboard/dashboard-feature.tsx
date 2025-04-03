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
    "2kVYrCVC4fE6W3aBf1VhHbMhSGBqcRmXjPVByKxHdrDr2eURCUf6mfazYEkBHq51veMZSJZJRu7BxjhuKvVctPVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzA2XwQxZzdSSaauiATxLgp5rdtuR9RPu7JxRvuwWrpjPLm7cTUzBegKNnjCzUtmAPx1NJtgTLjq1xxE9Uy4H85",
  "key1": "2pWLtE6CxGw82HMhTjcn8dASC1eMFAK5KfidxEUEdksUu7NWScrrrSzpSEizEn8SbSK5ZpDT9X8nipCWisAu9x6M",
  "key2": "duN8ohFBYd2iCarq3jemhWYztcHJuPtBGNHLTwW5NmFxXZNincchzY7QrFK5x86JV3zkRXdwRCxmLJM2Xd8yYiZ",
  "key3": "5mr3MDakaAF9kGmeAYhjCu9qxA8zvH5ZLCRpSLDLHPNQ3BeFkTu6uUdpTEBn8QcMEfGirecwLTzqQnNnNcpwJ4pG",
  "key4": "36YTNnRD6jSFZoEmcdwqcksTJXu4RcBM7neeTreaBxvWtbn44sYcxtLrsFRKHNTckKhHH3t73AcAaa3x3aATA9r9",
  "key5": "4vc7xs1xKNxM64191roxB9mHFPhzs5xycXFPuRmHini9akwoow1AVZFPh2GTmCoMwkHpJxws7q4UXUumaR9uoHrr",
  "key6": "3yA44Esf7Ao8Qf2W35f3pnbp948iZ8gzS2HZT7FrUFNau4zDnawdFLSR61AqB5KErqDXDV9qfv3hTmNuHMRuUoS7",
  "key7": "3KzMBXHawRXxQda4VioR7BhkkHtkpPAUgoXdHmuBa55xf83ixnZVG7kSnRRpQvRbr23QH6iQn7TjGrp9cG6CMShj",
  "key8": "aa5x15ZroHxUk5C7YHQaJ4u4S8L4LxuzcyqhC9V6k5NpYjqkRvEFJkgvLTCLqXpeVMXpRUJ4Umv8ub8fKNk68F1",
  "key9": "4xUacGAgtGPR2XXYymedcJRkmSR7BgXyX4EDn5YJsA9ba2so8LFk2EZevvTveuvgsTbvBayY1dBCoWeGzb62LU96",
  "key10": "38vETVFZJ6yGkD9p4UUpXPKzQRqPC42kVgce3Tm71Rb3TEps73dVU2sdMcMQca8nwhpFvA9kjjgFN5VHYwzrgv7a",
  "key11": "2eZiXExwvFdHmskdryvc6kZmcwttUik2RohoRBeU49WGiExTZ57yjAa94iNRKnzLvQRtZpRgKUpq11mwaMrJYwfD",
  "key12": "4F8g9YHdq1pEi7QruxWknzHg1htXp5neskVL15nGaKA3r38ACu1eUY6FypUoDv7GfUgmfQHCdVCPQ4S3sUGRAYoP",
  "key13": "5N84TdyrcDk2DCceKZRJU7NYqKzuLEk6n3UBf3bjSfBtSi6cuFNCd7cAChNJxRfYmkbAQv7jL3rcmbms6yUreuwV",
  "key14": "3nx5yH4qWNFP1WbKxTg8e6bAwzDwwDxCzWaLB6qUgHNwo6qRsaknaCrEuY3CUTASBFnmrCfK7pywLmBh14XyhXrX",
  "key15": "UUctX8qcQ13Vbxx1SVo3TReJ1GEBYi7segqYKoV22bV5hz1N6ybvfWM5PNcVNPDyeudwPUduhJznZj9b1ticYzQ",
  "key16": "3oNg2F5d2Sman71TUigwZTBCXYAYYkghU4d9E5qyUHoz7eDAYbykxCS6TC7Ng6gR61KfT9fitvkgwTbcyCMp8vSj",
  "key17": "2X6xAmqdwvZ4nCB4HAPM4Uo7cc7nRiGKB8cpLp9GUgnB6fUPvgE5TUCDozXWTxJECY6a365wbsQVwX3MHsKztGXi",
  "key18": "534VY7w6tbsjMhcBjoAtunCWQRi7bDFvjsbGGpJcaaLW79Y2hAbf4Awt3A5gMt6LurchXrPVyxUebdMrDvd44rYJ",
  "key19": "4JN4kdbUJMZeDXX1xUERZaBVcXKjjRn6CJiALdyjF3TsdzS3qxPE59ij3cYGGHuteBWqAD7ooTpPuneUSK66mLWu",
  "key20": "uJ7g76XCp8doxavSqVsM6ZztQYr8s8LumirzkTh5dFUyNQNZqvayskUSUYbXi7AcXLf94xY5dYJ6Ni3Ve38Qdo3",
  "key21": "5f9qpJqSE9BKfuZpa2VVzHkrzhRyxxALEfc2YoQCZ7CQMVCpp6wm9YDw3dTksvyzhB9zwdo4taqmswkFMwtRemsP",
  "key22": "5e4VienUwnJUjAyVpMvw5wPmrp1HBjKpSTMSprAvxaYSWZH7uygZU7P5dFphfzQMaC3tNbQyW87YpHiELzskZsvM",
  "key23": "3RdV7uCyoQtWiTJCyXLskSMosVjmkn1hiqCorJakDhjAF6DHU9zk9sQSYQy7vjqbBMgA1PK6MLkb4x9TWds6xF5s",
  "key24": "3coYKYc1VRiK3LeJPFstQVwoJmdEyRdAqGpdqNmeefHiZCFAuoW9J9L1wd9gMcaq3UJ8Bc4w9XqrpLLiQydaZtYf",
  "key25": "23eLNhEWpLG6Yq96rFRo5xcUewpVcpXvKseqkRddahDiWvfQA31QSr773iaL3RWpnyWKwUrGNSAHGRoCduViGVFf",
  "key26": "427UY87oByJVUyBTQiRAF8LRhin8rfXe7H2nhfrHYwR5CNtof916AqfUEvJb93jEmJCL6vb2hiwYhhPCuHBkWqdz",
  "key27": "5K7J6tD7sj4BMeDKALjG8Zudt4gSEpa944veVEcJnUSDnGCuAMW39fonF9JTKukbtYo8yn3eNvMTDgeiQc11XucK",
  "key28": "5tmEFPCnRgLwvspne6gDcUX3LLLFRa87S5GbRD6cFwTjL6qiYcB7mEavWbwWBbrF7q95QS7NMgXAEact3kQyuNdD",
  "key29": "3HEBS6sWqNDh5rvCWDmMJuiptshZWx2x4a4GEsCLafA4YubUjduszwf1nsrbXhm8c2upawm89iNrgMikjifzd6zq",
  "key30": "4W3ypLk1SQK3xaPcRVj9bCNFieFExhbgDts72MgfQoLeKcspExmo3f6J2o2FcqmK48f3yE33RDRKoM4Mbmkpbbhq",
  "key31": "5KJ4mjby1hH1RoqL9BMxF8apogvywRcSCx6aMBpj4j6TGa9QW7FzpDD7jqv1319swqLouT5HBycrccmr2catpqUg",
  "key32": "3xJGshqhdkBvxsDvARASuV9fYXw6tNBpYVBSbT9A2WWeSSwut23kMjLm1ZZoLTb92y9pCHg6zPqUenpZpCQr6Y9L",
  "key33": "gYVhrRy5ty4HvJGmsJgyeX6zGFfZQwfFEWHCeYHaEAusKaUVnWZ4XW8MWPq6yfkijjgvHio2BVcrVT5XniSvgeq",
  "key34": "3eeVZuLw9GSMGtVEufk2J1vK7rLCSuoZJYqPfs3AVhTPViYmt93iNW2wvi1opY383zNN39aEPq5f6ffT161j57yC",
  "key35": "3fu642yAQQnMa3ta9NZMxm9LGa5YMWxJTEdAt5dJRKewqcHnBvzX73H4r2w3crcV86MtaUBXTvyw6BUKMwHdUu6V",
  "key36": "5NRU9835P4Qk1ZC6Y9yb4dPqQsm7PWEyhC8t32Jx3yDrtBLMVo9ksctuwvDcLbMnaJvH9vzSHfMEXcPKBdYBLe6k",
  "key37": "3Mq9GzEPouJCv1drrpLar51VTYCmrtp56bn7Yw24GMhbxDuHgDyxxT6VKXbYbh7h1qCNBzJDmgH8aUrLBw3whY6K",
  "key38": "2JSjBT9Y3HTBKSL39amauu7ZcHn5kYkSctvx9b4pGUAMDKHB8KSNxCECvzEDWUnNXKhGFQRKVy2uJbF6Yixu5jpG",
  "key39": "3kGvmtZSye7VaJUxZFbhyE3BvzSTEReLfJdJyNvY6cNN7y77Rr53V5oHhj9bx2qM8Wijj476WeBvyhkiDovJ5HoQ",
  "key40": "2Au7bVu3swrqVMUSp6sxaq6bC3zFFevTzCNheVZ1KPbXqYKQi1ffFHvPrhv7RUDPxzngCXe45W4i5pXWKSdgAv7P",
  "key41": "5o1H1B7UKN7amsw93u1Tum5ZpmrE8wQgu4DvcQd5ghEP6DJXJHk6pqa62BXrS1vYsv9erxMdmspmzBLyNkHsjsfV",
  "key42": "4W6DLAvN6JPAUof3VFLATymiaa9mfh8AJv5PcaDXeHtxQtcZKtcTSxvoDe6Nk5trdRDazuhcbrrGZzRVcLqzZHzp",
  "key43": "4s4G1DLXXfmi4Zk4FwHoGXRYwoCxPxYh3kKzUCiuveHnsnCLyH4tq4gGUBbHxqx3KoQfEA2Va7g9nrFLkLScKMJ7",
  "key44": "5PQaRJsUyNtpUY2tu9yYZvR7As1y22RAXyDr7uUromPoEPxLr524v6YzPjjeHN25upkDe5E85sotjBBeJ2YoDCdT",
  "key45": "3fXnCBKLbSoqabyBRsi44QpQdASXJoZxuFEaXk457uD6gV8btECbZrAJJfYdtBu2xawAxtdtu4WYdXkVq9CEpbnX",
  "key46": "xd6VeKE6aXDSTCSLniyJBa35a1imYT1qRjCJs3ZNp3zWkXs5nzWDi7joyRDJyyRQaLZCKw7BJ4DmTX7Hp6pzKfJ",
  "key47": "2GCc3ULfKvTFnh96aFXiYZ7mJsRRid5jK5muwvYAhu4kVC3J9KmLZPUN6G6yKBtg6WJGCYNwTNLvdSxRXp1eBwZB"
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
