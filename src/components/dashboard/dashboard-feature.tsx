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
    "BkwH7dvPFmeBmcoNoBjpEWxx66EWh2t8EPf9g3RpZYwcuUFBPonrTxg9TbP7L7gXAcxFLah8Z49zeCJhmRmKuNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uwX3BT76rzSCQHLyJuHbsDNAMcKjgf6mWn8mYQx6c8e2Eki2CReFrdjihe8Q7pDP5t3skjYosEPgyrVKU2S6NPh",
  "key1": "GmwdsxA5NhtQWgtB7bxS6Fu4NQtYFVBzRvoHgFgTeC56Cgj1vad9T8XsJ94xzgWgfKPLEWDfaH6xH2KUcU4iUXY",
  "key2": "3dETRoLPoV3qkb46RDkgPXGah7obqSJhUPN9QTpebqmq7apjRdUauP9G4QYP2Zsm2YgNzj5bwg3KWucSRSvExk8Q",
  "key3": "5E3CLZ8bXArsJq3cWDnq1koc1Hd7jUor2v5aCDeUNpVNUSLtbykENUXaZ6x8z6fhrqQ9mQyuFTzVvTKrmsVJoW4W",
  "key4": "3WD7SW4MZbVGEP8r16pk6upSvu3Gq8kd5m2gyuwWkYJT543v4mdaDdd31FhXHWqyAXwF3XxQgUeXiR8aUcW2zdD",
  "key5": "5DZvZhNyYf7fNiMHr2K9kmFXrKqB2oTiaL4oXu4xaxMiiYh9UgzZCGkwX2cFgrnSVruwwwU457DLutRUydcxvXhf",
  "key6": "5AczqpwyrtANumVKvHppoWbkZCbPAiUyqRLNveQ5n34uDxunRzH4wzLKdnWXW25NgioTYgCYfjW3wenwcSmLe3vR",
  "key7": "8uaDgLabTDPm1Q9ihWfDmqXPRzT5BtjxrZw9nSgavbWJfFx5XM6m5sMVuRcNLYs1mvqSsZXcToQa6CEoAEvLjkK",
  "key8": "4Vp8N9JnGb6Q7vHFCBYa1VQBeEuhmTQY2ejetRthah1ahfJbGDuNME5V66nZ2Hf8RNQfKXDLdEu44kezjW4AT5Sm",
  "key9": "xcBX3RsSCFeX3fEpdv39pWsefCN8jqrmt1Zae6hGdG5MwEdFBce84ZR9NyrJtEqSVsMRmZjcWYcGVh6YKyA89ws",
  "key10": "3qnfuXsSwGqFUkZ6gyg24TisCTX6f32wrao1sHevGEfaD2q4n1yKisz68HEL3ifCfEakA5BhmPs8AdArgBSVwTUw",
  "key11": "3twccPrzTGZn6Aoo4krryU2Ekcj8uWkVaifpcavyHuHJq8Jn83HwtVUXMRyjGEP8dKz7jkEKCDqiaL8iBiiUZaVF",
  "key12": "2rfgDevcfbdQ46uDVSVhT1acWPfZiddrfZES8w9yYeWZjDC98FsDuKr4z49e8HSJUEP6DpbfK4VjiH8am1cGrGUs",
  "key13": "624KHxwUXYMQPH3rTaAKmqNSAV92d4CSH3ksA2YsozZafQyXDn5fX9S6Q2RYSrPf8bBMTNjV7YGPVPywcKenTQjo",
  "key14": "5dy3Mt6bC3Af81SRJS5MVGHgtHKNJh8ugJL593YFeieJW9Hg9oXa2BiagBnJH1cggnNaZ7s6SD7eypdvUFsdz2ri",
  "key15": "5Gx3kix5CrChHTztYcjHNMLjjiuQeX3KwUagCV5Nifhj4wi28nY2PGZQA5C12Gu5529oiLqLHTvtonB7hxXnRfnP",
  "key16": "4pPXSHHS9aDDQUaxY3FdU5ehip5WuBN5GXZ1y7ne1UoVrhFwxhteLJwgMkh3y1dDJzx6pBk7syRfmu1azmGngiaW",
  "key17": "3kbkFk5PJjzxeWvcUFXNxdwJ7wto14VG6uGUg1XGGRB8CAmQc4NdHCztSQDAnAjev5ToizS2uJ1CCHcR5Cy13dFA",
  "key18": "5P7QMMoJq6wFqrQsmAhNrkZB2PQqZBZP7fhTXsfKE1vDymdPryaVxdVBNReGUCaFcAPkZxWJ6EHVKEQbYChiZvYJ",
  "key19": "5j8G5x9fjTsqB5RnLx8Fwqs8CbErZvs28ecGcUopGdXtCqVQ4X3AgrBeSmFRrjg8xKejcGShrpAoWyWM1JENj5uz",
  "key20": "4q8NLqBAoHFX7je5VkNymuZ7QtTB9MLpruSj8TAtEQbRq7VXotfCVgBQiSRKabGHETEhTQSTqW26gj7iYVavcooy",
  "key21": "RGdVfvEKwqQgHP2GVn62ws1fHkGd2pLU3nhLvxEWB7KFGTuyuy1e8vXgh5t3BS2QhWSoRNbLYhdoS58c6aXsVRe",
  "key22": "34Ri5D6YP2xjPPJj3GTsRbWES5QJ36BQSwXVa3DJMXmbxMHDfEUuiuyV8QghJGotCwTe659N4D2YTHNcr4R9hvov",
  "key23": "5G9RS43RkrxesdXq5dWCcoJ6nCYBoMBigR9AwV3aVJoPb6tugLjDUCJsfzNth2KzAkbLdHDLiGhCSdpap7mCfsPx",
  "key24": "5SWWJRJJq8ekzdj4Xyv2bn1G1YzduGtrAqVh6TfCNiMscWjTJUet2CFEUbCBF7y3nfUJYkTrxx3Uis6RZrfG1wzZ",
  "key25": "4Jbu9CzZzPucCuzYsUEqc8CRdJywuiqUgMXTViL1cF5sRnQFD7wZMbQ8eaQpz9Yah1mcfsgT5muetXSy7J5fmmmx",
  "key26": "2dAC7d46UkYRD4kvpqHHmaB6kWywhsfUWS4EA6bcaXMkWZ6amfVCFqfcTem1xYdrWdqurBEZSNEqsJtKFKercoii",
  "key27": "4huyxYCN4Quiubvf9Twnp28chhExD7BpWWUt4UGnv6AANi8DGKX9q6RUtRWDfMGUd81zLVDMELPDQZS1Qg5G7gck",
  "key28": "3feTouyBD9JZ5pMhQE4GvAq4SnYSDfqaGfvkXcQ7yFhMDsMe3Q8fPy2zQxbuj8vwccuAoSbMSLSnovYnUqyN88LY",
  "key29": "5nd4b8XupiCmiBq1Fx3Zf4xshGDJCp8C3ETbaNamkpZuetC9Yoi7TjbJSMkz4pHRMtaCb23ZByHNgxquxB5seZtg",
  "key30": "3EegesMnQ4dGbMMy4cV7jtPB4E1udhncAC237MvKFYtDQhjp84NDQHHwDvfMPnRbQeLAg78q9SjgjQWiru76LrpB",
  "key31": "tWckYw1MT7dSMFFQ6MXeDDBTMcSAgySyJQn13zHykyTt1hTADDpcj6CZjWvucjL1m4fvB9sYVaW5AvD8wWfmNfQ",
  "key32": "5LirEkgXujHwasCTwkyRQWAAYuwNyQvuj6c4KgwL4rZJDZhFEmdyYvuEQHdN6dCuq4MKkemZvAAhtNibfCrTQBHC",
  "key33": "5Lw9JPwmA3ZgfcWBKCwzZypCVUvSfYKJEjDjs9t5V8XphVjx3uUW1GuTZ1EicLTyscHnEb7T1zqSKtZsiU6CXPUg",
  "key34": "aggP1KhkYkHrj8DUrGMqdWb9uFCqUWn34c28N5wwgDxv2vDr4HCHUztHAyG33UxxNxhsYYkaP8kHb8RQt2mYrRt",
  "key35": "5NgweLsfdXq6aTVzJ5nbrnQ5Cf5ggFkK7hhgE7QWo2JhM22Jihgsk5A6BQnFm6zoZcrNieEAqzN1qCBnwCZ5NhLi",
  "key36": "65ZywAYdcnAZdpQsni2fNN6VV7fX3rPpNbiUqRUR74ZSUhFtREasUoZk9GnGfqb5N81Zeps9xtcFCbRhGxLZZSkG",
  "key37": "2d5b7jJcwxAq6gGjY2BE38QX9GEf32HqHqfHbzuTqDddtKLUGXUnhSMdHvg3vXVsR85T8uUVCSF6nAKPaN1KMxmz",
  "key38": "pVEY3QWnQyf8vRRjv7pmrxHQU2EqsXn1ijvHufrcXvr4P7KXb9Ts4zoCv3E9Y1JX4DD9spQTKSB1CGuxWAgaMpV",
  "key39": "zhRf2UYYKDEVunncatTCUeL7H6JKrsv2Tv2iHBXPuyHbw8tQLES7t5WqsiBCKVugK21mzJDfRqMKeMQeneNihWz",
  "key40": "4775EeNMRaD9AEAsYjviCnEtwtYbvBmGtu6p5aw52uhaPPRwEvr6pBy7SGpyQEdw7uj74KH9j3MqgU5VabsFEvPE"
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
