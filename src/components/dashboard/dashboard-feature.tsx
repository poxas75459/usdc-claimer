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
    "3mLyWjQKk9JVXzrrxJJKw3jQ6FEN4Y5C71rnbCr1xsofBnjNcq5GvBHF43z1TSGn8D68CtQzn42vN6BgC5hssiSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YbNVuxXh19BDFsFteoMwdgHPaDgxkER13GCV1vE45XAUkZR65T5aFEowhmaCz4kyTHjMQKD1toeFiMphhLxmZNv",
  "key1": "5Tidy4BAFTwk2S5tZhy7Z6xXqYw8sfRJQr51i1ShkYtWSUzsD7Fety4bamx3XA25jSi5b7RaxnmzA1ibLtdZAaJn",
  "key2": "61rjPCAT74UJLRyzefqSLsxtWCcioy1wDk9DuVZwWAPKWZcJSypTHGusqBWrKYhprcTzThi6P5v3UJArYFio62We",
  "key3": "nzXZ4uZe1539ZoupK1DkDh1ArCGKZM7tB57hS87CvYc67BxUE3jYv4BX7ki1vP48eHCUuxKCXu9uw7Qcs83Dg5D",
  "key4": "3bofpP8R4p3nRcPRbiqY3vwQzKMevNAC232KModwuPsxgrPoijwYuhiZ9PBYrQ9KGhycpy1oA8dBcEy3y85tLzF3",
  "key5": "48xrPT5vkQYXTJXtfm2knyzw2jm3tfRCBnyQ8sSXm8tuczqxe7cPvRzGfWBEGEweEbfigLHUwU5vGwksa8si1mD",
  "key6": "4qR3TmTDZA8f1iD1YqSJ4Cwx8rSzPGvhXTipkkJSi1Gbzg9HRkaCJVYraMAojUd5MvY7qTe8yprNikddjFcmYJb3",
  "key7": "61doueK9ddH27dq5hvgY3p1Sh9Wustkmy7fC1zbykC6fEzPpMtfRMp2jmHf7WArHsreuoAdwkNVj6hRhpB2jqVtG",
  "key8": "2uRNb9p9gCKatZcsSaUFpMvbvAUXXV7tF5qVXjpRaVFsPQ9xP3PVZaPeMup2TiLgUSh8hNDpHTqrGCKYsAHRQsVt",
  "key9": "42E199i3G3C4iuLFpV5KohyDJ7zcZCVotkQNEvsKpEJU4Y68GmwGTmsnL72H9N5FcznPMDW628JnB9rtHmzVGtQp",
  "key10": "3wxz31oxjKecXwPytK8S7xRW1nxRke6d24xUd7B5FaKkKbqXu6CiG788beVoYnBn6dyTJmNg62BDkZjYgKvfY1Z7",
  "key11": "3wa9s5coiQEJHwAuxjCYjg7r1Jbk1njYwM7shWSryBeaTJx55ptifrkzxZZH34LPGnxQs1zggeVnWBWZRhKnrp55",
  "key12": "3iN1QpnTW6PJkYCiHBLewpQUttDzeHqzKTtj77fo1HCu263CBM7CfqmTc1ZuWrcUVZL4p8Wc76wmX9AHddmoSaGD",
  "key13": "4e2M4qe72hQzeYKdVbTw4Dins3FMAGD3xijinzs2tsfErsiPVCimWGVghJ9UySPzYieh11h96NERUhdzKS4yFuTn",
  "key14": "2iZEcjscgTtyBxGuyamVoKGqMzPjwAobqAcfarsr8UFv4EdhtAYFwd5Xc2uE3cZTjZQtMJPBVgooWAunn1ZSCUoq",
  "key15": "2wrddyV5C1n1cxgESTBxMKbaMpBJHhrKJ7ipJDLhQ7yD9MpE18EswsLmfTKfhoyySDg9dcKKsWy4B9H9gi1fB78J",
  "key16": "4KraDwxSQR5BFykDKXdDThwkE59i1LSmFoWdirxJQrGVFVHafdfBVuNzCCUVc2wvFcbQtAorzHgNhj2RapTvz2NU",
  "key17": "2HCXzpjkN5LevJyYCnDT9SWzQHzyTY9DzYBxTnFgdTvbHH99QHe7d7QknWjfy6iP21NcVCu6aYNHmdGmPfkhuYiw",
  "key18": "2bFfHgTjpGPYYbJPhFQ5jQJiSU7fKT23dtpbPsR7eVEnPy9zruPYWAVHfaSdw3wK8hbZdGY3NCUPku2Htpjm1MsR",
  "key19": "23da4gX8Ey31P8KFjeyX4f3jRfj6iooEUtXsVWGfsUcVsbn2ohSzk3ERZwQ5aLHWRFV7LMcPk3D3saejjUvJr7M7",
  "key20": "3RZaWSyf1oChaaR8e7ddT9f6HpkWHSLEV2KPrywsnqqBSSdashrcbuuSfvRxj5fvHz8MmNtSRv2oE8tqu5etk9H",
  "key21": "4gbNtREJ1fe8hgfAtAEeTF2jMUtJuGYkzVASdaxKxbVPHK1T6VCD9AihKyiqcgGMPwjo41CbyB5MtxfZvZ4i5cLQ",
  "key22": "3Gw3LkBjHx2RoFCSEttF1GCdjqMFsrnsMAcS4snuiKrUuDA6YmUjd9r6BqNhdSBzYcAdSwbUAMuh3LdsCpse3b1k",
  "key23": "5AKUqVQJJr79jQqE5UbZoLwgBx2mwC9i1HPpcpewfDJS9TX152nRxdAQnKQEeqo1dBMk8Tg4JZApwTacdaT7drcU",
  "key24": "5dbDcydD9AxTZpzWvummGMz87jsmBLcpHeqhG7R1uHugjzCkTrgcfasYPm2YB6jx7Ptppw5VeMJ4bbmi1MqvPp57",
  "key25": "5KjtZMEdgTZe5tre61tT1AuMcjSRR39UXgekvY4RyY3SmACSgLrNdV6HLqUjqhmcbo7oQUwF1uc73Sz6ZR4so9At",
  "key26": "5ZFKGs11BVC5wNsu21RbYFkWDABUtbYpiS72nKE8TPDhb9tyRxS2aYCbt8XZDD6wMKRuue7PtEnr2nzKd3xFx4St",
  "key27": "4RAffjxyTphSK5Q5XPHGgB4cfEfyXmfb68s9cEa8nLuomCznBscE8PeqiJnLaF9nj4S2YNkRNG7n8adEpKjkHy12",
  "key28": "zg9qF8YavqLW54ZrKfM2RAvB41MQ1ei4SeJSaTVyDDmwKU5DZM21YX6MxG6JT3RRin8fS4XmqgSxnTorceioSxL",
  "key29": "5qJgWvQTXKcBWvtwcQnSyp5aS8fuvvFHwi7Ci1ZB7GMqjP862ZKSgSzzeuaswCSGHEGuFtqyk76shAzpNK19QKGq"
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
