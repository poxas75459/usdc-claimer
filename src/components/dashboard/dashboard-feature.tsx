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
    "55xgZrViZjmuxS5CGR2NjFEurroqPXa4LysHW3zde9Htzp533M5piZEPNqbZACVFTYnsEb9ZWBJZ7Q3amsvzqc6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cjfwamcv6aznAoor8dT9LtJQnrhWH7zgdRQHtxdGR6HLPe95JiFZmJmHtaYVHzqjxVmdaTicT3RSczqpJTUZuAe",
  "key1": "4hNgsTMbh5e1oQpdhsCQq8mN2WXsVsU3jYPaAgQsNyf7BRmKmmFF3uuFUMC3Z2dNDePsL2ddhMjbJ2dHmK54xuiu",
  "key2": "4hgC6Nh7YUxEQtRPmhPXGD5Mx55KUksAKjKxe41H4785fWg3jz41dpXjtCY6EF9KNbyWQCtyVup19tHGpzXJPg4Y",
  "key3": "3o778yQ4A5MS4udAAUoSoGeJT2yKfKZpQupFiTjQNhwSuQmL9mKn6jHaF35kXUrE12voq8BsRazNo4zZQ8rdMRwf",
  "key4": "MmfJxAA25r3uSnhaB4eypwceRXip581MGBbUU7vfiFkVgyUAFJiHTrDwL9Y1CmGEHxDd4QrtJBvTpZL57Hkpjzi",
  "key5": "64KrrXBouSH8CTaJY2s7tHqiKrLpgYH7yU9FrSwCn1sYLcjbdE8Mn4jYQ6p9VqFVH2dTtRjCb7zTyp9ZxDw3EWaH",
  "key6": "2F3VKJfeRmf8qkaKsf2FG9T2z4i2eM4uoE7SwP26ex2voKwoYZJeuUveY9trCsmoQvFUXKYqGBAvJRxVvG1UfHXD",
  "key7": "P28JF8TGCwNXZxogS4LTKuGpQciF184wj252snQW3CZ14CwL3VzbRw6Ymbmudfa4wwN24jx2pdi6TsZMbbLLwd3",
  "key8": "4LPhpFNRvizFLDmoyhe2edtVG1k7HwM9XidWAcLSbWX8mJzuWzfa4H85mFdaFrBDD8voorAZLdBZZrgd9Bya1tqv",
  "key9": "66fnqd4cVRQN8y7NbVrH98Mga1NhUwnHW1p24YidoScp4ErdY6vQ1FUz3Qp8jPDwTz1tRhLSr7P994kZB1cfbevF",
  "key10": "3VYf6xy4eBb5s3nUwKQS3f2dgG8mEY1kgdSfKYNYDfr9DHREaNCCcVE3A1cdgY5YgGPCpe36LKiqHtd4F6FCWo85",
  "key11": "P2rKfEhN7hnUuncWSDXAnGgRTRfBuZaVtrrpcUUSdMEBMfaAhpAPgnnJH7RBrsYgYVhjZoEouiWbZkgBR7NBe7D",
  "key12": "66kL6KKsrA11Pd3XbFyPWFcUdiwDK9DxmZ9dUyjJugwGuG9RVka325KTnkfdWTDwA1K9FDiUgSRA9fv9xewvKSpL",
  "key13": "3ceJfni79ziHNJMBHS5c6MbZSsXNGv26vtosQBuqE6gkRXVH8dqvrgMNeDUNjUK95KnrCADPTZHnUaU7AKW551Zs",
  "key14": "pE4Tpvyue3zRh7h4zhgUzvsFHuqf6uoL18K2qAUbMdvZdCx8gYhhA38C8Rc5fgdjJHG4KfMWu6tW944obLnqrvX",
  "key15": "4GDFq97UMrFyLQu35Dojvms2sKMJdE6BhUxe6yuwf4HrdZGQt4A2dMBtWQ4ZEeDeKgYQnYZVwdUfSBXeg4tngYQv",
  "key16": "5tmXvC5xjH2aUAyG9cNPEVX4ffsNTNMAuMjNyL6T5rVqean9YRXjGGV96CgQ4VsJnGm8dDfrT41CqMaA1Saapsbv",
  "key17": "3V6w2HmNrMjaxfk7VoRiVrn9wQpnQacGqYq3GkKa9hLtZAh4vyQaDTZQcAWQv9hXEkz4B4Z9VoviHzavDg6sx31y",
  "key18": "27io2jfiJpoLDtZkAs9hPGepfJMxDaGP9dpAVN5oQQ7uhobXFDtjw2wchAs1QyLHnShipd4swdGBWYdmg7i3B9ju",
  "key19": "5jtHSddBkr7AK5TSchCQK5RF9w6496AQjwtCKy8XfYCkTkibP7teQj7UnCGLptWnWrUor7Kht6wUJc4JHadUronK",
  "key20": "3TrsBfjZsbJvRke1yD4Ce8VeWADqyLbYJERXKB7DaVtF3eV1pFUpnJKcLiYghRjkr47j3xvWwtZJ3SBStqikTEFi",
  "key21": "3MLip521XK2eAKf1YL1BtoTVaDMpzK1RfZcGCqkutRRhEAYJQnK1NEBFjwgbVktyM1EJuDtjuyBt248JUh4Kc32U",
  "key22": "4Eq62Lw3H4xSCgTS9jf8R19req2nkF9yzjHp1rGiq7GcLrsEkJaVkMMiJsyW9jQsQ8iioV39HQLiQuwqas47Djmv",
  "key23": "48ecJDt1ym55Aa1hVzkZLcoWjjqme3FeXvJXnR2mJ2gptr23CM3ucmH5BLWj5GCm3QXpZqNExQbrJ3j4pdrSUhWi",
  "key24": "xNLnuRMMKvGC8K1pTo9f9ckVZ58YysvdNKvFVi2tvZeS5xfMjQwZNyYMRy35NSnK7Py6u5bZrQqWcB9ggUgMdmw",
  "key25": "3optDMXBXsfVp7pKodq5roek9cAB1esrcUXCpTHhjn9TdmucMazt6MZkJVud9cxZExZ6uJHMLFDJreyCZihd1kVZ",
  "key26": "4q5f8xguuWaXJ7Y2TYjgP45PLkWER4hu19DJFZvqPHW4tF8Dx8RvyAr1JKL3RKT8XjhD2BDzwcwmGdRgTpNmKaWw",
  "key27": "3MvdNEZ59qa9Wp7C1BiAqbRrQq4bt8nRpGb26oXdtZwMkPcftF7fi97RDKRjE8EoFRHjPVWd4EGKZvquzwV2PU9Y",
  "key28": "4EXoXuNe3M4tJnugPaoiV1eoiWH6A1iLM355xYg4hbmwY5vzvuhuALZiPX5azcjWZDw3dFPA1JYLesnCimqG6iqD",
  "key29": "5Aadu3c8qWn5Jphcy1dU6CMAjsycT9nzpz1ZD4Azmgv4Lb4wXc4dnra6pTuNFbG9zm6WTsw3a6PL3BdPCPTrZm4n",
  "key30": "5MNL5fz5aQmnF4f3fj7mPthdGTsrXuqzu7ZnQj27CUoAmWv8kNmdG1oPwexVz4PuRgiVVwZeNbc3bZgtR9z94Yu2",
  "key31": "t7fphjn4QqXtQpU36WJTerMmDAaLgMmmrXQThxidpmN1byajPyxLPibPv5fcfxXbbWHWuHJimd7fPvWodvwBRt6",
  "key32": "3ciRBB3r5RH5iVt758Puvq5VGA1vVqcWm1hmgCMcei6nb72KQzstzbcTmteKNkiRw8sA4vHrdPCUZzCdB3BqEF4S",
  "key33": "2NDZbf4LcB8MyS2KX3mVgwUPwu3efTKp1uaHzvn8rSA4oC53LPXFzYuU3ZRMaSTyX9rpYsXyj539eteU2oyQPu1A",
  "key34": "5pP3VozwUg2XytLRhq7Gam1ZKTVFibAwW6vGzMjpX5BnfVtyJ8aX4hFEDezXLFzijBSRmZnugp5YM71kvnrd1wJM",
  "key35": "4Sr51Gf7CuDCvFuCfsaa6qyktNAYiWsoJ4Pro4TXQv2etRHu1w5miar8SE1uN6bTZQfhSkDSMhhoDhfDm1wFMsom",
  "key36": "4zmqaD8uw4AkFokU94Z6CU9SZw9bdJ7F6gW3bmBKTe4cb7izyzByHado1nZk1b3V55Yz2Vt4VVh1x5GcQvBurvBU",
  "key37": "2CLsY6eJYtxGtMubZFRWL7GtXR4CxkoomWhvuoaRFWdEeLK9iQowfW1Rt7W1cdWjyVGJ2ebKvxvEETuNjrwse18L"
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
