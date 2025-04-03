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
    "39MgpUyVUusvy5CvoVh3kph767vu9bzqdD3zZDt66cVpNaz34qe16oVHCrVgxBxTQek58BmxKHePUKHNvxmWm15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EwdtGD39pFk7vYmtg4N4JLejFKikFo1pMFbt99LU3HoMUTuQbUgFai5nxBAbRtRnNY8z7UfxBUmEKFKrpcBFkHt",
  "key1": "wAKxzAZ3HrqnRfEdUba2byncS33AoYuUUMqx15WAbnoWqxhrB5Y7RojvvXGwibSpS6AdpNQo5XEe1PBVyRWATAR",
  "key2": "2v6eURRNkt1S3e48Dfx4bF19YsidQY7TXWUz7zL42ULximbkMVjAVc3a9GXkUyWmHyQKt9vaHnmzDHQztbBquCPB",
  "key3": "3wQPyZgBaTLZQUeKw6vUcJ1BWfTaH44EUtqNSnzvfByHYnQ4Tmzg3Jdb7E87bajF4R22tjk6TSvHqwQdVxgzdoh",
  "key4": "P9PMkK5CVcaQvbEeMx44hiLjDZttMF2M3bzqsmsxmniAtxjznH6pow4Go5QuzkmAx4mHxG9MmJbYYioyCYFm3rW",
  "key5": "4MjVoCEAwX7dL4sAhM1e4TrYoqF1Ft2sM9SdRd2uEMriauJBHgTn1kNLo6zSB9DEXuZdfpbLKLCqcAE36RPt7x4j",
  "key6": "54rQTP5ZAvhqeFVsjaag8KZJrhR7gUcsTUZEgQY5SvZxgft9ohu5HVtobu9DZ8yjBbiKu4mYug1tLXEBXoVBDmwX",
  "key7": "yTbPj5KZfBanNWzMzoaxSZbMSHur86jcfp9Si4ovYRUzvmjUw5DjUpaba97Xem8bbGa5M9JAxxQuQyYTXWYLKHK",
  "key8": "32ao1cmKC9NCSDKEMfY88SSSPmsjn8dL6nEnNM4CDw3qWu9BRG8XamyrQ2YbV4sqGyqSm76wvLaYkSftP6pVHchm",
  "key9": "eEzSgKWRfAMyxoCPMSDkazbrmv9EFrDcn37J9Q82gzoJgCzAkJ6xuCfCKcRc77ocevv2vGzZB3HrTCZiyXH2CVq",
  "key10": "4StngG3khVjaHhHD2DCWa1qNL28ojtKKyZrWgt5md2DA1cy45oDvcoGdvVzh6E9AixmGCjAzfu2KNbeNQfyQwa4s",
  "key11": "2JFb3TfhSyrVMxVDfcb63iXYT39p9pQCdZhRmP8xrUFT6jdhFJW3btuzuNGJUHUsk1JuCWW6zmQSb4ECPRTj3FPs",
  "key12": "3mK3R8W7XbKHLjtMF1PrLyry7BFPbzWbaeW9YJpnHeU1CTbLEiLay56djsviNwbnbDM3UqhbhzT9UqPgyoLuKvSn",
  "key13": "4Z2z12k9EZvJ5ebPovxSPXWpT7AaynfPLUwbmL4fwwQBGWezMpWyCMBypM5uRLHCz8JN9fesTfPapfwy8bHJPHm1",
  "key14": "2oM34cfVrFgKvJ4tB5idEaHjvwJKbe9r1Rpcey7evQLwn7J7bUF9diGKsd8UbyMTLubukDMFTuGcgbLNQgaAcDNX",
  "key15": "4upCh4Zmd1Z5C29hbTEFznyLZvhJTh5L3LZRvizCtEdmiRqfKxTPS3soDTsz5Hhb3xpY94Y4m7WXm74zVvBDqyFe",
  "key16": "5TJuAiPskyG9A8r7hHSZapC2jtqmyPPz6fz3fEpBjvnuygYhbQ7JRT5PGJr2cXhpgmPMc2Pa51N4qqT2kHZjHUMU",
  "key17": "3TJdJmfGNXPzSAuT3fT2doQBLPQmUJqorKRPG1G3mpMPiTvnej7MD3t6dgwmhRedZg9Qq6odzVNzY6Rhgbmm4bpp",
  "key18": "2DBwq6r4LnMc2YAJvnjnViFFZGpjPg754PTjtHvkcXwN7RDHSGY7pvvcnBxgtRU9Jwsd8ppKTF5rRd8QTT1RWwEp",
  "key19": "3XoeuiAsfe98oszRLhEXg7aoNq2XthPjU56NbiPdcGkX876xDHQQXKozxgjwgkjYM4u2LxfdXLB7JnwBThZgqZ54",
  "key20": "25S1jHUVWP8ifjZ25S3LuXPDd7QcYgdjypv3oZptPruzxs7PJgM8tPKab6ZXSis6DJPqa7mNTKdC2DmCpxtCzE8x",
  "key21": "ftRd71vgZyNvqSzH6pPubWS7WTYYZZS6D3MBuqezVUobYkRuKhLaWrWjDSWJowtxsi133oVZReuk5fryKRe5Dvm",
  "key22": "FwMRNuFbxzxAaF32sdJhTaCy85f2QoRRN7ShBzbSwgbFZuSAoihJZoD5aNJ1j4t7PXepZXfMpsiuHEydSBAN2Eq",
  "key23": "3eCPNfpFmzYDYWduh4DcfGcckTnoYs1rRMLYbMpC2DN7XwGM3LffFU6xBNGWm1dSLNcaP3SBcGdnqmZ7KhRWbBcC",
  "key24": "2aChdyjLZuScFhkbxyDX5HTawi2vnQkkX5zNdb3xSNxq6XkQCG1ijawb3gSU7kmGYFRo858ML9JwNmiFLnuQHpjB",
  "key25": "BqgHGsHHz9ejTD1N5po5ASDwbsVFztSSKaee8EJNSjAfNxFZ4cGR8YEp2PGBRXye7cGzFNHTEZ3q1LSrvZjKZpz",
  "key26": "65j6WHdLrQUzRb68KLfxHWQMPxYzeaimFhsPai5D8kRiRDg6S691Y78irXeqhLdHWxMzuyk2sUbuYLF5eW4XzhiJ",
  "key27": "5mNP5VrfCWv2sNC1DP41MXsGpMApWvno9yMZh1yyEpzokZrqzAuPNwNexyd8HMgNJXnJt8jGPxGVEWiGfJznsGon",
  "key28": "EKfUXvV4X8jYPHssr2wgRN3EVFaWd7CDkZp49xqhkfhj1wgyHLBEea7pfgjwe8cGavo2g448Frk1DYgkwkfkUyU",
  "key29": "3MgiJr8MWYaivHzvgZP9zi4Wz3d6HqeDo45GdWUHfZSmqtoGbruVYWuqEQ4Eh1A8rn12oHW4ZAJpLFbCqZ7oxopX",
  "key30": "38gFTRz71zU4n7naWCZhAXjqcWammVkYCaxpMmrms9twfNPnoAAXd8zJDVNaupbHxen8qpiZ7efMrFfghWkRfcU1",
  "key31": "3JDL4YnAjcPmcUfj6Gka5yHxNWbpkRaXbhrp5hU54wJhprZgtFCupthmamEyYdnKgj7WJT9HZXHaMfgNXzGgnhyF",
  "key32": "3wJ8xsG1NS55xxamHBrCWV35GRug6oTbVxq9MzBEZYsJn2jBJhDWFXEXVKwnz9L2E8SHeV7KwnNKS3RYP1RHZJCm",
  "key33": "2dwjbJzaX16ED1Fzf8xGZZmM6K3DGzg3C2sXGV7J89F74VZExmNt4TEVSU3w3RstiJaH65ercbhW7ppq7wwEJzSf",
  "key34": "d12FrBAqnzTnX2qYH3KyNWn7j7csYtughs8qPFq4GWwtdm6v8FMR6FNb4PCnT1XEwFiMsw4HM9eDhvK2aTFVGYc",
  "key35": "63qUsrzM3rk5vDyYqtu9AZT8Q97XNR7PaKjwZZ4T3R8XVFdvFAMkLdyrxS6sExo6FXBP8x2toVEJxQ7Xt82MFtcJ"
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
