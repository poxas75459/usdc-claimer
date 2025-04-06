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
    "4PzHy51nMkKS718PScxNpEHEfmwJpaQaNNtjqo1mkdDPbWYmYPZdt2gmYzTJQM2b4eHnxkEikm2YAeUc2VjjUYra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHaM7WCYjX7FpS2WgTH8vrSVoTMw9rSLGN4FM9XczfS3DgFbHrhQc1MqmtgPx91QqdTVxC5udtDDaFanZa6LK26",
  "key1": "4KRPZdRrBpusybYTMKMijf8SqAXYVwn6buZkwQ1aAxP3FqE88vwTRtLWiGBPQkKV5WCJFJEHv36GUFuzRMAMuSDb",
  "key2": "52UfRAJHUGsXxQKWiAqCHWjEdTcHG95wGfXSo4aRc2GcNkdC9ecXhzNLm8yq6gaYwzqBuwxQh1B3S2ECKXRhVbDs",
  "key3": "5gDLnSW7VdYe1KNN4f92T8CiRx4hMTbpjaKEQV9okt62g34sXgCUKeBxtK5bR2B5UfUAMkUR4dRHuFfQUaXrmjGT",
  "key4": "5BBALp1JosBrBr8R4JXrvNoyfccwZAfQWUoYHqXTQRJv7XHWyFABmw5q7ShDtg37naobEwBHfUVJ8FqLMyn7ntbJ",
  "key5": "5MMfy533ABgnUaJyMuK7Fe9Sh5anQDjubcaN38eLzttgP6pnnc5LPiqVo58s24CraWWqjHMSDDJJ8BWro5oUe4Se",
  "key6": "4iDGNfqwFb5FzPkxannTNmUu1pWiEFwWhwVmG6FS2mkDmHDEctRw6JkGZahgzibZU1QBd8fAFQhxx1HNnJW2DoTv",
  "key7": "2Ekug5DB4SP31jhzXj6CZPQ5PcbqEHDJRKKCAVnwDmUEgJ8kFNK22kKF4bpRrPZxHW7N6nLjt6ep6oqw9hsryuS4",
  "key8": "T2b4iXo8ztNMqbw1PCbDUB5n5cjFWP9EuLDBeMirAv3qYdLTB2hbCrfkvECg6fBiD3rxYR987uQBB5W4YrUBLaT",
  "key9": "2tUWJCJuSHjpBWkFvPc1EouvLMD5v8PC2RHV2GTX1ADirzeLJDSTVfmSX54LDxkk5trsLyX2uyt3B5oiv3a4HSDc",
  "key10": "32nu51yjwr1z5V1Wv1qCcHj7GFVFNpqHbUUiWvFhVkBThEqsqwtnZejxtCLHFnVi9fzwWZu1JVifuR83xoUjq2Kz",
  "key11": "2fBtKboPaW3rZJKCiHx4pAFMaz7WaX7o48GDzwRLK7TFNH4x7aVNBb2QUTfPoxiuCL2xZLNjigRiJgEWmJqHNGXD",
  "key12": "5D6PiodVgQXVFQ7vP9BK5ZrWcoKnahYGoSGUEohn9m6tfrcMf6t69xmUfEB28MTpC4LJzYPL2LZ18Jkjocy5ZL8h",
  "key13": "4igAwrK376ru1eWYjv9iH6McrWDAz7Ho4sXE8gUcduqRCY61Z8KWd5dTpuHfQ4rwFshHVpzfC4R4oTvr2TcjdFEt",
  "key14": "kyDXrrzT51YnSSNcL5YHDcLXafngzRJvxrfWZsWjViCyz6YyT9beeg3qu7GXZyuWdVjRqYAgL2SZs68rboGDho5",
  "key15": "3JifHHUT571EhjMLFcQNRgdfhHbj2pZbLempkvHSwRQaDTc1b6C1hVADEqNx3PpozRci24orFEQ3PY1MEDeywzBb",
  "key16": "2fopvVvUsqLgkHUiJLz13eSFvZDjtj1i4eC3L8hLAqVUvHKHaeV396YaVJygxQUyh3VSatEp4GXaog2Gs4beYzLo",
  "key17": "5nnVtosJXdusEbadhPQexm5QgTKN4vC2xEGJzcFKTGNZnn8M9xoyaCHkwuVQtUdEDs4xWaMdS67h4epU3kgn6fLF",
  "key18": "2yn6PrXkUfpZzPnd6QCJbUH9igVzwU75ZLzWdsWT63yWk2As11ixDCAuQwH6cAYkfs54QxMK6G3UAEBpE7U55EWy",
  "key19": "3duViz6dCiHo6iSwhNhrPWxEdzUebcjFWDmk7DT3xYA2TSfG3TFi5zwQ76EN24Tpox4V8PeUJADryuZiLJTKF2E4",
  "key20": "46P2ktHccEti1By58pndZ1bJnVUC7218y3bQUvuKvknbDKZzqmvDchPKaSzmgM2LN4hv5hqAZ9DB2PBZxghRyUVA",
  "key21": "J5goWDfJQ38UpYbihY9FkSGKJRzeCLFVVSesYaZVBa2N4d3nNnnscXQNm6EbJyMR2KuprZZpHEmxjJTpFu6s7zJ",
  "key22": "4dNZVsaHtJ5u2f4CkJeVeWBAY4krpamLXTxDVJQ8qApvhphgBELwojSPYipyVqfiDTsnrdSqDpthTvapV6Mp4SN9",
  "key23": "23ZkqzyH4DbbuD946zdTY2FtqYuX7AqeUQyWkxsDKJwN5VWQZtjmScsaWqv7HizXej82HzEz6iLXWuL6XdX3tMcy",
  "key24": "XMk3NXuHvW3KohVVN7481QCu7ePJCVBqPUZfChW5x5nNV6SSiBmcZnCcF3XY5wkbKqLt3S852Hy5N3oHv8Ni3Vy",
  "key25": "2wNEoaC5utRXHzWw72D71Tq3jthR3Hhic1UHry12LZwSwZk7UCKfcsW4L5kBaKb84Ao8XQiLV8c8zbSJT9c6uSwR",
  "key26": "LLRzJxBb2T17xt8KRJ1XGNEGSaxZTVQoEEFAvrQ5dc571KCS4s9WPumgen6jwnzE3VmY6ohUFDrWejVEfcmnTPF",
  "key27": "4voNgCLfpTepJ1Z8LFeVogKecBn9ZHA4YrbGBDiX7FHHz7uwUB1n9Tpj7JyVi66Es7DJvpkMX8madYa7TX8aPjAT",
  "key28": "5UywK4eFpJkm4X9Jgs6YKPCvvfDFDLx9E3ABg1YAMA5hNQsbtSEpCM68whThmVrMMi3J4XcQqAoGnMmXNm65Lz3w",
  "key29": "5ZftDrUazf3v7bsKRWAVeXbj64AM9jMuy4SCdKDWa98sK78qpUhMfpQSbzgFbKS4Eu86Zi433mEzpiCRWyV3Evxe",
  "key30": "hAzqPKcLSCnoafKsfWr5YkmGyWBytCNhmqETuuzpiWiPaJ62FV3XX8pnpBxyZifPTxHgEm8SHy4ikP6R16W3oH3",
  "key31": "5NCuXoiMxv7WUGaq8zP55fBtme7eEpdrekxdcxgPY5tWNAKVmZnPPWiTcwZ451FAKiGE912CfR2Euc61D9yQCDwo",
  "key32": "2jRB9riqConBKfq2GnWWwR41GYvnYySYGBF5yGm4KJbCbEFAWgJC9BCEFReYoVavStXJdGWB2zwJEd3ANZPg79ab",
  "key33": "2aDiaFCf6woxX4gKhita1LZ6WokSa5oNrKTthKA4p3HkXVE19wNhVief4zWZGiG8zy15jExhMsw8A86PjgrcJEPe",
  "key34": "5oPr7DFThWWVDeAyTnhVJRkUQgGCjFWJUpcThzfLnaedFMzZbAkJhdW9eDc167zJs2yNuujZJh5iZGGsDkMonJye",
  "key35": "aztsCVw76azKT7dHAniheNCqNBg3VUkRjb6xK4AamLDpGohQb5H81Y4KccNSUa6jSjv2LeqkaqeMDT5FeuxeV3o",
  "key36": "4tapJCmX8SaNDjyDor2aMPJr4GvYYtB5qKv6AgspdXnvr1o63AnpkiGc8NnZ2Bzz9euiqsoNHAz8a8pQ2HC7swM5",
  "key37": "5VPUiBTFoegv7QYBsyAghuwd4AMFQb1L9gEtMj4xba4Ky15YaxWd6teVUcBZR7npJbHVcogR9GUtAm2Sd7w1qMTf",
  "key38": "5Zpt3Fx1B1mFtcKe8R17NrukvnZ3cHYV9HEr24dUf2iXXyUwxxJUfNwWAoUSR4x2UVkTUaFEGsZMWmzPV8zFL9WF",
  "key39": "2RUPX4hJwQJJvvEY2u9635hZNM4mUWQgtZTnwXfgxS6ewMWZ8iu9NQqiLi1M7AbQcMstgJQ36n2ZFbx73LttR7Qw",
  "key40": "n36PvgzUsmnRAyjKpVY9Co3yaGhzbQDh2cP4MZtX9Msx1U3ZfKDLLkPxkC7yzY4wbPcE7AJfeMgUdrBz2WiyEhw",
  "key41": "4T1xiV3j5Ddj3br1KmjGJCzgqDrUwTawdKzBmacRQigDLdZunC6KK3F5DjCms8zB3Uz3dTQPbpiWssVp1chKbSD5",
  "key42": "JvkF4etPrtfcHdvKzGM3D9rN4gPudnjRMJpzcuy34tEkHQXXyBv9Be1V1YAAABkh9YFQPTwLjmKp8ewHS6RH6J6"
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
