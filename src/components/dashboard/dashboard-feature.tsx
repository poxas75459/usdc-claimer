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
    "Fo3cBYyVM9ce8EorSzYn1xcuavvFyKyFguj5YQ3UH7u7ck1SeksJUWfY9aQdzB94ukKtncSgGoYBGeJ8zgWwRHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3u9ceMNEaqvQsbkEiZrKVG3T7rnQw6caNdDbKw3Vgiw47pL6dQVx7Vdqh6rMKVakH3Fm6qQGnCom4kqoQcfoev",
  "key1": "3paAnxt3J4ZfkK1nZykNqKkM5Ymcraxv4UVqCuqSVE9bF33u63n7MmdeuDPwA5wEEhaLxvfbe9VJnjZGyVaD4Nkx",
  "key2": "4u3L5kidhcKJci1KqbZiQy9Mz8NUiuT4FMnMG7N1sinFUAbUtAHMwHpLxMtjBaiwBFCmH3e8WYwzG9Kuh3rymXrv",
  "key3": "3VbayY7PW4c3R6QZ5EYBJt2ZnV1iB8CPJw8kn3kNWd3XVR6qeHn3gwqDLHPvAGEiH682XFyyayjgmNx2tHBJyNe9",
  "key4": "3T1yuj8f196xNdT5UADePaDjjBrvymM6rpXCbnMTvAPEUE9WDVWw8wAQbhFX2LwYahUrmn8sgVvJAKEyjJTHFqNJ",
  "key5": "3tUEqSDtbBZ7XHKo8dZR2AzW3iuoBZCy1qat3vpyWg3EGDtLF2goWTAPBDmb4sYRjiDk3Fzigz2KodpX1kLbJSJq",
  "key6": "54AjPFXGDS72S7sWCYteytpXngpTHRdocA2rz65WizqviraoFiLnbZwLnxyMiuKhW7R7tKNuAY8vzAbjAueeaU6M",
  "key7": "4GRZvT5RKk9UNPFm74T8X6ZdaGUjDDgh77787S8rE9rRpfHUaim8o4ZZTtHcDeVEsKy16rPZNykN5g3So4ArRKMW",
  "key8": "mDJgvz4DYgYbW9R8EokfVPfAKa8FWRupK1Wcpv9TDYn35JM5PqX79iKgeJh7GZ6xBvCxY3QX8SXUXYmxCDR9x6K",
  "key9": "5CPB3T4TqfoVPjVxZ42rRehnbjNoaNRmMvNej4j75BHuZ5DWhFGNSrrvT7iW4MW4FtGdHcSZz4922KME9567951K",
  "key10": "L4Joj8tmdN4FkEX83HUkcQGCAf94F8MNQ24bdz9L4iF8qDZuC8nMsjDg6SRHNSv4LoFVDzQ6NerD5JxW9TiDjxk",
  "key11": "3Gr67YESt4o3RxxvcdD7YBx5v4LaYxbwqMYZz6iur6Uv76ARbho8RjCHYxjnih14fjKXSbNynk31XJ6mfkmhZZSp",
  "key12": "vFcWc8Y8Dff48zsyoRFAem4DbAHGBoeYpxVYHHTvBTP3jLgwhbqKaqS2EvRDG41TtXsS8djQdr3zAA5hpsXmZRW",
  "key13": "3Tn7ANiBusmtm5hn5P9arwvk8VnqMUr8D1rEnpxrSJ9nF3E3yfy5owdyzyTD3Hc2nLrbYTwbdoNsYL8FDyUnKqkn",
  "key14": "bXFao3ykGmLiYJPMefgY8YBcJu24vsDVH2yqXkjsT8fVoMXiLrdyWNtoEch2yBH6dHF9h748JG3ehau6pvmNG2z",
  "key15": "2cUwRZbmZJLZ6xxv3gsHnRbVQy8myCwDGVCgowgjRKEF5hD2awg1xFKA4LXf3VzEgiqN1zfu91aGfk834uLV2AKv",
  "key16": "BmXAFRuQ59zu2ZnDsVMpPbxapBnYmDEZ4vXwkBypNn2ZqpTib5RpDgUiWZmob3hKfkmStvQArUmGJdUmhyG7n2F",
  "key17": "e2pw1xVgkAiRmey3SV52m6CTwSdd5Zs8qT3Zy3KtB7mhbbAcR9DBtXBahTUPWLinjefJV3K3Js1RGqjsFrUS1Ax",
  "key18": "3fhGyZoPWCiyvaiKiUo4Wh7Ggwf7akiF7xqKs3whUBbms4bWkdqAgo7haqR8XrHjgLMjPyHPQYdreitcbw7rpVcZ",
  "key19": "wsShM7fg5PperxJktP7ymrnFfioAY3uW4j7QomUASxjpeq4Z86LEi3D796ajTtxEX57aJr3GHrrZYwGARuhrX6d",
  "key20": "36cWSoHZfo2sDjZcyns3iVSJLVyiYF6n6ZvGbNST67rQmj8861z46LtkF2W96dHiApcnk9n3AS1rPFsTLrXV6xm2",
  "key21": "43DaPosMrqNTeam6toDwU3CDX7tPaa3aehrDBei51mswyFuNF8JHPy8714rcavXEE5P5h4E77hDjjHg5Z35y8SVC",
  "key22": "3RM6s7sKwYvBXKcB6724bMbKe4CT7a5JPRLPDUTAMrcdr6aegYLCM18n7kxJjGKKMgrzmUabSh6DRwTv88eeVXhU",
  "key23": "2QE5h38T7qMJ4GGzKAVwbsPoA4ZoD4TK1s7vtuiRgCF71wxVrhpwaJY7C46FfKrig7JHrdtvx74FEuXGBxrgybv2",
  "key24": "2rJnKioEnWxvf7fu8vr4KNFJj9oNiFjwAk66V7NiXmgn77Qzeu8zuA9zubkD91g4NZNzQ42BpYv4SEChiz7izHth",
  "key25": "4rYtGekFZ3gzwLPmD2Kq9bwiy85WYSQvE3GKywMa2XHMCpaf3fwxfuRBcQykQFyPNykbPdmmjcXHkRpXcVykkvMS",
  "key26": "2sUriWF8ew5c5MJSeEWmShEcVrXGGWsYypBvjJJSsMBRuWFY4NqWGgG7u7bQ2tcUL3jMDLvRJ39cy2hAqfFLWpdj",
  "key27": "5YcV1KDydB5pz9YRhybjN4y1BzQQmmJibuvmRMCfK4RV7kjm1pPAEt38SN1x3EEyvTazi8aDAA4SKSi7iri8CkhP",
  "key28": "5Jn9DC2BJZEesKBuybxfay5L8QP8HsWo2vzNnmS6YErgczcBFpH6joSs45KAupxXTXWitazbgawvdy89zSQzW269"
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
