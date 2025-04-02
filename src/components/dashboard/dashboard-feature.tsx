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
    "6n4k5BuuSWPCnaDTaFgTt4DEyd8AaxBmiFCa8Gji4XPMTVxcBw4huU5ECyw3fwU4pi2XgfnJvANvJAusCVaRShB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEK3MqoF7pydLq251zqEgK5vDngWZNMUSVW6JtNKJQepwMHW2KuBUME96tsfX87bmLAx2CZ1o9CfuKrjUCfVk5Y",
  "key1": "2E9iij9bPv3a9j42ntJwguKXp2n6yf7ppJ5eFWNnQCAZer95RSm3HeFqYjS7VYu82eEWYhJLLsKvWyiqiaSR8YKf",
  "key2": "3L7yvHPBPEriNPrD88XzRxU1ckf7duC1wghvML9GLXFZ8mWdc5Y8mPTNdnwExjUaiGvyfEyyd7QiR45rf21MW1vu",
  "key3": "5Ljwc8k6ywHHfej18W8RFbv9NDhtXaX9WazbGR5EdNfisKgmeaULf6K2q3mUvbjYbrFL26qX52WZn8fAbTCB8Avz",
  "key4": "3QgNfsKgxsfrGnFhv52ut4X9aJRwF1h5KagKgc2YqRCb3ehdypF9Zk4MZ8Kwgdvi3T9McoB9kZ2KyVpiWn1K3fS1",
  "key5": "4mzDuLi5qbPsvA5fdL9yvkmaXtP4epyhrHbFHGdEJJisbsJA72AATJA4b8v2SUaezaMd8eAdSMSAsopSoXZGf9ba",
  "key6": "2bJFHJQp2m2TgF4dS9bmoTdMknQEjj2df1AyiscysU3VEqik8RFJGMhGMa9NR1D5XV7LX2mDdG3UHR6FeTY3o6RL",
  "key7": "35rigCurYuUTz626acSbRjY5hxcQbSXJv62UexdP3yqtoaXhuHgpy2DRk9D5Y1dcNvcQf8ZdDmpHNWiU8ZAePuFx",
  "key8": "3BT4YE3b1CKWrp1nr3mY5qqTxSFY2w6FepX2DAAZW6KacXCKJgetxtYnzypRrNKM2tb1B95uN67CpYu5RZw11A3X",
  "key9": "2ex52diuNnwL5RCcpN5C2rekeNdfsoDDzKCKguhxzKESXBb5T6wKatuVZ5H2G7GZnomMt1tQZw9VpG1tVekyw3oJ",
  "key10": "JLB4wAeQjjgKR1XYe9QhmRaSdY7FekGHc94og6cT5kVnUg9UT91xg7hoov5sQiQbPSeNSeeQTz5YtZfF4azR5qm",
  "key11": "5ik54zEDiK4NK7JvR8VYUoNGYx42U126rgU5mTzfN4gmmdCEVApwyvaiLAWfepWkrMu24pxUenZKqZgS25jcmFke",
  "key12": "2YkNxsFB2hG182jWLd99JdyDiSGqxcUECcAWNcnDnTpLR2JDGNP9BRniK6MRf7HNQuqZ4txRPQL4ctku1VVFwAL6",
  "key13": "3hbpnVuTCdcmBvWu8vAurxHgzkR1WRH4crpWKHsqMKdbEgeW9ziuQJfEE94SxfLRWEfpVKmiKksAQCCJzNkCwPL5",
  "key14": "4NT34aTom27ah1JjX4oyTuWRbkWCv3ZKvbkEv3nMc6LFAe8pg58hd2e9MGBE93AM8qevtVV8SoQdoGzCW3Njzq2x",
  "key15": "38twKFksQFm16eVsqAxShKzamB4foM2oQWeP8EcP2XgZ3iKzEERgDbNWKsmSPqTxSUagw77ke7NecUdoJX8XgdvP",
  "key16": "3gU2UnXdYvXQFJuLauTmadLUeqtz8vWGwKK3ZyaUhJQo3C7xDHfE2FSyM4RPQKcVqqV6C6BhvjdKPh9MQEbQLRs2",
  "key17": "3qioKF3Jsf58id3N6NuJNL9BcqR9b7W6hi24TVfga3VodpafEM27LMt1Lfnmqt5E9NAfudoHKrW6z7UyDRUhZXM5",
  "key18": "5pZsgcJ4sem1jEGfk5Hs88AyseVgqzc5UTRXM3KqWEvTACpo2hXfWPWAzDhpShBdAMuiLBpRQg9zyAQWB3hKijCo",
  "key19": "5ih9gmrjjE6BNHBgkMhoxVWxDoLh16YXRbQhpjb8844TbWoX6PMUk7FRc5X7sP3tUCr6StbKQb3n8uUL3JsQ9iXc",
  "key20": "5Tr9HPwovTLoj65WS9DNxwqL84FQswHi5sxPbkynwzxaAbErag2guqwJaUhpAEfda9stE5pRt4FgvFsowHEnCJSu",
  "key21": "2kw87VTYppDvouNqiUWrkpTE4nsxg3A69KYpgnqLmqRDXYiveZXBLLnzhbxQSjRGPLNL96fVfyyDNv6WDUHVfCAW",
  "key22": "3ctP1b8mdcyYBH4q6Laz7KuDcZAUKkj86Y25FjMGkPvgh97dDZdk4gXog5raorhmxafMKpDorxeGjhcyaT4Mz9Dd",
  "key23": "2jnxAYt4RCZb9DTdBejfN3bfHJSXpvLeaewx3EaqVpp9x2pySYYgkTDCFhNFvkSjC3DyXQnDGYT5LompbrMA69Mc",
  "key24": "3BTP6accHSXLrZNjUpRdUh64D88J1g8WsWPtWpJjfcKQjVEyi53DazVLt7Pdw36RU5fE7Zfr2fEKmZydHDuKYhmu",
  "key25": "hcngV5mZWTpgBV3iuR9R7iRYZPTmrPkWG1Cxr2fVrvX9GfbTb2r4qY8GrxeP4kSKkrtgea28LbY8bN4UALH9v6u",
  "key26": "KeaD6C33GrrcFVMEM6oNu3vEVmtoXncWvzmTYWKRodYtpjbaoCyQZANEBfxho8yLvhEB4xDHdfA1VEq41ejK6EG",
  "key27": "3NCaxNhhBB5EJc4iTujiyoRdWdZVJtX8b4JH3JsvygqMkjZTxvnLiyamjiBcPrwEuWUptz4Sw7PXiZWxUnU2wstk",
  "key28": "4QmyTb9NntcZrJJe7ohQEigvDxv1uFYfLcyMf2xc4nNKmheTTrJaHXqAdhccS8ZMqjUtguFYkFdzWGx6fQck9tpm",
  "key29": "412TnWJRxpzP4mEQYXpHRimJLUfLzTZaAi3vMSgNt1JcMpCzgnk7wnFwUYxA5uedcKp9nMK6JM7z3Lx5us7ezC9c",
  "key30": "39pCzBQawn4kArT6HkNTmuDXtp3x8jvy2i8tH5idJsj9hRgjMszH5DGzvAsdSEZxuEV2hVYdhDwbyARbezm5iAft",
  "key31": "46oqUt3DCzMZLLDKQoDAHmsZ32S8sGa65aD1fznPLsvRPy2TifFr7skaJ6X8nfnazKodnpnZTFhqrCzTCj8HYgUT",
  "key32": "CWpUUU3HiC3cG35CztGLLt8BU8GZwEfXDxGWDN7Nr5eUe1F5eR7JjfFSzpFBgWNiiFZ4WNUKpcpBZp4Lp1b4irR",
  "key33": "2FnHTYaLv9qJiBjRtBsYmsj9N4phBAxWPJifBRSiqbMSyEcsHxm2S5UzQgZgX59nNwvJkRYuMzXBX33rPABmEXBx",
  "key34": "1L8c8jXvw9eErJyLCp7Wi9YuLj7wBvSoMSZ64wUEGNy6bUYLx7u4terkn3mq2ckx6UoCCpiypsYNDR6pYxYv1LN",
  "key35": "5FyDiFPeMSfVqhueA7Zs2Ht3XGXMefSmAtQDNeMgwwzAKnqvuQopzR7BbfrYume86gb2D7VDDUu26reYTjXrnUi6",
  "key36": "3N5hGpaMUuEjbuiTi5CXK94eockCz1GwoxMZuQo2VJYaNnpTARCKpUB2DX1KTmeihoUhcU41fAFn9ByrWvE7txe4",
  "key37": "2ZuueH2GSY69EtUtaF3Sige7MBEQy19e9AsAGbkpJMVkfQsEA8vdqJmgGWFwzsAU3bArjNcGyTTvPXDCKSoi6z6h",
  "key38": "3rJT9UH5sw9jvnFFJce8duMtLNy78ymG5ppioaMU7rxgKZbnBe1pQsRuK67M3MzDydB4uhj7m1Gz5ikQqoFpbvMS",
  "key39": "wDejVnFBZZPVEXmvji8Ki12gRPcDDoG95jAuyHXQCDF6uHFSHzQnB37XDHbVbt5SRzP36AEtXkhQ6Ni9R1PNYc4",
  "key40": "3Qb5XetMQ8knjED2BVgCxHjQ7spt76SeuTdSbngXD2tdSXVNEVNCu9pCyM489tG852uWugkcjDLsfWQSLzgvnU3H",
  "key41": "5wTQcigBmcx2QVnuZmVzjWnd3NGf9joWhgw9hZJyq8eXuZSn4JcggnnzUbRJ9R3XLk3Wc8dVmoYRTKL6a8h2dr3f",
  "key42": "QwbWbBZ9CYF9XMzACxVMmgGv6bcz77NCR1jdwfSmuPTQt9e29bX4gavpFz9tLU2YTgm1A1bYxz2e8MJEWngoL8C",
  "key43": "49Bq4kVC4DKt8g2mHGp1aXPXVsXyTmgFM3f6Y9T5922ndnPhN3rPgriNc2bobU8SeZnSUKYDxM2tAbvJGNkUQDBb",
  "key44": "2FjbxkZMiyx66jhtBXVvLHKDdy6WYtCdixLg9Jd3dygzjdE3ZiF1xxjp4vzPy36LtrCndkkCtnicbZLi7TE2WvQ6",
  "key45": "5iygo9DvckFRPjZcKpwHgQF7aDw29tk8ETWFWBHuu7urY6xdnnTEBpXnhZ8zmhdhP8t8Cv7h7rQtERcXm1n9L8Wf",
  "key46": "N9EnTWgcq6PnhiTe9YXvP9GGEyo9yMcejQt9bwM4YDcKUjeuLs8k4QAYpHoo9a5Spjk146PkWPQ6jP5gcH7N4QR",
  "key47": "3YTMXL1m7oqQeKCk3k78XTmhuTzFJTTuJ3nCf6UL18ayWBQ7jwHr73Dv8Te5YqvgkFiNGAbQN4DmQyThfEoYWha9",
  "key48": "3XAy6J7z5HEuvQnUFYNDGi4FiJUv2929NJDW1wYJjbBHLuBLj9pWDcfyvBwVksW9D6QU8B3SVVsDvgTRiDy9ZpTg"
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
