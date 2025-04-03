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
    "3T4DVpnVGuyJKbyAbNoh6f9NuMpxULv1Agk34T5r7JGaHg9VJhpCaLdkGisWbzYXhJbr6z5Ztqfh1Xjvz4ZSMDeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diAQyusoTWXXzuALSNv1vdfNEdthkEZpA8zvRmk6WKGDQDkrhrWVXu7xsGprLDPmuAwoEqFYYrQ7Bg7tXnEL2uL",
  "key1": "4gitmdQ7z3z5QsCMBL2t6JkYbP6jZhB3hqpYc1DLcauSVEjdLuBgxgdj988ZS3wLj7LJetX3QTtchh35cMU2bH44",
  "key2": "4fsJdMagpgaPzMiAw5Yh1ARAkirWSBkxGU4dwBvL48gLcCR85XcSbT8jnM77PbjGcF1u7WmNsUBNmQ7gtAaR3zMu",
  "key3": "2o9qhkN3WYm16ewdBK2MURUkHPsju3vEii1k3rw8Fa8QzD3rA9i1ZTBqMnNWCMwC2UfzJTNgzaTJX11WeBBcSaHB",
  "key4": "3SeEAGGo42eUe8XTNGpVmEm7MjJewMn7XqqPJooWRnkqDbVv9EJycseAVMcza4RakqqsVdfJxBASvE82sjcc9sHa",
  "key5": "xAWacp1SRe5Gmqp9qjy7aZv7VNSbVJ2pRgZDT8PA84em43g3Fj9vUfBEaZRTrMw9MwUHgAULrc9gKm9R341SzWx",
  "key6": "2E29HRZp2PuBJLRvAmkkvKC5vzWHQbed4MgHa7XCCynti2eqC2xH4znWBEakZ2MHLQmaviGTVQoyg5dUnXJHK94A",
  "key7": "3NuFfB5xFqCrQJHnn6PP9HUEtBApY5nVhBYNpir5q2NAAFyx1YF1gZUqR9BZv4rX5pEp4LDWWF3LSGeHYBnFgAxQ",
  "key8": "4xSY4JafLBqBe3UpVDFJkQAQSKdaz5NVV1W1W4XqGP9J3Kv3RphhKGmAqgPeh2Wvg1pKuvZ1QYyJncqZYMrwb9Uf",
  "key9": "2b1ownaCGhiPrnpQgvjR87b3u4a5RapHPQSnBQSPay1JQepjpKvyzU8VmnJNRcqHq3KfcAKfs6ztQJvjdV5tgS8K",
  "key10": "5cyYm1Ba6hiFcDboxC5ysUZG69AmTkgwMK6Vg5hoxtvwvhKvEgKXjXp2P7xQm5cmeqTmt8iPH119cZq7AoX6DMBu",
  "key11": "4pMPkA92TXnDAaFGVrsWFUsyt7bBxWaBDQF2BydhwYF4A8qFBurw4yNS4vz6qZKNCWZVKQaNW6herjd3D9Roi4Au",
  "key12": "4uK4hFHiNNtmbpUhrjn2XDUW8nSAWmbjcwQ4yRpTJrUsF8ZNyuHtGohXk9L8psW4ybBmiMwLzngMC6ZRUAJ4vjiV",
  "key13": "1YV9xRRVH3usSA6yP9KdHhGpzvjiCmE2jCB7ni4hZzh1jg8kG3W2Gjb8AD2YAatjrfDRUgwm76Dc3rnVa2KcCif",
  "key14": "5URCLduWX2x9tFPDfyyypETd1nb7tR7N8aELaE5e9JCqKobZic5zRNWxWQKsJMsE8hgG7eayCtnMBY9nG8a8iSnK",
  "key15": "4joiRfFFPZ7kb64juypUhAzAhJ8E1xuGyMbdFMCFaZW7Jh8bBdxzKnZrdg24i2P9rqtsnKvBMJ7WDeTutwRbe4cP",
  "key16": "wHQv2PYxjKZfGzt9AgebWFwVowc38nJ5v8TM6Z2wdF77vU1cAB37eDpvcubwLY5PGoey8PSF4tS6dhhFet1efwm",
  "key17": "2UfMA4LfASHpdqizWoz4gwrWAJAsdYDvfg5Yu8wS8HW6d8s7hx14BiB7bpa6ceE7jhQrrXERLdcqzvXTAJmosYVP",
  "key18": "5wf4asYBTD2bdu3hAyWuFcLM8cKxouuMenyjpD1EGmfC19C6fazT9wkFfNvFxSF6KKQBYovDd2LNCV6NniiATwSf",
  "key19": "5AXjQfEkEGULv2MPVevvL9qUQDTt6PsCGKbEbYmmwUehWtUXehFk7MNQ4PVdKs6xnopEALGV9TBpkmfPkV1bSDez",
  "key20": "61PU9wopM8rSPERoCGVGvU5B67uNkztv8f1Rr5kL956cjFZc11LFZeBemiHyrASPXddu93KNmDcJ32PKNQP8G1Gd",
  "key21": "2qFk7jzpp5zMzniT31a6ZU7GVbvaKxHANhm1jtEyTWwkfpQtFVt6SbWbDSPZQnVxDvwjhWra41cbVvsTE3mLvXCB",
  "key22": "3zWzpcFGRYzAQQLDnTjR2ncyMBWrSwB6BL2nLhiZK7WaFyNCAhK6C1LjNHuZKPd1h5VNBCjieyw3ga6MU2BiwEZJ",
  "key23": "3vmR8G8qGAL8k1KQHcBTSgLVoHKrYMuaL9HygDYSs86U2MvReRcEH84eQep4YVHeAFwvDvYipMRv5ptPWqzVjd2V",
  "key24": "SYEYqVe2AZHcdJfrdnrfag9W4Bpr123RXgPm48UktuBR1qH49MkxU1DaevoGyHjHPJpLSfzp7LtcS75r5mdU812",
  "key25": "5eHmA1G51RdnJ3SGnMod7nZqtBHDH51mpmyCrysSWq3tDgmKQe1eJyi4LgBqS9avAxPauy6WoEVQxtavAHksFTd4",
  "key26": "2yVhaecRpLJzMU29BV19KYqYkdZCHtw1ZczhpFAcGnmFMiQbFuZNcYM48rndJkEvBUKj2TnMbZZLAoVHdx12fViK",
  "key27": "2cxRdRBXnbybKc7MzvUPYhfy8sHZJRybtrW64ya1CTQGv6jexUeUprkUeVbUNPevadXSP7DykxLwGHfUR1A7g4XT",
  "key28": "3PyZ53QkHYHBZPEdAen9PXWqp1e16sqSCBY45CDRU6JK4oCtM4rxxiVZndbYkyxdeHE859N3AEJS69ruq8Bwk7A7",
  "key29": "4MRci4JSv3VaGroiPRLc5cPyqXBT6oLMj4tys9X3bV6cvt4STeerdJhSDo3kpq1FHM2iyHezjFxD33qZnCcwFisb",
  "key30": "33bHGDWnKrrSr2yv2PANFT1ofLr1hr8ajZaqTkTkuNJvRX5ciMdoFZv1ht5z628kzLr8wBTtLm78GtoLdrindKac",
  "key31": "5bSFatZUZv7wX8tMR6JsCUVBZ2ogRGwyAtqeCkzGaWb3vpCFZ4SjUopRiDnedSDjVsWYWXq8B2tedtkWHQZsME9x",
  "key32": "5eoZhxZHL7SpDCkVRv3SoYGyveJffMqB5TpitBugUkFUsueL6kuqfnTLb2Bt17RxLDtR3EitKzkk4YKDbyauXoHc"
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
