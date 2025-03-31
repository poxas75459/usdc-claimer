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
    "5N3LB1ZtnbNDN4MLtJhQpCKNMKod3n8BXuYnDxHaVuN6KNygTX5T1b1RLkfj11nfnQFEkTg6M2H9anxhdfEuDNwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SwiLMZoe6EMHG5hCT6pXheFDwZMTmR5qZj7JzDDhtn24oAjgLqLn4UwXJUkaXZxF4MEBD8fREXmk9hYeGz57xg",
  "key1": "3F9oM3KvnsU33TUWAEVr2t9BU7aZDqMzwBfXce9i6tDfwN64odtDJQqWAnzYHc87i4HYvpAp5V8HrPcNFpfDb54j",
  "key2": "5NpsrmMK5nnLAMasUSym2gWLsUbc9sPzdkjn56bTxpLJzraCWQEGAkTTauikZAkkcxkhmqGz4oqqPXzJzd24LnQd",
  "key3": "3Dtj4vuHbMhSj9ZGoL8WmkRsELsdhMoRpmn5Dgc1K8BazemY2QTdhs1q7c1dqJQR5TGFQ3F9MDt9WvJwsjdZmQGb",
  "key4": "3hv2ZY1NaomSnW9ic9wHMDH6qqvVXwURLjKZrpsyoLee4sPEyqponhV7e6nP6qKw8V84eWdx9cpY4dV2Bvo5eo75",
  "key5": "3sKmP8MyubGLpb1JgRVUQ28q5c6EpymGViaFjjRxqc2zA7L8GXQX3La3k8qPRh9itZF4Noms8cGWKh6LdGKmdpF5",
  "key6": "43n2xnSJpAyQTzv7psLBXw5WupC9ZCYt7D1m8pzWXyiMQq3gbp9rfkqXd44a8V54QMzusZsPrpP14txJPd8xobUa",
  "key7": "3MPwjoTP2HGHG6roSfMH2n4c9oNsKcQ6mJyWsTy7u9xcSuxXfynmymSW7GhKXi1Xe4YUHzgtSZoTsnX5ivcqRboq",
  "key8": "4npgLFWwERiPqvT76a6ykMa7AeACm2N25CnsZ1DTJW2peeMHFvVJhNDX28uU892Fekdr1gsRqSnu4zTJhV8V6K87",
  "key9": "GrGm6WhYDENTw5zfXDCe7ta5Gde5D9cJuR6GC9iPzcRpCXjExLhmNpwkGXtZMaAdvLuSYVHv779F2WXpkixSGyT",
  "key10": "5LCopyQZ2EckQwvMueY6131FiTxXAw6yQxbqASXKox2Dy2AYcggG5nXjwJEHbNWP7hXa6BBfyaYG2sAbso4jd7G9",
  "key11": "3q8ZvwE2JZT8hYN1ZkAP7vCefHiKBmm6ab9yF36xYWiAgqd5dnFnTvNCqrzUA24zHwiqw4HZo3n1fJC8LHfv29xc",
  "key12": "5SdMd2abyQPbHtPt7Qz6SZMQYFtvJB82TCzQYHJP2XrhLZ5Q6ish1CuVMEWqX61M2bWSAEBvcWMhys4TTL8q6ikg",
  "key13": "3JzSMsPi7VHtAzB98L3WG9C3wUUGaPFHA7TgBdJSwNCF7C1tiUqKjMNVafpWowXpKF5aN6fMzradupovxq8kvHJP",
  "key14": "2yrhpQnncsrRQRbnvwNSZZ9CYFcpsat41dtbu9nyMVFgUEy1bkVqf4Q7BfreDYYEucUCV1KVseas2x3GESjmk88b",
  "key15": "4zgLqbD4QmQHR3bJedG7x9o4R4TvPZttmxgQwHVEvBX5Z3zDmw5X9WEZugDh113kVMxDBzzsrSuyyUnLLFSdKQcY",
  "key16": "5wK6yRpLXPWW3TibiYD2xJWRrcnLVzkxEgqBArM7FV43smok4p9Bgb2e14RWkpxmzAEYW8ZiKSecGRG5yWh1bzmV",
  "key17": "57jZK4aJ5GhBWruSEK6WSsz9PseY5stSedUUoUeYTU6WLLCmfVcRQHK7nKtHecbUXC3qiaVqUscpomqSj8othseL",
  "key18": "5Qa5NszbfdEwuCFPV9mMv7p7CCvHsSVpYEz4AS9gngDHqEMQsBeZi1ufy4hsJJf1hkkEtxd7VTbSJmvFwKq8DAzE",
  "key19": "22bCZhvHib53gSHCoWqWTTPBN7gYL9yPSVA1AbL3S6c8UsvBXJShb3oDPaQ1PT4MTH2bqVPS9tru5YCrdRZttYyC",
  "key20": "2E98jx2iQSXxyjfXosFXsiFMjPpn6xqEPFtUcjV3ctsSSL3iuM9i6c3MiMTvN6MHMg988X6FNpyKiHxa7ijNZR2m",
  "key21": "4ggFCiVWpxuGn45tXBVfEqJBes2GDEbqtCdX2XmW3v3DqKFK7nZWmJgSxHUVd5R8ziTt7XXsSMDVwVGBuJhNMFzw",
  "key22": "3uqKbe4sV9gE9uy5Xb9rgzgE57XKq2X1tc8xjnfXJRVucaZ6nwkTqwzdzpEpjC9VRrBuNbWZCDT3yFiwvCDySriW",
  "key23": "2RkBasTy32Y53HTQWFGNSYDULF3hioGq8yU2Rba9HpZsPgjv4mm3ByMaNM27sgkHhzWdpJ3iRBGEBkfL1WPWX4GP",
  "key24": "rxj4fUaDBLR8BdZ7d96PZddEhAda3VURmLaxpSAdTD6Z1XELcKvke6yp4WKezdvWL3u4NgFXBNsNsBK4JgTUQZQ",
  "key25": "42pr4REW7Sgn5jUszBXAgsQp8BXdRRe9XTbbkaBG2V9XWeUe9EvGrWLmjgTdhw3SWwS8G7PN399ckjnQcDAheKQJ",
  "key26": "5cEpDWhupxv3dT4Z5GXAyarwWQj4Sj98qy5zQRiTdfw8LB9BxFwVQtrNnnpy2aWeh4cKErsXR59jeNyWakDMfBX6",
  "key27": "2rfQgtWoUNwo5YHQbfzaFCp2nFvtKc3hAw849Urkg3GJvbQZ7yLa1fHNYhu2S4EVrCbtx2A2BzFshfaBiiHMSS7Z",
  "key28": "21ncWyDiE7WPokn6ThbPZGbjCUitamtgRkNqi4d2Q2vWCRFY6ob5aeuyiP2WjkmWxdFN9fHyUPTxNF8AhCyjqMT8",
  "key29": "p4hFCkx652gXf4ULQqGUhvMiwSM21pm86sufvyTSCQEdxTMaq847UZ4fgm2AW8CX5bwdPoRaWKit7y22GFTeZto",
  "key30": "3Znsc96v52pwnU1Hez57LMWiBnx9XHdNx1nfsuacABgoj5LEtDwHkDWwtGmaAD4E3MSXJDycD2oHf7WNa6YVwaSd",
  "key31": "33LR12S618ad1BAEN6Yqo8SJd8ENpHY81xvbJuKht7dZKonbqrTsZjFcGud1vTCH7ZabwVqtgVTLD91TQrGnc13e",
  "key32": "5LdghZh7uiDZ3DgKLogWyaQwqWUPdouomPJDpdSg95H8nRrxMmv6WQmPrCtHhpmpgqYvik6bXomWBAiwUpwkgxcK",
  "key33": "667mcv1rHRUfJGi4ThRDj8XuUGAKHfiVZ1LBp5tbax6XAJ1pXHYN8QgLTxaokkbywKrrag8fiDbybCPq3o7CQpDP",
  "key34": "WZPRhh3ZnRcid1aDuR7xTTkTrxdTYwSirUdVRL9otASo3WT9aPZ8S61sc3YTTMrFA3qXyb3wTD5EGPJHNXG2a9p",
  "key35": "5ZLMAHSS6hqwgfcnhsiKW5WdaUVH3t6L99T6HGsLYuYEQztzTtwcrUx6N7SPLCzecZnsXM1HzLJ6ycTFu7pCAHAd",
  "key36": "5DQNdLmJiSQb5s9jkySvDrK7byYTyXcDmxQuPgqXnPAw2T9fDQiCLK4Emg4WmYP64uEsRJbTG3XMuJ5kpiG3fXjr",
  "key37": "2gPEVjMo8nmArarfEzKpL751DVrWzfVefsByJQZG4XxY7V11dk2Cq9uGMyZEydqGjUwuzJBXfvjM8J22HweTY6Fu",
  "key38": "39ziB6z523WEM67ZGZZVj3D32vEAvK6AqsqLS7e3FyrWCHbrRC9qCbijHAd4WgN5tdcmvVGq7tawPMdVkTyMzomT",
  "key39": "56kWYcdP8ZpPGZDb3FrHnW5yLFQ9t6Uv77Ut5PDVxsicm34LirMa6YxTXu36Bpfd9QmxTPDMNzu21LmCReqhmPwe",
  "key40": "2E1A7Vu1AW7Jha5TXj2hmQuMabUd5y8MmUd6HPvYSdbU4iCq17SZ4zwpgPdAeD6PP2pu4AXXcbitk5A4RThb1Lp9",
  "key41": "2fasYDUKymQvoxNrqboiFqX7E5M3pT4DaLKg13ssjTzzBe8Fyx55sFfCGUKAk3JFTfLSjPH2e4VZzzcbXUiQyNNd",
  "key42": "26x7iyTWnCXJPCU8YqT2GvfMCis1bDmnjeQHDof8fqavmVVLQDVuJcviGdfunC7hB5RGnftfqJvqumgVcDf4Rxo3",
  "key43": "3fnManX4nurkPfQJAaurNArcMbRZwQmwms2ZujYuxYEcjdXjiNMaDGVJamakfLRgxXJPUJL8r3FEPLH8tBiEgtGv",
  "key44": "2Q8cBWQ9iCuuShgLGaXbT8QkkP8Yny1z9veNHdZ22E4Hkj9ct9hkm5tmg1yrkivMSwn21jW55HHC1rtMdeZoz5Rj",
  "key45": "3U3Gycz3aEwg2LZZJY7vQPnoLsH4NvBgVASvVoR1mDWFK4nTGoUQjkpSXKTeSRuSkSh8GkGffZQjp6PhHiCoSHdN",
  "key46": "2rThuTuNYYpzDxfY2f9HKMdUcPfe783eeMMTHppu7h5tUmMe4E8fvU9CUEJD8D5SYf2AMfst6Ltn5ZStP5trJ71p",
  "key47": "3VxQxsGfSjdVKGrdXZQuuXy7c4KCc7t16tCqrF8ciXXau13sPhsv2tdp4bTf1P5tHs2KK16FkTaE2vomFgMwVohY",
  "key48": "2YVAGEe6smLz3qsxV2A9CebamzwLQjDUMfBD1FjWdZeaUq6P6HhyeJLeQ1AoHm3TQGeEqJrMJjSvKQyw6tE5mjie"
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
