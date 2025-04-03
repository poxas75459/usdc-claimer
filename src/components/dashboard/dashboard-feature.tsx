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
    "2Wh7oBG6vcFfTRJ12qtDzLf9itDuQhbJgLgwNu1P6sz9kd5t7mE3CAAm9J4hbbFrZwUNirJT4yYy8fnA6V58YmRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeG64Qz4Qcz73cy9DRdxygbexwE98FDRumzSphkH2rqutwMerpXkN3mGoeeLVn9qvAoSfUMFSGqpbjjcQ4BqDwn",
  "key1": "331PNKNDUkChaw9XiY3fWwU9T2XLtfG27tvRLjhfaxvBuB9cAZeiXcpCVhTgCqCK15h9JJJ4DbVaRXi4gGezWyvv",
  "key2": "4Uy1yj1Fe9GfAFrM8gFUXtqLT78ckgBvkS29M1J2oTwo9HQjXLAm71HEmfq2FqMm9HJNhuTHiFZdiFjBJmJquTm8",
  "key3": "5VUjZtFjBD91EHq9moG3bnUsQkNtTwj3hB4Qf2qxUTpdv5nZzKtGhCevpTzfZXmumWKacePQuaFxLm1p1bB1iRVq",
  "key4": "3VZNPr7RAyXkNB8jmDXfANRLeRgcxeqM46Zn89vYm3NCKougwdaQUWXiLLraGVpp65xsuEnEk8m543h4MLbk8em1",
  "key5": "2t1a2xNRe4FScpmTY58CC5NXvF7eDdQxA2EKR91LUmHsh36vb6Kgvf17q4XHbmYfKUDV99g678Wk5LyrP6vCE7e7",
  "key6": "65mUg4xS6nh3vXWkRJ2Cbk9gKBDdqEZnQviJt689c8pHWF2kabiRk8dHLiocBrpxAP3guGb5NJAukveMhiGQMrj",
  "key7": "5KQShbSgVmMEcdtD14GMzSfUSQhcgTsSdSamoq4DxCbvsZBLdkGgjyWt3F9s1m8dujpGRuCgkuNNuof1hfCv9WoP",
  "key8": "2iP8Dseu1ehy9uWCq5HTruLEgXdkU8EgaC5ccAaFytVctgXfm2mU1iYUzucJBAeH5z4MaXyeuQN6QU2UqnRQBE28",
  "key9": "2KKE3J36ngWV7ikFp2U3eTBRK3TjcduHTdQ2jHXdxFpdpZGwbnPiuVpqv94HX8qFjPFHxe6DRy7wFehChD75fJem",
  "key10": "2eGBpWdJENNxVkEZGZQCzF5fe1LF5R1RSBU68E25G8FtsKp6UQDwffeE5yG6dJpgbiVQngPdXNeUNSHE6VFGzr9B",
  "key11": "KjCVMJVrqsGj7La7hvb9PY7QCuXgKKmLDZr3t8HXSknkKkAdGuS2k4N5zuVoyJpPTrB8d6ZhWnoQk1hobseF1kK",
  "key12": "2xZyJzMFrNJEqFeXYmWSe5yAPhLTCv57BptTY2zzJLabdcjaUePrSt1pyPs534fWeF8ij2kCvFMURkGbJ9gHuhFX",
  "key13": "63UqmNyfDakYfhRdiqByRGfttkSJg5qqDxaQqxDYAGK8yKmfM3pQWARnddkXFNUDQ6i3Udgvctfq8k7jo2YnTxXT",
  "key14": "2tj8rKe87Dq7VSZkbpL5A5fgcQzG4dabn7fvkUghipqXX443zYpbfUrAwCd6yF9aNMJ75apaVwmW97TaBNWGLGVD",
  "key15": "45369aZczjsmijW4tH5rhhfepHZYJcrwHsGbfMFzPZLYANX9MdztGt759asrdwjWDA1XqMjiEmsu7JiF6CCPScHz",
  "key16": "67FJakzjKBgLoEmwNg3tEeZqTZDqfQ3n4H4ESPn2s8ATDuyjGX7rAXmyEUiei24g5qMg7ZWcWRtL3NgXvbtN4vqK",
  "key17": "5SpsTw5nUDnxKJyNA7yzf9Q4GN3V5mcES2ospVt1spGYUq8J3XF6UxPtyF1EVjHb2ZZFyHXNmMG8Mjc7bM3V4HFa",
  "key18": "2e2c7NTMCJhyx6rU3gpWyGNgLMT7QkDELmXMY4CcwD77Hp6ycsjHaQkUbrU4LpcMyAiXK9NGpzehgYkZCkJcS3HR",
  "key19": "zxMee2QJ2UwQq3TzSzTUj15Xg4knSuoMa7RB3NhpKVEWX3QZQBoeZ51uZDP4JNoesV4MYsdsFEjE12f9FABBwL5",
  "key20": "3hWHS3wHYsd82pxr4htryucbhDEDEjoyyKaSWk3vCNuMZzxQfuUXS2Ko8J11KrxqJJQwJfN1oLFkXMhesBhT4fET",
  "key21": "5o75A9txdcLAwBoSoVbsjpSdsdqSpzBUnJgGjEBnF1nLJCXUgj5khqAJCgwpbKK7gB22J7827psK86zs6JRXEPc5",
  "key22": "4gRe1Kg5T8CCedchypPM3329NjekLUjyvmrMVvxzqMC8J5EoiNpeRHZmqHKVeLjisCfwD1a2SUjaS8EKNDkMBTz9",
  "key23": "3XgVp65CrZx2sYq3rzUFYr575Ez8Vr7aAkQJtLYHzREV2LCx5tTWTtwbf4kjQyWmG3XnKdMnFMZMWXbbL1m56yVN",
  "key24": "4QnqMeVmmgFS9zK3T6LR942BvJqfPwMuW9D3wWRbdpRFowpvEUww7dCF9bCg3HiNjRAQYHxDQkTGqHF2DCgHJEHz",
  "key25": "4SecsvXHTaDNbQ3EbHqs7PXPGskbV1cD9TJpV1szta5kG4sLH2Uymda9Fue5GacuXZuCH6XE1R7hMxKpGrZqND6A",
  "key26": "25FV4EGyWQcHjxJDSL9FwDG7MTrfgycJUao3XEss98jdrZJ3JDwKXg3iHK7k8w4qTwEnzfP8NdKdcWqUgne8Hjpq",
  "key27": "5x4gKJzkcRLM5UP6m3Ykc6LSWqd8p43UD6xNNejt8SwigmzXgsokc1T1eAqVJbdBkJtqmTFpq8W2Udvdp5d7UzSz",
  "key28": "4EyHxWoss1SD3gmcn5Jh9tbjMqEe1fguqS9bmo4QUTjSuYMywwfNxjcYfirBW9VzguQoR2gLWumFXG1tYQu3shDa",
  "key29": "5QgnYHCdJG8qpMPmwrCmW3U2eqVY1cBcSZasTvYoNhJ58nMWA5mNGLG9Gcy3CTxnbSQi25Ko9mxErTXtRJgjWim8",
  "key30": "XDGpeJoEQXZGSWLKe3j41vyFd5iBCNoV5YooPoqWYtjzitRVF6kUEwhCTTT7AdiHFpttmcL5nitwVLX2P3c3g9a",
  "key31": "5EpBf4SaYSNwx9AijWxeBHbqi4dsinqfN2pJky8NgjD1J3uQJBpc565KJ9iZLZPDMz1xVvrm2VUcyHmAAgUi57ss",
  "key32": "4dGsFGdfzM1Y2tLy4iv35PXehjpa4kWP2BQtpVHSP2E6Vg3cfv4GPdYHuF3ZqzHACZB5bXcwuXM8cKVDg4K1tp5J"
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
