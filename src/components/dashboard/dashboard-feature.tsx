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
    "4QYLyrtr6NjSsKvuHB13xMjKPMvqEVc5YwxLwpfJxy8WGZ1Bvj9rRy7d3z69cMzqzkkZd84vPCPkxga4NjRNBytp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AAqWdUKo6p99Haq93s5cjo95S5ABxFdB6Sdz2eD4BgwBJUWheJLaQFq8ndUwh6mrN17xX196F4RcVFuY22zzHur",
  "key1": "31SgYXTM8eXmdw5xZzJspvBVt5nyUEcrvmFv7eECZnbQtDirau13WuYNHLhvAMQEVXGcuyXUcrBwwizGDEbWPAHq",
  "key2": "3RZLkcafwHHKosDtkcvaa6iHkKJYTGSQajg7qPfQaqBTb3C7yg5ahgp9eDBuRTs4EKFY3p8Kc6P6KLkynfnXN1gn",
  "key3": "UeB8oT9LLDr9Ez4rA8GjmVpiUXvQKq6dcjpvtgBmYyPSYXuV6rviCUGK13SxvrHMsYV3xgvCm4wT45Ykb4DxodL",
  "key4": "5MnzW7YgyEscLxutpU7y5QdTKjtuzJWYraYHSWDSefVBiLWTrbEqfeEZcYVHDBsAKZakeWE6unMdu7aCt86JsKxm",
  "key5": "2XHPEuPABm5TTbKy9mxPpR6UJiHzZvt1wBsHKh7JfmPNwuQfvxP5Z873xJMrkHENj3QrLUGGfXnGWP6kFqcH18kR",
  "key6": "2rxcp6Kju3gbNXtjZgysCMCLEYRhvYfkUsHXhiCWrgLu1xHjtrA3ym1P7RM7fdikRJ5rNyW9xtB4oZHGKZXZLsuN",
  "key7": "4te3CytdTY5w8itSw9hsQY79aexTCMpaWJz7YCQGTJHW716NMe4UXsq7D7ZjEtiJc6xm5Y4K7jvp2Z7VLwfz5nYX",
  "key8": "3aehNtNPHgoiHMcpYt7FG8MrUbDmj2FhGqcbANutQ57NVY1AmqFJKtQtG3j3eZtz7wtUurAthAebvvyp8kFprhxj",
  "key9": "5omwjHouqJKHDynXnvMgD7YiwnGCfgux5uanUh1maHZk9wgyzwGZoM2LAv6gRcEqsTBpgr6BvmjvDMC6hhp7hXQu",
  "key10": "2fMHeyZ435Fk3Ddur32cArZDrTxtDn4C66ELj2RnsDo1tWNBAPFLdg2VNPvS1kBA5h7ELsTDXvDVNLCnajs8mPNX",
  "key11": "42FJ4ubibwtYneULmGzX78iVc1dDSMfzxdpEzPCaiCryK8JdB2W9LBXMowXeAenGJJuaawk1iGkTqucMFNvp2SUW",
  "key12": "5ieXP67bxxKv7SedoYAojR8TKBPNiQ2eDjpEsC3d7dURndxWzK1QMny1te83UQVQ1jEqh7AcFmZcDvRExnsjvwbc",
  "key13": "cXaGo5AX9XHqgBYuGY9CVvEZTWGFKZbRbtBmgZouD4SYKxrEtjnFSghfFE5ezts62zvU5c1i6qa6MtAxFsLWrGe",
  "key14": "41szhCcvqMitmSNk3FMNjUw24bEy1J8kBTwY22RKzCjxyHxyVNdWyf7hTzixbQTZb2rN13SsqGjdP8daWnpUuR2d",
  "key15": "3tSDwFjfac8Pzi4fAMMTGE8bRfccQ737FkxH9EYjftDGEuiR3CNciEtxC2zK2hXYCZaeMSwhcvaxhwmjPUY36TFk",
  "key16": "3hdrZPgveTsz3dn553og9MMPz5KXvyD6uDyswpS6M1UA1QEbv3JSWqFXKA4C5whRocP2ak62NujxR51gnUJFtW8G",
  "key17": "3ggSLfi8WPNu6EYDi6dVxWZUEuLgApyfksQhGDsBwdwzTUjRZEbfEMjjsNEkagVnHw7Ch72KRauQJWgzYqnfyewE",
  "key18": "2X6LzxptNsMDWkngEnoCkKBGqdTEBB3unoFRmGGSGQDCENznxvkKXzHzFR5g4rZcehKgzjRppDM3u8mNtAVFxVB1",
  "key19": "5TJF5BL5kSkeYPjZ5iXfCwRnURBeEQQQ5Wiji1BYD4ecq6hfPRvZaAxh531RqU1asDgA3PTfkL4xf67TGDmbMmHr",
  "key20": "5Ej8mLFt82rUx2RAh5DtEciWjbNV6SxB2mPiBgnEbeXksNix3GANmRLznv6pLXnEzCzUj1iemsLAdNodfHrQyPVG",
  "key21": "4L4xaSPRJ2YzSzwnViokZr25q1169KtjUAdLtSMZ6wRvAWKNqzaqMVNVpxbVuNbUjXaCmA6Ugc2eAEyf8vz6aAZs",
  "key22": "4wSoNYxxQjAeraqid1sgAm3FKjuLgiT6Yu7kzrCAb6LWpfqv36MqKpXy8r3KNjKLdZPpKbTmeZCgVvA7UJWv2h17",
  "key23": "4dgg8ebcDHqtBSr5RQqiCYUw3yv5nFJpjxRyYx6u4rjohsVVfxDkwNeENsfE45k7usiEoFbwvwFTJPb6ZtT28c5d",
  "key24": "2i93yx3x5irr7nikc7Jrx2vW85rVybavM4KbbhA7Fh8UYaS3V3UyZRdpMJJErBtnwmf5dUoefCH2CscHS2HH8AhM",
  "key25": "5rZhCUm7eWw9rm2w3bjABibh4oTNVRgcRPGdNfZLcwsx2tKwBcGWFvt7oozbqP5m5jYuySq28uj9Ckg8G9L5VP9L",
  "key26": "3zwEtpTkBo2DEGRMJ12cj8Fwv5zYba456HqAsriqBY5YbwtNFGGHs3Be5LJUaNNPSg6YbJU3uT7LKnaM5YHxKbGM",
  "key27": "jADqzXKhnJhr9qGzTjxAe4PsT3bqFUcX335HXELPqdoAsfUH5U8bQdY5EUtp71pGd4VZHwg68kvTSa4xrDjQmbk",
  "key28": "2MZyPozdySXzP8RzjK76D3rKGCQ4Mot8QpKfqCi3ZmiGLJkJEotLi2YJv1av1e99ZfBBAobiff7v4GSbKUe9bTom",
  "key29": "5YiXFVg87MJFoDuconP6Cn8Qh5Hm6qG6axHmuBruzBxMoVTxQyRfTZFWeQ8cUhNu7RcvfyBY1TSnJY2t8F6JTQzD",
  "key30": "uqSA4NnKnSP2uLUmGp8HSJaw72kk89rNgAtBaARV57GFGwFBKvqxAGD3D1nahdnzuLq8V5pY644hFJu6tXMwK3V",
  "key31": "BYXwjfMVEWMXMyHEKKgUT7h7BXsJst7Cwsfyymo8oJHS9vFx1LXE62pRMEhh2c5ejUQrVz87u8NCcZoYL7yYfTt",
  "key32": "wK6xNfeDi3eUmFeZgdLNMtdQR4gJimwcViveB2AyDTWsE3iZy1HP9No9LZQS6aCVhVfadY6S9LxRumX4nqPkxYW",
  "key33": "5tmD45W96r68utkwwvxncLU5RYb3SLcBR7GAV9oaidDFrX7Bqv9keHyduXnZK9cCTBPEekiPux4SieDVo5yL9BA6",
  "key34": "2B8Xd8dfZdBw2dAuHdwseNWQfp6amuEs1HQeWqKK5XxRw6aEXjgAmJzRTGk8K6fVNvyjY67JMqGJXyQm4vWiMeT5",
  "key35": "4UtYGrMesxrq91FjbdkM27RGHbuinu4hYEPKNZy7NG1vD4eC8Btp5cgxy6b9GtDrn1E1o8nDxQmHbaJGKKQgvNok",
  "key36": "3SkUg4qqHUtp6Ze4XtxcYVgyctxLDd1rrV5rCTG5khDiSssNLJNJnNZgL9SYznLgkoJoab1RBdrPhJSsjBnV23Gy",
  "key37": "56ePS2iUmQySK2xVnUm9fnfqNndxvi8M5oHsy8eXoBSeFe2p4K6iCVj4QWTQim9Mr66Ddq2Cz4EmU9oneptuU4ZW",
  "key38": "4NaiRtQYTBLWuEpQ87gUJQGNPb73mCdZmmzRCTAkUnhvNn8RmLkSArjjSWZUXcN1ep9ZZYJsboNcHjxvpXue1vN7",
  "key39": "hxkEdYC7PE5pMKNaXqXVStmFmbsX7hQ6tXh4vRDUaEfhXUmepftwiVUqi549btJi6F6C4HYXxJzAMMKvkLLPLst",
  "key40": "2KuLv5xGNafrxpsD6AxqGL8uwj6SejyMxhPHCWntSmHgmxEp8EzvEtzZkWLYYfmLJQpbvvtriAK1BgcztP9tcGvs",
  "key41": "664FULkB6ET59Ba5X1prfd1RwdZdjSop3Y81T7U8DuicRW6hkjQjp3marz9KDgohUTX9iWaB4pUFMCtr9iJPrmRH",
  "key42": "5ZfgrFDzq7SxgHF2pbu6LkXrHtiJ6T71FjKL867EvfFPGsPnGjrqU5ASTb81EP7rhh1Lnf27xpfbj5Ty45uDAVMS",
  "key43": "3TCpj2GeW8eP9sUSZhFweWkArc3keCjvmVD4tnYCnVo6qyh6u7VaTM6aymVNuBTwudNHauL8pk5eR7mZWk41aNQo",
  "key44": "3tHme2F8bfPD5isX1wRWqsCVHp6GHu7sxdBGKKFNPPoR3BoLCvbVswBFcZUjTikRpcWut633vi3FkkSiZeu9SBje"
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
