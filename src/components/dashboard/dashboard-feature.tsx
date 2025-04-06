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
    "5nPYSzvFu4fzhMidSBxVHQzuEMNcfS8hA9gwaTLvpKs5tZaF7ij79EhpdJkjrBpgTA6t3EWSfQJhdMoemTRgoxfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w883zct4RoLFNiX1VhKYs8XPJVcwJzLZzGaEwUcxm7GyiztWUezbTaHh6vYqHVTFeb1QeBZSzS1UU5aexCj3zGV",
  "key1": "4NkHm95Q3Mkwe5AvRdgz5gVdHDE45nk6JFo7EWLMngdYndC6vhgTCpqrfZF1VDDk5Y4LNgJnJMW3e3636kAidgWA",
  "key2": "4AFiWHKyWR6T5xstTQQg9977pB77NF7V5opZYmomsYehPKcaUJvLZ2GpayE6eQejTXJKXvtoa3bAN6vFVv9ZXM8p",
  "key3": "4zd5UaHaQCNt6kpsFnAvYXoRn7tpuNpDwEsr5EG2EgCfJc3Ya3YHPZ5vMWDFgcuqLToSLECzAvc4bNgZ9QyWhv6m",
  "key4": "3c9SRXLSZuV7H6iUZqaacj9idYcEtoeQLSkBwygDGUrvuDgb5G9E2MR9aNsp2dJqNZ4c4uGBikzBehe6R31fi1V3",
  "key5": "2eo82buZvbiRXGwocDu6rpS7WQZG4YFML5EFtSdWYv2VmuUKkrXu6tbYdhPBuib9ijLnLzSryuqnbS1q4iGFXN1h",
  "key6": "365SXf58qWd2RZ48gWzUuPYvJv5E4cw6VYuv19C71SD1iCZ6aGK6fUZRDKvwWssDR3SkbsvpJnJBnuQHyoqXnURS",
  "key7": "4oiuhL7oNH9XBRt44vYzF8vQDQteon5ASs8q6UXp3fhk4grbAkinGkSDiuEer5A4rybBuUFxkVtu2sJNphoZEjd8",
  "key8": "3iFUMKXaWEw15Z6aY2KuvpbBDTXYXAo9Pcz8Vv2ea3skVvpoLGcTGqtcBdYYX4hdM3hTRf4woQzGivd5SSsEsSSV",
  "key9": "2EH4AKEUuBoeiqpqhKayejRAoYZEBk3YeVuyXBAkupE9H1KuGhAuBZcagNH1RBY8wTTVNSqF7SCE5ofmAXmTGQdG",
  "key10": "9dNtDn8kFfFBj25EQjo1J9R4LLAE612jG9RXGkr6dTh3FQJb7KhLHkZf7EXGFGxdQzJYoBoJwxXNCaiP7pVNVVJ",
  "key11": "5SizbSeQZjmnKkTeE9nrhfekJYv6zZVmUdtBMXGchBLFr6G19t6eAAK124JuWKWLeK1kkLiN78PhijUe47fN1djV",
  "key12": "2cvD6ffM1wGcseZDqDwszo4421ZHHqeJTCcWWmsL5hJRpn8cf3gf7bjZvx8o8uXairGfMEPjsegUqT2qm4oS9eyT",
  "key13": "3irJkyQDV9i2jMswrSuVGVxRXb6BE34dvJ8KDw2p4bJ45nsYiX5rm3SpYRoAv1mTAhniESBbVkzJ6wLSgGCUdcvx",
  "key14": "AohTUyxVQrPkvjn6a5nWqNu63dvBtsY1wfW2q5jtE5w1B49k6oAChRekJ2ZiJBoFQThjaRNGtZQd2p8B811oxwQ",
  "key15": "4yVXv5enhD9sS4ARgkQsVogLDGEudboJSUJRxEZnX14BasoZDZJQPtnhjWgrS3DV32rU7MnjMxHsbpdxnk5aS5P9",
  "key16": "4tEGTAgred1SvZt4YneGTvZmcRK9d1J4BsS3576TF6VfuUeJTFboK42BLqXahMsm6ZQcGUAU9tVmJKmfvAVWfAee",
  "key17": "67mX1HZ5DSDwuxE3TNjWi2CccP5KB8gHu8S99gFYfDkQkFC1FvGgAFfTJPEp7tE2sKgzhZaxdmuSdGsyv5V5HAeg",
  "key18": "3sDkhM2V4rnpRoxMGvd66ywHuKABZnqAGi3C94FEtmjPae5bKvGVnhCtUNBmhQ19Z6wdNAT5Aiw9HHzRuZeJWiap",
  "key19": "rExVHZa6BdteARRN1AX3WS6JULBqCXATShTaJukHzjdZr7qgnfWcqbji8gYSFYsLq75RyS1pyyd1cSZ6BPKgNA4",
  "key20": "2FNbBZnfcsZ2vEozhDZ5cyACQb28fYxX7s7HNd6Lt7aLTezsKdcgSm2cQGn7GPJXjo4dhiHyNA2UStdqbp4BNZHH",
  "key21": "iF3mBjnKdkkxaSEzLwBHbJjNBfkuyPJ1pcXBTDyhZQzG3Eh2kRNa7h75EwEtCv9qwzD78BXvF6FQyk9marK5Z5S",
  "key22": "36kDSD8DVHdvTSyyJWhsXZd5MXBR5KcuaXX5TQkbBE9yKSm6i8SuysNFVidmHwSWBnW7ZRta5ssxQWw2CZqJN2pM",
  "key23": "5LxriKQnzvtD5fTjk9i2L7kLvJ1VnyMMSiYMW1D1dgXRU4F5xwD7X72YpcdsCRkt1deYnAz8JQ4zNz4T23XLziBy",
  "key24": "4MArzabJAucKPtSJSjhmDUe6XHWvMQCbx9KxGg7LB3r55brXkTooJfjJCFJsYViSS2NfeCBGL5GAt9aQd4L1MY4q",
  "key25": "3osA2JnfXWQU5VrmP62MKUWdVSQEJ9VjRsifEkEraJpxdZFYXQYu5A5ZRjJoxo2oSuWQ7zkrPwrz594xbAfHkHVH",
  "key26": "4mznhGGTW2Jrh7nfDNQ7A9n6nRv6FVdLY5TeorADGzbVJasphCAfYBKjUEZ5VQEuococtqmiD1usnT275GdPy6iV",
  "key27": "251Gay2bj4yydeGW3wqB5sGZmNZKikyhHhnuJfJqaXipAVDZUzDps7MEBVH6dC1MmEFZasbaNCvKxRcwTCrJL4MC",
  "key28": "5N4hidKkJczgHKD79M32Mqgym1R9hLzqb8RRvP6L2UYBKirvCA9PbQrUbvioQJLUnqGq3NFMXq3DVaubCBxZ8C8i",
  "key29": "4f4ZSsRUZaXTWiTTXZU9qjQJp2AoD2ae89F1VrREpvxRPJ4CVnmCjhovpZfdtRycUkqp9yTvD4dQp3gipWTWKFWM",
  "key30": "Po7ZKAxyU6uxXmGQuuhUT4KJNghxBrZKooxYRZ4P1gagrpuGp3CaNaEpSC4pamoe6cXYZstWpvJJbpXA2KWQCUN",
  "key31": "5Ax5G6i1ZKBi65KGZv2gnfuGHgESVZrkfzMUcncA5d7NBybPHCv8uTCVVBVELWhKGELMDAubLXVSqG19n4YhS6j5",
  "key32": "3dwBQFvABTn3kh5AbgkCUUvGewvZXcZ5FhpsHw8fwFMWr3uuCfHX5u6sUYjzCEi8kKcqSTPLh4jLzzG6AMSqDzLC",
  "key33": "2icVERMaqphsishqgaKzoHzTAo1ds6S4AEiPdxW7xVBULLPCaKp5zeGGQAsddb9iy2ommRjNDkuczt6wqgutHze9",
  "key34": "3d4PVjmTQBqE36adczbh8DHtTfZEykHQxZ1Wr42pfxonHeVouU6FQUUojGciRqbLotcfD9xB5EyewQcVgMzR9AzR",
  "key35": "4swk89FX6jnG6rDsnVtxf5aQGKeT2oiqGZt84HSJVCTUg8r6ZAnVvQyMrH76spsA5s8qBU3coYSMhyuMJJbt7qgs",
  "key36": "3kMVuN5auLEy2wpmjBk4cYp8RigSTa1SQnMr9UcgNF19mqubxhD316qAGciz2hkgqjHujpDqVKSTgDMiNueiBUdn",
  "key37": "3Jqv5Vn2SjKaA5eebJrE1GnJ2486ywxhidqbqGQxfAwYbGmKWSkXLq3fmeigREV4jMHJPrrcnwFCgD4cduZTmhDG",
  "key38": "3acMVHLfRiSxkfiEeYwmVH2TmMyj42aJaSfjAujrom2VnvnY1jdZSzHoTrgtdEG4hFQp95RZBCNuoWwysV1fXYzs",
  "key39": "2PLsiKZPu2SxDrus4sKnhZ1xVNcQKuy8RJqRa1vjTexQMSLS9HSeRdiTqbGuEFdHg4y85dNM7PRHc67tGx5nfBPS"
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
