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
    "2LTkP82yVrRfkpTN3nxvWEeWBr5pkHUsZsLtsFCozE1Pt91KfXMpQPumqrCCsLJm2GEibeTLgAhu5swREWDcMqP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6mub8cVExfc6mTq2BMRi18FJDBw2x1MUdNWsexAvpm5bz8CYThfQUCG4r7wMKXVJaoWvdJGRu3Meftw7xAWn9n",
  "key1": "62trXsfuLSs9kvq3RqLvyXjWMbHmwWwteCENX9jMUZCyY3aMrsfVe131aDydFoaBzq5ge9bNdMmQQCxAMo8WYJdh",
  "key2": "2Ht4ZQRYfcDnoMKEqspfjTRp7j897dUQZUmT5FayGS99UPYHc3kEgtjtsJ2MpfY29Xa4wGxJaFVzd1Nkq7BoPst6",
  "key3": "4rJvdT1tsuhMdfbb2oxrJmUdEfPC2PKB6Gef5qQqEGXbi2rfKEiRKVG21wUSdNzSR9KbbD98qUrtYkv6Wmfh7HPp",
  "key4": "d9ro2SNmS6XQpFxX6ENVCpeUWDDY6RnWCbsRbqURyeenxfykx9mmAquvTu6Pjvx6g5xU6Yht8A9oqr3WVcERxp6",
  "key5": "5vVqTNxTEFQHDTJMnFUpLu5uXNvvxmZRTPb8dLJQdvtwwDo3M18Asc33TxAQgEPaRktX7kQ9AdsXerzjD1rxAVgS",
  "key6": "XtQLDNRu8daUY6z8RbZRSTkFMw3ksmhEcv5LQBy22ifz5Ruwq8TgcF246EBq4owsnugDxURHZ8mMWCx4cMS1eiH",
  "key7": "CAQe8n3jQaX7sDFQ3KKcGjc4gsXN89xi5ZmdAaVXaFeTkHm8p1veusPdTcwCf3txAEY8k97J9ojQi5NMADStB92",
  "key8": "pn4WnWsc6shj2cyHtrSqrUJZuKgwgb2vSTFsmisDUF8xQMSt2QSpaSkn84FkoHYASgwfSPTnS38ymxfbTsQAXcZ",
  "key9": "4WaKgeL7GeaXuCyFENG6ygwFaj7QbMr22ngekFyBtFxkAxpD7pUgmLTTCQSurNzEnb32nzATHfg1rtZXyoVVFjsr",
  "key10": "2DBZCzwQgqoSsV2fdoGXgsr1Kd6UecDxfa3cEd68x2q8RVsy3Mza964AhQ5qUGxE6e8g8cu3KpyHRYKKnjc9vEko",
  "key11": "666pKNJdbJtXG5eiaRRvSodkfCKnzkLoeUwPqML6Ujs7wB9C72pgqQQGh4YXkbcNZegHQ1gyE1QUo6xjeT6zRxt9",
  "key12": "63fUQ8QpTPvrBEAPVNiHUEVpW3qhUqFftYa1CxFjwgtAhJGA6epnessrPMtC8GnfVKLCJKKG7HB3tar8VsyZ43qr",
  "key13": "62remhBbSZdMCLVrNHmV9KMrjbPhysKLpQjx7kpF4JCLbbeCe8nhvvkkgrR1YSe2LQxptECmk1BqRzAUbMiZRpd2",
  "key14": "4WsLUjswbHYAMMnuuweaykNpNReESyV8aBmWjMZ6rYkefA6L3tdSPwcFCM4zAqnwVP3ZgrUKaSiyZrZmT7PmXn8P",
  "key15": "3ed1wLrEhrSnuXS7wRPmeJosA6xBR1NJgmVNABSXaLKPv2pT7ph37g9C3N1vdET7TqtHVBYvhyaDCA2XZmwcY2Qc",
  "key16": "3LaSPqCwL5TksnDSvFW4tThaDAEWPcyYPTZh7EBDG8NL8XJCoSynVscjRfeGGGt7ApfBzVrS3jbCqdEKG2FdHAiE",
  "key17": "44GabRw2A3M3YvA2J4BP1ztMEWoHzt5ESK1WZZSktv5PTQNFiwME47iBJBq2dv6D7vKWnb8yDmxNBxhN34Dj75YC",
  "key18": "3E8KzJrUZpQfkjqpCyULEHkyUsWi5tasLWoTkpcyEP8DNovS95Nuo7PxpoDTDjs9cFBfB6Ui8NPG3B3LubTRLBhm",
  "key19": "5qMNCCZwBC9FAdf7ipyxtErLqEiwyd5mdTQyu2zMWPhmPDNwcZ39szCk6kxgTCHgL1vPw3kJFnZ9oWWCoo2zxENy",
  "key20": "5SqX84W8AkL4BZYhcueeqcqAS7xoBFjApGiMxqDKa34EfnjQAPXeQFn266M3ESiLGhcB3Csw733zdcK49t9ShPhf",
  "key21": "4ZdNkdUc8ohzWwUZ7VRtQCvkTUmiwsvL86eDM7ZBr9EJvzMcqEXA39KymiSXutCgRKWDSX1edBoWjtmKPDK3nfgo",
  "key22": "8fAoihhRYzDdCCEU339ah7UmwWwrUSUWDa6zeSgrmRVjeKt5TBMPuBCG4nWz5o7AVCcGXCXZmaLHugAJPkdn8SW",
  "key23": "iPfJqAuziALb1Z6uYvdPuVCMUvAxUSUMfYpZ2tUSxwsySqxpUxZreB9g1jWWWZwgZF1Z9v15mDmQMwPBsAJyAJU",
  "key24": "khX7zaXbrfDuoADxZKEDZUjcptoJaXx1UjvEZaGJppVDDrqX4uQLwtiNCt66ToCMwn5dS7aFwj1GMuY4KiDBPvH",
  "key25": "3UxopTuZLctMHbCPUm9Be4TBRxTqaH1tEKQVZLWscvCcpvTvtvgaY9E5QNLEvqYEeCyTxjdmcw9RcHASRh6CS3dv",
  "key26": "3tGUu5udhF1Q3pEz1BpbNBP6xYvZrA1tY55P1rx93LSUAUCyR3JvY7A8u7y7fbWAsgak8FP6qajCvAigoB7dankF",
  "key27": "3kSFetRWBAp8JjNEHR4DqqFgTh13AXxbryssuqcGaz7rbQdiBYYMcw8uu7AahYGgWw46wgEam1D1Edv1R2LQqZv2",
  "key28": "5UXsw9zYpxLXKmesai8ZGW2HvKYhskJRainKEoQ6EoGvoMmfgYQGDjY5pmsmEHLurTQJhqyv7bufu73vHf1nn39q"
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
