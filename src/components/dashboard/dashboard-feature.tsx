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
    "yQ2hwQ5DRWBHegxuQweqTVuRJ1X8RGP5fYKq2Ddsn645STCjPZDHsMSY3u7ExKmkZNPLpqffkLUS6rxzUvjUKrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LiHdJFWuCFthRBGevzc5oGpfp2edKdRB3eeYMfKP3HWTGG9aryQCnH8iEZY8nbrtiS6FmKWnJZKj2z4jpfUtAp",
  "key1": "2qmjxSK2KFaXCUcg5ht58QJqsAxbhiZL3LARHYGHdN1imVDyvBXW5hngTY2cyTCrcDs3X4DW4oSJjovwmRWFnANV",
  "key2": "3wRTVXwQnQwbbd2Am4Hi735czyLgTaKd8WLjX6nE62fRcDqPM351UwsMYnmN9YfG6nV9s6enj263qCUoEwTNMAoW",
  "key3": "4RnvedHTAGx47DNxPV4fkX46c1iZP3Dj21MXLTKgP3JRbJfacPos49cBQtpX5YM9qybaR1J8XTHJvzciXhcwoQQE",
  "key4": "2ZEJ8EbV7nvi2VypnbQemxGd792XSLYsTepuBxYciNQHnHXmW8KQUyksxgu3d7tvHZR7BB8M1MXYgUrpJas2DLFS",
  "key5": "vchBoeRxUyX8JYNNAjATP8Xot2pZy5GmX2U7hkF9x81SaN97mworwTxZu4XS5tqetQMxdXdmkNqjVw2e3FPkbKx",
  "key6": "2UT7U8YP6kcQrFYYF6SfnbWvSz1GsHVfQXGr6cDPchRUvFTCcrZGhviF3Mfp5j4CbvHEcV57JdCsCc9kfs4xhgiQ",
  "key7": "2hhK7JTUS8JQAY5EeMJNtPFcGRWmib1DNH8fh4LADjiLtotcchpfvSbd542iCsZbxW5AbwQkJ8vUNU1MmVrQKCfn",
  "key8": "53DY6CYbTxqdBGofzouoVUA1TSLcmGbZM3mB8BAY8T9DFGVyTMY3r1Mifp2yGKc4dwuMmDLdBmuSWBPsgTkF78Hx",
  "key9": "2PJws6TyYtJckBk5j2scuSifkZx2xzuZ8nugCxAXJWvr31bp45cc5oFLKJgu3KvhfTPjmjp8ic8Egspjo1uyBjps",
  "key10": "4EVWLs7fZgKjth4654XeZhdPb3TzxC6DTMu6pdaYf8zTS86rLCZ8VRf1BBN3PTd8fXNwoKjb9bwvJNEnD4MAeVrc",
  "key11": "3sKSctRTj86FNUy6hD78UjUEjBGKCjAM3H4vnyhFWEDvkLgDABh8tvYrpRHe7kCP3XjR7jsffKrmSX5d4yX8rSzd",
  "key12": "4isNeC3HTiFKkhMH2HTjf3k8vZ7Vi6DdgYQxFv9ALFD57Wbvw7HeW9YXzPfvhfLfhbcTYKkbww5YLT9iGnFvVedq",
  "key13": "3nBXpvgJWpsKGzQu2BndkjdjHtRECEg6SFaYaJWVsFSM4shTCMrLoQdyoFdJMoy19Fu6aTre2dwnrsMDwhrJUri4",
  "key14": "TUuWjcJwFkTB5PtCUevxvtPskRV7LirYShN4Wr4zuaUCfCDGuUbGEs5WJY5wkFShiAf4hYAqFRKAMVouPcQB4gZ",
  "key15": "2a5eqfueq9PofELPmGp6rJ8v8rnAoi7RYafUs9Z15GGR3Z59ou1UkUQoobsKuPLxvzELXDXt2CbyFhhKARiKvPdZ",
  "key16": "Dc2MVp3Tm9CiEeTSwLcFmyh3LDWcaEA2Ufx6CbimokwLBtvJLXwCtcLwDzFvRjtS8U8cDZAocnvGmorH6JbY7bP",
  "key17": "wtVBx9zNyCiLwTHSFVzQZtk5ER3HU1YcmVR5gBFfc8AbJiBYHAwoYb2KxQNNBxjeazgt7dc81YBUowTyncZZQop",
  "key18": "3sA6xMjjJ3uY81B21vX6VTvsiRz1rFSRToaicypNoKbNWUtkchGbGdhb6h9Z8iX6kwLGvRb1KXsWoKQXy695U91q",
  "key19": "49ejZPdPU4KsDpvURPQoMoS464ugdxcBX4FrmxA5itWY4C4MVg9kZGZ2nqQM7FRMaD6beRwNAmvuBMQhGZ3N3DXm",
  "key20": "2nFBUBSQM7ZNn6uvJy2g3YNnVWAsT7JeteBtUXxPbd6kWGCVXmNtnobUTGNgsgXimXM8mJ6cka1TtSP99SKmXD9R",
  "key21": "2AQ5tgFSu1Uh6mnymNGGE8PRKHyfozyTpCmQbTbX39MWnKcH4uHpw9ebKyWns4kV4VMZeF8n6TrzW5rp9KouYG8S",
  "key22": "41TPMJQgvFeESsuWqaAC4z2J4J3bMSuUUCJnGLFzb2hkh4useuq1td8jSfPJ2BYg634u7SdxiEJ1cPJUDot8pA9B",
  "key23": "3nbp7yhu5NjU6AzqtSncFaX7nHGySAgGdMAYdLUXkR3DAbxxvc17ATA41hQLCCDeFtF2LgUW13bPpXMpwAodf3vZ",
  "key24": "2u3YFVWnp6aKPAD2UudqmcqqWvxgdkM3kWhAdqfCjCtAbP767Uifpgig5EVtSmdvzvwyqyTDfqHD4GKyVX1VxBoe",
  "key25": "2waJRGz4z1u9b7d2GhAfxYgnvvmou5CMy1B24AFBhX3wtNC6sNtUzeAVT1jGQ2ZLk4CWtmiYfuT2pkmgJTaSGmR4",
  "key26": "3HJsHUgT7JLpteXpTp8vEDUEg82ozRgLBSA3p7xhuYcuYziMhZ1VR4nJJn6UpjFbavnzMjw9qSv9oBZydyHX929Y",
  "key27": "28rrVALz48q9Bo5n8qpJUzsBDEbF3hARvmzxeYMzyyPbpP81sQPEQ4ujpjunqR97mWNt8pWoV1Q2GF9YPTT8MjB8",
  "key28": "2UHTZkvCSpjK33vc4YPjZauQSzBKx2Zu6gLv4R8kcJar1xEzxXVMGURxXTaX9AgfN18HaBTHtL5RJP7TAGAnVkFk",
  "key29": "3S87cs6r9dva56tJfH49YV6QygCaK5PX8wtfqcrwgVacvYJYTsudeSrvY3rERRdry6fLBMVpwcDgSX3KjdfDkbaz",
  "key30": "8SWQypJuhMq8R1CX5wzg9B4TK2WAyy1S3ia4m1Pn2g5eDk8ZCsr7Kb5cBC6Lac6T1eUEvVD8ZW52LuAgXMzuTo6",
  "key31": "FvCfzK9YLU5ViDw6jk4Svkj8i9aRitkrHX7NVjPrVrrUFSVwpGXpLC79JxLmRsmqj9wgxp7SvuS39qLNup4Bpfb",
  "key32": "mjG2KMhMGTQ6byyX9dWhe7AwzfNGHuZGxq6qabZQyKU5AZkdRjz8rJPGqs4gWbVNZZkguvtVXYmRG9gUgtzQmEs",
  "key33": "26PcAafYJue4cSRjt5J9c9vQRAmh8K6eCwSSzPAzMJEDBgj1ZtX6RLWDLsrPBiq4z91QHJGKdw7Nv3mBZPXQHExy",
  "key34": "24ri2LUSr85U65rbkW2oHBt6cKajcyPDruhYm8rSWHLPe6y8M5XdJMf2FjDdFBk4NfbsiK6tCR84twsTjaPjJG6d",
  "key35": "5t5bWvUiGxwxCQsEhnuFJGp9PuEYA3nnP613m7iN1NNuQkxjNQdCXBYejykBQPvxYSoc5WxueZRQ4J54rDBFEYji",
  "key36": "3HqKXqZXr8nA1PxfrRQTrq6QVydNgNZpwp3SJutMuiBEwNaDo5wbUNB6EunWUvrTM69chgWA32QnNaNFsQBHq14u",
  "key37": "3adbyToTKRvEFfWEJU7Pihs8HNC9mbEdZmuKmpGPuWqNYkFKZFSzavPV3Gaq2aJ5yYsVHQtv9QBdmGk4Ac7gdqp1",
  "key38": "3sG9iuir8kADCn4Le7UruoDYQj7FTdZJC6XvsnUjoJVWNxKSm3CrWS3g8Cwy74V82Kiehei7dSvXVS3V32vajo1B",
  "key39": "3U8PUgr73Q11Krw99rBwCyPYWwt154vphnrNcK7kso4GZKZuPXsug4Gq5EaSLwWBnZdfDusnWupFHLoxZQvv6wzh"
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
