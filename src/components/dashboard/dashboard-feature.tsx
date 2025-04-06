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
    "fezfV1RoiE93dH7ESqDUojFQ7nL8MNwprGRwAqLQHaDbjZ1JheuAuxmWd9uRmCGj3yFYN3iNi4LwXXBFUd37gfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2AmkG6VvjFrSyfdJ9fB2wn8JSuonw4Uosccya7qgkAWQJVWhv3a9mDugwd4X5tNMcf6g7sGsi2LoJBctNhxw8j",
  "key1": "5e3ygjw7WPeHrhZ8uKd6UtQJ8757GRJZiQGfW4SxfVCvAzCLNWoRyaW2f9266LQZ5TjsVhyexkpHJVKD6rGWC2fp",
  "key2": "3mYFnhUxVwj2uu87qkkLbySBMKVUrmbeZoXm3AWPwHkieK3RVRUjvGnuq6CGjdTq42hmHJSNJk3rbKimMEcSgwyw",
  "key3": "SMyfXEfrakfWEikcc8HyuH9e59UEDEiyMoNWo62dDBQsD3yRVjGiZytzTri4FAJ7RegWmLi9ZXCpCrM3vZxmowK",
  "key4": "3updpgYbr6Q2RzzcW33BPafLRZXtCGyzR4kCkK4La7wnK8BCba3oiSEU4EuFt2DwHQi8D4jTZwGDb7ttKz4gRqF4",
  "key5": "4Kk9ew6Zc2Xk5pteh6JFR8UaWDMj5cuc6caxcLxF7yoh8E3M2Lh7R5k4Z7KcoB2jhA95zZiy4CKSZti6CvL5boVk",
  "key6": "m7DsFcLHp4oYoCCj8f78YELfrpNASTaEHUePBuzwCXpn9wAfo6RhXBWmb7vFaj5Tvokc3yzeChmJ44rg3ocN323",
  "key7": "3KPb4iB51zKCPwDRX3jqkJsn32pjYH6qyXXewBv8wtqZCiMoXGiNm7uH1ex4WP3AJHkd5JNRzyzYq4KLnJSNgVt8",
  "key8": "4CPcNMo2Bp78Yo54x5eXu184f3izCJLaWLsTSeLhAzAJdhEH6d9aatbw7NUeE4iFz7V1BGq2NxWsTd4nnvVa7w1g",
  "key9": "2cV4mvLN2UKA8auSLNmKYkLyxnSFkoTzSVZC2TyDrvDohTwBVkUbKzbcjTcw3DrGkyuygrcSPLFb6YyAKzaM36JT",
  "key10": "5g13ZbotJU2RWm53UaJfxP7142HYTupCiWcAkwLCf41W3NfugcR2efqt6fL1ArTE5m8Cp3T5F4uthY8aGkzakZ1A",
  "key11": "4YSUf576FxVXuXrn1TUk8YRxUqYPuS1USCTxqWLMUWYnRadF1NE4KUEGksaLiVExce4PYX6pizrym1G3HNwFS4Wz",
  "key12": "5Wmwqyqwnask9R8sSde1YmGp8SXJEXvpwCmzkQ2JKeDauQCZdu3LZH9Qhyc17JDrXDoVe5XUUMrpDQYpS6VPxWdN",
  "key13": "7koWmzNTF3VMNrA27znhyJVcd4qQpitKuJTEsgk27RzH1Zi44W7ppNgBs9ck9e2YBKfsy5AGwattGDYvCXxfRzW",
  "key14": "3rtznu1mgnXUfhE8PF6RY2jZt4DmZgvoZVqnahA9xVLyhddgBjGuqEAbYVCdzjUQZcLJyZpeoAESjLT3U9J9S4Xo",
  "key15": "2k86SZKCToyAqsQ6wjLQMtwfzicVW6bkMt7VgcHUB6BviMs6tuWUCoy6E7SWho5JJ19FhtFjBvjUHJomS4aSuVaT",
  "key16": "2Yr8ZXUC8frXsyFWxNzvHm5xbjx7ZCjpLvsmVaMtWNCq9FkUD3GQCgQYhGa2J5CAvakm7SDFN1tKrjFciYNBmtS2",
  "key17": "5oSFuhrdG7XceeysJ99FC12Si3n7dE1KFCVUsVjn8p24D1Suox3L4kTd4XwtwUX8ZRy7tWmE6fvNvRi32NJ6EAYq",
  "key18": "3ntkqihy43mLwgdbgdiU7E2MhVCXt26JwWSeQWU3a4D3Ud44gKCywfoZqkraNm8vE6vnGJF3LZUDuzxA5wxRpvhE",
  "key19": "3UzMGhyvGW1bKfpbWbxQqfTgCFhK8q84Q9XgkFdR5sWNgb7vYqGvFP6NN1avNkLwGxbhzEftxuG36yyfwnU8Um7h",
  "key20": "7V71mEzwKN7ZvaSjm4AftYKVeT38r6kcpRNrv7hCPXDaUHdPjQMfbGkvGApq2k6QrHzLxSqLvhpmqqnmDUTnBVd",
  "key21": "2hamJLL9Snwimjo5niB3WnbLpiZQZhkNdLdpn8LaJC3Gc3f8ryf4cNUGsYzhnHnM6BQzMMh7GbvqtvJcBkBWoebe",
  "key22": "ZRf4m4KHzAKvpmNeEr4uuPYLgMvUWQSix5Knp4ckmAPR7KZZkaszDBR81RMSCjDWaeHKpdDtCFoGzfgyKffDUej",
  "key23": "41DS8dwoR2qatwUqsnGarVGkX8Bfdhg8hkF3jbwnnJqYK7if3J1pMbT7ij1aV29yyvcvBvnUoeaFNoZDyckTLXRu",
  "key24": "5WpwSudWk2oumtKf8av8osu4U8jgikZe1CjHvcpJ9ssJAyDxCVAu576fKtdK48wN8M3HoKHmNNu2M9knAnDjw1pC",
  "key25": "38QgF7ntwUAhLXLdhhjGWHHGVzfeMZXv3Ysyj1Db1aScAEGu4YcVvSff9u1kTUmjjTwxg9L9NcmipVB5raRwkuQ9",
  "key26": "4FPHjLZRnWVGGBsZiZueygCDB42fe5k2gUEqr2f9YCG268cRhjfdFtcadNcXnsGwnd2VdZcEAhLETiKZHUK5sHJE",
  "key27": "3YmrHR4phGruQBD6YnYTvn3DgjFSwFg7XNNohMQWqt4853iJgrS1q5JxzUGozDdmcZ8twvaMiGTu5K4VUAVemssA",
  "key28": "28nUTNtU25CHzB85chmptjLzkaJfKrdDAC8pVGCwSCUttgW8X9BdYw71FbDbJqTpMr9bEFv9k86XXNzhGEAxepMZ",
  "key29": "4RBmYbm6Z31rXzE9VMokC6vGxog2n9XJNvtUcbzG9DDDdZQfrUu7EJxzBG4G3kdH16UDFwqao7GQxxHCoZQYB3Kh",
  "key30": "31oiSYxkGWLDZFL53wgCSgFu7FzMzKAfqWEvnscXjC2G3auWsq4vk8VT3H5GtisrAaM3tDuxx4ruLA4Mj7M1k3n2",
  "key31": "2VcDWUkYYxKCnayV6waK18oHCLvagKVRPTk6GLFYVrkopcr5fnAYqMhSb3gqAtHMvJ6T4ibjGPSej8cHSFbGLCmA",
  "key32": "4zPn5GSAkriGrmsHiEyZasJ6dGKaYvkZE5e16rDUe527p9f9HurrJKtoyEjZdR5qFzFzwG2ckuLUJd1JFmULVmjQ",
  "key33": "5S9Du1T62QzSPm9711wy4D83CttNQefTVsQ7MKSUFmPtYgiT45JTXYA3pApTXN6DXH6AR8nabK2J2fNeJPkt8ACU",
  "key34": "3u29yexmDzw9WJK8ra2evANoYSzCSRge13VvETh3GQD6oy7Mo1y6cJrUGw6zpPqEJmdUdNYHDjgsaXVamq5tDj8N",
  "key35": "5WtQ5atU6NMtbTZrKdZ4UkW55hnDWRnJpdNvwg9c4U96LV3A6Y1PWN85aww68aZXB8tc8BRTPbxU7j1nP6WRmJVG",
  "key36": "5nFmd2Bb73mEVaidYe1vJL89k3mthZWbH2pKZ42PU4srHe3CwSqmea9S1NbiPcpCpo3q9p9vzGwRwKcjfoE9mJ7z",
  "key37": "4YaCeog7W77q9HB6oVcGFRBzukFHZa1RdzLsewzocZ3YRGM7t4pmXm2HVcV9haPhQ2scUWGyJoH3xK6BkwtqvFgD"
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
