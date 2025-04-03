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
    "4wyhkcJDpnDfdG1WPMYR7v1TLd53KWV1G44S44PYPCDWv2fZqA4vt16ZAKbgeqqkPgT8LnCEcB4jjgWkkBXnKeVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCGrYrZ8Rxukv1iAuNau5ZXMXFhASxr6CB3ByXQb6ZbYQFPv6cbs9LifNjGCawcuq35ryPF6dMLotcUFgeeCY94",
  "key1": "5jrMzuM1fqtevxbHBLKwAVBPVavwjiAUty4M4ik8pXB3JqCCxekVfv46WVaqjJ6RKHGGzZ43KsDtmgzJKCtwf68t",
  "key2": "5Xe3GSoqk7xKytFjBLH7iwVpfxDnZBvUXkj2t6WnZ5k42yq7fj2P5EzFxxSgc6GzDJZXCUm4V6VwUvqaUiU5VFk8",
  "key3": "4g4dWnn29jUkeWjyRRd6usQ5iS1jWM3m43NCcukJSjZ5bBv4uSxYDnMJa6yFYhoZQ2L47VEu7Sm8vhn8QkwW19zF",
  "key4": "31cK2vX8CQC14CmbrKyETWtjAnbPMp8PwhpC7RALUA8d2ZJxg8wdLbwFSbZt636N8zknxWGgHdz1vA2mUfqgaff",
  "key5": "fY3KGSXuDmAmsA9WCAKhVcmodw8a3LktDxkJ1jAJdfwbb8TtWL6GoqcLf8N8x5MWbcDU2iWSGxWFwnBSy8q4uqp",
  "key6": "2YWC9ejRmgFKLWpHj3XEYmvu2Fwk8dpQXq7j2qhP4xLaYRcojqt7bYH11QdCUgWVCF4Tcv7HbDFv24XKUrZnNSKr",
  "key7": "4JivcWHSxZfw5BVo8AY8tuzDHSHLiJoTjW9tGVCcRXSSaQDiSoYNPE8hMwfFBTg4RiMB29J6CCQjuhtg3tsFUj9K",
  "key8": "62g754d8dXtb8UVQVwteB88qGGhuitsA2mUWZfgVr7vokTzYGvrYE7wEFRHMcZWMnE3DN1BKiqux2E27HcbQwL4q",
  "key9": "2VgvL6mQPFATudQVhWKia9UAdnRw8i92ZjzUBrC3ssCKux9SAAPcAbMigKmxr87WtJVRkENZ5nTBUDzFBgr1WyyS",
  "key10": "8CuuhrkaexMJtyFvU25axXfpcfo7UaZD76W5QtqFjsV9tNcoY4nmA4Qr9mc2AJHXfkkXGAw1V2xaPnbH2WdXfs3",
  "key11": "4JEJfbHLwzyNTQhrdwbbXL1v9i99Wy4PovzfCWNWKtEnNoytwdTDQ2eM8K22zRSa2S9w1LbauPsXXY8xDrVUqoZS",
  "key12": "4vEUekAGk66FS3KVrMjWWBaGUVuKqu27WiC18uxcGzjYsQYiybRuf8o6X2XpZhNxiNaGsm3EKoSwd8pctcCgjube",
  "key13": "4FS21WudQJ6xNAPsQX9Rw3wBeQWuoZGhjPfqDtFBuSYrEJkEVAuKNBXsTVkDS3jDRFPqjs6Xr3ng4LrFKpmjQc6Z",
  "key14": "5oGfHauLmNA8DzoEqack4a5YWGbrkyZmmeiE69xjaQmcbAp9s9Xz1PRXKqz7RHSWZWcmagtGcYMjjDTA9SDgK8oE",
  "key15": "3ZogEmftSe1yhXP7WGgqVeVV6vu5Lj1ZbDjP8fxhspXYtoTRmXtEFzqBytEyrkkMDrkTRDYAe8zAp62HnviKVmJd",
  "key16": "3xXydSFkfas5gZ4bGs6VcUCU5eVHCjPMFuL4v8DRoGtwWCAJNXH9jkhceDhpvyanPKQbkCXhubX5RFRNSqZuZV55",
  "key17": "66FqGWVFjSNtjXgknFXwfgGx8dJrtkJPZyKosAnJ8cZ4FBzyG448R8MLsrZGuKQdmLV74dJZZSsSb7mTbpvMAhE8",
  "key18": "n514yZKyq8PUxRCFA7MgXNN5R5eCQzELXGWnkXe1gWWodm2cYGPFuY6axfk3xrW4wfr3a4hD15xNf56fWuZaSLZ",
  "key19": "46LiAeNq7h2AfmohJG7ULUy6r3dk7Ld6rxAhFnAMUGiN1NTxobJf3e2rrokyfRqVmJwbpuL4SngWY1AZmTM66LBk",
  "key20": "pfrRiVgnhQta4Jrazk7tDChEfUaH4AngK13yroRuY2rnjWPS9bNzRbv3C7vHyugN5sfXZAWWjzykEWa1GaDYNam",
  "key21": "3ZpTC3eH86gEv9QTUebn5nFfPi6oqiS4E9zKSDamkqLmuuvfJLo31hBkKAPSAxQ8BWQEm8msniE4GRGbGuEyj1zi",
  "key22": "3VQNuYurhKc9g9NgGS6TNGnXnqqjALezAqH6TgcAmUDdRDzrhbqYDkWej3S7J5f2nwWhh6x5FrS1ijrrscBCnRiW",
  "key23": "4ubZjWdxVnDW3EXpwwUvb2hkFVdJjbhsKdZaDzDrNftN1M9yvHetPfeRsefAswAdjaaz2hBeSU6Q5bgXUP4gScYU",
  "key24": "3kf5VNXCQN5vB6TZStTC29J9vjLSDEnKzT6XqhCsez8tqs1mKwtPyggzCmyQuXr2VMLJbPyErBzj9g6d2h72V1iW",
  "key25": "2ytLrVJtcYfJbpwXm7guAGTqMLM5B8vgSpN9uNUAQeTh3inETVigrWbGkXEpqtVPCsEpmyavzbV8qpwCFqkvV5ds",
  "key26": "5UYP7FT43Q2xDiDxFqrfX8swb3yFAbgvL8xqnXtAC1h89W5JhNQ8W4tP8BN2YcPVAVh448hn1TVVecQPEeAvT9Fa",
  "key27": "5AMiXsoJQ3dQaZSkJM2pT8TnT7SncBSzYPyM1CAJNNiw74JXiwtw7ANgnJ9spKVWBGU3ejw6UShMcTDELDyd4U4K",
  "key28": "eH3hBpEnwzaMVDcpf2MHvytuWgYVDDbdw2Yw4PQ7c53ZFYt1HvinFGM4kuxVp4xwXbQz8rEYUN6sPJz6gNEXRrP",
  "key29": "5AutUveCK82Z7wcYyo8s8nzdB5x1cjGZGeHx7A5JmamT1U2LhcyqmJCkmWqTauPdz9iaMwP2s2Zvd2bD7R4xLDT2",
  "key30": "xtcniwx2hxfSBHgg3CWhpMtgiEZujzR5XAEwfr7F8DTaD4hfkQeUMefKLX4FG2yyui313Fzuy8UCTsTTe2KCC5N",
  "key31": "2MHumDDVJD7z1PVDx3dWPWZ1CuhnTW5Fnfg4JeRk9yccr5se7mosMefCvnMDDbTemxvrgrW3pAoE6yybo3RTocRf",
  "key32": "4VtcyfzHUMEAmLUKyBe2JJqLW2Xw8BnRc9MBndmMtHACnf5Dw3Z7vLKnhUUaDjA6FoPHnP38tf867jn6FPfiwrgT",
  "key33": "4yC3e787TT1oSBtXChLA35dM2QvXmq4KH4UgjSCZaUFkZ85KZxq5KQ5fmPxye3R9RQCCENwA75acUT4oAmeDGKbd",
  "key34": "3nzitJuXWezoGDscKXTw2eYdkA8dsXaQg3eadE8sD57tXMAzCYhCiWWHm6oiqbgjih1s3qi95eDa7gBR3o4cg2eS",
  "key35": "2JtAMTkwgWeyYeRvLu4ydeSjxJzEWrdFHTZRxcQ7tPZwWJie2onebDFnnpP32aSbSdwuYRHUsccUs4eDnGd2aVPQ",
  "key36": "61uRHRTCkpLriCxQWBo7ruxGjzuNWQFK99f1dyRSJNqngyXfbePjxMF1NXRYK3pNv5kbPH3h5Lve8vi5UwoFMLis",
  "key37": "5jYbkW7EYcb28HceE9dcUH5ZcnJ6yaAgtybxGvuwoV7wmDP5t9aN1RpBrT1g3o2BhcRk578mJqmga6ATXS4FWtQS",
  "key38": "5viLLhCcZnR8TUkh3HG1qEhb8z8xAFfCbQHLGHpZaZx72151ZfAoVcomKuxd1cuuQ43UXEURwkgSfxgy2ezojJXD",
  "key39": "q16aDYy3gz1FCmvXQQu1KJtMLZY4JoSWq6m3DpqQL64uE4PgmTF2eWTL8SLZGn7MVVtr5xYTonmhxEafbTAwMs3",
  "key40": "67C5upAyJAQTc9XaH5PSSxbayrimaAQ1kw6h6tjjvqn68zvxW4ENcZTe73EStkR83ARkBzdKHjjmHKuw81q9CuUx",
  "key41": "5DU23YsgQWTy89NsN8ptv65gEDtv5fr4e47fnaNvaHe6jVQorLK7FBhUSh15wsrfNNaxsvvZ36gyDRU4yAETpsUr",
  "key42": "4fMv5qPxP4jhQL9x1wnAkAfnVRTKNjc1obvDBEhBn6ea6pmGgJZKmJzfDxC9fDi9nr5iJjJH4t8YChCP15yaDa2K",
  "key43": "j1FVJdnNqUPTi3pKiBZi64Qy4wP3kHqVz2GdysdHfzFohwwDrbc8HLvzheYcfxLdHSKiv2tyg1dhSUviRSrhEcG"
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
