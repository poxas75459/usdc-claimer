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
    "31oRFSg4pG1D1XSKnvo9PWWgc6DdmYCp1GTovrHVUgHKsreY55Ehdwm4HUR7oKc5EwuwBWJo2ShLVzmWsJFL6JZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bw3SPAfq8CfXJBvZtJzTKACiSjxjuKBuy4jPKbCnonyVTfH7uDWZyPV7otvNCmCWmbQzfrok9TKL4p79g6gHGKU",
  "key1": "2dCa9VsaVxASNAtawjVGYp5uVkAAHkDZzoKBEUbrnT1SRYLXAghWxhxtec5yy5BSEm7o1UWQHGdz9TFBkP4asWEV",
  "key2": "3PWjz5QJhdCBw89iUAz9WZDPa8Nv5jRzizTHDMCLCYbgpz9AxmBMvgB9Lg5ZSF6sGo8Fr6usQ9UWM573BSLx3ipo",
  "key3": "5WHCxCx3V3n3xLnyX6V7jaKcZaPDkw5qUVvtr4vQb5Qx86uxx5uL3DSPpdpJGoyGSNQmY5g6VN4MhNe2yHnmPyfs",
  "key4": "4aMfEikxT65hmYstQi9Q9mJdnKLvKxxLEVjy7HtZQrg4RpD2mD9P1HEuBaQLm179FNeLcomo2Vm2N1Qd1ANdYG1D",
  "key5": "2NoJHNFgKNdGaQoQxFUa3dHDPC1dfeQgprPQvdKZfep7oWLNoHPJVKKozPfqAHLnsznBVbdTcsjbaZmxrBvjj8in",
  "key6": "4mgcErGKR6TQQ9Lqk5MwRxmYDgK1wokhdGZAQYLeByQxWNFvRMxw7n3KENw9L1VQmkveZF7prC24npAZ7z8KH78F",
  "key7": "2BupDHWffsZkeF4rxWpZLtJ2vHcrsFCZWam87pTpm8cE1jpCZP9nvJDtvvFsqzdxNNG4dw23kB52RrK3iDmuUNrE",
  "key8": "4mtY3RhygV6mCGhAqjETUGZr6pj3yGAug5wqnM7qCHULxZkirHLvvJGiaK4kzCJEXofSFTrK5mdQUXjt8QfX5X1K",
  "key9": "BPjmDED9WEPkeEfz3ibTvoAcvMvFLE1N48VwXpWKzMDLMy8Bk97tVbHVq5MvN6gG27ork2PhMRXKLpgQrf2hH4G",
  "key10": "2974dueKEioAJmKF9LWJcaRKnhbZU31MsmygAWCoK85KqongbzspBMbBxAo2gEQtg3MVwQfgR4aD2md8zjZvK3UM",
  "key11": "564KQcd7grNcWGa4xnwRcL19dPE4gJ2KACvF2NZzAiDeFgW2eJ1P132AdZkcK8Q6vSQ9XPQCYJW4u6o5xUdCNqKC",
  "key12": "5bVMvDXaAKhv6GfMH3TX8XkoDizpr28eyjp9S8rTEMV7PKgndDNcfoZtNz2kSbnUgVicB7fBeLp31eRrrVabnVTb",
  "key13": "5qxBm9Dkpr9eXLd94PKEEx9VmGTXa6Wp8hXNQoEUwfYbURxKJozUw2DnM8kMwjMjW6cRTbHB8TKc1xyuqETsoLms",
  "key14": "3eQu3sxCbT55TjkfPrk3hcswaGZXmB58pLLmDPzfvsUwxjhDXDm3gdSwE79PPLcNgm7Gc37oyafY3Wb4DLZPCzFV",
  "key15": "4BR25RS5tNX58L9kUw9LMut36K2wsrA1aMwes71dqMgmpwCdpbEKzqnUE6vARB2v5hxp135Dj59fGLrrxdy9b4Xt",
  "key16": "LzY7JquFRaKqLgMZqUutBRTRfUnpgedigULCM4bRSm6boAdzSNQQP7Mk9YkysYnbqQ5suZXanBWVve2uZ3b9owB",
  "key17": "5aB39VbSRRv71FJAG5wSAavy3CdBxegLZosWA27m14YUkmq6P4GAKwxzTuwCkTgWda4LfUXSWTFumHRY3xmHALUb",
  "key18": "4zaKNUk5Yu9MkzPWhMqSpzUJh2doB3gAWbETBeFSCBPBZE2C4feFgvahe59TKs7fG6WrWEXWeLFKNaUGpeKgKREq",
  "key19": "56oB2iJPSBXYzBidB1yLxCoWhpF2QQJMX3Sj3Y9D2QhcnNBNXZhbzsJnrjKiwgyybTeQTnHMHCsR8gpfyxnF4Kxd",
  "key20": "55EL7C4fT1cajUmxvbvuQq8FuykXbAKwYYLbE79xeLZCqfvatTJqQnuVoPMrMjpDnAMmFMjLQMHyFntRSMpiks4L",
  "key21": "2TiAnChvrNeQfYDaBcDp579dKWymckEgsnvDzm5VpdeiMS3aPa1S2bG9VBe1aSP9aNbNWHN8B7zo85NhPrqAbfCf",
  "key22": "2U7anVs4bNhzjHkxU5kTUAVkF99ERRa5FUQiuugbjnJs9575rnFC9XwniGTimjWL1Z4amFsoFJ93qzPsmZgBQvQZ",
  "key23": "zyncnZQrSkvDgNXxGzvnyt5saopJkNJU6PbKJqZSsiFtNNGsGcgNcJajozYvpQUL4dyRQTD8uPidJJRb6HVa3Hg",
  "key24": "3SKbZdA1p9YoCff7jv6UMRi7poE8DVCzCdRWqLLR4hpGgkPUrYzuupDqCH2LE9HohrHg2dYkC2givbQqM4vJva1x",
  "key25": "4diH7YfmfNrV8citPGfT5p5jucJvxF6agcfgmjk88XJwZXYM4VAjwehWE6u1zC9sHy6QWTdG6DuegqAxFpkLh5FQ",
  "key26": "QYkBNQMddVesrBbdGZwMbxYqHoRGhg9VSyUTT5vHXogQyxECwCCSxst3Y6Z8b5rhBoMBHUQB4GSN4GYQWXj89kY",
  "key27": "4igHxQ7pkzJf8ag8YgnBbeNSCH3WxkPfm81GEoNZtAGnekMTnZb6SrTUNp3Bj3LCLbiQbrwmS2BaYwUT77S5G4xT",
  "key28": "4isFcvQbQAAmMGE7cFMyWepwgAFBt1GNprjEqr6AHy7XKz8hW5YE1xX1t6wrZ5cXXAjUnMgvDWTM6gUHPG3vBRgD",
  "key29": "ZGHSEddZjHMNPRh8uk6ToxWT2Wya6MQ7cbkvBAwbxwYC1LV9DQiZuAMfno6fhQFsZEbssPLvMiBSMQWPFxDwG7L",
  "key30": "4sCjmM5fLzFWaqSF6bNLPPUyc7FnJMxWwdMMAW8nR4hyCrx45QNNTvDFv8TTiwcpiNbcx33T2pvQsuAnwPnsZeVm",
  "key31": "35X4FfnmkojoUFB7pH2zf3QhX57txJSyFAWBMfbgRCWm1fFEUdHnfpEkfxAL4vq9b1tmv5oFVnyCDzsp7nxtjF4s",
  "key32": "5WNd5fqzKFmieC4ZHLVqac1x42SZfat4t2hDeDd2wf3ppRK3c5bwm8iH3fkzpEGKNn1f7RiepxJeQUhFbUGCWd9e",
  "key33": "5kNqWUhCv9aRoVzWxVm6KkbkYLctcVb5iEDjQaKXUmHAPFx2uFsbDbzpuA79utZurqhf7JewdCAMta5pAu4E1S9D",
  "key34": "36q11qJ7rD4kB5gTVn6KfVkXAQum8XSFaLRiqSLeZNz8XcMrV4tASaHHQXS19wi1ojGBMbARsWPKJ45QoHCqVvLS",
  "key35": "5Fcwm3pgWfgyRRSR19qcZtKadUUu3AFnViV6bH9CBLLZqGzjQJE5qrtyGz3w2J87MZjtBKkABSkjPNhSk5GwrAA",
  "key36": "4ZwnTAouUcSeJ9tDjisgpEEjJgR2KR4JrHAseyKe7XoFcXeHjriU1TcwvDHL4mRdNXxpkdQXZFKDAFkXe2CY5cXs",
  "key37": "PtysJ4v4AzxsubEsqUKxyHHY4wf3eaZKv9TvQHGiVh1uvnVaAFgsuM1Jp4okBMGwk9a8zdKnVvUrwtozvAvzoyd",
  "key38": "25uEKMqTV7L7oxzaMDCerrhpwnwcxe2jsXix61J3preQRhTmc3wQTjX14yVAjDcZWCoQKihHSG7diyZFvq8uZDEm",
  "key39": "412QX2KB7Uge75pRnZuSpgTakoqk6ASwVn7pifZ7VBENLjgJ3srmsojmLcivgmAdBFPV2QWucyyoGoFXyqPbkyeS",
  "key40": "RVLNAYikR41baX2wxMDG8GpYK4vZJWfZeVfD1yA9FUCoYqJj49huiW8YD6662UQVDors5z8DSDyFtVB7sJLCjrt",
  "key41": "yCn3MjpNLf17i3njkY5RBUY5WR9U2eSdH9yGjWjAtVNR5dL9qH1sM1aGvQrPrazAdqrGUSGzCUVg9wEqV6p4E3e",
  "key42": "4tkPEQw1CqmjZmUMF1waxDtDa9MMBRZRysHE9fQt5Tk2cm8PzK6J3Z2LXz1o9vRLUyjV3LFKbJaSpJieBsDmJfDT",
  "key43": "2e6ePPAC4ZAXhxNvkRjP69Q8sQuYoL5kFJ8byKt9EEgcS1WGR5wDXxMPWDQSn4CR3SDHuNasrGFERCoprpFpDaZU",
  "key44": "3LR3SEB7tRDbFaBmvphQ6kbcShzC6Zgviq9PgtZLgLsid6eozZcRN1FoKhkVZNJHioGp9YUwW36HyEATyd3U8U45",
  "key45": "4GwnqeDADsFpawkDpTSre9SZBJf4j8Xq7QTVzm5fLsTgGz3tWAyxWTqpL7YteNm9LrF5i4qCiNbgSLndzm1Mj55k"
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
