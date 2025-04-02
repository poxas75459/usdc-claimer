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
    "3fqwSMH3fcpEDEzMh7cYyMkNBBxr8YvN4xXHE1ejK2S1Z1GK9ixq2b6iFRgD2rXpjT4DiyFs8g4fLDBn8s8g5Yqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgsDhYsfwvaBartTA7NfAaxB4xsQ3s544whhcjVxuqQyg4jp4D8PdugybvWaAuUsgZuWd4knJYcFwU7xbAHd6yG",
  "key1": "oJRFxnGZmPsijMobydxinnyTb7ijaWLthfAQHQhYbJ3FdFf9rc85cBV8hqBTpTvhzPJVnsNPZeAjVZnXtgrCBTt",
  "key2": "3hecSPj5szTdRVKrNPH4aLiu7fjssSeHYtuncGjgFyynCjLd3k6uV4a33i6UDAr6KXuP34Y6Nouyx5Z3a71ouV6H",
  "key3": "2nEP4nVUXStSHyDKcex7a2QcrsQirHgVKeffrG2UCYWpEP5AyFn2Up8rkgd6uyxS5NSfTKYNpqMvRmFHoQz6esze",
  "key4": "jt8XqCaaUp1THws8ki3oQhWBqkPxRZMCPrwEUfRZTLd3h7QUJLReGw3yNXdJfXG6FGNGA34RSq36J96whHRHPVL",
  "key5": "5CxmuD5F71XAqPNjyzscV1J7AFf6tpTz2RU4GQh3RDvUfzCDrxgCsHWNZUi7yd83tidazxmfVQd7NBKHVVkpBSue",
  "key6": "4AMbzZP2drtqbufFbJ2qizN9EMLH1VyTkUAbQh9tNyuJt2SZrjwxyMc9GsRib3jUrKWLVkKMC8oZhogS4KH2Si6n",
  "key7": "3uoKVfWdszEuPScGAJuXQGURHsXLWrbhNWQkhvCb3jsxAsohXGstS3Ay7VicTJTGNJUUan9C4C8SBtmnHqvEsSzi",
  "key8": "3kaKLMRPDNoAKzGdPP98euFxs5pWeBFKjYikgXme8BgyxXy4n27uWMrfpzzm7ioUkt6Cmb2fQn8XyYTRWqt6bQnM",
  "key9": "RPgVz4TRdGwYgyFThPagVKV41K1rezHrx8xkGU523q6aEmFnvnChC1o9L1Y6Gy16ZSy2xrrpFUvkca4K82B2i7F",
  "key10": "2G5Tvc7ff1LoyL9R1zo6NnoD9trUfJfygscwQjqxEMGtnWm6NsG95snK7UwcSKgvCw72HqhVy3vagCbhMFcnWhn8",
  "key11": "vV4mAeD4mAvpbbrTuxAP6mX2fCrmFAyN2uq6HuqCZxh5CvQn2EAG3JW1b2NoDKHJDySdP6Xwrm5WxhyN3W8RzGz",
  "key12": "4hkbN9CNJ6wNuVTfah67C3yQbEec19qY2J5rZoiFx6LP8613BWQ87dGXfg3gCmfiRiJEd3EXt1gBWK1JaeU8q3Mt",
  "key13": "2WVkDALnYyo6AU7qy1xZrmmSxqgFNmdvK4uP2hG4muZ98SxE5Y8EWnFWJZncNFr24uDSRng6Yk9dQS2KbdsWNixu",
  "key14": "3b3ZtQxFF96wmRERJbmpw6neFNJy6MNiuvewVb73NqhaePxBYwGyFqAWzsMZctXbP2dHkEXoPDP3gYuvcwhPfzq3",
  "key15": "4hUVT25uGdb1xQf6T6CG6CjiDAPRNVXNwoTqDjKef3GquPkYz9pLjfDgHNTos84AwxaRrUYRWX1ViPSiKEt5FzYp",
  "key16": "4nfC8cXRosvdpUQYH2zbs7f3CvRt8fCNvJtuDdPfs7ZZGYEFayCjbyv4P8kdyDMjgCtQ68FZ2XskFCooo8gCNi5E",
  "key17": "3PDfnN3ymBwVqycWpPM9DughVFf9GEL7k1rhhfGURsx5oMdhQnf177itAnjTBJ4b1EjpoF1S465NmYrEeGNkFzkQ",
  "key18": "3H9BByQSQWwanBX4hqhfKBhNAfkSE9rdPhDtb5nP2VDf7kwUacf3Vhn3F7e28smyBoGzj5RN4msEcVymzqs7EMDX",
  "key19": "2aGVqPZ2kCKwH969wF4maZmWaQMP5PFjyTHx1muTWkZSyjwyLXVuHSwaUByk53gszyzhpZQ2bydPfJ3UDHwYxWEg",
  "key20": "2v2vQUfhqWx7ux29jqvbFTAw8HLSrDnbrVoNVaHKSVTpKW7mMn2yYDrBfz4CCd4kAjchGeVVRwhRoxtX6DuYhHuw",
  "key21": "2AHh6o3PUwe9M6mdbaFNf5iMk2BhsquSJh2tWEnHWDDDbH9X1xaL4PDRJVv4LME5s8UFmgFfCEvSapmj5tniafBC",
  "key22": "33AR7j5mJEPYKeN3pfVACZfbaMVyGEVUJ4otqSi4jc95PdZrXdhz4R1RbC3KYmPoGEi1Xfgk8WWcE1fmqw2xZ24b",
  "key23": "MFaKrFAUu1n2GEz6PuT9BXwwBBKnHb9QqXWS8XHsXBM1nCZ46JrhoPZPG7egbMt17DD8R7fEPkdk7JbhDVSiDWn",
  "key24": "4MhESS5c8uAwezCvuDyhuQXkJn8udNfMj4vxn4ZJD7FdtWtz1see9QDonQjgqMPCpgtMVh7gxDC2hmaqtKmq9R9w",
  "key25": "2drkDyvrAUkekrdgradiHCVSVb63qnvBuxpeJLyAifBbCH1UBP43HUiBfdQTLp6VWJQv7hEYvxKP1NhsFTDiheNg",
  "key26": "49b9HBftXqJgRRJ736qEMmFUxVNt1g4uHq7P7wHBeyT1hvMC1Uj6YVpFGqQ1BL4AcpvryBGntS131CbVSYggvpAE",
  "key27": "61P8Tbtqsjikn5o4uUf8UXCYezyqGG6XrU6H4CYc1fs3TQMHUY4NzdQ1EmKUi33mWwih1pkbtV1e6MRKMSNZmGTi",
  "key28": "DvRw16sHLYxmUdjJb4SCjJWSjD1qMp4F8PQXFh5PzQae5QRjWxVEaTQmUssTfyL2jLnaBGkKa5bhNzTEHx77Edk",
  "key29": "5M4S5GZJyhD5aZqJtVRKsGZJP6sayeQ9fJ3oH8PyR8XLacAduG4bkDp9qbTQaBH1aakgxu44v84buFzyHHT9q2ZA",
  "key30": "2YqcEWgrQ5Y5FGMc81sxEoYsto9JtTcfCR98BBAuzNKMCmLBvYPdtgQCyJ2LtkdM3LoHPhoQFdSG5FJ9K2h5DfY2",
  "key31": "4Q9f8A8uDjWWK9W3646xLBL9rso8Bg9MRqbpvHpmQwAHkQhLQ5n6dsdr3baZAnNizvBCfPAd633YdAema4ttAXSX",
  "key32": "3UoP9sdyukWDU22kH2mfVfGosy26b1U9TXT6XwQZuQLUcdjrjVpLKaQTL15iCCyx5YA8LjWBxqeFW4kBh9Sdqkb9",
  "key33": "2mMZxMCt5hyWFaB7q81xVCaqjK8AAz41FzURaugpjfQ8ms2VoiuYWaDm3nk3PXjxZ88nfkBqPtJq8zyWzz15yhjT",
  "key34": "rsqQWsfuPcGEaRHpD5ZbK4m9Vk3PgWMff83kj3rwBn4yz9A3HpwXYA6E6JJNr1zPymqC2Ki6pUKrt7dCmQYsz7W",
  "key35": "35wngf4wYX3bnXQ37rxXYLFecK1bXBYGBu5nc4DeZVyiZrdBTmbmbxcjbf7rcP6XvVv3BbZURTpgtDJAbvQ31wxu",
  "key36": "2WEfoQQmxD2aCNzKNngbteerUeDvqbt3Rz9DFjEjMgDexcFnAj76dRZkJmXvscWcTkdiKRBpfCjZ7b2hozLgP2e8",
  "key37": "67q7HCrctaavF3NdGGr2yHCHv718xSYsaHe4ViqQeWXoqcmeGpU2J6tAaXxUoKokjwFXUUNF9Gi73aJ3wZDbePXK",
  "key38": "SyRcy5D5iptRaUfUTLGVhBaVs3u6iNWTaiQ1H1hugCCap6XVihQUxuFSMWNgr2HJZdFXn6SmSEAHYYfAPAdesSJ",
  "key39": "2B1khkXUXF4yZMNzZVVxso464tguUada26CjQosvgkkhHpzMsf98ptf3TQ27HZ6e4drn7YP5VymQLawS8eA3Si8f",
  "key40": "3pvmx8NXB7nKfMinxNk6zKEgkxWtHroJUKVPHAXDugVXJoFj7TcoQmGeupPNFDZSpkQ2SqaocmtcpD1gMNgbCDKT",
  "key41": "59DgbXVmGNdamj3TdKoUWSSx9ibpSFYodTWHoWR8w7BfpWJXrRPYFvdeGD6PPQGLKY8uTcnbKHWrhWRoakRDKrfB",
  "key42": "44oS2oPjxf3fbJ7YYsZDhK7Asqxo4Hks1zB1c3Uy9E3FLzXSWhxo2E2pAm6KpTLQz6TXjD7ProjfMmcMiVyyEC9c",
  "key43": "2a5sUH5qRqMoMqKKhVzxRMVGUj8ymSD4YU3fSssDJ6PL3D4RyjJVmgFCkvHD4JdPUZ6uN1Kk8VtfgtreBmpDAhHB"
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
