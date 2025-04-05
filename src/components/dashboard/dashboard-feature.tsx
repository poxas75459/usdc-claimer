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
    "2CUJz71nuHaWgEX9z1Z7Tm6ZVN4iEtHs2X9bkG6H9aaxWUHVBQTopj76EyiEQS3mW1TazoBgyceD1ZTHRgaXtC1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFKdSqiDh95Up2DAmSt5wxACc7hBBx4n7kybnVwmD5GSQcwwrQZUjkn65ozUqfiY69GK8k8dS5vgZL9mKroHM5B",
  "key1": "5s24mHDVuv2YvSCLTLBc1iGBAHmiAGYec7HSR2r44h7xCPfhQd9ELqmChjyaPULYDu3Gu2i4BW4JjdYFP1W5S5yi",
  "key2": "44ipoaapUfdW28M87YPRgNjvpx9Hu7adDsmfaXFk9yzdJzx1g7ZMPVeDpyRLorVZigkg31rTJeT9EQGrYe4ZAThX",
  "key3": "66AY6eE3Pqb4owku1SeWXYtZ1J8RnXtPeQmfZeeCkqha21DZoUKC1mGLoXsbJd5V2NiH2RwtGcGDfAXbwwZtBKKK",
  "key4": "3WGkFMAUX1Yf9FihztShqesHyhjoymKviykszWxcZ8R7n8xBvMWygRCfbaBvGXWQn3JaboEnLiHiZ8jFrQAFDeyk",
  "key5": "5m2Sfz4Cwz9ejZUp4asdEJ4orCbR9NAM2uzvvDgkx9JcZXdSKF46GmbHztozquge8v1B3J92sg7651fa7XKkKtRd",
  "key6": "5hwxidTus5LwfU1F6SZHwUY1foXMuDGmtW5STnb4VpgkJpWPHf1X2QDwdWaAJ35Sxwc7kyoExrNu1VsMnDperbvS",
  "key7": "2bASiJ1Xb984nD8MH1GKco14G9Qg9PDVUk9FB1xE7z6qy9t1Kz1Y96t8SrpYJwDbLcUHEeggR5pZEBHawxh9bFLG",
  "key8": "4Ks1ahF8x5q4Bi1vqKg3oRJtfE7Es979Sh33vhY8PzauNRn1ctLvHyvRFbZGco4HoP5QHpkVStBuegF1fSeS6Vhj",
  "key9": "4Qe6VSpUL6TKqDcdHBdqcXonpgXVA97p1Dk9uHh2cJhEASYnpT9gTTZAqdmMzSzMskNo3hLwfJLwGUndnFCEcM3F",
  "key10": "3X3JisoKWt2zEUffqg1YQH6GfZo58RvgC9kPLPAocqFn87MCvhL4cTBJYtHHixCphaCmHCESyH11aoCHk97jm8os",
  "key11": "zzYkFHD2UJ6r66tL9CdgkDKaYdSdTT3WFwmuzasCU84WESYR8tsp6RhGhGygm4soF1y4BQgj9AkYZtpPBbdXq61",
  "key12": "4QrVxRoQfwuc5X3kAW7i9Ha3cwa3HtLKGQhcypf4TJUvVT7AFKU76A5FbUa4Qx5qWjTyB8Y8RUTh3DYyXXbBcpLF",
  "key13": "4nrf363Ai7Xu3vJNHNTm9a9zKUEnVhuPTCsfaa4n3Sgyeek4XWuDtrDaT6A6JZwyuoVCgawK9j1Mednbm1qPdSi2",
  "key14": "Sfy89nzRg1Jrcg25Zd7nChoz8D22wmz2qZhxmS7p3MNJBS7dEQvFZboZgwyJ6JMg4zYoQ36GZz98VAq3zBRQywb",
  "key15": "gNibiK7BhbSUW3GVfeiuigXeMPxapiW9eCrStdnNScpjJBo1jpyeVt6AfJQi2ujnyPFGoTFkvjpQphBVuWPKCrr",
  "key16": "4UJaXX8RpogrTn5J4PHpVmbQqyxMo9RvcvZ6zXcPXg5urHKNePzvSNMvxWHFRJ696qCR3BViFuy7gYsurqWpsL6Q",
  "key17": "5M9FWqj4hkonknH6yML2D5TPsYHNVB4YfLUhrnHVJd81ZbpCPQk4j2ycjf5nXjQXc4gyqRbqbiLuktNJd2vcPysA",
  "key18": "35BhLZAXBH5tEtbV4abdrChxBCGnTGdmfbica9nb6Ar4s5whhEPYEa4NsktHiEJFoAY51C6hz78sWLzk9bGDHBMe",
  "key19": "UAVqAtZcSGm4euVm6UUpQ7RThE3NMo6X591tefYfntBDk3mWLJchUovr2PW8fFGP87pNnEveNZZjmHRnHjfxX7w",
  "key20": "54JyBbfrFnBByQJFTFt59SyWGXQ7Fgu1pPp5oa9W1H4fuduy2e88uq7Axzowxakpetpu614gc1ZgTvcG5e5M6cCA",
  "key21": "2vJWjjtSnHcYNDt9feetF3deWt6v1HUjBE7192BiKRrVcWUAKv8G21J21FQq7X8R8SKM6H6VmeDbaPg1JXWBouAx",
  "key22": "4rQRzeUh3mrMbBy36v3Ep4g1KjpzZCqLByynuevAtXAuzVnhUWa8xZMwwHaVxgFoA6YQsi8bzQzAoNHF4FGtW2g2",
  "key23": "yhPcegnFx1vcm6pZjNUmq5jjhPJ8ibLBvEJfsiEugYEsCH61AGwnH8oX7AqkXkZg84dNiTRaHMEWuHkzAvSUBCg",
  "key24": "x87eT3uS5QcjkoGfCRJuz8VTYpBTWPoT7qtunNDiL7o7rYX9oPHdkbnj2BrCMKbKhwGLUgV83B67tA31Pi5ppFV",
  "key25": "3RBN2nsPZ3kwfEf5t1XbZh9ipeNNM2y5rQtJPZiugo9NmqoXfq2WVtr6iNzreivxHpZ1NnYo7ExYnGnWBEB5Kebf",
  "key26": "nWay6uZVHnFX7yfZQCZKdfYR2peijrQbyXcFGXKi4MuSXEdKJUv3BFwxFbVWoPDDL5iLC8WgcMhdCLPVfXLc6fA",
  "key27": "3mjexMUakjvKQArWuwSturnuWSTqJLmqYeF48NMuxKHfrzHTDSuL5gQLWn7N5jzeywUyshqbpXprE4oNMKi8ZWkm",
  "key28": "4HBoE98b1bSVnQmJq6LF2kRLAEbaXnoQoEzHoxCqv1HYgUjUeba2K9UWWtvtrSJXoLXYRsgQWSd4KyjAAaJFT3iy",
  "key29": "4dBy5gaQ6AzkHm6pUoR2tHHxQCLNjZBodSGuPYuzcWR3CJQy9hZBtkLwntLsegUpbR7FG2YxJnVkKtME2cBmcSjs",
  "key30": "5jhC2kftXNhTT5zWqaxKq3ZJ1BoTvdrb51hodv91T5P47yVqUce8XhyfUwwyfF88LrCnb3879KTzLEeX9GZBv2SV",
  "key31": "b5NxYwh2qucxjmJBmREfHzHXweCiibksn1JUKMn9z6RiopTQDSHuQrErf3rT835QZ3MTpAWSrcxnqSRLCpKpbyb",
  "key32": "57iJjr2NPe7bv6bRuUCu35PojaGF4Yf22GKwfLXtYNcvYxQZ6uHWD69ERfGjoqCNKnjJGEokzwQHXZXrujVj7ZJe",
  "key33": "36RaD8eJXXnftfUcef76T6qK5Bdmrc9jvmAvyxwuZZraRSt3aZqduH5wB6bBWUfLFfMFUPbzyA4ns99GiQGBdmma",
  "key34": "pMN78q8vWkn7S145oxc9xAo9JP58RtF3KtN8UtWn4Wczr9pPjKrdnZqdDF5Jr3Sma1GaNCBvD8PRu3C53J5Yziv",
  "key35": "5FQTRAXEpzo6qc7fNmyFE43hjH21UeN1rRxWZcjizSC9HZ61CucHiCfPbCB8cg7Nw4kFmuhDyGbCBADYPPKBoPah",
  "key36": "rXsmNa2z69Yk3qEATuyDFkPCPByyZARTN7PWKjoNV2LXF8eDDZJ8YJuZLsBTXRDrHHy5jcYUnpznKwcwDGj6TJL",
  "key37": "2SUneS4gKZF6KVX2yogJnoWAxXWoovi9bwSPDURpCmvjPVaKA9pQj5VtZ4Ptw9YRTt4HatM78TTQ7jJk6MuPqzQZ",
  "key38": "32Yo1WzAuJ59a2huxiWSXTEYbWj15uqxWup3wYvHETC4CX9pwJE4WmQJYJEoHotFa5H7WaeWzAcpNxNC5bfWdSeZ",
  "key39": "2bMfKg6u6z7V7i9Vj4Xy2G1CPNmdG4J4c5aSthdBbKVBgNYM95hT9XHNFT1FqBpU8Ey2NELn2Kq7XgLXUZKnuCV9",
  "key40": "amd96Sen6eNyGruNYJ5h68dh5kWNXEhrqW7MALzZTDrTw5Gm46NJFJum5QRrs1VdVFz48KpRr1jDDhSa4GuoHnB",
  "key41": "2thJ7FXeriok1596o2satmVdcHF5bYCNLrUeNxXkxEDEDnR23XLfaupGoLFQCwPyQs1oyEToANm1RPMBH4eTTatc",
  "key42": "5nxPvEwsJsjdxHbt3a4CtqjDNgZH1EZeR8fzoDkRdbQ8NAKFDwFFsh1XyCpyuEyC6MzLxGei9A4fFMJRRrcmiWD8",
  "key43": "5xYZ77AtRFpiZgkaoq5wUZMzSi17V4YU3crpeE8Ranz7rG9szmUwYiaREGxDY7SWwpfcY7bxmf9dooDcLt73RMur",
  "key44": "3XktNzMDqaUcEZxc9pbXhR4JbdQqKyjRnnEYEkm4ARR23Ncj1xrAhPxDq7vMxG9Tnpj9GRKMyFMqiVD5cMtDBaSX",
  "key45": "2DK6KrVHJrHd3fuPoYNSptuQMT4wRXaGCdAvsqTYLYr4R5Bb73mS1xe1miwApg495gwviitKjmryG4Wkd77RjXYb",
  "key46": "4K6YD79f32eojxvMtBoYseQFL42mddSECu4S3iBXDReJGrZJ1AfchAqQVVMMT7YPW3dk7bDfdcMtiVhY9jDdMvZg",
  "key47": "iR4KAiktxgTkUzMGCpSvPzernHK8DSZ4KzpeCF7Ttf44wFuHbxd8ozJzkne4cjM6AsSvoC588xoQLjntAkLniqp",
  "key48": "3HFyzPSa4vQBzA8rHovFGvdz1cZsHqwYQStA5rrvHUJWCFU2N1uW4TSBLqDUT98PYjjK9oiWQPqao1D6PxzfrRs1"
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
