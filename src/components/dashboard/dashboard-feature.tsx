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
    "2U3o9eWqJ2jYmAzSEAzeXDitVEAecbWtu8LiiVwydP6t6EMzp16iNx1HJhzKdKPbpCfMDEsfv5tEz5eEV9ibhNFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9f2g2dGBmsBUcmM6gj3xoasM5EZv3aZRJKFq5ez6purGLfxjaFhvTG6vwcASLuGeqYAMkkgh1YbbwfaJgXruPZk",
  "key1": "U2rsVnueLoer9nPEodQcg3FFo72ioaHSqyVdFo3k2fCKEBUTd3c2p4LsivMwjBBVJyVB4s8LNBaXvuUYchpvNRi",
  "key2": "49teHvxS55yA8psPXM4tAE4URgNA6nUtdkk8i1Luk1hgi1bdWsGeyiP329wR2tXq563gyPbPrMyPLeSwbfgK1msD",
  "key3": "m46gw8UGLkDWXdE6uG3mez34bW2RJhrKSSdpYvQEBPXCR1m8x8xebRQeG8GtbY9sjyD1NFK3ME8Ui1cBvbQ6vad",
  "key4": "417Fdxr23srokQFDKdzSeJCzXHrmJSDNdPqR4r4PWXqcDgny4oKY8sFBRyoSNsstXJv55QfVRRDohKxbNBVxNbU5",
  "key5": "6Qpm7YB7rGu8JfebaYtf9XAVz8rXbxkBXztpXxgNgQg2ysmQL8uUirdUs5HqtAQXf97uuYDk3Cqw77wJowEYJoM",
  "key6": "bbuanaAswjPFHyqyCJaEpCi2sSFfYcSybJo2YMWRQaRKrWifZ8AL6L2aKy4TawHzS2Yr4L5Sb5tQb1FwBxXFQqs",
  "key7": "63uXPrKGxBbw9p7JqVau6qbNoDKvJzwDtF2Axg5DqpPXRW9bao9pbthuK1pnSTg8hs95ATedRqpzYZtbXhNfPDv5",
  "key8": "3dGYKfHCwtW23rR6b3Zc4u5NZYab2znfzfEVyWzkZRJo2zp4JYaXCpTzfHK1WDAT5QfW8bygMBSWFb5qa5z2i4QH",
  "key9": "5LDBLcD2RZqt9xeyjCyidvm3Tz2zZjY4aoWDu2rxCxXQ5DdCiXSrKJcQEegoN6hDXgSsoDxVhXecVER3Ls8v5MU4",
  "key10": "4h4Wf5eNJ4GcJwx6giThLHDgxa8wo3WsheEvuXvhMvARDkqAcaBa8LCp2TbabjuxeUGvrvMpXuPVmevqfy11YXgQ",
  "key11": "5jdrAWZWpfG5mZpgRHJjKV3Jv71v1HWMQ21fiwFMyVjuKiRmzR6uPQX4armgg65frz9prCr16znaif65ueTEpuMW",
  "key12": "1rG6B4wp2eT2gWNcJc1evmecJSq6Tt3FESyVh1WUnCqSiFu3VVSUkGy4CotHK21L47zKqorzcvSM1xfZFqXmX9i",
  "key13": "5ihEHRsSVnZUN6DeLTBnSbMsxmbbxAZG3ceD4te23DRtV2EEQZ2WLHTMu6Wzot2YNUjFCTSAe64WuYyFTymEjnqt",
  "key14": "24bpQbu9jYZdsGVZCdrA1GUDXqf6FjHWLR4QkUNg6odG9sNKmbbF9T28E1TbXZjU8QiLo34n258yU6cnPaxGVdsz",
  "key15": "122PBqBhM3Yu9h126HbwyZBqhU5RS28Jgtj8qLawg7LnLLqA7izTkVGENCoAWNmynkpWwsuzAdJHGiUvF23CZn1s",
  "key16": "2rozNC7sbrAGnPTx4KGJp1FM9CPiMaBeua7P1aNbrXgT7zTKkeDtnShDB1JeYoFQeDEPRbRkAfgkLp7zitzRio5H",
  "key17": "4Jz1dixSFRPJ9qt3STwEu5WmYvm1MKoNPxWpuYJwyxfAjbpQjnRYvu5nwmo3k1LMHVfLjWvLiuffugpa7hfY6XeX",
  "key18": "4yiWUxFQ5qJbWqSJ4sEsrrNsYimhwMQYRY5ibSTDoQBzaNbuhTzPErShmG9u9372j3HjTUCUhk6ePYAgXASW4Y2z",
  "key19": "4rrGR2aQSdgNPtRt2AKoinYs9r9Eo2Lz7oRSUiP9ipCbsC17sgMLXwzLPxc2pP3GaGmrX1TiK7eg3uXBjJ6EAPf3",
  "key20": "2RKt3furtcw5aRCL2UmBfDBYBSneUS95GivBxfyVVS7ydQ9ri8FzrmrwmX7AyhYhTCZHwpUnG89H7ykS8YmiszqA",
  "key21": "4PXWw5z1kB9xP9naXynJq7uK6kYQSA9ZDQyhqdeB5SwAauwtXwT4FuBxGV4nAhfVCHn8bwWj83sitUVh3ovrLP6U",
  "key22": "4s1Lg2WEWfqkNEMxYraC1zqomZdXHyFq8GNSZMgbA5GE4ZYywL8ZMZiY1APE4sc3iVLNdu2G198SZ2iLbSZPAE2i",
  "key23": "8iQDvSiLpyWXM1A2iL3A4rhqCZ3P7ncjxkdmfaoveYt6SY78TUNmQ65mmYE1uBgwcM2XECdN4ovBjZveQ4d5KCW",
  "key24": "4AvpjzZgbiGFw98j87SVCt1NGu5NFXgXVctCFJJdkGGAcK5fLBZLBWLhjU92pphFRYsu13epVgiGRoft6idFiepH",
  "key25": "1NZCSgBpqPMKySPbi55WbUn9H172VdFufGha6S34pJN8dQQqSFAQmYNVexanDMyvwqMBZExEcF8Te3sXiw2KKFu",
  "key26": "4c5zn6Do7xq2xxGu45j8eFxXEsJPjVdTZTs8dyRMe9gx1q5k8pGXYXNbAp971LGFL6AdSuVdcCAN8df4YsMSv1t6",
  "key27": "4KZi5ewJSJmvFFfEHVFTbrB8sJ9LhZQP4SWwq1xyg6XcLYoE6xwML4S4kaQE1HpbzZKqXtFQerDukznr3aVQXjVX",
  "key28": "3LqkKPFZTELXT9pooo94Cie2cgNzZoXJXWh2DJYVnpiNnpDrYnrXR3ZLgTguPLQiBTWyjzekx1TeEmxa2DUVAqcN",
  "key29": "4vYmLugoWPMD5wVf898CgupJ8Q6CFE17tN5QoVdDJCC664ZnJ44GMt86j6RYrxt7kJ54rHjRD85mk8z64ourt71c",
  "key30": "666rX33tSmzD3ixap6gPEE736d4d1h3x6k5gK2mBNjn8DBCrRHvZdCTU2LTsa8oZshAqGHMyi42ccdHR5a8PTA2t",
  "key31": "3D9LnHfhahr1AP5S4wYfAnDi2bPra5NwnThPBof84FXda9SgQewWW7AkKQdxGamuymfzeXqrXZxd28vmQQYcF2jN",
  "key32": "4KgmArj6t65Gsf4aTpG41ioiKvRVUWYZsQb3g1KUJxNt7hVYYYnisgLqvAitb6GU85gk2iodZ16MiLKdLK4mahDK",
  "key33": "6Rx6fPHeGHBdoZjeDT5ZCuSmoRcNCPoEzb7H3g42tzykeWsu3nxdr16UvS4fBLUUNkiDN6sYm3dV1xHh2CAhmDY",
  "key34": "4TnEr5KEFZbQhnhpKLsTPyGQvQEcKR2NrSrPrpCw9oSGeNKvpWRTqQZjF2Hm9BK6zJ2g9P7ZcSQBrPhPiNaywoyh",
  "key35": "ry8swtMxRUWPYsVZkMpTTjiHS91RzocpL9WCEfED7LpihB6TphAQkwYSnbs6ugGwTqhZWVC2wbsbDeVsWrtQN3Y"
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
