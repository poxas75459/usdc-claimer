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
    "3LLDH8fZNNNihbkiSGmzkyTpy4BCrTUPSkTH4JLhp2Qr94mrmdaxUjqMXgJ4oAhqx6zpmTXxeJqxJNrfbCdzSpHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rkEn9qeMLfsUvpkC7Et87y2txLW5jAX6YUHbBVRCg3V8qU6Znn4cCFyEx4aBFo2gc5kYPxj97jqwTv84cs2P5x",
  "key1": "2RLEhWigk86vdXmbtDMRBTMbvUU3a3ctsWDXzjk3rnEuuwKxB7MZXpiEYgXzGTV16DxuAkkcJzHpXduUS53jkFpe",
  "key2": "5tqNXwYRX82hAi2xdPDhubzVzBDEkYyFco3vM7R98hgsTHVk3fD1wGGQYcsCKbpA4nRXXeKunjRptnLsYyDV62RN",
  "key3": "44rXynX8yJw5rMiKAoUyX85Ag3Sg5FRcr7ihbkfhKRYg3rhgDFxtjGucijH8zEATVYyKV1VCdYmeBJgNUh45YP3b",
  "key4": "5n3AjopxAQjqKZaud2MjoGuyLgKqRWHymj8vXKJXVpMZJmXwhVWrm2bksg746uLc6fdYr1tXbegVHUrWys8X1QYt",
  "key5": "47LHJWVqcWm8yBXirA6zDkSx97E9j7gpJsZDWUQeyvv8nhNZvNsz6ftzQvBhQK8kdh6xmfXeRLH12JrLWgxWhVkR",
  "key6": "N4BRrb8UhuNzTZZGhdEn19EZmxJDjKsEbCQnWGnqb8XzMrXW5YXVck3afT6qE3fDJYFWyJT5bNv4Nn6DthKMUih",
  "key7": "2djq6c2F8niPmtMqm7DRqLdn4FWZQDwJgroBsG24kHRHi1FZbtBztcGadbgx3HkwpuiSpLnhiVPWdm3Fxpgdjj4Q",
  "key8": "3zb2e9TygaseGwc6vWaE33aEhqhfXhjonmceQ61QQsa64cZYka8BSniWf1uka1wWaJtKZ1KFRzuqMoys2BHFKjoM",
  "key9": "3WEntFsfSWqGQQZF3kUgCkc6HqZL5gfgDXsuvbZKmoyfzear4LqtYjynSEcoXXEo9koV9BMYQbHCGz4M3p3znJEY",
  "key10": "5U3vSF1pPoPCodC2BtyfJhuftTxQahyYq9xX7EJv4qTGcpgXmUf2uwoknuFJtjucatDzPSGHvMsm3fzUX4kdko73",
  "key11": "5Y1wBm5erB7mqJt57VsoDuWcGGgNjfsHC7miG4NtGRfqGdcemEoP6PsXEDZrEd4H2Vbg7rtFpPVDZCDiitpHes8S",
  "key12": "3CLFdZ78kwysZWmVhwq5ZGe4DADxRvTgNRkA37rURwYtoUVhRFfGdErEzLVKE96T1HHFGDT7Km44AgvhqyBpaXUs",
  "key13": "21pHaNL4fNjk4rpFAH6x5i7S9kmyPrXoYZG4prHA3oxSqMT2aZ5mZXEns8AqAdfVhz7v8wUrvHCgNeaUfD1m7Xzq",
  "key14": "3DKVpkcYzgoZMd1vF2aYyG5wUa9kJqBxqJv32BbaTBMeDhf769RcRBLRVaow52ASJNoZYrzkTkEgZ8DF5Ve1sMo7",
  "key15": "2mizJdgGNurSYys2GWqbRubzEaY8NBvczSSubqWnF2tofbQ2pjb9BpqmNFCkDQdZSA7wrBmNEKK4pLNfZzPUU3sH",
  "key16": "B5rgcnartLeAw6HaVrDMQ1aNaH9xmJtP6gXZUzUfzgEKhkGxUv5Ekx7hE9NE2xJaFetMzEpSVeQXU6kUEktbCDS",
  "key17": "4JVfWRNsJqdH2g4FDXBGqok4YF4rPt23QW6Z5NoFh2TeckCrUR9H2m3ZnHwC3FFiHP1nKhf6qpAP9P9FbPYfUAPV",
  "key18": "5kS44Sga6gJ4UJGmwi4E6WcjY9VmuwPKPw4N6sg6ca7fYw8Urx7F2JCKqZHciwY2auJNN9WwxWpPPuCJY4DksR5K",
  "key19": "3jBHqNCmapwUwzwDJas5dbzcGR1s4XqCCAAAGmpLSaH1ZksQh2sUFj83Q3rYWYQbceaeyKgwQ955bdRSxGt2sUHW",
  "key20": "5uknSSP92F2MJ4jTiF4Xp5bTmVBGMAp9Y3yN81jekNKqVRf2sSJcDysv3fCKoNra3EM39WvnvuNjDzQKa8XEM8Ba",
  "key21": "4CADHGxL8d9Jjsm76eQEC2UQCcQFFbUsSA8NgrP8geKkcduaonhGC7Uw4GaSPjwfXH9tz3fzSzdSksC8QLkftLLh",
  "key22": "5Ed1Qv7yth1z5h4AzPk9soHuDJrhmyxV6C7YyP83grDSojLDESp7QMFLHiKF8sDPM7dKVYLetLZE7mecoR8TxUNf",
  "key23": "xjRVokGU8pkXCuS1Zxff2THBHHKuuHFK7YYyZm1DKkcvxPJQ7b5c9qRDnkntnF1QpQQKxKAKAjEEmEiR9WLwUec",
  "key24": "2kssQxUqse5Lk6dXPQdr4oKXrPm6ZJ29jDjzZzoamZGVSCSgqzQF1NmAtFfBeBjYRrqzFkWnA7WuhGLEhkeSup62",
  "key25": "5QxLJ8hU7t9MKbsvPdExRm2HmjEnUYygqK9pk3cJvjQQVFpuw7ddDQ12FAppffvizZ4B6cbVpbWYXQQqQMikLZNR",
  "key26": "31GyHxZbsBhrvnnYZqZmB9TAGTonqgdH8xJ1FpnSXfokeh6drc8ffgUYuifp6LbHDxrLgBttpPYHp6CZsT9xN3Zf",
  "key27": "4gqA49dj53NgUNCdHiWZQAv5MHf1S5wT8SSjCLVzo5eBkjnVJdb5pbQu1WaVHetAksXufRAJEXvDUJHptArEL15S",
  "key28": "3ufYjuSvqc8xboNCzWfJ3fRCg3SxRxGxQbtJQapM117rYvEXirUMK7tjhvigLQwcFLNqRob6QQi1vDMTb7WjjjvP",
  "key29": "5juc3raW942rgPPy5uQ2An93Q76r6v7FEw6hLTpJ4JzFE8MjHnsEGm4oeDkjmDKHQuUiUwgNvnjfErnQUyjLj3j9",
  "key30": "4d3HpJbY1tvdCpYpWX4xPoyHyXomWTdpom1wHhg25SudhQNskGw71EE9JZG4Sg7PTg3WYHhtPN5GiG3e7urz1fzE",
  "key31": "24QbXhNmwa9sAc4rnz3YBtWDk4Db8bpkQoCLYdjBmczj3Br92FnFGug8ombXzCswVwgWo9uv29CZRA83o7T5HBSq"
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
