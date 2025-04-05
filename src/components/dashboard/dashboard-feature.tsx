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
    "5jGSwFqiHsWhzykYVETntQBD3sLPxsF6grGUyEXKT8QmwC3h7x4U4TFTKE2PLcoY58QXkwwNUrdksbmEzx5xKzQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bCHBppAKcFe8ZBfsi92TZCNWjtPRVhEmnHfNyiJHF3hM2NoNWD5B5KcVTDpnNK5kKeS5c1x93eqFZV52NZwzMAs",
  "key1": "3W3VhiLF8AMk1uhb4GB9JqhbQAHnNfM8ZsPXuZzXpTy4LkvnJ3EqVotdipN9S5jKND8ye4muekGWbNHQwCFjsXHq",
  "key2": "T5Sf8VVNEfYo9vZzeLAsH6Siwj9JBu8pYxfUusb2Ms3GDd2TQsAmrDe5S8UVNEdU1nStBE68FWNMSWLWoRTeoZU",
  "key3": "66GpeX1EeLbfDm3wW2YbdnicjBEFNnPEMXGA99LYVrSzEihMCqWZYUjSykCCHk1wEV1ugXXvKKyo6ui8RPZ1F9Ri",
  "key4": "49GNFmgf7BLj3eLddfTpkYMiBPUkib9BeVDRVZCKaiiJfK57chdnJNZ9Vv1eyHBmzCjPdWTnsgV77U3WV53FNAZJ",
  "key5": "2vAjLdfxwq3FU95QH7FBpC2g9Uw2WWpZKowjnDBJXQ9tbf1fnRSy8h2eqG8j9vC1tX4UBugdL8eM1iMpZomNEmzo",
  "key6": "4pNwR9V7HY7cFHsNZ5HqZXyW9XzPpcFCRgJcWxE8AEiNCT3suoYQeDFoYD7J5F1mn9KGfXfySduCrfWD3fcgqZDT",
  "key7": "4K4tiQKh91KT4PnDWiBUyHsivv2YEFm4EYfs1HAUCGLkqupoo4K2dF2M8oxYpVg2oL8Ze3z8dAew1Cf5EN7GjH6P",
  "key8": "2PCYCwjhALRuwK9W5nmy5NaY6f42sodcCXfrxuFvapUQyTNfyUZuv7X17z9ExaAcPHriAqjg1Mf3WBy4i4BuXPmx",
  "key9": "5gRJJw3hEDEPsvnXv9XgDCeuM3hscVDJZ24NvtSXQn2jQWvsP8LTGumEeD1AfG2JFQCLGE7Y1bX76CJfEzvYKtoo",
  "key10": "4zjspCrMpjHsui1ZStDWtSKYxonkDJc8AwG8jX4FeD5ZL8ysaVnjhB4LCVXScJW6L3nnKBJsEtYZJXi8dPY5NrZs",
  "key11": "5egEp8MukZCahAdbCTjgJAjXydFYGArMcZuC89Ve4zkRev583xZ8pZ1R15amANP7vU7qFBbtRSaYD99VFNCWeMCP",
  "key12": "vSCXr44QweMSDKx2ftPreLjUVuJFu9abCYPzPzGz8HgTM5H55kbyaJmZbdCv2Hisrb6bVtBf3Gzc6E2Qih9uQ9T",
  "key13": "3o8VwyVGMnUQ7pDHQkSYFMARn9wjpHRgvP3KRicsyATtbB8aaftg2ABj5B6PViJbroZB16JZEa7uYBkhzsBExsGg",
  "key14": "4umhEkWTB7Ltth2eFb97iinoimEKoxJecYUZ1BJshVPWkqZNXUSneHcQozRr8NipbYxpgkdcKL2hWWCnwnqSsbva",
  "key15": "3ERaf9uA45mpSAJhqgkzWGFvPhi8tHy7e5mFJ7DY1imZ3bheAaxujyCEC2XApCEqZjBwoKUf5rJpNKmfPat1zwYN",
  "key16": "5VUKgcTGXVcmjiU5sM9GNH8HPPZNY6U5thjgRa6DFm7XSbgejnXYrkHFGZ2uo9BZaGKksWVK3f8FJ9AwMzaZSC8T",
  "key17": "2ZFMhTvQQh4RYwyGJh8KViyrNVmkQGa1pH4wWMGQ4SJ1EqxZW9ea8rjQmmhWGxYsN8yB6i85oeVcG439puKg1wDS",
  "key18": "4fBYNRCUmQXi9Ynz8HH522TQ2Xhng8rGVhQpJULmVVch93qFEh7HWYxdJgobrr9Avy9cXCupGjbn7VPXzrbeswaJ",
  "key19": "3cp9BoFr3tGstddgA3YkiRBa38L6wwz9vDK7CtRWi9df4RxX7QNWgFqJfkcFYZ8S9e2PqqNBmEDJX8TKKkkoMQC4",
  "key20": "2NqeQTFb99vaJciJtTBNoNXKLa7jSh7Txcn9mvD4hx74BLQB6v6A4i7j1gZQ3tVBXBYJ17fuWroJUGmaGi3RjU4q",
  "key21": "jq2c8n8HyY5FoVWMJp6C1wDgT7hBkYqvMPkGcwcrDB9K9p9EeMJjUCrMTKhoGAnw1JheYmnj38JWXoZMcpN5j7c",
  "key22": "2HNARWgZmaznQPr4Ukm192hGxiGUf53fRVRjgPABYinrDX13Uc5Yiur9DgoC3zWDCoYdj1W3GQGSHYcoXRHVZK1R",
  "key23": "4R4ZKNraQufjiV91F4hfSsZn3VUhVozQeptFP6vS6FFrits6JYPk91tcfC5BoeUhJd88aUyTEY23C3APKbjK8VmJ",
  "key24": "2H3Sc9LYjd3xNMyjoz9g8FphBGKnncwdpjFi2RD5KgP72xsxYyyy62YSQPTumDTea8wxKr5owP6MThMUiaDY5YXq",
  "key25": "o6i46yYVQztzSFhH1WkcKTRZVSb6XD4rFjPUzzgChtAVLmXEn62AtF9jcRd2NR9ZDgRTWKpyBifPadYMEVTNWry",
  "key26": "2SJ1R1AiZHsv9DAGtyA8Xdxzny1W3VQijFUfXsBJwnTszaTTQ5qMNejyERrF186BmBnE5oKE8pAtD37jwQmwW4sG",
  "key27": "2Akuq9gXFZUdUtSjc66monu8rH69RpAkkpxdzSUcnLXwRC9FJRVybhfc3qJ6JDpzHGKigyuUPtDPbAGBKAFtKSGi",
  "key28": "2QHDh7nV57Hq9TYrmnYFpMzPL5Y3xVsLL4hYSdChThWXvy3SrHQVmaockQXbqRhjpdnwBaT26yGeoyQwm5xDn2EY",
  "key29": "4t27YQG1mmQGXEeNnGnzeiZs6kZrEQS4ZFSUVBEg1oYcaKFvC245zynUhXhdrk2VUVs9Cpm3cxBd1EdkKGPZTGdR",
  "key30": "SUVahSA5KqMVteKHxAi3mdvWmzum311BCPYMTfCov6ybUWshVbWENpq6JgU8K6kX84JTBMzL8Tt9DhbHz5svBry",
  "key31": "oAtUR4Wfo7dx3EoiuTgQQA7YkFYTDsrrwFdvXpNPGVVCK3vi69aHNGBnZM91HczXEyrNRRFx9uSwZwSKCBWSo5B",
  "key32": "4YkZkEdzGt98oCgCy5Zi7ufN363DpWoBLuBUyBmAtej1cAL6sxAX7MLwHaSJ1xVut6nuhF41jqFuVFgnd7fucYo2",
  "key33": "5zJf3oSpC2fX35W9XRcoKXf4uGL9uFiyADWp8DkZZzcUSWZVoV8aormPzDG95XeASN4hLwCa4XST2k8KQYxspAab",
  "key34": "LPg4ekHYTCpq7frQKFBZGkC4qYdCjUhMSYw4zLSW9sZJ8Jrx5MfcBWnDewDLyaZA4u5m2juAghkPrk9ieti8QnD",
  "key35": "4FJEs2mdry3s2JGc92tJgxRAgUJRoCGCiQ2yhe9PWeEkivgFGi1fLHMKsnZSco7UZasHBE2SkhEZkxy4zT8XDxTj",
  "key36": "4qrvFWJd3trvRcSYT9byHHYR2bQ6vv52VQ9zFt3Hp3dqH7XrUqPQbHZAZt335Um5BYLVnwsCjPiY5YbxaLeFA5UV",
  "key37": "3Vbch4eHMaTTrzGXoS51z3TH1HPrrqnFcic6hhyMeYL8FXAyCJmDuYpUzn4fEgut6muQA3hwi6bCiqdSyHtgEE4N",
  "key38": "4944PvotA5fzBrXMGAYC2pgRCekEiiSarmLTXaQ9XXZGKCEDMgDWx6XRtGvipzw5tP25CotdpvraQHBGDe3Uv8tT",
  "key39": "34aZEe5Qn5rQ8myLChETWE2v4jwZzHy6Hzc85Y1YSJixA6JsCnpEtspiTFatgSq9ekhvuA6Sq3cvhhje9bT9aoww"
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
