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
    "3S433zWHtbit3cKoUDyAL2Aru9PdqRVAd5wy8S6ZkmHg6GFdUEAp7XjQZ1HtVVHDPxvq8Hnzrcch2S2xCnWtYQYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYyFazzDTbnYnwTU1kpQZXpA7Z82J67Md6teK6cevJPNNttqvbyJQzF7132JTGgfZK6ex5ke24c8uGVgVtwyKZC",
  "key1": "5cLrmtnifADeLayAMZ8YSr6TRi7MtjMabwdrHDWv5zPrf3XwJS5kGbzy6cPSrgBHUC9vaVoip1SSPaSujeQ6hd8U",
  "key2": "2jcqNc8F8cSeeomYSKGHTHvs8NkZ35yzJbPp9bzwdeqbLhBjsM9Upp2unHY4pKrmxoDstgZKfRbHQMZoCNuyQE5S",
  "key3": "4ddg6pWfwSg4niWXE4T8EXjKar5ew7pYSDP6D3NcepiBAwfAN4NbDdSenmFqS77mHEyg1gGNkVHj2mye1AHqqazT",
  "key4": "4qfxbi7hXLPifCYkk71XSKZcEAo6Pv1vkdhcuEFNXy2s91Eii6WdDn4fVXk5jMTViLSNq8578evNgwVGBbNnYuj5",
  "key5": "5thqCCyAbowCEGXh5EdzBftYHmLxRTcbhok7R7JtrUuFFX8X5YmAtAyxnKiw582HJGK3ssGQB7UkRK864HZ2GbnR",
  "key6": "3bpdg7VDAq2b5ncfR8f5d1ZGQbGBzTTvVgchLYrdSQfz23qdbvPnfTGuPfGtpFYpb67Bak4UCmmfCwXxSisnN3ab",
  "key7": "4QeqKbn3tqZdntHqoQNe6bnB9uqmwfDHAsTax7Np2fXhkCipRDsJE9vvVRyMGcHpdrmVc6bJoU4z8PzRnVN6xHmn",
  "key8": "5dKiu1Sff39oCsgdvJWFeo1PFXMyrieznEbssaWQPALenvXH3bKYT4ogk1XZnwRwShLgBHYpDqyTAp9SyhmE8nMx",
  "key9": "2DTaJADWyG4BqhMniBSUwk76rencEVfqtUnX3T5hb1XYY4Uy4auCZKFVQyPLEU9VP1yxi8sKdo3pVeaE3WPjqQPE",
  "key10": "owFq9YnFaYvKYM6B55rN6LBKNv8DmnXtbxFTpSfzDdsVKW8wroAwNSAd6Hxwn5AB6179YTptMEEaKUjph9o76TC",
  "key11": "4sFrrgHzYYGzxqEPTjReKex4rXrHt6SaSBQpohvZyo9yrKN8idqtNtRtQjwRtmQcfqSabqPGHhY9JPNLHBay7ipt",
  "key12": "4iTRLCtCK6tx8jzS67EwMf7iQDQCkoe7SQL2G4Wb5mJcVkBNaQaoeyHSozSqxu6bGmZX1SjXE1HxL1SYDVUMiZCU",
  "key13": "2ggqMxUL3KXjtjx51VcxgAtaRU5wueaQLfnjvE9oRSZmNMvcA9dT2SscWtR5QwpjpsAoYx3WAcd4HMkLedLVXW1F",
  "key14": "4LiGdcLGUPdAR9HugrqYig6DDk63XQBV3or2Scq99H6iWygH7v8SXzZFoqKFcsUQerQjTxjmuNvNX2ncA6QuMJup",
  "key15": "2VvDFBfgngKnkoiagEQFaoowk2iQSeBDk1zXxLx93TVocE9XGRHqSg1uthtaT3kFiXfQyHgXNwyPdKawnN6c6PLZ",
  "key16": "MyVGutHy5iTJeGRXKEKeJXF2KFPhZyW7rsedU9RGzD3edSjXJRob1AocoEnGPnP96TwaqqNWpgi43SEfb7LXgUp",
  "key17": "mtRAuaA4J4Xripf3ZXjstgCqWeV6oYPwz2yoQZwojyEE9EggFk9UauvtUgcpQuhy4AdxAX7ZZkS9aE7uaEyHqV7",
  "key18": "5Mykcqy9HZ2p6dWJNro6DkeV4jwsN8QMA2dJp92f2fTcVmEZQL98u98nRg4fnzuEYaaHmSJeSrqyECehuPMUyYmU",
  "key19": "4BtgYfWgRksARoFhFPonKygW11q7srVHNUEyUVvKnADrHqDWcvTqYCiGzDEyKeJ2XYSLLC2MwQE7iXPtWifgwTWZ",
  "key20": "2Jv8wR4QdVmzqT5oQTCyb7Jep4Z3Ti412CjX6tD1ppJmipV9bi93kXEp7EG3y7c3sdp2RqmwvahEUxPhiG9ym48n",
  "key21": "3BNuTxCxuWCgMkrnLMbCcp6kQ3q9CWCRVE6cu6NHpEjDXQs1kTFRCyPztTDCimnJv59CDgGmEsSYT4TG1XagoML9",
  "key22": "55Rpx2HT5uTPrQb3S8qoJA2XqEie8ShevDZZwLX5Jq4zT9fmeksw3FeGLwUxkfcHGpj3NQmbe8jgZsiNZ7hAFzUQ",
  "key23": "YvriLfK9hEyC42ytWke6FoGCaLTkNv3qWBiVT55pSsMvL5Xm3EC3q7cwanEsdYuMfapKWahKDU8xTYvK34jP5tL",
  "key24": "5SD1QtmX2DvrHNBNAifsUAk4vqMc63bWDdB7xHJXECgugmTh2rfgYKfdGsbTdYBuwF2RXXK742Y1vj4jXCaKJmbW",
  "key25": "2YKuiGvNQNmRQMKfcXFcmU5yDqrWG7u62uyHmyP3RP7UKWy92L6Qo7oHdxKf4hu5JQDVbsA7qWHoTrLHNoUuKyzs",
  "key26": "4vR9MDpotD1FzF22ry71CWtNMwLzraVsSWMYjRdwgTyN2fEmYcH5CpfXXhaRa97KSczovjUXAYKtUNfedLX7MB2H",
  "key27": "3t5ga7Vc74sDjuvEy28ckLqXjdjKRqyfQxyVbdQ4z6dvdA6BvNmvwf7Z4mXYEdxDsER2W3EoLGTYkuSLkyA9w45b",
  "key28": "WhB444BnPoqx8LXA1fDg6Vgbu6HakyZQoPtVmqWSynMn1SCDLmfgf4u2EjA5fGn9mGeNeZhNfeX29VNvMji4SgD",
  "key29": "31SDNPyczXWvebumFyRQkVxApMgZoQQNuEo2ammZBoCQLYonsf84ps5UdCcQyzKxBuVS43soSdStqqt866ZuyUzo",
  "key30": "3pDzHBC2y6yc2rST6mcCTYJ9xwZt4k5bxFoXqq7jUfp1KtjSNUzc2jrfvb9bBeEsiLpy2JMLx3aPbNAGqRB6RGcZ",
  "key31": "5zd2nUzNZAUwg7nqdgJBhMSbaMiFDtsbnQ6ib834BhZwEjtoALhpx6BQieG8t3115abAFRbn3KchZXxr4GRCnuEj",
  "key32": "38zENApeU4cux3LZaZBxrk9juY1wfdDUAGJoGbqFTHkZMGapWReDxyPKq3x9XCmg4hR7nCWUWcndBrXXS7edB5Dg",
  "key33": "3EWoD3nNohuZhmbuQ7HHTCKsZCBhY7K8Dg937sMZXyU8FpTPLaue51CdAcz3ox2neKPUmS7zyQHuE7g4dqSqkugf",
  "key34": "2e8uH59QEo8B5hXr1ULkFjBQz7eQMaFLe8MeCwLCtmZGjCsTjR3guhNmRQQyGHWdhmfdsw95S7Ca7ZKr9GZm84iX",
  "key35": "8WAdEqYdq5rQoCoQoPhcNUUVTRMiEyEoFmxae5bRfAJYrivyVuofgZhr5oPDteYf35JWWdzTPafwVuMd2ywPno6",
  "key36": "2yTHyD25Zot3f5qRWpk6vJcgwzfNXng4tjTZmcQB4Q7tJjVAN6Qb3JXHL19h9YkbqbTkA9ifm7eFH2cPDM68tfBZ",
  "key37": "5qiwT1xo28JmHGtuihYGiTjPfHHbkY8w8pG4CRqcwcFDmo6BMTWGy4yjXZEDJxiHV4eURL6vojJeztFMJ1udB2cY",
  "key38": "3jtRDjzsD5MgBAySJRJEiJwCpXPvbCSxnLjKwVr1doSTHKJF1LKhAbZWNYjnWYwaYhJPnqqZG1TswvqUoejUbHVP",
  "key39": "2DH9iVZBwx7hMcqBs5BNWCAQ9fNMX2PkHnBjfUTMR3G6AHeaPvXPk6eoP9M24Ca9BTiJjkPrhm3nmsTsftZTSmc3"
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
