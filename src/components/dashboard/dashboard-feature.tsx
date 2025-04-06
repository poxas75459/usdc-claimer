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
    "CjpeBd2sRvxQhvrv6hcKjg3wF3Gp42ccBJYk2d5t9Ntdna7KnNnGeLPZsnDak9DGPeFZhggoT2Gm2VqViXoyVWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zUecPZ2hyjyGXxziei5M8HN1djoVChX5ZE5bewVBKBGB2zh7YizfGEd6BTXNcH22mfGv59VG8h5Nx5PeMefeerd",
  "key1": "4WpEUhjQL15rN3X2LmMb4kwTPUZTRLm2Tn5jUBmC7dfcXyGHqS5JHPczQEdZ2rKWVw3A1bM3JrUbtBozcP8KpNzv",
  "key2": "36gDLv8z92Mb3MdG8cJeD1kJSkxiPRCt6yCGs4uvfjxGMF6LJb2WNvXC1gVWBbmtnPe24v9XGLqU2kkSyaqouxrK",
  "key3": "5BZvi8gTBuJHn57cfVmUb3yDbzSBJcTws5KaP43bALCM8cBu1UnG5LUDMs6DqxsMSRV3EDmZ3YqZjvsENScghrwA",
  "key4": "3zDjrACdn1VdCvY8rkg7MG46wHPojT7n3BPmh51zJLEPuVBJzikJFhsUeo1xAcm4WMFdtL5JfFcTiq5fBxENNxx",
  "key5": "3qRibg3bdAHwunUANHkXdnNUQbRTy2oVMCAM3e83MRvmSBSn3NEjs6izAKpUznjJCw37ewKyRGW7Ldgtju59LwoS",
  "key6": "2uAX5iUgC3LPPRGbVqiNP6pnYsvgLutnHDWfKpsza85qKS2WFL1VsZQ7cRBcUbEvdXkaPPm8N5vzzw9Z8DHobNhT",
  "key7": "4KBZZwPFhJnfeQvGMpxJKXMRfLqVTb7foig6L3FzQhNdEzGFrUuZ8aAYVexJ3xhNSM1C4i44BHtgYKcPZdtH7t6x",
  "key8": "2CnRcPZdh5QFu5ebgBbVTrQhSg6kBfM5MniTT4tu7u7LimhVGpSuKt2rWtzLx6uWxK1JeZYBaDGyez4e3SWbw5qH",
  "key9": "3qCw22bSvxYXS7TWUQFJEbpeEd7iriG5zJSpnmq28aK3eaWzpes8r6F4bPLXqKcpxy2ZFVBg89SZAq6sPKuUtjBd",
  "key10": "25H87UkavPkmjbEXJYD941QZuq2QUG61aYkrTQZ8UxaATkepRpVgNkR7Un39zHSVDUqhTcRbk9NPQNiJHim7C3gA",
  "key11": "BTVCmBqDCxuY71ckTwjW8J8uL9aNuFqCraa3GJ8aUHjiz8Y4Cxv912MruspLvrgmVPdWVXx6g5wrVzmPMjQwWJK",
  "key12": "2QaTjuXZEkBN8ZBdwpDdrjPRseCkbmx93sZHzdVgTo6odydfWWjmu8jFF31evuepFvKBKmDhke2dGNk6CNwTxxES",
  "key13": "384kcV7AsDyYUMrXnLcYwmr5h8KQirHTdZ67qoAaigxAvxnwZyUtqRH3miCY1Zj42L9cEU8XeDTdnZAATGkaU7B",
  "key14": "2zpeycRC1pzWpCWWtkQEHcvVAREChVYdAm3SacjWuHu9xSKdPeErxDoTncRjj9ARAe4K4NJGKa4y5GBM7BChtsTn",
  "key15": "46ywAaTLsj6WxpZnhXwm28XndY9n4Z739kMTk9e6Hjv3MhVM7givNtmH7bxwX1w53rTWyyJWaRMck4MZN7wMPBPr",
  "key16": "NWw1RF5wegSLkVEVPt1762pgfAk4x1jdqpVZWjCrGjLusJ7oZMNcPPwgpsvPoSCodforWbH76SwJjLdekvhNT7h",
  "key17": "5rmBCXGrnW4TG6kWT8K666XBphoGLnFQWbSq1eKfdzfxJiNHTUsQ9Hr4YNj9EFjhUwb5ESsiqWbdxjEcAkj1HSGn",
  "key18": "59Fe9aaNRL2SwiwpNDx3E3Cr8Ytk1PhePD9Gp19zWiR5VaJG6gv8yf1YR2idUTH4DeU5uusE4R6sraqbhEiimU9Z",
  "key19": "4oyyGX7CdvFxrCta4gKZK8v8fXLznUF1jEKBNKvWRQYCY9P9Xr3HSxamXxNu7d1Hk17yfRXuhouEQ4D5A8U5xNEg",
  "key20": "4Zn7uz2hEW16DBW7bfvZ91vUUHeKoMQtomRcWwdiYtJpNxQvGyXhbcdZisFFMZUC4qW2t4eyfvQH1uxkwSta2Qqw",
  "key21": "QEWDrdK3bVKyVNH2nZvD9ACs7M1kja8mpe4wUiEKfCRCq15ikXvue6qY61Aw8EQWVYftNPawbyu4PTEjHKSzbQG",
  "key22": "D63wac7JQYncbU4cnxCDBNZyFDiVzYzDXt58HdhFppERJYuk4NmkGfbS5swJ2PfsK2Cc2CWxtMYvAiZNGGPkteN",
  "key23": "31JywfM1i46ip5C3X8jVVaRwKheCADvxBQ6vRVoVQJ7DruXTLrgRyfa4Wwe5CZbuNaJbT4wWKNsnrqtcDHHhy3HD",
  "key24": "4uxRNRhfoGgDLA6xBbKebAeoGsaJeUMfLVeDX2H2yQS3aMEvSWa6RhtpnpVsJp7p1mLWB2ZZsm4U4qTxZq67hcff",
  "key25": "3njEkXsKC86eMpihFzQZfbaGVvpX6hmFTBmFz4PJDtf1hAx1qrnLAVhc37cRSNy3J3JH47YYDBGgiCpQENEU2DmF",
  "key26": "2Fnv3KJjQkLLPiPDXp8jRkCR1oem4V8zdAoZpPJNXv4AFm6JK9YDs7eDQY51ikm8ZecombmpHNc9XmTBS4WxULhK",
  "key27": "4GfR9hVjwQJX7D44etT3giR26vBHSsSXPAkmgGWuEmzY3knNL6xJSPsAyZdVgCChzErqKBpx6j58omfA8CTQ1kJL",
  "key28": "3jiwXSzFmTUF3PYGFimDgYaCAQu212FTVZ5vdECZMsWFdvRTFnxM4igKa32AXoD3ptzfNs88L4p3Zi9WJW2MT6bm"
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
