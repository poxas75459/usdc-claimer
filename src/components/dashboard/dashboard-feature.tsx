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
    "67nL7FxU7kVEkbZcNmqbMfqSyqNW6oPHPJV4V4biYYit4LdEoaaC5DJUnAmAHiWnEzL2jN2oTVw9v4jwuC2dsYS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEWYoAohNK1TB6fLjFvSgjCJgY44KNHKb2De54WiYsLLFUpjZzfm7Xo4aKEUBmfGKardFcPoFK5Twkf7d3Ygic9",
  "key1": "2BTJK7usCXr3oqhKdtH7DWNtcyaxuEQt5kRahAXFrqSVaSHkuyDzxTiKWuiPemtHCnVNXkf288UViL3FHuXem5YN",
  "key2": "2UCHnoDpzW4iENdrBEmsubJG8RG9EbZFgQqoiNY7ZFmo4rU1gD2yUYTqJw8XFfyqRw3RxQUjYijwWdjHAx5WUVjD",
  "key3": "5zmt8rJqUGjN4PxVjQYeepuYnqtmuzWGTic8MnzBf6qVThVGRZ9pumpYSXgTxQZQFffPTi4CiokbrJD3RURYaXzS",
  "key4": "4fXAZNdFw1oMmLgejZgYWMsNDbm9xF2vcFXximHJve181N9qXswQLj9PXdawqfFrvb4dWYSa5KbtDXzudoJJGQXo",
  "key5": "4exiX5mianGvie2yYrn7S8xQN8sADVcnydQvNx3h2iWrNZ45nExZwDoqEGUM2xTnvykb3JuLC8BuPtnDWSdC8erh",
  "key6": "4WHBwgUxsm1CebrGHKMeJv6mt2Ceb1GYbTBMn6EBsrWVXkkD5uwnTLTZT4EWmTDH8DiUMtu7faXgPXSL16qMQqwM",
  "key7": "Vwa3Jqge9sGQrMgVsxUj4YZprC1amuvn3hwRi9naGd4uP7QzpUAuGyhZrny9a6EWu5CRAS9kqteQSBro5ujJyRi",
  "key8": "5YNpMSg9Bc6PjSLHE3U2Kt2KEBWdpAWaBK65qeouZNwoqJuSPZiffLUxGKiAjZw5oTW1ChWxH6641tPLFUfBsRvo",
  "key9": "3qZAedNf57BrFp7HQW5TbHpbyyjZCoC3pfikUQ7LbBNMDWbmJp9eT4PgKpAPgXKecGQs7npAodU2mztv4irPFWrE",
  "key10": "26VWsNvHGATwSJVQo8uVgRXogrxkhDEz3KYB9kSphaEpHKD6r8H6JB7sW5vwjLT3uhukxAHPSGF62TYZPo5LHUxT",
  "key11": "4fwmUGHRooBYXfFdZZmr52c83EuizWCSseCaBznhkuEr45oGx8ifEzrSNLup8r1vSnidEDiA1mmJJf45M9DmSVLD",
  "key12": "3qNQBJB2oeU5EvwuMdT3ZoZEbD6o8KXmEXmwEtepHnpAJSZGURqobypusNTQ9X51BNKiFDUEcwtopGyNh9iWrzEg",
  "key13": "NL7HWpaoE81N47q9DqdSnZdMksHc5zwVLwFuzCik4XCjXw7XtsjCvMPgDFXn7gG2kJUWSDSA5rEPK6CtVQc2K9k",
  "key14": "2dLMW4ZNPxchwqdHAvXtB6SMdyULFjrTuYdQkQscvnpkjzkw8wZNMJD7nmCGKiQmbAp4HbwVD5qwvBcj9rXLDncc",
  "key15": "3kKmgstz5m21TFZBsAB2FvhwuDPMRNxHthmGv6fPe7ZYEsTrMLujXDTNeuJayvtSR3nrCPLMjyWVxtYnhX7foKJE",
  "key16": "5VJLXqSCo1jprCXGGwermpeZpstydfwhKCvvn9jjxQFdxb9u7PQNsTBTTp7TzWFmz4Vur5o7n5PbirpVxgRDy4ZA",
  "key17": "2FTrfvifx24UkX8pTZySYmC5FLpSsTVZoSH9THxLG1BDvmTi8AHcjf5eZaKWHFUxcFkiJkEH3YtTHsaeNogw4ERM",
  "key18": "5r2t8ufcGCW8ddwfJoDpkaTojzrZBrdXD6pu6Tw8ppeaeiftm7F4UWqG9FHm3DWoSvYuenLXrGSVvrimJ89kBVj9",
  "key19": "2oQXrvRozqhKKbBWJqH81jMtN5KttvJaULvSVQuh47WPgstfoX5cmxw4nthMu8cqVmok7f3M5aJDwDTNNq6GmMRq",
  "key20": "3B5fWqd2GRcRpQCN2QuiXAyrwjFMjT1aAH7JdRBDYBfRef2XzHZaYNREbaAgq8y6JwdFzuBQjA7SGgzRCmJprZt4",
  "key21": "5aCZ3Z35YoBSBrvvBHZvHfjahDZUPi9nWKpUN5U4MhJcjeQcXTXMX6WHcA8eCaMPDAv8FiqLXs6SKv1j7YvXbcUg",
  "key22": "2Wn97A96vFYZc2LLHeiJgxMBKt8jf1UgbLunJaAurM9GTufXiDKSWsUdKXkDUWXCZ8JsPcsCYjKEqjtmwfUcuNLY",
  "key23": "127hfUPtkJE5TJ3W8XcGhutB834YYpiNsX3nykHqajhJQvG8yjQyQEfepM5hY8Bn2mpnqAiWHLyEM1jzsdtJvYwJ",
  "key24": "3ozpcCHMxGUaCYrRUw9TVv6QKgAoXCqpJbVmhjCChMtg4ekvBXPidueSEoTmJXVMjmYxwFvdBEHb3JuRAFGPPXgg",
  "key25": "rG73LRKQW9vvCocg1zyZRWxPgYcAaXoWCdrsAemem8e7MxTDCSmE97B9TybgafH4PkywiHYDXLdEof3cTXgXwwR",
  "key26": "4fRSK2c4iUh4FBS8yxRFH9ayJ15pS7uofTcb3cJYDcEjqvNVtS94WwcP8Dp6dibWawgttuRDYP9bnstAQUhbJs3X",
  "key27": "nzfpaxNqWRZiWmQa2n8TsUEKakp9o1zZWCALXtpyhbbZAdsibWMiZE8gziD7neMN8JGbcABxAFKqS9gL7G4pXtK",
  "key28": "4XnuZn7XCZfGQBtWK4SApLz5JPuaGZidK2FzRDpGgA7h6TUj9N2MPztcf8knf7eGc7ZHWxke1WkJK962yWkncCtZ",
  "key29": "4qdruoMPQVDbVCrDPwZB1krtDPX8WcLa2jFmfHmgMcFsCQuiSkEsxG7PqvYLnhSTAy2yLMyToDAqkiUAfVk9fcjq"
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
