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
    "3CAtc7VHotFFCybPpajHWFs7k7dx9rB3u2uS8uwLRCrk4CV9zdQfBsQZVGDsbnZB2rLoqXMWiadvpsQxnvAmogxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KddNCaewHBGr2GCnb6CTWTDKaU7jTcZWjBz4X6SbTXZb2psaFpB9dwhLYDr5iMuZ4KzMVCpxFJLgbTsjz6pdJ2z",
  "key1": "3WZXhMbRKWeBSfUZCMAjQwabMYmtrdnVCxDd27juFd2QVFdXYkKo2qH7YhDmDFw5uFkUhxGFUszf6MicfahP9Bv4",
  "key2": "4Jv9GiWpqzELopKAMip6etsNEAJtTLqEq3L5HmaufW6fX7HhBf2XZTLDedhxfyx4tGc5jzyrSKrWST8dVxChVBF",
  "key3": "64hULdcS5iWDTkuohwsWERSnKxdtHuNZDvo9ZCoSwZfrPMWpphgCtgNWohEKfU1kxgFAKsLQJ53bHnLvMG5FgkTS",
  "key4": "q9E9g3rggxU2abPWC28iK3oaLjPDvfGDMXWdRHpgxeZLnDqPQ6QVpcou5ASQTMFtGCRXbW5JaFqAXtQiNL7YLcL",
  "key5": "2E6iKWeUCQ4QtoAvaeA6q3CH1xLSMS86NbDo1hGwkaHfUuPBdg4qU7L8BmSyF8vDHWyvGZdmyKg5KrKLeeX4wuhu",
  "key6": "3sEMdss1f1MubVpVkwF2tBGcbDCo1tWCLTmuirie6J9sKtQovsPrbShQpdJFMQqvVsxL6NoNerHjHYNU6vQvCpBu",
  "key7": "2GLq3hx1ZVsRYMF5c5hK7GA6jKE1HC7m8ykhnmAo51xYddo7xBfy9e4PzSwAi458sWBnCaD7zRkKmwLKipTcj7Lo",
  "key8": "4WanHouiCSzYZnuNSprfD97uMCxa1E14ChD6eBG5mdLJdPM9dtK7kBkaBCQmDD928kbvkM229gwoxR9kJbsoCDqb",
  "key9": "2P7P1mRYY2Fxipt6dViu1T2dAzVtLCkwFaGij6u7uPsWeCZtPTripyBPeS7EtkQpHT7XiBytdVBGTPEomHjoCjSg",
  "key10": "VgYtgt9vLLg7SMuvcTmoh89iePyCDVPYBAHvEptvGsAguYktwJZ6j8UTWXwQVbTeUDdGgkwqZRz1wfaGJxrmZZs",
  "key11": "2i1qtQuEwpCbi6GDWqG7EC3ZUhHssGDHaXVp2RaZCGSpCYndZcpp2E27cEKdZ1aTVVTRxxnBSTMx8dGAuSqYsetf",
  "key12": "5GqTJ5oeqh42F4fyzq8yJUff8n2U8SGcVwntZDGuuCJx9SSiZwUua2vBjXJzy39kPBwKP2fpmKVNY3YWfs26E8Fa",
  "key13": "megag7eFTc78r7MvVeW9rehKUN9H3BpYJxairyajF7Qa7gT1Z8KuBSCjYy3xKWuL9eu7eEkoBmSwAc9phaCNh1K",
  "key14": "3XS2fkNDZKoH2bvKBqYLDiufVHcxPwyzyqQNPLboL3gRycMJLw1R9VFttcuQpFzWtrDkFtoSSqDA36VWt1xcSDoi",
  "key15": "5JYUACxWDM4weMnkUpLEdpANC6XgQ3qu2uzQ9uT5DxamEzJDYQkzirCgFsjezgEvUNkP8zdgYs6iSDKe2WVLLwJQ",
  "key16": "26mBNFVnR2KtJMBR41ia6NsDhvHe7ynGdH6LG44pkEYsmMEGKXGBqZrGageSr47yjCuZSxZ4wXD4mP3QApBNeBTf",
  "key17": "n5c4hiGinFiqZAmtGFqB162E2ReC8Z6S9MeZYnX8Ud5NEHGjRC1FRVf1sWPFxAYEnotdhHxuXuNiFDb9Kd5TD8B",
  "key18": "621LF26jFLfyasY5vuccsLSEEFggPPKUcdQk1kT4cEafNThj88zSgpyT8KMFFrF1N7F89VAnyGZdzXEHxDJDzbxc",
  "key19": "4D7giQyY1CAYGWMjr7eqShba37A4x7vv1g3b96qHfGUgz1XEqChXgKfgGEWz3madxkYr4tzDmL6FSmVZaQw2jVE2",
  "key20": "3eJxFuk7MDmpc3CQEQCNtsfMoyvcdHnfS4Y8rw44os87ynQopbEGfmPBYy3LUqxQpZ6W1erQsZ7bi4jU1HTgv4UC",
  "key21": "474hatp4fmAzxvzTP7DmU3Xkv8bcExCrsz8SKBqvKqr2LkRa8LZFDrF53ZosKK5LpVvDTRPwW2pDTAGJTThRftHW",
  "key22": "upQPWWs582P1p3b6xSUrJuYTbXFLaUyaqieHUNtijQeiiXbsHVLB4Jp2TMThbMv31PLTjBu7zNrm37dSPNifRTv",
  "key23": "fPCcsj4cnez57WaMcQvVmTftwDfiGnF7sJq5dpp8ACFrixK1wKfikf2EjszuNnu5hWngAWLYDwJHrnvHPLUgLnw",
  "key24": "4FFip31tz6xEuDVUBTud3Bgpg3ucZZoxXJeRhKy4282GZNqHGvbpoj1ckHvjoFwbYtMPdjtfr9dRCddrMBCE4JX1",
  "key25": "4GKs211RKKi47K5J5vQKUjNmAtPGkpxNesa7rF5trzSDJuWTAcS2bG8HP3yZLFxBKnAk6HiLU9TidXaPgrFBXbbX",
  "key26": "kEUmejt4W7EMrwrNpecw33gi9QZF6wLwKBRu8NZtr9HuMPgcdXZKL17u8p5NHc1jY6EzAHTqeCx4Q2LfSP4oP7j",
  "key27": "wFTq2Y5UhbM8KDdq1bAMyRnyAT59FEQfLrdUgAKWNMbnUxhrE5nsQhajad2t1oHSueAi5cMnrEQYGdYoHBRxTmk",
  "key28": "633TasY7aZEA6ba7n6J5Zb9Sxx91h49R7wS9yyTohJiFXSoUXsoQdtPw6VnNS9uk2eKzMZHMzajuWeyusZET9jBq",
  "key29": "4LTEqefynEHE4w8CXgbQJ6uXd3KfoEybmmThgXtNjy68MzDb26aYBsQCoLWZ4r2QyvDXa76U82eWMy4cCUr1b4To",
  "key30": "52wcCjSatTX5DApd7k8P8uFwz8DcxsHDuTfHAj4uNk2fjcYHTQY5fLMikLYDVdePQN2nsFPB5LhrpKcfRzj8fTbx",
  "key31": "fJ7Tq5hkkZz2gbfMCxshajMk3rAhLjBsK3HnNndxqsbok9qnAZs7QXT1sYNZz1fvpBnayenpHiYe9TVaxboSfxw",
  "key32": "5khhdBi84QUSU1GoM2BrF8iEZkjYb3xLz12Zs7KKSpQBcnLUjjeToPFvkGGNaGKJq7h6bLmCCb8Xj4aUD6NSSQvV",
  "key33": "3YoH1kkGjaR2V6eVMHkGmxmwmUBag5BgJS6kiiKvbikiQ4k5xufk2KMwUJCfDkDkJsLaBsmba9gmCL87u29xjsg3",
  "key34": "2WJJWHRWL9zDFRhdUPQcHA3cTNJPYjAcZCdB8HwNCRXYvsQ39rxbAEC8Vm3jCXt4ZNMC9XfGYUeCiF8idCjXUmiv",
  "key35": "26YkDUy4r4A9EWGKMYqidH2jpJPRoHoHBVNTRozkK2hyG1iEBERiuroxkDQtR8s3wfpJDiQwRPTVX4SigVbmprEK",
  "key36": "218h3LtvEeYEWzgvJRzSL2dUHUAoskRMSptfgRVFfpCAZsr7vJGQEbvh7EAPQKA2Dnhx2EBC7sD6mVwEykNp7JgS",
  "key37": "9RST41kkEMNvuSXh1rGK3o1wnxNEb88i161ZiGBhB5TgjPEeMbUxLeRmBFsaJoKpBDSXhsa2A4jSKgrHTS7Au99",
  "key38": "3CnW44zykEBqGww4enEtJFezNadSS8ogRfk55Qo1rQou3UEfZRbfU5CVriYLvGWeKYS5c2J6xoVwzG5tRkufia9Y",
  "key39": "5s1KShgHepZsXrAtddUrknd6KayBXbwBNp6CEYYfQZjxDRStb5toUfrL9g95oY3gzd8LWGp9V2pmFx9Yfpxgs55Z",
  "key40": "4XibqtwkuUpJFZ6Gqn2q7M7b3NqLG9joHp6FoLHMmETxSfnf59zQpf8CF7tj5GtkxYp1PEgeTepvX6dYLS9iZ89f",
  "key41": "4XM8AtmeZnLXsytEWGmha6Vo82prGGii7mSEEj4WeuumPdx2BAG4xsCB1g9eVTVBptNsogFBeNNb7X7pwiULBHCW",
  "key42": "3BAWskx8xEKJsCsoas75B2zNU3vev64L41h7fdL3USHfc46YYowicNT7tU6jQT7RDDWPSEJSMatdRx8kZBvCXgB5",
  "key43": "3SKNu4SykoBLCZ1kkksgYNBf3BbcUjNjR9YmxX7rRtD2ZxDw9iMq4jwqpi1SGETSjcWxJhmT9o7wuvorUCUrnF4C",
  "key44": "3Suzt8BvwZstaVskLAN6Z9sBEhzQXXdcu9tT8WSSjzxXncK2NZrfWV3QxJFUz1PXRxUQ8LmGy4Tq7WpgCow44ydZ",
  "key45": "2QJ7d6mxr1SXRBgzzDWvM12mYjiDTsFRqwqSmAwoZBHDCpc3pa12ttb4HCmo6J9q3qANjCX1AgbFF3i7tXfYwths",
  "key46": "3cH2RdXor1Q4ULyTg974Zouq5RWgjgmMVZhxagR2fxy9aAwuyyMZksNAiX2HDt15Vj57KtchbS2FjfPUkJPVS9jH"
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
