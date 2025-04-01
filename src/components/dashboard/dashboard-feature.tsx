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
    "2NTm3HXfK3kw9SnjYi8BjGqiUTiUJAKpkhAdWms2RDsbrjNBA1PBtUPxjpipG8XxpKN2kyBnWVZZ73biAn3j6EyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1Uqh3NAM67vbSMnscY1qEEiYefmHLW2ynjrG2PJHytbQKeroMvbyRh4ngffN3MFtdot3uvBy8aun55VazsptHu",
  "key1": "44pCNc16pG7mauKLG4r2W9g6vUcT7ps7ouyFCDmg3E2K5oZUEsUiTmmrYgF7hUU5xnQiQFyjL3esrtZwXRSgVove",
  "key2": "2MJCiZE58ReBNGyN3mFx41eYwzWBzfgHHdoMVjVBtVwouZVyCNpMsAxE4q6EXXkWpDrVjRU3nCbGXfHSozbFFqez",
  "key3": "3SzwQk7wdXYuZUqsAq9qUbs5Q1NQvWB27ivrBAt27nz1DYZUH4gk3oW1TSQvGBgbJjCYNb1FY9fvK61r38yZt9Yj",
  "key4": "4rWZFeqj4NH5GB91C7o43966nSZeHMBDaarC7geKwEzBiF8pTBcrz1nz3pdtXjJey1RYn6VmvzWRy9ZcMCmu1gib",
  "key5": "2aTj5psxTd6BfgcnPiS2HoadNoa8DuKJ8GZtksXDyujnBLFxqVKkKyzbz5nM1UA5CkTPpzcSrjsf18cUydXV4Bih",
  "key6": "661DtwicFcuDVrVV6d4WZ5cxRCCTQQ19YWVfCFyEs1N5Nfe227Na1Ct7bT3impbmcUoDgttNK8sKbRd4DZ421MyW",
  "key7": "Ppsm7voeU4BZoFJdURkcH4DZFqhD2ggP8dhVVGJjKjTD8WRHAHMK9fb58hUtmsqRxBQsXL7xJGV9ZCLkwDkeC5r",
  "key8": "2uma11WaQHB1RyeufijRKBnAmMV8YhxMtbCKyDBYCkLjqERxQgZdbFBR7M6K8ZWUzBMahxBbFE4t4cf6ySHrYmza",
  "key9": "4gtDvRZ1NLiArmxoRwASX5Ttt1sLZiLrtZ8HDpcVvf5RmWMXgTN2Dj5un4V5kRM8TtPKeHrpjRcYxDrXCEwruXHg",
  "key10": "4mGuGkGPdtMr9SRUanZQAbqgFauuVD2rvgiMs1UpcaZWoDKS7LefzwatqfDrxfjDy4gKb4rnfNhHjiY5YmnvJzjk",
  "key11": "56Gw1XFXAhYwjkNYtAjYjFeZESn15VzzbQgkLnQM8oPBPUhbUmMFhihBFLG8vaN3WhczxkiJo23EdJDGsPPUknDk",
  "key12": "4ap9SbZHU8GhBggxXEAwZE3K15K9XKfCAmfxvpCRRheRq6BpvD8ipvC47cfgRJr2fpH1Dwq4z2LC2HgZnvka52zt",
  "key13": "3u4NX8KDce4u4b7LL9LpGQvsiZz6ss4EmoshfV6VDxFYgs5N7YXMLdqF19tvHF5msGXvLqXtBamYahF9xT4vXZ8H",
  "key14": "5DNiQcs85qyRgBehsA4j5Prti4DUC1ec5GX2EyGKdZD3fvE4VLyDAQFPBgpjFZfcW3HG3jWcsBkmdJMHVGoTMkWZ",
  "key15": "3wibmWg95agJqA3qFPKHBQBJbZ43VpRvp4FCjtBw2EgRTNUEZxv3aMcbzEBRFtfcVxp6PHNDpdPz2Ht4ozXxJqUa",
  "key16": "ujdJao7rjJKFpGZadUFVrhWt4EvJX2KaMtSbqiShkWgjD7KFLCWjKxvti4DfDsN4ZsSqAZuiKk4LTonNrCyPdE3",
  "key17": "44aSRHELJt7XVkYuzT5ASnLbPrWU6VS2dMSCQ53yewamHvNwDmjuMsBtaE4XSPoBTye4uvAujQvFGAnt1RHztd7b",
  "key18": "JY8fyYEY7aPoGkL1qjbVbCre8t8EEkA1RK4fweKr8aakavGgz2hVbTvPVnDXRSBAVRfeg5FLCuKAeurBKtRuFzB",
  "key19": "5ykcMDQgAZRKNn2F56jaccWqPGy8eonAbBkKttpQ71SPVBqXQjtjJoypNpwbtNRjV9waE5bQ2GUo68wCi9Z3LGhw",
  "key20": "5eJ2ohoboRzm9FJPxL2NcjBQ25ig44B4LRFn5abmQ2Yma84bgd66VQKPi7oiNj5LsYyAPdcshRwTLZ7emNSmMWQd",
  "key21": "mUWwPoXn3Fzhx5eR5prDAbgcfx5JmPg5fUtotBqoY9R23hhE584wUebEw2szYeG3cJGeQDgFyUsyeVEAgzkApqZ",
  "key22": "3sFVUJFWiFrJrkAAQwDMvGC3AJv5ABoiU6qMcz8px7vnc2R4ifAJQPSjKLyUHZPu6WgWFCzR1rGnKpcCCnbTnH1q",
  "key23": "2RvjFwYcPDS1i47K3kf5ULiBWtV3ANC7cAvXeQSbkS5q7AZY8ueGXkRpKjV7C7pq77i73W7UD7hv93UGRVrefDka",
  "key24": "5FY3h9QJsqRAHsvQFmfaCZdWRW7rGrgD2b3FTmiV3YH7aSH278RHq1LUr26L7e4Ma727tK7JRpqWDdADP1Bs9U8S",
  "key25": "43xXQSrUXRz3sDhJptbsHgi14pHmhbXz6ymW1S9bQNG5mf17HicKgiSSA2PsCvr1xPWEsd8v1bZZqBZSsJWfRy9m",
  "key26": "JjSFRbrYGarEu4cJxo5xAQSc4STFRh3XL9RVDnnyPrfu2izGZawn9HGn7rBBebFoCr7a8N79yUotKbMDa3n2buN",
  "key27": "4D129pAy1tzyrDuizC2DtgZL4LeTFah7GK7v7217jpL4aTw9ZdSPSixv2QovTBhYVYXQ2Poa6ep4yg19PPULsdGw",
  "key28": "4pyZw9STo5GZ334v4PeX84FvM1pUQU8CyWPAu3Z4erMF532FfXUE32WsCKataS9UxAi8cQiFbMAgPSNnU6dQwzfV",
  "key29": "5SxyF9VUrQXjKMikqroKXK2J53aNhKnCuwcpuT3821VSjXjW6oDZW6St37j3nicG5T5ribZxVTiLjgRDB1FPZsFG"
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
