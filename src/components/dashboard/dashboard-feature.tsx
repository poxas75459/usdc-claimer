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
    "39FDjeJPJZHbW35aAX29mYKNYxzTTWRKwZioywkh5F5fYBKKpLZcTnfjyQmFCkdMM6VpUu7sGCKgBoJKNQhkeX5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1D8eyTXgPEk6Z2CuaZnBF3xBNBUHGW4MFizYM2pq1QjjuWPkZP9XnTo9jtubfKVxc2Ky5tbec3PPvXhvrp11Af",
  "key1": "4NJ2gV6kSk1cd4som7WCui3RweAqkSPd4ErJBZbzeVNTMAAFAMb6RhowmvjqBbS2b4CNhQXDvsDER8ZdPPYeLvqH",
  "key2": "26dwQgFkNPQfdT7JQmQYs4RuCrUJwFQXqLqvCe2cJMaWzdPdSq53Crg2GTG5p6hrzt8dwtDK6HL75U28pm2W2dEq",
  "key3": "5pyz7KXSnyoeN83NNRFVWb6WuivBfw3u6QMJeHHZPRVGUUeJKeQzHszbqAcwiGCK6E8TpqRA1TfrEjohoRXA4BqY",
  "key4": "3H62yHuoWMgcqQjKCV5Xi3zVy5DsMHz2XBzZkgbAzSTjht2xL9F3h5Q3CwK3ocbrHL616r3XA2AewJzLqxucXG9a",
  "key5": "9V6H5FKXjdNQ2dML51HESvXgXzb7BBMaHkRzDYkggH1kb4JL9q6uMadeiLiwieyJHRBZLHy7sXH9aqDP2VAA7nJ",
  "key6": "KSsAjCqDFrY4cnDak36HHUCpJVMHxA1nGn4ybX2PM6TZDn8xiwRfsN2r62mgYAGEXdWhrHYo53q9pMebyPenRR7",
  "key7": "64m7VEd6cdaECSxrRMQAFgmFqLnBtvkDjfpKgE7KwNqetHvAStyFhpJ2gg8dYaLUvP6mZVXrKiGJuydQGdjrmTeb",
  "key8": "34smKg7jCCCSE3vfKAB3Fe1X4593on6ZfQ8mQSSScZsGemBCG3oAuXbgWtYTEDQcYv5fKrz6qv4qxhL6bisem1vD",
  "key9": "4syD4GNpcFHDzxsjdEp6QoJNsppoZXyZNLsFRXevk6JNKrHbWJTyLRzU2HRUUyVKWWDWnDccyiFpGNioybiC3gVJ",
  "key10": "PZjwfPZD8g3mbiKrEKXLJ5F2ob8Q35tMw1cKfrLkqquFnhgZL9L1jEKtmyEh3YSsfhvt4PFiqvTUC6USwu1anDX",
  "key11": "i9Jn7ptvZkArHYgKd381rzfcb4gLdkkCbUtXuUKDZjdX1MFfBkefYSgqC2mk8QD8PjThW2tEvCEubogjFY5orHr",
  "key12": "5h5SRzdmjL8maPRuSp19TYjetz7Ghg4gdYyrRP4ruDftfLiZzbaK9254PUbhENxPgyUvyTnbKEwwaZEwdFhnK6dH",
  "key13": "2wH82FXjBeZUouhHFnZBPsfpUiDqnzQ8941tx85HPVSuAStV55ij85kGcZzCkSL9ie2jN1xeKNRaKrqoNwGpJTdA",
  "key14": "5zRqW8s3Ec2zF8R1exMdmCg6t3v4XCVwB7XqGCwYCW4GXv4TzhS586Q1CvZ2aorKfuJr4q6vbJb7wQ4DHzq7Ltpe",
  "key15": "5sZdZCFSrPn1bMrdVoiNKdjq8a3F37W91oyMBjPUtqKPh4rTH47G7GXWwK7GytRS2jbVhz3htyxTQk1j6zdaEHQm",
  "key16": "3NHcagvXob8Xfr9RDKZr2MWXpJ7HcdckJzXLnK8N9CqBsMigZeDiD6m4auaYqxFhSeu6eg1DK7oRj3VzvpLC62vo",
  "key17": "5CEAjWhBC65s7Exg5etwHeYnoFXsqdRQvmPZJotzjqJqnC9uJS8cgDmbFNzFUYv4daBYjsoHsyBUo6chDNbAhkh5",
  "key18": "SwP8NqZtDE4vBjEM5PaSkKqCgzJ64ZLwPs67JbHvFKxCYEyUoxrtat3N3Nz5mA34jwMuV8AB8QMr8PTxe8hshH7",
  "key19": "2nnVeawEqTpPt793LMNvdhEPpB1yAwZESVGjHs25jYDpzE6jLFSVSq4JeK2XQSeaKNr58eDKRc5VrSuSDcMFGvnr",
  "key20": "5JChf7r9jxMn1CFGHniCStB7uM8cncUb4DjFibLVjbkjYcs3YHtdg5SFY6QvFXbLhwv1v2ugosqrtuBgMYL81zZ4",
  "key21": "D6kEBFE27VCCrvy14Tbjb4tTEVdYGubi1JuT9qbjd5bgKJhB6H1bkAd5Z11LL3UUS9fktgfayXPrdPUsyjMC7KZ",
  "key22": "4kvvhNj8SJW9tHeqLNxw1xMgfstmrzD5WGDzV5ecemkpyLQdU4bjxHGcaRtG74UqNSMtj5zzFEJ58JXJiy4ZP287",
  "key23": "3DofiEecb943d7kF3i4sxUUPmWudxU3WVJ1jA3CvMzeiYEMNNmFgFW2LDpBp3ntk6TC6edJCeJLGpQ1oeRQvegrq",
  "key24": "4Dyo8U2Zk3sWBeeh9y7e4p3LhDkavajGiYHxGpknELcMuuundxcs4sct2KbRkCqGuvZWRRQXd1fHMuke9s1WedMD",
  "key25": "4LKJk2fnfXgE5zX9MhoLacabfhh7F4CcwCLUkspidVzUtgW8bEssv2xHjeYh2ww4YyNkYhHxX3yJHJVqQ4GRZnY8",
  "key26": "3AkqUKXYYQtK3F54c3hVgxY5rfNbNsqSR7fNtxRfm3C2WRfWsai1mpVbKMmc6abZ9vRJJPA7mvoaKtpVMkV7xBtE",
  "key27": "2xVsRhM8f8oGEQ7gjXxnEuBpdh8S8Y98B8t5e8dF5dQmrmFZfFrBoGcYm82kNYCaXHxyAjmw5h7gKQN2ii5MccPT",
  "key28": "ucuWC34tYvpn58k1Sh9CrsWVucNS22CTNrJt4TJqy6qPEyZbBd3Ltre6E4Y9uxpDKdJuhax8Tcvg9ktBAdMbx5W",
  "key29": "3poeY81eU3kggaJ6P7WCu7Wg59C4a3VqCBnjRd5BhKb7SGqDP3zLh1ZZwaNsQefwzz9biuykLTDvhx1V6CsdiXCN",
  "key30": "2Pya9f6oitw3Jt7ZfAor1mfMKF1LJKoEhTWcttzPDC26nhTBTqVVHDHG6SZAyvEx86byHQ7ec2FXKmbY59AjVVGA",
  "key31": "3rtv1ULAVeNQ3eN7kKW6LzANdF1HDwPAyjNEQsogbtvKaEr78WRFhyjoSBBxBpo27F5Jn6pqPapFUwZRxGLGhydW",
  "key32": "5J3wSf1X23p3atR7Euk9o5ACiZB7HJARi4sYoYDEWiCW1CrHrHWVwHPvveib4PkXoNMfT4ne3f2Fqhrowfnp22yc",
  "key33": "2dazxXASuKhM1aZ6omMfWpKiJsYUZ9tYsVA5Ar8AoPLpmkRumA6gCxrkkrFk38EzGw1DxNC9gQwweat3awM1RzR2"
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
