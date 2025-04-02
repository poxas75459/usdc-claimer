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
    "4S7iJ8tadxGaP6DvFXvbhPfjA2ji6GkVvcCr6VumWsVNKW8m6utKqLmRNdEQkw5RvmZmKnSdhguMHyFZ2nBWyR85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gzx9hjHWDP4PiabF43BAFCwWDdDGQAYVtxiujAreBKFHYo5xf5cLDgv2NuMEdgq82BSdkCuEGMbPd3ot3HrYVR6",
  "key1": "4FPStLMpmYscwsjSR5FaN83EUCbi67fQyQ5ADRu9sLrPdfpAxVk9QakWWJJyPnDZgV7HvFRKwpVLqWaFB6psgpEQ",
  "key2": "5PYD7PLGEwZLWJLrEYLSYwxobjVEfPYatmF8qZnN4vjrME4fhyynNgtJa7xPQF5iMHU3QG6kVHQxQv8L6HEtr7BF",
  "key3": "5oL1ofiuf1UTFMikiqFD7LtDsjCodJnNLpXsZZS5KcGbN3SoraGtjeevpFnKhsgvRkAcDqfJ3195u16qwTBDrDVq",
  "key4": "44fHfHnLepCyow4uo839XqRXoX2v2hVPans8Vrye7YMy2pptuo5KtXnoQmiXJfWYKASCv7ozNeoLpgwZBncYct1p",
  "key5": "215hi2L6zj8Y7oHrrmvNDy6NfH3jorM9adY8nmiAm3DuwT41j2wgb3ADJP215igfez5h8oonMhtMioXxNVfM5ZTu",
  "key6": "51eQU9tevW4CVD1uWGae1cDbSkS8FLfjTJF3encMqMNe8YgqmZfjhiXS5jKdiZ7zA4N3mnvzexMKZUX2TfSJp2yw",
  "key7": "37q1NGfMsMCe6njPBjbhSKz8UPUaE1uYJCn7Y3orPNwUvi3pkSNpmNGRQKqpL7tKtW5Ak7o4nBKmNGnCNX7r7LNB",
  "key8": "2Ym1fPpehVpA6j2di29PikCxQNT5vhX9YVVC8fFUCypYxpCUHdFhS5vAV5Cq5SgtaX4ZPuYQgJ2yiGVCuBm9S9zo",
  "key9": "2DBFXh6i7ZEkzdpJGKQgH94mJtT3SSpyNWvX2gQTLaaTZ7ZoFbproUHZYL1a3RTMQ1Q2TV3Ch5adLv4wx9AjXBcj",
  "key10": "3WtNjY58yrMexgdWgoaQbHKRoMcCKh2FKQWpeyUtnfiRC5nhJsApHkrMzREGXEP7pxfuSLwX6G78FqpUBzCJZ8KY",
  "key11": "2xdJ1WrssdRtgKc5PpuQxDPfEypbA8AUAQqYz7DcuY1cwV2UwnhyWeADRts2QQjwvw3k2sMtU75zuDuGxVeZiBqy",
  "key12": "qDJnJVeduuProDf1oxMwxjGYXLgNqEYTvS6iviMnroSjKah8okYsHjrkAYMwZBZzuVaSGVAaFeSDehAaAUYVyj2",
  "key13": "W4pAxSaLjqvHpTP1c2JZz6xLSzfTMrbKnyC5bTTN4SFa6ZeVHof96vpHnGUsHwfP4sdNVADJawY6SBmMZESdbLs",
  "key14": "3ZwKGJivDxDQxSf6Gz5sUGBJAsv1bDpnWVVsuQpFGTMYg6FAGPpw6fiAmgfR72wzJJ1oSdmvCzHQsZwXjvJ1M3en",
  "key15": "61FNvrvy5v5b2ZkEgQDQawW96Bs38xN2MPBwXJAVc1ajCdHnhadbofKRY5EA1TkqVnfKRzHB9div3iwzMRXcxR3N",
  "key16": "3U9p97NHm9hc9NEZyJ5Dtvt9N8Bang3XWvLJLzE8Ju4AgSTus8fCWuX1EDdBh88LovGPuybtsdAfTqFB3JqnKovq",
  "key17": "46w64doJ9b5bKbeiRXhxudsqbcfNk5bsT4KqYwAKzbwd8dY1Qv3GKKKEn3CHVj7x73GEtmzKzxg6Bq341QLhdXzp",
  "key18": "2nczqGAwoY8aifnWdgECvDb1yXuVt5ehxCeVYVzmScUMnaqcieNLt7VhQSxahwhgKMCkY3HADwJN99tTtrupC2aM",
  "key19": "3Tj3bJaiNQw8CQPT3aJ2VJVxk2XWQpug4byAs8brYqLXF75S7eGwhUTucomr9EQ4z61CemyuswMbfYs8AEGh1W8C",
  "key20": "66YAQzTf4fVkEoef9psU2VhSqHfvkxCxRJFf9skbXW1k8i19um8EYSMkM7Tb9GNujw7EYt27epGRpYpwNQAaSBAY",
  "key21": "3YGQbxHwqtyJ9vFH4aKjfvWPiEc1nXueewPHzqH9YTPARc8A5U9xYFpY1MYUHVdrvaoVk9MWQmjfgPivTkBmuvnm",
  "key22": "3GY5mCFW5Tr8GngpcFrTs5JX116q4XPTqcLXN1kyhBj8xvbAdCKGfXKWWZMLHvm3tqQ7R7freTo1MnV1JB2hZiis",
  "key23": "2kqvjxfV8hr71VtYuK3majhv9DCoNYysV6GBgCq69CkG2PZc4KBxTfjc8ay8vtXvytgaLRo4cMJMN2HifnvA8nkM",
  "key24": "43qnH7ywFeeYAgofM213AcKdXijGpcrbkqMEWcDfq9c9CR4GKsTHw3T5hqhFdLjdWaGHXeSFeeUeqTrao2XPFZjJ",
  "key25": "ec1QQHTJiS63btFq8RKwqKf3NS69UgRMtFAB8WY17bdMUGT3AoqsBPhrE6YNw8aAsNnUAisd7DNeBsvWu8kis27",
  "key26": "2aX9Vqmq8k5M65SrwjDVbSBN4pkevsgVqFNEDDv5zk6GB6GjnaYof8ST4JYdvsDsrrUEyB4mftudAYYQMa794SS8",
  "key27": "4iizjRNCqW5zexo6orHE7oRPvzptb9aZoULXtuBFsiCdKW7uA5gYbYdxLcDvhMvUXdMNzMDro8bf8KjkQmxMfJwc",
  "key28": "4MCZxqjEohwbprFWb36iRSZiHKNoKUkk9M59uAQMqR6yX5DJsHhLqJjig7b95DYkrr5RRmWnFAsXdJmxNka1bfHk",
  "key29": "4hBrrvZPy6N5goEojuNMuEozPim7j1LdQEVgXJfJMSuR3Li4KrgMtHeJWfNezQWYrkb8AxU6K3U5Hw81QD5HkBdw",
  "key30": "5nftCaM6V2QRidBnm8tdMJL6ejJHKjtieTcANiUJd86UjiofUP3wrRVjsyzFik6i8xdGvZyXjAmSAzF2LZ6FtBd2",
  "key31": "2qfr1G8HftztsXYV7H7HNhtGxQrhqKrNxNqkMcL87Sz3f4niXeuMznek66FQptjzYEzi68D1Gj94corwEYMQjp3R",
  "key32": "2y4VsXFuWjcV8bdg5YDCXvcTdpJU2r6itsFHPiSLYZHnQuLSZd8H2oKkMUHjh7aFZDntRE65S7yZJBj7iamhEquz",
  "key33": "4zrafEgv5csMaSGXcxmS15r1BjCoEmHXEhkZ8zu2YjCZAB36fDK9s6vqhJzVW5HnAxVGLkns6K4gBfPx8A1CKuYj",
  "key34": "5aTx6uWafjfhGkuf3BV8hJxUoVktVQ3KyUy8DUfJCdwG7LWNoRPebTPdnsAgF2eJrixqZeEVGys75Pf256tfraH4",
  "key35": "2qQMtmYFS9yR71HtW1T5KGyBMDW9uJhttwnCY5RVAp94QHktVZYtmsBuTkfYsZEPBvUf6AKhVLtVi81ieJGzoURz",
  "key36": "3whVojVnsLw3AL7cvWgasjttdT8dqHiWLg6TVbvuD3aK7MuEoNRvS5MPb2TQuo89a63JWq1ow5fF1f67qp9uXXr3",
  "key37": "5WsvDQ27Qs681SarzwCmtsypaKrdUuAcGq4btnQBstbS6ueGHfxnyMWjfzja7baGfADfDa1MFZq7X7NGchwdehdd",
  "key38": "53z3wrsMvHFeXEamLRh21ABfnSnz6nDTy6N3V5R8St968V6uNQMsBXnzdz4GbBWSEvBBCtGYydTFnLgp3B9qJLA9",
  "key39": "4nJJKzXf9HV1i4qkkwFkkKphbf18LiqQv8miaDxVAwxgyiyJNrEA9dDJL8gbPGn5S5137pmtmFPcFEfwVGPFNRHy",
  "key40": "4V97wAvFgAxogCy57YogCHQtLUbkxqf71ZG4JFXPhXLuWieqCuNe6ABJykwdFMAxKbGf8aAzNpGAd7CFDN38E2wu",
  "key41": "5Ew1rQhMozGwZyxjwDBpeUxGb4qNhnwt1xNGSYZfgQETuNJy7LfpxL8fSLUPJCE36ouJMSJQ2efeowT6RJjac2Rt",
  "key42": "2B1URBo6myNm5gTviAsbBrWKgc8Z5s3Vzyngu1fksPntWo5Xkb23hbAhBm6sWwegUSJBnsvP15ScWPZZxFyAYt9b",
  "key43": "BNhBQwC9GjoWwKpuz8Ap9xa7FoeC8bjiiNkhSVSM7v623ydvLXAkp71h5TSGaX3F4qJ4PU6GgcLkuNTRz7GKJYw",
  "key44": "2g1D9v2toLhrUHiNuMbWV8HCQr48FX9Q6Qvpdx9MS31V9G7EVu4RgSsAP7o3h6fXiGHcg7z7iCRPybU6bUHkGw6f",
  "key45": "3hRodyDL7B3dm8n66jQkeZow9LiQ4AFWYXUeax97CGNopnSwdbo8AmnEucuuggMaqWCCC8CUpRfWJgfBpwszKDNC"
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
