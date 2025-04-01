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
    "2BapuhDKeeQx2ZJ9V9w7eykrKsLg7ejadDg5b5p9ivcBi8aA43qrp5zJt2WBDXUK9FUZvP3x1Ex9WWaxDJfmDkgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTZV3zr9bwj5zSypZwC6jXUJVfcVP1dMKNaMXxgUCDsVFVs1zzFbWUz7ib4gUsaWwoggukDaNji7UDE2zQvikWM",
  "key1": "39x32J4FuS8pcu1GfeWuQ65eczp9527k1Cyr7n3svheen8CTZHJKJuExef7nbLEnHTRmNGgSu7j621gLjHmN3Awu",
  "key2": "VibzSihbMYNijM7rBxCzFjZiF1XBFXfzGwJgqm9zm4DppeK7rsdjUX9HQUhhbXQESiMZbEwBbB7PSo4sB6DJ4iA",
  "key3": "5PvdskSMYCWfKGuuq3dNya6ZBtwkU7SSVvbnUy1zvsDM9Ur5Dz2FJVEwxzpe6EjmPYDnyt16wNLA1cm7SVHxYd44",
  "key4": "3F62t3BLsiGeJLhXChvWTUcRHuwuGDBCDGbirX13H8DG13Lksnb5KHWZrwkHt7xhFNWTwfBgxiKsh4xn5dqffSyx",
  "key5": "63uTiaMM7crN7FmQQV3aoTJmKn4AErKc1m1VzDBbcL8KEzJ3DC9bBngAr4zr3vqSqtGYxTw9UE7TjptDj5aREK8d",
  "key6": "3rsrmwDFYSzypL2rLvSyq7iXBP4UEsq6fK8GUgUhTXhbn4yuxAtKurEeAN3mrkYbSk7s41YvAhKPMXtAgzYaHNPP",
  "key7": "2icgCVF9Jg6mGnTBzy4tRPtij7A2KfiHtmv1c4nqZhRKJCMJZEzgu7zoRYobEumPKWciW2hfEfDTaNt96HPMcvVH",
  "key8": "4UREZkCoBgYea5jxiENy6nqVwNTb12jeie7a4BK9yEWKQN3MmawE4ixAGBgf8GLzVEvm8zEwjxNtoHmMmame5pZw",
  "key9": "3WzxJhAuUf4EBFh1w6MAjwACRHmL8qiG6rzhQvknA3EMtTcvXScm2gXf7Fjx7AgkbrLxjA428MZYas8yCCjJcYFW",
  "key10": "5RPosdn6H9ev4xzkRTgFx6T4n3Vj7nKtjCLoNkpV2pQ2pnBtQmTBZ44M3bLLdMx79BPyq67yUaSMVLLQ67StYJQ3",
  "key11": "3tMwbosKT96cJ71Df8WveFGPvLLzzPbyf8nfUrmbWEyZ4b3gHrm2SUAqD9VhyFS288fkTgSJMVJGCMxiAsMRadjy",
  "key12": "3QS1mKr14BgrBTV5oL27dQXmrbfCKdiJBRjvNtBTgorgYetF1rDEFvW5GbykFXkrwCvnEHbtKptz6AdNq6mLc9zi",
  "key13": "47XjCjfSQq61i8rz4xTEAFGRMxn1deS5RbCqEdE1LH5rww6srVf8k2QwnErZNA7Y26YwdAyagbFXSXyhxyozeAvp",
  "key14": "368LZFAnrxQHS5rnxtTGWkQSqjdTGwWEkokzaMGVLWsWJKooZ7rWxvNcTHA15AZXsTtFVwz7dVvqK44uhiahuxSW",
  "key15": "h76juNj1KMU2FDC8uq7dZuQio5Z9UwRHaMBnDeFVY65rcSVvWTYCTb6ueWiusRwCXFbAcAjy7bfrdwCYSRLqD4a",
  "key16": "2S5Tyn6DjZMa7JsDfLFRqsgjC9s7PTcAosG4ThNrtThVrQjR4pgi7WNLXCt7U7croJ7VnLV6cMWw2wkKTrxcdSEJ",
  "key17": "3LjUmuksRqK7rBi6moYXewFeDitw7JJjpS5vVVizRHF3kERsA8HxNuyUWmNAhrP1Pk1EnkDuRJ8oELhaEzNArLD4",
  "key18": "PqRxoe7V7QFumaf4UgxQbgV77xRxsUBttiA2giP76sBJrPDz4LoC41feWL7jTPgsLFKW3b9opgbbWjURZXQVgbN",
  "key19": "5vRxmkt6PadnAtSxo3Dnj9e1gwY91Ztg7Z2x7yjK9cMemEfNHhPPAqBjnQUUTGQ7EvZbWcCtdfwo3VJySFL2cwwD",
  "key20": "4n9LR6o2wHgdomrrSSLq6LY8fBEJTQcN9gzAfYjBqqdwfBciVnzNw1oNAEMaJCDRdjkde9YLtEo8F1EPpc1Emf9v",
  "key21": "32Y8c221xZQQixRjg7Ur1smjdr35BULB8N15pfMvHKRyCe697eU9f4V2L3AVuv3akCeTw7NsVyiiqXAxh35yo5Xx",
  "key22": "5Ya3VZu1NScVGNnpjw2HU3j2tEugBAy3pNjg2nF1RWFFuTFMc5UgogjMY3yHoSNpzZjS7A49WmwKrMpu26pQN2bs",
  "key23": "3UF9ic1QP1JeTaJsh93X7SRzCzHAjRcXJE43uMCNmuDJrUc3pnFYJsvZXtSPcqx3iz8oNL1RbvqC7aKSusX2v7Xw",
  "key24": "5K53X5MTXz2kKpUSskyZK5KS7DNb6eRpnFTBo7YaaL76VYKgZq949iobe9VuRkpUaFQ9h6jPtjRNE8yS73H3ytdo",
  "key25": "55arWFgNVCGBWCbanRtM76dzJSLzJ77LT3nc3BtJNkbMDJA1dow9UfobVRkG3eYLPKchebTpqU8GS2PbE1QdZRk",
  "key26": "4yxwXafF4vfKYHoUz898PZJ9mUHDCQ7jnwH2PubpuKQBYp9NKU678US3dxn47ZJtfKnpTemYYhdLQnTCuFWK8wjV",
  "key27": "56umRRPuXdQykEtqksXvQDkqFnojYjrr8NuJrahmjcgpoJftDBygfPRnxfGfV24WuFmRXibKw4yx8jMTm23a8zst",
  "key28": "3ShrhnBsZHXSBzW5bkbxPpSVDfQxaR7ydDA3zuLfXxGtCFQUQGMZU1ZapfVhCsyg2CJxsU5UEPCFx2fP7eakcMWo",
  "key29": "3dbasCZJUikgZffErvRPaq9ZxQX9qYHwRffBsHKnVSv6n1xPQfuCu6wFUJjwySikjEA9zrVY8DJZXfN9156EDcxe",
  "key30": "4rPmUddUA5X1u6ktH5ikE9j9EHcpfpJKmiTkbb4WZj1a7vFBHJJS5fTYa7jArgnFR4Eq2QwNRY23Tvc6jAdx3Dkj",
  "key31": "azN5WV1fccKKQARLRNkXw7JQjM9tRSMcrkB5xr8j3bba4KzDqasBUcDsvZUdzPG7CbAkJuc8hiNxWZJ38dhbVL9"
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
