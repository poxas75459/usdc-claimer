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
    "4hkDmbHxXbRwcipA5bvPqDAn9eP919i27sGJf9jTGi8T1QaxMWHZTX1inPdnHXwHvfa3BwBB4asWC3ZuGcndx7z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612GZ5yiW42HgGJ5LjW2kjZEaMdEMUgfbxBvs4atTmzfHX6xJ7j9hw7xfE1iUGrVTVag7N7Zv6nBA4bXZTjjqFgp",
  "key1": "5y39AKiXMNyUYuwm4pT7DhSgEku1TsS3dkk1awg2Pi4GPSbBgp8LMCtcubkrU4mhfeXcoxoFLC5qqtxo6Amb3afz",
  "key2": "4KSynbPEHPnwjMwHrGXuPS69MSELWUqEsn1Qs4iwzE96a1DFz3Gu2JcLuGbYyzScotkenLuHTVa4zuM27MiHnWAh",
  "key3": "2dYPgmzt8TV5puNy3YLzWRGjR3QUVqKfRyHZV3pGAjsvvTBp8hGjbQxmYcboqBvTiJ5mmDMRUQvcvgXf8T7SBfKZ",
  "key4": "2pTG8VDXWHbNNpEamwviL2xtJYx1qsFqMPMn6yWhUchpo4PXZCacWq95AZZd9HaYHisJb7CVP2YZfB4K1sAnaJRV",
  "key5": "XE5ceXSn2zKzy3M8uGAZubnPtu5iuPFmCJfJxDj7khBS1MtjUQu8jWa1njMMqKCaHZMZiA5r2FDrq2883ANPaGY",
  "key6": "5swBUYwPnCJ6F5mtzEpR5ZZCvbRCzcEWdGkkKbr5E6vbuizoD4sxpXAh6XfJJqj41YB8rsFSZ7NcSCpDZPhniovA",
  "key7": "48qYjNvpomwbyBHkhzpRQvk39iUic4QZcn2mPuQW4KnWe25b3dw8wWXXaU3wQruLbHKP2yn9he4ZVyETQct2QxNg",
  "key8": "sUvkVthYynJNRWQpX1h8mZRJ6w6kAW5MDvLQHLcYLZmtGQncTsjhU6cKugBFZpzyAcQVttwtPcxgZaN4h7UvY5F",
  "key9": "Wz5RtHhbzNWszgKNrPZEP8hjZa4RDaGz72USGKQRYdEo1ch93uyZK2fKoDxoQmxiaZDYppDNGfSqQahWwbX39mp",
  "key10": "5sBnnpJtbYL6UDGWCa2Sic4ceFy7UFqfyfwsjdyyhu6ayYfKnicot5QpPPT7d3i9evbWcLymNkWpKkH4LERWss8v",
  "key11": "5AsxVQyNS2KtyiDSmaPhZtDGVD9i8SNyuc49BgLhdZXkQS6bvyKqAav5Nf5Y6S4Jyi1NJYTZWoUwDqUZasA9wjJ",
  "key12": "DMi6ZTPS9f3BnHUiPdEYkNaGAiU2VtGEpBqjDGVX9zzbiqEJ6gfbVjEH8YgKv3iF6KvJWD3gAp7Zypcbbid6oRU",
  "key13": "2B2jyUXRQNFzBjU3ZqebGk9frf9uDpD9YhuTLYtYGq9pv9qz23F4gUCNPPtUUoN7gMaNunPxcxoY1rM96QzCcDC3",
  "key14": "65YTsNErqi446HZC92m9s6Dc9qApbtYAwxWf8Lg3uttQaLH3q263mE6X5yamw1EwmWhsLdMx8YvS24YycBDYZzS5",
  "key15": "5mKyTg3ugWZUYfzDJDrW7aysjpsHtq7Wtw4vKwnd43dFkWtwasWFath6Hy3ZGPZvNPsoMBiBvr2xruKCa1V6Qddv",
  "key16": "5et46BcwLSNinSYN6H2NYn5LNnzTqg9KmLhxZBWvTMGMGswXzPrJtUcK5FvoLqmX5GpQ2bcFNKUPHyaZmuAAs54z",
  "key17": "2DLhAzNkuLLm1gg8VCMepJL9jsn4KPFDJCncTj7dmbnXC64vZ7PoTCaoLuN6j32WKPtytDc4PJ6urY3cghVGazAM",
  "key18": "24NKDo5Ca8giEc3YBs6kTtUrhg33SYxG6bcLx9UpFeMhvbcYX56mNyvh5Tr7VmY7Q3dHyDrDHWnwV9k44pezPGz2",
  "key19": "4sKVCx8h4rkgSoMUJtZidzFnVfQVvcEduTeb8ty8JEbVE8ht6PkhuaPz6Zw6L93LcBcbvCrXmfCiaW3u4Arisrbp",
  "key20": "2DXmRnBrZzx9WwGQuqsCXgBwMuNxQjuRyDvYYnyXmmdXNCFfvVQ4Xom34pnPT7ZpWrQ98g9YS8ezzv677C2hds3A",
  "key21": "4fGdYAG5h76ADYYPsBfdW7WYjZVngwx3iDaxAc4oNRUExEhiAA983eYufGhKW6nG73kihreQ5BCygp7ABUhqMRPS",
  "key22": "4GSAeDsnZP3hrp9GxR8yDDzMpbgTSqSM2gXyGzHusddh6ZPUQpbtvvXj6tsg3mLL2P4urRQyhuRLYB6Fw84RNJjg",
  "key23": "579qLhFWeK56YVJjsgbLM9Kdzcbi1wx4MNpbcBZZU5StWf7GzR6yb3MhXsq88GiV5RK9oVYXS4Y9PJxRfLZTjRQY",
  "key24": "5xtwZUDVDRz5pQPRDovjAhjwRwaBzD3qwFUxAM6QeGj6rNZHQvZrpE4aXwU856XRxZypj97rV53sFqZbcFjFCeag",
  "key25": "UdShNJjWUvzAi7tPoBAmhEXHVeUmqkv942YYBSqyQmh332XVg5c5F6W5iGTpkxZUTRyxMnY9XivyESwZZMALWC9",
  "key26": "3QLqqVbDFThMfwGwSxxzz6HxsHgLKqUkFtfeaNBdevmNbXNSoAh6r2BJo1ZFgtUYpxsJK1a3YLTYW7qWMApYjEsf",
  "key27": "uydkzPmAhS4xz8THx5TKgMPQWLt5fpz521znAsv2irQugXCxUBhviR8nGgcXNer4NBT782zJznNdM46XKecDXJJ",
  "key28": "Vn6rpQtahRr6rpe5ANBpgctqHFCFm7wR6SYMYHkDx3GfLLwbkQBVkoqq8YtDQjfrRan9BdJrA9LJPT1HY6Tn3Ap",
  "key29": "2afy4VwC4HR7KLgvr2E68tnbMTFmo6SRN3DduFuUAKNzef3zrHZyqJVs5zX3muvS64Dfmy35xQFjGq5NrWdZMCTN",
  "key30": "4rUUi8xXun5K8mQ7uBvcrJ6CQ59kWARBmJrcSbXocfXPPaCiNJjDro1cPmehX7bJdhApjUn6RRSQg5fwfanMSrjV",
  "key31": "3LCMgWWE5iSjTyJNoHfe9mKtYLWv1YpEp9HPbkt47SCMCt7CxHpGuT2bg6FhBFZbrVv7h4RMAurraCEjCoeRPoi5",
  "key32": "4PweVVJgzT4sSkcAvms3KLUgquzxt8UbQqTmDiFwVPEnUCzutnSb8TqpZuqH4Z5odnGnbHGaQHJhcKXHMPr5kYBB",
  "key33": "qdchQK3yeABsNNmzkZ1Gkv6TptxFGJKHBTGbmwxvJgfMteUNYHRWNxadEKp3q4CvWTZjskqQUzGtaKtqKUG9Eh3",
  "key34": "48xcfkN8TWE2qfE9fe9qtK25ft2fj8NtpsqcSe2P3aAYU6LTszWuWoGYmD96AUBuN9zyZ4fNNnsqEzQcriNWHNs3"
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
