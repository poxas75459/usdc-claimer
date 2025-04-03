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
    "51jH4LqrHVxubkxTUUAxu46SG4s8zSRLrWRirSRsbKh6DV4FuMuYjwPXWGoy2szamnV7KB8nCaYzMPwk8jxe8Bpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kn2qyG3VqeAM5KXgGY5YFMwUnHgy8UrA7RLF9TjT9wxcZSsMHsEgJTvywWRTzokaJdQSKRfBb8Gqur8Xoz8wunn",
  "key1": "5vqJtJJj5fyA4MCbEwd3xmc2TesMinw6gVnMiyVLE44esiqHT3eEurnrYj3HapcgCyogCJqR5HQjy3u2B6Jah2Tw",
  "key2": "2Bg8uGfU8XqTDFCjqtqU8FVY6am1M1tL4Y8eLJVtfLY6Kmbr9vfrCQeBVh11jtrb1MX4ZmGTRmyL2tusmVFDpZrA",
  "key3": "4fkjwfF3jcVpK9i2Z8sm5zvZgFCNaLJm2o5pshnFe52zM8zP9ypEx3u8QwSd79V2GCWvQs3gdrWnN7ZetT1YFJ7e",
  "key4": "xoqw4QVebvnjMHTtZ6G91rQEXREhuwbXvLppYLx1WPZcS9r1nKpqHehiMXC5m2LK9NyXcv7jAjmBp1CPpN9tsvc",
  "key5": "4Ldwn8JFN7P2MLfuBuDCihEmuk5rm7Ns8iChbGcVdwRTEau7Lb49vfn32woZZiaPRhTcF2bnof68v9H1bzZMM6UM",
  "key6": "XAAjDwzTWe2iohvKoKbqmQ3mrz9tgBogK4eFCtBT7Apqzc6SuaxKbSgjuZLCqqUjkubMhTdAuJc44NyA5kquUGs",
  "key7": "3gwjE2zCQtFjKSTdvzjnBXbS46dN6tqwhGNUkCjPSDQ2VZxK8bZoUHFv7KZ8SogvuxNGxC6Aae5YwMFvuZ3p9EP1",
  "key8": "5G1fT4Gv1vE4KF8xfhsXFVDuTn72L5E45bnt2wxeqNsvuaKWvecaa4mzRZY2TTni5eB9JDHmowWreobsXaayS5Bi",
  "key9": "4YnkuCFGX9WTEyooXinpoiaYx4wuzFo4R1kiEzDe8gTSHNmki5j6a1Nfz5uFocRSuq555gESGZf4kMdwK9WiMjBv",
  "key10": "2UbezAGKbT4bUDykHa6Lq9wVi3zTqPJjviC13DFfgubqm87tXqWWbHsA63b5bkjHbHUsZu8WvAYCrGTqymxzNZtf",
  "key11": "iVNce2f9SQqoa9dM3uhRm7EQyePPAXh86PcdLZ4vzuZhpz9614CGLsWhjTzmYwQ1kbyvUgwu2P6FL5FMHotx6LH",
  "key12": "38ZU987bYwT32pPT3hxhZb5R62wJrTqFH7VWdTbXd9cxBdykbyWtatwTnCohe6mzpT5dsEnduPk1HNMiDTfXnvtH",
  "key13": "3xG3qoVuB8oLeBmwDoXA14VoDuJdKeFsywRcHSfu2ESmJy1y9vxHepqvy2VtxGEg5vnrotU1ArKZXNT3t3r1JbHv",
  "key14": "2CrG62p42za6b131tBQ1bb6LZVgYJjRaq1Yhd6ZiuFGb4AAQ8xJF4Uuy2o3MC136shX48Y1Ev8LbEZUMY69XfCAn",
  "key15": "3tCqaeHspvkDXT9SEVoi6hRrfA9bDDeyNpLdSZQJ5g4qEWho8U5PY4rFoZc7MuprwpomS1UrMHxV43EzrnhHfTv2",
  "key16": "4LRBxoYKVrybtuJ6Gy57eVD5n3SbGny1w7UniTCeuibH4vGuaFzkiLCKyQ9WAgJk8FLVKsmJLKAePY65Sahf7Chn",
  "key17": "2ZvxY8Bw34xKbu8gXgJPxbpVUsncRcJuovkWHWVcaXQpqGhpVKsqz3eqXESH3GJeAThK9riq4j4E5X3G8qRyrxVZ",
  "key18": "37AyafENQir7kiFiTZWHKJT1Nvn6B1cpVF1JNzKuFs4JTtTMe6fBEWTXHceMxkrdxhzQ4rBhp4zJeLhpA5Q4grw6",
  "key19": "4U4dB2JXn3V2sHdgwEx4oLGRkyESEyUSeCDxsgpiXy3Ti4tBZwuY29YTCZkrzb7Lj9csxAz7whETPqPahxaHLjxE",
  "key20": "5hoPwCpLQ6vbeicR78Xz4SdFmppuW2jSfwZTnwMdtT2iWCBuJ4xVMq9sh2iSYG3XaVbVDtkn4TkkpoDcjdfoVxYy",
  "key21": "5wfeR1ppqnwXt7ywvwEp73rauHcVjE8oRJPH17PWKiMRCGcRB7UFnto2Z5TMSncBcyk1yCiKNpTvonkbcfzWpRVh",
  "key22": "B5eLyRqbM8xr3CEMNW7za6qRQE9ceav92dHXK91Ehy6DUyo4FMfubt3MHrzqPbdPgC23PALp2qPB2wNmwEjoPLX",
  "key23": "hXjLayQtft9N7HiwPdeENQo4jZ8a6pksnm4dTkfwGh96qAcpYvnGarJcwfYNbjGPkbQh5Uz1KpYGC9aKbPa24c7",
  "key24": "4mN9d7iBFkCLqd4K7EVgwBjZXxtP9xsa43AqEwPdn9FHFfDaGLzcW1jmVSd2u1M1grnS4BnUgsM3LRs7qLfqL8wQ",
  "key25": "4zhfd7EfVsj4jXSidppCiBhHU5qGwjvF1Dn545TkSgACPb3Zuz4ADbQpeintSUbLdoSxdWRm56yQYmdbLG9z4Zhg",
  "key26": "3efEsWaRGaCZSAPA9wNZgZKFxgga373Kne49QxWVhnnXMXen6X7iRb85PYKkw3tFeSSjUz6EJPx1VmN18SdL1A7A",
  "key27": "2z5RmuUD6XSiR5UTB1gcjymY6pe69efWbDH3CRYZf2aSDk3TojxxSCin9Q8RYKNQ1NGLSdQ5J7P3Lij7QDq6t1XA",
  "key28": "2svGQcpn89kNoTPPc3FaZdrQySvBxYivKLzHAnmNYPdZXvjbSpktBTzj3nJjiJQyfMgMvRMCLgQzpSbi9zZTM2MM",
  "key29": "Tvz5enjdaYbhmRs5EffcvPVS6KLAxDQQoPx7VCRsVJVyPGMBPhPDrGTLR56iHuYgkbftECPwraHfgFdsuo3KMxr",
  "key30": "3Jg67t1ZXuJFoFkjddDcAX6BzcK6VYoQ59vQF5RtG8tKWoXx1gtpJhTGWkQ8mH3z7rKHxmn7eNNUP2zN7snuspcs",
  "key31": "2NTHLESGTS7cxs1Db29rEoTQi9L46rwadUHg6eU68EgHqozWMF89RNtqPKdwQCKCKBJPtF9fnsp1u3imFqmGkzob",
  "key32": "EWFsWmq3vtCTiZwcQeDyD2xhBjxgEHAC1mSrRfecN1EJwZZ7fqw4JZRYzKbkthwAAweTtL2F1XFkC8qhyPeHM8d",
  "key33": "5vnpguHyQbWVu3PWd9YM7ehzhTwkYs3xT8tUvksg7JeBC3vBYh6i4ttP1SWhyXvRyV9wCZzb6V36ZePd687k5T3i",
  "key34": "3skgbhFfiMm1jPfZPbecXRaEn1AAMiWfzc1CLNwzY9M52jCFhrR6WaXnFmg3zqZQgwkwrhCFVmFuytoeqZwBskCP",
  "key35": "ydP5HgWDmuHxQwhCLDvY1gyvZK7J46cgW4u4Hm7tLpzeZVBX51NZKkxKx4kyMSXUsP2yMm1G4VzGLQgisH2Zt7E",
  "key36": "5GWMZNC3LT2tzbeNhjAtN8CEgbcEHo7JoH7hxFLL4mBnYq7EnqKUCHVPcg5XgqCaMqyNXDCdrzyrANUECQUHnZyS",
  "key37": "2oryBhayWr5ufwFNWPKL3Hog2rver4k5hPy631whouMp9EabgLB9ajMrYSVkRdZqoJim2bNm3THH5qXeeLPFovna",
  "key38": "2icC1s8PpfyNzggVthpT3BhSCfBeqc3ufZ8fDfh9dW3fvtGb1FbVB5dLJQbGPfTE9W2HGkKWW46aK28Nic8MdSqn",
  "key39": "QeijpK35s2g3vJKzRYoiHHJssVc9yEibpiuFBbXVRcHp3sAcbZTETTUyQMXsNej5geJya2b4KoqwgbD9oubMwkJ",
  "key40": "Np9uJjugyhDKHsuvBuPz1Wc6RPNKchSzF5gibvmULeRmo9YKW4NWoAYB14TuKXd5Ks9acvmgUJ1UiLFyarMW8Hu",
  "key41": "52BXFQ3JZRFGp2NhkbJid3S7uLcfPVtgvcDduTBoHG9f6NVFQ21Rnr7kSYmLYJ5hNVVSzcWwqrgCU7yCV8fEBsjP",
  "key42": "34WTYboVw9G1X2xGq8cbP8f9f5ti8R3BYG9cpu9gxJG282JpkY32zuLoAsQPoTxg7J73NvAcA7LeWyzqUGL1ogAL",
  "key43": "22vQCK4C75u2bYGcHmqHYVaLckXcUFfHoMLHuAp85yk9FDuyuxDBbuGNg8qfCyy5kgRVyBgEq9xEAZ4vZ9PrgLKb"
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
