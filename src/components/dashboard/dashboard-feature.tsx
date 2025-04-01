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
    "4tkTNYrJWnCES9JybiQAu2CPgcSSAwXzbhthgmVtNd8y5GnPurcDwnrpjp5dwgKrkrd9M32WD8ucexo1YgBup4bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLXKKieTrkT652AFs8JZgMBZPPnCnMF2sKWfELUnQSKyYXsusNzvQxssVwia6erYsUB5kbsjtVkPucwPD5btCVv",
  "key1": "3dJCVhaGhFvZiR5L4wq1RfQ7LNnc8HkXF4qMr5VPG8Euk7vvw9F6QxgYqx9Cn1ZjoKbx422GTwXSQizYDvq5kxfg",
  "key2": "58BRXn5ChfYQFLXhAEzVnaYDoSpp38yHhSnWt3PMfNr5ptjR5yR6cLRgCC9a4iAdbJLkzthUvuzASVSbidgiQN2n",
  "key3": "V5Yw5qcJ8mzEiypqTabCgS3aAw8ukApjJj3sH7qvvDnEzjE6yLjkHhJ6qFtRgJu7oDUMMAdhumrsSueNy17fUA5",
  "key4": "4NSVXQLTLbUTqA59m5VuiCXhmrhzr9vggJJErCRVmQipYShiczjKx41CmxdvkLRkf29sLTmuhnwY1nzBRLLSspnq",
  "key5": "dMvs9PGqS4cSEzj97AJR6uDJXR3iN7rSftwEXjUd7VWtCueCzdLBokY7c7SLa8cS39vmvv6KdVD5qUvkv41zJ2m",
  "key6": "52459ZEr1rxZCrFWKLW3Trf7zdvuSNCrYRHWwaUqMj3cwojVLhgzhajtx9t8S3EDdVzQRj4bADT4x1QtLmg99edC",
  "key7": "4NU6R8mvDKdSbBWXjL5tBJAr6qWbgWQcx23p18SH9p5JWdMfSCmfekxP3Khd7fw4hXgZ4hSbFLf5VNVfb5GpxA9k",
  "key8": "2mSY6kfxETbAXXShBMt2PUy1uFyehkYZwLTY1VYvpwCNJfmU3Zr9P3rquhDxyrYGE9PoKb96ktWY8mGS9bGdHdNK",
  "key9": "wR5b5B5jckZSGgLbqpJBef422Cccjsbx8JVxpH21LLnyjsVZoaaACd8vjRasYc3SxuDYggUJEEyhjWv1jTphV4k",
  "key10": "4CUZdtgq5EeY2xS74PQvNXGn3SxMk2BuCvbU35nSn1EeNyVjiQaAZLKy8yts5rSzgTxYnyEPooe6hPFEkmT55LbF",
  "key11": "9kqSBkC5DMPH4tA2FZ8186jSQjxntNVDXF5vEJpMk4jjQa26rx7scZeatS82jrdAH8UmuunfTTKjyCxkuV1KiX8",
  "key12": "5n9NrNWTHkVbZY5mVhN12Uiyf5v9B7kRL7tXM8C1ihBQK8ND7tA7XqbpV9vEmZzjPGVV9DQ1BRrgHDSNZbs27Rpr",
  "key13": "2cYU5X7hjPpb4k3tyYbkwhbQ3Q14YsFaZz6YjEVQyzqiWoWFhVJDzJk33JeNXBHikNHTbjiTkgEP7ewtebQiX73d",
  "key14": "5zittQkDWRYY6vycWeohRsQX1tJjL4cQ2QQHUkRiFBPvHxJQSmxe4EWaFTpDUU4yvh1pVgnN1yBspaPZip7DhgzW",
  "key15": "53HY1SC2fasdpSowBejrcjmjo4ewr3mPwKF9BGeZkJj7ypfaSqZtQSd4ehYSFGZS7xDZGXHM3DKEGbaWUSeA2Axu",
  "key16": "3iBGRxZ5btrLn83PyjZn1JmG8JY8QvRmEYEKAZ4svhewwAcdbC6C4ggGZQZTKDfnes4NUkpsFqgPZ6Bs8CSVRfGH",
  "key17": "2ZGBT6PaowWnGHrXvKJPBxNhkG5NKzNRz9NDZtZ85hZpEAU5vBxEHTd2pCAhFZNgS9QWBcHqfV7XgvXa5doL8uMS",
  "key18": "5SQkEUnr7bodD6gyaHtRCUbFFdhZMZGUv4b7K356kd1my4Vjy1LuqzGB5x1G6eFuPvvgDWwQpgUv2dBRZcLHkQN2",
  "key19": "4oUKsahVR3dwgqRytDuFjDxjCJewbj9zUDsyJPW2T4LNwJo9nxkeHqp3JsVTyfksR4oCwkc2BUvLE9Qo4LHoJ9B7",
  "key20": "2uy9XhF2RyLAD8ZSqGM4EsQiQ9ZtRsouVhKwjhAKoefVAoY9uhFDLpy9vbniW8uBkoGNcSyXaDfPCuWr6Y8EUjXG",
  "key21": "aNW9NSr2RLasqn3hBxVMVUmFoPZ1tqdtTLLS1dF75B15ANfYGsYCVXngCAgsi5QyEcRcPst3fn7jLVsA2Wx76fZ",
  "key22": "3CULNyiBsJkNB81ufrhRVDVvMpEdMFMbt9YibDbTBgR2zwq1cPZ8g493HJYBceE5ohTbLZndKtchbBcCQ1nSHLBy",
  "key23": "4KLR7DJLMLCjL1BcWgAwU4u38ixJxtWoeHiuWQ86aFgNx6vPCYjAx5gpTdBL1wFUYbeoLDFQbH1b7mhcbqnjD46n",
  "key24": "5yCazqKhPEyR15D5bdqMZHDroppYNvkZkvnSeu4DbFFYbPun2sWAsdnV18b41R1eVCrZuJCdqNKbP14zMZRiESzc",
  "key25": "3Bais9nMnaNS5HoFJ157PzW7HbipzzoBZqRxuhytYNB1ucisb9PQr2vciyDAxCDsuv3qSRPWB3ufJSa7qcvB9N3t",
  "key26": "3nqXc21kqBMgsgK2jj4innyoAgM6c6FHkC12WiJcDLjmmi2e83TuZ7figgBYTmPtbufVkoDqenaFjDyfxPY1UtSx",
  "key27": "2surned1xngL9w4Ea9hmpgRjzt9Rn8UPXjSXNdQ7wsScPj1JBB1w5owPD9HvKTpKb5QHrpSTsMVzCghjQaWcYtNo",
  "key28": "5W75TGRsp3hH3cStDHqYBNNQPBN2buPn6TQzfeXzcfcAGQcxSpnpt3uCWhrFSbYVu6AEFKSbHJLTExmG5VfguC7p",
  "key29": "5K5GvS3MUKW4MkJxtXzt4DPvZo4EEAs8527n2GGkbRfE4ReLDDxnDcLs2SoXCqnVKdWvzEicjdJTT8ZoZaUxjXNK",
  "key30": "3MkeogX2eZ9gPqSmMyhwMvFtmDrYy8u5PpM9XZc7PT14m2CDTAtgFGNTaZSUbXf2gzutf5qrttB1essaiCPJsepq",
  "key31": "J51GwzBKGLQ9oK2UsaxxUs2BjsZ6NS2aLQdSwkRJs1QQrAFxn7vAyWZ6nD5PEEJ5q2jdzuDs4kDmc5Di2qdScA5",
  "key32": "5a95UfRfZp7RPQSbt7zz3ZNhaiBPbifgnFpBHfxP1atLYLxCmcpw7uj39wMmaCqScGDvGXBTv5JXwTfavE1TWmGf",
  "key33": "5uMQj4NpRqEiEaAWy1opXsT53WKP6o7V87tps15bjR2o2xGwM66NFHcTPSGxcNweoLsXhGQFuw6eYBsGqtYNcwoo",
  "key34": "3jXMKPWh2x76QhPsBPDtPqvkz3dVBq5NKSz81Djt9EjZw7JAphtwWbfGrb1eTY4QvSkHdaVPv8js4bE18MHLyipB",
  "key35": "3timQCo5yyyBMnHAoSgzX98CwrT66jNPLgvbZZ4FGsnvKaJrcBbhdrwAjBRrSHcrTzZTySR8FakwzbhLszqgCdH",
  "key36": "2W6YH8N1mXgkKvAWKgi3ffvZ4gL6U9Kp2msjN1eWtb8ujAS34Z1mx3eAKisR4zrr4SXtoAsgoHra1fpyUwYSUpNR",
  "key37": "4VYEWYazaHp4Cfqp44rGRXnaba65rN1yE6Q4hJPAVhpRoPkEGENr6Ut1taVhTwNhnc556SUa8uNmish6wwKP4NRw",
  "key38": "2VE2AVANhdMu4YUg6YXQtkPxctiy5By4YggJEPGq2TJnTAUk2SXFFrcJpKfqzNBsUCBL78ti4A1Zs5UF9V5yVU4X",
  "key39": "2ozKbZU6s7tPDNTXLFZ5ytvsYJqB8yAiUUTGntPMepoYuNym8jZE1qN58geWjDkrhpa6CJGVV7ojDUY5hgDXauRN",
  "key40": "2g4KEKJ1zg2xEboV8LLWm4vqwNtyowzFMGwQPJWaKirtQWHsqL9qKJRwUB1gx6uyrddDWn7aMk5Wr5a7azYkvKxo",
  "key41": "57xzB7NZtV2cFa9rtMDaYZExaHQcRHaKTuZy6C3CyM75fV5KE478nUifSXJ9HQSrM4u9hqMvf1RmeyJbTJAEr7hv"
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
