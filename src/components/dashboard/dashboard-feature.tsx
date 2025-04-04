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
    "4AXuL5Kok2FetSsWKU3DeLocExCDU3X5PwPc4DJZCtgcpu7FUHmPcqwaL5z1jWd3eVkQ2qWunnwAsXRpqzkUN1ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Wo6BgqwHvqpWXqJJvhq7oWnDD1QCnDc4e3dybAHAr5r9QNW911U1arma4WFaBggJHivxsqWeUXivN1aMSN8JLi",
  "key1": "3CjJGKqSEMKGMmvZqpiPpEy8YAkzoD2F3odTGdAEsYyjDQs2uV5FNj5j56TgraSzWXCySvu9MrxU6VsPg7CKqSH9",
  "key2": "Aj1nzC9VjjSjdhjuVtEXHMEcfZShEurq3aogSm7ijg6QmSi4nnK6WQfJcYtW84fKYhk2HB8BUSjK2ivzJDXJf33",
  "key3": "5cHaHGpXvJukYBjbuYj4CMAaQvXis3Zovn8AD7k9akVhayVUx7QE95aRRTN1sMzsYsJD9qCyxGTNHmzfsZLEugYS",
  "key4": "53XBbunQr1ZuFYj5qzG1ezdVFvzTaB4SnBMSXdVfDt9G4dm1WD48hhmsWWCynr2bfxSaJLX8HYnARYP8QU6BWkjc",
  "key5": "pJ4UUfsF2yEZF1Lygo2SjsWHFuYVZ4uBAN66GWFGDZJ8qvRjVq6gWe4383f2EJJiASENgNk2bNzxQsYXzve33J6",
  "key6": "1TKbfaDpDyiDAEpRmxafB3JtdxrAjXpEMoQ4zMcT84aPFoM5MhfkjP1ybZRWbcypk7MzPFF3fmaqJTkbJf8NMpp",
  "key7": "3wgGbu5HX4UYYGKXkj8PPxLM5iAc5hbDgN8xLBXNPb27A1h9pZun57JnvLbJEjtrEQpgh76A5ZJKUjnof4Jzk75W",
  "key8": "4ZLw8sKmSnsbTwr9UyfAXzPNE9Zmyq6MGXNzvYFUpbExnLGQogUvdrVeJeN6BwixVAHE6NxpqkvmCorNCtZwoCt5",
  "key9": "2zKG55E817v3jSHmePaBjbYgmZKwBtJQQ91VxQmnQe7avVynWW27wJUCu2DDUbFizNphNHG2XVmidHtBfK9Uzuj5",
  "key10": "24C3kXMWaeWRGF8jED1QC4gpzRM8NGFUzUx7QHCtWEaxXgeSpoMZxJNS5TKqf26YPTCxvnSvdvzVShwjKedTpJVP",
  "key11": "22ackGhikQnEDPXBQqJqD52ZaV7JwsEPLYs3q8wNr6QUo53pPyp2a5KuX5eCv7H4V4W15qvndNDzQAqpNL92rxCd",
  "key12": "5uVByGTvvo5HWGK3BHzF6p1NqTgFA89d2hQahSAqGwSh6TGEUmamsPbtN6PnTTCx9KqyPzg5wuQtUL2iETVt8QW3",
  "key13": "3KGdBZRK6wFVtsK2jo3DbFNFMPXtKS1GKF1LJhveLfJCFs23pLjhxWTmG8W2vbDPkqHPp8BtwEni1LhMQikAbG3w",
  "key14": "4hnwvyRoymm5TysBULAAwZUtkB7M67azcsXLAvLDj4MKo3swJ4WaTwQE3fTqfrkv3bwmMtjuFkxpeUtgyZod3vES",
  "key15": "CZRLwSkb5N77yzq9nPxwtsXepPnEMjSbmpxjd7oLmj4Ackaqe41LtiPdHu9WCYcW9CJyEoLvU5QeHViT7KFQfG6",
  "key16": "3d1EY2u8yWZaxJfSa3HjCnKVSmLYhD5FbuCsTP1eggkHD7UzQMCoewrnBMqdsBK7Djt3wUK1BfhmVHi9DRhBEwhZ",
  "key17": "3EPHZ7QnzyPwzsnRQvXLwqw1Q1ovUXQmjZZ9YsMn7ckjArtZjpzgByNwKji6gKbWjR9UYH6P5dzp5mvv71TEcHfq",
  "key18": "3tm5jcDP44MEV1FNBS9p8tToGzMTLm1WFr8RuQyMWHudWWippuExHiwQRYCxTqRufxcyXCPxNCgWH9zd4PLRZcbf",
  "key19": "S6S2QE51uGxK7JH7w8aRgpqRYRbXTinkuo2mFsDPLiVNsgmwQqAEf1MTN6dQ3CFYRxHFUb1oXZ8vsoE3hWePEt8",
  "key20": "2xwPNhRfhfNmyBzG1x7briY43cXdbKP3AoHT6NxUGPUzEC9NH1H5cRSzi3K6EP9zUGjTignCBY6Lw4RsE4nudE3q",
  "key21": "5aFmzNDTBDCdvVMSKNXBA37JHmhE2s22TvRAYjBJ1y9ktY5WkHLf3rCZovVo7cWnSPRCW3CTAurBz1HWxT2H2tJn",
  "key22": "5AEGJ3Qxv2ixcQDXTv9VahGZbmRHgLnDoMPAws7F3fJagdiABPk7HNSAuxCf1HD4FVJnZh8s2Lw6ahjGTAAHhQyo",
  "key23": "5u1MpHMt2YqKYHhtt7QVS45xBwSkB83EbqgHDZwAGAFjud8Rz1uAjnxZCoD6Zd4k3eqLxVx8H21cku24vDE9ww1",
  "key24": "34Ce5hFEaSMMJuM1KamknMs22nYsxsCK3A7UoALHcmxMCprHjegHcF39zQdNmAByJx5ieXDVfbo2DbESdbSiW1HE",
  "key25": "4mWFSDh9EbrigG3PDFmnak2kb8Ac2wGuFvgPj8RmRE8RScshAWFBDHwpYQYbasn6sStD6gEV9kt6dSTSCqkWzVjf",
  "key26": "4sECLKucKwspFNSWnva1rzmJ3EczxAcpsYssWKEpytdHeSMDAX8miCk3WnmxaaqWNohG6HswYFGtATEpKnxkCxFr",
  "key27": "3XfqkTNjU6eqF1apWayosWjD28vA9LMDz97KRwVLEdHYtPd2d8ejce1vgrWCfV53hNNZdsAP7EpMqzB7NXMTfwfM",
  "key28": "5hAno5AYY6t46G4aF9dxyk114jSS741BGkFjFMfWnTh4EjLqoyVUCkhQAEEJD6PLTSsjc4WLutfZ6cJfpjhcJRB1",
  "key29": "3sSnkNh9ddPrADfVm8paQMwFdr5rhPKmhvvYmYyDxWpK8AqXtPw3LzZLCUKY9qJiPWh69zieWFZvgbZd8XpgptwE",
  "key30": "2XBydfFc6cpArosHGQzijtjRZNcn4bD96gy6MEZbJWGACKqgv4Egf9Jf86urzBuQTbt9MX5sH2U2k8q1Pmgq4YLq",
  "key31": "5Jvk7yE3Bpszg9ypJwF1Bjn6ideJUnAvM75tuQqpo9zDXRrLCArJEVokWhXvKQv9JuMVWmo9JboeEqpWHUnprzoA",
  "key32": "5kEPKX9DYvyJ6S5YjppR6Mn66HcxoVrtRC93N2jFvpo8wadMZawaWF8oFbqg991EJy7phz6bJFxCj9dybepKp3AQ",
  "key33": "66EU6LthvnuFxbrkDRuo8EuocKSuwBur2Vw1CsmMg11PdDGahChhXp48fyKfJ39Vbn2bZ1aCEEPaQ3Z4kLoUM3L8",
  "key34": "5BxmXz9zVWazFLJZFCSRtnznk4QLG2M1QLa453SiFqu7d2RLfa8DLgMgh1ivwJ4rPg6SFQMGdtepHuwunc9BeQLe",
  "key35": "55jGRPHH41CoZA1ciPyBH3uqjK66Sxv5GPJy9xyaF8JvFHppXeq8bC4AqiUpj7aBGF7Q7pZAhH7w2hn4XRF4rJr",
  "key36": "3qnoYYhb8iu5KJjMZDDrb3sE3UqhhFudQDbnqS6j4L3vchbsHacMKz2MV3bijfEBCH9VpdM4dfuTNH1Cfc6i4KHG",
  "key37": "Nv2Pq9Zix9t3QLrQAJ1DWiwemxFtQXidP4EsSBrKSMdSvyFbYHnmZND8UuT7mFV8eQCoeEcMrQFNL1oP2zGSSCN",
  "key38": "38QDL9cetJVfLjiyhtz1zQ5qD9eT9FV3xob1sg2b8wDBtHKYxutS5WHsbgmbp1tGSkSLis6m9sJtuV2Rc4MgYgmT",
  "key39": "3mLHVaNy51rHLA29hyj7TX3HoeaWRZKX2BuLHjZeJyvDUNsbXxHxuD5omd32sqAbb6DuKDF6HzGSAF9gV3Nsgvx5",
  "key40": "51TFfi85vWE5E8LRwBt6oh3YJRe8qFvQXSMkSPYFoptasKk9Hdrd5P3t9GT2ENjLqdPfKsRTWJREdt1CUwzbgSj5",
  "key41": "UovyVHKu6Xjcw9nwiq3ycWNRWh7sBAErehNvuFs4FTxXEcWbbvuKhxnYsxyhCdMPmj5yJWfrLY7pU8c4vyQGhfe",
  "key42": "s9Mea1N6JhVcvXAjAhNNHSXzKmNg3Nnrx1BCUWGaFHGDBppdfuVFdjm5gjQc5a8yU7JfCaFKgeUi6SAquhD7yr3"
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
