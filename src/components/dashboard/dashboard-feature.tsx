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
    "4eythiNMK8LuL9GkMM6dH7dxvR5RCt76si7cYEvSbrZGkteBJWWRxdyFj9MCJJQaE2aN4ipG4QRo1pUmJ882qCHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XFzt7nGKmF2njJ6WiV6zCY7meU74NThTYfzNeLk5R3Tu6BT5PPzs5D98ExpL9yivS3imNeGWz2ed61N1JDfq1AJ",
  "key1": "4WqiZPRY6EXRA6a2PbWJiDp162E19gBKrgmp9Y7ec6TmsfgvPWiGzNyCjMCqfMHSc2E9AZAjzJQ5ugKiWvhrmr5s",
  "key2": "a4a7GEyxhdJCCdB2vHzSShHk8vA7hsKcwqfHLbAEFVTUCyg4KuLpFCGpWtaCgVeaQkKhQKAkQMEKfQanrTfnG4w",
  "key3": "2XFmzfoAwCNv7UtD9qKobuzoiGhuXTJ5688d9q76kGGiRENyw4tHHTtRnXz6FBcoYrR21axkUurUaVMzhejf6kYE",
  "key4": "2FkS7uEYxioJmeqfrXMjywzAjA7C1aV5rQGJ2kct2D6RcHy9sir24BuVoLUHaZ9EUk12ty9ZjpNAyXZYsPvtogrX",
  "key5": "2yqZv7a4cefPUzoDvKGeAWrb4T41FaTqxEdC8hJMtHwP6tYq5SG4vUfkfaKUhhQH8cmmHRqkcDEsh4bZ4Qg5vMXA",
  "key6": "5K3KbEz7UyqE8gn6BCammx6LZ8WLAhHg3WvxexLpJ5TyZDTfgjHKfKvmwvs7ZAvxV9CARuAFPG1kQkWjoqWCn54M",
  "key7": "2zWXv6VS7mTjGydoJ8ZNCm6KBKxN9kbkgdzCMqT2Xyd6tLX1SNsF1Ahb6FvKpHPn5gYpLak2JzCbiFbh3BaYaJFW",
  "key8": "37DzUTwfPP8hQbg88SNruKVuMy3MF1t1Xr61Kp36aEy4KZSabbvDfWRnYt9GpMFmBvDUzf91S9KMJ1GoNoCLEqDn",
  "key9": "41VsFtaeyxGpJNdF1r8ABFZcMXcupeHCu8eo8j4iBaKprmTf9SzS84j6pm7CJJrE6bhYHrYgp7Uy5nRjuTqiMsSp",
  "key10": "2HZwiciDg4cyhKXBmacff9AE5mC7qCrTVwUeU1wSD5aYX6rcfbrh1HFDLqhjASXHg2o2tJgqaMs5VogCUDK1zeTF",
  "key11": "2m863Lq6aPxh8hoCfW4ZFJ5uZnvZkPXHeigSr4BNaMFEFsScGpMXcx3jf5536mmysuMvJuRmaGDESMdK1MscqTW8",
  "key12": "4L1Gv6xcp8VydfQ4KzzCdg3NgxZWna7yKZ4W1nNSd4HZbZgVwmGRyPiBBqxjha51aggU96kzMUnoU6ArhZfFKzLY",
  "key13": "5866Gj6hiNApr4oitFpw2sN3Qoh5WLaw9LEAXt2VXUnhQE1RUuZvAvtyVEX6Gnv6gtXpJ66AB9QtivdG8qBE9vMH",
  "key14": "49GCCLQhb3c8JcB9mWc9JA2euEqr99Z82j41Q7FnkhFP8GwSa3WQ2hxnk9CBSnsh8nbx7G6EDHoASiiYET31hNh2",
  "key15": "5JTdBfubPNKFStwHu4Tm2uZ7L9FfhWpPxqvqZCVsH3HYENGKFhyUWno9KoD6SHBrcQWVr8B4hz8ZJMsFTK6J6Cwr",
  "key16": "31mioFApFkawEvrZodEpBKZ6MAdDx1qwTzTwH5a9MRKjTJE93ikCNhJc6PyKxXzwBMUc2hiVYHNdEr3yHMqgHUBb",
  "key17": "3PFohTzpg3yhZJ2DoR8ihdodcF3HW43xHHBGveD6d6oC1FQuGVcFb6LU7cTZ1bziNG9Fk1AHCMmMVuUX9uw4V4cS",
  "key18": "qgSkqo9EnvcJszwF8v415ntPvi7ujHcRRqWh5kQYv1rii4oXepXAq4hkLxyN6fAbuS7g5trj2oELzxSNhk5UQ5p",
  "key19": "5FLgYdCXZZg87bFCvioYcLxfWLWLHcmspVmgCaErCeGBuiHbStrEhobDZ5KVxVWQST9RRDcuKmCXxmCtr3GeR41t",
  "key20": "5bPZ2dqJVgFu8M6iTaEuVrow8v7axamvmFNdYhxUEm7AQ7kdSzHnyZ3sVUrW83MLmMhoGfoEg23tnHhLWGizHPw4",
  "key21": "3UX8m2bZFqbRVAkmCpsMGj1jkKqVwcwKG1CFfqTEAHq8s6ete4kV6WtjvrPqK1tW7GPMykFSaknDqnTm7YGTqSkM",
  "key22": "X4sFxBj8wngZTEi2NMcXwptLsuGZzaZ7qCuHeMunZQpbub122ZuD7StfkKbrD64z2A9mE9RgY51anaveaMVWDJM",
  "key23": "2nNi76HDtmpLRSPst1Ra3NC1KnEacrN7dWGJcnrAcwvJwpqravCqVqkB98JtGLLXd82souUSXLhcS1MGvMDcnL4C",
  "key24": "4R42tDYjNiDx1F2gtwGPCLKqt9qqcjCz7svu7S5oVzCMstQghkoqSrsjxSLxde3Sw1PDP5goZcYSuJGTQiW87iw4",
  "key25": "3KXSwBPasJ3mniaJHpAGcYS6wtMNs4xBffto8yZp2oGtDMp5unoaESeSDM5Jyf6A3M8yJSHujrXso7SNvsZfyGia",
  "key26": "4dFrLJRGqagT1chNDZVEmQpY6XkzGa7DHncGQ6MLD4RQAAcawCTbEcsJRRZMJDd5ip7v4AfcNFAfq9Pvv11nni8b",
  "key27": "5AUjCmJbr2NC9PLy6uDFsWVKBB4MjbriFBSg1RWrNd3aZH7dFHhr31jiXyUx6GjVbMh8XnAgfrkjAWR5sNRGuaZV",
  "key28": "CG5zgq8v8poZsV3rF4s4SfmgG42sZViszLJHUERCT49gRC2s2idDzH9Qmun2PJUiuUya8YZZ84dG7PDGPhpZZD5",
  "key29": "4rLvvtdjW8HX6xmwQq8fWx5B6ttU2vMpJFrPdiXFB1hRb8eNcpYHE1q8SHVA2CpoWxjjJLA2PbCGhNKqLCmFGQCW",
  "key30": "3itMy1ikNzVxgnkZhomMbAV4XRwiUAFRgbqEk5ASYksNE4TcdySj2y7PRATADoqQd7jQeLvo2r2qsAv6J42mWDcL"
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
