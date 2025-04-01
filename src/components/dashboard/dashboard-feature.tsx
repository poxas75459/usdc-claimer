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
    "3mpVEWzC6c8Yat4GqMh8jGtuaGaenZ14gkEmj5ERw92N5rg18chQsgVy7xGiPdssb4n4AKBA3nXiCaMCCMR5KCJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LPpnAo6AjpeoiMp7twJ7ggW6iDo7gDLvjphMqQzHrqjwAo5ot51vnvmgG1F6U43gAyqFDCHZFd52Neq3jXEboQr",
  "key1": "61EFWiWtzGLfFH32x72VWFrMQDPZZMNe31cpCsZXN3uSy4Vom9SWpCjEkWk4Hs5bgZnRp2k9svRsL3ZvMjCU9k6F",
  "key2": "wpge5yFRoA121RVGsz7jBhygaWLW8VgBjhBDfiNogjRoLNyGqM5ds6NGa9kgbSEcUbG1VZMsnsYbxcrgNY3u6v7",
  "key3": "4svowcXJyPF56zGczE1ScQAaPCyfvzuVffbEaErEhDQ91tv5rHGCRhn9MpBcgovbJLTNDq3rku2CBKjveke4DGAt",
  "key4": "3X3dfUKH2Bri2MyhEwV4kA6UFxnLCQAiWGQYVxhWsqjo8aUmFxKJwouxqYnxVGcKyX3DDaqp18FgjDtw3VqhyRf7",
  "key5": "4RtN6c5twRZbi2sPZou62Zf89WUDg41uS5rxxc26S7RcLgjNh9uBnCpSh2ELoXjEbN9GhpHZwmsq1F6oLm63krwR",
  "key6": "uRo53LnZw5aTibKfKMc4AN5yKDKq3Swyh6R5AJQUJejZdErvL8VZLMBY96WLwymE6fHRgK69CvYf6Gio8ABWso2",
  "key7": "3xza5ebRcTLqGc2nMtnMmy4tzPevduFC3KVc83BYZ4ZkbGdBdap8GStNmokZ8dDmDo6oDwbAMBhixrJK6ukSRAzA",
  "key8": "oxn2qxkouzgvVunYYmXFrGxnZvEcP2xodcT8LtKm3iaHkqgepLTv7DBuusrNVLVbh9vdQpc1ZshSoS69Zh56KwY",
  "key9": "3R6a4TzRgBHu1H58RTD1xzf37ABY47oyuGBR63aSrzwLoXEn1nTge74cismyYCeqVyuUvxVqy3HD6ei5rDzeug2V",
  "key10": "2vgp8pNkXETXGWMns3oqrxCTnN3r29vgYzGPmQSkNXngjhZLewbKzh9XEXT6ihdXyTncViSgdYKrZmvsswcnVWoh",
  "key11": "2GqxkWDcPFQNSbfAFsmDRG67y9ufwUcGMaefXxZm5P4T5fefNDYBQUR7JLb9So4RMRGpih7vJgYT4i7RjMVFRt7Q",
  "key12": "2T2kGbwWN19T6Hgvj6iKGmPB6Qy3m7ZSqFWxzu6EqMX7QEMxZtgF9iHpz97xj8Jqjd4Jgb2xYW6t2Q2hpavwXK6q",
  "key13": "3CVvSpf8uJb2MXGZYKiMLSo31QCKWHCZcXxx5iVXLiaws5qytmbwm1DZhiUAwZKY1BUdoCe6Q1NeLeqmDBskiZ1K",
  "key14": "H7hCa8mYcfjsC1oNWbTy8wBJkVf2tu7f32K8gtaK2KyJaupNdF6HjghN5Nxoz2AgpaC81zsfiEta6ZAusjxynhM",
  "key15": "4DWDb3WAn9MDYv5CgoG3S86n7SHaNowiJYfZLNqRS299pcphe5t44p3j3MMpMBn2SPH25ouR4E1z1eGrg5KmUrFK",
  "key16": "2pxiwVnRxDqCb2S9qMdjhoqoTKfCcJxyXMxBFEGu13LZrAEJhqwQvrg9ci8mZ9GtkWA3kQmMhSfHVDLKUeDzbGzd",
  "key17": "2Vp9R9oJy3jG7xG2UECNZxMQaEPAuy5YUFrp3YJZmsMh2bR6Xg66RF9rRHZ7R5xEDE2nPr9drCdoWK7YD21cxKkF",
  "key18": "5Ed8ij8HsZ5v5RrqJst2twPEx9EhLLoYzTgTLpvuvQpAV9sBC72zcMTMGPtpnz1yvsr1uuxZkyCs61nJheAJbWVf",
  "key19": "2sG5KoQJ9MW4qx9vGEm4AxUbS7fjostoFrx3qoUWtRTKKx5DLnqp7LU2wXKNWgZ5XHFxQ37VzCd8FWcDnbVtrjCj",
  "key20": "25Um251aM7U2XNDsJcyG3Ba9F9tKwfL7M99oNhym4tJhfTkwxykp5sPjaybyxzyi5zXjHZeWxZkWMX681fYsWYJn",
  "key21": "5YidBMi2GRCnYwNvpqB8DNRCKLjYERo451gcFqe3eDaseDivVh7XYuLZJpYKpu7QvWgZSVD2R9CqaAAXhGdmFo84",
  "key22": "5ShgkPpFtxB9ouaQQnJFEhWqk1PM2Wxo7jUvpqZiwvp4oZUKbMXeG2t7s3ANkyzUBMipyMMvyf27FZzbVtSSvfco",
  "key23": "5vSycZM1GfcLY1Kt2Y6aXJBtpuSKk5TP6VV82G9MpSwVvGFURmhS92v6BpEf4HcaqJAGCyndvvM5E5BNzmPXBfc3",
  "key24": "5MHyPCZbmBisrtytz4vw2uutBo65Yo24FcxjVdicJnCCwYDJhAbnb7GSy2vcM89UxMun62wtknL3LBNKCa3XCqZg",
  "key25": "TtqHusZzDRT9mxeX6cjCTawSTnLWMk1ZmfQ228jSaDy3cUF5GckpECgKxsSfX8ofXJN4mM1DNDDnBGkXMVm3jCX",
  "key26": "49NGzLrTqgS7Hi7jgv2rxPucrpvYfkhskoiY2uvDeNBaxGyeMccMMmr5wxxTjvojH316di4BiEhDCzFzXFdQAtpv",
  "key27": "Kuo6Lwh9cH9eHiBZsg9geTAgiLj5BkcPk1zWjP4NHLTxQfiJFSGUwUpsQ8ZDuDz3GJEhGkcK1wHzTUbvwVjiQFp",
  "key28": "qSm8BaG8vo7VU7RCZjqhDE9p41DvyEqcmgHcYKt1JJYTDJi9AGYkULMcz4PdCR7ds4mjzXMaL59VuV2WVrziud5",
  "key29": "NMjhV6hviYLMFEBGb9pj29tUKDCevUMBwjrChyESfVNYo1mgsFEBV1C3PJEdUwYzWhdd3Wr8D6oNs2ZmpBMCjGA",
  "key30": "5czr6kLNXbMnwujbEmfX9t55jMzkabT5rGVRhLjqziuWvpfbkcQ3eCXz1RgHWgioUFezumgZCSn7eiyjfWHdvgvP",
  "key31": "45QKZs7tEWUYanUmvGzRGEta9FYSGTBKF5GPKuwHuuPCizR93BFrtstH8SSA2YPj1VYxKUDLkGstagJTF5JhDjZa",
  "key32": "662iSYpE4GWzLcwsAAzLGkA5d3bMvfP9fCFeCfZTHQMyHU6HWSa2yoBdseCpGSD51kuHs4Umn5EEsAvYhEUu1sTH",
  "key33": "49bvkXJyVxBT6KaVvbXWnuGMsHuGQwDiQXUL6C1xr6gAdonjvat9Te4YmZ7cr1E4k7XtnX1dpxvgx6dahPBkHwMZ",
  "key34": "2hu3d7QM83jj9EjYQeWBdrHKcPQ8Qde5uucNvu5Lm4PKyaisEobchUhX8i3NTqMi2T38puJBVkGL7GnesWSAbQxh",
  "key35": "3NQTkdBM7UmWr9Jcn6Wh8USBHdQUD7AgrJqGLbzSMNMVJCq8zBji52Smzhbro6FGNpKpo1rmpLQ71Piy36kKtjNe",
  "key36": "4kffBVvscX7Edj6piXAd4ExfiRWzgbucQnM4kfUADVkURefGTodV4pUhpsLNKmD8TnrEaRz5JaYL6Yk7MNTX2k9n",
  "key37": "62E8NnGHSi4JuAm6XQkCAZb1kJrogq73vcwmDkBsnZUQx1Q23PuHfhPrhogXdWKekrpG4qSaXiBrawQ12HWhWhaC",
  "key38": "4UWDF13FddfuHSRdi5x4CaABqEwFXfatFtVRmTVXRcVXq7hs7DCADtP73Y12BVKww32FPfv5oUiaKbbNHJ5NABhD",
  "key39": "3FYunzWChYQpTsy8g82G4zG1qF6WYwxuJEC3GAuZvrUSPgGzBPgV5yJhmKaiE73FhUH4nxvPzPuW2Y1RD6HHwS2R",
  "key40": "67AMdX9HYyyuQhQgWcZdcHAHcfeyhxa8oqGpfdahJ1mrvxP2TcvK3VbrBAWpVTD8RdFtQbvpUMaK6scsU1kPDgez",
  "key41": "22vR9PmMsKweVbYRoASwEnwvRpyQJbZZ3o8HRxAQFDQRKftafhJcy4grNbsWhNZBtURamvRhsJAWVTsKHSsrpTRh",
  "key42": "3777wg8DYKsGdSdzLkdaadKWfxK8xMJuUDaAGBK74rjnfzRct1fzN3mbVMGzaDbzSXw6P2czZxKokcANQJSdyov3"
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
