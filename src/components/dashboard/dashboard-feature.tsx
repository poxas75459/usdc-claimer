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
    "656dnZ1FrDZzjpzkUxco35yRP3FV3ML2wGDcS2z9VaM7Xfj4yieEdfVGWraVz1LjGy1DrU7Aua3NeG8JKpfZxf6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYhYAZGjv9LMNtAwmjAMhhAh44Pt8BrurQb9MiGDu1EPiNg6uSHgpnoDzgjpx7cgk9dTuhZ9NwV7ztt9XqJjFcV",
  "key1": "EjKgPoCEL1XWDMrbqmHm6iurMfYUFHL7C95tabEEe3YBVX2LxTNVVKZweNdWryYiLbkuVcYoTV2a6FKm8pN9mPV",
  "key2": "3zFLFnXswFjdXbmLzwDhBnYxWNkrzHBSRCZfMNGiNHrnTdAhEg1WDsXdepgJK6aUft3PpduqbQ1KeNTWzFY7vvjd",
  "key3": "p63685sWXs4ngWXj7rZQNaxZTmjB8csTMqpj6pwiksK97MQu9ALpw2vv6r7RWaF2aap5Z4nhfbQhWrbgRLcHNiq",
  "key4": "QKXLs7deGRDa8uP4M2LPeALRfx1EfCoKn73GkrdNNRTEJ95H9XkYL8MAWzeQCW3ji237zLkMKvk9x6JVNvLoEtC",
  "key5": "2M1bhm87xZtiNUng3TAVRkAGYJdjaYRDGndDn2NjpXJrdXGyZeqScvx1fk6vjpamwj6Q3DNRh2oeKdyHdCgzJRbr",
  "key6": "3HL8ZtgrsFPqQ77wEYg2S42UFXskhMEkpGDvPzZP221raZWveiLofm5p1jCpAQq5ArCc7nfSPJ8mu74TidmGdUj8",
  "key7": "2LBbg5WAD9m4nCsvFw9fEE9qfdVhKG1Vi9JuNbf9NDYckDcK37h2h4cLJZ7nxUXwGoJhzvvJShkT6kngw2VJpiVT",
  "key8": "2zFGKBCXkPL8fwra5JSFNQJfFpt9FvfKJE4ZwKKXMm3hC4oibnfhg94RsmMPy3JtQAPo4KTyhof3ADgdW9CCT59",
  "key9": "5r3mm8JBEvGyvAY3LQ8FWfgMBfCSoyYC8kjwsTSNN7bETvFQ2zTX4wgiDZbHbGb3mFWrJx96ecvHvtNHsXzmESDf",
  "key10": "63iQ5iTMbbvDdKLD5FbHzs1DMNQEQdsXxmeF3t9vZ1fQ5pkj3z5U9ZfogwQua4N7kLjjbcfcFVtQkafm1A5eAACW",
  "key11": "4yqCTQ7GWZK9KEP5JZqMxh4FWvBEyxvsXiU26xgfZ3RyPiQrYUCqVnFz9cMTmFYHwB4NeNUWfav9wri3gLG2U36y",
  "key12": "4bCYr9tx4JFhh94xbFJ4xAVFk37NvXe9U3K4XWwQwJVAzdK1vnFnr7JSo4DN9Qsm2TeVMmKiyK2ivPK4a2KQeB8w",
  "key13": "4v8jdPfQCnmsJnzZhXVvBsTonDYFWtc1dynF5vmeeANT3o5FvKeSQEmagVpqpfstMLzd2i4s8m1zYuFuZRzXgwF2",
  "key14": "5LZDjwfZ1e2HLuT8y6iM1vZZ5JZmdbdrd8rYpkZLdyqYM5fgCG8C76mbmpBg5UxZUmiw2h7CUaQVSnidZosYXEgt",
  "key15": "2bszSWWNq6g5DKAgCwjUUgpqY7Rv1skD15bbJfbyd2z1dq16zRdBF3YR14aaLuC43NUrnX7ymWKueBUxM16GeJPB",
  "key16": "5Bhgie1Uic2EEY2uZrJEdxMkzyCo1shvTH69iba8ag1b6kKuPXMeXZSEfp6gYR98H8VMn8uP7A7CuGrpR6fHMtJJ",
  "key17": "4vuNcneA6uPkMWrfyDfuAWbSymEVrWQiDcdMjQxnCoJUH4VtAPwt1FneWDmjnUMLuVNpg49TQya5KEBV6pB2ZCws",
  "key18": "5AmhPE8m4kuodsjRVyuTZacUrnAmTjnu6L2m7Ue7XxQnQQZM9pvMC4EsEEKCWgyyEVa6fZMC7k6PefXxg1UiPZPY",
  "key19": "4LWP6TbyqncKSvmKGjHCkHkBzQpzSEXMP3jUdnTE3JbnF5GAfEWbpXv4WKDwsvrvpKK7NvoFk3pt2bPXyzKHrspb",
  "key20": "R82W8ThLnQVYVnnRu1bMqtpMBC6gtSFMnLoyLJS9LtxsXEPDDXt6f74V1XXuzibEGhxTiNXt2hbJ9vtuMDk93bg",
  "key21": "5zqbjXMZPJdPgiow4hS1YC6N6J6sF4SEZcsH8Sdirg4gytBqrxGDBohZ8eHE7z31TrxrCCg1AoUzc9tKAS8yybw7",
  "key22": "5VPazd1ZSsmgKYyXcYJXAtAWcDfZUjek3CCAo4tqLBQfqSzZdRUiivUcrBncK1j7gCoo6bcus2Aiqtg59D2anYdC",
  "key23": "473Frhh28rmX9gNVjKaUBC1TXPsMTfPougMG5Jmmu2o8rXJQBft1rKVaRyVnyTrXSv9kcH39qHUcb21is25pkHbM",
  "key24": "2hXq6yXDF6WHQSNP1RfUjHyv9D8tLLQVU8MxwygMirvNdEsuPYk78qzroNUVT9QTNgiFtvLzixVwk6UHAsRFpDg9",
  "key25": "HAdcSxxiNQxZTGiGeGf1tfyxQtGo9GViHBhRxeovQtyzTXPSyxrCEFM8QFKiWxdtt3WzYKuCxkdTSYEnyeAr7Ne",
  "key26": "3mfsi8LyN6xn91ekZjZf46ECu3YpReBP5Gny8aV6HHeuheYRshTKujiNUwaYWapkzk9X5d8hxnifc959rsaJBtsT",
  "key27": "2uvk4L2dhS8Zyk7pYqAoUSwWv8UFEYcxLgf4gtti3DrSm5K3n6K7G5vtbdXCVwwHXdHz2PRPijgSxqhyXMeP5ne4",
  "key28": "4JMvQSgX256Bw816XyRJP76NBrvtXSjGJmACP39frVne5Kqyh7DsnpoKPik837vrSzYoV2gkpHBYWeupyZWsJDzo",
  "key29": "2Ppc2doxW2ukLsmxXURwFwEAzqtLWAM6iTuWZGKmbhD4hsdugCJcfzd6c8p9GBvLbWpFfJPk7R8RqGR7aiA9mikb",
  "key30": "6HAuh1TZDf9Mx8agCXjrdds2xgft2efQ6EwBZq6KerQM3kNMTnVGcJgQRqxYmNNhrFBii3MoTLFYyrsecfSa4Pj",
  "key31": "5CKRGkXB3GsjHeoGcWem4Do6Dsr5r6MHryuWU4y8RrY5WYpZGs6sCrYAtWyUmBLVoLmUPQPUvF1QN3eyDpDNDpYA",
  "key32": "fabWtaBtXNPNRbn2sRXMJGjuPHzaEBCa2DW1QJriFKTKFAPKxC4464Kb1BXZbACJpmQfpGKc5oEhCZtohKyoATk",
  "key33": "u9moRSrKk5xQ5oxx7Y6rN8fpc1qzZLgmyxheNFG7SMZjZ1fdL59zQqHaSLXaxiyhbnywdUu3AJ3vKeT75SnNHhj",
  "key34": "YUPTiDnxXKfZwEohoi6VYc9BpMakpmDu7zL4jRdVWuCpsRV6REhEttiFZDqzovzo9QyrWFxFNxgAZUYS4ehmeRt"
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
