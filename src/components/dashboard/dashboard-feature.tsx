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
    "F2zmTqiioX7UkQWQSW8uoap6hc3DHv9gBESS5KwjWhHbdQpWvPZF2vAauvXWAS5NbmWHHUzRMxxymPgEeWoCuYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZZKKETPXGAbxqW8nz15m4z1W42uWCdnh8e6pfZNf4KxGSbGb2ppNiKbRSZAxejUPJTBfXsmwdCAiZFmaUqeYY2v",
  "key1": "518cskeA5FX4WobKvdB1uVhFMoj8hrchiXqJo741gvFqAUNjp7eqspabHoKXrdBeHGQedVSXgARk6CVyiAPcwijL",
  "key2": "jKAkocQVp1EpHrzdhxgfw4q4VFcoboNHv9JY122nYzyZTUKt1RQPHoQy23Y5foAcXWKcHMyCRWK4HBhdp9roVBE",
  "key3": "218FeGnEM3nm5f12zS8P4wqAh13rFxihnH9c1cFYmboWzkEvMfs5XwG24BDLPpEmiJfbWaAx8o5PjpHQAEnrw9r7",
  "key4": "3ZxzMtwFUcDYm8c377gdiQSu6zn35skGQ8CfLzD3oyTBqt3JKvh9CDy1oj1ag3PX9gtHQKiMBpuVwfjr2pPBHPeR",
  "key5": "5fKhkd24tqdwQxuzh8ceGpYqP5rEps4rKJYh4LhQTZ5iD3Xau5bbTZUPTdWoq86SJ1W3Vz42uaBtoj9bhZnG3SWL",
  "key6": "2LqPR3UbDD7mCJ8vGqTDogH9J39L4CsDUb9VXXmP1bjEqsQy2RXvCLEoayhs9WezH1V5BJ81PxcKGE2bMqDSoVB4",
  "key7": "2BRxSWGcinSnhWKLmzrahes5oNbqDHSxPW7baFzh2Hjkw4WKyhXArsmsxK95U2rKy6tsUz26iCmHy176yq549GUi",
  "key8": "PRsxvTD7JC3nSJdrajWbJHA5v542d71sAnJRf2eqFrQfWCa11nCNLEsgAbUxVWvQy2XRR7mCjirozC12EYx9aNt",
  "key9": "2YJi98Hxy7FjrgpYCgP9ntaARyeb35fs7QyNBDFnSxxd7fdKuLaNgvSnGXhT6Qoxsm7QL7xhVGrL2z5q6rdg16B1",
  "key10": "3YaKeYhVMC9P3eYyMRVzwKhMroi8cT4wshcWRAj5ef42apmK7rBbMRnLsK45TPrH1BC5pThSZCWB6XKksXwyH85c",
  "key11": "GmvmkBvbhAyQN5aUcsaWzatFdKdipjzs3jvkr3Dj4EnagH2tCtPpPypDXPUR6xL9WAmm6eMnoc6myK9HMrcoKEL",
  "key12": "mV6p2xME8WVacY933r7QiLdH4zcb8RcJTDDcvtcgR3BF8VJLFAcaTMgczzn3feP8CVcY5EMXn2REYSirWuzC55T",
  "key13": "3SgLUe38tUhAPHEyBiVbmR8dcdFcFdZFzPm22ofWz5YXTBHihSkfCjUHnD9P6kpZduqf76bn4ZNb3adx5fZ4aaoD",
  "key14": "34PMCXRtj3DYVe4e5hfQmBjq27GT1hUjvy9BXnPqivUr62no3UiQu7ZrpScgmWbaf7VUjWMbGNRZBhmkd6H9zRuQ",
  "key15": "3gb5ogrXvcLCbdGjjBeVj55DKbxG85BrfCsHSpjauMGtuHEwfJQiD2Qs6zxCyg956ksk9dtLug8iy6D2vGvtMgN9",
  "key16": "4dUXRUqXDSyYFN6HdDZegbew5WxaNQa24fJg788dQt5ojHppk91yaPp9m2i1H19ywQy4TVWVqXpZVcdfLr98V5Jp",
  "key17": "snHUv2CWdKZ4EwascX9gRDEWyBvFjvaZwieVxx6qjickgUw1vp7hJLhcbBi1Gj1veFXpjFaiAQZKQonGtZHxEE8",
  "key18": "aw9CUuWUkLUK7WQxPXp2prNjagrFjbRKr6N83HpnUu2w2E3T7Yy1zUDMJtce1Ze6RHFbc1yYBhL8QZNHNyNtunt",
  "key19": "2QKZgzKAXFLVX842o83vSqu9cTG1nQESifyQY3akGbAPc4BrrqGiKLxtXug3EVQqXNfaVsKKfUjNqrtkxYufKA9a",
  "key20": "cLCn3F7DGVeiXUxh659fb1P9y45brfbCQX8CcagwLuNf5PFZjxzDk3WA81s12NhUizyM3F2cr9fZusLSx8XEXqy",
  "key21": "3fx6ZWz329fFeqWmHJxWcuhQiQT53W7tkQc6VaUz6KbyRk4ue48D6Uq5RSpDZ35jqPowrNNZcuBZdVkAydSYKyAJ",
  "key22": "121cMuFwVrgYJKz9wvphbkR2iqvtYuerhrY9zaGZw2e3VqKEuEj6gyXoUonjd6N4uXDUJautKb4RV9euVfzrWWnH",
  "key23": "5w5caC3bQdpFbjgcV6mz7aVKQtMjpQtAAqNAKsPU4MdYTFfFe8UoWUHfduUXWEFNstfG2JMcifxiCJVCLVxf5T4k",
  "key24": "2BuLZznSUKE1MnA7w6JUxJPF4Z5AZg2teesr6GTB6NV9FdhpNR4owqVThYy3ny45XCQsQTJ9x8X1wZCQLaSQCNze",
  "key25": "3WnzQJxZbbmSAAVeAKjN58Dop3NzNUTNdGjFHUanQ4L2kuE6P9QvbVDGUj4L6J6dBcSNtk7K9tjhPTkZt5B6ow9m",
  "key26": "5fAe3nyLCRfbc1yVmmUSC74texPY688QBfUiLe5m4g3qM7yTLuDTHUMP5jZiW2TpChLRWgrhTTSGMgWKqwv1XEgW",
  "key27": "4bkVZCqur6ansFGq8NsVYSVHJjVJvHTYNNbJB9FPE3YiFzx571vSvm1NvrjHbKqRuzZuP2NXNh76uTMtmWGqLAsz",
  "key28": "cz8sVraA1g6WaNuZAGz4pZSoQA77XzE4io7X8Ec6KJiNXa9Nk2FhTuBabE7J6d4dszN6vN3zAJ5WrNjpXuNTyMz",
  "key29": "5YTRp2ansAWVZCbFbTjvADstPhyqmoGrvkRvjv8yBKdsvFvrwpL1pn3jD2atwbRf5fAh3GRGAv2EPyKJVorUTk3",
  "key30": "2f4Bj5SC3HNSwGzEukJcatuABAw7oAMSTyRXqefZjxcwKjrvSDwrL59eHvqa6nvDvmzPz4feYxPeer1FL6PDEdp",
  "key31": "KdJNFkh1C72DikGFWsDYEBem6ep9drfnbeavEhW7gsmJhqcoEH2xCsWYMz9vS4UDKbEhXDMvoPrUm5yW4bqiQXH",
  "key32": "3aTY8aohS68KV85YVmCjpyHVj4W5gJ85qXZEW6Xi9ab9RwSVVAgYTVh81FVTcLTWcSJHMbtUs4iAKZLHcyvvxQ6S",
  "key33": "QDssa4D26WCHQ4mTxzf2XPrwc6aQSad8Wacna666r2WvWtE8wMwcBkMbfDghDhr4eaASFPvTo9K3h8Bv8ncN9v8",
  "key34": "4P5Z9pwLHkuVoS5ahmXZtCAFyfqEhwy8ohKZiDLvSCmPVBdHAMDHsB2V51h1tJ6u6U5W3wKQtrWBQq2GwN8xKLuT",
  "key35": "4gNY4isVgKz9oriWSe5yFjKj6TVr1dWiPRzck3yd8hKBj92ZTQPo5iWtyfALW96b66zE6VzWkURUn9iD8c6s4sBZ",
  "key36": "2iVEgNbjKxyxN6Q77bpXTf8D9mxSHEGicnjT13eoeDq8LEj7ToXJFko5czdTHfyr5hb4D7MN37XkqfcHwNBGmvcm",
  "key37": "toyEFfbk7kVUgLC3J1Q3G2icJuBaDiEHqmh8iHsMRweu2w2cJw6X4fj9coXi9LoYB4ZezPdrjM4hGNoNvtJ4U4M",
  "key38": "5fVbsZ4HMifJejVWvn5oAb8QS6JakaShcBufFwQNkyHWw1hpj3HeNZk4sw7YcVtUKJCLgHL9g3aA2MSss7XbVuvA",
  "key39": "LLj5rD2owckwpCHnRM2mQ2a9akYacnUsNaMqVP8JPEiMG3MS2hzAAhV8Xmw7w3MZa4KGUbF3ENamfQehuVJ6VKm",
  "key40": "2VBFHthoVvhrs159Cy2u6cErz1WQ9y6m7jdtBV5e3CNn2TYy58Y1n6i9c7QDkUUUQ3uLPAhWESA18whT2gWoehDm",
  "key41": "4iksfRz81z145bLGCKNm1FFqTQCKi5WdvjqSB9JWmoc3hfiZSHiNLVmFD2ac4m5uFJjL2FzitcG6ZjdL7qp1i1fW",
  "key42": "5aft7m5GQCjUWMjg5xfs7yowtPWBctPvn8TR6G1eraW4hW9mcntruPMxyD6hSCdQJ94dy1SKnd6WtUcEbZp5PFpL",
  "key43": "Gc9prRevnrPVW181W7LvYkfyvruTgFR9VfKxBYz9occJQKTLaZzsGQLiQ3jmvpDfxx4iHSDixnSMpdcLe2T4Shx",
  "key44": "vkQpsazWTGZeCd4kBGvHjFrQFsAcaAj55p7Yk8ZnHjRafxoJ874oCHnL4E2pUXmUHeMAZRMRdoVny5dqSLzMhtv",
  "key45": "S4m7esJkr37X66uAsoVp8LXAekYDi3KFPMnrgajYX4bQTFy4KFSwkDNXjizYmcnjEVMja2wYbK4BapecxZVz8ef",
  "key46": "2bgmgftqibnLUZunXx1ZPpY1bdLy9NYETTzn2uQhRCEzx11GRGgSA5EfFRKfkGQoZguWcbUo7tPDvbQfeVWTeuSN",
  "key47": "5Hgqjc6FpVPE9dWXfL1ERqJonBpRvzzs6kDi3M9s7v9DqxegyzHf7ePyGqitFgFeCag6ad6cjxfPPHufoor8BiGX",
  "key48": "2X7DGaGYgA62ZWmLLvGvKHKZD2kdVNan5Tv9yNb3dppAsh19SxidWtx5nF7LjFLX6F9zAkxpCMFwmkqHvW26Y272",
  "key49": "nFcngV5wJzvrRPQMzKiTakYXygpLEa6vQk5An8pxGiHdVpumku1UT6HZFYib7HupgFnkZVryee2d2R848dYrwkE"
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
