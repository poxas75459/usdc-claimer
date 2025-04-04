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
    "ooJWKULdXE7F16e1Uvphn8N9Pp9C5sL7C5vENphhTVY8gUyV4JMFfxHu6eA3Ga6jR8hueooNntJvvtfMh4M4SKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZrfAEYiBzxvBAzNTYHFovucV6gxGD25uUaTrGMQ3dRDkXyxjkExbD6DC541CDK8Rxx8TqsNSrv1JDssnBhJmzp",
  "key1": "5USTyvZrHw1eAy44ap9QtgPTTwsNigJgayiXhE8fedFcBfkmSjst5jW3dBdFFKRLjpGbZPCmokYaQ3sf7SudfmK7",
  "key2": "5wtayvjUwDpHdKudYwKcoEDCeLDmRuV2VpdCRCFprfKDzP7G9VEF8hKs78r7MWteae5Gxek3yJ5MYfxDktv4vHuD",
  "key3": "5tJ6yFYMejEaAyjmwqcY6HVh99pg5RpkbzyFx6z79uNPfj7GbfuMWwdbWTcCHXwyvijgqqMmUsTx229jmFSnkY1r",
  "key4": "KrDvpPZDTmBzi4yjP4ZTezAkjJJJa5bgaHdB32tdyW7FniZ8mJ2ZuY4Am17oQGGvvbcL89wB9CPEaAGkaVdPhxT",
  "key5": "Dz5fdWcGkYE9nNuSBX7qCFFGwjY9XuvS8Hc9LfGwBAJZLUh8nek3Dn6TkUW52szXY4ZxsC2ZNp6jBpv3L2gxdtu",
  "key6": "YSgTpfuUD1oTSiuoJCj1TQGwyEjjrySgA7kGMt9nDPWKfA4bcsWEevSFyBjYFHjqxRJ444ZaDeQE9ztHGRvVaSV",
  "key7": "3HLRcjPUqFWRHi3DTRS2KRntZTjhApEmnY5S8yTx44UWm5AXd22oj2D9jtFvj47Pn1UnJc7fG8xQ4sf2HmuWDEij",
  "key8": "3vEDX4jKZg8hZrYvLveFqZhbhUjTopT7AWt2fAsCmtfwWLix6k5bbXnzfKHijxz3Uy7TL5FjgjBdgHUTULL2u5NJ",
  "key9": "3KfB83e5kCUJucbXUQHmDNS38XpxKEjho5htiHWgb4PqDxtdz2Bz4HUWhstJZtaFFwf4CBZW41gWXSZvc6kD1rBy",
  "key10": "2EbeEXgy3f1yPCJMQQU9JuKxXnTYh9TLRx5d1tRGrBanCeVbVVJAQCnnXamPxcceKzr76iHEYioJWUbFBBTGH3oG",
  "key11": "4NF9HpgwdAAmiV64m3hHTVUzxXjGPbFu1nm2KRJuGkCxav5aozxi8gGtscfaWcAMsUQps6p4sCmHp6JNbhzLeQ3y",
  "key12": "4j5LqJ76xER4RK3VrgwJU4s4FwwBpGSUpjWyQXzrf5HmmK39ABVw3tY5HNWsyZTwGGRHxQmLqVPf4zyckbeKmwMx",
  "key13": "4GGkuNAECFJzhor2yQJLP8DtpRCWAFekntMUorDk9iSssk42QmPcZhQ5QzfG1utRpXauU6bMy65Y4UXE2mbuXrfX",
  "key14": "f8sHy44iWEKPjBHydHYtEDVmApk4sofbbDJ3Unr81cyT5sgUvfmHxcfzyEgRs36mEwaYtNgYzcQHtQNqKiY5DNo",
  "key15": "2UxBP3SWRUCRbRuHe5UaSbcD8duyCH7xVZhoz45i7qD3iqdHifLFUNQra5rzpjMimUJURajnjgeryY6DiTaHTM2w",
  "key16": "2ToBQ4avCSng1U7QhhBpx2AisAdWi53opnSDBFmAKRU6dtKZzw75BcgnphyCdP8FzfLwAKWipvsZJ9SinSJ1LdeV",
  "key17": "FpumbyPZ63aDN85DyHhc5LQVthWy3XQqv5RDe3DRfvyBUHxCDYUDaVoF5n7E89ywKc1AzVxekFSRtMXMDrxmBHe",
  "key18": "3bZa57V3ZtSu2KnzUkRZd8WJSxRuuA5juoT6taUb9CRv98PE4GMVd5s353km7jTVyqrYdfrcgbKKRAkA7uoHj9DF",
  "key19": "5XXWckQ38waW2g63sRvzyvbdU5ZUNkFRmngFch7uJ3n3RkBDDM2Pq8YcqfGJoTuZ7gMZ6GTz4R9s8EHqVn8Cn7ye",
  "key20": "2ATjax3s8r1n8RFuskVVowe55bDfkJvPSWa3t1sTzmN1fXNrotfMoqfxfcCZaE4t3V1ZLPvQkU8UY7UwWNYvrbJB",
  "key21": "peaW8sV8enJP8mzNg8PB5dFX7LCAyNaqENJYJddTV93joQ7znwofL8mvf1N81UiSsAVpgbvHsedZ7o2yF9tqyBV",
  "key22": "4w5tUmUHWRvB89WCGsEQh3MMwyzgxC1dRqTmibq1Ds4AdN6HqqKSa6p8XLrdApNBnuqxrwopwXdkGZY1HPFGWd3t",
  "key23": "5medBb6xeYPDFJoD22PksrNtECZrBy5q53SXWzArzvdxwzMzhC1BdHxi1mHj3zU1wMNhNA6iFmQCmBn3cfD84w61",
  "key24": "612io1CLa22rhmqqwMU7SC5wHmW2zxuQp4W8TxBS2e7acu3SywWYYuB9xRcqbxsp9Pu8cgHGTc2Q6WCbK9tTCAx",
  "key25": "2tbFnhXGBSS31LbxNeQiXWgTgeHoRuoiGomH5zDVmyBD5oNzk1G2WuREdpbw22jCbZaSsy1L8KpJP2tC9hLzSjvj",
  "key26": "2kYRBK9ui5kr3DeM1CP2uNhAmu6gcdo9x3EHt1GuvQMPHUCWp17weQhXKDUkgWXzAhDgLNNpNwiWSLv1KiHsbrcL",
  "key27": "2uYh3FjWThmBvjhj6uCtTmB6672SY4QaUNtntW3eVqLmia9s5bf62iH4pMj632cePusZW48fUUD5u46durVm53CK",
  "key28": "2eU6uWLZLa8dqmLLKzLduQMFt38nKGFUpHb47JJ1Z2F127B8JptYFqbJEAqmwR2yPpXjE3AspSpV8VG6emP6WAam",
  "key29": "4JNCpwXbyHnb5AxLkZJPdDTm1TECZaBGg9eMRsvu2yNcGMRoYFrti19nA8MhjcipNpoFJURYZYstdQbXg4NAcypW",
  "key30": "2L5T3BBoK7v8aU2XbH1UXPPeGZaEjwsa3eYgXf8NQ8k6R6FayWEeSJ55Gz2qRevLtqGKP5gv8uqz4LNsVZp2niiY",
  "key31": "Ci5MwaKj4wPXen1rEDzZ9yL9p5wHrkS4gfmrGFxmefjvhTeYbEQq7B7p9mnsDGLnczyeeRbTRodJ3enhagM9p9G",
  "key32": "3anoUSGSDLEwR1BzX5AnQxnM9BPE387n58RyEzDhefwndCQH2hfcTaLYjNuw2G8BPiEZSNqRYPDi1da1HSK4XYrB",
  "key33": "598qq7fKyTuwHyXtbcjKvyHE9GHCAkzSZiysdNzQxT2tyDgHv7ScBrxfEbEsWrsfZ5yMENBtUQh831eDB95aw725",
  "key34": "2g4BebhmdcDsz5ecxa4VqWvF6Em66CPTSuR9CKySxVPx5vNRyPoedXcZUB56r3th7yFtLfQDkmPB5VtHCKG28Xqb",
  "key35": "CCv6ekjEXBc7KN8oGqYdnADZns3RrJFL22wK3y14VSQ32wcXkHRdayLrKruE7SQLrS1Jvr99khrtL9hqezJk6y2"
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
