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
    "598TtTg3JeQxZiTWeK9tS9Ptja8BM1nMcmZiMHNhVdmjk7TtZvYbg6LP9YFHkBTERHv2uPaaJHLoSwB72jmg9QtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUh98n1g6SKYbxG3UtkdBxjqwpG8ABdGAH5o4TNxjNNeydnpc1gpxdsnWKr7Ziw85AAEqowq8r2NwxYTKtsSpaG",
  "key1": "5eFFvXhUQkPqjB4xLv19Mndq4x6dMqEjo29rgvQKDqWBYMoENNfJ1Cjt5XRdy8kniwxDVsmYy69Qfx1n8b9Lw4Eg",
  "key2": "386PBTQvFCS6gNFQ4rh11wf9mUZVwCuL5KGDvXhwHeUy4rmMdKeFx4WDWuCWsP1NRqXC7jjj8CJCN3RUgEnjdaB5",
  "key3": "5brGuKSSjDout5LfMMygksMTXxZHppFPJPfZt8mQggMSUBchveGxWkTdAgSCDAcN3t7NHWfjd6KgqNGb8CuqCe7s",
  "key4": "3u5Naqe5we8S8u9fikzgH3t4iYoKDGcXoUUo7UHzxZRQfchL31ycSGE1JbUrfYdSU1izNSYJ33ZFepGo9L53LDxP",
  "key5": "53iHH6HEs3zgUmNzNAq696k6DRWJ7ykXJhCQ9gN8JRaSGMpbnkEucMxXzDUcLhFGJcanxm9JRYmhvXZ8DxwrxLcK",
  "key6": "8qw68DngKpY7ng7nXrjrwhtVV9AeRRfXvFXU4FeFTCUL6KFNsuuW1LFi12pCiU6gRYhgJtHSba5PhsY7TYuXnwQ",
  "key7": "3aNs4pYjUt9soRRcEnkd4yeG1LBSdhWBcKR7XPwC8K5gWXneBdDeL1MhY9AjuLh9Y4wmK3KbL5toa1YCLdz9pVSB",
  "key8": "2RrEW5qs2oBCDMhR9bHaJC9XKpixGSMnARRLH9DmzLyS4rp9vtk3Ru83pAasig1esKAX5ZWHUgp4siioRHQ2aWdB",
  "key9": "2QvqsPS4HzW9ochnDp2y1z5t1Gxe1MBBXJX32STGFPYauDdgVHcEcWgD5gYCgTsqjRRjqDdrgZuWWGL2T9vAZp8T",
  "key10": "59mnFxLDa7F7KRPtJdnF2ciWBqfu3z8hqQLEa8TDy8qWLc2LzXzBsGyjEn7CbrWbb6XpjJ1q5vUmYkLnaWcQPxbM",
  "key11": "4ytQ6utFPUenoiv5CPUnWGxAyc3nKK5Pve36QgqeB7dJLf8Yf6VuAjXyeC8RFLZr85fUWsqxg9h9gzqNGub9gb94",
  "key12": "3t76amw2GJVExCUAVRyG882ALYsh1wWzck71FTkc1eYLfhtdA4C8H74vCetyvmAK8a6kKb3VGgGbbTMazDydTvQK",
  "key13": "474VZwTceYPGJMS93ffFhbPp8kYn1GzexPUQdRc98QhyCnRs1BAdLKrR19fbDqR6THPT2qYA1Ai2dcj9JM9WsvuM",
  "key14": "34gHvcwQ318jUYVJ1nG8Q6fGGP6zaVYNUr2QN9k2aQnPEGF54k58CMuG31NC1cgqhzikErNZr7CkJcBMHzMNgHE1",
  "key15": "TsFYXYuNRV7QHkX9drwRcBgN4EFCanQUXD58dbz4UyT6Lf6VoGjxco8vDphiJAVzH8CQj3Z5iZmQwTWcGghrWNe",
  "key16": "yY7ws99jBRVY82jevcz8sukVAWF8Nxre5cvCh6Qp3EDMnk6tRKSHRzhorVLyGpJGH18hdmPf4z38qsbak2yaWMM",
  "key17": "5tF62ktmH9fFCZJA1AzgnPXwU5R2A1CtQVDY3yMN3LRSkmvi6TwZtuPGGYwJzPknSvcfpZaMTAJ5bDD6QNPbNQWV",
  "key18": "5XjhRwbC6Av1aFc2iwxBvjg2Bvpo7sUNTW8UJDVu9FXnftwGkP1ffLDNyQrLWxK9kN6d91oDeP9ysaEpTG2RaXPF",
  "key19": "5pp62J9TSc2VTaGtobWjNyH2wBitiXwxmiyQnvtc3AD5AQWojJjf2o7rWa7Bt7pCQw5JY7qTk24oi6n4nAxQB4jV",
  "key20": "42j7Vr2z4UFvEeXfJvemAi5t7vqa1B2YuzFWbLDJA1YaFZeJUE4qFoBVop8VzAez4Yv7d7tRpqizFdvoxzGzNrHd",
  "key21": "Rk35Uq3tPPRYzVQ5KF6coHoEHLdfeciR5HesMZvwFZzgah47DAFXLV67n98nNS6c1KUy1EVUNvz5tUZgXV5n3vk",
  "key22": "5mBxk7eaf3LuxJAbBHVXfMpnFX9dgbAUBq61hX6s1VfmSVpqCarydrxttudWmZgWEQNAv9DuEG2PwwWp4hynap58",
  "key23": "5FYRf1WiB7bFTTRqdVYEyvrG3QLLERXizj1bUsS2oixgjRCGE2izYvvr2v8ZVWW2SsQGcEPssUPWrpVKSndJce5H",
  "key24": "2FxLknNh9FL2TdebMKUGMaj5GefSw3eJZxszbVJMPEfrD1hRHpnjrQWByNj1vG1818QnwoienjPPwcUicMeqatUr",
  "key25": "3yQkw9H1pAJsSQ7pZKRNXUZsTNEbapEW8FhAgRqiEcXk6VSd2v9bNydcvkeUufWAQs7DxGRPz1LHjiQ8v5BPvWor",
  "key26": "3z9dgSBxHGFLaFpW1LmNaF1BbMosVs6oBYzKEswZyvxaGxfpY2d8fLovKfDMSLLzoQXJMc4KAayfpiVcpowvAp42",
  "key27": "3Lqvd5LsCW5aGnjBkMhEFKLrXKd8U87xEthERB5fEvgFPEDj7Qq7w5PnU3q4idz6ExnrGqnDnMgLuS8tPTjgBZT",
  "key28": "4Es7xneAcv6QbnpFtoezsK7CcJNm4VQKjesNGcxqQeUvGH67sDHocMN9ywzoiwaiQN2aoyDWGSk6YzJZ16Z1nn7Q",
  "key29": "3P7Gu6EM7wS2HNDNTW2kBn6866F77GCb1Nkq2xkybFnvP3pDYi2McyTVe5SCvL81RAE6xqRGubLSXqYPor5KDnXg",
  "key30": "5zi9TpWj2dQxnAAhn2nw1j2w99LePDpvcd72bMscuwfj5gtYDkJaCFc2HbVpJKHrACBsPUVLXNhxgnvPNFJp5iDj",
  "key31": "2XxwgVCXsurh38fJGbcw1Ux7xHfS6zozJpBSTY1UdrnWwshFdCxKEKHL78q2CtYGGWmXGkDBK9UKDRPXGfyDeqhi",
  "key32": "3wLhyZPmm1doqcqLYoynbGjwAizUMt3k5VaGafYZ8o6i9DoYSpfaq57WNKjedHNY3PGMEKfYVVU7AUtvryk6BM8J",
  "key33": "3PRKe4oivjXbtNktGx83uXznx9u2g8naZL3kGKXMsQYL2RJhE8EjvBe5BFk5snXwHcqsRP1xiqFCSMLL4cpMsYKQ",
  "key34": "2xWutdSqopu2MoLUSzb95XrmCgNKyFq2VpJVQoDW2WwoFd5bzaumnMmtf1iBLtF1qAvMop6FTEEc2DMELkXWANUM",
  "key35": "HiGXbCCpLw4CiD48in95Gbk113RSVreW54V58Ef5tvXkX52VgpcScWySbGQxpPshauvaW7EZSiX7AELYu9CAWb3",
  "key36": "63sHrnc5yNeUPfYD14fdyxWDpiYxY9TEb19PQJJMNKjWyzuWjLzFSFKKqFSNodKP6XwdiCBPMfzjjffjcdLywJBa",
  "key37": "2fKk3NS6mAzPdG4e9r2bvnMf75bcpW2gdnqE6yqg6SqRyUEavUQfTj3gdrtRCU3xDRAKY2kKTfeMtYuXuQ8iV9Nu",
  "key38": "5qY6tHscnh7Gw38RPcex1WcsckV3n51YQA3ZJA3qdciw8RFv4CXjDTvxsHuhTiuLjf4r7vNh7PrVAdnm7dV69281"
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
