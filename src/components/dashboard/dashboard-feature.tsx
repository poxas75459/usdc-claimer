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
    "Mjxc9NtCk7QpVXNvHATHGQ4iZfhiixj2Dn7EKqhtuYT6jvFz2GARUfvWvjmEVpARVQdkfgts415CcRAs6hyJ6SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9ggGsfQ7u41VSqfL8vxbTMvWVPXfHoSwxv5jMD1MArxAsfrrkMJvewxJ3fn84xiEjoK3dhj1jLUCEwU8Wf4oUB",
  "key1": "4Fhj55fQd9B7TV65LV2ETkibQ1SSwivcDAaBVQiL8UQTQwZYjH2MVRFaYsMKNGG6SbizbBUQ4RfkBWH46cZC5Bwp",
  "key2": "3K9EbDm72G6GDCzHg1AAnwBKd2fgDKShmJ3KTCm4SRJ2w2eRHjPGpSxaUNWf8p3Wsb1uikbj1BrXANV2CZxCxp7w",
  "key3": "CY7UbmKTLXADe3SHQVBjzoAPbDWt76mchjDX8SMsRytdkZPiqS3QbiYS48VURyzUzYZNDsmnoAH3sfyCzRXJu6L",
  "key4": "57Uu1q2WhdxZ5Wq9SsB35fnf2x4ZboJHYgT3nSNn2wmxW1YkLkh5qmdF1vGNuSBzhCcCnUfY5vK8Rsr9XrgSbLim",
  "key5": "3pewSxvzQbhdWPhTnWS1PSdr3aMNsLqicHz6ZiTfXkuM58fyZYrduRrEKJLhhgSjoFL8Lpq58rX5ocFzmw8YMRWg",
  "key6": "3VCXXE8SC1R3qDjorcrC3EwodqQgTUPamhcumYHZGjgHYVWyJfy7MQk6hPPkTWou5zzcmG5QvgN1seHS4KUDDgbp",
  "key7": "4kFbAmNWdD78Et27hpae95XoJ53KDcXgM1zHr8KSAF5oJH8ToYSYJSp5yUFKLLHAKMFgEsSSC3ktadRh5y4EAh4K",
  "key8": "2FiKDRhS5VFKVhFh17UXd4xWn6QZB7WFvwjFo71XF7ZtXBELfLQCACUqLkVG819qBN8u6yWtoUfhYi5F6sGV8Yfb",
  "key9": "2ZRk6gMEZCQnbVL3HkgD4czVnqoY22KRaPXbNA5WvxnoqT3bXKnsqPSvyxuBrXZuNiZGi8Xuyc2tDRegWzx5LcNo",
  "key10": "2CjUq5SaF5ciG8HL67T7MvYvphzV5vovouKfJkC4Dgc7xiR3AeLZZj6fzPXNWkVPzVL5Rt7bhojEpPRKoK8kZVMy",
  "key11": "4GXQESiFHe7Va9fWnjvR18RJN3fA53uvnKfkDxYNRniQjcq6GC3dYoks8eoWgA9iuGuvk8rfiTqav9y96kVRrZ22",
  "key12": "3rGwqt4mQakYpnM16oBjse84oANJpF1LXByUL9C552ruqV1qpMgozufJRoHpAAqdRmXXj9FKgUtj1cn2tCUkYi5t",
  "key13": "PCKYJoGzb9QxzDubinkNQzg7jtmjf1xfrccxxR6NhNJafGPQixL6FpBWtArXscBFuqRhdDR2Ap5MXkbRhkqxGwM",
  "key14": "3MKAFVhd6F1mXy9S464xGpsiLVCf1sdNXVmnNSMK97ckNWx7rc4VERrqXoPoBvQuvRZyK9YPzSUJ2XPd6kY79g6E",
  "key15": "49Exb2fcJvB7YqpyfULwQT6NrHbLhMZ8BSrG9q27XELdhQi47U4KvHbykSmycU8G21X1CxAKf4AqMpZYv1h8YMXw",
  "key16": "615uX3zLQfF56CPG1iHUz517yDgwK4Gx8K9BJd7rAnLm1tidZhcrtGiMGJvBUMuSPCg8D6X7R9LU4XNFq94eV9Zb",
  "key17": "3nsDoArgfx2XLGAeUQ9dTk9vGUxzVVfUudc4bU87Zqvs2L47kNzDxFNvWXSuTKMftq3dLsQwFiCsuC8nq3HsuoV7",
  "key18": "5auKbjrFFvNcEkaKPQV8ZTaqsJfSsExGtyeUMqrmAo5E6yFi9fhqwzg71Bk51UczR7h1UH5TtTmtFVLgbYHKMsQg",
  "key19": "43ga6QGem9yorFxS5irAwHSaGbcJ38XNktp8ECdhoNsoRjw3uZFJbs7g49Hr3L71Uz6t7dTB2gpk2yaRtWnCLvnT",
  "key20": "3gFuaz929gG22s2CrvShEooKDvYgfBLLqwGq9Jf1LnBRsSp4gYsQbUTyS4fZM1i1kqWsr1t6hsZExMLSNRcK3hjK",
  "key21": "2wuSehpLN9eg24SoqUBBKd9rEMjZC69Bz7DeXs5RuenAnbA46UpMAvxg8Nyk6DAqQdxVKacWTzk496wmwfNJuWac",
  "key22": "25hDVPC9TsVFGLtBYdfZs8efha9mDKRWJXg8sbCtjhDuHWVxFfv97TwEqRjmYga3WzHPFpFgMJWE5LB42F6GeDaj",
  "key23": "4rLVscAsEeWqZtBsNQzYHfcSTNni1MYaZTaV2tPi1Cwz3QsrrDVhKWYS8AWqgopg4MTSWvHiVVRkh92Rwj6VsWVJ",
  "key24": "3rvbVWL9TdJvGziFw7o57vTsgPX6NXrkBN9UMTkHRZa3Xsisf9BgGfTY1od9RbSZun9hvcDDZB1nGyVpsVxH9MVm",
  "key25": "4JQdiML7sZVgjbP6yv6FeomQGmtwywEpv6CVdA2VYAMQUgTkYMsxvnaAhSMqqwm5b6apJGCbeS8RZ9YN8d1UqsDg",
  "key26": "5wRgekcVAe831P4gpf1Q2zLWXdvW6UFZeBjY9kYPqYNVLj3Avtb7binhYaH4hdSbcTDZkXT5kWa2gPytaSUzEN2M",
  "key27": "4MfLZi6oY4ANqK4XVWniezzDYzwr3kHfAEthrAuDc7VXvVLDBZ4RudR8tKTP2WbQASm2egzHrw52gihKAS2eS9yP",
  "key28": "4fyTjbJZ8WpUhxRWm7ujbKjL4iCL4ABXThvGwRc4SUGvkg6tiPjF8cCKz4dSgvUkspmrpeik6tgJyAgffo459Ywg",
  "key29": "3kpAvwehRKUA23B9r8WC8c746WQgqBWDQn8qeyoKH9QMcxZTfXqfWCWC95CYB1qFR6ULPpiLFCKPGj9Cswr9kBew",
  "key30": "54nUTvKwCCWWgK8FnKvcuUtn1DfBNLcKbsUqXmbcjW7vmUwknTa3FCdjt7BgoqQEtEYUjKYhQuLJH4nsuYSs2r4t",
  "key31": "3PE7zcKqVHxQS8t9B8LsTBSzhZPRTVHnvnP7XnrHbZHguchgo2Xf7YNGBkPMqTJ7JKWsGoEH1osiy4NgtwEFGpm1",
  "key32": "3u9xg67E8QPbx6BndakRjUCH8hZ7fnBKT5tSfLcnSx5yAKXiKFKjaAvrSpqc9UKuuQuS12HWPaXtup4Y59ERsuYG",
  "key33": "5sLCUveHcXiSUTJvMGwPL3Mm7euuSLMmgdcY8EVz8giCMZuyKgeM7UeNuuPBtzkdHkGeqDjXz3NJx5k9HWTBfPg7",
  "key34": "2gx1aNu5JHbUNC4J7PrnKWMn27ooeZJTFngwNqUxhiAfjPY3py7wCiTb9Mtu3tDaPwpLS3bMXuXakbWKkWoHvND3",
  "key35": "3VxJfgRshH7sUaJBQ2o7goFZFy9JZEo35EWYwKNFDvxXsDqxNEa34E3xQDNuokMTgtES9xE8it62HB4mpDXPzgFs",
  "key36": "4Ezm77ni4PZMe7YZtf3JPKQP29mQorq4jzeggcFvcEbLkAvcXYioDpquGW57WcquwTfzxuDB2RvZ73ZASNsK4NQX",
  "key37": "2szJTavhWrsL27FLDdTeUDeXmz5Qbgniq6nUkRMY1jVL6kJHdUGX1yJmhix5xeEP2XciWYVo3bWzR8Nw1hQpZvGP",
  "key38": "2q3cHbndvZLZQbNKz221hDDbCV7oZP4RmaTWAtasMmZdP1XqK5Z73pEZ6RmQVeniyyY2aM18SvqjXvkwHjpviir7",
  "key39": "4cuUCKQwQnw8u2n8yoxLK7URfMxg7TQQW6atWV7WoW3UmqRhJaXdkbuuHywFitCNTEB9hcnhUtQeSd4eVojbg3si",
  "key40": "2WZPuXM3PeK5x5b27xLxu4gBpsBJ6CCJwCtD98QcZFniwc5c62kRQXjbca6kx9P7LMavFPjZ4HTTnx7tW9MdmtQY",
  "key41": "bg1FKsshqfvP3atzGC8YmskwiDDu152aK9k2Cu8ZTjdVbym76a7tL1DKom1cxRfjjsLGFmVxxqJLxjKA2upeNPX",
  "key42": "2zsci6pnNJhcXvTSAMf9dk6NpRSWRnCjNT155wChqa8SJfoJqMHeg1vPiUadwdx84UjXXw3996zPuTnqMRcT36r8",
  "key43": "5sC5uUuJXvuPpW4fpj6bW7swTPS9rkWwo6BTMctYLSM9d9AjF74ENDLv2AYU1XiLAUbGmf5FKTyHdunVzNy8rd9L",
  "key44": "5kRA7EfDK3x473MBFGPvF4Ew2mgvanJTutXjSXYV69SwZid2qdngkqKdQU9xCQKdY9gkQrBsix9caScYcgAAnmJJ",
  "key45": "4VGwxDJWmy1zeoBPjS6a4hfC8W9q19qVTTnR3nz4bZT78ZmdsHpZ79Q2V5Q3yiv5f9KPpu4qXrALPjHRtqcBDR18",
  "key46": "5UKBTVZAx9PyW9CBHUf5bLheZDLxLMYcTS8WyP4AxE5w14dWK8aVPrEWFZnzc88ncGjkWM5UeGhGXnJRgsWS3dm6",
  "key47": "2oevoH9AepTXWGEBQJDVicWvgH4oe36j65tZqJxJCwXHTJvWZwykQD8iCsaT9rMRjwFcX6DRtzaEyFAtximLjo24",
  "key48": "5KPMKwZK9PKdVVXu4xSakmNwYX4dwuzmYaKnSfxLEbcgxEcBWKViTTPcdAaNWLcgHFbWdKUr5QkuVbDNPyM8YhvB",
  "key49": "3WaDX8DwzMU1bQRcrovCuCHvNQuNg632y4LyrWX3pEmb4LtGJDVhsCADKEEh4hdBXfLrMYrGXzNVg7a7gsshoauQ"
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
