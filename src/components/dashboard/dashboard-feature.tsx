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
    "cqGHrxa3cKSSx9F5KyyeKXDFYqW7a9aGHG4UHQkUY3HjJGxpQFV1hvPAhmTa4ntT46yARp5phyP96UPpXrRwuGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wypevo4CbCDWiaw5pxRJ5BrJUzpX3tP1pMhQcmuFpYTX9NnAFgR3JJZiduTt3doNYRDjpAP2bJRYKFfLDKw9HzV",
  "key1": "48YWvSvnpc4sFeXM3nRF53bWMiaiCnaQ62fMWtiDmJzVYwLnMEMzW5a9dLZeDXcVEjUcjeJzRFGQ6tgcvGUGat8e",
  "key2": "383pXs9zBxXLr3oTqTrEWuKfrRRAmSiQQ6Eu6U8eB3pNGgsBF2jMqUBELYkoAVY2nnJTBGd8jcipcEwiFwhrGbAi",
  "key3": "3ZaZzZcXdWUwn66v7B6NPtF8K7yYYcDKVWYeRtEQqtRDsw6AA1eFefbmPKPRVn5pCyxPcJCovW1NUGDkfFcU9Gbf",
  "key4": "29Dpd25xTWjXaoczcGuBs2tz6ji13sgyGBYrdzrRp33CKu9bZnHG9jL28G1vte75eEtJ3jpHksVuAJt15oVRf9Vg",
  "key5": "nhZspxsTSPQ1yLbQaP4ySx9TApJCEcdNCki5YajiVxsqtPf3fxThuthJeZgf178M77QTB1yuzw7sw7XWtHfAdBT",
  "key6": "5qN8ihEGNEP4Dei9ZLi9UE113mU8ir1DR7seFaCt3e8zQo73NbKBJqrBHrwczYrZ8uj8C5DSqdjiibeeG7amCNvf",
  "key7": "41fTj4NpnfgpD5fBEAQZBuHP4RmYaQpQ1GWqAzATA6TYoWYzJp3uTUN4TqC1DbyHBNjyAf5KmapVQ9HUgjWZaQRN",
  "key8": "5D8QYGDySju4Gu9e2NE5gY5FSxEEiDN9a1VabSzom7D6MPm2W2N3Xx6jsajyMVs7bdyBj5ArDn5WTAtxjAtsootf",
  "key9": "57DXXkvo5fuecZX4FrtzrmdbkEgAYyqtKHmvJf6c62sNCdh48rCRzYpqZD2TtrQn2ydCHtUaCD5pWVALWdiZAvXd",
  "key10": "5CHJkDTAwkmq8VezFD4vsRGqxVQHwsjyhTv3MkSJjsNaWwYECXnLoPbmbza55gyDMF1qXaYU8RGJ9xcEyn4Epsgo",
  "key11": "JXcCbFtst1Z5Ly1Re9gLhAPfTBp3wmSS8y4GGRQHNB4s7V23vuFtDodD5fMUHA54TbjgktYchGN23riAiCoGyqF",
  "key12": "5kKVbjXQxu4uGKpA9wnsn7ooRMLque8ejGCPBr7DMbGhiCfxEgcTeWcnLbewHrgPTswhooESxcVAMSCfyxAVBfMS",
  "key13": "2gwYDhZXTkKc2N8r3M9yy1Cfc4q5AiK2YW39ZEXWm9HQo6Qx87AVskzWLEVKcoZpKXzXiDd3fGVePGkZhytWzz2V",
  "key14": "57JD8aYC9hT8JzaCdS5SrbG9vWmPZBvPdvsnnewX3ArkDe71nuZM3xT3qzwhJdWCD9J9nYUEcDB49aMo2CF3LrpV",
  "key15": "2CFQmMpdFACtLzezUftRdx4VpwAyMNaEQywsR6mUyVAUsNFQbw2Jh9kHS9s5b8Bk8GrjAQEHamQm8djZKCEkNW3e",
  "key16": "2xrR7YkcB433r4GwE1kiApNiXi6g9Ru2aAKMDgQRYCPKsAgyJQfQWy367CfDjQ9RseUCofQ43qaWq2j8JCXPwVo3",
  "key17": "2E6NSBus8Nrc6LS36JeyFrRap19wBAZJygPv539ZRPQ1hGBrFjZqMaAwEvytbKBL2LHiJ19RW5w6FLojaD1hPy5v",
  "key18": "64SPkpicRtZNhV5BhQBfJhwKy1NkUVipuZTBm9yPH7qJfuifYua4Nfstz6XtdKZEitpPuqUDigCFS9Ki7wLSoswv",
  "key19": "22nJpGgYDTttHGMVhNgTx22k9aU4RuPx7g5qVi1CejHd6N73frCeZ1zZSAVBCzRf41HTVz2dkEjiE5mNzQ4GiRcj",
  "key20": "3qNFG92TXQHW4zvc2QSEj8pRNdLe35PMevy9zBzGdVbJMQkdqhDUXQA7F2SFqpA8v7fqW84Mcc7FCktPyuoNxaRY",
  "key21": "22DuboqHtWYFrBurMm9LJKibjaNcu1LajhKF9nckGts2RMQDDhtHS77BaNa78sAC3p3fpxmHDWuQSbZg18nuXRUA",
  "key22": "2ggxdxHVoVexKifHzUbbjEX99sz3gd3onHjgk36eAernsQxQp2YqCQBMQu5uRfYPsyE7T8EiegeaWdBHEi1Y2h7z",
  "key23": "4q8J37nukLMZsUm3M5XVAJSRE1jV77BycqXznZZW1pyQCxYi25Da1JELyCXARPxYTpGn4MWe7dDvnqWadiJuiBpL",
  "key24": "jYXZPhNmgF2wD2V4u1jvgR4bRTEprLq1b8VKsZFfNUTdJdbHzVXthpdJVXpEsGVBNNp4xr7q6BWR9GqDq6Ewtuy",
  "key25": "2s33fUGUx9fGQDvZmZTVchyZ8ds4ffmbje7TGmxsMgbjDRDm3XpGEo4wmuRFhprz9ZrgLtBhhMp6qUefzJafjU1C",
  "key26": "5rNTHcg4FePE2NGq4mJwZ4p11dqC5NhMkKrRoc8FdWKQ57ofGmZbP2XXHsnd59h1RzqxoU9pLzSXcbWCYcMFNyyy",
  "key27": "5UNfz2Sy3Vrn3t597BNAhyS9Pty4HNZWctDoc9evzKB9ZQ1uorcHd1Mfh3vdeX3QoQBt2oz8HndM5iboJLxJ6fgn",
  "key28": "1uo6uyb3G4vZSywDMGjeCx1QotFRuZTteVzFAe2D2LqEhnDUScXj4LXwdaA5Qew2x9uW62bKWbt6s3KAZ7byT6E",
  "key29": "2s6sJZkfWVcSfbppAMMV6ZwLym3L6g6DJSw6qujK6QQ1Vv9SepyKstx1xLb2TwoivBPJpCi5nFQhjaCZdaedS8k1",
  "key30": "2Ya2KQH9d6yDT76aU3vxcdzwpcCPcMx2xhkSTocHK9mW4JFDUtq4U6BnbkbxuYTNTHqNPfSojrD5iBn2Jh9KffxH",
  "key31": "2FAronmbdpAJS8YVgR9jSGaE58q6j11V8obvkt4VQXoeC3FUyg1o5FRW4saD5jSJD6Fs5ea4XcQ7NKNMNDBtNymd",
  "key32": "BVbGkbDsMsHW6QH2WuMoraHDrP4qeZWKiUvk2kFkm5tvgBiEHcXtNfyu8ubnszH9G6zgfjRmXRN8T8rMg9RLF4p",
  "key33": "5zNfaikGzuJGaEgPY192Ck64a1DG1xkm4s6QM8zTQBRyyMi94h88Hscwx6kngRH93DND8jefoHjGdDLT3MnmmPme",
  "key34": "4qrvT8BEPmubSW57NqsiKSPmXVyHSs2KqRzmvUBThPeV9TArzrwYXs7uSv1AAKz1SvkajdZ29jCoch9fQLgnGvsD",
  "key35": "5VQ35r1HSbsQTGsuPAgHEVHqXfsKcHcWsTVM4dnEK2WAHFrCTdmb8HqYtJ3ZedkqyPBoe5Ck6LKbLGgd7vsSGLmN",
  "key36": "3hrf2wizwBcKF4LgaKqVy1vkMrnZczfyqdmBijLvY7g5FkCyvWhU3dHZMXUW9ASXP6DbNXxYVn8sYWPyXkefT6nU",
  "key37": "63AziFu5EC6QC5vVVVj4J89bozff9JaSWjpFV9HArrnuA5nvXLdqTs3sps5rW2G4eB54mbbCzaLMTMRARRSdUgyU",
  "key38": "2MDdtREHXDRqGrVvMxXMFMq1PhSJX8W1JuVJTK7mUSUipHs6rnJ7aJc4HDzAsyqYJWG8GZSCFGx7hmomN9ubLaN4",
  "key39": "x3phDtZTdsrq9vbdcm9R38ZGKufo7B8pbaBvpbVsMWoVSPxEMxWdC8yzvKrEPGn5WMoyWDtU8uyw3nT8FiFL9ot",
  "key40": "5E9sbQzpU6X7WNdF2uxTCwvPXAPjWrbEoUnojzyja5zhKyry2b2PfhH4SEqbCodYmBy2Q4gUQpAg3RX4u8swWnpj",
  "key41": "4qasdbFG1zH7xEJXMnyMt2L2qnKXXYbfY6sw88RNhYtBjD72eQsrHrgd32hRx5aUpfr6eZ6CyFUcC51HaeFFxJr8",
  "key42": "2iNMfo9cPfN7TQyA3DcC6aoYtus2n7AaZq1RAVwzGMWJSF2m22Mj6mdvbyGbBTSW1XxCKpFaTNfehfNx3LZeE8yL",
  "key43": "5SqiopV3YQFkQRbkHGafbRd3ckeL8NvVf7G4eAfTWrvnDJv8kZVm8LUxnmn9QwRXcGtsGQ2x7bj2PX5L1yTBvEru",
  "key44": "324YRej7YZH255aLLy5HFVvuayh1kzN1h6kBeaNSge8LF7qJekSRqy5swZu4oUWqe2cCXxFAjHDPdJvuEH3SNkPu",
  "key45": "4T8HjHMPES2StDuJTXSXKbvrTnRAqME9brbXqu43mTNCigEEvoaLT9iP8kMRnKLnRvZcKT4PmqaDGEKCM227maym",
  "key46": "2XY1ifbEEYMyWDcKJRxoJ8HYev19Q8wrG487LwayBviNCgy6cMyPyNWY61p74nazsVRGooKfRVM8Ezbn1P6xZJC8"
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
