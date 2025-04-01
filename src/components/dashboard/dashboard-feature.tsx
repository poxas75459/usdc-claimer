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
    "4Bp5ZXrenNQRujfaghrH48kGf5ezEvJKTYpU4HrRN3mWcDFEJZS7uVHpW5WUdUenQJYzFDeURGnY5Ug9vPMMuPAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fDf117qn5rLxzvVif5Ni6ZTwd4svj1AMz1oLcunKEBBxNmRBauEtZ2hV6bieKDgw3ZXoupYBatc2vu5bSWHrQHF",
  "key1": "M8AKjmBmU4kC692GozULByLpaXcS5M6WgZL9QcE3gy9QVbqHXwrca72N5yfKy7ofCKgnYNi9cWCw9Ws17nB4yH8",
  "key2": "5WnFVJ6SsTgTfz5WQXvyVQbJ5UZgSLaWKb9KsxEztdRhxdGRQJPonLrYbCWxfJmWCk5i34vLPh34U3Dw1J64DEta",
  "key3": "2HRxNEJptbVjyivHNmNo2XKdLCF36BqGVaz6T2ATwYSEcwtkTcp8EzNRXv8iuFk6bd5b6rmwURcMWUmNRGXr5kaL",
  "key4": "4tBc5AoNULjMfkpSmF5EKJDDG745rMYeSC85bg1G5djByb5naE2QAD4SPwhhNBqXTnZHUyWuic2stKQSKzvyfRdh",
  "key5": "HDmKnK8YnH2NnYfmrVWVHg1214Jut6E2W3rLWeuJNck5zdEVViXXvo75rMzGjVDjwEsshDnuU2ZYe5EqAWBBNq4",
  "key6": "2S6brqW3nDmrsUPLxXYjphRangPwasEnM51u4o8bzu4SgbmWNg2ontW3u18ZvvLtt4GfrzAVTpFqaBAyvZF2eV1j",
  "key7": "4zcixM5pz6UJ5RYuYuc71Y5sEA7RPyrBuYLZJFJe5gmRSB3fV5GMyQujBeBoPzMZAa7ps6LwWwNcBV2Yq1yKEeAo",
  "key8": "4D8bfh26nCQGCmAqibFQ9RgWm13bHTtzsdW8E4F4wGxGQ298epmMveEzA6gc8YeUNeU7TbXDjjWmSJn9Adq18CHL",
  "key9": "5H6qf5ZvmFnPrvBF8fjCHV4MTTzZ7C3Z58bDaaJEYL6zzCA2v7TfmCdWVF86pJQmHQ7sY4AbNYoCa1WjNXWfjPMF",
  "key10": "4s4PfsMv3JW3cFor5NCp9zyEi4KtjJemkjJ7qr7KDYni6B2rBbpqW7xYPgZXRNFY9ubHEssVLxkke5XSmYeVjTBw",
  "key11": "39QxMkuEhk1zgN4MYmbmc21E5cdNga1jURapwqvp8V2kS7jMBBkvTj9shskUeen25MA1jkRneL5ZphaA91Zk9hv",
  "key12": "4c7a3EDsU4hP7o16dvXqANzWcnT2pYfPfUJjRFLreCxvK7rUt3SvKSosjZ6Bbg23dNmPgHs9pJMsjiQmppY5QFp3",
  "key13": "4t3vkitL5FrJGadix4MAYcKiwK353LcJDrRqxNxt6zs5YMaXdCXZzS4ZM7asmT4vrcJewmwx94XLsr1mBS82cjNU",
  "key14": "3AxEyzN6jkSfi1AD9UHKDHtnLjSDeRpkEvRRzoDNfYwMUZy4btDQgqkpje6o1TfGcYiLFDeDsfD2qEpVYBNhMWjD",
  "key15": "1M5yWciKPTzMPTUXAcYrdqjoULAHNP1NWuRrS1iGRs8srdjkPkHy8uKMb2ztBRCD2Nv8UPWZd4J4n5KZfRZk26P",
  "key16": "5qKub8FN7KqPjFaVLuhzjHPmRunBvLwiEGh2n4nVtjek2U4a8X5nV5xJVkGKTHHCWWHGY76pZZZeTb4THicPAz32",
  "key17": "JkUZc9ibw8WDBR3BbZTEtasm9jMdGREpMNgDJ83ohxrCygk4L8HtKDK4Z8RbYAUCXKCfojSmjb9YtKpqSg8yjwy",
  "key18": "2J4HEbEa2d682TZ8dFhYkoTqm9QbY8VHbmh1xkRGRhh8HTqnY3JLdKQjMpwqMX9b5n69spMuZryRT8yYBqcGCCpg",
  "key19": "58QF5AQd17akfzwU8mKNhksjrg4DUrUL78UBnddfmxib2K2Z51sqLKo7MHwmkWofbNMRrkBpfXy1tchAwfTDYZaw",
  "key20": "4GNepk2WvbBJd2t5RQdHAJ3NEgsA3r6SL3nsaLw2A1d5BtgzWCs3eY7U1F7CpYu7NuoJRRKKLoU6LTQapUcJvrpA",
  "key21": "2frGAhcAMEqtpvApt8dwBv8hgFkKgKd4vyRJ1twSg6YaeCPdTDDwgUdvZ345sQg78duA9rdVcnGDZFWHh1a62eNi",
  "key22": "31SAT1scLbnpTHS4xBJbJDXDh8dM69nTZcLVG4cN2TC8wGmVJYhURHuhK6w8qDBPhVCfA8XkNWBJDkRvYNUzZ6io",
  "key23": "5vhJY8yNVmUMbeHWUwJr8hWkarqJ86C6o8Zrpa8rf7t1ZfQcbCqzq2t4mYL6Djan143j3FrjWKfTfHYJkwPBtHH9",
  "key24": "4nuMnFqYxkgNVa9WkcoGfDYeyyAA2U3Lwg1V4iaKK9HkmGEMVBod98dMegCMyyT35WuxReGdrE8frQnmGD4aKHyy",
  "key25": "VDPaiGSJ9R5WP1AY2EaqPCpXkYpwxs7bRfmeMA7Dwy8K3evD7uf6CYvs6cg3dMUrnTBSF8g89eKGnNghCXcNdDa",
  "key26": "3byLendJRhMntBf381Zf6dwPet7F2adeHaqHSAWjpKve55VtX5Hvm2sUW3a1pVkccsfn5YwFMWgQPWTAxu7euZUb",
  "key27": "4TvGq49hQhCr8pTJkSSrS8TKpPZfwF9RVCEMA93y4KCdKiUZw5cZJ7LqbRLXN6jfWAgftK42zbhGWG4CuabzDxpa",
  "key28": "u9qMxWnQUqf2iG8FxnocTEnZaoB2HUVChoVqVarhVHehEbKJSWTKXPQxhCYusPE2Z7VWAzLcmQaahoj7GuWRQC3",
  "key29": "5krnUgPeYTtU8MYMfWgZcZBSgHAHhTMHVevXuPaGpFDvTG2gEgv8E9uZh2zF2MGpnPmwsyxM83zZmSCtVeaYuzQ4",
  "key30": "24wrkDo6WrMTPWedkDFNRjvdkaeiwhdAoke7n9gkZs1mvuMkYH2sRMzosmp94kVUMwDefxsgKMvzyyQFYZfyQ9yt",
  "key31": "42h8XQM16kKZT4aB6JzC7uDrdEqHZE5pDEJ9YKXJWc5ALU2AqtX8Tq9HthMgPTcMhRsktmTihRHgdwp7ng7HTyNQ",
  "key32": "2NDXEkfRApTw83KoSskooU2S6YoNReNbCQQmDeLqntTYD5T5ZPT1ztJSQZWP66DcxWUiSZNPH94H1conqkgC1hiE",
  "key33": "2PhrfyL8fEDtaJ9nEKeUt8H29uSGqNXfzQxYjqwGP4x3rhbvapxrX7ddLnHHi8ABp3MwsxkjzgZC47XAvv8Zi7ny",
  "key34": "stkSAG7TnCudacCZcgch47bd3qNjAA788ogwnya2RBCtzeKPsJMHBkMUHLmiT3k87ho76DrNXnLFSyZs7DRns47",
  "key35": "5pv1XdJ2QWbRqJ9PuUFL9nQGqhK9Um7VjdFMriYgtCCiDwz4GMRGdtC4Bb8jkcQQN5ZPD9Hk21zx7CCAxD4dZNP6",
  "key36": "4VtkiHoUFm5jeiyzmtz5Af8Ywe5HLuhs31cShLKLzN58zMVDE5UBR6rRurVgJJZug8w1puJd8DzXJjuPfVJXzMmq",
  "key37": "mb3brE3BQ9oMRdNMS6yrTxc6k5JiZW6dSC25ctn9AoWMX1ToKMx5Lc6aS2qdCXVmLA2VhWP5xpU6kiCqxbkh1vG",
  "key38": "4UWNbXecKe2eQjuKwhqFUCJCt2UnDwXrugBg1LH7dW7Q22KkQgtqMZWT8xCzkf8s45mWnr59rVPibaJDwcieP92g",
  "key39": "EJH6XiAfNcJzHTfq3Az9gfihSMNPXJdajNqYuGgWadgdxhnepzJD4x2xVorRhA7qfy69qZK5XJ5a9NNwGQWpJjw",
  "key40": "4h9Fwori4LGRiqW2eumtZm6NvuAxTF7qZk5ct6PGUd26UMrErrAXp4dRFiQs2gCtmS8qkjR3wReVzwUd4Y8hSk5K",
  "key41": "4a4QqYhNuqCHT4mRHUrTQWkMsmaGveNpPK3stTZrjckG5xkieL5aiADUzyeZXJ1A9DsyGvNCV5dtEWU6qwRv9fmB",
  "key42": "4w4wWBK3SPbzAxhZ9PvDKJSrCg9FeUt6CZ8jatJ4VupN4hkgyHYHBbnUcUMgEAeV9sJtLcincUJjEV5jfd9hWXcW",
  "key43": "9X9cupjvNVU8LaS7BEKQ7QJu1M6d414EiFDAKYETWvkoGScUofuR4jQZJF8TEPpT6DfrTwsq112dsq74zjiGdiP",
  "key44": "3eND4hw8mCXhPZbABmZdWC9JtpScN6CHbgKVm8GvbeU94ZER3PWoepTdwDcM8SXz6ok8HPDKjqK6cN7YPZ3eu8LU",
  "key45": "4v7zcXzqGXcmoAK64r7oV1CduBMdkqHwHMU78YQtbWarU6FbVEJHYJ8jWZPVzztbYEeYb5cxbQhxSNspVjbBroe5"
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
