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
    "25dC3zjErefvWwsfC8eP9LZVR57eyVEgCm7rkhq9gvtqFvPFTYeEwK8KktyTZ8FvhjbHRj5YmNqbeJgGmQNoaKe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yy9C9xcxmzQDpX9MFAy1SKVK1s98695ecaGux9EeAv7auTYoAvrEoYiewonGNfmDE1nBKfVL6XJyAS8Uc8RzzJ8",
  "key1": "4zKyp8tpijGNNKaLxvpP2axjx3X3aHkdH3hubB5dQzS6ZkBYvsZtojp1xYv6JoS3QBeLKLDdvkgPGzUBRMfb1mGG",
  "key2": "4TRKoa6ArS8zsgwoPqZ8TWNyg94kAXmSgfJL5rhFJ77wzgS8yRHUHhXUcYnbquwb2K4uQACT8snXWukaAoE9Y9wi",
  "key3": "3QeyRGLZYyzueTeW8o6RxYgLTKwnxG1L49VdzUb6CCXugtizHSktQdovPissKrjSNXf3cTA2rTPgKokYdB5wpa7y",
  "key4": "2SVeZHLvBh68UzYVLRqpC6eE9BiqPUWrhx2wqtXW7Gbn8LK1HhWgHPuLDNx15CiQgAfMPVao9iBtXcjgBabUjKaF",
  "key5": "3XJDfQEaxH17UArjsfAzJmeC5XvR7k4dXHvvqwDV9bKpAJMVj88jcvotQLnjTNDrSwSG454WjfNX99muAz7yCJic",
  "key6": "4ahZsHZb75eM5GffAjzKyNLxMeyHJJkKTCWzU9659iSWT6BM3yYTsEa6C6VMFjWSUxdiz5mgRn1qPZjWxn2BvmdQ",
  "key7": "WumTTztS7ykQCa3VT1L4rpV7PxsxKpPS13HFtTiUZiVSQDJLBo4jD1FAsLxndscGUSKgCU838MrfYNcxwWvoao3",
  "key8": "2FCsEHbpNT13CtSBKejeqq84Y4yDay5JNsvjK8UhDAU5zY7RCSYVXuwMYfyTLsx2MXZmwnwvFQ27JnBRHVugjPn4",
  "key9": "3iMreEv8HoGJcspkJzc3NZ3BssDsg5vaBqZ2wWSzm7Qs3ZgXxaL57KWKuTb87SBKAAuq2xHJWWY51kGKzjPAkJcm",
  "key10": "5VBLJvYbfycouVdyEz5K9WKcmj4F4TceiRLFkJpjbYcKUQqBuUYShW5Pv2d9BpKhAxfa6F4yX6zTNKsf7XYXonmK",
  "key11": "3rUnEYKLaFbZSJ7wEqtTeyfLX82c2BL8kbAkSqprYDFctX93BEywLXCpBAu2zDeTwWNG5DuhgU3oxPLLfBR8VU6K",
  "key12": "3hL55C8XM3RAvokDQ9tZLaEnj2YefkN7Btvf6qTJ112KCTGB8wDmTk7PeCbRog2pXAeDffPsC8PgwMJejChqofhr",
  "key13": "5RyT4eXWk2jYDiuXKgTrykXSuhnNstSqwSheW1qP2NQan36GGkr1y4uDTvV4xj3j4woHd8RnEW4kRK8ZwT3beYC4",
  "key14": "2rB1rtYzqvEg8gfzGTUBNb3noTPkDcXQ1e2ad7qYQdgkYMwLmzzGXmvv1yKHjQgVKp6cYuaPgeyJPtiJiHv7xFkz",
  "key15": "EU3TSGGVXEfYSkNHu49tWXZAPKnzmaz7gce4Y5cYPPT5pLDaeQjKV7Pq9tGrfXQqjVYK687BqxeS51bGDZegde7",
  "key16": "4NBquuCp6FaMx778XjXrzuoxuvKeUxiU1Cr8mj1RW7U69NPpnAtaPpPSaN2PSYmJ6rRZSTuFahPPeyKfF9h8SWFm",
  "key17": "5BMiNpxWWQXfmBwPA9MTFRrqmJ6bPVDNHWA64wWNB8PsW7dceLd9Eyo5ryvVpSynGkRCyg8YsFSwJwtUE5fSKbJM",
  "key18": "5VbPAeAfxukMmKi3uASPsnGuddeYDwa4oLiqd1wJaB62ug36e5F4G2zqtjeAXxLbx6f1XE9tqRGooA1oUxLBHUkG",
  "key19": "5UCX38vNAXCt5gskihvfiKkqHVVzs4mCDH6c5YEWen8SJXkQLCHZEpwwacRuonSgevBMBKHz4SRHkGbkv9XN8Zz8",
  "key20": "4qeJx6zjmNAF2E2zxwcSviGBbpFzN15UKBzD7ZHvMrCPoSNATA8FFvyCPgwm6eDX2Xr6UcB2GpNYKm8oqvfmmHn7",
  "key21": "UMviEFhmP3PtxiJzYdP78Va1YmetY8je14SRvCGrDerRk9ou5jLM5mqizbwFqhhzyVie4ngZZLbSLBQ3xXEDbpV",
  "key22": "5gM8bN9LFJFYsUZsTyaBRWLzSvCMkWJj3LbRQ8AHRf8LEFCykwG5hrjKBBWYuFvLN41R4335f5SpeTJktZVToipP",
  "key23": "2xdTRxM8fJzZhsFvkcdSvJtKEwerMbjaKZeYx9aFrZP4aG7tyhVAemfqdbchfW2xb7sWibWQ23jd8CZdQVn3i7on",
  "key24": "3rbjP2e4d4JJ3qThH3XEkb8WYAbKHykKPjrc3UpQ3YdvPLcKRvJaqsCmis6MUePN6hju5jhhCGCeTZHT1AoABStW",
  "key25": "2n6yY45vbd8QUwDagnMDWbEQLKsM3dxV7vwbUJqRMFWh1b2gm2VM3YHf8cZwHLw79RdsbGvhBAqE9gdW1WQ9kST6",
  "key26": "4aV2meey3cpbScA18HLJ7od6KgWMoe7krtVVuPr883pe7MMs5wQ7WUevaEp74qfAi8fDp7qVxDKQhRvrxSqQDNoz",
  "key27": "3df5aLB3NTsqFQAMU3KbFhAgHUFrV5wzmM6Ugev4F2qCVw11bArTsoBMwPctS4g5qbJE5Ha6bc4ZcTFjwuCfMiZt",
  "key28": "4z5RHLxo9SA5GzZyDt27Ujj3DyRbnW8maZZxDBgSWFaY5LZYYZZjkSrSmwc6Vsma8rgV5DpYnyeRccyDbCNYezyR",
  "key29": "2LxKWY854CM9Lj7mVRt6Zij5fAEAHPsgAz4EkSmpt7uKUXPg6a8JmFkG7jUc5nX7Zk2EkDZARFzG78U2oMPgTRix",
  "key30": "3Z71VoxBaHKHZkeFGr2xiSjhHH2CdpZ1k7DX68CgP9XJQHq3PwUShkgTQ2axqSaQ67vXQupQ3UeSLBFttyMbdFUJ",
  "key31": "5BL8SyNwLWJERE4iQRe3Lix4TwoxJkr9ANVjppNrZgLB73ggzpZXHbQZj1k2Kf5sVQX6zjvhm2fN13EQogNsfBU1",
  "key32": "KHYUQFbPRDoKsdc3Ttd7yDBrZWojPsQ2HHBWwzmTehGyMvCq7K9BC43mFVoaJV4rCYfy5EAx6jY6aihGg3qcnDK",
  "key33": "55SQ2gaXZKJ8gEbs687TyXZwm6hRT6k2jmVPFgCpPNdEpuDECoAVNqvHxcJ7cxGssfx97JHXzS8cx8jAbJVD7xUu",
  "key34": "2d7nKEiZ7NQ2RaGfPAdUDncPpxSrgmgd8ruJAXXfQz3zUVAs2sQFUwXWEa8rjJt3LgWFZEHPUgcovEPmoquukeCd",
  "key35": "2W6xhNTw4NC1dis7KNNYNE2xgshdaDhXK1tF3T8YuAtzaqNn4WTyrv4A1LozeeZGNv29jfs7t7xxBKPAwSkc8kpy",
  "key36": "2H5vBtwiBisftoNcCuUbazTixWip8aTQJAuhax9tqJeLVVw4beSHBacw6zV6etQhaFqaPfJaAKX7EQ4JWFEcxShx",
  "key37": "3VLYX22EDMJvpUNDNJQME5TC7WRbGVh2Mk2pqEW9bqtG8wgEh5aTJEf3kE3mtw4vJhZD6fKfXRpJSAk3GF8FHeBY",
  "key38": "5BBW1J5dcxf1CYunALA4cYq3rTzFijPnhdhyQd7UiKmDE5NuJ9oVkFnuodSs48s9Gh6meVDxTcg2cBFb8FVkkNGT",
  "key39": "4UMLSdP2aQrVNV1tZjmezaYHKPK6SmB3WHNW6n478uo4kDTDTKqaSnqkFGxoWNa8Vz7w8BHCdzqNC95vqegH8g3U",
  "key40": "66ZGszLA3m2uyrgCX6Gs9t8GvDiKbTFetWdpsZHQy2KAo3wXDB57Qjb98r7MRJMkVtTK8euX8mjkhDeQCpdXwyLL",
  "key41": "517EwMbPJsJBoHfzjhGtvGCuxft8SWnnzcNgRA268UvKafhbag4B5DhtWfiuohJ54SENregLtunfwNsHWuNjbp69",
  "key42": "2PrTNnefdBPmba4WnrWwPCFXnSk6P7uCDsdvxXper65BtX4wvJKqWjd2b7eMeNnFuBmtNriztk7HDPhQ7jwhvVff",
  "key43": "63NenhcFgk3kBRxJAvAbqwx6xEvqHWtWhjxjZZjijUHBEAfi5afJoEyjDWPQ6Xk3WdwR88JPUb5GNG7ZSfzp1DdV",
  "key44": "bbGitBDG718YM1z1eUhxpbArh95Fcpnn61AJKzoq85cygj4J183er8aLHGTcYtTkbw5Tg7mTnYp9UdCsWMvAheW"
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
