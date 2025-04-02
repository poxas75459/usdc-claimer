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
    "3au9HykVkBevBCrmcrHc1K3ARLJKeWc3WLF2vPHt9ogvL5FseaMpDhWmHBXVs8NSbNWhhMcpf6EdHmFzFRzGwuLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1w9ZdsCy8D4hqnsuq1pw2SEcKUwXYHvBeYg1BDLnYoYgDcCMJjzsDx2rZjVk7asUHTHe5YmWtVBtFEU6cuwppa",
  "key1": "4h6pSR83esHTnnSTXPFhGsqnkUEE45F62Deqy8FMH5v2RsnmGzxiA2TLa3CS6bjDb81HE2p8oJZHdKPRewSHoN9o",
  "key2": "5oaHvtYBeCuNDhYcxaho3ecCL1CcL6GSAsg7T8pvPGzFpZpEHu8mxQ8azWkct6svPxAp1k5UKPuEpQZ89QhWk7Jm",
  "key3": "2cbDPW1JuxCfP6L34pT4TQbpcqEtMfLdyV9WvxNrTgx9wKt9wd6PXj1jELiJtBGSUpeMMUCzDWi9THZXcApfU5q2",
  "key4": "31iJdgdSMjaLsuNaXwyE4SCh9LR7gY74UN4Bb5xjYJ7Ett58g65tvnHvtQ7yJcmTrAhMUxD4wt5iBJRrkjfTQTE3",
  "key5": "YSKVtyiNUftpgqKb8juNkF5gvidDkYnYtf8cM2EUiuUtKNJddrYYsqugzRcEYhV8hhZzAUGnJSnKhDiAVqk1YSw",
  "key6": "295HgsiEt6o8DMZYppm15EfBK5dHeqZVcYdeLUkaeiKJwn35NXHGAZREtWYp6MPXkgUYQXoaPXgYeucwpfoj3LHe",
  "key7": "4JkhDc7FM62JSnwmE6wnTG3uMi3ffY16HscSMTeipnVYGUXBpXLZwc7aXVXLSjP7z9bbYkSLXro7p7Nk32YhxAPq",
  "key8": "EUMpqd1QeLHbRcjFs8xobevDcVk5NT492kvck9K8zoJcuaBnhkh2rnrD93u96Y1e9GVRkmkohByMQA2Zm42wTFj",
  "key9": "2FdwyqX45ziN1DAgtHa6uYka7dFVkVxXcLQRZBjYrxg95BzcejogpFMLMkX1isTHV2JmdpcgBR4vJ2s3g1dNHJWN",
  "key10": "1UbRBvdYUWeKijQCqNPqjfXWKSnGW23ahAqvSebk7fHtMxCMjjQhMbChwTDng8FjJyRsLdBw9w3CfBgxZSF4syc",
  "key11": "3qAb89rPm3oDcdfNWXYgexgGSHnKBSF7XykBS7fCkWFKuEUrEN9YqVjW4ZSZTGGLUYieukphstycstpKbC6ZSbXX",
  "key12": "6DD2n7HfbZQdagBi69shuvTCwKFdSB2RiSLmbYi5h72hLnoG6kMoaYAC5jXHCZYMgmXvmsoCawhsqejLPDzR8vM",
  "key13": "AM4NwBYqpmoNHx1kfRkMAsmrv6HPxupfEhSSh4tCuzHBfvuCYRvB8d3dDVdz2oHVNiwdC7m4wKF1ienb1hEZNuQ",
  "key14": "4zs4LUbtBXCJ9p9XfJWVTNgo7WzcEYPgRbDpwf3yfJ5Fa8ubsNbEr5oHmhDGAaZ1cy4ujBCUVNngzSHfxbteUT65",
  "key15": "Bken1CnADojjFQrw17eBkUECfyN739FLjs2RFXmNx5wqmCpgZbnebJAbpLEv3GtYXdhEcoYXe5YqwMkJa3dY5iz",
  "key16": "3gL4PWpbj6FtpNpANVCyPEAS3Lp4EEFkrfownsgvwcCxtBbfVoEMuU2QbebUi1xWz7xX5JgTBwSwmvG9iGePnnTC",
  "key17": "3f7PnoPPJpk3iWf8wFMHE7EWjacpPFpcZnCZGqWVVuYi6Ex2e3BXdxxKBRe4kXqfYv3xgpb1tE5m92UkZn6S31km",
  "key18": "67kUeS5t3Q1xsVvTrSHyB2ZQtWuYRMjC2r4SJrUJcPb3wAXhC5td9yPqHkLFLgVV3NRN3sBi5XZ77iigP95zAfxa",
  "key19": "Xe3xVNstm3c4iYGteuhVMHDvdg5fqG51S4rTr6VRMiAWAGux51sWcU1CRnFGNySSd9Zq1pPQ7NHm79ESNxqVdgW",
  "key20": "2mUEse8jFK2yQucF7MVMWZ6cFSncDqZUKAJH8vuajLaCTEUeuAX8nzAVqNnssSpBGQknAuyY6xuq9zpNe9hdqx9W",
  "key21": "2Lhsg5NqZQATjbXEJkYaj5ci3M2nheNmTekYLNVpck9RBk7AmSgrAPxSvYv6PhChGEpgUr4qtjardsVi6iaRGwMF",
  "key22": "5LUvpiiqjcMhsGPKEVQ1tmJfL4YmEr2wfexfZJGabfgpqf5E4eD7khbPXXMZ6h48fE8DQCAYGkHqNXSVGhfjGqqD",
  "key23": "4CGkgBPcJ4QGka8TNzVMfvjhj5UbMrn35fidHEWoEtE24i1ExRg283iMbLnRDN3Z7xdeLqDb9u37VbpTAVpWtVEd",
  "key24": "VWij8kJgAPFwgmK6jXRXCYrew6W1S3s4FW7rJT8zgu23KcyjeErbQeGSScGMLs7wgPgJU8aA3SnGTfevHujJYMh",
  "key25": "2uCjgGr5F8yMzjJoVQLt3jDtkVEFaU3JR8P7UR1bUJPay8DAd43KicVeFzXChTHLjyZ4WSiSdhA6DQDQRRp74oCX",
  "key26": "3wk8PDf5vdzo1xVtGzEv6oPDTBvAB1hTpXvKandHjrpsQWaWgwW4Vw9qHwUxGX787mZxVbmNha8Qek3Z4xafDkEu",
  "key27": "4DWQ46PwHDpBGKsrUzAWbvxgts9cYR2VgC58ywvbBkdQXQshj22YhP7TURS9pHebdEG4PUmMDpgDftmtCWPqdSjs",
  "key28": "4bV2amyrhs17L8Wvk6B22XGPoykaXD53N1VHDuMLiM86Uhqj62vKdVmd4WT6sxMAwrWB46uyjj6V4PbxH8q34MLP",
  "key29": "5RdVNzHe1MH33LoPMxYz8T9LT1B2DrQSwXtZdMcy5UWVJB8Zu9bfjqy6WK13g9Xy1SduxrFednPViWkZ9mEgJi8y",
  "key30": "58jqwf8e3TUAcmUaSTypqAjudonZYn9C2PFsbqNkLtNeeQ7G4zehfnjks6PhEAdZXGRauaqYxnUBQZbRph7pLj6V",
  "key31": "qRV7S8ZiobJTBVfC3QwhprBc1yTB8aNsfYd2kbjJGS9MxETSxfkZw2cPqwA8SMpyF81JcGQL6aQvRptQohzQ3g4",
  "key32": "3ov3denvNvH7jXiPrSSuX4XTtMoWQLnPpS8hD5W7sV4s7KFF3ihih8ZYQNUWX2YAJwrwLZmacFfSFdZykdgdvgRZ",
  "key33": "55WNBBtV683ExNNZRuXWp4YMMGcPAbPe5jLFUhoyNsv9CGFR4GAczkzVyhgZX1azsCURAnSn4ikpXrnLx62kcMAS",
  "key34": "MuaKHmz39W4tck6KdTaWqwMY4kxYTscf8zdH7SniNJK1bxMFEvB4emd9C197wFxtePrTJqcdmV28Xr6AJNC2JR9",
  "key35": "3tuaF9CZLKXxhhTfwnEnfpnsTsP7KWwL1nSwAfbtSooU5YBpTSb3Yi3KQJPZhEbMiyMZZj5KpGLwuhs3SbE29iZ4",
  "key36": "5Y2Q7bKkFup1xuj48bNUViFFaf5M4tn6Mt6KVtNwSa7c1sr41kvwD6EkQzNSPkBd3UKp38BGgihr8g2wsfkVHA9y",
  "key37": "aNBozyXMJZBmJGrgjR9ZjXhju3XFbY1JuBBrTsCexG2LqRT1DZURzh4PfGPaxnN219mfQL4PqiSn3x2wfy3uhfE",
  "key38": "62KoT6QwtHy3MRKtNvQyR9YJjyfTjRXiFetTcFoDUfBpiV8kiTkJGfFJc8FJFtgYfMcNgpdxsgRRscTpZwx5CpkW",
  "key39": "2zkWj83nNTfAcdHvHTBJaDVkedzQPLuMSC1KanT5VWW9mecdhqssnLSGPhFAe4D7nG7h7W3THJcCG3hkgTeveLPW",
  "key40": "62S5Ncg86tySocrjn1ouwKgZY58ecv5wvceYzAvG7cvHjqCavPAVTRFLSU8Bom7tPQ9rF7raPBhGGyMic5NAsn8V",
  "key41": "2m5paky7ggrnzRNweFG7peSZ8NtZghnMAHxdbBoFfMTaTuc5gTmoRv5YBVipyK629URbSqeCnfvd4QH85T8PnbTZ",
  "key42": "3aPSk4rFKcdngqp9yuypg6B7Brgf64zixXo63XLN6q3zYdNioW5tSJDKpAN7mSNdYb83DpvZu67JgC8e3J7m7Pzc",
  "key43": "5oaaQdU5UsR79VeW1dNLWM7dxNuGMmCwZ1MygC8yG5gyonUvnDftEJak5Exc9eHV5CW6kdmAVVpWCg66rSCB7uQ5",
  "key44": "51AJMpMC9hYaQM11AunYqzTxo6QUb7vgzBMBzZUnBVZQ77siNLejtpG6Xqo7WtjpFFZCCNKZmvvVAzB7oe1Dnhiq",
  "key45": "4Yt5f7uPGsCStdLPenh5GZdyseihhQSyejJdMF6MUh9YRpFon3aXtmTSeLomv9QHVy7oRF8VQWYFYLBUGpDHygjh",
  "key46": "ZX1XmEMG9BDT8tmp1UaenxtpLWnetM5xAHu7kCPmYdYy9JuRCs5c2FvHMcvJA2GafwwfdJvuekW3FnMFW36m2xf",
  "key47": "3BpPCdovsfQZPJWhxpZUv8aPbGKR769oJDTwVSXKfaCYK6sJ3qEQsS4tgzsrHD73NvHKgmrFaGsjZkTVdCGi69cF",
  "key48": "586qRRXYA5hKRJbRx5AoHF3gJZ5NfhetzmSwH2KgD1bH4D83nczNsvRLFHKyciku3jnHeYdda16ArAFjSpXWTBop"
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
