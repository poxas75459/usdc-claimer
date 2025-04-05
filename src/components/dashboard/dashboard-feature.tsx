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
    "674T3ZUd3baj3E13jyF1kBMUCBWBgpFTh42kJ6hf3fuAZTS9sQqskDcjHZ14NAfyJaxj6uyqzRCeEnLJGkTBqAhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tqNWukYmfFXHZiZd2Db7ghLSUoWVKNzPZE3JC6etCjPrSfdVVQb6rWzweMTtNBjzhQZLqMY5Wo9CrG5z1fcQig",
  "key1": "U71n8HWJanfZ6tG4q2FD6j68KTVF63zbTrJ4P4Kwp6REiYsTQ6Zomp7MQubrRPQgnrqXhisz3J4Tzt9ckXQzWdR",
  "key2": "4sczX8yYFKGyVzJVkbb4dx6ee32xp7LZDuUF3zCLAWB7PxBvo2VwjqPqqw19XKci8usxcRhRUtrF2oiFZtDXJxVo",
  "key3": "2AbTPbir5v34R4QyRZcYbfPNnivBxgYuYDQKDLT6z2fjerNLYvW1y4R5MkLT7b1cVcFvZ8Z11vZ7wuo38fBMohJ",
  "key4": "2zaghwvRNthen5At4NYhm1QAysUpAaNGihF5hRf4ufuyUvbiN8t1qh5toCf1dtfX2twpGE7mXZL84Dxk27bTeKB6",
  "key5": "3kZfNV6aGFtV49wyJaqEoFDBz5vnN4pVqTuhKbVS5nYB7iTDNeTRtzCd4JZsgJDk2sWgbGDaa9HTFPPXoooNa8Lm",
  "key6": "3twikAV89PjXnbhJAf56HjtNVPja49g3TbCxYfJ6eCedegL9emnMP8VTf8cNugCVcgLZaxuHHMAzA8AZMqokA16N",
  "key7": "ZUPBRckw3HmQr8JUWM3hQ7Lp3WkWu12rmwx8Ke4mvpqng3bTzY1qzVBSoYTMTPNMe2XrWHLGJgXDvzduNetwMkf",
  "key8": "4AsqNyxYKgWAkG1Tr7G7jSWf9FnqiBQtnJa4dWw159uR91uxHMSTbjnfUmp1qTYZ2jpAwHPSFiKRWnsHZuZuinWW",
  "key9": "5gQJYPvHHPRx3M2zm2bzyoDV5Yf1PJCyDSQtCAhyB26GfcJDEuJ7D84SP7YYMWXDwM77dtZZ7fuq9QW4LpWveJ4o",
  "key10": "4XuweHJuGhotUwJm9XkDtrDE95onzZ4PaeyHTLaAS97MCyXf8AmtcEiY8Npxjdj3Gpv1LcsMPhEm9o4eNHVppGtK",
  "key11": "35o292Ynyq9feskmdXW4USRHiP23SeTq4xKonJGP6e2CNVALgC8NA7MkrAhjYar62W3RA6cDhuNxS4Xvarn4Ugks",
  "key12": "215BPSWS48g5Qk4v3Gt7CksxDm45DVPqbRUYt4AzQhcnhqsisaKnEwomawJPHhPv5FAqiRZ9TrGdKz4HhajeyH7e",
  "key13": "4v5RAijHvMs6yT87jkVERcuwNCiCQxyxicikqukt8k3jwtbjgnPcjCnMxvnTC8BsUHPVBicFaDF4irNK7mkAFAFJ",
  "key14": "2tSfehj7zpj1Yu17LJr42Vd6zM1ocdinQC1tMCSpf8naWh1c1kTYiMkfjPVaKwpfoU2q8RYQkZAaVq59dUZuUY8u",
  "key15": "RyCoowG4KH1gMpbsWcvTLUnyX5baGeE6w1x1wP7bWCHQEE3hpUBhwHAgoAAX4wC3fknum65JwCxCR83DzSkT8mP",
  "key16": "2AeWAEvcaPrVkB6CunRgG6q3eVGFZ7CREsEQSmsti7HGunMZcPvTAb25UsHViHU25GqJHYrqTqpRZnJ26Twt6sAE",
  "key17": "2BA5FpKGT73JVk9WjhVvfo5XHAXWt6FQmG8zzSTNRwfPpkd9bh75oKsKeENj6bw3vLBfaJ4va7U5yNY6Lg1GYugg",
  "key18": "3pVwgQY6hfK9taYLJqUPNBKqt986rXNiQqKbahmQqstNYvzXy2WTDPvHpeQpEihgnmdxi6iizSuNT4d7V1UiDYNk",
  "key19": "2XvTXBrGq5c2WJ4WjZEnzEDEXTD6pynRbNFxN5asEY8xsLC9bJtsHpLtAorPAv3mMDPNTvjpRWp9egkrhoYj7cKf",
  "key20": "2GPFgpXU3yXFcQBtsTALMRVeSAs76jCd3xpSkdpQJiChHBQRSpcc1n1b1zCjSyucYxCa3QZSVa9ZJGNvrZznaCds",
  "key21": "3WyEykMoCqhCdiyqm4Pt1bnBdFGmAYZkKmCZrLViUSfJGSF59cRc1MnQ96Kp2ZAfAJHKboiEqDPx2CaGA5vFX2cj",
  "key22": "3sD3e6bgKQSmNc7sFV6jeE74DM7HjHeiTJ6nMXwyLDFKzmTq7gYBJMtXwysgYWoHdiG5xtjm9gFjo3Gnec2zCCP6",
  "key23": "37eKhP2bZLJGHcLCxhZZf8ZWT4QD1hrYoBV4Bj7vUEYeoKPXXgnbV5geJmjQbP97KmuH14kvqtuuyuZf5hfkNzFp",
  "key24": "3cSY2jKLeCpnF2z1UfrcakruvPRV6bE8nbxqDMNPyrfn998iTLzQ2sWQMwKYcSvxoBo7seqG41F3M25bPDeKzfD2",
  "key25": "5BcELnKNcZGV29GcLPFeNndic4M3WnfCsfR5jwF9RKHh6V6Yq324m7R9c7nc9eNzRZwKteoUgJ143PVhkVvaiSJu",
  "key26": "4y1zJf7LxVDV4H59W2G63HzjsWs55ypgqDgS1TN6eEdR6DoovSFjiX9HgSkTLGEW2Tqpyr5wdPHPkxry5c683Nsa",
  "key27": "KrTi1eg31nKG8AJM7jTuA4w47vURh2ST2VwXj6bzHaLbRqKf8Fi4a8be6PGrYssdEB8wwogVmzLpptegCVt3sCd",
  "key28": "24e3jn5L3GUiRi813Dd2ubjpLxo2Kk35C1zYx7zEE9ux3aVvhoo5iWVxRLgiCyH4fuSRNrQje4mtvz5peSvrj943",
  "key29": "3k6dVPDDFqe31h8T4Mphhxrj3eemqbAZM4kMsbTqBPfgQVkzWS7hqu2nR913wzVhzuL6n1F1jxKtKNLsNKdgeuqj",
  "key30": "2EUHZkpsygyYQf7VNkWWshawVP1JECfmJkE2ykVuvJDWPntQ4evXg45KbFDZee8SFovfJfzvLLbNM2UyR7bKcF4i",
  "key31": "4QjkycbzkG4wsiSyZJQ8JMPcg6FQaAtF9ZKkACjKYEKP5LUAQPEcNrQXUewSVrDLZuegnrP4qRfGfBaEXH3hUyhH",
  "key32": "z1B2nSdKWpqMDemSYAQLTgVYmoWkYxodVsBCSv3c6vftqsRVgQ7eqyBd49UBcKg6rcckKZQmwXzQfZ5xVjVKprQ",
  "key33": "3VAwNqN24ujEcjNv1mD6vYsdPyPXzrj3NDofRyEXuWXZCEHN5L2Ydziu4K5hDHzX22MLGJ6kJBZ4kmrjsXoDRtHi",
  "key34": "4VjZH4SW2frZ3bAZp7Cbtdjy233YgVuAUe3wRyVcgSi17n5ZZmGbfdxettyCKdSajK19UKEBJK1ecY8UtCYMYHWE",
  "key35": "DEJjdHUgE7296acVYEAaaAzGJaZDi5NPFzTsNNZWBnWRbb4XJYAxCE38maQe18yuXa5BxoPFe699ksToFxvRS2V",
  "key36": "32ctbEY14isUW6FF63EYsoGN7AiZYRiDgYd9XQ1wivgvNaKA72xQkwssbmfEU2CyjJsKNbmuGKCxsoVW2CuEYGSn",
  "key37": "4Rzypzav1kszCzWFoAqF4yPLCTL9KKq7MkPDSRRZxwtkp3d4umq2iSu23N61tGckLkoc5XDNv7SXihf8XehXQGT5",
  "key38": "52ksAHDEELDFqCX1GVaoEMm3wih1cs8qd5arXN25NjfD1Z981MqcYTLmrhBfgxZ6UikFmrrWn5dgLmcqThZBC221",
  "key39": "eZfZ3GpCP4krezpNtXQzC8Dkx82Jxg67YJBzCWf2XLodWWh3Tr5UGGPDwXJc7gQkZ8a1Bd6d77BMedNSL6er5Za",
  "key40": "5UXyWSTwzkmPVByiJkNEhS4RqfL44m3qfWSBDKQRpzfWapRskzvXjCx2KTEpikVHZs1rDTmNX9KXiBsuYsCbtDCY",
  "key41": "3RAT4HFiHBvvx834oxgXQz8zB1xnJ3UWrMMRy3cV8vUpYNghbNW4HMBM4QAorWNzgnJkKmFtSfnrk7FbBiovLf1Z",
  "key42": "2wLBiwwbC7WqdZQArbudoNg5zKJE1DaWT4X61uesCDQMrmt19WnQ9S24Hcva8FbzTKjC6c1G5mQBtqBucgRCqv3C",
  "key43": "374eb3ez2w9xwicfeFpD2UPRyG8rpmNPvgjPioLvdop3sRbdFLMm8myX61ynqDF2Tugd19VJNZanjM2LJvHRznhz",
  "key44": "4HTTDVDAgMr82Tfe8YQycmk59jap7QLUSdKWgVnuwy6n8sXBuLqK1uHGVxQX8Nmp1cdjQ9HgwnSfdx9eWKdXrRZi",
  "key45": "5SVHYRcQYvLYKrAHBPcSDYNLYbNTuLWjxxB5iNzJ26mcdDiaCtQnv8kkXkU4vekuACeq3NdbsqViXgEzHrCyh4Yf"
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
