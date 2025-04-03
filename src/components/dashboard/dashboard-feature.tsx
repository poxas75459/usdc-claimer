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
    "h2z2zNCUWds8EegYontCLRaSLE7S6DTDi9cSfr3Jk6HQfJyMb78i2qhXiQBhM2sqDywYfgRj5XV5qrYfqeJLJst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrbPUSHt3hgDL4a1BkXhB5KukS1rE6ecYbx6U9ygaRjJfD2j3ktZfZd6fZVAPzuKdFxH2KaRCppbdqRkrwk64XZ",
  "key1": "1w1YLgWVmZqDwrE7LDt7zNPCmkqEC2mPhHqiW1suPFkrMyFSWH2d8H5dh5zFmPMR3h4wbexPyFcxw9aw44oDYTT",
  "key2": "52SM7VQ8znJS8BG6dwuXynDmoBamM6e5VmSb2b18K6djkESiX15kNVuW1G1STkyG6LxjJkGKbj8pi6ZM3AFdibcB",
  "key3": "4z2WxdRHjBgEGdEdAxuoPiQUQCaxDnSEGNLR5JjgJP6g456daEuiQbRBVCV7gdM77QZzndvHfMVt2zRxf5HcxbLe",
  "key4": "2jdRP9bgcQgn1yjX7M5QypkkLZNEGuH9DZ2E1uzfpcUfD27qTcmVBu3NfaPhNeBBQcNRBUpsndnCggmEFy9nUEcf",
  "key5": "3Eo5pfXFx9Hfx3tsgHjXPyTioSZYLR4GmVCzSxLDwz8yE7uxHFphg8Mk3yt1FF8zYm8nh4SnWRjbqZg6eaQEL3UB",
  "key6": "4vojHth39xrMDgkdnkxkgaLvWYUKmrWzJ7GiZEZrEDNP1R2BABJi9USLZFHevSCeeeZv6M815WBZhV12HsyY2NRR",
  "key7": "4KSRexbNhacmf7vZxgQJitA2eyQywHUVVtqvrvt7vxqvPfy9F3eYwYvUsyXmHMBsLcDBJxkHM522yr88kMiUb1Av",
  "key8": "44njCqRPHgZStGw5cKan92vTjvd5Hp4JzeYKnSEkK93kafPvYDc4vRCSrErLsE4TTbKBs8ymbzbreoa9N3gh1FTh",
  "key9": "3C1rrCHecU6byS8ivmnemNkWkZzyCmXpg5s7duAjNKejJnLJokdwQcmKMSib1pV6Nut7hZhTaoDCBxnxSW62m74v",
  "key10": "2DWADzR5Z5gEQzKn8YJYmcC7VYAJYow83uqXUGLzSHSDhtMH8aSwyUjqQVnUgqgqaXmyS5mVXA9LS8Atr3pZQ9JC",
  "key11": "4nKCDjbvZk8Bc1eUrxTF2xpnGRxvVN3sJ3nBfx243LE73qTWDRdvDxhZBUAS5VFZpeoubZ8F267EpfEJdzZbfgAx",
  "key12": "4H7K1q5ohWnaCuXG4gegYNjnALUQoDSWrJAJcy3E59kZV594UMZPnw74Z2SZnduoFfJC53tXU6TNVBoihn2FPSJ2",
  "key13": "2xsYwPH6CfDqzuC5yZGjPvJWTAz1juhMRRrWZRjfQWtqxjSDJdfi8QbMrFg3QwieH8RmpFGDHNMtPxZQ8ZAYn7Hx",
  "key14": "2z4y5qkzVjGKN1k2mN74XUm4spLS6fJgAHCikQvHFnU46nx6xamfbWMSJpEq6Fna7cEr5zvfZvuWDLZyzgWsgVma",
  "key15": "4TuhpcsCUMULR6zYfSAxchxTbZSvW7bXQXQqGiDtFnUYbGuoLm4ExrVcMqnvPxJE62vFuaB35e8Va2A6fUDuPYPo",
  "key16": "3aoZS9SzHPmmjFS5FGCwhoz9PHXEsBhLWUUBVZ2xdiWJ4dj3SMyibdiYxKPhMs2d7cADQkHZjrNXp93MKMajVmdc",
  "key17": "4tHKnxWTEA9k7Z2bx2tUKnSvNuWaNMqraC7zYGgpMydYHoVqADQkhjFRXwQCcQiHdB6RtnxjTc4KiY8EKWVhfB7k",
  "key18": "5AnSsPczaJAWU3BjedYRdPNT1pTf49cSaCYQjDJ4XSkodPDZ3KNemWD9Y9vEVhLKX9QVQTXZr7omqUioikpAKJ2w",
  "key19": "43PUuTweXeFPeVNdz94yXxdcA4u7oWRfs7ud7DTqPQ6zdhnbigxMf5oR44QmN1Y14BPDQsCqZDKSfKVxxKRGmgc5",
  "key20": "XgU8cQVfP1SrcYbpd8AG4ELDawaQ5GRFh5eCM3djFyWHCHo5N2mAE6hvEomxMjH7hwhqzrK61FqtxVp75scV7jk",
  "key21": "4XBwf2AxXVpxPbTFkHTePXCSoxcnfjZYgNpYKnFX6et3QcAHroJGqyYtUi7ngUCkM6uKyb4KgQz5prmSoaVnBTcQ",
  "key22": "SZeT6Wujnot9NpbcY54pNHonKze1w3errDYYBVgjbQ3TRzWk55gJAZZPZDgYNTGaoNA1sPM5exoFcPf5QXeCkpr",
  "key23": "4szeaXSxjBAEDt31LGexW8z1Xy8D1vpCVSDnDQdMmQB7Tii1VnXDzGfK7ZusMsoffWuPMGMSpx7nEUxuvCjkuFqk",
  "key24": "5A9pTqTYioGddM8QmrPz8zvSMiifeP9sD32EuTt2RqewMEWy7TwAyoPG58vQnBiXSSW7QFBKxt2VrPHZVSTKcJz9",
  "key25": "5R3CYJithERSmAy8JYFihGYk9wrUVSuuyq1fc5bA2XfBWCv56umzkknrxMgshMrh8mVhhfjYwvXa24YanrPdGTUx",
  "key26": "53W1xXcPRQeWY1PQzBT9yeKhVE8p78oxqfJJv2cAPbGkYDHCNbET1kQZhSzVacV8bJUvaA79MPWWMD83y8cBaL1V",
  "key27": "2BrNcrRXoVXhoosioK2gKaQH4UAJXiqNZy6dT6UmwWU6CZVbTBh2GgrQVKbSLNUCXwHmcSUaXSueFGjoGn998MAr",
  "key28": "5YrpFUPAgBuckikXuUf8MiF79ftBqcmqejCA6KPg9Q3DVQnjYbQ1nweDYHyx1zDnHrv2mbqsPKNSZ4a4HzbzCvGd",
  "key29": "244NbHah4viNzKsHy8UWwBTSEcsY7J9eNHJZXhBkKCZmv5rW2tFmQaLLn56HLg8311U5hFCXQgn6WjwkxkeFQrqu",
  "key30": "41mep9hmomSKDJgvuiyZGMSBrCA6q3gKj8ewST4fUAd2vdUTey4ykDvina9SxPFTZqJYjUWwVBhQ5iz6pvofLFSX",
  "key31": "gsJCLhu5DVV2mvxbvjXEGk58JmyLzdneeMxp4RwGPJbG87vVWNG73jJaAmcbq7V7Mqsp96Jc8VNHNk5gX29iDsp"
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
