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
    "4GiCBscuPyAxguxvJFPhA1HyqJ2b1Hv4i6AScBk8qoSgpGJMW9YkbKgCfeQpp1HgfurBfwAabmC17LrcmZHS32Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GUvJZCB8XZXLuX6UL4e9TK2ZF2Jgh8jQJoFdKQffRyp5Gw4Un9xtUgr69GPKccqM9bATtc6PTwTpe6etpQCE4F",
  "key1": "4K19F5azkZMzowaaBrK5oStH8vUqCo9M82QXJk8cJ1tzggCvBYnL9yb15cjFXsLttFCihXcU8zHbpmkTHR7GGXjr",
  "key2": "3DjpFf34gqkwzAY6LLoPtA6u2M6pmEvXXNZaEtgXbEVQAHySsg2j52pJG8mRAGCc1aVzMhw1K2ktVab5VZmcPKEn",
  "key3": "3KCXp7Xrq3kYJmFMgXMf3R2tZBhknm78QgTHnq3gay8JNiYHbpYwDm8kLUSXxcHQDb7HoFtf7YpKHCpFFmXYzwa7",
  "key4": "4UP78RjEmN8LYsmQ5Ttty4tCJVu9SbV8VqTdhPEEziE5E8mVBX1Q3vdkQdaQk89sECrqUkAJTpSDJNY4eBwKE8cG",
  "key5": "KAGcVoi3Fpv1WjaQZg3dCunjuiKRA1ZpcBR669oL2hzqDYWDUnjMZvcAtmf256kqijkMttNHrwTiU62hwL5tcoK",
  "key6": "5Ai3rSEkPY9GvJhYZ6NnjNTpnezQmSyXja3dhDBREwvw1uThaYcmvfm8wmbqbjda6GxcKnKXFSKdobvus8rV7qHN",
  "key7": "3HhFM1HNx5wtH4k2YG2n2Brn6Uiu8o8XAsHa6gEkVrzrQQPoRsG7z6f7V3zGVR8XZaBhEDjWSEeUNowdkdyuePCj",
  "key8": "5oSCiboy8buy9NKZy55FW6BNQhuB3uFQArybU9mJ3oyZY4rvX6iTLg3mjR5oYrW1XdwJfb9x28Xu7QjDrvHTZ31W",
  "key9": "3KUK8zPjnULwMCpE5KmaepGoVtNZpdgbpopArBamunepgXTuisP1DPmz2ya6ktNdJVs1KxyVc6JDL21DTfYLpbM9",
  "key10": "2WtE24HUCdKUop4TQsjtZYB69ZuMAnkoFVApAiveawMmhVi5yvt765URpCCHwLAANgfS2qah438X4inMdKmny5hn",
  "key11": "2pS3acaYVFFkhHyGXVq1XnGP7RnwZA9kvhtsYnQqRcJyST3WZso1eRQEbDV3VroXBu6z51ZZfVui4Gmv44oauNRf",
  "key12": "5p9BxGy1Zq5jGUu7tDiYskGuekoGRQ6MxeeonJWa6R43P5m8YMGnKqm6ETCGcBD9aThcpfqrJZ1KGoPhc66bryz2",
  "key13": "MoASnwJdgZEPicCw1yz9ZC34znkihqd5zQRBeBof9W8GDExvWVYHuowSP5xwg4qKTmxe4m5aXCJBZ7HHi3sdCdK",
  "key14": "4fiLwUHXBKip4RdWMmi2s6osFgkeWjZh44xV31K1XrWVuv9Fj6cr6cPBuJrQ8jFHmjH8iYFDNYwZ1CtcAP8mi2Pd",
  "key15": "3sBFWHywVGf144xTX7Fv9Q7rXkgw7N4LpTNKGx1wEVzMHxXz3mqUwp3MgfB97zF8Q7PBdb7EKZMLESjWEG5uC7x5",
  "key16": "3CNmsStHaMxCFc8quztRaJkDgCpehbFTnvqXMDwTvtL8EiCRi5upxTGKyEWYQut2Ahrbvbi6etE5v6xHYpJAJBH",
  "key17": "3sLdeGwwtDGAxoP3rtVvM1eBiRRxfgvMtqenRuMoFid1P2WEjuhcTTTAB1hvrPoBEPtTea47WfFaqg3WPD64kqaM",
  "key18": "2CbuSm15vATbTY19cnU1yt9U5QpeEUUMnb6M6aAoD9BDQsayZgSFBz1AyR1ffHLsQDGpgYQqn92HLiFZSZpTxPCq",
  "key19": "5UyQJNE5vMkRbZ4Hs7zgvxJZLwtScZZS7GYGGXV7pFoEr9D2GeCX3BdxofRcvCn6wFJ3ZSLWN6ASXZAiQYbT4gLW",
  "key20": "3SGVMJaqzvQm98czypbcz2PohyG8T4ASUguCHSXR4DtrKv4X9rYfTpgH2uLcMgRahbpWPm8JNtinSKYg9as7aWjz",
  "key21": "24jdJxWLLhd9ocepVsJhVuj4iv7UwughQbsNe39cxsa4mExiYo5rWjJpNHUhbFVqafakM5vksT2UPoqFpSVHPk8U",
  "key22": "yXwKFYAHMsMUXiF9DQBwhqMnokE75ManMDN3FdzF2zSnQVn3Lio3oXwTbhHGxyFiAmTh2xhQ2nTt6dYrKh6DqMS",
  "key23": "42xDe1NKL8ui3prGV33Gutuk9jCzMrTqpec8yc9GWyeLM6bgu6RcWYW68DNK5VckBH6wN3oSv1S4fMDpyLLNpsGg",
  "key24": "4pvZ1Gbu1jSzNd57XjuKZD3J554rURsPXsu2CkKHqQe3WemJygJrv2w1Qzt8J5ez6wHALegZtJzhbuegPRy9svbw",
  "key25": "hHX2Mpgmgo38bigxzU3Rnzmq5NWYLRw91RshpbiKuhbDdT1sc3RpgzYpaN9MmYzppWW3UdtRoaPgfGACy5vPyt6",
  "key26": "54BDLjyiaiWpk4QjCUohTPDdexD7scqMB7thgFis8MjQppNhRFvAEg7C1i5tR4fH7zZGRufYVA3UYUnviiCqEaTS",
  "key27": "3EESVrhi9vrZ4zfmZXZM5LBCKHZS7sgkWDJim4eGjkHL1i6Zdo6RkCcRLYgoL1gPjdH2HQJc21ZqjkwMeWSU6dkr",
  "key28": "4BsGX8x16LUs8zyjSwvHAEvxkEr7VKNS8qnb5gNQzgpcbaQ1P5wT6avAnjXr5JkSKjAAFc198dnZvGEPTSamWUFw",
  "key29": "5C3uuMpVzVydMs7ZTgoDiQqnzY955xG23Q6FSVvjGiAf1RpreBg9aseA1uXpRy9Mhb8PWX4MfArdb4FdsCgZk2Gy",
  "key30": "6H4ZDcapyJDMVk53uEsArkYwHcAdswqppQJDxW9KiyPYErP7ARxAE8J97C3QAcLiEYwu6natBbQW6wekyeqm2Qx"
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
