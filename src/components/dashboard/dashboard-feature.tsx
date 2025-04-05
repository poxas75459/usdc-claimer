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
    "VBtHz4itCfgfs4CuNz8DHHSzCn7RbWeMUFFfzZFXSzEKNAvRMp1N6ZzwA3QN3wxKAGco2kGjusGnxF17Jn2afnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "384Y1GXxFGbLKLHNt4Lzg9dSLCjk1BSKsGYUJjtJv7f7aY6jjvWK8oazkgFqyYUBLs8i2iqUyY4BoEVu7V3xENgF",
  "key1": "4mdJHFbyAKmPMmLb1erw9BZveCcUpB12oLJtbzQeG1vj29vZu1PG4hsJdNjJBoHqdkRARLzztsSBLMUuzKrVUhhy",
  "key2": "KXMKcd9YNpWRFwCVRkGfTtNp5vCe5JuwPZt4dhdV7aog8wzu1UepS5TQ91JBYURQQVQoYZRxoQ5xkmFpJ8kGxU6",
  "key3": "56R66Bk7WALjeUog5odmi2imNM8rvf3rdcsowub5JCkJToaeRkFytpSz4xnKKN3tFGQhmgstqWESyNGiUs8C83J7",
  "key4": "52v8jfBF4qGx2YPpzxqUuePgFNsYURzNL4ywwafR6urwpVSNRGUbJgxJTctwDDLQiRnHJWn83JU5KrE5myTYTDsR",
  "key5": "4V9rwTbHbDK6JCEG2E5h9n7kP8DabKEc5oNya4W1osdexjEqPuSgygS6MCDSeEnM9uL2eXnc35sQzunk8VjaoEYT",
  "key6": "2gieegAuLrBLh18vEUgZcSgVYHcvmdvqXWmLWXaHMjA1TzyEHJZatJgtUZ1277nKGxcKDj2xgJBmX8kTTLSnuvX5",
  "key7": "5p7nqETE75CUj1xZb6QfNjen17QpQkwqyzZoAEGQUqsq4t6NaqCWt3qY6gWjxqhxU9qKVNksvhLaBusdC4VCMR34",
  "key8": "5rFwGrr6NchDjee2w59LZbAaYk7vtH1if5Pgz5sT9RV2Q7Ehn3ghabd8XXwtJkLtCsHxZa1KJm8ZPmps3iMdFNyK",
  "key9": "4Kv6ghRdbYwjNYFK7TmQE6A2yz2nyiy3bZ73dVtfZhCrgPpNUrWwnviVrckN8oVNaGvZhR3JLfXGGdQbaY6Gu5By",
  "key10": "3yFD3d5EZVtWp3aiCz5UdbSc734grLrDXusXgxKWJ5RzKWmNDtU5XQRAEtck93wZ8vLupQs1B2nxyZDMGxkj6WBJ",
  "key11": "4mo8kRi6JuPHztqNx6rGkNqvgXZFXBfcU4SyDheeHcFHpVqLvhg4kZ7SbNWuE4y3qfB2PGRN7eJQrwRe6EGbg2Pt",
  "key12": "PtJYLrKP8d2K3GT6to7crHPPUsGvnAFjnnjjzDuUjsQP7PdrJVkKPLwKe8gNCnySB2kZaBoACEJizTNjbi4WtFA",
  "key13": "Rb3SWGTQhjReehRYPrUodfBXWwNXddWgww1DwVDSyc7pDFg5h8Zp9R6GbBpiyJE1G5j4kw6esmoFbe9YkengLTL",
  "key14": "3RaQgedAjpcDnNCQoQYbtQKCLaf3wd3ndmTSU9r712B5aNVhTAWLRnniGQtgmBwvrFayc25Zpfg2LFiafR1Bq2Qs",
  "key15": "45od6CruYWtPnaZv9JJp8FdR3PTKF4j6wLnwUNQXwXBKubsQuqqfVxQxQ1Bma3m8WqKX7ps299Twnngw8HsKmaU1",
  "key16": "tzzscKCufpMVuEJpQfZXJYc3b3LkUfcJP5JeAcvWJMh5phaD3adhX9a62gqxGw9QPziDPz2dN6cTKjxnNjTnnWb",
  "key17": "4CcEVFKTTNtXuWi1NsVC91xdS4Z5EDc3zotjJqdqWu5njcjG5ktDsfNvS2CsGVVzBfWsQvWovecpgRxQ758ALLpi",
  "key18": "gFQwsErtFyBZLy1J5vD9pGjPHAtiZebHEoGWFqNypzkCHCZMtrquj6owzSa7AEM5hmMcfjsWhJiFU8JzvH8fULN",
  "key19": "5ytfBRDHLLxWm6qzz9vPvdCpugxXGgx87mqEGeTNSLrVcgeV6VCNjFxhX2iGeqDQrwCYkj8LARvVEAuajZDFxcMV",
  "key20": "j8PBQB2ZAcrGohkfCgZbTZ22dH14itD5kJycLHLnJ4WtChxXEoWyaGvRu54bXky2HzTBohvYPQW3D3jvoJ5xij9",
  "key21": "4NYtKgP7MshAwnKA81HBdGwfW5yP3zpqivVDyBvs8LkTWYqdz2UMXVKzBLdNh8efAJ9xCZLUneq8A6Wm18seRwUa",
  "key22": "3feJw8o88nDiVVZJQkBeWddqcCHFkqKmc8AZZzf1pUdid5Y6qAyysXnqnV5U4ZT6S3RXECwuhbAHXiWQf1VDkGvF",
  "key23": "247Yg2Sc6HjxFFieBv9HswxWVGe5VcU6BRZGHKBz5uSyxGEAYPmbYiJgUgSeT8yNZu22ZDCpb3nUEVVyBu2TGz2E",
  "key24": "X92qvM5hNV4Wo6UscpwDrFWPqfpLLKTLxj9M9tfMgnXABYvJ8LysLwhu9wLhs6ZpZUaeocpg9n2zwj6oP3SmBCH",
  "key25": "zvd6zYq5bUq19UcKQCurinUBYpmU2BPRPkqakVe25Hv3Zrymr3XDU4zFHppJuUFdx3dt8F57S6LjGXixwTF4i1U",
  "key26": "qFzyjcMPabc9P7z8Cf4T1XMx6bC1zUmYsEjpnnMDPLVWsv9A7pxYq1X6fSTKqjRcDmbzxMBZcb9L4EEU2J9sD6E",
  "key27": "mHMwiHaggiKtPLpfZP6KraFNviVgw8ogm2xvNEGYuY6aecNAQW9u8nyErgcnYgfo7pFZFqKx6dquSHAEV6zZBwP",
  "key28": "dN3LvZ6nsATTf57FrySpDpUYeEbM52fdDzAEJqhaFZqPHxkwNsUUCA1b82rj1Y8Bk6EuEv3S98izawdGF7qnFmh",
  "key29": "53eqL9bnp77AfPii7TwHm1dypF8jRBHpy7U2ZvRCjzkXgD2Z43WvrUzy26LsdF91GsUfw4V48Z7afrbt9UmJS7ck"
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
