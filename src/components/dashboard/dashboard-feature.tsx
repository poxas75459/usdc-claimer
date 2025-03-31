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
    "2q75xSB9Px392Pg7ErCDGT958Crr4bKHqw7zyj8cmBS6j1u7JtuPGozTUx52mFBhDpw85pv5wvGvdGFWvdMNz7Uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZxKhrtu39bdcvTWzMMmPH8hvjjcKBmGx3aY7sctU39ExhSasmzDm5UpAkRrF1yieo7Yp2t6BSvkr7bcab2Q4EQ",
  "key1": "56FPQb5ASr8mbqhaYzzqoY1QcMwwpzXEVGv3pBpijDdHsFqWfsstKieeZdusdoEJaxaLNdGpY6udwd4GReJWhWLB",
  "key2": "2F1WQBMncQbZh8BEUcJasv8mPXGDPRUNEf8Dk262azPxJj1dd6UNemTDF7W3jkiGcnXB1EAzmRUGJ8YfD91dHb13",
  "key3": "4T57ZYQM9U5SLwszDjL7eqa2LUMANVVcEqBZ5dzYuctXQL1gXeGFuz9fBRPJARsooYaqb3wG8Qpj8t769jkPtQpG",
  "key4": "2V3Pr6Cq1nU2KyhAr7W3aqtmhB63H41qfPmA8jrnZGJG4Zjd4Nip7dBKsTTUofi7YRCy1evLVdtb6rPqRtMC3xSR",
  "key5": "4BAcbiCLXa345vqizNxPWoX6otFUqtSTL342MKfomfR4MpwBonJxsqTZZxWYZx9bs6oA5wN3Dt7VsHqEoX48b6oA",
  "key6": "621r3sTizrFa5RHAmhAEhY9PwNA31srJLSiJzAkVoHo7gAd2cZd7dyM1Djo2DC7st9XcAra8MXiqHr8MMGjsMxmQ",
  "key7": "5FKgWQvKvHnT9PAE6tkRCCHA66YpdnAyL2mAbihqmwHjDpf54mekfhDAQWLR24ftai17F1w8cgFqnBt62AtMZwdq",
  "key8": "2iPk6c5x5pu1SV9ET7ahtXXktfZa92K4j1rHzJuWY2oH8yxwsp4hTUM73qiEcCxfQ1dRpQeQYwZ4rk3GsHczZUVz",
  "key9": "4nhNZ1T2ePjQuPtGy1FZK2kqjMt8byjjezDrApYr9YoXbpkP7CVUJmq6WT6RF3FqdW4mohTHs1Lth6vkR5k2D9Au",
  "key10": "3Ma6sxFSUH1YkVFFvVN54xkMW2WekEYy82TzPsiwjNHkwGKXyBvA9gNYYCEq74VFLUXYjy2qoRgKuraRyCYmJPk1",
  "key11": "3YFqSu7VLgb5GooVudDgW9f4ZitxcL6GUjdvSTbdAPSAZQeihu3K4ks4RBMJcQboHpeN2d5BHjTeYdvT3ru2jfBx",
  "key12": "59JPdNSMvdASyGiA9PEDgtamUpAeQkZAT87gotC79HjLGcaE45SCVWJJdNKjzsTW4F5d3kkv1jKE1M2kXvhSrpuy",
  "key13": "3N4Z4wXZek9FxaWBvz9nmcFiFMjV4mDx9hZssRQJE2f52pqx7NLbDEgrXPS76ppvf7cdge6KNzUUQz8wAcuXA9hm",
  "key14": "2syRV93euSagzMpjUiJ7WfMztnnPemXvW8rxTrv3A4heyPx56FnFR4qBjmtbTYXfVVi3PAiwwizn5fi1BbWTKi3g",
  "key15": "4moj95WcaGr5GSHeGRenuo62HFb6HMS53S49ka9ETwxSLLbzUiPTkyUDcVL9bSFCVV49V45AMqqqconKqgbJqid9",
  "key16": "3vGxLMWVFw9yUKSMimLhtiwPf48dmrdEAdiMVPAVMWBWk7rQfGbJLsEYovGjwM8tsyBP1EcnFJU8B9wFw4e7fp8L",
  "key17": "3ARH8uPpLCL35xST6iAmuoPoDSZwN1pVstorgJb5cfNoG3BTU28rWeL2S82zq36r1FSz6nxbtaY8JDxcXNogjy55",
  "key18": "541ngYPRjnaZcbr7DZ9T9gkqyUvkT4vAtNm65dvAGU2acYV56KgvB73U2tTUJDGRntBcWdQzbUanzfxo2MVpzRj6",
  "key19": "49hdWkh1XB8VRimpcUD3x2nYiGLnx7gJZp49BWVBi6d2bEeKQfhxca6aENEy2NbJtmYBPhxRxNJP9D5oE6GxfTQ3",
  "key20": "fjGhy9MAt5AF6HWCtcFvGg9Vjr1Tomts9mPJ8yowZiCkdwq43WKVXiKoVu5zrWHDLUq5ymP44T1rvifoTq93s9V",
  "key21": "2rGtUvrDDtXqoZUD9QYYCoyWiDriXqP47BksE4zyqjotKns1eeXWgYJfWX1TaFgFRnESGEBndMb7bAVcxgGBfuM4",
  "key22": "43thw31JEP7X4JRj74pSvATYKaKenaveZduTVToYFkj4LFSyneVs5DAqDDu1LyhwP7NTpUpZqvUwkZd1aaemVSVr",
  "key23": "22h6vYh9VKiMD3PAReFbAF4EF2WZ2jW94qZ3zoJqV4beQVgR1dnBRfy87FZE4uBoW9oYZFBxrEgUKaMUvHwgpSPZ",
  "key24": "5ne3bobrfiMUQ244CKVgMu6fXf3dRMnNXgLpkC1U1GSyPUXsfAK8RRq4LHVGgaZbPdUL1uNh7bvqFuHC1am4EDkp",
  "key25": "2jCJkdaZyiT2ZiKoWUZz6cjpvdHSFyZoSqwopcHu7mCoMoDyQVxHL2A5cDvLBgYfUFztKigqDssaYiJhM5Pdk3Z5",
  "key26": "2ufG2bW58fBu2kZVELemH4Qnxha17dvZ9hdLD8csS97UBa1nKnNsMQpGf3VPqCPEmSg4Vv6iYCUh7AvMdi5y9fvt",
  "key27": "2VifUGtE3Mq7FoeQhJ9t8ScCZrzuwFJQtnBkzS9MqGmhgjqE11Rkz1X1JAr8kU5G5MNheTwrM29CnzV2iTVnAhWx",
  "key28": "5ReAKL71aFpFMyBmZp4sBWj18ryx6hH5ohMUiqr6aEksHuGFyrszAFEVvLd2uX6r81YNjFxrLjiiq9fk3SNB3wta",
  "key29": "2RyeGgUPu5fh1kZWeRcZKMKzjQXKA3Xar1ESUddevUgJPa9LonCCEyXXsGZDMC8qugwKzfwV4oiD8NbttJ6uDDph",
  "key30": "2sgnDpzeJK1K3g1zscghY1wKndrKXGva2w5nrfwijFGWLREHQL67fecc6eta5r28XAghL4hDQd56AwcCRTEQS8Sw",
  "key31": "2GtM3P2HHL9UC5fmgmScJaVq9V2j7wcNjgP6fT2r7JderK9QKdbSAs5MxAG8UDxEUdhsgMYVT2o2y456UFRZyo6q",
  "key32": "5Wmf3T1mMWb1kbHCkiyN6HQXHpjBZwEwqjMnT8se6BarTnD3N1pwQxNHGU4mtZZoXzRvPkBFEETcWmTCMXM4q19S",
  "key33": "5UHgHRpwqsjJ4RLDs4BirW9R16R6gXckjttiSLdxA58vmVD516nsofevSMfVm82ZkB2LDi3LC4KGcsXHCcf9FmMY",
  "key34": "h5Z3iNmZNABgkjcZosFsuaUBvcdiAXX23dsG29oazbQkVLmCvEt5onvvRy4pUMykDZpWA9NdkJEF6zxvXnTqryF",
  "key35": "42WhEp2CiujWLGDao75UwTXDp2zThdjmnYEbMqEE27uP9fooBAZU6giFmABtLKh9Rn7uDyJcF9Ym1zyFty9g8aSV",
  "key36": "21ByEonMwfGADpBYERUwQaRFjwK8JUQN5w9RU5MLV6jDhzCRqKfsxPtBT2xnqsoPvLnhhawJoGWzvg5mhFPEXAfQ",
  "key37": "5zNjyix1AaqXJR3kxgtha7vvU1mRX9EG4cHtrcN74PJwkPkjkr6RFCognF8MYqKXRx2FYU93RUfXf2Xn6AJ5swi",
  "key38": "59rDh333SwLEUyZP3cZaVkmC32Ge1VRNGzeyTvZECjgeAMuiM4AarwcEq8vmUUKV1DkFDrcBVguH9tF2RnH86tg9",
  "key39": "3PuyhWwHcuoAbinWnpPCPqfJX2gP3a6vGHworfB5377PaJhEMPiaucjUVCuCYp2jHb3WoRetKhcu3gvZTiWfs46h",
  "key40": "5aTiS4f2eLcSPx997isdjjyJefX3Gmtd8E4cPHTgWcrqkeK6x2QPpeAzvwb92ypMsvMbM2MmYAHzU6iXWueqiYrb"
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
