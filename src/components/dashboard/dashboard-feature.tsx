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
    "4CsFRQ4KE4HifZ5ZXSHp94FucuNdRG9atfDXiTrAcUNqTuzsF5mkf4VwX7jUYWZFo2YtEfWzvDMhACT2oJaKtpJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHAA32UDMBi6PaUUXcWnjSSmoFyRuUZHA3KYNopVbkxhf2oW2GhEYNhFTZF1GjxLpkhC8Nf4TsZrPsycDdt9eYY",
  "key1": "4SKoP5PUJPeM8FJBtxSHkrabhRxnRQbxTu4gn6h1YsQS59KvGoTtxt1GY3C5rsob26Y33RiYUBuAUSZzuA8sEw7r",
  "key2": "4UnjMw35n8dSCFPbVKHBFfrTTgt3ueeWRzz8jp3u1xA2847jkwVS7ZDBXrhSRZFB6Fb92vHCMNAdUp2MsKdhDpkF",
  "key3": "4vkThsFVPCfGTEgd2jkcHNHF2YSPP2KwDDqZBT5TeP5Xru26nkjqRBEyDPqjsKYdCXxouG3MaVgdhE8Gbm5VEPTZ",
  "key4": "4x1FnfFsbZ93YsfDYCxQhixEMFP1vKG4HgZzgtLayvSJeyX6yzfdNPweabM8R2DjgPmoKGcNuKaGjkw9GDYiAAHR",
  "key5": "44CkBR3CcqBWVPQkiespbKmcLGQ9WEJxm3B6YmNYCGz9R7dMXSkNTvGSmoGJmCVELowmgY5WMvPgoB1Xa3jYYCLM",
  "key6": "3Xbt52MmLjVfSpiXsGybzVp4Zo8LgHxPcm8KU3UyXsPTaKmXQPjXjAryJa9waDmqWwCWDR9C5woHnW6WU9i89f5c",
  "key7": "5BniLzzhidbk2ZgQSP6dEZFtGhTerGU88tcsx1BTd1fuxFmPPmmFUULeEdgzrPiZ1x3DXKTqtHDhyPxrfFAG8iTp",
  "key8": "4pYF9vtgmLUVgkiTmY1a1EbrridTfbP2wg1jgWnAHUYRo5YEVU9EmRxBNvFPS44zBwZ5w1C3CigKe1T5vS8TGBHE",
  "key9": "3XWcqdCHh3yqBtGfNgVchKUCBVdfyjhmnZ7Wx62VSEpwFYorqBENCAqcBrGoAJvzMkfPQ6avSvgNqG2HZwu8bfQW",
  "key10": "pLdxG8xXxBoKKecjmyCn9ALPRw9AUgah6FxFMmy5XN9kCV1QYBecCuvVFzGjHByuhaYLgXTTcq3za1dCLKfZQiD",
  "key11": "2yboJmBxX7T7gUAWQzCtbvTh3tvkrQjVHEtKUuQguAMoE1crb6cuWddeaPf4WbH7Pu9Nqvcvo3Hz4uoZ82CyY5BB",
  "key12": "2wAujA5qHeX3qbmkHXx2cqXQyi7jCjmV32S5VWueDQPESiVjDwZ48AzbGUkqb9wxQUGjtfS8zFPkACbDrxgUxrQb",
  "key13": "3ohSVWDiLgtnp4ErPXpnDeZP6yh24RKysFK89xXWg8SaQY6pU9cRS2WazeV87NMUqs2NNqraLUvigrKzX2FjRP4R",
  "key14": "4cnUd241cyW5dee26p5RaXwTPCigWbtfpmuvSxtbBeVbEGicvWSbmrbxKNAkd7jhQXyoTRdUbDfdnwn5RWqy6coy",
  "key15": "SRP7UFg6oujyctZ6LDj1v7hDUjb7yGUZV5SUdorJkV8eVh9Vubq89cbMt6cHtyGyazdmKVRLoJgW8ac8m2D24Um",
  "key16": "2reVGUQMwuRx2hoSkdZJs7ff4gwEPEUaUkLPW2Mtx1MQbLE8bxzvNQEgK9A2dP2f4SDSnpqsB8BiayWnkUbuMbNT",
  "key17": "3AdbFvMGZT571Gn6E7FtLXvVQgM4ycBuYv3yXcNcZcUNJR3kaZMpNB2Dhxnf4fdYzQKkFU2UozepM8tvspyHTs1b",
  "key18": "fhPAJ3eT2WJi4q3UVxAWDPcbnWo1KMmLZ1DBSd6HjB33rrGnY1GkbdrCNfCxDaNXvbp2SicbhJwfetKxVSiRqi9",
  "key19": "27x8PisHfvp4tmXr1PzosisC6ooZTuNzTARvjw3EMXtYVL4KJUorjTY6ZRzTwKXvh9jZBvwRx4Xna7wYZZBM4xct",
  "key20": "3oRWbmbGnYPMuRNP8dNMuxAkkLMNQJN3XNgY7LAzvTuFxQUMNo5D2R8AsavNZ1UEJRFcfAUKtKSAASyrEUKhNA2j",
  "key21": "3rfK2yfs96wGtxArZEz1if1WWS4WF8aescYUkZAP2UuAYbkUsnQ9jJANN2Gmordsoc7Pt8zMczUnS1XPnLoFXNoi",
  "key22": "4YBfKD5acq1zPtpDZQG6X9KJQdX9NcrqbPB5xrjbxS9V8Ur1nLpLh1QGH6MymBCdyMucjqez8Q4fDzFyqAwyEbc4",
  "key23": "3o1Q9g9AxVtMrX4NQcmkb1rWqZap1G16qtTqXsrQ1p81dqQ5GpHc8z2NQeGNmfTYKXfihEgWgiFJ5DbcMUvUPQ6k",
  "key24": "3T8i1jTYQz3KfKzuYazUiH2oaF2adaoF1pnUvX4tBZQBaiF8QJ6JRRRVUAnhcZwxSrAQbMWEMyTnnpTHnQmx3TUm",
  "key25": "4hgRZ9xj5r1baizm4hVdd5mpsLPXwTCiztNn4hMTaGU51FL3ybuKK1YyvEuB9c1r9XprJ6oQ7y2sKJ2gTBnWm9nX",
  "key26": "5diRNCQdvz9WdD8feGNMKtqUy8AN9aX6vKPnaQ8t5pHFBDNzUVQ2CeedtwnWFWHrXHXtdqVVpXagPybWB9TnGsAh",
  "key27": "f86s1vHr5SB4h296dCnxmbAFgRn47jZwXfcc8DuVUoCNT8y2gLX7ET6aTbtX1RTEAY36vS9fpnnCagSXcnaNKGD",
  "key28": "2aqGSrrKWok5Z1WYVpXuCB2UidDN1uFXvW74wnFnFj1yDG5CwhA29K5DJw2ox2B4H2HMKdfWq9J1Y9zh3s8zE5LJ",
  "key29": "2YSuJL7Jcj6hG3SBVVrzgVENAbjidpsh2ZDibWPPgwvyVv7vwdX4QfgtXs3tMduMJKiCrM2sJy7kfUrk4U7TijvP",
  "key30": "43YNwQZPhwvUHBsKiWTapPRBgeidtpFEp2zhBTzZoEqFjQyZbQVCoLptdYy2qmQLwe4W4zeZkAbMaz9TSK4nuaDV",
  "key31": "3wYbprCF1cNVzXkjRZCQ9XGPpDAEbKYoa7VqxyvF46GhE7rSzHXMg8nJ2ZgZ6Up72qqoqjf2Atmfdpw4qzMqnoTb",
  "key32": "63sh7F8B6LJLK3uV3u6fi4bVXSDeR76y4wUaJbWPtgeif6poaPAMhdW77XcQw3foftFofcuhen83kHZHyHRNwdAy",
  "key33": "4i7SBLY7Bj5VDsBgGZGSHzigSUv4EecFHRPuszKP1xgM74SFNK9xCdm3cJo4h7vXfGMf6ehaGhCE8ABbmkWugzzz",
  "key34": "3WVU5EwN7z98HmKsmQC2ZssZ4gUoSNhsFiQp3BqUhyEA7HMmdDypQPGFyz79RgRBV6E9yHDz45BRjDbvRssmgLEK",
  "key35": "4VcWzAmYggXs8kzdM1wHTi4edHhN81mxweAEhwqq6qXFhm8UYhB6dU1hx4NVxcVQqX65b2uZsNvwewwSdWRFEi4J",
  "key36": "58x5moTodd1ipddcrTPp9eNjmp3CXni9QLCC3Nbh5JznAH3MurXjqnGVfQNp5TJXRBGx4H5snr99F1NvEnS5ywcA",
  "key37": "2taQBxMQY9ei7fq5nKmZ8rmYVqkoRPjzBNtw76wg8v6qbQkWfLCAzhTLuB54KaB53fiDuBhgyyGERPdqMkNBQgXc",
  "key38": "3AY8L24GzfkHbyT3MNNun7mjHTBMQ3DgibcdpXUxHC9Kze2uNswxxBBJSpVXjmkaGqU5jH25acFGv4xCGUkRgKg5",
  "key39": "28Kx9Jqt9bhEncA7w4uhKmjhPJWsowN4oQXozGCmKbJbHnGhRdrT6b9rqKw493pHbDceo7tovHYcU13Qr7fn3f9M",
  "key40": "2AM7WmHjCevPRpBf2oiY2r3jSVzT9ivSXxWFrZnt3hNMXZbEdHgc32NS3KSKb1N3efxnqdxBCzAiXacnNy6VZNTQ"
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
