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
    "64iZ8zRBzz6CLBXHJNhmYKyNpNsUBRQWqrtHC2HDKhtX1PTW7DT3iJGNxpaGsF6jpEYhewY5UiCjBx5Gfe2Xpyd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WUELC8yAMGidYCSQsXvb1nmNjDhDoW6g44CgG2RPS582ckCk8QKDMD5yZTHriFeJU5qxhU8Jj6yi1tNEh8Zyxtr",
  "key1": "2XwDDrMwVPozBBRDmpEgfLMrefx4ahht7duRJE5RPfrxvsJep1mA1BAQiY47iFZYRmF7DAzBrE6KuUqj32WE2uA2",
  "key2": "3rCpEXiM4J8f1oL4kNzo1p9M9DpcG6VdYKHDUSZNwWeLnJvKgSWPbT9vrE5gozmzrAF22t7yPTvTMJY4BitsmLaj",
  "key3": "qkEJnTg8N7LbSj4oXsiAkNwK2AqniqFdr2SyV9QeUzGswtfXY9GU6sCbkz3uU8rH7fh5iGCSXcLb3NHQCDntLzM",
  "key4": "3W99UxZBmdtwxHiQAyY2MvLpAbBMBHCqyBiJjTkKdZfUBdaGcLdQgj3jSUcvqUC1zCqT9K6Sc3BbGpoFjpWVyHK",
  "key5": "3EmiAQVzVmcvsnWZJyZCecC7jF5k6jbfVH1Zwqw7VRew5Lh6zRsgzSCYS5jgB5Gk5haBVS1Auj9GgppDKX8pLcab",
  "key6": "1CeQdbj6NiUbtoU7zBTfgPvKREN9EE7BbQ17aNFRXMGP1wAjBiwfGvxpPMnX59J4NiSpup2MbmD5c99cyv6KvbZ",
  "key7": "4nNbc7enwWAP3eoPKT94SPMhLPtzWS82U1vwAWc7YiY6PzxDDbz8pHFifPwYz4kE6CySMhezCJ8HnVZf97w4D3Px",
  "key8": "JLF5TfN2UCR8cjHP7ECWsRRPdGWes1GdyuiRS3Y4pzcapnfz3XaMvxWQtP6oAuSgoFsmUaKJUXxtYjXgeuJUWQA",
  "key9": "4iw8tzBAkzkYXugda9ejUUxYEa6MsFFyaW113bm9NpFN5Rw1fRd49St987273VjcwDKmaJsD3kx9y7Vi45ynFSaS",
  "key10": "41vT5Gx6SmyxEbiXxLFuVDxbAXaQYABm51T4ZqL2rXAYrjeQSubTbQHnYJHPTbb194dHWDf4FRje1iEmgchYv4o5",
  "key11": "5wvqbwfSWEnc9Usx72mcreZtMjf7ft1itc7AuyQwfvZum211W6ZVcfaLVSVghQSP8uFs12egw9chZPmnHQB736kg",
  "key12": "2DRDQaAfJiSrmNCLJ3kbeMrEMmXdym1gVhwsfVZ6Vu4pWMrLNSPHcy3UYEZ2rLxP7EaP5LbkMYooEaE3kQr1onDc",
  "key13": "2Xmfk8GyD1a6SAho49odmGGFFPgfaZjQ2mouebgpft3X1AUPBWBGbh11f7RJj49W9SxG8hSSpP1wjK1rDvQpCa4c",
  "key14": "5MgXSeu5SNRCwJjRuCXZyNJ27UsXWvhoSwBJH6gmc7tuQgkaTeKPivME2mBrBQz3xrEq2KDP1sgVcNFsa3RDpHvr",
  "key15": "3BZ7MtaGHfcf5ZqDkSNoC1DdTLj4T8n7C6ArK1v2EUhwakUskP1PSccsm7cL269pgeZPtHowEKwe29bs12MQCxbf",
  "key16": "4oqxH6aUCC7uinRynMx11dsrS83SHi8mwcR8VynPDn84R2nuseU46JdiFYdmYN1KuQ8pQ5w47djzjPixpQ3Wmg7f",
  "key17": "5P6dSRpFjeRRBg6bbdkzCDPpbW96rFNc8TRPN8qrHYfwYir8NR4jJcGcnDKubzXRnhyKqAep2BBKfaJ5614vWs3Y",
  "key18": "5PJZh5bJ28n8oEUcoMWr49WgZ432ppscT6r5GBrdpJaTYC2SBSGtzMbqPcGAeh8tUvnZsC4aaiBuHobr2mfa525G",
  "key19": "5AM9cyZiAa8jEmscgfjgoNAqfZ2UMUdY5fSYAaNY2EXsBRCxGomSZxUTW1hRKsFegkmVyf8XQKmDSFNk1jeAZGox",
  "key20": "21tKpkMEbKLpEYhL3TNb5mWYaEG56GtbTquovZCpnd43jGarXpPRCHV3vyDJDgCqdP2e4oRjFwPKAJvcNEk75eye",
  "key21": "5dpFh74sJBo8XuTZSJqWhNzNgH85DQbGejUX6pAqFfaEkAo2MMwLRuRMeA87icvudCbcbMRBy2qR8EW8wUPrtsQt",
  "key22": "4WAPCnGW6Rkr6GWjtKNHd1UR2b26hZrXFqdy8SXMgvvdFw3EkwLZNbeNzbS1bLpkvBt11V83RwXRJoursgC33i4",
  "key23": "KRWjSUvv3oGY6KFC91xMAqHDKYcfoxFLVEP1vgtRmQMmrVmwQjVs8azdVdDFoprY2iaQo3ybqXWVkDTvbSEtnpH",
  "key24": "5datzUCctL82Y1dbyYFf9YM1EPRgqjKXJ5QncaKV5DPxngXWvHoRurZHnn8XMNSN6Hr83mR85u7Ft6gAgyuFBw2W",
  "key25": "2ZWZvNK34vKMief2csitXPMmciBYZgCy5ebQUFBpUMWrP4NcQPTuWeM2oLxRRqNofjihUMkjbKcApDf1rFYSmoDg",
  "key26": "3xazt3kaiTyWpgzmLZnySjiCVuaTmFj3Gh7jLuv5v9is6Y9R4jHmvsTVwm4V25KY6g7ysdkd8BAXW4PYbqNwuUij",
  "key27": "2sA4w1eK85zNQTyH2wMBPcopRvPF4WTao6NTaHET55KLESktVGR8FYkykU8jKh9JseRz9hWbnwM5GJeQFqr3yTUC",
  "key28": "xx15SGCsw2SqpgtMB6o9nE4xtpS8Ga4AXFo2LhSRrjq68qxCN9dbn7pCSP3mwDRCP6Wt8N3eteJZ799cWBivDsp",
  "key29": "9EAHUETt29SWi7wHLCSBmHyDjSvhmKjLaRj8PVB6UuZy4CFRX8zei53fU7BfTfTSzKcBNAgEHiSh2HMoZM64qST",
  "key30": "3WevAX6LVCPtXbKLDQYaB39aPauhh9roMt5US3txfUq4Dtt7TnyAMJhWqPcT3E9Pk4UeeVBwuUMic4buPsLJvsUb",
  "key31": "3frVdLGJxEXg373ayKnhQ7rqXYxRCiU89M9RZ65DyN9iSTTdXPazrJtNnUiJc96s7FMEhGoJrmRow9HkefveUa9P",
  "key32": "4vGANf1ugy9qWR5GPwfoBcA6YFKg8MFQ7dceuiYX4747S5C2jzDVmxeincTj4o7rd8L45g1xmXY7mpxtwbWdrjty",
  "key33": "5zJ6q7FnMmHmV3KLabKxAaoCEWXH1xmNeMhdCYLzh9dvww7mmUj9gwUhBJKgR8f5HxUodXphi7GTy8eLMyzqKA8D",
  "key34": "27tbaL8u5jyX7RiGP3gfnzVRiyXY6txQz4UrtwANbPuv3yAxovqJBwewra1uGhXcyP7wDkBQa4t8Vg6a4Jrt7z9y",
  "key35": "WPdnNhk2hxGAWEwRuhN1kGHt2KwVwJzwowpHV1JcsVUWkyUG4xfeR5MGQSqEjP2btMuiqmgqCcbXtZMDvbGrLXa",
  "key36": "2A7a5Q8n5k7bQvfDXtbhiiz8HqtRsxEuMaNeY1xddFFxFbjr66P1RvHifyMkNeZA7uhoaGgULAoYHrbJfEQR6Aaq",
  "key37": "rfVrn8zdXuWeJNbAao7Ctnv4gn6LVvLfWBGgP8SHkkJGtPNMPd56NZKwQJT7BMwgVUPMe9B5zjkjLHbfbARNzmZ",
  "key38": "7gWai5iAaaG7VpJgigDHspLHoMz9H1peHsytMJEyE8BgQHqWF9apA6iynaQ6kWe4C8rv1R9Y3zi2EdG3d6bhUwD",
  "key39": "3pbhCG5fJCbkjtdhBQWinPqwnxwdad8bqH7Kt1oBL3371h5Qrm8A6AZA7f6Z9fnFGqhZA2auAEvCS54wPjYa27HK",
  "key40": "3s1uN5AhSaPRwLzpgmkcKddp8EfCxEikVqtrhTB8eENFmM7exYp9KXNxwDxRiruCtNXUEqUMzsCzXHKMmqgsZvoi",
  "key41": "3qCNysByuBnWqSPta7EHwGVaaeSQ989S6gXvQXmTBrV2LxFtEH4w9U9ocNfvNRHeUwx5EvuA2FgXnGrTVfQv2GWc",
  "key42": "tuvNBQQVmfN2veTgQhvGVtCDYbALhygScFZnsjimtFDen6is4EQqeN4jss7JpWnmCVrfdWcC6mskoipTZrb4xB5",
  "key43": "ambi11g3dc7ZjAog7msa5JrVg6qeg89HB1Ev783naiqraznJQqCKKZR8TNjs8gq4npFscG957QHdH2KTSDWSSwz",
  "key44": "2cmfT3rGLA1YS6yhSZRyucArT89bD7188DQg7X4naTsrvqmobxkrcZkfzWapA2bb76iUTvFtchmYXJDqwWQmoVQi",
  "key45": "37Z4XQ8FzUvGWr7JyJr14nAAENjesqoh7MZB6ezpiv1xVqhqe6A6cpNSyPHZXYbKqoTZxK2rSEXgD9QnnSUpEBU5",
  "key46": "646Zqv7eFJ6hkBLGo3aBg38BAbwZeraTGHWFRAYEVEXvgF1Gto1WETxh6GwFpPoxmayuZ56f4N2R6r9bPgrWkUWi",
  "key47": "3xnTfygDgxhsCxQJE13xx6rsyDW74GUGJfnXCubqs4EkdEJG9dSfRQ5PbtTCSRTNLGG3GmpqkZ82NK5NFNpdLSwu"
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
