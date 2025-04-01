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
    "4eT8qa3pEDNVfBYgGBfH9n1o4EEh8EGqK9i961xnRxv6i8KN3bJJ4qs2BHVbnDzoSNDad5GDD6PRoWEbZeNrDRqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmT41fC1kz7eMv45sVygXpxbsRS4QH8TCje6YEDuDzQqvG3LVDQg3t8y79TuMfPbGgXGAtv5GqYDbjDrH6LuykZ",
  "key1": "4tf6torhxGziraiyjjZc5x433ZGHwXTyGjq5tKgFaTiQkWeKNRTUyHq6kwLRZAKaGbGP6iVam1Vntokvca46SYGm",
  "key2": "3fNGNrWakSncK4qcKbxTR5GcFVYxE1ED9Ck6EQ6zYJeHRM3HkoFdNZGeAEMx4mTe7eDMCb5AXx4GDntybMua1A1r",
  "key3": "5DfhkRcCfoCa7r7RfMfZFMFNPnQpVV39szizFL2Y8gFzUM6wxG1jxfDnnho7EgcqMEku8YymURrovpdrnFkgkUz",
  "key4": "3emxLyhZYoKS6V8v3xGsej2bbKiKrpjkK2zAD289GXDuknuVkRpceg5rTksWNbTzg47fdQvBjjqGANv2S2qCsa7J",
  "key5": "5yPP5nZ4kpfaD2RwbPwjyFuXLW379kZrdn4nHzRSgqwzKSVUhJ2qGMxNGSuoy5ZEYUNtVsWujCbhQKTGCFRRbet8",
  "key6": "DjXPLGJpGLmb14eHaUjojNf6t8j74aqsv8HDQXFqLtapKaZS3H8hZ7rWUA8bVFX68obrBsnBqvXPaLPCMjBjHBA",
  "key7": "5UQB8sHgiv9AhNQpj1FJaQCrgicCpUmFFZaShBrJaGfaRSLWQQRXVNE7STjz4GKUWKRVtMHiaB8n86YeVQjMqWKp",
  "key8": "3hPEwH8pSgRR4k8Ah1oPpKiAx5A7n8HfLHkQmfmGDqetMaRdYd1niQY2oM5wZ8SvzKS5ccBdWU7M8eB8o9qjaJk5",
  "key9": "48nk61FJBieBrzG7YBUHAqNs4QrFTRAG5DxBPvweS27gwWA61UkNCKkSTzaye8pf5J8i9NNhjFUNe88SMbciwbFC",
  "key10": "7CWqjCsQ7yUbBUMdsmgT59hsmWRts8tFRXPfq31PZa4F6vRAUzT1TEV38GgmKbd9jiYSzfSqZkHoYVKjrbjhoWG",
  "key11": "LGTSqm9XXqyG9bx7BJ4EQdAk5Gs8D62xEmtqvqZu4DTcio8AsosRZzzedDCTNVjgnrM1qUn4ND5HvSG2vwCF24D",
  "key12": "4QfMYZzMbbwrZAv6vDuuczfxASJNoS7Mc5nuqYgRmGj3Mfi8w5ZShM3gWRbbbfDeCx6BSKQsZB1HRzGgBbfK9kKS",
  "key13": "4DRYqipK9hKrYHh6L74KJi7iYTY3LTHQAsFMpHtZRkrNH1A9fSypSTFx37KWRAG7cgXFUDR2DYyGRSTsjwyeE9hz",
  "key14": "3w8aRMZCdYGzeSaKaPTpAYm4re2e357PDTJD8wU466VSwZmJX2EzFDmb2ds89GdHqXJXMs1Qnx2nLpSDxWNRLPZ",
  "key15": "5xLMHBgEzyDekfzmGuHnzpyn7UoXR7aPzkpoyHip1wnpV4ipXYptQVY7FRBxGoNDuy5fQUgeHKjm4K1jn8K4bwq1",
  "key16": "D5Q6GeCz1sUn1aP4Vu6YZNzEmZD7QpApqNdGZjWy7Tst98Zi84x2VXzBqWqf9dqD1BR1oxwGMsrwrYHK26cDsZa",
  "key17": "3LYof5njeSNVBPPf3aJcYgft7yqe9ECxJiY1CNSau21AL8r18Sia1XjvfDQHT32PPzbJ1DKcM7g6aaGFyibAxYJx",
  "key18": "36KM2ZteJ6woA2KiY8ao1AmpCqQQ6RLKvbhXsW3ift32z5sgSEv2TYRvtn63vbuiiZW1F8og326Ymy5num5nn5rS",
  "key19": "48X3PKddAdyF5SpYZVTxKwapGBs2RnjSMp93e8Hpz9eW4ssCDbX2Dchp32vYDjgTMfh5UyeeCTiHsiAvTkUEQVSR",
  "key20": "2RTgqTaAqCd7VndBGnKqxkiaSFFbP2ukLX98pPcbzPnK9yf3JFdAA8gogDHhutftDt79nShi37XGpnWvQNwDLEKE",
  "key21": "67kmxQJcrn5yNp5K3HyvrPRYL3neGMm2CBKBTTSMMr4XrM3V4pdbwBZjh2NhAuHC6GE6g1kuuAT7229uZATfwLGf",
  "key22": "2AwBC8hckL7RWiVngNJt974TpdxK7182HQKxpjhCDpWV4TFtXPtCErMjEJsv79pRgLwuEangnrukvDn1tX1t88jo",
  "key23": "2NpWe8btUU9pitVorLaD9NAAJjY642KCVy8X686khcLEPMq6CZ9emmoxDND9pkuQ3D6YupKmTnqF9qi1ktiQVbmR",
  "key24": "4qb3cEFmKucmEqDu2yYdqYA2zyndG3M7uBZoCkkqYSXayH8hmdtYo5tHcQagNBLSRZvp61eyDCLwVseZTk5UQAv9",
  "key25": "51iK2AjmGMhFDAba8EiPbhQNa1D5smbZY82dymuCgfvezcCN43cFo4sDjD9VhDbyWc7MXWmQ8zG4e4bdna4tuUdy",
  "key26": "5wTtLeZ6X9GHqPqvHxGCKgsCuKgyc9tLA2HLNgR7V7VHtP8Eetaeakd4yuRa3iAm5dtkNx52ueSkS86BDX6hkSVH",
  "key27": "3yrFPLCx89NWQRcorUbfwyBF9p6TKDam4sLu127qMrbDJNmgbiKtYZhkuV589VYQBidHKpVpwofzLxoLjninrWLX",
  "key28": "GTa3LLx5ofZeeSAfGngcwgcKC7gLJHhtmWc1jnAEU8FM6K5SpKSyQKgDYY35MD5yG5CALCqFhPqaczCzwsTktjc",
  "key29": "28KrKDJS8ZDRPSVFq6DPsM6ebVoqqRZN5GVpDbvCnpZ1TA1eZuqqBaybVZQiBf23gi3FMHppfTQdYdpLwFquwBK3",
  "key30": "44tsPTf9EsJhg8Y5MvUrtVPYsCrfV3J2844b4zo61efsyT1evmaEbQSexKimhKtPhVMg5FGWK7F9ABYsERgQwJWs",
  "key31": "4HxtedVv3cn968Z3FnTrkSfYynAd8qRm2yXapnT97baEMmi11iMnCMkes2cp2JseJJ6qdvSmP8TsKbVHF53NkLrH",
  "key32": "35o8RgqeP5pYeQmy4TD3WetsGgnUCKTGSubcGFB8xFXR6JegTRmiS2k99NNswuJkbpPyD2BiDVS6Y5JnFWcdt5n5",
  "key33": "5RTjp42SvrNbgXSApxYdiXyskxLSjXm32CuVuJ69EYgZyiLWUwFDofG9ywR96TxPkNHhWiyaNQUsCHsn13TQvAfR",
  "key34": "4phBE1oYkxwZCirSdFUL5nPY1PHaisvV2r9dYYypByYLdhBuM3TWM2UVugXXN7hyFVtVLnm2T3duvkD1ZT6pKxtc",
  "key35": "12YjDVPPP6qjKYyyCL2TBE9wb5UL7yQDRPcDDVFPhkD5KrLXAUxkK3x8mwtmF7ycNjS4wqicHSwLJRGwhmRD53y",
  "key36": "2nXnesdnCNYzv9vZH8zu9k3fsBPLHdqtJvgWCZCQCVqqMUcDBLMYxGnnve83WN57QejvVSBBC8U8QAmLAQ8xTENs",
  "key37": "2nFDgnY8iYCoH8XAnUFMafYPwUDVBzVj68Lab72QDsXn3ztZgmrNMsGL54PET8HpXpwCf5dSrD1Ujuz7J5MEGh4y",
  "key38": "3scp78bXBF784wp41YSo2DkrpdsEEincGZy8gPXv5UDpN6LtQuDMVo28o9QugyQzYtKtMLHknSv8NaJGEogCSe1Y",
  "key39": "3zwCBKJyys3hx845LhAqnbwZrsG3vxwbxGqeXfDmYQA8aHxyfmT7APe21QkhgCX6WKFC74UT3HZzkEDsLKjYfcHE",
  "key40": "3ZE93ugmRMZuA1yvEn9oMVY5jb8SEGumdFYFXZx8pFxhoL1Rm5F1vtuBFu4HJwWoqvSgrNXU7HvH8uLcq5PQpcWG",
  "key41": "3AB3Ep3k2uJTiKtTxtGfVxJhLW35W8hFJXzvuHeW1FUdGyNBpPJV8W6k7Bh6Q9C6zw9s8HehnF23ruAy8eFZWGwg",
  "key42": "5PH1Q6Ci1peUVGiGPn12AyjdzhrxdA1ZuejzF9jVTWGUfGkyTdzCFvwAh4e7MUAEC2Gq1cCVofwZsvDQniLpNddw",
  "key43": "3Lt5kvFcF4kGB9DnaScboVYSiE189VQJbwFZLLmFxXzztxR1H4nyZZyUw1R9sy8CezmSFSay5Rg8EhpFAVLQTP5p",
  "key44": "vW9SkxfNsp2rHeiLL8scroovzvasApy3r5taQcHA6bquztjaaDx3jhL42FZiDen82b2zBy4SkwTfBQjAzyMbmZS",
  "key45": "c9jG3iqMEyusoL2CGCkjdSzzd8P7XXZMn1cF7pzERs4GUVG6F6tBeMLTe2eonMiosxcTdLDke6m8YTDoaGFyCdp",
  "key46": "5eJGGa5HNsciCB2CFmWfof6RRsZAPui19JGqbpHVpMGxhMDgf81HC8MnPZeYh5zp8KsBBNpgqqJnQwVBzvznDQFs"
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
