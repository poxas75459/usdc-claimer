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
    "2wPx2j6isjWq7c5mf7Lkea9MZSA4cY7Sdu7chZATgSKYVhMTqYDi8rVVFayY8Ac2e8fRLV2AQuzyidLcKwSrmebv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mr9znKKFgHRg3YsjJUZwTTwdfWaDz7h4oQh6Cu9xfjt6npeRYimpAggR7PteS799WnmfJDtTmuLGDzxUJGodAH6",
  "key1": "4yYduDRwWqS5ja5ewGwBixQVYjhHf5ovQ7S7EGfJj6i8pMB2EYkqvLjiBM7RtS2iqD7Pk4KivYS1S8euRncd4n31",
  "key2": "6423WbP75ywAC4ewzSoSvzLzKy4kZenBczABJBNhHZnjsoEBr7eujt7LeFNsWUT9UbgCsk16snwqK2UcSDSXD1H4",
  "key3": "5L1FxZ7WWxb6dhw49cQNjxe9wn4AGhhwHpQ4tZvpDpCAqNWLMp7yYC9VGmMdLTPh8iSvp8iQxUTdFm5vDDYyHZBo",
  "key4": "34gtppxdVRJFSD6rpwWM3gFuxyFo3UX6DEMz1ciaAXvXCy1hS1zU5p1mT3tdyVczgawZ7zSq8jX62GeRTqUnzuGS",
  "key5": "46nJTryBwLrmN7MepVczBkkw4FSam6iotgCAewQRHuPGBfjsga4ruftffGvoUGdwqizErP9tRDUmjoYWfsf9wQd4",
  "key6": "3fdViZ9LhH9jysVsrzo9pwNfUrx3g68b6SaCeEkhRamENX2nuJPguZHddY3RHKWr4gdzbgG1dY8DTW8tV6XfqPDR",
  "key7": "2YCLbkkcNcce1ESGKRANkCZ8EvPekEqrvV9czrSUv9Q29mi4GbQy7sJ7b7adSPxPbbWs5NRM3Sy6MzzMtBX5EbL5",
  "key8": "2hjmhsnpt9haLXwrGNNFR1gLw2wnTJbJxzUSKpB7hR9CDLNrcHLUwox3dysBpa1oPQMD4ZfpyfXE9twubyDjtvwm",
  "key9": "uPEkHeiBWELr6s4ReuGsgHxn6niuzc1gacskwcUaBNoZPV8EDkRkyYUkHuxfedursmvzGvqwBvNnWwsbBgjmHyL",
  "key10": "2w4kowvfov1cX66L86MwU6EpRanUvEoHb8eD9EAoH6LUsQh9WCCRyMDk38iCAiEUE34AM1a8SkzaHcTzGkfq6cb5",
  "key11": "5xbUGhnmJhrEMdC9idpnyh5Yw8JP7nMjFLt94ZrdiyMr3n3epTj8YrSo8xhVcoQzagKTKBHSLfEyQVETJxLWNvEH",
  "key12": "5r9urKp1sqz6AbqGuEPpGmuoLEGXQtgyU7TPyUu7frxD8mSc76K77eWGHtDhRHngfYNrTr5FpDS5N2nr6rk1Kq8Z",
  "key13": "3uQFRgs5BSPYwqe7TG6MrC3Ctf4JmJfgawb8882zCnKXW6Wko2hvwL3xaP5TK4PiXdjx1fXkYHCTKggj9YGJZ2Yb",
  "key14": "EnF46eCn893ddgH8n64u9JsKM9gpbqeLh2HHWd4tNt1skMgBpr1JceLCQXHvBfZWf3sz8ZY9t3FEbQoL4ucRvaW",
  "key15": "nGEjpFgVPcz3U3LkZoZhV3g13GnGwcRtqrpYEy7RWAKr1yP3hk7RSQvGbVxCxhNfS34kPAiuW8iBP3hRQo4uwRi",
  "key16": "5dqUA9XouLvV4bKKuLPpEQfdJ5tSy3oTfXSfq11ffDcT9ccbbQFZM37QNLMm8evCy7Cp2c34Tjc6ZUGUjyZZ6TqN",
  "key17": "j3VpjbrAVN7i3a9mftc1gZaZRkeqhptbgUvxpEYQM89kiKnvR3oYV8KsouAHhDUcT7xtK5wDAYeQ2YAA2WDzh57",
  "key18": "4VZP7X9nBEU7UcsTHFmsSNWQqGQ3gseTGPHUADkUEjNvTZjtBE7kNbi7Zv4sAVEdLDTosDeGQCxqzGr1F6ZFYFW6",
  "key19": "3QznF5PjfZFFifyAqexTXp4LCwjZKNtuqqecVFt75fW5XLsSHsrTM8Ub4tF9KKq1s7U3ve74DbqS4SgV1xsUPzWe",
  "key20": "3G3PkwTZaGVXc1pnGSCtVFbN41dhn9dgY2rtcZsfXzZEcek2Py4XoDpSVQgWjnj6NQF21x43L7KNLARdXLHDGuiB",
  "key21": "4QYuKfZXKGJMSPoXYGMWHy7g5XDoavmDsFUSSbgh3yy3SBpSjLEf1vqikFjkRtofBS7Y7QdcoRsKr4zLvkrmQqE4",
  "key22": "2M17ubGqbD4yL1ci9qynhqemPV4pL39em2Ze4nXC1u5jpGU1KFgt6obZ44RDPzePxmmxFL8gchbtkW4s62JYZhrr",
  "key23": "4EejehcnopS4aU9xaufdoM8QLjnznxajKnuS7HFQX7q1oX6hFKmZ6JujKKGfWKohQkyhFjwVFfjAc7t88ehJHcgM",
  "key24": "43a8cS9KUC3z7FLTixG34M7NwF9DqCTRLB94xS2vb879gHgoJuA2u5XH7F3DJ3qj6Q3q8AtyvgUnL8PCkAaEpz69",
  "key25": "5QH2jQGqZJvqNYGfxnyjbimKDYA3JYzeQMix7mX6WnZAdVTso97aWeshrUnnFc82JgiHQrJbWUEVTuJyaWHxBNmb",
  "key26": "YhJMZSzh1kMRjxAK7pMCaCgtiSJV9kcKZtyNJAcWU1B6FmkHzkHr6Ax8W51GmmNvbZ7wAd6JQHKXjB6pgX9pEiu",
  "key27": "3G94bYCfJWzHSZpJqmvQCN2qtrFDJWvHALqateNWToxJWhCDhb25PxuFLbX1Q9hzbvgUS2tt4VSNhjsYSZS389dr",
  "key28": "zR8MGaJr2viGNkCZzKkinLuMmzSZyw13odmqc7W5NMBnjkVkqBqY3aXEisaEx4ziqG4Uh6KQf1GSXDiStNKUR6H",
  "key29": "w3Q9K4y6bMpX8p3ehMrcKuS9949g3NvAwPHZuDgx27Pz8PLSq3cchYL4iEjKUMDb71FNhpWq6yeVPvK2LaZLjbd",
  "key30": "66L7KQZk6VeKEw5CzfC1x1o5YKV1oZ1Lx82aWyNhZ1o15jYApYLxkhXduZARS8SqdzjUJ5DRs9q5W4umBxmREs1q",
  "key31": "aRSkUzwnvQ5Mbk8saB95G7BDwFurw7jXDzkPxnWEVcrVVHgNA63hZPJLZz3Dj7k8usSJkioAq7H51sC5Ahn7bG3",
  "key32": "3JoTJgqPE1QfdBFNLa1yPRrLng3GDnLhSXmUc4q5fJs18VHSKvg6tiJQdsM5bQfYia88XspJuihpxw3BF2Ri3XT7",
  "key33": "5JSEX7cYKRuoNqJ8kQakPPKSpACTB8erBXPQ398XgGK9KWHdYaRiXy9HFHto6CCZerhdYhR4kyoCNxH9N7w4tLXB",
  "key34": "9ffDdnX9hfk29ZBsCdwg7qQunB8vTraUUyWyEqWVXBCrpQcMHYuuafDK1DTrT6Rgd8dtg4zDAu4dCtvrcee636D",
  "key35": "5LB8tN111K4KwvjWb4YYSfEqyBiEp34FY6QdnMmYx32Wb6eupkXxXuCwrq1b4AeR7Lqsgb31Fzgt6ZT2gcSQ5VMT"
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
