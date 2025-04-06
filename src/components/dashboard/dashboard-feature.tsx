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
    "3SgnCRS3yd578132orskL5Xca7ak4H2ZAkYo7nuEA8dSXo7TwbXJ1PSzUTSrprbZSnphPJJBiMWkt9VisBNMohri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fnCPeBKem3zCoMdDRk1KQedQqjDFYWrHZLEAb1Mtt6b5BhsbYrTXJeuq4LXXDukjW3C4T2ZMbRuaTUuvpVBawLt",
  "key1": "2p4xUtUTA8A7fV9WHyrXjEoQy7WZJAVHabrud6s58ga98cVJaLgK2mv5noFhu2jrscPsAYgKVmwbFmR14EXVvxos",
  "key2": "66A4eJpCo3HcPezP2fDP28X3VqCB9oFJ4ja4BhJB9sHNBg7dQc92gGt7NNfFdGMmsAPYvu5Rnp92qX9bwTPMWQTS",
  "key3": "2PMT9N4WjzvL53gFdrFSxcNEtQazqN1qPPx87FxiNTGrtXGed6U7Vgu2uFmtM95sDmRDgTfJTAHGZWDFbJ8LVnQJ",
  "key4": "5Dj1CHRvZKY6bFBgLnpLoiSACXoiMz7MmszMjcjQxTFSMcpxwRsbrCm2Nyvv6pGBYNG1C83Xh8FwfiH2gWFiDhw9",
  "key5": "crJ61HrTRFSxkj6HCFdqVdfMBujrHnWDU9eZCP9wZyPe4kmCSsf9QbMqMDEwWrFEqNZjj2JpZibTy243fZi5747",
  "key6": "4DVE9DhHH4nBZvsHq2EJDh93gZo7RwxmS21eEUhojQLJeNTEWKZjzy3d4eRD7Sg1SmC3cYEnDiWjNbeNQT2e7r7K",
  "key7": "a9sqVo8PX3TvPzXdqCzPzfa2Hdy5xky3rHTipuxXQ7KzUceft4L7Yfn4tgUKBMpSLX4nhRSv3bGiFgYZi31WjCb",
  "key8": "5czGCB4m9nCdzRf4Mn9saSh4L3x5rZTHmmhj5yd8xfsnYDGVx4k3XwRno8qXpZ8QZ8ifcncHZXooeFV5EWaZoRxj",
  "key9": "4az82zVVdZiY5oRphwu3b3AS2wLtoGTsP7LSh3WRTYafroSH1Q5AQUj37qZbZQw5v14tt1MLsUjq39d7TfDXvK9H",
  "key10": "jxi1YipuLoSxZ3s39TVF1thtRwnzsQJ7wVxLFUif1trhLtkqK577jqRfU3uuK7wbmjqJRb7RWXZdBSgbRHHVxnK",
  "key11": "4KNiDuQp12cdRAnbfVgottNFsgfQf1meSdtjP7feQeHLodt3f8z6gNFtvSd1yMbFRyEpXm6BBYsRErSz2eUSBXVV",
  "key12": "2uYdJ3PDpuEECoduLHjXAq4KReJjcYu3Pqy74zro4erHDyjHmAbPWy6t4jqdRZFowT3R9EcB3sVoV2Ly4M9ugfwp",
  "key13": "2eHW5GLtBVKCqxJWWKUXFjy4zAtwjZox89FMKWofkii8eWtfPdnBSeWMVk4N7kyd6HDgwdoHxzm2yMA1JuDTn3r7",
  "key14": "2SVX4Qfk2SBe96KLB1YJpdQpDMGqwhcptSoR5sUjfCLKosFTrBCkRBe43DSR6LX1k7VxXkJyLTxJq2cyds1V3NeH",
  "key15": "5mF7K49vXNyEwLxZ4uLHCqkbp94mmcn2TirTwHGAwLjyDQgyFjso69S7nuJk3b3UbEz1jipashNexX51PMLUCyAe",
  "key16": "3VnULEiqUNx9oYc1DR3Pi64h3kqkPy4DFPCnALWi8Hdcm3FdfUi9SDGf52nrg2B8YfbJe1VxAkiUms2U7Ey269ue",
  "key17": "27SMguzMRt1Rr26TBD9WgnK8MQ5VKUzwRokd3VWs1hW3r53SFViXzU76frtfgoHvZAkc2dBoRNsnWAaX2jtujcqj",
  "key18": "2kMRJg3mtWr9vq5TLhHfsxEemP7rNXWU9Rjscv6xFsGUPyjZcGqHG2YixGsoyPm8DMGjxahYyQrjuXZZoaUtuXf5",
  "key19": "w1Wf76z2Na5kUfARKrNYMNEPhMzqmstrbFDsLxF6QfvkPzSUj7WVR6UAUMMiN85kELENvtCkmLyUFFH7P6AKKoo",
  "key20": "65FLQnxd2RiThhSxBLjQVWUNRffsAVcuEs761u4GEABMAzVhpZwUvPSXSbfTNY9NmH86BG9qLqmVPnczxSCwBTf7",
  "key21": "5oPsEXUFPyMbUNgDci1iaeRGVd1deVYdBwmF8jaXvxPtV1vAmqRxKxpiRKavPETSGUGLwPFhgyKjkXYac24gZbi1",
  "key22": "5H9VYKj3Q7KrkCDj3f8qCWvnXtkhUqeQxw3VZ57hqvzSAv8Pg3Fs8b24mrQPARn2EeAaf5ZWrApUBLGxavEGpu3o",
  "key23": "4sVsD3HoP9FNG1YVmWnbyUTt9ATWaQGJ11VUkigA51Yi1tHVZwGYoHJQfaNdNdoRhVvxAWASmb4d4ibeBHGiskfQ",
  "key24": "5A9L1AaCzHC4zWtHbriGqN3hBRVMMLzsfAwkcoUVthB2XJC8ScWANSiLijkr1fDwziwxFQ7d3AsZU6mzT4TnrDvZ",
  "key25": "4x2SNdePag2rt1xPA5suZ2297P1NCLqCFHK7CZDYAVBeZHTDNfc7L939c5pXzzi8CQv2La5DYGEqkqu6Tz2g597Z",
  "key26": "RaHdRT5ZYXXZB3mHuJKB6ox1N8kTEoaXcLzz1QozaS6KR4Aq3rbrpqeQEpwckVrYFTgf62ZoUjMo9EBRiufH6zv",
  "key27": "2UvXwQmwVXtYCdcHBKmDV98xr9n6dwc6PrYWqaj4A61zviLajDjk2bZSM7R8pZt42UJf4yUnJHuQoRtbfwhrFWPw",
  "key28": "66QkYZ69sLsG3ZpbTecmecfXCEDLxzfBxdFKydmhtrTn8NjMGKyMWWkd5sErtNxRKUMN7WsSpWKEbJxUzL8YfST1",
  "key29": "3bDK7G5PpySP7dtpBuYRSLBaBQG83FrggXsKNeX7XVH1jjFSpXgqKa4QmUmJFbjP9Y3c4KpYDCsd7K3had695X1y",
  "key30": "2Ayb8WjgkrYo3w96BXz4HNyqPvGrzj3cFWbX2opMJLd1BsR7eMWhLmTvEaijsUEcVWZpMWxxeyDrc6Kcvoy5WkjB",
  "key31": "21L8Korgg9jffDvpt5czpPZiuisA9kbubMvExkqe4kum6rdsWdKj4YEmADWzcXztpUYKhYQuUyEYzd2gvEcCD4Pm",
  "key32": "4dhVjP6Ch2zy21WXr63u3QkwF8bxgUrfZ4nizJnyKhMkR3VzjYsjH1iPnms3hnowXW8wHE2MjzwUsSo6PVsSooJF",
  "key33": "Kh5DBRVuYts9vhs8Uc18YUGH7oL5vv9KdJ4nCNDCjpjhLjNjvBhLqevHKaqVTLRDJHXxkpA9R6wXXWTiWUe63KP",
  "key34": "2tU5LPxx6h1VVqMiYwJnrVsQXAPAcTzBJGjfNzXAr9JWUUJfYXTe2UwQhGEYj3mgvGRVTtEQTcrAifGADfpxy98h",
  "key35": "3Dinno4GaXpZiKVbQMX8kMdvG1NVvPq6zQqfw1WASRT8kFnPkY8zXxbp565g8RJCgDVR7Pe9PJLneV2ikHpLVz6c",
  "key36": "3295eKazjqSV7TFR4L8XdyhAbCwffV5HGN7CVNRp7oKG2sso7eK1J2hGcdznBEb5dCcqHMcXPZdUUQTAAp9qWU9",
  "key37": "39c55hsH7wG5EDhufYj9vphjjEC2YLCa1DqbZst2vqHTXGjqhtim6gkFtQshX3dkxsvArDqFpkJadGBEpzi5HXxm",
  "key38": "3xX9Ysk6MoQRUB95nzYqXTbJ9qiP8TNmCmwtb57xh27fM7wz7Wo649Bt78zaRTMy7bUKbLRQ7mi2DbGuuKumdbtJ",
  "key39": "cbacnJoqank5v3FyM8VCRtaUj8pG3u5CymujWTor1FqtevDXnTbJaMLVQeq7uFBeigvuc35X6wyhfg8ni8fddTV"
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
