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
    "51FawijXmi3Je44PTU76597qumk7v9zxN1Lf1MZKkMdqmqQRhk6M8BgBuSesZThoHQpbr6gB9Fx5uY3KaQy19MBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uoFJTBKEWYEaUdPHRfSPGR7KEqp4qUyE7cf91bz52hBHipmyZpPVAvwviA9zLzdpkb472y36Yy5Qv5ukfLoCcZP",
  "key1": "2nUKL7Qdj5m5NNKzh6ZL9YvctHUqUMRNwDRLc9zuEvCq8PdLENr3AFh6ypC54eXvuaW9F3T5XF5vD3812EaSB1nr",
  "key2": "419DsJnK3Pp92cqPfF6fXFgjqt4LzkDT5zputGDLds5yTv51WimYPukbPEr6zgD6RiU7bmg4TA5nf7brRSK6Zgky",
  "key3": "4ym8QiXdXyXJXefTgb2etMriVo8pzytuXHbp4qfwRyBSSdpkz11aEeYMaYk1cPLjdSfmZwaXgN1bVJrjBDfJZyvD",
  "key4": "2WBUHLEPyX5LDNXd8pNVsDUZzuyDCZ5v6Pnn3XU16SwrX4izZFqna6fgMEXs5EbwWaMWzaafTbADAHk5hWphCDzA",
  "key5": "NE2VDQdcGY7vUy579kFPsQqFcFyvCGmPYW7VKHFSQ7rwv7tFupnptqBnr2THXNGiL2PFAxCWPVVHPt5BzSV5LGa",
  "key6": "5xbCCQJVS9SGmzPSn5nRzwgmtr7Pa3a16d6SeM4xQszLSbPAXxQByC3bM8qNfTJ47mQr4QM4LekvCEAovw4zqJaw",
  "key7": "Y4CAftp1vqJJKkzNBn7wsEHzsLXE2CYe8xd9XFFJN4wZLUsFEWry2gdoeaf7eZxxwR3hxudpdeoxnPMueUCKjrM",
  "key8": "4A8Vm4wkZ6uxMxHQkKQd5RsMsdSREVgrqCmjacnMQQpgmRp2z2T82WrhbAZjS3R2xosw8cZZPUnz3FyH5z9CM7cN",
  "key9": "3aZTkyj2f3DhF11HAuHEoqCTHvnAunNn6or9u65iaT3TY62rF7Jty9zE3shBbo3H7uSLFK8NsRp5xbYd6qcpfNAD",
  "key10": "3QyzYU7CEc24LNXSR7dUsnCDPQuqJfFtxETCVoiCgdHChNcZbfEy3FzbyuSyzw1xHvpCPDBsHkjQ3EQHnWZY4z9h",
  "key11": "2TuSKqQDYDLTBCPk4gG9QMQ7ARogRz6HuSufZzSFfWAozJK7KZ6jLAq147nqmrT8UmmrLYLSFRThWKkT5wntHxyk",
  "key12": "2pdshwg64hRgKpmGxnfm1dCCarcTjmZy8r7hyowFyYG2ZVSKVtDRcYDxHqT5u8ChzX6Kcj9YAyNXJsWM4Jqfmiea",
  "key13": "4U5cvejHvoFgRixCAD7pUnYFAKrtQSGmZaF9SyEe9xw6YHbpzUCAxfWZykvDC5auRnxVwgfmaiUJRCJpTa6fWKN4",
  "key14": "39vFxESmxWo22unWh7vgGPt3PcQHugL9N9ye9jL5NTAzjCkGaZiqKcnwaCJ6sSybZE4AukA9cEf3xdi9X96rRbps",
  "key15": "bD5R1GGQZwHocpg3oZZqGescbewiQ9qaixSw8L5M2HYB6UZfDLVWMU49GhjBn2hqq2pYwj3REA2U1JxE2W5sgEs",
  "key16": "41eoFfyBsSyJkE1tSx2ULWE5FZJgiUz3ppfot21pCZyHbLh23Axw5GSMYhKur2Z5CFfBjoT7t32ZxM1XunNNJNe1",
  "key17": "2gf5P7VJf8PRn89pYM5w9jgUnuXyoos9zF6kUsLEFVFPfxFJHnHHcUoTXi1JwbUnq5inXWCLzuJnsyLJjjDfaRJ8",
  "key18": "Vpnar6fTbqE1QmGP3z9i7Zt3RRPT116buuBaJmHKaeF9FpHZgND87VmsuCAwsFjpVRf2how3P6zXsPnjXUvbkco",
  "key19": "4SEkBX45vjZDy74e1xfJmo675LS5AFMbDVx3iN5sdUHC2UQjscLpzyJaKg6btx9Bh1XsWc6yruXs4vCTjFcoCa1n",
  "key20": "3Sj3YGRL7AdfW9m5dpGdWVc9n27xWtGaEiwxk6jMNMMVkJYvAMnVjvjzdqkepTWXuU4HB6LHF8eFbygcnRXH9d1m",
  "key21": "AU7ULyYHQQyjJL3RqFk3h6ytnVNrGfzgrZvud4CnXah9PYdnRBE9YM5ANsq5d1vnbQARUCvYEbkzVZTBBbTPFNy",
  "key22": "2nEAaKkMxLqaxUyFuYcEK4R9iT5gYJhZSr6qtB53jHAZ8s4RXPxARJnx8TtpjqqoxivDr3KsbcifmVL6bkPcJPUD",
  "key23": "3BqKssXRRrEAJJfwpvDV6Uj4vzGVggQ6JL4fHqb83dnV1yWixW9DAoDJRB25Ban7Gp2WxVqB8H3uAzMjEzARbhkb",
  "key24": "4ii9TytBKw7UAzhfn4FLETAGpJV3vUSA1uBhR5CpEmS7w8u81mLSacQdNxF5kBjD5zYtJtH5HXFQYF8E9Ut3KVdg",
  "key25": "2BXss2LMM36QH1XQqGZF7kt8X4SN8K4eVxqMAXpGBY9oHBras7cKk9FZ2sEYHqEmcQ8siL24k8VjE35ojaocjupQ",
  "key26": "51X6BWKrLk7nHkTREcHJ7hZebpY73BB2QKBUL7fdD31nCKRxqTxTqLmYoVT8Qgrhtzjh3wGYvvsPvpZUHMJ3m3nd",
  "key27": "582CKzKf7LcPYVzmNE5fp95R2JvozAAeyXE5FhEgZumKW7pkhmDKejDs9Xrh7ixQ7JyeQEVxKTfgBFDkiMovJVK4",
  "key28": "26ynw8S7SkQgxtrXJifCR54QUQQtsjPQyTbX1Ma8bgmzUasdb3WPTy7uCnhQwMVNwLEz4hY5DH6SMCAcuv6Vqh4Y",
  "key29": "3v8uKwpKYMyuiAKPU6RsgkRY3p576VtMNYkDRhEAXgMtBFDPfekGhr7gmPp885D9REXa4nqWksStLQnWpjYYfFre",
  "key30": "4w8XRqSPPhY6tTCrnVqdeEstCKGwwwvUsHPhmwPMpYWNwpEkCz5kjNN26o6e89nHQ6YGvP9mK9rFcoJWeUXNiVcu",
  "key31": "2XATier3Z2wzstg3nGdDQchRwZbaGMgfnMXFCXqEfNDz2ork7HE1C7uWR9djHTi9JgU4wjxW2okScbmG8DZvtQL2",
  "key32": "3ufHaGAJonE4CSG8edNYCKSesoUG3hiNLDQqTracAe9WXrFzwxz2Y3GmDLBhHbzEpr8jRMojmdztJGT2j1somuqv",
  "key33": "2NwynPSTCwFs43MZsLPqacaajTdJ6yNkdkGQ8jAz8uDzJR6tJjjP1UTX3Ur2N8ivMj6WB5Jai8hf9veXsEqtAkov",
  "key34": "55mNW2Vs9mn56Pvrhth55YJDyCqicqosTi1GcezE6XqXdJRA1qVtjdJZ7YMGDmgAs1nJauGapaeeHx8xDmodk3iZ",
  "key35": "296Nr1cN9jJQUMLCaaNqnw8RZDswnrdqY6f2ovJXpsUq4cdrU15VqbEZassb7XdV2JWbCcZSk88bLRnp6W6FTjq3",
  "key36": "33paGRxDUftAG6n6ox5CADvSrPqTyNcBjnDoyA1smS2XsQFhdPxMjkaHEUfbY2vR4yq94WrMseP9eAmQtu1QqKR9",
  "key37": "4UQMjqp8dyHTQf1zptdEQ84AEQQNdcDrN9bs11fbquJT6SE9NzmQr8u876xjqZGd7Kq9FkrbFhiwbkL7ao8jumC3",
  "key38": "61ZoinaUcffQY72C92gCaXXrRGnodiguircDbjA2hZTpxzoKN6QZw2SgXVuUN84xj9ceUYNVe8kNbRWraHs3UoFc",
  "key39": "28FLs8sGUD8wcwPoqro7wjn8emeQuznH3mcPgcCEJtxwaUZxzq2VpTnzQUXk7yEgMMa4ZbNvbHQ1DZtR9sPdihiB",
  "key40": "2Xs9uLdhYjhri2QmRB1sRDsxE4kVp1mFXmnehvKnr1hFpCaojQH3sjcYo1DmsjgchsW4EGigZX8pdE6c6mUNXBPP",
  "key41": "4xGx2ug2qFqbjFAifXat3JDmXBuaDRVmpM5hENFWUEVg5ijjLJv6DVubpR1CaBAi2JQ8AQLfdDNakSPUkwdhdmNu",
  "key42": "3u2pgUKfKoY4TQwYsHApe5KBQCLMT95KwwxKqCKgjat9q7jWCjgsT568mtLFMb4pdGk4RnpNyA9nzgUQuBVBK9LP",
  "key43": "251czGipkJuTBPx3Buv2a3gYQw3SaZhrZJCCYVMSp43mz5w4MN3TaSfHeNGYuPJawNVAG5o6zCvoP7FPpE9YdsFe",
  "key44": "4aXhtHNBk9xBwSm7w9znbmf95uBqp5zRufs9hWgmQYLLnSrBLEjhhC1EPF1C8NgtwUMEu3611FijZ3ZJkm7tjP5f",
  "key45": "cmS16wUZjLu89MUfux1jojVqHPhrVPJRp8uvrCmMUFWErM2Mmt43vkPgQRbMqnGExYe7Vs11KwgvzJEw4yJqZ5P",
  "key46": "3VgQheq8ED8f1bE8rXNjbF5Mnn6DtwhqhCJvXsUPTvWXuitL9ixezaCZEjmCLmbWiHcq82TvFjLXio9hdoMehZhq"
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
