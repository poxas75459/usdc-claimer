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
    "5W3cbtVh8vGx3PNL5ixu4Gu4Yag8dpKw8zRGDHEihFP3SGoKHWetSG31DRUzQuSWRfv7UAFpsTY95zhZvG3pDqXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhiPW3aTDPRbQvPCh3s3PPQPbH1M5tu7UhXnVy7ad4h94gwC7StVYJEBwtC1EC7UZDZ4mGkjdVGSmGtPZzr427N",
  "key1": "2EzkU8v1mqaTxqoUiKzszGAbzyVDZbrKUzubFzH1FJ3v7et48fqgshTbZChz6CFkWmy7LY2s9KH4YJo1Z2qSXAQo",
  "key2": "4JwcvTqaWx7Q1hNau8y3PuHzhYeRJ2X86C51vT5TmyreFZcCZPyMrXGV7QgULX67etWgSY7vFdX8tLxMydop2EXo",
  "key3": "2cYYU5nM8dZGX9B33Jhnk2Y31XR9NmTsnejqqMG9vtEGNc2ScgMCJF4QeQnQ3oMKsGV3zL1nthi7e12p6wbRc3WZ",
  "key4": "3CQXKRnbL1zsMqbeKCtkP1DaZYEVaM911urANxr8qVi8ggrRDvcsiERnNJT1EdAHw8Fc5vS94jRCjYa1cz4xKxbJ",
  "key5": "3xMGvSntEazaQhbMkCj8nVMHpSduM8HXcLQ5bmowWKCexehc9wxU89fWn87ZQHaw6wLiBrUXBvbMK3t5vW7P5U9W",
  "key6": "3BvsutKkPMSBL73NRHJdSM6JxcKSHUJ3CiGSfZfuoBG9SMJMejC5dbNgytGmPiJVmMWidCsyL81ArXhqrfbDHMMS",
  "key7": "5muQGgjoQvKfK2eN8B8HjDVETmoEmCWw8fpZisSHGJJNm5GivpphsjVgiR6HAbCZK6Xs8b2jQpqzr5C2WuwzA6Pe",
  "key8": "4V5T67Z3ymCfoWoHT9GYzMjF4HaEZiJ943VFiZxogEwM1uh9uo9fMnaRvrM44477rD5JiuXGN46Zjw7YHZH8WnoV",
  "key9": "B7NC7mtt2zCxTSSJxtFsvJYryi4hXArzFz6Z2ojmBS4m5sLE8xtn9ezh62Jk5g3MhA4dwivxq8pzpkf6LFYFjhZ",
  "key10": "3pwK9e3ajPdMadxTYYeaWDPoueeVuLPZpSapYbwNJNnt1kN16Mg6fXSXmVPM4pY86axiCt3LxMhaNTgAN51FiGoB",
  "key11": "2vm64TPW9mDYGC45jNiGqgGn33hS1PqmpnRwunD4kCJawpAhykqnqSTcyWVVgo9Hsmt9cR1BgLTHVqB5XvdHkCu4",
  "key12": "5MDRb7ftHENr7nvED5sq6MVYsUgZsNXHBxCHJtkshYsBaHBHoRQfGKtgPjMv5xXbwmtHY7WVbE6TLScJ5etZb9NK",
  "key13": "E3KpGkE2CYXvS2vzK7XRQCitJ6s2vgKFCTaEX7bv7oqKx7pPo6XsAPQvjz1FoNkhm6WdPBmaZQLByc8gaG8yoEc",
  "key14": "664wFfFPZbs4F38fzESVUkGMdGemjTb8zXBgY1kH43b1QPnbxrFGMPi6FR1AkmQfgokd1iYYwXsd7z7F22WUwGpk",
  "key15": "3s4dUCzRby9S5fQ6ymKb3cLK7oxQLpC8QF7EPdFh6vAmkc25zcUon9WB9EGKk2h9TtndVgUAaZE3Wp4tHpSk5cEy",
  "key16": "5MVNhgSFUAnSrhHuu8xKBVFew3KfmDWUiAgMMrGjhmyckiEKFveHwc4jFgY328k1vHKidanTAeHBm5iKDgAHMCWX",
  "key17": "2E3uyj87bpR7wnWy5Y5CTeowbsTvHXh1HUEfto54f59EEHqgGEmYmihUrz1K4ryTMzGB2NQQ6xcueo4rSaare7do",
  "key18": "2XVaC4b1GmqjA9rxidmSMfR4K3mUBjC45K6DM6qKpWkhSWhgAwUAVotXKmPT8ybSVp9Zo2x5ribsGzgoqNnzgWng",
  "key19": "xGHZTPNE1FogMAiBsXiD3xnrbPxoojEemCn8pEPpTNBL7DzaFMSZsndUcUq1uRu8mHwjKPtygQPYLZQpjvc6C9r",
  "key20": "3X14BzppL7BeCMDF8fUUDfWJbFdVDYVCXf3yQAvGQT8kBNRkX4YvriH9choeMXK2BghiBuzvn2jY4Z9KbpwWEBHH",
  "key21": "5RZz4UJ9MFe9WTkphYbnVLsr2kdNU3cFFrPyetGgkXxHKcAFGsZ2JBBNM22AqJmZMnHB1Heuj4LbFwXkB7roZqbh",
  "key22": "3D7zN3YgocPYTpCR8GfYG4T7bYoh8PtA2tqE298jKNjT5RE4R28XNsVamtx5WxwY8cgSrQkZ29aR8guA1Nku8ALs",
  "key23": "5rUkQKjW864kpERWzvnhKUDPv7cEVi7rfyZx9aCtRiKYTdCFUX9EvG3ZWjScznk63jJ25LzUQ5hk5Vcf8fRc4ZVT",
  "key24": "41UpYY5dVK4FZzq9LfofNo2rtAZhcNpFM2w4yfpZz8TV2HyShuhr4ZFLA4wkufun314Q3toS5tHKQv5tbYFB4spK",
  "key25": "4X3RAWkFkA1RL9aTPGzNUAKYzb7bkYTY8EkRWFEzTvriX2neSqHwaG8C6H22huUGg4zL1EuX7SP81j1hk8tcLr8W",
  "key26": "4oDpShyppm1CHnMYBJqTuXzBKv1Z3bELo5agJEQR3eQNFzGPFAPZ4Kurui2zaYKcxc3HcD31LhZM8M25pA5eakuW",
  "key27": "2cnNNSi2GGBZyTuguN2LFWKf5bCyosdYwGZggTWjjx7FJ5bkCsy8LqezzWChKVCzFQx7vzczSDf73q9kBFLeHwvg",
  "key28": "4qnrwws3dGfnbD4o9BkWGKdAo48FoAHSQQP2kuY2CpjcU6NeP73kdDbADLJBAJhkexvrVfzFfUzpRGoeU9NnNJyU",
  "key29": "2hGoUcVPB8YH6WiH8xjhmzAC8nB9baxJ9ageGANobym72fm71UU56mZdDvAhCS9uSAC2BZ4DwF26ewddm6NxLyJT",
  "key30": "65LXABQsVeW8H35VLL4yNVseZMhs7y6tajjZw4GRN2UoQP4y8Ew4CNRoxMKYpLJeY31PadLkhoRaAXkPUNDCJQq8",
  "key31": "3ivy8fzyKsBhZqen8XKcSjx5u2CZ1SqrvKAYfLMD4472ftNMEcPFg4QPpw3jTyFy4CC3nwmjf1fEaUptbViztgHV",
  "key32": "2fkSeNB4rmxwBs1Zx27txapMPJRTNDYWpahqPGHbikMTeGjUsHHiCvk6DzdWJ4Cb8CaBszNyePSmUKcWkqRCjs58"
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
