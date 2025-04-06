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
    "3V2N2PoZ2CTWStL5r4zaA8upZUiHhtxhNjRmW6kdfui3GkFCumgHfmH98CKHdu8se1iBM7yhMuLHtQmEtuKehNTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfMW2hMMTa7gDyrJESzBQghDP2fsGxBobQX63rmHGcSQJkfYmiuWSHgnxeF7JvRpxUwUrFdcUjXTBDnURb5nD6w",
  "key1": "3p3Dea2qsBUG5pu7Gyc5JVupKB4WFX7PvDj22gqj5AKQWH8y8ShWmC47e18UQDSPoTeEa1yVVXuqcepotLyMMdkB",
  "key2": "uu5PC6vo4kv3Q7GzApQiSeXEJ6UD1wZqYrQYhWeCJ8ie5kuchDU2UJbfNSfU8JNqXKrbgpbtEmBYoDHNkL72sit",
  "key3": "4EQnWYVzg8RuuyjfLSXGMBLoRMayHUSpqmtkBxXo5b8a62rPUF8ViebkCnomwHsC45xhQsYy9MHc9zmqAEq4MgCJ",
  "key4": "2im9ZUVqSyuHEiqZbq6WuYQ24rZqGjCevWWDZkZAXvjjHYQPWJMhotv3ELy58hkN9D2nHhZKRgMvZLWANnwurfeK",
  "key5": "4DyF3Q3uqHEAh7soqKvq4piPLE9EqixtBuTVTMDG9Cw3eP5SLXPuhYYo9neMaDcrHrrQw3xTSx6UZt3pvubuRWhy",
  "key6": "49fNeLuaifBb44dwcc6V5gofyu7MehKHgA1fdYK1oALeTpQPbD7HbPSDC1TGST9X4eCfTFPZrJxr57Ujn48crtCK",
  "key7": "2aizWuWUz6H4ndiTWezQs7ZbKF7rAKUfws6uB84QdmkL7WKa3sQMcddNUSeCkvkRUffryPihHnhYnZDzHy5F7E9T",
  "key8": "41Rn7KhTekjw6x5y4rcKw3STvrs5MUDn42jJqS4nM5v5u7zsGEX4wdukjmEBMZFMkfDLUQENy2u5NT9pBCnBjU4e",
  "key9": "5PerXSGddkCYUkkoYCxb71h1NNz689TXssUbLFvVepedTAfYWHnmKUjStdS8ZKrivyYu62ergRZ9mr7StxQ4kNEg",
  "key10": "5rP98o4LEKxvYEpvzZHFVAoynr1jVZzDodfWn3t6W2iR3a8BxSKRBKxTokaDGrg27rmv3k6CSktM5NcHzmLM5rZT",
  "key11": "og59pVEpBGdbtWwXph3YiArRZeRjsjduEkKmYnTg8tY1GyEuNHYh8wvedG2BRqtc5rHUze5RwbP6uwHoRejxiPN",
  "key12": "3br1JpCFbLoDWxaG6upHcBuBggDMABnhKN7gh7EpciXqmCfXj7KFJmCx4viJypViYtD4K7R4nsnQo7ARQBxVZrhN",
  "key13": "rUxqrAfcdHz3cuPqLeMZs5ijVWMvwuKupRmFcfUvAMenbA7WgTgqHqxshZc4raQpMYy9MtVuUHS4Y648kKnwC2W",
  "key14": "oqx1WUFt6s5w77rAHUxjWwGMiriTqsBpcbocXrxr5eXRtRhU9Xh2kmADL2EmMod9BRKBbkBVEvZwFfdANqPGYJf",
  "key15": "4nVSiEFFYZmyM1pQuJnjYEPQJLVEFAXnhojWNosc2HxiFSpWmhzmYt2BsSuiuVSioD7DRaHbaufS1S7zHhNsSgq4",
  "key16": "48JVMGdbZdd8qdnro7sgTZtFLzaRhRscw41XYuCW6Ce7g3Yt3uEDzFbrxp9gxFS3wrc3cYogFbWAmcwY3LbgZUSL",
  "key17": "2eKGu6kQKG5aN32pVmoTxQXMrk58WU6Uisw1vgZbWKc8zMG1bLNW5W5kRSNbDffrWWjsqz7vecfwPiCoCJpeQmnn",
  "key18": "5rANMtBmKrJWN6XadsHgN28ekhhv3jCsqFFigpnkZijH8d4StU462AjMzyfT7MccQa9xPdP8nWxpARtDKzQW3Dpx",
  "key19": "2fvAn9XdhoePzVMYxYeHHPxF3yzurSct7gr1dXibJhE98c2NqMnZR7tT3Uub5yzgqXBsXHV2oAvgTiTSBAohsUpv",
  "key20": "3HL7MuXhivz12LngyQZsXFydGYS1RAQemYEPE8GtGCH3AW5fa3YpmecL3yzhKEHZRZq6xrFeQGM3HQaDfNJJBKqZ",
  "key21": "XNwT1Y69ErqSsAqrcBMHkBPb1yLzii73ypXXsKXPrFQaYhY2YFrRxPxT5obSajJJ7H3iNsDrWPMtZsZvxeeFa93",
  "key22": "2xCgjn6hCVucKN8E35jy35cbNSVTrf3YDhZUdd2bcpNviweY2HjpHZdmd6JnZ83Y6eYGi86wxSjLbADEw9ockRaf",
  "key23": "5BpBjfpMqiB6nCNXNexxwSSPFowiF548YE4J51xXRHcpdbbDHNsFF2hdBW9iKr5VQ8kUJQoPWfdyv3N8dfdivyB4",
  "key24": "55D3aS1U6Fjerfwq3jzdXnJwu7P8JsJwqaaYeBJcZ4mS7gbKgPraKrfR3RiFcqmL9khtohJoGhieEF12YomPL4UL",
  "key25": "3UFEVDgWNQUnSz88fBAsxaiB8ZyKLeziGAeAPpTJzR4ripcroRrqhFdSUdsX3ZXB94Ti5ReWU6FDwZLR1diDPnjB",
  "key26": "2QXYhWSiZS6ebAvAucgG1U427u81FPuMu4EyFWt9ucLwFD9HdoESKofk4rEfYGCB7ENDSaXGwPrUuEtjZsYXP3pw",
  "key27": "4KnAYt5UDL9bEzRJBecmDLTsUqLhTb6PbgS6M5X2gaueTnBAGrqdDX8PcqZwi8sBzuLpAGpYdtFF45d8bVxFwK52",
  "key28": "vpbUZcd9FC8nBqsPg6sDDi4N9s9JhLnCJ5DuNNMjCxoaXYm95N9RMsw4kC3xHZ53gqFt93A3yCQht7k3MQU4CzK",
  "key29": "5aMqHMW6WivyWj34EaDZhki3t3rGrn2Wx75s1CnejKE2Cpwhih6bczCZ3GUKAgWgaSa5tza3jmmY1BaQRi5obuzN",
  "key30": "3yPrqLgoDooMNyUypiJvYbXvo8BVQsukvmGAuwMzL6BwdaQwN35BsPRsJxTs5X1dtx1HrN9QW1v4Q5LyxTAojahB",
  "key31": "53iFuMA5WLQRFcY7dpm5zKZW61TwQ9ETUER1MQ3saQ1PP7g9xWmDq89kw1t2wctif2FdqmRPuFxvcAphpcNEFQY",
  "key32": "3bqUxXiKdmwR6seN5GqFH6GhpuFBLKeMgqGLBAKER7TZX4tKp2GyvCvAAYN4HXhCzafzb5HgYLUoinhigVDLmrmX",
  "key33": "nboEf9RdWvMfkBMy7YwsFomqoFN7gMUuFrAgjPQ7m3c22F8TCEkyVuyXTBjBpSf5zA7DjEEF9uxpDWHRjH5uWCG",
  "key34": "2F3UFjsj9PxxSaA6SXhFiVNKhTZu5h9vh2QurFFkKCWNViYaxJG81fcuPpLTpA4N2qLrKahji2gqrYC417UkQbBC",
  "key35": "3Mv9c7jzAXnvpcpcN8NtAsCwr7xVzoywVhmpq2GQvyCqcWPaRM9HRcVVW4Lby19YFcWno41zCzvPev8DULXG3XCs",
  "key36": "4hbCo1v65gj8s7vtafrZuYFAiJN8FwiUyGUGLGxLzvWN49Tijf8VWBehFL1qWxkEURd3S6Jnx8jF2rA6e5jvR1Mq",
  "key37": "37o3ppKrg5qYZiS2HiHy1QcpFzSZHwGkyJEZPrrYJsE2vnSh5J1KEFarisoTXMsBnSVqwCvmAyqmxzdwftoqW1VR",
  "key38": "2fV3Af3vZamdAQeRTd8YqiuJJLvYNJUkyArPiAkgzZYfaexoAfZ5vGWNuvXoxKH8tkD9G8UVjKuymniuE5ZyewxD",
  "key39": "2MAF5aqRi44cUcTnvbHzSduSPoXxEbNkNpY9J82i9igiHc4mUzubYpKXfetNXCNozzhgEaH3h5jrP6QjgFwrMQ9B",
  "key40": "5vjb87H7CFzUN9aEv1vfwZzjDXw3yfHPHwAWwuz9q7UycLhNXdfKXsQCmTwWnKVXqFBLUrpeBvyEWEVrxy4zBYTc",
  "key41": "d2852U1NXYA4xmAMJAYwo42h4iLifbXmJ7k2oLV25covfixWUH2vHH7s4jY3X1d3xvHKUDxh2zugQuSU9u2JDjH",
  "key42": "5xWNNxwiDmSrGALHFtqFm1jWfBubfNGaMQkBQ6SHektMm9zVDxPApsWfetjT4jNmLRM6PbvQ4v8N4TVXKBHEMxtv",
  "key43": "5gQrtHR3SBK6QNk4WLD9fMRHdJYkriisUQnWEpBQzFLpbTrvAtNnTSGNoHeWPU7jqufPqzwUcWfddHm3SaLVdB44",
  "key44": "4iEozXu1wPZzvGjdnkzVuuC3acdFs8om3s6mwpNgGSFHKXM5o2McU8kB3DHiSQZp57XiHojmrGj6v1VQ75E1v95f",
  "key45": "4qwrDf8E9N5PdtVweunAQzqJCwaJthdPkEGXDsDgfeU8BGT3UY4BPygw7PUY7wbWvcgjiH7qU3YU4oAKMr9fzZF7",
  "key46": "iXEYx6rrNFmUKKjHWPrsLPwmZqxaeCC8K54oHhac9sQ5hDotNoh2KS3St3yQpojZgqPjj7AaaB6VTeyQhicUSiD",
  "key47": "5R26VjAwkX6fZxgJtigWCVUe2b8an3bcyyjxR4Voq9oRzwCQyTWeiDSUuvh2JZMgcpNdQnQj37iRrasZnK1Bbyxc",
  "key48": "4EB5JDmrJ4hAsadNNZW7sT6hWuxCtjB58qFnoqdT6QkLSwsKStzsfc333DCj2pSK9TwNTNm1Ju4wjgJH2cjb6biN"
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
