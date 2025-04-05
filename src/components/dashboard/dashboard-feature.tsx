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
    "63BFqLPU9Ad8YsyFGAXCT7xCHw3TviXpgeqLi6oAZq3fpzrouWPeStFzEreMjrTJ3RQnXKAn6eteDAz8PtdbckDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBLav8cTaGYQcS2piA46z5zF8rwitfnWVAckNgSEphu4s7wqXsk7dgDjPbkExUXmuafbTeMZq5cHexJjz4Ltwf3",
  "key1": "55uf26TmsuNSVMcondH7kbARQrdXf5pbqSDFc9Fh4mKdYpBuzekTW8vPzv8H57azQWKEWZScnrGVmKaHZyGHp1rs",
  "key2": "5V4zApq2XuewVx6ZXAF3d54uxvYFYi6Z4Dg5vtgAjV8LD5ovBZyRHLEiWmGv1zPUArrsTMP5KVEk2BzDWMhwWQ5E",
  "key3": "41RNHiDA4Rsf5Ud4jmxBHfxKZhJQL2yZkbUwWtzTyvUs5qMZK4Ga1oexvgVfmA1g9QieaKQBf3TEk4wpHow5PbJD",
  "key4": "2JCziYq9x8jmvN2cDUrEXQ4hgmq2b5hvQwLdG4atYMpVotzgQK34CqHXK124Ao2J1UWFgL1d5gcaZHW1u41t1UwL",
  "key5": "382NayD3FtUJeJ2EKpefezNcZt7Qx92dHmjembcrwrMUxaYNwA7i3py2nZVTHFk3w5UydpRsRbaq7QCWBYw4AHci",
  "key6": "4dbAyCFNjwDTbYoyeiCMHF8HhEWwYAzsCu1Bcyz8Hj8sfYKUcyt9bpR1is2kqPU2AuQyBtQSuARxK7NF5r9vHChA",
  "key7": "3X5WDmcczGsmZVPBH43auMHAn33hUdMHFg2S1m7f1oDkCThcv7duo6p7m3j6ZEpHQvU7xfQdNcNi5dSEjTKGC6o",
  "key8": "3pEZx7LAn44oASHGKFW75sFhUSqc9m42c2G876sTKbVTT1LQiUwDJ5u3B9XEHzw8ZZEHJH4sv5BBCA2MAxNYV1Hb",
  "key9": "BkysEN14wmBLUetxaRx7HoRi6b6Bec7paDLacwuvhg9zP79T7kuwAQaZLWpVyqUV6Ytjb8zeipAA6vooc7Ea9Yb",
  "key10": "2GZX4Gnqw1SRC6XoYeeqbjh3tYXA9iMPHf5Rhmzn1f1jNekESMWf2Ux9hcMgixvLRe66f7HXKfRPMFwxb45xWwiy",
  "key11": "2FXApPTmjveM7XYz9xFUq386vtxs4cSRZmUYtrqdRyqSG93TEcGmsUCExFEu7a84YnL9f1EMebiUYkR7KzUWpMJE",
  "key12": "5zWMxXYwysggz7Y5UunajMkkHphqSrTFMg1gL32giGTK5BC3XGa9kEqRgBV6FGqtggCQjHinHd35LgXLhcUqdv3f",
  "key13": "2MiGXwyGMZT3MYE4JafrDAuUL4z8STEcH2xTwbfcU6iuXPfxyxyfHLsQRwkJvwgGBhxc37gRQEQ6XLPEowFnrsYY",
  "key14": "4TojXjSh2yy1Zu9cWt9xx5p4SpThcajcnjoWuYMQRZtVFpL6NbURxM9shyes1MP4fSWDHPCShvTp54q59BByHn6G",
  "key15": "5xhZxgiLn6jpMWXBR9stGu674X9gLPX4zezXKD9M8Ds1Wi5nvDnKDSyHF2uugojdjSQSzE51jEW55v8Nf3a5HJGU",
  "key16": "bAftVgCH6Ptxm5LzBLqeeGUbRT11BCNmCiN8FFBuQ6Qm1SsoAEJZxWKgnTs1HhdTnCdjULeQEtmu1Xn1b44SZ8j",
  "key17": "4wwAuHJSukARmiP72eX7QUVUqmSfKrvEffKcDVeBiiS58xMQZdd4QyaQEHswvtASXaXHovEJUbdDCNL3aLxL5RRr",
  "key18": "4Gr3xZUqALjyRYKWkYH753KWSUXyoCUheQTBb1WcpS8Pm8eyWB1kVLaR1dwn1H1fD7QzGf6jAqXsKsZtBXD3as1h",
  "key19": "3QfporDhtZBvPP5vnw6w5kFR95dRLuFTnktLom7kJc7ifE85VGM47LiuENdu5sEpEas3CjRsPKc9uYiL4jhVmc1L",
  "key20": "qRrGyTS69am5Y4v7zDhaJcBu6XWvCRBtjyb9Y7tWXVW782BJBopUBQNYJSjwvZLipoZwMKzZU7T5KJ32Yj6RDdh",
  "key21": "4SuhMTbUk9t2uazvBgRS9fcTHvNhZrrBnR7PycBmPEcLVjZy8nfbnvrZfro6SAFdStQ2fqLvXkj2Zm6VdaDpzBCL",
  "key22": "ENR1rER3ZxaXGSZ1B4m8SpLLkuSVcEoxsCXEqYxjCh13nvZkryEUsjgmoja6d22neXcSMSZ4EFDvJNaKFadHh5n",
  "key23": "rBgKENg5BuZhZAHUh9QLJ5hH3g8hYjnceZ5DXtG3cybDrk8veru8ztW7nuHwNbTcHAPGXT5RKe8PtseryVTjoYz",
  "key24": "3EKK93QnopcPd3qbE8mCKiuY9NVQuQj7mh5Qavbsnz7JjPz1c9Z5n6Z2Bjq8X1nfWYipugmquQ74nR25nR1zuKSd",
  "key25": "TMpvkG7GSGQHPz1uUVAov2nDiHQk7tRBjZu825y4ZqpHoD5U394HUziHMN8AVFHyZk5SX4oYVqRoQjoe4zPCApu",
  "key26": "2n31yrQmPLYHssdyhBXZCkB7CiJsWrCm5VserJSv9PNZ8zFdWW5LVyjbbRPFnZvqPYuD6iQh1Pw38RNw7kddwjkx",
  "key27": "2pnu1Q55qHPrw7FDJT7j5mvUjWGyGTDqo7RX34jVcAwsT2L2D2ojrvxNer75v4pKXqykujhu2pSaEFfhiqc4CLt4",
  "key28": "4XYJm5mrh2fL34MYCx72KXo3cqcBUsQtxWfw7ULfDFTvu6hXoejVtDGnNWFcCeJy8EUUqmneYeHF7vNxSHRsiqJm"
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
