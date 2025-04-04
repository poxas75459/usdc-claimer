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
    "3csk9dfbk3gsrLbhKSK6Nr7gNmXK1droFiyLkEsWuxKSo8ss61dKExNMEZuVRKYXfnibh3N5Ug2gjD5GjTQPsVvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRx4AGQDDT6UiUDnkTeBC45QzNLzzQMVEj7imeELCSQQhA8LDb7ZWJPs7BJrsdyF5ptdn2ramY6aHwaHCVA7F7w",
  "key1": "5fzMh7y6kvwfkd5ffUrxEmicECsvtSvQvJrAvV6kFxTqmr9Tb18JBeXcQoAtUBEx47JgctsDooPkWnL9VWP1t2Eb",
  "key2": "3TEJbuyjMqPSb1eJs2XYQLfpApD5nWvha1EHuwkyyerXuTtn2fP9zYCVxqmM8BoEBVQPBgc3GPSAHHKmSL3dUc4x",
  "key3": "2jomhHm1XKApSabdKnWnsVgHtef2QZwMkjzEjPdZ8DGVcrCkAt3nUDnE8DVGBrLaKX1Xs2wZRjMetig3NJyfGtf6",
  "key4": "5ft6idCYHwj9fa8aDWkCChU1AkH87432sLoGa8HDTAGTZGew2GQ7y1PE8pf9AhnDFmWGJfQvnkdpKVuFRj6yBxnF",
  "key5": "4w8Q72nHRQxZWuheeawyu39GY3om9oJy15pVgSxVCw9z82msRXQXPHu3jF72gfRbPVJYcvVDGsCMuJ46pEWnU6WQ",
  "key6": "2yoMxFUF2qzUqogAVBkdFen7rFwoKEujqj3jsY3mRCi8QxpuB742u4skGoTHK5gqzBvueqC41cyvFg2Sfu9b67Lh",
  "key7": "4w1BL3v6ZmiezRmwh3Hk6PibrCtFCvysDH6dnbyaMYpFfTLzwZd84aGau9TvkyAfZ7hPNpXKPoo8Xwa3yPkUJKZa",
  "key8": "21QMvfd7p6t4FTv8vo642rwkGv23aoVAGxZK8CpPLgfaPTRGvcMtXzT11dfxEAn1MQiC4Nvu21wCrAdNAKoRrfrq",
  "key9": "aL4E11bsDUUoejE2ryJCwn2sW9YkHHT1rEmsMtGSSjm7RnrCbLcCJaUm1jc3c5R2uwydcx9SzGy51cFCs2WwSYQ",
  "key10": "2ozH2AESxNCf2hJfTAbkj7yjs1HfQv6ew4AHSoLtyGphQJ3PUNWsPYs2R8TzpsHbvLiXtgurd92E3kvy5eB6savP",
  "key11": "4PNxZjyC5P2WDAWr8etuJ5KQ2g2247Qm5vNVcotQYmX4qCfgSntjAQa2mj2uPmbEB4wxSmg34s3f5bVmzR81RzMP",
  "key12": "2khReiEyUGNHEirkLb5cARsW4q8vYuhF8s54ywfCJNq6eEuDAAXHx9JRftyKvMbLWCgSBq18E5qmG5onmFEzuSEP",
  "key13": "36yFFLEx89d7Sh92bBPtpRrFdnM8fYySFrpFAX4AeQJDAVC1ujT4KyEgnDq5EZyXqMAH8qhGAQvC75DKKPpwUFW5",
  "key14": "47zs7dggX16yakuTNn3SZFen4shXEKuvPtvNVHR5pjQE5cv4ELPWoX6VZuBeQvN9ZPFLG2EfxzAa7CZsBE3NQu1F",
  "key15": "4APE6JLncyT5GVDrqdMUHSeE7sBYQynZM7JfHpQ76MnDd7goF6Jd5iuAXTRdnQtUozaQeThfpb1jxWrFos4WTvet",
  "key16": "3e8cD2pGfW4RFw2UEUNjL7C189SBvcMxut5K7sbHfrw6hP4SWFbD9UAmLNhsLbt3r7KhDFKJ4QE767ZCs5ZgFMH6",
  "key17": "ktQgfoLaAbFSipxXJW6ZD3ZVjycNSUgECj8DQkBfGN38zp7AXeLce1iu5QEZGWT7NAoVCgVbu5oR19okknfpcjY",
  "key18": "4U7ydHrApLnHap1kKjUQUzrb4CnugSDJUKF5bEjLXRhZ9uBEzgQeqttcxw5v5QGpQo4AppanKkNCk4q9N9c5jYYC",
  "key19": "5fMGxMwBhavs1AtyHsetrfBbHP9uJxWtnRSTfUFcoBSsrAwhmQQScHkAZZZa7XFybEEdETZrSgkzhdvkE2F1TNHT",
  "key20": "2cwE6yGmTpRG49RNSYRBHocomapRuLutAiBHsVfLzbkSKyXtrBiszGLNA1XhsG7d6cARUrjvokAGm7P63r9YT8Ph",
  "key21": "58kSrp9X7WihJPNkW3ApahZoFEoydh3zKSmxXw1eUYDFcShrJpNTQZeciGWSLyzyRQsdRCdVgsT9sP98G4ZpBV1T",
  "key22": "YXAzR8W1Mn5sxqEuCq1uBZVsTCJFz6DaeckyNdG1QnjqE8KGZ4a6G4xCG5Lp7KqHnYzuJ72Y5jQ2Ao5UYc4JWBT",
  "key23": "2RStb79mbMhij5hX13TMvu95tmPk7W8cugSGG2WEyxruTYzfhqKKBoazbEU3DbFMm9f2iEy1jziHgVFj5s6YAQyg",
  "key24": "4QzkmqHVJLFRfibkNQk63LoWzKUJmmsuYmUBKSvgs7T4WqwizTS6f3Lin6T95TKeiJ4JtJksiofCG7VWm9brP89V",
  "key25": "qcSbyoQvPUusdjAS8tVxKdKJvaGqtjBx87QmpqQm3hvhoz71HaMAdC9ykXoRUFF8ha9YbmvDNURVNAstnAi7SSy",
  "key26": "31MWp6XwNYoTVsNWq1tTVgPvjPwnMwviLAn5sM8WmddkGMcCD5XcPRKxa5QyTLvJ3S3uRn4Athx1TAUT198LvAN7",
  "key27": "2kvGSDehoJqj3QBxhZiykkPDtZEijosaSafUka7SiHB8NJ5AW35uNxQRYaTpe1fxc6yzJKa8RSj7QA3996zs1pcT",
  "key28": "4iywmDDHmqeou8thopMg2sDUM1Pcfgn6RFUC46jaQFi2kn2KJz7fdJtYJBHk2FdNbcNVFhBwPDYPV5pRks4nedL6",
  "key29": "5mEKHuH4XVxDe5PvXwbAsVVB7rUKDqnZ27tdBpAs73gT626EyqWxCnwXzXhbrEaQcKyv4jR3dS23MefUFe1iQ8TZ",
  "key30": "3WGpU75GfKJrAvFQMk2chzwYcHtJupMXSpGo4Jmh1UMu1dHzuY1UZARZk6QQy7esptJEYpAHsPq8igvDU4N5Y2bh",
  "key31": "GcUuGUaYVpT7NesYFEtK8cpFTiTakekDG1kmuQuMkmLdqW9tfrryXQ6hditcQFKFgoxiLpTzYe5SgMdfMPgLa2t",
  "key32": "2mP6nY8wro3Yr9FLPU7JPFyPGiTWNjk5rTxzkqSzw4HdUVXVNmStTGRCrwTegspps4atQPerSqB9yKKsyf3PfRDh",
  "key33": "3Zwea6T2qSGEj1zey7HNhi2Cn8MXEMooMGCSQUjjMzNXEk2ZVBZ53mra1J5Y7QjZcgBTE7w8WeCema5SgbkE5BrH",
  "key34": "4zD2515XtcVcLQHRmMjGMVW59tKYzD7nGKSZq8AMr67Eg23aMc9LWqX4seqGg7meeuE4PKkGzbSBmYKghZbQRx19",
  "key35": "2wMjD3mryyVtmAxN7mh5yngCp2Tc3cBnadGhfRmMfp6qQC9iPeybkToCTuqnNbeepGNhAdZ9WpQuutn41tcVSBc9",
  "key36": "5NvJCqc5eKSismXngWkbCV6jBFJjjxJ7Ehhb1sYUXoM7SxRoFDE298EWyDVDfEy5JHzPgJ9nC1p2cxbo4YdWRmTx",
  "key37": "3AfpTrVxiFMGbVgFb8aa8JLHbJvZQoJXDa8mZgG5JZY8QWCCGmxWmxAGAqMUXy8thtMo2WQALrFYisPv4dMZoT6z",
  "key38": "2mcaQPFAs3YGRMgQXz5APTAUsZCnRVLuB4Z29YjJtwtgT57vvp35RzLzQ4HG96ZQfaWPTUZgjeuGVVpaxVVpcLF4",
  "key39": "8hA5gBjkPVkWVhRxeN77JzBp6s4LoVQWgn5dV3mt7PtjYJ5rErNxM3DvQdBfNdorWLvzRJ28zw9jJK26tDFfeKY",
  "key40": "3fZnBN6D8T1YS34C7Ly7LSwK8UvBV2QunMhduDmQMrCBYoVRAnJHRB3TiwJbipSKni3bckESzUBt8Qu7HGhet4YF",
  "key41": "ogUKoawexzhBLRJXYXHk5fCpFPn13x1Dn5FV9Nwe1kXRMPSAo5SychkbGTiyAmDdEQKmBDJFLxLFEm8WpyEAEDA",
  "key42": "5bLUv9DgPfxeWRQifCEZb3EXXEFJXoYAe2iDwC3Y3VsfvQgsS9EP4ze7cerJyu2qgm6XETnrSaTE39RvZgmAbQ4B"
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
