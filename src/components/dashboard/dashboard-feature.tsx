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
    "2cyWugTvm6RtTNad2rpEKW9DrYaVkxgh2ZUk5a4JUZga9aTtYKiGCKXLmHb4jSvPimY5zo4SP2Hwez7gQrVvSqzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i5FkcBYbmjwwV4d6ebih97AkEtUgKda3NKpcEaJ1mXttZn6ZcfhTTMGboDfozP7m7LkUAyG45Xt7qMwcTLiEUXp",
  "key1": "3tHfveLU98z4rH5x8kYGd3BtRuWUEp1EzqSyDGfL3qGAZNX34BxLRrfdc2ccQP91KHoLh34GWM45LjVHuiDe4G29",
  "key2": "Tep6SVNbdHJZCgXE81b89QesdUa7UkkeBfimQsxSrQdLmb2qGtDsDLL7za3pmoeMdEUz7sGGwearFLyeR7cnNaW",
  "key3": "4t9JnabDKtr6g2mY7d6yN5mr2F4HSVZEyTNpDdqjy5ANAUNP5Vpm3cYwiscGiV8FCoSQGJ4rEmJh1EDRmnALPqsn",
  "key4": "4L395xUtEEQXDUrTufHynoQDz8NAVZ29pv5HN4fS14uSQm1UgCneZLEToJvTiT2c15sK3G3UzZNfPkeyyatkL8zf",
  "key5": "vm4j4twm7e4V4g7dMC4odNqTnjekcumCGKd1ijihnHTzAFuUUsSU6ydEDHXcnjWUfhjiw8koZtyA3j9c27FBR5U",
  "key6": "2z18AnTuyGFbW7894D4ywe777jWyDzV7TVZ71ZxN3Ae1Qm8Bnxit6TXYJrpqqtn2n5mqjTHg6Dz21LkSzduqbZRk",
  "key7": "S89bDffxhRAgFgWKurxfF6w13npJrYLHypCXZWYGZfkXUxtUVwXu9n5WUaFG8LbxpoktUCbGK9xSosgyeGpnozk",
  "key8": "2K5ehw8bFVF3NbyyzdrMYHruw2uQZaetucHXzTT3f1MgpoJpXz5JrpQdbgRLWqngyYvo1a4u8zjY1J8p1vC4HwyX",
  "key9": "TEx2V5PwdZeSN6rykx3W6asjvtp1MiYKwqW95LNvN4LAmfpqsetcun1tsABfCqXCKqrpdwdEKhDeUrx4xr3GmgR",
  "key10": "sSzSCCdD87H4BiBrjwjPTb9VTpW1sD6eMh55fDG4BQ4pDT95iffF3tE2VGmnybjVXSQxhpA6AbKSrvsxJt7TZxh",
  "key11": "49F9rktMmVVJb1BiMkN5KZwQwpJ3UmQPUGjaQzm1dnDc9YuRXerNKAAKCbHLXcDZ8RejXVc942Zsdq9713JzB53T",
  "key12": "2ScVhegJyrdHN4wycLfC3SC7fS8RhASMRZjkXYwUJuPkYVA9jTzUa7fxDE9gssHcyxrwxHqeWyKEomSdKMmHiNDp",
  "key13": "3cRTGP9vS9ypNwr2Bizqi7rBYFD5ZMmPUr2wmhRGXo8FYmLJyP5Q3UD8ayHnaktFSS7oxoozTanoKv4hxKkDEwH2",
  "key14": "5pkbJ1ouRCB1FTuf6xwigxtabHzBQkjnGXBNF1BJ4uPkhjdsKxzq5Rx7nb4p1yYwCEyxH3bbevdU7Fd3mg8PUaak",
  "key15": "5VJ2Av3PnupQrAsv1MGpGuX5ascf4CK3Pz9JLWooPoQMaDa29H8pzw5j6S1mcxqA7WXEiHrUu5E5YsFfSsyDCeH1",
  "key16": "5XhNLjTLkJy8HWqjuRBVMGCMpeTAEwwNzM75tbXH3BEFmKT1Hb1d137Grp64imQwP6TnoKuNwgCwmyH3G7ff3Ffa",
  "key17": "4QnHE7GGcNTxpk1chNDRunBKNzGmVznJCc62VHV6KDr2KkNtoyKZw2YCHy93SumZtGqzCDy5DsyokuKGCMPdxikh",
  "key18": "4MBjPokZgsVfjoTPnvBD4ajXxmhNErjpuCCfhLuw3gNmd5Bzbg4NsbiPduK6Sr82kXuxWym8CtJv5NYYM8Jp4Yi9",
  "key19": "2c8ohozaUqiA1iT7QB1xFKeo3nQp9G3TdRrkUFstuF8ZamVVSzHgoqaktUn2vvgLnzgPmRk1TUeHgfvkgytxRK73",
  "key20": "2XQUb7TLHLqV5YDo1Sbf2MYkYHFTobmSrc19PjieUMcyVKbnQ3cFhjkNxdWXXkiWVbHMJ6GSLAPed6LBSMiuaiCK",
  "key21": "3ZtVasZ3vQpDYoe7ZyYaKmCpr2CxdH9XpmU6mdjq1CQeDxKqV9qF28jdRsAtvfQPSagwsWUCAGGxQLv36pURtvnw",
  "key22": "2rtPRiNqW6Np8g95AaywoTHTvXeyduhLRHt8kVu4G69Upeqga62gsvVnHFoFDdWycN3BpgSZ62mBH67xV9wbPyY1",
  "key23": "3BhXyM3ce47KDaLnmDcPoC7AqChZYuiJ6CvnjAtRMAzXeXPhGF98MURcNeGV3vr5rvRHJUu4L1dwd33HjW1qWxdG",
  "key24": "3BL1gMuBZPtgpCUDPUqu7uXkTa438SWvkWtBKmczKVYk5UcSBhWg7zaNC9sUsXUZviSXotv61FZbuftdkrcefPS2",
  "key25": "4ojViWSyVcnfvv93iX7qTDWsfTDgNetoUZvcx8dHiwWGbkuifKphqfeagZNopF3nqLTu3cvGskUtWs8hqx1RaE6t",
  "key26": "2CpD2yDpibNueF6QJNx6xNFXKgjgYMUuVsJzf99ZEMVokTjv7h2VHQYT3LQv8i6HUBGtDp889WG9UosBYnsLG4F7",
  "key27": "3UgUbwahGoMc7oaiqBTMkvrJuzWwNn6uGmTH9nWeCyhbJN4dhfuyG9eBoMHsv5PytjCvu3qztLMXTnbX4FVxhwcA",
  "key28": "5EGDJPt9bWEZQs1UewoHxtuo6t8BvGA7VLrFjEHtH7y68UGPE4LSuGyDHisym4mL3J2A6JQYiroWBJR1xsXwmVBR",
  "key29": "bxcxJMueC2CqceUyPXWmCFMz62iq1XMNGABs3k41GckYu7mcMF1wSAcccTxS3X5DDWmZ6LqrycVEVcX43KxyPb9",
  "key30": "TjChLW5bvr1DVFd76ohsPJ6ViQzyWET7okw79GTn621pgxNH5BAXAJkkqo2Atho4FutXfFzek3odDwqAE5VfYJ6",
  "key31": "2vN6nfrBhuLqFA1MbmtkkVG8ztf415Nsq1s3wyrALYjAzXQJzTjW5C84dCfnn54Gehfo74PxZ3bzsgyH7nivbyp8",
  "key32": "52EmbuCC9BcDT3ZekdTPPJBrA5SLWoyywpVXMEfYNsQCJ53Ht5SfAvfKAYU7rcdrGeLTxk7KAGZ4hv9dwdSbqaP7",
  "key33": "3SYT1fUKBGKiAtzMZnca1LuaKojLXZaFDTsSEuRHbYUxR32fvGUjepyEX6KJEnssgJF1UjL5aJYp5C8AwQPNxbw1",
  "key34": "35vUFNUUEctCfRAALqLgbWKHEeUaA7DQcvpq2X1kCRsS1tMJQhrkyHAXKNpwKU6JBByV3zBEgnY7GJZ2nQLquNLp",
  "key35": "25JMBtDrr1t7WnnfJGG7pv8L7ALPBJmZzk4nsXuF9pDgtY3EbUGP178eiwAPLZbDL1J5MDsT7G4xuyL3Qn88FfJf",
  "key36": "2Ei4zG5KFKWkGbdXxZP2rmEewvxmk4xG1c7xTzkubXPLSPEDNxbwFtqrNuypp54r8m1rMrTRBCM124FTsDrodvgs"
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
