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
    "2RaH8dkHbFdvTSKsNAXsCS7kuNxmuvF8KjpZ6EpjSNMkhMTunP3fTx1DeZSYy9QgGdc1noncM3DcvsDhUfKD2Qfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWPpNHCQcdEzfbz5TfXHycC8NWVLsiuJYc1Fh5UjLYBECXqJ8FE8TffKEaXukzgrZqS5AxyHsyQtks2bnPS3DCs",
  "key1": "3ZuKcRR9sFAawC2pR9VGKeQP9YqVWdagGQWVeCX46CKfLEwo8BToR5mBTrhEgovDtrhDZnjaZQrXHLXF2DFNttFt",
  "key2": "23VGbGRNEtbAP12V3xQBDPvKm9Ge5P4X6dyBEfNMibPRpopx64x1LjitvK3vKZTU9c71GVTAacxr1CjJNE6WFqMM",
  "key3": "393Pu7KuRPFEHLHbsTEqpc3m74XtZ8qBJQJGKcGGJeh1QtpynTSXB5FDFE3nxrewAqFJd1AdCJMtokeqKuKKL1su",
  "key4": "5DJrSgdF7RJErhvDZfg7rnH1a8L5bCZaCPnJ7hnm7HHeCdo3NDMEqf3uUn9S6gVvM5NzoYoJEve2LXWpCFvhNGxt",
  "key5": "4maUGmfPX3AzWz2qWAkZgPzdgBmGXedt7YxTUoBjv1vtfYsU6r4xmQEfYp3cNk8PnqT5So1kNMhRcXsxacCeptnC",
  "key6": "wKFxMtB285NBbSGFLSSeuQUuyNiXWk2d1NBhfa9sazsnK12Jed6zsbc8esdZSSB89wd7hAZTPknbx3xQa1hvoqP",
  "key7": "5gemJktASCmYjYHrAbdooc5dC7DbW62wBssfzsoxQAzBkuDuHfpUVLFjq6zWxqGXcoRVyAErPuVrFSGEBEz82AMr",
  "key8": "4pxf4M1ueKw8crerVeYpa5MzagRcw3Cf6mUt9vECZKSixAnSRMUkgZ8jKJCPZo847pjfwpmjJpH7dp8c93mzq7B3",
  "key9": "5S43vEGyNN6xmTMGLCv52APcGyzWkbUuK1wciDa2JnLeVkr6rKTpeyb479W1q6BXxq7B27u3DXvV5sUmSW7RS5vs",
  "key10": "3HPC2Y8LRDN1idB5tBrAPhUv6ptp5TfyeEjXPHfuGB8BiLybUDejWjE9wRf32qhQBXcUZATzhTJ3Mabopuo7Jdna",
  "key11": "2erinYL9coq5aX9vP4jQjSwnrAxMnq4xGpok6vVgCKbibsMqaeJmLTCYUs9cv4DvrXKd6mFX4YJhb9eccp2eRsWz",
  "key12": "2Vo4jFV8WnSd9m6hMKr3o8qBSSid24kXeQR7zQgqQws99BixmpDjVsJGj2KvcMFyktZ3HdNRvzfDAApBDMP8mmgi",
  "key13": "3ponGk5bKESFigZ5at84nPWuG1xyQfwC3fsQmxQJX3bGYngWnwb2jTGDgeGYFQRWcSqLQgr9cduQGiGNDvmeMGuT",
  "key14": "DMKPPs5MwEZFE3yXUcD3ahZAhzAJLY6Yk4pQDi4DaoPUVHMPXfyJ3b1NnMPm8VkdedS6BmVaZHzWP4tUkyZZu5j",
  "key15": "2VhPYQrNfrkyCxuc1VAV8xF9XTbyphJhTeKUL1DbM55c3bZayoDJ1aSpvJmkjYEo8Jc5W7GeamrN6S7aCxiRMi7R",
  "key16": "5sXL5yGCBxHbusv9uWNJdq8stq3USW1MMxTLnJE1yCCZjmmPE3fTJJdZN2wuLUpfimC7ucuuaCsnYofPc91Vfiea",
  "key17": "3xtZ5hEhu3Hu6PJdaAUk9eu9gWHkyc2KBYqKVAdULCCQBwzPjMq5LNDJfUShQNcksgxFkMKXvu4eQnAJ8Mp3m1Dw",
  "key18": "45UWcGRRaCUT9LVN2JFZU2cnHxAML9srysoGWRDKFiZA6hE5frvyS5E8zC8CPhhg4ETe3UsKxrJXAbEAnEdFLsnK",
  "key19": "27a3w3rkPoBkvVmsLi1AfHWegzPZwa6XVmx9ivP7dcKwoSVmyQST7Jzha1PmSEbnkFRx8yVXcsRAxbPTSLpdU2s8",
  "key20": "2hufP92w9xufctdnBTkMwEnJ589zaw55KXA5g3psyz96NFRGdwychTyroc1ZTL7hHsZS2JPu6jynuocnjNGAwXJm",
  "key21": "5GKYhefixk9SJDuL2xq7U8hGQWArapWyvYRSi65JpqTgUkRhAc5WDrnwWjytuhaqnvhMBkFvEmPeW594mie1CJT5",
  "key22": "5wK2HG2TX4LiqcsBDFSSfgpyDu65s3WR61GPyZqmrDtwsLq3EULZJXwDPEUcEjq3nLgSeMozpjLUikUaaaCN1Hy7",
  "key23": "41Nf9MJ8zDE3SCaH8b3AvL4r2C2RgWm2ihfpmJXeDTF8TFPFVZ5BfMBWyrX9pnRjsBQnjwKwE5Kg5N4STwPhQkHz",
  "key24": "HprBYpZxWx6T12gFpUXaUoY8Fs115JFYukZy9paGoPKSz1MLLkCQP9699UdsP1AdPpYzBgAAMweJJUagUsb7ySp",
  "key25": "hmLpGgybYRipSwrxaupxhkiEhQJ55d2TZboAnWV8dcEJDMEAowBdaBRWXizprTMuufRBaQcCMSWCviqnXfmKkqh",
  "key26": "4N1V2xscZFpoebGCzXdaBUDwtsCRMNu4aX6X6yAf24HtUKEEXwr3eDVgqww4yPnUxN1xAHhLyhAdUKSBx9Zk2LU8",
  "key27": "DKaNh5eaTUfvr13gWdEXv23yrqwnVu1QRH3oVsi8AV9x4nDrBHuBAHNf472wcHSMKm4EUcsVJf92bskN8ZR8WuK",
  "key28": "3WwCqJ2cAArd4xBzXSS8SfuaTQGX7jwPB5wGcB87WDQQ3yRVw6b81uQVxRNkCp21TRHL6iHLTKRQePC4bDNpYtG8",
  "key29": "4D9yGPH7evajJfKgnCvBKbCyYZpqV9e4URvygM45Ewruin3KSAZ54gKMULmKqtuPAGxc73DTQuyJXJoJuKQ7Rwnd",
  "key30": "3JAULR87i1eAxgi7QZUjtWHhpR8YeMaSEfUaqpo9SPioJW2ep2h9yCD9k5fSgHxYmGXNYUMswJvHwexDD4D2UG3V",
  "key31": "5gx9gRAEm5uRGdJB7q4vQS4ywSffELUHjyu91irqYxdK3s4YtxvyxvUqZAncyRdGMUSwE8EqsZSVHwSX6vUeXm3S",
  "key32": "4QTFCYsaeApmvkQh9tz8jz9hF9BRVYgHC5yms3yvRZQNFJp6VUhzx3YKFFCvHcbAiaZ81koQdCYnKNM52GTjsuVs",
  "key33": "653F7tewn558WyK65KyHFkiD2ve13GbTgfVPh13md15Wb172h9WZ79722nRt9z1oqWtK2XBGK3XrKVW56AdKnWdy",
  "key34": "4KgBYCxkUPYUWbd8APVMY2u3wXCnsLwwasBKCd1ps421qc1UiPAW9ZHTtVE4XEmgZ3YWK9gY3fcvVtgFap5GCJk5",
  "key35": "4pBF7U3P4SkdQGhUjJuCmGEtUYEFM65u2S1Q75KmzSvEFkqurihw7R25PF8fPVG74QCX9oZ2yeRehWLcmNTkLkZs",
  "key36": "5Dwdo3CkFfMBe4eLBV6Ka4qgD7985XPKVTqAt8cbwAGnhVrbSW7aBT2Q4semGrcB1AAyq2KbDcnKxfKasGeaLjc7",
  "key37": "Xh3izuPGeBJapSpMSKWnit9i3K7cAijmu1duLbK6CbZsHe72XgM9jByFdbzZA3sGVWeQGcYiYhMA4iLjANyD9sQ",
  "key38": "339z4jLtnbmrG1tDm6qu3jcJcbMJ1s3NZ8LpjCyZJKG3bXwjoUhPfLNdfd4Fd8pmMo57TvQKDzvKWYPzoPqjXTod",
  "key39": "4cbKfMrS9XVvVb2SRuRMnouiitQZ9asiakq8dUGoxaoRx45kpttaF2drAJFMuxcytsZN3ddHbEdp5dTYyFBTugKB",
  "key40": "2opK8qDM9NsxJir27p7m7x97EGRfzVtycRoVRP7N4jjugDaiq9aYNGsRKjKupRDe88L8ahq4ehBMLm2FGWJxRtxh",
  "key41": "25joEB11BZ1fHRJCUfv4bVrpr2mWDpybULBA3dWhuckhKwMNpFL6X7sznFXSdTxSzUE2doCJ4H8ezK3qj5TdxEdm",
  "key42": "bLm4nux7HW6gkwVtCdV8m88KxAekbNx7zf5HhGGUY6aqaVKvotk7WwSd8haKtv9k9QffEFEDqRxx9nuBhwV4ous",
  "key43": "2HCG5EsjmzK6rTJmR6f784QQsUvdzy9ND8q5TJDLkvYCRnQhFKoBifZqbehs8Pye1zSeS9gWijPaUu8nTmeVjKxa",
  "key44": "rx8RmDvabi3AmuMMxNd1eSH7XFEXvCcbenfxc7m667NTm9YaNZPyt1ZaC5xT6RAivnvYiyDacj7fUkCkT94idPe",
  "key45": "3ELar9XSXRZg7vcY5DnGeDFshZFU1Pt1NC9UH9A8v4Zp8rsfGvk2zbS6dAcck8dmP77foaPNJJVLUWnhqWe8zRcs",
  "key46": "4qyZKcxet2hVcbahjLyu65XdSzKgKNMeQzfxyrpagrCFcernB1o5P1UQjFCkUK65QbLeE3XEHpo6nSrZwcpXXNYj",
  "key47": "3QB3jSmZknVViSztK2GTBukczGmSqj4F6AqE2ksdso2fXREeqvm1rk9DdrwLPdy1dr4P3mxakKUpDrrSc1XyuTDF",
  "key48": "67ZiwJdopAELKnLACuV7P82RrtvxatxMzPWuHJDetDJSz9uA1ND9VqR3Q6qwD4LFN6RiiuwK3YXZEHagJRghWhFm",
  "key49": "65C5qGyGhuUF895NBvbirhwpqqm9hGTHTaKTjeKcUizeCtQsCpD46Sry2zzGumD3NRVCiz9vPLpQ3RnmA1zLF8yN"
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
