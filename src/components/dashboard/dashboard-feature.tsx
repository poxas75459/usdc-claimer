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
    "HM7e4FL1Pg3MRweahTpEd1r6xVjzNUHrwosmTL4eHWR6QZ5thuv4kGABJxkvvuCGaTUaR9pGeMwhFHT8x1irfR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GhUsN5ssqKXXzomZiSYYXbbVSrh2R7M9mFgj5BU6ApaHZFjRYg8FuDxK9K2cnaFmEspkKSrLj7fsRuFSLyxwtGx",
  "key1": "4smDLU7APjCvnsZSjsx2UgSkAvF48srm1Xy7RD4gdsLekKVkR5VAQ5MCoXWeKqZJJ7D923kuaYKvUxiQATWEwp1B",
  "key2": "3c2tJ9NA1ZboN6gB5kp57Q2MDbp2uxMfBKYMxLNUqjvpCiwJxLzhuB4uEKyKjsZZseY7xzgns3A2erU1uRp871Jr",
  "key3": "cAch5fJybzBJqKMsMen8c4rudKDdawSiZgfmHs6DhswZHgZFayHLAEX6Hxo7s97Su3ujmsUDR5ZvRK8BvGhssUw",
  "key4": "5VhJPwFVN5PFrdHeep7ZQZ65UYawykoQKf7EST1RzzjCSam42gdJxHaZcoi5hKNnMsufA2qLzzPS7T1N7hBK2omp",
  "key5": "3Bndb7UpdDfjQpgBxVyNVm3R6zs7cQNnbxxgviVe9BP7dMdRmJ2rsgtquCshkXtUt53TxdXxXdpUHa21CQQmGvTR",
  "key6": "kSmw9QQ84W53njmJZW5zJM8MKQML2x9o9faYr1YY1GpUUgKxcfAUrc8TcvHZKWa66xEbNBUinbPg2vyKXzQHXwt",
  "key7": "3gSK7UTnGJWxGQxxzkZpiJZTHJPqCRUHTXhfkV1rbhBJTeyRYTujnsbdZd3J4rRj7sL8MEz8mJch8RhDuWwVo9pd",
  "key8": "4N1VWT2BdwFqRoTmLPDcRNYQJwZ8UK5S9NH9fHVJEYCTVCG1awyGraMWgHnwvof6uvF7zbqVyYW6wvnMZMtfhRNZ",
  "key9": "44Lnzf6oRuQfougiagz6gq1yyyMPfcGv5hexiceQHS4ByymBNmM28XMhbjopa2kDrFbDWeJRneyKTDWezCtAHANA",
  "key10": "5eCUVv1fhgEwB8jPQy8kuAmAoKHP4VpRkcrYW8ox6iY8Gjgs9j64z31aSZNDwrBnWDw7FPFqDgpzKnJnjxveCJ73",
  "key11": "2dfUo4qFDBCHrQ37c8wBv8n63nZoQEgJnk69SNLJkGzJV6xbQ9LDhuCDXCqBxxjfL7AqyLHmdBWEutEcZTEdnHMx",
  "key12": "XANWD8Z1bCebJcR3AR1M1x5yBSJJfRizWQqQPzeBZ5SYcCBAAZfSpTJpqbnauxR6LV8riiBDDuYsEyd38Gi7yhm",
  "key13": "67e4wmAwMNBVyXYVBPxmh1Rqb6pwENEkRAm3QKbx7hKSrZqhxUnpbtqzcZu1XFsSLCswjBoVrRoiHumfuL8gdquQ",
  "key14": "4iYi9bQDYBPfdf6zi65vJbESBcRWsayN5jPttCwBvUMtYkRzo6VqCVPzu6zZZtZgk4WPwmAo6vdnBMXKV32BG91a",
  "key15": "2G9wzfAYXDQx2BMJNQf2gFEuBZMyd3AhzSxBGDzrHzzufseASmcXCPaAcz1p4CtitYjBHH1j2hECS2FoRrfqh7Yv",
  "key16": "KJXJMdDrjty9FKgCUaeBYo2G8arEdh7P891HmowgRNaEuEYyYG6ikerQTxAZnPRsoksDWWt2owyAFeaRMdtWNjG",
  "key17": "NX2nGmsQrGcX7RrkbJ5Q3A2WC6jVjz2VBv25zwVfsRoTLQrJUkjpwxxNyk6Nv83QjEYhTPaxnE7f5JwG7NFvFeb",
  "key18": "MwDCY2sgZtgCFZBpFTqzv5TTVjhUY7tkLVXWbmaRJnmWJSkzJEcGG3sa1WRUdD2jtQYYDTY6EeWVizojqgkaty9",
  "key19": "3CTCbQdAd8LMdCwYxuEQkyKGzr2GBtocMWKCfiXEaecGHEhdqxEu6XuD5VZovTmh1FtXmpxf1Vc24jAsZG3A2x9z",
  "key20": "4UGKHwERz21yje8Li9bmw6QGvk9xotW7XYkB8jQmkRE6AthEy4zVC1xH1zYqEgyYiVNUx1XdLcpRVQap38XEB8m1",
  "key21": "wBmwmxe2BYkH8vRoGib6nDLzzZMLARZujML272qLsaPRtQQDDKSJvcT6U2B4TnEDzUzLCqcxfJxtDMpjRf7phuY",
  "key22": "5SN5Q9YoiQLsgerSQtGAg3zoiCEw7CET5BxGuaDEuj8vZMdTJt7QzSgBeNNEjE8T6p4ExZTd1VaYWdFSEcHnSjy4",
  "key23": "CTGViiZUam3cwtyXkRdrMHAbK4VSnBEN5WXrGnfVbsHUvtRHA6FAFnEHQF1UtwH8tqi1YwWY9RTjn7mEQAM88Qt",
  "key24": "2s2W6zjUSzqGY2KVHpVL9BsdLQoEotHHue5Y8pGwNi66tkeRpqajHeycP3AUSEVUZH7GvG3iRrPrdM7ideUHt9Yk",
  "key25": "5oThLXjLHHt9aSVbehkNFokLr1GLn6RuXo5Ejr828ExFGK9EsYJFeqF4HTLBZoSuY1hUGjKJPkpoKpZNoe6BPB3s",
  "key26": "3gZEfhSnsBLwad1f95QuUdG4SAjehC5ncCiPMjeybM1oNPiue2PAj25uGHP86kwg61BsJfofKm8TSUJzfEK39uyk",
  "key27": "2nS5mWynsDf535mfp6ACbvkmxXDkCX6jzN2tJtAxrrPDYHuSuxsfMpGFHTqN7sbZQsbSjoNu9nr8SdTcSYdgCume",
  "key28": "ff846EzGUfRc2DWD1KLK1UbfTaL29PGaVDCeXipVwmDDVxFfkwoYYz48xBNpkRSWk568VbcgCNFmeoifQmMCAiC",
  "key29": "62X1UWuMZtVuVsp8Ho53bJTxdkdw4DajZkZtNTd6qQQJxzDekmLDt3N41Q114wJYyF2JTdH5HoJM4VicDmUW886k",
  "key30": "35SXqtYwUxJdFgFg7M4DhxBTELVxV7qDVs7emJiaYd2uqBKtVXa6kPyttF8xm4LcM2spbcarKwgF1D6RQvZNR8KZ",
  "key31": "5v2s41ELrQpSdUw8cgPne3aZ4WZjXRmmx6Z8FfTSoGPR9mujzTMSbEtDFC46nrDm7ZKYsauo2BqZhDJ7xaSWFDMD"
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
