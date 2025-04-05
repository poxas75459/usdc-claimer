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
    "2YbYWM9okEBm7MWorQdq74jgheatDFowS9HfdxXgu83X3GowY75Ngocsiw2rBWwBGa1RG8ofnekULh8nVJc1meqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYiytA76JbqsVRQ5gE7ZQ5RbdByR2wjadBusjJjphV1C38YaWMeKdJoR9LSbSeYLT3dkbYkdkJAwNRsf1uiy8VH",
  "key1": "2zPhn4YnEYh3zzojtZ3hYrjitmncTVUmXJ6RG462QLK5Fgn4dKvAtAsTtjQNhSHeJoQCDMoRFoDiszZP7Sa9Nfr2",
  "key2": "sszxsR2zibSA6vAzGE4PFBnvJWNNd3jB6deYL3ETRaupvNyMJ45hCdzs9xGDcFVYoSVyacNg3uS4rfZnyPFq5ik",
  "key3": "3BFihYo7jzFohDqXRHqoieNaVWx5qSWz2cdGXkcoaut1H1YfxnZSGdm3ZehCzfcTd2EuFgzrGNsQpxMEwiLoJQG9",
  "key4": "4gBPxBrZY8mt134GBgDbPaRtsCa5ti4oq7FDHJ9v9Rp3BgkUTn8BdYqofuZFR5v8Pcnb9ACTUgvcT9nR63x7kG3j",
  "key5": "5qVJaMyQTJ4wBC44py78VLenG8utQ3oTjPBxVjBbTpNEvW3pZJJMDAEgUrrT7hHDVK2T76dhn27qd8JosPQrpEZ7",
  "key6": "5j4MVz36wGTxBkYLyZwng3LQzi83iYuC2fcbebiLZipn3hFrnWoTenXgLd65zeujXNBQj3P7XCrzAQwndv6J6qVA",
  "key7": "5uNjf3itW3wPcnAgk58B3SwW2Kj9VyYTyZxyMc9h3WAdHXmy9DvgsfMmnU5xdk91hpBi9hvDJyxoMzMtv1xuKrhJ",
  "key8": "2PiFTW6J5msdESwdsHC2sRRAeq9yAEqTnyGExzWBApu7jnFVMk3dsJHxHvkusBLptffG7ypk8i3Y8W5CPYPnZNxT",
  "key9": "616WLVYoqNEd5GPGBRg4xVjgzgLwBocZjt542EzHNbFwTBeFY9EsSJPdDUQLJfTV6TK8uFfDC5dvaDaUPoVAxnzx",
  "key10": "4fiWMA85p1Y7GmWDV52r63EaMSYRp6ewkdUdFSb6gWkpkAm5SSYWBF1FBs7MGNQsymytHkZzQkpmskhGdRMXWDqq",
  "key11": "7zrabJ4W9pwQccgGM2oRqkRai3orzwkgHxGMaTvyKjA7KuUypRWH9mRFM9ZQ1QG4uZd66Zg9xry829bAQWUuPyF",
  "key12": "3QLJX1k3bHejqge5BGPTBvshdyaJZjNQMrZ4c4yok3wj7TyHQmYGrDRQRixjFm2Qy94ASZHc6MV2CBuJ9WFkMv6J",
  "key13": "kxRrekNrK7bwPfnvipKQrtMnTgmuqpVPkTh6beHuhqrRhNLDHp3cKWpz7cBWg5w4bqGyQ3uvyAibLBWAWgXoDkT",
  "key14": "3kMgwrJPGDENbhNsmd8YGwu9kYzne7kPx3fsGqnsForrhJPNANAZvko2iL53mRxeWmNvqVsTjfDQneVWSzVki2JH",
  "key15": "4otdvoKvqs9W3pH28LHkHMB326phY7SwScQEFFfKvKrW2iF96E4iXxjLAEkdtn9faKqEYicsLjuGDrHYnv3tk8Wp",
  "key16": "2JTKPUkJf7b747oYdd6J9WxQJkcmiYKLCbLEQoPJDe2GgxJWigrB1xE7xuNnmgTMfSSTcmhex9wr5WMJfVXUCgb6",
  "key17": "4HNQAkieWVk6PTkQbhDTTUumd5yAPzeC2Pvoy3fxUXBK6hGQGZDbEVeyiktjscej4wdawHyCmnFoy8P34GbyhqfZ",
  "key18": "3poq7azzGhia7ar4Hnj8GhUNyETQtkWUUFMbY1qXHfdJN8dMw3RDLoy5eePhrp9SqdCjKfUnwc4cpgUhg7kwkvL1",
  "key19": "3MZuJukc6rJDoE9852gMUwMfj1n6gg9BzbPWETDPwCHTn3iT9nc51Pum1B8Bzj6JnyJeNdxbdwzQbfJwb8FFMoF",
  "key20": "4bzVKSUwLRjLpqBUUS4M9RXCsuAQvB37mxtSVG2QUeFsjNnQqxEghLLg6RLGxPtV6qwkxEVJwM6cvqibHw9iLesf",
  "key21": "2o2bzDv3fQA9FbjKSvT1MiucWpQbnputG3m5J73MXTCkiMxjNFJVkMfmxrAbHAM35hBVYpY1KXMVdHhvtFco9Uue",
  "key22": "8BNTKhvKqA7ZftQEgMw71AZSTFRYGFp6bog97qME2vop1s5NHSfAVdGSh33hB5EuRQ5oqPm9NGRuWmh56gz6c5d",
  "key23": "4hTrASShW3BTRNeU86GZTuEpFkdW6E4Pvxmb5FFTT9hiCFh5cGs2MYB5mq4TVjoXBfK95TJ25XrA6GenzD9NYr1x",
  "key24": "4WfLAvzdVhpMaan3xhVc2cH8McXCDWbxqRiqbgh6sKGoickhh4oLhkT3FjiCC9cXRiQu2xfTzSjfNFuM6VFcswkB",
  "key25": "3vddnowxzNhCUcESEQmVXPjkrHoyBsHmoXbWR8Hh8WpAyasruEacQQcLwdckL24m7rWqifrdhGk8HRNoimKiRFvy",
  "key26": "wHpEijNmXPd53sMQurm6A1cEgCCQEThmceq8J4roayXvTTuU95ALRHxY2Guehzwb1dJcpbgwHtEwsvHZi1Mmfnh",
  "key27": "5nnQJ4pRXP9FiHkJh6iYskXtGAJgx4gDcXiPJZDt6EAGjsW68hBALmUKXU3hjej1UoqGnpAbR7rXNU9G4D5VUAXQ",
  "key28": "3dm2ZQ8pXwRFH63YPEaXy5LgQg75d5jGBvWGCNswqReeC4fpP91b5HsApV8yxwPwp3893vMrg2vcBGr4rwT2ZyF",
  "key29": "33Cpbx3AUgYy6g3dzqfJsXbJi5thinUiMYKoYiMD3FvyanrYhrPq4Lzifm8zPGHDdxp7BPnBeaUW75LBaHyqbhvQ",
  "key30": "3bApbLhbvxicPDjYLVre7iCdLBTE5RMxHjz5wKadchY7N9Q11LGwptJX2Quu9VLkUng9Uu1Rykb2414zHsANrMCq",
  "key31": "5aUHVDrpUrQ9bPAnF6upgXjzwGaNJTUATHcsaZCcAPYEXAtD47c7kWafkHdjxH3S5Wny2KPhR2D4r5oLfV4ZzQv4",
  "key32": "2TTsfdEeU1AXHrkjbtmKAebT9yYk84dBTsygNuxNfmE7Mwjgc2u3VfJrievbSFPg8yhd6fc9GZY47XDc9Z7wfRH8",
  "key33": "3aXbwWKJo4KP2nA5cyL3cnqrqSFt8YcvssZDgHZMQRrM2JXVVcGPCnVZXMyNGMxDyPNK2QCXnWPQiTCsfd3X1htL",
  "key34": "5jjsnrgkgYqnxEsfrWweWQPGCTUovHEgVXv4BoDoNf3v3i5QVxjvwM32cDfbwEijiFVYax99KDDDpdRGxXSwayLe",
  "key35": "3Waj12aPLDDe5ux6zkXuqwftsSbTbyHEtKxWtXN9V4WxR7ah5qX4imYs6k4CBwL8vU9WHpVpWaKBhidgGfSjkQmk",
  "key36": "2mKdGNqVhJzbg1Sue7bzPVvcjWTep3uyZvgv5h9GPvLAoCiymW5KoU4xNn7GawnFFShR1qa9nT5kTUcEShEZmBx8",
  "key37": "4kQn8J5TCHsNFtybAS27HwE1zEXd5yFwst6voNRscoAM8m4RWjPMbpTaK2vjrfufH7ELp7ry7X7SZmSdWNrw96yA",
  "key38": "5f7bZNerVxS9SLmDcbZM5mp23fbHgomvxvxCVdXLq2vaQ4ixWHsaZjHFDNvVJ8bfRRKT64ave5nb3VNsvB69cpBx",
  "key39": "41vhAJyP2mcUQ9bx8ACeMxZapznTvbAPtxyZsAgx6pYNbLuwQ5NBYeTN5SDXrWxyZ32wVuK7Eu8yeADAv9ASbFRk",
  "key40": "ccD9wxibhsG2gEmvcorp4YF46s7ZFBJkN55zJxzCVpUnXAAaAh2yhkyArCUKDXfYj4aisLbahmPDNt65RGvN3hk",
  "key41": "57tLJTn4A6QfhvpPttWFXCcqEh7eEzNV8QszfbRgCALhC1kTmAeQGRGPpKvcaTgpjgA17jF5xcNcYag4hBiLrhfz"
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
