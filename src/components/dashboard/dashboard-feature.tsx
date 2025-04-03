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
    "4a1ZYpgWpBvwfFhioMcq6W5t39rPgSejUzisH2gwpx2exwJAjML8LEL8wLrWGmanfnKdBCtVRcGnQRhzihG1Agfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Akg13W6JycAsWbuSntMBne9YubzHqoE79AQHvxT475LyEwGCBs5wSN2a25jd6oqgUPLTNu49mRmr7b8Pm4BP7Br",
  "key1": "pJPQuAuWcu5aXtEHnWDnVmZhNRs9NHcPzGPf64oVw1A2MUra5ipCX9PifGhcsx7kaxMkWd72YwGJGkqqM2atmeS",
  "key2": "52QpLYZorxUjUHXMxJc4uDhkGCtiRH2X3o3ioB2bgr9v29M28NETaRHrNDJM9tSh9YU8r9kUs92RTRW6u5ezxUXF",
  "key3": "2AByUpMgb6zACjAkZk87R22d2qqRp4jqvsptvntUwwxWABu9fbYL5vgj8GwVJaKuD3WQ1bAmJTuHtrphaAyQmyHK",
  "key4": "4acAzjfNnLL2NXMHGaTKJPVri6Lzv2A4vkfUQzf6iYJdr47YrFs2oACWgphYhrNQu1Rxutkobx9g1sZeEKtRF7ij",
  "key5": "4konL6NMicqgsfE9JAb3UhogqPvN33XaDHnc9FJT2A5DZz9XGvhWsmUVCXeu8L1iwENaGveDAAQGFzsj2gUFk5qg",
  "key6": "4CjQR8mK1HY8UNvqVsxmbtJKQwCjSiztWj6G69F8pbDoGn8hCZJx9Bi2gWtYbJrdC1ZW669SeUFobn48nAT9EThH",
  "key7": "3SUrVs11hskpgvP3oymQnEjoedSNWKANuJZ9TUHyu8o8J4yGDAY5XKhoe7LGiHDfHVyQPM9n7o1GRBGHc2aPx8NV",
  "key8": "3Kciyh1j9UA61U73bsnpLFGg1camEkbupZm8CQxGGhkR5BMYAc9pmswRKzPMbUxadsiSWkE3Ftd3iZTYozYCsAdn",
  "key9": "Yig4ZWfh81gS8Q2XNRehnrTqQSKWvXkYg4WdyJTNcPiTUEKGpgYoAtMCWsPDfACr2GdqoJYjR1xfgy6PMXMenMR",
  "key10": "3PT7cqFMYRCsHH54qFhXcVSitUoywpgEE1kJmipxvR4oJF4coi9KZYfxhBRGND8P9whv2eujP1vnvR831ywbWdk2",
  "key11": "4dpxrifqdoq7kUhXrcSU9g8AWGp1fa8HUYxhf3P7xNHq4stDQxjLGj32pDohKmPVJUnEj2p45RvdTAu71vbjqgS7",
  "key12": "3896fpuTDDYYzeYjYeoUemgtq27EDCy6h7u6fBgn7AiQDiLMTuvg1EAuskQbgNtfbQNZg6WyjcZA2HrhXtT6sfzH",
  "key13": "2dAVnB2boZyMazhVna2veFZi65BW3LgSrL1TRwGHtqdFDajr65YHDYPAGU3f1SyxS7uCgK9sfP9ZcfXZqbg3nbtZ",
  "key14": "5j2eeCxgk66ZbrmPG2wnoUzdunvLJRpGkQ9C7yLfCbsaKzShaTsQ2wRAooDwqh8BAw3ZUqobrKdYYudVyZTCc8fi",
  "key15": "2fQ6jFgS6g2yHZuzE4bEpa6eiTSCxyPLzb4oLMCBRtkPnfDnKc5WpC4rNiunFRhGGwSHJ2hcTJUT1QKhxRnRCht6",
  "key16": "4zkRywq4vZvkeDvFEEb4XRRAUibvV7pvExWL1UNjeqPP8Et72D4Xe5JpxcujuTP3LZ4VqFFWJzWsPK7aP4SNuPE",
  "key17": "2HkHx2yb4qP3SXktwCZLkkjQ3XSPPrcvZQ2K9s3gH9kmxQ4kfYCnRr4LYwauC3A8qwZhQnzNHgKPaVRPdBRcTHFX",
  "key18": "3mVdBzseKrE16i9Nz1i8LraZrTFCpFeN9GFdAkXBX33zoWuFspGCzpJNCF9eQChJJ1cHCpq4xM9Kef1WbuQheCgc",
  "key19": "hzbS6EPhXqAdZBbc8q9772LpjoRQWPpkjYGZVGaAGK4wk75YPZrEFi6mz3Sb7Kx6zpcqFhf7r4VEUpZKWAgUkSi",
  "key20": "4yTYURn8CpEGZo1Nvricxb9pJjA5EZufhnRYim6surdo43e4tmazbpxYuuvv1nmxr5aCeKoDeXFQ2bPJqBUBkcx3",
  "key21": "3aR8TLwCR1VNz6EaocctVvTS1Vg4L9LNEoBcXYpVuWnLEKno75D1X3TupUwNYtSHoAw1Wns48SaSivPgkYkHn5wK",
  "key22": "5CkdtHWjCHCH2LhTpskk6GwpJeaDvecaVbPaVMrTKgocSEy6MiBKKTc2svH3bpWG6Tdmsf45bzRRZLrvgUnvhjrN",
  "key23": "2o4PdquNwSwJm3e5FyJsEbxYZQKuhNtRimx1cCvxqfnurtC642YaDWVgBooeeEreWipr6Cr4vRMdPnCW13isMZLZ",
  "key24": "3jYUfz6oV2GiDSuw9ETA7mkcRdS81Sw3oUWhd7jHRx4fcovA7LsyK576R2HThepj3XAgRa25LW55bAfSe2XMTtD1",
  "key25": "3f2LgUwR3UApEd3zrX9VgDvyXKutV8BfKT2T18qhhcvhebrCSCRHt5eyGV2ipzVRhkV6VRV32ixt2oSHhDRwJWkQ",
  "key26": "HySv31Zqsteyydr8XzqXzYGqGmpRu75eiyw4ZVhaz756hr7yASi1F6YhAuniDaBG3Gz2xCzmknQkJ6kgQFFfFJM",
  "key27": "3X2hiquDAfw6E4rMFTLBeYvBXzttwvsmjVjSet2AYqoDUV1hpGg7JMAtLmJCBEZ2cfAPi7XRnY8SrsEJ7xLD5Sgi",
  "key28": "37Kn8RMzhVjywb86dybfMf1nqAorh47L9VwGNPpowDJz1uoeoAVBDz29cB1CqS7pK3MbdyCZgdSzVbiNoBUFSEEH",
  "key29": "5VPy8qPJKF6yhAPaScu1Ec7AE9GPWfWvJ6mzhxfSjHComLqfsgWDmZBq6rgu5QyUD8TKExUhqCYfRvgPCPvn3ojX",
  "key30": "3vceyGVjrUo1bAkeDyzFeasXd9w3bf78CaEbrFe514DHg7Kx5CH2A9qxznUqmhGEU5hhje4wF8oXCNQd1fDwpNt3",
  "key31": "RQ7ua423LnyCcvkTejizh4Tki1rYTwn9BXHDP5GWpj5Jm8V9Nivug2VbVnDSrtzicjYcZemUv4tHYmnAVzdS1wz",
  "key32": "4TaLNoA45W53idwJ4G9PdfjvdcZQvbhXey99uwLmKzQFhe48tjH5NeP2PnjYvQRKu5eXZ5ruv7o5Q4Zh6CV844QF",
  "key33": "2tAB9ytTpC5fGwg3FhxAXGRwiW2stDjS1QNsa2AkjoTTct7Lv6BEY8cvx8qrXyQFskhqyZ5D5JWS1aYufmbJHNoa",
  "key34": "2SEG9SE7xJrv6VPp3K1zmWSd5D3HHGM4DdHHZ5c2cLsMPd6LaCLVVXSL7CVSCd7tJoMJaa7FQ6SXhhygEWmCW9YM",
  "key35": "59LKpFhFu9fLcob5X2RxX8s5tzpbc69rRQyGLCb5wssdU1pzb9mZK2CGu4KQAvRCgFE1nndt5YXGXv7sWtHN8ji2",
  "key36": "2Ziu6ZknMdoGBPucW4AeDyUjbyHKx71QFXd6sGiRHpiauwpzd6KHNbt8DRyW2wAgUqGfHajTzTf7dAUXCUBbLPYe",
  "key37": "3reoe9XQRnjw3ZMQq4n3cMksiaQpHa86W1kZNjaMBmHLmpyMXVFgbLbYeJEY31Hr5cbn1mYcVrKVcUkQbUh9YiUJ",
  "key38": "qESKyj2pQ9xa9XovYqtVGEPtyDc8tf2hS25nwGqSo8REwpR9BARbHu8WTnZuVXk9Zrh99J8GRNaRxW26nyDx9Ti"
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
