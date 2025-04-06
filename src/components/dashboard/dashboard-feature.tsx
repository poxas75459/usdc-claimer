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
    "s2Zoomq8Pe569DWc1gm6yCQZcRyM6VMmhCJTba8nk2tUsLJTC9skm9zQkzCYkx4Lp46C1EbNs7YgN4ukEYSdHPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qaXEgPkBt4pZxX9WD8Vgp5qKnMtP5NcC4BQcDEfwn6sxV2Cz3qh7kCgWgpMVsscF927rgvHkofqighQDZV2yLp7",
  "key1": "3YaeFaTTfpisyugbehvA6LrmPc16fHfHMkxN8Mhv6JTanXX7T46BkKmS2tnAhwv2iX1oHZApjDHVqtADKf6Q9745",
  "key2": "5cM7TeVxKnADM6HtLk5dCnEg8FLTsoNrkAWqd666r2GhPPf3YzmvdL8sRR4dCeVC7G1HdYWXNi5d84sCVWGJRnno",
  "key3": "SN4RBsdfS8dKKnAQ6izPo5TPo7wDPGPPy9PdsVfxWuHUy1khs6AiBr5vBdGC29mA6HciZbyim5pohCfn7hP4iUg",
  "key4": "ALQ7NQMkKWEos7JCAx122wBtQDcdRNgjZuKspX9SkcFmthr3127zuMGLfKcW33NKh7mkAu1AcH7cS3v8ou5oBfF",
  "key5": "4zewNEiiUSNpo3TGRUMRCEUAJKpbJhnEUswDKyZgzFfPDRTq4WB5mFmJKmHuHUtHTquAgX9rqh2uzgWi7Uh1TQYJ",
  "key6": "4so8PM2DDsvpx5ofU48Mu3qJuM62ZUioff2y2LZfLTndn6Fjgxdsk51SKYQCya1RXtsorXpLgzBYqJGZqS9zePwg",
  "key7": "28mwfDkyjx3jWZ8usptvcdN8N2bCRqGG5TCLDM319yiAN6bLiP3LJtVzVQ3s3VPtPHYWUdjC6rmKDajpCBZFcsqs",
  "key8": "5bfGH6TxJPpmaM1j3M4GrSnarDjzffyqkyGx8GmmX8rtECDQtbC3QzJhr8bvf492ny5CbUTrGsPaPxNJ5tcajVoq",
  "key9": "4S17mNpWnPkL3eo4DMigru3A2vNaSur7mGcRuq2BSZf8pkVMTdMWr9R2yevveAa3XTvZ2A2Yd2xVXkPJuuiVoe5C",
  "key10": "4CMDm9qyR4zUksFKJv9mBqo2udV3UvMXHxwBfXAUdXMYqBWDPj9zpDw1SyZNn8YWeCMXWGbZs8o7PHf9Wu8bZH4y",
  "key11": "5JCgWJVByDQEungKQqZqTVgJ6DmStRq3vBjibpEyLxnRq7CE134nmvatNu3WBMS8kjYGBvtFUH1rBkyy34FQLqr3",
  "key12": "3mHqcasDUv6iXs3WspRgji8mKPSPj13sdALDzCfkPRg1zA1dJ65JRF7wNNgtQyhHHCcTsEaTskRtC3TKiSXwp133",
  "key13": "5F3ZiJwz3PnjjCAc1BfNsBByHLLmynPqcMg5nV6DSYwZLbmtXdojwb225qpxdDJ3fnQzudtiKAoF4oWqxNaajeXL",
  "key14": "2jKHXQdY2K4QdED9wMLnvnRpm1a8RbZ877WGZTXDeCsjtuHDHuLnbzDMi6Bm65A4nn5NqgcHRz3imeZcGUu5F1Q6",
  "key15": "4ouAMpNhDL5rwZwvQR6hPzDJ9YP1oEtEG198gNk3CdWcJeYv4EhdZxfNxZeWdZubuYxA7M23C1EQFQKRpBWuXeXp",
  "key16": "593yXWUn1TfrLLhZfBeyWVKid9zGuMRwxS3P3tNM6NUtEu5i6FkZDa7SAemmssRhLFNGfb9rCBzPvwtQU25zvmGh",
  "key17": "qKaiLW2RRMFrTtTofDfUNWS3m2NFQFMPRCuihMWGtgUkmCQw95skKH4XkD2HjfazodvmLyFfC13nj74XaUWr7Uk",
  "key18": "52DZ8hUQ3qi2acekz1PCsKxCvKJEC8CsQdFgX9HoBmarFLpTs9WvskKpCVbp1n4aa8vcVM9oHFccdUMrZys7qCnS",
  "key19": "dqDhZotPcBF52mwLdBnYZNFah5fujTRp6tSY3sLfjTya1ksodbnVJECA89nDiP6ahfrtfKUiVwKXX47QfuQ7GKv",
  "key20": "3YoUhCXdCyM9bXHbdsvCveTNST5KNeNU6gb5CgiqrjCtRPxUDgfZ3ku5sbV8Ade8jYfuDoWU36DsQekxTsJ3oPfP",
  "key21": "3Ch9xSeAgKRUYX5KLyp5Gp2pezFqcFSeeM4Am75S7caTTgxsNgrKLSQQ2NBaFHGtPoTCJ2Mm8RgVxWRcmG4LorX",
  "key22": "2aJqD8ev8VHWShCm2SKWAhJbnwL6avMsKPVBHpjFps6bRyhEnuyPJGEZs9m5QyVFFrRJxb7p3RCBMGZo81PrR2WU",
  "key23": "25NBypbeYroQvzyQthpkARfac4pjESh6oNJW1WK9pLoziVsKEQ9fNent1Ms4sT6Lf6ia716CZnx4YtTuiiPNReYc",
  "key24": "4bNrB7rHgeUPT8ZT6hpSZQK5Pexh1sDUL3up1fvw7HX3WwVAtb95Wb55fk2rnWwa85VLAocwFzQb1wJbwVvCCDhY",
  "key25": "61uUWiBhztYwZ7SvTBCdpFwwpXDrfTPEmiwHrd87bu3K3RGtsYDJrcQL7sQAgyKZBwdfZ7FiLmAREPSfxJzFBn6e",
  "key26": "2kfxDv81QfddGnyXPzTFCPLrJpvri56UmW2cXrQrSMjsBsUn1Hmshb7YXKziGLUfTAsrLkWr1aSuwL8f6QwW8GvD",
  "key27": "FZHLZXcVSw4mXdCcNottKs2Kjuhp6g8RR8n8w8BatYpasem6NDdxAbNa9xTSosEPxo17HtAtd3hxmy5GWk7BYwJ",
  "key28": "62A4RMSYVMvoEbhK2CHmfU2uWQzt2MHsJPvBZDwCEDqNtcbZvnif8WKRt5Nt8hvNrRyJKRrZKKyyYHChz9KL2AnX",
  "key29": "PD61xVX9NedPbAkSQCSuPumCtjbUaaSCqz989PxXSPDp39zFZWgBYHRUXnRrBa5yoTaCuVcq4qRM1nShpM722kP",
  "key30": "3a2QCw12PCXbkNKBainPJdnYbz148SsDJJE6DD79iRkz26jByzj2yAwjgnXDgxiW33PyQPwZn68NH3QLZj71AWng",
  "key31": "4pAv75njWeNgBkCauCSu3451mQzwqUh1MFjWvyTo4bVquDdEW7RGDGtyx9SenERGYS6cqyBv9N2YBSd1yKAa3hM6",
  "key32": "4RxDYMwtEqoB2UPXmAPuYVapjeYNkb9fqaKNmypUxo7ewbwRweSQYvf4QDVN126qBgfpAuBtnoPqUTu4fHFaYLHc",
  "key33": "5ewPzj5Hf7EUTQFgmaQm2iyCLd2qEbE1j3bYqx2UjXhjzvZrr6w1zBxPQQUzWsSfQHLMqHHNQDwaqdpfQB466CYo"
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
