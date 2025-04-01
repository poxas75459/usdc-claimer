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
    "4fNZSQ7VWnMyWW96do3fs3Uiqhv2SUGJCaatKdEKaQn5gc1NeyZjNYsyHnMXtYC9dJDPZFWqGNuKYgQAFPLmbawj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZtX6KizMZ8CTRc3Fuu7QQaGyYZjdRoHuUVeXLxbWsEkaDm6BwQvZZkBzgSGAJzNiVrH5iLS3MLovyrjknR4yfC",
  "key1": "5TuG4a3xMR3S752XSCk8j85wWoML6kY1pwwroU4boWQ2PhwZ84tPawpTFq3RygJtzxtabyJmPhJHmcFZ5Sn5ECRa",
  "key2": "2QFb9CwGJRxiftEoeNRJ2tQBW7FzcevrqYbFtD9v3b4aN3R8hqA2WWyRwgAsgzcJf9nVPUdjqDAttnAaWqXHbzFp",
  "key3": "4yPg5DF2GYGdW1mb9CiH8FNtsE5tST94TRn235KeidTjBhTmG7Dhymt7TVrNchkFrVXnp1wWPhh6vTkG8t6XA3kK",
  "key4": "3LMQkwrST6dzvjkcMYWEDwa9cfYARCCiG1tQmygxwAehz9NwF5kQaMBwjPo6CC9kxyxSh2KjoMswNnsA9Jjtxmy5",
  "key5": "2d5EpJRbZnazmfpf88krR79AVEC87k4VmQW9zNv6WViD2vARefcGMqNMGYbmxnAeqecRekbtPdgQEq2bRAhPnfac",
  "key6": "2zvvjbuaNBV3HZuYj3EEaPwiHNCn7CzP4Cd4XSLEk9F8vYko9Liy5aLDA2qUWrhYSz4vnyKTepGPF9BUrt6gWF8J",
  "key7": "2UKfbXVS5XhSkgg4s1LuX3SPAYreZ5MHKMHhF6qNwMcm67pbX52UXsCVjBmuabbnrKuU4TRFzQq3h1vCgRQeKKSJ",
  "key8": "5EJpu5tnuAES4nGeSmZ3g8ggtTP2ETAGXzA1PxkjNvVFfGVQ3bVEf8s9LDnhHocbqrMQqxz8kVsGMpe6YBj35cZS",
  "key9": "5dYT4HahuUhXo5Bw3T62AasfEigoD7KtDYxpgewTZsfAjz4MYRUMN6UH8eqidy9S4UCHePfn6fyQYxHnuRhenn2u",
  "key10": "55vCuKZ8BnFBRQvCEE8Mu9MdztsxhniKVVpZeW6bg5mT5Xsbwoi4BqVwpubQHbLYjTdkm8JocS5oWHQmBT5uWNYy",
  "key11": "5ZJ9XZcTyqcdRpWuEVquMQ1HstTupwvy3WA8c9hHtXwDuE6SxLgJaMKdLtxU4R7Z7tdR8gqae2aWG7xEEnc6U2ua",
  "key12": "3TFPpmVwoUMmFuUvPPR8o2RTaLzuSoVZbf13iA4vV3MP9WMi5yDorUkgwSMYL3SYbSjt4BhWFzFn82sNX22TWhka",
  "key13": "3K3yQjh4Cs14cmuFfiYXofBSRDoNidFUSMGggNjDAG7RSCAvXCEW598sy23WpgfgTxFioeU5CcENyXSGcjtxkKMK",
  "key14": "4n8q6G1QZAT2gQP65fRHShCpoSnwPigpANX4zT1bzdk6nxVkrD9q8tCia5eDySutN1i1hi4ZorxQ6CMgAAGDbYvA",
  "key15": "534BTZxtiNUdNaG4T4QE4smfRJtixRrYe21zfAnRAs8kiFgv2ySbx7SDSButRSo66vzDTGHx1ADvH7Vp5qh4Dz6R",
  "key16": "4koAE1AgpBgbRVpDShRoQg9XGY2embu6Pv6fdJ5QUfY8HUBwfX1n6jzfXrvoa7so4TH8ug3QmW1vysZ731XBk2dn",
  "key17": "naMh3kZoNo2jbS3PTfqu97hiUS1ZtXwb4WbLHMdQggFip4B5jFATLZeYmc1bEovRS7edRaWVT5mGi23fCPGVNxj",
  "key18": "2D1gdaFbDvUMidnv1bjZbNfYtmYRMEWhG386ua13mQMLTBR75pUP7t1Cvte7u68MwfoxgGpnHKJEZcNf1wX2pRsa",
  "key19": "5XL3VVPDBhJ1s3GZzqbqXmMzj1X1fYRaGFYy9cztvD2BvvMGeB1716MgPT1ZUiN1CzzCuaZBsuHfu5wJ4MSPLF2G",
  "key20": "3gTC93SFeNuMpsSZWfNuaJR3rMRc33xwm3KWUnQyTKsDDVPX2UFhT7AztVNETJQFFCUnTULu55d9MbwiNmoNm7fw",
  "key21": "3jBpKcDhXD4nEutXfB7LrUKYYWbzuyfmDdtMoRwSrmqJTvn9n2N5HHX7F2ZHJmXdwa6D3sAeuSZ994YHjh6yYP1U",
  "key22": "3HtERoMU84649EUMg9DiQkpQMNTQNTx6FZD7JK12qQTAEK4FKWGZefmoYoeRnTcfKjVeQxdAg8rVy96VHqrZBShs",
  "key23": "3CpAgvVUL4ZrbbQxyrBTTmAU6eujBztrUtT5v6DkEXHTj4xEUG9tYdJ6p8edUDZDeJhRXwRNgenfk4pREap4XVbn",
  "key24": "CSVmCbe4GaHgKfZ1KwTVPn8jnP2t2nFymHoiYNsQkv4njtwHKkc2SbBJccSniPFxh1Luv9tTKHzWHa74kGaSYfz",
  "key25": "5KcfsnzYo1YYM8XtHWnZ16YjfQw1G7t5W3nn2Zcqe2oBZc87cp66srezymH71yuohVZaPdRUwSc8sdd5UvvYJPnY",
  "key26": "3MyTuQhFYvEDwAukyS43QWnCXt6t91dEXRFMjV3oFLHy44QxSunaKy4myNyjXQZsNDScmYeZBvyGZhA7EAVn49LP",
  "key27": "5589Lon6e4A1Pyq4J2K986oe6JHod4RBNATAxwa1oCJt1Mm7WMCM3y2BfbNatZXcpeyooVnkedKrgJEpHGhACDtR",
  "key28": "2pBukn3iuXGbQyWLrmsLM7EedBG2hPtK2WWxevPLmnSWqbA6yvy4KuNe1LcCcgbkSevyJ4T4GS7XJ3sk8SNvb1we",
  "key29": "3n7bzWt9DzneqcBvJLcGdF9Uut8kUwxnbnU3ndw7vgtCY2UjKPhiqNbQ7HPDdGwvU3v6wojbZ2s9U7fsMnJeLGum",
  "key30": "2Wby7wjp813NNiLcSrZqcY87Nh7842ykyGQNsz3RT4abaXt88H45gR9Mpw2jSaCmZmHySdcecQmySYHuz1opW1XY",
  "key31": "3fXAieLmfFrD4Zkb1HS1DPqyUSTDDmCEye5j12MAHdZp7f59JzGUWyvFTPvNC25sk6DdPX4CFTc7NYTDH25u8XHe",
  "key32": "2pUvoAK8ZehNWtFGvR1BPxoqYgPcAbv8GrF7TjzVsd1EThv2pbQDXuayob48az2JAeTpg2UJGBJb3F6qqVJ3NxX4",
  "key33": "xoEL6Mrz1QzPaqqnvceDKthQiHRtJa4wQfsdWTiJN72PBxE4iuU5tYY4W9bWSSobwTTb9DEqjszmCn2h74jXrdL",
  "key34": "382QpsSfYnRFREW1hfpwyXFFz4fTAETHPMXRAojXV8p1VLBKZYkzs7KhGit6bdt2M2WF1bBuBrM8zYqTx5G65bEE",
  "key35": "284PQRK6RPKwpGWDzkbC6KFKnD9XD3SYXq1wTb8VDZNCw5k92M2XzjfY9TPhJJhkgnrymcURxiZ7BniaPXSW4V4V",
  "key36": "5mia2dxW5kCyWpVjpt64BfajQhu2MLpJFFpt1r2i2tZ7AL7YDkGfqiSR1287cpfxwxiehbCZWny2ufgBrELKsmsg",
  "key37": "SS6Sivgad5XRfc4gUGAVWXhWbwBEo5Ljz7EyiBziy52NpdU9S5giesH1ZMiNVi2DapCbZFdj1CNURz33m5zxA96",
  "key38": "5fZoxktmgPbz6hFBwJuhgWExk8XLtKRQZCv7pVf7m81jJDzdgNXCEvgrpQhQN2tzXcAoC87TvzMTUA7ihGbQyppv",
  "key39": "4bDonuAWv3bnDhnrLnw26CXyb84PQya9HGZvqDYjmJa6HMyZ2Z1BV8xLX4LWf2jNh8wJ8CjnS6gE429wcw19P2qi",
  "key40": "5rTTuGu16kDYX616zYydwnwhYhdzS1kBE1tKts7cDN9qfNgK4DryMqGeCBndVjL9MCkt75iDYVhAKc9KVuicccWE"
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
