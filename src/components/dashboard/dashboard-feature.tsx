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
    "2JvamFWL9RK5ivZU9KevcxZrrHrWB5RJ9AcdpKR9iUgfQwqhuL6izEms96bCjQFB2J6z51ZD4xi2WsZBKqPjcfP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfjBcAKFJuY4EKMCTqQdDwWK8wunBnHZtRn7WE7uGDAiLEn4yn5ihKYPUzRCaMwxQn9MyRQPMQHZJxzt4HJjY33",
  "key1": "3otByGus63mKRu7PmqDDW81NpZo3gaPkG853iJ9CMaveox7TX8SSpkBwoD9wWht6k75hGaooXB6r2JNbPjEJ2hgo",
  "key2": "5ni6qRbnjkzbbPwwWrV3iP8B2kHdWDVebokgMowK8dNYCYz7vYbkgnhewCg6ZP8unW1TAojs7EmShC67MVWRC2wA",
  "key3": "3JM8UBJxCe62ZtNoRsAC14kJ4B7GeSQP1dE9ED6TizEV6fTpcZgHJ6qYpp333SXQLdHsmZ6QkQ9uRad4RWiBTcuX",
  "key4": "5gKW1zwEyxVbp4foGBWCs474WvDHFjSeks18RbJQGKqUVv9d8vNmrnmA67io8QkC6U6nkd13EtMRiZY5XMqKjfnF",
  "key5": "5jMN8ZZADjgoBrPDgz3TUqnYFM5xCKxpC8t7RVys5zjAWCsovA9kJfDFeBC84XGRQfmWBoGe15RP99fCmvH8P9Ma",
  "key6": "3brEDGaXqkfWFeRXzLigpfqUgMG4vvqhoHub24PgMXEmhxNphp6NRzUKSihDNN3US4Z9fnAATqfrYVt15JJGSgKF",
  "key7": "59eoDMfErigbkp6Yq51yDfhqKhWFWobZmYSxRcwf71avuMmEHypnEE8oYkT67pT7rajWz4SahHyks3jyXrxmEfcK",
  "key8": "3E1i5nNr6H876vaYFYa1JLwXwMvHcMiMZwEoHgkb2j6GbPBdCo3Au1MWGJ1UXrUGibf5KLxqJfzXVPQwTRPJkbSu",
  "key9": "rEWQVQiUAVtMrT68erSiv5gqKMabeWbuNNzNybUKEsEz88NsKC3iroaY6DixUnNmCaFcF74r4zB3debwC8KsPJj",
  "key10": "eMLc98M1H6G1sfU6qpTyebe71x3f4B5QDUdCARN27Uix8McnR3r1866Z5Kv6vzpVL3xVLqqCRcHpm2d9z64PjEW",
  "key11": "4JCcnpBSgXsaXZ9fe8UgDyVbdkR1ekpnsdambZ6zfDj7MNZgqBfCQVAs2oLc1PRP7kENg6nUD7i97nCKTgqqrSiD",
  "key12": "cXjD2BvVgFfBbPaWLDN65WkWEQNbZw9DWjc1yGq4BUkXxMdFtvdMRMMS6RNpXVanmo6a3r56LVu4hqzbf2cobNq",
  "key13": "3begjMBmhdUNyACSqAeCc1k73sfxrXRLfqwbEUY2ZZuHcsWyNntY6k7eACJEJkCFUkgMtE74dJinYx2CEEbFzksZ",
  "key14": "2bqNwes2KrUUVUK2kDQ5UWASZvKu5gXarMCW7fXq6W82yw6ettQQgRAe97o2iaeYcaTrTnu8mEFPRNhW6R478BqW",
  "key15": "4hWLXxas1g9S5autZd2Fhe2U2rsxpgDJgfYLVgUY1SkP3drdQ4b2MUidrm6W85TR99U3b4Az2kdJzjKMcW9xz5EQ",
  "key16": "sZqBkXLtakGdJypLDvQZfStNyNJi48NLtV5uXoeoGRAoY4m23ZttV4NRZ5XXyDnnTmBreX3JqENjEGh8KWjEkGV",
  "key17": "65Nm32L69WyzvwxrkhZY7RTQnCa9PTtAHXMoUcRr6BSiJmUNqYs9n69MmVHg6Lah9PWChZTogtbfAMhy2DMpzMs7",
  "key18": "wGQAaGjen3ySSLm3Ysr7YFbccPY4unK4u1B93wQESxoYmDYPgLosKp3fLrJsvdBjymqLjYU67ZPo8URAVZa9P4v",
  "key19": "EGNvDUX7AP3M3edL5SmqXGDM7kDzAbZmg3eP7faNCUnNeBiqBC65XKM2WGgXWRDMnp9mtEZ73d1cvYY6hmpbrEP",
  "key20": "4Q1PRmbjywoB2hzMKbgKha3cPR3CL58oWdvGGGR3BeonKuHLG1t5BNdMbQQoF1GKdNvk9s9TfZNdjYqZmnvyD76H",
  "key21": "8wuBPCBDHoQNUa91pcSMNxcUyVJXyX7xpFYamXAivMupD78Le8PLS4gVrkJQrpxeheq552A5GitSUyHpx3AU3tB",
  "key22": "2LBho6hPQjGQ8ZpeRZiJ5xfsJtvYscBkQb1W1F6m58U7S4KkFrfsAG1HPFM47uF4YmE2ZzoGMTuDQF7cUpYbM2Dk",
  "key23": "25xMn2UxMhVPdTNPqnGRZCeJqKZWbXz27FrzvSrfxFdViyKjzZDcNYgncJJkfXwztRwMrQ1Gk8ekM9c6FCz8ubfo",
  "key24": "2Ju1bdsdeCCnsnpGXWJSEchyC9JbiV7TazD3xmbmiPJDqCJYCBpa6Q937PdWZVsNdSTGMhfn4rWH8xBewa8UiQoN",
  "key25": "28f6TcD4HsyWYwPb4zE7yjoNrnSDNx4Mi5ieYLAUbHbX9dMjs8cnqXob9egxEgSAjh4dpWnJgdTFW51YoV7zcVqb",
  "key26": "3BveMz15chXc7opL9aLZVHkTSdBJdaB1NXYmbdAUdb22PG3B6pG4CNATwqmAJzkqvb784Ngdpk2fvBk8HeDoU728",
  "key27": "4NATqkEe3vNcznKgRX3nM2d5LR5Cj31BMa1a2NEtdCwzKUj9zGXupL9BdxpcdQBABcNS33xZPmkCZ4Tjx5aB47WF",
  "key28": "31q5y444utHGeyLHqjJXR4ZW5Thwz9te6AfM73vbjaUKk26jAXRbtXo3KEzHk5DsiwMzJVKoCw6wSPa9TPs9QWzS",
  "key29": "5gu2NZrsbKKH1h5TYvv2gTrDcbes5CPwWrGE3BdWSEjDXxHrNYM87DHuzBgmVJFeQMa5hiWG5xBAsXhQd415zVEz",
  "key30": "5swfdo7yiHG4W6Zmrp8n2ntkzKZ3R1g1sLWoNxhQgYc7Y3VBYwm2CU2dYFxaUhx4BwVftjt3pGLXBmtepmbAMLch",
  "key31": "2wVcnENfdpi6kBVpozabnVBythGNWk3N4q9cFkhGCWDF4uar1GEen8quLWoz63dx7vQDFPze29shQwEtvzUTrDtV",
  "key32": "5SCZqaZHbfZY96HPxZdmQSqHeKrxxjpM5rhwjR5Jfs2rQq5eYLo5FHyCYxg8u2REJY32WSPjoDrSuNwD5E3jMP1Y",
  "key33": "3MGbMdX8z1Tthutb1Q2NqZhZivYdn5q9BCoQJcbNZwVUZZJEnovzZvmyEn2Nnkqe5iATp69uh1MrKwCnhvi1uZhy",
  "key34": "3rAv3awsJM8Fyb1ChNSJvYxERn2YWYsQ6zuZVoGm7J2sfPvzuEcgra78c8cvbhNvryPt77nm9pQ7Hk6pYavzpS5X"
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
