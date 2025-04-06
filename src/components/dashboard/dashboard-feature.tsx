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
    "5VqZ31gm7LkZ1L27yDiUJnseBn5tQKKrVSuB9MpH3mqDGVsJueASLi2ov1D3Emnr74aSpBAjhvQUkCTPnxmCPj4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fCXWXSzMt2zVEd66Q5LRco6zQHuEK96oxikZexPVdL3ApoemH6GfCqNF1cqTHAHnz1tLT1Q46zHctB3NZQw8CiP",
  "key1": "5EqAq3ShY4VnSYrHTXkiZqqErHw7pSNv846zQY5CsEkXMoFQFkFNnVeTXo1L5AnrYY2AirfCoa7D7XTJ3HKPDZix",
  "key2": "S5cd36z5mbWnC6QABfnZapC6g7FdLoN9CHBb4oFcZS8Nag2gWNbkYN3GHqG36ZwFWzm7ccz91JPNsHVNq5AofhL",
  "key3": "2wCpBhkrHzf3xfjJruJ1aZ9aShJCSSk4aP1HuaGris4JSrrrMYbv6VqLo44t5AoRr6F7CioDcDcoYraQfwZr3cvH",
  "key4": "3HvJTbtuByZPzbkqRWo9Br3EbdWxEKEABzz49n8m4oewAa3mW2oqKXyystthiyL2Z1zaUwqQxE6auXwCKfUdh554",
  "key5": "3YafWgmJzhkXzETQ9TQNDasaxyawWZNVVi1jsKoqg1M8aEuqdKsWSQ9ckge3s28VUoK8KtaDrptjwhMEYz9BTEL2",
  "key6": "UThNjYvETVbNeWYdWm8NoD9tHVivRAbgxk4LmoVrCuFYKdFxigUjchbF9MuUGx7zXMrjxDvvStUxc3koTbTmYEJ",
  "key7": "4NqaR1pbsW42WaRBkDj8C5V9RCUm4GWbhZVURkopd2oNarKhg6baKBCLEkG5SH6xd7bkuu9bSG2jwDWchTu7KosS",
  "key8": "TYZh3ZmEYw54nHqbc5FzsjpqEPZTMC8SAfw4pvXfS1yXe2BiksArZLNBMqX3BtAH26igpvw7MQ7NRS9uN2Uzdim",
  "key9": "4S5wag83nmEwtMPkgNQrGqcmME86WSLQBYiqLkp9ZerPBrk4j7N9Vfn2ogucuEhF5uiksBZSKijFQcLfpeco9ZJJ",
  "key10": "5Q2eoSx96FUCAcG4Mw4ZmHZx8KhYrTuYsBNDDT3DoN9SzV5k5jgycK7qVAEi8jPTuLbHFniJaFnMwFUwJpnfu9iJ",
  "key11": "5Kv23cKgGZbDoKxn1AezyBwt7L2iXpYmkTXpmpgam745w7qMFP8pYVZynNPaSs5KxA7pjeTvtpb9agx7sGZbQ6Qe",
  "key12": "47xVRgodyu2hDTG791YTiR85gypamnUPoipdJR1fdotSJvioaCSrSErSAi8W8LLCdyksXHaCfsCNJmbCyBCWZ3QX",
  "key13": "4WhBRS43xhbsYayo54N7oVnmYEBsafLps9eZW51HucGxcY5W4V7xKb5ZBTc1GCj9mzXMh4MzbdNrvu9XXXHgwYTH",
  "key14": "5yJAvqKRbRBdVHdPuqNT4xabzY3JnFDXF6DmYasspfRpma55dffcchA2q4BUJzoUkFcMkdZQRyf7u64hErcVNYeC",
  "key15": "5oZMsef5NwUcb991Tio8vCTLFpRcBJwTkxcuvDrdYDUQoHBK49JTpJCudBprw8iRm1eLrrsCbvYMRRamhurkUs71",
  "key16": "2UwhvH6vKv6WtLMrLTxmrkr8oX7Z6ZLg7io2UhixPr3xDMPhZoRMumLdeuGyB5UJ4UyGuxoLLdg3jrTKThEYhrJT",
  "key17": "54NzC5EqF7DCNRwjtaMfRR3xzXEZrAk7YQjYCk6S5kxqn3TsqZtQnKwjaQuNCSJvJmi4vBk5HJcptfpx8C1FT617",
  "key18": "589TKS43E9g8HMUU39YNnNryC3aVSDmDi3nGWU1cBgkp3hQgoDhj6MCPVWLJQsUQC1DafG623w8LVfdSYLbKeZpG",
  "key19": "3x5GbCdSvrUytvb8zRBriacV6ZuxaqCiXDDZZNRU4CzFBF8QHJ4Vn7yvJaaf4zqw2MHcVLbRwrpP54H5kA2Lb2tT",
  "key20": "5oyroHJuT1k5623W377iGnLAWCPwQkoU5KjdJfzFMXsp7nLEsybZHpAh1GcqM9HmMHPWxbzY6r5G8XMw9JnYRCHu",
  "key21": "2CCrqDzst955C5rfZSkJs24UjXDXUhnvXkipjCYvtbAhmfkYEUSN8tfAVWjHKnDikezSEdhPEJiTUesDeoM8Qfm",
  "key22": "uiaqK6yq7NcZuRArbgxKZmmNiUdEuhsUBiKFKdeyWQpkH7pQY6k6dhgnm6WGb3zGtj36Kog4WEq6y9FALYryhnh",
  "key23": "3nWbAQhzHBhxxVtNSbHfsRCR8Zv4FT1HJx8kdGZHotB2ck1raz4aJyxeBDAf1fmwZ1zHhdZJsowE1AEuDa7G57a1",
  "key24": "2uDTKPDsjUQbqocpmnPGnYyPXDPinb6hQEghoXDgiRPNzAr5vJ5JSdHFW2osideHMwLy9mTouW5HHFEZbPGj6qcA"
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
