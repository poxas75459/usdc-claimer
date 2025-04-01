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
    "4LH5yz3qPwqBQMGkC53XrZVQ1qZqrupLegiY73uGQNa2GhFdUFm1Rtdw3yYqXjmU9gCy37ndCsGVJbgpWsPVM6SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VNGAzx7NSp5f4wfVLG3LeQsKgYj5ucenMFPknWntA2rrNF4h3oNPLsQzsrNsNY2vJZKPZe53QB7ehnEq664ZrZK",
  "key1": "4WHAnECFsdAhRNJHgb8B4CfuMMpLJGCYj6mSxmcJrzXiK5QkCrFuZaC5Wjb9wZerxXszPUVtuZ7YiKVRmnmer7zA",
  "key2": "3jWNk5VoqDcdWT2QCiSgXARySUPSdpWxxLat5x9nSCZzc3C6Cyt5pCusuqnh5fAqpKSHT2tPyqsVbZYQ52VZoEiD",
  "key3": "3ievwGrE2CX1iU9L2LsXXLvQEWdJcwDMuNWyG1xuZH8T3tgU7LddUKeZJtZQXEWd51TvXZHxWaJ1z8dc4Hw1ecz1",
  "key4": "3parZLDALriMBw6zL5KdsEABM1vHjKbki7zre9TNGSmrt45SYmF5YSX5aa5yJwfZVDMFyYBwzHSezWUQErsKAGQV",
  "key5": "54UEpigwGWQZi11JRep6AMaEBUrySn7f6tVV8b3BfKffMXJ1jwyhGTg8x17vkgCLaGrR1AuYxdnqhGu2LVCR1mz2",
  "key6": "4YD8nRNxqhFc3Uij1Hs1MZ3UeZ6xXzbk4xdi7zRaspFpE5wATc9NJ2FvWSkWPscNW3NCkEK4ERMYcPk5VAewAhSV",
  "key7": "3sSS8SrCd2sCceih2JSgHNm2HYHk3gQRBWqBD5BCnuG2e27iGQvJ8sSAvvsjuw34Fi3JAvhRkdBVxrPPVhpzNQCe",
  "key8": "KSXydZFhDAh21CUFj7Q7zmaD9tZb6B5MxTj36CGTfmRfAbmCmg3RmS4mpoYh7kH65ZLHqiFfZrqmCXkbXM976qS",
  "key9": "4DNUw5BXGkrwUZVwRg9u3ahMEcwz1DcyErBApVVDM2tpGdHrrpvc9PEbrgv955fLPm4ChWmiTLePhEiax77e6isk",
  "key10": "3j2AFooHZHKDnZnKj6jG1DsFxKShxUC1RGu3Cx5B785ZYwscWnPEQGNHy57Z5qDuFPjWoBpNnV7rjXkWpqeP7xPY",
  "key11": "4H6qhJy66LvpcbFsn7JgKVPaBMoDoQoZaHhT3emXqhA4od68koa3qAVAVLCoCfMhTQxi1mW5zsC2aD4cykBzAqU2",
  "key12": "3obZB4smbjocRR1cz3SWGKiX13sPTeZb7A42NmM1XgvmREpMfLfoUK4biXCsc8hpEyh46Xzuf5zSk6igt33aKF3Y",
  "key13": "23trTTWvboZfDTPAAgky7dZHxJqXZxwsYu7jLZW6xGxREXPhHdLKAZMkNH1s1GvCxSGFvhTZuFmAkEXPc2FzHCZ6",
  "key14": "4Y8BdaZbuqY9PMBVSQmDLeTVTUDfRkTLqeYXA7D3bm19ZSrLeR6DumE4gVKKfgzesnGKgCZQisL7GwoFpzKAXAgn",
  "key15": "23iNnJvbEAz565xe9xs1MVjU7fyYp6LgSKSwF8xJF2wjfAcRzmDP3UkkeomAxupkkG9bCroU94BdLrWDEQHZasRe",
  "key16": "2B8sCvdYkaU73fCBnjMLEauAWLcyQPmEdSQA2Kj7GiAEUMLzpqjzoDX3QiseTJbWRBP1Eii6LhFK2L8fnfAhYSKK",
  "key17": "3sReBN1UCGmWYUdkrponrwfyaqZVVazyVrnNkKF6rq3ju5E7JjQ3kqhVXZtm9hQMnsd48NXRL2wiiVdEyRuhKfqu",
  "key18": "4FwKvRDK2mKebeUWxRoDVdWoZ52bTM3gY6XZSitE8GpYyHDzNc7UBqRc85ddFg5xWBkmxsUAnwThbp62297buaxz",
  "key19": "2HUv6N4rQmQqyabnuTpbnN3GDsC2K29eh6hBotap61Krx2M4QnC8xuZTgGUEFPxeoCPkbnfChxSszVVUd5NrFC14",
  "key20": "5Si7rsky6KKNeZhf9sR2pY1matwMjgyU5koRYjK3zWSZkUm8Xv9nb8w12cV5N5FDqzpeS2RTXmnWVuAnZe65GnR6",
  "key21": "2fo3GYBdoJcDYrukr4EXq1tghrkkqi78XVX81j7NWG9QxvDdUrzz8sopvq3huEwVUAjJXEdFtJcqPFQUFdXhzBfL",
  "key22": "2NHMQza9km359gTNEBrDPKwtfHw1evgAkMpDZ5KnFvVaU4zTGeFLkHvsRNqyJ1XkDrJebWTugi8zrpdxgWb3Qd9W",
  "key23": "2vBASRZdSM5PSuuNhMb14MCZDP5zQcy8QbGnUzhVAze4aV6SBho2zXrfkBaqS1xH1XWPCgYd5EKcEZoajVrLVfNF",
  "key24": "5Z5fwU1D4DhckBBgXURrzP6j9LuqYN9ue2G5hEvVV76m8viyisiDAFEUYYyTKZpVGpxxKaZfiGxeDCNAEUqB5wjc",
  "key25": "4L1yz7SbHXG3ETXgbrRh3fECw3uSSNZWw3DsDwbPauEZWWs4ybT9hRw9qCP8vPJAQAKfvJxaG2kAq2g6DfsG5iaQ",
  "key26": "343czuwN7nf3nQgWZvmNYERBJqxMTeTDq1cAQVoX5JJgWS8TwfiKKaEDM71p4LuYhFtRFkE6WQuA8DajDBbSTHmu"
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
