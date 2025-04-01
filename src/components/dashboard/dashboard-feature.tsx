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
    "5ur1Y43YL4Zqwwtyma1wwmwNRv8t56pt6uZAnnQ3W3t2HJ3eGWjdSbpW7GVZkUbPtJmgLyMQ4zr9xnd41B9VoV5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StKys6c6KxWDQ8GjF8yNMuu2Fw36vPpuaA9EAhzKLSH9uKbm2skv3zjwEpRX35bemZRHfzZ4EkJZshXw5fQdMWL",
  "key1": "2aXbXsvR9rFkX98EFmGr1umQhV9PydorMT6ZasRHcVREmxYDF3U2uW8Ne7eLo59sgh5r3wvhgyzyNRSNPiDrJLPP",
  "key2": "5vmNHv4hYQPDBRFAR6gxsi3HPvJndZiLqtML98jyGr1cQkanDh2RgKqdxuyJ4SoQSxwgTojpGFjk4P1J7sHKvSUf",
  "key3": "5YTU7d992ZPhqvTzV4ogVa2zLL3aYHXJB9aXDwUxKpM9foXJ32RVWDT1Prbu9asV3giMNP5Cx1zh2ShjNTfcNj3N",
  "key4": "4ChM9kYqdcktxsf9rAuPEt4etEEnxACC5dqyewNKYfsxfQnoxNzjqpSJQrEz3dY1YPvdN1bCvzVBVuJGwT9NNinR",
  "key5": "5TpnBSRYGNSxD9U3TuW24CgpKfScsG4AaWMXY5d27xwzJ599CQnyxezMdjkzVWmp8BU3XM6gY5u8TczcFpXsgQ2j",
  "key6": "5ktjAqaWf6RNfCN4cPBpBNren2wi1gf7J5ucSBhVDXk7zscfrf21nuPKaMPfvxAeo3px7uzVpeUK2UiKAVfNL6xV",
  "key7": "2QY85jqsGvEXTtdco1s77jyq6ce7tSwLfhk9jS6meVaFhGyfzYetUFcwPpzzu6TBT3C6eDAqdkBS3D5w4NaXMD1N",
  "key8": "5WpfC9MTN4oDtksmiUdCb5p7eAGuwBagR4AYfLtHFUxSsYqb7um7d82j8f6XwZLmp9dcxkrr6Xba8gkH1AJMC3zn",
  "key9": "4DXKvtPhUC4zsFbq5G1Wsv5TevZakd463gERraVLMnwneFpPKjDzXopPMyadJHLeEzBrbs82noYMavP28CbSxoEf",
  "key10": "2YY4QDCYw4oGbBe7BguTmVqLgmYuNAYSa1JF7hwnwR9buozcRhaQrR5rLAjzP8HvC7BuK5uK7LffWxZFX8hDZnzU",
  "key11": "5y99Dg6Sa2rjeBWCNuJ4fxsYLmL4dAcxREp2ZgcqWMrcXr2dY2pPe6NQg69BZJdsKUiWe9UDgsoxqofY7u1dy4Uo",
  "key12": "5ZFGJCrTmRmrShQkaRdFRuLuCPSNWjYGgKiVFqvkRgsLM53TJah3Jtuwhm17ao5pfpw9ptHyEw5QJZR2oR1VijRE",
  "key13": "AXtADDULWvB3GFDHofH9zxAvTVqptxbeReLTBFLfcCGjuDBoa1guaJUxhtAo3xmupMCfVBHBQ8fR4ryYUPQHoe2",
  "key14": "2jAsPGMRH4WvmwS4sBCR85dsJ5jayZU5A19raYZC3J4xiqrzBvqbv6UCxQUFEKkQCxD6a6PcBFw4UdT3XVRjwou9",
  "key15": "3hxQftodHXorphXcDpGLR7VfEgHVLw5JK67Xxxpm4AFkJTo4CAG9xRfFmVEsAqE8U7wqL3urrhxCWXzikhmkQ2k5",
  "key16": "39CZwDG7geamddZSEPn1pXpWcMtPmMkJJoKw33Hqy8Kndws7geCG6f3vAfMzAFQPN23M2WXrarfaU3Y1vGF5tKvs",
  "key17": "2pqCtJaUCvZzhqBa9w4FiDaFXSppqKMQTPNBSuXAzY7DaDBAyjSKxkt1C1NGWEro44VNi9JW2DHJja5muQAUJvmK",
  "key18": "4yZbu6UXpQ5HstU2STutb4FFxmUSVLYC6iwqYS52VFQviSXNWqgXeYc35fNJwJtQRf8FYUbN4itnw2WYxkJfVBsE",
  "key19": "5aK2zqZcZs2ycEDCi3LHpDNbDkkG9VXNfSK9XyjBTUwXQMtVE8SrnnMTJVTxcGHziq7xfRJDT31r4YT5TUVFJCKK",
  "key20": "GurppWW8Piz6mSfzKh1J5tyVRripMxxAG55sC9A9WbUXokD5kssKwVyY4AQRfakEKKgzhrErJRGQWisd337Ckgr",
  "key21": "VyZEfGAHQrZyHhzpivcEW98A9csDSqy1RFumGTRPbFSXTPy8M3GvbkVasFPeHXesGX9WPBWNW5LPC8ZznnyGocR",
  "key22": "2qQ3adYF7g6Zf4z6SnhHuDZP2sLFE7ibnKsspvYsdvfMsLakdibeX2wWpMtotyRXvcKbT4mwwnTXT5TBuLuRR2my",
  "key23": "2QKM2wVoLdgtEfqYQ4Ub2YQCJuBJrtaQadec4UKCxLifbPkg79iVcYJ1YfCywGViJu8EsXjjrt5MUKuJk8sJpPTT",
  "key24": "2VMDAgWKnvyCTGzmcL2vz32YrWBsETqoMiHUkqFNVXL8MpH6JHe8MQREn2faxfZytdpeZQnTeF9mYKKGCz7ksXKb",
  "key25": "47BUjEFUrC9xSV7JEWbHWDZtF8GdyzneqTSvwc9i3iD5FQmFp1eH7X3E9shm74ibapmkfahn63zqoW3A9moqr4dQ",
  "key26": "2pkHVUSD4gWX44iKqGYhKtC7w6Q4cPKjKQ7E6ArvvXb46T9XACncKxCb1hXssF5nHZAfAkQubbBCFAds94Kvpt1G",
  "key27": "4sz1MziyenaHUqBCn67ZNToTeNjAimsDUj3tFHfMPAa4rSHZ8e5KYPtMC5TxWmvx4WBbZvugfCh3SaihkSRvFdX5",
  "key28": "3AFMHBpJVxCTYqWxJkwVviM8RVsAWVmqfaVoYiTT1d6P5toxBxCtuzHThhiz9boZWBG3omGpqBiC16vNh8nm9cLg",
  "key29": "4NS1hVWEZh8D8wfA2dVh72jUGyQTGYSBHsxwenDXAYBXjSi8wqUcvXaXemG5YXTkJ9LsxTxrx1Nyvh8KzbQnK3tP",
  "key30": "hDH9Nat11mtrtwMarYYqx75ochazjx4T2uqncvksm2Jhc4uXj4Er6MUY45KSKcYuUF3roJZgUx3LGnhLowwS9Go",
  "key31": "3KxLctxUJBH6UFDoA6dWvsmMyWfnUBWiGdqbdkULFNgUhFadKKDPPQM3GZgyDXQH6G2AH3SgwjGtRogRqEChd8gs",
  "key32": "3iZ7zt6C3KLesAubQxtVaXt8hhJXeS1sAZHU3cPesCwDq72QWc4A4oMBeKibwcTbSPC1Tv3SZtAbrdsaTpqTFvsv",
  "key33": "3Vs1KtDDqQbFB3T2H2rCSXtFCjwQ113pt9rCKmECwybidGZCRfcDMEemcPsvuVT1q6X9Qz3pWjVTLbgDzYZm9Kc",
  "key34": "3H67mYWWu4a1QgGB3maipyrqtoo1MXtKMkgdbn4Jx9zTAf4sSMQ9EG8fcsd8htHwUQorWdKcRtUvHfyUwvv6bbFF",
  "key35": "54WjHbWnFWZkVBhiWc6dMf74kqmAkMbaQSFUK1CaEnoGqpQv2mdXUQVq5jJ8EhcK4bsFoxLCVkHkh9rjQ3xe1mLZ"
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
