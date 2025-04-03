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
    "5napbKwGL9qZ4g3ag1HGbTtSzUPmMJvfZvKG396J3fmmLKkiuDn1oSp4KnBcB28vMYXVZ2QvK7SNN2aE5isVqnKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "635Ntz964LhT65eyGKcXHTvg66MvSpBG4T7U1Ms1vdJxX9NJnBkyDHKpn8Ppb59eF8DP2EBrjNbq3iaxtFLJvsRK",
  "key1": "365yd8Fs4y8nag89aQ7qa7W1gCT9UyT6jvWXv6DngWd1tHZfg3y4jnnAP2TbuqwAW32Vpp69wJdQ1Zz8MQwp4g8G",
  "key2": "4ChBep5iLPNmTCcczYPtGGXfP1CFDjNRiLjWpu3e3dZaFkJo28zMFudJUHtwHAF8dDzxuvxNG6Hfndb9BHX3LQbr",
  "key3": "5v9VUYyiMuXLufWf7m7RBg133s7qmw5JnoZt1e23tDb6C96WTsA6i9E6uGaEgD9wXzixzVYYmUBxWMnQGwa6gBYB",
  "key4": "2u13yYXPzH6L51FntnxGWXpDHiZrJnqErPc2kQQHSQ81L3xovPkkFkyWDenmJPSQspLVKVjjDnxdK73Eu6ey5doc",
  "key5": "36fCSPMpNKSn4Sx5aJmDGEq9XmArGJN57uatdavLzpZyXWAgJqZobFdcgygt2eqz1QYrHhQ6yzhqFZBSvhYYB4aK",
  "key6": "5xA8yEgGRQUq8HsShK8L2p1JgTWAiuwiHRacMX8AcWoxsn8W8sipzFngtPasks4UCvTkHoAzzUsGnYcHny4yeXC1",
  "key7": "5PgMJ7yfnBm3QM4szcHi5M2JVYpotctBNcqiRzvNE1ESxddbfc3Sk3YTwF8miUUNo7q7QR4fMs3QrkdVEL6sy4o",
  "key8": "2mTuidDqoLiQaJ8gKr1dhNe9WCoQLasrU5wcZumUxBFECT7NQJCHQ3adeKHCR7yfn8NY7PRJR7bfTycWjNt9f4vv",
  "key9": "2KKToiUsYhbfGa69BBmP7Na6qc6UihebuakSWneXcEQ4rq33a3ieq2tKtaJtgtKYpYn4C7suvz4EU92sGy5oP586",
  "key10": "5LDiGv3nxwikiKwnwEAfaSe3vM4ii2wdkgDmuULC5fzH2f1CKGpGBWXyUkYH54iVooHi3LwP9iWFxVF7KTac1ZhS",
  "key11": "5TPikSrrgRBkuhLi9Bb37wbh8Bw2BuC2Qu8zyvUFBxXMmqMW2meziAfwtGeaRLiUHmDZ2JW1Tsqg4kJRNu3rABKL",
  "key12": "4KwdpLAcXPVbxdkt7pp95qAtv4wq5F8mBuY16PnuBiqky82eozfvSLYCLW2yS6RkmaemYpDEf1TKC485VwLMcF26",
  "key13": "3sniG4VARBUV8n9CJqGXXEeVqkcf4G2sQaqnDRTQ374kCWFwk9wTSY5YPJmbgznG5uTFp6xwPgFDroVDhdF36JnD",
  "key14": "5cvVvWGEfjqWcxRoQSpEU41FBMK8LiauvEVdXbXxbatX38GsmbhozWn7ZwSoTpyyriQyH7NC8jQ2BmQiq8U89M7z",
  "key15": "Rk6zmpqZGbBEoPzoGNL565ddwy7mmVQEnYdkkDVeqAsEzAZqfLFyhFs5tTXC7wJfzNTCEQtuo6mUmAJ7rFQbvbQ",
  "key16": "3PqxDVMWaJxHMAZytm1zrs5feAZzjgkec9EaN4h3Yt7Nhja3zuxzyACPXUgYver6d9gfDuPCdZjummn3i98GU8CH",
  "key17": "5LuFJ4sAt2gJ3kxesubKdVLu3T8EgVDLtYqiss6TZzWnLFBfKHTkv9QUbhD5zkxsHtMbiDjLGurGW3QVARtopxEe",
  "key18": "5FL7vuJ5Rbxvd6XMsoeCEUv3M4Nmo4Kgb6MnkrQRY7sNFQZbCQ5mPeuRsmd1W4PFbHZEudyw6xGvCqxyKt5aY6q7",
  "key19": "2YRNDRspAyLrxy46js3KK4mvpdBmmhsREch8855GJhRkwGz9mjoy27R19Pzttab2DYCmcM3K32SUgG8aCweuRj4t",
  "key20": "5naf1P12YRYqu34k7RgMHtb3XWbYSKTatCkj9swShdthmXS9oZJQEoCWDZVfwdd8qAtYigtFUEW9wgC69xaB9Qho",
  "key21": "3iQpTn1natoVrftmwRpU42aSDAFLjEbJnNjfrkrd7CCtRHmMm4LuXomzY8UddPcNbZRN8FL4m6jnbhA1YQREGob8",
  "key22": "4CDKgzUU466JbGFyrbNxz6YrDSacCPc4NgYMtd93E5KdDVnHtyjERfZQ1yE4TTDxZwV7gakiwJDby5JCGNcZVdyN",
  "key23": "5SW2v1c6g1nez8iGCXHf4vHe85oXd8VWXT8wsGVMG6y6aiUZ4PxUbiiLMoJvfUTeLeawZhA4YHeeVG6PHESi9mhC",
  "key24": "48JBgAmBJe9Lfdf5aK3QkeevurrHbzGGXJJ2RAVLXW9YmgG1KvxbAoAn95XHwMDkXaNdgDa7ZmWhdbiukMmE7D3M",
  "key25": "4sBZvCQmx4ymdvEKh13K4NGzDXFpNCnxm5sV2ejexxQfz5HZLjVqkF8VDumh9mU6Bg9P4RNJagHn5ZVcGZSh6yzp",
  "key26": "4HWYRzwgSNvn18Mg743H1xSWg2NNfyAWoC7myFGRaHHaGG58Utpj4eWw9NQBiWBHLspaC8xdUtJ38v3cvAm1yqkn",
  "key27": "YjnTXi3GjDdCghh4hhahxjPbFUFVm492ZxdUXgK3khFeS3eaccNLKtN9xTtmjsjb4ZHvgbJMBJrkvr4YBwTe8Kf",
  "key28": "8fJmEDYMv9XwYN7a1zv4vx3wvMiZFwMwASKS5zgzx9CHvVsQ4mJBQ6to46XnxCjjxpLd49HgFaSnWkyWEzzWCMe",
  "key29": "rW8ZH2vmxuFqQvXiF4Grydou7D2EdoPSFftibtGRfWfinRfsqHyd3HNvZyGU1JBF3UpV6tb93xkJXAZ1WHSK7B9",
  "key30": "4S3c9tWqvPKPxT2iwWiaYtMfeR4KQazC5rGExA7fibx5ayL42wUYny9TSzUZRetT91NqUQkUnc3FZfPwa4P3Ypvm",
  "key31": "5rQAEqUgFPMFcWp5guzZjYzb844f6LbnjyuAmJbZnuaepcrwyz4zEv2rg1mF4iAgwjfBRhHEhLe9BUAiAedfYmKd",
  "key32": "nAJvDTJMSSjKjRs63q2VL6iTxzxZGxBqV1VmAMPXJNFeK5dRFkxtphgxdNvAMEv7Vr3kMPvzEFKzm1Di9vXorwG",
  "key33": "5Q6Fyiz5P8Dxuioj1dw6Jshcoem6iktV4Kw61CFEUpHbyDVfX4CMCC4bAAiquyAmHLwFB7bJtuKHqq5DFpuYRhXq"
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
