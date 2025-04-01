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
    "1WkwhMEhWzFngGU2TP2kURV3wioNXdPpQUXkCUsyGedBzjMK1126JCMCyCzQ64iqgbHWxgCPvigANTeF6rC3nZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcR9EREQdHMeJwNp7S8nRyEE2UyWumzUP8FyDKWEz7Gu8FUqjrv1cjp5bDZrMNdmtYHimhsZWBraftLdMpCTbTx",
  "key1": "4uAWP8AYLrGe4LnfzXBnNVRhogMrvF2UfVojFuTiSo9AyrYzjZQJjqfNouq854eyXLJNQcisf3EnA4Qn51VfAWd9",
  "key2": "4QaVxa1tcPwuNAi9x3WKnFQyQL7vWP7zdE2a3va5i9EJRebPMFGZMP9uN4tkxDNnPHFsB6Ao9KZU5kJiCTSCpxDG",
  "key3": "2kZ3nbHDmisjcPusXG5nks1dLAXAKkHuvysBagyc6mHDjdLyJuwF4gGd6hhdyKo1Kvp7K8X8phee5DmWEdKpwq2c",
  "key4": "3QJipBeXc7zNW3KWcdXJKh7h8cwEjmKLZKxVjzGYnbMYeoPMZGsy4jioi5sTCdaae7mfjkcfunYVSzWE1CBUqENC",
  "key5": "5TkfzWRC7U857Y5x2p4UyHWpcaAvHUJUA3HQvC3hLgDF279mXPMu5ese7JqK12ZBup2mc2sc4AsPhUEviB1kqRRq",
  "key6": "58ftGC6sYZXjHevyQEYvQKy2JZGwQjaAko5MGZK8eWpBkFp6YQBmgVLG8BT6CgQHydySDLfNnvyMSU3H1Epw2GUB",
  "key7": "2KtWd5TsfTyFzAMTR2cLmmVKqAz21i3J9WnsY8hxrjnrWN5jYiL82GL9iwA6c57i5SyS1CEbZRyaXz26jjdeVcdr",
  "key8": "4B1W4kKwF41NXwVvZwnWRrqxHPL2LkR66ckAxTndjwi3jtKnfe6cYobj9TPS6uqaeFdij5ZWavWMTQK7t77SiQm3",
  "key9": "5CgFBcLau8GMGcC9LyPVNZR71CStiuyMK5rdJkiPcSdGUeEDeZ5ty9SmgBtwtYk61MipAavdkqFrMF5ZCr59H7vP",
  "key10": "378FK7Vc68xsKbYq4dRPwQxjzPqCowCkw68j479PrVVX4xvMky5p1X8EFwMVH4xRqtrKLYfF42khifddxPthhgF9",
  "key11": "46dKzkbpnGjp4zNeZGRSJq5SQ8EbKFFo72m12oGF7GoNqYjWdWqWRANfkjvBswmqe5a1LfymWLphZjT9UdirpZMN",
  "key12": "Gucu1g5KEDGML65s2H48VfeMuXRuKE2WHTfB4GxiarJwTnYvyLrdahBcp2rLP4UBcR1Z3ZbDqQbE2JAXYuAAFs3",
  "key13": "4PDLYfM5wFvZGfayD6paxCMGhKDEzvGfK8kGQj4H61XPTirtdM5CSSZdQSa1JqAqk3Tu3BpgfpZo6mbwPfs1v2D3",
  "key14": "218FVhVeRYDzyqEKwBMcQQuJXKeWqm7CjWQYYobqhH1WNbQd8JWbz3aCCXScE9kSaicmhWYEt353xan2TzdqDeXa",
  "key15": "4UtoAJp3FkJYSHXjnH3ADFoUzpvN5i5ZebUbBQQ5rU58wPZc8PP1bvTY3S15mr2EzAve5tz5KVPem4gyoy5M25ok",
  "key16": "3uqRoEBbqW8vtyZCcM14EG3y5HvgzbB3fMNp4xbwTP7moiNHWospxvv3wAt1Lwd34gx7XaXW8MstDubYQoC4TjNM",
  "key17": "66eq2Sv8GUd3kQAHYmxoqfMpupb2YqD5YKKj1znMqzWTjXJkzeSPybv9YBzXWNv2VvTozLRKCUUWebLLr9tKM8QV",
  "key18": "3hY8sAwBWfK8tjcXAbHTcUDt7e2tDYAftbrww2GjvyuUwfQGi5dwGYYZHKggMLDjGSkuf5MXSAgmoBvw6XYyKaxt",
  "key19": "5StMjmPbbuBY9f1AAGvthjeZaRapGy47Xq7kQxMwApSxr7DUewu1dnWTXG41iPFQGHjBY1U27EmKpJkcxMPeoniU",
  "key20": "4bsC8aME1BqM4nXjfvciagacjxnz4ybpcJdqMruaoGEg1CANZqstFL9iVydDyMqsriWuEwfsDs9yC9nw7U65hQET",
  "key21": "2enA5JeuSZusSUGPD9w9cagn4jNDetCcKL3mzxVjkn33TcKuXW1amMA7fhZBpWtYiBFMghj6ehJB7Vt7w7ahNGhH",
  "key22": "2SBRfAFZ7LM9r77cWNaR6CVRH46JoiwR8c1xpuHEnczX49se8RMNcBVh7diZHcsBw18wCV7rzKh7s1pUeQdATVBR",
  "key23": "5bJCuZvUsp46B3Xkr43fDbKy2989bHmMHKsdBdGpfXV2zfXWg9DVuRuZQQKhBHeSzBc88gUwuBux4xPmJ9Gx8b8i",
  "key24": "4MpcLBXiWjnoLB3X9WMfsta7omsiheBuzGyFgsD2WscW94F6bkxL8eizoEGNXUkAqtezzntPEfKs2Ng67drADetY",
  "key25": "5uwRMM4E3HeNLGzESc9fyNcB4K8SNHPvzsB7iR2jJvCD8fAF3osvGiSzHRL461eet5Lf8hHVJKx5tCpPLUfPsDKm",
  "key26": "2sFBzaJT13EJM4arxYhbf9PcnFSEqqK6J6xtenirhqKhnwezjrveRQeKdBg7xykjnrY4iCFReK2Er2R3CnAay8Gs",
  "key27": "MauuxuVndstB2NyAMoUnFBKjd5tF5yp5upZ5B1abaNqCxyYp4PDmVd32zhwTDbVhuWsUu6dQpDm22NMPjAUg8jj"
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
