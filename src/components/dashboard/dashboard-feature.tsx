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
    "635bFv2vqnirvACn8i4kLkEkPvoagLdWqD9UL8YtzEjjJMnbdThNqf2DX2ZMBKKeDkskSWefqzpse1cMFYSB3WRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEpmyuvvBiTLnaGhT7YuyRC9A3D1m6vPLmeYdhzZAy4g5zKXBVPg7LP9vkbamderWjDjTVP3tMECVyQz4uYeF1D",
  "key1": "56Nn8ejVNzRdovJ7w7BvB5REx4eMciij5UXKR997A9KmHN8ZkMf74hfYwD2agbxvkBf5gdFkj5Js223VyzGaDN5Z",
  "key2": "3uRuam7vZXerP8REYiN8biAj5ccyFTG68MTDTdpbnzvsQPdycowP8vGjiVS4CTWC3C9F3GvmNYzqfi9ZzrJSquep",
  "key3": "5CzKZpD1Fp81KUJUHUsq4AenjnNKpV7hWa217JAEQEH2K9nqXSJ2PtxEGUKdcUyuSs8XizgXqEciQWgUYrRcmPHm",
  "key4": "2emgfMfw98hw3AWsa5f8582VCSNXa28CduodGu1N9kW7At4gGB8A5kJgrF4SyR6mt65AJkgfBiQttH7YiFrdn3Qx",
  "key5": "56guDpWaTfRvvLxuQmD4mEUomqCYuvuZvfLhMCrQtJiWMN918JAjuD2YqZpxLQXpVxvccdTTV6mqFguZSdDF4dFq",
  "key6": "2FyRpQcXuuwzruB9AEPZyDuHwCv9yKDRXLhKawPockKzHNs1r2BwzfUpEh3cXAZp9rdVJJ3bckEgrayn52Bh4zDf",
  "key7": "5MvRVWLW6rTDCHiYR7u3ENNohiXBErEA8Lv1kUktrnrTBawudCJU7aNqUvxxYxGDqWwYCcMBxu71WaF5AYgMB8dk",
  "key8": "2CGKThPrCTA9rbdTb4UygFrhJH8rHo9SMJSY2tdmK9NioyMqYgYX562vYEUF2MP8rbvJogHh9d1ZENVgm9vWvx1b",
  "key9": "5hJ6yr4b7FjDn4UySkuUSD9xAMKuQpsLprzkiUswFisRJwXxgoCRsopH1zkFAX7o8Y2BRhp87LAkkC6Lej4iTDZn",
  "key10": "2Cnt836719L2iSzSZhNWvWrWaefPx6iSLotAGaQvwE7pj745a5LetyoqNDzt911U1YUQHaGDsoeJHF7nUpPP56nJ",
  "key11": "3ev7frgcdQStFmq8ZM9AndcMvCgR6yhGb3guNFYxcg47ZwsGKXZ3tiyx12CvbBsSdmnVSqcggwaCNRhysfDRyomz",
  "key12": "nRpnUDeb3EAEe5ZbEzN2MGk9XsTMi8abHu2P9weW9JXsVfaTdpwCf4BE9rwmxDweysoR8L4tsUahfKdcQPzJB2o",
  "key13": "MLsufcbc66JrdcihA4W3yV4AeP7V6oJ5yVuC6Z4rx3umD8dfDqoA6ojxGD6vropLjocQRCayJEHaTZ71DAdyyAk",
  "key14": "5be4snH5pUCBam6FkQv2eWExg3bkeTHRkNcczEm1c7U6u1WpJzyYYeT6MRAm5z3tnAxhgkWtAUCMqZMnBTjuPen7",
  "key15": "4phaCM4pSCz4oW3pumngMPq1Lu4Rpw1LBYNanrB1qpCCNBoZgNM4soBrcqB3uf8bzLUaP2x4i3nRpQxQDNgJZx8i",
  "key16": "3HgQzZoNN7fD3ZPFJnKU8H7ttW9vwBMwSiCYd9NbrLnYjQxb8ppDZY319WvJ3pFtyX4VDNjJRK82Ym7KsSDF2NWh",
  "key17": "5yDDZeBo9r8EnksB69zXSiaDk5f7FzkvS5G8yRV7sZKfK9o3DG1CDGto6SmMCMuxgVciKqEeqbCghCBLxfASvzWA",
  "key18": "24Lmm1E3tKVMZYkVKLZ36cjXhvV7w9goYavsHGEv4XNVQ21SMcXxUPjCcZexX9YcCDY3u6S31hEh9YH3QRe1smiC",
  "key19": "22wF2aNUequeNHsv8hfZwED7r6f9ZhisHUSqsiBpDPR9SyRqhGChao2xgoruGYM9HtNoFVAaQgweuhvKZwTMWULa",
  "key20": "4iS1U5LXb3fzyfVJNyk69xE9eSYbSXKe3vxVVS851W9gf2ddYFVGZRbKdyNMZQn8zRYRsRRFdJZHnBwPDEK3nynJ",
  "key21": "2BAFWWNn8HrZGg5VUjwbHwG7qAhpM3zBSDZT5XwwHmhNGKo7XxBMRkGzKLuxqqkbkQyRAh3bsoLjDU7nb5fVWQ77",
  "key22": "4odsJMWTVgGZavBpvtJ86D8mWAYcW1ozjzsM2oBz5M5t7ptAA84C5RZMfKTUpof5k7h5VHuQoEgGxrcY14541zYM",
  "key23": "jhApqeLgUsWkjVGyqFs6u97baLHLZ6r7oe59NrYUtT1hF3oZCLj7pTjSFj43jDWFVgh1a4Qn1DAaELfRLf3ne7a",
  "key24": "48xmXFXegLvPRbKeNa7mNESNDuuxd5nFc3utCaexXeGFh2kHeWGaqVyds4apvaFzMgP4jEVovCtBx3ZDTA91CC4e",
  "key25": "4atGgXQutKXTSQMiLNFZHHAzTSSJfxWvDPNqrGoSVRzy6xosN9e1ihmZKELZSdLWFv1vkCPEw5cmF9S7ZK2G3syF",
  "key26": "2MR5UBK2Vv88vvUxBLZRumssXEp4LVyxABxve77ok2NNZuW6MpRr5H7oKt8hDMDPa6Mp8xzfREMQwGTJx2GaxbMz",
  "key27": "5XdGZNoiLg28JjEsat1LHkbvtUhztekwa3nfbwuKd3RU4pbKEKvwC93mUmqS1VedosNTvaLdTfjj1X3jMqaZWfWG",
  "key28": "EPEeXnBdMX9xzj37XwHYNAvoCnHGcqZYvrZQb9hMekQsVfBXSB58VSEHfuYZV1ZDmK3Qy4fuAjyz5vxi8MnhjNd",
  "key29": "5nijypg8Gzc8zzRubaRaAQjxA489P4FvwUmjzrrrYkpa22GmFwqY59ocjZ8sqydhgMRDU3oQFUWPpGJpbtWKFrja",
  "key30": "PvaqovNWUwnTAVpVLAB4BMCvnDp6iBdDFzmWnn5QXzdg4iM5ACkriaxa5QjWDG9F95Zw8FQzcCccxZfksMuMjFY",
  "key31": "CTjC5v56wgqWDpEi8tgzZA1impDNLEbx4Eufg59dpGjTPHcSR8oybHpmkJ7W6tvNaLUnDY2Kp6ELR9BWF8Vpb5u",
  "key32": "5jw7vqhwCAWVEUfCusCmowk52GYBSw2rV3uD9awd62yc1AyBaZGK6seDPpjuUvknKYePNh6RncXcVVf2GHQ5xBzf",
  "key33": "5qeBq9tyBkxo28mAkDTm4zQ9WiRxvMvtpAvtw7caiEYPWq5kxi96pKKTitsc4wkQ6xmnetaW9CjDE8yVfqCn8J1y",
  "key34": "Thqq77gB1hm3d49NpGwLd6pED3wwVdoQJysomjVDQCcBAycBEtXdYsXiXyNFPfJYQvCtPU9DheFUYr3sz3Uf1NV",
  "key35": "5Lbi2yVLYxBbSpemm3k7h6yLrvFanvLcvQAUicFyBNmtAp8zLHBSFWY24fd2GFtzhytp9RR71BY3jeFJirwX3EfG",
  "key36": "62to9gCKAxHxaLTpQfaeir4skvyjS8R6daZQ9Fwar56ffyzBFZthFxPEz2maziKWxcGkH7ZBRYJsTgxn2DhPnvsS",
  "key37": "2STgL27NGxzY89aNuCj3s1QYHjs2EaUJQCPw1mNX11JCYBKXnBtbeDhSf1vj4goFjzEjgFbovB2mZMCQxqisDidJ",
  "key38": "4FJ1CmqKDCjReg4jt9oSJyf52Y4Ju7wHQLNCvmUCcqhQDdKTuaF8wTy2ZzkWY3Hb4EaEKXAkTaoTuVCwrsn6Bi1v"
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
