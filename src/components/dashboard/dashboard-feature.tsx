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
    "2vniqzZb8ZCLVNTY4kTEoKNoUvTLGw7ggFHskrVswa7UTXmQwzdu68vF4NucMN2ouhbfk88LqavtwqPkN7WiqRVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZV2YqopuVnpSRhAKHsNbgeDkvdNRB2dHZRARGrrYmcPCKUrKT3ZA9poMxWK6eaAbU14tseMxnNiV3v1mHpqCWog",
  "key1": "2t32V8KdgDqiSJHQ3V38XFXdseY5qkFMpxpgYqK3Ywu26ukfcy4aTguiGBaEunx7jxWdpZMckx9p6V8ce9xR2vBW",
  "key2": "4XMJ9HAAbr91C8ThZfXCzEGaL26TtJtF2dHMGrgDBNtDxZF4hgyvF7Q9kysszKyUY5hBgZwvAJp7xVFi7B37LyLQ",
  "key3": "4gb51KR7vpab3HPstTcngVgQHYrx2moX9uHFzZEceQFL5jDmxFJLoyGTaDGA8hqYKFz5YV9zXRX9RF3ghhZ1gahB",
  "key4": "5Kz7p8f1ugwRNMRkft9cKoxusuJTe6j6G8ooMNFBsZq81aR49quEa4Vw8eB9BUGrrLVYXbw1X6RUUGbqhzWAV8uZ",
  "key5": "3Q7nbzNeYMGvHtikRArb9LChio1YzeL2VrPoxZDb2UyZoLvD5XCGApxWXioGvQzzTezqsm9qhZkSL4U6wDgEbsPF",
  "key6": "3oACujrLi5a58WXbppagxHkCQBwGD88KFDWMjv5oz5t7YFduj219XWxbS7JD9cFuCpvDBBvivW9c3AcozqboSDJo",
  "key7": "2xrh5pKAc76YUFwLvHkmkLun9VknrsppMAet36SgGJWppvSjoxxE3kssK29W88r7jw9kpdw91DLhcUEuPYosUyeC",
  "key8": "3ygTKFUv7Dov5w26RhWwehtZWJ4rQ5W1yJc5o2VD3DADM1SovwCdnzW3kqZh22r9j7dTsavpBXS25khpMtQFgFNa",
  "key9": "3YCyh44gMQmDoPwUmvL8NRf3dPFVPNZNwT7W1xJgAoKtvzF1HdkWg9BHXD9xzhFynt9WXrtX7yi3fbGrbjRsXjan",
  "key10": "2D7rt77NxyNaW8NgbsHnBXLgb95AYuLKH8yBC4HgTsom8CprYj1gzzLfoeojG2PyDUyY13JDLazmBKhuQ5w22BfZ",
  "key11": "4e5FFwDvumn2xnRnSC32fnvZjfVV1gSEqSKQSzy5RtempR2dfSqRkPw4Nj7s7utaaSqdjcyhVhPSwL6x7bZ8RaD",
  "key12": "4s8C4cBzryAkUnML6juK6MAuHRMKXMvK8m7nJin321454RyBkcvP7NqgSSX6T3YL7Ln3AtaXBCTLoACpdCuxBSNt",
  "key13": "4ybUvVEvA7YSN9JFM1jcZECftqYtc8Ri9VbVxJiJLHnnabz9A8HKoa4PH61CzVHoGbpFmigUaRoqbVQsEqPaiW6",
  "key14": "2WWWEV8GaPxupTVHbPL8oxWvU5CNUtaZnYtRKa4HzF4WrwE2hMUVrccAMWszHvCQmwbLZ1y3RsrrczuxrwksKHWG",
  "key15": "2NGMrYSpyimaom4BYUkqtKrRqcwi4S4EAoLVc5f1fXHp5xFhm57L5kmD7yQLE1ob6ASS2CDFCEwod7q9XPH4heT1",
  "key16": "61f59Ly7U66Wjb8oL6PFt7CdXgEj2sBAdUJ2YDBy9sf7A5bFxrFBoVM7pPsaLooRUb3epdPBiTrMVfmbGDwxwYH3",
  "key17": "3VDeQLrS4YuVbHYeHi1GmrDEoKR5zMSfdEpMgVXhndhzeaQ399x2BfAJ7MkZuvAcgBXTKuYGkeSo9H45EHRHXDJk",
  "key18": "3fbvdkLEPnzFSR76ed4i3AZX71ThAUdnj1tQr2vFr8aRXrqsrpyzSoaXtSUSX8Y4ionpi4uMW657XXnn7aCcsYBa",
  "key19": "5LpqaoJ6CuxGPKi2CvnAa49f7Ctg7cmoEWhTN1uaWUdtXkE7zcxZctDqRiQF11Xyau53gXWWDkKWfMfuME9Cou2N",
  "key20": "2Qvjupyn4Kdk6ivpbX53UM4LKuqXF42Z5vajmVd5SdKsegKHhTD2EejTCE8mtJyqF7E7Vzn7tQMjoyaKJBENvnpz",
  "key21": "5S2cwX5QVHtzbUAo5SSNUgsGLjVeaaDWbfaGq7P4sgqPwJDXi9YpfbUUsSnbmEr3df2ouzAw64bLH48794mSWQe4",
  "key22": "2sRBFcpZWMDNbkg2QBK4YcmnLgVy6SQWueWaTF5GCnpD6sEwTbyvWD6PXVxzrJgH4m8AH8FdLjTNkVMPv7ib4M3x",
  "key23": "4ADw9Ywvh1fwc7TuoQE7pn47NGMbfBtngt2UNq2itTuaRtpf9BUxxR2wr6oRYzMXjmAS4dyLQJRZhXhhfpcn1kKj",
  "key24": "26mGaRaAbcnkAXcAXmrFuw6jFHVdG75SXbNwnWU8HetWN2DYstuxVJTAfZ2znciJDWZF4meyQhbLGgYaUu88t9He",
  "key25": "4ipKcVSPDeokHgvdMHwHf3PBuyF2N11EBrdwGgqdmb7TpYYEWkc1JUPzmKm6u9cut4xsQ12mvzBXHqNwBYEJv8nV",
  "key26": "5YCF131KkdRwxC5A9Uja46NMJBp5c4MHkUCq4TYbQ1tQZpGEzhHgi4aZy3hF3Sz3DWnq75NMnotRw9YuNNJnDvwc",
  "key27": "2VGkxPYPnCgAtsLEuFxfbks3n8GmcAudMkoNKECs4cZ2PX1WPoRhD27QwhETjQYXj7zsv2fp8n8CT9ANkF6frV3M",
  "key28": "7AjuJtWxrRX8zJUedLY1KNZHgpktPQU1EDJ3g6W6pXcbJxVcNA11QcdGiSUNt7vFPxektiJCFNxAiXDfq5mTcCx",
  "key29": "zdny36FYAbc4WxyMG36AsRqhgE3L3eHyVjNhDEpYRFW2J4BkZStZboLoPiEVjGa3VnUMVvCx72DT81ViyrZAhBq",
  "key30": "4EMZgbVnNfN25at9CiuLVXjon257WuQq9wsQrEAB5UzmJ3RVtUWnyNbXxC4hngViXLHVtmv6UKrssF5k6P2ycmfe",
  "key31": "2794nbnF3WCS6vLZahioBDPKLwJr3PV1CktrX29BwY7ciXKmYAMXLZFSm5tcDEsAqjPzG2edTTh2kj4kW3PE9LnW",
  "key32": "5hMcT9SxfUedm6VP9dJ1KPhC3caYhtaZz1XeSacKmC1GygMaxgrHw8Mp5m1zcjj8dDoTb4AWkGWAm5hLoA3Q8EwH",
  "key33": "VFRGXGyNxmWBtaUQhTbqD1MDpUNEhF9byjEwJhxDRh9CNPN2pYY3Bvm6rB6udcyJcM2j72T4WQTwKBv3JVnePAU",
  "key34": "2P2cTYXTzs5AQSQWoxktpEjmS1nfmmpJA414qTqXrBKJGmjiDBKbPWkXWkabL948DG7nQXENWEb1pyXmEGdFKrZD",
  "key35": "XGv7qeQDXL5xRHPnae4Z7KQous6xEjeFgDPq8ofYCEYpZ28cuvUhwknpf4HmMVuTVNVgTjKXz5Frcs6U6rKMMkE",
  "key36": "3mvzN78qBJEH9roYGDpprUNwNCBnXLUpQ4U3LFD2KFwXUs4Pstx1uWNYFKKk2EaQD52JJFSfVYU64XjjLQcqpacA",
  "key37": "3w1qXDnbDhvhgqasfXsAiCLKBfXoTWgsFigsaNE3rG8vbFDYmtBTFcdmCz2EZ7F4dSmJHXcvct5tHdnNPWCHt2UZ",
  "key38": "5y4qXtkm5ex8jeLK2ErBZSCxFcDabBSC7jA9upBDTcW1C7xHF49q6MAgmP1oKckj5bJhTDskr6CwZQCYte1TAgSs",
  "key39": "4qAChvE87keNqH9hUE8HifMGemaucHVbm5jKVuKyC65f8yPBHZv315LzE8rxiQQ7dDRMpX5iH4Q82cfaVAysd926",
  "key40": "4UTZi7TRza4zwvFWw6SzZ7n5ecXFmpaAsjGrmN3bsw1SJroA1em65KKyLL4Ncwq4epeAEHEoyHnxTSPVeQSXgQeK",
  "key41": "34YqkWuc3pdi15hTWuR9EPbNS993DN6Lf7S8Ks5x4kFtZmJLjujS9QYfJyFzd9ne12kW6qbnh5kGWk5hrzJJTjks",
  "key42": "4jdHA1d2KThS66o246BFj7ZrusKP5tVdomifYentpCzwMCqzQ5SwS4z9jGEZcBTRnTWfmnfoyRoxm2QSE41no8NU",
  "key43": "2Y7DTq3kdhezZaHHLmBcEeN54vi5QkYcV6dZyz8FG9rqihNYXtYes8mDPwDF5ygtsVaPKdBVdDmXYgbbSL5zPbYd",
  "key44": "4WjWvrqHQJewTPpZR6Suw5qioiAtT7r6F1iLMAWWQVScm3Z8v18RnckR5k2urqbJ1rdNTHJdzcYMnvmnqNeUSHCZ",
  "key45": "32JM1wvuEdwTjCWMZMXhFucsvuucTGzh5t4BMR5zQrhZzMVsRSTq4mrqk1DzH9vcmppNbEbpjCePnK9cbzjh5zgu"
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
