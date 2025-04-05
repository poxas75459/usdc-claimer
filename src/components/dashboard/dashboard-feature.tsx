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
    "4yCdDccpxrqMuh9Cpg1gLZ2atoj99ixXQ5otWMyxjUqF4PWt711fLd7QZBeHHYj8uXzacTRCcZkpVcqhsGvH3bTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYviJRdgy7NJ4rc2bbxtrgQ3mxcR8Vmz9gFaYLweCsZG6vQYxnoi6PwtCob8asAzWJRopMBsC44hdJneJ2Zz32N",
  "key1": "2XXUqygyCZwuz8scED9fY8h9dBNtWqMsgccqn5g1VYV7sNK5opjYwWdMyb6w3wmu4r6vsXCmhZ4omqWLtpNbbsV1",
  "key2": "3K11S9hgjFK5j3Kr4C7Dm5yAqc5of8DxbYNWn4yaSgHuoTE57hHAZwEkzPq9CCtvneXLfWATiRFMstckyxiUV9Tt",
  "key3": "4TEp2Krp1ZFT85TKyQS8iqPcAoBCnvncVGbLZ8p5MJGts6kc3gGVcrcoJVWM8HS2wePBAviw8pepA8i9jUKjzqwj",
  "key4": "3NECLARKnA22wjybBvdiES5xL6CbcrykSP6egRyvYxsjsLyPDkhnLWBxnE8qSmKprdYRNRFNhd3WYwKSB6rwi6qy",
  "key5": "23dmA9wH2dm5EMmh7hqEoGywtTTvW5KthUhjUc1s3jFntf8k8Qpee3zRYKy4qedAqPCrdsJPGZmHniNpd2uzAFd7",
  "key6": "4ZZCCczXuUw7egQc7MbYSNHYtQk9eAYF5unt4N8wFHahUnzMmJ55jCn4snnRNHBVtcgtNfmH8DH3QrFcQSFYfs8Z",
  "key7": "4EHGkzLH3erhi5yeJcs76i3n82i3PoQPJSEsmKGmXtjC7Zcp822vFuRq8f59EPSPo1ePaJsB4gKcdxPqUWRb1M4V",
  "key8": "67EKvp3hYaW7aY4F36v7GFRzdLvseRiGC5VBCj9PWLKRETpUzaDnZ8aNYyG19MN1NHL4QvHakmhvJRrCb3UQtPBa",
  "key9": "2b9mKaj3CfaB1RqFq7hAAENSroT2NdaYWj6bkoiWkLHC19VTPBCJEVhsimv66oFxceK7xhxFdFYxY4KTndGNy82a",
  "key10": "5LBTdN1RiZGabgd9hAziDoxBTRXB6nJAxiL7D2hQarxkDuMPneJF6ZW4r6v99zi31JQz6uQ2M1kVMTCLq7iHWym9",
  "key11": "fzDDtC8899m3VvcopvhNsrbPBUCzNssLHjXZjTguA2vSUe9aTyR2JxNzwJYi3DtPKYfxtqqZoW38M4fDV1ZGaX7",
  "key12": "33vsTPf7K5w8rjb6Hyop7jEcDY8NgQA19nJyQyZxvrVBnxaQmTBBcUWiCB57m1e7RwbfgPnxfnB34v1bAgZiMtQy",
  "key13": "5uzw5eFabvjtawYzfvofyyJ11Rkud6joNPYLcDTxAZe3TyBNfeKp8kcSdxVZBCcpShf6mtR1jthfsvrJNJHDtdsV",
  "key14": "56j2zeyiCGGBCnnqJRCHFeZbTyuynK8AYjfyT7Hm7pqfb4ve2ugP9vqvzW5Xz1N11vNZ8DtaPfNim7rDoDDFVhbC",
  "key15": "2Z5arQSoqBDMKJsbp8qRBecu3z9rAwEgDnHeUsvUnucFBdoFTewQzswxttAiUynHgEdaKj2SLoAnmCT6Yzk4ZC5x",
  "key16": "3EpxQ6u3ymX5m3bWE1QZCaBnArqyFrMzbPfUaK2wqhpnH4Jf3g9wfonzy9XFCYVFmcm6ZmeTVmVwsPVAvtRD38UK",
  "key17": "3z1esp5wHRviBgSfQ1MuqWSTkjgu725TMZtnrKdM4981Bsk6v8DhcTQPeewJz2NEsPDoyuNRb4U98pq3jofCWUbC",
  "key18": "iabGgqN9EXvdkS6BeXSKZeRr7XwcmkidQc9SzreKd1Sqh7JbjWnXceChAsnxGNFFGHYuPgciWXk95cvE42UAsq8",
  "key19": "5qV4vrQ4bLDBoBfGZRA1b2ioPF5BjXJifMdhXgRjkzvQNu7FMxQ6RmQK5apNouKuVKVawT3bVVoeM7hxjJxspixF",
  "key20": "2tPAa3qevSQRaC3ysopoJkGT4uGASijQJwxG1WWhYu4H44J9Pa1a4T8rHy2FnawdxqEJBnX344sw4vovj8XCSzXG",
  "key21": "j2pSVrrDM9TaKkpjk37HRb8H5wCMBQn51LCYVxJDZ1kqR8aA1dqnGeFoDsJdP1YMeffZxznre9oNyoWtdvcSGV8",
  "key22": "2URrdfPhnMmJLpghQbqqD2q5W5oNGy7rSkBVA3Mrbhbh5vmDPcXDhk4TmfCrEDoC43LqBLDJ1SvY7CTyV8eFSV7c",
  "key23": "2R7oFzKSttbXKRwwsFcjUZ2vEEuMboJ2ThdFyrAc28Egir6pz2siXfhdec8dD6tg2fAJKMvujkXsjDHzhHiU9UhV",
  "key24": "4u4d2c6SxnRt47JFGfZq575yFYkYNzvTtPuVJ6AoBW4mLgZmeZNo49K3utteqT1XY7xvLzz9gWSCLn1wViPMu3AZ",
  "key25": "2cgutaMbbCzTq2ESXEFf987yW6Eh1ZtGxiNDMNDezm8eve5vbZwyBz4szpU58Q9rcTFHdsYmLJ1RMPygPAvPVpqg",
  "key26": "63yzBymyRKnALNyR2t4F7Q1myDae9ezHvy1EpY4r2b5UttoW9Jr6FKsEmX1EApJa1vAvfer9yAdahwuH9wN9vPwn",
  "key27": "2QCCdxkPURKM4EgqdatYWqB2niNDQRhJQewEFQJACqv2ht792q8iJ5dQbYixaatunKvPqygNYS7DzD62dUTyTELb",
  "key28": "5jmkgts17mTkarxeGDqZzvajRAq4fDsAMMmjgKrMsn8a1EteoTzWsFGDa6goUEpLSq3gq6zoWNVdKTcZMDxn47m2",
  "key29": "46b2zBYihx2cSKRAa7VmxpLrJN27zm1KRma9JWpW6HsYEqwcjD6JWL58zfu9tCz9JYVGhsFfDqGnMEBsStEL3Q3b",
  "key30": "34KXet8nRPqaLEWqrpok4fyp1XpXkQqtM4MzBzYm7q6zsn8jB69pAgtggomFofbj6jkadutCnB5Yxqk5Smtxg5uQ"
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
