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
    "5T8sLv9tjj1XvpDSiwkTqabYg1fSs564tqJE85hRfmSej2rP2TvzS9uf6QMjSws5DeZvocZWDQosee499ipPnpWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UzE3t2kfV8AEeNy5YTzz9zMr42Nxt9Gm8ekz6jrFQuoKUNF1A6hA1fNK8i7jXP6i7P4BN1EiRi82j4YPyWU7x4a",
  "key1": "5Y8DbJkno8J9FoMPVMcTeHEtJC2YTTTvnM3bVNFNbPHkCvaSpKLSrRnpA98RATGtjcr16EWsj2gLnpgqLuS2RAkX",
  "key2": "47ijA3TWG9jNQvWBKDNzZ9bmyhyQ32DGuzzeD7CTCXVhtxhrsdNXdQhKdNXgxFkwxQ11Jx5JGFwUcPH42bEQ8K9y",
  "key3": "5pU8N3CN1e4STbfgD15ybnLM53y3YVq8zGm75WH4caZTzSoLHraM2d1JE4VbUFRuiWg9mHjdfFTffzsQqKy4g6PY",
  "key4": "26TyjtBUuhk1peguzxfsv8H85diDd6TLUPtrKnP6GtDzdXKkqBPPW564z6SXzXk8qKzot4YEeGE8ERyRXiZhLCR5",
  "key5": "2j2Asky1kGNWNtvzLHozSaQdZ4GmQah7Hu6GMcGbcH8d2FSHugnfD9fcsVi4S8j2BSyfpVB9HTfgsPAtpo5ttgiy",
  "key6": "5K3gEVPVE6cQqsKUvG2GseTVka3Rm4LdhY6Qzk1ytydecNgbJ4yHXbX88TMXzgVqwrgdWSangv2DGJmJa9Z8aGnA",
  "key7": "52JXd5hTyjGNRGaorynRqdKbZNFUUXzeFmzBGFbyKyoUVcAKdTSSVASsGFn666vqxPFA3oSyXQ99iiLxQx48ib5S",
  "key8": "4qsP4JxzcsHTP85PPmLjYSpPoPPMhNvTzDiNaY8ufoPSmDVpM8hDxNpu2DQ2BqtKuMMWPqTmX9VVrzcMdaLxd7CE",
  "key9": "3GakSbSVfzz6rgd7bg33V2hXm4G8EnfJ2GqTDprYVhUY6GYUphWiG3qFYz8mDgMwdDBNMF5fCKTkwJsHHHQiwesu",
  "key10": "7ZLRZSCJQF1XNfGMM8KUmhm89BqwtNseGrg9ZzxJnfknopyXZiD82BgUAJrYiqpDDvGAgPwgXv7cVGc7Xs8pw5F",
  "key11": "3TPZTTCZGoV5NeYPod5aGbPGeebte9t6ueFsddov5CEizBv9ziH45rpXP7kgZCagmvDL7ynXTV8MZADVz9F7TCjB",
  "key12": "3Qdy25aTnnfNvqb6eG1WnEehULqrsQssYt6qKiEizdLNssFSuVtFUBfRNsSSHTmJeEnCHY4SdesGR9RM2ycto83D",
  "key13": "48XSD3FW8xbyGvbNWWYDnDyCu4J8RLgaLxD8kNyYmNk63Na5epMVPKskRhYnMz9GZ8XusjNiAUYtApCkyehW1BbE",
  "key14": "5U6d1ks47nMFKCJr1Yt95HJT3QeN5zUx4eq73iz2B8YE1Hie1o5eGv8qPnmSBvBh5S2P49mpEy9cZRnGwpW1iWse",
  "key15": "4aiVheyQGMi6XfB1DhSCrq3mhbaJFTX8UbJ5B573BPhmSM9nMiumZEqsFvBhTJRaM285L1pSEJc9EWgu6E9QPVt4",
  "key16": "RVdYU6iNRFwWzLYqUrxgAe19bGBpaipCkCeFDdgv7P1g8LBe1bqQb7JUUiUN8MZhsg5ryv3ikXZKxvGi1E69eKf",
  "key17": "49kgAkrY8K4LzqtqycsiysajMLHw8ox2KWYLYZS1AYw3PFVU9yHuybsHpg8cbbi1mThWpFucRcth3DA7Ao967fXT",
  "key18": "3MFdgBUBb7H2C8D4HqitMiM9ptsYQ9hmUP3zrBmru5BMSReHeVGNmM5PRGTUnNovvMVXESRxRY4VE5KbkcuKpn7D",
  "key19": "3ZXTwdWqyRXFNhyPS7JTfoDiHTf7oPncux74dZvBGgdbtGHsemQhatsxHHvufSdJkUL7fmmfMbCNBPvg2yrSSkwe",
  "key20": "3F94b3PG2vbijfZWmg53ZNHWbRJH4QGLfeBRRB12tvSDAHRojnz3yzG2AY4bwKeoo7AB9ZzeVj2aAZsyjTANc5mb",
  "key21": "3NMtw7ujdE7767bzAPAEcabdvazyiQYdiY4YRn8RCkM6DcToeUiasEb8UgJwzvrSHVNNtyQVjM4YBdR8sfiZLGTj",
  "key22": "4vMHSRMgGVsJdKvyu9Uoboo6Mb4PcXaWRk7CQ6zGLDb4PdNVHuGpxf4xTXJnJqgE2vPF2rKfLGeqgbU8rqRM8mQx",
  "key23": "5y9C1Erz8qU8UJUdTtxbbuqNUwmcFiSFxD6NGKmPyrTi8P3JqmdAY1xC5GeMSqBMCP9kqLQM1PtKLjdvUX9P4z1R",
  "key24": "2Ccvujw65MkYtZ7pT2fWrPD44rnQSFh1YH4jsxWJpxaWzv2wB5C1CiJpgaFYWJrRU9LHvLEyvLPJEZ6Zf3huafCX",
  "key25": "ZLWQaaM4eMdixndpUA6AsaJHQ1LCkGbm6FXwxSzJCGsH6PGTyQ4tGCtYqazYiSjzK2gFyc3TL2142NfYArqmnoN",
  "key26": "5oewKrFFVdi3oeUEZ7U2fuDPfcHFtiHV8enbbdKxX7dY51AwJ5F4JyPxaSRZYUJeoD2Cy7LCxJmrJpXXxT9aHDmH",
  "key27": "33keVaYJaRkc3CUWahhFGMBCYtdaW6nw6WZa9jvUYdXpCEoD2ztk5GKsR9DB6uHFNzAWDN6bVsAkK8EpUWqcZcF2",
  "key28": "4wFgtPS1yuBhuyn2MXuTzv8ZLHj4QcYCqSkE7tVW25UpNEHkde6DQUrNzpWhPDgtaFLpqxonDpduYSJ5C9cAL81F",
  "key29": "33xT2U88wobDZNZNiPyBBXbmuUpW1THpkfao97ZCnVB1Yn9uTki8n6GGJtru9uth3tPN5o82kL2yoA7S2jpXugRF",
  "key30": "5QjPp2t7fbWxJGYEsTbnuE74ckSuqL4zwfedEv43QeggaHWWAbSkq7kyRRYEyyyYznVM3XjxtSdUDRcwE4xMK27k",
  "key31": "5ucTEG7m3KCtPTbKuK89GGGFsz7gfsdXfADs7GT9PM1LPgXGF6PM1Fr1LWnpRj1ZUR1zJWjEr2ihQTZHHpQhLtVb",
  "key32": "5s6EJJGEwP8oQpHcDEP1MKX1EuUXivEhDvBCirzfrVBz3HXM7sFxdiufBYV3GZjs5sgCvTC8wVwFM5DjVycPX6iu",
  "key33": "28FbLdZ1VfxDStJkso6vzQe5uztzBf253rMRuvXdnVcjDW9XceQ9dsmfCYtXg5K52Qk3bopENVNJUBTkFvEiJ89m",
  "key34": "3poP62FBWaufoNNuhhJHqVar1g1woCarDAtma9toCXzvhK1YUqjR4EpocR1GFdKiMBJR5Mab37jgnphdirrFSkpD",
  "key35": "3Kpvd9og38RcMsHgTU77UAaTzbfvPZCBRHNU3L2UYfbDuvH4MSfXHmk2fY7pQaYRxUXejHSKS9tnXvNmUD7yBuz2",
  "key36": "2zdxFVLBcPuowGwcJxqq59VaVRMtj9RsfnqnhYXMDkoxhDLYh94DRHcNbp1TjNKNVx8sXWW1JXPepcUrrMqmqb1",
  "key37": "usKaX3k2udniA68yQeTKRpat8SjYew6adpx6ZsVS4ah6SHZUh3kvx84XrhQ7BCrpcnaZVSubQW9zWNz3npGKc1Y",
  "key38": "611f6MHQVJgUFRH3pYfcheb5VK1wv5LmJRgy7BqXKbKhniquXyBWzzfLZA28UTMR8UkzSNfmXorykRYQXsyxoVeH",
  "key39": "U3RZGUefNKnenGnHLcyQuBc9rRNKc8cYJ1NRvcQjYmELDBFYqFnigS5ghjm81B4iSPnctgxbuD49FP1JU1JeF7C",
  "key40": "PZYBenhhpKMh8QAr4q4aBcHti6xhDhHN7nkPn25yDCftyUrhcvw1xiuA1iREkBHVpQXS86BjZcA7tAB1nH9ZE6p",
  "key41": "56T6v9bxsrYndnCBZVRqTEumnZLFgTJCwCX58cZXXKfsAPEwUJhDD6zC6rC2wRBJRvF8L4FmuoAfjBDsBbZytbSK",
  "key42": "3HwigJwPJ2CDus1LEbtAKWSDosYu4p1krPHtWGfTHrHWmmhbQh7rP3djTgkgCDAUfD7cRtXgewJNWFtg5736YT3C",
  "key43": "3xfbC8g5p6dUqrLgHtSzLTcsimFAhCzepmbu8ghJUbSH4LtKWD9VzF6mL5ZaTAcjxD4gVfHpSRGGK9sh4DD3QmjJ",
  "key44": "4xjCH2TmuKxtGovz82VGu8PNCq5hPes4bbMYvH5DyLMGh25YF99eKHH98kfRhVkKuBM8Wdi7UjYcAUDMe29EwSkH",
  "key45": "5q8fBRdyoTPcFr6kdGQUrNy4nDgErNBpr9mPZ65JVRuyvrV5yzcCzkYr1Z7Ki35eK23rK5j5wvj3Wch8DdQWTn9S",
  "key46": "42nQsZzp7NLvoTTT9gqgK6z4YD6yd3PE2RrNNeAnfYTreqzxPDe1DeYAHw2BE8qtVLmNTiNFXgt4giEP6Y54ff65",
  "key47": "5d96QbbQtECEgepvPnUGtmbgi4CHdYVh7a8LdxR2AsJPgd5T3q6wVswSAQbqgkzqiP5ngDuyrdLutqr3MVBzHDDG",
  "key48": "2X286SvUrnBoQz1N8CcoTQdCPYYpv3szNDtv3eeV5tPvBgrFbTVUJVyMZGTTb3Y9MrEZM9gnADVwWNWZ4Lk3v1uL",
  "key49": "3ebSJak5ZDcqqFFr21cjQ6YDKMA1Y5B59EBuubMwZJXhxZCUfju61DB9hGUoWEoKE6Ru6YZWfryfVF4jv12um3Hv"
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
