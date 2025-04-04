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
    "31DF7s4zsg1xKvjqhiD4aSP8857oDQp9rvCLZCsZq23NBLKUWVee3AcDycBPBfbzaXtDeo69pWDSp68gid4qGGRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhyVtP7WcPbhegCw3Bdvf6PP3ZZ81YhVRyLAzmntqAKJuxwnyLsm4sKBm1UFY1pmtW8iMdCEJrrBEDnMFLETvRf",
  "key1": "2huW8dpMNUJEv1DFWyx6g2hnPUmuDjqFTha6rJecnocE9V3PUMbN3kf2Spvr9mqQWaneyRdqC4bshKmbwnv7CLHJ",
  "key2": "2Eq4QMF9YRMFa2L4yJuaeJWNqp2WFfC7NQXe9UEU3FNcSoc4px5A9SiqTximhzjeSSKv8fAXhM7hRcupNT3mPYv3",
  "key3": "2zMhZUGJptTtnGtrRAeKfkiYA8MAsRtPzBL3bPfbsHo7dDGFzYfMgap3wuA3DY2Ht2SgMGnnz5o5Y9sLe7TH9toB",
  "key4": "4z1EdmkdC5qFFDaqM6eU7EJEy7M31zi1VV1PzGcRDnT1r4fvjxLY1bvkDCCXrAAqEkoozuqkQAxJd4HCWwP6HeJo",
  "key5": "66kWYuUxZ94ZbEHi1pNkDCSvCoT9rjxPSvT11FGJ7Ath6nTqQfTi5d7BtPnvFMCXZtcNBbfGxGm2WaVpC4Se8D9E",
  "key6": "3afwkaYtDCan8zAfAEJCEWK4f64QzhftN55sDcQwrZM4jkTq2iKhrvpdZesPeTvWJyQUCs8RCamVNCJAuD7wwmPt",
  "key7": "3asrVmhaGZJNzcFjttL7YGXVXdn1QN5WCo9twj6GaChk7PSevLCmvWVh2FRGG48NzCTvJ3E7mmGLridxjK4w8yKJ",
  "key8": "4bneu42wtvYLMgLn89aBDLuX3ZmYZvzydftZLNfDdUbi2u2NK5k7zN48bw57826PNnMjbLedJApYNRuKFmaFxTGJ",
  "key9": "2eGMn2YX8F8WjyJkSJtVU14MzLU6JUBeCqP9gKPhJ4559Li3fEMJjZAFtynHswq8zzMp6vfw8yvcMrg1irrAKKr5",
  "key10": "2kz4nzFcQxrYLQzi5hNQmKMDKULH2HoW6czeTb5GgLGeQGSjhMW8i7TsXTmKDJa4YYT19Nqx41FWnT2CETBG1Au8",
  "key11": "2XWQWP5yutNnA1jjcgSJarBHFFMg8GbDuM9VJhYvw51GfMnnnWLjtsPTtLSsQRfHUXq1Ux6oQjbRrZ8u6HWsBSQU",
  "key12": "4gXC5QdHsN5WGUMCw1pi6zk9QihR3gwoZd12is38vZyK59ZZ1Ly9PyEDgAQTSyRoVofUD8jwA5VaUJQCgWVnbj3Z",
  "key13": "4bAMFNVYLTwFKeoyiBMUU8EWykv6hwBXoykaJiHG9MBpoiKmWjFswH566iUvcUUEUD6jgZH5WHEdAKHQzCbWqEKS",
  "key14": "4oZZ3NQVeWJ9HpGKSycK14DdS5CKAHs8Ncj3BTGPH5ietYJYLP6c5ngksMGop5DJ8eKXvNn8qX6A3rfNAEQW3SAF",
  "key15": "4XzNPBckkPFM6yBCQwo9vjJn7WFew7FPpmL4w35ZvcNbMSZRKqgxeFbGkRxnjh7atvjWvBGzbioM3eFKLpgkpm3H",
  "key16": "4dnv2i5TmnnKRC36tdajto4AzCzzR8FMtivvprjCeg9BYi7f4coCZiPv353Y8E49Xmf1CDRCW9zp4axofksq7Shz",
  "key17": "5CRc3m8hiRA1bvY1Eh6zygnZJnKX3qzbVSPNFVMwKbFYiX4XsdTSApW1ZiQxzSJoDV7xf4Lc4htbqChAA27rR9i8",
  "key18": "4cNgwTadDeqtWBFMfwtvC3rZDuBAtWFxLjTMWVNKUQh31ZP3tWjCjpvBqyt7JU6FY8Uf6jSuBx2KQNWR5tX5bojg",
  "key19": "3VEVtZk66VKmg3EwTGKrfzBqC32fdaminq1iBzqpF74rvqN6htuLaM7TS8EL2FdcYQWXaqka13unvy7LGa1Fx1wj",
  "key20": "3v6qsXPnhw3Tcvu4XJDyJDyeAoWqzXasTjXq18v6RxVBCduTap9eDx4NZqh3u4LzYJFJuKqbBMGW2DtyexdSwHB9",
  "key21": "CamdSpBFFyScMVWReaMsXhrAPBVWUS4cRAkXHoWSG1kyM9fMepiFhFBWGcCzAGahwSudiDXHaudm8j7pojMY7xS",
  "key22": "3LP7rZB62pBE8kS3HA3BMAWhpayQeLQCEpXppF1RemStgoBpQakEC2Vu3nhS9AsEhN8hVgFDt6FDFdQndZCsFfRn",
  "key23": "4MoT8bt1tLLNenXbLy1FpW2e63AYkGCPjhNQ7eX45dnwPL63Y7jczJvXKDVLRtNeSiQ2vW7CA4HJFm7xEKNgKNGu",
  "key24": "3S9sgScqMn3SLFVR58QQ6ydsW7bbgMXYtr3qSTsA9zcZngUNggHzajG1YHF4LKsaSBMTFfocKHzHUqaMSYTyqRLj",
  "key25": "2L218SK3Zd1ohzME9bxFtniQ9EAbkLJ2vUZFwieK9JkkqtJTAnuBihyPJGp8242fWGDWPg9QCx7knJfBCd1iBYHK",
  "key26": "5WsHjopXEzJJnKZ1bFUMMUnghXu8oCcNQeKkQXqo9P13zrRjgMF89nCpvRE71S69eoy75nJYhxy6Ep9JfaqB8JaA",
  "key27": "22YmFcxkRkBJKiVuwLMQLdR41udGjGctR4wg6EjMdmwr2QX1zYzq5xZ67hFyyJsERuMU8fm1Zt9wMEAVehD9TtsL",
  "key28": "2frGSJvfsVrLi4DRz1tfRPYxkAig7wVJhDi6nsqvmqijTSGTZSdb8mr1eDVusb6p7NtJnnFiyLZ1vXPeZyPUgWMt",
  "key29": "5FWcVUoYHTXG4KudtfnNnGnWmZumi72ViPEnWG2hxBvZN6xKnCmtp2Jyy2RQEUf7JLnrYMTmVAMoaRVShK81RrTJ",
  "key30": "5aLaXEhQhpLE9172oY5aDkBc2UcGxehHvoKGkTasAvYMWbDpVPo6vznTFAkgNpYWFpProftktnUq6UTZmVhmmZg1",
  "key31": "4kWPJ7pfSRRqGiuh7zsbvxoWi6dT9dp52J1EVjXKheMWphjxVCsgaMghoGS6mt6brsjhx366ZhtHSYNJHieNjWtJ",
  "key32": "4p7H3F3JRTaiVEeq7aoWNUgLwEKfHeizKEz3At5ELw8PPUc3fxbXb2FndL3p9vTzSxRWp4xaAXq4CX3mU2mdTLGf",
  "key33": "3tp5KHxrEHyk8XBCwY2mvYajj9TFWej51Db5aqn1SniqmV74XAL3TVKnyona7Qh7czLthGNgoaHLGsmVvaY5uAec",
  "key34": "bbnFyn6sq43m3ibd7hp3J2kXqivJpUNzfbi6BRFMtCiZ81VWQ8PNYaExi8EPsgQtB422bDSYSgL3XFsaSuvpcyE",
  "key35": "4yXUNftdCoUrDQfP5PVvVc7XJ6Pjg6dBznz8aKxYRwkC838XtAwnAxRGnZzeqPxyxB6ckieQN7fiDhCwvWUjafC6",
  "key36": "435paoyxyqRzBTW5Dtka4mHPqZ2ZVGximvepwiosR73pPqLU8c7pirrGHhgpwiTyEcDuWPoR2e1wB2Sw4NN4GAcM",
  "key37": "5LmDU9TDYeRsXwzjBK1AJf92bRKRjKNRGiWPSx3AH9U4Sy5M3RW77jFKSpDcEPWxHgcgdBDZBHbaJXPmxPkzNQC4",
  "key38": "1mJGereFbVdd6daMo32Q12HFsNUGp3K6T9RC5Uyg4iHYq2GiEHVoWTNLzm85VTGGy48TBeA5oChDUQRJZhGSnt5",
  "key39": "2BPiUQ3YMZB8MPdHRpmz75Q3qZtguYz35kSNo8kCHiRBQGQas3hUFBf73WaTtePgXiCwcSdMTzrvL1YkcGcnZ3J6",
  "key40": "3zp8VkXhM1M87DbpYZpHyEzUDdjfB8EvXuTY7qcv2iArTmMvamFSFaLJ3vNbtLQFgQ4wNdGKHaQdB14nFrhSZoA5",
  "key41": "45LEvpCLyzN16ULQagY4RNLjinunRRg48kMaHcSuJBuwdUU84iwMq8bnwFR6EQNaNfKY8K8PfkwKWfMX7zm9NhYn",
  "key42": "TVwFkz4wyGe7mU8jNJqaZ21DCznhV1aGB5N7RFU5yz7f5ZqH2xbba5NB8e6UKvvHPnS1fDadYGu9YaT98zH6PjH",
  "key43": "2oPEx75kHr497UCrDfNnqxPLHwr3HFCAHFmYniU2Sc1EuFckv9ZxNEJAD7pWdLSzQZ7hFGnuRkFXrqmBj3gKWKcd",
  "key44": "3uu57wFmWbwy7bDiCwfUoA1DWXpNb1oviFzihvqzW9qgDeXgxkpja1AGihYNpsvh7kHdouWnstw9Vuh4KnU6PcYp"
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
