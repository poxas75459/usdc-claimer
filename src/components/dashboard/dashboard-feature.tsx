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
    "2RZQdHJwNWRX28WabKZBNSWeGo7XekiZsccE8jPoN4qDkXKbhe4vS3Y2sZ8xNsDZtQ1BKiSx9dh6bdorMhgDbP9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHqTLq9g9Gqa2NtKmJh9TKP3zJjRRFYbKsCdFHy5nQZbh9cQeYuzDk9DsCHKkuhT3hdgLQxL4ygvCJHmWkxn5nY",
  "key1": "J8HZZ3zu7mvhh8nBcHQbkeisrQWM9sg6VLiTXWKqyktqufdDWEAG8MSoEKzbS25sxWYaiLpDCEPWxQKkreee89C",
  "key2": "41kBakBUBZVXoqB6dvBPQhvk2yicxvGqUPj1B48enDUX3KZWXXZV6doub9dsJf7ydDTF2jxDC5Nb4bRbusySPy7c",
  "key3": "3FZx2heTW3KhTWeenjb15W6xbcKsEVnx5dc46YoUcZRyFwfgzpfVef3GD7JHdDHC6z6K3Xm19RJSfHuJ9wi1qEbR",
  "key4": "5k1SskiHpfFwb24DeBnNzCUaCxAxwnnP14Mk1Xwf1ZDuZYg8V32Ur6jo6k44tG2KKVn4hDGASwSR4mkKKxQUSpnD",
  "key5": "34oemv1MCnJGiojxKg9QpweahAsUGcHqNodYT59TuNs5Kex5RCBCBDEKNitMTKSHNSBfU1i4UHm7eWJZ7cPgFcwW",
  "key6": "2cAuPkmEGUSwLn8J7vYqrTsvRYPPwmq48Ec65h3z2pTwBdVSuMfXp4fPcYjjTHX1Nr7C2xVDxEAaTKWbmum8xDGq",
  "key7": "5mQtyJYzpoVSnaWQcKM4MMb3b8Y9XqPgKPEtRHoAEsjJ1vMMExBwBYLsMrpCiDG81SBfxp8vJQm4zYaN6HY3Wax1",
  "key8": "ezbdmqdbShjem7jDiyEDeR1UR4Yvc5nkPvK7grpd4PGruHPM47g9XGnrDtpK8x4F9upYrQwc2nSdfq5k1Sgddso",
  "key9": "4EEM14Q3Nuh1pxdn9HACJWFgwJDyNu52qtzhJKzitGcXgkorLvf4vXxj6Nzrn796VdTsGdK5zJAKsxSBbbAB97ta",
  "key10": "8jKpTJDWGEbgdTFDryCjPJYwkH5XLX2PwKpcNozWeD9zBhAG85hPwshtyQpTQAhL1ymEdMecjyLHzvS9JAtAS9n",
  "key11": "UwEE9CcGkP2TTD8cJuu5FSJy1ttXoAECLMGz8me3nz7FCAhdNfzqhmASUPTihDGrPiDTEjS2D7wq2UUPidNxwaV",
  "key12": "5VxGpd9UsSYLAQTBzwgTyutGfEg9fZJzn7YEHMoKwbtk7H65MQGFibqzVjdwDhQJwackTGrFLSjVCphHDUNgK5Tr",
  "key13": "mNFke54Fzn1LVNNXqnNDeMYbDGzoLPFm1KG3XmcyZ6fYy5ZsqcbwK6qmfQH2xzkzAKicwLAgz8rcmup6uKWcCoN",
  "key14": "3AeHApeTguhKjukkjeE9W8mv1AFQ3cvFvVysRyy83ChG2ZXy1UBb4Vn7VwdiqghfwgC2HCYGDhUbrh6n3SVng9ox",
  "key15": "wcAQYJYBTG85CMa5cA2SBDRxCNVte2dVwCbmFs2trn3YcjVUUoyedYNbeSE5hksWtfbsCNQLF2jt2F473Q57ZKk",
  "key16": "5JVYhpBMtxyZRh3dSozYqQqtAihf3PaLwwbgTfbbUySzZPPVVNSuVx81yhQJwmo9oqEMhZK8aCGqc83MLr2tsxoj",
  "key17": "xWCQyhHt5V13DBrMBFym35k5Pifm7NQavmNrGhc8KFdNBURost5d3pmkQyMjTQhnumWPASpBXsKixbHQrPnvWyg",
  "key18": "3NzjzYmtm5rbT7AUQCVQFJsPS8Ubs7BvqTTmn6GdDoKJTCNfGJT2x3tJbhi2sirnZWYcwpLWF4XK844cFdqB43Yt",
  "key19": "4kMJBduhSrM5kVSTZ2n7UgKDYaQGdcjcNLaCE45KXTLCTmytEc3ucPcTZgJMieS2kujnZRopjHVG9bDfoqDyCUEV",
  "key20": "4iQpMTMBh9ne4ebw1xnuMp7LQ8qBbYWUBLVHgSGpkZQpC5DUWfuqkfCHrau4F57m76dGuWcutogLkwoKhbjHD6gG",
  "key21": "hfLGGw5kniZSsMhDCuadum7jXcNBMGLgVp9QLoWzDdfZerCnNPQ6iWrXaeRofjf1uYgGcpmmMBjagUFPnaecNex",
  "key22": "bF1UY2m8qMaNYGgKvttwqVzPDGFv8bmnjvvkfCfPhYpTGbfpHuUfpp69JgJCaQ4avDRPYVmuB6qvL464ZZDxuvt",
  "key23": "2FfNHL6nmk7gjdSHqhxcnCEn9A4WkhgS2CkTUmyG3ouksAGxm3579aeMJU1HcGSpHd6LfgUzKAVjYuPR9QHqZ6eL",
  "key24": "4ELG7vJQdiPBKZcsTmCdVR36FWnEbTiNSmoBT3KEabWpmUXcSZtHJV4kfrAkVurFGATuwref8HF59tPUPbiwHWZ",
  "key25": "fW5P9uXTuyL6j56eDig8LXjAYdRMP4qg9DhbFiBVbEp86qZJB1mtV1kfjfTUqNg41tXRtmtGqW9b9GDNUmgeWUa",
  "key26": "5rqC8xew1sNLFcBRCtn8PcAdMyZUfrsvvF3aYZtWYbJEpTXX2AkYzNEFebGrzhtsNCiSqkPJsbtPxKZxsh8zNZpW",
  "key27": "3XszrfTV4ge89WG2ocYgFkSEaGBr3AZhNzuvT7Bq8xxkNmppFXGdBwHd1kUAzYqP1XL94hGRJbEbWyyYDTS9gZvz",
  "key28": "3ctNKPt9FXaTbN39obgR4W3JFoVk38AVVf9NTmMWzS2X9z74EA7J8RabyfoYxkdnGppRzELbbSK6Uf1DeVtVmN9G",
  "key29": "3d9u5J6Gt6HtggKJ4dytuRH8JDbCXanzft2u42GcJZJ7CGkr2D7Pizb5oQV3LSKTKH1trfx9QzZj1hzp27TU3ry8",
  "key30": "4q7LNEWoY7CgaYfdsVckddMMn2fNPnnfq2KFnDFWuvaf9wVJYcp3XPvKvgow8u7aHRK9uyt9i2BMxHzkFBzXuVAh",
  "key31": "5tunjUyX4JkGtDGaVA3Fr5EiDwqeGyxZffsXL64WLR3w6fi6t7nojHpSQfa1JXRrdJEG5854yFYbTHsiGrLgtQ74",
  "key32": "2x81pB1UeFxQB1miAQUZMxBRZF8g4Xeaxz349cZidrsCYoBtQAQTGAPRbvMGWLPdxrrchTD9MMj4TRRay5E3jPGR",
  "key33": "5kr7HmRbhKee35Fmp73HS4RPgaFe6xCDWw823DMVWXkphZMf3B5uxyh8rUmTgsEYXu7gTVEM3U359ubVAoNtGGWt",
  "key34": "5rTxCSoVEHx8ncJhTyninLp5uqvoBB1o1ZqXv6LKrjYu5vwDWVbob7KtPMynuzaaz3NaSic9sVwo5htCZKD7XZiF",
  "key35": "mFtfxvQpHymJ9fENh5y5vmyK3jMJBZ9xn83Efd4JDcFeRFWz3HjhePHmnKS6mohbtWAK7iCR61nkEgfM6KoSxNt",
  "key36": "4FJgtrQiUtLTG8vptkQ3gZPiAsCXdf6gtuRmH68UK287La69eJVsg8sgpSiaY9RhRWQaibQCoD8QGALW9gCjmnJo",
  "key37": "wWA4PTWVT14zaitwVMLc9atprJ2tTtutFb7zAnkE5ojZp74kM9VjcGpoZwq6XZj9RvLyajo9U3qSzdHupvoD95Y",
  "key38": "4nPHRWV42EqdACNHduUBFeXRiGcwFQeiT8pd7X61a5fMGU1uEcpxPqmtuf8SJEPnSYbmRxuCWHRbGREmBq8fpqGK",
  "key39": "5KzdNq8YZNyz2tgEHeTm485i9Wc5byqVZBDJrwV3mkACCPMdN2u3dXk8P84eXngK9wmvD4rvsgX4eR97DppEzkt1",
  "key40": "5Xj7FePQ4P9eP2tZK8anaEKDQJBykqy1PsYJ1Cyi1HaGhK952j9CAE9Zo1F5TRWe5g6SNUV2siLe9TTN6Q3oPha4"
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
