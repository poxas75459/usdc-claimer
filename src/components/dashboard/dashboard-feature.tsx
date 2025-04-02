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
    "3gxawEJaqiqNYkecWRuBCejkWBnY8iaBBWZmJd6zHKxq9mC2WrLn19uKuXmrz4XeX5GgQXyxC7bRLN3mtYKrA6bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8FQnXrJ6FJqsUDAV9khTSQD5mvdUKFNXhw4BtvPdN22VzCtRKx9VVt1aLYpvDCQJJJTu74QD2TMJQwQY2hz67Y",
  "key1": "2akLBTcdBDcjK3Yrtk3SyF7RoKvPeSgPMTEhQhnmZvLvn6S8Q5JmtWY5Z7LdirwT92ZokCN7Y6Y6pp898Mas6ZwG",
  "key2": "ZkN8iSJh2YYEF27k88LR11ddWe8PES1sZfN1QDVeHdtsbv862LBKut36Wdz7KYDKVGFbrJMXXDZHe12HRbyKmko",
  "key3": "2ntiTQ3RKo6VsVVc5tkaeXsHuv1iAdoDr2szBovZvLCSYHH6Wu2oHuyctaWb3kdWNc4itmGuzAop54gyjhx7UAMZ",
  "key4": "4awVHXcVSwQWkfhwQasWjBcqvviPUM5dZ6E7ysNWyfFRsawobUdo9Uj1FqdtYffTYLL4APmg1ggDvdwNeBbQMjkU",
  "key5": "qkqbNex2QKb78s4qGYFHaTSEAZtW6xk299etwb9hqe4txPNzvsd5b22ehGLfoXLt4Kx2AXGWR5fbdzj4n6H3zvU",
  "key6": "3x6rUuPUWjMcdUhfbuYjbcpXLjthkd7xV4GAr3xRxYVT5E3kkKU9zGwqxFMPgFCvofdWe4YuZrZTWo4SyJEKBC9P",
  "key7": "39C3VkW8EhUUcbsWV77a5PTAXS69beXKA5RcYCQzZz7D6UwEh4ueMoQ3nEMgcZG1L8gxo752fKP7UXcuFnfCuxyA",
  "key8": "UfYiJGegdp2tPt3oJw8SahN1sAz2FPFCGxea22N48LXpzgERjWuG8xKsRApsa914V8ypHqwmQUSwnMBnnMakZR9",
  "key9": "64Fk4qWMN57wLCfdrom29pKNmGacRD9KwS6Muc94S5kbbmyfX7MBD49koLq5ddDkS1G8k62Cqf4iGTvCUYHaFmSB",
  "key10": "2F9G2ammoFJu8NAhaRXbPyc5FKgFoUFqBjnGjTZeF3gMHvAxRQs4rir17zHVnp9ED2FEtYLXn1FxJozyUiVD5Mqs",
  "key11": "3fG4t7gMswX1T9y2ayNxe4u2XR6r1Di9usC5r4xJ2HZ4TPApB4qaFUkEjVxyVMQc7TVxpWMbw7WKd687FbVcEdHk",
  "key12": "25ogrigqKzwejW4oXD4NQAQ3NGxQaooyu3Z5AMDdhe8avoFSUj8rCfBKbmqpbESgEZrB8uKMP5JR4fLvnehFgnGw",
  "key13": "UwkrMbTq1g5bEf6vm89fUkYLCM4nihNzJHXoV1rDmULhrJoTLMu7JpnucoRMB3SyC5UjufaK26og71ovHr1ZKRx",
  "key14": "5nM6HD72sUHEa29eWphBmFnGZDRXrJxXJU64HNfVbkCUATWGTsSZhD3RGoWZSqU3UaHvcnJLNMnj3n6hSHyUjG4z",
  "key15": "mYGo5qZ1p6cFGgaHeg4rwdtEvN2gcbnvqVCxdvzgQ2MtEzo4D6GAAXwVSAA277SiL6gYjUfBRdWL98szBESZXUs",
  "key16": "3ibPZp6Xi8FYYV6C6NKUSfADsiK5KS3J4c1s2Z8aXJ1EDJiUcE78dbG2dNYxfVUdinzi4pnNupFTX1dKdQBaB2jX",
  "key17": "5VjseLrDkaegU7n7Shj6HbuxddXEnKeaQbobpNvtJGmsgXcLThNdyMb8yDmToMeh1Lfj4skjMtr8bwkBsoLZ7BJc",
  "key18": "3ac13yBkPa4sX2hnfGEYZUuk9Kftf1QugrRtgj4mGQs5K4d3fbAdu4F4XfZAtTRvLRSb5yPcnYQP26MbktSu8z8r",
  "key19": "amfwToyqaJ7KphuFzNKtuhks8ELfJ4tPYU4xiPbJv9vHzy1YDLxAfndmuWxLnq3Gz8JAUApDDHbndN1UowtLw5R",
  "key20": "4j1mukrdqujGd7npQYCg4n5UF2n5mn9YuFph6zEPg82U1frkxpBWRzxUsbx7pTTtqnyR1L2WcUbJHbXTnB6bJdT7",
  "key21": "3nvsB3hpUcp3k4L8WYRJCJN35YSUphMRqUq2CbiYks8XboNEtGyWWdYLowRdDZDqPGUDwBD3U4c7PBxtnqkoHGJr",
  "key22": "5BgaG6ycZS4E4CT2rV7uoCYb4a3gFVPFFFaB9UKJZDkx6o93oiDDrQzU9pc5Sk5Khxnomy9jxhqaR1untPAw4uWs",
  "key23": "4pwRMV7axehjRWedoB41qK9ze5967G52ufH6EQz4cPjUeAMCc7DhxNw2e8gJXYF3jY1GazpS8uqiTSkVTKCgE8Qy",
  "key24": "2BpDRNd2GS2n3gVrQzrKAqKfmWeqQ3V8KEAaYddJowTJp6Nxvx47fL9SVja5v3xW7P1J7wTNfFrEmthATKYz3Buc",
  "key25": "5nbBDWF8Lichssvi2iTDvB1eCyWqkZMGUWVh9DLQPsCQpnLxNJgd1pN4tXsHkmNdcGxv2oNBr6BFr7gcZgyeEiiZ",
  "key26": "3gMh7VVQHmXKyYzGrxCd8STBAdZw6phpuU9oqvHDWLcst8QPpR8DLCPuUdSP1GZW1zQjVq352gnrWFYsS3Q9VGF5",
  "key27": "yVSwiyptRwArqEMugYnzsJqsyTLHVdAb8rP3tggjKZVGddLqCnqNU8oiAT5T9vwSZGzFFmsow6NuFY9o8efio18",
  "key28": "5Khb5tHyMDkZeAmRyLsnKMHEcBWQsbyquRtQehygjPDRj6b17npTN2hXiB9Pxw8mPhJp3RSFp7xABsQdo1WVhQir",
  "key29": "4dzjK3v1u6jUBiy2drkDj9NL7GuRe7d4FpJ6GJ2rZyzuanLmrgotkgquNR7RfC996ADW4uhE27J8XDCNCCnYkTwF",
  "key30": "HsQZtiohNeEWW75oLnWe1pGxoVMkP8sWfxkZVP738BsasF7TJfw4upVytoe7F5G3KyUzzi9nncaTezir2jgWBp8",
  "key31": "3s5HqJRvUJDf8CdfVt8TaHW39AQ1dFFip173hNFKWNpgC2t6KS8XJ71YX6hyb9AvyafLKma7Wzpv55nP1kbKNuhb",
  "key32": "Jf9V4hnyJcVGPMELkrBJasA2KHGUnfR34e8YZgjMs64gzzoPk4jcH8gsP6ppyWKAKzjcwz3ZrBdAfuZL3Lg92cF",
  "key33": "5i45EkLnLSY4nbTYUJ1dC7jVyg6tBfHuCyoxL8s2eMvTjhtCgiCsQeSRSxyJSt2mJgucyHy9QNGncAQBDQ4MMvfc"
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
