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
    "4hKkCy8zQ9rCJTz28ZsogrTbBnVkoCywPr6dnvH3DehRi5Rf4wP4RYdfXn6f2E6KNhDCxpr5PLzAhJSQi9wMks2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrEuPvy1xMBPDW8pHfm3u9p4QCn3sn3ZRmsXEdn1SWa4frhD3eAUiVeAshv3SEMs5bY3E5v7w3JA2Wr31H5KoJ8",
  "key1": "3F3hTojWxn16uJznZjmGksoyrFnVG1yFgmVqJeTPuWp6jBCHHbzRsognx4fP5hD1xpL7VkN42wQJjgTASdyEyq4X",
  "key2": "2P3wquH24SA6VYozJRQJwibheZvTBHHqyyBtBCVA1XELN2664AyHQpnyAGCWzWjjpCofMnKBqrdXZQmfVHk4ndP9",
  "key3": "3dcX1dYHD4f2GsZQR6MUkAfogvr9ANjfdCYAoUJ2hECkZHoreMezqD4dgsnQH9yok3ZtPM6vEdAwKjUy2B4866gV",
  "key4": "mBoNSys7Bqx7uhvnw6inWBS4Gat1tXquBXPmDLLHJLuCF9UizLkPRoedvPzZMYJWRME8rKAFcajuet9grM7jYVu",
  "key5": "5rCmiWPhNxsc8JEvpa9kzT5uvm9dZBj4w2oPjhK1MHzC2Ym7VndtSeFbHoTSq4mpPsUfob2Dz6BFFQQZ7MGSN9JB",
  "key6": "24XTqYwukqMj3yfSsnNFyUhH9Te1mXBhYJvNZ4Aq2cmycTZtcKxy1oMu4s4AoFi6EULcLXn8niCWMbcQoVGEuZy5",
  "key7": "4c5WRmt8LVzoS2mEw7Js6iehEujFXtHSdQNn146jyiFu21ahjq9Peb2jJsPRab2CWuxSw6HPFUnwpNZpp5VAiLpY",
  "key8": "4dQfW7yppzxroKiDVBH8pcicA3KqdxGUFKtWq8GLPp12SgwuMuBAkg28q4chNFF8aHFHQ3fNQscZw8Fu8TpQRfNm",
  "key9": "3pDSJCiCEDNHuAXod7xmYEwSbPW7zQCNqxBr8bewsaHgBay2XVX8kpzqZujjqSAhchyy4CMDfjAVxzqKFUVG2Lsy",
  "key10": "5jL3xNN6ArnHbvpTVkcctUEikFWoHNVBUYcdg4i5qBqysQFh9n1Y2DazkSB41yeHtUcFQjBSX75KGQeHkLS3hG18",
  "key11": "2b3s47QfVTEqp1ht2wa65EJXGSubrAgNLGfGuggoZQEhUKsyjCJyXDUVMm8KdTu1Q1neAgN9YCvc7Dir8fLWxBgn",
  "key12": "5ziyMAA9pSBxxpifYtf3XB9Q79muDrR2e6LVvdvcF4zZEFgmbgDPEW7CssidCWdpFgMZ5g9HnaQ2mSTqVEQrn2po",
  "key13": "WrbT6gzzH4dcnE5uVgioqhjgjxD7nnp86RjZKcX36UtMryEimtzcpvtsCy6MX6FTHcjc5aoAWKYkA5xJnBsJM6e",
  "key14": "4e4SCLxDomK4GzDxMWyNoi5Dyt7yY6PzW1temUUPZPfjjaSjfcva76GhCseym875L8n6oVoq3DQBKBYxoP8V2Jud",
  "key15": "29EVwRFcP5au7xLth6XWFDdEHEpU78rYAQQssZzznCHZdHjhcZnDaeQYPJD6oQAESqgJQBbjgHHbzcK4m6nzmZZt",
  "key16": "Rznh88wVNn5apedov6F3xvQ6ioNyTAFcarf6gcBgnisKDgYY6CMjSz6EEEMgQGvbfLNTJycbyZq8Ch2YJfgG2dZ",
  "key17": "3YZPYdwBWY7kKhX2bDiwmQydqsvXvRubhHscMMQV1P48evxA5aW2eJAxzwWqRktHYV1aeBebLy8U6QNYVMcXzgBw",
  "key18": "5otkNntjr2sofDLQk6PbzR927RbwNz6CsbXk62xGE2Bbf23Zx8Pn4WLt6uXkDBUTsXvQDFjzuHS7TUe99DE2dP7G",
  "key19": "5hwTRPgNjDQv8GLCmtwjUwhsFD8nbjeESAgMMNaqF4J7JU8oQRakyHELqKwN9pEVvb9DVGYnj1DKq2oRyfbrsHSR",
  "key20": "3SWjqPkp4cZCRidtSYZk3Fqs6mMK9gwtgBACfJQLAsd7zAmgEUAEWxc7QYrSAivBQREf7VMMKYx5YV8uvV6w7x7L",
  "key21": "ercSH9GSdGXZ75Qdier3BejjS2UQS7wQGnz58WaqV2zxqoEhe8yQ5meaSRyNZnnBNca7XoUkW8yrLNqrkZKa8mo",
  "key22": "JzSUjMZJ8TX2Msz1GydXUxzucEYgERJzhf46FN7ENgA1DBGr9QdKh7qMvSUTKqVGFXwisnqf62NMTqv3xRnwYrr",
  "key23": "26av8G6bpDB2jUSKhhJUjYEzhtdkpuuAzjwPs9nvpDgz7jY9C6fEWSmnXXi9UYZYozWPjq1apYhUis4raB5MPMkP",
  "key24": "rgPFcPpXqvFr5pu4e8h7Tt48tw9huf6f6yHpbzTSZNuQoUhH2g9KXKhzFxEuYjRx2EM96gPBSnioxzURA1vxu8F",
  "key25": "cnbb1MvFJd2d5tAbC23kndZ7jJNgbFDKD5X5tQMCPQeJVFXU3bcxCgGXzS8YrXvSiZ17fZsn7M7vAmW7RCFm3T8",
  "key26": "BiR8MPUs5Vxxst4FcdLWx7cvZZW75m1YNMd4VqfBa6CuiwXdGcmVccKTFWkms2bbPFkbMG4edC37bZ5oo8B9HBN",
  "key27": "4X1sDPxpqYRmXW129yVV7vvB5fY93zBfpR15kkBKJq8Z5A2Z6CGz2vcBqnBAB247PuZoRFDYMUoMPxnfkmL9LB1P",
  "key28": "4pd8n1T4YuV5XChn4eVFcDrh5vnxbDzZjcHnjwv4xWxEDZ5SnrbFS1vhsKkZ4qg4YK6Ysoo7kTWk2cm3rzqGFDc1",
  "key29": "4fyERxzuEQtiscDXfxoRyBr85eerWLV8MTYkRuRshRgdNojQzdU2HSBnixrFiDFma13Var5zKbnTfD2mKEodJ4J8",
  "key30": "3XZKCPe8n28YFoPDN5PrDUaoJMPtPVVcEy3ijLeaHCzfJGYdpyTzbtBQibCL9cogA1Xtx9ev2mMBfeysrNUaj7SX",
  "key31": "X5G5wetmWCcpPU4d8Me5eMBiQuqdsZBz3nXHfxrHoMhi3qCYfLD7xNzTeYudRj9nuktVwbGhs3WRhy7FYtx2DQx",
  "key32": "35mf5GWf9vUKJXWDXF4C73PAF9rCMxg8QPSVSFvkN1aha5YgV7dNNAQMjFq87xET3kytP3hk873chAnHeaTbHQXY"
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
