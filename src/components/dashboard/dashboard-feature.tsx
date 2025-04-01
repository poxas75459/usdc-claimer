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
    "53k6aWu3ouKLBiriPAff4Pmrm3DjRjfLLTqGxRNR27bUT9RXFYa5hVEJxri8isGP3Jr5ws79WjTsPEWHXx1Ah2m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRX5sxTzpwTm1fC6QjWjojQUn1qDJTcEEeX9P5zTG5ZJE5SjRU8fo5WVrAanYVePkCDDoFwou59c1K6nhEGxhSo",
  "key1": "Kajss7VouHEj5vmGvfMAXkkzdCk8MQUq5yqyy7s2NtpZP2fxz2Dsb1asC6htQ7bSZF4qqSv7b1S1Lc9A5SMSAmN",
  "key2": "2wgNv2ZDSemDoceJLJxZ1Y876SvN9NaJDDr5V94GCKxqj8V7fMMNdukXQMcR2DVHmTC9KictH1F4QNAMMdgzpF3u",
  "key3": "4FM7zg1qW2oGYnsmdDysk7omotY3W2sTTNSJnkxLmFFncvpE83PyWdA7hN6jvTcD29Ebfwo1f5a9FBeTfgZ4o3Me",
  "key4": "2ULCrvp11jUSRvKyBVtxRMrZkKGYSdQByzkc35oDodMgzckdEniFNB8mBjFLLX5pp7kCHUNCL9tajAbjaytJrpxw",
  "key5": "3gjk7aMMrBw4F1w1qzeJXcmoE6LvGjYKEiMfDvQgUR3tjTVuB6Yq5vod85owiSGkTCUuir49YxGqxHAd5Vz4UEQM",
  "key6": "66zsvvzxmjreqK6698LCt3qZLEMDck2S2fvVjGxuvxGuhvCaD4X4rG1h55H5GG7LAnmDnmkYAseLy9J1zjvmA58k",
  "key7": "5ZCfnkvvS9nb7NacMpt7cbeNykJkCurWEkMKPtEFDaVKwd7MSNwrDGAV5oHknHdfSbU8p7BAFa3Vxb1XkQzNF8S6",
  "key8": "2LaNJ14TLR3KeUeukiHoKMmUsaVQmPrDLkvi4yFsNF49gVwAuK2c1E4mZYnVoFtX38PK2Ug9egCJTGrNQUzMeRsX",
  "key9": "65qxRj9NG7Sp3jup4556KsTiWEGscQTsbPDkUbGYE8xXjrMyA7y4TUX9CtZ1n1Nww3xcu3793UgCpz9AnojrFDqF",
  "key10": "45reomx16s5jh6fMKrjFfjsmxZMZecXSUiDikVMZqBFZyuSGsBEdjtoWzbvJa4Sz1nnRpiN2BX8BN86Jt9dyqLUs",
  "key11": "5f2SQnTdkYsV83yC1WgRWWiugfuGvSEt5tssRWkEhPc1KVGVkJvB7W2ioEfawzgLqkreGirWrxnUqAuLf6WicCTn",
  "key12": "4k8JwsByA7BN6Z8MV7Z51JCiKP7HLaNct9sxX2uVK53WhJLN6vivztgekTjW19qvqyMmCnSb8Ditc9pZyYqqrUMv",
  "key13": "5Dj7UhKdswhceENS23XnuFxpBnB8U1Bn7HVcqHKonu918xsEEA5sfH7c8cisqgxiF74jevv6XhUkVs3UPBYPba2E",
  "key14": "3xWRaqc6iVnJJJz7hNc3XMLRrpm2odSKX2Zxj6h5CQ9AsT8Qy1MvLUSvpCZD9NrGgYDAu5hKU1iexSd5HwK5S8ve",
  "key15": "2u31nPh7JQHRtZsB2W7NeqRUsEBCapwSpwwHfipFKiFiC9kXLt8Qeg6r36uFtWtvE1qHoFLyJcK71GUoH3ttKtuK",
  "key16": "38XPvB1BXVZQ1CKrpdhJvPA3448qqAx8Uv3KsGmARHXEdmSCix7jsYzyFkdVY6CWEyLaTc7VhJVzGUkbYNk79X8k",
  "key17": "5sZqxradA1Vw29awEz8vXMxdATdwEPZZmQofeNz4vhcpzi6h8Mt9Z7V3v5R3n9h6eBHKF2apPgGXD2dhxzimJQJd",
  "key18": "3grV861AhZaT5hM29Q3D8oqcfopX3rM23sCDyP8moYFWsoDS6oTWUsnyNAfpMzJznZUNQJGwCKuaHjpVuk6TZKp4",
  "key19": "2T32EhgYcWwqkmCgkaYmjFFdAdfBGtov6vUwmNVzqJT3fkDexYJwsPaEcy2jZ846QuDgza1BsFdqgC1KzHTGPDXZ",
  "key20": "3nEoJeThTcHUipxAQSTH6orf5tq7dEaqgQZab2BC6dRf5sfRgSRNcazAYsVzAbr1k2bmkBNVJs32qU1Nb7hg3NQ7",
  "key21": "NM1eLNxVg5NS1kjiG3qUCugJsAETPSYTqdq2Cy6qU7ydhPxUqdjMTttZEJf21FLgiM2i1ZsE2wVm1CDCmEkTDxx",
  "key22": "3vRjqQ7c82naJcyFuKdDHBxd8vwRq7kjPEQ3Q1rcjsWxFwxKVmxWgawPpUMStgLFJHoiRwx4sx8LVqpba2MFG8Xu",
  "key23": "4DfaCERijsu76DFdpvkSCkvmSxAZZQtX5yqtJRvaoVRCcSTko9wTYCZHNvN9Zb2GKnzuSLzqWtWt4URuRvMMM1ot",
  "key24": "4NAUwX7Xb8KUTuemZd3tcbxb58cyJintk3Un146tCMh1Lkvdw8G3cWZpmSYqhArknGVrneGZ3xoGsQF8L964DWbu",
  "key25": "3KEqa4NM9xg9poVEXVMuQXsSN6LPyFv1B242aGbrux2Uuc73Zg84DXzAis6KahauUdvqfVUQ7N6A2E3izkxAaobp",
  "key26": "5wbageX1s2n2GKmVtrFcHJ68b1BT3to4QhT717zVkFXhwitfvidHWT7Th8jyz1kMoLY8gWg5UHL1qEpZExrFdC59",
  "key27": "4W3Ej9RQ41kAGvjaBeXP4A6iLE6L9acdgoFHWtGZJ9D9BVQRKNNcoGQocLHFmeQaHDU9CM9dNeTQGbMB4gMXEoaR",
  "key28": "5uqosAmGne5hSQBvcckjxTKbiCXYNANHH26PeHcLtwbuhn6axURbxDmcBgLD3BjQQAbVWQ388yWySeuWfGn8L7px",
  "key29": "onY1e2eui3wecN4k3HVo4ZnSrUUsyyijr7PctnPubiWbehnMoFAx9QqaEjaYJzAtgcf5gDN7yjjh25YjPs9VJmt",
  "key30": "4WKX1t3eJLhoqagKRJkaoTnqazkzrZEuFmsGP7C6bb3HbM4uaPiYFucuGH8U3sZqYLYZxgH1rvVtqsPzEUtgWbRB",
  "key31": "fVbpsNn7238MJYaismgrA5qFbSQ6drmUVXN7M1jCvd653P1YBg2KAe2LPCQo822d3MaUnfEYGq7EUqvAG43cyd9",
  "key32": "5wXvwgojHG9g6MhHP8HMRtpDfTRGa4yH2JEnWXgPBsBXtc8P66LD1bRCbjr5RDcj8xfjg7WYud84exyFodb76TC3",
  "key33": "5ri2sonRWsGQ58WUMnpMG6TCcQPUR4SW1vZ1W5Ayc62ReiKBuqL5jxnZ5sU7CEaFEVtrJBNBWNKhu8KkyPanfDs",
  "key34": "3147WzoNmKgLqh3HUZNpmfzc9vxGQTpHxUyBCppcgNVDHMjHkYPuoQnaa6Dpc9pVSK91MvEDbURdGCRmmxhQuWz2",
  "key35": "5NymzAzRtteht7GhvpUSYPjym6nPi42UmoTKRhQXnu5Ji6MZfd4gDYRttvc36ssAGmu6HURWxiQc9RhwYsxa5KD6",
  "key36": "5aCqCondtJ6yTgEkyaWyCKWaC1dK17nadKCVUvAjSmh41wqzgCGMuhqyvPPQo7eYcoickZ6XzU6osZRgznq6eaPn",
  "key37": "5mbsyNxqCEiUWm9yW7kL7j5QMxfBGoiahFvhZgSb6zGotUR6mcZwZ1YSUPCz25YDC9FCzu2Lokp4eDJGjVqv56vx"
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
