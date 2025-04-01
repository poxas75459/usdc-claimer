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
    "5RmLDvrCKhEs4B3dnu6yGb19RhmhwL9uoCqfZK1nAz5Wqzb5gFKuY7a2z4uJb3GzqoBBMdgedQEyZcH76BEizDZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29odUA5GmpcCfbGjNxUWhXdE96zCKB5GLEjq7ri6JkV8uXGyoWMcskHQcUB9EGz7pKFkzF5DnEZv2RCr1eFc4mHH",
  "key1": "2q2racp2BQYzm52XDEKQwfLtMxS8u9s7eD3cFU6sSbfJPqMUNzve1T9LMM58xqJ5PYTZNcKbYrjLVvpvRvUpMDZC",
  "key2": "65hNvabDSmhUt5KMkyM9xZeBVBRpWd7MmdhiMt4pvYf4EUJHmgz8pt5Nh8HPeyiUytmTNqFcYxokqeYmyZtoecRN",
  "key3": "3PbuaqAhNSXELCvMCuNXsuqWEvbhkrw6i2ETD7Kgph8MSApGAYHdszjRbxH5en4Dx1mS1YFUiYF3nnixsEvANag9",
  "key4": "65wWmLQYyY2nEXjPjuSmAy2EBsmFvLYRK1afxYmh2qhRnF28mrY72dDPCbqtR9kKvdiNcEs6gcfdtigLycNAH7Yu",
  "key5": "647y851F6NCp5ddahTfH2YYRHaFSa5gLpRx3EAAXgQmZ6qpKHMDuKL458kS8knvgXxUkwtS2Fw77NzVvexSqDiKw",
  "key6": "2W66Wd3pVNWMmGCEvLQifou7NujVWn3m7eyaMgKtsUTkY5aqLEA2NFNQLcfqwg9bHfTFkaVsjLjJva2ikXoYx8jE",
  "key7": "3b7MhKhBehgCXPWXNnAY1Y7JxLsq6MjPjjH9kLE5AeDFHgsLBQ3D2G9K3X2szYCYyW3QNaApSbpQ8mhM5V1iSJPc",
  "key8": "2wvqoJT7U7tjKxqR9smGMRRNVyfn84TYyP8zuNw2SFJbUMpoBhMxXzKzJusvJ5QMYV2kSEBu6nL44J6gXzRL4sQg",
  "key9": "61ffmZQdvz8zo9AxfLwM1QjCiSMpMyckiaXZ6ArRwmZBxQmQFtnv762SF8UzQMPeCdqu1hZeGKZ4srTu6LFPvRL6",
  "key10": "JZtp5KeKMVVFdFtngM7MYK6AAJ6XEAxWahnn3kETys1mP3CL5SCnnxfxmQoboZYdJP7AiHafxog7QF3KjGCXzVc",
  "key11": "LTPwgbHocrMfQMRUaK6Yij7DXvncgd1rmFmL8yPgbY7WijGeAHEVUDXK96zJEjbE2LG7qe9SUJGyBk8WW7cXWK2",
  "key12": "2CbBMwix8UNpbwCzp4iqAuDCYM8u6mpdrufg6xKUX7WFwwL1rEb7m7Yng4fYVXeJcT1q7hSb7BxjoJJt9QehkDBy",
  "key13": "4ThcdvwWdcKgZ26tGwgyHBKMY1cM248BEH32UvpL95nQGUDWcFrJXSM6MyrpCRMweRHppRkE1pDSi4rnBAoVRTAv",
  "key14": "2wCNubkNAZHZdMpquKmSGaTG9Jqh395Qhc2BwR8FzCxscTHSwj2Bto4HCwzxrm2Cc3Lf74J3x8yWw4ocWxzuvQk7",
  "key15": "5yPHMMLowxcNsu3xTdyYK18psziQ3SsfFa2kjmUPfA17itxtU6BeJJXSJW3wLFQ8Eb9yftcny3S8spq3wiVm8xyt",
  "key16": "2ptnuLmKXkuBQzhBznLCd6VfqRXD7ZMHPTuNQvK3KBjmfoE3bxVciJsyH6G7fQHXUMdrALjFDSWKBayaKTeBujCu",
  "key17": "4CMXnt6mtBUakeFQ95DncgpLt7P5WwJw83cZxdMzPaqy8yZh7Mhu4nVYhcmBv5D4DxSUbgp16KmTvBrA84pKSbXr",
  "key18": "96uTHYVLWH2amX8yPDgtWXyVRYgc3vZcm6iWJ6gtzGynvNabEkqRDVdVjbWYFPB6VwAVsPYbKUsuSasUHmUjNCy",
  "key19": "qcxa2jmL4fbRAdSaCsGX1TcZLXmQwrrTfAPRRLK2XGrFYJsaR9jn7xXB9hvtYK4C4XE4x412cFcyZTdC3idLAri",
  "key20": "2SjYF8g8KQo2Tvq48KxA7rCcpfn7oC9WSMd6oXq4Q4gBRdbo2ArhKc9oFgfwVkx9zzEdTegu5XUk4WFBoF2drJSt",
  "key21": "4JickPUYkYTi4YN7ZJdcJ6TSpmdMhqXfA5PjPWCe9WtJ8YzLqCX9bdrttyLAhsfUxn2QEPfFoz1dLo7wo7CgEQWL",
  "key22": "4EQads8u2f7xKAztH7tARiyq5CfPEUXzwPQVw5JLnTNDEzUYDkC4suRMsGkAN3bnzDMTsyhzZEtCjhWMksZSqYNk",
  "key23": "59noNUtp39tGCcNYWsV3RoizvVBNJzzdUxNTqipDksxBppsSDPsXwLZ9DKp5fQFYfYf8LyuLGhxuwfiDTeg4NTYs",
  "key24": "3i9nRPMzZzYkaDCgwxpeD6Wdz4FDHKN99R7S8MxQsmhiB8TbfXg3qb7PPtXL7Su92X2zJWcJikdqYhxxBT3eRgr2",
  "key25": "2Dgf2PaJQaKXJUBHLB42sPoren3iadeCvHdgqVbwGTtcuUMyMketFiCPfkpS2xRiYLtSx4j9ZoffpCLsw9NsPvW",
  "key26": "3t43TFRpNWdmVxurmgVV3YFxSBtAVWQD8MctguyYmfGx1cph6C4fSKkntrEsiWXy12CvnMchWFHbJk93ANiDWK8g",
  "key27": "5aQhQjyzdf2gooVaRUZ46K9DpD1tdbtQTZ5FNhXh8kmYAbr6DdyBFoDvaZ5AgqxX16pLVKk2FcaS78AKXdm2RayK",
  "key28": "2Bsy36X4PdoYBZf4nBmygkptLHkMLuqJms8gRmGqcFg8HX6kSMfhGC1RjLS2dJzj5VXDfcsLLGiMUhLAZ24wmavH",
  "key29": "3TPbGRei66DfPbTs7WZCWLfPYUEiwjjTnQRixbJ9wMdibh2mPhcGEE3cyBcxDLxo5XWXe9otz4XnokVjSWStntXf",
  "key30": "4xGERHvDNgbpzGLqBG9KSnR1BjTjD2bbND8kQgv1d6PxRP194gymYsW6kKpZiNoZxwyXgxCzRQjhertUKnyjzP3o",
  "key31": "4DSc3jp2pDE12He2DsPkyNSsobiM82JzW2FMiktzqNxVWxMhoxEtAZoEjX1vGe1oUmiGNQDQCNc68fffMbZ2eBs1",
  "key32": "4vKheJUx9f9mDVDdTWMsdPqoerkfkMfMbzmX1dHe6tdpW6NjpWYgi1EhTRkMY4Gw25Nc5PpncSxoRKvm46aqtvS8",
  "key33": "5yvggjZ7XTJBJVAEd4fPKNvPXDtKik6Y7rTiKPLYx3J3XoW6JzQU72rG5TsnMsYToJxScemfa1udpxutC6GuC5Ma",
  "key34": "3A695SL5iuea3JrULWhg81SP81f9qkdmrxhYj9eHAZtJtp21dVhJNgaUatsFdPLWuVZwkXQSpBqnY9CojwQM5Q56",
  "key35": "4swwkfnMG8j9pesX2NG3RfanoBxVAx1igcMVzYHymYauujqe9BZHtrMGeQvDxmCgEDGAYLAW8yo5yep7hvstL9w2",
  "key36": "2qGErzHX56tCxw9S1QrGroYUdSYRpCTf4RPkBgsnBDRLZ8MkvU1zGYjtThRuwLu7w2iFRxv5giR1YatMDV1mC1JU",
  "key37": "2yTUVS3EYVxnuzW9azr2n8akGL672sAfwh3C7gRcTM9EwCUpmrxhWBAmTXcAF6SNHBkiJuvQLfESTGrLDDC2imxS",
  "key38": "34BqZfCzpGhMJ143Tk7iB4BRHLDjAx8urKtD1RfXy9oUpCMe2L68jhbutX3Zbg5mqjXt9Hmzd9b7XUN6uYj6ajP7",
  "key39": "2MGDJ6v8ZytUUNKqLPven1rnsFScmQfXDFsTXNAiZ6kuzThkVJd1wwbcXjCqYsHy7RN9iPEtZot6nsZ4uoRRRjp3",
  "key40": "4QCToWgwKteGbkxCX3nVzh4m6LzMHxECFMJXCTHs2WP7n3tEXoKLCgcFCWLDMsRndLxHdu7D9bmbcqiWKMftpePo",
  "key41": "2UA6kVuKC23miKEFsP9ibVx4SSV8ogsP8MGyogsotxb7tP2HJZzSNpf7j39v9PfyMxeqBJGPwBLX2a59ZJr7X5iz",
  "key42": "3368itjzZWjTVp9VA24oq56NU1RyrySumpxkvMJXrBEePky5DGQw1EHWuMh6SqveVUnUhteoPD4VrwHSXiPGqJVn",
  "key43": "W6mnpfNnDLcE8zbChSQ5JcvEcJWUHZQWp7R9S57dhoyV6TeTX1D5SzmUd74zSgPJHJqEMp2YzUuFwe83ztQn43y",
  "key44": "4NQn72cwMVwohWtfWsRnDcGaiXKvQvLeG7Ap9MDVbaXYfNPDdZEKPaFjuYCwTQ223bBW5F4JdCFsTJvg2Mi5k38n",
  "key45": "5Ba4d66ogY1ZkddyT4Fq3wrRnTofpttjgrpA79u9e8DGa8zWDwmFzyx4rzEQX2nifuvWL1huxSEkaGHf4jcd5QL",
  "key46": "4ht9ZfA1Qnn2cmRrc2vAx4UpeT9pUb8L9pxbRTZDVTi3EvNZaW3TruMyjpfJCv6QbRCefDDtzFqDPUAkYoiynrJJ",
  "key47": "2CpNSd8N1Wu2mBUsfjbahsbs4rLzsihHGp3wqZR8K1fDWhkeGNPbXK9SCCxQ9YpwjqxF88uTazfWU4Ta2XMDmbqc",
  "key48": "5cQN5e93YxzQLSNS2Po8BHM3mn1g9EHtPPgnY1sUfpUgmMWS28nMBQmaw7SiDcVq2TeKN3nRyoR36DQDcGYpMVWp",
  "key49": "53NSiHTqJzGqaY6x1QX4HNPQqtrcyBpDhGYFQApXauW5u2uS1knnkr2NHYH3LvoAdX8eJ8nddsc3r8duFN22Pu7M"
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
