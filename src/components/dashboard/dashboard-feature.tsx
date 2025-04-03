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
    "55MR3MNMdK4kP5dkyiabJvtMA6dNaUN4B9VRbsSaAayJ5KRJc4ufpbGgsLqEEwweVXChBoRFxXwGicP2jCy8PwPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Srj7vQDzsMayYXE36cMTKrZNWGqTDhjLrKasSuhfEEZ9sWYYBQ7rztLBGdq4k2MayjrqmU95Hjor1KzbUwZR8W3",
  "key1": "2uCoiLmnti7GiUqq7PPWCxsuMndGcixhFkadfQsdfQyvTbUvQnGd7S6fHr9yLmoV7BqqHmzPHbA9ksvjtkKpnnwF",
  "key2": "61fnwL4GxThHBrjkmKYkMk9eTuhAG71a4sy2ERskuCDXLLd9tom5U8bgZReNT8CDCKrgc1w117tEK764M8i1uHdZ",
  "key3": "XrJX445XrfSMSJxzi6jCFAMfZCo3AeaRJGVnzPV2MYvtwqbhuAs4C1rtDvjPeXpwysYNxczpRHZauyYzbdujyex",
  "key4": "5nZGfAy1YwUxB7GoTZ4zrmCP7vNkNXXvE8L7uCL5xCwTv3s5Hk6TPUFrMF6a3nZDinyeGQWnifUbCwYDEoJ4vjUL",
  "key5": "44RudZ8Thm1DiiBXTTkMev3VDcYpPypEXWBZ2kKHDCpn5rxP2bgrgiKtApJ5ffDBVDEqYLFftsq8V9tC9r2PuPEt",
  "key6": "57Pz8G1gPfEC5XfxQNaCdzyG1iCKUyP45cUABde46hwViuCZho6ZYujgsQJFNH4hLW77kxSbSTHFNXcUQTwGUtHg",
  "key7": "278XQwB7Urbmoa5te2E54RDkSeTimbVDZ9SHrmabiv3ixMVUGaJqbGFzs4cJMWU6oCF3h35rLP3WWTeEvPnSmKKh",
  "key8": "ULmh1zP64jvZnARRRgomxzEVnMWbcWfLU8pVxKRzfEEBKAWCg9K3QQNsf9N4az6dnEJBnqR27FRKrNsGYwN7PRt",
  "key9": "4zD7Tkp3UVeCX66n4eUctu27Z7pz2KNdQKhvpVKmdw4XwaYju4XLiWcVewUQCgQ9u6vSvH8BzWCfShbiodyEXpkM",
  "key10": "2epLoMSFvtRdBuazvPDzFykNri2KTrBWtjNmw1GU5PwuAKZSHbgNAG1fvTqkU3ZWs63a7WqWE1MLFMCXSfFj7wqZ",
  "key11": "4f245cQBTeakUhwQ8hThXnJJ2KcQG35MJLc9nTrApPWmqLehhUVAVpqQgc9oYQohbUqe5raHrwYqWnSa1Gfqe349",
  "key12": "462k6ZXBNDMnSRyJ2hKTJut2RMCWPB4xukkAtZckSHs6ShwkHGEaBZ4iBqYqXp9EfAkzNo3Amn3hD2nJzpQ6bYC5",
  "key13": "582Sty25zZXBMmZxWWcu2yHEzKEBp9yVdbn7qEpRHZQJ2bXHtbq39nodeq2TDUwGXxzSGFcCtWGnmrvKvFUFcCnY",
  "key14": "5t1Sq8P79eAUSpXyyqd6sK2fNLpGc7h5BYJQFXqCnvkJmue7omBCUJCdbKTTpL9Ka3iS1gqeVVzX8kidVPAz5JwC",
  "key15": "3PkJWKzowLZTo5wPzWTTnPDCSTSKprkq646DEKineWSEv4ugHipTQNGH7jL6iG7RRKHouRCoZQ6Q9t3Cxpjmk6zB",
  "key16": "5VdJP8usjXQ4J1b86QaqPtzSu14kb8MsJyxJwL9BbRjagoBJnBzQPvNcdtvUQCv2dXttvAWdf3PnQa8gkpU8rfmY",
  "key17": "5nKYxp7Dw5bcETP4i1AqkMbq9F6rZQ5STQievQ5jhV6x2ZnG6DYvezmnVcxiuMet3s6FWyTr7c3fJTwGdMWtGc2M",
  "key18": "Mm93ADWnLFRwmqs7hzbkX21qQb7rjPgoNxDSjKbasyajQPkZMQY3Bgc4FpN3QCtZXUf3r1gyUexUMnmP9yaNJkG",
  "key19": "a84v2pRuCTaxhKoCbUkcYozGqmjrAFj3UG8wXzVEwwKWphhtsLeQWCwpim3rsazPBbienkyokgof4yjbLwUkF4Q",
  "key20": "3FHEUxd3TpdkiVUeobsKbyd7RdeELf8mRDVavtavVGFqWDMruDTzHb92jSXD5QWuRdJ1H6N5iVUZxUB9Y4t7KHHj",
  "key21": "5h2csmcGcsoEN3CGxjC4aDtAhFpdsNta9Jc7dBQN8UueDHkAVumwsaugJx91E3Pf1pTvD96tMQh6TKE1YzCDqJq4",
  "key22": "wgNFGq8oRXNW6kMJiryuYvVQoqEP5VrYK6AVehrpdarKZpGdcc9YkXP3ouUcFaaGWNmeB34Mksx7DychnfN18J4",
  "key23": "24hEyeMr2TbGvwZi7r6cZ7X1ehpbcGF4586NQh4jdfdUadxha8BUF9bUzLCUvmSDk6Dvwq9VYEDVXASN91CmFXRc",
  "key24": "3x9GecHD5chARv4YHviux76PYrpzw8jf7riLqkgMKoeE6ee5ufxqyBWUrdX8cksmrQeCoRdc3YqQkZpxhMPaxdSk",
  "key25": "3P9VMRgjH8GiDtisymgoBSdJJG6ajHdh2CYb2kGcooRgpUSTZmfB3p51aMLT2FdQCgErN3v6FEntDYetVKfpgrcJ",
  "key26": "v5ykJa1V8vis6UMmxmKB6xdfSmV4QCQzoERYVYQ1foK5EMvRondi8rXdY9cvrBVzQ4ADJpubb7frQY2ufi22vpP",
  "key27": "c9LzrJ5sdNb5E59Yq74nGQDbgSCCzokxQ28q3gMvAnbNfYkx3QqK3tLfaiN9Wn8s4HSR8WH4ViMNgwu3qKvdTgr",
  "key28": "oENiDEoh1zmn3Cu1VMWXwoDMMsofeubJhdkWR1FgTex699k7Kk4A1CMcE1J2jGTg7npbU6aX3Qmvp9M7XGfmaoF",
  "key29": "44ydQZ8CkthqFyYDWGaFGmgKAF6z1DcEXdh8HArox7JSL36WjXgRVCLnjM5jQChAjF5AZmPEyA1DDt7cfYLaWMyY"
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
