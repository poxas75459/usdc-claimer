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
    "5sTMpvDmcd6f312W6Dg9jjydCQudXtzdntMo3WCQsgtfzvXNg9w6y57oHzU6p9hgjBeWD83B6TPTo952LqMYun3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66M4Hy2cZLr2ewy4e5UjHyGAvsLCCcszSktBaPuAKNXSYq6PuWDc2YJVAHetAichjaH9E4A8XYUbvGiWYqFKScAU",
  "key1": "5zPd9jCEsFGLRtrQJXNHR9dntomEFMGHKR3nV8oQwMRYP2JGWiBS7fCiEFXtBGbgX5UvYZdS2o4Skt7YsavUeWaE",
  "key2": "41wTvCSX5aRxmgcFa17uaf45fxQw3FHMnzLpKHyHrRVLacfF8jAKiJnxy7c64KDsBNNek2sYzFeQkKQqmujdU8GW",
  "key3": "2irJLinTWRYBxpuApZmVrNFJf6F4j5GYPFKtgnYRBxKVsGAkExw4HjGvDm9CmdKaCA1ib9zGfQgLBtqfnRyAPyfo",
  "key4": "Xkru73H3S5kSaQaS6Zagwp9Ab7YapGzdZGVkNmWuqEtcFaiesta4FxxYRQm73qsNnpyLHSJSh7LpHsoYt6PaYoh",
  "key5": "5yL3o2PXyC8qCLN1Q8JzK2L7T9qcgmo7tmFzDap4r6k7LLAoQTsZcwpyXaURVqX45WZbRTm4N8UKqW5o7N7RWdeS",
  "key6": "5tinQzk3wStCRZftsHNy8sTExxoRAPp5Ev2qJ74ALPHmpJeMUMbPDyLY3HQPwbaDAwcAdznJEDd7Nrfp4xeg3hxb",
  "key7": "NNqi3tfEkKERcmPa1gZPPUEGxzTEBcDF3dEHY6pau5xF28TzfqxyhyBsBZXYueXtntFzKNXkz6bZbccjVFCPsTG",
  "key8": "5Fea9frT8KBHcJQKDmvN1K5ZfPZ6t1tV22ZaCMdpMQEQR9tX3TyymTz6dRpZ13ewSs57PnEKWzioMiJgZoSHgbBc",
  "key9": "32ARxXTE4wuskBvQBqT6icEzXzR9MqgPjXBtPEeBz8qBfpsMGhFoAhLb4ye4nVQSTyr2RzgqrztM7jm8vGMP62Be",
  "key10": "2i9bDrzT1zNgYzbCktpHDLLtnhJqYx7i94fyEqerngpnA6TbTXcDrn2vYa4DVUt4AEzUA2VxnnoNpdd5zHFMaXZJ",
  "key11": "26c5dhM5jbDJapKbRjgS9cmhN7AyyX3iqVgmBpBaLhUHEAWHpCCcqKEyqMGdP9Rs8AQZS6Pp1KtrzwAmXy9SBJsg",
  "key12": "jFeBPhwDNkfbbRu5PtUigTwPqAniU6APNHGKYcjJ55dobmKrW9oExYcVyvBhnNHKESY7rU4iXaARP9GaKtmQH2p",
  "key13": "3vMfRkiUy3qhmegZGwFabdfr2NQtJtxDf2VoZuUupsGNkTyTUbFcJVZKbHkf8YAi4aRU7t6w6MyHHryyme3WpXw9",
  "key14": "27H8b8EKpGU6YBZowpr36C8Y6gLrK4GBn25PA8eBqbVkG6gM2Ux59p5MrCWEWLEiEkJpxiZr81ZWkXDdsM9gfKv6",
  "key15": "4YcEdWcYFdtFZdtBuZ6y7jzYbUpBnweRv6gWpwKoLQxPgiBPZhTGWuWihRiVwistGqArsQoKcgj17oMdCdKT4Fri",
  "key16": "3EsjFxJyNSBJSNhE1UAAaGuTdyPBrV48xPX29fPgW8PV3hQPi2qwzupfJ9KBidbruXY61ptLzKrjp3TApS9py4Sx",
  "key17": "46ascXRoweycb1MtRsuzohQpWeJtjYjEncWKcaEF3BkrwzaNUob1g9NcZADbuFFkKLmodYKR5sS2qCYu4gGJfSGr",
  "key18": "6hLeWdhjF9WPSvQdSyeBSPhSkVWu84DAY5nnAuFYBajekCq9w1xYSfAFe4p8mGFGXmBBfrquD3u4hLuK513HBsU",
  "key19": "2LUxHqEmpjHHf39wfwrAQ3XBLE3dDraxkBqXYbsDhHGmnVCKzXLyBbE8cxpWv8gFQ6PfU7i6LcBsfopoE3dT7rzY",
  "key20": "5CSsHb2qMEsQXgb2VR8sZkPQj5kQR2zm6PCgyahy5vySiHYjwqhQCVCGP5Y7N1yybuNA5LkogyHWCN2x2QKrPE1A",
  "key21": "2MShX1pmjuHFcfwVgAJhfaJD7aodvdiXPAKjkkbHD3mSnd2tRXoa4kGhQUeY3ay3iNA8nRAWNEGMXfnrb6n1TV54",
  "key22": "3zbiXzHMLxUAmH5UXiYKZcMQAo8ezUKp6Bc1BX2JnypRyFvPnx9y4oMos1vLpWDWypr9KNWF2vnbRBEuu7UHBj4e",
  "key23": "CpEicTsTJmPFUrCBPuZgwaqtvFpRL6TCADZNAGNxjRyzf5kniPF4mMZc1cWrda3kzdDhq2FL1NrRgFvJvZ8Hkte",
  "key24": "26AKNCaUngw1R3HUzyWHScaoxptKauWBQWD1mmupTtUidp77bL2MVRsBHLhJkPWybczE46cqmj7chzXCh6CoJrdV",
  "key25": "kyhvWewJ9SqZBpfQxKjBx8JZiqbkUE8E6ayXsHWMDaW5h7f6Z5gT9CCxF821wfqfXZRZnVVPmFRGM85K1ZJUPDo",
  "key26": "5hAMYwZeknXMe4En5Hhzt1SwvLZLU8ohX9bVrZ2VPYNnDZGocPp1Qt9Ynw1JU1MaJqiZ6tQagKBg963aaz1XLqRq",
  "key27": "4wmZF7V4emutzk5xcgStuovznj4Rc5j3gMf9gB6S6gB2GPun9BeMHQvj3SghpGwkZjH78m16vFKBPK6goNw9RvnM",
  "key28": "PW1Wu9MWtTXdRgeNxoc2jU4FPhQjxwAao7Rv5Uw5akQbUVzP6ogS95kzLwCxsRhQDst6PdMvxysGE6oR59pC9Gg",
  "key29": "65VZLoTSTUpdfRuiRKQ1wwvTagoWVvkHhwNx7pDd19ypz8PYi2NqJFQpLJU6bJdKJStii4KukcAeW8X3iG8Ph6nA",
  "key30": "62pKxMD2oUBzfG7H5YWfcuHTVBtWbpCtcmQc3BfMwy3oz3B7m1JgQcrFqM9XySgAtuYYHZMX8R7HEnNgBWjS62hF",
  "key31": "4vMUb3nLZEYuYdaBz2w8y8DWaJieS5kj9hn2LErNQ7cdA8wk1oLw8aFBGg5JGLBJytaM5aFpSmMLSEN8Vx2WtN2s",
  "key32": "43wKyhfKrAFRfWjnhNdpFdwhMke4cVnA4fY5TcFC9RkZP3HgnUT7cc8cVK8K2RHQFyYmFoKptmkFmfqrNG6sax3x",
  "key33": "2Mo6hPuH582ku7vvvt7SLkqZEAjSZjuiLUGmhvYmD7P8EX6tAbX592CZMmnxiyb23wUr5GQ8UpzX4ABnNfBn3WQC",
  "key34": "2HEUio6ikZHnnYk2yVuTZdhh3jKXw6Dv8xbYAazWEpUw2Au2BmWwVDmdmAbbZuzM6DKRZwaW23uimenfTLdKn1Cb",
  "key35": "S5B9niTLtPY5NzFYFp7ayELm21KjNfmy8uEAmgh6GoVqJ9QQUxgotq2hZMZYy3VmRT6YMkxUibRfQrEGDcacqpf",
  "key36": "2F4rsH5y7C46rkk1ufFNT7jHMP46qiyd7fvYRhJpXPkr6KXFb4W8MBLFzt7UGGnv5f8ufjbjEBG1Lo5XUyu5wsCS",
  "key37": "fLDgzhsyNBMHHbPq63fCFRH7W62SCLDqTUxQ4Supxx41G3VEFYyob3gX6E2RvzGGrLnPvbfagQgAhU1F1FQmvRh",
  "key38": "5LcZtaGuZMahvvD9BAsihkLyvDuWrFMdLRHM7EgPQSYYZ44nuf9Nh6pbEAMKWthAQeVJtGrwEnVKfXGG32S23Rhm",
  "key39": "5gSfu6HfJjj5GLd2uBN9L2sSaaQXXuSXsex95xcVxmwb3u2eQjym4XVwMTxVfzMrGJyWoBcRfDjvoEwFthDucMGx",
  "key40": "SKfQ6pFskYK8rj8VGRcjDjod36kjYphnjknhC3w3sAM3rtjiaaWVZWtX33BcfH4aLiDjZPMB4jdCKLRZW9eR7v7",
  "key41": "3oqCVFiJ6qjcKyeiT5CiiTta7NAtk6JgtT56aeEXxduKQwmYM4c6pu1Na8P2iQioKNryLFUjNChSwLPSuAJ2ETub",
  "key42": "537SFogQ1ELLvAGMrmqVv2B4Sb3wfmRukTMByKjDKL5BjpP83mPtr73y3sCAnc3NcsBEFf3kSi6MK5uTHVE2J6ES"
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
