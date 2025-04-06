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
    "2cwcLs4kLEr6Zaz7GDb2MotT6VN5prt1TtQHegZRx84oTWirytfmmGcSE4FLAoREZB8BoLp91Yv6WadfuEeF7RW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TedHuaH8EazwjH9WLwdmq2VDnsvubsijPLM27FFsnJSQ3j1yY72PPssPevmj9ftBbaU7BfaJWRNPiNjDZULZ6mc",
  "key1": "4N5WSjeLKpXSwzTDyPzP7h455MmeQ5XdFMHSqbnkurpv95f6MjVZ6vVur5xfjem8XmsZfonh7BGhZAvjVLnH7mZx",
  "key2": "3qBbGWxpKmdMay9dqPKxW11qXKE9PkerhvABsbkxZtjHMpDrffyv38pDVDvmZRJmLVwhzGCcQn1FM8EcjrrDN9w7",
  "key3": "2TaY5vprJ5wdYd1z2FT6qppew5vFbwYdgYoHeapzCR9ukb67mTwqk57ENHiCczYkutt16LZ9AjWWHjkp39tyyCRq",
  "key4": "5768Ki9xfaiQ8ProWkfSHEbixhsVooqPAyhVzdqKLM1h3ydzQwTXMAfE2fniM2J4EvNcWU61BWqTDZMhL4RyViEX",
  "key5": "5Ajteh359j1Wr829wyiMwCDVJdQoFBTxxe6BjZYAR3cXyyyfq6Xh1vfUPCPxXafr9Wjyn8xnDpDs74jjqP2s7uwo",
  "key6": "5nb7zgV9QTei11NxpJzoYe4aVRw9gaXd2VeBVFkSpf7CHmtuRbvHTQk8AtBbKTDRcQC2TwHosFWSp3yCFF7ZirAG",
  "key7": "fcYreW5jwHcdSRhj2pv5nvqPRCSsJMPyyPTSr7gbzD9cjQnDDpASUWrkQePuegQ67P7y7QKtyvEK76Hu2Ha64xz",
  "key8": "2u7cJ71sqVMudkM25qi7ezTNdarRxbP33Gm85XZGsPuSvY971q3UkQ96ZmHqNupWpDNcFVZej1N3sDbFnLFTs6DH",
  "key9": "b1Sf37YvwqqAwWu63Cv4SfaaqEC5ag5dUwa72j693pYqYTsgtabiGkvykTxMGVvSfLLGM1dRwLtPQLA9ax1W1Sd",
  "key10": "2njDz2wLLmMmdWLDFf7gLBzgsoUq4hQ1XmGTdeAMTzbRe6p9mpZKthzG9ciZRTKq9C8yYdxrFs7S5oQckJJncNbM",
  "key11": "5i53WJh79XHANysFWZDhHDv95CuGX4yhTwdCFTtDdtvDEMoRG3TRUCMh2Fj8E4b4tUhGvUmDgQnH44u7h7WxTQW5",
  "key12": "4TuvZmBVGW1yH98nK3n5Wkzq3spU4s2kqx53mwQx8ByYubrQAFCEyFcRdykcZ95PYPh3BBkwWGxSAHvkxqhBKnDE",
  "key13": "uDZSmTxUTSUdvA3yJ5w6n6XWGhW3GgEXzZcSEVBcvk7AsPAKB6AjuAyUM7jwhazR3exnGUN6mVqvwQ2g6Hn4E8k",
  "key14": "4mxrwLntqJEmvqVUvon8c4NbyjC3CMLNLLvTYiAzvgfbbszNoTqbMfPyQyg14wfUTAWzMNWjm1B2KcvBKDnLJxXP",
  "key15": "36htty34qiGsKWSvHCzvJ18LXbyodKw74rxhs3ETdGpZKobZBBujCf7gFQHTafp7ENhUm6S3Po85cQG2kEesjby6",
  "key16": "3v8ZkLziKLcyixvBdBHA26oMuVgfkSgn6CQLbHz9Sw8Yrnx5uKC35izdXviZi3Qhki3VS9zbk2AhakqAocm5955J",
  "key17": "3NgMLFmiDnmRzAV9PTXt6ZaeqHVXvuwzntNghGB9yFZ5THRKm3wPDDtL5wUNm9wfJ63G2qzHRaWYDncEzKMGhKcT",
  "key18": "63SSrPeY4hc5Qq32EgvSC42wajiphZb9b7BnkYs3mgbngtMvqX6TQoWWXAHbSfhwzYDgW2pUHChkkL2nNsBeuTdm",
  "key19": "ddRVqsy41WefC1d4Fdjr7ypnK1MkQq4m4rvzvENPy4XAVupedoEN5WK8KvgRUfMhsmHYjBosxNMji4pni5wcoGU",
  "key20": "2r9osoxMEf8Npw5vDStgLBSqC5XJQo2epjw7UA3Qde9DhNFBZ1b2S6GxgzaGgTn8PAq94nEH5vbd5gZJfrFp7FTq",
  "key21": "3cPCuwFzxtTzfYbq7ZEFCbUpsxcFav9q34BYsd8mbX8qqaDUdMcVUsChEz1tbdrS2Ebp3LpYtgUKY5QspmZPn8yJ",
  "key22": "3B3mCHjdKzoDjkWucvgi2p48rRDCExnMG7xDhtkAVRQGA3mxbPfYyqA742cjEc1Q6EsmyDgJrHD4hc4uw2hjtJYJ",
  "key23": "5h8Kw2FVL6yagphQFJ8sGTLazvUoCRAtRojKH89zHVaKxfn5YrKyvbYWNYMQ6iamC7Xhnebcxpg1BGrRmqpJ7Kwy",
  "key24": "23b6s8Va389EpGCokGjNxF6BA7hZgpS4SsvV7jQLJ9b6pw8j4fJ8UYV1nVsdKie9QZ4gNMY918HTyw9tnfm1e5FR",
  "key25": "2zYYhqu5WqTdDGsRsv7BFADHqY7MEom1NXVh5we8rp7rzAo1Hho9uj5mivaDosLVWkP1j1YnSD2XvFtHxqaa8an1",
  "key26": "J2PnrXndGZMyjcUgvDvSbWingq9Z7yUL1bowd9rcXXaLwfUdgz2mQWcAN3hLMed32rD6i2oPFaZ8E8ETgJtxe8M",
  "key27": "2xd8AXXcbXdfbP2DfDB6bn5C84gELGm2L3t5HWMpnnfRNUNFuBhDUznh4B6oV9ekksjJMjgZynoAsYVN6xCX25US",
  "key28": "vW2WM4q1gasjhtHxMmPtnP9c3wbs1up62mBWnTJ6t83Bn46Zwv1aQEWmRWqevitt8eMSiKrZCo9wb2xQFwgrC4D",
  "key29": "2ojZJd56E2GFmwzxJJD2aUSH3e6eC8J7kgCseqp5Vf4QYHak9kN8CjPkwPF9NtjEYLDYnLGEhy7peumkWDDFUqdn",
  "key30": "4CfKEziG96JyUjp3BFBNXEqnMqY57wDWxZrkeoZfVbgsjkVpdjWXbwPv9SvCsLBn4VrUVDQ6pDnT8wNjumt8nbks",
  "key31": "53rBJNHojsVQeLMWwt9zK53YLN1rijY1Z8cKGooPtsBofir3jJeXuWbUfCcTwc3EnDzB4JRd1c5JDYcXsziUwbnY",
  "key32": "2ijYzFXCa8KJTLCWqhgcd78Yhu6yatJxWmPa9BkoeEmZzdk9JxtWpRFqGpESc9vpbNhEgkf5LnrnFSJEej2F3RUt",
  "key33": "39yiLpsr6obDP1b3eoQuqqZAbM4xJadPXmWC8jZikFoTFHA2AamgznQaWPk6T3Uy9i2y7c9ArcEvjZ94Soxnpnve",
  "key34": "41wsCNb58TvuGXiVngAh4xVytt2NgP8TYN19V6WfA9XYtBK9UuJwKEt7kf2DyVnC9XhHo4hh58r1kN4js5T7fsPe",
  "key35": "5h1xntcw1BfRRhkoZqAFjHVMKq23McbkQrCyuykxn1G88YHjrJzSwYPNPCtHYcmguHCLFQZz7zRt159oWe9D4qj",
  "key36": "3FhNJNHU2nFad27VhdfckZcCuQ8xf3VVoQHom2yHNbgctDwVxfFozxKaebNvdWWZivdy1seiDqX5bqt3b27nbH6K",
  "key37": "QpaPhChaCp9pJnaQ5ecx5TXLJ6i5HoWdwxqAq9dp1jTVata1shXNMND5yKK4MTzsG5zh9dAc7qXge1kuJwBzsee",
  "key38": "5SqVzS15b6EmVdsk5fHAEY1razhCx2i4yLFq3EoBezMcRKqZepDETj1w8tqJ9Mz5ToyCfQ3jTYjgrd9q2V1zFi8Z",
  "key39": "365x3qRdfbYS6nWZ4K3Nga7JQSopSgmv72qQA7uZ3neypZRMwP3vWyotZYH6BvbpkMzNEiUVu3q2Xv87ci2DuPcR",
  "key40": "3BbLP1aymU3RA2bVva22nVGTREyRJfPcwjjp2yt5AsQuGQxwnA64KDwdYXdHqY8M2AJzz5jxg8yw66REwDWSEw1y",
  "key41": "f92ELa3K9bN6BNJNUGRhvB8xaBzEPh689MhWBYBDqAk9RxfdKzAPSYknU6pMEjmjmAKpfbcgQWzViNBckk1Kq5H",
  "key42": "3xbVWAQvCXoZ7dRh9pLahwWvQEGF15amvPM6Gu1oEXdqdgWu6a4eKNr8oZQdgG8PMJDZv1H5CoVBsETD9HAS39pk",
  "key43": "484Mp8rP8nj3kuULmbuThJcbCYMLZTUdK8xy9znnzXMC3cVVxCQ9iTh38LebCkjJi1tkdDNSuLK4sGgRzXzdMjh",
  "key44": "5gkJ35SYEmw3Myvv1mNRqMd2qbU1QLAzhY7eroGnpmrpk84M9MTrH7dpGyGgevn2ePhnKNHftQThmWHv4DRZm4Nv",
  "key45": "35Rm1YntLEk6MLZeXM6fXb3bSzKAhBbB5Jf7YRiejnqAbVL95CinKaV2Yr3pqsuXpVxkg1FPP3TSUyLSMU1PEwNe"
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
