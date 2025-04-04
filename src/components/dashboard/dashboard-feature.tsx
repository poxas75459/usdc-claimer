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
    "57cGjxu2v1LgXrMkL1dLoKntGSR4dRBWU2UAgaNBj4baA6CUeNpG7Tv2USps7tNwSCHSaE1Krvg1JJveodJmxNPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVoaFaYGc8apNjkbCpLBKGtMNotZBwGy7WYkm1i6pTmMzzx9TSdvQ2WXutisizivZhGGCcPeegSkqq45zVZWcSM",
  "key1": "4jTtnL4ALanXE9z57rZWLkxq35fQRRYsAvBawFCLNKkEUru5nByhBy6gNLq4EqHXCBwWM2eBN4v1zWgFT9pCL3Hf",
  "key2": "3CZ5zxb4fwZqh4KWcSC6UUviWggPvc3Qh22wrTLAc3xAFuCiGmvBjokgrBV4LRNYR3Wgasj5ugZCuNYRrbnkVC2B",
  "key3": "22HqQZqYJ3fWzd7oMnywFLqdEbiPXGdMB1PasP7p1m2eySfGSBDykXSbkW6CWGp7kfdvTJgCM2zLAy2n7jxPkSjt",
  "key4": "5EaXm9QyrhuHSw91m6G7BcFknDd27mBsye635x64EyjW1FweqNSBAmBd4buLATQSwXvpHSn74oXvV1eUXWGzSxAr",
  "key5": "mQ22e8xsHzx18F45EkFdk69iNPbbQvjHCodJGf5uHfeiVJQhLgoXCEPEgpcgZ19kBzxoRACFobiXoJmqgHMTFJV",
  "key6": "3LvAEnA7fJtusti6tiNeE6i5VxxEbLyEGkZo1KyRWBc6MCFhx6Yc3tz9YFCU6Vsaed5sSfuE8PFQd6Xp5YnzLELC",
  "key7": "3cEggYNLKZXSzEHQsiPKUSSHQi4r5e67YpbhVCWC2YERVv2XmNkQQ7gTHcwm74cCjJ5k6AdKMMrTYmXCyGhYJA9j",
  "key8": "23m9nvkKXXWzzUj3ZfsXZdcZ5CEVTbTQACuYyGCE1NdA75NGYeQrtNg4qT5J1jtm57cJ37P3DTkiKD7PbsqyeidQ",
  "key9": "KBtasGDPHcHLBJF99124r5AxS9Au7KJYEVpdvRizbDvchbvf2nfrBMAvr5AnX5ju6S3TRQNtRixX8vfE3eztcPW",
  "key10": "3ifknVYUrjNnNsReyoceu8KyzGYeGLwfsesuhERhiVwUqBsADehddUhhFiQSxsrczzirrAAvExWRYqrZDVFpBvjC",
  "key11": "3qxcb5XT9uqWcj24GW1g85yuJ88U8nvs7Ly4zAAJFsJoM1JAXPpNoguqw7UE3KiT6ZtY7zZb78P458B5e4gkf1xU",
  "key12": "3G7JeBSk4mWbvsZXwPMYhwpjw4sTrKgf5ec4U8Dus2szR6sRq2MSDAq7ry96MEGpTGw8qMAShgL6LBeYShtzC3TJ",
  "key13": "5uEQkrpdwFRNAmfdS2F2x3nvgQYi7SvPc2Vz3iiKkHJ7yaxTsQ2M7hirbUR5zXYbpfK23NMwkbP2pN2NiQPKYfz9",
  "key14": "1uodR9amFEv8nQNLrKWVSkJzEbwPFExcGWk4hStCqXoWDesqmefuFPAuBXgzy4BVKArdUh8WrTtJgfkeJgeQXRH",
  "key15": "5TaxCKz1KG7enxTXhRidDm9qaTmXTNc1Bb2NZcSWDUpcHGXDu5TC25Lap8XjJYpLSK3JtfzggZhMJmaRYWkgi9Db",
  "key16": "3wKLyQ72g9JHbxMttyZDfrqGRVkQ3GydTN1fqHZd9ZRSzRj2VamgVfiJtt9X66Q6xnKoqyw6kvZotezRLsb22yjo",
  "key17": "4eVddjM1FY98brdKan3L7w5E3E6rHKRSujrGEPftSdPheP3q7Ya5JudWdDXUhuLsr87j5qG4gukk8VHsoXXch9Cd",
  "key18": "UozTn1p4AECt8K5s37YquuVekt4jmrDv34QEpjTkFTZacopAxRu6CHmtam1PvUkDabrCaZTyn7Mrq8HHPRiGLMD",
  "key19": "44j4t4n3e6wvcLQfzyA4Nf74N4uY6pS9q6crd9njNE4MLnpSgi3oVanaBaEZSj5R95s9n5iDp72df62DYp8kYJhp",
  "key20": "5BBir4nBPAmB83EE1x7yWWkewzM4AYpVyY3oyF4kNYWy4mrL1jgsM522mVCvD1hYKsAH5XrUfg63rGsf2U8shtdo",
  "key21": "3MrAjo8TyAaqyNVZ5zxKMgWjZA2yfiHy22cfGCiNjhccwf2ZmysEvDPtoYxPRF74m36kgARURDYn4TGGiH9WdgJc",
  "key22": "231qVcH2jPCLweEQ7W9vHFJcdXj9UwsSYZSuf6XKL6yPy3Ne9itT3MRnmNUijuRT1rxVot5ff5giUBvzShaND26s",
  "key23": "ek1ykWci1rAxAsYfZf7btvsdXgpu4u6gLta4iNhyZ7ZEXWQ1wgm9CQvQZr9nM1NZDFCDA6vWQwRsHXHfnMwiRsu",
  "key24": "kyCJrhY2ugb61QkSBymcHBEk8G5CgY7LH7xZD4aRCZB45PbknQDq3P953isuDmV4fqqf2CqgnmSTZiXo9pWHzbD",
  "key25": "5B8eeC3fVA4pUNQc5Sts8kMFS4ue4hG55gfs59WhZveSnrjPvLJ5RMTjwCt7rWXrjUMMGNMCU1PnEVH7fWfwRGYu"
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
