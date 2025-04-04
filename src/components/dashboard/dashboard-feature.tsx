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
    "54afGH5XUAqZ5MBxnfPxmiznMJiyetbV7M62xBVgQWWyPuSKpRncvJ21f8jMcQrxUWaDMvsmPX724cjZDZDXnEfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kq9vpqaaPW2BNbcpyDhzxncQxLFtWhYi3SPQgSqwLTdTXnrNtFz15oVBEN6CzDhLcHTkBHXqyx47fYhwbAnm2TH",
  "key1": "NsS2cABWmuZpygTG64T1KbUjDeHaBpMcENjFgXKjNkFePJqEQY2C6rqNCH7gkMDDKjYwkqxJUCCJurqkwq9TH1J",
  "key2": "5xRud6VQoNETPnmE6eevFy1eJmMv4R4WkC3zmDEGKaGtRu2LAXunPa6t4Hc56bPigq6dsCnbvy2vY51gGpn4MkWr",
  "key3": "2aC8SDpXtBr1CtksDU3PcE1pdnXgPAPtQjFbksjYRLxMxPbjcbwSsATEnzX514J73kRNV4KxT5iDiTjw4c4s6uGH",
  "key4": "3UzBXvYpZUHDeUbUQSRoBroXw9jXBm1kKNf49obUbt2zU9q5NZbwWWy8xLgQJzXj7nadLj4WNAaNbtwXyEQPm2h2",
  "key5": "3u9KNjnBXxiYaCxrxeBqNTZGvRJZPZ7LWGcwD5Vu8uXUMKSiJBK9tUvdZMpe7nLTL3MvjdRGkzY58QwRGvX6Birx",
  "key6": "tzpfdVBfsovWdfDxaNQAQb596Zaeo3LPusBaRm342hN4iYjQeNqGyu5b9ayBCue2CvFxAjHM7m39dLcjn3RRUj3",
  "key7": "2JXrd8ZS9PL4CApZmF46u4NsjQWmSipR6fANuLCaGHpJHuSqLoika5Hbfd5ckfWSuCDaGTqK2GPKkbe3u5N2VECB",
  "key8": "3dVeYwhc7Tuf3cw1HDcDKUtFiXKtAt1u1qdZJQyNruP8fFRJr2kRimXBZ6ggRwui2tsPow6LCP2nb4xDdjWw5ti7",
  "key9": "5B5o9VJBaqdTkYJbio3yFVFZRj5x72Xufbyk2PcyzULXR56Fb3YgfuB4QBEYi4X5BM7UhDLKLfsk4YsfsBk8LoAz",
  "key10": "4TavJhjdgh3g7WowSGi8Pt9iu7naEb1eYSq7TeVWn5ZGdEeh7idwnMdkk213trMXcZw9oBDDPP39actYXi61R29",
  "key11": "3TTfdMxWqyGufGpLGNTHr73WXcxRr19pGVFNDFGBK7noHtgP9uKc5AUDVWry6tb2epDP33MNCjxboo5t1RG57ini",
  "key12": "4wjsUuAcWCaWWWjtnUAGLyB2FwihtAMrnDkLyVNbLSA9QZgyNJw1UBecQWyFkhQh5eKY1kSE6GFSeyWPrteyTNC1",
  "key13": "3jQxgt5H4WanoKKWcvXzNUUEz4JkQCFEMSQajVRLKuvxMb8Vge4LDQiW8kEb3VzFzvZZoqJ9D74U33QL23jZoU4n",
  "key14": "4P9FuHKC9dtxX5tH66omyBt1LQxC9F3rhKKiYZNsB4NEP11wmo1LLrFwQuARRSzurhMrxgR91BTs74tae27JRDYv",
  "key15": "61ZNG2UVFQKZDWLrKwhshYD8cXPeYKRkZN3Wzm2DMHoPQD94bYh9GZ8oLPwfDnP7qYoR2CZg61kxfvbVcTQsySfr",
  "key16": "dXRopqEE9LpCe6TzB3vQeXciLY4XWtt33hL7NnBAjx6vJbi5LjwCsRRfzSYzh8PEMU2mDLcfByAeJuXa2kSGh4J",
  "key17": "3YK3qpN3Bts43X5GN2CkCytuGBEgGyM2paZZWVQ61oP1xfkU3Va45zuvKMtHjS5FkYrAZUQSrvmgEwzPYQRiVLZK",
  "key18": "31JdDNG8zTxje2BFRyoakX61HtPpuoGQEAEN6ZxENWXsxsp8YGrHcaNLJCPnCkqg17WqBiUj1quFwiPyVSqBy9u9",
  "key19": "5Aw5dpubmnY29bafAirhHSJzw17CAHQAwfkTDTTidCwA4V6wGF2skkFFWu1onJTGbQDdHSUTiQ3oFesM3fJEsGpZ",
  "key20": "3yhEKb9LYJu7NtCYiLv1vzXnbgwha6RtXdmzqFoYcXJkE39btEDUgRKsJuDSLaZygF2E2c7EjB9Z9NmxQWeQqsCp",
  "key21": "5bpp2guRPVg5N4zVxBnL3u5Xva4Nmxmg5tkn4Km6rtWq2tVFjrhPxu9bRpDgfiMkmp3mt2iMfNgdbyRVrF88Ls98",
  "key22": "23b1NLn3vvty2RcrrbdrSCLyuad3JV2k2xtNSmE1EFQJHHGv3mWDhrrnGDVruPFaWBxH1s39h8wzXveJbstEGpDg",
  "key23": "4cfHicPr73R6cCCqFth8dPszPNPMpCAPXsHjo4tYPpSAxbJDgSPRrXX1Qhf5Bh86eDoqhe2R115gXcbaRjgYxVrc",
  "key24": "SmAtgL7X9QyQ2JbgKZ2PUJTBa9TWAsVeH54jbHCfsTZikwoNVSxXFojRaGJjfgf5tKsmo5184HukwDMnQCQwh68",
  "key25": "4UVm1ZMXb8C8ChRpSNMdhWtMAZNpvVCjSqN8VAdPhrqYQpJ2TL9yVFXPsKHFN6JZeogrXqAJxnBDw8477JY3iZ2D",
  "key26": "3i4oPMyGS76F31LM84zYgVJx6tqH5Y93ffxMYdvXakfHd4CgEYqVVtXw9yFrQSeTtrnWx3UF7WRdVshkrrLwgTwz",
  "key27": "3xgVQXoWYCrhyR41Nbd7NjXnBGUosXyrXTNTEA6VpCk7QMwVZ4MNPNAbJbaNov6rH1rMaWoWg7jXEt1WCMNd7EEW",
  "key28": "2VmrorKSWfFCF5RqqX3oDcWCbsna1AQ6wKUGBNMo2oX6d9VXzBNhKE6NpoXXQAhY4Coix1EgWA4tXdbyGoW4rbCA",
  "key29": "33WiYzw8ECSmRL1XRFzeZZyw2QZpBRxNSjvoC8kMmM4Nu8HWU53CtzQrtHBrkjhzutkHNCcTDFbiiMLYJAGjfb6r",
  "key30": "3oDqJBUdX2CxVZ43TRzYwP472hRYo9YSR89gfDT7Tf7C6rjHNzrAj9JCWEt3yH2erua6xJ8rVQkggpXBMqemYuBf",
  "key31": "aUnwVvHSovDyGzsYVskYqbM1J9AWc99WAcXfzJfNUyM1ZZhuEZWhfUHWMm8K3ru3poA9kHdesZhpJ2gmm9kuKGA",
  "key32": "j4VtwGatcUfeBZKHtU7YF1UgV8RbN84Q6zGKkLyo6PaYLoGm2DBjzUqTNsGXERSutGmxdsdqeDvGT6CPDYjquKq",
  "key33": "pzRGpffnwM2EmvrMsNhRCjUh8yVqVpCggc46bT2yBKts5K1aFX27fv3fqvbpoLktpUtwB2CZdgvoVqYT1v4JDqJ",
  "key34": "47TQZ557KCgowZLJfQYwNQXSp7kAyQTfvENKXxf7BNKV7vcBkgPuEgPvK8N6cGkGnuWkVNbeuZEDQrg1zbHHDG7W",
  "key35": "59UiYzA5icg23ejThxLdMHXGocWxnhmNHo7KfVvdruDjNZasQfzbWnqFZTEUcj2bF9zt48TSbGXJHDGW4E7QdyA1",
  "key36": "38rNeuo21ask37Ww3yzzMfpekiqY8ULXy9PXFnB7xJiwv7T1geP6zBJhdPzGQCQAwUjjhaJtz2s3EFXrj5vMx8Pc",
  "key37": "4EgoxRbXCc1bduxFfZ8AJQDxadqURwoHibcShWboCDyZVmNbdjgfWfz5nu8bxJKugXhpaT4xXU6bH2bmNKyZPzXq",
  "key38": "E7MkxQzn3iAftQUTnhugvHzEkMzY5PcRRTtiVf7q6FkZ4AWzDwoHS96H3wouTbfnrvj2WeZKpMzzGk1WtMPXXG2",
  "key39": "rAzjuSErvYVnJVFBYPf8WmZVAmDuPchp7wXdn8gv79BNNUi3yWr7S2uXeV1kjQ1Z7tSu8H2CbDa7epktcL78tiY",
  "key40": "5hmkp5KqgtGkB7mtKqiRHTrjuec58CpxM9i3LwyRUsTksr2nnMR9pwpsx3FhQwi4SnuLT6ysUnXMNHAPHtSTE9kC",
  "key41": "TEHdgHLKFt2NCrw1AmnYt3j1oXstd3ANioarCF7Vqrxqw5yENnq5JaiUtgvJJ8s3R5CujYs41PZRuKp3rFc4PgK",
  "key42": "xjkfbuTcaPBh3YZ3ymLyUc6PoSzA43EADEqAHVtksqy27PzQefSxcmYGbsHdVDeSzjbqiHsa8GF5jcvhcYVtL67",
  "key43": "3zr57uG65Cb622btC8bq2RwSMN4wK8Z2nt7hvfiTaTdjNGbveJGYiBh94q96oaxZ8utNdHFqbU75PdeRheVaLeLC",
  "key44": "VvZsm95udpBNiAG5psJL3rZjVP7mVTP9G7DUbiUpgAyujVNYFq5U46zvoC15tCPxTwejmTt2Cz9XgcJzQ4YYusm",
  "key45": "Ds1bquJZLr157ceHNTH36XzpPQ1Md1i5SVG5ceBNvDjhzxo8ByCDRA1Yc4KvS1gHsumtMoeSNmwdaoVyZVqJND6",
  "key46": "5dEPSzUeAxYAAqLkPDfbWhiuxZEfsdVY5Ntj9yW9ZAZrogB1RYJE8RsEWPyjDZtsEByG8tsVbukcmG9GBW1SzqGa",
  "key47": "rRGa3FWtZH1wa3H4EDxg333m1RJLy1epU33MuFxg7S2CVKJ6TgUQA7ZmhLPNeZ6ta562137tCxG2PRBp3TGK5N5",
  "key48": "59TPDaizKvGdMUUjU4v5BuAUoiSKpU4QNQqifULMnzZVogRaSeQ9X9yysj9CoxUxMNiBuru6J6eUnNHJqLg2nvLC"
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
