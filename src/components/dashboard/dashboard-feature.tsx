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
    "34z6mqPo5C8xBLxq5WJKbHXEWLH2fMBC4R7hdC4y9QEDfkdFUmsrFQEh6xUg9GFbTMsWVpCiikVgc2Q6DFe7QA6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gamxFW1wZMn3TLitEa2sFMQXBWbQLzsdNMYzjeRqcnHzie4S7i3XixyPrpHk6XUsVqDkmd2gASDfcfNHWZdYsMg",
  "key1": "3TtG4h99iphDkNBS36qo5iaj5TgdoNwsPg5Uuqae7jDEjoi7pE1xC7WGA57Fm6cNsaBxYdTx33i2XCgsZoK7U1Q8",
  "key2": "22raDaATAA8t53DdEeQDchxqJYc9X2FCWHkM9wrsoShZ4XN96fQ7qUnwn9AhDADQTzinFZCaaT6zM18GQ4Mh9VFs",
  "key3": "5tPyCLx7U2k9HbgASNZ76ckX2qWTWA5j8VuWKk4h6XbPSNjReoLUYX6RiJjHJR52weQjrjc51J2RSkULi1tamrQn",
  "key4": "4neDRMVPsw1FZR9UtBiJPGE8UYND7gL7yfS1RCEcqZJGvDLKadhz1yKjfek1m6Xi8MibEe5qDxCVQSFCnijqvH4t",
  "key5": "65FQo7zauwzQcXZMo6LfkrSERiiMt2LQ95Vjkxiy7phRjAto7wudRKNpCrsvBJpmYiggKRMxzfEkuHZqqAgzUs1b",
  "key6": "3Egjz4KMkZ5GjBBmbeXrzzhpr5R7f31YtrPRsz3pEntFEXFav31eK1R6JbSp2fkDi4mcdkNPk7FUgQVdEG13g7VK",
  "key7": "2K7sGyux44X6KXMrhYrCHNC4TfgdDNTtcNdVBFwtrx54U4b4MjbD2HDZvDDQNn3neuPBC8r1oce6rTK5ZLy7LMiS",
  "key8": "4q5n913nB14sBd3v9Kb5Jnhed9uj9Pa9L5sPzKe51XGQDVCVDanUknRzkfSJuMoeaQSNMRBaKpHzFTzRVhfhnic6",
  "key9": "H1jD6YPsowBS38QADwsFiRBYEUU15kM6WN1uo9gJBJyNBrXNGnyXq5h47MarzfEkapXAByetZBbt2CKjRtjZ9K3",
  "key10": "4FkxbXVPm7kE87q7DbteddUiA5vWFt4WzZsaDQdsACwGZXeA5vNL8uMBNEDJBuqpubjAVA3beEhQbJZKQfiPgrfU",
  "key11": "2yNs8SmriNMEuBEGMskKeJZctqGnEcvwsuJSEszW2pLBGLEVzhbtH72YUHQi6hwBmy5z3N7GLWmzvBkjEmxCVP54",
  "key12": "2dbaxayebMkrsDYxvEHzThtmjwGbkrS2JCxjAeUnuNTuabXQjvTQVaieNbNCxizzjFcuoPaB7vxaJvsMsUraCQKV",
  "key13": "BNBkhtGVBMU8gusgiuaiyv7Ee6mn3zZFvXs8qPaPyqX5jkY7SZvoYMZopFKtVbmVCvhV7cFrcymc1oiQ964PTnu",
  "key14": "3YsM1BzmqqKG86QL3T1uwTycVAbeEi52W5SnsE7STUubmuJWazqwSfzCuhoHHwUbSgH5tSdFMiGgr9r2Efr3w927",
  "key15": "3hVzU6Hvk2H1yFotvhRaLjiFCgFEHqUF9nhrEzjvBBJiVd4JDeDvR55TkgXnJyVk3qJUxfud9yKfSJShtJh67pMX",
  "key16": "52eKtgrDdPkwarbnFNq2Zbd65ST7eSgjiLeAK5scngXX9Mkb6EvBw8yVZJ12jLs2YXYgb5GQdNe2wpvtGnzPu3Vm",
  "key17": "3rjMRQsAXdmFYLtyPJYsoZQ9iDaJU2NLXUHtx6zZirqBt4EWC6X6HVAhE9DUGDBYVbmVmNHzQCZzrqBaBYP7Wp42",
  "key18": "4WDEWQr57C8mLsDFN84QcvswVytX9XC6aCC9KcPLhpBC6DEjr8eYvDAHiYRSH43ov46v9g9T3LnVVgASJaHEEyG9",
  "key19": "66p27UgRZcB6rKLvNmW6RszA5a5V6b6temL8psEms8XRDs4afTdopBgcXHoq4jt2CjpXLqN5L49HAwseqmeH7r3F",
  "key20": "BzvqAW4feuepuweDtmMUVj6X4scK6vVxSmrydaNFEHJVeeqZj3Cox9T1RSPSPs3PV4f1XPSpTMXexUFn8XXm3A7",
  "key21": "2da6PbEe8grA67GHioMDh7nYfhvMmFLnssjqTwHnUVvzdZmWQ1SJGdsmhXwT4sFaP43CkCUya1kj1vAQwpqQbdnS",
  "key22": "4hW1vcWRuBBzEci61QPjEpRxx874uK3EwDjUQYJKij92XyGxVUzoqboZdoyN2pP6Y3mwKaXWquEey9sNpcAqcgB7",
  "key23": "K6Ta7cWgm9WUAeAXwnrMBWxUzUb7EiHwNwY8AejwTTaZASQQpcVSVifcDdkMpUwcW6nUAcCbg51X1PwmbAZu229",
  "key24": "3nASZPyYYD2LugnFspX1TKH1XPngLfLBo2dX1VUCRo7vJkfiJyRB19t2VoyFdqbkVGmKoMeAkSSFqvRjrHjn9kRR",
  "key25": "3Kg7mfeC9RcKn8jC6WWGnWSpEmBgaL8nGz3kMiYSHABXvY6NhtrrVxu856G61XzRnFLMAm7vomKZcAQ21zM763fJ",
  "key26": "uJRuzbmZqzniztAo5RXDwqDAaVWjsJhqDzECNzjvWLgk5vVxZRUNAriFPtack8rzAbsuJP11sTqAPrhxj1vEA2s",
  "key27": "3oomEVVK7Cd9F9JbNCkXeaGixiGkrkBP77a9ME2bUbYFGx7tGKapGpLKanc3dKSu8easXq89Na4PANSyMqRGJwoK",
  "key28": "3ka7TagAa51LLzgmUFhLNeZK1GxUNXeEA27pzkDVHm8V4fAERV4sMTF8vLiNh7XitXDG4u3gntaMLZXxQJjW8Ecq",
  "key29": "27tjnXGAC3Jahuzq67X6BXMbv3XbHFoFhkmaru8Qs71b5ecsCBEqjuvxo7sfv4bt4L4vxt68nb6i5SdnH7MXZFSw",
  "key30": "4Q8jJsBWAmus9L1LSPAp96fXeVRRxSc2cK7NWSheSFCud791eRa8ahwoBiF673PSnyAwY5FGLbYWNdyd3vAeM4gW",
  "key31": "5Zj5B15U7LFqrXtBEwG8q5LRJVF4R6MVSoMVFejmyeQZHZXwVUsatm2F153gQB6mhnmpBg34RAvgGX6x9gBJoe9h",
  "key32": "SdYcWJzhMtcGoiDcXixNfPeiVsNsLvVYFaRVbMjv5cPRR1C7PRNfLNRiraUZS4XhmazsWMVEsj3n5ZgoGuwpxaZ",
  "key33": "eyeJAqkHbN9dNzUeDK5c5Wpy6Eouzw4aUYTNio1qwiVYd8nKbHJX9AgxMsDFRzYz6QXZ4nxCMbHhPv7hj8X4BvC",
  "key34": "48KMMyou2nVXyXmDMRxBz6T76N4E6Dy3aBit5i3m3GtsLLzvwawa1LJa8gbm64yQ1WfAwYWSbujoHoFcqyXw5tKb",
  "key35": "3sqKtYevqeLcv6GmMZthy9KMPBXF3UJmCgbeDL1sKbzmq3tZG5sh11ZGqXtvH95wtv1rvMEKSR85wKRUoe1QzYrP"
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
