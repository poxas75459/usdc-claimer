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
    "51HZ37BAysdvwh6RpgY6rYipuhV8swxuuDXfRhgiq9hXWMwG8cye6Ps2oEtLMygkAJzrhzU3rA9k7cxSsbK7NXwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBSvpGoaLEnGXJz8yZwK8HWrRL69GzxG8kWjHHqottXEU6wgpe144Rv9wYHVHTR5zePzYz497RwGQ7BB71LUpwS",
  "key1": "h8xiZtPSVzP2tHy6XFrPVawhs8ZkeEAWJf1oeC5RivXyddL4qmCSJDbqudmEC6Kd6SEWkAQmmB8sQno9WJsXEUH",
  "key2": "4ScBRWuDLhQXpRXd292NbjBZPAUFQmviBPqT1KoaBmk1sychYahSk86GJdNXhbG7oFpb1nUuF4HdPaWixT1WTJPz",
  "key3": "2mqSN6goniKpAcMZx49CqQyH7D3QDzF3ehmPR9Pm7mmriD73pT9rLhocTMdYMhgkDMu3Z7sCkPfE8fnyRcZvYkWU",
  "key4": "4fqWnYfFRuia2MSWGp9GNjgDccd2JFbVZvj5fp1Gx5EQafsL6WZmgUz1WWUQnTfmKgrKAL8cRbMu386URH4LVFaF",
  "key5": "geGCH2tLuiUsfS6stDUWeyS7LN1xwFPDSdtvgps3DJAq8VHaG3TmoGggGoDdfMtFNqW2CGMQe8aeGfFjdpd47oj",
  "key6": "5EAw3znbpkUigxDARLQgJEKmthbv4kygqqShd1gn8cQVtRUwsFBHsviKhs6qarpj8meFRKf2KBGjGNKWm8ed8soF",
  "key7": "SvbsLzR3nNHWKLy115cbob7QfoEmfdThmdL2TGVUk3Wuu4yKj4sxL7nEY9LgsYJqpicQ1NdaH1FRbtPrF5Vxg2f",
  "key8": "j87yocuizNxpcib5nZY6Dz9E6uF53qu1iSVduYTJXvey7tGULgUaNiM6wAtmnYvYK8138zcpSDyZ7a9JFk2bvUT",
  "key9": "N2eeMrtN3riWFzNxpTZc3JdE2zzQerqdmXXCZPaLrdzFWhsywXqXFZYZuAGPQLxFX8c8zZMg34qJTSBfnKCMdbz",
  "key10": "XjR6UkWrv7BXSB7AsNb95iY4y1MiupxHfPXWgY3VhrnwNpea1PMpu6jmAFhZ3sPC6wdKbypCBpihqTgHVV2dHGC",
  "key11": "5VQfy67YnPrBeapD1SLcreXhoSDd9c8Hcpmtm8vrZpvV3ZD5nwD8oXykcKmXKtUrV3mTFfRXLc73mcn3wUk6N3rq",
  "key12": "2QaxDfTrkcrNthB4coPbs4eWeVxicBkwdoGpPUortQN14B9nr4xjYDQQUGg2yBHoD46Y19FwPSMF6vtRtrPhSXcP",
  "key13": "CekVAL1e8AsU1tpvKzgyAMjk4vM4R6Rvtmz3xmorwBkcy4pcFpw4Yyoioh1afYzDSDz9e9Pvom2CzzFHqCYPrRV",
  "key14": "323q9SYUuuLcif2szKk42pBuDo6w8uASkn6SpFVhxMZLDQvZ8d78Bwa5QdowHugoyPrqgyijHgtoAvXCoPcXUkP1",
  "key15": "3GwofjrVY7uwzo7wvBWoxsemHUQdgtTTqkeZRR9B94b3iDAuBPhhFXSDMeWeUbFKjbVL7RECZkxh4F1LuDngZ1dX",
  "key16": "4dvpZLeFPHjmapz1WC77vAyACG9mzeV5usDqXpgyYcase1mPiH8uZjAuCLZAkyDxzbQ3njwv12V7Xf2bYJJGwEfX",
  "key17": "5WWcc4upRqxT4qfAXMyhQmVi63MJ7q8X8KAb764LpRv8LqKfWQA5NXZNZQJc7VAeFjfsmocQnvp9iNLpn8e3eAJE",
  "key18": "5Ed5NveRthDKguUogDvtFbFn1jTibfmj3hUuhfARYTwunk4JdFRYfXeVtYy4PfSicdpzy52wWzXhWX5cV8tT4w8p",
  "key19": "47TCt1q2owgsstRKhbD9Gak2PARbkLATpVdWGRexcsgsFFB1ef91FTdKXFchgzmz2p4Fsm83e8mQTugphFAcPFdD",
  "key20": "43J8BzJ5Lt7anrocVSdJ9WKNNVahZvA4odRxsg7JFcvngNxfqfvdExPF4EemTzHDbNii8BRiE1oEERmL22cQeDNG",
  "key21": "2iMYPKigvT1ddT7CexSjQt92hpj5dfXYdeYrkR8Diw8hP7eP1PBYNUx4XNit8nLTA8HYqnwGeU7LTscJdCbbzafY",
  "key22": "5uPmSKAWXAR9zipSYX49mUyfN74Jocd7xu5nt1qphfTwpachHTPqQRkEQkubMK2kDyaxgJSQF1XRsnsgHg18B5Bw",
  "key23": "2B2wTMx4NX6wyZoAT6N7RMFtUpkaNaUZN4ouoo4DqpeWbhQyqa8AwZTEJmi1rF77KvHsWrLaZ33Z44TztvvUCerf",
  "key24": "4FFn3KEb9vWizuseD5ByLiEfnNGTGVT9QoKntRz1RD5iBsva4yxiaXbWRqYvArMaCAEsX5bWsDJ9PJT5L6j5a8Nw",
  "key25": "2Lk9mwFareiEKdjysAjpF2fbRKGXYPNXXUvhyFt3w7LwmiXoRniacbFHxz4kcAibfWySPchkBxYeQXSv69CBqHoj",
  "key26": "5sbCf58VXXS4Jd8HEJ8doCK35soYFSAATTawyooK2wAwnCFAFqeoPY6GxoWb8GpNgnoqTqPTRrtZYiPVdXTqsLGh",
  "key27": "5VCs2qstiM3iM8BoW97dUq9RbdS2eonu5KWW22JHqK1qxF1vqTbHV3EtsFSqDeTyJJfETwVEocBgZ52QR39PuPmr",
  "key28": "4LPCAqpzezhRpdCT8MNS76Cg9c784UrQ2HbdHE7yx8st3LWhv7HADKaVau1GayMvYCGcA8bVmVWMmhdP6fUE4HfH",
  "key29": "aH231TGW3xejRoY8GGsDK7VmPA6v47RbeZV491cnhSyh2YDnYg32h6YMNq88jkyBiqYmX7pTNq1oVLdDjyLMjA5"
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
