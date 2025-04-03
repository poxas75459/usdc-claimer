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
    "eAFwKJRCwNy1xMfTfJiDaZBgenSzA217gN3fRVpEqRwHzUXBSjfNTWebjh11evnBtVXnj7J9cDVTBoLiwbJXwHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQgfsyCwCpUGXf8yjei3dq1mgmYQofET63VTWBUPbno6CM5tRZ829gKdCWkf6DwS6WipHqDqoQfTGEypsXUWZ91",
  "key1": "2wfGoWr224MtwgmVyn2i8sdSjiVUydQEo9f8UuuuFM45b1f8mqykWHviVp6mWJzTafwCp59SUDRZFFWkdjaaJY5h",
  "key2": "36N2jhypuBFVd8DkxoqD8NxUHMFcESAwrRsBtv693XvA9MvwMK4s9yiy1kXPTtugh1dZpqQYggiKTNcSUSTAHNUZ",
  "key3": "3qMhTnW39ugAvL1jsatKgs1G3vnMWrfXkY8yxisCQHmfLfDMwV6YK4voNw6dH1PeJZTVq1ktVcDtNG6QktVJL23s",
  "key4": "2kHsfa615b1tbx5DPqFXh8pWXpTGCEpYFxiZ8vcrKH68AkcH9AdXRpMNEnTrvCbWweiaLC4LUDdVPhEMeGWoN9F4",
  "key5": "Xcn6ECS6Kkxaya5H3X53QdZs2kGzQF1FXRYAQ9qny6CYqJtNnYNJgQDHzUrY2Kq1PVoNCcmvSPu2V5LYC2fBu1M",
  "key6": "2pqyZW78NhtExLPGkoKCdmPqJEnU75dDXrpEzr5nveM91w6y3RBJ7bKJqmEJ5FYATYUdp1s2qhD6ZipsQ9Y2ctyz",
  "key7": "4m8bCs2q896NpZJFWxtg2JKmMrofUDtVFLG4BFhYwa6AQLZ4AAiGSVyYZCoYR5Nw8GdhsWbzAWRU5RLDFawSHqgW",
  "key8": "TwjHkUWn88yEERPoeuA9kt7gDGefyu2dBEbMvdiASbHQ8zkrx9fU5Ltr98L19QQcsAhfKbwS37ZYBjLB7fDAxdp",
  "key9": "3KFKQAt4KDz7YV8dwAFAerapf7n6UDe316DEurPCboobJuZngAKFDrGKiwkyzYSJVYuo1KgCh51zTn3xUzbTHPgV",
  "key10": "3UGKxrb66N1X3ZS9xuQKFnPeDHaNTJc9DWrT4pRQb8cBfgGJWYc8bS91ENEAgKFQ5KPr3WHV8kmzcA54ubfphByR",
  "key11": "2RBrXfH19dfX9iUkEM5CQz1RKfpp3xPd2qygKhokhCaVM9nbgTZAAYv413fy3aJ1BF5VwMEZkn2HFAxJYsRsUmW1",
  "key12": "2j9J8qw6QaqsKPBqUYCbP7bqPQzTP3MeFbTrcJT66LhfF9tNoof7gAgjERrxFTQt1He9RQm8FVUk8ZEHUhbuKXkJ",
  "key13": "4hDL9QVtTpJ1LxqhkN9A8ZE4wM1fr2noUxUZhCHjv9EE2qmvtSkxieEcETJwobmQwKdcMrUTupkrNbeKnLSva7kK",
  "key14": "3Tx3DfDbym2DYWxVwQphZpC4o22PTERpBzzoKBrG4V3dJVz3QvbVuZxnDQUWu8qe8thBVCLaJPLejZK5gMYS5FsJ",
  "key15": "2Ygo1R1kkfq5sfFF1fVGByZUDWLfzuQq4vxSaNzvgSHSotfS4NYRCdzzvpMXwK98xFKgyP7yqRgHFSL7R2kibZiE",
  "key16": "2eJEq9oFzBLyA28taQRGkx8HX9hf54UEPSckBrswBVkQpYB5fzeR6kHDVd2wGUxGe8pdj54VKDyzHCHbdf9jcY73",
  "key17": "328cKwJaWoias4xVjqgacjZttN3tZ2zT1WUkJVTVrqwpvdKMdmhyZkbNNMGxyJagegqZsq1tCYZaqcVyJwnfpG8E",
  "key18": "5MmCFk4eQ5gu7Sd4MrwF657RMgUkGEVJPPkQUqdcnfw6pX7WfwZQNY6UnNCMWR5qjz17FwvaRRpYp16dhBcF4rcw",
  "key19": "5s4gtzDHeoRzrkDWmZMpAann2Wer67c7Kumtr4DRWXoZu7D57RGRNVJNcgipXMTuw8YmBHRBNdduCVb3LziMPX1C",
  "key20": "4mNCFwrqmsH8qBE23zj9e15Gn52gSLxh4dmCXWDd6D9LGc1a8hTjU8GkCVYiF3oWoRPkwsi7eBLMk8E22gNkigMx",
  "key21": "Kci5Lf61FPfbedoMfadj6kemaLg9TLDPqhXeT682xR7ygBJvm8mhZU1qBsZBnxVEKGFQp4PrDWkkuG1MEoFmwx2",
  "key22": "o5suh1QodgTZeaPpmtYXLK5qNGZ591Q2ptsxwzeqXNyJScyZbQh92badMynNoYwKpDF15DP39YKYVTqkcwQMopX",
  "key23": "q6u4a7hNsw6ENtvvD7ymQkVza2g9ZBfVmSzFS94qbk8NPPn25dvCh4Mqp1iwXzr3WnJ464szKaAXSUnyjmr49WJ",
  "key24": "2xju8GaxQA1ubLXWtcAjkdjb3TX2CGb28sFGsRfLiSBPPZ9DLMzipBgeg2bdqcUNzjg1rvBonLaK8iKPs9JKYfx9",
  "key25": "ZWusm6xuVVY83ikYVnPeduG38hePkv77tc2WAhw2Nx6NiNesdnJ3ddWuKEg3AjvPFLcY4F4rQ6Xe95H1wJ4SBYi",
  "key26": "5CsiJ4aokA5AKnqvfQUkbRuMoGMaEQbCJkF2GKBdymqr3FgPwJ9vnCEKNrddLBV6NNAzN9zQuCMQirMszwXEy1Kb",
  "key27": "23a8oRUMBWNF7yjbxhfAhQ5G3qe2wPkg8YcQpPoWjV2xD1iNYKnukNi2ZKCkJxF7eM8CVsbnNs1Def3pAnXinUCG",
  "key28": "32ALtkXqdYnYy95ckEioBfbv7Cfduu53WTVB3Ni3igwfmVMidmxLiF7TapNehpWqv6f2cPgff8QHRFXAS2EC71VV",
  "key29": "4MUa2QjCPbVFADSSCkaGxw9paQ2Ufb4VCMXfERgLnEC3QHftZAzqrFeDqujLtK1UKC5i8DKXWQjvz3fdxn4Bboxy",
  "key30": "2ZWER6HFcjLuisLwtscmUCUs1jivrnibv5twiJHGhfvABNaRKzYH6bKq1YVHayqHjTEgVxKdQmzvfEXqR7LNQMK4",
  "key31": "4dkiyyLZC1cKLGNtvo22qBt2cU2ajwGoLD7GcKp2h2AZRqRFzuhoyyVcz4NV28UW1Zi1YaNVHAk2W96CfT37YBWQ",
  "key32": "ZwiXvk3vvEn6BVgfRmv9KNbEtsLoVaC4oW8MNg4Dzr6o5EMQNbmme4m6kXM1VeLEtDRpBE1BKGeHSBGmocE7TBd",
  "key33": "p8cnqBLksJqMyjz9ZYCMnBos7mShKgNS5rLYyp4jjiqXWy9X142CQvW9zzQ9hCPafPuXDyXe8tAiRSr2j8b6wrZ",
  "key34": "Fg51tbpiTCRC8QfuuSkSi16VSBiphdavAQ8ZGRSCTw3pNB88UK6nD1BAWduzYH9he4b9eCudtCAsKGWuZaGF7YC",
  "key35": "4xnpr5dEH8wdcQsETxUt5aAbZY4hGGEgyfYrJWkdnk79aubxo6h4vuwS4XxeQ7pfxVMJaTitMxqHLPhgwTi8aK1t",
  "key36": "2eTfmHkvo5TTzcUYYMeQsxmrEjA4wiwDbv8YDwaZE3iQSG1uh8W52h3gK8WPn2PrJwTqLLU8WoWSrXJX9upDaeMs",
  "key37": "3Vy8ME6F7dz8jdn8DGzLecY3nGQ1oQzN4ELRskvf8opN1HzihqNZbujqY1H1cgtaqLSXsQWSGPYuS1VubNHSEtVn"
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
