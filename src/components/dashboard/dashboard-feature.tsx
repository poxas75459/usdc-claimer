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
    "42hZQygD7rtgBwpkEBSkcqice1GykD2FFgA8JdKdBwVo8yVHGVLKVDaQXDKVWVQYUFXV3VDnexYep2ZhaQaTN2Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPed3aWX1a7XbQUXZJ2bJMM5sB7FhVDMD4nu6ucAKrk3J8d7rYx34mxqsWz4fDS7kosVvP3tjb4mReRG656SjjM",
  "key1": "4kwYnK89DURdXTzQXogspjyD4TYwt1ai9CWtSUm42ri8qG886oZBqborgGwHGV9ivKraKJFiZr119YtJJjeTvXxH",
  "key2": "Fmc8j8DHYjKwMed32H3CfJGzsZSAei8WJpnbNmys2KaFxoGvL5FRuC2bRe2YPC6ACkk1H2Cx2eJCaAus9JjhkV6",
  "key3": "61K7pb5DucesjAFH2fZVgS3qQ34eMatJPdhAMJt977pcQCkVhZfwZxXhHD8f7VBijdn6t1Va8AkFN2wicPC4J65Q",
  "key4": "5WCKuy4FnU2UxSUZzTFpGJGgYMFNaqspFgr4fg2YpWYNFZToLLozBNSJ5s2fAqws9nrUoJbfEYCUryJfZKQLh4Wx",
  "key5": "4MYZiKwGZKmYpdaTLj4XcrKVTPhYm34mG2K3mqCEzeKFZEdfd3EGVv1Z6e9gLHBWFfTQKQtqDyHgxZxGsCdahoAx",
  "key6": "iQAEyMfiZMxgUw5dJRnc496thmTxSp3dKkEArBkfX5pL7dH7zGrXCSzNDkXQ3KcjVHW6PGLhRuTghPLhPT436N6",
  "key7": "2kQNJroupwCmQaZFtjfHBMApyQpjYrCE2f5nfRztGGnkBTd1vdTi2wzx3PGEA8vfN62RzG2Xk5GNF4a63h98JCjU",
  "key8": "VVWRmbS5BREznQ4KACZ1CzadLjfoDGFkkcP3B8fyoV4WiPWHtuu526ES8rfuDmosGN1SykMVENvBmjchpF93AKh",
  "key9": "5amybpzFYNoojRvVy576sVDKfvuU9WzhXVgnaj6TsJmFioSYDPHnMrBzKJNmA1bExEKd7jUeh9UsemvaHoPYg59A",
  "key10": "4UwCFaCpbBDae6NgH2S3yQAUgn5WSGR8Cvf35W7ah5Yc5tA9HPJbnRJxNSf17un8DipWjJhbs4exMoVz7vDWYCVQ",
  "key11": "4PrQJXdKM595MWmf6YrBbFhwsuPqKt5KsPE3bsSZvrRriHkckGavxAinhU5VuqWN6MeqgWi1berncBGfaTYPG2pR",
  "key12": "J9AR3XotMzFffmcCEkhNjZ7GXJJ4C33zRxGTCti5yzftJKm7EwXo6kcye3ktmnkzCt2LYoH8AzUTkPDVKYeoPkW",
  "key13": "3MHXBDpHe4F5T25Wrj7WtTsDWbTrxZtu2XUrZBteUASPiWGeMaVc8tXTLt315Xq5nQTocX7BnCsCQGxpX6fwzkL7",
  "key14": "5CyyMQXD4nNrA5yUon1udZKpJS4Yv6gTBFhwM6Hric5HaHTBySWdhhaJWtowsSXc6Sy8ssYfcLyUmQU5hucqdzaZ",
  "key15": "rxZQ3czV2GZZs9sgUrsxwbCNn6JXJpShXtuvw2Zo3RydPqS3nTRjtoDBDVg3ai7GABhD7rRtc3w1S6JetamKT42",
  "key16": "2BpQSZgZL5w4hAtt74VSitjotNqQX92upiez3QE4Jo5TGXcPJYLfKWYBWXdGAkeiAqJ5NuTqJUPXwbye4Lmr2jcS",
  "key17": "42TFzsqwZ64nBksW2qDLZZCSQcFK5xEF9pqXerEmdeEhktUGcHmj9zTbZUsE4ebfZ16KHLEsNuVVS8nX3s5uQGo",
  "key18": "4Fx8Wh37phQCBLXcs465uaLLJnpi7hFWNRQW9oyWf62Go6HwJ3dEBVx2yLbcHLxVXwiL53DT8NqA6PYXmxAWu88g",
  "key19": "4BAvVVbwC8rss5kXLEShcJfsF6Pw7MaTpmbYJpWUKKQxwo6GCD8rhp1bt5V4mosa1HY9VDnHNYZw7q7jcB31kcPB",
  "key20": "VxF7UkZXAp2rzdW95NPt5pJ6Q6JiDVzzcp7eoAXdcbvkoCjLKfYiKundsenH6HPqtV7XEjpWinU2t65RcFHHoMj",
  "key21": "48DrX1cNc6mMGRy6JQ4YxFcrz7mHxfrGq7pqUbSdJiS8HfacH7tY1zLaiReda8o4tq4zVH3UafTqFkogMpGSLeyp",
  "key22": "5J2yF4jUu8pr36dYyo7MqEmqnQBgRfRW39DT8g34wDYsTvZCP2zEuJd3k7E54BCnNd4MaKTPpKvVLDzjgHvf25sP",
  "key23": "EvNhVai6YVzT1PUKaGWURjZkKZDjZmp85tXkbYk7aKk1mD2iVkQDXysuZykdc7vj28GdWeiQ3eNZ7pTGC8Kb6py",
  "key24": "2wMNUe8J5q2oKxkXNtQZgwKxxmrgvAxVbmhpEcfQs9Ce8yuCAzQMzWNHYVGoLc3y2u7p795dU3JBXxKf3cn4Nizp",
  "key25": "aJV8HDxtdVhcFqEH9oSDHvbb4gdggoEH9zL93ZLm2pA2fGfC7goscfV9Ew2aveKXpWuEEyGRoLGgy5R2nsfEacg",
  "key26": "3nswvBNeDNJcKzXCBMHdvBAU7nctc3KnbCyvHbZpNXr1sP1aUWQ89h2NudQK1BH9WmeHEnUFQJXiTEeawVRrpUNr",
  "key27": "4vPy15SWk9ckBb2yohU5oa2pLcUEJWZjw8QrRmYbJxfPRFZ2A8vYmuMKmoaWBetFTpasKZtow2f3KrndQUrSo7ue",
  "key28": "4znUtoCiZfZZNfz27tkjBg5LMcuaw8sgTTzH2cfpTt6ti388AQ71wdLcNqqbeaLAPV9uxEP6KSgG1VpguYYdrN2k",
  "key29": "43yxSgE4tCjkUPDzi4rBtHGZkbmcpG4xMFJXRfq11vU6nyuZ27iuoV85zArDQLivHqHAuYGxXER1B82dtjVcKVRv",
  "key30": "3JUjaJsxLQsaqG7eHpTUTstNYcunjNYNtAm9RebGSQMgqAVxh4ZxpddzHHynTunRgz59KmadRuoPFgxXX1uNKMiZ",
  "key31": "5ZC2P4tiw4oqoqBNA6NjMjV9cBgzgj1WPpQmKjNPwQNojFCw8kgAnGgGQg3YzkheASwQcQS3Mx4gWsvbC37WMQ9z",
  "key32": "3n8cH95BLAKhV3GvsLh99oQaco6ApcWbiL8vb4C2XugTLXJ1DXTGotTPbDUd6UiXoYAxQh38BxktpL2HcJ2UTr1h",
  "key33": "91RD38Xxrzc2NAMEhjHGqdVboZT6GNbvecN1bR5SnVbYfEy5vrWgGkqGYeYSoAw4gSKVYdZg3274owhSoNjFKAg",
  "key34": "5QpgsjuMgwyv42ZwUd6emS1Rg3477eHSaLt2uFT39UWraRgsWphiBXfm4C1n9koDqZjyVg8v8huTb4ebhGMzBkUo",
  "key35": "5hbkviWFBv34urEXaUALEp9coLYndV6oMu37ZLqF8WGzUyiopYqwxVSxEg9KSKZ6zzpFyADzk8PWexqKMuGdM3Bb",
  "key36": "4dNKWS4saHQJEtNCEukdHHL8E9nbkwdkCMAYn3HsTJUzZSa9CaqUvqPcYZ51yojGN7ZMqYVEjaDWVEV5UutjeMct",
  "key37": "3gbeaDLstP4RSe7ZpPsFEbSazWrPcWF4Pne4BmB5Md7bs17cXVomjnZZHxAbAz9hDVrJuvvDHKnrvDmQCsH1bK79",
  "key38": "5GHAkWLxvuEuo54Rh8LXsW2QBhMHJR9ieYTC9oXhqMZ6YFRCGytsWw5fn2KsKbMjqusxEw7WRs1Ref375JynkSja",
  "key39": "23SqadtDgFv7rAjAHto5WD5VRHBSnhvAEB7b2sB75dQJWAEsAxqWJUoRERBD8difkRsMb1gqqqb2na8N6MnXSaHc",
  "key40": "5vupDAsJTkvYAawby8N7dMRTm9WLQsGMNzkB4nEFBTSPPNhLHzp2evt7haRNEnA8r8nU9XPmHXjZwRHZTTaHdg5C",
  "key41": "p28G1W5gBcNozunJbFmrwWzGoYEzaQ9nxDMQeCXZy5X2Qcm6dazATMNKsV85Gq44qd9u3qWNvLjKUNspSXPRaTM"
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
