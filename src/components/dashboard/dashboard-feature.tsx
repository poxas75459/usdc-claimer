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
    "2auc1gAdwjb1Gq8LXiaBKcw1nVq6wz4jDSXoTJDhjWfWkErxXEi5d7ZamL8PJrsTgZRPdwwQ2gt1D8LyLUb9gSUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cwip3KESArsyXMBKCPVjFV5tqn9Fssd7dpRG8NwwtzQCgrEUW2WYLNYCQYx8qzBsF6rJKGbjk3r5rXNpnG58An5",
  "key1": "FKPP3FZTBJ7DGuuprcw1uA3ax4CQdSnHfj7vRGPMtU2XoUbAti77ZSrqkaYYsKcBbZ9w3NDBtWvXH7eCB8YzWDo",
  "key2": "4ZKhtipXMxvHiBpvBQ9q42DJD8e8QAtTmgKfTqdXgjeSSaT9VREXrP1KZ6pbf8cGs3Mm528PzbwJHxpuMYJ8cYHh",
  "key3": "3h4SC8R6buyxng5M9WZu3vxfy1wmKhxhDbiZRVtDPuZxbLjVk57bi9f8EDzFjMoFSRjJdjodezGHPDc8yQXEA182",
  "key4": "4WX43MyD7fwS5v8tv1quNGP2UVu2LTZ9g52NSET9aFuxRC92RtkVDBT4yEpdogA9Xb9cmKohkVZU3YE8Lb3rdCLS",
  "key5": "435j9NQML3GrigNuzeLrhgZYn3bYehzswiXAtJsBgpUgz8e8Qfx5fwQJikapeNFKj6pW2WRwvD7FFMC7qHgVsvvg",
  "key6": "5BwLEo28QdNNXz8gVMEhNGNLdZHcxiyD77rNUqpzTTuwYmsHC9NU81vPyNS1fZfBhvJhcwyTLPGK3fJS8tz88xPD",
  "key7": "2mtQWxPb7Cy25nmdwQbrwFAZrdbyZTHGSuu8XsFjJ6dvGZUUQVGaNsz3TMXF4UEK2Hd4ucDyvp1JihUbCB5cRSTp",
  "key8": "4ALzWt7SGBQQRF1pmqtZtJoRkqMx6akhb3u2b8ciYYqHNeYJch8L2fQESUCMiMByekyP73AHxxUoyNpgau7ihfec",
  "key9": "5gsQUUx9v13ijiwU2D1RojW5QAk7RVMLkKQHrceG3A5v9jQHvvDriQrGiipgP2FmrU28hdbEFhAxF4ZZjmvarmBX",
  "key10": "4hv3gw5BxQJAa7DSAGdpmTynHDq66DLYjzifNVo9zNZyrCy1F9FShar8niwskqoA6frc3Qd56HWbgB5RTTycJ43v",
  "key11": "5nUzJUNFwgpvFQ833xjihhCeafrNT7FTtrmnLjmcg79mh4hSCNqkKka1Y1LwNHZgqiY5dNQpuAwbYGi1qvSDC9jK",
  "key12": "3z2tcpkjYBiT8vnnNukyG3thzkeRW3otekjnRojGEueDGVtLRxsHd5txsQQL8ic8wEPBZ1qyaewPJZE3RoT6YNY4",
  "key13": "2PtGGjCwkoxB1NH1SqE31vcgKci5XwWbG3Vu6JMnE4zhKu7t9nM8jDTf6NF2qX62cEApi1pfnjCJiHHDpoAFaQY",
  "key14": "5dr5dfK54nBeEQHn4Eoa8eEM4Z4XrqHdv5dERf9u4GhdoVB79dUhUaVY3A8wDFt7bCZutNLA9UoeGaq3p5PioJ3e",
  "key15": "FcYJjMuar551j7AD2RteSnr86i6N4adaEhV7kQkEu1dKseXkQJSzMPJNoHRRuPjzvGRYYQ8MVVZz39UeC5EprFK",
  "key16": "3o5mpUn7MzxiCT7SxmjiKQ69AhuZfSKmFoyhFhUmLvqreB2LJMFuxyhxfD1dXdQ7tAQ5jbFv49BwRUATQszVmbMr",
  "key17": "37KP91AjRnV4gCJfBZ8HUsk7AUkTnPqug214p33Y5uHewdNzjQBBoDuB8JKR2uZd34zNGjPZWMs4sh4nqqZxhumf",
  "key18": "2Wg1DPYQCsyW1E1sFEALus7nZnrxBbbancNt27gJkTzunAE5Maik8wRCgczzmNPTRko493V4G5QXC68oQ63FA8XL",
  "key19": "yYhjy9LiHHJEBYTWyvFPN5DDefQBuciGy9pXiNwUDUw45X4SDrbNFwAv3k9gvyJE72h6qJ8ETfty3sDGGdZu4YB",
  "key20": "3BGPCu2B5B4eYZiUV3jQuB5k3aedra8oP79We2ih9d6JVNuvQ3BQ56A4vzsjWT2Qo9YxWURWqFHcbrMNKufcmStQ",
  "key21": "VhvBXNWnwmR6KSKL9mon87GyvuqsHjSgHhCKiaptmrBo64HwsyoTfWnuxaJtFEV8PQGE2KzkntfV9XvkKLXMXsk",
  "key22": "3yoJLKYf5B7u7SVG8UVmXZCi8CRdVFaAVzMtoHKXok3LMD4hpZ7AeVMqmK21phC7RJLhvpnoiJzD2roZJfzwciAQ",
  "key23": "3js5Ag5qrXwRmqm3t1cSz9EYMR3Ty3gJZEkVV6wZEvBHuXd45FqoAwpVzW5VzF9z2tDELtshzpjAm296Um77GajB",
  "key24": "3C9EG9yQndmbjvSXUzKKsribBG8GNwqNbTHbgzVgVyfYKZcUVWyizVvnRCsnGv6yxAL4k2VegPU8GUmW3ToojL7z",
  "key25": "4do34dRv3QQKfEwEsgKLDDesS5o6akbKoLjRbkzPF9XQfA4JnDKzW6DmC4LGtFqUkmrY1Detps1m2TbdVWd5hGHo",
  "key26": "4QPmWyL168CyjxkhjeD694obPUmcBdkNrJYELqm6wvJBQJz2dc7BZf4cbgHS654mJ3oFU4ysnmDoCaUUMAGjnknS",
  "key27": "54gMkMyjmkDRPy2QK1eLC2XemDDLWVYxCDShcZh2JGdpgiiNQUV2EQvYY2Qm4fAnNAgiXuvbXx3zFFwuzq7Bsyf7",
  "key28": "4gJnrV1B7RjGwsqic713Nc82cNxnmpUHZYf8nFz2jXzPsbRNonNF1KroeoVHLSBH2hsURDfzGojAZ2SifSzXpYq2",
  "key29": "3K6chyBhSRdxzA4yQHjsMBswLh4WxwZNhwU1zTPMQA7FYSTECDRQz9HR5HE2kkXYpzGFwCGfPuo3SWLdGPPNcJXq",
  "key30": "4BExdLne4XDsERBQ4ANC6cFY3kBUFSk1xRT7AjN1DvnSZWdJTE3Vibi2yig29hZ9YF9e52oxjFcJkASqEbhqcoNw",
  "key31": "39YeTdjHJBFbyw5U1EiEN7fu2hQxcg5ov6eppvMzNt4dFtH7zu3dwJdT5UBpMVVwDGfGEYgYaZDnp87fQK8ZXkp6",
  "key32": "29K8F9oszxFENubiWJfubqc5teqXiETe6FhSbC3oJxHEiqmQzj1RTA9WTuGkMkFMbjRAjZFkimbedaSS2jGFmHuw",
  "key33": "1byVkYkqDXFwYzEEmRNVzCZ68foShXfuE1GS6JK5XjnbgLZZDTA9vSHaopbBR41mNy31j82Gdi6ppFCv7j2i5kS",
  "key34": "5A4Gy1nt3RXPuPN17K3rTFG84rfpg3QHPE2bt9NtuJxGnSG9reTJyxBHguGqNeiWVCHUCGpiYrHjuwV8SQif2Maw",
  "key35": "4vKmZCdsVp3oeZ8TKw93VEwLXhANk5oisvrbdUCQ9aKTfaFtVM6x9JUzk7MG1Lm3NVe9hjt1LDf8edv8xL3eoyj8",
  "key36": "3X4WkNgne2YUxA54Jc3JbamgSJWJ9K5f6fX5ckM3FaqMggxGEgZomr9EZMhGxcNohe4b836jXFhGpL53QaSLh7UG",
  "key37": "3VdwLGGgryZdhb4jBLwYeiz1MD5pNLtcSnU27LDZ1v6R5uAHwYkfJFn5GANStpXm1H2AKHFyVQ3hDAjhY7PPpzyC",
  "key38": "61NwtPcYuic56MdJeyrDnxtiiZ4FCeZCUi6czrugjZfwKdBxiJwyG5gJUuABp8Bmm6ssCbrSqHBkva3ACt9iL8w",
  "key39": "52NU2KsnJ6gduga7UY3CUTMDHxYuoLa6E8P3WQF8vJ3z5eUvm4rAh31Pdkj92DsL7nKdYtKADYGXWBSAogN7sk6o",
  "key40": "5Frks3RUh9AYjRet6ChmLpuokBNWx7pc7kMit37t8Qp23Z7RS2n7wKuewFfjZwtoKWjXZRwCs2mX2JseXKzxU31Q",
  "key41": "4ZJwhHEgnYVpQt7ED9dPLiW7C1dfeTe9YNjBsqHqFd1GK5avxPa6afNgkbKFd1u6A6vfR2zi8sZ41KvoWgyZ3AQ3",
  "key42": "iZH9CJ9gUJmMw6YqMXxB3eBQUWdKYSjKqG2vTZt6nmKTtCsTTyoRYxK9XmnL4L3xhUEqHdMWwvWbgC2brQLwcar",
  "key43": "xqS6bPEwmYRdbYvBbnAPadJwQyEiuTzfTzVTixNFW6hzp6LpRsiNcsDLPZc4Ev4mSVJUe5G1Pp5ofdst7kXv6Yb",
  "key44": "2ZyCSA7ArJTpbTMvGcZnnQbFcwPRJuoPd97ej4Rej5NhYgJd7T5iu3T2MA1sPtvM77rnmXBZK6QimJVfiBB5xNB1"
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
