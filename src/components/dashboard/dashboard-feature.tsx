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
    "2Tg5xHFx8XehB5erjBViBT4xyhpYszmwjUMx9DEPB4AjUQsHwhbcTj9fsiEbpwZcKEgK1A1sJQiEtu99GCrgsXdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46s93MnkEpTm4gSzHjTCsXent2Dxt3YF6xHmwwfkvzeWfWsBRqsa9ofeTkck1QuKR41qPPM2CWzrmNefRXmDUGKE",
  "key1": "3EnwmEGqjCiRiW8sQ9iaeoPpfWD2Gj1kGYvckKktYpDFbAJby4yXsvVMuUjf4JZ916MSkPYUFvHqUVDvafMRxx97",
  "key2": "g7eZK1UobrAPKC3SLQ3a31EHDwmZ2HViaw6DCcNhkqfGuCExtbQnwAQFqaTg6viejrb1hGHbrQiST1nHnLgJUM2",
  "key3": "C38KJGvT8zxLPMatSH4c2Kth8ot2LSZzNzrdigfELkiEqRsAcbG8Fr7rWXsQLkE8gHbaFR834wbYv5QLKYwutwJ",
  "key4": "5MA9DdDwxaxvCsRt4jnT3Mep7KfzSsQfsqhbzd8ZGoDw5JYe8JBLeNvzXdgPYezxzCyjwTYoWFiwXVd313mZE4nP",
  "key5": "5Uz3rRHwetkPpPLBmJj4GkwZnCTPrn8KPY98bVBYaHPukKY7SLAVhz4S5Q1Zq1JJkDQgHVdxZpLNLJCWqg7mQYdo",
  "key6": "4AZe3M9LDYPDG8BxbU7kdscpF94SWAk6xdXjUKxqbHorMJD78sPbXabNyrBAqVr254A9nwoZ3YLG4oY8rmibA4qr",
  "key7": "cGPRjcpSruALG5ecCmvn3iPZ5YfwMyQShhNXCcCqocHLTBMKJg7ZW48LjbskrMJJqY8UrxWKW9GrTza2vmo8exf",
  "key8": "3FF9JfzCenT1mRmJXVAfaZdU9uLbpeHueGvMEPUDfPqWMMybgF9Wvmzy7Ko33atzeyTFbeG2hPtYJ7RkDAeJ5Gtn",
  "key9": "2jTdxPq6xK7BPCw6ByniLZfVsgvqGtbM7JCJDotYrojbkRTTTPZXpHg6yqr8S7QjwvkPMkF7NTpBRTEdruMiCE7X",
  "key10": "3JYzpgfP3bhXPcLWThSEdKBXXg3MeHusdCpgExtfxdjE8x9aGbAH7DDWT1cqqSgvB2eeuSAh58io2au2nuo4gzRE",
  "key11": "5JFafqcigixwPJaCqa92TGRJMc3FNaK6wqiP2GAgbxGD7tU6ZsqEWipRBN3DzavyEnBMepXdG12bE539oDdXLWr2",
  "key12": "AzkfUEDx42k8BdrVFVyYanBSbvT7FNXcvi4PSYRnse3PKBXV1LcK24gZUWhTzb9EL51JgXtv5m9PMYELEGrjWwz",
  "key13": "55oVBCCYbMzj4SphY7jgvtftzd1Zy8FrPunKBiJsxpMQWnjWEgw9iUz43w5hoyRboAtJ9snCkh46fokd1PzoVYdr",
  "key14": "5f6n55ExwxS4fhWeaEFHFTuSp97g2Yj6CZzRGPhBttfPXiT9vCwijovt6RDBjNVH3o3Xkhybbfj6zqX16WFw7WUY",
  "key15": "4LnhoTTzxqo4i9FG9o5PKXpChiAHmmDw4RpZtBSGY2NWaAYptF5wLQH8nMbHbmWSiLmt5TgoYbjTh5EaUocrptfv",
  "key16": "A2L11aXVoh4cSfZnVFVDtYFcU4sxTrmEZ7DF4BHYPvFupqgjPGiZyyHW9UQAVQ42aJAbcxR1rqaxAnt1KtTJf1Y",
  "key17": "zCgmyFvTYnFAKe5hSQTKDSh8r6JxiwshrCVCZzbhrvQhLYoGnmTpPnYMzkjqVgUAcbjXTp4zpFXVCZR9nefo5SH",
  "key18": "2qdHf7YJHcVPYPik31BvvV79ewWBRiYQUcfJWBpcMxcRn4opJnxo7odh6DhK3K5FjTFY5J4WUHtwcozEgbSkaQKM",
  "key19": "4TvdQ8VhgZWxp3uN7xyBEASB1uWQr9nXHCCnsS9mF3vg86tRwfUVgFSZSfQA3yMBmu3vCqv6ogkS96UKkcHrVdyU",
  "key20": "2XKW3bZYCC9y987RqQodr5XxA1ziaGXH3JEMJJ1jQktcPspeqso6L4h9jhF4hvtpTuaBByLwzg5xTeVcZu2otfnc",
  "key21": "3PU9yfgjASWpcMXtCesPvPWiHYpeKdUkRbqbtzhuA7DPHJs3rpX8yd6EXX5kMNxRV9eEzfYhus2NEbWD3vLZ7V1a",
  "key22": "4D6kmLcJqA73wrhihCr2ygYkMTprQzMKXXzuQVESnaLoxPuGWbE8K39mkEtKXe9HkYn8EuM4KUo3zmwYcDDwrw74",
  "key23": "2aKReUCTcigY5HCR7kEP8XixF2nZ8TiueUZ1fRp5FfWhPbZ74MYFUYaxJFDWAiVJ3Uv4SqvWNqw4SCyPHsPceEXo",
  "key24": "5ZgDAQHbEmnzWEovE7U9LEMkMbZ4GJHn4uSg3zEqTQwDi2KNSQMgeMR4TM84L3xDWGdMDwjzfrUijiBPnyguLys1",
  "key25": "4cfdJkWy9zbjFU1SyGJviWJkq9NvkgFEDrP9Fsm4jJaTKqq3mrEmp3qwAF8LJVeazKTpjRyJr4QQWLTLVC5J7oUN",
  "key26": "4q6oD6TNi8AFQwzUjYaj5uFNiTsga9fnBcnV6njuweMjDmYhAoHPLhY6mKe3drz3oma13AQwf6QPmpsqCVVsSDd5"
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
