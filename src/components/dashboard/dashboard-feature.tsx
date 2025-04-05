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
    "3Uco41wDt3c2NWaTw67nMnDv6b5QJPDZqa2gWnkoNHhGjbxsRN3CGB2S7crHiRu5vqowuPeQDWMfvtukWEqGht5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XsGWijT47LJaw4eYDEuVEC8G1S4GQ9Movugsn5iEy83VfvD7meA93RJJkXzEWaAoCZCzkircbKHjJKVQkYESsTD",
  "key1": "4t1CJRy7wWNXtamn9wLkCxAaYy3jffkUXUAhFzcfpnnns1qTtxZyHeCxw23vzBJoKDxNsP58vrkozCtyky4gNkF4",
  "key2": "5WuEEaiEKa6QvHyRVtvJ44qC3hxK41N2qcQdCRXXj9iTZxBStTDu1DFsVs7R5v3PeJb2czNdw1mL3ZWaU5P2HNa9",
  "key3": "4RGumUqBKwjxMdTmJYZVD6aDVXBw3DQHX1dHkPCdhbarD1XmzpSuLy8xVkvpcphsmYBTFZ4tQ8vMZLuF8Eyt1Mdp",
  "key4": "3bnBCmrPfd3L6miPJtXFa89efQyCwEBoThAVh5hFLNGg2Vbahz9SeJjikLjBZnvBVWY74mcxsrSzeUNXbyuaYMEE",
  "key5": "4cwhVGsADeEVk4btGwpSXFwH3UDCN5V5ZHSQqvYH3GyJ5tmzS1H8ikEm1T1dNTG2eM3RMYpNKacWz2zwLnsxk92B",
  "key6": "5AdXyaqX5G9sJgYxwj2VMVT58YQjbdEfv7sSzCVxFkiGQo7skdueUocSoGrwEywPbZcV9eEgT2MADrT5ZGp5QysR",
  "key7": "3kBG598tTFweaE11WFYbaY5SHDXdaEeF9omjz1c96AE1FLgMYxHEXAKF7gY5fWcn8XtmHABUoAf2kFDLq84bHDRS",
  "key8": "3yL399YcguqTL3tmFHaBwAghdZasPKRqswGjAmiMoRUCMa8EXb13VBqTBkYgV79Ugx7Bu8iBoQudxgah3cirgvyL",
  "key9": "4DPjvXmUksTCW1Ji3mroQezb5N2RYmQC2uuCcks2RYZKDB5GQsdL1SZFT3PnnV3mTtG2UDWz5wr9JPXTuZneH5sg",
  "key10": "3NoopzkJBFBL1KQc1LXjvgC2dAetULGQgzddgAsZj5ADbvZE973JvgLBeMQwmu8b2RuzcwfQPAeTrcuybmuqtvew",
  "key11": "4nrXqFz7fhWiRyKEd1nRqf35v7DdqzuHGAk4XvZhLeU8M1RgM29LjYbAkmnqrz3s9gaxw3CkSDDNX3xHEVnQEmEn",
  "key12": "4cy5WLs9x6brXJN3dtqTuxNLwpUShe5gxygBeujAvAYX8fUR5rwGHJsmMawdcM3HhJSyUvrWuMiEaTwHjMdDihr",
  "key13": "42ZpAze43E99hKmLhbHdbqe4cABnJQBy1SZUSdV3wH5g4KAAWfCEaNjFQh5ZKVt7MPZGqRjRqzW6mdrY1q88C6ZA",
  "key14": "5MJWwpYT6Uh4jYaCemvfSwj1sfgUpG4S2nDweBPQKBKrrzphZPRpXr2uPcGqEsn4oEvxmcC1QbiMpUuK67rkF1iJ",
  "key15": "VHeDhU1YZCSPT9SZ4y5UQgYg74jqFh5AgbH9vKafJp6r6yfocQDhBjVVyNtukcTynwL1nb6XbsQUhLh8ZR5wQkg",
  "key16": "5Rw5xeTYyf5v38AcUk93RoTeGio1muZsKCxkywGvbZJST1T6uTnWMVkNE3xrnB4LC2B5WEXWH68K9s66CjDevy7Z",
  "key17": "53PF9DkQnFpvWYC2aqFziBSia6cGxKRNW4DzWPS9QtxGPJEbFN8bDwjTHFSYDQxdGNTLosEac9DXFoWVEJW3sTKb",
  "key18": "5azJiQB3hDMEGvnwE6uA8cbq1rQSnfmSjwrdXJVydLUjY1mcrpGiKKXtZsZmAcCQbZ2rtkWsQzKoMFm1ntE7umku",
  "key19": "4dHmfNVeaupdxT76PY7dMXFhe8LGAVWcqVV4LUZTFeKygx4kzQ1ixcDGjaBEur1FoHcUqRXkBm8cjwjxFSE2CV3w",
  "key20": "5onVMkRvHtGCc3LohvU6cnC1J2ngcDuHwF8VnCquBnzToeZwhg14jLpRjKG63Ek2omMoaVqS6VAco7BqbQUhyNDK",
  "key21": "5CQ6s8UmAUfDnEndm89tFKRZB5SVmi3kCmZebQ9kDW2uuCAMNV64tFmh8yuccB6LKCcPUCYm5catuwSwVezqr6m1",
  "key22": "YtqrYTTxhq6wzNZb3Hxmno5P6Uhz84rMcTpGydMPewFeVAetaCcE9jeR2ycfCgtjiDoF9h5JXxqdRQpmDkbLgxT",
  "key23": "2SNC4YXPcUP1NKckHRqBsm39N1WnP5quA9wH83hy729RkMAiKfwDvRhWYm4ugG8X2GdLVyJ4ehh3CrSWc3ciNkp7",
  "key24": "5YN6CATtiencm3poEQiUqJxEuSDPsJZCCEbUnVkQV8yjJPViFAeMHJtY2dMZPB68nQ7XZxrNXPctEwmHTMVkuFYn",
  "key25": "4csgJ9eUEcYb2zjFqwJ2JJA7mHUnAr5NHkZw1Bifrad5AiRkuVgjiDRno1bVJgRdvscMXrzAdGqyu9nHCcsy8ci4",
  "key26": "5UoqyWpSHYASSjXteXsXhmXxR7rwhfXnwbat6a2JmKMdepcsgsfLqntdKEMjr189wENKC2Sxf2HgFrk7iRPzKV6W",
  "key27": "d1CfqmrmnFbLe6S9J1VxhtjQyZ2qS6qkeByyz6ZohE1PpfW6LzspRHE2fRPkfFGQUaTb61yME4ZSNRKobAFYJQM",
  "key28": "4yH6Q65sZiCJj2fPf9QTrZtDXQ2DgxDBiiATxf9mzyCu6Au6NUMF45sq7JvvTvzbkd5LFrU7SK4Q62cBypSxdWyt",
  "key29": "48jYMfRKSXPL7d9wGH7akuFyEAXj3nRQuBm2pkWkYGtQVjikrfsbTmyXThQ8GVH6a9DmbVA9CbAd71DBKoGH5VhC"
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
