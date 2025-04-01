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
    "2Ba2tgkW4kWR22JcyivhEW8itH2tVPR2wSucFKLQomikUtZQwU3BRnNMvtssYQun7m7VyeXjeeUGgwVaYu9QcAHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbanKozFcnHgkj6uo1wZ3is6V4f4GM314awSZN9F1xnqYnurdD8PAjuqxTBixsagwpMVGDPxGe5pz1Zu7q4EFMi",
  "key1": "euMuTFz5RQyEzf1Ji1pZzKxBwf14qrwbmKUy2KfEyrGYx3RwNc3AqD1Z5frKd5xED5iXhzrdqtyuSe8qr1GEGpF",
  "key2": "33EAU97ta1mYUgKJSHBB1PYibqc4gou38GtBQqeNJe2S9wNfzHgefFpVqdLCzHZsG891C77e822tVboMEtdteEWA",
  "key3": "55i1dAsrCQqCSk1gqFG6JVCH1bJnBoaLMT7aHwa8PsLDFirXqzLgWmVrdECuM9hJ8VyGDP7aYe5k2Qxbp3CMmsed",
  "key4": "4kRGwJsU36NSFe5nFEEhQofGD3wqWWtHPKYqM3AorZamv2Yu2LSpGxLcbKwioh3sgsF2pHVEcAazwKkHDKFo8MC5",
  "key5": "28eXfNydqrLeZDWJB1wjYs6kzidvwXzGoqSBhWhAJxeDVnctibd422AgTHygCWkzgtrkodHrTEAJaDykgPa3AcX2",
  "key6": "3MqyunnRWZJJpaGDvzCowgUUWFTzmMmyuEG6Q42ZeLVCiFW7bGsaqHY36hc33vfWE36YxemJF4g8cLXBjF8C4KVs",
  "key7": "2NkQLLZV3VnsGHCzXcJHWDQciM83n9VPHVGKiRW5dFZeWaS6TdUsmfwJ8e6nHSW6gYTbw6hKm2sj894YMeSiRXTY",
  "key8": "3iRmzcTZtoHbAATnSUphKtyWbMtJTi99DeKiThMP4AVrZa6uZbF1uTceBS7ZC6Tu4DgRko1aZ2TiHyhz3EgtpydZ",
  "key9": "4suawhBJEAm7oS8Svrd7mf7eynGjKTtD8NZJWt2Yv4k5DGNfre8ySBLoVZbqR6GewYsLDhuFzBXP5TiwtmMGVL1j",
  "key10": "wQGmJmcpb233UEsJFpASTmkCFVErTaTTMTa3sJSEG76As2BXRMWsXLHXan2HGxcAXexKvhJL92o4Vc9w8iWVtGv",
  "key11": "2kNGjhJdm4XYLYgHNpsRtwD2ikHz1qQNkQse6BuaFfVeq5VY4Br5PbgN6nJGFUA4vjRmDMHsX5K7bBK4aNR1stN",
  "key12": "5Rw4udVvSxVeueJDDu6TYpMG8VfGSf27pSkTPF3QwRJfcVpDS4WskxtPbpNpFdPN4rRmMrmtmQzuyNizyWPCZZTv",
  "key13": "5DhSBpnFs279kPxHgHzWbqvfuCaLfEicVPngrBRz2dzJ8tw5w6yR6n3rwhfm3QHM6BPnU3wK7XEFHm5pneuyt3gx",
  "key14": "S8rAxCz66HuD3q7KKJfNsx2wwv7No3CeV17z83BWyJXvsAtkcN2pPgPPUm2Ngbgohj799b2zGxHRC2jyvn8ZyDD",
  "key15": "5vraFp9HxwsSSuAezkJ7QZps8VXhzZiyYJQGzaiLTCVtNrezAo99uBDiFuDezPdNM8JzekpCicLvE6QSMbaibYpz",
  "key16": "59ejkrJtCciM8pZLtKF38Rj7jtn78KkEXcawGxKKWvEbd4qraoakFPRYRHbFNyuvSFqD3rdxEDL1FVFShGqRjH7M",
  "key17": "nmK3WvaCh3d9sJWWfUTZFjrB3YAVxKyWPZCt7KgL12ruLxxvB81YmorDkUs19GHw7Bca8zbgSfuyW1AdNmGWzP7",
  "key18": "5tKbuFP3CqPyXLjuvq6MLgxRYfAz96bPioqG3thLGv4k2ZV7uQ8pdroAktTMhf99vsgkCLuR9yGjrGXzCdvqNZbj",
  "key19": "3DkG9r7Tk7x5NWzP2hUYfsbcbm1pMbBWx88YUPU3WQ4aJHtFm2kZEgX2em5X1uwhHnadv1bvgnDDToVythyqUeDk",
  "key20": "3Wkn2ALX6Bjbrfh8xjjtfWpi81da8Nn9NWBUe4C2gnb7qUzTAUKHVkKbmXF77FVXryciAy1VC6AMretx6ei9cUTE",
  "key21": "3rjxp55YYoDgsNrP79xGPZ92MFxLEieoy5h2sYZbEpFcCNZWhKjoypR6Mxynuw5C4uAUtKpfo1Xzg5sBcBuuzPHe",
  "key22": "4XN9Qi8JtveDEy9HggrH9iQpkavKWjeabseqPDXJjuhExyG845rCLHJHYAP1pNwM4xeqoVQTsCq21gP6sDu6rMPY",
  "key23": "424nJZRzuU4bdthdyHkPemJfta99K5QzTZBdWSuVidCNvpfXidV2wbCp5qnMdHzUrkhpFrrG1hyftgXXW4h8Ummt",
  "key24": "5TNSQCrSSgyhDQ1MQTLqobC3R5ptWjMg861MVhN4zEkkCuLfP5b5MYpr13qgmr92isfmA7QGcGoDkYNydYsMG4bk",
  "key25": "2hhtgmnoL59jydHD3EDirRCWiWA3CxpdUrBegH88dyjB15TKbLR71vYBDcJth92KhP4gh21n4GguEsh3173K3Apg",
  "key26": "3wGFGaNykZHjeNMRHn4txGVKanDUrHVNbejDMGKyoVdSECnY2dnwiMen5up1xpYAousjtyeeT1w2X9ShsYgFwW4m",
  "key27": "2U1MkbMbBAv18RVR2Pc9k73LoGwjykTUnKmWHme4hJ6YrVUPatD6KLMHYUGCPLd7eywVS5c1keNp9ZA8PMVpA1st",
  "key28": "21Uq7o3u3NBBbZNUsnMrP4Ltsggdt7vV7y1RGK7qf5rD4uhwy8Ustr87zeTfEnGcoGir31wbthh3XZRRUBQhrAoQ"
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
