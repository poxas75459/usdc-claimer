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
    "imkjJsjDHHrZ2StUurEtWziKbNQftRiLQPRfMAtFTAXGrZnBwGzam5V7tyGMKwFyFvMY27S3D2q1FoaFzyUPWhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6M5hDjuPYnBCRhc6EfKE5Zrkn3eJJP9F9xaAGsBfHg8zv6W4XdmFXNwWXoTdzp2ZRGjVBULTSGjfrTzL5jwFPj",
  "key1": "3t9vjnkTUEWHcrjdJWXcJD9f7dgwrV4FUicen5d5GZGNCHm1YY4sgeGrkC7XELXjzciVakaH3EY5pX3C67xEVwEc",
  "key2": "3Fee6ik2ydtiKuKukYykTGiyiTMH4eWor2iVnPGRh1sGxWzZn2gCWvjsoUXiHDDQL1ZSfU2rnWxaxj9SU9Tq1DfP",
  "key3": "4LhEBWS93Z9ey3xMyFti7CfAE6JVtZsb9g9xZ9VdPFrVtFD3ivoTtjcgk1GxC9U29j7Bk9pjVmApTCyUSVr4Ykon",
  "key4": "dM7KjvEfix77x1s8dwubdTXS5jA9SHjikrD1mmtY274ie7K3QJukBrUP9agYWHfZauLDHrSxF7zj83Z2E4E9CsT",
  "key5": "3eku4Jc5D9wohAozDqZ3yiU2Z7pke5PvdrxsaSpJQApfnvq7Wh335wgbqUDBsxV3xoUe6kgypQ6RmNovAXBia2Sg",
  "key6": "5kpw4w6rZMNYJb8oHFHfXXWt8vnCQmDjSCyJa4dwVNanWB4XpijxvwbLB8nevCqs1GsZ2KwREvz2je5mQjYbSiFm",
  "key7": "2xPG5ioSuBQdYMFHtgFq7mouytk5U42upBF5vs6pJumoRffGaDwPmerpVvuk5zePjPcF7Axbzy7iiMhTz34zMEei",
  "key8": "22veubT4HFejNCdZVEcHfcLLYm99x2JB7hQuHbvToxYRQ1JEBtjNPPwtNE8YxjcZJcZuTS52zKTDbPYuzahKdq3E",
  "key9": "3oHGsGNAFzHkT5eAjSV5puBynmxYRg46o2typ1EmoSp7MznFGN2vBAi3uEDdM16xv9aUJE1MDicUWpU5B65YdC8v",
  "key10": "5XeyswP6Zw3ZQez7E1LY6L9Lf7hZrEj8BiUGHXDQrrz2r1BDKwMiJCn5PWjpnToZVsd1FTe21rQLGtLTEasRV7XU",
  "key11": "4a2FAeRukC9ZRjGbokZjcaKRXticDEr1U3Bm63wZjYP46wb1VDoGjjsepBGT57aAxwuXnrqSKLmcoaXWsB3hh7jF",
  "key12": "58ZQFrDm1VdYqvmi7Vk8Tbp8vpTWofmr64u55GmFWRrQDNznVBtgymarUoFZrkKfgmKRqKaZNrj1XCFqzLURhr7s",
  "key13": "3opUHnwc5BHNsXcmxrPd2nU7R3UpheADfsfBCFn9FVop789Uu1UCyo2ytwuuST5J75pnYcq5AKKG2zGAvBGcJk6L",
  "key14": "2KzcKuKbFXTaTXdtf9zMgzYsUx1fdishCtokYMvBGtR9atWpdH71HtEVuWDp7fPyTGgsqfyqwRX78J7ykWtCarxB",
  "key15": "5jCCHZfab6LDyPCbMkew8QsJgydsD3PpGZwCCuBctknwGeuqAA5gAHxRdbzmRHRvL1uZ5hfqNixK5KekHnAEqDtm",
  "key16": "5pRWZEPeBP5funKpUdHW6Ahkg6dEz1GncofPtty6q3pZZbKMUGWU7ptcjT5n81bHbUgp7LHFRKKiiKNTgzPBPa2S",
  "key17": "2FdtR2oXCoBreaFCzzYQXq9HDuT7xZYittocLJciXk6zpQ4MPPRZ3xQQPkxWqwjsGFzANHhTcVr1h9Egv9jRPmaU",
  "key18": "3Htxn2JtBqXznUhJRS7VT2WwsUwhXLsnkHXjDaNmxgSVqT4zsP7tbSaRVjCUoZ6kkXDbDCrcWgLW9daJMp5i7Zr",
  "key19": "4saR6pbpX9YXtR9ysquuNPF2rGrXZejf9ZKCaGqEzrPSXKRsgXVvwrbxeR64RzthY8iVuhS3C2rSQPBA3gVVdii7",
  "key20": "5y8gLoGgBjfJNWdEcDMnufP96i2o66rNmenyn1Nxxeiz88pqxJyBiVuS5p1o959Kc2TXoGyfDme5113xPjawaq3Z",
  "key21": "36mxuzyWuLZ26ksKiRxTF1CpV1ZRXXGkgmb4bgZDnGSHcvpmtBWv4pwvQr2HuCVrVoKEU4rrN6fPpKog7aB16nbp",
  "key22": "2SWMZdh6nKj3egCJ7yRW6VCJ7ct8VL5Du577ew8BSNFh2FYSTSMwHc4U4fgPthpF9iUwVSEcWwC4T3pkfwFyHuoc",
  "key23": "2CBv24MCguFLtvjb85mviRYREgHzwLMG5f6vDTaRmxP3Qc5iFJqwrSL6qoQ9YYcnagdA4oQTSLv55roA9wjoQK1J",
  "key24": "4WBicKuonoKDFF5mW44hEXqw3xmooNa1kaKtVdoFSmX98ux1uxfbQbAgvqkbK4wwUijYd9AWeVibVoq3pmCVKp3U",
  "key25": "5vsgmh3WZcQCxZZDY6GSDrB7k2h839aZTG7owUtZMbJubfm6gZVt4gkj33Jsy4bEg8aY338APbyCr6EpY1AUoD3L",
  "key26": "4gc1mp47MriKFDBWGinYNd5nG3bjL7vtEyqUsnkMd2Edzk24cywWNdNqP5kPRkmDD7awu4Wdbz5uvB8Nrix5f3P4",
  "key27": "53JeCMesdAtAHhcZt9pcYLZxt9oahf7mBFZ6AccBQADnZGKsNuStKrrXMfttvML88xEXfLBSbocfsLEzchNd2Nj4",
  "key28": "pQu2NPJPRDNUySGwUK2GDxYmk6rSJJMft2TvyGkMLXxzpfXHJSrfGMfQXuKYUWAseY23UKxscd3bzS8bRqg9ipQ",
  "key29": "tSw7DBk2JZAE4ttR5VUiMjeLy3g2hdGvB9d9JdSZ3dKcJNkimjkNwbV7Po2yZnck4tTe2dgZyo1nztuY4bjxSqJ"
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
