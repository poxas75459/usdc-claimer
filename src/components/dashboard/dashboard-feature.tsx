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
    "2hS21mYrmjXKu2AQQUSVk2KcigVF9mvxjsq4K4tHQPBuTZQjn5snNQNhD8MDNLVU83HribTVga8sW86Q3zycvpVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqCkXbDVHP5FVQ9FarsooME7GcgTBFrkuZ5LucftBxLdtj41kFSB3Xxwj3yTjf64Af83T5EMhMmniaJHgYMgyGp",
  "key1": "3s6Q3jNnxdCQpbDnArULJYU7kFyWbxaQyhpbwHT94xdUV6YUJHR5XcDxNfwsi1AHW6PYQeyfUNHbuFKyqZZnqibq",
  "key2": "43aG73T8hN1HsvaZj6Kgsz7czMT7CKNQVQX6m2LLyWSvsYkchBTjQMyVrvHjJt36TH1rvEcF8cMXGJViHB4NUmff",
  "key3": "4xqwdLodQtxy6zXSRM7MAhi8MWexT3Kg1ZgHVeq87zaWCRoVz1AjWmRfiz5ZWb1k9E7MD6FLvpGMmeDdSowG9SYL",
  "key4": "hf9zgTZDhPcoyURqgo7mE2VQa8NfJCQSfxN3VGTz3HcNUJJdJnv97FzM6Qwh8UGm5dwwMPVavBK5Ttq1hZMJZHP",
  "key5": "2WZm4LJ5uC2tkdY7sqgiP7o1hsPQCKCKmMcrZbCxatzUCsqE4ZoZthbMRcrHGuifx4cdoSAXhEFUUWR61Wh5qkXw",
  "key6": "4kwWDz5uGym7Jn6qgyMTehqC9agDa2pk8koG3rVGSD5RUXFXCDLSKHPQDBHYbGcXuFpMXhzqLMNGGVhogP2xMPE3",
  "key7": "5QRQZrunidSrgnwacDfqP5FK1ytkyxmRidijdCBJENNzRYkaHakwFDqF25RLQiaBjW85PYoR5kR4g9ZsQaLahwAt",
  "key8": "4Z5U7JBAJ7tF3iEMep6kRncRrKcJvgnkGa5XWHxdgMpgWNzq6FdDaeLaDs2ZBSMgsQEycxqzarAyoxk79TBgAii2",
  "key9": "2hbywjJhjXBSATz4YHSnwDeiiPjVL7qS6Mpwn8nTz7gUtMMaEcAZxg7gUxR29UuzNMemVyUx5FB5xpUohytPXPY",
  "key10": "2XXCFuERC9SgNinYFtCSQqAvg2a4uasi4E1qQP3NbNZf6isp8wk9akv2AcQBVRYu4GZW3vfaK7vK7TLZx7BhMBB2",
  "key11": "BEcopypC4ozF9wFtTti8Rzjw87iUT6juU5MtsSeuFEhY2qBiZjrwFD6QQzBJWXbhRyrby5nvR49naTykD1fv4tu",
  "key12": "DDnE8eziriKMukPeMZQ1LND8uSnxnTWFcZWkCPmACnWUZnjvybW5wEqz33u6wcbdv1KCUhkHcJJVMwnv9iY5mWf",
  "key13": "2BQsZbw5LUPZV6T51Pt6NEystsAGdjWnZ8kaBvXPg2nvdBrLW8R2fEboUr9cpUoNu4Mmi6ryrEUoVeivpJ9Jc4kZ",
  "key14": "33Z7YuNR53jYqrrngtpZV2a2XXchdu8dGVmRLTAmZhRBy4vjJatXRniLKP78gtHGLonqSBFMhhrMbDj6xzZRvJSg",
  "key15": "4kS1baZQPgFXPVUEo9qEbXq9EtbN3ZQuvJHy1U1qdQSBrR31khKT6N9eAMD8pjg9p1cVjoAHmBXXAVCP8ezBG1Nx",
  "key16": "5hHV46ezMWDM8nM3kwtJmw7SKEcRs6ubNiUwxDUt6x7bSvuLMSeDtR1VWoVvFgn2Q2JgoXBKJyiYKJcV7VFzq4r8",
  "key17": "4WzjWCxQu1D35LvZ9HYT41wiB3896DHtmiwdU5QJS7MycWVBFk5rS4P6tAyfzdJ9YNsTcsPeSh7u3EzW6srV38bd",
  "key18": "6tHWQyjf2VysbUD6hyegPch3LUjtp268Lss6WtyJ1WGp4q2kyDTE3TyMJEAfhNXLsgFCRy8VQ1boQdNutztcVMJ",
  "key19": "4wQdiePqVcvS3qBSji72mWFFePTgmCUgrqKQqeAvyWsj5VW2LQnwRSUPGzsUB34fjjHMvZtShM13hGndE2Npw8v2",
  "key20": "pX7YUWLyHhsXpHbQWWBvaebYrS1zUcAVj7uL68a7syVJpKxGPVK4BZF7pxcBMgVjJxiS79hn1Zhsd7vThjipm1P",
  "key21": "TatWEm5n4ZHVrV6VSCLjG3WFBRATRNMVwdJkgKcguuEsUBDdAypSkaTUsxJtmHGbKn4qkpToA4djLHtRwibkzic",
  "key22": "4126ywLtDMiGmdj3tNigxJPRnnrbNVnzmX9ruw44uDnUAtrLngqMQ4Mc64CMXFmCbUSe3gtgjHmUV4SxDjFJVDnF",
  "key23": "2reKJ3Hr7B7pdVY1y79crXkHHwCKmBipvF3GnQXjEefA6qbfK9S2VeHPdBaW2e4GVPWt6ewFXDhVkN4pb2rEMUiZ",
  "key24": "3eB9AzsCtkjvewxGYe3kJgKsRaVSnwEBuMNoBVezR68WVawoR14BSFkCURMuCraCyhQfUSXzna98fv6muBwPzXKJ",
  "key25": "3wpr9GXhJAhKsnt2chSXrwWd5abPL61iNA6oAvhR7BPBmhvZuBQWCzPsLnURuV1vgNiLeQ4pgFTaVbyhZQygX6L5",
  "key26": "3maEmvJbJRiHxERHyjKr4mpwDP7CgkK6ZWXihVK9qLdtVGg9qLunDNyCainh6qm3f6Q5m2EkeoaGA6vwsXD1RgvJ",
  "key27": "2i4LmyLihu3fC7BVhYvvNiLv5rn7eheHF4tHoziqZLtjxapEkJtG4wSZ38pDqG7PCi1pj2HmCdRNgsUGcqquWKjF",
  "key28": "3hoJpnYY5jVJyWiYxFM2cz8bLHXYzZSv99G8i9ZT5iKbrGAGN3LMbfFPFmjSENuvBWnsZ3nKSbocUd1KE7VCjCG1",
  "key29": "2vh62jvncBrBWhRRnEhWTaDdmmEBz58xaAJ7w8eTv9ZECYW622JwGizR2Mrr2rdbTY1LkMnGZU87Ry2K3qsBK16Y",
  "key30": "5tJdvbXHF8by26Y8v5Kp7RuXMdK7xUApKDZY6AfeU263mCWKkEaudehrQcK7Evh6VEpMUjDnVe9P5Q3T3dmU1BKN",
  "key31": "36dHP5syXQ6QP948tzATVCuSwRF4H96eBvQqXXounfmZk6bgjqJqrGxd8yVM2bqHqwcitULVvJ75T3fb7ZN622oz",
  "key32": "5GHviEorMmaSJyrR6oQ4pDA6jqhXtBpSg1YQEn4HobpK6A2WR2RvBWsAbV5pTDrkL7fVW72Y7PbCdSTFpXSUM6Fq",
  "key33": "5HjBY9x6c9WmCRi1b8zt3ZyUpdEP7EUys3suFZEfUCHQLYaSTBAHzJ576d42WUFvPVusq6dAJxzWbM3WFMchtNXP",
  "key34": "597a2cXtdxjP3aBeZJP9sXRV7RVEL7fxv2AWJoqba128ScmhRfZoSz28kgb1F5XHvTfjT1FYsGqyemUwA536pCEu"
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
