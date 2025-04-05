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
    "QzGV79PQXRFVyvFFwrm6ztGie2d2PjTdN1hAbt9fs6mkSwTBL9Tm3LTJA2PSbHWT6Mvi3oDFZSfbXRzhtbY8AzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTPRKpvNVDxvLfWBeFEzriPmPDPGfwk2wBwsBnfVubpEttr6WFDaEHmVLnH1VRtkY5ggVZgJQc9egsfZ8bQoKcn",
  "key1": "5XjNYv12P5pLrtFLm7NymMocUBj7VEMcoTvPsfUNc25R7AnCSPieCP56XhPWZE3xSNosz5CT4wDf4U27ynNQHAEn",
  "key2": "5e4HZor76H7kdH97KfTQYizkW8QebTNv7AnJRN5AiC4Qts8cg1fYfpJ4XYcaRmcGcqr2wYXa1Tj7WQLg3yEsKMmU",
  "key3": "ExJBChahYGN43qbDRG84SBZHHRSv61HpzPsDzLoX7vAjfQGZCFiXq9RizJLs4kkZz547XiLKv5s7XwvG7gfrA4a",
  "key4": "47aSuqnirPS6SV7T61KLw1dCLxQrGvd94LZPbYuyVsqX53dfQg7CgfFoNKsb4AkwEgmgav7wtvGivWon5xi7bpfL",
  "key5": "5FoAr6E5aphmAwYBBgcVHCNkpa2BPo9fjyQC8W7qYmAeacnsZBrckr4RRYRZkj5ievGVXS6ujUNC16VgJcFCzaBJ",
  "key6": "4EEffuYaUc42b3NK9ez9Nk8rnLsDRNjLub82GtYipssmszvpYTDHLqDkADhD4Ep432MgrchbcGn2Q2VwRQ2MtSUQ",
  "key7": "gkBxZmG53jWXSBqHy22CoLvwEUpTNTHoqd6VF61ExVbW8aWLW1ojyx1UVhvF2HMzcWVHTisNmy1xfPBpKGnMk4K",
  "key8": "5vdqojoBDZXwiVTP3BQM5b2y3ZGFxY7rCujYf945JUa4PBAJ6CQCVXA1KCTJeZVC8WmdLCAmXjDSc3ca3cABvW4r",
  "key9": "3sNgS5BchuSYWy8mkLhXCss4npH3PeQfBcSarD2XpqXAEQULPHQhnzF7WRU3kN99Xq5CD7FgLHuKowD4YowHPvMD",
  "key10": "5KRqJvB3qKKhKoC6D33RDksrQ185dpbCNT4aVdyL5beYuQ2eFa74gs8PAegsjGpW5pxLRZAuDAai73nY14VVPf4h",
  "key11": "34EcnBaXaXc9mydQXrwzSjF3hZm5pXruMoSr649s5H4Haqnp8XFnsBP8dyXWBpGUSPdnTkfVudx8GYFK6YX8FYat",
  "key12": "24L6WDrwfaXDecX4nftke7eMMVjJhZ3YiMv97ey4bxYpNw1KAqRXCfdBGf13CdYkCHPodZd1M2ciYvREXQWRWUe2",
  "key13": "66QrGdL4Rgk5X6q96dGFXPMDxFQw17ctaLJ7gJAuuFeDJN4qZgiN2fKpuiQsZ5aTqKMHJ95sXHgzZ5AkjTBZURRq",
  "key14": "2Z15MxYoK5y2TD5HGjqdK84XLK93j2QU8hAt86eUDKZqR8e7NiwytpMdrG3SWP1x9Qs1VNka22SB71A6FyzuJ1yb",
  "key15": "ALHG3dmVHjYFqkRUeJ3P32xWDS9wVCPSCquEgeGwcH3sqNFYxxAmmZfDbzVyDqNRHN3TdbZ3Jp8uTtVTQRcr7Fu",
  "key16": "4mXWQBQfgqjPhn7Yu5Phk5BTHhkRQTKMEhcRN8ZQGrsZrnBjr8LHHk54ah94xmxMgEaMRP1hDAJrd8MdZ1MwXXEG",
  "key17": "YU6Q3wPig3Emy6KCBmk4aVMVFEaKY2aMEzGi7famHJoT3E5ETh1toSEsRfRYP9dWPPpn5fPqcDDAziSRyiQski5",
  "key18": "EtK7dTRiCBDRzR3mMApCbmCvTHNvUdTjZZCcrt2weVGowQ6pFqw6pErBBUzxniWBRAaLL9wgtCySTnKVbjLfvtb",
  "key19": "3SGL6uJcKTPVinumEANpFPN7ztUgk2SSbbb36smZcBdtcK2JvWKSH8YH3q1VaYp4yWGvLi85aByvHeJkXftktQYz",
  "key20": "4Bmbhci8htPT5zHx29APmFSVyj5ydyA2RhUx9dzUGw7YJM7qhmi8RRPa7oV6dc17XZASnzHsTKBcBjxYNe2EgGgd",
  "key21": "2uSYmdDKW2DvbNSoadqmHu7hacB7JkRDWHJjPw34imTGKL4oPf1XxZKFt3oyAkF5yUKf6QbDB48qHLSgm5THwX2V",
  "key22": "RMd5Poua2GGfYLjCdbpyS6RP31DnxcrDm1prKtq6epHTaX6FhoGzaM8WP3jqEWfRo8CHgWLzr5Tcd6kMSe7awfy",
  "key23": "2NbRrkTZV7qh5PEWwQ6B9mZQnCf46YKnFhqyghokpBTrE23pE8FogVmDVAaVJzzRWBuofEZArwzSc4HtPPUG1bB6",
  "key24": "4FRSSBn3JJVty31q5EDgDt5gbrCBYym95gLmPAaZF2QNUXnHEjgSqwzhAMKjbadXCLggNnPwrxRxeaGT2RkYbSwr",
  "key25": "5BKho3CkrhJxL4rDgh9WeDH7o6XtnCfdFEWybo3rirriQeLL2KGEV96j1xC3eonUgUnCXhduPQ418aCVV6vs3fxA",
  "key26": "2SKcx9coycCs3PKAvtqwaay9dGGTyKqKLauSdXLy2pPJ3H73TBUDyf57rJzj58NpSbbzx8v4XqWZhzybnp64cVXR",
  "key27": "3twzaCgzotZpYpuV2BkWMWYuM3qFmy7tcYKVYMqdRJzUCjmYtjHCHrs544j7JJDaDb6eEAfZ1EErgppWrKDNF3hU",
  "key28": "52ZdkNppbEVF2SP6ZhsN14i7f2DwZUPSN27qSDwR6jBhZCFze7kYawjc7WKwc5ySPrzRtJDN2XqBM9jWAiZxv7i7",
  "key29": "6XksmYxNkrhccrQ2bFY5fXwT2XXB7corqUYJNVkeySQSgMgjP4xEJWXga9UbaVnZb6NMXFpXP4y4mFDyfZL8FiT",
  "key30": "3EWikjWa4A7V28miELcDrHDo33YmAaatWKFeqDQpeYX4SMiZUAcUVJtrEXMaBW4sUyopjLxVZFta7euPSaho9Q8U",
  "key31": "33WLd8oZ9o1dGsfMV2UetRpqfKSNpiQkhU87KkbNA5XM7GFX3nzMHKPrPWJDQgtH3RWmXqJ7gZGUi6WFQCitVTbS",
  "key32": "4WP8V9U4abkocRTA2QCoWNaQkfHUJf4CtqTw3PdZzGV4aLKbAH7wiedEkuKciWqCrJPM6cE1ZLca9PwDwyKq8CkL",
  "key33": "4gfj8K5AbVoqxqET4zvPqmxJTEHTxH3EzPN6obsmbEcQQg6iFoFLMnyxgqPa6V9qYkZdqHiNXyd7Yz56rTqkaer9",
  "key34": "5rtMvtP1enVBmkWKanrEvYbQ3AuTNq5ADZWvCoyrCwV6z7f5bQ955MqQsAEJFoQSqydfKwvSnbpCsQ6gYm1i9shZ",
  "key35": "3GXRgQQ5MXZ7UhWyWpiRPJy9Ha8i2oYcjZwAzyfQkGKMTJb7SRzZnUiV8yG38AyjEmjn3AdZd7Ajbcf3kTcam1aZ"
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
