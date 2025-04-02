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
    "4uLcovNsCTt4dUHyyky97Yy9BpHuPCJtFLgcPCYbAzMpCi5wF9nzNmaKMNN5zyhACR7YjHThwRoKJq9BYrUsEHfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jN8yotsPpYjh2BtoGuHFuE5YJMstoHRMGXDFJ6H1iJibyq3NFi1Zx2CQpi4ogVpBuBeReLcdc93RQxUnSAMKf6",
  "key1": "2MMSH2hqDbCKiT6fW6kd8stBhoEq6mGded7Aqu9T95fbdGYUaUBHE6gN2RZGXUyKSsgpJAsaJGbP86T9FNuiTGro",
  "key2": "47b4q7rt51HxjPAxLhb3J18KmFuk1ny5V2DGFU8E9HeHsMUcQQA2s7rYBmFPMHet6W1HWup54fLY1EdG2kF9aZx1",
  "key3": "4deBhKLwMojRyBk2GVEHLZjZgHAsLFw7U5gPeWjMecLhaXauMdW2ZAdfKwULnN4xAx4gHmpZhPswWUoMftSjSJbz",
  "key4": "2xmohgLRMDe7YEzKdqh5bAnhKSYZiqPowRxLEeByuB6CENQeq49ciirk5wL2zqCyf9aavvnVFMqM6SLtq2g7gzcn",
  "key5": "58gNaoc68a87ZLs72d2RUVemMtuTdkWW5adwhedXiwd3Q2pSNDv6J8o8QhL7xo9wDBrwYWWRei3FCzWbS25GaBdZ",
  "key6": "2GJBKztrwYieFs5PaAsQtNdeh5ZwEwtFK3i5nCjTq5dNGFbT4pcPUDjDdtXK2VaQq94EgSZCpTx7bV9zsBFFqGD",
  "key7": "Has2uhVhcVW5uepzuZbeS7QA1jvtc1z84VkjCdwMGW2WMRRkNH72ofZoKdjjotApXPLQkL6zdHTN6kUwxtSGZBx",
  "key8": "2G3Y6dXHumi7hdSPDATg5oztEryEJ4i9kKevCn58qVCMdV2YzyfA7Q719YkWY6Q2PXGhuDMRxU55QGsS46Kofs4J",
  "key9": "4MVcrdbE38kyiEo3Nk4t1eeWjBZm9q64K17sJRCjdTwELaSUzqBRDYaa3Vx4T1wRTE5XdB9fNToxxUAnfDgqD7Hr",
  "key10": "pksGU4TqxAoLBht893z1pP5oAemrRv3yoUWj6orpYop9U6FJXJcbbxtZjt3sjFB75x5fKtfFxrBk47nexsPiFG2",
  "key11": "4NawF3NvjNq3ksYpYbSbaXPyYBnnGwAXNwimXPvntXsmF1Gtat5kBtLPdoW9wJdCKNFwxKcSi88tCvU3ujAtoy3S",
  "key12": "mtkBoMhG4dVyTxTvF9QBJigbWXTj22fa5zY2t6TZ7VGpqZz6NqsnMALFU4w5nw98L1s3LSf84zS7T8YYEB27rB6",
  "key13": "2MMWw7EQa8dSQxmhUUERZ4DkKqQeWNvbccVokR4poYugRv4oZf2QDdn2TnyMupeLNN7FMfyvpuX11yJFZfSVe6it",
  "key14": "3ttyinBeybyXYzSEn6YbpjFNGWRkdLW9xLUB7PNwSh1js4JmEX6m2ryMUpqkHK1YjUvEdKmV7bJpHc5TXKc5f8uh",
  "key15": "5uGsB2Xzd2Qzrig83mMsDyHqXCaJ48qH6NSMZ5C8vGD38PwaP3erzzQH69F6wxMLaq39VuZQ8KRifHthtAByfRM2",
  "key16": "3iKbEmNP1uQ9Kw5GEa6rz9PVZnj4Udh3ZVBqfLKDZagSZ47ke43MDP2LUyxpUE22tY49nZHUj82L2QggGCKdb5A3",
  "key17": "58ePeHNdb5xwuDdAWd5aBTLBWEUUg7q5wyzvHacumw6sZq5ZtsLiEJPi3YRwFefzf4maB9ftHWWXQAR3RvsWGWPH",
  "key18": "2aT6Fy54JbiC72nPvxVkje7gavHT8vfQmsuo4g3kdxL27gkmDE5uGM99ftmH6qgnGCidr1cdLVecuuZRWimH8z6F",
  "key19": "2CCmaRHsXzYiKMKVJvonNDsj3Cn2HgLAMLYAcCq9NGiGEa1Y5Xj3Z9QgGBpjKNrMe2bk87rJSFMTP83xWoxyehNE",
  "key20": "5AKWMPT5XG2tAPiyMJyGigUf5sV5MogxxwacVPPJc89yJwZRfKMTV99FwnnXxeqwpNx3muRbi9U9eaZLfnL2DNgG",
  "key21": "34jCYSLiqX1GwkA9qqLfWz2wbeuE1FfUVj5MDsXBqbVGhYoY6mi5RsLjNYYdxt6Gqyg7twuZh7ZRnZxuxaZTHg7X",
  "key22": "2paR8sfGBkrLEkqnPmfcviDvmKWMucuhJ4tTRDST1F6gmEtZ6FhMztj34RMWDFw43LChbZ8qHQdX3U3gbXSGM1n9",
  "key23": "4qvGJHVAkkoAYzeAyEpyURUEFzHBkRvr9u5Bek9hXC82Tg7CoTsHiJAF9XzaH3hWa9oyMMp5fr6RdcPaTEHptMyA",
  "key24": "2pXuxnT1J2zBqcYxHhWZuZVDmRDwmgmEd6aGiFLFXFoZEz7Xs9RrVH4pFKSpUF8UDaBeK64FGbu5PNvGFXCaPR2Q",
  "key25": "2QkgygztAxboyqu6VKi85HZdvuvUytKsAUgFU5VgP2N4kyisCRWxW1ZLwNgAh2Z1NZuezjWaXMpM9byxWmnbHLdE",
  "key26": "4XWkfjmXP9HNjYNmd5t8s61hnewxo6XQhTEYf5NwnM6Bt4zipnUSyoyhmQEgNAckThS1g6wEr6c1gUrKUb4A9yVu",
  "key27": "kgLg5Crsi1Q2gb21EV6Wk2bxcHBmSMtnJp1E2SiD2kfR8CexsXNvr1DRjDD5E8C3iNeGHr32hy173oqRH6sz318",
  "key28": "RzNyjGfXyZBUfeueKcpnPpSPDqadgwwxYshr1MnEmUJP1JXaqVyP6QE4kbWtSX9RwJU8dz4sgHCcewswet7WMt6",
  "key29": "43BbqaVAMBZQHNLT4RdWbpJGkEysvNoT9xxUCL9H9rnLZ43beSy1niJk5dUkmGNfa3gbpGgY7C1iCfVRxnTiGuE5",
  "key30": "33WShuSftLoV6TwvsvE6KM7qL2iWPsQsmkScJ3fyTAVmatc5BZNiabaZ56CjbSF7wUuNzudcz2Gw6Yd65Xt21afu",
  "key31": "3cas8Uozf2fZuTc9ThY1XC2tLs4dgH8bRyB1W6euJdcVvhXNnL5a4m21zfeBDpDuZpkkqDs5wHN4yFYkiTBoFGEB",
  "key32": "4BLz9wF3LK7nQNo6XE6rXReHUxp4YMPR6Qa63s1gpEuHvLobnz7B8nyx3zUpJ7ADJMp2RVhrb9UxPKe1c1SQkK75",
  "key33": "57T2AsjSCKmQj4wku2QJcsri4zbsZM4rSeeJz12KiABwtdce3okjLqNfdBgnDm8ULgSvSs5YE3yXXcJGSqxpqMar",
  "key34": "GhjuHLSF7oMMnZVQZ1CCXFJ4oUc5aYm2yxNZ1bKv2w8qCizD2V91RTMFaLksEBXfQ2TVcS9yRBfzTAkAx3ycxxV",
  "key35": "25AwnEVynQgDRDVEJeo5FjWsoJCVUxWck48SrrgHojLWzw654G7ZEXVUESbJrHFYYM2GApKnCW1uvgf2ST3UCtwq",
  "key36": "52399mAFei1eRnrvT4A2zMhi2Y9SXMJGSWvCGgUVpovcptgftKNRZmFQwvToQNBNWgkF894gx6ETrN1pybDYMdjJ",
  "key37": "5xCAerm9H8wE5iKkWc3QDVDSvTHVWePWFsG3rv56bATY1JwJaFd27ngudFhK2HABceYZbpEiij2JPdy3wygKEmj9",
  "key38": "3AULByNMDZLt8x7EqX4Bte9W5QkVYup1hnw8xoxceXneuTkkPEm4C1hF1FSoU1FFMQdLbsDd6YCKp4joZ7gyQJ5r",
  "key39": "5pLXmxmg3hrnwDHA5htnp8pwgCLjmUKhnEtE5J9sgQtnRwYKfc3oQaKXH7iDTqb32NmcHRXgtcbV7WTbDFqa7LZM",
  "key40": "38oZmNALwcETseeRfUrGpP3k3Y1HVYAjGUTS7V77cBKEXZ1PYka3EgMQLaFiLTx5VL88pqXjrFxBaxJJtVCsknqP",
  "key41": "5C5V8bnj6PGfoEiXU2SSaRbHCFQsaC6tr2q8gpN4K7UVhh9RijYzzChPVdYdfPnzzoGw1Shyu5jv3aj31LiZokye",
  "key42": "4zArCobdVQQN1r4aJouhC18xsuNrerdKiPP6h1qgo5bfBNUmyBBHcnAiZpDkjrmhAZgyjdWnfNcsKbTduNT3auRM"
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
