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
    "4tCGRqgNZxPjVUtdA2oACDHzgB92dSVBgN8Hp6upJnPyfqHhEBP5iFrjC8bxCeC8Putfn1v9nEai84uVx9dd4tMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSA3hH5YBLpr6XQ6wZmXPZ7kGUTtsZenxVg55V1a6Rc8TPQ9VPrvtq2hSwWfN8FXdwRRjjE65RUZET1zo2mswzD",
  "key1": "4L2YbhBu1VZ3aEmJC9chca8Ps29QJguvezFpBqqM1UwogQjUAmYBgf5EqbEXkRxH75yNoGvzfhPzBLuD3iaa6y1Q",
  "key2": "2SuKSwTet2823ioGkVHswTfYdxzYcN7J192CLGNYZtNxhHZ42nTBV3A9Y16ERDje4zwaWBEVRPM89tJgFa6nVwbe",
  "key3": "5mBSbT9kKULCJxzjSYMTn4HHj9ctegAMAgPCuTkCzz7xAYjbqeKP8fAQL9kXYR6ndnxTEMHtXMStoPLe98H71c3C",
  "key4": "3Hwgo9vi91BmVByDtDdiuUQhjqQVnYaMmZi9CrN7TigYqtrWRkhkEZ73Sr1H1b1R2CLdKVsk9RrsaPTUBjsy6z4M",
  "key5": "2Gi98r5RFScGe55AjDa4f6cQF9zX2eAAFw3Bx4oBCGf5fCxgNZd9XGNKJC6fMfzEbqxDBZgN4mHK292EXFgyB7Hz",
  "key6": "361bMoanpw87R6JXa2osKkCfjqSTo4Mhb4AtaW2sJJJ5z1C8ENZCdoWDGvdxbBmpmmxJQrNpaBq5RYPoyiePWAZ5",
  "key7": "5XPPf4sTnbUcu5kWygBhnKnqRmndZA7uLBQM17eVemQPaHScD7RPeVZn1Fqt8s1U5vf8vTGLU112v7NCovE64xsX",
  "key8": "CT2Z4J7po7VJST2X7uZuK83Am6YHnwVuXMwsDF7s1ZtFdVGYHF9EZZfBfvW35YWh8PZEVk1Lh3m7C5KyzxFwp43",
  "key9": "4H4DeWBU8ws9Es9CVGFcm9c14vPv3E1nNwSekrECSqGTyqyhSMdPdw3AVTHykE8UGERkxW8SCNJ8soKq4o74LzSN",
  "key10": "5pH218YKRjnQNf6n8bY2raYX8qszvbjmU44ceEkyhSQs1rQJiCbHwaWcKK7kREwTssHppPJmbdTTALsZcPSLNFZT",
  "key11": "4W3JaRAeFkXLLDcRG1c92XW34aKBwFyJA3wt1keiBQULApyZPb3j3s1YTugwG9437e7aauERwQ9ukT95o2LkkooR",
  "key12": "38NwMjorWFaWhFcJVaGCY8yx45v9QnWf6rFrJKbHsyLqUJDwtXxUgq1v2zr3pMoc12xvDB4r1GJqACu181msznkh",
  "key13": "3q1ZbgJE4hAPBaKaZ5FPoQccR3UA4Wut47SXfRABxBh1tfYMpBoGqNL9bGcUWkmq9WWXfQZjJPipNZvSxRHychaU",
  "key14": "5oXpTcpEGVXJ732a7aCpJmAV1SCrUJfG8uxso6uA2JhcAqSxSmuwoMfkgwRGPdX5KpEWTkugpbcMJhgss5rjqCmi",
  "key15": "63z93xmvrgY5BNCQuGtGFv6Am3scykLX2Am1CvoqeeiLwkebm19bJugrTyD7nU18DwiUeA9y7kvw8irHhUBpieGS",
  "key16": "5syFa6tuXEFGcRW8dempJ6v7UZQqcYsNhivMuP8DTktpTeZ1a2wcyns3hECvgQBdqnJ86cu55RGEePDt4T7A4HVP",
  "key17": "2F8nPXpFRgzxVP85yPFJLbSU1MJJYYtETmHZ3TKqS9H8L7AtY7bVTXy8etrDm1WWHLPZU4MNF1LqahLV56Jwssra",
  "key18": "cmU4dM5XDqAWRe6LR4JckzPpEUwcuR8tQ5Yvu2F3prQByc5cKsvBZBh3pWizZAi6pin3ffTJv5X9BCGs57Prcrz",
  "key19": "4fWLYZwttztx9hUjV2kofaECATT9jpoz2dXGmGYNbqVSPB91rdyaaoufi1qgw5msfhFrWiHRJLJYG7h6jKLW5qqx",
  "key20": "66mqFxW4zny8T9EMFA7qLFj2tEL15dzpLCukC8x9GKnwpqvwSPi7BYTmejZQA3eccodoqmLcFHmevkJHU2NaAYie",
  "key21": "j59w1w2YFXEvcDpokDd2AgsPjrvdzqie5NjLx6A4mEJHyHhyv4QzfGUtdJLdvmYSXgLQWCBfbeccbHN2MBoDTjZ",
  "key22": "44t8ZUw9TP8ikgNMkcrfhXDByNxVDP1dSbifjwMuxf21DS5rAHQrozKE39twKhh1HT3t1AjqKNGJoCh6HRwCFdYZ",
  "key23": "4eajoJbKtKYPzvYThKNfXtVGMyixR7n5d1FgBrLBBKoMSgxT1xjtRoLqEu1pkeHwopQjo8hL3JLSJ4FwkchGJe3W",
  "key24": "4mcece4JY6JvQQWtz1xSmCCeP9cUrodAYbVXnxrzeFb7wDZpQkkhT5AGQA2K5Wmygt48UN2PGBBENyqFK5Rt3kw",
  "key25": "5zqU8b2BPDYeafxccSLzedsYV6RWB8WdL9TLdWnWwQxVPMg4biycf2ePnT6qmueH7PaYgZKVuuXNSbnkA9aq45Wg",
  "key26": "Nb8QNoWXzmZX9YwPvNSPcArZ9CjuXhC4P8pJUesjiZ1harhfjjZ6Kddi4Utxxnjhm1HKRurUqbPTWuvRMCVd3cF",
  "key27": "2nyLGjqGHAV1J5DQNd9UDAhw17wicJPsM2k3yNPtEMmJ9idWZsKQ7TYUP2LDwus2g3fvvk1bdtJjdws3HtipXnMY",
  "key28": "VjXv6V378NDonp631Rk2ehkaJoc1m7HpzH4HM3Hxoeik4XhabWdER69dvGxevTCqLRngP2zVX7kjHnJUFXCweRS",
  "key29": "2QnwX9JfEe6JxNqASZA9EzJrgmzL6JC7erCPn4BvPguwkufJKq5ozprT687ocF9zbifoXK744Vz2JHugijpEBVPR",
  "key30": "bBmyrQbE6mNKDbW5Cbn6Fo49aJ8JQHzxHrXYWe1SJ3Zt8PCwFfXSFuTCU2CB7uwBkTGwVnsQgAskZpWiCtVZ8Dr",
  "key31": "5VyMNTGwFY3wfpN3L7F8eWks7qzdMmTbk6VjjktFunnCrNtThdvrxUw7h2zYWgo7ypzpuV6Txjx1awFuAmTf7DAx",
  "key32": "4g2ttcm9TVMtV3vR2JN2atDuu3J6c6e2a3L7kEqwqCeG4dTMkvT3mQZevstNqUPwdthufFUUXBGQpSJw4LcEN7yS",
  "key33": "2omEEUG86q1rNqqjpkAjrg1z4vjciyxqJVG1BrRqtAs5wJ5mUTnKypPb9tYtFntVxumu2LDvn2c9RtV4iDo37aaR",
  "key34": "27wK2poVEkX7wwATStabgA298ytBMKC4ykm9oR37ivy6ioNxi38Unbbg3vitJkrGqPxdz42KnLmqZwEGYLD3YGZk"
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
