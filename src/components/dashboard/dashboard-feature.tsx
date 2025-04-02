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
    "4ZQC4v1Pkthf83eUDUVvdjW1ZwNuAmmfDN4PmyRTdigFvsR8tDs65VU7NphehjzQJV5NrgB7Htmgwqgmz1r4eUgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghq49uiaERxUvoScPhWLzGwBTMyZfetPJWFAAFYAkZTdNrcG87p1zap1aGcnmxZfhPixDdU7G7dsRaSF1TC3WvR",
  "key1": "3d41pmLVAQL8V7Rff5o3CtS3RorUJp1BoGiEYxbAdUVoferVr8nRbV5HxPbwhry1cc53Px3ZHaJLhGevcTaJDRt5",
  "key2": "5bpawnMD9QVfQ4yhyLExf3Q9te9ibHgfwNzGjp7aCHRQMHrwCF8o4nozm5FuqMaE8o3s76V4msTop8y9joRR6XVN",
  "key3": "8iWdGgn8vXN6Sx6vsN9ujpu5KA7mVc7AaZfqwKhY1BChPoQ93otAsw2x3VNt6dEBzF7K8H1SSp6adYTVQNrLgBs",
  "key4": "2zkwDayaJUDbuwW5hEBSpqgbcnogzk96BDprVPrJxE7g1rBhBz4foR2JKS6PvmVbWSqY4YyK1ZAs1SgvZFbHaU28",
  "key5": "46KBhF92zGSAMjhmnZRbvumtjZgr56gBvTPYtyRqESyuqAAC9nUUeQaeACKXqMH4ZsFNE9QBGoa184hPFvL5NKwM",
  "key6": "kJ2XhjDEGwCQ8p6efZ2fgUtzSS2vpxQvXz16dkDGiBZYWgKhXSHFd7m9tZFfecCA62c91D66ttskcU5rvJNf1fe",
  "key7": "VjLaCcAbac5PDjfeEpRGiUudvBnN5eJ5WKZdq2QwGDaF6jRbdJ9mD4dyfpdY4P5UgPNDYJf8nXeP1px9k8J8raT",
  "key8": "5HtV5tsT32gbA3n56fZsBuFTiMNh8MNLPUGixjGbFRnbai5us2Ga9k71RcGeW464pJqKvKNtYnknHyH3xYsWBSyM",
  "key9": "62kFWhGsXqGjeMbEA9K6yCrTZHW4Lag46mCkgwn9jnYtYdjqz62Rr7tG7h8hb79K2hGnKTPdvnSXCT58LJHpwEtD",
  "key10": "3mpb8VE5rA3ZrhmhtPwmwtZ4LHQS9iw3j6avmJHg56Pbh8VVmEPsuJRtauTwDXop5ELBfcAAANaQKGyuZg1jChBZ",
  "key11": "2kRbXXFNESouWfcTWrRvs2c8YrcKbt3EUjgaGjGY1eksF68vqurCHLMYcJ11yyagBvjcxRJPfZ1hnrpxSKgXUaM3",
  "key12": "67YCFAGz3bE1VR7REQKq21Bw2DmXSEQCvZNpyJ9jgM6enw5uxEfDGT9zzHru9LeroLPs4G9nRUvDKqJSBSPYspHy",
  "key13": "53eCfabqv9JW1QD5vZ6JZYuhcRP3LuRCgtfziSdwxD1FSzXafn82D4WFeRC5urCLXTmy1WwUKfVdkjNABdyUqZNT",
  "key14": "3RoSZQk9gm6HSbxXdR4KZPvYx2ks9psRjn7agEgFuVpxtAXTonWZb7vSBVydFFmWarsg3iNUdaL1t9a8LkrpZE6i",
  "key15": "GNy55YEyJRYeR4Rcacfhybf89gtqLAYLtURpkvhE7PQkGzgPyZYNZf91arAe7vgwS5m4bQqythwiuhd3vdkyWrV",
  "key16": "nyLBD9cR72uQUcRBf9vMboTyPCg1XV8sJNKQF7GTtNS4T6Lkjx6H71B71UUjEUHKAfuM6BsmaWCFh4saeYmywgs",
  "key17": "4hPnR1qETmm6R9QARrWaDZraPSE6H9CwbsWYKw8rmwjmnGUa1fGad2JFZmeA1ZotKtTwggSgoGWgSysLdy9gd5Z1",
  "key18": "4ZCUn5USET6LkSKDAzWG9j57APbsDfhvZEEQDKdZqgsWQdrhBqkZ18tnNscxipTJFLf2p6RcauNA5E3zAmMSBK7m",
  "key19": "QRRPCZkczM4MkXWRygeEGBz9vyjULwMHywzBawynFTR9QnPtvqgrTQ3HGXpuptb5dc4C845oBviVMZf9m1NFZo2",
  "key20": "2GffsCygiyXMpFPzo1Lgv6EW1tcTpSZz2cgGnEUL9MnEw4pU9ZcvHBAZDzXjyisJX9EExxsapUVQVp6tYdLQpcyS",
  "key21": "59raYnLHv6qSz86a3hErtqYbeCqVZ4UQnWJQBEZnhU1WYpipM7yQqo2RdrVQxiKi35zfWRKya9VcJnYMaZgFBKvG",
  "key22": "5EG79kAfHfXYXZa9AYrQTKVba8DAszrnRSwynVTjyHVHvqxCvsLWoN1hhZApYKZ19DRTzY3hyMykMMxypnmnsR5F",
  "key23": "2FFH9Wc8PcMum6t4KiKYStEgJan35oFpbUMKpq11GMUNyPx6YpLzsQonLfjyKGWs8KV72hoVYWebgDQ1SC8pn1Ru",
  "key24": "42QKUT19KpKnpX43rwrSdcwCaacPpaY5ANyrdLyTANzgXvkLuAt4gfn3wXYYZdCCCgBB4svMZ3a8aZL2fBo7KbfF",
  "key25": "32hTQxsQ9iH3ajbWSS6J6nNVHEHAGsQ5xQgvFcwWrChVpCDB6ajeT84k1be1afsUHeJSgNDaa6bANvkPUs4LkqQz",
  "key26": "N1k8Va5YmvuNPbLTmFAKS1bhQgYrc5eXKXxiMrdpV25Db8cwzRZgtAhPzsfpvuunKEkdoMPEVtCKx5gkR86eiS7",
  "key27": "4MGxr9t3Ti5m9Upaq63c4vPnAwXgCwGk6TkV4h8ed4PARYrD5H4aYcHXqMj5GNvj5piLuqwi8Mnt5Sr7w3HExcot",
  "key28": "4mTBx8QrsqxuZkJKkwpoagp5g8GbwcY9hRK6fi4Nr2KowE2k3fPEqfUZ6FT2jX2bvHaQ3vEJKJ1ACTJqihh9nm4t",
  "key29": "4m6dxNgEcGqcAvFbySnWd1WeateAvT8EmDjqQVgWoXKKrRb1HCma5KHA7v3C8UhV4pk4DjTCDFUKTFTUnzAdpfey",
  "key30": "5CS2GyV6o9fJEXbytQLR48BGW29SfmA7T51NN6geJWpDzmH1HsoMryqDyguWgcjmQNEdbPQs1BUdzs5LDSP33D5c",
  "key31": "3tz35N4ndkY7fA6S5Wrwzanwfgq2ViALQkafMH2M6gR7M749MsPhW6oeK12geoShjFHmebgWRvX7tar6BzHA63bH",
  "key32": "4VoaqfhVDd1TbiAW1LSiFz7X7FFWXSppYxguCnakSn2KAu4aAgmYEJ7yEktqWdmBruA59RZaFFcR64mVATg1fAyE",
  "key33": "5YBxQPXo48yBA3caMWDZJe4PhLro7KsUUJAERn21BSwhnFZyg4e4gSP1vQuN7aTMo5sSXFqFmePphRogmQya2RJ9",
  "key34": "UV7AWD5durKoDcFFWThBugYNvsgt5KYjLcHepjU5Lnb6HwnT77mVgTt4Gy7PFavcj6abBvVVPRHfxzW4Brq27hF",
  "key35": "2PL8NBtH9ps2BNrGyuhgoXuMsBSyGrxNnFrzDbevX2evcipujkLNhN5M8UWWAVfVChTvUu6y16eHkCSFMY3Y34Jm",
  "key36": "3pKbuWdfS9KPvDDvnntgJ6djAcNb46VrQLZPmAMXjLZe2wBVsqWrf31Ex8EuFarGEnV4UzCcP6Uwon9D6fwFs81y",
  "key37": "5JjPTUy72jo5EHcNXNUEr6UDpYpcbKnLDGdkb9KAr2WNPauXm3HPXKpdZXSMje9hz8W9T4urJTfL5QpqNgAmmL8d",
  "key38": "3YTikp2Rw8eNJ8x5nj5iUWSGEsR4pbjRj946XAU9zBsXRR99qZComigVMA8QvyUd1y2ZGzuspVb8Zk4bXbH25qNx",
  "key39": "4c1snV4oNmd9T6fgR4NUQvGeMikQ1zS4BFZemHXV4xugUzAbw5UB6khuzt8iHbrwLgB2bYfGygDwjP3jQTnxsCAS",
  "key40": "2EsAWRxP1HUp2g5GCptzngyUbwzTDKHyo9bR6AjzeGCuWe7i4x6xckQ1qoecATYsLLqy9fZjh9pfnjjHBzELCjEh",
  "key41": "534ueJAPWLC9KtdyD6GeNTPEYKrtSqiEWr21uEuPnJb5bxb2Edcmv3Men7fMgoVQpfY6Fb6JsENAVZoNh5w4xT3a",
  "key42": "2WdzmaAFDNwxUGUReLwEhstivFMoYh5zbom8NqKYG3gDqiWFhZ8EHfh3zooG4UV3EU5GPQJbDTfZ9zYbBeGethbx",
  "key43": "5tmwmSMKkyKXE2k1i6Rf9jnKgrc4kEunZsSCKwXSqRRFBqiMvkAwTMBM7fWjvRL4ykCujE5Eq1TjAReYfc3feXPD",
  "key44": "4nsz7uucRvU1DbAg3iTFCj1tNKw5Nc753epPqQKTXoaWjfoJYuRsHQ6VchjL277nz6apauG5ZtobkTpv3irVoceE"
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
