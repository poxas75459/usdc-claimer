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
    "2e2tTU6DWBKhNftQRKKGWWuyWEktb1fAWtQeF7z8zRgu6aaFSq1YCLnVopaEiRHutSDiNi4pvsmGqFTVk9DDEsoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccLV48gMrmjSv2TfD2g2K6osYrruTTwWc3FJcML8ewJKZY8f983N8EKPzqJi8rLy2N3ego5s2c86VsU4cqZk3ks",
  "key1": "39aSteN4ruVw933rtypZdqfjiL15d6U8f78Jckc36o5rQxkZjbnz9pQj4mskL1g4UbMcorA5LnkQSxz3h3XNYYJF",
  "key2": "2diBBm9hwaMC4HxTQ2TzXPcKfN9C4hUwV8C3yw6nLdNiu7sj1gQ3nA882PCxTkKfcrsRARXkQi9FdNV5QHNVfBrG",
  "key3": "5zNwkZz54kE4MNu2CdxrVi6VTxeU2udj5PYXTTezBMUqJmiBKU38qSN54bCrT2Yg7GrZDrbHKuNnJYzJUL1JHW7i",
  "key4": "5uozMe9w7U5SdASLWdeSEuiW7GmoqwxEaqmYCWoQoifBCwRU1QstnoENHaPTci1xghCE4uNWrFmVoXJ9EvVovhVT",
  "key5": "5esdjdMFMYgJRRqkx7Fr3jxbk6f7Z2L2XvvruueGK6Ef5fbsFYn973XbpBQ6zcjnKHw49BgmoNVQozBVR66Xk3Lj",
  "key6": "2WQaskRjq51Bu5LeVxJUJG7upgyEHRN5s64NxWmGfh3V25a9U3wgqz5JAoRWU1PuPHQgQGfbM2FD4fWGzMoowA9Y",
  "key7": "3js9wDoz7zGwPLh52xMtgGFuVMF1PLEfDMCRMMguNjMcG3DNZwqFn15Ny7LJFqswn4G5GUCrczazLq2vCEQSMpue",
  "key8": "53Y7tdhnqpQmP5Gja8QRfbZ7JdtYeq2ebcBaBqjVsdP66ibMR7tSn46CpiRX6jeiT1UFjV9o2rNuNTtBfgPwesTn",
  "key9": "5crh5ZKvV3P3Sbu8Ue2xnJLXaBLrYbSmEkLGN4Wnb9F8J44RGgcEtmgk99RQyjgJT1tE25UfSs53RRM1nniKisKB",
  "key10": "3uR2XoxNx94HGvh2mrsN6o1Qs78vtT8dbpA6nGF5M97EUoPmHGGj7hs5YEfWajq6tEQTCQbwrZ7rsm8pNf5izzo5",
  "key11": "3xyqYy3d2XW7suATVdRRPvrXMBd8zokTHK2Aa5TEyhcfsxLsMqC3XJeifkFSu9AxBs6bYtPXSdARzvvkdFFj6kG7",
  "key12": "2t5a1ZP3qX6tcCvN6PXgceYG9YkxrwHWGwcUhHfjT6mUwPdoMXQSq4V5c4t6h6BKzzM7PsixY8xhprtBTwPy73fh",
  "key13": "27WFLthT6ayuvqr9d9wQx6UcP74LPh9EMa9yKJ1phUgH5kj5L1Gv3Ap4AH7GHsNBXvsv1FpHbMcVgDzgYAwJw9gJ",
  "key14": "5V2z4BYuM5GherFudK7s8orsWyLETS9RBAGZugbehcPkwhofuGuSUaVUAwCXnV8PDgi8sTnGYENktGanqEYSQ6sk",
  "key15": "2mYuwqZAAZerkXh1bU7aQwixmvNYAwa9ATCVb8S8YvJbJ4DPgBw9UNSYCZxu4dci5N2qvcsw24ZePuUBdiiiYa8G",
  "key16": "4fju4yBXgyg2fFrNdsBJ5nHcJYwDwNp5xvAowGKoGuSajBENABnxGjF8wfDrRiDhUWswpfYA4nVN7avfs1E2T6BK",
  "key17": "5dH9RM7dp5st7uWYQtN6QtWG4Z8va92mNnjnaZXxJqPNQhyNcXS4KyZzTvq8wEQuvQuHon7yQ34pqo1Fs9woXwSF",
  "key18": "9czFikzfLKAeouzAjSgS4uQqF8H743KM6zderDRKksyKDGN9gLrwbmE5pMr6jyiJvUscm2i7fGM3A6MAUv5HeKf",
  "key19": "62updKarkoEuBiCzF44R6NmnQ7fvpkXP6nF1GFz8goCjd642aqdtDvMPi4p6JiASrZ1xdKnfm6eBke6QxKTx7CYn",
  "key20": "62GtAnHgESTANNqYe8xZBbUYP8GPqZpGAqNKCqAuVPTSD4a12otaJZm2GRCRs3B2QH4F18NbbpeWLTunvJCPMz1Q",
  "key21": "5zG8qxC9UWosPEE8CsyGRV7Ffis5RygMB79RWL4mishLkwmpmpizhrxQghK1msoHCrBXisYRM1fvRfouyKqW8MCQ",
  "key22": "tVTDuzDXJD4vqxiaCVkJJq6nLr5ugnFXyKXJ78h4C9KWvfg1GaLWBPhkLYDMm1feE48Ptu45Q9Z26UDPL1XNup1",
  "key23": "3khJo6qY6VxRsGXAzXqQB4n1cAZd3ng7tTmfvbc6AnDg1o1owwYZ6rbSYUWxT5khMxVitTJ1tdALB5nAH2QKzD8G",
  "key24": "3cUixwVQcy3BxNrPVsiQRcvYWRNzVmvg5kQruj1P6eQ7E7z47ZdPkefuMPEBqHWxUjF4PPSvEEKD2ht7QNDwNA8n",
  "key25": "TK98Af6CWpBF46HRp8Qi57CWzMxK9oRv6sr21w4BkCUP3Se7LYeYMeXZwe1n5bug2PSLmqmcugP1KMmRXZ6aM19",
  "key26": "XfmykuiYKTWjMMjqS7cDuJjzNA3CMSyup6PsaNWaaAUc3DVXYPU3YaFwU85YUNCixHsrhrXHU6CyzLWHEeYP774",
  "key27": "5VCNnBsH9TeQEJZS9fiqqvQ9eQ2bk5TcXzCW2PjioUMqMzdwD8DasN9UN66N3dtp6HGKyQpXKdzoo5ogmchp4ubN",
  "key28": "32nLyuZpytryUtXC6yXJBPdSe6QWQbLzqBPCH5Cg8oWjZW4hWHz8Hkt4KSRKfyoa3QNGThRaGWPo5rAspWKcgAue",
  "key29": "39rKQFAwgaZbQoKxpFpJjxie1dH17cfezdMjGnEUNej741mxdnPnVQ2XpWeHpoT93vcjNx3Pta8MhYabFrU5i3mX",
  "key30": "61iZP2To8GKJc5Fq2mD8R5n8qq8eP5q2CaiTMkYENV8MY99hXas9iQz3FzgT8usgSzmdMMUjLmQrXs6YVawar5yj",
  "key31": "5zCAf29izPtJsgdnygAyQyqn9Kch8rZAKHS7mm1Qjs3jK6u4uKNjM8zh7P3F51jQUUWk1Lqv5qjiktvZbdCZTnR9",
  "key32": "5wUaGzMVBR8refrRgs3FPmyzxg3Y4Q8Mea6NgSCHwiuQ96ujSnjPtTLWxi1LnMTt8THc72TfvUjo5TGQsSHLqPj6",
  "key33": "U4ktkSy5vafXqQkW8QWDow8EWPdccJdVqB3qVin9C4sHEt3vaT9Vbb3vKfihSvHNSZoULRussiUVUignUEMkB6d",
  "key34": "2mQSD9kATq3wexgARNNgsbTWod617fWZLssis6WnhfBsZwxqsV939r8ian6CqmR4sMkzLTy2VrucPZ7X8MP4hqxq",
  "key35": "EFfEXNye3xiDt6h4eEnBYTMNZrSSK2659avKNu734a1v3cHChh7zAUmTxmPQ9XHCip9njnDp3xwypkWyjVQSzHG",
  "key36": "G77kQbQQXLWGVdFrxec7uBJYQi4o1LZhVg3NqnX6MTDcZ2emBxF5dsbTe6c7Qmn97tRvCmHRzARguCA71jA1ney",
  "key37": "4poXRVjcLKu66j4U5BMQKUVsMDVGL49X4qixVvuWTVGoKb3JpoXBRRqdxBcRA4XA6YqmY1QMgabsrHmW1FMiAMjg",
  "key38": "3ETTRt3Hwgu4wBtTtka5p69fmRW9saYdiUPCNWnEh9hcbbtvHWdGLaf5EnBH1pdGDmQXWvnB3S56B5ake8akAyzt",
  "key39": "2rQh3gifsCMS4JjrYVzBnATGtUCJpciaxVRsrQwWxnzazLJZXaSwCdYR6oQiwmQFUzHtupRxUECe5qGae2yCm9cP",
  "key40": "4QvsXgCB2TU46eULXSfQWQG4kg8vLzV1YbTAUxsm4EsJop1GMpoBU2i46uVe1raovwjWFGz7zsHhRY1NU7QWuW82",
  "key41": "hWxAnEWZZbrfybpfhNZ6J2Y6CLztbxi1Y3whnGsckStWkgcM8yGxSxPRaRtNxGb3iN7sqL7tNCER5mFE6fcChAR"
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
