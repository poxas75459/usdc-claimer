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
    "26FdJQfFdaRwyEgbCbdvLdKrJnB3HfpPaT42vNF9uzLePisZasd3XsNjuqTfUScmKCgMzdSirK2Twe9uxvLKmQvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SkLMUP46rrsowvERtjrJvEMdzM6aL3G8vCnVCFBEUTs6xGcjNAkQBG8RgGDKzac8EcrxF51m8ANSRYqUNCKUb8",
  "key1": "5imyi6yYGSDjqHnSaunhfNAECgXvArxGcWHcQ29hrTn5RQXx1rMyb1kwtCCkQyXhk7udpRsLTajbQwiAMEenbCK4",
  "key2": "4zceRz69VFpMiryEbJsDGAiXpVJXrEVnjpTganPxuQCc5d6BaGZFYk3YGug6pLjPH8Bp7omL3yWALkMP98YR3HsH",
  "key3": "2WNeJYUuQjJ5MiTAGAFKuwccBnWPpfxEUskEcuyvjb7ppP7e1kJKzSZAQ4esNx72drPGaa125o1kDx1AEAnYidTV",
  "key4": "5F5bwhKDYJKrH2XoVwdftjY1SSM6ZGKasHJAYbUfzBgT4MAwB3TifKMyHv3Nwon1CmQtDmfxjNw4YPs6RKW9oPPM",
  "key5": "2T1TQ87NmBW9obaofaCFZnvtuEMCrCn9hJ2qNwGWR9BUdjd5cMzvQ9VRQeWLNkpiw5nSXH8VvJzbRBD4e5cTKDBX",
  "key6": "3NGQndnfv6Zi7qmCUkdkj5bZw53WNu24tBh9SdqURcK1SjKp62njFq4CEowGgkwNyJjCV2QrXeKjJ39BP9wyeQhF",
  "key7": "3L5vMum7bAHRch5EigzD74w5uYszWutHq2smiA56DcYKV3ReGsg4dUawQNAHZJcFBjJ8KjbUNkhZxamEe1LUrimd",
  "key8": "4MXpYstzgQwe6pzsgvUetaNN9PBNKvJsQzSXaLmD6xnCVEHE3YmJHzHWsPxQCZDHV9V6qDw6LixgSBLQvSouEXBe",
  "key9": "3oemZfJYN7yW5VsYUvur74UvSeTyYphoxAHBt8FGq8hUNPdfbQMxNZZjWbautBngrKQtyyMTf3y4KsaNgh1RbtUe",
  "key10": "2vRrFVUhHDqwpM9HY9kTcn3Pdz9sooxTvHn5V3GXo6ZWyizXjHKfjRRbJejKRZdYt7WevqrpFsG45ckzZKHdg19P",
  "key11": "5c553J2gqY4sdHRavYXsHqmeihFKDtYooMefoRy1Nk14tdvb3EFxfJfNeq81NPpppF9SnKHdZh1hkTv5Z3X5aiLZ",
  "key12": "rhmpUCx2ayA1WHXNLmxHzsSpZqhzRNcgyf3GeaZUw3KFfTpmT5PPSxEDWUwBX1ucErudPJzTwDfEoMiUeyauGKB",
  "key13": "vdm5ghpa6pXp2RMKAwmx71c8SQjxLuV54icFF5D9p9M9hWHqX3nDUxYdpH2HSWgZ1657j94YVuZVwPqHtqgxQjJ",
  "key14": "NN9ud1AwAtgN3qpQ1Rraa9A2Kyuoipc3Se8MGYn3GTnL4VqTu99d7RVRiwLHk4HeqV8r3ixHMtg7WVm4kAxCzca",
  "key15": "4YQdPCkef7TnzT5ic91Kj9fq43oJANpRGLSKUEapnDDu9rGydA6hiouWTQBVrDAV1ERbfXb7XHhyQkNcHRkRiRXM",
  "key16": "5xnjKR6YhHHJMGBiBtNwx9JTA15sYuhrqLpPGAcLmVDu77tkWDDLsp8NGndF9ZLCW1FaXNN1Tin2AftxapEcFbiu",
  "key17": "3LRJNhvP19uHMy5CLW8ALG88Aubf1iYb9XwQooV1GXhyepP4wyzAZcBgu3Ppj88rVg6nD2dhbuVSEEPH6h4uZW1G",
  "key18": "2qPxd59ZhacpoPBFMPRRwJotV81fxAczZ7GG9e87vvjXYHcZbJxjcaaF9ZPy6ouPAMVKmsZ4F1zxLEvXtJ598D5Q",
  "key19": "n537Xau254BAYnbVLnH8JUzikuqp1mwkSvsphvYrmzhZhyHqByT2o2J64pqZavzQ7kH3npu8BJKj7kbrVUrFKsc",
  "key20": "4An3vEp65mbwbsgtiTrhjxbYQfAmJGRTV2RtUQhh7wfESv8wuKA2xeaYQZaFxVJgj2pKKoXaTDXHTcYi4ELeH3Lo",
  "key21": "2ge5ag5u7Db3Mov6PguEV61RprdEQG9nL126Y6Dz3XwiTE9WsKYAC2iMFD8ekXaN9VwWCAhZyxauA8a8htBFwdmj",
  "key22": "UvF4WVTyTcwHfJiVMwBL8iTPz8bjf4Lwd4DFLyH3hGe2oq7bSqEJMbjmv3qNZvkWvA9juToAiYjxSW7cZvnsfpE",
  "key23": "3m3xeTafLki16GuSQonumEdN49XWvFA2Ghv7DBFDmiFKPhn8gU8R1W1NB6Uug3YSGXamh2RD78CRNh8Mdgk6YkLf",
  "key24": "DEZsUEUGfaVUpw8ssyMmH6MjUEEMKHL1XKiB56sUTCecNx8AXSpgTsNeciiTaPuhKhNPULYXajWJmG1J5u92Gz9",
  "key25": "LcrPpGUPjuqzySqKuqXehuq2nF64Zz3dXioX2TcGMgCAJMynVLDH9tMwwpDFAZrc5qj6wdDBAEJrx3kXgBspkhp",
  "key26": "4jAXcaTvebWxkeGKmyebYv3zQY5oTyroAbxuXe9a5K8zxkeyStqnBrcxTtsCNiDcVEbj9oDmuAr5EY9MJ1vFo5rk",
  "key27": "vytNTt4w3ebE7SwiBJeASnaNGq6xs7pSu5Nv3dREMRuMKMsTYK58fUxSnnwrfpPiEYbL3vaR2xnZqN3xto4UiD1",
  "key28": "2fDfXDQ6rJHHEZBXkek8WKgZHvzPVPpztzDNTLkfP3uDD46fUDYvAUqL6stFBLajDnzFEqbxZAZqW79XW7dGFLp4",
  "key29": "3Xc3GLtfaGqhtayTEeaWzZqhGsm6MUcP46FUFtYzHETyxH4aqRftJ4uh3Lm1JGsBhz6VbDx22meXxfHEc3nRhP7h",
  "key30": "4Uaiy1Wonp7tc22jJk5jqYdA8HB5FDQHTDGJvNVuZrg2HdWEngUawUBAB3WECrSWxgCkdfN7ufy8WU59mkhcZhsD",
  "key31": "2WpoNfLfHEXv9dzbwpGQ5aPeumR5XajoS4YDx8i8KeX6Fp8QG5NrZhEknVQ6EzrAa6cZCj2bX7QSft43oj3vjrGn",
  "key32": "2LZkZQs4u8UDQCXbDri3z6nitmDmbSEXy1HPJUtGCzeTAkrYCA23CiJED9ksgRDom6KZRt81PeMeZdNjuW15p3hh",
  "key33": "2TkTWoYhYEQURUkVHP4gPiC2SbFX38FC4F75zPjHXTtuvapvimXFi1HTWNQUVruwucBBENaavq13q9UcL6tw9W7i",
  "key34": "spFFBBVcKGjiwGrpnqcZX6W4xRrrXB7zGnB4jH9oug2ZZncDeguiT2EjgGFQexKn64YgGH4eNyQCMKT8PbaGgTf",
  "key35": "4Rt9WUNcWFRVQPXZHyBFKzWG7kLxt9NdjU7cj9E5bsDmjmndgksByMqwog5e9hj7KfCUKuRPQsGhvU1ZwmM8xFnk",
  "key36": "pB48dpdPxSKoqSiyDnUaSJ7tbC7hDtwdgtx8wYquGkfxEgnXKHafibJvsKeHrhSDtBEYHyjXBYAR1YN3FuXP3Rh",
  "key37": "5YsxXeALLzSRa4RmqokFWQvs6ndjXjcoChYPaYMSDDNGY813oGpZkD87JBwJgsrN8QYQq2LGhfArraaLv6YAp4Ru",
  "key38": "4MiZDKzvDjoBfpoF5K6BrnMBTEATDKyvvJEj5Ap7tGd7qodhXPXjKBeQ678gDVAhjhLKbv3YYv131M7bXEiGWzN8",
  "key39": "4jRR2hmu5jDcSgFrSxKnDWveGfPj8KR1qMVD2GSKq2KjGWyLmY4XVbafDJg4AcJzwQnH3CSSRTPhhohZB5JQfpSX",
  "key40": "2ZMW4p5GMZKYpSbRgZToSGybpnBjSti72fawUEimFD1WCgcDkz1djsX8EpskUGQbNNy3aoSsA3yb6L2bKSR1iASA",
  "key41": "5n46tmkdSqVT7DY1EocngC9Ur1WUGv6E85WXYL2yMftgQ6eyr6mMtuTB9b8Fi9YvFXX9xS2UjZKwjkYBmbSAdETz",
  "key42": "4ET1F1N5qTGqnVBKXrBnbpZ52ZGD3axVkT9i9L1shm4TqhQ1P2TebS6DF9SMhbLevWGsq8knoPBtm3fMXuLqajGb",
  "key43": "5Gav1MjniUanhHUSLF2DuKroEbyquXVx6tmrJkrMqfiUi98HfxRwEzhJKWQ6PgfLTja1LYUfMPY9omqBJ71tiLjk",
  "key44": "4yZD6goCjVo2U9efCYXhSw9A96dS5nKXVnHTBccxY2XYv5MjgzJXhq6WoWD5mMiq3tcTxntuXvEab6qbcRsUwspY",
  "key45": "3zaVhyS7oycN9mEqcDytSGdW2aT8MUDKbS9rijVBg1n2cApZCTAPNQ3b4fWPgLUzZVQH9aZnqzjXFkWf24VpffFh",
  "key46": "t5oypqT1j2AjdRKz4Q493K285aLE9MJnwR4oKjj4ptxgmrCtTxYgkQRiiTEqBAzExrUa3DCdKpRvTi3CnYcyrMj"
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
