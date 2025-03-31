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
    "3iu5s3AAe74JxUgrVggrtEsA7q4N1T99oZH6hq8XcGVD112jxXWQgiT7HUYeAkR5p4c7mu5FLBmEipvKCmVGvFZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6254MmCJkUEkp5Cdcc3rX82B4n9VUjgwcD71ocJ6FbaMnpqnKcz2vVQEUL8nDWNy1AE2vKTZbuhvSySuUC9P6aaP",
  "key1": "5qDuj1iJFbQLy1md1Pq3PhkMtWsY68exeDgdzL7mRrF4o3Fdk555DH58tFzyRQ6qDGFGiYFYYDi1WM8MT6T5NpTU",
  "key2": "2aoeDPnnKq7Cjtn8YM3Y2MCDCrccDBsoMnRzMPcGydkZDrKJhv74U95jP5ZLNPZzkwUHqczXcFmu6SYzj3TVeCAs",
  "key3": "3ufctWrSsbKcJ8MNMfRy8sBo3ztAQJmia3Fq7SFtbQ5R9XekSADDKJ31g2oiXL8JoFHs6MpaKBUMbSRKZCrUg3M2",
  "key4": "zWh9h2x4sxgVALYsWGyfjS6Zbd7sBktdKVRg3ALoerV91MC6afPSHfMT1N1Lu8bLjXWgAF37tw8L3Wks8N8JePF",
  "key5": "58ButC5CPZfvrYCV5WvbPX7F96TzM3ki4KBDvBDPEotcJkygvuiP7NBAGj8dU633LK9bkE3AH2Tf4GEeJBR1WbtK",
  "key6": "4XBvctzhv6fysnMGe9ubo35umnbBWVkPdaT9dWEZWSoSi1DAVM7HC1RKg3v3vtHZLaBcZZg5ePPny21PD9GMZzYZ",
  "key7": "4PQQRzYTu5PDUM4cLMkxkYr41EVZ6YG6cV3iPbswKpmhCu2dkgyGqEeUYnDJUqnMP4yiU612qBN7pyUjUan7rAaQ",
  "key8": "4Kt7QFRh8dXh1Jq9gpxcaD4QeZGU3hwbKqwuY8ZH2vcgw7oQ444fGn4VgTKjicGvxwxKcG3ndV9mjEtv2FN7oNHk",
  "key9": "35ZUaoMQye5QhHf9YzEr2bycXa2bKvv4AK6Q24ktUtfgVsB8PsW4tXDpETPVWyFqzLrofWrhtLZfh3PgfGzKkxa6",
  "key10": "49CydbEUu1t8ArFMRSTHubMZ3hGPZ4QtEtCXUEeG2h3aQboQQrQs9SL8pu3jZCGppsRHacoHLEZ3VN4kk8wpiskw",
  "key11": "4iPBiCzGQboRPNtsqQTge81TW8SgjxVt5EqhLxRwzKmGXeTpQ6xiuZvUBSRFHF8A4ZUQAwjFQPUh6AP5Wsm6C61d",
  "key12": "2W7U5sLC9EZMpsDphmfsLmNKhCqJExbVGeDLHJhXuaZjaUonV5oCQmFyjXpkMTTPSjUNdFQER5gA1SpEXteK4ZQp",
  "key13": "5aNHuZ6GaaAFKGBjuSMSvqyfAcSuJDSiGDTWBxsqeNEg8Q5gHBGwC19NvCKcHcocgqd8NYqiJ4weTvAFdu8i3CEW",
  "key14": "48vmo3eWkho4Tbx7WguDB5iPhFN7Ap4KqVw4rUwWiF3mjwnxztsyZWDM6igPJDyFuS6RUvv9HZ49dab3CvGAYpfh",
  "key15": "5u3JzSYfBKptsdYgD3Y8RDfQykFZse5J6hsRYFWAk1XB3cCXyENeUEdkxjUXWiLTb212HoBaWPHoGjXJfbYCtPf3",
  "key16": "3ox3ZXa871ADNw1MgbW9M9zagkaigAwG6ednvChFn3V4TyFCwU2boQ8Hy6sFREFwZBcJdGnf2fHMM567reiUZ75m",
  "key17": "2jCvW3pmEtQq2R9mFG8do3pAk9avo7jfPUbPvxLcqy78RRgSTqrjr6Dd4L4u3v4UW4FubG998qfK81HkNR4Mydtm",
  "key18": "4ZmeheRbBRet9eGT3vCRmDm9v65291LPX1otnhaeg4jhARgT38WeqUi2mB58eC1ZGGUDgZDvzPRwhZW3BhLYa8HW",
  "key19": "3MPzp4PUUEbJRinzXSJyDLRa3hXibCJSDBdodHUmovYF7ASZmxqgmFwK9Zo6BF2P3PX4cemov31S3AArLzzS4pgt",
  "key20": "5RMskZRCte2AobkPb9HmrKoAhFQeNKqyCReMQ1JoxmXLsrcqCZNFtitnuRNUu4qbHGYA5NxmVTf1emLwKSWRqKwa",
  "key21": "3Z5s6pwKtnAPP7hQtGRAmtyW6tBF1NCQbh1GkCrVvTwjazpVyAvuDuo6bmVGQxZHE5b2vW59YmqfzdJyXfXux4bi",
  "key22": "4EiZA3uvXsACyupwuN2JEsP1vLbd9Jdn4v9MV4rTD9kJ9DVWf6bnxXe2NHMQiKEY4D5FcF9vpW61qst6osF3mr7z",
  "key23": "2AqgnuXsrqxwdzcHk4eQ9YVZZgbLz3po6UcxWSfBpy2U6xLxWE5fbZMcqK4NG4SWXoK77Jk34YkyeWoUZZoJA6EW",
  "key24": "5urYZxRy4SUWPXREw5uqtP6uDr92wEcmndYbjyL4qM5GAtqrVib9K2JfSiANL2685wiaCxVUFhk3SeF15wUYpXDT",
  "key25": "2hNHnvmaSn7LKRKodkpfQWdM5YUuRV9zACSHNqJEYjEC4Jwwj8d4AwFt6wsycAUg2WaCKc1B3cPMeSGXNGEsQsHe",
  "key26": "PcFvDa2nwwf97kzZmPWF21wGvUA7KXWXLDiUHyMAF83mihmHagbaySzrwUDsR6ywBdUHVaXY1RyjwfmefcfXTP8",
  "key27": "5vyyymq2FXHh7c7sQLduYa2teETakyeM6jjBt3tZZMfSnsPC52NYsD9wb3GQ3NNhy88fReJruEJ7DektQ7S2T6z3",
  "key28": "7Ji3dfZJeTAoDRv8CCyrkLbxgBhG2MPfuFxeDAojc6weACGdEHYmQtqtTZHR6q6RUYHirGxzFXcTqKmjmaFNdqB",
  "key29": "5j8ZukbqXXCWj4Tx8SnmgCk8sWnD46JhxXYbVd936XnT9KMBtVsuu2ZkZRRpoRyjZB5sDc86hF8nbryF9MwMgsjD",
  "key30": "5G7yrYK6QCwe5xyPpACSUeeavtuzqQ7THEQKNZ3zJ4cfKT1mzdzfyPRGyM6dcqozv8LSz62BzF3XNesnW17zFj8F",
  "key31": "nLhgz4n9zKVgHFMH69J2ABdzVmpbT1e7NT4UdBDx6Z9WrmcJoNWkKtgUC3F2BzSKBM6529CqomSMHtVnKxh8wST",
  "key32": "3D5bQTFavM7wBWQRCNqnUv4TnMk1Lc2UH16A6dFYDqafyAQwp91WC7GvGoo1edF2HNBQTmvoNQSvBxJHSHSAS4Ca",
  "key33": "2JDGZjWRDDeua7gPsBLHw9ud8ASb8Uq8is3f6yYMZH1areq7yzhYEhwUCd3aUzzgXtNvUnjaDKGza69Me9t5yssP",
  "key34": "22RKA6nMoiswoXR5aJMmBeUt4cvoproZWamvBa59w1ZY4isXVhBXcKFwQWJe5vn39yWPJBFt8NbWoTYbzYiUybAb",
  "key35": "5hbUA5pJksXqMACuiEm7a9hSgaCUcxXFJwsxiDc9vt9zNZwW9ocqsgUy6Uv2Naqhfw85cxxZmpdLBY8AebFPe5c7",
  "key36": "4EdAXv1yo9NrYjrK8mmo3tiuirPVojSJZkgJPJcy8tsTRcHXnydQwUcpa1U8UaeAZ5EJ1BW8zH8MC8SDn2CPPXTp",
  "key37": "5nTFaQevf6dXCn2jnUBAuqKENGqa5MEUuxYCGfzmCTtTCr1jAzC6Pe5Uk6He9Njw8LTWDUBJbq4va9N3sGDzPGy1",
  "key38": "yaDjXLEZMiRZTGmoY49yQGawwztcpoupgrXp6B6VeutipwFvSNYP5ShjeYuLHc36EVYSAUo1CMGjDiYQQaMxBBx",
  "key39": "DFPtTySP8rSpLSVAiwScudEX7Cie5cu1kL72c4CJkCXVqqXq4iE8pZrys7yGAcXoHMTR1DdqDzDW5WXXeqoyWLG",
  "key40": "DFLcjGVk4G9svN266uqAY65XS4UPm2fdMWkySG9Qs9PrzEHFAcT4oeJCmKJq36jkp44rRQx6z2MNcgdJvToRuo1",
  "key41": "X2Uq6QsCdvCuYtKS6JrDSxrEJTxPCn6ds7GvmDqxNzMkwH6a6wHw2oXNBuvzVqtJviTHjCMTLuRGPpZHGhgEqxY",
  "key42": "4HTUgzFXPbvAuv3gHZ9oTwcNESe7Zb7qZhmrV1ka54YFPtFA1LTj1CP3PLN2RJ2R5Eza9fhCP71Y5axc2ajDRDEj",
  "key43": "3ftAHyqYXFtAsPf8i8UwDaVhUGGuv24aEFTu4YZYYbMg6ZuP76F2Y73qpqStSP9F2Q1YmYcSNrosc5rGCxhbMcsW",
  "key44": "2ebdRfC23ufm5AM2WnnRFiXtPHPTvF4wg1xapPC67dz1gA7uHdvpde5qjYqY9gU2AN9jdjopgGtT2DshEMrBCZR5",
  "key45": "3pgbP3n9VswZRKXHwBS3cYtVsagKVLh7HS2H89bME2BKxxZuqxUDQq5jfa6tLbxa5Ukd5dy98k8XKWiMDqrUHmWN"
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
