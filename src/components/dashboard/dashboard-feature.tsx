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
    "3pq9f4JchjaYRxZc9bnNUBw6nPGWv4NjDNLZ5DbxhthgEirtU8sMS2c9W2L8yY1JYihEJPBaoogumSq7BNXN8o5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jx8mXA8zaZoVjXdPtf9PvKpfgfj6uaYc6vBA1bSVUcEd7BN5wiWjEHAGvyF5ivnKMWRbSrxoE78HtF9Nk4xRTJf",
  "key1": "5bw4ucNc1obKURBUPoGn7TMy47CKnnHMHfjUrQt8mLjYqwGAnrHgPPpQ9u6NR8jQQEtzDezTppLf4YL2tPTAUfuw",
  "key2": "x4HvG7SdVsibtjBL8oTbvmc23i992NXwWYtochmC9hGpmfy6reJLCfeiyoEW2L9Mru55vgxkRkrXT1Y9N23n9MF",
  "key3": "2zDqnw96oRmdVRDA1GVHWHxvLUtfwEXNPpCfL2JLJ3YNomhCHZb6CNJhc6PSTWFJ33ScmkQtsPaUBu2zN6S5ydpa",
  "key4": "4TU25DfFiGNBgt33NwXXLSdJHhPyuiHqpQqxUbgvxAbtqMvJMrR3u9Nwhg2RSRNAY3u8es3zPfzL2TrELDK3FsMs",
  "key5": "5jJxtxBnSiVzCBvTuGuki67n3VmZMtJGzgwUFdBj55XbgLCT3rdxp23Zz5uv7r3nYWmbx3xDSDFC9JzYGeshM2A6",
  "key6": "4L8g9m7jtLYuNnta62R5uRhGac1umackPM8gqDKFrSTJ77nnfWWS8AKXCQEEAp8t6Ynf1pyD6XFBmUcZN35sjjqp",
  "key7": "3eUvUQEAANS4Dx6BWLETaQnnhWrsSAQBqprpuaocmnLoEGombKcCYZs9mWpKSjAxiLzm7ykx8AAFPUFqUH6wuzsy",
  "key8": "2e6i3fBoC77237ttHx53hJ7zvjuTbB2Yp78UWZiLruwasYKAHVWXNhWymQnMiq1sf1mLeuJWqYkDQzBS2C5CzxAL",
  "key9": "3MPLyKHUQ4UfeV1HLHS8Ux1fBhZEbmnPbzNtgkCQiR5P2RP67rL7agsawvmbjRZXv1nboA3jgiTKMh8fdrs4vZjk",
  "key10": "bff9QaUmMaXQi1DK6TKqeAKVYLVSNfvGUuKJtjwWJCej7M68vvEkeMGasKeqBJsqB1dpd5uqGNLXqHQDak1wL8n",
  "key11": "4biJ8S8ceNnxVjRZar852wa49hU9uLN5oTgmhe2auaSzoWyCXBv7cjXMXTBCnvEdyE2ScepAqoNCTeyfWQrghhpi",
  "key12": "38ZD8w6nBJFSGB7nmT2jjkkM6BCsnPWh4yuShW2H3zSVy2axk16UsRV61UNeg1PyuP23CqWJrnydqTaiWKUiJuPt",
  "key13": "5rFRiEP3FqBhqDbXcbvBtTMNzuFELZXpqa7q5g5hZXCrubgbAZuS9JmG2b2qQY5nkfK47RdywKqYH8Gq8e3ioD4z",
  "key14": "2XNV5yG5aGfZTqt5NfF9yTHwQzkjNmRpL82mBDSdLMJ5oBW3syicpeYCJfp7UvH1PQYtzR6oF4gfNLHznd7coEzP",
  "key15": "5eUUaYssbcJsuRaQsVcvTkZDKKJVsBRnTU12qVPEB3E5FeLzc96YNHZRq66RDjAhKJFU9vX2ya6mTRB8SZZseCDa",
  "key16": "4cvgQvfEbd6SAhybLtC8us4CDfsBbATxmdw2EqFh6QG2afa3hsjj1M8dxv9FPTWzZHSjZrE8pzL3CWtQTE1hdikB",
  "key17": "4mb8LZcbQWGChb4EjtggAvLj5AWf6RKEmo9h8FkhbA9Aeo5XYxFePz6VNVpx5rnuHw28WtM2ju9wYDyypNawKgvm",
  "key18": "49wpqL8oUW4x1jZo4SjYACn8CiP6fgAUY6ERgVeAe9WNPQkGfHz1Grmzj2XTSp3swb6roVJcCXJPNLeHQHeWLdp2",
  "key19": "3v5rfMYad6yDustP8FaomX1Ph2w4RSJHNy6k2a9oCN3jJvobMD9A5kLq9h23EpXip8ZghRYFVxbDUWp2nuP5fgWV",
  "key20": "2bnkXm1zAQAt2ufub1FUZTbT2Z4n7HzNoxWAMvuYNSDXENtVEW6n6p7nqtLdWW6Tj91EaPtHSXfm9WNZ3qi39s1N",
  "key21": "4PSbGGks3WUHFfaeqs2pSBeTgp7WFTrMMuyHmc4Xtn2h2Mi7CN9kkSN4VKhzNRwopGb4fEn1rWEzd8FUDR3RUsvg",
  "key22": "4BsLxYzyU9yAuLxAWQwa8wJmUoEZrgtF1KF8zttHj7W74CcvS1LnTMFezMwSosSt9MjSYPgPJ85E1hhCG6Z9Gnqj",
  "key23": "4Nh41uMKHbkxhkgSjSNvCAQbDQn8zqgeBKRvbzaSvkJVss7rvjk8eoir1tF4YwiHtbENugj6ks67okm56mjA8D2j",
  "key24": "4fSZ7CYi2uWkCHmRaA4Pifoq3shkaGYRuXhu7k6RXpgqoXthgcFesUfLisEhdCrmtyyqRJFitEc2Nbe4He8TyEEn",
  "key25": "tmDwpU6EV2DbdXXhz8YWeRJwJmqQdddjGUxHoPJgu48kyCR4VRQWmvTqv2sXg5VqqAHFETYbFykU4iBCZ5TxxVf",
  "key26": "3HBicihQF5h7tf2aAF44pS7V76D3BahTg6PABhxxCx4gpoeBvi5Aqxv35ewsk5pmfYCmnLxFTPhJduBgdJH1MZmR",
  "key27": "5BzHsVEuoaj7d5zxJhSqWvpK2HDAh8Uuq8N4426wp5w4cXyoNqjuBb1aSAipHf91NjTzfttwNFRKE5ewQ55GaudL",
  "key28": "q2BwiUDF4T9NamKk1RedPN8NKVqqbsgor7WtXLLQv9DxRbW1bRfnPYfVc6tPbRCdkBZEDnGnq2gGyhGJeVGCCFF",
  "key29": "4k7qfYamGG2WE7gvBHyZjuqmbkMK2o8k8RdVDwFQ47MwdCHF9Fty9JSza5h52TYi7Rj6r7ZqqPZmfoLXC9KWQHLG",
  "key30": "2Sp9Hr7ydVhTczq1uN1jySSZuoePCn4fuoti5ShoDw3wQZjCc467cC4Pvq113agftBvEHV9atE8dvq15PdeUd7pZ",
  "key31": "5P8FT1Aiuiokv1wsz1qogwK5qShkpx5YSSyh6TGj5U275j1eGLDgUbuhvcpsdq344Q7BgxHfQtJTRhKykabHCVnb",
  "key32": "2X4wPjqbWegst1zQv9hFt6cxfmxfGSk1Hihfgo8dKqZb3MzcQVW5XQAtW1WsCsxmXVkbC7naUghvKPjkrH9quR9s",
  "key33": "3CUfVsMEqvZGht6HzqF5ZcxynSCMAm6xYZLPZvRrgYZHYLuLyEfjEf6kQoxoYhVTvSbGcVYMmmtWczi7F89ibdVB",
  "key34": "3EiBff2KzxU6av3BKWUjLEfxBmuXsa4TZqmPGYtMEGTFzENQhVobPHJ4L2dBS2o7N5gsE8Hdz9VCSLFpcWhhHwgh",
  "key35": "2k1wYmgQLiYp8FxtYvUCe89shDpnpWw4xmU6Aj696pFSDMDtbtzFC9aECLGNCkcd69oAy56N4eRBTF4C3TDzt2BT",
  "key36": "3Tsw2NSvLcPwvSG3uyA5sam6xwxmMBYmHSYibBGUt7LnWGYL3GfkZ7uB5s1ecgiTZazHFnV9D3Zen7gDrM7nmLh9",
  "key37": "42jqX694TgbSBVPJnRiwyBukddVDYzPwnRPFcd7xKgafbHCgVn5oapdho7Wc9Pfnz9zXRGNSsiw7UdS7wJAt1n21",
  "key38": "55RW2iJQZk6pbdkCEzod3H7eMMRvBwidmoyDiEsir2V8oJeEmXGYc4ehhE3RNdFAQ3nPKj8QDgFWL8DXkB59LyZ",
  "key39": "3gDNGsCjyq2k562MwFiCpRqXGSXT7w43eoyC6NQbSRPyFeYEk5D6FzP38nzUPSsqPGfoRfogP58f99pkRUFshr4V"
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
