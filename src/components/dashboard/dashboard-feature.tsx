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
    "3DkVZTjmNMJKQXvJk12DAzH5sNsentMFGqC2iN7pzXhyWDUw2kocwt33iJEtjBo9jTVPkd3ppCMjwo5fbN1JFjtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFxp59GqwzPHQPkKwVo9CrbAVQEaCcxrwhcyfge2VxYbSAb8KjDbX49t8szrPW9dR8Gev5nGtKKEwd7NLm9otdP",
  "key1": "2ATkUMWTw7wt544YhdsicznV7zf1H2c1u7vm8ukbtedxgFabfJTqNS17U9cswQpLZEmHpeNk8G3WkUgjctzzkSTY",
  "key2": "56AbFVwd9kvzapv3TkuBk72gv1QqCgtaW6DuP3jxdgjpaZtpLuRPMBJgBnz88Qi6cn7U2B9QrW7gAS3EPx2hz1Ts",
  "key3": "2Mn9rsPWP4XXXsFg5WgX5RuuwHS8e9EWnr4yvTkSPoM2wAScFd7FH16jPNHdSfD26gKDGffFTQSGjdqoZMku7fko",
  "key4": "2xkiuJDs4sbhqPv2XQPCLJN23SChFNnT2hEbXpbAAwavZttTUkz5sZqTLi99wDcDEwd1QY79e3boyhoRKTMJr41L",
  "key5": "2d1BCifCjkQPpryQV9PbTmKK2K7UcbGzk1stwmxf4qL6XDtnXrB5jt17d2cM5S4xRf4zReJCGLtSpufeHT2j1VLz",
  "key6": "3gbkUgPzVygN7LE3usiYyERovpyTyKUG3oggu4fZBzoJCqKVeNwm5N8uNtgcHfaw6fLfdcWKFqeeY2UaTnXFGuDk",
  "key7": "3hbCTNAwi2TrZQeBqcYwxeK4aEi1WWB2ewjAyh7sigjfNrbsmU75yDw1UMyysQ6M3rBHpALV3ZJffmeRnTLScUGU",
  "key8": "5U3iaziNHSd23JPhuqp3uHHXcszdKb6ukCV5t5NRFKAYk9Du6AD1A4rBPpoogpmugH5Cd69uwnBw4Qu4jTZvV15t",
  "key9": "5DaLUTBpLFgrAFqcfXPzdQAPWcjGTRqY4ayjFuryHn7zuv66nhiPyuDVW9WFMEGaeDMRjYHAntFWYR9v5CoV2cGM",
  "key10": "63CvFsRy7CoykZkyE22hJ463ZBZFradoNYMG44vbpgQ8CHfXcRZVkjgd56JW1gxjPdNyfuacTw9qnJgWxRUdXGKz",
  "key11": "3Sxb64HsXCGatTkhG6eiMtQcJsum3Hw2xR5bwxayU6RvKcc1fyP6zfWCdtyZBDMnbLxjXyhQLUAWKE59twHUeLpk",
  "key12": "4Da5WbeR2qd9xpqmKqiTH5EMsMF5YzD6LnfFfgC4ozEm3AkcyY7RtcJrLkLQqs6zaruef5qKdqfsvPvQuYFxHCap",
  "key13": "5NEy4H2Nn4Ta81h2tDbFMTTEY6CmHf3iXR3yAo8Ff6nCucTYQDXqttHYYK6pCujSQZ8v78ACPbwHpYZcfHqzG9k7",
  "key14": "2BfB2z2a5GdM1AkGRKnPZBfzrbTV5fbKWPt1g295scBLKeUeNMh56uQd3WLXwgWpnmMcaKZLHyN2Xc42JpwfEcin",
  "key15": "5MXBZESfLrJjAmHhxdkTQYMumMQmxMaLHfjT1aui1i9FziWJnYT5j1Bd5soEN89p1yebGcHPfNHpVjivNUkrJPs",
  "key16": "U7FQMjxGmZHg1iSkiH7bpnoY5DUxneubBwKRT4jFBjBp2y9NkjbRg9N1nvT2xbktwjm3Bknr3RQgpCzjqjpNL6r",
  "key17": "53rkb93tmJWK3NVck5xCrkLfXh9jd3SrdSehi1tKhe98QJjQtcXStyN2MwDVB5W5uw2kH2pCy8BWHGCYmD2PLdTG",
  "key18": "2btPeNy1y1KRebBhrVHd1U5hvxGor83vAdEbCY5zupAEKAgS5RXSchog3KrKuSY21qNviVipTbNpFuYRfZLt7E5e",
  "key19": "25NCZrtErfX9M59vZoceXrzBzzCyZfYJPBRXc92XpoRaw2HL5fVxQQWcKT6Za7bGuKCSkdEbqGqSQT3sqJXuTq5w",
  "key20": "4uwJFkePtSf2L6GvEKaryiPjjj4tFdUNjLnL9fsabQ2W3wTo8TSDvZD7MqhqrdBiFGybAkbo1dztYPow8e48S2ZZ",
  "key21": "33uAJdCStMvXFLD7PLVS2evnKTCABr37FNVFWnakkp1VUDaikZ2FSSkLi7H3YmN7gV7BS2bUcL4wpBbh6NGXoJ4K",
  "key22": "x5jHPtv8wNEj6PyJajyRXkwWcR53pwANQxrWo9mhpBWR4vu548eCZdZRv1Fzfq4NBZ6q8HdaVGfPcyy7zWhY4kw",
  "key23": "4y3VuGnRZw5cWUjYnLt7C5SPRNtA1ftkrJTDihV6QfNMC5CBTbSc7nVtyZ4HxEQpxFgUi4REwu1cDDjAZprUvkKX",
  "key24": "2ugPVrzgeuwKR4XA5TLtVFr96y48Wf7gc2pH4hkRe44M46Lp9YdNX33ans11E6Zzv1C3jCUoRv9mfapbvPQ6vsUL",
  "key25": "3urwLzAHhfifvb9WiNrnEHDQsn773YAyXnAuZPDbGRPgyhfd1T6sazDcnKXgLVkTUPeSuSnhyACCNTzz5ctwvU5Q",
  "key26": "46MmmiXmaciZzCZb5jbJnKUcB3yS4mWcJRXyJdn1WVKDnkS467KQEUB721Y1ss2G7SgY7YAcK87LtutY8ZwNDz4J",
  "key27": "4DjdKPFyzyDg8a8dWn6213aa1TtLjLSYiwrPmT9ZN31hT7rKxfJggaFZ1eafFfsAHQBX5suwUfiX2PS8LnEvCWe5",
  "key28": "2GdkamYYEAzeXfVDPmjUzUZKRLe7dLJkfUhomqXBvK6TfYRK3QRvnb1daMRDYGFjPLy4xukDysQnooQYmhaaCD2X",
  "key29": "ubCXwR6qedrHFJEaVJxbuXhVMfUJRkHbTfE2Y7CA4fWawG8Cjdj12yUwB6ebQzK9H8diJYkAvBukx1Z4FcKNyft",
  "key30": "3gNpH2La8vbTCZwbj23reJNW2cXUZwCEkurwWjUzCQr4mqc9jVqyMjaz43ePAihsQww82n26oaiufYEu6UJ2TC8p"
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
