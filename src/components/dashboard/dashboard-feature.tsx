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
    "4CQ1XcFKCJsQ15cvocquTPsb3ZEtP1MC2xnECtRNH2DKJNbAeFZDXZs6n92VMCfeLo8e4Z8FcGZapgwVfuFeYyCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhWTuiJdbmhssf25BCf4iEy2f2WYiUect7gdwNefjGMaHgVDq8UrgXfU2mEfxt2YvJUgHJFBxXb9gq8pZGemktu",
  "key1": "2TjdcJYwaquxtxJEedPKn9iMJUvhenqZxw5JJckqUVgCKmTHQvUk6qLhqLn9K5c4tJSukYS82CaVe3EVjo9h1drL",
  "key2": "2n47EBNViywnFTqojrr5Y4WpRxNX8ocKXYtCTMSYrQgm8FkmgFsKsdUZXkhyrZVwcjLqniYNNncygLSMh4u8b1Ke",
  "key3": "3yY5ueDRRc5h9AEnBb1yeEk3aXY61x47nznLKZxnZYP16rDChknYNymNDnVnE3YLY2ucuX9iEqPiaehSH82Lozhv",
  "key4": "guAxDpFjn7RTNGepHatyAuKbq4HmmhrxbKmuM2Lc9kNgPVxVkD2gnAYGJ2AeLs1UAbhSs527rvqBb18mpEZHm46",
  "key5": "ft8sAW1D49zxyXrAygFp9S6wSaT2vhjXGnUK52PcynzQiggQ4Uw75PrSRanRNfKTKLzBawz2wuZfoD3o99vZovK",
  "key6": "3bCgfgeoGv9wAtWwozxiXipUhoQo9ZHyTDJES1eV2DDJMcQC6c8ZZmtRHDAcQfJ94829aAmFvtBjvg6pVhdGKae5",
  "key7": "3NL1ghQLN93e9Z2QAg3DXHCPG6yXbc4xMEJwfLGZghDwD8H16fyNTod1FgEy3nE2oZ1G5vA7nUbY91xfTici3bWC",
  "key8": "dRuGQK2PUPiuH5zUAoP8NyNLy3qbfphcpZRTdUk4DxNKFsTvQAGpvNVW3Kw6qWPjyyYqNoSUjWECHvDkzU676NE",
  "key9": "vUM64yTPGspcWQXD2JNsrbV24bGYw5yRTdEB4HJs6wMwgVwbc217gV244gdCcZUhysUDuprEwC5j7nhB3JZxaAd",
  "key10": "4WDzATiyWhBrqihUBvJjDThcPTgAvvjxeASHH35BouX1NXjC6sU36YxC7c6WbRT5PPma7kJJjJAoyCgDCYW2UwYB",
  "key11": "5tt6keTkZJj1J5zTv5Bc1PvL2PYqed1H9idMKcm1QosKTMxgyi1qvrC2pZ14k3yh9QpMJLfRJWXPfnbfc5T9ydna",
  "key12": "2SfMiVQm4bA1xqgVPH4GuDKpmf6qDZ4inktAG38XRjAYqBA1kWWtTsogF71qPd2o3ijgi64S7tHjti8mcUt3sazh",
  "key13": "636a1XxBQ9UzdWvgSaJZHpQtpDAbHi9fjJj6iBw4MXT5MdNX1yHobvFRpbaRSQwyBWgjGdzAdoaNtt9jL6r4g6fE",
  "key14": "2uq4KeFrJbCThSvcZ47s1JQfs1cADr6wJWnT7fdZBGKwPtqrB7Vonb9Z91Vvq1oLQCX19sLsDnnBQqihJeY7h1Bf",
  "key15": "RtJhYajo6qKjDAvvrxBtjp3hDE2SNzCFxQbEihUF2n7K7yFcteUfSNzHQAnWYCmtB6XJm7fSvUXhnRbUGL2dbpE",
  "key16": "2ahzgeV1x9ibo7dLLDq2pGjbUbFSs1MscpUGiMfwBgc7MiWCx4fhuagZFnzVyEaeU1bPvQQTudnghhSXHNp3JsyL",
  "key17": "59BZtHvcfbBGTiVsd8QQx73EZXhbgkDLciiMS4mKGwobT5Yhn2UFFYvz5ZjP17nZwfgrq1Wo56HRX3AsdMpJ8Svm",
  "key18": "24Mw9ZdTuZt5NuNuYvvQhxRVtqGBnDpGgPgsoByC9AYeqPeVhjFyMFZog6i5kEWsZScMyZQaKhm3CRERCXp1ksht",
  "key19": "4nuzKpyvnB2GwUHkaz9ccCg7oJRCG4TtUBvsXniheqTScqtaQybXcNYS5fcExcpknApicwW6t14ZmajbLjyUs9Ax",
  "key20": "6DnEN9UxBT65TZRj7KusSDWwFVotTuD5NQNjcQC71FxqM7jR9acbHWjp4TzG49LdnCrGm2RkyJwT8kLMQka2tB9",
  "key21": "5oUtoHaxavpcAnrHc2Qo1GouibKGnRZ7p1WVxTPB4VpEinw5me1QZZW6XzzkdZmwSocqeDReH91dwhrzxt18L5xN",
  "key22": "2V3yj3YvdaDdQ46Yn8jxCQEAT73ey9fxdNKnVg1YEsi7zK7WbKmwXx4yGNYNTkoPZWUyfG69j9jGesc7tP5KASW7",
  "key23": "43EEezi8xtUfAKYpSQdNbe8S3bcp2HiB5UvYBtr9fcKzieuUdiD8BWz42qVY7pbabiB46JLd7Q8y889h4doVCi96",
  "key24": "Xxt84oeSiStNcwfYsVBm9oHdTuYxX8FvZT7KSrsMusiuEktwTrSoDAYL71JXp8u97urNjDCD91TCQDRHHy7EXog",
  "key25": "84B9aYtwjt5QwgeHVuEDtBGri74DPyNAq7TT3NwmK9mg7aG78pw91D8jVLm1UZnyYTrfjwocjH6RNDENUfApgAa",
  "key26": "5DD8ed1mhL71tsMQLCzd3CJmxeQ9La1JB7TnSnF6KjGqwxwbRzN5zEyyy1q5fJcCMTeM35wW9CuzdkhHCgFYfkvW",
  "key27": "N53DABxnaMDdox2aeBCff9mQkrxHVAtnwHDsRkw1fqsEfChSND5zCeb1Srpz1uJoC5vsGGQvGd3a3kd4jGVj47H",
  "key28": "2q8jdnRiAstXxpdpAvQ1iajDVQowHTp3UP9AiTdVhtHUvJY5ofUNoZBY2hzJE6uL3B2MDmSTKpjmkJGJKHQh8FHV",
  "key29": "feQadJyDu6n7HB9dQUyTZ9sZ5Q7sWoVA4gFgCN6iWBQeW6m3AWSBXdwi9NPrUZhYZy6H9anKHuTgaWeSbosRVr2",
  "key30": "iY5PGN9LtncGSW3oMV7eJwU2DPqQBDVNvKsVs7zmx3UaDRPF5Y98vabJWzTxWYy3Kp83YjdUAaCg9CrQyPsvnGb",
  "key31": "36GRo1pqibpRkPgoraqF6ZhRNHiTjo2e1ei9hM56qGw6Qkj6X9cepPjKnxDHd3YFdruMfVtM4w1dYwDhneeicwWq",
  "key32": "aHCo9ahgTSmVZdenNeuow38jVmq1ukjBdbrZay7LyK7pBQCMNuLNieLY2EzbXSX3CajaqAgHumP3eT3BymjRbS3",
  "key33": "53sC9pEJAN6c5tr9PwDBpGJjcYGQH9kZvRV3KPJtEfAWa4dtXZt1Jnk3f3ZESa8HJRDxyHB6f2tGtdnEWupujKMR",
  "key34": "2JQf7FAeEEzfbhY9k1Au2oxQ21MFNqEwf5nT5i997XpjcHQQae93PEL4SFv1ghiBa8hyvEkScvnurkVCj1zbgg6a",
  "key35": "4J2bYQEP5u6mFkMdnaadVLgBfMUfNhKqquw6bH8YF7KPxxxmh5T4g3fMuT8RRafgK2v62cLcPhgUeDQb5PpxELYf"
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
