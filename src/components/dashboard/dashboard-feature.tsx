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
    "3DCaWCWA9kRvuyprLPR1QL7hNm6d8K3rBfoxuZywCLVcEtXFsLvGFp46Q8DDg8MnLMeKGtbWAT4CRGXaNjxQxMYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tchWb2Ed28Nnm5bRRETFrLDwTnj1UuuaSXjSjSE4w1eAxvvfjM7Z5pkTb46R5EDdWEdDfHv7Ru1mNdvLB241TzM",
  "key1": "3VTY8YGG54dF3KPbuTA5yDdrCTsHG1FCrfskCkQWzeepz694C2haCXE3eQXBVNhH13uvmExQJDsv2JtjaJvuYDRn",
  "key2": "4qhb3dEu5QitBT6zWm9j7v7ygexoYoXk9ejXhG31YcRcVTfuMd9nTfivFKyyCaBxThin9auDePPgEzPjPxuEzRYh",
  "key3": "2mbJ4V2SPZpmJzy6JxsGuQzkyKho7q1KgtBamXis26WeVssV4rR9u9AquT81DwSZXmvSJsNABB748vGUcmEkR8y9",
  "key4": "5iJbr5bjS9Brs8dXQcNHzVjho8rSQKMB6GdFYLFRXpbPeLu9rH3HVKpnRVpFp7c4h4pNi4nXJjohFgK7PmGDi4AP",
  "key5": "UyZSRhJw7ppDpELdGvEGCuKTeC1zpJK9LVm9Lxqsutbw15m9U3PiP1J2Poi2MAyKkmV4JnuS1MxPFxaSnJuuSgA",
  "key6": "4y93nKNNEoh59EvJy1G52EcWeaCRoQur7Ta4U3Lx9UpqaVbTRcZJzeTP3xMWGZxwumRuimJxE2rjpY7PwQs8cZCv",
  "key7": "2KXtmHJ6MZA7XkEJHWZimqAsGJbCNHFY57zHytwUrbJhyrjUqhRCLTqtURNKBp7tXNBV6iLTYQF2TkYqLd23xQBv",
  "key8": "2e93snYiVuexLaRg7HpRTMT6ZAArhGWouHctuqYZKnmFaFEUH73nBdAxAs5PoiKdtUDSGaPDuqaaVr69AJJ1WpR8",
  "key9": "5KsAqxzehv7QGUtQWrQiZFUHxXLciE63SksLtvuPd8joAtpdmHjEEeMFxd5dxsZXDZqGoo393XEY6yJKUzzaC3zg",
  "key10": "2KBZ4fhWrBQvXgVCiLbQ9VL1zTMAdYuuU5RtKS3be1y9ma75ebXUFwroJcUs16qa419KT6D4gLKUGG1bkFdh1dyZ",
  "key11": "RnrQLihypf2WbD1GY5ggnG2GKZsK8PiVQERTMpNqFFTTBBePRMVA6ihR6AmMj53uwK4m1myogozQn8UAHR2Xi7A",
  "key12": "4xUuhD9TxrChWHnBqRzZ9fDWpLBDwKNxbD4Lq8YHibo8gQ1qHsjo1mUji1N97gFJd3wjDGSUkMVPpE4EqKwJDmhy",
  "key13": "gVHyP1RQTTVRvdHANs9bWTSr9wRsfqegsqzi9Utv2sA49wSnUjKz4d9WjqpJzxrmgGUEVEboTEtKQsxVdzHaoXN",
  "key14": "2LeGXexAa9u9Q7cnusm7DNfrtM62vC2vKjii5jwjRhV8DAV4jPZLDfFa63YPHnxbB8f5ux643dFQr1go7oTibmLr",
  "key15": "3QDsMWevMUqm75CTXUEon4sXd7vFep5VpTmeNKejQMpBouyEtfRX1UdSVTU2xsd1gLVHFK4DNXgJQwfw6MZ1BXbH",
  "key16": "2VcLWVCbnu6bEFBdNyJ1V7LaHRvyFFz8SpDPekL7Rs1n5H7G89jy6Bt8WRqikYeQkhATVntE72daaAkyqyUnUfc4",
  "key17": "53bxbNgTZwdh34rRA9dMUYNKb4xgAU2v4LCK9Jrf4YTiLfazT7CYLDDnTVG51Lpcjk5A2y7om1heH4dyRKWUh2xe",
  "key18": "KBMSuhZH4NJbcXmoTFgM5ztaae3dTTSwhfUA3W8DyEx2FkRfaqW2PXzRTUBbPzcPYTo6Rk1AMuvPr6mXsqkmrrY",
  "key19": "4QMPti7adbkDzScFkjt185q3vWanmSLb2sxxigXotgUzfyEWN6PpSuaVckHgnviykdYxAoE7Fsf8KZEAekzQx8Q5",
  "key20": "4dgunDsm3YWydNuVvQoAMQtnUse5aEivR4VvKgEXh6bYctQMTWDvHeAFCKKWwBpjpGYcxEP1KyouHw8orfWfNvbX",
  "key21": "4z8sSnKC4NcQsfYp8SNWTy9itjLcHu6DxtWdpi3BBBLAzcZfg3UnrkUXMuzCszTKdNrXYHw8aA3qQAFhT24v7jdf",
  "key22": "WauHowramCFYdq78svKtf4cHh7MX2eZh4Xm1MCWME2TuaANFqFqwFyQ6ixB3ccrSVrNXnr73vEUwXGDtzXmL1ji",
  "key23": "2i7zg8xpySJXtRTsPJoZTSBDRRyQfDXf8XZE45DxQoEbpKBeVbSVnrutL444jF3puypF6ucyw8EA4nQ79uGxjSLT",
  "key24": "3xuRpgJd5HZDe1NYSYsh2UQtaHejGaKzvJjSRtoXQS7GFkXJU7mxrZo1aH4Vt4JQWwDEYACA16yhiNxSDb4e6uPG",
  "key25": "4fb9Rv2RgZo2dGrCJpe7vDzoEA9MTbvqL34YT2qSunwGiJQCw2mVyCd4aNbsevE2mQHEZ5EG2wAEWc4doAG8HLwq",
  "key26": "5AWZtZy3iJU8Gm2Xa3QorgoUsuiSVFbsUzKsa96nMkweopTRL8pF62kxcbz8w1PGxGAkWgTWjBa41FpSn2228Vw2",
  "key27": "3iUpHQmvkGE9dc8BXGAJYk4r4zJkUQ3JTPnBLkFGT34g43ViWndRWMbAxRpvxTNKeb15xa8ga15AQtijmy6RKgJE"
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
