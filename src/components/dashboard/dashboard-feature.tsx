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
    "46FzAJ33mYHT6JjVGFoBFAQf7TRe8e4xGe38cvbcAGTXK7AqoQguWBu4UhvFdQLkGTStpsNerSuoLHaRsmvzvKtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSqo7DJRzNiSJVZTXYWiNa9nqa2W18goKLrbNQ1TkEvZGrPD1ZrhytDEHqb3ww3hk8ZhqbLr851Vn7cXU5HAp45",
  "key1": "CmV25UCbJudwEUKVwbbkJKsho5gC7UNAJWgsM7wQZM8HdZTAD5QxU4RYF3jaosewMLxW2NoS8NM636gXzVAecVr",
  "key2": "4kFpVwKR3K6AeA2sCtpcZf4mnXHNGrm6cWcWuKdUPYA66qs4u4dmec8zDhFkmKBuRJbAa8fwng6deAtNvYBkwadx",
  "key3": "2UFEepvYQnZ1TvNEvNU7QHSLDVenup6ZxFYaXYZ94LDXk3dpT2sPj83iG8egc3MtJT7yHqPAaphcdeEURpsDfVfw",
  "key4": "55L2YY4S58hbWUa8iNPMNE4a2VTxppYaYU9Ye4KrzTXQpF1kopMau6qUJN1i8ZDXDCL3gRMFxB6tzvChvV1ztUgL",
  "key5": "3z2LxiSvkLvJLueziPSpkFpyrQFV7unTwDcvYX9QVGYGKbQRyBXGxULUMqrv73nN3sLW5MtXULnMJExDDVgZxTS7",
  "key6": "gGcKcbja6QxWm87GjcXyAWnJn2FrBfVV1fJGXN7YYj2QyjFvGTHVSa27HZ7p5PzcwC5mGbtkdFRUUhQuX1LUzd6",
  "key7": "4iNmUi1ttRgP1grF1D7v1S5NVu9efrJaPn3jbfEikTFf1FjxqcycTK6ab5fmejCUqrX7Hf7XsGaNjAtgJAGdXgn2",
  "key8": "5BvWxRii9wTKvTcHg5pSjKbCK626tiGuB4xteNXYdNvFjZ4oCTbLEQT93ePwvJs4ESjDbaiJxJu6WKt85bL4jyy7",
  "key9": "2Ce4CySWmW4kH4MeT7p8F5WKEBZ4yf3iSsAtymJCiok2uwg7cj1ja68aCz8R2J8G4QQrJZswYFQ3tSi4xrafNpPb",
  "key10": "BSC6111yxe679NhbLhwGn2mHCzNFmvnRojdxzhWWw5K3zdr7SMFH3v3Awwmwiyez3iPv7wjzub5PmScBmGveP8L",
  "key11": "UWAgSCNYXK4vWgweCye9ohehNU1skunYewnVztgnHkqZqBA9jpkH4s12L67dvHKvah1nh3nKKQRdwMxXnUf29hq",
  "key12": "46sKVQK7JJeZfvQf74RUAStWSyxe2bAA3jadXw1C9RXDZH2Bo4L39F1FJ9SbS6n98nqT3B2xupGefyU8ZADLG8kd",
  "key13": "4i7sLqvTR4bnCmhWct1BG9HNhn7HKDgorQ5ep8GzfMprq4jaZ3pzDm9NLZ4LGKyF3GH4aztRGKpRMLi7AB4iLxVq",
  "key14": "26z3yLn5mCwiApwpXMob195a9TZE7YfCCSQdWMKE6MHoF8qAzrb69qcfTNAydmYGqHzSYEmPsoYw1YFsgcAAEQj9",
  "key15": "5t7YuKj3T9oS56CMbsvoiZwksnZ3vRJo14speKsi2VeW3GK28MYyAXZhVDCr3Bn59Cz9AMniWqpVbdQr7Vy6Cc6t",
  "key16": "5PLQywSvJaAFzvT6yVXaWyn9gjkqNNWpnJnk1WM2V3mXRP8BR2xDvUDY7564EfeaaQkCMVdeDLYWwEEYPH1fo1R5",
  "key17": "3xJM9asn8VZGh9Tezhyeg2vuijivvTzZgZrb4ZMt5mxe1qic5Hp5LHUNkZZ5gQ2uVQaMuP72J7TVHZZoywDU8gUc",
  "key18": "2DCJ59k4prZeBn7AdTxbmcZkeRmaN3jMb1TisUPDDtt8z1RzzXBHNtGKhGyQNipBwh98rRrT3fgLYfqGdNUYUaHD",
  "key19": "4eDhfx9ahHiezsdThqTTo7HxCCMmUCnM3Djwj8nS5rU2gECB14TPg3LrdKZuE9EiBoNx3DY4RCwijPTwyNpp4fpp",
  "key20": "3Ua4MYfubJxouqi5zC5Jw34AHpjVwzSz64e9ckiHt8YKm1oBGvnESpoPQvxXSzVuENEsTQqmkkEF3cdWgniKZnQs",
  "key21": "5JvH7poRfjdpktzJ1ezjJpdbju6KUFXadFPtqNF3a5u2TopHpyJNUExta1gqAVTwbCQXZhQDRsavdBY3mxtMN1EC",
  "key22": "2LgdimMy5ibBxhYA6kVSDDhgVGqfw8bRmptEFkSrUMwX5iELMTu9bVPaietZK8bG5K6fEcdeWwHeqArHWFN36heH",
  "key23": "2NzEdVxi3pyAAp3NonWorogRr12UpWVP1TnH9yvejHeaDbywzRSLCvnyB8W45SJwksStAgFKkLqEbqbfuLf7XWWf",
  "key24": "5tS4ZGp4LJKEaieSb6mtt2ijsGE2JD4TaQxjyEig4uPu4gguQDZYUHaCGtw1dcfzZ83Gp3xYjRzMUEj6ojZXvZTP",
  "key25": "2FSfJXWFUTwxdopGuqA5x4s4GgN44cSHhkgPA4CTJjZvDmzaEhvbYH7E3EhtJcM5uLzka1MhSYBtEpEuPWCqWBjt",
  "key26": "4ABqNTa1z4SJezcsgaFfBiTZYGVLnA95WFy8JADciwo8Q3ZRitV2dJwwZrmWzybefG9MK1nW3XoemhvgMpcX6XMC",
  "key27": "2WgF2GFX8SaAxYHf31UYpRQxXupXxhtm2kYy263f66pjSkZ9hkY5Tbo2Vvnhj58GW7r9NYdYCW2vQiA1a5FtVxbZ",
  "key28": "2zsTm8aVm8GhqDHg91ngn2rrS6yGAiH676qP85PhDmyHcSZYBTJGTYQw2CfHhVFnCcvkGNA4acdJj4i9SLh1PcJs",
  "key29": "2vQ7dDqbwmJGJyEBMovWrzqz58pkHa49cKyXtZQskM3JNGjkhqGyAWtUF8Ye2NHfWW7eupwKCofJDN63DXbAA9Bp",
  "key30": "5HXrpRGJCaQKqNR8BASWirK744vUJ6HvLDWwzia3bpKajMYDyBZob2e4bugpR5KxJ1egJRvfBy3CyM6MrsaHXyZ1",
  "key31": "4VmDHmwzjP8xaeuiHUmMJg69gJf4zN58WtaULyxAHpfQQ1bKQah27FKmHYq1wuNCsSumEevSMJiMMuqzpv3WfCJH",
  "key32": "2z9L5AqCmyAzw3Kt2Fs6TczcYQbq4rRBBUtEjQQCWceY2efHSn1wNY2BrDYq5wA7Vyg4Z3LnDKzhBKM1FgMF8pwi",
  "key33": "gYBLAJL8gVM1g7C6qZXQ6avLE1xfxwCen8ScgccWsyiUKDUzHhDp1yXyti2D6c6G1L2vKhDFsw5fiNNq9n92ieA",
  "key34": "4NdQkufWu2wpcguP2B5EZRtJS5pBJCFjcdYj8RYAk1pCGMpjdPpJbvEQEQ3xHhC5wGtNmBifcU5TT4UyhgKrmDR7",
  "key35": "4MmLQ9ipNPioDj86RkA54ghqVTsQ78ttPKCN32o3E7mM8rh4nJg3pymmGGL3usJTX8xd7YTuYmWWjPRCGWADn4ob",
  "key36": "2tNp5gYX7TNBM841uG4PrcrYSAWTaAXMCL63ksbXT7oo73CfLQGwozLfKrWHeRkqxsDHvEBmZaa2hkM3qqJhU8D8",
  "key37": "28Gx4Xay5PmXtCNdwDLKxC6wH8FFaaH2Yy4obeQiZRziTTxTz6SvQFeXCurkNkwz6wwAxfBe2seAVsSXBvAmmjQo",
  "key38": "27NxFmBn2DK2UGrYdH6qRRVM1eV4UeAQf4jysQWeaphJVh3eAR6W32vuAuK6hJmW4TVr4WnVGGjMs9yyWX9L8uvb",
  "key39": "XfgNcof7YR63bpkApRJxDxoN1UAkQ2BnsqCre3qMnyMHDzrqtD3JqWd66PXFsCVKm1TpzEjLa59jfFH1Uoc9tcR",
  "key40": "rLMLD4nzPpBazAGHFHHaSdgdBuThxayXrDQAeC6GnsoqTMuMxTkyXdLWQJZPLotLGDrKpoY9SyhYD77eMZE6NdX",
  "key41": "3ihdaXbMC3vogTeCFhwLRT2s1cYZexM3NPPXJhPpAZGE2Lp1iNy3EG3fq37C7Lkg8HVTrfZDWp2yN8xC7bMGjSKc",
  "key42": "3qrgCp5vYAYKbFFQkRMiNAnjkQ5VYWSZvJmgW41PKti9SJowtyXGJywLqRd1UcQwdf87NgkDTf2GuH86GHdxcNdp",
  "key43": "jL3hxQKVQKEksuZ8YQW3185KmZ4t5ZhmotaHSKWkLYW6qwPApcaRkqRhxBNu8zdrTD4sFydJKwrYxHdDWjFcouH",
  "key44": "3Hk6ZEUopZq761gWtafJJU92sgb9xqDVUTiTKWSQs5CfSqKxZP5TZ7kDte4dyMTkZACinJgRUfKmee2cfs9b5ESL",
  "key45": "5VwJLfadwAotfqFCfFbruR1mivramgr9etSBhXZ9NifWTr9QTeZFeS5tASrdnDLmCxDYcugjf3ooygxSpmdub31Z",
  "key46": "4qfuXfEB1UJnm5wbq2ukwunUfXKCiQUim3FmLQ7xFdVwj14cV7bPhvEvR2TGr2rrW7CsHJmCUwZbpnNTMsyzAzTo",
  "key47": "2kSHUqu6sfQVMRDFYTn8ZQPYdmRssAG8hfd6YpQuBDSx1ujLsVxDRTv7TT7e12abR5LfvRa1GvMX8Y7sns7gPS5g"
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
