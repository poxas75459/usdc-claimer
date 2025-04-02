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
    "2LsGJozCYYmRdaJZWELjFmKqCq7upK2JTM8oDAc8PKFhdL7wMw64qN4R3imk3urMBjVpvP8jtnUjrnvCUr52DcZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NLjPyCKeJNrpS2vxajHLiFZ8etRXPkK2ETrypMQy6XWAzTrLj8znEZFSXGv7ivjbqor65Y1T6yR6Dz4EdTekGG",
  "key1": "4hkZ9iAJEdj87FMLJedJyjgZi2VBGGr9WFgrmg5aXKh11VN8DH3ACk6GMrcpSYgzzSjHT2FYgMmDpM2NJnC6moSk",
  "key2": "5b1YDnNTeTc1kUFnYBNw1u5xhVA1d3FNQrfZ7orz6TAQkLdSs2bW9S8S7U4B3nqKLDbHAstySrQR5bBocv22DDNz",
  "key3": "5H6TjajKUZCzL2bWCrZ2oBntwBeKHr5DT7HFUgvUCPa2tBAhi5Gwq3SWVZgNAtpgi9Pom9kdX3TuDQfPGL79tije",
  "key4": "2M8iN6rWkRFASyTSgfY4TieFzxYKQ5FVbzrfxnrXoa6CPcWP372pxMW1kA4zBMRAyHdH2HphDKUWt8pBrQVa7Nbe",
  "key5": "4aMAVB2UjPZoJVFy93Evn2amoxCT3pMRdR3p3BbAkkNBxBWHaNS9smi8RTsSkq5m8kPFYXZsY6XnFu15qf8qBZDD",
  "key6": "nzb5SwD2bZJWENm4d9V58xdaYtW8WvU6kNmNyCw2QpheDxy8twxprvVAGMdjahbEAHuFeJZ1ZVLCf4t2zfuJRLy",
  "key7": "2GfCBnHDo4hnBVXNyikurXJaJXtmCqgcckMM3MwWMytjt1P3QoSDrdR6owQNesPMDhgzMTzL3vrNjrfRCgkWLBFS",
  "key8": "28M49TePmnrFWQW3yZhgiWFgyf6ShdKL23XY9b3kVbuyZZmHEEdAv5P4uaWUkTauT6q4ZFaW48QJ9ZQjFVV8iAkC",
  "key9": "pGJboB26Z4oxLCbdzJPGmwgYze4be5xcYK5Egfa4rymMKytn8Tv24zds1A7zQ2Yf7KpFnqQ4YjS8b1Rxgube4ip",
  "key10": "h9XzEB4jbm9nQ9L2vqKWcUe75ycrZy32FKfeZFwZkZ2GvyCyqZ8NwFicHsNmo2FJMBFtW5YkFuUWJza78k32Bzt",
  "key11": "42dc6vq6NL623wZgusHfkBAs9BqVRvs2wGibkwndJgCX1WPhGUS1PGHfdL2WKCREnoFjsjj4G1ZdGCiT1eTUCKD8",
  "key12": "2hzaGaBy3rijbDfRZURfQZhE4wE4UBZNNqsLRPxpjcmmgVNpLsy374brXsZNf4jWvZ4miQZM38BY53kyXfrfuvzG",
  "key13": "5UBmFbRWv95CW6LftuVeHgSjvpRWPNTVvFTKqSTYYaY716FLMqzP8v7G3zftkMcBqdgCu98wtof88tG9a4XfCFoy",
  "key14": "3kA5jTxH8JPg832gykvCfL86u4SChWPgEmyA8FWR3gGaBrdyVEnHw6qwRuYbD5tyynzj6brxFxnedtC9cQbyLNt6",
  "key15": "5EMnWDnVUHrLtNFkN69ySrnbne99ZuLFEYCggf3rBQeXUNa6ZqWKv1RQYQd2T3k9AGZ92jeL1ALwN3mNYdG31TLj",
  "key16": "3mRfcnzJoKo46cdFnGHpnQ33qpF58ZFhwz2AP73LZbAzz8jp1F3CbHRn5vcziA8K4rp4N9sGbGmNB575mr8XAcjS",
  "key17": "58UbMrxEB1Qb5YickdR7Lh3Yr263mpPRKETGpLjubjhK7DY2EKX2GoJLHGhG6ZwajiBba8AJZRQDm9GaPEUinuUM",
  "key18": "2TKcH1J5AC2rRXTLmK3QLGmvKS2VZbv37nRUjfEUa2zWaVAaihz8PsRh2Mqv5nST9jKvxu2Ya4m1TEwusZzs3DZD",
  "key19": "314B32NpTSmtCUCgJPBpE5Jf63MEVHJvipNW5SuHKjWJVctyPGedwK49MJ1XyKD6gyYna8C7XfH4JzMy4ZUJxmbg",
  "key20": "EeJBZLHzTZGUWT5RnxfmSwrrNcraHsncVb1bqMrpZwKzcxpjVohCGGjuMhVRn4hmdwB2hzLjSotTKPaybB1cgkJ",
  "key21": "ueii6xFX1bigx4CU1tegSktQMU32uXvwKTiuPCwfXCXzBrpdAwdeeb5WnRhWnKHeXmvk4VYnHomQFQptFWwAyeC",
  "key22": "T75YoQro7yoUTPTbv3zjY5qRGgm177oDrxkDzEgc4cXfF3G8KggoX5Q4Wf4PLoZe3oYwt6LqFBmu6ydoAyEGX9G",
  "key23": "5hJV7ivAPhySK9xKhQCN5hQC7TwFSCfQrKB7QikwLAR8YyFWL2vGw1X3wfgWAMSfRgDA6CGUYL5rRGcqR5GTigT9",
  "key24": "3UgdacBBVTcRLgecttfQCRoCUmpL4CGWbnRyrYkkAYBmusdUmW181a8VoUcKp2dmUuwfugbsZHm93y2NuLdQ6GDm",
  "key25": "33YtafLsvAfcjao6ULftKoVNcTVfy3Z3WA2Uy9C1W6JdobPvHh84ZK7pikyYkzvV9pVh1FR8hfdgp8xWREHtCkpx",
  "key26": "3gaxJJFMeh7UPuiG7i7VUPNj27HwkVrV81bvWT8vKmrPcBPY4FPuijfrzEoMMjCquPzcSeecJsXJ1JXTqtK7XDt7",
  "key27": "3wu2PUKJXdSyZBSkzXh1vEeF3ULKsZtz3uJTjDsksNdhjLP57w2qFtqK9AbR3rQAAHor6KX9wAcCxiuvobGZuZge",
  "key28": "25Ptzhbgu6NKFd5pFrbsYzEdjLEjCTyUMgCYcQsdVsYpmcPXv4nLeS7RuwGddrCqGuXhpUPzKebn6V9rUkXHcocp",
  "key29": "3Yh6fjXcbUin5PkwBhTQbSHFb3fhueRC6VYQ1RhFK8wtMeUR1j8WvexC6p6LfonMpx3JokHc9tVR7ekpmtn3ak9B",
  "key30": "2Acs8M5YEBqTrPwt1n2R4iZraNoPd84teXEeZ8dHTuVnvKPUEcmqyU9JTpvC36ATspaHn7MoBagtv57rBu5hVhEd",
  "key31": "479hLYmEzfKD7uV7BaJh1f9CK4men7h2DbFY1HUaMHC6RP382ahyyAp1WLorVRMi7mjqtfKr4SvEfbZCRfbz6BLn",
  "key32": "5fgR52EFJDgchzdYMwdgC6XXdUb2mMCwsTiL7n7NYgZYhLfGxzmznfQ2S4HgfATU6BDVmdU1MozTvW7NSsusGPws",
  "key33": "2tmeHouQF7eivX7ok1tmn9fupm6NVY2qHyNHs2rzrfZBnHQprL2RgbJhEgAx1JiPz189rE6PgQtxZjfAXxBQ5Koy",
  "key34": "5qWDU5VUBZrop4h3GvP5e3dR1VyPArCtTmfvk2oDrKcZTn5wi6Yw9bHC1He4agCrnpjAG1y9gNUhmA82KfckUmJm",
  "key35": "P3CVd9eyEdLHrZpdh9kpgpNxwiJouoRhW3nPP6Zzc7XKiQZ1cJma3itfBWMfhypR25XTqSPHNC1azuy59o581YK",
  "key36": "EPr5DnM7mzkPorUs7tdYuFWgoVLXhjExv6FUahRZKYotpfWRUaZvQ1VVzPuFr3BGRh69u1P2GZT4Dmzx3kzVxy6",
  "key37": "2USEgGcZMnQ9xhqssZwnjuzPA1b1Tz8KipxZLEKQsRBJnV6WBbBHFmGVrfGuEGDmcUcCScYEiGVNb7VYQsCttqyX",
  "key38": "2tdiYQyDs2YfvPtGXDv9z9KCgCexdK4BXm5PARwix9MPTg64bEw5bU1YDSQt2RLhA7ZpHBhka3tjeqjpu9EUgBiP",
  "key39": "5qx59A7qPoSEneqivAgzgRuucP3ix7YAfSmfKdmgBNg1KbDHeKLM2Grve2pmQbKFKGuBVXNw1g9v96iF5wwY6YaU",
  "key40": "5vEbyGxLxZqHmz6gVR6e77cDKrMb2wT6w9htpUXiTf6bijnKmir8NRCka8RpQ4LSn5FwvAgNEcA6gNZaX3sEfW94",
  "key41": "3v9yD1pmjghFo7PkENksqDVngfRr5NLBiGfqaRrTAoVWuF6sd3413Pwvziy1YkdWScesdTTLHB1pi4dmAFyMGrcx",
  "key42": "4Qx1ghoL6VendT4wddzB5qUZc54uGvW3MQXWvAa2M2L5zHuw1cVV7BtraeBJNYeUPEonDR3Q1Ha5XqH3dYj9Sw7L",
  "key43": "A5HUcxy8SisGvtrpRY1C98mzAtA1PKokCeH7uzwefSLY5aPFmxE33kGDiB81pacuyuYg3tjxueFn467pxu8Y6QM"
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
