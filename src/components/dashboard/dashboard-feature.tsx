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
    "3brkTDcxyV4g5v3oLHqaij7FLepyVzHH7cjVDwcvjr64nzBfUEwfmd2jz5UiCT9NtuifrBPrneRzhf6LpFWtyqEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkUBKRfUr772PwohoRL2QrdsD3vF1VT6WSkVEikVFv8PbU6VJfKdUA7Vm9aaphVaeSfy1hvPpDcFnTzZRUjkD42",
  "key1": "3CzDveonRNhLQXGk4Ntw3PsowbPvujg1ng6Wz2uB96oFt3HErHXcysy6e8ypq6mw4yJmrBDAeE3fAzEUHCACn9fq",
  "key2": "2bLvcDr6boYeMTGKU3MWg12jE8ELjAh1qPWtGUfouP6kB5BjFep1zteirDAGraQFVc9ZnhknZxz5Gh8qEwqCEFCB",
  "key3": "2KKbniyjhbrubv24m7gSDarU9o9tAc7qijZTp8GXpwRtHadTK2Wqcv43GPu2WraMqKadegGgLWmX5hLgjLU3Gem6",
  "key4": "2TcJbs7tqqTmotQ9dEbAQRrc7eUAzWDphpHNFKTJPsXQmkfDoc5DpYFWXfnUkuKKXvLpFWkwBgqD4sBMXrh7zo85",
  "key5": "25gJ8MBHra9oe9stC6eJ2D53MRgtfsuziPvQu73hN1YfFCs5Gxrhdc3JdV2JgxMEqFvu75jGNNQAUPG5s9YW7VCe",
  "key6": "bycghALX3UomvFJ3wJPAsNAegm19Su3PRgmCcyfniu7XU15KHzkdAFB14CdXHhWkXi1gJQFL2X7drXyA1NNvQJG",
  "key7": "mfYMdRopACNBVuK1TDax9M9JGHCnEHXzsUmjDawrPJXQVLj3eEeKewBaNdimXqDsR3owEYe8941vHgQ3XgEoWZC",
  "key8": "1HVBPnbR6hhVpJPAyRaZpLsMiKZ5sjameVBQvG15GzCV3MZiwFftUmQkTGVzkUsE7jaieQoHo6eP4LgutEdwjFz",
  "key9": "3Muyrs89nf8nzKdpKqPpuAs8wToQTUkmye6gpARkhDntfDg4KisbztX72BtLG2fahyjeFzz1YTFGwsqiBtX1wmVT",
  "key10": "2qR9CD8YJLrc4sfRVYeUxZzCTfb7LjbmbETdQduNzTDLZmhy2hXKA7cnWDUmvEnbejCcScHRC1jy76mTaE2T1ir",
  "key11": "5XL6KZRpTmYfdYuC6eZG4XFzWcQGiDuaLtgYGish82TcSSwWmqvL4X9KjA6aPTRvFWEEqSZqwRUtoYHi6kZiHiiA",
  "key12": "3urG3w5QqT4jYsjX91kNgbYrMLzMJaku1yKFwpath559narEx7dtVjL5g4t1GaQhq71mHV3jKHpDCes9LqapT8Ns",
  "key13": "611Ng1cBMf1yNKHLsHMsk6ZJY4uHaQYYMabfvhR9TUuP93nTYjJkrS3GSMCcpZeTH6X9iFNmDVZ4wbSTFuCFYUBk",
  "key14": "3TEJPPfvjFvG53u3ERZiMumnLszbo4nRy1buqSsMiqwb9t1Z8F4HAGVPRoqHjSH4rHfKLstv7CUyJL6Dcit7fJwE",
  "key15": "3zqMEgaH5GpSTeha4QLiGmesecug2tTEGjYQ2gJ78vMtxZbzPWCtt5wwMgkGebSFTx2EkB2BUGpio3NowP82n6SK",
  "key16": "5Mnm9jiHnmiNFBZHQeWbkrT8HwAnA6xh1pt29dpwHDXiExNK5WYb1JuDTbVhQr3uFJJM7Ruoos1wWCwqdARZw5mi",
  "key17": "5V8xvp6eEy47qQjTdququbK7aZBrFfG6XSWKUrHvNbht4HhxFifzxS8i45JkRVVuG1f3msCB3wyjmV4UEkwp4dJh",
  "key18": "t5vb66fyKY2Vh9TvgfYcknBu2JMhAbUcLppZD7VbCT75oRi2xNz7QfoxVJyAP39yJ13QKGecpa8gtieEmHqa1se",
  "key19": "4QPTWK3aqqVjGLscXsmm8iVewW5J6Tws79YvXJUf5LPjQxDU6fQTEWvSrSmESSJrUeAKfVYEv4BXXCWRbcYZUdHt",
  "key20": "27H2SVdkziBK23M6kTyssmVPU8BnJCmzWCQsKVNmPX1H45zk1WJujorvKYavFq855RhvCQ5CHvQ52YvonZ7JqHvt",
  "key21": "5s5aqq4Ri6obCfLV6TnPwdDZWeuADaEpVMrUZ8KHZXF1J18ry3C48TaxSuKr9mBJiLT2R5Weo9spjH2jSPfLaT7J",
  "key22": "Zxm5wiJdiwLrQnt5X94Lfiwxpn4j76PiwpYHHMuF3oycVqfL4AoQe57yYHuQ8CWAh1jKxeaoJXoQUUs24tsHaXm",
  "key23": "2XJxdfVhVgDwZCbUMUiYvRDGLvfN54nEPFWJxRf3n67XTXXBLCRa5cJ9rgAo9SG5KevNekkvMxuTPDvEs29Pe1Ne",
  "key24": "5x1qmVcw9qqQurMibQwNbTSDYuDCSmbogqZqE8GtWJQEXKKiQJ9fGGpPsxv3cvwSeE9cL7D86mTZrMtfTxFu8N2X",
  "key25": "2mv9vXRcRYBsFZ3X3R3Vs9TTP9vg9MDb5ST9zFh9GWyJZvC1kz4dBDpXo23CHrGpgHnd8idEGeyKuGUhbhkhXU5K",
  "key26": "63UL9MjG4UskyUqqNshTfi1pJu6anVBgzrfxEaux3uH3FuvcwWPwKwZPLF8Hpvh8y3xmcp4cUvLNzbAmpcxUCeVW",
  "key27": "4Eew67Zy1fouYpeioj7PUDQTASDJinZ5eSMUq5nnTBBVFERQyu6auCu6Q5JtPTsotTjfamvuiyL5ere9n63xxMfa",
  "key28": "hvz7ffMVyS6qFc53PnfDVsW3JE27yc75f4E4rB9o8EaBEiqLhVLVcyvh2kFLDxxcCYizQywAtqHUiJWd7w6Ldpw",
  "key29": "4Ti5zyvmvUcrhBYZGKurA11qitxGS8VfDRdCbMRbYdBtomQRToFHbrXhoN5ewFfNeSv8pDt9sMwJMDcSGAm1sueS",
  "key30": "E4ub3Nq8V4YWpbnGwCGtfVBNJDeZdy5r6D5VVrTL6zCbphGsed1VY795UyEYgNKYQYYry17V4yn13ZmrDSfjioG",
  "key31": "5Kk8LnDt7LpMq9H6KK5xftTPH5qNzJLDekKHP8PoGuF2k7opVLiP6n8AmnktEVLbsMNMNK4zUWfUvwkG4HczesPT",
  "key32": "5v8FbgqRSKuKiBzUL1CZXhym8b2PiJweQvBcwgymuYA4Jn5HiWH9konSF3oFg5mKEhew5PrdF8eRg41GXWFXTA3c",
  "key33": "3TMCpoP7Vwn1Pu8xhfW4r9oc9mcFfbAzdWpJY6Dd6WrmkFNu2rdo3bbD2SoGRQVeRMZBHmTWNHMwF8oD2BtNHbiz",
  "key34": "2tSRVsvpznEixYq2hgCWRP5GJq2HN1LrB5S71H3qGiNDxqeuDEz5NSGDRrc3bhvaDexxLXXYbmGNaxfAgUsT5PAQ",
  "key35": "5EzPkDkdfea1mN1nDfDfc5Mj8Z8hNVNFmoaH7dFxN6VTSN3aezEbhnUvgWUfZHU4mVcSndKGjZr1iatrxpK9a8r5"
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
