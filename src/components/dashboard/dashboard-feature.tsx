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
    "2Yms2pnmH5PxXDKgtTgGhSnam2y6j7ec7iKaZWMNWSfx49pn5hpAmBmU4Kk5gwgXsBkP3UeNNaUN7AN4Fg4JRJWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rrKFQCxTpUsyav4gZwQsdkcfjjEuNnY93LNAbTn1bKhVCeBDHezQ2z42dTiPGe7NnyQuBbTWZfdyJsACNfFjZ6",
  "key1": "pPv1z8uVRS4dp2U1XisrQMTY1dKfWmCtBu4jf8525PiACN7FR2uAS4hAgttkDzeA5a6u2HXgw2duJT7VVTK7txi",
  "key2": "Kt9Vn3Vd29HdSYHWxAdfoLRR4FC96qY4b6YNdjaxuwBwMozjCouNSqacqitr57Fd5YF1s4ZhnrsoAPNQC7nKiv8",
  "key3": "kWf5FJXYDiZYVMTWrj1GpCcgJDyEXvAGjNjkzsU5dZroaPk2bGReqEYezRX5KmcaGN54hpvb7SBskCdHdB9ujti",
  "key4": "RPCeW2xsK3QTqP8akRb3bLTQim4DcdwH6jqVi9N9WBDsaocNMag2XgABSmy6PnVNeR3ZVmpkNMv6dQHwHej4j6X",
  "key5": "4VGZ3PmLTgWJ7fCeT4Wc1nrFL4LGXi8YyxURnZNR1K1gFUJnWG74HjmYMqZ1gZHcErmUdXC8ofSuxtwZkgcYo5Pf",
  "key6": "1Hs6uJ1pDUjeqP4QUy1wZwEWNEJJRxfuvMDC2xGxwvTRMA9koRHGhBeQ3KCYmpNqANo33oxkGCkwkHcgUjB5Fzf",
  "key7": "3MAFxWuFJ3vMY9h9uYQS8fV5V4dLZ6Tci4GzAWnjVqSKJfv6mexEq7E2J6FPwYArTNM7AgPdTNYd2SPE64QdpYT9",
  "key8": "5DL3HGShbnk3joCB7xQdDdXQSpcogVQJqyT7UD5Aoh9R83ixnKZthje7UXgGe8e7MJWXtVbbGNu5A4ARegN8XwsQ",
  "key9": "3DF2sVH2LGwJ5hT4JjatGcGZ2gLzpZdw4rC7iYmKjEkn8myuqS4ZP98tJTExQDe5jvUpGPt1SscvveAzSqo5G3yV",
  "key10": "58z4ebKdmmMit6kCSGNL5wWcGwJTogYCzpCqo6in5bgbvQsDjMYf514C6Rw3wx3vdnBakzoACxrEL5xD2EJ79DYj",
  "key11": "647VhEMJccgrYK6qtPKaD6WVSt2uSC7JdHNmAissf6vYeTs5M7e5oRXECZYv5LCMhjpEhQvrDW7TjWCE5iHcSoUm",
  "key12": "4Y4NJRziudHZP2BouYV3FVHvasqbDHtFxDeSR9CXcBpkqWqEoR5X5odz8MCmKcp2uWpyCJkyEtVfY6ncztCJaJZX",
  "key13": "5WXKJi4kkNuA7cVoT8Tau6AHBsbwDNXzJTC7ypp4Fh4RkKR3mNosQdPnkSiEhcoZXGYLq45y5f9ofwRR4i1C2Hec",
  "key14": "3V2WP8wp7xZwYijsDr3jA8H9yE7eumkezJYGPqtCJ4jDLMFg5M9GdjkSpZtBkDi3Q1HB6TAvhpxin41F9t5R2xWe",
  "key15": "4KZb8Fb4LA8BfN8mqUNhwez9AsYeLnQYRUiPn6UShXU2qiN7zquhzR1iMJdWAUSrhxJ3AwZ5B8JC3xnPSzRUsQJK",
  "key16": "4fJshCmQK7xAVS1wUv6bsVLEx5dUxAQZrc881uPCsy6rz3q5hSu28Uk1WZmiup3zVVdkUK6sFUE9AEvoLLtTCCwW",
  "key17": "4ZahRi7eEK2X2FsuzvSFp5ntGzYqHeRHnLNxptMepvzDKCJnFfo6iCnp9jXJzn82RL9qdSAo17arhGpptVrBXGzw",
  "key18": "4fw9HLyX2WL3kkPM6f1Bb1pgPTuDkyowCFf1fNufieZgPaL6m4evNcyi2E1um7v2FhP3wc85FfsyoE544zLoLNUW",
  "key19": "3DQUPhP52Nsg5FHEjjbVa3AqEnV1sjWh49VNjbGGoPPCQJreACcoZicDTvLLnsbvabsJKJ9aPfyKHiHVzLpwZLgm",
  "key20": "mtc31ayxGhUAefCPRAKf9XtC97uMQB8JLLpJ4y6jbx3bn2M9T6UYLbuWfqWaF2fWxGRwGG5GJZprnwERevLiEY9",
  "key21": "3Dg7S6VqimzB2LLioPV7FrN6zJUz51YXQo3r8QeghKYYcT1QowWj3uyAVxq4xmtVYoiwvVfF33N33GRmGn4cA5nR",
  "key22": "33Z13b2xaDAa8UD1HEwooaWwQBaGk8TM1dmQaKnnUkfj6s7G7gU7r6uxYKXGr3eTSMMD4n6GA9uyFBU7di3i6uCV",
  "key23": "29fsxLQyPdNGsRR9fgqxGCfhEFRv1Bt9Vnsbv85kZf2YLFRx5J6BWuMDVTcm141A1GfVrZGZ8yLRMEj8NpERNaAa",
  "key24": "KsUjm9boRpBvQWjLD3ZTKBbWFtZmH5cBiMHQQEpd3MA6ay5bV8CKQtycK9SPJ6imJ7xsJvvQWwhCskLGdkWxBab",
  "key25": "4KtjhmuaexWfQ5quktWHMnEkpJQ9EZrT49DRLoNod399BPgU55LaePmBRp5y2LspPiYNbrVwLVZE9HuDmAY8udBv",
  "key26": "FHyqGoC3yyTYQujPT93HW3vC9ghnuZQfxX5faNHk2U7jakr25o3qSBdaqTzQhrit8suBUCLB8yu4adkKgUoqCnm",
  "key27": "3ioLx68G1gXWP6DsFux9pyNmfcp7AMgZzitHm7dQtbNwmU3WC1w8YehMp8bx4z2m7Y9MPcSYfL7t599obGYG91DS",
  "key28": "472GjHNVsyifPKsBNCpHSTnX75LkpmsY1VshpnVfmaC7wW53wZqiASDuhjHGoWKNgBjc6ntbfRwJFBCf5FsVmMp1",
  "key29": "2GACsH4a4CvGhv2ohbneyyuhSRXNybqVtj1kupbMpWdzScucWqU2nCBxUFZYdxBzYxyKXT1WJGHgxdxBzsxmRz68",
  "key30": "2i7UtMpZGKiJN3fFtPYDS9DNRmYVyBmLZK9rEdT6miqRLAEETWzAD21fQJKwQaUHFrB77GSHiUuEcDx7LAKWMgww",
  "key31": "3C8E83ZuwkZhBoCAAATarhvNdH1qgBJSohCmMPRcRhsWZqxHkWpcwxTh51mQ5DPJG6TWJeYtMymHPC17vPJKFMK7",
  "key32": "3NLgwWyStA8XKNLcXPekHyUVJyNdhL9DbvYHPDgpE7JcieFQDFCJHQEhPygAAJeyMP2Fpu9xEfYY2MKumV5YEHbG"
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
