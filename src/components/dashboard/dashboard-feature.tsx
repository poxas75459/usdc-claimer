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
    "2rHXdbuUpPw3v3VgwZ5zbqKqeX8dX6MtrXijfQFMJ8JwLwzEtHuVEU6FVS5ZizemTjyjFdMafEBcUYodw32hn3Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tz1cCejtfZqwitAS5pzt9Vj5eiqq9Z7yFCm8xyRFcGWqZ1JNfXaufLP5Hao6LPQFYKwCNtspxG2nKHsRWarw5ck",
  "key1": "4zZYRqaofcX27EREnEZBFtz7P6yQX1ywhkianH1Ct58VuS19n4NR5XiwefoR7wwtyBw7epRUvpchjWQ4tqtuQ4rw",
  "key2": "31MfGbCxTp4XY2LsxQsSGadu3z69135LFQ7nJmzig5CW2NyNz15TTT2YMWDwexkDWAEwEvGt1rwBe54JfXoPs8he",
  "key3": "nWQpieookdc7JBsYYspsXn754LA6xoBkA9GEXNDBQp4pno3pKfmRhUTbgSx8fb2K148rUErNe4gcCokZzTTNQrA",
  "key4": "3qK1ivCd9Zn5rhUVKiGdWN5h5AQorJbuP5u3Rq7NTED7sZFRiTR94vY7vadXZpy13cAzNMz9BGos8xv9qyFpK9px",
  "key5": "5euG2QfgmfXDWZeyXoAiSfad2zhtUC7AZwRFv1VyR2BsDKgNkURQekYeFEptKUm4rWZPSuZGU8g2AJ4nBERaAFAS",
  "key6": "4Smt5cs3aj1tTbB2ED2vf2i8ggdRQxDeBFhRQkDpfasr3U7d5qHxKzxdpJ7KHA4GLo6qcCQCfJaiDD4z2LcTCci7",
  "key7": "2t7kK7x3DRg3L1Rhe3VDk5FWC8spaL2jHLPtLVAMRVvZeiqm4DnjjzNBLBhkm5otugAscLMdJFLLThjZYNFxwPkY",
  "key8": "5p5gWWmfrhkUDV96Efn7VfyEYGMWAwrB1PGkC7KU7G8BVBcGe7eRRciT2vfp6C68p9xseMg1uiwwaXjUJwAjMzcA",
  "key9": "3hCwRmtv78ieFy6fx9aHQWebx7WmLZecdKxt1Mx7UznjJAW2P8pmzaokLzCPAmAXqFN3E1LEawhdpb81e1nijfWE",
  "key10": "3MCrNMjPQKF38tubj3c8hzXHFdzUfD3Gdti5T9YR5KWafga6LjVz6PcLYpaRQvr95L2J6sAvxqfcueU9d1gNcVg1",
  "key11": "3Pk8WgwCTB7yGGHCRu46eo7L873413hHvg2HJcp5Kny2eiwZWQxQH1bQVAisEiyRgujU1VPfYRLnJP7tRgFDSyf6",
  "key12": "3b69K4TvfSJ62EZjGEb24b3mJG3oKcYrPZsKv4JUvTVvpGsZpHtb9j6uF99pJoRQo4huL9bUqDPuSGPLnbaHYzpu",
  "key13": "5HXXBJ4x63Yi5SEZ6QCpt7JfubnDzwS8o6DnE6gnjcJVgGzDqbCPUJvQzgt16NQcUN2T6G4WMmXijjzLoXVvQPsZ",
  "key14": "5JhxwGRQzE2bv5qQPUhYxj6RUE3nTikmSypgENHo69GN94Jhd8kW1bb2hmLuaBYkYr4yrJGLJAVSLEArDeaAFifw",
  "key15": "3qvNodfLaJTCPzon14PNTFp6pBjuXQsTGRRAGamPGqEhHbSs1iUhtX8bCUZ4Fwno3gFKwCeARuMCa68tYDCUfcc",
  "key16": "G9g4VDt2ndeyDxp5vvv6JnA5LEwzzQaVAD2UpjVd7z7ZF4nUiBU17Rnq9z4fuJFjVP3RasrgaWrjSUWmn1Tt2UV",
  "key17": "A4Q3FGTvebXKfohaUmXV7EmEhzC2hUSgwiqfcWRw7dk9BDeqNap418qKWKT3PGnsXjvYfa5sRUEsevJS2Axk9hV",
  "key18": "6kV4LfoPde7FCrjzVjrKD7MKLbbebegBNrgCzrV1g9n7oHYXc7D9awDjzPvVn2WscXp4Fxgkeju4oh4oYkfT3ks",
  "key19": "4MmHWWv4KActK3Zs2vGXyAAS9XoDcG5DuLAiD1ZAGx1NR7czCRskVvF8SpqodCHEsQHo4GUjQ3BMeFPpR8cpzzFy",
  "key20": "3AbUp73sX8wodByDQRxDAgpLh5Xtxkf4bs3YwmecD9k5b94uurdSpYLawN5G8JwBMBCmQc2k9Zz5yxUd7ugWQREV",
  "key21": "3146LbAaFFANuuDkysgUSmcPppQYjHTLtqCsSHabRicYadFZpZJANUfg8gZNPGR3bQyR4i2J9P1XiHr8w9PKWFg5",
  "key22": "4Z7ZTwWBBvcgLtuHnmAzYhbWDpsYE4mZHfYY15hChq45vyTeL1FpCW3eX47NVWQYPSrZm9xgmfwX6ui1k7UQd1cX",
  "key23": "55tacsJCvMNPE7UxV2HNmkz9BfiXMgE7ThoGQaYksgHGNNEy3UY5m4najMtSdbtS3yAHoSKPz1NnT2os8CNwMVAr",
  "key24": "57XhYn4UAGaqAt1ik5wmNZgq57yC8Akndv8VSEo388NgqrUxkFZvYqCxiR11sQKrjXaaYtj4DMLUKr3rhFTxco6c",
  "key25": "ddjYF8DyoTVgaA9Mn9H8nQWy5wbjU7j8qoieMxpmaNS7U8zfGq8vvqaW1FW5ut6kbQhJr8pc4xfGmhvYgQweap3",
  "key26": "5a1HrrWo9Pg4hJU8RGVv9x6Jjf986ibJc2koZp1CxeaYowxPccfLKZ8invCZsk3GsYiGDd4CFJFMiPHpXoBZ126",
  "key27": "3EQZje1CyGtt4hegGkQ7FeaUJTs3Q8Liv6W53GdSQwbz87gvSG3q2tsMN3TE6baYWYvNRTK8hAYA6wxjkc5nz7or",
  "key28": "3Rsx1iRi1SuhqByCYNjkfeV6TGaYeGoGJ2UPF3BNkCayyb1MXng6xFAxBsdJJXmxJyxnp3gPEtj4smup7KaYgDNR",
  "key29": "3LzvJJYNYXyPZ1cAcuc28e3KGUwVJQbcWiJRPLuDr7FsMv1uskrWRsxvwgKVxvXBPQQetSGmJyop2gcmYEwnk6Ev",
  "key30": "45qJt7X7AMqDHPCxGQrKfrAvMhNRwQBFN7BLHBcb3jEb9yLxogYHiHaGnwCRdVZG32pZEtBqwR2V2QbHGwTR8Rgw",
  "key31": "3QaHArmUiztMjynBt1WxhwA8sx3ng9fvWxvXkdyvjLf6pJNBXy5bRgz2x43hJNP2dKhWmA6nMwkbiiKEEjoMz9Nv",
  "key32": "4dDfSeMEBdZ76Tj1U5FugNA4s3fNamj5X4xUnagY6j6rZkFp1RopLEL8FNfmC6Qss9QYQUxkYThvaFSXXnrB4H7y",
  "key33": "4y6h9HEVzN8qQuQ81eg5CHA3UA81JZi2hxCaqx6bfve643deUzbj1Q3gALsbba2d13rgqYuwm5cd7JiejYV9qaqF",
  "key34": "5nH5AhgkFvXQRsisnUuvzwyheTW7pHgDr8K8CCyCTkXbbuebFCvTYWZL3zNCxgm8zMTre9hLN4N2AMAhY2W87vui",
  "key35": "43ANerWJ9H6qWLJK3jLiRmSAZTrHYwphTSfdJb8W6Ub636RXsAJ8v1mQMwHfzCS3AEeThYC3pA96j2PDSsxSReGf",
  "key36": "34uaBKWK7yVwto4gwG31FqEuHXCJSnc5PLVaAyxbrZAGmgkHYM5evN6NNqRy2kgVcX86aggiet6a8qXNudoy3fgo",
  "key37": "3roD4XxAD5iy8YvviY8R4XDjAoTtj2ADS3ze314gubJi5YNZLzBQCUYY6EFaLtseMWgxQ7esRLHGfYdG76xVcECD",
  "key38": "5iDkdshSP44hoEeWDtDhusRURTmjBQufbv3cbmfpynuBzEup37XQWgVHZ4B1fwXvq2sGhK56k3G9yu9bG9125Z4o",
  "key39": "2ArowGnmNUnE1fsdLWrjsFBUAXFQszKxnugAhH6FyagZ8H7tDMfEzbxygNjcBDSqECgvZwhLHwKNjWcN5s8YwgoP"
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
