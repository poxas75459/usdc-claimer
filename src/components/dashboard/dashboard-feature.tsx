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
    "MKh4K6ZyriwQsp1p3x6AqUwpVRWYyogczUSPNd8uEoXCbf46Ho188Z6GzLHfExz6VnsA5PESkCAxfdLUsvT1M5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftMJXxmj8TYxjGYBy1e4bYrGUZzQ5noCdMfDN5kmgZyMMCn662hBY3MSnfkfumDRodQesfJykBYgGVXWWNw1MkH",
  "key1": "4rEmYUB8d26KWsiaeNYzEdqtwycAChESxwbbHszXwRdPqkBRPTaYtioUVPLcKZA1wboF6AcUzNkSKhtqfVXi3uro",
  "key2": "4L8ajqkijoESxvCiS5yJyaWDPfWpqc1iz2oDUreQrxktK2MjMFF28VAkzEF6GDp5eSfNC9TjNpovU3KjhUg7zeTy",
  "key3": "5mkYmXaDoXhtTcApMpDHdqHNrCajxsxw4jnusoVfu865RU3CCAGwF8hWhCuaMXitd3mKgPQ8f4A6dby72N6gPqhs",
  "key4": "3u9EqUNfqVwzjXVG39t1E5pUZYXv4FnutDeqzcRokRZYXZb3wq7x9fjFcn5uzoGVdkvZYh8R7GH9dHJYWbj3q1Bt",
  "key5": "3Kwm9qxxPqEDDAzYPbPo8MhmwcVXraxLQqQCjttsmfzwmc1dbrgYrXBL4ykFb6yZTT7GF4qG8zJDAk2fdQ5vkg2V",
  "key6": "4utjppq5ZCXJ7e3tif2u6mHWXU2Zgwr9Q9WHYyRVjHj8nhmwMD8JcfAtgWLYVc4c74bXwiY5zPXEjZ6XwmeyufvR",
  "key7": "3Y886x2wwTqVLwKaXUW1zbycF1s2YFrvKeDouX97uBpVhwdRy69J8gsJXchHbDrRnsSxfrWxPYJkrNvyE9p2xh2U",
  "key8": "5fgFuhuEjvtEm6NPhpX5aK8nFqf4phVHnmx98W5a2EEpKTdMQUSw454Sn4QXN6ovTiMeT9aN3FVe1HoeNbxHWjxZ",
  "key9": "3xxCqmXV714B15JZGeV27s3aGzKPHQhCZyfBEu88LN3hCHL5apYwyn44PYjKC8RCeyC6BKK7d2eq8VPugaGPUuqB",
  "key10": "3DcKuas2cNygjJq83qSCnqL2FAakkkpQm9WHZ4WjhyePxjQryJGbRQETCZPUKZWJxcXmF81NtzaybVptqvgP16oP",
  "key11": "JB7da9YNwgf7BUU6mCH5LBvK4yg1R1s2P9akWR9X5Fjy3JcWBqCG5PVVwXiAdgJNsACxnv4gYmKhS3PfB16zVTK",
  "key12": "2n2rVstZ7V7gn86hLfkEgPS7NeLkq3MUuNtuSCY4AkWdzzcziDX2ma67xjZMaBArupZXQgy8u11hCSD2H7Ct6sHi",
  "key13": "oPtedtbptHREmkqobyTNeYBNNzrFSXwASyrNrmUf159x2JdLS9kp8LqCvjVpN2AN19YA8fR5v93Rg8zD9wCUREa",
  "key14": "414DjpgS8SPTVgjhDdqqdJwx7AL5CNbiRiB5UvuiYJi6sbBFD2RTXJ2hJBZ67TqGKP5atKUAWm9DDcoC7evTjPsn",
  "key15": "5XyaZt3Kzx41sk5M3G1DJApW1f2HzfQASXZQmFM1L9x7NfcFts3T2f3u1R3ygkU4ucuAq9VjdFUhM86MiCqv15EN",
  "key16": "oNHKcy9CuaGxWxHMSVhZQhKhEFPdDtXLcpEZFo1b8emJJ6BKU2TebFHinagZpjHWm5W66Ju2eB4RGiFQ6rxVjP8",
  "key17": "2dfpc7G6z4wHFG3M2W9y5jWsTuh9cWDtrZ1ED9QivL2ndigm4n4GLi7GFCRJDwuGAwSdsrSCFD389f3sgGVtMu9m",
  "key18": "4FwJosw6iMHpDMV6irebg8ZQtR6pgkfj2Lp8GdGehGUvRuWkYoWMWmN6kVGDcwrV4dNxuNRipYZ2rifPV5oFU4sQ",
  "key19": "42SrztpY14aYhxkCxCeJUUqam1Gih1unKQ1qAErXVabJU9VpKAGEpkPuuFBRkh6w8QY9hsCnonXEJLCc7EaPKj4L",
  "key20": "3gDvFG4ZmKs33zTgFn2CSPrXULF4VKzq1gpzbLd6diAc8HA6akgbrGNKYTm9T8ASU1ugjvEPaRX9pHiiU7ogQpfL",
  "key21": "2hgpbv6n8rynJagW66cs6VTEmyrBGMa2oPwvx1Byf6YaLwSCr8GUEEvuZBD5YKhgJFNRfz86XHNtXoy9hJ1uu4jm",
  "key22": "43iiHEvHrmCv4W3BcLzZcqnu7Es6AapcJVerCzbZzUHwScENA7TAmPpzhhY5M7mWNjjKuXiV39P5Waz5GNWaZ7cK",
  "key23": "5MD2Vf38DNwy1SWtNCLWqeAY9pAjh4AnCM3ojsiBHCJnMLZqT9UqhyU5MeqSpdpV2VyEVVadUtknfFYvZZjXSxGu",
  "key24": "3qPR3KK2uzzhL8mkt7GNnoNwqTSFqF7TnYCwZGiHFnp4WoJGZF3h9BB6XuJrMGFUPUzFHqrdiXrxY8UxVveTf4S8",
  "key25": "3oBVcsDr4xruMJb55D7SijvgadQsKVrB7wFvzNUz8mopNYdzdSoxsvKAeAiMLwjPvbKXSVegdX3yTUzb7QJH5upD",
  "key26": "4Jy281zZbsuTisuMab1BUFDVTbddoySKPCh8NLUDKS5XnUKCqGojVx5QMbcigLhPzCG9qZTETxK7PMtcnymH9GVJ",
  "key27": "53erHNU9nycuRHAiHkhGUcxoxZfbWiYiz9aBdEkChhH7W633oQ8pG9FzzrGiFi7aTqQkZ4Cs14EbBEeng5AF2dQX",
  "key28": "3QTWNzY7a8fhNwqirZC3FBKzv3dF7nQ7vfrrndw1WVQcKJSfVMvLXxkBCkN4H1Ly9BDGfG8xfr5ipkWk4bX3Dvn4",
  "key29": "3MaofSFt5F5n69UG2jKLY5xDHLj4j7fLyzj4vYragQzFwVFknCm55br7CqCrhidZhwt4LZMECgF826zXKm4CWhp9",
  "key30": "2eXmp5dD6193gTvHuJ1coShQpRwFAMg1nSPWdVeuuNY4PLjViPR55n4ZbUwXx1eU6PQtqx5Z6SZBt8rGqUMhe62w",
  "key31": "2MCVXRjEMt1YDLMCzQCc9RCbMg6gpE4QqikgUGCNPDTbYayr45j8NDajQxDED2Vv6g8ST1cgNkP2x5LpkRWXf8hq",
  "key32": "3LwpQQ64TomSkyg9yL7gMEHWhVgdBFaRS8Thuw8td8AWhnXF6jFR6qTgt4Dvps4ZpTi9L63WaMZLC48dM1qJKaUf",
  "key33": "5MkrcQDtdezDLfrp88Ld8MmcTBdepwHhUpUGW6uAL3wPSuFk6WAnWJ5uRxtbChLZykrJ3Dft5waUZgNjq8BSDCw",
  "key34": "BRx5NtkjxY2LxK5kPJPe7HvhPycLLaFfEqApCKqj6r8FJcUdAtM2L7dToR6Kg561tGtdgJbV7HEckKyvKai8zQq",
  "key35": "43pGk7pvTuGtAoo4fQ9Gs83f9PBiRD4jPugrzdwHqsC2NrH4XHn2nshdxCozMUkMnH4Q9fyJT2gM9stxjHer4gnG",
  "key36": "4B7Lgrgdp68jrCAowJRz7D9V94krXhzhpAETQ24CTxbS7Q6gjjM6pzvg6HcXH2mxREAfJvYdEmCSrfLvGXiKzksn",
  "key37": "5hT8rhWQ14Jwt2f4wyP6MzpmEZvUchkoD1HF58ik3o6ayKkyVpSDuyEDiL7N2uEZeJD3DFd3jmxbaostUiYKCpTa",
  "key38": "zobXvCidc1N5dfvREZyjfBtgmyGkXCrcDsyMTugK5JKgnWKQzcMqiFszDrxkCTUcE8N6UEpg4somFBV2WbTdFRe",
  "key39": "5NkTVT6Me9AzsYYXLUbivY7oXNRog3wq5kVPPdFntxZvPCNMLCwXMUf1c6h71wai1H5kVh4Ku2SunhnSrVMzmFp4",
  "key40": "5DxdWQevUze6Hrswhu1h2gYT4BVroMHBhdLJHWcVL4H111NaMxjiYCaCw2ihGdpEExshKnLqtVFM9nq13ewXLAVG",
  "key41": "2W9pjUaN1QayS6VUEFKyrLs5SnJNLWzp1snL42pPJvvVyRVojiRsV39LfGHRw7F1nPjgvUp23ouXx1u8gFpYt2T6"
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
