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
    "AvW3rwTRK7LBs7HMX9X2XMakSoRNvbSaNjBS7mgvakxuNf2zM5JZY585uWAjN81Zy8vKCXenDPcKANSnJT2nZdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bHp7WtwCMrCmnK8UfTefwqkYAabPPnrQViMDhrHfPc4CY6E4oiry2zpsru6A9EZqgLBFAu7XrJkLUUJZVMvYrW",
  "key1": "4bTdukdi9b1p3GL4Sr2ChRe4EYrG8vJyBHbJvjTUsAcNFfMjYa3AvyWsRYwFrqyagZ2tF2NKMqKD7ZaX6H6ifQ3A",
  "key2": "3WrbhX1o3YyqJjWB5sJhHu86WFDYN7BcazA325XRmHFznaegQvMfsQhJxGH7kyhz2dCtsaG6ouTXhLYXfDLwNHex",
  "key3": "JrWi6o27ZbC9SH5UoMcx47Pb7eaty3jHeMJyxnWtibVJdcoeAtTpRooMP2jMwD6FawdEUWx7mqmZZuykimmgLKn",
  "key4": "5kwbfo8idSH8cXuqkfgD8wBNLAX395VpRdvkZKfiYxne27VTv31uB3ww338z8yMaDFNVsWSXN1WhvcKvpBETQdyA",
  "key5": "5MhWihTuXugaPixHV2KjE4jgkZ2QicNHGM5Vbp4YcG1K21Heoh4JYR6LcayFBW2RdieNkJgQ8dQcFBB8CQbtQe6U",
  "key6": "LrJSqe1PDprMyMmj72DSVuy36G5FK3qdAcTYQjoFGUMF9Gd7hLJ3TVge1Kyh88o7pMH2R3grp9a6qsxVh2XwX7Q",
  "key7": "1aZFSqzKW9TMKAis2zA9TYaju3mGAA4rZavJpYbnyBZkax3sKaAgSPjNDybn25v9w8TFDZQNYRTvaZ2f8d8DuBJ",
  "key8": "4N8qiHXj6Tsub57Jgbf7mxoxuJcXzG3PvNg8kC6YaBkgwhTyDR1nu7yn2GbfdheXVKUJy5xEEejL8gGWV4AT9gSt",
  "key9": "3vtf3YssRQSbVR6PoDiWfNUzxy5jdmkLkz4bSpsep3dfYytz7T4qzQ1EArV9rHFPjG1ndXqkHc97SsSUWzGft6Ck",
  "key10": "5qMwhHn7hL8sfr7WGwZNuFj8soWLFJAAgUX7AXqUht8CFZxAZq839bE39WbxptGfwxmdajQc8n9kB7tNZ11kbZPK",
  "key11": "4kB1Co1apohmv9bYPJHH85akPDmeqS6trVp9RMTG9M1KcRUsZwsckUwxD9HuBSsWzwqim8uPL63LtsB9af84ttPw",
  "key12": "xytksNtAVXnUvDV5rhMgUM9yW2tTSdb4Lx18GSVGoF1USzqPy57SGDWcmNBbWS4NwerWoWoDqR7cGzX9Q5srmnt",
  "key13": "2ciJrXPqdo6R1WZ6UbuCwjJtWJS4CBmD6MxNPu52GqnwtMSRweqpxFskGBSnfnYFYVGpBeUcLQKBNGyHsQkzH7c",
  "key14": "5FijZxm8pGpmv3PLbdxgviqpysTbn51b1sqoewV1UG7JkZAefDuGK7dCjDuEmJCxJQogEYyWnjpXpMKhPAcdFAuL",
  "key15": "v8TL9fJWA5My143zbsJmpXYM3hguv2cpKejb4xNPnAEUL76YiRzuNfajETf2Ge52PZdLLGVhvUjB8rNUYiwkdmG",
  "key16": "bMfJnWf9DCB8Vn21daPv4EHvpcXzA7farnNJt8QSwVD4kG2BsPgtCCUJBqvurdhXczdBYV3vkMQTPzdxD6h1ZZb",
  "key17": "v5vUFtVWNQMVLsh81VTk5u6TpsCc4SGKWE5i4pBrFMksyem3aCP4FxzLSyW5VUqfqLFr799hndtNyJLcmNNv3EN",
  "key18": "57EQSSjYeGU4z6ydW9szRxv1tBmjoHUeFPubvs7Z4KL4FnNebay87RtmXyueJUoaeRchG9FQSr9DsdXt47roRpEq",
  "key19": "pYJ5wT2QTYGAhbUPYkxnBNM7iWUoc9G6eV8bbjFgvFgjVcU4VC8PMj8EkeY8qykQDo5Cb6JSpHy7HX2MD4sydUy",
  "key20": "p1ag9JWPChbEMzbP3ECQ65zUnFqDioca9UstuNcC364BqmQntSkBPu5jmTZYVH7z3obPexggvgMv2sSG2MZHTqB",
  "key21": "3dWpXwcPJCFiY4Nv7LxSnbZu12BHAYo3QyiJnRrAq4QjoA5bfGhyJjAwSPZXDZbgm46bpv9mLToAU4mMifcRGzaw",
  "key22": "9i4B5wk3XRjFiHEQc7cmDkhAbiDcWd8MPS33M8gp5EbawcyhUjje9uqscfbndDWSupff1A4LgCnbwN4isq8SRZL",
  "key23": "47PT1Q79emjU3ficNpuHNfrASEu6B71vSBjoBt7REfmsqWwYCbo7mGLPspPpdnupb8JjEHBBnqtY21PT45ChHkCH",
  "key24": "41Yffm1s5XumizvSaqXbYwNJ5KbrsdddqhRiiRo2WTGDsVYkMW4ooALRNBdnomAsvGYvmnRktvZgh6EBR5j42ARh",
  "key25": "MqeDxZnLKWxda3ATwEkv74zPC7gjHPqZ7DxdYrAoYwG6fMipRmK9vN9SDJESTcVwmctUk65LhGuHFAsCnWZZHuv",
  "key26": "4Sk5LoBZtFiwY8UAQgxvwtBqyL899LTRDmgmynVW3W1mrxPkzzVG9JJX3EURi6oHP7QATdyFziDdfGt6cfytYhUn",
  "key27": "45D3TW8Hzx3RPfVWw3VmzaoAG5PHaLyvFQUtrdhuvttU2rbHAXiGrkkmjesVUKdHMwHp77vH4azyobQMr2qQVXNj",
  "key28": "2R7DQwNY74pwoy8edbz7S4pz5AGZNWEJFRQ1ZeGYbGmR2HYSXX8NfJCdDT8rEctW85wWZ4YGG6qceAKyPzP6JKBJ",
  "key29": "4kQhzbuQDSQLzLDgjpeGJFp7Tu257iMSxAbLkKtkFukGyuxSCDe9X7YQxHm1wq3vQV1rD2xhpodRF83vDoh26gN2",
  "key30": "2bKaCHRA5bC4ZeP4zurxLechuSFfSzUawks4K837Jc8nibnbZA3nwGHrZEXQjD3kjHCrrw4nZdxaq6AMSgGbswf2"
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
