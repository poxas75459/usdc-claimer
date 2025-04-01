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
    "FCF6XryiFRe6DisMBSZoQeT9ELc6XfPhmWhFZiHVSdLpFxkjsEfCvhm1GsdwnEWhzSeGvzwr1m96hZHCPCYL762"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QsVy8w3yrd4xeKJMyrbM68f7qja4oo2vQ5BcCY6nS9X6RujRbsJjdDHioxx9eZTESGaRENtGm5RkEriVTBWCwuU",
  "key1": "2HmDTv9LmsXp3c8RKYwBmGRi95CFdCWifjTNUvp5mUHK4ebiE859PqSFJCU3T55U3eiMcj51cyVFTjoZrgwv72g5",
  "key2": "5PpoZVN5TyDJ7pGH63xchbmK3URQ7PzHiLGmae7YXMAiBszwee21ibr1sxdL38TFs3jHcHYLEb15vUdrGfep5MDK",
  "key3": "3s2wq4pcXkwc1WEcGSM8UJnTkFgVgdHT4KRb5BPxBUrQ9S89ENH8MATxXp4sZ5iNeUtMyi38Kp5qb6xy5Z6FsfzF",
  "key4": "2GVZ3AhjMefYiNGUQtUrddb2KA5PzMRNyjtrHSSzMHMGCtL1fkVCGRMBhSpLEs2XN2T1ii9uungKNWjJrZ6fJkkD",
  "key5": "2ZB8Xe5TG6Ag8qaja8a1uj9PXEuAkDyXnmeye5W5Pd8dr1a9coYouh9njN8PSvR1jtxnqUyC694uegXozGRoRMtT",
  "key6": "3gom3d5ss27nhfAs1Hs9nXaSzCiZzL59qv1KjBcRjLL3Ei5Jv6aoU29pPV1jQsTZmMuCsvMRXoKk1GqHJZgSgHiB",
  "key7": "4jYbcVKRaZsM5tqDTkxwq6NK3T6fQ5HmL6BqfkWQEzybsG6dEAW7UcDQYeMu1aW3ThVtPF4ZYfMAAv8ku9PRgcP4",
  "key8": "2kwxHZhDpzPWqyT7oF17zPZ6isBhbzPk6mqJHAVVAhp9LYuWsureyFjh2gRxZanUWYc9Q3LKjeoBgVZMkcPhq3fj",
  "key9": "5pcDiPjVkHscVhX7S7oF3VYq14Vum73MuN5mqPs9fko4YR6RMzNWxvQbUQXTV98T2XU54iWJ3BT7sxbSoKSghQoc",
  "key10": "5TAjwFy1JLRrLtyTd2RP4iDJa8o5D2EEX3FwFq7wyk5cAMS3JXg2bWWdYiU3PnS6hpeT61cF3UnAF88h58AzWzWb",
  "key11": "33c6GkyBgw8gJpMzmc4vAGUAktgjrcnQsfpzusA3fBY1MWcpoR5tHJYLRkWbJKqiBkJupzyUTGtaz7W5Chu93xJB",
  "key12": "5bC8N8t8BoXK7zQWuM2HuVRjVQ7kXj9v7LucWH3uS4FzHXURZvfVX1o2fMUm9fkFPvsD12r3h9NeN2wmgVW2GEtX",
  "key13": "3UiXZgtQppsEbpK6SQjj9NnZM45HLKjyHvW3pmu8YoyKp345e37ucjrwEzkPnSvAWKqkL4oj7qrG9KJKWSCPjbHy",
  "key14": "5pTmmpxheF7Fgk5SSRG7xHxrWYgCDALhYjAu1j7t3AeBZhmS53APM1kykETuykKMQz6vcYGZ3dUYUMYZr6i8QGk1",
  "key15": "5ZG2Jxyrq8wb434AntH11cHgAuH3t5TzuuMEts6GUYytMci9rRsy9Jq3FKvaAxhUC7YY1LKE7MqFo1xkdbbEKXuj",
  "key16": "bp3HJcukmUoZnbhGf9z8sjeRHjZRcN4tkvsNK1cqrNiqsC8kZaRofpEkHJnEq4ALn1ie5DHXY8oetbixTimZcx9",
  "key17": "qcQ7biDYAsyCBLVe2i6fDhcPYga3XUwdw4mwNYQNPAgKKBRgduBdrrEpPiwZSWVZqieLp9CLV7iK22Bx5dS866k",
  "key18": "agmNJqxQuLaWxg9RWsRxQapXw6rwZcX2SmiPPeKNFJa5YySZnXR9TtJJNdqp8hJGFLUMSJr25DcEqqTroWnuHin",
  "key19": "2GURnZhFAj3pw9hmrVZmyadTAHdHtKJVqtpdbXLStBoDaqtqReREAs8nDXttiW5AV9Sb9Wi4y4X5imV9DBBKjvhi",
  "key20": "4wmVYM2LGyu9eqn8BK3rKmcCqVqSPbAs62phBPDspUL9ZGmHYFQ1zXxzbwgXmoPcu7H23vi8E5BSxmMwFrdmVmA1",
  "key21": "4UpZZUmxDrMdzbPF9as5vhk4Rz6TM8Sjwh14jjWNLWLbrKfNGMLmh2txk3ifzyPDvX1qVtgGuSfLTMJ1q6eMV3Aq",
  "key22": "J8BndpSxc3K29AanzYkWda7cbH4MYJPKhF6KB93PmYwVBXS7ZZRmshrHAedKk51VkPD2DKMcr2ovBnYAGqkiVyw",
  "key23": "5jBhrtWcX8VumQHKcFEu4Z8pUNiiEh1X1kXmK2E7iX5ccPbSc89MrD2ANs7SorFCuao1JBECMFSyRLJz7SLwhs3w",
  "key24": "CNSk2Q8TAK2JRpdCq1ynZxJwJKd5oWv5nsU37jtBYV1yeHFjKTwuUojkG6W43SA9nR1sSxEkkQeSaftgP15dzwn",
  "key25": "5PQ3U4y58MVS5gLZNPFU52mPmnddwdnxokBh68WBN5xZp7Sa7L7T3Lt9DLA3iuEtMo9guVCV1uBiK5EzpGienGpq"
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
