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
    "3Ez35H8nxnGLMEYsifiKRSQcz5T6KuxMTRmbb81cdtzPSSiw6NJmAJP3TjbmoZQqDvh49WK8zvnerZEKi1XctWe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tFDCa7aCnhwQQ1jHeExHw8H5gzJ7JtkyNfoFD6FHw3VQpZkZEFDwQSaYiWNyC2pkPd2cb8H7QvSMj5L4Lrx6ymi",
  "key1": "bebtkifF66PnaJdqboHjZiTiwcaJ9LpGHpHyaK2114u84JzJM8kd1LnTkSwagNjpWz3izUrcxdYHsRAzSotu6hB",
  "key2": "3rYDKFYhw49akS7gjHu7vBfrqj6mbR9vFuvBWJnaNKAz5Ktj5eDazrypcBPVkmiwW5sXSiRpjj247P8rwvNbmj21",
  "key3": "5N9qc7eQBpX8Z6yQnpuJGRU6pMxzhznzZ63o3iDpTenHAu97d4MsSWoLRXcSX7EafLyN25ixEy4kNTPKtovtL62B",
  "key4": "7JMJdKyyBDSngM6kCbXA1QrdkQpybTAUiSnf88ysC2bJMo2s9FTaFvRaeMwagGTBD3fcVfzUdQAvSA6SbG19kiK",
  "key5": "32KXeCSVSSRaVW1FGQZ2HtjnzVwa6N3iuF199UrcjvbSbfGdmwmatb2P7gjDPFDKYcbnZXgy2XRZHvRQdMQdzeJD",
  "key6": "5GWWsLbqfwXKXdxkmWXZuGqQ5qhpTrSSbpq1XJyfGohQXt1MMTaoiigAFzV8FHvWLDPELYoakgeiB54tr69wmN2Z",
  "key7": "37uxucpeYQhrzSq948WLvwQTLBeKEDjE9oNDYCw6eKyVBddBQHyj4BxDFPF2fATSoW8UtSBBcUTbG4eLrYjWEqKZ",
  "key8": "2nyKvQwZWYr6SN1tPYoDzw9dvDYNMTRCLNua6QuCopRwRqdFd2yDKFeW8hzTZ2PX7m42m5uPLGvMFUajzqXL79oe",
  "key9": "4BCCxaXhoWCgEe46mQnAjGMvHMdQxkFYMUB66drRWAFXqx1pJvBtA6NuREokkfw1Ts3vJHDeXpRvNU12kwrZLPNn",
  "key10": "57L7N3E4fziAutxoU2MKQN6fqzZZz6ieadwJJqeEsHAcPxFNUaD6rNheLidvkY3FJ3GnKab2TKinngGTsVY1CDKY",
  "key11": "EWppGjBqKTxanQ7rq1vEfxa56yighk9VP7hnQNn62WeSWcUM3yCJX9fodWuswS7qG8G3SPmbJuAcGWAWgJXBmoJ",
  "key12": "5NjF1SiNyJT3EuisiKF9DEaPCV9jPrv1UGt5gssiuX76Cx5aM1fuGgHHZZD2LNeVqgg2Ng5ZMDq9JZK17YgpTFfz",
  "key13": "UDcyBbujx3wV4Z91yKk1oEuNNGeZVAoz3MYMBgc15AHv2zFs6x9djF95iXtvyZGm6kbpHnBrNGtuGYVNGW2VeFg",
  "key14": "219VAk12oR74Eq6KMMXRoJ6pN1EztVJB8dPBtyczsydBejEdq1RM2ZmKLiPwJyXDwQTs8W2W2vZ5tmz6qRxCJwqu",
  "key15": "2daezaj4dJ2YzXN5yqBxFTo2AJNHyygUWAfTkTEkB3rfz4FnucUTUH2w53JBQoRKiWPM6JCumnjAcghtSHLdQ1MJ",
  "key16": "2SBMunnN5HPK9PR2fB2y5YG8cyPuZ9ZZzGT4tZDSkQCGm2kn9uENdU8S1hq4CP5gHhpTFQNijDHWaiBkYMpfy9o6",
  "key17": "4J2vZvYqTDXBZgpmBwJQyKqGoukVtVmkCqMXN7XJpYxMaqBiEnMR3s31qjK7hAUHFs9G1FniqZRM1cAwSkJBwajh",
  "key18": "26fmjdEkokvRMoaVS95QBu6V1qd5ns3u2eJZRBwwhux6NcAjD8qamj1WnrihrPXdnHsp4MpSytLHf3QoCrkH938G",
  "key19": "5FNrP9dkbU5AhU2o5Tdu27sPxsfEQMh2qnDu4itqeVYb9ytDsE5QuCcijiH58DVyVkUFUme9jSx25nM9SccQdQmG",
  "key20": "3PiSRHC1x4Ji8E2twSXPRmYd9fjP8fJkoAchJdCzMxt1mWmdmFwQNmwzC9cJUnavPcMevPHDYshjgaoUAp6s9vkN",
  "key21": "3WzC2dsGpUUDTuUbubnFJorCtcq9QAMfNmsQJpL5SYDgb1Zfp8RUe9xdb8Q2kJNRLZmpK8qDdJ7rhTCMn1UNeaM3",
  "key22": "2MZUzRad5vZwuMVUsBheu3evw921x1kzhhCTybjX9vUueLRHgfjhu8xftbXug3xZPaTezGektUd92oeRwcGeKsYo",
  "key23": "3TVc1zdjEEjWasxNLHNyH8jjrLZqN2Y8YAicS4MRZfr6PARsWMQs8btG7sLkWk5RXmDWZj239SWKUyyY22eLDPce",
  "key24": "4MC6AKwboKtPRM1U4xFEi61BaRKwzimT3ZyDLBjUbRQ7C3fGXFNARgZ8Krhtgi2xJoRkLSafr53jmxjcnWgfa7HT",
  "key25": "4nhhaq7jw6RAwE67M2v4fbTVCj9o9RiDQEN4rtV45VZYNRnU4FqCvXfqw9g18Avs4dAxJDc3L1SmimuXB8FBM51z",
  "key26": "35sA2BAV33UqoeNTTV5DJKTStPqtEdGkyAjDat58TM23jEezTanZY77Piurex1eerjjpHDkcVBrs4Dn6SGigiMPo",
  "key27": "393AD994EVgRDYnBzFm6iXUD7HyVtaVfvrJTcVifKZQTBSo9nP9bNQWPwRXS7mk1x66TcdwEs2eoXShUJaqHQGhD",
  "key28": "24HGtKtWrGBNQbtsh9bx6jkcmfFA1TeApFoRBXoph41tU7EtQaHzhpENLbhtDRMAXD8CttWrhRQqkM61mjhoeLuQ",
  "key29": "3U14qPP61MQF85oLKrEseWdSetj9smioDRwTeGLW8f2kyv2QTffkaBQeaGW1NWvE42UvpiGnvYKDK8PXcbDad1XL",
  "key30": "2xgJkbU7zgkzi8eehG7Q7Fd8V4MsrXoEbnfwdbgEr5KsXJfWAne6cYfeEPrXdbiJKhPHrw1wwn6T3Wor9K9eo9hN",
  "key31": "2YUiL7uY48LEKhzZHigDkosXPtCneSZj98kjpF4LStqrrJMFoy14uqQTCyEHjibhKxZtEWf5ER8FJ8qF7PBxPs3K",
  "key32": "g4McTf6VasyiDhgMP9jSJcgAFDeuzPTxxWRiLCQhTB1CpnxkV1wLWogSmZt8bVsqB5cFkALevEeNVMHvt9ra2j1",
  "key33": "5Yepyqoa2hFtHzEvWzc4piu5CTujuebwLFDDeWu4wYSfmjTuThKirAh4UG6CgAJoESJ9JDLF2FG8JDPApiCMoF4s",
  "key34": "3SRAkjZwpgxEtD1r9pXNgYY81Df2ys613ZTV8wsWViR6iza52BcUKaQhAqm45BTDYQHkRzNeqt32F3Bmuqq5y2E3",
  "key35": "5fc6YVZgrj2bqTnuizdi8N9vAtCJ39T1RxLmsnnzaSn1oD7QPJnAvCbwmJLyVGeMg6ojh7rNwRQ3mWHuybc7tHbz",
  "key36": "4vS2Z498pyYi8tttxuFEWYY3Q5PAwE8xE1LWSACY3SjLTUESWDPgP4HRiit76dGWVf4ha6AytU8Ehg3KckZ1kW7L",
  "key37": "V4eoiikHUC9Q8LENunr5d61Ud4Th979gPtQhBNo2VvCrfyzf7PzpV5vYWYibeZCuwEPLVVCGP7yiYFbRSvzCehk",
  "key38": "4PUtyUU5NVvAnNGFXusBKWUrV2Pize8KJ29QRQHauYoaj3UonmLNyucEqYwjhuJKa99wPH37EZU8yJ6a5fUarA6h",
  "key39": "8aMo9MRYvLATFxNujLb9YFidBhrWbiiwwzGYuBWNCsTzq1BBD9jKtCVQ5ubxfgtcRain6htj4A4Aq8Kf1m5Ckom",
  "key40": "UEgpYaYPvb1UsxPtJz7xsjau3yfMVTVdfPVC3E2FZBWxzF1iWoHpyW6Fj53nbjTbWASukM3ARY81sGWp8T6Y2CC",
  "key41": "2Xu6rkbBrEbT6wGqvwDAHpcvRBoaoNh4r6bkntgP5PiszEQAkuv1a1qbZpMTnyFtWoaTBJUP68RyHCBMf3Qtw43M",
  "key42": "3oG7A4N4HZLiFqX9FdAcwkMdm5e6BtjeVwxqM2YKqjzcvEFE8b9WiqrLKQotFGUxvCyFSQm1cGWqQCQNNkeGgTEw",
  "key43": "5szoTKiHB71Kuh7vYEJwZHmK2zphnA4SibsasWVbBiYKLB1zTP2stzPWepc7CoyC7RqGvsYN7ShGNYpqRSzruoGh",
  "key44": "58Wuoj8mmLv7C5EKwh6fjdmAhyoLyJLiXz4hPCnRQeRQaoNd8iDzagnybooXN3NNGWPxZw3SWnpB1pBgfxMRjshb"
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
