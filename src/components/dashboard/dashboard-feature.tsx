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
    "5fD6pS9BeBKUzGHKZoYfc3awhqjrGUMHJHHBjowApryueCQDC2nKUBgotQndx9LrQsf9WZaw4fzmpyTvhvBXideX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDZnqAsuPE5rXCF1gbbX9aztuAnq6dmKHy8Fuao3wWxQmToKTFJeQ2c2STkZNEc1oED13f4tLT5crDg9NqXsAWV",
  "key1": "3Tq214n6QEtrkoDQ3xqQBhndwmNHpEUX5BuvH4u6vJaoxZyztTHfjMRjJjmMcsQjT5YoiuugTQNgb85nf74V1CXQ",
  "key2": "3ZPT1kjL1S8umY7ZmDePXF73N4PfusTnLLKtxEqb76f9kC3cSFxqB78gDqn6sRtdymogRJd9712f8DbDnYuRDLs6",
  "key3": "21NSKpp1cvmfzxY1xShaZSuMK5nNVWsz2QQ6Q1ao3pgXJecLhghkjciVNowem1mT5Jh5e6ft73YRqPWivydxhjS6",
  "key4": "5g64nipp5HbMs55gKNG39vFEmwfxJgwpoW9zWPEZHjU2gya6YdHjZdSM68N3mot7jZP1oMGMNa2kQZPxY9ZpqMQW",
  "key5": "CoECyRuw7tJtTSMMatRVqimNNnE4jMHYwHxDNoZyLpvQgd6XuP9k8nxbDRPaUi23qiaHwuyMYmy7hbPQqsAdnwT",
  "key6": "3X1vPgWXK6nr1jrA5UNwnHEUWyKUCuDgg6h21v6nKdtkAhESJ6YTnEpSzmEbTkzGgcPPEfPuChL617WcWfwChHCm",
  "key7": "31NtBjBhFzBdCh8M2QhFRv5rrLeV6PYUQHNGUqSHKk9QuPjFixvYUG8oo3Ko5jDyb3DiQQumaNAwH5CufSNYt1hx",
  "key8": "C1cqV6WeQNkNVjP8XputYogNJ1AthNnmEEpSTMt8MytJyGa8sQ7sSDoamXeV9YXmfdMz9WtbZRL2D6jmKNpjw2M",
  "key9": "5wG75QsUgfpaB85ncNMmbkmGgYistHpRd9ZpBN5d5rmk9BBSa7ECAPExMCFwdFaTN2P8A7jBZMcpxiUhXiUTnaVu",
  "key10": "3w8hduChRfwW1c7hePi9C2d3oNZAAjHUkmpgiyihMTUQSxdPjrvCJGSihswgGn1x7YzY4i2SKJHCq4X66YavKsSu",
  "key11": "5woro8b1m2QMjBYwUMSKrUGpkqgFH47FhNtKNQMWsy5nDarCb1exgCYd8u2mf9rZGpSYENMvuz9qaYhotxMGTMMn",
  "key12": "2Hv251jc4VHPoVuC9sfbxDdVwEw8iarqGSyQhVUg1VDHkcP4tg62ewccAKPCd89a7oMEqDMVNp4PFVdn67Ju1BnZ",
  "key13": "2JRKtdtnK2h1xHy63YWXajWqiNbNaJKPi2rCHpha6fFYxRXNomeuc2SQHBr3vNL8DzK6T6dbemkQCzj8pYxLhLkY",
  "key14": "2q3c5UHpsnxPD8rLjKwwz1aHm53gd2ahQwrp2w3LTSK4MfCWujCebxJqpZY3nJD6AQqy9TiJ5Ub6jGp39YhkC753",
  "key15": "5ohHvU6znGYV7USYbeyQooJ3MzAd2hhcjy8EoAweYAe6kuJU3ouptTeMWtNVLo1SSFptaNrYc1XQ5KjsMQJ7oBuv",
  "key16": "25fGzv7q54oAdzQxo59LA2rTudjththctTHbeyYzRpg9681J6ybVutDncUvEXRCismiDDmFQq9LsxjPwBpTjfQxS",
  "key17": "2WQictQPrFs6K2uHxC1eXNNRirBi9TGaQMqsVxy4ddmx8WnxsThAaDWtSNsGLupq8qU6fGtvZ44dCK8fzNDwfWgJ",
  "key18": "4cmtSC8MZznvFUnHYjoefS69QrXMDHU4dXnQZU1z3822VkgxWpZnJr6suWt1PuSTQREXMcWBSrtpEuNYTCgJuN4R",
  "key19": "2a6dq9UfkoNxDYznTWg9MzvHjfqHT6MnVE78j9UAoK4BcSQUsVb5zQukXqPTBZ7BpVhTzso5bttJHFLxy9GJH2Eb",
  "key20": "2P54JJyV1yK7ixWVjaLBupPkYrVbcSc2YVDpA3XwkUw2BbFDuCkhwfRHoTE81RGHxDC78nRMnzTFXQmzT7uNpqHQ",
  "key21": "2fD5tzcye9Qjnr8MFVB3YGwGycnEB6k7XfNvLnuW9QiMhXfA79YAWmjTFa8wsuFEUzot2k3mTozxCPRpLeDMgrZn",
  "key22": "wtu3bebtASHfDbkDPPPHjdXXyHZ1GxpVCcv8wqaoSA5rtaHSeHJUD3BxTPD124MAJdqhCeUdPpHnPoLEvGQzMud",
  "key23": "3jjx6GUGqY2qhMDjns95ThdzcbfqyYtZXVWdkLSYPSrpzDjDUH5ugeCeWq2ZkNfYPgmAR5cSDAsgivmuu9FytDji",
  "key24": "2dUAz6xjkN85pM4WdEu4x2KTHDxciJHVTGBKGHnCtp9QsnKoH2sQTFYtbPA4cghFiCcwb8LVo45Nt2LXZDwu7CiG",
  "key25": "46SmxhRghjLeQPcC5uzDw8Ef1PEckKyGsfceS5YH5JZS1YRy5UcQmJ56cKwwdEdFL8Z39RwXZ7SFQFtdfxPmiunu",
  "key26": "34SZGauWSKRQ5rbuerNeDAZvnLT3Ktby6kssVhxsW7SKePWD7awaHTdMd4rVVikZkw2W4QsKVF4DjEzSUmLUTyyX",
  "key27": "4iX2n6MpcGNJZsxSG33n5GRQABjmg3mjdUULkFZgH72eTDwZJjeXcJ4nBTBg897eJT9bRSvNWwebioz4j7zUzoRp",
  "key28": "3qkS4wLwzSnCL8rJ2QArxDBQE4H8We5xnDGkpNDVbm4v1YYPqdJfAKHUA3ddq6JTaafxpGWMKsHz19h5BQMzjuR6",
  "key29": "9xG3ik4MQePQpSYTPDxRCYuRddxvM7HpxpYkXH4yfqXFuXHTSZsA5bWmdQ4L6S6QwgCTRXZHfnWKwo35vKUBoPJ",
  "key30": "3FQo5xwbp9SRRYrDjFxHJKDa8ACJbDEa7qg7bvTo5GPhT6EdK2dPjcsS8MMtLCfHriVP3QW1XvQst8YNVTKD7CgQ",
  "key31": "49PcYS5B1VxXKagKpfXufFatE9TYJ3mvGceNQTm4SD9qvGn6HnA3zZeW62CUye5umJQQTshzD5uMbtAT5PM49jnr",
  "key32": "64KTSZn2zK7YDBvSLDFkK5fpmvFsqZbBM2nE4etcc9wjsbRLnNVeHKR4oq9h5efAYady4L6ojkadv5bMbKTtiZSD",
  "key33": "79hbi9FRJx5p8i4kw6j1abbh2SAaV3n4Xi8EVrzHvLPwVneWVEjPuvHM6yszEpY2TNfDTf1ZZ8ZkBMWbG9dBSzy",
  "key34": "3nLipcLo6THrT5e8pD3jBViMQHSEpCycT8qmvjDiEm3NQTxvd37v64j9C8ieqjzfGQ6Aj56ktYf8ua5mw14msgsu",
  "key35": "23WMT6eQ9Neq7C8NAqQVEkphVzqzxNsyPm6qe5ZMsjxKWDLqrwojtdwCcpxdqm1SkNAqe29TmpAEyGKkb2cWSveQ",
  "key36": "4uiw2m15f65SNDoTmVDEzoKhSBBkEWDgHbTj1F1QSnr9h4WinWSw7cgr7ZeZ4dxfTLU41j3cfRkNmBzaSfc5W1Pu"
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
