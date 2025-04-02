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
    "3RZLs5H6ikWuzSmqn2x8nNwt3U4FYXviGs7gTjgtJzNXgQa2D8HXc46vS7X42vT1Qfodsk378m2Nvbpq9GWsoUeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9im7VTcJXXdNbTMKbqj6wpX1juwvgJ3sELedKAzpZomZoAiv9YF2dzxQDmsxLUWNoB8mnTCkJ5xLLfXfYUG9yPN",
  "key1": "iSFtP4wH1edVfCzGXPBt2XyT6R4PBiFdPkaefFs9YLMyHeihpBmwLkPh2do9XuL7yk2uT24t4FYaWuYKJ3EB1qP",
  "key2": "3rWfhM7RPWxSpkKT3HjDiS4LPT2V3MEsU6UR23Z4q1aQtR6C4NFbUu1qG87HMohqPvT2NdLXpPLpBtcPTxuNvm9h",
  "key3": "2aGWBy6P7bT1Q6QSfNjc1Un9WcCYRbUfTbbYeXBPLqW3oMcZ6sAMM8YdeAPrZF6yY6mGNzFd87Jz4RHQ7rrrnn25",
  "key4": "GAKL4kLGoskJtjRixGwnxLotxsCv8J6a2EV4YWtiEpbEssn891D3jynqxZCKwMs8Kkrv1NiQJmbbajKCJUBuMJg",
  "key5": "4URxg7hw19fb6uVkmoiH9Rmup2WLM4THMbJA8Zr4KW2Qi7SKwvmqamrTyANBxcadNa9u2ybNjEsfu8LrkD8VLjZj",
  "key6": "23um3HXkcgH3NvuSN3LXFCBzw4ZGL8VzY5PoxARummZq17exT1tYjeMYwKaDg3moZqqTrRM2juC4reipVR61VZy2",
  "key7": "3VhqVUoogdj9rWPqnzUqycaCWtnYVnvNSCMNWWBNxKnwXtf98os3WgBicC5Ewcwwe4vh7GcwFtQpFZso5ND9XEWh",
  "key8": "RTjZ2ogDNBCJ85qoiapS12FuDAYLcVs9bRUQids5sSAT5BfA5BdcVqMFvxBVUP16p4PQyHZtVkEbNKko9BgLipP",
  "key9": "2J1Q8bcm6CWkMzs2xHR15MvBsvUc2w7X2FAXcJTRfiFNwzdco3JoY4uzsp4nZjhANuPXqkFEANkKNJzcPvo9Jvkh",
  "key10": "4P5pyn1ZECoEqoeD2WSuvT659CPSoh5WC81ddSJzdHqZqySq3mGjLiwU6DJ3Yxeiz7ScZfWvfih54SsG6b19n4Pr",
  "key11": "4yP8LBvAs4VLUTv48vxFU2SSV2csgGZuVkgCc7jDLuL3fHBHBffS3QaQpbQMdyT3X8it367CaYKmaDHvMm818oDa",
  "key12": "2QxsfbMrFifZS2iE4SBjsJrBpesN1hbJmVZpbZtSt1Vb1YjViPk8DVK8dWP7buHe1DDbbhSgEgDV8nYkZkW1ysrQ",
  "key13": "47YHRzHPXb7ER7gXynVbmsuJFJDjiNuhziFMVyxrjUVFMreJ4HhjfTkUqKiBWeedntuTfGcjVw8mhVt47LT9RH68",
  "key14": "eyV3mzHD6ATcsKfSoJLsW9VsTvkYnQqvcEnHjM4SYYSqEAkEyXYB4V2gzK1VebbZUirehjAjoiGNao9BiVwwEPe",
  "key15": "vFcqouaHDj9fveHEZ3gg94FuLQ1VUhbWT58g7ScMunvQSXuyGz76PaJVEwDa2FfMqxbqowyARs8fMHaBxBgaBcV",
  "key16": "vxTTY596GikaA4NgE7rZfn8KT2xoEdaJEBve3mw6VPuZkToPgqw1uYi87XZsapkYLkzMVPHFyFFZ6CtGQ5vi9dT",
  "key17": "22zxTW2Pt3NGYy98HWHVJmg61zm6HLrmV9Hs43oCT1Lo1xFRCjMmKHuUaw3zzEsEsK1qhqX9MjabYabWtNf3YDid",
  "key18": "dso2eCJ9JD43fPzqqYeYvKjqxjtaPv6rN4fenpYGx5QSyD7QbR9AHuP8UMLNTWe1WPPfH2vDFPYrKwLwo4RPAdP",
  "key19": "3qrJ3GjcXmSkiV7JJtRLPeqzFhLQBnSJxg32cN1Cz2N48XUszFRCQL2yro1MrWmgXErhKjFU5ErU8LarhbLuhHim",
  "key20": "2FWouohbptoiroo7zbo1mupttuKbNcjLJvwzdqas1xc6mvSJ9esHxBBzAJpfhDNyXRpYXVdTWujZFtTGBNNydqe6",
  "key21": "427yEm4z2QqqQfdn8FGWr1cnqGJZpvRQ3EU8uF2MGJy39EAhVVuwK3gJYrQZe5Fnb2G4U2dWKaaHLr6hqAatuuZ",
  "key22": "2XjquwnLyaJoKdYtx3xoNhz5kz1SfKrJDE1RYhX8Mi18Av5Q9kHFY7svMzCpUuXj6B2D7i2e4VerZVMWuxQjrFCy",
  "key23": "4QLGztuCS1dr53oPLTJC1Ss1by6DhxVMyAN8aAhYgLrkYUhYwuBTbB8if96EBSwdT2vZGNC2KSouvJL9jbY1NPpW",
  "key24": "27s4y1Qs1ULiqTZHqgXeWs9bATiHHAzYRtkZ8uyYhjW1cEbySxc6tno6c53mLBsAcxiohNLi9uAPZJKY562VTn57",
  "key25": "62QS7tsBvdsNzhgFiWKGRsyWjZKK6n9XzXk8wHzqZr38EtW7sJu4FoM68xAgdGSYiRYGznzk4jiDbqPpw8K4rzjG",
  "key26": "3byuC3aa9wC1euKrGuS2wG1pH7EA6d3Vybk3kNp2nY4ghNrDkF8uNuMbWqKXAHCNPwnXDTXk4fNUi4WjVqf9C8kn",
  "key27": "4L7BVtjsSvZ3stYe5WfPkLKiruCHrje2Fg23CPrpA5TiLf6ctuxQrHrTeJxm4jYcnpdbSqQHbtFbchG5wfpP5usA",
  "key28": "3UtRVdqRKawCJCS6V4FCBJeSB8uxDMSHTCJ4b1FT1ezbUroS1rKXRuLgqoYnZ9ey4kDuaDh2e1idgwkPE3D3LfeZ",
  "key29": "mVfRYv82XVydFzZfBuuCVDRHPD1qkX223TYxDXpF48S6dzQdW1JaJZKkExoMjYU8uJgayiCzS8MfThucULfwGk4",
  "key30": "95Rz7yKQpmhfDbhoyxDmBA9KUx8RmDXtjamjJGaYR7M6qzxAinCmPM6exa4XtYUMgNAG3ZcE1cn4iCeL9TeUUVE",
  "key31": "3UrNqGJZcRgiUJgXX5C9pESUqL5kxKd7nkGhWcHF8AB8r6zi1HoxuSGoqapJaoRukh952FG4yA1pqWhjUH1koqZU",
  "key32": "UwWByBtE3WASXmVxbUUdxwE6yoNkmkEmiKJZWsk9fEFoZ8iZcKQi8SyWHX6AMAcnpeFcAvo4W7dgsDTGSEXPSm2",
  "key33": "5vNmhzrQ1p44z2Z17RJDCis6WwCt9AGKmui3C9aQKMsiGp8Ut7Yn2Md2A7vgVBVhPDDbH5ig8oz7i13zjz453CPK",
  "key34": "3y1mLA9hYm11UfT8vAfMvC2zb1d8LmPPkQsdgaGshnh21RjvQdrpYL38pYqvwBwT6z8TTNVmAvfGgUZZyuXDc8MV",
  "key35": "3okJjFiQxvV5onvocgW2MW7jTQ1AyaDGnRbEYg1UJ6GjnzTryhexsVn7R5cmjQnHVaWSvrbtgMtxbvd3MfvQCi6K",
  "key36": "3KEVXdDtpSRycLrxBdDzS1fcxiGaPsCgidug9nCrhPRtAruYJKQZ6nRiF6cqpvx1rw26y3N5wqVLRoCE2dRxZDHE",
  "key37": "5SUteDUZKvJnubFJ7MAd7uKEGmxpj487wnekqEpxp7Kc3P5RSZGX1xmnEZY7y9xte18FUWxjerpBuwBtwZmcg5Vq",
  "key38": "5xmWx4i9H91p3fJUdSvWmZ8eRvE8nF8sA7sjKk2uDdwoAN2gZ3nC1hBYdBkEWPW3Pm7rNobcrmtVLVSGopDp8rob",
  "key39": "5dPJNKEG4UuyWVxW5zHAdsqXrshdu9iXWcMQdFbkkAoTjPLtvgnvk94H4KuQaCbCAEorookjYUPg9ZVC18PzgaPf",
  "key40": "4Gd8F3SCwgTxio9A1EsxULQnxu3s2Eb3cMoYJpiwF9cJCV8ZU7heNb7Wu2RTPAjZNot2bccBMfL5mJW4NCkpK13X",
  "key41": "3z4gcftX6w8c4ioMmVhKrzJU1H8Zmqwh4QD1sLB4MjYmDoPR9UBUmyF2AQNCmxcCGENUB6mtQjcfuTGNV226his4",
  "key42": "2FWnmh2bXW17ZvWhkjE42kU2YbKej4cNeUqxqZABPEvH34pxMSkEaumriY3noftUdCCMdcMJNUsqWRu6MXeJbXst",
  "key43": "5iwX8p8xhrydx4amUs6QmYXeLcYZUpBhHHHKD7qEQk3iuxy9CBap6Ej9VMvwK2Jc8JxCfFNjA1QC6vysBb3vs9GB",
  "key44": "21ycVNs89dR1PDELN15yj3ByRvEjJv7CSadYimGSNeqi9qFPugDTGsjvqq6fJkovtLmqCWvECpfp6xX24JpewtX4",
  "key45": "RGkZ5tWgKbbzdT2oHNYLN9RWZqLb8UVWVrQTARLD3K85JcQo31fHYTbXjVGKeUaNtGfkrkjnSi5L4cUQFENX2ua",
  "key46": "hWic4x8D4tNBCf3L6TpK3Rhsz5VJWEp6iAnREpzQGe3oaC5QT78QCRoXmYha1V7NCyHvKNadd3FR13TGboF5d3o"
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
