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
    "3k1MozidxWfbWNisKuqcogPpdE8rsyvQtvYpuge6UQc93kKQxavRxceJU6pgaVkBuSKWJndPsxaKWrknLn5eGcNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MqjTYB4s2UvrDrwwbZK5i53isErfPh8FPavmY5an9hsvx6rS8aYXknEvYSpmNDKbBqLx9PaB2x2XGdaS9zErfgV",
  "key1": "3zs8zq6QXYLKfMbHUbfgh78h3Q4f2PwNKdHtuZkNyYqZMjkAYWXS5XHVsNBbZEgZyE4MGKCcJg7D4TvmHXXhos3e",
  "key2": "58TMwX9PYm1qg6E1kvFjKGDdCidxKPS5XUxRuHVPNWhrjA2GaybCKaxvDTBFCtZ7fkEeQCP8ABPk14usiabC2fqf",
  "key3": "5hZo8u3tygzHy7cr69jX8T4RZhsBWdufj7dmTKWhqRu3F4fNswa9sMZLd8VQFTXzynzJatQNBweW2Q7cHPEQM6AB",
  "key4": "2YgqP3K5ZELP44ojvkLUV1iyE3TNeWmeNxMnZJAZKYqYUS3AzhrqSK3aGex2M8jrPDm2CqxUPHAUhUiTT77vp4pb",
  "key5": "3zyF8xWSK6936BaT2RWWMnayXpPnAZh3N7GjTkwfoTohD1KETTkL4zRv6hCx2BodHg8WjjVSGbKCVwq6RdcZn4rb",
  "key6": "5wCqvmqn47RYSBVFa78pZ62u5iQuTKRn7iyLtPMPvH2xtJKGefqAKJge71uZcEAie2sq9pQStkaEQZjk73aRqKSV",
  "key7": "5uoyuETBwEDbj1JmWC5tRZgEXQGfzTWYjgqXXDkyZCPjtEoSEnnr6XZNpoPQaZuZV1Ywp3xdDGMRxxqa1vKoKonK",
  "key8": "4B6h8W5mBjGdZ5MM2jdVKgmvcXtrmtk9a3TuM8S19kgmeCUiXuiS12EgxhPydoVpKEveMQU2PfyhkdfDmCoawQf9",
  "key9": "5T16WzL6CwRpG7ZXh3zHbcREa5CpK3LAyfg6VSncQKDu9PhiT1PXqPjEbjFrsiPLinRNrboGFYy6Am6zy24GJPWh",
  "key10": "24eg6e2oZjUBqgHDEPLcR833nXuNkZeocoTpyZs2dNrGqkTGxKLBq5Z5oRQbmpyeyDtn5ut8r9zbCWuwpz74zKcS",
  "key11": "fkRVUW46KnyB5cUjfkKhdyPgtrnkUQRciTTUKuCGPukhiDWDo9xhSZ5MQo9FyCrcUag4u66TzockwPXmDqEfkdG",
  "key12": "4o9F1tHL9qsRzLJWStebWekCGZKD6qXyMHBMoscdDYaMi4SDvoyyarPGCtYtfopX13noa7EjpNGSNY5WXSkDCi4y",
  "key13": "3FjanDnUQuZZfjs5gmWX7dVahW6exKezsfNHZbss9tuXYxJDh32LpuCHn7f7vpsgMfo2MNnUVka2SXUmV4sb5qZq",
  "key14": "hSkmsEN8nLjkZfWfgv3vHedASi25dg99CVCkphquLu6xzrcZy2KrbrX8b5kFu6qJsKJc2AvGXn8wdr19zm3aW4c",
  "key15": "4k2m1TE6GcHR3NUsVNtYAdjP3esSU4C9YVxrph8RZepccTK932tiLNy4yzNjBgYGUB7aDGP7Dw7xV25j5VyFxDsp",
  "key16": "3zJy6XQ5fxE7MrQDtVFQb7TKEXQY9dHzxfgtWbTwwVSoixMcX4kRsr7y8XeQf2YaGHTc8qpRfEsuZGeVS1wUXcp3",
  "key17": "5MjVmALzFRRQUGVWtC3vdkpF1K9NxgtRujvXKxWVW5Hp2VLs5PLp3nKu8wiD1bovtVqac52KGr55FhWPHjChefph",
  "key18": "56kcWNcZqYrscLjxzEFYury1i5SBZve3jHRFqF8ekZyCV8QzhZCUHJ2FjRuB7crL2aryip7MAMTU2i7jqbw7f7Em",
  "key19": "3KE1h9QujztjnwNeoWq1PUrbzzH8r3kh5WSeEiqWdE1pNsyw4LgLon7MjyvMgB7qJh3VoNbS1iYLkERjoyXUwy6K",
  "key20": "2S8DoiF7Wj3dz3giq4yUc518UyNS2XWhk9Ffp8GEZkGojcy9UAAjfuWxy5UiYMarEwhM1QeEbQLdBTNDWEyHh9A8",
  "key21": "HuAMrrLwXQQisgBP2k6ngU7MARMPD2rvyxx8vkFxhihFWGzPemUgVtcPBTX3FaQJUuEKTg37DfyWacyGEgSWow9",
  "key22": "657e4Czq4otKZKDuVn9AdN7D3NCoT5ena7nxK7qHvd23EMiKcWtPpsmThX7tmJ3BkbnsFvLXbWr9P9TTA1gat9vd",
  "key23": "5sVFwLnzVQq728NSkf2zQa6YgTiuvqvaeTppT7XnbVygwNDvVJnH3xQ7Um3opr8qbTsfXTFDmFVJ3yRjwYSpYAS",
  "key24": "2DqxdmC9ArkqovpfpCL5fw8DnDYhQFjTUdpvtYfs4XVyiRHdfQWsWg3vXekHDnzx8TvLJQNjgeeY2ntJyJgkRbji",
  "key25": "51EFrEMTRTsL5HmseTdJ2o3vxm2AaWHud7wWc9njuiwhazu7SWVKP79sE19E4DkkeksM24DqPJV9mX8PCbb8ZsRu",
  "key26": "5Ci5ajCafRM3u76FAiAZLXfFH9ydD5z2samaNgV1NpQUi581hajfowyGMe8yeMJKCHQHoKDiLuxHNgbUBSMHjYFN",
  "key27": "5XRRvd5V66tVDv7PMcnyCFrnantXsogHpb6uP1Nb2wTcbQJmHux8H4P8EgxCtPDitgHXcYtRJMTmYFcAYMa1au7b",
  "key28": "aVU7VtvJ378rUgSLyXUmS5RUUkqohXxN84LVPmiuJkUnZSQsK1uiEChvzTYdu1gffuznTv8G9CoeBaqA3TmvmR7",
  "key29": "3XSEanTTiRvNpurDdCWKe6oxhZpSJKjVEueYWjis5t9NkP8yCYo9bvLsGhhQWbAWLwSg2b63n4c2wZgQXwtRCpgY",
  "key30": "67n1Z7Cka9n5YBsCDdEkdSkaH3kXy615doeYv4gBHUuoPvGXMzHFKuCB1SPUzJ7Hafk6zKeBo5rAgewQRxzwGGAQ",
  "key31": "2X44sic27tbBtDKn7jV7juNGwv2d8gy5XHyQ3uq9XjaBELTGJigim4223NhwEvgA8MURxMwJDnAPhWwNL46XtcQk",
  "key32": "24Gu8ef8jznUvvg8jsLv4p1VChVRfba7Yag5GyXEhTQ4L84Q6hB93gii2cEGtsvtexj22QxFzC56SGLTbFXu5BD5"
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
