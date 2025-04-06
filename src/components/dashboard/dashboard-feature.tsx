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
    "3oqHKF3wihG7bd8WhvgdKSJQEc4NfsKEofpUVb1eCMt8ts97Hesf6pLmENfWrKEYmrghoM8NXxtj6Hw4612GPhgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQsTWBBkcy2qMxCkzAz2s5biBPcHxGMT3FGwVdBNM9HjaMcuTNG9m1YsJ5XpBsNoEqmwzTDW63qnZJcS7dJFCP8",
  "key1": "4WvbXuQU9ReG9JnmFAKtwQA71irNskotg8NU4BY69hYXAx5d9cd4TEn5VMTQ12o4hZ9Yo5VW7tWBe4cyMQCUGkwE",
  "key2": "rhGHizaavKz7GfBhHXDCXBgiYH5GmXayNKRE5xGX2hnNokbZfBZbVw861e3EN91sQTLEM7EQ1uAKC1QMN8ga9jr",
  "key3": "wS7wKgq78G25YVpZghiemuRsYRsSM5rCN7PakuWx4LCfmGayZCmWEn2W1CPsC9spNxcFQZJHJKPne2jAXrMvvTm",
  "key4": "5kkN2HMP4VV8jiMoioXyTvTWgxnfv4qZbWXreENVkJFsFmSjhjz6B24QJ9JMSgodGER15qtaFvrJ4LngERhqULBE",
  "key5": "4WTFxk2sxgjaLMfzAKR2XDEH2anUvL8DyvmDMs7shozKfoN7XvpJCKF2CEVLGU6RAaHEXQNqaiRjHpoypMknVBZE",
  "key6": "3oHd5jVxycMBkYSXH9steey5Faskgj9Wbz4mKadxWBpeJg9fZqmEa5rT1pXcBMSPut5Dnj3xRqVWKc22GFgC7SWL",
  "key7": "3Lg54NocuSyqf3m7q1zaAbEtCxMPFEu4LEpBzmYjwVSATbx93HyoVVpEFUGWS5Bgem1Upp9Z19aSMCbQ5cbkFQQm",
  "key8": "5ABGE9XPFTASHRoTtpiJTJ1xUXAjwgBUqJiyyoCsaL1MqZaZLErAMVKkLbRcUEHtNg3Qcnki9m1AxsA4mEsoDrLA",
  "key9": "2TrRXXuhEomsg4RWJvFU7xZSjks5TujKFCVNkgLWUSzEeefq5xapnsfFPnTFFkU3Zue3fNNQY8NQyGHXn5ek2MyD",
  "key10": "3kJzhRgYbTvVkUb3rKZb2gUbGqUUByy26iX3YtjR4VkLsJNoFPgtgxjpUDYc7bXLQBSYi9HjZxRT4iwXYyHbaYS8",
  "key11": "2AuoWKhHFzaFMshoWf4uwGgwm5vX5uuf2eV3efj14aciuiEoRjDbRa4JL2cuMDbvtR42C5mzGxfjAVHFTu1g4Xfw",
  "key12": "4XVNB4b7AqPksNMJxqfdNMizDU7vAE5CAckWYFuSFyjCp3YUDNU5vC8xA1JnxznZnxQ8JqPckd5gfApYUq8sUH4E",
  "key13": "286oUdyTa7nvmhof2wFNWtDy6RHMPizJCbmdU2CcnjrNuiG4YRCwdj13Sz8XzVTSbdbhJR6bQ4JTuVdUGkqrSJP8",
  "key14": "4Mix3YEJUfeLPV2NsNfeYcvzB7t8usmU1VHKk3DBQRfmP5Ph74oEB5a8GSquYKh4pQKXDWXrPLjPbHVozLrLABWt",
  "key15": "2VBSLGSXHccigQnc2JKUgZTvSVgxSyFYQZvnkuFKaBYAogeXFttaHSUKktnAxoMxH1XqZDC8FhVfHPjTQn6jaJAN",
  "key16": "4WxmTQVjk3PZCnr8xSakdTA7pvyfJeMxdjNgEdjsGjMMQfxfUM2zfemm9QeCxTwPcUB5uFFcpcBCNtYnUudBGb4g",
  "key17": "3MCq4edAFX337rdxdioPQge93zAqZqdCk7igMB5a4d64cUmdHw4opELvGJo5aCfX2YkGGzJ8TRjZtNWgdneqZj17",
  "key18": "27VKEjEuH1p5z7XDXwQTPBgh8uMsv7nufN3HVntimgbntShp9raU5VpgybdvQ8a5P2VV8zFDaYb4J9Mw9EGujDar",
  "key19": "DqH6Y3xDmnA6dQLhe1hpUTXJHn1vrhCgXh1mbAmAeJWeP6GEGtLXb5UDjoBi8wqKZQCFcSxQeqH1uBgkmZ4NEf6",
  "key20": "3BeYnqij17bjpTDtVvFwyvdpuvGmDZgmNUqutfKMwEAUWaJe8kWoJk5S7Wtb85foF1E6QNPN3yv7f86c9LK3cq4S",
  "key21": "4UFfE4mpmNp75k5CbmzLUMedPxmdSnHezhAV8ACKQCXT8PABZowuJisNDkYDNDwHjiVQg3SVmThhDbokoyHUjRqe",
  "key22": "2Adnzgb6NuRDYEYijgkECgKn1ScpxKLw7DNZSe7zoUT1j5VphXSKaF8KQbzoALnLzD5F2UeJkqA8f178aUaBWDkJ",
  "key23": "2XDbutgfWxXxfcAUBMKBEQpdxpJiMMDx6CvCuahtek9UjV5h6evKBZ8nwfSon9URn1EgbHaazKoqU4TYL6oVcuEQ",
  "key24": "5WNxaFLBUbdWy33nfkv1gc6R7L1Wex7fjABmtKLua8ji9P6FWiVhnaPBUnZUgeDEiGzSn8GMcVS9APUtGXnGJU55",
  "key25": "2nymU2JnfFMMxgDYTcNTLf4meYXJ8rqbRVy527cPGMkdZQyuTQ2ghtKojQ8hXgaqsbECkssKqc38f87Zx1bJoKYB",
  "key26": "9ih58bySAKU1hH2EbxxM97wrx4JCrTRNzHpTJgexZve5Ap3vKicwLFgTYoyToNMuNNndakmeEaQy7TYpZYYkEQF",
  "key27": "3uJYKHNR1DQ1stDPNvdtUcnyTqD4HAGQUqEsL8fHrgvvbDj1G9crniFU62frEgPQxWpXeTruMZ3mCfSy6m3ZLV95",
  "key28": "x5qzdD8eHD8uopqKKRbbAdbviwh92DSVMU9D6haQU8k6MJZsbvtVctshExuMvFEcHcbB1wndiJCBR74Xqd1rHhn",
  "key29": "5yqXFJg3gbov1Fu6GDNHokSzk7LdU3GDSFHN496WgDrYAHb1rZ3jy7n99L2m9g8TGya6nZnoAUP718d9qcocm4ED",
  "key30": "yrceP41zbnihgAzyLynokSB1Bf9Bw1bUUQ79cSHFbH6oBAkJGciV8MjktuwEEfB1gT7BUzvCd7W3vsbfWA6QBRk",
  "key31": "4ggnHQuALecr5QqjoHdU4iSrhhPVsANHtudSx8dkanL738W744zExDXRKbR7B5aL7hWDuV8vUSSH3tGD7XsV5ohC",
  "key32": "4yu2jfxm8MAWjADzJvBt8r8YtGN63TRNo7PrtE5F57Tu4Njj8xwTzA5jumjZencmncbPmNz644XiynesaHBKVhx2",
  "key33": "3nbtdB972CDDvTxVnSb2d8k6K7qf2SvqNZRvJTCtZ2stn6EtLQ7Jy7kH4Ze6ZWiVQDy4fJyaepSf2jgpLUztVeeD",
  "key34": "mXAS3my9JvRSrpD9x5mAeLrpXHjgfSGuHeydBs1TBw53bc5XdKDKuaqJzbVkgxGgGgvKVNX8sD6geUuLpCZ3NHU",
  "key35": "5pET9QbCqKZa8LP86ibwANhMBg3CYXwfFbsbM56GVcpDaie44MciH5Je1Urd99LA8bQxEPSzM4fhHiVMAsPLKYKQ",
  "key36": "2tBqPEpeBNBQ6yniQcdVpZJ1hWEoSTPr4xQtYizmfWnkxjRCHeMcahpdZ3BoJnjRqN8eVoj8ZoUz1RwHVqfVJGG",
  "key37": "4VrMRWEyEVntNokYh5oYm9NxwKC6LhoGj24PCAhiwZSZFS67ao4kciGrVhtV4g8x6gjSYqf6zZUX9t9fYCxLNUNq",
  "key38": "5pGNFgSmMfHufNQPDky5upGt3Y6NGXG6MQs7yfSfTZA7x5K2XdsfcaBvHZB8Uv6iexF2T9uq17JWRtkkE7WUP94h",
  "key39": "5yAxWHZjvXpLUonJppQ4FGYs6tERCfSchwgLLkuMJknBHYu32noNUkWkrqgeSVM3dFD4cbXjvtpDMMye76MunHPt",
  "key40": "4je3LTK7uKnzLeLYLkrmphp76C3tZVLcti8N2VMWchP5p2b6SHxq4UzXw6dXMXw4SJtihMsRDcFck6uq9GWKF7Nr",
  "key41": "2SuPFVe6ZWphho7buptj9MeXdqJFw5ZZiSrRevmTQ1URjYABJs2mLHoYFQhx4SMxJUkBMGT2NXxLHTdm36kmYnEK",
  "key42": "3qZF74UaWXc9RQBdTxWm3MYYr1xY3rMP1C85y1cqKQp4aYPPbhMbSG85E1EWZSQJSrK1GnGQ9Y4nUseaTDWzBKpT",
  "key43": "5HJKUf3AuedcNP35SzN5sks1mdc9a6FZac7Wbv5Gr7f2mAA31P16GCPpNhEjNLSRGYrg7TRaFYfqFdJuZcT7vULg",
  "key44": "3fCkDvTqqseJWEC3LiK2g2oiDx62j42Jvpgn3sQJka9cLWbutBjTzdv87EYDW5aij6Hbe2yf5SBNqSNN2stKRspY"
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
