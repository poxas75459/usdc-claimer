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
    "5wDRTB2R4KKbtUA48eAfZuKBRfEJjhwkbaJXpJDP87ZPXVte4pwHZkQrPnV2YRbCwkQgfbidpVtgJxgvpWREpRyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KAo1L1TyELnLvBXhNQjfFRX2F8W68fxKA6i9NzYnNZ6YNq5Qchcsep9gowKQtT7woT5M8wT8MD9qs4bepm1kaeK",
  "key1": "4zKWbRex9LQzRsmCLrm7wPRi2zL4FDsyU22vhP5jvfxnwSHKWD48VvAiM35vWJTojGGYTuCF7HxU4SdssherE9qN",
  "key2": "3QriW1GdGsorzL127tSrsut5YWrCYpztmQxLnfw2hvDNLp3722RkSJ11YUuYeHcWtu1tX9WAwHUQE6jgB6oxCgLx",
  "key3": "5fEN6hJd3kqAhikUsoVejurftD5yEmxVEqYM9WCZWWXnVU6PTN4FhbrPJryyJ7sb6qACohowxvJ9zpWmDRh5vcBJ",
  "key4": "4oKQpZuMdGsrzGwR18YRG1s2DVCwyGJb2xFEBfCkMjhrXauNjFzPQmmAwx89tbXEYBc2TbYwdkfCrGqKcErBXhFK",
  "key5": "3LYrvRByjwy6yNcfbFXVS4BNLHKfcqVAFFAPZ167MnXUpHeH8WVYqjqP44mc9t2xE8hEq7S3Syhqs4XqLbLN3nqi",
  "key6": "282DgNmaCNdAJN6d9CbfxhXPmQokyP4LtUBmghq5LjERhTvwUB61cYkYdb3K97jjwKzkmg3U1mehe8xweR3LwXwG",
  "key7": "4t1fFwwyeK7oqUEmAxfoWXhdWtzMvUXHKZ67JfhmZh5HDsXaqhjMy6XUZTW2zF5RFDJCACpfA95H7JcCYtSRpxLK",
  "key8": "5fywfDgDGettLXCqWUb3PDsrfRuj1TwX7BRbxXjRZjkwB2JUwTF9LjSsMTCYWHtLPWQYpMTKSt1FSXGfqF2x22Vu",
  "key9": "3QL2aHTt38gQCDB3s835fA2THQqwM3ARgc7XsNLMDUWASKSwnfe8AeshNRj9QWNA7jckAeZJMNpcuyetV1yoSFan",
  "key10": "5vTYnU8ULmiqgsgQZ4f28bTMBXmoddxetpvZGA7pqWjixnq7uNsEs7AVj16SAJdr8Pfngwi8Ava2mmq2m2JFdsDr",
  "key11": "5uTcY4oW3UWuMHXHmbN16D3BfwuE11ym8NSXzsBYeucuyY4p6zj15CPAERVd5JQFg6p61W3CFFdiER8hizgajDHG",
  "key12": "8a3ETmT8yWFWkmddkbFNt3MZM6hyNvNUf2hpkuejNXsz9ubPMujbfF53BgiP57bBiUbevuSRLYxM2bqHt8x5xCA",
  "key13": "2VPw753n1yxyutWjp5SuVbHka1tPh4utSkVFxaPA7AXtrFFMt99WSXp9WYgLr7pTcDBrwma7aUWUHKsTEtW3eeoU",
  "key14": "23jWJRVZkUQKCuEkuKNZfJApjbYcMR96yRaDYfebR7WS2g9u2e8E1gWMP8cuTaDXTEmUeXQRMn7yiTXHwpB6tqmo",
  "key15": "3skyJo67Hv6XtjoVjihMiDqc8RwpHmMkcMinF6cdQ6WK4wbhRVGUvfKAgt6usbRC4Zsz2AzCA7FGuMig1mhGUmWg",
  "key16": "2Cc83gx9ZpZ3kYYvZvSH5uXbuuGtv3ecMuB36xFSNxUaJjVCDfSJTFnmTmk3s1aqwB9pfjApFudACceZijd67ENi",
  "key17": "5oHpiht3Tyi3jXccf8mNnS2ysBvLgdVzUvdvE1ixA78YqZFheURZEhW34hkLSc9hxpwCSBsbviraq47RrcPVWMGw",
  "key18": "63Q3oqcanVR1kQk6dVCMR8fzVT7pfW5LNPdsTBLHRFjWAECp8mjxpfLma6iYg4BeCGYwbnHFEqiR7DWWfmtCz8YR",
  "key19": "a5XKAznYJma9uFp45ez1oR4Fq6fcHwqXyy6gea5F5BffvGk8iCoiRbcEPFo1tqgSjk21iwCaF4xFEuMFxAHgfsT",
  "key20": "2Q2UuRE7jyVxw9LSaUtZhSLfN82GtC9UBMdHZzcSyqbd3zdZ5CHVvnnjfwsa4wySkYX7vAYxyG5tF8ECwxtGojZj",
  "key21": "5GWkkddzs7ioJbrGdEoFun8ckjkggdgEe85RUEgdS6gZhNQmYmTi3chxicfz8VpkfXHym8hvVB5Yyqk41CU4ySe2",
  "key22": "4hy4bA8ZzQaZjCFzmpFkFCUX8eR3Dn96e9V1ShMgTngzXxo7MRtY9V2cngczPTSZBvikcVGkZTVsyDyqrYj7mY65",
  "key23": "ypA7YKfr2yUCf3jnjwdnzqimUF71QuwFH42jP68XfNsA7K7khchhNQsu88kyxAvtDMVMWSnktpWzrCbvXhZqeBU",
  "key24": "4dR5zW8X63wYfYhFFQqfeGsQN41hq4DenTbdKkJsoE1ob7m17VQKbwDc8WKaLSyUDCVAoGNygzSatroiHrsLFhce",
  "key25": "3VY7pFCn3xErT5V5CMeBYns3hUGVtLDXYjpjWbviEtXWtjbMJ7mK6JTfqrpHfF3AC93mkEnP3mWsHkPiiZqcz2xS"
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
