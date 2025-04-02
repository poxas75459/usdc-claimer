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
    "3roiHWpvFePV7tP7HiP8EmTPxu95S7C3bGvFjZ7MY27nGn5bi7pqWcRdP3oNhVy9MBMyMwnQzNL8koeu2ooXQkcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e3pUzas2XPi8ak8t1e5DdjQiip1uiqNH1zz1jGzozLTjn5c2UnbtiyRQwS6JgbAZr8RGxZMUm2N95WYK5BqzwGv",
  "key1": "kGTgEw7XqPWqS7MEi7qme2iPiWTB9Crw9Cu6YmCVguvcninGY5S3HuhmJ6c8g29bAxnaMopvA62NF5DoVKEbhUx",
  "key2": "2UKPS9ZbPXA2PzEB4Yk7pfDjR6e4pG5BrmM1xdS17BU2uLJnBnJyWgkdAJwWFVzAiV17SNnr9jVgcaRgPS3TnjTx",
  "key3": "3XQiNLfrExUCe3uNMXAQfbiCazRzBbD82FKyFmJ9rEfBWxJVMQ8NVvgPRQPuyXmUDhodkTiYP3ZGat6GfJkvgr2G",
  "key4": "3vqq2FFwxvhQPhhrNtryf7vw9qi5Eb4ezpqSxupgZSvM86qovJ2n8XMrhQcGU1woHrMbpWp2AVEGUs5UC7JeMUcE",
  "key5": "2nJYAnTtBjjuzdn7W3m4PcJ1mRmzUB9RbNsZKiaULnQp4Ht3BJyEMun9aUk4iUMFjwnk7qyADhaPc16ApjabxLZG",
  "key6": "2MnvXb5Zx12fiJbt7GLwmGirzw6cXKSnT59GvJ4ASR3jhBcTmobTAHzfdgSuJjzWUtJRzVXNBRoy7xAFEM2Q8jPK",
  "key7": "2owjUJ3qXPMwLKuqAsMmRtLSFpivxRw1aF4MuVT3FmyoHVmXiydbHyhBKPoUAs6pwkEsXjPkL2nneDkezyeYbVUX",
  "key8": "2RQGstRYhBz8BbtLKQbyAhLQdTyefcPbveseWVEuZfW2fGkzdUxG6iFcuzp5p5WjLk1hPcAcYJHebPbWv257XN3y",
  "key9": "5cjHjoZQkYNDfu2fbAKs83PCY1Low68EMTZJzJHWYgw8bjeH6GzhXeczhitjhQuCMzHsDvCkt5o51g7C9gc52cGM",
  "key10": "5VBz9fxdyYJe3hQarz1vitf9zG7ZP1QhKkzceLJrQKQPzGwtn9bAtKL4MW4pDWxBm9V6scyMhYDamyZaC7oKp8Do",
  "key11": "2ooT8pkqjAajSNppXADLwHxmtnXDRVFNVo6ymQoFBAcHtHQCwchjPwoi2H1Yhg1aMo42R81XjEBWvZ1nJ6TwCzcM",
  "key12": "pb8ACS4mqJotnbCSNuDo1Ri15aNhh7pbCNtRcMiyPE6K95ZRidNKHCjRMBdgzJbGcy9bYs5WfHLU4expwpsKLrs",
  "key13": "4MXniVSvBwkARQFJh3GsWAaYMUVCzUY27D4etWHagHH2hvK8uUePuQQWKuWY5VZLnzi1yvc8a4AatNxvC3Rukp35",
  "key14": "35QmjhWZJzsSBRAASFBiBEET5DtcdkTgHWDDTcMBpCiVWsfe5DW9QcjxuXQs5BkbveNuP1eT3WnwD6mAoBggnLio",
  "key15": "2Z3X58v95npuzDvgxLDtAhN26h4m51v1MMd3yJtqe4keHKwGpYes3osmQSVVFV5dTUJJWo9Sjd2Kk9NUafL4FGKs",
  "key16": "2CwRMsLn2CwAM1ciQEm8vRxjwyJ8scnZWCxYyAWWD8RgcS2RdatSHF8N4sTeJP3pzboK4bQuYKUhyGYtqGzDZPqj",
  "key17": "5TcyaNmbsMLrvgJLWxNbqpDCwF6mkD8ouUG1RcUSGbT2TgPAmMxq4R8p61emWtatGj3mgD5mdSvrPRVrUpuDBMbC",
  "key18": "2jrZgkRKSJEmc7wHjjcvEyWoPC6SQjhbtL5E2CkhCZMN93Uz4k2KweWjdEZwTchT95EvbNdJDySucGEqFj5WrgMa",
  "key19": "288U8cnd9xpGtbQrJcAmH7mJCuSs5Fko3u1E7gjLGWT6qKqtvR8pFo8beATLJGQmeU86UCC8U8D46m87aZx8bkxC",
  "key20": "GjMzk5t5NEU4bwhzNX3K8hzqaBsgHvKM2fZDepGhGsBtEY3Gry3iBdLnkN4fP7GMhX8BzSLymekTRMRzQSCe5mb",
  "key21": "dKbLWKFUgc2UhzB2oXSDkGmi1G7q9Sbzq3mcxgKKgqYaVgieWab93RtbQs3RRN3bNgdwECzcriqxjDAcdmTEk1M",
  "key22": "2Tsbt7MFcfKaAxPpp1h5HPZM5iXCrobJAMq48Z33x7jqnBNxuYhx586n6FJKJptK7jv3s3fhA2eNVHNoDLUqv7ob",
  "key23": "2qnYau3UJTutbE8TKKkxmyxDhea68mKpn6gsf2GkEzPemruCyvNZfWuesjknbidobkgawtHcsZtwmEjtPUNRMBVv",
  "key24": "5tw1UpzyvYsygrPriVUycqBFCaQ5FihDdKWkexZPgk8d1YQ2fx2vRCxCgFJWrbCcTwcpAnM3A5C95dS2utgsGKf2",
  "key25": "3cP8p4XaTnqgmsPuVVzpjERF5KxmaqKsdC1LE6gAdEZG9f1FkVEgcpuFXAt9JUZiVh5PXsQa2tTnYtMTbvVqX5v2",
  "key26": "2uWaR9agp8wwBtSQFx1pvCForZcetuVbAJA2cjrQDovtUhdDKdBfpkU3RrqozWa4SxubTRummsRLgXopMoBSnikV",
  "key27": "YroTLqzmtuUkkqNV6ExTviXd73X3XLLs7kh5AVMAfAmX6zbnYt4oW6hYWUTuTarXn1rPM8K8eJbKo16BFkjtvm7",
  "key28": "4Qdj2aUDypKUK7kz11NMkZ29K1qypJ9MxpAC8avv9GBMWnTbwimF4y4EdsnxY9AkHKx7UMbiZ5oe3jx4JbycicRf",
  "key29": "63PibCumr8wUi9z6BFrhHddLRgW7es6bGc3cYmrSYVJdSsW5pYX3HTECzh7EsqTbYZHd3ZuaVNLtE6mBvmUn7ikd",
  "key30": "2z21YgAmLRxMLmDW6gm7bQTkXEhFVh7D4mLBKJV1QUa1jQCoCGGeuRWG9bbLcKXGKbfj7peXNRACYo6J4j82RT56",
  "key31": "3oevv59UbaiK6QWcoeYeEgiqyAzhp25G2urRAnEKDKs1RxkPZb9sQs3fo24mJQUdhExqt5hEb5Jj5PFMS8t9mebR",
  "key32": "2rPmHd3cZtUCFyQrB6ecjiGXfZZTvH953kGbfCt6H5mtNDVXEh4oxNiMrHuDnx6mqW6zmAqNr3mP9R4pUbaiZDZe",
  "key33": "vJLr9Do3vdTAuUj3XMaTdp9r5LNN4CFYXG7p2MSw7xXTzH5kkYku2thcNRkusBFT7tfpnU4hSJbYUmXqNcDvDuv",
  "key34": "36fCq6WY5apRfdPAamJdakoMuj2YgNYRHcdyXWJjX8oVDMNFYMrT38CHPcqqteRyoc4afDTspoER5R2kHTYtC1jA",
  "key35": "5ubFMYvr6smDx9QEVatV61Yd2ndah2wCSPmoq8Jwx1EcAgAZ6cbejwkX9ssNcTrLo73SCtnCLnSZM9hVDmpYxhJF",
  "key36": "5arpehq73MubkPJGXZhRtA3rBysknuJjxHPXXCQiYzWNuNfTVJtiTbZN4TZuJ9CK5mdkBj9wcKuCCh1Tcr3zRbHb",
  "key37": "CoqK9eQRGc2qLt4hggc6tKFqFqhwn9u518AcxHkhDBXzMCtUPqqLFYPAzwutWV2mRdp1rCRiMHLzvftLtNC1bKQ",
  "key38": "2VL5zcJha4ULULQNwujFsFgQ7uW81LC8kqjsAU5sFLkNjixmNXzSWxZH3rvkmG2c1x7XR1oHsCrrJ1PFZdK8zTYk",
  "key39": "RKFCS34U5gPMR4zmHXnD4S8LGSikyZdSrzg2UsVPFAmMQueLkq1c3bFaktSTV7m2cRG6y3WbnybUNKVtpNQZM7c",
  "key40": "3Gg9KbyGZ4UA8HiUN9o7mZNp7MEXUNSmoyWUah4qsZy27XEU1LBEBwCFBCkqyoV5gu9Yu1gnoAjU8U2ms2e1Zvsb"
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
