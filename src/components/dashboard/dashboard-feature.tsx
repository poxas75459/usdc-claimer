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
    "2fR9xjVqfbS2BXnWNBWxQtzXX7qySdkPb8foceDjsv9tKkLqWN3Q7WXuygjmzCLfy9cktcz7ssatiLhd8CLVGe1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDv4SsH8GNNYHHHNxSD4GDKAdpifoSchXfALDdrby6fNgP5mFZo1Jehh8fcY2nQvjng9sXqrBNFvgsbz78NaQJy",
  "key1": "FpAYmxRKcG1ceSm6Phzx9ecrV8XpuMmSAi2F8aEAoJDzQtARhCEbEGZ8A4adKy6pkhZmMmqhZDQ9zB4UnXktUhJ",
  "key2": "5vgG9bC6QiwypQuGEgdFVfFLbXbQUBhXBpaj45zfx7eGJXtoHV2waKUkW2as126SgkAePj5NKtSEeSXiFTTC7D3y",
  "key3": "5PrbjGx1otj1V1ozxYwC71Q6Jb8xEke8ssZFQkmDhVVcVRKf5Q7rLYfC1ihWAGwKcZVUHTG8mY6n2pg47XxPQdUw",
  "key4": "4ig4SRDkkRSB7MKGdL4CASmKe54o5WRtTrwnGzfTusvowieVwbJkRBJTf7MfMHBEJe44BMcMGAzBDgoK4JuoHT6y",
  "key5": "32YSaxRw5f1qFwKv5VieRpPHZvbXDUQPGwvawqzpMVVnrpNe67fjtsYXbQsXDDyvHyE5ZQSh6qEZgGkt4mqsUcmu",
  "key6": "33WkgnjoFx3MQZKrRahLT6dAdWK6sY7HS3B3AR1mQa4wHPoVMWcfGnagrmsZY8VX9eWfaQjyxMk5Y1w6DYg2cDQg",
  "key7": "2YoMujkceSZVWFPuAQ9fK5cSts4i3LZHLuMrLFdijtZBf1GG32VLTrAQq6h9ec1MzxJiTUiDJspcvng83nnm2rkg",
  "key8": "5nTuPoWfGpgSf6xjoy9K1vjdkxUZuJfNa862kBF58YJguoNwKyAwFzabzT2LQWFzyx9ZxhhopnQFQiGVSTCUBiat",
  "key9": "3V8g3CiQHAbas6J5ejDgx6d1pRN2QBq9HeGWeUX4L41pH6K2jJ2EH2RQtgtsNFZ4bNdYwQu6ERFHEbnXFKeUpeF2",
  "key10": "25ckiwWTq7LdLkVfu3CKHkYL8AQaP6PXitdo5zX9L8qQCYcSKtNVSet1e8aEGr8BmhAYiPQjdyH3JrWA6W6diwbD",
  "key11": "5eQQ8Ee6hV2M2EnhjSgmxZ3fBV7frZkpZ9fBNpzfK151PxsfnUVqGReV9rEME2qiezoWtYPrxFnnWQAXEyA226Ky",
  "key12": "4qvQee5ZWpRCxZb472CEWjK5zR4MEVV5M6bJVjALx7zjBnjEdBa8dDpsmcKHS5t1a7RDEwdHW8F4TPp57qNUdSu5",
  "key13": "2o3uhLJatzT3QCcYe77XQp7fbaSszei47hEdEhXHb8VM48mtGo3mCVH4rPLAHUQW1UAK2EvZ4xtyV7cuX786gcfN",
  "key14": "2hmm2FqzL4MWVojQNtFTMwKw2nsNnomM6Af1rA8LbfmFsd61HUZJwRxBBko4KWozaCFcKpnmTSyiFuNQTLGJAPrL",
  "key15": "5QJXHjoqpbHcaxCtMVzUYmtJ5BSSftonp4VVTuAX9AMm3Gzh8n2nycahDVduvTUFgusQV1b8LdxCsHBx7tPw4nEZ",
  "key16": "5xpnEH4Vva8F34D3C6SyLdAAJ4WbkAfKoQzDvdvNYzV15qTwfvNY5iTmWfdejtDeaE2reQgSScsVmtEdZB7Z18zQ",
  "key17": "4wWws6GvDo2ZX7BF4qmoTU2odY7sWrVL4kPcVuPbSig5hR8TmR68ThQxio8Fe2aeBdayc6e1hpwRHT3xHVD7chCT",
  "key18": "EtvCR3erwTRxTBKNFXHrdpAiADxY8xMibpCK9T3XjPFcRWzfyFTTgDvphLRCPkfLC5f6deXqmnqBDXUo4RurGQP",
  "key19": "4uyCSkVpVPNfnrvc4eHLdzzZvjWdbA2Fd98qQZSBw6Ku8zUgSrSiA8enzAUYvrnkt8ewE8196Ng8t8H6BStShL44",
  "key20": "pLH7tFBJDw6XHrLcojHbGQxoQXK7zkd2pkftSXm97u4tBGhvTYbmcZC7NbT7xfvsaRAkHGi9Xdv4VyQm1u19xqP",
  "key21": "5HV4amjcuTKTu1tQ6pCH5Se3EeSLpvwAKz32FRWi1FsqmEF44DtspikraqRUaieNBBsk4wtruFHCcNipbSpmapXH",
  "key22": "4oJTksSQJSJXLqNx3h7W17NGoYHJeQmVnYb8yJV88M9cJRcuUZLSAQxJAW4znRrrFiiE8RijeXf7nvZeggdh63oh",
  "key23": "KLqLRFjdYayoLoxPzx8tZfCXonHBYggPUhjR9LpeMMoi4hTLoHK37mSjNS8ws8zSndyGoGVWDBa8tHfAJch8NUm",
  "key24": "23Kc3wanvcgv3HSd6Yz1s4AATUL8ujWhBZ6av7HruHZssN3hvmbBaGrgonsSScYb7CQuLNc5vHpUzfarJy2CmNcy",
  "key25": "2hCUPUP3D2VpufVj9uAhHmyUWet98mSBJGgVe55r6WHonotn1iHt3Us4EQjvQ4Uehe6WVRwF1swDttwog1TwQ2ci",
  "key26": "53oSZjwQKoAq7pFhcm1NQBiQ2ZmcCDX3YFLuj5d9cJu2vhZGFxTYyox7o76bcXxaCpY5SU2zS569vPTvT3vd99tZ",
  "key27": "3VEL7qLigegk2MacNBqosaBRsKDogwFEsoNjn8vdheaFS6hogZ9pUUmrykEG6BQ42BZk9d93HeJ9WhwUNrLgjp3r",
  "key28": "wMy7ZBEJDChZ7KgDTJsHdTaW41ovY8Qtt6ez4uHEemkzf4UanKMoVzsbLsp2adk2myLt7c72Ws8dgCpgQHSLSxV",
  "key29": "2ueRJRTcm9iTZCYakUZJiWKY9d1VzvAbm5gYLtCK8aP3aXNBLpsY4GCu83ueLRqxHKfbt3LbFbHHDtJoREgsmWCK",
  "key30": "2tWBnT2FrRN6b8Hn2ssP5iAbCgwSBGcVzBhSeeaycnEQrEvxyA51MJysifpeug77rJbzTXcJXF8qzs2N1E1rXbR6",
  "key31": "5sfGZv3XDP1nmyohfqiVRctLEgiybTcoSR5YnZ1VP9cDvpGAtzxSnHha38zagX6TSCoisk1UTBCKmsntBQgqtLhQ",
  "key32": "7ofY95XEmERiCt26MQrp8DoAfK18Ns6ByhVNJ6KbQVBsvWYpquTbKu3FWzreNTBbonW4369puS3jj7cEisYWSij"
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
