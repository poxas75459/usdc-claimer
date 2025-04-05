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
    "M9j6kCo7u5Z3rAQwKmAXY2XMG6ushekEg4J5HcUm1h5vZNAwCxUXwT99jVZUtzCeFoP8kivw7jcSjvq1C38Ve6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tnNkfAj5fRbq6dRYzinDEo7sojaEAZBvtMqYmE2jPE9ibW9kez3NDJfhKd5TJ7tUeYNKmWsgo1pvAEAjNNiJwwM",
  "key1": "3JTuXXY6JYadfjRAFBmQkr293YNz8a5FgRzS1MGefbNEhFPoxTb762pVz3Hr4Am3vZYncjeKLiJwCYdJWAJknuNS",
  "key2": "DjDGhDTSXAxdYLnuw1tRJYDqUvDxgpZMK8mb9pJqbLkhkVmbLY1QYMbjgUu4kac5PhZvckbvNLLjLMmamdGqquz",
  "key3": "3CUHYMJwN1e5u74GVu5evEEQafPkDs88M1TBDeuw2kdu4LhNaxh62yFs82rpynuhMqCYqHdusrnWDgZ6tmaKmWRX",
  "key4": "258NEREYCb78myV8qDeK4s8n1yKhCvqxKNpUSFAAcYh3yiZbTu9hQvrKAdJv4ouqpU7L1gkVU87V7xXymgKKgCt8",
  "key5": "3S66hAuwEeUWGp9gMnQ69RjG9R3rj6BZEQqpUfmDjxBsFQPary29GT9qmyqE7gpjFMnuE7a6LjWsvVQ9Zgp1wZMf",
  "key6": "dpT8tzyRKBZ5NobW9bFdvJzxo6BLDbiTgzSiG6TVw357qEaqUuSy1Yx5anPKuzmEHmUTQjpsVSzzK1bze8i2Sdh",
  "key7": "4yUNZ6bK3bic5GZPKnxLKYaBjVeqytQGdwZhDKJMAuVSVgMevEgdGHdQqCCvBtGEFm2GXJWEicoUpnDdz5thzfWu",
  "key8": "2UU4A6bdafKGEHwAhrmQZGLE3JYVenBrPubEuPNssfuM5VjaMbrPGj9yDgtCt7DY4S4YUiYHhrMxF49ftTWu8g5p",
  "key9": "wamps6Udekz9BjEA5Lu1futqYa2PY8fozu46RkfKGQFtUJ8xtLw7YHahSCYS4dGNfVnkxeinGCVFfDN2rkiZdSR",
  "key10": "28QYM7gY37koYcsQd55QFCw7p46wPTtyHazqtVhjXMJsYFsL1CQT6VnHrQDGMz7SYh7m9qssAoiGSCKzt1FAnPgr",
  "key11": "5JjWyG5ruo5Jsi7DfCRGARryS5voftbkmuAnXceAKJThqENToyr9peYfBfDvVjRG1j8Tvu4gnTpEkAvBqinnq2Rj",
  "key12": "37VZDGeKwyHB27ABYRCuGVAE5hEBBXM9nqjKpEzB4ixZhrC2RJ2egn7HTcB7qSEk2QyBWwP6cFkPMciUKs5sPGjU",
  "key13": "5rqCsJy5h4QvGK8LUF7Z47obqWMyCprzPMoDbwPVNo5GeGBCi6xLSjFDcTXRrN236cSRyCx1AhTV1Md8gFx65aN8",
  "key14": "23drZuuNCcziDt8LgZiHTMja4i6Bdhk1kG71ZV8nmuxDPvBRpaFSngj4cPYYSRDWcD4MPQDbD2rpNwahpe1dHFsf",
  "key15": "41mu1T9mNxdqipYDgpXSFZQgWF2qnRSnzfbCvMbymDdZkTWJmNDSgnGfdFSo1xYDxzWU4Vgye1zPnovWqbiYu6Jw",
  "key16": "rngLrWE1YLCBVDkxJzWuuMSE9M1TyocgKt5wZXmnj8ojpwANs83V4QbQoUiMhej1kkZHhFFTGVoajPTx2rvAqWp",
  "key17": "5yHPkyzW3Y2GVPGeQj7cAaf9XEoeUggikMi3EEGHKoy7jAGyFZJihtA5rmaVwxtG8tybm4nPiCbDTj6HL35dtegd",
  "key18": "5arwNbr9swrcUEw3kNjk7iYGq1emxD5ajnrFqgeMamHHqfQ8z5s6ibSz94zEZbrMakognSQ6JmnwqQvhXcSQ524W",
  "key19": "3r5f7f3CbFRFRiGmKv5N9A2JhWWw3rq4EnY7uMUeza3bkYBmKpSJWdVsopodrxXqrZwZrFqsctnenybpifB4vpes",
  "key20": "52GAeqEoY5Daf54PLk1vBzjsrD3Q14rnmZUm2xwpAPEYeLZyfQDNQY1svviSnK81Ag9uRUHp1DcLd3PpJsnkq6NC",
  "key21": "4ij9Bz4bnWJqB6eRadLREDe94Sy9rQGovZgrb1HwMKpLUqEPkGNp4HkjTA3mtZgjWY77hTYSWytDwej6wccHmLEF",
  "key22": "4oj7p5RN7XpUrLQpW9VcwaqQ1m5kiBm8HQUcE5xM5BRh5epaU7agSgiLS54gsaL6u7jspMuBvcj9xyhxtC7Co85S",
  "key23": "4PiwMevW72woZsCkZTPprjdz7drMzhguMtqPxx5umeYUCcPA1cKRU7kmKfJf2SqmGDbpwkEKChbC8DkCKDZHSsBx",
  "key24": "3NybxVnBbBeKMNYFKR8YrKdghCC4CZUiDcwZdi6xMmUE8NT1Z13yiBod1KF57QgRucYcfA9KaderW9q2syWEAcZk",
  "key25": "41s9T4VBE4Uir5TNcH9hEEgsE3TnZRbv65yLd5MpV9X2CRYkrbCxKutZWer9VQ5Tyx4rj7rnfPG36QEBVYhhrzpa",
  "key26": "3Pd31qXiADsc2qNdDQwB9ch3cyJdTLJv7UKAE5iu4fz94ZHL5vCUXtRULPia7vcTmpWPhJyzhhY1oMnnnCi3KCu4",
  "key27": "5RwYJbobSw5XLoVGNYXzeQcF5ixiP4qLWptDm8qga7xcMTZpEzfE7ABDkZ6ndkwxQ7iG2vjXc6U2QZ3t2UTcjkRv",
  "key28": "34XGhvCvTyp3AnzAEqYSKhWDXnhEdnzoCA9C1Z23k2BPyCxp2N7j2rkHb9yhyG3XwTMHxjTqAEEc57gd1Yqh9z9Q",
  "key29": "4RkcuBHKtfEQdsC5Q4G4WrtpKGwQzDpqCrQUJ93EtiPjrqZXJ6tJrv7X3M3tc7mZPPoYbZDHWF7WjtU42vaLVWJt"
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
