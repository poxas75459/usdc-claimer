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
    "3emXEAnef6zU2SHsvHWW4wUTy2vakcg4E4ehdRSx9d32hAULmra1aG3S2eoWHkhGQNib2trkBMaU5TtNL7pSNKyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZT4AsTRGYyUFCm9vGHnQjX5G3suLBTpbK59weikqnEa8rVuBLbRhFaY2JBRZLyyMjgKiXNmfB4Eiym3bPwbWkpL",
  "key1": "3dDaDE5rspQ6PkQdezMweDz146S8NMCaH9SA1wLHu31Pa2DjvG8nhfuzez5BqdFgp7T8VQLUxSHYnMa2HM6wgmNt",
  "key2": "3NUaTP2BaAGYZqwkth2EwD3cXYLUsW7sSLReP1NYe7DEj4kcqrszVQ2UhmFFPzvtWbaDLwq8dc7AGtqjzmE8ExQU",
  "key3": "3akNrbTeRYZSNmfPqX6nnSJ9vxGKqDUygCwUdcUe8XjiPfbpJY8su6mVoXtYbHHaFz5VrSYHrpZAmVJW1NW7szhf",
  "key4": "2R4nL8fyPHhQL7U4Xzms4eP42u63oLcBh7iFFyNMEzte8ATZTW1mc5rezn7ynJhXLoSX3qoxmqBsCiKzNqLG9dQM",
  "key5": "4B9EsJpKMLfZwRG8yBrkzXRF4AiPrB1NkjsxBhRBx71H9dWUf7uGzJj2duqfJVNshStLKZXpL3ptPfnPz8N1eUNQ",
  "key6": "4jXvFNzgsq4JeZnN41ggThxvAGimR2q5quFBhoBttXiBNBpPoF8mAVg1ecFUBqRZgVZLYkcNdMYCfmdbBiHRiMjf",
  "key7": "aXwL34neG7kj38oJjb74bBs3JDqmnj1FNva3vfopiFn5QCqwx25B6NchwzDjsa5zaMVfW78RMduMv4g9cJoZfU9",
  "key8": "65XxAMwUVpeXjXP5na1AYFbL4EWs8oG1zsVfJMr6DpQhmAEx19XADyJzDWTzG1BwYiog6MxSvwUg4aWJMThRipoj",
  "key9": "rtW2iYKMRFhcmCYqj4PGr93UNTMHCPMUrTpXqEva1wdxBhbL8e3cfmxdKphsy7eYExQcVBrxu6pam3ycQ7HE5Yq",
  "key10": "5iLit1WpYK8KvKXQrxU8PHL9GZxMwQvQQ9k23C322KyoHTNAc1oMsNvc94GK269p2MambFugDwEhuTf146QS9SRd",
  "key11": "42EuYN9uAuZqvcCkfMyPqZ74znLCdU5976yjyRtmxEGtQCRDr4LcMeNqw8gnTD7TeE8mioCxYTGdFhXkLBiQ3Sut",
  "key12": "sp1CLR5KzUAHs9igEA8XBmVi2qS2gMHJzS24YtobmZCXQ6bz6PacQzJefPKNsMo1kjnrA69d57g3frESoo4ivkJ",
  "key13": "3cdPNGDnVCoGSFgjLYYEYgEWvne1X4xUSo1wpeGtRKPXH6M71gjEdR8ecaRwe7nHbVgxS6Dyq8ABN8tKSYJNxHhe",
  "key14": "62H5TGYt3zeM8U94EfUicyydQ2NaNqAkjhpJSyMi4ft6Q6ysar62dGP2Ve7Pbu7eMAyBTf9AvaZ4eizPxUmjsZtB",
  "key15": "5ytkAW8LqNSde9yv9vatbVbktFV2j6CJSSooNevwr9JB1FZx5TndvaFarT2Kas2zvHTRhj3cLqaiDCbJP8e9YDdC",
  "key16": "41X2cbVvHnJvwSTbpR4s74w7gS2672onPpxxDNkXjyCphvhUtWLDnWvhV1eNf8PPeT81BUNuUCzEbZvvqjMEADoG",
  "key17": "3WaNGXtPNp1u2MnP4N4VKwvitgzxjyPLvvRtPTzE9DT755sWCYYCZMJgJuLkH7a7njAaWUFv14HFarpjNZmQ5MuY",
  "key18": "2hfjnVmqaykN9UnJTZd3QWvAUL7RzeNEfPMVcSD4L8aNWzZDjSepD3FGzWx31RJrEre49aVLYCYK1PBabqTq2mq8",
  "key19": "53TaLsdKhtL51ZZiBbrmLKRZqWqrhYofiHqhQcdQHtVhurkTjD3VNPezNFyEuiSSRdKxoFsnigfknjDve4oi6kBp",
  "key20": "5dEkyZSaKGpUfY9dd4AEL1uEryhiCv5XT6fX585wnhH4s45JDSfX81Dnph7grj23kQC5DvoaqNq82wcLbzWXGQR2",
  "key21": "5ZGBa4tDYmhncYTtDDLUJBLsgMMLKWyUF8gmTd46ooYURda3bdXMkQB1wZw3hUPbFeG2DL8qdKjzcgyr8qEk214L",
  "key22": "2PminZeLVH6PKAvkAC9xCcErHeGFmtkQzsFN8j1G5S3d85YiSYkhrGfqHs5LgV3CjwjJmsmtP6ToFGHzJf5WVpKk",
  "key23": "e75JyJC9XsUUzNzPFyMh7EJyRbeokUELCmYTpmRsEzK7r6jAZLDLFFdr2b4VakcEkQHdJQbNSbymBXaGD7vdc3p",
  "key24": "4PCxsBATKHXZBn3Hrgrso2hzCXVRRGTQ6yfP6tkfidATdq8unTUWLf8m61n1QRcp7qeExESEepQYYLefUBZZH5Kg",
  "key25": "5SY3iDYGaXnpERn32pMJ552NXDvu4VFPs166FtTFp2hPR5qs6twTZzSE9c8T78pTNUM4eGUZTqFRPJxSyfXTpfQe",
  "key26": "5Yaj2XdQuhMcDdfd6dqrmoq9waPcVspWp28QJj9vacTjdy7nV6ZxPtKi5uiQvZCVPwNaFwSfFu4qKWjvJEQBy1yK",
  "key27": "3zsVs6CJYpkUSzHuvKbeinuGY7DfYTzF8L2aLge4d3CweYcsFcHMyiq8WDNvCfyLysacRwr2CkFSZcihEDaZyt26",
  "key28": "67gc3P4td6TqvoBCqukg1fqNXScc8tcmCN6NnYw1vgPsDfuwYzA3MAa4VXnbipFLuujw5LSrw8t9d1CZFvhF6PiT",
  "key29": "4hEfQ6MSr4wec7N1NDrFLHZ7SH3bnETY2qSh6BUKFhyGWh9i24qgyLDbDjZVmYwvqqxLwSMVxDayD1uq1wgq4Pia",
  "key30": "3Dru4X9mVP8Arp1qTxTm4F4kEGGwn6Erbe3pGhA4V1yH7CewpWgqFcmJrLttXy25MFjNVBnVdnGpqNb5YmZNYfsm",
  "key31": "twtgHjYaTmuqY88yjetPgtwXGhBFb9N7X8g2p5ffpN6rgR9S9EQSu2acLjGgKv5PDHTm3EaXWaJJkE7LEHDobF7",
  "key32": "4yy1W9qYvd7pg7ozASAa7R7FrjJueMwcFcoGrWJCsLoTroaXWGWfSaxhEbo2JEhfTAfUiwABuTivhsk5aZBCUBcG",
  "key33": "482jUkjRcfJpZ39eWgYgCEefhiYjBrXnEcq1cc959zURbduSEhZiAbJCp6W22beiuJcVF2JPFnnMjgbMQqzJHigd",
  "key34": "4a6EJsCJWS1V7gTFiU2sYv4baW9BMy7LyGtVvAyBzKbSQqekMRYuiGPZqYqUwtnQqDTEsxJXXpcZCfC1vW75eTxk",
  "key35": "C4rCCzxCBEdcaWiWP7k1AUVR2nCSnmqknthgwuVMCiifQemgu41pHAuF2CysKFHuSL6EgXt6CjsdcPbj7jqNK7r",
  "key36": "TFAbNq2RqMdyGwRV8njMvzgTmAdGGgMApY8unQHJVPmRHJvHFpLRyVMrGbJYJJBkXX9fSEGtC3SVgCdP7vjTrS4"
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
