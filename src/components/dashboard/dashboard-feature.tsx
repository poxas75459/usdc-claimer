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
    "2o1XpAev2L2Xhm6ZWy6nnQitikqZBDYjEaPDNsCjpQLMQpkGhvTmcqiEZYVU7zj7KqtJTgeT39hab8Vg7pJns5bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uxS1nmhsJL5ECBrLkKP2jpaKLRJtjyCRpPMpZoqBouX1VHUBmUZD2qDgeTnWU5wz5qYHp4wQUAVNRz6Hi526a1R",
  "key1": "2L1nwYaUL2TxHh53144XYh35sMGkYwtWCudnfq8Wnp3VNqoXZaTjhDiLfnmGSdfX9yMSPkpUxD8r8GAUjfjLnQXu",
  "key2": "431fosEKgE1nTNAz7kN9tAriMgxuVNVMhqoAB819nKabXTXZETinXcxTQyVpKGn7HnL1T3QvLnYkLig7tE54DUTM",
  "key3": "2U9H53VXDqsMjBkUTyMxnmSid2bHW5D3cMQGven6kWD9TfWxheyMkcQkPhpqer371v6HCG2HontviwyVfCgAv8KF",
  "key4": "4E2BbbAnVK9hFL74TbezXmPoWeP75CvU4aEHWLV9QFXiL9m4Y4jEVbeqbJhuMBFoMDi6YhYTfqtA8JUPSHhFkYCk",
  "key5": "3p7GBGQPpcWRbxec6ri9cnAWweCfTDgMuko4p472YLcKjEvyVw4YB1kt1SHGcgmtAJXdzs2b6kRNwJ24apDz5up1",
  "key6": "RutRBBCd2JvqUX9GVYRfZi1NTadHpuwJnRCsG1fLML7xEnr2JGch1t7wMgPRW5JPX8XLTieLRx8BxPbRysPGCw3",
  "key7": "5MKtwVX35szKL5XxdyKrpfx4JjSPU7EoQf5VXMxAMLpz99KYEapirn4NwNTUrQUG4eJUXuGENYX9T1yPhfcjC7vc",
  "key8": "2LC72wfnqG6GnmZanXe4Rb5nKWMPY7vAasPc5BmMRfMS4vh4weKvPB1YfPJae3QqoQ2RyRJUYnTYCa3ZhfPTFosW",
  "key9": "5ZhJL2xcexX8uYpnZGCAAq8UeLVwJvpLBA2HC8vFgUioe3onsKXcsUuqYUxpSVvR8eee38VR4a8PZwfEBBrnfv12",
  "key10": "3TE4SK6nU8r9eWpM81v9EFpFvFBd4NpNRDtGBDoogbvKRehc6jTWXcNryJyBPBgKUoZqppVJqucCGaG2UKd3jNsN",
  "key11": "ZHTk8Y3F5XXZDCVWVEcwcSVehC4TnW4jJfg5RG1f4Mh3feXMUoejUGAJh39yh6T331h4CdyLGTwMeFmM9Mjvzv2",
  "key12": "DDiCX1FhjgHvBiZuVs2syTVVzdu6XL5fQdieQvciYVodWGSH8pTs9vwvvh7JenxqkXVzidfBYWCKZBJ5F1iwXYA",
  "key13": "mzMJ4MqZtamozLSUDhi82dEtYSsop9whKBEv8P1VxMU7AnCj6cNy6UHhmP5KbET85Hi71MiXZet8cGamJrGUCRu",
  "key14": "3e7BXrHBXt2SnenWFRv6UBT9Lruq5MskoxraVS2CMAdYuFqkiUnh5gmmTTDHtsavFzHM9sLsySEzn8y2bZpX3A2X",
  "key15": "3E9TUanNMQugHoGKy1YFmWca9HxczE4rP4Ck2aS5aTvRMHZQY1zRVwAX1EmMQkr9VMsryyVWux6yjju12n6jFp8C",
  "key16": "3nJaJMvcXXpD6237W7Ho9odRSpT7Pio5X5jRHuALtwinY5r1QQk1sfsqFGgbf7F5tUHwPmnsJoTkqWyjBAVnpPX8",
  "key17": "NQpmLrgWKb8qP8ikxWNTAnuXVhU3TJEks8Smr4ZZD74yfF8PmdifCQS2C53MGTBaLHXQN6XjWRz6VqkJYWq1Ng4",
  "key18": "2Vcuo3yzMQhGf8zwNHXmpbAnjEdLtiXhcW7dbwDzGRYXofogcCqpRmKb6r1z89MGDt3VE7bvKMqDfhvJEycFSeRF",
  "key19": "svh4StYmAx6E2sggcirVGG2hhRU8KJoPzVssCUanqEx874NsHRQenWhnSmuVzzQKN7RrU5wX2EzgZjNdbvZx8xY",
  "key20": "3dXLHeSCfNEvm3pETdaeUXeFabsUYk26seNrv1YVrE9bHb5jZqz3RQ5nCLBhDcdXF8q4QWfZW3E236YXG6rPveb1",
  "key21": "2FtiVaSMkC8q4H2yDG3ZPDqhLQayBJ1CKcexDHn6kpBXPzGotNx3BjRrFEDqBBLSyPq98c7K4xKnkcJvLGQTf3HB",
  "key22": "NB5K9AkjooMVseMEvcuLHZTT7sXJc7dNL7MXvJyWPW2y4uin7BgHKmgS24vVAcc7cingjEtqfhr6SLmx2fCPaVc",
  "key23": "4SpGqmxHAJW3xDV7if7F6qVv7L9K547CWsWicq6ShNUd3dcG4wEGuZ6DSqkvhSV1q7taDqmsK6BtRfZfB34ivKSU",
  "key24": "MG8dbwVdSgqBbfjQb3aBFB8BWuPmQFb6fphxUiZ79Lv2x97XMu2dchStJNWRJrJwsZdLmbqjqXqeA46s6FMV8Fy",
  "key25": "35EJxk4F72x36TVf5fGdMygKGrY2X1ZpBDDCTgPuM1DPrQCceLA1Pt1hGtVFFKLtqmG1Efoe4EKzQymNnFJcuXnB",
  "key26": "4CDNmNQ1f8QtyTHz7vcf2X7RvFW182vuvkmrpTmEuox7FGHY4FbLqSuTs3oXiVfvGCYxCYNKqtz3PYyFn1NnDL2d",
  "key27": "8yMrtFBNJu78CAcvJRJfjcbgYSFPcRdUXszZyRh3VeSZgAE3moifBW9HqiWsCeGqEpUFt4eTk6uKyJf4dLWYv7c",
  "key28": "3qHhffcBNV5e697fq9c2wVNfmqPYdVgFwqXPnv3R9RrsSkJwk5t3eaY72DwQPENpdRTWHyyTU5dinetezoeV3nDV",
  "key29": "55khig3a7FXJGRNnuUiKusHcqzRz2g14JFfuuhR9qz2p4MLsRbXrjudQvCqkmtUqGUxZSvn2zL9XFJMgsKG7NT4Q",
  "key30": "2kdYmn5LfyhhKKxkpqMhzdywXbMcrLH7hgf9KLLK2VLkysRdBhbjwRGrJmq8U84bVPRvpkJAKr3Lfpttxn7TVCeA",
  "key31": "3FZn3AbVuW5ztJNYMPWoYACPk1cS6KY2Fc7Th5FwvwU3MLuW7b7Tot2uNhrSpFntrUvDGwpW1t1KMWn75mg7DyKL",
  "key32": "31y2fpi9REed5YZZ7n5Mcju1rTEh6tRU2k8rL7Uxmkhiz19Kz5TaUYfMygi1N91ipJY9XCnyKWuGgwiMGZzv8HwX",
  "key33": "4VPG1PM6e3RBp7BPKANqUqzA4Se1uwTYyVGciCyCHB9xnQHZqZPcNizy1DMmMeTvsuMJTifjwma53iEzZFfKQMvp",
  "key34": "2bCe1DxudyjMDkgRg11BkYnxPP1C9qJ8qcVo8M2dM1qESgfBMXkAM4orSLuFoLQq9Sa9TLnvJtygaLLXYfvX3Bcq",
  "key35": "3o4Ef5WpKXFVwBV4FpuqU8uFKpGq42zqPQ5DfKJdVCupF4SmYkA3rduyRz9qqUneLCJa8n2bFmyWAHwtTMHWGorW",
  "key36": "56BbaUKTJkyjMNfXnMt2CD8KAWwGzcXtqjyTF66puavYAMHUuGbSwXEQQfVkU45aXNmRPkYKzDTbRE8PDn6z2r5Y"
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
