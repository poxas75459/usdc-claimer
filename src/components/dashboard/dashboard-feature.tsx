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
    "VUxez51SExgChJPCYwMUTaJcPWidgrVyT24MRKZXwo2a4yN8vxuob4URpudYJhF8saMUHhBA8RdGPL4LdU43mH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dfr1Qau3iD1UnDqV4HCCXr3tYVi8adfQZT17Y4jztdqKbNpz8aXZvqXTW6wwcCN1UVB3kkussnazjcfGELMGqJv",
  "key1": "kTLvbVw7FoQUPW4sxtFesaBexpHAyTYBchuiU8XPdKsW6T5q1uU2PGS9KdZTfnisA98g8RPoMDwed2LZ7AbZCyp",
  "key2": "5eb8sE6PNPxu3KhFbxyspHC9sa4xXQvFvTsT2mTd5wSBPZhHL5wQS4kV4kmvxt27rRny4hPQamxKgUupQeZpPUVf",
  "key3": "LfV14foJjJCA4tTRKTBmGvMdbG3ExdXZ72zC5TxHtaFUmPGhjx2cA7ZL3WQntLRtWSxXFdzgeZBttymmE7XrcMs",
  "key4": "2jqev2guYorcxkmYerHu4iVNXioHM1FFadpTDWGj8PcyGsx5FzWTMe68eVth2xvjg3ugQyL1BtqxTYc5XxtkLio6",
  "key5": "22ayig3LZvuVwCTvhNLoepB5pe4qc8zwQfp9eLoFiKBCS3pCaAqLaeepuBtLfjcwoQxdrksjVd9R832doVnmaXEH",
  "key6": "5kYVFwBXQpf3KUDNxVGrZWbjKU2dqdamydeiq9TYSqdi51Ar87ZxdyMfnxbjxBMUQXNu6LDy4yGAP3C3mucCYLPK",
  "key7": "3HPV11CEksVKm1PG943ALHMrLQYaAUU2ExE6xpjfGyCNaV93Vjz7P3u5i1Ri8qWqWMCVD2Q6xRAQdedWkgdim1kG",
  "key8": "4EtGdAFr5bdh2FJw56kM1qypTfhseXDyVFiRMp7HQu2YnRkgf5kj2x7QyYWdhaR5tNCiYCF9hiT5CXqkWLMQaprq",
  "key9": "3cNjZXv53toRTKWvz75V9zfbpSh8sH9nqPqaEtHRzAuGPM6SzMDNhSgMgnoyb3D6h4mP6yjeuXi6JfXsKUBZXbgy",
  "key10": "39nSLTyWqtj8oXo4y712YYkyyazdBcC58fQQWP8eb8WQP5yTErRZdB9QNBk29eEvi1UjN8WydMa3pxN7JivcfPnt",
  "key11": "8WH13B6B54bxdF1WvknPjLqZ95ot9yuepStFvEW8dTX1DwPMRW2xx5xPF5jjugYfYZ7isUMnaxwKvJ3qXLjwjPa",
  "key12": "teth6bG8i9nf6Rc4MDroiJcsWsXEJSehcXCtquE1ynxe6WNoixY7qcU61SPoxQ7A1y8fX5AFGSh7VqgwayrHLMk",
  "key13": "329ajfLYfXUpm8P46jo69qPf82aZAAbXgbigTR1cRGJP7aNv7CA3QgjyCqtcT9Mp4tAegAwSgQr4zZXH9jReKRUK",
  "key14": "3Xh2n7F72rdp1Dre4WCkZQMQ6e8EAkRVxY7rJ4tygTu8VRqPq47U3xc5zeRpx9pr3PpSywtxUadxjgAsF4yDkq3U",
  "key15": "59RbrRDDcySLHDcHbaAQmLUYP3rem87geHQWU7KYwmENHM4TXQhCnEeCdD2JdzatB6YQELgmhm6Ms4GJCDRu9Ltn",
  "key16": "5kgAdGbSgLwsVyvGBPDPGUFaARcmEJpatKGeKx2cYDME4LdgKbrtPKmAMV251tBTriqaMg77N35ht77YcYQL1g32",
  "key17": "4tuUBNHENFteuP176WizcKw8EYUF2VRRnPyj1GaZsehHfGPkpw4sDSijXsWyTXgH3A76NZ9MDSq3EaVvZUyWNhij",
  "key18": "4mdk1JsHAEepMCW1Z1rt1kN6wqWMVcqDtXbd3SmvXUT6phU7PgdZ8jXigUJYhM4xdxy6D3prf4UBJ52VQfCLVFsT",
  "key19": "2vSyDHHQHhMRcGx182EoQ2G1WuHHm1TrVa8wWSHoArUaZ9mZxX3Le4oTvirwbjkS9eHAeDao17vW5F52KQsucjwg",
  "key20": "2sUYQPv46DDdTsaXGTkK2Ahkowuh8ByzHH6Zfzki4FPZEX9LZ8FoBaxrDdKEEx2x169Qk5wbg14pYspaQC3aEuYn",
  "key21": "cGmavQyrs27eFDsDg54JUByBLNSwra6qSTLxrFJF1CEh5Fooz4KdBLfQS5bYGeoyPcR2xpKof7ZLMjgHGRjJYoC",
  "key22": "54AY4MAmFiSKaa8hwzY1QsoihkpkM5GV8pzcoyCthZsmn8CnBiySHdLxg4aVULdrUWaqieuJBaDEfpTkZPXiRWpV",
  "key23": "2maNtcfm3MvKv3qWPUVs64NyyDhbxF4Dzdm1Q6WPK2VScoefWXjk2GrH7wBNUU93CBbATxGAbAhtBCdhbKh5ZdZj",
  "key24": "5W9YQygmafxTPf1Nxgr9X4jGYiXu8qnjojNGHBoHn4w1Tc4jADHWFJmsd3DkoHZCbc3BKmSTe3Ek1yae3Pazv9FL",
  "key25": "2yH6LvDVp5yuCGQsxPbSXobF31zoZf4v596YM48krWfrcu4HHc9LuoL6hHELMKjqDpgg95xLVDqYjTdCUVQy6eqz",
  "key26": "5LsL9NeP66rC98Q4MPXnp76TsxYF23Ar57NzGhNy922wAjYg5h1JdzdSbGJkAy32uzipChg9DcAPYqYh8DhtBgKo",
  "key27": "59wQ4tx8gyzM3nkwZHRZxJtMW89U2MLgAM96xpqyhC5qdE34bj48AgbvnSVjaR3k1ibpRXDNZnCDP4peMWAaRMr5",
  "key28": "2gvfFuiuZqWqnrzifRmkDgmQkoyRVBZoHn58SuiZ2LgPkYV83HakdJZLVuN1FdHN6YuUD9NnYywo4RE2VNJd5d2C",
  "key29": "5jUa2LqZpHFfybnhnyL8bBDGmFib7ucb9ESMauXn2dXMu3xw3SbuFZQH3Vev2xeiQiDBoUjrHwzV7SrryvujRYY9",
  "key30": "XUoFuRS4ea9hZewmKJmMARsPFUyKK3mNH54qePhfigMenrkkqV3Gmv8NBQmDSfBJA5Pvij2VBU7hUBhhVvjesq6",
  "key31": "5XNFJVeXLshm9YvFRVfBCfLXgNhRXcMay4KXptUmQaehDDvb72QyJnrRBJiXtV4z82YS5Cc8zmio4xYHUPpLHMYw",
  "key32": "8eByUNoikyCXF8s8phxFRQoDzxKfecrKiy54QaJnnsTHejghUZZNCbd8tMiww4PySgwVsQgrPbCvNke3hvw4CYZ",
  "key33": "4igjpH5cDaFu4vMc8AHdW4zSx1YT7cWjHYiCftBC7pN6ypMFxmiLLJdG2SM7VaWzjCeem8ATMB3cT3J2MnngvyTs",
  "key34": "5kzYCvL3YgteNWRLxT5w8rQ1j1GNarE1UbUB2u8cdVibuqAqVjTMaRktNzvS2soDuTgnZRRsRR9vtd9bY5an5S6k",
  "key35": "4rzYtcTKfCKokhMYUh2okanb3d2XipY72EkpFcbwPvjnK2S4it5GmmWgH1nbwfmvgd2Kf3WrVa2usfMEacQLp14t",
  "key36": "4J9ab5ny8LPBW7XksPWAk6GfMz5VKgFvMCtVKA537LDJq9knHCZYEymASLQDh4MD8KRf4W6z75jN77jitmPmQTsc",
  "key37": "aSWutKJrsp774YsswvZcozG6EcncTm3EoD9xaAiDjje6GkBAir21Wb6BvTFm7G65MEP3cdMc34WLzTkgfrhyuBb",
  "key38": "4zNh3LJu4g2Va94GZb1SZ8LnyQbiswESWaANpWTtBvX6xYooC2fgEDVUHFr91kS9p3cAXZn3NmMhPXiYFh7q2FKo",
  "key39": "3yhWp1mJyb7Xfh7JvDAhKLmqFcw7hqNDFBYUmpCAtt7qy2nYtmnQZ9Hf9oRzwMw1okuLBGickx9YTZKpcBQAmVqs",
  "key40": "uzvtUJLiiy3yym4TcmzCJdHXXF52uFMJuDmhkRsPDXWaxcs9Cwc9NvJkhXQhTcxv7StLuFrtgTphCcXchCMYA1w",
  "key41": "3HEcYudECeeWGT6SzZEdh8PMR9V3Mpes79kaZPEwqkW4RNKWuub1P2Yh1Mkmy1q2qRaevpsZ7QnBuM2S7bK3sseN",
  "key42": "2Rms56C3EgUy1MpQ4zbyAdKd3U5emxukmu34LWidzzE5ebKU8oeUYxXBA35snUCEeefhP8ad9sVd96wz7fnvedPt",
  "key43": "2Nw9Dd8ZDwwWrgB3zg9PBGvqCzNqQuqFHXCYVcr5Y7k9CceDStwVyjYbqJJuPxxUZXanQgavzNBtLDdaNGuCDete"
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
