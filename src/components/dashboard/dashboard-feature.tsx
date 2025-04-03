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
    "33k6UYKVjJCVSZwKvdux5yNABP4nBN2dF7cFnPTHLKYtZfeCoYUNkSyB8FZffHyTQCTZmPKck37Nnjqh7gqwkKJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQMZkpzpwo7TPr5xoJzb44p1pNXfbF1z2WTS73uFcZxfSgn5PqsK9bkVquxrKUnyVtuSBvz26W8i89ECpKmBHwD",
  "key1": "kTRW6iwrC9qcWqSkrREn23umsqqVEoguHUgRWELEggaqJMwYKoEq55yBRk7mhU513byGPr75LsaeBvZWp3ka6Lw",
  "key2": "3w291kwY4o2X1p97iiiEDTRGu7UgygxFSDRqnxrdU14nW3h9diAnNq8cJLiWkTSQLxfcMMGscFrUUE9Z4nv2Br2x",
  "key3": "2ZvvX1Kwjvp97AZqRFW5SzgUBSPoHKPzksVZ6dccGXhDGn5PEeSMu3t6LUE99UD5idzu8FnNz9t5HpU5eJhbLC4v",
  "key4": "5XejzpnLh1ErQUf6q7t2FqX4nGcrmVaJcYMXWL7qVDp2roxshtGvScJwQQa4C9qaE7naYsRrrGbhogSBiUp6WZLh",
  "key5": "5N4HVgQEgBy6xDT4RtqNemmzvcozWDN49YSjkkADFewzf2mULnp2zxha8MJDND1tqtiuFGYkJTYiL2e9HW6wmuws",
  "key6": "5xBDeD824GptucSZPzCHPbkzB2oi3mnFuv9Pfubyh5mQs9RFK7evBhwRRQQuexCSp3p3ySCxof5c9osucD4oZNRN",
  "key7": "26CUMo1aaYSf7wBxUz4nsWTaPVcGqfoV6L3qVz3F3Kcpc2Lyy2WNzNC5wBd6N3TqkbrowMJcdeT6xXMkDfuiF11E",
  "key8": "mMbGczU2R3Mxxwc99F4DgB6agz2WKuGNVKgyfcBu1w8NxTi7Qxn5ytymTvUHV8crUCaUFkcz5ytnMNB3X3npLhL",
  "key9": "3azm69Gnv3S6UeXNCrSWbMEw1LakT7qGKN8hRHHm4v5LXiv1rRQzLkBjS4my5skn1N6FuScS62CHbMzQQAcPcK67",
  "key10": "9NqCPXuA2HNSQVttmdqkcPHB7QAZgDFzFKSEgHB2NzQt3PwVpgLen7dmowZKx4AR6Mga2mz71Wn5u28e4fAg5eY",
  "key11": "4kU15cZxxwqD2cr7PwnVVBNjcHo8z121HNhBa9foZjYL8iuUY3yqGJo7A1fBcgqC6PLq6Kqpo7rYgvCMXAqkHWM8",
  "key12": "3cVEzBnGmNRhcqRTjbfg5pi9NNnnqFRrVyzZNHspVHQfgJNLxarvnH8X3HGNY3uCeaNKK3rL3bLso5weCThhe2ge",
  "key13": "Q2S8NReSMH4veubrCeDA1gXznNmBVTKXJNELM16bEjN6BZAmcGVgygB2A7MYcxEAH4GTwHtK4jU9qGB9rYoV3Ga",
  "key14": "3m5st8twZRQq4SZ98VobuhKGjzXVBHfUpQjx7qjdGY2v7wQTG19ddhxKCTVzkY8YrrrSDyukEHrLVK89t3diRAYN",
  "key15": "pPCh9M3J2damDg4ehkvE5yT1nwnGAYenW14LUbaEwtxC7rMpVNSq73Qg6K42ZP3THcZ2Uh324MBKK2EqspSrEeB",
  "key16": "4eDQZiAzhJgHwbBnwvejiG9vh51xAXsHnT2T6j3bHWsHzKEKxCNuxXb2ztXi7ivqShqFHPME1PHRaAaZEcVH8BCQ",
  "key17": "43zEHsGNym7UGpXWtRA8jm1EjuSQ9HifJ2gbSKecBw7Sz1VFzPtXDctnBHsZBZ2dEYoj5XhiLjCgHjqaVhzsnbof",
  "key18": "Jvwfbkyu1aZqpcY7PiqDQPPKe3sNnANDuDi1c87tmabV8yohgLFgCiW8voSPuiwy88wCH3XP4gB72tvgjk57pq3",
  "key19": "4R1Xk4zgAywZA3gzJgEgVYfmb2UL3rwzYavrz1oeFTsHuSKcdAEXSpHKv7LWxwa9YsgmFLhAP2t3gSDBLyCKr9JU",
  "key20": "YAzPkqxj2KSNdkCjmYgKUqqFgYJg1MXkboMbfk1Ae5Ff8qeE7GFm71VfKyQdzg65UGTa5Ro8PA3GTrontZ4spKv",
  "key21": "4WMHpiMvx7p1nNpPfV3rFD5SfWiaJ7vtY9Ctsj1aN5ge8DSHExiJZYkNNua3oVcEh6CYTTD1kY2iK1SpALqmnEUV",
  "key22": "3jtMmmZUCWNPoZ2YzJXQruBrNmtdahM7CHMtJ1QsywcM2gyqkx33icAqxJEVY6evwbumryF8DShnLWh9Vwr9Vbxe",
  "key23": "5uDHscmexsW4NxvcbAMJ1AvGQgJDZ33wHgvYdbU9LprjGRFjxziyjjaAgH4wg7n8eUdk3Tx547BHiqUwXhJn9qZv",
  "key24": "4scgLLeuYfehsukvv3JdcMvUdGBLEJLS1FTuyMJfMXrg11X41zgneeewpFonw9bZNKAJfxhvyVBT3JUM7L9hcu4z",
  "key25": "M3DUwzFy9UesxE4whSQJLJ2wgjx6ZxfVBQGhnvHUTtEwZP7WJmgwPJjhSXsJ9ZVxSkxvmLPGTjfZv6eYFYHBCC3",
  "key26": "5x6TG9kB6693ZajuhsvHL9wHWaKGYpNvvjy9bZgD5jdeeQhrNvv6gvapyzs2PN8KwsGLLQUE4kZ1RBxxHKa6DKwZ",
  "key27": "2UR5pLjbd16E7XWXTTQXvPQFu2DSZ6hXPHDJ1hpskkxnmsR8jPK6PToXkxoD7mfc6rjE2HKavCddJ77R7PP6AeER",
  "key28": "7q7EENUxk4qvRnXhTZifdim9tdkNhnRi7ZEYmkQXbAjeiTQbithYY5hPGesuLEiTcv4zmNyQWaYMT1Jbxonh2mG",
  "key29": "PNbbCSX9mk3YuoNcu3arEGy4t11X2AkSmNrYK4NXgoPjZNpFux4fz9zTdL5zPtAzoiS2inywNTMhBtdWwrxy2Sx",
  "key30": "wmwXykw9LKeqW35QN6gbqGJfXVWSwbCZiJNZjUwHhWQ1EUwB2dqJZMWDiqNUZkUg4pcyuRPLFuJFD43193KXpxH",
  "key31": "eWk26jhYJ8puhXg61MxX75he7GYi1ES3JyS4MxER8bDv1kcoELGc7XqiuECKTGm4RS3Nzijt8z4NcNXwtPGUFnw"
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
