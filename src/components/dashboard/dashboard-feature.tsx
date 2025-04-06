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
    "5eepN7ah4DJrq7SF9JpKAXzNCuJwzPLnNbgoD92rvwZ9vDLAoruT8bCQ29TU7cK6fnKgzd6SMJwG4dQdfzUrny6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TnwRHy4A35Z1cBwzE3QP9xqhJ9K4E72VMQHbFBSGGw5SCT3f7E214Re23MnkWJJaNfsg4p3D88HhjgUKhEWo2nK",
  "key1": "55iVPV3YEiMRKRNNa566Rr8vRyRL2e2TXCUbGjhssANuKdXTguLEy5b4w4QRhBW78SaSr4wMhAvHUikbLW6jw4NB",
  "key2": "3A39L3MG6dCfWpNYgLBsTHr4NVjuacUb2WRDy9SvTAjtjdL7NvK1EE94wVruDNviHZWkWDdtm2hRhuNqtvEH9tsw",
  "key3": "5XTgXn563u37WvrYWtxHyeyTNst2oCNbPWqZR8Th35bJkCaAjRcM7NvP6JavuAMTiP7JiVzyt33tSUyFK9yUeKaf",
  "key4": "5MDYqcVThWG6mtsfkN7TApAqQ3hQ5R66iHu16z1F2LMNExJ7X2np2w5d73QoXviYbuzYPegd7GTR1Rn6sinaunR1",
  "key5": "2dc5w6ZLeLVAZmxHs6mf8aD5TA2n1VK5u9Ka7VT8sgaz5iHyLgDAiG5WY7i8RVobqgvnwgw3eJqnMzHtr2HxGn8a",
  "key6": "5DtKXEvyfkPm5kwRKz4h1xUdVksGq5wGAnhaLNAbGHRokyDqdizCHV4UPyKvHTDr3MdMeG1jgGXhkPYYXY3R66QN",
  "key7": "2L2med89yTLbqqE8ybtuZjHBo3d8Gx5wEeaa8PH68vACQKHCxqub4nk6BprLhbNuRGPBNaAty3nwy5q9tYnqvEKc",
  "key8": "3GZWQYFEcrpT8bGTxjZw49eMECu6DjJsk95xAVY7uUMwgUttxLDUu6K2f4caA25gKvW1yw8c1Z4zK2L8JGuPspVn",
  "key9": "2ovMJEEGhsZWgKWFm1qRFDjp1pCiX4fCj4bMPCNZQyqfsHo2oMXP3KETJf7BJYqa15PcY3yRLrhycNYTYLtFDn4R",
  "key10": "37GMG7Kx23sti8Jp8MiUiSfDZvCvhuEhyfVqnXjLpQ2v5aos1LHWT1RSm9ryMV4UmuaCpFkH4CsLhPpURUNL6DKB",
  "key11": "2py3ysnFN9ntGgra3NH1mX7Um38Eb8WnHw9tp2pjFPJhDWFeY8xo682R3VnoSk2LBQ8RiXGTyLLz37kiUwAQ1qaW",
  "key12": "5zqtK8nofXcvaooicwQNpwqrVGZSKVRFh5EeJgmzQ43NZEGx4rbwcKXCQD1Ut2vdVLuaG59BihTMckekKJespC1Y",
  "key13": "iPWXpL29uwsWtCEZt7jhjrERRkV4GHaCunya5okoSKDrbvmC7HvFL27CT9P4bxiLuevxiXsPBvUfoKoEWrCZ2fW",
  "key14": "5SkAZtdrPqK7FWEaKt8TNv33XSyTMEouhqwKagLYLfWKyntWywCppJsAdgKCFgFGDwzmHj49BoC4SGYk3SNPCHdA",
  "key15": "yUi8GY1zDHZ4Qut6G9oCPXA1zzTD9xouoJo1HEkWvuRfwXmyhN4o7kKe1MqJE19mkWoyscNfwuhUXoDAPcoaceG",
  "key16": "57VYFGnreGvJVnbZx1nreU5yNiad2ggbVUnuajU3qGpTu6gUNkEzNwwBNjWqC2mBLGCR8JxZysR8GQkZ8CUvyqd",
  "key17": "5VCkA48X46UjFYhVP2P7agEbJcsYSwTZky8A9oMyfnYJjLr8EzprKg9JF47WRQm33J5Hf9deuSYsj7459goFd68W",
  "key18": "3L9tt15w3R6uFEyVCkMXrLREZSGhMD875xECnzgysbLR58injESaKJ5sSXzzVvXnqn3Mm8dn5bGwe59Sq3JVHmLB",
  "key19": "5v7gdZmn8Gtm9i61gJCqb2jwgDtVCvzPAJoTsptZd8SFfMvyyVuAemmKg66MrgNhLeQzGKYF6UBC7xNNcanUyYjm",
  "key20": "3cJBKafeQsU2tZDU94yqtZLaTZaWc2oHU5qMfNgqwcKEui43SUzH5rgEBkPVisFWyNFrnPamJkN3xpFFSThD67y4",
  "key21": "4Ly56iBvgoXXMzepQPvncFLErbdaZX3AeQUsk3ZjBhsnHzPJZ3VtGP7SyXLPno7MBBJgWm1TsjBHfLX1jvmsksX6",
  "key22": "4Kdi95ZikVdxjnwS3UAuVYsYNmgEZW8v5GSFy2iMywBKQSaGGB21uLeaySyqNNGgwDwmE2myupeirVQRSLNnqC7E",
  "key23": "2ENZoY7gvy2UZzrJAUxKrVhFGiHzNAUEUc2K1reZ6rXhCZWLzPh4fVGjuu2bjXJeAqJViU2zDfzk4At8wbugZ1K7",
  "key24": "3oHPkZb5Jv95gi3wdLjepr4tpM2a5TnDY6f96hU8ske9yYDJBXg93itr1D8mjcpZ9xFT3vL41rPCeGnfhgmePYcy",
  "key25": "2g6zpusfAJkssWqU11JmZqRufLugki4HSje2ysL9RWnytMYyXRKAJjGvtUA8DbQp3oRrXxSQJVRfH7ReywCsYgc",
  "key26": "4RbhiWEHZGrVmVAvB57yfE9sWzGNaPdmEKBW4iVaoaXLAhz18ePGSERz1puqUZXzq3Xcn2oyoNpWLUw3q1wTmpN",
  "key27": "3y94op2Ra9yiX3HwLxZDHiPngJzGa3yxZhHEcwkqtikwpjnRyWyoNj6z6NP7Ex7T4w8egte5o9oPLoFdiDGobq5G",
  "key28": "rgUZWnc84SW1EGSaeBEbxdqbwxtPnnPxUnoDqNZksdPcf7SbgKmKg3BiFwThSj1CY2qrwxWkeo9XibxEtfjbNfr",
  "key29": "4ysCN6bWUuuxHJ2yQNhfsywioguBkFS5TBV4fjMVZWjQprBd4jrtVqY1xGJ3NUjfnUJX5o8Vj8mK9nGcFkZRmoVM",
  "key30": "4WotX2umTiwVefFTfek8Nb31tzmptkQqzaMdASMqMvmu46jMVWzdH7ScyB2N9UuFQVEaEigFCXY7Z3vr91Jw5a8H",
  "key31": "NHWknC22CaJFvxoCwNA1EhdHu1kLmqgof7Z1myaNRt7U58wNwgZngeeJC7RC3B3ZSpw6rRtFoxwpUr1cGY3bAbm",
  "key32": "5Afe9P1ME7aEYYYZZh26vjCjGjgJ8UbUVRSy7a9JXMdNj3oZmYxSZK9mswLGoJ22Lf1rgCkBVGdzWyA4nehMQPm2",
  "key33": "3qM887vGDbhQo48srCBP3BjRTX3QNHV2fnQg8WcpyLAjBrPpjc6uKSfgakPf5r3fPyA31envSoqJJLxCi3GUMouV",
  "key34": "kPPYPmq3FnVexsiA27pL77MdTxKgNZJJbNt5k7kLXZJUfbLuBo9uS6NdQdmPuiA152jSusNK8cvZF8DRYJoJHeS",
  "key35": "4cY6EEseankNEFRNzKRiVJhqwSmEHSxbtym3CECcc3NaWvZfyyWwMAXEQRfNUUnWetCcH42dKoZR2GSLcpULhYsV",
  "key36": "4b422qEdQrSuPi7HFC7LmXFCPMBimNaMqvyCzecZ2WkzQoc5CYcJKCSDr5U8RajSE6GhZ8q5gBqaFRzBxoKP8nW4",
  "key37": "5VdSArv55rHJk5UbPHhR8jBmsL1ZVf9MEzRsZFN59rgaxaCSCK78WoSR5UKuxGdvGtkZmdAjCvcjpXameqyqq92c",
  "key38": "2Lhegu9jW5a88a12qM5RnFtZTzepB9xztzZsMSuihSAKG3CRa5sV47jyqVMCBTfnjyuVoU3j7JXJnGB6DNUXeWjA",
  "key39": "3PxN8SvGT8MqA75fiLDhNaAnhtfttaEFiAMsYJ51aoftPPJKDQ42rG3SRPcV8A9iXkfkW5NAWBr3yVJorGTKstj7",
  "key40": "qha8gb6CPGPszvqhM82PLni9g42xeBsssQTmf5fiZugRTyAr8RXPkbj4nb16y9rsA2BFypUy2v7nX9aXWR34svy",
  "key41": "CU9omqmk8gWmjgkkE9QzZBSB1kCj2CsXq1Jkv4ffqzt4ESkwDxejvo4upkc9FqjdpsKiNyKqRijdzGsv2Mb4C45",
  "key42": "5zonmgveiFUcGwhuvrAZK83yp6wGCTbJhpQevnGH5kn3y5o2UZv8eY52nHWday59GSN9tQqVCbHPmTyWv3fS7bqq",
  "key43": "46kbBcDqBcUqcz3J1d1zrrShUtxssGaZC3CEEdPvhQvru3PWJZxt63UsPdH1EwzXa8mtTAompZfV4ijPkEpX3ger",
  "key44": "57RBVrQigrgJ27JS2SyRhdaett7PUbhWTpFWrRR8ZiunHWk6adSDqb9HMZvTzN69DaGwjviLFcWjDHhxc3JHMwx9",
  "key45": "4rQ2VfQccAC523dcvnLAwyHkwAPqfqqpWR2yAtFvcChcn7TAwBTrzP81zd3oKgM1GtNcsaXtmn2Rkwx15jGyg7T1",
  "key46": "3a8XKGgEKuLfsSzMNJvyroh7K66ekpYzgLF8xNDeTr33BGe4e9mnDgtJfFfD7qe8v2edwWZEusDjksAu2ZHTa7DZ",
  "key47": "hGLSR2Ytwom2RXE2sYzBAW2x5uP4Dj6Pyp3LpKin4GL3DkcrTfQFMo8m1Yn6DAZjFeF4cDda4D1zVYbFFcjWazg"
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
