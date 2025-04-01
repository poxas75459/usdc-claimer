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
    "4joaZrfWSZYrAdDQdxMtWgP9AEWEsCpZbJAiuHceevT5WtFSu8eLANBVFYWuzD6FFR8qeqT1yh3cKYBU2jah1qob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFDzXtgKAVhrtarPKBT1hyX3k8zEWNw9iS97gvdf9fGdJrppX4d5RWoBCoJbg25Jbvo2vkMqDNJvt4Urh2ggHqK",
  "key1": "37zzJQ9mPvn3LocVC1JoDFap2F4JXLszBGdj7PGK75Z5Yhv6vTkcM7d9Xxmbak6WJTcmPji6TTPefD5BHJg37jg3",
  "key2": "39NFBm6fUyA4bDQ3fk1movButnxwbTE6dZUF7yHg5qEf9c1BQhVUeLJcoX3ffSsjqnTRfigmbNjjmxuAjhzUVny2",
  "key3": "5VvSWxK11ggekuH8rjdechoDKChuoqgewVs9azyB98NSuNz6jbp48dDETSHvwSnHrAqnGpoUhMPHGogTv8i5Nyuw",
  "key4": "azeuqJG53N5tJTbedqFF2vjdJVGWS9UcqAiWbyzb7uMWrPVRHu7YHQwtakPqbXC4iJTY4Dtzf4ZebioJPY1UKnX",
  "key5": "2Pcu6yUQC8BqdkUfvYmFyTUu1QS7LWfpCCPs353YK13bPGspGy7F2uJVfwN8uJXhHwCNcTX398KE3FXFB1LXgAE4",
  "key6": "3RjYraTnVuQ2qJLAmuhHdQLkwHcrcfGA9mtmU7JrCNs2uu5PqgkTbFwHzNj4i5MHWGXiYPvRDuHqDsfLkgGtGcma",
  "key7": "66k5msoL4SyZyUjbbGuNZ8ADF3RduB1jtU6Kkeu99TDa6EQDuJm2DQuCtpzQ7hqEZQmTAyVNeXDoqxfe6juF5mqg",
  "key8": "2EejDBfPQ9vsphkdP985X1rzT826AqQcQ1UG1mDNBkUUEm1MkXcvd7E1dqhe3M8Vq69aSX8emCcC6yeCQ7a9ettB",
  "key9": "eE6w1AqJgxB4GrPsU3kiP1dtrmEdVi83DQMQ7oecyPsf5jAbJ1nQsy2h6V24YfpnqqH91ftry2PuqE43knssoXh",
  "key10": "eniAvdJkn3N79B8ayDQHrUhg6wctHGwqiWRyZwotEhJArivmkxtrm9aQkG5WeXbRt7U66qJaprkMsJjQD5pobH8",
  "key11": "3XTCnVJKVNbrcyrcYkpiCfJcJov75kjdwS2WcmuGux4RKGFVWoqTFrCuQ2CArcdwRC1noUfCWZM6hwhLzkb5vdvw",
  "key12": "4j3XAiwyHqJemmi8RJujoaGjgKh7cootQTY7LL4Zxog1pJcbEkerUX4YqzyL5M2JQD5LLUztdGCaL9cgrrpPvgnp",
  "key13": "i23kzWpWHSr3z8UsS8C6PQSbaC1VsUSUhjVrraSEWQhKeNR5ngSnTKWsDqxxM6mMNqBYaKtYiS9fHR52mN4p3as",
  "key14": "5HEWS2ozLWFJWx6yfTVQCXW38ztK6WtScVs1VeXt9YfPyfrEG9Xk4jXc5x858NbDRVWW9ofqgrizmg8BW3mLCZyJ",
  "key15": "24gLYiiNjzwfjxsM971dJ7KECbERkVsXBgCTf61FPg9FcZnnUs2GF6ZN2RgZ6pV9aUyPQEWB5fqcTHXv6CjhEnwy",
  "key16": "qDZKQXWnEidMyu2vFfz9NGvCFpL1vzVzR55orTKSmR4Pm9tCiZE5jGseqHdGt8AG81CQY7vWbMxsUvNAfP5giJs",
  "key17": "4P2L7W8wWbpihDqj9yg3vjfhhT3juFR9SzrYeHR6KiZuFokbj4WhU2JfJwW8gQTyhbHCgU3yk3xJmMBvNFgbdqzz",
  "key18": "2FNaV43a6WLWYQvL9tgs1ZMqN7zK89StadPuAXZeAu2RmRAr2a4Xw2mLwAEiFdGkm9MdGwuYEpmHrS8TbjJVhF7K",
  "key19": "6231icv4pxb5Dkj9b934KMqZXpeEfhi6nyQS2w7anEzpL9A2xcJsEpmYHGQZL4Y6gV9t1nnyke7xXLc9CEFp4ta6",
  "key20": "3FAp4A9tJBHYZewoLQCEcyRE8XPbagVfJmqdvxt5BuyVGSs8gKiynfMpCR3rVbUHZsJeThvoRAb49PVYNjKPwKx1",
  "key21": "5dcg7YkvfTCJHdbqjQP6KebUvWZbbggvudpSxttP5rMw3vV4DbDc8gfsrWeJwo85qiBraysgQM6YCotNKshUKa9S",
  "key22": "2Z5svwkvUUp8NsNAf4cFuahmqScUXybCqx6dkZFcDULRPy1EHzwH5nsYBs97BuXjoG978osXB5L6psMYMUxL86YV",
  "key23": "4gUtnTcUwjDcHiYxyzVqrf99N6xtdAMBBRr6A24iMBd8B5f8gDgKuNC6ZUYdoVi6HS6AB3tP52iskK1EyAaG3ti3",
  "key24": "DCjBW1Xm4TrxVwUKxkCvZKZwYih6y6PMZNL2GxLJySCg6Uh9vhwvcTvEXzXHduyUEzcuVdxeGtAj3ahyWhkxBYi",
  "key25": "egKZDB9k2oym1RX6GjM2reyB4FTRoJhrf2X4JJhwJhZGbWmLWpBftotu7q5cfMgH5A3SaaD8TzLeErJ5EkES3tj",
  "key26": "4XDhzaYXsXp8MNx1Z4Zfq44FZcYbeygkSwE1R5uZ4duiBigmBUEkfd14isKyDL9cwZ3whJ8XLyKnMbKXTQp8eSVe",
  "key27": "4ADyk6qdP9zPntABs4xGTnbbR6EDAxB3oD65Lx2wYgVHKojgXWqZdJ6LFf9Zo3tqYQgG8v368FuhzkStDXzEhVc4",
  "key28": "4DjeFrhAYC2eiKtVEeZmdd8tjuEZEUT4EPQtCM19y3dkFvFis8m67SgkzBLnsWPVzK5WkzLJJfeyLMDiyEzrqSK1"
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
