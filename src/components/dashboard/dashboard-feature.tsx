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
    "41DUUM9AKXtvkCkpSjQ9PdAGqUJYEES3Rb9QG8S8WYikvLhnELtFk7JvHxW5Y72userknuqtuxePh5CpNDfZw2rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwrG4wxea6RrHRRPsuikNzAB9pomJ1qSjq2ZS7gwwRzv8p2rLNtUukm4j3NMe9Nag2mF9zUrGLL3wLgc7H3GSbS",
  "key1": "BgSnScucxgzjPA6H7qyTsae6efDhyxdLdYFfEHnZB88TEvCEekzHSbxDKCKRavwhKiotMbKWgrwuGHBFUHYsEHR",
  "key2": "PBvSj6ShX19mCqHdLzhEB2JTreZ4FPGJYLKsAdT46YM8DZbnw7Ar3CXJfQG4quh67ZSeREYmEtZBQLwi8Dg6fCd",
  "key3": "52KMJqkcrWE76FpKtqJB8GWFzCBJ88oomPk1WuAtjQoWoPjD4f8ZM1HYRv3wHFMmVg1Ez7vsZepyynSw4iyknggx",
  "key4": "4v8xbkHDzwBttSXP2UN7Pfwik354eKZYd2hFAydCLcsmszm5hb53Hftiz8pix1RWUmgF1LXRpdbRxngzF4smB7AS",
  "key5": "37p7rA1hBVs2gLAP7xi8MepuiQTSGjhBk4paf1HRDJBQXjZAkEGKubGmRxuCfTQZVaFoMiDeCKSDWAx7ze1TvTtH",
  "key6": "htdH3yxSHdNNNuycYpvxPSDiWLMyrWBGTL3fJ3Fqkhfnar4FRPicinXnKPQgnKLpYecX58ZfZFjYXeZWhHCSPuH",
  "key7": "2Z9vW6qnox2Xn4ARqyaspad7wdPgMV4fuM858YhBMEPSA9uH4em7b6mNot5pnwR5NcUwgpykw6qZb2Aw4QqG2RMo",
  "key8": "4AKFMkx9U6u2Nw8tJWY9WYUzTk9bN4Yesd5T4CV69AFrpxbW5tfqAHUKujqwpzoUusHRMxpmrJQB38MJFHNLdB7v",
  "key9": "4N9FPHN7xr4rT71mCXHwuJmAUh8HHBXkozp492Spz2hrpUkUDvika8NyBjLymZq8LJt7bS9UxgPQhSG7xfSafc1H",
  "key10": "4w5gVubtFYrtF2dEHGsvSuW8VDsQ9n22K4XaThfLtEFQKopRTrWh2ZTc3jqPtzFmzJYH82xPoAmFLVYE4FKeLw4z",
  "key11": "122fuAANLA3ZdvRfKRUt4CtzUnihmsxLDZsUwppfR2aPFekbbcwezQaGzCDV8qUSikcw1pdN5z2bEGnV6GTq1JAs",
  "key12": "4JQQ2W47zDxeSV9LDrrve96Y1AM1zA2peUNtfvNHcqbeki6EguiGxed6jxwcVRjvQfKrmK2ZxZZcgQUopkYEH6MU",
  "key13": "yanJQ4L3H8kBsQQfnwdvG3F6pRWoNU2PcRvGXXCE8c6PLj9yrzrzVBb8zJbe6RyRKj7wCVuMPr9WTQDjKssmJkT",
  "key14": "93sahFVtqxybpXVCVgUjM42XEbAUMuQzS6zzFCgKWHSXaZpkVfEnVRBEocmYPUFAduMwsY1u2kCzyHe96FNQkWj",
  "key15": "34yHxSorqY7LJxFqzu3Y5n43CySSfStXeiHr1aijuFcemCPfXPBx21LyyAVhkMGNe6ZzDPzFpkgCLTtgx69kt8xd",
  "key16": "2n1v45C5RE1zNBN4bb1Do2pmPuwPku3mHdeJBXxh2UVMckR9i1iByTQzAozHCXFfup8zKVoLLzNMn6nmLKLgXpGi",
  "key17": "EK4MyNssAa7We3E6s4KQFH6Ywof9GpPhwmku5N9sU6vmqzNuFJiawD2b2Uxg3WYz6Z1HVtW3M8G9RjSpvwGBrb7",
  "key18": "3ookuQjBR1kdJgtLA71EwmyzscSGYLt5MVDibrrf7bBjvVsb3YrX64kYNoBD2ZLL93prirDFEZWFbuojuxfAmZtZ",
  "key19": "4BAPdkBqGestJ8r76iNtQHJJ4jSWFr66UehhijbRwobdhn3SuEjnx1xu4typws68DcVoa2qL7TVWziA7qgNc6VKG",
  "key20": "QZXeYqQsafrRwRfWdqKgnVkkHwzWGqxGwiqgfB6CpCH1wiUjyLCerj72rbASsUaxsf4Xoo6DYfYvdPiFNmt4DBV",
  "key21": "2D7r7c6xFscAbHaKkiLZZnCcfzf5wEUJ4ezdvN6c5fKUY5Mj9DWG4bb22CXuK7i24BAk4YTpyvX7QJjiN6pDUrTZ",
  "key22": "5efhXrvYvG6X9MxFrLN144PznpyxHAZ7J4ze2VithCUr9bBKeQpiTqentyBGbJPTzpfoqfi3pu3BtCXtNUT6pvT5",
  "key23": "3dav1N1Eujr8sbdd43c1AtUHHNoTscwqEVbGxrqqdQ4pYt42u3T7Ksd7ZF11ad3ohRSFJLJeyga7b63BVWJWRvfr",
  "key24": "49FHToBZhWEDUT23ko7ZAmA6nQBdWA5DUaruWiUgEXuTYrRhrPQqQrKuEu4f4CSzm587kg7h6QrakmBhK6Zwn7K1",
  "key25": "5mJX1Y3hJZtX1X9sn6LAwz7R9LM1hRS7V6c44of6efxRZ21WY4tMEtMfJPcdmzf1aGzxB5xaxmyS4JVY5RXKyMZ9",
  "key26": "5chmvGqpko2wPGmCBkUYnsAtbukS44smL7qo2S6HWQxv6pP9NXqFiC9yoc5dkVwQVF3FvqirfxANcKMhpL59MZoi",
  "key27": "3A4bq4fF8admDX4Kxs7TaYiR2kCwb19B6LfdNPjFsaaScWTV49LNt4s2Dv8jBC97yFijjMEm2jjHsd1iSmNn8hLR",
  "key28": "5ZLFXw66ybQZ5qyhkXiDdbKYK1RugWWYDm15MUHsSXGv8qMisQ7GXeAKhyS7KeVrjRVUq6ezqjAJnWAHjrK77kYC",
  "key29": "5eVz621zUGzGK9Yu67P2bLNDg6Nhrz2Jzn3j7dhqVeb2ctGjkQh95XoCNoBLFveczk6sXsPvR3hPquqx9dU1Kkbp",
  "key30": "4qZUetXfGgYgi9u5mzc2R2iF73n5qZard4JZba8aC5SLAExmPz5sN7KETJKb4RYo2zFy9QPJsFoseSHgZfavWzXz",
  "key31": "BJSsRsi5GRiqaj1Yd3jeR7EigtRAkBgFP8bmS7XKzp86d6Nrjx1chR6aNegwtTsEhxY9gyAozAKT1215NySDKTc",
  "key32": "3rgDbb1fPnjurvwcdyjxMgbVYuHnomprbmLjAwcGADJHvS4tcae434SaHFTVDfqgX9Gq889StfoTsy2jJx2t2bGU",
  "key33": "26r1yQ8TVFUfzXNXUBm8VgKSM4iAfErFtUTjYT7vVJYgVagUsyJpKfvXFPno6Dxh2nvR3FAec8qhFPWgtcZWRNGX",
  "key34": "5mFwL5EJqTN5zhy7h35azFTE9HXpcavdbcrsyF2kKSM6SNvH3y1th2S6t8ixTtj9jPsatyaZMvnvQgvGewfYsM9s",
  "key35": "4UrPhREQ8iNJTQAVhH7MZjDX3ta7Q31Rtz4HGHuFxxD6zUZHLxopbr2KeukFz6rm4ttRcFXNQuqPwbphwVXKHjhc",
  "key36": "5xnyH6qYqaMM1PQwvUbAfF715rcX4TQHFVWwhs5CXX48pySbamUbEM2V5MwzvXBPKCxDtLbwVZhbkC6xFJTJGdoY"
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
