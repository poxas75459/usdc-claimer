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
    "4f9LHxgVoCWauMhTdjazZDoqcJhY7FGnm4HiARkwUdmTk1zvZXhivHysYz4ZbzHPvBbaSLsSBFwiVroof3E1KKDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4JWh8ti2dWPHZQjQXtXdhZFmQbHztKDNx4QwKpsFiajKL6LPCWtauctNtu5UASp6Yo2Whu2aCK6EG4Ujm4qWBB",
  "key1": "tf1AGJb9Kw4FMJ4adjxhm7CQvrKLyRrZ7SHFMp2vT31jBv4gvBjkUTP7uTunkuzyPNV8Yxqc1q7UGmHTqbSHrfh",
  "key2": "567dv6hxAns6cyuJJ35wf7osoMwdRvKyZYvwkHcy9gFuvbG8A5Je82AqkyAmTRRfvWqtpUrnmvSeVuCiVUChPs6a",
  "key3": "3WChTA5rypa4pmGXfzkyoDpDrgRGnnTr5nHrCwm4YYdpxi3phAwEZFy4QBVrb4AvhWz33MCTSh1Qx8seqCH7VD5n",
  "key4": "4HaVVjckHtFykicHag7kvDAVrxqCoP4oqvPwrkt3n3GcZwGG6FswXEwmRyX9Y5ujofXKKznaEcnWrSTcnwegAtMz",
  "key5": "2999h8hyVcrJSkgWdV6BYyJyzGHiAaZh1aUaY3kjTrpr2zhiC43dF4M5ueW9Kbc41AF8XYpgv3BpYiMx95bcXM1F",
  "key6": "2rKzNhyhpnDMKrz1YeGQrnacFzBMb6Vi1hMZHXcZeLLt3wwgMJo22wW8Xb7KKreun6iDbB66Tudj7zYLCLAgcU1r",
  "key7": "4uBncz3JfZAKvJCFB3e7ELyurwY87KACi23n4eS7CzuPeZLFwjWUBBGU2aktmptCF76Zx1nccSvJHHWMkWv1DAw3",
  "key8": "yWcAcftjY3CrvPjhiKTTkH6uDH3xdswVNbeUDStV4GXS2i97Xu5gW3PUsn8ZGHM8QLPG7MpBaxuKzBNKTuraHC6",
  "key9": "3aYMHH75vKvdeyYgbDaA4LhYV4Mi3dmTJZNQDgP2YyPW8VaRsHSCZ84vNAMLneJTEDzFud6UBazZjwMKbQA6jce6",
  "key10": "56iBLsDD7G7AkpeUme42FC3AhvH51RJojR8AupmrCCbY1SfP1qDvLzjAgMRpiEVY465TkaUYsLUrFgAGPxCmBLF5",
  "key11": "2KjTf9g2ViRaLqbh9Z748WXVw5ZPnk3qr2DU31XRj4kLiU7nCkM1UFZ25YGfyE8PZgQRxFASYj7ppnjMtZWebKFq",
  "key12": "5JUbSiHgsF5ZKM29XhkTuKwDnyGrt3zu7Ext85WWPFpM9pPdB3uXoZBSG7a3Rhsi1pwGVQ98jaAXYPAH5fwyuM1F",
  "key13": "5Xq81gTWbyXXitfDsQ8iwTzgxqaRB3BESauu7Rcvi1wa397PPCAGG8ReP5pWW9SzRfx2EcsrbCDkwDu9P13pDWXi",
  "key14": "3WSqVBcmvVD8nQGkKV8X8MGd5CQ6NRBCfDtB26tVNvmCbxDueC1URvM38CMUnc7gv5bFYqiafagcTRVtTJRVRwg6",
  "key15": "Ymfszek7j4JQFuKznW3VBcEtQwmc8f6VYNmPezbeUGJbNgqAw2NBASAZqVHdEgUB5mPhQmVk2ujE2sj2Q8HgrqJ",
  "key16": "jZQcGcicAJoKb4yqgJuvBQnXc1zQAbg8FEWprN8RMCDTt7wZM3cKLG7n41tbdRtYFsCiVKpAJMgCz8Fri6MPHAj",
  "key17": "yy87i86AXv4cEPmfDExMrHTzPt19FMez3YJd2GY5wVAqVf8yK7HmUYTynp6RaqX4tV9F8KofoPD1pJFgWGinLNZ",
  "key18": "2RPjbWL86KguPLECqVtkZRycgxkdjJseopAnjH53e8xsMnyMEVwvdk3nMUmkx1TokjSmm4Na5oYCJzfCty7As9v5",
  "key19": "2P95SQgPHvJmXVCYTuPfdupdz4KCxRB6R2aHetQfNy8U5TXg34s5o6HZbHqrjEXcVDW4DokENFkE2zeypzSQA2Vu",
  "key20": "5wcJn3CqbG6SsdqVxVcdGwPv1GFduagHpoZstHBa3acefmSMTCo5ynsVPKxMxemv6g7qgJo1LkbUuoVBf7DnnMya",
  "key21": "5nVLwybpASpNWma8JYwRAXEUjvgXYzM1d3mWdEUKSrQqbuD9PXzga2mWaVNU2bsqaKie6ofAEmKWJ1sZu9ndNz5W",
  "key22": "fU4cPp3HeL8YUnDhQxNvVPrMmHQ1mmZRtqQ4NmiYchC1bhtXe1yDhWH98VCuJe9mKTEETJ2RSuPRA7bJ5bV61Np",
  "key23": "67MFaFpuzsDHr7yFuEHwt5CgZwZMddcE5dn3kcq1M8mVKWEebTr9agfhiGY3Exd4gdhzHRhLEmXJsGRpLkLya8CX",
  "key24": "5Jk5YESFGcRxdhWsiWVwHmC6Wk3XuWFGrpLcmVgGMomUXA5BjFBSNW4wzRJmf1oTKCGuwV1QFouhNoVcvbqXCXPH",
  "key25": "4CbgCzB9gSrbUGYe54519V2yfTtFkK5oUyfGpVQwH6R3rUXhVaUmAtEypiYEfaNDFy83mPG7NGyqNZjeeFZz5WuL",
  "key26": "2NG3YZPbJ5GxmBXW2ZaW7Wys85kMQHJazgt3WLz82yuQtcnoXdT5F9GyZmLJKX7jArqMdaEBPABPKnWzwdZrMfYn",
  "key27": "4rjt9ghf4pmkFoUMZVgVYQwCnU1QjvhrTaB9GTaDDPaZmrWcYo8cgU2gK29vU2Ym7GjaYxLsVuSreTkeDorqyHwu",
  "key28": "4gnJHmRbukHDW4ZeLATRpsVCG3RCeBpib3963SA6ZfawmjnTBAQSAvikXcfKXBnBHkLup1y1tUpATdVtgqsNDCA8",
  "key29": "3oDha3CBUCKqRWFVUBgSLxgeiHsj9SjZVP76nWzTpinGpCzTumvFQsPwsmXJAPMaZudH1ts7ULk5KdqzgY5YTrp4",
  "key30": "gTiNAfVhYykeW9sqfg9nkKE1HUSMh1idNtm1sHmj6TRkv5R6bswimmbunGzQ18kyFcS53exuDytcqvkD6yB7UQH",
  "key31": "2Y3Ktru1yiToDZKJscphovCyF499dfrk9tkoXXVSG1gWDfev9Wzv5Dh7Yk7ogUDmSs9dfEVmpkoEFTNikrRZUVvm",
  "key32": "4CHgWkbuCEueKvBjt7YeEBpxgorCVkUNhzwM2rCZwmUdGsMznTr5XSMxsTS4KcUrWRWkeogRmDcj89kx1CyKaWmm",
  "key33": "2Pi21Mv6URaRFT23v71hcoyiTEtF99JpnVm2qvNEzpo3Bc9iMKjuhUwyySWCF441wRYXYdUgLa2qQz7VyKwDRMb2",
  "key34": "4RWuTLb3xSs5FUzU9Bb4kcEmGMkqCAUvM5WCL81wYgj2wBwHQ8X3KgVkVppgJUBd6FSeaZnmx9XnXjQ7MT77vLWB",
  "key35": "63C3gwjxN4Wf45XGyAnoQUTe2PmSynNPcfeRXxkNNB6dqJ8Mu85HwPRKVuZakbk8GZKyXgPaj26s8puMqwfMDtDL",
  "key36": "5SdnhxU2Lh9HuwE9bJM9rAxtzeWDGSzb7gNYTXseQPno2HgHfqtyGpaaxjVG9qxSZpu7rtqVaYEkxy2Ec8wByqzC",
  "key37": "46286ySzD5P2LGnHHqFYMNuYPqsySCU1Pafq1kWjYr5mXs5PTXj66eQvr5GcLvoveAjm9WtZia1eADrmxAho1pBi",
  "key38": "4qTLGRhH3avhDAm3Se3SVEwm1vyopja1GNugTpiHVYFtmWNsm9sKXGtJ2Zk26kqQk8AiSb3ZhQmgqcwkuVqoobc2",
  "key39": "4vFtJTVJ94qu3XT73orRvAiBtDcWTsYoC4BoHNJ5Xqm9dD4gCQ2iSBUsW9P7cqm2Zt9UsnQqJ4bsvXAE5N7rtAoV",
  "key40": "45onsoGnwpcDWw48TZCoswTEfEYJKeGjUBFMebXUpqU1fpFn8nhgwq2UUkVJYpgX5cXZ3PuqeBRuARnumyNUy33t",
  "key41": "3GdfTf88u2j3QdSj2Qd9wPbjTeJqehsxS2pWfEnJqjC8ZYmkNJyRGk35PUjRseVWLSRydtNfWwwaxUN5NbXUNbTP",
  "key42": "3bKb5wazWfE3VYuQsWAENYZWbSiv6jurFFB8oPKNcd7ssEp7myAdUz7vuYx8deghqpYkwdTtLgBsbeL4rWkvEnNT",
  "key43": "5tJvVWfT2jZkaKjsQPyphNHcXJTcgdN6phfmAp1LsuzW4zfojkoDv3TZXaTu4sppDJKdBERawbNC7d7nmWtBwsY8",
  "key44": "4Wj7HmmXpKSyn6h876mY1BE9fUVKuKP5Az74uWgfxHkEuWXx9fqEjj32h6Xb7JauFjTSUXueJZwkzkskMuZUM9Cc",
  "key45": "37MinyGrowJMoD7EugtGfNGc845BKgYQwPGNCRbnrtias9BiKF5GVeVxYoP7fUvvC4KbwYmi2irMqQpHVG3snjaX",
  "key46": "4ALctQenfvhbkjAyKmMcAwWdov9cf6fKLd18n6riz8LFqPJxs9FPTccDW2jxZtLiVRma2a9gcim63gDtaN9QqoRL",
  "key47": "3xKABjpkdvPZRqfkN375hwETrRQ5RSswJFhHSemb5PkejZGXYo6HGU3LRFGYLALdUMYvMyCFEh3WHS6NtQNkWeg4",
  "key48": "5Zk4p8nLizcSDb5CJJ64gLzs5CANdcUcGN7EsZowuUJgcg5u3osZm9cHQYd3RHwSwvHs8PzcwNq8mvvEWJDAj4gi",
  "key49": "3ZPkMHV55hNVTvJMYsjJZrpQ7gGxHuULGECUaC8eCpZw6aiqXVvmHBURLfmkk2RbwzbY4meA5ttzaBCoDj8XMLKL"
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
