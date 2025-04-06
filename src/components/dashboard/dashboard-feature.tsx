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
    "XJsE8A7Xm9MkCXekA8L9GNMqPDzxqzLtsKjW4BGpG4ydYnC3LZKT8wyCaLR8ED1EaFhLGUxjdVVcffFWLvoKG6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8kneMvHfF8UA1bh5coq3qc9PMLryq435cL2J2azMZmKvhGnjt62TuHA8CyXpHrT2KKVrDcTh7pehLZJXXvfhYf",
  "key1": "crMXC8o45Njr7Yk1j2c7qzSqZiD3NipYpLAzbSLMyiaA6QjJ64VML742t89rmdKqL49WQTTpzswo9NUF99jKGmk",
  "key2": "2SCSEPBonBRVk5v2Wz8j1J9j5uUdAVreqgfFoRuPsDKLCcvEkNJ1v947j5Szrfz99imX8a6L3F87uiiHWfxLjC11",
  "key3": "2YmqMLnTmhoEhJC43FTU6fhRL5PPdYZc4TXTnNqd2pJtiavDJKGrPHj3V6a6M1HhJeWC3doTi3mesKpFSBVjywPy",
  "key4": "3xHSxjDnwdmG4XDYYrZTBP3ugmmh8WGQXHAA1CcZdiYmPocFevkYXzASKHDX6DMF295fw565xKFutNTEfXrZC2EE",
  "key5": "4SwDBm27wSkHLBCT8dvhXDNJYCE5uymqr78kzHnn26RwCS2nHjnh3kCzYqJaXq5kb4uQmGZ44hL9sSq1ZageRYex",
  "key6": "5VcMqT7jU7xT2dsvdKyD1YdhQDuAgvso8UaLuiXjferVXmH1WgsU4QB18ntbiskkmWbpHYhffpUEUNcZfBwpeoxr",
  "key7": "3BpD3jtHKYhZNNKvXxZxoQvGxiEYkm4DEyN6Xmd2TEQeREQ9XN6Yiz9kudE7Y5SQYRo1qAUq6qgCmjU49mK1joPq",
  "key8": "2EEqqGCJKVK5sssaqqJFDKU9R5M6TGKkp8QdKMwEwzEyQhqe3m6QAC1kqxznzZ6wV5LcREz6yTFznMYwrmdoLYyM",
  "key9": "5AH75eHgRTFvWYWBTcTkChLHApxMQAoh5vjmCaciDDYvAfNgNGf5rBCdwhRoU6piuYHRWxHj9aeS3VWj1FDHJmGz",
  "key10": "39xaMHjgupRNbAq66hyDaL1oi7XaccKNrdWAZpSxZDTJcQ8Esagv4THkySHDF9dNc1BCvakAwf7qZv2CWxvMMuAP",
  "key11": "fGZNdLVHLvbTyfPGq5vifZMykumTnMcqjv7xqWsjYq47HUE1CzUk1GYr3ErL1oEbZ6kKKRdXwJUULrkXRLvkiUP",
  "key12": "3DFm8aKE26Jc516koZobMnZjRNwUbeWMdqmS4xdjwfBRt7ShKUayJ98GPj7CwJAH31M8vG1b9zv48ENGc433CyBM",
  "key13": "2wKnmf8fqkRRsu6TzBVZdm3ihTHtfHMPPjTiizyYvMGquaPQRp1PxtCkYGwhCiZdL6VvXto8DE7rSaXDEMwj8SNL",
  "key14": "2uFDxy8JDsX9FR98ZNA2g6dk7fzQ9JqTg9CEUjJXSFuRy6jVRXbMxqTjyrES3cpxEVgfHjwPv5vfk5B15RASarqi",
  "key15": "5BeWL4iMvaPujxYB6AxezVEbJNLiwse8JB3A2HJR5gvroYU5ZNz5WGp5SAsPpREGKx1RMYRzkSaURhqV7D7zJ6Wn",
  "key16": "25V1L43TjGmVEiQ1ghDEMMxPRJKHpKunLZUTXfrLk3un3B2U6osnkqg4tz3Lm5vcCeknyCt9hzebx6oE7s7ihfFd",
  "key17": "3Yb4YAKp8ATVWxdegCKHXVQxwzCY6vKm1zSZStprQ5obHAYEWURJ6hwfr16R3J4rBeSGyEdD8oeubDx6T8EJwuRL",
  "key18": "33ThjWmYoqDgzo364qhNyKpCWGvMPEqbD6mYAt3Khavzd9eXh9YCxD8GTp3apdJKec2cmfjrAGwQezpBUCE5pT8f",
  "key19": "3mCbL1vyV5UMVteKUyMJc5LMArSgEpfKmBAMqP8rm659iguPnDwsi7ih9md6QCwcdnVR1VAZdnS3EtvamVJ72PSj",
  "key20": "4dkMCBp5AEFYNjaFFpAuTwBKRv6oQx6sMY2tmr7UVZAnjkmeeGtGjpPqUHcNe1n6fT5eGVPqSRpEQAmVLDY7VSFL",
  "key21": "bEQebSuUGKS8UiY6Nq94ajiaE8kYANEpoRTsANSKPGejQ3HuLr7ZRvHsKgKXQ3TZZHrb3ur6U2mxzS8a4XFsKAX",
  "key22": "2ZDCKUyGbvPiUCCSZrEGFTut8k4RnU1qeWm5jTKAcMf7KHz9fUjbuNSpCKCRMbidbZkVwgcdZvqoPJ2GZvT16Ai7",
  "key23": "127ekGc6ZGGJeMY7mp3zmHRLxYijY4c1xZYd4tpUVFtJW7q9WxPs76ACyJhacjcbfum69LKsxJ5MvCTYYZkijzHN",
  "key24": "58dy7Ej3zznS8b59SWfnw9iuM9dPfiySHweG9PNLLDjyS4dMFZLXoWXUdj5JDUxdKBs3ieUhMRzpThVQckvvuAAa",
  "key25": "5nP7RbZ26Z1cqPGyx8LkgY9j8cFYZWbzJRkZ1bdtUPqiU9Jn4wxKWwRshAWYGHo9kpE243FN1XDSYynf6PgQD5s5",
  "key26": "2zidzFqQDHeEjm5BA7qmcHcrZNZsRc5J1FDUh22FA8NTiJF4zboEbkfcP5K3QdoLirWAT8htgm8pNYx161MHK198",
  "key27": "6k8h197Cb3AcptqMLrZsic5F5bES2CuuZ9BkpYNg1SsVHFC9Z333RocqvK52doyaRCgeivg6M62fk5S98vErJe9",
  "key28": "4oqaaJUksCurYhexMCWDbvMjBQoe2qYoYWu7xjnt3TS9U2Bd9SARaNhH1Ahm1EHwLb86pUP2NNUrWBUcKZupjWcH",
  "key29": "2TxLzdXXGFCwd4m9oY3YVGQQa7H7p2iwV8xo1n2FdKnQiRzZ4RJCgDW4RYd3iZsEHzyosxK4SoCagTrrLsC6aUxZ"
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
