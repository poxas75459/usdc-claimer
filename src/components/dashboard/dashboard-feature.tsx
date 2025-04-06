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
    "6pJmtagCHVJgr2nnAoe8ngNzUCvDnBX8PyHJAu1ms6ehMEgSw3zPL92jQ3sBJWTqcfjKBdfqXaXfzZbod3AuyUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55r98qA9qjZtuck6JBBebPSr7thGmtTF2fruARdQs1a8xDmBZ1cUMhNmWwNKp7HzRiEennfFD3cWo8FYBcL599Dr",
  "key1": "55qP1t28ssVz8h81ndXze7NE4xqJYuXWprzZbshwMneWZDZfETJZkdpBNMSq9VHksJtt7eVSghH1m474TLWP2D2U",
  "key2": "4x3Z9fj4WTDaCsUNUHwuarHg4oW2gtHmFpSWv948x3jhbevfEKxi919Kt6B7SSQZbQsfSJtxX2nFBefmczmJTgoh",
  "key3": "vmBBatnSM4kdyWEjJsLQL5J4dZqpRRiKNuqpU8NtbScAEtfpRMqE2EGRwHbdzsFBHCQxVPJ1NjkT3hvc5x6zagd",
  "key4": "GS9Nj18ATr1wBsdBzQDB1r3t3YRWRU3DQyuvTxQaATJh7yUeotzD1GuDFBhVVLnEMge5yCZxzUUCyuavZQy9RmM",
  "key5": "3rCjJ9f5MmKsVsbz1Sgq1NHg1uzfv1daq4cztEdGmg8iVXzxLTx9aEwyLVWQtvcyKoZjbQdN5WC3LNsoEz8mad2F",
  "key6": "3nSwtfqv64vqSG4LT5e561pUiA4LiwopnBZoTTDjjU5ivZSeqzbpLowvnRZsmTmCeE6HkeT4RR2JE6uj8Hn9TAyv",
  "key7": "3635QRHE5SaFNCG2SnKv1FGGmx7V7sNH3kaoCkuq3LkrM9bnhqHVtGQj78VLeCsaVpkpLKDU2Um5mMCUAyaFgy9Q",
  "key8": "57LQkcwGcxghvBiCf53WDCWdiA1AfLmhixyeKtTvqfrQJ4BrJkLakmf71T9EFTo4ZkawLhmDwFuuC9ADmYmmdCQF",
  "key9": "4WAdLhFwqtiKiiug86VGQqvoBSnojTed5UaxQ1hbrDw3K47gzR4YJM5gLCA3hB2XSngQ9qYNFqJUYp1zkVN6p3NP",
  "key10": "2MmPhKeQeAksdDknQkkgc4Ad774TjNdfrNDjhDqkTGEwNZWTdYXmPssdbXGwyKJTPQiWPHn2H6mDqSdyutP7R4ZE",
  "key11": "Vni3ZjCBW4EeLkwp5PYXD2ojUgRpAAxU7oS2XWcHVeJzApYzWUV56JJr5PG5aDbJzQ9JGp4Hs58bq4swYiRmKx2",
  "key12": "4A7Z956NsPvNHa6kU92oddNyAXgmKwyXFrcN16X3bavCEdYBdnWfmDGiwG3qDFFC7KFYyoSpxWLUzVDnXTEtFJTV",
  "key13": "4C3FTef214K5LSZoSgR4yGwKPGCFkRxB3CHTtSVjfQKAfn85CeuWdgFwnaUC9WdiACZT4B9yETWojgVW5wimE4B2",
  "key14": "5kKDZDZ5vkDhzsP3b93xdCVYi4EmWnfBeAyEPxXiB2RYgKAYJiKAnKmM9CCwocKLqucdMwWVqAJ2gFTyypesGR6z",
  "key15": "569iQjeipWz5i6i6tEyCcY9iJXTTgKgaM1EaUX73fdcwB5Cn56RWerVp9DFSuADVb5Hij8qfj8FMpgC3wSwSjKHs",
  "key16": "4xXBkLL7GUcoUpKcmS5ao5xFdmHMDXFqYg2gdbQ4m4LJaPFSY8wr9FYSBB1B8fhXNwPBc8H4VQoUoAL2c4eovoaL",
  "key17": "5f4e5kKxMhERMS8VKY4ksMwPZGNyzw4HDrSbE87abiHkQPVudt9yE26tVJDMDpAccL9GnsFe6y5nuXviYTdgL3uj",
  "key18": "2SZbntGUTmqBJjm1zVBNp8q7s8HqauwF45oqTgwf6htj51GWUgK1jY3er9CoBAkpscBbXhHfsWBQdaG1VtC2ruKb",
  "key19": "5tK6GRF8s7jfcA9VaLK48nZYHE2Ue3tCHHhH9GogXW3Q9ve8i8jdtq9FvCJhdXqeSAS91cxWXjkq4KFccbBSFdEh",
  "key20": "3fJqB81QrYyQfAeWrTBtCQytyNXfUrqCEEH3SeMrhayowiUB6VJh3h4iokHPdpCha27MzsdZitJDVWCRpcAKaMoj",
  "key21": "iPKEU3iZMxtB1968uNx8ob8Xg6d7yugpmNY49uBYNnfQEv6XcVxmdCZUMuevFRfMVYvR52TcZZXLZL5fTFjL2h9",
  "key22": "PnSyNbs5xb8VDXuXLqjbL9BKo6cKx6cHr7pYXVr1FbkKz2h5dGS8ESzgLmDWnzusLk8NghRqeaeTwLxznU2hjb2",
  "key23": "DdjAfKyER1FVQiqF9dSSFw88pzn2kZy289bX1UQCtqCZucDDMp2BKsZ3M1iZ9p4RLePxgCJVvssT7UVQuY2Gb2N",
  "key24": "8PbfdPFL3T41avVdAQzEWz3PMVUZ3jWsgr6Jqsrow3RwKTA1rxxBJrXEgXo678KNxz2ukmKyv1VzrRFQ1K3p4Vc",
  "key25": "XBDwDN7gq8WbTAnq2ug96sVP68JuLTTXZsXR7VXHsrusaauYSVWzDVdeBC3Cdqa7LtBma8zD58PJVPiQUYSMqSo",
  "key26": "4iQmuP8JCRbxCDo2VNEXQm2nE7TmKNYvjB1LAStFDkTG8vuMTj7j9AmHJW2zus9EZR1skbsuWGE8t8Nz14RfjqY5",
  "key27": "2m3ZM8ocZPbgH9sxVMReZBFhhUTMxnquqee98KC2cu1DBVvyXSzFdwYhKKuL47wTfrpXG5egnWGnyBDq8ZFzmqLC",
  "key28": "3An9wMhaNJX5VUr75dfjSzqGgjKnMWz7izJY3niiqn9CvyEXfqr8Bnf3fb7mhuUb5vDjFnRFfsdSeDQ7HA9KfGQX",
  "key29": "5R3Daw46ZSezYhXb81LHCF8UjGsbGrmD9ViGQTU4MQ85it72Gqz6cUHdovUzZEBPnekBrVAn8VizQQuPQSc7tSdV",
  "key30": "5NCSz46NxWvszQcLnLanMrN76DC61GRedCdcybwHncmErLNDfQAD138y5J1AJgScVz2se9MC96w19ya1wPFzJwgH",
  "key31": "s2ozMTbd2Rh4RsFJuTi8dZJ5LGQ1tHder5jM1oP4HouDvSGLPRmU5Y4cFopJVdEybDc2ELWcndTq4VMei67WtQD",
  "key32": "3Ri97qxQaerXfzoLAMYZuBggdsQmYYELi8dRy7KaaRx9avjWWUatNFFBDwnbCG17k4ZXbLfCKYc8A3d7gHnLroou",
  "key33": "4zUrN78FKS2nctFXw4A8tmHjMfwoPLvT1CFnA3qX2xGtWmUqnEuiMHXrN2hqnkiUtN3cp4Y7qRiqYLsYAe19U1tN",
  "key34": "3zqs9tEgWeFRc2z7bf3BBiU7sgnbWMZGuPSCDXt8C2kv9ff1sztHZKeoPHU48HAFuygK7u88ZgaMHkoACexvaMXZ",
  "key35": "3if8tq8FwkhhByary8YqXF5u6rV4vzrZHR1mJMwMMgfhUJvFsnR3nWYHqBVp5ecTyDmpPgj4PBNBSwNR6ZnUXcXD",
  "key36": "4hreeV2qpAmG9iqv5KPxhtq5vjvVN5dWtcmfZAH1nbgZaVodHLpdxaX2BJKqYkzWeUwNh5AfPw3nHsvWNQ3SRuY2",
  "key37": "LCMzxqtTuaCCPUqHbTX59wRFM9k1D8EqLoBqjMhE5FHb46wex81T9n4hr6Y9abrdHB5Wv2ZvH1WzEV772GdRc5J",
  "key38": "49EKiJwgV3djC6dTnwAt5Ba49dks6sX1vLCyJzgDhXVKc6tVFWdh3eebj8d8BjDQ4RNqBzhpsp8hqyhxiPPheUK3",
  "key39": "4gpoZAYXEbHeMZ8zCfGbGioYu5waKS2xPip4QdkBasd8uoPZnWYiVf5tCUYyVUJZP2gHXCBtZbHNFhY7qzgUdAp7",
  "key40": "4bU6o6rjbHLiPPLyK3meE62cKTNCcgdSkNrfCwcoxFzDB4oyjWtXhjZp1TpWk7VyrP9rchiua2bfM1A7YuXBNd3q",
  "key41": "5Q8QtgHk4AwRJizeXw8wEdZ8yyWraZnauysp9GMaB4d9Y9CVEMELvM7QkYCAFWQ3KbhsGB3FN3QoCrXhnoFxBPP2"
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
