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
    "3U37U8r9pwKmzAXHrXCkjdchmdqMqHr9ohHfk71jtd1xEyv3mAaSkKddEtB86iJURBQpx8fprHvmGv6K21SiQVYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRA8bMY3Q1m97EjJjrwfHtZoPsVKbz4BxThkFKSuHDHjxjj1BGQF6xZRLdaBcdcTR9X1ScUFEi8hGj9n58DLvE9",
  "key1": "2xVzBo9enysMroXqhQf2BsqVt85fXRayXxeCtT5gCmMdzGg7xFq74ouRq7SjttR64QEah6veEQSKsExSGjn4rSpk",
  "key2": "6mZY1RbBSobo5br4av1GV9fmWjTgYfSf7qp7ye5xnoD7GEjnhnCkpHYpHEiozf4Fe5RoS539afHUBgpC2vvSwcm",
  "key3": "2bxaQfMfUByiBFfZXuynV4sEApCpEkiiPowUQfGsqHNUetvtAvWGEf2SepWXCQ1PL2aE6RK9RvuFoRCQNibGZuBP",
  "key4": "SXEp1Mia1HV1QvjsUVRn4ixt3yG7JtxiLw7WKPMrYobggM6F151kwPEyLssaQThVXPsJAgAdgtT6XvtDVKCa6By",
  "key5": "3if4ZgrfXPCxT8rruzQmpVa4ZtYMKh73JnxvrNJsvCUjdgMzbyQc5obuh5D7qJSu4XSwHAzaCAxxkGZNKBtfYkuA",
  "key6": "3Mw3fuXLaTNuaeGnBcZyV4Rg5zTULPQXzmqj8nZGgvaSTb7QWzig14R11UbkjqreQ2NTgb6d3NmMdxQeTpnXXjYQ",
  "key7": "5WZy2C2x4XxV9z5w5BD1wNL5sGgmJUw8W7n4qUniUWhgoESpVxuWjmTCSBqfFDGATeyGSfzccdvF66oJqmKhbG5n",
  "key8": "55nJdhXLqLRrCRy5Vox4s8WL2CdpoYS7jH1s3hGEaLBNqXrjr3yffGj4jiccEfMEKfyqAisqjtY9BsdsH4QYkvNT",
  "key9": "5KaxSS2zkS9NQqDdL2nYvUdQk8EBm5WBrzZfDJgoyf969fjGfaCHwzAZAdqThpZGuUK9qcmsCxvMHV7NZKAnwuXZ",
  "key10": "2frCUhADDfUSvc2zAbv8PyD4SyarvstyG3jTfTZCAcuUfxo5eZLSdNYBih9YYot3BqzqPoQ7oSZ9gDpTLS8eKMUV",
  "key11": "5SS2JigX5YHAPmYyrtk3WiW8Nuk1ezRXAELxX86bvBqcPzSBJeCXPR6Fhc6kgAoQHae8LdZFzRuq4NppwEPRjt6k",
  "key12": "3bG5jqFN9Qw63Bg5t4kmTtgQeRGMJ4v9TXbfheocXbh5dfJPSDk23K5Z8WJynonebRWb4g7UW8wAWVD3v1bHwXVH",
  "key13": "3r8r519bQUJWxSQ9Vvay8mD4p4DbH82tRPcudKdy9T37ncTFZ9g6qiuteTt4BucE7vZRpNj4J7M6SQPhZUkSz6k8",
  "key14": "3JGGfmL73xb5pNk5TXgxYrogsLct5BMJkZnrKNraM2MwGnDLyYEYWtkLggBQrqSTVfLeiVrzhdJjB9CRZcG6wfuk",
  "key15": "2amn5iL5FJDh9bCzEUYbxGfQbr3p6UEnicJUR5pZxZyhfB8io1PFd66XUxAwYWLhfATA8LyXDUJsPQNTmdNxWCcM",
  "key16": "2MiyS8pHsPQV3B81qCwoAMwzrXNKbVQdnJZ9hvhPJKRwM5MeV8ZEhRp6U6wpBtrAqeZKoCimovqAgf7RRWyCKjaz",
  "key17": "63VMhAxuUW6CLmLc7eDowDKLDKevuwHsq2Gsyrm6cJ6KgwpF5piLfi6b7Km7YBuC6S8SCaC3FX5TikF2pZGg9odL",
  "key18": "21nFh7JSKrmwCNtGiDSb4AgN3rP2HuL4TgWnU86ac5oqUaJwDfQ8B5ukixhgmvSYYXks3CQvZWfnuZ9buHjNov28",
  "key19": "41LzfCD8wcAqX7RdL813VL9rNvFrZpjfw9BDkyjj6HmCQToihzjrkskbTKVCaULBSxVgXp8SpEhQWihCziA85DBX",
  "key20": "56uMa1JE8nBA2unXjHzEgCF4rxw6WxDThEYyqykK76ZgCJByDgDmb6r59KV9wYf2ZjVvVbCy2j54QERYFEuBzavR",
  "key21": "2vL7DFczb4u4LpV9b2XH9RwubkJuYxFANddQxzGibwmaYsBMxWsXqCPtu1osgWJ4Aw7c9NkungJshV8zFSdYcnNh",
  "key22": "5cZxrBx2gGrbvqoboXhGvDFfKQmdjLvnZYLv6RYrE99SdVtwibkyFvipBaVD7funhYxB5qVywZFVMQHtnTyz8q9G",
  "key23": "5uT79W9GGQmYySghmrcCDvSm7mVWokX1NzPbhr16E7dHd3b2sGhn6WMnGh6KTcQFy8KiNGgda34rUswUzxyvMboj",
  "key24": "3qtLmyEk1bxqj1Xtde3RJcrZaXVuxNS2fApf3i89y4PD6b1PkkSMBDPHeoj4m4jHqi3dZeDb1VbbTRyPhTWZMkWf",
  "key25": "4FkWSJH7EyxmoMDqE3oCT5pMMnY8iQPXEJvvTUFgiegjy5wyqGczhgqwPJtg2hUjpkR9t5U3P3aPoquvqvorX7nA",
  "key26": "5zRgyLsQ3J1WtxcozSy3sSuXagYpvq4iPZeTtFZPGZGvbapTwtAsk2hcCxM7p142ZB65mCAYLkBRDkbD5Md7Zivc",
  "key27": "2oxWAvTPa85d1qmnn3oJEoiFPeBsN1HfCD3AgMDk9gFvuitDnyPi22i2HktS4BWYiimXzAab8x23BV2oNpZA3SQ",
  "key28": "K8eBxpKLKvLQJt78C5wAREcajXya4xThHprSwmcuWqMbWXgktLvQhBEmi4Ncs9CwjrD963yBWpK92CmskHPmuWm",
  "key29": "r8yoDdyoKB75QJEVqRmMpqoGUGSvoWpBSJwcdncwDjAVLTXf57Kq6v154AEyyrZJxxAgApoD2rGyBU6MQ3wJD6d",
  "key30": "4N6dPRjXp3JkR45mZKZuLKW4pFACwvDbjMwD1o4tENM77GGzG7pbYeGNYE4oJnGdbqhs1E1vNyzD1c53doB6MEKg",
  "key31": "48anzZyxWoumHRWPw5SLKRWn1JE5Keoyf6sdjfZqt5GjrdLCUKn8wHtBbTvHm5iCPBa1tLJbhC1JXZf4n4p1QCzD",
  "key32": "2bYJ4Ez3w9nupfhupxG1rtJFpHQzFKved8cXoQzCNrJ7ke4PVaKSPYatBabKUbp2fdJxWJfFuwANEStQNwMMrWJe",
  "key33": "28Dh7BCREXUUg8SYwTJ88io1xMuxSebaANzWXErx5BPs2qJ27917qjzxXbBQUaLUYmnAQnSYKxYsPGXU6LeUumko",
  "key34": "2ygNbFtxMqAbhecnykAfFSFTUXpBRg3q9A516K1G95HfArpfmXrSnw5SM33ACJgwFmHksozYErNs3tuU58PUAR4s",
  "key35": "4aR4CqFPDdVjvLPdonTpUoeEopwjB7MtDrtvNx64qVdtfqyvxSPmx4C8v2yL9TqDw8eoRs49BHYVXctNPPUayooh",
  "key36": "2sorbVcRQcCo95gMeUkcYhattGBCKGDhRQcFnNxJLHzXCt2tcUkXknWLxMsbqyPtU8tR8EW1AgP69JVY9QK9zxge",
  "key37": "3gmKCQnX9HvPMVUvDQoRQGf8j7NubeL9WuLjgtGphzw356XBpdLjKH5piyww2B7Qpu6bnLjEgLf9aQqsZrAinsBg",
  "key38": "1Axx7EdvCq1PZaGNgSFvKUszAWP81i5mavHGCEkgRqq651YQfMxaftkWqXswFHVMJfzU4cdepYcyQpwban2oTBK",
  "key39": "UhcJ43UuN5a3MAR2Lnp7T3NhPYxeLbMy6dneBXj34EKPC22U6wdtgAcRNSXp9T2hnm7a6yGjH1vFQTcynsSUMaM"
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
