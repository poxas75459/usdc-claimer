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
    "hyq6BbFz1a8aa3NUUJKLv8Y4W5Rg85kQCFGvfUAphg7EJ57TLhN9k9vcbKu3jntqPc9gRUp2DwiPAqeFL72hJhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mbdyYx3YmzuR5AFzSykFBACFZdSZotdSPBbK8ibnRrcXoZSy9q4t5rFvv93WLzw2BM8G5px9L2w8weDJywQm8A",
  "key1": "2UptQeU6BUxj3Ro2i3ZwDY8EHtJorQnEBRs89irXceK2iLRLN51LnoDRuBXZLe3QrnwnbjTx2cArqoBFNbkA8y9N",
  "key2": "HBWUCS6jE8F2ycY9ySbMemLwzi64SqWYrt1Su5zNZsxxNhAswYSdsA9JKBR7Fmfc9CKeXYpe1rS1sNwGUNN2uY1",
  "key3": "4gEkbdJpvQiMGSuZoFb7BECqmuf8L9YtDfJUFwVbVoTxpgYKjSXKmDjxR19kWdBK73m1b92hHi4WnZkJMjATTWE4",
  "key4": "y9hTqD79S1EvuTGW4Z3NLyjtw8Q8eeEpdWq9THgUcCszLXyNLdFNLFW7uX7J5Vgcfs9fisFgmAUmZYcKP9EmHjx",
  "key5": "3jrvaPKr6AV3m29fTCMbqC7fSdBroHf4R96nNbFoz5AmQTArWZ1vFdB7Wxwcfpq3n6AMBjwoVNTH4UTk2Sza9afZ",
  "key6": "3ZJCpApW8w4dyVkR2k62hPoyKtuejCPtadyabhYabRZxS2gRCjiaqgfRDMJxmFsb6GoPb8BsWcAnyFsf9avWBdJx",
  "key7": "fGVWaHMMraNAM1YRz33aaapZQaeacmHkpetXvv1dKVKqHYhymWKbhgHgHqg7b1QsSvfHuYbBobdaGwC8KeUgbnA",
  "key8": "23NhfBr4tYM2rPvBwAmj4LzThpGZRBAvTzRbBWmiru7fG1p5epgMfD4Jh9FtkKz8Xn5eEkS8D53TzGfR2JoHqCeR",
  "key9": "37kqDSPkpnTy4netrvUid4hUJ3ELfywgXz51xw7up8swLzJFH2s7Z3C3rWSD38vY2LsP2EdnTa1jpoHFyTarKuxt",
  "key10": "1u5cVvKVvQBH5zxZkubMZ2sHXgwoPWCCToD1MLWnso2fHhAbgAYrhRM5Hg5UKVb1amqvLUMffsAQp1wKRdrxCFA",
  "key11": "4ekeu4Us3vLe6QH9Moe2rHhPQJgj1ZXtPKdwFYfxNZMBDBrkELUqUwEtzAW2eLq3X64Xxie4SJpTshscqrYDMguY",
  "key12": "3wgp6XgZSDdDcpDDrfRtKbnpa9VZ98yNiZW624VVQMeDGn5t3V898wBDrF7suKyWZNwKbfSCoAr76P5j9nYjU8Hy",
  "key13": "9thm64CSvMzGPc8uBX4DmgASHBEiyeU7eLiWCsVFPRBS81vq3NfQNLXXmnKYxkAi37mN7pxifnLywxM3Zd4M2i5",
  "key14": "anKSZjudA4JGN8MWtS6CzCSwGrpbYj2apLwyGEqCLnUfs9B5bFAbqg8iMQDZsg1zLHnGwKFgy17otQvbvkZbFam",
  "key15": "55gNPYKxCGnXCxjvrLbexHEEbymJS4NwbqW9r5oGetUjnw4sdkH8ss2XzR5mSMQNmYvcoXtfv18ERZNYMvvVx3ky",
  "key16": "3FwLYDMscQTSYuad9rEoj4SwGMRwzkLozPrPzCW9L1WtpAZqCknRvK1zYSoj7GK8A146wGhmq8mMHzymKB6uQJNS",
  "key17": "5FUCpUDrsUqSinVHxZkEvpG6aUme3rvk27tNZyxRL14bCXmFdA99UrFPhwBaDJDzyBJ7NvRFBWNkCYXy8iHpVegM",
  "key18": "gRRvdFKx11a9rPQrKmptwAgTyjgVBTBCmA8B1m2ftQtMaTapdudxMvQZmhrrUmcsmFi7FEEN2XasXuHDoJphFCj",
  "key19": "586aqpDheHAGoJ5QdMtm4v4uTVmHpetZ1Qk9MNKurPZGuQnDREUpqUeomq8CY9aGdk8sGM4KypJ2xCwFiXTLj6Yf",
  "key20": "5Y14Nemf5LqtBoVRYJcc1FXGPBSDGRS5TdGyb2krhEX4x46DaByC7dhABny1MA417tn78ZzsJj4uawfJq1vxkQaT",
  "key21": "33h5W2LW4oAqUR68z9JUxLbitBGuntDRQpBjaaqgmi7xMFPct4DgM4Du1uXU2MR4pW1Tn4Gp1BuiBvHbSLyGDNJs",
  "key22": "5ugM8Dps9qdaiArwf7JacfUyxbkv2cJLXHjCBSm3VMWRLPzhzfnX7TCMyBx5scBz6MCDxNVNsTdmUtCqRf9iGeYQ",
  "key23": "ZFwvuaNn3yTfZdJNWVdCaKj1WjmUtegAeZFVfcZ2sZogusazSXMySueEpc2vMAM5zyjnarSdQMBTb8HPE4pa6Zm",
  "key24": "2Tq1hbaUCNgoSsZyGiGRhUEecw9HibChUKhzfGSWtFqtGR7RoNDTjqxx4mrizEZdviJg1XdaXZWgcQzZdiWDycyU",
  "key25": "5o8FeZSFVUTaRX5dJf6cnU1jgeeUYN368RB7fteEUTMKQvMnExK3MkMq7YabMG5HS78ZeDsbqsmNVgJsydPCLqBL",
  "key26": "FBfVbvYQRgSSCKtq8cr8Qnr3cQXSpJfpsagDfaEK9mGKfse5od4GZVo1U2CKTZ91u3hH6TnkuUkCWKZDGdWygpE",
  "key27": "4ZVTYP5B8H4LpTDmcV5A9iAdbXPKvDGyRjkNjQGzzeW3y58oqF8tZUuRHVa7Wv7axieTxiVVCJzWsJ4MqdrQyKBw",
  "key28": "3SL1tg34D245o1YUprYyaoLShD4f4tGwA2Ws8XohMTzUJy3YDrSYMaV83LZk72Zj1ScrMUsAxn79j8N3WyzSumhA",
  "key29": "2weqkM5hfwUs4qTfXMiua7ns3v1XfmqBABkXg4XHyTE8BfzqtL4TfV4bngZVhks3i3AYeH6akGbRnAzeqHQ5yG4H",
  "key30": "4Szqj1NCzURchfRTutpTWQR61JzZXf2UNib7v53YbQgasotGWYZgadHpDqSBAmoZ9uAwYMkvcFsSjr85YxSM3aSw",
  "key31": "2KmRQwE9q3ucCTzf4SxFfEope4Q3ZXQsaCawH932LirVmHfNKd6KCjWSq39N7vd8YbrZzasqAwnfZ2A3bTAAmAMM",
  "key32": "23vR28Q24uFdNpRi5mqV3EvaMNLkceQpweDw75YSfgoLDdkJcc3LiHrAmAZJGC9tJKh9oUjNVU3vKiyso876HQ7v",
  "key33": "3vTfFxN94Jo438ktHB1crbmN1Fax91Fsb5xJkckPjAVjfXzyHhGVhGxppPSSuxdAfBrhgF59vK4Kp6zCx24Tep5w",
  "key34": "2TTkzQrbDV9UQdbeWCgtYv1ENHsiayiMEvLZbQHxPEDUGvM2CYDgscPHB4FTfbLXf6ncDUDUnvaMbTosn7tF3SxU",
  "key35": "cnvjhoMA48d1kjGRuhHgj16kGJohjAffRCrCeh7G4PNy53ZEA27NfdY5t15dkKVUZSNnELySeFNEevw1zkAJxmg",
  "key36": "RArY8NAg3KYPSfn9SNSzrTs4H8RHyNmvgCF6ZTSgc1oNpvn8J3Ywfyr83CvB3mcYKpZQ4kEeX2o7SsCV1rgx6x4"
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
