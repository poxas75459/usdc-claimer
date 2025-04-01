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
    "sjeUAtpvTzXd4u8ebCpBqvLpWtgDu3uukZnFJDd8rpzpy6KjDMWxiVQ7DNh2bCCWU8dm7o5opg9nFjJXEtVeE61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1oBX6tCpUiV1kTx6oNF6b5S6uPL5rrstakFKwxFe3hrTYZvd6msjJmo9wrtu5wPJirVsyojDVZiPrYwevvaYQp",
  "key1": "fZmpVn61sj5p6Lqg1sZaVPWYpqnbf86dkScHUtJgdAqmRHaHJGEeByEcVTmkZrZiFnXqyKd6ndDoakkJg6E4Wvb",
  "key2": "3SuiJxjzF8jkDLgsFhtyV9yYcwqaAFuCH5TDpjYHfyqRZchymB7S1d4gKaNECzZnxjtxSrZwP5GJg6pBmi6t19B9",
  "key3": "kSaX6SyZebKJL77LeienJ5MRknNQkXufLUEYhczC1uA45b54br2ZypwfwzF4yC9tTdAQDEw2jMosivR8ZioJDuh",
  "key4": "2Uf4JCRCqVZiFcuEK8ms4qJCX5oU8W7eejm8yZBpx7g6eTPm1zoeHNRppGacRpUxMCKqnumN5xa3ZabpNR4eLaes",
  "key5": "3FnB5LXLAomkynZ8kcGP6tRHLRJ2rWBzEdmdYSi2Y1F7D6WMdhzK4JpHpgCQvCqVoQVmECQ4G9CUWwnThAh8uQyX",
  "key6": "2wLab8P8nfgbzZYvyRYqcvXVgFinhNwEdAKVoEcEVF6bYRJBstZC4eifmETfU4CfRGjCCxLhaUheaLvrJVquPKJG",
  "key7": "3KFByAvVfnsmpSAo7Vu97WZ93YxUkWZCX6kXbe2puD8gcWsUdUvYFJqHNFaK2BbW6E4Z7Etnp5feQhX8a2Qnfwe1",
  "key8": "2Z8V5iK2gYBPp861o9Dz9V17kN6i8f9HJczaV4LqrYvauXuR3S5tTnzhxYXPqisYjT5bXM3aHzPQFx1ENVoQmm4E",
  "key9": "3ZKoSR6wUXKn8qWCxcLXfPndBRi5LbZbCfP6fSzn3PRjZRZ6RfY4PcAt93WvEbi9rjHQnYarsyXx29EWnBcNNNRX",
  "key10": "2M3haFaCYPJBY5wUm636wsShwhGFDdQh2S3mBphFdaFZyLes876YKmEgvt4Ur7DbXBgS8vBY1uWFtRBnfYMuks5",
  "key11": "dk3dnSrceC4vBY3yabw82q4cw5VhojCkmhGRQPErHei25AbuCCQmfGunYL3o3eMNTfmL6a91eHtTnMZp75UbhJD",
  "key12": "ByXiWcq3of9cJJ2SF8kPFF9RsRHEDrGPGGBAsJmvtxYAC5JxZBiVsQyhDnxqLXhoKo18LXbhdrwWKAfpPLt7Vpa",
  "key13": "QSkVeDY19LNXtDf72xyFUqUir6SJ4WLQpDmKpMGy1MCY4wpHz3tiMDM7o2rmJH6JYxwr2JjiJU3xEP1V9imZtMn",
  "key14": "uqyd1qLDHg1KGHXqPd5pP3BQRc7W4tK8DpNb3wBkjuMJfEDBkZR1n78yPvnXCEqrkNFaCcisb9BsQ8NwkaD7LZm",
  "key15": "2f4U63Zys83KWcQNDKUVWdyt6DUzUMxmhy3BKfnyXahXvbf6wFw6d772GKBsZWuGrSPMWJwSFvRaXqeQrwMDQdFw",
  "key16": "3Yo6L442RMx4tmp4DPRnm2KKsBB8Lh3BZkRETKZG6hoCcJaPDoE3cyFNvLuck78NVuVksiuurRvp8n8Z15RuiAbU",
  "key17": "4fRnNBoDkZcARebqeM5YXijYfe5zooZ3v5tSdCG8bejYGvxxm44wKnztLcpDjK2tUMPAT4KYmxD4r6t35W1HnwQc",
  "key18": "2BZYwyANxevC4KozJVHk9f1BaAx25mghQ2EffwEttdy1A6UmeCGzBkivoexLMXbv7MD2cNt9scxq2iGhqgVCcSsJ",
  "key19": "5YzzUxFEXu1u6avrc15aBZZMo72ovfptao6VhefVPpwW27u2muMYGZdhWTS8kFtiU6bLoP78iNxZsZc8rs7kNNqM",
  "key20": "4Ch11rsnBE6xZs4fnrNPovvNh5xiPDZyWVrkHZDMm3N7BxSi2AbC5o5bh4BvWKfdgdA9EaJfAzcZqpHLna2m9i2A",
  "key21": "2uHySqMbxpTCAgygR9LeeUd5JkXhLj4QuSopcarhKzNtN4u5XFEfjuXFif2SJrZLU6mKRVB6knDvS6eSi2tWkDqw",
  "key22": "JQc32DDjGT1JjMdgM2cmcsePihFDZxPzVkwTHg6YPQFbnqfaXDJtbvff1JSh1Gu8qEp2Qm4hCAq5pHJEmgz3LpS",
  "key23": "3VB4MRSHXeEepk49K4CeyiHXkA3XhjZcgqu22vh8THL9dbyA2QxbFwjzKcCbqLeThoRZtZy6tUNS3yqiVHTiiU7z",
  "key24": "JxW1oqkt38Eez9odcWUiApbVnSnT1UZwRPEwodXjdEpkJvMNFxVy8665UrhtnHu3cLis2bEqzLLzxpR81cBzZgt",
  "key25": "2iCDhhFrg2zJUG4i2hpk4KMAnApkruLqKGMALiBoDQMLVHBM8dPD1PkLv9H7Ckdysk9ajKim6T5MafBQdZcs17Sp",
  "key26": "3aENvRDbewFzTxSUjCsAzbYGAbij4uo5CNRbdLnEuUfcCUJfovD9yFpAm1wnv3psgBxRn9X9V5Rx5CWZdccTBtBZ",
  "key27": "3ccq2BcaGYe2HpB3dTb4gRWpmtBS3rUqSdnjDYVPCPsUisKzCp46qJp8TqaykqmpueBfiwJeXqMYhKqnY2GeMUGp",
  "key28": "3xXwfpKwuMbK4cFcBUCxfteYbqS4D2bUt7B7qrLLNW4tXpAYiBesGpNPE7FXamLFVrnEBtkdepupF4UXggEDPzL9",
  "key29": "eigta2u4m2FPTmJTW29j7RuRjuqKiLQ5k1m2MBeKsZS3dFKjH8bk3d4VdDSHU74dsefDdozwKVQQJw4krwT8f1j",
  "key30": "5jEpREpjNaZUKGBi3kUnb5HYPENF4XPTPDWu55TQmWGidQYUdzagEagv3KYfyhjVVKhQreNc5Nnt5UqHwAgepYnC",
  "key31": "3bL7dAqApbxdaT6m2Q2zcVwu5e9zgpjwxajLkQ1eTF4oj7Asea43R9QG1nU2vFTTAq7NvE6wdZ6tvtvMTErARztm",
  "key32": "5qbDoPDdvL2eCaaDDim78MCgb7EEhF7EUmRGUah9esqaJMWsQ8stGQVzHhP2249BdhKeokbcaxpGSWCXPTZXqJWu",
  "key33": "49T2ZNVgJhpffDEBAATuLn9AE3irZhUWxD3zW726sd9MKYPnoxx5NVVPK6EMgPMjLjqTK4durh3b5WpMP5oPFsD5",
  "key34": "2e2SCmsEZKCoChBdbAsXhcJXwCnwXj97ApBTWqJduDFXga34nTRii3ShfrXaLLwqJ3RYBVhVeHK3rimRb4J4P9nr",
  "key35": "51ZHUcLnMXAdECTgRUd5PgYKgMbEZZYeJzPYUGkgKU5hVECSYmVSyGvMSzwL8NArJXPX6d5gLyFtdLXZXnxDoqsc",
  "key36": "26CngGAj1tMusiNH4aeTN5cH34ZHRKiB4TYHJZf8hub65pqkE6SvtiWLcReHKq9XPf8a7vzqzknMW9PNXxv14kpC",
  "key37": "Eq88E3KUtfEHJzCHBaSiqfmm5kED7KTNiDDYGrhdjVwXP7QCARiKaQFvMMR8sAdJDbEfVZVwRosoFVxfCFGT313",
  "key38": "cT4g7k4T9LPqi2uKSQZL4Dj1Pd7csTtZgNAoUdFCvZgmpRWumjpu6iBfTQs25myNN7V9vhY7VZ8itzQTCefpZDr",
  "key39": "3wErhobPpQdKpuYa2MgDZqEKNrJQyjeNj6SBkuuUnByH2bECrgGZ5CCssvbLDbA4msCtq2Kzy2xpNXSaCy2aayn",
  "key40": "4anwxUFYZ4LRPWskXwsPkFdKLUF2Pe8RLCEBjh2F82A6JjyB64s1NWTKckor1Swjc59gBRiT4W7ECcAxGsKRw5P1",
  "key41": "3nskz1NHj4ZYkfZFWmLFFUJwFvTiRzsao2gW3maT2QU3Atvpvt4koufPVM17bsBGdp458yTTdFvJKntuMXfvRsFb",
  "key42": "JBPCaUtZxbztznmpPCRtKfStfAAQxeis5MbWRE5vudqHMejDkiqnafT5JD2zjJBkU5G2WVjbjNYjE2tB23EbbMz",
  "key43": "3SRpEptqAdhgFr2ptTBcRZj5UJjcHY1KfPuaEhk91uru9kAdXuvs4si9x3TZea8zPBX9M9WbFogGizAqq2WAiHoG"
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
