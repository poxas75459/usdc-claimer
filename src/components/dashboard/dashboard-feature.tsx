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
    "SEetc3X6SfgKit1HKX3gKev7F8aMdDKYBSt3VrwvqvEtPid6XyrPTTX23fxsgef6Drd3koebWnANEb8JDwu8ibL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Myv1ffSB6kBVumbUdbetNsxMmcVh3KarnQkVDbr4Q7RgFryFUnoNmkupBuQi23A7ZEqTHo27DrmoXCcjavoB5e",
  "key1": "4HQR2P2nGVHWK3eq5asHBh9axXXbFGnwsMggX75FnDqnNDyt4fcGGuY961v3cUabPwjdqrSnr79q3DbKCVd8cVte",
  "key2": "3pgYBNuyYYE41AcpmpHcJusz9hjxsh4qoTxHS3FAgB62AUP8QDWGn9SddML8XdYGv5qMZvqNrE2vgZtQ6eapcjKq",
  "key3": "38e9rJgJLmhXum7aEUJM8ZqibZVcCwwDopoUf3zsLVP27pTcRAE3zuFkqxTriRgDi4Bk7eSjhoVYcQJ63Wo82bsX",
  "key4": "3SpMpQx9ghT9WcwDobUHcjkUNssFmDqnqqzL2NgdwsbYymTyqDCp5qWYxVtAXSWJhtqNRQK52yxkCMZVHMuGErKg",
  "key5": "2H6f2wTyHBSvsi3uWUAfGCGP2xnXLdfBxVZAzm5bHhhdMVVmXJnhR3iRWFNvGe1wf9f1oMrZ8w5GgLF9YrJAwfri",
  "key6": "4KbTHQ6DrBYNXKoxQ1ayhfWL1xR64XR3Fg6bLNQ63NMTjuDA3CGWdfL93Rzh3gPYzbopisppymj19ocUSU2k4xDt",
  "key7": "5aYdvUBD2ip5LCC1zacbQ9diuViMPHgpKzxH3rKXuZXWLj8RGQYxFyAUV6UxNyJspcrPhvL4MNMDt6GxeJC97HSE",
  "key8": "3dvG5rQYYPAZajtvAE8DPUAmNvHjWWchDb2B6NoUC6ugEjN44nHHtfgpd6Ret8D3JTvPJ97xrk8SiogYVH9vG4jZ",
  "key9": "5JKBZpVUzpzXjsj7dorQ8N9pCXXNzyraMAa4jYcFc6oefazkEn64cAjkfe1uaiFHcbSzaXrGS7sRETPXrzaJazWt",
  "key10": "2v2hvpFRNVvRGBbFCbtMjUpnjDGQjB9VZ5EJCtp3evH8tZ2GzyQ2qHSS1ctNwEcoBdKCt24vyYyJmfoTjpXfHSk7",
  "key11": "3TVWSmWwezVzJ3ccmzttQdawUXdbkMTDaL5zrGc7jtkJ51MxLmRYy21htB7KuX6zV8iP3P2njC7WBwdeaKHbiiXB",
  "key12": "8ZJvBUeu9rjgXsEHiMYVQQGg1VvwNJ7LvQY5qUY6Zwq91Z9jSgzRZXedf5HWrzUp2oJQ8Wk6YFEtjxCAf5cX9Ly",
  "key13": "2Uw23EFABFKWhs7jLf5Sq45doW1w4jRq5kiLRD34QdFUVS9kRfh2w7TfdRp1BiLjtgmHWdRSaoQr7XN7YddCjwJe",
  "key14": "4MUTXwwq7YAwys1v8c8K2dKHyhL95tnvPrWFT5Q4jQh2eahjvz4WMhVWWKCh7cdXWZZNmEbgoYTcADsyXLaWKESr",
  "key15": "z6QuoyMf5HCPhnqvj4Pg5bsn3LddEkUfMAuVRC3S1xiaqNeQeTuXtZVCTuJVMVLqddwNU9hMzYoe38on5NcHPLG",
  "key16": "3Co3NrNucsuBHPjsBMRxvkR7rsyar25sZsK115wPbbYpz6t8JKK9tHWkyhgULb8zoW2PYtdaa11GWbXm4h7BPXJP",
  "key17": "4Rfcw9Fv7EWr91vUibRAZHtMxFKP9aNTWeG999wgFN3LQEof3Kf4svbeo2Z3tG7qUrHriHuYHfHEbcEKDg7HvZG2",
  "key18": "5rq3ww6zRkYcFrsKhipCrZzuKKFCvrARunLhpMJeFFQtRQj4v2FNeUidj2iJi8R85Gzqc2JMd4XgKMpQxw8aAAAD",
  "key19": "3pvoRL4JVA5wXt1nadVNwNFUqzSoenCkpFMg7a37D4we59TtjjSAANZZ4QXNTrQfTdjVWys9vVV2xmECyQjDs94M",
  "key20": "t3RTbGsahJRsaKsQzACYHCNfjHrKGdVbfy6ykh8y8BQe495fJamA2mS3JAW9XuCTtSuqfvdEENUht4vM41MYa5q",
  "key21": "EPPrpd5eMhQsQbr5iS3sy4jCp64yikUxg4cCD6RsMHuztW652RACakdCBcYsc7ioVGNXfzqne3SVztvka8zR9oA",
  "key22": "5jKCAMnUq7F4MF7kkuuwxsWwPomyg9a17e23uZsPPuJuoaKwRPvYjz7rPvcECY4B6G4GYmKHMXANmrAM83U44xZM",
  "key23": "4FCRK4woq25z6PoGEDWYD9RSAYuhQFV4e61WtsBTXznDLrjKUppHt7dUPJCdAV5CikmdgwLUqewisW3jro1kzP9i",
  "key24": "2gwPVeTmVwB4jwZeGmSnZk3VfPxbrvyYoq3mXvWwUr9wLZ1TVXqhR41rRmf3v7gfG17hy8itrNVHUpqfNNCFExvK",
  "key25": "4sRTdLXJUkdYErJXXtNJ3ZXi4xjsxtjwwe6bGULG3gxfSMQXJ8rcvCZ5wpn3RLu3uSLANdcgUfNzVobz1SQaCM5v",
  "key26": "23f399XLA96eGycvNgoxExcGTyoQJvCiYTVAfhg67nA62sH3hhdHN2i6RsN8HUVW97oBmqMGJh5TjGzwtdTyUu8w",
  "key27": "5LccPuPnB65f1yn6a7cmRakKHMUEsLo2ZBWTfJ1YWFdcynEoXu1dxvNRvjKrWBaQGxGAXvFNmTkgys9sj6eohdHP",
  "key28": "mVknc2DqVyQKSi4RuhHuvSiXGTBUZgrGshYZa5sVTHX3MKGDikQ3gEspgKzvwPMSSqdgEdsFL8e8b4DULN6oErg",
  "key29": "pWQhXCir967YuywwghN6ocDQuJ2B9G7Ns3TtzrTqnjGfu3q9xQfQpgnzBJupD5Rs5cTokEbzhSXSohgiFBLftas",
  "key30": "4RUHc8wKDwcAeWFFCg91Xz2qiZHEoPi97PJDuZkhNH85pWVs5MVsqBnAyRdw2g6BY5Bp2RWvVS6N6EKytue9qCWh",
  "key31": "4QsXNp6NTrgTwdvKk8jecssETCjCxKygeKF6eZdx7Krz964Aqv337bJVgMGeL3XEKDySeTkArTw17WZ8NJjstv1X",
  "key32": "65omLixPHNiVS3FaLN6D5J9eogtxgC2dcQRSVkEAgA6ZH6zYSXEqj1gQzGcRxAje6YgVupAxS71ciGW6hTAgu3W8",
  "key33": "2qokuVnZ77pT9oAyQ9MXxorBKAxu1zJUcSHkKefm8bbrhr13sxvn3j6WYnhCqayH8LJUPJzPkzxqqP1zZuDBGnZi",
  "key34": "5DV5gQ5pHkRbsk6Nm7KBoNkSkMBzGm3wnWuEiZr9Rd1xJ61ww9GMPRrSB1uUjZu1uJ1mHrJ31TqHwyFuTSFkNhCp",
  "key35": "3bNSUw5vdV3vg1cNJu9PWPei7mBSy2HKfhs6N9y6rpTfUd8W19fqCZS3AK8XbWUjFTXAnb54HWVMzcYrntDbPFMM",
  "key36": "5wpeHSkRW8Qs4BUYpnU3FWji8KtdvG16kGxRSeWJrAHf4mhmMcsm4DevDn6UpbfAaeHQyRbfHxEr4ND69N85bxbY",
  "key37": "3ca8fwREdqgLHDqc9eDut25nr5MbrB93rFrLpWbSgvupqgSgNo8ZCuvg73kzR664uXd1bJsiJVPiNsFkEdX4mW8C",
  "key38": "4U5WXcp3xnm3HaaXsr7oYZyjAU2HWqSTFUmzdc11kEUu4jPSGnWDHJEq4oGG7J8dXemN3ZBYuU8nYk1ed5Ns2BAH",
  "key39": "4DjAkRAgRyxgV9vXpsTWoktJLEfPQWoKGFNU1GFL2yx4MQPUk6Ega4emyKxBjTXmUfjmPRKUjL98YN72WtBxNHKf",
  "key40": "4UPHV9Jpv5S7G5RzoP4aFA9gNKHxDvRgLGnuLWyvEBEMonLdUPT6gaEZunzMDxb1JHYMLoqQjTfVWokvHhvKvZuP",
  "key41": "51arSeMDrP5vFPJoZQPN8w8a1wngLhWiLYRArafdRorMVeGFWmb3BezQ2NFzXCaG1yvT2cUPCgnuWrhLbujEtAF",
  "key42": "2NKYcxhBni5eSrZbdE9yJehQhZBWP1QGuotd8yLJMrqAfmwy1q7NwZdA6ztbLm8QEe7pt82xQyhFaJ8DPazuasVu",
  "key43": "5t7U2Ez3cAGDpkuhCQNAdVuKYzfeA6A79Ji5uT7tuC4QxwWLeydfVbebTytntcKtrdBP4rACFjRgET17TUPT3o2N",
  "key44": "4tMes6CgsXbuV5XiGPPukXAWE8zGFNwLS9r9SF2jVcvr6iC9rtRuikK4xjkHxsUhTN8tUZWHjUiqtTjwELoQ32au"
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
