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
    "657bA15j8nr3vJ6R9SJsm5KZjWEX4rnPD1xsFhs5r9qm1Pg512HztXFowSWnAt8Qi3n2uYpFMj3cLZEtHmQUMPae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAftDt3zNamh5imBvcdu9y5Vq6xjPNmK1CB9WuFJwEPJ3uS5taUYYqfNJtt3G2SpYpLxqmg4WcCEDQHTwxXxKe6",
  "key1": "2bcPo8vWMJYHCNECGX9UYG3zsXDnCntaRHNuWsVoAnEVMDZ8eJzJGQs9MuXadgBoXsNR4XLgvRSG1tYM6WuuNbT6",
  "key2": "4KU7VuJksUT49t12jmiDJiHyyA7srKsHwZGnG9nRagGAo7AiCaYqUn7AGpXdwhk1Ft2bq8Myhsq2Z28LTaPqTcen",
  "key3": "3Xpz1fgAV5LwAMNhgTCwZ9NmhQcA4tABs1Gy3zimDodTPnMatEjAHCPUs7NcXHqMoJ3criM2ux1xPmD8ZAFwWpL5",
  "key4": "2nQft2ZjRAufnQSXT3TqkYDX6v5vAHq49banHpnoqqtRhtPYEFDLwtuW1rZhuSxKXf6DJueRjyDLTSzdNEETgnxJ",
  "key5": "45rf4dwUazDqaTCGEzhymG8Kh27xVsrtjA8vGwiNYQtwjhozxGUfjgv3exKDWdQCBGr3FEMSTYJk3y85m6KKYycG",
  "key6": "5YnmC7EafCNmyzDrTTjR9FQ6iCMZm3ZnS8dCpFeico45XrkxhLU2BjoN7ew6jiuLEXN8pF8HH7hvDmZ7PqGUpKaw",
  "key7": "2cUSxqx7AAJemjvTsxfw8ByURzmz8FB3jY1SXAFeoNbDMY28nAxCUK37vwTjCNAU7hdc4QRyQCh6rRUvsprsvzA9",
  "key8": "2HuKNYFHpQgHqySttdJMx3y676XXvuB8cKhsEA5QWpdwQvHPTzcDRLg8SRGJ8Kf6qYrk5SwLGzHHeeJej1BFsUyA",
  "key9": "2crij9dWiR3RgXqRQrM6tB4bTLzQ7XhHubXZakUmWKEzAcY6A8w44cFjWLSmESqfYNfwunog4ntbByPQB37W2zX9",
  "key10": "2na6UnHvbEFLqgFbdL2nSsSMt2rDxX6mDrNdYF9ip59vQLNy4NR8p4wdU7Ti9exU9H9yAo3sGUhKtGFrLZe4AXGZ",
  "key11": "99Bxr7ksxx7q9v3icdLDN4ArUcMXuhxiQdQPfTNLkLWZ6LVMnDxKSdzTexD8mTrtDQnK9zhdUhJWPZZzt47hknz",
  "key12": "3nkfBVrgZc1dwD4jtYsSuV5fpuxPdiNGK9tuwM8jw9aASoT4JeD4cRBBH7oz2yALSt2fRuFdWhqe9Efq6oru2bvj",
  "key13": "4oxwcWdECvd6pkWyGYYisxHEX7jo6Vi8bLpopkV7fMNWPDz8TACY1isxg8EwjQtQ9fGTZ4qQEARShn1cTgk9aGCh",
  "key14": "2rULbZbowjV4Uhwtv1PcFVwguKUBCQcNFNLX8VymWroNVnxiJTEhd7hHsrrwJwvGD4j8Nv9oNNEv7E2HNeAgMzpk",
  "key15": "4aCF2hSaJKUTSre8xd2jBP87Ar6pgQp7o8oxBwcuuYxTSQuac3MimUS62XvahNLMir3wJwGXeVR9egeswTKXYVLa",
  "key16": "iiNX72hjj5B9V6CHuP467Dh381EbV43ZLruhr8o9Fu2nLymMKA9ZsAmwBX7jMqDLAMBZc8xySsDyWKVWfXUQ7Fi",
  "key17": "53wVxds7hciMKFot2KNPHpEujzrf7AdZPfdTzjDToCL5Ska6Yph5DM79FSm9PEJ8nWzqbtqbz5NKt9eW1CLhTNsw",
  "key18": "2rJRcr41vErNXK9njm3H5ptRMaDwoUPXhBB4KwRmrWjXQWb63UFaCe9riyyFEyyoxBnwAVRdHdSqsmp22jrP6hVd",
  "key19": "Bk5qStrNkhng7FPT31q9isJcyJZ2CG88KBe7HXpEy2s3tvLY8iPmtq3qxfoUNPoQ61ac2kwkGBEdAYGtfBn7L9Y",
  "key20": "5DFN7f374Byn1KCtcm9qKj8s5k8Vki4DAJdT1mrqRGbi1fZAFBCNXGPXxrXeSGJuwmu7ELNJ53AmU9zfx7WDLkSX",
  "key21": "2MNwpaCqjykbf6dUJYxZEx12i8ebeKEMSzV1fimxAN2RbcokS6xYRHMNWBgoVkU4u9BrAbjUzumQVBrHCmK2maEE",
  "key22": "3dnhpgcf56ihppQbSyx7kj6eSPkUFj2zYmrKo6AZHb7qUuBUKz8SJ9r1phiceQPS8VtCezz1hekvXkZVp2osQs75",
  "key23": "4Jvx6vsbpFJnrbtVcWJ6oxmXkZCyfQDivSmA3Ka7QEfaTGdQFz8w6yrSRLZxi5NrN37cyph1sszzn2HA3FuJosa2",
  "key24": "dbzKzGm3oTBr3nQhaTG2Tn3M6SqWHmmPMguToHb1Hgt1ek6TUCT88aFT4ggwcJVLzwb8F625XxpEtzjNvyN53Ek",
  "key25": "2kRqoubUR8fu9hmcwSwYASHv4Rz7LsYABBUaAiNQkXB9oNQbpBnQpD5T8por2Vt9hQqySxuk9SAEGvBCmZaKocXs",
  "key26": "4PJrUznLpjZzjxad1SszZTVU8CeBGA9ASiVBmHcoX4qAzg2EbkAVHk4uKfnYPAMWTvfG9gTv3oJuyJstBRMRKerG",
  "key27": "5a5yGUUSuhki6Jgeoz51zWwjs28EqCSJ6njRGPDN8tSSNsVcqNvdqxsBUoEGtp2mDhyxaYTNDsTBVT94iYxdC4vE",
  "key28": "4yCS6ytc6T68UVKhBa4foDrNW54V9CQa41zyAtaMd5H1G3FQv4KQuSnndqVtzQjEqXnCAZ9HSMo9bj8fCxwyyZdq",
  "key29": "63SW4Tyj5wPKPRzBRWUnYJDK667ire4L72DmD2gr6iqA6R7ZsHEXbhWf99E2CjGiVmhvXWZMc1WzbbeSsRVfQxmw",
  "key30": "5maUJt55TVekg7Cn5RYmbEWrzedndG6sikLRBNZ4W28JGmHv897wLqpbM6VunX5Fab64WkiKvo4ukBauxaXXqjMD",
  "key31": "2QresiPLarNnN3FwCQiUNwezXGkS99AuWuNodoki3VQfNioYbq8ffpNqTuKFKySraFMVZbYcxMJ4ub2njSMh6v5M",
  "key32": "4qrk18ZkwaJxTfTCf3b7w14iYJMJc78YGzgLHVdKAngvKs4S1kuhqxWN7tSjfyrShWQLDvjqk3jUVhNrA5AYDqbC",
  "key33": "TT2REWFkyfMNZN2gQmq3DnWy1ryGFsRLy1puzxHeYxfEDtgHagRX9rdXHb59UQkv3qDhgSwxhxkwAh1aN8WpAEa",
  "key34": "5dJvwFJHXQiiSSa24v83jYz13WpGkk7K33PJmrfEzYTfg12z3JZqVdWyxRFicNXu4Pe74wQPjW53iiCdpr8v96sF",
  "key35": "3xnF5GGJizZsae6rph2GtA6gATo4PrK3AhnegBGGC4miSkzDPFpmh7v9LZ2c5cu9ajDk42qmonjGSUPShED4iJk5",
  "key36": "n7Geq6rLSAdFofMgBUMWpupHRGUbRzfsjYTgzKQtLigy9rBSgsSRgVt18cNiFunjmjZ2vJRTnLNMQasQJo3xFCQ"
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
