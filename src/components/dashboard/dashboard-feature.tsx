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
    "4DAcBQeKb9pM6MiLgqnSrD2d7ZTBU1HMP8MjUaZPJ5DWt2JkjeZUj2DxGsSg23zRE3rUZnmDKpaszZrjPqwHzGgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hn8XgKHZgGC3zPGr65UNQsEWvdEnEscaRvYT96EX7LKiiaicxrNUszLS5KaFDpbTcEPo6NnFPBzPa3tbTygAvTY",
  "key1": "5tukxWMRVHtGLJk5WH41nSzKSUDjvu4i9VnQAEdBb1ZRo4DmLrAP88asPRBdCvpHrSmyYAfsKhA3mAh66aaqq4sx",
  "key2": "3CJCg3TgpNX4Z5P1SLYEsb8qqrJAZtRL7E8DCXu13NcSfkcLi4WGJZSyJDcizxyQqwXLCb5hykLG1xFiZQMrt5bd",
  "key3": "5Pt4drNBy8KsJAktThfYXczBG8TrztEm6KGoxMrp1vtFAsGEBP841uQAev3okbgpwtuh8a6brqeULQKwQEUxP7w8",
  "key4": "4xLGJJYHnY4zMG4EC9vuFegkLzaTtyuQ2NrjEVjSLAa58eCUTimbBtN3SvGSKJ9Mj1bpFBqNWWxhRwNLbKDNh6JZ",
  "key5": "4qaD8SvxhV8Dko9GSg8Wx7ZBCGyxwQ9Gru1nCXDrpGYKp92nZUYHAVwDJ5PFsRYK6MsfDcgj3dKyNUvDVLkFvQgt",
  "key6": "2Ww3XPeyGMi4vovMgQke2W8eHMuRaTGNd79eEqutCqrnM38xPjJQNfjZGenPor1YHyF94i36yFBXGDdBnTmUJtLg",
  "key7": "2wmeEEsMCGx1r6PDYh76VKorRkHgEHXnnxNxjhq4BVCxBnBweettPheJguWJkWTNxucyDi9syVR6VSrbx7t4sR6S",
  "key8": "22E8a8bHNX8ieXAdVhePdaAkbNvhTvLLNH7vFpk9KsAd5NZND9Y81KJzMYZqourQtMVqt6GVyXsMS5strQ9YYo7v",
  "key9": "3hcLY2TTZ9buPX2QjPV66otpmzwrZuCFzxRUYS81fEZeZhkTfKu6rf3FyPwToZTNBvD6Y9CdYV4qLkwLwWvdEXZR",
  "key10": "Pp9VarVuEjMfL1JaYTTv5WBEH7ZtDeVAegH1QXWHQj696wKXRQLKjb4FtYDLd99PDMk4r7zvVQvVQw2Pasjpu7N",
  "key11": "4eEEo3XzYcjCfaPSKaw6WADEjp2k2NTi5RzSSTtrdLtjCve5FmvAziUs9MmQphQvaMm9FY1MEEENawBg2zRhd9Mo",
  "key12": "5oVXbc586SNPbWhWNKD95NG22dW54n9rjpL7FM6p57s9jAZt8dtWcsZ6z7uszbLd4bPQaEzNmHLB9Ttr5jzvMi6f",
  "key13": "2KwxQpqkdT5DQosFJwey4V1kACRvMNkctDTrf1wPfFCsXsqYyFics7GRAP9S8REWwi72L6bUxyCoF8TdTTznPBZc",
  "key14": "5zVXPzBaQW3MxnN6acDiTaFj4CBxBipshY9LQM5twsrFJWTryF47ZRMC4pgnPzZSz6AfwQwkBmny7Sn86Vkx26p7",
  "key15": "2i6B7YhT4u4RK4sKTyBckRfqXn7h1HaRgfhrxYhD9hyzj9XRirKszTNwyE1wkVsRRbEzvscGFj7jQUoQNAvPpWaF",
  "key16": "3woVMYZESLeFzDpAAnDuK7wwip6Fdm9SSe6mmQA7gyN2MFABxypKiUBRBD8oi1XVoKfRYUSnbfhAfRsp1XGusVZz",
  "key17": "2cZYsR9SnmcYaZ9WfwURLfFaU5W43CFFimRaBXEg9pkBuLU6t5vaYGDLdBKFFJvvvDUCjADKxV3ENTR3tiCeTF4w",
  "key18": "3VhrrFzC5iv1B88M5RafsxAx5KV7LkfypVuzSL1PEWEKQMa5hsieYQ8d9TpNRoxRKpcNo1zWqREqC6LDiQqshPKG",
  "key19": "5yiJrxRn6GLYJnN6xqHR8JsccCRhXeE5X9HgJAs9LWD1MzGWDQR6cuuQrERoMPhD7KoJHKcpEUm7NzmCi5uDhmST",
  "key20": "qL5eEBDvSEPhPhtzEfmMGTVnmKLe1piwVtqPLETpWLfbcNunyd7qS6Dsw92KwK8ru86mb5jGKQqhZKjJGSrwybj",
  "key21": "3aoH2pmayUrtAKnqrBhpBdL6cL1adg7RrZSNYK2pXds5tZP3e27x3LtuTDuPWyyfasQfA7cRhrXL6FHkUxiNmDX9",
  "key22": "23ZTjEqaMyRDgDNyGuoHmzPkoBTXmL6biNEdk3Xqwp6RLktEX2tRkavy7D1WpgjY3mN8k9mqYwfpsFq93QKBgdBL",
  "key23": "4YphWavZJruQ1kSStJj8UV6AMFHfi8gHm7EGsQsHVha7b5HqNGVCcYKh8yVqGQJnsETWAbTriNBqnu6hcevaLnTK",
  "key24": "4CTnQs3DmqxYRDF2xyLw9fnW1DjnN5sJ5MXy9bbz2HbpmMcHUEojK5hdQuNDJGKZSCzS1weje6BAiokv5Yh5xx2x",
  "key25": "5LdoqQ9U5vi5QRfTraYicr9LstNxQLWVPerttru8TiEeqTuGD9MgzBs4gmmuYb1bSNJgpokhPNsA6yNpC8vfSyRg",
  "key26": "5679Scn6yuUdV1vnHK9MorLvJ51j1X8JBFj3moFzsvMzBJBtjhn5GoernipYaPYWPUuw1LKNxxXRm2c3ybaaZCaA",
  "key27": "3mKAbCRqTabQDjukf6DirrR7RSraGpaiB6cm87Cwj4P9ezC4oXrXtRAFBYQcjMtRe9JqtrRSYtP4xLQ7pi89F3WH",
  "key28": "36CSJathVPYh7gLE13qbDDX4CRtTyTiRddnbdoE4UCFsaDH2b2Py6AkjzMpN1MUZ3FfGCPVgMj9uJQJoN2tVMEPB",
  "key29": "HKoRtHyftf6SjQh3EkjgUfgSvX1XbBUUvJKMNrAXf4RwCTa2xF2dp4e9y8DXvpkrWKZ8RqNeuGjgbjNWM9axK1g",
  "key30": "2A7YmpiYqSdoz33aZDkYJd5W5U3E6z3mn9zhiuw24XH7FNfTaJyoPk4iLFaLpCMokQxWKuCYJniU6Qym1eu1ARvF",
  "key31": "5z8YSHcDGbYZqXjQcsVoTDW4EPdK6hNzH7EgF51UandGYFdsqrxS7DgapsRgrCfp6YxbKTkTLmYhMC3VA5WxqD3H",
  "key32": "3SLsd2rE5j2XgGecUHjFpMYfac5WeKfudvJu5iodeo2hgy5ZmnY9qUpm8aR2NyDepuMXzUmvZ2Y5FvuignRZJjCS",
  "key33": "4c5YGSwk5bG6t2oUYCRRrp7NtVWYskGExPQUvd6x7jSkJdmoEE7HLPYRHcBYRaJe3dhnzSF2rkPXB1yx4k2UJy4X",
  "key34": "4KNmER2vnFkGrDrmNFcQKq7bGhTmBR4mzWGc7JsuHcqAGt75ooK8k1RT2efCGUpL5GXahU8AayNcY6jZBmvETSrT"
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
