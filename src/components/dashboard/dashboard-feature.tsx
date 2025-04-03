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
    "2JfJd4M7wppvgxiPLN8yTaQTf92VnsvzCui1JseGWrf893zK2xKFpWHHrtKnTfUkKBCqeSKvGnFYha6hZYccvV8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZ5drnZ8B2qGZRfs7YKEJpt5mwhFQYCkDQ9uj7XjDRR7VGYPqyvdJZFiK1wFwedgqfK9MYepw5DWToU2UpJ64qs",
  "key1": "BTcmKBRVj9cnxA432dmTiRdFqCCm7G9LmcuivJ7tDvSZKBm1PqWwFLNuFEf2QJFrc3RujbUrXPRwFh4nEk36eZR",
  "key2": "4RL4YQ5rSH5w7KRzfxVZ3S546hnyoQjrZfUxA1HPzH3bq5kQVjuTHV3ssCp5onCWQutpn5zXtJcz8TdVBRtvjVJ5",
  "key3": "66R3ar75DTpbJyo3fJ8qqrJfFseUNWNnuGKZG1wv569xNa8fF6Mi8BtXBmwFwJ4d2YUta7GYKS9oEbZi8iyijyiR",
  "key4": "3FvfdeYv5urK2vYH8h8DUmuEmhLtgCXPR9YQikwJ5EVowxTcQBzotLxvFS7Ys7tyNF82MEXn5YyenEyto7S9xy5g",
  "key5": "3SkSDfDZSzeZajtfUjaUqthWQrRjfMMvtce4dvUdaCgqVLsh3afWX44psxL7sv7B1ZNaoiZ1Dck3Lv3jQPgb5AWG",
  "key6": "b4nKzTozsyFKxL99bGnDq6dZyMMD8aTzturkCopWdkZWugPW9kA46SjezE8exihX5t7r6mbvKZvsdNySGfwBpZm",
  "key7": "8EumQBiDPxMzfsuJ8ABWk5jmCdjfoJX85WDv9uNyEjUYYovSvvRQXe1xmTUospAPUTv4SK4eHtxhLSSZDZaB3Ty",
  "key8": "5BhbVpRtLAqP8tZQhHVcjad3Je2bN3yXsAh6v7YwCNF91CaqNM8c1iANBtVWsKnVapTFForBj5dSN14QXVobpui8",
  "key9": "2Ngof4Gdn8JKm6qGniaJzxQMGgiQogYDkwpXrmapoX8uwjFjgqjr5B6hDdFWXBtmMf7B12kw8qqCSaXG2JWrXcTG",
  "key10": "5wrWiquYqdvweT86Xyzq83S92uTRQtJ1CeNagsHEWKvYtLPCVBCzewoNVEPvaFWb59etWfsi8FZdUp4CugkLf3Vn",
  "key11": "5EbjizxpkzT3jjJeLwfuurq4eb5hfYfxy84ZBpVhXvHu5BYBzWEK83v9FSLf2C1eNmt3uq8KjKfPRcJRR3PVHTAk",
  "key12": "5MkKLRsyzrq1kn1dve7trjJ7nUvgfVNShcYbcYWT6jr5KZdwxz93RrYQhJgWzxL1zXW2y7LV2MZJac2E5kgDeVqB",
  "key13": "3sz4DwqkdRNWptapzcmAPZFkucxAhjPvyVRz5ab22RmL4YfGwXomYVHAqjsGtvYyX11Yk5VXeb2x1e4DF91pBxyn",
  "key14": "3ZMSw1Var8i7oTbQsvdW3nL8DfdzJLJB92WHeW2WrJfi18zjAAjmuFJ3re6s8Y5U4YEUAL4ecactQWsWMDwhhJvs",
  "key15": "2xDM7M2hqLkW8a8EQA1o9Q4jHxvLQ6yLfYjSy8zeVjeeuzaEXSbYN1RNzRpiVsXVZdPB8VVCzJaE7cSFP29ciMMN",
  "key16": "4UhReSEwga4HGj3QjW3t4kDk4ZxwTvnjuxJ2jFTyNd9gWGjcPqpSe5zSfpEWnqN3emBaBBvRwtY8JUEyaM5qzXch",
  "key17": "5aJckJWRvbaAjJFVRVEgfF6xGhDEHEthWVDeSkEJePr67geezMxwtyPzdyouWGZK2PLWtSieBqUGhuecYZcY1f2K",
  "key18": "63Xpsr8juy2LfQsKyMMDjjWNKK3xrNt9fvRibhHGpM2XaQ6uTNkH6SzWZo5ubiSrDPbZxR6KEKjGuAgbPy2teB6h",
  "key19": "t4w8v2WDhmteR7jQM34NgoJE5gqV7bdhBo1Swg8U1zrGYP21VGQLKUA3NuPzkUuDN3ZoJz3G8K4ZBaFnSvQix4b",
  "key20": "5Aem2cPjfmuzbAwFqfkHXMgfFkq7emuzf7ycR2XazYLo8N1SwtsJUdxpYwvWNoCYRH6tTk2RGty24aEo7jV3cP19",
  "key21": "4xbLctwcHWsRBNAe7XhTXXdrBK4n5UtjwJ6z4okY2US4u5TEgxwd2HRBermAWZ41tZnfLzf2icJq2ZQuJE3sAszq",
  "key22": "5tJMtAmwRxYTCvtCcFVzLCohWifzJjmuzooiUh2D31TzsZD25Q6KebRvZqyitviDp1WMQoTTdggKfq2AABRxCKGp",
  "key23": "4V69B66A8buc8tQvpnVcApuvjhFLBqzLF9Qrv2YaEeMF1Z8aCjSsBN8Ce6uoqeB8NZTyVQmWsFEJ357EbdBaKx1h",
  "key24": "784auez8So8in8oxFDNSoBQeajfKhiXuNVr9mnFXd15s2jZojP8LdVSExF6JdkQgSdLddukGtQNPwCp9YQbpvwL",
  "key25": "4ftQcBpwfhqutFsiRn8289X8awGM8RgsUJfkfjVMqYLrZVYTo4SC3cy7cJTbaivPot824sRzffSge6Ex6XcWEHZL",
  "key26": "2C1GVL5CaRSDevwKmjRiKx7rWmbv6G1rs56zYMiPijFxkVXqED5zXYMmNKgGVhZsmFhLqzAD5JWoaqMWMxd3mYWZ",
  "key27": "21miGRbSFLUthwPxws1hAthq8AGDKxeP8A9oESJCPABJoKPoKWaCy2ptnMGeYGaGTxtbZnCDArzt7WkB2LNSPzND",
  "key28": "48JnP5bCnyvWkKQZ8qeX7CJaoaKAJeV56ARQhbq6pszRTgcV6RDzXxAWm77hgBUxFTNrV2n23MxikBZfmfJrjFiJ",
  "key29": "2NjsCH42xo1SBw6UkMdP8n5gm9NG25ggL2FLua8yqYee2wsXXSzokzEqAQzQkAEw3YTmMB2Xi1dbzn6i7okMMGRQ",
  "key30": "4qk8qFUVwYyCzZnuQcVpCo4qKgfFtAV493St1B9ikdus4WxemtvzPMqbJccVR7ZcnnfQjouE9dygQmRiEqG7pC3G",
  "key31": "24ckYrVxC2RGShc3oQk3pvTfaScpYtzA58oYedPoYngXno3cVu5STq9s71z2EiqLR8nnrEdTNTCFQQqyU6cVtJhg",
  "key32": "erRdcz9hSYADVWpHFA8ZPk1J6oSBmzZYM7tNmRXgYwQmfqGY8TR4VywaicnfT6cxdkVd7nRzPsgCiWFUzJprnN8",
  "key33": "5cXht6Za1dnN6MKeE6ns86Ros5yDAyzZh9SELRsG245pfUc3RNiJXHZ4eBhF9sKyPkg4tRpCkL8cLDmayr3CSgxu",
  "key34": "5i2k5HavAXTE8TTjJR4QWYcgtRBuAMADpFbPJuPvq8hLwgUXThwDoXZyB91Bb8A4banSHdtM9KMMReXpJKUd8kiX",
  "key35": "3TnNo9kfs14W8nGhTdDda6nPjxpPtFg3P8eomxeynwLVABMrEjsmqp23UYdkKg2dB6dQJk3QQysA2Jt5twGY8X1s",
  "key36": "4MZMtd9gqdVjCu4wsZwRyYtXfcLanbPmSbeCThrJqYpsSeAMXwsSve5VjSTcR8FoSJLpGhCAixP2UptsyS9szGof",
  "key37": "9R3aGVeAME4b9snrtRfhUjfrfcTb3epsrY8wj7ttv2GgKm6Q4agMYrfmvFZCJz2urpFrV2qp8qhTvftBkccw8BD",
  "key38": "4PVMVDkreNQR4VT12sgV1WfrxG1zuf2YkjnGw7XZnFEDUZuVZ3R9HTiAnQ7ohoLFNgJeGtVgvwTN4RR4ggqEiHxT",
  "key39": "27uyt7beAGdWYXf2iZ6TQtSS1xBhpNBpdkjtuFwGYKf5ysK8WALvzvgdxvmDLJPd7bhiCiaLQ6PPnjRh4a8oUTRN",
  "key40": "fmNTaL7YVJrm5irebFczjvAckk97zL7Bj6ABLMk3SBapUmfLPE4bxZNKJ1yEz7jfEMayimaf5H5Are4uobbqtYk",
  "key41": "299tnvPfgbGGKegUNpraE5FxVQmvSr7EdjXvCKNcqn2imAM59jYryY7WCw4gdz3GrhcrVZKwFqmbpJJpyMRVPBNP",
  "key42": "5Wenf8PzA3J6u1JLzPBbzhdFtCwzLFTVafZArR99T4zUW8SBE1yQEttaSG2nZRZdQr1HuJPDULqwZvssvfS38Kzy",
  "key43": "54duZkboAHCCJZWx9aNV3jERbwj7M5wjGGnBU1sAk1cap9KZyk1Er9u5WzkJjnDC8jBRKmufAqZydE2UVnTyGYos",
  "key44": "5ggKM4md63wSoYexpqaSXnpPfsGd4b88Ehv7bmV8P37CQnd8r5qKyUbSfH7PRZYanjowqsXmM3D2259FGGaVc8YT",
  "key45": "2hz4guWrnXkhajfTUJU5hdd5URLnMDxetAZG3g8qaUz75fkNgzSgWrYVR5MzzbDiYKZkmQdqhqgRLJ5YVKSRzyny"
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
