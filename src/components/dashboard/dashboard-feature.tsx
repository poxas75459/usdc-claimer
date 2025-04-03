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
    "3WPTSDPqGg6K8dHRSY3w73cxXXyZKkjP6GoxU8SHfWJ7VKspkdBUsQcumTMWyJu9CgVVWhajd3bZMgeKBpmAaWeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAdSueCDW7yTCjbwi3TtNB49dsAd26QbGzTnoWSFjdbzfiJFAZWjEBvyJCipt5a2VcUuAhVBEHuhKbcJL7obf6E",
  "key1": "4iLGGMqS1GVSqSa8kqD9H2nuyvqvRgu1AwkpEuPoeos3dpRuUpLMxvpmqNcJvp3ZHabw1oZ2bg4vgkGtUQve8Fxz",
  "key2": "2ETLz3VM8gf7bnfVa2uNLbPLPpRgzdpyQwyiBAZJCU2Bvc7j7P3msvtZpjJ5sLQJqbqbqcZAAubtoGkMQGzXG59h",
  "key3": "4GBbMAbX4xUxyhBhicxUrdNXVkKHkGKvBCp2iSktdTRk5pLAMXdTVzdaSgY55MqGHn4XrvQUfr8MWaQ2kFMAPE2",
  "key4": "2TGdHjzkxgkwbqWWQTJ5oEW3eNJKYRKXBiTWJCiz4Q9LcSbsZxYHQNs5Vq2nxoxhTuksrEvXyEBKk4JFgU5Y6MJS",
  "key5": "3DyADrpGc57bL9oyqewuZepqhgGsqohFHqWgFhmBJbSM5UTodccBR1x9bvn56jk8QR1xHPLM81nKAiBVnE9HVwJE",
  "key6": "4b98opQUFXrteFo1cGbfwfZb1FTgZMahbm4pMZjBZWmjjfwZL9XWDarsB3N3pnRbsAMSjnvAFy7YmuatMgPFECkj",
  "key7": "5wMQJry2SRMHi42YpUXnUJBAxrHiGZrNdapYD9X9vz8FFNsmdq1f3L17E5sWCeAcQ1WdSXZjvBiHFD2jWtva5FoF",
  "key8": "21ydD5PQjqwU3s2NujBdW8wEcxBMixs6CBJstZyvRQ1ZxJzcoQDjywvHpncJrTcFkibGwAsBm8jRMCxpCc4Utmjb",
  "key9": "WoSYKNTAncATPbRaCmmGxGYPY88zi2JiiuVoPDcacAwcCjknoEUZFsDU3wQ7HR66E4wzNh641PEX2dAJfU851pH",
  "key10": "2cdVLaSQsvUySUEi7YZxVYcVUJWa76qYiQfv1s8m4JX2G8MSjVbtB9kN4uDbXTjAt932Um1Th74PdNzEW43K9o1z",
  "key11": "5rPCUFXnkvtKWDhVUc92fqQfvUKjgGTun86YdLBvuesyQkDxZG1oPZ6rAWtzKwAQojFG8yoXmZiuc8PGdT6B5eV2",
  "key12": "5jYySCG5ZzqKZL4BSK5w5KiCKq6ThBdm7eVPLn5RWdPuuBcdPTDpRpvwVGsm5j7ektuLb8gqyQPvX1M827y7iEv1",
  "key13": "3ciWw7LvRZM3FsweqBhukeULuupTt1k7Erkv1oaxFEuRXy9NuEhVUrokDyW8HTUfKAqnm9GZVKFCUJXadRCFRPbm",
  "key14": "3BiHZbGe84kbqPMPfXpu2WdNyGRx8d8dESJCdjfC4Fn9nmZqJCJmBmpV2zJzrn9WnaSAjTHTmcP8KHSt8CnowTzw",
  "key15": "3N6ia8tZkHCfWuWex96hSPG1ZqQ5SiE4WxJmmFwdMZbiS7wtegrawcC1vTsG2RhxETBM56c23HcEeuAZBsKjHXQA",
  "key16": "4xkwvxktrT7psbwipCxbUXyJRwp1NibzQPExKTUPYgXpfFxdNQiv2gsE9B6fTJ2kHz3srLGB6UdMxd2byWA7JX7g",
  "key17": "23ceKG6Bjsb4AD6wLqaWeQVACLsbGskLCfiS5x7mHGcBVEHrGtBYJ3qypf4EYJaoAe9VAuw6KehW7HSd4xdzdaX7",
  "key18": "4uSk6dGE5w4RtFYZNFL9hfVJrLco8QPbyoAwjNJet8mxEsrtw2zoq2tWAszE3f7JJ8WMPieDW7xRmNYKz9wow6T9",
  "key19": "UiWz8JEr4B42PVgtytBr63cRyPoZPBCbMVDBKJtt5uw2MrACiuQ1LBcv1p2bJDex59emSGFfYVJjSEvsopfnTfS",
  "key20": "4NwuH3AtjmnUDdFXvQdifoUEf24toLSWQaCrc8EoMWrpjY7woubP4s6v6MdA3aqjVNa7PL5uvBSPYwNXndYDQx1j",
  "key21": "4Rx2n7RfBenyZRb1ZNEhH33oAzXS7vtW11jafVyERYpDPH7oC6jBkJ5Vi4DY3pDyo5qFBmgtHEjn36TLnoYMRCYy",
  "key22": "5fazAE3YtXSGCQrWCgehPAUNc6PZfYYrKBYWaVWzp8Nunen8hyeEwq2JEyhqAEtDiCLmn3ayceui1U29jhfLUWqB",
  "key23": "2dW36dJKTf8Grm68QrVqUQExFwc7KvCFHszqyqHzWYE1vE2QCdMK4CDc8bCpb7W1bUC44tQeBt55Yk54kqeui7mk",
  "key24": "26rcGrZHCWijur1tXWekiwJ2rqeVXi59ev5VXut7nyPhYnFrPTeUFnVhmXEpG3L8rPdBQP9Zsj3Vdn9dtbpMPcgd",
  "key25": "33DEZkLgrL6HufzDuK3vhcuCEKz1PfEpjDKp8YR9S7FryjfvjgxmSivFj8UK3UGietTt5dhNTwhHqz8Qgsvhi3FT",
  "key26": "3AXHrYU1UJ6cMMVQoy1Qc3k4kwHNu1S8W8HCbuZ7gLfnroo5JVn6rRNAoe7FS5Lrq4QXauz1in8GZAeJtk91qX2s",
  "key27": "5exaFg1DZq3UGgQuDJdaFyHmkpCHLUsAwP9zu2LgjyU9JDtosudVAov6C9p9vfSTvgniRmyVpZpZ4NiBNvAQCRFC",
  "key28": "UMg38gvkPnGLrpSSXKUoqU2qgsmUCx1gXfuCqvxAFCmWLGxzY3aqPKGXRgicPakNWJK4LUiTZT4oaNMnx9RjXP5",
  "key29": "4PNiN5SQs93kKk3Nr5pEzEeq5gbJW3yHbua4CK5wdWbY9TnhgKPMBpTAjDGQ2qGY9DnfgwRBrgTT7HosnwB6oCtT",
  "key30": "3as6iMz2jxjF7QAsojLKv1qUpMG2s42n4itVQxGR2DvHA9fntsaF2pJ5aGoivgmSqYM9xU7Z1rW32L2JLnDnMpxr",
  "key31": "3QECvsZ7JCuXGFQudSw6QpCxCdeDVc9vezFJj9sg78dx1q8wULMCXUv81xTWEWvGAiCZVGhDwWrMNW2ACKqnU8Sd",
  "key32": "3ZYBFz6n781RtobDXieumB2HcwiHnkCUkfMiU4DuPKkoSrh3a5u1FEFRBqinfpRNmxdRwZfmSkPmBxw99gWPQWfJ",
  "key33": "3PQu6VQrR6HBq1UDd6bRoghjmWKyDe9o6fQauzaNbQK9xyvoSRdmQBcDsrf2i8qVLp5uSGEfwaKZUrYu4NtZgp21",
  "key34": "2AssM8Fhv7YSqjFCCMM9vfFFxpwMay7oce6V47x246va3mkuEJzQ9pjJw9QtcvuffEpJSAiZxXyYNJddPYicX1cU",
  "key35": "L6oQReuCjJRtWzV7tKVc6ZMxBnAG5ANhNWc6PYWxCXeGacfynAhs9Am6RywvJr9dUC9k2yW7NndyKzf6eaeKX96",
  "key36": "27feFX3cjnDS4tuGvuGUgJP7nofaFwiZw2N1dfaJhHzKX5ta68kj2ks3NoBywV94a4nCcAcnWbwbF7Fyih1368rc",
  "key37": "2R4qACureBEiWJ1rY6ypo4e2rj5wXb3aDPh8ABaX8SKijrMhCnuFqdbTYGRGAeqDYHGQqGj2LMBrs1dtd48TdtWR",
  "key38": "4DA1zHvMwYByrma2cvqB9RNEREx8tJV8GoUf8GVmpZv9XeoLM7wXSw1TrihBZaRK5JDbeWEeRdLatoaojm7Z1FWY",
  "key39": "2o31FgYKqs7apx9AZPbM7fCDZ2GNxe8V27Y3ku6NDXKqcgnWtVGkoDmnXi44jjwrketC9wWMyH1XrERZBfb6UvxD",
  "key40": "5wst8sptq9tKdZupekujp2watmksuEhgBnzhvodw61uewLLAqh7uVNYgGntb1c6eiLVUc7HKJ6cBhazJ9HSyTx3H"
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
