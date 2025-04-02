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
    "635sVmZNkrvcXBnpdEyPuEMRWYw4QtZDL33myh6BzzBFHT8KY3CqxVfLkMP8ZrqzaewCn6XzmUw64XAahU5AXoU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XA2bs8d1HEm5jZtAv7YnwMjbseCiDCm1hfea4iJw9Vu1smYZiX8HdsvRjRoiihwNFEyLQKZE3qgP4yp2ZZ8UaBS",
  "key1": "51fXDQVJmqcExk6fKokfgqU2tskzEfDSf2Zk8sFv5RDSTttxkZYiVM2Kc82e59YQWz6BG1KPSrAvoE4cUoThhEGp",
  "key2": "66MoZwc22v6EzZadghZpkGNqFWCuRSZJThcKgfXRr6DB7cRp4gckEi2fJ8ktouUacymAv22SJ5Lww6VTaUgBKLVy",
  "key3": "3Qesc1nV3Z1F6NZJRNmTPg4RLSunnbSBNDr9cnhE1R9duUZrtwpi7EVgMHx4Prcd1j1vtHP9Jhft8cx2ZF4MCMQW",
  "key4": "4AzZPsKFPgRp4so9sgp4v2nBfXodXizVxDJgug4dMBiALBDuUrQxWPyaDiWWNt9WskM2tfWMqhNtbNNhBRE1k7Q8",
  "key5": "3dszoyRVjNJ3ffJhid5WtyWAe2PPxpttXeF2gUNbXyBx9BiMtSoJRd6XmZW6gm8mzMYuun894JkVUX5wAKGdcf64",
  "key6": "8o9gj3xmNkYMAR6dSf5Y2uABKDjoVPH6QvG4yLQE6LPepGZrpv46dR1kn7Uf3tdFESBjZBfdwGMDHmjGX4jipYD",
  "key7": "4AxTUKJzphR5esiDTPFXn6mkKCReVXdwuYfktD7j2Kw3gpk6FyExmsc7DLoDn55iZjeuKmQfMFM43F32sRmcXHwF",
  "key8": "49yNqPWxGau2tcMw5MSjTDhhpErMDuES1SRpUM1SYrnKX2uUtHkwmii6yjKgfXbWhSLoJsbqvNppGmRdt1KMBheg",
  "key9": "52BYcPSddvhvdx2kZsK48pPy6sTQc7zwUCr53C1juZpnLk3d2wU3rrXCQ2ZjiGU75vuuGDotuzxoZYfpCqRspPX2",
  "key10": "2pKUNiWL6itnyFvzomG4igzrgWs5yPxVRg4B5qCMAkZqaBhdVnqdN64CNtA7kzczjBLzfGDo4i4Rf4Cq8uUkrbNz",
  "key11": "5qLRrU3QXFm4WwkWwF2CdG9DRV6ReaoanTcFnM3SwikA5U93JeJki3T1GWfqBmQCYvvQkRQy3pUR7jYeoa5MiaKP",
  "key12": "4wdc5WYBxWG8vkYmQmKeJBc7XjX1TntUswnFbVT5CiQ5dAckGx99vsu2mALsJCQX6RbqozXKr8fFhCKFV6zBPHJz",
  "key13": "2LeK7nhXgPMvHuzqyGqhrX7JxxAfPCGkMnmmicbb9VzSZdc8AeurcKH4z7zaG7kCGHsrfkxqz5QBPmNaycuNbkxK",
  "key14": "5Npy5gXw3KUanQehBDpZjtjtQmcXp9HybHaXXQbGNuP8NAVHsqWSW9MkWoT4MoazVcGLWCd6ZsibQzyGENa6ir24",
  "key15": "5VPgxVRpvSRh9gmTCsbfPvHVQ7c1FwwXUW2NSz4FLBFjzPaoHR6d823U6iL27W1uH5JT9mM2toZvaXh8jANj9yHd",
  "key16": "28S13YuexgHRVgLALiqZQ8eDoHj66FetbN5icwfnz5NJcLWUvNEh2a9cSmAjchuHFB1qwCHPyoXpH8UkdyV8Mtzx",
  "key17": "5E4HwbEVjnqTz2vvNdW9oCpbyNtycffDGj2qXRWfX8h5hj2kkMAQtw438ZrGwXbqncxLk7qTgPchSZpBbVrNpoUn",
  "key18": "54QvQXZKX2NjQcbmADJ7ra8DguPZz9iKC7snWmTj2tWvuiy6gpUHheadYsztdsVQdfAe3C3HzSupH8fZYq8qo6Uy",
  "key19": "3nXp3iWHuFD6y7KQD7gBqioCiA98TgF3gizfnkQgGwobAeKNRH8HExTZpsJmccMuCsNFnZaztcvYSgJcVMVj66nQ",
  "key20": "Hg9WEP2bmmtVAwKy1W3ZoNRGxMKhYG6RiogaHq76wP2NoxtNTrNuffBUkyEDxy1cPwRhcHYkptWBq4fAkkVLsdh",
  "key21": "4JeW6Xh6r7WEjvj4FBTbZnHEESdX1x2y1LPRjZD1Zet7RGvHpNvvM65zbLR6N2BfJG5gBQMFuitftgKwv4dwr2dc",
  "key22": "3r1WFsfGHYYNfeRL9ssDPZjzLa7d8qyYMAYg5A9Zf2eDf9LkCpYxdZBZSgutMqj23zXCGm1Mdszs8tA3vXHz4Wam",
  "key23": "5oGA51XfgZGpvhrzxTKdxyS8WHHbXR49YRp7qF3rix2SExnCCJbmNfQQSALiASibDTat4mYLtvPRFQ8vBB9uTEBW",
  "key24": "2y3EKjzJzBY7NMtbY2YBu4WBW7ZBamnHVryFDFV8kBkPhYnNm4sJYXzi1FHWMhcyjsNnEJJoVyzLEDC43P1iMnc9",
  "key25": "2fVJMniTVomvUtAK9dWUXvzVgnmh71kiZ1MkpzTykQ7QsMuCoxRZWPtT9ctfbCh6B6vsGvc3emdrxP1MkXCmwfnf",
  "key26": "5cvLkoCTVTUhZoQwLjbyiKtJ3ieYPtnTNRTRRu8yVA616e2rwSaEyW9JSGVexQ8MhhiWGqBMu8u4As2JpeXoqDKn",
  "key27": "2dNJwm67A4fVV6dTem7uJoaiXMQQEcgRFiA5WEhxLohjbfoyXRhzFER9x2cH6ACDdFsTH362fiMJJfVkXtcVgnM5",
  "key28": "2eShLgpAaCRG51fH51jAmzaJoDt2wCjLyG14tysAKtrxVMwF7M1Y8wsw75ogm59mWvBHYDmH8MKKqbh2GcdirqSP",
  "key29": "aGzDXa5RADY43cottF7SLYPkn56TKy37hYo5i9pctMxGo69xNR8ttrz7pWZUAJHHHZuMpUvEYeksEwbeM9CVPvE",
  "key30": "2zEZCcHmuB5rSsEk7bJw3hbfFqCrNye1E2zcCMQvTjQyA3tMKvayvuiRn53FvCuvFYPEJqkwiQw24LJDwYirYYfr",
  "key31": "2hHq7WiJ6gjpzkDkiXmGQwXDQ5gtqNDnu9KvezGr6seQwhvSRuY6vryq4uMh5ndTH9RVocPXXoKZwgCm9M9xu8z",
  "key32": "2LNqYjeXHBXeJKmJBNn9uQtBDR43U9BnPLYpZrr2uKDHqmT7tY8iRSYiCKNKsgBPXeq6rSyPkVynTp7egzhby2j8",
  "key33": "64QbrRMvA8nCMCLNucUckQQC1EzY8xD6Jo7jmWjJp559fWcuAESJjtU6B68cmjidNiPuc7o3DxTj3K4n5hj4Go6D",
  "key34": "5ytXsoQnA9zKNvRdsSQHgVuReC6XPKFVCNPrGkNjkSZ4GpVRB7KVSqvFnunEwARQPYGG7TSVwdLgVKdRXvpNr4k7",
  "key35": "2BWBgL6NHTTBzGUgde2My5RjHjkEFdFkjxLjWku1NApXSqkwng4ymBf2qka4NMag6Vhb5pQaP48Xj3NDDaLFCzkd",
  "key36": "5f7ZQtLHZaXezXggn8tfwMXFNbQaTqYuhRtpcnBBccvTc6Kqu96LtvpTob9cKJxh41V6yPJyawarDdkbqZaA1YDj",
  "key37": "5mRmHo1rrmaaBqrPx2R972pGNZSRCwkpDx8JrMyBjDhSJna39sJ7SrbYYye4QnxiPnbt5wpQkkc1eDQx7So9JWzE",
  "key38": "5qxXKEdT1vzhzQfSQGGbw7ViQ3P1JVPAsNgpvrTs1vdjPz4mJyyZfRVJP5TTwdx7WGbhEq6LafKRQY7z5KvLwUwt",
  "key39": "5VXfyXihmQ9HcHaKADCCna6K54DMa2PSNnHJz2hZoK7FNgxcyjaSZMzsaX2AfS1FtEFL6YVaZet58w4DJhMtHzFv",
  "key40": "59AigypvDHJrRnSU5LGST8kbksJUn7BrCbJkJrG4gr92eJMEjLr2AYQKm4xhek2KC8zRDM443evLNMZkqc1pWu2P",
  "key41": "HUXEFpu4usFsGkujn3An3Eo2Hm6xp1yo2qTtUYQRtatiTkNufGDQiGtAmMUwJbqzz2RgjgSxqg4K1g1kLTvyGLV",
  "key42": "DRPz8qj6QiXXM7cmgfHPkYbG7bgKWha8kLxRVoHc8aF5fkar9aPrVxBUEgpnicMhQjAFkNs7g4jFnvK52KXtKML",
  "key43": "4EQ62iMC5NEVayHaNzkDZ7gCzhQF78u3r7VNRhVPJ58nZZjNaYsSws5eM1cA3MhiBLJ55hmLDscEZ1fCAXKauHjk",
  "key44": "4MQuXnpG1geGRsMwiLMhwKWhDSdD7RFHUntLU3F4S7cV3rx9Yqk8MjuH7Q3GDu6cLLeBxzia5qGVL5yfxLpcRQE4",
  "key45": "3DA5L2pj4pUu3BR6ArLuE6JADyr9k7bAnEDfUHdCnyuUvgFhVHRuNVso8viULDogxsFqCjoeZ4pgXqetgdVaSiQo",
  "key46": "4FWchhWpVnRKtMUYWPoDPepJRvcHYPDK9BxhTTS32rjQQaTDv26yMRqLmm7CoqoUF18VdHMm4bBTeZzx57MAPG1W",
  "key47": "chVNx8aMyjudyAHdcoVZNowrfz9eoPiAv8vCfQp4daTEchCZpAusGTk7iSDh8JatcNYHMDH2FwpbrqpJdMaahjF"
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
