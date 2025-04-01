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
    "343ER5dVPkv7SFEHp8MntNqishdkhV7qv3WhcUPhmZ8FsxNdXwQp4j2f56niWfSZ4QL4DtSrSddo6TR8dUmBWnsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jMERZfzgUWfMiuGTTVg4XvUxmCrThiTYQexnQcYgsFGtuf3DGc1f8sg7Gzom3Xb9JnJF1UEyLSX8C4DMrEaRhPc",
  "key1": "2qWrkdqZNVk4EiMopuwqi42EXxNZiyVUs4MCo1jr31L3krEGkgmWXttM2A4haoh5MiF2uQXDhvkdTBYGtRY3WfGn",
  "key2": "54cQWuuZfHWKL3Z7CC4Z3zthH5peNFFsMg2PRhczSfG2z9ePUmHaw41WAxNNSrbVTqhNG6y8fi8aQz27gHZMUb4t",
  "key3": "6SzbS9egLD6L1BizjC3cHffQJTBJ3pUS5rzXHZyKXLktK75uQ6dZt5Dn9xo8FAUgZ6SJJxxCUTK4cCiqYggbXqW",
  "key4": "4ULzES6fGq9LctNv9CtPFS4N9gvhofcw5qUp3f4aMJiWut9mstF8WT7jzQ1kjZLgj7bECwBTmfN9XZwn7nyuV4LQ",
  "key5": "Vaazyvf86ysi3d37PmS3PcfdnmANVt5o9PRjsAvTG49skeKHGuDqJ7S2pBjMqRkcdfWmnXiVsFBHHR3hRA5MVy1",
  "key6": "3nUxQ1tBWnB1v6pipAohX9BmZ43jEJ8uJUBDxNCQjh74sq33JL8ULjdpFRQeVvJGKB9MTQyHh5iyvDf4hbXdZEqa",
  "key7": "5TzW7xVRGXeqRSXxvyQQJYPkPvW3UPy6mE5x5JppGtXWNQptUNeNVbfv32xdurdme1oCr4jAzYfBb3C6GeNvuDvQ",
  "key8": "4UPAqFtt1qh7cm8Kj9Likh812jDoTs9Xq1i1CwhYKN6zxFXPEm3hibuL28TyjRnV5y2xrsdHZFPfGe2boZS7Bpfp",
  "key9": "4RDAwvEWofScn7quGbn6EafqtxAJh8yq2t1c8TwXhAutcznTcXksjNiKrDMQSyTXVzDJ668774ZTzsfNLiXVHtmF",
  "key10": "Gau4GEvfKsSfUBVzHaLozGS5zotu5gZdjcJMM5tVDBHRJH4JpXLHuxbk1RXKQzPoizHjhwVSFHFjecTbLBpRVKQ",
  "key11": "3WCcJuQJJTys6NXZa5HzsGbq7mAnKTgL2yh3jdqEe1QJ75issf81EA5ueiF2wVr61ELJaTVj2nYvpRyQ6GBbZKG8",
  "key12": "5Xkqh8teUtDEAuhWjXhhZW6MzLZszvfpMojwYQY1bU5R7rpbizqne9e99NdfEkLH1DxpRp7zEz7G8A3s9pXMUbxk",
  "key13": "5oyUd2GSvRwM72Zob2L2nBsr4We7AQRCiMoqNYVbzjhNeAvvrV7fCs9sFhpYNmWmEfGLmv1XBPNmB5NC7exq7zEa",
  "key14": "LbdvZgjFK35KWSYnPx31WWt5yVtsxVsnLnppYTotL1Q8tcpDA6afvTFbZAi398kj9RgSvvBdJ4rfnutBGA7yFux",
  "key15": "3tHE1r9gp6B257awTvsxUCZVGMt9J1o4FJcM8hq6LspvBVWnkTA6EJRTLcdec1jKEsFoq8JQJhepX14F2s5EXe5x",
  "key16": "5FZV1dcdd7iXRkN1dz75f1JgQUKvjPyMoR4ZUdyj3zWLwfDU2icwfYrMcFw1P3sKvDAVq9HGerCeHQ3V1HCQMcAw",
  "key17": "3MUFaDyWUYGwpqJb5Fsymo3Eugt4nSAAKTpR59N7JTwN3aezWxbApatG3X4w6Cu4ynXuzC9CfaXkh28sJ3bJAjok",
  "key18": "evYnhYhayZJtXub5HgxrNWHWMeZphDYqmdBb3ztj4nAqkjZpJN9oNfnuggqsopCvXNk5t4LzTcboUyw2j8gF25H",
  "key19": "5cijcsdNgyjcwFaLWsZySourkgTTsRnnWja3Q57aM1WG3nreXekJyQnu7JhM37xS6xcvKAjLrvnR8EPbTc3FQ2Bc",
  "key20": "tLBfUUfDeHBevV4EXppRWNSpk1sLfuapNaisPWPjrbmRxJWQinK3S1surRre9awrDyZAAjPkACx6dx5xnrdDAuw",
  "key21": "3trR6cpSUu5GNWdGGqkLzeF72cs9W7GcyfTAyFe9hmJzHq7mRZ7byZ48tbT3EE8gjHwVBQvKz22y1dJX5gKcQReo",
  "key22": "4uVqrSrPpmRqvqq4EReZMjkNi9JFnYvg83RWoXD153NknUemhSEm3wuzpPYDHxNZ4Ewe5EpkovE3EbgjKRvVa9w3",
  "key23": "4XwWyb6AuaX82S63CmoqVfaQzhc8c7LVXcc91imDgVjPApqiHUrEVqnjynroWGL5Jds3hottu8K38grRCdr8UGz5",
  "key24": "2ntu3fGeiDcwZ2rxoUkQ6BMvEGweEpD9fbuWVG8RDSYGxEXsRUZAVWJto1f3HYRt8fRc3kqqrWFPgJYzGdXjx7n",
  "key25": "4MbzD33aPyH8wnQcNXu8ob88F2cvEPJQ7KjkJMY8hsaR8Awutm7n9MCF4U71U7VxZPNMGxQH546NfMHnn1zKRRnf",
  "key26": "CGnJ6B9nZoMsHTLTWGAEX4C9n95GkaAtMepupn1grGoFgvpn3Ddwojg7z1jnu6rK1TnS4SfM5NkGL3aWJJsTw1i",
  "key27": "Vi9E4Zi3LyHfUdPRCDQzoixg81YMBujLPm1ryyoTyCswahXzXovbfDTmi8Lntp2QbZ77nvuq7gbgqAtPJjFZtJN"
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
