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
    "66zFNCCbstuWyFtdihBXfCyFkFm1pM1akEuWNDqgmmdbnWKBtKeRtZY2aptsuNnag2XWjC77QuAj6woY3hgAWuCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5arrY8Xyh9DKf7ST8xaNV41YtjQBbtyPMMMvFwNpiS8f5C9bbPgpBadDrFLRfGrMJLXDbSphH1uVnuHyvevPmLir",
  "key1": "4WALfcDZH79T65ZhGeJvdYDKYUQBrXq6qKJqZj8mLcD2JQDBZ64CSQ8WFbcUjBWT8yzcieME7oCAne9e4pGPFxhG",
  "key2": "5hTcqygmcxJboFFZNaMLVHsBTSyB2vPPkJft7DvUsC3KrYjShs4vU33W69xDaakdd7YGjcBg9q7K54Z8TXssRFWZ",
  "key3": "5fyF5BoTguHRMLRKUSq6dDzs9eSdgAfbDjdJfzBcACwqYbEmvFhm4MSmzgR77ZPh5gMWaeUfxmHyti3S3HFEFXcX",
  "key4": "5pZmyYL4xoWowrSKxCQZ4Ucaev2YVs9LtXrrrByLNxiLe81LoFBEvB3ttrKepsMPiWVADCPJrxorMPTyvWNwysXX",
  "key5": "5Y2zX2TSxm8be64ZHnQEiGZt5k6E4ZRsZA64TjkhEmktjpJgj8fQXjCm7K5fvhjgTEkh7RfQzfgJW5gRcDPL7uRz",
  "key6": "3C57SeDdPbeJHbewuLSdcttYAgZkCT8hJSCvjrxuxo91ek8VRACMn4LmxMuFZsXzbgWFgpAsBjHr3MAaUZMCPaEH",
  "key7": "6LRp9827DLAY1dTqjE9ffJqGsnoEYK1c2bEqSuNz4r59dMx86UiYwpjjfGGYrnxUFYSbtFnLd2tBJgLRtSk73Sy",
  "key8": "2yMT2zf4yzpswSE6Mfw3Rzjmsu6eXq892qTB2fgFGfi7Bjy1KWWtWg8Je7TAa6PZQDgDJnvthpw4LtoeVTq7cBzb",
  "key9": "66zaNwX3p4PaNHwY9wZ7UZF8ME8F5gVDFkee2MjtMJ1fPmmpLMRRjFTYZWeqUTpUsubZQkxXwB4oLmYdnLsLUMDb",
  "key10": "5rkSsiTog51jUfh9CmvFQoXarMakqGVySaW74WPn8jvZs2T8mJWa31sVdeCtwzd2P1C8qsqwM9W4JxjNyCMy4yVF",
  "key11": "3Avh7oEsaccGC77VgpFTPbQyskiwec6DSxafNS1jemQrg4GnxxEjHCYxnmqsg4PHwurYbx556Xw866DuUpAjGLX6",
  "key12": "4PL8Nu5guk84K28D7QeaS9DSgZbqonf5NQjXPq2n9jA2ftg2uqt9PVzYtucYo1e6f42Tr7Jbxn2jFc3mxUdrQdDB",
  "key13": "3ePV9bfePVPjwCLCVLKM46SayjMoXQ82VytRApajfzYfYCvwKRGwe8NVuNzBdiaCQFsNVCtnhNHGwU6rv45Yv7Dc",
  "key14": "3qBMBhfAk8zsNUhbDDjQkaXpUnSDUKhCeat4Cgdizjm6VayGPk4LEYMAtDmRYCsS3Yurv1t9bjzVZ2DABoirEyp9",
  "key15": "5xmQkGK2W6L3FSFFe9svutRGUxf6P2ryo7SNDJXJ9BRjqiJuFjeiBQ6Zb75HL2ybimqwoiDzEtgrqqZxTXQiNLdT",
  "key16": "5h23dDBxrkDL9jaRuYQRwSGjVJsFYnNsNYWu2nZrhtf686B1NkoT9Gr8jU6XXVBspkynfDxPsEvJcLpMwz2hHn7c",
  "key17": "5eGY6YGNoDxRUNtW3ScoobL9cwd8RMpfNHwbWzqUnxMmr8u3z5BzDSgWKXGHtH3mdikwY24SZqye7y22G87tT21U",
  "key18": "36TMFVXepErKa1aQp81eQzbPiuCSCqHkqjNrU8NwRVHrHnmwEQro1fptuNufWkfJ7SAqLizPFSiGJAY2kQxYEuZc",
  "key19": "58sFmaqmQUc4mj1v9DPaLMSnGAMmU7DCReHdji3zaKgGSkpRgBfVEgsRXx6H7oaUDe6WE36MUYPnzUuxrXKiFbn7",
  "key20": "3fyVr8ndQKHbqUb2JNXgDEyCjZNV3E1JY8PUgvu8Tp6sKebKfdUW4wBg2vUPBiHq8hC74DoCqDybNeiqp9BBY4EV",
  "key21": "2tLpzVHpHzh38ia1o2nSrLWdByr3k2hBRWpyrwp6PYjuJzuufuX4kt9beXwhtx9EpXto2T5QhQCJwM6z8ScBCHKu",
  "key22": "2PzeU7EMWZaSAokQZCwUeTrmX3MfZ1XwgfqT39QykXvHf2gBNAzfjusHDNKr9g8QbFmdL63VKe3BNEPehiQyekBw",
  "key23": "VyA5yUkYBeyRcP3KYi9RymRo8cr5LE2ea4sKy4diLQEqQkAtqA1oSSLvhtxyMeAj3io8x4mwwRmiP312gaJcws4",
  "key24": "2ZuLK948bT84v5Q2fZUk3ZDG93uy9KyTKa6wmkZjkqLvcxJxe5gQbfKwRp6MpCy2DqD6aCwvqYsG4rL6BThGqj5b"
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
