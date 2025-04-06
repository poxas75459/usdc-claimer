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
    "2D3pe54wNGg6zMuJRNxvaQXe7PNKLk6GJxcwb6jXLNo71rcHvty1S8SocsA42SBXw6rwEsZioCvkKbfzUUCKbpdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nri3SEaWB8aa3Dxzq4BJc3hJYjK13ECxvrTr7i23CgRoL8YCRbLYbXi3xHz1tUtW6nkxWtUoRLHX5UQjc3e5dzi",
  "key1": "fHPxQRbmvAyZmmGGXY56z522vPNa61jMsndrd5MASmhZVY9vUyVe9asTFrkgX4BGtBabd8om34TcrtDTR2RptbX",
  "key2": "3dKoMe8TvrCsbGcyLJtSdbCK9s8CMN2oAw6Y7XPHiLVAY5rAyq3kiHDGi2Q1Q8deFFSAbjpAPUNHiedJ35s1EvRu",
  "key3": "4J9JMKt52wT3AsuorhVVN9bogSVHBU99FCgfLGsrurPWSjfMPMEatUJQxRKGVnyeTD12vYkTFKudhGFaq8vwWtL8",
  "key4": "3f7s3MBmBJbHPZ7UZG4U2dJWKwUEbaRnfibztFxne3gWXJkTSX8rmzZDXEirhKwSsX5DdKB8NuBHdirJuThiUS3d",
  "key5": "2sgdKcrBw5U2YmekPqpxWtV6R9VBT4mvza3FbpwpvwKDTgaU3otFHS724QyM48xk7X32WjZKyZaDmy8oXDSwgWGN",
  "key6": "413NehJNYm2p2SEHhTCSLB82rVG3UYF9SCTAUoC3kdyXvR3xiYDftS1X5quuy8cjqeroZ3LzXaacHf3ShL8zDpQv",
  "key7": "61oA5u6BLSCjJN7ucQTtybbg9hFDVEZdWLpK41UW6PUnXcFSsNKLBj1baBRFLxy3CMDUQNQXbrdrwMiXAwxZFgvT",
  "key8": "2U65KHTysoLJFdjt7tm5VeLTEbu4RXfDDWnADhay7LHZX1vJ6kBBzzEr2CAzhZfvTJm34Mycvsc6siQjYyNd4UmH",
  "key9": "4VegWzschHrbW8p3gB7cqAyBuJisaan62EQLP6ZSTmNCWNsfoHW6MgXGBugPfhNgsr6kYtQpasQVKtm7EHoVR392",
  "key10": "48QGi6u6LLzyrPG2x6WxTHGTwZSq7f8qEfqqTXnMKNf5FPhd4Xb1KVXAYRxKxSWwxiFWHQzrQ6dzEbQwskTFRxFn",
  "key11": "1HqonxT7vG39wf1cCAKjXPZjj6T1En2mwioAkCY2WuTx2hBHYmkFJkrHNfoujQrUhmkAvEfN9R5YW68txDvyxAc",
  "key12": "3xmFkzShrB82ecEtZutRjra5azyBE5gpYaeSdyRJqL1Ep2TmQpg8DbaxEPGA8Sp8UiEUpsKVTgxd7fswPco8L2SA",
  "key13": "Msptfzu6SHHKVFvTLhf8CA9ujrXePMdhJvA5r7XoMN38jGpqpQ5gkQHbgRGCEhgzD4s4QMnMo63UimUQJkzmyqD",
  "key14": "4awnwHjkxNsTig9NUyU6kbxuJejCAgXMB3CbGQqsYwpPBgW4X41inVsV1exLsBiGP2xaZ2Yy2hfQ5kF1Ni444he4",
  "key15": "4JwtXDGiompmta9adWe6fpEZrMZX177R2HLV9DPXt3AKZmfaNSJz8kvDwXRhzPqc1YdTNDWCSpzzrHYheMoPBsn2",
  "key16": "3KiJFSZhvWy5UEfoYjXhAs11XWeT1hzpbefpwSB4n7ddeJmn4i7snpirZPVj9T7th9hnqZB9jFK488u4634C2ThN",
  "key17": "4AVoCy5DQcNNAnSG9PVLP2HJCpWNVy2aP8aAjKeT8ajXkykkhezWw8NBW5WH6tkTEEMs4WgKQLkRi5DewcnyMGbF",
  "key18": "4VdcmpEZCzDYn3HV5UX1zJr3adxXayH5edUN3FisMKdfXnK9UjWHaX8odmf9FrPDW1qMPTnkb78gfJStjzeXfjq2",
  "key19": "3Ytivban1LpZQjPcho7nmgzcME8KbAEdt3An4TLzELCB8kHNEiikT5ZJwauV1cJBRVkw1d38FEC7G4H7vds8rEp4",
  "key20": "5YAjL8zRs4ZVF9TN3difSumdEj7UH7qG6thKZGHWhNiQz4Vq3xeeVPdp1LCa1VdJZ2yxK1bU27nTzxBNgG2b34q7",
  "key21": "2tsVhrJhESbvHyxYaZWvEpdzRLTW6Pq3sqJVPVrcp94KZHhB4W2aduRr2Nts73kGE1zFPa656t92Vs1y1imwPDR4",
  "key22": "4GqJZbH8BD1gc8zBLVoVsYSiFpXujNtJBmwH7TbyYfJESMJiPHdAYontHbeBEyjpTG5M8nC9XaY4J44SDqbVJT7t",
  "key23": "3k147WTyqEB28wNiDAQPnq45GeTtYxHZwpH65dxTgnUXwJvL3zgMKMoHnsLLW5symHJszM6LhLg86LAcnphqaKmt",
  "key24": "2NHYrAEpPKKuDahoUhAQqbPFWMjRHuv9hxZGUWeBeLQgH6KHgMHhkQQoPJKL2LskCeETof8fpdZoPa78BR9Kdy2A",
  "key25": "4kfjCXcAtP7jkRyMQ2eVkLxDuWRxCSnebcZq857bDj1GZ5bLpLZobGfhQ57nqfAzYrF4fEPX7b8reTPw8Ky7Ky4q",
  "key26": "2HXpoduZeYfPMHwXRQ7dkzGTP9ipZiNKNzhrhUcL8M4W44mW2FNAvjkxDTHp7RNPgQhLVj23gJk5KXH36px1H3Sr",
  "key27": "4p35zothCw795etwUVguoQiYHEDK7F76mxQy4x4k5W5Z88dnibndb6dkm7LGHVsLF97gqzkGPdJU6JaLFa41HAM9",
  "key28": "EgAC9ovqufdXnR2qfjbiJpQkd9CNMSSeyT8wMDt3wzC7amseGF18tUtPMg19ZKumkQr1mwAGSjo3u2vx9ZmHXU6",
  "key29": "2X7HyGt8X4pECiguwXbfRGMe3c8HxgeFPG2d5Dn1RTZQkA9rwFwTJLRfgREcetZVT4Q9xCBX1w3R8ZK8CBYZqRd",
  "key30": "4PdRxAeiLsQ9LvFQjr8SUA9f1PUWGCkpvm2E1FVSwujgKFnANRcMZ69PSJhp5jyoWrAAhE8jA19yDXQcYf2DvoNL",
  "key31": "5bhQDCjfAChB245PTHnB1x73r6ZNM63PtPN9NgtDJLezQGNW2efjK4X8Snj7N48DtJsQG46RdAbiPswGBYzkX4sW",
  "key32": "4aJNMDz9nkuweaMDov1E7m6G4Gct6ghRAGiM79CFTJ1hGqfXv8BQieqfERkEKVWxwb9hfsPAPzXN4nXUrr7LLT4H",
  "key33": "3nxPkc7nF7C8aD3MP1qsbXHmrHtsXtF8HyHXKuVJg7nmAXQhPyjFB1pZR4mjQH8ZRQ6uu5fvkYq15aDM2CwLLwi2",
  "key34": "xixPSSeF6khaBMpwsFKiydxM9yPtggyk4PYUW7GUEKbmaYxjV1ngrkb6rbACchkSzewGoB2LrPCnewxrcHYA8GD",
  "key35": "5sBQyxStUwxv35wj6svFqRpVjCYzLR4oAm3W8rgVTZbe3LfWePPZUKvYNyNCuTiuJjuezB1rTsgozyP7FKxPxUCa",
  "key36": "3VH997HVTiqHzLn6WwvWvzMvgequPj1fGA4atLy3JDH3RnJYDECjJGiKZ4denA1vCm88tyzg7CjuvY8P55xN7TSk",
  "key37": "27dobMkwNoHZvjBZF2xqFZWKPB29Tf5tYCExxM1UNPzRKnjSdPzgmnMTZb7k7edwudy2MfpmsAiCePQLQbMgt5Mq",
  "key38": "aa57KYaqmDmJxS987VBdk9Y7mMhbR8tY3KERkPYVw6f4td5rm5L5yVc7r7VkWbJ1aC1NdioFBsFUsDe5X3WsVvH",
  "key39": "5Esn37kxWxDHD5RsB3s3QbTf8PSpX53FcLtz53viKiWJCiBGYBxzjMmz3MeUjBewCwhF7QbktaHMyGXdX5iFagm3",
  "key40": "2YRWW3MH9ngzewiNbZgaCDaNoLo83v7XLRUfWpUfn4f4vCBLgFZKdme5zzBgQ83dBQoPJkWSZvC6QaiRWeUQkwJv",
  "key41": "3xjyQWPBgQd76aX8BEpTVafWNLYEWijh5VWuAobyMUT43RdGaY4btD5cyMVBfDeKXJbapz9t7D9tgesjf4xnecU3",
  "key42": "z1VdySm4rap4b5Cq5SJ3asVp2hiVVqBDwbLr8rexWtQecMZoHKF9g2odi5dApBd3U4dNcU6o2myhJ6G4YDQSf79",
  "key43": "5owbwzQsbUneBnVWSvENMrDehCtjUkzwixEAi7ziMshTpExCAGjeMvJNvKryK5zs4UaMiyHhH9PS1QCVYr6siagU",
  "key44": "3YBuE2UUD9z7NkTYkWg5Qgb89HvfLny3T8N1fh7zGLvedoVfZ4JhcFBVosAD2VusVr9XEs72iKW7VhcQPB1gbdE"
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
