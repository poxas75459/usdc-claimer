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
    "Y5BqySTvpNee2Dmp7HkUkVEPMYZrt755GwEfUWAV3WwLVMAnMKMaLGMAcVQ1M5Zn1dHjoCV5YLQDxenF43vHPYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqEBfaHKNbBnRT7o8XtgdBxvKxrXQi5zk3gku6rnuxh3JRJULvpnhbLshttzFMxDQYvr2KaAPCXBRxDnos7794i",
  "key1": "5koi3QzjNox218zPg1J5CdmayDoG9ReNgu8ebLpb17dDjSSLAbziX2XrTX5ngnDWM7zK16rT9Hr6YM6uREm2zj4Y",
  "key2": "JZrxcR3bSA4ySNyuYpeRdb4HL7mAJygFqFKZW4ug87LiH5iJw59wV6sjeGZCvFsgfsgWB2JT7pFbufWg1xiNF92",
  "key3": "2uAu4uAmd3KMAGG4D8KrgpahWV1ars8XiGU5a6dhcgiuRe55kzSdTHYdentY9dCGhHqnyZpakm7WNK8fpFRtR4kv",
  "key4": "52BoYDQx4jB1drQNvW6BE5UrtuEZu6hQfaqKSpsbXfaaFRDK7bsmwCYk1BKsUtpSAnuRMi6FXdr2nSCT1Kh7Qrpn",
  "key5": "54PGvn3iik7JVTGryNGyc7BanUTGjjhAQBWAHFza1xEKGsDRRdUCT1XZD9q4wdY1swCmGhGRMkDt2gBeUQjaVrQL",
  "key6": "2fcNvSHkF8U66SfXt4uxEFvQXW7SzgVnK75fyN7qV8QYDkmeL64iqrpTNdNXh4CVScdeerDtxSPUXnd3gutTvWbW",
  "key7": "4aGSxmbn6WtKTx5dJGLbrEBAe1vWxUqUTF2S7sv6Rx6Q3G6WqYtUVQ1KmmEYh6Vmra1ipN7xmrGceMn71vJvivKP",
  "key8": "3sRnQhJhtrd9WbmnFaCKTR5G2zLueD5v622Z4Cb3we6xV33yQ7UV5xMMepH9EovDKbXyioiZzCPs7xRmgGwPaDr4",
  "key9": "4wdkKHFPnSyZdEkJ7h2hx4Wgrtq9B47pMQV13BZqMwLG6XPt7o1tCyPJRnaKuPnzhBh79aETVz2ZYBYc2nRfuK74",
  "key10": "5eSjJaBQNnF3yrWfGzRizptiZ7nN1J91KxzkgRapoybTYLebsgpNCPnRBd25ddn6BfAjuyjQ4mBmz37EXArJCkdx",
  "key11": "525Qtsr6wamH2hhS4YyJTCu1ffeo5UpvoAHzaAB3DvpJotPvc9Lz9oXDRTdCQYpUadFmQbNmLq1D8uTPGFVoWo4e",
  "key12": "22sipWpBDfEddYRZcxvihDw7QGRqwEHr2yBwS8q9HihK5ygFyFKFBdmzLf4UZfGH1si5cW2R2sat1NuRMYj21Y5M",
  "key13": "2mXXGT7WP9eG5NL2qn3oSwi8fKUeFx8XUyqZmj4guyMXyWWoTsEC1YtqzozaXvYeMhsZz9RdiMDF2kJwA5wi3Rcn",
  "key14": "2veeoMXaWc1it7crtw9N9L5UL129uCy2wJjVSqD5Ekj4o1yjm8qx2tNcjXykCDjYMdvJxTpaPf2NDwpw4xtHTkDP",
  "key15": "5MPTs1UDDy2RJfpT7Z5q6MRFGa9WAwPxVL1nL5YJW8fmdZ3LLfipyqKA6G8xqtfg9Qmtfokt4R6zotSVSyKW6DY7",
  "key16": "5MKct4uaBsxYzuXeHLYa1txQWd3U7vuedmfrxKMM2fuf8d4fbEfn8Y7YeRwBASDXF4gTutuu7vt5Hvxohxsi7U2G",
  "key17": "2C9uAKpqLWj4aWYyUDHn6We13b9yjhVMgTNcgjy2LAcutf7ZPpUsPh4ochiFRS3EUzY3A8JUCvmBuasXWSrRY1ZS",
  "key18": "5UVVAozm4NuJmgk1SDwN6gc7HGx5UTMf1b2Bq3fkuhmcMbMZJTUDG5RyvFcMh7FYTUgrkPc9LYUFwZ2Vmtt9tri5",
  "key19": "2bpjpYgTZfDW4MsVu5xHhrTBNowCpaVowLJhrS3nRKSkv4PYLFAyJxjdjq1UGDuJ7Mswch8SANRGmvJmJ8GHjGAN",
  "key20": "5LF1sBdURHmLXB66enQbwsH2JaNWeQH2R1GffBRWjpFZ19NY9rdFgZgStoapf7jeiNrsmKVrfNi3mtr6WM7gBTVm",
  "key21": "5xQjBtwKqk3s5v7GacxYd7h9XmgvafbuYkjn2djtvuM7S13boQkooUgoKbxorQsAaMCMQYJw9XZUvMxh75fBV1Cx",
  "key22": "63KfkAj5L2Dc4SPYQZFKVeKg91etnNiZYn7D3FLKjzCw2e49PxUdPKswio6r8dgB7nmgoAkDLY6MiE3aW56k198z",
  "key23": "5d3sUpBYtjb51RCgGk3tskZWwdUJdaezsXcC5VLHKwKJ9DKwMRzv5LnFTUTLiyYrXNReSooAWBWz7Zgutv5N2hak",
  "key24": "B5GMHHtW5iBqxr51a5QYNhDfgcTiE7VnPve5bgnZcx8vsU6HhV1iQhWYqEVoeFY8JjXGmtrWEnwQd2ru14dLHPd",
  "key25": "2ZM6n45PogzF2uzC6mtJSbArHhvwMpDbG536Cz8Ekv5onBnusg6E3NWVCnBJmWZezbB4DtRskRcat5uM34fYz8gU",
  "key26": "B8UV1yuiajm4eXDDYddtKDUj7F7TnPNUEqpMr3F9WVXGUBnTF12m2DmaBnzEFJjTrGSjehf1y9qkWwGmQvUeRCP"
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
