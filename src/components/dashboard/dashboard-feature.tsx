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
    "5RjrBrbyUWWKJMJPt5aoU6z7Usdypvuf9tgoGSxWwN5hPH24nKdS7eAc6gzrhXXQY36nU5CKCRyVdkyzoJNQQvdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8oj6QgY11iMNEVQEAs2AL6wQ1XfMbLEn2vxvX1kGfgL8spAjm3LTQDRZrn59hrbWTKxKX15TnkzXERn9VQkeBu",
  "key1": "qXnUpxfjqdxJfGT9f9MWMAfGU4Cay5NrWuiuQCra3N8vdkwV7kR3RH6oacKpTM7H3s9NFVHcDtpbDVyZVwhVQu7",
  "key2": "42M4FL6ckhmaYKtcyBhLN5BbgqcKYHi8NXPXNiv9Ej9GtW5vMoMTYGruLJFkgDp8RetQgmVzKLdNmjbQjtWVB5YP",
  "key3": "3dMStvHHXA1j2Ci5d5wa9iiDRXVyTELzrzRWDXdCj6QdoUj8wykPi1PDJomKq1VwxrqFhrD9EHi94nBSXA9fighj",
  "key4": "249Vr755krzdjxqZpDej8faGfcXFAdHgjqypMfjezKmK9b5pzXH28oz7t5YRXZ5EX33zVjaBUFMMUk4Z9jq8epkd",
  "key5": "5zaaZvPkncSxEFF2jcaBQFqn21P5YfxC4c54bZ93xRvoYfjhNtpLqHP5jr47VWQnHAfYwhMF4wW8jwYigMxQWasG",
  "key6": "52uUo4is9QRjdJdwj2xSHDNyvUUpWRKG5CttDo4NHCtehoHyNvvBsKkyQK3m7dpnhe4891t5aLfQkhWP2PTZCbF8",
  "key7": "5Pqpw93AdroqMqS7AFUBz3eJghZVSum9eFr3LJApGCEqZRAbnAithiJCRUtnwaYw7b1nX8UhnBepb3tv8FEZ7QH7",
  "key8": "vkwpcASJ9id67WCfxU3WMSeo1soi7G7n5vBwF2Z8FPCJXcsjrTxwzxyDiGhdGsWGZNxAuemBU6fHhvN29oPjDvP",
  "key9": "2XN3dkBbwbK52hH4VV2VNLurZhfnHhTuKBCTEFWY4grJUy7xos2zQ36DvxikR9Fi2K1tT8UphcjS1hewP5rxwJhF",
  "key10": "48ArKraGXyQvw3EGq821vMkwzoMwmDdUx7SSgT51MX8KMgENvHr5P9Tuiue4PiTYbS9NP5kowGeuGfAMrJ4qdYmp",
  "key11": "saCpkAenXmW6X9CyNQQHz7Dkfd1ZfebCYviVupGyrG4GiYv4M8YZQEQ9Ay4DAaJnGiM8VSHnoVPsocnX5S1s9XA",
  "key12": "4gHc1uKQebVtvDacUVhmhj4Fwt38MNY2Z3ni9WWPYQwHrQt4g99VhZcpXcdDDwxJM7G41N4ZgdnEE5UZ8qeF3VVZ",
  "key13": "4evrQpPLFU5iPVpvp3C3HN99LknPwDT92YkigaKtq41CVJJWGKUR6K7M72VQjaLNEaVfenFTuWCXyCDcdzMHQFU6",
  "key14": "4wgCiLNoKhjYzsKVNisqz6ybDegc73T7ADj5vJ3hcoEVpCKeJbEiEK8fBHKfHzSwHSSynKHFDTSAnjSuYNZH6sCY",
  "key15": "59CEWfCG27ehPhDw3GNJynoruMudBmVRpTyMzu2Fh9Nifm9k4dgr8FBq2LCZEApfNAJiJUcs3JDn3ru69Ho8nJn2",
  "key16": "5AaxEdsWkPUxC49YRcTjuB7mDGNQkUBU1zxMeSqh553m3Lvgm7YBBwm8cyQ7Jtbnure8E3VBKH4aHXonaKEmyB1",
  "key17": "31NNhZRXQwAHts34F7GDp3RtFRDXeKR48zvj6sSFj3wv7ymA4ZSHwPFc1VLcxjv3GyyZU4KEqnR58xpiWBvMpZw4",
  "key18": "4Sr2CXzG5kx1j31B21aKe5P6EYVUKQLDh6Nbk3jzNvmxPeQnA9kAzPft2Y64e6Ry1ZyUiCjn1F9dVttyy93WTpXm",
  "key19": "3TkBuVDv3VRCM2Ev7XNaFmTxgp3vitHdjoYYqVZ68F8nWtrT47Xm7MijEYQMFLw3gr4cP7JfsyLe7Z3am9Y62K6V",
  "key20": "2mUQ4xBTuzAvp8uyFHbXF91NXHTVbphKRxYBr4LrcDBkec4C5xuzzWGoNWDbV2Bh4xwBzJYjEmudLs1i7du2goNn",
  "key21": "2yWFz9DKDjo9eoPzjpKNunmaxqRnTJVgnKaSujGRmqqZ8R77LhHM4Cg4GbES6qGLYAKLrxA8wZYypyHEtY49tyg3",
  "key22": "aJQ6tzWXACreo9zpCNpYCof4uA1mXCtpCRsQ4Puwgf91Y1GjyPtQ6LeeoZ16nUjmBx3XkvSnFKcYBZbaFmCSBwU",
  "key23": "4SKsnUdBzUdPZsEKNdaWdRZ4F8K7VjuW9jpqMcwZSdG7dxWid6toYzrmJfdScTEtim7rn592JREXcL4GL3hiwMHy",
  "key24": "4Dd3ZRQETWpNE8Jgqq685wHpj9gyWRgnqStwkAfGeeC3NFA4ionLZU6uT4JKHWTAjDg8L41w1HZvU3TBpNLP8N9m",
  "key25": "5om3Hb18vSrzSzC4T7kvLWXMJNw4nDrPcAcGMDmewRxKbbhXByzkXVoEo2Tzxyf9qk23rfvRYxee6frtf6KJDqQQ",
  "key26": "38YNCKQaAWjffjmCymikfdTRz3dgaLiRXfMtSF4RciLfkXsJxXoH6uT4vfXiSHsM6v5EZ7u2ppWMUeF6BTbJZhsW",
  "key27": "3JgmayTotGuo1CvBnR5q2PHMacENExgS15vyntG8AAqBzrBNtWSHxTdGRtfZDbe8paj2VNwwySVPTXTZWyAsvVFW",
  "key28": "3NrxouEbTUbqGiTBXQFd1Wz3QfXjHqSW5KrxV6FQnrfgqAv3RzK3XvqKnd2hkhbkdWCfd6JB2exApM11rKzFGQvP",
  "key29": "45suKDjmEqwwHiE5aFhNHdK8oU2KScRw5BdmGQkTGqSHC3U7VqB4uChmeVtPQgnBHkrF3Lrs3RYhnL9TPXa4jfHT",
  "key30": "2LSbLfSvr2Ko6tghZkoSTiZhuFrm8jzTYFB5RgKXyf4VqdD9PoH4N4E7PpSKSEPaUP299mAFUseHYkPfP5e5nZjA",
  "key31": "34MAVk2f67K6RXqiViD9U6PeYteyVqiNKx1bQ6VV3A9xTFxcrxEHC43DiDQxjA4GVQwVxoLXtiZH4yvk13GwPDwi",
  "key32": "oYV6EbxRsHR45v41bozfFjYXGkLZM6Y8a3LZDucPN3j6dxtVkazVKidQNu8mCQRx5iKPWWANNPW1prWF6mc1PkN",
  "key33": "3eKcNrtPYfzz7FDPpynnq2w1u6bpwtV3cXoFqXZeKQvdMhv963ZTQ1yiys9yotAALfDQF2sTXMA55dKV1HSBaGma",
  "key34": "CfBfvBWq8CJTUnBm6Wrz4AWW9sEYk3MCRGQB73KMBT5fGYDVWuo9E7euTwHkFKHGvDGqTMf8jiVXDMr86UqV3Ea",
  "key35": "JiBdxLYWhPi23Tw4NJFEiYJykBpvi8PHj9ALZh8tCWL7PUL29iHSv2gx7VxyqTnZsqVoXN8fUvw7REpZhTQvedB",
  "key36": "36RurUU3W4DkBT9XgvvWFAceepRoTGL2kBgzZz7cV3Q8JJFehJXeNetvofppMyXJxi3d7g8vTe7M2EYpjKSwvvph",
  "key37": "3AepTzZfub6KS9gWiZewpPCaPhBfKEZcqQXK1NhA5GkYt3QS8jNV3UidfiB8tBkehegjrptpBeMEtyNu4AXEpucc",
  "key38": "4Q9nVhuKVxpbv8zg6HGUUfxRHZk7pMzjRSkXMgVxA6kdTPMc1KGeWoceRsAttX2Jwm2yc7QnTK42emmMAG6b9ZFc",
  "key39": "455AsUu7hfGuukQ112X5PnTUY2B5rmLJtesSQGTPVCMHwJyjcWL93ugqnpUv9nDAD55AN6XMGyY5R2LtWc74tiVs",
  "key40": "2hn9Y9PPRKngaddDCV3bWSuqYTA7LQa9pafA6B4fQPJU6K7TWfA71U7ziPhTVs6tHV6WsH62PJGcU9ZLwE4CjjHc",
  "key41": "2xGEq5nA4gtGUU8PGqXq3uau52c9BaB3jwSudR3QvwDYu8NEjPFe9wdi52f9RAjnh2AjxpTy1C1TRcALwoZxivzk",
  "key42": "5CXLDq9bf9Qkdw1anpdBQhKKJHSp4q6VnV5MNhZ7xJZEopj7VTxs5FBjdHS8uprfua2g1FbvgS2XSYiSAC5Bmi7r",
  "key43": "4GgQ7p4F4DpeCsRHH9tkNy7TkZW12ABJLAaQFLRa8WMNZyvhVkpYZQa5i5GwoUAK1HhsqvdAv4Yz244w4Z73MdqZ",
  "key44": "3RQ2hF2Jz7herW2Wk4M3uNkab8DbDXrwUESRidzqarWnyuthGifta8KVWXXts73Geqz3mXrYB917YkiP5GbKKRNw",
  "key45": "Fe4yfmmUyqYuCphiNAzCc8ZxNuTch4277W3x65YNMNqwYCayyvXfBVzoCmnJumwuwd9kMsddFJJbNSQ4Ju3bLz8",
  "key46": "2QGeWpHb2MY63JK9yWiN4Z5A9LjQFRt6AARkwJUSN8omB4dwf19dtHajyhuY2xnnHsxSEhD9AyAUE21WLNrnjBcK"
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
