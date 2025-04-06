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
    "62tcV35Bets9V87sJx9nyF6wY69LKje4zGW2mvSQRTRNUWpxpPqRG1bwm4jmwWz7D8esZ7DaJz1XWms7Cjyr28qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUUnEAQ7jrAnJKBAf4YTt8nBRfWDCNCgVS2PXZv7Evz1GcNruaAXgxBkevQKm42PN4goZfJKQ4c7zGiisP5GSTW",
  "key1": "5cpFMuLmd3KZmA1ULmqkNUbYDNx2gSrfb92q1KFuVoDRe1SRpZeewjRLmq34iU4sL7rTdMFQPnyKnvHNX63Dvn5v",
  "key2": "2Rv6ZviUXjiKzLuwCZ14ePpQY4CtUMoAPPgXcuVMoiCfDuLzRASduMNM5nToJFqJgkJ9qEQkYXzji5kQnWpgTxTY",
  "key3": "4QRqDoNBc8MPjAGdq1BoyK8BNUNujah6WymA16Khwkwp8C47aXnNAAinggM4rhUr7hhTDLRB62QzHzLA2NiAb7eY",
  "key4": "kM3RqdTmvzU6HPWoNV1A5B9WTvcf3oMk64tAvQT3KkX2KfN5HzqL7QX8oq5yT7vQUQgTwsjCo75Wce3EnVjAdTS",
  "key5": "stEqk3jnftNBmZ7LqH8654ZZ2Mdqko1LuiVDK6wpADC9KqQTjLSArH6rJqT4MLyWpjxAUnLiy2Ga9KpxXp2Wa7b",
  "key6": "3GS8PFDfJMC789d2QwZg7Lmyt8CrCmSMM7LC8pdQQoxyzqDkrJJFMEJgSxjfP3YHKdWDPEXty5LF9wtoi3iDo2VT",
  "key7": "4TaFoiL7KucEDEvhFaFhb6LhJVirYJphbhGNDpNsFfHtQFTrgASxDPCc7274EBXYrBxRQ8RtgQ7kt7fQMFie6Rxb",
  "key8": "4qkDx7r6RYFWt59wZBaFhipwQoDFqy51aiu1EMnur9Sy1bWymeiXfjjhZWF8sn8AwEACW1YA4xZyYPT5e6h544cH",
  "key9": "5s2fWFKPtQpYTwR3fnW4HupmB8xXFki62CqdPWmtudQQATVfHNfmWhSshv9tyWsHfcfQtkgwPFe71u8GRGovZb5w",
  "key10": "66628SX6pKdHeEqohXyFCmrhPy4hRXBxcYMK145Q6SPM392K1b2FDLivoqDe5suLaNuYyK1mHNLkNCm83jBJPq57",
  "key11": "LDToqcUxmyVVS3wQZG6AaoE3Aq9zJBVhgMxdB1ju3WDqWjrYBBasJUg9Ju7mvqKAcmyhPZd9413iuH7BvKgx6CA",
  "key12": "2qHhcpLQKfGV3okPjVwmCT27eiqiwMxuSF9nN63XS86YfheeAoQvPpd3CjHbTmv8NVpDw75xngfvwpcHfPFx7EvC",
  "key13": "4L92N9YF19Lyhh4vEQpSY5HvjZvM318QyhqTujgZYseyVyozmnzgBoNYexEssbu1n1nN9anD5shRBLCfQXhwze38",
  "key14": "YqCXJE8b1YCWBBWLFKwcvgfu68Hx8JBsK2C3mPncPV6ZUoFDeiVp5Y7gvepHz521MKNf9xPxfy8JvdgM2UzX6uk",
  "key15": "3aHzfpSQkQZpu2cu4dKKoPcA7sEu4DVJU235Knp5Q4H2MxudRtWiJKxNesbBKRTPkUFKfjxSq7YHqdHkDnko4bEw",
  "key16": "665khdPQyDEHGLcjuAB6GfY7tFwzLSCvnz5gAZJ1umEgbvHixVozSZNkpC2VyBWdNaUPX7NiNU7737vVC1DT4rVm",
  "key17": "8sJgV4UinWEcduuh7JxZgUM74jdBywy8sZ8F4o7LUxLTV3rujTqzMmETTsGeEzoiW56Mn6yJ4MWffHHbLSf19Y4",
  "key18": "3mctHbQ4nZKBUNSiMprFurF8caLVJiBDir4kDaBkPciZp13wjEWrfe5Hw2udgovUmsRxP8Z6jeEfh3CEmwSXouqN",
  "key19": "4gQLzN5cb6F8JN8g3c9KX8QsUKrL7CpsrsedHBjFuwiJ64MyMXANndZhhBZTDqoWkk1799iSBvxFLfnzVLArc2PM",
  "key20": "5UQFXbgAzvbropoFJKG4YY8oqxbVEz8GV3nNZLSq7ncNSeUx5ckpAnsgyTqoedKF86WZXXkEMgiGE1hPf3qTWTPd",
  "key21": "3djs8rT8zVi4T8YFKaT987q2ujoVRR1PzQfDjeuBNeqZ65duvKJqn3VEGDL8YAkNgYi2f4jJijJ5fowpyd1sSCyc",
  "key22": "66FwfQwNrU9gGSa9mzRrAgAKQPwoP4Nd9Xz5C3WVzuuvnF87HjdxPLYsvZx7sR7qd6aBEzV5NAbN9hTEaPoPqTKC",
  "key23": "2oGrFdb3D458NvSa5QZkfiRNj3DGLk1QtiMdZ7ecwedJXnrMEP1mJftnWWVnLJQJajyt4S1TFmyLt7iBA7VifX44",
  "key24": "ggSxkR5JoNG8r5yrtaAbYs6ycxz6wMeLikwmYZUFeRReQvhZkvcxTTBoF37u61kTmgxDcmz2TqYzUXnvdDqyB1s",
  "key25": "2hENEKs38T6c8Le2E6gFgdWMBQs6V3syzPmYWs6awN2Snt8kZubMLfhpE4tRAkeLJRN2DWyjPvoqZjDKtyDJyvkk",
  "key26": "24hXUJp4oEFREnm1SuJ2s4KsgUttiz57tKe2KRwpa3Cc9npLTHzncWa7vTso9h7MtLLkdvruxFb1Ykpqx4ZG6Xyw",
  "key27": "MEadEMSd1sxnZKQnzP6zbTLZjqGuhz4BQC2D1h9tRirrarFGA1mCrbYBcPyqwQqtxoaq3W8spvMNaWVpCoC32B8",
  "key28": "52uRatAGSmz2NacuwBNVBALKiYEyRifwyBHESTpJzuArf6b9ZZdfXuTGu6iMSaWjVA78kybECddC9gopWCpXSycc",
  "key29": "BCaS8TZQGwVPK4EA8398ZKYhjcsVMJurwJrgJX46vpiD28QiiKZstiU3XsNTZ3bi2Frf5Lgj1XmWxwUCJtr1Gvi",
  "key30": "2ASKgixtdZRR8umTBpohPN8PHFWL7jF9BWTznXT4rP3htmKKmYHknJrFCKQQx1mWys4D7vAyNEKqr4c7L11wWfP8",
  "key31": "3sRoWVLoLt1QTV1nhtK2CVAdHut8i94yZXioGN1DUkTFZ6FuF3iPPxYGCyR4KgnWKq5bJzCMzegZYuS4VrKwC6im",
  "key32": "2CgzKu6GYpRW1ErCBJcg3JhVee11QHPSv3uaueLbtzWXm48V1t5YodxtQtQGTrE3BEakqRr2yNbhBFu5hUVP6kWh",
  "key33": "3g2UFDna4a6tf1UqgWwNBNey2NVh75iiJ79GtnPrpt5b4CJMprCBiyYdSpTVotPjDKGbZgrFNThDdbtGVUtftZzQ",
  "key34": "3cZiswjeH2jqa1x71e1C6Pbmyq56GLiDBrpzDMxFPfDvgjmvVgurae1k88DXRJxFQJfKxhYHrEYyZ8DFFjY1tgZL",
  "key35": "3t6NG4m6hvbsNv97BhgUiN6Vn9fxVL87SM7uVo9NEJ5osQpBLUTRSEDwCAqM1ASHPmtvNTwyJ5X3Eteuq2PqpCGZ",
  "key36": "5JGomDBu6Zj3hFwVdBQLq5R7MJKxh8GGR8LEPnwuQkMsPqZN5YniRaMDGpMp4UZhCrMUbTVPZWdCjnnsqof1v9Wf",
  "key37": "4vhbBKzjwHC4qhZTHfHGUkkUME3FCJqh6UgiQtu8qiUHToS8FPm4irgCZT3KJAtuU2eVQbkGN351Ny4EmpEDktUN",
  "key38": "z4kmp7D8ns29ojZzx9fJwLATa7mSmwtfjwPB1XTTNL4neeDubhB41d3q7TMwkBnUD6EajVkUgzU9GFD96vCCzFK",
  "key39": "2hRH32d7uH5iFNRVCCKCbvNG7YCW3c8AHyt3MbnutsJ2ztbYjyFWwUKWkFrF6i4FkhoR5xArYzPvCamjHL3krkSP",
  "key40": "47yxhCgkDsPr5zePEU6sqkukzugxsqncYrtUEYmpBCsSpL2QR2pkqNRx39gkBH3TMXn47ZAMNCRRuCcH6LCnxnK4",
  "key41": "2N4jQonfJi1V6ca5wqqKh1UCUcWtPQCR7w4SdeFoTcZrEUcSG7X8PdeTVuyndK4B4LuCtf94ZuWfpVf79givmc8A",
  "key42": "4fbHEJ9rrNmCDEaTtYabZDUQaeyPyHPQeCV7mkamK7cxPDKKqq8CVtXZarUSmhHMs8Ub7Ei7ZJivQSS6miM6HSVK",
  "key43": "2ju6MQrWFmHVuxaHGLF4ZEnWcpdXiZZG8Tddn6BAesQk51QKtDP4tFaJ6nCLgtFJkZHAjoSAaxaMjBzsDihNAhFh",
  "key44": "2g8dEs3qWsRnCU8EfES6eMBrRFPTZENhcZiTwfGNSGum5f7GNCDJzLstohogi2gbVvTuURks8tvAyWkCp1ppF9Nq"
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
