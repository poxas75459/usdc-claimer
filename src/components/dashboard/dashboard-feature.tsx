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
    "5gAHPtTspHjwXyP1WcF6r7CjpEF7szLJtGwnPCvafWm8VGRP75cTnVpPqdg5VMt19CgD1zY5BMaDQeqjXdzwzNAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u8urwAJS2wwZAYEZSq7UkufDfcYroUt1Hzr6Pf7sb2eaBFQCwKof4CP19Nr5R5aXA3eQixx1ChuCC1tq94K8G4f",
  "key1": "4KRGmSHNWEKmVaThXf17w37kpyDgFhD78jfKE3tp4y5RGMSBtS3ZvgXFLRuTcpttKB8UBiAwFNvLHe7E1EoytPMy",
  "key2": "2TJ8tFTLVuyT2qLvSzrruLm2n97k74caPRcXCajADpxwgvFtGvu8WCft19ZpSiDoAtzkQuERW9Mn8mKPr5tWzicz",
  "key3": "2ykDmJTMruCtPxQKoWP1WAfN1NkQ6tZSqZLDAxaRHKD2LmpGGTWhXB4QEWxuimecWn1DgSssn8H8PrrHNSqEB5ZJ",
  "key4": "DD1E48bRTtMuLtWxvPxMXiKHJoNK8RUFQNhVqUd5TRkCEdbmDEZ62eYVvsx8cdSxSdCr97Sw7yMB9zVMVbX4Scy",
  "key5": "2qUBW2UZbFZ5DrLRnJtpq4ur5neBLo8Noc1rqFnW42T7LEnx3VCXfGWkxom3BioUM4HxmJ6shqNEHxgNvJdJXpUZ",
  "key6": "3a9tGfojAxnqawtwRxHF6dNdsKqidCWWGRfZAhh3YW6EueK7xugYCiTkXzoJgrxf8vGnsYfK8aZr6mQHetxbwUBS",
  "key7": "5EgBB2veVB7B7K3mBvxHTwnddS18wWQmYAkf2Fk2Ju3zRRV7kgHokptSYPtZX4gS9C8YdZGHYgBK6s7KEvrcdbWt",
  "key8": "3cSKEuUii5PJ4WcUPE6pAYXEJ2aTM5FWWfxXZdgE3mVuZKg3V6kAEyVFJ9r7L9yS7JWBj7nA3Vgpicf26AgyKbZq",
  "key9": "3sDfwnNJLaK8MQyf2DzjoawpnHS4d8vTByysViYCnBUx3yxRkns6xNPcW78QWrAEGhpPoaVJe3E7x5Aq8qVKwBBr",
  "key10": "4mgFyfEVSTonfncJu3cpAZZ2jtpGLgEZaF4QXj2mLmofTnxzvf2SMCKBvHuXncLrzjMEpHBBASr6pDphUaPPxGt9",
  "key11": "2GCQEC7HJHJS8prcLo8fN7f4JFcymw7R57wpzTiUCgJS9AGh1UzakoGzefVNjP7eTYQA5zeMz8dXm5a4L5R4iZ7M",
  "key12": "4PpJ22SE9VMK99KrfwkgVibo29QKg1ZPYhUVPRqGLjKyb7g6v6cCvrRktmGtisCCgCStwmAwjDJeaTa5wF8Lobji",
  "key13": "5dE71VRn1fGZ5HY4YnCPcW2BC9bzUPaPkQc2c4BXLqLqPX8jpJDsNiMAGKVZxeiwJ26JNmn1JocSEyeAdcWj3kqX",
  "key14": "5XhvKwahij613Syvr1rVGQfhH5LqFyE5f6h2vXHh1gp2fZ71HXC5gzZzmYagNX61dTESzVxfvqpYTVy4uPnTPK2W",
  "key15": "2jWfWmt1v8jp8RK4YWyYnoi7gx5gVH2GPRjAMUEnRczWExmTAB7YswpVzie2QSXLiAtjziedPszijygSxJEpKQFq",
  "key16": "2X6LTqe2Wo4kDKieJmQTDBdot1NEVQ7YyyG1BE6qYh28NEwozRMQhpC8R2cvvn1zCTjMdSQcLFLs2NexcTD6UNcd",
  "key17": "32tkbrg6F4qtRmcucfFB1BuUkrzTpkGX1TsV4m6Sn6RYxVYCJSwTTTVRn99cW7mEK29mQQjSkmKFEyH9gLzafgz4",
  "key18": "5ZRe8US6VBnX4YrwQ75YC5TEttrDhtgCLMhjBcZMF9E7VnFPA8c66XpnZhz2yRFRoqmZKCkKCdKBwtGRY77jBMWo",
  "key19": "365C4AkgCd9eDt7uDToF73zXUYjTM4WpS7SAjAFz8g7QM7o2zrTq7F4JC2gTEVBMARz2rLdZ5Hd36Yb6JgfeZLpJ",
  "key20": "5yuia4WbwAc2W22mv1faBq9TSWq1Dq8HKUzLkYPj8YzVxwmc7Lcz77TTAhtpQT6qsLvWuwxRLJjSQzvHuFaB9NvT",
  "key21": "sF2uT4gniNNs4cFF1eX7Tsnop2RzBdmxnPxqrQ8QCDKwJPEWyULZ4vrSd6NQSTqkn8TRYKLvSAqD5ziZaJYi288",
  "key22": "pbcXmTcZE2fQt7HvZL6HZeSgmGJLW5yZhpX6EoVaDg4sGBu9ap4CGyHQ8diaTtrzNoyG9sNkxzFRDzoEDmwW7j4",
  "key23": "2RsKrKq9xEtB36oMMvuBa1YsQ59XR769iSKVri8pzLsMCAfgYwF3uMGcC2dsKpDZW55W487uC8WLmHGHayrYoBqJ",
  "key24": "KTvjjiUFLzhohPFyJAeTuUqhwUqNQEC6Q6CZduFpQ3mA5PTAhW7FmRsRzVdDVUW8MiX5HRvMciqRhRwrDwEgoBR",
  "key25": "2HpiUZ1RugKZwNtYmNK9KoceenMvKPEE4XmdBWuoLGH65KN5DYGA1T4ELYwpeSYpY6WfjSX7JsjziZst1k3sBRiH",
  "key26": "4z1o86BwNcaudGcnAjG7gcq13ii87aLbAGSUzG2yfH1RkoSUCsQTJfnsFVQRQ8jT8H4vW4xZhm7KLXfEGxa76t5o",
  "key27": "eGQh4YxvoE78zwjE9CtczkRJztZD4mHqQYfAwkWev8UzFgaKcWhN6QkMqYGpZmgEFD6wT5HN6kaKn3yPufaa9Vc",
  "key28": "4p6gs85tTnUeRsZJsQmXTALCzoPuXZGKPDWVtDXJ2KtC5DCAdeN5BtN1HgTLK3vjEXcXRMLGMP7GWF7Hitp2HvQt",
  "key29": "2D4DAe2MYei4W8k8AHyjTGzYoqVGo9ogvwiSEfEQY5HexKDTscQMQay2K4ATXYsErkCrE6CKm5smRuLZiMwW4QkH",
  "key30": "4FP5LCYssFTLkGGbiNpJ9QSbRtEuMqXsD5dDM2tDD3saLxCHoW3KCYJQ3JQQar9Hzb6ReT3CSCA9oScQN9sV26Zz"
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
