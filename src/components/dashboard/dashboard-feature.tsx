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
    "PcxJaNrado2SAJcfYvv4jhmC9E5Mpm2JTB7U7K6Aiy6Z5dJQ9q1jvYZV5ZGNAozLXfFxbSgAxB27gnrJhrmSNiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6w8cdc3NXwdTUZnYQEQSKmc3AfZiRjWoRnKt6uHBgcx5isLtVr3A4CrxoNedNCtLV2kJWb6kt3dbXJzXrhSXM4",
  "key1": "5tJS2LheTo4ALsfrCcHvW9baZEYQJUgZGArLiBB5GHpBiChogmokUgm911hqrbgeGLw3vNKUFj32cUUhkm5B4Q62",
  "key2": "2hEuNTZWVXqa6vUu6zit5taEGPgobsjmiEW3srRkag4fWWoiav6s22QaXmpsJCBjzuP5e3e9hbBi9eKPmJwQwtxp",
  "key3": "5rsqG8CRxKQTZ88inwUc3MyR3frBfWqRPcdGVVWaMT7Qh1dSvPkFFqxyiSPQe2rqQ1Wsb9ojj1mVSXZqEa11pnCX",
  "key4": "5kpsFT68d5RmCX9D3GEWQQyEKnj4pfMNbj8xve5dSnbmTZPDvciYxCXMtaYCkeEw1dD9ucsB8gUFSNjxLC24cZ4C",
  "key5": "4tFo63hJdb2Vigjie4Ra25nrgTXQ43v74d3PtE3va4RoUEGB4DTxsqHgvkcAE4SQwHaX84e6hnc8dL5RoVbwwaDZ",
  "key6": "5CDfAY8ifDTD3m6p4NogKiqitFVMUrqpFXZTpNVrZLGLFgnrxMbcxADSTYMD8ntwP9z3JD6DtqyQxwk8331dowCv",
  "key7": "3qFtKMB3fuaXhA6VxxvNoTdH5BkiPTyk6UwDAn42dJssgwGF5zvDCana4cCiYTBeKZ8xWMBzCex3VcHKxG4YdTHp",
  "key8": "4V2p2igPqotHgPPtPQ4NpMHSymvmeGdsU3gamwxG4Kbi5xotrkPp9NDsPYepm1whMXoYiUsB3pGi1EjYi1Jrrdei",
  "key9": "3t9EJ7tc1TC5jXPUZidpH2QnxWQcxe3CUzBNwr1k4xcCZi7HdhkCJxkXTMc2GxBxHJnzDDzshzaobV8T2UWNqKLd",
  "key10": "D4GMrgaodwT1WEHJwTSD9q2qwqUH6K5rozjgg6y3zE9z8qrBkYYdkRRFZntJ7vp5hAwSErGN3qbf7m6XWLtXQ7J",
  "key11": "3xpMy6yd5YP2Z5cqifYqAPqabKS8BgvjmL9KyUYMPXcnAAPuXSPkaoADaci7sfSgWp32EnnJnia8b4w1WmEuRcGg",
  "key12": "4UKwUgHp1NYq9qx5GVYSKFM7GZpZdSRez7FYEBtKHDHdkuUDm9Q8JBmmJCecyWTCigfP9YjtkD5H8bqDHTzWiQjH",
  "key13": "Cf1STPPm2ekzEZTvHdVEVqUS8SBMWjb8rx3b1AJVAAvThVTxMVWLPGwuHcGBE5fsTvbFFLT5SVUbQkF5CPgnEy3",
  "key14": "4BX1gLQgLUDsdHtyL6Av52uqK6fHb49DNemHQVhpHQPSgmPhCSPbpQQ849sdzy4rKLxVKNmqRZbc9wXSbsccLuPR",
  "key15": "gw3LbywuRBQKaqnxTxiT7JRems7DhLxhVyy8YoUC3FMh1ipFGw8miy83EmYjNTXNVwgJNJc16qLTMBLtErbgVn3",
  "key16": "3QZxQi3tsYadQLYXYbh736k3xpmx9P91vT5o1pRR7dpKpyKbrJo5JdBsTf9uwSuf7eVHAVDsWaUnu4PVUvjjNcRK",
  "key17": "22o31ExDvcz3WXHyYPuCYb1uyLHTcUZXWDModzBoWG18q7MLwTyYWoRCqNjHqVUq7UrAURZKYTSCiwyGbfsFZkQ7",
  "key18": "64sWVwmmZKwE7E8L2PScok2EXq6RkaYM6Toz2QjFJRb4zNquGsoGfzwSQJo9VhyUK9RnooHBuQhxiBENX1R2qiZ6",
  "key19": "4aE2BqFTwihfvqvM6XEBfXma7CNyZmXHpnAxATSe8nXHZ3GQ6PKiRGDt42r8P6UawNk27iB5qTXkv4vp35GwoyNc",
  "key20": "3q8iaakV6fjqpbJRw361WthvrgKG78jounRLR6GzgfRo58J26MA57Px6fWt6m5QDZSfi2TfXhzUxchSQPSbXSs1N",
  "key21": "2koVMMBshFuKVhDtg8eWV2Xp2ZekDTTz6Bif9jmsMfuEwshLbrCauhFpem862fw9SoBuHdGt9yMqzWPoikqHqY71",
  "key22": "3GzW5oqTDDHQoePpsawHGMneM7CPhdFMTqz9KkgjjLapL3gXGnqPjjKojp2BXYnz5vVsZdo1yAXn3TiTfpLQFuV4",
  "key23": "4Xtvt3TUy7drUY7PncB6fR9zm6mjP4cKJ6CMVa1XQLerrXt4E9SGV1VB9SXRshKu7aneZWXectJEYMSZxKxWV6gU",
  "key24": "CBnGU7XYhT35XZ1LbxiPb2dfiJJdZTqhV9gs25VMJLMwPNbSBo4HkyL33cB4tbaaPff4b7DAJ3mub4jjdokSaPP",
  "key25": "4UJbH46pvyN1PK85pqpTN1V1jCgBSxpWBLtCB2jAHsx79THJ6MRsi26VB8TgZcjki72mWswNE38ntWDzNfrJ2DQ4",
  "key26": "38VgrVxKEnYr8oUXXHTrt7XSys1QdiSnDZC9mM42me1UQDtvB67iRaDzywse4bZHQ5w3U86Dj4fUutKwbA6AZZX8",
  "key27": "3NDQJzH3KiY8dMey8yi4RLfLr9Qo9EoLhyKJwnCQwDAZgyv86ZY39CkcmBagBitjejbZVPzca1ZesTPYuMBvw2wE",
  "key28": "hkpeYM5UZ7Bh8Jta3QGYa9b8GFm7pcbBbWGFJVQkTCGiHPdyLgn4byi73K7jREZ6BZ2X4KdiaVGSUHWfvoZFZkY",
  "key29": "EcXz9q3XnJaPbbnWzLSyp4SoMRyGEcVApjFG1PAeByRWPxmN5QY6WcWwTdiabjapGWMzPX1RHLDjWfD8iEZqQMy"
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
