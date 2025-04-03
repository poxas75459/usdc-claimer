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
    "22nAJMKDFagBbgizv553H6T469toyWuqTBTKhxcdTYPie6ZbrkgnekaU8djRzbEJrHZrJPWKwWS9NiUxUZTCPoQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbTVJVNr9Bab9tApMPt6rW5RgLph6dwWg6XrF4kUWHpGdMVhLQrE3zawWyqkKvgZcMX4uDTYdXBDqezMTeHaMnp",
  "key1": "5SjnZLAznn3XsR31b3fTgFMs996mkW4tdH5zELyXuQTqN7RJS9vZP1kJWyG1ga8r5mA5GY9rTeG4fMdzkam5PmiL",
  "key2": "5KJGzNGbDwmfY7gTrrbPUu7kt2SdqQscvxg7Tpvb5vcsZBCq8EKzgirKKQK7mLuFzJ7ij75j4CNuskHTgDAUrYrE",
  "key3": "37rtCF4aFpgAaezaV83nxET28BAHBDmPHCLYEFMH3hLwBiLh6kvDpaMrD1gJWBRyxBJqotDk7pTi4Yko8nTxRYbp",
  "key4": "2ByiC8gEm7T8SiHkqhqjBfzNKbSxuJ6xWwz97FgJTsdKC85n66P5Gj14wRZwen8AXMggkzqf29BfDVds235wAi5S",
  "key5": "4FE7H5zDAFxPKztXbtSfZJ5vVjuECGBsfHvvoGbkEuCpEcCAWfr2zPHWyEQd65YJbjkecXGE9S1UQsZTrZkJxtCC",
  "key6": "3bGiuFXM2K8bb3E21nUEPYBa1TwignLxEQq2ZCqZr8rZVn32DJ1BR2pimDmJr3M1D2oKiRSwi611c9Ghb9qkkYR",
  "key7": "2uWdgPe26MZvepDKkaj3HbeKrDhhrV28unXNi1ybzwqbcHW9iHY2gyu3KHJBiAYnxpaC9ByAdRpidQiETTTxTjYL",
  "key8": "37Sc55wmkjL7qJVK54TiVAH71LusPX2FCnxB7g1cEStz2JQHkk2eMrDFDy42uoNmnp7VVxQcXei92RSqryUnjXrw",
  "key9": "3qvqZLfUr2eGsr6FNgVJn5iBMtdwNywrgRsSAgdFK5gYvV9jqAQ8wz6r7XUC8bXqi9ya6dMdkt9simajsbYtaZsN",
  "key10": "4Zw8V5i4kwviaQSnfikivFdjw79Lvcrt2SDgxC7Za6nJQ931e9AoPJZkVHd72epknq2rbHEu1fTvR1sEbf23P7Ld",
  "key11": "ehcid8uES1tpimY5yz4iB5nsHE4CMSzUpQ23Cb8wtQczmi7i9XMkj1igzURXGVF1wZN2e8rbpYaDfHviwMXU9Jg",
  "key12": "36kwZ5Np2qeKdXWh5nMXjvzqzCPsSWtSzC8keQhirLw8vvTfPPsHS4XNSDTjx7NryTYEaLUzoXcxvLtZVeoJdEfS",
  "key13": "uwxUa8B6dzqXxXXiyU5P9puuDMh3ya3FJtJkR1vSunWJCARGT5yeWB1uMxbQ4EscAf4gytazZkBx5C35nfy28V4",
  "key14": "5d9ALbnHMK91BrF4DfF9feNHMLvnzNihgbGEvN88c47TxnwQZnA7XXjYYHkcoD3LkAC9gxUBskhr1P8hyUFA7cyb",
  "key15": "5sSss2Agkj4qfB14Q1TNa4dTd21LYPJdAggpiTXtJXPieLVj41KEDgS9bqUXC4Ug33dCHjVG4Rmp6v1qsNuc92n9",
  "key16": "5jQBzK6cNw4Uo3URz44mgEzQV5qnydNETZVp7CyBsDNyeBBbaNt2ijm8THLcmD39xPBMLZ5Y5TQcSQKWeh3pjT1F",
  "key17": "28T9eKJx3vC2tsTTiMkC9CMkQLMHsjmJ1D2rCzadLbxVVMzyy1oo1Xc4jbrEX4Sotx684qYWgShgcnYBv1oiC2GJ",
  "key18": "2s3nSPG7P7VKtnk3X4JUxzgFaBt61NRdwdJ4AteV1QTNgwSfbJkYNN5m3P2NaoSgdUmwym8gHHUMeqTcyC5jFiLR",
  "key19": "55YeTYhwpsbZm3SqLTwF1xLv1yJB3maEVhWYw7sx9KsNKbvtsefx7Hj7J13LrrkdpBwQwPM1KokVwFejNXrJUE1z",
  "key20": "4G7ng6iDbKKhYrYZn1nAXKuzCz5Zzji2zjJK82ff1YuhS7CCRnBzdSgE97gYJtyTqX6ixLyqgyW6FrEWHpJxFAaY",
  "key21": "2kDC3mNEi7QkMCRNDHQmw1ZAs3Rem61fYH4uXVFzyVFV6TjZNyN5QgKkkgY8q5vHejKS4oi9aZfGJJQcB6CQDWny",
  "key22": "4scVVLtEcYbDXqp1UVKDZjo8S15RELwapYyCMJtW1J2nRpvTyMZNWhCdZUbwFJmeth5x5JQ9WZEc5uCDubFqmmwi",
  "key23": "54KQ6Qv2RqB4ex4VT1q33edx3KM7ePegomyHqih4UbQXVZSn761UpPkH6s6YxPm5Nr1sp4Crigua1x8UZAzNRBBc",
  "key24": "5RUWy7EWNCiC3Jh1bMJKnjdX3WKZ4FJf6YEWQ3wSioXXY3tacSGKUsKcv6NYvUpcMteDJBZNdduL8hiLu3VCDzX4",
  "key25": "EreEQax8113nqYjytnoHWD9X3BoZFsrvWT8W74YJViNDQLqWLJh6CP9QnTWYhQKDaiKefTotTARERDLnn2yAVGL",
  "key26": "66oYf4W1VC5VKUE9BXwPJ3bq2JCZTNwcPKUuGXzwjDzKLjrWqoTjSCmy6u8o9Kwxpg117mj1BZDqLsHqfjqL2rUt",
  "key27": "32TxgPCGkqJ8rEJp6ENmpDGco3WzUbMsb9ne3vPtrtvEj556Bactrik4BQee75K9AfZ8SscUm3jqsNBurkwEcnRa",
  "key28": "XquzXroSLYXy2yadsfbRmagGkRQ7MexDkzK2v5jAdCkKGRWew2L9gp1kyMV1jfxYsvYjTCyYfB1sacdKzcB1F2C",
  "key29": "5eKb734qeWo38Bqr6hKewiFFojPAT8N81UwsxzfWZDSvjBeNvVqDR12QzZHzXzyBDwgedpxrbNQuFFajciThCh3L",
  "key30": "2S3ewptkwdUr1ndCjdbyajAtYr3sT5hWWqGzRRhpoSmfnFjFGw3fZd6CYkmtXruQmWXRAUT5PcTbb5NMQptdDjqE",
  "key31": "2pRZRfthobi5XbsMkpD8kvTMYHojrth1T12YS1cYAkk5sEvtXSfVWYtudVWZPFRUj9WHVajBTDVERfnioRAf1Pvj"
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
