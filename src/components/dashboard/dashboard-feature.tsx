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
    "65VdXuo8mSUPdwpe8wBzntv8scEtMJhVYEXdvDH6z3BqG3LPD4rUgYjguxgVSER6yDNvQe56kd9uB98bhCqjh5tC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pX7Xqg9GbqjewGhPYrirBKQ8S3Wo7znKDLBHZVaCpVVrmtwwHnwSAsvgS3RXdHu6cqe7L8VyTUJErdgZxKRHsjs",
  "key1": "2BJnZ67TD3rvzEgWcGM6HB9g7jFsbgPitHUBf95VwKFZqYPbEeJ578Vk7m4gxcsRVQ7PtawS6Qt3iEJeb89UFz2k",
  "key2": "7BGy1XErrigjrVjEtgbg2JkrFq8bp9RUEVGMpLWbsvTP85Uph8JHNN9Xcr5HYv2vXDe3Mv8ELDfzdkpbj6g8T9C",
  "key3": "2iMb8zC6AqwfcWpcJttuSTs8yMGzv8C9Luu1buftYxp1W6iH2Edg1oZgZVvuh5pp87adUXtwNFGH8ctNpAAhsTUt",
  "key4": "xkzceKEADf1B7QbDwRHCuH9R1DiYiT66rg6hyLVR5Ynp6YDRkgBCzbkLPKN3pgeR3fBSSgbxEp4gTT37u8F6nnf",
  "key5": "5v5vJwvGLHYrTMs5gbQtBZtMVhrWqsCvWeufes3UnUyKnXqxjPPzGpeLwsB8QW65iDtUVCVWLwK2PwaaTi14HXpo",
  "key6": "tLxnn3KKeZGgQwqmg47zM64pyi7wz9UX5Pt58LbwXhMnVqkTjro2oge8mDVkPpmacjyM6aovw6kkAeiZCUW5rDc",
  "key7": "5ztoxmueYGeFWd612WUuxaRwr7oTsy8HFFy5n58dHQGDd9CG15E6CJeCEGiY6SGWwPLD32YjUJp2ifW6s2Gw3YRW",
  "key8": "4mmekGUDVpMSCG3den2fWxWMes53YTf8mNAmRb8rnF74RobgACwYZkY9gmdz5DMTu2xLiTuLu2K3PswFFU84z5sz",
  "key9": "2L4XRL4ioSd1ESZf9Zs4sLzqt59TeycfYcct47EQfKQAmKXjcQx8sYmTYEtSdLiaKiL5gCU9SR4uYQV2eBEmsXXy",
  "key10": "2hrEZJk5e3P7PqJELkHXUFf6ocAbEWt5MCoQCtTv3neaDpAVEehwcyeBUqRUKUKs5EpPUYLH9RjRFgbHdshNdyHo",
  "key11": "3FuBK1JToQBEew6kHs1Tg3Kn5HogwFd8pNnaZfy58wDYXy1rpP6WRhHwFkwM9Tc7WeUaAa66bqpwFzXfum9JqQ5W",
  "key12": "5VXwT7J3qTM5PWBDJyD5wWVC2fHq7kQ1Qba4UMkX2xrP1Eriz9yrbjeTLxTdUtZEgqE6aCy6QnA3Gad9uM57xA62",
  "key13": "HT1hMY42LMMtNAnBtJc1boJpuypDXnuHUNiXcrUhRk4mqzhFg7zNj3MhkzX94Jv5ihn9NA9VDYxT89kknW1UkbW",
  "key14": "18yyYeYTzkVV4c3YkY6Jpoi7mP7KVftfwuN6YYU2hTtERVez6RXuhWZD84Lj3K3UV4T2ZvdjgkJhmmRmM7hCfbo",
  "key15": "2TG1nRYhe65ifJSG6wmtyzejnwD7DxV37tjy9vaj3QHoHDxCDGouivfmEioJRvhNoBiaw9CjP89h8cWzqTBkjdT4",
  "key16": "5zvTmxLrveUTdqu6GRCpToiXiWT8cUU3bNmdHiqueBcD57FSM4NUHXMURE4prFM3m21WWDFEowPy5qZmop8mSbPR",
  "key17": "4ZFKLuV7wznibHDEqTrBkrL64YAT6PxNt1vMfdmGUB4fGAcUG6QVVkspLjaCMdRh68Q7vvbEw2sk82kkQJzeCJMX",
  "key18": "63eVLPpBT51ZVKxTMiwUh8Wp6MKm8wtwmQCG6beG1P5P2rWauyTfeZGu6UA5j39G5TVtiPgh6eoXYygEzHRnd2Yr",
  "key19": "SaxHWAsUAp6zwzdcGVf7XhnuzbyU2GFpjABUcfzALPWMAxDUb7LA32s2Gu5ByiaaAHKZTbVe8RwodqTUvjLNTrx",
  "key20": "2LA6JdP3Nh5Cj6wnDtA3ttbig9vETjaEjutxcu5m4TrdLooothcadWFhGfHYvYNxacb5RZwuwvMPgVmj8Rv9uqrB",
  "key21": "2qzEj6Q249Mh2wmetx7nTGfzLbTP5iCuv72zyuJLs3DxGyBGr1ypAQMHFMYVHKzYjGjD7ARXgWAPkT8XDWXJZuWW",
  "key22": "5oKrB8bgeg9t9Tav3jfmnubMWLC9LP4gPxyFFDUSoC6HZjSwxDfsFwM3wwgppMnnzPujjwz45BGRAYC4B6bWjcv1",
  "key23": "22DohJqZGuGDs9qLiTZbdpXgwvSp2eL3p2Ts3tHkCpNa1uGNqdu363FpvXGE1FzbfcNinEy9C4H5EgETZrZv1uio",
  "key24": "fEWqAMVGWa3eEJfDMakcG2QvhTq99FD4CgbhUVAECzkyqYhD5seJf7gsS37v3mSBsGczT73gYApc4qdRRTQaAfW",
  "key25": "5UY75Dkc3swVWt7gpJtqFdMSCpPT85wBTRSfxyjbr2JqZE8QyFvERK3k3EJML7qRtqE36dWxzzmAbFX4veWKoNgz",
  "key26": "3DLZ5GhyqnSNvckREAyiFeYbT4d5EU1se7BtjiD8MrA8wYybzkT7Eg2DSTuCpbGygHh5uVAtnj4kcUQeSEBeLDBd",
  "key27": "61TnxdFTAugKadcdRH2bVr8sgS3hNb6v9Ux3aBoThL5uSHsp8SsCKuw4DBm3nwvAwBfm3QM51CQovSiaCk34sQ7t",
  "key28": "5baGrG4geFhHphJ7kZ3pm2xFRMuyxj5WpjVNigaBQU4SWkEepQsGBd46mwceSCJczhzcoPpwisbNsUdsh7Tgjqn8",
  "key29": "5uGipLGEPZXXDYZ2zkGTDUehQpq2q8X4QLiELCdHKEcqMCY3kQ4v9CLY2LnumKTWVc8ARxoSfvXeFqDHBcaXACCJ",
  "key30": "AzT7a4L3vhSQyDWKBD6EzeDu3K3JfRNVCtTaegeAHUKFJMMkjGLwGTsbt6uNrR7iPoLqMB23k5hN9fa7A6WVtsj",
  "key31": "2U7mLj87Afc5bdC6mULERkyd9VoReQHwcpQaNY183i5PvrfosLp6xsgF4GToZR12JB54wfTCbzhtAcN3uCRpNDWa",
  "key32": "5ZMCa6PpxUZb5ASL8B7SyUoPFQFXdAdb3GXyv1ZTvm56cGP4gUuzHuRadSf7gdFGefCVNmCgnFWWoTFMkf4RFzM5",
  "key33": "5Nr2ZR9nJk8vJ7vjuuLNc1bZ8ax69MrmbqUZ6SkW5NQC4uQD82M4YEcPbRZwYquLhnYQH7i6fDMTN2P7Stb9kujr",
  "key34": "5B3DRQsyYU6pc8oMt8AEiWfztZ8VvCtn8thjJU7PGy1t3mGi7njaCbkHi1rE8rybkemGjEcizHH1R59F1bem3bvx",
  "key35": "4kviuK8qNUQZaFHHgLcshDwZtYua7QrCTGsdswGosgrobW3KoXY1LLBFKPMhYuLnJRwWHQqrtGXCk5SZotwJ2d8i",
  "key36": "37xfDbs5hBY6k6T44FSgJHHHizfvsbGPG6xcGKayGEQk3TsMZ6pWpHZTNUjdtpETxHb64sv88mLTtLbE4WTfkV4R",
  "key37": "6278GrWz1k1ppZs487tA6rR4a1dNmgivtx4icbostYoM1PdQcrAaHKpyum7D2ohyn3WxAnRBCNpjvamf8DiBZsEm",
  "key38": "3tbDAwa9HA63NaEW3K9qcRYthS5eUy5kR37mDPayjFBtK2gV6nxAYNjLpv7NeHxTwFXHV6NxrgRZSVx1ifQUtbox"
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
