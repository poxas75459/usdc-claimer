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
    "3vxiQe4tgedXn9Tg6WGJJe5mpiJUvw29MT7s7F9g9PK6iv2b5wk5m1Cw6DqBvKEme5xfEd5PztnHn2XY7HhfSWLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "94QhcCQbPsscxy9DTHpqpCg9WWR6Bhc9N1GRRsDDd9w7PG8R4DYKTUsqcj1H1b5eC33mwatR9q4136JR5S1HnSS",
  "key1": "2irAHQoxMJSn8HvAWU4KqxKMZmh7dQKzdjcf51iCHH686uGvnh7KTYDNeH9NrKaMZfMygD1eU1k4MWsj5jBucThk",
  "key2": "39Hj9StXMiShN3NtL7QhE2BF2yYMcYx6VRrxFsF6hbGsTrXDqafwUjof7LQ4gnjFFFZMguDuJ59LWNgWJh8qJ5n8",
  "key3": "2iDf7sLtvnZb14pqo66L9fuTnBjRyAy3Zr5n7CQVkyB4Dkcsx9qxqKo8i6eQZDsp9UPtzyH9FxiJcdHGJjJF9C9F",
  "key4": "2MErZbuVA8zePh9hp3XpSMUt9iWrcPXZLUoUCnD5k6YoQrNoEm2NXeWT6YpGsqxMy3kGV57mxEY2peAHHZN6vY9M",
  "key5": "5SxgTZ1Pd5burzR9ZUYC5R46BZaQV1VaiPhmwEF1jKtM4Hvboufa27wBSbSRaRn9BSQHCMQ9cUjedR1dshVw5Moq",
  "key6": "4PkBnQKeG3rHn7f3q9T2G9s22NCr9VQhGQzbSNFf6bMZb74PSfJ3jRZUwGrC9fozisy2wa9kfriCSjDtxBBQkkcK",
  "key7": "oQkhZLBujkaG3XdBhwrddY9aKTwiG9J2Gh47FUGuwKS2nQMmHKixMNHsLQ7hjc8bXWi1dzEGkcfmcjHfYxx15Z1",
  "key8": "eLtYXJjC4eV5dVW2mobDdQRsaqhziG5AyJMyEzz1rfeZs7WsZi4RX7iBN5HKvfehEFu2RBncv7Vtms6vZba5yAN",
  "key9": "5KEZS1FddrgZVSdc1Sty4bjYWoKHHX13pZ6D8bvGrc23A81oX3a518oFd5GUhWJt5YsBhjq5oGtJRCqN5rM8zAV1",
  "key10": "2KoCq3LcDWg4cWt2D6QJU898tdpgCGtYcLHpdBuZN9LYP4uePa5FnBC148b5Jka3r3G2NedQwdXbvvsZxu7ZTQ3Y",
  "key11": "5v3LE4z4QL911XmzyxGkG85HU82wK5nNMPydM6h1d1GYHxJhjrbkoZgTxUahcg3CP5FhU3nnMRs9KUkzhPCE5Hpb",
  "key12": "4vyWdJcBerMak9PTQbZqpWYJkvvzJwMNcGXUKBk9e8LYEu7YXtZDEhExKwcmqK1ZyFSFbHd4dFP8UipJGukqeupx",
  "key13": "3hdbgG2KJ6MmXLHsEUDWTd8K6wpbg9Gc8M7diYH4eAACo8KdXYviPSZNcGqWgZ1M7awJwmgWvoKUFe9pjqr8duSp",
  "key14": "3e4JAF5azrGs43ERNrTtBhT9wW56tGWiDFQZw7aKQvaWmB4iV2QHbemHM4tHHuVDHzA12V6xRsp4Kq6J5ZLTRFhU",
  "key15": "4FsXrxjtb55f6S46qrjxqMBCuJzPfVLabbns4Ypia8vff6oobj6khSM3qqVtu5f2E5qVwMAvfNcrhS3UxwEJjxAh",
  "key16": "4xCky9ZcV4PT2aiaDKsdcP84SgLeFe8rw8BHNfDUX2thZvWF91Le27i3116HWmvvuvZERH6SE8hHH98sbWT7qZt2",
  "key17": "5EgrSqH3twt2kb3VAjUmZbA9uFdtEGgSgZfYqEdiKS9D9idU2rnhc4MURxJKCuaPMVVrTT6AVgGQQGr4QHhwSQ6V",
  "key18": "4z87YMMWdKn8L56R3xqygkfg5wHjuZVQQ7SbJS9eoZFsBiJwszyFS1462bnggq2TwyKDh3Epca1DLEC45sQBe5a9",
  "key19": "4PfdTBLeFFjBcFXxsRHmwLNuawrv4uQREADizuVx4FMoxC2qC45jP7o6g5Awvg9Q5gSiZJAWeVjhYFUCwt6SeofY",
  "key20": "2MvvGtML8FYzsYagsYg7HTEBac6Et7PF3kEHhxWscEpzVP8bdzxUn7gsdM8MfcHHpYDq67crXfSKzM7ovp1viNJa",
  "key21": "uCXbiWLSWomiqWdSoQEMjFLGu1tz5SMmSzbbbRz7QYe8XNVz3LHu4F7vyKbDKnfXCEi1X6vno5rwt8xCCxYHQSQ",
  "key22": "yCpnpReVBt4DuurPc7xSe3M4fmK5WnxdRsobi5gkeQxtKeBnG2thGqYvzso19n2KWf7bwRW6ko85M71sFdNj7Rm",
  "key23": "3HYpePxxQC7x9UyHGSPzmdts7m3WztwNc6MXetpETyBUY1fP4fBitNx6BqoU1423UKnp5ZQQsh8K9HmMMYRJfnjr",
  "key24": "3q76iEjmdCCzGs6AZebEMwHbqp16nNEeKW92Tvtmf1dfGAR3bHmXJgwjKwVHcEoz2xvvGV8tXAXPaVTtLYDJYHg9",
  "key25": "2xefbxGcjJ1R9W7csu2tUnc8hutRkHn965qsfAdVXUUVzyYEmBi5NonG8zDmp2u7WdXxvt9eZt2t1PuGJuVX3zqT",
  "key26": "7uY9YGy4AjMZ75Dp6pddiBvpnBUk7TP9b6sViynMbbKyAEHW3HDkLoLbon6DncgFQmbyRCd31yvskGigFSr43rG",
  "key27": "4StD7nzK5ggKYHGpgVZDwx7osvmsrYqPo7F6h1h1NfzEZfGowPveMVkjBCV8ubFSuHjzzZFAHGggnBeMwkTByeEe",
  "key28": "3E7m7rGybmbBPueWAdJwJ3k2jYirrQpUeFoiSjs9weVFcAzkCxLsvh9VdpLMHud7KbP13SLtZKENwsveYDYNVRoa",
  "key29": "5oA6wHV6Uj21FFqYuvBRdpWyS9bdeYkwWrd3NwrefwoYubQgpQDm33N5gE4LnF2wwmCWQz1WkoPZZM9WavNC8zL4",
  "key30": "ex48bA5WPbVirZAMFPrTzrhuPRAjYCtFLzaLkkgdT76WNF4SHj3D2LSKD7QPt2wMY39dVWgmy7bCmLV5Xzdkzd7",
  "key31": "65KeGf2LgfkkdE9srr7E9fJoUDMmQY6wrXqt7XJfxwRuMKeWGkjw1wkLHs368fZr7ePAhUxdUkEFqySmhFDaTUse",
  "key32": "3qGEhTBCihWdDWSPyF75dXCHZ1by7vozYMjGvFGMFomsT78oFFduA5ZhVMgVVzEGtqgADNNyHnpqdqTonbxQRhcx",
  "key33": "3smmRj7B7AprpZfAsJXxrVyBvErYMJtUgxRqq54YSw48BeJTMi6em9rTWQdQ8KTv14JnzPxebmkQSma3aLSe1Vqm",
  "key34": "HN1sd7uz2x7dXgcT7k9PdRFr5YNdDR6WczCyYYLW1FjcvsTLgqiPAdrdth9nd8VsfwaBhZzrYy7zAjnxWqftgKK",
  "key35": "4UDg7L6iLrmGSdhkPJssUqPoBc8YrWapv85FSPNe4dF5SyYYqMPKZXLiJnh3aFQB9NjDys6toUFdFBZtTr8UCNAQ",
  "key36": "5TF4sPMRpwdfLA4Ud1G4WRH8hdymb3xbici7KTxQChj75aLdwiktz7Ta9QZFYxSETS1CoKQkATRUUUYvKjhLTMff"
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
