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
    "3MkTe3ZY1Md4B6jjQKYEvvzRmjJY5ugixTpbd2meEihz7iCNkuMZNKwnZtj4rprh9PXKwBJVdwov5huD5pLn2vUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bgu9fhG9XA1MBQfxtiGwhcBDgVJnbyYXjwW8j8vFmyoKZBz9S5eVA3rcnQZkAqdH4FPkSKS8zoft3zD4KaUUuUb",
  "key1": "66yvauQdqMhwJ9yGnAqG32z4kz19KfAQnABRAs3rec1wVUyKJ5mnrXsc7ugFMQmx7H2p95aZct1UpEmzCDwbn6us",
  "key2": "2kyN4HoKzaoMnKqgHmtUnFAnfTjporF2kgV4PzeHtS6NUnYWxJmYXzwUuGnc3bNZPRGM5u971NjH46jMrwVWMrgq",
  "key3": "5qt9FEaxAFC4ufy6RL8xTRHM1MysQfKMXaKs3ZBpxEJTDCKRCf4XKSmbwQQjMzaFZuHTQhjTG9DBdZdfg6oTBxKZ",
  "key4": "5YojeH4ffGue1iusxPxu3eYQZdPiZRGiEcX87jxPmyJUWcJDkyMKfPGwqquTTe8JoXvzrhB8ADDYQdqGd364uxoH",
  "key5": "s3dJ7P7TPBmoQDCXLh5KSWVBP9nsgrzPioiU2CdqzUdBKuSP1oaQoBGUBAD1stwYnpnhY2YLEypCMANNizkdSsK",
  "key6": "44dhyFLtNePL1Ze93Zfdv2VqfmzT5ogugENuXkvtZNtBRhyFFHwNZp2rzG6i5kBhcqW65euUeNskjN12GUYzyBSe",
  "key7": "2yGehTgL6TVW2iH82D3ow4gsF5kiiS4E5B89cE4ud1LZbkJdUppxgx82w2Kf7rmke3ZVrGMVYu5vz8evc1Jw3e3B",
  "key8": "58YoCimPEFsQpRLdpJhqCRqhzVSjmAEgSLBY3Nq8JnS7JwhgdXJB1WdJZp7aoBz7WWya43y3P3iEwFZzUw3SKoaV",
  "key9": "2KRstBost3FjpHDHvZj4DzDK51BQGkYFyb6wHdQikTvLECusyY9DiD8b8uzZhXLQ8PXfDo5aaP9zY13f6EvtyHxR",
  "key10": "2SzJAujpEoDfaPZFw9yLN9cAEAub9oEVhnjCXep54Cwv8aWRzgeMxDvVexyxT894ZsuRN7grojMFYkTDRzBpz7vP",
  "key11": "3PF61eRPsr8BEyQUyxEA63zdnNWEAG2qDQb1otZjp5LHTBzCh74RVLpqK2N3dMMopiYmyGW73vqZMQ8unKhGL9PW",
  "key12": "4iDDqAnqkqzarxSDpbCzDmoQxn1CjpbNYvhYqabqb53XybvKWra5jD8EfVLkCkZHYmUPzoL6GCFjaLnJZifAEnkM",
  "key13": "51PovzJbKTuugkDUd3T5orDxtJZJx6mUUoD8WpA9biQD34k8zjPJzMA3nj7CymgYLQba9aErkGPKEsCdDYrq7KYh",
  "key14": "5QeJSUribskgLBL9sxo17rKg8xmUhtBj49J7rasF3QFvAtfJ2CuJESCnxYfPcFW1jBktWBw53LRdJ9GHvTbeePpu",
  "key15": "4zT6T5cNxGnEw9fcGqaonYbYjrDeqtouFxQZcze8ueeZnGk5C6gjVz6maN41kxvtRTssSx6f4UaTbjr6Ky7NayoS",
  "key16": "2u4iKdW4zhh4dxSBjUHN74bVZy5gL31hVdiWMxW2HGnDyVdMKXchVgTV8N5EtRUGrh57LAaasyPS3T9rQfQQcCGg",
  "key17": "2sPtyJUCdCQSsSNZJxVZ1xxE71yb7Z99RH5wqnU3FBxs7QfWGQKy7rTE9pTLNTpqUBXUM6myujzdRobk9XA9q6DS",
  "key18": "wADkcrQP83Sjoqpq8uEumsBsr1WAxPiaeyaJ9UpZ4HfxugFsbx1F2DwbvEexk6hvVkcJ83wJKFLVRjt5SxyLyzU",
  "key19": "DgZbJt6SfV5HV9JxD31xSg4xdg5QoXFcfc7xStMFixxdWPovxdeR4ow13MreSfkeof23tw9PQZftnTTgb7Goizd",
  "key20": "2CkeY2Eqf6jRqzCSy4ba7waLYCr5Lon5W8Mw38M4oKkB6yqkqQXBdoqfcspVPWdPuDnyRSBroaEW6kBAKGXTUUUi",
  "key21": "2DLcvR8mgBxMCQVFfmTY9kpTaSGU68rnAQiVCL9EWsj3Szebz6jY3aEhJw7T9h2iWQM3AmDW4B2ciQugEeapaxJ8",
  "key22": "47Z4YyAmRt71E6fwYWs71fPQrDyybytQUkeyVCGiHvaB8waYJaBBogyhgzHEhVmBhZeyMYzS64DGUXydUjoK6Fc",
  "key23": "LQZnBYhCSpjN4suMb9tmWoUcDQwXLUjSKSborApkLUUx8w5HXmdDEaLtsEXNiqHqQdVD3reDgbjvzRaXyfyBJPr",
  "key24": "2nKgJnpj7i5N9p51N5pBUTiVV5ScfSfbZnuQG1p6pssDKN2Wk9mPw5ZJiQzZPTFg3z7rBogCdyJWpZr5gUKjZUqC",
  "key25": "5wG8yk2JebKJiKpkcT3WkBvzDYsDtrRu7rcQMkb7xoSq86xWPkB8HiHjD9zx9ULozZLu57vp6p63RCNkaHFd4yd6",
  "key26": "5X7fxmQPpxBZhmX9pbDDsx5oSjnxiG1by91aCU7ecKNKcJcZkGA1MdsCNSCTSdezCzbPbx6hCKiZXFptUyxjYbHD",
  "key27": "3y58pzSiFg2pnUx1pt3MXtf7sckA6UG7moLrJrcEX1xDdSD8yq2R1ko679MF99botAgQdph4EtNd3BZTJtNHeFmJ",
  "key28": "2HgEBUbAMDDvd4CdNmLiYKJimy7QSggVqRqTjCbjwBMWy9KD9LA65vVsGv6Zi9MpR2WB7Fv29xmNHvXFw9inXqZv",
  "key29": "4k4GbgDCwjb91m2LM3EoRkm31rEnVRZK23LChUxEV2BpuJc4Xn2oVox61CRgHyi4iSZzjD66SaRn12rvQ715MeuH",
  "key30": "51P3ggYDwvY8ioqBorPivCg97pDYeZrZ8Qq1wqYTj5C91u4zZiPQRBp3mZaj4iRRkdiG6Jzn7FnQexbvcZbDnBjf",
  "key31": "gvcR9RegTxa61NvPSFpXLG8LK3SPTQX2Adoa1KjsirdB59GJPSQYBouPYe2VFZybpsgyH5xs3pbqWfuKBXJGJhq",
  "key32": "4yNJphcySvrYWi3quysWmpTrJdxbxuQMVtEFoiXRAWhVcPp4MG3P7PYHgropkMYR6ASjnj2QUnPoD1RDHb99hF2q",
  "key33": "2pxcA9AaFj65NvBDBSNoReKu9h4BWeEkL6DdafgCC7rSNDYPa567RwcoFaX5ncjwy83bUoRtFNZ2SL9MK3ajmeW3",
  "key34": "4okKr1exzP63xR4vAcRufcLQE2SU31nrepr53PanSaTEY1aiPnYYXuRNrnmsncmtrNFtFHVyCKnU3NE8H3bMivhh"
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
