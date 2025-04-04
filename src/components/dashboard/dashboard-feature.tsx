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
    "65vpdsP54iYemmWbkBQQ59sLaNKFgsDM7nk4ymM1nZz8NqWknAz2PQqVJEBBWp29A6uChGsph51GT5uyACaELz3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DNWTScSQ4tgxCtmcsamXNCXXS85ZSpL4aUNb9YTg4hx3Q9jx99GqGXR1AkGqMM1rvup5JeqQzBFMX7P9EAHfM4U",
  "key1": "4sJqKHZYUXeL5YuzszN6LwVCJJNn92F1TyftwseXWdkvtj25EYwH8WnWuHiiG8a2YBQXmxVw3dEhKm8XnLw7jzZ5",
  "key2": "5dNML6E9iTMFVzt7SkrRBL4eNfRmipVuzb6fjw8KbvSvZcevzymxWWw22zDD5FGge5dUftWiS6jdPKD5GHPhV7mE",
  "key3": "2oscixMxS4DhtFXJxeA7Vo9w6t8NuQGZyDgyVs9goYj4MZCYo9p3cauFoS51sEDPwynHkBph1Rg1cPKUK54Dnsia",
  "key4": "65kSe41tG2MbNxFfsSSZ6eZ7ysZchvnc68yJ7AzJnpHfQYo1KqyUE5GfDwj6jDMqWHwK8ANKDmmEJ1sRhyVm3UVo",
  "key5": "3ks9j5VeUHE2NjF1URgjgbDkdA7iF4dLpsATEJm2cfWYcVE2RbMkN2Gnq7GksZdpptzZQby8iweop5miM9LcDRNT",
  "key6": "3dZciRHnN5wxUHbERSGyqzbQAXoSP3R8TvsXEmEEcmn5zZVcWF1MPYbovSTo97GJcRi2GdLZrWD2WbS76zhU6UUg",
  "key7": "2Yq8wz1stUTHVXidmkxm158Z6Y4wLSBFyWKC6zVNHc6usKGjNEiHDPbWGZffgLsjV9s4sQcyVG7z3FPiTH8Rjepg",
  "key8": "X43VHyHt1oaBSdrsED1BpiCDsz2AmDKU8DrPLgirbCzceBQVeoFcVcft7B1hHNaJgBzxsUUyW7VxbXg5G1KCMSW",
  "key9": "2cENW4sgwnNDHFvnEE55XK3MtUGMSLwAHqofwG9pkjJJn2gKxsihg7PBjUVFag2BMVBjysRdRsBV42TUKwNrKGwQ",
  "key10": "34yPg5zCHN6Y3EF3zzttYfZ335zGWwQbkvMyCrA8TKE4Xkz7DV9vhQJWv7eahLEMfdFsZ6FxsgiizDpD4a6eJNZB",
  "key11": "2hEiqT5wUfLDyoA7PWNmRkiwMjW5nuJtwfHFYJFc6aHPKpxJ8atPYzHZGwfFLDyVMNt7gr633anECskNSMznkrkW",
  "key12": "5AVFDJr87VtS3gD2tmuqwCvsgHcSDnwWn7xD1pZKaWSfh2Hw2rwzxLa8YwKXZbbuP5RhQ4JU6f45tBfsQvuxZUeF",
  "key13": "5qWCwBJ6LkSv1Dys74W6293mNQK9RXAcvg3A9xiSQnGVw5VvDbtM99xzUN4rqk9VgzX847uKd8LfiUtPUQTbM8kw",
  "key14": "5r1kh3fJUNZJ4zHQ3JP8DpuX5pJrGgRgUT9Ms5S7SqpAE1BDgVfg2mAMThR1nwyPBkSyMEaF2JJ5AjdzsuGMmztH",
  "key15": "32sY2yB7Hp9NpbRjbvNCQD1cPvNqaQ3hXe3QdbHdYTKn1ejyqBJTLjisrqibLoxG3W8Sj7kb1vJwu1diARYPK2uP",
  "key16": "RxorVebMLqu9y1N96TNdiBNEJXK2MDvQuji6RLmxTN1Ju6k5t8z19ptpphpJGY15pPrBHfwKbPFbsaPMsPdzGsr",
  "key17": "66sZx9jMD9YdtRGqwp4MhN951rc1kyXzcwgnVURgUf3AptFWt3bLyA7sXJe8tCkTzd6TxZ4dfPSZrm5sbe6PmtXd",
  "key18": "22uMWXgGKaK6S5RXbiefs4XhURA1CC3RDSFsLHHQBhDVmdBypzXRuz186qRBYcZ8JoKdYsFt3hh8PjYTFvsYhhE7",
  "key19": "45ZQQNzjbcvQtKWVY1gM9fd3SXQ25Rzk9zZuKVJzw8zGsAou1jaeuyyeuiqanGBJL5k9j8gQ8tqb8E7zQ9FYHixZ",
  "key20": "5TyDY8ErxArssXRLEnREKurJErqLHp4g2qjMmNAgALtQjUrnx4BBb16C4iXYzptgDWcnU7eYAo9zkyCjFUgDE1Am",
  "key21": "cF19ZdkT8DGfkZkMPqYccA4wRQFSnbc9CitqFaBtJZVSfMdWpXLerPcD7ZPjzKMaDoDiyKC2Gm1zHRF9m3tDmt2",
  "key22": "3vbLwsKmxWh97RzPyU5KvpPjkj49mVtPMCq1KRqN5zZzApfeB1DLE1DCHsfXyBJd46MfqKkaaFCc7HfrkDqwLAe4",
  "key23": "CcqSzs8NCwjPKSARn2T87guA9ifDZEo6didV5NArtJFopqb2SarX8vXtNw5KRVdAAZtj5VcqcNB3AGDzFuCTjN6",
  "key24": "ocUNFvw9MhaP29SjKUgJS8rb4fmPaj75btMjjEmso2MuhzfiG36GsTYHr9Uq4mrLaCcCH8UiVibFKWTkPJPBsd2",
  "key25": "3sS4vu6XNMA1LGdSjiAtFRwRCjXXBwD8tYknxQRotmLxTtgvfCfYebZu7UbR2F9NFzBanBGWfNY1iMPBH3RAZxg7",
  "key26": "3MapR1EPbtFkmo3DJo99wpuGV8SF6aTpJ1wbbz344G43GBP2Yy5aSeUtnjJY9yT3whPXevEgkVBEP4tjiXVJYbh",
  "key27": "2CBoMB4maw3EPVyVaqQY57PPQUn2WCip1ERsm8S8Dgy7RHiEWa6c4EC9LBQiLDD4eMhSfTM1kAMsEFrwfPdDQBiU",
  "key28": "sTPCbyJHb176ATnZPCGKqdTZycWNXkE2nvKjSJbJBeUz7HZJn2ihRa1WQHN7kAPWcQAB775Mh1LDkNRnusDfQGx"
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
