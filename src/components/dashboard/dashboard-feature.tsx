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
    "5q9jLX7F9Dduu9pXMMftrEWVZJUSuffBoAQQB7CNuvXNjPQgE5h4XDTL884rYJN3cGgbA5VAUMXrCiB22YoNzJAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFPDxvRNh6CaaN3wv4AGsSBXhHWRftoVCWkV9DKs2L8zvxgPg54GbbpuCYrKxDbns269cWbF5T6HKtrkU1AyAyv",
  "key1": "3bVCHMCKqUEdQE84sbtm4bnDPhQz5KV8kE7kAYeeQhw2CyagcEYmsrDGvkMjbX4ucZZ4yFmf4HrMR6bnxtNysTs1",
  "key2": "4k2bUUFAuDXeNxrWUQtdoQLW3NxXMjyahoUTAnhTdJaVxUjwadPqUjoSwNpGqUFjGW9YVh9GGPqjmTcYhM9MmFap",
  "key3": "4sXXZz2paTiXqvuMTzxbHcFuBvH52xtaVvGUaMgCChqZDP9PybxWYHu2jbYohou7zjQRqWBuShkm6QQh6KEkwa7v",
  "key4": "2o68R7p1Z3CSwvWKqXdtAbaGRsDwmJ5mREH8wCLajar8Fz3nxENteDTXpzPHahJ7N9jtgnb6oyGmdjcZDermQXbh",
  "key5": "e6XsJLbwNS4C9JmKq5Bd7nwkS3XwoHiEP7Leo2FLGmm67tH3GAqG5ke6eqSm5yd7LPpi2mxP4pV3tUELysrQSVP",
  "key6": "3VDgt2yBVrRi3gTow66PSpZCTBdPanPXFPBoSAXj3wLqamReaAQwTWUgLrTKZD9B1tudoniyBJW85iXAwfTwPaB5",
  "key7": "4kLMsJpQnxiCu7piHtVutzgwccCXtZPh4YA3hWKgofKcvtKZutbEvrxUjtq58ZRtT8DVHiJW5mieJeFRJTAL6L4R",
  "key8": "25xHcMjQ8TjpU7BMTMsPh1yvEEPe5j5CG13cwRvJSADtAgjBkBbiiTrsRfra753qaKdFsZ8q39Y2K99Ycz7UfR8j",
  "key9": "5tGgTUiiueqGKiy6PqnQqjihqKERZu1qLZdCicFvo9usTzLYcW4mD9g8Ue5oBV4fbQYg2MCBZ5bRcFrZZujPT5wH",
  "key10": "4QbEsgZgAVRbKUh42x2c2cAYgGYd18GaS1L9qqs5UUjhYbNv4PtugHvKYvhFDY3KFS6UFk5Eu6Ne68Sq2uQ6uUxh",
  "key11": "3Gwa9f4rkv837sXkEsVRJ7CXUJ6fEwGkgDj7iTfYpQ8g6D1zdjFz41Td4TyjYe1k32QCKix2CnUMozP6mNWyLAyk",
  "key12": "37uCHzStyr44kNC2vivzHhoaTxXnoKDuzMb5dGGvrFK14RhTWbf8s6dYp8M2VH66Cg4zgCzWTA1eVJaEvYP8uSRF",
  "key13": "ttE87odhCfzAPEAMQVAm7ParkX22PbrGw4gRfMUpga43QEuSp1VMBFzyjat9o9ea6DoUVZhWuuL8XC8rBJ65u8U",
  "key14": "5d9c5bBCK7w5oDYNuy6xxEeqhjLm74nXwKvyqVj8iTWFf5v64LQthwi41A5EM5YNoF36KumBUgnWpg1GiJmuji3y",
  "key15": "2Gf4z8oSc2TXjDGAdgpfeAvcd9c9B2FHwgjL8wsorqqhLnMWnRozyHGQ9BUF42wV3bptLVdkKP633A9preHidDV6",
  "key16": "4La4dBT5euvGtuobMnfyTG3Yu9WfBcNH2NLDBGpCAA2ihjTZXAiunry5MCsvzm1UTzChrGGSgapJwJvSf2zHeW29",
  "key17": "36raNhQGkJeSL4GCrJAzr6cVL3RaqbYNwNdxTdmAm1Jzk5EeHku8or2nFqqk9FzZaHMmxpge15QYyeoRrnXMNRCH",
  "key18": "35eEY9yrg5bygMYkwZMrorAneeVr8W5Rt5usxQn6pLYeTAqaw4PFNbMyq5VuziJUJqqycv3XBghujw9pHUbvre43",
  "key19": "4Zn9gm6yfsn8jsWriZLnMe8yCjT523BZSC3gZeGRAqsGontWaALyCoC1QnRBr39gJYdVu4p1nVDpW8pfRgNWSQFm",
  "key20": "22Qq7LXFEHGhaHWuSqMNAodnS27bMpVuYoKAdciPuWQr8uNocVcHj9ViZY1JfeH7AgRr2f6sN1yziu2hYdSxfQTK",
  "key21": "4biPQXeDEwY6wAg4oYW4UgEPtLo3tT6NUfFb9zJi3UHnnAv9A6cSYt5gN9SyKFWLemSNjjPbPkUjDREzSoNpHi9F",
  "key22": "2e77Ph4CCtRGqEeEZDxEbYi8rwvoFd2dLoU6z4cJd4x4SUTHcoDE69a7NxfdL34pkDY2QsDoKg1XDVqQW9xZ7Hxa",
  "key23": "29cNfzt2w4ZbA9aaZXm2FNxjHMe3e24J4nHzds3nGfZRT6dJkqEXDevzsYwYWz8DifjgWBWay1PxARzRuMEXSEuw",
  "key24": "3NwwGCX8sJZss8nuha89uVxpyKUjdfk25jZ9MiWB9knP88idRatiCGMuFxoFbXU7QjWsymiQ1AnsjvCYBLUQgMgM",
  "key25": "QGJUGDUCE2FNASpSKV5ZnqvxiQujNNtcHk7G9WXGafxNCiJ4X3qHvor14hvQRTbfsobTRiP7ybaLg7Nnx2jHKG3",
  "key26": "2zGWz2E5FNfv2ZCpqP9bHHovsqh4Qqht98SFUDRMVi3hRAXVxCQcDhgAvcmSLLVt9i77J2ARZGPN6tMSbCvmgXjZ",
  "key27": "4m8c5NiXwYLAQ3H8r1yzzJSzaDY59SoAxtFavACaBfdZQTHCBmM779m7hRx2NmS2Wdrc4s6px2LihnwvkyBTXrPA",
  "key28": "3azTSKvBGY251GHL8Wc7476aeM82LWk4sMVvA6smeNQiTSaaReqVfHWQK2cjMtPZq9x9mMoB78oLFgC4nJswwWVC",
  "key29": "433MdoyzbYEUy5b9kkPnQnN9nx875Qo6eGgiFYAMiDq7UvXXNkoaYrD1X5Sze3Vpjv2PB4VNjVkTaPF8UmpZpfVH",
  "key30": "2HSj8MVM3qYczsmBzFTrf5DuNFpQTAK7qCdtR9xk4DWJhFJvwx6z8KzqhqAugVANHsvZu9mydU4biTXGWqoYj831",
  "key31": "56ytYJXYZTE5hwKN6sxyKUJGGn9U2tyAWEYExepwSApSNvkUW1BNecWTrVCsuxtaf75iy6QeZCW9rNwra8fdErnx",
  "key32": "3e2LnWDDhayfSJ4v6URap9HU6Tu3mPGZdK3ZukaMbE1Vg5NPQNK1hUmqEgVabkqz1WKSt63Tu5c1kVrAh3pr3xoD",
  "key33": "5Tvhb5VTKq45B6ZqVuYXU1fLcMbCHkXuH5dVgqjLQ9v3o7mi6WmCZRALVXMoeGzdugM9XxfR1LCyZwhiuhkUr44w",
  "key34": "3gEH6CAJBuw6LDA8KALJZxmCMqrtrbowgZQyHY6VXm46goYLMnNKeiBFCdD8wRPxJycR3CCXiURWcuxykH3xVpyj",
  "key35": "3dGzFiPbqgsfYGg5zFeCaVxV2rtp2pfcVn8bcSCjeaHo6cp93obgv3BsqGMR3ckpM2cFir2K5cRoCxroJJ9wrJ9r",
  "key36": "2TrUeJsd9Te98wXWS6gw65xonUG4v2mbHfZBZm5G6eNxtdVXwN3NXxYQjzAYh1JfC288Vb4XbKkCrotndX8mMJvM",
  "key37": "5GLDaFgVBmXPiRAHyrH3uyeMxfj5WWCroCDpZ5Y7vMVhWYxRS6nNhAL4AL19jp8q4PTM53cbdn1M8r6d59Czvmb6",
  "key38": "4xnLRJ21kEVTgM1cZRzq7BqzD5hLdjXo664b1QnKMx2VZLbmY3KmP83R9v2qFdMUtrxjEPBoWmfEhWuHep6UpZA6",
  "key39": "3HzfhKCoPEbcmHrizkB8GqhBgZ5MhfK1zTrusgTSrSkM3T8yD22CSQmPL5oEdescT5ugSnvan3exq9SzSFVN9nKN",
  "key40": "2NpWQWC4PZVD7YjStuGNcmTc5ayvMwivKNhN2BpWafXUd1oX9Htg2aFfqLdUm8BrMpgNddJpNCQpF18rWivc8c1U"
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
