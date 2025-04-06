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
    "3ARsr94D94HjM94UqaYifUuq6Ky7fyJnXxbGZ4v2ocjeqQw7mptxyDpFfmar228vkZADYcE3p71PTDtwaskNyHQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AgKYYQs3UmbN3CEqiSozJmafMgAuypGDbZmHGc1EBBFETbvZK5ED7Loyk6m5jsLS8GM4tueJh9CzEUcawPixw7f",
  "key1": "4tt9qe3vsSN5MyMnR7PLef2GP9ZPL6y4zG7xqXuaH6amPRpMpkYLpfdX35AJ4dZsLZLGFdo5hyCL1EK3CWj1S6gT",
  "key2": "5fkgToJr9j3ourDR6PyjUWWNHfxinWJmShZ1cSwujoiU4WwqFfVjgK79fRzvfgfgWj1GftGguG82wwEoKxD6jPGa",
  "key3": "3TSuArAjC4A9Tw4JoF2TMzxPiNqkXcv2hsL6LgpGvvT5Cx6qWWzVyCDQwKwvca5ZjjNqPgknehGbbmi3vHeVVFAs",
  "key4": "5zEdRNQjJwrVHGdMqDNMR5k4PMj7acfFiCAuSC1yUH7wLeq6JYuFLL5dYJt3FSfZZYzgrxgwg8sTZKnq25xp6jXf",
  "key5": "anPiXVn83ZVX9aNazqQTKnULVDBRtXxas3eFMhKd922nEW33nofTnFyuQDKzyxcKmSn62wAjiLJ9peP46XrFqgw",
  "key6": "4qNAGA948qDb4yGeaYCgSF6AroFdxEsMvXAfkjqVFHSQdXWHjLzpkz9hLj5R1HCX7j6zCCRSAjFwsM6w6bQndqMb",
  "key7": "3T9KpXhRhKUMQYUPzPvhnmQcf3rKXgfcXKPVvhp7jFDzKyHdq2cwMhZ3fAzf3VnbyeXrLLpJUpoNzrS2r9shVL8L",
  "key8": "2Fw8FqKRXrQGY87WPvoqZ2YQ3LoNXuYVsQ68DFDio1Prio56VfsiF5EhGM4mmoXFXDXKaEMcVortExkHvhXLBQcX",
  "key9": "4XmczK8hHEP6wWhFJkAAYFPXVQjUyHK7yyA4CCe8KmSqcXMmDB4m9G7JVrrumZJB1oVg8sH3LMB3Hr9BpXtyPCNx",
  "key10": "5TPc62EubQNsRFHCB14JRL5a7kA5BqV47kQp9WVAomFBhLqsDpyZSmCivPmwd8rgCPZkahRreoAzd9LrDsnYtgeT",
  "key11": "7cHEL1HhHdT7T6D8sc1fdSpeCSMiQH942h3Ep2cQyiJpMoGGhCBKcDzCV6bpkwbx3R3843zN7144YmcWSVznWXH",
  "key12": "4kBM6AXaezPv4cQmaSXXbfiHWLKS4W58TSeKDzqG9htX3YKxdbf5ipa8JjrTWBj6MwMjohJyx7L8Gwn3b1r633EH",
  "key13": "3GTG1s1A54UhyJTfgi1EAMuas4V5M48S6YTrbRNVoLvoRRJDvF4GJR1dJ2jBXoSw7KmnL8KfHjL9iWg31WJaqZiM",
  "key14": "3thNNegYBx48BzzT83EEkWfLGbZfSfvAJUVfHzcbSVpf3JwVyh4LDkvUqUyik7cZapPafBo6mJtuW1gArm1UKKqa",
  "key15": "4YTegUiTPNwm7tkKfRPFavuL8gq7bN4vxE7VpyqGSjn7S1aZshpyjHbKPmxPrihz9cH78eefZ3MiEpXd9ujuTBkX",
  "key16": "3hde1G76bFdTBsx7bWEXugQkKuh1ahPvjUE1tHmcHAseDU3CDX5amCgkoZgAYSVRDV6f3EoRUGPLdoM51nXSPuT7",
  "key17": "5Yd64nKuVA3o32ftJi8iVGa3nAbx9oVVmukJsHyo8wNPm5G4ekQkVRyRFPWSJ256SrKDTC6FjMTNF8Ffb37cZCt1",
  "key18": "2sygUeioDYs92ciG5eXfdTWEzgpncRkti8ayjkZecE4nZ1T46j4H1WHgpCLaBwAjPsQ3XEQ8sdXgyy7Ur9ex4X8P",
  "key19": "4xG5TtMFiqn3yKgezFuwGqgfgDcdHEviciEkM3rcZeo5Wts3S4f8ksiyg5rBd2oPkRFaoNfqWDprfd3z8XLzQG73",
  "key20": "3zERKoaiKuyHPR18PV16JAWZt3fYyW8is4CNtvETwc4J1oPKPj9wFYUGFFcyYFx4KAAXuoMqe2aecEwq7RKqd1yh",
  "key21": "SqGwE66t6xQibsGNBspVNZQWgsVFtZNerYB45TE38CVC5mCeoLrL5ZwCZioZhqnaPZ1sunke1gMv2BTDimbQcPp",
  "key22": "2GZPJKRdq8UyoY4srStLmvG8uca5BGr2aEAGafVSw5GaPi87P6HhCUFiXamtx1LCN2i7NPPYmaUHpTnqDK24A26q",
  "key23": "5LYQ7tTbL43Y4bxPtSeUeswoFAfcSGopYr3tUVhw2GPmUeMUkfC5wJuV4zYmXSw64yYCZAmGRursXFaDKYzFKC6Z",
  "key24": "4Ze7EHSiEqHn7FW6XS6iXDgzaQMCWNABdbbPH9p5XGhZzFxmqxQhyatHi3dK5xstKGaX7yGsAGch92iLH5LwhjTV",
  "key25": "3ni12FVfvUxiHFvAh9e5u885FMmncbuSsBLo5UkeSggj5Kt6xxp8cNLJZRs5t2A74Rmh3QkmRcvxKLsf8GxqESXb",
  "key26": "5Wb68D14sMxXH8uApjb2j3iDfXjUtczn4BeMRgUpjgS76p9nq8RSWCdwnX9itwurf4uETQx9Y9YGLXvVp3HgKyQc",
  "key27": "4vVXB8vXyDZP9U8iRww6P1i7Rc3GUShBHbXjVTxEhETtkHoshJCZWEL1cCs36T1ds2sdPQfQT8WxznZjPZabZh9Y",
  "key28": "57d5KkcfHtNZaKWn2pNMWCyr4WES1pLGSQmNr5dFioAwsQsv43gYGAYz9y6jhe6vokNoUqjk1PPiwAq28CH6jzzi",
  "key29": "LW2LZ6dtDyrNErJ9sFtFYeK1NWXXwxQsHBkDGpq6AjBswfbwn4PonrnkE6thHAmsiutPeFirAh5iFpxxkGoMxuJ",
  "key30": "2G2vC1VuQU3vLY3iVqjaNRNBAZ5vGLNf3k4jKRSLJatAzCuxWQq7tJP5xLDMJvMZwwd1aJdidFtYNByfiNs8FsiF",
  "key31": "5MZtkxnUCKUg2FsJJereKf4ApjgrXDzzHf71u9mo6dtUXj8EAVV21aSaRzwqUCP4tFnHafaaTvcUbF6ATgmjNnrB",
  "key32": "4s5CsJMKm1eFyZcVmmMJ9TB8cCuH1nP9RpGFhKXAiHuo4WQ5bbrGKaCpqp9dafcc4niGa3vfWmvx5iqXGWR8bZZT",
  "key33": "4JarPQNTf4fd6gEGyAHyhvfHbVvAYoAjuoYacGZHk3PgT9ExoBT5J8y1LWnrq3S8gtR6SwdLPveF1gxKpAbDS9Tj",
  "key34": "3L4MF66dJ8c133Y9yxewbLUL8puwD7gMVx4SP9jHhW6yUpVuJtiBKr5TiAiT19JDfFeyw7s7UcKK67o2v2Df9cpF",
  "key35": "4W66jUA9LKFuupP3jGFb5S6Me9fJAy5VBxniN2be445J5bixXxbe72c788zLfB45gvX9X2AMTXEz3ZY8oVaiHXjg",
  "key36": "3q7iVPJ7Tvg1mh77yi8ofaQjTbVJNbP7CKjyoXbos1CyZq3VNXBHyecVSv7Akd3FEnCCVbCeoxCmMeGrVJHNxSTb",
  "key37": "4LHLuF3kZKB2CynvHRna5QzMnXWa9EFmKZwjefuWcHUaL3zhYYZrJxqntYChRZr6ewmgzLFw55JNbfr7TTR7UUe2",
  "key38": "43urxJxGdDbULLBkW5q5EMiq6ZWP15ZrPwyYHXxWQiUiQQivEkFU6bE6Z1sdsnRBiDieN163ZxbK9adJMEbUrD6b",
  "key39": "3nRqubXXNYq8ouuYqaib32sPi7sgZFzby2prMT4C3dgUEvSu1Jo99b7hDy7TKNEiTVkmeMhFCPT9dB9pTumZKQbb",
  "key40": "ACB6gm6k2tGGcaFUgjkriZJCgxuaS6SsxE1UU2v1HAcvN62w2xnnGUPoNcjmhf1GQ4Ldx67F9BEEJihB4hgxbza",
  "key41": "5s522vT99wKcG629RR6RyuKkTp2QkvZTXBJbV4AT3zy8tqvUxA66WiUDEoV7xovnPfudZ9fn3KfcRdMZDoHUWEEj",
  "key42": "3UhYF2o8QydD6JEwqTsuuppGaiC2xLVUGZPZ83xp7crE8jgvPLUYpjt1vmDqhathdLvqCUK6G6qph35xF34f8T8K",
  "key43": "3C9zG7Ps8TnhWGVQ9FbHWtYjkyQAVF97ChM3yxV4Dz7Bgx46japRWyH962jJRhYqrJHroihM6E89CmnMSzfcwAw",
  "key44": "5mH4HZ3azcUbz1RkyL1M6BP9cjZ8442ok3nxpfCfXmFG3Vo4Qz6jdLtCoDvyNEknt6nz9bfqDPd76driD6HyYXim",
  "key45": "4ZQZEwJuuHjyc5ZWZAbrqU85Pgxdgwi78BLU7ia4knpcqfTzsjGAjfGyrKbKF6CRbGqe5T21WBhv9TxyRCpmwDyy",
  "key46": "5gw8Ld6MEKioDR4y83cWv2R24omYu9nS2a48BJhaWnTsiZUcCEvT5GM14oEBJdmq8HQTAkozryiAntWE3uM7fe9A",
  "key47": "3bgpzkcqLKWHhbDcStUNVZjUeJZ9kfTckcBeTrwU3uTjR6KYiD7LZPiKQwFDfaTyuc89PtMU4NNEzgXMZocRHWwU",
  "key48": "4G17mEYGeahFUiNKw91s1yHnRNc1cp5kvfzzYWiyPp9H8wry81bK9Wfj8LFQ2AXwqRZ6kz7ytb7tWEm3NeTFbj7F"
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
