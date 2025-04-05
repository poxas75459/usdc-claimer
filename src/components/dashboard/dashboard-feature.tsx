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
    "HKvqgayEFnGkSC5MfJ5hvSTa2ajH9ZNaGVzNRpxfEAMMVDuMuj1KLnUYypqDW6KvH1TmtSZPdMzhJzq44rP3itX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWWQmxkC8gPrMP5dQExSx5BGs9SsuJMMDayjMjMjAxfzmsdwCtmG64zYs2JAHJrBxxm9CnqYNJ2krNEq1Z8W95k",
  "key1": "NJdpxDMMckJaRwnehpcXiTcnrzPHJsyj3MEjb4CcWzq1c62eBurZ1ffsDb65vEGUY4snbaxK6pDMbRf65CCPUKG",
  "key2": "4ESbdyMbpgfujmTFJvhHPXfXd5wEjjAz26BYzy6TR1CRRbthLh87VjpajckZaycdmdkjP1oEtHkBQFSvfsgFqgSh",
  "key3": "43s1eeoHeSqco15GkyPN42tDMTvM19fCxXRP3yxQ1cEpezPZ4Piow5mLBj3cSY1ciTJfT2nVmRsGjEMixagHj8w5",
  "key4": "4b5jPLD6pbmkDfubimg7yJb9Ti59WME5LwxL1xTeYKu6fjBq2GX32E81QSaRvQ3WEjyJGLka1HVBZiz7wLuM5caR",
  "key5": "61Rs6yLm5bvNUPQ9gY3jRi5m2H28Yg1tYA4ksoDmmanYihPWzwuRF6vypf3YfYT6D2pXHA5CewwenQGZShMGPmtY",
  "key6": "wfMkEVTXfQTgNmkHgAviF2zrASNimMycePnBrKexvZuovhS2vMSeoArJ9jD5rpEAe1XywoT8eSKpQUxJsFvmLfd",
  "key7": "5QMiyZv5DcAdrauYTorRZXYnuojiXHPtMfgC2vrHLSHzrRvspQfPZXmLnzxXBbWffFM5RkLezaYEwzg6MhgQJ1VC",
  "key8": "5puMQLrkmfhfuJcd5odJkVbn1HuYgMomBqomWnJD7H9KNoYMRH386dnRtKQqZDduhbo2LM5PnCuEqbCJhmamKpdu",
  "key9": "5z1pWdheBC39Tn7LUHR3F2nbRLCjEPdNGegHeJ6hwoSRzwJvCQNW2rL8uY6ktRHXn3J6FyGt3JB6WECWL56u4mTS",
  "key10": "2a4f8cZZfFuiN8WUhgcZsacZNBeFvrQAxQXNdHGF2RZSJPLPDbwqJKifVnpyTEPC8jPQnhWaCJgd9WBYK3z9W6j7",
  "key11": "3QKhyfTbSN8ekLwkwgSDoGjhTHqjCHVGynJ87zZ8qDS7Cy5YcnV4XLh5MrK7hL6ETGaiXWRyHkk2fciqFnVja67Z",
  "key12": "3fqJKHpKRjJSbhucAD9zGhBaheKz3avWA9FFiDdZ1C1KzouobQghrWdTPBkDkU1WVVfuKkvJuJXGdKt6aT8JkAN3",
  "key13": "KYsSemTmwo51fxLy6fhzDs2d93s4nuRRkKYYp2pm9w6XtDzidnQ5ruXdPg4CcJYB6zc2NxaYNW55cgzNYzjgWyu",
  "key14": "44VNUfiprvXtNtrJQE1HE5uPkq5Li1dan1zJFWwc3qnTLm8dmoSQ4fRkKYLjpcPVEUbrn2ToFtwUPqZ451E1HCuK",
  "key15": "55WcAdcV3wmu9i4WBZpyC9PKX9s8zFGVpesp9nJWhJBCra1FBuRX67okbnXxmqZexJvrLNeYLH1Vrw8M796Ugd8a",
  "key16": "3re56Xa4JiQDNJArUzJwgSX4zY6M5nBDyhhJZ5htzdeTStFvij3b52CnL8vfZGiofcXuYrbx5ZH2fsqTxEYR3moJ",
  "key17": "5pnVjAA6317frLVouboCq1FAS3GijDqbPFys3hpb4sgZ6h3rERAHX4LnaYmEhNvFHYSgqBPVTsVhNLE5h5yfyugd",
  "key18": "i3Y1kik3xrqhMEhsN7YdbTWWDJwCnZps83V3BWTG2Ru9xGYoySu8GbFDBbRL1UChavnpvs6HXTCXzJjbPMJckra",
  "key19": "2npggMUi8xnPiksqfpTg1rC78Ek7fAyAWC4MjaX8VhxUvJVvZe3kNg7tDvJBWdUxWra2tyWJMTaNBX8SrSwEfizP",
  "key20": "2yMskEiQsDvnkf2zammUrvjwUsFBYC8Bs1CJXw5Ds1P1X1TKSvs1ZxPrpaA8dYUGGNTFZeUzjnaaRkXrtHNKAtEx",
  "key21": "2ypLKoEVkfknyfB91H8v2L7GwrtBZD7yB51VL2bsmqK8ijKZvFbe41jM1Bm5HN5YWHFgZXsrnV6ArdQDNdNM1Bue",
  "key22": "fJVpDgm6NyE1eAYnEnw235TWEVBiaSzkZfcda2cN5Bswk7tCMMS66iTVBKYWvtf8tPxrj79KyqDeegt59tneyPp",
  "key23": "5ZhTPLTmSvAu7oXMCbFqGiHo1rN4YgP5B25ArUCg5zGA31cmG6XPRkDjKahkFvDoAABmTVoL1556qwy4rXkrUzqz",
  "key24": "32hWnaa1JXayKYDzMq8tvosWprdmotLiWfPjpUGsAgMRMdfiQdUga6Xg353xV1r6b1aq7oAjtvrgdxY2yweEmSWg",
  "key25": "576zFAot82PwnhVbs6rFDg3WT6souh9dqSgdXmHJABi9g1fm5Vo6VnRmxCG4vNe8Xr47aUJEYzLYsHWU2DjJtsZ1",
  "key26": "4bcHw2mrZmEEuejBo2gi3deEfmtnj1XXxpWFxVYWGKkfpFhard3ML6ErxMfj7eA5Uhz3PnKm359ocYEJNsMRGVq9",
  "key27": "66mE6orLUtrUjydu1QTHNpzJrEbRx7RU7rkxP57DmGgKHZoRyaM8By7KZy4TyFVaGF35XYJXAXJHZgGTvHtdfsoG",
  "key28": "54LfFpmys4K64GrotdrigyRweZBfjQWqEb3QiMbhiMETdULzZg9YkRXjg8PS7qizV6cmdFEMeiwSXkh7KmQ2FhiV",
  "key29": "kiavVxkgZNwKhUwb68zZaidRPrSK3yy5RAaQzuovqfxoXM8ded52HCH3sZKq9Qvznmv4WzLLVEi6uat5cFzuvtA",
  "key30": "4jmTQCNdTFMbSYMr7MN7SZjMkRTFa5S8MyGhfwF6Aqnpp2UAWuPSBB8CX2tgZdVbSUJwmnPL5Prrg6WRiJWtWHY4",
  "key31": "61XXNXWeU4k5FVXQre4UKDqXTW1A2CGtyEcBV2KLpEhUQNGJ2ZRor4mnyWRVgeifsU9vZVX9AuVj6JMwrHdBKhgd",
  "key32": "2mxmBwheYXmHNe5N57KWU1UvmiszFaP2bD98vMhxcQoSMXbffXUwnorSyMpX2FxnDopdYACe2ZhQ97W2heaAk9Yr",
  "key33": "5HktsAeBib3dYf6cbqPLQAymEXkYjkLcq5zimRZshgqZD6gFxLTanxmPM38m3goruJXLR4v83ovvATgwdg9ptFKP",
  "key34": "4ERzqRtUh2Jv7tRmgt76qSfD8eSvhd8rX7wW672gbyrKVDYMYfEb5drJm4eH7k9J7iBsqXLPnVtvhuzF21wz73nt",
  "key35": "4Ssv8veZrTVgydYBHQkKeTHiP7f9XSpbPuSkcmmT5EotqBdtpnA4hsR9wny4no21oXPDGsG6mnUcQFAseEFPXxy2",
  "key36": "5jE3PjyZUQP7AATVZWrDUjA5eHChsTnhKv8dPCzk1zf333n6cimzbF7Mp7dCXujgrvqtrKGuRKhmbJ6C4Efb6FYH",
  "key37": "rT7d7AeJJhKn2uS654BqeVatjAwMBmMDLdKLiZUFu2FBUGxL4oaJ9qDNojBeCmxswVgVP7shh5DQSYdp2dgV4Fe"
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
