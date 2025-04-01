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
    "4NZiU7GAD2GvwRewVw1g5s7W8w92pDsSNtm84bo7f4yvGk4eKR5QzFp8WcZb3p1NZR9xPqK639yeudNgBJgpUWz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sHDLPYwmrpVhKcL8skBEhteVTcUMVYjZfBhmGniQ4PPVJK6ifud5ykFEWxt2PSZAG8oQ8LDJypNijSUzU9j4yrv",
  "key1": "4uKrtJVyddb543vioA7HKb4vxBNfRedueyxXbkaESdmoQRyZPaMvsuAkSBAPPQ1zTKKNpUuT4kiXAJcFZ6ZbfhXx",
  "key2": "4UuCBL7X237vFPCwveTJGEfT3fzkxxEcDADHpLSioxwYUskieMnhzV9S4e6fB8d3xWEwwcam2qoSMCt4HzhyJTw6",
  "key3": "4NrrReFHQkHtWru5UWh2vjN3EtHTc6xHCdqjKSG2hsXohuQpb93VKLUVYCxa3ECoH26tiWGKQDwhhvS2ZmRYDdkX",
  "key4": "57s8TzfcWPixRQcEaR5ovLFPUXeThHtHFV1H9TV9GrpnHVNQW6thuVXfoZJVHWYLZkvgotVmaS4aZ8DCjnuphmJC",
  "key5": "3whQZTywGR19AejZbJeefDS9mKWHXXrxyuyWe2dst6s93c6TxLTJzstayeSM3r6KEJudAJ8Taohxv4e4xZxeVgXE",
  "key6": "YsMda1QCGKSbDVtoz6NXn6mE7nSLRv5aafKfxQdpVP7pQ8us5qAg3L8ircrVLu5Dv5SPdxdZhaczjRQTPPaNz9V",
  "key7": "5QDnwQ2p2DeJ1ApxjE4Ma2GMPYiTYunPPinzL9E6PwGCx2nrDceAmfFb3VkzJgfNJzKKMPaXVnpqzBWji7hU8H1R",
  "key8": "2V7hqPWizEqjQ1fc2Bj5TitYrgybUHxaMLRHiBuo7RLL8BRLwAdisDhsPZe9H6wegDHPn1NtVbjUrS6byPc3w8Gr",
  "key9": "348nmVho5WVaNVyL7S4yQZ98t9sYqNPj7fFwwP1XB4wqL4yEXmFXmrXDpuAS6Sy6b3Ajg8JFDJDCMgSRMixGWTEY",
  "key10": "5JHCrkxpwdZT4wzANo2CgzQDRkczyEcqz8RkJQC12sywnou6TC84HzD5dzxRsuygH6DYhkLuSxaKJvtjwy72oQHV",
  "key11": "569NKdcmS7AUTAK2H7PeSMEoy9EQjL6G2MNHwFKXiXfBQzM2ehXy4qRUndtowBgZtKxVVgBWvZrj5ojJVQ8a6XZZ",
  "key12": "27zQycceqaGwZMzUsJKpLrnh4tziHyEWFR57q3Na1bZAR9TJptWfTCweVaFBq9k3Kn1X5Sqnniu9ozkWGHU6rbk5",
  "key13": "4mEK4XaC41S69kH9kbk13svhCY91gocSahogdJe5HwZnXjsN424Yvxpxxz51f71QZDKovz3RHujz8EN7BfEDnjV1",
  "key14": "2hunHeXzHocgn1KTZPWsSeDvpQkrY7KmCWi2Ex9WsMN5MNFzMPbZMK6gASgnjcJMECqMYdxSPDRsc2YLRwd9n1rk",
  "key15": "4XH5wzoXCwxG4yQQ12ZmGXt1eGXvzMTfZW85qFpPtopP6RopvarjN3nWuhqkaKvuQ6nQQsdLUvGiN2Psj9v7udcS",
  "key16": "jPJ4GDTLCHexELVyJsmDWMHaY611JAjiDpsppBqenTnUykNG6yYEtY4cLzbRzw9XeWychY6QVyj41vSUieXuqVm",
  "key17": "5hh9rQsxqJ7hjhQNvpa6xHQTK91u5vMNgLb3sMJ237Tg4YWUd8Ljidf8QjkpJrUVGtQo6vSxBWk2RDWDwWeg4Cz5",
  "key18": "4fZvhExpLzEnav4SMkNRhXMje5LiQZjx38jbsCxU4HqymmjqTAcKped3T8VGMb3C2oWtbjynKsMxJb6YKzQhRyVm",
  "key19": "5Jqvee8spBYcd22YtWF2s5rehwGV8B38rsWoXSgFEFBWysiesV8mmSV31BJLYifA1hbYMbWm5Dj6KfnPKmFyG4t6",
  "key20": "63PCw1hHXjvpfkafNndhrYpmhh4tGhYzt5NVb4TN8EBy1m8DnLb4eV2E4rY1r9MnFgaMnRP2MZWAsTkv93dBxKnk",
  "key21": "66AqR7mrcb6EnSJyoSsmz4KzyqkcaErPcTbY4M95cvVDHjK1r99dfomeQNyhxJKVLiXgbF8sGpTcvZA9a6GeQNkm",
  "key22": "3cWMYan5NrxstiN4VD11Kz4NdjS7FiWmBQAL3JEhXqrUzfuKpZVd8Ez2rBQTkr5GqAWY4fBjWNhzoX8aMq52GypL",
  "key23": "5ucXVEdskx5bwsy9BxwxSGBnGpUKH3PGqQXQq4NRshCX4WdG4VKWK7w47p1QARuEHxrCrGAAey9TEiWzrJWDi3tg",
  "key24": "3JdTsR6Zi1vpJGT9DKdH82hvZoVUTFmwVmW2W9C3q2tMx5AeJXEGRysWr8axesF8xBajUgcxinPNRzR4W92XWVVQ",
  "key25": "52dZPyCoKv1Nrre58HyRcUBnxdx8RRQbb5fJVkE3kzdSGHA4CshXm7qUkSpfeDw8fVMpvJvvH2jjWyfTM4kXbMsb",
  "key26": "4f7TcuWSXQZT4LyAM2q8GaHTsMp9ZxZ9DmsvjYiZ97PE8Cni7kvqtFcqPFfzGmDnkAG4HU8Xe6T22MoYvN2GkxL3",
  "key27": "2PHEJA5qk8UnwaEMZaPzT2zCYvQXUWgvyNTWsAg2Cf1RtFXx63HzxHSupwFMaz1hGGUm3R11tE7kE8biWAezwfte",
  "key28": "2UGE4Zh6vc5SA3HXGPDiTEGmgJN8BszpaLSLrF67QU5Zj7dpYz2LJmhX3si7u8B3tvqNXyvxhggFMz89yv4sKkD4",
  "key29": "C8qccUtSVw9rSqFurzyFTnG5xyP1pxVbd7NC4qEAwbm8kKNQgMoEjbK5CVRCruDVXuVw5j6sCZ68s2Udy4qH2dw",
  "key30": "37nqmsxUqMjQvFmC9xtzmiqRL9LTMtBAHyXu5tYDBquuXHgZ8xjPBonnrjx5zCZTqHNrS9VMCk7FhWoMJt1bDYCG",
  "key31": "65xoLkLkhLRxAUySGJAyqPanzGYRcL25NVovFgkcHeccb6QguMhXYE2UgopuJkyCviLDNy3PuuBJekzzHokFTGKq",
  "key32": "DahEvn13ShfKgdfcgZmJezwZvMq6nH8gv1Tm4riwiepKfEDDFRhi9hDbpXPT8k8aiGyNgiw4f5thDkSFX5YUvzk",
  "key33": "4vDfjsJbHAviLCDKxCVpYAGESSxLXHDVVUedVFvLNbXx8mkRQxNev9mQkS9HtdBcSQqQc4vji9ts3VCioG8YxDav",
  "key34": "4easbBgMQB7AovpwkMN76JfbrZeH47XgQ346oPK9pF8WKReGc7KHGmaamcSXh1edfyi4wBvWfm7tS4creYeeerrh"
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
