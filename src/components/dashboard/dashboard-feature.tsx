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
    "4Uy3oLzrVQ5J59PnegzzZBcjFLxhnMRrPKyTmBvpwCQ2QWkWKNMNTnvkTgc4NAntiMTqtqz2BhFDB6YZkZoK2Gjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33moNUwamnEFLCfxdCxWNHVoCcGgmZfUjpbGPPBLx6VgENDbKPkpQgJJdvPJHAjEL3piDN5E8HaKuehSB6CjCpCV",
  "key1": "xXom2Q3ZRP8gHPBPMcmJsug5GFDhVeB75hpA5Jq9Mysd9XBZhFvMnH3gnB3fE26wu4CxDiBZvDfuWwPgcRhv82d",
  "key2": "2QKVZG9ZW3Qf9rFD5FkoopzAQcLUJRZx1Ac13fhSKSrLs6RuEgVEMtBvthNcYXqRGHXvrNCb2XfGutmBKDbjqs9X",
  "key3": "4aRczFxVSy5zkVBcYgzx6biNUrL1jsR81ajZTnUC5uuzi5zHNRFMLELDjvuU4TmjVWCmoVAovvN8TD8Jmu6SRgg4",
  "key4": "A4xK6chvXMDoETYab9FLV1ai4yMP9Vs8HzthawBxuuGC9cie93S6Bz35T4VJ55Ch8Vh4ADaiPndu8NTGUFjzkMH",
  "key5": "27myqxVXSPjV8NrkBYwoWvnk79X8r9NLCpBYVEHVGChXwm9yaCWCF3ismTak5KVGgyYPVZgerCLuUtHWGoD5BdHF",
  "key6": "4siATfFoezHiCrzUspQCHdaWmGwTT6FRDE9qwfZCUnngnPBP3R4K1vgSqdnkybMBuQDDxgskfHiwcfUSp1znrvYb",
  "key7": "4d73xy2NecQWzuU9H2BuYn8FEVjEBPkwvrDvcseA37b8ndjCy1p4By6hFFNN2vcmScK8o8UopGtg33fTEA2LHonz",
  "key8": "LrogGXViUbeVz6Egywi2zB7aUs4ywuzW2NUT1Q9c8XYjpbVi8zNe28zd5GjbGXSMsdcXfDvhm6ef1RCyBbwyoDp",
  "key9": "4VMQ1caukvfWaXCbHwgsvk352Txjvfmfs7fTXgGBpZ9FRb69bpMaAh2BYrkN8oJVLb25DUoGZBRrxX4YXtEzxvSg",
  "key10": "2gZudjyiHL3UFtgd4CXtdkPZ1FpuR3bTiCZsPnrw927RcBwZ86T6u8DErSo5piNqRGir6t3oQQrGcm3sFsNQD3oj",
  "key11": "3TRc8WceQhnuNn5uojQaws1AnN6d4XzyM5TWfxaeAH6ZkmiPrQ1Aj1EESMnmmpAF6dW7r1kZixaSfy5cdy9bF49V",
  "key12": "3ubZH6QvVbijEgWe4t9dUJBCaNirgip6yjNc325jMgXf9rzg2LDguAgqSrw4jzAAWEW8BJooKfGiUMCCcG5qev2h",
  "key13": "2MyuSKDGgiRFnXLTLHPuRGyDytaYydKtK6wt1H8Es2CqgMQ7CwfHVsVsA7AdAcCotyBDJtvMAZvW7woiN2tWKY47",
  "key14": "UoZT3WmzH1y9jfQ4KvJ7nAQtbcEbrVseG4SpkzbkPaNjSfqRTmSGuA64TTZ8CHqyehSERFmxJH4E54QFczeaK7P",
  "key15": "4FUNak3vDEyDbMGNkoms9TY792VsUSRtYw1ZiyajEKHZHbrPDaRBbmQEQrct4bB1ox2iYrs8oCuSvWpNBhmkua8u",
  "key16": "N2zRgEtiUTdTUDRMJNZMLw5GgwRJKXhWFXckKMuziogDWZh3eTbiGQ6wjs5bAtcpSBmLLqLNcCJkF5JTWcxVmw1",
  "key17": "4jSRQYQbbYDFzQnCD5D6nK2BVZ8kqyZDtLzitShwJ1WWvLqu93MGHEYdyTaHdn6xP4BbJq2uF5rf1AhR6Q8SWcKe",
  "key18": "2jobeYV7JKhQAZkuZGaDfq4oifGB8mvAxoGynpw4XPP3yem2jJJWeJ1JCXMaQYJjwBbzt35rfxQCCuxRec8JPpLv",
  "key19": "3Ea12HGTYo9EWGZYkANjnCfuzFESeyZXLRueZ3vWHyHr3kz1yZ1FxqNfz4X9EGby63GamNoNDMekzggah92x7zG7",
  "key20": "3jS133ddHS2RCEstmBb8Zvui2h5iwW33KYAkffu6GXoZLHXevGGAsy2gP1ZpGjeTSrp957dLFHsnXz5PRBYWbdPY",
  "key21": "5GVKcQVErEnpptAZP3t6w6CEi57XTo3mD5Edeu2vMotLQpD5X6FzaakQDtvDQoDFxE9Xbq2z2gJuAtE8hgcJweve",
  "key22": "5LsPNp9uHc2Sx9b1tMUMZNFf7BswpmEy6ETd9HU6crBJGurfEFWYNmqzx9xPgytuJbuSifcsaWzjkes58b6oMdRn",
  "key23": "3ziCNf1yNwfJ3kq83NoEbUJiQVyiMtBfeTemd5nteZKJRoStiztrsJv3kXytsLKH9tgHEwxQEU8mcy5ZdnwftGJ",
  "key24": "Nnjkes2HcJ9PtCyxvdLeWYm5m9kaPtoaJsWGXcTMVSqTif2eSzeHae4BjwVHQqaTUxvxK2DZQLaHMwpArZbfvXi",
  "key25": "4QHvkhvGHohQNhKRZcSekHUngMvV5nEURQkM72WPexVSvc8gJwodrKQA9TFuJW9Cj3BpGBNEWtG5s4MnjZSMt9vN",
  "key26": "56qddukWzTS4RnyTq2s4LmMGAZsCLkLcekgEmU8HghfGYb1HiZMc6b9HD4eVgSCK3LDZd5RToUK17CY7b3iqcw4k",
  "key27": "29dj1rxdKWdyiLkTHRQY3L2aT6QRaLodqLJnV5ZHZXwHSzF5Dsx1zeSZpm1A59cPSMMF9uQKo4CwV8dKcBLNqtYq",
  "key28": "ezCqGonqumus1oqSBoJ9C9DKfKPAYgFT1ptL9Y53uwby63UH38EqqcTeZQ4svFGXpJkbhRss7nDtqxn5GiTPzTc",
  "key29": "3iiN5mhtEVgj8qQMFCTxRWBnVy3kjBf37n4c6MPCzEhBovcAkzjiuakC7xGZSdtqRApHnf99To1TmLxciLGwzCWL",
  "key30": "9TGFB22ZYVpXP5YnU68srgsEokhbZyEoPnxV9r2vQZsnnrbWRtAoHLJrnq8TrBzAEksKoEKE7PkurxAmnTxBJb7",
  "key31": "whAkfGeTKqyaByytEYdka84PvDM7h6PXfWLAaMfzrgy3bhizqRvvJZNiUsQEKpkBkQbdZkhS4is5kcCuERRW5EN",
  "key32": "3TuGyA4zuRfgooVpZhLFe1s3XZvwarVGt7cfk5jzBEoHs15P2xzqWmbn2v7F9ye1zKij12kUj2xeC17zuwvwy6DJ",
  "key33": "iwWArUqcbK4oBEvNjTHrYaZq5fKJhqTouA5U3bDPHLUUFR5R46spW46VzLPja7478roKFNc4vJe3qmd2rkjN3gW",
  "key34": "DVaXpMXmkcaDERnmvgnt4avA7CbFeUmZLaVSP3K9jCVdPi511HQXGWRkB27ikx5USUESjLyqcMxH8taebi15kDo"
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
