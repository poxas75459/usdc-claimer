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
    "29ybSTfoiuTi5zZV1c3oegmDoyJMzQnwMurMeK6zEzwDQyHN6kGwmNQx931wNa29DpmKQQGrjVyg2kkhZq5UZhWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uH2B6hLnnFbsWSsPtu4kqsL7e25wQnDkyXtxVYo58cKbNjm5NQQ7X7DvS5WmQaB86TMSGXEAz5TLTbk57heFNDo",
  "key1": "2MQT6PxWGhThXZzatG2hAkuWqCNKtri4TuDWybYdbGoXhiqa6tydaZHERUkiAH496sWAL55ewLnD1oihgUQw3DPB",
  "key2": "3GushrGNRjTyzZAysG28xp5LFLvMFCpR1SjUvUac39hKw9RuraK864AnDtpxgejVUy6CQ4MnaJ2otAbVayHYbWNc",
  "key3": "5PhYcAaZPKUkFzuBXdCLkWDZTTKfgwvgebGsovm9rN7ED1HPyhSB9BHPUc2R1F2nN9rec55S1soWuiDKTPS3w85z",
  "key4": "y1QKKGqoTiPWM515pxAumK9G5c2eZxRwHXDcuUiRv8LHx6CF8CnWz12cmHPJsv4t6w9h13kVr7qry221x4CJ9X8",
  "key5": "4fnhCa6BKZq9bZNBNGTi57oS7cec8E2DrN94huyvFMc7Fayv163ruWRFZHuTKdhoi91MmBntnSEBgzacruyxsCLn",
  "key6": "FQV98sVtzV37MRg29vGXhM6YiVRwwaeGi2eR4VLD3yLxxGZhC6iYhDHDYbbyBs4f2ohEP4cYuqYa2PB7MupXLTu",
  "key7": "3zR2CPdsgLQbVhAWwtQ7jfRdC9FsvW1HoTfGsSe36Hn2o34rUwFtotUbandfLw4yDJLBf1q26vU9BvLmvATk7dey",
  "key8": "2iby1cSHYPVRMGL1LPcpyJDCaZnRQVA4HaooovAN2UnLMkmKjribxU9oBbuSEP2T6X8FzBhSg7SDm83w8XxLnHSt",
  "key9": "4cMiFMkQ9MyNqrt9JcgxFPPht3oJ4p5f4J8e9gsP4kStXhZupVkyndpsYLqxLuHUxYY5faxKDShnF4ryrBmu4D8J",
  "key10": "2JUAkLFa8GkmcpvcP6vCQMCEsVSMu8zc8GkV4yKcqH3FTw9Kimbo2hGZB3F54UkEtRxnkkY3jrHMtZPiwwr1LCR1",
  "key11": "2vPye8bk4XJpnZP1vxxogaFTprBbp7piVJkKojAYENLuX2cy65kgtTGDkpFV3GooDywR18PyYjZP22kKMiCf7qBD",
  "key12": "2dfMkfKdSKxXyMnyu3kzsWBu2Nb59grVV9apwAJ3giz6natJVVxNre3BRbxELanYz7ENhagn49npnMq95smH9Z71",
  "key13": "5AagzUg4B8h74FJTJjcH4wJWRbnjYtEKhpm96pdk5eqfpqcLGXZB9HgPhzmqVSgpABupFxXpLnJEZBzpuzs7Nkf6",
  "key14": "2gPa439CWVVdng5PrtdwqeY2jHe951Ch1xjnZbzKoQLzeRQntdxezBxaWJM46TWhKFVJgebBmGRLmsyAdPB82mKg",
  "key15": "66ETQ34oNVuhqA91zDqrYm2A3vhGvj9wEnH7sdhxR7YpEGNSdrGYuKH3ZotaZiBzzh4ADUyamDjkhPhxGR19w7jY",
  "key16": "yEcFXYF7TBkzbgxMEjzmSuAWWvCsx55evLfscMyLA9BuauS3uHoNhW7jk8irUiQsrjJL3Aofgn3pEAXchZERBKB",
  "key17": "56oERaQhQJbjbqoiaEgTUy6v6cPjt3eXN4r2X94268dVJvPDuLHhCiiB6996WTfiZByFHo4dd9vSMxZSccAdhawR",
  "key18": "2ZQZUNZBdqtpVqLrAZF7GK9xuquY8NK9dKSAxZQ5PwwuSmopUDee6ssYh3EzYBvWoqr3sYc5VcrsGSifbhYwgnS1",
  "key19": "624SGR5gPo1uL4Kijb6YGpEHKPB1V5H1QK8TbyL3u3Aanmp2ji6F8S43YSubc9gFD1tEmzj2YCXcmzht51JxRT8E",
  "key20": "4i6BHRT6zWsYBdfRnx2fkrmWieQNkuqmpNSEeNPjZExKQCUVxCWYtQoeVgCh6z6b8y9DmPsxTHMTJenZb5DJiGZ1",
  "key21": "5WzjGifdAnARgPXqmfKxqTBDTNh47Fwf5m9SFSqfSgN9E91fMTuexpSDoNFdXjrHcrHScqJUebDR4yTBdRSau51i",
  "key22": "2fxepLghEqW9NehSx9mcUqTnjjQcc2VawR28rkEKArfiv3Tq7D18epzZvZoERYuPRjBXYPZeBNxqcLkZJq6QgNbS",
  "key23": "4KWe2gEYgij277PSVPFzMxYRJ81AZCFGPNFFWxgZKTomXnWiLjBBpJU4Hr4A9b6dkzbXrAQPSD8vP6eMgcHLWJWL",
  "key24": "5TQpWSjDXXa1pkZB6A7qhw5Y8AhGkRVXvJ1ajc5ycCCuyPiAnp1DyhWhoDNDqjcBrghCUx5XFZiaxkvexN8nVHT9",
  "key25": "2QSMFUNiGggyFwfeaKja8GjF7ZiEMED6HsGASuqqbjbvLSQ2MKmmSsTufmuLYJ2i7cgBT5eArxRTZL8BYbdXj86d",
  "key26": "55NLmu3n17s4n3upZo7nwFSDtNdfWzQ6UC12Y6VTHM4djQFRHsu1YxXF277rUgPCjAkmRDTrx9kxp9M15JAWYxkD",
  "key27": "2WchoBeMZ8T6HBD6riBLAFGWsXvP8SZVY52FgGewuyYQSFkvfqBuFM6HZrYQGPvMMqMFeeuHJNwR3Dgn35LhowJo",
  "key28": "5SPQKZU7nax4GmAB6XC6iXDjqDutkWJGG7YFJWThLkfcC2EmUhU6MXbbCo9WqiqWkdtVf6ahJoBaSzyRyjEksua3",
  "key29": "2xa1FUm2DYsNdzqrxQmYNhgeWnYcZgN9vjEvHWDVAz96qgcLiScfS55iGfhYLjnvs9kbY1Q46zivvK2Hd2xi1fYz",
  "key30": "4DXHtGJdq3VNna2WUiAF754QDfs6NFZkD52BJ2rHAfd6ia7S5ZJBBGJVaUnSkuWZKASZ2ttBbRcYtiJiCp5nHMMW",
  "key31": "4uDkwiiocW5h9P5xs5N6bQmeZxArn9J7fcqKzjSrpi9J5YDAC5y2byGpreZKbujR34EtV7kRU3qEYmp19k3yGWWb",
  "key32": "4BDUJMXBJFsYoG2gwH52VD4EoBjheSioistShufA95W2QQAxBesG8UZtL9G4SHfVAMqnasbHcNqG8RpeSpDteiWF",
  "key33": "4bpAaKe1aR47N8vKVwYJq4m2Bb3feuPiivCdipv1vdB9hTdhojStnBqrC2NRz63nzkME688zQdCPCvfGhHscHJgE",
  "key34": "6tGujGNMeDtfergubKGzmFkDL7CMidSyUrf718dcbsHGPX4x41mC1t3WbwKZTrS4TYhZQTCEfyNHMa11rtqcwLN",
  "key35": "3J1ucd6BgL2oR64rX6kS9ajvpryA3Ln7aTwEwXhcEdMhgNjsqSYohhZn1v9enEnQPuh1JzxETUjn6mHgBw1VM4cj",
  "key36": "4yMFt3WYhyXk64PrZGnd6LxdUdc8AxgaMP34qEJzv7bCiMAfLb9jZPcT7vdu8yoyqPaTm1TXRsyjDu23J4b6u7Fi",
  "key37": "2K2iMUk5khMHK9Sd78YTM5bKr7FCs3C9axh6r97QTnquPwstXRosoySL5A8HBLpA8QnXGR2hhCstFbZ9H72XALpz"
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
