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
    "5ZajBkSG8uwLUuAgnxSVLZCtyWWLpBZd8mTunV8ZmbAcYufGfTUc8VFfGgUuBPzFLvRHwuUmrN9kSfoYUfRnqjbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7k6FSWugftcJW1cQZMd8qgGqQzHNSH6V9ZSTa5YKYTZnx46GaueAkCf2F3DbHScVPyPMYqX6UXXUhrrbDrkPoDj",
  "key1": "2AT4Mmh1Hd6Zq8Xf6QeHCNx8wAktUwXbymGJSGBam1kh4JzrsMJkuJReVxfpx5iRKokFT5xL8sT4VgE6b5741qp",
  "key2": "42jmWWeBUFFUUF97TeKYYatdxqz4mMWTbkD6fszaYgwwJEHivqxrpqSwvcHc3fn3FTFNazvM5LXiAAPQ2rBGvpZY",
  "key3": "4MpumWtpRudsEeC5nCEezijq3yLdBp7pVLCYLUZRUAdTVGMEKQLAPjoqSFs8qKZdB4pWepJqQhmf9NLEkX1E3eL3",
  "key4": "24d85UjUgsTjweC3cSTLAypAUEptdwUooA3EMe7RFixxC1s8mjvUDU1N121BhUWDmTKkdbxRGaEk6vv3XreYr2Yf",
  "key5": "vdarh5NMZctBZHjg4imQr32derMhSpiQMugz9btEW4T6NDuNhiBHV3pFwu9MmM5ukMDfASrYwoau4qCpkx9jSdB",
  "key6": "2b9rdvP3cUfQCVtRy9cg5ybw1tTEHGvp3YrxY9AB7HtiKtjoPConaJpSxvVHEFYqMyzLUUaM7KoTg124QFjBs3PG",
  "key7": "4GzkxdN2oWboKNNM9patgHMqbDVA3puGxTWcwkzHgssP1cuLkq4WwDt7Z2LS3YcwTVWB1yY2tFXtC29iWePfkCf6",
  "key8": "5TGarYdbesZgU4ALpPLsns9nmL4mYAFmafwzrPDnaAZyGGK7nJskpByTnb5nVePDenCJA6xXd8FrwgPUcASHHP7T",
  "key9": "27WxWwanPzFja4L59SnYFrHx8quwqX2rj4WnwBP6rH4iFA6o35xC7m4Lrf1ti8JG1epd4H14rNJbwNGkd2RQHbMR",
  "key10": "5LkSLoDhJVYwYGUVVsdYW51LQcGbZUY4Qyiothv7CjpzJeY3NJJoP2zLN5bCRG7dm4jp8oNvgPowYLY1fUChULzy",
  "key11": "61xbzTF7B2nyjr7G6tf9sRe1bjeVoyQkzR2BbTw9L3FB758xoSgR5drKqyDRQEuwf6BmaoBBTwMvcbUYuUyBrSfE",
  "key12": "4hB4qoh7ky1R93fYy5cdxXrPqsUP7HovxbBwv4PDf2aXWA5qs43G8HFheeYXMCoSq99VrKZ9Nj1UF8Qu7o8uaAdL",
  "key13": "4sh7JvWPnAgqUncEkesPn7KovdiuXAtPTZf1U9EKeT7kCGRDdsD899Kq5Y1X2wS1R18Hs2u8zFwxH2zDS6AaPtWH",
  "key14": "3db8Mu7kA8HpVrAMcxnv69dcxrN3jT3hnQa8na9j7RozTzoVHCp4gwW1iS2bxhGtsAxoGrgc4PTNxgxoC6omQHtm",
  "key15": "2NXHqpmmTnccD6AYkXvEBo7TTVoiK5PBVKUxc7nYn6DaGkDPeic3MVTUZYyShwwbQm9NeRcx8ZK4Le6bkDVGJ8pD",
  "key16": "5T8yDiUAmUarywycwfARyC8LDbK56AYgkrcc7W23DdSbVP8Enzv9hcFcGQT7ruy1so7tDTVJx78Bn5cunyf7BmCj",
  "key17": "bvPoPW6b2nVYDVBUmQ9RanHKqcXJu7Z4aTDyy6GG1BafZ3oZQM31RZgkri5tqPZg71PmR9LyfFDzpaSGYcNz2Eu",
  "key18": "2DRoehPhcK2ExSdf9goK2TML8oSyrRCKoEHizXQu4Tchmb5A4G7nwEW5kv6F3zXo6AymiNSYrS24sv9UNGt6cbnb",
  "key19": "4CnsbPUXsvZ15wUjYSvLAHqANXi6k5WPEPt8n9jjkZnQE5jiSxcTKrN1SFKvsyNM4SLtTWTnTBvz92kqhVjnZGYv",
  "key20": "4LxM2oLodQcPSARwWbkJ1kU2NVG5KM9gs9xTBiq1bFpXgn3rLiXqquU4u294G3iSQ9ECKy7MARfYMTTZLeqVPVD7",
  "key21": "5xGGhtFSyxfXzTe4biCC2J6hpzawNQ32DJaktuhGojGgJb4AjA7V3jzMod1bmCRPpoN9jUb571bN92FCvTmJ8iqf",
  "key22": "5ntf9JJBkRx5fQm2BBwwoihEzKaBd7WtYuECm2ezb9AJuCscuuSo3M5TYYwQUXTiU33FDBYUuUR8TrsSLGTE5LJk",
  "key23": "5vR4p6EFSUUjJmt7j8fzfwC3pnam5nrRUUnvBppuMtRYUUTVJV64acQSuUZrQxqvzk9o6sub1Kn1VjFsr2xtps26",
  "key24": "TJJnhWH5F4maXa2bEBuf4N8NYTAFeQofKaL4yt6xeWGtmjnDJTyrJzR3zpafLxG33pRJta25gBAJs95N2H6poHw",
  "key25": "NNQRDwurba6BWtvKGjyakUTcN7AWAXSZckdKwiWRiLK5itexvszLD6tDpYBnLhs4LduKxYLzqFx9gAkUHFg4SrL",
  "key26": "FiTAep3JPCZPaR7DWRkvKswjy6ATe9TxSYnN7R4wwi5NAGJ2JumMy9wjX4XkVGjUohirrTN2kNBkpfGVPYvjbso",
  "key27": "o2W5jWJDBJuuyxJ8J8yR6rZBYnLvvDfW8z2UGhqhC9AhEoUyC26bFeXxagC6MwpzV2AHdPExzbvWJRgmscktJHQ",
  "key28": "2p7eMEp8LUsHfHsAhBG2S7uNScFEMNUJCeVZJJMGcSz8Fy4rm1zjUJV291VP75rzqrnHPpKanj2RdymZuCfvnn1A",
  "key29": "5QHUUffu7HfbXgAMA5pmn2s4329y62maFjEN5edAyK5Xr6uDXNcL4ojotV2pWMNrsWJqgqSYuC1SyZSQZNXPp5Ro",
  "key30": "5SBYzcXF3Qxtz236A5zMK6uFT2hnVCKbQLGuxzGP4Zp1LK6BLRjACYzaeMnRTfo2FE9kTV1aCNXv5NnFc6X32Nwc",
  "key31": "2UXFx4TrSDBAuRftYHfGRG9DCML7o4yvFk4kfgjwXAdmgTEb5SC6sExkYXYZwCmtMMDTRxmCAsQzEvv89JK4QSug",
  "key32": "UkdK4QHqL8ck8xffEq1sQRFnZEPeakn72fSPkX8PHGj7ngrpn58iWr1tJojTY4onWfug5VTfdHK6HFdKJfCfbBd",
  "key33": "2mguEr1zK7edgpSrxiCthyQ3HthH2ftFzCzwastbNsQCJaLxssEHULXLiohUGT43hu9vTW8tEUEcibiEnmr5Fpmq",
  "key34": "b6tQ9zwZHkJ29cMCYGDRuBQFQu7L9AkBHWWKSXKeajSkAj6QjqeUrtaorh69rWJSbHmuxFvv4HozxJszmh9Lfc3",
  "key35": "2JDVCygf5jkeu7yX93PeDDYxZBYCVZn11HtZZnXKy7JKnCuooXGkp9vTz2HcjWk5ruxAHBCKt6Y6Y78ST6qmQ7cC",
  "key36": "51DeD3oFbAKBEG6QqzkULqWprEwrmBoSbwpA9qFykLbw4A3nxFsdkYLzGfoiS1J4YxP1oaghrjK79YC2TpU5aeSQ",
  "key37": "5SX9AYZCWVivzRTe8sHdtPpPqngfJ66gpzRnMsGz7Vwyg9zbLSVrdGDx8qN1qmyNyyxbg5ZmZKGfhAPpfyv3AX1v",
  "key38": "4rMQFKz9HFZd4P8sGHne4zmm5hZ8Xrrh1dSLwLGsF2vcycMdQigVDUdBuTo8x3i9sq7FXgodnzEuy4oH81yVU2KM",
  "key39": "3dH4pAZDKL6yx7UfvKDthAHBQbJEnkwBwj1kB6mzzmAoCBnRjJ1TgXupikyCMTArTguJcd38JYVknaca8dpeCm4Z",
  "key40": "2qbg2Uq94Bknv9DHJQFhEpVXczEmDDxnDD1BmqDUMSCFUN49rauzX8T7EuXSQFLoBhZkbYaup6SKZErUJjyCQ3EN",
  "key41": "2iAtwKZXgaqgUm8RgNsME4wCqnQTQuZToVruYF3FMxS27MYqSvVNXmTQpY9EVDSENJRpVfh9ES3yeeexx7JYHgv5",
  "key42": "5rZ1RAGczs3oYoag1H3DhZ2WwupcQDKMpLLu6LjiPvf66ND1tCSNFSUnEkmBDWaB6cdQeTnxLGXz23vAjbY3Xnzf",
  "key43": "3LHi8HAXLkAzT7y9SSULvUMJgeL4nHKMq3tko7n537G9KvvUmih1FagtJe793NrdsT54bUzdY8kMYztjoSD45QoG",
  "key44": "3buDKepPVhuTiPqDz7fveUpzdPK72c3JYmcNfhn7SW565QXBj4P3x4o433xxP4kY4zkdvuPBgEopzQLUmMXJHLr7",
  "key45": "55fggu86R3gNXWfPCx3DhUry5kWPVyBq5DkMdwiBkjnc5P7c43LGMtx3CynYYbQ7R2bmPmAVsGkeoR5v8mozJNae",
  "key46": "5MQMLwVMqLEqUSvVSQSRHopP9nzscDGTtcM47aSP2QCwRJ4QKWY3kvEERB9uUn88nHNpBVXy3szfL1aM9pbMJuhV",
  "key47": "4YWEPCySmFKGSu7fxnC8MJQzBTx8GnGjML45pWoLasLWj65hCRfTZxKcEVh8YX2viXCvM8qc7C4md1pnwLSMqjBD"
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
