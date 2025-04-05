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
    "38DyJXCbdjbPj1NCu4kdDVSfa1Fbg9dhHrTUC3dmvNB9rnMa3CLHBXmHVUpDEe8M4wstmj16LtD7N7TpnJUxDkoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bpfPJdaYjF1sbzDkJQkXjSsAqBxRRvf41tRMNA1Q6dPr1p5T6zfn1MbnJ19xyGGxyWGo6kpZXCQEBu4HLNnv3RC",
  "key1": "3gtsMBv2TPJiFZzj1Y3k4APUwbTWrB9vcdzH4ovLj9RqPZCjy6fAbNjgobWpay9LVxi7LnKcFa8AA88QtP4Y1z9y",
  "key2": "2CNPpyQxNYcXwRhV8s7Qe1nxCcXLMMLZQpsKGqP5g3dF5zrfxFcjbNW2K2CZe3Y3mj6QaykkzTtZhQmHx8p4kNmu",
  "key3": "w2z9P9ZkCDFWWqdwAajJhvRgVPoXxTWkBMMWZPXgFAHxKUXomsiuXAiKhNDk7qQ8KTVe72KGesMgonVJWTAxmjs",
  "key4": "487crdqyfVWPLVq94RbtjBpkRsg9we9dxhDabym8Q6befMETaFQxSrEWcpD47Q2cViX8GJzrSBWTb51K196vxErm",
  "key5": "3EFqA9yZtuuw6Wp4QyBBjzBqt68NgC9G6ENnVQ4hpzToWopXMwFiNeK6tHRrLWpDRgSUcxsTFwkmjA7JMM7zChLm",
  "key6": "3xyWqiQY3bw4wTAp1kHJJfJBNBWLkN7bx1GR8Q98NS6JnVtRt11XY8RVDrch39rUTFdeQE5tsZXmZUyDxe9D8Tkq",
  "key7": "2bP5dMH2UVcyy4VWvFfV5CA1hJ3goWTq7gWzzZyWX6FMWDXJAEcBHCrCE4rc9VwZzKUj8s6zC8D2JPJX83osZjAn",
  "key8": "4vZGpvC1WeDnzB29E2BBSphwuzBDozDFmiwxNTRk2D1W2RPSxxwWXh1w9PCMM5tzFjLHehVSexH5T7VvoZU5jpZj",
  "key9": "i3MRvmVWMWg3YpuFgmqLxUWSi1ej7yq91iu4WWYu9KYM9yrjzE3FQE7PAUFPuaE6rTzA4Bc2NvpXj3nbXaWfgS7",
  "key10": "3JaUJHmstuu4qJbbjixooXpMYbETeNM9SvqcQtxdshhB8b7vg4Dqf82gkLkXnUhU4PzmnkpRQGoJiSwJLdpDAb1f",
  "key11": "4gDYCrzz5Y44zTPt5spN9ZdZPFxorbjFkzb2qooEUr8sbJEsjfYYA2s93RBdbFGFs8wQtoG58qJ2b6VJEQP1pkEZ",
  "key12": "4WrM8q7KWvfzZrHUqkmyThmtmxqHhZuKZ9zUMHmqvWycEGDtsWYehjdesqrhehzivGo4rwj2LpjWZ2WgXeZMuKj3",
  "key13": "2ywWk96LK32MD8icJXcQbeEamJn1LuAudV8Q9oS55ZbC3bsJp2xXTQ7u2rxFUa3LRndSARcGHrhpcvH6HLYaLkrJ",
  "key14": "5UiipaAK9DAgX3nBk2GVVCdNRCPyDPuMopByAXTLhsnfoQraatzaFwkm7zA7Tc236THXouGgeiFTLDGPGUvr169Y",
  "key15": "gdW3Z9nLn96oezyrbW6Z74RS44jChoQ32kZdFSTyYLrbN4VrTh97GQqKxBpYv2wUEhzxdAPtLr639ZqSFv1th2U",
  "key16": "WoPzuQQC72HRjJEgPEGcpYUBWsU8t2m2vBCfBDCWGpSYWxPVSCY2jF4WWEKJ3TDfozTEWrpuVmyV73S4btxseuE",
  "key17": "6PMeRjweyWGag386yhqC4Mni3Yby1qC3PJz5GcwziApooTkdUFDcT6uY6dQLinnXjuEv1hdAgUmjuh9YwGVw57m",
  "key18": "2gfjW2YM2FYGqJbe5zQuGauU8E6ndPxSH3vBEoUtuyZmV8x54azz9qNq1paDPJF5Ey1biZhReoGJCtkbWQAT7kBi",
  "key19": "3vFTBuMzZfaDh9gpgj2ujFdm6jALZVDBA3m16D2i8VfADbrPWMzUg9GyFe5qNv1NabzoVwMYUMcxzFaecRYbTyob",
  "key20": "5PZkiLrsNjxGf8RFKBZVBxumpPeqAVp46ACHf5YPS3vY9Z9uh2g8vrqvXSKW1hq9fgNc6ri73FYbaAKZXoSjdguX",
  "key21": "zhb62jonoqfFQPp7rEceCRg3JA2shzrHHhT5JcT1LU9rgpgWcM8qdARTqLwhwhc9qtECYrQ52wqaysqF6J9Aru7",
  "key22": "3Z23KpbeQNhxNiPCzYnL1ibQVPXYKe7g6q2MiKZ1Eh5HyEvWokgMz9RDmaZQtgxvZbwrUfvAinwDkW96ZUkTRipP",
  "key23": "2DxjEY4aZXzYFhMxFxudK7GnSjsyDdrr82Y2DrPJ1t4YMWLB4ZfT6zBByBnwfsZXuuhazarrRzomwT5szyU518dJ",
  "key24": "3t5cpiYc3xrLKEemkMSqs8YnwTprcgFVmMPdb4PFX3zj3AUBLXKTrYkh9dwSLp8BUx2hvAc9dfWdhduPVBmfWboC",
  "key25": "4vnnUzcxMwudEcjjGTfTdDjtVEcvJDsR1KDGvVcAXc66zWDV7PDjZwpNGtfAx7P5Bt58rr2Dgy84d7SGY8sj6HN8",
  "key26": "2kUByDFrtfwFw22sLHwTexsXAiMnrnPk5fZktjmxq9gXFujWh5M5zqzQFyeMLTvY1K5USZnHQx55hDoE4gQ4XCKQ",
  "key27": "5V8aV5sN5W7WUvyQPL3qLLWRro53VmfmtRVHCJyPZkBzoo3dWMj1cM2dLSLpeMrsL6b3ZWnshVxrMEUAMRpYmrRr",
  "key28": "4agDAeo7Pkb3C6bzxHiUxvrnZ4NZfWFoA9pddNBevUpxQebC2zTpiyFxUFTLGi4RTqfTtPmEGJoJUpyJgJFqVEJW",
  "key29": "2ad5hrUtEtwTYkoozRnnVV1dn2XZ7Ke1a1HSY8x6baXAFHQ3chv9Yv2VW9TT2jYZ1CuMHLDWc8kfavXwxHxoSoDy",
  "key30": "64iuEFoobDVmf3kN9NJxmtfdjrhNAmTuXniWseArkRUhEbKdFaxWjEAFmZ5tJndFNRqPXquV74ohhJeGbaspPt1U",
  "key31": "5SEmcfvzGjB9tn1Y9txJNrr79LBER7CXBEGNC4dh7upy8C8hQtGqpZYrvx4qh2AdD9SKnAM3gFxSNwELKXSZdeCj",
  "key32": "4Umdgdwtf274DHCW2zS2a1quRyG4YFpaE18eDeWGTQMSh42JFoTSsECTRL73YH7CHVcVM8eAbnga2d9CaV6demox",
  "key33": "3aK1FUNWUAAHyBtMhanmi28QtABEjQ5TDUo52iWXNMAkPickR2Z5dzQhzMfXtmiLMZs6kR1wLnPG468njiB6M5MV",
  "key34": "3CPMMTMkcbAQmaruo7buSC2LfTv3LdAFedrDvs1zAyEcvoVPg6tANy8GHsUyrwdCcgDP1kzprKfMHebZXE1TNMQh",
  "key35": "4nGTBwWSTqAtxYY9KtoxHjVaJBcZuwkxoudRAMJ86Rczx1TdzGJoHeHztrHNHfBczVMtaHrgDc9q5mFF4x1E44aD",
  "key36": "5JSf3MzQnqquWZk6FwFn7nYXvw85ijDNfkZFUK4CjZrg7dVmohjSAbPGPRgrkZ4KgwgwGhhrkYwqsu5vQPS8iBTm",
  "key37": "48Ldj28PRE8jeaJ4TzBH9ftg2iobZrLvi3ZbhvzHcMpuZz2rsMbeY41JjvcuR37AsnFJ9noHwtGZeA4HRgcJGtex"
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
