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
    "34CXeNvtgXY6X4xsLHnHYA3zPUrA38ezW6wP6kF8LbkZSzZ2EGZWRepeHxLLayAZUoYErkiQcAX1QEqragh3YjEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fRy8gM8vWngvsTVjAKsLoudZvDM2p9xnnirekby2cPjEp96U6x9RYgjDenAGosk4mdwD44xovfr678pJWAHZYbH",
  "key1": "51WhMvThjt8C5PFwpbSxej5tmSJbJFkMZ4S582y1LdHFGxmHQqGWUW8gVbUYNN3i97i64uJiSubhesGtxs9GvHjR",
  "key2": "2UE91ewZdAVadUKMySGZTKckkok95DNAb2WwXX2FWrXWZmk9NMeV6vqE9DJScmC7XsfUjxdM1QuEuyhhv4QCxQ6H",
  "key3": "2gkEHzSznyzyBnSxW4ucpt946BgxuxeaoQi1T8HnigYERqed8wUXfAj89ujeCfBKZ5iME4CS7wzJBBrpxdvTi1WV",
  "key4": "3mQ15GNXEkxsq9sxG1uMn8yoNAZkRJqpAx5vkoQwBJKLs1zaXytVxnq98Mn6yn5jvyc1KnrdxM2jhxvZSiifuy94",
  "key5": "2T8gtZnxsdnxCR88iemPgnUXxoJCxW5SJyz5qBWH8s5RhKSv7sQgK9CqQeKwnb4dycdoUM4HKcmoeyDijHmKxwpt",
  "key6": "2dn93UAmh3SAciDpaUvJbBX2qXf84S4xTVwEXaaEojXAnGBM3DzRzHN28hH595AWkJ1eNcoZqv5EW4p8dQVVNWQY",
  "key7": "5nJcFRavjhAsxQqC9C4chhWGmvuGcJZmLhN7PeZhVLoAjp1yALhVKWyxY97CHL1HNE1sSk3KaeuCfJHRfBkum4DC",
  "key8": "4SkSK4kC17uBDfd6MH1SUvHzCiwoCJFxuDedp5dzgN55QphRz7gCCS6XrjhET7HUPfjRTaniEbQgAZ4uE5MPfa4y",
  "key9": "65aecQcDwkS2tXyxTNJJv1eS3W2a9eXytXZBBcacgW9gxjZ1sqs9Fni14vqdHhddXewxs1J7BzGZxakAvwWSS9gX",
  "key10": "4B8bjsTP478iR5tsLBsQ3QzZkGeivcHK9jv2Sf9MVtBUSyPoyLnW4NnBb7PQYJzy9AwTjuXXhMqKdWcwJrh8L6dp",
  "key11": "2AqmvY5B57X5pasvWSzfPn6ny5jAa1NezWLaC3eCW3Rz1fVdVPsJJBctJh5J5Jxgk1epf3Tg4hahRj1abwq2Z9a1",
  "key12": "2u8AbmWNScAs2MCHoBjzT2Y8Ab1rCjozS6tTfzgFTsfRc2P7yChF45ywRZxLiTy9iGa3R58DNvDzFomvLejPvLuh",
  "key13": "ToLB7iNtpdxPi6avqyGSzTaWyi6pTpL6LXJN6RxtZcAYpZGgBQ6Ni1GtJGpnV7yqXsN4jtGhbhA7GmxbogYXijZ",
  "key14": "5GMfomY5JynAdhYosHRn755tanyHvwZYiEet21EXTQV2EuP8Rr3NWT3UX1xZdEpySuaTubtWy9T3fXHhJFza7Q1F",
  "key15": "2b2X8aj3K2NxZ4MvWaxt2PzNFYpiaYUZEzJt6hoFw9Rwrk9JPVtbwKqjVjFeT77KvkfdQUUtFWPYZtD6GGTMcLJC",
  "key16": "27iCbYpPnkmVMCeqBqLhdiNgdMTzriAnMVC5vDsrDxPhhb1s7qaGmEii6CEHkKDGXRAycQ9HjedPuq1MJwACX6Di",
  "key17": "35erZsYE6bpznrm4e7h3WSVX9YguYtkef6UmxCf4C93vvuDM41AJz6q2mHTwKCCbRNdDnRngb1tVmQcu1yu3XAep",
  "key18": "56NqhDJ5zZtbkySU3EbtLfcrzqjood1FkKFaNmxvAoybMjquMcHSpwJxU4ppP6ehJU1pH9EHuigpWEqAHxFGWsQs",
  "key19": "52E3msBKzyNsSet6XMygwNYidta9k47Gx1XGLcdNJAupsJibscsSjsWZd11goxB37fUooPNPwNFfc53SXGJDFJtt",
  "key20": "ng6kYfQbepCBPD7UcTsg1sFmjVUT4urwWh99YNdZpU1BfpMt5FDSHX4iNQgtQQTUgGyXE9ZHs6dLzmuC3Z9gbui",
  "key21": "32PpKmHeRhFeb1XaMzXgKYaBUA6AATCFZAQy5MVjE8Np9FvgRgrMJsZjsJkxzrQjn7zoBY3PWH2H7DtsVqEQau9M",
  "key22": "2exXL6LKvhWppGXAfqxBBb16bSYY9vYyJW8xpSHscGkiivgsF9ijz38E27mSKeoUEGZT9mrzSDYHvyQG8SSwV7Ei",
  "key23": "42a1MQFe3efgqptRA3DCSpoeKw22HkuNwwS4ybs9TAsXeQod4yvnLLE1bsq2UVLtM4xYyvucEtUxaWYS6uGMCRJo",
  "key24": "2gbUGxM8Jqy97iQKZhp2e8LdR1VSco4jDadTPT2nasFwouDbZQqHfzmvufD56kxyt1xXWbLAYXWUWAvcqeLRqfu",
  "key25": "51EtnhRqUmzLeW4YwJjn1PSfDuHg464jYBDtSoVfP1a98WMAb4RDvNDdttPKPT2UvufXy2gfmqssEamfjN6ifSXW",
  "key26": "3R7s9LHhxQg98PqqyZ2Q2jsfCQycAEjDSEGHkEYKNtGhZiW844heTuDqy1YnCuQXJe9PAo76zQXqXq7t5m3vJLmh",
  "key27": "AtXrB6H2dRSRUQvh7zFid2DTygjupERJjLVFqDWCaUJMkFm8DRAhAPR19KGe6TX6bKeU53qpj5xQgFZs4medKUy",
  "key28": "5QfJHML4vzdQYU88cgXPFt1Qhdqh6M8N1TGA8ZS4EY2mAnzthviKVSTN2L8AV65UwxaJsQgKKvcZP2Sq2eXTQB8M",
  "key29": "2xCTAE7FuZeFmjR3jYYkCSKyDqEJQa2KpKZs9Rtsuv7uHrww8Fn8G4vSHnHzJFfMfwW5KVUyFGTcfF4oEdAmnpqM",
  "key30": "4eAQkxJv1DLNTq6yHKJaKegWFT3ZFSjYp2nRmdjNC35ayWYrApn6Cs8Bftxix5BxfN6oxAzWpHFcReFfQvVSXeis",
  "key31": "2B4Ns7yEfEgn8ZTBpecQjD5Qoy4P8yrBgV8MoFYf2AUcCh8ysGvtEsLC6U5AGusWeXAnF7X1LzPN8WmPXgorJH9k",
  "key32": "3TUP8yNqS9prybKh31M1u7SNKTVmD6KEkGKQc2MZ7YXmKpeYt5bXr6AtfhFenwCCwKPsDgG11MUKM3zCDi6AEb6d",
  "key33": "2i2XNk7BtGj3nSotNhYsS9UhcYTDb6ipitQnRQq1VkTvt3dy799T2ANWVN6XemQsGYrX98W15FTQCHwJq34uk2Tc",
  "key34": "XDaNpVcuTmeA5sGbdG1zvXhN6VvnMfr8KxSyQjuuFQycnfUrJ7uQ55PvuLsSyYPFHuNPUQBjJ33nN7tEijWhYdy",
  "key35": "t7Nc3QigfKwkuedi8pgR2Cs7BixFmhQQ9tiHHzE1tgrSSUo2Vo4z4B7ZZgzaAe5bzyKz4GPcBWyXXfuNBpQP1Bc",
  "key36": "56pcqCEYScMPVq55uwwzQihSzb9pMjpPzQNu7v1vhURmc1yN4hCF7WgG7moqvpMko7gBbGVpgn821uGhtvUadq2V",
  "key37": "2G4CQhKoKN7GrDQNFxwDLW9VgMDPhqkLFEVw6jwWwtKSPvurywyxeD4fSEzxzgu7EyZFzawUWPN2Z6Z1FQ9h2RyF",
  "key38": "5UryUTz7VedyY58KytUarJ8DGqkvSsy76J4t1h1eBvnhCCwf8NZj6BGPpfAEM1e6uLAg7M97sGDFAfS43b9HGaPM",
  "key39": "5UgMTiHUScShCx8WC2oLBmyAE1p2M7KyivKGvJ3yYkQ2cH9uWpHJLTk2Xq2gN2SoRSxPZUZGvNeUcbWS8NcCggsq",
  "key40": "2censhc3nvsPoZsRitUbyWYZBeoYJ1LStEqBX37hqMWbiuxFAhkNQWknMYwQ6y5uLcvc2TRn6ejiVgZAPmdCEDhK",
  "key41": "2GzwXS1bajgtykHLHRyg2DRPaK7K25FmUuKrGb7g6ozBQJhky15bpkjUzsBM18hF4QiiiABTEqQq5Dzw28Tvvn8t",
  "key42": "3St4S1dGQco4VK6mfrL1BoghhHiqJR4bYtQ1kk9yLD8zaJv24Epd1nLvCmRTKxTWBZ78gAZunvrkTvewxgvkM6Eh",
  "key43": "2uQxUA4NZgXsjH58CwCQFASLixAd3eMXuuKvj5zVVuEQGdPp3SmpRYxmzbatedpoUnUrar2ML9ZDmcinYLfwRh6Q"
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
