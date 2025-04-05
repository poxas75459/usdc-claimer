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
    "3Je7KXNAwxTKDB1nbC6XHLaUvjW6hHCwWA8Wad1JFqGS7yEHvpNbaBsnfsydar6cggEgrno5hJGuCcEhuLcuNe4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xvo2JQ3PHecm1LCLtjfk6BENpsWu8HpQ81cEFxFn5crsHBG7hZqMffmUtHkECjPPLtbGzJ6vsvrPRXjSzCMConQ",
  "key1": "uchCy7Xamchwarja38jQXa8wP71FK537XCUFKZnH3L7mQMn8yqaRUXqkx8bxmEQejuQZxvqsKY2TpqCXDGwwbpa",
  "key2": "3vzjMTre2XgUvLD9RH8Tpk752Vhi888iMEWQE9VHMDjDij3ey7Ya91NCu2eNYWRkxSEDxTXi1v3HmpYv6b8a3TcY",
  "key3": "2ZqUfw6WMzsoDt5ErxFA1k9s2BGKpZcKF24dhTXARvqtMqDBTriVNadodCkLEfFX9iZWfQ1yKRBdGDwfKC4hC8NW",
  "key4": "58EP3hAfHm4niqeijb5FCi6QNsBT5PaCDP5F53NBbGCUXJVPn4hhqt71tW23BYEkoLG6ZbmAeaz56KVbqGAi585B",
  "key5": "2KgoNW9n1bMmdWKqmqjGcvk1byMZ4cCW3bLm9ecZ12eCd6xnDE11HQatniaPU33qEnMViSParGTJSRLVqUpHDWC8",
  "key6": "2fm4xo12ci5FTmXkrEJPQMnnjsD6R7eo27AgBPCUVuvXh75fXmq58MR16FwRgbeajVuKw4XYASogHRrzFiKw94Zj",
  "key7": "5AuXRRfysCyENXvqEtoswYskG7niC3bEh3MNRMRFwuk58DQMgiYAUJduzzBUBrYo14Lmfx1VX7E4HAoCEEy2KVz9",
  "key8": "189RbHHWfFq4sm9dnGm2AYWsasD1AepRf2TpmJHRmwxtrcin8LMh3MepdJWVoeMfyWFf286o9e8gJkiKqwnYPzT",
  "key9": "43PrMVCrSWLceo9xWmHfPYstFjVM9rm753BeST7ccGp68YQcF9Sux9pwqN9WuPiydDqCLZCdEMAWUUW3e6XjkvtX",
  "key10": "4Nmfm7C7jdPYTc7sqZQD1iVemoWQTxw8ahVgcWeAozVREZp1ZeURYEmAhK3fgdgH7FcA8Te9SNdm1sngdrNVvUZ",
  "key11": "9V7hkfbTJ5cnRyF8vfRUYM21Qwrk5CZiTSiwMBwNG8mSHzGqdoJxyNALuNLAmixBX2ce5JwvK8LnrtnhPAqbXr3",
  "key12": "5Txwhgosg74PV8dQcMBvz2F6qzHpoWpQFdPLb6Q2dBXX6uZPYszT8d9Xe2SFWP39k1Vh3aNj7mRNw4AnyvZNZ5n2",
  "key13": "BRaQToZcQsKHaJ9JtPSZ2XTJuaSv5EgE3WBSnrC8XMd3nFUNQ2maPDUzvmVrhVsrbZM2H9Qhnxuhp9KSXwFVsSs",
  "key14": "5H7oygisuSioJ35M2xr932fsFzrGJud6QuKGrPC3W2oW2FbXUunmRvnTbHwNV4QMQc8BveWMZuX2Pxsd6BR6imwq",
  "key15": "38N8oQ3FwCAbKCxfTUgMbJTDBrYY4tVErjsxPq2PdR5mhstxRbvCCVFkAC61oCeBiJwT9GmnoUSNZvaPDJJLaCyg",
  "key16": "2gtEEbiEgfLE3gXf72ohQMeFRnZa7ZYKZMqMR1bRsqJPKWbxCghjMCf9B3NBsp5SxfbVPFddvjLcjRNeeH8e89ke",
  "key17": "5na377jBh16KN6Wsycnk2Az2fViu8m26iyvGqkUQZigyS12dA57c3fKb1UUGFQNMmThPBzXUkUhepWSH91dQ9kwx",
  "key18": "4JZ5qfMspcLfHBPcuiRHk4GbLeSB7skZbBzyG46zfRv6bpaAw3pT73G8HoNogGCgYuDXT4PsJB9UzBeTdAPUVkmM",
  "key19": "41H4CKWd5evcJVjPYP2FrZ7qaNrMhzLxNi2eHnuB5iUi9MY2EbdBCjXq3KMhnWowxXyt3nA1REjRmVKtZ3n9tDvb",
  "key20": "XbbggLMDgphgZXZRitBR6NWCX1SuqoDsncNokKbkL5WJ8UXYE3GUHM8mevxjwSumPd4PGvMvXhDeHiFkcvEhV16",
  "key21": "3zwtA7XaWumasucNABUwy5H9e6VY9j1dKdxfJH9z69EXApuLfUGqKETvarLZTpYoVJtDRsiUyZyHEdXH8FUFSRxf",
  "key22": "2J1nwSWW634n7QFnf4XeQwnxPdt2AdsGULZTc3GYcYVyMEpZxBMxcugPwaJV7QKxZeDDcVQFUDUhqZRQcTzfREDT",
  "key23": "SMmhgk8YB2TJFGbsqiSpHaXXHgbXBdxFJAH3kqcTNyg6LzU8XYMFgQqBVMDxUSivw8qcpQeHihuejzPK2bjAdjZ",
  "key24": "3pNFrantSZTCF7btq6yW3dqWWUQ4Wm8iM6a1NfrYiCrkxZJMFyF8TTKSCb3gtNbVp9T5YbDUV9qx12j5gmRv6PRG",
  "key25": "4n3YyA4ZXUuHa1txoGthHSDpk9syWST5KDxUngtKYpZ1wtMbihhc4R1yFtue6vRmrS7ZXpEBMLFdZMvXUuZM8sV3",
  "key26": "2tQk9rNBcgDEYYVqRCMPB7ixj36QHyXJu5giwQATPdRnrsf71RjFtSSM3ubxpo6g6qtFdkHsgyGJehMLdUaBLoHu",
  "key27": "4FF9RjSzFfp79DRJh1hQrqNHkuxgvX6BX58FeDYYrW7aJvhf3V3DYhptXmt9UpQyGH33RZttf3WgkSh3TZom5dj7",
  "key28": "54dow4wDMkKGNuMsDK7bkEFd5xP4SCKcbpuoZPt6treNdSdfpY7awPWEgzMNc3QRt4aMsKVhdcaNkod7L42adKuF",
  "key29": "5NkKeHazpa8Uu9zxoRpQFA5Wz19rASuAguHm4FnrkDzETFpwSmj4YUR1WDod5eC8YNTTYN6ACsFWV9x67xgmMwUk",
  "key30": "4XDfgzE1Uz27LyYW9mZyvJLR64wZZiZtfiC2QjJC4bxRT1Q531VQGzKHDgjFCqQ9UYbXo7W2KPjnoHtqEmwrMvpj",
  "key31": "4Pghn8CsVP3NfiZ5keVFVvGRewHBnYicC3NRiAxy5oP6nFeHAiBWk7QwHwFhTXxhLwGiWDHnJY5veTW6eUvJEruH",
  "key32": "491s9uR2KKYxKo99DJaVsJNjKDavYNBjnvZk3PyvFKpkJv5bwnZSUdr9NfsSjjbULuc52pUSEPoeTkN1Bamxi5s",
  "key33": "4PsPpYqciUEZdxVyjfUs7h8WfVvKR94XghMs2UR996SoiWg9TaiG4zeXU5pg2qiupNRCZksX4dVyoeJxFUu5AJiq",
  "key34": "4wkgdZ5Dr11SKoCi73Z3CrAfa96X9oQLxihYGouoDxjkMWMkKeUuhQqdepnts84vsvG6jpD3nYF8CCLuqupvKV5m",
  "key35": "2ao9rNeVaF7coZ4iphYSbqVfjyN4i2S9UZjqQRpBng2tBWnFAKHGXQRPiQg42XJgCCtpstMvjw3HypF6GPzUWpQc",
  "key36": "YEQZ8t95wSe4o7Sf9aMPqZPnT6WkfCxnGRYavDp42tLwr2zrDLurvSXV4KqsKnH9xUsZJFkibHPZgqxiuJeoPjn",
  "key37": "4Zh92oYitPwwLmGEpKz1AWQAHHbVftscYL4MzGhbLwiyGowSyQBAAPbKXxeAKqmWyydLNGd1tB5L72cJFu5XF7pz",
  "key38": "5UyiWkTKA99rN1vJ7hVnGBf8UE2Jn5zGrftoHUc3z4BFkG6oWDfU5iiMKrCg7j9rSiC4gvcyhxe2weEi4W4PCaei",
  "key39": "M9h3j5itj4KcqKyg1WxRVTj9gjj8qSTWKZRgY7eCZpY9qQoY6U65ftsc3djHChomgChUGcaTpt51C7p36xLTYWb",
  "key40": "5dESCn4aAqtpz7C4KkqXAtZor2RoFLsP85Xdc37qSs6uwe9EGEnSSs8d113npo6eiW7kqBGn7zaWzQvri4K6Jzqp",
  "key41": "3Q7PHXNq2D1vS7hAJKD5TG9NgH8HnNPvZRHZwfRBbnnGE3RQzZmSFhAvrdGfPtadcZYCLGrda88bYGXTophd81MP",
  "key42": "3L79oAMvpNuBVDFAZNxMmbhY3ikYK8MCBFsdVqf19FNPqmzxedP23tUVFkDYQ3sR9fK917ohgT9MvLC7VCAVPzZN"
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
