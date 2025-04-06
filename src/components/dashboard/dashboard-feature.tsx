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
    "5Q9ZbUMPvPHtEvCGpYgo8sJsa4UMYJUpptfvqG9nQyd3Sxm6Lv1sSxNR4W4fkY9YjioSS63zDMXNyL8VtJ9oBZaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tay7br6M3s12msxEG2JQqxyGcnHaaRuk1x9xm2GCaHbj6ah47LTHnWPqiZZVnFUevxKGv8UM66tMVtCpnuxWN1s",
  "key1": "522oEDJd55tsmCeWXswt4HpyvGB7oB5veoHuv92jT7SKDPVJrMw5Nv6iKmRsB59pLykJjqNcHzRm5DLQ4MVT1pQu",
  "key2": "3pUNDuGrZQf3k8ZzkSAW4B1Ec6rzsgtBMudzG131zLCcUsB3p5CfzynwKJRKucBcuQLQ3aSBaKbDwmSWxYREjLt4",
  "key3": "2m6k2jsaV5zojbEPdcD1ryGZPAb1WkwJfVRuTF1W8tr4FmcaXBKra1VUye42iCs55mmUdD94DMk6yDK6vemiESdQ",
  "key4": "5qEhc2GEz7uBd5gXHVR5C3MUjvAqZbZTeZRKjbtMPqb5YxACjKr2RLiJSkCREZcvxfGFUYHnT8sQcEWvFStYxHdm",
  "key5": "58FLNZnCcxpBd2KWpP9Zx1t7hUfzERyLhuZj1AAzjRanNyhFPGKqNRhMivjAp2UdfhSek68Fhdj5oZBmQLwPMqrb",
  "key6": "54eEzXxkbhNDmLuvyzXVrjdPFfe5i1pujVjdVL1MTQ8XjWkSmPotSEEv7P7ocVy4qyzmda8Tonas5CHjm13vxSHV",
  "key7": "3KWaJcXQ2tUYZoruPRDtWbjfGm6uh8sxVPdc9sPngpBauENJcAdErcGphjSMKdSVMMGQSDvmHLSJ3HbhT938H2jZ",
  "key8": "2Ei6cnSGV36marpynkFabuRmTpjc3mQGzuesbqp6yQ1WcihSEWxxDUPrLT35FiHk4UQcygQYz3NPFGJYFWXEE6KS",
  "key9": "veoJbFkzQvDJ7sZAvCGaCCPm3DsnscrtvqrvUr4KMmfvRxHYPir94RgQoknpf3c2fkHDVx1g2xSn6mPN8P1ymYS",
  "key10": "iV5Kh2GK7f3FkVzbZSjeGxuhjDGmLfA6uUBvdLTgy4n1uenC6ng7tU4vZLRbnDL5vE5XBRUduHTHT1YDD4LbVDN",
  "key11": "57JHq67Hi43tdrD1E1KhYfsDA4NTmKSN7VeaQCAjR7P4He4VgsGQtFxhARPvetBG6LdNo1jRjxom6tW5q6w9zxmL",
  "key12": "2WKFcoAEnGzyhGkvuJKtk3uu1T4LW8N5RgLrD9EVvvqwDMEqszg6poqD44KqvPRfM8tukmATa3iSeuP7VJhbAikJ",
  "key13": "3LstP2o3syzfLeqcPjDa38QUqakBqyhkMjkd6dpjKPPuZmg78jShcx94w5CSW7vkRL7BRZZTB43bzZGg7EJSh26k",
  "key14": "4G6mdwfofDgcznnEfUawz6qH4nYs1p8XAq84R4Uv3dMcjUPWmAyd2mrqrXThRjygi7ugwCMzMkgs3KSy4AhN16EJ",
  "key15": "pCcStwjAWVTSN2vgmhv79aoNzNaYpGKsDBMioudZqTVy3NF3bYjKuDZLXtcJjMNw9hnemg4MbwpQN2opMErnV3t",
  "key16": "3tc1vkAhXjvnw3kcYJ78Ek7TY1hpPLGYFr8exUFXAMEFfGNh7kKgpCN1d4HgQyCPTDXaYy1aBtL3iL2VcZ4N6k4K",
  "key17": "62ZMwPFYe9XJvgTCdAfzRaGPRVFu8y1fxWuUz5uwwvimwC2ZiEuhkSk6xtYRipCWGSS7Ggfy8vCj6e1fkNm8LdHa",
  "key18": "25rMDCWwP4n3xebm9VqUsj29aYv7cRUvEHosZcPQBx1LM4EBmLYjfYzkcJPQbozcDZotJPfxXxY9zHQuAq7W86jK",
  "key19": "4nTXvsuRAqf66NvsGfUkS5xgwCe8JsCydMrTgenzH6s9FZvr9GB3VYzC1pLAMUryWavn3LsZdGhyqaKpnDyHUxzX",
  "key20": "fSVVZ9YqWZUzwqa5xmfr5zymuZoNRvnD7u22WyT1DQAvHnxU4dvUFCvNXzp5YCZayqVBSUfYgn7835B5YT8tSrt",
  "key21": "5wgZ2Ni817ddYDvrXoKe9bbxYcEk9y8JJSpa67m3nrTZMbc7Vvj9GE6ZFBM9UEDKRYSsmDEbNsrwtkNeieYZy4h6",
  "key22": "4WKtJcNk5jbsQbVaJJ2eqcry3UyWkWv3LEruBRLv9hVPSCKx7a82tn8cGis3vcpoD47K57HEw4KQipMb7o3dG9uY",
  "key23": "5GDnyWBPoqTsJZcrNpzrk1hAEYUkJSskegnyPrNjFZ46RuPwjuEpCdKoKbMvRCoFXkLMLE4hDJo4Ctt5YKfo12qd",
  "key24": "2gCoB9H1BdKpYzva2enwQ52gc7t9L9843ZMFHwqGQrtKgYa4McemsqkUdzAvLgq5bhD8hVgGVTW9kKaqwZ2w3ns4",
  "key25": "bu4kuyF6yKFwwsw6V9NUzwNT8gNB5udJi9QGV4rG5UoQXPEQbjenC7RcUgEdCiDgfyWfHVmMdSNECXpD5hrrmHe",
  "key26": "46Hg57sHDivASZmkGiJEhXumHbggxTuaAWcNMKQaiTtyjnCh3trFLiHZoWPJN6HxDcj7tcp13PMt3XKQGuw1b6U9",
  "key27": "5rnzdcbHEA6wjYVZ2UFSpGiemKAHVy1kTUoWbFS8n8L7MMnvpbHNzgStSctYr56Y3akrnbN69hCrU6jT1PocQZTV",
  "key28": "tJoRMxK13aK1LYwYMxS8fpNxXPorZAcxDAFaticKMZnKeegb8g8n9MrnKu1KTvQpkMEjR3BN4eeT46P6JweDAGi",
  "key29": "T9NSh5FJAq4GjyDm5YDpsCWaSshDz1MqNLSK3fVa1MXbZ8LxpYb6HBmEcDZKTof9HU3APMbLp2Ym8Ur31BqcmiU",
  "key30": "KBMqsZ2g1zfLBMjMD81yRv5qWJqSm4ky9uhEW2mm2qSibegFMwN6JtWBnFnWyWaPAWbQEseYLXGcoHW5otLfYqJ",
  "key31": "5sAh5a8j5PSTRG2NNVGeY2vhaQMDTgaqxqHrf5zB6hNK2W622my7drjLH41A6YRmQZTnitbvkP65JTtak4DRKmS9",
  "key32": "3K53nsVtgXme6rW4XxHrjRsd2yWMTsuxkAtqiQ67wXNTpq4gonrdAXuTNgXGicFUfoth3xsd8VcMsdx5VfKBPMq4",
  "key33": "s728tphdJWgbqojbNEoj4bW1q9DSSq3aSrECmwgPhoasPXaxx8rG7Fibnz7wUcscuaypTzQ61kHthWQGpijLyEj"
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
