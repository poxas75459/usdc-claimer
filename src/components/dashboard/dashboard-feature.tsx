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
    "3vUi5oRmvrXfmFMVSz1J3hXS6QQJGvEstVao49L56eMa9oFzQgbN6dhKiFAcWSL1CBhNJjqRTL6VyU6gRqyHpkts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kn6SCGaEVY6gSzZPKKdNAixGrPqQtQtPdhgK9xT5HFtX9u75ud5wAf19u2tQpdsi752y35MHXjqcvoiihb9pF8t",
  "key1": "38Q4rwjvdymsqvLFCkGWNzPNqwJqMjtoiMF6eEfYpyNyJLZCSKtJDDZPrPA1PYpyXUwYnXR7YDKmstCUjKmS5gnq",
  "key2": "iYnckBxhgMMDG9WY5Vh2qmDH8SfEFgetyT7zDZ8nrmbBUSNu3UXBZef6ydti8nZtUyjR2E5cpUbtkMi2zM5sd7v",
  "key3": "MZTcdcYwErBJPHzmYaL6qXqBsHwiHTizD3t7mdAmqrmDkdkcLS3LdLD8JSTo314hrg2ToKMepA5Q6926TM7YP9q",
  "key4": "kRsWAous92Bk5pk4DcLeTwBZw3w7ncxkDCSPobV5tJw922KVNHenN1irQ3XQa7j8JKZgX6ayZUraa4iu4Em3vmp",
  "key5": "3WkptQmdDDEHssj4rK9qh1fRGLjvKZ3gXn3s5LbXshAp5HzAJcwkVpeFkLBGNd3QvTEvkXJStVquVHHkwjMJ2vpq",
  "key6": "5KHM1nNgGoKKmhSZATaDBmcjcUc4aWJjD8bkAXV38rtKByrhYt6SsQpwm5Df1MJT3CJw9C5gY9Gi5dHxo4XK9Lq",
  "key7": "4DvRGH2hyRnU3h2Bj9bN2Zw7DuXnLNriVEP8CMJ9QxaetLXSPH8zeb7DbqEpn1jgAXpbESAGMZuzYkr9WQwhGCW2",
  "key8": "WG4TcKHwSxMKkFpU2hbhLjPqVQJAZ3QsJPzbgE1dTQcijc9ZUPWrzgCSLNNC87xQzf6LYKRTppV1oDsEosSiT2i",
  "key9": "3D3RpYfZdAaoD6rjs5DvifkhxAiTG9ko9xBovVHrpuCE19acYCeRpEbcLhHaFEcATJACEYe5KGuRxjWPuGjk9GvX",
  "key10": "4SNjyZboRopiyoWEAXpG1HKgmhgQs55FhfB88Q47HKtJxcbF1BCFzxxc5m5WPV6UtHz9YNHgQnG6u1fMqZ7ZPVbY",
  "key11": "2dACCsd51B4ZA3xLWNb5s1cCu25KM2bxmGxWsBXGhNudQ76CMXyJztUHwC92tuJt6rrMbMQTTYnKrVn3f79VNf8M",
  "key12": "3nJ7wcrhvSBf4MY3HwKtTq6xADxhxgPJYqPKUg3BuEYA8WEgBqDgWDh3SVjKD3Du4TqxDwehAZRh1cyXEA3egiVS",
  "key13": "3KVuBG811koJmSXu6jBv7h1JcNxuVRQH1VmQCEjwzn2xsaGuD3oSxkztERe9jWnrFDEHgWwutd9gpubMKgeGRfJd",
  "key14": "4b1u3HDLLXVfaWPnPMaBmjV4j628V5Gbpjia1MBgKt9H2YfB18ZXKG3nYR7ZXpcYCH1aT6L3GYQgBpXf8iJ9AxCr",
  "key15": "3BLu33xg9r1XSx3mXXGWCmTk4mqFSWmjxaDAof1B5rCg2DnFLdF3scz3WoyfXwJ5tWBdNqPiGB7DswK7FpqJF4qg",
  "key16": "3UQy7fAK8G3uCaYv3S2rhLpkz9XMJpvYYCbyxsaBqjFramEAWWZ2ar5HADcZtH6donNN1jxgJc69kyzQsyR2YVzz",
  "key17": "5HKyiaZrnprKprNXry98jvtSax1JXubKDJwj1BybBkV4URh4HjeBNcTLLenMUMytCHbRMdqBjrdqAXh56N2AFbJv",
  "key18": "3JRNNvHhZxeiQdbZhGY5jcG7i3o5Zor6x8Fsoi5gVuprBveTjAsHx5JfDRbuvkytK61kVoLFGTWtGd3GF7gTNLf1",
  "key19": "4K75ZLuw1nbgErjBe3BcE9iWZpn4CFw9YAgsCWBPYuSRt1atiWB25LEBxckPo3hadS1jrChRywvFQ8xZy3Gm2NCk",
  "key20": "5v51ycsFixsHErdk3jrVdZ7PeKQLN2fRwPcZ55zQbz51CcXyeLsWHExPJwa2pERmD6AjJtSGtvRp9S9dNrymk71v",
  "key21": "5a22XFX8GA7ToWZJrRft71B4wj2v4gN5sCZqfUZYCukRw2Mk9uV8AnadXCjTj6x4Jb2ECYTXKCrNqm36ZMLGj9uV",
  "key22": "3p4DNLRZ3jVbBbJmLTGqy3FR4K1yNKYNWHtKPBXXhkVnWpXKsq7FFp5WWZVHn6sNVJ13MzUzCGX1QVWA42Csfoce",
  "key23": "5k8YZciRomnEL1aoRy38ZPUh3JojzwPYcp64HrNHDHfz6CvAKyN3tgdRNDvMQZyfBy2ujzEQfjXgfkrhkXbKdkqU",
  "key24": "u5X6AhCYTnsiJccXd6Mgv6uzEkpDSarnyUMqDWDkXe77LpuKeEVDR7j2cpnwSLqXMdcdBafg9jyxRc6eLd6V22d",
  "key25": "ZUpSpiST93Ama8cy9X1gDsT2TTEgCkJL5ZbmKF6DsDaDNCzDQyEhnVC8NGZNcTkZKjrXQ7mk6XEMyrdDPGYvyxS",
  "key26": "33mkAu5SSkwwHC6GVn9Bvi183wGm2wcCpWgUPMrHXFFbuFb5XkhDT4KvZVwBdNYn6jSr4eoxkpFRUgN6gq5ASc5T",
  "key27": "4ekKxSxFG9CM7J8oEFNvM1DMfnQ7KoFSVAKyQ57zanuBNPYQ8q1a2rNHAq5GSqGy2PbHF4AoW2Y7teo5wkFE1sxD",
  "key28": "21hPiycEByC1peCL8wfZwtYA4xuyrAeN592xLR7Lpr67abm93uQ1UdnoxCWERFwazj8Bik6zAni4VkdUuN5BCgua",
  "key29": "35JkhZjzLLZZoDEf3ub3nAiRBKoReqNKD2seyVJrHAMowRbMhywHvYS33BpV5bf3VndBzjQVmSfe3NW2a3NYcAzm",
  "key30": "2WYF71sq9n9uJLqJS6GhZKck3YcHwM9paaxp24SGp2uMfQN26aReWmhN5ZbAmD3NMq7Tb8ayjdoK1RDGGW7ddDkQ",
  "key31": "63959biPoXfcGFr9Mr7nc4AZ66rvKEHUhejiQDhS3FLLdME2u912AFk5mdCt8jfa1FVgEnKUr2gi6wG7itPF76Qb",
  "key32": "5qwY5Y7ppjzcdLz5PPuk46errThrvETQw7N4P1pjFTQuNSc21h6nwA8EgSN9yuTf9HsmgBWEncnJe8d1nyQvUHdR",
  "key33": "2TH9ZZ9ZeGqq7SF2EywH1bfDHQiKZgVy6wRHgzY6oeSmjkQNzyiygzcs41FRqG4wkH8x1RYcghZV2VYJeJHAUj3C",
  "key34": "5ci9h9GSxNmwGzY7ZhBfdBC51j8ga6E2eGF7q1JiTnkyzboHgpmjDSyEWHpbGPVUKL4WJT34MeHrKN1pRqUE3BsU",
  "key35": "4MsiXDv9k63UgqDTwdaFS5Xa4rPTxFQHJctBNKsiwSSK6RpPD8kLdY2qyp6yXphvQPvB8PVZ3VhGGSMosztJxaUm",
  "key36": "3Fn1r5Hq4e9UxS9gEMur2cSB5uRUvAkMYMkUYvcjrAuXBU1PtbkRLuzRA1A3iGrCUkhuSzjwSunNVnVfp1yL8bNp",
  "key37": "DfzHgFLPp6QAYD4Eaxp4Li8EHXsba2YJdn8aH8SgoNSaAK84A6nsQRKANhsADXxxVKrU3cYuPwS58sN8fNU3pJR",
  "key38": "44VH5nmFArmwXLx4UAn4aREpAHKqs176xPY78EBU6t6rXNBXZxsyFnry3Pfmp1mXnkqjeCCqugS8ekTFr6QySr5q",
  "key39": "3iKXuQom3cgqt9t5DsxCWGw9gFMVYt2QbqhZoftGA5hPNkCMCLZAQQJKXNopQDESb2gs2HJUxcmXNBKppyRe4dA8",
  "key40": "3oXm2wCAQ4cG71fnddZqPgcoub29jfY4QJ9sCsUUV62QXzyJCvv57noeRNk8cPurBVxDjkTwfMtUTH5BHEdWZbyi",
  "key41": "3aYsd8W2gLZNuaiUhSQyQaQDJFCrGcbewsQeauMjNfrP1RHrmxDDFtD56ApGXPeFgSy6N4dzSjK746nRwbBDNsuy",
  "key42": "64K71s1dW9MiqSm3NaJy5f4GsqRxtjLYq13aPjaSKZDwrdwzPsFVfvxzzbbaV5LJ1VqWxKhTwfjvHnbwakZGsBYz",
  "key43": "4Kr8WFGzNnYj7R1tWN8vWJh3jRzdWRpqsZCQixgvRJ9C6jkqZAoa57K441DGebQgzbv266AFtjHdq4j1WviEELc1"
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
