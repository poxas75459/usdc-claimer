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
    "5XoEZECKm2Q4Ct489BynkW3gfGBRhp28K3RJ14racSg6WvaveLZBkHCVZfERhSwacmpjibyHdo42VeXgxr9sxrzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4doGCYzJhShWPDHxFP8v5LwoW9UpiLwNjrH9wTBNA2WTYBCE55q5JAYeTeuUobQYp9mN3mE3fusez7akvdzTJv7D",
  "key1": "4Y8epuct5wDThbioXRS37bTN5thcJmUG23HjpvaSjzjMknDw7gN2UmMJQvCoGRMg4Qky2NhimLV8Dq6o1YzX67N5",
  "key2": "4C69JSegQiwurSoPWVYgmoq1Vg8z3AaNouxUPhRCVTszCPs8ovm5ivYJj1br8sJbSWsLPrPDXzaG5J7trvMRbPQ9",
  "key3": "3JJeRvuhSQgiAN82cb1hGhaYB5t5y4K8gwmHgp79e6utFje82TxTfZwRSQrRgwonKBqcPy1YyWMHLdpmZEz6efox",
  "key4": "2hjAaxJRYP2xtgdDDnf8sycXjDdwLtRyH7ve1xEbWNUMzgM7hkMMwyELCsYGXYQCcRH4w2Yh9QC3DdBki545yLhg",
  "key5": "3oG6WoFuorCsPBnkqKMmwWqbnC7VMoSmWkL2FZTyYorvHkqSGCTQUD1iy2JSw8xJYrWxiGeB4efaCqFBfVKhcqdx",
  "key6": "4huv8cVGRfvxCGkXtJtcoPCjRB1AKQawEDavZqBxEeQPAvdkcSpuk7RexmPZxeKkm9WNzE2LxAaRgACMMz8Er5Xb",
  "key7": "4ZwGDzUHwqfu8XDF1YiNCQNUzYGVZ7iGCHsGTwXTKPF1affodhfj8FqwG2RP4hJBJcfEBuR5y6Q9tfxmTvbcj861",
  "key8": "25aXT81BAPbW5JwWcejX5eJHaGLvXb1sD1KDiuYrC9zsqdvkGeBAKKcndBsV6Wnjbf6SU9WH3b7wkYv6RdkXQ6cj",
  "key9": "57RfWD5FqGRxmUzxRLLTY3cipMm65hPTaL56DcJD5ZsdW4yo8ajDL1DV9PCfSw4tbA9iL1RdcyW9Y9VbfUYJM2id",
  "key10": "2zpeiCv6gRBwXeztCZMa7gG8jPjs7pY94Fo4vwN8Hg4hgHMSPuuqTxksZfrimnCyuhZgh5ievuHf1z7bXQmKw6UE",
  "key11": "5EzDNqRvcXDVCxG1QV7D7jEfkYcNpcSoZ6tic8eCSKSpB8PR5eo6aNRzGXLMweeBmvuWyQxq2JJkNuN9cZX4VDp2",
  "key12": "3SChgUnkrn8zmPSE1XJEgH8qu2DYRweuHXWXnSQJ3t35wHihc6CF9KHNtvHQyWCvq1ewePNDUpiRA59Mr18WPy28",
  "key13": "2Tk2pCKDCK5WAGkGupnaXZg3y2C1675fUJcutAbMU4H7cbt3vGcuUaQkSqJCwHWXhaGSqmX7o4RL8byUXBzsQsXo",
  "key14": "5kRNkcX4aXA7xBa9NNineqN6eXae251VGGEHvGUKQFaVqrw8N8jdKaok1KzamU9JqZ547uT9o9XK8yHG9QFcyCmC",
  "key15": "3YfgXBSTCmKKUyWyKx36Lz5wb8Y6fbNrETuEUK4Wf6VYKkDQaW3tpqBv6ESSf9gtEeMUZHeoaKmXTihc5ShkzrtP",
  "key16": "2xxSqEkUQAuJqsckawaweSDczWYJ3Jnshi4QDQgnJFMmo8SRTnyN9na99bCVKy1HGx6NgfieqGMUvpuraLgbC6s",
  "key17": "23Hm1NpTTfqjGW1a1zMytKZ3GeZifvuzbehqKSk7zrkXpeNE87bgNBz3Vi1RNp3DXiqSkGiW4fL4wuVJ17bmLfxW",
  "key18": "3knt684kN28Xjmf2UNEtdC57j58xV1cUBZPqF3eJAy8D9EKxsM7XxcmQWPDX15vShHcwagEBtuXLsFLedca7xRVY",
  "key19": "5RLnhp95WSc3JQtFpxt7QkhAoev1Mijb5xVJ8tmMGsn9vWnW1ZPcVW6QrTuBCFfP8MThhqBHUwAEpXSGibB1KLGy",
  "key20": "3L83dsRUK2rxT6hk6fj6yTDASZrHoGpz8YfN4fPtS8gvdGH5VRMo5WU41VZpwEBhPiynNUvHhrsWfxG5vqsXthNh",
  "key21": "5TMr6pgCdN59NxSniLJuR7cbE731XwcXxeS7wHS3wzFgUwNXefku1JZbRx5UBqnoo9ys5vPGA1hHEoxnFPwQaYGm",
  "key22": "4pv45Mhmo8j56mdrCH2QhPX25GmiaJpqx1WdUX8XmDwxKn2rLvoaG7Rk3cDDEjwYG8awYvQq1PUAWkG6CESPauEh",
  "key23": "3f1qCNEkxNt6A5Y4cPtDwZi43mQnREg1xhUTgf9d67qFQmDTSuKmoL9kpAgDHYcNva3FbXR1BfzzLg4BUBA8soeS",
  "key24": "5e64HSey6f52XcqYRKM4roTqiHyYtUXows4R7NWhn3vzX98EEt6t5UbkW2q2TW4XWMkMd4mns2C8KxE7A9TtaWsv",
  "key25": "2ZcoG7ST6DQaaPTSLLrQi9f3jWQtMupom8bcd6qDM1ZdF1MLBifZiM8qBdz4vF29FERmubDjssBTtCaeFE5BfQiE",
  "key26": "fgmCfwNsk52v52tCDhiP11xLA8Usih6XARfaF8TrzEFrZwnQ9vpir9Bfx5GCsmTehvKUUZo1TEmYi5SKbp4ocFV",
  "key27": "5pw5urYwFP8dbq4BjfXKAzk2N6CyLwHqwy7qdfwXWqAEhviUxHEqFvjxK3m7qmC391UJZS4zCNawCaZdujTQfLJF",
  "key28": "4D2KPdjhX62L5rGJDKrnd4PGXewsB5MwdfCrMaQSYKogymZjXAcNDmkqPujBBjZrtGsop46G5b2TmvEPa5PhWRg5",
  "key29": "2KHz1oP4qhhEt67Lw9p1sTGKfA7aJ2iDfviv2yn35KUNsUpcUQNFXy5JZBxsd2N4Rk7m1dq67HtQuf8Jbk59yCfu",
  "key30": "5QuG4KBfcLfApPLX7C6WvpSWFSp2e74E5Grevdde1zpZ58TPiErCHCQ6ZJN2AQyMawNftSz3JBK2bqDuKG3JMurC",
  "key31": "4E1V3RG5Y5jxLs5z8v4AchHpttcNsrEuEgjcvbhAnLvcZmbsGsGpna3qcj9ChrGbDyDrRicbYSo1qr2Gf21UULeZ"
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
