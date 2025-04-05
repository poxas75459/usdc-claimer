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
    "59ZdWPDME1zYqA4fq6rJwYF2v6pA135awPcRgz1nhJULA7BWuqKtgYYm5iVrheEJeE9Q4V1GZMRvKk55U4HC8wd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6oSqp9iBZpZDob1T4aVzHVbGn6chj7Q4a2gduV5ooijP1937DcEuJfQuBy8Umf2SzEx9bN64eCnktaW3eyfQLs",
  "key1": "4pxLWnnY9JPAp7Xo6XzRoRqyXSmnX1SpZ6gh4Y6TVBNarFpWWFSmnRbc6PHwVNjPDLgindwZtkWsEV1vDTjq6SEP",
  "key2": "61KbXS5U2Dh8EsyH5myVdpf3Mf5gQhWnK1v2UmV8SRJJQ7KhX4oVrHgdbwERXFUqzCrk6irQ5kL59Bud48Tj34N5",
  "key3": "2zDb4B1U6n55ZtNswUbfhkuXMjaVGQiihhemBMs4D1Q4yx1i4EZBY5wSXrGKUaxPpx2p3TrwAfHs74hHfU3ZkBMH",
  "key4": "3NUfxaKEM2QvdohyFUd116SjZKARbZoxYSgw6anp3UiogkvUM7o5rpPof2RXzutgStwycSXZbgeDLv4wMyX9Dvm2",
  "key5": "2pgki1g91YyxSqe8GWyJigwSBRWASYVUMuZhmUEgi6VmD8izDxhxihMzqpTHiUABTT6ATXVoktg9cSqaofV5Jsv1",
  "key6": "2FT3joYbPSkZRmCStqqJLUJP8vevKvrdtHxUxAcxhffoTsFnFW3SVRkQC8h4jg4mVAJywvrr3Px3FRXFtwDkre5f",
  "key7": "2yfzkRKFsdjsnRSRn5sji4x4suc7nszqNx5SdkceSsoHymomSHSqwSgyUVvBFKc92DJcZQptX8eJLxSg95fRCVtm",
  "key8": "3uYwKnk1EneEvHNrbZz2PZxiSLRhjZo5i3DiKUfxMYzYU6H6Lx9TBfPguA7FF3CYGcsKGryZnWihdeMdotWW5kDc",
  "key9": "2J6XntohGZsazC24C8vAdeCftYsXRPQU8Ccn4fHdY215c3gut2zdZ7HawW6Eu6Kx2SV8Hvdyit2ewFcyBTV18iAx",
  "key10": "PiejJEVijENAMt6wuRCi6eKgBVD1AXeWPkWFDo1X3r4mXQjz5PyDARUVHaP5HLp2MhQgAgFjRKsxm4MZFtpDB9x",
  "key11": "2mskSPPWayhiU354wsHHVHf9or4cXdDJVpfaa9h67x693czcGvyq1HeQjdUGQLaCJkJ7oECGZH5musxUmt7LD3WN",
  "key12": "5eCNekw8fjmaQJPXe9fEjonAHkA5mh6zQWFXAfnRWFSX5szhRsVcN8iKHx61JY51CYuxMcKaMbPddKtNDVMewzC1",
  "key13": "28hepjqSohoji7ym2ZGcxoiigQqEeQvBH69WUVEU4svudm96c3wf9wReGjAazUhZ1MhY4Jejw6oTMTJZYeKc7kAV",
  "key14": "22Q7E6Vg5osns9Mf1BJxDD8zoG5mE2aScGxuvE9kGY27tu6akJqvm1MKfGWLwAo356bAhbiEyByRLyA6i3CyT5uh",
  "key15": "EpFuA8mmXEX3qz8CzD6ko5dFUNYgotQToSsXNTyZTqPuAYDXpbst5y6UiRKRiGpRDTV3pwP3zzBkFvL442b21N2",
  "key16": "55L9HY7nTPWrG7cETr7KXPLysFyrkckLy6DKwJG99R7LgGsyJR3CfKmHD3Bxg8mvbUyxV9svhWRmnAmM8rbAShEs",
  "key17": "5MN3TTvyGSSPnRt1Ck4BGrMCukuGzEW9vY73TvTUskRpoVrgXc2HQpkZ5M6fDRB1AhUZt3Utb2WNB6o3cLCfP79f",
  "key18": "32x4rbXeBgrrsc41Foq356VTxxyZPQGWRBU1nSxZn269UyasKNbtiUwEdgQPrxsLnWJDzLf6MCD7A9iuAUrYJkF",
  "key19": "2dGVZH7NRLYbsXLuUuatMqxYNog7MSMkbp1LKV5UjZwN9EotB5SFjtnQBHHMkVTwu5tRb8YkKp11qQQZXfA7dR2e",
  "key20": "FpcLmyruQ9tYcnfuytUKrKPWiWfbitVUpfnjw54YvJ7uaF34W8JKdcN7BGnkT9mSzMpisGPNhxbywGZu2mjtFdY",
  "key21": "1aLhNtCX1x4aMRsCD9VHfcN1YvXWEK5PPEusEf6C17hqM6nFkkvMdiSnxiBbsTyJiAo1TSqmGQDqUzWLddQDNgm",
  "key22": "4GoATf9cYR9hz7638aG5APB9VBtNSYdMT11v6Vn8jHbVwNhXdgFpFbULcMMXc7kXoR9mCtq1wkhusGbgLHwWugEe",
  "key23": "gA9Tm2TCoxqhHbVNLdCJQLCqUavHE4v6U1CQVyMRjk4tYHrLyJ4hzTGeEXTcFuL2YXRVWCDW5EjaxkVHeuXkCtd",
  "key24": "4rwc2tykv3YKDMWajmduTRegTGo4kXzSRQFTd3zZafDT97eXWEAu1sYXUqXcaX46JuVXtvT4TmJeTmKBd91b8NhG",
  "key25": "4g4vGEes1nFdDPRqUg4uCjV9s2YVtV6g92bAhEahV54Rjg3Tvves72BtCj2y9AJFXyuCfAYmCvTDPpcWVGPYKpkm",
  "key26": "51nAs14vQ2SSFrFPt2YxsApTFPTU8Qt2G7vpe57L56KEa7ZU4cDbMwdw8Kg92A5eZHRowSrTjyxGpQaBU1p3y4cT",
  "key27": "3DgYRgnJrX83yv2jJPPKoXFmJLuxLGwmYopPeSmt8WyGUtkijjmrgMyEceZ42XsfyNWKK7Sr96yJifaUU3gXsMXB",
  "key28": "5yW3ibZasbC4cdQkMxymGB3R73UkXeyt87toGygG3Vfw5YrMGSY8qA2s3bkhpPqk2QpcSyGp52zHf2SLyNLrajEM",
  "key29": "2iadLFjbaAMbLCVMneFDgwnjvegoDp1Jm8BzpD41kerKqGC7sHLv3g3RJg6cPeG7dY1poeJHK6KtfJ8zSdLeF6tS",
  "key30": "nZYaNTUSAK6Y4nAWfTYnEjdNx64AWZ2JuKtTpYDKcGP81i5cr9A1kDRtNafbF9aXEb9QBGpMyEp4UhX94CNqiuV",
  "key31": "3vnuXyie7JT8os1BvpGSwnRvsTJeS9xZkpUf2iDHLjPUpJ4WMi6jq1BBuZphWtzE5pH6wBy2UKUB4yr5i4GCwqKa",
  "key32": "2kiZcSvomL5t3AMGALNxtqfDaYtP6FXrzEf4hb5QAhSVxLpNJ5NV9UJEjBQ3iizdqWk1GTzhEttUoZjAPV5U8Afh",
  "key33": "2ZGm29UHJUKqPppWoPpQ8daQeLP95J3C7YhKEGr9M4f8GfE9PqsiSsXNoTPXSiu9x4CcCaGL9n5m4MJnqWQh1NNM",
  "key34": "32JP8DzAaTnn78wfVybjb2LU1MpmXFd8AZsimvvJdJwPcPxyxdQX5ZZBQozW8Y72kDMHcbjwy3hdCgGDhMJyeb7W",
  "key35": "4T6aeUz1BTEtvcax4HTcNV9aeS4AxCqKz5qXm19DymMFErNFtwaMvPjKRBLZFcmNVMYcFRcqozVroPXV2Nco7uXj",
  "key36": "27yecRKKB5cWZMri2cCsaCNbBts5erkKeHWjWV7pQr1erNuDsQ469CNGFaKtRgSx5SdGA218FDjbCTKQHuW3k3rb",
  "key37": "5o7LNBwhsd5VMSMKgG8TVNCvNjZR4bTepbSSRQepu4x2rTQNQxByMTPrVWUCB1a4HSjgF8wyTNWzfRmt9vDKnH2Z"
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
