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
    "47M4wvHo6UcExBwrYLeLYU9EbUWughNqePERF6aiKdnUNXH5h8jX4gy5abj7Vkp91br3DB62Z7BRnGtjULfVpuo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PN19ULQYn1qjJZa3zLJBBGAMpd5FoS5vJSRUmLaKDXVEfTxERMRWmtuSFrQ28umiS19zxEsBKxJEMieTwA6MQ1x",
  "key1": "5TuFFh1SX3uQjJGiriHsq7oLmwcab4LC4o5cxD59N6opPU4SxUSm2gQxQASmu6rdufw1pNyLoBJjMUwLEybohExn",
  "key2": "292ABBDbXh4oZQGGp3Wk5E86bPGa8yjsyNRzufK4NTbHmanpteUYQ5HvodJayRavGFRMpS9CcHFYgTC88NmPaCFV",
  "key3": "2wSokkF6SA53ygWza33bmfMXo7zb3j8EVkVzSmP2EYQFT3AHwXSSuVod7Jx5WZ1krCiqUFJm6nqkNCCnBWWdL3Z2",
  "key4": "3wpJupKTEUSPFmpYb8ZYoVS5AzXinxM5VHKbPbzhNExpeDZXLPeNn7JMXsiqnjLdfcNHJpUYhUkbTCkTP5ExfzUK",
  "key5": "2BGkwoxJpvhKrFbmkhY6hbVFBtpB8ixmoVRpvYqDqkZ2FReovHkYVmhyXzrvpnWRdASra8NnxFo3Ajouo3cBN76Z",
  "key6": "tAJnu9qBQ87HxC8L3ZaigNhyxjkRPeAViwyYxJNQFW8BTHtz7UPEX3D5yXMDyxCRLfgdxF4y9295fydf2cC4F5f",
  "key7": "24sLHEupsxqLXA73iQ5NEvnqDKsPVBUgZgo2Y6qwj4G7QfyRtNxg5wUwc9UYeHMzthZgaSWHw2jgnzuMibH9WLwS",
  "key8": "AjLs54eJ8Gbfg7tckL1vwD5iFG4cPr5uNwcouiUy8eFpVzkcPaouDwjrfTSgnjUP3pJ9zxtjcSeJKAoEsbzZHBU",
  "key9": "2u2XYccZteVGbQWy9a6x3ybpkj3qsY3ExRNakjTzsudidFyt6cEeEQMkJ4nTYkbJfaRpEdp5wLNDQrdFvktvRpYh",
  "key10": "5yorsaM46dRBWGtSYB7d4iPSyavGrek7edzgpKEtmXCmef4uKMbFFGSKh5AR6AtLbALc79wYt2S54fFf7de3xKSr",
  "key11": "41UmWNfbRwaK4jnA13DBjNiBrLm6KVJ5NtRVuWB6cjYRqVrHMg68P55wWqFwMVwB1KQi6P7wBHoVcXrPr7AeurfL",
  "key12": "4qT5e5Qm2xY4W2RCQ4XHLPQzN3jgUDHiRfbhNbffxF2x4r5tj2Ycc6BEfv9cyCHi53Pyg41zGHjjk72AW7naNHHR",
  "key13": "2nb9gTp2nVPcpUms3176iJpHPEieDsS2SQdLKbX7DYDqJ1RRGXeKhPSyuFWeCNUJ9dQuEhvfFfchktSx85EBFGuV",
  "key14": "5UcdCHu2FiNCFJUdCqbcubMf2n79P7YYqkmgaiVSQUW1bdKr2ctbyQ1P4szo5A1NZw7gceVWpMJLw3XTP3sb8S1M",
  "key15": "3bHy3uWiKYHLZqtq1twXTwPfnbY8cmmuagbtKbhggAEFRgPbWjN1Qkbfg2dfC7izYCravvHcUDi1pSzioYue4JvS",
  "key16": "41Dp2VdKgWnTs1skvDS8YLHq9dbFAQcSjJvV64Behg3idugX42LVVpx3eQFPn5KGBN2NvDXddiydM7Bfqtj3mzVo",
  "key17": "54733aeX3ho2jYWdLMsvrTJfEwPoK621Wf1HXLDzRCqaZHTXJZ3usDMsw2UU1Jbjh5fLriRurt6sajyXuFirfPWm",
  "key18": "2Hn5Kvgia1rPZiA4t2s1v2aZH6PPBqSusQtBjQVyrCgntZ3AWDm5vaAW2rmQw77phiTKGZJLuhs2TqEZJJvgj69R",
  "key19": "3kXMyLFH3sf1gfSaGd1JbEmoF6vyQkHSWK7o2Df9tv5fPyD867hqNiiE3trrgqKCNWFkkEHiZCET1fshdWseKwm",
  "key20": "CSTuTpCCTstTQz9WDt5pvUtisZDX847v1vwDG4UEp5G82vc8ewPBjkBNq2EQSAddUN8f1wmM4udwsopRnEXLJP4",
  "key21": "5WTvFrakuigV5fyn5jZLhwQvFEppWCpzveedS1ARwWuCkegXBTDrwqsTJXUd9wh75RQjLeQLsfuv5yr1FJT7TkZx",
  "key22": "62pBQsARz7oEXden3ALdKs1UuKERr8suhxcPhR6dfamiMxLgMcYVbawS8Fg5vfp2pC8gLmi4gRXcwrkcmokqiyyu",
  "key23": "4cVFSXeHXNKSzpTNzA7urbwnvKLpcbNona7WoLjzUhstmKGDN36bwefnD6qPL4gt3WpA9yUxSab7rT7nhvedAp9j",
  "key24": "2T6gB4WT3uAKsRsyEkNajpAv7yxwqxkheqUfLA6jJF29D2tkqxiHbB4V5qVfPgtPA6d8d9ZtUeA4jUzcpbwENKXC",
  "key25": "3g6yzVXGomimgSepXhGDVzEP6TdwF1wvrShsUvVsyqcWJSEE9n7fH9jVMi55ymBAb8iQY6jqZrr4a1pqVdjQiMD3",
  "key26": "3gy3ec46BaVPet6gsTLu44pPMQbDPbRpHdABnmeTLto6TGy5bwaQgFwLYUwuW8tFtHV8ouDyEbkZqgabiVrxaaCe",
  "key27": "3vGjVqgprtD1ANBf2XVwgP9V6vn61zvKP9cfCxCEvzzU3cRmReEsHnkMPAVoBYF9hnb1hsHbQxxeuXsa7sbi9S1b",
  "key28": "2KRWMB18SMqd2Guwp9LRzxM2K1is1j8HWfFcjDk12TyacCBF1zTpEe4ZCo9sFGk6tWUY2coL7zPM1zdaouvYCuPu",
  "key29": "61xdZ5AeuPdSQpDHfMEnydhtxozpPyUJm9Rs2g7DnGGhGT8FaZVb2L9GADDi7GpKqKADFoSJLe622kTdgT1BYbmV",
  "key30": "2KzHWSqCYpuxitRexT3yPK9MBq9BrtzMGSfrxUZYpaghrDqS68dfhAfuP732DhP9zsrWTboZxRGfJdFNzcvD1x7v",
  "key31": "4M6UWjPBudmZhBwoH9BV2sHZW4ruFTWcbZMJxAdsf1RWfCT9bYjnE6gShG3oGBNRYQwrseaTDa347SsSvTLPjoDQ",
  "key32": "2twYPN66j47MKx935mFG3KJSmm4wsisvd7N3WNhPYxMZdiAJg1Ny8GhnfWaxfrqDDZ8Cuwxq1e5hThPDJBTNLVkY"
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
