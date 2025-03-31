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
    "hyPhmvXofAdAv5v2NSbALd9s5u12RUrRxrEqXo9xA8E6Y15nEZAjBwEgNtSvvVwsFbPCBWPWCNWhUNe8mAhDeAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpKtrmCZnNL62a3NRebSTBhSa7WAqz3EZB8UzvTDobBjpsCN62TsNfgBEe1Rv7HWcMyymua7hrt84oRyjueWyVb",
  "key1": "2LEzJnCkjuVRiFgM5qrT17sogxdrb3FKA6QZj2eNGjqsedLV5cCJzhE7R1XxSPvRFBv5uydDNS6B9BoANNA6fJPJ",
  "key2": "63vktXZMH7P4oEJXzQrP31QfGLRtYL1gbWu3BV1Ds5Tjs6LfzX9ocwGhNEvxHiZXfjZ2xJ6PU4ThrXkZGV5N1xzF",
  "key3": "2q3R9dN9SeXh8nU8dLGpbJGTAJQAzqUAimFKhUz1qdoSr44jBw2wAFf3zprR1E95jggNQoiXMWw6NqQMgAqsVH4Q",
  "key4": "uvXdLDaffuWkwqtcoch2A7DEpNvFjeWJw3x9ZuYb7F2E327dq5itQPP641sZL15DnWuUgGK2PMSQzPEgTnAmnpu",
  "key5": "foux8T4TqicrVRUaSsdAJPZD8L1mMvqKbkf6DPFA5DwZL5bVzhaYUrjQRsRZsbLW6MN3ja9bE51u34qumPZfjcw",
  "key6": "3VSBrmYAu2tQYBmozA4eKSfsbbKEzP63Eo7XQ5DnaUfpgNn1RTgJQSzVNmjmP1ebHS9mBcEarvfJgxtCsWWj9y64",
  "key7": "3Dx5Wg8JwqjLYf5gw3HETXfp2nr8FapviGDxf78rHGkUH1C6LZFUw7VqYb3UE7FxykLcmHYp8XFLPBKkZA7M2KSE",
  "key8": "5vfdh32VycdjWntS8ynqgpu8bTjTHYQGwWCSKU8DU3smbTpLShRSqGXVN8LrVHfHpwk3t3nBFHRxgpRyiNk6fkFP",
  "key9": "63zpxZwtJjhSQSRv2pFc7rysijXHZ6YC1k7xKBKwqwMQSEUrB4cYykDpVYQW2yDV1gTj3ksRqmYusp5y63J6kiUc",
  "key10": "3q4MuuRQaTsvxAsZ7RkssyVfcz8fJMoM4mYbTfLfdiLut1pHiqJqCPaTRXQAExzsuPByBaefutTR12todAqu29ku",
  "key11": "27y5sLr5DKvQ65RZPqyv99Bm7h7qTTo2A8oxqtmakfpbmgpuaiPKtppTnWzkdq3jJdq8X5unTsM3xmFirwfdeVex",
  "key12": "bqHVZxHLeZ4LjuXWjpg3JFCUs8BVKjDFWx7sKv2wXTNWDeWcUXPxc73CKyKvpJi3eE7iRw7EDDtf7sb1rAayZoq",
  "key13": "4z67P4d4zmRvbXZoR27bLx7VQAF7d514wetXdRAnZCtdsNEsWmaDjXLxzzeyh4dk6eVvv16cBfptnE5UZLUv7vkG",
  "key14": "2haT1WwewNQSDEHZSv3CDMLhJsJie2GBEW1F8yDujfn4FFqknXSm7pfu1zaMg7ZrFRyJdwidHAr3nixGvzt7LAHA",
  "key15": "5F5Q6eczqLwWKRfD4UH3CDaJgfjhDtQaqovekcxzV1kCxvK42ZxRAKBsZ5z5F8uhjDULFhmonTaqnDzV5cnce5PH",
  "key16": "2spsBJfqUL2hVBqPV2QqboaLmdy9H5twb4DKugTDYmQsmq2fjX43U83Dh3uBr4dhymQCbKUjoSqgVLXbVTJa8i3P",
  "key17": "4rQwJhU8aDpAdQLsd2EJG9beQt4zy5bSTz12s4xkXzzxC7X4bct62RmKmfzgRgbuwzFfvJoEKBUVoADFFxiDPMtD",
  "key18": "32WfeYqugFsuXWuqiN6DDnJytx4s2ZQMPmxCwTJKzHWHrCrARA832vGmNsjZDdPyBC5z45uArVqmw6bvjQf6pt6v",
  "key19": "2ckriW2Usq7H25yXbXGmabkUtWNvdXRHamS7s5QeVCCUhGLKafbNGysERzatSTBdqHWsGpicQ1fPtNv3q9nwEjbb",
  "key20": "2Tc7rNRR5AAKQrYTb5XemgHkxBUpBmMhx83FgEy6mZL7Tot8WMCaq3BimFqcGUDnhq5BNpCY7tP1XxkeAsYqCGX7",
  "key21": "K8TffN4QcrHRGGo4DwB8C8wtXSEGkv6q6dS429yXt3VRcKvrpV7kbkUFoZQMSUnpWAtd766QeViqbEGHdbisur7",
  "key22": "27bSCFytY87UDyHr7ovz8UWxqwAFq9eSQay5YRFQ5ofRf5RP3WgyXcgnMedk4sHNPbeeqg1P8x7H9T2nmb5zzdfh",
  "key23": "3C2WGJckQ88p2BUFzTPCv62okkD4uh9dAdfZxmsrguFw2rQdLoEdx1WMvMgaVYs8tnAQ6XmYWNzj4DCbSzSprgbT",
  "key24": "543qwyLScovpfxFQnTqeFdBBAHJ2ztCiCKGuNZVvXRsutRUnhP9E268bD6eaSwXtcx8wgDk9hZaUN5Fy7CwGKpao",
  "key25": "61kzLx3bfmcAbU6qzv1h2A9E9ePdxSGbi8NVei4cVz4LiTtnsib7ywejwcSRSzp9zjXdeM4o7K4nPWWY5cue169L",
  "key26": "3qiEiNQpXZM4b28ZvUgmUHFxa9yhDeSFZdQLNX2vGhy7Hcu79vyNY1ng4vmhiTRYvL1Q1tBcVKC7xLs89yjWJCJB",
  "key27": "5y8a4hHXcwRyNKcryZw81BebeqHfxcDbY2Jv2XnbGUygEVhnruxnfSWqA6NgZKBa79sTPzKWZJ2BfuG29vCFcJUF",
  "key28": "2cGC4Awgyn8aWieHpTC1DjSYzJRgj4anVkD3sPHFzJYuZjtNAwqohwiQTxNTZDdwk8dNoxXKTdcBv4QnnYcmuts2",
  "key29": "YEXjYTX5QDdxAjpAKgndxZUZiCLVPhKQHGmZxQfMkdywQ5STiVby1zzA2s5UwLYf3RoVHfLudmeSBKbsDurjATR",
  "key30": "2bCVYNiDAjRuT6Eugd2aC4M9sxFq7efNN5jwn8HpY6TikSxXyfD2aF1wsWVkYg7D6spSwYTVhmL2SxExiLAADCtR",
  "key31": "37qCUWfNUGJxETXxU8xzHYe9xoiG8jehCp7CEQf4ohrfvFx2QbtMANq1v1YybCJh8XdFsqRtz7sDsLQBJMmWL6NT",
  "key32": "2rfY3GNB1aKK8YC3MSGVMTp2Wkgm9FKR8AaqWAfFRuxHLeYxz8zgxjPui89N39PVffn92EyMGs9tahr1phzaE2qh",
  "key33": "5iEEDceRTCLJ1Tqbmn3dgBkEUU7q6u3CBy5YZk7Nmn7cHhw9DtyqDC6m8fRz3cm3gAkJwc4yKqrbUbQT6EhNZcci",
  "key34": "5fZf6FGgjbSmWjsePEVswK59d5Cs9nrc9boyNWhTsPLpvE9Sfq59n6KZS5d9cbE16oeAvQHqXshdEUT7o8Qo6QHY",
  "key35": "5fAnPXmWf6nDTpevYiadbW7mxwhhgpz4Q2i3JDyFUpPpW5LNVfAuDAfyN1QPqbB3hvEpPVsQwgg1KoioRpy1LWyV",
  "key36": "2LGnnrYydEz1GbvLAa3TTZGuamKwDi5TFiiCnG91QuNad3y2xvK65hhMbpL5ps1T7ppEhFdQEKn7cX6SQcNpahKm",
  "key37": "jKBG24fjy6fBRopC5mcKvhUmPGtZi8GGR5B7E6LdV6bvrctmmad5B7yMTZed5eEYUkY2o1Z9g46MWMFMFQhx9xf",
  "key38": "fT1u9Fdre7mP4wFg7YnYzMt5Z6hptN9ZcptTQjKZcXzKkcTdzt9D7igzzVh4BzhF9xtrRcfmoy8v8XcJab5maD7",
  "key39": "22EscDNwpUg14fSLEXJhiWcWdqJ9y1WBecxSu5zdL8drLXEvt4NhBkRStJ4LfvDsBFJj8MLrryQMt2uV79EAVwya",
  "key40": "Y7dvwT3a33pocVqA8JdH9t5ucF8BkVZdJwMwC7mbkhGnBfo2pbhciJH9PR1VhCdK7pYzudjXNJwdU3jonFGRZAg",
  "key41": "42dgWoJbmF2UZwMi5DQzA4pqvHzG7fsUB4QRyPDuaszJQmY2ADAFWBXNggtYkTTqQzfsF44shVsFuzxjicUCEMXd",
  "key42": "3tPcu8pSBGivTsqNotqccrwCmUaXkkWPPd5rn9FcVnP82S5TfgfuRHpSowtFFCp6qhQcUdSqJ5PAF8ed2ioLhBQw",
  "key43": "2at2rzjVigdUwTxMViSk2YPzxd5innGA8SruRNPNYPXyDnmfwby5xd8JVUHEhYt2Q6RQP9ryeBSE6XCjWfwvJLtY",
  "key44": "2iui1vR38g5nN6L7yBd4ib15sCKjevs4zq3krq8zWhszzkfxnLybaRNYsEFLweVquKuv9sMgBwtp3vtKtxMWdaG5",
  "key45": "XDA7yxXMvpCGL1xnjb2BXjDohGg7byzhXAutfAyk9eTUV7rhF2ryLFQLxuSKoTZHd4t8WoFgjCspgenacPyrRAw",
  "key46": "64LiKKF3i8DqTUHrGDKZkJRjz6942SDMRMjFVTcY2KXbua4UztGWoLUYRR4TcAhRaznnp11aykkHF1SvhAFwboUw",
  "key47": "49FWAhnhyBe12Ct4SGnQq8cahcfGoSMajTWqE2Um3apzwqqUWgBjAgtqfaJS3JyaYZGDavDZntXe8FoBhGNwfdC3",
  "key48": "q8AkcVY2Le5TS6YN3A2xfSpnksKe7yWxNwVt2iUDzvPHi1jJ1yJZmC5ftUpccJvY6wcobjXqHtyNKZX5bbrJs9C",
  "key49": "mpySGUUsbajYeXQ74SVsUbqdwU6auKSVrRKEFnEqd59KfwKLkaY5szJJ6iTChYk1AeGGEfYcbCZRTU8Z4evKSK6"
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
