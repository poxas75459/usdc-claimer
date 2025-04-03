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
    "2CMCifXFbfG5QjETRmnirer8RTTfaiC9h9bRQrhSnLHk5ZU4JjLHTCaoSEbeemtbMkDBXTpmigVVZLWeiC8rWKKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62FCH15mWH8XT3AVKugB5whTYB4ju1LGG9e7MSf2BVdk1Dz22V7oTt6Y7aAfFeaHxA86VKs8jDJafsarf17VWsj2",
  "key1": "669vNpW3NAsEovvQ6v2sYHZ2xtBtwi48DomiMY44gFmtgG3Y4Uj9NdV3dXiVUQwE6wQVG3SiPWnXAorMtKddgWNB",
  "key2": "4C7fzwuN2mLw7FE8ej4uFPPfjQ5LWxEW47VVypLkbw6W5dnbTVmN1hssSSS1cSpFwPrp2VGP6QFsstAwnAzSJwtk",
  "key3": "4Ubgh6EXDfVD8fhYcFM2zzUxq8sdpLrh6K1X3h48hUi5YC9EM6D43eaxE5pf5FyHTS4cwoLiYLXo2iwtFzVqZVQ1",
  "key4": "LJatykSNSDSnue1Q5kMd4rYZzVECpuCsRpwGZxZJMPtmhsDQGGM9Z8UkQpJgpWYRpkCbX3snrQ6wmS9gNPHPTF5",
  "key5": "2mKSBVidHgKJu2dwiLLoZcM4e3SWGChsoDZCB9VnxjiMELvTfvT8gsQ2bi4aeHv6EJBdH572gDctKfY5D84HexLd",
  "key6": "4ZXin7CmuCsjJD6hV3S242Scj3n6zNz5aFBQ3BEeSU1WzMWJky5SaCEPq8jXsazUZ24Evqh7F8QxXWo62cf4kjjk",
  "key7": "54dF3cyiG1BdYcDfp37BQh551nDGydJPHoukiVts2cCLVZRwpLpN4gKWJSZptcP98MXo6zMcv9TY2YT3DxWHhMZH",
  "key8": "26zpbwkdYxrezdBnn9h8evdCKkycvRD7GcyKbdVjpeDsRBKdJifqJvPnJKQo2rfmUqUsUBQdQbdUjYrwwhcNiedK",
  "key9": "2MuyGbwUAYqtrdoSEBkUNHRLApgtbA4hv386B7ywKFt1ZWFV6W5QQU6BdM9bE8SBw6SgphAwfwmCcqRfsKunTtNA",
  "key10": "4NzZMG3VxtPQPkrHhKDFDj2H8WHgUQ56Sk1huyTPkSjnchELq3v44MGf515UKYLfBtZmMprCHAsZnSfQuafbQZmk",
  "key11": "3w4q5pgqFjPRtNb7DfPLgeMC1J2vgDoZvavYka4J9NAo6MKh3kkGYBXRvrrr1wHJJB7eY6QUfoC1KJuMCDkdGAr8",
  "key12": "SFXrm2NtkUQzpuskPULzjnVBKAYi9ayMTrFJV5ErMq8hFeEkc5Y2vedWxXhxjo6b7kXKujzsAqfMGxZQo88C7vG",
  "key13": "2MXqnHHc5a9g1YEya43LxZz2zm5YXswJ66vhohkCcyF2QjPSL3xjteY3fKGoZjajnxja1cijF7xYh41A7Rv7AcTc",
  "key14": "2CAnKUoo93c2tE8oY82Cmh4p8jnGcdD5vzKoitDifvV4PvyxrLHT7bXfX7Rs6xpoWJfjsULVVH1mrj7261UoGhGJ",
  "key15": "3NUMuzpk9ExKnf3Q5dU3pcG1iL6smHMr2fAkaFv3NeCm4dcBiDyKr7iMkGtPxuGmURbMfYjTxsMqP7G5oFD4A9fj",
  "key16": "8YVuGZc5rc21fvy179Frp84y2A5S5NrXAUpWvK8rFCCudQRoKT8ZM1Q8PyYWPSV6TCQwod9wWuXupUC5YSf9SXx",
  "key17": "2Vcasn2RPYRkYUwWnzysVnko8mdofaaXKD36SEsoqxperUFYSkw1NVMqGFkVcNbPSwb928gRoWJjcBvFdqfv6e2W",
  "key18": "26Zt6TkUQoaSKmEgL5kJi1AvVCCL6qduEPztWTCHPw14QeLFit1fRhjSaf9HzBKEb3RMu8y6KrV6QK9YrfSa5aqe",
  "key19": "5uka2TDfAwmQ9qmbTDiYRb3KDKXvEAK9tr3d1jDokKxrnDFmpTuKZqJCBjZvVkVVpWTyspcVDK563VvgvnuVKxrY",
  "key20": "2FkSoaqpJbHWyC9P4RUWzkM97f8L5TjMKAaxVJX6hNWvqWVdgFam68kQFZDoAf6bqihyz1s3nzp5L2mSwQDzW6yx",
  "key21": "5ssRaNCHyCeevEW16idFgpRLH7znogx9c83LsabEZUrQofKhix9FWJdA9ek1EsMv1pxtGpADodQucfh69ri6aufP",
  "key22": "3ZRmujHwpyED4czhUQzNRxRgf8mv378uHcMxoB6UBDPNAe7HhhoWJVuKGx7Da3Q61urjQcaSKQviNSGewxXNGPM2",
  "key23": "AUrcGLoMqRU4n8ENygLqahbZvn2oEtZ11mAZHfBmn51sLBE7etLYfG6pY1MdYFbsnn7QhEV4haDSX771THczHgA",
  "key24": "4htjNkfXzev7guDG6DPcYFmGASY32Cid6qzpGeEpnABNSzX87gaENLRLUDqDVthK28BSYxDNPdrnTz8eTSFAp5ju",
  "key25": "4UMAyoPKjPbz299cxNxzXATJZG4QkfeooJ6BwCaEifsRJ5uPM7rvuLqekqrkYEi8C3x1s8bAMuJGNHLD68h4toXa",
  "key26": "3Enu82NrZGxT3rgMFofxSscVjJuHUjRd6KfAbYL9sdUWXnfRnxu3uPpnAxDjiJ3kuNcAaWpxSd4vAsry2nEz2ymY",
  "key27": "2aJJyshFGiY3X9io4TZjYuTDpNV4HceN98RFKP9i9qpQ387bihTRp81Yyjr96xrvj4XjnTkZBwRYGvmHg95vhJ4M",
  "key28": "4W366sEYpV8Kz7p2TyevUfJPujPBNjgKAnE8NvtoV42mkxjs7qrxYLqz2qXTZNLoJTk5rxWUK2ACAsuVj63ANgkR",
  "key29": "YqpE55ZMiLQHEvyaF6PUyd8jQ59GaUdJ9PYMfokyZLgZBGzvLhMGmWheSWnDxvo3JPHDPM8dvHuzfxd3V2RFBr7",
  "key30": "5d7824H257eyFam26997ZmPHrHppnUstzv6pRUd2ALhB3ZqCXctQyMkkEGJWEWibP5zNZf1dNZbp5ivVDD9oJppv",
  "key31": "3V8GN4MVSvcZTytg17x8ZRBZCc82H4dtetQzQcR33TrRr1Gx2igNRjo4V8JrKg1e5bLdiY6NnPFQxNYdazx1KYbt",
  "key32": "4yLd8gVNeNVZrp2mCbEthWtqYLDSbZep3BAmoBp1jifxHviQ5QZZYXtGyCA5azr7CQxUsgFbftgQhMUetNvqdq8R",
  "key33": "37CezTv4Kxr3JaEZkBo9Ym7RwH6oRGdGEY5xoWE1WLavF5BiAKp6eDwhYPmMddzGj7KHnGVdM6unEtuAfcQ84xu5",
  "key34": "52teQLmYARH3HcytUCBxZ9diAQJb9zxvnKaa3CDn3JkTqEusmA4gDG7cqfx1LJ4JMMHSo4Qy5qa9os996YdynBHp",
  "key35": "u75ZwdhKdGXsz2Ay8JUtvGVmRcHd4YUB85tjqkngGvmtaKz2cfV2UP6KvUaZhwE1brsyn2NQ4ZKQc1TnU9diRzU",
  "key36": "5UMTjg4zYrznJJkVTpw1kLw9RStQwzJPYC977PtR8Nv1eNQnTqUMEdqVrkBkiApjptxqvkX1Yvt9kJ33JidaSsmm",
  "key37": "5zQ8qksCd8eVZVcHd46ZUc99jqbLEgKmJr9ciHDZWoMb7tzFANVQxGbQbXN453VNYC9iKP7VdbDPZNn55BaFgCvE",
  "key38": "2qTdMYsf3DajqabV11Wqs1Y8o93Zcpvc5SxrzNjq88upt5n8hyqzna7ArDeFVSzWHvdC88kb7CWaEd8KybZ4W7RL",
  "key39": "2WKeyV522U8pCfG8ws86jKdHtNhUHv68bvLZwRiVnmJf8Ftpmu2NuyjMrf9Vdgvy7HKBr614krhMbztSS1ruTY88",
  "key40": "ohGGj2NXhMDK7aFmKkQJQtyncppt1eXzcdjeStMKb8inYWdZcKubg3m9gMz43bavQUf6vxhxTPVMWbex3i9EHxu",
  "key41": "5GgENPq7feriHMKuPBkietD5YwAoqJQZw7qDCvrBzTpAgG15LUCi7Z5JMnmaBdcBWNZALDXfMCVJpVr5KgmrEZ3W",
  "key42": "6Ro2iDY8wptwv8yEAh8UkuEG1TQ8N9Vemg8XUvFDTCdU66S7P2eAZu2JCGXEgB8qaXsAYEYvXNgdeR4rTjVNmEx",
  "key43": "3j2T1F2UctVQtu3gwNAzqCHkyz5eefHYppteSYBeNr5KVUptGCKBtP4Sw6PqePn229XHmvG2Bgp3QrXxKR8aECE",
  "key44": "5zXQPg9jTzyiqYcrLP4o4ZGgv6BdFDiccvPWDkMjDix72CXjq3sUW1G7t41kyqcMDLkgLYxFezgFjhWaAxcmFAs3",
  "key45": "5wrCyAzHoq2XokiL8sZhzqD1qLVGRqStkmfEzV6M9oTaJiTFNQLBhu4NNuncVrocTw98ULxxN3BhHo5wpVrMBATA",
  "key46": "43s9r35YdwHnYh84ra5MNF8Ptf1P2GWHJWYSt4DjMRVrx5d1h7YaakNK6z8oq6UHpD2VYaeRxQYc5hyBQx48EyTs",
  "key47": "PtcTJ24byYzZFzUvwr9KkCth5mYTTzgujbwaEfVTpkZX9oxGyyGVrRomptLU6GfkRAwLRM8c4m9wrNjb39Z1gUE",
  "key48": "46sKpv2C1yyyG1LrvUSfFJdAGAKMdtMMZC9nbt2brwKqjcGhK13ZwxcaAZrk42tZQkWtjruxKKJT9KTavKHXfpFw",
  "key49": "63uHEdxGjxkAm4whgQVUy1CMHoba2fXBxwSzoDTw5jECZ2CykUaFSAxigt5d19F1RFix9Y36CQTmuCMCGbacbccH"
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
