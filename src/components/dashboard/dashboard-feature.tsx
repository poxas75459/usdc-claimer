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
    "32XTFNGUDmashjbDpDhHPqpyexoPTvjcC2dNk3dCnmbVqc3dFkywhXSS7Si3VGU4pAnWGp19cbA88UWXnu9GmWfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QFUkwpdvZQ3wWW7Di1pMX3k42Gt11e6oXtNzbQpfFuCPZq3TroVn1qS7d4xM6HzvvwKxzmfdoUBeNfo91tukmYz",
  "key1": "5d12tdzSs3dxraJwCWt1ihwDPeXjnEyuy4TrNmoRjfnHaBVx9WYE3eUjD8A6bQ8SDrfaU2jjZQFVEci5gdv5MooL",
  "key2": "4eB6ejL3yPGgP2iYpFh3DYvbNzrBEGR3GS1yBqt2LvQ1doGFSgVa3FmrnEFmnuANzqMXza9Zzucq6Q6yCqLctuqy",
  "key3": "XJ7shTaXBhETWiKmGmZ9pwR3PUBgrka8C8sqindtuFsc7rpsYd3jMX7e1qLXgqZxvGfG99Y5anE2KLC5j9QJcRu",
  "key4": "266LcTEm4e5W3KwDQaAqkorac4X3SsDSseUC113HYioETdoAdVv3GzuHNR372XMhq4z6mndUpQc4LZnLgshBcxg8",
  "key5": "3dGxuUxQpeEx6s1Xt4npWTqF22LDWGUTmv1kTSmLHqVFighUSXjXWdXZF2W3vBES7vZm9oeiVzgx38mp4rKauqrj",
  "key6": "2vaugcWwbPVZqqg959me3ucCJ9DsuTmNnSN7paXqy8nbAft6VnRu9CL7jN4emqgxJEKN4z4QXKta9AGB1j5rspSw",
  "key7": "3SZSUCzuvD6pQye4v3RsDTqgN2JG5NAvMU6NkxQUdvqSLsn9rxiyHWwqgYKnSGgbH12rcLaZmLnfY85iJa2E8bcG",
  "key8": "5GBncg2AFyTke4o8tKxZCUmuJas8RBTqaG23TqshUPWXHeDWB5TKNFYk1joZwiPoerveFJqEYY4Q5tCKj4MAZQkQ",
  "key9": "2ZmoMiDj6XFGjkLzShUNxYWGf98TphaDC2dVEwYCbfRqpabRQhRVYMMupG21wi9FCXrDTfq4dCkbRqLpjxQ7E3KC",
  "key10": "59jhNGzPinyvAeZpbh4d5iM7vcrzFahbWH8kahGwRNWmKePVFSPkhVjCVV3a8C3ihr3A2XjCSqnKnbRsiygdyJtE",
  "key11": "2PX1R9vmNKbNX1FoA5e7Ry56GhcjxWZNvGyAX5qffiGiTs3C2R7yHH2heruf6rouFKBKBfY3VfYpVcWqXoxFL3Xa",
  "key12": "2w4M3uNTjqJeth615gUuqZBGGzkrUUDs8w5MoFF7Fd3uU3vYCTJT736LLVSHUGeGAtSLUbwcqmisBxpcmGcpdi6E",
  "key13": "6hcqJhYrvCuNdtWzu2Lybem2P8GjDh3L9HFSrXemrMF8LCmhnmDZtonYwRaJ2EuD2qi6F4mKs3koSDsxhV9asSk",
  "key14": "5SXX37m8yYjREgByVfvz5J5HtpiSm2B7KddgkzdL78baBJkAsTngZdyT8dik66659SrrcNDwxRMF9iJEy1MEv45q",
  "key15": "5UhcMDpMuz9wFZpgSrWRTBka7UCNnBxvyQ6vR5xJij22TCa3VkwZcSPmV73SXyE2A1RHYTCgVmShUnhY65nGpbdp",
  "key16": "43xqktDctuQY12hiTDsRNBzYreXB6zU8TxX6o7nD5VhHS8iXZFK3weByxfDGXVV5mQYGG1u6ZDHNPcJaj6FSVNET",
  "key17": "CXnJu9D2txxSwEfPq9xBULezCh2dqAq8Ps1WrqhRAnsLWp7JYS5HBRXjbvCK2FM6RhuvNnMdEntJ6YCDQfrjZJy",
  "key18": "5pyyMQB1JvXqyJHVAPK93ADUSzaGXH4FrX3JDhYMUyAZfkhbfHZ6ge6mm9umEVDKxCXsZmACFmm342BzYFPWvtcT",
  "key19": "5Fa4puyxyiCP15MVMyrdudRmd9jwoCoXW7yoNVHU2XUUtgUZ5Kv9D7WyAG2S9mnYsjp8jQmmZju7fF9ptBZuCKCM",
  "key20": "5nGUaLKjq6igehahUwiYFC76LEogxoiZfAkiZu3gTMJpKBsm7Ty6d7EfuAjmUthtZoZvMUVVAAe69wSN1skB32C8",
  "key21": "5hx5PF8m2prSCuAjNGEmY38Fi7wfuAr2rBrV37rboiNaCwzKsPLSEUqSLh5817uSeZ4gWfxjrgYBYw8mTBTbdjaB",
  "key22": "4UxjvfSXqEekpsvCa5w5wpojkFfE9rPNvbtiFHViUKkdVJYXKegnLdecmh9zhB3pBrQ54Hcjep8DYpg4w7VC88yL",
  "key23": "aeatdWGwJw61yZBzrUDEup2jtVVkPTBr9owMdaGfVmijQnkUeVpqg7EEGS8xpfoeCLRjib1B55xXWY5nZaxE1uB",
  "key24": "2ddqewcyXnzANSkqYZiYrPUuHzTRZ3Wo45hbPkPnf46LsxviM9ESSy8qRsoNJdnTCwpYZneexhKozDhwrepVwMYR",
  "key25": "23fDkBDV5sgvTWQjehgrbJdns74LJUy9q2oL4tPqZCHwkpH7M2EWuK4ejbYm9KTgYkc24AFYbfG52LwADw9qWCWa",
  "key26": "4LqGnxqabHYXTDhkRVQRyNdhnwvSPtCyGveHxyzLVTyYHKnKu3bvdpJZsBGkc6RPARe5Y31mtsgUWuKNekWNx8Mu",
  "key27": "vWWNrvbTBLDdYoJA5zMENB6P1EG9Kfvna3oCLBBXXugMjMxun3tuQHArTdf33BnHfJdYiK8ch2UshaXQuENLxmH",
  "key28": "2iLrZt7cL25yqfntXJNbzdxDEU1FXBrAF1GAbsq6oMbxomy3Ev79Rdsfq95APTRPVuRcn3p72aA6WEtUwYg3N3eA",
  "key29": "3FFoJUZLkFsVyqRb2nxUAEBjF3er9bTMyQDwpBTjdjjyYWuenJGq1Jc2uMdg7XrWtYBhccmLMSWmoqAPWSSULDNJ",
  "key30": "39uUX9Yb7RLj4sN6mJxFW1U9FZm6yF9TD31xzNixs3zPcAxUcME9Xm89hPpK6N8VtHLSsh9VJ2MRDtkH5sKYR6Ak",
  "key31": "2TdSE46FxBh6uER5jvn6eeg6DXabGYc2HGcGysqKZxZJpnPHTEFSU448w2cAzYctYeeTVH7L17DEgzsXaNtmi7fC",
  "key32": "33xLp11m3ZFGTFXuwh6ev8T5Y8z4TWweE3raTxUeV7fQ3WZA3nUNjA67xbVpHgieHj8ZMHCd9VKkWboNre842bRT",
  "key33": "2XURSzcXv4hKpQ7u5X4xXNMtSb5FqxrKvh3z69aXqJsV5jREKr9Bqb68LKn1Frnc2YNhtnmjAg6zoYP2yRhH4crq",
  "key34": "2eZE2QNMyVWJujek1wWPqDqmssxgZbjcFEYY2sQtTqS5oFsAXoddBLAb8FNFmK5UNNMULa5xCd95W9r25LVewA9x",
  "key35": "MceF2PD7658251jpL6AEbgkyi2iVY97hb1PkcXbXqRaA3BHBXP37KgMnfH7MJn173EBYRTo4haeQZHyQbAa44UV",
  "key36": "2DEwSENNKUrmmCiFPzt8kH9t8DT7gGtcJDG6Hrxctj8eMcpjANZioSqkwLkJJARthUELHEgyuCSXLtqjcgvhBzfU",
  "key37": "32pZc5i4smzMgVRJ5Q6W7JPvzncgHNEMQRywyXeXCrWj9L1c37mPxbW51CFzYrnm5uC1XWbKZHRU92G7TkUJ1w6b",
  "key38": "2mcrKqnj923gTk3XfM7swVxRuiCa1YRE1hYPRuwW8bAucGdz1kGbkdB8QrTaCoDpNhCxg9aewdD884GQbZD6PcbJ",
  "key39": "58nHDc6XqvZmUArJKX1vS7rgXyTKo7bzuiWWEqaq55AYhKJCZLKG4sF1xAywY7eCCrE5SXbfd3QTV55K1WKv85hV",
  "key40": "2RhpvcSrXSrkQvKdEcH8RW2uC24G6op41WsT6NJbLzF7nQWoRFJcWQQ7FBfmdWgWiiR96xyE624usCEaNKbRK5Ki",
  "key41": "Nr2VNxz1tV2b4MXdGe8eUtFkgXZeTCX39mEKjpdes2N2h2QCY3vtbza9hL2Pz9EPfYW2EiNW6nXsXFDTA32tmAq",
  "key42": "38wuByTLVm8f967m9mfbGLanHgrzVNa5LnJ85YiBvfa3RTSztBFUZSuAoEBkN9douddhe1Bru5zyaaRFaKbuJ2hG",
  "key43": "4FDg1KiwU9ML1YMtRALkv26iFnbC7uF2X6vBj82UHAm2E6zV9sf9qmBzF6VQom1Dzt8SVbd1vfyKXZpbSoNd2Vsn"
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
