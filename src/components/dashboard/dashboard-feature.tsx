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
    "52MaxAUnkrkik2EK6HJFe9E2FmicHH8vzcwhVoNM9p4ivP9EqPjLJZHb457bzzpMpSyvA8q6TQTEheTnRtHQxpFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qz42SHZTT8a1dpvX8zTRLSyUXJW84NrThudokHiL3Da4hNTYKoJXMrgR4Am9xxNbntaBVkGv2C3CR1CBykQUWCS",
  "key1": "5jFLhTa4BuUnvqMuqhKxjHvn3RCpR1rfYEmwuTxbn9WS6FUM7qhJgyE1ZaVZkKvbX43uKELiW3BEnPEqX2RqdYGm",
  "key2": "51y2gz32eKQ5X5KR38sbmC5k4i4nNrRygGgJEoTVXjzaZzFuHEAffGD5WTfysvMAQ4aGyRYyRaZJRGFKgpkWYQ45",
  "key3": "5bXBk641ivPTpTQdAkv9ei1t1LaLZWW5nSa84giTcPJXjVRLTNouMJyqB3SjH4QtKgwMdK5BR5CAN2wRByyQxSaA",
  "key4": "5QQJLfCQogZi5LKuzhghhvidRE5aQ76Qp1vhGDMMB1AZbPHKdnB3zsG2McEXXNdT7bf1mxmhaDYkXNJZPjaUjU4K",
  "key5": "3EjNtgkEhJyPobPcT6EgXBdqWrFHxWbgNJmwrp2xrapv2A1G4Lv6jfiyR2L4CqdxxcYJ4hSmE81kTTCFobT1NXJJ",
  "key6": "47oWBMZbMnGdMxBSAezYkdKNUhK7rLLcAvsUxMvKmfh5R8NvmoBj88Pq5ZAXBJPdGgKeww62rSthtfDVyaS4Moik",
  "key7": "52xK74zn3GjYb9kBiJCmhA6mhmdcqb2U1pWqaGr3689oZ3QEjBxoUhGJCFSVQ2zMoBmaPAKGaN1i6pmbqyzuVH5F",
  "key8": "5utiLG6dtaQasHx1SAfW9WqmVXPy4myPrrDmBnCMk3v2qnCV1XWdH5SPnxJp2xSPUpf4bxxDWFmW7fK4ZpLzeW87",
  "key9": "4yG57QPWsHrV2p9vBBChdpsfq9xNc5JW32V1yXSQUFStnvTgzGb3KQhcVXUsRDaDZkPP2zF8HdD68DV1wrwBgNHW",
  "key10": "4p8VLrad7NKxK3V4xoeBdUE3aanrXQFfn1Ep3tdhk7wxpjj4CZ2b7oJSAUAJ58w4WzkMFA99WdrsQKUqPQhTZaJM",
  "key11": "3ZLyHKyebxP7djDcs1s7Bwo9Bnoz9R27hzLkg83v2RzM6z5YhJ66j38qn6HxqmdB18QuBHB3ZPewV8LxFhU88qKm",
  "key12": "3A5wJyygC6bjGo9k4Tf7JRRUANQv3Z6UsLakmMQ9r9PTsEbVH9sp2yfLnri4H7NcRNYfqAkuPrUrQp9MfLXREmGa",
  "key13": "2Sujjgo7bPVZNWsqMkJGpJ83ouvcZwNA61CUbthrwYS7HDy4XqgZK9q5HzaoTfEdnENJ2sdz55wCCeXcGeG1acZ7",
  "key14": "62jU2HyiR1iG3UngHoWnTWSMQq6Wpb7wfkLtWb1Vxas74NGyafhnmKhEFTwZL4G4vNg3BPCFHmjMoLa3uN67Dcnm",
  "key15": "4ZQvPs8S6RFxpkxn82QzUysN8efba9teLRAGjjmvp7M6TuH1GALxKfxQywEnrbQJvEh4uRC2XJTMeeAXzNZbFR7N",
  "key16": "C51LJqVKiL1a9sLhGdEqWjPzemrfephjeZduorzyNiMFqRjJhZCUvnyy4u2i32CAwAoxzWFkmuRkqNGQLbe3pQ8",
  "key17": "5rFUPyuAs1DpUDmx3v3fxC1sjdTVxfGneyzrb8M7n7fxQWx7uTdRMZSiRm7EF4FQvCGfjaHtKVwEZRVjwquMtdh5",
  "key18": "4fastAEtaKtP7sYNZcwgRBg2oEAADLvVDsTTTXaxX99cCjGZqyH617VMVLQqNRuj2TGr96wqkCwmiraN9GxAEV79",
  "key19": "5j3vtuumjktMARKE6a7XFva4QXjSmV7CGJZUZ72eYkzhMgTdXoQQFFTQj52THeJLGwpgJdmGvkEnfWJcuhFJx7DN",
  "key20": "4R6Gy5rpLPA1YLHusXCknZ21jkjzveXNPUztRn4AnjvQJZ2ZNf4Di3Zc8ryCE4zaWMEJvQdHcBieQygqxmdvHURT",
  "key21": "61xJZepHnRE7oez9cQM1y6QzpaPtufbCGgKa5WdmdCrgUunoEceEQTKAoGKvaL3x1QpDh9iZ4jR95CSiNEK7aren",
  "key22": "58NJeiWnHuzPbVs8QCysUXuAfyS2Dhh76dAEQ1Us4jgS42DEgBBx8TsztDMbBYUiF1me6QUNRZLuEeU5Lib2fpd",
  "key23": "ULpf6Gey76YAF5sQvdv6aKbrHEPXgJxf7o8AmGeY7NcdLVF75aV4Kj2phm9P5ahxdsPvYqMANd7rSMaHTL8NHJb",
  "key24": "3wniNo8C5FG6pgzrdVnhtfU3y6oo8K2vKVcMc7RrPVhCHi56h8bQuBJsEzQhH1J7a8tk5636nsVFLqy5ucvBLu83",
  "key25": "25Wtdbk4FmzTaRKWn6VVnKLh1pijhUUHCDpdvrMiGThGTVeFdhrWQKX7unyPJ7d3PdiNLUVv5YRtovuKmp3eeXSQ",
  "key26": "59wC4JbLBQwkir9VMm2BbiqnZuqA3bdUkSJKKDpHBzt1Nyi9fNhBDU2xdudXPXmAzpXeP7cntxgVqiFrHDULfJ7y",
  "key27": "2QXuLaVbr9vdJMLy2xQtx63jBpjUM8mRBc4cTay5XWzxcLtEg2vHbckDkq54DhYNHSw3pj4U3PTrgVDbjZv5Mbka",
  "key28": "3URVvSzTzMXQZmG29R79L6698ns6f3FT6dNEyJHqphzc58KrgUntBhSisVAu1m3dxCZgxRX96fDDLSMiQHis8tr6",
  "key29": "4exrr3arU8JYcEPYaVrCDmMkukrM8FwrxsUumbWQx9jQp61zwCHeNsMqJZ8NaJZD6J1jxBdQTqfhz1iAokkLD9v4",
  "key30": "3QyB5jphJPYdxMvvhwJSaUtYmWbvfbvPX9VpXNBWW8WePaFnxiuKRjcDk7CLiEbCui2k71xttT7Lijp39yXgY9Nv",
  "key31": "Vr1oVKDnxs2jkP4KLtnG9u3rrzrHWwyhDa4MqEyuSEJKPAdHGbGNCc8odxoBbxnPXcCJe2GYDmPKZhhRh9n99JG",
  "key32": "1s2Z7TLj94aY9RWPpNBHXYK15Ux77dQaR6uHPDP9NmWmeobroDBMKC81znGVmibokJeVhXHnUSfKKchGaLtbBhp",
  "key33": "4N7nCdGnvsAokuUBTCsCsMocUgM8sE5G4figFfmyxSncH8iNitoLxHRiKzSGHt3za7zLYNYTojdFZz8wpuoBrY5K",
  "key34": "5iihWm9SWLZtudNJREHtsdcmusyYsxUfxJx5Uttf4yupzGGBq6LGgF7urBfWqe9ZbhwJqZAwp4XujDT9ssJn23Yp",
  "key35": "3zAcc6jNfaFiWrqS8TpUaVvNfA66wy9PkUr361xY9ZVwMzygRGX3vRG8sXs6FTxVKmgZ1WK3FdYuvETRb8BRkaj7",
  "key36": "3GieEJRnZKWbphg11QS11NJuqWAYUsDrhv2DgWkYZBPmPL6zFiS5zpQtyQMhsrKa3g2fdAZgLvQMvfMC4uqsbSwQ",
  "key37": "3aXg9hUgA1UGT7AN7jRk5q93b1BwkTDmezSQ6GnWxHEVSS2X9kXeEfrz2BkVWbzHMLPftVJ1LewVDfNiitGcWqvT",
  "key38": "2ZSJkanXFtavbKFgUAMhzeGwVoipLTLtYpuvkUzgCWzM3dNR7wcN36pQUmMVKa9VCe4heUq9H6ZXY9jsvFsM9Nak",
  "key39": "6374CEp9exwDHCjVbFREGj8H8b2VKNdXCajmURys6dBt9T371qhpQAjJ44JN5rUJ6Vn2QS3ctzBn6TVAsK8LvBgA",
  "key40": "Pnd8pK15Nxh3yCeWuzTnMaXAdJDY7DZmKosbryppxLEWBwxqaHBg16AqTiYwM8Z8gUhCUifqgoorzTRDQJbrsPn",
  "key41": "4FKMXo7XMo6bbgnoSgPxR7jD42xDz84WshojuYB5fYpUfxhEZvp4bLTTqAaHNAtuapbNmiQkH5Twct3R9gVtqoEU",
  "key42": "3XLnuRzB8FpUEi5ph6AaM2Luv1YxZyho8Vs8yrSMpUgQ7nFo1sGRAzer5TWbvBiumecXnsiH6mKa2ZjeYLzwEYev",
  "key43": "aBoLT8phbmXBVhN4HMYMmZSrhwymUE86DA5GXSRCiPrj38GbFWFg9UAZxBLFAHhQSAuJffSWQEqDz3o9Ysbzqqh",
  "key44": "3DPEJF8vnXgLrHnxoLnd6Hv2vVA4YS1B5CrnxRBvMD15V5k3av2hLg7da7PSUYsy49Rt8ZiN7B4B2WZRMGa4PjWc",
  "key45": "2A3vM6bowJjpeKxjf7LNxMXiLUQPTJCCmkcCjw2Qp8Z3BnXVWWKhmvCc2mBVjkcyWX9wZLA4gmYYiRCopY35tiPV",
  "key46": "2ZGfdDpyCHvRE4NMg47CGSkyyXNrorFqzXAvpQQGanD3qAitrgoNi3s7LkfTbPiMU3qNfkp33qgsbV7VTsqKQeeJ",
  "key47": "42JUDxt36RpRX9fM7njYcr6FY277ubNDG7Jf3KUZM5sADPjjgP1DuZbtUEgLHA2Zwa8yfuHByTnmCJ1f7rwbcqYn"
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
