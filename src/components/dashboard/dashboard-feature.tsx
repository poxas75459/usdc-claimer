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
    "4JCfXCNZDUHdGAJeS76QLbxsz3GL8HF5NU3JaopEoaq43j1MB86WmMFBoUg37pQfTvTuvGU9AjmQKATkveNBdoki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86nLxQP5x6eTZ3Ja81RtY7D6nfeH2LVsShjAV3oNjjtqchCXnugZ1FTDVRU8nGasN8kjB7SVrc57pX5LQ2CNA4Q",
  "key1": "5ev5muPue6Pq15YY3XHkqhMGbv14WBdDma94w2Qv9MPrZZbhoyXV5q6wJuzvHGVcBPWCVoYatSrG6QKN4GnEFrcn",
  "key2": "AhBBvJnWXsi9M9F8Nay3E5PMnDThWZPobiWoiWs6qGj28MxCGZA5ZuhftYzJfW2Sw5gSGsKsWzWZG3JBkzH5BmR",
  "key3": "5yqg2Lz5ksUsvbk79UifepnjgSMAzWxYMwNaXjbXQLJkzCMEdwsc3TiHtZgwqCjNAhXiDWEdiRNq1883e3u8n6Z1",
  "key4": "5FNkwncKzdRaQjt6yz4RrS8RB183zJbhoXzn66GLpSYa6K2czWmAPjn6jLb27ta2h7xDn9chCe2xzhXBnurinxbv",
  "key5": "5Dt1unEzQqq1NEGVwTLNf3DjB1Df28it3JXZdNPzGxxGMxSAh3eBmFL25qSxQv1tofdqpqpiT2rhzAKJzYziDAWQ",
  "key6": "5QsCrvZVj5vzfb41mbqfv9dt3KNRbQJfv7JyXXLm7ACyU7AHsjfwshUfs5AkFoEkYBZqZ6gfqAjHk2pqpMwyaFUe",
  "key7": "2D9u5Hi3bLjLppqsJZTebusjpHCYiycB3MpWfFtiqTBDi31iHeah7xBqL4SdYF2PH35XFMfeM55aVeDYMeJiorg3",
  "key8": "2ts8hD1QcaabpG9CjcDwU55QZPbzK31GNgPts9AMYafKu8ykuMmEFZxjpoQS6zf6b29rALNciKdZbisd3ZYVJPQW",
  "key9": "36fyVGzSDZpCAjMmKX3Z4jGNzHK6u7MPExGWqjhwMhz2XvrwCxtUknHbVbCbXeWNn5X8DnJHyWzpW26bY2gjfoG6",
  "key10": "5qrrutUW8NNbpcxNs1fZhg4ufnQevayJxjbayQj5NdhJZKo27chj2qcfnDuXSQzrjXBRNXQ1iKg2KMYMTUATtd9r",
  "key11": "2gmNh6fnMKihUcwKUrzJtCFBZzh9L7WcA6RBgox27HFcBuv1DgN67JdDWsb1BDrsPfHBvWMScsCrW4paCSpd8pcF",
  "key12": "KR7B8FCkJtAWnEUuzPMmXqn86zStkP9EW3EZAPnyxqEUupbniWLrh8ozky3Vt6YqzxQwM4NrhUJk36drAG4hJ1p",
  "key13": "2dQCLvCwPiaRpfeLZ43RGi1taFazXF8WfdP87hmG5yCW9D7vMGrAWzdrD66nBGWE49buAeUanHdiRdbVpWbALvau",
  "key14": "61AKzq4otYmawKk2GRZaNN889uBMfLweGTbwJBGZwT5kL4PcBv9Kw54NC8WV7Mn4JLSuhht3myruoSKnSJRrFgsV",
  "key15": "2948V9KF2UjXLrRAViYGj2JyZWUfyMDJPLBQGX3Lsz27zeHHozCXJdcTwhLGkVcvggJY1MzHMJjLPLRbRGY45BnJ",
  "key16": "39HQ8iAk5pAMjTTP4s89BJZLipqErWdgP9L9Cyronm8T8Zgv2jY3SzURKdnQstofJQuTeCkByohLkmjCj5kVot21",
  "key17": "3G6F7SekpYAzaSdMnuVmzHEk6xFhZkH6q629k1qjCSHTUwg3jgzK1nWZEsS6bmTVbsPHSZnXfx4PjcxkQ1Pb9HSV",
  "key18": "2rUpzkgRGwEt9bcApBwanYacEuKagTs67LUbkP9Uj7vXBXYBSNMPjjK4PcvMwuvCWFRRLT89HfYeFJ9KUzCMVL8w",
  "key19": "65Yf5ZzpB5Bh32doF9KWdL4ZdEmLFdiWWwN5ins4kd327p31jECjKAqEqh8ysMsgBJMWzzDDfFEPKRV78gpVUCR5",
  "key20": "5QQEdhaEswhgRni5VxNZKUrEaac9Rh95iLHgv1gZLRSpShKQtGapKfrhckSk5cB9pWUWJhX5NvP18ysqjEduUuVw",
  "key21": "3x6EUq53ZwffbMSyJiBY9WPAn2esCSzJwiKZNwuKxMWrh9EYRiNt6EcJMztgoebWFysqik1HpKMKvnt2XKp69GT3",
  "key22": "2MyqwtT2WE5z55pj3Wmxu4SSdCMBxQpCkQeWiLhX9xn6B3WnUkNGrYun47VhavsKgEeYpSQD1qy2G8ydeFdSWtAe",
  "key23": "5D5qy3hKj7oPDWe28tRCk3oWMSyzk14G81jAx7oFRJNLFCaKKrG7gSX3reqDpXWszPwkWT5rENomH5wTmzL78sjx",
  "key24": "4m9svEtQ2P4dwM5ttXYBPVVyKsPzcipGjodtsYXDvuEXucS9rnLcDefmenWcagFPYmrnZe7rjg8YpBbzFxZj1vCY",
  "key25": "3k31CUvRoVSPZ2ntxaC6h2GdegBGCZ6XQmt4qtjyDwxKBk1NTRonyVicPwEqK9DWKzBM2HX43UuRLJRNRpcQV6bF",
  "key26": "5kTebDPyngeM4RH2TyUPANX6jb2FZEXJ5frHKT8bLdJTaUS9TKZ78H1ZnyxCmCvAXCPEcpeU115dYYDZFt6AxczZ",
  "key27": "5AcnJ48zv1jDZWzKg1ZK7MUzLchcb6gEzVh9BSykQRHJUBaVgrQTnFguzST17YutHdKeMBECj16KHr4T57u9fwv1",
  "key28": "TzVDPF1kUnCJ2uoh5oGXCsxL7myUK1cKK2ECfr68GR5hqvHrV8baasUq9MAZykZqiUdtfNKND7MkXdzRFeninDX",
  "key29": "4c9yCm9Bu2vupgLdNvGmxzbergABUAHZZi1CgF5wXz4rDEUkt6xVaYEihEC1Fg2rgaWTvQxnHqsuxbsp2pKGc9h8",
  "key30": "5EzgaDj4Gc9tc1BFRMzHsdBH8i92yLoYTCAevdjo7Fq9PSj8Qfw7WZdymi7q594hjnSoTMmWNZfwGxHpfVo3dc7v",
  "key31": "28Bzg5iobDmm4JL8G8kwwwK7XwwkwkgCqMB57SK22dof8aricf1nSgLHihFMfZaQHTC54AgT8e1BohrKg73bBUmW",
  "key32": "f2KkUMWbHKchPtyEQV1Rh8HH7WxKMnbwiz9EKk4XdjU5A9abKuFK9NaYy6emXUWufw1bB6StdZAHzyKnxng8fzw",
  "key33": "vLUwiVRi8WKFeEm2GZw26yvvpeZbA5B9ve4VmKRjaC8c8wVUq27tmnqiRkMuexWcZg5F5ibL1nFuvU5SjAw21yx",
  "key34": "NV5JFCXXYj4BxDNjfWdAS7EUYmk86k5hGnvM8KpfnaqScicKGRb6F7JMWEiUyePo7x8iX7HHF3kA5d7xQaeXFmv",
  "key35": "5uQXRoShzUGpVFfzzb9pYJjApfVnBmFTWXw9nM3rNqkh4Wt7ci86wwtMzDbWdH86CmwffPBDEKWyFAdvrmMbv5uR",
  "key36": "4RFirMyMbYWLCPsgqp3Vsm8BQwX9sVjJn4YwHFKcAfyBbuCXRktkBxyugf8Q1a32REHVZ2n3Us21bjzCLcK5pLop",
  "key37": "LAtk3j2EK33eFb1NLBJWKEhHbabCg9GJ9Jxts8a2c4gaC33BxZw5s1pmLUWBwLqHxdHwQk2z2gCARNTSFkyHXPt",
  "key38": "4EBYsQbmrrN8A5qSczpRQkFZLc6yb3KVYXFmHGUWJcEQGuK9hmRJiDZmfWWuFEK8A3PXMCuZgfthqCq2V6bLwZEV",
  "key39": "64kPoWuC7n9xdPsaf6LbKofuGni1bxSTwt1mhCkBMwD5tPqFwdC6qoxv9vkNSmx3k9gjfPjZSkWqZDD7d1ydteF1",
  "key40": "3UPAShofU7gECSymr3cMFg5vBa8NMTCabS495Kn4a6NL9kTmQ1mNQh3mz6VYg5UH9BNuSswXfTjbNdV8K6LCtybK",
  "key41": "5NfHBuzMpSu9XgxTYoy46VSiTm2xyHhKqc23c2eFrk7hWAksfm5ZyFzsroq89VxvL3AiCaEEbJJE4jNpNuGhwizD"
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
