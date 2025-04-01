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
    "4JDaYjrTwS3dtas15cS531cdVbkh1wL55ezsg1qj7UKarGJMxjTVwWmJP9BnQmnuPXSHsCFtEV72FEFVnJiWJCuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3H1H1iLHH7ft6TQhdU3LjyoA7dE2TGDWexGDBJywvw5BpQYqSKZJWKseLdmhzWyEo7ZuKi7ws2T16xNREJC4HJ",
  "key1": "47mocGK68GEDqkJDuzFATiFunA9KwBihJBRYYXpNo7ZykLBHfqkV4Mz76X9jVyTz29nTxgyjDmg5Gmtra3XrQLMP",
  "key2": "4KA2qPRaryKuC4vUBGtLVjypdPeyVNVt3yFB3wG3zSPup7E2Tq18NHyciz46bduGcrQRbRTPYqD2aa4Ef7W8W6wh",
  "key3": "3zJDXftYveSgS7tXvVkVT9FTzuFB43WHgkmb896Xdwwmh4XUTKDYVj7QnRBrSDUHgkCgin6yjyETKA2dpTiMydUn",
  "key4": "Nb4URhdadpA4DmhpaKNM3KfEBksUbDR8GMJUh1PfopAfJBFeFLv3tvyxycB469EyZzABfVn1DyAXiKUSQzJmkJh",
  "key5": "3AYgRREbFsi893EDdmpPSKih2K11x29VLXiY2r2BHVZWQbJta3nsCgwtyVVcr6DLzUUEEmeCJ8HE6fUiMhxFYA85",
  "key6": "bxx4VkCf9i9un138regXCiExyWjYHMFCbjLPb9msqFEupRvqPwJSghh5KUmerkM77Xox64JjnFJyDWQAW7k4k2y",
  "key7": "Mu59sZidsnrin7u39NrHcMvfm3y17pu2xpi8yvzNZHtkbzC1APcLSFD4aoKoyYc9DjZSYRPgGyHgyuKdLqkNKo3",
  "key8": "2Q5As5VktZxCFMSkzFswJQSB5hyUXexZrEzABSmf4xdF2BAseC2dMipswczjdfmA8ajzzDdffdLNoTo4oq3ENjNb",
  "key9": "3Zz4VYkmYSwXwoFWD2grYtqbSqCeKS534uUhogQx5E34sT58bUScQZXJaK3isHCP9zkcbFqbRGUnMje9FvyUWYQ7",
  "key10": "4s55No8whrQ2WkS1a9ZftmgqVMnfTqG81NWqDkLfEcb9HuTjiCrh2157EXHgT46usxTnnUzMUrFoudnyUCZqKKZC",
  "key11": "5pWwGubbp86fZZwSUzy13fFmin7a29MRNRi14XTfBb4Jk95kqeUsYTeXn7jf38qtDNR1QSgaHszbRvMhZLFyEZtv",
  "key12": "2bLkyq2pDDV8fdAhvMHPeHRDm8pUeKZVGAULp4Gja5uBQABZtnnN3nqwruxxRYbxmykUggmz4qTup4GNtbCEUgzp",
  "key13": "3Gm2jDBvtTuwzGxjL2uz1R2WDyh92qksn26k1H78pdt5xtYpCzosNBR4fLh3GbKQMJDVeVKaRJXHAhNgbaJRj2QY",
  "key14": "3jXevvPotW1JmQqbRPQ16EL17om4Dy26yP8hKm1XiLgooXWydeZBvC5XeMVZK6vEjiPeCKYR1u16jRanjXBmPnyJ",
  "key15": "5BaiQ2hsJEpnveBFwYv1XLcismR9R4uoFvZthhPGknVPM9Tjar9S7RiXiPuSY1jpG4wwuYuDZtEQLczH1Djbq7vW",
  "key16": "21HcGAB8oB6nzF6zPCf1cyQwuCkuYx7JTKU5CQrCcDaVd1kDfcCzXYcqmFzXXg9iHi6ubd8qimhxbQZRcVFbxPZn",
  "key17": "5mjNLzza6FPDbTP1LFizXWEjGFYeW2pi3hwaYMBYfKfDoBmWkmgZ4GF2Lxp7Tn6TuQ9pCmPBtetn68xotae5qwVG",
  "key18": "2NBKPJdUADTyNuXFBV6VeYuUqEZfzLY3MNs9E2FURfaVay1uyACWoFiKGgsTpsBQTsynGUgfbVVcJ9NRgcM74hhG",
  "key19": "2qvstsPHLL6s9wAWhxCWMm8bDe9fEb8ugEnv5b6f9X6qrmZNuAY4yweU5MByP6GB4jusrPmnz6wQaK2nb5b4G19s",
  "key20": "3s2xZTfxbX4CwhLvZN2wtkDaWPTQh9Rh98JbeWYCpcshmNR2A3EeLeEnFD8FYiGQVKqCVsEHBJjsugysi39WbK2V",
  "key21": "3ArvxXa47qDpkibWcPMdwBLfhgXXccD5vzyHjUi3a4MnrX3msgkeezQsM6cJ2iC8J12JEEXc6DP8qL97spkGArDK",
  "key22": "ow5BP2P6SdUVDm79k7ZwKAnAkZr1JpeuCy3mX2jcDJQ4LH8XnK7u81iLxah2vLfxi28NfPuMP8zfsfrLWryj5Gv",
  "key23": "51uATkHMWfZeCPJfxhC2LnS2ufLHw2afBcwQzMEaFotjvdPKnT2gJCPDKvVjNKJtqQr63wy3Jk1munCAS3wSPLfu",
  "key24": "4vAFGFcbeahB3uNULjHrreZEr32UFdh2rsxNGkqytudMPfa4EBNEAM364KFR74NSZnbxhK37j4ZphHeJ1ZDxMjMh",
  "key25": "3DsxjD82HtTMLuPWX7ySx5AAVBEfvWZaDmR3b1RuVDUTHu112nNBPazFMN8NQTLys31bmoiKCxvQudX68yAgzGRm",
  "key26": "5SFaiHBCbhn4CXmJKiKZ2U4aMAredUtT33vPuEpdgzDAJkC8aAKGSXF5WyFjL2nBd1wkMtF5m1ECbnDigBKp1nWX",
  "key27": "5F85WyZVuXdUxik879xkfrnSZ66AZV3GfwL33QZY5TgysCjrLKBdVdbyRgB524srbadfhxidDPSdx2CevmvF42K6",
  "key28": "3gwSbKvPuZS9p3TVXkkKefPJUuQZCoL64yVo1jZMBLkUbQAuLUBjoWvpphdPf5hfqUqFrjgQyPwGmxsXVN1u2Xos",
  "key29": "3XzP4ZqnStbXsVFkdqZZ4vhDtcojS2CwcawcqUazPBTZG6gHLQUN7woVwk6mxRUvNZ841SFowD6PEDigvxHXCwbF",
  "key30": "3yhZqjA9F8p95SuY68CnHkujjPwcciAdJYyC3VZwZE14ftUxfc6Gt4i3ygEQJjBLNgcEfssefhDk8btmfra9Bxxh",
  "key31": "4PHU32FVZ52dQN5sXtEqWFBktttgpNopro8B5biTfitj2KfxtqSbFYqXaaacPvAuJAGSEgUBZLKqMyF8jE14wfYf",
  "key32": "3RJBRfcQJhAjYikAEqoPNrbYQhWjqqipSt8A8pGn8tRtaTVhxXatCDqFMMBK1vMGe3Di7x8itWvK6Bvu4ZgKsGrx",
  "key33": "2HM7py8TqkKLf52BPKFb1Hda2nwtVXtca7aqytvxDCDKZu1k3iJgxJPGxsxdNsNA5MDzcVWQ3Pymku2uUXcq3scu",
  "key34": "2KBqz3jpE5BBQ3Hqa4PibGiB8m64DPkp5Xp5HLNT8KhRKrsSN2QN7ft8FHLKF946wG6VYz6GfqGCoEtApwYcv7NT",
  "key35": "3TKzFQQVvQ9rj2ftkrUaSA9gCJwAgrHi25TbxdN96UGzDRcBARbCxGRP8XSWbambjZFewaVFMQpf21oQZRKGkLci",
  "key36": "4XreBQazuzNPXumxRuakz8jXMtc3uYqf15nzGhQUvzBHFW6MmJGufENFyVbSZPbexKwoDTqTuwPeqG9EkBbFpR7Q",
  "key37": "5J36mzS9UpMNtXNuCToBq9czGRbEX65vvwruxruCxEBimM6xLfS4Pygia2m5CTz9w1MDiBMZ6srgNn9V8XiHSiCu",
  "key38": "2vsKuuAVjeX2LcMjNKLzsws2VSY9SpqkjdN462zNMGPXmFCDutRivyKFfzF5F1Pp1c6WmsCtgYYXJYXQT455wh3V",
  "key39": "4xTg35ai5bCuC5dfgsVxZ48dDiRW1opdTHBxJzvzygStFXsbsJkxzRouhxZo3pNCfZaW395yFR6xqraLyLtYBm1y",
  "key40": "3A6S867chAuGnAS5s8Biw831jUrtZXbKoaYAkwJFHYXwEDhQaCpnqbQxXTqDuCismRnj4AUUmu4auPx2MQStcyyH",
  "key41": "59rzT3a7yL3A2n3exRXvdzMMRLN7GTWsNxZaZsDxZMr5wByrry4PWzaETC2YUzTQenntSVBEvPw6imFoQAdjbZXD",
  "key42": "2jXu595eASu4Babh9k9wDZtMjY6S6aED4Ezv6TqJdj7QpfUfogwWsSdmpfyD7AHdL1CwB1q9r18YRGkxvqhJfcU7",
  "key43": "44zJJQqMmzN27zg3Lp7dCgzgUxMfCrPZVkXiJ7MNStUy9nrZNdZsimNfZdzxDPVsQarLLQsCLFS1TAAmXXtWo4en",
  "key44": "sn1yxyxDhhPcL4x6UTme6MnrWzo74fHUx4TBuqSw5L9qqMRM5tgJEduVaU55xuxvY5XYjT2WAF11ixKi5xDSFeo",
  "key45": "5iX4wkcs6bPHQGeqmRxc8UM9kGBooN1JTW2qFnUvmnd1ovtSDxb2DAD5nKaE82HHBCeRtCk2adfhoUM9ALWPi9J2",
  "key46": "58AHjE1SEr7vgCK86A7XDgqPPK1BDUHciumR8mLs4vsNgAae2vxCA2X7YeRXioJ8CMmZroDMwSzhoeKgQ1YAUbvd",
  "key47": "31sfXms6zaAtZqg1jKbncxz34MLezi1bkqECdqBfEiEtMYnkcun7ZSE7ZWyMMyLGNKgWLtT8pXDobEyqKgXwZJ3S"
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
