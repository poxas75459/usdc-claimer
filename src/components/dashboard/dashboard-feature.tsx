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
    "5F9oFKbutMoakyv6LSbJv2ZWwBxYVhVHtJcDbSec7CSDcv1e7H1Zob3kqjHdYvDmEnDsfbVuSV7yE2cWfMxAZEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBJk3mjFsL6exit3Ds5Q9H31CvENNBtnZt2aRhs2J1K3hiN8oCnKyrvCSovT3NDhvL7j3j8ou2GGpKRJoXzLbpA",
  "key1": "y5Ustfpbz4wtDA88Ev7yg2BnsuK6A3U4FgLszjSfPruFNJSDigrTyTyHKST63hqa5d9s4rgxM6rD33BgUMU7VPg",
  "key2": "36ofTFQeFN4oSmp7u1tLuhMt6QSRMvxaTCqaKrCWJMYCXPprNw1YWbr7vdxMz6JPAxrTfqWwkaWuQFPTxnmeufP1",
  "key3": "3mSW4K2ERQ4u3quRBG3bMFUdHekVsf7xGwADdD54off7dRswU65CaHaCVt8naXbhhirdQtsjZTznTCXJMirJeqik",
  "key4": "2wWuXC9D74QZAwZjW9PTjXSSN2EFeTeCaCT16xapgeDLWQucPftFDj9aehUbafSEgTesJctqdUWZzrmpHm4pGgu5",
  "key5": "5hkAZt37DEvmmQWW8C9c4eNtchE9cvsvekrRhxUft8Wmn63k2XHPFt9htkVPeWGuxNyLRATt3PJ1ndvyJDZkCpYX",
  "key6": "47DeSrSdn5roMMxv1D3SaNAyWYPPFHnHH9ZTh5tD8Vc3vfJaqusx8PwMQ2NKQKhV36ZByB9uY5rvPUW2vbjdgqj",
  "key7": "5MJvahSFN6GxYbGSwkeCi7FiqWaqT3RuaEG8LwvtiZyxA5Fep1cPBsHZeiy9jMc4yeEVRKg1zm8X7hegTV9zyZNh",
  "key8": "5LKZqUeMTE2XtBSRQiHQPeFmQ8X1zaqQuk17L8kLVRjqZ2YNBkyNRKR8nfnLgUhqnKu2gpBrdNSRx1fbDkYyMyw8",
  "key9": "gVXb7QGrkxFBy4ErWwsN2gmYVJcJL7wH5m892ZwdhZA3iFXDEMS2tmTKQkZfbmRYxKZo9DxMs8txncRrhdTXhc1",
  "key10": "5VcgJL6DBAQrWrriVVH5UyR83UvS8uH618Pkte7X1oDhdcKGi2pYuod49wdeKwD5JRCyuZysFxW7yUHMTFAynKBh",
  "key11": "28mxdGLy5umH8VJJjLe8HoR3Yruq7hDadcM6AD1FvGUFGoah5BKVRvVwjt3cn3SFFDkkXCx7fuQXMzAnAKgQvKPE",
  "key12": "4yQcdJYKui5UFhvo39ajvGWJn7mGFqLSvxZgaCzesZfijdE2qVYufoR6Amb4dyvd9EAYiZthqSDCokEWzvoF9uC6",
  "key13": "gq5VM8r34UTbnsnNNUS2brgGqG4wuJ2H6gEr1LBpmanMHh4mQkeLmQYmMbvrrHXcfpcXe8jmQPcwfptge18cvea",
  "key14": "3nxYUP7SoxkCr9uXo7Ad7fN4S4Mz6u75pDaVYbS2M2VDJ2dmwvvS3Vav6P555iTzGe4tseUCJQwhEKeKyh1EyhC5",
  "key15": "3T8TnKGsx3E8GaNYPr8ysDvGKADLsndUay4X1TbmqgAeW7nSJnjAf9yQAmtEi1D5MNobxnQWhB9NYvetB7FTdcbU",
  "key16": "XCew6Pkh9m4G18MG2MgscwfwUUzXv4tqdmqE4dLdkoYrZXxVDA2K13RUZEg5pSpcrU431U7zbsWRxyfNz45ADYM",
  "key17": "549TeWB3oe2UjUe9cUS1NkWvGPVcDaa5Eswbhesc81z64K4MStAPmTsNqryr9voy2UajiUxTazYEp7PWZZ3bwwjS",
  "key18": "359Y5TxenvF82X2ni4bDKBYqw2GDSFvRtbaPcHWC2TSsmJr1WcGk96fu9w8tEJQ2qsgzb6rfTLsoBZEBdjLs9sp7",
  "key19": "oLf4jyf7c5iccW2LWLuG5vVatetemZAhH74hJ628WeYanpjqkjSdgadMYWh8LGJHSZcPxvoqXc6SPUvp4pNaomH",
  "key20": "5aaivk2mVwoz1GVFe1rFbqzGtB5kiAETNm5aCgaKJdky8ogamyqLsj2sxcp1MG3833zquYWyvX6p9M1FfbYBgK5E",
  "key21": "2v8Gy1ud1EMH6ZkrkG1FQUUajZeZebiSK2Zg7sj2fBDbgEUEGQVRmRkiNveyLZEq3mEdrgWfyQW76c7tHtmB3VCN",
  "key22": "4mTsEv2kVifgNSdfnxHjH3apPdM9Vv9EdWMYX3fsbSjLaw9fGTYfSssoACJ8YVakoDYXSptcBLA1bLEAM8RDPyRc",
  "key23": "2xVzfVoreAWahAN1PSUgY5rXaMMtzqeEESdaiAnbd8wX5juuoHwifPWrG8g2opS1D51QGPRTZKqdq9tkFgYksFmB",
  "key24": "51DJeMX74HkWUdN9PHq2hQxgzMAMZWPzbctWY2rJyy1dsqgcHT7SSRozhJiYyiXQXKMjyZvcKPjGQ7y1RBapM2t9",
  "key25": "3g97fouoDrvr81rHRrzFRhsu9wFxTTw9RkTbkPkesMViZQrfBkjUFDWDZuTTPjcLzb9ATXEoQjZMYo6sWrevKGwL",
  "key26": "57aVEqt8ZrSEnn9DFte65Y8RL3asXc4TCGF1o3cnzvb9y6iThRNE4RD5DdMpVZtAKCrG3yaaAdcHRb8ArTtK5JcF",
  "key27": "5tfvLsYqx42ykBJ1AWekGqW5Gm2n1ZiHdsaBN5ZEUpoQ7Sj9mxeWJxfCRGdWz9MbBtZUGhVHUYz8CbajfhR4n3tD",
  "key28": "2hSoMPgMchWToYCo3pYgAmccA4FcppnNpVZkT3qZDq9JwbeQCuZfyTZXmsbhHMCRJS4snvikMC3GUVqZBycWjott",
  "key29": "3QVQcPUZid3Gd3Mqm6cNTuwia2EYDNJfYHad1aLpzPiNaTQLPMaJwBJTWFzPj8rvoTjEVH7CVWAgfAvLoytZA3Te",
  "key30": "2a6xwXwMXNajBaDkYN4XG6FcL3V1YTjjuNFwzjDTCpxVdbZL5zCEWRq6ZGFaZGwf1Zr5nUXuUHCn2ECXq6k5kbTA",
  "key31": "3MgahCFybspHXqbmEXXqkj9SF562vWxzsKCtdZBq3PRr8nURAwmQVmj3gikY2vLk9UnDLZXft8nHzpZjaxPj1mP8",
  "key32": "57i71FKLRLsGCfVQtQqN6Ki937qMTNQbJVsPiRKJa7Up2aLDszkA5vtfDMHksfqDgw6PANm8bDf6cV6c8jdDamcf",
  "key33": "GSpqvhbMqokYchNfA8FATJ1UEk5ZQJbQBHJ3JeWNvZbgNq3He1Pi5fWb3z8hDEDgW1QGAAzk5qcm8SHnb1wwY7f",
  "key34": "4jKzYv5Cf86RYem1TQmnog1WQNNY36C1UPU5X7FGQkz5BR7C4QPpQt2jaYJDLHn6LFZs4ydRpHc6CNNHVTBTuizn",
  "key35": "5vfF8C7K99mS1xvcV4SnaNJ4g9qAScG8RNMYjX4CzyJryopQnCR5bP9kBNPc1YVQfMHrceGbFJwKh3q8pSyK6kDa",
  "key36": "4yuaA5XgZstNTYc4idTeg1TPHGKHtk1S6mk9D31wNcFkcg7dtEFGyQXNXDfnewiRxQPyCe9iGWiisiNQYLyizU8x",
  "key37": "36fwUWj9nSLF2eVsz9nzZQpqLNEV9zZua4u9g1RwhP4Lwjdt5Ywv2uv4YeyzN5NPT2Jv2mkzW8Hv4GMSVFxjAP7U",
  "key38": "5bNrTTU4gbyht9gugRadooQwKcDwi4HAp74qDHcTToDBdL5n7HhRaJDrL9ryUU6Dphh4Q9m9DcEC9j2whW1GdnYY",
  "key39": "5jT86NyjJKqeHEDseno5kNKTYo81hpUzny6PKjRnN4UWkR9DUEHWpXF94gvutrEyRpDifk38FgM635wjkcFWgAkg",
  "key40": "5e52qbB1wVUZNrxDe6LrfnCk1bZhGpF4yRQL9PUddT2TMSwUztrLT8j91W9DU5UnfiS86eu4cSFM7yVCCnk7prmE",
  "key41": "b5HW72knfeYMmESCy6DKgCs2S5VSMEq3QmNPMVyhsk9qhiceAGs39gUFJftgtEsZBmbN8L1HcAqiNbY8FDGfwZL",
  "key42": "34k7PxVR6mXWC2aQ5rkcdUqmpkjMWGMJJbATcyEYgafuLr7CV3t2J8L7uXnN89rsYyVJLyHM9oXooRmE9nZ1KXCs",
  "key43": "24zsZjQLwRrNPgzLWRn4scwAuwdg88emKPSTQn8rL6eq4oeeaumiEB3a6beSuXinGGGYQ5kXsfr3eyDygazDmbg4",
  "key44": "2iFXfyNmjrDDG5r1MckTwNCAmLzmeeGwzDXLGEqm5dTgpTM5fugYBNGT5NJVQqHCa6iEd6hpgpZPRGcRQAVPd9L2",
  "key45": "5jqfUZQ2kycQQbtPQ7Jtjmmve3LBMZA4ZvsnNyEdGVS8NfwhZSopuSAuxfRPXrS77LGYKfnmq93BoUZh2cHBu1K9"
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
