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
    "33whQMi4o9SMAvZuRTTPwwNSwMBGkc8tG7WRNxP2opvU8jgM9C6vwpsK79pwrM8tRut6dhEoMtQe1jC8KXQ8AJBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34JDUD3c8NodhSsLzCQbQRpSEc48fPYLYt1woQGwcbS1CkWC24SEncMXm7kUqA8KA1gmZxdh5rZRtRUvoaaN3U36",
  "key1": "4g8HUgZapP9EG3n3n971mxAwGcXZrRsXxYvG63z1iuLAB3ecRx5a68My9SKwD6RpeNr8ihC9RNDhJyphDuvyYDMk",
  "key2": "56RHEWbMTXph1RDwTVKeexNH4JnTs33XAY1g4PZSjrmfb9VZy3SDHRWT6m7BZBW385vTUX132oX9Cg5wTH4vNPz1",
  "key3": "46FfsBHX77hrvsrNvvTBzXyXmqLL2dBHj4SS2DWeoz4DuJBmmV3rhBkxjsWfsBNX5QpQ5Nmn9ssFBSvgxqvkeT6G",
  "key4": "2KuFYM7p8pPiCtSDHXwTr5u4izSZ2D5nKfHavud2XGtiR5MvPNVSi2BbQkje4JcHuZwYtME6U4otfXrezttnTjcS",
  "key5": "2H2kDn8FTrcYfUsygeJ25Nz5vTtwK6YdmAm1tGvYJrmntTh1eLccaQ4J1UAcF6azGpJk4eS3MUhof73HJYBpE5Dx",
  "key6": "4dyhaAyrxbLG6BP7VGiPm8U3vn6rFd2D3X2M4L8LQug1kVWj8ctZafLRRFvfgua1X8gcksfJbxE1BR6oxeMzbiZq",
  "key7": "3za9ZozhWPoBDJ11acwULppv9owdXVQgeYTfLFhQQBFhhsxsLt4zWKJJUXB9AJP6KbnoxqofvxMENSAhmf42LB1j",
  "key8": "5WYcaWxNhRgi63E1m1DyptAEuWhEdn1RiQi8sXXGf9uB4jUTRbvcePURTxxjPfHSu7usjwrUx1PXjUBHrUo8vyVt",
  "key9": "3Efc7XgKGbDLD8HRHNofmHQvsp1X2k2nEq95xphdnFRAnqX8SmTrjeMWp3SVj7QUckPW8sGCVsJJCm8oLyBpLuTK",
  "key10": "2SGDovL8R68B5bPs5d7iPzdicucCcWRCygGRmKywSP35F57vzq3PdfLZAS8Ha49FRXkoCbQWjx4WJoLmYN9B7mY",
  "key11": "5yLtcMcTa6qATYgXKwyyvLHu4o57s2YoLpYrjE87U8sBZdWMmNcAmExRvpqGVedp2tukzwAYyy3jT1W2ybiYmMpr",
  "key12": "3nescEBBVsM94TFGMedk2M74popUwkuUzQUQEdaGsBafKnnP6o5ebsRaYpv8F7jV2L4YNLfiZYg5bwQjsDV57SCE",
  "key13": "34sCMUe3F7DvbTQXdtaPVBzTuG4BATtQorYRxQcey5y2v1DRTUH7ZHb1VLQduVR81XgiNJyAgZRQmSqLH9zhFFJY",
  "key14": "4sye6KqWSft8i4tTLqoxZXiHCfvoRD8ixSVNG1dvWZpZE7d5CnKYVH7aUmpbpEncDp4ichVxGhzxiPHLF5ktYX7n",
  "key15": "3BPtiLuJCoe61fMS2oF9iE37gJVk6N37nhMpGtm5gqj1M5n34hbPt4PoHDtRhoHHB6WnioKUSYPnCqXR4NrGobug",
  "key16": "3mK2KCL6g53qgp2HdRjWm2cyYmsXyhqULnGAePajsvEu76Bg22drPpKMz6diLEmUDbjJU1te5TGLCHRc8rHVU7U2",
  "key17": "2mTdmUvMC3BP7gtjpnUUqfCXJZ32oTFN5drvGoRZt6T9iBWD1bdH4BBv7X5RUkFyk96wUWNMWVM4NpnEbKFvepc",
  "key18": "2Z9KDXDwmEkDJo7eny4G3oZUwvgHvcZmaBXFzNvG7riZxx8m39auudBkaN4J3driA1GLKUxuXBRLvpEkWHcrzjBs",
  "key19": "4jBssMcy7mLsuB96TjGAunU2qqdgHKXde4vPVg1n3eJbxeP3Uqot3gdCcUFjFPqkXGza1tQ1fA8YqQLWLa95w4R6",
  "key20": "54qmgD6A7dj5Eq8GeEf8CsBRNnJmWAuPjMAeTEZ1GMQFTKMCXx8dHFMW8bnGBRUgrBoKvTfVQjocAbgQsncthhcL",
  "key21": "Zc7TtTWiA4aPd83VzDDBKJJaGMdEGUpSZcGUduejFm7YQz6qRzYq4ci7QtmVx3KeL9gzvW7bQ9TtUKA8GDpfbWC",
  "key22": "3JD131o2WtpGjTh3HmfrEByDv8h2MgxxVw7LKMUPHFCpwJEW9cv3UGcKspFpvVZb1TvCk963V6CmzwWPZ5YWe6so",
  "key23": "99jf7UCNfkvhcQkYfCARjad5VFonk3Fwoj8bcAFvVJxuhYcR846k3i2fdQsY7jRDKyoCYMnZZMK9erCyziyVrMv",
  "key24": "64DKArEzkuZJQHgpCeAs8GDN7u2jnKw6PG6bEoRyLWzTFCia77AAyXzFjbhLm5DxV5dkpckgJW4kzMaySWsCpMB2",
  "key25": "5GU6wW12gkoquSNKSf44X6Hpyn96ARE7q92t37S6xQLTyUTkezMJ5eztmqun4jS2oZNBLz99vECCX37BgjEppJ9q",
  "key26": "ZWqjRxE6Rkj4JLZruMsmeXxCAbNoY2J11mAh3zc8VD7MmFwnfrYoegMGdAY6hNTL92xsy1bKDK1WeiWGFidikxt",
  "key27": "54Ug3thbjsKkoLr1oqGgj8zKvAmvZLttuWHkia4ncgzseWydA6ZjUhWxSmUPgFBg6noAtCRPeZjzQj8zj7q2t44A",
  "key28": "yuryFD7v9RCBz4ha5GSCFzTVrNETCRLipzfhFf5qHueXiRWa4QdUYShK3oHQVbwQZ6yToHMnvKVi5pBU3AqshDr"
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
