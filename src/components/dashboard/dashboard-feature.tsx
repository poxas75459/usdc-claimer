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
    "54hctkot4wdQGrvLfR6pw2Q4wJhiybGWj9LEXyr8244uJdkdPCpGvWA7tKBPPkU4muWYSUJvneLfS3b2Hs8ZueJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VP5qGEJbe1ArtX2SRo8SJFFx271rgQEPcGpxd4eHwVSj5d86kFJmFjtZiqBfG7P1pznB9MrzPETJb3K96La2dDw",
  "key1": "CdwX7nsaXj7RcSXMVF2T8dZXGysgoXXTifBhGcAfWKtYxP12srKDeNcURjXggqdexksZGC3KTKA25fMm7NJ33nm",
  "key2": "46PD5bs1DtdX2VMHLFryEU9f3KhFJfxRXd9Use9BkVhaqtGmXMm4GXaFZ9ECbAJQaR2MGgsubbr7gARNovXPnp2U",
  "key3": "4fTDe6mJAdgZQ9ZCjwLtPL4xzumD76HQvREd8z45PqBXgDR1pNAFiGMrondNSF2X31KTkcgbkJAek8qcmDva7xd4",
  "key4": "52at2En1E1q6ytofGfL3UUyPDHvSWHUrptMWVMRBrirpoRXeiZn7fRFePZPfjPL1heSuP3Ew2u2oUtvqpvgmVGhM",
  "key5": "eK7oK9PyPhK5CEP9d1AxwK4vEnST6kPbr2d2y2fiKm84WFMBrRj1DzBGYrerPyEFX7qby2cch2TvHyRsScimWmk",
  "key6": "2f4jfifaohTbPSUNv8vQcz2o1s1wxSkhP5GB2ZH3MPM86dqqj9UnJzX9rCarA3NYuGYW4Yu3PYYGVUqtkPiaD9wL",
  "key7": "2Keyrzd6obMGBu3njQUMeM2kHZo6CmZHyNZPm9enZjR9k7HR3R5kLmq5SL2JKkAckemcg9GyTrCTijpPQY3npxHr",
  "key8": "3H2WiZuH6QMro1oYhvRy1v4UGwJyV4sGbomHQjpjuWZdHdewr7X5jaeDEhKuE8Vz9iwbBtGSBm1tXfyw9hu43ZfU",
  "key9": "3WjczxUFGcWS1QCxiwzPyfa1M6T8ia5WdDR5Whqc7uPjU5D9tbf1FanPGdZ83J6xpNnfMKZXjDzc1GR8iKcPGxHs",
  "key10": "57qGGRyUvhoYbnPiq8sy3b883tfdxszC6LHxBU1QNeGDdnU9XXQZNZbD19sXhYzJ7uCuF9Rbu99QMPh6odV5oPtC",
  "key11": "25261U9ELFFzJHgs1h2nub2qzHSGkedN88ueJsZ77vh99mBaMPgPtBz8287wFJqthPuPEcYrpTzADcf1e4sYqvJB",
  "key12": "WD89ciP8i9dos7WscVvy8Fp12Tsfm2AhRiWfKvhrbAmbJbjQE96MhkUeCxKVgALZebbPd2tV6p7wwfKe95WmGDC",
  "key13": "RgEMVjx5TkN7Lo8geA2jCijLp9iDby6iXxEBGLZeE934kteX1Pb2uwMv3PRCX3iYLQTfF1CjyraimR3P9UVYdVV",
  "key14": "4oEW3aeRX4zs4vWjNRPWjq4RPCtAoPZgTAdxgKfmeQ4aJVUXDaeEXxB9Y9ksbU1q6HoVARb5MSCd3JfVXi6rQAuk",
  "key15": "4XhBkRiRa4V9bjDTtx4x61tBVGLwNbRpHZmojJSYC11X5Jaej3A7dRCTASVd6zB7ptaBkujNP9D1N5wN29cGPJBj",
  "key16": "2m4X5G5kWJV4wSyRPR9BScxhGukbC8gPmpUNogMuq2e42ES41EtRFbJ5iMxEpcRmybrjj5ZhWsPaXzEAsQEpUxhe",
  "key17": "5jta3sjfzCBLyoVwqBAniiEGNpgJoY5MZ9sKLjR9qZohAUTxKh6eHausaaNDo55WkKHF5s7MfQiCqVbnHmx1rptU",
  "key18": "2xF9gxNrrKfa9CrkHaZTkoPtG7iinWMTknEKaaKhwqQs5p6RGE3MeunQV8RDSJXLupXJ12wr4zpMedk2GDNvD5nM",
  "key19": "3ReNRqFjN6swer8EgScHXE4qwiuosex91JfFvDS9to6BzU9Wf4U5rKoWyaHMxaxAe5FbMaCaEjocrwkmhu6ALvYa",
  "key20": "4bBQ5pYkimczCTxb85P3qJMByUQQvHuja5LN7CUyVfX1mrvB4kDmqtWBwgivZXbWa35PWjEFB4F26f6cBhTUG242",
  "key21": "5bLZiPBDAQp4ntzbQEH7jeUQznpLiYoe9dUd38xxSjwPqYBfGGKmDEF4xH6bAxN4k1p6w2X19RYwRuxfjjk5bv7B",
  "key22": "5Nwncjt35NoMYNZA5Y3HU31kDYf5tMka78GUvNzJXeYYfv52wb9gjwsBBb84fHWbwrSRZeuGFXKwsEkm1aNxBZ7Z",
  "key23": "53q465ZMdCLjKvJznCKLNcrQDkkQ7AoBH2xrMaQBb38UehcSZpcZrz25Q6yusNH7cyXf7jLKyLe4zim1sQjLtm7o",
  "key24": "2brgYSHStgNFy6e6NUMGXswQaekjz9WgrdaDNzkQtYpMNwhLdx1er4Dd72zh2E1hWWBn5f1R91bFGZYYvHvChUnH",
  "key25": "4CkBQmZNPpxufCNH1aHqXLwaNjduYD8MDX7HFmjTZ6oX8136qR4SfhSo98qJ2cCrj17FwMU7gzN5onM18crpqxwf",
  "key26": "eypXVEFwrp315VKLVfAn5dRypGWpMG5EQoM2fTQQHHkkS5RTr8Jgg1ERyULot8McAmaCgZVsh2hK21rfZ7x6PBE",
  "key27": "65gfFGdKgjn48qg96khg5qVXg32dGnmmaiZ4WRXVebdZhZp1wF9iqzrpWWhJYkJaAexBriYkDNFbHG8cs7f9oqYY",
  "key28": "ixZjY9rJuFdTUXTJHDoruwDMg1krKH69ZQy1z5RygG16U8i7U1skfnq8yZeFUdtcAwcjVs9BGonkmdSZbprWvgT",
  "key29": "4KQBikhb6FnatyRNVJTrTo9iZTV87DXkv5FEtyA2zBGQ5vi7Qx7xt9DdJfZfgKn6SZ8pbJYyLLXkFYPANYjkQLJv",
  "key30": "5mdtCGBGDK4CQ4QszVVK7yLLyxHoHTY11BRZPdmkRqPjErzBqxc39dUUfy5FrNSLFC95hmQhb2mPk8DsYeAPFUmA",
  "key31": "5VW1LMREUHtW9DSg29FsABEy5tXHuEK9gYv3ZKDwLFcHpSV82AvDgX3LXhvKV8Uudd7QEThpBtkS41z8mjxADNyj",
  "key32": "46abNfVCo2Mn5QDhaPtFRdh4ctXQ4qyr8vPNSjmaca5K82tH9YCmti7HFhyjQp5okxTyQSD7fWbQTHmamCk5PbFL",
  "key33": "24d8jNePSou1VbkZt2jjthNKPp1azNMJSkUyET8DoeJHmyoeNdxMXxtQkdamA2XAK1myfqFB8BXqSc9Qj11G5kt3",
  "key34": "61BMJveDXqVjJmNNA2XPMc8vxCSEeV41bBGHgUQ8W8pjfDdMvzKNSfC9jfuRdY5H36VguEpFz43ivxgsYG9FsWR7",
  "key35": "3hQ5TJGF49RLoyGeaCbXyHBsF8nYa8Amg3MugzVhs8FpgNHj6Kqq9nCkR1NkDjEau4LTB1TW3CnEWRQEkuurCkLG",
  "key36": "amrW7axsgxhi7yYVssXndcmwvR26M75z5JEPCZJUwhD1ucicApmSecsNf3pGdoGrPrEG1Ed2mtDH7sqwjjyyihN",
  "key37": "NdoVtGfapj23fPERHZNvuuTN8yYAdKeCBbWEGEkxP2E6qGVz3EwGU1gczEYkPuRSLXaQBAR8eLGXeGfUnoeNTQi",
  "key38": "TwUHtr14LujY5ZzHg9jk1uK7VPDQ6QPzFFfWGtDEhijaycv7KL4ruQoDoGpw9YfZ4oG79kRuWaBQhFU8fqRVEhe",
  "key39": "GTQGpZGEUXMHoJzd4iZoCUEutnYnYfSrxzSQNCu5pbXLMJ3KGyyYgVmZZa69Ka6hTqSMAKqB8oAs7uR9HtZxr19",
  "key40": "3KT4zUjpi5i8cfot5QGnxMuVQAZCb5W79m5tEUNfPknyytuas5oqxi2ks2ad82WF86ajqQ5NSRmnFi7DAWemeh9T",
  "key41": "3faZF1E55poaJ3b3MTMfHXTxikavqEt4UnLj7ZJ34jPEoG1yPSnjDUtruS1Mk6QkizJieQ292Pt9TwVTwB7thU5Y",
  "key42": "3GP65Kzyz3fk2e5UoWudhGL8x1WgAbfBkTf1P6uAh4WbPAAAmJXrf5sc5P6K2JzoGy8reSra5cABEUWagCnQE1ph",
  "key43": "3KewRf6vZMp15CNGSQknxUnbSJDPW5GdhCnUeiZyJrFePhwnbJ2fxuFqEGiV6naazGmoBYbwscMeZ8gLoTyBkh6U",
  "key44": "4qKT7vxwQUQX9F9hGMHpKFvY5ZCTrUTMBrJpUsYB7KK7cjge3PHehnw7523wtcs3PUezCvNp54wXZQbHbf3txH2V",
  "key45": "29DokL7rTLkuoYoz8dd1U12pDtNTh1nfydmab7ajfF95sRyzW9TCa8zkMeD16boWYgzXPKUAR9CwJkB7ZQQJiZgN",
  "key46": "3fqRSYMGkhvpth6pjDArUNjPDMF8aLNXysRd6t2hDgdUh7B2dTdi4gJ9qj8efBpRg5NPT9H7nLzxyZPBaWXWukrb",
  "key47": "4YcnaZB4UXTibNk1nbapXgfB3oyfuPZKyv2Fk14Bx1EJVBRtbnwQA2caExq1HV41svLiqK5z88HUfXTRuEY28Rx3"
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
