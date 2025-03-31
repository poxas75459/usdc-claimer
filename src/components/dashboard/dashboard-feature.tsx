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
    "2nfvscLtcbXRYk3DTBSFNVar67MLHFJDyZr7HaQLsBQ9iK7Lox7x1SP2iP1x66hDpFUkbAYPF5K9KSRtusfzza83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYxmw79iBQLyhY28A1psAXV4bindfZGiWS4DRegCiRUPj7YLQQ7N2F5uD826BZhj4DQoXkWraEhxr3XDGmrjD1r",
  "key1": "3aDAXNmPeFhTyhEJA4dHDipDKqMoPQmXHaqMqNN69CDTZLoPzdQy6JX29e1EMVA73kyopxYfnEceEcPKDG4iFBrD",
  "key2": "pGoeiuctjFnkRaww2XJ7L9SxH7pDXNsGL181PRfWAjCgYmggdXn2vMDaijcSn5FqdgxAnufsJb3Mu8cusB7Cg2x",
  "key3": "NGnAuc892GtAB2P5K2eg47sUrCXA1m4TiZVYWZDeMm7NEKqGRLXdqEmjcDXBA34QSU16YsYA1NV2HPWhQBT4G3V",
  "key4": "3zS21FV3p8FbWBgnFhQbq51bu9PYaRZn2nLK5SGy9eyn17zcKptk1e7LCrfpLWkM3Ctx2EbyXYGHGsekJapMwopN",
  "key5": "4na6hipZ67fkjpVHw5uB4TH3K2EH5Ztq3M16r5WTbmZWFFv1gPDUp7jVeP72Dgyk68imL3m4mczJ4VsQARyYF6F8",
  "key6": "KyFQPf3ZygLQqPFqz5jYz78pXmwAfoG8ctCbGDsGG9UVModef1qCA6evn9RmLio82q7bsdRg9U8yvHtweWi58Us",
  "key7": "2y8J3wtB1nbpC17mA5oTFizJUkSZ6N9XQuBeofENh6sXfS3JEaCeo29P7rHEVnE9Wn4aYCZv2Wo5AHeCNioAiBLn",
  "key8": "59oY5rriS4373g4EFwMu2nT3FGSZs5jT3TJsTcEcrvgKz8MLAZEn97NvNjKGR77nKGqza8YqMatHHAyyFHSXhj6c",
  "key9": "5D6688M2YCEF4tCptP5PPy5mmRnfjpbZXBARE1ucjv9czbXq6jwDEFrX4vj1dNeqsGeuAP4cqSLgpnJe2oE3abf5",
  "key10": "oeCbirfgBDoCCTGH1GV1bHFko1hJmVQ58aj5Mg3cD2oXGXYMDF3pWoBsqwZEEcHeVQpce3n3WhqtmN9fVDuEqhN",
  "key11": "3kySNiycSgvVy7yty8DQD4LnGuC36Xt5o63siBQHYTM7qRADWCVACwfXN1KTdTVqKTcfrcwKi4ggGUuGGYUfnex6",
  "key12": "2Zy3bxtgB6kC5ZfMNLNx8sjGcarv9S7WEA7yrL75T48zTwSpCTLUAR1zVBQp35i23RKZ1GVdGNZ5K3H8BWtiY7a2",
  "key13": "nBoTBL1iQHpzQHTfh5EEGLcZByQ4CfxcZy2D5EUNqZpBXMGaBkbMpueYvwu1x9p33aw876BdsasxAAUZdsrK3LB",
  "key14": "46ifT2DdufPxH1JDd1G4JZZ6naPLPH5umDVWXgEwkeYtcZBxrWDaCSSbHVoCzMWbW8JnFGd1ZMhLhVjV1XJbGf96",
  "key15": "5CiJzGAxk2FHBVCuGcUAbZ3ZSqMrFhX7R7Q41EpJq3FVTzY5YZFFEPbEXKvsmhKvP9r2eWSk2cxto3kzcqeqTF5E",
  "key16": "2kWLmhW6EaSd7TDoZ7sJsJ2YwTcUFUVnzDuRNR9hbpc2hLQzjNdfrabpJ5RjvspwgQsKmsShWKbaUNt2zijFMKF6",
  "key17": "9Mtrc19XpegWhyrv1BUw8GXAvVHefAUSmA8gknKHoUvUHGBoKThe9TMNF5tNPuw99v66YZTwYKaBQYSBqw2Zr8Q",
  "key18": "3PnYg2KGgPJDK5H3f2rQAV2ELMSscqoayvBCRve2px9g5ynBYwva3m6L311gwqdXYHxbi9k6dCo7nPT1JifiaxgL",
  "key19": "2trrg9c73jjiVST7PziakQhaAk8LzquPXeEDc7pRbbFBLDSE7ZQjZ1gxCUbh9zfnNZ8aqDiJpoJpaq9aPREgRX9F",
  "key20": "2vkvNQrYtQQJfKp1ED1nGjb4C2g6aEYiKiJDvkR1Q2B673DPJFsu6ksq7xjsnVEVEjYR3esWs4aVdafcF21DGKtj",
  "key21": "5m1u5yuCWBvcABN4dvtmJUcUG3P4aqDgkiboHRH25TU1ubf8gKFakxJw6E6MmRNMEpbdojuGHf1vMFwS3UMNTVMs",
  "key22": "EaY9oRnUE5enGQepAeggmcjnMYCr45yvmNktr8a2mSVSondyX4WX1y1wLpvtS9MfevAndposbcanB34nYfErctV",
  "key23": "iHPyyCXD3uWCew4mJQe84qV7xmbtSndQL9fJ7n1XPaChgCekRo5DebN2QBSXc8yUX5zqkehf3Uk5TyFS6KvxNcX",
  "key24": "4kLrxBLHueDcSTXdreopA44QZESEnz88iD2zbGjpQHEJATHD7wrFgVfDhwDzvLnXsQGnFA5iGjRb2gPJtLi9c7eq",
  "key25": "4tcgK9uKB137gYTe7QnZJks8vt9r76DSkZSSj2uEMi44HVYgQ9SVpvEXMFSu8AJMJxwYZvKhpnEsGXS9XEtKETwU",
  "key26": "2GX1jzXvgn93D5qDyuyGFJWZJaFbgVriSNGX6N4dgtMrTXPrUoNSiFVdk33xKUPV66RdRNgQWR1tkCd4jJG4c3UJ",
  "key27": "3AiDqfHdaode6WTfi1rqhaD5539WwFJQTMhD1EBfj51VeFpzs67Hq9oVT8sQSiJp8YngxSEK1TGPzCBEfh5fwqxj",
  "key28": "41KzPBx3TJCWm6KWRVpJdMVAByQUFYycLJ8EDrYT47hxhEg1Vawi8JYEUFyhEQ28QX33Yex2J6AWX8yGGVMjAbqm"
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
