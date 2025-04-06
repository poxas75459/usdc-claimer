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
    "5MWn96JV6NA6Fn6FcvxyTm9iRSM9ody6LNKm4vX1FrWr5x46WXuTciJduvjTRLBjUhDq7t6L71yFbxsn7LaTw7Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uscnGUvHbqmV1r7XNeTB3J2ddBETxRFuezMMz753S3q9GFk48kP2UHkRUge8HfJvJKzWGixWcbZGtJURVJUx7Zp",
  "key1": "LtzAe5RRbAtd7mZzseuJH9tAE46wukighmCb8CsRUDgP5znmbwyeEr5v9PpzZCbb7XcJuPUZfmztJXHxKwDb9K8",
  "key2": "4z6P1H2wcgK1coa4BzmwFQCWv2ciafZ36PbEYMJukZHR3rVbDjGo4tmnRJa3A1WN1v4fTtdPBfUmSD4HbxhEFW5p",
  "key3": "mJ9frvQC7sxdZibRq2vxLDxWZjqqLZtSpva228mN5VtiCuX6uaLnLmpe2ikW6NTbYmd43DH9aqHaWyS8nfH1buC",
  "key4": "4JF7MKWinm3yjpFWwwQBveKVsqYD95Y8vWew6pPmvcHQCD1uvJiS7kYaLX5H9wfJ6FYneDWW3dvXfCkj9DBGE7gz",
  "key5": "Jj1VjpsyvpMrE4e6ZDDUfuqxxdd5GuG7VTYpowiyH1amk6Agn5bwtJbqYTdqTMeGXKV4gmD4BBgFuh8d6Srx8Wb",
  "key6": "34KfEke6s3BdKwsPR6dhkQ1bhjqF2S1P8TFtoscufAyVvpXKjf35nVxsraAchwftTffHSFkRbFSeQ9eZfZ7jfSQ5",
  "key7": "5hdDHx3QUjnSQ2JdDKJMgqRNKo3kt31RSvkLLK2NMVq4CPn4RhrNHTksLpYWg2aw6YgYZx4ZYXRa7LedkodHcAdJ",
  "key8": "5ZiG9FDTPBfwu2r66vrigoHKv8uTnb6aVDJVc8aGqYQV4rwuLpUxM6ACuVfCfHedEYowG1bRTQH218fc2gjWGxXE",
  "key9": "488Cyy2vWnERRUjCQJt8QtNAVQRm4jLck86LwL6AaosswKx2cXGCCSoE6hkyPFF5SZELWvakYgmvHNUq4Eyrbyqi",
  "key10": "2xRppnPLeZ7fK2ou137WQPF8MFp9nXugnFtEqa6VQruRFDJj3fBviCur8AcAhVSHdn5R2v6dMPycZJA5t1xFWVeC",
  "key11": "9nUnZyrRfBjykVGwG5QJBkjCFEXZMX3TfjcAa6HJzaTUcd52HjYEtBfQbKkzjMtAtBnqHwwBmpoMM2Q8Hj29eoe",
  "key12": "tN5a2Herbb1JpXb2ixgrZDqh53E6R7P4qrhz8hNdvfF42WmKAUji3NgfhrCgHzSn4nirG7h3VTbvWYFv87nL2nA",
  "key13": "2QHA5jbf8mAjc47VP9Wh67kgquE6kuTgEzGRCrvQUpCiztRp359p8s4LzaAM9QTT1xt1F5GCeBaL92Lc2jK4wAZh",
  "key14": "5z3p9wY8q8fr4y86rw25YcaEDuKpZBQpkN26UA7XiqyRdCVtEYJvqSTBeaTJhns1wtqmDyiWFd1AmCv1FPD79w7d",
  "key15": "537Cwu9nwa9xjJLcEYCEmSmQEjWmXPAXbL5xG8MPrJEtcLFzdm4vfatd6o9vLp6AidZaXUBS1PmKUhWJMeyWTpnQ",
  "key16": "3neX6PicAqesvGSu1kJddBRLrStCt8B5tiV4JuJDEZUJkAqDtyF7o6hCsbEuWu5evaWRLZVw9mQL9NgHzmkKEPwt",
  "key17": "2dECHvMToCmyx5FA6Ke7WK571ZZ5v9WFsDoFTmWVxW4mEQKLfqJcYsCN8VcP6QtDobw1QtKSr9PTXC1JUj9GbXJk",
  "key18": "5ndysS8fwWWggqbMaxZWdnrTD6sYtq9eDaNTueu4aeKaNvVCRR5kGYKpmq54X6gCydvDkf8i1NbYv19LdJERaV4P",
  "key19": "C2LykbZjgUnidna48ArejR2j7L8CjuiDzd9tVBdj6rjrtxMCKPuy7TEpYSjFJLmi5BJ4CrYxYV5ki2rNudzjw6G",
  "key20": "VSZJ2H8nJc2sksMSHfn7d4pHvKgkNyu7SZemh8F8ujpFhh3qWQrDKwAURCoM7oRSEj8he8mztxgPnrxbaYZbQyg",
  "key21": "4YyAUCTKXuKgXHiYskVAdZQqeco9kvT8FUjZzJ7WK52Gcrez3ggoKH18ZvRr3h9K3NVigC7K8ARQUAb6KQTBrPYR",
  "key22": "wqGcShMfHtXEt4LhD26MA5q4Vx8umHBsNnYP3e2i8ecHaCcpYGtPAHX9ogEg5znN8xJ4YMTeKR4NaT3gx7xjLaU",
  "key23": "2e4q3NgbBM5ES22jKiis2VHKDymPdvP9cdP6M1VcyZGwsW1TboSmYDjQq1ajyTyub8GG4YR5LPJCcFhaTC7xDkJ1",
  "key24": "5wwicJJr9Hs3CbRzvydELuyNEGHuHT5X5Zz5nuuQdte92C7mTdRNXoeDCTWAyjMpFArTuiwhVqGdN8Xc8Fb4nAZ3",
  "key25": "4XFTomMhArysG1mdnX8v6jnmchenDwjYLKBb3g36hNQw2Ud528zsYj4oZUoQWHvtavgPovacMcEaPUthQtdg6hea",
  "key26": "3mJcn7fvnYL8gcxqwJ9DGfr4gwWzkFYKfWP9SNpgmmcSJEeFenhhtY1Tpf8PuZeKSekr8QPDv6uomdWue4xRQBGJ",
  "key27": "PPMJUyAqGkEEJAjMyd85pcW8NGecbyZyPycWLahX2XuCkAxQ1Q1V3Cc2SfgH5xpTitAGRiiPN2WdNQ1dvQSyMbA"
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
