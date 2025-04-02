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
    "5KnfC2uWVxJowcdQ31uGJSpX8KsT5Xyf6mh196ZxVMyDEP1jvdbcXhEXzo3g1HcmoFKrSMc2omFf64Xd38Jk2Lhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyWDeGKFu7AtDfysLbVQZw2GsTQwrSTGNSZnHDDNvToCVHY1YYVLF9UACNZdqxBdYY1pjEzzE1EhiQAorCS1FmP",
  "key1": "3mTQZPp52ffWD1osmzsc733ZWJ2BE2Td9do1JeiE1iGUPxvS1mfaU8KJQQBuM7U3VK3K2Xe76bpAyAu83zW8LtYZ",
  "key2": "5KoS9VyMXYkG5weZRqz1utijZGtjTUhsKiQK4QdzWu4sRnsLfqAJmFWYRFzFuDcjXVnQcuFS3a8RPYmDY38xzRgE",
  "key3": "5vkHY57ygrStm1o3yWuGbR1P6btQQRqsbcD3TgDswFKCEEduoHuHsYmj9NGEeHnYZMKmxQCgWDNFXqyg1nLhHvoe",
  "key4": "brpqLRTgN5rmBizC7L1kPz59YWDJPrnxyZWsAzLXUYKnfSY8R47dKaaskCFZqFZS768HufL7ufyRNbbtBrnUiaX",
  "key5": "33ZE7Cz8U8s1t3NvRthdr5VM2uHHdtzZBGMNQZhmQjiT2x5wXaeaPXGRWvBoCgVUwWBdFR9oA9FCQUpGYM4dDyzd",
  "key6": "6448JezfA6zkcyCrXFRNtAWrKbFjwgZPwJadgm3JGB8tKCS6Uww4vvSdPhe6qzZdzjsHqmTe5nvpHP8vqca4nJwh",
  "key7": "BjkRWyoEqi5S7vwkwkpo7jKFLbTRP6adtjAiV1QJ7tGPVkeUhLE7ypx5wmzgzhkAN1xpypUSJPiq1oVj32AaqYh",
  "key8": "2w5BTc8eNTBcPwZyaWxud2qwxqshdMfrvCux3RE9LwfS1PS3DkFRKwGJcUH7RNFxBxrvYPvjxwsbtY5zsuNKDWZt",
  "key9": "5ub3PVvsSWSPW4UbLt9foNtrCh6Sj89vSoXq6sdFswd2oar5E46rrPwj5hAV1HFubGYsBtz2hGw7gert5uog4EWW",
  "key10": "xjttDe2jjQvQ6dVMMpS9dVAAMX6k5TeUosvPAHwza7L8syJJirhBpiG5dN1eNG4jqwdV2HhDydzWu5MyMjkK5os",
  "key11": "3YzXyWpbHNuDCYLk6VtFWUPgz8qjctdfB4x9oKdeXv2HDRTNyHw35hu2QTRsDTeoyBCYyC3twRUdmwPRidsRznpp",
  "key12": "4wVRAU6EFA3D2ff6ZB8nmHofGQNBrugFFdiW8RN9kNPFn8rJBc2S35ibMe5Raamm3y43U9DqWWZMU4vHxQoijbXd",
  "key13": "2uDxndTTi5koXJGAVwvdMir4buMLsyVoft4m5HgTw4GiUqLFezFyVPaVtm4kcPwETcMXNW9tWspTAxfgDRxx2J8v",
  "key14": "5A5rCEuk6X4Z1JhcNjLSpH3s1xPQaF2CPQryqz6Z6CYQeBwVqhbY2eHVRTo1BEQgJgqdaGJCHFvTwxUTSCYhpptj",
  "key15": "4iLsp95P3pBrjWLbuHizfZgoUf15Yd2af8gZ3eHmjinz4veeA1Xm369eQAmLaEgUXpfLte5zTVPWgqJGPRRvXkP6",
  "key16": "37WWxskVgEkqxcZXeaxkEnWU4HXDDjGj3MtwSbB6V475dFsaAMmGcXJuTUtFHdSDr3H3zVE1Vg6PFAE7bELFKPsJ",
  "key17": "2CyXKq1pafRSD2PPfvzedgyc3Y2adJSyVvuyL5RsPuUr879GQDCiGyigJaRbEirWczLUbHqanAYVSi5FktSBEkc4",
  "key18": "4AxkXAVFdXAevDRzKwk8D6CSGj3nA3tsGHQvqjEwtFfCYJyVybt4JtbzwKp864G1UvnpxJdu4fWjPm2A1zZt5Vt7",
  "key19": "2scopaEiWGKY2cny4Bx5Y24GD9KXAfpLcQcuLrc6cyuVuQGbgELr4UNuCb7xc3mnKnTDnkraxMP3FAfBXWMy7ayi",
  "key20": "5v5zdJ5wimUwVniUcjrec4muXJ5tt5koxNBxwyC6J3x3StLbMVeduWMwsfZLx5nv5SJ2vTELr4T1EjYG9V6z2Anj",
  "key21": "5SdpQtnkD8pM7HKPeShFFHc8J1a9PG2oVmii8r8fZobKtTwL6h42vDYHRnc4yoDXrec5cA6yYP8XvkwBU8imvnPz",
  "key22": "yFhge4GNPNxH2Ujp1wHpQ3Pb4fdbyNgc46tGjsqtwAwGnqvNjvcpBBFP6DdBqrLtLxTfTh3SzvSc1EJyWt75aeE",
  "key23": "2t8GrQYzBnKDkWbFrhTty8EUyXUTPS55uxqxE1G1vphZ7HwMm2zoYh3XHXeJnDdMvrKXop2wAKjdugwfrtmmuCaT",
  "key24": "5BxWN1mdLx9cTxXeKbVyrYa8ns9eoxGHiyz5udwec3SJ1S8hjhv9qHi1815as6iJ4oaoEeJvNQBvWQXCsHm4x2K5",
  "key25": "3aXq12hfBb9c4LMzGbbpDH64QiqPciQnBjTaXDYGhha2bqAE1BxgmDL6n9gMkFvMvMSySq9VdiZGdXmkRSCxEfmy",
  "key26": "3uU5wqGFhZcGZxn25SzGhgLsQqsPbA6hvSpvetLhnJjCvEwaL2jsiFjwD4bvVKWsqXBf1BLhi7zQVzUbdD96VqRp",
  "key27": "63tA2hiVnnRNbFacEBYzkcax2fU9nZ2MUAjSzwtLQq9M88gzP8Yqw6oSjwP217Mq9PSRiW1XGstow2t6QjGMNyia",
  "key28": "3wTmWygjsdAopYdCSd8xxHR95xzH3P2dyfSmmUVBx6fppJuPZouQqKWqXbacsTMxRWNGoVL384KQWEcd5YhUk32z",
  "key29": "Hw7cJWRYr3DdGV3h8k2H7K1KPxLrLdvwSzYWrE8NQtVYgqrMq29aqJhmi5eiFPpBbVL8Ua3S4nq7x6JhN8KaWzQ",
  "key30": "3ybfRZTx5LS3LYy25DQY3AKfEV3jWGZPpoq74BLeLd1gnkCw9egbyvPGdtKRfiHawt5U8gdBN8SPAfvvZxfM3eJA",
  "key31": "5TTw2jaCQor242oXQNUuxNu6s4uhrwzH4Azs6PvoVypyerTfgBFjgBAMiQC2GPesxWo3sh2sYZHB8XJV6VrgsrfL",
  "key32": "2cMPtnTNnLyJLMcbvZLk1Tz9HbHZuauoyFHYd8aa9UxgbtzxeogiTMQX7hGyV5ZPHZP6DMQRnY1sWYcxoZ46dD7H",
  "key33": "4qc2jLr46mVxxPLExzuBJpFMkPjHasyjH2kVTR5Qr67JCQLK2CuLYrZMJHCFzSUXGu6spjFSXP6GMpgAt7RGvi3f",
  "key34": "5UUVASdpTZDihauinstfHh4Cvt6qhJjtKFzN7QT5Smn91eDVnLrG9Xi4bkuw5gMBGZtYp1ZvQxnz4nvnKwzgi5Up",
  "key35": "2nz7J4D4TaMD5sGaG4Q8yWsdMERiuzhWRj5XqLtWdCzRgs1Hh5n67GdN7zs97Pg5xfjYKN9EKLewdMemhKiGPTAN",
  "key36": "5BhpuPEX6tcyydoQh3kL2pNaGLosBpqGRyMmBL7hJSuJQe3phXCnnWWsHeKJ6htw6FKvyoFtW7rZpAh6863qVucz",
  "key37": "4Y1zV2pUtazH1dc5vwrskwam11agkwpwAeGibbtUcLRMDQ6ZEkkjeRzwnvSwjNCLLZkGvrpLFJc85FxqD5JNDhzB",
  "key38": "3UzuTBVfsk1zuL2CA6PgtMH2HR8csc4oYLFhvS2NYUgBovYvnVdc9bgMEY7dqitRmKKDFdM9TXaEoL1G6yEkVuVf"
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
