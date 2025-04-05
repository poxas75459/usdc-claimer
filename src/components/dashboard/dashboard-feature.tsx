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
    "38oNNcvUg9ueaXye1BvT7mDhCtJJuCT8qGDagXYa9gChqEfwwiFFwztxbiYv86jBXHTyWLz3Bum7AMFCKc8zzjx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MsLpd8vNWeLps7C6zVURjospNfgFqvRcv4FzBVkyNZ9wJVRyTGgq9t3yU7Pi6R6dezaTWnX3wAjpRZw639tBxZS",
  "key1": "62VTgCkzs22HnHdeViKjmfUs4kd6zooFAPjo6DnaGetahxvyq97najmSehBEXfDf4MWaGEyrVYmwc749kcJ21Lhc",
  "key2": "31Ex2ngmntCoS3SoDPnPSExMsB5hWrcG9AWncViHsGVynKLz4255rZF1Un8i4qqpRcZJwZUCEgMS1E6RWmF3Yhvk",
  "key3": "4MJXVpsmQXDvgvxeWeaGce1G7pCW9Cw5Sd5KaUfhSuXwPvqyCeuJTCUnXNrthgzUMWoYMjpXGQhyMzuydZcA4R1k",
  "key4": "2KhSMXjNwPDAUL74Rq18qcUqzdChiQitSNo2e5EYrZvLzQL9EG8KEYKrnCTdkthz6FgsWJPUbqcRQNsT6jVDsJgW",
  "key5": "4pzQBdYqx6E8nrBQRUtTbEYruwy9sL7BKaiuD764c3oa5ovjqbf6iGGXJST3pmrXP4KeqY9YxKMZV7Rt9gbgRAMA",
  "key6": "4twApmYqzRUdQZTn7JnQx866MKT1f6LcdMnPqwpeVwLsw1A5BRrzXDhP645bGUd5Gv8QFXM7LDBHwNFuWz8pqMEZ",
  "key7": "4M95WoNKQG1gc9RPwFdFzyyWHLvDHSfyqiSESyWdxwP2DiYKXHJdKUzbcdqCL3wq5cWGy3JwHGbo4TRwxrkW4wUc",
  "key8": "5KxHDzVD4YDigHwsPrPPBBtt7xty3XcC5qxDLRQXS4py1UWi2NUe22w8vp6NKDHS68RhYtDNbvjmuMUbsNTsx2aX",
  "key9": "3cwu64yY6UBm2cBR1nZGdEuf9yZz8PCj2947koVUPbfeNJsiKoEgCvcL1jRTcRjij9chPijtpMw1d91Xyp2ZsLuo",
  "key10": "2GSRCW3Tmu3tB8ZsUCzPyVCYFQTP1pYJKxzZ8wNAq15sjwuaBDZeMUPFz1JyhHScQgxwHSTwKH954nv7XXPzFswe",
  "key11": "4RPdyJ8AbCLGnnRWXGVa3ZM4ZdwG2mhJDB2pVTFGczSSXH7mJjSZ3kxhQkoQUsHPaqE2WcDtadeKfYNYFT9hhgTr",
  "key12": "2HBGhstTBbtb4p9QwvZW2A3s2Lt7HyZ5zVbbhThvVoe7nV72scDuXn3NXXwqUtE2HLUG7hJGkLpz9m3YAGMAgBig",
  "key13": "5nncoLamuhmFNyEvjuPRgUaoMSwNWq71wfscLbtd2BrQGX5JNxMQxCjW5TMnsVCdDPzQGewcr4i2bjQrH6EwW1C7",
  "key14": "3mLfX7h3FrFtrDZB2UqNRWuYb5YDwFSimn1preGxZh4FqGDrUjNWVZB95hYwY44XrWpdRRmHEYxHFgALsYsyoWK9",
  "key15": "LoB6n6yAB9NXAovWz2MME9K3x2D6debsnoF9mqkztHBWJBJgtcc4fsVUdBtx6DQnaqqS1PJHB1wMbEp34zYW66U",
  "key16": "2qUouWRMsTyk3b2FiuafW82aqnPbuhR7oesnMSfUQZyqDQB4RxME3yJFyeVmLH98XFWBFihiFNXcQuTA9yQ9b8iA",
  "key17": "47WaKGF1ym42dCZbv82n1vGLiCYH5v1cnvKWQ1e4JDcMPbGpXFPYN3TgJtmVAW5V5VpYpP7dxXc3JgjVwRdnD67w",
  "key18": "2p5jJfbvVrXTFPwmZ3gAK3kUcMbrQWGPJjJ9fz6MD5mkRuX1dQ1zVijpUeSsFyaZaPZQ1uKqSNcifoUDb9TKBkac",
  "key19": "5VHoQ9GLvXGnzr32475RbJKnJ314pbWmtuLGRbL1VjBSy3edErMH6ioekH6n3UZkEoFHEa3T7syvZyLhbMZkwK4d",
  "key20": "3zrZbjaN1mZwUovY4zX5eppxt9ZcGutyV7ayUXuCeH6AxLJyi7i94nZcs5XLjYcVWdWSL1zzG6WwbmT3f2c1Usch",
  "key21": "4tkXX3mQTrDt4mNsCQoh42ZKq23WKxVy5f6UahU5cNBDCyXHEi8v8X9c9dtsciEr4CefjCRH3YjWxXa9rFdPe5xh",
  "key22": "44ghEbTjdjG5H5TZ3Pq5YLGFvSrdwSAPMdspHupXSfvxe9cteUnWc3iMHzHvE475zyyFCvehi1u4o7xZcuNbE38x",
  "key23": "3xAnjUChghmaBWhwCvEpyt6CGjtgwNr1LYooNzNeCeCT5sdLUcJyznFHqz5k7igSyfCFns6a5i8TSfxKfeAGRwAN",
  "key24": "4ozt4K7MSyHYAPBj22FLt1PYbms28wuW88JCn61BUZ3geP7vKfJd2F11hPi3JSRGXncjas5SyWxjrR8MvWaGeMmM",
  "key25": "484DfxxCsfF4v21wLj4c4p98PEBjfwR8F8eDkJGURWjzNhY71datuk1wmizKownEwNBnZosHmWiRpx3nhrEuP21z",
  "key26": "2LA6hovEoz2UGce8MUAxxpdK7kUsikGa5BAQ63r15t9rSAqvpXJqaiyiRLhrSKhaHWBMhToXsQTsiQxY8JfnZKP6",
  "key27": "3U6UonUg3g7QCBe7YVTcqDXz7KRaQUtvNyChh99b7HPeVcpTm56vYoYSL7VPsS9EroeEcuhWMd1CWQZ7VDEJdepj",
  "key28": "254gzdp66g3PVkf5dhcPweP5ASFvjDZhLUgrrrhikLCrttk6cSCkif2ey14FvNnU4WYgc9dF2W9eGU2aPaH7jNhT",
  "key29": "2YdAtRvWZEjbci9zJV3CQGpjEkSqTzwP38achsowCBL7JhfsdncqwD3C2XdSemZipGaF4WSoub8pUYiLVsc2qk7T",
  "key30": "3QHtd5BA2FAeiKnFfabs1GCyawXfCZ2vVocauyzkWztDvm2wf9yzvKVmNJTEAL7m2Qissj6Qf4C6RYqU1TDvoJWD"
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
