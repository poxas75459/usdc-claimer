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
    "3suVTEhQn646PfdAYQqDU99gi9T6TeGRoAM9pkMbqkD5Kk1KzLL7RqYBRUDQxvgUEGUm9uGgLTeXPvSw5ne5v8b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDfwEt73cZE5u5x7rQ6gvEeaVso4PC2kSQPruqL9AT9g162VyfjXGX4FQakUn2Q8KNiaYhFV44ek15GxFFvBWZW",
  "key1": "2ZfbvYAg32pimJsgacwEx328BTiENFmaK6ui2ecDUffZhKsCKyaKrkArdvAbAfp17MjehPYULYup4hhAewf1WXCN",
  "key2": "5MsrA7H61p8NqWfYJbPpcGgcziJ2PKQSLbEy7pqu1uWiH6Wmw3pVYJc1SdvcHuqHgwc88D6kddaQfpx5ykEcBvxT",
  "key3": "52zpwAR5wFPJtXDjdL76RLDDf567sHUr6QcNhvnR4tGaW6kggdKZJ1wfsQF6Q5gtvN81qV3x4aj361KMKNmChQUh",
  "key4": "WGVpRsGzzcCapiJmTmtRyxBkwYgx6qR5DhAAdeaAGj97gpnKGr9Ha6Vc4medECb3fzBLLi8cnJPXZHqxNLPZdMR",
  "key5": "53KovBdC28t2SpkhJDsGqHjoRazepeYoJPW8yU4ydW1qv84VLsNRwSkr3s3aRGRRVgG9mFpzAq6znBn4aFdSE9Hx",
  "key6": "3FdM8LuUtfJfTZnqUSNmzoT9hwCbXonYnu8G6ksAzEYjSzWgxJ9AXUWGpZXkRTf39bYdZKLdzPBcNaAojumBAMNY",
  "key7": "VFerqBq9889a1x8LqtkGfCYRLxJsCyKK1qs8HNXoXx8kE9UUpKhA7YvLLRWU2R6SWUVqXkDH15Y6WXwfdf6o7aG",
  "key8": "3WvuYgFJ9FZc53QUSKDwudLK6LG5WDFm9XNwYCTWXMCp1LdsYY4CirH1AqRGU8A9iGNgmaXrwcn7cgc7CEQ5XU27",
  "key9": "4UEkFHs3BZnABvWNH4aRfcsS6XKEq1WwF4mSLiTGWeSNNdbax7gvpu3ZJpEMoFkvCDLx4kEZ33DsDwTPWcb8DuoK",
  "key10": "3oEhozhcCqK7bmwaCaStZs8F5bepwbuDgyZ9DTydcK4FjrG1zjsmsfW8p5zSCaxLEwqxoaFocGUKV8Xq8XqrXgEM",
  "key11": "5t3BA6WbCHpeVTouNPojRhE2EyrGMaBXMwXcZRDyonYPXfwCoyZ5AFCZYyCc8V2zKqTXtpUrYtcnxhpLghcqYQGw",
  "key12": "3kDMJmUvVNTQ1S4npisjHtfDjQG61jRaepip3aLGm26snnAdcjGadc19vE5qrNBGkfpw6kCTbTVp4eBAtqh5YaMj",
  "key13": "2RBjbX46Rtw87rfKMC6SBJjxJUKSTRcCJZwtPDnstDutUvD7KaCPuvb2G12HqcYCR2pUSwhXLdUvbLgFj61aqU1z",
  "key14": "5n2Xo3Jzn9xcsBxvkHQzqmy7RNkXguoneNF3Pq8q4tnevkG3p5rSvjeCiaBpb3qkPcPiroVNARNHdA9q1hiWPoaA",
  "key15": "5R1nfBAJBoYVZBN22Seej62p7yKwxD1UY9jFsHbqYzj6QtRcBEbzCnZTApAt2yjJGmexsNJ3TeHmofxbm9aiQvq",
  "key16": "5sajb1UhnGHKFfFmGF92daUqaFRQDPYRC7E8CKqBPm2fe3fC8W1nX6tuGHeiruv7Rj8aESFbb7Qud9v7DGP8eCr3",
  "key17": "4rfJ1oJJzmwk5iNwibEkwUDFvqsEMQ56Mau6JYf9Erw455Uhxm6VA9Kp7dmqD7UUGEANSDC3ta31BNTJ5HTo1Kom",
  "key18": "E4xg6ECumcNQ99MiY5zyVeHQDw2GrmpHp8aQixgt6zXm5ENefyHN238LZGsWofW2mrMMtTqmeu5cWKoAi1BBZvk",
  "key19": "4ZuqhDX7V7ZBLjwKzhSwLsunxMwjghgswB1FWAZPvkmagKY6cEQ7uTqcirfdkqEwbvhcKJWSHk4yakcbnwe5sgPH",
  "key20": "45B2J1NbQTdscgTmDze6kt8NsqobKhxB4AurQvb75jgSEh4RCu6fDHbNAersCbo1n37dfpcTV6a6WufYevtjr2eo",
  "key21": "4yj6oVA7zYqnQGCiahxvin9RYx4L8Wwv2X23VxoQimsWAKq38BxYXTQpdC6kkCTmSoXMEwS9EELtKzFCtueCguoQ",
  "key22": "9oDjuV7dYkd8LCugCm3EZKuBLv785S7mG9ac5Ye9rqukjDUE18zurSmxhW4yLAzr9fA4BXfXEeSSR3rNuqEtTfk",
  "key23": "74z9vjSmNtFc9oP5rxQBPpFiQMGHdUZnAkkuzkGoqqu8tr8KbWm7gYQ7Jcac38TxzCQXHgMKoJmDR4Jfykf74QD",
  "key24": "4Yey1S9sUCrK6xFXMvTEe33v3KMPbRErfNfyDCFVAbU844ge3TacTFDMCL5oUw3wukSg1TFjMt4miyuL5Yvp2DJn",
  "key25": "nu9GEJEjnoGoGG5ovQpWfnu8u99T7qx36hqH4zEfHnJzc2EvH6fD34G1cG8DeMsZJicdEwpvsubNqBzW9SBE3xe",
  "key26": "2bmdBW95x3gwjyEHTWE7TFjGaJUJHJWo6dxK1dhbfehPmcrQVtW8v7RN63gG1YG7PseN3Do5SuTe6TrmJymkrHRo",
  "key27": "2R3ZykH3m4EFS6i9gwKUPPux3UqxTbR9rzJ8zLwEa8wwRJQGHipzaVUzanahrZDmFyhk9g6keUJd2qQxwFPt9G1i",
  "key28": "2hQwfXmrFM1NTiNpmk3QY19AkJ17P94DmeQpv57n4h4kvWnECU5rnbdtwt1XVzB3xLQcf5nYjPt2m1dNX3oRktrf",
  "key29": "2ePf5KGAayp9ZKr6xbkbxj6gFxMRLrDfaKANmG9SN2X18VQoE9aMVmHKUxezX6MPQbSchTehHC6zzeksFmH89g8v",
  "key30": "iJnNSwEFFpuDNEq6MHbPafnyQpPgQ1GXqbAuZcu9pYNTf2ygwFL5BjwixX5ZWNg5u3pbvcaxEpLZUrxyuKbpasg",
  "key31": "5yntVkm2Lk94KvGzj6SGv4XKDWziHf2c3ELNsWWznZtuabx2ukDB6z61qbmEZtezmys11ykudnQ82JwS1CYiog4T",
  "key32": "VPpu1RZA4sS5YZSrxDjEGYy6JLz5yDzZ5u839x5NCXTAMv6CsCapcafoCH7YNAbuYbUS2BhN9W8ysSMgx9vzDjq",
  "key33": "5sKABSAaUxPDkwJkUXMj269fRSLCYgEwZFK2Z26EvCuFd5i1jLaN9KPobHuD7HzKbynzRJrRQVLrLMJchVp1mNTm",
  "key34": "3gRfBwNhsjS5qqDdpgwpSr7MZBMSkVHFu5DK5iPZyCdxc4996bDDKe6twFEMUWuW2srhDCumi5R9PonQDYoEaiFo"
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
