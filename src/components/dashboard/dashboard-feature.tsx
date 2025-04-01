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
    "3NpqBTifX3pij69mSBG8dezoracxdbeYfRCxZEERcppY2z7c7U4q49PMb7GdL9eMUJPpMnChWwwqdBimrekasFAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhdbEF8tveLThBw4vAEQsm9Cv448zsPm2Vu4T9pW2yN4v9CMz2QxhsNBGyhDZSYFPdCjUVpGMoFtunHNVkm4Xp2",
  "key1": "2tLTDtKGYkm6hSZn53arsLxNUUZ25UDrpD44AcyegLmuPh7onz3xdtzdaKYXYPdAuUCbGzVCfTSmrCcZJtCqM333",
  "key2": "43LH57MWp8EZ7vjhPkNAHz5rhYbmdc4peT8SV1PCKzYGy7iU8dKvHJXmDav5EahPwtquJsrtxyC1LCixHHfSFbys",
  "key3": "3tbkLvhFJNKomEUKSEzf98EJiPnDxYc3XdZodVmeKbtdDHkgzHZULhP2rwD6e1tMMC55gNmok6NAPGnnBwCjqCST",
  "key4": "2g312xdpDMLgXBfKziePk2vbsb42sfSBpLTAV4DPrNSt5GKAqiyCZ1PxUpVU9idbJUeo44cLxDRdtaSuacQwR1wQ",
  "key5": "qUz2xqY8ymJsKZVus6ga3RaNmg5ANJrKEhnSTtrdxyKpCZT6jioWecbP7wUJkFAJs6oDdUNJdoydbXVHfVwAgP5",
  "key6": "2uDa1BeQzUCGwzRXqMpQAXJqrdthgfGaaiHBmsQGreQfKazCoEqGtAkkB9Tw52vkPuFjkWrnJEWqsbek2x5r8Zmo",
  "key7": "3SRM8ioMbuDiUbdXqCmrwJLqneQq1CCMqXvXSdbQEcB6tsJ9KMXVkThr2jitwZEh9qTtVW2pMq9Uvpz44nKaoKx6",
  "key8": "4JtAYjkfW6135XZhZBeW4ycbYra8CNBzGNMbHcmpT1NRX161qLo1hCjmnUb9JowUPPtuhueVEoF6zA2fht2gDJ54",
  "key9": "MVwBmjQBCdfxNWnqa3ViykWPDAeSCi2LF5WnM3Gp9hBZdsoZYagEUWoLR8nK4rAV2d3xcFeghUQgvKVMLyUW8sY",
  "key10": "4iDb42CgFQr4PDhck9H2VxM1YnLQG6Hcw5v5v7XCxtZDh7fxzo9TCbz77h3rQdYWMX7QmiLkncfzUsFvgzhjqzhk",
  "key11": "44W3Y2USJed63xVFvxrQPBm8qifR7miQnFKoXpzugUmM1AFVJctX2ZsC3N1iDv22v7N37Z9h6nEp2zrZBLWkwefR",
  "key12": "2JwosLqoMrMev9LqPppWeKjBNpiYZ3LhG5uGxx56ir7RXBodYKUvWeqhLPrHpwzzwgnAsKZRbaKVHgqRwLvxroLC",
  "key13": "45DB3XQvtoBhQx2Mv9R2QBi9ebSAY5PWuCheyCDBf7X2FRztAexAtbi9cdHVDuGVjjqCea6aZondtKNJJcTDv5Kw",
  "key14": "5XaGjqn17uRpLEc7ps3cXiRhc7YKUj3fMyh55VgPQTxA1jhnd5KZup1J3xaczngyTeijJhWjGRrcAU2X63b1BJ36",
  "key15": "51aiM7ck1jS1C7JcU539EQBsmEq1vF4xWxvy2uwCUStwmQMg4BEiHd5xL9a3zYSwpL4jCAtgvMDvCYHra4a3zMxV",
  "key16": "36bmWimUiWPVZnfnA7qcWisaSevUA6RTK3mra6hwMUCP3sLpZqWZfmv4fZ4t3H4zdKAaSS69bVmVW2o4DHJvRc6h",
  "key17": "5a33TNNpopYXJY7JoUbbFRoAyh7f67HQQsu144Q9hUv3brpYtBVjUnYDdxAJvEV38bKWEHBx4o9WaBdEXQSMjH3t",
  "key18": "5DsbWReNCnGfCbUhJUPW99Q8x1JpC14ekawkHXUSL5WHK2UbUzMHVMmughU9DJiJfVaQUWKTqeARiEYLLmbpFne8",
  "key19": "2sivvUPLTGhjebgM7U62DKdcpHzDhvMEAv89BXXzni6PsYAM1ePEf8hb6PdUu3aHc8PvYsBwkdWPXtYjC2xum3M9",
  "key20": "4iMtd1Xqgierehmji9wUWz4gGYk9Do1GD3GyH6CuLCoieD1d3iSe2d7KkvVxotvt4qaGni22zprDyjB1F191dCPL",
  "key21": "5j716xNDs7vVeY2keDQKuywk7EfXXg1Eb7WVWGH3GvBhUUQ7qLxTZWY3Xdb7CT7dFawf8ZgSBdwh9HxS5Wu1zkuE",
  "key22": "3osKGUeJX1cZwLKNVdEKiXc7QdYdfp4BU88sJBDf6XBp7TGxMBUhN8Tkyybg8xLNJ2xSJKn84xgZH7ipdvkZv1UF",
  "key23": "bKSoycbTSofhiHCYiJWnZXgcNgBvAwp6bRpBSJReqjyjUroSNAyu8955sNheMbh2X4RHWcsQXgQ5kiviXQDRPC3",
  "key24": "32J3up4diBqEeesxxmTMzpTcJ7auFoFzc9hyKQyive1vMLm7J3Gsp7P7hVKzVrQzoN4CwudLsDkG18N8kCwNno8R",
  "key25": "59F1nUoobe73hNw8sdUd8Kx9bz2KcbsiHgNJCYXXaJTN4rF3tzD9A9KtszgZ85UjqJiYWmRo3zG4KoK32Ydihb9y",
  "key26": "3f99HjUxk6dVcac2FzvBiqk9zpNzBuHbNscjQoDbF1yZghPzZUzZWhghgABqDXgf8yhRiVnLGkrby8DMc6xLwNjr",
  "key27": "3GPj6PFmxeGXNG7hu4vKhiBeJFSo5dt33vaiQ9GoT4jR3SJxnQHRDVQtcxtxL6zBrf768mqPVuRZ3xw6DpFzsVa2",
  "key28": "33ntNLnqr7kmMwb9HUb8z9DPamFavcAzfqcmyc1uq33XVkuWhbts4TiCdvcyv5u3gbGjmDw4P5Hie1eVYHPMDbVN",
  "key29": "4VjrjYAKnxFhmwMmvo6yMYbfizXiR3PKb1saZW9g8y65cRkJy9wYMWvKZCqXY4CZLaeUtroYbNBShgNK3UmqNffz",
  "key30": "4mU1RSR2r9fjpAAGWLoMfXN42XcHEgwdYVjejciwrs6zW7FXDz2Vug5KD6uEmwZcW9xR7JipvsCFufRP8yzT2waV",
  "key31": "3LLZQA1f6ME7admzRdmdPRaaMruJ6dq7AGoAMFPyTDYzbFD864Fa11egeSv6BYKiNQzCGsBbydWWLXaThs3ihFmo",
  "key32": "2aAunqPwQwxc2Nykyj1Jtdj4wL2ZERGnm94aeoyiqB2k1KPoFj1ijHfrNL8hkpzB89MjeADxQZidtmCu7FiJukVW",
  "key33": "3VPYwFnCSRePoGmHibKtDHJeKg8mDzVq4pVhT5BW1UKTm864vPPufRirbKU245jtscL7KsyySh7x8rBnKCQ3J65h",
  "key34": "4xUUqQq2PdyjwCVckWQQJZnkzF82YCrFJWT2b52y9kKCgag4FnNZuJzr89XVZ56oiMzKidqEB4hRfThkMFt62PZZ",
  "key35": "3Pp8arAcyZTJgNntE5Q6yCQ8v9xbYxrKuH3knoZuBXac67i2JawSRxjn6nEhb9mzX3ZbaacspoNqY2zRLeD6PM2c",
  "key36": "6hg4z2WWvoeRPDUaWpG22TrREgZAuzxCXw4hca2vvQmvqAssW1utscYsPZbD77fMdoDhzNgNGyDXwk4axtQvY5f",
  "key37": "5ArNg16s2GngVTZUsj5W2kjhJP23PZsDCSGWjmoNrqHVmuJgmcPQaStjY7vFeVWmJUiELbkMcRrpqm2KArQzzRr9",
  "key38": "2NgMzgq5zHrESrE81BUkRyPPuHLzRGZWw1ed1pv6Bdj3X2GkaaVeMR25hoHiVhFAaREKvJQ5upW5VxMK7mKM5Way",
  "key39": "64qJvtw7p7kGi5BkEJAyKibCFGCLfbiiXZxf96ENv6iBMXehin8eKK5LXvsTyHqRwEAbyE8MeU4AWbkztATj1ka7",
  "key40": "52jcfASq3dgFJv55GZLPBWh7ak1wbVwHFBk3epWDB9APkPTbEtCrJ1HsQAKxKyCaA6ugQiMk9yVEXdiWoPHSkvg8",
  "key41": "29oxQu2xpLw5SdUt4QSBCboyXnXRBxt9mCQgmPLpgHhegcwZHnThhYFbEq8SAZXuZEpkiBXLsysoy8A4TMTXWpVT"
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
