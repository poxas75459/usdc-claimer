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
    "2FXygMwBCBwxkbhHnvkuW7btin5XSQpsK76Yd5m7NmJucCPaHdRQezkL9HNZhJZ2yVwBX6EYRLE4T6bnPuUeHu9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQ6U2SCjBin5g9GWjmGGMoRQtWJxHgDjWx8kT5WVUK7cph3xFfNut6qBhWUDBvmfvZUdYyeQqjHto8G5x9ueELk",
  "key1": "uM37cdn321UgiTga3Neb61ADfS8H7yGWEnPKJDWqWbXcsrVXoncL7SQmSmJM6G6UCgiKYhLLbqJ22CxLqM444FL",
  "key2": "2NYGGJvhQjNvf49rAobNV8SacXaEfYzG7owH1qEBA9fGttZsDwwD3RQBD4NM3JAqs8A4Lphv9vcfjaYfDKvxjEKh",
  "key3": "3rdygPMhdtBs4jR3DdWyMiEj2Sm8h34oysLJv8eoL7JkgWBDYgGxoCjbc5jZWC9KHCcKLbpmkDbrXfPXewpa66yw",
  "key4": "5ZoETBuctUs2yjd8QSJq6JEYDnGvQNrmuomRqoNrY6Njp3v9yP3g7yqRzJrfCwBVsArPu2a85RBzXgx1fJrJo5Kj",
  "key5": "4mzEUZ87DdpbjbQckEQW5LnJ8q2zfiE3HE1vY22n54hjVHkjQzTh1scqP4VZe8mF99fZt1dk6sfwmUusmqtXKKJD",
  "key6": "5KVJHnk93CZrnx3bkYeouHXKpJZ7CiN2uEPTqKzaGqB2KSQ9rdTDaGM99yNNjckRJJkEXowgi68HRjvfpmv3hY6n",
  "key7": "5YT6WULNjZYqCx5mnJDrfW25sqwEU4MYhdD1R33anRMJwF32VmPxAMdBDrG5mKb2hqgCKexgdre3t3VcbDynUHut",
  "key8": "38n3CEUebaFAetDdqHSaZMTqUABoJaSW1pKEAAQSY1STrb6yapPU3hYYi1fXLYih7UyNDDqVfFAzYQLwb3XT6K9z",
  "key9": "2XXArjckeHsEg7TxL8D7FxGAvucMiGEFDZiykguzoz1QA8bMDcHnoji4wwNnmuEAdkSCTvo5KNag2xAw1FfF2Kyx",
  "key10": "5k9urdmhdHVTWAyGRjneSSNZANqgy9xKUPwc3wJjTnt3KdH1u3T6iULr2cYm7pUwk1sQYZ4hjtGmcsAwmNHarERo",
  "key11": "3PRjfSbnfoP7aMUT5aRXfVujydEdYyKc7tWbzuJpxqyF6FbVLVPzwZpxTE1ZNZSNxJqgbLDrsUhDSEQpvxivzgc4",
  "key12": "2Ycf4krq7DQhtxuMGqzEDZhiLLAhFRhHdPcVhXje6YdEqgHrgfLrAsEPCxcDd6mZrLw5GabBCHrDJMs2bUxkMA9a",
  "key13": "2oo6MTXYKxEqrnUJVpkJYhN3idzKyQKKpY4mnD3SrRYkP3T22jDwfvMvhFQFncDReoTQXJHYUeLooEQ2gvKZ8raj",
  "key14": "4pcfyzUFVX9fon6tAz4UpfZtC7JusuMbF1fV7ip4SUydb9BX1KFMTMX7tDto7cP119MWTJ98AsC8RL85bv11g3fE",
  "key15": "28xht9oMg8sDaxo4gjU13Xnxbr2wiUdJYkdsYj2VoZWkJcdxLGNhHZbBZucNxmbpVBPfNQ8szNr35CXTbyKmfNmp",
  "key16": "uN3XzzkLQFATk44oCG6PVA7gH6RnWJsuNyxJqyGMX79oeWAQdtn6F8fh9SJotVqoXn1Cu1h3nTqucAUspgPM9FC",
  "key17": "4qEr52PEWbqXrUEtvszFZ6Xe2K3AwH3UMzP7P1mjLiMWN3SK69AqTEdATQM9EfRoo1nd7hXKQFeZgWHk6Frs2yN3",
  "key18": "52TJMPxN9HLy2bf7VnLaC9owNqLnqSUEcTm1cuiw6sxzqWFmVJVHi35JntBXfGDNyfiYUGUdhQxShAaPGHbihiA2",
  "key19": "44BoDgyX9fUoQLaBtZkyk9t6PeHwNWDZF6LNLeXLcv7LDWUnuCTRWqYPidLTTMsgBt2LcQKkK8Ygwd6tenHQfah4",
  "key20": "45cCpBr6v8kGvHC6uVZ9JBKNPU5VZdJDWN9SoCic7kxCPWTAccoePLRM15NpuBB25HgmvRsfGzyC9D2oY2ks9uds",
  "key21": "shDxYgy8gqrieyd1xJn8wjJRmY1kvDcD9kbbsw1jX2FQrTuRhpXkpW683pcHy6w8E8kWuWeF9e9UzHWiwquGLCS",
  "key22": "4MUQySeB5CgTSM5uR2r8WKXig9CEzrUwKqzo7zJRqy9ty2k54tksS7WfyjVR2C2W4tLBX2C1vXGP1vQoC8g4h92j",
  "key23": "3N6NLcxvJQYtRpq9nierQCWdMmcyCcGW2NLN2L3QemYQAdS1Q7wyiuF7ov4DucEW3qUxUuhd5gRciFKLK2VMMavf",
  "key24": "258q7iZ1cdme6npRkehB8KhXYn1kBboDZpi82SmitMZkvMi4tEmdgN8eNb85bjWaPidEuTvBeUYFPBZjtSrJnCER",
  "key25": "37riCuf79ypXsgYcw9TyTVQK64Lk1n78njW5n8kgwq2Mq4VafxdUpuTDA6o3M3s9y9MaL3SMGggEEsBfKtLUe8ij",
  "key26": "3pjzLEd8cJkNH37neAypcMTs6ktFWjUJobW8BZMoiP3Y7TyKmbiACiTFCP33hF28R7Gesbe3dw154xAPfu57FGn1",
  "key27": "xL57ZrUqnqoFQtZFL9Bq1vcq2W1ZaCrFDWxtzUFZwygyGipVcDSkTXVR6jEocmoN68yEfQkyt9DMXWjvchoZxF3",
  "key28": "33raZDvPtCPGX31R5uiEPHhyQkspzn13w9dqtXgkiseBkBj81B8tU9EPzTqUwx19BWpp1jKYho3PKPjtX8KgUUeq",
  "key29": "2CjRGTD6nbFeWzSDNRv9hx9wKnD2HA3ySnb39DhNmfhKfNagynmBT1JnnWHEgTsxmDqjmwxS96nDzzKHjfK6abKC",
  "key30": "5qGNAYSdu1FK2z3BKjCVW5yjU6dMjYZzVnz5t8N1ja2fqUBXyoaa4KPRL5TVhNfJNkuT7G76sDkZAQg1S2bpzM4",
  "key31": "vkcc8SwwnQw672yU2CCkffPGfy1UY2G1Ah1KHHpM9hTyscf83YuSKsoYgJsyEm1dgt3EWT1ppqUafJ9RyfwYVfi",
  "key32": "3GXeYRFncGw5X3H4mwRez1aKG1TBS7uxv5M8x9oLyQhCRwRwWa4RDaPPXuTYZLZ9V1BMFL48kpV8SBPFCTyte1aL",
  "key33": "3HwVBAz3c99mLiCLW43gwZvnFCRJpkCcr1Rbv5Ya4xCZdTQvHKoSHgesrniYoXxTcGbx2u2FysHWR3oZMCxCsXtY",
  "key34": "khWFNFWH5BF28sknpgQ4Liz2hiGpbiSwSTfqpVxpbC6S2cFMZNXBVsh1NbeTKeLvAFaLcbeEb7BsrHfXb5hqpPd",
  "key35": "2dKiXG71SCGKAzK7HA4wkjqECqK6wvLq8tETs6r8dYrtW8iMdQFSN2m8GgdiXzLLfy8da1HXYYS7Wt3QPGY2Tedt",
  "key36": "3c4rG7KsVpq4kBEVb6BomaW25khKcogguVqLouN6YJzbbAMsnpMS5RRRt7ioxExyh5MNi3jcgA7yNbAvpzrVtSi7"
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
