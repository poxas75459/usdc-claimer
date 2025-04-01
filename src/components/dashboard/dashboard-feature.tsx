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
    "4cD9RbVuyu6gg78tZqAjJXRWwQXLhEvMdp9LBMeR4HxT4h3rWhfUECqru5FnkfpDE72C5NimaTGndcj5sNJRsNkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdeHXbnzAmn62nsP6ZqbRuF9gRn7PycNXt7sDkZui9CdnyKD36osSVNECNYzh8wm1UWWU8SqnsfB2cWtzdtW1rA",
  "key1": "5H6kPH25AALvLSFmrCnZowegjbgoLHx3fTsFczkoQEMEw38HWCUDjeRfzDb4RXQM2tKqDWuGHgK62iPQ6cutNPPH",
  "key2": "5tbEFXwXEGFVfYZui987j8my5BmusvGFwEejJxxpZe7nnva8q7QGwyBWBbXTQzs5PTZcZjJp11ryhWmTEfzFF7c3",
  "key3": "3tPFQtP4TfNJ4gWMPj3SP8hdnnA4Qg4i5W6jJLtAHrh9NnDVYjQQSkCbsUFrUM4xpnRKVGX9eMGhTLk8u7U2j2FJ",
  "key4": "23zsgYkwnH46wWGYpMUDpc6GC6F3qJZsq9UEu5h4Y6SZbbXX6SkP8akroNueb1ASxvtBSfSKRV75F5JXka1BggtP",
  "key5": "4VqxPw2WN3JwjZxtzNfTN31wXxf6oMLgcRRpEbhHfJLx8q39MXxqWUK4CwUgBH9pfwEgSCHkdcVEcdPTPe65dNj2",
  "key6": "AnkXEbVxtwT27kvdcqvwnZQLxXoRPTfr4QTZkaHLnowFWEUfxMEicukuRipZKsHfmWLyGyyXCLEsHUFiPudW6AU",
  "key7": "42bhQM1J4AVTUF9TDR1nvAX7YAPASUuZPxpCEFAjocHt3XHqbwyVez2FkYJnpiw6vRngUMNrLetT9bv6TV7UzQy9",
  "key8": "4T6jgUqhYaKYm9SW5GimpykvcYztrnPXf9vAXA1R87B1ADapwjuCrD3mSWVifHiyeNHqYcuXacVuAt559H1Cy28b",
  "key9": "R7uFBMxk7Q9kSqUJ3EcYf4HgbpNHcMPhYQY4BPX2qNr89pNUnwK1iTnWhwSL5uBULRzzb2azoniyZgR783cfePV",
  "key10": "23pWN4iPYqTNqCY5YXTVZoTuq8zvhVjeYe82414nsdWxLCEDHgNJkgyvPuWa8MJEshcZbu6XFB5VSHg1khGPxVpb",
  "key11": "5B1LXR4e5b9xnKVmeeer3YcF2zSQe24efuLAiaE9bwUHXoxF2mDnHufjtA3EUvQ51EmhjUwce37c3WX3W4gK8R71",
  "key12": "5rfUdEtauVDC4hU4gnz3X32DWuVBBL3FB1pcQQA17g7Q1zqZ5XHWjdf6TtUsi4PLiQoLZGDNnmkJEk7RGKw5NBir",
  "key13": "4dZkQfVzkhvcAuVVuoVvdxXgvjyGWiePNBYcsqZbva1x7rx4VmjAArapxi9W9yELhrbymVQKpykTHk32KHNuxhBg",
  "key14": "cD6GRsMW4HwQLJ6mVKJvSmoqggn6pBtkH3RoUCfFC4Zx1PgMpE2Kg1raGDmeD8dGS7x2FwaBSwUcxPS8uNHF1RE",
  "key15": "3DkQ5QLTyKX7suDFncv6B3CKSEJqLa6cTgNpVjSQiJWw2EXuhF7nWYGmdAN2n4qRefvH4ZojhuUbe4DuhLJm3xRT",
  "key16": "5fzqjsEBD5JfvVC1bgW5GDHTNQwKzHYdrUAUzJTeHfZqAsuRMQayFXU7xDbuZaxsa7cuB9JCdgYuYEvcGa67Wpw7",
  "key17": "4PXYtgoCA1aU2dUSdHe8fT9RaGV1oUpKK9VD8ZJoAWuA2U5Yx2oERiYfB9WWxWCPYikHTE5FsvirS8AYc6mXvnm1",
  "key18": "2zDccbUv7rVKziYgaJzHYEMntRRNfuZsyuxmKipdESBenaSnGMZHaizqKfCX2VjdSLcd6ReyeMU2KkB1MJVQh4xW",
  "key19": "5FyZAqF3cfFZcHDbRMRqEm1ffGRLnysgS7SWHL1gUQsXmLyBjLF4hikWKKXvtog4M5GfhbGmqjTcnL8Tot8RnGFr",
  "key20": "3hGNYc48bwqVozCBp8aCr2VDZit91RvRAPmpuHTuqfR5r5Yf5o7UDyRYRj4YzryQbTPtCPwvVegckaR3uxjvbSPE",
  "key21": "3u7bHi8MmeCnMXAhLJnD2iSr6ExkyR3gKJWCZEGVEZh8AMfpYPQssnRPPYFAZFdeMpxUm6bFdifYFjugrfrZYphy",
  "key22": "2tAksUzWeztQitxHXu4mETmXff9fcQx3RyYdjKTAXVU964xtBdFES5PvLM8JDXPYTzXoM2KeZSy93i8QgomdYcaU",
  "key23": "5epUy5mkeopXWK3UuXM2Uqwb5Cghsr4nLTYMwi6Jx7SjJTPd7pyh2oxeExWhLQrGrCnof64LynKXK2fPkFF5LSZD",
  "key24": "5Lq3KezosgufqR9Cop9idrWkTVDbXuErhSDAJVaJox2zDMtmvo92ap9D1CPLuKuik3vZeABe3KoCmvuPU7K7LdJR",
  "key25": "3KKZZiJf3tB45jYtRbjEc6ArukCphfFck7aZnCTeNLz3p7hYKZw4bw8q4mekptBAh15EmyDcqkPbJ7SEhCjZsfcj",
  "key26": "23Q27XoLaikwH2PTjBziPgEH2oXu6ZyKsjC8UsTxsPkhiDj3aCuSaJEw51Cu21LUQnqFcxhrVBK1cJExMFrVj1NH",
  "key27": "acPvPutTiLDZgedjVxEwFxeHWmSvSPTgtaXKjZTuM5J8KesTNFYUBZYRFpoSWEgZQdMGHRdTBwdQGAQWetnhLA6",
  "key28": "Bi4SK4pUMYMhPLtGPS4ZgwatT1thxFSxU6ZvdJ46TEnmo5veXdHtb7SpEpiJrwUBwUEzEqnFSHkQdyfh5iDreW4",
  "key29": "2ScQZ7McJ4Echz2Tucct6eMtYzQPiES2FHjqgUcpF5sBSP9W56GV4snkVbha9qzo8MMUKRX4s8MGmypGoe9mUEGH",
  "key30": "42iFdQJ6NU7kFM1518uGvBh33EzK21wZyFmTq9ma1Nroa8yNXpVELMiCECNkjyVWuTkaejXSJgAybcsuNub1f3ZQ",
  "key31": "dg7Ceiqn4MjZrqYcYEAK8J5EDgccgkPS9DGHPQd1jtm4KTx9iwy89B3mwsHygKDnmj6TvNy25tLuCsFvG26Hnxr",
  "key32": "4Wsvzb4HoP6BGc6TC2P48BsaUASyGV9q46R2HyYjj4HqUw7Qp7yWWj4wCdPT9Mn3X91kGUQCoUHZ1KwypgCevn4y",
  "key33": "3DkQUxMqu7ozyzMvHQnEasN9wWWj3XmxYpk2kyAizTE4ci6kreRVt6RkZX9azcZCD3pC4TEMkbP16kuZN1mMYf6L",
  "key34": "f6kfyDhaXXrvALRX4g7H8TZUzNj9PWAf1RpHovbzQwFL4UWQkdcywBu5iHyQmSJnsqHc6zFHdj5EAZuYEdsXYBv",
  "key35": "3VDgQ7SKDyPqVGGSNWaHKgdtjKfEYDv87EvpNVArNgxZSa3N2XNxbLokiqFuB9t78vDZRFpTeauZagKh3r3uk15A",
  "key36": "47KiQ3pYt3r7AKdziXbUPd2qax97Rw79xfRtBU4cgsdWsuef27WoN6TrTBujUQeRt7zs5oWVhCRWeFCKjN2Safjy",
  "key37": "1kxkfewVpSTk7bDYtJ4CprKwLZi9UNBTDFvrG3BsjmQX6JtQRtwjgCcnsvwcwSAfjhzXpscsirhYyJPGCAWR6VE",
  "key38": "44q3KTZDVkg2tDGAZGgGsvCrxyhRjTc9vdoXFBuLUgu7N1s8ELZk2RJZ81Q1cFpinhWo5QdcjbEsAr3j5tD11ELy",
  "key39": "2Ua9hKd378PejskRmGZYrWDH6oKk3Qsx8sb9RB8gFHmVuiCbx1XVSn6L6cCm7KyEqkYNufDsw3tRmHDatq21kRNi",
  "key40": "3vgA6RLee7HWc1yM5A8oMy3DZopEq4njF2ZM92R8zM1UfzZ8bSmksioniFbHYjsexEL7AbyDyLzKattXT3X4ar1L",
  "key41": "5wntvpaHLUEq9v3yhJ7o3c7DeNdZRuXAHsT1T7KUM7Cz4p3p6WGaptSrNkBTU3DmViWLFrAGVEDfMYxJA8fAicGX",
  "key42": "nG6qLVPSBmujbJdATeCsgZearpyeCeVLSPxQVxGcgpH3hE1rAHvSy8p3PZdRFvD7UTF8K6pc7E89eUv28CUtA6h",
  "key43": "4qeNSXgC5W7P8usnFz2xCamzQNYXiUe5XnptfWPXEDbuscp4oxAi3rrrYYtLnbeYE98wtPXbrUpRQ5rWoY1tUvai",
  "key44": "3WdUYT7ybqZTmR2dEXAbW8d7SMNDaFFXvvXJT6CQYKQahMbrj4VbkisjGAafYYXekPzUAVut3rAiAgq7V6UP2AcZ",
  "key45": "67YNZqNZsULSF13yFc5T3KHrpmKBwojjMf26dtuez1Th5AvtntWsZbP9GkyqSU8nxJLP9HJwdPedTtPVYcNYigwU",
  "key46": "4pXpLP42qkueBPBanULyZ952k9vLKeo5TgkGChXM9Gxuoa4hcBuyvFwuKad5HUDang31HbAB2toyNGCfhsQj3r8d"
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
