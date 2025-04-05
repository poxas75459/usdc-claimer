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
    "5H38a2KdYNTmgLLnAeRxgvuUDhE4GYxKLNsrrrGVvotbSn4WmCe5t4F3YjW6bduTSywqW3p18Rxtegchr9h3L8Xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLB3yFsaUB9VDF9xp68vysfKBUTbY9Gxvb9JBtYc3JUNGBoezDX9GzY1Mbe6wPYUYHAzGqyKKUPsjD6gNgnqFKf",
  "key1": "4KfDEaR1pJeUgMM3CviF8hUf8NxQseh4qfwwRBbwaEBXnjXVvz9R3W7rwBG56gB5S9Bi2GLs3NupSzqsiGFjZjvo",
  "key2": "4q63DxNd1D5asag8oFYFmk52gkoxPEShWP4smvpYyMJk2DpVe7g3DbmvckpVqvWxLzh1KJLT5VUESrboyzWz17rL",
  "key3": "4YeCQ7xphMu2cV6HkxdPjMNaWq9WFycdMsFRV97CfNd13RBppr6BaQenVVKwGqGHWcFrYMwTCmUjfqftW8Kscaos",
  "key4": "4LFjJzJEpuHqbB1KpJHwJjUa6e1352pfRcWBG1nSBjPyxsKQZD8pPYWFRLENjtzTAYRRBLm3UDZ3KsrnHDvZJmJG",
  "key5": "5WdWubNXyZvmzAoesiCbvtqeXCNq691MTkS9njbVPDqsKnsRfBdgp39cQfgA2yFjGtWTECxak6xpCiNFHYJvQuXv",
  "key6": "4HSh5YZB3Awgg2AwY3dKSAJFodYjFXhs3dnfW1iFdqq5km6ZTYfzdfoXQKT3fnUmfudQHdDbRYiqe6fV5Lken679",
  "key7": "4kvaFcGULXmwj2wTyHWJr26WEk4kQ1knqiXqSQ542E8vyC12HfXEjg6Z3vuZrbwM3NreproUgSqyyjivUumUiq49",
  "key8": "332Pzh8P6Kvb7ZYhDvqyhP4RDGXL9ANJfxA2YfY5w3dqXDp7xUYHvEgFBCJMRBQVgHDHso1kZVu5CNPjSkEDkyFf",
  "key9": "4Hva3TGmvWZz2hQi7i2ooLWg68BoLmsXXM8GiAgwj3XDcWJQaxX7NhGdguPtj5iRchaSqJifnwzS23xxSHN5kM9C",
  "key10": "5JxW1QgdqrB2McvD9tqXV8HyQgddjhd1yQjhiy7ev85bjCTw38kyGraxNQ1skAzmDBuGiVk2xPVswHZgdypoUrtG",
  "key11": "2ZNoF3bgvpcV5CYnVMiubf2Uze4gT2tMEqW3hmkzDdFx5hiEjNQUW7dGFYmniQGnfauaHVhMYtFte9ww6HqfdVai",
  "key12": "49M6LT8VE2t33VQKNVaY3xMpFNAsZ1Mxnczbvr4hhmunXNxATJpTT8QgprqmaCzzMgzCRRRHN4SfoBCn1Ksax53E",
  "key13": "4jF1iX54KjKEunPCdbSc14AquuaPpZpUfYAHV8j764qwsNvC2Eny8jhaMzmbur8xTsq1Hex7c5mWg1ruP7GwkWiG",
  "key14": "2DrPDQV2yGmDGYBo3bZVLfbjo98V7LyDedj6UnnW4KWMWjnHuvDJfNnGJ3DkwHiJ1SmEKu8Fg1QC1Kyts64xPWYx",
  "key15": "32YgefBY5fTEdBMX4gYwvSMCuAtVzKQnb5MJwvH1vzAsNtBtoSoe5TZCZNPweDMr4P1erk5GeRj9Kcvkfp7tgmEx",
  "key16": "3FsPvFxww95kUtfm8K8jHSZZH15bkQd2a2pAnBCgLdFhtLMq4U4zrfQwLy3HjDLBEYE7wiRgTSMdmv112X7zvqCq",
  "key17": "2TJuD8T1cMzP2kCUuiRfE8kZrUCKqFX24XqDPmvjX7urWwWZJsSoQoRhvuqMaGFMP6ePsj2qJqN6cePQbhQ9qRkz",
  "key18": "3R9PK9qcW56VcD2NpegVN3d6bYfw2ZRQMxsFdBLspG6J5PviYRN6DoxBDQtdJdjkGMj7NTjHvrco6GA4KgZ7pfV6",
  "key19": "3C9PQWnVKuJLrRFXt4qk31wxFUh3u6tV7xcL4NDY3ibezHGA9PAK9bUK1ZPWhWqxTsDELoAeFhqc9kywg9HtCZDb",
  "key20": "3Pj6iia3gEtumU7vo6TLkCFEb3gLSNeHThBa5NVp6NXyvhGdhkBNYLUQR5jHL1SaV45R6YUy21AMvyebvYJuaXTM",
  "key21": "2ePcFNL144z8QRhuPFNdVMVzgxKwBwXjP6AJ4pwm6UXikY4XbQ1qBf422qDMTfQ4nSWFL6trmbFhgigaV2YSo99c",
  "key22": "3txgMyTWad4M84Vxeiv9Xz44QRA4Bh4g9aWDKgog35ZGhdNRgHfmeFxGsrSrKCNnfWjp4Hehsar4DAJDTS855zhS",
  "key23": "3cBQ9S58oahVjm6NF5TQBKsPtmRxEBy2QhFkZ7H8DtPrWTr6ijmXjLY9YFB8DMdeLvp9rWymUgwCB92gRVycxxXK",
  "key24": "MHwAMVw7sy8YQhUEe3nQzhwfnhVoXaNs9NUfEAupGD9DwJk1Ni8mUSLDnXZTdBQs1ZKPzEb7Q1NbpRbLe1DZPPu",
  "key25": "THBa8rBRxaNeEwEp4CaUuVpWMHEZJmnqini5o3juGXHiJethiQPE6243JqE4hzLcqVDsAm4mn2mdWJAtGdBcqUM",
  "key26": "4mz8TbiCkct7JdW4SM4rZpe4pK167fSd5niKJdFvKXDPmau9UE3jJxdvCLz6NzHLh2gu136Ntqq6JRPCEzEAuUW3",
  "key27": "4onauz8Mugs5VcFisHBSU5c5dyUcrvXH59tQLWAeKNbADQEbCBBjPfrBPLW6h139jqhstGy6DgRrcNpgeThKJCQz",
  "key28": "3V6jWfNJ74SJAFYemUGV2FCy27FYh527QNitbJnc65nwXXRfsbkw8wQ96E7NV1j8nV1tJKR6WWT7bdc9CH1mqHh7",
  "key29": "4oDNN6YD6AVmqKH1Wzz9wJS8dVbhKUxLf2bCRitTcPh7Q5WtMhxY2JU711qZh6rkKtFWM97UnEDRJ4KMUSwhp4eK",
  "key30": "n9bWgBqo7UsZfKVajEWa8iCX1Wd6b7nLRjVur5aLocgzrJzMJc5Cjn1k8dWTRm9EvitUCRg8zrPX6DWZJcYAmda",
  "key31": "31mvuPGb4rfaQkPm7NdgEaEgzuBQkDL43GwWwfkkAt583zticwei2nayPWt2kDetpABFeb3FDt8ZicmwYKfFoENV",
  "key32": "VvM5ioW5wcjhLnqZk7veynCkC9gP7yzJmkNozckwbV8vKnH35JYa18WqnZTZuzJfGXoZ8fc13muYTrjwgRvKB1F",
  "key33": "4Vo7PxVL47yiC8JqCGyCqDbNCccQ88DBjEVEdt8ahPZ5Z2DATr7EbQPZwoimGq9PUgWVrVmZWKARpW7gJFH4yEKZ",
  "key34": "2mdYahUfWgEqkT87fgoiAu9bTqACduGieeetFFf9WCjkbA5VEqXPkAuUaJzBztrmvtwCWJfP3rQaycemk4DqCKYu"
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
