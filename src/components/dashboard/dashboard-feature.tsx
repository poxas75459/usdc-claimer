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
    "U9AhL4QDQFNmxtNobCdnF7kNkphZPzxKQUHbmG2bxZcAcXpZN8TPHbUpr2qms1gvrdMHJ3QibAfxEAs7r8nvYuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXkgoHj9E4NKagCEnxQ9ARNyuF3Q6rDR7PbAuFjZix5bR79sU7XTkp9fdjLxaSMBTMKhAJpFQQcdrXpiCzHGQLd",
  "key1": "bnhNrRjT87G8HHZTZ4DYKE7hvHdNMxGgFL12qApd8Z4dRsxSa3M4CLj95CozmLHw23uUCmY9Lsm3hFjfVr3K7WE",
  "key2": "2usbTf1PcpQQGtqD2w7myLLekpSQ9UifgYV2cAnfFL7CjUabXnaZBiCHg2tKyp1nF4BWawdRVDza7hFxEdTkJdTf",
  "key3": "SogWm9HSkiLD38aVDPYeyK7WUvRze8uBjsADYf7ZF92dcuKJBRGvK1zPfnNdrdJKSzkPXcskQL9SHrgKzKKeg1N",
  "key4": "4QmqZ6FzTFbtoQRgq9xy2ts52PRLfjp9m1dVJcWBmxwMCE8DbPmYaDBJLmvkX2YhEPuHbFaMbCp5xqwGjrxdSZY1",
  "key5": "2SnyLnWghgczJfBkPz4fuVq26qLWMnJxphE1PnggfAYNkTjyTyLM2Z2eYBVAh5xydiWxyxfuVkJDZNwUutdD9isH",
  "key6": "2iGzjfdFk7CSvHsao5vtSAcWsAPQncy4aWm8Do1HXLqTsbnG3jALAfjUGFzEqzvicpwQbeSHRUpDAwDknESHYvFT",
  "key7": "4ieuAA2b54a38EsFk9Nm6gV7jebnxugGhCE6cHXJqretWbqyBq4Pd1xjQxnrjUx9M2a1qBQT941uWPVBngABHa3J",
  "key8": "fqNajUfG5Rfu7SEJi5WLAiAasCcYXDJzbRUJTC8WJZUbu4HGNk3uLQAq8z4Ys7RwAiCzmG5iSnD3Q6Tr9Wgr2WJ",
  "key9": "44B9HjMsjXXZtJ4YUNqjbXR8Yduj33VA7pF2cnd1cqwXWCSiu78DUaQPuKcZME1XDjXZBsbajS33gTGyouRpAdcv",
  "key10": "4VG9M9XDT6gsGdaJ5G6eLFQAGVuyxtoP26fFZpD62F4dK1hqWbLDGfB8gLbQEBGneCHde9YSYehDtj7fP4z5MFCT",
  "key11": "2z6c6xJ8r4v5m19PgUXMz2mcJbfnYwe4ybgAsA1PU2QJLTzon12A1bUCznFG2MCP2vjDFGJtTJFp4G6Y72PzyehP",
  "key12": "5i8RGmrtN3hQJDbifrNDL2gtH6ubRL5Dpx6xvwrHgQygjbHi4K9fJ5UHNp3zXFDnb3d7MbDCu3hNQhjW2cfCKHaV",
  "key13": "56pCiEf1XhW238kppFmZYUjuvjv46AvTHSoU5bNyVqqhEtMc8TDUVaNX5NccnWeaZdMEU7JNMvjRXT5RAkvCZYjn",
  "key14": "5DxgTgFs8X4KRJHrEGbp6m6RU4awBAxhRto3bkVb8oCgjqaGRgtLRzDqJwrJKZF4koWrTEdgw2V6JRGi8oJkV8QH",
  "key15": "4FyqZVDMHHMrpBZhfhaR6R9Y3jFiLKhVwnXoSNC33r21wBLcstzvsEgpG9iRiJRt1Yj8oG7JWSFT4gUCecdFXU63",
  "key16": "2EjtyAszt1Zh4g6cs8KuHMQnmTtMvY51HFndapJmemivWaqWA8sV7TMgyprdYTzpyzqyaRisijTLhB1a5ZTqTBfw",
  "key17": "5wNwkw4N6HHsXG9f22CPMoq3coYXPB3f6HPLwvmCv85W4YGj3ZPy3yjhJ4CoXQ6w7imtK1bPND5r6vpU3bycziE6",
  "key18": "45jcCaYePsBwSCYR4bP1z2GQ5658AWuuTUCTpnxQPPXPk92f7tW5adGNrcgxN8UiAr8ByizERudExjMXGw7PEysQ",
  "key19": "3gQDAyvCMkU9xK57aBTrzyGyXddX6WtXoVcw56hVBU7zH9HoHa9APvYsyeGXcEoB7B4aAYirqmPSZuM3WrsSJ8m1",
  "key20": "3H3zHp7hx3EvYnup7AmMGKnXBic3kzmVQXaVodfnRTiGnSVLZevuvAvmNzaEc3WxEbqNf1HWaAunjTUUZFen3fdQ",
  "key21": "36DrKvCwLRQhX2v9R2ob8MgcqWpeeCUbmm34wYu7zAb6PGvge5ng7BBn7wJwrSVeDW88VteKazC9wqVb1v372fpw",
  "key22": "36qZ2FvSV4AhqXJC1Ur5RTBzA2R2ABZdgXoDbDiWhuXbyDP8V5Uw5wXnL9cMXszA4NgY9wLtHBHphmF4Nax62qzd",
  "key23": "FMYgnzfALHzB3v9iW7rPZkuqo4azjwM81Pq2ibWH1N4EidKKaf6vv6nZc2GRjwSR7oHwKVuiJUUSrX1PLS37V1S",
  "key24": "4mAgS9CWLwQV3s5PeFN5voxGsQxYdFnQi3yjrstTvi9AwVJ5sSG2rP4xR62Vnh6wiVEQwkNr6X2cVmC7Kkd1PaVj",
  "key25": "5obkfzaeXidVgbYomLn1artoeyqDvc3JxFAtKKV7oEokiqF4RHgzogSJVYJ6oDcQkhthDtMkJXsttfLrnMZoBbJi",
  "key26": "28DbxNgF1bVyKZkg2S6EFwCE3fY2vWux1eeKWkriZu4R4vs8BQo23xhXivWUec2fRAt9X2gkkWPeD45wJFdNG4Ae",
  "key27": "615RiBaH5n69jGvRS8FPjAiqSYEQmTpe2dEgLNhc8gbo2BPF5G9AFebMURE5nHYsWT4NpScwDgYimdE7Zemiz1vo",
  "key28": "MtJW8cto5VKn2iUkqELqZjJYQFcWoMecpGjHKCCpkFYfNX1L3sCtEGxHmpDJLzU2V2Uq3L96UpAwScZrdVDcmdp"
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
