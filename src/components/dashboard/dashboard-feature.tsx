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
    "x1evdcQqyBAqQPDxAAjZw9RrVEz8cynJxBiHzh6FS6jC8qtbs45xWEZPNe85JiHt7h6ZJWjqAjXrmtP9g2xNFQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6sjpfrxpEiokrt8gf9D4FmQEdMVrQuXg9gwwJuME9MenWwFMVRji4cjgduwwn1tGP9GdQw7EZN6D8tKATHqNSr",
  "key1": "2L6fMPKks8jZ3AcqCiMqedKXKRZdCJoayEdcHhKK4qV9mW3fAYSipxCjtT23yqABZTM6P7evjmZqAAf7v65cbQmS",
  "key2": "57F6eD7UPSkwfLxxWtVoBq2K7JaqABtx57BKYuwy3wSzUWstNaDdBYTieaPxuzEE4vwGaMQKQRHFtn9za7TjLWqK",
  "key3": "5NyPQVKzHqS8LyuiRGPica9tYi5uvYtLByNq6fyJ8inJtxWmYyhi6qbmZTfJTPDGYJnxP14SzqZcfDyMkJqg9z3R",
  "key4": "5MGsLWPmN9XR5a54VBVftPtPQfn9q6zNXzkHYRUDh69uc2HS18Dnf4HrxJzWQAnmXALuw411mBxC9jYNt4yo3LXc",
  "key5": "u2Xrck3yfKuytGhTqYWeaC2tRd7phoeNDipogcn7how8QvVaNhmWGSd99y83uZ6hFmHeMPm1wTaJvL7jvP7iemD",
  "key6": "5zqqXsKGNYNUWXaWJYrzhePKM9Lg3rz52daju1vJ9WNyEj2KYRdve7N1ss61FTucRhEhym65FGWNzYoXnisXFdcY",
  "key7": "4UftcC2Ncj6fcq4e1sgiTuw7bQwDahhE6N7a5sAjA7yiJwMQBPR8UzunniVSH7Fqw1e2Bq4wwMZnQ4uiFAmzDuYv",
  "key8": "4UPbwdhUt9VJtFGNaey68otkLyN72oiwJPCnZCgP5YngMZGGHTXSHWxZ4DDELo1eZzJbspY6CAuYm833KSAxrAVH",
  "key9": "5AcUDXAcK7DfY8KVGoHzW9UYBsgbYBgLsjgCe9w4KcY2cqEyz1RLKd5jdqSnRrUpGUPBDFGFuUJiT1DjiXYJTpoj",
  "key10": "5RwRe55yvZPe7KyGHoPqGj8W7eM3ZwWjRr4s4Jjja2ms1Nv3YpNiFXHgeo7XveTWRKBw7chfaHUgBnjHpD2QQLnx",
  "key11": "46LThxPvpfX3tE1Z3mncD1KnuZRaozYKsUEt1yRYtRZm3oA3YoKyWRpU2MZ9PXTLXVRsDokjtgMjnngsariEPjoS",
  "key12": "248EwNv7FhzsLsLgKrSn6J2xofQ59dc17Me6DqfXbpnxf3xMRNR5KD4cgKWBzCoWpfKujC3xaUsgd1k2pQRXTzRJ",
  "key13": "2F6CkKUzayeP2VtnH3MPeFBBMkoXjK2EUKNykrQPiNdxswLEVChSvBwCsArFRUKLSmLiaLNK5ktEtKcCCcvr6qpM",
  "key14": "2dtFAhm64FN9hmAMt9vN8PFkKQ25uUPZcQMQYoAPtxZ7kNtW4X4uwXNuTdB2tMCWv5mjTKT5pVd7uKXfPr6rD7LX",
  "key15": "4kYzdgqKFC9qtZ2CmGLh4YPpzSMMwJJ8vvvVrLqrgxqK5VJHbjiGcrPcAzFjWgmVYYHJRBAMRjX8PUQsBR2TqjJ2",
  "key16": "2LVvZMhwSFWu6s4FbnemYRedb2gBFV58dNdnbCatwvPmNqZuz1cpyhsN6TBQM2ESv1xfCSjjRAJjTCzgZL2oC4Xr",
  "key17": "5eqia4vSCkTPDBYJS16wS8M2ahYUpVwtsFQUKNAGSerVMfq7FkuiLNcM1MWrT9eudVto8GgvJ5RE3XdbvkGVKRJE",
  "key18": "66tNr9XoRhsHhZHLBYwP6kDmR6aakvjZYDgKUd9ykg2wDgaAYqqac2p1DS4NrNjotGJPSb1CEE6USfzXQoiCcQR3",
  "key19": "66j8CiGUrxsm88sYf4Xh9JnNttp6iA1f68exUidCqaoNWEtawhWXKZKjAyiP8L5jpWHYsh7pqFoaKRRVzp1oxboE",
  "key20": "pQBmuRo89bg7dyHLhdQwF1S34XqgXE84oHN1wDETAnbn4fMBgUQ3jA2Mxj6NfpYabUDnwvh2sdVLLjCSsGzbqvx",
  "key21": "xwsnmvb7m1MnZgUDPezqHVM8u5y9oqKdimsjrHXZtVVGcacEau36Hrrs9tYugdv9J1Re6jPZ2oX1yFRbR4qsS29",
  "key22": "BACBA5gSosQ9vuQWDGfr7jYoy4m9bGtPnNzpfpo2JY4M8PR49nqm9EmspskH5q4bYvNc3fBF1bUWEYnCUVocCSa",
  "key23": "ncuzZv1Z9RZQMb7wnSXigFxwu9AB9iz43Uda3P8SzG5ztMJvmkSeNNeNDbs2FQ3oupqSUGri8sgx7A8mbymHSvy",
  "key24": "5vnY728jGzGSGkWxqC1szxbyGwbPtE4wJAx5iYVCUhAzWaDH2f2nTwyVkquZdWdkAy93mCyptrTyH4PscpXMN6AP",
  "key25": "45YKgM537m4kPgizqzNrbt7iZoxpgqG8hA8FvoJgM2gjwH3KEsdPsUSaG7WPXDLKgxCCTGoQyuhVFsGQUHPSu1SP",
  "key26": "2Yx87bjeUafHrU5KQnATFX1gDyT2mQ7km8F2vqYbHFvoRgxGJUkcuzwvPagGDGFc7nx8T4Ct9fTqvyXPHp5iBRHh",
  "key27": "3WHCtgTBGrzYJY3tNLqf2qdM6XcebqoWmDoTBszZ18pgnRETqoeUVpPX8az15poMWx4FGUw6ejrCzbbx1UNFHovi",
  "key28": "2JXFHvK6DfTNRBTex6ixwmsvWqjxdDAxjSyUL1U8MVrGky2ZkL88W2h7L69XQg6p4StaceFXxW31Lk75dLqRsemE",
  "key29": "2ZncXECpqiXF6FDq62kyPWmKj2ESPJo9VwnwhiyBDf7Z5pUNUdMLmQBJ4DbCePVC8RWrdV4s8sr2ZDe3XwP8FKUE",
  "key30": "4Vam1uwDY6p92bBiN6FrbFV8j8SpQnDSwxUFNPWVnu4iD5oicriWrACwUDaXfgdZYaK1RKbjCymS2ajBfXfoTsuV",
  "key31": "5w25wfmAUJQJGwnC3cGLNAtxhWbH8iUw2tZp8X6q6Zoj3yDB6Qcj91cQU4t7pLQgQrByZeCGHvzcarv5L8JdQ6oT",
  "key32": "MkANN4oxgcpBSbSQGuV7Y6FJxtrZAKpZt2D1Nz7dNVj1XL32fBPQzFHMiRonKXr3aA9cyKGZHfYg9LXMUkyVZoA",
  "key33": "2wfe8XZ2iu9wNerjDr2eHiu7812LGGv9qU5LnmmvffFv3yvadFoLTT22k6DuNv757WpXziEU81z6NRe3uJUN5pp4",
  "key34": "23QJA7ZPHHi6aaGf2G2MrpjYHn3GLN7zR6QqLPLF4rn3QG3d5eMd231p4NUK2G6sptHMPFe1Wj494FzQz1yxdeZy",
  "key35": "5VExM3YpP7vS19z7tZahGEpeoA12Ehj2zLfGvaH2cGopJ1Tp2FEM8aH5NYcQLqgkx8eJ6mYhbJCCvpwRgR4BvKAx",
  "key36": "4fWBHBE35ogRsrVMGD7FWRdnmUHVBwU3kfSz6TXut9bZXWaTfxsJxiAeW9yBY7QfqyVubYiCzJzumkk5ik2AM76H",
  "key37": "4QT3oLUT7VEy7nPjUdJiT44AgqsEJWCmqnT4UkKVxDeZiv9NshLqGFbXKk8toKgssYMXJZGLmvexr9SGfezkTuFn",
  "key38": "2hW8CZCv1TPfgyh2V7pX4ig51kViee7NjfKNkCsBHn4Y7MjEE3KHxjT72d8EtiPCYWKV2LeDgLXWQbvPG8soTT3d",
  "key39": "56KyPEj5GaCKhz363QPm86Fk3CPFy83HqbLpbfWjYRVsew7NdK3XXN3xeCNvoJbZ56RcuugRMD5jaMdCk3f1VF36",
  "key40": "3CJDoc8AFw8Z9ajJY7nbyKTK4CisCVx8hhZKP9awKaop2DHDBLtBH6f1GTkKjVWfjS6ptTVUJU9MXRKRyvAczYaG",
  "key41": "tLHMckeAQVPbtttGAb8k2UvNBKEGpeRcwmZj16LojiYqiu2tnQrsK9wCiVziNSaTKzzpH72BsZ9zpKwQ11pTgz9",
  "key42": "mYZEGY7nWsVMMA2VN4eWKaeAZe1ofRpkaxFu7AHkLShTJEQe5gtfwhYQ3usWx4QQYn2scwnMUe45dCGJVNKUPyc",
  "key43": "uziXktWwR8P3in1mgysXqX6fNsi4pj7Ti2mBEBg5D2bkpYiYtsfufZFV4eBwq9wjabrfWRFDBB6EjaEAHVraGA5",
  "key44": "2QcfJLr1bJK2rTfVTrAyPdJxu8VpVfdV6dZa9PpE5Mso7zGqzu6ThJ7oP6eMHgqURQzpMJEi8FvCYKNHKP9t1cDH",
  "key45": "4dEUkTAVY3NQ5S4chdyLux9L2VqjeQGNuagTVoB9wWQSAEJoimzuGu1CDzf3GwpRE8cWZfDBm8MF4So34XcuE3JE"
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
