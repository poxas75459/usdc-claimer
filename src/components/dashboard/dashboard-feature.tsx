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
    "vtZdJW7rTiRLFd86Zi7q2gMA6GgKopKvpcozxXJhrYQA8gEXiHxh6dHqU4UN8vzhfySyHLbVCd6xq7MpCFRhNgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGg72z3akRfYrmMagHQveBANimgn3LohGpAnf37p16GYuY67BNbnn8yEMoxynBr4m72r3n49sko23o37Unm71FY",
  "key1": "5Qm16dBTeKjt4YugZeTBB65XvkAdpgSB6eDFE1F9rqdmnqSQ2vmtABNhcbNhJ1AGm3XuKhM45u6JpxFSJGWTTgDo",
  "key2": "46uR8aWoYRE4nGb7JoUvnNio1QrF9neSkZRQhNyv7ddApCafsPsz5pFRpW5CFBAafxWMPu97oRafHKzcg6gjt7Nq",
  "key3": "2Uh8yN7EncGGDqtrDwL11ayfZf6swvHVmmqaxXfYm3k5CFxRbUu5T9o8HUuJd98Nn3z7dGKnXq4HtULkBDYirJMy",
  "key4": "2HCWGFLhWoJAxydEJkoL3mq6C9TKw6XzuW2i5YU71QSj1pXPrCW7yXk5vbDRNqGXpNstQku235jTXxxmDQptjDh1",
  "key5": "35CQ4ZQsM4u3ypAes7MechRuTvWTzsVTk8yhoW6Lc5Mx1ujrajeo5bzE6v8ZnT6zpgBNxe8uWJbuZoR6RLmKJ5Nw",
  "key6": "3kr7FbsjCvUUzjU1KNnN3YgsyN5dozYDih745ChHJkdUTrvLPu9F5NpAmNoxpukziUqhQnHMnVhFsa2Y8iWS8ZkK",
  "key7": "2vKQphQb81XaTXZSfLwzkUpiJ423nWZtcD9Md8PWoD3QMfLzikuegAcmLxvdD25SB2YFcuVmcRmWfaHVihXhcm6u",
  "key8": "5CGSRRW1K1FWye2PvbraEgGm5naCvYwoaQJFijm52BbCsoH1hNuZ39S4CzdYycpqXorPWeKptz3FmVEHpMBFcqvD",
  "key9": "44pQ2tDPPDiu7TQqxtt45EnZuhpFK2YfsoAV1rsEivHNiAnjQbgNWafpWM3415a9ENeVSnEXckuGJpj1fw5pJLdi",
  "key10": "35K6mtVtX7tjdiuvFcHbwGvNbjoABQVewZudnpKArQrjAgMjLa4quj21iBmJKp4qYzZFnjMw4vMdxd8GSKCqXnYV",
  "key11": "4wbsGPNcQNNzGCJFqJ7899zYPXdqZB78PdYJsJsQhD5PZubmTjNw68BkXuJfRinweAKaQTG6Ev6Q73QcwxXtVgSV",
  "key12": "3degY8DeyyYH2owKhw1tKjJeNJMUrUfE1bTWXEXxNoiH6tHbKav7Y9Dmc2Dh7M6jyaHm3phLBvekLmaLcFoNDeWC",
  "key13": "5qfmD4MYZEk8gmYbwn9HazqCQbhy9Hh4VFocQVMzBd7n3i3Ct2H9rcrohG8EwPje162dxMDQUaJjhr89B7MWWXuP",
  "key14": "rC289FM9XpRCtE1D9MmFCGgnLHDtTu1mEfc7a88v7y9aM82a6xRcWj2ZbeNMpqL1tdiNr56sFEwmKSiSrN7R3TZ",
  "key15": "3iG8Wyv34bk94pLwoQyoumtuaezgkcyFf3qY16WH5oGJTy5yum7yNr3qrX9hLBRo6pUYtHSX7zRyFXnZf5qt9UKy",
  "key16": "2cDzS4G5dMAfrce9FedddNqWgafL8TyBhB9bJV64KGuwgW6nbeH4V4ZGAtMzrbfJGnmf3qb7hNDkpUprUMAeXAxc",
  "key17": "4zRZXdNxeH73nzLcPNw4zUsQktc17SYELGnRaRt1JPyvSUqrhPXdv3P1MgM86x7gPG514AgotpHA7rfncsHX1RiZ",
  "key18": "seegM3L5gn4nWnVwAxjTpYrfX4dkZJ4ap5YkZxxd9YJzVTbdzKD9tkz3fuNeJtntW2ySfgxUMKZgo94x1B1fpCQ",
  "key19": "XPRCdMf2V3HLj5HcszNPKvMC4B7Rdp2Qhsjst3n11gwj1MfYWXvqwWPkZ8eCctorCmJbHpfPXSWnDp87YMrahhN",
  "key20": "5yXXsDbawUkuKUPvemRt28oAgwpEz7AkNzjbXwnyAt9HMiprhy7Pq5XZuCH43wFEssUAsnndgjmvgmZXuaYuyd49",
  "key21": "5R4us5Mmdq5Si68EALobEk7iNKV5hqKtXnVAB91rjW81RG8VMCTC3jiqf6d8b88ZVz1xGgKr5qyKhEocdVNVUvR8",
  "key22": "4L3X9w3K74kXkFvD5gNe2mv8qSSVJCRUDeNh8rwcebkCg1bK58vVJn18QNHGuxhNTStPY2pqEqR3vzvq1ptvkLyA",
  "key23": "5hTxK3XnEavDvKyaZFt9ZXpW6oPTfBjVvGZE33RTLkGHXAFdKknLEAUfd1pxNrR1nkFgtTv5iLMZxN7xT6hFt5Le",
  "key24": "tniHWvsL5KTeH2jhNjuZQpEpRftW99Wd7MwC2DXuKhmJ7akJPXv13V4DYWxwFFLMsh6oCkBadMigBSme8wTMenn",
  "key25": "2cM2TE9EUzKyC8df1EoMDkcWdCQ22MgeBS36oGXR2dKvsf28C8yrFtTZxM2sFi3xoJjb9N3E51VgRLD1bP76NhYf",
  "key26": "NRNH86HqH5PPJ7QoXKN77gDwcSWogE4KHxZdLvp4HBcm6VMDA1qWB2fzy17o9QPY3GCpuyW5AH6qPfbTomzATbx",
  "key27": "5KjoHc2oyGXd38eZHkxDiNUfpuLTcRgBgZvxzLGmuHWKX2psvKzy7yQuAzMmufsaCjBdYGzd3oE9joSiUnn6paGW",
  "key28": "3S3dzbVVNhSL3m4dTgBDVGWmKfTcAqE1TcVT5xQ8Tm4g6gMNF6s5cuSL8AagMXxdkzCiKei53YF83t4NuoB5A79M",
  "key29": "2AzX1s7cNoQGCSZajcSPWT3wGV9mj4ffLvf3M9sS8MfmJekPps7QDyfXjZwwSr6d72TTG8bAtrHcNNtQ6LsTqhtr",
  "key30": "3Zu6g8nVx3eWMomTDws7TsZwoiepR3kdEodLC7CgyWL6RPLWgE6DpJ4fi8AoYmnEwoNHLAGisKVaKkrv3b3npiti",
  "key31": "66rUn63uqdEBtyDUJHok1SqrAbe65FNTm54p6rWm4QQsrHGsD4qWbDkN7K1J66QYJuTHi2Yfs86jEWCBqHEUkceR",
  "key32": "GJHrano5TKENyRjrML4DHiaWkApTd8LGb4NLbtNQR2DJwF24DjXqcZHK96rZ1yA8xGMpn8fMPz7nwvVJoNEHK5M",
  "key33": "uevgRLwxssguCXfVdCFhCAMK1E12cZrpAQriutuqQNVNxRSbzN2yM6FFfcprnC4avGK5HXYZfQ2bGBqdi8c1iBT",
  "key34": "2o9SMRg5RLt5nqHYiJSGoAQ2UZnoBtYgcKN1dw1MryqDTs26cAPGWYFxedNYTSSK1Aqb3gDxnzGJCzuHg8o8zZ8A",
  "key35": "5QRtvqkueNkgsTtRYYVLiaJYjYq26dE3Mo1cjqyhbnGxrNU7GsVpVE4dtAoFo1VC9k7ontC1ZbtwQ3x7wmvrtqPy",
  "key36": "xjj47xKGrziKnRU4muVGVLm9XdN492KxbQ8Todrgcu5S7yAnBgVdKBJdKspCtzSd431iqrPBJ6wgMrE9RDDx6HJ",
  "key37": "64yicZj7E3z1rWXweQokV2JEWQngEca2xZmLXT7WCv7YiSi8UknQ2VHGNzm7gVRXQ4nAWND7fMsAsPhK3RLLxp18",
  "key38": "4SENYvwHmSoiDp7ubCdTwVHK9cz91FiGDMBpb3su3qyqrv8mL1M2gyyE9cQfMEDm6bnggAuoboBQJh9Yax1ejFUq",
  "key39": "3tQYyVWZCVjSWfpnrJfiQDvuUVJAoXQtbmGrg5TSupJYATBbHLBSaSQ7XspkPJfCiyKwcnDMiPat6CwwhXdrpg5X",
  "key40": "2se4GA31zeZvVKzvznMJKXk7hSFsnJEU5LqafUVsc1GDMX5h5UnNKWwQ3EDhFAyoZCmk5eExkYHnm7fD8FHmgZFR",
  "key41": "4zPidXRbd6vUuMZ6QtagDZhBpPew2wZTGRWxLQk6gVrbfQSTrePnBLU6Qt4ippjE1i3k41Mig1zQgheisH98YB1Y",
  "key42": "4aXPLHMT1RbTccna9pUQfRaukAdf1bBNq4xnbTGkhAYvU4Q5kiz7bViiw5RTwjV8pCauD5JzRAMFFYenwpiM9skp",
  "key43": "262Bs3v86pV6bjULw2EmgUCEXTB4DvzURhDgxaVbnzPrEeGMzyrZQseHZwZ6CQ8NUDX1A8KxxaSnrS3eVBeJji3D",
  "key44": "dbrH2ziXFnFdusjeRrAG2w21dECzdUhZN8hSC67TcuzwStyiRdgrKWR2v1DYCtgfC83hHAhFGXWvwZjdXdof7EM"
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
