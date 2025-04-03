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
    "4e6NquJqcSba4v43A3sopr9CJhaLH3dTD6S5kpd8hoRceAKKURAXtgfZkvFCJGpEvS4aDDj3WqHchHKwNtWCDKCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66iwMZvtSgc65tZQ8ZS8xz6FTvVfVaPppxa3rKtgbW4gGej4nm2ejHxkXwk9tQUyLb3vqvei4eSHCKXY9idCApQK",
  "key1": "2NvQRyRfY2rLfAKCj4TcU2kvXagfMdsA75YDsPgZPAX2Yckg7nAevJGX1RzpGmu8uwuZKkEo5sV1DBzqeDZqSuv9",
  "key2": "3FNBuSzD4K7M27t5pDKDTLTs5cxmpmP618TEu4gZYnB1WcpxULbJxohHnupN8qJfWBCsF8nxtpYP7YvSzVc6tPJF",
  "key3": "XKVEEcGV9chRvfGrNCMqF5Jr7zXAMjY4MpBrvUCZrhhCf4wRGkWmwRXD53ztjeN2EMRfGCWYaEP5mB2f2MyVy66",
  "key4": "4xShDFYpZFT6qFPfH1WPEDb6Yhdvzba3ZsEHd5zU72Zqoz9cGJJST78tzo7JQuS9VyExQ4rFQxksLkNqPxxoobHj",
  "key5": "5Rv7NcXcZMkR1vM7ki7uuy43Gc3AtkAUgxM1Lvf99pmebT892BYVdoQRrNZRUC8k8mAX27de2hJsAXMXZp5M4Ru7",
  "key6": "4zF92piowxZAqhyqiVUAyXN8sdkyD6YVEfnueQDHkSZC1Xk7TQS12bWcdcrtxqqK6DVDZq1cPi4SNaWWhRxCh6iG",
  "key7": "3EJegNuyERVSSWFcbB9K2moSrhDN8R9P9JhVi1pTiQzratX8cUXs157WKFxJ6E4dBFCf2KiPXywpPixivu9Dn4ya",
  "key8": "3AXyhTnkTS8cnA2i3J9hX2ayn9csSePz9DpF4V8t8pxLNHRZ633rG6MEmA9hgP9MCi7jA7mzuriXxuimMmDD1s58",
  "key9": "3XENPfmoYuTPPPiJUcSFmEKDKD2wdUUdVRX9kssFC9DXDdgjRRQ8GC77BsXo1HxGStqKh2YUazAKPga6JQi9xHSm",
  "key10": "2wpUZHCnMMBQWH3A6iCoyxNNNbQQvg2kRWCFyP15w9p5LyoWg36kyZFqwpNSmv2LPJVroXXsXnqNqvHzGJtuF5Ly",
  "key11": "5x5BiBA8vA95gS617m5d7qETiLocK4HMjKT2ydDqV6FviMJCM8NLyXoVpVvTGW2Nrbp6wp4uJ1ecWBcLXHpRaUGq",
  "key12": "wLhvQQw2oZbx3ENjyMR34fUDnqLy7qAykfnTxmiVkehULENxJvW5D2AJcyX7biZUDLaXS3B7qRkeBAEePcBgYsr",
  "key13": "5CdTEjQCzwjjMj132hhGBSvCXKEZ1TMCuMx9Xp9adW6eWmgn8iFSJ2Dfx9G18Bta9BpG46FpKxZSHeicMpcNQ56Q",
  "key14": "3N1pqXmxbddVGa4ucNuUzdaCwP1NpRWuGUVgAmnz7EVLDh8mVV8YfKmRiGwitwvZSAtVbqaPWvRzkkJ5CpVqXzVk",
  "key15": "4NpkdBanjwZfZbRtj5Sbjb7PeGMbdPT4eJt1W7tdbB5tqHjMQh8HQGRWucKkLCmxXZJDroRPiHf1SCC1KKNd56Uo",
  "key16": "38L7z5GHdokZf8bQjHZ9D8BYscDc4jryyeL6M3nNaE9uCh8BCHeRcvzr7zi4mSZ6GyAYzecULtCBT7141dqrNyfv",
  "key17": "52RrvyjyC9xAtSDSjvEcqUcPSf7LnpqKgwRvDbSw29kHoypaEEfeAEJqRe2LCrmmrmZ6qKvo6f1N8dZp4rn4k7Nf",
  "key18": "3WFMT9LMxtsscETgjsH7nEjrMusme5cBeWv1ZWTv7obfscLaRgHdnyXWwmMw4EK53zcjztCWPK3ymeZjKk8HDFe9",
  "key19": "ejrFwrn8PcEHeN3kmPWTSoNRxwPsAVHMTczF7rykbMWMDS5Sjzzmdc4xh28GQFLQdJ2J3hdR9jWwEfkQhkcWGLe",
  "key20": "5Dno7kbHaKgcF3psEzP3RnAjf3tGGdxuMmGNEcXTiCZzPSE9Ufq4vm4Ab4JZMj184AjAhDJzQRpSVBC9mam9KcT1",
  "key21": "yhhA1cK6Huy8sRaNZhTgfvdMqNkEh2jfnchKom8ih1CQ2AhtWQTKZh5fXkyiLtFHdwBvxDM8KWfCzHX6NWwAeKK",
  "key22": "5a24NvioFeuvoWxviRQk3jV4Zxn8XrDQiMwCX8Tt4zi5acyXxpiYDPB4CxtqAfnX3pKv5zDrCPfShv2KSjbf2q59",
  "key23": "35k8EMfDPrtXMSGq7qPVFDt7HmhchUQcAzNuqA1mF5f68ETZ4qWvMhCyXwFCnKqiqKGoYaLxSoZyz7ApvzMtoeaW",
  "key24": "MchFdRZS92DqroWVBrzi15rBfSyhwo2RbbNYRbR3LboRAPdkUe8AqDaQiJLvszQYtjGZR4wL6YfHHNBP3gBSS5U",
  "key25": "5rwXLcMPVyCtJpVDjqEPs362LqTRRYzDcPzEoL1S1YPNYvxhff2emPajYA8ai38LM4TeadzMs3aHbpiKXZRac7Eo",
  "key26": "HKTVMivpchAcE3n5adug4HYLos7Hp2pB17SZqE9Whvb28MYYu3VoiyTERfFYMHgwhoEiHVEW5LGfGJdEFNrbTjP",
  "key27": "5ExwbqLWRhkCEtJrWWDwLyNwXPz8aWrd9QWfE1yU9ryuPiV9cWeNxcWeQx3KcqLX7FoiR5ixyDLCbQBdL7Sg3Vct",
  "key28": "7nCQatY5vCvGcai8Jn4bNzAoCDDifMb8BR4JwiGbj8rEvSEQ9HWvUPoLBjFxuakG1kjuDNdCVnzUdHe4RbfXCHG",
  "key29": "3gbbZcwbVjhs7gXa2ZNmCFFMU1K2RghHa3ZfhY5PjUWqX9QD7yTk2h68qMJEKuiBJNqSMvox9gM8NfTM8dcPrhT",
  "key30": "3prdqUNEdCuFhqKbvhiVnzTeLsMU24nmytyBGMdqgtoaH3LuAycVHEzqg8b2MnkLkcmJdcBCKStV74CDJ5MB8JaD",
  "key31": "3CGit5DCQhibG6iRChWz9cD2JKNNCDrXJ5YYP8vqwMTTe4ohRKYopc68pnH715H2vZEAQREK7S9sgiVY9E6HorCk"
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
