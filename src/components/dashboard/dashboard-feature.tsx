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
    "3BrG7fnAGCZzbXZQckwMrCw8Nzt7dBeTHvJNgTG3ciXAeaVrVAzopxDN9Q3uLoNFdcRweff2dKYL6G8AjaooVYX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y6Sv41Q89wRYLvR7ziLRTaEdUs1XgWMv8Jh79VwNJK4oApJsnA9yrDb6p3Tbzf32kTwZLrpuUZpDRcNwCFN83Er",
  "key1": "breZWF65WssFaFxKptWiBqL3q2YCPdMM1cgdnaisca5GLsGWDnvjHNTTCKYpyijdkPGHK7onchfzLWh6vgbVUnF",
  "key2": "48VW3tHyd1qek42a48yDQHE7MQbsF1QE4neCfjWpjErPYDrvTEoYgcmeRHoJeHaFY7fGcfCiVSCai7mTpaA2rHAX",
  "key3": "3PEe6vQ6qgryjzdP6jiFVJGqNzkkzAMJPqkE3TzY436sbQtjNnbisGNM213bE64sPfmPEwHM69fzBhMkRx5wp2i2",
  "key4": "2BAFbmwbKpQRmKRS8d6iVtSt8h4vTC5v5PCyAHMCCdub7GDX8Jerf3zxZg2uA1q1R1C7CFBLbJVAht8chtYsLW5Q",
  "key5": "63B1Jeq8rgWMWHSYsP7ECXrH4VGPFZiR5J4926fUvV7eaoLu2uER4U2xu3epRCDN1F5LgXrmUfejPdRKtcAg1e6A",
  "key6": "3G9KQ7uqUUBtAogo42s728PAsApoX6kp2XSVQZD4aQ1zJFDsorektXvhXLnKpVePTS59HrSQw6D6B5hA73Dxdvg1",
  "key7": "4TkyTcZFTbavAqbLJQCByufrhCAbYfSotJcCTr136esr7JPzvhfkQwGzMJbjDaJDdkjxpTuuykwJS3wGZk969x6t",
  "key8": "2mB1vaegdi1iK6xL6ajT18KD1tbZJtGo6TSUzYpaGEs6nxQPnLFSTt2MZsscTfUrvWWwY3s2meSiekkQEPcCitd4",
  "key9": "3Vh3sS1ad1rUMNKnQGYsvs55cRKJRBZmFKajTynEUSh1fofNtDp4oqnVagkSeqBZJUkYsTzBYBb7k4joyKxjjd1Y",
  "key10": "4hDoEDgDMC21jJzq8SFd8WdQpEVKzY96cs2fTtBkCgA6ooNPRbEdJ9ZpMLwfYZmQdkTW9Qy5MMoy9PhjKVaKMSBx",
  "key11": "4N1Y4vKpDKRM8vXHvMuGBXBBFnLGmAs4KGdVmWL9mLy4Q2uRSk5oawiqZRSAtTfUgkKhZpSFPQ9xbpvKAhfGMkX9",
  "key12": "HSToXMgRf3LFcXXRK8Mzk965A7LmBXazoN4JBJLqKYygUsLeX4AzfANd8eZM7UPjBFyEaaxuUynE94aW7NRMYH6",
  "key13": "235h9wCdJaHAHTE1TJo9vZ3TYyG6Ew9ubHH6Sd2CaD3LN4R9DbeyNH5oXwfHNEceVEfqeVzc7AriP8BLQiQzTDyw",
  "key14": "9SC6N6QaXijtAy299oJRobpobKj265qZVc9kCSgCabst6YG8j8PM3c6uzUx2QeQpii44cXgP9qbK6oDmyZVzNjM",
  "key15": "5zFPS7PEA1oZy8qcmfjww26BmB8pKQq4baA1yZzbKsJJEtL9dAwdzn3MHYy9f9Rn8KuDgGyvV92h18WJG5r1c9yR",
  "key16": "YQRyyHrNGLCYudafZQRXPjg8wtxQcdXn9sajPGcW9BaSJxTVjA1rxb9XMa9oGJ53fCf6tAuucgUpshpc2nGKSXB",
  "key17": "5MjfiaH5gqfNdK6R1waW6XXzdHDHemJwPXyRbERZEuKFNkd6Tqu9ZxUd26Q3XoKbR8UeWM3ktZfsagP1t9FWfM3h",
  "key18": "2ehM76UWgRdvfGaNR2LzqyuTNUDotmiTMpxPXtZSekttU5bLuo6iTJG5NukzMUxWcwPvp6HYSsQmkL4Mv8F3BUj3",
  "key19": "GQ4i74B7ca9DvUakAPSp6MsbgrEJgEM2kV84pbpiH6YJGnMZGMhmUHEBaMmgoUHU2f9tB5KC2qgWnthX8Sq41pw",
  "key20": "2yKGZ68PzCWRsJC5ofXCUne8qPNfe4jMShF628ykWvSPTQQGJ5Rb7SheSzfRcwkheZj7rFQxPfhGipaAmDZzrv9E",
  "key21": "Rcp48Tcuk1rsTQsGwrZX7ASCGBzt9fEowJDLfYL3wBcPvJRcYffzSEpU7SfRrtd36GHhweksftdNvquCaawVYuB",
  "key22": "C21SkbUP96oknhXHWR26tAtkPzWttvdyY5se95vHaFue1ogALqdm6H9oNaSEKACJbjmdn4XPBFx63R8SehDv8P2",
  "key23": "jJniEbe8hA3AEb7oRtfYdEFzE2jkC4YBNGatvgBH88pkfvsbiksf4iUwbnSfuHw6FnvYqrwJLn93UatjGwded5G",
  "key24": "2Q88WuqiLCG9ch9kFQeBu7HZ9qh2j1BmYm4KorvGYSfHFw8Qwsc1aaThbmquQN3tgzBnBGCo2hrQruoB9ZDoqkhC",
  "key25": "5usp4Ee1w1gtxeQ6Dg1YTHL8RWTfKDSWFinpH15QSt2BrTc61wEmunFUXVCGyNdRxBUJ9hAAXKNNbAXsbzHjGCge",
  "key26": "2QE89rqjruVL8p3SZEM8i6NVTJcdxEXoEisrWYWTH82qdVGGiyaqR6fe61cjknXWndUtpXm5PRfFKCJv5ktbpjE7",
  "key27": "4DrUncyactH56YjU9zdh8FrU7R42ifH8xKxBgMCRkE4i39zwNzswW5GUTkewRdmdmP86eWtecBML2CwqaxGui9YH",
  "key28": "fZ15DdEM45JNcdwo6wTaYZPXbPuT9GpWU3SV863aZhybE5YUUpfhsf9SDJLpcP8H6E4r1etMJuuG8NGS4kwFfZ1",
  "key29": "6kWwxjVGo94mnbtz73pZNB4w4jp8n8CcCEA5owGehsvqZLgBp8Uo6PM4y789ap9mUzy4p22ZBCdBs8vzXefP7Ns",
  "key30": "3dnTKdRME8Mxe7GiKKT9vifTMiB2z9E7FpSC2vHY9uKvqHGv1R6jWDntUcCoz5MaRD7HHgpWnnWz2peZbdvLSRte",
  "key31": "4AjrWeTR9xRGDAVKX4GNwE74AWRChtvEq3Ugeh6UjdeV8VhPmgUc5Ck2ZRDLZiBnw9ffpj7mK8pRnNcKYHCNqu6B",
  "key32": "4iTRnFqotzEsvwhHKpsXNrcA5FoZeQMCUd6prg23RAUwVYfT6T9NmXXYV3TxPrge6uUX41kKyGevg86Du8dJ9hEJ",
  "key33": "3NCkSMa3hZiWBRwjqf5zg5KYz6E7Joixsuna6engzXJMbi3H4bpaXsuTG1NEFGDfgRw4D7QUmr5FM5DmM841wjRf",
  "key34": "63oP3G5bsZrwMvbRBMp2noifGkBUy82HAY1dt7G1Wb6zJykmsqamJsPfsetyJ3hDTLNznX4mkVZofHMWmqY8UNhJ",
  "key35": "2xr3gvvfSDAxNK9gvaB25jyiXR4iaLHrPc5aELzXx67taQxKsmSqMrUm7fPTF1exh8vjhHs5oDfrDQaHU6rUeuG1",
  "key36": "3ywDdLZCavPx1ZJtzHkvugNW5zAEsswaKvn3nFZnFKv7m4MCLKM71bQVUXFsnwaZpvnCcq6yRqxhUPsw5ooDSiXD",
  "key37": "2RQpV72oG9u2c6bJ9KhVt7S5qrctxFdu1yeHtzeq26Cv7HC9B43pdqgsvvnNGpcfPNqn2AKZZutGEL1Gmasqze3D",
  "key38": "4FgrNroA2HPTGV6Y1J6Ro68eLjtju7y8SHoif1dR1ncNtxFqHTbBuMzxHrBzA7p1jgorvVs2Ye6kiNHzJv7xQBhY",
  "key39": "2RfCRyhda8UXtyzXkwNL1cAfCDdUkunvLrbZuigXEZmQVEW1KrhnbktysdXty3Fn3DuqKTC6HkiM2F4YcPUHtLi4",
  "key40": "3JTpRTpnJ3cFS4KSgoFSJ9LCb1wd7cXULgcTFQxQ14M2LjcqRSh2nyWpwBLD6YAE3LYmwvvfLdjpBdiUNUyEcGsa",
  "key41": "UPTybzDgNe1UJWU7MT963CySKjsPAgssYe8fELvGuGfVXSuNjFYRCmRGA8SfoEXotp2YXsDAiJqypmYSc7B5eqP",
  "key42": "3iudJqdeKUczwA1qnKMNj4MRApovkRdxH7hdQE5yGL89kv6fZFC98ZQ4VVKLE7pLh6vmR1vf9fiWK1jDZcVwwueG",
  "key43": "2DLzpk4YpEtMMkgxYxhHnXotD7u7oX4tA4uckV2FrK7GoXuJA91gzuvbTByEW4gBeEr6MxsNtsnpWQRnMm1qgM6D"
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
